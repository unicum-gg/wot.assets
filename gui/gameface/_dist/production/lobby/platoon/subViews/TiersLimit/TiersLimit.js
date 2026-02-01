(() => {
    'use strict';
    var __webpack_modules__ = {
            70: (e, t, n) => {
                n.d(t, { O: () => ce });
                var o = {};
                (n.r(o),
                    n.d(o, { mouse: () => w, off: () => _, on: () => u, onResize: () => l, onScaleUpdated: () => d }));
                var r = {};
                (n.r(r),
                    n.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => b,
                        getSize: () => h,
                        graphicsQuality: () => g,
                        playSound: () => v,
                        setRTPC: () => p,
                    }));
                var i = {};
                (n.r(i), n.d(i, { getBgUrl: () => T, getTextureUrl: () => k }));
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
                        addModelObserver: () => j,
                        addPreloadTexture: () => B,
                        arabic2roman: () => te,
                        children: () => i,
                        displayStatus: () => P,
                        displayStatusIs: () => oe,
                        enableFullScreenModeSupported: () => se,
                        events: () => S,
                        extraSize: () => re,
                        forceTriggerMouseMove: () => Q,
                        freezeTextureBeforeResize: () => G,
                        getBrowserTexturePath: () => A,
                        getDisplayStatus: () => J,
                        getExternalPaddingsRem: () => ne,
                        getFontNames: () => ee,
                        getScale: () => z,
                        getSize: () => U,
                        getViewGlobalPosition: () => $,
                        initExternalPaddings: () => ae,
                        isEventHandled: () => Z,
                        isFocused: () => Y,
                        pxToRem: () => W,
                        remToPx: () => q,
                        resize: () => H,
                        sendEvent: () => D,
                        setAnimateWindow: () => K,
                        setEventHandled: () => X,
                        setInputPaddingsRem: () => V,
                        setSidePaddingsRem: () => F,
                        whenTutorialReady: () => ie,
                    }));
                const l = a('clientResized'),
                    d = a('self.onScaleUpdated'),
                    u = (e, t) => engine.on(e, t),
                    _ = (e, t) => engine.off(e, t),
                    m = { down: a('mousedown'), up: a('mouseup'), move: a('mousemove') };
                const w = (function () {
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
                    const r = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${t}`,
                                        s = m[t]((e) => n([e, 'outside']));
                                    function a(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, a),
                                        o(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(i, a),
                                                (e.listeners -= 1),
                                                o(),
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
                function v(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function p(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function h(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const g = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    f = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    E = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    y = Object.keys(E).reduce((e, t) => ((e[t] = () => v(E[t])), e), {}),
                    O = { play: Object.assign({}, y, { sound: v }), setRTPC: p };
                var C = n(690);
                function k(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function T(e, t, n) {
                    return `url(${k(e, t, n)})`;
                }
                const P = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    S = {
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
                    R = ['args'];
                const M = 2,
                    L = 16,
                    x = 32,
                    N = 64,
                    I = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        r = {},
                                        i = Object.keys(e);
                                    for (o = 0; o < i.length; o++) ((n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, R);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((o = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    D = {
                        close(e) {
                            I('popover' === e ? M : x);
                        },
                        minimize() {
                            I(N);
                        },
                        move(e) {
                            I(L, { isMouseEvent: !0, on: e });
                        },
                    };
                function B(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function V(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function A(e, t, n, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, o);
                }
                function j(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function F(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function U(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function H(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function $(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: q(t.x), y: q(t.y) };
                }
                function G() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function z() {
                    return viewEnv.getScale();
                }
                function W(e) {
                    return viewEnv.pxToRem(e);
                }
                function q(e) {
                    return viewEnv.remToPx(e);
                }
                function K(e, t) {
                    viewEnv.setAnimateWindow(e, t);
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
                    te = C.cg;
                function ne() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const oe = Object.keys(P).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === P[t]), e), {}),
                    re = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ie = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : S.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function se() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function ae(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            n = t.top,
                            o = t.right,
                            r = t.bottom,
                            i = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${o}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
                const ce = { view: s, client: r, sound: O, intl: f };
            },
            521: (e, t, n) => {
                let o, r;
                (n.d(t, { n: () => o }),
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
                    })(o || (o = {})),
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
            690: (e, t, n) => {
                n.d(t, { cg: () => i });
                const o = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function i(e) {
                    let t = '';
                    for (let n = r.length - 1; n >= 0; n--) for (; e >= r[n]; ) ((t += o[n]), (e -= r[n]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            358: (e, t, n) => {
                n.d(t, { Z: () => i });
                var o = n(70);
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
                        const i = o.O.view.addModelObserver(e, n, r);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(i) : (this._views[n] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
                r.__instance = void 0;
                const i = r;
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
                n.d(t, { Sw: () => i.Z, B0: () => a, wU: () => O, ry: () => h, Eu: () => b, SW: () => E, P3: () => y });
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
                const r = o;
                var i = n(358);
                var s = n(613);
                let a;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(a || (a = {}));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(521),
                    m = n(70);
                const w = ['args'];
                function v(e, t, n, o, r, i, s) {
                    try {
                        var a = e[i](s),
                            c = a.value;
                    } catch (e) {
                        return void n(e);
                    }
                    a.done ? t(c) : Promise.resolve(c).then(o, r);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    h = (function () {
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
                                    return new Promise(function (o, r) {
                                        var i = e.apply(t, n);
                                        function s(e) {
                                            v(i, o, r, s, a, 'next', e);
                                        }
                                        function a(e) {
                                            v(i, o, r, s, a, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    b = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    g = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        r = {},
                                        i = Object.keys(e);
                                    for (o = 0; o < i.length; o++) ((n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, w);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((o = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    f = () => g(a.CLOSE),
                    E = () => g(a.POP_OVER, { on: !1 }),
                    y = (e, t, n, o, r = R.invalid('resId'), i) => {
                        const s = m.O.view.getViewGlobalPosition(),
                            c = n.getBoundingClientRect(),
                            l = c.x,
                            d = c.y,
                            u = c.width,
                            _ = c.height,
                            w = {
                                x: m.O.view.pxToRem(l) + s.x,
                                y: m.O.view.pxToRem(d) + s.y,
                                width: m.O.view.pxToRem(u),
                                height: m.O.view.pxToRem(_),
                            };
                        g(a.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: o || R.invalid('resId'),
                            targetID: r,
                            direction: t,
                            bbox: p(w),
                            on: !0,
                            args: i,
                        });
                    },
                    O = () => viewEnv.isWindowShownByViewEvent(a.POP_OVER),
                    C = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var k = n(572);
                const T = r.instance,
                    P = {
                        DataTracker: i.Z,
                        ViewModel: k.Z,
                        ViewEventType: a,
                        NumberFormatType: c,
                        RealFormatType: l,
                        TimeFormatType: d,
                        DateFormatType: u,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => g(a.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: E,
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            g(a.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: y,
                        addEscapeListener: (e) => {
                            const t = (t) => C(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, f);
                        },
                        handleViewEvent: g,
                        onBindingsReady: h,
                        onLayoutReady: b,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(a.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(a.CONTEXT_MENU),
                        isPopOverShown: O,
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const o in t)
                                if (Object.prototype.hasOwnProperty.call(t, o)) {
                                    const r = Object.prototype.toString.call(t[o]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[o];
                                        n[o] = [];
                                        for (let t = 0; t < r.length; t++) n[o].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[o] = e(t[o]))
                                            : (n[o] = t[o]);
                                }
                            return n;
                        },
                        ClickOutsideManager: T,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = P;
            },
            613: (e, t, n) => {
                n.d(t, { Z5: () => o, cy: () => r });
                const o = {
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
            423: (e, t, n) => {
                var o = n(363),
                    r = n.n(o),
                    i = n(533),
                    s = n.n(i),
                    a = n(483),
                    c = n.n(a);
                const l = (e = 1) => {
                        const t = new Error().stack;
                        let n,
                            o = R.invalid('resId'),
                            r = '';
                        var i;
                        t &&
                            ((r = (null == (i = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : i[0]) || ''),
                            (n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== n &&
                                window.subViews[n] &&
                                (o = window.subViews[n].id));
                        return { callerUrl: r, caller: n, stack: t, resId: o };
                    },
                    d = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    u = (e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    };
                var _ = n(916);
                const m = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    w = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    v = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const o = d(`${e}.${n}`, window);
                                return m(o) ? t(e, n, o) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    p = (e) => {
                        const t = ((e) => {
                                const t = l(),
                                    n = t.caller,
                                    o = t.resId,
                                    r = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: r, modelPath: w(r, e || ''), resId: o };
                            })(),
                            n = t.modelPrefix,
                            o = e.split('.');
                        if (o.length > 0) {
                            const e = [o[0]];
                            return (
                                o.reduce((t, o) => {
                                    const r = d(w(n, `${t}.${o}`), window);
                                    return m(r) ? (e.push(r.id), `${t}.${o}.value`) : (e.push(o), `${t}.${o}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    };
                const h = () => (window.injected || (window.injected = new Map()), window.injected);
                const b = _.Sw.instance;
                let g;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(g || (g = {}));
                const f = (e = 'model', t = g.Deep) => {
                        const n = (0, o.useState)(0),
                            r = (n[0], n[1]),
                            i = (0, o.useMemo)(() => l(), []),
                            s = i.callerUrl,
                            a = i.caller,
                            c = i.resId,
                            _ = (0, o.useMemo)(() => {
                                const t = (function (e) {
                                    return h().has(e);
                                })(s.replace('.js', '.html'));
                                return window.__feature && window.__feature !== a && !t ? `subViews.${a}.${e}` : e;
                            }, [s, a, e]),
                            w = (0, o.useState)(() =>
                                ((e) => {
                                    const t = d(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return m(t) ? t.value : t;
                                })(v(_)),
                            ),
                            f = w[0],
                            E = w[1],
                            y = (0, o.useRef)(-1);
                        return (
                            u(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? g.Deep : g.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== g.None)
                                ) {
                                    const n = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === g.Deep
                                                ? (e === f && r((e) => e + 1), E(e))
                                                : E(Object.assign([], e));
                                        },
                                        o = p(e);
                                    y.current = b.addCallback(o, n, c, t === g.Deep);
                                }
                            }),
                            (0, o.useEffect)(() => {
                                if (t !== g.None)
                                    return () => {
                                        b.removeCallback(y.current, c);
                                    };
                            }, [c, t]),
                            f
                        );
                    },
                    E = [
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
                function y(e) {
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
                const O = (e, t, n = {}, o = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: _.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: o,
                                },
                                n,
                            ),
                        );
                    },
                    C = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            r = e.args,
                            i = e.onMouseEnter,
                            s = e.onMouseLeave,
                            a = e.onMouseDown,
                            c = e.onClick,
                            d = e.ignoreShowDelay,
                            u = void 0 !== d && d,
                            _ = e.ignoreMouseClick,
                            m = void 0 !== _ && _,
                            w = e.decoratorId,
                            v = void 0 === w ? 0 : w,
                            p = e.isEnabled,
                            h = void 0 === p || p,
                            b = e.targetId,
                            g = void 0 === b ? 0 : b,
                            f = e.onShow,
                            C = e.onHide,
                            k = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) ((n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, E);
                        const T = (0, o.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            P = (0, o.useMemo)(() => g || l().resId, [g]),
                            S = (0, o.useCallback)(() => {
                                (T.current.isVisible && T.current.timeoutId) ||
                                    (O(n, v, { isMouseEvent: !0, on: !0, arguments: y(r) }, P),
                                    f && f(),
                                    (T.current.isVisible = !0));
                            }, [n, v, r, P, f]),
                            R = (0, o.useCallback)(() => {
                                if (T.current.isVisible || T.current.timeoutId) {
                                    const e = T.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (T.current.timeoutId = 0)),
                                        O(n, v, { on: !1 }, P),
                                        T.current.isVisible && C && C(),
                                        (T.current.isVisible = !1));
                                }
                            }, [n, v, P, C]),
                            M = (0, o.useCallback)((e) => {
                                T.current.isVisible &&
                                    ((T.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (T.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(T.current.prevTarget) && R();
                                    }, 200)));
                            }, []);
                        ((0, o.useEffect)(() => {
                            const e = T.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', M, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', M, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, o.useEffect)(() => {
                                !1 === h && R();
                            }, [h, R]),
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', R),
                                    () => {
                                        (window.removeEventListener('mouseleave', R), R());
                                    }
                                ),
                                [R],
                            ));
                        return h
                            ? (0, o.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((L = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(T.current.timeoutId),
                                                      (T.current.timeoutId = window.setTimeout(S, u ? 100 : 400)),
                                                      i && i(e),
                                                      L && L(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (R(), null == s || s(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === m && R(), null == c || c(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === m && R(), null == a || a(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      k,
                                  ),
                              )
                            : t;
                        var L;
                    };
                let k, T;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(k || (k = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(T || (T = {})));
                function P(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const S = {
                        playHighlight() {
                            P('highlight');
                        },
                        playClick() {
                            P('play');
                        },
                        playYes() {
                            P('yes1');
                        },
                    },
                    M = {
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
                    },
                    L = ({
                        children: e,
                        size: t,
                        disabled: n,
                        mixClass: i,
                        onMouseEnter: s,
                        onMouseMove: a,
                        onMouseDown: l,
                        onMouseUp: d,
                        onMouseLeave: u,
                        onClick: _,
                        isFocused: m = !1,
                        type: w = k.primary,
                        soundHover: v = 'highlight',
                        soundClick: p = 'play',
                    }) => {
                        const h = (0, o.useRef)(null),
                            b = (0, o.useState)(m),
                            g = b[0],
                            f = b[1],
                            E = (0, o.useState)(!1),
                            y = E[0],
                            O = E[1];
                        return (
                            (0, o.useEffect)(() => {
                                function e(e) {
                                    g && null !== h.current && !h.current.contains(e.target) && f(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', e),
                                    () => {
                                        document.removeEventListener('mousedown', e);
                                    }
                                );
                            }, [g]),
                            (0, o.useEffect)(() => {
                                f(m);
                            }, [m]),
                            r().createElement(
                                'div',
                                {
                                    ref: h,
                                    className: c()(
                                        M.base,
                                        M[`base__${w}`],
                                        n && M.base__disabled,
                                        t && M[`base__${t}`],
                                        g && M.base__focus,
                                        y && M.base__highlightActive,
                                        i,
                                    ),
                                    onMouseEnter: function (e) {
                                        n || (null !== v && P(v), s && s(e));
                                    },
                                    onMouseMove: function (e) {
                                        a && a(e);
                                    },
                                    onMouseUp: function (e) {
                                        n || (d && d(e), O(!1));
                                    },
                                    onMouseDown: function (e) {
                                        n ||
                                            (null !== p && P(p),
                                            l && l(e),
                                            m && (n || (h.current && (h.current.focus(), f(!0)))),
                                            O(!0));
                                    },
                                    onMouseLeave: function (e) {
                                        n || (u && u(e), O(!1));
                                    },
                                    onClick: function (e) {
                                        n || (_ && _(e));
                                    },
                                },
                                w !== k.ghost &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: M.back }),
                                        r().createElement('span', { className: M.texture }),
                                    ),
                                r().createElement(
                                    'span',
                                    { className: c()(M.state, M.state__default) },
                                    r().createElement('span', { className: M.stateDisabled }),
                                    r().createElement('span', { className: M.stateHighlightHover }),
                                    r().createElement('span', { className: M.stateHighlightActive }),
                                ),
                                r().createElement(
                                    'span',
                                    { className: M.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    e,
                                ),
                            )
                        );
                    },
                    x = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function N() {
                    return (
                        (N =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        N.apply(this, arguments)
                    );
                }
                const I = R.views.common.tooltip_window.simple_tooltip_content,
                    D = (e) => {
                        let t = e.children,
                            n = e.body,
                            i = e.header,
                            s = e.note,
                            a = e.alert,
                            c = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) ((n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, x);
                        const d = (0, o.useMemo)(() => {
                            const e = Object.assign({}, c, { body: n, header: i, note: s, alert: a });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [a, n, i, s, c]);
                        return r().createElement(
                            C,
                            N(
                                {
                                    contentId:
                                        ((u = null == c ? void 0 : c.hasHtmlContent),
                                        u ? I.SimpleTooltipHtmlContent('resId') : I.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: d,
                                },
                                l,
                            ),
                            t,
                        );
                        var u;
                    };
                function B() {
                    return (
                        (B =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        B.apply(this, arguments)
                    );
                }
                const V = (0, o.memo)(
                        ({
                            caption: e,
                            isEnabled: t,
                            description: n,
                            children: i,
                            cButtonProps: s,
                            onClick: a,
                            className: c,
                        }) => {
                            const l = (0, o.useCallback)(() => a(), [a]);
                            return r().createElement(
                                D,
                                { isEnabled: !0, header: e, body: n },
                                r().createElement(
                                    'div',
                                    { className: c },
                                    r().createElement(
                                        L,
                                        B({ type: k.primary, size: T.small, onClick: l, disabled: !t }, s),
                                        i || e,
                                    ),
                                ),
                            );
                        },
                    ),
                    A = /<link.*?>/g,
                    j = /\.\.\//g,
                    F = /<script.*?>/g,
                    U = 'default.css',
                    H = (e) => {
                        const t = e.match(j);
                        return t && t.join('');
                    },
                    $ = () => {
                        for (
                            var e = 0, t = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < t.length;
                            e++
                        ) {
                            const n = t[e];
                            if (!n.href.includes(U)) return n.href;
                        }
                        return '';
                    },
                    G = (e) => {
                        const t = $(),
                            n = H(t);
                        let o,
                            r = e;
                        for (; null !== (o = F.exec(e)); ) {
                            const e = o[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const t = n + e[2].replace(j, '');
                                r = r.replace(e[2], t);
                            }
                        }
                        return r;
                    },
                    z = () => {
                        const e = [];
                        let t = !1;
                        const n = () => {
                            if (!e.length) return void (t = !1);
                            const o = e.shift();
                            o && ((t = !0), o().then(() => n()));
                        };
                        return {
                            add: (o) => {
                                (e.push(o), t || n());
                            },
                        };
                    },
                    W = 'SubView_base_df',
                    q = 'subViews.onChanged',
                    K = z(),
                    Y =
                        ((0, o.memo)(({ id: e, fallback: t, onLoadCallback: n, mixClass: i }) => {
                            const s = (0, o.useState)(''),
                                a = s[0],
                                l = s[1],
                                d = (0, o.useMemo)(() => ({ __html: G(a) }), [a]),
                                u = (0, o.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                                m = (0, o.useState)(!1),
                                w = m[0],
                                v = m[1],
                                p = (0, o.useCallback)(
                                    (e) => {
                                        e.includes(u) &&
                                            (v(!0), engine.off(q, p), window.subViews.removeChildChangedCallback(u));
                                    },
                                    [u],
                                ),
                                h = (0, o.useCallback)((e) => {
                                    K.add(
                                        () =>
                                            new Promise((t) => {
                                                l(e);
                                                const n = new MutationObserver(() => {
                                                        (n.disconnect(), t());
                                                    }),
                                                    o = document.getElementById('root');
                                                o && n.observe(o, { childList: !0 });
                                            }),
                                    );
                                }, []);
                            ((0, o.useEffect)(() => {
                                if (window.subViews.ids().includes(e)) {
                                    const t = window.subViews.get(e),
                                        n = t.path;
                                    let o;
                                    if ((o = n.split('/').pop()))
                                        return (
                                            (o = o.split('.')[0]),
                                            (window.subViews[o] = Object.assign({ id: e }, t)),
                                            engine.on(`subView:inject->${o}`, h),
                                            (({ path: e, name: t }) => {
                                                const n = new XMLHttpRequest();
                                                ((n.onreadystatechange = () => {
                                                    4 === n.readyState &&
                                                        (200 === n.status
                                                            ? (0, _.Eu)().then(() => {
                                                                  (console.info(`Sub view ${t} loaded: ${e}`),
                                                                      engine.TriggerEvent(
                                                                          `subView:inject->${t}`,
                                                                          n.responseText,
                                                                      ));
                                                              })
                                                            : console.error(
                                                                  `subView: status: ${n.status} - can't get bundle`,
                                                              ));
                                                }),
                                                    n.open('GET', e),
                                                    n.send());
                                            })({ name: o, path: n }),
                                            () => {
                                                (o && window.subViews[o] && delete window.subViews[o],
                                                    engine.trigger('subView:destroy', { viewName: o, viewId: e }),
                                                    window.__dataTracker &&
                                                        window.__dataTracker.clearViewCallbacks &&
                                                        window.__dataTracker.clearViewCallbacks(e),
                                                    engine.off(`subView:inject->${o}`, h),
                                                    console.info(`Sub view ${o} is destroyed: ${n}`));
                                            }
                                        );
                                    console.error("subView: can't get View component name");
                                } else engine.on(q, p);
                            }, [p, h, e, w]),
                                (0, o.useEffect)(
                                    () => () => {
                                        a &&
                                            ((e) => {
                                                const t = H($());
                                                let n;
                                                for (; null !== (n = A.exec(e)); ) {
                                                    const e = n[0].match(/href="(.*?)"/);
                                                    if (e) {
                                                        const n = t + e[1].replace(j, ''),
                                                            o = document.head.querySelector(`[href="${n}"]`);
                                                        o && document.head.removeChild(o);
                                                    }
                                                }
                                            })(a);
                                    },
                                    [a],
                                ));
                            const b = c()(W, i);
                            if (a) {
                                let t;
                                return (
                                    (t = document.getElementById('root')) && t.setAttribute('id', 'bugSubView'),
                                    ((e) => {
                                        let t;
                                        const n = $(),
                                            o = H(n);
                                        for (; null !== (t = A.exec(e)); ) {
                                            const e = t[0].match(/href="(.*?)"/);
                                            if (e && !e[1].includes(U) && o) {
                                                const t = o + e[1].replace(j, ''),
                                                    n = document.createElement('link');
                                                ((n.href = t), (n.rel = 'stylesheet'), document.head.appendChild(n));
                                            }
                                        }
                                    })(a),
                                    n && n(e),
                                    r().createElement('div', { className: b, dangerouslySetInnerHTML: d })
                                );
                            }
                            return t ? r().createElement('div', { className: b }, r().createElement(t, null)) : null;
                        }),
                        'subViews.onChanged'),
                    X = '.html',
                    Z = /^coui:\/\/gui\/.*/,
                    Q = z(),
                    J = (e) => {
                        const t = document.createElement('script');
                        ((t.src = e), (t.defer = !0), document.head.appendChild(t));
                    };
                (0, o.memo)(({ id: e, bundleLevelPath: t = 3, mixClass: n, children: i }) => {
                    const s = (0, o.useRef)(null),
                        a = (0, o.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                        l = (0, o.useState)(!1),
                        d = l[0],
                        u = l[1],
                        _ = (0, o.useState)(!0),
                        m = _[0],
                        w = _[1],
                        v = (0, o.useCallback)(
                            (e) => {
                                e.includes(a) &&
                                    (u(!0), engine.off(Y, v), window.subViews.removeChildChangedCallback(a));
                            },
                            [a],
                        ),
                        p = (0, o.useCallback)(
                            (e) => {
                                Q.add(
                                    () =>
                                        new Promise((n) => {
                                            const o = new MutationObserver(() => {
                                                (w(!1), o.disconnect(), n());
                                            });
                                            if (s.current) {
                                                const n = document.getElementById('root');
                                                (n && n.setAttribute('id', 'bugSubView'),
                                                    s.current.setAttribute('id', 'root'));
                                                const r = document.createElement('link');
                                                ((r.href = e.replace(X, '.css')),
                                                    (r.rel = 'stylesheet'),
                                                    document.head.appendChild(r),
                                                    Z.test(e) &&
                                                        J(
                                                            e
                                                                .split('/')
                                                                .slice(0, -t)
                                                                .concat(['vendors.js'])
                                                                .join('/')
                                                                .replace('/production/', '/production/lib/'),
                                                        ),
                                                    J(e.replace(X, '.js')),
                                                    o.observe(s.current, { childList: !0 }));
                                            }
                                        }),
                                );
                            },
                            [t],
                        );
                    return (
                        (0, o.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const t = window.subViews.get(e),
                                    n = t.path;
                                let o = n.split('/').pop();
                                if (o)
                                    return (
                                        (o = o.split('.')[0]),
                                        (window.subViews[o] = Object.assign({ id: e }, t)),
                                        p(n),
                                        () => {
                                            (o && window.subViews[o] && delete window.subViews[o],
                                                engine.trigger('subView:destroy', { viewName: o, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                console.info(`Sub view ${o} is destroyed: ${n}`));
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(Y, v);
                        }, [v, p, e, d]),
                        r().createElement('div', { className: c()(W, n) }, m && i, r().createElement('div', { ref: s }))
                    );
                });
                let ee;
                !(function (e) {
                    ((e.left = 'left'), (e.top = 'top'), (e.right = 'right'), (e.bottom = 'bottom'));
                })(ee || (ee = {}));
                (ee.right, ee.left);
                const te = {
                        base: 'ToggleButton_base_b9',
                        content: 'ToggleButton_content_85',
                        overlay: 'ToggleButton_overlay_0a',
                        base__active: 'ToggleButton_base__active_68',
                        indicator: 'ToggleButton_indicator_85',
                        button: 'ToggleButton_button_4f',
                    },
                    ne = ['active', 'className', 'children', 'size', 'mixClass'];
                function oe() {
                    return (
                        (oe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        oe.apply(this, arguments)
                    );
                }
                (0, o.memo)((e) => {
                    let t = e.active,
                        n = e.className,
                        o = e.children,
                        i = e.size,
                        s = void 0 === i ? T.small : i,
                        a = e.mixClass,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                o,
                                r = {},
                                i = Object.keys(e);
                            for (o = 0; o < i.length; o++) ((n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, ne);
                    const d = c()(te.base, n, t && te.base__active);
                    return r().createElement(
                        'div',
                        { className: d },
                        r().createElement(
                            L,
                            oe({}, l, { type: 'secondary', size: s, mixClass: te[`${a}`] }),
                            r().createElement('span', { className: te.content }, o),
                        ),
                        r().createElement('div', { className: te.overlay }),
                        r().createElement('div', { className: te.indicator }),
                    );
                });
                const re = 'ResetSettingsButton_clearFilterButtonContainer_c9',
                    ie = 'ResetSettingsButton_important_1e',
                    se = 'ResetSettingsButton_clearImage_05';
                function ae() {
                    return (
                        (ae =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        ae.apply(this, arguments)
                    );
                }
                const ce = () => {
                    const e = f('model.btnResetSettings'),
                        t = c()(re, ie),
                        n = (0, o.useMemo)(() => ({ type: k.ghost, mixClass: t }), [t]);
                    return r().createElement(
                        V,
                        ae({}, e, { cButtonProps: n }),
                        r().createElement('div', { className: se }),
                    );
                };
                var le = n(70);
                const de = (e) => {
                        (0, o.useEffect)(e, []);
                    },
                    ue = {
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
                function _e() {
                    const e = (0, o.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, o.useEffect)(() => t, []),
                        (0, o.useMemo)(
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
                }
                var me;
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(me || (me = {}));
                const we = ['__left', '__right', '__top', '__bottom'],
                    ve =
                        ((0, o.forwardRef)(
                            (
                                {
                                    children: e,
                                    disableAutoSizeUpdate: t,
                                    onOutsideClick: n,
                                    className: i,
                                    customStyles: s = {},
                                },
                                a,
                            ) => {
                                const l = (0, o.useRef)(null),
                                    d = (0, o.useRef)(null),
                                    u = (0, o.useRef)(null),
                                    m = (0, o.useState)(window.decorator && window.decorator.directionType),
                                    w = m[0],
                                    v = m[1],
                                    p = (0, o.useCallback)(() => {
                                        (S.playClick(), le.O.view.sendEvent.close());
                                    }, []),
                                    h = (0, o.useCallback)(() => {
                                        S.playHighlight();
                                    }, []),
                                    b = c()(ue.arrow, ue[`arrow${we[w]}`]);
                                de(
                                    () => (
                                        le.O.client.events.mouse.enableOutside(),
                                        le.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (n ? n() : le.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const g = (0, o.useCallback)(
                                        (e) => {
                                            let t = e.target;
                                            do {
                                                if (t === l.current || t === u.current) return;
                                                t = t.parentNode;
                                            } while (t);
                                            const o = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = le.O.client.getMouseGlobalPosition(),
                                                    t = ![o.boundX, o.boundY, o.boundWidth, o.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    n =
                                                        e.x < o.boundX ||
                                                        e.x > o.boundX + o.boundWidth ||
                                                        e.y > o.boundY + o.boundHeight ||
                                                        e.y < o.boundY;
                                                if (t && !n) return;
                                            }
                                            n ? n() : le.O.view.sendEvent.close('popover');
                                        },
                                        [l, u, n],
                                    ),
                                    f = (0, o.useCallback)(() => {
                                        v(window.decorator.directionType);
                                    }, []),
                                    E = _e(),
                                    y = (0, o.useCallback)(() => {
                                        const e = d.current;
                                        if (e)
                                            return (
                                                le.O.view.freezeTextureBeforeResize(),
                                                E.run(() => {
                                                    const t = e.scrollWidth,
                                                        n = e.scrollHeight;
                                                    (le.O.view.resize(t, n), f());
                                                })
                                            );
                                    }, [E, f]);
                                return (
                                    (0, o.useImperativeHandle)(
                                        a,
                                        () => ({ updateSize: y, updateDirection: f, elementRef: d }),
                                        [y, f],
                                    ),
                                    de(() => {
                                        le.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, o.useEffect)(() => {
                                        document.addEventListener('mousedown', g, { capture: !0 });
                                        const e = ((e) => {
                                            let t = !1;
                                            return {
                                                promise: new Promise((n, o) => {
                                                    e.then((e) => !t && n(e)).catch((e) => !t && o(e));
                                                }),
                                                cancel() {
                                                    t = !0;
                                                },
                                            };
                                        })((0, _.Eu)());
                                        return (
                                            !t && e.promise.then(() => y()),
                                            () => {
                                                (e.cancel(), document.removeEventListener('mousedown', g));
                                            }
                                        );
                                    }, [y, g, t]),
                                    r().createElement(
                                        'div',
                                        { className: c()(ue.base, i), ref: d },
                                        r().createElement(
                                            'div',
                                            { className: ue.decorator },
                                            r().createElement(
                                                'div',
                                                { className: ue.content, ref: l },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    r().createElement(
                                                        D,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        r().createElement('div', {
                                                            className: ue.closeBtn,
                                                            onClick: p,
                                                            onMouseEnter: h,
                                                            ref: u,
                                                        }),
                                                    ),
                                            ),
                                            r().createElement('div', { className: b, style: s.arrow }),
                                        ),
                                    )
                                );
                            },
                        ),
                        [
                            'contentId',
                            'decoratorId',
                            'direction',
                            'targetId',
                            'args',
                            'onClick',
                            'children',
                            'isEnabled',
                        ]);
                function pe() {
                    return (
                        (pe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        pe.apply(this, arguments)
                    );
                }
                const he = (e) => {
                        let t = e.contentId,
                            n = e.decoratorId,
                            i = e.direction,
                            s = void 0 === i ? me.Top : i,
                            a = e.targetId,
                            c = e.args,
                            l = e.onClick,
                            d = e.children,
                            u = e.isEnabled,
                            m = void 0 === u || u,
                            w = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) ((n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, ve);
                        const v = (0, o.useRef)(null),
                            p = (0, o.useCallback)(() => {
                                if ((0, _.wU)()) return (0, _.SW)();
                                v.current && (0, _.P3)(t, s, v.current, n, a, c);
                            }, [t, s, c, n, a]);
                        return r().createElement(
                            'div',
                            pe(
                                {
                                    ref: v,
                                    onMouseDown:
                                        ((h = d.props.onClick),
                                        (e) => {
                                            m && (p(), l && l(e), h && h(e));
                                        }),
                                },
                                w,
                            ),
                            d,
                        );
                        var h;
                    },
                    be = 'SettingsButton_settingsButtonContainerSimple_48',
                    ge = 'SettingsButton_settingsButton_03',
                    fe = ['isPressed', 'hasPopover', 'onClick'];
                function Ee() {
                    return (
                        (Ee =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        Ee.apply(this, arguments)
                    );
                }
                const ye = () => {
                        const e = f('model.btnShowSettings'),
                            t = e.isPressed,
                            n = e.hasPopover,
                            i = e.onClick,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) ((n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, fe),
                            a = (0, o.useCallback)(() => i(), [i]),
                            c = (0, o.useMemo)(() => ({ type: t ? k.secondary : k.primary, mixClass: be }), [t]),
                            l = r().createElement(
                                V,
                                Ee({}, s, { onClick: a, cButtonProps: c }),
                                r().createElement('div', { className: ge }),
                            );
                        return n && s.isEnabled
                            ? r().createElement(
                                  he,
                                  { contentId: R.views.lobby.platoon.SettingsPopover('resId'), direction: me.Top },
                                  l,
                              )
                            : l;
                    },
                    Oe = 'TiersLimit_base_3a',
                    Ce = 'TiersLimit_settingsButton_d5',
                    ke = 'TiersLimit_caption_90',
                    Te = 'TiersLimit_tiersChanged_c9',
                    Pe = 'TiersLimit_tiersHighlighted_b6',
                    Se = 'TiersLimit_resetButton_81',
                    Re = 'TiersLimit_dangerIconContainer_19',
                    Me = 'TiersLimit_dangerIcon_ca',
                    Le = () => {
                        const e = f(),
                            t = e.tiers,
                            n = e.isExpanded,
                            o = e.isLight,
                            i = e.hasSettingsButton,
                            s = e.hasLookingForCaption,
                            a = e.hasTiersCaption,
                            l = e.hasResetButton,
                            d = c()(n && Te, o && !n && Pe);
                        return r().createElement(
                            'div',
                            { className: Oe },
                            i && r().createElement('div', { className: Ce }, r().createElement(ye, null)),
                            s && r().createElement('span', { className: ke }, R.strings.platoon.searching.lookingFor()),
                            r().createElement(
                                'span',
                                { className: d },
                                a && `${R.strings.tank_carousel_filter.popover.label.levels()} `,
                                t,
                            ),
                            l && !n && r().createElement('div', { className: Se }, r().createElement(ce, null)),
                            n &&
                                r().createElement(
                                    'div',
                                    { className: Re },
                                    r().createElement(
                                        C,
                                        { contentId: R.views.lobby.platoon.AlertTooltip('resId'), isEnabled: !0 },
                                        r().createElement('div', { className: Me }),
                                    ),
                                ),
                        );
                    };
                engine.whenReady.then(() => {
                    s().render(r().createElement(Le, null), document.getElementById('root'));
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
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](n, n.exports, __webpack_require__), n.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, o) => {
            if (!t) {
                var r = 1 / 0;
                for (c = 0; c < deferred.length; c++) {
                    for (var [t, n, o] = deferred[c], i = !0, s = 0; s < t.length; s++)
                        (!1 & o || r >= o) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((i = !1), o < r && (r = o));
                    if (i) {
                        deferred.splice(c--, 1);
                        var a = n();
                        void 0 !== a && (e = a);
                    }
                }
                return e;
            }
            o = o || 0;
            for (var c = deferred.length; c > 0 && deferred[c - 1][2] > o; c--) deferred[c] = deferred[c - 1];
            deferred[c] = [t, n, o];
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
        (__webpack_require__.j = 840),
        (() => {
            var e = { 840: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        r,
                        [i, s, a] = n,
                        c = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (o in s) __webpack_require__.o(s, o) && (__webpack_require__.m[o] = s[o]);
                        if (a) var l = a(__webpack_require__);
                    }
                    for (t && t(n); c < i.length; c++)
                        ((r = i[c]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [720], () => __webpack_require__(423));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
