(() => {
    'use strict';
    var __webpack_modules__ = {
            757: (e, t, n) => {
                n.d(t, { O: () => se });
                var o = {};
                (n.r(o),
                    n.d(o, { mouse: () => f, off: () => h, on: () => u, onResize: () => l, onScaleUpdated: () => d }));
                var i = {};
                (n.r(i),
                    n.d(i, {
                        events: () => o,
                        getMouseGlobalPosition: () => w,
                        getSize: () => m,
                        graphicsQuality: () => b,
                        playSound: () => p,
                        setRTPC: () => _,
                    }));
                var r = {};
                (n.r(r), n.d(r, { getBgUrl: () => C, getTextureUrl: () => S }));
                var s = {};
                function a(e) {
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
                (n.r(s),
                    n.d(s, {
                        addModelObserver: () => F,
                        addPreloadTexture: () => I,
                        arabic2roman: () => J,
                        children: () => r,
                        displayStatus: () => x,
                        displayStatusIs: () => te,
                        enableFullScreenModeSupported: () => ie,
                        events: () => P,
                        extraSize: () => ne,
                        forceTriggerMouseMove: () => $,
                        freezeTextureBeforeResize: () => B,
                        getBrowserTexturePath: () => N,
                        getDisplayStatus: () => Z,
                        getExternalPaddingsRem: () => ee,
                        getFontNames: () => Q,
                        getScale: () => W,
                        getSize: () => z,
                        getViewGlobalPosition: () => j,
                        initExternalPaddings: () => re,
                        isEventHandled: () => X,
                        isFocused: () => H,
                        pxToRem: () => q,
                        remToPx: () => G,
                        resize: () => V,
                        sendEvent: () => k,
                        setAnimateWindow: () => K,
                        setEventHandled: () => Y,
                        setInputPaddingsRem: () => D,
                        setSidePaddingsRem: () => U,
                        whenTutorialReady: () => oe,
                    }));
                const l = a('clientResized'),
                    d = a('self.onScaleUpdated'),
                    u = (e, t) => engine.on(e, t),
                    h = (e, t) => engine.off(e, t),
                    v = { down: a('mousedown'), up: a('mouseup'), move: a('mousemove') },
                    f = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && c(!1);
                        }
                        function n() {
                            e.enabled && c(!0);
                        }
                        function o() {
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
                                        const r = `mouse${t}`,
                                            s = v[t]((e) => n([e, 'outside']));
                                        function a(e) {
                                            n([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, a),
                                            o(),
                                            () => {
                                                i &&
                                                    (s(),
                                                    window.removeEventListener(r, a),
                                                    (e.listeners -= 1),
                                                    o(),
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
                                ((e.enabled = !1), o());
                            },
                            enable() {
                                ((e.enabled = !0), o());
                            },
                            enableOutside() {
                                e.enabled && c(!0);
                            },
                            disableOutside() {
                                e.enabled && c(!1);
                            },
                        });
                    })();
                function p(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function _(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function w(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const b = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    g = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    y = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    E = Object.keys(y).reduce((e, t) => ((e[t] = () => p(y[t])), e), {}),
                    O = { play: Object.assign({}, E, { sound: p }), setRTPC: _ },
                    T = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    M = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function S(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function C(e, t, n) {
                    return `url(${S(e, t, n)})`;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const x = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    P = {
                        onTextureFrozen: a('self.onTextureFrozen'),
                        onTextureReady: a('self.onTextureReady'),
                        onDomBuilt: a('self.onDomBuilt'),
                        onLoaded: a('self.onLoaded'),
                        onDisplayChanged: a('self.onShowingStatusChanged'),
                        onFocusUpdated: a('self.onFocusChanged'),
                        children: {
                            onAdded: a('children.onAdded'),
                            onLoaded: a('children.onLoaded'),
                            onRemoved: a('children.onRemoved'),
                            onAttached: a('children.onAttached'),
                            onTextureReady: a('children.onTextureReady'),
                            onRequestPosition: a('children.requestPosition'),
                        },
                    },
                    L = ['args'],
                    A = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        i = {},
                                        r = Object.keys(e);
                                    for (o = 0; o < r.length; o++) ((n = r[o]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                    return i;
                                })(t, L);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, r, {
                                          arguments:
                                              ((o = i),
                                              Object.entries(o).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    k = {
                        close(e) {
                            A('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            A(64);
                        },
                        move(e) {
                            A(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function I(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function D(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function N(e, t, n, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, o);
                }
                function F(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function U(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function z(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function V(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function j(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: G(t.x), y: G(t.y) };
                }
                function B() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function W() {
                    return viewEnv.getScale();
                }
                function q(e) {
                    return viewEnv.pxToRem(e);
                }
                function G(e) {
                    return viewEnv.remToPx(e);
                }
                function K(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function H() {
                    return viewEnv.isFocused();
                }
                function Y() {
                    return viewEnv.setEventHandled();
                }
                function X() {
                    return viewEnv.isEventHandled();
                }
                function $() {
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
                        let t = '';
                        for (let n = M.length - 1; n >= 0; n--) for (; e >= M[n]; ) ((t += T[n]), (e -= M[n]));
                        return t;
                    };
                function ee() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const te = Object.keys(x).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === x[t]), e), {}),
                    ne = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    oe = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : P.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function ie() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function re(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            n = t.top,
                            o = t.right,
                            i = t.bottom,
                            r = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${o}rem`),
                            e.style.setProperty('--external-padding-bottom', `${i}rem`),
                            e.style.setProperty('--external-padding-left', `${r}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
                const se = { view: s, client: i, sound: O, intl: g };
            },
            310: (e, t, n) => {
                n.d(t, { Z: () => r });
                var o = n(757);
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
                        const r = o.O.view.addModelObserver(e, n, i);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(r) : (this._views[n] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                            const o = this._callbacks[n];
                            void 0 !== o && o(e, t);
                        });
                    }
                }
                i.__instance = void 0;
                const r = i;
            },
            421: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(461);
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
            461: (e, t, n) => {
                n.d(t, { ry: () => g, Eu: () => y });
                class o {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let o = e.target;
                                    do {
                                        if (o === t) return;
                                        o = o.parentNode;
                                    } while (o);
                                    n();
                                });
                            }));
                    }
                    static get instance() {
                        return (o.__instance || (o.__instance = new o()), o.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const n = e,
                            o = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== o)),
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
                o.__instance = void 0;
                const i = o;
                var r = n(310);
                const s = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
                let c;
                var l;
                (((l = c || (c = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE'));
                const d = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    u = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    h = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    v = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                let f, p;
                (!(function (e) {
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
                })(f || (f = {})),
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
                    })(p || (p = {})));
                var _ = n(757);
                const m = ['args'];
                function w(e, t, n, o, i, r, s) {
                    try {
                        var a = e[r](s),
                            c = a.value;
                    } catch (e) {
                        return void n(e);
                    }
                    a.done ? t(c) : Promise.resolve(c).then(o, i);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
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
                                    return new Promise(function (o, i) {
                                        var r = e.apply(t, n);
                                        function s(e) {
                                            w(r, o, i, s, a, 'next', e);
                                        }
                                        function a(e) {
                                            w(r, o, i, s, a, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    y = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    E = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        i = {},
                                        r = Object.keys(e);
                                    for (o = 0; o < r.length; o++) ((n = r[o]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                    return i;
                                })(t, m);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, r, {
                                          arguments:
                                              ((o = i),
                                              Object.entries(o).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    O = () => E(c.CLOSE),
                    T = (e, t) => {
                        e.keyCode === f.ESCAPE && t();
                    };
                var M = n(421);
                const S = i.instance,
                    C = {
                        DataTracker: r.Z,
                        ViewModel: M.Z,
                        ViewEventType: c,
                        NumberFormatType: d,
                        RealFormatType: u,
                        TimeFormatType: h,
                        DateFormatType: v,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => E(c.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: O,
                        sendClosePopOverEvent: () => E(c.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            E(c.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, o, i = R.invalid('resId'), r) => {
                            const s = _.O.view.getViewGlobalPosition(),
                                a = n.getBoundingClientRect(),
                                l = a.x,
                                d = a.y,
                                u = a.width,
                                h = a.height,
                                v = {
                                    x: _.O.view.pxToRem(l) + s.x,
                                    y: _.O.view.pxToRem(d) + s.y,
                                    width: _.O.view.pxToRem(u),
                                    height: _.O.view.pxToRem(h),
                                };
                            E(c.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: o || R.invalid('resId'),
                                targetID: i,
                                direction: t,
                                bbox: b(v),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => T(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            T(e, O);
                        },
                        handleViewEvent: E,
                        onBindingsReady: g,
                        onLayoutReady: y,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(c.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(c.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(c.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const o in t)
                                if (Object.prototype.hasOwnProperty.call(t, o)) {
                                    const i = Object.prototype.toString.call(t[o]);
                                    if (i.startsWith('[object CoherentArrayProxy]')) {
                                        const i = t[o];
                                        n[o] = [];
                                        for (let t = 0; t < i.length; t++) n[o].push({ value: e(i[t].value) });
                                    } else
                                        i.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[o] = e(t[o]))
                                            : (n[o] = t[o]);
                                }
                            return n;
                        },
                        ClickOutsideManager: S,
                        SystemLocale: s,
                        UserLocale: a,
                    };
                window.ViewEnvHelper = C;
            },
        },
        __webpack_module_cache__ = {};
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](n, n.exports, __webpack_require__), n.exports);
    }
    ((__webpack_require__.d = (e, t) => {
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
        }));
    var __webpack_exports__ = {};
    (() => {
        var e = (function () {
                if ('undefined' != typeof Map) return Map;
                function e(e, t) {
                    var n = -1;
                    return (
                        e.some(function (e, o) {
                            return e[0] === t && ((n = o), !0);
                        }),
                        n
                    );
                }
                return (function () {
                    function t() {
                        this.__entries__ = [];
                    }
                    return (
                        Object.defineProperty(t.prototype, 'size', {
                            get: function () {
                                return this.__entries__.length;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.get = function (t) {
                            var n = e(this.__entries__, t),
                                o = this.__entries__[n];
                            return o && o[1];
                        }),
                        (t.prototype.set = function (t, n) {
                            var o = e(this.__entries__, t);
                            ~o ? (this.__entries__[o][1] = n) : this.__entries__.push([t, n]);
                        }),
                        (t.prototype.delete = function (t) {
                            var n = this.__entries__,
                                o = e(n, t);
                            ~o && n.splice(o, 1);
                        }),
                        (t.prototype.has = function (t) {
                            return !!~e(this.__entries__, t);
                        }),
                        (t.prototype.clear = function () {
                            this.__entries__.splice(0);
                        }),
                        (t.prototype.forEach = function (e, t) {
                            void 0 === t && (t = null);
                            for (var n = 0, o = this.__entries__; n < o.length; n++) {
                                var i = o[n];
                                e.call(t, i[1], i[0]);
                            }
                        }),
                        t
                    );
                })();
            })(),
            t = 'undefined' != typeof window && 'undefined' != typeof document && window.document === document,
            n =
                void 0 !== __webpack_require__.g && __webpack_require__.g.Math === Math
                    ? __webpack_require__.g
                    : 'undefined' != typeof self && self.Math === Math
                      ? self
                      : 'undefined' != typeof window && window.Math === Math
                        ? window
                        : Function('return this')(),
            o =
                'function' == typeof requestAnimationFrame
                    ? requestAnimationFrame.bind(n)
                    : function (e) {
                          return setTimeout(function () {
                              return e(Date.now());
                          }, 1e3 / 60);
                      },
            i = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
            r = 'undefined' != typeof MutationObserver,
            s = (function () {
                function e() {
                    ((this.connected_ = !1),
                        (this.mutationEventsAdded_ = !1),
                        (this.mutationsObserver_ = null),
                        (this.observers_ = []),
                        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                        (this.refresh = (function (e, t) {
                            var n = !1,
                                i = !1,
                                r = 0;
                            function s() {
                                (n && ((n = !1), e()), i && c());
                            }
                            function a() {
                                o(s);
                            }
                            function c() {
                                var e = Date.now();
                                if (n) {
                                    if (e - r < 2) return;
                                    i = !0;
                                } else ((n = !0), (i = !1), setTimeout(a, 20));
                                r = e;
                            }
                            return c;
                        })(this.refresh.bind(this))));
                }
                return (
                    (e.prototype.addObserver = function (e) {
                        (~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_());
                    }),
                    (e.prototype.removeObserver = function (e) {
                        var t = this.observers_,
                            n = t.indexOf(e);
                        (~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_());
                    }),
                    (e.prototype.refresh = function () {
                        this.updateObservers_() && this.refresh();
                    }),
                    (e.prototype.updateObservers_ = function () {
                        var e = this.observers_.filter(function (e) {
                            return (e.gatherActive(), e.hasActive());
                        });
                        return (
                            e.forEach(function (e) {
                                return e.broadcastActive();
                            }),
                            e.length > 0
                        );
                    }),
                    (e.prototype.connect_ = function () {
                        t &&
                            !this.connected_ &&
                            (document.addEventListener('transitionend', this.onTransitionEnd_),
                            window.addEventListener('resize', this.refresh),
                            r
                                ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
                                  this.mutationsObserver_.observe(document, {
                                      attributes: !0,
                                      childList: !0,
                                      characterData: !0,
                                      subtree: !0,
                                  }))
                                : (document.addEventListener('DOMSubtreeModified', this.refresh),
                                  (this.mutationEventsAdded_ = !0)),
                            (this.connected_ = !0));
                    }),
                    (e.prototype.disconnect_ = function () {
                        t &&
                            this.connected_ &&
                            (document.removeEventListener('transitionend', this.onTransitionEnd_),
                            window.removeEventListener('resize', this.refresh),
                            this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                            this.mutationEventsAdded_ &&
                                document.removeEventListener('DOMSubtreeModified', this.refresh),
                            (this.mutationsObserver_ = null),
                            (this.mutationEventsAdded_ = !1),
                            (this.connected_ = !1));
                    }),
                    (e.prototype.onTransitionEnd_ = function (e) {
                        var t = e.propertyName,
                            n = void 0 === t ? '' : t;
                        i.some(function (e) {
                            return !!~n.indexOf(e);
                        }) && this.refresh();
                    }),
                    (e.getInstance = function () {
                        return (this.instance_ || (this.instance_ = new e()), this.instance_);
                    }),
                    (e.instance_ = null),
                    e
                );
            })(),
            a = function (e, t) {
                for (var n = 0, o = Object.keys(t); n < o.length; n++) {
                    var i = o[n];
                    Object.defineProperty(e, i, { value: t[i], enumerable: !1, writable: !1, configurable: !0 });
                }
                return e;
            },
            c = function (e) {
                return (e && e.ownerDocument && e.ownerDocument.defaultView) || n;
            },
            l = f(0, 0, 0, 0);
        function d(e) {
            return parseFloat(e) || 0;
        }
        function u(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            return t.reduce(function (t, n) {
                return t + d(e['border-' + n + '-width']);
            }, 0);
        }
        var h =
            'undefined' != typeof SVGGraphicsElement
                ? function (e) {
                      return e instanceof c(e).SVGGraphicsElement;
                  }
                : function (e) {
                      return e instanceof c(e).SVGElement && 'function' == typeof e.getBBox;
                  };
        function v(e) {
            return t
                ? h(e)
                    ? (function (e) {
                          var t = e.getBBox();
                          return f(0, 0, t.width, t.height);
                      })(e)
                    : (function (e) {
                          var t = e.offsetWidth,
                              n = e.offsetHeight;
                          if (!t && !n) return l;
                          var o = c(e).getComputedStyle(e),
                              i = (function (e) {
                                  for (var t = {}, n = 0, o = ['top', 'right', 'bottom', 'left']; n < o.length; n++) {
                                      var i = o[n],
                                          r = e['padding-' + i];
                                      t[i] = d(r);
                                  }
                                  return t;
                              })(o),
                              r = i.left + i.right,
                              s = i.top + i.bottom,
                              a = d(o.width),
                              h = d(o.height);
                          if (
                              ('border-box' === o.boxSizing &&
                                  (Math.round(a + r) !== t && (a -= u(o, 'left', 'right') + r),
                                  Math.round(h + s) !== n && (h -= u(o, 'top', 'bottom') + s)),
                              !(function (e) {
                                  return e === c(e).document.documentElement;
                              })(e))
                          ) {
                              var v = Math.round(a + r) - t,
                                  p = Math.round(h + s) - n;
                              (1 !== Math.abs(v) && (a -= v), 1 !== Math.abs(p) && (h -= p));
                          }
                          return f(i.left, i.top, a, h);
                      })(e)
                : l;
        }
        function f(e, t, n, o) {
            return { x: e, y: t, width: n, height: o };
        }
        var p = (function () {
                function e(e) {
                    ((this.broadcastWidth = 0),
                        (this.broadcastHeight = 0),
                        (this.contentRect_ = f(0, 0, 0, 0)),
                        (this.target = e));
                }
                return (
                    (e.prototype.isActive = function () {
                        var e = v(this.target);
                        return (
                            (this.contentRect_ = e),
                            e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                        );
                    }),
                    (e.prototype.broadcastRect = function () {
                        var e = this.contentRect_;
                        return ((this.broadcastWidth = e.width), (this.broadcastHeight = e.height), e);
                    }),
                    e
                );
            })(),
            _ = function (e, t) {
                var n,
                    o,
                    i,
                    r,
                    s,
                    c,
                    l,
                    d =
                        ((o = (n = t).x),
                        (i = n.y),
                        (r = n.width),
                        (s = n.height),
                        (c = 'undefined' != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
                        (l = Object.create(c.prototype)),
                        a(l, { x: o, y: i, width: r, height: s, top: i, right: o + r, bottom: s + i, left: o }),
                        l);
                a(this, { target: e, contentRect: d });
            },
            m = (function () {
                function t(t, n, o) {
                    if (((this.activeObservations_ = []), (this.observations_ = new e()), 'function' != typeof t))
                        throw new TypeError('The callback provided as parameter 1 is not a function.');
                    ((this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = o));
                }
                return (
                    (t.prototype.observe = function (e) {
                        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                        if ('undefined' != typeof Element && Element instanceof Object) {
                            if (!(e instanceof c(e).Element))
                                throw new TypeError('parameter 1 is not of type "Element".');
                            var t = this.observations_;
                            t.has(e) ||
                                (t.set(e, new p(e)), this.controller_.addObserver(this), this.controller_.refresh());
                        }
                    }),
                    (t.prototype.unobserve = function (e) {
                        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                        if ('undefined' != typeof Element && Element instanceof Object) {
                            if (!(e instanceof c(e).Element))
                                throw new TypeError('parameter 1 is not of type "Element".');
                            var t = this.observations_;
                            t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this));
                        }
                    }),
                    (t.prototype.disconnect = function () {
                        (this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this));
                    }),
                    (t.prototype.gatherActive = function () {
                        var e = this;
                        (this.clearActive(),
                            this.observations_.forEach(function (t) {
                                t.isActive() && e.activeObservations_.push(t);
                            }));
                    }),
                    (t.prototype.broadcastActive = function () {
                        if (this.hasActive()) {
                            var e = this.callbackCtx_,
                                t = this.activeObservations_.map(function (e) {
                                    return new _(e.target, e.broadcastRect());
                                });
                            (this.callback_.call(e, t, e), this.clearActive());
                        }
                    }),
                    (t.prototype.clearActive = function () {
                        this.activeObservations_.splice(0);
                    }),
                    (t.prototype.hasActive = function () {
                        return this.activeObservations_.length > 0;
                    }),
                    t
                );
            })(),
            w = 'undefined' != typeof WeakMap ? new WeakMap() : new e(),
            b = function e(t) {
                if (!(this instanceof e)) throw new TypeError('Cannot call a class as a function.');
                if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                var n = s.getInstance(),
                    o = new m(t, n, this);
                w.set(this, o);
            };
        ['observe', 'unobserve', 'disconnect'].forEach(function (e) {
            b.prototype[e] = function () {
                var t;
                return (t = w.get(this))[e].apply(t, arguments);
            };
        });
        const g = void 0 !== n.ResizeObserver ? n.ResizeObserver : b;
        function y() {
            if (!(this instanceof y)) return new y();
            ((this.size = 0),
                (this.uid = 0),
                (this.selectors = []),
                (this.selectorObjects = {}),
                (this.indexes = Object.create(this.indexes)),
                (this.activeIndexes = []));
        }
        var E = window.document.documentElement,
            O =
                E.matches ||
                E.webkitMatchesSelector ||
                E.mozMatchesSelector ||
                E.oMatchesSelector ||
                E.msMatchesSelector;
        ((y.prototype.matchesSelector = function (e, t) {
            return O.call(e, t);
        }),
            (y.prototype.querySelectorAll = function (e, t) {
                return t.querySelectorAll(e);
            }),
            (y.prototype.indexes = []));
        var T = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
        y.prototype.indexes.push({
            name: 'ID',
            selector: function (e) {
                var t;
                if ((t = e.match(T))) return t[0].slice(1);
            },
            element: function (e) {
                if (e.id) return [e.id];
            },
        });
        var M = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
        y.prototype.indexes.push({
            name: 'CLASS',
            selector: function (e) {
                var t;
                if ((t = e.match(M))) return t[0].slice(1);
            },
            element: function (e) {
                var t = e.className;
                if (t) {
                    if ('string' == typeof t) return t.split(/\s/);
                    if ('object' == typeof t && 'baseVal' in t) return t.baseVal.split(/\s/);
                }
            },
        });
        var S,
            C = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
        (y.prototype.indexes.push({
            name: 'TAG',
            selector: function (e) {
                var t;
                if ((t = e.match(C))) return t[0].toUpperCase();
            },
            element: function (e) {
                return [e.nodeName.toUpperCase()];
            },
        }),
            (y.prototype.indexes.default = {
                name: 'UNIVERSAL',
                selector: function () {
                    return !0;
                },
                element: function () {
                    return [!0];
                },
            }),
            (S =
                'function' == typeof window.Map
                    ? window.Map
                    : (function () {
                          function e() {
                              this.map = {};
                          }
                          return (
                              (e.prototype.get = function (e) {
                                  return this.map[e + ' '];
                              }),
                              (e.prototype.set = function (e, t) {
                                  this.map[e + ' '] = t;
                              }),
                              e
                          );
                      })()));
        var x =
            /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
        function R(e, t) {
            var n,
                o,
                i,
                r,
                s,
                a,
                c = (e = e.slice(0).concat(e.default)).length,
                l = t,
                d = [];
            do {
                if ((x.exec(''), (i = x.exec(l)) && ((l = i[3]), i[2] || !l)))
                    for (n = 0; n < c; n++)
                        if ((s = (a = e[n]).selector(i[1]))) {
                            for (o = d.length, r = !1; o--; )
                                if (d[o].index === a && d[o].key === s) {
                                    r = !0;
                                    break;
                                }
                            r || d.push({ index: a, key: s });
                            break;
                        }
            } while (i);
            return d;
        }
        function P(e, t) {
            var n, o, i;
            for (n = 0, o = e.length; n < o; n++) if (((i = e[n]), t.isPrototypeOf(i))) return i;
        }
        function L(e, t) {
            return e.id - t.id;
        }
        ((y.prototype.logDefaultIndexUsed = function () {}),
            (y.prototype.add = function (e, t) {
                var n,
                    o,
                    i,
                    r,
                    s,
                    a,
                    c,
                    l,
                    d = this.activeIndexes,
                    u = this.selectors,
                    h = this.selectorObjects;
                if ('string' == typeof e) {
                    for (
                        h[(n = { id: this.uid++, selector: e, data: t }).id] = n, c = R(this.indexes, e), o = 0;
                        o < c.length;
                        o++
                    )
                        ((r = (l = c[o]).key),
                            (s = P(d, (i = l.index))) || (((s = Object.create(i)).map = new S()), d.push(s)),
                            i === this.indexes.default && this.logDefaultIndexUsed(n),
                            (a = s.map.get(r)) || ((a = []), s.map.set(r, a)),
                            a.push(n));
                    (this.size++, u.push(e));
                }
            }),
            (y.prototype.remove = function (e, t) {
                if ('string' == typeof e) {
                    var n,
                        o,
                        i,
                        r,
                        s,
                        a,
                        c,
                        l,
                        d = this.activeIndexes,
                        u = (this.selectors = []),
                        h = this.selectorObjects,
                        v = {},
                        f = 1 === arguments.length;
                    for (n = R(this.indexes, e), i = 0; i < n.length; i++)
                        for (o = n[i], r = d.length; r--; )
                            if (((a = d[r]), o.index.isPrototypeOf(a))) {
                                if ((c = a.map.get(o.key)))
                                    for (s = c.length; s--; )
                                        (l = c[s]).selector !== e ||
                                            (!f && l.data !== t) ||
                                            (c.splice(s, 1), (v[l.id] = !0));
                                break;
                            }
                    for (i in v) (delete h[i], this.size--);
                    for (i in h) u.push(h[i].selector);
                }
            }),
            (y.prototype.queryAll = function (e) {
                if (!this.selectors.length) return [];
                var t,
                    n,
                    o,
                    i,
                    r,
                    s,
                    a,
                    c,
                    l = {},
                    d = [],
                    u = this.querySelectorAll(this.selectors.join(', '), e);
                for (t = 0, o = u.length; t < o; t++)
                    for (r = u[t], n = 0, i = (s = this.matches(r)).length; n < i; n++)
                        (l[(c = s[n]).id]
                            ? (a = l[c.id])
                            : ((a = { id: c.id, selector: c.selector, data: c.data, elements: [] }),
                              (l[c.id] = a),
                              d.push(a)),
                            a.elements.push(r));
                return d.sort(L);
            }),
            (y.prototype.matches = function (e) {
                if (!e) return [];
                var t,
                    n,
                    o,
                    i,
                    r,
                    s,
                    a,
                    c,
                    l,
                    d,
                    u,
                    h = this.activeIndexes,
                    v = {},
                    f = [];
                for (t = 0, i = h.length; t < i; t++)
                    if ((c = (a = h[t]).element(e)))
                        for (n = 0, r = c.length; n < r; n++)
                            if ((l = a.map.get(c[n])))
                                for (o = 0, s = l.length; o < s; o++)
                                    !v[(u = (d = l[o]).id)] &&
                                        this.matchesSelector(e, d.selector) &&
                                        ((v[u] = !0), f.push(d));
                return f.sort(L);
            }));
        var A = null,
            k = null,
            I = [];
        function D(e, t) {
            var n = [];
            function o() {
                var e = n;
                ((n = []), t(e));
            }
            return function () {
                for (var t = arguments.length, i = Array(t), r = 0; r < t; r++) i[r] = arguments[r];
                (n.push(i), 1 === n.length && N(e, o));
            };
        }
        function N(e, t) {
            (k || (k = new MutationObserver(F)),
                A || ((A = e.createElement('div')), k.observe(A, { attributes: !0 })),
                I.push(t),
                A.setAttribute('data-twiddle', '' + Date.now()));
        }
        function F() {
            var e = I;
            I = [];
            for (var t = 0; t < e.length; t++)
                try {
                    e[t]();
                } catch (e) {
                    setTimeout(function () {
                        throw e;
                    }, 0);
                }
        }
        var U = new WeakMap(),
            z = new WeakMap(),
            V = new WeakMap(),
            j = new WeakMap();
        function B(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n],
                    i = o[0],
                    r = o[1],
                    s = o[2];
                i === X ? (W(s, r), q(s, r)) : i === $ ? G(s, r) : i === Z && K(e.observers, r);
            }
        }
        function W(e, t) {
            if (t instanceof e.elementConstructor) {
                var n = U.get(t);
                if ((n || ((n = []), U.set(t, n)), -1 === n.indexOf(e.id))) {
                    var o = void 0;
                    if ((e.initialize && (o = e.initialize.call(void 0, t)), o)) {
                        var i = z.get(t);
                        (i || ((i = {}), z.set(t, i)), (i['' + e.id] = o));
                    }
                    n.push(e.id);
                }
            }
        }
        function q(e, t) {
            if (t instanceof e.elementConstructor) {
                var n = j.get(t);
                if ((n || ((n = []), j.set(t, n)), -1 === n.indexOf(e.id))) {
                    e.elements.push(t);
                    var o = z.get(t),
                        i = o ? o['' + e.id] : null;
                    if ((i && i.add && i.add.call(void 0, t), e.subscribe)) {
                        var r = e.subscribe.call(void 0, t);
                        if (r) {
                            var s = V.get(t);
                            (s || ((s = {}), V.set(t, s)), (s['' + e.id] = r));
                        }
                    }
                    (e.add && e.add.call(void 0, t), n.push(e.id));
                }
            }
        }
        function G(e, t) {
            if (t instanceof e.elementConstructor) {
                var n = j.get(t);
                if (n) {
                    var o = e.elements.indexOf(t);
                    if ((-1 !== o && e.elements.splice(o, 1), -1 !== (o = n.indexOf(e.id)))) {
                        var i = z.get(t),
                            r = i ? i['' + e.id] : null;
                        if ((r && r.remove && r.remove.call(void 0, t), e.subscribe)) {
                            var s = V.get(t),
                                a = s ? s['' + e.id] : null;
                            a && a.unsubscribe && a.unsubscribe();
                        }
                        (e.remove && e.remove.call(void 0, t), n.splice(o, 1));
                    }
                    0 === n.length && j.delete(t);
                }
            }
        }
        function K(e, t) {
            var n = j.get(t);
            if (n) {
                for (var o = n.slice(0), i = 0; i < o.length; i++) {
                    var r = e[o[i]];
                    if (r) {
                        var s = r.elements.indexOf(t);
                        -1 !== s && r.elements.splice(s, 1);
                        var a = z.get(t),
                            c = a ? a['' + r.id] : null;
                        c && c.remove && c.remove.call(void 0, t);
                        var l = V.get(t),
                            d = l ? l['' + r.id] : null;
                        (d && d.unsubscribe && d.unsubscribe(), r.remove && r.remove.call(void 0, t));
                    }
                }
                j.delete(t);
            }
        }
        var H = null;
        function Y(e) {
            return (
                'matches' in e ||
                'webkitMatchesSelector' in e ||
                'mozMatchesSelector' in e ||
                'oMatchesSelector' in e ||
                'msMatchesSelector' in e
            );
        }
        var X = 1,
            $ = 2,
            Z = 3;
        function Q(e, t, n) {
            for (var o = 0; o < n.length; o++) {
                var i = n[o];
                if (Y(i))
                    for (var r = e.selectorSet.matches(i), s = 0; s < r.length; s++) {
                        var a = r[s].data;
                        t.push([X, i, a]);
                    }
                if ('querySelectorAll' in i)
                    for (var c = e.selectorSet.queryAll(i), l = 0; l < c.length; l++)
                        for (var d = c[l], u = d.data, h = d.elements, v = 0; v < h.length; v++) t.push([X, h[v], u]);
            }
        }
        function J(e, t, n) {
            for (var o = 0; o < n.length; o++) {
                var i = n[o];
                if ('querySelectorAll' in i) {
                    t.push([Z, i]);
                    for (var r = i.querySelectorAll('*'), s = 0; s < r.length; s++) t.push([Z, r[s]]);
                }
            }
        }
        function ee(e, t, n) {
            if (Y(n))
                for (var o = e.selectorSet.matches(n), i = 0; i < o.length; i++) {
                    var r = o[i].data;
                    t.push([X, n, r]);
                }
            if ('querySelectorAll' in n) {
                var s = j.get(n);
                if (s)
                    for (var a = 0; a < s.length; a++) {
                        var c = e.observers[s[a]];
                        c && (e.selectorSet.matchesSelector(n, c.selector) || t.push([$, n, c]));
                    }
            }
        }
        var te =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e;
                      },
            ne = 0;
        function oe(e) {
            ((this.rootNode = 9 === e.nodeType ? e.documentElement : e),
                (this.ownerDocument = 9 === e.nodeType ? e : e.ownerDocument),
                (this.observers = []),
                (this.selectorSet = new y()),
                (this.mutationObserver = new MutationObserver(se.bind(this, this))),
                (this._scheduleAddRootNodes = D(this.ownerDocument, re.bind(this, this))),
                (this._handleThrottledChangedTargets = D(this.ownerDocument, ce.bind(this, this))),
                this.rootNode.addEventListener('change', ae.bind(this, this), !1),
                (function (e, t) {
                    var n = e.readyState;
                    'interactive' === n || 'complete' === n ? N(e, t) : e.addEventListener('DOMContentLoaded', N(e, t));
                })(this.ownerDocument, ie.bind(this, this)));
        }
        function ie(e) {
            (e.mutationObserver.observe(e.rootNode, { childList: !0, attributes: !0, subtree: !0 }),
                e._scheduleAddRootNodes());
        }
        function re(e) {
            var t = [];
            (Q(e, t, [e.rootNode]), B(e, t));
        }
        function se(e, t) {
            var n = [];
            ((function (e, t, n) {
                for (var o = 0; o < n.length; o++) {
                    var i = n[o];
                    'childList' === i.type
                        ? (Q(e, t, i.addedNodes || []), J(0, t, i.removedNodes || []))
                        : 'attributes' === i.type && ee(e, t, i.target);
                }
                (function (e) {
                    if (null === H) {
                        var t = e.createElement('div'),
                            n = e.createElement('div'),
                            o = e.createElement('div');
                        (t.appendChild(n), n.appendChild(o), (t.innerHTML = ''), (H = o.parentNode !== n));
                    }
                    return H;
                })(e.ownerDocument) &&
                    (function (e, t) {
                        for (var n = 0; n < e.observers.length; n++) {
                            var o = e.observers[n];
                            if (o)
                                for (var i = o.elements, r = 0; r < i.length; r++) {
                                    var s = i[r];
                                    s.parentNode || t.push([Z, s]);
                                }
                        }
                    })(e, t);
            })(e, n, t),
                B(e, n));
        }
        function ae(e, t) {
            e._handleThrottledChangedTargets(t.target);
        }
        function ce(e, t) {
            var n = [];
            (!(function (e, t, n) {
                for (var o = 0; o < n.length; o++)
                    for (
                        var i = n[o], r = i.form ? i.form.elements : e.rootNode.querySelectorAll('input'), s = 0;
                        s < r.length;
                        s++
                    )
                        ee(e, t, r[s]);
            })(e, n, t),
                B(e, n));
        }
        ((oe.prototype.disconnect = function () {
            this.mutationObserver.disconnect();
        }),
            (oe.prototype.observe = function (e, t) {
                var n = void 0;
                'function' == typeof t
                    ? (n = { selector: e, initialize: t })
                    : 'object' === (void 0 === t ? 'undefined' : te(t))
                      ? ((n = t).selector = e)
                      : (n = e);
                var o = this,
                    i = {
                        id: ne++,
                        selector: n.selector,
                        initialize: n.initialize,
                        add: n.add,
                        remove: n.remove,
                        subscribe: n.subscribe,
                        elements: [],
                        elementConstructor: n.hasOwnProperty('constructor')
                            ? n.constructor
                            : this.ownerDocument.defaultView.Element,
                        abort: function () {
                            o._abortObserving(i);
                        },
                    };
                return (
                    this.selectorSet.add(i.selector, i),
                    (this.observers[i.id] = i),
                    this._scheduleAddRootNodes(),
                    i
                );
            }),
            (oe.prototype._abortObserving = function (e) {
                for (var t = e.elements, n = 0; n < t.length; n++) G(e, t[n]);
                (this.selectorSet.remove(e.selector, e), delete this.observers[e.id]);
            }),
            (oe.prototype.triggerObservers = function (e) {
                var t = [];
                (!(function (e, t, n) {
                    if ('querySelectorAll' in n) {
                        ee(e, t, n);
                        for (var o = n.querySelectorAll('*'), i = 0; i < o.length; i++) ee(e, t, o[i]);
                    }
                })(this, t, e),
                    B(this, t));
            }));
        var le = void 0;
        function de() {
            return (le || (le = new oe(window.document)), le);
        }
        var ue,
            he = __webpack_require__(757),
            ve = __webpack_require__(461);
        function fe(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
            return o;
        }
        function pe(e, t, n, o, i, r, s) {
            try {
                var a = e[r](s),
                    c = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(c) : Promise.resolve(c).then(o, i);
        }
        function _e(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise(function (o, i) {
                    var r = e.apply(t, n);
                    function s(e) {
                        pe(r, o, i, s, a, 'next', e);
                    }
                    function a(e) {
                        pe(r, o, i, s, a, 'throw', e);
                    }
                    s(void 0);
                });
            };
        }
        (he.O.client.events.mouse.disable(),
            (function (e) {
                e['nth-child'] = 'nth-child';
            })(ue || (ue = {})));
        const me = new Map(),
            we = (e) => {
                if ('HTML' === e.nodeName) return { element: e, native: !0 };
                const t = e.parentNode;
                if (t && t instanceof HTMLElement) {
                    if (t.className.includes('ScrollArea_base')) return { element: t, native: !1 };
                    const e = getComputedStyle(t).overflow;
                    return 'scroll' === e || 'auto' === e ? { element: t, native: !0 } : we(t);
                }
            },
            be = (function () {
                var e = _e(function* ({ scrollableContainer: e, element: t, componentId: n, viewId: o }) {
                    yield (0, ve.Eu)();
                    const i = t.getBoundingClientRect(),
                        r = ((e, t) => {
                            const n = e.top - t.top <= t.height && e.top + e.height - t.top >= 0,
                                o = e.left - t.left <= t.width && e.left + e.width - t.left >= 0;
                            return n && o;
                        })(i, e.element.getBoundingClientRect());
                    if (r) {
                        const e = window.tutorialModel.foundComponents.items.filter(
                            (e) => Boolean(e) && e.value.componentId === n,
                        )[0];
                        if (e) {
                            const t = e.value;
                            ((t.rect.x = i.x),
                                (t.rect.y = i.y),
                                (t.rect.width = i.width),
                                (t.rect.height = i.height),
                                window.tutorialModel.onComponentUpdate({ componentId: n, viewId: o }));
                        }
                    }
                });
                return function (t) {
                    return e.apply(this, arguments);
                };
            })(),
            ge = (e) => {
                const t = window.tutorialModel.descriptions.views.filter((t) => t.value.viewId === e)[0];
                if (t) {
                    const n = t.value.components;
                    (window.addEventListener('resize', () => {
                        me.forEach(({ element: t, scrollableContainer: n }, o) => {
                            be({ scrollableContainer: n, element: t, componentId: o, viewId: e });
                        });
                    }),
                        n.length &&
                            n.forEach(({ value: { path: e, componentId: t, viewId: n } }) => {
                                if (!e) return;
                                let o = -1;
                                const i = e.split(':'),
                                    r = i[0],
                                    s = i.slice(1).reduce((e, t) => {
                                        const n = t.split(/\(([^)]+)\)/),
                                            o = n[0],
                                            i = n[1],
                                            r = parseInt(i);
                                        return ((e[o] = isNaN(r) ? i : r), e);
                                    }, {}),
                                    a = new g((e) => {
                                        const o = window.tutorialModel.foundComponents.items.filter(
                                            (e) => Boolean(e) && e.value.componentId === t,
                                        )[0];
                                        if (o) {
                                            const s = o.value;
                                            for (
                                                var i,
                                                    r = (function (e, t) {
                                                        var n =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (n) return (n = n.call(e)).next.bind(n);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (n = (function (e, t) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return fe(e, t);
                                                                    var n = Object.prototype.toString
                                                                        .call(e)
                                                                        .slice(8, -1);
                                                                    return (
                                                                        'Object' === n &&
                                                                            e.constructor &&
                                                                            (n = e.constructor.name),
                                                                        'Map' === n || 'Set' === n
                                                                            ? Array.from(e)
                                                                            : 'Arguments' === n ||
                                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                    n,
                                                                                )
                                                                              ? fe(e, t)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (t && e && 'number' == typeof e.length)
                                                        ) {
                                                            n && (e = n);
                                                            var o = 0;
                                                            return function () {
                                                                return o >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[o++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(e);
                                                !(i = r()).done;
                                            ) {
                                                const e = i.value.contentRect,
                                                    o = e.width,
                                                    r = e.height;
                                                ((s.rect.width = o),
                                                    (s.rect.height = r),
                                                    window.tutorialModel.onComponentUpdate({
                                                        componentId: t,
                                                        viewId: n,
                                                    }));
                                            }
                                        }
                                    });
                                !(function () {
                                    var e;
                                    (e = de()).observe.apply(e, arguments);
                                })(r, {
                                    initialize(e) {
                                        if (s[ue['nth-child']] > 0 && (o++, o !== s[ue['nth-child']])) return;
                                        const i = we(e),
                                            r = (function () {
                                                var o = _e(function* () {
                                                    be({
                                                        scrollableContainer: i,
                                                        element: e,
                                                        componentId: t,
                                                        viewId: n,
                                                    });
                                                });
                                                return function () {
                                                    return o.apply(this, arguments);
                                                };
                                            })();
                                        let c;
                                        return {
                                            add: () =>
                                                _e(function* () {
                                                    (me.set(t, { element: e, scrollableContainer: i }),
                                                        yield (0, ve.Eu)(),
                                                        yield (0, ve.Eu)(),
                                                        i &&
                                                            (i.native
                                                                ? i.element.addEventListener('scroll', r)
                                                                : (i.element.addEventListener('ps-scroll-x', r),
                                                                  i.element.addEventListener('ps-scroll-y', r))),
                                                        a.observe(e));
                                                    const o = e.getBoundingClientRect();
                                                    let s = o.x,
                                                        l = o.y;
                                                    (window.tutorialModel.onComponentFound({
                                                        componentId: t,
                                                        viewId: n,
                                                        x: s,
                                                        y: l,
                                                        width: o.width,
                                                        height: o.height,
                                                    }),
                                                        (c = window.setInterval(() => {
                                                            if (
                                                                (() => {
                                                                    const t = e.getBoundingClientRect(),
                                                                        n = t.x !== s || l !== t.y;
                                                                    return ((s = t.x), (l = t.y), n);
                                                                })()
                                                            ) {
                                                                const e =
                                                                    window.tutorialModel.foundComponents.items.filter(
                                                                        (e) => Boolean(e) && e.value.componentId === t,
                                                                    );
                                                                if (e.length > 0) {
                                                                    const o = e[0].value;
                                                                    ((o.rect.x = s),
                                                                        (o.rect.y = l),
                                                                        window.tutorialModel.onComponentUpdate({
                                                                            componentId: t,
                                                                            viewId: n,
                                                                        }));
                                                                }
                                                            } else clearInterval(c);
                                                        }, 100)));
                                                })(),
                                            remove() {
                                                (clearInterval(c),
                                                    me.delete(t),
                                                    (o = -1),
                                                    i &&
                                                        (i.native
                                                            ? i.element.removeEventListener('scroll', r)
                                                            : (i.element.removeEventListener('ps-scroll-x', r),
                                                              i.element.removeEventListener('ps-scroll-y', r))),
                                                    a.disconnect(),
                                                    window.tutorialModel.foundComponents &&
                                                        window.tutorialModel.foundComponents.items.some(
                                                            (e) => e.value.componentId === t,
                                                        ) &&
                                                        window.tutorialModel.onComponentDisposed({
                                                            componentId: t,
                                                            viewId: n,
                                                        }));
                                            },
                                        };
                                    },
                                });
                            }));
                }
                return {
                    updateComponents: () => {
                        me.forEach(({ element: t, scrollableContainer: n }, o) => {
                            be({ scrollableContainer: n, element: t, componentId: o, viewId: e });
                        });
                    },
                };
            };
        he.O.view.events.onDomBuilt(() => {
            const e = ge(window.__featureId.toString());
            window.tutorialApi = e;
        });
    })();
})();
