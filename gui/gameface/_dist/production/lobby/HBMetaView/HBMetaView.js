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
            3532: (e) => {
                e.exports = {
                    BLACK_REAL: '#000000',
                    WHITE_REAL: '#FFFFFF',
                    WHITE: '#F2F2F7',
                    WHITE_ORANGE: '#FEFEEC',
                    WHITE_SPANISH: '#E9E2BF',
                    PAR: '#8C8C7E',
                    PAR_SECONDARY: '#595950',
                    PAR_TERTIARY: '#37362E',
                    INFO_RED: '#FF0000',
                    RED: '#FF2717',
                    RED_DARK: '#B70000',
                    YELLOW: '#FEAB34',
                    ORANGE: '#EE7000',
                    CREAM: '#FFDD99',
                    BROWN: '#CBAC77',
                    GREEN_BRIGHT: '#80D43A',
                    GREEN: '#7AB300',
                    GREEN_DARK: '#497212',
                    BLUE_BOOSTER: '#CCFFFF',
                    BLUE_TEAMKILLER: '#09E2FF',
                    CRED: '#CED9D9',
                    GOLD: '#FFC363',
                    BOND: '#C9C9B6',
                    PROM: '#A29B70',
                };
            },
            9887: (e) => {
                e.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
                };
            },
            527: (e, t, u) => {
                'use strict';
                u.r(t), u.d(t, { mouse: () => i, onResize: () => a });
                var n = u(2472),
                    r = u(1176);
                const a = (0, n.E)('clientResized'),
                    s = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    i = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function u() {
                            e.enabled && (0, r.R)(!0);
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
                                : (0, r.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (t, u) => (
                                (t[u] = (function (t) {
                                    return (u) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const a = `mouse${t}`,
                                            i = s[t]((e) => u([e, 'outside']));
                                        function o(e) {
                                            u([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, o),
                                            n(),
                                            () => {
                                                r &&
                                                    (i(),
                                                    window.removeEventListener(a, o),
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
                        return Object.assign({}, a, {
                            disable() {
                                (e.enabled = !1), n();
                            },
                            enable() {
                                (e.enabled = !0), n();
                            },
                            enableOutside() {
                                e.enabled && (0, r.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, r.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => a,
                        getSize: () => r,
                        graphicsQuality: () => s,
                    });
                var n = u(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, u) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => n });
            },
            2472: (e, t, u) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => n });
            },
            3138: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => r });
                var n = u(5959);
                const r = { view: u(7641), client: n };
            },
            3722: (e, t, u) => {
                'use strict';
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function r(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                u.r(t), u.d(t, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => r });
                var n = u(2472);
                const r = {
                    onTextureFrozen: (0, n.E)('self.onTextureFrozen'),
                    onTextureReady: (0, n.E)('self.onTextureReady'),
                    onDomBuilt: (0, n.E)('self.onDomBuilt'),
                    onLoaded: (0, n.E)('self.onLoaded'),
                    onDisplayChanged: (0, n.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, n.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, n.E)('children.onAdded'),
                        onLoaded: (0, n.E)('children.onLoaded'),
                        onRemoved: (0, n.E)('children.onRemoved'),
                        onAttached: (0, n.E)('children.onAttached'),
                        onTextureReady: (0, n.E)('children.onTextureReady'),
                        onRequestPosition: (0, n.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => B,
                        events: () => a.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => F,
                        getScale: () => g,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => C,
                        isFocused: () => f,
                        pxToRem: () => b,
                        remToPx: () => h,
                        resize: () => d,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => A,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => w,
                    });
                var n = u(3722),
                    r = u(6112),
                    a = u(6538),
                    s = u(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function c(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function b(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function A(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function D() {
                    viewEnv.forceTriggerMouseMove();
                }
                function F() {
                    return viewEnv.getShowingStatus();
                }
                const B = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    y = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    w = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => a });
                const n = ['args'],
                    r = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(t, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, s, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var r;
                    },
                    a = {
                        close(e) {
                            r('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(e) {
                            r(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, u) => {
                'use strict';
                let n, r;
                u.d(t, { n: () => n }),
                    (function (e) {
                        (e[(e.NONE = -1)] = 'NONE'),
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9'),
                            (e[(e.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (e[(e.INSERT = 45)] = 'INSERT'),
                            (e[(e.F1 = 112)] = 'F1'),
                            (e[(e.F2 = 113)] = 'F2'),
                            (e[(e.F3 = 114)] = 'F3'),
                            (e[(e.F4 = 115)] = 'F4'),
                            (e[(e.F5 = 116)] = 'F5'),
                            (e[(e.F6 = 117)] = 'F6'),
                            (e[(e.F7 = 118)] = 'F7'),
                            (e[(e.F8 = 119)] = 'F8'),
                            (e[(e.F9 = 120)] = 'F9'),
                            (e[(e.F10 = 121)] = 'F10'),
                            (e[(e.F11 = 122)] = 'F11'),
                            (e[(e.F12 = 123)] = 'F12'),
                            (e[(e.SELECT = 93)] = 'SELECT'),
                            (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (e[(e.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (e[(e.STAR = 106)] = 'STAR'),
                            (e[(e.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (e[(e.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (e[(e.COMMA = 188)] = 'COMMA'),
                            (e[(e.DASH = 189)] = 'DASH'),
                            (e[(e.PERIOD = 190)] = 'PERIOD');
                    })(n || (n = {})),
                    (function (e) {
                        (e.ALT = 'Alt'),
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
                            (e.SYMBOL_LOCK = 'SymbolLock');
                    })(r || (r = {}));
            },
            3368: () => {
                !(function () {
                    let e,
                        t,
                        u,
                        n,
                        r,
                        a,
                        s,
                        i = -1;
                    document.addEventListener('mousedown', (u) => {
                        document.getSelection().empty(),
                            u.target.select &&
                                -1 === i &&
                                ((e = u.target), (t = e.getBoundingClientRect()), e.setSelectionRange(0, 0));
                    }),
                        document.addEventListener('mousemove', (u) => {
                            if ((-1 === i && u.target.select && u.target === e && (i = e.selectionStart), i > -1)) {
                                const n = Math.min(Math.max(u.x, t.left), t.right),
                                    r = Math.min(Math.max(u.y, t.top), t.bottom),
                                    a = document.createEvent('MouseEvent');
                                a.initMouseEvent('mousedown', !0, !0, null, 1, n, r, n, r, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(a);
                                const s = e.selectionEnd;
                                s > i ? e.setSelectionRange(i, s, 'forward') : e.setSelectionRange(s, i, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            (e = null), (i = -1);
                        }),
                        document.addEventListener('dblclick', (e) => {
                            e.target.select &&
                                (document.getSelection().empty(),
                                (u = e.target),
                                (n = e.target.value),
                                (r = u.selectionStart),
                                (a = -1 !== n.lastIndexOf(' ', r) ? n.lastIndexOf(' ', r) + 1 : 0),
                                (s = -1 !== n.indexOf(' ', r) ? n.indexOf(' ', r) : n.length),
                                u.setSelectionRange(a, s, 'forward'));
                        });
                })(),
                    (function () {
                        let e = null;
                        document.addEventListener('mousedown', (t) => {
                            document.getSelection().empty(),
                                0 !== t.button ||
                                    t.target.select ||
                                    e ||
                                    (e = document.caretPositionFromPoint(t.x, t.y));
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
                            });
                    })();
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                var n = u(3138);
                class r {
                    constructor() {
                        (this._callbacks = void 0),
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
                            (this._updateHandler = void 0);
                    }
                    static get instance() {
                        return window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, u = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, u, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(a) : (this._views[u] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                const a = r;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4179);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        (this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                (this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((e) => {
                                        e(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((e) => {
                                        this._addCallback(path + '.' + e);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(e) {
                        this.callbacks.add(e), null !== this.data && void 0 !== this.data && e(this.data);
                    }
                    unsubscribe(e) {
                        this.callbacks.delete(e);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(e) {
                        this.dataTracker.addCallback(e, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            4179: (e, t, u) => {
                'use strict';
                u.d(t, { B3: () => c, Z5: () => s, B0: () => o, ry: () => A, Eu: () => f });
                class n {
                    constructor() {
                        (this.entries = []),
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
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const u = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== n)),
                            this.removeMouseListener();
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
                var a = u(1358);
                const s = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    };
                let o;
                var l;
                ((l = o || (o = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE');
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = u(5521),
                    p = u(3138);
                const g = ['args'];
                function b(e, t, u, n, r, a, s) {
                    try {
                        var i = e[a](s),
                            o = i.value;
                    } catch (e) {
                        return void u(e);
                    }
                    i.done ? t(o) : Promise.resolve(o).then(n, r);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    A = (function () {
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
                                        var a = e.apply(t, u);
                                        function s(e) {
                                            b(a, n, r, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            b(a, n, r, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    f = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    v = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(t, g);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, a, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    C = () => v(o.CLOSE),
                    D = (e, t) => {
                        e.keyCode === E.n.ESCAPE && t();
                    };
                var F = u(7572);
                const B = r.instance,
                    y = {
                        DataTracker: a.Z,
                        ViewModel: F.Z,
                        ViewEventType: o,
                        NumberFormatType: c,
                        RealFormatType: _,
                        TimeFormatType: m,
                        DateFormatType: d,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => v(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => v(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            v(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, r = R.invalid('resId'), a) => {
                            const s = p.O.view.getViewGlobalPosition(),
                                i = u.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                _ = i.width,
                                m = i.height,
                                d = {
                                    x: p.O.view.pxToRem(l) + s.x,
                                    y: p.O.view.pxToRem(c) + s.y,
                                    width: p.O.view.pxToRem(_),
                                    height: p.O.view.pxToRem(m),
                                };
                            v(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: h(d),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => D(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            D(e, C);
                        },
                        handleViewEvent: v,
                        onBindingsReady: A,
                        onLayoutReady: f,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
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
                        ClickOutsideManager: B,
                        SystemLocale: s,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = y;
            },
            1730: (e, t, u) => {
                'use strict';
                var n = {};
                u.r(n),
                    u.d(n, {
                        Area: () => Bn,
                        Bar: () => Cn,
                        DefaultScroll: () => Fn,
                        Direction: () => _n,
                        defaultSettings: () => mn,
                        useHorizontalScrollApi: () => En,
                    });
                var r = {};
                u.r(r), u.d(r, { Area: () => In, Bar: () => Mn, Default: () => Rn, useVerticalScrollApi: () => yn });
                var a = u(6179),
                    s = u.n(a),
                    i = u(493),
                    o = u.n(i);
                const l = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var c = u(3138);
                const _ = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var m;
                function d(e, t, u) {
                    const n = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.width:
                                    return t.extraLarge.weight;
                                case e >= t.large.width && e < t.extraLarge.width:
                                    return t.large.weight;
                                case e >= t.medium.width && e < t.large.width:
                                    return t.medium.weight;
                                case e >= t.small.width && e < t.medium.width:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(e, u),
                        r = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.height:
                                    return t.extraLarge.weight;
                                case e >= t.large.height && e < t.extraLarge.height:
                                    return t.large.weight;
                                case e >= t.medium.height && e < t.large.height:
                                    return t.medium.weight;
                                case e >= t.small.height && e < t.medium.height:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(t, u),
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === u.extraLarge.weight,
                        large: a === u.large.weight,
                        medium: a === u.medium.weight,
                        small: a === u.small.weight,
                        extraSmall: a === u.extraSmall.weight,
                        extraLargeWidth: n === u.extraLarge.weight,
                        largeWidth: n === u.large.weight,
                        mediumWidth: n === u.medium.weight,
                        smallWidth: n === u.small.weight,
                        extraSmallWidth: n === u.extraSmall.weight,
                        extraLargeHeight: r === u.extraLarge.weight,
                        largeHeight: r === u.large.weight,
                        mediumHeight: r === u.medium.weight,
                        smallHeight: r === u.small.weight,
                        extraSmallHeight: r === u.extraSmall.weight,
                    };
                }
                !(function (e) {
                    (e.extraLarge = 'extraLarge'),
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
                        (e.extraSmallHeight = 'extraSmallHeight');
                })(m || (m = {}));
                const E = c.O.client.getSize('rem'),
                    p = E.width,
                    g = E.height,
                    b = Object.assign({ width: p, height: g }, d(p, g, _)),
                    h = (0, a.createContext)(b),
                    A = ['children'],
                    f = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, A);
                        const n = (0, a.useContext)(h),
                            r = n.extraLarge,
                            s = n.large,
                            i = n.medium,
                            o = n.small,
                            c = n.extraSmall,
                            _ = n.extraLargeWidth,
                            m = n.largeWidth,
                            d = n.mediumWidth,
                            E = n.smallWidth,
                            p = n.extraSmallWidth,
                            g = n.extraLargeHeight,
                            b = n.largeHeight,
                            f = n.mediumHeight,
                            v = n.smallHeight,
                            C = n.extraSmallHeight,
                            D = { extraLarge: g, large: b, medium: f, small: v, extraSmall: C };
                        if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                            if (u.extraLarge && r) return t;
                            if (u.large && s) return t;
                            if (u.medium && i) return t;
                            if (u.small && o) return t;
                            if (u.extraSmall && c) return t;
                        } else {
                            if (u.extraLargeWidth && _) return l(t, u, D);
                            if (u.largeWidth && m) return l(t, u, D);
                            if (u.mediumWidth && d) return l(t, u, D);
                            if (u.smallWidth && E) return l(t, u, D);
                            if (u.extraSmallWidth && p) return l(t, u, D);
                            if (
                                !(
                                    u.extraLargeWidth ||
                                    u.largeWidth ||
                                    u.mediumWidth ||
                                    u.smallWidth ||
                                    u.extraSmallWidth
                                )
                            ) {
                                if (u.extraLargeHeight && g) return t;
                                if (u.largeHeight && b) return t;
                                if (u.mediumHeight && f) return t;
                                if (u.smallHeight && v) return t;
                                if (u.extraSmallHeight && C) return t;
                            }
                        }
                        return null;
                    };
                (f.defaultProps = {
                    extraLarge: !1,
                    large: !1,
                    medium: !1,
                    small: !1,
                    extraSmall: !1,
                    extraLargeWidth: !1,
                    largeWidth: !1,
                    mediumWidth: !1,
                    smallWidth: !1,
                    extraSmallWidth: !1,
                    extraLargeHeight: !1,
                    largeHeight: !1,
                    mediumHeight: !1,
                    smallHeight: !1,
                    extraSmallHeight: !1,
                }),
                    (0, a.memo)(f);
                const v = (0, a.memo)(({ children: e }) => {
                    const t = (0, a.useContext)(h),
                        u = (0, a.useState)(t),
                        n = u[0],
                        r = u[1],
                        i = (0, a.useCallback)((e, t) => {
                            const u = c.O.view.pxToRem(e),
                                n = c.O.view.pxToRem(t);
                            r(Object.assign({ width: u, height: n }, d(u, n, _)));
                        }, []);
                    ((e) => {
                        const t = (0, a.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        engine.on('clientResized', i);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', i), [i]);
                    const o = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                    return s().createElement(h.Provider, { value: o }, e);
                });
                var C = u(6483),
                    D = u.n(C),
                    F = u(926),
                    B = u.n(F);
                let y, w, S;
                var x;
                ((x = y || (y = {}))[(x.ExtraSmall = _.extraSmall.width)] = 'ExtraSmall'),
                    (x[(x.Small = _.small.width)] = 'Small'),
                    (x[(x.Medium = _.medium.width)] = 'Medium'),
                    (x[(x.Large = _.large.width)] = 'Large'),
                    (x[(x.ExtraLarge = _.extraLarge.width)] = 'ExtraLarge'),
                    (function (e) {
                        (e[(e.ExtraSmall = _.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = _.small.width)] = 'Small'),
                            (e[(e.Medium = _.medium.width)] = 'Medium'),
                            (e[(e.Large = _.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = _.extraLarge.width)] = 'ExtraLarge');
                    })(w || (w = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = _.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = _.small.height)] = 'Small'),
                            (e[(e.Medium = _.medium.height)] = 'Medium'),
                            (e[(e.Large = _.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = _.extraLarge.height)] = 'ExtraLarge');
                    })(S || (S = {}));
                const N = () => {
                        const e = (0, a.useContext)(h),
                            t = e.width,
                            u = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return y.ExtraLarge;
                                    case e.large:
                                        return y.Large;
                                    case e.medium:
                                        return y.Medium;
                                    case e.small:
                                        return y.Small;
                                    case e.extraSmall:
                                        return y.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), y.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return w.ExtraLarge;
                                    case e.largeWidth:
                                        return w.Large;
                                    case e.mediumWidth:
                                        return w.Medium;
                                    case e.smallWidth:
                                        return w.Small;
                                    case e.extraSmallWidth:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return S.ExtraLarge;
                                    case e.largeHeight:
                                        return S.Large;
                                    case e.mediumHeight:
                                        return S.Medium;
                                    case e.smallHeight:
                                        return S.Small;
                                    case e.extraSmallHeight:
                                        return S.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), S.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: s, remScreenWidth: t, remScreenHeight: u };
                    },
                    k = ['children', 'className'];
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const L = {
                        [w.ExtraSmall]: '',
                        [w.Small]: B().SMALL_WIDTH,
                        [w.Medium]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH}`,
                        [w.Large]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH} ${B().EXTRA_LARGE_WIDTH}`,
                    },
                    M = {
                        [S.ExtraSmall]: '',
                        [S.Small]: B().SMALL_HEIGHT,
                        [S.Medium]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT}`,
                        [S.Large]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT}`,
                        [S.ExtraLarge]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT} ${B().EXTRA_LARGE_HEIGHT}`,
                    },
                    P = {
                        [y.ExtraSmall]: '',
                        [y.Small]: B().SMALL,
                        [y.Medium]: `${B().SMALL} ${B().MEDIUM}`,
                        [y.Large]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE}`,
                        [y.ExtraLarge]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE} ${B().EXTRA_LARGE}`,
                    },
                    I = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, k);
                        const r = N(),
                            a = r.mediaWidth,
                            i = r.mediaHeight,
                            o = r.mediaSize;
                        return s().createElement('div', T({ className: D()(u, L[a], M[i], P[o]) }, n), t);
                    },
                    O = ['children'],
                    H = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, O);
                        return s().createElement(v, null, s().createElement(I, u, t));
                    };
                function $() {}
                function U() {
                    return !1;
                }
                console.log;
                var W = u(3915);
                function z(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const G = (e) => (0 === e ? window : window.subViews.get(e)),
                    V = () => (e, t) => {
                        const u = (0, a.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: r, children: i, mocks: o }) {
                                const l = (0, a.useRef)([]),
                                    _ = (u, n, r) => {
                                        var a;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = G,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function a(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                        u.forEach((t) => {
                                                            const u = r.get(t);
                                                            void 0 !== u && u(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const r = u(t),
                                                        a = n.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (u, a) => {
                                                        const i = 'string' == typeof a ? `${n}.${a}` : n,
                                                            o = c.O.view.addModelObserver(i, t, !0);
                                                        return r.set(o, u), e && u(s(a)), o;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, t) => {
                                                        const u = s(t);
                                                        return (...t) => {
                                                            u(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = s(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                u = (function (e, t) {
                                                                    var u =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (u) return (u = u.call(e)).next.bind(u);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (u = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return z(e, t);
                                                                                var u = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === u &&
                                                                                        e.constructor &&
                                                                                        (u = e.constructor.name),
                                                                                    'Map' === u || 'Set' === u
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === u ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                u,
                                                                                            )
                                                                                          ? z(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        u && (e = u);
                                                                        var n = 0;
                                                                        return function () {
                                                                            return n >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[n++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(r.keys());
                                                            !(e = u()).done;

                                                        )
                                                            a(e.value, t);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(n),
                                            i =
                                                'real' === u
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            o = (e) =>
                                                'mocks' === u ? (null == r ? void 0 : r.getter(e)) : i.readByPath(e),
                                            _ = (e) => l.current.push(e),
                                            m = e({
                                                mode: u,
                                                readByPath: o,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : o(e),
                                                            r = W.observable.box(n, { equals: U });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, W.action)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : o(e),
                                                            r = W.observable.box(n, { equals: U });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, W.action)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = o(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, t) => ((e[t] = W.observable.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, W.action)((t) => {
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
                                                                s = a.reduce(
                                                                    (e, [t, u]) => (
                                                                        (e[u] = W.observable.box(n[t], {})), e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, W.action)((e) => {
                                                                            a.forEach(([t, u]) => {
                                                                                s[u].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: _,
                                            }),
                                            d = { mode: u, model: m, externalModel: i, cleanup: _ };
                                        return {
                                            model: m,
                                            controls: 'mocks' === u && r ? r.controls(d) : t(d),
                                            externalModel: i,
                                            mode: u,
                                        };
                                    },
                                    m = (0, a.useRef)(!1),
                                    d = (0, a.useState)(n),
                                    E = d[0],
                                    p = d[1],
                                    g = (0, a.useState)(() => _(n, r, o)),
                                    b = g[0],
                                    h = g[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        m.current ? h(_(E, r, o)) : (m.current = !0);
                                    }, [o, E, r]),
                                    (0, a.useEffect)(() => {
                                        p(n);
                                    }, [n]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            b.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [b],
                                    ),
                                    s().createElement(u.Provider, { value: b }, i)
                                );
                            },
                            () => (0, a.useContext)(u),
                        ];
                    },
                    X = V()(
                        ({ observableModel: e }) => {
                            const t = {
                                root: e.object(),
                                progressionModel: e.object('progressionModel'),
                                divisionModel: e.object('divisionModel'),
                                orderModel: e.object('orderModel'),
                            };
                            return Object.assign({}, t);
                        },
                        ({ externalModel: e }) => ({
                            onClose: e.createCallbackNoArgs('onClose'),
                            onAboutClicked: e.createCallbackNoArgs('onAboutClicked'),
                            onTabChange: e.createCallback((e) => ({ tabId: e }), 'onTabChange'),
                        }),
                    ),
                    j = X[0],
                    q = X[1];
                var Y = u(3282),
                    K = u(5521),
                    Q = u(4179);
                const Z = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function J(e = K.n.NONE, t = Z, u = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== K.n.NONE)
                            return (
                                window.addEventListener('keydown', n, u),
                                () => {
                                    window.removeEventListener('keydown', n, u);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (c.O.view.isEventHandled()) return;
                                c.O.view.setEventHandled(), t(n), u && n.stopPropagation();
                            }
                        }
                    }, [t, e, u]);
                }
                function ee(e) {
                    engine.call('PlaySound', e);
                }
                const te = {
                        playHighlight() {
                            ee('highlight');
                        },
                        playClick() {
                            ee('play');
                        },
                        playYes() {
                            ee('yes1');
                        },
                    },
                    ue = {
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
                    ne = [
                        'caption',
                        'onClick',
                        'goto',
                        'side',
                        'type',
                        'classNames',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'soundClick',
                        'soundHover',
                    ];
                function re() {
                    return (
                        (re =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        re.apply(this, arguments)
                    );
                }
                class ae extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && ee(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && ee(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                e && e(t), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            u = e.onClick,
                            n = e.goto,
                            r = e.side,
                            a = e.type,
                            i = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(e, ne)),
                            d = D()(ue.base, ue[`base__${a}`], ue[`base__${r}`], null == i ? void 0 : i.base),
                            E = D()(ue.icon, ue[`icon__${a}`], ue[`icon__${r}`], null == i ? void 0 : i.icon),
                            p = D()(ue.glow, null == i ? void 0 : i.glow),
                            g = D()(ue.caption, ue[`caption__${a}`], null == i ? void 0 : i.caption),
                            b = D()(ue.goto, null == i ? void 0 : i.goto);
                        return s().createElement(
                            'div',
                            re(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                m,
                            ),
                            'info' !== a && s().createElement('div', { className: ue.shine }),
                            s().createElement('div', { className: E }, s().createElement('div', { className: p })),
                            s().createElement('div', { className: g }, t),
                            n && s().createElement('div', { className: b }, n),
                        );
                    }
                }
                ae.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const se = [
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
                function ie(e) {
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
                const oe = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Q.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    le = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            m = void 0 !== _ && _,
                            d = e.decoratorId,
                            E = void 0 === d ? 0 : d,
                            p = e.isEnabled,
                            g = void 0 === p || p,
                            b = e.targetId,
                            h = void 0 === b ? 0 : b,
                            A = e.onShow,
                            f = e.onHide,
                            v = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, se);
                        const C = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            D = (0, a.useMemo)(
                                () =>
                                    h ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let u,
                                            n = R.invalid('resId');
                                        return (
                                            t &&
                                                ((u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== u &&
                                                    window.subViews[u] &&
                                                    (n = window.subViews[u].id)),
                                            { caller: u, stack: t, resId: n }
                                        );
                                    })().resId,
                                [h],
                            ),
                            F = (0, a.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (oe(u, E, { isMouseEvent: !0, on: !0, arguments: ie(n) }, D),
                                    A && A(),
                                    (C.current.isVisible = !0));
                            }, [u, E, n, D, A]),
                            B = (0, a.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        oe(u, E, { on: !1 }, D),
                                        C.current.isVisible && f && f(),
                                        (C.current.isVisible = !1);
                                }
                            }, [u, E, D, f]),
                            y = (0, a.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(C.current.prevTarget) && B();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = C.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', y, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', y, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === g && B();
                            }, [g, B]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', B),
                                    () => {
                                        window.removeEventListener('mouseleave', B), B();
                                    }
                                ),
                                [B],
                            ),
                            g
                                ? (0, a.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((w = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((C.current.timeoutId = window.setTimeout(F, c ? 100 : 400)),
                                                          r && r(e),
                                                          w && w(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  B(), null == s || s(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === m && B(), null == o || o(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === m && B(), null == i || i(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          v,
                                      ),
                                  )
                                : t
                        );
                        var w;
                    },
                    ce = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function _e() {
                    return (
                        (_e =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        _e.apply(this, arguments)
                    );
                }
                const me = R.views.common.tooltip_window.simple_tooltip_content,
                    de = (e) => {
                        let t = e.children,
                            u = e.body,
                            n = e.header,
                            r = e.note,
                            i = e.alert,
                            o = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, ce);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, o, { body: u, header: n, note: r, alert: i });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [i, u, n, r, o]);
                        return s().createElement(
                            le,
                            _e(
                                {
                                    contentId:
                                        ((_ = null == o ? void 0 : o.hasHtmlContent),
                                        _ ? me.SimpleTooltipHtmlContent('resId') : me.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var _;
                    },
                    Ee = (e) => {
                        let t,
                            u = null;
                        return (
                            (u = requestAnimationFrame(() => {
                                u = requestAnimationFrame(() => {
                                    (u = null), (t = e());
                                });
                            })),
                            () => {
                                'function' == typeof t && t(), null !== u && cancelAnimationFrame(u);
                            }
                        );
                    };
                var pe = u(8552);
                const ge = {
                        base: 'Frame_base_af',
                        base__small: 'Frame_base__small_f0',
                        base__medium: 'Frame_base__medium_05',
                        border: 'Frame_border_17',
                        border__top: 'Frame_border__top_f7',
                        border__bottom: 'Frame_border__bottom_52',
                        arrow: 'Frame_arrow_c3',
                    },
                    be = s().forwardRef(function ({ classNames: e, arrowRef: t, size: u = 'medium', className: n }, r) {
                        return s().createElement(
                            'div',
                            { className: D()(ge.base, ge[`base__${u}`], n), ref: r },
                            s().createElement('div', {
                                className: D()(
                                    ge.border,
                                    ge.border__top,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderTop,
                                ),
                            }),
                            s().createElement('div', {
                                className: D()(
                                    ge.border,
                                    ge.border__bottom,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderBottom,
                                ),
                            }),
                            s().createElement('div', {
                                className: D()(ge.arrow, null == e ? void 0 : e.arrow),
                                ref: t,
                            }),
                        );
                    }),
                    he = {
                        base: 'Tab_base_cd',
                        base__small: 'Tab_base__small_bf',
                        base__medium: 'Tab_base__medium_96',
                        base__active: 'Tab_base__active_7e',
                        highlight: 'Tab_highlight_b6',
                        icon: 'Tab_icon_28',
                        icon__small: 'Tab_icon__small_48',
                        icon__medium: 'Tab_icon__medium_73',
                        notification: 'Tab_notification_86',
                        notification__symbol: 'Tab_notification__symbol_9b',
                        notification__small: 'Tab_notification__small_92',
                        notification__dot: 'Tab_notification__dot_51',
                        notification__medium: 'Tab_notification__medium_e6',
                        notification__large: 'Tab_notification__large_6b',
                    },
                    Ae = { mouseEnter: 'highlight', click: 'play' },
                    fe = s().forwardRef(function (
                        {
                            id: e,
                            isActive: t,
                            className: u,
                            classNames: n,
                            sounds: r = Ae,
                            notification: a,
                            icon: i,
                            size: o,
                            additionContent: l,
                            onClick: c,
                            onMouseEnter: _,
                            onMouseLeave: m,
                            WrapperElement: d,
                        },
                        E,
                    ) {
                        const p = (e, u) => {
                                !t && r[u] && ee(r[u]);
                            },
                            g = s().createElement(
                                'div',
                                {
                                    className: D()(
                                        he.base,
                                        he[`base__${o}`],
                                        t && D()(he.base__active, null == n ? void 0 : n.activeTab),
                                        u,
                                    ),
                                    onClick: ((e) => () => {
                                        p(0, 'click'), null == c || c(e);
                                    })(e),
                                    onMouseEnter: ((e) => () => {
                                        p(0, 'mouseEnter'), null == _ || _(e);
                                    })(e),
                                    onMouseLeave: ((e) => () => {
                                        p(0, 'mouseLeave'), null == m || m(e);
                                    })(e),
                                    ref: t ? E : null,
                                },
                                s().createElement('div', {
                                    className: D()(he.highlight, null == n ? void 0 : n.highlight),
                                }),
                                'function' == typeof i && o
                                    ? i(o)
                                    : s().createElement('div', {
                                          className: D()(he.icon, he[`icon__${o}`], null == n ? void 0 : n.icon),
                                          style: { backgroundImage: `url(${i})` },
                                      }),
                                l && l({ id: e, isActive: t, size: o }),
                                a &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: D()(
                                                he.notification,
                                                he[`notification__${a.type}`],
                                                a.size ? he[`notification__${a.size}`] : he.notification__medium,
                                                null == n ? void 0 : n.notification,
                                            ),
                                        },
                                        'dot' !== a.type && a.value,
                                    ),
                            );
                        return d ? s().createElement(d, { key: e, id: e }, g) : g;
                    }),
                    ve = {
                        base: 'VerticalTabs_base_41',
                        title: 'VerticalTabs_title_8c',
                        group: 'VerticalTabs_group_08',
                        group__small: 'VerticalTabs_group__small_69',
                        group__medium: 'VerticalTabs_group__medium_68',
                    },
                    Ce = s().memo(function ({
                        active: e,
                        tabs: t,
                        sounds: u,
                        className: n,
                        classNames: r,
                        size: i = 'medium',
                        additionContent: o,
                        onClick: l,
                        onMouseEnter: _,
                        onMouseLeave: m,
                        WrapperElement: d,
                    }) {
                        const E = (0, a.useRef)(null),
                            p = (0, a.useRef)(null),
                            g = (0, a.useRef)(null),
                            b = (0, a.useRef)(null),
                            h = (0, pe.useSpring)(() => ({
                                marginLeft: 0,
                                onChange: (e) => {
                                    const t = E.current;
                                    t && (t.style.marginLeft = `${e.value.marginLeft}rem`);
                                },
                            }))[1],
                            A = (0, pe.useSpring)(() => ({
                                opacity: 0,
                                onChange: (e) => {
                                    const t = E.current;
                                    t && (t.style.opacity = `${e.value.opacity}`);
                                },
                            }))[1],
                            f = (0, pe.useSpring)(() => ({
                                position: 0,
                                onChange: (e) => {
                                    const t = p.current;
                                    t &&
                                        (t.style.transform = `translateY(${e.value.position / c.O.view.getScale()}rem)`);
                                },
                                onStart: () => {
                                    h.start({
                                        from: { marginLeft: 12 },
                                        to: { marginLeft: 0 },
                                        config: { duration: 50 },
                                    }),
                                        A.start({ from: { opacity: 1 }, to: { opacity: 0 }, config: { duration: 50 } });
                                },
                                onRest: () => {
                                    h.start({
                                        from: { marginLeft: 0 },
                                        to: { marginLeft: 12 },
                                        config: { duration: 150 },
                                    }),
                                        A.start({
                                            from: { opacity: 0 },
                                            to: { opacity: 1 },
                                            config: { duration: 150 },
                                        });
                                },
                            }))[1],
                            v = (0, a.useCallback)((e) => {
                                null !== g.current &&
                                    null !== b.current &&
                                    e(g.current.getBoundingClientRect().top - b.current.getBoundingClientRect().top);
                            }, []);
                        var C, F;
                        return (
                            (0, a.useEffect)(() => {
                                v((e) => {
                                    f.start({ position: e, config: { duration: 200 } });
                                });
                            }, [f, e, v]),
                            (0, a.useEffect)(
                                () =>
                                    Ee(() => {
                                        v((e) => {
                                            f.start({ position: e, immediate: !0 });
                                        });
                                    }),
                                [f, v, i],
                            ),
                            (C = () => {
                                v((e) => {
                                    f.start({ position: e, config: { duration: 200 } });
                                });
                            }),
                            (F = [f, v]),
                            (0, a.useEffect)(() => {
                                let e = () => {};
                                const t = () => {
                                    e(), (e = Ee(C));
                                };
                                return (
                                    window.addEventListener('resize', t),
                                    () => {
                                        e(), window.removeEventListener('resize', t);
                                    }
                                );
                            }, F),
                            s().createElement(
                                'div',
                                { className: D()(ve.base, n), ref: b },
                                t.map(({ id: t, items: n, title: a, groupClassNames: c }) =>
                                    s().createElement(
                                        'div',
                                        {
                                            key: t,
                                            className: D()(ve.group, ve[`group__${i}`], null == c ? void 0 : c.group),
                                        },
                                        a &&
                                            s().createElement(
                                                'div',
                                                { className: D()(ve.title, null == c ? void 0 : c.title) },
                                                a,
                                            ),
                                        n.map(({ id: t, icon: n, notification: a }) =>
                                            s().createElement(fe, {
                                                key: t,
                                                id: t,
                                                icon: n,
                                                notification: a,
                                                ref: g,
                                                sounds: u,
                                                isActive: e === t,
                                                size: i,
                                                className: null == r ? void 0 : r.tab,
                                                classNames: r,
                                                additionContent: o,
                                                onMouseEnter: _,
                                                onMouseLeave: m,
                                                onClick: l,
                                                WrapperElement: d,
                                            }),
                                        ),
                                    ),
                                ),
                                s().createElement(be, {
                                    arrowRef: E,
                                    ref: p,
                                    size: i,
                                    className: null == r ? void 0 : r.frame,
                                    classNames: r,
                                }),
                            )
                        );
                    });
                let De;
                function Fe(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                !(function (e) {
                    (e[(e.Progress = 0)] = 'Progress'),
                        (e[(e.Division = 1)] = 'Division'),
                        (e[(e.Order = 2)] = 'Order');
                })(De || (De = {}));
                const Be = Fe;
                function ye(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function we(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                function Se(e, t) {
                    for (let u = 0; u < e.length; u++) {
                        const n = ye(e[u]);
                        if (t(n, u, e)) return n;
                    }
                }
                const xe = (e) =>
                        null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? we(e, (e) => ('object' == typeof e ? xe(e) : e))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? xe(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, t]) => [e, 'object' == typeof t ? xe(t) : t]),
                                    )
                            : e,
                    Ne = (e, t) =>
                        Object.keys(e).length === Object.keys(t).length &&
                        Object.keys(e).every((u) => Object.prototype.hasOwnProperty.call(t, u) && e[u] === t[u]);
                var ke = u(6517);
                let Te, Le, Me, Pe, Re, Ie, Oe;
                var He;
                !(function (e) {
                    (e.Items = 'items'),
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
                        (e.Currency = 'currency'),
                        (e.TankmenXp = 'tankmenXP'),
                        (e.TankmenXpFactor = 'tankmenXPFactor'),
                        (e.FreeXpFactor = 'freeXPFactor'),
                        (e.BattleToken = 'battleToken'),
                        (e.HBVehicleUnlock = 'hbUnlockVehicles'),
                        (e.PremiumUniversal = 'premium_universal'),
                        (e.Gold = 'gold'),
                        (e.Credits = 'credits'),
                        (e.Crystal = 'crystal'),
                        (e.FreeXp = 'freeXP'),
                        (e.Premium = 'premium'),
                        (e.PremiumPlus = 'premium_plus'),
                        (e.BattlePassPoints = 'battlePassPoints'),
                        (e.BattlePassSelectToken = 'battlePassSelectToken'),
                        (e.SelectableBonus = 'selectableBonus'),
                        (e.StyleProgressToken = 'styleProgressToken'),
                        (e.TmanToken = 'tmanToken'),
                        (e.NaturalCover = 'naturalCover'),
                        (e.BpCoin = 'bpcoin'),
                        (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (e.BattleBadge = 'dossier_badge'),
                        (e.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                        (e.NewYearFillers = 'ny22Fillers'),
                        (e.NewYearInvoice = 'newYearInvoice'),
                        (e.NewYearToyFragments = 'ny22ToyFragments'),
                        (e.NewYearSlot = 'newYearSlot'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.CollectionItem = 'collectionItem'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.Comp7TokenCouponReward = 'comp7TokenCouponReward'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.CosmicLootboxSilver = 'lootBoxToken'),
                        (e.CosmicLootboxCommon = 'cosmic_2024_2'),
                        (e.Branch = 'branch'),
                        (e.VehicleSelect = 'vehicleSelect'),
                        (e.StyleProgress = 'styleProgress'),
                        (e.ParagonsUnlocks = 'paragonsUnlocks'),
                        (e.HistoricalBattleDiscount25 = 'historical_battles_main_discount'),
                        (e.LootBoxToken = 'lootBoxToken');
                })(Te || (Te = {})),
                    (function (e) {
                        (e.Gold = 'gold'),
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
                            (e.BattleAchievement = 'dossier_achievement');
                    })(Le || (Le = {})),
                    ((He = Me || (Me = {})).Big = 'big'),
                    (He.Small = 'small'),
                    (He.Mini = 'mini'),
                    (He.S600x450 = 's600x450'),
                    (He.S400x300 = 's400x300'),
                    (He.S296x222 = 's296x222'),
                    (He.S232x174 = 's232x174'),
                    (He.S180x135 = 's180x135'),
                    (He.S128x100 = 's128x100'),
                    (He.S80x80 = 's80x80'),
                    (He.S48x48 = 's48x48'),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Pe || (Pe = {})),
                    (function (e) {
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(Re || (Re = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Ie || (Ie = {})),
                    (function (e) {
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(Oe || (Oe = {}));
                const $e = ['children'];
                function Ue() {
                    return (
                        (Ue =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ue.apply(this, arguments)
                    );
                }
                const We = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, $e);
                    return s().createElement(
                        le,
                        Ue(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            u,
                        ),
                        t,
                    );
                };
                function ze() {
                    return (
                        (ze =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ze.apply(this, arguments)
                    );
                }
                const Ge = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = s().createElement('div', { className: u }, e);
                    if (t.header || t.body) return s().createElement(de, t, n);
                    const r = t.contentId,
                        a = t.args,
                        i = null == a ? void 0 : a.contentId;
                    return r || i
                        ? s().createElement(le, ze({}, t, { contentId: r || i }), n)
                        : s().createElement(We, t, n);
                };
                class Ve extends s().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? Q.B3.GOLD : Q.B3.INTEGRAL;
                        const t = Q.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                Ve.defaultProps = { format: 'integral' };
                const Xe = [
                        Te.Items,
                        Te.Equipment,
                        Te.Xp,
                        Te.XpFactor,
                        Te.Blueprints,
                        Te.BlueprintsAny,
                        Te.Goodies,
                        Te.Berths,
                        Te.Slots,
                        Te.Tokens,
                        Te.CrewSkins,
                        Te.CrewBooks,
                        Te.Customizations,
                        Te.CreditsFactor,
                        Te.TankmenXp,
                        Te.TankmenXpFactor,
                        Te.FreeXpFactor,
                        Te.BattleToken,
                        Te.HBVehicleUnlock,
                        Te.PremiumUniversal,
                        Te.NaturalCover,
                        Te.BpCoin,
                        Te.BattlePassSelectToken,
                        Te.BattlaPassFinalAchievement,
                        Te.BattleBadge,
                        Te.BonusX5,
                        Te.CrewBonusX3,
                        Te.NewYearFillers,
                        Te.NewYearInvoice,
                        Te.EpicSelectToken,
                        Te.Comp7TokenWeeklyReward,
                        Te.Comp7TokenCouponReward,
                        Te.BattleBoosterGift,
                        Te.CosmicLootboxCommon,
                        Te.CosmicLootboxSilver,
                        Te.SelectableBonus,
                    ],
                    je = [Te.Gold, Te.Credits, Te.Crystal, Te.FreeXp],
                    qe = [Te.BattlePassPoints],
                    Ye = [Te.PremiumPlus, Te.Premium],
                    Ke = ['engravings', 'backgrounds'],
                    Qe = ['engraving', 'background'],
                    Ze = (e, t = Me.Small) => {
                        const u = e.name,
                            n = e.type,
                            r = e.value,
                            a = e.icon,
                            s = e.item,
                            i = e.dogTagType,
                            o = e.iconSmall,
                            l = ((e) => {
                                switch (e) {
                                    case Me.S600x450:
                                        return 'c_600x450';
                                    case Me.S400x300:
                                        return 'c_400x300';
                                    case Me.S296x222:
                                        return 'c_296x222';
                                    case Me.S232x174:
                                        return 'c_232x174';
                                    case Me.Big:
                                        return 'c_80x80';
                                    case Me.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (u) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${r}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_plus_${r}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${a}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, t) => {
                                    switch (t) {
                                        case Me.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case Me.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                                    }
                                })(e, t);
                            case 'hbUnlockVehicles':
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${a}`;
                            case 'entitlements':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${o}`;
                            case 'dogTagComponents':
                                return ((e, t, u) => {
                                    const n = Ke[e];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(n),
                                            a = r.$dyn(u);
                                        return a ? `${a}` : `${r.$dyn(Qe[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, t, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${l}.${a}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.freeXP`;
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                            case 'selectableBonus':
                            case 'groups':
                            case 'lootBoxToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${a}`;
                        }
                    },
                    Je = (e, t, u) => {
                        const n = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            n,
                            u,
                        );
                    },
                    et = {
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
                        highlight: 'Reward_highlight_36',
                        image: 'Reward_image_89',
                        info: 'Reward_info_72',
                        info__multi: 'Reward_info__multi_63',
                        info__credits: 'Reward_info__credits_ef',
                        info__gold: 'Reward_info__gold_36',
                        info__crystal: 'Reward_info__crystal_36',
                        info__premiumTank: 'Reward_info__premiumTank_d3',
                        timer: 'Reward_timer_d3',
                    },
                    tt = ({
                        name: e,
                        image: t,
                        isPeriodic: u = !1,
                        size: n = Me.Big,
                        special: r,
                        value: a,
                        valueType: i,
                        style: o,
                        className: l,
                        classNames: c,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const d = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Re.BATTLE_BOOSTER:
                                    case Re.BATTLE_BOOSTER_REPLACE:
                                        return Ie.BATTLE_BOOSTER;
                                }
                            })(r),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Re.BATTLE_BOOSTER:
                                        return Oe.BATTLE_BOOSTER;
                                    case Re.BATTLE_BOOSTER_REPLACE:
                                        return Oe.BATTLE_BOOSTER_REPLACE;
                                    case Re.BUILT_IN_EQUIPMENT:
                                        return Oe.BUILT_IN_EQUIPMENT;
                                    case Re.EQUIPMENT_PLUS:
                                        return Oe.EQUIPMENT_PLUS;
                                    case Re.EQUIPMENT_TROPHY_BASIC:
                                        return Oe.EQUIPMENT_TROPHY_BASIC;
                                    case Re.EQUIPMENT_TROPHY_UPGRADED:
                                        return Oe.EQUIPMENT_TROPHY_UPGRADED;
                                    case Re.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Oe.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Re.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Oe.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Re.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Oe.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Re.PROGRESSION_STYLE_UPGRADED_1:
                                        return Oe.PROGRESSION_STYLE_UPGRADED_1;
                                    case Re.PROGRESSION_STYLE_UPGRADED_2:
                                        return Oe.PROGRESSION_STYLE_UPGRADED_2;
                                    case Re.PROGRESSION_STYLE_UPGRADED_3:
                                        return Oe.PROGRESSION_STYLE_UPGRADED_3;
                                    case Re.PROGRESSION_STYLE_UPGRADED_4:
                                        return Oe.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(r),
                            p = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case Pe.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case Pe.CURRENCY:
                                    case Pe.NUMBER:
                                        return s().createElement(Ve, { format: 'integral', value: Number(e) });
                                    case Pe.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(a, i);
                        return s().createElement(
                            'div',
                            { className: D()(et.base, et[`base__${n}`], l), style: o },
                            s().createElement(
                                Ge,
                                { tooltipArgs: _, className: et.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: D()(et.image, null == c ? void 0 : c.image) },
                                        d &&
                                            s().createElement('div', {
                                                className: D()(et.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${d}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            s().createElement('div', {
                                                className: D()(et.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        E &&
                                            s().createElement('div', {
                                                className: D()(et.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    p &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: D()(
                                                    et.info,
                                                    et[`info__${e}`],
                                                    i === Pe.MULTI && et.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            p,
                                        ),
                                ),
                            ),
                            u &&
                                s().createElement(
                                    Ge,
                                    { tooltipArgs: m },
                                    s().createElement('div', {
                                        className: D()(et.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    };
                let ut;
                var nt;
                function rt() {
                    return (
                        (rt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        rt.apply(this, arguments)
                    );
                }
                ((nt = ut || (ut = {})).InProgress = 'inProgress'), (nt.Completed = 'completed');
                const at = (e) => ('overlayType' in e ? e.overlayType : void 0),
                    st = [Te.TmanToken],
                    it = [Te.TmanToken, Te.HistoricalBattleDiscount25, Te.BattlaPassFinalAchievement, Te.BattleBadge];
                function ot(e, t, u = !1) {
                    const n = N(),
                        r = ((e, t) => t || (y.Medium, Me.Small))(n.mediaSize, t),
                        a = ((e, t = !1) =>
                            e <= y.Small
                                ? Me.S296x222
                                : (t ? e >= y.Medium : e >= y.Small) && e < y.Large
                                  ? Me.S400x300
                                  : Me.S600x450)(n.remScreenWidth),
                        s = 3 === e.length,
                        i = e.findIndex((e) => it.includes(e.name));
                    if (-1 !== i) {
                        const t = e.splice(i, 1)[0],
                            u = Math.floor(e.length / 2);
                        e.splice(u, 0, t);
                    }
                    const o = we(e, (e, t) => {
                            let n = rt({}, e);
                            return Object.assign({}, n, {
                                special: at(n),
                                image: Ze(n, u && 1 === t && s ? a : r),
                                size: u && 1 === t && s ? a : r,
                                valueType:
                                    ((i = n.name),
                                    i.includes('hb_front_coupon')
                                        ? Pe.MULTI
                                        : ((e) =>
                                              Xe.includes(e)
                                                  ? Pe.MULTI
                                                  : je.includes(e)
                                                    ? Pe.CURRENCY
                                                    : qe.includes(e)
                                                      ? Pe.NUMBER
                                                      : Ye.includes(e)
                                                        ? Pe.PREMIUM_PLUS
                                                        : Pe.STRING)(i)),
                                tooltipArgs: Je({ tooltipId: n.tooltipId, tooltipContentId: n.tooltipContentId }),
                            });
                            var i;
                        }),
                        l = o.filter(({ name: e }) => !st.includes(e));
                    return { parsedRewards: o, filteredRewards: l, imageSize: r };
                }
                const lt = {
                    base: 'Separator_base_97',
                    separator: 'Separator_separator_5f',
                    base__completedBattleQuests: 'Separator_base__completedBattleQuests_90',
                    separator__left: 'Separator_separator__left_ac',
                    base__inProgressBattleQuests: 'Separator_base__inProgressBattleQuests_f5',
                    base__condition: 'Separator_base__condition_0c',
                    base__awards: 'Separator_base__awards_8b',
                    base__completed: 'Separator_base__completed_b6',
                    show: 'Separator_show_0e',
                    base__completedWasVisited: 'Separator_base__completedWasVisited_d6',
                    separator__right: 'Separator_separator__right_2f',
                    ellipse: 'Separator_ellipse_96',
                    firstLayer: 'Separator_firstLayer_c4',
                    secondLayer: 'Separator_secondLayer_a3',
                    'add-blur': 'Separator_add-blur_3f',
                    hide: 'Separator_hide_f4',
                };
                let ct;
                !(function (e) {
                    (e.Awards = 'awards'),
                        (e.Condition = 'condition'),
                        (e.CompletedBattleQuests = 'completedBattleQuests'),
                        (e.InProgressBattleQuests = 'inProgressBattleQuests');
                })(ct || (ct = {}));
                const _t = ({ children: e, statusAnimation: t, type: u }) =>
                        s().createElement(
                            'div',
                            { className: D()(lt.base, lt[`base__${u}`], lt[`base__${t}`]) },
                            s().createElement(
                                'div',
                                { className: D()(lt.separator, lt.separator__left) },
                                s().createElement(
                                    'div',
                                    { className: lt.ellipse },
                                    s().createElement(
                                        'div',
                                        { className: lt.firstLayer },
                                        s().createElement('div', { className: lt.secondLayer }),
                                    ),
                                ),
                            ),
                            e,
                            s().createElement(
                                'div',
                                { className: D()(lt.separator, lt.separator__right) },
                                s().createElement(
                                    'div',
                                    { className: lt.ellipse },
                                    s().createElement(
                                        'div',
                                        { className: lt.firstLayer },
                                        s().createElement('div', { className: lt.secondLayer }),
                                    ),
                                ),
                            ),
                        ),
                    mt = {
                        base: 'TaskBattle_base_46',
                        base__completed: 'TaskBattle_base__completed_df',
                        'add-shadow': 'TaskBattle_add-shadow_9a',
                        base__completedWasVisited: 'TaskBattle_base__completedWasVisited_a5',
                        base__mediaMediumHeight: 'TaskBattle_base__mediaMediumHeight_a1',
                        taskType: 'TaskBattle_taskType_3b',
                        conditions: 'TaskBattle_conditions_83',
                        awards: 'TaskBattle_awards_f3',
                        'add-blur': 'TaskBattle_add-blur_a0',
                        awardsList: 'TaskBattle_awardsList_37',
                        award: 'TaskBattle_award_d5',
                        hide: 'TaskBattle_hide_57',
                        show: 'TaskBattle_show_d1',
                    };
                let dt;
                function Et(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const u = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(u, -u)]);
                    });
                }
                function pt(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(dt || (dt = {}));
                const gt = (e) => e.replace(/&nbsp;/g, ' '),
                    bt = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    ht = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    At = (e, t, u = dt.left) => e.split(t).reduce(u === dt.left ? bt : ht, []),
                    ft = (() => {
                        const e = new RegExp(
                            /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                .source +
                                '|' +
                                /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                    .source +
                                '|' +
                                /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                    .source +
                                '|' +
                                /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                    .source,
                            'gum',
                        );
                        return (t) =>
                            t
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    vt = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Ct = (e, t, u) =>
                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                            u && e in u
                                ? u[e]
                                : ((e, t = dt.left) => {
                                      const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return vt.includes(u)
                                          ? ft(e)
                                          : ((e, t = dt.left) => {
                                                let u = [];
                                                const n =
                                                        /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                    r = gt(e);
                                                return (
                                                    At(r, /( )/, t).forEach((e) => (u = u.concat(At(e, n, dt.left)))), u
                                                );
                                            })(e, t);
                                  })(e, t),
                        ),
                    Dt = ({ binding: e, text: t = '', classMix: u, alignment: n = dt.left }) =>
                        null === t
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : s().createElement(
                                  a.Fragment,
                                  null,
                                  t.split('\n').map((t, r) =>
                                      s().createElement(
                                          'div',
                                          { className: D()('FormatText_base_d0', u), key: `${t}-${r}` },
                                          Ct(t, n, e).map((e, t) =>
                                              s().createElement(a.Fragment, { key: `${t}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    Ft = { 0: 'firstCondition', 1: 'secondCondition' },
                    Bt = (e, t) => {
                        const u = [];
                        if ('or' === e.conditionType || 'and' === e.conditionType)
                            e.items.forEach((e) => {
                                const n = ye(e);
                                n && u.push(...Bt(n, t));
                            });
                        else {
                            const n = e.descrData;
                            let r = e,
                                a = r.titleData,
                                s = r.current,
                                i = r.total,
                                o = r.earned,
                                l = r.iconKey;
                            const c = Fe(t, 0);
                            c &&
                                ((a = n || c.descrData),
                                (l = l || c.iconKey),
                                (s = c.current),
                                (i = c.total),
                                (o = c.earned)),
                                0 === i && (a = n),
                                u.push({ condition: a, lastValue: o, currentValue: s, maxValue: i, icon: l });
                        }
                        return u;
                    },
                    yt = (0, ke.computedFn)((e, t) => {
                        for (let u = 0; u < t.length; u++) if (e < t[u]) return u;
                        return t.length + 1;
                    }),
                    wt = (e) => ('secondCondition' in e ? 'multiConditions' : 'oneCondition'),
                    St = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let xt, Nt;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                })(xt || (xt = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Nt || (Nt = {}));
                const kt = ({ size: e = xt.Default, classMix: t }) =>
                        s().createElement('div', { className: D()(St.background, St[`background__${e}`], t) }),
                    Tt = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    Lt = ({ size: e }) => {
                        const t = D()(Tt.base, Tt[`base__${e}`]);
                        return s().createElement('div', { className: t });
                    },
                    Mt = {
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
                    Pt = (0, a.memo)(
                        ({ size: e, lineRef: t, disabled: u, baseStyles: n, isComplete: r, withoutBounce: a }) => {
                            const i = D()(
                                    Mt.base,
                                    Mt[`base__${e}`],
                                    u && Mt.base__disabled,
                                    r && Mt.base__finished,
                                    a && Mt.base__withoutBounce,
                                ),
                                o = !u && !r;
                            return s().createElement(
                                'div',
                                { className: i, style: n, ref: t },
                                s().createElement('div', { className: Mt.pattern }),
                                s().createElement('div', { className: Mt.gradient }),
                                o && s().createElement(Lt, { size: e }),
                            );
                        },
                    ),
                    Rt = ({ size: e, value: t, lineRef: u, disabled: n, onComplete: r }) => {
                        const i = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            o = 100 === t;
                        return (
                            (0, a.useEffect)(() => {
                                o && r && r();
                            }, [o, r]),
                            s().createElement(Pt, { size: e, disabled: n, baseStyles: i, isComplete: o, lineRef: u })
                        );
                    },
                    It = (e, t) => {
                        let u;
                        const n = setTimeout(() => {
                            u = e();
                        }, t);
                        return () => {
                            'function' == typeof u && u(), clearTimeout(n);
                        };
                    };
                let Ot, Ht;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(Ot || (Ot = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(Ht || (Ht = {}));
                const $t = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: n,
                            size: r,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < n,
                                _ = (0, a.useState)(Ht.Idle),
                                m = _[0],
                                d = _[1],
                                E = m === Ht.In,
                                p = m === Ht.End,
                                g = m === Ht.Idle,
                                b = (0, a.useCallback)(
                                    (e) => {
                                        d(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, a.useEffect)(() => {
                                if (g && !u)
                                    return It(() => {
                                        b(Ht.In);
                                    }, t);
                            }, [b, u, g, t]),
                                (0, a.useEffect)(() => {
                                    if (E)
                                        return It(() => {
                                            o && o(), b(Ht.End);
                                        }, e + t);
                                }, [b, E, o, t, e]);
                            const h = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                A = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                f = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(n - i)}%`, left: `${c ? i : n}%` }),
                                    [n, c, i],
                                );
                            return p
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: f },
                                      s().createElement(
                                          'div',
                                          { style: g ? h : A, className: 'ProgressBarDeltaSimple_delta_99' },
                                          s().createElement(Lt, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    Ut = (0, a.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: n,
                            disabled: r,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const _ = (0, a.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(Pt, {
                                    size: t,
                                    lineRef: n,
                                    disabled: r,
                                    isComplete: i,
                                    baseStyles: _,
                                }),
                                u >= 0 &&
                                    s().createElement($t, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: u,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    Wt = (e) => (e ? { left: 0 } : { right: 0 }),
                    zt = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    Gt = (e) => ({ transitionDuration: `${e}ms` }),
                    Vt = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: n,
                            size: r,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const _ = i < n,
                                m = (0, a.useState)(Ot.Idle),
                                d = m[0],
                                E = m[1],
                                p = d === Ot.End,
                                g = d === Ot.Idle,
                                b = d === Ot.Grow,
                                h = d === Ot.Shrink,
                                A = (0, a.useCallback)(
                                    (e) => {
                                        E(e), l && l(e);
                                    },
                                    [l],
                                ),
                                f = (0, a.useCallback)(
                                    (e, t) =>
                                        It(() => {
                                            A(e);
                                        }, t),
                                    [A],
                                );
                            (0, a.useEffect)(() => {
                                if (!u)
                                    return g
                                        ? f(Ot.Grow, t)
                                        : b
                                          ? f(Ot.Shrink, e)
                                          : h
                                            ? f(Ot.End, e)
                                            : void (p && o && o());
                            }, [f, u, p, b, g, h, o, t, e]);
                            const v = (0, a.useMemo)(() => Object.assign({ width: '100%' }, Gt(e), Wt(_)), [_, e]),
                                C = (0, a.useMemo)(() => Object.assign({ width: '0%' }, Gt(e), Wt(_)), [_, e]),
                                F = (0, a.useMemo)(() => Object.assign({ width: '0%' }, zt(_, n), Gt(e)), [n, _, e]),
                                B = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - n)}%` }, zt(_, n), Gt(e)),
                                    [n, _, i, e],
                                );
                            if (p) return null;
                            const y = D()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                _ && 0 === i && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return s().createElement(
                                'div',
                                { style: g ? F : B, className: y },
                                s().createElement(
                                    'div',
                                    { style: h ? C : v, className: 'ProgressBarDeltaGrow_glow_68' },
                                    s().createElement(Lt, { size: r }),
                                ),
                            );
                        },
                    ),
                    Xt = (0, a.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: n,
                            disabled: r,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const _ = e < u,
                                m = (0, a.useState)(!1),
                                d = m[0],
                                E = m[1],
                                p = (0, a.useCallback)(
                                    (e) => {
                                        e === Ot.Shrink && E(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                g = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                                b = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(Pt, {
                                    size: t,
                                    lineRef: n,
                                    disabled: r,
                                    isComplete: i,
                                    withoutBounce: _ && 0 === e,
                                    baseStyles: d ? b : g,
                                }),
                                u >= 0 &&
                                    s().createElement(Vt, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: p,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: u,
                                        size: t,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    jt = ['onComplete', 'onEndAnimation'];
                function qt() {
                    return (
                        (qt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        qt.apply(this, arguments)
                    );
                }
                const Yt = (0, a.memo)((e) => {
                        let t = e.onComplete,
                            u = e.onEndAnimation,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, jt);
                        const r = (0, a.useState)(!1),
                            i = r[0],
                            o = r[1],
                            l = (0, a.useCallback)(() => {
                                const e = 100 === n.to;
                                e !== i && o(e), e && t && t(), u && u();
                            }, [i, t, u, n.to]);
                        switch (n.animationSettings.type) {
                            case Nt.Simple:
                                return s().createElement(Ut, qt({}, n, { onEndAnimation: l, isComplete: i }));
                            case Nt.Growing:
                                return s().createElement(Xt, qt({}, n, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    Kt = ['onEndAnimation'];
                function Qt() {
                    return (
                        (Qt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Qt.apply(this, arguments)
                    );
                }
                const Zt = (0, a.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, Kt);
                    const n = (0, a.useRef)({}),
                        r = (0, a.useCallback)(() => {
                            (n.current.from = void 0), t && t();
                        }, [t]),
                        i = 'number' == typeof n.current.from ? n.current.from : u.from;
                    return (
                        (n.current.from = i),
                        s().createElement(Yt, Qt({}, u, { onEndAnimation: r, key: `${i}-${u.to}`, from: i }))
                    );
                });
                function Jt() {
                    return (
                        (Jt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Jt.apply(this, arguments)
                    );
                }
                const eu = (0, a.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: u,
                            disabled: n,
                            deltaFrom: r,
                            animationSettings: a,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                            onComplete: l,
                        }) => {
                            if (r === t)
                                return s().createElement(Rt, {
                                    key: `${r}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: u,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: r,
                                to: t,
                                size: e,
                                lineRef: u,
                                disabled: n,
                                animationSettings: a,
                                onComplete: l,
                                onEndAnimation: i,
                                onChangeAnimationState: o,
                            };
                            return a.withStack
                                ? s().createElement(Zt, c)
                                : s().createElement(Yt, Jt({ key: `${r}-${t}` }, c));
                        },
                    ),
                    tu = (e) => ({
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${e.glow}')`,
                        '--progress-glow-small': `url('${e.glowSmall}')`,
                        '--progress-delta-color': e.delta.color,
                        '--progress-delta-shadow': e.delta.shadow,
                    }),
                    uu = {
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
                    nu = (e, t, u) => (u < e ? e : u > t ? t : u),
                    ru = (e, t, u) => ('number' == typeof u ? (nu(0, t, u) / t) * 100 : e),
                    au = uu,
                    su = {
                        freezed: !1,
                        withStack: !1,
                        type: Nt.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    iu = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = au,
                            size: u = xt.Default,
                            animationSettings: n = su,
                            disabled: r = !1,
                            withoutBackground: i = !1,
                            progressBarBackgroundClassMix: o,
                            value: l,
                            deltaFrom: c,
                            lineRef: _,
                            onChangeAnimationState: m,
                            onEndAnimation: d,
                            onComplete: E,
                        }) => {
                            const p = ((e, t, u) =>
                                (0, a.useMemo)(() => {
                                    const n = (nu(0, t, e) / t) * 100;
                                    return { value: n, deltaFrom: ru(n, t, u) };
                                }, [u, t, e]))(l, e, c);
                            return s().createElement(
                                'div',
                                { className: D()(St.base, St[`base__${u}`]), style: tu(t) },
                                !i && s().createElement(kt, { size: u, classMix: o }),
                                s().createElement(eu, {
                                    size: u,
                                    lineRef: _,
                                    disabled: r,
                                    value: p.value,
                                    deltaFrom: p.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: d,
                                    onChangeAnimationState: m,
                                    onComplete: E,
                                }),
                            );
                        },
                    ),
                    ou = {
                        base: 'Progression_base_af',
                        base__completedWasVisited: 'Progression_base__completedWasVisited_ec',
                        progression: 'Progression_progression_da',
                        base__completed: 'Progression_base__completed_38',
                        hide: 'Progression_hide_50',
                        progressionNumerical: 'Progression_progressionNumerical_f3',
                        progressionNumerical__mediaMediumHeight:
                            'Progression_progressionNumerical__mediaMediumHeight_6e',
                        'finish-color': 'Progression_finish-color_d5',
                        currentValue__inProgress: 'Progression_currentValue__inProgress_4d',
                        currentValue: 'Progression_currentValue_5c',
                        separator: 'Progression_separator_2c',
                        progressBar: 'Progression_progressBar_82',
                        progressBar__mediaMediumHeight: 'Progression_progressBar__mediaMediumHeight_26',
                        'add-blur': 'Progression_add-blur_fe',
                        show: 'Progression_show_3a',
                        'default-color': 'Progression_default-color_24',
                    },
                    lu = ({
                        currentValue: e,
                        maxValue: t,
                        lastValue: u,
                        statusAnimation: n,
                        updateStatusAnimation: r,
                    }) => {
                        const a = N(),
                            i = a.mediaSize === y.Medium && a.remScreenHeight >= 1024;
                        return s().createElement(
                            'div',
                            { className: D()(ou.base, ou[`base__${n}`]) },
                            s().createElement(
                                'div',
                                { className: ou.progression },
                                s().createElement(
                                    'div',
                                    {
                                        className: D()(
                                            ou.progressionNumerical,
                                            i && ou.progressionNumerical__mediaMediumHeight,
                                        ),
                                    },
                                    s().createElement(
                                        'span',
                                        { className: D()(ou.currentValue, Boolean(e) && ou.currentValue__inProgress) },
                                        e,
                                    ),
                                    s().createElement(
                                        'span',
                                        { className: ou.separator },
                                        R.strings.common.common.slash(),
                                    ),
                                    s().createElement('span', null, t),
                                ),
                                Boolean(e) &&
                                    s().createElement(
                                        'div',
                                        { className: D()(ou.progressBar, i && ou.progressBar__mediaMediumHeight) },
                                        s().createElement(iu, {
                                            size: xt.Small,
                                            value: e,
                                            deltaFrom: e - u,
                                            maxValue: t,
                                            onComplete: r,
                                        }),
                                    ),
                            ),
                        );
                    },
                    cu = {
                        base: 'TaskCondition_base_a2',
                        condition: 'TaskCondition_condition_24',
                        text: 'TaskCondition_text_a7',
                        text__completed: 'TaskCondition_text__completed_4b',
                        'update-condition': 'TaskCondition_update-condition_8a',
                        text__completedWasVisited: 'TaskCondition_text__completedWasVisited_fc',
                        'add-blur': 'TaskCondition_add-blur_be',
                        hide: 'TaskCondition_hide_da',
                        show: 'TaskCondition_show_b9',
                    },
                    _u = R.strings.historical_battles_progression.progressionView.battleQuests,
                    mu = (0, Y.observer)(
                        ({
                            conditions: e,
                            setStatusAnimation: t,
                            statusAnimation: u,
                            progression: n,
                            conditionIndex: r,
                        }) => {
                            const i = vu().model.computes.missionCompletedVisitedStatus,
                                o = (0, a.useCallback)(() => {
                                    t(i(r));
                                }, [r, i, t]),
                                l = Object.assign({}, n, { statusAnimation: u, updateStatusAnimation: o }),
                                c = n.maxValue,
                                _ = n.status,
                                m = 0 === c;
                            return (
                                (0, a.useEffect)(() => {
                                    _ === hu ? m && o() : t(gu.inProgress);
                                }, [m, t, _, o]),
                                s().createElement(
                                    'div',
                                    { className: cu.base },
                                    s().createElement(
                                        'div',
                                        { className: cu.condition },
                                        s().createElement(Dt, {
                                            text: `${_u.$dyn(wt(e))}`,
                                            classMix: D()(cu.text, cu[`text__${u}`]),
                                            binding: Object.assign({}, e),
                                        }),
                                        Boolean(c) && s().createElement(lu, l),
                                    ),
                                )
                            );
                        },
                    ),
                    du = {
                        base: 'TaskType_base_c0',
                        ellipse: 'TaskType_ellipse_79',
                        base__completed: 'TaskType_base__completed_3a',
                        hide: 'TaskType_hide_1f',
                        base__completedWasVisited: 'TaskType_base__completedWasVisited_29',
                        typeIcon: 'TaskType_typeIcon_8e',
                        completedIcon: 'TaskType_completedIcon_40',
                        'slide-down': 'TaskType_slide-down_54',
                        'add-blur': 'TaskType_add-blur_2c',
                        show: 'TaskType_show_5f',
                    },
                    Eu = ({ taskBattleIcon: e, statusAnimation: t }) =>
                        s().createElement(
                            'div',
                            { className: D()(du.base, du[`base__${t}`]) },
                            s().createElement('div', { className: du.ellipse }),
                            s().createElement('div', {
                                className: du.typeIcon,
                                style: { backgroundImage: `url('${R.images.gui.maps.icons.missions.daily.$dyn(e)}')` },
                            }),
                            s().createElement('div', { className: du.completedIcon }),
                        );
                function pu() {
                    return (
                        (pu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        pu.apply(this, arguments)
                    );
                }
                const gu = {
                    inProgress: 'inProgress',
                    completed: 'completed',
                    completedWasVisited: 'completedWasVisited',
                    allCompletedTasksVisited: 'allCompletedTasksVisited',
                };
                let bu;
                (0, Y.observer)(({ taskConditions: e, awardsBattle: t, taskBattleIcon: u, index: n }) => {
                    const r = (0, a.useState)(gu.inProgress),
                        i = r[0],
                        o = r[1],
                        l = N(),
                        c = ot(t, Me.Small).parsedRewards;
                    return s().createElement(
                        'div',
                        {
                            className: D()(
                                mt.base,
                                mt[`base__${i}`],
                                l.mediaSize === y.Medium && l.remScreenHeight >= 1024 && mt.base__mediaMediumHeight,
                            ),
                        },
                        s().createElement(
                            'div',
                            { className: mt.taskType },
                            s().createElement(Eu, { taskBattleIcon: u, statusAnimation: i }),
                        ),
                        s().createElement(
                            'div',
                            { className: mt.conditions },
                            we(e, ({ conditions: e, progression: t }) =>
                                s().createElement(mu, {
                                    key: t.currentValue,
                                    conditionIndex: n,
                                    progression: t,
                                    conditions: e,
                                    setStatusAnimation: o,
                                    statusAnimation: i,
                                }),
                            ),
                        ),
                        s().createElement(
                            'div',
                            { className: mt.awards },
                            s().createElement(
                                _t,
                                { statusAnimation: i, type: ct.Awards },
                                s().createElement(
                                    'div',
                                    { className: mt.awardsList },
                                    we(c, (e) => s().createElement(tt, pu({ className: mt.award, key: e.name }, e))),
                                ),
                            ),
                        ),
                    );
                }),
                    (function (e) {
                        (e[(e.Scrolling = 0)] = 'Scrolling'),
                            (e[(e.ProgressChange = 1)] = 'ProgressChange'),
                            (e[(e.HighlightCard = 2)] = 'HighlightCard'),
                            (e[(e.ChangeCompleted = 3)] = 'ChangeCompleted'),
                            (e[(e.ProgressFinished = 4)] = 'ProgressFinished'),
                            (e[(e.ProgressAlreadyFinished = 5)] = 'ProgressAlreadyFinished');
                    })(bu || (bu = {}));
                const hu = 'done',
                    Au = V()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {
                                        root: e.object(),
                                        currentTimerDate: e.primitives(['currentTimerDate'], 'battleQuests'),
                                        battleQuests: e.array('battleQuests.tasksBattle'),
                                        missionsCompletedVisited: e.array('battleQuests.missionsCompletedVisited'),
                                        progressLevels: e.array('progressLevels'),
                                        pointsForLevel: e.array('pointsForLevel'),
                                        marksDetails: e.array('marksDetails'),
                                    },
                                    e.primitives([
                                        'state',
                                        'curProgressPoints',
                                        'prevProgressPoints',
                                        'vehicleDiscount',
                                        'hasVehicle',
                                        'frontName',
                                    ]),
                                    {
                                        progressAnimationState: W.observable.box(bu.Scrolling),
                                        hoveredCard: W.observable.box(void 0),
                                    },
                                ),
                                u = (0, ke.computedFn)(() => we(t.pointsForLevel.get(), (e) => e)),
                                n = (0, ke.computedFn)(() => yt(t.curProgressPoints.get(), u())),
                                r = (0, ke.computedFn)(() => yt(t.prevProgressPoints.get(), u())),
                                a = (0, ke.computedFn)(
                                    (e) => ({
                                        wasProgressionVisited: r() === n(),
                                        isRecentlyCompletedLevel: r() <= e && e <= n(),
                                        isPrevLevel: e <= r(),
                                    }),
                                    { equals: Ne },
                                ),
                                s = (0, ke.computedFn)(() =>
                                    we(t.battleQuests.get(), (e) => {
                                        const t = ((e, t, u) => {
                                            const n = {};
                                            let r = {},
                                                a = '';
                                            return (
                                                Bt(e, t).forEach(
                                                    (
                                                        {
                                                            condition: e,
                                                            lastValue: t,
                                                            currentValue: u,
                                                            maxValue: s,
                                                            icon: i,
                                                        },
                                                        o,
                                                    ) => {
                                                        (n[Ft[o]] = ((e, t) =>
                                                            Ct(e, dt.left)
                                                                .flat()
                                                                .map(
                                                                    (e, u) => (
                                                                        0 === u && t > 0 && (e = e.toLowerCase()), e
                                                                    ),
                                                                ))(e, o)),
                                                            (a = i),
                                                            (r = { lastValue: t, currentValue: u, maxValue: s });
                                                    },
                                                ),
                                                {
                                                    taskConditions: [
                                                        { conditions: n, progression: Object.assign({ status: u }, r) },
                                                    ],
                                                    taskBattleIcon: a,
                                                }
                                            );
                                        })(e.postBattleCondition, e.bonusCondition.items, e.status);
                                        return Object.assign({}, t, { awardsBattle: e.bonuses });
                                    }),
                                ),
                                i = (0, ke.computedFn)(() => 4 >= s().length),
                                o = (0, ke.computedFn)(() => {
                                    let e = 0;
                                    return (
                                        s().forEach((t) => {
                                            t.taskConditions[0].progression.status === hu && ++e;
                                        }),
                                        e
                                    );
                                }),
                                l = (0, ke.computedFn)(
                                    () => {
                                        return (e = t.progressLevels.get()), xe(e);
                                        var e;
                                    },
                                    { equals: U },
                                ),
                                c = (0, ke.computedFn)(() => {
                                    const e = n(),
                                        t = l();
                                    return we(t, ({ rewards: u }, n) => ({
                                        level: n + 1,
                                        isCompleted: n < e,
                                        isActive: n === e,
                                        isLast: n === t.length - 1,
                                        rewards: u,
                                    }));
                                }),
                                _ = (0, ke.computedFn)(() => {
                                    const e = s();
                                    for (let t = 0; t < e.length; t++)
                                        if (e[t].taskConditions[0].progression.status !== hu) return gu.inProgress;
                                    return (function (e, t) {
                                        if (Array.isArray(e)) return e.every(t);
                                        for (let t = 0; t < e.length; t++) if (!Be(e, t)) return !1;
                                        return !0;
                                    })(t.missionsCompletedVisited.get(), (e) => e)
                                        ? gu.allCompletedTasksVisited
                                        : gu.completed;
                                }),
                                m = (0, ke.computedFn)((e) => {
                                    const u = Be(s(), e).taskConditions[0].progression.status,
                                        n = t.missionsCompletedVisited.get()[e].value;
                                    return u !== hu ? gu.inProgress : n ? gu.completedWasVisited : gu.completed;
                                }),
                                d = (0, ke.computedFn)(() => {
                                    const e = t.pointsForLevel.get(),
                                        u = e[e.length - 1].value;
                                    return t.curProgressPoints.get() >= u;
                                }),
                                E = (0, ke.computedFn)(() => {
                                    const e = n(),
                                        u = t.pointsForLevel.get();
                                    return !d() && u[e].value;
                                }),
                                p = (0, ke.computedFn)(
                                    () => d() && t.curProgressPoints.get() === t.prevProgressPoints.get(),
                                ),
                                g = (0, ke.computedFn)(() => we(t.marksDetails.get(), (e) => e), { equals: Ne }),
                                b = (0, ke.computedFn)(() => {
                                    const e = g(),
                                        t = e.findIndex((e) => {
                                            if (e.locked) return 1;
                                        });
                                    return t > 0 ? t + 1 : e.length + 1;
                                });
                            return Object.assign({}, t, t.currentTimerDate, {
                                computes: {
                                    levels: c,
                                    battleQuests: s,
                                    currentLevel: n,
                                    levelStatus: a,
                                    pointsForNewLevel: E,
                                    battleTasksStatus: _,
                                    isProgressionCompleted: d,
                                    wasProgressionCompletedBeforeStart: p,
                                    missionCompletedVisitedStatus: m,
                                    areDefaultNumberQuests: i,
                                    numberCompletedQuests: o,
                                    getLevels: u,
                                    getMarksDetails: g,
                                    getLockedPageIndex: b,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => {
                            const u = (function (e) {
                                    const t = {};
                                    for (const u in e)
                                        if (Object.prototype.hasOwnProperty.call(e, u)) {
                                            const n = e[u];
                                            t[u] = (0, W.action)(n);
                                        }
                                    return t;
                                })({
                                    finishScrolling: () => t.progressAnimationState.set(bu.ProgressChange),
                                    finishProgressionChange: () => t.progressAnimationState.set(bu.HighlightCard),
                                    finishHighlightCard: () => t.progressAnimationState.set(bu.ChangeCompleted),
                                    completeProgression: (e) =>
                                        t.progressAnimationState.set(
                                            e ? bu.ProgressAlreadyFinished : bu.ProgressFinished,
                                        ),
                                }),
                                n = (0, W.action)((e) => t.hoveredCard.set(e));
                            return Object.assign({}, u, {
                                updateHoveredCard: n,
                                onBuyClicked: e.createCallbackNoArgs('onVehicleBuyClicked'),
                                showVehiclePreview: e.createCallbackNoArgs('onPreviewClicked'),
                                showVideo: e.createCallback((e) => ({ url: e }), 'onShowVideoClicked'),
                            });
                        },
                    ),
                    fu = Au[0],
                    vu = Au[1];
                var Cu = u(9887),
                    Du = u.n(Cu);
                const Fu = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Bu = (e) => e.includes('_') && ((e) => Fu.includes(e))(e.split('_').at(-1)),
                    yu = [y.ExtraLarge, y.Large, y.Medium, y.Small, y.ExtraSmall],
                    wu = (e, t) =>
                        Object.keys(e).reduce((u, n) => {
                            if (n in u) return u;
                            if (Bu(n)) {
                                const r = n.split('_').slice(0, -1).join('_');
                                if (r in u) return u;
                                const a = yu.indexOf(t),
                                    s = (-1 !== a ? Fu.slice(a) : [])
                                        .map((e) => r + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    i = s ? e[s] : void 0;
                                return (u[r] = void 0 !== i ? i : e[r]), u;
                            }
                            const r = e[n];
                            return (
                                void 0 === r ||
                                    ((e, t) => Fu.some((u) => void 0 !== t[`${e}_${u}`]))(n, e) ||
                                    (u[n] = r),
                                u
                            );
                        }, {}),
                    Su = (e, t = wu) => {
                        const u = (
                            (e, t = wu) =>
                            (u) => {
                                const n = N().mediaSize,
                                    r = (0, a.useMemo)(() => t(u, n), [u, n]);
                                return s().createElement(e, r);
                            }
                        )(e, t);
                        return s().memo((t) =>
                            Object.keys(t).some((e) => Bu(e) && void 0 !== t[e])
                                ? s().createElement(u, t)
                                : s().createElement(e, t),
                        );
                    },
                    xu = {
                        mt__XS: 'Box_mt__XS_0c',
                        mt__SM: 'Box_mt__SM_eb',
                        mt__SMp: 'Box_mt__SMp_cf',
                        mt__MD: 'Box_mt__MD_25',
                        mt__MDp: 'Box_mt__MDp_49',
                        mt__LG: 'Box_mt__LG_e8',
                        mt__XL: 'Box_mt__XL_83',
                        mr__XS: 'Box_mr__XS_7c',
                        mr__SM: 'Box_mr__SM_08',
                        mr__SMp: 'Box_mr__SMp_06',
                        mr__MD: 'Box_mr__MD_4a',
                        mr__MDp: 'Box_mr__MDp_b6',
                        mr__LG: 'Box_mr__LG_d0',
                        mr__XL: 'Box_mr__XL_db',
                        mb__XS: 'Box_mb__XS_bb',
                        mb__SM: 'Box_mb__SM_83',
                        mb__SMp: 'Box_mb__SMp_04',
                        mb__MD: 'Box_mb__MD_ed',
                        mb__MDp: 'Box_mb__MDp_65',
                        mb__LG: 'Box_mb__LG_c8',
                        mb__XL: 'Box_mb__XL_f8',
                        ml__XS: 'Box_ml__XS_8a',
                        ml__SM: 'Box_ml__SM_e6',
                        ml__SMp: 'Box_ml__SMp_fb',
                        ml__MD: 'Box_ml__MD_2b',
                        ml__MDp: 'Box_ml__MDp_c7',
                        ml__LG: 'Box_ml__LG_39',
                        ml__XL: 'Box_ml__XL_4a',
                    },
                    Nu = [
                        'className',
                        'width',
                        'height',
                        'm',
                        'mt',
                        'mr',
                        'mb',
                        'ml',
                        'column',
                        'row',
                        'flexDirection',
                        'flexStart',
                        'center',
                        'flexEnd',
                        'spaceBetween',
                        'spaceAround',
                        'justifyContent',
                        'alignItems',
                        'alignSelf',
                        'wrap',
                        'flexWrap',
                        'grow',
                        'shrink',
                        'flex',
                        'style',
                        'children',
                    ];
                function ku() {
                    return (
                        (ku =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ku.apply(this, arguments)
                    );
                }
                Object.keys(Du());
                const Tu = {
                        XL: { mt: xu.mt__XL, mr: xu.mr__XL, mb: xu.mb__XL, ml: xu.ml__XL },
                        LG: { mt: xu.mt__LG, mr: xu.mr__LG, mb: xu.mb__LG, ml: xu.ml__LG },
                        MDp: { mt: xu.mt__MDp, mr: xu.mr__MDp, mb: xu.mb__MDp, ml: xu.ml__MDp },
                        MD: { mt: xu.mt__MD, mr: xu.mr__MD, mb: xu.mb__MD, ml: xu.ml__MD },
                        SMp: { mt: xu.mt__SMp, mr: xu.mr__SMp, mb: xu.mb__SMp, ml: xu.ml__SMp },
                        SM: { mt: xu.mt__SM, mr: xu.mr__SM, mb: xu.mb__SM, ml: xu.ml__SM },
                        XS: { mt: xu.mt__XS, mr: xu.mr__XS, mb: xu.mb__XS, ml: xu.ml__XS },
                    },
                    Lu = (Object.keys(Tu), ['mt', 'mr', 'mb', 'ml']),
                    Mu = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Pu = Su((e) => {
                        let t = e.className,
                            u = e.width,
                            n = e.height,
                            r = e.m,
                            i = e.mt,
                            o = void 0 === i ? r : i,
                            l = e.mr,
                            c = void 0 === l ? r : l,
                            _ = e.mb,
                            m = void 0 === _ ? r : _,
                            d = e.ml,
                            E = void 0 === d ? r : d,
                            p = e.column,
                            g = e.row,
                            b = e.flexDirection,
                            h = void 0 === b ? (p ? 'column' : g && 'row') || void 0 : b,
                            A = e.flexStart,
                            f = e.center,
                            v = e.flexEnd,
                            C = e.spaceBetween,
                            F = e.spaceAround,
                            B = e.justifyContent,
                            y =
                                void 0 === B
                                    ? (A ? 'flex-start' : f && 'center') ||
                                      (v && 'flex-end') ||
                                      (C && 'space-between') ||
                                      (F && 'space-around') ||
                                      void 0
                                    : B,
                            w = e.alignItems,
                            S = void 0 === w ? (A ? 'flex-start' : f && 'center') || (v && 'flex-end') || void 0 : w,
                            x = e.alignSelf,
                            N = e.wrap,
                            k = e.flexWrap,
                            T = void 0 === k ? (N ? 'wrap' : void 0) : k,
                            L = e.grow,
                            M = e.shrink,
                            P = e.flex,
                            R = void 0 === P ? (L || M ? `${L ? 1 : 0} ${M ? 1 : 0} auto` : void 0) : P,
                            I = e.style,
                            O = e.children,
                            H = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, Nu);
                        const $ = (0, a.useMemo)(() => {
                                const e = { mt: o, mr: c, mb: m, ml: E },
                                    t = ((e) =>
                                        Lu.reduce((t, u) => {
                                            const n = e[u];
                                            return n && 'number' != typeof n ? t.concat(Tu[!0 === n ? 'MD' : n][u]) : t;
                                        }, []))(e),
                                    r = ((e) =>
                                        Lu.reduce((t, u) => {
                                            const n = e[u];
                                            return 'number' == typeof n && (t[Mu[u]] = n + 'rem'), t;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, I, r, {
                                        width: void 0 !== u && 'number' == typeof u ? u + 'rem' : u,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: R,
                                        alignSelf: x,
                                        display: h || S ? 'flex' : void 0,
                                        flexDirection: h,
                                        flexWrap: T,
                                        justifyContent: y,
                                        alignItems: S,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [u, n, o, c, m, E, I, R, x, h, T, y, S]),
                            U = $.computedStyle,
                            W = $.computedClassNames;
                        return s().createElement('div', ku({ className: D()(xu.base, ...W, t), style: U }, H), O);
                    });
                var Ru = u(3532),
                    Iu = u.n(Ru);
                const Ou = {
                        'paragraph-P10': 'Text_paragraph-P10_2c',
                        'paragraph-P12': 'Text_paragraph-P12_22',
                        'paragraph-P14': 'Text_paragraph-P14_a7',
                        'paragraph-P16': 'Text_paragraph-P16_90',
                        'paragraph-P18': 'Text_paragraph-P18_50',
                        'paragraph-P24': 'Text_paragraph-P24_33',
                        'heading-H14': 'Text_heading-H14_8b',
                        'heading-H15': 'Text_heading-H15_9e',
                        'heading-H18': 'Text_heading-H18_b7',
                        'heading-H20R': 'Text_heading-H20R_f6',
                        'heading-H22': 'Text_heading-H22_27',
                        'heading-H24R': 'Text_heading-H24R_be',
                        'heading-H24': 'Text_heading-H24_0c',
                        'heading-H28': 'Text_heading-H28_78',
                        'heading-H36': 'Text_heading-H36_32',
                        'heading-H56': 'Text_heading-H56_c3',
                        'heading-H73': 'Text_heading-H73_8f',
                        'heading-H144': 'Text_heading-H144_a9',
                        BLACK_REAL: 'Text_BLACK_REAL_30',
                        WHITE_REAL: 'Text_WHITE_REAL_bc',
                        WHITE: 'Text_WHITE_62',
                        WHITE_ORANGE: 'Text_WHITE_ORANGE_54',
                        WHITE_SPANISH: 'Text_WHITE_SPANISH_df',
                        PAR: 'Text_PAR_15',
                        PAR_SECONDARY: 'Text_PAR_SECONDARY_5d',
                        PAR_TERTIARY: 'Text_PAR_TERTIARY_c9',
                        INFO_RED: 'Text_INFO_RED_30',
                        RED: 'Text_RED_66',
                        RED_DARK: 'Text_RED_DARK_d8',
                        YELLOW: 'Text_YELLOW_ed',
                        ORANGE: 'Text_ORANGE_be',
                        CREAM: 'Text_CREAM_57',
                        BROWN: 'Text_BROWN_18',
                        GREEN_BRIGHT: 'Text_GREEN_BRIGHT_3f',
                        GREEN: 'Text_GREEN_e3',
                        GREEN_DARK: 'Text_GREEN_DARK_f1',
                        BLUE_BOOSTER: 'Text_BLUE_BOOSTER_21',
                        BLUE_TEAMKILLER: 'Text_BLUE_TEAMKILLER_ab',
                        CRED: 'Text_CRED_f7',
                        GOLD: 'Text_GOLD_28',
                        BOND: 'Text_BOND_be',
                        PROM: 'Text_PROM_65',
                    },
                    Hu = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function $u() {
                    return (
                        ($u =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        $u.apply(this, arguments)
                    );
                }
                Object.keys(Du());
                const Uu = Object.keys(Iu()),
                    Wu = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    zu = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Gu = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Vu =
                        (Object.keys({
                            XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                            LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                            MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                            MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                            SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                            SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                            XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                        }),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': Wu,
                            'heading-H36': Wu,
                            'heading-H28': zu,
                            'heading-H24': zu,
                            'heading-H24R': zu,
                            'heading-H22': zu,
                            'heading-H20R': zu,
                            'heading-H18': zu,
                            'heading-H15': Gu,
                            'heading-H14': Gu,
                            'paragraph-P24': zu,
                            'paragraph-P18': zu,
                            'paragraph-P16': zu,
                            'paragraph-P14': Gu,
                            'paragraph-P12': Gu,
                            'paragraph-P10': Gu,
                        }),
                    Xu =
                        (Object.keys(Vu),
                        (e) =>
                            e
                                ? ((e) => Uu.includes(e))(e)
                                    ? { colorClassName: Ou[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    ju = Su((e) => {
                        let t = e.text,
                            u = e.variant,
                            n = e.className,
                            r = e.color,
                            i = e.m,
                            o = e.mt,
                            l = void 0 === o ? i : o,
                            c = e.mr,
                            _ = void 0 === c ? i : c,
                            m = e.mb,
                            d = void 0 === m ? i : m,
                            E = e.ml,
                            p = void 0 === E ? i : E,
                            g = e.style,
                            b = e.format,
                            h = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, Hu);
                        const A = (0, a.useMemo)(() => {
                                const e = Xu(r),
                                    t = e.colorClassName,
                                    u = e.colorStyle,
                                    n = void 0 === u ? {} : u;
                                return { computedStyle: Object.assign({}, g, n), colorClassName: t };
                            }, [g, r]),
                            f = A.computedStyle,
                            v = A.colorClassName;
                        return s().createElement(
                            Pu,
                            $u(
                                {
                                    className: D()(Ou.base, u && Ou[u], v, n),
                                    style: f,
                                    mt: !0 === l ? Vu[u || 'paragraph-P16'].mt : l,
                                    mr: !0 === _ ? Vu[u || 'paragraph-P16'].mr : _,
                                    mb: !0 === d ? Vu[u || 'paragraph-P16'].mb : d,
                                    ml: !0 === p ? Vu[u || 'paragraph-P16'].ml : p,
                                },
                                h,
                            ),
                            void 0 !== b ? s().createElement(Dt, $u({}, b, { text: t })) : t,
                        );
                    });
                let qu, Yu;
                !(function (e) {
                    (e.Small = 'x5'), (e.Medium = 'x10'), (e.Big = 'x15');
                })(qu || (qu = {})),
                    (function (e) {
                        (e.Defence = 'defence'), (e.Offence = 'offence');
                    })(Yu || (Yu = {})),
                    qu.Small,
                    qu.Medium,
                    qu.Big;
                const Ku = 'event_details_show',
                    Qu = 'event_details_close';
                let Zu;
                !(function (e) {
                    (e.SHOW_DETAILS = 'ev_secret_event_hangar_ui_icon_selection'),
                        (e.HIGHLIGHT = 'ev_secret_event_hangar_ui_highlight');
                })(Zu || (Zu = {}));
                const Ju = {
                    base: 'HBCoin_base_d8',
                    label__default: 'HBCoin_label__default_e9',
                    label__booster: 'HBCoin_label__booster_fe',
                    label__counterattackGlow: 'HBCoin_label__counterattackGlow_e3',
                    label__offenceGlow: 'HBCoin_label__offenceGlow_7c',
                    label__defenceGlow: 'HBCoin_label__defenceGlow_78',
                    label__animated: 'HBCoin_label__animated_82',
                    label__notEnough: 'HBCoin_label__notEnough_0e',
                    label__sizeP14: 'HBCoin_label__sizeP14_c0',
                    label__sizeH15: 'HBCoin_label__sizeH15_73',
                    label__sizeH18: 'HBCoin_label__sizeH18_f6',
                    label__sizeH20: 'HBCoin_label__sizeH20_14',
                    label__sizeH22: 'HBCoin_label__sizeH22_9c',
                    label__sizeH24: 'HBCoin_label__sizeH24_b0',
                    label__sizeH28: 'HBCoin_label__sizeH28_6d',
                    label__sizeH36: 'HBCoin_label__sizeH36_10',
                    label__sizeH42: 'HBCoin_label__sizeH42_4f',
                    label__sizeH56: 'HBCoin_label__sizeH56_88',
                    label__sizeH73: 'HBCoin_label__sizeH73_c1',
                    label__sizeH144: 'HBCoin_label__sizeH144_61',
                    label__progression: 'HBCoin_label__progression_08',
                    maxAmount: 'HBCoin_maxAmount_eb',
                    icon: 'HBCoin_icon_27',
                    icon__animated: 'HBCoin_icon__animated_17',
                    icon__size16x16: 'HBCoin_icon__size16x16_6b',
                    icon__size24x24: 'HBCoin_icon__size24x24_35',
                    icon__size32x32: 'HBCoin_icon__size32x32_70',
                    icon__size48x48: 'HBCoin_icon__size48x48_42',
                    icon__size80x80: 'HBCoin_icon__size80x80_ca',
                    icon__size134x134: 'HBCoin_icon__size134x134_4d',
                    stockBg: 'HBCoin_stockBg_25',
                    stockBg__sizeH18: 'HBCoin_stockBg__sizeH18_9b',
                    stockBg__sizeH22: 'HBCoin_stockBg__sizeH22_5a',
                };
                let en, tn;
                !(function (e) {
                    (e.P14 = 'P14'),
                        (e.H15 = 'H15'),
                        (e.H18 = 'H18'),
                        (e.H20 = 'H20'),
                        (e.H22 = 'H22'),
                        (e.H24 = 'H24'),
                        (e.H24R = 'H24R'),
                        (e.H28 = 'H28'),
                        (e.H36 = 'H36'),
                        (e.H42 = 'H42'),
                        (e.H56 = 'H56'),
                        (e.H73 = 'H73'),
                        (e.H144 = 'H144');
                })(en || (en = {})),
                    (function (e) {
                        (e.C16x16 = '16x16'),
                            (e.C24x24 = '24x24'),
                            (e.C32x32 = '32x32'),
                            (e.C48x48 = '48x48'),
                            (e.C80x80 = '80x80'),
                            (e.C134x134 = '134x134');
                    })(tn || (tn = {}));
                const un = (0, a.memo)(
                        ({
                            amount: e,
                            type: t,
                            iconSize: u,
                            labelSize: n,
                            isEnough: r = !0,
                            isHighlighted: i = !1,
                            isAmountVisible: o = !0,
                            isDiscount: l = !1,
                            isAnimated: c = !1,
                            isProgression: _ = !1,
                            classMix: m,
                            isBooster: d = !1,
                            maxAmount: E,
                        }) => {
                            const p = Q.Z5.getNumberFormat(e, Q.B3.GOLD),
                                g = (0, a.useMemo)(
                                    () => ({
                                        backgroundImage: `url('${R.images.historical_battles.gui.maps.icons.hbCoin.$dyn(`c_${u}`).$dyn(Yu.Offence)}')`,
                                    }),
                                    [u],
                                ),
                                b = D()(Ju.base, m),
                                h = D()(
                                    Ju.label,
                                    Ju[`label__${t}`],
                                    Ju[`label__size${n}`],
                                    i && Ju[`label__${t}Glow`],
                                    !r && Ju.label__notEnough,
                                    c && Ju.label__animated,
                                    _ && Ju.label__progression,
                                    d ? Ju.label__booster : Ju.label__default,
                                ),
                                A = D()(Ju.icon, Ju[`icon__size${u}`], c && Ju.icon__animated),
                                f = D()(Ju.stockBg, Ju[`stockBg__size${n}`]);
                            return s().createElement(
                                'div',
                                { className: b },
                                o && s().createElement(ju, { text: p, className: h }),
                                E &&
                                    s().createElement(ju, {
                                        text: R.strings.historical_battles_progression.header.coinValue.maxAmount(),
                                        className: D()(h, Ju.maxAmount),
                                        format: { binding: { value: Q.Z5.getNumberFormat(Number(E), Q.B3.GOLD) } },
                                    }),
                                s().createElement('div', { className: A, style: g }),
                                l && s().createElement('div', { className: f }),
                            );
                        },
                    ),
                    nn = {
                        base: 'Header_base_a5',
                        header: 'Header_header_6b',
                        header__fast: 'Header_header__fast_62',
                        header__inProgress: 'Header_header__inProgress_97',
                        header__completed: 'Header_header__completed_6a',
                        header__show: 'Header_header__show_44',
                        title: 'Header_title_37',
                        base__center: 'Header_base__center_f5',
                        subTitle: 'Header_subTitle_53',
                        content: 'Header_content_c3',
                        titleDecorator: 'Header_titleDecorator_0e',
                        titleDecorator__left: 'Header_titleDecorator__left_8a',
                        titleDecorator__right: 'Header_titleDecorator__right_b0',
                        hbCoinWrapper: 'Header_hbCoinWrapper_0a',
                        frontNameTitle: 'Header_frontNameTitle_2e',
                        coinContainer: 'Header_coinContainer_ae',
                        coinTooltipContainer: 'Header_coinTooltipContainer_26',
                    },
                    rn = R.strings.historical_battles_progression.progressionView,
                    an = { contentId: R.views.historical_battles.lobby.tooltips.HbCoinTooltip('resId') },
                    sn = (0, Y.observer)(({ isProgressionFinished: e, centerMode: t }) => {
                        const u = vu().model,
                            n = u.computes,
                            r = u.frontName.get(),
                            a = u.curProgressPoints.get(),
                            i = n.pointsForNewLevel().toString(),
                            o = u.progressAnimationState.get(),
                            l = o >= bu.ProgressFinished,
                            c = o === bu.ProgressAlreadyFinished && nn.header__fast,
                            _ = D()(nn.header, c, nn.header__inProgress, l && nn.header__hide);
                        return s().createElement(
                            'div',
                            { className: D()(nn.base, t && nn.base__center) },
                            s().createElement(
                                'div',
                                { className: _ },
                                s().createElement(ju, { text: rn.title.inProgress(), className: nn.title }),
                                s().createElement(
                                    'div',
                                    { className: nn.content },
                                    t &&
                                        s().createElement('div', {
                                            className: D()(nn.titleDecorator, nn.titleDecorator__left),
                                        }),
                                    s().createElement(
                                        'div',
                                        { className: nn.hbCoinWrapper },
                                        s().createElement(ju, {
                                            className: nn.frontNameTitle,
                                            text: R.strings.hb_lobby.front.name.capitalAll.$dyn(r),
                                        }),
                                        !e &&
                                            s().createElement(
                                                'div',
                                                { className: nn.coinTooltipContainer },
                                                s().createElement(
                                                    le,
                                                    an,
                                                    s().createElement(
                                                        'div',
                                                        { className: nn.coinContainer },
                                                        s().createElement(un, {
                                                            amount: a,
                                                            maxAmount: i,
                                                            iconSize: tn.C24x24,
                                                            labelSize: en.H22,
                                                            isAnimated: !0,
                                                            isProgression: !0,
                                                            type: r,
                                                        }),
                                                    ),
                                                ),
                                            ),
                                    ),
                                    s().createElement('div', {
                                        className: D()(nn.titleDecorator, nn.titleDecorator__right),
                                    }),
                                ),
                            ),
                        );
                    });
                function on(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const ln = [];
                function cn(e) {
                    const t = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, t.current)(...e), ln)
                    );
                }
                let _n;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(_n || (_n = {}));
                const mn = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    dn = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const i = (e, u) => {
                            const n = t(e),
                                r = n[0],
                                a = n[1];
                            return nu(r, a, u);
                        };
                        return (o = {}) => {
                            const l = o.settings,
                                _ = void 0 === l ? mn : l,
                                m = (0, a.useRef)(null),
                                d = (0, a.useRef)(null),
                                E = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        n = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        r = (e, ...u) => {
                                            for (
                                                var n,
                                                    r = (function (e, t) {
                                                        var u =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (u) return (u = u.call(e)).next.bind(u);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (u = (function (e, t) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return on(e, t);
                                                                    var u = Object.prototype.toString
                                                                        .call(e)
                                                                        .slice(8, -1);
                                                                    return (
                                                                        'Object' === u &&
                                                                            e.constructor &&
                                                                            (u = e.constructor.name),
                                                                        'Map' === u || 'Set' === u
                                                                            ? Array.from(e)
                                                                            : 'Arguments' === u ||
                                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                    u,
                                                                                )
                                                                              ? on(e, t)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (t && e && 'number' == typeof e.length)
                                                        ) {
                                                            u && (e = u);
                                                            var n = 0;
                                                            return function () {
                                                                return n >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[n++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(t(e).values());
                                                !(n = r()).done;

                                            )
                                                (0, n.value)(...u);
                                        };
                                    return (0, a.useMemo)(() => ({ on: u, off: n, trigger: r }), []);
                                })(),
                                p = (function (e, t, u) {
                                    const n = (0, a.useMemo)(
                                        () =>
                                            (function (e, t, u, n) {
                                                let r,
                                                    a = !1,
                                                    s = 0;
                                                function i() {
                                                    r && clearTimeout(r);
                                                }
                                                function o(...o) {
                                                    const l = this,
                                                        c = Date.now() - s;
                                                    function _() {
                                                        (s = Date.now()), u.apply(l, o);
                                                    }
                                                    a ||
                                                        (n && !r && _(),
                                                        i(),
                                                        void 0 === n && c > e
                                                            ? _()
                                                            : !0 !== t &&
                                                              (r = setTimeout(
                                                                  n
                                                                      ? function () {
                                                                            r = void 0;
                                                                        }
                                                                      : _,
                                                                  void 0 === n ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                                                    (o.cancel = function () {
                                                        i(), (a = !0);
                                                    }),
                                                    o
                                                );
                                            })(u, e),
                                        t,
                                    );
                                    return (0, a.useEffect)(() => n.cancel, [n]), n;
                                })(
                                    () => {
                                        c.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, pe.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = m.current;
                                        t && (u(t, e), E.trigger('change', e), s && p());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                b = g[0],
                                h = g[1],
                                A = (0, a.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const r = b.scrollPosition.get(),
                                            a = (null != (n = b.scrollPosition.goal) ? n : 0) - r;
                                        return i(e, t * u + a + r);
                                    },
                                    [b.scrollPosition],
                                ),
                                f = (0, a.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = m.current;
                                        n &&
                                            h.start({
                                                scrollPosition: i(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: _.animationConfig,
                                                from: { scrollPosition: i(n, b.scrollPosition.get()) },
                                            });
                                    },
                                    [h, _.animationConfig, b.scrollPosition],
                                ),
                                v = (0, a.useCallback)(
                                    (e) => {
                                        const t = m.current,
                                            u = d.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, _.step),
                                            a = A(t, e, n);
                                        f(a);
                                    },
                                    [f, A, _.step],
                                ),
                                C = (0, a.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && v(n(e)),
                                            m.current && E.trigger('mouseWheel', e, b.scrollPosition, t(m.current));
                                    },
                                    [b.scrollPosition, v, E],
                                ),
                                D = ((e, t = []) => {
                                    const u = (0, a.useRef)(),
                                        n = (0, a.useCallback)((...t) => {
                                            u.current && u.current(), (u.current = e(...t));
                                        }, t);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        Ee(() => {
                                            const e = m.current;
                                            e &&
                                                (f(i(e, b.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [f, b.scrollPosition.goal],
                                ),
                                F = cn(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = i(e, b.scrollPosition.goal);
                                    t !== b.scrollPosition.goal && f(t, { immediate: !0 }),
                                        E.trigger('recalculateContent');
                                });
                            return (
                                (0, a.useEffect)(
                                    () => (
                                        window.addEventListener('resize', D),
                                        () => {
                                            window.removeEventListener('resize', D);
                                        }
                                    ),
                                    [D],
                                ),
                                (0, a.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (d.current ? r(d.current) : void 0),
                                        getContainerSize: () => (m.current ? e(m.current) : void 0),
                                        getBounds: () =>
                                            m.current
                                                ? t(m.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: _.step.clampedArrowStepTimeout,
                                        clampPosition: i,
                                        handleMouseWheel: C,
                                        applyScroll: f,
                                        applyStepTo: v,
                                        contentRef: m,
                                        wrapperRef: d,
                                        scrollPosition: h,
                                        animationScroll: b,
                                        recalculateContent: F,
                                        events: { on: E.on, off: E.off },
                                    }),
                                    [b.scrollPosition, f, v, E.off, E.on, F, C, h, _.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    En = dn({
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
                        getDirection: (e) => (e.deltaY > 1 ? _n.Next : _n.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    });
                function pn(e, t, u = []) {
                    const n = (0, a.useRef)(0),
                        r = (0, a.useCallback)(() => window.clearInterval(n.current), u || []);
                    (0, a.useEffect)(() => r, [r]);
                    const s = (null != u ? u : []).concat([t]);
                    return [
                        (0, a.useCallback)((u) => {
                            (n.current = window.setInterval(() => e(u, !0), t)), e(u, !1);
                        }, s),
                        r,
                    ];
                }
                const gn = 'HorizontalBar_base__nonActive_82',
                    bn = 'disable',
                    hn = { pending: !1, offset: 0 },
                    An = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    fn = () => {},
                    vn = (e, t) => Math.max(20, e.offsetWidth * t),
                    Cn = (0, a.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = An, onDrag: n = fn }) => {
                        const r = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, a.useState)(hn),
                            d = m[0],
                            E = m[1],
                            p = (0, a.useCallback)(
                                (e) => {
                                    E(e),
                                        c.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [n],
                            ),
                            g = () => {
                                const t = l.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    _ = nu(0, 1, a / (r - n)),
                                    m = (t.offsetWidth - vn(t, s)) * _;
                                (u.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (i.current && o.current && l.current && c.current) {
                                            if (0 === e)
                                                return i.current.classList.add(bn), void o.current.classList.remove(bn);
                                            if (
                                                ((t = l.current),
                                                (u = c.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return i.current.classList.remove(bn), void o.current.classList.add(bn);
                                            var t, u;
                                            i.current.classList.remove(bn), o.current.classList.remove(bn);
                                        }
                                    })(m);
                            },
                            b = cn(() => {
                                (() => {
                                    const t = c.current,
                                        u = l.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && t && n && u)) return;
                                    const s = Math.min(1, n / a);
                                    (t.style.width = `${vn(u, s)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === s ? r.current.classList.add(gn) : r.current.classList.remove(gn));
                                })(),
                                    g();
                            });
                        (0, a.useEffect)(() => Ee(b)),
                            (0, a.useEffect)(
                                () =>
                                    Ee(() => {
                                        const t = () => {
                                            g();
                                        };
                                        let u = fn;
                                        const n = () => {
                                            u(), (u = Ee(b));
                                        };
                                        return (
                                            e.events.on('recalculateContent', b),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                u(),
                                                    e.events.off('recalculateContent', b),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!d.pending) return;
                                const t = (t) => {
                                        var u;
                                        const r = e.contentRef.current;
                                        if (!r) return;
                                        const a = l.current,
                                            s = c.current;
                                        if (!r || !a || !s) return;
                                        const i = t.screenX - d.offset - a.getBoundingClientRect().x,
                                            o = (i / a.offsetWidth) * (null != (u = e.getContainerSize()) ? u : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, o),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: i, contentOffset: o });
                                    },
                                    u = () => {
                                        window.removeEventListener('mousemove', t), p(hn);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u);
                                    }
                                );
                            }, [e, d.offset, d.pending, n, p]);
                        const h = pn((t) => e.applyStepTo(t), _, [e]),
                            A = h[0],
                            f = h[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const v = (e) => {
                            e.target.classList.contains(bn) || ee('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: D()('HorizontalBar_base_49', t.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: D()('HorizontalBar_leftButton_5f', t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(bn) || 0 !== e.button || (ee('play'), A(_n.Next));
                                },
                                onMouseUp: f,
                                ref: i,
                                onMouseEnter: v,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: D()('HorizontalBar_track_0d', t.track),
                                    onMouseDown: (t) => {
                                        const n = c.current;
                                        n &&
                                            0 === t.button &&
                                            (ee('play'),
                                            t.target === n
                                                ? p({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x })
                                                : ((t) => {
                                                      const n = c.current,
                                                          r = e.contentRef.current;
                                                      if (!n || !r) return;
                                                      const a = u(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + a * t);
                                                  })(t.screenX > n.getBoundingClientRect().x ? _n.Prev : _n.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: v,
                                },
                                s().createElement('div', { ref: c, className: D()('HorizontalBar_thumb_fd', t.thumb) }),
                                s().createElement('div', { className: D()('HorizontalBar_rail_32', t.rail) }),
                            ),
                            s().createElement('div', {
                                className: D()('HorizontalBar_rightButton_03', t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(bn) || 0 !== e.button || (ee('play'), A(_n.Prev));
                                },
                                onMouseUp: f,
                                ref: o,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    Dn = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Fn = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: i,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: D()(Dn.base, e.base) });
                            }, [n]),
                            m = (0, a.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: D()(Dn.defaultScroll, u), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: D()(Dn.defaultScrollArea, r) },
                                s().createElement(Bn, { className: o, api: m, classNames: i }, e),
                            ),
                            s().createElement(Cn, { getStepByRailClick: l, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    Bn = ({ api: e, className: t, classNames: u, children: n, style: r }) => (
                        (0, a.useEffect)(() => Ee(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: D()(Dn.base, t), style: r },
                            s().createElement(
                                'div',
                                {
                                    className: D()(Dn.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: D()(Dn.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (Bn.Bar = Cn),
                    (Bn.Default = Fn),
                    (Bn.SeniorityAwards = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, a.useEffect)(() => Ee(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: D()(Dn.base, t) },
                            s().createElement(
                                'div',
                                { className: D()(Dn.wrapper, null == u ? void 0 : u.wrapper), ref: e.wrapperRef },
                                s().createElement(
                                    'div',
                                    { className: D()(Dn.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    ));
                const yn = dn({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? _n.Next : _n.Prev),
                    }),
                    wn = 'VerticalBar_base__nonActive_42',
                    Sn = 'disable',
                    xn = () => {},
                    Nn = { pending: !1, offset: 0 },
                    kn = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Tn = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Ln = (e, t) => Math.max(20, e.offsetHeight * t),
                    Mn = (0, a.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = kn, onDrag: n = xn }) => {
                        const r = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, a.useState)(Nn),
                            d = m[0],
                            E = m[1],
                            p = (0, a.useCallback)(
                                (e) => {
                                    E(e),
                                        c.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [n],
                            ),
                            g = cn(() => {
                                const t = c.current,
                                    u = l.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && t && u)) return;
                                const s = Math.min(1, n / a);
                                return (
                                    (t.style.height = `${Ln(u, s)}px`),
                                    t.classList.add('VerticalBar_thumb_32'),
                                    r.current &&
                                        (1 === s ? r.current.classList.add(wn) : r.current.classList.remove(wn)),
                                    s
                                );
                            }),
                            b = cn(() => {
                                const t = l.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    _ = nu(0, 1, a / (r - n)),
                                    m = (t.offsetHeight - Ln(t, s)) * _;
                                (u.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (i.current && o.current && l.current && c.current) {
                                            if (0 === e)
                                                return i.current.classList.add(Sn), void o.current.classList.remove(Sn);
                                            if (
                                                ((t = l.current),
                                                (u = c.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(Sn), void o.current.classList.add(Sn);
                                            var t, u;
                                            i.current.classList.remove(Sn), o.current.classList.remove(Sn);
                                        }
                                    })(m);
                            }),
                            h = cn(() => {
                                Tn(e, () => {
                                    g(), b();
                                });
                            });
                        (0, a.useEffect)(() => Ee(h)),
                            (0, a.useEffect)(() => {
                                const t = () => {
                                    Tn(e, () => {
                                        b();
                                    });
                                };
                                let u = xn;
                                const n = () => {
                                    u(), (u = Ee(h));
                                };
                                return (
                                    e.events.on('recalculateContent', h),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        u(),
                                            e.events.off('recalculateContent', h),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!d.pending) return;
                                const t = (t) => {
                                        Tn(e, (u) => {
                                            const r = l.current,
                                                a = c.current,
                                                s = e.getContainerSize();
                                            if (!r || !a || !s) return;
                                            const i = t.screenY - d.offset - r.getBoundingClientRect().y,
                                                o = (i / r.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: o });
                                        });
                                    },
                                    u = () => {
                                        window.removeEventListener('mousemove', t), p(Nn);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u);
                                    }
                                );
                            }, [e, d.offset, d.pending, n, p]);
                        const A = pn((t) => e.applyStepTo(t), _, [e]),
                            f = A[0],
                            v = A[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const C = (e) => {
                            e.target.classList.contains(Sn) || ee('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: D()('VerticalBar_base_f3', t.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: D()('VerticalBar_topButton_d7', t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Sn) || 0 !== e.button || (ee('play'), f(_n.Next));
                                },
                                ref: i,
                                onMouseEnter: C,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: D()('VerticalBar_track_df', t.track),
                                    onMouseDown: (t) => {
                                        const n = c.current;
                                        var r;
                                        n &&
                                            0 === t.button &&
                                            (ee('play'),
                                            t.target === n
                                                ? p({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y })
                                                : ((r = t.screenY > n.getBoundingClientRect().y ? _n.Prev : _n.Next),
                                                  c.current &&
                                                      Tn(e, (t) => {
                                                          if (!t) return;
                                                          const n = u(e),
                                                              a = e.clampPosition(t, t.scrollTop + n * r);
                                                          e.applyScroll(a);
                                                      })));
                                    },
                                    ref: l,
                                    onMouseEnter: C,
                                },
                                s().createElement('div', { ref: c, className: t.thumb }),
                                s().createElement('div', { className: D()('VerticalBar_rail_43', t.rail) }),
                            ),
                            s().createElement('div', {
                                className: D()('VerticalBar_bottomButton_06', t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Sn) || 0 !== e.button || (ee('play'), f(_n.Prev));
                                },
                                onMouseUp: v,
                                ref: o,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    Pn = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Rn = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: i,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: D()(Pn.base, e.base) });
                            }, [n]),
                            m = (0, a.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: D()(Pn.defaultScroll, u), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: D()(Pn.area, r) },
                                s().createElement(In, { className: i, classNames: o, api: m }, e),
                            ),
                            s().createElement(Mn, { getStepByRailClick: l, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    In = ({ className: e, classNames: t, children: u, api: n }) => (
                        (0, a.useEffect)(() => Ee(n.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: D()(Pn.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: D()(Pn.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                u,
                            ),
                        )
                    );
                In.Default = Rn;
                const On = { Vertical: r, Horizontal: n };
                function Hn() {
                    return new Promise((e) => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                e();
                            });
                        });
                    });
                }
                'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector),
                    'undefined' != typeof document && document.documentElement.style,
                    'undefined' != typeof window &&
                        ('ontouchstart' in window || (window.DocumentTouch && (document, window.DocumentTouch))),
                    'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent);
                const $n = 'LevelLabel_levelBackground_8a',
                    Un = 'LevelLabel_level_50',
                    Wn = ({ level: e, isActive: t, isCompleted: u, isHovered: n, isLast: r }) => {
                        const a = D()(
                            'LevelLabel_base_c1',
                            u && 'LevelLabel_base__completed_33',
                            t && 'LevelLabel_base__active_28',
                        );
                        return s().createElement(
                            'div',
                            { className: a },
                            s().createElement('div', { className: $n }),
                            s().createElement('div', { className: Un }, e - 1),
                            n && s().createElement('div', { className: 'LevelLabel_hover_6e' }),
                            r &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', {
                                        className: D()($n, 'LevelLabel_levelBackground__last_a3'),
                                    }),
                                    s().createElement('div', { className: D()(Un, 'LevelLabel_level__last_c0') }, e),
                                ),
                        );
                    },
                    zn = R.images.historical_battles.gui.maps.icons.progression.rewards.s166x166,
                    Gn = ({ isCompleted: e, className: t, tooltipConfig: u }) => {
                        const n = u || {},
                            r = n.tooltipId,
                            a = n.tooltipContentId,
                            i = n.icon,
                            o = Je({ tooltipId: r, tooltipContentId: a }),
                            l = D()('MainReward_base_0c', e && 'MainReward_base__completed_a6', t),
                            c = { backgroundImage: `url(${zn.$dyn(i)})` };
                        return s().createElement(
                            Ge,
                            { tooltipArgs: o },
                            s().createElement('div', { className: l, style: c }),
                        );
                    },
                    Vn = (e, t, u) =>
                        D()(
                            e[u],
                            t === bu.ProgressAlreadyFinished
                                ? e[`${u}__fast`]
                                : t >= bu.ProgressFinished
                                  ? e[`${u}__completed`]
                                  : void 0,
                        ),
                    Xn = ({ arr: e, value: t }) => e.findIndex((e) => e > t),
                    jn = Object.assign({}, su, {
                        withStack: !0,
                        type: Nt.Growing,
                        delta: { duration: 400, delay: 300 },
                        line: { duration: 400, delay: 300 },
                    }),
                    qn = 'LevelCard_border_5d',
                    Yn = 'LevelCard_pointsBorder_4a',
                    Kn = (0, Y.observer)(
                        ({
                            pointsMin: e,
                            pointsForLast: t,
                            level: u,
                            isActive: n,
                            isLast: r,
                            isCompleted: i,
                            cardNumber: o,
                            rewards: l,
                        }) => {
                            const c = vu(),
                                _ = c.model,
                                m = c.controls,
                                d = _.hoveredCard.get() === o,
                                E = 10 === o,
                                p = (0, a.useRef)(null),
                                g = ((e, t) => Se(e, (e) => e.name === t))(l, Te.TmanToken),
                                b = _.computes.levelStatus(u),
                                h = b.wasProgressionVisited,
                                A = b.isRecentlyCompletedLevel;
                            (0, a.useEffect)(() => {}, [i, h, A]);
                            const f = (0, a.useCallback)(() => {
                                ee('pr_progress_tick');
                            }, []);
                            (0, a.useEffect)(() => {
                                const e = p.current;
                                return Ee(() => {
                                    if (e)
                                        return (
                                            e.addEventListener('transitionstart', f),
                                            () => {
                                                e.removeEventListener('transitionstart', f);
                                            }
                                        );
                                });
                            }, [p, f]);
                            const v = D()(
                                'LevelCard_blockBackground_c1',
                                i && 'LevelCard_blockBackground__completed_04',
                                n && 'LevelCard_blockBackground__active_4f',
                            );
                            return s().createElement(
                                'div',
                                {
                                    className: D()('LevelCard_base_7d', i && 'LevelCard_base__completed_e4'),
                                    onMouseEnter: () => {
                                        m.updateHoveredCard(o);
                                    },
                                    onMouseLeave: () => {
                                        m.updateHoveredCard(void 0);
                                    },
                                },
                                s().createElement('div', { className: v, ref: p }),
                                s().createElement(Wn, {
                                    level: u,
                                    isCompleted: i,
                                    isActive: n,
                                    isLast: r,
                                    isHovered: d,
                                }),
                                s().createElement('div', { className: qn }),
                                s().createElement('div', { className: Yn }, e),
                                r && s().createElement('div', { className: D()(qn, 'LevelCard_border__right_df') }),
                                r &&
                                    s().createElement(
                                        'div',
                                        { className: D()(Yn, 'LevelCard_pointsBorder__right_c9') },
                                        t,
                                    ),
                                E &&
                                    s().createElement(Gn, {
                                        className: 'LevelCard_mainRewardContainer_a5',
                                        isCompleted: i,
                                        tooltipConfig: g,
                                    }),
                            );
                        },
                    );
                function Qn() {
                    return (
                        (Qn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Qn.apply(this, arguments)
                    );
                }
                const Zn = (0, Y.observer)(
                    ({ levelRef: e }) => {
                        const t = vu().model,
                            u = [0, ...t.computes.getLevels()];
                        return s().createElement(
                            'div',
                            { className: 'LevelCards_base_31', ref: e },
                            t.computes
                                .levels()
                                .map((e, t) =>
                                    s().createElement(
                                        Kn,
                                        Qn(
                                            {
                                                key: e.level,
                                                cardNumber: e.level,
                                                pointsMin: u[t],
                                                pointsForLast: u.slice(-1),
                                            },
                                            e,
                                        ),
                                    ),
                                ),
                        );
                    },
                    { forwardRef: !0 },
                );
                function Jn() {
                    return (
                        (Jn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Jn.apply(this, arguments)
                    );
                }
                const er = ['historical_battles_main_discount'],
                    tr = (0, Y.observer)(({ isCompleted: e, isActive: t, rewards: u }) => {
                        const n = vu().model.root.get().hasVehicle,
                            r = N().mediaSize >= y.ExtraLarge,
                            a = ot(u, r ? Me.Big : Me.Small),
                            i = a.filteredRewards,
                            o = a.imageSize,
                            l = D()(
                                'Rewards_base_ff',
                                o === Me.Small && i.length > 3 && 'Rewards_base__wide_45',
                                e && !t && 'Rewards_base__completed_7d',
                            ),
                            c = i.findIndex((e) => it.includes(e.name));
                        if (-1 !== c) {
                            const e = i.splice(c, 1)[0],
                                t = Math.floor(i.length / 2);
                            i.splice(t, 0, e);
                        }
                        return s().createElement(
                            'div',
                            { className: l },
                            i.map((e, t) => {
                                const u = e.name,
                                    a = e.tooltipId,
                                    i = e.tooltipContentId,
                                    o = er.includes(u);
                                return s().createElement(
                                    tt,
                                    Jn(
                                        {
                                            className: D()('Rewards_reward_92', o && n && 'Rewards_opacity_14'),
                                            classNames: { rewardIcon: D()(r && 'Rewards_largeIcon_10') },
                                            key: t,
                                        },
                                        e,
                                        { tooltipArgs: Je({ tooltipId: a }, Number(i)) },
                                    ),
                                );
                            }),
                        );
                    }),
                    ur = {
                        base: 'RewardCard_base_c0',
                        background: 'RewardCard_background_8a',
                        background__completed: 'RewardCard_background__completed_55',
                        background__fast: 'RewardCard_background__fast_d8',
                        background__active: 'RewardCard_background__active_19',
                        border: 'RewardCard_border_6b',
                        border__right: 'RewardCard_border__right_f7',
                    },
                    nr = (0, Y.observer)(({ isCompleted: e, isActive: t, isLast: u, rewards: n, rewardId: r }) => {
                        const a = N(),
                            i = vu().controls,
                            o = r + 1,
                            l = D()(
                                ur.base,
                                a.mediaSize === y.Medium && ur.base__mediaMedium,
                                a.mediaSize === y.Large && ur.base__mediaLarge,
                                a.remScreenHeight >= 1200 && ur.base__mediaExtraExtraLarge,
                            ),
                            c = D()(ur.background, e && ur.background__completed, t && ur.background__active);
                        return s().createElement(
                            'div',
                            {
                                className: l,
                                onMouseEnter: () => {
                                    i.updateHoveredCard(o);
                                },
                                onMouseLeave: () => {
                                    i.updateHoveredCard(void 0);
                                },
                            },
                            s().createElement('div', { className: c }),
                            s().createElement(tr, { rewards: n, isActive: t, isCompleted: e }),
                            s().createElement('div', { className: ur.border }),
                            u && s().createElement('div', { className: D()(ur.border, ur.border__right) }),
                        );
                    }),
                    rr = (0, Y.observer)(() => {
                        const e = vu().model;
                        return s().createElement(
                            'div',
                            { className: 'RewardCards_base_e0' },
                            we(e.computes.levels(), ({ isCompleted: e, isActive: t, isLast: u, rewards: n }, r) =>
                                s().createElement(nr, {
                                    key: r,
                                    isCompleted: e,
                                    isActive: t,
                                    isLast: u,
                                    rewards: n,
                                    rewardId: r,
                                }),
                            ),
                        );
                    }),
                    ar = ['api', 'value', 'maxValue', 'theme'];
                function sr() {
                    return (
                        (sr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        sr.apply(this, arguments)
                    );
                }
                const ir = (e, t) => ('number' == typeof t ? t : e.offsetLeft),
                    or = (e) => {
                        let t = e.api,
                            u = e.value,
                            n = e.maxValue,
                            r = void 0 === n ? 100 : n,
                            i = e.theme,
                            o = void 0 === i ? au : i,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, ar);
                        const c = (0, a.useRef)(null),
                            _ = (0, a.useRef)(null),
                            m = (0, a.useRef)(null),
                            d = nu(0, u, r) / r,
                            E = (0, a.useCallback)(
                                (e) => {
                                    m.current &&
                                        c.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: t }, u, n) => {
                                            const r = u.offsetWidth - n.offsetWidth,
                                                a = e - ir(u, t),
                                                s = nu(0, r, a);
                                            n.style.left = `${s}px`;
                                        })(e, c.current, m.current),
                                        _.current &&
                                            c.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: t },
                                                u,
                                                { container: n, line: r },
                                            ) => {
                                                const a = Math.max(0, Math.floor(n.offsetWidth * u) - 8e3),
                                                    s = e - ir(n, t),
                                                    i = nu(0, a, s);
                                                r.style.left = `${i}px`;
                                            })(e, d, { line: _.current, container: c.current });
                                },
                                [d],
                            ),
                            p = (0, a.useMemo)(() => tu(o), [o]);
                        return (
                            (t.current.update = E),
                            s().createElement(
                                'div',
                                { className: 'OptimizedProgressBar_base_1f', ref: c },
                                s().createElement(
                                    'div',
                                    { className: 'OptimizedProgressBar_wrapper_ab' },
                                    s().createElement(
                                        'div',
                                        {
                                            style: p,
                                            className: D()(
                                                'OptimizedProgressBar_background_ce',
                                                l.progressBarBackgroundClassMix,
                                            ),
                                            ref: m,
                                        },
                                        s().createElement(kt, {
                                            size: l.size,
                                            classMix: l.progressBarBackgroundClassMix,
                                        }),
                                    ),
                                    s().createElement(
                                        iu,
                                        sr({}, l, {
                                            lineRef: _,
                                            value: u,
                                            theme: o,
                                            maxValue: r,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    },
                    lr = {
                        base: 'Container_base_2e',
                        progressWrapper: 'Container_progressWrapper_e8',
                        progressWrapper__completed: 'Container_progressWrapper__completed_b8',
                        progressWrapper__fast: 'Container_progressWrapper__fast_99',
                        bg: 'Container_bg_9c',
                    },
                    cr = 100,
                    _r = (0, Y.observer)(({ api: e, theme: t }) => {
                        const u = vu(),
                            n = u.model,
                            r = u.controls,
                            i = n.progressAnimationState.get(),
                            o = n.prevProgressPoints.get(),
                            l = n.curProgressPoints.get(),
                            c = n.computes.getLevels(),
                            _ = [0, ...c],
                            m = Xn({ arr: c, value: o }),
                            d = Xn({ arr: c, value: l }),
                            E = (e, t, u) => {
                                const n = cr / c.length,
                                    r = u[t + 1] - u[t],
                                    a = e - u[t];
                                return t * n + (n / cr) * (((a / r) * cr * 75.6) / cr + 12.2);
                            },
                            p = E(o, m, _),
                            g = E(l, d, _),
                            b = (0, a.useRef)({ update: () => {} });
                        e.current.moveProgressBars = (0, a.useCallback)((e) => {
                            b.current.update(e);
                        }, []);
                        const h = (0, a.useState)({ previousEarnedPoints: p || cr, progressionSize: p || cr }),
                            A = h[0],
                            f = A.previousEarnedPoints,
                            v = A.progressionSize,
                            C = h[1];
                        return (
                            (0, a.useEffect)(() => {
                                C((e) => ({
                                    previousEarnedPoints: 0 === e.progressionSize ? o : e.progressionSize,
                                    progressionSize: g || cr,
                                })),
                                    o !== g && ee('pr_progress_bar');
                            }, [o, g]),
                            (0, a.useEffect)(() => {
                                if (i === bu.ProgressChange)
                                    return It(() => {
                                        r.finishProgressionChange();
                                    }, 700);
                            }, [r, i]),
                            s().createElement(
                                'div',
                                { className: lr.base },
                                s().createElement('div', { className: lr.bg }),
                                s().createElement(
                                    'div',
                                    { className: Vn(lr, i, 'progressWrapper') },
                                    s().createElement(or, {
                                        animationSettings: jn,
                                        deltaFrom: f,
                                        value: v,
                                        maxValue: cr,
                                        api: b,
                                        theme: t,
                                    }),
                                ),
                            )
                        );
                    }),
                    mr = ({ api: e, children: t, updateProgressBarPosition: u }) => {
                        const n = (0, a.useState)(0),
                            r = n[0],
                            i = n[1],
                            o = (0, a.useState)(0),
                            l = o[0],
                            c = o[1],
                            _ = (0, a.useState)(!1),
                            m = _[0],
                            d = _[1];
                        (0, a.useEffect)(
                            () =>
                                Ee(() => {
                                    const t = (e) => {
                                        const t = e.value.scrollPosition;
                                        m || i(-t);
                                    };
                                    return (
                                        e.events.on('change', t),
                                        () => {
                                            e.events.off('change', t);
                                        }
                                    );
                                }),
                            [e, m],
                        );
                        const E = (0, a.useCallback)(
                                (e) => {
                                    d(!0), c(e.clientX), u();
                                },
                                [u],
                            ),
                            p = (0, a.useCallback)(() => {
                                d(!1), c(0), u();
                            }, [u]),
                            g = (0, a.useCallback)(
                                (t) => {
                                    if (m) {
                                        const n = nu(-(e.getBounds()[1] || 0), 0, r + t.clientX - l);
                                        e.applyScroll(-n, !0), c(t.clientX), i(n), u();
                                    }
                                },
                                [m, e, r, l, u],
                            );
                        return s().createElement(
                            'div',
                            {
                                className: D()('ScrollDrag_base_52', m && 'ScrollDrag_base__grabbing_3e'),
                                onMouseDown: E,
                                onMouseUp: p,
                                onMouseMove: g,
                            },
                            t,
                        );
                    };
                function dr(e, t, u, n, r, a, s) {
                    try {
                        var i = e[a](s),
                            o = i.value;
                    } catch (e) {
                        return void u(e);
                    }
                    i.done ? t(o) : Promise.resolve(o).then(n, r);
                }
                const Er = (0, Y.observer)(({ api: e }) => {
                        const t = vu().model,
                            u = N(),
                            n = (0, a.useState)(!1),
                            r = n[0],
                            i = n[1],
                            o = (0, a.useState)(!1),
                            l = o[0],
                            c = o[1],
                            _ = t.computes.levels().length,
                            m = t.progressAnimationState.get(),
                            d = t.curProgressPoints.get(),
                            E = t.computes,
                            p = (0, a.useRef)({ moveProgressBars: $ }),
                            g = (0, a.useRef)(null),
                            b = (0, a.useRef)(null),
                            h = e.animationScroll.scrollPosition,
                            A = e.getWrapperSize,
                            f = e.contentRef,
                            v = e.wrapperRef,
                            C = e.getContainerSize,
                            F = e.applyScroll;
                        (0, a.useLayoutEffect)(
                            () =>
                                Ee(() => {
                                    const e = v.current,
                                        t = b.current;
                                    if (!e || !t) return;
                                    const n = parseFloat(getComputedStyle(t.children[0]).width),
                                        r = parseFloat(getComputedStyle(t).paddingRight),
                                        a = parseFloat(getComputedStyle(e).paddingLeft);
                                    i(u.remScreenWidth >= _ * n + r + a), c(!0);
                                }),
                            [u.remScreenWidth, v, _],
                        );
                        const B = (0, a.useCallback)(
                                (e) => {
                                    if (g.current) {
                                        const t = A();
                                        p.current.moveProgressBars({
                                            viewPort: g.current,
                                            horizontalScrollPosition: t ? e - t : e,
                                        });
                                    }
                                },
                                [A],
                            ),
                            y = () => {
                                B(h.goal);
                            },
                            w = (0, a.useCallback)(() => {
                                const e = f.current,
                                    t = E.levels().length;
                                if (e && t > 0) {
                                    const u = C() || 0,
                                        n = A() || 0,
                                        r = u / t,
                                        a = E.currentLevel() * r,
                                        s = (n - e.offsetLeft - r) / 2;
                                    F(nu(0, u - n, a - s), { immediate: m === bu.ProgressAlreadyFinished });
                                }
                                0 === h.goal && B(h.goal);
                            }, [F, E, f, C, A, m, h.goal, B]);
                        return (
                            (0, a.useEffect)(() => {
                                w();
                            }, [d, w]),
                            (0, a.useEffect)(() => {
                                const e = (function () {
                                    var e,
                                        t =
                                            ((e = function* () {
                                                const e = C(),
                                                    t = h.goal;
                                                yield (0, Q.Eu)(), yield Hn();
                                                const u = C();
                                                B(u && e && u !== e ? (t * u) / e : t), w();
                                            }),
                                            function () {
                                                var t = this,
                                                    u = arguments;
                                                return new Promise(function (n, r) {
                                                    var a = e.apply(t, u);
                                                    function s(e) {
                                                        dr(a, n, r, s, i, 'next', e);
                                                    }
                                                    function i(e) {
                                                        dr(a, n, r, s, i, 'throw', e);
                                                    }
                                                    s(void 0);
                                                });
                                            });
                                    return function () {
                                        return t.apply(this, arguments);
                                    };
                                })();
                                return (
                                    engine.on('clientResized', e),
                                    () => {
                                        engine.off('clientResized', e);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => It(() => B(h.goal), 0), [d, h.goal, B]),
                            s().createElement(
                                'div',
                                {
                                    className: D()(
                                        'Content_base_bb',
                                        r && 'Content_base__centered_da',
                                        l && 'Content_base__layoutReady_17',
                                    ),
                                    ref: g,
                                    onWheel: () => B(h.goal),
                                },
                                s().createElement(
                                    On.Horizontal.Area.Default,
                                    {
                                        api: e,
                                        className: 'Content_horizontalContent_d4',
                                        classNames: { wrapper: 'Content_wrapper_fa' },
                                        barClassNames: { base: 'Content_horizontalBarVerticalScrollBar_c2' },
                                        onDrag: y,
                                    },
                                    s().createElement(
                                        mr,
                                        { api: e, updateProgressBarPosition: y },
                                        s().createElement(Zn, { levelRef: b }),
                                        s().createElement(
                                            'div',
                                            { className: 'Content_progress_8f' },
                                            s().createElement(
                                                'div',
                                                { className: 'Content_progressArea_9c' },
                                                s().createElement(_r, { api: p }),
                                            ),
                                        ),
                                        s().createElement(rr, null),
                                    ),
                                ),
                            )
                        );
                    }),
                    pr = { type: 'idle' },
                    gr = {
                        base: 'Progression_base_09',
                        base__completed: 'Progression_base__completed_b2',
                        base__fast: 'Progression_base__fast_f4',
                        shadow: 'Progression_shadow_7f',
                        shadow__left: 'Progression_shadow__left_d5',
                        shadow__right: 'Progression_shadow__right_98',
                        shadow__visible: 'Progression_shadow__visible_0a',
                        arrow: 'Progression_arrow_e6',
                        arrow__enabled: 'Progression_arrow__enabled_b9',
                        arrow__left: 'Progression_arrow__left_38',
                        arrow__right: 'Progression_arrow__right_1c',
                        arrow__disabled: 'Progression_arrow__disabled_da',
                        arrow__hidden: 'Progression_arrow__hidden_df',
                    },
                    br = (0, Y.observer)(() => {
                        const e = vu(),
                            t = e.model,
                            u = e.controls,
                            n = t.progressAnimationState.get(),
                            r = (0, a.useState)(0),
                            i = r[0],
                            o = r[1],
                            l = (0, a.useState)(!1),
                            _ = l[0],
                            m = l[1],
                            d = (0, a.useState)(!1),
                            E = d[0],
                            p = d[1],
                            g = (0, a.useState)([0, 0]),
                            b = g[0],
                            h = g[1],
                            A = t.computes.isProgressionCompleted(),
                            f = t.computes.wasProgressionCompletedBeforeStart(),
                            v = En(),
                            C = { left: b[0], right: b[1] };
                        !(function (e, t) {
                            const u = e.contentRef,
                                n = e.wrapperRef,
                                r = e.scrollPosition,
                                s = e.clampPosition,
                                i = e.animationScroll,
                                o = e.events,
                                l = (0, a.useState)(pr),
                                _ = l[0],
                                m = l[1];
                            (0, a.useEffect)(() => {
                                const e = u.current;
                                e && (e.style.cursor = 'dragging' === _.type ? 'move' : 'grab');
                            }, [u, _.type]),
                                (0, a.useEffect)(() => {
                                    if ('dragging' !== _.type) return;
                                    const e = c.O.client.events.mouse.move(([e, a]) => {
                                            const o = u.current,
                                                l = n.current;
                                            if (!o || !l) return;
                                            if ('inside' === a && e.clientX < 0) return;
                                            const c = 'inside' === a ? e.clientX : e.clientX - l.offsetLeft,
                                                m = _.positionFrom - c,
                                                d = _.previousScrollPosition + m;
                                            r.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: s(o, d),
                                                        from: { scrollPosition: i.scrollPosition.get() },
                                                    },
                                                    t,
                                                ),
                                            );
                                        }),
                                        a = c.O.client.events.mouse.up(function () {
                                            m({ type: 'scrollingToEnd' });
                                        });
                                    return () => {
                                        e(), a();
                                    };
                                }, [i.scrollPosition, s, u, _, r, n, t]),
                                (0, a.useEffect)(() => {
                                    if ('scrollingToEnd' !== _.type) return;
                                    const e = () => {
                                        m(pr);
                                    };
                                    return i.scrollPosition.idle && e(), o.on('rest', e), () => o.off('rest', e);
                                }, [i.scrollPosition, _.type, o]),
                                (0, a.useEffect)(() => {
                                    const e = u.current;
                                    if (!e) return;
                                    const t = (e) => {
                                        m({
                                            type: 'dragging',
                                            positionFrom: e.screenX,
                                            previousScrollPosition: i.scrollPosition.get(),
                                        });
                                    };
                                    return (
                                        e.addEventListener('mousedown', t), () => e.removeEventListener('mousedown', t)
                                    );
                                }, [i.scrollPosition, u]);
                        })(v),
                            (0, a.useEffect)(() => {
                                const e = (e) => {
                                    const t = v.contentRef.current.offsetLeft,
                                        u = e.value.scrollPosition,
                                        n = v.getWrapperSize() || 0,
                                        r = v.getContainerSize() || 0;
                                    m(u > t), p(u + n < r - t);
                                    const a = v.animationScroll.scrollPosition.goal;
                                    o(a);
                                    const s = v.getBounds(),
                                        i = s[0],
                                        l = s[1];
                                    (i === C.left && l === C.right) || h([i, l]);
                                };
                                return (
                                    v.events.on('change', e),
                                    () => {
                                        v.events.off('change', e);
                                    }
                                );
                            }, [v, C.left, C.right]),
                            (0, a.useEffect)(
                                () =>
                                    f
                                        ? u.completeProgression(!0)
                                        : n === bu.ChangeCompleted && A
                                          ? It(() => {
                                                u.completeProgression(!1);
                                            }, 1600)
                                          : n !== bu.Scrolling || f
                                            ? n === bu.HighlightCard
                                                ? It(() => {
                                                      u.finishHighlightCard();
                                                  }, 500)
                                                : void 0
                                            : It(() => {
                                                  u.finishScrolling();
                                              }, 1200),
                                [n, f, A, u],
                            );
                        const F = D()(
                                gr.arrow,
                                gr.arrow__left,
                                i === C.left ? gr.arrow__disabled : gr.arrow__enabled,
                                C.right <= 0 && gr.arrow__hidden,
                            ),
                            B = D()(
                                gr.arrow,
                                gr.arrow__right,
                                i === C.right ? gr.arrow__disabled : gr.arrow__enabled,
                                C.right <= 0 && gr.arrow__hidden,
                            );
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(
                                'div',
                                { className: Vn(gr, n, 'base') },
                                s().createElement('div', {
                                    className: D()(gr.shadow, gr.shadow__left, _ && gr.shadow__visible),
                                }),
                                s().createElement('div', {
                                    className: D()(gr.shadow, gr.shadow__right, E && gr.shadow__visible),
                                }),
                                s().createElement(Er, { api: v }),
                            ),
                            s().createElement('div', {
                                className: F,
                                onClick: () => {
                                    v.applyStepTo(_n.Next);
                                },
                            }),
                            s().createElement('div', {
                                className: B,
                                onClick: () => {
                                    v.applyStepTo(_n.Prev);
                                },
                            }),
                        );
                    });
                var hr = u(6295),
                    Ar = u.n(hr);
                let fr, vr;
                !(function (e) {
                    (e[(e.Start = 0)] = 'Start'), (e[(e.Between = 1)] = 'Between'), (e[(e.End = 2)] = 'End');
                })(fr || (fr = {})),
                    (function (e) {
                        (e.Orange = 'orange'), (e.Green = 'green');
                    })(vr || (vr = {}));
                const Cr = -1;
                let Dr, Fr;
                !(function (e) {
                    (e.Default = 'default'), (e.Selected = 'selected'), (e.NotSelected = 'notSelected');
                })(Dr || (Dr = {})),
                    (function (e) {
                        (e.Front = 'front'), (e.Back = 'back');
                    })(Fr || (Fr = {}));
                const Br = 450;
                let yr;
                !(function (e) {
                    (e.C_400X400 = 'c_400x400'),
                        (e.C_260X260 = 'c_260x260'),
                        (e.C_210X210 = 'c_210x210'),
                        (e.C_180X180 = 'c_180x180');
                })(yr || (yr = {}));
                const wr = 'Details_button__locked_e6',
                    Sr = 'Details_scrollDecoration_30',
                    xr = 'Details_hidden_31';
                function Nr(e, t, u, n, r, a, s) {
                    try {
                        var i = e[a](s),
                            o = i.value;
                    } catch (e) {
                        return void u(e);
                    }
                    i.done ? t(o) : Promise.resolve(o).then(n, r);
                }
                function kr(e) {
                    return function () {
                        var t = this,
                            u = arguments;
                        return new Promise(function (n, r) {
                            var a = e.apply(t, u);
                            function s(e) {
                                Nr(a, n, r, s, i, 'next', e);
                            }
                            function i(e) {
                                Nr(a, n, r, s, i, 'throw', e);
                            }
                            s(void 0);
                        });
                    };
                }
                const Tr = R.strings.historical_battles_progression_details,
                    Lr = R.images.historical_battles.gui.maps.icons.progression.details.quests,
                    Mr = {
                        [y.ExtraSmall]: 'small',
                        [y.Small]: 'small',
                        [y.Medium]: 'medium',
                        [y.Large]: 'medium',
                        [y.ExtraLarge]: 'extraLarge',
                    },
                    Pr = (0, Y.observer)(({ onClose: e }) => {
                        const t = vu(),
                            u = t.model,
                            n = t.controls,
                            r = u.computes.getMarksDetails(),
                            i = u.computes.getLockedPageIndex(),
                            o = (0, a.useState)(i - 1),
                            l = o[0],
                            c = o[1],
                            _ = (0, a.useState)(!0),
                            m = _[0],
                            d = _[1],
                            E = r[l - 1] ? r[l - 1].videoUrl : null,
                            p = r.length,
                            g = l <= 1,
                            b = l + 1 === i,
                            h = N().mediaSize,
                            A = u.frontName.get(),
                            f = Lr.$dyn(A).$dyn(Mr[h]).$dyn(`quest${l}`),
                            v = Tr.$dyn(A),
                            C = v.$dyn('title'),
                            D = v.$dyn('subTitle'),
                            F = v.$dyn('description'),
                            B = yn(),
                            y = (0, a.useRef)(null),
                            w = ((e) => {
                                const t = (0, a.useState)(fr.Start),
                                    u = t[0],
                                    n = t[1],
                                    r = e.animationScroll,
                                    s = e.getContainerSize,
                                    i = e.getWrapperSize,
                                    o = e.events;
                                return (
                                    (0, a.useEffect)(() => {
                                        const e = () => {
                                            const e = r.scrollPosition.get(),
                                                t = s() - i() - 10;
                                            n(e <= 10 ? fr.Start : e >= t ? fr.End : fr.Between);
                                        };
                                        return o.on('change', e), () => o.off('change', e);
                                    }, [r.scrollPosition, o, s, i]),
                                    u
                                );
                            })(B),
                            S = (0, a.useCallback)(() => {
                                var e, t, u;
                                y.current &&
                                    d(
                                        (null !=
                                        (t = null == (u = (e = y.current).parentElement) ? void 0 : u.offsetHeight)
                                            ? t
                                            : 0) < e.offsetHeight,
                                    );
                            }, []);
                        var x;
                        (0, a.useEffect)(() => {
                            !(function () {
                                var e = kr(function* () {
                                    yield (0, Q.Eu)(), yield Hn(), S();
                                });
                                return function () {
                                    return e.apply(this, arguments);
                                };
                            })()();
                        }, [S]),
                            (0, a.useLayoutEffect)(() => {
                                S();
                            }, [l, S]),
                            (x = () => {
                                const e = (function () {
                                    var e = kr(function* () {
                                        yield (0, Q.Eu)(), yield Hn(), S();
                                    });
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })();
                                return (
                                    engine.on('clientResized', e),
                                    () => {
                                        engine.off('clientResized', e);
                                    }
                                );
                            }),
                            (0, a.useEffect)(x, []);
                        const k = (0, a.useCallback)(
                                (function () {
                                    var e = kr(function* (e) {
                                        c(e),
                                            ee('play'),
                                            B.applyScroll(0, { immediate: !0 }),
                                            yield (0, Q.Eu)(),
                                            yield Hn(),
                                            S();
                                    });
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                                [B, S],
                            ),
                            T = (function () {
                                var e = kr(function* () {
                                    g || (yield k(l - 1));
                                });
                                return function () {
                                    return e.apply(this, arguments);
                                };
                            })(),
                            L = (function () {
                                var e = kr(function* () {
                                    b || (l < p && (yield k(l + 1)));
                                });
                                return function () {
                                    return e.apply(this, arguments);
                                };
                            })(),
                            M = (0, a.useCallback)(() => {
                                e && e();
                            }, [e]);
                        return (
                            (0, a.useEffect)(() => {
                                const e = () => {
                                    setTimeout(() => {
                                        B.applyScroll(0, { immediate: !0 }), c(i - 1);
                                    }, Br);
                                };
                                return (
                                    addEventListener(Qu, e),
                                    () => {
                                        removeEventListener(Qu, e);
                                    }
                                );
                            }, [B, i]),
                            s().createElement(
                                'div',
                                { className: 'Details_base_74' },
                                s().createElement('div', { className: 'Details_bg_3f' }),
                                s().createElement('div', { className: 'Details_glow_57' }),
                                s().createElement('div', { className: 'Details_shadow_f5' }),
                                s().createElement('div', { className: 'Details_lip_d0' }),
                                s().createElement(
                                    'div',
                                    { className: 'Details_buttonClose_71' },
                                    s().createElement(ae, { caption: '', type: 'close', onClick: M }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'Details_header_2a' },
                                    s().createElement(
                                        'div',
                                        { className: 'Details_page_0c' },
                                        s().createElement(ju, {
                                            text: `${l} `,
                                            className: 'Details_currentPageNumber_47',
                                        }),
                                        s().createElement(ju, {
                                            text: `/ ${p}`,
                                            className: 'Details_lastPageNumber_36',
                                        }),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: 'Details_switcher_0e' },
                                        s().createElement('div', {
                                            className: Ar()('Details_buttonBack_ec', g && wr),
                                            onClick: T,
                                        }),
                                        s().createElement(
                                            'div',
                                            { className: 'Details_headerText_cd' },
                                            s().createElement(
                                                'div',
                                                { className: 'Details_title_bf' },
                                                s().createElement(ju, { text: String(C.$dyn(`quest${l}`)) }),
                                            ),
                                            s().createElement(
                                                'div',
                                                { className: 'Details_subTitle_13' },
                                                s().createElement(ju, { text: String(D.$dyn(`quest${l}`)) }),
                                            ),
                                        ),
                                        s().createElement('div', {
                                            className: Ar()('Details_buttonForward_ed', b && wr),
                                            onClick: L,
                                        }),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'Details_verticalScroll_b9' },
                                    s().createElement('div', {
                                        className: Ar()(Sr, 'Details_topLip_09', w === fr.Start && xr),
                                    }),
                                    m &&
                                        s().createElement(On.Vertical.Bar, {
                                            classNames: { base: 'Details_verticalScrollBar_07' },
                                            api: B,
                                        }),
                                    s().createElement(
                                        'div',
                                        { className: 'Details_verticalScrollWrapper_ec' },
                                        s().createElement(
                                            On.Vertical.Area,
                                            {
                                                className: 'Details_verticalScrollArea_f9',
                                                classNames: { content: 'Details_verticalScrollContent_56' },
                                                api: B,
                                            },
                                            s().createElement(
                                                'div',
                                                { ref: y },
                                                s().createElement(
                                                    'div',
                                                    { className: 'Details_questContent_8e' },
                                                    E &&
                                                        s().createElement('div', {
                                                            className: 'Details_playVideoBtn_63',
                                                            onClick: () => {
                                                                ee('play'), E && n.showVideo(E);
                                                            },
                                                        }),
                                                    s().createElement('div', {
                                                        className: 'Details_questIcon_aa',
                                                        style: { backgroundImage: `url(${f})` },
                                                    }),
                                                ),
                                                s().createElement(Dt, {
                                                    classMix: 'Details_description_a4',
                                                    text: String(F.$dyn(`quest${l}`)),
                                                }),
                                            ),
                                        ),
                                        s().createElement('div', {
                                            className: Ar()(Sr, 'Details_bottomLip_e3', w === fr.End && xr),
                                        }),
                                    ),
                                ),
                            )
                        );
                    });
                function Rr(e) {
                    const t = e.chunk,
                        u = t.rows * t.columns;
                    return (n) => {
                        const r = n % u,
                            a = (r % t.columns) * e.width,
                            s = Math.trunc(r / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(n / u)), x: a, y: s };
                    };
                }
                const Ir = [
                    'width',
                    'height',
                    'getImageSource',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'lastFrameIndex',
                    'loop',
                    'state',
                    'onAnimationDone',
                    'onAnimationComplete',
                    'poster',
                ];
                function Or() {
                    return (
                        (Or =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Or.apply(this, arguments)
                    );
                }
                const Hr = (0, a.memo)(function (e) {
                        let t = e.width,
                            u = e.height,
                            n = e.getImageSource,
                            r = e.frameCount,
                            i = e.onAnimate,
                            o = e.frameTime,
                            l = void 0 === o ? 33 : o,
                            c = e.initialFrameIndex,
                            _ = void 0 === c ? 0 : c,
                            m = e.lastFrameIndex,
                            d = void 0 === m ? r - 1 : m,
                            E = e.loop,
                            p = void 0 === E || E,
                            g = e.state,
                            b = void 0 === g ? 'play' : g,
                            h = e.onAnimationDone,
                            A = e.onAnimationComplete,
                            f = e.poster,
                            v = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, Ir);
                        const C = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = C.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    u = (u) => {
                                        t.clearRect(0, 0, e.width, e.height), t.drawImage(u.img, -u.x, -u.y);
                                    };
                                switch (b) {
                                    case 'play':
                                        return (function () {
                                            const e = Wr(_, d, n),
                                                t = $r(_, d),
                                                r = window.setInterval(() => {
                                                    const n = t(),
                                                        a = e.get(n);
                                                    a
                                                        ? (null == i || i(n, a),
                                                          u(a),
                                                          n === d &&
                                                              (null == A || A(),
                                                              p || (null == h || h(), window.clearInterval(r))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(r);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === _ && f ? { path: f, x: 0, y: 0 } : n(_),
                                                t = new Image();
                                            t.src = e.path;
                                            const r = () => u(Ur(e, t));
                                            return (
                                                t.addEventListener('load', r), () => t.removeEventListener('load', r)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, n, _, d, p, i, A, h, f, b]),
                            s().createElement('canvas', Or({}, v, { width: t, height: u, ref: C }))
                        );
                    }),
                    $r = (e, t) => {
                        let u = e;
                        return () => {
                            const n = u;
                            return (u += 1), u > t && (u = e), n;
                        };
                    },
                    Ur = (e, t) => Object.assign({}, e, { img: t }),
                    Wr = (e, t, u) => {
                        const n = new Map(),
                            r = {};
                        for (let a = e; a <= t; a++) {
                            const e = u(a),
                                t = r[e.path];
                            if (t) n.set(a, Ur(e, t));
                            else {
                                const t = new Image();
                                (r[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${a})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(a, Ur(e, t));
                            }
                        }
                        return n;
                    },
                    zr = {
                        width: 200,
                        height: 200,
                        frameCount: 15,
                        chunk: { count: 1, columns: 15, rows: 1 },
                        getChunkPath: () => 'R.images.historical_battles.gui.maps.icons.progression.flag.sequence',
                    },
                    Gr = ({ isActive: e, onClick: t, onMouseEnter: u, style: n, classMix: r }) => {
                        const i = (0, a.useState)('stop'),
                            o = i[0],
                            l = i[1],
                            c = D()('Flag_base_90', e && 'Flag_base__active_64', r),
                            _ = (0, a.useCallback)(
                                () => (
                                    l('play'),
                                    setTimeout(() => {
                                        l('stop');
                                    }, 50 * zr.frameCount)
                                ),
                                [],
                            );
                        return (
                            (0, a.useEffect)(() => {
                                const e = () => _(),
                                    t = setTimeout(e, 3e3),
                                    u = setInterval(e, 50 * zr.frameCount + 3e3);
                                return () => {
                                    clearTimeout(t), clearInterval(u);
                                };
                            }, [_]),
                            s().createElement(
                                'div',
                                { className: c, onClick: t, style: n, onMouseEnter: u },
                                s().createElement(Hr, {
                                    width: zr.width,
                                    height: zr.height,
                                    frameCount: zr.frameCount,
                                    frameTime: 50,
                                    getImageSource: Rr(zr),
                                    className: 'Flag_flagBackground_b5',
                                    loop: !1,
                                    state: o,
                                }),
                                s().createElement('div', { className: 'Flag_hover_59' }),
                                e && s().createElement('div', { className: 'Flag_active_1b' }),
                            )
                        );
                    },
                    Vr = {
                        0: { top: '45%', left: '53%' },
                        1: { top: '45%', left: '53%' },
                        2: { top: '31%', left: '50%' },
                        3: { top: '31%', left: '50%' },
                        4: { top: '35%', left: '47%' },
                        5: { top: '35%', left: '47%' },
                        6: { top: '44%', left: '41%' },
                        7: { top: '44%', left: '41%' },
                        8: { top: '44%', left: '41%' },
                        9: { top: '45%', left: '33%' },
                        10: { top: '43%', left: '30%' },
                        11: { top: '43%', left: '30%' },
                    },
                    Xr = {
                        0: { top: '43%', left: '46%' },
                        1: { top: '43%', left: '46%' },
                        2: { top: '32%', left: '59%' },
                        3: { top: '32%', left: '59%' },
                        4: { top: '27%', left: '58%' },
                        5: { top: '27%', left: '58%' },
                        6: { top: '27%', left: '58%' },
                        7: { top: '27%', left: '58%' },
                        8: { top: '37%', left: '75%' },
                        9: { top: '37%', left: '75%' },
                        10: { top: '41%', left: '61%' },
                        11: { top: '41%', left: '61%' },
                    },
                    jr = {
                        base: 'App_base_06',
                        windowIn: 'App_windowIn_91',
                        bgContainer: 'App_bgContainer_ae',
                        bg: 'App_bg_ad',
                        flagContainer: 'App_flagContainer_42',
                        vignette: 'App_vignette_36',
                        topShadow: 'App_topShadow_bc',
                        base__defence: 'App_base__defence_2f',
                        bottomShadow: 'App_bottomShadow_04',
                        content: 'App_content_4f',
                        header: 'App_header_fa',
                        header__left: 'App_header__left_b5',
                        leftShadow: 'App_leftShadow_ad',
                        leftShadow__visible: 'App_leftShadow__visible_7f',
                        shadowBg: 'App_shadowBg_f5',
                        shadowBg__visible: 'App_shadowBg__visible_f0',
                        mainContent: 'App_mainContent_3f',
                        battleQuests: 'App_battleQuests_c6',
                        details: 'App_details_a9',
                    },
                    qr = {
                        [y.ExtraSmall]: '30rem',
                        [y.Small]: '30rem',
                        [y.Medium]: '40rem',
                        [y.Large]: '56rem',
                        [y.ExtraLarge]: '76rem',
                    },
                    Yr = {
                        [y.ExtraSmall]: '72rem',
                        [y.Small]: '86rem',
                        [y.Medium]: '96rem',
                        [y.Large]: '96rem',
                        [y.ExtraLarge]: '165rem',
                    },
                    Kr = (0, Y.observer)(() => {
                        const e = vu().model,
                            t = e.computes,
                            u = e.root.get().frontName,
                            n = (0, a.useState)(!1),
                            r = n[0],
                            i = n[1],
                            o = (0, a.useState)(!1),
                            l = o[0],
                            c = o[1],
                            _ = (0, a.useState)(!1),
                            m = _[0],
                            d = _[1],
                            E = N().mediaSize,
                            p = t.currentLevel(),
                            g = t.isProgressionCompleted(),
                            b = D()(jr.base, g && jr.base__finished, jr[`base__${u}`]),
                            h = (0, a.useMemo)(
                                () =>
                                    ((e, t, u) => {
                                        const n = u ? 'finished' : 'c_' + (t + 1);
                                        return `url('${R.images.historical_battles.gui.maps.icons.backgrounds.progression.$dyn(e).$dyn(`${n}`)}')`;
                                    })(u, p, g),
                                [u, p, g],
                            ),
                            A = u === Yu.Offence ? Vr[p] : Xr[p],
                            f = A.top,
                            v = A.left,
                            C = (0, a.useMemo)(
                                () =>
                                    ((e, t, u, n) => {
                                        const r = { duration: n ? Br : 0 };
                                        return e
                                            ? {
                                                  from: { top: t, left: '50%', transform: 'translateX(-50%)' },
                                                  to: { top: u, left: '0%', transform: 'translateX(0%)' },
                                                  config: r,
                                              }
                                            : {
                                                  from: { top: u, left: '0%', transform: 'translateX(0%)' },
                                                  to: { top: t, left: '50%', transform: 'translateX(-50%)' },
                                                  config: r,
                                              };
                                    })(l, qr[E], Yr[E], r),
                                [l, E, r],
                            ),
                            F = (0, pe.useSpring)(C),
                            B = (0, pe.useSpring)(
                                ((e, t) => {
                                    const u = { duration: t ? Br : 0 },
                                        n = N().mediaSize,
                                        r = n >= y.Medium ? '430rem' : '230rem',
                                        a = n >= y.Medium ? '-430rem' : '-230rem';
                                    return e
                                        ? { from: { left: '0', right: '0' }, to: { left: a, right: r }, config: u }
                                        : { from: { left: a, right: r }, to: { left: '0', right: '0' }, config: u };
                                })(l, r),
                            ),
                            w = (0, pe.useSpring)(
                                ((e, t) => {
                                    const u = { duration: t ? Br : 0 };
                                    return e
                                        ? { from: { bottom: '0' }, to: { bottom: '-400rem' }, config: u }
                                        : { from: { bottom: '-400rem' }, to: { bottom: '0' }, config: u };
                                })(l, r),
                            ),
                            S = (0, pe.useSpring)(
                                ((e, t) => {
                                    const u = { duration: t ? Br : 0 };
                                    return e
                                        ? {
                                              from: { transform: 'translateX(100%)' },
                                              to: { transform: 'translateX(0%)' },
                                              config: u,
                                          }
                                        : {
                                              from: { transform: 'translateX(0%)' },
                                              to: { transform: 'translateX(100%)' },
                                              config: u,
                                          };
                                })(l, r),
                            ),
                            x = (0, a.useCallback)(() => {
                                c((e) => !e), i(!0), dispatchEvent(new Event(Qu));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = () => {
                                    c(!1);
                                };
                                return (
                                    addEventListener(Qu, e),
                                    () => {
                                        removeEventListener(Qu, e);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                if (!l && m) {
                                    const e = setTimeout(() => {
                                        d(!1);
                                    }, Br);
                                    return () => clearTimeout(e);
                                }
                                l && !m && d(!0);
                            }, [l, m]),
                            s().createElement(
                                'div',
                                { className: b },
                                s().createElement(
                                    pe.animated.div,
                                    { className: jr.bgContainer, style: B },
                                    s().createElement('div', { className: jr.bg, style: { backgroundImage: h } }),
                                    s().createElement(Gr, {
                                        onMouseEnter: () => {
                                            ee(Zu.HIGHLIGHT);
                                        },
                                        classMix: jr.flagContainer,
                                        isActive: l,
                                        onClick: () => {
                                            ee(Zu.SHOW_DETAILS),
                                                c((e) => !e),
                                                i(!0),
                                                dispatchEvent(new Event(l ? Qu : Ku));
                                        },
                                        style: { top: f, left: v },
                                    }),
                                    s().createElement('div', { className: jr.vignette }),
                                    s().createElement('div', { className: jr.topShadow }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: jr.content },
                                    s().createElement('div', {
                                        className: D()(jr.leftShadow, l && jr.leftShadow__visible),
                                    }),
                                    s().createElement('div', {
                                        className: D()(jr.shadowBg, !l && jr.shadowBg__visible),
                                    }),
                                    s().createElement(
                                        pe.animated.div,
                                        { className: D()(jr.header, l && jr.header__left), style: F },
                                        s().createElement(sn, { isProgressionFinished: g, centerMode: !l }),
                                    ),
                                    s().createElement(
                                        pe.animated.div,
                                        { className: jr.details, style: S },
                                        m && s().createElement(Pr, { onClose: x }),
                                    ),
                                    s().createElement(
                                        pe.animated.div,
                                        { className: jr.mainContent, style: w },
                                        s().createElement('div', { className: jr.bottomShadow }),
                                        s().createElement(br, null),
                                    ),
                                ),
                            )
                        );
                    }),
                    Qr = () =>
                        s().createElement(
                            fu,
                            { options: { context: 'model.progressionModel' } },
                            s().createElement(Kr, null),
                        ),
                    Zr = V()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), divisions: e.array('divisions') },
                                u = (0, ke.computedFn)(() => t.root.get().frontName),
                                n = (0, ke.computedFn)(() => we(t.divisions.get(), (e) => e), { equals: U }),
                                r = (0, ke.computedFn)(
                                    () =>
                                        we(t.divisions.get(), (e) =>
                                            Object.assign({}, e, { levels: e.levels.map((e) => a(e.value)) }),
                                        ),
                                    { equals: U },
                                ),
                                a = (0, ke.computedFn)(
                                    (e) =>
                                        Object.assign({}, e, {
                                            vehicles: e.vehicles.map((e) => e.value),
                                            abilities: e.abilities.map((e) => e.value),
                                        }),
                                    { equals: U },
                                ),
                                s = (0, ke.computedFn)((e) => Se(r(), (t) => t.divisionID === e), { equals: U });
                            return Object.assign({}, t, {
                                computes: { getFrontName: u, getDivisionsCards: n, getDivisionDetailsById: s },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onBuyLevel: e.createCallback((e) => ({ divisionId: e }), 'onBuyLevel'),
                        }),
                    ),
                    Jr = Zr[0],
                    ea = Zr[1],
                    ta = (e, t) => {
                        let u = 'c_1366x768';
                        switch (e) {
                            case y.Medium:
                            case y.Large:
                                u = 'c_1920x1080';
                                break;
                            case y.ExtraLarge:
                                u = 'c_2560x1440';
                        }
                        return R.images.historical_battles.gui.maps.icons.backgrounds.mainBg.$dyn(u).$dyn(t);
                    },
                    ua = 'Header_subtitle_line_e8',
                    na = R.strings.hb_lobby.hbMetaView.division,
                    ra = s().memo(({ frontName: e, isCentered: t = !0 }) =>
                        s().createElement(
                            'div',
                            { className: 'Header_base_2e' },
                            s().createElement(ju, {
                                text: na.title(),
                                className: D()('Header_title_c7', t && 'Header_title__centered_c5'),
                            }),
                            s().createElement(
                                'div',
                                { className: 'Header_subtitle_29' },
                                t &&
                                    s().createElement('div', { className: D()(ua, 'Header_subtitle_line__rotate_ba') }),
                                s().createElement(ju, {
                                    text: R.strings.hb_lobby.front.name.capitalAll.$dyn(e),
                                    className: 'Header_subtitle_text_27',
                                }),
                                s().createElement('div', { className: ua }),
                            ),
                        ),
                    ),
                    aa = {
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
                    },
                    sa = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    ia = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    oa = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    la = (0, a.memo)(({ text: e, binding: t, classMix: u }) => {
                        const n = (0, a.useCallback)((e) => ({ color: `#${e}` }), []),
                            r = (0, a.useMemo)(() => t || {}, [t]);
                        let i = sa.exec(e),
                            o = e,
                            l = 0;
                        for (; i; ) {
                            const u = i[0],
                                a = ia.exec(u),
                                c = oa.exec(u),
                                _ = i[1];
                            if (a && c) {
                                const e = a[0],
                                    i = e + l++ + e;
                                (o = o.replace(u, `%(${i})`)),
                                    (r[i] = aa[e]
                                        ? s().createElement(
                                              'span',
                                              { className: aa[e] },
                                              s().createElement(Dt, { text: _, binding: t }),
                                          )
                                        : s().createElement(
                                              'span',
                                              { style: n(e) },
                                              s().createElement(Dt, { text: _, binding: t }),
                                          ));
                            }
                            i = sa.exec(e);
                        }
                        return s().createElement(Dt, { text: o, classMix: u, binding: r });
                    }),
                    ca = R.strings.hb_lobby.hbMetaView.division,
                    _a = { contentId: R.views.historical_battles.lobby.tooltips.HbCoinTooltip('resId') },
                    ma = s().memo(() =>
                        s().createElement(
                            'div',
                            { className: 'Footer_base_7c' },
                            s().createElement(la, {
                                text: ca.footer(),
                                binding: {
                                    icon: s().createElement(
                                        le,
                                        _a,
                                        s().createElement('div', { className: 'Footer_icon_8f' }),
                                    ),
                                },
                                classMix: 'Footer_footer_0c',
                            }),
                        ),
                    ),
                    da = () => {
                        const e = (0, a.useState)(c.O.view.getScale()),
                            t = e[0],
                            u = e[1];
                        return (
                            (0, a.useEffect)(() => {
                                const e = () => {
                                    u(c.O.view.getScale());
                                };
                                return (
                                    window.addEventListener('resize', e),
                                    () => {
                                        window.removeEventListener('resize', e);
                                    }
                                );
                            }, []),
                            t
                        );
                    },
                    Ea = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    pa = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    ga = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    ba = (e) =>
                        ga
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let u = pa.length - 1; u >= 0; u--)
                                      for (; e >= pa[u]; ) (t += Ea[u]), (e -= pa[u]);
                                  return t;
                              })(e),
                    ha = {
                        base: 'Level_base_12',
                        base__tiny: 'Level_base__tiny_b4',
                        base__extraSmall: 'Level_base__extraSmall_05',
                        base__small: 'Level_base__small_98',
                        base__medium: 'Level_base__medium_f0',
                        base__large: 'Level_base__large_c3',
                        base__extraLarge: 'Level_base__extraLarge_dc',
                        bg: 'Level_bg_f5',
                        border: 'Level_border_11',
                        base__yellow: 'Level_base__yellow_63',
                        innerGlow: 'Level_innerGlow_47',
                        lock: 'Level_lock_0b',
                        text: 'Level_text_ae',
                    };
                let Aa;
                !(function (e) {
                    (e.Tiny = 'tiny'),
                        (e.ExtraSmall = 'extraSmall'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.ExtraLarge = 'extraLarge');
                })(Aa || (Aa = {}));
                const fa = (0, a.memo)(({ level: e, size: t, isYellow: u, isLocked: n = !1, mixClass: r }) => {
                        const a = D()(ha.base, u && ha.base__yellow, ha[`base__${t}`], r);
                        return s().createElement(
                            'div',
                            { className: a },
                            s().createElement('div', { className: ha.bg }),
                            s().createElement('div', { className: ha.border }),
                            s().createElement('div', { className: ha.innerGlow }),
                            n && s().createElement('div', { className: ha.lock }),
                            s().createElement(ju, { text: ba(e), className: ha.text }),
                        );
                    }),
                    va = 'Button_background_lines_52',
                    Ca = s().memo(
                        ({ label: e, showArrow: t, animatedArrow: u, mixClass: n, onClick: r, onMouseEnter: i }) => {
                            const o = (0, a.useState)(!1),
                                l = o[0],
                                c = o[1],
                                _ = () => {
                                    c(!1);
                                },
                                m = D()('Button_base_a3', l && 'Button_base__pressed_83', n);
                            return s().createElement(
                                'div',
                                {
                                    className: m,
                                    onMouseDown: () => {
                                        c(!0);
                                    },
                                    onMouseUp: _,
                                    onMouseEnter: i,
                                    onMouseLeave: _,
                                    onClick: r,
                                },
                                s().createElement('div', { className: D()(va, 'Button_background_lines__left_70') }),
                                s().createElement('div', { className: D()(va, 'Button_background_lines__right_b0') }),
                                t &&
                                    s().createElement('div', {
                                        className: D()('Button_arrow_98', u && 'Button_arrow_top__animated_8f'),
                                    }),
                                s().createElement('div', { className: 'Button_bg_53' }),
                                s().createElement('div', { className: 'Button_border_ab' }),
                                s().createElement('div', { className: 'Button_light_f9' }),
                                s().createElement(ju, { text: e, className: 'Button_label_27' }),
                            );
                        },
                    ),
                    Da = {
                        base: 'Card_base_33',
                        base__notSelected: 'Card_base__notSelected_8f',
                        base__pressed: 'Card_base__pressed_9d',
                        base__selected: 'Card_base__selected_b6',
                        base__defence: 'Card_base__defence_58',
                        base__offence: 'Card_base__offence_2e',
                        bg: 'Card_bg_d6',
                        selected: 'Card_selected_c2',
                        selected_symbol: 'Card_selected_symbol_9c',
                        selected_header: 'Card_selected_header_81',
                        selected_glow: 'Card_selected_glow_c1',
                        preview_container: 'Card_preview_container_49',
                        preview_anim: 'Card_preview_anim_ab',
                        preview_img: 'Card_preview_img_e1',
                        smoke: 'Card_smoke_96',
                        emblem: 'Card_emblem_e1',
                        glow_left: 'Card_glow_left_e1',
                        glow_right: 'Card_glow_right_3b',
                        separator_left: 'Card_separator_left_cf',
                        separator_right: 'Card_separator_right_f4',
                        level_container: 'Card_level_container_8e',
                        level: 'Card_level_f9',
                        level__max: 'Card_level__max_d0',
                        level_next: 'Card_level_next_89',
                        level_small: 'Card_level_small_81',
                        arrow: 'Card_arrow_d1',
                        divisionName: 'Card_divisionName_c0',
                        description: 'Card_description_e9',
                        button: 'Card_button_b7',
                        windowIn: 'Card_windowIn_66',
                    },
                    Fa = R.images.historical_battles.gui.maps.icons.hangar.hbMetaView.division,
                    Ba = R.strings.hb_lobby.hbMetaView.division;
                function ya(e) {
                    return Fa.smoke.c_644x644.$dyn(e);
                }
                function wa(e, t, u) {
                    return Fa.preview
                        .$dyn('division_' + e)
                        .$dyn('level_' + t)
                        .$dyn('c_644x644')
                        .$dyn(u);
                }
                const Sa = s().memo(({ divisionID: e, level: t, frontName: u, state: n = Dr.Default, onSelect: r }) => {
                        const i = (0, a.useState)(!1),
                            o = i[0],
                            l = i[1],
                            c = R.strings.hb_lobby
                                .$dyn('division_' + e)
                                .$dyn('name')
                                .toUpperCase(),
                            _ = Ba.$dyn('division_' + e).$dyn('descr'),
                            m = {
                                backgroundImage: `url(${R.images.historical_battles.gui.maps.icons.division.c_294x294.$num(e)})`,
                            },
                            d = { backgroundImage: `url(${Fa.$dyn('glow_' + u)})` },
                            E = { backgroundImage: `url(${Fa.selected.$dyn('header_' + u)})` },
                            p = { backgroundImage: `url(${Fa.selected.$dyn('glow_' + u)})` },
                            g = t >= 3,
                            b = D()(Da.level, g && Da.level__max),
                            h = { backgroundImage: `url(${wa(e, t, Fr.Front)})` },
                            A = { backgroundImage: `url(${wa(e, t, Fr.Back)})` },
                            f = { backgroundImage: `url(${ya(u)})` },
                            v = D()(Da.base, Da[`base__${n}`], Da[`base__${u}`], o && Da.base__pressed);
                        return s().createElement(
                            'div',
                            {
                                className: v,
                                onClick: () => {
                                    r && n !== Dr.Selected && r(e);
                                },
                                onMouseDown: () => {
                                    l(!0);
                                },
                                onMouseUp: () => {
                                    l(!1);
                                },
                                onMouseLeave: () => {
                                    l(!1);
                                },
                                onMouseEnter: () => {
                                    n !== Dr.Selected && ee(Zu.HIGHLIGHT);
                                },
                            },
                            s().createElement('div', { className: Da.bg }),
                            s().createElement(
                                'div',
                                { className: Da.preview_container },
                                s().createElement(
                                    'div',
                                    { className: Da.preview_anim },
                                    s().createElement('div', { className: Da.preview_img, style: A }),
                                    s().createElement('div', { className: D()(Da.preview_img, Da.smoke), style: f }),
                                    s().createElement('div', { className: Da.preview_img, style: h }),
                                ),
                            ),
                            s().createElement('div', { className: Da.emblem, style: m }),
                            s().createElement('div', { className: Da.glow_left, style: d }),
                            s().createElement('div', { className: Da.glow_right }),
                            s().createElement('div', { className: Da.separator_left }),
                            s().createElement('div', { className: Da.separator_right }),
                            s().createElement(
                                'div',
                                { className: Da.selected },
                                s().createElement('div', { className: Da.selected_header, style: E }),
                                s().createElement('div', { className: Da.selected_symbol }),
                                s().createElement('div', { className: Da.selected_glow, style: p }),
                            ),
                            s().createElement(
                                'div',
                                { className: Da.level_container },
                                s().createElement(
                                    'div',
                                    { className: b },
                                    s().createElement(fa, { level: t, size: Aa.Large }),
                                ),
                                !g &&
                                    s().createElement(
                                        'div',
                                        { className: Da.level_next },
                                        s().createElement('div', { className: Da.arrow }),
                                        s().createElement(fa, {
                                            level: t + 1,
                                            size: Aa.Small,
                                            isLocked: !0,
                                            mixClass: Da.level_small,
                                        }),
                                    ),
                            ),
                            s().createElement(ju, { text: c, className: Da.divisionName }),
                            s().createElement(ju, { text: _, className: Da.description }),
                            s().createElement(Ca, { label: Ba.button(), mixClass: Da.button }),
                        );
                    }),
                    xa = 'Content_lip_scroll_a4',
                    Na = 'Content_arrow_scroll_49';
                function ka() {
                    return (
                        (ka =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ka.apply(this, arguments)
                    );
                }
                const Ta = s().memo(({ divisions: e, frontName: t, isDivisionSelected: u, onDivisionSelect: n }) => {
                        const r = (0, a.useState)(Cr),
                            i = r[0],
                            o = r[1],
                            l = (0, a.useState)(!1),
                            c = l[0],
                            _ = l[1],
                            m = (0, a.useState)(0),
                            d = m[0],
                            E = m[1],
                            p = N().mediaSize,
                            g = 2 === da(),
                            b = En(),
                            h = parseInt('261rem');
                        (0, a.useEffect)(() => {
                            E(c && i !== Cr ? (i % 3 || 3) - 1 : 0);
                        }, [i, c]),
                            (0, a.useEffect)(() => {
                                const e = d * h;
                                requestAnimationFrame(() => b.applyScroll(e));
                            }, [b, d, h]);
                        const A = (0, a.useCallback)(
                            (e) => {
                                o(e), n && n(e);
                            },
                            [n],
                        );
                        (0, a.useEffect)(() => {
                            u || o(Cr);
                        }, [u]),
                            (0, a.useEffect)(() => {
                                p === y.ExtraSmall && i !== Cr
                                    ? It(() => {
                                          _(!0);
                                      }, Br)
                                    : _(!1);
                            }, [p, i]);
                        const f = (0, a.useMemo)(
                            () =>
                                D()(
                                    'Content_base_d0',
                                    c && 'Content_base__needScroll_c0',
                                    d > 0 && 'Content_base__needLeftScroll_a8',
                                    d < 2 && 'Content_base__needRightScroll_dd',
                                ),
                            [c, d],
                        );
                        return s().createElement(
                            'div',
                            { className: f },
                            s().createElement('div', { className: D()(xa, 'Content_lip_scroll__left_67') }),
                            s().createElement('div', {
                                className: D()(Na, 'Content_arrow_scroll__left_04'),
                                onClick: () => {
                                    A(i - 1);
                                },
                            }),
                            s().createElement(
                                On.Horizontal.Area.Default,
                                {
                                    api: b,
                                    classNames: { wrapper: 'Content_wrapper_b4' },
                                    barClassNames: { base: 'Content_horizontalBar_9f' },
                                },
                                s().createElement(
                                    'div',
                                    { className: 'Content_cardsContainer_10' },
                                    e.map((e) => {
                                        return s().createElement(
                                            'div',
                                            {
                                                key: e.divisionID,
                                                className: D()('Content_card_66', g && 'Content_card__scaled_55'),
                                            },
                                            s().createElement(
                                                Sa,
                                                ka({}, e, {
                                                    state:
                                                        ((u = e.divisionID),
                                                        (n = i),
                                                        n === Cr ? Dr.Default : u === n ? Dr.Selected : Dr.NotSelected),
                                                    frontName: t,
                                                    onSelect: A,
                                                }),
                                            ),
                                        );
                                        var u, n;
                                    }),
                                ),
                            ),
                            s().createElement('div', { className: D()(xa, 'Content_lip_scroll__right_36') }),
                            s().createElement('div', {
                                className: D()(Na, 'Content_arrow_scroll__right_5b'),
                                onClick: () => {
                                    A(i + 1);
                                },
                            }),
                        );
                    }),
                    La = 'Experience_experience_c9',
                    Ma = 'Experience_line_99',
                    Pa = { contentId: R.views.historical_battles.lobby.tooltips.HbCoinTooltip('resId') },
                    Ra = R.strings.hb_lobby.hbMetaView.division.details,
                    Ia = s().memo(({ currentExp: e, nextLevelExp: t, isMaxLevel: u = !1 }) =>
                        s().createElement(
                            'div',
                            { className: D()('Experience_base_05', u && 'Experience_base_maxLevel_d4') },
                            s().createElement('div', { className: D()(Ma, 'Experience_line__left_2d') }),
                            s().createElement(
                                le,
                                Pa,
                                s().createElement(
                                    'div',
                                    null,
                                    u
                                        ? s().createElement(Dt, {
                                              text: Ra.experience_max(),
                                              binding: {
                                                  icon: s().createElement('div', {
                                                      className: 'Experience_iconCheck_a0',
                                                  }),
                                              },
                                              classMix: La,
                                          })
                                        : s().createElement(la, {
                                              text: Ra.experience(),
                                              binding: {
                                                  exp: s().createElement(
                                                      'div',
                                                      { className: 'Experience_currentExp_1a' },
                                                      s().createElement(Ve, { value: e }),
                                                  ),
                                                  toExp: s().createElement(Ve, { value: t }),
                                                  icon: s().createElement('div', {
                                                      className: 'Experience_iconExp_fe',
                                                  }),
                                              },
                                              classMix: La,
                                          }),
                                ),
                            ),
                            s().createElement('div', { className: D()(Ma, 'Experience_line__right_b3') }),
                        ),
                    ),
                    Oa = {
                        base: 'ProgressLevel_base_e6',
                        base__hover: 'ProgressLevel_base__hover_fc',
                        hover: 'ProgressLevel_hover_b4',
                        bg: 'ProgressLevel_bg_7e',
                        base__orange: 'ProgressLevel_base__orange_85',
                        base__green: 'ProgressLevel_base__green_18',
                        base__selected: 'ProgressLevel_base__selected_ce',
                        border: 'ProgressLevel_border_30',
                        lock: 'ProgressLevel_lock_f7',
                        level: 'ProgressLevel_level_4f',
                        exp: 'ProgressLevel_exp_df',
                    },
                    Ha = s().memo(
                        ({
                            level: e,
                            exp: t,
                            color: u = vr.Orange,
                            isLocked: n = !1,
                            isSelected: r = !1,
                            onLevelSelect: i,
                            onMouseEnter: o,
                        }) => {
                            const l = (0, a.useState)(!1),
                                c = l[0],
                                _ = l[1];
                            (0, a.useEffect)(() => {
                                _(!1);
                            }, [r]);
                            const m = D()(Oa.base, Oa[`base__${u}`], r && Oa.base__selected, c && Oa.base__hover);
                            return s().createElement(
                                'div',
                                { className: m },
                                s().createElement('div', { className: Oa.bg }),
                                s().createElement('div', { className: Oa.border }),
                                s().createElement('div', {
                                    className: Oa.hover,
                                    onMouseEnter: () => {
                                        r || (o && o(), _(!0));
                                    },
                                    onMouseLeave: () => {
                                        _(!1);
                                    },
                                    onClick: () => {
                                        i && !r && i(e);
                                    },
                                }),
                                n && s().createElement('div', { className: Oa.lock }),
                                s().createElement(ju, { text: ba(e), className: Oa.level }),
                                s().createElement(ju, { text: String(t), className: Oa.exp }),
                            );
                        },
                    ),
                    $a = {
                        base: 'Progress_base_79',
                        lip: 'Progress_lip_fe',
                        lockState: 'Progress_lockState_ce',
                        levels: 'Progress_levels_0a',
                        progressWrapper: 'Progress_progressWrapper_2c',
                        expNotEnough: 'Progress_expNotEnough_5a',
                        expNotEnough_icon: 'Progress_expNotEnough_icon_60',
                        expNotEnough_text: 'Progress_expNotEnough_text_16',
                        expNotEnough_text_exp: 'Progress_expNotEnough_text_exp_b8',
                    };
                function Ua() {
                    return (
                        (Ua =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ua.apply(this, arguments)
                    );
                }
                function Wa(e, t) {
                    return e > t;
                }
                const za = Object.assign({}, uu, {
                        line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#f50' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_orange',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_orange',
                        },
                    }),
                    Ga = R.images.historical_battles.gui.maps.icons.hangar.hbMetaView.division.details,
                    Va = R.strings.hb_lobby.hbMetaView.division,
                    Xa = (e, t, u) => {
                        if (0 === e) return 0;
                        if (3 === e) return 100;
                        const n = e - 1,
                            r = u[e] - u[n];
                        return ((t - u[n]) / r) * 36 + 7 + 50 * n;
                    },
                    ja = s().memo(
                        ({ frontName: e, level: t, currentExp: u, levelsExp: n, mixClass: r, onLevelSelect: i }) => {
                            const o = (0, a.useState)(t),
                                l = o[0],
                                c = o[1],
                                _ = (0, a.useMemo)(
                                    () => ({ backgroundImage: `url(${Ga.$dyn(l <= t ? 'unlock_bg' : 'lock_bg')})` }),
                                    [l, t],
                                );
                            (0, a.useEffect)(() => {
                                c(t);
                            }, [t, i]);
                            const m = (0, a.useCallback)(
                                    (e) => {
                                        c(e), i && (te.playClick(), i(e));
                                    },
                                    [i],
                                ),
                                d = (0, a.useRef)({ update: () => {} }),
                                E = 3 === t,
                                p = D()($a.base, r),
                                g = () => {
                                    ee('highlight');
                                };
                            return s().createElement(
                                'div',
                                { className: p },
                                s().createElement('div', { className: $a.lip }),
                                s().createElement('div', { className: $a.lockState, style: _ }),
                                s().createElement(
                                    'div',
                                    { className: $a.levels },
                                    n.map((u, n) => {
                                        return s().createElement(
                                            'div',
                                            { key: u },
                                            s().createElement(
                                                de,
                                                Ua(
                                                    { isEnabled: Wa(n + 1, t) },
                                                    ((e) => ({
                                                        header: Va.details.level.tooltip.header(),
                                                        body: Va.details.level.tooltip.body.$dyn(e),
                                                    }))(e),
                                                ),
                                                s().createElement(
                                                    'div',
                                                    null,
                                                    s().createElement(Ha, {
                                                        level: n + 1,
                                                        exp: u,
                                                        color: ((r = n + 1), (a = t), r > a ? vr.Orange : vr.Green),
                                                        isLocked: Wa(n + 1, t),
                                                        isSelected: n + 1 === l,
                                                        onLevelSelect: m,
                                                        onMouseEnter: g,
                                                    }),
                                                ),
                                            ),
                                        );
                                        var r, a;
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Vn($a, bu.ChangeCompleted, 'progressWrapper') },
                                    s().createElement(or, {
                                        animationSettings: su,
                                        value: Xa(t, u, n),
                                        maxValue: 100,
                                        api: d,
                                        theme: za,
                                    }),
                                ),
                                !E &&
                                    l > t &&
                                    s().createElement(
                                        'div',
                                        { className: $a.expNotEnough },
                                        s().createElement('div', { className: $a.expNotEnough_icon }),
                                        s().createElement(Dt, {
                                            text: Va.details.experience_not_enough(),
                                            binding: {
                                                level: l,
                                                exp: s().createElement(
                                                    'div',
                                                    { className: $a.expNotEnough_text_exp },
                                                    n[l - 1] - u,
                                                ),
                                            },
                                            classMix: $a.expNotEnough_text,
                                        }),
                                    ),
                            );
                        },
                    ),
                    qa = 'Vehicle_light_ef',
                    Ya = s().memo(({ vehicle: e, frontName: t }) => {
                        const u = {
                                backgroundImage: `url(${R.images.historical_battles.gui.maps.icons.hangar.hbMetaView.division.details.$dyn('vehicle_bg_' + t)})`,
                            },
                            n = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.white.$dyn(pt(e.vehicleType))})`,
                                }),
                                [e.vehicleType],
                            ),
                            r = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.shop.vehicles.c_180x135.$dyn(pt(e.icon))})`,
                                }),
                                [e.icon],
                            ),
                            i = N().mediaSize >= y.Medium ? e.name : e.nameShort;
                        return s().createElement(
                            'div',
                            { className: 'Vehicle_base_8d' },
                            s().createElement('div', { className: 'Vehicle_bg_bc', style: u }),
                            s().createElement('div', { className: 'Vehicle_icon_84', style: r }),
                            s().createElement('div', { className: 'Vehicle_vehicleType_75', style: n }),
                            s().createElement('div', { className: 'Vehicle_name_55' }, i),
                            s().createElement('div', { className: D()(qa, 'Vehicle_light_top_91') }),
                            s().createElement('div', { className: D()(qa, 'Vehicle_light_bottom_d1') }),
                        );
                    }),
                    Ka = s().memo(({ vehicles: e, frontName: t }) =>
                        s().createElement(
                            'div',
                            { className: 'VehicleContainer_base_61' },
                            s().createElement(ju, {
                                text: R.strings.hb_lobby.hbMetaView.division.details.vehicles(),
                                className: 'VehicleContainer_title_aa',
                            }),
                            s().createElement(
                                'div',
                                { className: 'VehicleContainer_content_7c' },
                                e.map((e, u) =>
                                    s().createElement(
                                        'div',
                                        { key: u },
                                        s().createElement(
                                            We,
                                            { args: { vehicleCD: e.vehicleCD } },
                                            s().createElement(
                                                'div',
                                                null,
                                                s().createElement(Ya, { vehicle: e, frontName: t }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    Qa = 'Ability_light_03',
                    Za = s().memo(({ ability: e, frontName: t }) => {
                        const u = {
                                backgroundImage: `url(${R.images.historical_battles.gui.maps.icons.hangar.hbMetaView.division.details.$dyn('ability_bg_' + t)})`,
                            },
                            n = { backgroundImage: `url(${e.icon})` };
                        return s().createElement(
                            'div',
                            { className: 'Ability_base_e4' },
                            s().createElement('div', { className: 'Ability_bg_dc', style: u }),
                            s().createElement('div', { className: 'Ability_icon_dc', style: n }),
                            s().createElement('div', { className: D()(Qa, 'Ability_light_top_0f') }),
                            s().createElement('div', { className: D()(Qa, 'Ability_light_bottom_b5') }),
                        );
                    }),
                    Ja = R.strings.hb_artefacts,
                    es = (e, t) => {
                        var u;
                        return null == (u = Ja.$dyn(t)) ? void 0 : u.$dyn(e);
                    },
                    ts = s().memo(({ abilities: e, frontName: t }) =>
                        s().createElement(
                            'div',
                            { className: 'AbilityContainer_base_4b' },
                            s().createElement(ju, {
                                text: R.strings.hb_lobby.hbMetaView.division.details.abilities(),
                                className: 'AbilityContainer_title_a1',
                            }),
                            s().createElement(
                                'div',
                                { className: 'AbilityContainer_content_62' },
                                e.map((e) =>
                                    s().createElement(
                                        de,
                                        { key: e.icon, header: es('name', e.name), body: es('descr', e.name) },
                                        s().createElement(
                                            'div',
                                            null,
                                            s().createElement(Za, { ability: e, frontName: t }),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    us = {
                        base: 'Details_base_e4',
                        bg: 'Details_bg_93',
                        glow: 'Details_glow_2f',
                        shadow: 'Details_shadow_de',
                        lip: 'Details_lip_ff',
                        lockState: 'Details_lockState_6d',
                        buttonClose: 'Details_buttonClose_ae',
                        emblem: 'Details_emblem_90',
                        title: 'Details_title_a5',
                        description: 'Details_description_14',
                        vehicles: 'Details_vehicles_f0',
                        abilities: 'Details_abilities_36',
                        vehicleType: 'Details_vehicleType_25',
                        divisionName: 'Details_divisionName_e0',
                        divisionLevel: 'Details_divisionLevel_55',
                        footer: 'Details_footer_f6',
                        progress: 'Details_progress_3c',
                        button: 'Details_button_5a',
                    },
                    ns = R.images.historical_battles.gui.maps.icons,
                    rs = R.strings.hb_lobby.hbMetaView.division,
                    as = s().memo(({ frontName: e, division: t, onBuyLevel: u, onClose: n }) => {
                        const r = N().mediaSize,
                            i = (0, a.useState)(t.level),
                            o = i[0],
                            l = i[1],
                            c = (0, a.useMemo)(() => t.levels[o - 1].vehicles, [o, t]),
                            _ = (0, a.useMemo)(() => t.levels[o - 1].abilities, [o, t]),
                            m = 3 === t.level,
                            d = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url(${ns.hangar.hbMetaView.division.details.$dyn(o <= t.level ? 'unlock' : 'lock')})`,
                                }),
                                [o, t],
                            ),
                            E = R.strings.hb_lobby
                                .$dyn('division_' + t.divisionID)
                                .$dyn('name')
                                .toUpperCase(),
                            p = rs.$dyn('division_' + t.divisionID).$dyn('full_descr'),
                            g = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url(${ns.division.$dyn(((e) => (e === y.ExtraLarge ? yr.C_400X400 : e === y.Large ? yr.C_260X260 : e === y.Medium ? yr.C_210X210 : yr.C_180X180))(r)).$num(t.divisionID)})`,
                                }),
                                [t, r],
                            ),
                            b = (0, a.useCallback)((e) => {
                                l(e);
                            }, []),
                            h = (0, a.useCallback)(() => {
                                u(t.divisionID);
                            }, [t, u]);
                        (0, a.useEffect)(() => {
                            l(t.level);
                        }, [t.level]);
                        const A = (0, a.useMemo)(
                                () => (m ? 0 : t.levels[Math.max(o - 1, t.level)].experience),
                                [o, t, m],
                            ),
                            f = t.levels.map((e) => e.experience),
                            v = D()(us.base, m && us.base__maxLevel);
                        return s().createElement(
                            'div',
                            { className: v },
                            s().createElement('div', { className: us.bg }),
                            s().createElement('div', { className: us.glow }),
                            s().createElement('div', { className: us.shadow }),
                            s().createElement('div', { className: us.lip }),
                            s().createElement('div', { className: us.lockState, style: d }),
                            s().createElement(
                                'div',
                                { className: us.buttonClose },
                                s().createElement(ae, { caption: '', type: 'close', onClick: n }),
                            ),
                            s().createElement('div', { className: us.emblem, style: g }),
                            s().createElement(
                                'div',
                                { className: us.title },
                                s().createElement(ju, { text: E, className: us.divisionName }),
                                s().createElement(ju, { text: ba(o), className: us.divisionLevel }),
                            ),
                            s().createElement(ju, { text: p, className: us.description }),
                            s().createElement(
                                'div',
                                { className: us.vehicles },
                                s().createElement(Ka, { vehicles: c, frontName: e }),
                            ),
                            s().createElement(
                                'div',
                                { className: us.abilities },
                                s().createElement(ts, { abilities: _, frontName: e }),
                            ),
                            s().createElement(
                                'div',
                                { className: us.footer },
                                s().createElement(Ia, { currentExp: t.experience, nextLevelExp: A, isMaxLevel: m }),
                                s().createElement(ja, {
                                    frontName: e,
                                    level: t.level,
                                    currentExp: t.experience,
                                    levelsExp: f,
                                    mixClass: us.progress,
                                    onLevelSelect: b,
                                }),
                                !m &&
                                    s().createElement(
                                        'div',
                                        { className: us.button },
                                        s().createElement(Ca, {
                                            label: rs.details.button(),
                                            onMouseEnter: () => {
                                                ee('highlight');
                                            },
                                            onClick: h,
                                        }),
                                    ),
                            ),
                        );
                    }),
                    ss = {
                        [y.ExtraSmall]: '28rem',
                        [y.Small]: '28rem',
                        [y.Medium]: '38rem',
                        [y.Large]: '54rem',
                        [y.ExtraLarge]: '72rem',
                    },
                    is = {
                        [y.ExtraSmall]: '70rem',
                        [y.Small]: '82rem',
                        [y.Medium]: '94rem',
                        [y.Large]: '94rem',
                        [y.ExtraLarge]: '158rem',
                    },
                    os = {
                        [y.ExtraSmall]: '-26rem',
                        [y.Small]: '-26rem',
                        [y.Medium]: '-22rem',
                        [y.Large]: '-30rem',
                        [y.ExtraLarge]: '-24rem',
                    },
                    ls = {
                        [y.ExtraSmall]: '6rem',
                        [y.Small]: '22rem',
                        [y.Medium]: '32rem',
                        [y.Large]: '26rem',
                        [y.ExtraLarge]: '40rem',
                    },
                    cs = '0rem';
                var _s;
                !(function (e) {
                    (e.Idle = 'idle'), (e.Animating = 'Animating'), (e.Mounted = 'Mounted');
                })(_s || (_s = {}));
                const ms = (0, Y.observer)(() => {
                        const e = ea(),
                            t = e.model,
                            u = e.controls,
                            n = t.computes,
                            r = N().mediaSize,
                            i = (0, a.useState)(Cr),
                            o = i[0],
                            l = i[1],
                            c = (0, a.useState)(_s.Idle),
                            _ = c[0],
                            m = c[1],
                            d = (0, a.useRef)(Cr),
                            E = n.getFrontName(),
                            p = o !== Cr,
                            g = { backgroundImage: `url(${ta(r, E)})` },
                            b = p ? o : d.current,
                            h = n.getDivisionsCards(),
                            A = n.getDivisionDetailsById(b),
                            f = (0, a.useMemo)(() => {
                                return (
                                    (e = p),
                                    (t = ss[r]),
                                    (u = is[r]),
                                    (n = _ === _s.Animating),
                                    e
                                        ? {
                                              from: { top: t, left: '50%', transform: 'translateX(-50%)' },
                                              to: { top: u, left: '0%', transform: 'translateX(0%)' },
                                              config: { duration: n ? Br : 0 },
                                          }
                                        : {
                                              from: { top: u, left: '0%', transform: 'translateX(0%)' },
                                              to: { top: t, left: '50%', transform: 'translateX(-50%)' },
                                              config: { duration: n ? Br : 0 },
                                          }
                                );
                                var e, t, u, n;
                            }, [p, r, _]),
                            v = (0, pe.useSpring)(f),
                            C = (0, a.useMemo)(
                                () =>
                                    ((e, t, u, n, r) => {
                                        const a = n ? '44rem' : cs,
                                            s = n ? '50rem' : cs;
                                        return e
                                            ? {
                                                  from: {
                                                      marginTop: t,
                                                      marginLeft: a,
                                                      left: '50%',
                                                      transform: 'translate(-50%, -50%)',
                                                  },
                                                  to: {
                                                      marginTop: u,
                                                      marginLeft: s,
                                                      left: '0%',
                                                      transform: 'translate(0%, -50%)',
                                                  },
                                                  config: { duration: r ? Br : 0 },
                                              }
                                            : {
                                                  from: {
                                                      marginTop: u,
                                                      marginLeft: s,
                                                      left: '0%',
                                                      transform: 'translate(0%, -50%)',
                                                  },
                                                  to: {
                                                      marginTop: t,
                                                      marginLeft: a,
                                                      left: '50%',
                                                      transform: 'translate(-50%, -50%)',
                                                  },
                                                  config: { duration: r ? Br : 0 },
                                              };
                                    })(p, os[r], ls[r], r === y.ExtraSmall, _ === _s.Animating),
                                [p, r, _],
                            ),
                            F = (0, pe.useSpring)(C),
                            B = (0, pe.useSpring)(
                                ((e) =>
                                    e
                                        ? {
                                              from: { transform: 'translateX(100%)' },
                                              to: { transform: 'translateX(0%)' },
                                              config: { duration: Br },
                                          }
                                        : {
                                              from: { transform: 'translateX(0%)' },
                                              to: { transform: 'translateX(100%)' },
                                              config: { duration: Br },
                                          })(p),
                            ),
                            w = (0, a.useCallback)((e) => {
                                ee(Zu.SHOW_DETAILS),
                                    l(e),
                                    (d.current = e),
                                    m(_s.Animating),
                                    dispatchEvent(new Event(Ku));
                            }, []),
                            S = (0, a.useCallback)(
                                (e) => {
                                    te.playClick(), u.onBuyLevel(e);
                                },
                                [u],
                            ),
                            x = (0, a.useCallback)(() => {
                                m(_s.Animating), dispatchEvent(new Event(Qu));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = () => {
                                l(Cr), m(_s.Animating);
                            };
                            return (
                                addEventListener(Qu, e),
                                () => {
                                    removeEventListener(Qu, e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                if (_ === _s.Animating) {
                                    const e = setTimeout(() => {
                                        m(p ? _s.Mounted : _s.Idle);
                                    }, Br);
                                    return () => clearTimeout(e);
                                }
                            }, [_, p]);
                        const k = D()('App_base_4a', p && 'App_base__divisionSelected_bf');
                        return s().createElement(
                            'div',
                            { className: k },
                            s().createElement('div', { className: 'App_bg_74', style: g }),
                            s().createElement('div', { className: 'App_vignette_d5' }),
                            s().createElement(
                                pe.animated.div,
                                { className: 'App_header_3d', style: v },
                                s().createElement(ra, { frontName: E, isCentered: !p }),
                            ),
                            s().createElement(
                                pe.animated.div,
                                { className: 'App_content_ba', style: F },
                                s().createElement(Ta, {
                                    divisions: h,
                                    frontName: E,
                                    isDivisionSelected: p,
                                    onDivisionSelect: w,
                                }),
                            ),
                            s().createElement(
                                pe.animated.div,
                                { className: 'App_details_b3', style: B },
                                b !== Cr &&
                                    _ !== _s.Idle &&
                                    s().createElement(as, { frontName: E, division: A, onBuyLevel: S, onClose: x }),
                            ),
                            s().createElement('div', { className: 'App_footer_8a' }, s().createElement(ma, null)),
                        );
                    }),
                    ds = () =>
                        s().createElement(
                            Jr,
                            { options: { context: 'model.divisionModel' } },
                            s().createElement(ms, null),
                        ),
                    Es = V()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), bundles: e.array('bundles') },
                                u = (0, ke.computedFn)(() => t.root.get().frontName),
                                n = (0, ke.computedFn)(
                                    () =>
                                        we(t.bundles.get(), (e) =>
                                            Object.assign({}, e, {
                                                order: Object.assign({}, e.order),
                                                bonuses: we(e.bonuses, (e) => Object.assign({}, e)),
                                            }),
                                        ),
                                    { equals: U },
                                );
                            return Object.assign({}, t, { computes: { getFrontName: u, getBundles: n } });
                        },
                        ({ externalModel: e }) => ({
                            onBundleBuyClick: e.createCallback((e, t) => ({ idx: e, count: t }), 'onBundleBuyClick'),
                            onInfoClick: e.createCallbackNoArgs('onInfoClick'),
                        }),
                    ),
                    ps = Es[0],
                    gs = Es[1];
                var bs = u(9050),
                    hs = u.n(bs);
                let As, fs, vs;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(As || (As = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(fs || (fs = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(vs || (vs = {}));
                const Cs = { [vs.NBSP]: As.NoBreakSymbol, [vs.ZWNBSP]: As.NoBreakSymbol, [vs.NEW_LINE]: As.LineBreak },
                    Ds = {
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
                    Fs = (e) => ({ color: `#${e}` }),
                    Bs = ({ elementList: e, textBlock: t, key: u }) => {
                        const n = t.colorTag;
                        return n
                            ? Ds[n]
                                ? s().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: Ds[n] },
                                      e,
                                  )
                                : s().createElement('span', { key: u, 'data-block-type': t.blockType, style: Fs(n) }, e)
                            : s().createElement('span', { key: u, 'data-block-type': t.blockType }, e);
                    },
                    ys = {
                        [As.Word]: Bs,
                        [As.NoBreakSymbol]: Bs,
                        [As.Binding]: ({ elementList: e, textBlock: t, key: u }) =>
                            s().createElement(
                                'span',
                                { key: u, 'data-block-type': t.blockType },
                                e.map((e) => s().createElement(s().Fragment, { key: u }, e)),
                            ),
                        [As.LineBreak]: ({ key: e }) =>
                            s().createElement('span', {
                                key: e,
                                'data-block-type': As.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [As.NewLine]: ({ elementList: e, key: t }) =>
                            s().createElement(
                                'span',
                                { key: t, 'data-block-type': As.NewLine, className: 'renderers_newLine_bd' },
                                e,
                            ),
                        [As.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            s().createElement(
                                'span',
                                {
                                    key: t,
                                    'data-block-type': As.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                e,
                            ),
                    },
                    ws = (e, t, u) => {
                        const n = [];
                        return (
                            e.childList.forEach((r, a) => {
                                const s = `${u}_${a}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        t = e.blockType,
                                        u = ws(e, ys[t], s);
                                    n.push(...u);
                                } else n.push(t({ elementList: [r], textBlock: e, key: s }));
                            }),
                            n
                        );
                    },
                    Ss = (e, t, u, n) => {
                        let r = t.exec(e),
                            a = 0;
                        for (; r; ) a !== r.index && u(e.slice(a, r.index)), n(r), (a = t.lastIndex), (r = t.exec(e));
                        a !== e.length && u(e.slice(a));
                    },
                    xs = (e) => {
                        const t = /[\s\u002d]/g;
                        let u = t.exec(e);
                        if (!u) return [e];
                        const n = [];
                        let r = 0;
                        for (; u; ) n.push(e.slice(r, t.lastIndex)), (r = t.lastIndex), (u = t.exec(e));
                        return r !== e.length && n.push(e.slice(r)), n;
                    },
                    Ns = (e, t = '') => {
                        const u = [];
                        return (
                            Ss(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    u.push({ blockType: As.Word, colorTag: t, childList: xs(e) });
                                },
                                (e) => {
                                    const n = e[0],
                                        r = Cs[n.charAt(0)];
                                    r === As.LineBreak
                                        ? u.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: As.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let u = 0; u < e.length - 1; u++)
                                                      t.push({
                                                          blockType: As.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(n),
                                          )
                                        : u.push({ blockType: r, colorTag: t, childList: [n] });
                                },
                            ),
                            u
                        );
                    },
                    ks = (e, t, u = '') => {
                        const n = [];
                        return (
                            Ss(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    n.push(...Ns(e, u));
                                },
                                (e) => {
                                    const r = e[1],
                                        a = void 0 === t[r] ? e[0] : t[r];
                                    'string' == typeof a || 'number' == typeof a
                                        ? n.push(...Ns(String(a), u))
                                        : n.push({ blockType: As.Binding, colorTag: u, childList: [a] });
                                },
                            ),
                            n
                        );
                    },
                    Ts = (e, t) => {
                        if (!e) return [t];
                        const u = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === As.NoBreakWrapper) e.childList.push(n), u.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && u.push(e),
                                u.push({ blockType: As.NoBreakWrapper, colorTag: '', childList: [t, n] });
                        }
                        return t.childList.length > 0 && u.push(t), u;
                    },
                    Ls = (e, t = {}) => {
                        if (!e) return [];
                        const u = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === As.NoBreakSymbol
                                        ? ((u = !0), t.push(...Ts(t.pop(), e)))
                                        : (u ? t.push(...Ts(t.pop(), e)) : t.push(e), (u = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t) => {
                                const u = [];
                                return (
                                    Ss(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            u.push(...ks(e, t));
                                        },
                                        (e) => {
                                            u.push(...ks(e[2], t, e[1]));
                                        },
                                    ),
                                    u
                                );
                            })(gt(e).replace(/&zwnbsp;/g, '\ufeff'), t),
                        );
                        return ((e) => {
                            const t = [];
                            return (
                                e.forEach((e, u) => {
                                    t.push(
                                        ...((e, t) => {
                                            const u = [],
                                                n = e.blockType,
                                                r = ys[n],
                                                a = ws(e, r, t);
                                            return (
                                                n === As.NoBreakWrapper
                                                    ? u.push(r({ elementList: a, textBlock: e, key: `${t}` }))
                                                    : u.push(...a),
                                                u
                                            );
                                        })(e, u),
                                    );
                                }),
                                t
                            );
                        })(u);
                    },
                    Ms = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    Ps = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    Rs = (e, t, u) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = Ps(e, t),
                            r = e.textContent.length,
                            a = e.offsetWidth / r,
                            s = Math.ceil(n / a);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / a);
                            return n >= u ? [!0, u + s] : [!1, n];
                        }
                        const i = Math.max(u + s, 0);
                        return r < i ? [!1, 0] : [!0, i];
                    },
                    Is = (e, t, u, n, r, a) => {
                        let i = -1,
                            o = null;
                        for (let l = u; l >= 0; l--) {
                            const u = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === As.LineBreak || c === As.NewLine || c === As.Binding) continue;
                            const _ = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = Rs(u, n, r),
                                    c = e[0],
                                    m = e[1];
                                if (!c) {
                                    m > 0 && (r -= m);
                                    continue;
                                }
                                const d = _.slice(0, _.length - m) + a,
                                    E = t[l];
                                (o = s().cloneElement(E, E.props, d)), (i = l);
                                break;
                            }
                            {
                                const e = u.children,
                                    c = t[l],
                                    m = c.props.children,
                                    d = Is(e, m, e.length - 1, n, r, a),
                                    E = d[0],
                                    p = d[1];
                                if (!(E < 0)) {
                                    const e = m.slice(0, E);
                                    (o = s().cloneElement(c, c.props, e, p)), (i = l);
                                    break;
                                }
                                r -= _.length;
                            }
                        }
                        return [i, o];
                    },
                    Os = s().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: u,
                            binding: n,
                            isTooltipEnable: r = !1,
                            isTruncationAvailable: i = !1,
                            targetId: o,
                            justifyContent: l = fs.FlexStart,
                            alignContent: c = fs.FlexStart,
                            truncateIdentify: _ = '...',
                        }) => {
                            const m = (0, a.useRef)(null),
                                d = (0, a.useRef)({ height: 0, width: 0 }),
                                E = (0, a.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                p = E[0],
                                g = E[1],
                                b = (0, a.useMemo)(() => Ls(e, n), [n, e]),
                                h = (0, a.useMemo)(() => {
                                    if (r && p.isTruncated)
                                        return {
                                            args: { text: e, stringifyKwargs: n ? JSON.stringify(n) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: o,
                                        };
                                }, [n, r, o, e, p.isTruncated]),
                                A = (0, a.useCallback)(
                                    (e) => {
                                        (d.current.width = e.contentRect.width),
                                            (d.current.height = e.contentRect.height);
                                        const t = ((e, t, u, n = '...') => {
                                                const r = [...t],
                                                    a = e.current;
                                                if (!a) return [r, !1];
                                                const s = u.height,
                                                    i = u.width,
                                                    o = a.lastElementChild;
                                                if (!Ms(o, s) && Ps(o, i) <= 0) return [r, !1];
                                                const l = a.children,
                                                    c = ((e, t) => {
                                                        let u = 0,
                                                            n = e.length - 1;
                                                        for (; n - u >= 0; ) {
                                                            const r = u + Math.ceil(0.5 * (n - u));
                                                            Ms(e[r], t) ? (n = r - 1) : (u = r + 1);
                                                        }
                                                        return u - 1;
                                                    })(l, s);
                                                if (c < 0) return [r, !1];
                                                const _ = Is(l, r, c, i, n.length, n),
                                                    m = _[0],
                                                    d = _[1];
                                                return d && (r.splice(m, 1, d), r.splice(m + 1)), [r, !0];
                                            })(m, b, d.current, _),
                                            n = t[0],
                                            r = t[1];
                                        g({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), u && u(r);
                                    },
                                    [u, _, b],
                                ),
                                f = (0, a.useMemo)(() => ({ justifyContent: l, alignContent: c }), [c, l]);
                            return (
                                ((e, t, u = !0) => {
                                    const n = (0, a.useCallback)(
                                        (e) => {
                                            const u = e[0];
                                            t && t(u);
                                        },
                                        [t],
                                    );
                                    (0, a.useEffect)(() => {
                                        if (!e.current || !u) return;
                                        const t = new (hs())((e) => n(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [n, u, e]);
                                })(m, A, i),
                                s().createElement(
                                    'div',
                                    {
                                        className: D()(
                                            'ExtendedText_base_71',
                                            t,
                                            'ExtendedText_base__zeroPadding_25',
                                            i && 'ExtendedText_base__isTruncationAvailable_5b',
                                        ),
                                        style: f,
                                    },
                                    s().createElement('div', { className: 'ExtendedText_unTruncated_b8', ref: m }, b),
                                    s().createElement(
                                        Ge,
                                        { tooltipArgs: h },
                                        s().createElement(
                                            'div',
                                            {
                                                className: D()(
                                                    'ExtendedText_truncated_97',
                                                    !p.isTruncateFinished && i && 'ExtendedText_truncated__hide_31',
                                                ),
                                                style: f,
                                            },
                                            p.isTruncateFinished && i ? p.elementList : b,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Hs = {
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
                        base__disabled: 'CButton_base__disabled_d9',
                        back: 'CButton_back_e5',
                        texture: 'CButton_texture_fe',
                        state: 'CButton_state_11',
                        base__focus: 'CButton_base__focus_83',
                        stateHighlightHover: 'CButton_stateHighlightHover_ff',
                        stateHighlightActive: 'CButton_stateHighlightActive_35',
                        stateDisabled: 'CButton_stateDisabled_54',
                        base__firstHover: 'CButton_base__firstHover_d5',
                        base__highlightActive: 'CButton_base__highlightActive_b2',
                        content: 'CButton_content_cc',
                    };
                let $s, Us;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })($s || ($s = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(Us || (Us = {}));
                const Ws = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: n,
                    disabled: r,
                    mixClass: i,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: m,
                    onMouseUp: d,
                    onMouseLeave: E,
                    onClick: p,
                }) => {
                    const g = (0, a.useRef)(null),
                        b = (0, a.useState)(u),
                        h = b[0],
                        A = b[1],
                        f = (0, a.useState)(!1),
                        v = f[0],
                        C = f[1],
                        F = (0, a.useState)(!1),
                        B = F[0],
                        y = F[1],
                        w = (0, a.useCallback)(() => {
                            r || (g.current && (g.current.focus(), A(!0)));
                        }, [r]),
                        S = (0, a.useCallback)(
                            (e) => {
                                h && null !== g.current && !g.current.contains(e.target) && A(!1);
                            },
                            [h],
                        ),
                        x = (0, a.useCallback)(
                            (e) => {
                                r || (p && p(e));
                            },
                            [r, p],
                        ),
                        N = (0, a.useCallback)(
                            (e) => {
                                r || (null !== o && ee(o), c && c(e), y(!0));
                            },
                            [r, o, c],
                        ),
                        k = (0, a.useCallback)(
                            (e) => {
                                _ && _(e);
                            },
                            [_],
                        ),
                        T = (0, a.useCallback)(
                            (e) => {
                                r || (d && d(e), C(!1));
                            },
                            [r, d],
                        ),
                        L = (0, a.useCallback)(
                            (e) => {
                                r || (null !== l && ee(l), m && m(e), u && w(), C(!0));
                            },
                            [r, l, m, w, u],
                        ),
                        M = (0, a.useCallback)(
                            (e) => {
                                r || (E && E(e), C(!1));
                            },
                            [r, E],
                        ),
                        P = D()(
                            Hs.base,
                            Hs[`base__${n}`],
                            {
                                [Hs.base__disabled]: r,
                                [Hs[`base__${t}`]]: t,
                                [Hs.base__focus]: h,
                                [Hs.base__highlightActive]: v,
                                [Hs.base__firstHover]: B,
                            },
                            i,
                        ),
                        I = D()(Hs.state, Hs.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', S),
                                () => {
                                    document.removeEventListener('mousedown', S);
                                }
                            ),
                            [S],
                        ),
                        (0, a.useEffect)(() => {
                            A(u);
                        }, [u]),
                        s().createElement(
                            'div',
                            {
                                ref: g,
                                className: P,
                                onMouseEnter: N,
                                onMouseMove: k,
                                onMouseUp: T,
                                onMouseDown: L,
                                onMouseLeave: M,
                                onClick: x,
                            },
                            n !== $s.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: Hs.back }),
                                    s().createElement('span', { className: Hs.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: I },
                                s().createElement('span', { className: Hs.stateDisabled }),
                                s().createElement('span', { className: Hs.stateHighlightHover }),
                                s().createElement('span', { className: Hs.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: Hs.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Ws.defaultProps = { type: $s.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const zs = (0, a.memo)(Ws);
                let Gs, Vs, Xs;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(Gs || (Gs = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin');
                    })(Vs || (Vs = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(Xs || (Xs = {}));
                const js = {
                        base: 'Currency_base_57',
                        icon: 'Currency_icon_c5',
                        base__small: 'Currency_base__small_af',
                        base__big: 'Currency_base__big_bc',
                        base__large: 'Currency_base__large_65',
                        base__extraLarge: 'Currency_base__extraLarge_4d',
                        'icon__credits-small': 'Currency_icon__credits-small_9b',
                        'icon__credits-big': 'Currency_icon__credits-big_96',
                        'icon__credits-large': 'Currency_icon__credits-large_ac',
                        'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                        'icon__gold-small': 'Currency_icon__gold-small_86',
                        'icon__gold-big': 'Currency_icon__gold-big_15',
                        'icon__gold-large': 'Currency_icon__gold-large_36',
                        'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                        'icon__crystal-small': 'Currency_icon__crystal-small_27',
                        'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                        'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                        'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                        'icon__xp-small': 'Currency_icon__xp-small_a7',
                        'icon__xp-big': 'Currency_icon__xp-big_97',
                        'icon__xp-large': 'Currency_icon__xp-large_6b',
                        'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                        'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                        'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                        'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                        'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                        'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                        'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                        'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                        'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                        value: 'Currency_value_e1',
                        value__freeXP: 'Currency_value__freeXP_cb',
                        value__credits: 'Currency_value__credits_76',
                        value__gold: 'Currency_value__gold_dd',
                        value__xp: 'Currency_value__xp_b0',
                        value__crystal: 'Currency_value__crystal_19',
                        value__equipCoin: 'Currency_value__equipCoin_d0',
                        value__notEnough: 'Currency_value__notEnough_56',
                        stock: 'Currency_stock_87',
                        stock__indent: 'Currency_stock__indent_a1',
                        stock__interactive: 'Currency_stock__interactive_93',
                        stockBackground: 'Currency_stockBackground_82',
                    },
                    qs = ({
                        isDiscount: e,
                        isInteractiveDiscount: t,
                        size: u,
                        type: n,
                        isEnough: r,
                        value: a,
                        discountValue: i,
                        showPlus: o,
                        stockBackgroundName: l = Xs.Red,
                    }) => {
                        const c = D()(js.value, js[`value__${n}`], !r && js.value__notEnough),
                            _ = D()(js.icon, js[`icon__${n}-${u}`]),
                            m = D()(js.stock, i && js.stock__indent, t && js.stock__interactive),
                            d = o && a > 0 && '+',
                            E = D()(js.base, js[`base__${u}`]);
                        return s().createElement(
                            'span',
                            { className: E },
                            s().createElement(
                                'span',
                                { className: c },
                                d,
                                s().createElement(Ve, { value: a, format: n === Vs.gold ? 'gold' : 'integral' }),
                            ),
                            s().createElement('span', { className: _ }),
                            e &&
                                s().createElement(
                                    'span',
                                    { className: m },
                                    s().createElement('span', {
                                        className: js.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${l})` },
                                    }),
                                    Boolean(i) && i,
                                ),
                        );
                    };
                qs.defaultProps = { isEnough: !0 };
                const Ys = s().memo(qs);
                let Ks;
                u(3368),
                    (function (e) {
                        (e[(e.ZERO = 48)] = 'ZERO'),
                            (e[(e.ONE = 49)] = 'ONE'),
                            (e[(e.TWO = 50)] = 'TWO'),
                            (e[(e.THREE = 51)] = 'THREE'),
                            (e[(e.FOUR = 52)] = 'FOUR'),
                            (e[(e.FIVE = 53)] = 'FIVE'),
                            (e[(e.SIX = 54)] = 'SIX'),
                            (e[(e.SEVEN = 55)] = 'SEVEN'),
                            (e[(e.EIGHT = 56)] = 'EIGHT'),
                            (e[(e.NINE = 57)] = 'NINE'),
                            (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9');
                    })(Ks || (Ks = {}));
                const Qs = {
                    base: 'NumericStepper_base_35',
                    base__small: 'NumericStepper_base__small_11',
                    base__medium: 'NumericStepper_base__medium_9d',
                    base__large: 'NumericStepper_base__large_dc',
                    base__isFocus: 'NumericStepper_base__isFocus_49',
                    base__isDisabled: 'NumericStepper_base__isDisabled_ac',
                    inputContainer: 'NumericStepper_inputContainer_e2',
                    input: 'NumericStepper_input_55',
                    'base__withCurrency-small': 'NumericStepper_base__withCurrency-small_de',
                    'base__withCurrency-medium': 'NumericStepper_base__withCurrency-medium_69',
                    'base__withCurrency-large': 'NumericStepper_base__withCurrency-large_a1',
                    input__disabled: 'NumericStepper_input__disabled_d8',
                    input__credits: 'NumericStepper_input__credits_08',
                    'input__credits-disabled': 'NumericStepper_input__credits-disabled_3f',
                    input__gold: 'NumericStepper_input__gold_14',
                    'input__gold-disabled': 'NumericStepper_input__gold-disabled_c6',
                    input__xp: 'NumericStepper_input__xp_c4',
                    input__freeXP: 'NumericStepper_input__freeXP_06',
                    input__crystal: 'NumericStepper_input__crystal_2e',
                    'input__xp-disabled': 'NumericStepper_input__xp-disabled_33',
                    'input__freeXP-disabled': 'NumericStepper_input__freeXP-disabled_8b',
                    'input__crystal-disabled': 'NumericStepper_input__crystal-disabled_f8',
                    input__withCurrency: 'NumericStepper_input__withCurrency_3b',
                    'input__xp-medium': 'NumericStepper_input__xp-medium_db',
                    'input__xp-large': 'NumericStepper_input__xp-large_73',
                    'input__freeXP-medium': 'NumericStepper_input__freeXP-medium_2b',
                    'input__freeXP-large': 'NumericStepper_input__freeXP-large_c9',
                    'input__crystal-medium': 'NumericStepper_input__crystal-medium_56',
                    'input__crystal-large': 'NumericStepper_input__crystal-large_4e',
                    currency: 'NumericStepper_currency_38',
                    'currency__xp-medium': 'NumericStepper_currency__xp-medium_66',
                    'currency__xp-large': 'NumericStepper_currency__xp-large_66',
                    'currency__freeXP-medium': 'NumericStepper_currency__freeXP-medium_79',
                    'currency__freeXP-large': 'NumericStepper_currency__freeXP-large_c7',
                    'currency__crystal-medium': 'NumericStepper_currency__crystal-medium_55',
                    'currency__crystal-large': 'NumericStepper_currency__crystal-large_a4',
                    currencyIcon: 'NumericStepper_currencyIcon_8e',
                    'currencyIcon__credits-small': 'NumericStepper_currencyIcon__credits-small_99',
                    'currencyIcon__credits-medium': 'NumericStepper_currencyIcon__credits-medium_1a',
                    'currencyIcon__credits-large': 'NumericStepper_currencyIcon__credits-large_bc',
                    'currencyIcon__gold-small': 'NumericStepper_currencyIcon__gold-small_2a',
                    'currencyIcon__gold-medium': 'NumericStepper_currencyIcon__gold-medium_f6',
                    'currencyIcon__gold-large': 'NumericStepper_currencyIcon__gold-large_d6',
                    'currencyIcon__crystal-small': 'NumericStepper_currencyIcon__crystal-small_b5',
                    'currencyIcon__crystal-medium': 'NumericStepper_currencyIcon__crystal-medium_ac',
                    'currencyIcon__crystal-large': 'NumericStepper_currencyIcon__crystal-large_2b',
                    'currencyIcon__freeXP-small': 'NumericStepper_currencyIcon__freeXP-small_4d',
                    'currencyIcon__freeXP-medium': 'NumericStepper_currencyIcon__freeXP-medium_85',
                    'currencyIcon__freeXP-large': 'NumericStepper_currencyIcon__freeXP-large_76',
                    'currencyIcon__xp-small': 'NumericStepper_currencyIcon__xp-small_73',
                    'currencyIcon__xp-medium': 'NumericStepper_currencyIcon__xp-medium_ef',
                    'currencyIcon__xp-large': 'NumericStepper_currencyIcon__xp-large_3e',
                    dummyValue: 'NumericStepper_dummyValue_0c',
                    control: 'NumericStepper_control_ab',
                    buttonIncrement: 'NumericStepper_buttonIncrement_16',
                    buttonDecrement: 'NumericStepper_buttonDecrement_c8',
                    buttonIncrement__small: 'NumericStepper_buttonIncrement__small_f6',
                    buttonDecrement__small: 'NumericStepper_buttonDecrement__small_36',
                    buttonIncrement__medium: 'NumericStepper_buttonIncrement__medium_fd',
                    buttonDecrement__medium: 'NumericStepper_buttonDecrement__medium_d1',
                    buttonIncrement__large: 'NumericStepper_buttonIncrement__large_56',
                    buttonDecrement__large: 'NumericStepper_buttonDecrement__large_63',
                    buttonIncrement__isDisabled: 'NumericStepper_buttonIncrement__isDisabled_68',
                    buttonDecrement__isDisabled: 'NumericStepper_buttonDecrement__isDisabled_d9',
                    'buttonIncrement__isActive-small': 'NumericStepper_buttonIncrement__isActive-small_2a',
                    'buttonIncrement__isActive-medium': 'NumericStepper_buttonIncrement__isActive-medium_c2',
                    'buttonIncrement__isActive-large': 'NumericStepper_buttonIncrement__isActive-large_91',
                    'buttonDecrement__isActive-small': 'NumericStepper_buttonDecrement__isActive-small_21',
                    'buttonDecrement__isActive-medium': 'NumericStepper_buttonDecrement__isActive-medium_a3',
                    'buttonDecrement__isActive-large': 'NumericStepper_buttonDecrement__isActive-large_8b',
                };
                class Zs extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.timer = null),
                            (this.validationTimer = null),
                            (this.numericalStepper = (0, a.createRef)()),
                            (this.input = (0, a.createRef)()),
                            (this.state = {
                                value: this.props.value,
                                isFocused: this.props.isFocused,
                                activeDecrement: !1,
                                activeIncrement: !1,
                            }),
                            (this.setFocusOnInput = () => {
                                this.props.isDisabled ||
                                    (this.input.current &&
                                        (this.input.current.focus(), this.setState({ isFocused: !0 })));
                            }),
                            (this.blurInput = () => {
                                this.input.current && (this.input.current.blur(), this.setState({ isFocused: !1 }));
                            }),
                            (this.componentDidMount = () => {
                                this.state.isFocused &&
                                    (this.setFocusOnInput(),
                                    setTimeout(() => {
                                        const e = this.formattedValue.length;
                                        this.input.current && this.input.current.setSelectionRange(e, e);
                                    }, 0)),
                                    document.addEventListener('click', this.handleClickOutside),
                                    document.addEventListener('mouseup', this.handleMouseUp);
                            }),
                            (this.componentWillUnmount = () => {
                                this.stop(),
                                    document.removeEventListener('click', this.handleClickOutside),
                                    document.removeEventListener('mouseup', this.handleMouseUp);
                            }),
                            (this.formatValue = (e) =>
                                this.props.currencyType ? Q.Z5.getNumberFormat(e, Q.B3.GOLD) : e.toString()),
                            (this.getValidValue = (e) => {
                                const t = Math.min(this.props.maximum, Math.max(this.props.minimum, e)),
                                    u = this.props.stepSize;
                                return Math.round(t / u) * u;
                            }),
                            (this.changeValue = (e) => {
                                e !== this.state.value && (this.setState({ value: e }), this.props.onChange(e));
                            }),
                            (this.setCursorPosition = (e, t) => {
                                this.input.current && this.input.current.setSelectionRange(e, t),
                                    setTimeout(() => {
                                        this.input.current && this.input.current.setSelectionRange(e, t);
                                    });
                            }),
                            (this.handleChange = () => {
                                this.props.isDisabled || this.updateInput();
                            }),
                            (this.updateInput = (e = 0) => {
                                const t = e === K.n.BACKSPACE,
                                    u = e === K.n.DELETE,
                                    n = this.input.current,
                                    r = n.selectionStart || 0,
                                    a = n.selectionEnd || 0;
                                let s = n.value;
                                const i = Math.max(r, a),
                                    o = i;
                                u && (s = s.substring(0, i) + s.substring(i + 1, s.length)),
                                    t && 1 === r && 1 === s.length && (s = '0');
                                const l = Number(s.trim().replace(/\D/g, '')),
                                    c = Number.isSafeInteger(l) ? l : Number.MAX_SAFE_INTEGER,
                                    _ = this.props.currencyType ? Q.Z5.getNumberFormat(c, Q.B3.GOLD) : c.toString(),
                                    m = !isNaN(Number(s.replace(' ', '')));
                                n.value = _;
                                const d = new RegExp(/\d/g);
                                let E = 0;
                                for (let e = 0; e < o; e++) {
                                    const t = s[e] || '',
                                        u = _[E] || '';
                                    if (t.match(d) || t === u) {
                                        for (; t !== _[E] && E < _.length; ) E++;
                                        E++;
                                    }
                                }
                                '' === s ? (E = 1) : m || (E = s.length),
                                    this.input.current && this.input.current.setSelectionRange(0, 0),
                                    this.setCursorPosition(E, E),
                                    this.changeValue(c),
                                    this.validationTimer && clearTimeout(this.validationTimer),
                                    (this.validationTimer = setTimeout(() => {
                                        this.getValidValue(c) !== c &&
                                            this.state.isFocused &&
                                            (this.changeValue(this.getValidValue(c)),
                                            this.setCursorPosition(0, this.formatValue(c).length));
                                    }, 1e3));
                            }),
                            (this.handleDelete = (e) => {
                                const t = e.keyCode === K.n.BACKSPACE,
                                    u = e.keyCode === K.n.DELETE,
                                    n = e.target,
                                    r = n.selectionStart,
                                    a = n.selectionEnd,
                                    s = n.value,
                                    i = r !== a,
                                    o = new RegExp(/\D/),
                                    l = t && r ? r - 1 : r || 0;
                                if (i) return;
                                let c = l;
                                const _ = o.test(s[l]);
                                if (u && _) for (; o.test(s[c]) && c < s.length; ) c++;
                                if (t && _) for (; o.test(s[c]) && c > 0; ) c--;
                                if (c !== l || (t && _))
                                    return e.preventDefault(), (c = c < 0 ? 0 : c), void this.setCursorPosition(c, c);
                                ((t && 1 === r && 1 === s.length) || u) &&
                                    (e.preventDefault(), this.updateInput(e.keyCode));
                            }),
                            (this.handleClickOutside = (e) => {
                                const t = document.activeElement;
                                this.state.isFocused &&
                                    t !== this.input.current &&
                                    null !== this.numericalStepper.current &&
                                    !this.numericalStepper.current.contains(e.target) &&
                                    this.setState({ isFocused: !1 });
                            }),
                            (this.handleBlur = () => {
                                if (this.props.isDisabled) return;
                                const e = this.getValidValue(this.state.value);
                                e !== this.state.value && this.changeValue(e);
                            }),
                            (this.handleWheel = (e) => {
                                !this.props.isDisabled &&
                                    this.state.isFocused &&
                                    (e.preventDefault(), e.deltaY < 0 ? this.decrement() : this.increment());
                            }),
                            (this.handleMouseUp = () => {
                                this.stop(), this.setState({ activeIncrement: !1, activeDecrement: !1 });
                            }),
                            (this.handleMouseLeave = () => {
                                this.stop();
                            }),
                            (this.incrementHandleMouseEnter = (e) => {
                                this.state.activeIncrement && this.incrementHandleMouseDown(e, !0),
                                    this.buttonIncrementIsDisabled || this.playHoverSound();
                            }),
                            (this.decrementHandleMouseEnter = (e) => {
                                this.state.activeDecrement && this.decrementHandleMouseDown(e, !0),
                                    this.buttonDecrementIsDisabled || this.playHoverSound();
                            }),
                            (this.handleKeyDown = (e) => {
                                if (!this.props.isDisabled) {
                                    switch (
                                        (e.keyCode in K.n &&
                                            e.keyCode !== K.n.BACKSPACE &&
                                            e.keyCode !== K.n.DELETE &&
                                            e.preventDefault(),
                                        e.keyCode)
                                    ) {
                                        case K.n.ARROW_UP:
                                        case K.n.NUM_PLUS:
                                        case K.n.PLUS:
                                            this.state.activeIncrement || this.setState({ activeIncrement: !0 }),
                                                this.increment();
                                            break;
                                        case K.n.ARROW_DOWN:
                                        case K.n.NUM_MINUS:
                                        case K.n.MINUS:
                                            this.state.activeDecrement || this.setState({ activeDecrement: !0 }),
                                                this.decrement();
                                            break;
                                        case K.n.HOME:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case K.n.END:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case K.n.ENTER:
                                            if (
                                                (e.nativeEvent.stopImmediatePropagation(),
                                                this.state.value >= this.props.maximum)
                                            ) {
                                                const e = this.formatValue(this.props.maximum).length;
                                                this.changeValue(this.props.maximum), this.setCursorPosition(0, e);
                                            }
                                            break;
                                        case K.n.PAGE_UP:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case K.n.PAGE_DOWN:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case K.n.BACKSPACE:
                                        case K.n.DELETE:
                                            this.handleDelete(e);
                                    }
                                    this.props.onKeyDown(e);
                                }
                            }),
                            (this.handleKeyUp = (e) => {
                                if (!this.props.isDisabled)
                                    switch (e.keyCode) {
                                        case K.n.ARROW_UP:
                                        case K.n.NUM_PLUS:
                                        case K.n.PLUS:
                                            this.setState({ activeIncrement: !1 });
                                            break;
                                        case K.n.ARROW_DOWN:
                                        case K.n.NUM_MINUS:
                                        case K.n.MINUS:
                                            this.setState({ activeDecrement: !1 });
                                    }
                            }),
                            (this.allowOnlyNumbers = (e) => {
                                e.which in Ks || e.preventDefault();
                            }),
                            (this.increment = () => {
                                const e = Math.min(
                                    this.getValidValue(this.state.value) + this.props.stepSize,
                                    this.props.maximum,
                                );
                                this.changeValue(e);
                            }),
                            (this.decrement = () => {
                                const e = Math.max(
                                    this.getValidValue(this.state.value) - this.props.stepSize,
                                    this.props.minimum,
                                );
                                this.changeValue(e);
                            }),
                            (this.incrementHandleMouseDown = (e, t = !1) => {
                                this.buttonIncrementIsDisabled ||
                                    (e.persist(),
                                    e.preventDefault(),
                                    this.stop(),
                                    this.setFocusOnInput(),
                                    this.state.value < this.props.maximum &&
                                        (!t && this.playClickSound(),
                                        (0 === e.button || t) &&
                                            (this.increment(),
                                            (this.timer = setTimeout(
                                                () => {
                                                    this.incrementHandleMouseDown(e, !0);
                                                },
                                                t ? 50 : 300,
                                            )),
                                            this.setState({ activeIncrement: !0 }))));
                            }),
                            (this.decrementHandleMouseDown = (e, t = !1) => {
                                this.buttonDecrementIsDisabled ||
                                    (e.persist(),
                                    e.preventDefault(),
                                    this.stop(),
                                    this.setFocusOnInput(),
                                    this.state.value > this.props.minimum &&
                                        (!t && this.playClickSound(),
                                        (0 === e.button || t) &&
                                            (this.decrement(),
                                            (this.timer = setTimeout(
                                                () => {
                                                    this.decrementHandleMouseDown(e, !0);
                                                },
                                                t ? 50 : 300,
                                            )),
                                            this.setState({ activeDecrement: !0 }))));
                            }),
                            (this.playHoverSound = () => {
                                this.props.isDisabled || ee('highlight');
                            }),
                            (this.playClickSound = () => {
                                this.props.isDisabled || ee('play');
                            }),
                            (this.stop = () => {
                                this.timer && clearTimeout(this.timer), (this.timer = null);
                            });
                    }
                    componentDidUpdate(e, t) {
                        const u = this.state,
                            n = u.value,
                            r = u.isFocused;
                        if (n !== t.value && r) {
                            const e = this.formattedValue.length,
                                t = this.input.current && this.input.current.selectionStart,
                                u = this.input.current && this.input.current.selectionEnd,
                                n = t === u ? e : t || 0;
                            0 === t && u === e
                                ? this.input.current && this.input.current.setSelectionRange(e, e)
                                : this.input.current && this.input.current.setSelectionRange(n, e);
                        }
                    }
                    componentWillReceiveProps({ value: e, isFocused: t }) {
                        e !== this.props.value && this.setState({ value: e }),
                            t !== this.props.isFocused &&
                                (this.setState({ isFocused: t }),
                                t
                                    ? (this.setFocusOnInput(), this.setCursorPosition(0, this.formattedValue.length))
                                    : this.blurInput());
                    }
                    get formattedValue() {
                        return this.props.currencyType
                            ? Q.Z5.getNumberFormat(this.state.value, Q.B3.GOLD)
                            : this.state.value.toString();
                    }
                    get buttonIncrementIsDisabled() {
                        return this.state.value >= this.props.maximum || this.props.isDisabled;
                    }
                    get buttonDecrementIsDisabled() {
                        return this.state.value <= this.props.minimum || this.props.isDisabled;
                    }
                    render() {
                        const e = this.props,
                            t = e.isDisabled,
                            u = e.size,
                            n = e.currencyType,
                            r = D()(
                                Qs.base,
                                Qs[`base__${u}`],
                                n && Qs[`base__withCurrency-${u}`],
                                t && Qs.base__isDisabled,
                                this.state.isFocused && Qs.base__isFocus,
                            ),
                            a = D()(
                                Qs.buttonIncrement,
                                Qs[`buttonIncrement__${u}`],
                                this.buttonIncrementIsDisabled && Qs.buttonIncrement__isDisabled,
                                this.state.activeIncrement &&
                                    !this.buttonIncrementIsDisabled &&
                                    Qs[`buttonIncrement__isActive-${this.props.size}`],
                            ),
                            i = D()(
                                Qs.buttonDecrement,
                                Qs[`buttonDecrement__${u}`],
                                this.buttonDecrementIsDisabled && Qs.buttonDecrement__isDisabled,
                                this.state.activeDecrement &&
                                    !this.buttonDecrementIsDisabled &&
                                    Qs[`buttonDecrement__isActive-${this.props.size}`],
                            ),
                            o = D()(
                                Qs.input,
                                t && Qs.input__disabled,
                                n && Qs.input__withCurrency,
                                n && Qs[`input__${n}-${u}`],
                                n && Qs[`input__${n}`],
                                n && t && Qs[`input__${n}-disabled`],
                            ),
                            l = D()(Qs.currencyIcon, n && Qs[`currencyIcon__${n}-${u}`]),
                            c = D()(Qs.currency, n && Qs[`currency__${n}`], n && Qs[`currency__${n}-${u}`]);
                        return s().createElement(
                            'div',
                            {
                                className: r,
                                ref: this.numericalStepper,
                                style: ((_ = this.props.width), _ ? { width: `${_}rem` } : {}),
                            },
                            s().createElement(
                                'div',
                                { className: Qs.inputContainer },
                                n &&
                                    s().createElement(
                                        'div',
                                        { className: c },
                                        s().createElement('span', { className: Qs.dummyValue }, this.formattedValue),
                                        s().createElement('span', { className: l }),
                                    ),
                                s().createElement('input', {
                                    ref: this.input,
                                    className: o,
                                    type: 'text',
                                    value: this.formattedValue,
                                    disabled: t,
                                    onWheel: this.handleWheel,
                                    onChange: this.handleChange,
                                    onKeyPress: this.allowOnlyNumbers,
                                    onKeyDown: this.handleKeyDown,
                                    onKeyUp: this.handleKeyUp,
                                    onBlur: this.handleBlur,
                                    onFocus: this.setFocusOnInput,
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: Qs.control },
                                s().createElement('div', {
                                    className: a,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.incrementHandleMouseEnter,
                                    onMouseDown: this.incrementHandleMouseDown,
                                }),
                                s().createElement('div', {
                                    className: i,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.decrementHandleMouseEnter,
                                    onMouseDown: this.decrementHandleMouseDown,
                                }),
                            ),
                        );
                        var _;
                    }
                }
                let Js;
                var ei;
                (Zs.defaultProps = {
                    value: 1,
                    stepSize: 1,
                    minimum: 0,
                    maximum: 0,
                    size: 'medium',
                    isFocused: !0,
                    isDisabled: !1,
                    onChange: () => null,
                    onKeyDown: () => null,
                }),
                    ((ei = Js || (Js = {})).backport = 'backport'),
                    (ei.unbound = 'unbound'),
                    (ei.normal = 'normal'),
                    (ei.absent = 'absent');
                const ti = 'TOOLTIP_NOT_ENOUGH_MONEY',
                    ui = R.images.gui.maps.icons.quests.bonuses,
                    ni = (0, a.memo)(({ classMix: e, iconName: t, amount: u, tooltip: n }) => {
                        const r = N().mediaSize,
                            i = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url(${(r === y.ExtraLarge ? ui.s180x135 : ui.big).$dyn(t)})`,
                                }),
                                [r, t],
                            ),
                            o = (0, a.useMemo)(
                                () =>
                                    ((e, t) =>
                                        ((e, t) => ({
                                            isEnabled: e !== Js.absent,
                                            args: t,
                                            contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                            decoratorId:
                                                e === Js.unbound
                                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow(
                                                          'resId',
                                                      )
                                                    : void 0,
                                            ignoreShowDelay: e === Js.backport,
                                            ignoreMouseClick: !0,
                                        }))(e.type, Object.assign({ id: e.id }, { tooltipID: 'TOOLTIP_BONUS' } || {})))(
                                        n,
                                    ),
                                [n],
                            ),
                            l = D()('BundleBonus_base_c2', e),
                            c = (0, a.useMemo)(() => Et(R.strings.hb_shop.common.pieces(), { number: u }), [u]),
                            _ = u > 1;
                        return s().createElement(
                            le,
                            o,
                            s().createElement(
                                'div',
                                { className: l, style: i },
                                _ && s().createElement('div', { className: 'BundleBonus_amount_b8' }, c),
                            ),
                        );
                    });
                let ri;
                !(function (e) {
                    (e.Newbie = 'newbie'), (e.Specialist = 'specialist'), (e.Meister = 'meister');
                })(ri || (ri = {}));
                const ai = ri.Newbie,
                    si = ri.Specialist,
                    ii =
                        (ri.Meister,
                        {
                            base: 'AdvancedBundleContent_base_6e',
                            icon: 'AdvancedBundleContent_icon_89',
                            icon__x5: 'AdvancedBundleContent_icon__x5_9f',
                            icon__x10: 'AdvancedBundleContent_icon__x10_82',
                            icon__x15: 'AdvancedBundleContent_icon__x15_9d',
                            shining: 'AdvancedBundleContent_shining_d8',
                            separator: 'AdvancedBundleContent_separator_7e',
                            plus: 'AdvancedBundleContent_plus_93',
                            button: 'AdvancedBundleContent_button_6d',
                            bonuses: 'AdvancedBundleContent_bonuses_c3',
                            bonus: 'AdvancedBundleContent_bonus_c7',
                            amount: 'AdvancedBundleContent_amount_60',
                            costBlock: 'AdvancedBundleContent_costBlock_83',
                            numericStepper: 'AdvancedBundleContent_numericStepper_9e',
                            currency: 'AdvancedBundleContent_currency_e1',
                        });
                function oi() {
                    return (
                        (oi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        oi.apply(this, arguments)
                    );
                }
                const li = {
                        contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                        ignoreShowDelay: !0,
                        ignoreMouseClick: !0,
                    },
                    ci = (0, a.memo)(
                        ({
                            id: e,
                            gold: t,
                            price: u,
                            order: n,
                            discount: r,
                            currencyType: i,
                            bonuses: o,
                            layout: l,
                            onBuyClicked: c,
                        }) => {
                            const _ = N().mediaSize,
                                m = l === si,
                                d = _ === y.ExtraLarge,
                                E = d ? Gs.big : Gs.small,
                                p = d ? 'medium' : 'small',
                                g = d ? 84 : 60,
                                b = (0, a.useState)(1),
                                h = b[0],
                                A = b[1],
                                f = (0, a.useCallback)(() => {
                                    c(h);
                                }, [c, h]),
                                v = (0, a.useCallback)(
                                    (e) => {
                                        e > 0 && e <= 10 && A(e);
                                    },
                                    [A],
                                ),
                                C = Et(R.strings.hb_shop.common.pieces(), { number: n.count }),
                                F = D()(ii.icon, ii[`icon__${n.type}`]),
                                B = h * u,
                                w = 0 !== r,
                                S = B <= t,
                                x = (0, a.useMemo)(
                                    () =>
                                        Object.assign(
                                            {},
                                            li,
                                            0 === r
                                                ? {
                                                      isEnabled: !S,
                                                      args: {
                                                          bundleID: e,
                                                          currency: Vs.gold,
                                                          value: B - t,
                                                          tooltipID: ti,
                                                      },
                                                  }
                                                : {
                                                      isEnabled: !0,
                                                      args: {
                                                          bundleID: e,
                                                          currency: Vs.gold,
                                                          tooltipID: 'TOOLTIP_MONEY',
                                                      },
                                                  },
                                        ),
                                    [S, t, B, r, e],
                                ),
                                k = (0, a.useMemo)(
                                    () => ({
                                        contentId: R.views.historical_battles.lobby.tooltips.OrderTooltip('resId'),
                                        args: { orderType: n.type, showStatus: !0 },
                                    }),
                                    [n.type],
                                ),
                                T = (0, a.useMemo)(() => Math.min(10, Math.max(1, Math.floor(t / u))), [t, u]),
                                L = (0, a.useMemo)(() => T <= 0 || 0 === h, [T, h]);
                            return s().createElement(
                                'div',
                                { className: ii.base },
                                s().createElement(
                                    'div',
                                    { className: ii.bonuses },
                                    o.map((e) => s().createElement(ni, oi({ key: e.iconName, classMix: ii.bonus }, e))),
                                ),
                                s().createElement('div', { className: ii.shining }),
                                s().createElement(le, k, s().createElement('div', { className: F })),
                                s().createElement('div', { className: ii.separator }),
                                s().createElement('div', { className: ii.plus }),
                                s().createElement('div', { className: ii.amount }, C),
                                s().createElement(
                                    'div',
                                    { className: ii.costBlock },
                                    m &&
                                        s().createElement(
                                            'div',
                                            { className: ii.numericStepper },
                                            s().createElement(Zs, {
                                                width: g,
                                                size: p,
                                                minimum: 1,
                                                maximum: T,
                                                isFocused: !1,
                                                onChange: v,
                                                isDisabled: L,
                                            }),
                                        ),
                                    s().createElement(
                                        le,
                                        x,
                                        s().createElement(
                                            'div',
                                            { className: ii.currency },
                                            s().createElement(Ys, {
                                                size: E,
                                                type: i,
                                                value: B,
                                                isDiscount: w,
                                                isEnough: S,
                                            }),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: ii.button },
                                    s().createElement(
                                        zs,
                                        { size: Us.medium, type: $s.main, disabled: !S, onClick: f },
                                        R.strings.hb_shop.common.button.buy(),
                                    ),
                                ),
                            );
                        },
                    ),
                    _i = {
                        base: 'NewbieBundleContent_base_17',
                        icon: 'NewbieBundleContent_icon_3b',
                        icon__x5: 'NewbieBundleContent_icon__x5_1b',
                        icon__x10: 'NewbieBundleContent_icon__x10_5d',
                        icon__x15: 'NewbieBundleContent_icon__x15_f0',
                        shining: 'NewbieBundleContent_shining_07',
                        button: 'NewbieBundleContent_button_7e',
                        costBlock: 'NewbieBundleContent_costBlock_f7',
                        numericStepper: 'NewbieBundleContent_numericStepper_0a',
                        currency: 'NewbieBundleContent_currency_cb',
                    },
                    mi = (0, a.memo)(({ credits: e, price: t, order: u, onBuyClicked: n }) => {
                        const r = N().mediaSize === y.ExtraLarge,
                            i = r ? Gs.big : Gs.small,
                            o = r ? 'medium' : 'small',
                            l = r ? 84 : 60,
                            c = (0, a.useState)(1),
                            _ = c[0],
                            m = c[1],
                            d = (0, a.useCallback)(() => {
                                n(_);
                            }, [n, _]),
                            E = (0, a.useCallback)(
                                (e) => {
                                    e > 0 && e <= 10 && m(e);
                                },
                                [m],
                            ),
                            p = _ * t,
                            g = p - e <= 0,
                            b = !g,
                            h = (0, a.useMemo)(() => Math.min(10, Math.max(1, Math.floor(e / t))), [e, t]),
                            A = (0, a.useMemo)(() => h <= 0 || 0 === _, [h, _]),
                            f = (0, a.useMemo)(
                                () => ({
                                    isEnabled: b,
                                    args: { currency: Vs.credits, value: p - e, tooltipID: ti },
                                    contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                    ignoreShowDelay: !0,
                                    ignoreMouseClick: !0,
                                }),
                                [b, p, e],
                            ),
                            v = (0, a.useMemo)(
                                () => ({
                                    contentId: R.views.historical_battles.lobby.tooltips.OrderTooltip('resId'),
                                    args: { orderType: u.type, showStatus: !0 },
                                }),
                                [u],
                            ),
                            C = D()(_i.icon, _i[`icon__${u.type}`]);
                        return s().createElement(
                            'div',
                            { className: _i.base },
                            s().createElement('div', { className: _i.shining }),
                            s().createElement(le, v, s().createElement('div', { className: C })),
                            s().createElement(
                                'div',
                                { className: _i.costBlock },
                                s().createElement(
                                    'div',
                                    { className: _i.numericStepper },
                                    s().createElement(Zs, {
                                        width: l,
                                        size: o,
                                        minimum: 1,
                                        maximum: h,
                                        isFocused: !1,
                                        onChange: E,
                                        isDisabled: A,
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: _i.currency },
                                    s().createElement(Ys, { size: i, type: Vs.credits, value: p, isEnough: g }),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: _i.button },
                                s().createElement(
                                    le,
                                    f,
                                    s().createElement(
                                        'div',
                                        null,
                                        s().createElement(
                                            zs,
                                            { size: Us.medium, type: $s.primary, disabled: b, onClick: d },
                                            R.strings.hb_shop.common.button.buy(),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    di = ['idx', 'gold', 'credits', 'onBuyClicked'];
                function Ei() {
                    return (
                        (Ei =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ei.apply(this, arguments)
                    );
                }
                const pi = (0, a.memo)((e) => {
                        let t = e.idx,
                            u = e.gold,
                            n = e.credits,
                            r = e.onBuyClicked,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, di);
                        const o = i.title,
                            l = i.discount,
                            c = i.layout,
                            _ = i.buyCount,
                            m = (0, a.useMemo)(
                                () => ({
                                    value: s().createElement(ju, { className: 'Bundle_buyCount_83', text: String(_) }),
                                }),
                                [_],
                            ),
                            d = 0 !== l,
                            E = _ > 0,
                            p = c === ai,
                            g = c !== ai,
                            b = (0, a.useCallback)(
                                (e = 1) => {
                                    r(t, e);
                                },
                                [t, r],
                            );
                        return s().createElement(
                            'div',
                            { className: 'Bundle_base_00' },
                            d &&
                                s().createElement(
                                    'div',
                                    { className: 'Bundle_discount_33' },
                                    s().createElement(ju, { className: 'Bundle_discountText_10', text: `-${l}%` }),
                                ),
                            s().createElement(ju, { className: 'Bundle_title_aa', text: o }),
                            p && s().createElement(mi, Ei({ credits: n, onBuyClicked: b }, i)),
                            g && s().createElement(ci, Ei({ gold: u, onBuyClicked: b }, i)),
                            E &&
                                s().createElement(ju, {
                                    text: R.strings.hb_shop.boosters_shop.bundle.buyCount(),
                                    format: { binding: m },
                                    className: 'Bundle_footer_e8',
                                }),
                        );
                    }),
                    gi = {
                        base: 'App_base_c2',
                        windowIn: 'App_windowIn_a6',
                        bg: 'App_bg_c7',
                        vignette: 'App_vignette_63',
                        content: 'App_content_af',
                        title: 'App_title_a5',
                        subTitle: 'App_subTitle_61',
                        list: 'App_list_0f',
                        bundle: 'App_bundle_bb',
                        header: 'App_header_01',
                        footer: 'App_footer_8b',
                        footer_icon: 'App_footer_icon_7b',
                        info_button: 'App_info_button_b3',
                        title_icon: 'App_title_icon_46',
                    };
                function bi() {
                    return (
                        (bi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        bi.apply(this, arguments)
                    );
                }
                const hi = R.strings.hb_shop.boosters_shop,
                    Ai = { contentId: R.views.historical_battles.lobby.tooltips.HbCoinTooltip('resId') },
                    fi = (0, Y.observer)(() => {
                        const e = gs(),
                            t = e.model,
                            u = e.controls,
                            n = t.root.get(),
                            r = n.gold,
                            i = n.credits,
                            o = t.computes,
                            l = 2 === da(),
                            c = N().mediaSize,
                            _ = D()(gi.base, l && gi.base__scaled),
                            m = o.getFrontName(),
                            d = (0, a.useMemo)(() => ({ backgroundImage: `url(${ta(c, m)})` }), [c, m]),
                            E = (0, a.useCallback)(
                                (e, t) => {
                                    u.onBundleBuyClick(e, t);
                                },
                                [u],
                            );
                        return s().createElement(
                            'div',
                            { className: _ },
                            s().createElement('div', { className: gi.bg, style: d }),
                            s().createElement('div', { className: gi.vignette }),
                            s().createElement(
                                'div',
                                { className: gi.content },
                                s().createElement(
                                    'div',
                                    { className: gi.header },
                                    s().createElement(
                                        'div',
                                        { className: gi.title },
                                        s().createElement(ju, { text: hi.title() }),
                                        s().createElement(
                                            zs,
                                            {
                                                type: 'ghost',
                                                size: 'medium',
                                                onClick: u.onInfoClick,
                                                mixClass: gi.info_button,
                                            },
                                            s().createElement('div', { className: gi.title_icon }),
                                        ),
                                    ),
                                    s().createElement(ju, { className: gi.subTitle, text: hi.subtitle() }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: gi.list },
                                    o
                                        .getBundles()
                                        .map((e, t) =>
                                            s().createElement(
                                                'div',
                                                { key: t, className: gi.bundle },
                                                s().createElement(
                                                    pi,
                                                    bi({ idx: t, gold: r, credits: i, onBuyClicked: E }, e),
                                                ),
                                            ),
                                        ),
                                ),
                                s().createElement(Os, {
                                    text: hi.footer(),
                                    binding: {
                                        icon: s().createElement(
                                            le,
                                            Ai,
                                            s().createElement('div', { className: gi.footer_icon }),
                                        ),
                                    },
                                    classMix: gi.footer,
                                    justifyContent: fs.Center,
                                }),
                            ),
                        );
                    }),
                    vi = () =>
                        s().createElement(
                            ps,
                            { options: { context: 'model.orderModel' } },
                            s().createElement(fi, null),
                        ),
                    Ci = { Progress: De.Progress, Division: De.Division, Order: De.Order },
                    Di = {
                        [Ci.Progress]: s().createElement(Qr, null),
                        [Ci.Division]: s().createElement(ds, null),
                        [Ci.Order]: s().createElement(vi, null),
                    },
                    Fi = R.images.historical_battles.gui.maps.icons.hangar.hbMetaView.tabs,
                    Bi = R.strings.hb_lobby.hbMetaView.label,
                    yi = [
                        {
                            id: 1,
                            items: [
                                { id: Ci.Progress, icon: Fi.progress64() },
                                { id: Ci.Division, icon: Fi.division64() },
                                { id: Ci.Order, icon: Fi.order64() },
                            ],
                            groupClassNames: { group: 'tabs_group_ab' },
                        },
                    ],
                    wi = { [Ci.Progress]: Bi.progress(), [Ci.Division]: Bi.division(), [Ci.Order]: Bi.order() },
                    Si = ({ id: e, isActive: t }) => {
                        const u = e;
                        return s().createElement(
                            'div',
                            { className: 'AdditionTabsContent_base_59', key: e },
                            s().createElement(
                                'div',
                                {
                                    className: D()(
                                        'AdditionTabsContent_tab_d8',
                                        t && 'AdditionTabsContent_tab__active_ed',
                                    ),
                                },
                                wi[u],
                            ),
                        );
                    },
                    xi = ({ children: e, id: t }) =>
                        s().createElement(
                            le,
                            {
                                contentId: R.views.historical_battles.lobby.tooltips.HbSimpleTooltipView('resId'),
                                args: { id: t },
                                ignoreShowDelay: !0,
                            },
                            e,
                        ),
                    Ni = 'App_hidden_95',
                    ki = (0, Y.observer)(() => {
                        const e = q(),
                            t = e.model,
                            u = e.controls,
                            n = t.root.get().tabId,
                            r = N(),
                            i = (0, a.useState)(!1),
                            o = i[0],
                            l = i[1],
                            c = (0, a.useCallback)(
                                (e) => {
                                    u.onTabChange(e);
                                },
                                [u],
                            ),
                            _ = (0, a.useCallback)(() => {
                                (n !== Ci.Progress && n !== Ci.Division) || !o
                                    ? u.onClose()
                                    : dispatchEvent(new Event(Qu));
                            }, [o, n, u]);
                        J(K.n.ESCAPE, _),
                            (0, a.useEffect)(() => {
                                const e = () => {
                                        l(!0);
                                    },
                                    t = () => {
                                        l(!1);
                                    };
                                return (
                                    addEventListener(Ku, e),
                                    addEventListener(Qu, t),
                                    () => {
                                        removeEventListener(Ku, e), removeEventListener(Qu, t);
                                    }
                                );
                            }, []);
                        const m = D()('App_base_66', o && 'App_base__divisionSelected_c6');
                        return s().createElement(
                            'div',
                            { className: m },
                            s().createElement(
                                'div',
                                { className: 'App_buttonInfo_62' },
                                s().createElement(
                                    de,
                                    { body: R.strings.hb_lobby.hangar.infoBtn.body() },
                                    s().createElement(ae, {
                                        caption: R.strings.menu.viewHeader.aboutBtn.label(),
                                        type: 'info',
                                        side: 'left',
                                        onClick: u.onAboutClicked,
                                    }),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: 'App_buttonClose_79' },
                                s().createElement(ae, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: u.onClose,
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: 'App_content_6e' },
                                s().createElement(a.Suspense, { fallback: s().createElement('div', null) }, Di[n]),
                            ),
                            s().createElement(
                                'div',
                                { className: 'App_tabs_5c' },
                                s().createElement(Ce, {
                                    tabs: yi,
                                    active: n,
                                    onClick: c,
                                    className: 'App_verticalTabs_51',
                                    additionContent: r.mediaSize >= y.Medium ? Si : void 0,
                                    WrapperElement: xi,
                                    classNames: {
                                        tab: 'App_tab_09',
                                        icon: 'App_icon_21',
                                        highlight: 'App_highlight_d6',
                                        frame: 'App_frame_2c',
                                        border: 'App_border_78',
                                        borderBottom: Ni,
                                        arrow: Ni,
                                    },
                                }),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    o().render(
                        s().createElement(H, null, s().createElement(j, null, s().createElement(ki, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e].call(u.exports, u, u.exports, __webpack_require__), u.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, n) => {
            if (!t) {
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, u, n] = deferred[o], a = !0, s = 0; s < t.length; s++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(o--, 1);
                        var i = u();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, u, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (() => {
            var e = { 297: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        r,
                        [a, s, i] = u,
                        o = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (t && t(u); o < a.length; o++)
                        (r = a[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(1730));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
