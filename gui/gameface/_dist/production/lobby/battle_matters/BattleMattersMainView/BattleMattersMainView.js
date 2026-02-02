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
            70: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => ie });
                var n = {};
                (t.r(n),
                    t.d(n, { mouse: () => m, off: () => E, on: () => d, onResize: () => l, onScaleUpdated: () => c }));
                var r = {};
                (t.r(r),
                    t.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => D,
                        getSize: () => F,
                        graphicsQuality: () => B,
                        playSound: () => A,
                        setRTPC: () => g,
                    }));
                var a = {};
                (t.r(a), t.d(a, { getBgUrl: () => w, getTextureUrl: () => v }));
                var s = {};
                function o(e) {
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
                (t.r(s),
                    t.d(s, {
                        addModelObserver: () => H,
                        addPreloadTexture: () => N,
                        arabic2roman: () => ue,
                        children: () => a,
                        displayStatus: () => S,
                        displayStatusIs: () => ne,
                        enableFullScreenModeSupported: () => se,
                        events: () => R,
                        extraSize: () => re,
                        forceTriggerMouseMove: () => Z,
                        freezeTextureBeforeResize: () => W,
                        getBrowserTexturePath: () => k,
                        getDisplayStatus: () => J,
                        getExternalPaddingsRem: () => te,
                        getFontNames: () => ee,
                        getScale: () => Q,
                        getSize: () => G,
                        getViewGlobalPosition: () => z,
                        initExternalPaddings: () => oe,
                        isEventHandled: () => K,
                        isFocused: () => Y,
                        pxToRem: () => q,
                        remToPx: () => j,
                        resize: () => $,
                        sendEvent: () => L,
                        setAnimateWindow: () => V,
                        setEventHandled: () => X,
                        setInputPaddingsRem: () => O,
                        setSidePaddingsRem: () => U,
                        whenTutorialReady: () => ae,
                    }));
                const l = o('clientResized'),
                    c = o('self.onScaleUpdated'),
                    d = (e, u) => engine.on(e, u),
                    E = (e, u) => engine.off(e, u),
                    _ = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') };
                const m = (function () {
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
                                    const a = `mouse${u}`,
                                        s = _[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        n(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(a, o),
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
                function g(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                function F(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function D(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const B = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    C = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    p = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    f = Object.keys(p).reduce((e, u) => ((e[u] = () => A(p[u])), e), {}),
                    h = { play: Object.assign({}, f, { sound: A }), setRTPC: g };
                var b = t(690);
                function v(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function w(e, u, t) {
                    return `url(${v(e, u, t)})`;
                }
                const S = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    R = {
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
                const T = 2,
                    y = 16,
                    x = 32,
                    M = 64,
                    I = (e, u) => {
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
                    L = {
                        close(e) {
                            I('popover' === e ? T : x);
                        },
                        minimize() {
                            I(M);
                        },
                        move(e) {
                            I(y, { isMouseEvent: !0, on: e });
                        },
                    };
                function N(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function O(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function k(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function H(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function U(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function G(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function $(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function z(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: j(u.x), y: j(u.y) };
                }
                function W() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function Q() {
                    return viewEnv.getScale();
                }
                function q(e) {
                    return viewEnv.pxToRem(e);
                }
                function j(e) {
                    return viewEnv.remToPx(e);
                }
                function V(e, u) {
                    viewEnv.setAnimateWindow(e, u);
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
                function Z() {
                    viewEnv.forceTriggerMouseMove();
                }
                function J() {
                    return viewEnv.getShowingStatus();
                }
                const ee = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ue = b.cg;
                function te() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const ne = Object.keys(S).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === S[u]), e), {}),
                    re = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    ae = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : R.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function se() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function oe(e) {
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
                const ie = { view: s, client: r, sound: h, intl: C };
            },
            521: (e, u, t) => {
                'use strict';
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
                'use strict';
                t.d(u, { cg: () => a });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(e) {
                    let u = '';
                    for (let t = r.length - 1; t >= 0; t--) for (; e >= r[t]; ) ((u += n[t]), (e -= r[t]));
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
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
            916: (e, u, t) => {
                'use strict';
                t.d(u, { B3: () => i, Z5: () => s.Z5, B0: () => o, ry: () => F });
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
                var s = t(613);
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
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(521),
                    _ = t(70);
                const m = ['args'];
                function A(e, u, t, n, r, a, s) {
                    try {
                        var o = e[a](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(n, r);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    F = (function () {
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
                                        function s(e) {
                                            A(a, n, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            A(a, n, r, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = (e, u) => {
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
                                })(u, m);
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
                    B = () => D(o.CLOSE),
                    C = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var p = t(572);
                const f = r.instance,
                    h = {
                        DataTracker: a.Z,
                        ViewModel: p.Z,
                        ViewEventType: o,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => D(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => D(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const s = _.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                d = i.width,
                                E = i.height,
                                m = {
                                    x: _.O.view.pxToRem(l) + s.x,
                                    y: _.O.view.pxToRem(c) + s.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(E),
                                };
                            D(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: g(m),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => C(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, B);
                        },
                        handleViewEvent: D,
                        onBindingsReady: F,
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
                        ClickOutsideManager: f,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = h;
            },
            613: (e, u, t) => {
                'use strict';
                t.d(u, { Z5: () => n, cy: () => r });
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
                    };
            },
            53: (e, u, t) => {
                'use strict';
                var n = t(363),
                    r = t.n(n);
                const a = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var s = t(70);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var i;
                function l(e = s.O.client.getSize('rem')) {
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
                        })(u, t, o),
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
                })(i || (i = {}));
                const c = l(),
                    d = (0, n.createContext)(c),
                    E = ['children'];
                (0, n.memo)((e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, E);
                    const r = (0, n.useContext)(d),
                        s = r.extraLarge,
                        o = r.large,
                        i = r.medium,
                        l = r.small,
                        c = r.extraSmall,
                        _ = r.extraLargeWidth,
                        m = r.largeWidth,
                        A = r.mediumWidth,
                        g = r.smallWidth,
                        F = r.extraSmallWidth,
                        D = r.extraLargeHeight,
                        B = r.largeHeight,
                        C = r.mediumHeight,
                        p = r.smallHeight,
                        f = r.extraSmallHeight,
                        h = { extraLarge: D, large: B, medium: C, small: p, extraSmall: f };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && s) return u;
                        if (t.large && o) return u;
                        if (t.medium && i) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && _) return a(u, t, h);
                        if (t.largeWidth && m) return a(u, t, h);
                        if (t.mediumWidth && A) return a(u, t, h);
                        if (t.smallWidth && g) return a(u, t, h);
                        if (t.extraSmallWidth && F) return a(u, t, h);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return u;
                            if (t.largeHeight && B) return u;
                            if (t.mediumHeight && C) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && f) return u;
                        }
                    }
                    return null;
                });
                const _ = ({ children: e }) => {
                    const u = (0, n.useState)(l),
                        t = u[0],
                        a = u[1],
                        o = (0, n.useState)(!1),
                        i = o[0],
                        c = o[1];
                    return (
                        (0, n.useLayoutEffect)(() => {
                            function e() {
                                a((e) => {
                                    const u = s.O.client.getSize('rem');
                                    return e.width === u.width && e.height === u.height ? e : l(u);
                                });
                            }
                            return (
                                e(),
                                c(!0),
                                s.O.client.events.on('clientResized', e),
                                s.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (s.O.client.events.off('clientResized', e),
                                        s.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        r().createElement(d.Provider, { value: t }, i && e)
                    );
                };
                var m = t(483),
                    A = t.n(m),
                    g = t(926),
                    F = t.n(g);
                let D, B, C;
                (!(function (e) {
                    ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                })(D || (D = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                    })(B || (B = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge'));
                    })(C || (C = {})));
                const p = () => {
                        const e = (0, n.useContext)(d),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return D.ExtraLarge;
                                    case e.large:
                                        return D.Large;
                                    case e.medium:
                                        return D.Medium;
                                    case e.small:
                                        return D.Small;
                                    case e.extraSmall:
                                        return D.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), D.ExtraSmall);
                                }
                            })(e),
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return B.ExtraLarge;
                                    case e.largeWidth:
                                        return B.Large;
                                    case e.mediumWidth:
                                        return B.Medium;
                                    case e.smallWidth:
                                        return B.Small;
                                    case e.extraSmallWidth:
                                        return B.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), B.ExtraSmall);
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return C.ExtraLarge;
                                    case e.largeHeight:
                                        return C.Large;
                                    case e.mediumHeight:
                                        return C.Medium;
                                    case e.smallHeight:
                                        return C.Small;
                                    case e.extraSmallHeight:
                                        return C.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), C.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: a, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    f = ['children', 'className'];
                function h() {
                    return (
                        (h =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        h.apply(this, arguments)
                    );
                }
                const b = {
                        [B.ExtraSmall]: '',
                        [B.Small]: F().SMALL_WIDTH,
                        [B.Medium]: `${F().SMALL_WIDTH} ${F().MEDIUM_WIDTH}`,
                        [B.Large]: `${F().SMALL_WIDTH} ${F().MEDIUM_WIDTH} ${F().LARGE_WIDTH}`,
                        [B.ExtraLarge]: `${F().SMALL_WIDTH} ${F().MEDIUM_WIDTH} ${F().LARGE_WIDTH} ${F().EXTRA_LARGE_WIDTH}`,
                    },
                    v = {
                        [C.ExtraSmall]: '',
                        [C.Small]: F().SMALL_HEIGHT,
                        [C.Medium]: `${F().SMALL_HEIGHT} ${F().MEDIUM_HEIGHT}`,
                        [C.Large]: `${F().SMALL_HEIGHT} ${F().MEDIUM_HEIGHT} ${F().LARGE_HEIGHT}`,
                        [C.ExtraLarge]: `${F().SMALL_HEIGHT} ${F().MEDIUM_HEIGHT} ${F().LARGE_HEIGHT} ${F().EXTRA_LARGE_HEIGHT}`,
                    },
                    w = {
                        [D.ExtraSmall]: '',
                        [D.Small]: F().SMALL,
                        [D.Medium]: `${F().SMALL} ${F().MEDIUM}`,
                        [D.Large]: `${F().SMALL} ${F().MEDIUM} ${F().LARGE}`,
                        [D.ExtraLarge]: `${F().SMALL} ${F().MEDIUM} ${F().LARGE} ${F().EXTRA_LARGE}`,
                    },
                    S = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, f);
                        const a = p(),
                            s = a.mediaWidth,
                            o = a.mediaHeight,
                            i = a.mediaSize;
                        return r().createElement('div', h({ className: A()(t, b[s], v[o], w[i]) }, n), u);
                    },
                    P = ['children'];
                const T = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, P);
                    return r().createElement(_, null, r().createElement(S, t, u));
                };
                var y = t(533),
                    x = t.n(y),
                    M = t(521),
                    I = t(916);
                const L = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function N(e = M.n.NONE, u = L, t = !1, r = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== M.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!r && s.O.view.isEventHandled()) return;
                                (s.O.view.setEventHandled(), u(n), t && n.stopPropagation());
                            }
                        }
                    }, [u, e, t, r]);
                }
                var O = t(403);
                const k = 'Background_base_1b',
                    H = 'Background_image_71',
                    U = ({ isBlurred: e, children: u, onLoaded: t }) => {
                        const a = e
                            ? 'img://gui/maps/icons/battleMatters/common/background_blurred.dds'
                            : R.images.gui.maps.icons.battleMatters.common.background();
                        var s, o;
                        return (
                            (s = a),
                            (o = t),
                            (0, n.useEffect)(() => {
                                if (!o) return;
                                const e = new Image();
                                return (
                                    e.addEventListener('load', o),
                                    e.addEventListener('error', o),
                                    (e.src = s),
                                    () => {
                                        (e.removeEventListener('load', o), e.removeEventListener('error', o));
                                    }
                                );
                            }, [o, s]),
                            r().createElement(
                                'div',
                                { className: k },
                                r().createElement('div', { className: H, style: { backgroundImage: `url(${a})` } }, u),
                            )
                        );
                    };
                const G = ({ value: e, format: u = 'integral' }) => {
                    const t = (function (e) {
                            return 'gold' === e ? I.B3.GOLD : I.B3.INTEGRAL;
                        })(u),
                        n = I.Z5.getNumberFormat(e, t);
                    return void 0 !== e && void 0 !== n ? n : null;
                };
                let $, z, W, Q, q, j, V, Y;
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
                })($ || ($ = {})),
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
                    })(z || (z = {})),
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
                    })(W || (W = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(Q || (Q = {})),
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
                    })(q || (q = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(j || (j = {})),
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
                    })(V || (V = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(Y || (Y = {})));
                const X = [$.Attachment],
                    K = [
                        $.Items,
                        $.Equipment,
                        $.Xp,
                        $.XpFactor,
                        $.Blueprints,
                        $.BlueprintsAny,
                        $.Goodies,
                        $.Berths,
                        $.Slots,
                        $.Tokens,
                        $.CrewSkins,
                        $.CrewBooks,
                        $.Customizations,
                        $.CreditsFactor,
                        $.TankmenXp,
                        $.TankmenXpFactor,
                        $.FreeXpFactor,
                        $.BattleToken,
                        $.LootBox,
                        $.PremiumUniversal,
                        $.NaturalCover,
                        $.BpCoin,
                        $.BattlePassSelectToken,
                        $.BattlaPassFinalAchievement,
                        $.BattleBadge,
                        $.BattlePassTicket,
                        $.BonusX5,
                        $.CrewBonusX3,
                        $.EpicSelectToken,
                        $.Comp7TokenWeeklyReward,
                        $.DeluxeGift,
                        $.ModernizedDevicesT1Gift,
                        $.ModernizedDevicesT2Gift,
                        $.ModernizedDevicesT3Gift,
                        $.BattleBoosterGift,
                        $.OptionalDevice,
                        $.Attachment,
                    ],
                    Z = [$.Gold, $.Credits, $.Crystal, $.FreeXp],
                    J = [$.BattlePassPoints, $.EquipCoin],
                    ee = [$.PremiumPlus, $.Premium],
                    ue = (e) =>
                        K.includes(e)
                            ? Q.MULTI
                            : Z.includes(e)
                              ? Q.CURRENCY
                              : J.includes(e)
                                ? Q.NUMBER
                                : ee.includes(e)
                                  ? Q.PREMIUM_PLUS
                                  : Q.STRING,
                    te = ['engravings', 'backgrounds'],
                    ne = ['engraving', 'background'],
                    re = (e, u = W.Small) => {
                        const t = e.name,
                            n = e.type,
                            r = e.value,
                            a = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case W.S600x450:
                                        return 'c_600x450';
                                    case W.S400x300:
                                        return 'c_400x300';
                                    case W.S296x222:
                                        return 'c_296x222';
                                    case W.S232x174:
                                        return 'c_232x174';
                                    case W.Big:
                                        return 'c_80x80';
                                    case W.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${r}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${a}`;
                            case 'tokens':
                            case 'lootBox':
                            case 'battleToken':
                                return 'big' === u
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${a}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const n = te[e];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            a = r.$dyn(t);
                                        return a ? `${a}` : `${r.$dyn(ne[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, u, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${i}.${a}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${i}.${a}`;
                            case 'attachment':
                                return `R.images.gui.maps.vehicles.attachments.${u}.${a}`;
                            case 'statTracker':
                                return `R.images.gui.maps.vehicles.statTrackers.${u}.${a}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    ae = (e, u, t) => {
                        const n = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            n,
                            t,
                        );
                    },
                    se = [W.Small, W.Big],
                    oe = 'questID';
                let ie;
                !(function (e) {
                    ((e.Done = 'done'), (e.InProgress = 'inProgress'), (e.Unavailable = 'unavailable'));
                })(ie || (ie = {}));
                function le(e) {
                    return e;
                }
                function ce() {
                    return !1;
                }
                console.log;
                var de = t(174);
                function Ee(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return _e(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return _e(e, u);
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
                function _e(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const me = (e) => (0 === e ? window : window.subViews.get(e));
                function Ae(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const ge = Ae;
                function Fe(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                var De = t(946);
                let Be;
                !(function (e) {
                    ((e.Scrolling = 'scrolling'),
                        (e.ToDone = 'toDone'),
                        (e.ToDoneFinished = 'toDoneFinished'),
                        (e.ToInProgress = 'toInProgress'),
                        (e.None = 'none'));
                })(Be || (Be = {}));
                const Ce = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: o, children: i, mocks: l }) {
                                const c = (0, n.useRef)([]),
                                    d = (t, n, r) => {
                                        var a;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = me,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function a(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = r.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const r = t(u),
                                                        a = n.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const i = 'string' == typeof a ? `${n}.${a}` : n,
                                                            l = s.O.view.addModelObserver(i, u, !0);
                                                        return (r.set(l, t), e && t(o(a)), l);
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, u) => {
                                                        const t = o(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = o(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = Ee(r.keys()); !(e = t()).done; ) a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(n),
                                            i =
                                                'real' === t
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(e)) : i.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            E = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    dict: (e) => {
                                                        const u = l(e),
                                                            n = de.LO.box(u, { equals: ce });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, de.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            r = de.LO.box(n, { equals: ce });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, de.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            r = de.LO.box(n, { equals: ce });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, de.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, u) => ((e[u] = de.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, de.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                a = Object.entries(r),
                                                                s = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = de.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, de.aD)((e) => {
                                                                            a.forEach(([u, t]) => {
                                                                                s[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            _ = { mode: t, model: E, externalModel: i, cleanup: d };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && r ? r.controls(_) : u(_),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    E = (0, n.useRef)(!1),
                                    _ = (0, n.useState)(a),
                                    m = _[0],
                                    A = _[1],
                                    g = (0, n.useState)(() => d(a, o, l)),
                                    F = g[0],
                                    D = g[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        E.current ? D(d(m, o, l)) : (E.current = !0);
                                    }, [l, m, o]),
                                    (0, n.useEffect)(() => {
                                        A(a);
                                    }, [a]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    r().createElement(t.Provider, { value: F }, i)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = Object.assign(
                                    {
                                        progression: e.primitives(
                                            ['countCompleted', 'totalQuests', 'lastSeenProgress', 'mainRewardReceived'],
                                            'questProgress',
                                        ),
                                        intermediateQuests: e.array('questProgress.intermediateQuests', []),
                                        quests: e.array('quests', []),
                                    },
                                    e.primitives(['isRewardsViewOpen']),
                                ),
                                t = de.LO.box(!1),
                                n = de.LO.box(Be.None),
                                r = de.LO.box(void 0),
                                a = (0, De.Om)(() =>
                                    Fe(u.intermediateQuests.get(), (e) =>
                                        Object.assign({}, e, { rewards: Fe(e.rewards, le) }),
                                    ),
                                ),
                                s = (0, De.Om)(() =>
                                    Fe(u.quests.get(), (e) => Object.assign({}, e, { rewards: Fe(e.rewards, le) })),
                                ),
                                o = (0, De.Om)(() => s().length),
                                i = (0, De.Om)((e) => Ae(s(), e), { equals: ce }),
                                l = (0, De.Om)(
                                    (e, u) => {
                                        const t = i(e),
                                            n = t
                                                ? Fe(t.rewards, (e) => ({
                                                      name: e.name,
                                                      valueType: ue(e.name),
                                                      value: e.value,
                                                      special: e.overlayType,
                                                      image: re(e, u),
                                                      tooltipArgs: ae(
                                                          { tooltipId: e.tooltipId },
                                                          Number(e.tooltipContentId),
                                                          { ignoreShowDelay: !0 },
                                                      ),
                                                  }))
                                                : [],
                                            r = n.length > 5 ? 4 : 5;
                                        return {
                                            data: n,
                                            count: r,
                                            boxRewardTooltip: t
                                                ? ae(
                                                      { showCount: r, [oe]: t.number },
                                                      R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                                  )
                                                : void 0,
                                        };
                                    },
                                    { equals: ce },
                                ),
                                c = (0, De.Om)(() =>
                                    (function (e, u) {
                                        for (let t = e.length - 1; t >= 0; t--) if (u(ge(e, t), t, e)) return t;
                                    })(s(), (e) => e.state === ie.Done),
                                ),
                                d = (0, De.Om)(() =>
                                    (function (e, u) {
                                        for (let t = 0; t < e.length; t++) if (u(ge(e, t), t, e)) return t;
                                    })(s(), (e) => e.state === ie.InProgress),
                                ),
                                E = (0, De.Om)(() => {
                                    const e = c(),
                                        t = u.progression.lastSeenProgress.get();
                                    return void 0 !== e && t - 1 < e;
                                }),
                                _ = (0, De.Om)(() => {
                                    const e = d(),
                                        u = c();
                                    return void 0 === e ? u : e;
                                }),
                                m = (0, De.Om)((e) => {
                                    const u = i(e);
                                    return u ? u.maxProgress > 0 : void 0;
                                });
                            return Object.assign({}, u, {
                                isLoaded: t,
                                questSwitchAnimationPhase: n,
                                lastPlayedToDoneAnimationQuestIndex: r,
                                computes: {
                                    getQuests: s,
                                    getIntermediateQuests: a,
                                    getQuestsLength: o,
                                    getQuest: i,
                                    getQuestRewardsProps: l,
                                    getLastDoneQuestIndex: c,
                                    getFirstInProgressQuestIndex: d,
                                    getIsQuestSwitchAnimationNeeded: E,
                                    getCurrentQuestIndex: _,
                                    getIsProgressionQuest: m,
                                },
                            });
                        },
                        ({ externalModel: e, model: u }) => ({
                            showView: e.createCallbackNoArgs('onShowView'),
                            close: e.createCallbackNoArgs('onClose'),
                            showManual: e.createCallbackNoArgs('onShowManual'),
                            showMainReward: e.createCallbackNoArgs('onShowMainReward'),
                            exchangeToken: e.createCallbackNoArgs('onSelectDelayedReward'),
                            loaded: (0, de.aD)(() => u.isLoaded.set(!0)),
                            setQuestSwitchAnimationPhase: (0, de.aD)((e) => u.questSwitchAnimationPhase.set(e)),
                            setLastPlayedToDoneAnimationQuestIndex: (0, de.aD)((e) =>
                                u.lastPlayedToDoneAnimationQuestIndex.set(e),
                            ),
                            showAnimForQuest: e.createCallback((e) => ({ [oe]: e }), 'onShowAnimForQuest'),
                            showManualForQuest: e.createCallback((e) => ({ [oe]: e }), 'onShowManualForQuest'),
                        }),
                    ),
                    pe = Ce[0],
                    fe = Ce[1];
                var he = t(281);
                let be;
                function ve(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(be || (be = {}));
                const we = (e) => e.replace(/&nbsp;/g, ' '),
                    Se = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Re = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Pe = (e, u, t = be.left) => e.split(u).reduce(t === be.left ? Se : Re, []),
                    Te = (() => {
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
                    ye = ['zh_cn', 'zh_sg', 'zh_tw'],
                    xe = (e, u = be.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (ye.includes(t)) return Te(e);
                        if ('ja' === t) {
                            return (0, he.D4)()
                                .parse(e)
                                .map((e) => we(e));
                        }
                        return ((e, u = be.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = we(e);
                            return (Pe(r, /( )/, u).forEach((e) => (t = t.concat(Pe(e, n, be.left)))), t);
                        })(e, u);
                    },
                    Me = 'FormatText_base_d0',
                    Ie = ({ binding: e, text: u = '', classMix: t, alignment: a = be.left, formatWithBrackets: s }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const o = s && e ? ve(u, e) : u;
                        return r().createElement(
                            n.Fragment,
                            null,
                            o.split('\n').map((u, s) =>
                                r().createElement(
                                    'div',
                                    { className: A()(Me, t), key: `${u}-${s}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : xe(e, u))))(
                                        u,
                                        a,
                                        e,
                                    ).map((e, u) => r().createElement(n.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    };
                function Le(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const Ne = {
                        playHighlight() {
                            Le('highlight');
                        },
                        playClick() {
                            Le('play');
                        },
                        playYes() {
                            Le('yes1');
                        },
                    },
                    Oe = {
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
                let ke, He;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(ke || (ke = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(He || (He = {})));
                const Ue = ({
                        children: e,
                        size: u,
                        disabled: t,
                        mixClass: a,
                        onMouseEnter: s,
                        onMouseMove: o,
                        onMouseDown: i,
                        onMouseUp: l,
                        onMouseLeave: c,
                        onClick: d,
                        isFocused: E = !1,
                        type: _ = ke.primary,
                        soundHover: m = 'highlight',
                        soundClick: g = 'play',
                    }) => {
                        const F = (0, n.useRef)(null),
                            D = (0, n.useState)(E),
                            B = D[0],
                            C = D[1],
                            p = (0, n.useState)(!1),
                            f = p[0],
                            h = p[1];
                        return (
                            (0, n.useEffect)(() => {
                                function e(e) {
                                    B && null !== F.current && !F.current.contains(e.target) && C(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', e),
                                    () => {
                                        document.removeEventListener('mousedown', e);
                                    }
                                );
                            }, [B]),
                            (0, n.useEffect)(() => {
                                C(E);
                            }, [E]),
                            r().createElement(
                                'div',
                                {
                                    ref: F,
                                    className: A()(
                                        Oe.base,
                                        Oe[`base__${_}`],
                                        t && Oe.base__disabled,
                                        u && Oe[`base__${u}`],
                                        B && Oe.base__focus,
                                        f && Oe.base__highlightActive,
                                        a,
                                    ),
                                    onMouseEnter: function (e) {
                                        t || (null !== m && Le(m), s && s(e));
                                    },
                                    onMouseMove: function (e) {
                                        o && o(e);
                                    },
                                    onMouseUp: function (e) {
                                        t || (l && l(e), h(!1));
                                    },
                                    onMouseDown: function (e) {
                                        t ||
                                            (null !== g && Le(g),
                                            i && i(e),
                                            E && (t || (F.current && (F.current.focus(), C(!0)))),
                                            h(!0));
                                    },
                                    onMouseLeave: function (e) {
                                        t || (c && c(e), h(!1));
                                    },
                                    onClick: function (e) {
                                        t || (d && d(e));
                                    },
                                },
                                _ !== ke.ghost &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: Oe.back }),
                                        r().createElement('span', { className: Oe.texture }),
                                    ),
                                r().createElement(
                                    'span',
                                    { className: A()(Oe.state, Oe.state__default) },
                                    r().createElement('span', { className: Oe.stateDisabled }),
                                    r().createElement('span', { className: Oe.stateHighlightHover }),
                                    r().createElement('span', { className: Oe.stateHighlightActive }),
                                ),
                                r().createElement(
                                    'span',
                                    { className: Oe.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    e,
                                ),
                            )
                        );
                    },
                    Ge = 'MainReward_base_54',
                    $e = 'MainReward_image_a5',
                    ze = 'MainReward_received_f6',
                    We = 'MainReward_receivedText_59',
                    Qe = 'MainReward_checkMarkWrapper_b9',
                    qe = 'MainReward_checkMark_87',
                    je = 'MainReward_back_dc',
                    Ve = 'MainReward_button_0f',
                    Ye = R.strings.battle_matters.mainScreen,
                    Xe = (0, O.Pi)(() => {
                        const e = fe(),
                            u = e.controls,
                            t = e.model;
                        return r().createElement(
                            'div',
                            { className: Ge },
                            r().createElement('div', { className: $e }),
                            t.progression.mainRewardReceived.get()
                                ? r().createElement(
                                      'div',
                                      { className: ze },
                                      r().createElement(
                                          'div',
                                          { className: Qe },
                                          r().createElement('div', { className: je }),
                                          r().createElement('div', { className: qe }),
                                      ),
                                      r().createElement('div', { className: We }, Ye.mainRewardReceived()),
                                  )
                                : r().createElement(
                                      Ue,
                                      { mixClass: Ve, size: He.medium, type: ke.ghost, onClick: u.showMainReward },
                                      Ye.showMainReward(),
                                  ),
                        );
                    }),
                    Ke = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Ze, Je;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                })(Ze || (Ze = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(Je || (Je = {})));
                const eu = ({ size: e = Ze.Default }) => {
                        const u = A()(Ke.background, Ke[`background__${e}`]);
                        return r().createElement('div', { className: u });
                    },
                    uu = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    tu = ({ size: e }) => {
                        const u = A()(uu.base, uu[`base__${e}`]);
                        return r().createElement('div', { className: u });
                    },
                    nu = {
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
                    ru = (0, n.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: a, withoutBounce: s }) => {
                            const o = A()(
                                    nu.base,
                                    nu[`base__${e}`],
                                    t && nu.base__disabled,
                                    a && nu.base__finished,
                                    s && nu.base__withoutBounce,
                                ),
                                i = !t && !a;
                            return r().createElement(
                                'div',
                                { className: o, style: n, ref: u },
                                r().createElement('div', { className: nu.pattern }),
                                r().createElement('div', { className: nu.gradient }),
                                i && r().createElement(tu, { size: e }),
                            );
                        },
                    ),
                    au = (e, u) => {
                        let t;
                        const n = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(n));
                        };
                    };
                let su, ou;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(su || (su = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(ou || (ou = {})));
                const iu = 'ProgressBarDeltaGrow_base_7e',
                    lu = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    cu = 'ProgressBarDeltaGrow_glow_68',
                    du = (e) => (e ? { left: 0 } : { right: 0 }),
                    Eu = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    _u = (e) => ({ transitionDuration: `${e}ms` }),
                    mu = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: s,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const d = o < a,
                                E = (0, n.useState)(su.Idle),
                                _ = E[0],
                                m = E[1],
                                g = _ === su.End,
                                F = _ === su.Idle,
                                D = _ === su.Grow,
                                B = _ === su.Shrink,
                                C = (0, n.useCallback)(
                                    (e) => {
                                        (m(e), l && l(e));
                                    },
                                    [l],
                                ),
                                p = (0, n.useCallback)(
                                    (e, u) =>
                                        au(() => {
                                            C(e);
                                        }, u),
                                    [C],
                                );
                            (0, n.useEffect)(() => {
                                if (!t)
                                    return F
                                        ? p(su.Grow, u)
                                        : D
                                          ? p(su.Shrink, e)
                                          : B
                                            ? p(su.End, e)
                                            : void (g && i && i());
                            }, [p, t, g, D, F, B, i, u, e]);
                            const f = (0, n.useMemo)(() => Object.assign({ width: '100%' }, _u(e), du(d)), [d, e]),
                                h = (0, n.useMemo)(() => Object.assign({ width: '0%' }, _u(e), du(d)), [d, e]),
                                b = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Eu(d, a), _u(e)), [a, d, e]),
                                v = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - a)}%` }, Eu(d, a), _u(e)),
                                    [a, d, o, e],
                                );
                            if (g) return null;
                            const w = A()(iu, c, d && 0 === o && lu);
                            return r().createElement(
                                'div',
                                { style: F ? b : v, className: w },
                                r().createElement(
                                    'div',
                                    { style: B ? h : f, className: cu },
                                    r().createElement(tu, { size: s }),
                                ),
                            );
                        },
                    ),
                    Au = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: s,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = e < t,
                                E = (0, n.useState)(!1),
                                _ = E[0],
                                m = E[1],
                                A = (0, n.useCallback)(
                                    (e) => {
                                        (e === su.Shrink && m(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                g = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                F = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(ru, {
                                    size: u,
                                    lineRef: a,
                                    disabled: s,
                                    isComplete: o,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: _ ? F : g,
                                }),
                                t >= 0 &&
                                    r().createElement(mu, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: A,
                                        freezed: i.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: i.delta.className,
                                    }),
                            );
                        },
                    ),
                    gu = 'ProgressBarDeltaSimple_base_6c',
                    Fu = 'ProgressBarDeltaSimple_delta_99',
                    Du = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: s,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < a,
                                d = (0, n.useState)(ou.Idle),
                                E = d[0],
                                _ = d[1],
                                m = E === ou.In,
                                A = E === ou.End,
                                g = E === ou.Idle,
                                F = (0, n.useCallback)(
                                    (e) => {
                                        (_(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, n.useEffect)(() => {
                                if (g && !t) {
                                    return au(() => {
                                        F(ou.In);
                                    }, u);
                                }
                            }, [F, t, g, u]),
                                (0, n.useEffect)(() => {
                                    if (m) {
                                        return au(() => {
                                            (i && i(), F(ou.End));
                                        }, e + u);
                                    }
                                }, [F, m, i, u, e]));
                            const D = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                B = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                C = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(a - o)}%`, left: `${c ? o : a}%` }),
                                    [a, c, o],
                                );
                            return A
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: gu, style: C },
                                      r().createElement(
                                          'div',
                                          { style: g ? D : B, className: Fu },
                                          r().createElement(tu, { size: s }),
                                      ),
                                  );
                        },
                    ),
                    Bu = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: s,
                            isComplete: o,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const d = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, e],
                            );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(ru, {
                                    size: u,
                                    lineRef: a,
                                    disabled: s,
                                    isComplete: o,
                                    baseStyles: d,
                                }),
                                t >= 0 &&
                                    r().createElement(Du, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        freezed: i.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    Cu = ['onComplete', 'onEndAnimation'];
                function pu() {
                    return (
                        (pu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        pu.apply(this, arguments)
                    );
                }
                const fu = (0, n.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Cu);
                        const s = (0, n.useState)(!1),
                            o = s[0],
                            i = s[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === a.to;
                                (e !== o && i(e), e && u && u(), t && t());
                            }, [o, u, t, a.to]);
                        switch (a.animationSettings.type) {
                            case Je.Simple:
                                return r().createElement(Bu, pu({}, a, { onEndAnimation: l, isComplete: o }));
                            case Je.Growing:
                                return r().createElement(Au, pu({}, a, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    hu = ({ size: e, value: u, lineRef: t, disabled: a, onComplete: s }) => {
                        const o = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            i = 100 === u;
                        return (
                            (0, n.useEffect)(() => {
                                i && s && s();
                            }, [i, s]),
                            r().createElement(ru, { size: e, disabled: a, baseStyles: o, isComplete: i, lineRef: t })
                        );
                    },
                    bu = ['onEndAnimation'];
                function vu() {
                    return (
                        (vu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        vu.apply(this, arguments)
                    );
                }
                const wu = (0, n.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, bu);
                    const a = (0, n.useRef)({}),
                        s = (0, n.useCallback)(() => {
                            ((a.current.from = void 0), u && u());
                        }, [u]),
                        o = 'number' == typeof a.current.from ? a.current.from : t.from;
                    return (
                        (a.current.from = o),
                        r().createElement(
                            fu,
                            vu({}, t, {
                                onEndAnimation: s,
                                key: `${o}-${t.to}-${null == t ? void 0 : t.additionalKey}`,
                                from: o,
                            }),
                        )
                    );
                });
                function Su() {
                    return (
                        (Su =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Su.apply(this, arguments)
                    );
                }
                const Ru = (0, n.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: a,
                            additionalKey: s,
                            animationSettings: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (a === u)
                                return r().createElement(hu, {
                                    key: `${a}-${u}-${s}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: c,
                                });
                            const d = {
                                from: a,
                                to: u,
                                size: e,
                                additionalKey: s,
                                lineRef: t,
                                disabled: n,
                                animationSettings: o,
                                onComplete: c,
                                onEndAnimation: i,
                                onChangeAnimationState: l,
                            };
                            return o.withStack
                                ? r().createElement(wu, d)
                                : r().createElement(fu, Su({ key: `${a}-${u}-${s}` }, d));
                        },
                    ),
                    Pu = (e) => {
                        var u, t, n, r, a, s, o, i, l, c, d, E, _, m, A, g, F, D, B, C;
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
                            '--progress-pattern-size': null != (s = e.pattern.size) ? s : '3rem 10rem',
                            '--progress-pattern-border-size': null != (o = e.pattern.borderSize) ? o : '1rem',
                            '--progress-pattern-gradient':
                                null != (i = e.pattern.gradient)
                                    ? i
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75))',
                            '--progress-pattern-gradient-finished':
                                null != (l = e.pattern.gradientFinished)
                                    ? l
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.5))',
                            '--progress-pattern-gradient-mixBlendMode':
                                null != (c = e.pattern.mixBlendMode) ? c : 'overlay',
                            '--progress-glow': `url('${e.glow}')`,
                            '--progress-glow-width':
                                null != (d = null == (E = e.glowSettings) ? void 0 : E.width) ? d : '60rem',
                            '--progress-glow-height':
                                null != (_ = null == (m = e.glowSettings) ? void 0 : m.height) ? _ : '100rem',
                            '--progress-glow-small-width':
                                null != (A = null == (g = e.glowSettings) ? void 0 : g.smallWidth) ? A : '44rem',
                            '--progress-glow-small-height':
                                null != (F = null == (D = e.glowSettings) ? void 0 : D.smallHeight) ? F : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (B = null == (C = e.glowSettings) ? void 0 : C.mixBlendMode) ? B : 'lighten',
                            '--progress-glow-small': `url('${e.glowSmall}')`,
                            '--progress-delta-color': e.delta.color,
                            '--progress-delta-shadow': e.delta.shadow,
                        };
                    },
                    Tu = (e, u, t) => (t < e ? e : t > u ? u : t),
                    yu = (e, u, t) => {
                        if ('number' == typeof t) {
                            return (Tu(0, u, t) / u) * 100;
                        }
                        return e;
                    };
                const xu = {
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
                    Mu = {
                        freezed: !1,
                        withStack: !1,
                        type: Je.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Iu = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = xu,
                            size: t = Ze.Default,
                            animationSettings: a = Mu,
                            disabled: s = !1,
                            withoutBackground: o = !1,
                            value: i,
                            deltaFrom: l,
                            additionalKey: c,
                            lineRef: d,
                            onChangeAnimationState: E,
                            onEndAnimation: _,
                            onComplete: m,
                            className: g,
                        }) => {
                            const F = (function (e, u, t) {
                                return (0, n.useMemo)(() => {
                                    const n = (Tu(0, u, e) / u) * 100;
                                    return { value: n, deltaFrom: yu(n, u, t) };
                                }, [t, u, e]);
                            })(i, e, l);
                            return r().createElement(
                                'div',
                                { className: A()(Ke.base, g, Ke[`base__${t}`]), style: Pu(u) },
                                !o && r().createElement(eu, { size: t }),
                                r().createElement(Ru, {
                                    size: t,
                                    lineRef: d,
                                    disabled: s,
                                    value: F.value,
                                    deltaFrom: F.deltaFrom,
                                    additionalKey: c,
                                    animationSettings: a,
                                    onEndAnimation: _,
                                    onChangeAnimationState: E,
                                    onComplete: m,
                                }),
                            );
                        },
                    ),
                    Lu = {
                        base: 'IntermediateQuest_base_5b',
                        base__last: 'IntermediateQuest_base__last_12',
                        questNumber: 'IntermediateQuest_questNumber_29',
                        base__currentCompleted: 'IntermediateQuest_base__currentCompleted_82',
                        base__allCompleted: 'IntermediateQuest_base__allCompleted_c9',
                        serif: 'IntermediateQuest_serif_73',
                        serif__top: 'IntermediateQuest_serif__top_88',
                        serif__bottom: 'IntermediateQuest_serif__bottom_1e',
                        rewards: 'IntermediateQuest_rewards_38',
                    };
                let Nu;
                !(function (e) {
                    ((e.Regular = 'regular'),
                        (e.CurrentCompleted = 'currentCompleted'),
                        (e.AllCompleted = 'allCompleted'));
                })(Nu || (Nu = {}));
                const Ou = ({ children: e, questNumber: u, questsCount: t, state: n }) => {
                        const a = (100 * u) / t;
                        return r().createElement(
                            'div',
                            {
                                className: A()(Lu.base, Lu[`base__${n}`], u === t && Lu.base__last),
                                style: { left: `${a}%` },
                            },
                            r().createElement('div', { className: Lu.questNumber }, u),
                            r().createElement('div', { className: A()(Lu.serif, Lu.serif__top) }),
                            r().createElement('div', { className: A()(Lu.serif, Lu.serif__bottom) }),
                            r().createElement('div', { className: Lu.rewards }, e),
                        );
                    },
                    ku = [
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
                function Hu(e) {
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
                const Uu = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: I.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Gu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            a = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            _ = e.decoratorId,
                            m = void 0 === _ ? 0 : _,
                            A = e.isEnabled,
                            g = void 0 === A || A,
                            F = e.targetId,
                            D = void 0 === F ? 0 : F,
                            B = e.onShow,
                            C = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, ku);
                        const f = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            h = (0, n.useMemo)(
                                () =>
                                    D ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            n = R.invalid('resId'),
                                            r = '';
                                        var a;
                                        return (
                                            u &&
                                                ((r =
                                                    (null == (a = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) ||
                                                    ''),
                                                (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { callerUrl: r, caller: t, stack: u, resId: n }
                                        );
                                    })().resId,
                                [D],
                            ),
                            b = (0, n.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (Uu(t, m, { isMouseEvent: !0, on: !0, arguments: Hu(r) }, h),
                                    B && B(),
                                    (f.current.isVisible = !0));
                            }, [t, m, r, h, B]),
                            v = (0, n.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        Uu(t, m, { on: !1 }, h),
                                        f.current.isVisible && C && C(),
                                        (f.current.isVisible = !1));
                                }
                            }, [t, m, h, C]),
                            w = (0, n.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(f.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const e = f.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === g && v();
                            }, [g, v]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        (window.removeEventListener('mouseleave', v), v());
                                    }
                                ),
                                [v],
                            ));
                        return g
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(f.current.timeoutId),
                                                      (f.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                      a && a(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (v(), null == s || s(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === E && v(), null == i || i(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === E && v(), null == o || o(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var S;
                    },
                    $u = ['children'];
                function zu() {
                    return (
                        (zu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        zu.apply(this, arguments)
                    );
                }
                const Wu = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, $u);
                        return r().createElement(
                            Gu,
                            zu(
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
                    Qu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function qu() {
                    return (
                        (qu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        qu.apply(this, arguments)
                    );
                }
                const ju = R.views.common.tooltip_window.simple_tooltip_content,
                    Vu = (e) => {
                        let u = e.children,
                            t = e.body,
                            a = e.header,
                            s = e.note,
                            o = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Qu);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: a, note: s, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, a, s, i]);
                        return r().createElement(
                            Gu,
                            qu(
                                {
                                    contentId:
                                        ((d = null == i ? void 0 : i.hasHtmlContent),
                                        d ? ju.SimpleTooltipHtmlContent('resId') : ju.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    };
                function Yu() {
                    return (
                        (Yu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Yu.apply(this, arguments)
                    );
                }
                const Xu = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = r().createElement('div', { className: t }, e);
                        if (u.header || u.body) return r().createElement(Vu, u, n);
                        const a = u.contentId;
                        return a ? r().createElement(Gu, Yu({}, u, { contentId: a }), n) : r().createElement(Wu, u, n);
                    },
                    Ku = {
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
                    Zu = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = W.Big,
                        special: a,
                        value: s,
                        valueType: o,
                        title: i,
                        style: l,
                        className: c,
                        classNames: d,
                        tooltipArgs: E,
                        periodicIconTooltipArgs: _,
                    }) => {
                        const m = ((e, u) => {
                                if (void 0 === u || !se.includes(e)) return null;
                                switch (u) {
                                    case q.BATTLE_BOOSTER:
                                    case q.BATTLE_BOOSTER_REPLACE:
                                        return j.BATTLE_BOOSTER;
                                }
                            })(n, a),
                            g = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case q.BATTLE_BOOSTER:
                                        return V.BATTLE_BOOSTER;
                                    case q.BATTLE_BOOSTER_REPLACE:
                                        return V.BATTLE_BOOSTER_REPLACE;
                                    case q.BUILT_IN_EQUIPMENT:
                                        return V.BUILT_IN_EQUIPMENT;
                                    case q.EQUIPMENT_PLUS:
                                        return V.EQUIPMENT_PLUS;
                                    case q.EQUIPMENT_TROPHY_BASIC:
                                        return V.EQUIPMENT_TROPHY_BASIC;
                                    case q.EQUIPMENT_TROPHY_UPGRADED:
                                        return V.EQUIPMENT_TROPHY_UPGRADED;
                                    case q.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return V.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case q.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return V.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case q.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return V.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case q.PROGRESSION_STYLE_UPGRADED_1:
                                        return V.PROGRESSION_STYLE_UPGRADED_1;
                                    case q.PROGRESSION_STYLE_UPGRADED_2:
                                        return V.PROGRESSION_STYLE_UPGRADED_2;
                                    case q.PROGRESSION_STYLE_UPGRADED_3:
                                        return V.PROGRESSION_STYLE_UPGRADED_3;
                                    case q.PROGRESSION_STYLE_UPGRADED_4:
                                        return V.PROGRESSION_STYLE_UPGRADED_4;
                                    case q.PROGRESSION_STYLE_UPGRADED_5:
                                        return V.PROGRESSION_STYLE_UPGRADED_5;
                                    case q.PROGRESSION_STYLE_UPGRADED_6:
                                        return V.PROGRESSION_STYLE_UPGRADED_6;
                                    case q.ATTACHMENT_RARE:
                                        return V.ATTACHMENT_RARE;
                                    case q.ATTACHMENT_EPIC:
                                        return V.ATTACHMENT_EPIC;
                                    case q.ATTACHMENT_LEGENDARY:
                                        return V.ATTACHMENT_LEGENDARY;
                                }
                            })(a),
                            F = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case Q.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case Q.CURRENCY:
                                    case Q.NUMBER:
                                        return r().createElement(G, { format: 'integral', value: Number(e) });
                                    case Q.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(s, o);
                        return r().createElement(
                            'div',
                            {
                                className: A()(Ku.base, Ku[`base__${n}`], X.includes(e) && Ku.base__normalize, c),
                                style: l,
                            },
                            r().createElement(
                                Xu,
                                { tooltipArgs: E, className: Ku.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: A()(Ku.image, null == d ? void 0 : d.image) },
                                        m &&
                                            r().createElement('div', {
                                                className: A()(Ku.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${m}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            r().createElement('div', {
                                                className: A()(Ku.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        g &&
                                            r().createElement('div', {
                                                className: A()(Ku.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${g}_overlay)`,
                                                },
                                            }),
                                    ),
                                    F &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: A()(
                                                    Ku.info,
                                                    Ku[`info__${e}`],
                                                    o === Q.MULTI && Ku.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            F,
                                        ),
                                    i && r().createElement('div', { className: Ku.title }, i),
                                ),
                            ),
                            t &&
                                r().createElement(
                                    Xu,
                                    { tooltipArgs: _ },
                                    r().createElement('div', {
                                        className: A()(Ku.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    };
                var Ju = t(30);
                const et = 'TokenReward_base_db',
                    ut = 'TokenReward_lightContainer_44',
                    tt = 'TokenReward_light_14',
                    nt = 'TokenReward_button_66',
                    rt = (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                    at = (0, O.Pi)(({ isReceived: e }) => {
                        const u = fe().controls,
                            t = (0, Ju.useSpring)({ opacity: e ? 1 : 0, config: { duration: 300, easing: rt } }),
                            n = (0, Ju.useTransition)(e, {
                                initial: { opacity: 1, transform: 'translateY(12rem)' },
                                from: { opacity: 0, transform: 'translateY(22rem)' },
                                enter: { opacity: 1, transform: 'translateY(12rem)' },
                                config: { duration: 300, easing: rt },
                            });
                        return r().createElement(
                            Gu,
                            { contentId: R.views.lobby.battle_matters.tooltips.BattleMattersTokenTooltipView('resId') },
                            r().createElement(
                                'div',
                                { className: et },
                                r().createElement(
                                    Ju.animated.div,
                                    { style: t, className: ut },
                                    r().createElement('div', { className: tt }),
                                ),
                                n(
                                    (e, t) =>
                                        t &&
                                        r().createElement(
                                            Ju.animated.div,
                                            { style: e },
                                            r().createElement(
                                                Ue,
                                                {
                                                    mixClass: nt,
                                                    size: He.small,
                                                    type: ke.main,
                                                    onClick: u.exchangeToken,
                                                },
                                                R.strings.battle_matters.mainScreen.exchangeToken(),
                                            ),
                                        ),
                                ),
                            ),
                        );
                    }),
                    st = 'VehicleReward_base_98',
                    ot = 'VehicleReward_mark_ad',
                    it = ({ icon: e, tooltipArgs: u }) => {
                        return r().createElement(
                            Xu,
                            { tooltipArgs: u },
                            r().createElement(
                                'div',
                                {
                                    style: {
                                        backgroundImage: `url('R.images.gui.maps.icons.vehicle.${((t = e), t.replace(/-/g, '_'))}')`,
                                    },
                                    className: st,
                                },
                                r().createElement('div', { className: ot }),
                            ),
                        );
                        var t;
                    },
                    lt = (e) => ae({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                    ct = (0, O.Pi)(({ reward: e, isReceived: u }) => {
                        switch (e.name) {
                            case 'token':
                                return r().createElement(at, { isReceived: u });
                            case 'vehicle':
                                return r().createElement(it, { icon: e.icon, tooltipArgs: lt(e) });
                            default:
                                return r().createElement(Zu, {
                                    name: e.name,
                                    image: re(e),
                                    size: W.Small,
                                    value: e.value,
                                    valueType: ue(e.name),
                                    tooltipArgs: lt(e),
                                });
                        }
                    }),
                    dt = (e, u, t) => (u === t ? Nu.AllCompleted : u >= e ? Nu.CurrentCompleted : Nu.Regular),
                    Et = Object.assign({}, Mu, {
                        line: { delay: 0, duration: 800 },
                        delta: { delay: 0, duration: 800 },
                    }),
                    _t = (0, O.Pi)(({ progressToShow: e }) => {
                        const u = fe().model,
                            t = u.progression.countCompleted.get(),
                            a = t - 1,
                            s = u.progression.totalQuests.get(),
                            o = u.computes.getIntermediateQuests(),
                            i = u.computes.getIsQuestSwitchAnimationNeeded(),
                            l = u.isRewardsViewOpen.get(),
                            c = (0, n.useState)(i ? a : void 0),
                            d = c[0],
                            E = c[1],
                            _ = (0, n.useState)(i ? a : t),
                            m = _[0],
                            A = _[1];
                        ((0, n.useEffect)(() => {
                            A(i ? a : t);
                        }, [i, a, t]),
                            (0, n.useEffect)(() => {
                                if (void 0 !== d && d < e) return au(() => Le(R.sounds.bp_progress_bar_start()), 500);
                            }, [d, e]),
                            (0, n.useEffect)(() => {
                                E(i && !l && m < t ? a : void 0);
                            }, [l, i, a, m, t]));
                        const g = (0, n.useCallback)(() => {
                            A(e);
                        }, [e]);
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(Iu, {
                                value: e,
                                deltaFrom: d,
                                maxValue: s,
                                onEndAnimation: g,
                                animationSettings: Et,
                            }),
                            o.map((e, u) =>
                                r().createElement(
                                    Ou,
                                    { key: u, questNumber: e.questIdx, questsCount: s, state: dt(e.questIdx, m, s) },
                                    e.rewards.map((u, t) =>
                                        r().createElement(ct, { key: t, reward: u, isReceived: e.questIdx <= m }),
                                    ),
                                ),
                            ),
                            r().createElement(Ou, { questNumber: s, questsCount: s, state: dt(s, m, s) }),
                        );
                    }),
                    mt = 'Footer_base_2b',
                    At = 'Footer_content_75',
                    gt = 'Footer_progress_84',
                    Ft = 'Footer_title_51',
                    Dt = 'Footer_completedQuests_1f',
                    Bt = 'Footer_completedQuests__allCompleted_b3',
                    Ct = 'Footer_subTitle_e9',
                    pt = 'Footer_progression_00',
                    ft = R.strings.battle_matters.mainScreen,
                    ht = (0, O.Pi)(() => {
                        const e = fe().model,
                            u = e.progression.countCompleted.get(),
                            t = u - 1,
                            a = e.progression.totalQuests.get(),
                            s = e.computes.getIsQuestSwitchAnimationNeeded(),
                            o = e.questSwitchAnimationPhase.get(),
                            i = (0, n.useState)(s ? t : u),
                            l = i[0],
                            c = i[1];
                        return (
                            (0, n.useEffect)(() => {
                                o === Be.ToDoneFinished && c(u);
                            }, [u, o]),
                            (0, n.useEffect)(() => {
                                c(s ? t : u);
                            }, [t, u, s]),
                            r().createElement(
                                'div',
                                { className: mt },
                                r().createElement(
                                    'div',
                                    { className: At },
                                    r().createElement(
                                        'div',
                                        { className: gt },
                                        r().createElement(
                                            'div',
                                            { className: Ft },
                                            r().createElement(Ie, {
                                                text: ft.progress(),
                                                binding: {
                                                    completed: r().createElement(
                                                        'span',
                                                        { className: A()(Dt, l === a && Bt) },
                                                        l,
                                                    ),
                                                    total: a,
                                                },
                                            }),
                                        ),
                                        r().createElement('div', { className: Ct }, ft.target()),
                                        r().createElement(
                                            'div',
                                            { className: pt },
                                            r().createElement(_t, { progressToShow: l }),
                                        ),
                                    ),
                                    r().createElement(Xe, null),
                                ),
                            )
                        );
                    }),
                    bt = {
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
                    vt = [
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
                function wt() {
                    return (
                        (wt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        wt.apply(this, arguments)
                    );
                }
                const St = (e) => {
                        let u = e.caption,
                            t = e.onClick,
                            a = e.goto,
                            o = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            E = e.side,
                            _ = void 0 === E ? 'left' : E,
                            m = e.type,
                            g = void 0 === m ? 'back' : m,
                            F = e.soundHover,
                            D = void 0 === F ? 'highlight' : F,
                            B = e.soundClick,
                            C = void 0 === B ? 'play' : B,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, vt);
                        const f = (0, n.useCallback)(
                                (e) => {
                                    (null == i || i(e), s.O.sound.play.sound(D));
                                },
                                [i, D],
                            ),
                            h = (0, n.useCallback)(
                                (e) => {
                                    null == l || l(e);
                                },
                                [l],
                            ),
                            b = (0, n.useCallback)(
                                (e) => {
                                    (null == c || c(e), s.O.sound.play.sound(C));
                                },
                                [c, C],
                            ),
                            v = (0, n.useCallback)(
                                (e) => {
                                    null == d || d(e);
                                },
                                [d],
                            );
                        return r().createElement(
                            'div',
                            wt(
                                {
                                    className: A()(
                                        bt.base,
                                        bt[`base__${g}`],
                                        bt[`base__${_}`],
                                        null == o ? void 0 : o.base,
                                    ),
                                    onMouseEnter: f,
                                    onMouseLeave: h,
                                    onMouseDown: b,
                                    onMouseUp: v,
                                    onClick: t,
                                },
                                p,
                            ),
                            'info' !== g && r().createElement('div', { className: bt.shine }),
                            r().createElement(
                                'div',
                                {
                                    className: A()(
                                        bt.icon,
                                        bt[`icon__${g}`],
                                        bt[`icon__${_}`],
                                        null == o ? void 0 : o.icon,
                                    ),
                                },
                                r().createElement('div', { className: A()(bt.glow, null == o ? void 0 : o.glow) }),
                            ),
                            r().createElement(
                                'div',
                                { className: A()(bt.caption, bt[`caption__${g}`], null == o ? void 0 : o.caption) },
                                u,
                            ),
                            a && r().createElement('div', { className: A()(bt.goto, null == o ? void 0 : o.goto) }, a),
                        );
                    },
                    Rt = 'Header_base_5d',
                    Pt = 'Header_infoBtn_1e',
                    Tt = 'Header_infoBtnIcon_51',
                    yt = 'Header_infoBtnGlow_54',
                    xt = 'Header_title_d2',
                    Mt = R.strings.battle_matters.mainScreen,
                    It = (0, O.Pi)(() => {
                        const e = fe().controls,
                            u = p().mediaSize;
                        return r().createElement(
                            'div',
                            { className: Rt },
                            r().createElement(St, {
                                caption: u === D.ExtraSmall ? Mt.infoButtonSmall() : Mt.infoButton(),
                                type: 'info',
                                classNames: { base: Pt, icon: Tt, glow: yt },
                                onClick: e.showManual,
                            }),
                            r().createElement('span', { className: xt }, Mt.title()),
                        );
                    }),
                    Lt = (e) => {
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
                    Nt = [];
                function Ot(e) {
                    const u = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, u.current)(...e), Nt)
                    );
                }
                function kt(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Ht(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Ht(e, u);
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
                function Ht(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function Ut(e, u, t) {
                    const r = (0, n.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let r,
                                    a = !1,
                                    s = 0;
                                function o() {
                                    r && clearTimeout(r);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function d() {
                                        ((s = Date.now()), t.apply(l, i));
                                    }
                                    a ||
                                        (n && !r && d(),
                                        o(),
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
                                        (o(), (a = !0));
                                    }),
                                    i
                                );
                            })(t, e),
                        u,
                    );
                    return ((0, n.useEffect)(() => r.cancel, [r]), r);
                }
                let Gt;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Gt || (Gt = {}));
                const $t = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    zt = (({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: a,
                        forceTriggerMouseMove: s,
                    }) => {
                        const o = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                a = n[1];
                            return a <= r ? 0 : Tu(r, a, t);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? $t : l,
                                d = (0, n.useRef)(null),
                                E = (0, n.useRef)(null),
                                _ = (0, n.useRef)(!1),
                                m = (() => {
                                    const e = (0, n.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        r = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        a = (e, ...t) => {
                                            for (var n, r = kt(u(e).values()); !(n = r()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, n.useMemo)(() => ({ on: t, off: r, trigger: a }), []);
                                })(),
                                A = Ut(
                                    () => {
                                        s && s();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, Ju.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), m.trigger('change', e), s && _.current && A());
                                    },
                                    onRest: (e) => m.trigger('rest', e),
                                    onStart: (e) => m.trigger('start', e),
                                    onPause: (e) => m.trigger('pause', e),
                                })),
                                F = g[0],
                                D = g[1],
                                B = (0, n.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = F.scrollPosition.get(),
                                            a = (null != (n = F.scrollPosition.goal) ? n : 0) - r;
                                        return o(e, u * t + a + r);
                                    },
                                    [F.scrollPosition],
                                ),
                                C = (0, n.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            D.start({
                                                scrollPosition: o(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(n, F.scrollPosition.get()) },
                                            });
                                    },
                                    [D, c.animationConfig, F.scrollPosition],
                                ),
                                p = (0, n.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = E.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return a(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            r = B(u, e, n);
                                        C(r);
                                    },
                                    [C, B, c.step],
                                ),
                                f = (0, n.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && p(r(e)),
                                            d.current && m.trigger('mouseWheel', e, F.scrollPosition, u(d.current)));
                                    },
                                    [F.scrollPosition, p, m],
                                ),
                                h = ((e, u = []) => {
                                    const t = (0, n.useRef)(),
                                        r = (0, n.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
                                    return (
                                        (0, n.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        Lt(() => {
                                            const e = d.current;
                                            e &&
                                                (C(o(e, F.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [C, F.scrollPosition.goal],
                                ),
                                b = Ot(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = o(e, F.scrollPosition.goal);
                                    (u !== F.scrollPosition.goal && C(u, { immediate: !0 }),
                                        m.trigger('recalculateContent'));
                                });
                            ((0, n.useEffect)(
                                () => (
                                    window.addEventListener('resize', h),
                                    () => {
                                        window.removeEventListener('resize', h);
                                    }
                                ),
                                [h],
                            ),
                                (0, n.useEffect)(() => {
                                    const e = d.current;
                                    if (!e || !s) return;
                                    const u = () => {
                                            _.current = !0;
                                        },
                                        t = () => {
                                            _.current = !1;
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
                            return (0, n.useMemo)(
                                () => ({
                                    getWrapperSize: () => (E.current ? a(E.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? u(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: f,
                                    applyScroll: C,
                                    applyStepTo: p,
                                    contentRef: d,
                                    wrapperRef: E,
                                    scrollPosition: D,
                                    animationScroll: F,
                                    recalculateContent: b,
                                    events: { on: m.on, off: m.off },
                                }),
                                [F.scrollPosition, C, p, m.off, m.on, b, f, D, c.step.clampedArrowStepTimeout],
                            );
                        };
                    })({
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
                        getDirection: (e) => (e.deltaY > 1 ? Gt.Next : Gt.Prev),
                        forceTriggerMouseMove: s.O.view.forceTriggerMouseMove,
                    }),
                    Wt = 'HorizontalBar_base_49',
                    Qt = 'HorizontalBar_base__active_5e',
                    qt = 'HorizontalBar_leftButton_5f',
                    jt = 'HorizontalBar_rightButton_03',
                    Vt = 'HorizontalBar_track_0d',
                    Yt = 'HorizontalBar_thumb_fd',
                    Xt = 'HorizontalBar_rail_32',
                    Kt = 'disable',
                    Zt = { pending: !1, offset: 0 },
                    Jt = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    en = () => {},
                    un = (e, u) => Math.max(20, e.offsetWidth * u),
                    tn = (0, n.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Jt, onDrag: a = en }) => {
                        const o = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            E = e.stepTimeout || 100,
                            _ = (0, n.useState)(Zt),
                            m = _[0],
                            g = _[1],
                            F = (0, n.useCallback)(
                                (e) => {
                                    (g(e),
                                        d.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [a],
                            ),
                            D = () => {
                                const u = c.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    o = Tu(0, 1, a / (r - n)),
                                    E = (u.offsetWidth - un(u, s)) * o;
                                ((t.style.transform = `translateX(${0 | E}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && d.current) {
                                            if (0 === e)
                                                return (
                                                    i.current.classList.add(Kt),
                                                    void l.current.classList.remove(Kt)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(Kt),
                                                    void l.current.classList.add(Kt)
                                                );
                                            var u, t;
                                            (i.current.classList.remove(Kt), l.current.classList.remove(Kt));
                                        }
                                    })(E));
                            },
                            B = Ot(() => {
                                ((() => {
                                    const u = d.current,
                                        t = c.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && n && t)) return;
                                    const a = Math.min(1, n / r);
                                    ((u.style.width = `${un(t, a)}px`),
                                        (u.style.display = 'flex'),
                                        o.current &&
                                            (1 !== a ? o.current.classList.add(Qt) : o.current.classList.remove(Qt)));
                                })(),
                                    D());
                            });
                        ((0, n.useEffect)(() => Lt(B)),
                            (0, n.useEffect)(
                                () =>
                                    Lt(() => {
                                        const u = () => {
                                            D();
                                        };
                                        let t = en;
                                        const n = () => {
                                            (t(), (t = Lt(B)));
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
                            (0, n.useEffect)(() => {
                                if (!m.pending) return;
                                const u = s.O.client.events.mouse.move(([u, t]) => {
                                        var n;
                                        const r = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!r || !s) return;
                                        const o = c.current,
                                            i = d.current;
                                        if (!o || !i) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - m.offset - o.getBoundingClientRect().x,
                                            E = (l / o.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, E),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: E }));
                                    }),
                                    t = s.O.client.events.mouse.up(() => {
                                        (u(), F(Zt));
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, m.offset, m.pending, a, F]));
                        const C = (function (e, u, t = []) {
                                const r = (0, n.useRef)(0),
                                    a = (0, n.useCallback)(() => {
                                        (window.clearInterval(r.current), (r.current = 0));
                                    }, t || []);
                                (0, n.useEffect)(() => a, [a]);
                                const s = (null != t ? t : []).concat([u]);
                                return [
                                    (0, n.useCallback)((t) => {
                                        (0 !== r.current && a(),
                                            (r.current = window.setInterval(() => e(t, !0), u)),
                                            e(t, !1));
                                    }, s),
                                    a,
                                ];
                            })((u) => e.applyStepTo(u), E, [e]),
                            p = C[0],
                            f = C[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const h = (e) => {
                            e.target.classList.contains(Kt) || Le('highlight');
                        };
                        return r().createElement(
                            'div',
                            { className: A()(Wt, u.base), ref: o, onWheel: e.handleMouseWheel },
                            r().createElement('div', {
                                className: A()(qt, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Kt) || 0 !== e.button || (Le('play'), p(Gt.Next));
                                },
                                onMouseUp: f,
                                ref: i,
                                onMouseEnter: h,
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: A()(Vt, u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        if (n && 0 === u.button)
                                            if ((Le('play'), u.target === n))
                                                F({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = d.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? Gt.Prev : Gt.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: h,
                                },
                                r().createElement('div', { ref: d, className: A()(Yt, u.thumb) }),
                                r().createElement('div', { className: A()(Xt, u.rail) }),
                            ),
                            r().createElement('div', {
                                className: A()(jt, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Kt) || 0 !== e.button || (Le('play'), p(Gt.Prev));
                                },
                                onMouseUp: f,
                                ref: l,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    nn = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    rn = ({ api: e, className: u, classNames: t, children: a }) => (
                        (0, n.useEffect)(() => Lt(e.recalculateContent)),
                        r().createElement(
                            'div',
                            { className: A()(nn.base, u) },
                            r().createElement(
                                'div',
                                {
                                    className: A()(nn.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                r().createElement(
                                    'div',
                                    { className: A()(nn.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                ((rn.Bar = tn),
                    (rn.Default = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: s,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, n.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: A()(nn.base, e.base) });
                            }, [a]),
                            E = (0, n.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return r().createElement(
                            'div',
                            { className: A()(nn.defaultScroll, t), onWheel: u.handleMouseWheel },
                            r().createElement(
                                'div',
                                { className: A()(nn.defaultScrollArea, s) },
                                r().createElement(rn, { className: i, api: E, classNames: o }, e),
                            ),
                            r().createElement(tn, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    }));
                function an() {
                    const e = (0, n.useRef)(0);
                    var u;
                    return (
                        (u = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, n.useEffect)(() => u, []),
                        (0, n.useMemo)(
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
                const sn = { type: 'idle' };
                function on(e, u) {
                    const t = e.contentRef,
                        r = e.wrapperRef,
                        a = e.scrollPosition,
                        o = e.clampPosition,
                        i = e.animationScroll,
                        l = e.events,
                        c = (0, n.useState)(sn),
                        d = c[0],
                        E = c[1],
                        _ = an(),
                        m = Ot(() => {
                            _.run(() => {
                                const u = e.contentRef.current,
                                    t = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                u &&
                                    t &&
                                    n &&
                                    (u.style.cursor = n <= t ? 'auto' : 'dragging' === d.type ? 'move' : 'grab');
                            });
                        });
                    var A, g;
                    return (
                        (0, n.useEffect)(() => {
                            m();
                        }, [d.type, m]),
                        (A = () => {
                            m();
                        }),
                        (g = []),
                        (0, n.useEffect)(
                            () => (window.addEventListener('resize', A), () => window.removeEventListener('resize', A)),
                            g,
                        ),
                        (0, n.useEffect)(() => {
                            if ('dragging' !== d.type) return;
                            const e = s.O.client.events.mouse.move(([e, n]) => {
                                const s = t.current,
                                    l = r.current;
                                if (!s || !l) return;
                                if ('inside' === n && e.clientX < 0) return;
                                const c = 'inside' === n ? e.clientX : e.clientX - l.offsetLeft,
                                    E = d.positionFrom - c,
                                    _ = d.previousScrollPosition + E;
                                a.start(
                                    Object.assign(
                                        { scrollPosition: o(s, _), from: { scrollPosition: i.scrollPosition.get() } },
                                        u && { config: u },
                                    ),
                                );
                            });
                            const n = s.O.client.events.mouse.up(function () {
                                E({ type: 'scrollingToEnd' });
                            });
                            return () => {
                                (e(), n());
                            };
                        }, [i.scrollPosition, o, t, d, a, r, u]),
                        (0, n.useEffect)(() => {
                            if ('scrollingToEnd' !== d.type) return;
                            const e = () => {
                                E(sn);
                            };
                            return (i.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e));
                        }, [i.scrollPosition, d.type, l]),
                        (0, n.useEffect)(() => {
                            const e = t.current;
                            if (!e) return;
                            const u = (e) => {
                                E({
                                    type: 'dragging',
                                    positionFrom: e.screenX,
                                    previousScrollPosition: i.scrollPosition.get(),
                                });
                            };
                            return (e.addEventListener('mousedown', u), () => e.removeEventListener('mousedown', u));
                        }, [i.scrollPosition, t]),
                        d
                    );
                }
                const ln = (e, u, t) => {
                    const r = t.contentRef,
                        a = t.clampPosition,
                        s = t.getWrapperSize,
                        o = t.wrapperRef,
                        i = (0, n.useState)(null),
                        l = i[0],
                        c = i[1],
                        d = an();
                    return (
                        (0, n.useEffect)(() => {
                            if (!o.current) return;
                            const t = new ResizeObserver(() => {
                                d.run(() => {
                                    const t = u.current,
                                        n = r.current,
                                        o = s();
                                    if (void 0 === e || !t || !n || !o) return c(void 0);
                                    const i = t[e],
                                        l = i.offsetWidth,
                                        d = i.offsetLeft,
                                        E = a(n, d - o / 2 + l / 2);
                                    c(E);
                                });
                            });
                            return (t.observe(o.current), () => t.disconnect());
                        }, [s, a, r, o, e, u, d]),
                        l
                    );
                };
                let cn;
                !(function (e) {
                    ((e[(e.LeftHidden = 0)] = 'LeftHidden'),
                        (e[(e.Visible = 1)] = 'Visible'),
                        (e[(e.RightHidden = 2)] = 'RightHidden'));
                })(cn || (cn = {}));
                let dn;
                !(function (e) {
                    ((e[(e.Start = 0)] = 'Start'), (e[(e.Between = 1)] = 'Between'), (e[(e.End = 2)] = 'End'));
                })(dn || (dn = {}));
                const En = { base: 'Arrow_base_f4', bg: 'Arrow_bg_b9', base__right: 'Arrow_base__right_86' };
                let _n;
                !(function (e) {
                    ((e.Left = 'left'), (e.Right = 'right'));
                })(_n || (_n = {}));
                const mn = R.strings.battle_matters.mainScreen.list,
                    An = ({ isVisible: e, direction: u, onClick: t }) => {
                        const n = () => {
                                Ne.playHighlight();
                            },
                            a = () => {
                                (Ne.playClick(), t());
                            };
                        return (0, Ju.useTransition)(e, {
                            from: { opacity: 0 },
                            enter: { opacity: 1 },
                            leave: { opacity: 0 },
                            config: { duration: 300 },
                        })(
                            (e, t) =>
                                t &&
                                r().createElement(
                                    Ju.animated.div,
                                    { style: e },
                                    r().createElement(
                                        Vu,
                                        { body: mn.arrow() },
                                        r().createElement(
                                            'div',
                                            { className: A()(En.base, En[`base__${u}`]), onMouseEnter: n, onClick: a },
                                            r().createElement('div', { className: En.bg }),
                                        ),
                                    ),
                                ),
                        );
                    },
                    gn = 'Action_base_e7',
                    Fn = 'Action_glow_d8',
                    Dn = 'Action_glow__wide_14',
                    Bn = 'Action_glow__normal_a6',
                    Cn = 'Action_base__withGlow_02',
                    pn = 'Action_button_1d',
                    fn = 'Action_buttonIcon_31',
                    hn = R.strings.battle_matters.mainScreen.quest,
                    bn = (0, n.memo)(
                        ({
                            classNames: e,
                            hasGlow: u,
                            onClick: t,
                            onMouseDown: n,
                            onMouseMove: a,
                            onMouseUp: s,
                            onMouseLeave: o,
                        }) => {
                            const i = p().mediaSize >= D.Medium ? He.medium : He.small;
                            return r().createElement(
                                'div',
                                { className: A()(gn, u && Cn, null == e ? void 0 : e.base) },
                                r().createElement('div', { className: A()(Fn, Dn) }),
                                r().createElement('div', { className: A()(Fn, Bn) }),
                                r().createElement(
                                    Ue,
                                    {
                                        type: ke.ghost,
                                        mixClass: A()(pn, null == e ? void 0 : e.button),
                                        size: i,
                                        onClick: t,
                                        onMouseMove: a,
                                        onMouseUp: s,
                                        onMouseLeave: o,
                                        onMouseDown: n,
                                    },
                                    r().createElement('div', { className: fn }),
                                    hn.action(),
                                ),
                            );
                        },
                    ),
                    vn = {
                        base: 'Progress_base_2e',
                        value: 'Progress_value_f1',
                        base__inProgress: 'Progress_base__inProgress_eb',
                        base__done: 'Progress_base__done_29',
                        current: 'Progress_current_ad',
                        timingFunction: 'Progress_timingFunction_7e',
                    },
                    wn = R.strings.battle_matters.mainScreen.quest,
                    Sn = Object.assign({}, Mu, {
                        line: { delay: 0, duration: 2e3 },
                        delta: { className: vn.timingFunction, delay: 0, duration: 2e3 },
                    }),
                    Rn = (0, O.Pi)(({ className: e, state: u, maxProgress: t }) => {
                        const a = (0, n.useContext)(jn),
                            s = a.progressToShow,
                            o = a.lastShowedProgress,
                            i = a.setLastShowedProgress,
                            l = a.setIsProgressComplete;
                        (0, n.useEffect)(() => {
                            s > o && Le(R.sounds.dq_screen_progress_bar());
                        }, [o, s]);
                        const c = (0, n.useCallback)(() => {
                                i(s);
                            }, [s, i]),
                            d = (0, n.useCallback)(() => {
                                l(!0);
                            }, [l]);
                        return r().createElement(
                            'div',
                            { className: A()(vn.base, vn[`base__${u}`], e) },
                            r().createElement(Ie, {
                                classMix: vn.value,
                                text: wn.progress(),
                                binding: {
                                    current: r().createElement(
                                        'span',
                                        { className: vn.current },
                                        r().createElement(G, { value: o }),
                                    ),
                                    max: r().createElement(G, { value: t }),
                                },
                            }),
                            r().createElement(Iu, {
                                size: Ze.Small,
                                value: s,
                                deltaFrom: o,
                                maxValue: t,
                                onEndAnimation: c,
                                onComplete: d,
                                animationSettings: Sn,
                            }),
                        );
                    }),
                    Pn = {
                        base: 'Content_base_57',
                        condition: 'Content_condition_c8',
                        base__inProgress: 'Content_base__inProgress_8c',
                        base__done: 'Content_base__done_a4',
                        conditionText: 'Content_conditionText_8d',
                        progress: 'Content_progress_da',
                        spacer: 'Content_spacer_02',
                        action: 'Content_action_da',
                        base__dragging: 'Content_base__dragging_0c',
                        actionButton: 'Content_actionButton_89',
                        base__buttonClicked: 'Content_base__buttonClicked_47',
                    },
                    Tn = { base: Pn.action, button: Pn.actionButton },
                    yn = (0, O.Pi)(
                        ({
                            index: e,
                            questState: u,
                            isDragging: t,
                            isButtonClicked: n,
                            onMouseDown: a,
                            onMouseMove: s,
                            onMouseUp: o,
                            onMouseLeave: i,
                        }) => {
                            const l = fe(),
                                c = l.model,
                                d = l.controls,
                                E = Ot(() => {
                                    d.showAnimForQuest(F);
                                }),
                                _ = c.computes.getQuest(e);
                            if (!_) return null;
                            const m = _.maxProgress,
                                g = _.hasAnimation,
                                F = _.number,
                                D = R.strings.static_quests.battle_matters_quests.$dyn(`battle_matters_${F}`);
                            return null === D || 'string' == typeof D
                                ? (console.error(`Unreachable quest strings folder for the quest number ${F}`), null)
                                : r().createElement(
                                      'div',
                                      {
                                          className: A()(
                                              Pn.base,
                                              Pn[`base__${u}`],
                                              t && Pn.base__dragging,
                                              n && Pn.base__buttonClicked,
                                          ),
                                      },
                                      r().createElement(
                                          'div',
                                          { className: Pn.condition },
                                          r().createElement(Ie, {
                                              classMix: Pn.conditionText,
                                              text: D.$dyn('conditions').$dyn('description'),
                                          }),
                                      ),
                                      m > 0 &&
                                          r().createElement(Rn, { className: Pn.progress, state: u, maxProgress: m }),
                                      r().createElement('div', { className: Pn.spacer }),
                                      g &&
                                          r().createElement(bn, {
                                              hasGlow: u === ie.InProgress,
                                              classNames: Tn,
                                              onClick: E,
                                              onMouseDown: a,
                                              onMouseMove: s,
                                              onMouseUp: o,
                                              onMouseLeave: i,
                                          }),
                                  );
                        },
                    ),
                    xn = {
                        base: 'Header_base_2d',
                        card: 'Header_card_8a',
                        base__done: 'Header_base__done_14',
                        base__inProgress: 'Header_base__inProgress_fb',
                        base__unavailable: 'Header_base__unavailable_74',
                        glow: 'Header_glow_5d',
                        glow__visible: 'Header_glow__visible_56',
                        glow__unavailable: 'Header_glow__unavailable_32',
                        glow__inProgress: 'Header_glow__inProgress_c2',
                        glow__done: 'Header_glow__done_7f',
                        bg: 'Header_bg_39',
                        header: 'Header_header_32',
                        body: 'Header_body_14',
                        content: 'Header_content_d3',
                        content__toInProgress: 'Header_content__toInProgress_03',
                        fadeIn: 'Header_fadeIn_7b',
                        stateIcon: 'Header_stateIcon_d1',
                        unavailable: 'Header_unavailable_d0',
                        unavailableTitle: 'Header_unavailableTitle_48',
                        unavailableDescription: 'Header_unavailableDescription_22',
                        rewards: 'Header_rewards_08',
                        base__dragging: 'Header_base__dragging_ae',
                        arrow: 'Header_arrow_98',
                        arrowIcon: 'Header_arrowIcon_a4',
                        arrowIcon__default: 'Header_arrowIcon__default_44',
                        arrowIcon__done: 'Header_arrowIcon__done_48',
                        headerNumber: 'Header_headerNumber_0e',
                        headerNumberGlow: 'Header_headerNumberGlow_5d',
                        headerNumberText: 'Header_headerNumberText_93',
                        headerDivider: 'Header_headerDivider_b4',
                        headerInfo: 'Header_headerInfo_d7',
                        headerTitle: 'Header_headerTitle_c3',
                        headerTitleText: 'Header_headerTitleText_22',
                        headerButton: 'Header_headerButton_eb',
                        headerButton__hidden: 'Header_headerButton__hidden_32',
                        base__buttonClicked: 'Header_base__buttonClicked_53',
                        headerButtonIcon: 'Header_headerButtonIcon_52',
                        headerDescription: 'Header_headerDescription_bf',
                        fadeOut: 'Header_fadeOut_30',
                        fadeInWithScale: 'Header_fadeInWithScale_9f',
                        slideUp: 'Header_slideUp_8c',
                        scale: 'Header_scale_ad',
                        fadeInUp: 'Header_fadeInUp_0b',
                        rotate: 'Header_rotate_00',
                        translatedRotating: 'Header_translatedRotating_02',
                    },
                    Mn = (0, O.Pi)(
                        ({
                            index: e,
                            questState: u,
                            isDragging: t,
                            isButtonClicked: n,
                            onMouseDown: a,
                            onMouseMove: s,
                            onMouseUp: o,
                            onMouseLeave: i,
                        }) => {
                            const l = fe(),
                                c = l.model,
                                d = l.controls,
                                E = Ot(() => {
                                    d.showManualForQuest(m);
                                }),
                                _ = c.computes.getQuest(e);
                            if (!_) return null;
                            const m = _.number,
                                g = _.hasManualPage,
                                F = R.strings.static_quests.battle_matters_quests.$dyn(`battle_matters_${m}`);
                            return null === F || 'string' == typeof F
                                ? (console.error(`Unreachable quest strings folder for the quest number ${m}`), null)
                                : r().createElement(
                                      'div',
                                      {
                                          className: A()(
                                              xn.base,
                                              xn[`base__${u}`],
                                              t && xn.base__dragging,
                                              n && xn.base__buttonClicked,
                                          ),
                                      },
                                      r().createElement(
                                          'div',
                                          { className: xn.headerNumber },
                                          r().createElement('div', { className: xn.headerNumberGlow }),
                                          r().createElement('div', { className: xn.headerNumberText }, m),
                                      ),
                                      r().createElement('div', { className: xn.headerDivider }),
                                      r().createElement(
                                          'div',
                                          { className: xn.headerInfo },
                                          r().createElement(
                                              'div',
                                              { className: xn.headerTitle },
                                              r().createElement(
                                                  'div',
                                                  { className: xn.headerTitleText },
                                                  F.$dyn('name'),
                                              ),
                                              r().createElement(
                                                  Ue,
                                                  {
                                                      type: ke.ghost,
                                                      mixClass: A()(xn.headerButton, !g && xn.headerButton__hidden),
                                                      onClick: E,
                                                      onMouseMove: s,
                                                      onMouseUp: o,
                                                      onMouseLeave: i,
                                                      onMouseDown: a,
                                                  },
                                                  r().createElement('div', { className: xn.headerButtonIcon }),
                                              ),
                                          ),
                                          r().createElement(
                                              'div',
                                              { className: xn.headerDescription },
                                              r().createElement(Ie, { text: F.$dyn('description') }),
                                          ),
                                      ),
                                  );
                        },
                    ),
                    In = {
                        base: 'Quest_base_f9',
                        card: 'Quest_card_f9',
                        base__done: 'Quest_base__done_84',
                        base__inProgress: 'Quest_base__inProgress_ae',
                        base__unavailable: 'Quest_base__unavailable_26',
                        glow: 'Quest_glow_2b',
                        glow__visible: 'Quest_glow__visible_01',
                        glow__unavailable: 'Quest_glow__unavailable_12',
                        glow__inProgress: 'Quest_glow__inProgress_29',
                        glow__done: 'Quest_glow__done_47',
                        bg: 'Quest_bg_9c',
                        header: 'Quest_header_75',
                        body: 'Quest_body_38',
                        content: 'Quest_content_14',
                        content__toInProgress: 'Quest_content__toInProgress_08',
                        fadeIn: 'Quest_fadeIn_78',
                        stateIcon: 'Quest_stateIcon_68',
                        unavailable: 'Quest_unavailable_a7',
                        unavailableTitle: 'Quest_unavailableTitle_4a',
                        unavailableDescription: 'Quest_unavailableDescription_46',
                        rewards: 'Quest_rewards_21',
                        base__dragging: 'Quest_base__dragging_bd',
                        arrow: 'Quest_arrow_10',
                        arrowIcon: 'Quest_arrowIcon_57',
                        arrowIcon__default: 'Quest_arrowIcon__default_8f',
                        arrowIcon__done: 'Quest_arrowIcon__done_98',
                        fadeOut: 'Quest_fadeOut_a2',
                        fadeInWithScale: 'Quest_fadeInWithScale_18',
                        slideUp: 'Quest_slideUp_59',
                        scale: 'Quest_scale_1b',
                        fadeInUp: 'Quest_fadeInUp_93',
                        rotate: 'Quest_rotate_8e',
                        translatedRotating: 'Quest_translatedRotating_ea',
                    };
                function Ln() {
                    return (
                        (Ln =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ln.apply(this, arguments)
                    );
                }
                const Nn = ({ reward: e, size: u }) => {
                        const t = e.RewardWrapper || null;
                        return t
                            ? r().createElement(t, e.rewardWrapperProps, r().createElement(Zu, Ln({ size: u }, e)))
                            : r().createElement(Zu, Ln({ size: u }, e));
                    },
                    On = 'Rewards_base_26',
                    kn = 'Rewards_base__vertical_9f',
                    Hn = 'Rewards_reward_7b',
                    Un = 'Rewards_reward__vertical_c6',
                    Gn = ({
                        data: e,
                        size: u = W.Big,
                        isVertical: t = !1,
                        count: n,
                        classMix: a,
                        rewardItemClassMix: s,
                        boxRewardTooltip: o,
                        boxRewardValue: i,
                        boxRewardClassName: l,
                        boxRewardClassNames: c,
                    }) => {
                        const d = n && n < e.length,
                            E = A()(Hn, t && Un, s),
                            _ = d ? n : e.length;
                        return r().createElement(
                            'div',
                            { className: A()(On, t && kn, a) },
                            e
                                .slice(0, _)
                                .map((e, t) =>
                                    r().createElement(
                                        'div',
                                        { key: t, className: E },
                                        r().createElement(Nn, { reward: e, size: u }),
                                    ),
                                ),
                            d &&
                                r().createElement(
                                    'div',
                                    { className: E },
                                    r().createElement(Zu, {
                                        name: 'more',
                                        image: `R.images.gui.maps.icons.quests.bonuses.${u}.default`,
                                        size: u,
                                        value:
                                            i ||
                                            ((m = R.strings.tooltips.quests.awards.additional.bottom()),
                                            (g = { count: e.length - (n || 0) }),
                                            m.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                                const u = 0 === e.indexOf('%') ? 2 : 1;
                                                return String(g[e.slice(u, -u)]);
                                            })),
                                        tooltipArgs: o,
                                        className: l,
                                        classNames: c,
                                    }),
                                ),
                        );
                        var m, g;
                    },
                    $n = 'Rewards_reward_9e';
                function zn() {
                    return (
                        (zn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        zn.apply(this, arguments)
                    );
                }
                const Wn = (0, O.Pi)(({ className: e, index: u }) => {
                        const t = fe().model,
                            n = p().mediaSize >= D.Medium ? W.Big : W.Small,
                            a = t.computes.getQuestRewardsProps(u, n);
                        return r().createElement(Gn, zn({}, a, { classMix: e, rewardItemClassMix: $n, size: n }));
                    }),
                    Qn = R.strings.battle_matters.mainScreen.quest,
                    qn = (e) => {
                        switch (e) {
                            case ie.Done:
                                return ie.InProgress;
                            case ie.InProgress:
                            default:
                                return ie.Unavailable;
                        }
                    },
                    jn = (0, n.createContext)({}),
                    Vn = (0, O.Pi)(
                        ({
                            index: e,
                            isDragging: u,
                            isVisible: t,
                            state: a,
                            maxProgress: s,
                            lastSeenProgress: o,
                            currentProgress: i,
                            questsRef: l,
                        }) => {
                            const c = fe().model,
                                d = c.questSwitchAnimationPhase.get(),
                                E = c.computes.getLastDoneQuestIndex() === e,
                                _ = c.computes.getFirstInProgressQuestIndex() === e,
                                m = e === c.computes.getQuestsLength() - 1,
                                g = c.computes.getIsQuestSwitchAnimationNeeded() && (E || _),
                                F = (0, n.useState)(E || _ ? o : i),
                                D = F[0],
                                B = F[1],
                                C = (0, n.useState)(D),
                                p = C[0],
                                f = C[1],
                                h = (0, n.useState)(g ? qn(a) : a),
                                b = h[0],
                                v = h[1],
                                w = (0, n.useState)(b !== ie.Unavailable),
                                S = w[0],
                                P = w[1],
                                T = (0, n.useState)(D === s),
                                y = T[0],
                                x = T[1],
                                M = E && d === Be.ToDone,
                                I = _ && d === Be.ToInProgress;
                            ((0, n.useEffect)(() => {
                                g ? (v(qn(a)), P(qn(a) !== ie.Unavailable)) : (v(a), P(a !== ie.Unavailable), f(i));
                            }, [g, a, i]),
                                (0, n.useEffect)(() => {
                                    if (M) {
                                        if (!(s > 0) || y)
                                            return (v(ie.Done), au(() => Le(R.sounds.dq_screen_quest_complete()), 300));
                                        f(i);
                                    }
                                    if (I) return (v(ie.InProgress), f(i), au(() => P(!0), 500));
                                }, [M, I, y, s, i]));
                            const L = (0, n.useState)(!1),
                                N = L[0],
                                O = L[1],
                                k = Ot(() => {
                                    O(!0);
                                }),
                                H = Ot(() => {
                                    O(!1);
                                }),
                                U = Ot(() => {
                                    O(!1);
                                }),
                                G = Ot(() => {
                                    O(!1);
                                }),
                                $ = (0, n.useMemo)(
                                    () => ({
                                        progressToShow: p,
                                        lastShowedProgress: D,
                                        setLastShowedProgress: B,
                                        setIsProgressComplete: x,
                                    }),
                                    [D, p],
                                );
                            return r().createElement(
                                jn.Provider,
                                { value: $ },
                                r().createElement(
                                    'div',
                                    {
                                        className: A()(
                                            In.base,
                                            In[`base__${b}`],
                                            u && In.base__dragging,
                                            N && In.base__buttonClicked,
                                        ),
                                    },
                                    r().createElement(
                                        'div',
                                        { className: In.card, ref: (u) => (l.current[e] = u) },
                                        t &&
                                            r().createElement(
                                                r().Fragment,
                                                null,
                                                Object.values(ie).map((e, u) =>
                                                    r().createElement('div', {
                                                        key: u,
                                                        className: A()(
                                                            In.glow,
                                                            In[`glow__${e}`],
                                                            b === e && In.glow__visible,
                                                        ),
                                                    }),
                                                ),
                                                r().createElement('div', { className: In.bg }),
                                                r().createElement(
                                                    'div',
                                                    { className: In.header },
                                                    r().createElement(Mn, {
                                                        index: e,
                                                        questState: b,
                                                        isDragging: u,
                                                        isButtonClicked: N,
                                                        onMouseDown: k,
                                                        onMouseMove: H,
                                                        onMouseUp: U,
                                                        onMouseLeave: G,
                                                    }),
                                                ),
                                                r().createElement(
                                                    'div',
                                                    { className: In.body },
                                                    S
                                                        ? r().createElement(
                                                              'div',
                                                              {
                                                                  className: A()(
                                                                      In.content,
                                                                      I && In[`content__${Be.ToInProgress}`],
                                                                  ),
                                                              },
                                                              r().createElement(yn, {
                                                                  index: e,
                                                                  questState: b,
                                                                  isDragging: u,
                                                                  isButtonClicked: N,
                                                                  onMouseDown: k,
                                                                  onMouseMove: H,
                                                                  onMouseUp: U,
                                                                  onMouseLeave: G,
                                                              }),
                                                          )
                                                        : r().createElement(
                                                              'div',
                                                              { className: In.unavailable },
                                                              r().createElement(
                                                                  'div',
                                                                  { className: In.unavailableTitle },
                                                                  Qn.unavailableTitle(),
                                                              ),
                                                              r().createElement(
                                                                  'div',
                                                                  { className: In.unavailableDescription },
                                                                  Qn.unavailableDescription(),
                                                              ),
                                                          ),
                                                    r().createElement(Wn, {
                                                        className: A()(In.rewards, u && In.rewards__dragging),
                                                        index: e,
                                                    }),
                                                ),
                                                r().createElement('div', { className: In.stateIcon }),
                                            ),
                                    ),
                                    !m &&
                                        r().createElement(
                                            'div',
                                            { className: In.arrow },
                                            r().createElement('div', {
                                                className: A()(In.arrowIcon, In.arrowIcon__default),
                                            }),
                                            r().createElement('div', {
                                                className: A()(In.arrowIcon, In.arrowIcon__done),
                                            }),
                                        ),
                                ),
                            );
                        },
                    ),
                    Yn = 'Quests_base_e7',
                    Xn = 'Quests_base__frozen_b7',
                    Kn = 'Quests_wrapper_21',
                    Zn = 'Quests_content_a0',
                    Jn = 'Quests_bar_12',
                    er = 'Quests_barThumb_37',
                    ur = 'Quests_barRail_73',
                    tr = 'Quests_lip_25',
                    nr = 'Quests_lip__left_1e',
                    rr = 'Quests_lip__right_63',
                    ar = 'Quests_shadow_1e',
                    sr = 'Quests_shadow__visible_b9',
                    or = 'Quests_shadow__left_23',
                    ir = 'Quests_shadow__right_a6',
                    lr = 'Quests_arrow_c8',
                    cr = 'Quests_arrow__left_f2',
                    dr = 'Quests_arrow__right_82';
                function Er() {
                    return (
                        (Er =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Er.apply(this, arguments)
                    );
                }
                const _r = (0, O.Pi)(() => {
                        const e = (0, n.useRef)([]),
                            u = zt(),
                            t = fe(),
                            a = t.model,
                            s = t.controls,
                            o = a.computes.getQuestsLength(),
                            i = a.computes.getIsQuestSwitchAnimationNeeded(),
                            l = a.computes.getLastDoneQuestIndex(),
                            c = void 0 !== l ? a.computes.getIsProgressionQuest(l) : void 0,
                            d = a.computes.getCurrentQuestIndex(),
                            E = a.questSwitchAnimationPhase.get(),
                            _ = a.isRewardsViewOpen.get(),
                            m = a.lastPlayedToDoneAnimationQuestIndex.get(),
                            g = l === o - 1,
                            F = on(u),
                            D = ((e) => {
                                const u = (0, n.useState)(dn.Start),
                                    t = u[0],
                                    r = u[1],
                                    a = e.animationScroll,
                                    s = e.getContainerSize,
                                    o = e.getWrapperSize,
                                    i = e.events;
                                return (
                                    (0, n.useEffect)(() => {
                                        const e = () => {
                                            const e = a.scrollPosition.get(),
                                                u = s() - o() - 10;
                                            r(e <= 10 ? dn.Start : e >= u ? dn.End : dn.Between);
                                        };
                                        return (i.on('change', e), () => i.off('change', e));
                                    }, [a.scrollPosition, i, s, o]),
                                    t
                                );
                            })(u),
                            B = ln(l, e, u),
                            C = ln(d, e, u),
                            p = ((e, u) => {
                                const t = (0, n.useState)([]),
                                    r = t[0],
                                    a = t[1],
                                    s = (0, n.useRef)({ boxes: [], wrapperWidth: 0, scrollPosition: 0 }),
                                    o = u.animationScroll,
                                    i = u.events,
                                    l = u.getWrapperSize,
                                    c = u.wrapperRef,
                                    d = (0, n.useCallback)(() => {
                                        const e = s.current,
                                            u = e.boxes,
                                            t = e.wrapperWidth,
                                            n = e.scrollPosition;
                                        a(
                                            u.map(([e, u]) =>
                                                u <= n ? cn.LeftHidden : n + t <= e ? cn.RightHidden : cn.Visible,
                                            ),
                                        );
                                    }, []);
                                return (
                                    (0, n.useEffect)(() => {
                                        if (!c.current) return;
                                        const u = new ResizeObserver(() => {
                                            const u = e.current,
                                                t = l();
                                            u &&
                                                0 !== u.length &&
                                                t &&
                                                ((s.current.boxes = u.map(({ offsetWidth: e, offsetLeft: u }) => [
                                                    u,
                                                    u + e,
                                                ])),
                                                (s.current.wrapperWidth = t),
                                                d());
                                        });
                                        return (u.observe(c.current), () => u.disconnect());
                                    }, [l, d, c, e]),
                                    (0, n.useEffect)(() => {
                                        const e = () => {
                                            ((s.current.scrollPosition = o.scrollPosition.get()), d());
                                        };
                                        return (i.on('change', e), () => i.off('change', e));
                                    }, [o.scrollPosition, d, i]),
                                    r
                                );
                            })(e, u),
                            f = void 0 !== d ? p[d] : void 0,
                            h = (0, n.useCallback)(
                                (e) => {
                                    s.setQuestSwitchAnimationPhase(e);
                                },
                                [s],
                            ),
                            b = (0, n.useCallback)(
                                (e, u) =>
                                    au(() => {
                                        s.setQuestSwitchAnimationPhase(e);
                                    }, u),
                                [s],
                            );
                        ((0, n.useEffect)(() => {
                            if (null !== B && null !== C && !_)
                                return Lt(() => {
                                    if (i && l !== m)
                                        u.scrollPosition.start({
                                            scrollPosition: B,
                                            onStart: () => {
                                                h(Be.Scrolling);
                                            },
                                            onResolve: () => {
                                                h(Be.ToDone);
                                            },
                                        });
                                    else {
                                        if (E !== Be.None) return;
                                        u.scrollPosition.start({ scrollPosition: C });
                                    }
                                });
                        }, [h, E, i, _, l, m, u.scrollPosition, C, B]),
                            (0, n.useEffect)(() => {
                                if (null !== B && null !== C)
                                    if (_) h(Be.None);
                                    else
                                        switch (E) {
                                            case Be.ToDone:
                                                return (
                                                    s.setLastPlayedToDoneAnimationQuestIndex(l),
                                                    b(Be.ToDoneFinished, c ? 4900 : 1e3)
                                                );
                                            case Be.ToDoneFinished:
                                                return g
                                                    ? void h(Be.None)
                                                    : void u.scrollPosition.start({
                                                          scrollPosition: C,
                                                          onStart: () => {
                                                              h(Be.Scrolling);
                                                          },
                                                          onResolve: () => {
                                                              h(Be.ToInProgress);
                                                          },
                                                      });
                                            case Be.ToInProgress:
                                                return b(Be.None, 1200);
                                        }
                            }, [s, g, h, b, C, c, _, B, l, E, u.scrollPosition]));
                        const v = () => {
                            null !== C && u.scrollPosition.start({ scrollPosition: C });
                        };
                        return r().createElement(
                            'div',
                            { className: A()(Yn, E !== Be.None && Xn) },
                            r().createElement(
                                'div',
                                { className: Kn },
                                r().createElement(
                                    rn,
                                    { api: u, classNames: { content: Zn } },
                                    a.computes
                                        .getQuests()
                                        .map((u, t) =>
                                            r().createElement(
                                                Vn,
                                                Er(
                                                    {
                                                        key: t,
                                                        index: t,
                                                        isVisible: p[t] === cn.Visible,
                                                        isDragging: 'dragging' === F.type,
                                                        questsRef: e,
                                                    },
                                                    u,
                                                ),
                                            ),
                                        ),
                                ),
                                r().createElement('div', { className: A()(ar, or, D !== dn.Start && sr) }),
                                r().createElement('div', { className: A()(ar, ir, D !== dn.End && sr) }),
                                r().createElement('div', { className: A()(tr, nr) }),
                                r().createElement('div', { className: A()(tr, rr) }),
                                r().createElement(
                                    'div',
                                    { className: A()(lr, cr) },
                                    r().createElement(An, {
                                        direction: _n.Left,
                                        isVisible: f === cn.LeftHidden,
                                        onClick: v,
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: A()(lr, dr) },
                                    r().createElement(An, {
                                        direction: _n.Right,
                                        isVisible: f === cn.RightHidden,
                                        onClick: v,
                                    }),
                                ),
                            ),
                            r().createElement(tn, { api: u, classNames: { base: Jn, thumb: er, rail: ur } }),
                        );
                    }),
                    mr = 'App_base_85',
                    Ar = 'App_base__visible_3c',
                    gr = 'App_content_6d',
                    Fr = (0, O.Pi)(() => {
                        const e = fe(),
                            u = e.controls,
                            t = e.model,
                            a = t.isLoaded.get();
                        var s;
                        return (
                            (0, n.useEffect)(() => {
                                a && u.showView();
                            }, [a, u]),
                            (s = u.close),
                            N(M.n.ESCAPE, s),
                            r().createElement(
                                'div',
                                { className: A()(mr, t.isLoaded.get() && Ar) },
                                r().createElement(U, { isBlurred: !0, onLoaded: u.loaded }),
                                r().createElement(
                                    'div',
                                    { className: gr },
                                    r().createElement(It, null),
                                    r().createElement(_r, null),
                                    r().createElement(ht, null),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    x().render(
                        r().createElement(T, null, r().createElement(pe, null, r().createElement(Fr, null))),
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
                    for (var [u, t, n] = deferred[i], a = !0, s = 0; s < u.length; s++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
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
        (__webpack_require__.j = 678),
        (() => {
            var e = { 678: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, s, o] = t,
                        i = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); i < a.length; i++)
                        ((r = a[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [965], () => __webpack_require__(53));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
