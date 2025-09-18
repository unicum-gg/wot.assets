(() => {
    'use strict';
    var __webpack_modules__ = {
            70: (e, t, n) => {
                n.d(t, { O: () => le });
                var o = {};
                (n.r(o),
                    n.d(o, { mouse: () => v, off: () => _, on: () => u, onResize: () => c, onScaleUpdated: () => d }));
                var r = {};
                (n.r(r),
                    n.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => g,
                        getSize: () => p,
                        graphicsQuality: () => h,
                        playSound: () => b,
                        setRTPC: () => w,
                    }));
                var a = {};
                (n.r(a), n.d(a, { getBgUrl: () => P, getTextureUrl: () => O }));
                var i = {};
                function s(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function l(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                (n.r(i),
                    n.d(i, {
                        addModelObserver: () => F,
                        addPreloadTexture: () => B,
                        arabic2roman: () => te,
                        children: () => a,
                        displayStatus: () => T,
                        displayStatusIs: () => oe,
                        enableFullScreenModeSupported: () => ie,
                        events: () => S,
                        extraSize: () => re,
                        forceTriggerMouseMove: () => Q,
                        freezeTextureBeforeResize: () => q,
                        getBrowserTexturePath: () => V,
                        getDisplayStatus: () => J,
                        getExternalPaddingsRem: () => ne,
                        getFontNames: () => ee,
                        getScale: () => G,
                        getSize: () => H,
                        getViewGlobalPosition: () => z,
                        initExternalPaddings: () => se,
                        isEventHandled: () => Z,
                        isFocused: () => $,
                        pxToRem: () => W,
                        remToPx: () => K,
                        resize: () => U,
                        sendEvent: () => A,
                        setAnimateWindow: () => Y,
                        setEventHandled: () => X,
                        setInputPaddingsRem: () => D,
                        setSidePaddingsRem: () => j,
                        whenTutorialReady: () => ae,
                    }));
                const c = s('clientResized'),
                    d = s('self.onScaleUpdated'),
                    u = (e, t) => engine.on(e, t),
                    _ = (e, t) => engine.off(e, t),
                    m = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const v = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && l(!1);
                    }
                    function n() {
                        e.enabled && l(!0);
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
                            : l(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${t}`,
                                        i = m[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        o(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(a, s),
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
                            e.enabled && l(!0);
                        },
                        disableOutside() {
                            e.enabled && l(!1);
                        },
                    });
                })();
                function b(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function w(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function g(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const h = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    f = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    E = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    y = Object.keys(E).reduce((e, t) => ((e[t] = () => b(E[t])), e), {}),
                    C = { play: Object.assign({}, y, { sound: b }), setRTPC: w };
                var k = n(690);
                function O(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function P(e, t, n) {
                    return `url(${O(e, t, n)})`;
                }
                const T = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
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
                    R = ['args'];
                const M = 2,
                    x = 16,
                    N = 32,
                    L = 64,
                    I = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        r = {},
                                        a = Object.keys(e);
                                    for (o = 0; o < a.length; o++) ((n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, R);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    A = {
                        close(e) {
                            I('popover' === e ? M : N);
                        },
                        minimize() {
                            I(L);
                        },
                        move(e) {
                            I(x, { isMouseEvent: !0, on: e });
                        },
                    };
                function B(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function D(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function V(e, t, n, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, o);
                }
                function F(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function j(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function H(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function U(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function z(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: K(t.x), y: K(t.y) };
                }
                function q() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function G() {
                    return viewEnv.getScale();
                }
                function W(e) {
                    return viewEnv.pxToRem(e);
                }
                function K(e) {
                    return viewEnv.remToPx(e);
                }
                function Y(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function $() {
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
                    te = k.cg;
                function ne() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const oe = Object.keys(T).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === T[t]), e), {}),
                    re = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ae = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : S.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function ie() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function se(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            n = t.top,
                            o = t.right,
                            r = t.bottom,
                            a = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${o}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${a}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
                const le = { view: i, client: r, sound: C, intl: f };
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
                n.d(t, { cg: () => a });
                const o = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(e) {
                    let t = '';
                    for (let n = r.length - 1; n >= 0; n--) for (; e >= r[n]; ) ((t += o[n]), (e -= r[n]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            358: (e, t, n) => {
                n.d(t, { Z: () => a });
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
                        const a = o.O.view.addModelObserver(e, n, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(a) : (this._views[n] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
            916: (e, t, n) => {
                n.d(t, { B0: () => s, ry: () => p, Eu: () => g });
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
                var a = n(358);
                var i = n(613);
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
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(521),
                    m = n(70);
                const v = ['args'];
                function b(e, t, n, o, r, a, i) {
                    try {
                        var s = e[a](i),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(o, r);
                }
                const w = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                        var a = e.apply(t, n);
                                        function i(e) {
                                            b(a, o, r, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            b(a, o, r, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    g = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    h = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        r = {},
                                        a = Object.keys(e);
                                    for (o = 0; o < a.length; o++) ((n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, v);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    f = () => h(s.CLOSE),
                    E = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var y = n(572);
                const C = r.instance,
                    k = {
                        DataTracker: a.Z,
                        ViewModel: y.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: u,
                        makeGlobalBoundingBox: w,
                        sendMoveEvent: (e) => h(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => h(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, o, r = R.invalid('resId'), a) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                l = n.getBoundingClientRect(),
                                c = l.x,
                                d = l.y,
                                u = l.width,
                                _ = l.height,
                                v = {
                                    x: m.O.view.pxToRem(c) + i.x,
                                    y: m.O.view.pxToRem(d) + i.y,
                                    width: m.O.view.pxToRem(u),
                                    height: m.O.view.pxToRem(_),
                                };
                            h(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: o || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: w(v),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => E(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            E(e, f);
                        },
                        handleViewEvent: h,
                        onBindingsReady: p,
                        onLayoutReady: g,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
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
                        ClickOutsideManager: C,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = k;
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
            745: (e, t, n) => {
                var o = n(363),
                    r = n.n(o),
                    a = n(533),
                    i = n.n(a),
                    s = n(483),
                    l = n.n(s);
                var c = n(916);
                const d = [
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
                function u(e) {
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
                const _ = (e, t, n = {}, o = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: c.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: o,
                                },
                                n,
                            ),
                        );
                    },
                    m = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            r = e.args,
                            a = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            c = e.ignoreShowDelay,
                            m = void 0 !== c && c,
                            v = e.ignoreMouseClick,
                            b = void 0 !== v && v,
                            w = e.decoratorId,
                            p = void 0 === w ? 0 : w,
                            g = e.isEnabled,
                            h = void 0 === g || g,
                            f = e.targetId,
                            E = void 0 === f ? 0 : f,
                            y = e.onShow,
                            C = e.onHide,
                            k = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    a = Object.keys(e);
                                for (o = 0; o < a.length; o++) ((n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, d);
                        const O = (0, o.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            P = (0, o.useMemo)(
                                () =>
                                    E ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let n,
                                            o = R.invalid('resId'),
                                            r = '';
                                        var a;
                                        return (
                                            t &&
                                                ((r =
                                                    (null == (a = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) ||
                                                    ''),
                                                (n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== n &&
                                                    window.subViews[n] &&
                                                    (o = window.subViews[n].id)),
                                            { callerUrl: r, caller: n, stack: t, resId: o }
                                        );
                                    })().resId,
                                [E],
                            ),
                            T = (0, o.useCallback)(() => {
                                (O.current.isVisible && O.current.timeoutId) ||
                                    (_(n, p, { isMouseEvent: !0, on: !0, arguments: u(r) }, P),
                                    y && y(),
                                    (O.current.isVisible = !0));
                            }, [n, p, r, P, y]),
                            S = (0, o.useCallback)(() => {
                                if (O.current.isVisible || O.current.timeoutId) {
                                    const e = O.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (O.current.timeoutId = 0)),
                                        _(n, p, { on: !1 }, P),
                                        O.current.isVisible && C && C(),
                                        (O.current.isVisible = !1));
                                }
                            }, [n, p, P, C]),
                            M = (0, o.useCallback)((e) => {
                                O.current.isVisible &&
                                    ((O.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (O.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(O.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        ((0, o.useEffect)(() => {
                            const e = O.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', M, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', M, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, o.useEffect)(() => {
                                !1 === h && S();
                            }, [h, S]),
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        (window.removeEventListener('mouseleave', S), S());
                                    }
                                ),
                                [S],
                            ));
                        return h
                            ? (0, o.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(O.current.timeoutId),
                                                      (O.current.timeoutId = window.setTimeout(T, m ? 100 : 400)),
                                                      a && a(e),
                                                      x && x(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (S(), null == i || i(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === b && S(), null == l || l(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === b && S(), null == s || s(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      k,
                                  ),
                              )
                            : t;
                        var x;
                    },
                    v = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function b() {
                    return (
                        (b =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        b.apply(this, arguments)
                    );
                }
                const w = R.views.common.tooltip_window.simple_tooltip_content,
                    p = (e) => {
                        let t = e.children,
                            n = e.body,
                            a = e.header,
                            i = e.note,
                            s = e.alert,
                            l = e.args,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    a = Object.keys(e);
                                for (o = 0; o < a.length; o++) ((n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, v);
                        const d = (0, o.useMemo)(() => {
                            const e = Object.assign({}, l, { body: n, header: a, note: i, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, n, a, i, l]);
                        return r().createElement(
                            m,
                            b(
                                {
                                    contentId:
                                        ((u = null == l ? void 0 : l.hasHtmlContent),
                                        u ? w.SimpleTooltipHtmlContent('resId') : w.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: d,
                                },
                                c,
                            ),
                            t,
                        );
                        var u;
                    };
                var g = n(70);
                const h = (e) => {
                    (0, o.useEffect)(e, []);
                };
                function f(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const E = {
                        playHighlight() {
                            f('highlight');
                        },
                        playClick() {
                            f('play');
                        },
                        playYes() {
                            f('yes1');
                        },
                    },
                    y = {
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
                function C() {
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
                                                (t(), (e.current = 0));
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
                var k;
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(k || (k = {}));
                const O = ['__left', '__right', '__top', '__bottom'],
                    P = (0, o.forwardRef)(
                        (
                            {
                                children: e,
                                disableAutoSizeUpdate: t,
                                onOutsideClick: n,
                                className: a,
                                customStyles: i = {},
                            },
                            s,
                        ) => {
                            const d = (0, o.useRef)(null),
                                u = (0, o.useRef)(null),
                                _ = (0, o.useRef)(null),
                                m = (0, o.useState)(window.decorator && window.decorator.directionType),
                                v = m[0],
                                b = m[1],
                                w = (0, o.useCallback)(() => {
                                    (E.playClick(), g.O.view.sendEvent.close());
                                }, []),
                                f = (0, o.useCallback)(() => {
                                    E.playHighlight();
                                }, []),
                                k = l()(y.arrow, y[`arrow${O[v]}`]);
                            h(
                                () => (
                                    g.O.client.events.mouse.enableOutside(),
                                    g.O.client.events.mouse.down(([, e]) => {
                                        'outside' === e && (n ? n() : g.O.view.sendEvent.close('popover'));
                                    })
                                ),
                            );
                            const P = (0, o.useCallback)(
                                    (e) => {
                                        let t = e.target;
                                        do {
                                            if (t === d.current || t === _.current) return;
                                            t = t.parentNode;
                                        } while (t);
                                        const o = window.decorator;
                                        if (void 0 !== window.decorator) {
                                            const e = g.O.client.getMouseGlobalPosition(),
                                                t = ![o.boundX, o.boundY, o.boundWidth, o.boundHeight].includes(void 0),
                                                n =
                                                    e.x < o.boundX ||
                                                    e.x > o.boundX + o.boundWidth ||
                                                    e.y > o.boundY + o.boundHeight ||
                                                    e.y < o.boundY;
                                            if (t && !n) return;
                                        }
                                        n ? n() : g.O.view.sendEvent.close('popover');
                                    },
                                    [d, _, n],
                                ),
                                T = (0, o.useCallback)(() => {
                                    b(window.decorator.directionType);
                                }, []),
                                S = C(),
                                M = (0, o.useCallback)(() => {
                                    const e = u.current;
                                    if (e)
                                        return (
                                            g.O.view.freezeTextureBeforeResize(),
                                            S.run(() => {
                                                const t = e.scrollWidth,
                                                    n = e.scrollHeight;
                                                (g.O.view.resize(t, n), T());
                                            })
                                        );
                                }, [S, T]);
                            return (
                                (0, o.useImperativeHandle)(
                                    s,
                                    () => ({ updateSize: M, updateDirection: T, elementRef: u }),
                                    [M, T],
                                ),
                                h(() => {
                                    g.O.view.setInputPaddingsRem(58);
                                }),
                                (0, o.useEffect)(() => {
                                    document.addEventListener('mousedown', P, { capture: !0 });
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
                                    })((0, c.Eu)());
                                    return (
                                        !t && e.promise.then(() => M()),
                                        () => {
                                            (e.cancel(), document.removeEventListener('mousedown', P));
                                        }
                                    );
                                }, [M, P, t]),
                                r().createElement(
                                    'div',
                                    { className: l()(y.base, a), ref: u },
                                    r().createElement(
                                        'div',
                                        { className: y.decorator },
                                        r().createElement(
                                            'div',
                                            { className: y.content, ref: d },
                                            e,
                                            window.decorator &&
                                                window.decorator.isCloseBtnVisible &&
                                                r().createElement(
                                                    p,
                                                    { body: R.strings.dialogs.common.error.cancel() },
                                                    r().createElement('div', {
                                                        className: y.closeBtn,
                                                        onClick: w,
                                                        onMouseEnter: f,
                                                        ref: _,
                                                    }),
                                                ),
                                        ),
                                        r().createElement('div', { className: k, style: i.arrow }),
                                    ),
                                )
                            );
                        },
                    );
                var T = n(521);
                const S = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function M(e = T.n.NONE, t = S, n = !1, r = !1) {
                    (0, o.useEffect)(() => {
                        if (e !== T.n.NONE)
                            return (
                                window.addEventListener('keydown', o, n),
                                () => {
                                    window.removeEventListener('keydown', o, n);
                                }
                            );
                        function o(o) {
                            if (o.keyCode === e) {
                                if (!r && g.O.view.isEventHandled()) return;
                                (g.O.view.setEventHandled(), t(o), n && o.stopPropagation());
                            }
                        }
                    }, [t, e, n, r]);
                }
                var x = n(403);
                const N = (e) => ({ backgroundImage: `url('${e}')` }),
                    L = 'BonusInfoIcon_bonusInfoIcon_3d',
                    I = () => {
                        const e = (0, o.useMemo)(() => N(R.images.gui.maps.icons.platoon.common.info()), []);
                        return r().createElement(
                            m,
                            { isEnabled: !0, contentId: R.views.lobby.premacc.tooltips.SquadBonusTooltip('resId') },
                            r().createElement('div', { className: L, style: e }),
                        );
                    },
                    A = {
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
                let B, D;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(B || (B = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(D || (D = {})));
                const V = ({
                    children: e,
                    size: t,
                    disabled: n,
                    mixClass: a,
                    onMouseEnter: i,
                    onMouseMove: s,
                    onMouseDown: c,
                    onMouseUp: d,
                    onMouseLeave: u,
                    onClick: _,
                    isFocused: m = !1,
                    type: v = B.primary,
                    soundHover: b = 'highlight',
                    soundClick: w = 'play',
                }) => {
                    const p = (0, o.useRef)(null),
                        g = (0, o.useState)(m),
                        h = g[0],
                        E = g[1],
                        y = (0, o.useState)(!1),
                        C = y[0],
                        k = y[1];
                    return (
                        (0, o.useEffect)(() => {
                            function e(e) {
                                h && null !== p.current && !p.current.contains(e.target) && E(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [h]),
                        (0, o.useEffect)(() => {
                            E(m);
                        }, [m]),
                        r().createElement(
                            'div',
                            {
                                ref: p,
                                className: l()(
                                    A.base,
                                    A[`base__${v}`],
                                    n && A.base__disabled,
                                    t && A[`base__${t}`],
                                    h && A.base__focus,
                                    C && A.base__highlightActive,
                                    a,
                                ),
                                onMouseEnter: function (e) {
                                    n || (null !== b && f(b), i && i(e));
                                },
                                onMouseMove: function (e) {
                                    s && s(e);
                                },
                                onMouseUp: function (e) {
                                    n || (d && d(e), k(!1));
                                },
                                onMouseDown: function (e) {
                                    n ||
                                        (null !== w && f(w),
                                        c && c(e),
                                        m && (n || (p.current && (p.current.focus(), E(!0)))),
                                        k(!0));
                                },
                                onMouseLeave: function (e) {
                                    n || (u && u(e), k(!1));
                                },
                                onClick: function (e) {
                                    n || (_ && _(e));
                                },
                            },
                            v !== B.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: A.back }),
                                    r().createElement('span', { className: A.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: l()(A.state, A.state__default) },
                                r().createElement('span', { className: A.stateDisabled }),
                                r().createElement('span', { className: A.stateHighlightHover }),
                                r().createElement('span', { className: A.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: A.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                function F() {
                    return (
                        (F =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        F.apply(this, arguments)
                    );
                }
                (0, o.memo)(
                    ({
                        caption: e,
                        isEnabled: t,
                        description: n,
                        children: a,
                        cButtonProps: i,
                        onClick: s,
                        className: l,
                    }) => {
                        const c = (0, o.useCallback)(() => s(), [s]);
                        return r().createElement(
                            p,
                            { isEnabled: !0, header: e, body: n },
                            r().createElement(
                                'div',
                                { className: l },
                                r().createElement(
                                    V,
                                    F({ type: B.primary, size: D.small, onClick: c, disabled: !t }, i),
                                    a || e,
                                ),
                            ),
                        );
                    },
                );
                const j = /<link.*?>/g,
                    H = /\.\.\//g,
                    U = /<script.*?>/g,
                    z = 'default.css',
                    q = (e) => {
                        const t = e.match(H);
                        return t && t.join('');
                    },
                    G = () => {
                        for (
                            var e = 0, t = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < t.length;
                            e++
                        ) {
                            const n = t[e];
                            if (!n.href.includes(z)) return n.href;
                        }
                        return '';
                    },
                    W = (e) => {
                        const t = G(),
                            n = q(t);
                        let o,
                            r = e;
                        for (; null !== (o = U.exec(e)); ) {
                            const e = o[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const t = n + e[2].replace(H, '');
                                r = r.replace(e[2], t);
                            }
                        }
                        return r;
                    },
                    K = () => {
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
                    Y = 'SubView_base_df',
                    $ = 'subViews.onChanged',
                    X = K(),
                    Z = (0, o.memo)(({ id: e, fallback: t, onLoadCallback: n, mixClass: a }) => {
                        const i = (0, o.useState)(''),
                            s = i[0],
                            d = i[1],
                            u = (0, o.useMemo)(() => ({ __html: W(s) }), [s]),
                            _ = (0, o.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            m = (0, o.useState)(!1),
                            v = m[0],
                            b = m[1],
                            w = (0, o.useCallback)(
                                (e) => {
                                    e.includes(_) &&
                                        (b(!0), engine.off($, w), window.subViews.removeChildChangedCallback(_));
                                },
                                [_],
                            ),
                            p = (0, o.useCallback)((e) => {
                                X.add(
                                    () =>
                                        new Promise((t) => {
                                            d(e);
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
                                        engine.on(`subView:inject->${o}`, p),
                                        (({ path: e, name: t }) => {
                                            const n = new XMLHttpRequest();
                                            ((n.onreadystatechange = () => {
                                                4 === n.readyState &&
                                                    (200 === n.status
                                                        ? (0, c.Eu)().then(() => {
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
                                                engine.off(`subView:inject->${o}`, p),
                                                console.info(`Sub view ${o} is destroyed: ${n}`));
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on($, w);
                        }, [w, p, e, v]),
                            (0, o.useEffect)(
                                () => () => {
                                    s &&
                                        ((e) => {
                                            const t = q(G());
                                            let n;
                                            for (; null !== (n = j.exec(e)); ) {
                                                const e = n[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const n = t + e[1].replace(H, ''),
                                                        o = document.head.querySelector(`[href="${n}"]`);
                                                    o && document.head.removeChild(o);
                                                }
                                            }
                                        })(s);
                                },
                                [s],
                            ));
                        const g = l()(Y, a);
                        if (s) {
                            let t;
                            return (
                                (t = document.getElementById('root')) && t.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let t;
                                    const n = G(),
                                        o = q(n);
                                    for (; null !== (t = j.exec(e)); ) {
                                        const e = t[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(z) && o) {
                                            const t = o + e[1].replace(H, ''),
                                                n = document.createElement('link');
                                            ((n.href = t), (n.rel = 'stylesheet'), document.head.appendChild(n));
                                        }
                                    }
                                })(s),
                                n && n(e),
                                r().createElement('div', { className: g, dangerouslySetInnerHTML: u })
                            );
                        }
                        return t ? r().createElement('div', { className: g }, r().createElement(t, null)) : null;
                    }),
                    Q = 'subViews.onChanged',
                    J = '.html',
                    ee = /^coui:\/\/gui\/.*/,
                    te = K(),
                    ne = (e) => {
                        const t = document.createElement('script');
                        ((t.src = e), (t.defer = !0), document.head.appendChild(t));
                    },
                    oe =
                        ((0, o.memo)(({ id: e, bundleLevelPath: t = 3, mixClass: n, children: a }) => {
                            const i = (0, o.useRef)(null),
                                s = (0, o.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                                c = (0, o.useState)(!1),
                                d = c[0],
                                u = c[1],
                                _ = (0, o.useState)(!0),
                                m = _[0],
                                v = _[1],
                                b = (0, o.useCallback)(
                                    (e) => {
                                        e.includes(s) &&
                                            (u(!0), engine.off(Q, b), window.subViews.removeChildChangedCallback(s));
                                    },
                                    [s],
                                ),
                                w = (0, o.useCallback)(
                                    (e) => {
                                        te.add(
                                            () =>
                                                new Promise((n) => {
                                                    const o = new MutationObserver(() => {
                                                        (v(!1), o.disconnect(), n());
                                                    });
                                                    if (i.current) {
                                                        const n = document.getElementById('root');
                                                        (n && n.setAttribute('id', 'bugSubView'),
                                                            i.current.setAttribute('id', 'root'));
                                                        const r = document.createElement('link');
                                                        ((r.href = e.replace(J, '.css')),
                                                            (r.rel = 'stylesheet'),
                                                            document.head.appendChild(r),
                                                            ee.test(e) &&
                                                                ne(
                                                                    e
                                                                        .split('/')
                                                                        .slice(0, -t)
                                                                        .concat(['vendors.js'])
                                                                        .join('/')
                                                                        .replace('/production/', '/production/lib/'),
                                                                ),
                                                            ne(e.replace(J, '.js')),
                                                            o.observe(i.current, { childList: !0 }));
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
                                                w(n),
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
                                    } else engine.on(Q, b);
                                }, [b, w, e, d]),
                                r().createElement(
                                    'div',
                                    { className: l()(Y, n) },
                                    m && a,
                                    r().createElement('div', { ref: i }),
                                )
                            );
                        }),
                        'Header_base_a7'),
                    re = 'Header_header_9f',
                    ae = 'Header_label_af',
                    ie = 'Header_description_41',
                    se = 'Header_bonusInfo_3f',
                    le = 'Header_bonusesIcon_7a',
                    ce = 'Header_xp_87',
                    de = 'Header_credits_82',
                    ue = 'Header_base__fullBonuses_2f',
                    _e = ({
                        description: e,
                        backgroundImage: t,
                        hasXpBonus: n,
                        hasCreditBonus: o,
                        subViewComponent: a,
                    }) => {
                        const i = null != a ? a : Z;
                        return r().createElement(
                            'div',
                            { className: l()(oe, n && o && ue), style: N(t) },
                            r().createElement(
                                'div',
                                { className: re },
                                r().createElement(
                                    'div',
                                    null,
                                    r().createElement('span', { className: ae }, R.strings.platoon.squad()),
                                    r().createElement('span', { className: ie }, e),
                                ),
                                (n || o) &&
                                    r().createElement(
                                        'div',
                                        { className: se },
                                        r().createElement(
                                            'div',
                                            { className: le },
                                            n && r().createElement('div', { className: ce }),
                                            o && r().createElement('div', { className: de }),
                                        ),
                                        r().createElement(I, null),
                                    ),
                            ),
                            r().createElement(i, { id: R.views.lobby.platoon.subViews.TiersLimit('resId') }),
                        );
                    },
                    me = 'Separator_base_98',
                    ve = 'Separator_base__horizontal_34',
                    be = 'Separator_base__vertical_9d',
                    we = 'Separator_image_5b';
                let pe;
                !(function (e) {
                    ((e.left = 'left'), (e.top = 'top'), (e.right = 'right'), (e.bottom = 'bottom'));
                })(pe || (pe = {}));
                const ge = [pe.right, pe.left],
                    he = ({ position: e }) => {
                        const t = String(R.images.gui.maps.icons.platoon.common.separator.$dyn(e));
                        return r().createElement(
                            'div',
                            { className: l()(me, ge.includes(e) ? be : ve) },
                            r().createElement('div', { className: we, style: N(t) }),
                        );
                    },
                    fe = {
                        base: 'ToggleButton_base_b9',
                        content: 'ToggleButton_content_85',
                        overlay: 'ToggleButton_overlay_0a',
                        base__active: 'ToggleButton_base__active_68',
                        indicator: 'ToggleButton_indicator_85',
                        button: 'ToggleButton_button_4f',
                    },
                    Ee = ['active', 'className', 'children', 'size', 'mixClass'];
                function ye() {
                    return (
                        (ye =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        ye.apply(this, arguments)
                    );
                }
                (0, o.memo)((e) => {
                    let t = e.active,
                        n = e.className,
                        o = e.children,
                        a = e.size,
                        i = void 0 === a ? D.small : a,
                        s = e.mixClass,
                        c = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                o,
                                r = {},
                                a = Object.keys(e);
                            for (o = 0; o < a.length; o++) ((n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, Ee);
                    const d = l()(fe.base, n, t && fe.base__active);
                    return r().createElement(
                        'div',
                        { className: d },
                        r().createElement(
                            V,
                            ye({}, c, { type: 'secondary', size: i, mixClass: fe[`${s}`] }),
                            r().createElement('span', { className: fe.content }, o),
                        ),
                        r().createElement('div', { className: fe.overlay }),
                        r().createElement('div', { className: fe.indicator }),
                    );
                });
                const Ce = (0, o.createContext)(null),
                    ke = () => {
                        const e = (0, o.useContext)(Ce);
                        return (
                            null !== e &&
                                console.info(
                                    'useDependencies hook was called with data from PlatoonDropdownDIContext.Provider',
                                ),
                            e
                        );
                    };
                function Oe() {
                    return !1;
                }
                console.log;
                var Pe = n(174);
                function Te(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Se(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return Se(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var o = 0;
                        return function () {
                            return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Se(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                    return o;
                }
                const Re = (e) => (0 === e ? window : window.subViews.get(e));
                const Me = ((e, t) => {
                        const n = (0, o.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: i, children: s, mocks: l }) {
                                const c = (0, o.useRef)([]),
                                    d = (n, o, r) => {
                                        var a;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = Re,
                                                context: o = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function a(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = r.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const r = n(t),
                                                        a = o.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (n, a) => {
                                                        const s = 'string' == typeof a ? `${o}.${a}` : o,
                                                            l = g.O.view.addModelObserver(s, t, !0);
                                                        return (r.set(l, n), e && n(i(a)), l);
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, t) => {
                                                        const n = i(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = i(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, n = Te(r.keys()); !(e = n()).done; ) a(e.value, t);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(o),
                                            s =
                                                'real' === n
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === n ? (null == r ? void 0 : r.getter(e)) : s.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            u = e({
                                                mode: n,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    dict: (e) => {
                                                        const t = l(e),
                                                            o = Pe.LO.box(t, { equals: Oe });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, Pe.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    array: (e, t) => {
                                                        const o = null != t ? t : l(e),
                                                            r = Pe.LO.box(o, { equals: Oe });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, Pe.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const o = null != t ? t : l(e),
                                                            r = Pe.LO.box(o, { equals: Oe });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, Pe.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const o = l(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, t) => ((e[t] = Pe.LO.box(o[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, Pe.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                a = Object.entries(r),
                                                                i = a.reduce(
                                                                    (e, [t, n]) => ((e[n] = Pe.LO.box(o[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, Pe.aD)((e) => {
                                                                            a.forEach(([t, n]) => {
                                                                                i[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            _ = { mode: n, model: u, externalModel: s, cleanup: d };
                                        return {
                                            model: u,
                                            controls: 'mocks' === n && r ? r.controls(_) : t(_),
                                            externalModel: s,
                                            mode: n,
                                        };
                                    },
                                    u = (0, o.useRef)(!1),
                                    _ = (0, o.useState)(a),
                                    m = _[0],
                                    v = _[1],
                                    b = (0, o.useState)(() => d(a, i, l)),
                                    w = b[0],
                                    p = b[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        u.current ? p(d(m, i, l)) : (u.current = !0);
                                    }, [l, m, i]),
                                    (0, o.useEffect)(() => {
                                        v(a);
                                    }, [a]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            (w.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [w],
                                    ),
                                    r().createElement(n.Provider, { value: w }, s)
                                );
                            },
                            () => (0, o.useContext)(n),
                        ];
                    })(
                        ({ observableModel: e }) =>
                            Object.assign(
                                {},
                                e.primitives([
                                    'type',
                                    'battleType',
                                    'isSettingsVisible',
                                    'hasXpBonus',
                                    'hasCreditsBonus',
                                    'isRibbonVisible',
                                    'backgroundImage',
                                ]),
                                {
                                    findPlatoon: e.object('findPlatoon'),
                                    createPlatoon: e.object('createPlatoon'),
                                    createPlatoonForTwo: e.object('createPlatoonForTwo'),
                                    createPlatoonForSeven: e.object('createPlatoonForSeven'),
                                },
                            ),
                        ({ externalModel: e }) => ({
                            outside: e.createCallbackNoArgs('onOutsideClick'),
                            find: e.createCallbackNoArgs('findPlatoon.onClick'),
                            create: e.createCallbackNoArgs('createPlatoon.onClick'),
                            createForTwo: e.createCallbackNoArgs('createPlatoonForTwo.onClick'),
                            createForSeven: e.createCallbackNoArgs('createPlatoonForSeven.onClick'),
                        }),
                    ),
                    xe = Me[0],
                    Ne = Me[1],
                    Le = { contentId: R.views.lobby.platoon.AlertTooltip('resId'), isEnabled: !0 },
                    Ie = (e, t, n, o = !0) =>
                        e && o
                            ? Le
                            : ((e, t, n) => ({
                                  contentId:
                                      R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                          'resId',
                                      ),
                                  decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                  args: { header: e, body: t },
                                  isEnabled: n,
                              }))(t, n, o),
                    Ae = {
                        base: 'FlatButton_base_bf',
                        background: 'FlatButton_background_5f',
                        base__disabled: 'FlatButton_base__disabled_c0',
                        image: 'FlatButton_image_ce',
                        text: 'FlatButton_text_90',
                        description: 'FlatButton_description_08',
                    };
                let Be;
                !(function (e) {
                    ((e[(e.findPlayers = 0)] = 'findPlayers'),
                        (e[(e.createPlatoon = 1)] = 'createPlatoon'),
                        (e[(e.createPlatoonForTwo = 2)] = 'createPlatoonForTwo'),
                        (e[(e.createPlatoonForSeven = 3)] = 'createPlatoonForSeven'));
                })(Be || (Be = {}));
                const De = ({
                    caption: e,
                    onClick: t,
                    isEnabled: n,
                    description: a,
                    type: i,
                    text: s,
                    tooltipCaption: c,
                }) => {
                    const d = i === Be.createPlatoonForSeven || i === Be.createPlatoonForTwo,
                        u =
                            i === Be.findPlayers
                                ? R.images.gui.maps.icons.platoon.platoon_dropdown.flat_buttons.find_players()
                                : R.images.gui.maps.icons.platoon.platoon_dropdown.flat_buttons.create_platoon(),
                        _ = (0, o.useMemo)(() => N(u), [u]),
                        v = l()(Ae.base, !n && Ae.base__disabled),
                        b = (0, o.useCallback)(() => f('highlight'), []),
                        w = (0, o.useCallback)(() => {
                            (t(), i === Be.findPlayers && f(R.sounds.gui_platoon_2_find_players()));
                        }, [t, i]),
                        p = (0, o.useCallback)(() => f(R.sounds.play()), []),
                        g = i === Be.findPlayers && !n,
                        h = (0, o.useMemo)(() => Ie(g, c, a), [g, c, a]);
                    return r().createElement(
                        m,
                        h,
                        r().createElement(
                            'div',
                            { className: v, onClick: n ? w : void 0, onMouseDown: p, onMouseEnter: b },
                            r().createElement('div', { className: Ae.background }),
                            r().createElement('div', { className: Ae.image, style: _ }),
                            r().createElement(
                                'div',
                                { className: Ae.text },
                                r().createElement('span', { className: Ae.caption }, e),
                                d && r().createElement('span', { className: Ae.description }, s),
                            ),
                        ),
                    );
                };
                function Ve() {
                    return (
                        (Ve =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        Ve.apply(this, arguments)
                    );
                }
                const Fe = (0, x.Pi)(() => {
                        const e = Ne(),
                            t = e.model,
                            n = e.controls,
                            o = t.findPlatoon.get(),
                            a = t.createPlatoon.get();
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(De, Ve({ type: Be.findPlayers }, o, { onClick: n.find })),
                            r().createElement(De, Ve({ type: Be.createPlatoon }, a, { onClick: n.create })),
                        );
                    }),
                    je = 'SettingsContainer_base_5d',
                    He = 'SettingsContainer_settingsContainer_48',
                    Ue = 'SettingsContainer_settingsHighlight_22',
                    ze = ({ className: e }) => {
                        var t;
                        const n = ke(),
                            o = null != (t = null == n ? void 0 : n.subViewComponent) ? t : Z;
                        return r().createElement(
                            'div',
                            { className: l()(je, e) },
                            r().createElement(he, { position: pe.top }),
                            r().createElement('div', {
                                className: Ue,
                                style: N(R.images.gui.maps.icons.platoon.platoon_dropdown.glow_arrow()),
                            }),
                            r().createElement(o, {
                                id: R.views.lobby.platoon.subViews.SettingsContent('resId'),
                                mixClass: He,
                            }),
                            r().createElement(he, { position: pe.bottom }),
                        );
                    },
                    qe = {
                        base: 'App_base_79',
                        popoverDecorator: 'App_popoverDecorator_28',
                        content: 'App_content_bf',
                        settings__hidden: 'App_settings__hidden_87',
                    };
                window.decorator = { directionType: k.Bottom, isCloseBtnVisible: !1 };
                const Ge = { arrow: { display: 'none' } },
                    We = (0, x.Pi)(() => {
                        var e;
                        const t = Ne(),
                            n = t.model,
                            a = t.controls,
                            i = n.isSettingsVisible.get(),
                            s = (0, o.useRef)(null),
                            c = ke(),
                            d = C();
                        (0, o.useEffect)(() => {
                            if (!s.current || !s.current.elementRef.current) return;
                            const e = s.current.elementRef.current;
                            d.run(() => {
                                (g.O.view.resize(e.scrollWidth, e.scrollHeight + g.O.view.remToPx(115)),
                                    s.current.updateDirection());
                            });
                        }, [d]);
                        const u = (0, o.useCallback)(() => {
                            (g.O.view.displayStatusIs.shown() || g.O.view.displayStatusIs.showing()) &&
                                (a.outside(), g.O.view.sendEvent.close(), g.O.view.setEventHandled());
                        }, [a]);
                        return (
                            M(T.n.ESCAPE, u),
                            r().createElement(
                                'div',
                                { className: qe.base },
                                r().createElement(
                                    P,
                                    {
                                        disableAutoSizeUpdate: !0,
                                        className: qe.popoverDecorator,
                                        ref: s,
                                        onOutsideClick: u,
                                        customStyles: Ge,
                                    },
                                    r().createElement(
                                        'div',
                                        { className: qe.content },
                                        r().createElement(_e, {
                                            description: n.battleType.get(),
                                            backgroundImage: n.backgroundImage.get(),
                                            hasXpBonus: n.hasXpBonus.get(),
                                            hasCreditBonus: n.hasCreditsBonus.get(),
                                            subViewComponent: null == c ? void 0 : c.subViewComponent,
                                        }),
                                        r().createElement(ze, {
                                            className: l()(qe.settings, !i && qe.settings__hidden),
                                        }),
                                        null != (e = null == c ? void 0 : c.flatButtonsComponent)
                                            ? e
                                            : r().createElement(Fe, null),
                                    ),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    i().render(
                        r().createElement(xe, null, r().createElement(We, null)),
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
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](n, n.exports, __webpack_require__), n.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, o) => {
            if (!t) {
                var r = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, o] = deferred[l], a = !0, i = 0; i < t.length; i++)
                        (!1 & o || r >= o) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((a = !1), o < r && (r = o));
                    if (a) {
                        deferred.splice(l--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            o = o || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > o; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, n, o];
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
        (__webpack_require__.j = 878),
        (() => {
            var e = { 878: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        r,
                        [a, i, s] = n,
                        l = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (o in i) __webpack_require__.o(i, o) && (__webpack_require__.m[o] = i[o]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(n); l < a.length; l++)
                        ((r = a[l]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [720], () => __webpack_require__(745));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
