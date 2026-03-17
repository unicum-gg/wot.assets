(() => {
    var __webpack_modules__ = {
            70: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => ie });
                var u = {};
                (n.r(u),
                    n.d(u, { mouse: () => E, off: () => m, on: () => d, onResize: () => l, onScaleUpdated: () => c }));
                var r = {};
                (n.r(r),
                    n.d(r, {
                        events: () => u,
                        getMouseGlobalPosition: () => p,
                        getSize: () => v,
                        graphicsQuality: () => g,
                        playSound: () => F,
                        setRTPC: () => f,
                    }));
                var o = {};
                (n.r(o), n.d(o, { getBgUrl: () => D, getTextureUrl: () => w }));
                var s = {};
                function a(e) {
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
                (n.r(s),
                    n.d(s, {
                        addModelObserver: () => H,
                        addPreloadTexture: () => L,
                        arabic2roman: () => te,
                        children: () => o,
                        displayStatus: () => y,
                        displayStatusIs: () => ue,
                        enableFullScreenModeSupported: () => se,
                        events: () => S,
                        extraSize: () => re,
                        forceTriggerMouseMove: () => Q,
                        freezeTextureBeforeResize: () => U,
                        getBrowserTexturePath: () => I,
                        getDisplayStatus: () => J,
                        getExternalPaddingsRem: () => ne,
                        getFontNames: () => ee,
                        getScale: () => G,
                        getSize: () => z,
                        getViewGlobalPosition: () => j,
                        initExternalPaddings: () => ae,
                        isEventHandled: () => Z,
                        isFocused: () => Y,
                        pxToRem: () => $,
                        remToPx: () => q,
                        resize: () => V,
                        sendEvent: () => x,
                        setAnimateWindow: () => K,
                        setEventHandled: () => X,
                        setInputPaddingsRem: () => N,
                        setSidePaddingsRem: () => W,
                        whenTutorialReady: () => oe,
                    }));
                const l = a('clientResized'),
                    c = a('self.onScaleUpdated'),
                    d = (e, t) => engine.on(e, t),
                    m = (e, t) => engine.off(e, t),
                    _ = { down: a('mousedown'), up: a('mouseup'), move: a('mousemove') };
                const E = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && i(!1);
                    }
                    function n() {
                        e.enabled && i(!0);
                    }
                    function u() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : i(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const o = `mouse${t}`,
                                        s = _[t]((e) => n([e, 'outside']));
                                    function a(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, a),
                                        u(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(o, a),
                                                (e.listeners -= 1),
                                                u(),
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
                            ((e.enabled = !1), u());
                        },
                        enable() {
                            ((e.enabled = !0), u());
                        },
                        enableOutside() {
                            e.enabled && i(!0);
                        },
                        disableOutside() {
                            e.enabled && i(!1);
                        },
                    });
                })();
                function F(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function f(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const g = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    h = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    A = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    C = Object.keys(A).reduce((e, t) => ((e[t] = () => F(A[t])), e), {}),
                    b = { play: Object.assign({}, C, { sound: F }), setRTPC: f };
                var B = n(690);
                function w(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function D(e, t, n) {
                    return `url(${w(e, t, n)})`;
                }
                const y = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
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
                    O = ['args'];
                const M = 2,
                    P = 16,
                    k = 32,
                    R = 64,
                    T = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        u,
                                        r = {},
                                        o = Object.keys(e);
                                    for (u = 0; u < o.length; u++) ((n = o[u]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, O);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((u = r),
                                              Object.entries(u).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var u;
                    },
                    x = {
                        close(e) {
                            T('popover' === e ? M : k);
                        },
                        minimize() {
                            T(R);
                        },
                        move(e) {
                            T(P, { isMouseEvent: !0, on: e });
                        },
                    };
                function L(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function N(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function I(e, t, n, u = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, u);
                }
                function H(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function W(e) {
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
                    return 'rem' === e ? t : { x: q(t.x), y: q(t.y) };
                }
                function U() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function G() {
                    return viewEnv.getScale();
                }
                function $(e) {
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
                    te = B.cg;
                function ne() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const ue = Object.keys(y).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === y[t]), e), {}),
                    re = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    oe = Promise.all([
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
                            u = t.right,
                            r = t.bottom,
                            o = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${u}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${o}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
                const ie = { view: s, client: r, sound: b, intl: h };
            },
            521: (e, t, n) => {
                'use strict';
                let u, r;
                (n.d(t, { n: () => u }),
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
                    })(u || (u = {})),
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
            368: () => {
                (!(function () {
                    let e,
                        t,
                        n,
                        u,
                        r,
                        o,
                        s,
                        a = -1;
                    (document.addEventListener('mousedown', (n) => {
                        (document.getSelection().empty(),
                            n.target.select &&
                                -1 === a &&
                                ((e = n.target), (t = e.getBoundingClientRect()), e.setSelectionRange(0, 0)));
                    }),
                        document.addEventListener('mousemove', (n) => {
                            if ((-1 === a && n.target.select && n.target === e && (a = e.selectionStart), a > -1)) {
                                const u = Math.min(Math.max(n.x, t.left), t.right),
                                    r = Math.min(Math.max(n.y, t.top), t.bottom),
                                    o = document.createEvent('MouseEvent');
                                (o.initMouseEvent('mousedown', !0, !0, null, 1, u, r, u, r, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(o));
                                const s = e.selectionEnd;
                                s > a ? e.setSelectionRange(a, s, 'forward') : e.setSelectionRange(s, a, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            ((e = null), (a = -1));
                        }),
                        document.addEventListener('dblclick', (e) => {
                            e.target.select &&
                                (document.getSelection().empty(),
                                (n = e.target),
                                (u = e.target.value),
                                (r = n.selectionStart),
                                (o = -1 !== u.lastIndexOf(' ', r) ? u.lastIndexOf(' ', r) + 1 : 0),
                                (s = -1 !== u.indexOf(' ', r) ? u.indexOf(' ', r) : u.length),
                                n.setSelectionRange(o, s, 'forward'));
                        }));
                })(),
                    (function () {
                        let e = null;
                        (document.addEventListener('mousedown', (t) => {
                            (document.getSelection().empty(),
                                0 !== t.button ||
                                    t.target.select ||
                                    e ||
                                    (e = document.caretPositionFromPoint(t.x, t.y)));
                        }),
                            document.addEventListener('mousemove', (t) => {
                                if (0 === t.button && !t.target.select && e) {
                                    const n = document.caretPositionFromPoint(t.x, t.y);
                                    if (!n.offsetNode || !e.offsetNode) return;
                                    document
                                        .getSelection()
                                        .setBaseAndExtent(e.offsetNode, e.offset, n.offsetNode, n.offset);
                                }
                            }),
                            document.addEventListener('mouseup', () => {
                                e = null;
                            }));
                    })());
            },
            690: (e, t, n) => {
                'use strict';
                n.d(t, { cg: () => o });
                const u = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function o(e) {
                    let t = '';
                    for (let n = r.length - 1; n >= 0; n--) for (; e >= r[n]; ) ((t += u[n]), (e -= r[n]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => o });
                var u = n(70);
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
                        const o = u.O.view.addModelObserver(e, n, r);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(o) : (this._views[n] = [o])))
                                : console.error("Can't add callback for model:", e),
                            o
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
                            const u = this._callbacks[n];
                            void 0 !== u && u(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const o = r;
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
            916: (e, t, n) => {
                'use strict';
                n.d(t, { Sw: () => o.Z, B0: () => a, ry: () => v });
                class u {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let u = e.target;
                                    do {
                                        if (u === t) return;
                                        u = u.parentNode;
                                    } while (u);
                                    n();
                                });
                            }));
                    }
                    static get instance() {
                        return (u.__instance || (u.__instance = new u()), u.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const n = e,
                            u = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== u)),
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
                u.__instance = void 0;
                const r = u;
                var o = n(358);
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
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(521),
                    _ = n(70);
                const E = ['args'];
                function F(e, t, n, u, r, o, s) {
                    try {
                        var a = e[o](s),
                            i = a.value;
                    } catch (e) {
                        return void n(e);
                    }
                    a.done ? t(i) : Promise.resolve(i).then(u, r);
                }
                const f = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    v = (function () {
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
                                    return new Promise(function (u, r) {
                                        var o = e.apply(t, n);
                                        function s(e) {
                                            F(o, u, r, s, a, 'next', e);
                                        }
                                        function a(e) {
                                            F(o, u, r, s, a, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    p = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        u,
                                        r = {},
                                        o = Object.keys(e);
                                    for (u = 0; u < o.length; u++) ((n = o[u]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, E);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((u = r),
                                              Object.entries(u).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, o));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var u;
                    },
                    g = () => p(a.CLOSE),
                    h = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var A = n(572);
                const C = r.instance,
                    b = {
                        DataTracker: o.Z,
                        ViewModel: A.Z,
                        ViewEventType: a,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: f,
                        sendMoveEvent: (e) => p(a.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => p(a.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            p(a.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, u, r = R.invalid('resId'), o) => {
                            const s = _.O.view.getViewGlobalPosition(),
                                i = n.getBoundingClientRect(),
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
                            p(a.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: u || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: f(E),
                                on: !0,
                                args: o,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => h(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, g);
                        },
                        handleViewEvent: p,
                        onBindingsReady: v,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(a.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(a.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(a.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const u in t)
                                if (Object.prototype.hasOwnProperty.call(t, u)) {
                                    const r = Object.prototype.toString.call(t[u]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[u];
                                        n[u] = [];
                                        for (let t = 0; t < r.length; t++) n[u].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[u] = e(t[u]))
                                            : (n[u] = t[u]);
                                }
                            return n;
                        },
                        ClickOutsideManager: C,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = b;
            },
            613: (e, t, n) => {
                'use strict';
                n.d(t, { Z5: () => u, cy: () => r });
                const u = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t, n = 2) => systemLocale.getRealFormat(e, t, n),
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
            761: (e, t, n) => {
                'use strict';
                var u = {};
                (n.r(u),
                    n.d(u, {
                        Area: () => G,
                        Bar: () => V,
                        DefaultScroll: () => U,
                        Direction: () => w,
                        defaultSettings: () => D,
                        useHorizontalScrollApi: () => S,
                    }));
                var r = {};
                (n.r(r), n.d(r, { Area: () => le, Bar: () => se, Default: () => ie, useVerticalScrollApi: () => $ }));
                n(368);
                var o = n(483),
                    s = n.n(o);
                let a;
                function i(e) {
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
                })(a || (a = {}));
                var l = n(363),
                    c = n.n(l);
                const d = {
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
                let m, _;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(m || (m = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(_ || (_ = {})));
                const E = ({
                        children: e,
                        size: t,
                        disabled: n,
                        mixClass: u,
                        onMouseEnter: r,
                        onMouseMove: o,
                        onMouseDown: _,
                        onMouseUp: E,
                        onMouseLeave: F,
                        onClick: f,
                        isFocused: v = !1,
                        type: p = m.primary,
                        soundHover: g = 'highlight',
                        soundClick: h = 'play',
                    }) => {
                        const A = (0, l.useRef)(null),
                            C = (0, l.useState)(v),
                            b = C[0],
                            B = C[1],
                            w = (0, l.useState)(!1),
                            D = w[0],
                            y = w[1];
                        return (
                            (0, l.useEffect)(() => {
                                function e(e) {
                                    b && null !== A.current && !A.current.contains(e.target) && B(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', e),
                                    () => {
                                        document.removeEventListener('mousedown', e);
                                    }
                                );
                            }, [b]),
                            (0, l.useEffect)(() => {
                                B(v);
                            }, [v]),
                            c().createElement(
                                'div',
                                {
                                    ref: A,
                                    className: s()(
                                        d.base,
                                        d[`base__${p}`],
                                        n && d.base__disabled,
                                        t && d[`base__${t}`],
                                        b && d.base__focus,
                                        D && d.base__highlightActive,
                                        u,
                                    ),
                                    onMouseEnter: function (e) {
                                        n || (null !== g && i(g), r && r(e));
                                    },
                                    onMouseMove: function (e) {
                                        o && o(e);
                                    },
                                    onMouseUp: function (e) {
                                        n || (E && E(e), y(!1));
                                    },
                                    onMouseDown: function (e) {
                                        if (n) return;
                                        const t = e.button === a.LEFT;
                                        (null !== h && t && i(h),
                                            _ && _(e),
                                            v && (n || (A.current && (A.current.focus(), B(!0)))),
                                            t && y(!0));
                                    },
                                    onMouseLeave: function (e) {
                                        n || (F && F(e), y(!1));
                                    },
                                    onClick: function (e) {
                                        n || (f && f(e));
                                    },
                                },
                                p !== m.ghost &&
                                    c().createElement(
                                        c().Fragment,
                                        null,
                                        c().createElement('div', { className: d.back }),
                                        c().createElement('span', { className: d.texture }),
                                    ),
                                c().createElement(
                                    'span',
                                    { className: s()(d.state, d.state__default) },
                                    c().createElement('span', { className: d.stateDisabled }),
                                    c().createElement('span', { className: d.stateHighlightHover }),
                                    c().createElement('span', { className: d.stateHighlightActive }),
                                ),
                                c().createElement(
                                    'span',
                                    { className: d.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    e,
                                ),
                            )
                        );
                    },
                    F = (e) => {
                        let t,
                            n = null;
                        return (
                            (n = requestAnimationFrame(() => {
                                n = requestAnimationFrame(() => {
                                    ((n = null), (t = e()));
                                });
                            })),
                            () => {
                                ('function' == typeof t && t(), null !== n && cancelAnimationFrame(n));
                            }
                        );
                    },
                    f = (e, t, n) => (n < e ? e : n > t ? t : n);
                var v = n(70);
                const p = [];
                function g(e) {
                    const t = (0, l.useRef)(e);
                    return (
                        (0, l.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, l.useCallback)((...e) => (0, t.current)(...e), p)
                    );
                }
                function h(e, t, n = []) {
                    const u = (0, l.useRef)(0),
                        r = (0, l.useCallback)(() => {
                            (window.clearInterval(u.current), (u.current = 0));
                        }, n || []);
                    (0, l.useEffect)(() => r, [r]);
                    const o = (null != n ? n : []).concat([t]);
                    return [
                        (0, l.useCallback)((n) => {
                            (0 !== u.current && r(), (u.current = window.setInterval(() => e(n, !0), t)), e(n, !1));
                        }, o),
                        r,
                    ];
                }
                function A(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return C(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return C(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var u = 0;
                        return function () {
                            return u >= e.length ? { done: !0 } : { done: !1, value: e[u++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function C(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, u = new Array(t); n < t; n++) u[n] = e[n];
                    return u;
                }
                function b(e, t, n) {
                    const u = (0, l.useMemo)(
                        () =>
                            (function (e, t, n, u) {
                                let r,
                                    o = !1,
                                    s = 0;
                                function a() {
                                    r && clearTimeout(r);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function d() {
                                        ((s = Date.now()), n.apply(l, i));
                                    }
                                    o ||
                                        (u && !r && d(),
                                        a(),
                                        void 0 === u && c > e
                                            ? d()
                                            : !0 !== t &&
                                              (r = setTimeout(
                                                  u
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : d,
                                                  void 0 === u ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((u = n), (n = t), (t = void 0)),
                                    (i.cancel = function () {
                                        (a(), (o = !0));
                                    }),
                                    i
                                );
                            })(n, e),
                        t,
                    );
                    return ((0, l.useEffect)(() => u.cancel, [u]), u);
                }
                var B = n(30);
                let w;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(w || (w = {}));
                const D = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    y = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: u,
                        getWrapperSize: r,
                        forceTriggerMouseMove: o,
                    }) => {
                        const s = (e, n) => {
                            const u = t(e),
                                r = u[0],
                                o = u[1];
                            return o <= r ? 0 : f(r, o, n);
                        };
                        return (a = {}) => {
                            const i = a.settings,
                                c = void 0 === i ? D : i,
                                d = (0, l.useRef)(null),
                                m = (0, l.useRef)(null),
                                _ = (0, l.useRef)(!1),
                                E = (() => {
                                    const e = (0, l.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        n = (e, n) => {
                                            t(e).set(n, n);
                                        },
                                        u = (e, n) => {
                                            t(e).delete(n);
                                        },
                                        r = (e, ...n) => {
                                            for (var u, r = A(t(e).values()); !(u = r()).done; ) (0, u.value)(...n);
                                        };
                                    return (0, l.useMemo)(() => ({ on: n, off: u, trigger: r }), []);
                                })(),
                                f = b(
                                    () => {
                                        o && o();
                                    },
                                    [],
                                    150,
                                ),
                                v = (0, B.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (n(t, e), E.trigger('change', e), o && _.current && f());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                p = v[0],
                                h = v[1],
                                C = (0, l.useCallback)(
                                    (e, t, n) => {
                                        var u;
                                        const r = p.scrollPosition.get(),
                                            o = (null != (u = p.scrollPosition.goal) ? u : 0) - r;
                                        return s(e, t * n + o + r);
                                    },
                                    [p.scrollPosition],
                                ),
                                w = (0, l.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const u = d.current;
                                        u &&
                                            h.start({
                                                scrollPosition: s(u, e),
                                                immediate: t,
                                                reset: n,
                                                config: c.animationConfig,
                                                from: { scrollPosition: s(u, p.scrollPosition.get()) },
                                            });
                                    },
                                    [h, c.animationConfig, p.scrollPosition],
                                ),
                                y = (0, l.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            n = m.current;
                                        if (!t || !n) return;
                                        const u = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, c.step),
                                            o = C(t, e, u);
                                        w(o);
                                    },
                                    [w, C, c.step],
                                ),
                                S = (0, l.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && y(u(e)),
                                            d.current && E.trigger('mouseWheel', e, p.scrollPosition, t(d.current)));
                                    },
                                    [p.scrollPosition, y, E],
                                ),
                                O = ((e, t = []) => {
                                    const n = (0, l.useRef)(),
                                        u = (0, l.useCallback)((...t) => {
                                            (n.current && n.current(), (n.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, l.useEffect)(
                                            () => () => {
                                                n.current && n.current();
                                            },
                                            [u],
                                        ),
                                        u
                                    );
                                })(
                                    () =>
                                        F(() => {
                                            const e = d.current;
                                            e &&
                                                (w(s(e, p.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [w, p.scrollPosition.goal],
                                ),
                                M = g(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = s(e, p.scrollPosition.goal);
                                    (t !== p.scrollPosition.goal && w(t, { immediate: !0 }),
                                        E.trigger('recalculateContent'));
                                });
                            ((0, l.useEffect)(
                                () => (
                                    window.addEventListener('resize', O),
                                    () => {
                                        window.removeEventListener('resize', O);
                                    }
                                ),
                                [O],
                            ),
                                (0, l.useEffect)(() => {
                                    const e = d.current;
                                    if (!e || !o) return;
                                    const t = () => {
                                            _.current = !0;
                                        },
                                        n = () => {
                                            _.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', t),
                                        e.addEventListener('mouseleave', n),
                                        () => {
                                            (e.removeEventListener('mouseenter', t),
                                                e.removeEventListener('mouseleave', n));
                                        }
                                    );
                                }, [d]));
                            return (0, l.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? r(m.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: S,
                                    applyScroll: w,
                                    applyStepTo: y,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: h,
                                    animationScroll: p,
                                    recalculateContent: M,
                                    events: { on: E.on, off: E.off },
                                }),
                                [p.scrollPosition, w, y, E.off, E.on, M, S, h, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    S = y({
                        getBounds: (e) => {
                            var t, n;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (n = e.parentElement) ? void 0 : n.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            var n;
                            e.style.transform = `translateX(-${0 | (null != (n = t.value.scrollPosition) ? n : 0)}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? w.Next : w.Prev),
                        forceTriggerMouseMove: v.O.view.forceTriggerMouseMove,
                    }),
                    O = 'HorizontalBar_base_49',
                    M = 'HorizontalBar_base__active_5e',
                    P = 'HorizontalBar_leftButton_5f',
                    k = 'HorizontalBar_rightButton_03',
                    T = 'HorizontalBar_track_0d',
                    x = 'HorizontalBar_thumb_fd',
                    L = 'HorizontalBar_rail_32',
                    N = 'disable',
                    I = { pending: !1, offset: 0 },
                    H = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    W = () => {},
                    z = (e, t) => Math.max(20, e.offsetWidth * t),
                    V = (0, l.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = H, onDrag: u = W }) => {
                        const r = (0, l.useRef)(null),
                            o = (0, l.useRef)(null),
                            a = (0, l.useRef)(null),
                            d = (0, l.useRef)(null),
                            m = (0, l.useRef)(null),
                            _ = e.stepTimeout || 100,
                            E = (0, l.useState)(I),
                            p = E[0],
                            A = E[1],
                            C = (0, l.useCallback)(
                                (e) => {
                                    (A(e),
                                        m.current &&
                                            u({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current }));
                                },
                                [u],
                            ),
                            b = () => {
                                const t = d.current,
                                    n = m.current,
                                    u = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(u && t && n && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, u / r),
                                    l = f(0, 1, s / (r - u)),
                                    c = (t.offsetWidth - z(t, i)) * l;
                                ((n.style.transform = `translateX(${0 | c}px)`),
                                    ((e) => {
                                        if (o.current && a.current && d.current && m.current) {
                                            if (0 === e)
                                                return (o.current.classList.add(N), void a.current.classList.remove(N));
                                            if (
                                                ((t = d.current),
                                                (n = m.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return (o.current.classList.remove(N), void a.current.classList.add(N));
                                            var t, n;
                                            (o.current.classList.remove(N), a.current.classList.remove(N));
                                        }
                                    })(c));
                            },
                            B = g(() => {
                                ((() => {
                                    const t = m.current,
                                        n = d.current,
                                        u = e.getWrapperSize(),
                                        o = e.getContainerSize();
                                    if (!(o && t && u && n)) return;
                                    const s = Math.min(1, u / o);
                                    ((t.style.width = `${z(n, s)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 !== s ? r.current.classList.add(M) : r.current.classList.remove(M)));
                                })(),
                                    b());
                            });
                        ((0, l.useEffect)(() => F(B)),
                            (0, l.useEffect)(
                                () =>
                                    F(() => {
                                        const t = () => {
                                            b();
                                        };
                                        let n = W;
                                        const u = () => {
                                            (n(), (n = F(B)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', B),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', u),
                                            () => {
                                                (n(),
                                                    e.events.off('recalculateContent', B),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', u));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, l.useEffect)(() => {
                                if (!p.pending) return;
                                const t = v.O.client.events.mouse.move(([t, n]) => {
                                        var r;
                                        const o = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!o || !s) return;
                                        const a = d.current,
                                            i = m.current;
                                        if (!a || !i) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const l = t.clientX - p.offset - a.getBoundingClientRect().x,
                                            c = (l / a.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(o, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            u({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: c }));
                                    }),
                                    n = v.O.client.events.mouse.up(() => {
                                        (t(), C(I));
                                    });
                                return () => {
                                    (t(), n());
                                };
                            }, [e, p.offset, p.pending, u, C]));
                        const D = h((t) => e.applyStepTo(t), _, [e]),
                            y = D[0],
                            S = D[1];
                        (0, l.useEffect)(
                            () => (
                                document.addEventListener('mouseup', S, !0),
                                () => document.removeEventListener('mouseup', S, !0)
                            ),
                            [S],
                        );
                        const R = (e) => {
                            e.target.classList.contains(N) || i('highlight');
                        };
                        return c().createElement(
                            'div',
                            { className: s()(O, t.base), ref: r, onWheel: e.handleMouseWheel },
                            c().createElement('div', {
                                className: s()(P, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(N) || 0 !== e.button || (i('play'), y(w.Next));
                                },
                                onMouseUp: S,
                                ref: o,
                                onMouseEnter: R,
                            }),
                            c().createElement(
                                'div',
                                {
                                    className: s()(T, t.track),
                                    onMouseDown: (t) => {
                                        const u = m.current;
                                        if (u && 0 === t.button)
                                            if ((i('play'), t.target === u))
                                                C({ pending: !0, offset: t.screenX - u.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const u = m.current,
                                                        r = e.contentRef.current;
                                                    if (!u || !r) return;
                                                    const o = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + o * t);
                                                })(t.screenX > u.getBoundingClientRect().x ? w.Prev : w.Next);
                                            }
                                    },
                                    ref: d,
                                    onMouseEnter: R,
                                },
                                c().createElement('div', { ref: m, className: s()(x, t.thumb) }),
                                c().createElement('div', { className: s()(L, t.rail) }),
                            ),
                            c().createElement('div', {
                                className: s()(k, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(N) || 0 !== e.button || (i('play'), y(w.Prev));
                                },
                                onMouseUp: S,
                                ref: a,
                                onMouseEnter: R,
                            }),
                        );
                    }),
                    j = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    U = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: u,
                        areaClassName: r,
                        classNames: o,
                        scrollClassName: a,
                        getStepByRailClick: i,
                        onDrag: d,
                    }) => {
                        const m = (0, l.useMemo)(() => {
                                const e = u || {};
                                return Object.assign({}, e, { base: s()(j.base, e.base) });
                            }, [u]),
                            _ = (0, l.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return c().createElement(
                            'div',
                            { className: s()(j.defaultScroll, n), onWheel: t.handleMouseWheel },
                            c().createElement(
                                'div',
                                { className: s()(j.defaultScrollArea, r) },
                                c().createElement(G, { className: a, api: _, classNames: o }, e),
                            ),
                            c().createElement(V, { getStepByRailClick: i, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    G = ({ api: e, className: t, classNames: n, children: u }) => (
                        (0, l.useEffect)(() => F(e.recalculateContent)),
                        c().createElement(
                            'div',
                            { className: s()(j.base, t) },
                            c().createElement(
                                'div',
                                {
                                    className: s()(j.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                c().createElement(
                                    'div',
                                    { className: s()(j.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    u,
                                ),
                            ),
                        )
                    );
                ((G.Bar = V), (G.Default = U));
                const $ = y({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? w.Next : w.Prev),
                    }),
                    q = 'VerticalBar_base_f3',
                    K = 'VerticalBar_base__active_72',
                    Y = 'VerticalBar_topButton_d7',
                    X = 'VerticalBar_bottomButton_06',
                    Z = 'VerticalBar_track_df',
                    Q = 'VerticalBar_thumb_32',
                    J = 'VerticalBar_rail_43',
                    ee = 'disable',
                    te = () => {},
                    ne = { pending: !1, offset: 0 },
                    ue = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    re = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    oe = (e, t) => Math.max(20, e.offsetHeight * t),
                    se = (0, l.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = ue, onDrag: u = te }) => {
                        const r = (0, l.useRef)(null),
                            o = (0, l.useRef)(null),
                            a = (0, l.useRef)(null),
                            d = (0, l.useRef)(null),
                            m = (0, l.useRef)(null),
                            _ = e.stepTimeout || 100,
                            E = (0, l.useState)(ne),
                            p = E[0],
                            A = E[1],
                            C = (0, l.useCallback)(
                                (e) => {
                                    (A(e),
                                        m.current &&
                                            u({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current }));
                                },
                                [u],
                            ),
                            b = g(() => {
                                const t = m.current,
                                    n = d.current,
                                    u = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(u && o && t && n)) return;
                                const s = Math.min(1, u / o);
                                return (
                                    (t.style.height = `${oe(n, s)}px`),
                                    (t.style.display = 'flex'),
                                    r.current && (1 !== s ? r.current.classList.add(K) : r.current.classList.remove(K)),
                                    s
                                );
                            }),
                            B = g(() => {
                                const t = d.current,
                                    n = m.current,
                                    u = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(u && t && n && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, u / r),
                                    l = f(0, 1, s / (r - u)),
                                    c = (t.offsetHeight - oe(t, i)) * l;
                                ((n.style.transform = `translateY(${0 | c}px)`),
                                    ((e) => {
                                        if (o.current && a.current && d.current && m.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    o.current.classList.add(ee),
                                                    void a.current.classList.remove(ee)
                                                );
                                            if (
                                                ((t = d.current),
                                                (n = m.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(ee),
                                                    void a.current.classList.add(ee)
                                                );
                                            var t, n;
                                            (o.current.classList.remove(ee), a.current.classList.remove(ee));
                                        }
                                    })(c));
                            }),
                            D = g(() => {
                                re(e, () => {
                                    (b(), B());
                                });
                            });
                        ((0, l.useEffect)(() => F(D)),
                            (0, l.useEffect)(() => {
                                const t = () => {
                                    re(e, () => {
                                        B();
                                    });
                                };
                                let n = te;
                                const u = () => {
                                    (n(), (n = F(D)));
                                };
                                return (
                                    e.events.on('recalculateContent', D),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', u),
                                    () => {
                                        (n(),
                                            e.events.off('recalculateContent', D),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', u));
                                    }
                                );
                            }, [e]),
                            (0, l.useEffect)(() => {
                                if (!p.pending) return;
                                const t = v.O.client.events.mouse.up(() => {
                                        C(ne);
                                    }),
                                    n = v.O.client.events.mouse.move(([t]) => {
                                        re(e, (n) => {
                                            const r = d.current,
                                                o = m.current,
                                                s = e.getContainerSize();
                                            if (!r || !o || !s) return;
                                            const a = t.screenY - p.offset - r.getBoundingClientRect().y,
                                                i = (a / r.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                u({ type: 'dragging', thumb: o, thumbOffset: a, contentOffset: i }));
                                        });
                                    });
                                return () => {
                                    (t(), n());
                                };
                            }, [e, p.offset, p.pending, u, C]));
                        const y = h((t) => e.applyStepTo(t), _, [e]),
                            S = y[0],
                            O = y[1];
                        (0, l.useEffect)(
                            () => (
                                document.addEventListener('mouseup', O, !0),
                                () => document.removeEventListener('mouseup', O, !0)
                            ),
                            [O],
                        );
                        const M = (e) => {
                            e.target.classList.contains(ee) || i('highlight');
                        };
                        return c().createElement(
                            'div',
                            { className: s()(q, t.base), ref: r, onWheel: e.handleMouseWheel },
                            c().createElement('div', {
                                className: s()(Y, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ee) || 0 !== e.button || (i('play'), S(w.Next));
                                },
                                ref: o,
                                onMouseEnter: M,
                            }),
                            c().createElement(
                                'div',
                                {
                                    className: s()(Z, t.track),
                                    onMouseDown: (t) => {
                                        const u = m.current;
                                        if (u && 0 === t.button)
                                            if ((i('play'), t.target === u))
                                                C({ pending: !0, offset: t.screenY - u.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    m.current &&
                                                        re(e, (u) => {
                                                            if (!u) return;
                                                            const r = n(e),
                                                                o = e.clampPosition(u, u.scrollTop + r * t);
                                                            e.applyScroll(o);
                                                        });
                                                })(t.screenY > u.getBoundingClientRect().y ? w.Prev : w.Next);
                                            }
                                    },
                                    ref: d,
                                    onMouseEnter: M,
                                },
                                c().createElement('div', { ref: m, className: s()(Q, t.thumb) }),
                                c().createElement('div', { className: s()(J, t.rail) }),
                            ),
                            c().createElement('div', {
                                className: s()(X, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ee) || 0 !== e.button || (i('play'), S(w.Prev));
                                },
                                onMouseUp: O,
                                ref: a,
                                onMouseEnter: M,
                            }),
                        );
                    }),
                    ae = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    ie = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: u,
                        areaClassName: r,
                        scrollClassName: o,
                        scrollClassNames: a,
                        getStepByRailClick: i,
                        onDrag: d,
                    }) => {
                        const m = (0, l.useMemo)(() => {
                                const e = u || {};
                                return Object.assign({}, e, { base: s()(ae.base, e.base) });
                            }, [u]),
                            _ = (0, l.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return c().createElement(
                            'div',
                            { className: s()(ae.defaultScroll, n), onWheel: t.handleMouseWheel },
                            c().createElement(
                                'div',
                                { className: s()(ae.area, r) },
                                c().createElement(le, { className: o, classNames: a, api: _ }, e),
                            ),
                            c().createElement(se, { getStepByRailClick: i, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    le = ({ className: e, classNames: t, children: n, api: u }) => (
                        (0, l.useEffect)(() => F(u.recalculateContent)),
                        c().createElement(
                            'div',
                            { className: s()(ae.base, e), ref: u.wrapperRef, onWheel: u.handleMouseWheel },
                            c().createElement(
                                'div',
                                { className: s()(ae.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                n,
                            ),
                        )
                    );
                le.Default = ie;
                const ce = { Vertical: r, Horizontal: u },
                    de = (e = 1) => {
                        const t = new Error().stack;
                        let n,
                            u = R.invalid('resId'),
                            r = '';
                        var o;
                        t &&
                            ((r = (null == (o = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : o[0]) || ''),
                            (n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== n &&
                                window.subViews[n] &&
                                (u = window.subViews[n].id));
                        return { callerUrl: r, caller: n, stack: t, resId: u };
                    };
                var me = n(916);
                const _e = [
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
                const Fe = (e, t, n = {}, u = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: me.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: u,
                                },
                                n,
                            ),
                        );
                    },
                    fe = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            u = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            a = e.onClick,
                            i = e.ignoreShowDelay,
                            c = void 0 !== i && i,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            _ = e.decoratorId,
                            E = void 0 === _ ? 0 : _,
                            F = e.isEnabled,
                            f = void 0 === F || F,
                            v = e.targetId,
                            p = void 0 === v ? 0 : v,
                            g = e.onShow,
                            h = e.onHide,
                            A = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    u,
                                    r = {},
                                    o = Object.keys(e);
                                for (u = 0; u < o.length; u++) ((n = o[u]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, _e);
                        const C = (0, l.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, l.useMemo)(() => p || de().resId, [p]),
                            B = (0, l.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (Fe(n, E, { isMouseEvent: !0, on: !0, arguments: Ee(u) }, b),
                                    g && g(),
                                    (C.current.isVisible = !0));
                            }, [n, E, u, b, g]),
                            w = (0, l.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        Fe(n, E, { on: !1 }, b),
                                        C.current.isVisible && h && h(),
                                        (C.current.isVisible = !1));
                                }
                            }, [n, E, b, h]),
                            D = (0, l.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(C.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        ((0, l.useEffect)(() => {
                            const e = C.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', D, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', D, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, l.useEffect)(() => {
                                !1 === f && w();
                            }, [f, w]),
                            (0, l.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        (window.removeEventListener('mouseleave', w), w());
                                    }
                                ),
                                [w],
                            ));
                        return f
                            ? (0, l.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(C.current.timeoutId),
                                                      (C.current.timeoutId = window.setTimeout(B, c ? 100 : 400)),
                                                      r && r(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (w(), null == o || o(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === m && w(), null == a || a(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === m && w(), null == s || s(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      A,
                                  ),
                              )
                            : t;
                        var y;
                    },
                    ve = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function pe() {
                    return (
                        (pe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var u in n) Object.prototype.hasOwnProperty.call(n, u) && (e[u] = n[u]);
                                }
                                return e;
                            }),
                        pe.apply(this, arguments)
                    );
                }
                const ge = R.views.common.tooltip_window.simple_tooltip_content,
                    he = (e) => {
                        let t = e.children,
                            n = e.body,
                            u = e.header,
                            r = e.note,
                            o = e.alert,
                            s = e.args,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    u,
                                    r = {},
                                    o = Object.keys(e);
                                for (u = 0; u < o.length; u++) ((n = o[u]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, ve);
                        const i = (0, l.useMemo)(() => {
                            const e = Object.assign({}, s, { body: n, header: u, note: r, alert: o });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [o, n, u, r, s]);
                        return c().createElement(
                            fe,
                            pe(
                                {
                                    contentId:
                                        ((d = null == s ? void 0 : s.hasHtmlContent),
                                        d ? ge.SimpleTooltipHtmlContent('resId') : ge.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: i,
                                },
                                a,
                            ),
                            t,
                        );
                        var d;
                    },
                    Ae = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    Ce = (e) => {
                        const t = (0, l.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    be = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    Be = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    we = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const u = Ae(`${e}.${n}`, window);
                                return be(u) ? t(e, n, u) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    De = (e) => {
                        const t = ((e) => {
                                const t = de(),
                                    n = t.caller,
                                    u = t.resId,
                                    r = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: r, modelPath: Be(r, e || ''), resId: u };
                            })(),
                            n = t.modelPrefix,
                            u = e.split('.');
                        if (u.length > 0) {
                            const e = [u[0]];
                            return (
                                u.reduce((t, u) => {
                                    const r = Ae(Be(n, `${t}.${u}`), window);
                                    return be(r) ? (e.push(r.id), `${t}.${u}.value`) : (e.push(u), `${t}.${u}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    };
                const ye = () => (window.injected || (window.injected = new Map()), window.injected);
                const Se = me.Sw.instance;
                let Oe;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(Oe || (Oe = {}));
                const Me = (e = 'model', t = Oe.Deep) => {
                    const n = (0, l.useState)(0),
                        u = (n[0], n[1]),
                        r = (0, l.useMemo)(() => de(), []),
                        o = r.callerUrl,
                        s = r.caller,
                        a = r.resId,
                        i = (0, l.useMemo)(() => {
                            const t = (function (e) {
                                return ye().has(e);
                            })(o.replace('.js', '.html'));
                            return window.__feature && window.__feature !== s && !t ? `subViews.${s}.${e}` : e;
                        }, [o, s, e]),
                        c = (0, l.useState)(() =>
                            ((e) => {
                                const t = Ae(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return be(t) ? t.value : t;
                            })(we(i)),
                        ),
                        d = c[0],
                        m = c[1],
                        _ = (0, l.useRef)(-1);
                    return (
                        Ce(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? Oe.Deep : Oe.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== Oe.None)
                            ) {
                                const n = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === Oe.Deep
                                            ? (e === d && u((e) => e + 1), m(e))
                                            : m(Object.assign([], e));
                                    },
                                    r = De(e);
                                _.current = Se.addCallback(r, n, a, t === Oe.Deep);
                            }
                        }),
                        (0, l.useEffect)(() => {
                            if (t !== Oe.None)
                                return () => {
                                    Se.removeCallback(_.current, a);
                                };
                        }, [a, t]),
                        d
                    );
                };
                var Pe = n(533),
                    ke = n.n(Pe);
                const Re = (e) => `#${e}`,
                    Te = 'Chat_base_61',
                    xe = 'Chat_content_5c',
                    Le = 'Chat_channelNotification_3b',
                    Ne = 'Chat_scrollContainer_db',
                    Ie = 'Chat_messages_fa',
                    He = 'Chat_messages__selectable_a7',
                    We = 'Chat_footer_5c',
                    ze = 'Chat_input_b4',
                    Ve = 'Chat_sendButtonContainer_32',
                    je = 'Chat_enterButtonContainer_99',
                    Ue = 'Chat_enterImage_97',
                    Ge = 'MessageText_emoji_6b';
                function $e(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return qe(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return qe(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var u = 0;
                        return function () {
                            return u >= e.length ? { done: !0 } : { done: !1, value: e[u++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function qe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, u = new Array(t); n < t; n++) u[n] = e[n];
                    return u;
                }
                var Ke;
                !(function (e) {
                    ((e[(e.text = 0)] = 'text'), (e[(e.element = 1)] = 'element'));
                })(Ke || (Ke = {}));
                const Ye = [
                        [':)', 'smiley_happy'],
                        ['=)', 'smiley_happy'],
                        [':-)', 'smiley_happy'],
                        [':\\', 'smiley_hmm'],
                        ['=\\', 'smiley_hmm'],
                        [':-\\', 'smiley_hmm'],
                        ['=/', 'smiley_hmm'],
                        [':-/', 'smiley_hmm'],
                        ['>:|', 'smiley_mad'],
                        ['>=|', 'smiley_mad'],
                        ['>:-|', 'smiley_mad'],
                        ['>:O', 'smiley_madah'],
                        ['>=O', 'smiley_madah'],
                        ['>:-O', 'smiley_madah'],
                        ['>:o', 'smiley_madah'],
                        ['>=o', 'smiley_madah'],
                        ['>:-o', 'smiley_madah'],
                        ['>:0', 'smiley_madah'],
                        ['>=0', 'smiley_madah'],
                        ['>:-0', 'smiley_madah'],
                        [':|', 'smiley_norm'],
                        ['=|', 'smiley_norm'],
                        [':-|', 'smiley_norm'],
                        [':O', 'smiley_oh'],
                        ['=O', 'smiley_oh'],
                        [':-O', 'smiley_oh'],
                        [':o', 'smiley_oh'],
                        ['=o', 'smiley_oh'],
                        [':-o', 'smiley_oh'],
                        ['=0', 'smiley_oh'],
                        [':-0', 'smiley_oh'],
                        [':(', 'smiley_sad'],
                        ['=(', 'smiley_sad'],
                        [':-(', 'smiley_sad'],
                        [':P', 'smiley_tongue'],
                        ['=P', 'smiley_tongue'],
                        [':-P', 'smiley_tongue'],
                        [':*', 'smiley_kiss'],
                        ['=*', 'smiley_kiss'],
                        [':-*', 'smiley_kiss'],
                        [';)', 'smiley_wink'],
                        [';-)', 'smiley_wink'],
                    ],
                    Xe = (e) => R.images.gui.maps.icons.emoji.$dyn(e),
                    Ze = (e, [t, n]) =>
                        e.split(new RegExp(t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'g')).reduce((e, t, u, r) => {
                            var o;
                            return (
                                e.push({ type: Ke.text, content: t }),
                                r.length !== u + 1 &&
                                    e.push({
                                        type: Ke.element,
                                        content: c().createElement('div', {
                                            style: ((o = Xe(n)), { backgroundImage: `url('${o}')` }),
                                            className: Ge,
                                        }),
                                    }),
                                e
                            );
                        }, []),
                    Qe = (e, t, n) => (n % 2 ? (e[e.length - 1] += t) : e.push(t), e),
                    Je = (e, t) => {
                        const n = [];
                        return (
                            e.forEach((e) =>
                                e.type === Ke.element
                                    ? n.push(e.content)
                                    : n.push(
                                          ...((e, t) => {
                                              const n = { color: t };
                                              return e
                                                  .split(
                                                      /([\0-@\[-`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u036F\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482-\u0489\u0530\u0557\u0558\u055A-\u055F\u0589-\u05CF\u05EB-\u05EE\u05F3-\u061F\u064B-\u066D\u0670\u06D4\u06D6-\u06E4\u06E7-\u06ED\u06F0-\u06F9\u06FD\u06FE\u0700-\u070F\u0711\u0730-\u074C\u07A6-\u07B0\u07B2-\u07C9\u07EB-\u07F3\u07F6-\u07F9\u07FB-\u07FF\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u083F\u0859-\u085F\u086B-\u086F\u0888\u088F-\u089F\u08CA-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0970\u0981-\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA-\u09BC\u09BE-\u09CD\u09CF-\u09DB\u09DE\u09E2-\u09EF\u09F2-\u09FB\u09FD-\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A-\u0A58\u0A5D\u0A5F-\u0A71\u0A75-\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA-\u0ABC\u0ABE-\u0ACF\u0AD1-\u0ADF\u0AE2-\u0AF8\u0AFA-\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A-\u0B3C\u0B3E-\u0B5B\u0B5E\u0B62-\u0B70\u0B72-\u0B82\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BCF\u0BD1-\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C3E-\u0C57\u0C5B\u0C5C\u0C5E\u0C5F\u0C62-\u0C7F\u0C81-\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA-\u0CBC\u0CBE-\u0CDC\u0CDF\u0CE2-\u0CF0\u0CF3-\u0D03\u0D0D\u0D11\u0D3B\u0D3C\u0D3E-\u0D4D\u0D4F-\u0D53\u0D57-\u0D5E\u0D62-\u0D79\u0D80-\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0E00\u0E31\u0E34-\u0E3F\u0E47-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EB1\u0EB4-\u0EBC\u0EBE\u0EBF\u0EC5\u0EC7-\u0EDB\u0EE0-\u0EFF\u0F01-\u0F3F\u0F48\u0F6D-\u0F87\u0F8D-\u0FFF\u102B-\u103E\u1040-\u104F\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16F0\u16F9-\u16FF\u1712-\u171E\u1732-\u173F\u1752-\u175F\u176D\u1771-\u177F\u17B4-\u17D6\u17D8-\u17DB\u17DD-\u181F\u1879-\u187F\u1885\u1886\u18A9\u18AB-\u18AF\u18F6-\u18FF\u191F-\u194F\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19FF\u1A17-\u1A1F\u1A55-\u1AA6\u1AA8-\u1B04\u1B34-\u1B44\u1B4D-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BFF\u1C24-\u1C4C\u1C50-\u1C59\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1CFB-\u1CFF\u1DC0-\u1DFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u2182\u2185-\u2BFF\u2CE5-\u2CEA\u2CEF-\u2CF1\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7F\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF-\u2E2E\u2E30-\u3004\u3007-\u3030\u3036-\u303A\u303D-\u3040\u3097-\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA620-\uA629\uA62C-\uA63F\uA66F-\uA67E\uA69E\uA69F\uA6E6-\uA716\uA720\uA721\uA789\uA78A\uA7CB-\uA7CF\uA7D2\uA7D4\uA7DA-\uA7F1\uA802\uA806\uA80B\uA823-\uA83F\uA874-\uA881\uA8B4-\uA8F1\uA8F8-\uA8FA\uA8FC\uA8FF-\uA909\uA926-\uA92F\uA947-\uA95F\uA97D-\uA983\uA9B3-\uA9CE\uA9D0-\uA9DF\uA9E5\uA9F0-\uA9F9\uA9FF\uAA29-\uAA3F\uAA43\uAA4C-\uAA5F\uAA77-\uAA79\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAC3-\uAADA\uAADE\uAADF\uAAEB-\uAAF1\uAAF5-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABE3-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB1E\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFE6F\uFE75\uFEFD-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF\u{1000C}\u{10027}\u{1003B}\u{1003E}\u{1004E}\u{1004F}\u{1005E}-\u{1007F}\u{100FB}-\u{1027F}\u{1029D}-\u{1029F}\u{102D1}-\u{102FF}\u{10320}-\u{1032C}\u{10341}\u{1034A}-\u{1034F}\u{10376}-\u{1037F}\u{1039E}\u{1039F}\u{103C4}-\u{103C7}\u{103D0}-\u{103FF}\u{1049E}-\u{104AF}\u{104D4}-\u{104D7}\u{104FC}-\u{104FF}\u{10528}-\u{1052F}\u{10564}-\u{1056F}\u{1057B}\u{1058B}\u{10593}\u{10596}\u{105A2}\u{105B2}\u{105BA}\u{105BD}-\u{105FF}\u{10737}-\u{1073F}\u{10756}-\u{1075F}\u{10768}-\u{1077F}\u{10786}\u{107B1}\u{107BB}-\u{107FF}\u{10806}\u{10807}\u{10809}\u{10836}\u{10839}-\u{1083B}\u{1083D}\u{1083E}\u{10856}-\u{1085F}\u{10877}-\u{1087F}\u{1089F}-\u{108DF}\u{108F3}\u{108F6}-\u{108FF}\u{10916}-\u{1091F}\u{1093A}-\u{1097F}\u{109B8}-\u{109BD}\u{109C0}-\u{109FF}\u{10A01}-\u{10A0F}\u{10A14}\u{10A18}\u{10A36}-\u{10A5F}\u{10A7D}-\u{10A7F}\u{10A9D}-\u{10ABF}\u{10AC8}\u{10AE5}-\u{10AFF}\u{10B36}-\u{10B3F}\u{10B56}-\u{10B5F}\u{10B73}-\u{10B7F}\u{10B92}-\u{10BFF}\u{10C49}-\u{10C7F}\u{10CB3}-\u{10CBF}\u{10CF3}-\u{10CFF}\u{10D24}-\u{10E7F}\u{10EAA}-\u{10EAF}\u{10EB2}-\u{10EFF}\u{10F1D}-\u{10F26}\u{10F28}-\u{10F2F}\u{10F46}-\u{10F6F}\u{10F82}-\u{10FAF}\u{10FC5}-\u{10FDF}\u{10FF7}-\u{11002}\u{11038}-\u{11070}\u{11073}\u{11074}\u{11076}-\u{11082}\u{110B0}-\u{110CF}\u{110E9}-\u{11102}\u{11127}-\u{11143}\u{11145}\u{11146}\u{11148}-\u{1114F}\u{11173}-\u{11175}\u{11177}-\u{11182}\u{111B3}-\u{111C0}\u{111C5}-\u{111D9}\u{111DB}\u{111DD}-\u{111FF}\u{11212}\u{1122C}-\u{1127F}\u{11287}\u{11289}\u{1128E}\u{1129E}\u{112A9}-\u{112AF}\u{112DF}-\u{11304}\u{1130D}\u{1130E}\u{11311}\u{11312}\u{11329}\u{11331}\u{11334}\u{1133A}-\u{1133C}\u{1133E}-\u{1134F}\u{11351}-\u{1135C}\u{11362}-\u{113FF}\u{11435}-\u{11446}\u{1144B}-\u{1145E}\u{11462}-\u{1147F}\u{114B0}-\u{114C3}\u{114C6}\u{114C8}-\u{1157F}\u{115AF}-\u{115D7}\u{115DC}-\u{115FF}\u{11630}-\u{11643}\u{11645}-\u{1167F}\u{116AB}-\u{116B7}\u{116B9}-\u{116FF}\u{1171B}-\u{1173F}\u{11747}-\u{117FF}\u{1182C}-\u{1189F}\u{118E0}-\u{118FE}\u{11907}\u{11908}\u{1190A}\u{1190B}\u{11914}\u{11917}\u{11930}-\u{1193E}\u{11940}\u{11942}-\u{1199F}\u{119A8}\u{119A9}\u{119D1}-\u{119E0}\u{119E2}\u{119E4}-\u{119FF}\u{11A01}-\u{11A0A}\u{11A33}-\u{11A39}\u{11A3B}-\u{11A4F}\u{11A51}-\u{11A5B}\u{11A8A}-\u{11A9C}\u{11A9E}-\u{11AAF}\u{11AF9}-\u{11BFF}\u{11C09}\u{11C2F}-\u{11C3F}\u{11C41}-\u{11C71}\u{11C90}-\u{11CFF}\u{11D07}\u{11D0A}\u{11D31}-\u{11D45}\u{11D47}-\u{11D5F}\u{11D66}\u{11D69}\u{11D8A}-\u{11D97}\u{11D99}-\u{11EDF}\u{11EF3}-\u{11FAF}\u{11FB1}-\u{11FFF}\u{1239A}-\u{1247F}\u{12544}-\u{12F8F}\u{12FF1}-\u{12FFF}\u{1342F}-\u{143FF}\u{14647}-\u{167FF}\u{16A39}-\u{16A3F}\u{16A5F}-\u{16A6F}\u{16ABF}-\u{16ACF}\u{16AEE}-\u{16AFF}\u{16B30}-\u{16B3F}\u{16B44}-\u{16B62}\u{16B78}-\u{16B7C}\u{16B90}-\u{16E3F}\u{16E80}-\u{16EFF}\u{16F4B}-\u{16F4F}\u{16F51}-\u{16F92}\u{16FA0}-\u{16FDF}\u{16FE2}\u{16FE4}-\u{16FFF}\u{187F8}-\u{187FF}\u{18CD6}-\u{18CFF}\u{18D09}-\u{1AFEF}\u{1AFF4}\u{1AFFC}\u{1AFFF}\u{1B123}-\u{1B14F}\u{1B153}-\u{1B163}\u{1B168}-\u{1B16F}\u{1B2FC}-\u{1BBFF}\u{1BC6B}-\u{1BC6F}\u{1BC7D}-\u{1BC7F}\u{1BC89}-\u{1BC8F}\u{1BC9A}-\u{1D3FF}\u{1D455}\u{1D49D}\u{1D4A0}\u{1D4A1}\u{1D4A3}\u{1D4A4}\u{1D4A7}\u{1D4A8}\u{1D4AD}\u{1D4BA}\u{1D4BC}\u{1D4C4}\u{1D506}\u{1D50B}\u{1D50C}\u{1D515}\u{1D51D}\u{1D53A}\u{1D53F}\u{1D545}\u{1D547}-\u{1D549}\u{1D551}\u{1D6A6}\u{1D6A7}\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u{1D7CC}-\u{1DEFF}\u{1DF1F}-\u{1E0FF}\u{1E12D}-\u{1E136}\u{1E13E}-\u{1E14D}\u{1E14F}-\u{1E28F}\u{1E2AE}-\u{1E2BF}\u{1E2EC}-\u{1E7DF}\u{1E7E7}\u{1E7EC}\u{1E7EF}\u{1E7FF}\u{1E8C5}-\u{1E8FF}\u{1E944}-\u{1E94A}\u{1E94C}-\u{1EDFF}\u{1EE04}\u{1EE20}\u{1EE23}\u{1EE25}\u{1EE26}\u{1EE28}\u{1EE33}\u{1EE38}\u{1EE3A}\u{1EE3C}-\u{1EE41}\u{1EE43}-\u{1EE46}\u{1EE48}\u{1EE4A}\u{1EE4C}\u{1EE50}\u{1EE53}\u{1EE55}\u{1EE56}\u{1EE58}\u{1EE5A}\u{1EE5C}\u{1EE5E}\u{1EE60}\u{1EE63}\u{1EE65}\u{1EE66}\u{1EE6B}\u{1EE73}\u{1EE78}\u{1EE7D}\u{1EE7F}\u{1EE8A}\u{1EE9C}-\u{1EEA0}\u{1EEA4}\u{1EEAA}\u{1EEBC}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}])/gu,
                                                  )
                                                  .reduce(Qe, [])
                                                  .map((e, t) => c().createElement('div', { style: n, key: t }, e));
                                          })(e.content, t),
                                      ),
                            ),
                            n
                        );
                    },
                    et = ({ text: e, color: t }) => {
                        const n = (0, l.useMemo)(
                                () =>
                                    ((e) => {
                                        let t = [{ type: Ke.text, content: e }];
                                        for (var n, u = $e(Ye); !(n = u()).done; ) {
                                            const e = n.value,
                                                u = [];
                                            for (var r, o = $e(t); !(r = o()).done; ) {
                                                const t = r.value;
                                                t.type === Ke.text ? u.push(Ze(t.content, e)) : u.push(t);
                                            }
                                            t = u.flat();
                                        }
                                        return t;
                                    })(e),
                                [e],
                            ),
                            u = (0, l.useMemo)(() => Je(n, t), [t, n]);
                        return c().createElement(
                            c().Fragment,
                            null,
                            u.map((e, t) => c().createElement(l.Fragment, { key: t }, e)),
                        );
                    },
                    tt = ({ part: e }) => {
                        const t = (0, l.useMemo)(() => ({ color: Re(e.color) }), [e]);
                        return c().createElement('div', { style: t }, e.text);
                    },
                    nt = 'Message_base_bf',
                    ut = ({ playerName: e, timeStamp: t, text: n }) => {
                        const u = (0, l.useMemo)(() => Re(n.color), [n.color]);
                        return c().createElement(
                            'div',
                            { className: nt },
                            c().createElement(tt, { part: e }),
                            ' ',
                            c().createElement(tt, { part: t }),
                            c().createElement(et, { text: n.text, color: u }),
                            '\n',
                        );
                    };
                function rt() {
                    return (
                        (rt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var u in n) Object.prototype.hasOwnProperty.call(n, u) && (e[u] = n[u]);
                                }
                                return e;
                            }),
                        rt.apply(this, arguments)
                    );
                }
                const ot = () => {
                    const e = Me(),
                        t = e.onSend,
                        n = e.canClearInput,
                        u = e.onInputCleared,
                        r = Me('model.headerExtraInfo'),
                        o = r.text,
                        s = r.color,
                        a = Me('model.messages'),
                        i = (0, l.useRef)(null),
                        d = (0, l.useRef)(null),
                        f = $(),
                        v = (0, l.useRef)(null),
                        p = (0, l.useState)(''),
                        g = p[0],
                        h = p[1],
                        A = (0, l.useCallback)(() => {
                            if (!i.current || !d.current) return;
                            const e = d.current.scrollHeight,
                                t = i.current.scrollHeight - e;
                            f.applyScroll(t);
                        }, [f]);
                    (0, l.useEffect)(() => F(() => F(A)), [a.length, A]);
                    const C = (0, l.useCallback)(() => {
                        v.current && '' !== v.current.value && n && ((v.current.value = ''), u(), h(''));
                    }, [n, u]);
                    (0, l.useEffect)(() => C(), [n, C]);
                    const b = (0, l.useCallback)(() => {
                            (t({ message: g }), C());
                        }, [C, g, t]),
                        B = (0, l.useCallback)(() => {
                            h(v.current ? v.current.value : '');
                        }, [v]),
                        w = (0, l.useCallback)(
                            (e) => {
                                'Enter' === e.key && b();
                            },
                            [b],
                        ),
                        D = a.length
                            ? c().createElement(
                                  'div',
                                  { className: Ne, ref: d },
                                  c().createElement(
                                      ce.Vertical.Area.Default,
                                      {
                                          onDrag: (e) => {
                                              var t;
                                              'dragStart' === e.type &&
                                                  (null == (t = i.current) || t.classList.remove(He));
                                          },
                                          api: f,
                                      },
                                      c().createElement(
                                          'div',
                                          {
                                              ref: i,
                                              className: Ie,
                                              onMouseDown: () => {
                                                  var e;
                                                  null == (e = i.current) || e.classList.add(He);
                                              },
                                          },
                                          a.map((e) => c().createElement(ut, rt({}, e.value, { key: e.value.key }))),
                                      ),
                                  ),
                              )
                            : c().createElement(
                                  c().Fragment,
                                  null,
                                  c().createElement(
                                      'span',
                                      { className: Le },
                                      R.strings.platoon.members.chat.chatName(),
                                  ),
                                  c().createElement(
                                      'div',
                                      { className: Le },
                                      c().createElement(et, { text: o, color: Re(s) }),
                                  ),
                              );
                    return c().createElement(
                        'div',
                        { className: Te },
                        c().createElement('div', { className: xe }, D),
                        c().createElement(
                            'div',
                            { className: We },
                            c().createElement('input', {
                                onInput: B,
                                onKeyUp: w,
                                ref: v,
                                required: !0,
                                className: ze,
                                minLength: 1,
                                maxLength: 255,
                                type: 'text',
                                id: 'name',
                                name: 'name',
                            }),
                            c().createElement(
                                he,
                                {
                                    isEnabled: !0,
                                    header: R.strings.platoon.members.chat.sendMessage.header(),
                                    body: R.strings.platoon.members.chat.sendMessage.body(),
                                },
                                c().createElement(
                                    'div',
                                    { className: Ve },
                                    c().createElement(
                                        E,
                                        { size: _.small, type: m.secondary, onClick: b, mixClass: je },
                                        c().createElement('div', { className: Ue }),
                                    ),
                                ),
                            ),
                        ),
                    );
                };
                engine.whenReady.then(() => {
                    ke().render(c().createElement(ot, null), document.getElementById('root'));
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
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](n, n.exports, __webpack_require__), n.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, u) => {
            if (!t) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, n, u] = deferred[i], o = !0, s = 0; s < t.length; s++)
                        (!1 & u || r >= u) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((o = !1), u < r && (r = u));
                    if (o) {
                        deferred.splice(i--, 1);
                        var a = n();
                        void 0 !== a && (e = a);
                    }
                }
                return e;
            }
            u = u || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > u; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, n, u];
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
        (__webpack_require__.j = 738),
        (() => {
            var e = { 738: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var u,
                        r,
                        [o, s, a] = n,
                        i = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (u in s) __webpack_require__.o(s, u) && (__webpack_require__.m[u] = s[u]);
                        if (a) var l = a(__webpack_require__);
                    }
                    for (t && t(n); i < o.length; i++)
                        ((r = o[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [720], () => __webpack_require__(761));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
