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
                t.d(u, { O: () => Ee });
                var a = {};
                (t.r(a),
                    t.d(a, { mouse: () => d, off: () => _, on: () => E, onResize: () => l, onScaleUpdated: () => c }));
                var n = {};
                (t.r(n),
                    t.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => p,
                        getSize: () => D,
                        graphicsQuality: () => g,
                        playSound: () => A,
                        setRTPC: () => F,
                    }));
                var r = {};
                (t.r(r), t.d(r, { getBgUrl: () => M, getTextureUrl: () => S }));
                var s = {};
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
                (t.r(s),
                    t.d(s, {
                        addModelObserver: () => G,
                        addPreloadTexture: () => H,
                        arabic2roman: () => ne,
                        children: () => r,
                        displayStatus: () => T,
                        displayStatusIs: () => se,
                        enableFullScreenModeSupported: () => le,
                        events: () => x,
                        extraSize: () => ie,
                        forceTriggerMouseMove: () => ue,
                        freezeTextureBeforeResize: () => Y,
                        getBrowserTexturePath: () => $,
                        getDisplayStatus: () => te,
                        getExternalPaddingsRem: () => re,
                        getFontNames: () => ae,
                        getScale: () => q,
                        getSize: () => z,
                        getViewGlobalPosition: () => j,
                        initExternalPaddings: () => ce,
                        isEventHandled: () => ee,
                        isFocused: () => Q,
                        pxToRem: () => X,
                        remToPx: () => K,
                        resize: () => V,
                        sendEvent: () => I,
                        setAnimateWindow: () => Z,
                        setEventHandled: () => J,
                        setInputPaddingsRem: () => U,
                        setSidePaddingsRem: () => W,
                        whenTutorialReady: () => oe,
                    }));
                const l = i('clientResized'),
                    c = i('self.onScaleUpdated'),
                    E = (e, u) => engine.on(e, u),
                    _ = (e, u) => engine.off(e, u),
                    m = { down: i('mousedown'), up: i('mouseup'), move: i('mousemove') };
                const d = (function () {
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
                    const n = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const r = `mouse${u}`,
                                        s = m[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, i),
                                        a(),
                                        () => {
                                            n &&
                                                (s(),
                                                window.removeEventListener(r, i),
                                                (e.listeners -= 1),
                                                a(),
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
                function F(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                function D(e = 'px') {
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
                    C = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    B = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    h = Object.keys(B).reduce((e, u) => ((e[u] = () => A(B[u])), e), {}),
                    v = { play: Object.assign({}, h, { sound: A }), setRTPC: F },
                    b = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    f = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function w(e) {
                    let u = '';
                    for (let t = f.length - 1; t >= 0; t--) for (; e >= f[t]; ) ((u += b[t]), (e -= f[t]));
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function S(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function M(e, u, t) {
                    return `url(${S(e, u, t)})`;
                }
                const T = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
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
                    y = ['args'];
                const k = 2,
                    P = 16,
                    N = 32,
                    L = 64,
                    O = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, y);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((a = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    I = {
                        close(e) {
                            O('popover' === e ? k : N);
                        },
                        minimize() {
                            O(L);
                        },
                        move(e) {
                            O(P, { isMouseEvent: !0, on: e });
                        },
                    };
                function H(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function U(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function $(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function G(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function W(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function z(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function V(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function j(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: K(u.x), y: K(u.y) };
                }
                function Y() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function q() {
                    return viewEnv.getScale();
                }
                function X(e) {
                    return viewEnv.pxToRem(e);
                }
                function K(e) {
                    return viewEnv.remToPx(e);
                }
                function Z(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function Q() {
                    return viewEnv.isFocused();
                }
                function J() {
                    return viewEnv.setEventHandled();
                }
                function ee() {
                    return viewEnv.isEventHandled();
                }
                function ue() {
                    viewEnv.forceTriggerMouseMove();
                }
                function te() {
                    return viewEnv.getShowingStatus();
                }
                const ae = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ne = w;
                function re() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const se = Object.keys(T).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === T[u]), e), {}),
                    ie = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    oe = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : x.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function le() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function ce(e) {
                    function u() {
                        const u = viewEnv.getExternalPaddingsRem(),
                            t = u.top,
                            a = u.right,
                            n = u.bottom,
                            r = u.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${a}rem`),
                            e.style.setProperty('--external-padding-bottom', `${n}rem`),
                            e.style.setProperty('--external-padding-left', `${r}rem`));
                    }
                    (u(), engine.on('self.onPaddingsUpdated', () => u()));
                }
                const Ee = { view: s, client: n, sound: v, intl: C };
            },
            521: (e, u, t) => {
                'use strict';
                let a, n;
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
                    })(n || (n = {})));
            },
            368: () => {
                (!(function () {
                    let e,
                        u,
                        t,
                        a,
                        n,
                        r,
                        s,
                        i = -1;
                    (document.addEventListener('mousedown', (t) => {
                        (document.getSelection().empty(),
                            t.target.select &&
                                -1 === i &&
                                ((e = t.target), (u = e.getBoundingClientRect()), e.setSelectionRange(0, 0)));
                    }),
                        document.addEventListener('mousemove', (t) => {
                            if ((-1 === i && t.target.select && t.target === e && (i = e.selectionStart), i > -1)) {
                                const a = Math.min(Math.max(t.x, u.left), u.right),
                                    n = Math.min(Math.max(t.y, u.top), u.bottom),
                                    r = document.createEvent('MouseEvent');
                                (r.initMouseEvent('mousedown', !0, !0, null, 1, a, n, a, n, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(r));
                                const s = e.selectionEnd;
                                s > i ? e.setSelectionRange(i, s, 'forward') : e.setSelectionRange(s, i, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            ((e = null), (i = -1));
                        }),
                        document.addEventListener('dblclick', (e) => {
                            e.target.select &&
                                (document.getSelection().empty(),
                                (t = e.target),
                                (a = e.target.value),
                                (n = t.selectionStart),
                                (r = -1 !== a.lastIndexOf(' ', n) ? a.lastIndexOf(' ', n) + 1 : 0),
                                (s = -1 !== a.indexOf(' ', n) ? a.indexOf(' ', n) : a.length),
                                t.setSelectionRange(r, s, 'forward'));
                        }));
                })(),
                    (function () {
                        let e = null;
                        (document.addEventListener('mousedown', (u) => {
                            (document.getSelection().empty(),
                                0 !== u.button ||
                                    u.target.select ||
                                    e ||
                                    (e = document.caretPositionFromPoint(u.x, u.y)));
                        }),
                            document.addEventListener('mousemove', (u) => {
                                if (0 === u.button && !u.target.select && e) {
                                    const t = document.caretPositionFromPoint(u.x, u.y);
                                    if (!t.offsetNode || !e.offsetNode) return;
                                    document
                                        .getSelection()
                                        .setBaseAndExtent(e.offsetNode, e.offset, t.offsetNode, t.offset);
                                }
                            }),
                            document.addEventListener('mouseup', () => {
                                e = null;
                            }));
                    })());
            },
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var a = t(294);
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
                        const r = a.O.view.addModelObserver(e, t, n);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                n.__instance = void 0;
                const r = n;
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
                t.d(u, { Sw: () => r.Z, B3: () => o, Z5: () => s.Z5, B0: () => i, ry: () => D });
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
                const n = a;
                var r = t(358);
                var s = t(613);
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
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(521),
                    m = t(294);
                const d = ['args'];
                function A(e, u, t, a, n, r, s) {
                    try {
                        var i = e[r](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(a, n);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                                    return new Promise(function (a, n) {
                                        var r = e.apply(u, t);
                                        function s(e) {
                                            A(r, a, n, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(r, a, n, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    p = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, d);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((a = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    g = () => p(i.CLOSE),
                    C = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var B = t(572);
                const h = n.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: B.Z,
                        ViewEventType: i,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => p(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => p(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            p(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, n = R.invalid('resId'), r) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                E = o.width,
                                _ = o.height,
                                d = {
                                    x: m.O.view.pxToRem(l) + s.x,
                                    y: m.O.view.pxToRem(c) + s.y,
                                    width: m.O.view.pxToRem(E),
                                    height: m.O.view.pxToRem(_),
                                };
                            p(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: F(d),
                                on: !0,
                                args: r,
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
                            C(e, g);
                        },
                        handleViewEvent: p,
                        onBindingsReady: D,
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
                                    const n = Object.prototype.toString.call(u[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < n.length; u++) t[a].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: h,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = v;
            },
            613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => r, Z5: () => a, cy: () => n });
                const a = {
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
                    r = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            969: (e, u, t) => {
                'use strict';
                var a = {};
                (t.r(a),
                    t.d(a, {
                        Area: () => Ze,
                        Bar: () => qe,
                        DefaultScroll: () => Ke,
                        Direction: () => Re,
                        defaultSettings: () => ke,
                        useHorizontalScrollApi: () => Ne,
                    }));
                var n = {};
                (t.r(n), t.d(n, { Area: () => Au, Bar: () => _u, Default: () => du, useVerticalScrollApi: () => Qe }));
                var r = t(363),
                    s = t.n(r);
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
                var o = t(294);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function E(e = o.O.client.getSize('rem')) {
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
                                r = Math.min(a, n);
                            return {
                                extraLarge: r === t.extraLarge.weight,
                                large: r === t.large.weight,
                                medium: r === t.medium.weight,
                                small: r === t.small.weight,
                                extraSmall: r === t.extraSmall.weight,
                                extraLargeWidth: a === t.extraLarge.weight,
                                largeWidth: a === t.large.weight,
                                mediumWidth: a === t.medium.weight,
                                smallWidth: a === t.small.weight,
                                extraSmallWidth: a === t.extraSmall.weight,
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
                const _ = E(),
                    m = (0, r.createContext)(_),
                    d = ['children'];
                (0, r.memo)((e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, d);
                    const a = (0, r.useContext)(m),
                        n = a.extraLarge,
                        s = a.large,
                        o = a.medium,
                        l = a.small,
                        c = a.extraSmall,
                        E = a.extraLargeWidth,
                        _ = a.largeWidth,
                        A = a.mediumWidth,
                        F = a.smallWidth,
                        D = a.extraSmallWidth,
                        p = a.extraLargeHeight,
                        g = a.largeHeight,
                        C = a.mediumHeight,
                        B = a.smallHeight,
                        h = a.extraSmallHeight,
                        v = { extraLarge: p, large: g, medium: C, small: B, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && n) return u;
                        if (t.large && s) return u;
                        if (t.medium && o) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && E) return i(u, t, v);
                        if (t.largeWidth && _) return i(u, t, v);
                        if (t.mediumWidth && A) return i(u, t, v);
                        if (t.smallWidth && F) return i(u, t, v);
                        if (t.extraSmallWidth && D) return i(u, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && p) return u;
                            if (t.largeHeight && g) return u;
                            if (t.mediumHeight && C) return u;
                            if (t.smallHeight && B) return u;
                            if (t.extraSmallHeight && h) return u;
                        }
                    }
                    return null;
                });
                const A = ({ children: e }) => {
                    const u = (0, r.useState)(E),
                        t = u[0],
                        a = u[1],
                        n = (0, r.useState)(!1),
                        i = n[0],
                        l = n[1];
                    return (
                        (0, r.useLayoutEffect)(() => {
                            function e() {
                                a((e) => {
                                    const u = o.O.client.getSize('rem');
                                    return e.width === u.width && e.height === u.height ? e : E(u);
                                });
                            }
                            return (
                                e(),
                                l(!0),
                                o.O.client.events.on('clientResized', e),
                                o.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (o.O.client.events.off('clientResized', e),
                                        o.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        s().createElement(m.Provider, { value: t }, i && e)
                    );
                };
                var F = t(483),
                    D = t.n(F),
                    p = t(926),
                    g = t.n(p);
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
                const v = () => {
                        const e = (0, r.useContext)(m),
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
                        return { mediaSize: a, mediaWidth: n, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    b = ['children', 'className'];
                function f() {
                    return (
                        (f =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        f.apply(this, arguments)
                    );
                }
                const w = {
                        [B.ExtraSmall]: '',
                        [B.Small]: g().SMALL_WIDTH,
                        [B.Medium]: `${g().SMALL_WIDTH} ${g().MEDIUM_WIDTH}`,
                        [B.Large]: `${g().SMALL_WIDTH} ${g().MEDIUM_WIDTH} ${g().LARGE_WIDTH}`,
                        [B.ExtraLarge]: `${g().SMALL_WIDTH} ${g().MEDIUM_WIDTH} ${g().LARGE_WIDTH} ${g().EXTRA_LARGE_WIDTH}`,
                    },
                    S = {
                        [h.ExtraSmall]: '',
                        [h.Small]: g().SMALL_HEIGHT,
                        [h.Medium]: `${g().SMALL_HEIGHT} ${g().MEDIUM_HEIGHT}`,
                        [h.Large]: `${g().SMALL_HEIGHT} ${g().MEDIUM_HEIGHT} ${g().LARGE_HEIGHT}`,
                        [h.ExtraLarge]: `${g().SMALL_HEIGHT} ${g().MEDIUM_HEIGHT} ${g().LARGE_HEIGHT} ${g().EXTRA_LARGE_HEIGHT}`,
                    },
                    M = {
                        [C.ExtraSmall]: '',
                        [C.Small]: g().SMALL,
                        [C.Medium]: `${g().SMALL} ${g().MEDIUM}`,
                        [C.Large]: `${g().SMALL} ${g().MEDIUM} ${g().LARGE}`,
                        [C.ExtraLarge]: `${g().SMALL} ${g().MEDIUM} ${g().LARGE} ${g().EXTRA_LARGE}`,
                    },
                    T = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, b);
                        const n = v(),
                            r = n.mediaWidth,
                            i = n.mediaHeight,
                            o = n.mediaSize;
                        return s().createElement('div', f({ className: D()(t, w[r], S[i], M[o]) }, a), u);
                    },
                    x = ['children'];
                const y = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, x);
                    return s().createElement(A, null, s().createElement(T, t, u));
                };
                var k = t(533),
                    P = t.n(k),
                    N = t(281);
                let L;
                function O(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(L || (L = {}));
                const I = (e) => e.replace(/&nbsp;/g, ' '),
                    H = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    U = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    $ = (e, u, t = L.left) => e.split(u).reduce(t === L.left ? H : U, []),
                    G = (() => {
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
                    W = ['zh_cn', 'zh_sg', 'zh_tw'],
                    z = (e, u = L.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (W.includes(t)) return G(e);
                        if ('ja' === t) {
                            return (0, N.D4)()
                                .parse(e)
                                .map((e) => I(e));
                        }
                        return ((e, u = L.left) => {
                            let t = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = I(e);
                            return ($(n, /( )/, u).forEach((e) => (t = t.concat($(e, a, L.left)))), t);
                        })(e, u);
                    };
                var V = t(916),
                    j = t(613);
                (Date.now(), j.Ew.getRegionalDateTime, j.Ew.getFormattedDateTime);
                const Y = (e = 1) => {
                        const u = new Error().stack;
                        let t,
                            a = R.invalid('resId'),
                            n = '';
                        var r;
                        u &&
                            ((n = (null == (r = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) || ''),
                            (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (a = window.subViews[t].id));
                        return { callerUrl: n, caller: t, stack: u, resId: a };
                    },
                    q = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    X = (e) => {
                        const u = (0, r.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    K = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    Z = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    Q = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const a = q(`${e}.${t}`, window);
                                return K(a) ? u(e, t, a) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    J = (e) => {
                        const u = ((e) => {
                                const u = Y(),
                                    t = u.caller,
                                    a = u.resId,
                                    n = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: n, modelPath: Z(n, e || ''), resId: a };
                            })(),
                            t = u.modelPrefix,
                            a = e.split('.');
                        if (a.length > 0) {
                            const e = [a[0]];
                            return (
                                a.reduce((u, a) => {
                                    const n = q(Z(t, `${u}.${a}`), window);
                                    return K(n) ? (e.push(n.id), `${u}.${a}.value`) : (e.push(a), `${u}.${a}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    };
                const ee = () => (window.injected || (window.injected = new Map()), window.injected);
                const ue = V.Sw.instance;
                let te;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(te || (te = {}));
                const ae = (e = 'model', u = te.Deep) => {
                    const t = (0, r.useState)(0),
                        a = (t[0], t[1]),
                        n = (0, r.useMemo)(() => Y(), []),
                        s = n.callerUrl,
                        i = n.caller,
                        o = n.resId,
                        l = (0, r.useMemo)(() => {
                            const u = (function (e) {
                                return ee().has(e);
                            })(s.replace('.js', '.html'));
                            return window.__feature && window.__feature !== i && !u ? `subViews.${i}.${e}` : e;
                        }, [s, i, e]),
                        c = (0, r.useState)(() =>
                            ((e) => {
                                const u = q(e, window);
                                for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                return K(u) ? u.value : u;
                            })(Q(l)),
                        ),
                        E = c[0],
                        _ = c[1],
                        m = (0, r.useRef)(-1);
                    return (
                        X(() => {
                            if (
                                ('boolean' == typeof u &&
                                    ((u = u ? te.Deep : te.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                u !== te.None)
                            ) {
                                const t = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        u === te.Deep
                                            ? (e === E && a((e) => e + 1), _(e))
                                            : _(Object.assign([], e));
                                    },
                                    n = J(e);
                                m.current = ue.addCallback(n, t, o, u === te.Deep);
                            }
                        }),
                        (0, r.useEffect)(() => {
                            if (u !== te.None)
                                return () => {
                                    ue.removeCallback(m.current, o);
                                };
                        }, [o, u]),
                        E
                    );
                };
                V.Sw.instance;
                t(368);
                const ne = [
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
                function re(e) {
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
                const se = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: V.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    ie = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            _ = void 0 !== E && E,
                            m = e.decoratorId,
                            d = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            p = void 0 === D ? 0 : D,
                            g = e.onShow,
                            C = e.onHide,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, ne);
                        const h = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, r.useMemo)(() => p || Y().resId, [p]),
                            b = (0, r.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (se(t, d, { isMouseEvent: !0, on: !0, arguments: re(a) }, v),
                                    g && g(),
                                    (h.current.isVisible = !0));
                            }, [t, d, a, v, g]),
                            f = (0, r.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        se(t, d, { on: !1 }, v),
                                        h.current.isVisible && C && C(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, d, v, C]),
                            w = (0, r.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        ((0, r.useEffect)(() => {
                            const e = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === F && f();
                            }, [F, f]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        (window.removeEventListener('mouseleave', f), f());
                                    }
                                ),
                                [f],
                            ));
                        return F
                            ? (0, r.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(h.current.timeoutId),
                                                      (h.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                      n && n(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (f(), null == s || s(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === _ && f(), null == o || o(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === _ && f(), null == i || i(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : u;
                        var S;
                    },
                    oe = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function le() {
                    return (
                        (le =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        le.apply(this, arguments)
                    );
                }
                const ce = R.views.common.tooltip_window.simple_tooltip_content,
                    Ee = (e) => {
                        let u = e.children,
                            t = e.body,
                            a = e.header,
                            n = e.note,
                            i = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, oe);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: a, note: n, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, a, n, o]);
                        return s().createElement(
                            ie,
                            le(
                                {
                                    contentId:
                                        ((E = null == o ? void 0 : o.hasHtmlContent),
                                        E ? ce.SimpleTooltipHtmlContent('resId') : ce.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    },
                    _e = 'modeSelector',
                    me = 'disabled',
                    de = {
                        base: 'MenuItem_base_2b',
                        base__modeSelectorName: 'MenuItem_base__modeSelectorName_36',
                        base__enabledState: 'MenuItem_base__enabledState_9c',
                        modeSelector: 'MenuItem_modeSelector_b8',
                        modeIcon: 'MenuItem_modeIcon_a5',
                        label: 'MenuItem_label_d9',
                        base__disabledState: 'MenuItem_base__disabledState_1a',
                        titleWrapper: 'MenuItem_titleWrapper_77',
                        title: 'MenuItem_title_17',
                        arrow: 'MenuItem_arrow_17',
                        arrow__verticalCenter: 'MenuItem_arrow__verticalCenter_21',
                        modeName: 'MenuItem_modeName_05',
                    };
                function Ae() {
                    return (
                        (Ae =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ae.apply(this, arguments)
                    );
                }
                const Fe = R.strings,
                    De = {
                        [_e]: Fe.tooltips.header.battleType,
                        tournament: Fe.tooltips.header.buttons.tournaments,
                        achievements: Fe.tooltips.header.buttons.profile,
                    };
                function pe(e) {
                    return Fe.menu.headerButtons.$dyn(e);
                }
                function ge(e) {
                    return 'string' == typeof e ? o.O.intl.toUpperCase(e) : e;
                }
                const Ce = ({
                        name: e,
                        state: u,
                        modeName: t,
                        modeId: a,
                        modeIcon: n,
                        onClick: i,
                        title: l,
                        withTooltip: c = !0,
                        withArrow: E = !1,
                        className: _,
                    }) => {
                        const m = (0, r.useMemo)(() => {
                            if (c)
                                return (function (e) {
                                    var u, t, a;
                                    const n = null != (u = De[e]) ? u : Fe.tooltips.header.buttons.$dyn(e);
                                    return {
                                        header: null != (t = n.$dyn('header')) ? t : '',
                                        body: null != (a = n.$dyn('body')) ? a : '',
                                    };
                                })(e);
                        }, [c, e]);
                        return s().createElement(
                            Ee,
                            Ae({}, m, { isEnabled: c }),
                            s().createElement(
                                'div',
                                {
                                    className: D()(de.base, de[`base__${u}State`], de[`base__${e}Name`], _),
                                    onMouseEnter: function () {
                                        u !== me && o.O.sound.play.sound('highlight');
                                    },
                                    onClick: () => {
                                        u !== me && i(e);
                                    },
                                    lang: R.strings.settings.LANGUAGE_CODE(),
                                },
                                e === _e
                                    ? s().createElement(
                                          s().Fragment,
                                          null,
                                          s().createElement(
                                              'div',
                                              { className: de.modeSelector },
                                              s().createElement('div', { className: de.label }, ge(l || pe(e))),
                                              t && s().createElement('div', { className: de.modeName }, ge(t)),
                                              s().createElement('div', {
                                                  className: de.modeIcon,
                                                  style: {
                                                      backgroundImage: `url(${null != n ? n : `R.images.gui.maps.icons.battleTypes.c_64x64.${a}`})`,
                                                  },
                                              }),
                                          ),
                                          s().createElement(
                                              'svg',
                                              {
                                                  className: de.arrow,
                                                  width: '7',
                                                  height: '18',
                                                  viewBox: '0 0 7 18',
                                                  fill: 'none',
                                                  xmlns: 'http://www.w3.org/2000/svg',
                                              },
                                              s().createElement('path', {
                                                  d: 'M6.5 0H4.04686L0 9L4.04686 18H6.5L2.5 9L6.5 0Z',
                                                  fill: '#eeede9',
                                                  fillOpacity: '0.9',
                                              }),
                                          ),
                                      )
                                    : s().createElement(
                                          'div',
                                          { className: de.titleWrapper },
                                          s().createElement('div', { className: de.title }, ge(l || pe(e))),
                                          E &&
                                              s().createElement(
                                                  'svg',
                                                  {
                                                      className: D()(de.arrow, de.arrow__verticalCenter),
                                                      width: '7',
                                                      height: '18',
                                                      viewBox: '0 0 7 18',
                                                      fill: 'none',
                                                      xmlns: 'http://www.w3.org/2000/svg',
                                                  },
                                                  s().createElement('path', {
                                                      d: 'M6.5 0H4.04686L0 9L4.04686 18H6.5L2.5 9L6.5 0Z',
                                                      fill: '#eeede9',
                                                      fillOpacity: '0.9',
                                                  }),
                                              ),
                                      ),
                            ),
                        );
                    },
                    Be = (e) => {
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
                    he = (e, u, t) => (t < e ? e : t > u ? u : t),
                    ve = [];
                function be(e) {
                    const u = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, u.current)(...e), ve)
                    );
                }
                function fe(e, u, t = []) {
                    const a = (0, r.useRef)(0),
                        n = (0, r.useCallback)(() => window.clearInterval(a.current), t || []);
                    (0, r.useEffect)(() => n, [n]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, r.useCallback)((t) => {
                            ((a.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, s),
                        n,
                    ];
                }
                function we(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const Se = {
                    playHighlight() {
                        we('highlight');
                    },
                    playClick() {
                        we('play');
                    },
                    playYes() {
                        we('yes1');
                    },
                };
                function Me(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Te(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Te(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Te(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                function xe(e, u, t) {
                    const a = (0, r.useMemo)(
                        () =>
                            (function (e, u, t, a) {
                                let n,
                                    r = !1,
                                    s = 0;
                                function i() {
                                    n && clearTimeout(n);
                                }
                                function o(...o) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function E() {
                                        ((s = Date.now()), t.apply(l, o));
                                    }
                                    r ||
                                        (a && !n && E(),
                                        i(),
                                        void 0 === a && c > e
                                            ? E()
                                            : !0 !== u &&
                                              (n = setTimeout(
                                                  a
                                                      ? function () {
                                                            n = void 0;
                                                        }
                                                      : E,
                                                  void 0 === a ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((a = t), (t = u), (u = void 0)),
                                    (o.cancel = function () {
                                        (i(), (r = !0));
                                    }),
                                    o
                                );
                            })(t, e),
                        u,
                    );
                    return ((0, r.useEffect)(() => a.cancel, [a]), a);
                }
                var ye = t(30);
                let Re;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Re || (Re = {}));
                const ke = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Pe = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: a,
                        getWrapperSize: n,
                        forceTriggerMouseMove: s,
                    }) => {
                        const i = (e, t) => {
                            const a = u(e),
                                n = a[0],
                                r = a[1];
                            return r <= n ? 0 : he(n, r, t);
                        };
                        return (o = {}) => {
                            const l = o.settings,
                                c = void 0 === l ? ke : l,
                                E = (0, r.useRef)(null),
                                _ = (0, r.useRef)(null),
                                m = (0, r.useRef)(!1),
                                d = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        a = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        n = (e, ...t) => {
                                            for (var a, n = Me(u(e).values()); !(a = n()).done; ) (0, a.value)(...t);
                                        };
                                    return (0, r.useMemo)(() => ({ on: t, off: a, trigger: n }), []);
                                })(),
                                A = xe(
                                    () => {
                                        s && s();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, ye.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = E.current;
                                        u && (t(u, e), d.trigger('change', e), s && m.current && A());
                                    },
                                    onRest: (e) => d.trigger('rest', e),
                                    onStart: (e) => d.trigger('start', e),
                                    onPause: (e) => d.trigger('pause', e),
                                })),
                                D = F[0],
                                p = F[1],
                                g = (0, r.useCallback)(
                                    (e, u, t) => {
                                        var a;
                                        const n = D.scrollPosition.get(),
                                            r = (null != (a = D.scrollPosition.goal) ? a : 0) - n;
                                        return i(e, u * t + r + n);
                                    },
                                    [D.scrollPosition],
                                ),
                                C = (0, r.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const a = E.current;
                                        a &&
                                            p.start({
                                                scrollPosition: i(a, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(a, D.scrollPosition.get()) },
                                            });
                                    },
                                    [p, c.animationConfig, D.scrollPosition],
                                ),
                                B = (0, r.useCallback)(
                                    (e) => {
                                        const u = E.current,
                                            t = _.current;
                                        if (!u || !t) return;
                                        const a = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            r = g(u, e, a);
                                        C(r);
                                    },
                                    [C, g, c.step],
                                ),
                                h = (0, r.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && B(a(e)),
                                            E.current && d.trigger('mouseWheel', e, D.scrollPosition, u(E.current)));
                                    },
                                    [D.scrollPosition, B, d],
                                ),
                                v = ((e, u = []) => {
                                    const t = (0, r.useRef)(),
                                        a = (0, r.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
                                    return (
                                        (0, r.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        Be(() => {
                                            const e = E.current;
                                            e &&
                                                (C(i(e, D.scrollPosition.goal), { immediate: !0 }),
                                                d.trigger('resizeHandled'));
                                        }),
                                    [C, D.scrollPosition.goal],
                                ),
                                b = be(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const u = i(e, D.scrollPosition.goal);
                                    (u !== D.scrollPosition.goal && C(u, { immediate: !0 }),
                                        d.trigger('recalculateContent'));
                                });
                            ((0, r.useEffect)(
                                () => (
                                    window.addEventListener('resize', v),
                                    () => {
                                        window.removeEventListener('resize', v);
                                    }
                                ),
                                [v],
                            ),
                                (0, r.useEffect)(() => {
                                    const e = E.current;
                                    if (!e || !s) return;
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
                                }, [E]));
                            return (0, r.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? n(_.current) : void 0),
                                    getContainerSize: () => (E.current ? e(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? u(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: h,
                                    applyScroll: C,
                                    applyStepTo: B,
                                    contentRef: E,
                                    wrapperRef: _,
                                    scrollPosition: p,
                                    animationScroll: D,
                                    recalculateContent: b,
                                    events: { on: d.on, off: d.off },
                                }),
                                [D.scrollPosition, C, B, d.off, d.on, b, h, p, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Ne = Pe({
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
                        getDirection: (e) => (e.deltaY > 1 ? Re.Next : Re.Prev),
                        forceTriggerMouseMove: o.O.view.forceTriggerMouseMove,
                    }),
                    Le = 'HorizontalBar_base_49',
                    Oe = 'HorizontalBar_base__active_5e',
                    Ie = 'HorizontalBar_leftButton_5f',
                    He = 'HorizontalBar_rightButton_03',
                    Ue = 'HorizontalBar_track_0d',
                    $e = 'HorizontalBar_thumb_fd',
                    Ge = 'HorizontalBar_rail_32',
                    We = 'disable',
                    ze = { pending: !1, offset: 0 },
                    Ve = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    je = () => {},
                    Ye = (e, u) => Math.max(20, e.offsetWidth * u),
                    qe = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Ve, onDrag: a = je }) => {
                        const n = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            E = (0, r.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, r.useState)(ze),
                            d = m[0],
                            A = m[1],
                            F = (0, r.useCallback)(
                                (e) => {
                                    (A(e),
                                        E.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [a],
                            ),
                            p = () => {
                                const u = c.current,
                                    t = E.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && u && t && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / n),
                                    o = he(0, 1, r / (n - a)),
                                    _ = (u.offsetWidth - Ye(u, s)) * o;
                                ((t.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && E.current) {
                                            if (0 === e)
                                                return (
                                                    i.current.classList.add(We),
                                                    void l.current.classList.remove(We)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(We),
                                                    void l.current.classList.add(We)
                                                );
                                            var u, t;
                                            (i.current.classList.remove(We), l.current.classList.remove(We));
                                        }
                                    })(_));
                            },
                            g = be(() => {
                                ((() => {
                                    const u = E.current,
                                        t = c.current,
                                        a = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && a && t)) return;
                                    const s = Math.min(1, a / r);
                                    ((u.style.width = `${Ye(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 !== s ? n.current.classList.add(Oe) : n.current.classList.remove(Oe)));
                                })(),
                                    p());
                            });
                        ((0, r.useEffect)(() => Be(g)),
                            (0, r.useEffect)(
                                () =>
                                    Be(() => {
                                        const u = () => {
                                            p();
                                        };
                                        let t = je;
                                        const a = () => {
                                            (t(), (t = Be(g)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', g),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', g),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', a));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!d.pending) return;
                                const u = o.O.client.events.mouse.move(([u, t]) => {
                                        var n;
                                        const r = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!r || !s) return;
                                        const i = c.current,
                                            o = E.current;
                                        if (!i || !o) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - d.offset - i.getBoundingClientRect().x,
                                            _ = (l / i.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, _),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: _ }));
                                    }),
                                    t = o.O.client.events.mouse.up(() => {
                                        (u(), F(ze));
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, d.offset, d.pending, a, F]));
                        const C = fe((u) => e.applyStepTo(u), _, [e]),
                            B = C[0],
                            h = C[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const v = (e) => {
                            e.target.classList.contains(We) || we('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: D()(Le, u.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: D()(Ie, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(We) || 0 !== e.button || (we('play'), B(Re.Next));
                                },
                                onMouseUp: h,
                                ref: i,
                                onMouseEnter: v,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: D()(Ue, u.track),
                                    onMouseDown: (u) => {
                                        const a = E.current;
                                        if (a && 0 === u.button)
                                            if ((we('play'), u.target === a))
                                                F({ pending: !0, offset: u.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const a = E.current,
                                                        n = e.contentRef.current;
                                                    if (!a || !n) return;
                                                    const r = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * u);
                                                })(u.screenX > a.getBoundingClientRect().x ? Re.Prev : Re.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                s().createElement('div', { ref: E, className: D()($e, u.thumb) }),
                                s().createElement('div', { className: D()(Ge, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: D()(He, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(We) || 0 !== e.button || (we('play'), B(Re.Prev));
                                },
                                onMouseUp: h,
                                ref: l,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    Xe = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Ke = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: n,
                        classNames: i,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: D()(Xe.base, e.base) });
                            }, [a]),
                            _ = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: D()(Xe.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: D()(Xe.defaultScrollArea, n) },
                                s().createElement(Ze, { className: o, api: _, classNames: i }, e),
                            ),
                            s().createElement(qe, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    Ze = ({ api: e, className: u, classNames: t, children: a }) => (
                        (0, r.useEffect)(() => Be(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: D()(Xe.base, u) },
                            s().createElement(
                                'div',
                                {
                                    className: D()(Xe.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: D()(Xe.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                ((Ze.Bar = qe), (Ze.Default = Ke));
                const Qe = Pe({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Re.Next : Re.Prev),
                    }),
                    Je = 'VerticalBar_base_f3',
                    eu = 'VerticalBar_base__active_72',
                    uu = 'VerticalBar_topButton_d7',
                    tu = 'VerticalBar_bottomButton_06',
                    au = 'VerticalBar_track_df',
                    nu = 'VerticalBar_thumb_32',
                    ru = 'VerticalBar_rail_43',
                    su = 'disable',
                    iu = () => {},
                    ou = { pending: !1, offset: 0 },
                    lu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    cu = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Eu = (e, u) => Math.max(20, e.offsetHeight * u),
                    _u = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = lu, onDrag: a = iu }) => {
                        const n = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            E = (0, r.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, r.useState)(ou),
                            d = m[0],
                            A = m[1],
                            F = (0, r.useCallback)(
                                (e) => {
                                    (A(e),
                                        E.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [a],
                            ),
                            p = be(() => {
                                const u = E.current,
                                    t = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && r && u && t)) return;
                                const s = Math.min(1, a / r);
                                return (
                                    (u.style.height = `${Eu(t, s)}px`),
                                    (u.style.display = 'flex'),
                                    n.current &&
                                        (1 !== s ? n.current.classList.add(eu) : n.current.classList.remove(eu)),
                                    s
                                );
                            }),
                            g = be(() => {
                                const u = c.current,
                                    t = E.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && u && t && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / n),
                                    o = he(0, 1, r / (n - a)),
                                    _ = (u.offsetHeight - Eu(u, s)) * o;
                                ((t.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && E.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    i.current.classList.add(su),
                                                    void l.current.classList.remove(su)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(su),
                                                    void l.current.classList.add(su)
                                                );
                                            var u, t;
                                            (i.current.classList.remove(su), l.current.classList.remove(su));
                                        }
                                    })(_));
                            }),
                            C = be(() => {
                                cu(e, () => {
                                    (p(), g());
                                });
                            });
                        ((0, r.useEffect)(() => Be(C)),
                            (0, r.useEffect)(() => {
                                const u = () => {
                                    cu(e, () => {
                                        g();
                                    });
                                };
                                let t = iu;
                                const a = () => {
                                    (t(), (t = Be(C)));
                                };
                                return (
                                    e.events.on('recalculateContent', C),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', C),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', a));
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!d.pending) return;
                                const u = o.O.client.events.mouse.up(() => {
                                        F(ou);
                                    }),
                                    t = o.O.client.events.mouse.move(([u]) => {
                                        cu(e, (t) => {
                                            const n = c.current,
                                                r = E.current,
                                                s = e.getContainerSize();
                                            if (!n || !r || !s) return;
                                            const i = u.screenY - d.offset - n.getBoundingClientRect().y,
                                                o = (i / n.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: r, thumbOffset: i, contentOffset: o }));
                                        });
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, d.offset, d.pending, a, F]));
                        const B = fe((u) => e.applyStepTo(u), _, [e]),
                            h = B[0],
                            v = B[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const b = (e) => {
                            e.target.classList.contains(su) || we('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: D()(Je, u.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: D()(uu, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(su) || 0 !== e.button || (we('play'), h(Re.Next));
                                },
                                ref: i,
                                onMouseEnter: b,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: D()(au, u.track),
                                    onMouseDown: (u) => {
                                        const a = E.current;
                                        if (a && 0 === u.button)
                                            if ((we('play'), u.target === a))
                                                F({ pending: !0, offset: u.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    E.current &&
                                                        cu(e, (a) => {
                                                            if (!a) return;
                                                            const n = t(e),
                                                                r = e.clampPosition(a, a.scrollTop + n * u);
                                                            e.applyScroll(r);
                                                        });
                                                })(u.screenY > a.getBoundingClientRect().y ? Re.Prev : Re.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: b,
                                },
                                s().createElement('div', { ref: E, className: D()(nu, u.thumb) }),
                                s().createElement('div', { className: D()(ru, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: D()(tu, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(su) || 0 !== e.button || (we('play'), h(Re.Prev));
                                },
                                onMouseUp: v,
                                ref: l,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    mu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    du = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: n,
                        scrollClassName: i,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: D()(mu.base, e.base) });
                            }, [a]),
                            _ = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: D()(mu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: D()(mu.area, n) },
                                s().createElement(Au, { className: i, classNames: o, api: _ }, e),
                            ),
                            s().createElement(_u, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    Au = ({ className: e, classNames: u, children: t, api: a }) => (
                        (0, r.useEffect)(() => Be(a.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: D()(mu.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: D()(mu.content, null == u ? void 0 : u.content), ref: a.contentRef },
                                t,
                            ),
                        )
                    );
                Au.Default = du;
                const Fu = { Vertical: n, Horizontal: a },
                    Du = {
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
                    pu = [
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
                function gu() {
                    return (
                        (gu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        gu.apply(this, arguments)
                    );
                }
                const Cu = (e) => {
                    let u = e.caption,
                        t = e.onClick,
                        a = e.goto,
                        n = e.classNames,
                        i = e.onMouseEnter,
                        l = e.onMouseLeave,
                        c = e.onMouseDown,
                        E = e.onMouseUp,
                        _ = e.side,
                        m = void 0 === _ ? 'left' : _,
                        d = e.type,
                        A = void 0 === d ? 'back' : d,
                        F = e.soundHover,
                        p = void 0 === F ? 'highlight' : F,
                        g = e.soundClick,
                        C = void 0 === g ? 'play' : g,
                        B = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, pu);
                    const h = (0, r.useCallback)(
                            (e) => {
                                (null == i || i(e), o.O.sound.play.sound(p));
                            },
                            [i, p],
                        ),
                        v = (0, r.useCallback)(
                            (e) => {
                                null == l || l(e);
                            },
                            [l],
                        ),
                        b = (0, r.useCallback)(
                            (e) => {
                                (null == c || c(e), o.O.sound.play.sound(C));
                            },
                            [c, C],
                        ),
                        f = (0, r.useCallback)(
                            (e) => {
                                null == E || E(e);
                            },
                            [E],
                        );
                    return s().createElement(
                        'div',
                        gu(
                            {
                                className: D()(
                                    Du.base,
                                    Du[`base__${A}`],
                                    Du[`base__${m}`],
                                    null == n ? void 0 : n.base,
                                ),
                                onMouseEnter: h,
                                onMouseLeave: v,
                                onMouseDown: b,
                                onMouseUp: f,
                                onClick: t,
                            },
                            B,
                        ),
                        'info' !== A && s().createElement('div', { className: Du.shine }),
                        s().createElement(
                            'div',
                            {
                                className: D()(
                                    Du.icon,
                                    Du[`icon__${A}`],
                                    Du[`icon__${m}`],
                                    null == n ? void 0 : n.icon,
                                ),
                            },
                            s().createElement('div', { className: D()(Du.glow, null == n ? void 0 : n.glow) }),
                        ),
                        s().createElement(
                            'div',
                            { className: D()(Du.caption, Du[`caption__${A}`], null == n ? void 0 : n.caption) },
                            u,
                        ),
                        a && s().createElement('div', { className: D()(Du.goto, null == n ? void 0 : n.goto) }, a),
                    );
                };
                var Bu = t(521);
                const hu = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function vu(e = Bu.n.NONE, u = hu, t = !1, a = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== Bu.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && o.O.view.isEventHandled()) return;
                                (o.O.view.setEventHandled(), u(n), t && n.stopPropagation());
                            }
                        }
                    }, [u, e, t, a]);
                }
                function bu(e, u, t) {
                    const a = (0, r.useContext)(m);
                    let n = Object.entries(a).filter(([e, u]) => !0 === u && e in c);
                    return (
                        t && (n = n.filter((e) => t.includes(e[0]))),
                        e.reduce((e, t) => {
                            const a = n.map((e) =>
                                D()(
                                    u[((e, u) => e + '__' + u)(t, e[0])],
                                    u[
                                        ((e, u) => {
                                            return e + ((t = u)[0].toUpperCase() + t.slice(1));
                                            var t;
                                        })(t, e[0])
                                    ],
                                ),
                            );
                            return ((e[t] = D()(u[t], ...a)), e);
                        }, {})
                    );
                }
                const fu = ['children'];
                function wu() {
                    return (
                        (wu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        wu.apply(this, arguments)
                    );
                }
                const Su = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, fu);
                    return s().createElement(
                        ie,
                        wu(
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
                };
                function Mu() {
                    return (
                        (Mu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Mu.apply(this, arguments)
                    );
                }
                const Tu = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const a = s().createElement('div', { className: t }, e);
                        if (u.header || u.body) return s().createElement(Ee, u, a);
                        const n = u.contentId;
                        return n ? s().createElement(ie, Mu({}, u, { contentId: n }), a) : s().createElement(Su, u, a);
                    },
                    xu = 'default',
                    yu = 'search',
                    Ru = 'email',
                    ku = 'password',
                    Pu = 'normal',
                    Nu = 'disabled',
                    Lu = 'alert',
                    Ou = 'error',
                    Iu = 'medium',
                    Hu = {
                        [xu]: '',
                        [Ru]: R.strings.common.input.placeholder.email(),
                        [yu]: R.strings.common.input.placeholder.search(),
                        [ku]: R.strings.common.input.placeholder.password(),
                    },
                    Uu = { [xu]: 'text', [Ru]: 'text', [yu]: 'text', [ku]: 'password' },
                    $u = { [xu]: '', [Ru]: 'Invalid email', [yu]: '', [ku]: '' },
                    Gu = R.images.gui.maps.icons.components.input;
                function Wu(e, u) {
                    return (
                        u !== Ru ||
                        (function (e) {
                            const u = e.match(
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            );
                            return Boolean(u);
                        })(e)
                    );
                }
                const zu = {
                        base: 'InputControl_base_e4',
                        base__focused: 'InputControl_base__focused_99',
                        base__alert: 'InputControl_base__alert_50',
                        base__error: 'InputControl_base__error_a7',
                        base__done: 'InputControl_base__done_f4',
                        base__disabled: 'InputControl_base__disabled_d8',
                        input: 'InputControl_input_45',
                        base__small: 'InputControl_base__small_b4',
                        base__medium: 'InputControl_base__medium_57',
                        base__large: 'InputControl_base__large_2d',
                        base__withIcon: 'InputControl_base__withIcon_4b',
                        input__search: 'InputControl_input__search_80',
                        disabled: 'InputControl_disabled_07',
                        placeholder: 'InputControl_placeholder_ae',
                        placeholder__search: 'InputControl_placeholder__search_4f',
                        icon: 'InputControl_icon_57',
                        icon__search: 'InputControl_icon__search_23',
                        clear: 'InputControl_clear_d1',
                    },
                    Vu = (() => {
                        let e = 0;
                        return (u) => (u ? u + '_' : '') + 'input' + e++;
                    })(),
                    ju = s().memo(
                        ({
                            componentId: e,
                            value: u = '',
                            type: t = xu,
                            size: a = Iu,
                            variant: n = Pu,
                            placeholder: i = '',
                            maxLength: o,
                            highlighted: l,
                            withClear: c,
                            selectOnFocus: E = !0,
                            iconSource: _,
                            classMix: m,
                            onMouseEnter: d,
                            onMouseLeave: A,
                            onMouseDown: F,
                            onMouseUp: p,
                            onClick: g,
                            onChange: C,
                            onClear: B,
                            onFocus: h,
                            onBlur: v,
                        }) => {
                            const b = (0, r.useState)(!1),
                                f = b[0],
                                w = b[1],
                                S = (0, r.useRef)(null),
                                M = (0, r.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                T = n !== Nu,
                                x = (0, r.useCallback)(
                                    (e) => {
                                        T && (w(!0), h && h(e));
                                    },
                                    [T, h],
                                ),
                                y = (0, r.useCallback)(
                                    (e) => {
                                        T && !M.current.mouseOver && (w(!1), v && v(e));
                                    },
                                    [T, v],
                                );
                            (0, r.useEffect)(() => {
                                T && f && E && S.current && S.current.select();
                            }, [E, f, T]);
                            const R = (0, r.useCallback)(
                                    (e) => {
                                        T && C && C(e.target.value);
                                    },
                                    [T, C],
                                ),
                                k = (0, r.useMemo)(() => Vu(e), [e]);
                            (0, r.useEffect)(() => {
                                engine.on('IMEConfirmComposition', (e) => {
                                    if (T) {
                                        const u = S.current;
                                        u && u.id && u.id === e && C && C(u.value);
                                    }
                                });
                            }, [T, C]);
                            const P = (0, r.useCallback)(
                                    (e) => {
                                        T && ((M.current.mouseOver = !0), d && d(e));
                                    },
                                    [T, d],
                                ),
                                N = (0, r.useCallback)(
                                    (e) => {
                                        T &&
                                            S.current &&
                                            (M.current.mouseDown && S.current.focus(),
                                            (M.current.mouseOver = !1),
                                            A && A(e));
                                    },
                                    [T, A],
                                ),
                                L = (0, r.useCallback)(
                                    (e) => {
                                        T && ((M.current.mouseDown = !0), F && F(e));
                                    },
                                    [T, F],
                                ),
                                O = (0, r.useCallback)(
                                    (e) => {
                                        T && ((M.current.mouseDown = !1), p && p(e));
                                    },
                                    [T, p],
                                ),
                                I = (0, r.useCallback)(
                                    (e) => {
                                        if (T && S.current) {
                                            ((!f || (f && e.target !== S.current)) && S.current.focus(), g && g(e));
                                        }
                                    },
                                    [f, T, g],
                                ),
                                H = i || Hu[t],
                                U = Boolean(_),
                                $ = D()(
                                    zu.base,
                                    zu[`base__${a}`],
                                    l && zu[`base__${n}`],
                                    f && zu.base__focused,
                                    U && zu.base__withIcon,
                                    m,
                                ),
                                G = (0, r.useMemo)(() => (_ ? { backgroundImage: `url(${_})` } : null), [_]),
                                W = D()(zu.input, zu[`input__${t}`]),
                                z = D()(zu.icon, zu[`icon__${t}`]),
                                V = D()(zu.placeholder, zu[`placeholder__${t}`]);
                            return s().createElement(
                                'div',
                                {
                                    id: e,
                                    className: $,
                                    onMouseEnter: P,
                                    onMouseDown: L,
                                    onMouseUp: O,
                                    onMouseLeave: N,
                                    onClick: I,
                                },
                                !T && s().createElement('div', { className: zu.disabled }),
                                G && s().createElement('div', { style: G, className: z }),
                                s().createElement('input', {
                                    id: k,
                                    ref: S,
                                    className: W,
                                    type: Uu[t],
                                    value: u,
                                    onChange: R,
                                    disabled: !T,
                                    onFocus: x,
                                    onBlur: y,
                                    maxLength: o,
                                }),
                                H && !u && !f && s().createElement('div', { className: V }, H),
                                c && s().createElement('div', { className: zu.clear, onClick: B }),
                            );
                        },
                    ),
                    Yu = {
                        base: 'HelperMessage_base_fd',
                        base__shown: 'HelperMessage_base__shown_20',
                        icon: 'HelperMessage_icon_b8',
                        message: 'HelperMessage_message_a2',
                        message__alert: 'HelperMessage_message__alert_23',
                        message__error: 'HelperMessage_message__error_25',
                        message__done: 'HelperMessage_message__done_ea',
                    },
                    qu = ({ variant: e, show: u = !0, helperText: t, helperIcon: a, classMix: n }) => {
                        const i = (0, r.useMemo)(() => {
                                const u =
                                    a ||
                                    (function (e) {
                                        return e === Lu ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return u && { backgroundImage: `url(${u})` };
                            }, [a, e]),
                            o = D()(Yu.base, u && Yu.base__shown),
                            l = D()(Yu.message, Yu[`message__${e}`], n);
                        return s().createElement(
                            'div',
                            { className: o },
                            i && s().createElement('div', { className: Yu.icon, style: i }),
                            s().createElement('div', { className: l }, t),
                        );
                    },
                    Xu = {
                        base: 'Input_base_0b',
                        base__small: 'Input_base__small_63',
                        base__medium: 'Input_base__medium_66',
                        base__large: 'Input_base__large_c1',
                        helper: 'Input_helper_e1',
                    },
                    Ku = [
                        'componentId',
                        'type',
                        'variant',
                        'size',
                        'value',
                        'tooltipArgs',
                        'helperText',
                        'maxLength',
                        'isValidated',
                        'showHelper',
                        'error',
                        'options',
                        'onFocus',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onChange',
                        'classMix',
                        'controlClassMix',
                        'helperClassMix',
                    ];
                function Zu() {
                    return (
                        (Zu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Zu.apply(this, arguments)
                    );
                }
                const Qu = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    Ju = (e) => {
                        let u = e.componentId,
                            t = e.type,
                            a = void 0 === t ? xu : t,
                            n = e.variant,
                            i = void 0 === n ? Pu : n,
                            o = e.size,
                            l = void 0 === o ? Iu : o,
                            c = e.value,
                            E = e.tooltipArgs,
                            _ = e.helperText,
                            m = void 0 === _ ? '' : _,
                            d = e.maxLength,
                            A = e.isValidated,
                            F = void 0 === A || A,
                            p = e.showHelper,
                            g = void 0 === p || p,
                            C = e.error,
                            B = e.options,
                            h = e.onFocus,
                            v = e.onMouseEnter,
                            b = e.onMouseLeave,
                            f = e.onMouseUp,
                            w = e.onMouseDown,
                            S = e.onChange,
                            M = e.classMix,
                            T = e.controlClassMix,
                            x = e.helperClassMix,
                            y = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Ku);
                        const R = (0, r.useState)(c),
                            k = R[0],
                            P = R[1],
                            N = (0, r.useState)(F),
                            L = N[0],
                            O = N[1],
                            I = (0, r.useMemo)(() => Object.assign({}, Qu, B), [B]),
                            H = (0, r.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: c, type: a }),
                            U = (0, r.useCallback)((e) => {
                                e !== H.current.value &&
                                    ((H.current.value = e), (H.current.isChangeHandled = !1), P(e));
                            }, []),
                            $ = (0, r.useCallback)(
                                (e) => {
                                    let u = !0;
                                    (I.performChangeValidation &&
                                        (u = I.changesValidator ? I.changesValidator(e) : Wu(e, H.current.type)),
                                        S && S(e, u));
                                },
                                [S, I],
                            ),
                            G = (0, r.useCallback)(() => {
                                H.current.debounceTimeout &&
                                    (window.clearTimeout(H.current.debounceTimeout), (H.current.debounceTimeout = 0));
                            }, []),
                            W = (0, r.useCallback)(() => U(''), [U]);
                        (0, r.useEffect)(() => () => G(), [G]);
                        const z = (0, r.useCallback)(
                            (e) => {
                                (G(),
                                    I.debounceTime
                                        ? (H.current.debounceTimeout = window.setTimeout(() => {
                                              $(e);
                                          }, I.debounceTime))
                                        : $(e));
                            },
                            [$, G, I.debounceTime],
                        );
                        ((0, r.useEffect)(() => {
                            H.current.isChangeHandled ||
                                H.current.value !== k ||
                                (z(H.current.value), (H.current.isChangeHandled = !0));
                        }, [k, z]),
                            (0, r.useEffect)(() => {
                                (H.current.isChangeHandled && c !== H.current.value && ((H.current.value = c), P(c)),
                                    (H.current.type = a));
                            }, [c, a]),
                            (0, r.useEffect)(() => {
                                O(F);
                            }, [F, i]));
                        const V = (0, r.useCallback)((e) => v && v(e), [v]),
                            j = (0, r.useCallback)(
                                (e) => {
                                    (I.disableHighlightOnFocus && L && O(!1), h && h(e));
                                },
                                [L, h, I.disableHighlightOnFocus],
                            ),
                            Y = (0, r.useCallback)((e) => f && f(e), [f]),
                            q = (0, r.useCallback)((e) => w && w(e), [w]),
                            X = (0, r.useCallback)((e) => b && b(e), [b]),
                            K = (0, r.useMemo)(
                                () =>
                                    I.withTypeIcon
                                        ? (function (e, u) {
                                              return e === yu ? Gu.$dyn(`search_${u}`) : '';
                                          })(a, l)
                                        : '',
                                [a, l, I.withTypeIcon],
                            ),
                            Z = m || $u[a],
                            Q = Boolean(k),
                            J = C ? Ou : i,
                            ee = Boolean(C) || L,
                            ue = (0, r.useMemo)(
                                () => ('boolean' == typeof I.withClear ? Q && I.withClear : Q && a === yu),
                                [a, Q, I],
                            ),
                            te = D()(Xu.base, Xu[`base__${l}`], Xu[`base__${i}`], M);
                        return s().createElement(
                            'div',
                            { id: u, className: te, onMouseEnter: V, onMouseDown: q, onMouseUp: Y, onMouseLeave: X },
                            s().createElement(
                                Tu,
                                { tooltipArgs: E },
                                s().createElement(
                                    ju,
                                    Zu(
                                        {
                                            componentId: u ? `${u}-inputControl` : void 0,
                                            iconSource: K,
                                            size: l,
                                            type: a,
                                            variant: J,
                                            value: k,
                                            withClear: ue,
                                            highlighted: ee,
                                            selectOnFocus: I.selectOnFocus,
                                            classMix: T,
                                            onFocus: j,
                                            onChange: U,
                                            onClear: W,
                                            maxLength: d,
                                        },
                                        y,
                                    ),
                                ),
                            ),
                            Z &&
                                s().createElement(
                                    'div',
                                    { className: Xu.helper },
                                    s().createElement(qu, {
                                        variant: J,
                                        show: g && (I.isPermanentHelper || ee),
                                        helperText: C || Z,
                                        helperIcon: I.helperIconSource,
                                        classMix: x,
                                    }),
                                ),
                        );
                    },
                    et = {
                        base: 'MapCard_base_6c',
                        base__extraSmall: 'MapCard_base__extraSmall_dd',
                        base__small: 'MapCard_base__small_47',
                        base__medium: 'MapCard_base__medium_80',
                        base__disabled: 'MapCard_base__disabled_e9',
                        base__completed: 'MapCard_base__completed_d8',
                        base__hover: 'MapCard_base__hover_80',
                        background: 'MapCard_background_2b',
                        contextShadow: 'MapCard_contextShadow_c4',
                        checkmark: 'MapCard_checkmark_c6',
                        completed: 'MapCard_completed_d8',
                        title: 'MapCard_title_08',
                        title__disabled: 'MapCard_title__disabled_a8',
                        overlayImage: 'MapCard_overlayImage_e9',
                        overlaySaturation: 'MapCard_overlaySaturation_27',
                        overlayHover: 'MapCard_overlayHover_42',
                    },
                    ut = s().memo(({ title: e, image: u, id: t, onClick: a, isEnabled: n, isCompleted: i }) => {
                        const o = bu(['base'], et),
                            l = (0, r.useState)(!1),
                            c = l[0],
                            E = l[1],
                            _ = (0, r.useCallback)(() => {
                                (Se.playHighlight(), E(!0));
                            }, []),
                            m = (0, r.useCallback)(() => {
                                E(!1);
                            }, []),
                            d = (0, r.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]),
                            A = (0, r.useCallback)(() => {
                                n && (Se.playClick(), a(t));
                            }, [n, a, t]),
                            F = D()(
                                o.base,
                                i && et.base__completed,
                                !n && et.base__disabled,
                                c && n && !i && et.base__hover,
                            ),
                            p = D()(et.overlayHover, !n && et.overlayHover__disabled),
                            g = D()(et.title, !n && et.title__disabled);
                        return s().createElement(
                            'div',
                            { className: F, onClick: A, onMouseEnter: _, onMouseLeave: m },
                            s().createElement(
                                'div',
                                { className: et.background, style: d },
                                s().createElement('div', { className: et.contextShadow }),
                            ),
                            !n && s().createElement('div', { className: et.overlayImage }),
                            s().createElement('div', { className: g }, e),
                            !n && s().createElement('div', { className: et.overlaySaturation }),
                            i &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: et.completed },
                                        R.strings.maps_training.mapSelection.MapCard.completed(),
                                    ),
                                    s().createElement('div', { className: et.checkmark }),
                                ),
                            n && !i && s().createElement('div', { className: p }),
                        );
                    }),
                    tt = {
                        base: 'MapGroup_base_74',
                        titleBlock: 'MapGroup_titleBlock_33',
                        titleBlock__extraSmall: 'MapGroup_titleBlock__extraSmall_c2',
                        titleBlock__small: 'MapGroup_titleBlock__small_59',
                        titleBlock__medium: 'MapGroup_titleBlock__medium_35',
                        title: 'MapGroup_title_c9',
                        count: 'MapGroup_count_d8',
                        status: 'MapGroup_status_ac',
                        statusTitle: 'MapGroup_statusTitle_fe',
                        icon: 'MapGroup_icon_1e',
                        icon__extraSmall: 'MapGroup_icon__extraSmall_84',
                        icon__small: 'MapGroup_icon__small_ca',
                        icon__medium: 'MapGroup_icon__medium_52',
                    },
                    at = s().memo(({ groupTitle: e, count: u, status: t, classMix: a }) => {
                        const n = bu(['titleBlock', 'icon'], tt),
                            r = '(' + u + ')',
                            i = D()(tt.base, a);
                        return s().createElement(
                            'div',
                            { className: i },
                            s().createElement(
                                'div',
                                { className: n.titleBlock },
                                s().createElement('div', { className: tt.title }, e),
                                s().createElement('div', { className: tt.count }, r),
                            ),
                            t &&
                                s().createElement(
                                    Ee,
                                    {
                                        header: R.strings.maps_training.mapSelection.statusTitle.tips.header(),
                                        body: R.strings.maps_training.mapSelection.statusTitle.tips.body(),
                                    },
                                    s().createElement(
                                        'div',
                                        { className: tt.status },
                                        s().createElement('div', { className: n.icon }),
                                        s().createElement(
                                            'div',
                                            { className: tt.statusTitle },
                                            R.strings.maps_training.mapSelection.statusTitle.status(),
                                        ),
                                    ),
                                ),
                        );
                    }),
                    nt = 'MapListEmpty_base_f0',
                    rt = 'MapListEmpty_block_21',
                    st = 'MapListEmpty_title_a3',
                    it = 'MapListEmpty_description_59',
                    ot = s().memo(({ title: e, description: u, classMix: t }) => {
                        const a = O(R.strings.maps_training.mapSelection.MapListEmpty.text(), { searchTxt: u }),
                            n = D()(nt, t);
                        return s().createElement(
                            'div',
                            { className: n },
                            s().createElement(
                                'div',
                                { className: rt },
                                s().createElement('div', { className: st }, e),
                                s().createElement('div', { className: it }, a),
                            ),
                        );
                    });
                let lt;
                !(function (e) {
                    ((e.Button = 'button'), (e.Slot = 'slot'));
                })(lt || (lt = {}));
                const ct = {
                        base: 'ToggleButton_base_4d',
                        base__slot: 'ToggleButton_base__slot_4e',
                        base__active: 'ToggleButton_base__active_8d',
                        base__disabled: 'ToggleButton_base__disabled_ab',
                        background: 'ToggleButton_background_f3',
                        content: 'ToggleButton_content_90',
                        overlay: 'ToggleButton_overlay_1d',
                        base__button: 'ToggleButton_base__button_f5',
                        indicator: 'ToggleButton_indicator_c3',
                    },
                    Et = () => {},
                    _t = s().memo(
                        ({
                            active: e = !1,
                            className: u,
                            children: t,
                            toggleType: a = lt.Button,
                            onClick: n,
                            disabled: i,
                            soundClick: o = 'play',
                            soundHover: l = 'highlight',
                            onMouseEnter: c = Et,
                            onMouseDown: E = Et,
                            onMouseUp: _ = Et,
                            onMouseLeave: m = Et,
                        }) => {
                            const d = (0, r.useCallback)(
                                    (u) => {
                                        i || (we(o), n && n(u, e));
                                    },
                                    [n, i, e, o],
                                ),
                                A = (0, r.useCallback)(
                                    (e) => {
                                        i || (we(l), c && c(e));
                                    },
                                    [i, l, c],
                                ),
                                F = (0, r.useCallback)(
                                    (e) => {
                                        i || ((1 !== e.button && 2 !== e.button) || (null !== o && we(o)), E && E(e));
                                    },
                                    [E, i, o],
                                ),
                                p = D()(ct.base, u, ct[`base__${a}`], e && ct.base__active, i && ct.base__disabled);
                            return s().createElement(
                                'div',
                                {
                                    className: p,
                                    onClick: d,
                                    onMouseEnter: A,
                                    onMouseUp: i ? Et : _,
                                    onMouseDown: F,
                                    onMouseLeave: i ? Et : m,
                                },
                                s().createElement('div', { className: ct.content }, t),
                                a === lt.Button && s().createElement('div', { className: ct.background }),
                                s().createElement('div', { className: ct.overlay }),
                                s().createElement('div', { className: ct.indicator }),
                            );
                        },
                    ),
                    mt = {
                        base: 'MapSelect_base_30',
                        info: 'MapSelect_info_c7',
                        info__extraSmall: 'MapSelect_info__extraSmall_a1',
                        scrollArea: 'MapSelect_scrollArea_20',
                        scrollContent: 'MapSelect_scrollContent_be',
                        scrollContent__extraSmall: 'MapSelect_scrollContent__extraSmall_7e',
                        scrollContent__small: 'MapSelect_scrollContent__small_d0',
                        scrollContent__medium: 'MapSelect_scrollContent__medium_5b',
                        group: 'MapSelect_group_c9',
                        group__extraSmall: 'MapSelect_group__extraSmall_85',
                        group__small: 'MapSelect_group__small_bc',
                        group__medium: 'MapSelect_group__medium_eb',
                        topBlock: 'MapSelect_topBlock_37',
                        topBlock__extraSmall: 'MapSelect_topBlock__extraSmall_6a',
                        topBlock__small: 'MapSelect_topBlock__small_92',
                        topBlock__medium: 'MapSelect_topBlock__medium_0a',
                        title: 'MapSelect_title_54',
                        title__extraSmall: 'MapSelect_title__extraSmall_36',
                        title__small: 'MapSelect_title__small_0f',
                        title__medium: 'MapSelect_title__medium_2e',
                        subtitle: 'MapSelect_subtitle_33',
                        subtitle__extraSmall: 'MapSelect_subtitle__extraSmall_7a',
                        subtitle__small: 'MapSelect_subtitle__small_dd',
                        subtitle__medium: 'MapSelect_subtitle__medium_21',
                        filter: 'MapSelect_filter_1a',
                        filter__extraSmall: 'MapSelect_filter__extraSmall_7a',
                        filter__small: 'MapSelect_filter__small_61',
                        filter__medium: 'MapSelect_filter__medium_ba',
                        line: 'MapSelect_line_b2',
                        line__extraSmall: 'MapSelect_line__extraSmall_7f',
                        line__small: 'MapSelect_line__small_b7',
                        line__medium: 'MapSelect_line__medium_30',
                        endLine: 'MapSelect_endLine_34',
                        maps: 'MapSelect_maps_8a',
                        maps__extraSmall: 'MapSelect_maps__extraSmall_d5',
                        maps__small: 'MapSelect_maps__small_d9',
                        maps__medium: 'MapSelect_maps__medium_49',
                        filterBlock: 'MapSelect_filterBlock_e3',
                        toggle: 'MapSelect_toggle_eb',
                        iconToggle: 'MapSelect_iconToggle_14',
                        input: 'MapSelect_input_77',
                        scrollSensitiveArea: 'MapSelect_scrollSensitiveArea_9b',
                        menuItems: 'MapSelect_menuItems_4d',
                        menuItems__medium: 'MapSelect_menuItems__medium_44',
                        menuItems__large: 'MapSelect_menuItems__large_e7',
                        menuItems__extraLarge: 'MapSelect_menuItems__extraLarge_0e',
                    };
                function dt() {
                    return (
                        (dt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        dt.apply(this, arguments)
                    );
                }
                const At = (e, u) => {
                        if (e.value.isEnabled === u.value.isEnabled) {
                            const t = e.value.isCompleted ? 1 : 0,
                                a = u.value.isCompleted ? 1 : 0;
                            return t !== a && e.value.isEnabled
                                ? t > a
                                    ? 1
                                    : -1
                                : ((e, u) => String(e.value.title).localeCompare(String(u.value.title)))(e, u);
                        }
                        return ((e, u) => (e.value.isEnabled < u.value.isEnabled ? 1 : -1))(e, u);
                    },
                    Ft = () => {
                        const e = ae('model', te.Shallow),
                            u = e.maps,
                            t = e.groups,
                            a = e.onClose,
                            n = e.onSelect,
                            i = e.incompleteFilter,
                            o = e.titleFilter,
                            l = e.isDataLoaded,
                            c = e.onFilteringChange,
                            E = e.onInfoClicked,
                            _ = e.menuItems,
                            m = e.modeName,
                            d = e.modeId,
                            A = e.onNavigate,
                            F = bu(
                                [
                                    'close',
                                    'info',
                                    'title',
                                    'subtitle',
                                    'topBlock',
                                    'filter',
                                    'maps',
                                    'line',
                                    'endLine',
                                    'group',
                                    'scrollContent',
                                    'menuItems',
                                ],
                                mt,
                            ),
                            D = (0, r.useState)(i),
                            p = D[0],
                            g = D[1],
                            C = (0, r.useState)(o || ''),
                            B = C[0],
                            h = C[1],
                            v = Qe(),
                            b = (0, r.useCallback)(() => a(), [a]);
                        vu(Bu.n.ESCAPE, b);
                        const f = (0, r.useMemo)(
                                () =>
                                    u
                                        .filter((e) => {
                                            const u = e.value,
                                                t = !p || !u.isCompleted,
                                                a = u.title,
                                                n =
                                                    '' === B ||
                                                    (a &&
                                                        Boolean(
                                                            a.match(
                                                                new RegExp(
                                                                    B.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
                                                                    'i',
                                                                ),
                                                            ),
                                                        ));
                                            return t && n;
                                        })
                                        .sort(At),
                                [u, l, p, B],
                            ),
                            w = {};
                        f.forEach(({ value: e }) => {
                            const u = e.groupId;
                            (u in w || (w[u] = new Array()), w[u].push(e));
                        });
                        const S = (0, r.useCallback)(() => {
                                (Se.playYes(), E());
                            }, [E]),
                            M = (0, r.useCallback)(
                                (e) => {
                                    (c({ incompleteFilter: p, titleFilter: B }), n({ id: e }));
                                },
                                [B, c, n, p],
                            ),
                            T = (0, r.useCallback)(() => {
                                (c({ incompleteFilter: !p, titleFilter: B }), g(!p));
                            }, [B, c, p]),
                            x = (0, r.useCallback)(
                                (e) => {
                                    (c({ incompleteFilter: p, titleFilter: e }), h(e));
                                },
                                [c, p],
                            ),
                            y = t.map(({ value: e }, u) =>
                                void 0 === w[e.groupId]
                                    ? null
                                    : s().createElement(
                                          'div',
                                          { key: `${e.groupTitle}${u}` },
                                          s().createElement(at, {
                                              key: `${e.groupId}${e.groupTitle}`,
                                              count: w[e.groupId].length,
                                              groupTitle: e.groupTitle,
                                              status: e.isGroupDisabled,
                                              classMix: F.group,
                                          }),
                                          s().createElement(
                                              'div',
                                              { className: F.maps },
                                              w[e.groupId].map((e) =>
                                                  s().createElement(
                                                      ut,
                                                      dt({ key: `${e.id}${e.title}`, onClick: M }, e),
                                                  ),
                                              ),
                                          ),
                                      ),
                            );
                        return s().createElement(
                            'div',
                            { className: mt.base },
                            s().createElement(
                                'div',
                                { className: F.topBlock },
                                s().createElement(
                                    'div',
                                    { className: F.title },
                                    R.strings.maps_training.mapSelection.title(),
                                ),
                                s().createElement(
                                    'div',
                                    { className: F.subtitle },
                                    R.strings.maps_training.mapSelection.subtitle(),
                                ),
                                s().createElement(
                                    'div',
                                    { className: F.filter },
                                    s().createElement(
                                        'div',
                                        { className: mt.filterBlock },
                                        s().createElement(
                                            Ee,
                                            { body: R.strings.maps_training.mapSelection.filters.tip1() },
                                            s().createElement(
                                                _t,
                                                { active: p, onClick: T, className: mt.toggle },
                                                s().createElement('div', { className: mt.iconToggle }),
                                            ),
                                        ),
                                        s().createElement(Ju, {
                                            type: 'search',
                                            value: o,
                                            onChange: x,
                                            placeholder: R.strings.maps_training.mapSelection.filters.tip2(),
                                            classMix: mt.input,
                                            maxLength: 30,
                                        }),
                                    ),
                                ),
                            ),
                            s().createElement('div', { className: F.line }),
                            s().createElement(
                                'div',
                                { className: mt.scrollArea },
                                s().createElement(
                                    Fu.Vertical.Default,
                                    { api: v, className: mt.scrollSensitiveArea },
                                    s().createElement(
                                        'div',
                                        { className: F.scrollContent },
                                        y,
                                        0 === f.length &&
                                            l &&
                                            s().createElement(ot, {
                                                title: R.strings.maps_training.mapSelection.MapListEmpty.title(),
                                                description: B,
                                            }),
                                    ),
                                ),
                            ),
                            s().createElement('div', { className: F.endLine }),
                            s().createElement(
                                'div',
                                { className: F.info },
                                s().createElement(Cu, {
                                    caption: R.strings.maps_training.mapSelection.TextButton.info(),
                                    type: 'info',
                                    onClick: S,
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: F.menuItems },
                                _.map((e) =>
                                    s().createElement(
                                        Ce,
                                        dt({}, e.value, {
                                            key: e.value.name,
                                            modeName: m,
                                            modeId: d,
                                            onClick: () => {
                                                A({ name: e.value.name });
                                            },
                                        }),
                                    ),
                                ),
                            ),
                        );
                    },
                    Dt = 'SceneWrapper_base_85',
                    pt = 'SceneWrapper_grab_cf',
                    gt = 'SceneWrapper_grab__down_50',
                    Ct = ({ children: e, onMoveSpace: u }) => {
                        const t = (0, r.useState)(!1),
                            a = t[0],
                            n = t[1],
                            i = (0, r.useState)(!1),
                            o = i[0],
                            l = i[1],
                            c = (0, r.useRef)(0),
                            E = (0, r.useRef)(0),
                            _ = (0, r.createRef)(),
                            m = (0, r.useCallback)(
                                (e) => {
                                    if (!_.current) return;
                                    const u = _.current.getBoundingClientRect(),
                                        t = u.width,
                                        a = u.height;
                                    return !(
                                        0 === e.clientX ||
                                        0 === e.clientY ||
                                        e.clientX >= t - 1 ||
                                        e.clientY >= a - 1
                                    );
                                },
                                [_],
                            ),
                            d = (0, r.useCallback)(
                                (e) => {
                                    if ((e.preventDefault(), !a || !o || !m(e))) return;
                                    const t = e.clientX,
                                        n = e.clientY,
                                        r = t !== c.current ? t - c.current : 0,
                                        s = n !== E.current ? n - E.current : 0;
                                    (0 === r && 0 === s) ||
                                        ((c.current = t), (E.current = n), u({ dx: r, dy: s, dz: 0 }));
                                },
                                [m, a, o, c, E, u],
                            ),
                            A = (0, r.useCallback)(
                                (e) => {
                                    if ((e.preventDefault(), !m(e))) return;
                                    const t = e.deltaY < 0;
                                    u({ dx: 0, dy: 0, dz: t ? -600 : 600 });
                                },
                                [m, u],
                            ),
                            F = (0, r.useCallback)(() => {
                                (l(!1), n(!1));
                            }, [l]);
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', F),
                                () => {
                                    document.removeEventListener('mouseup', F);
                                }
                            ),
                            [F],
                        );
                        const p = (0, r.useCallback)(
                                (e) => {
                                    (e.preventDefault(),
                                        0 === e.button &&
                                            m(e) &&
                                            (l(!0), n(!0), (c.current = e.clientX), (E.current = e.clientY)));
                                },
                                [m, l],
                            ),
                            g = (0, r.useCallback)(() => l(!1), [l]);
                        const C = D()(pt, o && gt);
                        return s().createElement(
                            'div',
                            { className: Dt },
                            s().createElement('div', {
                                ref: _,
                                className: C,
                                onMouseMove: d,
                                onMouseDown: p,
                                onWheel: A,
                                onMouseOut: function () {
                                    l(!1);
                                },
                                onMouseOver: function (e) {
                                    m(e) && (l(!0), (c.current = e.clientX), (E.current = e.clientY));
                                },
                            }),
                            s().createElement('div', { onMouseMove: g }, e),
                        );
                    },
                    Bt = {
                        base: 'Tooltip_base_7a',
                        base__left: 'Tooltip_base__left_99',
                        base__small: 'Tooltip_base__small_8a',
                        base__extraSmall: 'Tooltip_base__extraSmall_ca',
                        base__teamPoint: 'Tooltip_base__teamPoint_a6',
                        base__bottom: 'Tooltip_base__bottom_02',
                        base__visible: 'Tooltip_base__visible_57',
                        image: 'Tooltip_image_94',
                    },
                    ht = (0, r.memo)(({ image: e, isLeft: u, isBottom: t, isTeamPoint: a, isVisible: n }) => {
                        const i = (0, r.useMemo)(() => ({ backgroundImage: `url(${e})` }), [e]),
                            o = bu(['base'], Bt),
                            l = D()(
                                o.base,
                                Bt['base__' + (u ? 'left' : 'right')],
                                a && Bt.base__teamPoint,
                                t && Bt.base__bottom,
                                n && Bt.base__visible,
                            );
                        return s().createElement(
                            'div',
                            { className: l },
                            s().createElement('div', { className: Bt.image, style: i }),
                        );
                    }),
                    vt = {
                        base: 'Point_base_4d',
                        title: 'Point_title_5c',
                        base__enemyBase: 'Point_base__enemyBase_da',
                        base__main: 'Point_base__main_4a',
                        base__small: 'Point_base__small_23',
                        base__extraSmall: 'Point_base__extraSmall_00',
                        base__left: 'Point_base__left_94',
                        base__hover: 'Point_base__hover_0e',
                        base__point: 'Point_base__point_e3',
                        text: 'Point_text_c0',
                        bullet: 'Point_bullet_67',
                        bulletTeamPointBG: 'Point_bulletTeamPointBG_0e',
                        teamLabel: 'Point_teamLabel_6c',
                        teamLabel__mask: 'Point_teamLabel__mask_98',
                    },
                    bt = (e) => (e / 5.7) * 3.32,
                    ft = (0, r.memo)(
                        ({
                            id: e,
                            isLeft: u,
                            type: t,
                            positionX: a,
                            positionY: n,
                            tooltipImage: i,
                            isSmall: o,
                            isShowTooltip: l,
                            index: c,
                            isHighlighted: E,
                            onPointEvent: _,
                        }) => {
                            const m = (0, r.useRef)(0),
                                d = (0, r.useState)(E),
                                A = d[0],
                                F = d[1],
                                p = ae('model.selectedMapModel', te.None).id,
                                g = 'point' !== t,
                                C = !g || Boolean(i),
                                B = (0, r.useRef)(null),
                                h = (0, r.useRef)(!1),
                                v = (0, r.useState)(window.innerHeight),
                                b = v[0],
                                f = v[1],
                                w = (0, r.useCallback)(() => {
                                    !C || (A && m.current) || (Se.playHighlight(), F(!0), _(e, !0));
                                }, [e, A, C, _]),
                                S = (0, r.useCallback)(() => {
                                    if (C && (A || m.current)) {
                                        const u = m.current;
                                        (u > 0 && (clearTimeout(u), (m.current = 0)), F(!1), _(e, !1));
                                    }
                                }, [e, A, C, _]),
                                M = (0, r.useCallback)(() => {
                                    m.current = window.setTimeout(w, 100);
                                }, [w]),
                                T = (0, r.useCallback)(() => S(), [S]);
                            ((0, r.useEffect)(() => () => clearTimeout(m.current), []),
                                (0, r.useEffect)(() => {
                                    const e = () => f(window.innerHeight);
                                    return (
                                        window.addEventListener('resize', e),
                                        () => window.removeEventListener('resize', e)
                                    );
                                }, []),
                                (0, r.useEffect)(
                                    () =>
                                        Be(() => {
                                            if (!B.current) return;
                                            const e = B.current.getBoundingClientRect().bottom;
                                            h.current = e + viewEnv.remToPx(270) > b;
                                        }),
                                    [b],
                                ));
                            const x = (0, r.useMemo)(() => {
                                    const e = o ? bt(a) : a;
                                    return { top: `${o ? bt(n) : n}rem`, left: `${e}rem` };
                                }, [a, n, o]),
                                y = g
                                    ? R.strings.maps_training.mapSelection.options.minimapBase()
                                    : R.strings.maps_training.$dyn(`c_${p}`).$dyn(e),
                                k = c + 1,
                                P = bu(['base'], vt),
                                N = D()(
                                    P.base,
                                    vt[`base__${t}`],
                                    u ? vt.base__left : vt.base__right,
                                    (A || E) && vt.base__hover,
                                ),
                                L = D()(vt.teamLabel, vt.teamLabel__mask);
                            return s().createElement(
                                'div',
                                { className: N, style: x, ref: B },
                                g && s().createElement('div', { className: vt.bulletTeamPointBG }),
                                s().createElement(
                                    'div',
                                    { onMouseEnter: M, onMouseLeave: T },
                                    s().createElement(
                                        'div',
                                        { className: vt.bullet },
                                        g && s().createElement('div', { className: vt.teamLabel }, k),
                                        'main' === t && s().createElement('div', { className: L }, k),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: vt.title },
                                        y,
                                        l &&
                                            s().createElement(ht, {
                                                image: i,
                                                isLeft: u,
                                                isTeamPoint: g,
                                                isBottom: h.current,
                                                isVisible: A || E,
                                            }),
                                    ),
                                ),
                            );
                        },
                    ),
                    wt = {
                        base: 'Minimap_base_4a',
                        scenario: 'Minimap_scenario_ed',
                        bg: 'Minimap_bg_56',
                        base__small: 'Minimap_base__small_0f',
                        base__extraSmall: 'Minimap_base__extraSmall_00',
                    };
                function St() {
                    return (
                        (St =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        St.apply(this, arguments)
                    );
                }
                const Mt = (e, u) => ({ backgroundImage: `url(${e})`, width: `${u}rem`, height: `${u}rem` }),
                    Tt = (0, r.memo)(({ highlightedPoint: e, onPointEvent: u }) => {
                        const t = ae('model.selectedMapModel', te.Shallow),
                            a = t.id,
                            n = t.points,
                            i = t.scenarioImage,
                            o = (0, r.useContext)(m),
                            l = o.small || o.extraSmall,
                            c = l ? 332 : 570,
                            E = (0, r.useMemo)(() => Mt(`img://spaces/${a}/mmap.dds`, c), [a, c]),
                            _ = (0, r.useMemo)(() => Mt(i, c), [i, c]),
                            d = bu(['base'], wt);
                        return s().createElement(
                            'div',
                            { className: d.base, style: E },
                            s().createElement('div', { className: wt.bg }),
                            s().createElement('div', { className: wt.scenario, style: _ }),
                            n.map(({ value: t }, a) =>
                                s().createElement(
                                    ft,
                                    St(
                                        {
                                            key: `point_${t.id}`,
                                            isSmall: l,
                                            index: a,
                                            onPointEvent: u,
                                            isHighlighted: e === t.id,
                                        },
                                        t,
                                    ),
                                ),
                            ),
                        );
                    }),
                    xt = 'FormatText_base_d0',
                    yt = ({ binding: e, text: u = '', classMix: t, alignment: a = L.left, formatWithBrackets: n }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const i = n && e ? O(u, e) : u;
                        return s().createElement(
                            r.Fragment,
                            null,
                            i.split('\n').map((u, n) =>
                                s().createElement(
                                    'div',
                                    { className: D()(xt, t), key: `${u}-${n}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : z(e, u))))(
                                        u,
                                        a,
                                        e,
                                    ).map((e, u) => s().createElement(r.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    Rt = {
                        base: 'TextKey_base_ea',
                        content: 'TextKey_content_6a',
                        base__highlight: 'TextKey_base__highlight_9f',
                        bullet: 'TextKey_bullet_0f',
                        base__small: 'TextKey_base__small_f5',
                        base__extraSmall: 'TextKey_base__extraSmall_dd',
                    },
                    kt = (0, r.memo)(
                        ({
                            textKey: e,
                            pointId: u,
                            isHighlighted: t,
                            onMouseEnter: a,
                            onMouseLeve: n,
                            value: i,
                            punctuation: o = null,
                        }) => {
                            const l = (0, r.useCallback)(() => a(e, u), [a, u, e]),
                                c = (0, r.useCallback)(() => n(e, u), [n, u, e]),
                                E = bu(['base'], Rt),
                                _ = D()(E.base, t && Rt.base__highlight);
                            return s().createElement(
                                'div',
                                { className: _ },
                                s().createElement(
                                    'div',
                                    { className: Rt.content, onMouseEnter: l, onMouseLeave: c },
                                    s().createElement('div', { className: Rt.bullet }),
                                    i,
                                ),
                                o,
                            );
                        },
                    ),
                    Pt = 'Info_base_6b',
                    Nt = 'Info_icon_b6',
                    Lt = 'Info_text_85',
                    Ot = (0, r.memo)(({ id: e, header: u }) =>
                        s().createElement(
                            Ee,
                            {
                                header: u,
                                body: R.strings.arenas.$dyn(`c_${e}`).description(),
                                onMouseEnter: Se.playHighlight,
                            },
                            s().createElement(
                                'div',
                                { className: Pt },
                                s().createElement('div', { className: Nt }),
                                s().createElement('div', { className: Lt }, R.strings.maps_training.descriptionInfo()),
                            ),
                        ),
                    ),
                    It = {
                        base: 'ScenarioInfo_base_ab',
                        shadow: 'ScenarioInfo_shadow_e9',
                        baseTitle: 'ScenarioInfo_baseTitle_fc',
                        title: 'ScenarioInfo_title_13',
                        base__small: 'ScenarioInfo_base__small_ef',
                        base__extraSmall: 'ScenarioInfo_base__extraSmall_84',
                        tacticTitle: 'ScenarioInfo_tacticTitle_93',
                        tacticDescr: 'ScenarioInfo_tacticDescr_a7',
                        paragraph: 'ScenarioInfo_paragraph_b5',
                    },
                    Ht = /<([A-Za-z][A-Za-z0-9_]*)>.*?<\/\1>/g,
                    Ut = /(?<=<).*?(?=>)/,
                    $t = /(?<=>).*(?=<)/,
                    Gt = /%\([A-Za-z0-9_]*\)s[.,?!;:] ?/g,
                    Wt = /%\([A-Za-z0-9_]*\)(?![sd])/g,
                    zt = /[.,?!;:] ?/g,
                    Vt = (0, r.memo)(({ highlightedPoint: e, onKeywordEvent: u }) => {
                        const t = (0, r.useState)(''),
                            a = t[0],
                            n = t[1],
                            i = ae('model.selectedMapModel', te.Shallow),
                            o = i.id,
                            l = i.selectedScenario,
                            c = i.points,
                            E = i.scenarios[l].value,
                            _ = R.strings.maps_training.$dyn(`c_${o}`),
                            m = _.$dyn(`team${E.team}`),
                            d = m && m.$dyn(E.vehicleType),
                            A = R.strings.arenas.$dyn(`c_${o}`).name(),
                            F = _.upperName(),
                            D = (0, r.useMemo)(() => {
                                const e = E.team,
                                    u = E.scenarioNum,
                                    t = E.vehicleType,
                                    a = O(R.strings.maps_training.baseNum(), { base: e }),
                                    n = O(R.strings.maps_training.scenarioNum(), { scenario: u });
                                return O(R.strings.maps_training.scenario.baseTitle(), {
                                    scenario: n,
                                    vehicle: R.strings.maps_training.vehicleType.$dyn(t),
                                    team: I(a),
                                });
                            }, [E]),
                            p = (0, r.useCallback)(
                                (e, t) => {
                                    (Se.playHighlight(), n(e), u(t, !0));
                                },
                                [u],
                            ),
                            g = (0, r.useCallback)(
                                (e, t) => {
                                    (n(''), u(t, !1));
                                },
                                [u],
                            ),
                            C = (0, r.useMemo)(() => {
                                let e = (d && d.descr()) || '';
                                e = e.replace(Wt, '$&s');
                                const u = {},
                                    t = e.match(Ht);
                                t &&
                                    t.forEach((t, a) => {
                                        const n = (t.match(Ut) || [''])[0],
                                            r = (t.match($t) || [''])[0],
                                            s = `matched${a}`;
                                        ((u[s] = [n, r]), (e = e.replace(t, `%(${s})s`)));
                                    });
                                const a = {},
                                    n = e.match(Gt);
                                return (
                                    n &&
                                        n.forEach((u) => {
                                            const t = (u.match(zt) || [''])[0],
                                                n = u.slice(2, u.length - 2 - t.length);
                                            ((a[n] = t), (e = e.replace(u, u.slice(0, u.length - t.length))));
                                        }),
                                    [e, u, a]
                                );
                            }, [d]),
                            B = C[0],
                            h = C[1],
                            v = C[2],
                            b = (0, r.useMemo)(() => {
                                const u = { p: s().createElement('div', { className: It.paragraph }) };
                                return (
                                    c.forEach((t) => {
                                        const n = t.value.id;
                                        t.value.textKeys.forEach(({ value: t }) => {
                                            u[t] = s().createElement(kt, {
                                                key: `${l}_${t}`,
                                                value: _ && String(_.$dyn(t)),
                                                pointId: n,
                                                textKey: t,
                                                punctuation: v[t],
                                                isHighlighted: a === t || e === n,
                                                onMouseEnter: p,
                                                onMouseLeve: g,
                                            });
                                        });
                                    }),
                                    Object.entries(h).forEach(([t, [n, r]]) => {
                                        u[t] = s().createElement(kt, {
                                            key: `${l}_${t}`,
                                            value: r,
                                            pointId: n,
                                            textKey: t,
                                            punctuation: v[t],
                                            isHighlighted: a === t || e === n,
                                            onMouseEnter: p,
                                            onMouseLeve: g,
                                        });
                                    }),
                                    u
                                );
                            }, [c, h, v, l, a, e, p, g, _]),
                            f = bu(['base'], It);
                        return s().createElement(
                            'div',
                            { className: f.base },
                            s().createElement('div', { className: It.shadow }),
                            s().createElement('div', { className: It.baseTitle }, D),
                            s().createElement('div', { className: It.title }, F),
                            s().createElement('div', { className: It.tacticTitle }, d && d.title()),
                            s().createElement(
                                'div',
                                { className: It.tacticDescr },
                                d && s().createElement(yt, { text: B, binding: b }),
                            ),
                            s().createElement(Ot, { id: o, header: A }),
                        );
                    });
                let jt, Yt, qt, Xt, Kt, Zt, Qt, Jt;
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
                })(jt || (jt = {})),
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
                    })(Yt || (Yt = {})),
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
                    })(qt || (qt = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(Xt || (Xt = {})),
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
                    })(Kt || (Kt = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Zt || (Zt = {})),
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
                    })(Qt || (Qt = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(Jt || (Jt = {})));
                const ea = [jt.Attachment];
                const ua = ({ value: e, format: u = 'integral' }) => {
                        const t = (function (e) {
                                return 'gold' === e ? V.B3.GOLD : V.B3.INTEGRAL;
                            })(u),
                            a = V.Z5.getNumberFormat(e, t);
                        return void 0 !== e && void 0 !== a ? a : null;
                    },
                    ta = [
                        jt.Items,
                        jt.Equipment,
                        jt.Xp,
                        jt.XpFactor,
                        jt.Blueprints,
                        jt.BlueprintsAny,
                        jt.Goodies,
                        jt.Berths,
                        jt.Slots,
                        jt.Tokens,
                        jt.CrewSkins,
                        jt.CrewBooks,
                        jt.Customizations,
                        jt.CreditsFactor,
                        jt.TankmenXp,
                        jt.TankmenXpFactor,
                        jt.FreeXpFactor,
                        jt.BattleToken,
                        jt.LootBox,
                        jt.PremiumUniversal,
                        jt.NaturalCover,
                        jt.BpCoin,
                        jt.BattlePassSelectToken,
                        jt.BattlaPassFinalAchievement,
                        jt.BattleBadge,
                        jt.BattlePassTicket,
                        jt.BonusX5,
                        jt.CrewBonusX3,
                        jt.EpicSelectToken,
                        jt.Comp7TokenWeeklyReward,
                        jt.DeluxeGift,
                        jt.ModernizedDevicesT1Gift,
                        jt.ModernizedDevicesT2Gift,
                        jt.ModernizedDevicesT3Gift,
                        jt.BattleBoosterGift,
                        jt.OptionalDevice,
                        jt.Attachment,
                    ],
                    aa = [jt.Gold, jt.Credits, jt.Crystal, jt.FreeXp],
                    na = [jt.BattlePassPoints, jt.EquipCoin],
                    ra = [jt.PremiumPlus, jt.Premium],
                    sa = (e) =>
                        ta.includes(e)
                            ? Xt.MULTI
                            : aa.includes(e)
                              ? Xt.CURRENCY
                              : na.includes(e)
                                ? Xt.NUMBER
                                : ra.includes(e)
                                  ? Xt.PREMIUM_PLUS
                                  : Xt.STRING,
                    ia = ['engravings', 'backgrounds'],
                    oa = ['engraving', 'background'],
                    la = (e, u = qt.Small) => {
                        const t = e.name,
                            a = e.type,
                            n = e.value,
                            r = e.icon,
                            s = e.item,
                            i = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case qt.S600x450:
                                        return 'c_600x450';
                                    case qt.S400x300:
                                        return 'c_400x300';
                                    case qt.S296x222:
                                        return 'c_296x222';
                                    case qt.S232x174:
                                        return 'c_232x174';
                                    case qt.Big:
                                        return 'c_80x80';
                                    case qt.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}_${n}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${r}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${r}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const a = ia[e];
                                    if (a) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(a),
                                            r = n.$dyn(t);
                                        return r ? `${r}` : `${n.$dyn(oa[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, u, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${o}.${r}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${o}.${r}`;
                            case 'attachment':
                                return `R.images.gui.maps.vehicles.attachments.${u}.${r}`;
                            case 'statTracker':
                                return `R.images.gui.maps.vehicles.statTrackers.${u}.${r}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    ca = (e, u, t) => {
                        const a = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            a,
                            t,
                        );
                    },
                    Ea = [qt.Small, qt.Big],
                    _a = {
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
                    ma = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: a = qt.Big,
                        special: n,
                        value: r,
                        valueType: i,
                        title: o,
                        style: l,
                        className: c,
                        classNames: E,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const d = ((e, u) => {
                                if (void 0 === u || !Ea.includes(e)) return null;
                                switch (u) {
                                    case Kt.BATTLE_BOOSTER:
                                    case Kt.BATTLE_BOOSTER_REPLACE:
                                        return Zt.BATTLE_BOOSTER;
                                }
                            })(a, n),
                            A = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Kt.BATTLE_BOOSTER:
                                        return Qt.BATTLE_BOOSTER;
                                    case Kt.BATTLE_BOOSTER_REPLACE:
                                        return Qt.BATTLE_BOOSTER_REPLACE;
                                    case Kt.BUILT_IN_EQUIPMENT:
                                        return Qt.BUILT_IN_EQUIPMENT;
                                    case Kt.EQUIPMENT_PLUS:
                                        return Qt.EQUIPMENT_PLUS;
                                    case Kt.EQUIPMENT_TROPHY_BASIC:
                                        return Qt.EQUIPMENT_TROPHY_BASIC;
                                    case Kt.EQUIPMENT_TROPHY_UPGRADED:
                                        return Qt.EQUIPMENT_TROPHY_UPGRADED;
                                    case Kt.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Qt.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Kt.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Qt.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Kt.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Qt.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Kt.PROGRESSION_STYLE_UPGRADED_1:
                                        return Qt.PROGRESSION_STYLE_UPGRADED_1;
                                    case Kt.PROGRESSION_STYLE_UPGRADED_2:
                                        return Qt.PROGRESSION_STYLE_UPGRADED_2;
                                    case Kt.PROGRESSION_STYLE_UPGRADED_3:
                                        return Qt.PROGRESSION_STYLE_UPGRADED_3;
                                    case Kt.PROGRESSION_STYLE_UPGRADED_4:
                                        return Qt.PROGRESSION_STYLE_UPGRADED_4;
                                    case Kt.PROGRESSION_STYLE_UPGRADED_5:
                                        return Qt.PROGRESSION_STYLE_UPGRADED_5;
                                    case Kt.PROGRESSION_STYLE_UPGRADED_6:
                                        return Qt.PROGRESSION_STYLE_UPGRADED_6;
                                    case Kt.ATTACHMENT_RARE:
                                        return Qt.ATTACHMENT_RARE;
                                    case Kt.ATTACHMENT_EPIC:
                                        return Qt.ATTACHMENT_EPIC;
                                    case Kt.ATTACHMENT_LEGENDARY:
                                        return Qt.ATTACHMENT_LEGENDARY;
                                }
                            })(n),
                            F = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case Xt.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case Xt.CURRENCY:
                                    case Xt.NUMBER:
                                        return s().createElement(ua, { format: 'integral', value: Number(e) });
                                    case Xt.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(r, i);
                        return s().createElement(
                            'div',
                            {
                                className: D()(_a.base, _a[`base__${a}`], ea.includes(e) && _a.base__normalize, c),
                                style: l,
                            },
                            s().createElement(
                                Tu,
                                { tooltipArgs: _, className: _a.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: D()(_a.image, null == E ? void 0 : E.image) },
                                        d &&
                                            s().createElement('div', {
                                                className: D()(_a.highlight, null == E ? void 0 : E.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${d}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            s().createElement('div', {
                                                className: D()(_a.icon, null == E ? void 0 : E.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        A &&
                                            s().createElement('div', {
                                                className: D()(_a.overlay, null == E ? void 0 : E.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${A}_overlay)`,
                                                },
                                            }),
                                    ),
                                    F &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: D()(
                                                    _a.info,
                                                    _a[`info__${e}`],
                                                    i === Xt.MULTI && _a.info__multi,
                                                    null == E ? void 0 : E.info,
                                                ),
                                            },
                                            F,
                                        ),
                                    o && s().createElement('div', { className: _a.title }, o),
                                ),
                            ),
                            t &&
                                s().createElement(
                                    Tu,
                                    { tooltipArgs: m },
                                    s().createElement('div', {
                                        className: D()(_a.timer, null == E ? void 0 : E.periodicIcon),
                                    }),
                                ),
                        );
                    };
                function da() {
                    return (
                        (da =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        da.apply(this, arguments)
                    );
                }
                const Aa = ({ reward: e, size: u }) => {
                        const t = e.RewardWrapper || null;
                        return t
                            ? s().createElement(t, e.rewardWrapperProps, s().createElement(ma, da({ size: u }, e)))
                            : s().createElement(ma, da({ size: u }, e));
                    },
                    Fa = 'Rewards_base_26',
                    Da = 'Rewards_base__vertical_9f',
                    pa = 'Rewards_reward_7b',
                    ga = 'Rewards_reward__vertical_c6',
                    Ca = ({
                        data: e,
                        size: u = qt.Big,
                        isVertical: t = !1,
                        count: a,
                        classMix: n,
                        rewardItemClassMix: r,
                        boxRewardTooltip: i,
                        boxRewardValue: o,
                        boxRewardClassName: l,
                        boxRewardClassNames: c,
                    }) => {
                        const E = a && a < e.length,
                            _ = D()(pa, t && ga, r),
                            m = E ? a : e.length;
                        return s().createElement(
                            'div',
                            { className: D()(Fa, t && Da, n) },
                            e
                                .slice(0, m)
                                .map((e, t) =>
                                    s().createElement(
                                        'div',
                                        { key: t, className: _ },
                                        s().createElement(Aa, { reward: e, size: u }),
                                    ),
                                ),
                            E &&
                                s().createElement(
                                    'div',
                                    { className: _ },
                                    s().createElement(ma, {
                                        name: 'more',
                                        image: `R.images.gui.maps.icons.quests.bonuses.${u}.default`,
                                        size: u,
                                        value:
                                            o ||
                                            ((d = R.strings.tooltips.quests.awards.additional.bottom()),
                                            (A = { count: e.length - (a || 0) }),
                                            d.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                                const u = 0 === e.indexOf('%') ? 2 : 1;
                                                return String(A[e.slice(u, -u)]);
                                            })),
                                        tooltipArgs: i,
                                        className: l,
                                        classNames: c,
                                    }),
                                ),
                        );
                        var d, A;
                    },
                    Ba = {
                        base: 'ScenarioRewards_base_d9',
                        rewards: 'ScenarioRewards_rewards_14',
                        base__small: 'ScenarioRewards_base__small_a7',
                        base__extraSmall: 'ScenarioRewards_base__extraSmall_8e',
                        title: 'ScenarioRewards_title_cf',
                        shine: 'ScenarioRewards_shine_c1',
                        rewardClassMix: 'ScenarioRewards_rewardClassMix_c7',
                    },
                    ha = s().memo(() => {
                        const e = ae('model.selectedMapModel.rewards', te.Shallow),
                            u = (0, r.useContext)(m),
                            t = u.small || u.extraSmall ? qt.Small : qt.Big,
                            a = (0, r.useMemo)(
                                () =>
                                    e.map(({ value: e }) => {
                                        const u = e.name,
                                            a = e.value,
                                            n = e.tooltipId;
                                        return {
                                            name: u,
                                            image: la(e, t),
                                            value: a,
                                            valueType: sa(u),
                                            tooltipArgs: ca({ tooltipId: n }),
                                        };
                                    }),
                                [t, e],
                            ),
                            n = bu(['base'], Ba);
                        return s().createElement(
                            'div',
                            { className: n.base },
                            e.length > 0 &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: Ba.arrow }),
                                    s().createElement(
                                        'div',
                                        { className: Ba.rewards },
                                        s().createElement('div', { className: Ba.shine }),
                                        s().createElement(
                                            'div',
                                            { className: Ba.title },
                                            R.strings.maps_training.mapSelection.options.rewardsTitle(),
                                        ),
                                        s().createElement(Ca, {
                                            data: a,
                                            size: t,
                                            rewardItemClassMix: Ba.rewardClassMix,
                                        }),
                                    ),
                                ),
                        );
                    }),
                    va = 'ScenarioCard_base_a0',
                    ba = 'ScenarioCard_base__selected_31',
                    fa = 'ScenarioCard_card_7d',
                    wa = 'ScenarioCard_base__completed_05',
                    Sa = 'ScenarioCard_base__hover_5d',
                    Ma = 'ScenarioCard_borderShine_5a',
                    Ta = 'ScenarioCard_borderShine__bottom_42',
                    xa = 'ScenarioCard_selectedOverlay_9b',
                    ya = 'ScenarioCard_shine_00',
                    Ra = 'ScenarioCard_title_70',
                    ka = 'ScenarioCard_rewards_b2',
                    Pa = 'ScenarioCard_base__anim_4f',
                    Na = 'ScenarioCard_completed_15',
                    La = 'ScenarioCard_checkmark_13',
                    Oa = s().memo(
                        ({
                            scenarioNum: e,
                            vehicleType: u,
                            isSelected: t,
                            index: a,
                            rewards: n,
                            isComplete: i,
                            isShowCompleteAnimation: o,
                        }) => {
                            const l = ae('model', te.None).onScenarioSelect,
                                c = (0, r.useState)(!1),
                                E = c[0],
                                _ = c[1],
                                m = (0, r.useCallback)(() => {
                                    (Se.playHighlight(), _(!0));
                                }, []),
                                d = (0, r.useCallback)(() => _(!1), []),
                                A = (0, r.useCallback)(() => {
                                    t || (Se.playClick(), l({ id: a }));
                                }, [t, l, a]);
                            (0, r.useEffect)(() => {
                                i && o && we(R.sounds.mt_anim_scenario_complete());
                            }, [i, o]);
                            const F = (0, r.useMemo)(
                                    () =>
                                        n.map(({ value: e }) => {
                                            const u = e.name,
                                                t = e.value,
                                                a = e.tooltipId;
                                            return {
                                                name: u,
                                                value: t,
                                                image: la(e),
                                                valueType: sa(u),
                                                tooltipArgs: ca({ tooltipId: a }),
                                            };
                                        }),
                                    [n],
                                ),
                                p = O(R.strings.maps_training.scenarioNum(), { scenario: e }),
                                g = (0, r.useMemo)(() => ({ scenario: a }), [a]);
                            return s().createElement(
                                'div',
                                {
                                    className: D()(va, i && wa, t && ba, E && !t && Sa, i && o && Pa),
                                    onClick: A,
                                    onMouseEnter: m,
                                    onMouseLeave: d,
                                },
                                s().createElement(
                                    ie,
                                    {
                                        ignoreMouseClick: !0,
                                        ignoreShowDelay: !0,
                                        contentId: R.views.lobby.maps_training.ScenarioTooltip('resId'),
                                        args: g,
                                    },
                                    s().createElement(
                                        'div',
                                        { className: fa, lang: R.strings.settings.LANGUAGE_CODE() },
                                        t &&
                                            s().createElement(
                                                s().Fragment,
                                                null,
                                                s().createElement('div', { className: xa }),
                                                s().createElement('div', { className: ya }),
                                            ),
                                        s().createElement('div', { className: Ma }),
                                        s().createElement('div', { className: D()(Ma, Ta) }),
                                        s().createElement('div', { className: Ra }, p),
                                        s().createElement(
                                            'div',
                                            { className: Ra },
                                            R.strings.maps_training.vehicleType.$dyn(u),
                                        ),
                                        i &&
                                            s().createElement(
                                                s().Fragment,
                                                null,
                                                s().createElement(
                                                    'div',
                                                    { className: Na },
                                                    R.strings.maps_training.mapSelection.options.scenarioCompleted(),
                                                ),
                                                s().createElement('div', { className: La }),
                                            ),
                                    ),
                                ),
                                (!i || o) &&
                                    s().createElement(
                                        'div',
                                        { className: ka },
                                        s().createElement(Ca, { data: F, size: qt.Small }),
                                    ),
                            );
                        },
                    ),
                    Ia = { base: 'Scenarios_base_76' };
                function Ha() {
                    return (
                        (Ha =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ha.apply(this, arguments)
                    );
                }
                const Ua = s().memo(() => {
                        const e = ae('model.selectedMapModel', te.Shallow),
                            u = e.scenarios,
                            t = e.selectedScenario,
                            a = e.isShowCompleteAnimation,
                            n = bu(['base'], Ia);
                        return s().createElement(
                            'div',
                            { className: n.base },
                            u.map(({ value: e }, u) =>
                                s().createElement(
                                    Oa,
                                    Ha(
                                        {
                                            key: `scenario_${e.team}_${e.vehicleType}`,
                                            isSelected: u === t,
                                            index: u,
                                            isShowCompleteAnimation: a && u === t,
                                        },
                                        e,
                                    ),
                                ),
                            ),
                        );
                    }),
                    $a = {
                        base: 'VehicleMarker_base_a8',
                        fadeIn: 'VehicleMarker_fadeIn_ab',
                        vehicle: 'VehicleMarker_vehicle_75',
                        vehicle__mediumTank: 'VehicleMarker_vehicle__mediumTank_8c',
                        vehicle__heavyTank: 'VehicleMarker_vehicle__heavyTank_a7',
                        title: 'VehicleMarker_title_fd',
                        base__small: 'VehicleMarker_base__small_7a',
                        base__extraSmall: 'VehicleMarker_base__extraSmall_1a',
                        descr: 'VehicleMarker_descr_43',
                        info: 'VehicleMarker_info_c8',
                    },
                    Ga = s().memo(() => {
                        const e = ae('model.vehicleMarker', te.Shallow).top,
                            u = ae('model.selectedMapModel'),
                            t = u.vehicleName,
                            a = u.selectedScenario,
                            n = u.scenarios,
                            i = (0, r.useContext)(m),
                            o = i.small || i.extraSmall ? 20 : 0,
                            l = (0, r.useMemo)(
                                () => ({ transform: `translate(-50%, ${Math.max(e - o, 0)}rem)` }),
                                [o, e],
                            ),
                            c = n[a].value.vehicleType,
                            E = bu(['base'], $a),
                            _ = D()($a.vehicle, $a[`vehicle__${c}`]);
                        return s().createElement(
                            'div',
                            { className: E.base, style: l },
                            s().createElement('div', { className: _ }),
                            s().createElement('div', { className: $a.title }, t),
                            s().createElement(
                                'div',
                                { className: $a.descr },
                                R.strings.maps_training.vehicleMarker.$dyn(c).descr(),
                                s().createElement(
                                    Ee,
                                    {
                                        header: R.strings.maps_training.vehicleMarker.$dyn(c).tooltip.title(),
                                        body: R.strings.maps_training.vehicleMarker.$dyn(c).tooltip.body(),
                                        onMouseEnter: Se.playHighlight,
                                    },
                                    s().createElement('div', { className: $a.info }),
                                ),
                            ),
                        );
                    }),
                    Wa = {
                        base: 'MapOptions_base_5b',
                        leftPanel: 'MapOptions_leftPanel_d2',
                        base__medium: 'MapOptions_base__medium_59',
                        base__small: 'MapOptions_base__small_7e',
                        base__extraSmall: 'MapOptions_base__extraSmall_9c',
                        sceneWrapper: 'MapOptions_sceneWrapper_2f',
                        marker: 'MapOptions_marker_bf',
                        rightPanel: 'MapOptions_rightPanel_89',
                        bottomPanel: 'MapOptions_bottomPanel_3f',
                        bottomPanelTitle: 'MapOptions_bottomPanelTitle_eb',
                        menuItems: 'MapOptions_menuItems_42',
                        base__large: 'MapOptions_base__large_d0',
                        base__extraLarge: 'MapOptions_base__extraLarge_ba',
                    },
                    za = s().memo(() => {
                        const e = ae('model', te.None),
                            u = e.onBack,
                            t = e.onBlurRectUpdated,
                            a = e.onMoveSpace,
                            n = (0, r.useState)(''),
                            i = n[0],
                            o = n[1],
                            l = (0, r.useState)(''),
                            c = l[0],
                            E = l[1],
                            _ = (0, r.useCallback)(() => u(), [u]),
                            m = (0, r.useCallback)((e) => a(e), [a]);
                        vu(Bu.n.ESCAPE, _);
                        const d = (0, r.useCallback)((e, u) => o(u ? e : ''), []),
                            A = (0, r.useCallback)((e, u) => E(u ? e : ''), []);
                        (0, r.useEffect)(() => {
                            const e = () => {
                                const e = window.innerHeight;
                                t({ left: 0, top: e - 155, right: window.innerWidth, bottom: e });
                            };
                            return (
                                window.addEventListener('resize', e),
                                e(),
                                () => window.removeEventListener('resize', e)
                            );
                        }, [t]);
                        const F = bu(['base'], Wa);
                        return s().createElement(
                            'div',
                            { className: F.base },
                            s().createElement(
                                'div',
                                { className: Wa.sceneWrapper },
                                s().createElement(Ct, { onMoveSpace: m }),
                            ),
                            s().createElement('div', { className: Wa.marker }, s().createElement(Ga, null)),
                            s().createElement(
                                'div',
                                { className: Wa.menuItems },
                                s().createElement(Ce, {
                                    name: 'mapsTraining',
                                    state: 'enabled',
                                    title: R.strings.maps_training.mapSelection.options.backGoto(),
                                    onClick: _,
                                    withArrow: !0,
                                    withTooltip: !1,
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: Wa.leftPanel },
                                s().createElement(Vt, { highlightedPoint: i, onKeywordEvent: A }),
                            ),
                            s().createElement(
                                'div',
                                { className: Wa.bottomPanel },
                                s().createElement(
                                    'div',
                                    { className: Wa.bottomPanelTitle },
                                    R.strings.maps_training.mapSelection.options.scenariosTitle(),
                                ),
                                s().createElement(Ua, null),
                                s().createElement(ha, null),
                            ),
                            s().createElement(
                                'div',
                                { className: Wa.rightPanel },
                                s().createElement(Tt, { onPointEvent: d, highlightedPoint: c }),
                            ),
                        );
                    }),
                    Va = 'MapsTrainingPageApp_base_0d',
                    ja = () => {
                        const e = ae('model', te.Shallow).isMapSelected;
                        return s().createElement(
                            A,
                            null,
                            s().createElement(
                                'div',
                                { className: Va },
                                e ? s().createElement(za, null) : s().createElement(Ft, null),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    P().render(
                        s().createElement(y, null, s().createElement(ja, null)),
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
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, a] = deferred[o], r = !0, s = 0; s < u.length; s++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
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
        (__webpack_require__.o = (e, u) => Object.prototype.hasOwnProperty.call(e, u)),
        (__webpack_require__.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (__webpack_require__.j = 817),
        (() => {
            var e = { 817: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [r, s, i] = t,
                        o = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < r.length; o++)
                        ((n = r[o]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [453], () => __webpack_require__(969));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
