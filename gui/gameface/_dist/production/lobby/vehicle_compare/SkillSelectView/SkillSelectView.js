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
                t.d(u, { O: () => se });
                var n = {};
                (t.r(n),
                    t.d(n, { mouse: () => E, off: () => _, on: () => d, onResize: () => l, onScaleUpdated: () => c }));
                var r = {};
                (t.r(r),
                    t.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => h,
                        getSize: () => F,
                        graphicsQuality: () => p,
                        playSound: () => A,
                        setRTPC: () => g,
                    }));
                var a = {};
                (t.r(a), t.d(a, { getBgUrl: () => w, getTextureUrl: () => v }));
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
                        addModelObserver: () => H,
                        addPreloadTexture: () => R,
                        arabic2roman: () => ue,
                        children: () => a,
                        displayStatus: () => y,
                        displayStatusIs: () => ne,
                        enableFullScreenModeSupported: () => oe,
                        events: () => x,
                        extraSize: () => re,
                        forceTriggerMouseMove: () => Q,
                        freezeTextureBeforeResize: () => V,
                        getBrowserTexturePath: () => P,
                        getDisplayStatus: () => J,
                        getExternalPaddingsRem: () => te,
                        getFontNames: () => ee,
                        getScale: () => $,
                        getSize: () => j,
                        getViewGlobalPosition: () => G,
                        initExternalPaddings: () => ie,
                        isEventHandled: () => Z,
                        isFocused: () => Y,
                        pxToRem: () => U,
                        remToPx: () => q,
                        resize: () => z,
                        sendEvent: () => O,
                        setAnimateWindow: () => K,
                        setEventHandled: () => X,
                        setInputPaddingsRem: () => I,
                        setSidePaddingsRem: () => W,
                        whenTutorialReady: () => ae,
                    }));
                const l = i('clientResized'),
                    c = i('self.onScaleUpdated'),
                    d = (e, u) => engine.on(e, u),
                    _ = (e, u) => engine.off(e, u),
                    m = { down: i('mousedown'), up: i('mouseup'), move: i('mousemove') };
                const E = (function () {
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
                function h(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const p = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    f = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    D = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    B = Object.keys(D).reduce((e, u) => ((e[u] = () => A(D[u])), e), {}),
                    b = { play: Object.assign({}, B, { sound: A }), setRTPC: g };
                var C = t(690);
                function v(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function w(e, u, t) {
                    return `url(${v(e, u, t)})`;
                }
                const y = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    x = {
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
                    k = ['args'];
                const S = 2,
                    L = 16,
                    T = 32,
                    N = 64,
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
                                })(u, k);
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
                    O = {
                        close(e) {
                            M('popover' === e ? S : T);
                        },
                        minimize() {
                            M(N);
                        },
                        move(e) {
                            M(L, { isMouseEvent: !0, on: e });
                        },
                    };
                function R(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function P(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function H(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function W(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function j(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function z(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function G(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: q(u.x), y: q(u.y) };
                }
                function V() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function $() {
                    return viewEnv.getScale();
                }
                function U(e) {
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
                function Q() {
                    viewEnv.forceTriggerMouseMove();
                }
                function J() {
                    return viewEnv.getShowingStatus();
                }
                const ee = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ue = C.cg;
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
                    ae = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : x.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function oe() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function ie(e) {
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
                const se = { view: o, client: r, sound: b, intl: f };
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
                t.d(u, { HG: () => i, cg: () => a });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(e) {
                    let u = '';
                    for (let t = r.length - 1; t >= 0; t--) for (; e >= r[t]; ) ((u += n[t]), (e -= r[t]));
                    return u;
                }
                const o = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    i = (e) => (o ? `${e}` : a(e));
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
                t.d(u, { B0: () => i, ry: () => F, Sy: () => p });
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
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(521),
                    m = t(70);
                const E = ['args'];
                function A(e, u, t, n, r, a, o) {
                    try {
                        var i = e[a](o),
                            s = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(s) : Promise.resolve(s).then(n, r);
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
                                        function o(e) {
                                            A(a, n, r, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(a, n, r, o, i, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    h = (e, u) => {
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
                                })(u, E);
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
                    p = () => h(i.CLOSE),
                    f = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var D = t(572);
                const B = r.instance,
                    b = {
                        DataTracker: a.Z,
                        ViewModel: D.Z,
                        ViewEventType: i,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => h(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => h(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            h(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                d = s.width,
                                _ = s.height,
                                E = {
                                    x: m.O.view.pxToRem(l) + o.x,
                                    y: m.O.view.pxToRem(c) + o.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(_),
                                };
                            h(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: g(E),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => f(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, p);
                        },
                        handleViewEvent: h,
                        onBindingsReady: F,
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
                        ClickOutsideManager: B,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = b;
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
            612: (e, u, t) => {
                'use strict';
                var n = {};
                (t.r(n),
                    t.d(n, {
                        Area: () => nu,
                        Bar: () => eu,
                        DefaultScroll: () => tu,
                        Direction: () => Pe,
                        defaultSettings: () => He,
                        useHorizontalScrollApi: () => je,
                    }));
                var r = {};
                (t.r(r), t.d(r, { Area: () => Du, Bar: () => hu, Default: () => fu, useVerticalScrollApi: () => ru }));
                var a = t(363),
                    o = t.n(a);
                const i = (e, u, t) =>
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
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function d(e = s.O.client.getSize('rem')) {
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
                const _ = d(),
                    m = (0, a.createContext)(_),
                    E = ['children'];
                (0, a.memo)((e) => {
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
                    const n = (0, a.useContext)(m),
                        r = n.extraLarge,
                        o = n.large,
                        s = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        d = n.extraLargeWidth,
                        _ = n.largeWidth,
                        A = n.mediumWidth,
                        g = n.smallWidth,
                        F = n.extraSmallWidth,
                        h = n.extraLargeHeight,
                        p = n.largeHeight,
                        f = n.mediumHeight,
                        D = n.smallHeight,
                        B = n.extraSmallHeight,
                        b = { extraLarge: h, large: p, medium: f, small: D, extraSmall: B };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return u;
                        if (t.large && o) return u;
                        if (t.medium && s) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && d) return i(u, t, b);
                        if (t.largeWidth && _) return i(u, t, b);
                        if (t.mediumWidth && A) return i(u, t, b);
                        if (t.smallWidth && g) return i(u, t, b);
                        if (t.extraSmallWidth && F) return i(u, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && h) return u;
                            if (t.largeHeight && p) return u;
                            if (t.mediumHeight && f) return u;
                            if (t.smallHeight && D) return u;
                            if (t.extraSmallHeight && B) return u;
                        }
                    }
                    return null;
                });
                const A = ({ children: e }) => {
                    const u = (0, a.useState)(d),
                        t = u[0],
                        n = u[1],
                        r = (0, a.useState)(!1),
                        i = r[0],
                        l = r[1];
                    return (
                        (0, a.useLayoutEffect)(() => {
                            function e() {
                                n((e) => {
                                    const u = s.O.client.getSize('rem');
                                    return e.width === u.width && e.height === u.height ? e : d(u);
                                });
                            }
                            return (
                                e(),
                                l(!0),
                                s.O.client.events.on('clientResized', e),
                                s.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (s.O.client.events.off('clientResized', e),
                                        s.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        o().createElement(m.Provider, { value: t }, i && e)
                    );
                };
                var g = t(483),
                    F = t.n(g),
                    h = t(926),
                    p = t.n(h);
                let f, D, B;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(f || (f = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                    })(D || (D = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(B || (B = {})));
                const b = () => {
                        const e = (0, a.useContext)(m),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return f.ExtraLarge;
                                    case e.large:
                                        return f.Large;
                                    case e.medium:
                                        return f.Medium;
                                    case e.small:
                                        return f.Small;
                                    case e.extraSmall:
                                        return f.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), f.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return D.ExtraLarge;
                                    case e.largeWidth:
                                        return D.Large;
                                    case e.mediumWidth:
                                        return D.Medium;
                                    case e.smallWidth:
                                        return D.Small;
                                    case e.extraSmallWidth:
                                        return D.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), D.ExtraSmall);
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return B.ExtraLarge;
                                    case e.largeHeight:
                                        return B.Large;
                                    case e.mediumHeight:
                                        return B.Medium;
                                    case e.smallHeight:
                                        return B.Small;
                                    case e.extraSmallHeight:
                                        return B.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), B.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    C = ['children', 'className'];
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                }
                const w = {
                        [D.ExtraSmall]: '',
                        [D.Small]: p().SMALL_WIDTH,
                        [D.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [D.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [D.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    y = {
                        [B.ExtraSmall]: '',
                        [B.Small]: p().SMALL_HEIGHT,
                        [B.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [B.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [B.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    x = {
                        [f.ExtraSmall]: '',
                        [f.Small]: p().SMALL,
                        [f.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [f.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [f.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
                    },
                    k = (e) => {
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
                            })(e, C);
                        const r = b(),
                            a = r.mediaWidth,
                            i = r.mediaHeight,
                            s = r.mediaSize;
                        return o().createElement('div', v({ className: F()(t, w[a], y[i], x[s]) }, n), u);
                    },
                    S = ['children'];
                const L = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, S);
                    return o().createElement(A, null, o().createElement(k, t, u));
                };
                var T = t(533),
                    N = t.n(T);
                function M(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const O = {
                        playHighlight() {
                            M('highlight');
                        },
                        playClick() {
                            M('play');
                        },
                        playYes() {
                            M('yes1');
                        },
                    },
                    I = {
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
                let P, H;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(P || (P = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(H || (H = {})));
                const W = ({
                        children: e,
                        size: u,
                        disabled: t,
                        mixClass: n,
                        onMouseEnter: r,
                        onMouseMove: i,
                        onMouseDown: s,
                        onMouseUp: l,
                        onMouseLeave: c,
                        onClick: d,
                        isFocused: _ = !1,
                        type: m = P.primary,
                        soundHover: E = 'highlight',
                        soundClick: A = 'play',
                    }) => {
                        const g = (0, a.useRef)(null),
                            h = (0, a.useState)(_),
                            p = h[0],
                            f = h[1],
                            D = (0, a.useState)(!1),
                            B = D[0],
                            b = D[1];
                        return (
                            (0, a.useEffect)(() => {
                                function e(e) {
                                    p && null !== g.current && !g.current.contains(e.target) && f(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', e),
                                    () => {
                                        document.removeEventListener('mousedown', e);
                                    }
                                );
                            }, [p]),
                            (0, a.useEffect)(() => {
                                f(_);
                            }, [_]),
                            o().createElement(
                                'div',
                                {
                                    ref: g,
                                    className: F()(
                                        I.base,
                                        I[`base__${m}`],
                                        t && I.base__disabled,
                                        u && I[`base__${u}`],
                                        p && I.base__focus,
                                        B && I.base__highlightActive,
                                        n,
                                    ),
                                    onMouseEnter: function (e) {
                                        t || (null !== E && M(E), r && r(e));
                                    },
                                    onMouseMove: function (e) {
                                        i && i(e);
                                    },
                                    onMouseUp: function (e) {
                                        t || (l && l(e), b(!1));
                                    },
                                    onMouseDown: function (e) {
                                        t ||
                                            (null !== A && M(A),
                                            s && s(e),
                                            _ && (t || (g.current && (g.current.focus(), f(!0)))),
                                            b(!0));
                                    },
                                    onMouseLeave: function (e) {
                                        t || (c && c(e), b(!1));
                                    },
                                    onClick: function (e) {
                                        t || (d && d(e));
                                    },
                                },
                                m !== P.ghost &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: I.back }),
                                        o().createElement('span', { className: I.texture }),
                                    ),
                                o().createElement(
                                    'span',
                                    { className: F()(I.state, I.state__default) },
                                    o().createElement('span', { className: I.stateDisabled }),
                                    o().createElement('span', { className: I.stateHighlightHover }),
                                    o().createElement('span', { className: I.stateHighlightActive }),
                                ),
                                o().createElement(
                                    'span',
                                    { className: I.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    e,
                                ),
                            )
                        );
                    },
                    j = {
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
                    z = [
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
                function G() {
                    return (
                        (G =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        G.apply(this, arguments)
                    );
                }
                const V = (e) => {
                    let u = e.caption,
                        t = e.onClick,
                        n = e.goto,
                        r = e.classNames,
                        i = e.onMouseEnter,
                        l = e.onMouseLeave,
                        c = e.onMouseDown,
                        d = e.onMouseUp,
                        _ = e.side,
                        m = void 0 === _ ? 'left' : _,
                        E = e.type,
                        A = void 0 === E ? 'back' : E,
                        g = e.soundHover,
                        h = void 0 === g ? 'highlight' : g,
                        p = e.soundClick,
                        f = void 0 === p ? 'play' : p,
                        D = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, z);
                    const B = (0, a.useCallback)(
                            (e) => {
                                (null == i || i(e), s.O.sound.play.sound(h));
                            },
                            [i, h],
                        ),
                        b = (0, a.useCallback)(
                            (e) => {
                                null == l || l(e);
                            },
                            [l],
                        ),
                        C = (0, a.useCallback)(
                            (e) => {
                                (null == c || c(e), s.O.sound.play.sound(f));
                            },
                            [c, f],
                        ),
                        v = (0, a.useCallback)(
                            (e) => {
                                null == d || d(e);
                            },
                            [d],
                        );
                    return o().createElement(
                        'div',
                        G(
                            {
                                className: F()(j.base, j[`base__${A}`], j[`base__${m}`], null == r ? void 0 : r.base),
                                onMouseEnter: B,
                                onMouseLeave: b,
                                onMouseDown: C,
                                onMouseUp: v,
                                onClick: t,
                            },
                            D,
                        ),
                        'info' !== A && o().createElement('div', { className: j.shine }),
                        o().createElement(
                            'div',
                            { className: F()(j.icon, j[`icon__${A}`], j[`icon__${m}`], null == r ? void 0 : r.icon) },
                            o().createElement('div', { className: F()(j.glow, null == r ? void 0 : r.glow) }),
                        ),
                        o().createElement(
                            'div',
                            { className: F()(j.caption, j[`caption__${A}`], null == r ? void 0 : r.caption) },
                            u,
                        ),
                        n && o().createElement('div', { className: F()(j.goto, null == r ? void 0 : r.goto) }, n),
                    );
                };
                var $ = t(521),
                    U = t(916);
                const q = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function K(e = $.n.NONE, u = q, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== $.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!n && s.O.view.isEventHandled()) return;
                                (s.O.view.setEventHandled(), u(r), t && r.stopPropagation());
                            }
                        }
                    }, [u, e, t, n]);
                }
                function Y() {
                    !(function (e = $.n.ESCAPE) {
                        K(e, U.Sy, !0);
                    })($.n.ESCAPE);
                }
                var X = t(403);
                var Z = t(690);
                t(281);
                let Q;
                function J(e) {
                    return e.replace(/-/g, '_');
                }
                function ee(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(Q || (Q = {}));
                const ue = (e) => e.replace(/&nbsp;/g, ' '),
                    te =
                        ((() => {
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
                        })(),
                        (e, u) => e.split(',').includes(u)),
                    ne = {
                        base: 'TankName_base_f1',
                        base__sizeMedium: 'TankName_base__sizeMedium_3a',
                        base__sizBig: 'TankName_base__sizBig_a9',
                        base__typeWhite: 'TankName_base__typeWhite_32',
                        base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                        base__typeWhiteOrange: 'TankName_base__typeWhiteOrange_ac',
                        base__typeColored: 'TankName_base__typeColored_bc',
                        level: 'TankName_level_bb',
                        type: 'TankName_type_3c',
                        type__extraSmall: 'TankName_type__extraSmall_80',
                        type__medium: 'TankName_type__medium_ff',
                        type__big: 'TankName_type__big_9a',
                        type__eliteExtraSmall: 'TankName_type__eliteExtraSmall_74',
                        type__eliteMedium: 'TankName_type__eliteMedium_10',
                        type__eliteBig: 'TankName_type__eliteBig_ac',
                        name: 'TankName_name_56',
                        premiumIGR: 'TankName_premiumIGR_25',
                    };
                let re, ae;
                (!(function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big'));
                })(re || (re = {})),
                    (function (e) {
                        ((e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange'));
                    })(ae || (ae = {})));
                const oe = ({
                        isElite: e,
                        vehicleName: u,
                        vehicleShortName: t,
                        vehicleType: n,
                        vehicleLvl: r,
                        tags: a = '',
                        size: i = re.extraSmall,
                        type: s = ae.colored,
                        className: l,
                        classNames: c,
                        isShortName: d = !1,
                    }) => {
                        const _ = `${J(n)}${e ? '_elite' : ''}`,
                            m = R.images.gui.maps.icons.vehicleTypes.big.$dyn(_);
                        return o().createElement(
                            'div',
                            { className: F()(ne.base, ne[`base__size${ee(i)}`], ne[`base__type${ee(s)}`], l) },
                            o().createElement(
                                'div',
                                { className: F()(ne.level, null == c ? void 0 : c.level) },
                                (0, Z.HG)(r),
                            ),
                            o().createElement('div', {
                                className: F()(
                                    ne.type,
                                    e && ne[`type__elite${ee(i)}`],
                                    ne[`type__${i}`],
                                    null == c ? void 0 : c.typeIcon,
                                ),
                                style: n ? { backgroundImage: `url(${m})` } : void 0,
                            }),
                            te(a, 'premiumIGR') && o().createElement('div', { className: ne.premiumIGR }),
                            o().createElement(
                                'div',
                                { className: F()(ne.name, null == c ? void 0 : c.name) },
                                d ? t : u,
                            ),
                        );
                    },
                    ie = 'VehicleParamsDecorator_base_32',
                    se = 'VehicleParamsDecorator_vehicleInfo_02',
                    le = 'VehicleParamsDecorator_tankName_ac',
                    ce = 'VehicleParamsDecorator_tankLvl_26',
                    de = 'VehicleParamsDecorator_type_e7',
                    _e = 'VehicleParamsDecorator_tip_6c',
                    me = ['className', 'classNames', 'children', 'isPerkTipShown', 'tipText'];
                function Ee() {
                    return (
                        (Ee =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ee.apply(this, arguments)
                    );
                }
                const Ae = (e) => {
                    let u = e.className,
                        t = e.classNames,
                        n = e.children,
                        r = e.isPerkTipShown,
                        a = e.tipText,
                        i = void 0 === a ? R.strings.crew.vehicleParamsDecorator.perkTip() : a,
                        s = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, me);
                    return o().createElement(
                        'div',
                        { className: F()(ie, u) },
                        o().createElement(
                            oe,
                            Ee(
                                {
                                    className: F()(se, null == t ? void 0 : t.vehicleInfo),
                                    classNames: { name: le, level: ce, typeIcon: de },
                                },
                                s,
                                { isShortName: !0 },
                            ),
                        ),
                        n,
                        r && o().createElement('div', { className: F()(_e, null == t ? void 0 : t.tip) }, i),
                    );
                };
                function ge() {
                    return !1;
                }
                console.log;
                var Fe = t(174);
                function he(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return pe(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return pe(e, u);
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
                function pe(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const fe = (e) => (0 === e ? window : window.subViews.get(e));
                const De = () => (e, u) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: n = 'real', options: r, children: i, mocks: l }) {
                            const c = (0, a.useRef)([]),
                                d = (t, n, r) => {
                                    var a;
                                    const o = (function ({
                                            initializer: e = !0,
                                            rootId: u = 0,
                                            getRoot: t = fe,
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
                                                    for (var e, t = he(r.keys()); !(e = t()).done; ) a(e.value, u);
                                                },
                                                unsubscribe: a,
                                            };
                                        })(n),
                                        i =
                                            'real' === t
                                                ? o
                                                : Object.assign({}, o, {
                                                      readByPath:
                                                          null != (a = null == r ? void 0 : r.getter) ? a : () => {},
                                                  }),
                                        l = (e) =>
                                            'mocks' === t ? (null == r ? void 0 : r.getter(e)) : i.readByPath(e),
                                        d = (e) => c.current.push(e),
                                        _ = e({
                                            mode: t,
                                            readByPath: l,
                                            externalModel: i,
                                            observableModel: {
                                                dict: (e) => {
                                                    const u = l(e),
                                                        n = Fe.LO.box(u, { equals: ge });
                                                    return (
                                                        'real' === t &&
                                                            i.subscribe(
                                                                (0, Fe.aD)((e) => n.set(e)),
                                                                e,
                                                            ),
                                                        n
                                                    );
                                                },
                                                array: (e, u) => {
                                                    const n = null != u ? u : l(e),
                                                        r = Fe.LO.box(n, { equals: ge });
                                                    return (
                                                        'real' === t &&
                                                            i.subscribe(
                                                                (0, Fe.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const n = null != u ? u : l(e),
                                                        r = Fe.LO.box(n, { equals: ge });
                                                    return (
                                                        'real' === t &&
                                                            i.subscribe(
                                                                (0, Fe.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const n = l(u);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, u) => ((e[u] = Fe.LO.box(n[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Fe.aD)((u) => {
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
                                                            o = a.reduce(
                                                                (e, [u, t]) => ((e[t] = Fe.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Fe.aD)((e) => {
                                                                        a.forEach(([u, t]) => {
                                                                            o[t].set(e[u]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            o
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: d,
                                        }),
                                        m = { mode: t, model: _, externalModel: i, cleanup: d };
                                    return {
                                        model: _,
                                        controls: 'mocks' === t && r ? r.controls(m) : u(m),
                                        externalModel: i,
                                        mode: t,
                                    };
                                },
                                _ = (0, a.useRef)(!1),
                                m = (0, a.useState)(n),
                                E = m[0],
                                A = m[1],
                                g = (0, a.useState)(() => d(n, r, l)),
                                F = g[0],
                                h = g[1];
                            return (
                                (0, a.useEffect)(() => {
                                    _.current ? h(d(E, r, l)) : (_.current = !0);
                                }, [l, E, r]),
                                (0, a.useEffect)(() => {
                                    A(n);
                                }, [n]),
                                (0, a.useEffect)(
                                    () => () => {
                                        (F.externalModel.dispose(), c.current.forEach((e) => e()));
                                    },
                                    [F],
                                ),
                                o().createElement(t.Provider, { value: F }, i)
                            );
                        },
                        () => (0, a.useContext)(t),
                    ];
                };
                let Be, be, Ce, ve;
                (!(function (e) {
                    ((e.Initialization = 'initialization'),
                        (e.Loading = 'loading'),
                        (e.ForceLoading = 'forceLoading'),
                        (e.Loaded = 'loaded'));
                })(Be || (Be = {})),
                    (function (e) {
                        ((e.Initialization = 'initialization'),
                            (e.Loading = 'loading'),
                            (e.Loaded = 'loaded'),
                            (e.Failed = 'failed'));
                    })(be || (be = {})),
                    (function (e) {
                        ((e.Initialization = 'initialization'), (e.Loaded = 'loaded'), (e.Failed = 'failed'));
                    })(Ce || (Ce = {})),
                    (function (e) {
                        ((e.Initialization = 'initialization'),
                            (e.BrowserLoading = 'browserLoading'),
                            (e.PageLoading = 'pageLoading'),
                            (e.ForceLoading = 'forceLoading'),
                            (e.PageFailed = 'pageFailed'),
                            (e.TextureFailed = 'textureFailed'),
                            (e.Loaded = 'loaded'));
                    })(ve || (ve = {})));
                (Be.Initialization, be.Initialization);
                const we = De()(
                        ({ observableModel: e }) => {
                            const u = { groups: e.array('groups', []) };
                            return Object.assign({}, u);
                        },
                        ({ externalModel: e }) => ({
                            onGroupClick: e.createCallback((e) => ({ groupName: e }), 'onGroupClick'),
                        }),
                    ),
                    ye = we[0],
                    xe = we[1],
                    ke = (e) => {
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
                    Se = (e, u, t) => (t < e ? e : t > u ? u : t),
                    Le = [];
                function Te(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), Le)
                    );
                }
                function Ne(e, u, t = []) {
                    const n = (0, a.useRef)(0),
                        r = (0, a.useCallback)(() => {
                            (window.clearInterval(n.current), (n.current = 0));
                        }, t || []);
                    (0, a.useEffect)(() => r, [r]);
                    const o = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            (0 !== n.current && r(), (n.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, o),
                        r,
                    ];
                }
                function Me(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Oe(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Oe(e, u);
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
                function Oe(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function Re(e, u, t) {
                    const n = (0, a.useMemo)(
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
                                    function d() {
                                        ((o = Date.now()), t.apply(l, s));
                                    }
                                    a ||
                                        (n && !r && d(),
                                        i(),
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
                                    (s.cancel = function () {
                                        (i(), (a = !0));
                                    }),
                                    s
                                );
                            })(t, e),
                        u,
                    );
                    return ((0, a.useEffect)(() => n.cancel, [n]), n);
                }
                var Ie = t(30);
                let Pe;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Pe || (Pe = {}));
                const He = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    We = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        forceTriggerMouseMove: o,
                    }) => {
                        const i = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                a = n[1];
                            return a <= r ? 0 : Se(r, a, t);
                        };
                        return (s = {}) => {
                            const l = s.settings,
                                c = void 0 === l ? He : l,
                                d = (0, a.useRef)(null),
                                _ = (0, a.useRef)(null),
                                m = (0, a.useRef)(!1),
                                E = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (var n, r = Me(u(e).values()); !(n = r()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                A = Re(
                                    () => {
                                        o && o();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, Ie.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), E.trigger('change', e), o && m.current && A());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                F = g[0],
                                h = g[1],
                                p = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = F.scrollPosition.get(),
                                            a = (null != (n = F.scrollPosition.goal) ? n : 0) - r;
                                        return i(e, u * t + a + r);
                                    },
                                    [F.scrollPosition],
                                ),
                                f = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            h.start({
                                                scrollPosition: i(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(n, F.scrollPosition.get()) },
                                            });
                                    },
                                    [h, c.animationConfig, F.scrollPosition],
                                ),
                                D = (0, a.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = _.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            a = p(u, e, n);
                                        f(a);
                                    },
                                    [f, p, c.step],
                                ),
                                B = (0, a.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && D(n(e)),
                                            d.current && E.trigger('mouseWheel', e, F.scrollPosition, u(d.current)));
                                    },
                                    [F.scrollPosition, D, E],
                                ),
                                b = ((e, u = []) => {
                                    const t = (0, a.useRef)(),
                                        n = (0, a.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        ke(() => {
                                            const e = d.current;
                                            e &&
                                                (f(i(e, F.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [f, F.scrollPosition.goal],
                                ),
                                C = Te(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = i(e, F.scrollPosition.goal);
                                    (u !== F.scrollPosition.goal && f(u, { immediate: !0 }),
                                        E.trigger('recalculateContent'));
                                });
                            ((0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', b),
                                    () => {
                                        window.removeEventListener('resize', b);
                                    }
                                ),
                                [b],
                            ),
                                (0, a.useEffect)(() => {
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
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? r(_.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? u(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: B,
                                    applyScroll: f,
                                    applyStepTo: D,
                                    contentRef: d,
                                    wrapperRef: _,
                                    scrollPosition: h,
                                    animationScroll: F,
                                    recalculateContent: C,
                                    events: { on: E.on, off: E.off },
                                }),
                                [F.scrollPosition, f, D, E.off, E.on, C, B, h, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    je = We({
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
                        getDirection: (e) => (e.deltaY > 1 ? Pe.Next : Pe.Prev),
                        forceTriggerMouseMove: s.O.view.forceTriggerMouseMove,
                    }),
                    ze = 'HorizontalBar_base_49',
                    Ge = 'HorizontalBar_base__active_5e',
                    Ve = 'HorizontalBar_leftButton_5f',
                    $e = 'HorizontalBar_rightButton_03',
                    Ue = 'HorizontalBar_track_0d',
                    qe = 'HorizontalBar_thumb_fd',
                    Ke = 'HorizontalBar_rail_32',
                    Ye = 'disable',
                    Xe = { pending: !1, offset: 0 },
                    Ze = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Qe = () => {},
                    Je = (e, u) => Math.max(20, e.offsetWidth * u),
                    eu = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Ze, onDrag: n = Qe }) => {
                        const r = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, a.useState)(Xe),
                            E = m[0],
                            A = m[1],
                            g = (0, a.useCallback)(
                                (e) => {
                                    (A(e),
                                        d.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [n],
                            ),
                            h = () => {
                                const u = c.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    s = Se(0, 1, a / (r - n)),
                                    _ = (u.offsetWidth - Je(u, o)) * s;
                                ((t.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && d.current) {
                                            if (0 === e)
                                                return (
                                                    i.current.classList.add(Ye),
                                                    void l.current.classList.remove(Ye)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(Ye),
                                                    void l.current.classList.add(Ye)
                                                );
                                            var u, t;
                                            (i.current.classList.remove(Ye), l.current.classList.remove(Ye));
                                        }
                                    })(_));
                            },
                            p = Te(() => {
                                ((() => {
                                    const u = d.current,
                                        t = c.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && n && t)) return;
                                    const o = Math.min(1, n / a);
                                    ((u.style.width = `${Je(t, o)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 !== o ? r.current.classList.add(Ge) : r.current.classList.remove(Ge)));
                                })(),
                                    h());
                            });
                        ((0, a.useEffect)(() => ke(p)),
                            (0, a.useEffect)(
                                () =>
                                    ke(() => {
                                        const u = () => {
                                            h();
                                        };
                                        let t = Qe;
                                        const n = () => {
                                            (t(), (t = ke(p)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', p),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', p),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!E.pending) return;
                                const u = s.O.client.events.mouse.move(([u, t]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            o = e.wrapperRef.current;
                                        if (!a || !o) return;
                                        const i = c.current,
                                            s = d.current;
                                        if (!i || !s) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - E.offset - i.getBoundingClientRect().x,
                                            _ = (l / i.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, _),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: l, contentOffset: _ }));
                                    }),
                                    t = s.O.client.events.mouse.up(() => {
                                        (u(), g(Xe));
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, E.offset, E.pending, n, g]));
                        const f = Ne((u) => e.applyStepTo(u), _, [e]),
                            D = f[0],
                            B = f[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', B, !0),
                                () => document.removeEventListener('mouseup', B, !0)
                            ),
                            [B],
                        );
                        const b = (e) => {
                            e.target.classList.contains(Ye) || M('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: F()(ze, u.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: F()(Ve, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ye) || 0 !== e.button || (M('play'), D(Pe.Next));
                                },
                                onMouseUp: B,
                                ref: i,
                                onMouseEnter: b,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: F()(Ue, u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        if (n && 0 === u.button)
                                            if ((M('play'), u.target === n))
                                                g({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = d.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? Pe.Prev : Pe.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: b,
                                },
                                o().createElement('div', { ref: d, className: F()(qe, u.thumb) }),
                                o().createElement('div', { className: F()(Ke, u.rail) }),
                            ),
                            o().createElement('div', {
                                className: F()($e, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ye) || 0 !== e.button || (M('play'), D(Pe.Prev));
                                },
                                onMouseUp: B,
                                ref: l,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    uu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    tu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: i,
                        scrollClassName: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: F()(uu.base, e.base) });
                            }, [n]),
                            _ = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: F()(uu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: F()(uu.defaultScrollArea, r) },
                                o().createElement(nu, { className: s, api: _, classNames: i }, e),
                            ),
                            o().createElement(eu, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    nu = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, a.useEffect)(() => ke(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: F()(uu.base, u) },
                            o().createElement(
                                'div',
                                {
                                    className: F()(uu.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: F()(uu.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                ((nu.Bar = eu), (nu.Default = tu));
                const ru = We({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Pe.Next : Pe.Prev),
                    }),
                    au = 'VerticalBar_base_f3',
                    ou = 'VerticalBar_base__active_72',
                    iu = 'VerticalBar_topButton_d7',
                    su = 'VerticalBar_bottomButton_06',
                    lu = 'VerticalBar_track_df',
                    cu = 'VerticalBar_thumb_32',
                    du = 'VerticalBar_rail_43',
                    _u = 'disable',
                    mu = () => {},
                    Eu = { pending: !1, offset: 0 },
                    Au = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    gu = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Fu = (e, u) => Math.max(20, e.offsetHeight * u),
                    hu = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Au, onDrag: n = mu }) => {
                        const r = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, a.useState)(Eu),
                            E = m[0],
                            A = m[1],
                            g = (0, a.useCallback)(
                                (e) => {
                                    (A(e),
                                        d.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [n],
                            ),
                            h = Te(() => {
                                const u = d.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && u && t)) return;
                                const o = Math.min(1, n / a);
                                return (
                                    (u.style.height = `${Fu(t, o)}px`),
                                    (u.style.display = 'flex'),
                                    r.current &&
                                        (1 !== o ? r.current.classList.add(ou) : r.current.classList.remove(ou)),
                                    o
                                );
                            }),
                            p = Te(() => {
                                const u = c.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    s = Se(0, 1, a / (r - n)),
                                    _ = (u.offsetHeight - Fu(u, o)) * s;
                                ((t.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    i.current.classList.add(_u),
                                                    void l.current.classList.remove(_u)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(_u),
                                                    void l.current.classList.add(_u)
                                                );
                                            var u, t;
                                            (i.current.classList.remove(_u), l.current.classList.remove(_u));
                                        }
                                    })(_));
                            }),
                            f = Te(() => {
                                gu(e, () => {
                                    (h(), p());
                                });
                            });
                        ((0, a.useEffect)(() => ke(f)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    gu(e, () => {
                                        p();
                                    });
                                };
                                let t = mu;
                                const n = () => {
                                    (t(), (t = ke(f)));
                                };
                                return (
                                    e.events.on('recalculateContent', f),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', f),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!E.pending) return;
                                const u = s.O.client.events.mouse.up(() => {
                                        g(Eu);
                                    }),
                                    t = s.O.client.events.mouse.move(([u]) => {
                                        gu(e, (t) => {
                                            const r = c.current,
                                                a = d.current,
                                                o = e.getContainerSize();
                                            if (!r || !a || !o) return;
                                            const i = u.screenY - E.offset - r.getBoundingClientRect().y,
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
                            }, [e, E.offset, E.pending, n, g]));
                        const D = Ne((u) => e.applyStepTo(u), _, [e]),
                            B = D[0],
                            b = D[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', b, !0),
                                () => document.removeEventListener('mouseup', b, !0)
                            ),
                            [b],
                        );
                        const C = (e) => {
                            e.target.classList.contains(_u) || M('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: F()(au, u.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: F()(iu, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(_u) || 0 !== e.button || (M('play'), B(Pe.Next));
                                },
                                ref: i,
                                onMouseEnter: C,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: F()(lu, u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        if (n && 0 === u.button)
                                            if ((M('play'), u.target === n))
                                                g({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    d.current &&
                                                        gu(e, (n) => {
                                                            if (!n) return;
                                                            const r = t(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? Pe.Prev : Pe.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: C,
                                },
                                o().createElement('div', { ref: d, className: F()(cu, u.thumb) }),
                                o().createElement('div', { className: F()(du, u.rail) }),
                            ),
                            o().createElement('div', {
                                className: F()(su, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(_u) || 0 !== e.button || (M('play'), B(Pe.Prev));
                                },
                                onMouseUp: b,
                                ref: l,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    pu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    fu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: i,
                        scrollClassNames: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: F()(pu.base, e.base) });
                            }, [n]),
                            _ = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: F()(pu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: F()(pu.area, r) },
                                o().createElement(Du, { className: i, classNames: s, api: _ }, e),
                            ),
                            o().createElement(hu, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    Du = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, a.useEffect)(() => ke(n.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: F()(pu.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: F()(pu.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                Du.Default = fu;
                const Bu = { Vertical: r, Horizontal: n };
                function bu(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                const Cu = [
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
                function vu(e) {
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
                const wu = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: U.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    yu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            i = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            _ = void 0 !== d && d,
                            m = e.decoratorId,
                            E = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            g = void 0 === A || A,
                            F = e.targetId,
                            h = void 0 === F ? 0 : F,
                            p = e.onShow,
                            f = e.onHide,
                            D = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Cu);
                        const B = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, a.useMemo)(
                                () =>
                                    h ||
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
                                [h],
                            ),
                            C = (0, a.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (wu(t, E, { isMouseEvent: !0, on: !0, arguments: vu(n) }, b),
                                    p && p(),
                                    (B.current.isVisible = !0));
                            }, [t, E, n, b, p]),
                            v = (0, a.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        wu(t, E, { on: !1 }, b),
                                        B.current.isVisible && f && f(),
                                        (B.current.isVisible = !1));
                                }
                            }, [t, E, b, f]),
                            w = (0, a.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(B.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        ((0, a.useEffect)(() => {
                            const e = B.current.hideTimerId;
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
                            ));
                        return g
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(B.current.timeoutId),
                                                      (B.current.timeoutId = window.setTimeout(C, c ? 100 : 400)),
                                                      r && r(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (v(), null == o || o(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === _ && v(), null == s || s(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === _ && v(), null == i || i(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      D,
                                  ),
                              )
                            : u;
                        var y;
                    },
                    xu = ['children'];
                function ku() {
                    return (
                        (ku =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ku.apply(this, arguments)
                    );
                }
                const Su = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, xu);
                        return o().createElement(
                            yu,
                            ku(
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
                    Lu = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                const Nu = R.views.common.tooltip_window.simple_tooltip_content,
                    Mu = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            r = e.note,
                            i = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Lu);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: n, note: r, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, n, r, s]);
                        return o().createElement(
                            yu,
                            Tu(
                                {
                                    contentId:
                                        ((d = null == s ? void 0 : s.hasHtmlContent),
                                        d ? Nu.SimpleTooltipHtmlContent('resId') : Nu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
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
                const Ru = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = o().createElement('div', { className: t }, e);
                    if (u.header || u.body) return o().createElement(Mu, u, n);
                    const r = u.contentId;
                    return r ? o().createElement(yu, Ou({}, u, { contentId: r }), n) : o().createElement(Su, u, n);
                };
                var Iu = t(45);
                const Pu = {
                    base: 'ExtendedText_base_71',
                    base__zeroPadding: 'ExtendedText_base__zeroPadding_25',
                    base__isTruncationAvailable: 'ExtendedText_base__isTruncationAvailable_5b',
                    truncated: 'ExtendedText_truncated_97',
                    truncated__hide: 'ExtendedText_truncated__hide_31',
                    unTruncated: 'ExtendedText_unTruncated_b8',
                    tooltip: 'ExtendedText_tooltip_91',
                    'tooltip__justify-flex-start': 'ExtendedText_tooltip__justify-flex-start_00',
                    'tooltip__justify-center': 'ExtendedText_tooltip__justify-center_08',
                    'tooltip__justify-flex-end': 'ExtendedText_tooltip__justify-flex-end_90',
                    'tooltip__align-flex-start': 'ExtendedText_tooltip__align-flex-start_40',
                    'tooltip__align-center': 'ExtendedText_tooltip__align-center_54',
                    'tooltip__align-flex-end': 'ExtendedText_tooltip__align-flex-end_d2',
                };
                let Hu, Wu, ju;
                (!(function (e) {
                    ((e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding'));
                })(Hu || (Hu = {})),
                    (function (e) {
                        ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
                    })(Wu || (Wu = {})),
                    (function (e) {
                        ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
                    })(ju || (ju = {})));
                const zu = { [ju.NBSP]: Hu.NoBreakSymbol, [ju.ZWNBSP]: Hu.NoBreakSymbol, [ju.NEW_LINE]: Hu.LineBreak },
                    Gu = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    Vu = {
                        blackReal: 'colors_blackReal_fc',
                        whiteReal: 'colors_whiteReal_31',
                        white: 'colors_white_45',
                        whiteOrange: 'colors_whiteOrange_81',
                        whiteSpanish: 'colors_whiteSpanish_c3',
                        par: 'colors_par_5b',
                        parSecondary: 'colors_parSecondary_fd',
                        parTertiary: 'colors_parTertiary_97',
                        red: 'colors_red_79',
                        redDark: 'colors_redDark_73',
                        yellow: 'colors_yellow_76',
                        orange: 'colors_orange_cd',
                        cream: 'colors_cream_0f',
                        brown: 'colors_brown_82',
                        greenBright: 'colors_greenBright_68',
                        green: 'colors_green_fa',
                        greenDark: 'colors_greenDark_a9',
                        blueBooster: 'colors_blueBooster_26',
                        blueTeamkiller: 'colors_blueTeamkiller_86',
                        cred: 'colors_cred_35',
                        gold: 'colors_gold_c3',
                        bond: 'colors_bond_ce',
                        prom: 'colors_prom_83',
                    },
                    $u = 'renderers_noBreakWrapper_10',
                    Uu = 'renderers_lineBreak_b5',
                    qu = 'renderers_newLine_bd',
                    Ku = 'renderers_word_f3',
                    Yu = (e) => ({ color: `#${e}` }),
                    Xu = ({ elementList: e, textBlock: u, key: t }) => {
                        const n = u.colorTag;
                        return n
                            ? Vu[n]
                                ? o().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: F()(Ku, Vu[n]) },
                                      e,
                                  )
                                : o().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: Ku, style: Yu(n) },
                                      e,
                                  )
                            : o().createElement('span', { key: t, 'data-block-type': u.blockType, className: Ku }, e);
                    },
                    Zu = {
                        [Hu.Word]: Xu,
                        [Hu.NoBreakSymbol]: Xu,
                        [Hu.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            o().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => o().createElement(o().Fragment, { key: t }, e)),
                            ),
                        [Hu.LineBreak]: ({ key: e }) =>
                            o().createElement('span', { key: e, 'data-block-type': Hu.LineBreak, className: Uu }),
                        [Hu.NewLine]: ({ elementList: e, key: u }) =>
                            o().createElement('span', { key: u, 'data-block-type': Hu.NewLine, className: qu }, e),
                        [Hu.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            o().createElement(
                                'span',
                                { key: u, 'data-block-type': Hu.NoBreakWrapper, className: $u },
                                e,
                            ),
                    },
                    Qu = (e, u, t) => {
                        const n = [];
                        return (
                            e.childList.forEach((r, a) => {
                                const o = `${t}_${a}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        u = e.blockType,
                                        t = Qu(e, Zu[u], o);
                                    n.push(...t);
                                } else n.push(u({ elementList: [r], textBlock: e, key: o }));
                            }),
                            n
                        );
                    },
                    Ju = (e) => {
                        const u = [];
                        return (
                            e.forEach((e, t) => {
                                u.push(
                                    ...((e, u) => {
                                        const t = [],
                                            n = e.blockType,
                                            r = Zu[n],
                                            a = Qu(e, r, u);
                                        return (
                                            n === Hu.NoBreakWrapper
                                                ? t.push(r({ elementList: a, textBlock: e, key: `${u}` }))
                                                : t.push(...a),
                                            t
                                        );
                                    })(e, t),
                                );
                            }),
                            u
                        );
                    },
                    et = (e, u, t, n) => {
                        let r = u.exec(e),
                            a = 0;
                        for (; r; ) (a !== r.index && t(e.slice(a, r.index)), n(r), (a = u.lastIndex), (r = u.exec(e)));
                        a !== e.length && t(e.slice(a));
                    },
                    ut = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    tt = (e) => {
                        const u = [];
                        return (
                            et(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var t;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? u.push(...((t = e), t.match(ut) || []))
                                        : u.push(...e.split(''));
                                },
                                (e) => {
                                    u.push(e[0]);
                                },
                            ),
                            u
                        );
                    },
                    nt = Gu
                        ? (e) => {
                              const u = [];
                              return (
                                  et(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          u.push(e);
                                      },
                                      (e) => {
                                          u.push(...tt(e[0]));
                                      },
                                  ),
                                  u
                              );
                          }
                        : (e, u) => {
                              const t = /[\s\u002d]/g;
                              let n = t.exec(e);
                              if (!n) return [e];
                              const r = [];
                              let a = 0;
                              for (; n; ) {
                                  const o = u.justifyContent === Wu.FlexEnd ? n.index : t.lastIndex;
                                  (r.push(e.slice(a, o)), (a = o), (n = t.exec(e)));
                              }
                              return (a !== e.length && r.push(e.slice(a)), r);
                          },
                    rt = (e, u = '', t) => {
                        const n = [];
                        return (
                            et(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: Hu.Word, colorTag: u, childList: nt(e, t) });
                                },
                                (e) => {
                                    const t = e[0],
                                        r = zu[t.charAt(0)];
                                    r === Hu.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: Hu.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: Hu.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(t),
                                          )
                                        : n.push({ blockType: r, colorTag: u, childList: [t.replace(/\ufeff+/g, '')] });
                                },
                            ),
                            n
                        );
                    },
                    at = (e, u, t = '', n) => {
                        const r = [],
                            a = e.replace(/(.)(、|。|ー)/g, '$1\ufeff$2');
                        return (
                            et(
                                a,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...rt(e, t, n));
                                },
                                (e) => {
                                    const a = e[1],
                                        o = void 0 === u[a] ? e[0] : u[a];
                                    'string' == typeof o || 'number' == typeof o
                                        ? r.push(...rt(String(o), t, n))
                                        : r.push({ blockType: Hu.Binding, colorTag: t, childList: [o] });
                                },
                            ),
                            r
                        );
                    },
                    ot = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            n = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === Hu.NoBreakWrapper) (e.childList.push(n), t.push(e));
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            (e.childList.length > 0 && t.push(e),
                                t.push({ blockType: Hu.NoBreakWrapper, colorTag: '', childList: [u, n] }));
                        }
                        return (u.childList.length > 0 && t.push(u), t);
                    },
                    it = (e, u = {}, t) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Hu.NoBreakSymbol
                                        ? ((t = !0), u.push(...ot(u.pop(), e)))
                                        : (t ? u.push(...ot(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u, t) => {
                                const n = [];
                                return (
                                    et(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...at(e, u, '', t));
                                        },
                                        (e) => {
                                            n.push(...at(e[2] + e[3], u, e[1], t));
                                        },
                                    ),
                                    n
                                );
                            })(ue(e).replace(/&zwnbsp;/g, '\ufeff'), u, t),
                        );
                        return Ju(n);
                    },
                    st = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    lt = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    ct = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const n = lt(e, u),
                            r = e.textContent.length,
                            a = e.offsetWidth / r,
                            o = Math.ceil(n / a);
                        if (n > 0) {
                            const n = Math.floor((u - e.offsetLeft) / a);
                            return n >= t ? [!0, t + o] : [!1, n];
                        }
                        const i = Math.max(t + o, 0);
                        return r < i ? [!1, 0] : [!0, i];
                    },
                    dt = (e, u, t, n, r, a) => {
                        let i = -1,
                            s = null;
                        for (let l = t; l >= 0; l--) {
                            const t = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === Hu.LineBreak || c === Hu.NewLine || c === Hu.Binding) continue;
                            const d = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = ct(t, n, r),
                                    c = e[0],
                                    _ = e[1];
                                if (!c) {
                                    _ > 0 && (r -= _);
                                    continue;
                                }
                                const m = d.slice(0, d.length - _) + a,
                                    E = u[l];
                                ((s = o().cloneElement(E, E.props, m)), (i = l));
                                break;
                            }
                            {
                                const e = t.children,
                                    c = u[l],
                                    _ = c.props.children,
                                    m = dt(e, _, e.length - 1, n, r, a),
                                    E = m[0],
                                    A = m[1];
                                if (!(E < 0)) {
                                    const e = _.slice(0, E);
                                    ((s = o().cloneElement(c, c.props, e, A)), (i = l));
                                    break;
                                }
                                r -= d.length;
                            }
                        }
                        return [i, s];
                    },
                    _t = (e, u, t, n = '...') => {
                        const r = [...u],
                            a = e.current;
                        if (!a) return [r, !1];
                        const o = t.height,
                            i = t.width,
                            s = a.lastElementChild;
                        if (!st(s, o) && lt(s, i) <= 0) return [r, !1];
                        const l = a.children,
                            c = ((e, u) => {
                                let t = 0,
                                    n = e.length - 1;
                                for (; n - t >= 0; ) {
                                    const r = t + Math.ceil(0.5 * (n - t));
                                    st(e[r], u) ? (n = r - 1) : (t = r + 1);
                                }
                                return t - 1;
                            })(l, o);
                        if (c < 0) return [r, !1];
                        const d = dt(l, r, c, i, n.length, n),
                            _ = d[0],
                            m = d[1];
                        return (m && (r.splice(_, 1, m), r.splice(_ + 1)), [r, !0]);
                    },
                    mt = o().memo(
                        ({
                            text: e,
                            classMix: u,
                            onSizeChanged: t,
                            binding: n,
                            isTooltipEnable: r = !1,
                            isTruncationAvailable: i = !1,
                            customTooltipArgs: s,
                            targetId: l,
                            justifyContent: c = Wu.FlexStart,
                            alignContent: d = Wu.FlexStart,
                            truncateIdentify: _ = '...',
                        }) => {
                            const m = (0, a.useRef)(null),
                                E = (0, a.useRef)({ height: 0, width: 0 }),
                                A = (0, a.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                g = A[0],
                                h = A[1],
                                p = (0, a.useMemo)(() => it(e, n, { justifyContent: c }), [n, c, e]),
                                f = (0, a.useMemo)(() => {
                                    if (
                                        r &&
                                        g.isTruncated &&
                                        (!n || !Object.values(n).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, s, {
                                                stringifyKwargs: n ? JSON.stringify(n) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [n, r, l, e, s, g.isTruncated]),
                                D = (0, a.useCallback)(
                                    (e) => {
                                        ((E.current.width = e.contentRect.width),
                                            (E.current.height = e.contentRect.height));
                                        const u = _t(m, p, E.current, _),
                                            n = u[0],
                                            r = u[1];
                                        (h({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), t && t(r));
                                    },
                                    [t, _, p],
                                ),
                                B = (0, a.useMemo)(() => ({ justifyContent: c, alignContent: d }), [d, c]);
                            return (
                                ((e, u, t = !0) => {
                                    const n = (0, a.useCallback)(
                                        (e) => {
                                            const t = e[0];
                                            u && u(t);
                                        },
                                        [u],
                                    );
                                    (0, a.useEffect)(() => {
                                        if (!e.current || !t) return;
                                        const u = new Iu.Z((e) => n(e));
                                        return (
                                            u.observe(e.current),
                                            () => {
                                                u.disconnect();
                                            }
                                        );
                                    }, [n, t, e]);
                                })(m, D, i),
                                o().createElement(
                                    'div',
                                    {
                                        className: F()(
                                            Pu.base,
                                            u,
                                            Pu.base__zeroPadding,
                                            i && Pu.base__isTruncationAvailable,
                                        ),
                                        style: B,
                                    },
                                    o().createElement('div', { className: Pu.unTruncated, ref: m }, p),
                                    o().createElement(
                                        Ru,
                                        {
                                            tooltipArgs: f,
                                            className: F()(
                                                Pu.tooltip,
                                                Pu[`tooltip__justify-${c}`],
                                                Pu[`tooltip__align-${d}`],
                                            ),
                                        },
                                        o().createElement(
                                            'div',
                                            {
                                                className: F()(
                                                    Pu.truncated,
                                                    !g.isTruncateFinished && i && Pu.truncated__hide,
                                                ),
                                                style: B,
                                            },
                                            g.isTruncateFinished && i ? g.elementList : p,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                let Et;
                !(function (e) {
                    ((e[(e.none = 0)] = 'none'),
                        (e[(e.increase = 1)] = 'increase'),
                        (e[(e.decrease = 2)] = 'decrease'),
                        (e[(e.mixed = 3)] = 'mixed'));
                })(Et || (Et = {}));
                const At = {
                        base: 'BuffIcon_base_c8',
                        base__increase: 'BuffIcon_base__increase_60',
                        base__decrease: 'BuffIcon_base__decrease_31',
                        base__mixed: 'BuffIcon_base__mixed_23',
                    },
                    gt = o().memo(function ({ buffIconType: e, className: u }) {
                        return e === Et.none
                            ? null
                            : o().createElement('div', { className: F()(At.base, At[`base__${Et[e]}`], u) });
                    }),
                    Ft = 'Delta_base_3e',
                    ht = 'Delta_base__positive_82',
                    pt = 'Delta_base__negative_86',
                    ft = o().memo(function ({ isPositive: e, width: u, shift: t, isUseAnim: n }) {
                        const r = (0, Ie.useSpring)({
                                from: { left: 0, width: 0 },
                                left: e ? 0 : u,
                                width: e ? 0 : Math.abs(u),
                                config: { duration: kt },
                                delay: e ? 0 : kt,
                                immediate: !n,
                            }),
                            a = (0, Ie.useSpring)({
                                from: { left: 2, width: 0 },
                                left: 2 + t,
                                width: e ? u : 0,
                                config: { duration: kt },
                                delay: e || 0 === u ? kt : 0,
                                immediate: !n,
                            });
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(Ie.animated.div, { className: F()(Ft, pt), style: r }),
                            o().createElement(Ie.animated.div, { className: F()(Ft, ht), style: a }),
                        );
                    }),
                    Dt = 'Indicator_base_b9',
                    Bt = 'Indicator_progress_ce',
                    bt = 'Indicator_progressMarker_b4',
                    Ct = 'Indicator_indicator_bc',
                    vt = 'Indicator_indicator__start_80',
                    wt = 'Indicator_indicator__end_3b',
                    yt = 'Indicator_marker_f7',
                    xt = 'Indicator_valueLine_1d',
                    kt = 300,
                    St = o().memo(function ({
                        minValue: e,
                        maxValue: u,
                        value: t,
                        markerValue: n,
                        delta: r,
                        isUseAnim: a,
                    }) {
                        const i = n === e ? 2 : (n / u) * 254,
                            s = (t / u) * 254,
                            l = (r / u) * 254,
                            c = r > 0,
                            d = { config: { duration: kt }, immediate: !a },
                            _ = (0, Ie.useSpring)(Object.assign({ from: { left: 2 }, to: { left: i }, delay: kt }, d)),
                            m = (0, Ie.useSpring)(
                                Object.assign({ from: { width: e }, to: { width: s }, delay: kt }, d),
                            );
                        return o().createElement(
                            'div',
                            { className: Dt },
                            o().createElement(
                                'div',
                                { className: Bt },
                                o().createElement('div', { className: F()(Ct, vt) }),
                                o().createElement(Ie.animated.div, { className: xt, style: m }),
                                o().createElement(
                                    'div',
                                    { className: bt },
                                    o().createElement(
                                        Ie.animated.div,
                                        { className: yt, style: _ },
                                        o().createElement(ft, {
                                            isPositive: c,
                                            width: l,
                                            shift: s - l - i,
                                            isUseAnim: a,
                                        }),
                                    ),
                                ),
                                o().createElement('div', { className: F()(Ct, wt) }),
                            ),
                        );
                    });
                let Lt;
                !(function (e) {
                    ((e.None = 'none'),
                        (e.Increase = 'increase'),
                        (e.Decrease = 'decrease'),
                        (e.Situational = 'situational'));
                })(Lt || (Lt = {}));
                const Tt = (e) => -(Math.cos(Math.PI * e) - 1) / 2,
                    Nt = {
                        base: 'Param_base_51',
                        valueWrapper: 'Param_valueWrapper_85',
                        value: 'Param_value_51',
                        icon: 'Param_icon_37',
                        name: 'Param_name_82',
                        highlight: 'Param_highlight_81',
                        highlight__increase: 'Param_highlight__increase_35',
                        highlight__decrease: 'Param_highlight__decrease_ec',
                        highlight__situational: 'Param_highlight__situational_db',
                    },
                    Mt = o().memo(function ({
                        id: e,
                        value: u,
                        tooltipID: t,
                        isEnabled: n,
                        highlightType: r,
                        name: i,
                    }) {
                        const s = (0, Ie.useSpring)(() => ({ from: { opacity: 0 } })),
                            l = s[0],
                            c = s[1],
                            d = r !== Lt.None;
                        return (
                            (0, a.useEffect)(() => {
                                d &&
                                    c.start({
                                        from: { opacity: 0 },
                                        to: [{ opacity: 1 }, { opacity: 0 }],
                                        delay: 100,
                                        config: { duration: 300, easing: Tt },
                                    });
                            }, [u, c, d]),
                            o().createElement(
                                Su,
                                {
                                    args: { tooltipId: t, paramId: e },
                                    targetId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                    isEnabled: n,
                                },
                                o().createElement(
                                    'div',
                                    { className: Nt.base },
                                    o().createElement(
                                        'div',
                                        { className: Nt.valueWrapper },
                                        o().createElement(mt, {
                                            justifyContent: Wu.FlexEnd,
                                            classMix: Nt.value,
                                            text: u,
                                        }),
                                    ),
                                    o().createElement('div', {
                                        className: Nt.icon,
                                        style: {
                                            backgroundImage: `url('R.images.gui.maps.icons.vehParams.small.${e}')`,
                                        },
                                    }),
                                    o().createElement(
                                        'div',
                                        { className: Nt.name },
                                        i || R.strings.menu.tank_params.$dyn(e),
                                    ),
                                    d &&
                                        o().createElement(Ie.animated.div, {
                                            className: F()(Nt.highlight, Nt[`highlight__${r}`]),
                                            style: l,
                                        }),
                                ),
                            )
                        );
                    }),
                    Ot = 'Group_base_66',
                    Rt = 'Group_group_07',
                    It = 'Group_hoverBg_97',
                    Pt = 'Group_hoverBg__scrollable_2a',
                    Ht = 'Group_groupHeader_f5',
                    Wt = 'Group_name_21',
                    jt = 'Group_arrow_96',
                    zt = 'Group_arrow__opened_47',
                    Gt = 'Group_params_88',
                    Vt = 'Group_params__opened_9a',
                    $t = 'Group_separator_b5',
                    Ut = 'Group_right_13',
                    qt = 'Group_situational_55',
                    Kt = 'Group_buff_fa',
                    Yt = 'Group_value_00',
                    Xt = 'Group_value__additional_81';
                function Zt() {
                    return (
                        (Zt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Zt.apply(this, arguments)
                    );
                }
                const Qt = (0, X.Pi)(
                        ({
                            id: e,
                            isOpen: u,
                            params: t,
                            extraParams: n,
                            tooltipID: r,
                            indicator: a,
                            value: i,
                            additionalValue: s,
                            buffIconType: l,
                            isEnabled: c,
                            isScrollable: d,
                            isSituational: _,
                        }) => {
                            const m = xe().controls,
                                E = n && n.length > 0;
                            return o().createElement(
                                'div',
                                { className: Ot },
                                o().createElement(
                                    Su,
                                    {
                                        args: { tooltipId: r, paramId: e },
                                        targetId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                        isEnabled: c,
                                    },
                                    o().createElement(
                                        'div',
                                        {
                                            className: Rt,
                                            onClick: () => m.onGroupClick(e),
                                            onMouseEnter: O.playHighlight,
                                        },
                                        o().createElement('div', { className: F()(It, d && Pt) }),
                                        o().createElement(
                                            'div',
                                            { className: Ht },
                                            o().createElement('div', { className: F()(jt, u && zt) }),
                                            o().createElement(
                                                'div',
                                                { className: Wt },
                                                R.strings.menu.tank_params.$dyn(e),
                                            ),
                                            o().createElement(
                                                'div',
                                                { className: Ut },
                                                _ && o().createElement('div', { className: qt }),
                                                o().createElement(gt, { buffIconType: l, className: Kt }),
                                                s && o().createElement(mt, { classMix: F()(Yt, Xt), text: s }),
                                                o().createElement(mt, { classMix: Yt, text: i }),
                                            ),
                                        ),
                                        o().createElement(St, a),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: F()(Gt, u && Vt) },
                                    bu(t, (e) => o().createElement(Mt, Zt({ key: e.id }, e))),
                                    E && o().createElement('div', { className: $t }),
                                    bu(n, (e) => o().createElement(Mt, Zt({ key: e.id }, e))),
                                ),
                            );
                        },
                    ),
                    Jt = {
                        base: 'VehicleParams_base_3b',
                        base__bg: 'VehicleParams_base__bg_c4',
                        scroll: 'VehicleParams_scroll_59',
                        content: 'VehicleParams_content_09',
                        barBase: 'VehicleParams_barBase_6f',
                    };
                function en() {
                    return (
                        (en =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        en.apply(this, arguments)
                    );
                }
                const un = {
                        settings: {
                            step: { type: 'fixed', value: 48, clampedArrowStepTimeout: 0 },
                            animationConfig: { tension: 0, friction: 0 },
                        },
                    },
                    tn = (0, X.Pi)(({ showBackground: e = !0, className: u }) => {
                        const t = xe().model,
                            n = (0, a.useState)(!1),
                            r = n[0],
                            i = n[1],
                            s = t.groups.get(),
                            l = ru(un);
                        return (
                            (0, a.useEffect)(() => {
                                const e = () => {
                                    const e = l.getContainerSize(),
                                        u = l.getWrapperSize();
                                    e && u && i(e > u);
                                };
                                return (
                                    l.events.on('recalculateContent', e),
                                    () => {
                                        l.events.off('recalculateContent', e);
                                    }
                                );
                            }, [l]),
                            o().createElement(
                                'div',
                                { className: F()(Jt.base, e && Jt.base__bg, u) },
                                o().createElement(
                                    Bu.Vertical.Area.Default,
                                    {
                                        api: l,
                                        barClassNames: { base: Jt.barBase },
                                        scrollClassName: Jt.scroll,
                                        scrollClassNames: { content: Jt.content },
                                    },
                                    o().createElement(
                                        'div',
                                        { className: Jt.groups },
                                        bu(s, (e) => o().createElement(Qt, en({ key: e.id }, e, { isScrollable: r }))),
                                    ),
                                ),
                            )
                        );
                    }),
                    nn = (0, a.memo)(function (e) {
                        const u = (0, a.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                        return o().createElement(ye, { options: u }, o().createElement(tn, e));
                    });
                var rn = t(946);
                const an = De()(
                        ({ observableModel: e }) => {
                            const u = Object.assign({}, e.primitives(['isActionsDisable']), {
                                    majorSkillRows: e.array('majorSkillRows'),
                                    bonusSkillRows: e.array('bonusSkillRows'),
                                    vehicleInfo: e.object('vehicleInfo'),
                                }),
                                t = (0, rn.Om)(() =>
                                    bu(u.majorSkillRows.get(), (e) =>
                                        Object.assign({}, e, {
                                            commonSkills: bu(e.commonSkills, (e) => Object.assign({}, e)),
                                            skills: bu(e.skills, (e) => Object.assign({}, e)),
                                        }),
                                    ),
                                ),
                                n = (0, rn.Om)(() =>
                                    bu(u.bonusSkillRows.get(), (e) =>
                                        Object.assign({}, e, {
                                            skills: bu(e.skills, (e) => Object.assign({}, e)),
                                            commonSkills: bu(e.commonSkills, (e) => Object.assign({}, e)),
                                        }),
                                    ),
                                );
                            return Object.assign({}, u, { computes: { getMajorSkillRows: t, getBonusSkillRows: n } });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            cancel: e.createCallbackNoArgs('onCancel'),
                            confirm: e.createCallbackNoArgs('onConfirm'),
                            restore: e.createCallbackNoArgs('onRestore'),
                            click: e.createCallback(
                                (e, u, t) => ({ rowIndex: e, skillIndex: u, skillType: t }),
                                'onClick',
                            ),
                        }),
                    ),
                    on = an[0],
                    sn = an[1],
                    ln = {
                        base: 'RoleIcon_base_51',
                        base__small: 'RoleIcon_base__small_68',
                        base__c_14x14: 'RoleIcon_base__c_14x14_8f',
                        base__c_18x18: 'RoleIcon_base__c_18x18_0b',
                        base__c_24x24_new: 'RoleIcon_base__c_24x24_new_fe',
                        base__c_24x24: 'RoleIcon_base__c_24x24_52',
                        base__c_30x30_red: 'RoleIcon_base__c_30x30_red_85',
                        base__c_30x30: 'RoleIcon_base__c_30x30_e9',
                        base__c_40x40: 'RoleIcon_base__c_40x40_99',
                        base__medium: 'RoleIcon_base__medium_5d',
                        base__white: 'RoleIcon_base__white_2a',
                        base__big: 'RoleIcon_base__big_b4',
                    };
                let cn;
                !(function (e) {
                    ((e.small = 'small'),
                        (e.c14x14 = 'c_14x14'),
                        (e.c18x18 = 'c_18x18'),
                        (e.c24x24 = 'c_24x24'),
                        (e.c24x24_new = 'c_24x24_new'),
                        (e.c30x30 = 'c_30x30'),
                        (e.c40x40 = 'c_40x40'),
                        (e.c30x30_red = 'c_30x30_red'),
                        (e.medium = 'medium'),
                        (e.white = 'white'),
                        (e.big = 'big'));
                })(cn || (cn = {}));
                const dn = o().memo(function ({ role: e, size: u = cn.c30x30, className: t }) {
                    const n = (0, a.useMemo)(() => {
                        try {
                            var t;
                            const n =
                                null == (t = R.images.gui.maps.icons.tankmen.roles.$dyn(u)) ? void 0 : t.$dyn(J(e));
                            if (!n) throw Error;
                            return { backgroundImage: `url(${n})` };
                        } catch (u) {
                            console.error('Cant find resource in RoleIcon: ', e);
                        }
                    }, [e, u]);
                    return o().createElement('div', { style: n, className: F()(ln.base, ln[`base__${u}`], t) });
                });
                let _n, mn;
                (!(function (e) {
                    ((e.Default = 'default'), (e.Selected = 'selected'), (e.Disabled = 'disabled'));
                })(_n || (_n = {})),
                    (function (e) {
                        ((e.Major = 'major'), (e.Common = 'common'), (e.Bonus = 'bonus'));
                    })(mn || (mn = {})));
                const En = {
                    base: 'SkillIcon_base_43',
                    base__c_22x22: 'SkillIcon_base__c_22x22_14',
                    base__medium: 'SkillIcon_base__medium_d0',
                    base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                    base__big: 'SkillIcon_base__big_ae',
                    base__c_80x80: 'SkillIcon_base__c_80x80_79',
                    base__c_120x90: 'SkillIcon_base__c_120x90_8c',
                    base__dialogs: 'SkillIcon_base__dialogs_e5',
                };
                let An;
                !(function (e) {
                    ((e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c80x80 = 'c_80x80'),
                        (e.c120x90 = 'c_120x90'),
                        (e.c180x135 = 'dialogs'));
                })(An || (An = {}));
                const gn = o().memo(function ({ iconName: e, size: u = An.c24x24, className: t }) {
                        var n;
                        const r = null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(u)) ? void 0 : n.$dyn(e);
                        return o().createElement('div', {
                            style: null !== r ? { backgroundImage: `url(${r})` } : void 0,
                            className: F()(En.base, En[`base__${u}`], t),
                        });
                    }),
                    Fn = {
                        base: 'SkillWithIcon_base_9c',
                        base__disabled: 'SkillWithIcon_base__disabled_dd',
                        base__bonus: 'SkillWithIcon_base__bonus_44',
                        base__selected: 'SkillWithIcon_base__selected_f2',
                        selectedCover: 'SkillWithIcon_selectedCover_ac',
                        base__major: 'SkillWithIcon_base__major_65',
                        hoverHelper: 'SkillWithIcon_hoverHelper_5b',
                        disableCover: 'SkillWithIcon_disableCover_db',
                    },
                    hn = (0, X.Pi)(
                        ({
                            isMajor: e,
                            name: u,
                            roleName: t,
                            state: n,
                            skillIndex: r,
                            rowIndex: a,
                            tankmanIdx: i,
                            skillType: l,
                            className: c,
                        }) => {
                            const d = sn().controls;
                            return o().createElement(
                                Su,
                                { args: { tooltipId: 'crewPerkGf', tankmanID: i, skillName: u, roleName: t } },
                                o().createElement(
                                    'div',
                                    {
                                        onClick: () => {
                                            (n !== _n.Disabled && s.O.sound.play.click(), d.click(a, r, l));
                                        },
                                        className: F()(
                                            Fn.base,
                                            e ? Fn.base__major : Fn.base__bonus,
                                            Fn[`base__${n}`],
                                            c,
                                        ),
                                        key: r,
                                        onMouseEnter: s.O.sound.play.highlight,
                                    },
                                    o().createElement('div', { className: Fn.hoverHelper }),
                                    n === _n.Selected && o().createElement('div', { className: Fn.selectedCover }),
                                    n === _n.Disabled && o().createElement('div', { className: Fn.disableCover }),
                                    o().createElement(gn, { iconName: u, size: An.c52x52 }),
                                ),
                            );
                        },
                    ),
                    pn = 'SkillWrapper_base_f5',
                    fn = 'SkillWrapper_skillWithIcon_8a';
                function Dn() {
                    return (
                        (Dn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Dn.apply(this, arguments)
                    );
                }
                const Bn = ({ row: e, isMajor: u = !1, rowIndex: t, isCommon: n = !1, className: r }) => {
                        const a = n ? e.commonSkills : e.skills,
                            i = u ? mn.Major : mn.Bonus;
                        return o().createElement(
                            'div',
                            { className: F()(pn, r) },
                            bu(a, (r, a) =>
                                o().createElement(
                                    hn,
                                    Dn({ className: fn, key: a }, r, {
                                        skillIndex: a,
                                        rowIndex: t,
                                        tankmanIdx: e.tankmanIdx,
                                        skillType: n ? mn.Common : i,
                                        isMajor: u,
                                    }),
                                ),
                            ),
                        );
                    },
                    bn = {
                        base: 'SkillRowComponent_base_d9',
                        skillWrapper: 'SkillRowComponent_skillWrapper_18',
                        roleIconHolder: 'SkillRowComponent_roleIconHolder_7a',
                        roleIconHolder__bonus: 'SkillRowComponent_roleIconHolder__bonus_ff',
                        roleIcon: 'SkillRowComponent_roleIcon_4a',
                        numberOfSelectedText: 'SkillRowComponent_numberOfSelectedText_b8',
                        numberSelected: 'SkillRowComponent_numberSelected_1f',
                        skillWrapper__common: 'SkillRowComponent_skillWrapper__common_7a',
                    },
                    Cn = ({ isMajor: e, row: u, rowIndex: t }) =>
                        o().createElement(
                            'div',
                            { className: bn.base },
                            o().createElement(
                                'div',
                                { className: F()(bn.roleIconHolder, !e && bn.roleIconHolder__bonus) },
                                o().createElement(dn, { className: bn.roleIcon, size: cn.c24x24, role: u.role }),
                                o().createElement(
                                    'div',
                                    { className: bn.numberOfSelectedText },
                                    o().createElement(mt, {
                                        text: R.strings.common.progress(),
                                        classMix: bn.selectedPointsProgress,
                                        binding: {
                                            current: o().createElement(
                                                'div',
                                                { className: bn.numberSelected },
                                                u.selectedAmount,
                                            ),
                                            total: u.possibleMaxSelected,
                                        },
                                    }),
                                ),
                            ),
                            o().createElement(Bn, { row: u, rowIndex: t, className: bn.skillWrapper, isMajor: e }),
                            u.commonSkills.length > 0 &&
                                o().createElement(Bn, {
                                    row: u,
                                    rowIndex: t,
                                    className: F()(bn.skillWrapper, bn.skillWrapper__common),
                                    isMajor: e,
                                    isCommon: !0,
                                }),
                        ),
                    vn = 'MainContent_base_62',
                    wn = 'MainContent_scrollArea_c1',
                    yn = 'MainContent_title_8c',
                    xn = 'MainContent_title__bonus_6f',
                    kn = (0, X.Pi)(() => {
                        const e = sn().model,
                            u = ru(),
                            t = e.bonusSkillRows.get();
                        return o().createElement(
                            'div',
                            { className: vn },
                            o().createElement(
                                'div',
                                { className: yn },
                                R.strings.veh_compare.skillSelect.majorSkills(),
                            ),
                            o().createElement(
                                Bu.Vertical.Area.Default,
                                { api: u, className: wn },
                                bu(e.majorSkillRows.get(), (e, u) =>
                                    o().createElement(Cn, { key: u, row: e, rowIndex: u, isMajor: !0 }),
                                ),
                                t.length > 0 &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(
                                            'div',
                                            { className: F()(yn, xn) },
                                            R.strings.veh_compare.skillSelect.bonusSkills(),
                                        ),
                                        bu(t, (e, u) =>
                                            o().createElement(Cn, { key: u, row: e, rowIndex: u, isMajor: !1 }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    Sn = 'TitleContent_base_3b',
                    Ln = 'TitleContent_information_1b',
                    Tn = ({ vehicleName: e }) => {
                        return o().createElement(
                            'div',
                            { className: Sn },
                            ((u = R.strings.veh_compare.skillSelect.tooltip.heading()),
                            (t = { vehicleName: e }),
                            u.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                const u = 0 === e.indexOf('%') ? 2 : 1;
                                return String(t[e.slice(u, -u)]);
                            })),
                            o().createElement(
                                yu,
                                { contentId: R.views.lobby.vehicle_compare.tooltips.CrewRolesTooltip('resId') },
                                o().createElement('div', { className: Ln }),
                            ),
                        );
                        var u, t;
                    },
                    Nn = 'SkillSelectApp_base_31',
                    Mn = 'SkillSelectApp_widget_ec',
                    On = 'SkillSelectApp_centeredContent_6d',
                    Rn = 'SkillSelectApp_footer_9b',
                    In = 'SkillSelectApp_divider_15',
                    Pn = 'SkillSelectApp_buttonsRight_26',
                    Hn = 'SkillSelectApp_button_17',
                    Wn = 'SkillSelectApp_closeBtn_04';
                function jn() {
                    return (
                        (jn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        jn.apply(this, arguments)
                    );
                }
                const zn = (0, X.Pi)(() => {
                    Y();
                    const e = sn(),
                        u = e.model,
                        t = e.controls,
                        n = u.isActionsDisable.get();
                    return o().createElement(
                        'div',
                        { className: Nn },
                        o().createElement(
                            'div',
                            { className: Wn },
                            o().createElement(V, {
                                caption: R.strings.menu.viewHeader.closeBtn.label(),
                                type: 'close',
                                side: 'right',
                                onClick: t.close,
                            }),
                        ),
                        o().createElement(
                            Ae,
                            jn(
                                { isPerkTipShown: !0, tipText: R.strings.veh_compare.skillSelect.tooltipHint() },
                                u.vehicleInfo.get(),
                                { className: Mn },
                            ),
                            o().createElement(nn, {
                                showBackground: !1,
                                resId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                            }),
                        ),
                        o().createElement(Tn, { vehicleName: u.vehicleInfo.get().vehicleName }),
                        o().createElement(
                            'div',
                            { className: On },
                            o().createElement(kn, null),
                            o().createElement(
                                'div',
                                { className: Rn },
                                o().createElement('div', { className: In }),
                                o().createElement(
                                    W,
                                    { type: P.secondary, disabled: n, onClick: t.restore, mixClass: Hn },
                                    R.strings.veh_compare.skillSelect.button.restore(),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Pn },
                                    o().createElement(
                                        W,
                                        { type: P.secondary, onClick: t.cancel, mixClass: Hn },
                                        R.strings.veh_compare.skillSelect.button.cancel(),
                                    ),
                                    o().createElement(
                                        W,
                                        { disabled: n, onClick: t.confirm, mixClass: Hn },
                                        R.strings.veh_compare.skillSelect.button.addToCompare(),
                                    ),
                                ),
                            ),
                        ),
                    );
                });
                engine.whenReady.then(() => {
                    N().render(
                        o().createElement(on, null, o().createElement(L, null, o().createElement(zn, null))),
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
        (__webpack_require__.j = 588),
        (() => {
            var e = { 588: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [331], () => __webpack_require__(612));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
