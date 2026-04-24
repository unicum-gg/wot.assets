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
            527: (e, u, t) => {
                'use strict';
                (t.r(u), t.d(u, { mouse: () => o, onResize: () => n }));
                var a = t(2472),
                    r = t(1176);
                const n = (0, a.E)('clientResized'),
                    s = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    o = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, r.R)(!0);
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
                                : (0, r.R)(!1);
                        }
                        const n = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const n = `mouse${u}`,
                                            o = s[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(n, i),
                                            a(),
                                            () => {
                                                r &&
                                                    (o(),
                                                    window.removeEventListener(n, i),
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
                        return Object.assign({}, n, {
                            disable() {
                                ((e.enabled = !1), a());
                            },
                            enable() {
                                ((e.enabled = !0), a());
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
            5959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => n,
                        getSize: () => r,
                        graphicsQuality: () => s,
                    }));
                var a = t(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
            },
            2472: (e, u, t) => {
                'use strict';
                function a(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => a });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var a = t(5959);
                const r = { view: t(7641), client: a };
            },
            3722: (e, u, t) => {
                'use strict';
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => a }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var a = t(2472);
                const r = {
                    onTextureFrozen: (0, a.E)('self.onTextureFrozen'),
                    onTextureReady: (0, a.E)('self.onTextureReady'),
                    onDomBuilt: (0, a.E)('self.onDomBuilt'),
                    onLoaded: (0, a.E)('self.onLoaded'),
                    onDisplayChanged: (0, a.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, a.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, a.E)('children.onAdded'),
                        onLoaded: (0, a.E)('children.onLoaded'),
                        onRemoved: (0, a.E)('children.onRemoved'),
                        onAttached: (0, a.E)('children.onAttached'),
                        onTextureReady: (0, a.E)('children.onTextureReady'),
                        onRequestPosition: (0, a.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => f,
                        events: () => n.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => b,
                        getScale: () => F,
                        getSize: () => E,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => h,
                        isFocused: () => p,
                        pxToRem: () => D,
                        remToPx: () => g,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => S,
                    }));
                var a = t(3722),
                    r = t(6112),
                    n = t(6538),
                    s = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function d(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: g(u.x), y: g(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function B() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    w = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => n });
                const a = ['args'],
                    r = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, a);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    n = {
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
            5521: (e, u, t) => {
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
                            (e[(e.KEY_0 = 48)] = 'KEY_0'),
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
                            (e[(e.PERIOD = 190)] = 'PERIOD'));
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
            3368: () => {
                (!(function () {
                    let e,
                        u,
                        t,
                        a,
                        r,
                        n,
                        s,
                        o = -1;
                    (document.addEventListener('mousedown', (t) => {
                        (document.getSelection().empty(),
                            t.target.select &&
                                -1 === o &&
                                ((e = t.target), (u = e.getBoundingClientRect()), e.setSelectionRange(0, 0)));
                    }),
                        document.addEventListener('mousemove', (t) => {
                            if ((-1 === o && t.target.select && t.target === e && (o = e.selectionStart), o > -1)) {
                                const a = Math.min(Math.max(t.x, u.left), u.right),
                                    r = Math.min(Math.max(t.y, u.top), u.bottom),
                                    n = document.createEvent('MouseEvent');
                                (n.initMouseEvent('mousedown', !0, !0, null, 1, a, r, a, r, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(n));
                                const s = e.selectionEnd;
                                s > o ? e.setSelectionRange(o, s, 'forward') : e.setSelectionRange(s, o, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            ((e = null), (o = -1));
                        }),
                        document.addEventListener('dblclick', (e) => {
                            e.target.select &&
                                (document.getSelection().empty(),
                                (t = e.target),
                                (a = e.target.value),
                                (r = t.selectionStart),
                                (n = -1 !== a.lastIndexOf(' ', r) ? a.lastIndexOf(' ', r) + 1 : 0),
                                (s = -1 !== a.indexOf(' ', r) ? a.indexOf(' ', r) : a.length),
                                t.setSelectionRange(n, s, 'forward'));
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
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var a = t(3138);
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
                        const n = a.O.view.addModelObserver(e, t, r);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(n) : (this._views[t] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
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
                const n = r;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4179);
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
            4179: (e, u, t) => {
                'use strict';
                t.d(u, { B3: () => c, Z5: () => s, B0: () => i, ry: () => C, Eu: () => p });
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
                var n = t(1358);
                const s = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let i;
                var l;
                (((l = i || (i = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE'));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    A = t(3138);
                const F = ['args'];
                function D(e, u, t, a, r, n, s) {
                    try {
                        var o = e[n](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(a, r);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        var n = e.apply(u, t);
                                        function s(e) {
                                            D(n, a, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            D(n, a, r, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    p = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, F);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, n, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    h = () => B(i.CLOSE),
                    v = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var b = t(7572);
                const f = r.instance,
                    w = {
                        DataTracker: n.Z,
                        ViewModel: b.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: _,
                        TimeFormatType: E,
                        DateFormatType: m,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => B(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => B(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, r = R.invalid('resId'), n) => {
                            const s = A.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                E = o.height,
                                m = {
                                    x: A.O.view.pxToRem(l) + s.x,
                                    y: A.O.view.pxToRem(c) + s.y,
                                    width: A.O.view.pxToRem(_),
                                    height: A.O.view.pxToRem(E),
                                };
                            B(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: g(m),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => v(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            v(e, h);
                        },
                        handleViewEvent: B,
                        onBindingsReady: C,
                        onLayoutReady: p,
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
                        ClickOutsideManager: f,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = w;
            },
            8722: (e, u, t) => {
                'use strict';
                var a = t(6179),
                    r = t.n(a);
                const n = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var s = t(3138);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var i;
                function l(e, u, t) {
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
                        n = Math.min(a, r);
                    return {
                        extraLarge: n === t.extraLarge.weight,
                        large: n === t.large.weight,
                        medium: n === t.medium.weight,
                        small: n === t.small.weight,
                        extraSmall: n === t.extraSmall.weight,
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
                })(i || (i = {}));
                const c = s.O.client.getSize('rem'),
                    _ = c.width,
                    E = c.height,
                    m = Object.assign({ width: _, height: E }, l(_, E, o)),
                    d = (0, a.createContext)(m),
                    A = ['children'],
                    F = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, A);
                        const r = (0, a.useContext)(d),
                            s = r.extraLarge,
                            o = r.large,
                            i = r.medium,
                            l = r.small,
                            c = r.extraSmall,
                            _ = r.extraLargeWidth,
                            E = r.largeWidth,
                            m = r.mediumWidth,
                            F = r.smallWidth,
                            D = r.extraSmallWidth,
                            g = r.extraLargeHeight,
                            C = r.largeHeight,
                            p = r.mediumHeight,
                            B = r.smallHeight,
                            h = r.extraSmallHeight,
                            v = { extraLarge: g, large: C, medium: p, small: B, extraSmall: h };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && s) return u;
                            if (t.large && o) return u;
                            if (t.medium && i) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && _) return n(u, t, v);
                            if (t.largeWidth && E) return n(u, t, v);
                            if (t.mediumWidth && m) return n(u, t, v);
                            if (t.smallWidth && F) return n(u, t, v);
                            if (t.extraSmallWidth && D) return n(u, t, v);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && g) return u;
                                if (t.largeHeight && C) return u;
                                if (t.mediumHeight && p) return u;
                                if (t.smallHeight && B) return u;
                                if (t.extraSmallHeight && h) return u;
                            }
                        }
                        return null;
                    };
                ((F.defaultProps = {
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
                    (0, a.memo)(F));
                const D = (0, a.memo)(({ children: e }) => {
                    const u = (0, a.useContext)(d),
                        t = (0, a.useState)(u),
                        n = t[0],
                        i = t[1],
                        c = (0, a.useCallback)((e, u) => {
                            const t = s.O.view.pxToRem(e),
                                a = s.O.view.pxToRem(u);
                            i(Object.assign({ width: t, height: a }, l(t, a, o)));
                        }, []);
                    (((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', c);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', c), [c]));
                    const _ = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                    return r().createElement(d.Provider, { value: _ }, e);
                });
                var g = t(6483),
                    C = t.n(g),
                    p = t(926),
                    B = t.n(p);
                let h, v, b;
                (!(function (e) {
                    ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                })(h || (h = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                    })(v || (v = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge'));
                    })(b || (b = {})));
                const f = () => {
                        const e = (0, a.useContext)(d),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return h.ExtraLarge;
                                    case e.large:
                                        return h.Large;
                                    case e.medium:
                                        return h.Medium;
                                    case e.small:
                                        return h.Small;
                                    case e.extraSmall:
                                        return h.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), h.ExtraSmall);
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return v.ExtraLarge;
                                    case e.largeWidth:
                                        return v.Large;
                                    case e.mediumWidth:
                                        return v.Medium;
                                    case e.smallWidth:
                                        return v.Small;
                                    case e.extraSmallWidth:
                                        return v.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), v.ExtraSmall);
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return b.ExtraLarge;
                                    case e.largeHeight:
                                        return b.Large;
                                    case e.mediumHeight:
                                        return b.Medium;
                                    case e.smallHeight:
                                        return b.Small;
                                    case e.extraSmallHeight:
                                        return b.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), b.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    w = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const y = {
                        [v.ExtraSmall]: '',
                        [v.Small]: B().SMALL_WIDTH,
                        [v.Medium]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH}`,
                        [v.Large]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH} ${B().EXTRA_LARGE_WIDTH}`,
                    },
                    x = {
                        [b.ExtraSmall]: '',
                        [b.Small]: B().SMALL_HEIGHT,
                        [b.Medium]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT}`,
                        [b.Large]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT}`,
                        [b.ExtraLarge]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT} ${B().EXTRA_LARGE_HEIGHT}`,
                    },
                    P = {
                        [h.ExtraSmall]: '',
                        [h.Small]: B().SMALL,
                        [h.Medium]: `${B().SMALL} ${B().MEDIUM}`,
                        [h.Large]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE}`,
                        [h.ExtraLarge]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE} ${B().EXTRA_LARGE}`,
                    },
                    T = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, w);
                        const n = f(),
                            s = n.mediaWidth,
                            o = n.mediaHeight,
                            i = n.mediaSize;
                        return r().createElement('div', S({ className: C()(t, y[s], x[o], P[i]) }, a), u);
                    },
                    N = ['children'],
                    M = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, N);
                        return r().createElement(D, null, r().createElement(T, t, u));
                    };
                var L = t(493),
                    k = t.n(L);
                let O;
                function I(e) {
                    engine.call('PlaySound', e);
                }
                !(function (e) {
                    ((e.Vehicle = 'vehicle'),
                        (e.Bundle = 'bundle'),
                        (e.Other = 'other'),
                        (e.Maintain = 'maintain'),
                        (e.Customization = 'customization'),
                        (e.EconomicBooster = 'economicBooster'));
                })(O || (O = {}));
                const H = {
                        playHighlight() {
                            I('highlight');
                        },
                        playClick() {
                            I('play');
                        },
                        playYes() {
                            I('yes1');
                        },
                    },
                    U = {
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
                    G = [
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
                function W() {
                    return (
                        (W =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        W.apply(this, arguments)
                    );
                }
                class $ extends r().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && I(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && I(this.props.soundClick));
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                (e && e(u), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            a = e.goto,
                            n = e.side,
                            s = e.type,
                            o = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            E =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(e, G)),
                            m = C()(U.base, U[`base__${s}`], U[`base__${n}`], null == o ? void 0 : o.base),
                            d = C()(U.icon, U[`icon__${s}`], U[`icon__${n}`], null == o ? void 0 : o.icon),
                            A = C()(U.glow, null == o ? void 0 : o.glow),
                            F = C()(U.caption, U[`caption__${s}`], null == o ? void 0 : o.caption),
                            D = C()(U.goto, null == o ? void 0 : o.goto);
                        return r().createElement(
                            'div',
                            W(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== s && r().createElement('div', { className: U.shine }),
                            r().createElement('div', { className: d }, r().createElement('div', { className: A })),
                            r().createElement('div', { className: F }, u),
                            a && r().createElement('div', { className: D }, a),
                        );
                    }
                }
                $.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var V = t(5521),
                    X = t(4179);
                const j = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function q(e = V.n.NONE, u = j, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== V.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (s.O.view.isEventHandled()) return;
                                (s.O.view.setEventHandled(), u(a), t && a.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                var Y = t(3282);
                const z = {
                        base: 'Preview_base_1f',
                        base__hovered: 'Preview_base__hovered_ee',
                        icon: 'Preview_icon_f3',
                        icon__small: 'Preview_icon__small_a1',
                        icon__normal: 'Preview_icon__normal_5c',
                        base__mouseDown: 'Preview_base__mouseDown_d0',
                        label: 'Preview_label_2e',
                        base__visibleLabel: 'Preview_base__visibleLabel_92',
                    },
                    K = [
                        'label',
                        'isVisibleLabel',
                        'autofocus',
                        'soundHover',
                        'soundClick',
                        'size',
                        'classNames',
                        'onClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'onFocus',
                        'onBlur',
                    ];
                function Q() {
                    return (
                        (Q =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Q.apply(this, arguments)
                    );
                }
                let Z;
                !(function (e) {
                    ((e.SMALL = 'small'), (e.NORMAL = 'normal'));
                })(Z || (Z = {}));
                const J = (0, a.memo)((e) => {
                    let u = e.label,
                        t = e.isVisibleLabel,
                        n = void 0 !== t && t,
                        s = e.autofocus,
                        o = void 0 !== s && s,
                        i = e.soundHover,
                        l = void 0 === i ? 'highlight' : i,
                        c = e.soundClick,
                        _ = void 0 === c ? 'play' : c,
                        E = e.size,
                        m = void 0 === E ? Z.NORMAL : E,
                        d = e.classNames,
                        A = e.onClick,
                        F = e.onMouseEnter,
                        D = e.onMouseLeave,
                        g = e.onMouseDown,
                        p = e.onMouseUp,
                        B = e.onFocus,
                        h = e.onBlur,
                        v = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, K);
                    const b = (0, a.useState)(!1),
                        f = b[0],
                        w = b[1],
                        S = (0, a.useState)(!1),
                        y = S[0],
                        R = S[1],
                        x = (0, a.useState)(o),
                        P = x[0],
                        T = x[1],
                        N = (0, a.useRef)(null),
                        M = (0, a.useCallback)(() => {
                            N.current && (N.current.focus(), T(!0));
                        }, []),
                        L = (0, a.useCallback)(
                            (e) => {
                                P && null !== N.current && !N.current.contains(e.target) && T(!1);
                            },
                            [P],
                        );
                    ((0, a.useEffect)(
                        () => (
                            document.addEventListener('mousedown', L),
                            () => {
                                document.removeEventListener('mousedown', L);
                            }
                        ),
                        [L],
                    ),
                        (0, a.useEffect)(() => {
                            T(o);
                        }, [o]));
                    const k = (0, a.useCallback)(
                            (e) => {
                                A && A(e);
                            },
                            [A],
                        ),
                        O = (0, a.useCallback)(
                            (e) => {
                                (w(!0), g && g(e), _ && I(_), o && M());
                            },
                            [o, g, M, _],
                        ),
                        H = (0, a.useCallback)(
                            (e) => {
                                (w(!1), p && p(e));
                            },
                            [p],
                        ),
                        U = (0, a.useCallback)(
                            (e) => {
                                (F && F(e), l && I(l), R(!0));
                            },
                            [F, l],
                        ),
                        G = (0, a.useCallback)(
                            (e) => {
                                (w(!1), R(!1), D && D(e));
                            },
                            [D],
                        ),
                        W = (0, a.useCallback)(
                            (e) => {
                                (T(!0), B && B(e));
                            },
                            [B],
                        ),
                        $ = (0, a.useCallback)(
                            (e) => {
                                (T(!1), h && h(e));
                            },
                            [h],
                        ),
                        V = C()(
                            z.base,
                            n && z.base__visibleLabel,
                            f && z.base__mouseDown,
                            y && z.base__hovered,
                            P && z.base__focused,
                            null == d ? void 0 : d.base,
                        ),
                        X = C()(z.icon, z[`icon__${m}`], null == d ? void 0 : d.icon),
                        j = C()(z.label, null == d ? void 0 : d.label);
                    return r().createElement(
                        'div',
                        Q(
                            {
                                ref: N,
                                className: V,
                                onClick: k,
                                onMouseEnter: U,
                                onMouseLeave: G,
                                onMouseDown: O,
                                onMouseUp: H,
                                onFocus: W,
                                onBlur: $,
                            },
                            v,
                        ),
                        r().createElement('div', { className: X }),
                        r().createElement('div', { className: j }, u),
                    );
                });
                let ee, ue, te, ae, re, ne, se, oe;
                (!(function (e) {
                    ((e.MainView = 'mainView'), (e.VehiclePreview = 'vehiclePreview'));
                })(ee || (ee = {})),
                    (function (e) {
                        ((e.BeforeProgression = 'beforeProgression'),
                            (e.Active = 'active'),
                            (e.PurchaseStage = 'purchaseStage'),
                            (e.Completed = 'completed'),
                            (e.Disabled = 'disabled'),
                            (e.Intro = 'intro'));
                    })(ue || (ue = {})),
                    (function (e) {
                        ((e[(e.Disabled = 0)] = 'Disabled'), (e[(e.Active = 1)] = 'Active'));
                    })(te || (te = {})),
                    (function (e) {
                        ((e[(e.EmptyRewards = 0)] = 'EmptyRewards'),
                            (e[(e.ReadyRewards = 1)] = 'ReadyRewards'),
                            (e[(e.AnimatedRewards = 2)] = 'AnimatedRewards'));
                    })(ae || (ae = {})),
                    (function (e) {
                        ((e[(e.Progress = 0)] = 'Progress'),
                            (e[(e.Quests = 1)] = 'Quests'),
                            (e[(e.Shop = 2)] = 'Shop'));
                    })(re || (re = {})),
                    (function (e) {
                        ((e[(e.Keyboard = 0)] = 'Keyboard'), (e[(e.Mouse = 1)] = 'Mouse'));
                    })(ne || (ne = {})),
                    (function (e) {
                        ((e[(e.Tab = 0)] = 'Tab'),
                            (e[(e.Chapter = 1)] = 'Chapter'),
                            (e[(e.ShopInfo = 2)] = 'ShopInfo'),
                            (e[(e.Step = 3)] = 'Step'));
                    })(se || (se = {})),
                    (function (e) {
                        ((e[(e.Hidden = 0)] = 'Hidden'), (e[(e.Tokens = 1)] = 'Tokens'), (e[(e.Coins = 2)] = 'Coins'));
                    })(oe || (oe = {})));
                const ie = [
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
                function le(e) {
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
                const ce = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: X.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    _e = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            E = void 0 !== _ && _,
                            m = e.decoratorId,
                            d = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            g = void 0 === D ? 0 : D,
                            C = e.onShow,
                            p = e.onHide,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, ie);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, a.useMemo)(
                                () =>
                                    g ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            a = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (a = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: a }
                                        );
                                    })().resId,
                                [g],
                            ),
                            b = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (ce(t, d, { isMouseEvent: !0, on: !0, arguments: le(r) }, v),
                                    C && C(),
                                    (h.current.isVisible = !0));
                            }, [t, d, r, v, C]),
                            f = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        ce(t, d, { on: !1 }, v),
                                        h.current.isVisible && p && p(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, d, v, p]),
                            w = (0, a.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && f();
                            }, [F, f]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        (window.removeEventListener('mouseleave', f), f());
                                    }
                                ),
                                [f],
                            ),
                            F
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((h.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                          n && n(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (f(), null == s || s(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === E && f(), null == i || i(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === E && f(), null == o || o(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          B,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    };
                let Ee, me, de, Ae, Fe, De, ge;
                var Ce;
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
                        (e.Currency = 'currency'),
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
                        (e.LootBoxToken = 'lootBoxToken'),
                        (e.GoldenTicket = 'birthday2025_golden_ticket'),
                        (e.PostStamp = 'giftsystem_4_stamp'),
                        (e.Quests = 'quests'),
                        (e.ArmoryCoin = 'armory_coin'),
                        (e.PremiumPlusUniversal = 'premium_plus_universal'),
                        (e.DogTagType = 'dogTagComponents'));
                })(Ee || (Ee = {})),
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
                            (e.RankedDailyBattles = 'rankedDailyBattles'),
                            (e.RankedBonusBattles = 'rankedBonusBattles'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BattleAchievement = 'dossier_achievement'));
                    })(me || (me = {})),
                    ((Ce = de || (de = {})).Big = 'big'),
                    (Ce.Small = 'small'),
                    (Ce.Mini = 'mini'),
                    (Ce.S600x450 = 's600x450'),
                    (Ce.S400x300 = 's400x300'),
                    (Ce.S296x222 = 's296x222'),
                    (Ce.S232x174 = 's232x174'),
                    (Ce.S180x135 = 's180x135'),
                    (Ce.S128x100 = 's128x100'),
                    (Ce.S80x80 = 's80x80'),
                    (Ce.S48x48 = 's48x48'),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(Ae || (Ae = {})),
                    (function (e) {
                        ((e.BATTLE_BOOSTER = 'battleBooster'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                    })(Fe || (Fe = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(De || (De = {})),
                    (function (e) {
                        ((e.BATTLE_BOOSTER = 'battleBooster'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                    })(ge || (ge = {})));
                class pe extends r().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? X.B3.GOLD : X.B3.INTEGRAL;
                        const u = X.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                pe.defaultProps = { format: 'integral' };
                const Be = [
                        Ee.Items,
                        Ee.Equipment,
                        Ee.Xp,
                        Ee.XpFactor,
                        Ee.Blueprints,
                        Ee.BlueprintsAny,
                        Ee.Goodies,
                        Ee.Berths,
                        Ee.Slots,
                        Ee.Tokens,
                        Ee.CrewSkins,
                        Ee.CrewBooks,
                        Ee.Customizations,
                        Ee.CreditsFactor,
                        Ee.TankmenXp,
                        Ee.TankmenXpFactor,
                        Ee.FreeXpFactor,
                        Ee.BattleToken,
                        Ee.PremiumUniversal,
                        Ee.NaturalCover,
                        Ee.BpCoin,
                        Ee.BattlePassSelectToken,
                        Ee.BattlaPassFinalAchievement,
                        Ee.BattleBadge,
                        Ee.BonusX5,
                        Ee.CrewBonusX3,
                        Ee.NewYearFillers,
                        Ee.NewYearInvoice,
                        Ee.EpicSelectToken,
                        Ee.Comp7TokenWeeklyReward,
                        Ee.Comp7TokenCouponReward,
                        Ee.BattleBoosterGift,
                        Ee.CosmicLootboxCommon,
                        Ee.CosmicLootboxSilver,
                        Ee.SelectableBonus,
                        Ee.GoldenTicket,
                        Ee.PostStamp,
                        Ee.PremiumPlusUniversal,
                    ],
                    he = [Ee.Gold, Ee.Credits, Ee.Crystal, Ee.FreeXp],
                    ve = [Ee.BattlePassPoints],
                    be = [Ee.PremiumPlus, Ee.Premium];
                let fe;
                !(function (e) {
                    ((e.s16 = '16'),
                        (e.s32 = '32'),
                        (e.s48 = '48'),
                        (e.s66 = '66'),
                        (e.s80 = '80'),
                        (e.s116 = '116'),
                        (e.s296 = '296'),
                        (e.s360 = '360'),
                        (e.s400 = '400'),
                        (e.s600 = '600'));
                })(fe || (fe = {}));
                const we = ['engravings', 'backgrounds'],
                    Se = ['engraving', 'background'],
                    ye = (e, u = de.Small) => {
                        const t = e.name,
                            a = e.type,
                            r = e.value,
                            n = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case de.S600x450:
                                        return 'c_600x450';
                                    case de.S400x300:
                                        return 'c_400x300';
                                    case de.S296x222:
                                        return 'c_296x222';
                                    case de.S232x174:
                                        return 'c_232x174';
                                    case de.Big:
                                        return 'c_80x80';
                                    case de.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}_${r}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${r}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${n}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, u) => {
                                    switch (u) {
                                        case de.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case de.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                })(e, u);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${n}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const a = we[e];
                                    if (a) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(a),
                                            n = r.$dyn(t);
                                        return n ? `${n}` : `${r.$dyn(Se[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, u, n);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${n}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${((e) => {
                                    switch (e) {
                                        case de.S600x450:
                                            return 'c_600x450';
                                        case de.S400x300:
                                            return 'c_400x300';
                                        case de.S296x222:
                                            return 'c_296x222';
                                        case de.S232x174:
                                            return 'c_232x174';
                                        case de.S180x135:
                                            return 'big';
                                        case de.Big:
                                        case de.S80x80:
                                            return 'c_80x80';
                                        case de.Small:
                                        case de.S48x48:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(u)}.${n}`;
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
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                            case 'selectableBonus':
                            case 'groups':
                            case 'lootBoxToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${i}.${n}`;
                            case 'premium_universal':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.premium_plus_universal`;
                            case 'armory_coin':
                                return `R.images.armory_yard.gui.maps.icons.token.sf${((e) => {
                                    switch (e) {
                                        case de.Mini:
                                            return fe.s32;
                                        case de.Small:
                                        case de.S48x48:
                                            return fe.s48;
                                        case de.S80x80:
                                        case de.Big:
                                            return fe.s80;
                                        case de.S128x100:
                                            return fe.s116;
                                        case de.S180x135:
                                        case de.S232x174:
                                        case de.S296x222:
                                            return fe.s296;
                                        case de.S400x300:
                                            return fe.s400;
                                        case de.S600x450:
                                            return fe.s600;
                                    }
                                })(u)}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    Re = (e, u, t) => {
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
                    xe = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case Fe.BATTLE_BOOSTER:
                            case Fe.BATTLE_BOOSTER_REPLACE:
                                return De.BATTLE_BOOSTER;
                        }
                    },
                    Pe = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case Fe.BATTLE_BOOSTER:
                                return ge.BATTLE_BOOSTER;
                            case Fe.BATTLE_BOOSTER_REPLACE:
                                return ge.BATTLE_BOOSTER_REPLACE;
                            case Fe.BUILT_IN_EQUIPMENT:
                                return ge.BUILT_IN_EQUIPMENT;
                            case Fe.EQUIPMENT_PLUS:
                                return ge.EQUIPMENT_PLUS;
                            case Fe.EQUIPMENT_TROPHY_BASIC:
                                return ge.EQUIPMENT_TROPHY_BASIC;
                            case Fe.EQUIPMENT_TROPHY_UPGRADED:
                                return ge.EQUIPMENT_TROPHY_UPGRADED;
                            case Fe.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                return ge.EQUIPMENT_MODERNIZED_UPGRADED_1;
                            case Fe.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                return ge.EQUIPMENT_MODERNIZED_UPGRADED_2;
                            case Fe.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                return ge.EQUIPMENT_MODERNIZED_UPGRADED_3;
                            case Fe.PROGRESSION_STYLE_UPGRADED_1:
                                return ge.PROGRESSION_STYLE_UPGRADED_1;
                            case Fe.PROGRESSION_STYLE_UPGRADED_2:
                                return ge.PROGRESSION_STYLE_UPGRADED_2;
                            case Fe.PROGRESSION_STYLE_UPGRADED_3:
                                return ge.PROGRESSION_STYLE_UPGRADED_3;
                            case Fe.PROGRESSION_STYLE_UPGRADED_4:
                                return ge.PROGRESSION_STYLE_UPGRADED_4;
                        }
                    };
                var Te = t(9887),
                    Ne = t.n(Te);
                const Me = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Le = (e) => e.includes('_') && ((e) => Me.includes(e))(e.split('_').at(-1)),
                    ke = [h.ExtraLarge, h.Large, h.Medium, h.Small, h.ExtraSmall],
                    Oe = (e, u) =>
                        Object.keys(e).reduce((t, a) => {
                            if (a in t) return t;
                            if (Le(a)) {
                                const r = a.split('_').slice(0, -1).join('_');
                                if (r in t) return t;
                                const n = ke.indexOf(u),
                                    s = (-1 !== n ? Me.slice(n) : [])
                                        .map((e) => r + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    o = s ? e[s] : void 0;
                                return ((t[r] = void 0 !== o ? o : e[r]), t);
                            }
                            const r = e[a];
                            return (
                                void 0 === r ||
                                    ((e, u) => Me.some((t) => void 0 !== u[`${e}_${t}`]))(a, e) ||
                                    (t[a] = r),
                                t
                            );
                        }, {}),
                    Ie = (e, u = Oe) => {
                        const t = (
                            (e, u = Oe) =>
                            (t) => {
                                const n = f().mediaSize,
                                    s = (0, a.useMemo)(() => u(t, n), [t, n]);
                                return r().createElement(e, s);
                            }
                        )(e, u);
                        return r().memo((u) =>
                            Object.keys(u).some((e) => Le(e) && void 0 !== u[e])
                                ? r().createElement(t, u)
                                : r().createElement(e, u),
                        );
                    },
                    He = {
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
                    Ue = [
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
                function Ge() {
                    return (
                        (Ge =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ge.apply(this, arguments)
                    );
                }
                Object.keys(Ne());
                const We = {
                        XL: { mt: He.mt__XL, mr: He.mr__XL, mb: He.mb__XL, ml: He.ml__XL },
                        LG: { mt: He.mt__LG, mr: He.mr__LG, mb: He.mb__LG, ml: He.ml__LG },
                        MDp: { mt: He.mt__MDp, mr: He.mr__MDp, mb: He.mb__MDp, ml: He.ml__MDp },
                        MD: { mt: He.mt__MD, mr: He.mr__MD, mb: He.mb__MD, ml: He.ml__MD },
                        SMp: { mt: He.mt__SMp, mr: He.mr__SMp, mb: He.mb__SMp, ml: He.ml__SMp },
                        SM: { mt: He.mt__SM, mr: He.mr__SM, mb: He.mb__SM, ml: He.ml__SM },
                        XS: { mt: He.mt__XS, mr: He.mr__XS, mb: He.mb__XS, ml: He.ml__XS },
                    },
                    $e = (Object.keys(We), ['mt', 'mr', 'mb', 'ml']),
                    Ve = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Xe = Ie((e) => {
                        let u = e.className,
                            t = e.width,
                            n = e.height,
                            s = e.m,
                            o = e.mt,
                            i = void 0 === o ? s : o,
                            l = e.mr,
                            c = void 0 === l ? s : l,
                            _ = e.mb,
                            E = void 0 === _ ? s : _,
                            m = e.ml,
                            d = void 0 === m ? s : m,
                            A = e.column,
                            F = e.row,
                            D = e.flexDirection,
                            g = void 0 === D ? (A ? 'column' : F && 'row') || void 0 : D,
                            p = e.flexStart,
                            B = e.center,
                            h = e.flexEnd,
                            v = e.spaceBetween,
                            b = e.spaceAround,
                            f = e.justifyContent,
                            w =
                                void 0 === f
                                    ? (p ? 'flex-start' : B && 'center') ||
                                      (h && 'flex-end') ||
                                      (v && 'space-between') ||
                                      (b && 'space-around') ||
                                      void 0
                                    : f,
                            S = e.alignItems,
                            y = void 0 === S ? (p ? 'flex-start' : B && 'center') || (h && 'flex-end') || void 0 : S,
                            R = e.alignSelf,
                            x = e.wrap,
                            P = e.flexWrap,
                            T = void 0 === P ? (x ? 'wrap' : void 0) : P,
                            N = e.grow,
                            M = e.shrink,
                            L = e.flex,
                            k = void 0 === L ? (N || M ? `${N ? 1 : 0} ${M ? 1 : 0} auto` : void 0) : L,
                            O = e.style,
                            I = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Ue);
                        const U = (0, a.useMemo)(() => {
                                const e = { mt: i, mr: c, mb: E, ml: d },
                                    u = ((e) =>
                                        $e.reduce((u, t) => {
                                            const a = e[t];
                                            return a && 'number' != typeof a ? u.concat(We[!0 === a ? 'MD' : a][t]) : u;
                                        }, []))(e),
                                    a = ((e) =>
                                        $e.reduce((u, t) => {
                                            const a = e[t];
                                            return ('number' == typeof a && (u[Ve[t]] = a + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, O, a, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: k,
                                        alignSelf: R,
                                        display: g || y ? 'flex' : void 0,
                                        flexDirection: g,
                                        flexWrap: T,
                                        justifyContent: w,
                                        alignItems: y,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, n, i, c, E, d, O, k, R, g, T, w, y]),
                            G = U.computedStyle,
                            W = U.computedClassNames;
                        return r().createElement('div', Ge({ className: C()(He.base, ...W, u), style: G }, H), I);
                    });
                let je;
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(je || (je = {}));
                const qe = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Ye = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    ze = (e, u, t = je.left) => e.split(u).reduce(t === je.left ? qe : Ye, []),
                    Ke = (() => {
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    Qe = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Ze = ({ binding: e, text: u = '', classMix: t, alignment: n = je.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : r().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, s) =>
                                      r().createElement(
                                          'div',
                                          { className: C()('FormatText_base_d0', t), key: `${u}-${s}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = je.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return Qe.includes(t)
                                                                ? Ke(e)
                                                                : ((e, u = je.left) => {
                                                                      let t = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          r = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          ze(r, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(ze(e, a, je.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, n, e).map((e, u) =>
                                              r().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var Je = t(3532),
                    eu = t.n(Je);
                const uu = {
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
                    tu = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function au() {
                    return (
                        (au =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        au.apply(this, arguments)
                    );
                }
                Object.keys(Ne());
                const ru = Object.keys(eu()),
                    nu = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    su = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    ou = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    iu =
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
                            'heading-H56': nu,
                            'heading-H36': nu,
                            'heading-H28': su,
                            'heading-H24': su,
                            'heading-H24R': su,
                            'heading-H22': su,
                            'heading-H20R': su,
                            'heading-H18': su,
                            'heading-H15': ou,
                            'heading-H14': ou,
                            'paragraph-P24': su,
                            'paragraph-P18': su,
                            'paragraph-P16': su,
                            'paragraph-P14': ou,
                            'paragraph-P12': ou,
                            'paragraph-P10': ou,
                        }),
                    lu =
                        (Object.keys(iu),
                        (e) =>
                            e
                                ? ((e) => ru.includes(e))(e)
                                    ? { colorClassName: uu[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    cu = Ie((e) => {
                        let u = e.text,
                            t = e.variant,
                            n = e.className,
                            s = e.color,
                            o = e.m,
                            i = e.mt,
                            l = void 0 === i ? o : i,
                            c = e.mr,
                            _ = void 0 === c ? o : c,
                            E = e.mb,
                            m = void 0 === E ? o : E,
                            d = e.ml,
                            A = void 0 === d ? o : d,
                            F = e.style,
                            D = e.format,
                            g = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, tu);
                        const p = (0, a.useMemo)(() => {
                                const e = lu(s),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    a = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, a), colorClassName: u };
                            }, [F, s]),
                            B = p.computedStyle,
                            h = p.colorClassName;
                        return r().createElement(
                            Xe,
                            au(
                                {
                                    className: C()(uu.base, t && uu[t], h, n),
                                    style: B,
                                    mt: !0 === l ? iu[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === _ ? iu[t || 'paragraph-P16'].mr : _,
                                    mb: !0 === m ? iu[t || 'paragraph-P16'].mb : m,
                                    ml: !0 === A ? iu[t || 'paragraph-P16'].ml : A,
                                },
                                g,
                            ),
                            void 0 !== D ? r().createElement(Ze, au({}, D, { text: u })) : u,
                        );
                    }),
                    _u = ['children'];
                function Eu() {
                    return (
                        (Eu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Eu.apply(this, arguments)
                    );
                }
                const mu = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, _u);
                        return r().createElement(
                            _e,
                            Eu(
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
                    du = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                const Fu = R.views.common.tooltip_window.simple_tooltip_content,
                    Du = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            s = e.note,
                            o = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, du);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: n, note: s, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, n, s, i]);
                        return r().createElement(
                            _e,
                            Au(
                                {
                                    contentId:
                                        ((_ = null == i ? void 0 : i.hasHtmlContent),
                                        _ ? Fu.SimpleTooltipHtmlContent('resId') : Fu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var _;
                    };
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
                const Cu = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const a = r().createElement('div', { className: t }, e);
                    if (u.header || u.body) return r().createElement(Du, u, a);
                    const n = u.contentId,
                        s = u.args,
                        o = null == s ? void 0 : s.contentId;
                    return n || o
                        ? r().createElement(_e, gu({}, u, { contentId: n || o }), a)
                        : r().createElement(mu, u, a);
                };
                var pu = t(8552);
                (ae.EmptyRewards, ae.ReadyRewards, ae.AnimatedRewards);
                const Bu = (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                    hu = {
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        delay: 0,
                        config: { duration: 450, easing: Bu },
                    },
                    vu = { config: { duration: 450, easing: Bu } },
                    bu = {
                        base: 'StepIcon_base_7b',
                        past: 'StepIcon_past_75',
                        present: 'StepIcon_present_b5',
                        future: 'StepIcon_future_5c',
                        hover: 'StepIcon_hover_44',
                        base__past: 'StepIcon_base__past_79',
                        base__present: 'StepIcon_base__present_ab',
                        step: 'StepIcon_step_24',
                        base__future: 'StepIcon_base__future_26',
                    },
                    fu = (0, a.memo)(({ step: e, state: u = at.Future, playStageSound: t }) => {
                        const n = (0, a.useState)(!1),
                            s = n[0],
                            o = n[1],
                            i = (0, a.useCallback)(() => {
                                t && t(e);
                            }, [t, e]),
                            l = (0, pu.useSpring)({ opacity: u === at.Past ? 1 : 0, HIDE_CONFIG: vu }),
                            c = (0, pu.useSpring)({ opacity: u === at.Present ? 1 : 0, HIDE_CONFIG: vu }),
                            _ = (0, pu.useSpring)({ opacity: u === at.Future ? 1 : 0, HIDE_CONFIG: vu }),
                            E = (0, pu.useTransition)(s, Object.assign({ key: s }, hu));
                        return r().createElement(
                            'div',
                            {
                                className: C()(bu.base, bu[`base__${u}`]),
                                onMouseEnter: () => {
                                    (H.playHighlight(), o(!0));
                                },
                                onMouseLeave: () => {
                                    o(!1);
                                },
                                onClick: i,
                            },
                            r().createElement(pu.animated.div, { className: bu.future, style: _ }),
                            r().createElement(pu.animated.div, { className: bu.past, style: l }),
                            r().createElement(pu.animated.div, { className: bu.present, style: c }),
                            E((e, u) => u && r().createElement(pu.animated.div, { className: bu.hover, style: e })),
                            r().createElement(cu, { text: String(e), className: bu.step }),
                        );
                    }),
                    wu = {
                        base: 'MainReward_base_02',
                        sequence: 'MainReward_sequence_fa',
                        info: 'MainReward_info_ab',
                        icon: 'MainReward_icon_14',
                        icon__main: 'MainReward_icon__main_af',
                        preview: 'MainReward_preview_af',
                        step: 'MainReward_step_4f',
                        step__ave: 'MainReward_step__ave_13',
                        stepLabel: 'MainReward_stepLabel_53',
                        step__completed: 'MainReward_step__completed_66',
                        stepIcon: 'MainReward_stepIcon_fa',
                        rotation: 'MainReward_rotation_37',
                        reversedRotation: 'MainReward_reversedRotation_97',
                    },
                    Su = {
                        base: 'Preview_base_00',
                        base__hovered: 'Preview_base__hovered_df',
                        icon: 'Preview_icon_81',
                        icon__small: 'Preview_icon__small_5c',
                        icon__normal: 'Preview_icon__normal_93',
                        base__mouseDown: 'Preview_base__mouseDown_78',
                        label: 'Preview_label_44',
                        base__visibleLabel: 'Preview_base__visibleLabel_4d',
                    },
                    yu = [
                        'label',
                        'isVisibleLabel',
                        'autofocus',
                        'soundHover',
                        'soundClick',
                        'size',
                        'onClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'onFocus',
                        'onBlur',
                    ];
                function Ru() {
                    return (
                        (Ru =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ru.apply(this, arguments)
                    );
                }
                let xu;
                !(function (e) {
                    ((e.SMALL = 'small'), (e.NORMAL = 'normal'));
                })(xu || (xu = {}));
                const Pu = (0, a.memo)((e) => {
                        let u = e.label,
                            t = e.isVisibleLabel,
                            n = void 0 !== t && t,
                            s = e.autofocus,
                            o = void 0 !== s && s,
                            i = e.soundHover,
                            l = void 0 === i ? 'highlight' : i,
                            c = e.soundClick,
                            _ = void 0 === c ? 'play' : c,
                            E = e.size,
                            m = void 0 === E ? xu.NORMAL : E,
                            d = e.onClick,
                            A = e.onMouseEnter,
                            F = e.onMouseLeave,
                            D = e.onMouseDown,
                            g = e.onMouseUp,
                            p = e.onFocus,
                            B = e.onBlur,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, yu);
                        const v = (0, a.useState)(!1),
                            b = v[0],
                            f = v[1],
                            w = (0, a.useState)(!1),
                            S = w[0],
                            y = w[1],
                            R = (0, a.useState)(o),
                            x = R[0],
                            P = R[1],
                            T = (0, a.useRef)(null),
                            N = (0, a.useCallback)(() => {
                                T.current && (T.current.focus(), P(!0));
                            }, []),
                            M = (0, a.useCallback)(
                                (e) => {
                                    x && null !== T.current && !T.current.contains(e.target) && P(!1);
                                },
                                [x],
                            );
                        ((0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', M),
                                () => {
                                    document.removeEventListener('mousedown', M);
                                }
                            ),
                            [M],
                        ),
                            (0, a.useEffect)(() => {
                                P(o);
                            }, [o]));
                        const L = (0, a.useCallback)(
                                (e) => {
                                    d && d(e);
                                },
                                [d],
                            ),
                            k = (0, a.useCallback)(
                                (e) => {
                                    (f(!0), D && D(e), _ && I(_), o && N());
                                },
                                [o, D, N, _],
                            ),
                            O = (0, a.useCallback)(
                                (e) => {
                                    (f(!1), g && g(e));
                                },
                                [g],
                            ),
                            H = (0, a.useCallback)(
                                (e) => {
                                    (A && A(e), l && I(l), y(!0));
                                },
                                [A, l],
                            ),
                            U = (0, a.useCallback)(
                                (e) => {
                                    (f(!1), y(!1), F && F(e));
                                },
                                [F],
                            ),
                            G = (0, a.useCallback)(
                                (e) => {
                                    (P(!0), p && p(e));
                                },
                                [p],
                            ),
                            W = (0, a.useCallback)(
                                (e) => {
                                    (P(!1), B && B(e));
                                },
                                [B],
                            ),
                            $ = C()(
                                Su.base,
                                n && Su.base__visibleLabel,
                                b && Su.base__mouseDown,
                                S && Su.base__hovered,
                                x && Su.base__focused,
                            ),
                            V = C()(Su.icon, Su[`icon__${m}`]);
                        return r().createElement(
                            'div',
                            Ru(
                                {
                                    ref: T,
                                    className: $,
                                    onClick: L,
                                    onMouseEnter: H,
                                    onMouseLeave: U,
                                    onMouseDown: k,
                                    onMouseUp: O,
                                    onFocus: G,
                                    onBlur: W,
                                },
                                h,
                            ),
                            r().createElement('div', { className: V }),
                            r().createElement('div', { className: Su.label }, u),
                        );
                    }),
                    Tu = [
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
                const Mu = (0, a.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            n = e.getImageSource,
                            s = e.frameCount,
                            o = e.onAnimate,
                            i = e.frameTime,
                            l = void 0 === i ? 33 : i,
                            c = e.initialFrameIndex,
                            _ = void 0 === c ? 0 : c,
                            E = e.lastFrameIndex,
                            m = void 0 === E ? s - 1 : E,
                            d = e.loop,
                            A = void 0 === d || d,
                            F = e.state,
                            D = void 0 === F ? 'play' : F,
                            g = e.onAnimationDone,
                            C = e.onAnimationComplete,
                            p = e.poster,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Tu);
                        const h = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = h.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        (u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y));
                                    };
                                switch (D) {
                                    case 'play':
                                        return (function () {
                                            const e = Ou(_, m, n),
                                                u = Lu(_, m),
                                                a = window.setInterval(() => {
                                                    const r = u(),
                                                        n = e.get(r);
                                                    n
                                                        ? (null == o || o(r, n),
                                                          t(n),
                                                          r === m &&
                                                              (null == C || C(),
                                                              A || (null == g || g(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === _ && p ? { path: p, x: 0, y: 0 } : n(_),
                                                u = new Image();
                                            u.src = e.path;
                                            const a = () => t(ku(e, u));
                                            return (
                                                u.addEventListener('load', a),
                                                () => u.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, n, _, m, A, o, C, g, p, D]),
                            r().createElement('canvas', Nu({}, B, { width: u, height: t, ref: h }))
                        );
                    }),
                    Lu = (e, u) => {
                        let t = e;
                        return () => {
                            const a = t;
                            return ((t += 1), t > u && (t = e), a);
                        };
                    },
                    ku = (e, u) => Object.assign({}, e, { img: u }),
                    Ou = (e, u, t) => {
                        const a = new Map(),
                            r = {};
                        for (let n = e; n <= u; n++) {
                            const e = t(n),
                                u = r[e.path];
                            if (u) a.set(n, ku(e, u));
                            else {
                                const u = new Image();
                                ((r[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${n})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    a.set(n, ku(e, u)));
                            }
                        }
                        return a;
                    };
                function Iu(e) {
                    const u = e.chunk,
                        t = u.rows * u.columns;
                    return (a) => {
                        const r = a % t,
                            n = (r % u.columns) * e.width,
                            s = Math.trunc(r / u.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(a / t)), x: n, y: s };
                    };
                }
                const Hu = { base: 'SequencedBg_base_9b', image: 'SequencedBg_image_31' },
                    Uu = {
                        width: 280,
                        height: 280,
                        frameCount: 50,
                        chunk: { count: 2, columns: 5, rows: 5 },
                        getChunkPath:
                            ('R.images.armory_yard.gui.maps.icons.progress.finalRewardSprite_',
                            (e) => `R.images.armory_yard.gui.maps.icons.progress.finalRewardSprite_${e}`),
                    };
                const Gu = r().memo(() =>
                        r().createElement(
                            'div',
                            { className: Hu.base },
                            s.O.client.graphicsQuality.isLow()
                                ? r().createElement('div', { className: Hu.image })
                                : r().createElement(Mu, {
                                      frameTime: 50,
                                      state: 'play',
                                      width: Uu.width,
                                      height: Uu.height,
                                      frameCount: Uu.frameCount,
                                      className: Hu.seq,
                                      getImageSource: Iu(Uu),
                                  }),
                        ),
                    ),
                    Wu = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    $u = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    Vu = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Xu = (0, a.memo)(({ isElite: e, vehicleName: u, type: t, level: a }) => {
                        return r().createElement(
                            'div',
                            { className: 'TankName_base_24' },
                            r().createElement(cu, {
                                text:
                                    ((n = a),
                                    Vu
                                        ? `${n}`
                                        : (function (e) {
                                              let u = '';
                                              for (let t = $u.length - 1; t >= 0; t--)
                                                  for (; e >= $u[t]; ) ((u += Wu[t]), (e -= $u[t]));
                                              return u;
                                          })(n)),
                            }),
                            r().createElement('div', {
                                className: C()('TankName_type_aa', e && 'TankName_type__elite_ee'),
                                style: (() => {
                                    const u = `${((a = t), a.replace(/-/g, '_'))}${e ? '_elite' : ''}`;
                                    var a;
                                    return {
                                        backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(u)})`,
                                    };
                                })(),
                            }),
                            r().createElement(cu, { text: u, className: 'TankName_name_20' }),
                        );
                        var n;
                    }),
                    ju = R.strings.armory_yard.mainView.mainReward,
                    qu = (0, a.memo)(
                        ({ isHighlighted: e, onPreview: u, scale: t = 0, step: a, reward: n, isFinalReward: s = !1 }) =>
                            r().createElement(
                                'div',
                                { className: wu.base },
                                Boolean(e && t) &&
                                    r().createElement(
                                        'div',
                                        { className: wu.sequence, style: { '--scale': `${t}` } },
                                        r().createElement(Gu, null),
                                    ),
                                r().createElement(
                                    Cu,
                                    {
                                        tooltipArgs: Re(
                                            { tooltipId: n.tooltipId, tooltipType: 'mergedReward' },
                                            Number.parseInt(n.tooltipContentId),
                                        ),
                                        className: wu.tooltipWrapper,
                                    },
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        n.name === Ee.Vehicles &&
                                            r().createElement('div', { className: wu.info }, r().createElement(Xu, n)),
                                        r().createElement('div', { className: C()(wu.icon, s && wu.icon__main) }),
                                    ),
                                ),
                                r().createElement(
                                    Du,
                                    {
                                        body: s
                                            ? R.strings.armory_yard.buyView.stylePreview.tooltip()
                                            : R.strings.armory_yard.buyView.vehiclePreview.tooltip(),
                                    },
                                    r().createElement(
                                        'div',
                                        { className: wu.preview },
                                        r().createElement(Pu, {
                                            label: R.strings.armory_yard.buyView.vehiclePreview.label(),
                                            onClick: u,
                                            isVisibleLabel: !0,
                                        }),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: C()(wu.step, s && wu.step__ave, e && wu.step__completed) },
                                    s
                                        ? r().createElement(fu, { step: a, state: e ? at.Present : at.Future })
                                        : r().createElement(
                                              'div',
                                              { className: wu.stepIcon },
                                              r().createElement(cu, { text: String(a) }),
                                          ),
                                    r().createElement(cu, { className: wu.stepLabel, text: ju.completed() }),
                                ),
                            ),
                    ),
                    Yu = {
                        base: 'Step_base_fa',
                        progress: 'Step_progress_c9',
                        progress__first: 'Step_progress__first_82',
                        progress__right: 'Step_progress__right_57',
                        progress__left: 'Step_progress__left_30',
                        icon: 'Step_icon_b0',
                        reward: 'Step_reward_df',
                        line: 'Step_line_c5',
                        mainReward: 'Step_mainReward_b6',
                    },
                    zu = {
                        base: 'StepLine_base_1a',
                        base__past: 'StepLine_base__past_3b',
                        base__present: 'StepLine_base__present_22',
                        base__future: 'StepLine_base__future_c9',
                    },
                    Ku = r().memo(({ state: e }) =>
                        r().createElement('div', { className: C()(zu.base, zu[`base__${e}`]) }),
                    ),
                    Qu = {
                        base: 'StepProgressBar_base_b3',
                        base__first: 'StepProgressBar_base__first_41',
                        base__last: 'StepProgressBar_base__last_95',
                        base__left: 'StepProgressBar_base__left_47',
                        base__right: 'StepProgressBar_base__right_ae',
                        shadow: 'StepProgressBar_shadow_f3',
                        bg: 'StepProgressBar_bg_76',
                        progress: 'StepProgressBar_progress_11',
                        base__present: 'StepProgressBar_base__present_54',
                        pointer: 'StepProgressBar_pointer_a4',
                        animatedProgress: 'StepProgressBar_animatedProgress_8a',
                        completeProgress: 'StepProgressBar_completeProgress_0a',
                        animatedProgressFirstPositon: 'StepProgressBar_animatedProgressFirstPositon_d1',
                        completeProgressFirstPositon: 'StepProgressBar_completeProgressFirstPositon_77',
                        animatedPointer: 'StepProgressBar_animatedPointer_74',
                        completePointer: 'StepProgressBar_completePointer_a5',
                        animatedPointerFirstPositon: 'StepProgressBar_animatedPointerFirstPositon_cb',
                        completePointerFirstPosition: 'StepProgressBar_completePointerFirstPosition_7d',
                        pointerFlare1: 'StepProgressBar_pointerFlare1_37',
                        pointerFlare2: 'StepProgressBar_pointerFlare2_76',
                    },
                    Zu = (0, a.memo)(
                        ({
                            state: e = at.Future,
                            levelDuration: u,
                            isEmpty: t,
                            isRunning: n,
                            position: s = rt.Normal,
                        }) => {
                            const o = (0, a.useState)({}),
                                i = o[0],
                                l = o[1],
                                c = (0, a.useState)({}),
                                _ = c[0],
                                E = c[1],
                                m = (0, a.useState)(''),
                                d = m[0],
                                A = m[1],
                                F = (0, a.useState)(''),
                                D = F[0],
                                g = F[1];
                            return (
                                (0, a.useEffect)(() => {
                                    (n
                                        ? s === rt.First
                                            ? (A(Qu.animatedProgressFirstPositon), g(Qu.animatedPointerFirstPositon))
                                            : (A(Qu.animatedProgress), g(Qu.animatedPointer))
                                        : (A(''), g('')),
                                        t || n
                                            ? t && n && u
                                                ? (l({ animationDuration: `${u}s` }), E({ animationDuration: `${u}s` }))
                                                : t &&
                                                  !n &&
                                                  (s === rt.First
                                                      ? (l({ width: '20%' }), E({ left: '20%' }))
                                                      : (l({}), E({})))
                                            : (l({ width: '100%' }), E({ left: '100%' })));
                                }, [t, n, u, s]),
                                r().createElement(
                                    'div',
                                    { className: C()(Qu.base, Qu[`base__${s}`], Qu[`base__${e}`]) },
                                    r().createElement('div', { className: Qu.shadow }),
                                    r().createElement('div', { className: Qu.bg }),
                                    r().createElement('div', { className: C()(Qu.progress, d), style: i }),
                                    n ||
                                        (s === rt.First &&
                                            r().createElement(
                                                'div',
                                                { className: C()(Qu.pointer, D), style: _ },
                                                r().createElement('div', { className: Qu.pointerFlare2 }),
                                                r().createElement('div', { className: Qu.pointerFlare1 }),
                                            )),
                                )
                            );
                        },
                    ),
                    Ju = {
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
                    et = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: a = de.Big,
                        special: n,
                        value: s,
                        valueType: o,
                        style: i,
                        className: l,
                        classNames: c,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: E,
                    }) => {
                        const m = xe(n),
                            d = Pe(n),
                            A = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case Ae.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case Ae.CURRENCY:
                                    case Ae.NUMBER:
                                        return r().createElement(pe, { format: 'integral', value: Number(e) });
                                    case Ae.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(s, o);
                        return r().createElement(
                            'div',
                            { className: C()(Ju.base, Ju[`base__${a}`], l), style: i },
                            r().createElement(
                                Cu,
                                { tooltipArgs: _, className: Ju.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: C()(Ju.image, null == c ? void 0 : c.image) },
                                        m &&
                                            r().createElement('div', {
                                                className: C()(Ju.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${m}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            r().createElement('div', {
                                                className: C()(Ju.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        d &&
                                            r().createElement('div', {
                                                className: C()(Ju.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${d}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: C()(
                                                    Ju.info,
                                                    Ju[`info__${e}`],
                                                    o === Ae.MULTI && Ju.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                ),
                            ),
                            t &&
                                r().createElement(
                                    Cu,
                                    { tooltipArgs: E },
                                    r().createElement('div', {
                                        className: C()(Ju.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    ut = {
                        base: 'StepReward_base_67',
                        pastField: 'StepReward_pastField_f1',
                        futureField: 'StepReward_futureField_c0',
                        base__first: 'StepReward_base__first_2d',
                        base__right: 'StepReward_base__right_e2',
                        base__last: 'StepReward_base__last_f7',
                        base__left: 'StepReward_base__left_9b',
                        presentField: 'StepReward_presentField_b8',
                        hover: 'StepReward_hover_d3',
                        base__future: 'StepReward_base__future_43',
                        presentLight: 'StepReward_presentLight_ed',
                        reward: 'StepReward_reward_51',
                        base__past: 'StepReward_base__past_f6',
                    },
                    tt = r().memo(({ state: e, reward: u, position: t = rt.Normal }) => {
                        const n = u && t !== rt.Left && t !== rt.Last,
                            s = (0, pu.useSpring)({ opacity: e === at.Past ? 1 : 0, HIDE_CONFIG: vu }),
                            o = (0, pu.useSpring)({ opacity: e === at.Present ? 1 : 0, HIDE_CONFIG: vu }),
                            i = (0, pu.useSpring)({ opacity: e === at.Future ? 1 : 0, HIDE_CONFIG: vu }),
                            l = (0, a.useState)(!1),
                            c = l[0],
                            _ = l[1],
                            E = (0, a.useCallback)(() => {
                                _(!0);
                            }, []),
                            m = (0, a.useCallback)(() => {
                                _(!1);
                            }, []),
                            d = (0, pu.useTransition)(c, Object.assign({ key: c }, hu));
                        return r().createElement(
                            'div',
                            {
                                className: C()(ut.base, ut[`base__${e}`], ut[`base__${t}`]),
                                onMouseEnter: E,
                                onMouseLeave: m,
                            },
                            r().createElement(
                                pu.animated.div,
                                { style: s },
                                r().createElement('div', { className: ut.pastField }),
                            ),
                            d((e, u) => u && r().createElement(pu.animated.div, { className: ut.hover, style: e })),
                            r().createElement(
                                pu.animated.div,
                                { style: o },
                                r().createElement('div', { className: ut.presentField }),
                                r().createElement('div', { className: ut.presentLight }),
                            ),
                            r().createElement(
                                pu.animated.div,
                                { style: i },
                                r().createElement('div', { className: ut.futureField }),
                            ),
                            n && r().createElement('div', { className: ut.reward }, r().createElement(et, u)),
                        );
                    });
                let at, rt;
                var nt;
                let st, ot;
                var it;
                (!(function (e) {
                    ((e.Past = 'past'), (e.Present = 'present'), (e.Future = 'future'));
                })(at || (at = {})),
                    ((nt = rt || (rt = {})).First = 'first'),
                    (nt.Last = 'last'),
                    (nt.Normal = 'normal'),
                    (nt.Left = 'left'),
                    (nt.Right = 'right'),
                    (0, a.memo)(
                        ({
                            step: e,
                            state: u,
                            reward: t,
                            levelDuration: a,
                            isEmpty: n,
                            isRunning: s,
                            position: o = rt.Normal,
                            isMainReward: i = !1,
                            playStageSound: l,
                            onPreview: c,
                        }) => {
                            const _ = o !== rt.Last && !i;
                            return r().createElement(
                                'div',
                                { className: Yu.base },
                                _ &&
                                    r().createElement(
                                        'div',
                                        { className: Yu.line },
                                        r().createElement(Ku, { state: u }),
                                    ),
                                r().createElement(
                                    'div',
                                    { className: C()(Yu.progress, Yu[`progress__${o}`]) },
                                    r().createElement(Zu, {
                                        state: u,
                                        position: o,
                                        levelDuration: a,
                                        isEmpty: n,
                                        isRunning: s,
                                    }),
                                ),
                                _ &&
                                    r().createElement(
                                        'div',
                                        { className: Yu.icon },
                                        r().createElement(
                                            _e,
                                            {
                                                contentId:
                                                    R.views.armory_yard.lobby.feature.tooltips.ArmoryYardSimpleTooltipView(
                                                        'resId',
                                                    ),
                                                args: { state: se.Step, step: e },
                                                ignoreShowDelay: !0,
                                            },
                                            r().createElement(
                                                'div',
                                                null,
                                                r().createElement(fu, { step: e, state: u, playStageSound: l }),
                                            ),
                                        ),
                                    ),
                                i &&
                                    r().createElement(
                                        'div',
                                        { className: Yu.mainReward },
                                        r().createElement(qu, {
                                            step: e,
                                            reward: t,
                                            isHighlighted: u === at.Past || u === at.Present,
                                            onPreview: c,
                                        }),
                                    ),
                                r().createElement(
                                    'div',
                                    { className: Yu.reward },
                                    r().createElement(tt, { state: u, reward: t, position: o }),
                                ),
                            );
                        },
                    ),
                    (function (e) {
                        e.C_360x270 = 'c_360x270';
                    })(st || (st = {})),
                    ((it = ot || (ot = {})).OR = 'or'),
                    (it.AND = 'and'));
                const lt = {
                        base: 'ProductImage_base_33',
                        base__c_360x270: 'ProductImage_base__c_360x270_f0',
                        tooltipWrapper: 'ProductImage_tooltipWrapper_03',
                        icon: 'ProductImage_icon_ec',
                        overlay: 'ProductImage_overlay_e0',
                        highlight: 'ProductImage_highlight_98',
                        image: 'ProductImage_image_fe',
                        preview: 'ProductImage_preview_8a',
                    },
                    ct = R.strings.armory_shop.shopBuyView.vehicleImage,
                    _t = ({
                        image: e,
                        size: u = st.C_360x270,
                        special: t,
                        style: a,
                        className: n,
                        classNames: s,
                        onStylePreview: o,
                    }) => {
                        const i = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Fe.BATTLE_BOOSTER:
                                    case Fe.BATTLE_BOOSTER_REPLACE:
                                        return De.BATTLE_BOOSTER;
                                }
                            })(t),
                            l = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Fe.BATTLE_BOOSTER:
                                        return ge.BATTLE_BOOSTER;
                                    case Fe.BATTLE_BOOSTER_REPLACE:
                                        return ge.BATTLE_BOOSTER_REPLACE;
                                    case Fe.BUILT_IN_EQUIPMENT:
                                        return ge.BUILT_IN_EQUIPMENT;
                                    case Fe.EQUIPMENT_PLUS:
                                        return ge.EQUIPMENT_PLUS;
                                    case Fe.EQUIPMENT_TROPHY_BASIC:
                                        return ge.EQUIPMENT_TROPHY_BASIC;
                                    case Fe.EQUIPMENT_TROPHY_UPGRADED:
                                        return ge.EQUIPMENT_TROPHY_UPGRADED;
                                    case Fe.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return ge.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Fe.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return ge.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Fe.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return ge.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Fe.PROGRESSION_STYLE_UPGRADED_1:
                                        return ge.PROGRESSION_STYLE_UPGRADED_1;
                                    case Fe.PROGRESSION_STYLE_UPGRADED_2:
                                        return ge.PROGRESSION_STYLE_UPGRADED_2;
                                    case Fe.PROGRESSION_STYLE_UPGRADED_3:
                                        return ge.PROGRESSION_STYLE_UPGRADED_3;
                                    case Fe.PROGRESSION_STYLE_UPGRADED_4:
                                        return ge.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(t);
                        return r().createElement(
                            'div',
                            { className: C()(lt.base, lt[`base__${u}`], n), style: a },
                            r().createElement(
                                'div',
                                { className: C()(lt.image, null == s ? void 0 : s.image) },
                                i &&
                                    r().createElement('div', {
                                        className: C()(lt.highlight, null == s ? void 0 : s.highlight),
                                        style: {
                                            backgroundImage: `url(R.images.gui.maps.shop.artefacts.${u}.${i}_highlight)`,
                                        },
                                    }),
                                e &&
                                    r().createElement('div', {
                                        className: C()(lt.icon, null == s ? void 0 : s.productIcon),
                                        style: { backgroundImage: `url(${e})` },
                                    }),
                                l &&
                                    r().createElement('div', {
                                        className: C()(lt.overlay, null == s ? void 0 : s.overlay),
                                        style: {
                                            backgroundImage: `url(R.images.gui.maps.shop.artefacts.${u}.${l}_overlay)`,
                                        },
                                    }),
                                o &&
                                    r().createElement(
                                        'div',
                                        { className: lt.preview },
                                        r().createElement(J, { label: ct.preview(), onClick: o }),
                                    ),
                            ),
                        );
                    };
                function Et(e) {
                    return e;
                }
                function mt() {
                    return !1;
                }
                console.log;
                var dt = t(3915);
                function At(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const Ft = (e) => (0 === e ? window : window.subViews.get(e));
                var Dt = t(6517);
                const gt = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: n, children: o, mocks: i }) {
                                const l = (0, a.useRef)([]),
                                    c = (e, t, a) => {
                                        var r;
                                        const n = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Ft,
                                                context: a = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function n(e, u = 0) {
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
                                                        n = a.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (t, n) => {
                                                        const i = 'string' == typeof n ? `${a}.${n}` : a,
                                                            l = s.O.view.addModelObserver(i, u, !0);
                                                        return (r.set(l, t), e && t(o(n)), l);
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
                                                        for (
                                                            var e,
                                                                t = (function (e, u) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (t) return (t = t.call(e)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (t = (function (e, u) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return At(e, u);
                                                                                var t = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        e.constructor &&
                                                                                        (t = e.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? At(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
                                                                        var a = 0;
                                                                        return function () {
                                                                            return a >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[a++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(r.keys());
                                                            !(e = t()).done;
                                                        )
                                                            n(e.value, u);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(t),
                                            o =
                                                'real' === e
                                                    ? n
                                                    : Object.assign({}, n, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            i = (u) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(u)) : o.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            _ = (({ observableModel: e }) => {
                                                const u = { root: e.object(), rewards: e.array('rewards') },
                                                    t = (0, Dt.computedFn)(
                                                        () => {
                                                            return (
                                                                (e = u.rewards.get()),
                                                                (t = Et),
                                                                Array.isArray(e)
                                                                    ? e.map(t)
                                                                    : e.map((e, u, a) =>
                                                                          t(null == e ? void 0 : e.value, u, a),
                                                                      )
                                                            );
                                                            var e, t;
                                                        },
                                                        { equals: mt },
                                                    );
                                                return Object.assign({}, u, { computes: { getRewards: t } });
                                            })({
                                                mode: e,
                                                readByPath: i,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const a = null != t ? t : i(u),
                                                            r = dt.observable.box(a, { equals: mt });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, dt.action)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const a = null != t ? t : i(u),
                                                            r = dt.observable.box(a, { equals: mt });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, dt.action)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const a = i(t);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (e, u) => ((e[u] = dt.observable.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, dt.action)((e) => {
                                                                            u.forEach((u) => {
                                                                                r[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = u,
                                                                n = Object.entries(r),
                                                                s = n.reduce(
                                                                    (e, [u, t]) => (
                                                                        (e[t] = dt.observable.box(a[u], {})),
                                                                        e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, dt.action)((e) => {
                                                                            n.forEach(([u, t]) => {
                                                                                s[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            E = { mode: e, model: _, externalModel: o, cleanup: c };
                                        return {
                                            model: _,
                                            controls: 'mocks' === e && a ? a.controls(E) : u(E),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    _ = (0, a.useRef)(!1),
                                    E = (0, a.useState)(e),
                                    m = E[0],
                                    d = E[1],
                                    A = (0, a.useState)(() => c(e, n, i)),
                                    F = A[0],
                                    D = A[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        _.current ? D(c(m, n, i)) : (_.current = !0);
                                    }, [i, m, n]),
                                    (0, a.useEffect)(() => {
                                        d(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    r().createElement(t.Provider, { value: F }, o)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        close: e.createCallbackNoArgs('onClose'),
                        back: e.createCallbackNoArgs('onBack'),
                        buyProduct: e.createCallback(
                            (e, u, t, a) => ({ crystal: e, gold: u, tokens: t, count: a }),
                            'onBuyProduct',
                        ),
                        showVehiclePreview: e.createCallbackNoArgs('onShowVehiclePreview'),
                        showStylePreview: e.createCallbackNoArgs('onShowStylePreview'),
                    })),
                    Ct = gt[0],
                    pt = gt[1];
                var Bt;
                !(function (e) {
                    ((e.Default = 'default'), (e.equipCoin = 'equipCoin'));
                })(Bt || (Bt = {}));
                const ht = Object.assign({}, Ee, Bt),
                    vt = {
                        [O.Vehicle]: 'vehicle',
                        [O.Bundle]: 'bundle',
                        [O.Other]: 'other',
                        [O.Maintain]: 'other',
                        [O.Customization]: 'other',
                        [O.EconomicBooster]: 'other',
                    },
                    bt = 'Composition_reward_df',
                    ft = 'Composition_reward__icon_44',
                    wt = 'Composition_reward__title_c2',
                    St = R.strings.armory_shop.shopBuyView.composition,
                    yt = (0, a.memo)(({ title: e }) =>
                        r().createElement(
                            'div',
                            { className: 'Composition_base_b1' },
                            r().createElement(cu, { className: 'Composition_title_5a', text: St.title() }),
                            r().createElement(
                                'div',
                                { className: 'Composition_rewards_5d' },
                                r().createElement(
                                    'div',
                                    { className: bt },
                                    r().createElement('div', {
                                        className: C()(ft, 'Composition_reward__icon__premVehicle_bd'),
                                    }),
                                    r().createElement(cu, { className: 'Composition_premVehicle_7c', text: e }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: bt },
                                    r().createElement('div', {
                                        className: C()(ft, 'Composition_reward__icon__crew_5d'),
                                    }),
                                    r().createElement(cu, { className: wt, text: St.crew() }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: bt },
                                    r().createElement('div', {
                                        className: C()(ft, 'Composition_reward__icon__slot_30'),
                                    }),
                                    r().createElement(cu, { className: wt, text: St.slot() }),
                                ),
                            ),
                        ),
                    ),
                    Rt = (e, u) => e.getBoundingClientRect().top >= u,
                    xt = ({ blocks: e, linesCount: u = 2, mediaSize: t }) => {
                        const n = (0, a.useState)(e),
                            o = n[0],
                            i = n[1],
                            l = (0, a.useState)({ width: 0, height: 0 }),
                            c = l[0],
                            _ = l[1],
                            E = (0, a.useRef)(null),
                            m = (0, a.useRef)({ shortened: !1 }),
                            d = (0, a.useCallback)(() => {
                                (0, X.Eu)().then(() => {
                                    const e = ((e) => {
                                        const u = e.current;
                                        return u ? window.getComputedStyle(u).getPropertyValue('line-height') : '';
                                    })(E);
                                    if (e) {
                                        const t = Number(e.split('rem')[0]),
                                            a = E.current;
                                        if (a && isFinite(t)) {
                                            const e = s.O.view.remToPx(u * t);
                                            _({ height: e, width: a.getBoundingClientRect().width });
                                        }
                                    }
                                });
                            }, [u]);
                        ((0, a.useEffect)(() => {
                            if (e.length)
                                return (
                                    m.current.shortened && (m.current.shortened = !1),
                                    ((e) => {
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
                                    })(d)
                                );
                        }, [e, t, d]),
                            (0, a.useEffect)(() => {
                                if (c.height && !m.current.shortened) {
                                    const u = ((e, u) => {
                                        const t = e.current;
                                        if (t) {
                                            const e = t.getBoundingClientRect(),
                                                a = e.top + u,
                                                r = Array.from(t.children);
                                            if (r.length) {
                                                const u = ((e, u) => {
                                                    const t = e.length - 1;
                                                    if (!Rt(e[t], u)) return -1;
                                                    let a = 0,
                                                        r = t - 1,
                                                        n = !1;
                                                    for (; r - a > 1; ) {
                                                        const t = a + Math.floor(0.5 * (r - a + 1));
                                                        ((n = Rt(e[t], u)), n ? (r = t) : (a = t));
                                                    }
                                                    return n || Rt(e[r], u) ? a : r;
                                                })(r, a);
                                                if (u > 0) {
                                                    const t = r[u].getBoundingClientRect();
                                                    return e.right - t.right < 16 ? u : u + 1;
                                                }
                                            }
                                        }
                                        return -1;
                                    })(E, c.height);
                                    if (-1 !== u) {
                                        const t = e.slice(0, u);
                                        (t.push(r().createElement('span', { key: u }, '...')),
                                            i(t),
                                            (m.current.shortened = !0));
                                    }
                                }
                            }, [e, c, t]));
                        const A = (0, a.useMemo)(() => (c.height ? { maxHeight: `${c.height}rem` } : {}), [c.height]);
                        return r().createElement(
                            'div',
                            {
                                ref: E,
                                className: C()('ShortenedText_base_fe', c.height && 'ShortenedText_base__shown_af'),
                                style: A,
                            },
                            o,
                        );
                    };
                let Pt;
                !(function (e) {
                    ((e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge'));
                })(Pt || (Pt = {}));
                const Tt = 'Description_description_1b',
                    Nt = R.strings.armory_shop.shopBuyView.description,
                    Mt = (0, a.memo)(({ description: e, longDescription: u, isVehicle: t, count: n, itemType: s }) => {
                        var o;
                        const i = (() => {
                                const e = (0, a.useContext)(d);
                                return e.extraSmall
                                    ? Pt.Tiny
                                    : e.small
                                      ? Pt.Small
                                      : e.medium || 1080 === e.height
                                        ? Pt.Medium
                                        : e.large
                                          ? Pt.Large
                                          : e.extraLarge
                                            ? Pt.Huge
                                            : Pt.None;
                            })(),
                            l = null != (o = Nt.$dyn(s)) ? o : u || e;
                        return r().createElement(
                            'div',
                            { className: 'Description_base_b7' },
                            r().createElement(cu, { className: 'Description_title_56', text: Nt.title() }),
                            t
                                ? r().createElement(
                                      'div',
                                      { className: Tt },
                                      r().createElement(xt, {
                                          mediaSize: i,
                                          linesCount: 4,
                                          blocks:
                                              ((c = u || e),
                                              c
                                                  .split(' ')
                                                  .filter((e) => Boolean(e))
                                                  .map((e, u) => r().createElement('span', { key: u }, `${e} `))),
                                      }),
                                  )
                                : r().createElement(cu, {
                                      className: Tt,
                                      text: String(l),
                                      format: { binding: { count: n, description: u || e } },
                                  }),
                        );
                        var c;
                    }),
                    Lt = {
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
                let kt, Ot;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(kt || (kt = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(Ot || (Ot = {})));
                const It = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: s,
                    mixClass: o,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: E,
                    onMouseUp: m,
                    onMouseLeave: d,
                    onClick: A,
                }) => {
                    const F = (0, a.useRef)(null),
                        D = (0, a.useState)(t),
                        g = D[0],
                        p = D[1],
                        B = (0, a.useState)(!1),
                        h = B[0],
                        v = B[1],
                        b = (0, a.useState)(!1),
                        f = b[0],
                        w = b[1],
                        S = (0, a.useCallback)(() => {
                            s || (F.current && (F.current.focus(), p(!0)));
                        }, [s]),
                        y = (0, a.useCallback)(
                            (e) => {
                                g && null !== F.current && !F.current.contains(e.target) && p(!1);
                            },
                            [g],
                        ),
                        x = (0, a.useCallback)(
                            (e) => {
                                s || (A && A(e));
                            },
                            [s, A],
                        ),
                        P = (0, a.useCallback)(
                            (e) => {
                                s || (null !== i && I(i), c && c(e), w(!0));
                            },
                            [s, i, c],
                        ),
                        T = (0, a.useCallback)(
                            (e) => {
                                _ && _(e);
                            },
                            [_],
                        ),
                        N = (0, a.useCallback)(
                            (e) => {
                                s || (m && m(e), v(!1));
                            },
                            [s, m],
                        ),
                        M = (0, a.useCallback)(
                            (e) => {
                                s || (null !== l && I(l), E && E(e), t && S(), v(!0));
                            },
                            [s, l, E, S, t],
                        ),
                        L = (0, a.useCallback)(
                            (e) => {
                                s || (d && d(e), v(!1));
                            },
                            [s, d],
                        ),
                        k = C()(
                            Lt.base,
                            Lt[`base__${n}`],
                            {
                                [Lt.base__disabled]: s,
                                [Lt[`base__${u}`]]: u,
                                [Lt.base__focus]: g,
                                [Lt.base__highlightActive]: h,
                                [Lt.base__firstHover]: f,
                            },
                            o,
                        ),
                        O = C()(Lt.state, Lt.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', y),
                                () => {
                                    document.removeEventListener('mousedown', y);
                                }
                            ),
                            [y],
                        ),
                        (0, a.useEffect)(() => {
                            p(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: F,
                                className: k,
                                onMouseEnter: P,
                                onMouseMove: T,
                                onMouseUp: N,
                                onMouseDown: M,
                                onMouseLeave: L,
                                onClick: x,
                            },
                            n !== kt.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: Lt.back }),
                                    r().createElement('span', { className: Lt.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: O },
                                r().createElement('span', { className: Lt.stateDisabled }),
                                r().createElement('span', { className: Lt.stateHighlightHover }),
                                r().createElement('span', { className: Lt.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: Lt.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                It.defaultProps = { type: kt.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Ht = (0, a.memo)(It);
                let Ut, Gt;
                (!(function (e) {
                    ((e[(e.W_1920 = 1920)] = 'W_1920'),
                        (e[(e.W_2560 = 2560)] = 'W_2560'),
                        (e[(e.W_3840 = 3840)] = 'W_3840'));
                })(Ut || (Ut = {})),
                    (function (e) {
                        ((e[(e.H_1440 = 1440)] = 'H_1440'),
                            (e[(e.H_1600 = 1600)] = 'H_1600'),
                            (e[(e.H_2160 = 2160)] = 'H_2160'));
                    })(Gt || (Gt = {})),
                    t(3368));
                const Wt = ['value', 'className', 'autoFocus', 'onKeyDown'];
                function $t() {
                    return (
                        ($t =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        $t.apply(this, arguments)
                    );
                }
                const Vt = (0, a.memo)((e) => {
                        let u,
                            t = e.value,
                            n = e.className,
                            s = e.autoFocus,
                            o = e.onKeyDown,
                            i = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Wt);
                        const l = (0, a.useState)(!0),
                            c = l[0],
                            _ = l[1];
                        var E;
                        return (
                            (E = () => {
                                u.focus();
                            }),
                            (0, a.useEffect)(() => {
                                let e = null;
                                return (
                                    (e = requestAnimationFrame(() => {
                                        e = requestAnimationFrame(() => {
                                            ((e = null), E());
                                        });
                                    })),
                                    () => {
                                        null !== e && cancelAnimationFrame(e);
                                    }
                                );
                            }, undefined),
                            r().createElement(
                                'input',
                                $t(
                                    {
                                        type: 'text',
                                        ref: (e) => {
                                            e && ((u = e), c && e.setSelectionRange(e.value.length, e.value.length));
                                        },
                                        className: n,
                                        value: t,
                                        onKeyDown: (e) => {
                                            const t = e.currentTarget,
                                                a = t.value.length,
                                                r = t.selectionStart || 0;
                                            (_(r === a && e.which !== V.n.DELETE),
                                                (e.which !== V.n.DELETE && e.which !== V.n.BACKSPACE) ||
                                                    1 !== a ||
                                                    setTimeout(() => {
                                                        t.setSelectionRange(a, a);
                                                    }),
                                                e.which === V.n.ESCAPE && u && s && u.blur(),
                                                o(e));
                                        },
                                    },
                                    i,
                                ),
                            )
                        );
                    }),
                    Xt = 'TokensStepper_base__focused_1f',
                    jt = 'TokensStepper_btn_f2',
                    qt = 'TokensStepper_btn__scaled_9a',
                    Yt = 'play',
                    zt = /\d+/,
                    Kt = () => I('highlight'),
                    Qt = ({
                        value: e,
                        minValue: u,
                        maxValue: t,
                        iconPath: n,
                        iconStyles: o,
                        handleTokenChange: i,
                        handleTokenIncrease: l,
                        handleTokenDecrease: c,
                    }) => {
                        const _ = e < t,
                            E = e > u,
                            m = (() => {
                                const e = (0, a.useState)(s.O.view.getScale()),
                                    u = e[0],
                                    t = e[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        const e = () => {
                                            t(s.O.view.getScale());
                                        };
                                        return (
                                            window.addEventListener('resize', e),
                                            () => {
                                                window.removeEventListener('resize', e);
                                            }
                                        );
                                    }, []),
                                    u
                                );
                            })(),
                            d = m > 1,
                            A = ((e) => {
                                const u = f(),
                                    t = u.remScreenWidth * e,
                                    a = u.remScreenHeight * e,
                                    r = t === Ut.W_1920 && a === Gt.H_1440,
                                    n = t === Ut.W_2560 && (a === Gt.H_1440 || a === Gt.H_1600),
                                    s = t === Ut.W_3840 && a === Gt.H_2160,
                                    o = 1.25 === e;
                                return (r && (o || 1.5 === e)) || (n && o) || (s && o);
                            })(m),
                            F = (0, a.useRef)(null),
                            D = (0, a.useCallback)(
                                (e) => {
                                    e.which === V.n.ARROW_UP && _ ? l() : e.which === V.n.ARROW_DOWN && E && c();
                                },
                                [_, E, c, l],
                            ),
                            g = (0, a.useCallback)(
                                (e) => {
                                    if (i) {
                                        var a;
                                        const r = Number(null == (a = zt.exec(e.currentTarget.value)) ? void 0 : a[0]);
                                        r > t ? i(t) : r <= u || !Number.isInteger(r) || !r ? i(u) : i(r);
                                    }
                                },
                                [i, t, u],
                            ),
                            p = (0, a.useCallback)(
                                (e) => {
                                    e.deltaY > 0 ? l() : c();
                                },
                                [c, l],
                            );
                        return r().createElement(
                            'div',
                            { ref: F, className: 'TokensStepper_base_95' },
                            r().createElement(
                                'div',
                                { className: 'TokensStepper_currency_74' },
                                r().createElement(
                                    'div',
                                    { className: 'TokensStepper_inputWrapper_b1' },
                                    r().createElement(Vt, {
                                        value: e,
                                        autoFocus: !0,
                                        className: 'TokensStepper_input_03',
                                        onBlur: () => {
                                            var e;
                                            return null == (e = F.current) ? void 0 : e.classList.remove(Xt);
                                        },
                                        onFocus: () => {
                                            var e;
                                            return null == (e = F.current) ? void 0 : e.classList.add(Xt);
                                        },
                                        onKeyDown: D,
                                        onChange: g,
                                        onWheel: p,
                                    }),
                                ),
                            ),
                            n &&
                                r().createElement('div', {
                                    className: C()('TokensStepper_currencyIcon_7a', o),
                                    style: { backgroundImage: `url(${n})` },
                                }),
                            r().createElement(
                                'div',
                                { className: 'TokensStepper_controls_bf' },
                                r().createElement('div', {
                                    className: C()(
                                        jt,
                                        'TokensStepper_btnIncrement_d2',
                                        d && qt,
                                        !_ && 'TokensStepper_btnIncrement__disabled_71',
                                    ),
                                    onMouseEnter: Kt,
                                    onClick: () => {
                                        _ && (I(Yt), l());
                                    },
                                }),
                                r().createElement('div', {
                                    className: C()(
                                        jt,
                                        'TokensStepper_btnDecrement_3d',
                                        d && qt,
                                        A && 'TokensStepper_btnDecrement__scaled_82',
                                        !E && 'TokensStepper_btnDecrement__disabled_80',
                                    ),
                                    onMouseEnter: Kt,
                                    onClick: () => {
                                        E && (I(Yt), c());
                                    },
                                }),
                            ),
                        );
                    },
                    Zt = 'Calculator_calculatorField_e8',
                    Jt = 'Calculator_calculatorField__tokens_31',
                    ea = 'Calculator_iconStyle_87',
                    ua = R.images.armory_yard.gui.maps.icons.shop.token.s20(),
                    ta = R.images.armory_yard.gui.maps.icons.shop.buy.gold(),
                    aa = R.images.armory_yard.gui.maps.icons.shop.buy.crystal(),
                    ra = (0, a.memo)(
                        ({
                            coinsCost: e,
                            tokensValue: u,
                            goldConversion: t,
                            crystalConversion: n,
                            currencyAmount: s = 0,
                            maxGoldCount: o,
                            maxCrystalCount: i,
                            goldValue: l,
                            crystalValue: c,
                            setTokensValue: _,
                            setGoldValue: E,
                            setCrystalValue: m,
                        }) => {
                            const d = t || 1,
                                A = n || 1,
                                F = n ? Math.round(c / n) : 0,
                                D = e - (t ? Math.round(l / t) : 0) - F,
                                g = D > s ? s : D,
                                p = (0, a.useCallback)(() => {
                                    u < g && _(u + 1);
                                }, [g, _, u]),
                                B = (0, a.useCallback)(() => {
                                    u > 0 && _(u - 1);
                                }, [_, u]),
                                h = (0, a.useCallback)(() => {
                                    l < o && E(l + d);
                                }, [d, l, o, E]),
                                v = (0, a.useCallback)(() => {
                                    l > 0 && E(l - d);
                                }, [d, l, E]),
                                b = (0, a.useCallback)(() => {
                                    c + A <= i && m(c + A);
                                }, [c, m, i, A]),
                                f = (0, a.useCallback)(() => {
                                    c > 0 && m(c - A);
                                }, [c, m, A]);
                            return r().createElement(
                                'div',
                                { className: 'Calculator_base_96' },
                                r().createElement(
                                    'div',
                                    { className: C()(Zt, Jt) },
                                    r().createElement(Qt, {
                                        value: u,
                                        handleTokenIncrease: p,
                                        handleTokenDecrease: B,
                                        maxValue: g,
                                        minValue: 0,
                                        iconPath: ua,
                                        iconStyles: ea,
                                    }),
                                ),
                                Boolean(t) &&
                                    r().createElement(
                                        'div',
                                        { className: C()(Zt, Jt) },
                                        r().createElement(Qt, {
                                            value: l,
                                            handleTokenIncrease: h,
                                            handleTokenDecrease: v,
                                            maxValue: o,
                                            minValue: 0,
                                            iconPath: ta,
                                            iconStyles: ea,
                                        }),
                                    ),
                                Boolean(n) &&
                                    r().createElement(
                                        'div',
                                        { className: Zt },
                                        r().createElement(Qt, {
                                            value: c,
                                            handleTokenIncrease: b,
                                            handleTokenDecrease: f,
                                            maxValue: i,
                                            minValue: 0,
                                            iconPath: aa,
                                            iconStyles: ea,
                                        }),
                                    ),
                            );
                        },
                    ),
                    na = 'Footer_line_5b',
                    sa = 'Footer_limit_c0',
                    oa = R.strings.armory_shop.shopBuyView.footer,
                    ia = (0, a.memo)(
                        ({
                            tokensValue: e,
                            goldValue: u,
                            crystalValue: t,
                            isEnough: n,
                            available: s,
                            isOnlyArmoryCoins: o,
                            coinsCost: i,
                            currencyAmount: l,
                            isProduct: c,
                            isWalletAvailable: _,
                            limit: E,
                            isBundle: m,
                            goldConversion: d,
                            crystalConversion: A,
                            maxGoldCount: F,
                            maxCrystalCount: D,
                            buyProduct: g,
                            setTokensValue: p,
                            setGoldValue: B,
                            setCrystalValue: h,
                        }) => {
                            const v = (0, a.useState)(1),
                                b = v[0],
                                f = v[1],
                                w = (o && l < i) || !n,
                                S = i * b,
                                y = Math.floor(l / i) || 1,
                                x = -1 !== E,
                                P = x ? Math.min(y, E) : y,
                                T = o ? S : e,
                                N = (0, a.useCallback)(() => {
                                    b < P && f(b + 1);
                                }, [P, b]),
                                M = (0, a.useCallback)(() => {
                                    b > 1 && f(b - 1);
                                }, [b]),
                                L = (0, a.useCallback)(
                                    (e, u, t, a) => () => {
                                        g(e, u, t, a);
                                    },
                                    [g],
                                ),
                                k = (0, a.useMemo)(
                                    () =>
                                        r().createElement(cu, {
                                            text: oa.limit(),
                                            className: 'Footer_limit__text_50',
                                            format: {
                                                binding: {
                                                    count: r().createElement(cu, {
                                                        className: 'Footer_limit__text__count_2a',
                                                        text: String(E),
                                                    }),
                                                },
                                            },
                                        }),
                                    [E],
                                ),
                                O =
                                    c &&
                                    r().createElement(
                                        'div',
                                        { className: 'Footer_productCounter_dd' },
                                        r().createElement(Qt, {
                                            value: b,
                                            handleTokenIncrease: N,
                                            handleTokenDecrease: M,
                                            maxValue: P,
                                            minValue: 1,
                                        }),
                                        x &&
                                            !m &&
                                            r().createElement(
                                                'div',
                                                { className: C()(sa, 'Footer_limit__stepper_9d') },
                                                k,
                                            ),
                                    );
                            return r().createElement(
                                'div',
                                { className: 'Footer_base_fb' },
                                r().createElement('div', { className: C()(na, 'Footer_line__first_78') }),
                                r().createElement('div', { className: 'Footer_bg_f8' }),
                                r().createElement('div', { className: C()(na, 'Footer_line__second_3c') }),
                                s
                                    ? r().createElement(
                                          'div',
                                          { className: 'Footer_content_b8' },
                                          r().createElement(
                                              'div',
                                              {
                                                  className: C()(
                                                      'Footer_priceSection_fc',
                                                      (!x || m) && 'Footer_priceSection__unlimited_7c',
                                                  ),
                                              },
                                              r().createElement(
                                                  'div',
                                                  { className: 'Footer_finalPrice_cc' },
                                                  o
                                                      ? O
                                                      : r().createElement(
                                                            'div',
                                                            { className: 'Footer_calculator_a1' },
                                                            r().createElement(ra, {
                                                                coinsCost: i,
                                                                tokensValue: e,
                                                                goldConversion: d,
                                                                crystalConversion: A,
                                                                currencyAmount: l,
                                                                goldValue: u,
                                                                crystalValue: t,
                                                                maxGoldCount: F,
                                                                maxCrystalCount: D,
                                                                setTokensValue: p,
                                                                setGoldValue: B,
                                                                setCrystalValue: h,
                                                            }),
                                                            x && r().createElement('div', { className: sa }, k),
                                                        ),
                                                  r().createElement(
                                                      Ht,
                                                      {
                                                          type: kt.main,
                                                          mixClass: 'Footer_buyButton_95',
                                                          disabled: w,
                                                          onClick: L(o ? 0 : t, o ? 0 : u, T, b),
                                                      },
                                                      r().createElement(cu, {
                                                          text: oa.buy(),
                                                          className: 'Footer_buttonText_15',
                                                      }),
                                                  ),
                                              ),
                                          ),
                                          !_ &&
                                              r().createElement(
                                                  _e,
                                                  {
                                                      contentId:
                                                          R.views.armory_yard.lobby.feature.tooltips.ArmoryYardWalletNotAvailableTooltipView(
                                                              'resId',
                                                          ),
                                                  },
                                                  r().createElement(
                                                      'div',
                                                      { className: 'Footer_warning_53' },
                                                      r().createElement('div', {
                                                          className: 'Footer_warning__glow_cf',
                                                      }),
                                                      r().createElement('div', {
                                                          className: 'Footer_warning__icon_82',
                                                      }),
                                                  ),
                                              ),
                                      )
                                    : r().createElement(
                                          r().Fragment,
                                          null,
                                          r().createElement('div', { className: 'Footer_iconUnavailable_15' }),
                                          r().createElement(
                                              'div',
                                              { className: 'Footer_unavailable_38' },
                                              r().createElement(cu, {
                                                  text: oa.buyNotAvailable.title(),
                                                  className: 'Footer_unavailable__title_6b',
                                              }),
                                              r().createElement(cu, {
                                                  text: oa.buyNotAvailable.description(),
                                                  className: 'Footer_unavailable__description_e1',
                                              }),
                                          ),
                                      ),
                            );
                        },
                    );
                let la;
                !(function (e) {
                    ((e.ArmoryCoin = 'armory_coin'), (e.ProgressionToken = 'progression_token'));
                })(la || (la = {}));
                const ca = R.strings.armory_shop.shopBuyView.header,
                    _a = (0, a.memo)(({ productName: e, isVehicle: u, currencyAmount: t, vehicleRoleName: a }) =>
                        r().createElement(
                            'div',
                            { className: 'Header_base_c0' },
                            r().createElement(
                                'div',
                                { className: 'Header_productTitleWrapper_d5' },
                                r().createElement(cu, { className: 'Header_title_a4', text: e }),
                                u &&
                                    a &&
                                    r().createElement(
                                        'div',
                                        { className: 'Header_description_e9' },
                                        r().createElement('div', {
                                            className: 'Header_description__icon_00',
                                            style: {
                                                backgroundImage: `url(${R.images.gui.maps.icons.roleExp.roles.c_16x16.$dyn(a)})`,
                                            },
                                        }),
                                        r().createElement(cu, {
                                            className: 'Header_description__text_40',
                                            text: String(R.strings.menu.roleExp.roleName.$dyn(a)),
                                            format: {
                                                binding: {
                                                    groupName: String(R.strings.menu.roleExp.roleGroupName.$dyn(a)),
                                                },
                                            },
                                        }),
                                    ),
                            ),
                            r().createElement(
                                'div',
                                { className: 'Header_tokenCount_d3' },
                                r().createElement(cu, {
                                    className: 'Header_tokenCount__text_e8',
                                    text: ca.available(),
                                }),
                                r().createElement(
                                    _e,
                                    {
                                        contentId:
                                            R.views.armory_yard.lobby.feature.tooltips.ArmoryYardCurrencyTooltipView(
                                                'resId',
                                            ),
                                        args: { currency: la.ArmoryCoin },
                                        ignoreShowDelay: !0,
                                    },
                                    r().createElement(
                                        'div',
                                        { className: 'Header_tokenCount__underTooltip_55' },
                                        r().createElement(cu, { className: 'Header_tokenCount__count_14', text: t }),
                                        r().createElement('div', { className: 'Header_tokenCount__icon_c0' }),
                                    ),
                                ),
                            ),
                        ),
                    );
                let Ea, ma, da;
                (!(function (e) {
                    ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(Ea || (Ea = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(ma || (ma = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(da || (da = {})));
                const Aa = {
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
                    Fa = ({
                        isDiscount: e,
                        isInteractiveDiscount: u,
                        size: t,
                        type: a,
                        isEnough: n,
                        value: s,
                        discountValue: o,
                        showPlus: i,
                        stockBackgroundName: l = da.Red,
                    }) => {
                        const c = C()(Aa.value, Aa[`value__${a}`], !n && Aa.value__notEnough),
                            _ = C()(Aa.icon, Aa[`icon__${a}-${t}`]),
                            E = C()(Aa.stock, o && Aa.stock__indent, u && Aa.stock__interactive),
                            m = i && s > 0 && '+',
                            d = C()(Aa.base, Aa[`base__${t}`]);
                        return r().createElement(
                            'span',
                            { className: d },
                            r().createElement(
                                'span',
                                { className: c },
                                m,
                                r().createElement(pe, { value: s, format: a === ma.gold ? 'gold' : 'integral' }),
                            ),
                            r().createElement('span', { className: _ }),
                            e &&
                                r().createElement(
                                    'span',
                                    { className: E },
                                    r().createElement('span', {
                                        className: Aa.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${l})` },
                                    }),
                                    Boolean(o) && o,
                                ),
                        );
                    };
                Fa.defaultProps = { isEnough: !0 };
                const Da = r().memo(Fa),
                    ga = 'Price_cost_5e',
                    Ca = 'Price_cost__or_71',
                    pa = R.strings.armory_shop.shopBuyView.price,
                    Ba = (0, a.memo)(({ coinsCost: e, goldCurrency: u, crystalCurrency: t }) =>
                        r().createElement(
                            'div',
                            { className: 'Price_base_c2' },
                            r().createElement(cu, { className: ga, text: pa.cost() }),
                            r().createElement(cu, { className: 'Price_tokenCount_08', text: String(e) }),
                            r().createElement('div', { className: 'Price_tokenIcon_d9' }),
                            Boolean(u) &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(cu, { className: C()(ga, Ca), text: pa.separatorOr() }),
                                    r().createElement(Da, { type: ma.gold, value: u, size: Ea.small }),
                                ),
                            Boolean(t) &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(cu, { className: C()(ga, Ca), text: pa.separatorOr() }),
                                    r().createElement(Da, { type: ma.crystal, value: t, size: Ea.small }),
                                ),
                        ),
                    ),
                    ha = ({ value: e, tooltipArgs: u }) =>
                        r().createElement(
                            'div',
                            { className: 'DefaultReward_base_b3' },
                            r().createElement(
                                Cu,
                                { tooltipArgs: u, className: 'DefaultReward_tooltipWrapper_d7' },
                                r().createElement(
                                    'div',
                                    { className: 'DefaultReward_content_ce' },
                                    r().createElement('div', { className: 'DefaultReward_icon_15' }),
                                    r().createElement(cu, {
                                        className: 'DefaultReward_info_e3',
                                        text: R.strings.armory_shop.shopBuyView.reward.label(),
                                    }),
                                    r().createElement(cu, { className: 'DefaultReward_value_45', text: e }),
                                ),
                            ),
                        ),
                    va = {
                        base: 'Reward_base_e7',
                        content: 'Reward_content_86',
                        tooltipWrapper: 'Reward_tooltipWrapper_4b',
                        icon: 'Reward_icon_fb',
                        overlay: 'Reward_overlay_ea',
                        highlight: 'Reward_highlight_c9',
                        image: 'Reward_image_d3',
                        info: 'Reward_info_96',
                        info__vehicles: 'Reward_info__vehicles_f0',
                        info__multi: 'Reward_info__multi_35',
                        info__credits: 'Reward_info__credits_d3',
                        info__gold: 'Reward_info__gold_3c',
                        info__crystal: 'Reward_info__crystal_99',
                        info__premiumTank: 'Reward_info__premiumTank_ae',
                        value: 'Reward_value_12',
                        value__string: 'Reward_value__string_70',
                        value__multi: 'Reward_value__multi_fe',
                    },
                    ba = (0, a.memo)(
                        ({
                            name: e,
                            image: u,
                            special: t,
                            value: a,
                            valueType: n,
                            style: s,
                            tooltipArgs: o,
                            count: i,
                        }) => {
                            const l = xe(t),
                                c = Pe(t),
                                _ = i && Number(i) > 1,
                                E = n === Ae.CURRENCY || e === ht.equipCoin;
                            return r().createElement(
                                'div',
                                { className: va.base, style: s },
                                r().createElement(
                                    Cu,
                                    { tooltipArgs: o, className: va.tooltipWrapper },
                                    r().createElement(
                                        'div',
                                        { className: va.content },
                                        r().createElement(
                                            'div',
                                            { className: va.image },
                                            l &&
                                                r().createElement('div', {
                                                    className: va.highlight,
                                                    style: {
                                                        backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.small.${l}_highlight)`,
                                                    },
                                                }),
                                            u &&
                                                r().createElement('div', {
                                                    className: va.icon,
                                                    style: { backgroundImage: `url(${u})` },
                                                }),
                                            c &&
                                                r().createElement('div', {
                                                    className: va.overlay,
                                                    style: {
                                                        backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.small.${c}_overlay)`,
                                                    },
                                                }),
                                        ),
                                        a && r().createElement('div', { className: C()(va.info, va[`info__${e}`]) }, a),
                                        _ &&
                                            (E
                                                ? r().createElement(
                                                      'div',
                                                      { className: C()(va.value, va[`value__${e}`]) },
                                                      i,
                                                  )
                                                : r().createElement(cu, {
                                                      className: C()(va.value, va[`value__${n}`]),
                                                      text: R.strings.armory_shop.shopBuyView.reward.rest(),
                                                      format: { binding: { count: i } },
                                                  })),
                                    ),
                                ),
                            );
                        },
                    ),
                    fa = R.strings.armory_shop.shopBuyView.composition,
                    wa = ({ rewards: e }) =>
                        r().createElement(
                            'div',
                            { className: 'RewardsList_base_ba' },
                            r().createElement(cu, { className: 'RewardsList_title_a5', text: fa.title() }),
                            r().createElement(
                                'div',
                                { className: 'RewardsList_rewards_a3' },
                                ((e) =>
                                    e.map((e) => {
                                        const u = e.name === ht.Default;
                                        return Object.assign({}, e, {
                                            name: e.name,
                                            image: ye(e, de.Small),
                                            special: e.overlayType,
                                            value: u ? e.value : e.label,
                                            valueType:
                                                ((t = e.name),
                                                Be.includes(t)
                                                    ? Ae.MULTI
                                                    : he.includes(t)
                                                      ? Ae.CURRENCY
                                                      : ve.includes(t)
                                                        ? Ae.NUMBER
                                                        : be.includes(t)
                                                          ? Ae.PREMIUM_PLUS
                                                          : Ae.STRING),
                                            tooltipArgs: Re(
                                                { tooltipId: e.tooltipId, tooltipType: 'mergedReward' },
                                                Number.parseInt(e.tooltipContentId),
                                            ),
                                            count: e.value,
                                        });
                                        var t;
                                    }))(e).map((u, t) =>
                                    r().createElement(
                                        'div',
                                        {
                                            key: `${u.name}_${t}`,
                                            className: C()(
                                                'RewardsList_reward_08',
                                                t === e.length - 1 && 'RewardsList_reward__last_f8',
                                            ),
                                        },
                                        u.name === ht.Default ? r().createElement(ha, u) : r().createElement(ba, u),
                                    ),
                                ),
                            ),
                        ),
                    Sa = R.strings.armory_shop.shopBuyView.vehicleImage,
                    ya = (0, a.memo)(({ image: e, showVehiclePreview: u }) =>
                        r().createElement(
                            'div',
                            { className: 'VehicleImage_base_69' },
                            r().createElement('div', {
                                className: 'VehicleImage_vehicleImage_28',
                                style: { backgroundImage: `url(${e})` },
                            }),
                            r().createElement(
                                'div',
                                { className: 'VehicleImage_preview_ac' },
                                r().createElement(J, { label: Sa.preview(), onClick: u }),
                            ),
                        ),
                    );
                function Ra() {
                    return (
                        (Ra =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ra.apply(this, arguments)
                    );
                }
                const xa = R.strings.armory_shop;
                viewEnv.clearInternalCacheAfterFinalize();
                const Pa = (0, Y.observer)(() => {
                    viewEnv.clearInternalCacheAfterFinalize();
                    const e = pt(),
                        u = e.controls,
                        t = e.model,
                        n = t.computes.getRewards(),
                        o = t.root.get(),
                        i = o.item,
                        l = o.isWalletAvailable,
                        c = o.goldConversion,
                        _ = o.crystalConversion,
                        E = o.crystalAmount,
                        m = o.currencyAmount,
                        d = i.template,
                        A = i.coinsCost,
                        F = i.isOnlyArmoryCoins,
                        D = i.description,
                        g = i.available,
                        C = i.title,
                        p = i.itemType,
                        B = i.longDescription,
                        h = i.vehicleRoleName,
                        v = i.limit,
                        b = i.largeImage,
                        f = i.count,
                        w = Math.round(A * c),
                        S = Math.round(A * _),
                        y = m > A ? A : m,
                        R = w - y * c,
                        x = vt[d] === vt.other,
                        P = vt[d] === vt.vehicle,
                        T = vt[d] === vt.bundle,
                        N = d === O.Customization,
                        M = (0, a.useMemo)(() => ({ image: b, special: p, size: st.C_360x270 }), [p, b]);
                    !(function ({
                        key: e = V.n.ESCAPE,
                        callback: u = () => s.O.view.sendEvent.close(),
                        preventPropagation: t = !0,
                    } = {}) {
                        q(e, u, t);
                    })({ callback: u.back });
                    const L = (0, a.useState)(y),
                        k = L[0],
                        I = L[1],
                        H = (0, a.useState)(R),
                        U = H[0],
                        G = H[1],
                        W = (0, a.useState)(0),
                        X = W[0],
                        j = W[1],
                        Y = k + (U / c || 0) + (X / _ || 0) === A,
                        z = _ * Math.floor(E / _),
                        K = z < _ ? 0 : z,
                        Q = w - (k * c || 0) - (_ ? (X / _) * c : 0),
                        Z = _ ? Math.min(S - (k * _ || 0) - ((U / c) * _ || 0), K) : 0;
                    return r().createElement(
                        'div',
                        { className: 'App_base_e1' },
                        r().createElement($, {
                            caption: xa.shopBuyView.backCaption(),
                            goto: xa.shopBuyView.backGoto(),
                            type: 'back',
                            side: 'left',
                            classNames: { base: 'App_back_21' },
                            onClick: u.back,
                        }),
                        r().createElement(
                            'div',
                            { className: 'App_content_08' },
                            r().createElement(
                                'div',
                                { className: 'App_header_e6' },
                                r().createElement(_a, {
                                    productName: C,
                                    isVehicle: P,
                                    vehicleRoleName: h,
                                    currencyAmount: String(m),
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: 'App_productInfo_79' },
                                r().createElement(
                                    'div',
                                    { className: 'App_descriptionInfo_94' },
                                    r().createElement(
                                        'div',
                                        { className: 'App_description_00' },
                                        r().createElement(Mt, {
                                            description: D,
                                            longDescription: B,
                                            isVehicle: P,
                                            count: f,
                                            itemType: p,
                                        }),
                                    ),
                                    P &&
                                        r().createElement(
                                            'div',
                                            { className: 'App_compositionSet_a4' },
                                            r().createElement(yt, { title: C }),
                                        ),
                                    T &&
                                        r().createElement(
                                            'div',
                                            { className: 'App_rewards_ca' },
                                            r().createElement(wa, { rewards: n }),
                                        ),
                                    !F && r().createElement(Ba, { coinsCost: A, goldCurrency: w, crystalCurrency: S }),
                                ),
                                x
                                    ? r().createElement(
                                          _t,
                                          Ra({}, M, { onStylePreview: N ? u.showStylePreview : void 0 }),
                                      )
                                    : r().createElement(
                                          'div',
                                          { className: 'App_vehicleImage_3c' },
                                          r().createElement(ya, { image: b, showVehiclePreview: u.showVehiclePreview }),
                                      ),
                            ),
                            r().createElement(
                                'div',
                                { className: 'App_footer_82' },
                                r().createElement(ia, {
                                    tokensValue: k,
                                    goldValue: U,
                                    crystalValue: X,
                                    isEnough: Y,
                                    available: g,
                                    isOnlyArmoryCoins: F,
                                    coinsCost: A,
                                    currencyAmount: m,
                                    isProduct: x,
                                    isWalletAvailable: l,
                                    limit: v,
                                    isBundle: T,
                                    goldConversion: c,
                                    crystalConversion: _,
                                    maxGoldCount: Q,
                                    maxCrystalCount: Z,
                                    buyProduct: u.buyProduct,
                                    setTokensValue: I,
                                    setGoldValue: G,
                                    setCrystalValue: j,
                                }),
                            ),
                        ),
                    );
                });
                engine.whenReady.then(() => {
                    k().render(
                        r().createElement(Ct, null, r().createElement(M, null, r().createElement(Pa, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e].call(t.exports, t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, a] = deferred[i], n = !0, s = 0; s < u.length; s++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((n = !1), a < r && (r = a));
                    if (n) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > a; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, a];
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
        (__webpack_require__.j = 64),
        (() => {
            var e = { 64: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        r,
                        [n, s, o] = t,
                        i = 0;
                    if (n.some((u) => 0 !== e[u])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); i < n.length; i++)
                        ((r = n[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(8722));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
