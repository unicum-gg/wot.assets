(() => {
    var __webpack_modules__ = {
            70: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => ie });
                var n = {};
                (u.r(n),
                    u.d(n, { mouse: () => E, off: () => m, on: () => d, onResize: () => l, onScaleUpdated: () => c }));
                var r = {};
                (u.r(r),
                    u.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => p,
                        getSize: () => v,
                        graphicsQuality: () => g,
                        playSound: () => F,
                        setRTPC: () => f,
                    }));
                var o = {};
                (u.r(o), u.d(o, { getBgUrl: () => D, getTextureUrl: () => w }));
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
                (u.r(s),
                    u.d(s, {
                        addModelObserver: () => z,
                        addPreloadTexture: () => L,
                        arabic2roman: () => te,
                        children: () => o,
                        displayStatus: () => y,
                        displayStatusIs: () => ne,
                        enableFullScreenModeSupported: () => se,
                        events: () => S,
                        extraSize: () => re,
                        forceTriggerMouseMove: () => Q,
                        freezeTextureBeforeResize: () => U,
                        getBrowserTexturePath: () => I,
                        getDisplayStatus: () => J,
                        getExternalPaddingsRem: () => ue,
                        getFontNames: () => ee,
                        getScale: () => $,
                        getSize: () => H,
                        getViewGlobalPosition: () => j,
                        initExternalPaddings: () => ae,
                        isEventHandled: () => Z,
                        isFocused: () => Y,
                        pxToRem: () => G,
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
                    const r = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const o = `mouse${t}`,
                                        s = _[t]((e) => u([e, 'outside']));
                                    function a(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, a),
                                        n(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(o, a),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(u)),
                            t
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
                function F(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function f(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
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
                var B = u(690);
                function w(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function D(e, t, u) {
                    return `url(${w(e, t, u)})`;
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
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) ((u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                    return r;
                                })(t, O);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, o, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
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
                function I(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function z(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function W(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function H(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function V(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function j(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: q(t.x), y: q(t.y) };
                }
                function U() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function $() {
                    return viewEnv.getScale();
                }
                function G(e) {
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
                function ue() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const ne = Object.keys(y).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === y[t]), e), {}),
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
                            u = t.top,
                            n = t.right,
                            r = t.bottom,
                            o = t.left;
                        (e.style.setProperty('--external-padding-top', `${u}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${o}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
                const ie = { view: s, client: r, sound: b, intl: h };
            },
            521: (e, t, u) => {
                'use strict';
                let n, r;
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
                    })(r || (r = {})));
            },
            368: () => {
                (!(function () {
                    let e,
                        t,
                        u,
                        n,
                        r,
                        o,
                        s,
                        a = -1;
                    (document.addEventListener('mousedown', (u) => {
                        (document.getSelection().empty(),
                            u.target.select &&
                                -1 === a &&
                                ((e = u.target), (t = e.getBoundingClientRect()), e.setSelectionRange(0, 0)));
                    }),
                        document.addEventListener('mousemove', (u) => {
                            if ((-1 === a && u.target.select && u.target === e && (a = e.selectionStart), a > -1)) {
                                const n = Math.min(Math.max(u.x, t.left), t.right),
                                    r = Math.min(Math.max(u.y, t.top), t.bottom),
                                    o = document.createEvent('MouseEvent');
                                (o.initMouseEvent('mousedown', !0, !0, null, 1, n, r, n, r, !1, !1, !1, !1, 0, null),
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
                                (u = e.target),
                                (n = e.target.value),
                                (r = u.selectionStart),
                                (o = -1 !== n.lastIndexOf(' ', r) ? n.lastIndexOf(' ', r) + 1 : 0),
                                (s = -1 !== n.indexOf(' ', r) ? n.indexOf(' ', r) : n.length),
                                u.setSelectionRange(o, s, 'forward'));
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
                                    const u = document.caretPositionFromPoint(t.x, t.y);
                                    if (!u.offsetNode || !e.offsetNode) return;
                                    document
                                        .getSelection()
                                        .setBaseAndExtent(e.offsetNode, e.offset, u.offsetNode, u.offset);
                                }
                            }),
                            document.addEventListener('mouseup', () => {
                                e = null;
                            }));
                    })());
            },
            690: (e, t, u) => {
                'use strict';
                u.d(t, { cg: () => o });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function o(e) {
                    let t = '';
                    for (let u = r.length - 1; u >= 0; u--) for (; e >= r[u]; ) ((t += n[u]), (e -= r[u]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => o });
                var n = u(70);
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
                    addCallback(e, t, u = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const o = n.O.view.addModelObserver(e, u, r);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(o) : (this._views[u] = [o])))
                                : console.error("Can't add callback for model:", e),
                            o
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
            916: (e, t, u) => {
                'use strict';
                u.d(t, { Sw: () => o.Z, B0: () => a, ry: () => v });
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
                const r = n;
                var o = u(358);
                var s = u(613);
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
                var m = u(521),
                    _ = u(70);
                const E = ['args'];
                function F(e, t, u, n, r, o, s) {
                    try {
                        var a = e[o](s),
                            i = a.value;
                    } catch (e) {
                        return void u(e);
                    }
                    a.done ? t(i) : Promise.resolve(i).then(n, r);
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
                                        u = arguments;
                                    return new Promise(function (n, r) {
                                        var o = e.apply(t, u);
                                        function s(e) {
                                            F(o, n, r, s, a, 'next', e);
                                        }
                                        function a(e) {
                                            F(o, n, r, s, a, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    p = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) ((u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                    return r;
                                })(t, E);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, o, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, o));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    g = () => p(a.CLOSE),
                    h = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var A = u(572);
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
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            p(a.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, r = R.invalid('resId'), o) => {
                            const s = _.O.view.getViewGlobalPosition(),
                                i = u.getBoundingClientRect(),
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
                                decoratorID: n || R.invalid('resId'),
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
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const r = Object.prototype.toString.call(t[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < r.length; t++) u[n].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: C,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = b;
            },
            613: (e, t, u) => {
                'use strict';
                u.d(t, { Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    };
            },
            255: (e, t, u) => {
                'use strict';
                var n = {};
                (u.r(n),
                    u.d(n, {
                        Area: () => U,
                        Bar: () => H,
                        DefaultScroll: () => j,
                        Direction: () => B,
                        defaultSettings: () => w,
                        useHorizontalScrollApi: () => y,
                    }));
                var r = {};
                (u.r(r), u.d(r, { Area: () => ie, Bar: () => oe, Default: () => ae, useVerticalScrollApi: () => $ }));
                u(368);
                var o = u(483),
                    s = u.n(o);
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                var i = u(363),
                    l = u.n(i);
                const c = {
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
                let d, m;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(d || (d = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(m || (m = {})));
                const _ = ({
                        children: e,
                        size: t,
                        disabled: u,
                        mixClass: n,
                        onMouseEnter: r,
                        onMouseMove: o,
                        onMouseDown: m,
                        onMouseUp: _,
                        onMouseLeave: E,
                        onClick: F,
                        isFocused: f = !1,
                        type: v = d.primary,
                        soundHover: p = 'highlight',
                        soundClick: g = 'play',
                    }) => {
                        const h = (0, i.useRef)(null),
                            A = (0, i.useState)(f),
                            C = A[0],
                            b = A[1],
                            B = (0, i.useState)(!1),
                            w = B[0],
                            D = B[1];
                        return (
                            (0, i.useEffect)(() => {
                                function e(e) {
                                    C && null !== h.current && !h.current.contains(e.target) && b(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', e),
                                    () => {
                                        document.removeEventListener('mousedown', e);
                                    }
                                );
                            }, [C]),
                            (0, i.useEffect)(() => {
                                b(f);
                            }, [f]),
                            l().createElement(
                                'div',
                                {
                                    ref: h,
                                    className: s()(
                                        c.base,
                                        c[`base__${v}`],
                                        u && c.base__disabled,
                                        t && c[`base__${t}`],
                                        C && c.base__focus,
                                        w && c.base__highlightActive,
                                        n,
                                    ),
                                    onMouseEnter: function (e) {
                                        u || (null !== p && a(p), r && r(e));
                                    },
                                    onMouseMove: function (e) {
                                        o && o(e);
                                    },
                                    onMouseUp: function (e) {
                                        u || (_ && _(e), D(!1));
                                    },
                                    onMouseDown: function (e) {
                                        u ||
                                            (null !== g && a(g),
                                            m && m(e),
                                            f && (u || (h.current && (h.current.focus(), b(!0)))),
                                            D(!0));
                                    },
                                    onMouseLeave: function (e) {
                                        u || (E && E(e), D(!1));
                                    },
                                    onClick: function (e) {
                                        u || (F && F(e));
                                    },
                                },
                                v !== d.ghost &&
                                    l().createElement(
                                        l().Fragment,
                                        null,
                                        l().createElement('div', { className: c.back }),
                                        l().createElement('span', { className: c.texture }),
                                    ),
                                l().createElement(
                                    'span',
                                    { className: s()(c.state, c.state__default) },
                                    l().createElement('span', { className: c.stateDisabled }),
                                    l().createElement('span', { className: c.stateHighlightHover }),
                                    l().createElement('span', { className: c.stateHighlightActive }),
                                ),
                                l().createElement(
                                    'span',
                                    { className: c.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    e,
                                ),
                            )
                        );
                    },
                    E = (e) => {
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
                    },
                    F = (e, t, u) => (u < e ? e : u > t ? t : u);
                var f = u(70);
                const v = [];
                function p(e) {
                    const t = (0, i.useRef)(e);
                    return (
                        (0, i.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, i.useCallback)((...e) => (0, t.current)(...e), v)
                    );
                }
                function g(e, t, u = []) {
                    const n = (0, i.useRef)(0),
                        r = (0, i.useCallback)(() => window.clearInterval(n.current), u || []);
                    (0, i.useEffect)(() => r, [r]);
                    const o = (null != u ? u : []).concat([t]);
                    return [
                        (0, i.useCallback)((u) => {
                            ((n.current = window.setInterval(() => e(u, !0), t)), e(u, !1));
                        }, o),
                        r,
                    ];
                }
                function h(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return A(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return A(e, t);
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
                }
                function A(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                function C(e, t, u) {
                    const n = (0, i.useMemo)(
                        () =>
                            (function (e, t, u, n) {
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
                                        ((s = Date.now()), u.apply(l, i));
                                    }
                                    o ||
                                        (n && !r && d(),
                                        a(),
                                        void 0 === n && c > e
                                            ? d()
                                            : !0 !== t &&
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
                                    'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                                    (i.cancel = function () {
                                        (a(), (o = !0));
                                    }),
                                    i
                                );
                            })(u, e),
                        t,
                    );
                    return ((0, i.useEffect)(() => n.cancel, [n]), n);
                }
                var b = u(30);
                let B;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(B || (B = {}));
                const w = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    D = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: n,
                        getWrapperSize: r,
                        forceTriggerMouseMove: o,
                    }) => {
                        const s = (e, u) => {
                            const n = t(e),
                                r = n[0],
                                o = n[1];
                            return o <= r ? 0 : F(r, o, u);
                        };
                        return (a = {}) => {
                            const l = a.settings,
                                c = void 0 === l ? w : l,
                                d = (0, i.useRef)(null),
                                m = (0, i.useRef)(null),
                                _ = (0, i.useRef)(!1),
                                F = (() => {
                                    const e = (0, i.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        n = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        r = (e, ...u) => {
                                            for (var n, r = h(t(e).values()); !(n = r()).done; ) (0, n.value)(...u);
                                        };
                                    return (0, i.useMemo)(() => ({ on: u, off: n, trigger: r }), []);
                                })(),
                                f = C(
                                    () => {
                                        o && o();
                                    },
                                    [],
                                    150,
                                ),
                                v = (0, b.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (u(t, e), F.trigger('change', e), o && _.current && f());
                                    },
                                    onRest: (e) => F.trigger('rest', e),
                                    onStart: (e) => F.trigger('start', e),
                                    onPause: (e) => F.trigger('pause', e),
                                })),
                                g = v[0],
                                A = v[1],
                                B = (0, i.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const r = g.scrollPosition.get(),
                                            o = (null != (n = g.scrollPosition.goal) ? n : 0) - r;
                                        return s(e, t * u + o + r);
                                    },
                                    [g.scrollPosition],
                                ),
                                D = (0, i.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            A.start({
                                                scrollPosition: s(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: c.animationConfig,
                                                from: { scrollPosition: s(n, g.scrollPosition.get()) },
                                            });
                                    },
                                    [A, c.animationConfig, g.scrollPosition],
                                ),
                                y = (0, i.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            u = m.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, c.step),
                                            o = B(t, e, n);
                                        D(o);
                                    },
                                    [D, B, c.step],
                                ),
                                S = (0, i.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && y(n(e)),
                                            d.current && F.trigger('mouseWheel', e, g.scrollPosition, t(d.current)));
                                    },
                                    [g.scrollPosition, y, F],
                                ),
                                O = ((e, t = []) => {
                                    const u = (0, i.useRef)(),
                                        n = (0, i.useCallback)((...t) => {
                                            (u.current && u.current(), (u.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, i.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        E(() => {
                                            const e = d.current;
                                            e &&
                                                (D(s(e, g.scrollPosition.goal), { immediate: !0 }),
                                                F.trigger('resizeHandled'));
                                        }),
                                    [D, g.scrollPosition.goal],
                                ),
                                M = p(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = s(e, g.scrollPosition.goal);
                                    (t !== g.scrollPosition.goal && D(t, { immediate: !0 }),
                                        F.trigger('recalculateContent'));
                                });
                            ((0, i.useEffect)(
                                () => (
                                    window.addEventListener('resize', O),
                                    () => {
                                        window.removeEventListener('resize', O);
                                    }
                                ),
                                [O],
                            ),
                                (0, i.useEffect)(() => {
                                    const e = d.current;
                                    if (!e || !o) return;
                                    const t = () => {
                                            _.current = !0;
                                        },
                                        u = () => {
                                            _.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', t),
                                        e.addEventListener('mouseleave', u),
                                        () => {
                                            (e.removeEventListener('mouseenter', t),
                                                e.removeEventListener('mouseleave', u));
                                        }
                                    );
                                }, [d]));
                            return (0, i.useMemo)(
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
                                    applyScroll: D,
                                    applyStepTo: y,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: A,
                                    animationScroll: g,
                                    recalculateContent: M,
                                    events: { on: F.on, off: F.off },
                                }),
                                [g.scrollPosition, D, y, F.off, F.on, M, S, A, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    y = D({
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
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? B.Next : B.Prev),
                        forceTriggerMouseMove: f.O.view.forceTriggerMouseMove,
                    }),
                    S = 'HorizontalBar_base_49',
                    O = 'HorizontalBar_base__active_5e',
                    M = 'HorizontalBar_leftButton_5f',
                    P = 'HorizontalBar_rightButton_03',
                    k = 'HorizontalBar_track_0d',
                    T = 'HorizontalBar_thumb_fd',
                    x = 'HorizontalBar_rail_32',
                    L = 'disable',
                    N = { pending: !1, offset: 0 },
                    I = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    z = () => {},
                    W = (e, t) => Math.max(20, e.offsetWidth * t),
                    H = (0, i.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = I, onDrag: n = z }) => {
                        const r = (0, i.useRef)(null),
                            o = (0, i.useRef)(null),
                            c = (0, i.useRef)(null),
                            d = (0, i.useRef)(null),
                            m = (0, i.useRef)(null),
                            _ = e.stepTimeout || 100,
                            v = (0, i.useState)(N),
                            h = v[0],
                            A = v[1],
                            C = (0, i.useCallback)(
                                (e) => {
                                    (A(e),
                                        m.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current }));
                                },
                                [n],
                            ),
                            b = () => {
                                const t = d.current,
                                    u = m.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    a = Math.min(1, n / r),
                                    i = F(0, 1, s / (r - n)),
                                    l = (t.offsetWidth - W(t, a)) * i;
                                ((u.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (o.current && c.current && d.current && m.current) {
                                            if (0 === e)
                                                return (o.current.classList.add(L), void c.current.classList.remove(L));
                                            if (
                                                ((t = d.current),
                                                (u = m.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return (o.current.classList.remove(L), void c.current.classList.add(L));
                                            var t, u;
                                            (o.current.classList.remove(L), c.current.classList.remove(L));
                                        }
                                    })(l));
                            },
                            w = p(() => {
                                ((() => {
                                    const t = m.current,
                                        u = d.current,
                                        n = e.getWrapperSize(),
                                        o = e.getContainerSize();
                                    if (!(o && t && n && u)) return;
                                    const s = Math.min(1, n / o);
                                    ((t.style.width = `${W(u, s)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 !== s ? r.current.classList.add(O) : r.current.classList.remove(O)));
                                })(),
                                    b());
                            });
                        ((0, i.useEffect)(() => E(w)),
                            (0, i.useEffect)(
                                () =>
                                    E(() => {
                                        const t = () => {
                                            b();
                                        };
                                        let u = z;
                                        const n = () => {
                                            (u(), (u = E(w)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', w),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (u(),
                                                    e.events.off('recalculateContent', w),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, i.useEffect)(() => {
                                if (!h.pending) return;
                                const t = f.O.client.events.mouse.move(([t, u]) => {
                                        var r;
                                        const o = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!o || !s) return;
                                        const a = d.current,
                                            i = m.current;
                                        if (!a || !i) return;
                                        if ('inside' === u && t.clientX < 0) return;
                                        const l = t.clientX - h.offset - a.getBoundingClientRect().x,
                                            c = (l / a.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(o, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: c }));
                                    }),
                                    u = f.O.client.events.mouse.up(() => {
                                        (t(), C(N));
                                    });
                                return () => {
                                    (t(), u());
                                };
                            }, [e, h.offset, h.pending, n, C]));
                        const D = g((t) => e.applyStepTo(t), _, [e]),
                            y = D[0],
                            R = D[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', R, !0),
                                () => document.removeEventListener('mouseup', R, !0)
                            ),
                            [R],
                        );
                        const H = (e) => {
                            e.target.classList.contains(L) || a('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: s()(S, t.base), ref: r, onWheel: e.handleMouseWheel },
                            l().createElement('div', {
                                className: s()(M, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(L) || 0 !== e.button || (a('play'), y(B.Next));
                                },
                                onMouseUp: R,
                                ref: o,
                                onMouseEnter: H,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: s()(k, t.track),
                                    onMouseDown: (t) => {
                                        const n = m.current;
                                        if (n && 0 === t.button)
                                            if ((a('play'), t.target === n))
                                                C({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const n = m.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const o = u(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + o * t);
                                                })(t.screenX > n.getBoundingClientRect().x ? B.Prev : B.Next);
                                            }
                                    },
                                    ref: d,
                                    onMouseEnter: H,
                                },
                                l().createElement('div', { ref: m, className: s()(T, t.thumb) }),
                                l().createElement('div', { className: s()(x, t.rail) }),
                            ),
                            l().createElement('div', {
                                className: s()(P, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(L) || 0 !== e.button || (a('play'), y(B.Prev));
                                },
                                onMouseUp: R,
                                ref: c,
                                onMouseEnter: H,
                            }),
                        );
                    }),
                    V = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    j = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: o,
                        scrollClassName: a,
                        getStepByRailClick: c,
                        onDrag: d,
                    }) => {
                        const m = (0, i.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: s()(V.base, e.base) });
                            }, [n]),
                            _ = (0, i.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return l().createElement(
                            'div',
                            { className: s()(V.defaultScroll, u), onWheel: t.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: s()(V.defaultScrollArea, r) },
                                l().createElement(U, { className: a, api: _, classNames: o }, e),
                            ),
                            l().createElement(H, { getStepByRailClick: c, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    U = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, i.useEffect)(() => E(e.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: s()(V.base, t) },
                            l().createElement(
                                'div',
                                {
                                    className: s()(V.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                l().createElement(
                                    'div',
                                    { className: s()(V.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                ((U.Bar = H), (U.Default = j));
                const $ = D({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? B.Next : B.Prev),
                    }),
                    G = 'VerticalBar_base_f3',
                    q = 'VerticalBar_base__active_72',
                    K = 'VerticalBar_topButton_d7',
                    Y = 'VerticalBar_bottomButton_06',
                    X = 'VerticalBar_track_df',
                    Z = 'VerticalBar_thumb_32',
                    Q = 'VerticalBar_rail_43',
                    J = 'disable',
                    ee = () => {},
                    te = { pending: !1, offset: 0 },
                    ue = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    ne = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    re = (e, t) => Math.max(20, e.offsetHeight * t),
                    oe = (0, i.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = ue, onDrag: n = ee }) => {
                        const r = (0, i.useRef)(null),
                            o = (0, i.useRef)(null),
                            c = (0, i.useRef)(null),
                            d = (0, i.useRef)(null),
                            m = (0, i.useRef)(null),
                            _ = e.stepTimeout || 100,
                            v = (0, i.useState)(te),
                            h = v[0],
                            A = v[1],
                            C = (0, i.useCallback)(
                                (e) => {
                                    (A(e),
                                        m.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current }));
                                },
                                [n],
                            ),
                            b = p(() => {
                                const t = m.current,
                                    u = d.current,
                                    n = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(n && o && t && u)) return;
                                const s = Math.min(1, n / o);
                                return (
                                    (t.style.height = `${re(u, s)}px`),
                                    (t.style.display = 'flex'),
                                    r.current && (1 !== s ? r.current.classList.add(q) : r.current.classList.remove(q)),
                                    s
                                );
                            }),
                            w = p(() => {
                                const t = d.current,
                                    u = m.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    a = Math.min(1, n / r),
                                    i = F(0, 1, s / (r - n)),
                                    l = (t.offsetHeight - re(t, a)) * i;
                                ((u.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (o.current && c.current && d.current && m.current) {
                                            if (0 === Math.round(e))
                                                return (o.current.classList.add(J), void c.current.classList.remove(J));
                                            if (
                                                ((t = d.current),
                                                (u = m.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return (o.current.classList.remove(J), void c.current.classList.add(J));
                                            var t, u;
                                            (o.current.classList.remove(J), c.current.classList.remove(J));
                                        }
                                    })(l));
                            }),
                            D = p(() => {
                                ne(e, () => {
                                    (b(), w());
                                });
                            });
                        ((0, i.useEffect)(() => E(D)),
                            (0, i.useEffect)(() => {
                                const t = () => {
                                    ne(e, () => {
                                        w();
                                    });
                                };
                                let u = ee;
                                const n = () => {
                                    (u(), (u = E(D)));
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
                            }, [e]),
                            (0, i.useEffect)(() => {
                                if (!h.pending) return;
                                const t = f.O.client.events.mouse.up(() => {
                                        C(te);
                                    }),
                                    u = f.O.client.events.mouse.move(([t]) => {
                                        ne(e, (u) => {
                                            const r = d.current,
                                                o = m.current,
                                                s = e.getContainerSize();
                                            if (!r || !o || !s) return;
                                            const a = t.screenY - h.offset - r.getBoundingClientRect().y,
                                                i = (a / r.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: o, thumbOffset: a, contentOffset: i }));
                                        });
                                    });
                                return () => {
                                    (t(), u());
                                };
                            }, [e, h.offset, h.pending, n, C]));
                        const y = g((t) => e.applyStepTo(t), _, [e]),
                            S = y[0],
                            O = y[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', O, !0),
                                () => document.removeEventListener('mouseup', O, !0)
                            ),
                            [O],
                        );
                        const M = (e) => {
                            e.target.classList.contains(J) || a('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: s()(G, t.base), ref: r, onWheel: e.handleMouseWheel },
                            l().createElement('div', {
                                className: s()(K, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(J) || 0 !== e.button || (a('play'), S(B.Next));
                                },
                                ref: o,
                                onMouseEnter: M,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: s()(X, t.track),
                                    onMouseDown: (t) => {
                                        const n = m.current;
                                        if (n && 0 === t.button)
                                            if ((a('play'), t.target === n))
                                                C({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    m.current &&
                                                        ne(e, (n) => {
                                                            if (!n) return;
                                                            const r = u(e),
                                                                o = e.clampPosition(n, n.scrollTop + r * t);
                                                            e.applyScroll(o);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? B.Prev : B.Next);
                                            }
                                    },
                                    ref: d,
                                    onMouseEnter: M,
                                },
                                l().createElement('div', { ref: m, className: s()(Z, t.thumb) }),
                                l().createElement('div', { className: s()(Q, t.rail) }),
                            ),
                            l().createElement('div', {
                                className: s()(Y, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(J) || 0 !== e.button || (a('play'), S(B.Prev));
                                },
                                onMouseUp: O,
                                ref: c,
                                onMouseEnter: M,
                            }),
                        );
                    }),
                    se = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    ae = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: o,
                        scrollClassNames: a,
                        getStepByRailClick: c,
                        onDrag: d,
                    }) => {
                        const m = (0, i.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: s()(se.base, e.base) });
                            }, [n]),
                            _ = (0, i.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return l().createElement(
                            'div',
                            { className: s()(se.defaultScroll, u), onWheel: t.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: s()(se.area, r) },
                                l().createElement(ie, { className: o, classNames: a, api: _ }, e),
                            ),
                            l().createElement(oe, { getStepByRailClick: c, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    ie = ({ className: e, classNames: t, children: u, api: n }) => (
                        (0, i.useEffect)(() => E(n.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: s()(se.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: s()(se.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                u,
                            ),
                        )
                    );
                ie.Default = ae;
                const le = { Vertical: r, Horizontal: n },
                    ce = (e = 1) => {
                        const t = new Error().stack;
                        let u,
                            n = R.invalid('resId'),
                            r = '';
                        var o;
                        t &&
                            ((r = (null == (o = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : o[0]) || ''),
                            (u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== u &&
                                window.subViews[u] &&
                                (n = window.subViews[u].id));
                        return { callerUrl: r, caller: u, stack: t, resId: n };
                    };
                var de = u(916);
                const me = [
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
                function _e(e) {
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
                const Ee = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: de.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    Fe = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            a = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
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
                                var u,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, me);
                        const C = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, i.useMemo)(() => p || ce().resId, [p]),
                            B = (0, i.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (Ee(u, E, { isMouseEvent: !0, on: !0, arguments: _e(n) }, b),
                                    g && g(),
                                    (C.current.isVisible = !0));
                            }, [u, E, n, b, g]),
                            w = (0, i.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        Ee(u, E, { on: !1 }, b),
                                        C.current.isVisible && h && h(),
                                        (C.current.isVisible = !1));
                                }
                            }, [u, E, b, h]),
                            D = (0, i.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(C.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        ((0, i.useEffect)(() => {
                            const e = C.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', D, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', D, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === f && w();
                            }, [f, w]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        (window.removeEventListener('mouseleave', w), w());
                                    }
                                ),
                                [w],
                            ));
                        return f
                            ? (0, i.cloneElement)(
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
                    fe = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ve() {
                    return (
                        (ve =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ve.apply(this, arguments)
                    );
                }
                const pe = R.views.common.tooltip_window.simple_tooltip_content,
                    ge = (e) => {
                        let t = e.children,
                            u = e.body,
                            n = e.header,
                            r = e.note,
                            o = e.alert,
                            s = e.args,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, fe);
                        const c = (0, i.useMemo)(() => {
                            const e = Object.assign({}, s, { body: u, header: n, note: r, alert: o });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [o, u, n, r, s]);
                        return l().createElement(
                            Fe,
                            ve(
                                {
                                    contentId:
                                        ((d = null == s ? void 0 : s.hasHtmlContent),
                                        d ? pe.SimpleTooltipHtmlContent('resId') : pe.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                a,
                            ),
                            t,
                        );
                        var d;
                    },
                    he = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    Ae = (e) => {
                        const t = (0, i.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    Ce = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    be = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    Be = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, u) => {
                                const n = he(`${e}.${u}`, window);
                                return Ce(n) ? t(e, u, n) : `${e}.${u}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    we = (e) => {
                        const t = ((e) => {
                                const t = ce(),
                                    u = t.caller,
                                    n = t.resId,
                                    r = window.__feature && window.__feature !== u && u ? `subViews.${u}` : '';
                                return { modelPrefix: r, modelPath: be(r, e || ''), resId: n };
                            })(),
                            u = t.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((t, n) => {
                                    const r = he(be(u, `${t}.${n}`), window);
                                    return Ce(r) ? (e.push(r.id), `${t}.${n}.value`) : (e.push(n), `${t}.${n}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    };
                const De = () => (window.injected || (window.injected = new Map()), window.injected);
                const ye = de.Sw.instance;
                let Se;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(Se || (Se = {}));
                const Oe = (e = 'model', t = Se.Deep) => {
                    const u = (0, i.useState)(0),
                        n = (u[0], u[1]),
                        r = (0, i.useMemo)(() => ce(), []),
                        o = r.callerUrl,
                        s = r.caller,
                        a = r.resId,
                        l = (0, i.useMemo)(() => {
                            const t = (function (e) {
                                return De().has(e);
                            })(o.replace('.js', '.html'));
                            return window.__feature && window.__feature !== s && !t ? `subViews.${s}.${e}` : e;
                        }, [o, s, e]),
                        c = (0, i.useState)(() =>
                            ((e) => {
                                const t = he(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return Ce(t) ? t.value : t;
                            })(Be(l)),
                        ),
                        d = c[0],
                        m = c[1],
                        _ = (0, i.useRef)(-1);
                    return (
                        Ae(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? Se.Deep : Se.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== Se.None)
                            ) {
                                const u = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === Se.Deep
                                            ? (e === d && n((e) => e + 1), m(e))
                                            : m(Object.assign([], e));
                                    },
                                    r = we(e);
                                _.current = ye.addCallback(r, u, a, t === Se.Deep);
                            }
                        }),
                        (0, i.useEffect)(() => {
                            if (t !== Se.None)
                                return () => {
                                    ye.removeCallback(_.current, a);
                                };
                        }, [a, t]),
                        d
                    );
                };
                var Me = u(533),
                    Pe = u.n(Me);
                const ke = (e) => `#${e}`,
                    Re = 'Chat_base_61',
                    Te = 'Chat_content_5c',
                    xe = 'Chat_channelNotification_3b',
                    Le = 'Chat_scrollContainer_db',
                    Ne = 'Chat_messages_fa',
                    Ie = 'Chat_messages__selectable_a7',
                    ze = 'Chat_footer_5c',
                    We = 'Chat_input_b4',
                    He = 'Chat_sendButtonContainer_32',
                    Ve = 'Chat_enterButtonContainer_99',
                    je = 'Chat_enterImage_97',
                    Ue = 'MessageText_emoji_6b';
                function $e(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Ge(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return Ge(e, t);
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
                }
                function Ge(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                var qe;
                !(function (e) {
                    ((e[(e.text = 0)] = 'text'), (e[(e.element = 1)] = 'element'));
                })(qe || (qe = {}));
                const Ke = [
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
                    Ye = (e) => R.images.gui.maps.icons.emoji.$dyn(e),
                    Xe = (e, [t, u]) =>
                        e.split(new RegExp(t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'g')).reduce((e, t, n, r) => {
                            var o;
                            return (
                                e.push({ type: qe.text, content: t }),
                                r.length !== n + 1 &&
                                    e.push({
                                        type: qe.element,
                                        content: l().createElement('div', {
                                            style: ((o = Ye(u)), { backgroundImage: `url('${o}')` }),
                                            className: Ue,
                                        }),
                                    }),
                                e
                            );
                        }, []),
                    Ze = (e, t, u) => (u % 2 ? (e[e.length - 1] += t) : e.push(t), e),
                    Qe = (e, t) => {
                        const u = [];
                        return (
                            e.forEach((e) =>
                                e.type === qe.element
                                    ? u.push(e.content)
                                    : u.push(
                                          ...((e, t) => {
                                              const u = { color: t };
                                              return e
                                                  .split(
                                                      /([\0-@\[-`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u036F\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482-\u0489\u0530\u0557\u0558\u055A-\u055F\u0589-\u05CF\u05EB-\u05EE\u05F3-\u061F\u064B-\u066D\u0670\u06D4\u06D6-\u06E4\u06E7-\u06ED\u06F0-\u06F9\u06FD\u06FE\u0700-\u070F\u0711\u0730-\u074C\u07A6-\u07B0\u07B2-\u07C9\u07EB-\u07F3\u07F6-\u07F9\u07FB-\u07FF\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u083F\u0859-\u085F\u086B-\u086F\u0888\u088F-\u089F\u08CA-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0970\u0981-\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA-\u09BC\u09BE-\u09CD\u09CF-\u09DB\u09DE\u09E2-\u09EF\u09F2-\u09FB\u09FD-\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A-\u0A58\u0A5D\u0A5F-\u0A71\u0A75-\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA-\u0ABC\u0ABE-\u0ACF\u0AD1-\u0ADF\u0AE2-\u0AF8\u0AFA-\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A-\u0B3C\u0B3E-\u0B5B\u0B5E\u0B62-\u0B70\u0B72-\u0B82\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BCF\u0BD1-\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C3E-\u0C57\u0C5B\u0C5C\u0C5E\u0C5F\u0C62-\u0C7F\u0C81-\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA-\u0CBC\u0CBE-\u0CDC\u0CDF\u0CE2-\u0CF0\u0CF3-\u0D03\u0D0D\u0D11\u0D3B\u0D3C\u0D3E-\u0D4D\u0D4F-\u0D53\u0D57-\u0D5E\u0D62-\u0D79\u0D80-\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0E00\u0E31\u0E34-\u0E3F\u0E47-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EB1\u0EB4-\u0EBC\u0EBE\u0EBF\u0EC5\u0EC7-\u0EDB\u0EE0-\u0EFF\u0F01-\u0F3F\u0F48\u0F6D-\u0F87\u0F8D-\u0FFF\u102B-\u103E\u1040-\u104F\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16F0\u16F9-\u16FF\u1712-\u171E\u1732-\u173F\u1752-\u175F\u176D\u1771-\u177F\u17B4-\u17D6\u17D8-\u17DB\u17DD-\u181F\u1879-\u187F\u1885\u1886\u18A9\u18AB-\u18AF\u18F6-\u18FF\u191F-\u194F\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19FF\u1A17-\u1A1F\u1A55-\u1AA6\u1AA8-\u1B04\u1B34-\u1B44\u1B4D-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BFF\u1C24-\u1C4C\u1C50-\u1C59\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1CFB-\u1CFF\u1DC0-\u1DFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u2182\u2185-\u2BFF\u2CE5-\u2CEA\u2CEF-\u2CF1\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7F\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF-\u2E2E\u2E30-\u3004\u3007-\u3030\u3036-\u303A\u303D-\u3040\u3097-\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA620-\uA629\uA62C-\uA63F\uA66F-\uA67E\uA69E\uA69F\uA6E6-\uA716\uA720\uA721\uA789\uA78A\uA7CB-\uA7CF\uA7D2\uA7D4\uA7DA-\uA7F1\uA802\uA806\uA80B\uA823-\uA83F\uA874-\uA881\uA8B4-\uA8F1\uA8F8-\uA8FA\uA8FC\uA8FF-\uA909\uA926-\uA92F\uA947-\uA95F\uA97D-\uA983\uA9B3-\uA9CE\uA9D0-\uA9DF\uA9E5\uA9F0-\uA9F9\uA9FF\uAA29-\uAA3F\uAA43\uAA4C-\uAA5F\uAA77-\uAA79\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAC3-\uAADA\uAADE\uAADF\uAAEB-\uAAF1\uAAF5-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABE3-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB1E\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFE6F\uFE75\uFEFD-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF\u{1000C}\u{10027}\u{1003B}\u{1003E}\u{1004E}\u{1004F}\u{1005E}-\u{1007F}\u{100FB}-\u{1027F}\u{1029D}-\u{1029F}\u{102D1}-\u{102FF}\u{10320}-\u{1032C}\u{10341}\u{1034A}-\u{1034F}\u{10376}-\u{1037F}\u{1039E}\u{1039F}\u{103C4}-\u{103C7}\u{103D0}-\u{103FF}\u{1049E}-\u{104AF}\u{104D4}-\u{104D7}\u{104FC}-\u{104FF}\u{10528}-\u{1052F}\u{10564}-\u{1056F}\u{1057B}\u{1058B}\u{10593}\u{10596}\u{105A2}\u{105B2}\u{105BA}\u{105BD}-\u{105FF}\u{10737}-\u{1073F}\u{10756}-\u{1075F}\u{10768}-\u{1077F}\u{10786}\u{107B1}\u{107BB}-\u{107FF}\u{10806}\u{10807}\u{10809}\u{10836}\u{10839}-\u{1083B}\u{1083D}\u{1083E}\u{10856}-\u{1085F}\u{10877}-\u{1087F}\u{1089F}-\u{108DF}\u{108F3}\u{108F6}-\u{108FF}\u{10916}-\u{1091F}\u{1093A}-\u{1097F}\u{109B8}-\u{109BD}\u{109C0}-\u{109FF}\u{10A01}-\u{10A0F}\u{10A14}\u{10A18}\u{10A36}-\u{10A5F}\u{10A7D}-\u{10A7F}\u{10A9D}-\u{10ABF}\u{10AC8}\u{10AE5}-\u{10AFF}\u{10B36}-\u{10B3F}\u{10B56}-\u{10B5F}\u{10B73}-\u{10B7F}\u{10B92}-\u{10BFF}\u{10C49}-\u{10C7F}\u{10CB3}-\u{10CBF}\u{10CF3}-\u{10CFF}\u{10D24}-\u{10E7F}\u{10EAA}-\u{10EAF}\u{10EB2}-\u{10EFF}\u{10F1D}-\u{10F26}\u{10F28}-\u{10F2F}\u{10F46}-\u{10F6F}\u{10F82}-\u{10FAF}\u{10FC5}-\u{10FDF}\u{10FF7}-\u{11002}\u{11038}-\u{11070}\u{11073}\u{11074}\u{11076}-\u{11082}\u{110B0}-\u{110CF}\u{110E9}-\u{11102}\u{11127}-\u{11143}\u{11145}\u{11146}\u{11148}-\u{1114F}\u{11173}-\u{11175}\u{11177}-\u{11182}\u{111B3}-\u{111C0}\u{111C5}-\u{111D9}\u{111DB}\u{111DD}-\u{111FF}\u{11212}\u{1122C}-\u{1127F}\u{11287}\u{11289}\u{1128E}\u{1129E}\u{112A9}-\u{112AF}\u{112DF}-\u{11304}\u{1130D}\u{1130E}\u{11311}\u{11312}\u{11329}\u{11331}\u{11334}\u{1133A}-\u{1133C}\u{1133E}-\u{1134F}\u{11351}-\u{1135C}\u{11362}-\u{113FF}\u{11435}-\u{11446}\u{1144B}-\u{1145E}\u{11462}-\u{1147F}\u{114B0}-\u{114C3}\u{114C6}\u{114C8}-\u{1157F}\u{115AF}-\u{115D7}\u{115DC}-\u{115FF}\u{11630}-\u{11643}\u{11645}-\u{1167F}\u{116AB}-\u{116B7}\u{116B9}-\u{116FF}\u{1171B}-\u{1173F}\u{11747}-\u{117FF}\u{1182C}-\u{1189F}\u{118E0}-\u{118FE}\u{11907}\u{11908}\u{1190A}\u{1190B}\u{11914}\u{11917}\u{11930}-\u{1193E}\u{11940}\u{11942}-\u{1199F}\u{119A8}\u{119A9}\u{119D1}-\u{119E0}\u{119E2}\u{119E4}-\u{119FF}\u{11A01}-\u{11A0A}\u{11A33}-\u{11A39}\u{11A3B}-\u{11A4F}\u{11A51}-\u{11A5B}\u{11A8A}-\u{11A9C}\u{11A9E}-\u{11AAF}\u{11AF9}-\u{11BFF}\u{11C09}\u{11C2F}-\u{11C3F}\u{11C41}-\u{11C71}\u{11C90}-\u{11CFF}\u{11D07}\u{11D0A}\u{11D31}-\u{11D45}\u{11D47}-\u{11D5F}\u{11D66}\u{11D69}\u{11D8A}-\u{11D97}\u{11D99}-\u{11EDF}\u{11EF3}-\u{11FAF}\u{11FB1}-\u{11FFF}\u{1239A}-\u{1247F}\u{12544}-\u{12F8F}\u{12FF1}-\u{12FFF}\u{1342F}-\u{143FF}\u{14647}-\u{167FF}\u{16A39}-\u{16A3F}\u{16A5F}-\u{16A6F}\u{16ABF}-\u{16ACF}\u{16AEE}-\u{16AFF}\u{16B30}-\u{16B3F}\u{16B44}-\u{16B62}\u{16B78}-\u{16B7C}\u{16B90}-\u{16E3F}\u{16E80}-\u{16EFF}\u{16F4B}-\u{16F4F}\u{16F51}-\u{16F92}\u{16FA0}-\u{16FDF}\u{16FE2}\u{16FE4}-\u{16FFF}\u{187F8}-\u{187FF}\u{18CD6}-\u{18CFF}\u{18D09}-\u{1AFEF}\u{1AFF4}\u{1AFFC}\u{1AFFF}\u{1B123}-\u{1B14F}\u{1B153}-\u{1B163}\u{1B168}-\u{1B16F}\u{1B2FC}-\u{1BBFF}\u{1BC6B}-\u{1BC6F}\u{1BC7D}-\u{1BC7F}\u{1BC89}-\u{1BC8F}\u{1BC9A}-\u{1D3FF}\u{1D455}\u{1D49D}\u{1D4A0}\u{1D4A1}\u{1D4A3}\u{1D4A4}\u{1D4A7}\u{1D4A8}\u{1D4AD}\u{1D4BA}\u{1D4BC}\u{1D4C4}\u{1D506}\u{1D50B}\u{1D50C}\u{1D515}\u{1D51D}\u{1D53A}\u{1D53F}\u{1D545}\u{1D547}-\u{1D549}\u{1D551}\u{1D6A6}\u{1D6A7}\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u{1D7CC}-\u{1DEFF}\u{1DF1F}-\u{1E0FF}\u{1E12D}-\u{1E136}\u{1E13E}-\u{1E14D}\u{1E14F}-\u{1E28F}\u{1E2AE}-\u{1E2BF}\u{1E2EC}-\u{1E7DF}\u{1E7E7}\u{1E7EC}\u{1E7EF}\u{1E7FF}\u{1E8C5}-\u{1E8FF}\u{1E944}-\u{1E94A}\u{1E94C}-\u{1EDFF}\u{1EE04}\u{1EE20}\u{1EE23}\u{1EE25}\u{1EE26}\u{1EE28}\u{1EE33}\u{1EE38}\u{1EE3A}\u{1EE3C}-\u{1EE41}\u{1EE43}-\u{1EE46}\u{1EE48}\u{1EE4A}\u{1EE4C}\u{1EE50}\u{1EE53}\u{1EE55}\u{1EE56}\u{1EE58}\u{1EE5A}\u{1EE5C}\u{1EE5E}\u{1EE60}\u{1EE63}\u{1EE65}\u{1EE66}\u{1EE6B}\u{1EE73}\u{1EE78}\u{1EE7D}\u{1EE7F}\u{1EE8A}\u{1EE9C}-\u{1EEA0}\u{1EEA4}\u{1EEAA}\u{1EEBC}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}])/gu,
                                                  )
                                                  .reduce(Ze, [])
                                                  .map((e, t) => l().createElement('div', { style: u, key: t }, e));
                                          })(e.content, t),
                                      ),
                            ),
                            u
                        );
                    },
                    Je = ({ text: e, color: t }) => {
                        const u = (0, i.useMemo)(
                                () =>
                                    ((e) => {
                                        let t = [{ type: qe.text, content: e }];
                                        for (var u, n = $e(Ke); !(u = n()).done; ) {
                                            const e = u.value,
                                                n = [];
                                            for (var r, o = $e(t); !(r = o()).done; ) {
                                                const t = r.value;
                                                t.type === qe.text ? n.push(Xe(t.content, e)) : n.push(t);
                                            }
                                            t = n.flat();
                                        }
                                        return t;
                                    })(e),
                                [e],
                            ),
                            n = (0, i.useMemo)(() => Qe(u, t), [t, u]);
                        return l().createElement(
                            l().Fragment,
                            null,
                            n.map((e, t) => l().createElement(i.Fragment, { key: t }, e)),
                        );
                    },
                    et = ({ part: e }) => {
                        const t = (0, i.useMemo)(() => ({ color: ke(e.color) }), [e]);
                        return l().createElement('div', { style: t }, e.text);
                    },
                    tt = 'Message_base_bf',
                    ut = ({ playerName: e, timeStamp: t, text: u }) => {
                        const n = (0, i.useMemo)(() => ke(u.color), [u.color]);
                        return l().createElement(
                            'div',
                            { className: tt },
                            l().createElement(et, { part: e }),
                            ' ',
                            l().createElement(et, { part: t }),
                            l().createElement(Je, { text: u.text, color: n }),
                            '\n',
                        );
                    };
                function nt() {
                    return (
                        (nt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        nt.apply(this, arguments)
                    );
                }
                const rt = () => {
                    const e = Oe(),
                        t = e.onSend,
                        u = e.canClearInput,
                        n = e.onInputCleared,
                        r = Oe('model.headerExtraInfo'),
                        o = r.text,
                        s = r.color,
                        a = Oe('model.messages'),
                        c = (0, i.useRef)(null),
                        F = (0, i.useRef)(null),
                        f = $(),
                        v = (0, i.useRef)(null),
                        p = (0, i.useState)(''),
                        g = p[0],
                        h = p[1],
                        A = (0, i.useCallback)(() => {
                            if (!c.current || !F.current) return;
                            const e = F.current.scrollHeight,
                                t = c.current.scrollHeight - e;
                            f.applyScroll(t);
                        }, [f]);
                    (0, i.useEffect)(() => E(() => E(A)), [a.length, A]);
                    const C = (0, i.useCallback)(() => {
                        v.current && '' !== v.current.value && u && ((v.current.value = ''), n(), h(''));
                    }, [u, n]);
                    (0, i.useEffect)(() => C(), [u, C]);
                    const b = (0, i.useCallback)(() => {
                            (t({ message: g }), C());
                        }, [C, g, t]),
                        B = (0, i.useCallback)(() => {
                            h(v.current ? v.current.value : '');
                        }, [v]),
                        w = (0, i.useCallback)(
                            (e) => {
                                'Enter' === e.key && b();
                            },
                            [b],
                        ),
                        D = a.length
                            ? l().createElement(
                                  'div',
                                  { className: Le, ref: F },
                                  l().createElement(
                                      le.Vertical.Area.Default,
                                      {
                                          onDrag: (e) => {
                                              var t;
                                              'dragStart' === e.type &&
                                                  (null == (t = c.current) || t.classList.remove(Ie));
                                          },
                                          api: f,
                                      },
                                      l().createElement(
                                          'div',
                                          {
                                              ref: c,
                                              className: Ne,
                                              onMouseDown: () => {
                                                  var e;
                                                  null == (e = c.current) || e.classList.add(Ie);
                                              },
                                          },
                                          a.map((e) => l().createElement(ut, nt({}, e.value, { key: e.value.key }))),
                                      ),
                                  ),
                              )
                            : l().createElement(
                                  l().Fragment,
                                  null,
                                  l().createElement(
                                      'span',
                                      { className: xe },
                                      R.strings.platoon.members.chat.chatName(),
                                  ),
                                  l().createElement(
                                      'div',
                                      { className: xe },
                                      l().createElement(Je, { text: o, color: ke(s) }),
                                  ),
                              );
                    return l().createElement(
                        'div',
                        { className: Re },
                        l().createElement('div', { className: Te }, D),
                        l().createElement(
                            'div',
                            { className: ze },
                            l().createElement('input', {
                                onInput: B,
                                onKeyUp: w,
                                ref: v,
                                required: !0,
                                className: We,
                                minLength: 1,
                                maxLength: 255,
                                type: 'text',
                                id: 'name',
                                name: 'name',
                            }),
                            l().createElement(
                                ge,
                                {
                                    isEnabled: !0,
                                    header: R.strings.platoon.members.chat.sendMessage.header(),
                                    body: R.strings.platoon.members.chat.sendMessage.body(),
                                },
                                l().createElement(
                                    'div',
                                    { className: He },
                                    l().createElement(
                                        _,
                                        { size: m.small, type: d.secondary, onClick: b, mixClass: Ve },
                                        l().createElement('div', { className: je }),
                                    ),
                                ),
                            ),
                        ),
                    );
                };
                engine.whenReady.then(() => {
                    Pe().render(l().createElement(rt, null), document.getElementById('root'));
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
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](u, u.exports, __webpack_require__), u.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, n) => {
            if (!t) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, u, n] = deferred[i], o = !0, s = 0; s < t.length; s++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((o = !1), n < r && (r = n));
                    if (o) {
                        deferred.splice(i--, 1);
                        var a = u();
                        void 0 !== a && (e = a);
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
        (__webpack_require__.j = 738),
        (() => {
            var e = { 738: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        r,
                        [o, s, a] = u,
                        i = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (a) var l = a(__webpack_require__);
                    }
                    for (t && t(u); i < o.length; i++)
                        ((r = o[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [720], () => __webpack_require__(255));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
