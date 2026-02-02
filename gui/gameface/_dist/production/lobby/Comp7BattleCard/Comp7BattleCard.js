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
                t.d(u, { O: () => re });
                var a = {};
                (t.r(a),
                    t.d(a, { mouse: () => E, off: () => c, on: () => m, onResize: () => s, onScaleUpdated: () => l }));
                var r = {};
                (t.r(r),
                    t.d(r, {
                        events: () => a,
                        getMouseGlobalPosition: () => C,
                        getSize: () => F,
                        graphicsQuality: () => g,
                        playSound: () => A,
                        setRTPC: () => b,
                    }));
                var _ = {};
                (t.r(_), t.d(_, { getBgUrl: () => x, getTextureUrl: () => v }));
                var n = {};
                function i(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function o(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                (t.r(n),
                    t.d(n, {
                        addModelObserver: () => R,
                        addPreloadTexture: () => L,
                        arabic2roman: () => Z,
                        children: () => _,
                        displayStatus: () => w,
                        displayStatusIs: () => J,
                        enableFullScreenModeSupported: () => te,
                        events: () => N,
                        extraSize: () => ee,
                        forceTriggerMouseMove: () => K,
                        freezeTextureBeforeResize: () => $,
                        getBrowserTexturePath: () => O,
                        getDisplayStatus: () => Y,
                        getExternalPaddingsRem: () => Q,
                        getFontNames: () => X,
                        getScale: () => H,
                        getSize: () => I,
                        getViewGlobalPosition: () => P,
                        initExternalPaddings: () => ae,
                        isEventHandled: () => q,
                        isFocused: () => U,
                        pxToRem: () => z,
                        remToPx: () => j,
                        resize: () => W,
                        sendEvent: () => T,
                        setAnimateWindow: () => G,
                        setEventHandled: () => V,
                        setInputPaddingsRem: () => S,
                        setSidePaddingsRem: () => M,
                        whenTutorialReady: () => ue,
                    }));
                const s = i('clientResized'),
                    l = i('self.onScaleUpdated'),
                    m = (e, u) => engine.on(e, u),
                    c = (e, u) => engine.off(e, u),
                    d = { down: i('mousedown'), up: i('mouseup'), move: i('mousemove') },
                    E = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && o(!1);
                        }
                        function t() {
                            e.enabled && o(!0);
                        }
                        function a() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', u),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', u),
                                      document.body.addEventListener('mouseleave', t))
                                : o(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const _ = `mouse${u}`,
                                            n = d[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(_, i),
                                            a(),
                                            () => {
                                                r &&
                                                    (n(),
                                                    window.removeEventListener(_, i),
                                                    (e.listeners -= 1),
                                                    a(),
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
                                ((e.enabled = !1), a());
                            },
                            enable() {
                                ((e.enabled = !0), a());
                            },
                            enableOutside() {
                                e.enabled && o(!0);
                            },
                            disableOutside() {
                                e.enabled && o(!1);
                            },
                        });
                    })();
                function A(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function b(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                function F(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function C(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const g = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    D = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    B = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    h = Object.keys(B).reduce((e, u) => ((e[u] = () => A(B[u])), e), {}),
                    p = { play: Object.assign({}, h, { sound: A }), setRTPC: b };
                var f = t(690);
                function v(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function x(e, u, t) {
                    return `url(${v(e, u, t)})`;
                }
                const w = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    N = {
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
                    k = ['args'],
                    y = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                _ = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        _ = Object.keys(e);
                                    for (a = 0; a < _.length; a++) ((t = _[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, k);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, _, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, _));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    T = {
                        close(e) {
                            y('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            y(64);
                        },
                        move(e) {
                            y(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function L(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function S(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function O(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function R(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function M(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function I(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function W(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function P(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: j(u.x), y: j(u.y) };
                }
                function $() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function H() {
                    return viewEnv.getScale();
                }
                function z(e) {
                    return viewEnv.pxToRem(e);
                }
                function j(e) {
                    return viewEnv.remToPx(e);
                }
                function G(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function U() {
                    return viewEnv.isFocused();
                }
                function V() {
                    return viewEnv.setEventHandled();
                }
                function q() {
                    return viewEnv.isEventHandled();
                }
                function K() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Y() {
                    return viewEnv.getShowingStatus();
                }
                const X = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    Z = f.cg;
                function Q() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const J = Object.keys(w).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === w[u]), e), {}),
                    ee = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    ue = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : N.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function te() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function ae(e) {
                    function u() {
                        const u = viewEnv.getExternalPaddingsRem(),
                            t = u.top,
                            a = u.right,
                            r = u.bottom,
                            _ = u.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${a}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${_}rem`));
                    }
                    (u(), engine.on('self.onPaddingsUpdated', () => u()));
                }
                const re = { view: n, client: r, sound: p, intl: D };
            },
            521: (e, u, t) => {
                'use strict';
                let a, r;
                (t.d(u, { n: () => a }),
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
                    })(a || (a = {})),
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
                t.d(u, { cg: () => _ });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function _(e) {
                    let u = '';
                    for (let t = r.length - 1; t >= 0; t--) for (; e >= r[t]; ) ((u += a[t]), (e -= r[t]));
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => _ });
                var a = t(70);
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
                        const _ = a.O.view.addModelObserver(e, t, r);
                        return (
                            _ > 0
                                ? ((this._callbacks[_] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(_) : (this._views[t] = [_])))
                                : console.error("Can't add callback for model:", e),
                            _
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(e, u);
                        });
                    }
                }
                r.__instance = void 0;
                const _ = r;
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
                t.d(u, { Sw: () => _.Z, B0: () => i, ry: () => C });
                class a {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let a = e.target;
                                    do {
                                        if (a === u) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (a.__instance || (a.__instance = new a()), a.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            a = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== a)),
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
                a.__instance = void 0;
                const r = a;
                var _ = t(358),
                    n = t(613);
                let i;
                var o;
                (((o = i || (i = {}))[(o.UNDEFINED = 0)] = 'UNDEFINED'),
                    (o[(o.TOOLTIP = 1)] = 'TOOLTIP'),
                    (o[(o.POP_OVER = 2)] = 'POP_OVER'),
                    (o[(o.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (o[(o.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (o[(o.MOVE = 16)] = 'MOVE'),
                    (o[(o.CLOSE = 32)] = 'CLOSE'),
                    (o[(o.MINIMIZE = 64)] = 'MINIMIZE'));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(521),
                    E = t(70);
                const A = ['args'];
                function b(e, u, t, a, r, _, n) {
                    try {
                        var i = e[_](n),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(a, r);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    C = (function () {
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
                                    return new Promise(function (a, r) {
                                        var _ = e.apply(u, t);
                                        function n(e) {
                                            b(_, a, r, n, i, 'next', e);
                                        }
                                        function i(e) {
                                            b(_, a, r, n, i, 'throw', e);
                                        }
                                        n(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    g = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                _ = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        _ = Object.keys(e);
                                    for (a = 0; a < _.length; a++) ((t = _[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, A);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, _, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, _));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    D = () => g(i.CLOSE),
                    B = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var h = t(572);
                const p = r.instance,
                    f = {
                        DataTracker: _.Z,
                        ViewModel: h.Z,
                        ViewEventType: i,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: m,
                        DateFormatType: c,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => g(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: D,
                        sendClosePopOverEvent: () => g(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, r = R.invalid('resId'), _) => {
                            const n = E.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                s = o.x,
                                l = o.y,
                                m = o.width,
                                c = o.height,
                                d = {
                                    x: E.O.view.pxToRem(s) + n.x,
                                    y: E.O.view.pxToRem(l) + n.y,
                                    width: E.O.view.pxToRem(m),
                                    height: E.O.view.pxToRem(c),
                                };
                            g(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: F(d),
                                on: !0,
                                args: _,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => B(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, D);
                        },
                        handleViewEvent: g,
                        onBindingsReady: C,
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
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const r = Object.prototype.toString.call(u[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < r.length; u++) t[a].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: p,
                        SystemLocale: n.Z5,
                        UserLocale: n.cy,
                    };
                window.ViewEnvHelper = f;
            },
            613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => _, Z5: () => a, cy: () => r });
                const a = {
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
                    _ = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            82: (e, u, t) => {
                'use strict';
                var a = t(483),
                    r = t.n(a),
                    _ = t(281);
                let n;
                function i(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(n || (n = {}));
                const o = (e) => e.replace(/&nbsp;/g, ' '),
                    s = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    l = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    m = (e, u, t = n.left) => e.split(u).reduce(t === n.left ? s : l, []),
                    c = (() => {
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
                    d = ['zh_cn', 'zh_sg', 'zh_tw'];
                var E = t(916),
                    A = t(613);
                (Date.now(), A.Ew.getRegionalDateTime, A.Ew.getFormattedDateTime);
                var b = t(363),
                    F = t.n(b),
                    C = t(70);
                const g = (e = 1) => {
                        const u = new Error().stack;
                        let t,
                            a = R.invalid('resId'),
                            r = '';
                        var _;
                        return (
                            u &&
                                ((r = (null == (_ = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : _[0]) || ''),
                                (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== t &&
                                    window.subViews[t] &&
                                    (a = window.subViews[t].id)),
                            { callerUrl: r, caller: t, stack: u, resId: a }
                        );
                    },
                    D = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    B = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    h = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    p = () => (window.injected || (window.injected = new Map()), window.injected),
                    f = E.Sw.instance;
                let v;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(v || (v = {}));
                const x = (e = 'model', u = v.Deep) => {
                        const t = (0, b.useState)(0),
                            a = (t[0], t[1]),
                            r = (0, b.useMemo)(() => g(), []),
                            _ = r.callerUrl,
                            n = r.caller,
                            i = r.resId,
                            o = (0, b.useMemo)(() => {
                                const u = (function (e) {
                                    return p().has(e);
                                })(_.replace('.js', '.html'));
                                return window.__feature && window.__feature !== n && !u ? `subViews.${n}.${e}` : e;
                            }, [_, n, e]),
                            s = (0, b.useState)(() =>
                                ((e) => {
                                    const u = D(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return B(u) ? u.value : u;
                                })(
                                    ((e) =>
                                        ((e, u) =>
                                            e.split('.').reduce((e, u) => {
                                                const t = D(`${e}.${u}`, window);
                                                return B(t) ? ((e, u) => `${e}.${u}.value`)(e, u) : `${e}.${u}`;
                                            }))(e))(o),
                                ),
                            ),
                            l = s[0],
                            m = s[1],
                            c = (0, b.useRef)(-1);
                        return (
                            ((e) => {
                                const u = (0, b.useRef)(!1);
                                u.current || (e(), (u.current = !0));
                            })(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? v.Deep : v.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== v.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === v.Deep
                                                ? (e === l && a((e) => e + 1), m(e))
                                                : m(Object.assign([], e));
                                        },
                                        r = ((e) => {
                                            const u = ((e) => {
                                                    const u = g(),
                                                        t = u.caller,
                                                        a = u.resId,
                                                        r =
                                                            window.__feature && window.__feature !== t && t
                                                                ? `subViews.${t}`
                                                                : '';
                                                    return { modelPrefix: r, modelPath: h(r, ''), resId: a };
                                                })(),
                                                t = u.modelPrefix,
                                                a = e.split('.');
                                            if (a.length > 0) {
                                                const e = [a[0]];
                                                return (
                                                    a.reduce((u, a) => {
                                                        const r = D(h(t, `${u}.${a}`), window);
                                                        return B(r)
                                                            ? (e.push(r.id), `${u}.${a}.value`)
                                                            : (e.push(a), `${u}.${a}`);
                                                    }),
                                                    e.reduce((e, u) => e + '.' + u)
                                                );
                                            }
                                            return '';
                                        })(e);
                                    c.current = f.addCallback(r, t, i, u === v.Deep);
                                }
                            }),
                            (0, b.useEffect)(() => {
                                if (u !== v.None)
                                    return () => {
                                        f.removeCallback(c.current, i);
                                    };
                            }, [i, u]),
                            l
                        );
                    },
                    w =
                        (E.Sw.instance,
                        (e, u, t) =>
                            u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                                ? (u.extraLargeHeight && t.extraLarge) ||
                                  (u.largeHeight && t.large) ||
                                  (u.mediumHeight && t.medium) ||
                                  (u.smallHeight && t.small) ||
                                  (u.extraSmallHeight && t.extraSmall)
                                    ? e
                                    : null
                                : e),
                    N = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var k;
                function y(e = C.O.client.getSize('rem')) {
                    const u = e.width,
                        t = e.height;
                    return Object.assign(
                        { width: u, height: t },
                        (function (e, u, t) {
                            const a = (function (e, u) {
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
                                _ = Math.min(a, r);
                            return {
                                extraLarge: _ === t.extraLarge.weight,
                                large: _ === t.large.weight,
                                medium: _ === t.medium.weight,
                                small: _ === t.small.weight,
                                extraSmall: _ === t.extraSmall.weight,
                                extraLargeWidth: a === t.extraLarge.weight,
                                largeWidth: a === t.large.weight,
                                mediumWidth: a === t.medium.weight,
                                smallWidth: a === t.small.weight,
                                extraSmallWidth: a === t.extraSmall.weight,
                                extraLargeHeight: r === t.extraLarge.weight,
                                largeHeight: r === t.large.weight,
                                mediumHeight: r === t.medium.weight,
                                smallHeight: r === t.small.weight,
                                extraSmallHeight: r === t.extraSmall.weight,
                            };
                        })(u, t, N),
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
                })(k || (k = {}));
                const T = y(),
                    L = (0, b.createContext)(T),
                    S = ['children'];
                (0, b.memo)((e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                _ = Object.keys(e);
                            for (a = 0; a < _.length; a++) ((t = _[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, S);
                    const a = (0, b.useContext)(L),
                        r = a.extraLarge,
                        _ = a.large,
                        n = a.medium,
                        i = a.small,
                        o = a.extraSmall,
                        s = a.extraLargeWidth,
                        l = a.largeWidth,
                        m = a.mediumWidth,
                        c = a.smallWidth,
                        d = a.extraSmallWidth,
                        E = a.extraLargeHeight,
                        A = a.largeHeight,
                        F = a.mediumHeight,
                        C = a.smallHeight,
                        g = a.extraSmallHeight,
                        D = { extraLarge: E, large: A, medium: F, small: C, extraSmall: g };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return u;
                        if (t.large && _) return u;
                        if (t.medium && n) return u;
                        if (t.small && i) return u;
                        if (t.extraSmall && o) return u;
                    } else {
                        if (t.extraLargeWidth && s) return w(u, t, D);
                        if (t.largeWidth && l) return w(u, t, D);
                        if (t.mediumWidth && m) return w(u, t, D);
                        if (t.smallWidth && c) return w(u, t, D);
                        if (t.extraSmallWidth && d) return w(u, t, D);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && E) return u;
                            if (t.largeHeight && A) return u;
                            if (t.mediumHeight && F) return u;
                            if (t.smallHeight && C) return u;
                            if (t.extraSmallHeight && g) return u;
                        }
                    }
                    return null;
                });
                const O = ({ children: e }) => {
                    const u = (0, b.useState)(y),
                        t = u[0],
                        a = u[1],
                        r = (0, b.useState)(!1),
                        _ = r[0],
                        n = r[1];
                    return (
                        (0, b.useLayoutEffect)(() => {
                            function e() {
                                a((e) => {
                                    const u = C.O.client.getSize('rem');
                                    return e.width === u.width && e.height === u.height ? e : y(u);
                                });
                            }
                            return (
                                e(),
                                n(!0),
                                C.O.client.events.on('clientResized', e),
                                C.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (C.O.client.events.off('clientResized', e),
                                        C.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        F().createElement(L.Provider, { value: t }, _ && e)
                    );
                };
                function M(e, u, t) {
                    const a = (0, b.useContext)(L);
                    let _ = Object.entries(a).filter(([e, u]) => !0 === u && e in k);
                    return (
                        t && (_ = _.filter((e) => t.includes(e[0]))),
                        e.reduce((e, t) => {
                            const a = _.map((e) =>
                                r()(
                                    u[((e, u) => e + '__' + u)(t, e[0])],
                                    u[
                                        ((e, u) => {
                                            return e + ((t = u)[0].toUpperCase() + t.slice(1));
                                            var t;
                                        })(t, e[0])
                                    ],
                                ),
                            );
                            return ((e[t] = r()(u[t], ...a)), e);
                        }, {})
                    );
                }
                const I = ({ binding: e, text: u = '', classMix: t, alignment: a = n.left, formatWithBrackets: i }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const s = i && e ? ((l = e), u.replace(/\{\w+\}/g, (e) => String(l[e.slice(1, -1)]))) : u;
                        var l;
                        return F().createElement(
                            b.Fragment,
                            null,
                            s.split('\n').map((u, i) =>
                                F().createElement(
                                    'div',
                                    { className: r()('FormatText_base_d0', t), key: `${u}-${i}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            t && e in t
                                                ? t[e]
                                                : ((e, u = n.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return d.includes(t)
                                                          ? c(e)
                                                          : 'ja' === t
                                                            ? (0, _.D4)()
                                                                  .parse(e)
                                                                  .map((e) => o(e))
                                                            : ((e, u = n.left) => {
                                                                  let t = [];
                                                                  const a =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      r = o(e);
                                                                  return (
                                                                      m(r, /( )/, u).forEach(
                                                                          (e) => (t = t.concat(m(e, a, n.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(e, u);
                                                  })(e, u),
                                        ))(u, a, e).map((e, u) =>
                                        F().createElement(b.Fragment, { key: `${u}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    W = {
                        blackReal: 'FormatTextWithColorTags_blackReal_d5',
                        whiteReal: 'FormatTextWithColorTags_whiteReal_d8',
                        white: 'FormatTextWithColorTags_white_b9',
                        whiteOrange: 'FormatTextWithColorTags_whiteOrange_ea',
                        whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_54',
                        par: 'FormatTextWithColorTags_par_c1',
                        parSecondary: 'FormatTextWithColorTags_parSecondary_4e',
                        parTertiary: 'FormatTextWithColorTags_parTertiary_14',
                        red: 'FormatTextWithColorTags_red_d9',
                        redDark: 'FormatTextWithColorTags_redDark_ea',
                        yellow: 'FormatTextWithColorTags_yellow_48',
                        orange: 'FormatTextWithColorTags_orange_ad',
                        cream: 'FormatTextWithColorTags_cream_96',
                        brown: 'FormatTextWithColorTags_brown_27',
                        greenBright: 'FormatTextWithColorTags_greenBright_04',
                        green: 'FormatTextWithColorTags_green_58',
                        greenDark: 'FormatTextWithColorTags_greenDark_af',
                        blueBooster: 'FormatTextWithColorTags_blueBooster_b3',
                        blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_ab',
                        cred: 'FormatTextWithColorTags_cred_d3',
                        gold: 'FormatTextWithColorTags_gold_28',
                        bond: 'FormatTextWithColorTags_bond_74',
                        prom: 'FormatTextWithColorTags_prom_58',
                    },
                    P = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    $ = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    H = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    z = ({ text: e, binding: u, classMix: t }) => {
                        const a = (0, b.useCallback)((e) => ({ color: `#${e}` }), []),
                            r = u || {};
                        let _ = P.exec(e),
                            n = e;
                        for (; _; ) {
                            const t = _[0],
                                i = $.exec(t),
                                o = H.exec(t),
                                s = _[1];
                            if (i && o) {
                                const e = i[0],
                                    _ = e + o[0].length + e;
                                ((n = n.replace(t, `%(${_})`)),
                                    (r[_] = W[e]
                                        ? F().createElement(
                                              'span',
                                              { className: W[e] },
                                              F().createElement(I, { text: s, binding: u }),
                                          )
                                        : F().createElement(
                                              'span',
                                              { style: a(e) },
                                              F().createElement(I, { text: s, binding: u }),
                                          )));
                            }
                            _ = P.exec(e);
                        }
                        return F().createElement(I, { text: n, classMix: t, binding: r });
                    },
                    j = (e) => (e ? R.images.gui.maps.icons.mode_selector.mode.$dyn(e) : null);
                let G, U;
                (!(function (e) {
                    ((e.B0 = 'b0'),
                        (e.B1 = 'b1'),
                        (e.B2 = 'b2'),
                        (e.B3 = 'b3'),
                        (e.B4 = 'b4'),
                        (e.B5 = 'b5'),
                        (e.B6 = 'b6'));
                })(G || (G = {})),
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'));
                    })(U || (U = {})));
                const V = (e, u = !1) => (u && 1 === e ? G.B0 : `b${Math.min(Math.max(Math.floor(e), 0), 6)}`),
                    q = {},
                    K = (...e) => {
                        let u = [];
                        for (var t = 0, a = e; t < a.length; t++) {
                            const e = a[t];
                            if (e in q) u = u.concat(q[e]);
                            else {
                                const t = [e];
                                for (let u = 0; u <= 6; u++) t.push(`${e}__${V(u)}`);
                                ((q[e] = t), (u = u.concat(q[e])));
                            }
                        }
                        return u;
                    },
                    Y = (e) => {
                        const u = (0, b.useState)(!1),
                            t = u[0],
                            a = u[1],
                            r = (0, b.useCallback)(
                                (u) => {
                                    (a(u), e && e(u));
                                },
                                [e],
                            );
                        return [t, r];
                    },
                    X = () => {
                        const e = (0, b.useContext)(L),
                            u = e.extraSmall,
                            t = e.small,
                            a = e.medium;
                        return (0, b.useMemo)(() => {
                            switch (!0) {
                                case t:
                                case u:
                                    return U.Small;
                                case a:
                                    return U.Medium;
                                default:
                                    return U.Big;
                            }
                        }, [u, a, t]);
                    },
                    Z = {
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
                    Q = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function J() {
                    return (
                        (J =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        J.apply(this, arguments)
                    );
                }
                const ee = (e) => {
                        let u = e.value,
                            t = e.isEmpty,
                            a = e.className,
                            _ = e.size,
                            n = void 0 === _ ? 'normal' : _,
                            i = e.fadeInAnimation,
                            o = void 0 !== i && i,
                            s = e.hide,
                            l = void 0 !== s && s,
                            m = e.maximumNumber,
                            c = void 0 === m ? 99 : m,
                            d = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    _ = Object.keys(e);
                                for (a = 0; a < _.length; a++) ((t = _[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Q);
                        const E = t ? null : u,
                            A = 'string' == typeof E;
                        if ((E && !A && E < 0) || 0 === E) return null;
                        const b = E && !A && E > c,
                            C = r()(
                                Z.base,
                                Z[`base__${n}`],
                                o && Z.base__animated,
                                l && Z.base__hidden,
                                !E && Z.base__pattern,
                                t && Z.base__empty,
                                a,
                            );
                        return F().createElement(
                            'div',
                            J({ className: C }, d),
                            F().createElement('div', { className: Z.bg }),
                            F().createElement('div', { className: Z.pattern }),
                            F().createElement(
                                'div',
                                { className: r()(Z.value, A && Z.value__text) },
                                b ? c : E,
                                b && F().createElement('span', { className: Z.plus }, '+'),
                            ),
                        );
                    },
                    ue = [
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
                function te(e) {
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
                const ae = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: E.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    re = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            _ = e.onMouseLeave,
                            n = e.onMouseDown,
                            i = e.onClick,
                            o = e.ignoreShowDelay,
                            s = void 0 !== o && o,
                            l = e.ignoreMouseClick,
                            m = void 0 !== l && l,
                            c = e.decoratorId,
                            d = void 0 === c ? 0 : c,
                            E = e.isEnabled,
                            A = void 0 === E || E,
                            F = e.targetId,
                            C = void 0 === F ? 0 : F,
                            D = e.onShow,
                            B = e.onHide,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    _ = Object.keys(e);
                                for (a = 0; a < _.length; a++) ((t = _[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, ue);
                        const p = (0, b.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, b.useMemo)(() => C || g().resId, [C]),
                            v = (0, b.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (ae(t, d, { isMouseEvent: !0, on: !0, arguments: te(a) }, f),
                                    D && D(),
                                    (p.current.isVisible = !0));
                            }, [t, d, a, f, D]),
                            x = (0, b.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        ae(t, d, { on: !1 }, f),
                                        p.current.isVisible && B && B(),
                                        (p.current.isVisible = !1));
                                }
                            }, [t, d, f, B]),
                            w = (0, b.useCallback)((e) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(p.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        return (
                            (0, b.useEffect)(() => {
                                const e = p.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, b.useEffect)(() => {
                                !1 === A && x();
                            }, [A, x]),
                            (0, b.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        (window.removeEventListener('mouseleave', x), x());
                                    }
                                ),
                                [x],
                            ),
                            A
                                ? (0, b.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((N = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          (clearTimeout(p.current.timeoutId),
                                                          (p.current.timeoutId = window.setTimeout(v, s ? 100 : 400)),
                                                          r && r(e),
                                                          N && N(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (x(), null == _ || _(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === m && x(), null == i || i(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === m && x(), null == n || n(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : u
                        );
                        var N;
                    },
                    _e = ['children'];
                function ne() {
                    return (
                        (ne =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ne.apply(this, arguments)
                    );
                }
                const ie = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    _ = Object.keys(e);
                                for (a = 0; a < _.length; a++) ((t = _[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, _e);
                        return F().createElement(
                            re,
                            ne(
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
                    oe = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function se() {
                    return (
                        (se =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        se.apply(this, arguments)
                    );
                }
                const le = R.views.common.tooltip_window.simple_tooltip_content,
                    me = (e) => {
                        let u = e.children,
                            t = e.body,
                            a = e.header,
                            r = e.note,
                            _ = e.alert,
                            n = e.args,
                            i = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    _ = Object.keys(e);
                                for (a = 0; a < _.length; a++) ((t = _[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, oe);
                        const o = (0, b.useMemo)(() => {
                            const e = Object.assign({}, n, { body: t, header: a, note: r, alert: _ });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [_, t, a, r, n]);
                        return F().createElement(
                            re,
                            se(
                                {
                                    contentId:
                                        ((s = null == n ? void 0 : n.hasHtmlContent),
                                        s ? le.SimpleTooltipHtmlContent('resId') : le.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: o,
                                },
                                i,
                            ),
                            u,
                        );
                        var s;
                    };
                function ce(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const de = {
                        playHighlight() {
                            ce('highlight');
                        },
                        playClick() {
                            ce('play');
                        },
                        playYes() {
                            ce('yes1');
                        },
                    },
                    Ee = {
                        base: 'CardWrapper_base_b7',
                        base__disabled: 'CardWrapper_base__disabled_4f',
                        base__isNotStarted: 'CardWrapper_base__isNotStarted_29',
                        mask: 'CardWrapper_mask_f7',
                        border: 'CardWrapper_border_a3',
                        hover: 'CardWrapper_hover_af',
                        hover__anim: 'CardWrapper_hover__anim_10',
                        animBg: 'CardWrapper_animBg_f3',
                        animBg__wide: 'CardWrapper_animBg__wide_16',
                        selection: 'CardWrapper_selection_35',
                        check: 'CardWrapper_check_c1',
                        check__extraSmall: 'CardWrapper_check__extraSmall_fa',
                        check__small: 'CardWrapper_check__small_33',
                        checkBackground: 'CardWrapper_checkBackground_bd',
                        checkBackground__extraSmall: 'CardWrapper_checkBackground__extraSmall_ff',
                        checkBackground__small: 'CardWrapper_checkBackground__small_d8',
                        disabling: 'CardWrapper_disabling_63',
                        background: 'CardWrapper_background_34',
                        background__anim: 'CardWrapper_background__anim_34',
                        background__empty: 'CardWrapper_background__empty_bb',
                        novelty: 'CardWrapper_novelty_ae',
                        info: 'CardWrapper_info_49',
                        info__anim: 'CardWrapper_info__anim_81',
                        info__extraSmall: 'CardWrapper_info__extraSmall_fc',
                        info__small: 'CardWrapper_info__small_9c',
                        info__medium: 'CardWrapper_info__medium_9f',
                        infoCorner: 'CardWrapper_infoCorner_49',
                        infoCorner__anim: 'CardWrapper_infoCorner__anim_ba',
                        children: 'CardWrapper_children_88',
                    },
                    Ae = ({
                        index: e,
                        size: u,
                        isSelected: t,
                        isDisabled: a,
                        isNew: _ = !1,
                        isInfoIconVisible: n,
                        resourcesFolderName: i,
                        children: o,
                        onHoverChanged: s,
                        onItemClicked: l,
                        onInfoClicked: m,
                        resourceFolderGetter: c,
                        id: d,
                        modeName: E,
                        isNotStarted: A,
                    }) => {
                        const C = X(),
                            g = (0, b.useCallback)(
                                (u) => {
                                    (u.stopPropagation(), de.playYes(), m({ index: e }));
                                },
                                [m, e],
                            ),
                            D = Y(s),
                            B = D[0],
                            h = D[1],
                            p = (0, b.useCallback)(() => {
                                (ce(
                                    [G.B4, G.B5, G.B6].includes(u)
                                        ? 'ev_mode_selector_hover_simple'
                                        : 'ev_mode_selector_hover',
                                ),
                                    h(!0));
                            }, [h, u]),
                            f = (0, b.useCallback)(() => {
                                h(!1);
                            }, [h]),
                            v = M(['info', 'check', 'checkBackground'], Ee),
                            x = C !== U.Big;
                        let w;
                        const N = c(i);
                        if (null !== N) {
                            const e = N.$dyn(`bg_${u}_${C}`);
                            null !== e && (w = { backgroundImage: `url(${e})` });
                            const t = N.$dyn(`bg_${u}`);
                            null !== t && (w = { backgroundImage: `url(${t})`, backgroundSize: 'cover' });
                        }
                        const k = n && (B || t);
                        return F().createElement(
                            ie,
                            { isEnabled: a, args: { index: e, modeName: E, tooltipId: 'disabledTooltip' } },
                            F().createElement(
                                'div',
                                null,
                                F().createElement(
                                    'div',
                                    {
                                        id: d,
                                        className: r()(Ee.base, a && Ee.base__disabled, A && Ee.base__isNotStarted),
                                        onClick: () => {
                                            (l({ index: e, size: u, cardMediaSize: C }), de.playClick());
                                        },
                                        onMouseEnter: p,
                                        onMouseLeave: f,
                                    },
                                    F().createElement(
                                        'div',
                                        { className: Ee.mask },
                                        F().createElement('div', {
                                            className: r()(
                                                Ee.background,
                                                void 0 === w && Ee.background__empty,
                                                B && Ee.background__anim,
                                            ),
                                            style: w,
                                        }),
                                    ),
                                    F().createElement('div', { className: Ee.border }),
                                    t &&
                                        F().createElement(
                                            F().Fragment,
                                            null,
                                            F().createElement('div', { className: Ee.selection }),
                                            F().createElement('div', {
                                                className: r()(Ee.animBg, u === G.B0 && Ee.animBg__wide),
                                            }),
                                            F().createElement('div', { className: v.checkBackground }),
                                            F().createElement('div', { className: v.check }),
                                        ),
                                    F().createElement('div', { className: r()(Ee.hover, B && !A && Ee.hover__anim) }),
                                    F().createElement('div', { className: Ee.children }, o),
                                    _ &&
                                        !a &&
                                        F().createElement(
                                            'div',
                                            { className: Ee.novelty },
                                            F().createElement(ee, {
                                                value: R.strings.mode_selector.novelty(),
                                                size: x ? 'small' : 'big',
                                            }),
                                        ),
                                    F().createElement('div', {
                                        className: r()(Ee.infoCorner, k && Ee.infoCorner__anim),
                                    }),
                                    F().createElement(
                                        me,
                                        { body: R.strings.tooltips.mode_selector.info.body(), isEnabled: k },
                                        F().createElement('div', {
                                            className: r()(v.info, k && Ee.info__anim),
                                            onClick: g,
                                        }),
                                    ),
                                    a && F().createElement('div', { className: Ee.disabling }),
                                ),
                            ),
                        );
                    };
                let be, Fe;
                function Ce() {
                    return (
                        (Ce =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ce.apply(this, arguments)
                    );
                }
                (!(function (e) {
                    ((e.Normal = 'normal'), (e.Attention = 'attention'), (e.Alert = 'alert'), (e.Blocker = 'blocker'));
                })(be || (be = {})),
                    (function (e) {
                        ((e.LowRisk = 'lowRisk'), (e.MediumRisk = 'mediumRisk'), (e.HighRisk = 'highRisk'));
                    })(Fe || (Fe = {})));
                const ge = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const a = F().createElement('div', { className: t }, e);
                    if (u.header || u.body) return F().createElement(me, u, a);
                    const r = u.contentId;
                    return r ? F().createElement(re, Ce({}, u, { contentId: r }), a) : F().createElement(ie, u, a);
                };
                var De = t(45);
                const Be = {
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
                let he, pe, fe;
                (!(function (e) {
                    ((e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding'));
                })(he || (he = {})),
                    (function (e) {
                        ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
                    })(pe || (pe = {})),
                    (function (e) {
                        ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
                    })(fe || (fe = {})));
                const ve = { [fe.NBSP]: he.NoBreakSymbol, [fe.ZWNBSP]: he.NoBreakSymbol, [fe.NEW_LINE]: he.LineBreak },
                    xe = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    we = {
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
                    Ne = 'renderers_word_f3',
                    ke = (e) => ({ color: `#${e}` }),
                    ye = ({ elementList: e, textBlock: u, key: t }) => {
                        const a = u.colorTag;
                        return a
                            ? we[a]
                                ? F().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: r()(Ne, we[a]) },
                                      e,
                                  )
                                : F().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: Ne, style: ke(a) },
                                      e,
                                  )
                            : F().createElement('span', { key: t, 'data-block-type': u.blockType, className: Ne }, e);
                    },
                    Te = {
                        [he.Word]: ye,
                        [he.NoBreakSymbol]: ye,
                        [he.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            F().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => F().createElement(F().Fragment, { key: t }, e)),
                            ),
                        [he.LineBreak]: ({ key: e }) =>
                            F().createElement('span', {
                                key: e,
                                'data-block-type': he.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [he.NewLine]: ({ elementList: e, key: u }) =>
                            F().createElement(
                                'span',
                                { key: u, 'data-block-type': he.NewLine, className: 'renderers_newLine_bd' },
                                e,
                            ),
                        [he.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            F().createElement(
                                'span',
                                {
                                    key: u,
                                    'data-block-type': he.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                e,
                            ),
                    },
                    Le = (e, u, t) => {
                        const a = [];
                        return (
                            e.childList.forEach((r, _) => {
                                const n = `${t}_${_}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        u = e.blockType,
                                        t = Le(e, Te[u], n);
                                    a.push(...t);
                                } else a.push(u({ elementList: [r], textBlock: e, key: n }));
                            }),
                            a
                        );
                    },
                    Se = (e, u, t, a) => {
                        let r = u.exec(e),
                            _ = 0;
                        for (; r; ) (_ !== r.index && t(e.slice(_, r.index)), a(r), (_ = u.lastIndex), (r = u.exec(e)));
                        _ !== e.length && t(e.slice(_));
                    },
                    Oe = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    Re = xe
                        ? (e) => {
                              const u = [];
                              return (
                                  Se(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          u.push(e);
                                      },
                                      (e) => {
                                          u.push(
                                              ...((e) => {
                                                  const u = [];
                                                  return (
                                                      Se(
                                                          e,
                                                          /\S\s+/g,
                                                          (e) => {
                                                              var t;
                                                              'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                                                  ? u.push(...((t = e), t.match(Oe) || []))
                                                                  : u.push(...e.split(''));
                                                          },
                                                          (e) => {
                                                              u.push(e[0]);
                                                          },
                                                      ),
                                                      u
                                                  );
                                              })(e[0]),
                                          );
                                      },
                                  ),
                                  u
                              );
                          }
                        : (e, u) => {
                              const t = /[\s\u002d]/g;
                              let a = t.exec(e);
                              if (!a) return [e];
                              const r = [];
                              let _ = 0;
                              for (; a; ) {
                                  const n = u.justifyContent === pe.FlexEnd ? a.index : t.lastIndex;
                                  (r.push(e.slice(_, n)), (_ = n), (a = t.exec(e)));
                              }
                              return (_ !== e.length && r.push(e.slice(_)), r);
                          },
                    Me = (e, u = '', t) => {
                        const a = [];
                        return (
                            Se(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    a.push({ blockType: he.Word, colorTag: u, childList: Re(e, t) });
                                },
                                (e) => {
                                    const t = e[0],
                                        r = ve[t.charAt(0)];
                                    r === he.LineBreak
                                        ? a.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: he.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: he.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(t),
                                          )
                                        : a.push({ blockType: r, colorTag: u, childList: [t.replace(/\ufeff+/g, '')] });
                                },
                            ),
                            a
                        );
                    },
                    Ie = (e, u, t = '', a) => {
                        const r = [],
                            _ = e.replace(/(.)(、|。|ー)/g, '$1\ufeff$2');
                        return (
                            Se(
                                _,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...Me(e, t, a));
                                },
                                (e) => {
                                    const _ = e[1],
                                        n = void 0 === u[_] ? e[0] : u[_];
                                    'string' == typeof n || 'number' == typeof n
                                        ? r.push(...Me(String(n), t, a))
                                        : r.push({ blockType: he.Binding, colorTag: t, childList: [n] });
                                },
                            ),
                            r
                        );
                    },
                    We = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            a = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === he.NoBreakWrapper) (e.childList.push(a), t.push(e));
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            (e.childList.length > 0 && t.push(e),
                                t.push({ blockType: he.NoBreakWrapper, colorTag: '', childList: [u, a] }));
                        }
                        return (u.childList.length > 0 && t.push(u), t);
                    },
                    Pe = (e, u = {}, t) => {
                        if (!e) return [];
                        const a = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === he.NoBreakSymbol
                                        ? ((t = !0), u.push(...We(u.pop(), e)))
                                        : (t ? u.push(...We(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u, t) => {
                                const a = [];
                                return (
                                    Se(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            a.push(...Ie(e, u, '', t));
                                        },
                                        (e) => {
                                            a.push(...Ie(e[2] + e[3], u, e[1], t));
                                        },
                                    ),
                                    a
                                );
                            })(o(e).replace(/&zwnbsp;/g, '\ufeff'), u, t),
                        );
                        return ((e) => {
                            const u = [];
                            return (
                                e.forEach((e, t) => {
                                    u.push(
                                        ...((e, u) => {
                                            const t = [],
                                                a = e.blockType,
                                                r = Te[a],
                                                _ = Le(e, r, u);
                                            return (
                                                a === he.NoBreakWrapper
                                                    ? t.push(r({ elementList: _, textBlock: e, key: `${u}` }))
                                                    : t.push(..._),
                                                t
                                            );
                                        })(e, t),
                                    );
                                }),
                                u
                            );
                        })(a);
                    },
                    $e = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    He = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    ze = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const a = He(e, u),
                            r = e.textContent.length,
                            _ = e.offsetWidth / r,
                            n = Math.ceil(a / _);
                        if (a > 0) {
                            const a = Math.floor((u - e.offsetLeft) / _);
                            return a >= t ? [!0, t + n] : [!1, a];
                        }
                        const i = Math.max(t + n, 0);
                        return r < i ? [!1, 0] : [!0, i];
                    },
                    je = (e, u, t, a, r, _) => {
                        let n = -1,
                            i = null;
                        for (let o = t; o >= 0; o--) {
                            const t = e[o],
                                s = Number(e[o].getAttribute('data-block-type'));
                            if (s === he.LineBreak || s === he.NewLine || s === he.Binding) continue;
                            const l = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = ze(t, a, r),
                                    s = e[0],
                                    m = e[1];
                                if (!s) {
                                    m > 0 && (r -= m);
                                    continue;
                                }
                                const c = l.slice(0, l.length - m) + _,
                                    d = u[o];
                                ((i = F().cloneElement(d, d.props, c)), (n = o));
                                break;
                            }
                            {
                                const e = t.children,
                                    s = u[o],
                                    m = s.props.children,
                                    c = je(e, m, e.length - 1, a, r, _),
                                    d = c[0],
                                    E = c[1];
                                if (!(d < 0)) {
                                    const e = m.slice(0, d);
                                    ((i = F().cloneElement(s, s.props, e, E)), (n = o));
                                    break;
                                }
                                r -= l.length;
                            }
                        }
                        return [n, i];
                    },
                    Ge = F().memo(
                        ({
                            text: e,
                            classMix: u,
                            onSizeChanged: t,
                            binding: a,
                            isTooltipEnable: _ = !1,
                            isTruncationAvailable: n = !1,
                            customTooltipArgs: i,
                            targetId: o,
                            justifyContent: s = pe.FlexStart,
                            alignContent: l = pe.FlexStart,
                            truncateIdentify: m = '...',
                        }) => {
                            const c = (0, b.useRef)(null),
                                d = (0, b.useRef)({ height: 0, width: 0 }),
                                E = (0, b.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                A = E[0],
                                C = E[1],
                                g = (0, b.useMemo)(() => Pe(e, a, { justifyContent: s }), [a, s, e]),
                                D = (0, b.useMemo)(() => {
                                    if (
                                        _ &&
                                        A.isTruncated &&
                                        (!a || !Object.values(a).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, i, {
                                                stringifyKwargs: a ? JSON.stringify(a) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: o,
                                        };
                                }, [a, _, o, e, i, A.isTruncated]),
                                B = (0, b.useCallback)(
                                    (e) => {
                                        ((d.current.width = e.contentRect.width),
                                            (d.current.height = e.contentRect.height));
                                        const u = ((e, u, t, a = '...') => {
                                                const r = [...u],
                                                    _ = e.current;
                                                if (!_) return [r, !1];
                                                const n = t.height,
                                                    i = t.width,
                                                    o = _.lastElementChild;
                                                if (!$e(o, n) && He(o, i) <= 0) return [r, !1];
                                                const s = _.children,
                                                    l = ((e, u) => {
                                                        let t = 0,
                                                            a = e.length - 1;
                                                        for (; a - t >= 0; ) {
                                                            const r = t + Math.ceil(0.5 * (a - t));
                                                            $e(e[r], u) ? (a = r - 1) : (t = r + 1);
                                                        }
                                                        return t - 1;
                                                    })(s, n);
                                                if (l < 0) return [r, !1];
                                                const m = je(s, r, l, i, a.length, a),
                                                    c = m[0],
                                                    d = m[1];
                                                return (d && (r.splice(c, 1, d), r.splice(c + 1)), [r, !0]);
                                            })(c, g, d.current, m),
                                            a = u[0],
                                            r = u[1];
                                        (C({ elementList: a, isTruncated: r, isTruncateFinished: !0 }), t && t(r));
                                    },
                                    [t, m, g],
                                ),
                                h = (0, b.useMemo)(() => ({ justifyContent: s, alignContent: l }), [l, s]);
                            return (
                                ((e, u, t = !0) => {
                                    const a = (0, b.useCallback)(
                                        (e) => {
                                            const t = e[0];
                                            u && u(t);
                                        },
                                        [u],
                                    );
                                    (0, b.useEffect)(() => {
                                        if (!e.current || !t) return;
                                        const u = new De.Z((e) => a(e));
                                        return (
                                            u.observe(e.current),
                                            () => {
                                                u.disconnect();
                                            }
                                        );
                                    }, [a, t, e]);
                                })(c, B, n),
                                F().createElement(
                                    'div',
                                    {
                                        className: r()(
                                            Be.base,
                                            u,
                                            Be.base__zeroPadding,
                                            n && Be.base__isTruncationAvailable,
                                        ),
                                        style: h,
                                    },
                                    F().createElement('div', { className: Be.unTruncated, ref: c }, g),
                                    F().createElement(
                                        ge,
                                        {
                                            tooltipArgs: D,
                                            className: r()(
                                                Be.tooltip,
                                                Be[`tooltip__justify-${s}`],
                                                Be[`tooltip__align-${l}`],
                                            ),
                                        },
                                        F().createElement(
                                            'div',
                                            {
                                                className: r()(
                                                    Be.truncated,
                                                    !A.isTruncateFinished && n && Be.truncated__hide,
                                                ),
                                                style: h,
                                            },
                                            A.isTruncateFinished && n ? A.elementList : g,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Ue = {
                        base: 'Performance_base_fd',
                        base__b2: 'Performance_base__b2_73',
                        text: 'Performance_text_2f',
                        base__mediumRisk: 'Performance_base__mediumRisk_ad',
                        base__highRisk: 'Performance_base__highRisk_ab',
                        icon: 'Performance_icon_69',
                        iconBig: 'Performance_iconBig_d5',
                        iconBig__mediumRisk: 'Performance_iconBig__mediumRisk_59',
                        iconBig__highRisk: 'Performance_iconBig__highRisk_5a',
                    };
                function Ve() {
                    return (
                        (Ve =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ve.apply(this, arguments)
                    );
                }
                const qe = { [Fe.LowRisk]: be.Normal, [Fe.MediumRisk]: be.Alert, [Fe.HighRisk]: be.Blocker },
                    Ke = R.strings.mode_selector.mode,
                    Ye = ({ size: e, performanceRisk: u = Fe.LowRisk, modeName: t, cut: a, textFolder: _ }) => {
                        var n;
                        const i = _ || Ke.$dyn(t),
                            o = (0, b.useMemo)(() => {
                                if (i && i.performance) {
                                    const e = i.performance.$dyn(u);
                                    if (e) {
                                        const t = e.header(),
                                            r = e.description(),
                                            _ = a
                                                ? R.views.lobby.common.tooltips.SimpleIconTooltip('resId')
                                                : R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                                      'resId',
                                                  ),
                                            n = a
                                                ? 0
                                                : R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId');
                                        return {
                                            args: { header: t, body: r, headerType: a ? qe[u] : be.Normal },
                                            contentId: _,
                                            decoratorId: n,
                                        };
                                    }
                                }
                            }, [i, u, a]);
                        if (u === Fe.LowRisk || !i || null == i || !i.performance) return null;
                        const s = (null == (n = i.performance) ? void 0 : n.$dyn(u)).headerIcon();
                        return F().createElement(
                            re,
                            Ve({}, o, { isEnabled: Boolean(o) }),
                            a
                                ? F().createElement('div', { className: r()(Ue.iconBig, Ue[`iconBig__${u}`]) })
                                : F().createElement(
                                      'div',
                                      { className: r()(Ue.base, Ue[`base__${e}`], Ue[`base__${u}`]) },
                                      F().createElement(Ge, {
                                          classMix: Ue.text,
                                          text: s,
                                          isTruncationAvailable: e === G.B2,
                                          binding: { icon: F().createElement('div', { className: Ue.icon }) },
                                          justifyContent: pe.Center,
                                      }),
                                  ),
                        );
                    },
                    Xe = ({ index: e, text: u, isSmall: t = !1, classMix: a, tooltipId: _, modeName: n = '' }) =>
                        F().createElement(
                            ie,
                            { args: _ ? { tooltipId: _, modeName: n } : { tooltipId: 'calendarTooltip', index: e } },
                            F().createElement(
                                'div',
                                { className: r()('TimeLeft_base_cf', t && 'TimeLeft_base__small_7c', a) },
                                F().createElement('div', { className: 'TimeLeft_icon_5d' }),
                                u,
                            ),
                        );
                let Ze;
                !(function (e) {
                    ((e[(e.NONE = 0)] = 'NONE'), (e[(e.STATIC = 1)] = 'STATIC'), (e[(e.NEW = 2)] = 'NEW'));
                })(Ze || (Ze = {}));
                const Qe = {
                        base: 'BattlePassIcon_base_bf',
                        bpIcon: 'BattlePassIcon_bpIcon_18',
                        bpIcon__extraLarge: 'BattlePassIcon_bpIcon__extraLarge_b3',
                        bpIcon__large: 'BattlePassIcon_bpIcon__large_c2',
                        bpAnim: 'BattlePassIcon_bpAnim_01',
                        bpAnim__extraLarge: 'BattlePassIcon_bpAnim__extraLarge_38',
                        bpAnim__large: 'BattlePassIcon_bpAnim__large_1e',
                    },
                    Je = ({ modeName: e, isDisabled: u, battlePassState: t }) => {
                        const a = M([...K('bpIcon', 'bpAnim')], Qe);
                        return (
                            (0, b.useEffect)(() => {
                                t !== Ze.NEW || u || ce('ev_mode_selector_bp_points_icon_appear');
                            }, [t, u]),
                            t === Ze.NONE || u
                                ? null
                                : F().createElement(
                                      'div',
                                      { className: Qe.base },
                                      F().createElement(
                                          re,
                                          {
                                              contentId:
                                                  R.views.lobby.mode_selector.tooltips.SimplyFormatTooltip('resId'),
                                              args: { modeName: e },
                                              ignoreShowDelay: !0,
                                          },
                                          F().createElement('div', { className: a.bpIcon }),
                                      ),
                                      t === Ze.NEW && F().createElement('div', { className: a.bpAnim }),
                                  )
                        );
                    },
                    eu = {
                        base: 'Reward_base_80',
                        header: 'Reward_header_7c',
                        vehicleType: 'Reward_vehicleType_fa',
                        icon: 'Reward_icon_93',
                        base__small: 'Reward_base__small_cb',
                        'base__small-b0': 'Reward_base__small-b0_c5',
                        'base__small-b1': 'Reward_base__small-b1_16',
                        base__medium: 'Reward_base__medium_ce',
                        'base__medium-b1': 'Reward_base__medium-b1_3f',
                        name: 'Reward_name_17',
                    },
                    uu = R.images.gui.maps.icons.mode_selector.rewards,
                    tu = R.images.gui.maps.icons.vehicleTypes.c_24x24,
                    au = ['small', 'small-b0', 'small-b1', 'medium'],
                    ru = [G.B0, G.B1],
                    _u = ({
                        mediaSize: e,
                        cardSize: u,
                        iconName: t,
                        name: a,
                        description: _,
                        tooltipID: n,
                        vehicleLevel: i,
                        vehicleType: o,
                        isPremium: s,
                    }) => {
                        const l = `${e}${ru.includes(u) ? `-${u}` : ''}`,
                            m = (0, b.useMemo)(() => {
                                const e = au.includes(l) ? 'c_48x48' : 'c_64x64';
                                return { backgroundImage: `url(${uu.$dyn(e).$dyn(t)})` };
                            }, [l, t]);
                        return F().createElement(
                            ge,
                            {
                                tooltipArgs: {
                                    args: { tooltipId: n },
                                    body: n ? '' : _,
                                    header: n ? '' : a,
                                    ignoreShowDelay: !0,
                                },
                            },
                            F().createElement(
                                'div',
                                { className: r()(eu.base, eu[`base__${l}`]) },
                                F().createElement(
                                    'div',
                                    { className: eu.header },
                                    F().createElement('div', {
                                        className: eu.vehicleType,
                                        style: o
                                            ? {
                                                  backgroundImage: `url(${tu.$dyn(`${((c = o), c.replace(/-/g, '_'))}${s ? '_elite' : ''}`)})`,
                                              }
                                            : void 0,
                                    }),
                                    F().createElement('div', null, i),
                                ),
                                F().createElement('div', { className: eu.icon, style: m }),
                                a && F().createElement(I, { text: a, classMix: eu.name }),
                            ),
                        );
                        var c;
                    },
                    nu = {
                        base: 'Rewards_base_c8',
                        base__extraSmall: 'Rewards_base__extraSmall_9b',
                        base__small: 'Rewards_base__small_78',
                        base__medium: 'Rewards_base__medium_75',
                    };
                function iu() {
                    return (
                        (iu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        iu.apply(this, arguments)
                    );
                }
                const ou = ({ size: e, rewardsList: u }) => {
                        const t = X(),
                            a = M(['base'], nu);
                        return F().createElement(
                            'div',
                            { className: a.base },
                            u &&
                                u.map(
                                    (u) =>
                                        u &&
                                        u.value &&
                                        F().createElement(
                                            _u,
                                            iu({ key: u.value.iconName, mediaSize: t, cardSize: e }, u.value),
                                        ),
                                ),
                        );
                    },
                    su = {
                        base: 'NormalCard_base_7a',
                        base__medium: 'NormalCard_base__medium_34',
                        base__extraLarge: 'NormalCard_base__extraLarge_87',
                        base__large: 'NormalCard_base__large_a8',
                        base__b0: 'NormalCard_base__b0_17',
                        base__b0__medium: 'NormalCard_base__b0__medium_8c',
                        base__b0__extraLarge: 'NormalCard_base__b0__extraLarge_bc',
                        base__b0__large: 'NormalCard_base__b0__large_ff',
                        base__b1: 'NormalCard_base__b1_ff',
                        base__b1__medium: 'NormalCard_base__b1__medium_63',
                        base__b1__extraLarge: 'NormalCard_base__b1__extraLarge_b0',
                        base__b1__large: 'NormalCard_base__b1__large_f9',
                        base__b2: 'NormalCard_base__b2_54',
                        base__b2__medium: 'NormalCard_base__b2__medium_57',
                        base__b2__extraLarge: 'NormalCard_base__b2__extraLarge_c0',
                        base__b2__large: 'NormalCard_base__b2__large_22',
                        base__b3: 'NormalCard_base__b3_50',
                        base__b3__medium: 'NormalCard_base__b3__medium_25',
                        base__b3__extraLarge: 'NormalCard_base__b3__extraLarge_8f',
                        base__b3__large: 'NormalCard_base__b3__large_18',
                        base__b4: 'NormalCard_base__b4_d9',
                        base__b4__medium: 'NormalCard_base__b4__medium_5c',
                        base__b4__extraLarge: 'NormalCard_base__b4__extraLarge_c3',
                        base__b4__large: 'NormalCard_base__b4__large_52',
                        base__b5: 'NormalCard_base__b5_f3',
                        base__b5__medium: 'NormalCard_base__b5__medium_30',
                        base__b5__extraLarge: 'NormalCard_base__b5__extraLarge_2b',
                        base__b5__large: 'NormalCard_base__b5__large_df',
                        base__b6: 'NormalCard_base__b6_8b',
                        base__b6__medium: 'NormalCard_base__b6__medium_10',
                        base__b6__extraLarge: 'NormalCard_base__b6__extraLarge_35',
                        base__b6__large: 'NormalCard_base__b6__large_5c',
                        name: 'NormalCard_name_ce',
                        name__b0: 'NormalCard_name__b0_98',
                        name__b1: 'NormalCard_name__b1_a6',
                        name__b0__medium: 'NormalCard_name__b0__medium_d2',
                        name__b1__medium: 'NormalCard_name__b1__medium_e3',
                        name__b0__extraLarge: 'NormalCard_name__b0__extraLarge_0e',
                        name__b0__large: 'NormalCard_name__b0__large_d2',
                        name__b1__extraLarge: 'NormalCard_name__b1__extraLarge_a3',
                        name__b1__large: 'NormalCard_name__b1__large_20',
                        name__b2: 'NormalCard_name__b2_73',
                        name__b2__medium: 'NormalCard_name__b2__medium_1c',
                        name__b2__extraLarge: 'NormalCard_name__b2__extraLarge_76',
                        name__b2__large: 'NormalCard_name__b2__large_53',
                        name__b3: 'NormalCard_name__b3_49',
                        name__b3__medium: 'NormalCard_name__b3__medium_78',
                        name__b3__extraLarge: 'NormalCard_name__b3__extraLarge_e9',
                        name__b3__large: 'NormalCard_name__b3__large_68',
                        name__b4: 'NormalCard_name__b4_ac',
                        name__b4__medium: 'NormalCard_name__b4__medium_e4',
                        name__b4__extraLarge: 'NormalCard_name__b4__extraLarge_2b',
                        name__b4__large: 'NormalCard_name__b4__large_a3',
                        name__b5: 'NormalCard_name__b5_2b',
                        name__b5__medium: 'NormalCard_name__b5__medium_c3',
                        name__b5__extraLarge: 'NormalCard_name__b5__extraLarge_78',
                        name__b5__large: 'NormalCard_name__b5__large_9b',
                        name__b6: 'NormalCard_name__b6_49',
                        name__b6__medium: 'NormalCard_name__b6__medium_dc',
                        name__b6__extraLarge: 'NormalCard_name__b6__extraLarge_83',
                        name__b6__large: 'NormalCard_name__b6__large_89',
                        formatText: 'NormalCard_formatText_cb',
                        formatText__b0__extraSmall: 'NormalCard_formatText__b0__extraSmall_7b',
                        formatText__b0__small: 'NormalCard_formatText__b0__small_65',
                        formatText__b1__extraSmall: 'NormalCard_formatText__b1__extraSmall_e4',
                        formatText__b1__small: 'NormalCard_formatText__b1__small_1e',
                        formatText__b2__extraSmall: 'NormalCard_formatText__b2__extraSmall_e0',
                        formatText__b2__small: 'NormalCard_formatText__b2__small_e4',
                        formatText__b3__extraSmall: 'NormalCard_formatText__b3__extraSmall_13',
                        formatText__b3__small: 'NormalCard_formatText__b3__small_8c',
                        formatText__b4__extraSmall: 'NormalCard_formatText__b4__extraSmall_f5',
                        formatText__b4__small: 'NormalCard_formatText__b4__small_49',
                        formatText__b5__extraSmall: 'NormalCard_formatText__b5__extraSmall_04',
                        formatText__b5__small: 'NormalCard_formatText__b5__small_b6',
                        formatText__b6__extraSmall: 'NormalCard_formatText__b6__extraSmall_a3',
                        formatText__b6__small: 'NormalCard_formatText__b6__small_e0',
                        subtitle: 'NormalCard_subtitle_75',
                        subtitle__b0: 'NormalCard_subtitle__b0_bf',
                        subtitle__b1: 'NormalCard_subtitle__b1_2e',
                        subtitle__b0__medium: 'NormalCard_subtitle__b0__medium_42',
                        subtitle__b1__medium: 'NormalCard_subtitle__b1__medium_95',
                        subtitle__b0__extraLarge: 'NormalCard_subtitle__b0__extraLarge_f2',
                        subtitle__b0__large: 'NormalCard_subtitle__b0__large_76',
                        subtitle__b1__extraLarge: 'NormalCard_subtitle__b1__extraLarge_8f',
                        subtitle__b1__large: 'NormalCard_subtitle__b1__large_d1',
                        subtitle__b2: 'NormalCard_subtitle__b2_98',
                        subtitle__b2__medium: 'NormalCard_subtitle__b2__medium_86',
                        subtitle__b2__extraLarge: 'NormalCard_subtitle__b2__extraLarge_44',
                        subtitle__b2__large: 'NormalCard_subtitle__b2__large_77',
                        subtitle__b3: 'NormalCard_subtitle__b3_7e',
                        subtitle__b3__medium: 'NormalCard_subtitle__b3__medium_57',
                        subtitle__b3__extraLarge: 'NormalCard_subtitle__b3__extraLarge_f3',
                        subtitle__b3__large: 'NormalCard_subtitle__b3__large_00',
                        subtitle__b4: 'NormalCard_subtitle__b4_b1',
                        subtitle__b4__medium: 'NormalCard_subtitle__b4__medium_64',
                        subtitle__b4__extraLarge: 'NormalCard_subtitle__b4__extraLarge_44',
                        subtitle__b4__large: 'NormalCard_subtitle__b4__large_6d',
                        subtitle__b5: 'NormalCard_subtitle__b5_4a',
                        subtitle__b5__medium: 'NormalCard_subtitle__b5__medium_03',
                        subtitle__b5__extraLarge: 'NormalCard_subtitle__b5__extraLarge_04',
                        subtitle__b5__large: 'NormalCard_subtitle__b5__large_14',
                        subtitle__b6: 'NormalCard_subtitle__b6_51',
                        subtitle__b6__medium: 'NormalCard_subtitle__b6__medium_94',
                        subtitle__b6__extraLarge: 'NormalCard_subtitle__b6__extraLarge_34',
                        subtitle__b6__large: 'NormalCard_subtitle__b6__large_f3',
                        subtitle__normal: 'NormalCard_subtitle__normal_23',
                        subtitle__noReward: 'NormalCard_subtitle__noReward_9c',
                        subtitle__statusActive: 'NormalCard_subtitle__statusActive_8c',
                        subtitle__staticPrepare: 'NormalCard_subtitle__staticPrepare_7c',
                        subtitle__anim: 'NormalCard_subtitle__anim_07',
                        subtitle__disable: 'NormalCard_subtitle__disable_9d',
                        statusDescription: 'NormalCard_statusDescription_9b',
                        statusDescription__position: 'NormalCard_statusDescription__position_e1',
                        statusDescription__color: 'NormalCard_statusDescription__color_b5',
                        belowStatus: 'NormalCard_belowStatus_05',
                        calendarIcon: 'NormalCard_calendarIcon_c1',
                        calendarIcon__hover: 'NormalCard_calendarIcon__hover_7c',
                        calendarIcon__extraSmall: 'NormalCard_calendarIcon__extraSmall_9a',
                        calendarIcon__small: 'NormalCard_calendarIcon__small_3d',
                        timeLeft: 'NormalCard_timeLeft_28',
                        timeLeft__small: 'NormalCard_timeLeft__small_a5',
                        footer: 'NormalCard_footer_ba',
                        footer__medium: 'NormalCard_footer__medium_77',
                        footer__extraLarge: 'NormalCard_footer__extraLarge_5e',
                        footer__large: 'NormalCard_footer__large_69',
                        footer__anim: 'NormalCard_footer__anim_73',
                        mask: 'NormalCard_mask_ee',
                        mask__b0: 'NormalCard_mask__b0_e9',
                        mask__b1: 'NormalCard_mask__b1_02',
                        mask__b0__medium: 'NormalCard_mask__b0__medium_ac',
                        mask__b1__medium: 'NormalCard_mask__b1__medium_26',
                        mask__b0__extraLarge: 'NormalCard_mask__b0__extraLarge_28',
                        mask__b0__large: 'NormalCard_mask__b0__large_d1',
                        mask__b1__extraLarge: 'NormalCard_mask__b1__extraLarge_74',
                        mask__b1__large: 'NormalCard_mask__b1__large_74',
                        mask__b2: 'NormalCard_mask__b2_71',
                        mask__b2__medium: 'NormalCard_mask__b2__medium_b2',
                        mask__b2__extraLarge: 'NormalCard_mask__b2__extraLarge_6c',
                        mask__b2__large: 'NormalCard_mask__b2__large_b2',
                        mask__b3: 'NormalCard_mask__b3_f4',
                        mask__b3__medium: 'NormalCard_mask__b3__medium_d1',
                        mask__b3__extraLarge: 'NormalCard_mask__b3__extraLarge_3a',
                        mask__b3__large: 'NormalCard_mask__b3__large_17',
                        mask__b4: 'NormalCard_mask__b4_3c',
                        mask__b4__medium: 'NormalCard_mask__b4__medium_b1',
                        mask__b4__extraLarge: 'NormalCard_mask__b4__extraLarge_4c',
                        mask__b4__large: 'NormalCard_mask__b4__large_ed',
                        mask__b5: 'NormalCard_mask__b5_85',
                        mask__b5__medium: 'NormalCard_mask__b5__medium_99',
                        mask__b5__extraLarge: 'NormalCard_mask__b5__extraLarge_8a',
                        mask__b5__large: 'NormalCard_mask__b5__large_cc',
                        mask__b6: 'NormalCard_mask__b6_90',
                        mask__b6__medium: 'NormalCard_mask__b6__medium_fe',
                        mask__b6__extraLarge: 'NormalCard_mask__b6__extraLarge_97',
                        mask__b6__large: 'NormalCard_mask__b6__large_bc',
                        mask__static: 'NormalCard_mask__static_ae',
                        mask__anim: 'NormalCard_mask__anim_b6',
                        icon: 'NormalCard_icon_cb',
                        icon__animPrepare: 'NormalCard_icon__animPrepare_a2',
                        icon__static__b0: 'NormalCard_icon__static__b0_3c',
                        icon__static__b1: 'NormalCard_icon__static__b1_36',
                        icon__static__b2: 'NormalCard_icon__static__b2_13',
                        icon__static__b3: 'NormalCard_icon__static__b3_6d',
                        icon__anim__b0: 'NormalCard_icon__anim__b0_e3',
                        icon__anim__b1: 'NormalCard_icon__anim__b1_04',
                        icon__static__b0__medium: 'NormalCard_icon__static__b0__medium_64',
                        icon__static__b1__medium: 'NormalCard_icon__static__b1__medium_b9',
                        icon__anim__b0__medium: 'NormalCard_icon__anim__b0__medium_a6',
                        icon__anim__b1__medium: 'NormalCard_icon__anim__b1__medium_6c',
                        icon__static__b0__extraLarge: 'NormalCard_icon__static__b0__extraLarge_0b',
                        icon__static__b0__large: 'NormalCard_icon__static__b0__large_7c',
                        icon__static__b1__extraLarge: 'NormalCard_icon__static__b1__extraLarge_8b',
                        icon__static__b1__large: 'NormalCard_icon__static__b1__large_f0',
                        icon__anim__b0__extraLarge: 'NormalCard_icon__anim__b0__extraLarge_2c',
                        icon__anim__b0__large: 'NormalCard_icon__anim__b0__large_07',
                        icon__anim__b1__extraLarge: 'NormalCard_icon__anim__b1__extraLarge_a7',
                        icon__anim__b1__large: 'NormalCard_icon__anim__b1__large_0a',
                        icon__anim__b2: 'NormalCard_icon__anim__b2_19',
                        icon__static__b2__medium: 'NormalCard_icon__static__b2__medium_92',
                        icon__anim__b2__medium: 'NormalCard_icon__anim__b2__medium_da',
                        icon__static__b2__extraLarge: 'NormalCard_icon__static__b2__extraLarge_99',
                        icon__static__b2__large: 'NormalCard_icon__static__b2__large_e3',
                        icon__anim__b2__extraLarge: 'NormalCard_icon__anim__b2__extraLarge_8e',
                        icon__anim__b2__large: 'NormalCard_icon__anim__b2__large_94',
                        icon__anim__b3: 'NormalCard_icon__anim__b3_e8',
                        icon__static__b3__medium: 'NormalCard_icon__static__b3__medium_1a',
                        icon__anim__b3__medium: 'NormalCard_icon__anim__b3__medium_eb',
                        icon__static__b3__extraLarge: 'NormalCard_icon__static__b3__extraLarge_a0',
                        icon__static__b3__large: 'NormalCard_icon__static__b3__large_e3',
                        icon__anim__b3__extraLarge: 'NormalCard_icon__anim__b3__extraLarge_92',
                        icon__anim__b3__large: 'NormalCard_icon__anim__b3__large_7a',
                        icon__huge: 'NormalCard_icon__huge_56',
                        icon__big: 'NormalCard_icon__big_c9',
                        icon__medium: 'NormalCard_icon__medium_87',
                        icon__small: 'NormalCard_icon__small_a6',
                        icon__b0: 'NormalCard_icon__b0_f2',
                        icon__b1: 'NormalCard_icon__b1_50',
                        icon__b0__medium: 'NormalCard_icon__b0__medium_d8',
                        icon__b1__medium: 'NormalCard_icon__b1__medium_d4',
                        icon__b0__extraLarge: 'NormalCard_icon__b0__extraLarge_3b',
                        icon__b0__large: 'NormalCard_icon__b0__large_32',
                        icon__b1__extraLarge: 'NormalCard_icon__b1__extraLarge_db',
                        icon__b1__large: 'NormalCard_icon__b1__large_53',
                        icon__b2: 'NormalCard_icon__b2_ae',
                        icon__b2__medium: 'NormalCard_icon__b2__medium_17',
                        icon__b2__extraLarge: 'NormalCard_icon__b2__extraLarge_b9',
                        icon__b2__large: 'NormalCard_icon__b2__large_a7',
                        icon__b3: 'NormalCard_icon__b3_28',
                        icon__b3__medium: 'NormalCard_icon__b3__medium_74',
                        icon__b3__extraLarge: 'NormalCard_icon__b3__extraLarge_64',
                        icon__b3__large: 'NormalCard_icon__b3__large_89',
                        icon__b4: 'NormalCard_icon__b4_f8',
                        icon__b4__medium: 'NormalCard_icon__b4__medium_c6',
                        icon__b4__extraLarge: 'NormalCard_icon__b4__extraLarge_eb',
                        icon__b4__large: 'NormalCard_icon__b4__large_90',
                        icon__b5: 'NormalCard_icon__b5_e9',
                        icon__b5__medium: 'NormalCard_icon__b5__medium_df',
                        icon__b5__extraLarge: 'NormalCard_icon__b5__extraLarge_e3',
                        icon__b5__large: 'NormalCard_icon__b5__large_2d',
                        icon__b6: 'NormalCard_icon__b6_dc',
                        icon__b6__medium: 'NormalCard_icon__b6__medium_73',
                        icon__b6__extraLarge: 'NormalCard_icon__b6__extraLarge_63',
                        icon__b6__large: 'NormalCard_icon__b6__large_c3',
                        statusNotActive: 'NormalCard_statusNotActive_9c',
                        statusNotActive__b0: 'NormalCard_statusNotActive__b0_4f',
                        statusNotActive__b1: 'NormalCard_statusNotActive__b1_78',
                        statusNotActive__b0__medium: 'NormalCard_statusNotActive__b0__medium_8f',
                        statusNotActive__b1__medium: 'NormalCard_statusNotActive__b1__medium_f6',
                        statusNotActive__b0__extraLarge: 'NormalCard_statusNotActive__b0__extraLarge_33',
                        statusNotActive__b0__large: 'NormalCard_statusNotActive__b0__large_bf',
                        statusNotActive__b1__extraLarge: 'NormalCard_statusNotActive__b1__extraLarge_d8',
                        statusNotActive__b1__large: 'NormalCard_statusNotActive__b1__large_10',
                        statusNotActive__b2: 'NormalCard_statusNotActive__b2_35',
                        statusNotActive__b2__medium: 'NormalCard_statusNotActive__b2__medium_f9',
                        statusNotActive__b2__extraLarge: 'NormalCard_statusNotActive__b2__extraLarge_09',
                        statusNotActive__b2__large: 'NormalCard_statusNotActive__b2__large_a0',
                        statusNotActive__b3: 'NormalCard_statusNotActive__b3_fe',
                        statusNotActive__b3__medium: 'NormalCard_statusNotActive__b3__medium_88',
                        statusNotActive__b3__extraLarge: 'NormalCard_statusNotActive__b3__extraLarge_b2',
                        statusNotActive__b3__large: 'NormalCard_statusNotActive__b3__large_69',
                        statusNotActive__b4: 'NormalCard_statusNotActive__b4_dd',
                        statusNotActive__b4__medium: 'NormalCard_statusNotActive__b4__medium_ae',
                        statusNotActive__b4__extraLarge: 'NormalCard_statusNotActive__b4__extraLarge_78',
                        statusNotActive__b4__large: 'NormalCard_statusNotActive__b4__large_d5',
                        statusNotActive__b5: 'NormalCard_statusNotActive__b5_02',
                        statusNotActive__b5__medium: 'NormalCard_statusNotActive__b5__medium_24',
                        statusNotActive__b5__extraLarge: 'NormalCard_statusNotActive__b5__extraLarge_f4',
                        statusNotActive__b5__large: 'NormalCard_statusNotActive__b5__large_1f',
                        statusNotActive__b6: 'NormalCard_statusNotActive__b6_9d',
                        statusNotActive__b6__medium: 'NormalCard_statusNotActive__b6__medium_cd',
                        statusNotActive__b6__extraLarge: 'NormalCard_statusNotActive__b6__extraLarge_09',
                        statusNotActive__b6__large: 'NormalCard_statusNotActive__b6__large_09',
                        widgetOverlay: 'NormalCard_widgetOverlay_09',
                        widgetOverlay__hide: 'NormalCard_widgetOverlay__hide_7e',
                        darken__show: 'NormalCard_darken__show_3f',
                    };
                let lu;
                !(function (e) {
                    ((e.Huge = 'huge'), (e.Big = 'big'), (e.Medium = 'medium'), (e.Small = 'small'));
                })(lu || (lu = {}));
                const mu = [G.B4, G.B5, G.B6],
                    cu = [G.B0, G.B1, G.B2],
                    du = {
                        [G.B0]: { [U.Big]: lu.Huge, [U.Medium]: lu.Huge, [U.Small]: lu.Big },
                        [G.B1]: { [U.Big]: lu.Huge, [U.Medium]: lu.Huge, [U.Small]: lu.Big },
                        [G.B2]: { [U.Big]: lu.Huge, [U.Medium]: lu.Huge, [U.Small]: lu.Big },
                        [G.B3]: { [U.Big]: lu.Huge, [U.Medium]: lu.Big, [U.Small]: lu.Big },
                        [G.B4]: { [U.Big]: lu.Big, [U.Medium]: lu.Big, [U.Small]: lu.Medium },
                        [G.B5]: { [U.Big]: lu.Medium, [U.Medium]: lu.Medium, [U.Small]: lu.Small },
                        [G.B6]: { [U.Big]: lu.Medium, [U.Medium]: lu.Small, [U.Small]: lu.Small },
                    },
                    Eu = [
                        'name',
                        'eventName',
                        'statusNotActive',
                        'description',
                        'conditions',
                        'children',
                        'onHoverChanged',
                        'calendarTooltip',
                        'widgetComponent',
                        'battlePassState',
                        'isDisabled',
                        'timeLeft',
                        'rewardList',
                        'statusActive',
                        'divider',
                        'belowStatusComponent',
                        'nameSuffixComponent',
                        'forceShowIcon',
                        'hideStatus',
                        'noWidgetSizes',
                        'classNames',
                        'resourceFolderGetter',
                        'textResourcesFolder',
                    ];
                function Au() {
                    return (
                        (Au =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Au.apply(this, arguments)
                    );
                }
                const bu = (e) => {
                    let u = e.name,
                        t = e.eventName,
                        a = e.statusNotActive,
                        _ = e.description,
                        n = e.conditions,
                        i = e.children,
                        s = e.onHoverChanged,
                        l = e.calendarTooltip,
                        m = void 0 === l ? '' : l,
                        c = e.widgetComponent,
                        d = e.battlePassState,
                        E = e.isDisabled,
                        A = e.timeLeft,
                        C = e.rewardList,
                        g = e.statusActive,
                        D = e.divider,
                        B = void 0 === D ? ' ' : D,
                        h = e.belowStatusComponent,
                        p = e.nameSuffixComponent,
                        f = e.forceShowIcon,
                        w = void 0 !== f && f,
                        N = e.hideStatus,
                        k = void 0 !== N && N,
                        y = e.noWidgetSizes,
                        T = void 0 === y ? [G.B5, G.B6] : y,
                        L = e.classNames,
                        S = e.resourceFolderGetter,
                        O = void 0 === S ? j : S,
                        I = e.textResourcesFolder,
                        W = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                _ = Object.keys(e);
                            for (a = 0; a < _.length; a++) ((t = _[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, Eu);
                    const P = X(),
                        $ = M(
                            [
                                ...K(
                                    'base',
                                    'icon',
                                    'footer',
                                    'name',
                                    'subtitle',
                                    'mask',
                                    'formatText',
                                    'icon__anim',
                                    'icon__static',
                                    'statusNotActive',
                                ),
                                'calendarIcon',
                            ],
                            su,
                        ),
                        H = x('model', v.None),
                        V = H.onItemClicked,
                        q = H.onInfoClicked,
                        Z = W.resourcesFolderName,
                        Q = W.size,
                        J = W.isSelected,
                        ee = W.showWidget,
                        ue = W.isNew,
                        te = W.modeName,
                        ae = W.index,
                        re = W.performance,
                        _e = Y(s),
                        ne = _e[0],
                        ie = _e[1],
                        oe = (0, b.useMemo)(() => du[Q][P], [Q, P]),
                        se = (0, b.useMemo)(() => {
                            const e = O(Z);
                            if (null !== e) {
                                const u = e.$dyn(`icon_${oe}`);
                                if (void 0 !== u) return { backgroundImage: `url(${u})` };
                            }
                        }, [O, Z, oe]),
                        le = ee || J,
                        me = mu.includes(Q),
                        ce = Q === G.B0,
                        de = Q === G.B1,
                        Ee = Q === G.B2,
                        be = Q === G.B3,
                        Fe = cu.includes(Q),
                        Ce = !T.includes(Q) && ee && c,
                        ge = le && !me,
                        De = ne && !me && !le,
                        Be = ne || (J && g),
                        he = P !== U.Big,
                        pe = C && C.length > 0 && !a && Fe,
                        fe = re && re.showPerfRisk,
                        ve = (0, b.useMemo)(
                            () =>
                                E
                                    ? R.strings.ranked_battles.rankedBattlesUnreachableView.subtitleText()
                                    : g || t || void 0,
                            [E, g, t],
                        ),
                        xe = (0, b.useMemo)(
                            () => (Fe || be ? a || '' : void 0 === a ? '' : a.replace('\n', ' ')),
                            [Fe, a, be],
                        );
                    let we = '';
                    de && _ === ve ? n && (we = o(n)) : (ce && _ === ve) || (we = o(_ + B + n));
                    const Ne = r()(
                            su.icon,
                            su[`icon__${oe}`],
                            $[`icon__${Q}`],
                            !me && su.icon__animPrepare,
                            ge && $[`icon__static__${Q}`],
                            De && $[`icon__anim__${Q}`],
                        ),
                        ke = r()(su.mask, $[`mask__${Q}`], ge && su.mask__static, De && su.mask__anim),
                        ye = r()(
                            $.subtitle,
                            $[`subtitle__${Q}`],
                            (t || !me) && su.subtitle__normal,
                            !Fe && su.subtitle__noReward,
                            g && me && su.subtitle__statusActive,
                            g && le && su.subtitle__staticPrepare,
                            Be && su.subtitle__anim,
                            E && su.subtitle__disable,
                            null == L ? void 0 : L.subtitle,
                        ),
                        Te = r()(
                            su.statusDescription,
                            Ee && su.statusDescription__position,
                            Fe && su.statusDescription__color,
                        ),
                        Le = r()($.footer, (ne || J) && !ee && be && su.footer__anim, null == L ? void 0 : L.footer),
                        Se = r()($.formatText, $[`formatText__${Q}`]),
                        Oe = r()(su.darken, ee && su.darken__show),
                        Re = r()(su.widgetOverlay, !Ce && su.widgetOverlay__hide, null == L ? void 0 : L.widgetOverlay);
                    return F().createElement(
                        'div',
                        { className: r()($.base, $[`base__${Q}`]) },
                        F().createElement(
                            Ae,
                            Au({ onHoverChanged: ie, isDisabled: E }, W, {
                                onItemClicked: V,
                                onInfoClicked: q,
                                resourceFolderGetter: O,
                            }),
                            pe && F().createElement(ou, { size: Q, rewardsList: C }),
                            a &&
                                F().createElement(
                                    'div',
                                    { className: r()($.statusNotActive, $[`statusNotActive__${Q}`]) },
                                    F().createElement(z, { text: xe, classMix: Se }),
                                ),
                            F().createElement('div', { className: Oe }),
                            c && F().createElement('div', { className: Re }, c),
                            i,
                            (!Ce || w) &&
                                F().createElement(
                                    'div',
                                    { className: ke },
                                    F().createElement('div', { className: Ne, style: se }),
                                ),
                            F().createElement('div', { className: r()(su.name, $.name, $[`name__${Q}`]) }, u, p),
                            F().createElement(
                                'div',
                                { className: ye },
                                !k && (!Ee || E) && F().createElement(z, { classMix: Se, text: ve || '' }),
                                we &&
                                    Fe &&
                                    !E &&
                                    (!Ce || Fe) &&
                                    F().createElement(
                                        'div',
                                        { className: Te },
                                        F().createElement(z, { classMix: Se, text: we }),
                                    ),
                                fe &&
                                    Fe &&
                                    F().createElement(Ye, {
                                        size: Q,
                                        modeName: te,
                                        performanceRisk: re.performanceRisk,
                                        cut: !1,
                                        textFolder: I,
                                    }),
                                F().createElement(
                                    'div',
                                    { className: r()(su.belowStatus, null == L ? void 0 : L.belowStatus) },
                                    h,
                                ),
                            ),
                            n &&
                                F().createElement(
                                    'div',
                                    { className: Le },
                                    F().createElement(z, { classMix: Se, text: o(n) }),
                                ),
                            A &&
                                !ue &&
                                F().createElement(Xe, {
                                    index: ae,
                                    text: A,
                                    isSmall: he,
                                    classMix: r()(su.timeLeft, he && su.timeLeft__small),
                                    tooltipId: m,
                                    modeName: te,
                                }),
                            F().createElement(Je, { modeName: te, isDisabled: E, battlePassState: d }),
                            fe &&
                                !Fe &&
                                F().createElement(Ye, {
                                    size: Q,
                                    modeName: te,
                                    performanceRisk: re.performanceRisk,
                                    cut: !0,
                                    textFolder: I,
                                }),
                        ),
                    );
                };
                let Fu, Cu, gu, Du, Bu, hu, pu;
                (!(function (e) {
                    ((e[(e.Progression = 0)] = 'Progression'),
                        (e[(e.RankRewards = 1)] = 'RankRewards'),
                        (e[(e.YearlyRewards = 2)] = 'YearlyRewards'),
                        (e[(e.WeeklyQuests = 3)] = 'WeeklyQuests'),
                        (e[(e.Shop = 4)] = 'Shop'),
                        (e[(e.Leaderboard = 5)] = 'Leaderboard'),
                        (e[(e.YearlyStatistics = 6)] = 'YearlyStatistics'));
                })(Fu || (Fu = {})),
                    (function (e) {
                        ((e[(e.First = 6)] = 'First'),
                            (e[(e.Second = 5)] = 'Second'),
                            (e[(e.Third = 4)] = 'Third'),
                            (e[(e.Fourth = 3)] = 'Fourth'),
                            (e[(e.Fifth = 2)] = 'Fifth'),
                            (e[(e.Sixth = 1)] = 'Sixth'));
                    })(Cu || (Cu = {})),
                    (function (e) {
                        ((e.First = 'first'), (e.Second = 'second'), (e.Third = 'third'));
                    })(gu || (gu = {})),
                    (function (e) {
                        ((e[(e.A = 1)] = 'A'),
                            (e[(e.B = 2)] = 'B'),
                            (e[(e.C = 3)] = 'C'),
                            (e[(e.D = 4)] = 'D'),
                            (e[(e.E = 5)] = 'E'));
                    })(Du || (Du = {})),
                    (function (e) {
                        ((e[(e.Season = 0)] = 'Season'), (e[(e.Day = 1)] = 'Day'));
                    })(Bu || (Bu = {})),
                    (function (e) {
                        ((e.Achieved = 'achieved'), (e.Possible = 'possible'), (e.NotAchieved = 'notAchieved'));
                    })(hu || (hu = {})),
                    (function (e) {
                        ((e.WCI = 'wci'), (e.OLS = 'ols'));
                    })(pu || (pu = {})));
                const fu = R.strings.comp7_ext.division,
                    vu = { [Du.A]: 'A', [Du.B]: 'B', [Du.C]: 'C', [Du.D]: 'D', [Du.E]: 'E' },
                    xu = (e) => fu.$dyn(vu[e]),
                    wu = {
                        [Cu.First]: 'first',
                        [Cu.Second]: 'second',
                        [Cu.Third]: 'third',
                        [Cu.Fourth]: 'fourth',
                        [Cu.Fifth]: 'fifth',
                        [Cu.Sixth]: 'sixth',
                    },
                    Nu = [Cu.First, Cu.Second, Cu.Third, Cu.Fourth],
                    ku = (e) => Nu.includes(e);
                var yu = t(926),
                    Tu = t.n(yu);
                let Lu, Su, Ou;
                (!(function (e) {
                    ((e[(e.ExtraSmall = N.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = N.small.width)] = 'Small'),
                        (e[(e.Medium = N.medium.width)] = 'Medium'),
                        (e[(e.Large = N.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = N.extraLarge.width)] = 'ExtraLarge'));
                })(Lu || (Lu = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = N.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = N.small.width)] = 'Small'),
                            (e[(e.Medium = N.medium.width)] = 'Medium'),
                            (e[(e.Large = N.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = N.extraLarge.width)] = 'ExtraLarge'));
                    })(Su || (Su = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = N.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = N.small.height)] = 'Small'),
                            (e[(e.Medium = N.medium.height)] = 'Medium'),
                            (e[(e.Large = N.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = N.extraLarge.height)] = 'ExtraLarge'));
                    })(Ou || (Ou = {})));
                const Ru = () => {
                        const e = (0, b.useContext)(L),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return Lu.ExtraLarge;
                                    case e.large:
                                        return Lu.Large;
                                    case e.medium:
                                        return Lu.Medium;
                                    case e.small:
                                        return Lu.Small;
                                    case e.extraSmall:
                                        return Lu.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Lu.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return Su.ExtraLarge;
                                    case e.largeWidth:
                                        return Su.Large;
                                    case e.mediumWidth:
                                        return Su.Medium;
                                    case e.smallWidth:
                                        return Su.Small;
                                    case e.extraSmallWidth:
                                        return Su.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Su.ExtraSmall);
                                }
                            })(e),
                            _ = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return Ou.ExtraLarge;
                                    case e.largeHeight:
                                        return Ou.Large;
                                    case e.mediumHeight:
                                        return Ou.Medium;
                                    case e.smallHeight:
                                        return Ou.Small;
                                    case e.extraSmallHeight:
                                        return Ou.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Ou.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: _, remScreenWidth: u, remScreenHeight: t };
                    },
                    Mu = ['children', 'className'];
                function Iu() {
                    return (
                        (Iu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Iu.apply(this, arguments)
                    );
                }
                const Wu = {
                        [Su.ExtraSmall]: '',
                        [Su.Small]: Tu().SMALL_WIDTH,
                        [Su.Medium]: `${Tu().SMALL_WIDTH} ${Tu().MEDIUM_WIDTH}`,
                        [Su.Large]: `${Tu().SMALL_WIDTH} ${Tu().MEDIUM_WIDTH} ${Tu().LARGE_WIDTH}`,
                        [Su.ExtraLarge]: `${Tu().SMALL_WIDTH} ${Tu().MEDIUM_WIDTH} ${Tu().LARGE_WIDTH} ${Tu().EXTRA_LARGE_WIDTH}`,
                    },
                    Pu = {
                        [Ou.ExtraSmall]: '',
                        [Ou.Small]: Tu().SMALL_HEIGHT,
                        [Ou.Medium]: `${Tu().SMALL_HEIGHT} ${Tu().MEDIUM_HEIGHT}`,
                        [Ou.Large]: `${Tu().SMALL_HEIGHT} ${Tu().MEDIUM_HEIGHT} ${Tu().LARGE_HEIGHT}`,
                        [Ou.ExtraLarge]: `${Tu().SMALL_HEIGHT} ${Tu().MEDIUM_HEIGHT} ${Tu().LARGE_HEIGHT} ${Tu().EXTRA_LARGE_HEIGHT}`,
                    },
                    $u = {
                        [Lu.ExtraSmall]: '',
                        [Lu.Small]: Tu().SMALL,
                        [Lu.Medium]: `${Tu().SMALL} ${Tu().MEDIUM}`,
                        [Lu.Large]: `${Tu().SMALL} ${Tu().MEDIUM} ${Tu().LARGE}`,
                        [Lu.ExtraLarge]: `${Tu().SMALL} ${Tu().MEDIUM} ${Tu().LARGE} ${Tu().EXTRA_LARGE}`,
                    },
                    Hu = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    _ = Object.keys(e);
                                for (a = 0; a < _.length; a++) ((t = _[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Mu);
                        const _ = Ru(),
                            n = _.mediaWidth,
                            i = _.mediaHeight,
                            o = _.mediaSize;
                        return F().createElement('div', Iu({ className: r()(t, Wu[n], Pu[i], $u[o]) }, a), u);
                    },
                    zu = ['children'],
                    ju = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    _ = Object.keys(e);
                                for (a = 0; a < _.length; a++) ((t = _[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, zu);
                        return F().createElement(O, null, F().createElement(Hu, t, u));
                    },
                    Gu = {
                        widget: 'Comp7BattleCard_widget_db',
                        base__b0: 'Comp7BattleCard_base__b0_98',
                        base__b1: 'Comp7BattleCard_base__b1_61',
                        base__b2: 'Comp7BattleCard_base__b2_b8',
                        belowStatus: 'Comp7BattleCard_belowStatus_dc',
                    },
                    Uu = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Vu, qu;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                })(Vu || (Vu = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(qu || (qu = {})));
                const Ku = ({ size: e = Vu.Default }) => {
                        const u = r()(Uu.background, Uu[`background__${e}`]);
                        return F().createElement('div', { className: u });
                    },
                    Yu = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    Xu = ({ size: e }) => {
                        const u = r()(Yu.base, Yu[`base__${e}`]);
                        return F().createElement('div', { className: u });
                    },
                    Zu = {
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
                    Qu = (0, b.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: a, isComplete: _, withoutBounce: n }) => {
                            const i = r()(
                                    Zu.base,
                                    Zu[`base__${e}`],
                                    t && Zu.base__disabled,
                                    _ && Zu.base__finished,
                                    n && Zu.base__withoutBounce,
                                ),
                                o = !t && !_;
                            return F().createElement(
                                'div',
                                { className: i, style: a, ref: u },
                                F().createElement('div', { className: Zu.pattern }),
                                F().createElement('div', { className: Zu.gradient }),
                                o && F().createElement(Xu, { size: e }),
                            );
                        },
                    ),
                    Ju = (e, u) => {
                        let t;
                        const a = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(a));
                        };
                    };
                let et, ut;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(et || (et = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(ut || (ut = {})));
                const tt = (e) => (e ? { left: 0 } : { right: 0 }),
                    at = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    rt = (e) => ({ transitionDuration: `${e}ms` }),
                    _t = (0, b.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: _,
                            to: n,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                            className: s,
                        }) => {
                            const l = n < a,
                                m = (0, b.useState)(et.Idle),
                                c = m[0],
                                d = m[1],
                                E = c === et.End,
                                A = c === et.Idle,
                                C = c === et.Grow,
                                g = c === et.Shrink,
                                D = (0, b.useCallback)(
                                    (e) => {
                                        (d(e), o && o(e));
                                    },
                                    [o],
                                ),
                                B = (0, b.useCallback)(
                                    (e, u) =>
                                        Ju(() => {
                                            D(e);
                                        }, u),
                                    [D],
                                );
                            (0, b.useEffect)(() => {
                                if (!t)
                                    return A
                                        ? B(et.Grow, u)
                                        : C
                                          ? B(et.Shrink, e)
                                          : g
                                            ? B(et.End, e)
                                            : void (E && i && i());
                            }, [B, t, E, C, A, g, i, u, e]);
                            const h = (0, b.useMemo)(() => Object.assign({ width: '100%' }, rt(e), tt(l)), [l, e]),
                                p = (0, b.useMemo)(() => Object.assign({ width: '0%' }, rt(e), tt(l)), [l, e]),
                                f = (0, b.useMemo)(() => Object.assign({ width: '0%' }, at(l, a), rt(e)), [a, l, e]),
                                v = (0, b.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(n - a)}%` }, at(l, a), rt(e)),
                                    [a, l, n, e],
                                );
                            if (E) return null;
                            const x = r()(
                                'ProgressBarDeltaGrow_base_7e',
                                s,
                                l && 0 === n && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return F().createElement(
                                'div',
                                { style: A ? f : v, className: x },
                                F().createElement(
                                    'div',
                                    { style: g ? p : h, className: 'ProgressBarDeltaGrow_glow_68' },
                                    F().createElement(Xu, { size: _ }),
                                ),
                            );
                        },
                    ),
                    nt = (0, b.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: r,
                            isComplete: _,
                            animationSettings: n,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                        }) => {
                            const s = e < t,
                                l = (0, b.useState)(!1),
                                m = l[0],
                                c = l[1],
                                d = (0, b.useCallback)(
                                    (e) => {
                                        (e === et.Shrink && c(!0), o && o(e));
                                    },
                                    [o],
                                ),
                                E = (0, b.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                A = (0, b.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${n.line.duration}ms` }),
                                    [n.line.duration, e],
                                );
                            return F().createElement(
                                F().Fragment,
                                null,
                                F().createElement(Qu, {
                                    size: u,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: _,
                                    withoutBounce: s && 0 === e,
                                    baseStyles: m ? A : E,
                                }),
                                t >= 0 &&
                                    F().createElement(_t, {
                                        transitionDuration: n.delta.duration,
                                        transitionDelay: n.delta.delay,
                                        onChangeAnimationState: d,
                                        freezed: n.freezed,
                                        onEndAnimation: i,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: n.delta.className,
                                    }),
                            );
                        },
                    ),
                    it = (0, b.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: r,
                            to: _,
                            onEndAnimation: n,
                            onChangeAnimationState: i,
                        }) => {
                            const o = _ < a,
                                s = (0, b.useState)(ut.Idle),
                                l = s[0],
                                m = s[1],
                                c = l === ut.In,
                                d = l === ut.End,
                                E = l === ut.Idle,
                                A = (0, b.useCallback)(
                                    (e) => {
                                        (m(e), i && i(e));
                                    },
                                    [i],
                                );
                            ((0, b.useEffect)(() => {
                                if (E && !t)
                                    return Ju(() => {
                                        A(ut.In);
                                    }, u);
                            }, [A, t, E, u]),
                                (0, b.useEffect)(() => {
                                    if (c)
                                        return Ju(() => {
                                            (n && n(), A(ut.End));
                                        }, e + u);
                                }, [A, c, n, u, e]));
                            const C = (0, b.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [o ? 'left' : 'right']: '0',
                                    }),
                                    [o, u, e],
                                ),
                                g = (0, b.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [o ? 'left' : 'right']: '0',
                                    }),
                                    [o, u, e],
                                ),
                                D = (0, b.useMemo)(
                                    () => ({ width: `${Math.abs(a - _)}%`, left: `${o ? _ : a}%` }),
                                    [a, o, _],
                                );
                            return d
                                ? null
                                : F().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: D },
                                      F().createElement(
                                          'div',
                                          { style: E ? C : g, className: 'ProgressBarDeltaSimple_delta_99' },
                                          F().createElement(Xu, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    ot = (0, b.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: r,
                            isComplete: _,
                            animationSettings: n,
                            onChangeAnimationState: i,
                            onEndAnimation: o,
                        }) => {
                            const s = (0, b.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${n.line.duration}ms`,
                                    transitionDelay: `${n.line.delay}ms`,
                                }),
                                [n.line.delay, n.line.duration, e],
                            );
                            return F().createElement(
                                F().Fragment,
                                null,
                                F().createElement(Qu, {
                                    size: u,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: _,
                                    baseStyles: s,
                                }),
                                t >= 0 &&
                                    F().createElement(it, {
                                        transitionDuration: n.delta.duration,
                                        transitionDelay: n.delta.delay,
                                        freezed: n.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: i,
                                        onEndAnimation: o,
                                    }),
                            );
                        },
                    ),
                    st = ['onComplete', 'onEndAnimation'];
                function lt() {
                    return (
                        (lt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        lt.apply(this, arguments)
                    );
                }
                const mt = (0, b.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    _ = Object.keys(e);
                                for (a = 0; a < _.length; a++) ((t = _[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, st);
                        const r = (0, b.useState)(!1),
                            _ = r[0],
                            n = r[1],
                            i = (0, b.useCallback)(() => {
                                const e = 100 === a.to;
                                (e !== _ && n(e), e && u && u(), t && t());
                            }, [_, u, t, a.to]);
                        switch (a.animationSettings.type) {
                            case qu.Simple:
                                return F().createElement(ot, lt({}, a, { onEndAnimation: i, isComplete: _ }));
                            case qu.Growing:
                                return F().createElement(nt, lt({}, a, { onEndAnimation: i, isComplete: _ }));
                            default:
                                return null;
                        }
                    }),
                    ct = ({ size: e, value: u, lineRef: t, disabled: a, onComplete: r }) => {
                        const _ = (0, b.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            n = 100 === u;
                        return (
                            (0, b.useEffect)(() => {
                                n && r && r();
                            }, [n, r]),
                            F().createElement(Qu, { size: e, disabled: a, baseStyles: _, isComplete: n, lineRef: t })
                        );
                    },
                    dt = ['onEndAnimation'];
                function Et() {
                    return (
                        (Et =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Et.apply(this, arguments)
                    );
                }
                const At = (0, b.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                _ = Object.keys(e);
                            for (a = 0; a < _.length; a++) ((t = _[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, dt);
                    const a = (0, b.useRef)({}),
                        r = (0, b.useCallback)(() => {
                            ((a.current.from = void 0), u && u());
                        }, [u]),
                        _ = 'number' == typeof a.current.from ? a.current.from : t.from;
                    return (
                        (a.current.from = _),
                        F().createElement(
                            mt,
                            Et({}, t, {
                                onEndAnimation: r,
                                key: `${_}-${t.to}-${null == t ? void 0 : t.additionalKey}`,
                                from: _,
                            }),
                        )
                    );
                });
                function bt() {
                    return (
                        (bt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        bt.apply(this, arguments)
                    );
                }
                const Ft = (0, b.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: a,
                            deltaFrom: r,
                            additionalKey: _,
                            animationSettings: n,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                            onComplete: s,
                        }) => {
                            if (r === u)
                                return F().createElement(ct, {
                                    key: `${r}-${u}-${_}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: a,
                                    onComplete: s,
                                });
                            const l = {
                                from: r,
                                to: u,
                                size: e,
                                additionalKey: _,
                                lineRef: t,
                                disabled: a,
                                animationSettings: n,
                                onComplete: s,
                                onEndAnimation: i,
                                onChangeAnimationState: o,
                            };
                            return n.withStack
                                ? F().createElement(At, l)
                                : F().createElement(mt, bt({ key: `${r}-${u}-${_}` }, l));
                        },
                    ),
                    Ct = (e) => {
                        var u, t, a, r, _, n, i, o, s, l, m, c, d, E, A, b, F, C, g, D;
                        return {
                            '--progress-base': `url(${e.bgImageBase})`,
                            '--progress-bg-height': null != (u = null == (t = e.bg) ? void 0 : t.height) ? u : '12rem',
                            '--progress-bg-height-small':
                                null != (a = null == (r = e.bg) ? void 0 : r.heightSmall) ? a : '2rem',
                            '--progress-line-base': e.line.bgColorBase,
                            '--progress-line-disabled': e.line.bgColorDisabled,
                            '--progress-line-finished': e.line.bgColorFinished,
                            '--progress-line-filter': null != (_ = e.line.filter) ? _ : 'none',
                            '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                            '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                            '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                            '--progress-pattern-size': null != (n = e.pattern.size) ? n : '3rem 10rem',
                            '--progress-pattern-border-size': null != (i = e.pattern.borderSize) ? i : '1rem',
                            '--progress-pattern-gradient':
                                null != (o = e.pattern.gradient)
                                    ? o
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75))',
                            '--progress-pattern-gradient-finished':
                                null != (s = e.pattern.gradientFinished)
                                    ? s
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.5))',
                            '--progress-pattern-gradient-mixBlendMode':
                                null != (l = e.pattern.mixBlendMode) ? l : 'overlay',
                            '--progress-glow': `url('${e.glow}')`,
                            '--progress-glow-width':
                                null != (m = null == (c = e.glowSettings) ? void 0 : c.width) ? m : '60rem',
                            '--progress-glow-height':
                                null != (d = null == (E = e.glowSettings) ? void 0 : E.height) ? d : '100rem',
                            '--progress-glow-small-width':
                                null != (A = null == (b = e.glowSettings) ? void 0 : b.smallWidth) ? A : '44rem',
                            '--progress-glow-small-height':
                                null != (F = null == (C = e.glowSettings) ? void 0 : C.smallHeight) ? F : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (g = null == (D = e.glowSettings) ? void 0 : D.mixBlendMode) ? g : 'lighten',
                            '--progress-glow-small': `url('${e.glowSmall}')`,
                            '--progress-delta-color': e.delta.color,
                            '--progress-delta-shadow': e.delta.shadow,
                        };
                    },
                    gt = (e, u, t) => (t < e ? e : t > u ? u : t),
                    Dt = (e, u, t) => ('number' == typeof t ? (gt(0, u, t) / u) * 100 : e),
                    Bt = {
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
                    ht = {
                        freezed: !1,
                        withStack: !1,
                        type: qu.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    pt = (0, b.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = Bt,
                            size: t = Vu.Default,
                            animationSettings: a = ht,
                            disabled: _ = !1,
                            withoutBackground: n = !1,
                            value: i,
                            deltaFrom: o,
                            additionalKey: s,
                            lineRef: l,
                            onChangeAnimationState: m,
                            onEndAnimation: c,
                            onComplete: d,
                            className: E,
                        }) => {
                            const A = (function (e, u, t) {
                                return (0, b.useMemo)(() => {
                                    const a = (gt(0, u, e) / u) * 100;
                                    return { value: a, deltaFrom: Dt(a, u, t) };
                                }, [t, u, e]);
                            })(i, e, o);
                            return F().createElement(
                                'div',
                                { className: r()(Uu.base, E, Uu[`base__${t}`]), style: Ct(u) },
                                !n && F().createElement(Ku, { size: t }),
                                F().createElement(Ft, {
                                    size: t,
                                    lineRef: l,
                                    disabled: _,
                                    value: A.value,
                                    deltaFrom: A.deltaFrom,
                                    additionalKey: s,
                                    animationSettings: a,
                                    onEndAnimation: c,
                                    onChangeAnimationState: m,
                                    onComplete: d,
                                }),
                            );
                        },
                    ),
                    ft = 'Progress_dash_e0',
                    vt = ({ rank: e, currentScore: u, prevScore: t, divisionInfo: a, className: _ }) =>
                        ku(e)
                            ? F().createElement(
                                  'div',
                                  { className: r()('Progress_base_ef', _) },
                                  F().createElement(
                                      'div',
                                      { className: 'Progress_progress_b0' },
                                      F().createElement(pt, {
                                          size: Vu.Small,
                                          value: u - a.from,
                                          maxValue: a.to - a.from,
                                          deltaFrom: t - a.from,
                                      }),
                                  ),
                                  F().createElement(
                                      'div',
                                      { className: 'Progress_status_01' },
                                      F().createElement(I, {
                                          text: R.strings.mode_selector.mode.comp7.progress(),
                                          binding: {
                                              score: F().createElement(
                                                  'span',
                                                  { className: 'Progress_statusPoints_c2' },
                                                  u,
                                              ),
                                              scoreToNextDivision: a.to,
                                          },
                                      }),
                                  ),
                              )
                            : F().createElement(
                                  'div',
                                  { className: 'Progress_points_a1' },
                                  F().createElement('div', { className: ft }),
                                  F().createElement('div', { className: 'Progress_score_06' }, u),
                                  F().createElement('div', { className: r()(ft, 'Progress_dash__right_b4') }),
                              ),
                    xt = {
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
                    wt = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Nt = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    kt = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    yt = (0, b.memo)(({ text: e, binding: u, classMix: t }) => {
                        const a = (0, b.useCallback)((e) => ({ color: `#${e}` }), []),
                            r = (0, b.useMemo)(() => u || {}, [u]);
                        let _ = wt.exec(e),
                            n = e,
                            i = 0;
                        for (; _; ) {
                            const t = _[0],
                                o = Nt.exec(t),
                                s = kt.exec(t),
                                l = _[1];
                            if (o && s) {
                                const e = o[0],
                                    _ = e + i++ + e;
                                ((n = n.replace(t, `%(${_})`)),
                                    (r[_] = xt[e]
                                        ? F().createElement(
                                              'span',
                                              { className: xt[e] },
                                              F().createElement(I, { text: l, binding: u }),
                                          )
                                        : F().createElement(
                                              'span',
                                              { style: a(e) },
                                              F().createElement(I, { text: l, binding: u }),
                                          )));
                            }
                            _ = wt.exec(e);
                        }
                        return F().createElement(I, { text: n, classMix: t, binding: r });
                    }),
                    Tt = 'QualificationCounter_dash_64',
                    Lt = ({ battlesCount: e, maxBattlesCount: u, className: t }) =>
                        F().createElement(
                            'div',
                            { className: r()('QualificationCounter_base_0f', t) },
                            F().createElement('div', { className: Tt }),
                            F().createElement(yt, {
                                text: R.strings.comp7_ext.qualification.battlesCounter(),
                                binding: {
                                    battleIcon: F().createElement(
                                        'div',
                                        { className: 'QualificationCounter_iconContainer_1b' },
                                        F().createElement('div', { className: 'QualificationCounter_battleIcon_64' }),
                                    ),
                                    battlesCount: e,
                                    maxBattlesCount: u,
                                },
                                classMix: 'QualificationCounter_score_31',
                            }),
                            F().createElement('div', { className: r()(Tt, 'QualificationCounter_dash__right_f9') }),
                        ),
                    St = ({ rankInactivityCount: e, className: u }) => {
                        const t = 0 === e;
                        return F().createElement(
                            'div',
                            { className: r()('Warning_base_28', t && 'Warning_base__warn_8b', u) },
                            F().createElement(I, {
                                text: R.strings.mode_selector.mode.comp7.warning(),
                                binding: { count: e },
                                classMix: 'Warning_value_38',
                            }),
                            F().createElement(
                                'div',
                                { className: 'Warning_timer_37' },
                                F().createElement('div', { className: 'Warning_lighting_17' }),
                            ),
                        );
                    },
                    Ot = {
                        base: 'Progression_base_88',
                        progress: 'Progression_progress_5f',
                        warning: 'Progression_warning_21',
                        battlesCounter__b0: 'Progression_battlesCounter__b0_e6',
                        battlesCounter__b1: 'Progression_battlesCounter__b1_12',
                        battlesCounter__b2: 'Progression_battlesCounter__b2_43',
                        battlesCounter: 'Progression_battlesCounter_7c',
                    },
                    Rt = R.strings.comp7_ext.scoreTooltip,
                    Mt = ({
                        rankInactivityCount: e,
                        hasRankInactivity: u,
                        rank: t,
                        currentScore: a,
                        prevScore: _,
                        divisionInfo: n,
                        size: i,
                        qualificationModel: o,
                    }) =>
                        F().createElement(
                            F().Fragment,
                            null,
                            F().createElement(
                                'div',
                                { className: Ot.base },
                                o.isActive
                                    ? F().createElement(
                                          'div',
                                          { className: r()(Ot.battlesCounter, Ot[`battlesCounter__${i}`]) },
                                          F().createElement(Lt, {
                                              battlesCount: o.battlesCount,
                                              maxBattlesCount: o.maxBattlesCount,
                                          }),
                                      )
                                    : F().createElement(
                                          me,
                                          { header: Rt.header(), body: Rt.body() },
                                          F().createElement(vt, {
                                              rank: t,
                                              currentScore: a,
                                              prevScore: _,
                                              divisionInfo: n,
                                              className: Ot.progress,
                                          }),
                                      ),
                            ),
                            u &&
                                F().createElement(
                                    re,
                                    {
                                        contentId: R.views.comp7.mono.lobby.tooltips.rank_inactivity_tooltip('resId'),
                                        ignoreShowDelay: !0,
                                    },
                                    F().createElement(
                                        'div',
                                        null,
                                        F().createElement(St, { rankInactivityCount: e, className: Ot.warning }),
                                    ),
                                ),
                        );
                let It;
                !(function (e) {
                    ((e[(e.x22 = 22)] = 'x22'),
                        (e[(e.x40 = 40)] = 'x40'),
                        (e[(e.x48 = 48)] = 'x48'),
                        (e[(e.x64 = 64)] = 'x64'),
                        (e[(e.x84 = 84)] = 'x84'),
                        (e[(e.x110 = 110)] = 'x110'),
                        (e[(e.x150 = 150)] = 'x150'),
                        (e[(e.x200 = 200)] = 'x200'),
                        (e[(e.x260 = 260)] = 'x260'),
                        (e[(e.x320 = 320)] = 'x320'),
                        (e[(e.x420 = 420)] = 'x420'),
                        (e[(e.x600 = 600)] = 'x600'));
                })(It || (It = {}));
                const Wt = 'RankEmblem_base_2d',
                    Pt = ({ size: e, seasonName: u, className: t }) => {
                        const a = R.images.comp7.gui.maps.icons.ranks.$dyn(u).$num(e);
                        return F().createElement('div', {
                            className: r()(Wt, t),
                            style: { backgroundImage: `url(${a.$dyn('qualification')})`, '--imageSize': `${e}rem` },
                        });
                    },
                    $t = (e) => wu[e],
                    Ht = ({ rank: e, size: u, division: t, seasonName: a, className: _ }) => {
                        const n = (0, b.useMemo)(() => {
                            const r = R.images.comp7.gui.maps.icons.ranks.$dyn(a).$num(u),
                                _ = ku(e) && void 0 !== t ? `_${xu(t)}` : '';
                            return { backgroundImage: `url(${r.$dyn(`${$t(e)}${_}`)})`, '--imageSize': `${u}rem` };
                        }, [a, u, e, t]);
                        return F().createElement('div', { className: r()(Wt, _), style: n });
                    },
                    zt = ({ widget: e, className: u }) => {
                        const t = Ru().mediaSize < Lu.Medium,
                            a = e.qualificationModel.isActive;
                        return F().createElement(
                            re,
                            { contentId: R.views.comp7.mono.lobby.tooltips.progression_tooltip('resId') },
                            F().createElement(
                                'div',
                                { onMouseEnter: C.O.sound.play.highlight },
                                a
                                    ? F().createElement(Pt, {
                                          size: t ? It.x64 : It.x150,
                                          seasonName: e.seasonName,
                                          className: u,
                                      })
                                    : F().createElement(Ht, {
                                          seasonName: e.seasonName,
                                          rank: e.rank,
                                          division: t ? void 0 : e.divisionInfo.name,
                                          size: t ? It.x64 : It.x150,
                                          className: u,
                                      }),
                            ),
                        );
                    },
                    jt = ['size', 'description', 'showWidget', 'widget'];
                function Gt() {
                    return (
                        (Gt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Gt.apply(this, arguments)
                    );
                }
                const Ut = R.strings.mode_selector.mode.comp7.widgetDescription,
                    Vt = [G.B0, G.B1],
                    qt = (e) => {
                        if (e.qualificationModel.isActive) {
                            const u = e.qualificationModel.maxBattlesCount;
                            return i(Ut.qualification(u), { maxBattlesCount: u });
                        }
                        const u = ((e, u = { upperCase: !1 }) =>
                            ((e, u) => `${e.$dyn(wu[u])}`)(
                                u.upperCase ? R.strings.comp7_ext.rankUpper : R.strings.comp7_ext.rank,
                                e,
                            ))(e.rank);
                        return ku(e.rank)
                            ? i(Ut.status(), {
                                  rank: u,
                                  division: ((t = e.divisionInfo.name), i(fu.text(), { division: xu(t) })),
                              })
                            : u;
                        var t;
                    },
                    Kt = R.images.gui.maps.icons.mode_selector.mode.comp7;
                var Yt, Xt;
                ((Yt = R.views.comp7.lobby.Comp7BattleCard()),
                    (Xt = (e) => {
                        let u = e.size,
                            t = e.description,
                            a = e.showWidget,
                            r = e.widget,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    _ = Object.keys(e);
                                for (a = 0; a < _.length; a++) ((t = _[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, jt);
                        const n = r && r.isEnabled,
                            i = a && n && Vt.includes(u);
                        return F().createElement(
                            ju,
                            null,
                            F().createElement(
                                'div',
                                { className: Gu[`base__${u}`] },
                                F().createElement(
                                    bu,
                                    Gt(
                                        {
                                            widgetComponent:
                                                n && F().createElement(zt, { widget: r, className: Gu.widget }),
                                            showWidget: a,
                                            size: u,
                                            belowStatusComponent: i && F().createElement(Mt, Gt({}, r, { size: u })),
                                            description: a && n ? qt(r) : t,
                                            classNames: { belowStatus: Gu.belowStatus },
                                            widget: r,
                                        },
                                        _,
                                        {
                                            calendarTooltip: 'comp7CalendarDayExtendedInfo',
                                            resourceFolderGetter: () => (r ? Kt.$dyn(r.seasonName) : null),
                                        },
                                    ),
                                ),
                            ),
                        );
                    }),
                    p().set(Yt, Xt),
                    document.dispatchEvent(new CustomEvent(Yt)));
            },
            363: (e) => {
                'use strict';
                e.exports = React;
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
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, a] = deferred[o], _ = !0, n = 0; n < u.length; n++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[n]))
                            ? u.splice(n--, 1)
                            : ((_ = !1), a < r && (r = a));
                    if (_) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, a];
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
        (__webpack_require__.j = 'lobby/Comp7BattleCard/Comp7BattleCard'),
        (() => {
            var e = { 'lobby/Comp7BattleCard/Comp7BattleCard': 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        r,
                        [_, n, i] = t,
                        o = 0;
                    if (_.some((u) => 0 !== e[u])) {
                        for (a in n) __webpack_require__.o(n, a) && (__webpack_require__.m[a] = n[a]);
                        if (i) var s = i(__webpack_require__);
                    }
                    for (u && u(t); o < _.length; o++)
                        ((r = _[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(s);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/comp7.vendors'], () => __webpack_require__(82));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
