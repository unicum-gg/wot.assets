(() => {
    'use strict';
    var __webpack_modules__ = {
            70: (e, t, u) => {
                u.d(t, { O: () => oe });
                var n = {};
                (u.r(n),
                    u.d(n, { mouse: () => E, off: () => _, on: () => d, onResize: () => l, onScaleUpdated: () => c }));
                var o = {};
                (u.r(o),
                    u.d(o, {
                        events: () => n,
                        getMouseGlobalPosition: () => D,
                        getSize: () => F,
                        graphicsQuality: () => C,
                        playSound: () => p,
                        setRTPC: () => A,
                    }));
                var r = {};
                (u.r(r), u.d(r, { getBgUrl: () => y, getTextureUrl: () => B }));
                var a = {};
                function s(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                (u.r(a),
                    u.d(a, {
                        addModelObserver: () => R,
                        addPreloadTexture: () => P,
                        arabic2roman: () => Z,
                        children: () => r,
                        displayStatus: () => w,
                        displayStatusIs: () => Q,
                        enableFullScreenModeSupported: () => ue,
                        events: () => S,
                        extraSize: () => ee,
                        forceTriggerMouseMove: () => q,
                        freezeTextureBeforeResize: () => V,
                        getBrowserTexturePath: () => N,
                        getDisplayStatus: () => Y,
                        getExternalPaddingsRem: () => J,
                        getFontNames: () => X,
                        getScale: () => z,
                        getSize: () => I,
                        getViewGlobalPosition: () => H,
                        initExternalPaddings: () => ne,
                        isEventHandled: () => K,
                        isFocused: () => U,
                        pxToRem: () => j,
                        remToPx: () => W,
                        resize: () => L,
                        sendEvent: () => O,
                        setAnimateWindow: () => G,
                        setEventHandled: () => $,
                        setInputPaddingsRem: () => x,
                        setSidePaddingsRem: () => M,
                        whenTutorialReady: () => te,
                    }));
                const l = s('clientResized'),
                    c = s('self.onScaleUpdated'),
                    d = (e, t) => engine.on(e, t),
                    _ = (e, t) => engine.off(e, t),
                    m = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') },
                    E = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && i(!1);
                        }
                        function u() {
                            e.enabled && i(!0);
                        }
                        function n() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', u))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', u))
                                : i(!1);
                        }
                        const o = ['down', 'up', 'move'].reduce(
                            (t, u) => (
                                (t[u] = (function (t) {
                                    return (u) => {
                                        e.listeners += 1;
                                        let o = !0;
                                        const r = `mouse${t}`,
                                            a = m[t]((e) => u([e, 'outside']));
                                        function s(e) {
                                            u([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, s),
                                            n(),
                                            () => {
                                                o &&
                                                    (a(),
                                                    window.removeEventListener(r, s),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (o = !1));
                                            }
                                        );
                                    };
                                })(u)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, o, {
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
                function p(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function A(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                function F(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function D(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const C = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    v = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    b = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    f = Object.keys(b).reduce((e, t) => ((e[t] = () => p(b[t])), e), {}),
                    g = { play: Object.assign({}, f, { sound: p }), setRTPC: A };
                var h = u(690);
                function B(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function y(e, t, u) {
                    return `url(${B(e, t, u)})`;
                }
                const w = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    S = {
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
                    k = ['args'],
                    T = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        o = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (o[u] = e[u]));
                                    return o;
                                })(t, k);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((n = o),
                                              Object.entries(n).map(([e, t]) => {
                                                  const u = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: u, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: u, name: e, bool: t };
                                                      default:
                                                          return { __Type: u, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    O = {
                        close(e) {
                            T('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            T(64);
                        },
                        move(e) {
                            T(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function P(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function x(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function N(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function R(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function M(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function I(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function L(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function H(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: W(t.x), y: W(t.y) };
                }
                function V() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function z() {
                    return viewEnv.getScale();
                }
                function j(e) {
                    return viewEnv.pxToRem(e);
                }
                function W(e) {
                    return viewEnv.remToPx(e);
                }
                function G(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function U() {
                    return viewEnv.isFocused();
                }
                function $() {
                    return viewEnv.setEventHandled();
                }
                function K() {
                    return viewEnv.isEventHandled();
                }
                function q() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Y() {
                    return viewEnv.getShowingStatus();
                }
                const X = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    Z = h.cg;
                function J() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const Q = Object.keys(w).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === w[t]), e), {}),
                    ee = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    te = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : S.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function ue() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function ne(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            u = t.top,
                            n = t.right,
                            o = t.bottom,
                            r = t.left;
                        (e.style.setProperty('--external-padding-top', `${u}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${o}rem`),
                            e.style.setProperty('--external-padding-left', `${r}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
                const oe = { view: a, client: o, sound: g, intl: v };
            },
            521: (e, t, u) => {
                let n, o;
                (u.d(t, { n: () => n }),
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
                    })(o || (o = {})));
            },
            690: (e, t, u) => {
                u.d(t, { HG: () => s, cg: () => r });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    o = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let t = '';
                    for (let u = o.length - 1; u >= 0; u--) for (; e >= o[u]; ) ((t += n[u]), (e -= o[u]));
                    return t;
                }
                const a = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    s = (e) => (a ? `${e}` : r(e));
            },
            358: (e, t, u) => {
                u.d(t, { Z: () => r });
                var n = u(70);
                class o {
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
                        return (window.__dataTracker || (window.__dataTracker = new o()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, t, u = 0, o = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, u, o);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(r) : (this._views[u] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
                        );
                    }
                    removeCallback(e, t = 0) {
                        let u = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((u = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            u || console.error("Can't remove callback by id:", e),
                            u
                        );
                    }
                    _emmitDataChanged(e, t, u) {
                        u.forEach((u) => {
                            const n = this._callbacks[u];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                o.__instance = void 0;
                const r = o;
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
            916: (e, t, u) => {
                u.d(t, { c1: () => B, Sw: () => r.Z, B0: () => s, ry: () => D, Eu: () => C, SW: () => f });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    u();
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
                        const u = e,
                            n = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== n)),
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
                const o = n;
                var r = u(358),
                    a = u(613);
                let s;
                var i;
                (((i = s || (s = {}))[(i.UNDEFINED = 0)] = 'UNDEFINED'),
                    (i[(i.TOOLTIP = 1)] = 'TOOLTIP'),
                    (i[(i.POP_OVER = 2)] = 'POP_OVER'),
                    (i[(i.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (i[(i.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (i[(i.MOVE = 16)] = 'MOVE'),
                    (i[(i.CLOSE = 32)] = 'CLOSE'),
                    (i[(i.MINIMIZE = 64)] = 'MINIMIZE'));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = u(521),
                    E = u(70);
                const p = ['args'];
                function A(e, t, u, n, o, r, a) {
                    try {
                        var s = e[r](a),
                            i = s.value;
                    } catch (e) {
                        return void u(e);
                    }
                    s.done ? t(i) : Promise.resolve(i).then(n, o);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                                        u = arguments;
                                    return new Promise(function (n, o) {
                                        var r = e.apply(t, u);
                                        function a(e) {
                                            A(r, n, o, a, s, 'next', e);
                                        }
                                        function s(e) {
                                            A(r, n, o, a, s, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
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
                    v = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        o = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (o[u] = e[u]));
                                    return o;
                                })(t, p);
                            void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((n = o),
                                              Object.entries(n).map(([e, t]) => {
                                                  const u = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          u.number = t;
                                                          break;
                                                      case 'boolean':
                                                          u.bool = t;
                                                          break;
                                                      default:
                                                          u.string = t.toString();
                                                  }
                                                  return u;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    b = () => v(s.CLOSE),
                    f = () => v(s.POP_OVER, { on: !1 }),
                    g = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var h = u(572);
                const B = o.instance,
                    y = {
                        DataTracker: r.Z,
                        ViewModel: h.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: _,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => v(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: f,
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            v(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, o = R.invalid('resId'), r) => {
                            const a = E.O.view.getViewGlobalPosition(),
                                i = u.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                d = i.width,
                                _ = i.height,
                                m = {
                                    x: E.O.view.pxToRem(l) + a.x,
                                    y: E.O.view.pxToRem(c) + a.y,
                                    width: E.O.view.pxToRem(d),
                                    height: E.O.view.pxToRem(_),
                                };
                            v(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: o,
                                direction: t,
                                bbox: F(m),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => g(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            g(e, b);
                        },
                        handleViewEvent: v,
                        onBindingsReady: D,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const o = Object.prototype.toString.call(t[n]);
                                    if (o.startsWith('[object CoherentArrayProxy]')) {
                                        const o = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < o.length; t++) u[n].push({ value: e(o[t].value) });
                                    } else
                                        o.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: B,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = y;
            },
            613: (e, t, u) => {
                u.d(t, { Ew: () => r, Z5: () => n, cy: () => o });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t, u = 2) => systemLocale.getRealFormat(e, t, u),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    },
                    r = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            983: (e, t, u) => {
                var n = {};
                (u.r(n),
                    u.d(n, {
                        Area: () => mt,
                        Bar: () => ct,
                        DefaultScroll: () => _t,
                        Direction: () => et,
                        defaultSettings: () => tt,
                        useHorizontalScrollApi: () => nt,
                    }));
                var o = {};
                (u.r(o), u.d(o, { Area: () => Bt, Bar: () => ft, Default: () => ht, useVerticalScrollApi: () => Et }));
                var r = u(363),
                    a = u.n(r),
                    s = u(533),
                    i = u.n(s),
                    l = u(483),
                    c = u.n(l),
                    d = u(916);
                const _ = [
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
                function m(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const u = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                u.number = t;
                                break;
                            case 'boolean':
                                u.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                u.string = t.toString();
                        }
                        return u;
                    });
                }
                const E = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: d.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    p = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            n = e.args,
                            o = e.onMouseEnter,
                            a = e.onMouseLeave,
                            s = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            p = void 0 !== d && d,
                            A = e.decoratorId,
                            F = void 0 === A ? 0 : A,
                            D = e.isEnabled,
                            C = void 0 === D || D,
                            v = e.targetId,
                            b = void 0 === v ? 0 : v,
                            f = e.onShow,
                            g = e.onHide,
                            h = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    o = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (o[u] = e[u]));
                                return o;
                            })(e, _);
                        const B = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, r.useMemo)(
                                () =>
                                    b ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let u,
                                            n = R.invalid('resId'),
                                            o = '';
                                        var r;
                                        return (
                                            t &&
                                                ((o =
                                                    (null == (r = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) ||
                                                    ''),
                                                (u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== u &&
                                                    window.subViews[u] &&
                                                    (n = window.subViews[u].id)),
                                            { callerUrl: o, caller: u, stack: t, resId: n }
                                        );
                                    })().resId,
                                [b],
                            ),
                            w = (0, r.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (E(u, F, { isMouseEvent: !0, on: !0, arguments: m(n) }, y),
                                    f && f(),
                                    (B.current.isVisible = !0));
                            }, [u, F, n, y, f]),
                            S = (0, r.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        E(u, F, { on: !1 }, y),
                                        B.current.isVisible && g && g(),
                                        (B.current.isVisible = !1));
                                }
                            }, [u, F, y, g]),
                            k = (0, r.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(B.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const e = B.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', k, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', k, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === C && S();
                            }, [C, S]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        (window.removeEventListener('mouseleave', S), S());
                                    }
                                ),
                                [S],
                            ),
                            C
                                ? (0, r.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((T = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          (clearTimeout(B.current.timeoutId),
                                                          (B.current.timeoutId = window.setTimeout(w, c ? 100 : 400)),
                                                          o && o(e),
                                                          T && T(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  (S(), null == a || a(t), null == e || e(t));
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  (!1 === p && S(), null == i || i(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === p && S(), null == s || s(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : t
                        );
                        var T;
                    },
                    A = ['children'];
                function F() {
                    return (
                        (F =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        F.apply(this, arguments)
                    );
                }
                const D = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    o = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (o[u] = e[u]));
                                return o;
                            })(e, A);
                        return a().createElement(
                            p,
                            F(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                u,
                            ),
                            t,
                        );
                    },
                    C = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                }
                const b = R.views.common.tooltip_window.simple_tooltip_content,
                    f = (e) => {
                        let t = e.children,
                            u = e.body,
                            n = e.header,
                            o = e.note,
                            s = e.alert,
                            i = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    o = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (o[u] = e[u]));
                                return o;
                            })(e, C);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, i, { body: u, header: n, note: o, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, u, n, o, i]);
                        return a().createElement(
                            p,
                            v(
                                {
                                    contentId:
                                        ((d = null == i ? void 0 : i.hasHtmlContent),
                                        d ? b.SimpleTooltipHtmlContent('resId') : b.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var d;
                    };
                function g() {
                    return (
                        (g =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        g.apply(this, arguments)
                    );
                }
                const h = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = a().createElement('div', { className: u }, e);
                    if (t.header || t.body) return a().createElement(f, t, n);
                    const o = t.contentId;
                    return o ? a().createElement(p, g({}, t, { contentId: o }), n) : a().createElement(D, t, n);
                };
                function B(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                let y;
                function w(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(y || (y = {}));
                const S = {
                        playHighlight() {
                            w('highlight');
                        },
                        playClick() {
                            w('play');
                        },
                        playYes() {
                            w('yes1');
                        },
                    },
                    k = {
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
                let T, O;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(T || (T = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(O || (O = {})));
                const P = ({
                        children: e,
                        size: t,
                        disabled: u,
                        mixClass: n,
                        onMouseEnter: o,
                        onMouseMove: s,
                        onMouseDown: i,
                        onMouseUp: l,
                        onMouseLeave: d,
                        onClick: _,
                        isFocused: m = !1,
                        type: E = T.primary,
                        soundHover: p = 'highlight',
                        soundClick: A = 'play',
                    }) => {
                        const F = (0, r.useRef)(null),
                            D = (0, r.useState)(m),
                            C = D[0],
                            v = D[1],
                            b = (0, r.useState)(!1),
                            f = b[0],
                            g = b[1];
                        return (
                            (0, r.useEffect)(() => {
                                function e(e) {
                                    C && null !== F.current && !F.current.contains(e.target) && v(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', e),
                                    () => {
                                        document.removeEventListener('mousedown', e);
                                    }
                                );
                            }, [C]),
                            (0, r.useEffect)(() => {
                                v(m);
                            }, [m]),
                            a().createElement(
                                'div',
                                {
                                    ref: F,
                                    className: c()(
                                        k.base,
                                        k[`base__${E}`],
                                        u && k.base__disabled,
                                        t && k[`base__${t}`],
                                        C && k.base__focus,
                                        f && k.base__highlightActive,
                                        n,
                                    ),
                                    onMouseEnter: function (e) {
                                        u || (null !== p && w(p), o && o(e));
                                    },
                                    onMouseMove: function (e) {
                                        s && s(e);
                                    },
                                    onMouseUp: function (e) {
                                        u || (l && l(e), g(!1));
                                    },
                                    onMouseDown: function (e) {
                                        if (u) return;
                                        const t = e.button === y.LEFT;
                                        (null !== A && t && w(A),
                                            i && i(e),
                                            m && (u || (F.current && (F.current.focus(), v(!0)))),
                                            t && g(!0));
                                    },
                                    onMouseLeave: function (e) {
                                        u || (d && d(e), g(!1));
                                    },
                                    onClick: function (e) {
                                        u || (_ && _(e));
                                    },
                                },
                                E !== T.ghost &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement('div', { className: k.back }),
                                        a().createElement('span', { className: k.texture }),
                                    ),
                                a().createElement(
                                    'span',
                                    { className: c()(k.state, k.state__default) },
                                    a().createElement('span', { className: k.stateDisabled }),
                                    a().createElement('span', { className: k.stateHighlightHover }),
                                    a().createElement('span', { className: k.stateHighlightActive }),
                                ),
                                a().createElement(
                                    'span',
                                    { className: k.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    e,
                                ),
                            )
                        );
                    },
                    x = {
                        base: 'Counter_base_9e',
                        show: 'Counter_show_be',
                        base__big: 'Counter_base__big_19',
                        base__small: 'Counter_base__small_3b',
                        base__empty: 'Counter_base__empty_98',
                        base__animated: 'Counter_base__animated_40',
                        base__hidden: 'Counter_base__hidden_56',
                        hide: 'Counter_hide_b6',
                        bg: 'Counter_bg_74',
                        value: 'Counter_value_3e',
                        value__text: 'Counter_value__text_d6',
                        base__pattern: 'Counter_base__pattern_71',
                        plus: 'Counter_plus_15',
                        pattern: 'Counter_pattern_83',
                    },
                    N = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        M.apply(this, arguments)
                    );
                }
                const I = (e) => {
                        let t = e.value,
                            u = e.isEmpty,
                            n = void 0 !== u && u,
                            o = e.className,
                            r = e.size,
                            s = void 0 === r ? 'normal' : r,
                            i = e.fadeInAnimation,
                            l = void 0 !== i && i,
                            d = e.hide,
                            _ = void 0 !== d && d,
                            m = e.maximumNumber,
                            E = void 0 === m ? 99 : m,
                            p = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    o = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (o[u] = e[u]));
                                return o;
                            })(e, N);
                        const A = n ? null : t,
                            F = 'string' == typeof A;
                        if ((A && !F && A < 0) || 0 === A) return null;
                        const D = A && !F && A > E,
                            C = c()(
                                x.base,
                                x[`base__${s}`],
                                l && x.base__animated,
                                _ && x.base__hidden,
                                !A && x.base__pattern,
                                n && x.base__empty,
                                o,
                            );
                        return a().createElement(
                            'div',
                            M({ className: C }, p),
                            a().createElement('div', { className: x.bg }),
                            a().createElement('div', { className: x.pattern }),
                            a().createElement(
                                'div',
                                { className: c()(x.value, F && x.value__text) },
                                D ? E : A,
                                D && a().createElement('span', { className: x.plus }, '+'),
                            ),
                        );
                    },
                    L = ['isActive', 'counter', 'className', 'children', 'type', 'size', 'hasIndicator'];
                function H() {
                    return (
                        (H =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        H.apply(this, arguments)
                    );
                }
                const V = a().memo(function (e) {
                        let t = e.isActive,
                            u = e.counter,
                            n = e.className,
                            o = e.children,
                            r = e.type,
                            s = void 0 === r ? T.secondary : r,
                            i = e.size,
                            l = void 0 === i ? O.small : i,
                            d = e.hasIndicator,
                            _ = void 0 === d || d,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    o = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (o[u] = e[u]));
                                return o;
                            })(e, L);
                        return a().createElement(
                            'div',
                            { className: c()('ToggleButton_base_35', n, t && 'ToggleButton_base__active_1e') },
                            a().createElement(P, H({ type: s, size: l, mixClass: 'ToggleButton_button_4d' }, m), o),
                            a().createElement('div', { className: 'ToggleButton_overlay_50' }),
                            _ && a().createElement('div', { className: 'ToggleButton_indicator_8f' }),
                            Boolean(u) &&
                                a().createElement(
                                    'div',
                                    { className: 'ToggleButton_counter_01' },
                                    a().createElement(I, { value: u, size: 'small' }),
                                ),
                        );
                    }),
                    z = ({ label: e, hasDiscount: t, className: u }) =>
                        a().createElement(
                            'div',
                            { className: c()('FilterTitle_base_1d', u) },
                            a().createElement('div', { className: 'FilterTitle_label_3a' }, e),
                            t &&
                                a().createElement(
                                    'div',
                                    { className: 'FilterTitle_discount_dd' },
                                    a().createElement('div', { className: 'FilterTitle_discountIcon_23' }),
                                ),
                        );
                let j, W;
                function G(e) {
                    return e.replace(/-/g, '_');
                }
                (u(281),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(j || (j = {})),
                    new RegExp(
                        [
                            /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                            /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                            /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                            /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                        ]
                            .map((e) => e.source)
                            .join('|'),
                        'gum',
                    ),
                    (function (e) {
                        ((e.Default = 'default'),
                            (e.Nation = 'nation'),
                            (e.Location = 'location'),
                            (e.TankmanRole = 'tankmanRole'),
                            (e.TankmanKind = 'tankmanKind'),
                            (e.VehicleGrade = 'vehicleGrade'),
                            (e.VehicleTier = 'vehicleTier'),
                            (e.VehicleType = 'vehicleType'),
                            (e.PersonalDataType = 'personalDataType'),
                            (e.VehicleCD = 'vehicle'));
                    })(W || (W = {})));
                const U = a().memo(function ({ icon: e, isSmall: t = !1, classNames: u }) {
                    return a().createElement(
                        'div',
                        { className: c()('ToggleIcon_base_6b', t && 'ToggleIcon_base__small_b0') },
                        a().createElement('div', {
                            className: c()('ToggleIcon_icon_8b', null == u ? void 0 : u.icon),
                            style: { backgroundImage: `url(${e})` },
                        }),
                    );
                });
                var $ = u(690);
                const K = ({ level: e, isSmall: t = !1 }) =>
                        a().createElement(
                            'div',
                            { className: c()('VehicleTier_base_17', t && 'VehicleTier_base__small_f2') },
                            (0, $.HG)(e),
                        ),
                    q = {
                        icon__vehicleType: 'ToggleButtonIcon_icon__vehicleType_0e',
                        icon__nation: 'ToggleButtonIcon_icon__nation_48',
                        icon__vehicleGradePrimary: 'ToggleButtonIcon_icon__vehicleGradePrimary_7a',
                        icon__tankmanRole: 'ToggleButtonIcon_icon__tankmanRole_3f',
                        icon__selected: 'ToggleButtonIcon_icon__selected_27',
                        icon__tankmanKind: 'ToggleButtonIcon_icon__tankmanKind_ac',
                        icon__vehicleGradeElite: 'ToggleButtonIcon_icon__vehicleGradeElite_c1',
                        icon__locationRecruit: 'ToggleButtonIcon_icon__locationRecruit_89',
                        icon__locationTankman: 'ToggleButtonIcon_icon__locationTankman_ce',
                        icon__personalDataType: 'ToggleButtonIcon_icon__personalDataType_e8',
                        icon__tankmanKindDismissed: 'ToggleButtonIcon_icon__tankmanKindDismissed_7e',
                        icon__vehicleGradePremium: 'ToggleButtonIcon_icon__vehicleGradePremium_37',
                    },
                    Y = ({ id: e, icon: t, type: u, isSmall: n = !0, isSelected: o = !1 }) => {
                        return u === W.VehicleTier
                            ? a().createElement(K, { isSmall: n, level: Number(e) })
                            : a().createElement(U, {
                                  icon: t,
                                  isSmall: n,
                                  classNames: {
                                      icon: c()(
                                          q[`icon__${u}`],
                                          q[`icon__${u}${((r = e), r[0].toUpperCase() + r.slice(1))}`],
                                          o && q.icon__selected,
                                      ),
                                  },
                              });
                        var r;
                    },
                    X = {
                        base: 'FilterToggleGroup_base_59',
                        title: 'FilterToggleGroup_title_d0',
                        content: 'FilterToggleGroup_content_6c',
                        toggle: 'FilterToggleGroup_toggle_3b',
                        base__inPopup: 'FilterToggleGroup_base__inPopup_e0',
                    };
                function Z() {
                    return (
                        (Z =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Z.apply(this, arguments)
                    );
                }
                let J;
                !(function (e) {
                    ((e.Default = 'default'), (e.InPopup = 'inPopup'));
                })(J || (J = {}));
                const Q = ({ header: e, body: t, contentId: u, targetId: n }) =>
                        u
                            ? { contentId: u, targetId: n }
                            : t || e
                              ? { header: null != e ? e : void 0, body: null != t ? t : void 0 }
                              : void 0,
                    ee = ({
                        id: e,
                        type: t,
                        label: u,
                        hasDiscount: n,
                        filters: o,
                        onClick: r,
                        className: s,
                        toggleProps: i,
                        theme: l = J.Default,
                    }) => {
                        const d = l === J.InPopup;
                        return a().createElement(
                            'div',
                            { className: c()(X.base, X[`base__${l}`], s) },
                            d && a().createElement(z, { className: X.title, label: u, hasDiscount: n }),
                            a().createElement(
                                'div',
                                { className: X.content },
                                B(o, ({ id: u, isSelected: n, tooltip: o, icon: s, counter: l }) =>
                                    a().createElement(
                                        h,
                                        { key: u, tooltipArgs: Q(o), className: X.toggle },
                                        a().createElement(
                                            V,
                                            Z({}, i, {
                                                className: c()(X.toggle, null == i ? void 0 : i.className),
                                                isActive: n,
                                                onClick: () => (null == r ? void 0 : r(e, u)),
                                                counter: l,
                                            }),
                                            a().createElement(Y, {
                                                id: u,
                                                icon: s,
                                                type: t,
                                                isSmall: d,
                                                isSelected: n,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    };
                var te = u(70);
                const ue = (e) => {
                        (0, r.useEffect)(e, []);
                    },
                    ne = {
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
                var oe;
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(oe || (oe = {}));
                const re = ['__left', '__right', '__top', '__bottom'],
                    ae = (0, r.forwardRef)(
                        (
                            {
                                children: e,
                                disableAutoSizeUpdate: t,
                                onOutsideClick: u,
                                className: n,
                                customStyles: o = {},
                            },
                            s,
                        ) => {
                            const i = (0, r.useRef)(null),
                                l = (0, r.useRef)(null),
                                _ = (0, r.useRef)(null),
                                m = (0, r.useState)(window.decorator && window.decorator.directionType),
                                E = m[0],
                                p = m[1],
                                A = (0, r.useCallback)(() => {
                                    (S.playClick(), te.O.view.sendEvent.close());
                                }, []),
                                F = (0, r.useCallback)(() => {
                                    S.playHighlight();
                                }, []),
                                D = c()(ne.arrow, ne[`arrow${re[E]}`]);
                            ue(
                                () => (
                                    te.O.client.events.mouse.enableOutside(),
                                    te.O.client.events.mouse.down(([, e]) => {
                                        'outside' === e && (u ? u() : te.O.view.sendEvent.close('popover'));
                                    })
                                ),
                            );
                            const C = (0, r.useCallback)(
                                    (e) => {
                                        let t = e.target;
                                        do {
                                            if (t === i.current || t === _.current) return;
                                            t = t.parentNode;
                                        } while (t);
                                        const n = window.decorator;
                                        if (void 0 !== window.decorator) {
                                            const e = te.O.client.getMouseGlobalPosition(),
                                                t = ![n.boundX, n.boundY, n.boundWidth, n.boundHeight].includes(void 0),
                                                u =
                                                    e.x < n.boundX ||
                                                    e.x > n.boundX + n.boundWidth ||
                                                    e.y > n.boundY + n.boundHeight ||
                                                    e.y < n.boundY;
                                            if (t && !u) return;
                                        }
                                        u ? u() : te.O.view.sendEvent.close('popover');
                                    },
                                    [i, _, u],
                                ),
                                v = (0, r.useCallback)(() => {
                                    p(window.decorator.directionType);
                                }, []),
                                b = (function () {
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
                                                                ((e.current = 0), t());
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
                                })(),
                                g = (0, r.useCallback)(() => {
                                    const e = l.current;
                                    if (e)
                                        return (
                                            te.O.view.freezeTextureBeforeResize(),
                                            b.run(() => {
                                                const t = e.scrollWidth,
                                                    u = e.scrollHeight;
                                                (te.O.view.resize(t, u), v());
                                            })
                                        );
                                }, [b, v]);
                            return (
                                (0, r.useImperativeHandle)(
                                    s,
                                    () => ({ updateSize: g, updateDirection: v, elementRef: l }),
                                    [g, v],
                                ),
                                ue(() => {
                                    te.O.view.setInputPaddingsRem(58);
                                }),
                                (0, r.useEffect)(() => {
                                    document.addEventListener('mousedown', C, { capture: !0 });
                                    const e = ((e) => {
                                        let t = !1;
                                        return {
                                            promise: new Promise((u, n) => {
                                                e.then((e) => !t && u(e)).catch((e) => !t && n(e));
                                            }),
                                            cancel() {
                                                t = !0;
                                            },
                                        };
                                    })((0, d.Eu)());
                                    return (
                                        !t && e.promise.then(() => g()),
                                        () => {
                                            (e.cancel(), document.removeEventListener('mousedown', C));
                                        }
                                    );
                                }, [g, C, t]),
                                a().createElement(
                                    'div',
                                    { className: c()(ne.base, n), ref: l },
                                    a().createElement(
                                        'div',
                                        { className: ne.decorator },
                                        a().createElement(
                                            'div',
                                            { className: ne.content, ref: i },
                                            e,
                                            window.decorator &&
                                                window.decorator.isCloseBtnVisible &&
                                                a().createElement(
                                                    f,
                                                    { body: R.strings.dialogs.common.error.cancel() },
                                                    a().createElement('div', {
                                                        className: ne.closeBtn,
                                                        onClick: A,
                                                        onMouseEnter: F,
                                                        ref: _,
                                                    }),
                                                ),
                                        ),
                                        a().createElement('div', { className: D, style: o.arrow }),
                                    ),
                                )
                            );
                        },
                    ),
                    se = (e) => {
                        let t,
                            u = null;
                        return (
                            (u = requestAnimationFrame(() => {
                                u = requestAnimationFrame(() => {
                                    ((u = null), (t = e()));
                                });
                            })),
                            () => {
                                ('function' == typeof t && t(), null !== u && cancelAnimationFrame(u));
                            }
                        );
                    };
                var ie = u(521);
                const le = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ce(e = ie.n.NONE, t = le, u = !1, n = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== ie.n.NONE)
                            return (
                                window.addEventListener('keydown', o, u),
                                () => {
                                    window.removeEventListener('keydown', o, u);
                                }
                            );
                        function o(o) {
                            if (o.keyCode === e) {
                                if (!n && te.O.view.isEventHandled()) return;
                                (te.O.view.setEventHandled(), t(o), u && o.stopPropagation());
                            }
                        }
                    }, [t, e, u, n]);
                }
                var de = u(515);
                function _e() {
                    return !1;
                }
                console.log;
                var me = u(174);
                function Ee(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const pe = (e) => (0 === e ? window : window.subViews.get(e)),
                    Ae = ((e, t) => {
                        const u = (0, r.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: n, children: o, mocks: s }) {
                                const i = (0, r.useRef)([]),
                                    l = (e, u, n) => {
                                        var o;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = pe,
                                                context: n = 'model',
                                            } = {}) {
                                                const o = new Map();
                                                function r(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? o.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                        u.forEach((t) => {
                                                            const u = o.get(t);
                                                            void 0 !== u && u(e);
                                                        });
                                                    });
                                                });
                                                const a = (e) => {
                                                    const o = u(t),
                                                        r = n.split('.').reduce((e, t) => e[t], o);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (u, r) => {
                                                        const s = 'string' == typeof r ? `${n}.${r}` : n,
                                                            i = te.O.view.addModelObserver(s, t, !0);
                                                        return (o.set(i, u), e && u(a(r)), i);
                                                    },
                                                    readByPath: a,
                                                    createCallback: (e, t) => {
                                                        const u = a(t);
                                                        return (...t) => {
                                                            u(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = a(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                u = (function (e, t) {
                                                                    var u =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (u) return (u = u.call(e)).next.bind(u);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (u = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return Ee(e, t);
                                                                                var u = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === u &&
                                                                                        e.constructor &&
                                                                                        (u = e.constructor.name),
                                                                                    'Map' === u || 'Set' === u
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === u ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                u,
                                                                                            )
                                                                                          ? Ee(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        u && (e = u);
                                                                        var n = 0;
                                                                        return function () {
                                                                            return n >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[n++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(o.keys());
                                                            !(e = u()).done;
                                                        )
                                                            r(e.value, t);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(u),
                                            a =
                                                'real' === e
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (o = null == n ? void 0 : n.getter)
                                                                  ? o
                                                                  : () => {},
                                                      }),
                                            s = (t) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(t)) : a.readByPath(t),
                                            l = (e) => i.current.push(e),
                                            c = (({ observableModel: e }) =>
                                                Object.assign(
                                                    {},
                                                    e.primitives([
                                                        'vehicleSortColumn',
                                                        'isVehicleSortAscending',
                                                        'canResetFilter',
                                                        'canApplyFilter',
                                                        'selectedLastDays',
                                                        'isPrimeTime',
                                                    ]),
                                                    {
                                                        filterGroups: e.array('filterGroups'),
                                                        vehicles: e.array('vehicles'),
                                                    },
                                                ))({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: a,
                                                observableModel: {
                                                    dict: (t) => {
                                                        const u = s(t),
                                                            n = me.LO.box(u, { equals: _e });
                                                        return (
                                                            'real' === e &&
                                                                a.subscribe(
                                                                    (0, me.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    array: (t, u) => {
                                                        const n = null != u ? u : s(t),
                                                            o = me.LO.box(n, { equals: _e });
                                                        return (
                                                            'real' === e &&
                                                                a.subscribe(
                                                                    (0, me.aD)((e) => o.set(e)),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (t, u) => {
                                                        const n = null != u ? u : s(t),
                                                            o = me.LO.box(n, { equals: _e });
                                                        return (
                                                            'real' === e &&
                                                                a.subscribe(
                                                                    (0, me.aD)((e) => o.set(e)),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (t, u) => {
                                                        const n = s(u);
                                                        if (Array.isArray(t)) {
                                                            const o = t.reduce(
                                                                (e, t) => ((e[t] = me.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    a.subscribe(
                                                                        (0, me.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                o[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = t,
                                                                r = Object.entries(o),
                                                                s = r.reduce(
                                                                    (e, [t, u]) => ((e[u] = me.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    a.subscribe(
                                                                        (0, me.aD)((e) => {
                                                                            r.forEach(([t, u]) => {
                                                                                s[u].set(e[t]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: l,
                                            }),
                                            d = { mode: e, model: c, externalModel: a, cleanup: l };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && n ? n.controls(d) : t(d),
                                            externalModel: a,
                                            mode: e,
                                        };
                                    },
                                    c = (0, r.useRef)(!1),
                                    d = (0, r.useState)(e),
                                    _ = d[0],
                                    m = d[1],
                                    E = (0, r.useState)(() => l(e, n, s)),
                                    p = E[0],
                                    A = E[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        c.current ? A(l(_, n, s)) : (c.current = !0);
                                    }, [s, _, n]),
                                    (0, r.useEffect)(() => {
                                        m(e);
                                    }, [e]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            (p.externalModel.dispose(), i.current.forEach((e) => e()));
                                        },
                                        [p],
                                    ),
                                    a().createElement(u.Provider, { value: p }, o)
                                );
                            },
                            () => (0, r.useContext)(u),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        selectLastDaysOption: e.createCallback((e) => ({ count: e }), 'onLastDaysOptionSelect'),
                        selectCheckbox: e.createCallback((e) => ({ checkboxId: e }), 'onCheckboxSelect'),
                        sortVehiclesByColumn: e.createCallback((e) => ({ column: e }), 'onSortVehiclesByColumn'),
                        updateFilter: e.createCallback((e, t) => ({ groupID: e, toggleID: t }), 'onUpdateFilter'),
                        selectVehicle: e.createCallback((e) => ({ vehicleCD: e }), 'onSelectVehicle'),
                        resetFilter: e.createCallbackNoArgs('onResetFilter'),
                        applyFilter: e.createCallbackNoArgs('onApplyFilter'),
                    })),
                    Fe = Ae[0],
                    De = Ae[1];
                let Ce, ve, be;
                (!(function (e) {
                    ((e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(Ce || (Ce = {})),
                    (function (e) {
                        ((e.primary = 'primary'), (e.main = 'main'));
                    })(ve || (ve = {})),
                    (function (e) {
                        ((e.Center = 'center'), (e.Bottom = 'bottom'));
                    })(be || (be = {})));
                const fe = {
                        base: 'Checkbox_base_36',
                        base__disabled: 'Checkbox_base__disabled_08',
                        base__center: 'Checkbox_base__center_52',
                        base__bottom: 'Checkbox_base__bottom_28',
                        input: 'Checkbox_input_37',
                        base__mouseDown: 'Checkbox_base__mouseDown_45',
                        base__small: 'Checkbox_base__small_18',
                        base__medium: 'Checkbox_base__medium_12',
                        base__large: 'Checkbox_base__large_f7',
                        base__extraLarge: 'Checkbox_base__extraLarge_c9',
                        alertOverlay: 'Checkbox_alertOverlay_52',
                        base__alert: 'Checkbox_base__alert_b7',
                        blink: 'Checkbox_blink_5e',
                        base__checked: 'Checkbox_base__checked_a2',
                        inputHoverOverlay: 'Checkbox_inputHoverOverlay_36',
                        highlight: 'Checkbox_highlight_b8',
                        base__main: 'Checkbox_base__main_3a',
                        base__primary: 'Checkbox_base__primary_ab',
                        checkmark: 'Checkbox_checkmark_60',
                        fadeIn: 'Checkbox_fadeIn_1a',
                        label: 'Checkbox_label_bc',
                        labelContent: 'Checkbox_labelContent_64',
                    },
                    ge = [
                        'id',
                        'isChecked',
                        'isDisabled',
                        'isAlert',
                        'size',
                        'type',
                        'soundHover',
                        'soundClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onClick',
                        'onChange',
                        'onFocus',
                        'onBlur',
                        'text',
                        'contentStyles',
                        'children',
                        'alignment',
                    ];
                function he() {
                    return (
                        (he =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        he.apply(this, arguments)
                    );
                }
                const Be = (e) => {
                    let t = e.id,
                        u = e.isChecked,
                        n = void 0 !== u && u,
                        o = e.isDisabled,
                        s = void 0 !== o && o,
                        i = e.isAlert,
                        l = void 0 !== i && i,
                        d = e.size,
                        _ = void 0 === d ? Ce.medium : d,
                        m = e.type,
                        E = void 0 === m ? ve.primary : m,
                        p = e.soundHover,
                        A = void 0 === p ? 'highlight' : p,
                        F = e.soundClick,
                        D = void 0 === F ? 'play' : F,
                        C = e.onMouseEnter,
                        v = e.onMouseLeave,
                        b = e.onMouseUp,
                        f = e.onMouseDown,
                        g = e.onClick,
                        h = e.onChange,
                        B = e.onFocus,
                        S = e.onBlur,
                        k = e.text,
                        T = e.contentStyles,
                        O = e.children,
                        P = e.alignment,
                        x = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                o = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (o[u] = e[u]));
                            return o;
                        })(e, ge);
                    const N = (0, r.useState)(!1),
                        R = N[0],
                        M = N[1],
                        I = (0, r.useState)(!1),
                        L = (I[0], I[1]),
                        H = (0, r.useCallback)(
                            (e) => {
                                s || (h && h(), g && g(e));
                            },
                            [s, h, g],
                        ),
                        V = (0, r.useCallback)(
                            (e) => {
                                const t = e.button === y.LEFT;
                                s || (t && M(!0), t && f && f(e), D && w(D));
                            },
                            [s, f, D],
                        ),
                        z = (0, r.useCallback)(
                            (e) => {
                                s || (M(!1), b && b(e));
                            },
                            [s, b],
                        ),
                        j = (0, r.useCallback)(
                            (e) => {
                                s || (C && C(e), A && w(A));
                            },
                            [s, C, A],
                        ),
                        W = (0, r.useCallback)(
                            (e) => {
                                s || (M(!1), v && v(e));
                            },
                            [s, v],
                        ),
                        G = (0, r.useCallback)(
                            (e) => {
                                s || (L(!0), B && B(e));
                            },
                            [s, B],
                        ),
                        U = (0, r.useCallback)(
                            (e) => {
                                s || (L(!1), S && S(e));
                            },
                            [s, S],
                        ),
                        $ = a().createElement(
                            'div',
                            { className: fe.label },
                            a().createElement(
                                'div',
                                { className: c()(fe.labelContent, 's-labelContent'), style: T },
                                k || O,
                            ),
                        );
                    return a().createElement(
                        'div',
                        he(
                            {
                                id: t,
                                className: c()(fe.base, fe[`base__${_}`], fe[`base__${E}`], {
                                    [fe.base__checked]: n,
                                    [fe.base__disabled]: s,
                                    [fe.base__mouseDown]: R,
                                    [fe.base__alert]: l,
                                    [fe.base__center]: P === be.Center,
                                    [fe.base__bottom]: P === be.Bottom,
                                }),
                                onClick: H,
                                onMouseEnter: j,
                                onMouseLeave: W,
                                onMouseDown: V,
                                onMouseUp: z,
                                onFocus: G,
                                onBlur: U,
                            },
                            x,
                        ),
                        a().createElement(
                            'div',
                            { className: fe.input },
                            a().createElement('div', { className: fe.alertOverlay }),
                            a().createElement('div', { className: fe.inputHoverOverlay }),
                            a().createElement('div', { className: fe.highlight }),
                        ),
                        a().createElement('div', { className: fe.checkmark }),
                        ((k || O) && $) || null,
                    );
                };
                let ye, we;
                (!(function (e) {
                    ((e.Name = 'name'), (e.Tier = 'tier'), (e.Type = 'type'));
                })(ye || (ye = {})),
                    (function (e) {
                        e[(e.PrimeTime = 0)] = 'PrimeTime';
                    })(we || (we = {})));
                const Se = (0, de.Pi)(({ className: e }) => {
                        const t = De(),
                            u = t.model,
                            n = t.controls;
                        return a().createElement(
                            'div',
                            { className: c()('CheckboxesList_base_8e', e) },
                            a().createElement(
                                Be,
                                { isChecked: u.isPrimeTime.get(), onClick: () => n.selectCheckbox(we.PrimeTime) },
                                R.strings.replays.filterPopover.checkboxes.primeTime(),
                            ),
                        );
                    }),
                    ke = {
                        header: R.strings.replays.filterPanel.counter.reset.header(),
                        body: R.strings.replays.filterPanel.counter.reset.body(),
                    },
                    Te = {
                        header: R.strings.replays.filterPanel.counter.apply.header(),
                        body: R.strings.replays.filterPanel.counter.apply.body(),
                    },
                    Oe = (0, de.Pi)(({ className: e }) => {
                        const t = De(),
                            u = t.model,
                            n = t.controls;
                        return a().createElement(
                            f,
                            Te,
                            a().createElement(
                                P,
                                {
                                    onClick: n.applyFilter,
                                    type: T.primaryGreen,
                                    size: O.small,
                                    disabled: !u.canApplyFilter.get(),
                                    mixClass: c()('ApplyButton_base_7a', e),
                                },
                                R.strings.replays.filter.apply(),
                            ),
                        );
                    }),
                    Pe = (0, de.Pi)(({ className: e }) => {
                        const t = De(),
                            u = t.model,
                            n = t.controls;
                        return a().createElement(
                            f,
                            ke,
                            a().createElement(
                                P,
                                {
                                    onClick: n.resetFilter,
                                    type: T.secondary,
                                    size: O.small,
                                    disabled: !u.canResetFilter.get(),
                                    mixClass: c()('ResetButton_base_15', e),
                                },
                                R.strings.replays.filter.reset(),
                            ),
                        );
                    }),
                    xe = 'Footer_button_27',
                    Ne = () =>
                        a().createElement(
                            'div',
                            { className: 'Footer_base_9a' },
                            a().createElement('div', { className: xe }, a().createElement(Pe, null)),
                            a().createElement('div', { className: xe }, a().createElement(Oe, null)),
                        );
                var Re = u(613);
                (Date.now(), Re.Ew.getRegionalDateTime, Re.Ew.getFormattedDateTime);
                let Me;
                (d.Sw.instance,
                    (function (e) {
                        ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                    })(Me || (Me = {})),
                    d.Sw.instance);
                const Ie = (e, t) => {
                        const u = (0, r.useRef)();
                        return (
                            (0, r.useEffect)(() => {
                                (t && !t(e)) || (u.current = e);
                            }, [t, e]),
                            u.current
                        );
                    },
                    Le = (e, t) => {
                        const u = Array.isArray(e) ? e : [e];
                        return !t && u.length > 1 ? u.slice(0, 1) : u;
                    },
                    He = [];
                function Ve(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, t.current)(...e), He)
                    );
                }
                let ze, je;
                (!(function (e) {
                    ((e.Basic = 'basic'),
                        (e.Disabled = 'disabled'),
                        (e.Focused = 'focused'),
                        (e.Alert = 'alert'),
                        (e.Selected = 'selected'));
                })(ze || (ze = {})),
                    (function (e) {
                        ((e.ExtraSmall = 'extraSmall'), (e.Small = 'small'), (e.Medium = 'medium'));
                    })(je || (je = {})));
                const We = ['content', 'classMix', 'className'];
                function Ge() {
                    return (
                        (Ge =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ge.apply(this, arguments)
                    );
                }
                const Ue = (e) => {
                        let t = e.content,
                            u = e.classMix,
                            n = e.className,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    o = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (o[u] = e[u]));
                                return o;
                            })(e, We);
                        const s = (0, r.useRef)(null),
                            i = (0, r.useState)(!0),
                            l = i[0],
                            d = i[1];
                        return (
                            (0, r.useEffect)(() =>
                                se(() => {
                                    const e = s.current;
                                    e && e.offsetWidth >= e.scrollWidth && d(!1);
                                }),
                            ),
                            a().createElement(
                                f,
                                { isEnabled: l, body: t },
                                a().createElement(
                                    'div',
                                    Ge({}, o, { ref: s, className: c()('TextOverflow_base_3b', n, u) }),
                                    t,
                                ),
                            )
                        );
                    },
                    $e = {
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
                let Ke;
                !(function (e) {
                    ((e.Out = 'out'), (e.Over = 'over'), (e.Down = 'down'));
                })(Ke || (Ke = {}));
                const qe = (0, r.memo)(
                        ({
                            parentId: e,
                            variant: t = ze.Basic,
                            size: u = je.Medium,
                            isOpen: n,
                            placeholder: o = R.strings.common.dropdown.placeholder.select(),
                            label: s = '',
                            classMix: i,
                            onClick: l,
                            soundHover: d,
                            soundClick: _,
                            customControl: m,
                        }) => {
                            const E = (0, r.useState)(Ke.Out),
                                p = E[0],
                                A = E[1],
                                F = (0, r.useState)(!1),
                                D = F[0],
                                C = F[1],
                                v = t === ze.Disabled,
                                b = v || t === ze.Basic,
                                f = (0, r.useCallback)(() => {
                                    v || (A(Ke.Over), d && w(d));
                                }, [v, d]),
                                g = (0, r.useCallback)(() => A(Ke.Out), []);
                            return (
                                (0, r.useEffect)(() => {
                                    b || C(!1);
                                }, [t, b]),
                                (0, r.useEffect)(() => {
                                    v && g();
                                }, [v, g]),
                                a().createElement(
                                    'div',
                                    {
                                        id: e ? `${e}_control` : void 0,
                                        className: c()(
                                            $e.base,
                                            n && $e.base__open,
                                            $e[`base__${p}`],
                                            (b || !D) && $e[`base__${t}`],
                                            i,
                                        ),
                                        onMouseEnter: f,
                                        onMouseUp: () => {
                                            (!v && A(Ke.Over), !b && C(!0));
                                        },
                                        onMouseDown: () => {
                                            v || (A(Ke.Down), _ && w(_));
                                        },
                                        onMouseLeave: g,
                                        onClick: l,
                                    },
                                    a().createElement('div', { className: $e.stateHighlight }),
                                    !D && t === ze.Alert && a().createElement('div', { className: $e.alert }),
                                    a().createElement(
                                        'div',
                                        { className: c()($e.label, $e[`label__${u}`], !s && $e.label__placeholder) },
                                        m || a().createElement(Ue, { content: s || o }),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: c()($e.button, $e[`button__${u}`]) },
                                        a().createElement('div', { className: c()($e.arrow, $e[`arrow__${u}`]) }),
                                        a().createElement('div', { className: $e.gradient }),
                                        v && a().createElement('div', { className: $e.disabled }),
                                    ),
                                )
                            );
                        },
                    ),
                    Ye = (e, t, u) => (u < e ? e : u > t ? t : u);
                function Xe(e, t, u = []) {
                    const n = (0, r.useRef)(0),
                        o = (0, r.useCallback)(() => {
                            (window.clearInterval(n.current), (n.current = 0));
                        }, u || []);
                    (0, r.useEffect)(() => o, [o]);
                    const a = (null != u ? u : []).concat([t]);
                    return [
                        (0, r.useCallback)((u) => {
                            (0 !== n.current && o(), (n.current = window.setInterval(() => e(u, !0), t)), e(u, !1));
                        }, a),
                        o,
                    ];
                }
                function Ze(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const Je = () => {
                    const e = (0, r.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        u = (e, u) => {
                            t(e).set(u, u);
                        },
                        n = (e, u) => {
                            t(e).delete(u);
                        },
                        o = (e, ...u) => {
                            for (
                                var n,
                                    o = (function (e, t) {
                                        var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                        if (u) return (u = u.call(e)).next.bind(u);
                                        if (
                                            Array.isArray(e) ||
                                            (u = (function (e, t) {
                                                if (e) {
                                                    if ('string' == typeof e) return Ze(e, t);
                                                    var u = Object.prototype.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === u && e.constructor && (u = e.constructor.name),
                                                        'Map' === u || 'Set' === u
                                                            ? Array.from(e)
                                                            : 'Arguments' === u ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
                                                              ? Ze(e, t)
                                                              : void 0
                                                    );
                                                }
                                            })(e)) ||
                                            (t && e && 'number' == typeof e.length)
                                        ) {
                                            u && (e = u);
                                            var n = 0;
                                            return function () {
                                                return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                                            };
                                        }
                                        throw new TypeError(
                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                        );
                                    })(t(e).values());
                                !(n = o()).done;
                            )
                                (0, n.value)(...u);
                        };
                    return (0, r.useMemo)(() => ({ on: u, off: n, trigger: o }), []);
                };
                var Qe = u(30);
                let et;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(et || (et = {}));
                const tt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    ut = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: n,
                        getWrapperSize: o,
                        forceTriggerMouseMove: a,
                    }) => {
                        const s = (e, u) => {
                            const n = t(e),
                                o = n[0],
                                r = n[1];
                            return r <= o ? 0 : Ye(o, r, u);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? tt : l,
                                d = (0, r.useRef)(null),
                                _ = (0, r.useRef)(null),
                                m = (0, r.useRef)(!1),
                                E = Je(),
                                p = (function (e, t, u) {
                                    const n = (0, r.useMemo)(
                                        () =>
                                            (function (e, t, u, n) {
                                                let o,
                                                    r = !1,
                                                    a = 0;
                                                function s() {
                                                    o && clearTimeout(o);
                                                }
                                                function i(...i) {
                                                    const l = this,
                                                        c = Date.now() - a;
                                                    function d() {
                                                        ((a = Date.now()), u.apply(l, i));
                                                    }
                                                    r ||
                                                        (n && !o && d(),
                                                        s(),
                                                        void 0 === n && c > e
                                                            ? d()
                                                            : !0 !== t &&
                                                              (o = setTimeout(
                                                                  n
                                                                      ? function () {
                                                                            o = void 0;
                                                                        }
                                                                      : d,
                                                                  void 0 === n ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                                                    (i.cancel = function () {
                                                        (s(), (r = !0));
                                                    }),
                                                    i
                                                );
                                            })(u, e),
                                        t,
                                    );
                                    return ((0, r.useEffect)(() => n.cancel, [n]), n);
                                })(
                                    () => {
                                        a && a();
                                    },
                                    [],
                                    150,
                                ),
                                A = (0, Qe.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (u(t, e), E.trigger('change', e), a && m.current && p());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                F = A[0],
                                D = A[1],
                                C = (0, r.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const o = F.scrollPosition.get(),
                                            r = (null != (n = F.scrollPosition.goal) ? n : 0) - o;
                                        return s(e, t * u + r + o);
                                    },
                                    [F.scrollPosition],
                                ),
                                v = (0, r.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            D.start({
                                                scrollPosition: s(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: c.animationConfig,
                                                from: { scrollPosition: s(n, F.scrollPosition.get()) },
                                            });
                                    },
                                    [D, c.animationConfig, F.scrollPosition],
                                ),
                                b = (0, r.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            u = _.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return o(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, c.step),
                                            r = C(t, e, n);
                                        v(r);
                                    },
                                    [v, C, c.step],
                                ),
                                f = (0, r.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && b(n(e)),
                                            d.current && E.trigger('mouseWheel', e, F.scrollPosition, t(d.current)));
                                    },
                                    [F.scrollPosition, b, E],
                                ),
                                g = ((e, t = []) => {
                                    const u = (0, r.useRef)(),
                                        n = (0, r.useCallback)((...t) => {
                                            (u.current && u.current(), (u.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, r.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        se(() => {
                                            const e = d.current;
                                            e &&
                                                (v(s(e, F.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [v, F.scrollPosition.goal],
                                ),
                                h = Ve(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = s(e, F.scrollPosition.goal);
                                    (t !== F.scrollPosition.goal && v(t, { immediate: !0 }),
                                        E.trigger('recalculateContent'));
                                });
                            return (
                                (0, r.useEffect)(
                                    () => (
                                        window.addEventListener('resize', g),
                                        () => {
                                            window.removeEventListener('resize', g);
                                        }
                                    ),
                                    [g],
                                ),
                                (0, r.useEffect)(() => {
                                    const e = d.current;
                                    if (!e || !a) return;
                                    const t = () => {
                                            m.current = !0;
                                        },
                                        u = () => {
                                            m.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', t),
                                        e.addEventListener('mouseleave', u),
                                        () => {
                                            (e.removeEventListener('mouseenter', t),
                                                e.removeEventListener('mouseleave', u));
                                        }
                                    );
                                }, [d]),
                                (0, r.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (_.current ? o(_.current) : void 0),
                                        getContainerSize: () => (d.current ? e(d.current) : void 0),
                                        getBounds: () =>
                                            d.current
                                                ? t(d.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: c.step.clampedArrowStepTimeout,
                                        clampPosition: s,
                                        handleMouseWheel: f,
                                        applyScroll: v,
                                        applyStepTo: b,
                                        contentRef: d,
                                        wrapperRef: _,
                                        scrollPosition: D,
                                        animationScroll: F,
                                        recalculateContent: h,
                                        events: { on: E.on, off: E.off },
                                    }),
                                    [F.scrollPosition, v, b, E.off, E.on, h, f, D, c.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    nt = ut({
                        getBounds: (e) => {
                            var t, u;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (u = e.parentElement) ? void 0 : u.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            var u;
                            e.style.transform = `translateX(-${0 | (null != (u = t.value.scrollPosition) ? u : 0)}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? et.Next : et.Prev),
                        forceTriggerMouseMove: te.O.view.forceTriggerMouseMove,
                    }),
                    ot = 'HorizontalBar_base__active_5e',
                    rt = 'disable',
                    at = { pending: !1, offset: 0 },
                    st = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    it = () => {},
                    lt = (e, t) => Math.max(20, e.offsetWidth * t),
                    ct = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = st, onDrag: n = it }) => {
                        const o = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            d = (0, r.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, r.useState)(at),
                            E = m[0],
                            p = m[1],
                            A = (0, r.useCallback)(
                                (e) => {
                                    (p(e),
                                        d.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [n],
                            ),
                            F = () => {
                                const t = l.current,
                                    u = d.current,
                                    n = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(n && t && u && o)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    a = Math.min(1, n / o),
                                    c = Ye(0, 1, r / (o - n)),
                                    _ = (t.offsetWidth - lt(t, a)) * c;
                                ((u.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (s.current && i.current && l.current && d.current) {
                                            if (0 === e)
                                                return (
                                                    s.current.classList.add(rt),
                                                    void i.current.classList.remove(rt)
                                                );
                                            if (
                                                ((t = l.current),
                                                (u = d.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(rt),
                                                    void i.current.classList.add(rt)
                                                );
                                            var t, u;
                                            (s.current.classList.remove(rt), i.current.classList.remove(rt));
                                        }
                                    })(_));
                            },
                            D = Ve(() => {
                                ((() => {
                                    const t = d.current,
                                        u = l.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && n && u)) return;
                                    const a = Math.min(1, n / r);
                                    ((t.style.width = `${lt(u, a)}px`),
                                        (t.style.display = 'flex'),
                                        o.current &&
                                            (1 !== a ? o.current.classList.add(ot) : o.current.classList.remove(ot)));
                                })(),
                                    F());
                            });
                        ((0, r.useEffect)(() => se(D)),
                            (0, r.useEffect)(
                                () =>
                                    se(() => {
                                        const t = () => {
                                            F();
                                        };
                                        let u = it;
                                        const n = () => {
                                            (u(), (u = se(D)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', D),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (u(),
                                                    e.events.off('recalculateContent', D),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!E.pending) return;
                                const t = te.O.client.events.mouse.move(([t, u]) => {
                                        var o;
                                        const r = e.contentRef.current,
                                            a = e.wrapperRef.current;
                                        if (!r || !a) return;
                                        const s = l.current,
                                            i = d.current;
                                        if (!s || !i) return;
                                        if ('inside' === u && t.clientX < 0) return;
                                        const c = t.clientX - E.offset - s.getBoundingClientRect().x,
                                            _ = (c / s.offsetWidth) * (null != (o = e.getContainerSize()) ? o : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, _),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: c, contentOffset: _ }));
                                    }),
                                    u = te.O.client.events.mouse.up(() => {
                                        (t(), A(at));
                                    });
                                return () => {
                                    (t(), u());
                                };
                            }, [e, E.offset, E.pending, n, A]));
                        const C = Xe((t) => e.applyStepTo(t), _, [e]),
                            v = C[0],
                            b = C[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', b, !0),
                                () => document.removeEventListener('mouseup', b, !0)
                            ),
                            [b],
                        );
                        const f = (e) => {
                            e.target.classList.contains(rt) || w('highlight');
                        };
                        return a().createElement(
                            'div',
                            { className: c()('HorizontalBar_base_49', t.base), ref: o, onWheel: e.handleMouseWheel },
                            a().createElement('div', {
                                className: c()('HorizontalBar_leftButton_5f', t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(rt) || 0 !== e.button || (w('play'), v(et.Next));
                                },
                                onMouseUp: b,
                                ref: s,
                                onMouseEnter: f,
                            }),
                            a().createElement(
                                'div',
                                {
                                    className: c()('HorizontalBar_track_0d', t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        n &&
                                            0 === t.button &&
                                            (w('play'),
                                            t.target === n
                                                ? A({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x })
                                                : ((t) => {
                                                      const n = d.current,
                                                          o = e.contentRef.current;
                                                      if (!n || !o) return;
                                                      const r = u(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                  })(t.screenX > n.getBoundingClientRect().x ? et.Prev : et.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: f,
                                },
                                a().createElement('div', { ref: d, className: c()('HorizontalBar_thumb_fd', t.thumb) }),
                                a().createElement('div', { className: c()('HorizontalBar_rail_32', t.rail) }),
                            ),
                            a().createElement('div', {
                                className: c()('HorizontalBar_rightButton_03', t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(rt) || 0 !== e.button || (w('play'), v(et.Prev));
                                },
                                onMouseUp: b,
                                ref: i,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    dt = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    _t = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: o,
                        classNames: s,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: d,
                    }) => {
                        const _ = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: c()(dt.base, e.base) });
                            }, [n]),
                            m = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return a().createElement(
                            'div',
                            { className: c()(dt.defaultScroll, u), onWheel: t.handleMouseWheel },
                            a().createElement(
                                'div',
                                { className: c()(dt.defaultScrollArea, o) },
                                a().createElement(mt, { className: i, api: m, classNames: s }, e),
                            ),
                            a().createElement(ct, { getStepByRailClick: l, api: t, onDrag: d, classNames: _ }),
                        );
                    },
                    mt = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, r.useEffect)(() => se(e.recalculateContent)),
                        a().createElement(
                            'div',
                            { className: c()(dt.base, t) },
                            a().createElement(
                                'div',
                                {
                                    className: c()(dt.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                a().createElement(
                                    'div',
                                    { className: c()(dt.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                ((mt.Bar = ct), (mt.Default = _t));
                const Et = ut({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? et.Next : et.Prev),
                    }),
                    pt = 'VerticalBar_base__active_72',
                    At = 'disable',
                    Ft = () => {},
                    Dt = { pending: !1, offset: 0 },
                    Ct = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    vt = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    bt = (e, t) => Math.max(20, e.offsetHeight * t),
                    ft = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Ct, onDrag: n = Ft }) => {
                        const o = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            d = (0, r.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, r.useState)(Dt),
                            E = m[0],
                            p = m[1],
                            A = (0, r.useCallback)(
                                (e) => {
                                    (p(e),
                                        d.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [n],
                            ),
                            F = Ve(() => {
                                const t = d.current,
                                    u = l.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && t && u)) return;
                                const a = Math.min(1, n / r);
                                return (
                                    (t.style.height = `${bt(u, a)}px`),
                                    (t.style.display = 'flex'),
                                    o.current &&
                                        (1 !== a ? o.current.classList.add(pt) : o.current.classList.remove(pt)),
                                    a
                                );
                            }),
                            D = Ve(() => {
                                const t = l.current,
                                    u = d.current,
                                    n = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(n && t && u && o)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    a = Math.min(1, n / o),
                                    c = Ye(0, 1, r / (o - n)),
                                    _ = (t.offsetHeight - bt(t, a)) * c;
                                ((u.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (s.current && i.current && l.current && d.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    s.current.classList.add(At),
                                                    void i.current.classList.remove(At)
                                                );
                                            if (
                                                ((t = l.current),
                                                (u = d.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(At),
                                                    void i.current.classList.add(At)
                                                );
                                            var t, u;
                                            (s.current.classList.remove(At), i.current.classList.remove(At));
                                        }
                                    })(_));
                            }),
                            C = Ve(() => {
                                vt(e, () => {
                                    (F(), D());
                                });
                            });
                        ((0, r.useEffect)(() => se(C)),
                            (0, r.useEffect)(() => {
                                const t = () => {
                                    vt(e, () => {
                                        D();
                                    });
                                };
                                let u = Ft;
                                const n = () => {
                                    (u(), (u = se(C)));
                                };
                                return (
                                    e.events.on('recalculateContent', C),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (u(),
                                            e.events.off('recalculateContent', C),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!E.pending) return;
                                const t = te.O.client.events.mouse.up(() => {
                                        A(Dt);
                                    }),
                                    u = te.O.client.events.mouse.move(([t]) => {
                                        vt(e, (u) => {
                                            const o = l.current,
                                                r = d.current,
                                                a = e.getContainerSize();
                                            if (!o || !r || !a) return;
                                            const s = t.screenY - E.offset - o.getBoundingClientRect().y,
                                                i = (s / o.offsetHeight) * a;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: s, contentOffset: i }));
                                        });
                                    });
                                return () => {
                                    (t(), u());
                                };
                            }, [e, E.offset, E.pending, n, A]));
                        const v = Xe((t) => e.applyStepTo(t), _, [e]),
                            b = v[0],
                            f = v[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const g = (e) => {
                            e.target.classList.contains(At) || w('highlight');
                        };
                        return a().createElement(
                            'div',
                            { className: c()('VerticalBar_base_f3', t.base), ref: o, onWheel: e.handleMouseWheel },
                            a().createElement('div', {
                                className: c()('VerticalBar_topButton_d7', t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(At) || 0 !== e.button || (w('play'), b(et.Next));
                                },
                                ref: s,
                                onMouseEnter: g,
                            }),
                            a().createElement(
                                'div',
                                {
                                    className: c()('VerticalBar_track_df', t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        var o;
                                        n &&
                                            0 === t.button &&
                                            (w('play'),
                                            t.target === n
                                                ? A({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y })
                                                : ((o = t.screenY > n.getBoundingClientRect().y ? et.Prev : et.Next),
                                                  d.current &&
                                                      vt(e, (t) => {
                                                          if (!t) return;
                                                          const n = u(e),
                                                              r = e.clampPosition(t, t.scrollTop + n * o);
                                                          e.applyScroll(r);
                                                      })));
                                    },
                                    ref: l,
                                    onMouseEnter: g,
                                },
                                a().createElement('div', { ref: d, className: c()('VerticalBar_thumb_32', t.thumb) }),
                                a().createElement('div', { className: c()('VerticalBar_rail_43', t.rail) }),
                            ),
                            a().createElement('div', {
                                className: c()('VerticalBar_bottomButton_06', t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(At) || 0 !== e.button || (w('play'), b(et.Prev));
                                },
                                onMouseUp: f,
                                ref: i,
                                onMouseEnter: g,
                            }),
                        );
                    }),
                    gt = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    ht = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: o,
                        scrollClassName: s,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: d,
                    }) => {
                        const _ = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: c()(gt.base, e.base) });
                            }, [n]),
                            m = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return a().createElement(
                            'div',
                            { className: c()(gt.defaultScroll, u), onWheel: t.handleMouseWheel },
                            a().createElement(
                                'div',
                                { className: c()(gt.area, o) },
                                a().createElement(Bt, { className: s, classNames: i, api: m }, e),
                            ),
                            a().createElement(ft, { getStepByRailClick: l, api: t, onDrag: d, classNames: _ }),
                        );
                    },
                    Bt = ({ className: e, classNames: t, children: u, api: n }) => (
                        (0, r.useEffect)(() => se(n.recalculateContent)),
                        a().createElement(
                            'div',
                            { className: c()(gt.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            a().createElement(
                                'div',
                                { className: c()(gt.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                u,
                            ),
                        )
                    );
                Bt.Default = ht;
                const yt = { Vertical: o, Horizontal: n },
                    wt = { base: 'VerticalAutoScroll_barBase_93' },
                    St = { content: 'VerticalAutoScroll_content_47' },
                    kt = ({
                        children: e,
                        isEnabled: t = !0,
                        selectedItemId: u,
                        scrollAreaKey: n = 'scrollArea',
                        withCompleteTrigger: o = !1,
                        containerClasses: s,
                    }) => {
                        const i = (0, r.useState)(!1),
                            l = i[0],
                            d = i[1],
                            _ = (0, r.useState)(!1),
                            m = _[0],
                            E = _[1],
                            p = (0, r.useRef)(null),
                            A = (0, r.useRef)(null),
                            F = Et(),
                            D = Ve(() => {
                                d(!0);
                            }),
                            C = (0, r.useCallback)(() => {
                                d(!1);
                            }, []),
                            v = (0, r.useCallback)(() => {
                                const e = A.current,
                                    t = p.current;
                                if (e && F && t) {
                                    const u = e.offsetTop + 0.5 * (e.offsetHeight - t.offsetHeight);
                                    (o && F.events.on('rest', D), F.applyScroll(u));
                                }
                            }, [D, F, o]);
                        ((0, r.useEffect)(
                            () => () => {
                                F.events.off('rest', D);
                            },
                            [D, F.events, o],
                        ),
                            (0, r.useEffect)(() => {
                                if (t && null !== u) return se(v);
                            }, [n, v, u, t]),
                            (0, r.useEffect)(() => {
                                const e = () => {
                                    const e = F.getContainerSize(),
                                        t = F.getWrapperSize();
                                    e && t && E(e > t);
                                };
                                return (
                                    F.events.on('recalculateContent', e),
                                    () => {
                                        F.events.off('recalculateContent', e);
                                    }
                                );
                            }, [m, F]));
                        const b = {
                                scrollContainerRef: p,
                                selectedItemRef: A,
                                selectedItemId: u,
                                isScrollComplete: l,
                                scrollbarActive: m,
                                onScrollAnimationComplete: C,
                            },
                            f = (0, r.cloneElement)(e, b);
                        return a().createElement(
                            'div',
                            { className: c()('VerticalAutoScroll_base_db', s), ref: p },
                            a().createElement(yt.Vertical.Area, { api: F, key: n, classNames: St }, f),
                            a().createElement(yt.Vertical.Bar, { api: F, classNames: wt }),
                        );
                    },
                    Tt = {
                        base: 'DropDownItem_base_5e',
                        base__extraSmall: 'DropDownItem_base__extraSmall_5a',
                        base__small: 'DropDownItem_base__small_d6',
                        base__medium: 'DropDownItem_base__medium_e4',
                        base__selected: 'DropDownItem_base__selected_8e',
                        base__disabled: 'DropDownItem_base__disabled_21',
                    },
                    Ot = ['size', 'classMix', 'onClick', 'itemRenderer'],
                    Pt = (0, r.memo)((e) => {
                        let t = e.size,
                            u = e.classMix,
                            n = e.onClick,
                            o = e.itemRenderer,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    o = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (o[u] = e[u]));
                                return o;
                            })(e, Ot);
                        const i = s.id,
                            l = s.isSelected,
                            d = s.isDisabled,
                            _ = s.label,
                            m = s.soundHover,
                            E = s.soundClick,
                            p = (0, r.useCallback)(
                                (e) => {
                                    d || (n && n(e, i));
                                },
                                [i, d, n],
                            ),
                            A = (0, r.useCallback)(() => {
                                d || (m && w(m));
                            }, [d, m]),
                            F = (0, r.useCallback)(() => {
                                d || (E && w(E));
                            }, [d, E]),
                            D = c()(Tt.base, t && Tt[`base__${t}`], l && Tt.base__selected, d && Tt.base__disabled, u);
                        return a().createElement(
                            'div',
                            { className: D, onMouseEnter: A, onMouseDown: F, onClick: p },
                            o ? o(s) : _,
                        );
                    }),
                    xt = { base__withScroll: 'DropDownItems_base__withScroll_19' };
                function Nt() {
                    return (
                        (Nt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Nt.apply(this, arguments)
                    );
                }
                const Rt = ({
                        size: e,
                        items: t,
                        selectedIds: u,
                        selectedItemId: n,
                        selectedItemRef: o,
                        onClick: r,
                        parentId: s,
                        soundHover: i,
                        soundClick: l,
                        itemClassMix: d,
                        itemRenderer: _,
                        scrollbarActive: m,
                    }) =>
                        a().createElement(
                            'div',
                            { className: c()(xt.base, m && xt.base__withScroll) },
                            t.map((t) => {
                                const c = `${s}_${t.id}`;
                                return a().createElement(
                                    'div',
                                    { id: s ? c : void 0, key: c, ref: t.id === n ? o : null },
                                    a().createElement(
                                        Pt,
                                        Nt({ size: e, soundHover: i, soundClick: l, classMix: d, itemRenderer: _ }, t, {
                                            onClick: r,
                                            isSelected: u.includes(t.id),
                                        }),
                                    ),
                                );
                            }),
                        ),
                    Mt = {
                        base: 'DropDownList_base_62',
                        base__extraSmall: 'DropDownList_base__extraSmall_60',
                        base__small: 'DropDownList_base__small_0c',
                        base__medium: 'DropDownList_base__medium_99',
                    },
                    It = ({
                        parentId: e,
                        size: t = je.Medium,
                        items: u,
                        selectedIds: n,
                        isOpen: o,
                        autoScroll: s,
                        classMix: i,
                        itemClassMix: l,
                        itemRenderer: d,
                        onClick: _,
                        soundHover: m,
                        soundClick: E,
                    }) => {
                        const p = (0, r.useState)(null),
                            A = p[0],
                            F = p[1],
                            D = Ie(o);
                        (0, r.useEffect)(() => {
                            if (o && !D) {
                                const e = ((e, t) => {
                                    if (!t.length) return null;
                                    const u = e.find((e) => t.includes(e.id));
                                    return u ? u.id : null;
                                })(u, n);
                                null !== e && F(e);
                            }
                            o || F(null);
                        }, [o, u, n, D]);
                        const C = e ? `${e}_list` : void 0;
                        return a().createElement(
                            'div',
                            { id: C, className: c()(Mt.base, Mt[`base__${t}`], i) },
                            a().createElement(
                                kt,
                                { selectedItemId: A, isEnabled: s },
                                a().createElement(Rt, {
                                    parentId: e,
                                    items: u,
                                    size: t,
                                    selectedIds: n,
                                    onClick: _,
                                    soundHover: m,
                                    soundClick: E,
                                    itemClassMix: l,
                                    itemRenderer: d,
                                }),
                            ),
                        );
                    },
                    Lt = {
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
                    Ht = (0, r.memo)(
                        ({
                            componentId: e,
                            containerRef: t,
                            items: u,
                            selected: n = [],
                            variant: o = ze.Basic,
                            size: s = je.Medium,
                            multiple: i = !1,
                            autoScroll: l = !0,
                            placeholder: _,
                            classMix: m,
                            className: E,
                            controlRenderer: p,
                            itemRenderer: A,
                            open: F,
                            tooltipArgs: D,
                            onChanges: C,
                            onOpen: v,
                            onClose: b,
                            onClick: f,
                            onClickOutside: g,
                            onMouseEnter: B,
                            onMouseDown: y,
                            onMouseUp: w,
                            onMouseLeave: S,
                            soundHover: k = 'highlight',
                            soundClick: T = 'play',
                            soundItemHover: O,
                            soundItemClick: P,
                        }) => {
                            const x = (0, r.useRef)(null),
                                N = (0, r.useRef)(null),
                                R = (0, r.useRef)({ open: !1, listAbove: !1 }),
                                M = (0, r.useState)(!1),
                                I = M[0],
                                L = M[1],
                                H = (0, r.useState)(!1),
                                V = H[0],
                                z = H[1],
                                j = Le(n, i),
                                W = o !== ze.Disabled,
                                G = void 0 === F,
                                U = Boolean(G ? I : F),
                                $ = Ve(() => {
                                    R.current.open && ((R.current.open = !1), L(!1), null == b || b());
                                });
                            ce(U ? ie.n.ESCAPE : ie.n.NONE, $, U);
                            const K = Ve(() => {
                                (null == g || g(), G && (L(!1), (R.current.open = !1), null == b || b()));
                            });
                            ((0, r.useEffect)(() => {
                                const e = x.current;
                                if (e && U)
                                    return (
                                        d.c1.register(e, K),
                                        () => {
                                            d.c1.unregister(e, K);
                                        }
                                    );
                            }, [U, K]),
                                (0, r.useEffect)(() => {
                                    void 0 !== F && (R.current.open = F);
                                }, [F]));
                            const q = (0, r.useCallback)(() => {
                                if (!x.current || !N.current) return;
                                const e = t && t.current,
                                    u = e ? e.getBoundingClientRect().bottom : window.innerHeight,
                                    n =
                                        x.current.getBoundingClientRect().bottom +
                                            N.current.getBoundingClientRect().height >
                                        u;
                                n !== R.current.listAbove && ((R.current.listAbove = n), z(n));
                            }, [t]);
                            (0, r.useEffect)(() => se(() => se(q)), [q, s, u.length]);
                            const Y = (0, r.useCallback)(
                                    (e) => {
                                        const t = j.findIndex((t) => t === e) > -1;
                                        let u = [];
                                        ((u = i ? (t ? j.filter((t) => t !== e) : [e, ...j]) : t ? [] : [e]),
                                            null == C || C(u));
                                    },
                                    [i, C, j],
                                ),
                                X = (0, r.useCallback)(() => {
                                    G &&
                                        ((R.current.open = !R.current.open),
                                        L(R.current.open),
                                        R.current.open ? null == v || v() : null == b || b());
                                }, [G, v, b]),
                                Z = (0, r.useCallback)(
                                    (e) => {
                                        (W && X(), null == f || f(e));
                                    },
                                    [W, f, X],
                                ),
                                J = (0, r.useCallback)(
                                    (e, t) => {
                                        (null == f || f(e, t), Y(t), i || X());
                                    },
                                    [f, i, X, Y],
                                ),
                                Q = (0, r.useMemo)(
                                    () =>
                                        u
                                            .filter((e) => j.includes(e.id))
                                            .map((e) => e.label)
                                            .join(', '),
                                    [u, j],
                                ),
                                ee = (0, r.useMemo)(() => u.filter((e) => j.includes(e.id)), [u, j]),
                                te = p ? p(ee) : void 0;
                            return a().createElement(
                                'div',
                                {
                                    id: e,
                                    ref: x,
                                    className: c()(Lt.base, Lt[`base__${s}`], E, null == m ? void 0 : m.base),
                                    onMouseEnter: B,
                                    onMouseUp: w,
                                    onMouseDown: y,
                                    onMouseLeave: S,
                                },
                                a().createElement(
                                    'div',
                                    { className: c()(Lt.control, U && Lt.control__down) },
                                    a().createElement(
                                        h,
                                        { tooltipArgs: D },
                                        a().createElement(qe, {
                                            parentId: e,
                                            size: s,
                                            variant: o,
                                            isOpen: U,
                                            placeholder: _,
                                            label: Q,
                                            classMix: m && m.control,
                                            onClick: Z,
                                            soundHover: k,
                                            soundClick: T,
                                            customControl: te,
                                        }),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    {
                                        ref: N,
                                        className: c()(
                                            Lt.list,
                                            U ? Lt.list__down : Lt.list__up,
                                            V ? Lt.list__above : Lt.list__under,
                                        ),
                                    },
                                    a().createElement(It, {
                                        parentId: e,
                                        size: s,
                                        items: u,
                                        selectedIds: j,
                                        isOpen: U,
                                        autoScroll: l,
                                        classMix: m && m.list,
                                        itemClassMix: m && m.item,
                                        itemRenderer: A,
                                        onClick: J,
                                        soundHover: O || k,
                                        soundClick: P || T,
                                    }),
                                ),
                            );
                        },
                    ),
                    Vt = ['items', 'selected', 'multiple', 'onChanges'];
                function zt() {
                    return (
                        (zt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        zt.apply(this, arguments)
                    );
                }
                const jt = (e) => {
                        let t = e.items,
                            u = e.selected,
                            n = void 0 === u ? [] : u,
                            o = e.multiple,
                            s = void 0 !== o && o,
                            i = e.onChanges,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    o = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (o[u] = e[u]));
                                return o;
                            })(e, Vt);
                        const c = (0, r.useMemo)(() => Le(n, s), [JSON.stringify(n), s]),
                            d = (0, r.useState)(c),
                            _ = d[0],
                            m = d[1],
                            E = (0, r.useCallback)(
                                (e) => {
                                    0 !== e.length && (m(e), null == i || i(t.filter((t) => e.includes(t.id))));
                                },
                                [t, i],
                            ),
                            p = Ie(c);
                        return (
                            (0, r.useEffect)(() => {
                                var e, t;
                                ((e = p || []), (t = c), JSON.stringify(e) !== JSON.stringify(t) && m(c));
                            }, [p, c]),
                            a().createElement(Ht, zt({ onChanges: E, items: t, selected: _, multiple: s }, l))
                        );
                    },
                    Wt = [14, 10, 7, 5, 3, 1].map((e) => {
                        return {
                            id: e,
                            label:
                                ((t = R.strings.replays.filterPopover.lastDays(e)),
                                (u = { count: e }),
                                t.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                    const t = 0 === e.indexOf('%') ? 2 : 1;
                                    return String(u[e.slice(t, -t)]);
                                })),
                        };
                        var t, u;
                    }),
                    Gt = ({ selectedId: e, onChange: t, className: u }) =>
                        a().createElement(jt, {
                            className: u,
                            items: Wt,
                            selected: e,
                            size: je.Small,
                            onChanges: (u) => {
                                (null == u ? void 0 : u.length) && u[0].id !== e && (null == t || t(u[0].id));
                            },
                        }),
                    Ut = ({
                        startRowIndex: e,
                        cellHeight: t,
                        paddingTop: u,
                        paddingBottom: n,
                        amount: o,
                        itemsAmountPerRow: r,
                        visibleRowsAmount: a,
                    }) => {
                        const s = Math.ceil(o / r) * t,
                            i = a * t,
                            l = e * t;
                        return { paddingTop: `${l + u}rem`, paddingBottom: `${Math.max(s - l - i, 0) + n}rem` };
                    },
                    $t = (e) => {
                        const t = e.className,
                            u = e.children,
                            n = e.itemsAmountPerRow,
                            o = e.visibleRowsAmount,
                            r = e.startRowIndex,
                            s = e.amount,
                            i = r * n,
                            l = Math.min(o * n, s - i);
                        return a().createElement(
                            'div',
                            { className: t, style: Ut(e) },
                            ((e, t) => {
                                const u = [];
                                for (let n = 0; n < e; n++) u.push(t(n));
                                return u;
                            })(l, (e) => u(i + e)),
                        );
                    },
                    Kt = ({
                        amount: e,
                        cellWidth: t,
                        cellHeight: u,
                        children: n,
                        api: o,
                        classNames: s,
                        preloadedRows: i = 1,
                        paddingTop: l = 0,
                        paddingBottom: d = 0,
                    }) => {
                        const _ = o.scrollApi,
                            m = (0, r.useRef)(0),
                            E = (0, r.useState)(0),
                            p = E[0],
                            A = E[1],
                            F = (0, r.useState)(null),
                            D = F[0],
                            C = F[1],
                            v = (0, r.useState)(null),
                            b = v[0],
                            f = v[1];
                        return (
                            (0, r.useEffect)(() => {
                                const t = (t) => {
                                    if (!D) return;
                                    const n = Math.floor((te.O.view.pxToRem(t.value.scrollPosition) - l) / u + 1),
                                        r = Math.ceil(e / D),
                                        a = Math.max(0, Math.min(n - i, r));
                                    (A(a), o.startRowIndexChanged(a));
                                };
                                return (_.events.on('change', t), () => _.events.off('change', t));
                            }, [o, _, u, l, D, e, i]),
                            (0, r.useEffect)(() => {
                                const e = () => {
                                        if (_.contentRef.current) {
                                            const e = getComputedStyle(_.contentRef.current),
                                                n = _.contentRef.current.getBoundingClientRect(),
                                                r =
                                                    te.O.view.pxToRem(n.width) -
                                                    (parseFloat(e.paddingLeft) + parseFloat(e.paddingRight)),
                                                a = Math.floor(r / t),
                                                s = Math.ceil(te.O.view.pxToRem(n.height) / u) + 2 * i;
                                            ((m.current = a), C(a), f(s), o.layoutCalculated(a, s));
                                        }
                                    },
                                    n = () => {
                                        const t = m.current;
                                        (e(), o.scrollToIndex(p * t));
                                    };
                                return (
                                    _.events.on('recalculateContent', e),
                                    _.events.on('resizeHandled', n),
                                    () => {
                                        (_.events.off('recalculateContent', e), _.events.off('resizeHandled', n));
                                    }
                                );
                            }, [o, _, u, t, i, p]),
                            (0, r.useEffect)(() => {
                                const e = (e, t = !0) => {
                                    D && _.applyScroll(Math.floor(e / D) * u + l, { immediate: t });
                                };
                                return (o.events.on('scrollToIndex', e), () => o.events.off('scrollToIndex', e));
                            }, [o, u, D, l, _]),
                            a().createElement(
                                yt.Vertical.Default,
                                {
                                    api: _,
                                    className: null == s ? void 0 : s.scroll,
                                    areaClassName: null == s ? void 0 : s.areaClassName,
                                    scrollClassName: null == s ? void 0 : s.scrollClassName,
                                    scrollClassNames: {
                                        content: null == s ? void 0 : s.content,
                                        wrapper: null == s ? void 0 : s.wrapper,
                                    },
                                },
                                null !== D &&
                                    null !== b &&
                                    a().createElement(
                                        $t,
                                        {
                                            className: c()('VirtualGrid_base_ca', null == s ? void 0 : s.inner),
                                            paddingBottom: d,
                                            paddingTop: l,
                                            amount: e,
                                            itemsAmountPerRow: D,
                                            visibleRowsAmount: b,
                                            startRowIndex: p,
                                            cellHeight: u,
                                        },
                                        n,
                                    ),
                            )
                        );
                    },
                    qt = () =>
                        a().createElement(
                            'div',
                            { className: 'EmptyState_base_5f' },
                            R.strings.replays.filter.vehicles.noVehicles(),
                        ),
                    Yt = {
                        base: 'SortButton_base_b1',
                        base__disabled: 'SortButton_base__disabled_95',
                        sortDirection: 'SortButton_sortDirection_92',
                        base__current: 'SortButton_base__current_06',
                        base__isAscending: 'SortButton_base__isAscending_c1',
                    };
                let Xt;
                !(function (e) {
                    ((e.Default = 'default'), (e.Disabled = 'disabled'), (e.Current = 'current'));
                })(Xt || (Xt = {}));
                const Zt = (0, de.Pi)(
                        ({ column: e, className: t, children: u, state: n = Xt.Default, isAscending: o = !0 }) => {
                            const r = De().controls,
                                s = R.strings.replays.filter.vehicles.tooltip.$dyn(e);
                            return a().createElement(
                                f,
                                {
                                    header: String(null == s ? void 0 : s.$dyn('header')),
                                    body: String(null == s ? void 0 : s.$dyn('body')),
                                },
                                a().createElement(
                                    'div',
                                    {
                                        onClick: () => n !== Xt.Disabled && r.sortVehiclesByColumn(e),
                                        className: c()(Yt.base, o && Yt.base__isAscending, Yt[`base__${n}`], t),
                                    },
                                    u,
                                    a().createElement('div', { className: Yt.sortDirection }),
                                ),
                            );
                        },
                    ),
                    Jt = {
                        icon: 'SortButtonContent_icon_93',
                        icon__type: 'SortButtonContent_icon__type_b9',
                        icon__tier: 'SortButtonContent_icon__tier_74',
                        name: 'SortButtonContent_name_da',
                    },
                    Qt = a().memo(function ({ column: e }) {
                        return e === ye.Name
                            ? a().createElement(
                                  'div',
                                  { className: Jt.name },
                                  R.strings.replays.filter.vehicles.vehicleName(),
                              )
                            : a().createElement('div', { className: c()(Jt.icon, Jt[`icon__${e}`]) });
                    }),
                    eu = {
                        base: 'Header_base_23',
                        divider: 'Header_divider_7d',
                        button: 'Header_button_79',
                        button__tier: 'Header_button__tier_2e',
                        button__type: 'Header_button__type_f8',
                        button__name: 'Header_button__name_69',
                    },
                    tu = [ye.Tier, ye.Type, ye.Name],
                    uu = (e, t) => (t ? Xt.Disabled : e ? Xt.Current : Xt.Default),
                    nu = (0, de.Pi)(() => {
                        const e = De().model,
                            t = 0 === e.vehicles.get().length,
                            u = e.isVehicleSortAscending.get(),
                            n = e.vehicleSortColumn.get();
                        return a().createElement(
                            'div',
                            { className: eu.base },
                            tu.map((e) =>
                                a().createElement(
                                    Zt,
                                    {
                                        key: e,
                                        column: e,
                                        className: c()(eu.button, eu[`button__${e}`]),
                                        isAscending: u,
                                        state: uu(e === n, t),
                                    },
                                    a().createElement(Qt, { column: e }),
                                ),
                            ),
                            a().createElement('div', { className: eu.divider }),
                        );
                    }),
                    ou = {
                        base: 'VehicleTypeIcon_base_74',
                        base__big: 'VehicleTypeIcon_base__big_09',
                        base__c_44x44: 'VehicleTypeIcon_base__c_44x44_51',
                        base__c_48x48_specSlot: 'VehicleTypeIcon_base__c_48x48_specSlot_bc',
                        base__c_60x54: 'VehicleTypeIcon_base__c_60x54_d3',
                    };
                let ru;
                !(function (e) {
                    ((e.c83x74 = 'big'),
                        (e.c60x54 = 'c_60x54'),
                        (e.c44x44 = 'c_44x44'),
                        (e.c48x48_specSlot = 'c_48x48_specSlot'));
                })(ru || (ru = {}));
                const au = a().memo(function ({ vehicleType: e, isElite: t, className: u, iconSize: n = ru.c44x44 }) {
                        const o = `${G(e)}${t ? '_elite' : ''}`,
                            r = R.images.gui.maps.icons.vehicleTypes.$dyn(n);
                        return a().createElement('div', {
                            className: c()(ou.base, ou[`base__${n}`], u),
                            style: { backgroundImage: `url(${null == r ? void 0 : r.$dyn(o)})` },
                        });
                    }),
                    su = a().memo(function ({
                        isSelected: e,
                        name: t,
                        onClick: u,
                        tier: n,
                        techName: o,
                        nation: r,
                        isPremium: s,
                        type: i,
                    }) {
                        const l = R.images.gui.maps.icons.vehicle.small.$dyn(G(`${r}-${o}`));
                        return a().createElement(
                            'div',
                            { onClick: u, className: c()('Content_base_3e', e && 'Content_base__selected_0c') },
                            a().createElement('div', { className: 'Content_tier_2e' }, (0, $.HG)(n)),
                            a().createElement(
                                'div',
                                { className: 'Content_type_eb' },
                                a().createElement(au, { className: 'Content_typeIcon_52', isElite: s, vehicleType: i }),
                            ),
                            a().createElement(
                                'div',
                                { className: 'Content_name_24', style: { backgroundImage: `url(${l})` } },
                                t,
                            ),
                            e && a().createElement('div', { className: 'Content_selectedFrame_eb' }),
                        );
                    });
                function iu() {
                    return (
                        (iu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        iu.apply(this, arguments)
                    );
                }
                const lu = (0, de.Pi)(({ index: e }) => {
                        const t = De(),
                            u = t.model,
                            n = t.controls,
                            o = (function (e, t) {
                                var u;
                                if (!(t >= e.length))
                                    return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                            })(u.vehicles.get(), e);
                        if (!o) throw Error(`${e} is out ov vehicles range`);
                        return a().createElement(su, iu({}, o, { onClick: () => n.selectVehicle(o.vehicleCD) }));
                    }),
                    cu = (0, de.Pi)(({ className: e }) => {
                        const t = De().model.vehicles.get(),
                            u = (() => {
                                const e = yt.Vertical.useVerticalScrollApi(),
                                    t = Je(),
                                    u = (0, r.useCallback)((e, u = !0) => t.trigger('scrollToIndex', e, u), [t]),
                                    n = (0, r.useCallback)((e, u) => t.trigger('layoutCalculated', e, u), [t]),
                                    o = (0, r.useCallback)((e) => t.trigger('startRowIndexChanged', e), [t]);
                                return (0, r.useMemo)(
                                    () => ({
                                        scrollToIndex: u,
                                        layoutCalculated: n,
                                        startRowIndexChanged: o,
                                        scrollApi: e,
                                        events: { off: t.off, on: t.on },
                                    }),
                                    [u, n, o, e, t.off, t.on],
                                );
                            })();
                        return (
                            (0, r.useEffect)(() => {
                                u.scrollApi.applyScroll(0, { immediate: !0 });
                            }, [t.length, u.scrollApi]),
                            a().createElement(
                                'div',
                                { className: c()('VehicleList_base_23', e) },
                                a().createElement(nu, null),
                                a().createElement(
                                    'div',
                                    { className: 'VehicleList_gridWrapper_c8' },
                                    t.length > 0
                                        ? a().createElement(
                                              Kt,
                                              { amount: t.length, cellWidth: 230, cellHeight: 34, api: u },
                                              (e) => a().createElement(lu, { key: e, index: e }),
                                          )
                                        : a().createElement(qt, null),
                                ),
                            )
                        );
                    }),
                    du = 'ReplaysFilterPopoverApp_filtersSection_6c';
                function _u() {
                    return (
                        (_u =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        _u.apply(this, arguments)
                    );
                }
                const mu = (e, t, u, n) => (100 * (t + u / 2 - (n + 58))) / te.O.view.pxToRem(e),
                    Eu = (0, de.Pi)(() => {
                        const e = De(),
                            t = e.model,
                            u = e.controls,
                            n = (0, r.useRef)(null),
                            o = (0, r.useState)(void 0),
                            s = o[0],
                            i = o[1];
                        var l;
                        return (
                            (0, r.useEffect)(
                                () =>
                                    se(() =>
                                        se(() => {
                                            n.current &&
                                                i(
                                                    ((e) => {
                                                        const t = window.decorator,
                                                            u = t.directionType,
                                                            n = t.boundY,
                                                            o = t.boundHeight,
                                                            r = t.boundX,
                                                            a = t.boundWidth,
                                                            s = e.getBoundingClientRect(),
                                                            i = s.width,
                                                            l = s.height,
                                                            c = te.O.view.getViewGlobalPosition(),
                                                            d = c.x,
                                                            _ = c.y;
                                                        switch (u) {
                                                            case oe.Left:
                                                            case oe.Right:
                                                                return { top: `${mu(l, n, o, _)}%` };
                                                            case oe.Bottom:
                                                            case oe.Top:
                                                                return { left: `${mu(i, r, a, d)}%` };
                                                        }
                                                    })(n.current),
                                                );
                                        }),
                                    ),
                                [],
                            ),
                            (l = d.SW),
                            ce(ie.n.ESCAPE, l),
                            a().createElement(
                                ae,
                                { customStyles: { arrow: s } },
                                a().createElement(
                                    'div',
                                    { ref: n, className: 'ReplaysFilterPopoverApp_base_9c' },
                                    a().createElement(
                                        'div',
                                        { className: 'ReplaysFilterPopoverApp_title_22' },
                                        R.strings.replays.filterPopover.title(),
                                        a().createElement('div', { className: 'ReplaysFilterPopoverApp_divider_dc' }),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: 'ReplaysFilterPopoverApp_content_0e' },
                                        B(t.filterGroups.get(), (e) =>
                                            a().createElement(
                                                ee,
                                                _u({ key: e.id }, e, {
                                                    theme: J.InPopup,
                                                    onClick: u.updateFilter,
                                                    className: 'ReplaysFilterPopoverApp_filterGroup_03',
                                                }),
                                            ),
                                        ),
                                        a().createElement(cu, { className: 'ReplaysFilterPopoverApp_vehicles_ea' }),
                                        a().createElement(Gt, {
                                            className: c()(du, 'ReplaysFilterPopoverApp_lastDaysDropdown_e2'),
                                            selectedId: t.selectedLastDays.get(),
                                            onChange: (e) => {
                                                const t = 'string' == typeof e ? parseFloat(e) : e;
                                                isNaN(t) || u.selectLastDaysOption(t);
                                            },
                                        }),
                                        a().createElement(Se, { className: du }),
                                        a().createElement(Ne, null),
                                    ),
                                ),
                            )
                        );
                    }),
                    pu = [
                        {
                            filters: [
                                {
                                    counter: 0,
                                    icon: 'img://gui/maps/icons/vehicleTypes/extraSmall/lightTank.png',
                                    id: 'lightTank',
                                    isSelected: !1,
                                    tooltip: {
                                        body: 'Show/hide replays for this type of vehicles.',
                                        contentId: 0,
                                        header: 'Light Tanks',
                                        targetId: 0,
                                    },
                                },
                                {
                                    counter: 0,
                                    icon: 'img://gui/maps/icons/vehicleTypes/extraSmall/mediumTank.png',
                                    id: 'mediumTank',
                                    isSelected: !1,
                                    tooltip: {
                                        body: 'Show/hide replays for this type of vehicles.',
                                        contentId: 0,
                                        header: 'Medium Tanks',
                                        targetId: 0,
                                    },
                                },
                                {
                                    counter: 0,
                                    icon: 'img://gui/maps/icons/vehicleTypes/extraSmall/heavyTank.png',
                                    id: 'heavyTank',
                                    isSelected: !1,
                                    tooltip: {
                                        body: 'Show/hide replays for this type of vehicles.',
                                        contentId: 0,
                                        header: 'Heavy Tanks',
                                        targetId: 0,
                                    },
                                },
                                {
                                    counter: 0,
                                    icon: 'img://gui/maps/icons/vehicleTypes/extraSmall/AT-SPG.png',
                                    id: 'AT-SPG',
                                    isSelected: !1,
                                    tooltip: {
                                        body: 'Show/hide replays for this type of vehicles.',
                                        contentId: 0,
                                        header: 'Tank Destroyers',
                                        targetId: 0,
                                    },
                                },
                                {
                                    counter: 0,
                                    icon: 'img://gui/maps/icons/vehicleTypes/extraSmall/SPG.png',
                                    id: 'SPG',
                                    isSelected: !1,
                                    tooltip: {
                                        body: 'Show/hide replays for this type of vehicles.',
                                        contentId: 0,
                                        header: 'SPGs',
                                        targetId: 0,
                                    },
                                },
                            ],
                            hasDiscount: !1,
                            id: 'vehicleType',
                            label: "Vehicle's type",
                            type: 'vehicleType',
                        },
                        {
                            filters: [
                                {
                                    counter: 0,
                                    icon: 'img://gui/maps/icons/filters/nations/germany.png',
                                    id: 'germany',
                                    isSelected: !1,
                                    tooltip: {
                                        body: 'Show/hide replays of this nation.',
                                        contentId: 0,
                                        header: 'Germany',
                                        targetId: 0,
                                    },
                                },
                                {
                                    counter: 0,
                                    icon: 'img://gui/maps/icons/filters/nations/ussr.png',
                                    id: 'ussr',
                                    isSelected: !1,
                                    tooltip: {
                                        body: 'Show/hide replays of this nation.',
                                        contentId: 0,
                                        header: 'U.S.S.R.',
                                        targetId: 0,
                                    },
                                },
                                {
                                    counter: 0,
                                    icon: 'img://gui/maps/icons/filters/nations/usa.png',
                                    id: 'usa',
                                    isSelected: !1,
                                    tooltip: {
                                        body: 'Show/hide replays of this nation.',
                                        contentId: 0,
                                        header: 'U.S.A.',
                                        targetId: 0,
                                    },
                                },
                                {
                                    counter: 0,
                                    icon: 'img://gui/maps/icons/filters/nations/france.png',
                                    id: 'france',
                                    isSelected: !1,
                                    tooltip: {
                                        body: 'Show/hide replays of this nation.',
                                        contentId: 0,
                                        header: 'France',
                                        targetId: 0,
                                    },
                                },
                                {
                                    counter: 0,
                                    icon: 'img://gui/maps/icons/filters/nations/uk.png',
                                    id: 'uk',
                                    isSelected: !1,
                                    tooltip: {
                                        body: 'Show/hide replays of this nation.',
                                        contentId: 0,
                                        header: 'U.K.',
                                        targetId: 0,
                                    },
                                },
                                {
                                    counter: 0,
                                    icon: 'img://gui/maps/icons/filters/nations/china.png',
                                    id: 'china',
                                    isSelected: !1,
                                    tooltip: {
                                        body: 'Show/hide replays of this nation.',
                                        contentId: 0,
                                        header: 'China',
                                        targetId: 0,
                                    },
                                },
                                {
                                    counter: 0,
                                    icon: 'img://gui/maps/icons/filters/nations/japan.png',
                                    id: 'japan',
                                    isSelected: !1,
                                    tooltip: {
                                        body: 'Show/hide replays of this nation.',
                                        contentId: 0,
                                        header: 'Japan',
                                        targetId: 0,
                                    },
                                },
                                {
                                    counter: 0,
                                    icon: 'img://gui/maps/icons/filters/nations/poland.png',
                                    id: 'poland',
                                    isSelected: !1,
                                    tooltip: {
                                        body: 'Show/hide replays of this nation.',
                                        contentId: 0,
                                        header: 'Poland',
                                        targetId: 0,
                                    },
                                },
                                {
                                    counter: 0,
                                    icon: 'img://gui/maps/icons/filters/nations/sweden.png',
                                    id: 'sweden',
                                    isSelected: !1,
                                    tooltip: {
                                        body: 'Show/hide replays of this nation.',
                                        contentId: 0,
                                        header: 'Sweden',
                                        targetId: 0,
                                    },
                                },
                                {
                                    counter: 0,
                                    icon: 'img://gui/maps/icons/filters/nations/italy.png',
                                    id: 'italy',
                                    isSelected: !1,
                                    tooltip: {
                                        body: 'Show/hide replays of this nation.',
                                        contentId: 0,
                                        header: 'Italy',
                                        targetId: 0,
                                    },
                                },
                            ],
                            hasDiscount: !1,
                            id: 'nation',
                            label: 'Nation',
                            type: 'nation',
                        },
                        {
                            filters: [
                                {
                                    counter: 0,
                                    icon: null,
                                    id: '1',
                                    isSelected: !1,
                                    tooltip: { body: null, contentId: 0, header: null, targetId: 0 },
                                },
                                {
                                    counter: 0,
                                    icon: null,
                                    id: '2',
                                    isSelected: !1,
                                    tooltip: { body: null, contentId: 0, header: null, targetId: 0 },
                                },
                                {
                                    counter: 0,
                                    icon: null,
                                    id: '3',
                                    isSelected: !1,
                                    tooltip: { body: null, contentId: 0, header: null, targetId: 0 },
                                },
                                {
                                    counter: 0,
                                    icon: null,
                                    id: '4',
                                    isSelected: !1,
                                    tooltip: { body: null, contentId: 0, header: null, targetId: 0 },
                                },
                                {
                                    counter: 0,
                                    icon: null,
                                    id: '5',
                                    isSelected: !1,
                                    tooltip: { body: null, contentId: 0, header: null, targetId: 0 },
                                },
                                {
                                    counter: 0,
                                    icon: null,
                                    id: '6',
                                    isSelected: !1,
                                    tooltip: { body: null, contentId: 0, header: null, targetId: 0 },
                                },
                                {
                                    counter: 0,
                                    icon: null,
                                    id: '7',
                                    isSelected: !1,
                                    tooltip: { body: null, contentId: 0, header: null, targetId: 0 },
                                },
                                {
                                    counter: 0,
                                    icon: null,
                                    id: '8',
                                    isSelected: !1,
                                    tooltip: { body: null, contentId: 0, header: null, targetId: 0 },
                                },
                                {
                                    counter: 0,
                                    icon: null,
                                    id: '9',
                                    isSelected: !1,
                                    tooltip: { body: null, contentId: 0, header: null, targetId: 0 },
                                },
                                {
                                    counter: 0,
                                    icon: null,
                                    id: '10',
                                    isSelected: !1,
                                    tooltip: { body: null, contentId: 0, header: null, targetId: 0 },
                                },
                            ],
                            hasDiscount: !1,
                            id: 'vehicleTier',
                            label: 'Tier',
                            type: 'vehicleTier',
                        },
                    ],
                    Au = [
                        {
                            isSelected: !1,
                            vehicleCD: 12049,
                            roleKey: 'role_ATSPG_assault',
                            nation: 'germany',
                            tags: '',
                            isPremium: !0,
                            type: 'AT-SPG',
                            tier: 10,
                            techName: 'G72_JagdPz_E100',
                            name: 'Jg.Pz. E 100',
                        },
                        {
                            isSelected: !1,
                            vehicleCD: 22017,
                            roleKey: 'role_HT_break',
                            nation: 'ussr',
                            tags: '',
                            isPremium: !0,
                            type: 'heavyTank',
                            tier: 10,
                            techName: 'R155_Object_277',
                            name: 'Obj. 277',
                        },
                        {
                            isSelected: !1,
                            vehicleCD: 2721,
                            roleKey: 'role_MT_support',
                            nation: 'italy',
                            tags: '',
                            isPremium: !0,
                            type: 'mediumTank',
                            tier: 10,
                            techName: 'It08_Progetto_M40_mod_65',
                            name: 'Progetto 65',
                        },
                        {
                            isSelected: !1,
                            vehicleCD: 6753,
                            roleKey: 'role_ATSPG_universal',
                            nation: 'japan',
                            tags: '',
                            isPremium: !1,
                            type: 'AT-SPG',
                            tier: 9,
                            techName: 'J34_Ho_Ri_1',
                            name: 'Ho-Ri 1',
                        },
                        {
                            isSelected: !1,
                            vehicleCD: 4961,
                            roleKey: 'role_HT_assault',
                            nation: 'japan',
                            tags: '',
                            isPremium: !1,
                            type: 'heavyTank',
                            tier: 8,
                            techName: 'J27_O_I_120',
                            name: 'O-Ho',
                        },
                        {
                            isSelected: !1,
                            vehicleCD: 4097,
                            roleKey: 'role_SPG',
                            nation: 'ussr',
                            tags: '',
                            isPremium: !1,
                            type: 'SPG',
                            tier: 8,
                            techName: 'R27_SU_14',
                            name: 'SU-14-2',
                        },
                        {
                            isSelected: !1,
                            vehicleCD: 19457,
                            roleKey: 'role_LT_universal',
                            nation: 'ussr',
                            tags: '',
                            isPremium: !1,
                            type: 'lightTank',
                            tier: 7,
                            techName: 'R131_Tank_Gavalov',
                            name: 'LTG',
                        },
                        {
                            isSelected: !1,
                            vehicleCD: 1121,
                            roleKey: 'role_MT_sniper',
                            nation: 'japan',
                            tags: '',
                            isPremium: !1,
                            type: 'mediumTank',
                            tier: 7,
                            techName: 'J11_Chi_Ri',
                            name: 'Chi-Ri',
                        },
                        {
                            isSelected: !1,
                            vehicleCD: 1697,
                            roleKey: 'role_MT_universal',
                            nation: 'italy',
                            tags: '',
                            isPremium: !1,
                            type: 'mediumTank',
                            tier: 6,
                            techName: 'It10_P43_bis',
                            name: 'P.43 bis',
                        },
                        {
                            isSelected: !1,
                            vehicleCD: 929,
                            roleKey: 'NotDefined',
                            nation: 'italy',
                            tags: '',
                            isPremium: !1,
                            type: 'mediumTank',
                            tier: 3,
                            techName: 'It03_M15_42',
                            name: 'M15/42',
                        },
                    ],
                    Fu = {
                        getter: (e) => {
                            switch (e) {
                                case 'filterGroups':
                                    return pu;
                                case 'vehicles':
                                    return Au;
                                default:
                                    return {
                                        vehicleSortColumn: ye.Tier,
                                        isVehicleSortAscending: !0,
                                        canResetFilter: !0,
                                        canApplyFilter: !0,
                                        selectedLastDays: 14,
                                        isPrimeTime: !1,
                                    };
                            }
                        },
                        controls: () => ({
                            selectLastDaysOption: (e) => model.onLastDaysOptionSelect({ count: e }),
                            selectCheckbox: (e) => model.onCheckboxSelect({ checkboxId: e }),
                            sortVehiclesByColumn: (e) => model.onSortVehiclesByColumn({ column: e }),
                            updateFilter: (e, t) => model.onUpdateFilter({ groupID: e, toggleID: t }),
                            selectVehicle: (e) => model.onSelectVehicle({ vehicleCD: e }),
                            resetFilter: () => model.onResetFilter(),
                            applyFilter: () => model.onApplyFilter(),
                        }),
                    };
                engine.whenReady.then(() => {
                    i().render(
                        a().createElement(Fe, { mocks: Fu, mode: 'real' }, a().createElement(Eu, null)),
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
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](u, u.exports, __webpack_require__), u.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, n) => {
            if (!t) {
                var o = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, u, n] = deferred[i], r = !0, a = 0; a < t.length; a++)
                        (!1 & n || o >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[a]))
                            ? t.splice(a--, 1)
                            : ((r = !1), n < o && (o = n));
                    if (r) {
                        deferred.splice(i--, 1);
                        var s = u();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, u, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var u in t)
                __webpack_require__.o(t, u) &&
                    !__webpack_require__.o(e, u) &&
                    Object.defineProperty(e, u, { enumerable: !0, get: t[u] });
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
        (__webpack_require__.j = 'lobby/popovers/ReplaysFilterPopover/ReplaysFilterPopover'),
        (() => {
            var e = { 'lobby/popovers/ReplaysFilterPopover/ReplaysFilterPopover': 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        o,
                        [r, a, s] = u,
                        i = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (n in a) __webpack_require__.o(a, n) && (__webpack_require__.m[n] = a[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(u); i < r.length; i++)
                        ((o = r[i]), __webpack_require__.o(e, o) && e[o] && e[o][0](), (e[o] = 0));
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/server_side_replay.vendors'], () =>
        __webpack_require__(983),
    );
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
