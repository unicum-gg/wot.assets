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
                t.d(u, { O: () => ie });
                var a = {};
                (t.r(a),
                    t.d(a, { mouse: () => E, off: () => c, on: () => m, onResize: () => l, onScaleUpdated: () => s }));
                var r = {};
                (t.r(r),
                    t.d(r, {
                        events: () => a,
                        getMouseGlobalPosition: () => F,
                        getSize: () => g,
                        graphicsQuality: () => C,
                        playSound: () => b,
                        setRTPC: () => A,
                    }));
                var _ = {};
                (t.r(_), t.d(_, { getBgUrl: () => w, getTextureUrl: () => v }));
                var i = {};
                function n(e) {
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
                (t.r(i),
                    t.d(i, {
                        addModelObserver: () => W,
                        addPreloadTexture: () => S,
                        arabic2roman: () => J,
                        children: () => _,
                        displayStatus: () => N,
                        displayStatusIs: () => ue,
                        enableFullScreenModeSupported: () => re,
                        events: () => k,
                        extraSize: () => te,
                        forceTriggerMouseMove: () => X,
                        freezeTextureBeforeResize: () => z,
                        getBrowserTexturePath: () => M,
                        getDisplayStatus: () => Z,
                        getExternalPaddingsRem: () => ee,
                        getFontNames: () => Q,
                        getScale: () => j,
                        getSize: () => P,
                        getViewGlobalPosition: () => H,
                        initExternalPaddings: () => _e,
                        isEventHandled: () => Y,
                        isFocused: () => K,
                        pxToRem: () => G,
                        remToPx: () => U,
                        resize: () => $,
                        sendEvent: () => L,
                        setAnimateWindow: () => V,
                        setEventHandled: () => q,
                        setInputPaddingsRem: () => O,
                        setSidePaddingsRem: () => I,
                        whenTutorialReady: () => ae,
                    }));
                const l = n('clientResized'),
                    s = n('self.onScaleUpdated'),
                    m = (e, u) => engine.on(e, u),
                    c = (e, u) => engine.off(e, u),
                    d = { down: n('mousedown'), up: n('mouseup'), move: n('mousemove') },
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
                                            i = d[u]((e) => t([e, 'outside']));
                                        function n(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(_, n),
                                            a(),
                                            () => {
                                                r &&
                                                    (i(),
                                                    window.removeEventListener(_, n),
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
                function b(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function A(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                function g(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function F(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const C = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    D = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    B = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    h = Object.keys(B).reduce((e, u) => ((e[u] = () => b(B[u])), e), {}),
                    p = { play: Object.assign({}, h, { sound: b }), setRTPC: A },
                    f = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    x = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function v(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function w(e, u, t) {
                    return `url(${v(e, u, t)})`;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const N = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    k = {
                        onTextureFrozen: n('self.onTextureFrozen'),
                        onTextureReady: n('self.onTextureReady'),
                        onDomBuilt: n('self.onDomBuilt'),
                        onLoaded: n('self.onLoaded'),
                        onDisplayChanged: n('self.onShowingStatusChanged'),
                        onFocusUpdated: n('self.onFocusChanged'),
                        children: {
                            onAdded: n('children.onAdded'),
                            onLoaded: n('children.onLoaded'),
                            onRemoved: n('children.onRemoved'),
                            onAttached: n('children.onAttached'),
                            onTextureReady: n('children.onTextureReady'),
                            onRequestPosition: n('children.requestPosition'),
                        },
                    },
                    y = ['args'],
                    T = (e, u) => {
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
                                })(u, y);
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
                    L = {
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
                function S(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function O(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function M(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function W(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function P(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function $(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function H(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: U(u.x), y: U(u.y) };
                }
                function z() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function j() {
                    return viewEnv.getScale();
                }
                function G(e) {
                    return viewEnv.pxToRem(e);
                }
                function U(e) {
                    return viewEnv.remToPx(e);
                }
                function V(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function K() {
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
                function Z() {
                    return viewEnv.getShowingStatus();
                }
                const Q = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    J = function (e) {
                        let u = '';
                        for (let t = x.length - 1; t >= 0; t--) for (; e >= x[t]; ) ((u += f[t]), (e -= x[t]));
                        return u;
                    };
                function ee() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const ue = Object.keys(N).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === N[u]), e), {}),
                    te = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    ae = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : k.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function re() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function _e(e) {
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
                const ie = { view: i, client: r, sound: p, intl: D };
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
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => _ });
                var a = t(294);
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
                t.d(u, { Sw: () => _.Z, B0: () => n, ry: () => F });
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
                    i = t(613);
                let n;
                var o;
                (((o = n || (n = {}))[(o.UNDEFINED = 0)] = 'UNDEFINED'),
                    (o[(o.TOOLTIP = 1)] = 'TOOLTIP'),
                    (o[(o.POP_OVER = 2)] = 'POP_OVER'),
                    (o[(o.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (o[(o.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (o[(o.MOVE = 16)] = 'MOVE'),
                    (o[(o.CLOSE = 32)] = 'CLOSE'),
                    (o[(o.MINIMIZE = 64)] = 'MINIMIZE'));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    s = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(521),
                    E = t(294);
                const b = ['args'];
                function A(e, u, t, a, r, _, i) {
                    try {
                        var n = e[_](i),
                            o = n.value;
                    } catch (e) {
                        return void t(e);
                    }
                    n.done ? u(o) : Promise.resolve(o).then(a, r);
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
                                    return new Promise(function (a, r) {
                                        var _ = e.apply(u, t);
                                        function i(e) {
                                            A(_, a, r, i, n, 'next', e);
                                        }
                                        function n(e) {
                                            A(_, a, r, i, n, 'throw', e);
                                        }
                                        i(void 0);
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
                                _ = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        _ = Object.keys(e);
                                    for (a = 0; a < _.length; a++) ((t = _[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, b);
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
                    D = () => C(n.CLOSE),
                    B = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var h = t(572);
                const p = r.instance,
                    f = {
                        DataTracker: _.Z,
                        ViewModel: h.Z,
                        ViewEventType: n,
                        NumberFormatType: l,
                        RealFormatType: s,
                        TimeFormatType: m,
                        DateFormatType: c,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => C(n.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: D,
                        sendClosePopOverEvent: () => C(n.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(n.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, r = R.invalid('resId'), _) => {
                            const i = E.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                s = o.y,
                                m = o.width,
                                c = o.height,
                                d = {
                                    x: E.O.view.pxToRem(l) + i.x,
                                    y: E.O.view.pxToRem(s) + i.y,
                                    width: E.O.view.pxToRem(m),
                                    height: E.O.view.pxToRem(c),
                                };
                            C(n.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: g(d),
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
                        handleViewEvent: C,
                        onBindingsReady: F,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(n.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(n.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(n.POP_OVER),
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
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = f;
            },
            613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => _, Z5: () => a, cy: () => r });
                const a = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u, t = 2) => systemLocale.getRealFormat(e, u, t),
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
            222: (e, u, t) => {
                'use strict';
                const a = () => (window.injected || (window.injected = new Map()), window.injected);
                var r = t(363),
                    _ = t.n(r);
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
                var n = t(294);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function s(e = n.O.client.getSize('rem')) {
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
                })(l || (l = {}));
                const m = s(),
                    c = (0, r.createContext)(m),
                    d = ['children'];
                (0, r.memo)((e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                _ = Object.keys(e);
                            for (a = 0; a < _.length; a++) ((t = _[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, d);
                    const a = (0, r.useContext)(c),
                        _ = a.extraLarge,
                        n = a.large,
                        o = a.medium,
                        l = a.small,
                        s = a.extraSmall,
                        m = a.extraLargeWidth,
                        E = a.largeWidth,
                        b = a.mediumWidth,
                        A = a.smallWidth,
                        g = a.extraSmallWidth,
                        F = a.extraLargeHeight,
                        C = a.largeHeight,
                        D = a.mediumHeight,
                        B = a.smallHeight,
                        h = a.extraSmallHeight,
                        p = { extraLarge: F, large: C, medium: D, small: B, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && _) return u;
                        if (t.large && n) return u;
                        if (t.medium && o) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && s) return u;
                    } else {
                        if (t.extraLargeWidth && m) return i(u, t, p);
                        if (t.largeWidth && E) return i(u, t, p);
                        if (t.mediumWidth && b) return i(u, t, p);
                        if (t.smallWidth && A) return i(u, t, p);
                        if (t.extraSmallWidth && g) return i(u, t, p);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && F) return u;
                            if (t.largeHeight && C) return u;
                            if (t.mediumHeight && D) return u;
                            if (t.smallHeight && B) return u;
                            if (t.extraSmallHeight && h) return u;
                        }
                    }
                    return null;
                });
                const E = ({ children: e }) => {
                    const u = (0, r.useState)(s),
                        t = u[0],
                        a = u[1],
                        i = (0, r.useState)(!1),
                        o = i[0],
                        l = i[1];
                    return (
                        (0, r.useLayoutEffect)(() => {
                            function e() {
                                a((e) => {
                                    const u = n.O.client.getSize('rem');
                                    return e.width === u.width && e.height === u.height ? e : s(u);
                                });
                            }
                            return (
                                e(),
                                l(!0),
                                n.O.client.events.on('clientResized', e),
                                n.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (n.O.client.events.off('clientResized', e),
                                        n.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        _().createElement(c.Provider, { value: t }, o && e)
                    );
                };
                var b = t(483),
                    A = t.n(b),
                    g = t(926),
                    F = t.n(g);
                let C, D, B;
                (!(function (e) {
                    ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                })(C || (C = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                    })(D || (D = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge'));
                    })(B || (B = {})));
                const h = ['children', 'className'];
                function p() {
                    return (
                        (p =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        p.apply(this, arguments)
                    );
                }
                const f = {
                        [D.ExtraSmall]: '',
                        [D.Small]: F().SMALL_WIDTH,
                        [D.Medium]: `${F().SMALL_WIDTH} ${F().MEDIUM_WIDTH}`,
                        [D.Large]: `${F().SMALL_WIDTH} ${F().MEDIUM_WIDTH} ${F().LARGE_WIDTH}`,
                        [D.ExtraLarge]: `${F().SMALL_WIDTH} ${F().MEDIUM_WIDTH} ${F().LARGE_WIDTH} ${F().EXTRA_LARGE_WIDTH}`,
                    },
                    x = {
                        [B.ExtraSmall]: '',
                        [B.Small]: F().SMALL_HEIGHT,
                        [B.Medium]: `${F().SMALL_HEIGHT} ${F().MEDIUM_HEIGHT}`,
                        [B.Large]: `${F().SMALL_HEIGHT} ${F().MEDIUM_HEIGHT} ${F().LARGE_HEIGHT}`,
                        [B.ExtraLarge]: `${F().SMALL_HEIGHT} ${F().MEDIUM_HEIGHT} ${F().LARGE_HEIGHT} ${F().EXTRA_LARGE_HEIGHT}`,
                    },
                    v = {
                        [C.ExtraSmall]: '',
                        [C.Small]: F().SMALL,
                        [C.Medium]: `${F().SMALL} ${F().MEDIUM}`,
                        [C.Large]: `${F().SMALL} ${F().MEDIUM} ${F().LARGE}`,
                        [C.ExtraLarge]: `${F().SMALL} ${F().MEDIUM} ${F().LARGE} ${F().EXTRA_LARGE}`,
                    },
                    w = (e) => {
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
                            })(e, h);
                        const i = (() => {
                                const e = (0, r.useContext)(c),
                                    u = e.width,
                                    t = e.height,
                                    a = ((e) => {
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
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    C.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    _ = ((e) => {
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
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    D.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    i = ((e) => {
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
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    B.ExtraSmall
                                                );
                                        }
                                    })(e);
                                return {
                                    mediaSize: a,
                                    mediaWidth: _,
                                    mediaHeight: i,
                                    remScreenWidth: u,
                                    remScreenHeight: t,
                                };
                            })(),
                            n = i.mediaWidth,
                            o = i.mediaHeight,
                            l = i.mediaSize;
                        return _().createElement('div', p({ className: A()(t, f[n], x[o], v[l]) }, a), u);
                    },
                    N = ['children'],
                    k = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    _ = Object.keys(e);
                                for (a = 0; a < _.length; a++) ((t = _[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, N);
                        return _().createElement(E, null, _().createElement(w, t, u));
                    };
                let y;
                !(function (e) {
                    ((e.DISABLED = 'disabled'), (e.ACTIVE = 'active'));
                })(y || (y = {}));
                var T = t(281);
                let L;
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(L || (L = {}));
                const S = (e) => e.replace(/&nbsp;/g, ' '),
                    O = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    M = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    W = (e, u, t = L.left) => e.split(u).reduce(t === L.left ? O : M, []),
                    I = (() => {
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
                    P = ['zh_cn', 'zh_sg', 'zh_tw'];
                var $ = t(916),
                    H = t(613);
                (Date.now(), H.Ew.getRegionalDateTime, H.Ew.getFormattedDateTime);
                const z = (e = 1) => {
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
                    j = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    G = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    U = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    V = $.Sw.instance;
                let K;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(K || (K = {}));
                const q = (e = 'model', u = K.Deep) => {
                    const t = (0, r.useState)(0),
                        _ = (t[0], t[1]),
                        i = (0, r.useMemo)(() => z(), []),
                        n = i.callerUrl,
                        o = i.caller,
                        l = i.resId,
                        s = (0, r.useMemo)(() => {
                            const u = (function (e) {
                                return a().has(e);
                            })(n.replace('.js', '.html'));
                            return window.__feature && window.__feature !== o && !u ? `subViews.${o}.${e}` : e;
                        }, [n, o, e]),
                        m = (0, r.useState)(() =>
                            ((e) => {
                                const u = j(e, window);
                                for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                return G(u) ? u.value : u;
                            })(
                                ((e) =>
                                    ((e, u) =>
                                        e.split('.').reduce((e, u) => {
                                            const t = j(`${e}.${u}`, window);
                                            return G(t) ? ((e, u) => `${e}.${u}.value`)(e, u) : `${e}.${u}`;
                                        }))(e))(s),
                            ),
                        ),
                        c = m[0],
                        d = m[1],
                        E = (0, r.useRef)(-1);
                    return (
                        ((e) => {
                            const u = (0, r.useRef)(!1);
                            u.current || (e(), (u.current = !0));
                        })(() => {
                            if (
                                ('boolean' == typeof u &&
                                    ((u = u ? K.Deep : K.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                u !== K.None)
                            ) {
                                const t = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        u === K.Deep
                                            ? (e === c && _((e) => e + 1), d(e))
                                            : d(Object.assign([], e));
                                    },
                                    a = ((e) => {
                                        const u = ((e) => {
                                                const u = z(),
                                                    t = u.caller,
                                                    a = u.resId,
                                                    r =
                                                        window.__feature && window.__feature !== t && t
                                                            ? `subViews.${t}`
                                                            : '';
                                                return { modelPrefix: r, modelPath: U(r, ''), resId: a };
                                            })(),
                                            t = u.modelPrefix,
                                            a = e.split('.');
                                        if (a.length > 0) {
                                            const e = [a[0]];
                                            return (
                                                a.reduce((u, a) => {
                                                    const r = j(U(t, `${u}.${a}`), window);
                                                    return G(r)
                                                        ? (e.push(r.id), `${u}.${a}.value`)
                                                        : (e.push(a), `${u}.${a}`);
                                                }),
                                                e.reduce((e, u) => e + '.' + u)
                                            );
                                        }
                                        return '';
                                    })(e);
                                E.current = V.addCallback(a, t, l, u === K.Deep);
                            }
                        }),
                        (0, r.useEffect)(() => {
                            if (u !== K.None)
                                return () => {
                                    V.removeCallback(E.current, l);
                                };
                        }, [l, u]),
                        c
                    );
                };
                function Y(e, u, t) {
                    const a = (0, r.useContext)(c);
                    let _ = Object.entries(a).filter(([e, u]) => !0 === u && e in l);
                    return (
                        t && (_ = _.filter((e) => t.includes(e[0]))),
                        e.reduce((e, t) => {
                            const a = _.map((e) =>
                                A()(
                                    u[((e, u) => e + '__' + u)(t, e[0])],
                                    u[
                                        ((e, u) => {
                                            return e + ((t = u)[0].toUpperCase() + t.slice(1));
                                            var t;
                                        })(t, e[0])
                                    ],
                                ),
                            );
                            return ((e[t] = A()(u[t], ...a)), e);
                        }, {})
                    );
                }
                $.Sw.instance;
                const X = ({ binding: e, text: u = '', classMix: t, alignment: a = L.left, formatWithBrackets: i }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const n = i && e ? ((o = e), u.replace(/\{\w+\}/g, (e) => String(o[e.slice(1, -1)]))) : u;
                        var o;
                        return _().createElement(
                            r.Fragment,
                            null,
                            n.split('\n').map((u, i) =>
                                _().createElement(
                                    'div',
                                    { className: A()('FormatText_base_d0', t), key: `${u}-${i}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            t && e in t
                                                ? t[e]
                                                : ((e, u = L.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return P.includes(t)
                                                          ? I(e)
                                                          : 'ja' === t
                                                            ? (0, T.D4)()
                                                                  .parse(e)
                                                                  .map((e) => S(e))
                                                            : ((e, u = L.left) => {
                                                                  let t = [];
                                                                  const a =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      r = S(e);
                                                                  return (
                                                                      W(r, /( )/, u).forEach(
                                                                          (e) => (t = t.concat(W(e, a, L.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(e, u);
                                                  })(e, u),
                                        ))(u, a, e).map((e, u) =>
                                        _().createElement(r.Fragment, { key: `${u}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    Z = {
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
                    Q = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    J = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    ee = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    ue = ({ text: e, binding: u, classMix: t }) => {
                        const a = (0, r.useCallback)((e) => ({ color: `#${e}` }), []),
                            i = u || {};
                        let n = Q.exec(e),
                            o = e;
                        for (; n; ) {
                            const t = n[0],
                                r = J.exec(t),
                                l = ee.exec(t),
                                s = n[1];
                            if (r && l) {
                                const e = r[0],
                                    n = e + l[0].length + e;
                                ((o = o.replace(t, `%(${n})`)),
                                    (i[n] = Z[e]
                                        ? _().createElement(
                                              'span',
                                              { className: Z[e] },
                                              _().createElement(X, { text: s, binding: u }),
                                          )
                                        : _().createElement(
                                              'span',
                                              { style: a(e) },
                                              _().createElement(X, { text: s, binding: u }),
                                          )));
                            }
                            n = Q.exec(e);
                        }
                        return _().createElement(X, { text: o, classMix: t, binding: i });
                    },
                    te = (e) => (e ? R.images.gui.maps.icons.mode_selector.mode.$dyn(e) : null);
                let ae, re;
                (!(function (e) {
                    ((e.B0 = 'b0'),
                        (e.B1 = 'b1'),
                        (e.B2 = 'b2'),
                        (e.B3 = 'b3'),
                        (e.B4 = 'b4'),
                        (e.B5 = 'b5'),
                        (e.B6 = 'b6'));
                })(ae || (ae = {})),
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'));
                    })(re || (re = {})));
                const _e = (e, u = !1) => (u && 1 === e ? ae.B0 : `b${Math.min(Math.max(Math.floor(e), 0), 6)}`),
                    ie = {},
                    ne = (...e) => {
                        let u = [];
                        for (var t = 0, a = e; t < a.length; t++) {
                            const e = a[t];
                            if (e in ie) u = u.concat(ie[e]);
                            else {
                                const t = [e];
                                for (let u = 0; u <= 6; u++) t.push(`${e}__${_e(u)}`);
                                ((ie[e] = t), (u = u.concat(ie[e])));
                            }
                        }
                        return u;
                    },
                    oe = (e) => {
                        const u = (0, r.useState)(!1),
                            t = u[0],
                            a = u[1],
                            _ = (0, r.useCallback)(
                                (u) => {
                                    (a(u), e && e(u));
                                },
                                [e],
                            );
                        return [t, _];
                    },
                    le = () => {
                        const e = (0, r.useContext)(c),
                            u = e.extraSmall,
                            t = e.small,
                            a = e.medium;
                        return (0, r.useMemo)(() => {
                            switch (!0) {
                                case t:
                                case u:
                                    return re.Small;
                                case a:
                                    return re.Medium;
                                default:
                                    return re.Big;
                            }
                        }, [u, a, t]);
                    },
                    se = {
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
                    me = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function ce() {
                    return (
                        (ce =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ce.apply(this, arguments)
                    );
                }
                const de = (e) => {
                        let u = e.value,
                            t = e.isEmpty,
                            a = void 0 !== t && t,
                            r = e.className,
                            i = e.size,
                            n = void 0 === i ? 'normal' : i,
                            o = e.fadeInAnimation,
                            l = void 0 !== o && o,
                            s = e.hide,
                            m = void 0 !== s && s,
                            c = e.maximumNumber,
                            d = void 0 === c ? 99 : c,
                            E = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    _ = Object.keys(e);
                                for (a = 0; a < _.length; a++) ((t = _[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, me);
                        const b = a ? null : u,
                            g = 'string' == typeof b;
                        if ((b && !g && b < 0) || 0 === b) return null;
                        const F = b && !g && b > d,
                            C = A()(
                                se.base,
                                se[`base__${n}`],
                                l && se.base__animated,
                                m && se.base__hidden,
                                !b && se.base__pattern,
                                a && se.base__empty,
                                r,
                            );
                        return _().createElement(
                            'div',
                            ce({ className: C }, E),
                            _().createElement('div', { className: se.bg }),
                            _().createElement('div', { className: se.pattern }),
                            _().createElement(
                                'div',
                                { className: A()(se.value, g && se.value__text) },
                                F ? d : b,
                                F && _().createElement('span', { className: se.plus }, '+'),
                            ),
                        );
                    },
                    Ee = [
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
                function be(e) {
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
                const Ae = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: $.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    ge = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            _ = e.onMouseEnter,
                            i = e.onMouseLeave,
                            n = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            s = void 0 !== l && l,
                            m = e.ignoreMouseClick,
                            c = void 0 !== m && m,
                            d = e.decoratorId,
                            E = void 0 === d ? 0 : d,
                            b = e.isEnabled,
                            A = void 0 === b || b,
                            g = e.targetId,
                            F = void 0 === g ? 0 : g,
                            C = e.onShow,
                            D = e.onHide,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    _ = Object.keys(e);
                                for (a = 0; a < _.length; a++) ((t = _[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Ee);
                        const h = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            p = (0, r.useMemo)(() => F || z().resId, [F]),
                            f = (0, r.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Ae(t, E, { isMouseEvent: !0, on: !0, arguments: be(a) }, p),
                                    C && C(),
                                    (h.current.isVisible = !0));
                            }, [t, E, a, p, C]),
                            x = (0, r.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        Ae(t, E, { on: !1 }, p),
                                        h.current.isVisible && D && D(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, E, p, D]),
                            v = (0, r.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const e = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', v, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', v, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === A && x();
                            }, [A, x]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        (window.removeEventListener('mouseleave', x), x());
                                    }
                                ),
                                [x],
                            ),
                            A
                                ? (0, r.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((w = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          (clearTimeout(h.current.timeoutId),
                                                          (h.current.timeoutId = window.setTimeout(f, s ? 100 : 400)),
                                                          _ && _(e),
                                                          w && w(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (x(), null == i || i(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === c && x(), null == o || o(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === c && x(), null == n || n(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          B,
                                      ),
                                  )
                                : u
                        );
                        var w;
                    },
                    Fe = ['children'];
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
                const De = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    _ = Object.keys(e);
                                for (a = 0; a < _.length; a++) ((t = _[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Fe);
                        return _().createElement(
                            ge,
                            Ce(
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
                    Be = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function he() {
                    return (
                        (he =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        he.apply(this, arguments)
                    );
                }
                const pe = R.views.common.tooltip_window.simple_tooltip_content,
                    fe = (e) => {
                        let u = e.children,
                            t = e.body,
                            a = e.header,
                            i = e.note,
                            n = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    _ = Object.keys(e);
                                for (a = 0; a < _.length; a++) ((t = _[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Be);
                        const s = (0, r.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: a, note: i, alert: n });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [n, t, a, i, o]);
                        return _().createElement(
                            ge,
                            he(
                                {
                                    contentId:
                                        ((m = null == o ? void 0 : o.hasHtmlContent),
                                        m ? pe.SimpleTooltipHtmlContent('resId') : pe.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: s,
                                },
                                l,
                            ),
                            u,
                        );
                        var m;
                    };
                function xe(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const ve = {
                        playHighlight() {
                            xe('highlight');
                        },
                        playClick() {
                            xe('play');
                        },
                        playYes() {
                            xe('yes1');
                        },
                    },
                    we = {
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
                    Ne = ({
                        index: e,
                        size: u,
                        isSelected: t,
                        isDisabled: a,
                        isNew: i = !1,
                        isInfoIconVisible: n,
                        resourcesFolderName: o,
                        children: l,
                        onHoverChanged: s,
                        onItemClicked: m,
                        onInfoClicked: c,
                        resourceFolderGetter: d,
                        id: E,
                        modeName: b,
                        isNotStarted: g,
                    }) => {
                        const F = le(),
                            C = (0, r.useCallback)(
                                (u) => {
                                    (u.stopPropagation(), ve.playYes(), c({ index: e }));
                                },
                                [c, e],
                            ),
                            D = oe(s),
                            B = D[0],
                            h = D[1],
                            p = (0, r.useCallback)(() => {
                                (xe(
                                    [ae.B4, ae.B5, ae.B6].includes(u)
                                        ? 'ev_mode_selector_hover_simple'
                                        : 'ev_mode_selector_hover',
                                ),
                                    h(!0));
                            }, [h, u]),
                            f = (0, r.useCallback)(() => {
                                h(!1);
                            }, [h]),
                            x = Y(['info', 'check', 'checkBackground'], we),
                            v = F !== re.Big;
                        let w;
                        const N = d(o);
                        if (null !== N) {
                            const e = N.$dyn(`bg_${u}_${F}`);
                            null !== e && (w = { backgroundImage: `url(${e})` });
                            const t = N.$dyn(`bg_${u}`);
                            null !== t && (w = { backgroundImage: `url(${t})`, backgroundSize: 'cover' });
                        }
                        const k = n && (B || t);
                        return _().createElement(
                            De,
                            { isEnabled: a, args: { index: e, modeName: b, tooltipId: 'disabledTooltip' } },
                            _().createElement(
                                'div',
                                null,
                                _().createElement(
                                    'div',
                                    {
                                        id: E,
                                        className: A()(we.base, a && we.base__disabled, g && we.base__isNotStarted),
                                        onClick: () => {
                                            (m({ index: e, size: u, cardMediaSize: F }), ve.playClick());
                                        },
                                        onMouseEnter: p,
                                        onMouseLeave: f,
                                    },
                                    _().createElement(
                                        'div',
                                        { className: we.mask },
                                        _().createElement('div', {
                                            className: A()(
                                                we.background,
                                                void 0 === w && we.background__empty,
                                                B && we.background__anim,
                                            ),
                                            style: w,
                                        }),
                                    ),
                                    _().createElement('div', { className: we.border }),
                                    t &&
                                        _().createElement(
                                            _().Fragment,
                                            null,
                                            _().createElement('div', { className: we.selection }),
                                            _().createElement('div', {
                                                className: A()(we.animBg, u === ae.B0 && we.animBg__wide),
                                            }),
                                            _().createElement('div', { className: x.checkBackground }),
                                            _().createElement('div', { className: x.check }),
                                        ),
                                    _().createElement('div', { className: A()(we.hover, B && !g && we.hover__anim) }),
                                    _().createElement('div', { className: we.children }, l),
                                    i &&
                                        !a &&
                                        _().createElement(
                                            'div',
                                            { className: we.novelty },
                                            _().createElement(de, {
                                                value: R.strings.mode_selector.novelty(),
                                                size: v ? 'small' : 'big',
                                            }),
                                        ),
                                    _().createElement('div', {
                                        className: A()(we.infoCorner, k && we.infoCorner__anim),
                                    }),
                                    _().createElement(
                                        fe,
                                        { body: R.strings.tooltips.mode_selector.info.body(), isEnabled: k },
                                        _().createElement('div', {
                                            className: A()(x.info, k && we.info__anim),
                                            onClick: C,
                                        }),
                                    ),
                                    a && _().createElement('div', { className: we.disabling }),
                                ),
                            ),
                        );
                    };
                let ke, ye;
                function Te() {
                    return (
                        (Te =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Te.apply(this, arguments)
                    );
                }
                (!(function (e) {
                    ((e.Normal = 'normal'), (e.Attention = 'attention'), (e.Alert = 'alert'), (e.Blocker = 'blocker'));
                })(ke || (ke = {})),
                    (function (e) {
                        ((e.LowRisk = 'lowRisk'), (e.MediumRisk = 'mediumRisk'), (e.HighRisk = 'highRisk'));
                    })(ye || (ye = {})));
                const Le = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const a = _().createElement('div', { className: t }, e);
                    if (u.header || u.body) return _().createElement(fe, u, a);
                    const r = u.contentId;
                    return r ? _().createElement(ge, Te({}, u, { contentId: r }), a) : _().createElement(De, u, a);
                };
                var Se = t(45);
                const Re = {
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
                let Oe, Me, We;
                (!(function (e) {
                    ((e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding'));
                })(Oe || (Oe = {})),
                    (function (e) {
                        ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
                    })(Me || (Me = {})),
                    (function (e) {
                        ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
                    })(We || (We = {})));
                const Ie = { [We.NBSP]: Oe.NoBreakSymbol, [We.ZWNBSP]: Oe.NoBreakSymbol, [We.NEW_LINE]: Oe.LineBreak },
                    Pe = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    $e = {
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
                    He = 'renderers_word_f3',
                    ze = (e) => ({ color: `#${e}` }),
                    je = ({ elementList: e, textBlock: u, key: t }) => {
                        const a = u.colorTag;
                        return a
                            ? $e[a]
                                ? _().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: A()(He, $e[a]) },
                                      e,
                                  )
                                : _().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: He, style: ze(a) },
                                      e,
                                  )
                            : _().createElement('span', { key: t, 'data-block-type': u.blockType, className: He }, e);
                    },
                    Ge = {
                        [Oe.Word]: je,
                        [Oe.NoBreakSymbol]: je,
                        [Oe.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            _().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => _().createElement(_().Fragment, { key: t }, e)),
                            ),
                        [Oe.LineBreak]: ({ key: e }) =>
                            _().createElement('span', {
                                key: e,
                                'data-block-type': Oe.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [Oe.NewLine]: ({ elementList: e, key: u }) =>
                            _().createElement(
                                'span',
                                { key: u, 'data-block-type': Oe.NewLine, className: 'renderers_newLine_bd' },
                                e,
                            ),
                        [Oe.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            _().createElement(
                                'span',
                                {
                                    key: u,
                                    'data-block-type': Oe.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                e,
                            ),
                    },
                    Ue = (e, u, t) => {
                        const a = [];
                        return (
                            e.childList.forEach((r, _) => {
                                const i = `${t}_${_}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        u = e.blockType,
                                        t = Ue(e, Ge[u], i);
                                    a.push(...t);
                                } else a.push(u({ elementList: [r], textBlock: e, key: i }));
                            }),
                            a
                        );
                    },
                    Ve = (e, u, t, a) => {
                        let r = u.exec(e),
                            _ = 0;
                        for (; r; ) (_ !== r.index && t(e.slice(_, r.index)), a(r), (_ = u.lastIndex), (r = u.exec(e)));
                        _ !== e.length && t(e.slice(_));
                    },
                    Ke = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    qe = Pe
                        ? (e) => {
                              const u = [];
                              return (
                                  Ve(
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
                                                      Ve(
                                                          e,
                                                          /\S\s+/g,
                                                          (e) => {
                                                              var t;
                                                              'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                                                  ? u.push(...((t = e), t.match(Ke) || []))
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
                                  const i = u.justifyContent === Me.FlexEnd ? a.index : t.lastIndex;
                                  (r.push(e.slice(_, i)), (_ = i), (a = t.exec(e)));
                              }
                              return (_ !== e.length && r.push(e.slice(_)), r);
                          },
                    Ye = (e, u = '', t) => {
                        const a = [];
                        return (
                            Ve(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    a.push({ blockType: Oe.Word, colorTag: u, childList: qe(e, t) });
                                },
                                (e) => {
                                    const t = e[0],
                                        r = Ie[t.charAt(0)];
                                    r === Oe.LineBreak
                                        ? a.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: Oe.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: Oe.NewLine,
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
                    Xe = (e, u, t = '', a) => {
                        const r = [],
                            _ = e.replace(/(.)(、|。|ー)/g, '$1\ufeff$2');
                        return (
                            Ve(
                                _,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...Ye(e, t, a));
                                },
                                (e) => {
                                    const _ = e[1],
                                        i = void 0 === u[_] ? e[0] : u[_];
                                    'string' == typeof i || 'number' == typeof i
                                        ? r.push(...Ye(String(i), t, a))
                                        : r.push({ blockType: Oe.Binding, colorTag: t, childList: [i] });
                                },
                            ),
                            r
                        );
                    },
                    Ze = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            a = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === Oe.NoBreakWrapper) (e.childList.push(a), t.push(e));
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            (e.childList.length > 0 && t.push(e),
                                t.push({ blockType: Oe.NoBreakWrapper, colorTag: '', childList: [u, a] }));
                        }
                        return (u.childList.length > 0 && t.push(u), t);
                    },
                    Qe = (e, u = {}, t) => {
                        if (!e) return [];
                        const a = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Oe.NoBreakSymbol
                                        ? ((t = !0), u.push(...Ze(u.pop(), e)))
                                        : (t ? u.push(...Ze(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u, t) => {
                                const a = [];
                                return (
                                    Ve(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            a.push(...Xe(e, u, '', t));
                                        },
                                        (e) => {
                                            a.push(...Xe(e[2] + e[3], u, e[1], t));
                                        },
                                    ),
                                    a
                                );
                            })(S(e).replace(/&zwnbsp;/g, '\ufeff'), u, t),
                        );
                        return ((e) => {
                            const u = [];
                            return (
                                e.forEach((e, t) => {
                                    u.push(
                                        ...((e, u) => {
                                            const t = [],
                                                a = e.blockType,
                                                r = Ge[a],
                                                _ = Ue(e, r, u);
                                            return (
                                                a === Oe.NoBreakWrapper
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
                    Je = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    eu = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    uu = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const a = eu(e, u),
                            r = e.textContent.length,
                            _ = e.offsetWidth / r,
                            i = Math.ceil(a / _);
                        if (a > 0) {
                            const a = Math.floor((u - e.offsetLeft) / _);
                            return a >= t ? [!0, t + i] : [!1, a];
                        }
                        const n = Math.max(t + i, 0);
                        return r < n ? [!1, 0] : [!0, n];
                    },
                    tu = (e, u, t, a, r, i) => {
                        let n = -1,
                            o = null;
                        for (let l = t; l >= 0; l--) {
                            const t = e[l],
                                s = Number(e[l].getAttribute('data-block-type'));
                            if (s === Oe.LineBreak || s === Oe.NewLine || s === Oe.Binding) continue;
                            const m = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = uu(t, a, r),
                                    s = e[0],
                                    c = e[1];
                                if (!s) {
                                    c > 0 && (r -= c);
                                    continue;
                                }
                                const d = m.slice(0, m.length - c) + i,
                                    E = u[l];
                                ((o = _().cloneElement(E, E.props, d)), (n = l));
                                break;
                            }
                            {
                                const e = t.children,
                                    s = u[l],
                                    c = s.props.children,
                                    d = tu(e, c, e.length - 1, a, r, i),
                                    E = d[0],
                                    b = d[1];
                                if (!(E < 0)) {
                                    const e = c.slice(0, E);
                                    ((o = _().cloneElement(s, s.props, e, b)), (n = l));
                                    break;
                                }
                                r -= m.length;
                            }
                        }
                        return [n, o];
                    },
                    au = _().memo(
                        ({
                            text: e,
                            classMix: u,
                            onSizeChanged: t,
                            binding: a,
                            isTooltipEnable: i = !1,
                            isTruncationAvailable: n = !1,
                            customTooltipArgs: o,
                            targetId: l,
                            justifyContent: s = Me.FlexStart,
                            alignContent: m = Me.FlexStart,
                            truncateIdentify: c = '...',
                        }) => {
                            const d = (0, r.useRef)(null),
                                E = (0, r.useRef)({ height: 0, width: 0 }),
                                b = (0, r.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                g = b[0],
                                F = b[1],
                                C = (0, r.useMemo)(() => Qe(e, a, { justifyContent: s }), [a, s, e]),
                                D = (0, r.useMemo)(() => {
                                    if (
                                        i &&
                                        g.isTruncated &&
                                        (!a || !Object.values(a).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, o, {
                                                stringifyKwargs: a ? JSON.stringify(a) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [a, i, l, e, o, g.isTruncated]),
                                B = (0, r.useCallback)(
                                    (e) => {
                                        ((E.current.width = e.contentRect.width),
                                            (E.current.height = e.contentRect.height));
                                        const u = ((e, u, t, a = '...') => {
                                                const r = [...u],
                                                    _ = e.current;
                                                if (!_) return [r, !1];
                                                const i = t.height,
                                                    n = t.width,
                                                    o = _.lastElementChild;
                                                if (!Je(o, i) && eu(o, n) <= 0) return [r, !1];
                                                const l = _.children,
                                                    s = ((e, u) => {
                                                        let t = 0,
                                                            a = e.length - 1;
                                                        for (; a - t >= 0; ) {
                                                            const r = t + Math.ceil(0.5 * (a - t));
                                                            Je(e[r], u) ? (a = r - 1) : (t = r + 1);
                                                        }
                                                        return t - 1;
                                                    })(l, i);
                                                if (s < 0) return [r, !1];
                                                const m = tu(l, r, s, n, a.length, a),
                                                    c = m[0],
                                                    d = m[1];
                                                return (d && (r.splice(c, 1, d), r.splice(c + 1)), [r, !0]);
                                            })(d, C, E.current, c),
                                            a = u[0],
                                            r = u[1];
                                        (F({ elementList: a, isTruncated: r, isTruncateFinished: !0 }), t && t(r));
                                    },
                                    [t, c, C],
                                ),
                                h = (0, r.useMemo)(() => ({ justifyContent: s, alignContent: m }), [m, s]);
                            return (
                                ((e, u, t = !0) => {
                                    const a = (0, r.useCallback)(
                                        (e) => {
                                            const t = e[0];
                                            u && u(t);
                                        },
                                        [u],
                                    );
                                    (0, r.useEffect)(() => {
                                        if (!e.current || !t) return;
                                        const u = new Se.Z((e) => a(e));
                                        return (
                                            u.observe(e.current),
                                            () => {
                                                u.disconnect();
                                            }
                                        );
                                    }, [a, t, e]);
                                })(d, B, n),
                                _().createElement(
                                    'div',
                                    {
                                        className: A()(
                                            Re.base,
                                            u,
                                            Re.base__zeroPadding,
                                            n && Re.base__isTruncationAvailable,
                                        ),
                                        style: h,
                                    },
                                    _().createElement('div', { className: Re.unTruncated, ref: d }, C),
                                    _().createElement(
                                        Le,
                                        {
                                            tooltipArgs: D,
                                            className: A()(
                                                Re.tooltip,
                                                Re[`tooltip__justify-${s}`],
                                                Re[`tooltip__align-${m}`],
                                            ),
                                        },
                                        _().createElement(
                                            'div',
                                            {
                                                className: A()(
                                                    Re.truncated,
                                                    !g.isTruncateFinished && n && Re.truncated__hide,
                                                ),
                                                style: h,
                                            },
                                            g.isTruncateFinished && n ? g.elementList : C,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    ru = {
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
                function _u() {
                    return (
                        (_u =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        _u.apply(this, arguments)
                    );
                }
                const iu = { [ye.LowRisk]: ke.Normal, [ye.MediumRisk]: ke.Alert, [ye.HighRisk]: ke.Blocker },
                    nu = R.strings.mode_selector.mode,
                    ou = ({ size: e, performanceRisk: u = ye.LowRisk, modeName: t, cut: a, textFolder: i }) => {
                        var n;
                        const o = i || nu.$dyn(t),
                            l = (0, r.useMemo)(() => {
                                if (o && o.performance) {
                                    const e = o.performance.$dyn(u);
                                    if (e) {
                                        const t = e.header(),
                                            r = e.description(),
                                            _ = a
                                                ? R.views.lobby.common.tooltips.SimpleIconTooltip('resId')
                                                : R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                                      'resId',
                                                  ),
                                            i = a
                                                ? 0
                                                : R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId');
                                        return {
                                            args: { header: t, body: r, headerType: a ? iu[u] : ke.Normal },
                                            contentId: _,
                                            decoratorId: i,
                                        };
                                    }
                                }
                            }, [o, u, a]);
                        if (u === ye.LowRisk || !o || null == o || !o.performance) return null;
                        const s = (null == (n = o.performance) ? void 0 : n.$dyn(u)).headerIcon();
                        return _().createElement(
                            ge,
                            _u({}, l, { isEnabled: Boolean(l) }),
                            a
                                ? _().createElement('div', { className: A()(ru.iconBig, ru[`iconBig__${u}`]) })
                                : _().createElement(
                                      'div',
                                      { className: A()(ru.base, ru[`base__${e}`], ru[`base__${u}`]) },
                                      _().createElement(au, {
                                          classMix: ru.text,
                                          text: s,
                                          isTruncationAvailable: e === ae.B2,
                                          binding: { icon: _().createElement('div', { className: ru.icon }) },
                                          justifyContent: Me.Center,
                                      }),
                                  ),
                        );
                    },
                    lu = ({ index: e, text: u, isSmall: t = !1, classMix: a, tooltipId: r, modeName: i = '' }) =>
                        _().createElement(
                            De,
                            { args: r ? { tooltipId: r, modeName: i } : { tooltipId: 'calendarTooltip', index: e } },
                            _().createElement(
                                'div',
                                { className: A()('TimeLeft_base_cf', t && 'TimeLeft_base__small_7c', a) },
                                _().createElement('div', { className: 'TimeLeft_icon_5d' }),
                                u,
                            ),
                        );
                let su;
                !(function (e) {
                    ((e[(e.NONE = 0)] = 'NONE'), (e[(e.STATIC = 1)] = 'STATIC'), (e[(e.NEW = 2)] = 'NEW'));
                })(su || (su = {}));
                const mu = {
                        base: 'BattlePassIcon_base_bf',
                        bpIcon: 'BattlePassIcon_bpIcon_18',
                        bpIcon__extraLarge: 'BattlePassIcon_bpIcon__extraLarge_b3',
                        bpIcon__large: 'BattlePassIcon_bpIcon__large_c2',
                        bpAnim: 'BattlePassIcon_bpAnim_01',
                        bpAnim__extraLarge: 'BattlePassIcon_bpAnim__extraLarge_38',
                        bpAnim__large: 'BattlePassIcon_bpAnim__large_1e',
                    },
                    cu = ({ modeName: e, isDisabled: u, battlePassState: t }) => {
                        const a = Y([...ne('bpIcon', 'bpAnim')], mu);
                        return (
                            (0, r.useEffect)(() => {
                                t !== su.NEW || u || xe('ev_mode_selector_bp_points_icon_appear');
                            }, [t, u]),
                            t === su.NONE || u
                                ? null
                                : _().createElement(
                                      'div',
                                      { className: mu.base },
                                      _().createElement(
                                          ge,
                                          {
                                              contentId:
                                                  R.views.lobby.mode_selector.tooltips.SimplyFormatTooltip('resId'),
                                              args: { modeName: e },
                                              ignoreShowDelay: !0,
                                          },
                                          _().createElement('div', { className: a.bpIcon }),
                                      ),
                                      t === su.NEW && _().createElement('div', { className: a.bpAnim }),
                                  )
                        );
                    },
                    du = {
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
                    Eu = R.images.gui.maps.icons.mode_selector.rewards,
                    bu = R.images.gui.maps.icons.vehicleTypes.c_24x24,
                    Au = ['small', 'small-b0', 'small-b1', 'medium'],
                    gu = [ae.B0, ae.B1],
                    Fu = ({
                        mediaSize: e,
                        cardSize: u,
                        iconName: t,
                        name: a,
                        description: i,
                        tooltipID: n,
                        vehicleLevel: o,
                        vehicleType: l,
                        isPremium: s,
                    }) => {
                        const m = `${e}${gu.includes(u) ? `-${u}` : ''}`,
                            c = (0, r.useMemo)(() => {
                                const e = Au.includes(m) ? 'c_48x48' : 'c_64x64';
                                return { backgroundImage: `url(${Eu.$dyn(e).$dyn(t)})` };
                            }, [m, t]);
                        return _().createElement(
                            Le,
                            {
                                tooltipArgs: {
                                    args: { tooltipId: n },
                                    body: n ? '' : i,
                                    header: n ? '' : a,
                                    ignoreShowDelay: !0,
                                },
                            },
                            _().createElement(
                                'div',
                                { className: A()(du.base, du[`base__${m}`]) },
                                _().createElement(
                                    'div',
                                    { className: du.header },
                                    _().createElement('div', {
                                        className: du.vehicleType,
                                        style: l
                                            ? {
                                                  backgroundImage: `url(${bu.$dyn(`${((d = l), d.replace(/-/g, '_'))}${s ? '_elite' : ''}`)})`,
                                              }
                                            : void 0,
                                    }),
                                    _().createElement('div', null, o),
                                ),
                                _().createElement('div', { className: du.icon, style: c }),
                                a && _().createElement(X, { text: a, classMix: du.name }),
                            ),
                        );
                        var d;
                    },
                    Cu = {
                        base: 'Rewards_base_c8',
                        base__extraSmall: 'Rewards_base__extraSmall_9b',
                        base__small: 'Rewards_base__small_78',
                        base__medium: 'Rewards_base__medium_75',
                    };
                function Du() {
                    return (
                        (Du =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Du.apply(this, arguments)
                    );
                }
                const Bu = ({ size: e, rewardsList: u }) => {
                        const t = le(),
                            a = Y(['base'], Cu);
                        return _().createElement(
                            'div',
                            { className: a.base },
                            u &&
                                u.map(
                                    (u) =>
                                        u &&
                                        u.value &&
                                        _().createElement(
                                            Fu,
                                            Du({ key: u.value.iconName, mediaSize: t, cardSize: e }, u.value),
                                        ),
                                ),
                        );
                    },
                    hu = {
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
                let pu;
                !(function (e) {
                    ((e.Huge = 'huge'), (e.Big = 'big'), (e.Medium = 'medium'), (e.Small = 'small'));
                })(pu || (pu = {}));
                const fu = [ae.B4, ae.B5, ae.B6],
                    xu = [ae.B0, ae.B1, ae.B2],
                    vu = {
                        [ae.B0]: { [re.Big]: pu.Huge, [re.Medium]: pu.Huge, [re.Small]: pu.Big },
                        [ae.B1]: { [re.Big]: pu.Huge, [re.Medium]: pu.Huge, [re.Small]: pu.Big },
                        [ae.B2]: { [re.Big]: pu.Huge, [re.Medium]: pu.Huge, [re.Small]: pu.Big },
                        [ae.B3]: { [re.Big]: pu.Huge, [re.Medium]: pu.Big, [re.Small]: pu.Big },
                        [ae.B4]: { [re.Big]: pu.Big, [re.Medium]: pu.Big, [re.Small]: pu.Medium },
                        [ae.B5]: { [re.Big]: pu.Medium, [re.Medium]: pu.Medium, [re.Small]: pu.Small },
                        [ae.B6]: { [re.Big]: pu.Medium, [re.Medium]: pu.Small, [re.Small]: pu.Small },
                    },
                    wu = [
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
                function Nu() {
                    return (
                        (Nu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Nu.apply(this, arguments)
                    );
                }
                const ku = (e) => {
                        let u = e.name,
                            t = e.eventName,
                            a = e.statusNotActive,
                            i = e.description,
                            n = e.conditions,
                            o = e.children,
                            l = e.onHoverChanged,
                            s = e.calendarTooltip,
                            m = void 0 === s ? '' : s,
                            c = e.widgetComponent,
                            d = e.battlePassState,
                            E = e.isDisabled,
                            b = e.timeLeft,
                            g = e.rewardList,
                            F = e.statusActive,
                            C = e.divider,
                            D = void 0 === C ? ' ' : C,
                            B = e.belowStatusComponent,
                            h = e.nameSuffixComponent,
                            p = e.forceShowIcon,
                            f = void 0 !== p && p,
                            x = e.hideStatus,
                            v = void 0 !== x && x,
                            w = e.noWidgetSizes,
                            N = void 0 === w ? [ae.B5, ae.B6] : w,
                            k = e.classNames,
                            y = e.resourceFolderGetter,
                            T = void 0 === y ? te : y,
                            L = e.textResourcesFolder,
                            O = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    _ = Object.keys(e);
                                for (a = 0; a < _.length; a++) ((t = _[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, wu);
                        const M = le(),
                            W = Y(
                                [
                                    ...ne(
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
                                hu,
                            ),
                            I = q('model', K.None),
                            P = I.onItemClicked,
                            $ = I.onInfoClicked,
                            H = O.resourcesFolderName,
                            z = O.size,
                            j = O.isSelected,
                            G = O.showWidget,
                            U = O.isNew,
                            V = O.modeName,
                            X = O.index,
                            Z = O.performance,
                            Q = oe(l),
                            J = Q[0],
                            ee = Q[1],
                            _e = (0, r.useMemo)(() => vu[z][M], [z, M]),
                            ie = (0, r.useMemo)(() => {
                                const e = T(H);
                                if (null !== e) {
                                    const u = e.$dyn(`icon_${_e}`);
                                    if (void 0 !== u) return { backgroundImage: `url(${u})` };
                                }
                            }, [T, H, _e]),
                            se = G || j,
                            me = fu.includes(z),
                            ce = z === ae.B0,
                            de = z === ae.B1,
                            Ee = z === ae.B2,
                            be = z === ae.B3,
                            Ae = xu.includes(z),
                            ge = !N.includes(z) && G && c,
                            Fe = se && !me,
                            Ce = J && !me && !se,
                            De = J || (j && F),
                            Be = M !== re.Big,
                            he = g && g.length > 0 && !a && Ae,
                            pe = Z && Z.showPerfRisk,
                            fe = (0, r.useMemo)(
                                () =>
                                    E
                                        ? R.strings.ranked_battles.rankedBattlesUnreachableView.subtitleText()
                                        : F || t || void 0,
                                [E, F, t],
                            ),
                            xe = (0, r.useMemo)(
                                () => (Ae || be ? a || '' : void 0 === a ? '' : a.replace('\n', ' ')),
                                [Ae, a, be],
                            );
                        let ve = '';
                        de && i === fe ? n && (ve = S(n)) : (ce && i === fe) || (ve = S(i + D + n));
                        const we = A()(
                                hu.icon,
                                hu[`icon__${_e}`],
                                W[`icon__${z}`],
                                !me && hu.icon__animPrepare,
                                Fe && W[`icon__static__${z}`],
                                Ce && W[`icon__anim__${z}`],
                            ),
                            ke = A()(hu.mask, W[`mask__${z}`], Fe && hu.mask__static, Ce && hu.mask__anim),
                            ye = A()(
                                W.subtitle,
                                W[`subtitle__${z}`],
                                (t || !me) && hu.subtitle__normal,
                                !Ae && hu.subtitle__noReward,
                                F && me && hu.subtitle__statusActive,
                                F && se && hu.subtitle__staticPrepare,
                                De && hu.subtitle__anim,
                                E && hu.subtitle__disable,
                                null == k ? void 0 : k.subtitle,
                            ),
                            Te = A()(
                                hu.statusDescription,
                                Ee && hu.statusDescription__position,
                                Ae && hu.statusDescription__color,
                            ),
                            Le = A()(W.footer, (J || j) && !G && be && hu.footer__anim, null == k ? void 0 : k.footer),
                            Se = A()(W.formatText, W[`formatText__${z}`]),
                            Re = A()(hu.darken, G && hu.darken__show),
                            Oe = A()(
                                hu.widgetOverlay,
                                !ge && hu.widgetOverlay__hide,
                                null == k ? void 0 : k.widgetOverlay,
                            );
                        return _().createElement(
                            'div',
                            { className: A()(W.base, W[`base__${z}`]) },
                            _().createElement(
                                Ne,
                                Nu({ onHoverChanged: ee, isDisabled: E }, O, {
                                    onItemClicked: P,
                                    onInfoClicked: $,
                                    resourceFolderGetter: T,
                                }),
                                he && _().createElement(Bu, { size: z, rewardsList: g }),
                                a &&
                                    _().createElement(
                                        'div',
                                        { className: A()(W.statusNotActive, W[`statusNotActive__${z}`]) },
                                        _().createElement(ue, { text: xe, classMix: Se }),
                                    ),
                                _().createElement('div', { className: Re }),
                                c && _().createElement('div', { className: Oe }, c),
                                o,
                                (!ge || f) &&
                                    _().createElement(
                                        'div',
                                        { className: ke },
                                        _().createElement('div', { className: we, style: ie }),
                                    ),
                                _().createElement('div', { className: A()(hu.name, W.name, W[`name__${z}`]) }, u, h),
                                _().createElement(
                                    'div',
                                    { className: ye },
                                    !v && (!Ee || E) && _().createElement(ue, { classMix: Se, text: fe || '' }),
                                    ve &&
                                        Ae &&
                                        !E &&
                                        (!ge || Ae) &&
                                        _().createElement(
                                            'div',
                                            { className: Te },
                                            _().createElement(ue, { classMix: Se, text: ve }),
                                        ),
                                    pe &&
                                        Ae &&
                                        _().createElement(ou, {
                                            size: z,
                                            modeName: V,
                                            performanceRisk: Z.performanceRisk,
                                            cut: !1,
                                            textFolder: L,
                                        }),
                                    _().createElement(
                                        'div',
                                        { className: A()(hu.belowStatus, null == k ? void 0 : k.belowStatus) },
                                        B,
                                    ),
                                ),
                                n &&
                                    _().createElement(
                                        'div',
                                        { className: Le },
                                        _().createElement(ue, { classMix: Se, text: S(n) }),
                                    ),
                                b &&
                                    !U &&
                                    _().createElement(lu, {
                                        index: X,
                                        text: b,
                                        isSmall: Be,
                                        classMix: A()(hu.timeLeft, Be && hu.timeLeft__small),
                                        tooltipId: m,
                                        modeName: V,
                                    }),
                                _().createElement(cu, { modeName: V, isDisabled: E, battlePassState: d }),
                                pe &&
                                    !Ae &&
                                    _().createElement(ou, {
                                        size: z,
                                        modeName: V,
                                        performanceRisk: Z.performanceRisk,
                                        cut: !0,
                                        textFolder: L,
                                    }),
                            ),
                        );
                    },
                    yu = {
                        widgetOverlay: 'BattleRoyaleBattleCard_widgetOverlay_fd',
                        belowStatus: 'BattleRoyaleBattleCard_belowStatus_23',
                    },
                    Tu = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Lu, Su;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                })(Lu || (Lu = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(Su || (Su = {})));
                const Ru = ({ size: e = Lu.Default }) => {
                        const u = A()(Tu.background, Tu[`background__${e}`]);
                        return _().createElement('div', { className: u });
                    },
                    Ou = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    Mu = ({ size: e }) => {
                        const u = A()(Ou.base, Ou[`base__${e}`]);
                        return _().createElement('div', { className: u });
                    },
                    Wu = {
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
                    Iu = (0, r.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: a, isComplete: r, withoutBounce: i }) => {
                            const n = A()(
                                    Wu.base,
                                    Wu[`base__${e}`],
                                    t && Wu.base__disabled,
                                    r && Wu.base__finished,
                                    i && Wu.base__withoutBounce,
                                ),
                                o = !t && !r;
                            return _().createElement(
                                'div',
                                { className: n, style: a, ref: u },
                                _().createElement('div', { className: Wu.pattern }),
                                _().createElement('div', { className: Wu.gradient }),
                                o && _().createElement(Mu, { size: e }),
                            );
                        },
                    ),
                    Pu = (e, u) => {
                        let t;
                        const a = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(a));
                        };
                    };
                let $u, Hu;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })($u || ($u = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(Hu || (Hu = {})));
                const zu = (e) => (e ? { left: 0 } : { right: 0 }),
                    ju = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    Gu = (e) => ({ transitionDuration: `${e}ms` }),
                    Uu = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: i,
                            to: n,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: s,
                        }) => {
                            const m = n < a,
                                c = (0, r.useState)($u.Idle),
                                d = c[0],
                                E = c[1],
                                b = d === $u.End,
                                g = d === $u.Idle,
                                F = d === $u.Grow,
                                C = d === $u.Shrink,
                                D = (0, r.useCallback)(
                                    (e) => {
                                        (E(e), l && l(e));
                                    },
                                    [l],
                                ),
                                B = (0, r.useCallback)(
                                    (e, u) =>
                                        Pu(() => {
                                            D(e);
                                        }, u),
                                    [D],
                                );
                            (0, r.useEffect)(() => {
                                if (!t)
                                    return g
                                        ? B($u.Grow, u)
                                        : F
                                          ? B($u.Shrink, e)
                                          : C
                                            ? B($u.End, e)
                                            : void (b && o && o());
                            }, [B, t, b, F, g, C, o, u, e]);
                            const h = (0, r.useMemo)(() => Object.assign({ width: '100%' }, Gu(e), zu(m)), [m, e]),
                                p = (0, r.useMemo)(() => Object.assign({ width: '0%' }, Gu(e), zu(m)), [m, e]),
                                f = (0, r.useMemo)(() => Object.assign({ width: '0%' }, ju(m, a), Gu(e)), [a, m, e]),
                                x = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(n - a)}%` }, ju(m, a), Gu(e)),
                                    [a, m, n, e],
                                );
                            if (b) return null;
                            const v = A()(
                                'ProgressBarDeltaGrow_base_7e',
                                s,
                                m && 0 === n && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return _().createElement(
                                'div',
                                { style: g ? f : x, className: v },
                                _().createElement(
                                    'div',
                                    { style: C ? p : h, className: 'ProgressBarDeltaGrow_glow_68' },
                                    _().createElement(Mu, { size: i }),
                                ),
                            );
                        },
                    ),
                    Vu = (0, r.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: i,
                            isComplete: n,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: s,
                        }) => {
                            const m = e < t,
                                c = (0, r.useState)(!1),
                                d = c[0],
                                E = c[1],
                                b = (0, r.useCallback)(
                                    (e) => {
                                        (e === $u.Shrink && E(!0), s && s(e));
                                    },
                                    [s],
                                ),
                                A = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                g = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return _().createElement(
                                _().Fragment,
                                null,
                                _().createElement(Iu, {
                                    size: u,
                                    lineRef: a,
                                    disabled: i,
                                    isComplete: n,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: d ? g : A,
                                }),
                                t >= 0 &&
                                    _().createElement(Uu, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: b,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    Ku = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: i,
                            to: n,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const s = n < a,
                                m = (0, r.useState)(Hu.Idle),
                                c = m[0],
                                d = m[1],
                                E = c === Hu.In,
                                b = c === Hu.End,
                                A = c === Hu.Idle,
                                g = (0, r.useCallback)(
                                    (e) => {
                                        (d(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, r.useEffect)(() => {
                                if (A && !t)
                                    return Pu(() => {
                                        g(Hu.In);
                                    }, u);
                            }, [g, t, A, u]),
                                (0, r.useEffect)(() => {
                                    if (E)
                                        return Pu(() => {
                                            (o && o(), g(Hu.End));
                                        }, e + u);
                                }, [g, E, o, u, e]));
                            const F = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [s ? 'left' : 'right']: '0',
                                    }),
                                    [s, u, e],
                                ),
                                C = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [s ? 'left' : 'right']: '0',
                                    }),
                                    [s, u, e],
                                ),
                                D = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(a - n)}%`, left: `${s ? n : a}%` }),
                                    [a, s, n],
                                );
                            return b
                                ? null
                                : _().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: D },
                                      _().createElement(
                                          'div',
                                          { style: A ? F : C, className: 'ProgressBarDeltaSimple_delta_99' },
                                          _().createElement(Mu, { size: i }),
                                      ),
                                  );
                        },
                    ),
                    qu = (0, r.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: i,
                            isComplete: n,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: s,
                        }) => {
                            const m = (0, r.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return _().createElement(
                                _().Fragment,
                                null,
                                _().createElement(Iu, {
                                    size: u,
                                    lineRef: a,
                                    disabled: i,
                                    isComplete: n,
                                    baseStyles: m,
                                }),
                                t >= 0 &&
                                    _().createElement(Ku, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: s,
                                    }),
                            );
                        },
                    ),
                    Yu = ['onComplete', 'onEndAnimation'];
                function Xu() {
                    return (
                        (Xu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Xu.apply(this, arguments)
                    );
                }
                const Zu = (0, r.memo)((e) => {
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
                            })(e, Yu);
                        const i = (0, r.useState)(!1),
                            n = i[0],
                            o = i[1],
                            l = (0, r.useCallback)(() => {
                                const e = 100 === a.to;
                                (e !== n && o(e), e && u && u(), t && t());
                            }, [n, u, t, a.to]);
                        switch (a.animationSettings.type) {
                            case Su.Simple:
                                return _().createElement(qu, Xu({}, a, { onEndAnimation: l, isComplete: n }));
                            case Su.Growing:
                                return _().createElement(Vu, Xu({}, a, { onEndAnimation: l, isComplete: n }));
                            default:
                                return null;
                        }
                    }),
                    Qu = ({ size: e, value: u, lineRef: t, disabled: a, onComplete: i }) => {
                        const n = (0, r.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            o = 100 === u;
                        return (
                            (0, r.useEffect)(() => {
                                o && i && i();
                            }, [o, i]),
                            _().createElement(Iu, { size: e, disabled: a, baseStyles: n, isComplete: o, lineRef: t })
                        );
                    },
                    Ju = ['onEndAnimation'];
                function et() {
                    return (
                        (et =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        et.apply(this, arguments)
                    );
                }
                const ut = (0, r.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                _ = Object.keys(e);
                            for (a = 0; a < _.length; a++) ((t = _[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, Ju);
                    const a = (0, r.useRef)({}),
                        i = (0, r.useCallback)(() => {
                            ((a.current.from = void 0), u && u());
                        }, [u]),
                        n = 'number' == typeof a.current.from ? a.current.from : t.from;
                    return (
                        (a.current.from = n),
                        _().createElement(
                            Zu,
                            et({}, t, {
                                onEndAnimation: i,
                                key: `${n}-${t.to}-${null == t ? void 0 : t.additionalKey}`,
                                from: n,
                            }),
                        )
                    );
                });
                function tt() {
                    return (
                        (tt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        tt.apply(this, arguments)
                    );
                }
                const at = (0, r.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: a,
                            deltaFrom: r,
                            additionalKey: i,
                            animationSettings: n,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            onComplete: s,
                        }) => {
                            if (r === u)
                                return _().createElement(Qu, {
                                    key: `${r}-${u}-${i}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: a,
                                    onComplete: s,
                                });
                            const m = {
                                from: r,
                                to: u,
                                size: e,
                                additionalKey: i,
                                lineRef: t,
                                disabled: a,
                                animationSettings: n,
                                onComplete: s,
                                onEndAnimation: o,
                                onChangeAnimationState: l,
                            };
                            return n.withStack
                                ? _().createElement(ut, m)
                                : _().createElement(Zu, tt({ key: `${r}-${u}-${i}` }, m));
                        },
                    ),
                    rt = (e) => {
                        var u, t, a, r, _, i, n, o, l, s, m, c, d, E, b, A, g, F, C, D;
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
                            '--progress-pattern-size': null != (i = e.pattern.size) ? i : '3rem 10rem',
                            '--progress-pattern-border-size': null != (n = e.pattern.borderSize) ? n : '1rem',
                            '--progress-pattern-gradient':
                                null != (o = e.pattern.gradient)
                                    ? o
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75))',
                            '--progress-pattern-gradient-finished':
                                null != (l = e.pattern.gradientFinished)
                                    ? l
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.5))',
                            '--progress-pattern-gradient-mixBlendMode':
                                null != (s = e.pattern.mixBlendMode) ? s : 'overlay',
                            '--progress-glow': `url('${e.glow}')`,
                            '--progress-glow-width':
                                null != (m = null == (c = e.glowSettings) ? void 0 : c.width) ? m : '60rem',
                            '--progress-glow-height':
                                null != (d = null == (E = e.glowSettings) ? void 0 : E.height) ? d : '100rem',
                            '--progress-glow-small-width':
                                null != (b = null == (A = e.glowSettings) ? void 0 : A.smallWidth) ? b : '44rem',
                            '--progress-glow-small-height':
                                null != (g = null == (F = e.glowSettings) ? void 0 : F.smallHeight) ? g : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (C = null == (D = e.glowSettings) ? void 0 : D.mixBlendMode) ? C : 'lighten',
                            '--progress-glow-small': `url('${e.glowSmall}')`,
                            '--progress-delta-color': e.delta.color,
                            '--progress-delta-shadow': e.delta.shadow,
                        };
                    },
                    _t = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_bg_base',
                        bg: { height: '22rem', heightSmall: '4rem' },
                        glowSettings: {
                            width: '34rem',
                            height: '54rem',
                            mixBlendMode: 'normal',
                            smallWidth: '34rem',
                            smallHeight: '36rem',
                        },
                        line: {
                            bgColorBase: 'rgba(191, 232, 255, 0.6)',
                            bgColorDisabled: 'transparent',
                            bgColorFinished: 'rgba(191, 232, 255, 0.6)',
                            filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.08)) drop-shadow(0 0 8px rgba(255, 255, 255, 0.16)) drop-shadow(0 0 16px rgba(255, 255, 255, 0.24))',
                        },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern_base',
                            bgImageDisabled:
                                'R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern_base',
                            size: '4rem 22rem',
                            borderSize: '0',
                            gradient: 'url(R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern)',
                            gradientFinished: 'url(R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern)',
                            mixBlendMode: 'normal',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_glow_small',
                        delta: {
                            color: '#fff',
                            shadow: ' 0 0 4px 1px rgba(120, 180, 255, 0.4), 0 0 9px 1px rgba(100, 160, 255, 0.4), 0 0 12px 2px rgba(80, 140, 255, 0.4), 0 0 12px 4px rgba(60, 120, 255, 0.4)',
                        },
                    },
                    it =
                        (Object.assign({}, _t, {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.green_noise_bg_base',
                            line: Object.assign({}, _t.line, {
                                bgColorBase: '#83C6A5',
                                bgColorFinished: 'rgba(10, 230, 72, 0.6)',
                            }),
                            pattern: Object.assign({}, _t.pattern, {
                                bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_base',
                                bgImageDisabled:
                                    'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_disabled',
                                bgImageFinished:
                                    'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_base',
                            }),
                        }),
                        (e, u, t) => (t < e ? e : t > u ? u : t)),
                    nt = (e, u, t) => ('number' == typeof t ? (it(0, u, t) / u) * 100 : e),
                    ot = {
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
                    lt = {
                        freezed: !1,
                        withStack: !1,
                        type: Su.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    st = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = ot,
                            size: t = Lu.Default,
                            animationSettings: a = lt,
                            disabled: i = !1,
                            withoutBackground: n = !1,
                            value: o,
                            deltaFrom: l,
                            additionalKey: s,
                            lineRef: m,
                            onChangeAnimationState: c,
                            onEndAnimation: d,
                            onComplete: E,
                            className: b,
                        }) => {
                            const g = (function (e, u, t) {
                                return (0, r.useMemo)(() => {
                                    const a = (it(0, u, e) / u) * 100;
                                    return { value: a, deltaFrom: nt(a, u, t) };
                                }, [t, u, e]);
                            })(o, e, l);
                            return _().createElement(
                                'div',
                                { className: A()(Tu.base, b, Tu[`base__${t}`]), style: rt(u) },
                                !n && _().createElement(Ru, { size: t }),
                                _().createElement(at, {
                                    size: t,
                                    lineRef: m,
                                    disabled: i,
                                    value: g.value,
                                    deltaFrom: g.deltaFrom,
                                    additionalKey: s,
                                    animationSettings: a,
                                    onEndAnimation: d,
                                    onChangeAnimationState: c,
                                    onComplete: E,
                                }),
                            );
                        },
                    ),
                    mt = {
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
                    ct = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    dt = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Et = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    bt = (0, r.memo)(({ text: e, binding: u, classMix: t }) => {
                        const a = (0, r.useCallback)((e) => ({ color: `#${e}` }), []),
                            i = (0, r.useMemo)(() => u || {}, [u]);
                        let n = ct.exec(e),
                            o = e,
                            l = 0;
                        for (; n; ) {
                            const t = n[0],
                                r = dt.exec(t),
                                s = Et.exec(t),
                                m = n[1];
                            if (r && s) {
                                const e = r[0],
                                    n = e + l++ + e;
                                ((o = o.replace(t, `%(${n})`)),
                                    (i[n] = mt[e]
                                        ? _().createElement(
                                              'span',
                                              { className: mt[e] },
                                              _().createElement(X, { text: m, binding: u }),
                                          )
                                        : _().createElement(
                                              'span',
                                              { style: a(e) },
                                              _().createElement(X, { text: m, binding: u }),
                                          )));
                            }
                            n = ct.exec(e);
                        }
                        return _().createElement(X, { text: o, classMix: t, binding: i });
                    }),
                    At = {
                        freezed: !1,
                        withStack: !1,
                        type: Su.Growing,
                        delta: { duration: 2e3, delay: 100 },
                        line: { duration: 2e3, delay: 100 },
                    },
                    gt = ({ currentStage: e, stageCurrentPoints: u, stageMaximumPoints: t }) =>
                        _().createElement(
                            'div',
                            { className: 'Progression_base_25' },
                            _().createElement(
                                'div',
                                { className: 'Progression_contentWrapper_01' },
                                _().createElement(
                                    'div',
                                    { className: 'Progression_progress_7e' },
                                    _().createElement(
                                        'div',
                                        { className: 'Progression_currentStage_22' },
                                        R.strings.mode_selector.mode.battleRoyale.progression.currentStage(),
                                        _().createElement('span', null, e),
                                    ),
                                    _().createElement(st, {
                                        size: Lu.Small,
                                        value: u,
                                        maxValue: t,
                                        animationSettings: At,
                                        deltaFrom: u,
                                    }),
                                    _().createElement(
                                        'div',
                                        { className: 'Progression_progressValue_7e' },
                                        _().createElement(bt, {
                                            text: R.strings.mode_selector.mode.battleRoyale.progression.steps(),
                                            binding: { done: u, total: t },
                                        }),
                                        _().createElement('div', { className: 'Progression_progressValueIcon_84' }),
                                    ),
                                ),
                            ),
                        );
                let Ft, Ct;
                (!(function (e) {
                    ((e.Default = 'default'), (e.StPatrick = 'stPatrick'));
                })(Ft || (Ft = {})),
                    (function (e) {
                        ((e.BrCoin = 'brcoin'), (e.StpCoin = 'stpcoin'));
                    })(Ct || (Ct = {})));
                const Dt = (0, r.createContext)(null),
                    Bt = () => {
                        const e = (0, r.useContext)(Dt);
                        if (null === e)
                            throw new Error(
                                'useCard hook was called with data from BattleRoyaleBattleCardContext.Provider',
                            );
                        return e;
                    },
                    ht = ({ subMode: e, children: u }) => {
                        const t = (0, r.useMemo)(
                            () =>
                                e === Ft.StPatrick
                                    ? {
                                          resourceFolderGetter: () =>
                                              R.images.battle_royale.gui.maps.st_patrick.icons.mode_selector,
                                          widgetAssetsFolder: R.images.battle_royale.gui.maps.st_patrick.icons.widget,
                                      }
                                    : {
                                          resourceFolderGetter: () =>
                                              R.images.battle_royale.gui.maps.icons.mode_selector,
                                          widgetAssetsFolder: R.images.battle_royale.gui.maps.icons.widget,
                                      },
                            [e],
                        );
                        return _().createElement(Dt.Provider, { value: t }, u);
                    },
                    pt = {
                        base: 'Widget_base_86',
                        icon: 'Widget_icon_08',
                        icon__huge: 'Widget_icon__huge_0c',
                        icon__big: 'Widget_icon__big_8a',
                        icon__medium: 'Widget_icon__medium_d5',
                        icon__small: 'Widget_icon__small_87',
                        icon__b0: 'Widget_icon__b0_bb',
                        icon__b1: 'Widget_icon__b1_f6',
                        icon__b0__medium: 'Widget_icon__b0__medium_e0',
                        icon__b1__medium: 'Widget_icon__b1__medium_d6',
                        icon__b0__extraSmall: 'Widget_icon__b0__extraSmall_1a',
                        icon__b0__small: 'Widget_icon__b0__small_13',
                        icon__b1__extraSmall: 'Widget_icon__b1__extraSmall_21',
                        icon__b1__small: 'Widget_icon__b1__small_ae',
                        icon__b2: 'Widget_icon__b2_53',
                        icon__b2__medium: 'Widget_icon__b2__medium_37',
                        icon__b2__extraSmall: 'Widget_icon__b2__extraSmall_da',
                        icon__b2__small: 'Widget_icon__b2__small_e0',
                        icon__b3: 'Widget_icon__b3_06',
                        icon__b3__medium: 'Widget_icon__b3__medium_87',
                        icon__b3__extraSmall: 'Widget_icon__b3__extraSmall_d6',
                        icon__b3__small: 'Widget_icon__b3__small_7d',
                        icon__b4: 'Widget_icon__b4_7b',
                        icon__b4__medium: 'Widget_icon__b4__medium_93',
                        icon__b4__extraSmall: 'Widget_icon__b4__extraSmall_1e',
                        icon__b4__small: 'Widget_icon__b4__small_ae',
                        icon__b5: 'Widget_icon__b5_4e',
                        icon__b5__medium: 'Widget_icon__b5__medium_2d',
                        icon__b5__extraSmall: 'Widget_icon__b5__extraSmall_dc',
                        icon__b5__small: 'Widget_icon__b5__small_8e',
                        icon__b6: 'Widget_icon__b6_d2',
                        icon__b6__medium: 'Widget_icon__b6__medium_a0',
                        icon__b6__extraSmall: 'Widget_icon__b6__extraSmall_e6',
                        icon__b6__small: 'Widget_icon__b6__small_6c',
                    },
                    ft = { [pu.Huge]: '130x130', [pu.Big]: '64x64', [pu.Medium]: '64x64', [pu.Small]: '64x64' },
                    xt = ({ size: e, widget: u }) => {
                        const t = Bt().widgetAssetsFolder,
                            a = u.stageCurrentPoints === u.stageMaximumPoints,
                            r = le(),
                            i = Y([...ne('icon')], pt),
                            n = vu[e][r],
                            o = t.$dyn(`c_${ft[n]}`);
                        return _().createElement(
                            'div',
                            { className: pt.base },
                            _().createElement('div', {
                                className: A()(pt.icon, pt[`icon__${n}`], i[`icon__${e}`]),
                                style: { backgroundImage: `url(${o.$dyn(a ? 'bg1' : 'bg2')})` },
                            }),
                        );
                    };
                function vt() {
                    return (
                        (vt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        vt.apply(this, arguments)
                    );
                }
                const wt = (e) => {
                    const u = e.statusNotActive,
                        t = e.battlePassState,
                        a = e.size,
                        r = e.widget,
                        i = e.showWidget,
                        n = r && r.status === y.ACTIVE,
                        o = i && n && r.stageCurrentPoints !== r.stageMaximumPoints && a === ae.B1,
                        l = Bt().resourceFolderGetter;
                    return _().createElement(
                        'div',
                        { className: yu[`base__${a}`] },
                        _().createElement(
                            ku,
                            vt({}, e, {
                                widgetComponent: n && _().createElement(xt, e),
                                belowStatusComponent:
                                    o &&
                                    _().createElement(gt, {
                                        currentStage: e.widget.currentStage,
                                        stageCurrentPoints: e.widget.stageCurrentPoints,
                                        stageMaximumPoints: e.widget.stageMaximumPoints,
                                    }),
                                classNames: { belowStatus: yu.belowStatus },
                                battlePassState: u ? su.NONE : t,
                                resourceFolderGetter: l,
                            }),
                        ),
                    );
                };
                var Nt, kt;
                ((Nt = R.views.battle_royale.lobby.BattleRoyaleBattleCard()),
                    (kt = (e) =>
                        _().createElement(
                            k,
                            null,
                            _().createElement(ht, { subMode: e.eventInfo.subMode }, _().createElement(wt, e)),
                        )),
                    a().set(Nt, kt),
                    document.dispatchEvent(new CustomEvent(Nt)));
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
                    for (var [u, t, a] = deferred[o], _ = !0, i = 0; i < u.length; i++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((_ = !1), a < r && (r = a));
                    if (_) {
                        deferred.splice(o--, 1);
                        var n = t();
                        void 0 !== n && (e = n);
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
        (__webpack_require__.j = 'lobby/BattleRoyaleBattleCard/BattleRoyaleBattleCard'),
        (() => {
            var e = { 'lobby/BattleRoyaleBattleCard/BattleRoyaleBattleCard': 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        r,
                        [_, i, n] = t,
                        o = 0;
                    if (_.some((u) => 0 !== e[u])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (n) var l = n(__webpack_require__);
                    }
                    for (u && u(t); o < _.length; o++)
                        ((r = _[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/battle_royale.vendors'], () =>
        __webpack_require__(222),
    );
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
