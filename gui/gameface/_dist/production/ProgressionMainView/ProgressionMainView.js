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
            294: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => se });
                var r = {};
                (t.r(r),
                    t.d(r, { mouse: () => _, off: () => m, on: () => d, onResize: () => l, onScaleUpdated: () => c }));
                var n = {};
                (t.r(n),
                    t.d(n, {
                        events: () => r,
                        getMouseGlobalPosition: () => p,
                        getSize: () => F,
                        graphicsQuality: () => D,
                        playSound: () => A,
                        setRTPC: () => g,
                    }));
                var a = {};
                (t.r(a), t.d(a, { getBgUrl: () => T, getTextureUrl: () => w }));
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
                        addModelObserver: () => M,
                        addPreloadTexture: () => N,
                        arabic2roman: () => J,
                        children: () => a,
                        displayStatus: () => S,
                        displayStatusIs: () => ue,
                        enableFullScreenModeSupported: () => ne,
                        events: () => y,
                        extraSize: () => te,
                        forceTriggerMouseMove: () => X,
                        freezeTextureBeforeResize: () => z,
                        getBrowserTexturePath: () => O,
                        getDisplayStatus: () => K,
                        getExternalPaddingsRem: () => ee,
                        getFontNames: () => Z,
                        getScale: () => G,
                        getSize: () => W,
                        getViewGlobalPosition: () => U,
                        initExternalPaddings: () => ae,
                        isEventHandled: () => Y,
                        isFocused: () => Q,
                        pxToRem: () => $,
                        remToPx: () => V,
                        resize: () => H,
                        sendEvent: () => L,
                        setAnimateWindow: () => j,
                        setEventHandled: () => q,
                        setInputPaddingsRem: () => k,
                        setSidePaddingsRem: () => I,
                        whenTutorialReady: () => re,
                    }));
                const l = o('clientResized'),
                    c = o('self.onScaleUpdated'),
                    d = (e, u) => engine.on(e, u),
                    m = (e, u) => engine.off(e, u),
                    E = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') },
                    _ = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && i(!1);
                        }
                        function t() {
                            e.enabled && i(!0);
                        }
                        function r() {
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
                        const n = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const a = `mouse${u}`,
                                            s = E[u]((e) => t([e, 'outside']));
                                        function o(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, o),
                                            r(),
                                            () => {
                                                n &&
                                                    (s(),
                                                    window.removeEventListener(a, o),
                                                    (e.listeners -= 1),
                                                    r(),
                                                    (n = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
                            ),
                            {},
                        );
                        return Object.assign({}, n, {
                            disable() {
                                ((e.enabled = !1), r());
                            },
                            enable() {
                                ((e.enabled = !0), r());
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
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const D = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    C = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    B = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    h = Object.keys(B).reduce((e, u) => ((e[u] = () => A(B[u])), e), {}),
                    f = { play: Object.assign({}, h, { sound: A }), setRTPC: g },
                    b = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    v = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function w(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function T(e, u, t) {
                    return `url(${w(e, u, t)})`;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const S = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    y = {
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
                    P = ['args'],
                    x = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, P);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, u]) => {
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
                        var r;
                    },
                    L = {
                        close(e) {
                            x('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            x(64);
                        },
                        move(e) {
                            x(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function N(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function k(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function O(e, u, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, r);
                }
                function M(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function W(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function H(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function U(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: V(u.x), y: V(u.y) };
                }
                function z() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function G() {
                    return viewEnv.getScale();
                }
                function $(e) {
                    return viewEnv.pxToRem(e);
                }
                function V(e) {
                    return viewEnv.remToPx(e);
                }
                function j(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function Q() {
                    return viewEnv.isFocused();
                }
                function q() {
                    return viewEnv.setEventHandled();
                }
                function Y() {
                    return viewEnv.isEventHandled();
                }
                function X() {
                    viewEnv.forceTriggerMouseMove();
                }
                function K() {
                    return viewEnv.getShowingStatus();
                }
                const Z = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    J = function (e) {
                        let u = '';
                        for (let t = v.length - 1; t >= 0; t--) for (; e >= v[t]; ) ((u += b[t]), (e -= v[t]));
                        return u;
                    };
                function ee() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const ue = Object.keys(S).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === S[u]), e), {}),
                    te = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    re = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : y.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function ne() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function ae(e) {
                    function u() {
                        const u = viewEnv.getExternalPaddingsRem(),
                            t = u.top,
                            r = u.right,
                            n = u.bottom,
                            a = u.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${r}rem`),
                            e.style.setProperty('--external-padding-bottom', `${n}rem`),
                            e.style.setProperty('--external-padding-left', `${a}rem`));
                    }
                    (u(), engine.on('self.onPaddingsUpdated', () => u()));
                }
                const se = { view: s, client: n, sound: f, intl: C };
            },
            521: (e, u, t) => {
                'use strict';
                let r, n;
                (t.d(u, { n: () => r }),
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
                    })(n || (n = {})));
            },
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var r = t(294);
                class n {
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
                        return (window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, u, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(e, t, n);
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
                            const r = this._callbacks[t];
                            void 0 !== r && r(e, u);
                        });
                    }
                }
                n.__instance = void 0;
                const a = n;
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
                t.d(u, { Sw: () => a.Z, B3: () => l, Z5: () => s.Z5, B0: () => o, ry: () => p, Eu: () => D });
                class r {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let r = e.target;
                                    do {
                                        if (r === u) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            r = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== r)),
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
                const n = r;
                var a = t(358),
                    s = t(613);
                let o;
                var i;
                (((i = o || (o = {}))[(i.UNDEFINED = 0)] = 'UNDEFINED'),
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
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(521),
                    _ = t(294);
                const A = ['args'];
                function g(e, u, t, r, n, a, s) {
                    try {
                        var o = e[a](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(r, n);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                    return new Promise(function (r, n) {
                                        var a = e.apply(u, t);
                                        function s(e) {
                                            g(a, r, n, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(a, r, n, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    C = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, A);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, u]) => {
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
                        var r;
                    },
                    B = () => C(o.CLOSE),
                    h = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var f = t(572);
                const b = n.instance,
                    v = {
                        DataTracker: a.Z,
                        ViewModel: f.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => C(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => C(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, r, n = R.invalid('resId'), a) => {
                            const s = _.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                d = i.width,
                                m = i.height,
                                E = {
                                    x: _.O.view.pxToRem(l) + s.x,
                                    y: _.O.view.pxToRem(c) + s.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(m),
                                };
                            C(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: F(E),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => h(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, B);
                        },
                        handleViewEvent: C,
                        onBindingsReady: p,
                        onLayoutReady: D,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const r in u)
                                if (Object.prototype.hasOwnProperty.call(u, r)) {
                                    const n = Object.prototype.toString.call(u[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[r];
                                        t[r] = [];
                                        for (let u = 0; u < n.length; u++) t[r].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = e(u[r]))
                                            : (t[r] = u[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = v;
            },
            613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => a, Z5: () => r, cy: () => n });
                const r = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    a = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            89: (e, u, t) => {
                'use strict';
                var r = {};
                (t.r(r),
                    t.d(r, {
                        Area: () => Qt,
                        Bar: () => $t,
                        DefaultScroll: () => jt,
                        Direction: () => Lt,
                        defaultSettings: () => Nt,
                        useHorizontalScrollApi: () => Ot,
                    }));
                var n = {};
                (t.r(n), t.d(n, { Area: () => ar, Bar: () => tr, Default: () => nr, useVerticalScrollApi: () => qt }));
                var a = t(363),
                    s = t.n(a);
                const o = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var i = t(294);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function d(e = i.O.client.getSize('rem')) {
                    const u = e.width,
                        t = e.height;
                    return Object.assign(
                        { width: u, height: t },
                        (function (e, u, t) {
                            const r = (function (e, u) {
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
                                n = (function (e, u) {
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
                                a = Math.min(r, n);
                            return {
                                extraLarge: a === t.extraLarge.weight,
                                large: a === t.large.weight,
                                medium: a === t.medium.weight,
                                small: a === t.small.weight,
                                extraSmall: a === t.extraSmall.weight,
                                extraLargeWidth: r === t.extraLarge.weight,
                                largeWidth: r === t.large.weight,
                                mediumWidth: r === t.medium.weight,
                                smallWidth: r === t.small.weight,
                                extraSmallWidth: r === t.extraSmall.weight,
                                extraLargeHeight: n === t.extraLarge.weight,
                                largeHeight: n === t.large.weight,
                                mediumHeight: n === t.medium.weight,
                                smallHeight: n === t.small.weight,
                                extraSmallHeight: n === t.extraSmall.weight,
                            };
                        })(u, t, l),
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
                })(c || (c = {}));
                const m = d(),
                    E = (0, a.createContext)(m),
                    _ = ['children'];
                (0, a.memo)((e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, _);
                    const r = (0, a.useContext)(E),
                        n = r.extraLarge,
                        s = r.large,
                        i = r.medium,
                        l = r.small,
                        c = r.extraSmall,
                        d = r.extraLargeWidth,
                        m = r.largeWidth,
                        A = r.mediumWidth,
                        g = r.smallWidth,
                        F = r.extraSmallWidth,
                        p = r.extraLargeHeight,
                        D = r.largeHeight,
                        C = r.mediumHeight,
                        B = r.smallHeight,
                        h = r.extraSmallHeight,
                        f = { extraLarge: p, large: D, medium: C, small: B, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && n) return u;
                        if (t.large && s) return u;
                        if (t.medium && i) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && d) return o(u, t, f);
                        if (t.largeWidth && m) return o(u, t, f);
                        if (t.mediumWidth && A) return o(u, t, f);
                        if (t.smallWidth && g) return o(u, t, f);
                        if (t.extraSmallWidth && F) return o(u, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && p) return u;
                            if (t.largeHeight && D) return u;
                            if (t.mediumHeight && C) return u;
                            if (t.smallHeight && B) return u;
                            if (t.extraSmallHeight && h) return u;
                        }
                    }
                    return null;
                });
                const A = ({ children: e }) => {
                    const u = (0, a.useState)(d),
                        t = u[0],
                        r = u[1],
                        n = (0, a.useState)(!1),
                        o = n[0],
                        l = n[1];
                    return (
                        (0, a.useLayoutEffect)(() => {
                            function e() {
                                r((e) => {
                                    const u = i.O.client.getSize('rem');
                                    return e.width === u.width && e.height === u.height ? e : d(u);
                                });
                            }
                            return (
                                e(),
                                l(!0),
                                i.O.client.events.on('clientResized', e),
                                i.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (i.O.client.events.off('clientResized', e),
                                        i.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        s().createElement(E.Provider, { value: t }, o && e)
                    );
                };
                var g = t(483),
                    F = t.n(g),
                    p = t(926),
                    D = t.n(p);
                let C, B, h;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(C || (C = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                    })(B || (B = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(h || (h = {})));
                const f = () => {
                        const e = (0, a.useContext)(E),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return C.ExtraLarge;
                                    case e.large:
                                        return C.Large;
                                    case e.medium:
                                        return C.Medium;
                                    case e.small:
                                        return C.Small;
                                    case e.extraSmall:
                                        return C.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), C.ExtraSmall);
                                }
                            })(e),
                            n = ((e) => {
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
                                        return h.ExtraLarge;
                                    case e.largeHeight:
                                        return h.Large;
                                    case e.mediumHeight:
                                        return h.Medium;
                                    case e.smallHeight:
                                        return h.Small;
                                    case e.extraSmallHeight:
                                        return h.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), h.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    b = ['children', 'className'];
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                }
                const w = {
                        [B.ExtraSmall]: '',
                        [B.Small]: D().SMALL_WIDTH,
                        [B.Medium]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH}`,
                        [B.Large]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH}`,
                        [B.ExtraLarge]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH} ${D().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [h.ExtraSmall]: '',
                        [h.Small]: D().SMALL_HEIGHT,
                        [h.Medium]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT}`,
                        [h.Large]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT}`,
                        [h.ExtraLarge]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT} ${D().EXTRA_LARGE_HEIGHT}`,
                    },
                    S = {
                        [C.ExtraSmall]: '',
                        [C.Small]: D().SMALL,
                        [C.Medium]: `${D().SMALL} ${D().MEDIUM}`,
                        [C.Large]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE}`,
                        [C.ExtraLarge]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE} ${D().EXTRA_LARGE}`,
                    },
                    y = (e) => {
                        let u = e.children,
                            t = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, b);
                        const n = f(),
                            a = n.mediaWidth,
                            o = n.mediaHeight,
                            i = n.mediaSize;
                        return s().createElement('div', v({ className: F()(t, w[a], T[o], S[i]) }, r), u);
                    },
                    P = ['children'],
                    x = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, P);
                        return s().createElement(A, null, s().createElement(y, t, u));
                    };
                var L = t(533),
                    N = t.n(L);
                let k;
                !(function (e) {
                    e[(e.PROGRESSION = 0)] = 'PROGRESSION';
                })(k || (k = {}));
                const O = {
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
                    M = [
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
                function I() {
                    return (
                        (I =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        I.apply(this, arguments)
                    );
                }
                const W = (e) => {
                    let u = e.caption,
                        t = e.onClick,
                        r = e.goto,
                        n = e.classNames,
                        o = e.onMouseEnter,
                        l = e.onMouseLeave,
                        c = e.onMouseDown,
                        d = e.onMouseUp,
                        m = e.side,
                        E = void 0 === m ? 'left' : m,
                        _ = e.type,
                        A = void 0 === _ ? 'back' : _,
                        g = e.soundHover,
                        p = void 0 === g ? 'highlight' : g,
                        D = e.soundClick,
                        C = void 0 === D ? 'play' : D,
                        B = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, M);
                    const h = (0, a.useCallback)(
                            (e) => {
                                (null == o || o(e), i.O.sound.play.sound(p));
                            },
                            [o, p],
                        ),
                        f = (0, a.useCallback)(
                            (e) => {
                                null == l || l(e);
                            },
                            [l],
                        ),
                        b = (0, a.useCallback)(
                            (e) => {
                                (null == c || c(e), i.O.sound.play.sound(C));
                            },
                            [c, C],
                        ),
                        v = (0, a.useCallback)(
                            (e) => {
                                null == d || d(e);
                            },
                            [d],
                        );
                    return s().createElement(
                        'div',
                        I(
                            {
                                className: F()(O.base, O[`base__${A}`], O[`base__${E}`], null == n ? void 0 : n.base),
                                onMouseEnter: h,
                                onMouseLeave: f,
                                onMouseDown: b,
                                onMouseUp: v,
                                onClick: t,
                            },
                            B,
                        ),
                        'info' !== A && s().createElement('div', { className: O.shine }),
                        s().createElement(
                            'div',
                            { className: F()(O.icon, O[`icon__${A}`], O[`icon__${E}`], null == n ? void 0 : n.icon) },
                            s().createElement('div', { className: F()(O.glow, null == n ? void 0 : n.glow) }),
                        ),
                        s().createElement(
                            'div',
                            { className: F()(O.caption, O[`caption__${A}`], null == n ? void 0 : n.caption) },
                            u,
                        ),
                        r && s().createElement('div', { className: F()(O.goto, null == n ? void 0 : n.goto) }, r),
                    );
                };
                var H = t(521),
                    U = t(916);
                const z = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function G(e = H.n.NONE, u = z, t = !1, r = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== H.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!r && i.O.view.isEventHandled()) return;
                                (i.O.view.setEventHandled(), u(n), t && n.stopPropagation());
                            }
                        }
                    }, [u, e, t, r]);
                }
                var $ = t(515);
                const V = (e, u, t) => (t < e ? e : t > u ? u : t);
                function j() {}
                function Q() {
                    return !1;
                }
                console.log;
                var q = t(174);
                function Y(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const X = (e) => (0 === e ? window : window.subViews.get(e)),
                    K = () => (e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: n, children: o, mocks: l }) {
                                const c = (0, a.useRef)([]),
                                    d = (t, r, n) => {
                                        var a;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = X,
                                                context: r = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function a(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = n.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const n = t(u),
                                                        a = r.split('.').reduce((e, u) => e[u], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const o = 'string' == typeof a ? `${r}.${a}` : r,
                                                            l = i.O.view.addModelObserver(o, u, !0);
                                                        return (n.set(l, t), e && t(s(a)), l);
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, u) => {
                                                        const t = s(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = s(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                t = (function (e, u) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (t) return (t = t.call(e)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (t = (function (e, u) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return Y(e, u);
                                                                                var t = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        e.constructor &&
                                                                                        (t = e.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? Y(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
                                                                        var r = 0;
                                                                        return function () {
                                                                            return r >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[r++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(n.keys());
                                                            !(e = t()).done;

                                                        )
                                                            a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(r),
                                            o =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(e)) : o.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            m = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    dict: (e) => {
                                                        const u = l(e),
                                                            r = q.LO.box(u, { equals: Q });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, q.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    array: (e, u) => {
                                                        const r = null != u ? u : l(e),
                                                            n = q.LO.box(r, { equals: Q });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, q.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const r = null != u ? u : l(e),
                                                            n = q.LO.box(r, { equals: Q });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, q.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const r = l(u);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, u) => ((e[u] = q.LO.box(r[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, q.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                a = Object.entries(n),
                                                                s = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = q.LO.box(r[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, q.aD)((e) => {
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
                                            E = { mode: t, model: m, externalModel: o, cleanup: d };
                                        return {
                                            model: m,
                                            controls: 'mocks' === t && n ? n.controls(E) : u(E),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    m = (0, a.useRef)(!1),
                                    E = (0, a.useState)(r),
                                    _ = E[0],
                                    A = E[1],
                                    g = (0, a.useState)(() => d(r, n, l)),
                                    F = g[0],
                                    p = g[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        m.current ? p(d(_, n, l)) : (m.current = !0);
                                    }, [l, _, n]),
                                    (0, a.useEffect)(() => {
                                        A(r);
                                    }, [r]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    s().createElement(t.Provider, { value: F }, o)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    };
                function Z(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const J = Z;
                function ee(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, r) => u(null == e ? void 0 : e.value, t, r));
                }
                const ue = (e, u) =>
                    Object.keys(e).length === Object.keys(u).length &&
                    Object.keys(e).every((t) => Object.prototype.hasOwnProperty.call(u, t) && e[t] === u[t]);
                var te = t(946);
                let re, ne, ae, se, oe, ie, le, ce;
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
                        (e.Attachment = 'attachment'),
                        (e.Stamp = 'stamp'),
                        (e.WtEventLootbox = 'wtevent_lootBox'),
                        (e.WtEventTicket = 'wtevent_ticket'));
                })(re || (re = {})),
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
                    })(ne || (ne = {})),
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
                    })(ae || (ae = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
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
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(ie || (ie = {})),
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
                    })(le || (le = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(ce || (ce = {})));
                const de = [re.Attachment],
                    me = [
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
                function Ee(e) {
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
                const _e = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: U.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    Ae = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            E = e.decoratorId,
                            _ = void 0 === E ? 0 : E,
                            A = e.isEnabled,
                            g = void 0 === A || A,
                            F = e.targetId,
                            p = void 0 === F ? 0 : F,
                            D = e.onShow,
                            C = e.onHide,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, me);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, a.useMemo)(
                                () =>
                                    p ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            r = R.invalid('resId'),
                                            n = '';
                                        var a;
                                        return (
                                            u &&
                                                ((n =
                                                    (null == (a = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) ||
                                                    ''),
                                                (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (r = window.subViews[t].id)),
                                            { callerUrl: n, caller: t, stack: u, resId: r }
                                        );
                                    })().resId,
                                [p],
                            ),
                            b = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (_e(t, _, { isMouseEvent: !0, on: !0, arguments: Ee(r) }, f),
                                    D && D(),
                                    (h.current.isVisible = !0));
                            }, [t, _, r, f, D]),
                            v = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        _e(t, _, { on: !1 }, f),
                                        h.current.isVisible && C && C(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, _, f, C]),
                            w = (0, a.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === g && v();
                            }, [g, v]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        (window.removeEventListener('mouseleave', v), v());
                                    }
                                ),
                                [v],
                            ),
                            g
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((T = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          (clearTimeout(h.current.timeoutId),
                                                          (h.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                          n && n(e),
                                                          T && T(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (v(), null == s || s(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === m && v(), null == i || i(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === m && v(), null == o || o(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          B,
                                      ),
                                  )
                                : u
                        );
                        var T;
                    },
                    ge = ['children'];
                function Fe() {
                    return (
                        (Fe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Fe.apply(this, arguments)
                    );
                }
                const pe = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, ge);
                        return s().createElement(
                            Ae,
                            Fe(
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
                    De = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ce() {
                    return (
                        (Ce =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ce.apply(this, arguments)
                    );
                }
                const Be = R.views.common.tooltip_window.simple_tooltip_content,
                    he = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            n = e.note,
                            o = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, De);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: r, note: n, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, r, n, i]);
                        return s().createElement(
                            Ae,
                            Ce(
                                {
                                    contentId:
                                        ((d = null == i ? void 0 : i.hasHtmlContent),
                                        d ? Be.SimpleTooltipHtmlContent('resId') : Be.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    };
                function fe() {
                    return (
                        (fe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        fe.apply(this, arguments)
                    );
                }
                const be = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const r = s().createElement('div', { className: t }, e);
                        if (u.header || u.body) return s().createElement(he, u, r);
                        const n = u.contentId;
                        return n ? s().createElement(Ae, fe({}, u, { contentId: n }), r) : s().createElement(pe, u, r);
                    },
                    ve = ({ value: e, format: u = 'integral' }) => {
                        const t = (function (e) {
                                return 'gold' === e ? U.B3.GOLD : U.B3.INTEGRAL;
                            })(u),
                            r = U.Z5.getNumberFormat(e, t);
                        return void 0 !== e && void 0 !== r ? r : null;
                    },
                    we = [
                        re.Items,
                        re.Equipment,
                        re.Xp,
                        re.XpFactor,
                        re.Blueprints,
                        re.BlueprintsAny,
                        re.Goodies,
                        re.Berths,
                        re.Slots,
                        re.Tokens,
                        re.CrewSkins,
                        re.CrewBooks,
                        re.Customizations,
                        re.CreditsFactor,
                        re.TankmenXp,
                        re.TankmenXpFactor,
                        re.FreeXpFactor,
                        re.BattleToken,
                        re.LootBox,
                        re.PremiumUniversal,
                        re.NaturalCover,
                        re.BpCoin,
                        re.BattlePassSelectToken,
                        re.BattlaPassFinalAchievement,
                        re.BattleBadge,
                        re.BattlePassTicket,
                        re.BonusX5,
                        re.CrewBonusX3,
                        re.EpicSelectToken,
                        re.Comp7TokenWeeklyReward,
                        re.DeluxeGift,
                        re.ModernizedDevicesT1Gift,
                        re.ModernizedDevicesT2Gift,
                        re.ModernizedDevicesT3Gift,
                        re.BattleBoosterGift,
                        re.OptionalDevice,
                        re.Attachment,
                        re.Stamp,
                        re.WtEventLootbox,
                        re.WtEventTicket,
                    ],
                    Te = [re.Gold, re.Credits, re.Crystal, re.FreeXp],
                    Se = [re.BattlePassPoints, re.EquipCoin],
                    ye = [re.PremiumPlus, re.Premium],
                    Pe = ['engravings', 'backgrounds'],
                    Re = ['engraving', 'background'],
                    xe = (e, u = ae.Small) => {
                        const t = e.name,
                            r = e.type,
                            n = e.value,
                            a = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case ae.S600x450:
                                        return 'c_600x450';
                                    case ae.S400x300:
                                        return 'c_400x300';
                                    case ae.S296x222:
                                        return 'c_296x222';
                                    case ae.S232x174:
                                        return 'c_232x174';
                                    case ae.Big:
                                        return 'c_80x80';
                                    case ae.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}_${n}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${n}`;
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
                                    const r = Pe[e];
                                    if (r) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(r),
                                            a = n.$dyn(t);
                                        return a ? `${a}` : `${n.$dyn(Re[e])}`;
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
                    Le = (e, u, t) => {
                        const r = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            r,
                            t,
                        );
                    },
                    Ne = [ae.Small, ae.Big],
                    ke = {
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
                    Oe = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: r = ae.Big,
                        special: n,
                        value: a,
                        valueType: o,
                        title: i,
                        style: l,
                        className: c,
                        classNames: d,
                        tooltipArgs: m,
                        periodicIconTooltipArgs: E,
                    }) => {
                        const _ = ((e, u) => {
                                if (void 0 === u || !Ne.includes(e)) return null;
                                switch (u) {
                                    case oe.BATTLE_BOOSTER:
                                    case oe.BATTLE_BOOSTER_REPLACE:
                                        return ie.BATTLE_BOOSTER;
                                }
                            })(r, n),
                            A = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case oe.BATTLE_BOOSTER:
                                        return le.BATTLE_BOOSTER;
                                    case oe.BATTLE_BOOSTER_REPLACE:
                                        return le.BATTLE_BOOSTER_REPLACE;
                                    case oe.BUILT_IN_EQUIPMENT:
                                        return le.BUILT_IN_EQUIPMENT;
                                    case oe.EQUIPMENT_PLUS:
                                        return le.EQUIPMENT_PLUS;
                                    case oe.EQUIPMENT_TROPHY_BASIC:
                                        return le.EQUIPMENT_TROPHY_BASIC;
                                    case oe.EQUIPMENT_TROPHY_UPGRADED:
                                        return le.EQUIPMENT_TROPHY_UPGRADED;
                                    case oe.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return le.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case oe.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return le.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case oe.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return le.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case oe.PROGRESSION_STYLE_UPGRADED_1:
                                        return le.PROGRESSION_STYLE_UPGRADED_1;
                                    case oe.PROGRESSION_STYLE_UPGRADED_2:
                                        return le.PROGRESSION_STYLE_UPGRADED_2;
                                    case oe.PROGRESSION_STYLE_UPGRADED_3:
                                        return le.PROGRESSION_STYLE_UPGRADED_3;
                                    case oe.PROGRESSION_STYLE_UPGRADED_4:
                                        return le.PROGRESSION_STYLE_UPGRADED_4;
                                    case oe.PROGRESSION_STYLE_UPGRADED_5:
                                        return le.PROGRESSION_STYLE_UPGRADED_5;
                                    case oe.PROGRESSION_STYLE_UPGRADED_6:
                                        return le.PROGRESSION_STYLE_UPGRADED_6;
                                    case oe.ATTACHMENT_RARE:
                                        return le.ATTACHMENT_RARE;
                                    case oe.ATTACHMENT_EPIC:
                                        return le.ATTACHMENT_EPIC;
                                    case oe.ATTACHMENT_LEGENDARY:
                                        return le.ATTACHMENT_LEGENDARY;
                                }
                            })(n),
                            g = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case se.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case se.CURRENCY:
                                    case se.NUMBER:
                                        return s().createElement(ve, { format: 'integral', value: Number(e) });
                                    case se.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(a, o);
                        return s().createElement(
                            'div',
                            {
                                className: F()(ke.base, ke[`base__${r}`], de.includes(e) && ke.base__normalize, c),
                                style: l,
                            },
                            s().createElement(
                                be,
                                { tooltipArgs: m, className: ke.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: F()(ke.image, null == d ? void 0 : d.image) },
                                        _ &&
                                            s().createElement('div', {
                                                className: F()(ke.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${_}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            s().createElement('div', {
                                                className: F()(ke.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        A &&
                                            s().createElement('div', {
                                                className: F()(ke.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${A}_overlay)`,
                                                },
                                            }),
                                    ),
                                    g &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: F()(
                                                    ke.info,
                                                    ke[`info__${e}`],
                                                    o === se.MULTI && ke.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            g,
                                        ),
                                    i && s().createElement('div', { className: ke.title }, i),
                                ),
                            ),
                            t &&
                                s().createElement(
                                    be,
                                    { tooltipArgs: E },
                                    s().createElement('div', {
                                        className: F()(ke.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    };
                function Me() {
                    return (
                        (Me =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Me.apply(this, arguments)
                    );
                }
                const Ie = (e) => ('overlayType' in e ? e.overlayType : void 0);
                function We(e, u) {
                    const t = ((e, u) => u || (e < C.Medium ? ae.Small : ae.Big))(f().mediaSize, u);
                    return {
                        parsedRewards: ee(e, (e) => {
                            let u = Me({}, e);
                            return Object.assign({}, u, {
                                special: Ie(u),
                                image: xe(u, t),
                                size: t,
                                valueType:
                                    ((r = u.name),
                                    we.includes(r)
                                        ? se.MULTI
                                        : Te.includes(r)
                                          ? se.CURRENCY
                                          : Se.includes(r)
                                            ? se.NUMBER
                                            : ye.includes(r)
                                              ? se.PREMIUM_PLUS
                                              : se.STRING),
                                tooltipArgs: Le(
                                    { tooltipId: u.tooltipId, tooltipContentId: u.tooltipContentId },
                                    Number(u.tooltipContentId),
                                ),
                            });
                            var r;
                        }),
                        imageSize: t,
                    };
                }
                const He = {
                    base: 'Separator_base_b9',
                    separator: 'Separator_separator_b3',
                    base__completedBattleQuests: 'Separator_base__completedBattleQuests_12',
                    separator__left: 'Separator_separator__left_58',
                    base__inProgressBattleQuests: 'Separator_base__inProgressBattleQuests_1e',
                    base__condition: 'Separator_base__condition_2b',
                    base__awards: 'Separator_base__awards_9b',
                    base__completed: 'Separator_base__completed_36',
                    show: 'Separator_show_89',
                    base__completedWasVisited: 'Separator_base__completedWasVisited_2f',
                    separator__right: 'Separator_separator__right_e9',
                    ellipse: 'Separator_ellipse_fc',
                    firstLayer: 'Separator_firstLayer_21',
                    secondLayer: 'Separator_secondLayer_d1',
                    'add-blur': 'Separator_add-blur_81',
                    hide: 'Separator_hide_b6',
                };
                let Ue;
                !(function (e) {
                    ((e.Awards = 'awards'),
                        (e.Condition = 'condition'),
                        (e.CompletedBattleQuests = 'completedBattleQuests'),
                        (e.InProgressBattleQuests = 'inProgressBattleQuests'));
                })(Ue || (Ue = {}));
                const ze = ({ children: e, statusAnimation: u, type: t }) =>
                        s().createElement(
                            'div',
                            { className: F()(He.base, He[`base__${t}`], He[`base__${u}`]) },
                            s().createElement(
                                'div',
                                { className: F()(He.separator, He.separator__left) },
                                s().createElement(
                                    'div',
                                    { className: He.ellipse },
                                    s().createElement(
                                        'div',
                                        { className: He.firstLayer },
                                        s().createElement('div', { className: He.secondLayer }),
                                    ),
                                ),
                            ),
                            e,
                            s().createElement(
                                'div',
                                { className: F()(He.separator, He.separator__right) },
                                s().createElement(
                                    'div',
                                    { className: He.ellipse },
                                    s().createElement(
                                        'div',
                                        { className: He.firstLayer },
                                        s().createElement('div', { className: He.secondLayer }),
                                    ),
                                ),
                            ),
                        ),
                    Ge = {
                        base: 'TaskBattle_base_8c',
                        base__completed: 'TaskBattle_base__completed_23',
                        'add-shadow': 'TaskBattle_add-shadow_23',
                        base__completedWasVisited: 'TaskBattle_base__completedWasVisited_dd',
                        base__mediaMediumHeight: 'TaskBattle_base__mediaMediumHeight_7e',
                        taskType: 'TaskBattle_taskType_5e',
                        conditions: 'TaskBattle_conditions_bb',
                        awards: 'TaskBattle_awards_1f',
                        'add-blur': 'TaskBattle_add-blur_f3',
                        awardsList: 'TaskBattle_awardsList_e8',
                        award: 'TaskBattle_award_98',
                        hide: 'TaskBattle_hide_47',
                        show: 'TaskBattle_show_21',
                    };
                var $e = t(797);
                let Ve;
                function je(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(Ve || (Ve = {}));
                const Qe = (e) => e.replace(/&nbsp;/g, ' '),
                    qe = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Ye = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Xe = (e, u, t = Ve.left) => e.split(u).reduce(t === Ve.left ? qe : Ye, []),
                    Ke = (() => {
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
                    Ze = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Je = (e, u, t) =>
                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                            t && e in t
                                ? t[e]
                                : ((e, u = Ve.left) => {
                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return Ze.includes(t)
                                          ? Ke(e)
                                          : 'ja' === t
                                            ? (0, $e.D4)()
                                                  .parse(e)
                                                  .map((e) => Qe(e))
                                            : ((e, u = Ve.left) => {
                                                  let t = [];
                                                  const r =
                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                      n = Qe(e);
                                                  return (
                                                      Xe(n, /( )/, u).forEach((e) => (t = t.concat(Xe(e, r, Ve.left)))),
                                                      t
                                                  );
                                              })(e, u);
                                  })(e, u),
                        ),
                    eu = ({ binding: e, text: u = '', classMix: t, alignment: r = Ve.left, formatWithBrackets: n }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const o = n && e ? je(u, e) : u;
                        return s().createElement(
                            a.Fragment,
                            null,
                            o.split('\n').map((u, n) =>
                                s().createElement(
                                    'div',
                                    { className: F()('FormatText_base_d0', t), key: `${u}-${n}` },
                                    Je(u, r, e).map((e, u) => s().createElement(a.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    uu = { 0: 'firstCondition', 1: 'secondCondition' },
                    tu = (e, u) => {
                        const t = [];
                        if ('or' === e.conditionType || 'and' === e.conditionType)
                            e.items.forEach((e) => {
                                const r =
                                    (n = e) &&
                                    'value' in n &&
                                    null != (a = n.constructor) &&
                                    a.name.includes('ArrayItem')
                                        ? null == n
                                            ? void 0
                                            : n.value
                                        : n;
                                var n, a;
                                r && t.push(...tu(r, u));
                            });
                        else {
                            const r = e.descrData;
                            let n = e,
                                a = n.titleData,
                                s = n.current,
                                o = n.total,
                                i = n.earned,
                                l = n.iconKey;
                            const c = Z(u, 0);
                            (c &&
                                ((a = r || c.descrData),
                                (l = l || c.iconKey),
                                (s = c.current),
                                (o = c.total),
                                (i = c.earned)),
                                0 === o && (a = r),
                                t.push({ condition: a, lastValue: i, currentValue: s, maxValue: o, icon: l }));
                        }
                        return t;
                    },
                    ru = (e) => ('secondCondition' in e ? 'multiConditions' : 'oneCondition'),
                    nu = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let au, su;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                })(au || (au = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(su || (su = {})));
                const ou = ({ size: e = au.Default }) => {
                        const u = F()(nu.background, nu[`background__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    iu = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    lu = ({ size: e }) => {
                        const u = F()(iu.base, iu[`base__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    cu = {
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
                    du = (0, a.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: r, isComplete: n, withoutBounce: a }) => {
                            const o = F()(
                                    cu.base,
                                    cu[`base__${e}`],
                                    t && cu.base__disabled,
                                    n && cu.base__finished,
                                    a && cu.base__withoutBounce,
                                ),
                                i = !t && !n;
                            return s().createElement(
                                'div',
                                { className: o, style: r, ref: u },
                                s().createElement('div', { className: cu.pattern }),
                                s().createElement('div', { className: cu.gradient }),
                                i && s().createElement(lu, { size: e }),
                            );
                        },
                    ),
                    mu = (e, u) => {
                        let t;
                        const r = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(r));
                        };
                    };
                let Eu, _u;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(Eu || (Eu = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(_u || (_u = {})));
                const Au = (e) => (e ? { left: 0 } : { right: 0 }),
                    gu = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    Fu = (e) => ({ transitionDuration: `${e}ms` }),
                    pu = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: n,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const d = o < r,
                                m = (0, a.useState)(Eu.Idle),
                                E = m[0],
                                _ = m[1],
                                A = E === Eu.End,
                                g = E === Eu.Idle,
                                p = E === Eu.Grow,
                                D = E === Eu.Shrink,
                                C = (0, a.useCallback)(
                                    (e) => {
                                        (_(e), l && l(e));
                                    },
                                    [l],
                                ),
                                B = (0, a.useCallback)(
                                    (e, u) =>
                                        mu(() => {
                                            C(e);
                                        }, u),
                                    [C],
                                );
                            (0, a.useEffect)(() => {
                                if (!t)
                                    return g
                                        ? B(Eu.Grow, u)
                                        : p
                                          ? B(Eu.Shrink, e)
                                          : D
                                            ? B(Eu.End, e)
                                            : void (A && i && i());
                            }, [B, t, A, p, g, D, i, u, e]);
                            const h = (0, a.useMemo)(() => Object.assign({ width: '100%' }, Fu(e), Au(d)), [d, e]),
                                f = (0, a.useMemo)(() => Object.assign({ width: '0%' }, Fu(e), Au(d)), [d, e]),
                                b = (0, a.useMemo)(() => Object.assign({ width: '0%' }, gu(d, r), Fu(e)), [r, d, e]),
                                v = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - r)}%` }, gu(d, r), Fu(e)),
                                    [r, d, o, e],
                                );
                            if (A) return null;
                            const w = F()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                d && 0 === o && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return s().createElement(
                                'div',
                                { style: g ? b : v, className: w },
                                s().createElement(
                                    'div',
                                    { style: D ? f : h, className: 'ProgressBarDeltaGrow_glow_68' },
                                    s().createElement(lu, { size: n }),
                                ),
                            );
                        },
                    ),
                    Du = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: n,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = e < t,
                                m = (0, a.useState)(!1),
                                E = m[0],
                                _ = m[1],
                                A = (0, a.useCallback)(
                                    (e) => {
                                        (e === Eu.Shrink && _(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                g = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                F = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(du, {
                                    size: u,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: o,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: E ? F : g,
                                }),
                                t >= 0 &&
                                    s().createElement(pu, {
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
                    Cu = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: n,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < r,
                                d = (0, a.useState)(_u.Idle),
                                m = d[0],
                                E = d[1],
                                _ = m === _u.In,
                                A = m === _u.End,
                                g = m === _u.Idle,
                                F = (0, a.useCallback)(
                                    (e) => {
                                        (E(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, a.useEffect)(() => {
                                if (g && !t)
                                    return mu(() => {
                                        F(_u.In);
                                    }, u);
                            }, [F, t, g, u]),
                                (0, a.useEffect)(() => {
                                    if (_)
                                        return mu(() => {
                                            (i && i(), F(_u.End));
                                        }, e + u);
                                }, [F, _, i, u, e]));
                            const p = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                D = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                C = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(r - o)}%`, left: `${c ? o : r}%` }),
                                    [r, c, o],
                                );
                            return A
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: C },
                                      s().createElement(
                                          'div',
                                          { style: g ? p : D, className: 'ProgressBarDeltaSimple_delta_99' },
                                          s().createElement(lu, { size: n }),
                                      ),
                                  );
                        },
                    ),
                    Bu = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: n,
                            isComplete: o,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const d = (0, a.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, e],
                            );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(du, {
                                    size: u,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: o,
                                    baseStyles: d,
                                }),
                                t >= 0 &&
                                    s().createElement(Cu, {
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
                    hu = ['onComplete', 'onEndAnimation'];
                function fu() {
                    return (
                        (fu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        fu.apply(this, arguments)
                    );
                }
                const bu = (0, a.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, hu);
                        const n = (0, a.useState)(!1),
                            o = n[0],
                            i = n[1],
                            l = (0, a.useCallback)(() => {
                                const e = 100 === r.to;
                                (e !== o && i(e), e && u && u(), t && t());
                            }, [o, u, t, r.to]);
                        switch (r.animationSettings.type) {
                            case su.Simple:
                                return s().createElement(Bu, fu({}, r, { onEndAnimation: l, isComplete: o }));
                            case su.Growing:
                                return s().createElement(Du, fu({}, r, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    vu = ({ size: e, value: u, lineRef: t, disabled: r, onComplete: n }) => {
                        const o = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            i = 100 === u;
                        return (
                            (0, a.useEffect)(() => {
                                i && n && n();
                            }, [i, n]),
                            s().createElement(du, { size: e, disabled: r, baseStyles: o, isComplete: i, lineRef: t })
                        );
                    },
                    wu = ['onEndAnimation'];
                function Tu() {
                    return (
                        (Tu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Tu.apply(this, arguments)
                    );
                }
                const Su = (0, a.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, wu);
                    const r = (0, a.useRef)({}),
                        n = (0, a.useCallback)(() => {
                            ((r.current.from = void 0), u && u());
                        }, [u]),
                        o = 'number' == typeof r.current.from ? r.current.from : t.from;
                    return (
                        (r.current.from = o),
                        s().createElement(
                            bu,
                            Tu({}, t, {
                                onEndAnimation: n,
                                key: `${o}-${t.to}-${null == t ? void 0 : t.additionalKey}`,
                                from: o,
                            }),
                        )
                    );
                });
                function yu() {
                    return (
                        (yu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        yu.apply(this, arguments)
                    );
                }
                const Pu = (0, a.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: r,
                            deltaFrom: n,
                            additionalKey: a,
                            animationSettings: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (n === u)
                                return s().createElement(vu, {
                                    key: `${n}-${u}-${a}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: r,
                                    onComplete: c,
                                });
                            const d = {
                                from: n,
                                to: u,
                                size: e,
                                additionalKey: a,
                                lineRef: t,
                                disabled: r,
                                animationSettings: o,
                                onComplete: c,
                                onEndAnimation: i,
                                onChangeAnimationState: l,
                            };
                            return o.withStack
                                ? s().createElement(Su, d)
                                : s().createElement(bu, yu({ key: `${n}-${u}-${a}` }, d));
                        },
                    ),
                    Ru = (e) => {
                        var u, t, r, n, a, s, o, i, l, c, d, m, E, _, A, g, F, p, D, C;
                        return {
                            '--progress-base': `url(${e.bgImageBase})`,
                            '--progress-bg-height': null != (u = null == (t = e.bg) ? void 0 : t.height) ? u : '12rem',
                            '--progress-bg-height-small':
                                null != (r = null == (n = e.bg) ? void 0 : n.heightSmall) ? r : '2rem',
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
                                null != (d = null == (m = e.glowSettings) ? void 0 : m.width) ? d : '60rem',
                            '--progress-glow-height':
                                null != (E = null == (_ = e.glowSettings) ? void 0 : _.height) ? E : '100rem',
                            '--progress-glow-small-width':
                                null != (A = null == (g = e.glowSettings) ? void 0 : g.smallWidth) ? A : '44rem',
                            '--progress-glow-small-height':
                                null != (F = null == (p = e.glowSettings) ? void 0 : p.smallHeight) ? F : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (D = null == (C = e.glowSettings) ? void 0 : C.mixBlendMode) ? D : 'lighten',
                            '--progress-glow-small': `url('${e.glowSmall}')`,
                            '--progress-delta-color': e.delta.color,
                            '--progress-delta-shadow': e.delta.shadow,
                        };
                    },
                    xu = (e, u, t) => ('number' == typeof t ? (V(0, u, t) / u) * 100 : e),
                    Lu = {
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
                    Nu = {
                        freezed: !1,
                        withStack: !1,
                        type: su.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    ku = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = Lu,
                            size: t = au.Default,
                            animationSettings: r = Nu,
                            disabled: n = !1,
                            withoutBackground: o = !1,
                            value: i,
                            deltaFrom: l,
                            additionalKey: c,
                            lineRef: d,
                            onChangeAnimationState: m,
                            onEndAnimation: E,
                            onComplete: _,
                            className: A,
                        }) => {
                            const g = (function (e, u, t) {
                                return (0, a.useMemo)(() => {
                                    const r = (V(0, u, e) / u) * 100;
                                    return { value: r, deltaFrom: xu(r, u, t) };
                                }, [t, u, e]);
                            })(i, e, l);
                            return s().createElement(
                                'div',
                                { className: F()(nu.base, A, nu[`base__${t}`]), style: Ru(u) },
                                !o && s().createElement(ou, { size: t }),
                                s().createElement(Pu, {
                                    size: t,
                                    lineRef: d,
                                    disabled: n,
                                    value: g.value,
                                    deltaFrom: g.deltaFrom,
                                    additionalKey: c,
                                    animationSettings: r,
                                    onEndAnimation: E,
                                    onChangeAnimationState: m,
                                    onComplete: _,
                                }),
                            );
                        },
                    ),
                    Ou = {
                        base: 'Progression_base_4e',
                        base__completedWasVisited: 'Progression_base__completedWasVisited_95',
                        progression: 'Progression_progression_85',
                        base__completed: 'Progression_base__completed_ef',
                        hide: 'Progression_hide_d1',
                        progressionNumerical: 'Progression_progressionNumerical_15',
                        progressionNumerical__mediaMediumHeight:
                            'Progression_progressionNumerical__mediaMediumHeight_04',
                        'finish-color': 'Progression_finish-color_fb',
                        currentValue__inProgress: 'Progression_currentValue__inProgress_2b',
                        currentValue: 'Progression_currentValue_a3',
                        separator: 'Progression_separator_ad',
                        progressBar: 'Progression_progressBar_7b',
                        progressBar__mediaMediumHeight: 'Progression_progressBar__mediaMediumHeight_07',
                        'add-blur': 'Progression_add-blur_b7',
                        show: 'Progression_show_f7',
                        'default-color': 'Progression_default-color_11',
                    },
                    Mu = ({
                        currentValue: e,
                        maxValue: u,
                        lastValue: t,
                        statusAnimation: r,
                        updateStatusAnimation: n,
                    }) => {
                        const a = f(),
                            o = a.mediaSize === C.Medium && a.remScreenHeight >= 1024;
                        return s().createElement(
                            'div',
                            { className: F()(Ou.base, Ou[`base__${r}`]) },
                            s().createElement(
                                'div',
                                { className: Ou.progression },
                                s().createElement(
                                    'div',
                                    {
                                        className: F()(
                                            Ou.progressionNumerical,
                                            o && Ou.progressionNumerical__mediaMediumHeight,
                                        ),
                                    },
                                    s().createElement(
                                        'span',
                                        { className: F()(Ou.currentValue, Boolean(e) && Ou.currentValue__inProgress) },
                                        e,
                                    ),
                                    s().createElement(
                                        'span',
                                        { className: Ou.separator },
                                        R.strings.common.common.slash(),
                                    ),
                                    s().createElement('span', null, u),
                                ),
                                Boolean(e) &&
                                    s().createElement(
                                        'div',
                                        { className: F()(Ou.progressBar, o && Ou.progressBar__mediaMediumHeight) },
                                        s().createElement(ku, {
                                            size: au.Small,
                                            value: e,
                                            deltaFrom: e - t,
                                            maxValue: u,
                                            onComplete: n,
                                        }),
                                    ),
                            ),
                        );
                    },
                    Iu = {
                        base: 'TaskCondition_base_7b',
                        condition: 'TaskCondition_condition_33',
                        text: 'TaskCondition_text_d5',
                        text__completed: 'TaskCondition_text__completed_ef',
                        'update-condition': 'TaskCondition_update-condition_db',
                        text__completedWasVisited: 'TaskCondition_text__completedWasVisited_d0',
                        'add-blur': 'TaskCondition_add-blur_49',
                        hide: 'TaskCondition_hide_b0',
                        show: 'TaskCondition_show_e6',
                    },
                    Wu = R.strings.battle_royale_progression.progressionView.battleQuests,
                    Hu = (0, $.Pi)(
                        ({
                            conditions: e,
                            setStatusAnimation: u,
                            statusAnimation: t,
                            progression: r,
                            conditionIndex: n,
                        }) => {
                            const o = Ku().model.computes.missionCompletedVisitedStatus,
                                i = (0, a.useCallback)(() => {
                                    u(o(n));
                                }, [n, o, u]),
                                l = Object.assign({}, r, { statusAnimation: t, updateStatusAnimation: i }),
                                c = r.maxValue,
                                d = r.status,
                                m = 0 === c;
                            return (
                                (0, a.useEffect)(() => {
                                    d === Qu ? m && i() : u($u.inProgress);
                                }, [m, u, d, i]),
                                s().createElement(
                                    'div',
                                    { className: Iu.base },
                                    s().createElement(
                                        'div',
                                        { className: Iu.condition },
                                        s().createElement(eu, {
                                            text: `${Wu.$dyn(ru(e))}`,
                                            classMix: F()(Iu.text, Iu[`text__${t}`]),
                                            binding: Object.assign({}, e),
                                        }),
                                        Boolean(c) && s().createElement(Mu, l),
                                    ),
                                )
                            );
                        },
                    ),
                    Uu = {
                        base: 'TaskType_base_66',
                        ellipse: 'TaskType_ellipse_f4',
                        base__completed: 'TaskType_base__completed_46',
                        hide: 'TaskType_hide_9e',
                        base__completedWasVisited: 'TaskType_base__completedWasVisited_8a',
                        typeIcon: 'TaskType_typeIcon_0f',
                        completedIcon: 'TaskType_completedIcon_02',
                        'slide-down': 'TaskType_slide-down_7d',
                        'add-blur': 'TaskType_add-blur_c8',
                        show: 'TaskType_show_de',
                    },
                    zu = ({ taskBattleIcon: e, statusAnimation: u }) =>
                        s().createElement(
                            'div',
                            { className: F()(Uu.base, Uu[`base__${u}`]) },
                            s().createElement('div', { className: Uu.ellipse }),
                            s().createElement('div', {
                                className: Uu.typeIcon,
                                style: { backgroundImage: `url('${R.images.gui.maps.icons.missions.daily.$dyn(e)}')` },
                            }),
                            s().createElement('div', { className: Uu.completedIcon }),
                        );
                function Gu() {
                    return (
                        (Gu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Gu.apply(this, arguments)
                    );
                }
                const $u = {
                        inProgress: 'inProgress',
                        completed: 'completed',
                        completedWasVisited: 'completedWasVisited',
                        allCompletedTasksVisited: 'allCompletedTasksVisited',
                    },
                    Vu = (0, $.Pi)(({ taskConditions: e, awardsBattle: u, taskBattleIcon: t, index: r }) => {
                        const n = (0, a.useState)($u.inProgress),
                            o = n[0],
                            i = n[1],
                            l = f(),
                            c = We(u, ae.Small).parsedRewards;
                        return s().createElement(
                            'div',
                            {
                                className: F()(
                                    Ge.base,
                                    Ge[`base__${o}`],
                                    l.mediaSize === C.Medium && l.remScreenHeight >= 1024 && Ge.base__mediaMediumHeight,
                                ),
                            },
                            s().createElement(
                                'div',
                                { className: Ge.taskType },
                                s().createElement(zu, { taskBattleIcon: t, statusAnimation: o }),
                            ),
                            s().createElement(
                                'div',
                                { className: Ge.conditions },
                                ee(e, ({ conditions: e, progression: u }) =>
                                    s().createElement(Hu, {
                                        key: u.currentValue,
                                        conditionIndex: r,
                                        progression: u,
                                        conditions: e,
                                        setStatusAnimation: i,
                                        statusAnimation: o,
                                    }),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: Ge.awards },
                                s().createElement(
                                    ze,
                                    { statusAnimation: o, type: Ue.Awards },
                                    s().createElement(
                                        'div',
                                        { className: Ge.awardsList },
                                        ee(c, (e) =>
                                            s().createElement(Oe, Gu({ className: Ge.award, key: e.name }, e)),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    });
                let ju;
                !(function (e) {
                    ((e[(e.Scrolling = 0)] = 'Scrolling'),
                        (e[(e.ProgressChange = 1)] = 'ProgressChange'),
                        (e[(e.HighlightCard = 2)] = 'HighlightCard'),
                        (e[(e.ChangeCompleted = 3)] = 'ChangeCompleted'),
                        (e[(e.ProgressFinished = 4)] = 'ProgressFinished'),
                        (e[(e.ProgressAlreadyFinished = 5)] = 'ProgressAlreadyFinished'));
                })(ju || (ju = {}));
                const Qu = 'done',
                    qu = R.strings.battle_royale_progression.progressionView.battleQuests.timer,
                    Yu = K()(
                        ({ observableModel: e }) => {
                            const u = Object.assign(
                                    {},
                                    e.primitives(
                                        ['currentTimerDate', 'showPrimeTime', 'showEventEnded'],
                                        'battleQuests',
                                    ),
                                    {
                                        battleQuests: e.array('battleQuests.tasksBattle'),
                                        missionsCompletedVisited: e.array('battleQuests.missionsCompletedVisited'),
                                        progressLevels: e.array('progressLevels'),
                                    },
                                    e.primitives([
                                        'state',
                                        'curProgressPoints',
                                        'prevProgressPoints',
                                        'pointsForLevel',
                                    ]),
                                    { progressAnimationState: q.LO.box(ju.Scrolling) },
                                ),
                                t = (0, te.Om)(() => Math.floor(u.curProgressPoints.get() / u.pointsForLevel.get())),
                                r = (0, te.Om)(() => Math.floor(u.prevProgressPoints.get() / u.pointsForLevel.get())),
                                n = (0, te.Om)(
                                    (e) => ({
                                        wasProgressionVisited: r() === t(),
                                        isRecentlyCompletedLevel: r() <= e && e <= t(),
                                        isPrevLevel: e <= r(),
                                    }),
                                    { equals: ue },
                                ),
                                a = (0, te.Om)((e) =>
                                    V(
                                        0,
                                        u.pointsForLevel.get(),
                                        u.curProgressPoints.get() - e * u.pointsForLevel.get(),
                                    ),
                                ),
                                s = (0, te.Om)(() =>
                                    ee(u.battleQuests.get(), (e) => {
                                        const u = ((e, u, t) => {
                                            const r = {};
                                            let n = {},
                                                a = '';
                                            return (
                                                tu(e, u).forEach(
                                                    (
                                                        {
                                                            condition: e,
                                                            lastValue: u,
                                                            currentValue: t,
                                                            maxValue: s,
                                                            icon: o,
                                                        },
                                                        i,
                                                    ) => {
                                                        ((r[uu[i]] = ((e, u) =>
                                                            Je(e, Ve.left)
                                                                .flat()
                                                                .map(
                                                                    (e, t) => (
                                                                        0 === t && u > 0 && (e = e.toLowerCase()),
                                                                        e
                                                                    ),
                                                                ))(e, i)),
                                                            (a = o),
                                                            (n = { lastValue: u, currentValue: t, maxValue: s }));
                                                    },
                                                ),
                                                {
                                                    taskConditions: [
                                                        { conditions: r, progression: Object.assign({ status: t }, n) },
                                                    ],
                                                    taskBattleIcon: a,
                                                }
                                            );
                                        })(e.postBattleCondition, e.bonusCondition.items, e.status);
                                        return Object.assign({}, u, { awardsBattle: e.bonuses });
                                    }),
                                ),
                                o = (0, te.Om)(() => 4 >= s().length),
                                i = (0, te.Om)(() => {
                                    let e = 0;
                                    return (
                                        s().forEach((u) => {
                                            u.taskConditions[0].progression.status === Qu && ++e;
                                        }),
                                        e
                                    );
                                }),
                                l = (0, te.Om)(() => {
                                    const e = t(),
                                        r = u.progressLevels.get();
                                    return ee(u.progressLevels.get(), ({ rewards: u }, t) => ({
                                        level: t + 1,
                                        isCompleted: t < e,
                                        isActive: t === e,
                                        isLast: t === r.length - 1,
                                        rewards: u,
                                    }));
                                }),
                                c = (0, te.Om)((e) => {
                                    const t = J(s(), e).taskConditions[0].progression.status,
                                        r = u.missionsCompletedVisited.get()[e].value;
                                    return t !== Qu ? $u.inProgress : r ? $u.completedWasVisited : $u.completed;
                                }),
                                d = (0, te.Om)(() => {
                                    const e = u.pointsForLevel.get() * u.progressLevels.get().length;
                                    return u.curProgressPoints.get() >= e;
                                }),
                                m = (0, te.Om)(() => d() && u.curProgressPoints.get() === u.prevProgressPoints.get()),
                                E = (0, te.Om)(() => {
                                    const e = u.currentTimerDate.get(),
                                        t = u.showPrimeTime.get();
                                    return {
                                        text: t ? qu.eventResetTime.text() : qu.inProgress.text(),
                                        time: e,
                                        showPrimeTime: t,
                                    };
                                });
                            return Object.assign({}, u, {
                                computes: {
                                    levels: l,
                                    battleQuests: s,
                                    currentLevel: t,
                                    levelStatus: n,
                                    currentPointsForLevel: a,
                                    isProgressionCompleted: d,
                                    wasProgressionCompletedBeforeStart: m,
                                    missionCompletedVisitedStatus: c,
                                    areDefaultNumberQuests: o,
                                    numberCompletedQuests: i,
                                    timerContent: E,
                                },
                            });
                        },
                        ({ externalModel: e, model: u }) => {
                            const t = (function (e) {
                                const u = {};
                                for (const t in e)
                                    if (Object.prototype.hasOwnProperty.call(e, t)) {
                                        const r = e[t];
                                        u[t] = (0, q.aD)(r);
                                    }
                                return u;
                            })({
                                finishScrolling: () => u.progressAnimationState.set(ju.ProgressChange),
                                finishProgressionChange: () => u.progressAnimationState.set(ju.HighlightCard),
                                finishHighlightCard: () => u.progressAnimationState.set(ju.ChangeCompleted),
                                completeProgression: (e) =>
                                    u.progressAnimationState.set(e ? ju.ProgressAlreadyFinished : ju.ProgressFinished),
                            });
                            return Object.assign({}, t, {
                                onClose: e.createCallbackNoArgs('onClose'),
                                onAboutClicked: e.createCallbackNoArgs('onAboutClicked'),
                            });
                        },
                    ),
                    Xu = Yu[0],
                    Ku = Yu[1];
                let Zu, Ju;
                (!(function (e) {
                    ((e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none'));
                })(Zu || (Zu = {})),
                    (function (e) {
                        ((e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended'));
                    })(Ju || (Ju = {})));
                var et = t(613);
                (Date.now(), et.Ew.getRegionalDateTime, et.Ew.getFormattedDateTime);
                const ut = () => {};
                let tt;
                (U.Sw.instance,
                    (function (e) {
                        ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                    })(tt || (tt = {})),
                    U.Sw.instance);
                const rt = (e = 0, u, t = 0, r = ut) => {
                        const n = (0, a.useState)(e),
                            s = n[0],
                            o = n[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (e > 0) {
                                    o(e);
                                    const n = Date.now(),
                                        a = setInterval(
                                            () => {
                                                const u = e - Math.floor((Date.now() - n) / 1e3);
                                                null !== t && u <= t ? (o(t), r && r(), clearInterval(a)) : o(u);
                                            },
                                            1e3 * (u || (e > 120 ? 60 : 1)),
                                        );
                                    return () => {
                                        clearInterval(a);
                                    };
                                }
                            }, [e, u, t, r]),
                            s
                        );
                    },
                    nt = (e) => e.toString().padStart(2, '0'),
                    at = R.images.gui.maps.icons.components.countdown,
                    st = (e, u) => {
                        const t = 2 === u ? at.big : at;
                        switch (e) {
                            case Zu.Timer:
                                return t.clock();
                            case Zu.Countdown:
                                return t.hourglass();
                            case Zu.Cooldown:
                                return t.lock();
                        }
                    },
                    ot = (0, a.memo)(
                        ({
                            duration: e,
                            icon: u = Zu.Timer,
                            style: t = Ju.Description,
                            onTimeReached: r,
                            refreshRate: n,
                            className: o = '',
                            classNames: l = {},
                        }) => {
                            const c = null != n ? n : t !== Ju.Description ? 1 : void 0,
                                d = rt(e, c),
                                m = (() => {
                                    const e = (0, a.useState)(i.O.view.getScale()),
                                        u = e[0],
                                        t = e[1];
                                    return (
                                        (0, a.useEffect)(() => {
                                            const e = () => {
                                                t(i.O.view.getScale());
                                            };
                                            return (
                                                window.addEventListener('resize', e),
                                                () => {
                                                    window.removeEventListener('resize', e);
                                                }
                                            );
                                        }, []),
                                        u
                                    );
                                })();
                            r && r[d] && r[d]();
                            const E = ((e, u) => {
                                switch (u) {
                                    case Ju.Description:
                                        return ((e, u = !0) =>
                                            e.days > 7 && u
                                                ? je(R.strings.common.duration.days(), { days: e.days })
                                                : e.days >= 1
                                                  ? 0 === e.hours
                                                      ? je(R.strings.common.duration.days(), { days: e.days })
                                                      : `${je(R.strings.common.duration.days(), { days: e.days })} ${je(R.strings.common.duration.hours(), { hours: e.hours })}`
                                                  : e.hours >= 1
                                                    ? 0 === e.minutes
                                                        ? je(R.strings.common.duration.hours(), { hours: e.hours })
                                                        : `${je(R.strings.common.duration.hours(), { hours: e.hours })} ${je(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                                    : je(R.strings.common.duration.minutes(), {
                                                          minutes: e.minutes || 1,
                                                      }))(e);
                                    case Ju.Short:
                                        return `${nt(e.minutes)}:${nt(e.seconds)}`;
                                    case Ju.Long:
                                        return `${nt(e.hours)}:${nt(e.minutes)}:${nt(e.seconds)}`;
                                    case Ju.Extended:
                                        return `${je(R.strings.common.duration.days(), { days: e.days })} | ${nt(e.hours)}:${nt(e.minutes)}:${nt(e.seconds)}`;
                                }
                            })(
                                (function (e = 0) {
                                    let u = e;
                                    const t = Math.trunc(u / 86400);
                                    u -= 86400 * t;
                                    const r = Math.trunc(u / 3600);
                                    u -= 3600 * r;
                                    const n = Math.trunc(u / 60);
                                    return ((u -= 60 * n), { days: t, hours: r, minutes: n, seconds: u });
                                })(d),
                                t,
                            );
                            return s().createElement(
                                'div',
                                { className: F()('Countdown_base_fe', o) },
                                u !== Zu.None &&
                                    s().createElement('div', {
                                        className: F()('Countdown_icon_8b', l.icon),
                                        style: { backgroundImage: `url('${st(u, m)}')` },
                                    }),
                                s().createElement('div', { className: F()('Countdown_description_8d', l.text) }, E),
                            );
                        },
                    ),
                    it = {
                        base: 'Timer_base_3a',
                        timer: 'Timer_timer_3a',
                        block: 'Timer_block_d4',
                        base__small: 'Timer_base__small_d3',
                        base__big: 'Timer_base__big_68',
                        redGlow: 'Timer_redGlow_89',
                        text: 'Timer_text_29',
                        base__primeTime: 'Timer_base__primeTime_76',
                        bgCountdown: 'Timer_bgCountdown_72',
                        description: 'Timer_description_90',
                        countdown: 'Timer_countdown_b2',
                        'add-blur': 'Timer_add-blur_d6',
                        hide: 'Timer_hide_34',
                        show: 'Timer_show_ac',
                    };
                let lt;
                !(function (e) {
                    ((e.Big = 'big'), (e.Small = 'small'));
                })(lt || (lt = {}));
                const ct = (0, $.Pi)(({ size: e }) => {
                        const u = Ku().model.computes.timerContent(),
                            t = u.text,
                            r = u.time,
                            n = u.showPrimeTime,
                            a = e === lt.Big;
                        return s().createElement(
                            'div',
                            { className: F()(it.base, it[`base__${e}`], n && it.base__primeTime) },
                            s().createElement(
                                'div',
                                { className: it.timer },
                                s().createElement(
                                    ze,
                                    { type: a ? Ue.CompletedBattleQuests : Ue.InProgressBattleQuests },
                                    s().createElement(
                                        'div',
                                        { className: it.block },
                                        n && s().createElement('div', { className: it.redGlow }),
                                        s().createElement('div', { className: it.text }, t),
                                        s().createElement(
                                            'div',
                                            { className: it.countdown },
                                            s().createElement('div', { className: it.bgCountdown }),
                                            s().createElement(ot, {
                                                duration: r,
                                                style: a ? Ju.Long : Ju.Description,
                                                classNames: { text: it.description },
                                                className: it.countdown,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    dt = 'TimerWithQuestsTotal_text_c3',
                    mt = 'TimerWithQuestsTotal_ellipse_f1',
                    Et = R.strings.battle_royale_progression.progressionView.battleQuests,
                    _t = (0, $.Pi)(({ questsNumber: e }) => {
                        const u = Ku().model,
                            t = f(),
                            r = u.computes.timerContent(),
                            n = r.text,
                            a = r.time,
                            o = r.showPrimeTime;
                        return s().createElement(
                            'div',
                            {
                                className: F()(
                                    'TimerWithQuestsTotal_base_cc',
                                    o && 'TimerWithQuestsTotal_base__primeTime_bb',
                                ),
                            },
                            s().createElement(
                                'div',
                                { className: 'TimerWithQuestsTotal_body_ba' },
                                s().createElement(
                                    'div',
                                    { className: 'TimerWithQuestsTotal_timerBlock_a3' },
                                    o && s().createElement('div', { className: 'TimerWithQuestsTotal_redGlow_a0' }),
                                    s().createElement('div', { className: dt }, n),
                                    s().createElement(ot, {
                                        duration: a,
                                        style: Ju.Description,
                                        classNames: { text: 'TimerWithQuestsTotal_description_60' },
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    {
                                        className: F()(
                                            'TimerWithQuestsTotal_separatorBlock_51',
                                            t.remScreenWidth >= 1280 && 'TimerWithQuestsTotal_separatorBlock__show_2b',
                                        ),
                                    },
                                    s().createElement('div', {
                                        className: F()(mt, 'TimerWithQuestsTotal_ellipse__left_cb'),
                                    }),
                                    s().createElement('div', { className: 'TimerWithQuestsTotal_separator_62' }),
                                    s().createElement('div', {
                                        className: F()(mt, 'TimerWithQuestsTotal_ellipse__right_9d'),
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'TimerWithQuestsTotal_totalQuests_a2' },
                                    s().createElement('div', { className: dt }, Et.questsTotal.text()),
                                    s().createElement(
                                        'div',
                                        { className: 'TimerWithQuestsTotal_totalBlock_8d' },
                                        s().createElement(
                                            'span',
                                            { className: 'TimerWithQuestsTotal_currentCount_97' },
                                            u.computes.numberCompletedQuests(),
                                        ),
                                        s().createElement(
                                            'span',
                                            { className: 'TimerWithQuestsTotal_slash_18' },
                                            R.strings.common.common.slash(),
                                        ),
                                        s().createElement('span', { className: 'TimerWithQuestsTotal_total_91' }, e),
                                    ),
                                ),
                            ),
                        );
                    }),
                    At = (e) => {
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
                    };
                function gt(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const Ft = {
                        base: 'ScrollArea_base_e8',
                        body: 'ScrollArea_body_bc',
                        block: 'ScrollArea_block_4b',
                        content: 'ScrollArea_content_9e',
                        content__scroll: 'ScrollArea_content__scroll_77',
                        button: 'ScrollArea_button_e1',
                        button__active: 'ScrollArea_button__active_62',
                        button__hidden: 'ScrollArea_button__hidden_2a',
                        button__forward: 'ScrollArea_button__forward_16',
                        button__back: 'ScrollArea_button__back_bf',
                        buttonBack: 'ScrollArea_buttonBack_15',
                        buttonForward: 'ScrollArea_buttonForward_ff',
                        button__locked: 'ScrollArea_button__locked_f0',
                    },
                    pt = (e, u) => (u ? 'hidden' : e ? 'active' : 'locked'),
                    Dt = ({ children: e, areDefaultNumberQuests: u }) => {
                        const t = (0, a.useState)(0),
                            r = t[0],
                            n = t[1],
                            o = (0, a.useState)(0),
                            i = o[0],
                            l = o[1],
                            c = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            m = f(),
                            E = ((e, u, t) => !(!u || !t) && e === u.scrollWidth - t.offsetWidth)(
                                r,
                                c.current,
                                d.current,
                            ),
                            _ = (e) => {
                                e || gt('highlight');
                            };
                        return (
                            (0, a.useEffect)(
                                () =>
                                    At(() => {
                                        const e = c.current,
                                            u = d.current;
                                        if (e && u && e.scrollWidth > u.offsetWidth) {
                                            const u = e.children,
                                                t = u[0],
                                                r = u[1].getBoundingClientRect().left - t.getBoundingClientRect().left;
                                            (l(r), n(0));
                                        } else (l(0), n(0));
                                    }),
                                [m.remScreenWidth, u],
                            ),
                            s().createElement(
                                'div',
                                { className: Ft.base },
                                s().createElement(
                                    'div',
                                    { className: Ft.body },
                                    s().createElement(
                                        'div',
                                        {
                                            onMouseEnter: () => _(!r),
                                            onClick: () => {
                                                r && (gt('play'), n((e) => e - i));
                                            },
                                            className: F()(Ft.button, Ft[`button__${pt(r, u)}`], Ft.button__back),
                                        },
                                        s().createElement('div', { className: Ft.buttonBack }),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: Ft.block, ref: d },
                                        s().createElement(
                                            'div',
                                            {
                                                ref: c,
                                                className: F()(Ft.content, !u && Ft.content__scroll),
                                                style: { transform: `translateX(-${r}px)` },
                                            },
                                            e,
                                        ),
                                    ),
                                    s().createElement(
                                        'div',
                                        {
                                            onMouseEnter: () => _(E),
                                            onClick: () => {
                                                E || (gt('play'), n((e) => e + i));
                                            },
                                            className: F()(Ft.button, Ft[`button__${pt(!E, u)}`], Ft.button__forward),
                                        },
                                        s().createElement('div', { className: Ft.buttonForward }),
                                    ),
                                ),
                            )
                        );
                    };
                function Ct() {
                    return (
                        (Ct =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ct.apply(this, arguments)
                    );
                }
                const Bt = (0, $.Pi)(() => {
                        const e = Ku().model,
                            u = e.computes.battleQuests,
                            t = e.computes.areDefaultNumberQuests();
                        return s().createElement(
                            'div',
                            {
                                className: F()(
                                    'TaskBattleList_base_72',
                                    e.showEventEnded.get() && 'TaskBattleList_base__endEvent_4b',
                                ),
                            },
                            t
                                ? s().createElement(
                                      'div',
                                      { className: 'TaskBattleList_timer_bc' },
                                      s().createElement(ct, { size: lt.Small }),
                                  )
                                : s().createElement(
                                      'div',
                                      { className: 'TaskBattleList_timerWithQuestsTotal_60' },
                                      s().createElement(_t, { questsNumber: u().length }),
                                  ),
                            s().createElement(
                                'div',
                                { className: 'TaskBattleList_taskList_16' },
                                s().createElement(
                                    Dt,
                                    { areDefaultNumberQuests: t },
                                    ee(u(), (e, u) => s().createElement(Vu, Ct({ key: u }, e, { index: u }))),
                                ),
                            ),
                        );
                    }),
                    ht = (0, $.Pi)(() => {
                        const e = Ku().model,
                            u = f();
                        return s().createElement(
                            'div',
                            {
                                className: F()(
                                    'BattleQuests_base_f5',
                                    u.mediaSize === C.Large && 'BattleQuests_base__mediaLarge_6e',
                                    u.mediaSize === C.Medium &&
                                        u.remScreenHeight >= 1024 &&
                                        'BattleQuests_base__mediumHeight_26',
                                    u.remScreenWidth >= 1280 && 'BattleQuests_base__specifySize_3e',
                                ),
                            },
                            s().createElement(
                                'div',
                                {
                                    className: F()(
                                        'BattleQuests_body_32',
                                        !e.computes.areDefaultNumberQuests() && 'BattleQuests_body__hideContent_a4',
                                    ),
                                },
                                s().createElement(Bt, null),
                            ),
                        );
                    }),
                    ft = 'Header_header_ba',
                    bt = 'Header_title_15',
                    vt = 'Header_subTitle_fa',
                    wt = () =>
                        s().createElement(
                            Ae,
                            { contentId: R.views.battle_royale.lobby.tooltips.LeaderboardRewardTooltipView('resId') },
                            s().createElement('div', { className: 'Infotip_infotip_af' }),
                        ),
                    Tt = R.strings.battle_royale_progression.progressionView,
                    St = (0, $.Pi)(() => {
                        const e = Ku().model,
                            u = e.progressAnimationState.get(),
                            t = e.showEventEnded.get() ? Tt.subTitle.endEvent() : Tt.subTitle.inProgress(),
                            r = u >= ju.ProgressFinished,
                            n = u === ju.ProgressAlreadyFinished && 'Header_header__fast_5d';
                        return s().createElement(
                            'div',
                            { className: 'Header_base_6c' },
                            s().createElement(
                                'div',
                                {
                                    className: F()(
                                        ft,
                                        n,
                                        'Header_header__inProgress_2f',
                                        r && 'Header_header__hide_29',
                                    ),
                                },
                                s().createElement('div', { className: bt }, Tt.title.inProgress()),
                                s().createElement(
                                    'div',
                                    { className: 'Header_subtitleContainer_73' },
                                    s().createElement(eu, {
                                        text: t,
                                        classMix: vt,
                                        binding: { infotip: s().createElement(wt, null) },
                                    }),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: F()(ft, n, 'Header_header__completed_d9', r && 'Header_header__show_c0') },
                                s().createElement('div', { className: bt }, Tt.title.completed()),
                                s().createElement('div', { className: vt }, Tt.subTitle.completed()),
                            ),
                        );
                    });
                function yt(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const Pt = [];
                function Rt(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), Pt)
                    );
                }
                var xt = t(30);
                let Lt;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Lt || (Lt = {}));
                const Nt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    kt = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        forceTriggerMouseMove: s,
                    }) => {
                        const o = (e, t) => {
                            const r = u(e),
                                n = r[0],
                                a = r[1];
                            return a <= n ? 0 : V(n, a, t);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? Nt : l,
                                d = (0, a.useRef)(null),
                                m = (0, a.useRef)(null),
                                E = (0, a.useRef)(!1),
                                _ = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        r = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        n = (e, ...t) => {
                                            for (
                                                var r,
                                                    n = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return yt(e, u);
                                                                    var t = Object.prototype.toString
                                                                        .call(e)
                                                                        .slice(8, -1);
                                                                    return (
                                                                        'Object' === t &&
                                                                            e.constructor &&
                                                                            (t = e.constructor.name),
                                                                        'Map' === t || 'Set' === t
                                                                            ? Array.from(e)
                                                                            : 'Arguments' === t ||
                                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                    t,
                                                                                )
                                                                              ? yt(e, u)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (u && e && 'number' == typeof e.length)
                                                        ) {
                                                            t && (e = t);
                                                            var r = 0;
                                                            return function () {
                                                                return r >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[r++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(u(e).values());
                                                !(r = n()).done;

                                            )
                                                (0, r.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: r, trigger: n }), []);
                                })(),
                                A = (function (e, u, t) {
                                    const r = (0, a.useMemo)(
                                        () =>
                                            (function (e, u, t, r) {
                                                let n,
                                                    a = !1,
                                                    s = 0;
                                                function o() {
                                                    n && clearTimeout(n);
                                                }
                                                function i(...i) {
                                                    const l = this,
                                                        c = Date.now() - s;
                                                    function d() {
                                                        ((s = Date.now()), t.apply(l, i));
                                                    }
                                                    a ||
                                                        (r && !n && d(),
                                                        o(),
                                                        void 0 === r && c > e
                                                            ? d()
                                                            : !0 !== u &&
                                                              (n = setTimeout(
                                                                  r
                                                                      ? function () {
                                                                            n = void 0;
                                                                        }
                                                                      : d,
                                                                  void 0 === r ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((r = t), (t = u), (u = void 0)),
                                                    (i.cancel = function () {
                                                        (o(), (a = !0));
                                                    }),
                                                    i
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return ((0, a.useEffect)(() => r.cancel, [r]), r);
                                })(
                                    () => {
                                        s && s();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, xt.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), _.trigger('change', e), s && E.current && A());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                F = g[0],
                                p = g[1],
                                D = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const n = F.scrollPosition.get(),
                                            a = (null != (r = F.scrollPosition.goal) ? r : 0) - n;
                                        return o(e, u * t + a + n);
                                    },
                                    [F.scrollPosition],
                                ),
                                C = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = d.current;
                                        r &&
                                            p.start({
                                                scrollPosition: o(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(r, F.scrollPosition.get()) },
                                            });
                                    },
                                    [p, c.animationConfig, F.scrollPosition],
                                ),
                                B = (0, a.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = m.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            a = D(u, e, r);
                                        C(a);
                                    },
                                    [C, D, c.step],
                                ),
                                h = (0, a.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && B(r(e)),
                                            d.current && _.trigger('mouseWheel', e, F.scrollPosition, u(d.current)));
                                    },
                                    [F.scrollPosition, B, _],
                                ),
                                f = ((e, u = []) => {
                                    const t = (0, a.useRef)(),
                                        r = (0, a.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        At(() => {
                                            const e = d.current;
                                            e &&
                                                (C(o(e, F.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [C, F.scrollPosition.goal],
                                ),
                                b = Rt(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = o(e, F.scrollPosition.goal);
                                    (u !== F.scrollPosition.goal && C(u, { immediate: !0 }),
                                        _.trigger('recalculateContent'));
                                });
                            return (
                                (0, a.useEffect)(
                                    () => (
                                        window.addEventListener('resize', f),
                                        () => {
                                            window.removeEventListener('resize', f);
                                        }
                                    ),
                                    [f],
                                ),
                                (0, a.useEffect)(() => {
                                    const e = d.current;
                                    if (!e || !s) return;
                                    const u = () => {
                                            E.current = !0;
                                        },
                                        t = () => {
                                            E.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', u),
                                        e.addEventListener('mouseleave', t),
                                        () => {
                                            (e.removeEventListener('mouseenter', u),
                                                e.removeEventListener('mouseleave', t));
                                        }
                                    );
                                }, [d]),
                                (0, a.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (m.current ? n(m.current) : void 0),
                                        getContainerSize: () => (d.current ? e(d.current) : void 0),
                                        getBounds: () =>
                                            d.current
                                                ? u(d.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: c.step.clampedArrowStepTimeout,
                                        clampPosition: o,
                                        handleMouseWheel: h,
                                        applyScroll: C,
                                        applyStepTo: B,
                                        contentRef: d,
                                        wrapperRef: m,
                                        scrollPosition: p,
                                        animationScroll: F,
                                        recalculateContent: b,
                                        events: { on: _.on, off: _.off },
                                    }),
                                    [F.scrollPosition, C, B, _.off, _.on, b, h, p, c.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    Ot = kt({
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
                        getDirection: (e) => (e.deltaY > 1 ? Lt.Next : Lt.Prev),
                        forceTriggerMouseMove: i.O.view.forceTriggerMouseMove,
                    });
                function Mt(e, u, t = []) {
                    const r = (0, a.useRef)(0),
                        n = (0, a.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, a.useEffect)(() => n, [n]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            ((r.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, s),
                        n,
                    ];
                }
                const It = 'HorizontalBar_base__active_5e',
                    Wt = 'disable',
                    Ht = { pending: !1, offset: 0 },
                    Ut = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    zt = () => {},
                    Gt = (e, u) => Math.max(20, e.offsetWidth * u),
                    $t = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Ut, onDrag: r = zt }) => {
                        const n = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            m = e.stepTimeout || 100,
                            E = (0, a.useState)(Ht),
                            _ = E[0],
                            A = E[1],
                            g = (0, a.useCallback)(
                                (e) => {
                                    (A(e),
                                        d.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [r],
                            ),
                            p = () => {
                                const u = c.current,
                                    t = d.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / n),
                                    i = V(0, 1, a / (n - r)),
                                    m = (u.offsetWidth - Gt(u, s)) * i;
                                ((t.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (o.current && l.current && c.current && d.current) {
                                            if (0 === e)
                                                return (
                                                    o.current.classList.add(Wt),
                                                    void l.current.classList.remove(Wt)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(Wt),
                                                    void l.current.classList.add(Wt)
                                                );
                                            var u, t;
                                            (o.current.classList.remove(Wt), l.current.classList.remove(Wt));
                                        }
                                    })(m));
                            },
                            D = Rt(() => {
                                ((() => {
                                    const u = d.current,
                                        t = c.current,
                                        r = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && r && t)) return;
                                    const s = Math.min(1, r / a);
                                    ((u.style.width = `${Gt(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 !== s ? n.current.classList.add(It) : n.current.classList.remove(It)));
                                })(),
                                    p());
                            });
                        ((0, a.useEffect)(() => At(D)),
                            (0, a.useEffect)(
                                () =>
                                    At(() => {
                                        const u = () => {
                                            p();
                                        };
                                        let t = zt;
                                        const r = () => {
                                            (t(), (t = At(D)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', D),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', D),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', r));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!_.pending) return;
                                const u = i.O.client.events.mouse.move(([u, t]) => {
                                        var n;
                                        const a = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!a || !s) return;
                                        const o = c.current,
                                            i = d.current;
                                        if (!o || !i) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - _.offset - o.getBoundingClientRect().x,
                                            m = (l / o.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, m),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: m }));
                                    }),
                                    t = i.O.client.events.mouse.up(() => {
                                        (u(), g(Ht));
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, _.offset, _.pending, r, g]));
                        const C = Mt((u) => e.applyStepTo(u), m, [e]),
                            B = C[0],
                            h = C[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const f = (e) => {
                            e.target.classList.contains(Wt) || gt('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: F()('HorizontalBar_base_49', u.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: F()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Wt) || 0 !== e.button || (gt('play'), B(Lt.Next));
                                },
                                onMouseUp: h,
                                ref: o,
                                onMouseEnter: f,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: F()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const r = d.current;
                                        r &&
                                            0 === u.button &&
                                            (gt('play'),
                                            u.target === r
                                                ? g({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const r = d.current,
                                                          n = e.contentRef.current;
                                                      if (!r || !n) return;
                                                      const a = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                  })(u.screenX > r.getBoundingClientRect().x ? Lt.Prev : Lt.Next));
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                s().createElement('div', { ref: d, className: F()('HorizontalBar_thumb_fd', u.thumb) }),
                                s().createElement('div', { className: F()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: F()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Wt) || 0 !== e.button || (gt('play'), B(Lt.Prev));
                                },
                                onMouseUp: h,
                                ref: l,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    Vt = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    jt = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: F()(Vt.base, e.base) });
                            }, [r]),
                            m = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: F()(Vt.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: F()(Vt.defaultScrollArea, n) },
                                s().createElement(Qt, { className: i, api: m, classNames: o }, e),
                            ),
                            s().createElement($t, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    Qt = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => At(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: F()(Vt.base, u) },
                            s().createElement(
                                'div',
                                {
                                    className: F()(Vt.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: F()(Vt.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                ((Qt.Bar = $t), (Qt.Default = jt));
                const qt = kt({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Lt.Next : Lt.Prev),
                    }),
                    Yt = 'VerticalBar_base__active_72',
                    Xt = 'disable',
                    Kt = () => {},
                    Zt = { pending: !1, offset: 0 },
                    Jt = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    er = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    ur = (e, u) => Math.max(20, e.offsetHeight * u),
                    tr = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Jt, onDrag: r = Kt }) => {
                        const n = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            m = e.stepTimeout || 100,
                            E = (0, a.useState)(Zt),
                            _ = E[0],
                            A = E[1],
                            g = (0, a.useCallback)(
                                (e) => {
                                    (A(e),
                                        d.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [r],
                            ),
                            p = Rt(() => {
                                const u = d.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && a && u && t)) return;
                                const s = Math.min(1, r / a);
                                return (
                                    (u.style.height = `${ur(t, s)}px`),
                                    (u.style.display = 'flex'),
                                    n.current &&
                                        (1 !== s ? n.current.classList.add(Yt) : n.current.classList.remove(Yt)),
                                    s
                                );
                            }),
                            D = Rt(() => {
                                const u = c.current,
                                    t = d.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / n),
                                    i = V(0, 1, a / (n - r)),
                                    m = (u.offsetHeight - ur(u, s)) * i;
                                ((t.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (o.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    o.current.classList.add(Xt),
                                                    void l.current.classList.remove(Xt)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(Xt),
                                                    void l.current.classList.add(Xt)
                                                );
                                            var u, t;
                                            (o.current.classList.remove(Xt), l.current.classList.remove(Xt));
                                        }
                                    })(m));
                            }),
                            C = Rt(() => {
                                er(e, () => {
                                    (p(), D());
                                });
                            });
                        ((0, a.useEffect)(() => At(C)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    er(e, () => {
                                        D();
                                    });
                                };
                                let t = Kt;
                                const r = () => {
                                    (t(), (t = At(C)));
                                };
                                return (
                                    e.events.on('recalculateContent', C),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', C),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', r));
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!_.pending) return;
                                const u = i.O.client.events.mouse.up(() => {
                                        g(Zt);
                                    }),
                                    t = i.O.client.events.mouse.move(([u]) => {
                                        er(e, (t) => {
                                            const n = c.current,
                                                a = d.current,
                                                s = e.getContainerSize();
                                            if (!n || !a || !s) return;
                                            const o = u.screenY - _.offset - n.getBoundingClientRect().y,
                                                i = (o / n.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: i }));
                                        });
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, _.offset, _.pending, r, g]));
                        const B = Mt((u) => e.applyStepTo(u), m, [e]),
                            h = B[0],
                            f = B[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const b = (e) => {
                            e.target.classList.contains(Xt) || gt('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: F()('VerticalBar_base_f3', u.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: F()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Xt) || 0 !== e.button || (gt('play'), h(Lt.Next));
                                },
                                ref: o,
                                onMouseEnter: b,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: F()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const r = d.current;
                                        var n;
                                        r &&
                                            0 === u.button &&
                                            (gt('play'),
                                            u.target === r
                                                ? g({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y })
                                                : ((n = u.screenY > r.getBoundingClientRect().y ? Lt.Prev : Lt.Next),
                                                  d.current &&
                                                      er(e, (u) => {
                                                          if (!u) return;
                                                          const r = t(e),
                                                              a = e.clampPosition(u, u.scrollTop + r * n);
                                                          e.applyScroll(a);
                                                      })));
                                    },
                                    ref: c,
                                    onMouseEnter: b,
                                },
                                s().createElement('div', { ref: d, className: F()('VerticalBar_thumb_32', u.thumb) }),
                                s().createElement('div', { className: F()('VerticalBar_rail_43', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: F()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Xt) || 0 !== e.button || (gt('play'), h(Lt.Prev));
                                },
                                onMouseUp: f,
                                ref: l,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    rr = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    nr = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: o,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: F()(rr.base, e.base) });
                            }, [r]),
                            m = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: F()(rr.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: F()(rr.area, n) },
                                s().createElement(ar, { className: o, classNames: i, api: m }, e),
                            ),
                            s().createElement(tr, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    ar = ({ className: e, classNames: u, children: t, api: r }) => (
                        (0, a.useEffect)(() => At(r.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: F()(rr.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: F()(rr.content, null == u ? void 0 : u.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                ar.Default = nr;
                const sr = { Vertical: n, Horizontal: r };
                ('undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector),
                    'undefined' != typeof document && document.documentElement.style,
                    'undefined' != typeof window &&
                        ('ontouchstart' in window || (window.DocumentTouch && (document, window.DocumentTouch))),
                    'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent));
                const or = ({ level: e, isActive: u, isCompleted: t }) => {
                        const r = F()(
                            'LevelLabel_level_b3',
                            t && 'LevelLabel_level__completed_81',
                            u && 'LevelLabel_level__active_ae',
                        );
                        return s().createElement(
                            'div',
                            { className: 'LevelLabel_base_8b' },
                            s().createElement('div', {
                                className: F()('LevelLabel_activeGlow_28', u && 'LevelLabel_activeGlow__completed_95'),
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: F()(
                                        'LevelLabel_levelCurrent_9d',
                                        u && 'LevelLabel_levelCurrent__completed_81',
                                    ),
                                },
                                e,
                            ),
                            s().createElement('div', { className: r }, e),
                        );
                    },
                    ir = {
                        base: 'LevelCard_base_f6',
                        bgCompleted: 'LevelCard_bgCompleted_83',
                        bgCompleted__completed: 'LevelCard_bgCompleted__completed_91',
                        bgCompleted__fast: 'LevelCard_bgCompleted__fast_47',
                        completedIconContainer: 'LevelCard_completedIconContainer_2d',
                        completedIconContainer__completed: 'LevelCard_completedIconContainer__completed_03',
                        completedIconContainer__prevLevel: 'LevelCard_completedIconContainer__prevLevel_14',
                        completedIcon: 'LevelCard_completedIcon_c3',
                        completedIconGlow: 'LevelCard_completedIconGlow_01',
                        border: 'LevelCard_border_ec',
                        border__right: 'LevelCard_border__right_89',
                    },
                    lr = (e, u, t) => (e ? 'completed' : u ? 'inProgress' : t),
                    cr = (0, $.Pi)(({ level: e, isActive: u, isCompleted: t, isLast: r }) => {
                        const n = (0, a.useState)(),
                            o = n[0],
                            i = n[1],
                            l = Ku().model,
                            c = (0, a.useRef)(null),
                            d = l.computes.levelStatus(e),
                            m = d.wasProgressionVisited,
                            E = d.isRecentlyCompletedLevel,
                            _ = d.isPrevLevel;
                        (0, a.useEffect)(() => {
                            t && !m && E && i('prevLevel');
                        }, [t, m, E]);
                        const A = (0, a.useCallback)(() => {
                            gt('pr_progress_tick');
                        }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = c.current;
                                return At(() => {
                                    if (e)
                                        return (
                                            e.addEventListener('transitionstart', A),
                                            () => {
                                                e.removeEventListener('transitionstart', A);
                                            }
                                        );
                                });
                            }, [c, A]),
                            s().createElement(
                                'div',
                                { className: ir.base },
                                s().createElement('div', {
                                    className: F()(ir.bgCompleted, (u || t) && ir.bgCompleted__completed),
                                    ref: c,
                                }),
                                s().createElement(
                                    'div',
                                    {
                                        className: F()(
                                            ir.completedIconContainer,
                                            ir[`completedIconContainer__${lr(_, !t, o)}`],
                                        ),
                                    },
                                    s().createElement('div', { className: ir.completedIconGlow }),
                                    s().createElement('div', { className: ir.completedIcon }),
                                ),
                                s().createElement(or, { level: e, isCompleted: t, isActive: u }),
                                s().createElement('div', { className: ir.border }),
                                r && s().createElement('div', { className: F()(ir.border, ir.border__right) }),
                            )
                        );
                    });
                function dr() {
                    return (
                        (dr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        dr.apply(this, arguments)
                    );
                }
                const mr = (0, $.Pi)(
                    ({ levelRef: e }) => {
                        const u = Ku().model;
                        return s().createElement(
                            'div',
                            { className: 'LevelCards_base_70', ref: e },
                            ee(u.computes.levels(), (e) => s().createElement(cr, dr({ key: e.level }, e))),
                        );
                    },
                    { forwardRef: !0 },
                );
                function Er() {
                    return (
                        (Er =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Er.apply(this, arguments)
                    );
                }
                function _r(e) {
                    if (e === re.BrCoin || e === re.EquipCoin) return { info: 'Rewards_info_a6' };
                }
                const Ar = (0, $.Pi)(({ isCompleted: e, isActive: u, rewards: t }) => {
                        const r = We(t),
                            n = r.parsedRewards,
                            a = r.imageSize,
                            o = F()(
                                'Rewards_base_10',
                                a === ae.Small && n.length > 2 && 'Rewards_base__wide_52',
                                e && !u && 'Rewards_base__completed_4f',
                            );
                        return s().createElement(
                            'div',
                            { className: o },
                            ee(n, (e, u) =>
                                s().createElement(
                                    Oe,
                                    Er({}, e, {
                                        key: `${e.name}_${u}`,
                                        className: 'Rewards_reward_dc',
                                        classNames: _r(e.name),
                                    }),
                                ),
                            ),
                        );
                    }),
                    gr = {
                        blackReal: 'FormatTextWithColorTags_blackReal_3c',
                        whiteReal: 'FormatTextWithColorTags_whiteReal_8a',
                        white: 'FormatTextWithColorTags_white_16',
                        whiteOrange: 'FormatTextWithColorTags_whiteOrange_18',
                        whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_10',
                        par: 'FormatTextWithColorTags_par_ca',
                        parSecondary: 'FormatTextWithColorTags_parSecondary_8d',
                        parTertiary: 'FormatTextWithColorTags_parTertiary_a3',
                        red: 'FormatTextWithColorTags_red_60',
                        redDark: 'FormatTextWithColorTags_redDark_03',
                        yellow: 'FormatTextWithColorTags_yellow_ad',
                        orange: 'FormatTextWithColorTags_orange_e4',
                        cream: 'FormatTextWithColorTags_cream_cd',
                        brown: 'FormatTextWithColorTags_brown_c8',
                        greenBright: 'FormatTextWithColorTags_greenBright_f0',
                        green: 'FormatTextWithColorTags_green_c5',
                        greenDark: 'FormatTextWithColorTags_greenDark_af',
                        blueBooster: 'FormatTextWithColorTags_blueBooster_ac',
                        blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_6f',
                        cred: 'FormatTextWithColorTags_cred_4e',
                        gold: 'FormatTextWithColorTags_gold_90',
                        bond: 'FormatTextWithColorTags_bond_71',
                        prom: 'FormatTextWithColorTags_prom_dd',
                        parNoWidth: 'FormatTextWithColorTags_parNoWidth_5a',
                    },
                    Fr = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    pr = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Dr = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Cr = (0, a.memo)(({ text: e, binding: u, classMix: t }) => {
                        const r = (0, a.useCallback)((e) => ({ color: `#${e}` }), []),
                            n = (0, a.useMemo)(() => u || {}, [u]);
                        let o = Fr.exec(e),
                            i = e,
                            l = 0;
                        for (; o; ) {
                            const t = o[0],
                                a = pr.exec(t),
                                c = Dr.exec(t),
                                d = o[1];
                            if (a && c) {
                                const e = a[0],
                                    o = e + l++ + e;
                                ((i = i.replace(t, `%(${o})`)),
                                    (n[o] = gr[e]
                                        ? s().createElement(
                                              'span',
                                              { className: gr[e] },
                                              s().createElement(eu, { text: d, binding: u }),
                                          )
                                        : s().createElement(
                                              'span',
                                              { style: r(e) },
                                              s().createElement(eu, { text: d, binding: u }),
                                          )));
                            }
                            o = Fr.exec(e);
                        }
                        return s().createElement(eu, { text: i, classMix: t, binding: n });
                    }),
                    Br = 'RewardCard_pointsBorder_c9',
                    hr = 'RewardCard_border_41',
                    fr = (0, $.Pi)(
                        ({
                            pointsMin: e,
                            pointsForCard: u,
                            pointsCurrent: t,
                            isCompleted: r,
                            isActive: n,
                            isLast: a,
                            rewards: o,
                        }) => {
                            const i = f(),
                                l = F()(
                                    'RewardCard_base_90',
                                    i.mediaSize === C.Medium && 'RewardCard_base__mediaMedium_5e',
                                    i.mediaSize === C.Large && 'RewardCard_base__mediaLarge_d7',
                                    i.remScreenHeight >= 1200 && 'RewardCard_base__mediaExtraExtraLarge_54',
                                ),
                                c = F()('RewardCard_activeBlock_f0', n && 'RewardCard_activeBlock__completed_0e'),
                                d = F()(
                                    'RewardCard_bgCompleted_0c',
                                    (n || r) && 'RewardCard_bgCompleted__completed_02',
                                );
                            return s().createElement(
                                'div',
                                { className: l },
                                s().createElement(
                                    'div',
                                    { className: c },
                                    s().createElement(
                                        'div',
                                        { className: 'RewardCard_pointsContainer_9e' },
                                        s().createElement(Cr, {
                                            classMix: 'RewardCard_points_bc',
                                            text: R.strings.battle_royale_progression.progressionView.card.points(),
                                            binding: { current: t, total: u },
                                        }),
                                        s().createElement('div', { className: 'RewardCard_token_e8' }),
                                    ),
                                ),
                                s().createElement('div', { className: d }),
                                s().createElement(Ar, { rewards: o, isActive: n, isCompleted: r }),
                                s().createElement('div', { className: hr }),
                                s().createElement('div', { className: Br }, e),
                                a && s().createElement('div', { className: F()(hr, 'RewardCard_border__right_25') }),
                                a &&
                                    s().createElement(
                                        'div',
                                        { className: F()(Br, 'RewardCard_pointsBorder__right_ad') },
                                        e + u,
                                    ),
                            );
                        },
                    ),
                    br = (0, $.Pi)(() => {
                        const e = Ku().model;
                        return s().createElement(
                            'div',
                            { className: 'RewardCards_base_bc' },
                            ee(
                                e.computes.levels(),
                                ({ level: u, isCompleted: t, isActive: r, isLast: n, rewards: a }, o) =>
                                    s().createElement(fr, {
                                        key: o,
                                        pointsMin: o * e.pointsForLevel.get(),
                                        pointsForCard: e.pointsForLevel.get(),
                                        pointsCurrent: e.computes.currentPointsForLevel(u - 1),
                                        isCompleted: t,
                                        isActive: r,
                                        isLast: n,
                                        rewards: a,
                                    }),
                            ),
                        );
                    }),
                    vr = ['api', 'value', 'maxValue', 'theme', 'className'];
                function wr() {
                    return (
                        (wr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        wr.apply(this, arguments)
                    );
                }
                const Tr = (e, u) => ('number' == typeof u ? u : e.offsetLeft),
                    Sr = (e) => {
                        let u = e.api,
                            t = e.value,
                            r = e.maxValue,
                            n = void 0 === r ? 100 : r,
                            o = e.theme,
                            i = void 0 === o ? Lu : o,
                            l = e.className,
                            c = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, vr);
                        const d = (0, a.useRef)(null),
                            m = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            _ = V(0, t, n) / n,
                            A = (0, a.useCallback)(
                                (e) => {
                                    (E.current &&
                                        d.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: u }, t, r) => {
                                            const n = t.offsetWidth - r.offsetWidth,
                                                a = e - Tr(t, u),
                                                s = V(0, n, a);
                                            r.style.left = `${s}px`;
                                        })(e, d.current, E.current),
                                        m.current &&
                                            d.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: u },
                                                t,
                                                { container: r, line: n },
                                            ) => {
                                                const a = Math.max(0, Math.floor(r.offsetWidth * t) - 8e3),
                                                    s = e - Tr(r, u),
                                                    o = V(0, a, s);
                                                n.style.left = `${o}px`;
                                            })(e, _, { line: m.current, container: d.current }));
                                },
                                [_],
                            ),
                            g = (0, a.useMemo)(() => Ru(i), [i]);
                        return (
                            (u.current.update = A),
                            s().createElement(
                                'div',
                                { className: F()('OptimizedProgressBar_base_1f', l), ref: d },
                                s().createElement(
                                    'div',
                                    { className: 'OptimizedProgressBar_wrapper_ab' },
                                    s().createElement(
                                        'div',
                                        { style: g, className: 'OptimizedProgressBar_background_ce', ref: E },
                                        s().createElement(ou, { size: c.size }),
                                    ),
                                    s().createElement(
                                        ku,
                                        wr({}, c, {
                                            lineRef: m,
                                            value: t,
                                            theme: i,
                                            maxValue: n,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    },
                    yr = (e, u, t) =>
                        F()(
                            e[t],
                            u === ju.ProgressAlreadyFinished
                                ? e[`${t}__fast`]
                                : u >= ju.ProgressFinished
                                  ? e[`${t}__completed`]
                                  : void 0,
                        ),
                    Pr = {
                        base: 'Container_base_bd',
                        progressWrapper: 'Container_progressWrapper_be',
                        progressWrapper__completed: 'Container_progressWrapper__completed_25',
                        progressWrapper__fast: 'Container_progressWrapper__fast_68',
                        bg: 'Container_bg_82',
                    },
                    Rr = (0, $.Pi)(({ api: e, theme: u }) => {
                        const t = Ku(),
                            r = t.model,
                            n = t.controls,
                            o = r.progressAnimationState.get(),
                            i = r.computes,
                            l = r.prevProgressPoints.get(),
                            c = r.curProgressPoints.get(),
                            d = r.pointsForLevel.get(),
                            m = (0, a.useRef)({ update: () => {} });
                        e.current.moveProgressBars = (0, a.useCallback)((e) => {
                            m.current.update(e);
                        }, []);
                        const E = (0, a.useState)({
                                maxPoints: i.levels().length * d,
                                previousEarnedPoints: l,
                                progressionSize: l,
                            }),
                            _ = E[0],
                            A = _.previousEarnedPoints,
                            g = _.maxPoints,
                            F = _.progressionSize,
                            p = E[1];
                        (0, a.useEffect)(() => {
                            (p((e) => {
                                const u = 0 === e.progressionSize ? l : e.progressionSize;
                                return {
                                    maxPoints: i.levels().length * d,
                                    previousEarnedPoints: u,
                                    progressionSize: c,
                                };
                            }),
                                l !== c && gt('pr_progress_bar'));
                        }, [l, d, c, i]);
                        const D = (0, a.useMemo)(
                            () =>
                                Object.assign({}, Nu, {
                                    withStack: !0,
                                    type: su.Growing,
                                    delta: { duration: 400, delay: 300 },
                                    line: { duration: 400, delay: 300 },
                                }),
                            [],
                        );
                        return (
                            (0, a.useEffect)(() => {
                                if (o === ju.ProgressChange)
                                    return mu(() => {
                                        n.finishProgressionChange();
                                    }, 700);
                            }, [n, o]),
                            s().createElement(
                                'div',
                                { className: Pr.base },
                                s().createElement('div', { className: Pr.bg }),
                                s().createElement(
                                    'div',
                                    { className: yr(Pr, o, 'progressWrapper') },
                                    s().createElement(Sr, {
                                        animationSettings: D,
                                        deltaFrom: A,
                                        value: F,
                                        maxValue: g,
                                        api: m,
                                        theme: u,
                                    }),
                                ),
                            )
                        );
                    }),
                    xr = ({ api: e, children: u, updateProgressBarPosition: t }) => {
                        const r = (0, a.useState)(0),
                            n = r[0],
                            o = r[1],
                            i = (0, a.useState)(0),
                            l = i[0],
                            c = i[1],
                            d = (0, a.useState)(!1),
                            m = d[0],
                            E = d[1];
                        (0, a.useEffect)(
                            () =>
                                At(() => {
                                    const u = (e) => {
                                        const u = e.value.scrollPosition;
                                        m || o(-u);
                                    };
                                    return (
                                        e.events.on('change', u),
                                        () => {
                                            e.events.off('change', u);
                                        }
                                    );
                                }),
                            [e, m],
                        );
                        const _ = (0, a.useCallback)(
                                (e) => {
                                    (E(!0), c(e.clientX), t());
                                },
                                [t],
                            ),
                            A = (0, a.useCallback)(() => {
                                (E(!1), c(0), t());
                            }, [t]),
                            g = (0, a.useCallback)(
                                (u) => {
                                    if (m) {
                                        const r = V(-(e.getBounds()[1] || 0), 0, n + u.clientX - l);
                                        (e.applyScroll(-r, !0), c(u.clientX), o(r), t());
                                    }
                                },
                                [m, e, n, l, t],
                            );
                        return s().createElement(
                            'div',
                            {
                                className: F()('ScrollDrag_base_dd', m && 'ScrollDrag_base__grabbing_db'),
                                onMouseDown: _,
                                onMouseUp: A,
                                onMouseMove: g,
                            },
                            u,
                        );
                    };
                function Lr(e, u, t, r, n, a, s) {
                    try {
                        var o = e[a](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(r, n);
                }
                const Nr = (0, $.Pi)(({ api: e }) => {
                        const u = Ku().model,
                            t = f(),
                            r = (0, a.useState)(!1),
                            n = r[0],
                            o = r[1],
                            i = (0, a.useState)(!1),
                            l = i[0],
                            c = i[1],
                            d = u.computes.levels().length,
                            m = u.progressAnimationState.get() === ju.ProgressAlreadyFinished,
                            E = u.curProgressPoints.get(),
                            _ = u.computes,
                            A = (0, a.useRef)({ moveProgressBars: j }),
                            g = (0, a.useRef)(null),
                            p = (0, a.useRef)(null),
                            D = e.animationScroll.scrollPosition,
                            C = e.getWrapperSize,
                            B = e.contentRef,
                            h = e.wrapperRef,
                            b = e.getContainerSize,
                            v = e.applyScroll;
                        (0, a.useLayoutEffect)(
                            () =>
                                At(() => {
                                    const e = h.current,
                                        u = p.current;
                                    if (!e || !u) return;
                                    const r = parseFloat(getComputedStyle(u.children[0]).width),
                                        n = parseFloat(getComputedStyle(u).paddingRight),
                                        a = parseFloat(getComputedStyle(e).paddingLeft);
                                    (o(t.remScreenWidth >= d * r + n + a), c(!0));
                                }),
                            [t.remScreenWidth, h, d],
                        );
                        const w = (0, a.useCallback)(
                                (e) => {
                                    if (g.current) {
                                        const u = C();
                                        A.current.moveProgressBars({
                                            viewPort: g.current,
                                            horizontalScrollPosition: u ? e - u : e,
                                        });
                                    }
                                },
                                [C],
                            ),
                            T = () => {
                                w(D.goal);
                            },
                            S = (0, a.useCallback)(() => {
                                const e = B.current,
                                    u = _.levels().length;
                                if (e && u > 0) {
                                    const t = b() || 0,
                                        r = C() || 0,
                                        n = t / u,
                                        a = _.currentLevel() * n,
                                        s = (r - e.offsetLeft - n) / 2;
                                    v(V(0, t - r, a - s), { immediate: m });
                                }
                                0 === D.goal && w(D.goal);
                            }, [B, _, b, C, v, m, w, D]);
                        return (
                            (0, a.useEffect)(() => {
                                S();
                            }, [E, S]),
                            (0, a.useEffect)(() => {
                                const e = (function () {
                                    var e,
                                        u =
                                            ((e = function* () {
                                                const e = b(),
                                                    u = D.goal;
                                                (yield (0, U.Eu)(),
                                                    yield new Promise((e) => {
                                                        requestAnimationFrame(() => {
                                                            requestAnimationFrame(() => {
                                                                e();
                                                            });
                                                        });
                                                    }));
                                                const t = b();
                                                (w(t && e && t !== e ? (u * t) / e : u), S());
                                            }),
                                            function () {
                                                var u = this,
                                                    t = arguments;
                                                return new Promise(function (r, n) {
                                                    var a = e.apply(u, t);
                                                    function s(e) {
                                                        Lr(a, r, n, s, o, 'next', e);
                                                    }
                                                    function o(e) {
                                                        Lr(a, r, n, s, o, 'throw', e);
                                                    }
                                                    s(void 0);
                                                });
                                            });
                                    return function () {
                                        return u.apply(this, arguments);
                                    };
                                })();
                                return (
                                    engine.on('clientResized', e),
                                    () => {
                                        engine.off('clientResized', e);
                                    }
                                );
                            }, []),
                            s().createElement(
                                'div',
                                {
                                    className: F()(
                                        'Content_base_f0',
                                        n && 'Content_base__centered_35',
                                        l && 'Content_base__layoutReady_bf',
                                    ),
                                    ref: g,
                                    onWheel: () => w(D.goal),
                                },
                                s().createElement(
                                    sr.Horizontal.Area.Default,
                                    {
                                        api: e,
                                        className: 'Content_horizontalContent_5b',
                                        classNames: { wrapper: 'Content_wrapper_d7' },
                                        barClassNames: { base: 'Content_horizontalBarVerticalScrollBar_0e' },
                                        onDrag: T,
                                    },
                                    s().createElement(
                                        xr,
                                        { api: e, updateProgressBarPosition: T },
                                        s().createElement(mr, { levelRef: p }),
                                        s().createElement(
                                            'div',
                                            { className: 'Content_progress_87' },
                                            s().createElement(
                                                'div',
                                                { className: 'Content_progressArea_35' },
                                                s().createElement(Rr, { api: A }),
                                            ),
                                        ),
                                        s().createElement(br, null),
                                    ),
                                ),
                            )
                        );
                    }),
                    kr = {
                        base: 'Progression_base_c1',
                        base__completed: 'Progression_base__completed_5c',
                        base__fast: 'Progression_base__fast_78',
                        shadow: 'Progression_shadow_af',
                        shadow__left: 'Progression_shadow__left_bc',
                        shadow__right: 'Progression_shadow__right_c6',
                        shadow__visible: 'Progression_shadow__visible_de',
                    },
                    Or = (0, $.Pi)(() => {
                        const e = Ku(),
                            u = e.model,
                            t = e.controls,
                            r = u.progressAnimationState.get(),
                            n = (0, a.useState)(!1),
                            o = n[0],
                            i = n[1],
                            l = (0, a.useState)(!0),
                            c = l[0],
                            d = l[1],
                            m = u.computes.isProgressionCompleted(),
                            E = u.computes.wasProgressionCompletedBeforeStart(),
                            _ = Ot();
                        return (
                            (0, a.useEffect)(() => {
                                const e = (e) => {
                                    const u = _.contentRef.current.offsetLeft,
                                        t = e.value.scrollPosition,
                                        r = _.getWrapperSize() || 0,
                                        n = _.getContainerSize() || 0;
                                    (i(t > u), d(t + r < n - u));
                                };
                                return (
                                    _.events.on('change', e),
                                    () => {
                                        _.events.off('change', e);
                                    }
                                );
                            }, [_]),
                            (0, a.useEffect)(
                                () =>
                                    E
                                        ? t.completeProgression(!0)
                                        : r === ju.ChangeCompleted && m
                                          ? mu(() => {
                                                t.completeProgression(!1);
                                            }, 1600)
                                          : r !== ju.Scrolling || E
                                            ? r === ju.HighlightCard
                                                ? mu(() => {
                                                      t.finishHighlightCard();
                                                  }, 500)
                                                : void 0
                                            : mu(() => {
                                                  t.finishScrolling();
                                              }, 1200),
                                [r, E, m, t],
                            ),
                            s().createElement(
                                'div',
                                { className: yr(kr, r, 'base') },
                                s().createElement('div', {
                                    className: F()(kr.shadow, kr.shadow__left, o && kr.shadow__visible),
                                }),
                                s().createElement('div', {
                                    className: F()(kr.shadow, kr.shadow__right, c && kr.shadow__visible),
                                }),
                                s().createElement(Nr, { api: _ }),
                            )
                        );
                    }),
                    Mr = (0, $.Pi)(() => {
                        const e = Ku(),
                            u = e.model,
                            t = e.controls,
                            r = u.progressAnimationState.get(),
                            n = f(),
                            a = r >= ju.ProgressFinished,
                            o = r === ju.ProgressAlreadyFinished && 'App_shade__fast_3e';
                        return (
                            G(H.n.ESCAPE, t.onClose),
                            s().createElement(
                                'div',
                                { className: 'App_base_2a' },
                                s().createElement(
                                    'div',
                                    { className: 'App_bgContainer_8b' },
                                    s().createElement('div', { className: 'App_bg_d4' }),
                                    s().createElement('div', {
                                        className: F()('App_shade_2f', o, a && 'App_shade__completed_d4'),
                                    }),
                                    s().createElement('div', { className: 'App_noise_ab' }),
                                    s().createElement('div', { className: 'App_bottomShadow_e2' }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'App_content_e3' },
                                    s().createElement(St, null),
                                    s().createElement(
                                        'div',
                                        {
                                            className: F()(
                                                'App_mainContent_af',
                                                n.mediaSize === C.Medium &&
                                                    n.remScreenHeight >= 1200 &&
                                                    'App_mainContent__largeHeight_ea',
                                            ),
                                        },
                                        s().createElement(
                                            'div',
                                            { className: 'App_battleQuests_01' },
                                            s().createElement(ht, null),
                                        ),
                                        s().createElement(Or, null),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: 'App_buttonInfo_ef' },
                                        s().createElement(W, {
                                            caption: R.strings.menu.viewHeader.aboutBtn.label(),
                                            type: 'info',
                                            side: 'left',
                                            onClick: t.onAboutClicked,
                                        }),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: 'App_buttonClose_0c' },
                                        s().createElement(W, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: t.onClose,
                                        }),
                                    ),
                                ),
                            )
                        );
                    }),
                    Ir = {
                        [k.PROGRESSION]: () =>
                            s().createElement(
                                Xu,
                                { options: { context: 'model.progressionModel' } },
                                s().createElement(Mr, null),
                            ),
                    },
                    Wr = ({ viewType: e }) => {
                        const u = Ir[e];
                        return u
                            ? s().createElement(
                                  a.Suspense,
                                  { fallback: s().createElement('div', null) },
                                  s().createElement(u, null),
                              )
                            : (console.error('Unknown view type for render', e), null);
                    },
                    Hr = K()(({ observableModel: e }) => {
                        const u = { root: e.object(), progressionModel: e.object('progressionModel') };
                        return Object.assign({}, u);
                    }, j),
                    Ur = Hr[0],
                    zr = Hr[1],
                    Gr = (0, $.Pi)(() => {
                        const e = zr().model.root.get().viewType;
                        return s().createElement(
                            'div',
                            { className: 'App_base_9b' },
                            s().createElement(Wr, { viewType: e }),
                        );
                    });
                engine.whenReady.then(() => {
                    N().render(
                        s().createElement(
                            x,
                            null,
                            s().createElement(
                                Ur,
                                null,
                                s().createElement(
                                    'div',
                                    { className: 'ProgressionMainView_base_2d' },
                                    s().createElement(Gr, null),
                                ),
                            ),
                        ),
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
        (__webpack_require__.O = (e, u, t, r) => {
            if (!u) {
                var n = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, r] = deferred[i], a = !0, s = 0; s < u.length; s++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > r; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, r];
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
        (__webpack_require__.j = 'ProgressionMainView/ProgressionMainView'),
        (() => {
            var e = { 'ProgressionMainView/ProgressionMainView': 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var r,
                        n,
                        [a, s, o] = t,
                        i = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); i < a.length; i++)
                        ((n = a[i]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/battle_royale_progression.vendors'], () =>
        __webpack_require__(89),
    );
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
