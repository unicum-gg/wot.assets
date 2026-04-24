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
            527: (e, t, n) => {
                'use strict';
                (n.r(t), n.d(t, { mouse: () => i, onResize: () => u }));
                var r = n(2472),
                    a = n(1176);
                const u = (0, r.E)('clientResized'),
                    s = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    i = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, a.R)(!1);
                        }
                        function n() {
                            e.enabled && (0, a.R)(!0);
                        }
                        function r() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', n))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', n))
                                : (0, a.R)(!1);
                        }
                        const u = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const u = `mouse${t}`,
                                            i = s[t]((e) => n([e, 'outside']));
                                        function o(e) {
                                            n([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(u, o),
                                            r(),
                                            () => {
                                                a &&
                                                    (i(),
                                                    window.removeEventListener(u, o),
                                                    (e.listeners -= 1),
                                                    r(),
                                                    (a = !1));
                                            }
                                        );
                                    };
                                })(n)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, u, {
                            disable() {
                                ((e.enabled = !1), r());
                            },
                            enable() {
                                ((e.enabled = !0), r());
                            },
                            enableOutside() {
                                e.enabled && (0, a.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, a.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => u,
                        getSize: () => a,
                        graphicsQuality: () => s,
                    }));
                var r = n(527);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => r });
            },
            2472: (e, t, n) => {
                'use strict';
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => r });
            },
            3138: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => a });
                var r = n(5959);
                const a = { view: n(7641), client: r };
            },
            3722: (e, t, n) => {
                'use strict';
                function r(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function a(e, t, n) {
                    return `url(${r(e, t, n)})`;
                }
                (n.r(t), n.d(t, { getBgUrl: () => a, getTextureUrl: () => r }));
            },
            6112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => a });
                var r = n(2472);
                const a = {
                    onTextureFrozen: (0, r.E)('self.onTextureFrozen'),
                    onTextureReady: (0, r.E)('self.onTextureReady'),
                    onDomBuilt: (0, r.E)('self.onDomBuilt'),
                    onLoaded: (0, r.E)('self.onLoaded'),
                    onDisplayChanged: (0, r.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, r.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, r.E)('children.onAdded'),
                        onLoaded: (0, r.E)('children.onLoaded'),
                        onRemoved: (0, r.E)('children.onRemoved'),
                        onAttached: (0, r.E)('children.onAttached'),
                        onTextureReady: (0, r.E)('children.onTextureReady'),
                        onRequestPosition: (0, r.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => B,
                        events: () => u.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => F,
                        getScale: () => g,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => C,
                        isFocused: () => v,
                        pxToRem: () => b,
                        remToPx: () => h,
                        resize: () => d,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => A,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => w,
                    }));
                var r = n(3722),
                    a = n(6112),
                    u = n(6538),
                    s = n(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function c(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
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
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function v() {
                    return viewEnv.isFocused();
                }
                function A() {
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
                const B = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
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
                            window.isDomBuilt ? e() : u.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => u });
                const r = ['args'],
                    a = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const u = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        a = {},
                                        u = Object.keys(e);
                                    for (r = 0; r < u.length; r++) ((n = u[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                    return a;
                                })(t, r);
                            return void 0 !== u
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
                                          arguments:
                                              ((a = u),
                                              Object.entries(a).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    u = {
                        close(e) {
                            a('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            a(64);
                        },
                        move(e) {
                            a(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, n) => {
                'use strict';
                let r, a;
                (n.d(t, { n: () => r }),
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
                    })(r || (r = {})),
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
                    })(a || (a = {})));
            },
            3368: () => {
                (!(function () {
                    let e,
                        t,
                        n,
                        r,
                        a,
                        u,
                        s,
                        i = -1;
                    (document.addEventListener('mousedown', (n) => {
                        (document.getSelection().empty(),
                            n.target.select &&
                                -1 === i &&
                                ((e = n.target), (t = e.getBoundingClientRect()), e.setSelectionRange(0, 0)));
                    }),
                        document.addEventListener('mousemove', (n) => {
                            if ((-1 === i && n.target.select && n.target === e && (i = e.selectionStart), i > -1)) {
                                const r = Math.min(Math.max(n.x, t.left), t.right),
                                    a = Math.min(Math.max(n.y, t.top), t.bottom),
                                    u = document.createEvent('MouseEvent');
                                (u.initMouseEvent('mousedown', !0, !0, null, 1, r, a, r, a, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(u));
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
                                (n = e.target),
                                (r = e.target.value),
                                (a = n.selectionStart),
                                (u = -1 !== r.lastIndexOf(' ', a) ? r.lastIndexOf(' ', a) + 1 : 0),
                                (s = -1 !== r.indexOf(' ', a) ? r.indexOf(' ', a) : r.length),
                                n.setSelectionRange(u, s, 'forward'));
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
            1358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => u });
                var r = n(3138);
                class a {
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
                        return (window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, t, n = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const u = r.O.view.addModelObserver(e, n, a);
                        return (
                            u > 0
                                ? ((this._callbacks[u] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(u) : (this._views[n] = [u])))
                                : console.error("Can't add callback for model:", e),
                            u
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
                            const r = this._callbacks[n];
                            void 0 !== r && r(e, t);
                        });
                    }
                }
                a.__instance = void 0;
                const u = a;
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
            4179: (e, t, n) => {
                'use strict';
                n.d(t, { B3: () => c, Z5: () => s, B0: () => o, ry: () => f, Eu: () => v });
                class r {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let r = e.target;
                                    do {
                                        if (r === t) return;
                                        r = r.parentNode;
                                    } while (r);
                                    n();
                                });
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const n = e,
                            r = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== r)),
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
                r.__instance = void 0;
                const a = r;
                var u = n(1358);
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
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
                let o;
                var l;
                (((l = o || (o = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE'));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = n(5521),
                    p = n(3138);
                const g = ['args'];
                function b(e, t, n, r, a, u, s) {
                    try {
                        var i = e[u](s),
                            o = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    i.done ? t(o) : Promise.resolve(o).then(r, a);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    f = (function () {
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
                                    return new Promise(function (r, a) {
                                        var u = e.apply(t, n);
                                        function s(e) {
                                            b(u, r, a, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            b(u, r, a, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    v = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    A = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                u = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        a = {},
                                        u = Object.keys(e);
                                    for (r = 0; r < u.length; r++) ((n = u[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                    return a;
                                })(t, g);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, u, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, u));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    C = () => A(o.CLOSE),
                    D = (e, t) => {
                        e.keyCode === E.n.ESCAPE && t();
                    };
                var F = n(7572);
                const B = a.instance,
                    y = {
                        DataTracker: u.Z,
                        ViewModel: F.Z,
                        ViewEventType: o,
                        NumberFormatType: c,
                        RealFormatType: _,
                        TimeFormatType: m,
                        DateFormatType: d,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => A(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => A(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            A(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, a = R.invalid('resId'), u) => {
                            const s = p.O.view.getViewGlobalPosition(),
                                i = n.getBoundingClientRect(),
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
                            A(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: h(d),
                                on: !0,
                                args: u,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => D(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            D(e, C);
                        },
                        handleViewEvent: A,
                        onBindingsReady: f,
                        onLayoutReady: v,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const a = Object.prototype.toString.call(t[r]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[r];
                                        n[r] = [];
                                        for (let t = 0; t < a.length; t++) n[r].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[r] = e(t[r]))
                                            : (n[r] = t[r]);
                                }
                            return n;
                        },
                        ClickOutsideManager: B,
                        SystemLocale: s,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = y;
            },
            7294: (e, t, n) => {
                'use strict';
                var r = {};
                (n.r(r),
                    n.d(r, {
                        Area: () => wr,
                        Bar: () => Fr,
                        DefaultScroll: () => yr,
                        Direction: () => Er,
                        defaultSettings: () => pr,
                        useHorizontalScrollApi: () => br,
                    }));
                var a = {};
                (n.r(a), n.d(a, { Area: () => Hr, Bar: () => Rr, Default: () => Or, useVerticalScrollApi: () => Sr }));
                var u = n(6179),
                    s = n.n(u),
                    i = n(493),
                    o = n.n(i);
                const l = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
                var c = n(3138);
                const _ = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var m;
                function d(e, t, n) {
                    const r = (function (e, t) {
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
                        })(e, n),
                        a = (function (e, t) {
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
                        })(t, n),
                        u = Math.min(r, a);
                    return {
                        extraLarge: u === n.extraLarge.weight,
                        large: u === n.large.weight,
                        medium: u === n.medium.weight,
                        small: u === n.small.weight,
                        extraSmall: u === n.extraSmall.weight,
                        extraLargeWidth: r === n.extraLarge.weight,
                        largeWidth: r === n.large.weight,
                        mediumWidth: r === n.medium.weight,
                        smallWidth: r === n.small.weight,
                        extraSmallWidth: r === n.extraSmall.weight,
                        extraLargeHeight: a === n.extraLarge.weight,
                        largeHeight: a === n.large.weight,
                        mediumHeight: a === n.medium.weight,
                        smallHeight: a === n.small.weight,
                        extraSmallHeight: a === n.extraSmall.weight,
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
                })(m || (m = {}));
                const E = c.O.client.getSize('rem'),
                    p = E.width,
                    g = E.height,
                    b = Object.assign({ width: p, height: g }, d(p, g, _)),
                    h = (0, u.createContext)(b),
                    f = ['children'],
                    v = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((n = u[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                return a;
                            })(e, f);
                        const r = (0, u.useContext)(h),
                            a = r.extraLarge,
                            s = r.large,
                            i = r.medium,
                            o = r.small,
                            c = r.extraSmall,
                            _ = r.extraLargeWidth,
                            m = r.largeWidth,
                            d = r.mediumWidth,
                            E = r.smallWidth,
                            p = r.extraSmallWidth,
                            g = r.extraLargeHeight,
                            b = r.largeHeight,
                            v = r.mediumHeight,
                            A = r.smallHeight,
                            C = r.extraSmallHeight,
                            D = { extraLarge: g, large: b, medium: v, small: A, extraSmall: C };
                        if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                            if (n.extraLarge && a) return t;
                            if (n.large && s) return t;
                            if (n.medium && i) return t;
                            if (n.small && o) return t;
                            if (n.extraSmall && c) return t;
                        } else {
                            if (n.extraLargeWidth && _) return l(t, n, D);
                            if (n.largeWidth && m) return l(t, n, D);
                            if (n.mediumWidth && d) return l(t, n, D);
                            if (n.smallWidth && E) return l(t, n, D);
                            if (n.extraSmallWidth && p) return l(t, n, D);
                            if (
                                !(
                                    n.extraLargeWidth ||
                                    n.largeWidth ||
                                    n.mediumWidth ||
                                    n.smallWidth ||
                                    n.extraSmallWidth
                                )
                            ) {
                                if (n.extraLargeHeight && g) return t;
                                if (n.largeHeight && b) return t;
                                if (n.mediumHeight && v) return t;
                                if (n.smallHeight && A) return t;
                                if (n.extraSmallHeight && C) return t;
                            }
                        }
                        return null;
                    };
                ((v.defaultProps = {
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
                    (0, u.memo)(v));
                const A = (0, u.memo)(({ children: e }) => {
                    const t = (0, u.useContext)(h),
                        n = (0, u.useState)(t),
                        r = n[0],
                        a = n[1],
                        i = (0, u.useCallback)((e, t) => {
                            const n = c.O.view.pxToRem(e),
                                r = c.O.view.pxToRem(t);
                            a(Object.assign({ width: n, height: r }, d(n, r, _)));
                        }, []);
                    (((e) => {
                        const t = (0, u.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        engine.on('clientResized', i);
                    }),
                        (0, u.useEffect)(() => () => engine.off('clientResized', i), [i]));
                    const o = (0, u.useMemo)(() => Object.assign({}, r), [r]);
                    return s().createElement(h.Provider, { value: o }, e);
                });
                var C = n(6483),
                    D = n.n(C),
                    F = n(926),
                    B = n.n(F);
                let y, w, S;
                var N;
                (((N = y || (y = {}))[(N.ExtraSmall = _.extraSmall.width)] = 'ExtraSmall'),
                    (N[(N.Small = _.small.width)] = 'Small'),
                    (N[(N.Medium = _.medium.width)] = 'Medium'),
                    (N[(N.Large = _.large.width)] = 'Large'),
                    (N[(N.ExtraLarge = _.extraLarge.width)] = 'ExtraLarge'),
                    (function (e) {
                        ((e[(e.ExtraSmall = _.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = _.small.width)] = 'Small'),
                            (e[(e.Medium = _.medium.width)] = 'Medium'),
                            (e[(e.Large = _.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = _.extraLarge.width)] = 'ExtraLarge'));
                    })(w || (w = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = _.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = _.small.height)] = 'Small'),
                            (e[(e.Medium = _.medium.height)] = 'Medium'),
                            (e[(e.Large = _.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = _.extraLarge.height)] = 'ExtraLarge'));
                    })(S || (S = {})));
                const x = () => {
                        const e = (0, u.useContext)(h),
                            t = e.width,
                            n = e.height,
                            r = ((e) => {
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
                                        return (console.error('Unreachable media context resolution'), y.ExtraSmall);
                                }
                            })(e),
                            a = ((e) => {
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
                                        return (console.error('Unreachable media context resolution'), w.ExtraSmall);
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
                                        return (console.error('Unreachable media context resolution'), S.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: a, mediaHeight: s, remScreenWidth: t, remScreenHeight: n };
                    },
                    T = ['children', 'className'];
                function k() {
                    return (
                        (k =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        k.apply(this, arguments)
                    );
                }
                const M = {
                        [w.ExtraSmall]: '',
                        [w.Small]: B().SMALL_WIDTH,
                        [w.Medium]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH}`,
                        [w.Large]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH} ${B().EXTRA_LARGE_WIDTH}`,
                    },
                    L = {
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
                            n = e.className,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((n = u[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                return a;
                            })(e, T);
                        const a = x(),
                            u = a.mediaWidth,
                            i = a.mediaHeight,
                            o = a.mediaSize;
                        return s().createElement('div', k({ className: D()(n, M[u], L[i], P[o]) }, r), t);
                    },
                    O = ['children'],
                    H = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((n = u[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                return a;
                            })(e, O);
                        return s().createElement(A, null, s().createElement(I, n, t));
                    };
                function $() {}
                function W() {
                    return !1;
                }
                console.log;
                var U = n(3915);
                function z(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const G = (e) => (0 === e ? window : window.subViews.get(e)),
                    V = () => (e, t) => {
                        const n = (0, u.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: a, children: i, mocks: o }) {
                                const l = (0, u.useRef)([]),
                                    _ = (n, r, a) => {
                                        var u;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = G,
                                                context: r = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function u(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = a.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const a = n(t),
                                                        u = r.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? u
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, u);
                                                };
                                                return {
                                                    subscribe: (n, u) => {
                                                        const i = 'string' == typeof u ? `${r}.${u}` : r,
                                                            o = c.O.view.addModelObserver(i, t, !0);
                                                        return (a.set(o, n), e && n(s(u)), o);
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, t) => {
                                                        const n = s(t);
                                                        return (...t) => {
                                                            n(e(...t));
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
                                                                n = (function (e, t) {
                                                                    var n =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (n) return (n = n.call(e)).next.bind(n);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (n = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return z(e, t);
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
                                                                                          ? z(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        n && (e = n);
                                                                        var r = 0;
                                                                        return function () {
                                                                            return r >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[r++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(a.keys());
                                                            !(e = n()).done;
                                                        )
                                                            u(e.value, t);
                                                    },
                                                    unsubscribe: u,
                                                };
                                            })(r),
                                            i =
                                                'real' === n
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (u = null == a ? void 0 : a.getter)
                                                                  ? u
                                                                  : () => {},
                                                      }),
                                            o = (e) =>
                                                'mocks' === n ? (null == a ? void 0 : a.getter(e)) : i.readByPath(e),
                                            _ = (e) => l.current.push(e),
                                            m = e({
                                                mode: n,
                                                readByPath: o,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : o(e),
                                                            a = U.observable.box(r, { equals: W });
                                                        return (
                                                            'real' === n &&
                                                                i.subscribe(
                                                                    (0, U.action)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : o(e),
                                                            a = U.observable.box(r, { equals: W });
                                                        return (
                                                            'real' === n &&
                                                                i.subscribe(
                                                                    (0, U.action)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = o(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, t) => ((e[t] = U.observable.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    i.subscribe(
                                                                        (0, U.action)((t) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                u = Object.entries(a),
                                                                s = u.reduce(
                                                                    (e, [t, n]) => (
                                                                        (e[n] = U.observable.box(r[t], {})),
                                                                        e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    i.subscribe(
                                                                        (0, U.action)((e) => {
                                                                            u.forEach(([t, n]) => {
                                                                                s[n].set(e[t]);
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
                                            d = { mode: n, model: m, externalModel: i, cleanup: _ };
                                        return {
                                            model: m,
                                            controls: 'mocks' === n && a ? a.controls(d) : t(d),
                                            externalModel: i,
                                            mode: n,
                                        };
                                    },
                                    m = (0, u.useRef)(!1),
                                    d = (0, u.useState)(r),
                                    E = d[0],
                                    p = d[1],
                                    g = (0, u.useState)(() => _(r, a, o)),
                                    b = g[0],
                                    h = g[1];
                                return (
                                    (0, u.useEffect)(() => {
                                        m.current ? h(_(E, a, o)) : (m.current = !0);
                                    }, [o, E, a]),
                                    (0, u.useEffect)(() => {
                                        p(r);
                                    }, [r]),
                                    (0, u.useEffect)(
                                        () => () => {
                                            (b.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [b],
                                    ),
                                    s().createElement(n.Provider, { value: b }, i)
                                );
                            },
                            () => (0, u.useContext)(n),
                        ];
                    },
                    j = V()(
                        ({ observableModel: e }) => {
                            const t = {
                                root: e.object(),
                                progressionModel: e.object('progressionModel'),
                                divisionModel: e.object('divisionModel'),
                                orderModel: e.object('orderModel'),
                                questsModel: e.object('questsModel'),
                            };
                            return Object.assign({}, t);
                        },
                        ({ externalModel: e }) => ({
                            onClose: e.createCallbackNoArgs('onClose'),
                            onAboutClicked: e.createCallbackNoArgs('onAboutClicked'),
                            onTabChange: e.createCallback((e) => ({ tabId: e }), 'onTabChange'),
                        }),
                    ),
                    X = j[0],
                    q = j[1];
                var Q = n(3282),
                    Y = n(5521),
                    K = n(4179);
                const Z = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function J(e = Y.n.NONE, t = Z, n = !1) {
                    (0, u.useEffect)(() => {
                        if (e !== Y.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (c.O.view.isEventHandled()) return;
                                (c.O.view.setEventHandled(), t(r), n && r.stopPropagation());
                            }
                        }
                    }, [t, e, n]);
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
                    ne = {
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
                    re = [
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
                function ae() {
                    return (
                        (ae =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        ae.apply(this, arguments)
                    );
                }
                class ue extends s().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && ee(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                (e && e(t), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && ee(this.props.soundClick));
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                (e && e(t), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            n = e.onClick,
                            r = e.goto,
                            a = e.side,
                            u = e.type,
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
                                    var n,
                                        r,
                                        a = {},
                                        u = Object.keys(e);
                                    for (r = 0; r < u.length; r++) ((n = u[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                    return a;
                                })(e, re)),
                            d = D()(ne.base, ne[`base__${u}`], ne[`base__${a}`], null == i ? void 0 : i.base),
                            E = D()(ne.icon, ne[`icon__${u}`], ne[`icon__${a}`], null == i ? void 0 : i.icon),
                            p = D()(ne.glow, null == i ? void 0 : i.glow),
                            g = D()(ne.caption, ne[`caption__${u}`], null == i ? void 0 : i.caption),
                            b = D()(ne.goto, null == i ? void 0 : i.goto);
                        return s().createElement(
                            'div',
                            ae(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                m,
                            ),
                            'info' !== u && s().createElement('div', { className: ne.shine }),
                            s().createElement('div', { className: E }, s().createElement('div', { className: p })),
                            s().createElement('div', { className: g }, t),
                            r && s().createElement('div', { className: b }, r),
                        );
                    }
                }
                ue.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
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
                const oe = (e, t, n = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: K.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                n,
                            ),
                        );
                    },
                    le = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            r = e.args,
                            a = e.onMouseEnter,
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
                            f = e.onShow,
                            v = e.onHide,
                            A = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((n = u[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                return a;
                            })(e, se);
                        const C = (0, u.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            D = (0, u.useMemo)(
                                () =>
                                    h ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let n,
                                            r = R.invalid('resId');
                                        return (
                                            t &&
                                                ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== n &&
                                                    window.subViews[n] &&
                                                    (r = window.subViews[n].id)),
                                            { caller: n, stack: t, resId: r }
                                        );
                                    })().resId,
                                [h],
                            ),
                            F = (0, u.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (oe(n, E, { isMouseEvent: !0, on: !0, arguments: ie(r) }, D),
                                    f && f(),
                                    (C.current.isVisible = !0));
                            }, [n, E, r, D, f]),
                            B = (0, u.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        oe(n, E, { on: !1 }, D),
                                        C.current.isVisible && v && v(),
                                        (C.current.isVisible = !1));
                                }
                            }, [n, E, D, v]),
                            y = (0, u.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(C.current.prevTarget) && B();
                                    }, 200)));
                            }, []);
                        return (
                            (0, u.useEffect)(() => {
                                const e = C.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', y, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', y, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, u.useEffect)(() => {
                                !1 === g && B();
                            }, [g, B]),
                            (0, u.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', B),
                                    () => {
                                        (window.removeEventListener('mouseleave', B), B());
                                    }
                                ),
                                [B],
                            ),
                            g
                                ? (0, u.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((w = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((C.current.timeoutId = window.setTimeout(F, c ? 100 : 400)),
                                                          a && a(e),
                                                          w && w(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  (B(), null == s || s(t), null == e || e(t));
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  (!1 === m && B(), null == o || o(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === m && B(), null == i || i(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          A,
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
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        _e.apply(this, arguments)
                    );
                }
                const me = R.views.common.tooltip_window.simple_tooltip_content,
                    de = (e) => {
                        let t = e.children,
                            n = e.body,
                            r = e.header,
                            a = e.note,
                            i = e.alert,
                            o = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((n = u[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                return a;
                            })(e, ce);
                        const c = (0, u.useMemo)(() => {
                            const e = Object.assign({}, o, { body: n, header: r, note: a, alert: i });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [i, n, r, a, o]);
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
                    };
                var pe = n(8552);
                const ge = {
                        base: 'Frame_base_af',
                        base__small: 'Frame_base__small_f0',
                        base__medium: 'Frame_base__medium_05',
                        border: 'Frame_border_17',
                        border__top: 'Frame_border__top_f7',
                        border__bottom: 'Frame_border__bottom_52',
                        arrow: 'Frame_arrow_c3',
                    },
                    be = s().forwardRef(function ({ classNames: e, arrowRef: t, size: n = 'medium', className: r }, a) {
                        return s().createElement(
                            'div',
                            { className: D()(ge.base, ge[`base__${n}`], r), ref: a },
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
                    fe = { mouseEnter: 'highlight', click: 'play' },
                    ve = s().forwardRef(function (
                        {
                            id: e,
                            isActive: t,
                            className: n,
                            classNames: r,
                            sounds: a = fe,
                            notification: u,
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
                        const p = (e, n) => {
                                !t && a[n] && ee(a[n]);
                            },
                            g = s().createElement(
                                'div',
                                {
                                    className: D()(
                                        he.base,
                                        he[`base__${o}`],
                                        t && D()(he.base__active, null == r ? void 0 : r.activeTab),
                                        n,
                                    ),
                                    onClick: ((e) => () => {
                                        (p(0, 'click'), null == c || c(e));
                                    })(e),
                                    onMouseEnter: ((e) => () => {
                                        (p(0, 'mouseEnter'), null == _ || _(e));
                                    })(e),
                                    onMouseLeave: ((e) => () => {
                                        (p(0, 'mouseLeave'), null == m || m(e));
                                    })(e),
                                    ref: t ? E : null,
                                },
                                s().createElement('div', {
                                    className: D()(he.highlight, null == r ? void 0 : r.highlight),
                                }),
                                'function' == typeof i && o
                                    ? i(o)
                                    : s().createElement('div', {
                                          className: D()(he.icon, he[`icon__${o}`], null == r ? void 0 : r.icon),
                                          style: { backgroundImage: `url(${i})` },
                                      }),
                                l && l({ id: e, isActive: t, size: o }),
                                u &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: D()(
                                                he.notification,
                                                he[`notification__${u.type}`],
                                                u.size ? he[`notification__${u.size}`] : he.notification__medium,
                                                null == r ? void 0 : r.notification,
                                            ),
                                        },
                                        'dot' !== u.type && u.value,
                                    ),
                            );
                        return d ? s().createElement(d, { key: e, id: e }, g) : g;
                    }),
                    Ae = {
                        base: 'VerticalTabs_base_41',
                        title: 'VerticalTabs_title_8c',
                        group: 'VerticalTabs_group_08',
                        group__small: 'VerticalTabs_group__small_69',
                        group__medium: 'VerticalTabs_group__medium_68',
                    },
                    Ce = s().memo(function ({
                        active: e,
                        tabs: t,
                        sounds: n,
                        className: r,
                        classNames: a,
                        size: i = 'medium',
                        additionContent: o,
                        onClick: l,
                        onMouseEnter: _,
                        onMouseLeave: m,
                        WrapperElement: d,
                    }) {
                        const E = (0, u.useRef)(null),
                            p = (0, u.useRef)(null),
                            g = (0, u.useRef)(null),
                            b = (0, u.useRef)(null),
                            h = (0, pe.useSpring)(() => ({
                                marginLeft: 0,
                                onChange: (e) => {
                                    const t = E.current;
                                    t && (t.style.marginLeft = `${e.value.marginLeft}rem`);
                                },
                            }))[1],
                            f = (0, pe.useSpring)(() => ({
                                opacity: 0,
                                onChange: (e) => {
                                    const t = E.current;
                                    t && (t.style.opacity = `${e.value.opacity}`);
                                },
                            }))[1],
                            v = (0, pe.useSpring)(() => ({
                                position: 0,
                                onChange: (e) => {
                                    const t = p.current;
                                    t &&
                                        (t.style.transform = `translateY(${e.value.position / c.O.view.getScale()}rem)`);
                                },
                                onStart: () => {
                                    (h.start({
                                        from: { marginLeft: 12 },
                                        to: { marginLeft: 0 },
                                        config: { duration: 50 },
                                    }),
                                        f.start({
                                            from: { opacity: 1 },
                                            to: { opacity: 0 },
                                            config: { duration: 50 },
                                        }));
                                },
                                onRest: () => {
                                    (h.start({
                                        from: { marginLeft: 0 },
                                        to: { marginLeft: 12 },
                                        config: { duration: 150 },
                                    }),
                                        f.start({
                                            from: { opacity: 0 },
                                            to: { opacity: 1 },
                                            config: { duration: 150 },
                                        }));
                                },
                            }))[1],
                            A = (0, u.useCallback)((e) => {
                                null !== g.current &&
                                    null !== b.current &&
                                    e(g.current.getBoundingClientRect().top - b.current.getBoundingClientRect().top);
                            }, []);
                        var C, F;
                        return (
                            (0, u.useEffect)(() => {
                                A((e) => {
                                    v.start({ position: e, config: { duration: 200 } });
                                });
                            }, [v, e, A]),
                            (0, u.useEffect)(
                                () =>
                                    Ee(() => {
                                        A((e) => {
                                            v.start({ position: e, immediate: !0 });
                                        });
                                    }),
                                [v, A, i],
                            ),
                            (C = () => {
                                A((e) => {
                                    v.start({ position: e, config: { duration: 200 } });
                                });
                            }),
                            (F = [v, A]),
                            (0, u.useEffect)(() => {
                                let e = () => {};
                                const t = () => {
                                    (e(), (e = Ee(C)));
                                };
                                return (
                                    window.addEventListener('resize', t),
                                    () => {
                                        (e(), window.removeEventListener('resize', t));
                                    }
                                );
                            }, F),
                            s().createElement(
                                'div',
                                { className: D()(Ae.base, r), ref: b },
                                t.map(({ id: t, items: r, title: u, groupClassNames: c }) =>
                                    s().createElement(
                                        'div',
                                        {
                                            key: t,
                                            className: D()(Ae.group, Ae[`group__${i}`], null == c ? void 0 : c.group),
                                        },
                                        u &&
                                            s().createElement(
                                                'div',
                                                { className: D()(Ae.title, null == c ? void 0 : c.title) },
                                                u,
                                            ),
                                        r.map(({ id: t, icon: r, notification: u }) =>
                                            s().createElement(ve, {
                                                key: t,
                                                id: t,
                                                icon: r,
                                                notification: u,
                                                ref: g,
                                                sounds: n,
                                                isActive: e === t,
                                                size: i,
                                                className: null == a ? void 0 : a.tab,
                                                classNames: a,
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
                                    className: null == a ? void 0 : a.frame,
                                    classNames: a,
                                }),
                            )
                        );
                    });
                let De, Fe, Be;
                (!(function (e) {
                    ((e[(e.Progress = 0)] = 'Progress'),
                        (e[(e.Division = 1)] = 'Division'),
                        (e[(e.Quests = 2)] = 'Quests'),
                        (e[(e.Order = 3)] = 'Order'));
                })(De || (De = {})),
                    (function (e) {
                        ((e.Small = 'x2'), (e.Medium = 'x3'), (e.Big = 'x5'));
                    })(Fe || (Fe = {})),
                    (function (e) {
                        ((e.Defence = 'defence'), (e.Offence = 'offence'));
                    })(Be || (Be = {})),
                    Fe.Small,
                    Fe.Medium,
                    Fe.Big);
                const ye = 'event_details_show',
                    we = 'event_details_close';
                let Se, Ne;
                (!(function (e) {
                    ((e.SHOW_DETAILS = 'ev_secret_event_hangar_ui_icon_selection'),
                        (e.HIGHLIGHT = 'ev_secret_event_hangar_ui_highlight'));
                })(Se || (Se = {})),
                    (function (e) {
                        ((e.Orange = 'orange'), (e.Green = 'green'));
                    })(Ne || (Ne = {})));
                const xe = -1;
                let Te, ke;
                (!(function (e) {
                    ((e.Default = 'default'), (e.Selected = 'selected'), (e.NotSelected = 'notSelected'));
                })(Te || (Te = {})),
                    (function (e) {
                        ((e.Front = 'front'), (e.Back = 'back'));
                    })(ke || (ke = {})));
                const Me = 450;
                let Le;
                function Pe(e, t) {
                    var n;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
                }
                !(function (e) {
                    ((e.C_400X400 = 'c_400x400'),
                        (e.C_260X260 = 'c_260x260'),
                        (e.C_210X210 = 'c_210x210'),
                        (e.C_180X180 = 'c_180x180'));
                })(Le || (Le = {}));
                const Re = Pe;
                function Ie(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function Oe(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, r) => t(null == e ? void 0 : e.value, n, r));
                }
                function He(e, t) {
                    for (let n = 0; n < e.length; n++) {
                        const r = Ie(e[n]);
                        if (t(r, n, e)) return r;
                    }
                }
                const $e = (e) =>
                        null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? Oe(e, (e) => ('object' == typeof e ? $e(e) : e))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? $e(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, t]) => [e, 'object' == typeof t ? $e(t) : t]),
                                    )
                            : e,
                    We = (e) => $e(e),
                    Ue = (e, t) =>
                        Object.keys(e).length === Object.keys(t).length &&
                        Object.keys(e).every((n) => Object.prototype.hasOwnProperty.call(t, n) && e[n] === t[n]);
                var ze = n(6517);
                let Ge, Ve, je, Xe, qe, Qe, Ye;
                var Ke;
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
                })(Ge || (Ge = {})),
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
                    })(Ve || (Ve = {})),
                    ((Ke = je || (je = {})).Big = 'big'),
                    (Ke.Small = 'small'),
                    (Ke.Mini = 'mini'),
                    (Ke.S600x450 = 's600x450'),
                    (Ke.S400x300 = 's400x300'),
                    (Ke.S296x222 = 's296x222'),
                    (Ke.S232x174 = 's232x174'),
                    (Ke.S180x135 = 's180x135'),
                    (Ke.S128x100 = 's128x100'),
                    (Ke.S80x80 = 's80x80'),
                    (Ke.S48x48 = 's48x48'),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(Xe || (Xe = {})),
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
                    })(qe || (qe = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Qe || (Qe = {})),
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
                    })(Ye || (Ye = {})));
                const Ze = ['children'];
                function Je() {
                    return (
                        (Je =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Je.apply(this, arguments)
                    );
                }
                const et = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                a = {},
                                u = Object.keys(e);
                            for (r = 0; r < u.length; r++) ((n = u[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                            return a;
                        })(e, Ze);
                    return s().createElement(
                        le,
                        Je(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            n,
                        ),
                        t,
                    );
                };
                function tt() {
                    return (
                        (tt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        tt.apply(this, arguments)
                    );
                }
                const nt = ({ children: e, tooltipArgs: t, className: n }) => {
                    if (!t) return e;
                    const r = s().createElement('div', { className: n }, e);
                    if (t.header || t.body) return s().createElement(de, t, r);
                    const a = t.contentId,
                        u = t.args,
                        i = null == u ? void 0 : u.contentId;
                    return a || i
                        ? s().createElement(le, tt({}, t, { contentId: a || i }), r)
                        : s().createElement(et, t, r);
                };
                class rt extends s().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? K.B3.GOLD : K.B3.INTEGRAL;
                        const t = K.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                rt.defaultProps = { format: 'integral' };
                const at = [
                        Ge.Items,
                        Ge.Equipment,
                        Ge.Xp,
                        Ge.XpFactor,
                        Ge.Blueprints,
                        Ge.BlueprintsAny,
                        Ge.Goodies,
                        Ge.Berths,
                        Ge.Slots,
                        Ge.Tokens,
                        Ge.CrewSkins,
                        Ge.CrewBooks,
                        Ge.Customizations,
                        Ge.CreditsFactor,
                        Ge.TankmenXp,
                        Ge.TankmenXpFactor,
                        Ge.FreeXpFactor,
                        Ge.BattleToken,
                        Ge.PremiumUniversal,
                        Ge.NaturalCover,
                        Ge.BpCoin,
                        Ge.BattlePassSelectToken,
                        Ge.BattlaPassFinalAchievement,
                        Ge.BattleBadge,
                        Ge.BonusX5,
                        Ge.CrewBonusX3,
                        Ge.NewYearFillers,
                        Ge.NewYearInvoice,
                        Ge.EpicSelectToken,
                        Ge.Comp7TokenWeeklyReward,
                        Ge.Comp7TokenCouponReward,
                        Ge.BattleBoosterGift,
                        Ge.CosmicLootboxCommon,
                        Ge.CosmicLootboxSilver,
                        Ge.SelectableBonus,
                        Ge.GoldenTicket,
                        Ge.PostStamp,
                        Ge.PremiumPlusUniversal,
                    ],
                    ut = [Ge.Gold, Ge.Credits, Ge.Crystal, Ge.FreeXp],
                    st = [Ge.BattlePassPoints],
                    it = [Ge.PremiumPlus, Ge.Premium];
                let ot;
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
                })(ot || (ot = {}));
                const lt = ['engravings', 'backgrounds'],
                    ct = ['engraving', 'background'],
                    _t = (e, t = je.Small) => {
                        const n = e.name,
                            r = e.type,
                            a = e.value,
                            u = e.icon,
                            s = e.item,
                            i = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case je.S600x450:
                                        return 'c_600x450';
                                    case je.S400x300:
                                        return 'c_400x300';
                                    case je.S296x222:
                                        return 'c_296x222';
                                    case je.S232x174:
                                        return 'c_232x174';
                                    case je.Big:
                                        return 'c_80x80';
                                    case je.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (n) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}_${a}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_plus_${a}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${u}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, t) => {
                                    switch (t) {
                                        case je.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case je.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                                    }
                                })(e, t);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${u}`;
                            case 'dogTagComponents':
                                return ((e, t, n) => {
                                    const r = lt[e];
                                    if (r) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(r),
                                            u = a.$dyn(n);
                                        return u ? `${u}` : `${a.$dyn(ct[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, t, u);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${u}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${((e) => {
                                    switch (e) {
                                        case je.S600x450:
                                            return 'c_600x450';
                                        case je.S400x300:
                                            return 'c_400x300';
                                        case je.S296x222:
                                            return 'c_296x222';
                                        case je.S232x174:
                                            return 'c_232x174';
                                        case je.S180x135:
                                            return 'big';
                                        case je.Big:
                                        case je.S80x80:
                                            return 'c_80x80';
                                        case je.Small:
                                        case je.S48x48:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(t)}.${u}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${o}.${u}`;
                            case 'premium_universal':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.premium_plus_universal`;
                            case 'armory_coin':
                                return `R.images.armory_yard.gui.maps.icons.token.sf${((e) => {
                                    switch (e) {
                                        case je.Mini:
                                            return ot.s32;
                                        case je.Small:
                                        case je.S48x48:
                                            return ot.s48;
                                        case je.S80x80:
                                        case je.Big:
                                            return ot.s80;
                                        case je.S128x100:
                                            return ot.s116;
                                        case je.S180x135:
                                        case je.S232x174:
                                        case je.S296x222:
                                            return ot.s296;
                                        case je.S400x300:
                                            return ot.s400;
                                        case je.S600x450:
                                            return ot.s600;
                                    }
                                })(t)}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}`;
                        }
                    },
                    mt = (e, t, n) => {
                        const r = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            r,
                            n,
                        );
                    },
                    dt = {
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
                    Et = ({
                        name: e,
                        image: t,
                        isPeriodic: n = !1,
                        size: r = je.Big,
                        special: a,
                        value: u,
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
                                    case qe.BATTLE_BOOSTER:
                                    case qe.BATTLE_BOOSTER_REPLACE:
                                        return Qe.BATTLE_BOOSTER;
                                }
                            })(a),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case qe.BATTLE_BOOSTER:
                                        return Ye.BATTLE_BOOSTER;
                                    case qe.BATTLE_BOOSTER_REPLACE:
                                        return Ye.BATTLE_BOOSTER_REPLACE;
                                    case qe.BUILT_IN_EQUIPMENT:
                                        return Ye.BUILT_IN_EQUIPMENT;
                                    case qe.EQUIPMENT_PLUS:
                                        return Ye.EQUIPMENT_PLUS;
                                    case qe.EQUIPMENT_TROPHY_BASIC:
                                        return Ye.EQUIPMENT_TROPHY_BASIC;
                                    case qe.EQUIPMENT_TROPHY_UPGRADED:
                                        return Ye.EQUIPMENT_TROPHY_UPGRADED;
                                    case qe.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Ye.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case qe.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Ye.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case qe.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Ye.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case qe.PROGRESSION_STYLE_UPGRADED_1:
                                        return Ye.PROGRESSION_STYLE_UPGRADED_1;
                                    case qe.PROGRESSION_STYLE_UPGRADED_2:
                                        return Ye.PROGRESSION_STYLE_UPGRADED_2;
                                    case qe.PROGRESSION_STYLE_UPGRADED_3:
                                        return Ye.PROGRESSION_STYLE_UPGRADED_3;
                                    case qe.PROGRESSION_STYLE_UPGRADED_4:
                                        return Ye.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(a),
                            p = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case Xe.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case Xe.CURRENCY:
                                    case Xe.NUMBER:
                                        return s().createElement(rt, { format: 'integral', value: Number(e) });
                                    case Xe.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(u, i);
                        return s().createElement(
                            'div',
                            { className: D()(dt.base, dt[`base__${r}`], l), style: o },
                            s().createElement(
                                nt,
                                { tooltipArgs: _, className: dt.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: D()(dt.image, null == c ? void 0 : c.image) },
                                        d &&
                                            s().createElement('div', {
                                                className: D()(dt.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${d}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            s().createElement('div', {
                                                className: D()(dt.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        E &&
                                            s().createElement('div', {
                                                className: D()(dt.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    p &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: D()(
                                                    dt.info,
                                                    dt[`info__${e}`],
                                                    i === Xe.MULTI && dt.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            p,
                                        ),
                                ),
                            ),
                            n &&
                                s().createElement(
                                    nt,
                                    { tooltipArgs: m },
                                    s().createElement('div', {
                                        className: D()(dt.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    };
                let pt, gt;
                var bt;
                function ht() {
                    return (
                        (ht =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        ht.apply(this, arguments)
                    );
                }
                (((bt = pt || (pt = {})).InProgress = 'inProgress'),
                    (bt.Completed = 'completed'),
                    (function (e) {
                        ((e.Progression = 'progression'), (e.Quests = 'quests'));
                    })(gt || (gt = {})));
                const ft = (e) => ('overlayType' in e ? e.overlayType : void 0),
                    vt = [Ge.TmanToken],
                    At = [Ge.TmanToken, Ge.HistoricalBattleDiscount25, Ge.BattlaPassFinalAchievement, Ge.BattleBadge];
                function Ct(e, t, n = !1) {
                    const r = x(),
                        a = ((e, t) => t || (y.Medium, je.Small))(r.mediaSize, t),
                        u = ((e, t = !1) =>
                            e <= y.Small
                                ? je.S296x222
                                : e >= y.Large
                                  ? je.S600x450
                                  : t
                                    ? e >= y.Medium
                                        ? je.S400x300
                                        : je.S600x450
                                    : je.S400x300)(r.remScreenWidth),
                        s = [...e],
                        i = 3 === s.length,
                        o = ((e) => {
                            const t = e.findIndex((e) => e.name === Ge.TmanToken);
                            return -1 !== t ? t : e.findIndex((e) => At.includes(e.name));
                        })(s);
                    if (-1 !== o) {
                        const e = s.splice(o, 1)[0],
                            t = Math.floor(s.length / 2);
                        s.splice(t, 0, e);
                    }
                    const l = Oe(s, (e, t) => {
                            let r = ht({}, e);
                            return Object.assign({}, r, {
                                special: ft(r),
                                image: _t(r, n && 1 === t && i ? u : a),
                                isMiddleReward: n && 1 === t && i,
                                size: n && 1 === t && i ? u : a,
                                valueType:
                                    ((s = r.name),
                                    s.includes('hb_front_coupon')
                                        ? Xe.MULTI
                                        : ((e) =>
                                              at.includes(e)
                                                  ? Xe.MULTI
                                                  : ut.includes(e)
                                                    ? Xe.CURRENCY
                                                    : st.includes(e)
                                                      ? Xe.NUMBER
                                                      : it.includes(e)
                                                        ? Xe.PREMIUM_PLUS
                                                        : Xe.STRING)(s)),
                                tooltipArgs: mt({ tooltipId: r.tooltipId, tooltipContentId: r.tooltipContentId }),
                            });
                            var s;
                        }),
                        c = l.filter(({ name: e }) => !vt.includes(e));
                    return { parsedRewards: l, filteredRewards: c, imageSize: a };
                }
                const Dt = {
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
                let Ft;
                !(function (e) {
                    ((e.Awards = 'awards'),
                        (e.Condition = 'condition'),
                        (e.CompletedBattleQuests = 'completedBattleQuests'),
                        (e.InProgressBattleQuests = 'inProgressBattleQuests'));
                })(Ft || (Ft = {}));
                const Bt = ({ children: e, statusAnimation: t, type: n }) =>
                        s().createElement(
                            'div',
                            { className: D()(Dt.base, Dt[`base__${n}`], Dt[`base__${t}`]) },
                            s().createElement(
                                'div',
                                { className: D()(Dt.separator, Dt.separator__left) },
                                s().createElement(
                                    'div',
                                    { className: Dt.ellipse },
                                    s().createElement(
                                        'div',
                                        { className: Dt.firstLayer },
                                        s().createElement('div', { className: Dt.secondLayer }),
                                    ),
                                ),
                            ),
                            e,
                            s().createElement(
                                'div',
                                { className: D()(Dt.separator, Dt.separator__right) },
                                s().createElement(
                                    'div',
                                    { className: Dt.ellipse },
                                    s().createElement(
                                        'div',
                                        { className: Dt.firstLayer },
                                        s().createElement('div', { className: Dt.secondLayer }),
                                    ),
                                ),
                            ),
                        ),
                    yt = {
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
                let wt;
                function St(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function Nt(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const n = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(n, -n)]);
                    });
                }
                function xt(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(wt || (wt = {}));
                const Tt = (e) => e.replace(/&nbsp;/g, ' '),
                    kt = (e, t, n) => {
                        if (n % 2) {
                            const n = e.pop();
                            return [...e, n + t];
                        }
                        return [...e, t];
                    },
                    Mt = (e, t, n) => {
                        if (0 === n) return [t];
                        if (n % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const n = e.pop();
                            return [...e, n + t];
                        }
                    },
                    Lt = (e, t, n = wt.left) => e.split(t).reduce(n === wt.left ? kt : Mt, []),
                    Pt = (() => {
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
                    Rt = ['zh_cn', 'zh_sg', 'zh_tw'],
                    It = (e, t, n) =>
                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                            n && e in n
                                ? n[e]
                                : ((e, t = wt.left) => {
                                      const n = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return Rt.includes(n)
                                          ? Pt(e)
                                          : ((e, t = wt.left) => {
                                                let n = [];
                                                const r =
                                                        /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                    a = Tt(e);
                                                return (
                                                    Lt(a, /( )/, t).forEach((e) => (n = n.concat(Lt(e, r, wt.left)))),
                                                    n
                                                );
                                            })(e, t);
                                  })(e, t),
                        ),
                    Ot = ({ binding: e, text: t = '', classMix: n, alignment: r = wt.left }) =>
                        null === t
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : s().createElement(
                                  u.Fragment,
                                  null,
                                  t.split('\n').map((t, a) =>
                                      s().createElement(
                                          'div',
                                          { className: D()('FormatText_base_d0', n), key: `${t}-${a}` },
                                          It(t, r, e).map((e, t) =>
                                              s().createElement(u.Fragment, { key: `${t}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    Ht = { 0: 'firstCondition', 1: 'secondCondition' },
                    $t = (e, t) => {
                        const n = [];
                        if ('or' === e.conditionType || 'and' === e.conditionType)
                            e.items.forEach((e) => {
                                const r = Ie(e);
                                r && n.push(...$t(r, t));
                            });
                        else {
                            const r = e.descrData;
                            let a = e,
                                u = a.titleData,
                                s = a.current,
                                i = a.total,
                                o = a.earned,
                                l = a.iconKey;
                            const c = Pe(t, 0);
                            (c &&
                                ((u = r || c.descrData),
                                (l = l || c.iconKey),
                                (s = c.current),
                                (i = c.total),
                                (o = c.earned)),
                                0 === i && (u = r),
                                n.push({ condition: u, lastValue: o, currentValue: s, maxValue: i, icon: l }));
                        }
                        return n;
                    },
                    Wt = (0, ze.computedFn)((e, t) => {
                        for (let n = 0; n < t.length; n++) if (e < t[n]) return n;
                        return t.length + 1;
                    }),
                    Ut = (e) => ('secondCondition' in e ? 'multiConditions' : 'oneCondition'),
                    zt = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Gt, Vt;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(Gt || (Gt = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(Vt || (Vt = {})));
                const jt = ({ size: e = Gt.Default, classMix: t }) =>
                        s().createElement('div', { className: D()(zt.background, zt[`background__${e}`], t) }),
                    Xt = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    qt = ({ size: e }) => {
                        const t = D()(Xt.base, Xt[`base__${e}`]);
                        return s().createElement('div', { className: t });
                    },
                    Qt = {
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
                    Yt = (0, u.memo)(
                        ({ size: e, lineRef: t, disabled: n, baseStyles: r, isComplete: a, withoutBounce: u }) => {
                            const i = D()(
                                    Qt.base,
                                    Qt[`base__${e}`],
                                    n && Qt.base__disabled,
                                    a && Qt.base__finished,
                                    u && Qt.base__withoutBounce,
                                ),
                                o = !n && !a;
                            return s().createElement(
                                'div',
                                { className: i, style: r, ref: t },
                                s().createElement('div', { className: Qt.pattern }),
                                s().createElement('div', { className: Qt.gradient }),
                                o && s().createElement(qt, { size: e }),
                            );
                        },
                    ),
                    Kt = ({ size: e, value: t, lineRef: n, disabled: r, onComplete: a }) => {
                        const i = (0, u.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            o = 100 === t;
                        return (
                            (0, u.useEffect)(() => {
                                o && a && a();
                            }, [o, a]),
                            s().createElement(Yt, { size: e, disabled: r, baseStyles: i, isComplete: o, lineRef: n })
                        );
                    },
                    Zt = (e, t) => {
                        let n;
                        const r = setTimeout(() => {
                            n = e();
                        }, t);
                        return () => {
                            ('function' == typeof n && n(), clearTimeout(r));
                        };
                    };
                let Jt, en;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(Jt || (Jt = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(en || (en = {})));
                const tn = (0, u.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: r,
                            size: a,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < r,
                                _ = (0, u.useState)(en.Idle),
                                m = _[0],
                                d = _[1],
                                E = m === en.In,
                                p = m === en.End,
                                g = m === en.Idle,
                                b = (0, u.useCallback)(
                                    (e) => {
                                        (d(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, u.useEffect)(() => {
                                if (g && !n)
                                    return Zt(() => {
                                        b(en.In);
                                    }, t);
                            }, [b, n, g, t]),
                                (0, u.useEffect)(() => {
                                    if (E)
                                        return Zt(() => {
                                            (o && o(), b(en.End));
                                        }, e + t);
                                }, [b, E, o, t, e]));
                            const h = (0, u.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                f = (0, u.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                v = (0, u.useMemo)(
                                    () => ({ width: `${Math.abs(r - i)}%`, left: `${c ? i : r}%` }),
                                    [r, c, i],
                                );
                            return p
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: v },
                                      s().createElement(
                                          'div',
                                          { style: g ? h : f, className: 'ProgressBarDeltaSimple_delta_99' },
                                          s().createElement(qt, { size: a }),
                                      ),
                                  );
                        },
                    ),
                    nn = (0, u.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: r,
                            disabled: a,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const _ = (0, u.useMemo)(
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
                                s().createElement(Yt, {
                                    size: t,
                                    lineRef: r,
                                    disabled: a,
                                    isComplete: i,
                                    baseStyles: _,
                                }),
                                n >= 0 &&
                                    s().createElement(tn, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: n,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    rn = (e) => (e ? { left: 0 } : { right: 0 }),
                    an = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    un = (e) => ({ transitionDuration: `${e}ms` }),
                    sn = (0, u.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: r,
                            size: a,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const _ = i < r,
                                m = (0, u.useState)(Jt.Idle),
                                d = m[0],
                                E = m[1],
                                p = d === Jt.End,
                                g = d === Jt.Idle,
                                b = d === Jt.Grow,
                                h = d === Jt.Shrink,
                                f = (0, u.useCallback)(
                                    (e) => {
                                        (E(e), l && l(e));
                                    },
                                    [l],
                                ),
                                v = (0, u.useCallback)(
                                    (e, t) =>
                                        Zt(() => {
                                            f(e);
                                        }, t),
                                    [f],
                                );
                            (0, u.useEffect)(() => {
                                if (!n)
                                    return g
                                        ? v(Jt.Grow, t)
                                        : b
                                          ? v(Jt.Shrink, e)
                                          : h
                                            ? v(Jt.End, e)
                                            : void (p && o && o());
                            }, [v, n, p, b, g, h, o, t, e]);
                            const A = (0, u.useMemo)(() => Object.assign({ width: '100%' }, un(e), rn(_)), [_, e]),
                                C = (0, u.useMemo)(() => Object.assign({ width: '0%' }, un(e), rn(_)), [_, e]),
                                F = (0, u.useMemo)(() => Object.assign({ width: '0%' }, an(_, r), un(e)), [r, _, e]),
                                B = (0, u.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - r)}%` }, an(_, r), un(e)),
                                    [r, _, i, e],
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
                                    { style: h ? C : A, className: 'ProgressBarDeltaGrow_glow_68' },
                                    s().createElement(qt, { size: a }),
                                ),
                            );
                        },
                    ),
                    on = (0, u.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: r,
                            disabled: a,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const _ = e < n,
                                m = (0, u.useState)(!1),
                                d = m[0],
                                E = m[1],
                                p = (0, u.useCallback)(
                                    (e) => {
                                        (e === Jt.Shrink && E(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                g = (0, u.useMemo)(() => ({ width: `${n}%`, transitionProperty: 'none' }), [n]),
                                b = (0, u.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(Yt, {
                                    size: t,
                                    lineRef: r,
                                    disabled: a,
                                    isComplete: i,
                                    withoutBounce: _ && 0 === e,
                                    baseStyles: d ? b : g,
                                }),
                                n >= 0 &&
                                    s().createElement(sn, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: p,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: n,
                                        size: t,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    ln = ['onComplete', 'onEndAnimation'];
                function cn() {
                    return (
                        (cn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        cn.apply(this, arguments)
                    );
                }
                const _n = (0, u.memo)((e) => {
                        let t = e.onComplete,
                            n = e.onEndAnimation,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((n = u[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                return a;
                            })(e, ln);
                        const a = (0, u.useState)(!1),
                            i = a[0],
                            o = a[1],
                            l = (0, u.useCallback)(() => {
                                const e = 100 === r.to;
                                (e !== i && o(e), e && t && t(), n && n());
                            }, [i, t, n, r.to]);
                        switch (r.animationSettings.type) {
                            case Vt.Simple:
                                return s().createElement(nn, cn({}, r, { onEndAnimation: l, isComplete: i }));
                            case Vt.Growing:
                                return s().createElement(on, cn({}, r, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    mn = ['onEndAnimation'];
                function dn() {
                    return (
                        (dn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        dn.apply(this, arguments)
                    );
                }
                const En = (0, u.memo)((e) => {
                    let t = e.onEndAnimation,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                a = {},
                                u = Object.keys(e);
                            for (r = 0; r < u.length; r++) ((n = u[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                            return a;
                        })(e, mn);
                    const r = (0, u.useRef)({}),
                        a = (0, u.useCallback)(() => {
                            ((r.current.from = void 0), t && t());
                        }, [t]),
                        i = 'number' == typeof r.current.from ? r.current.from : n.from;
                    return (
                        (r.current.from = i),
                        s().createElement(_n, dn({}, n, { onEndAnimation: a, key: `${i}-${n.to}`, from: i }))
                    );
                });
                function pn() {
                    return (
                        (pn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        pn.apply(this, arguments)
                    );
                }
                const gn = (0, u.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: n,
                            disabled: r,
                            deltaFrom: a,
                            animationSettings: u,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                            onComplete: l,
                        }) => {
                            if (a === t)
                                return s().createElement(Kt, {
                                    key: `${a}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: n,
                                    disabled: r,
                                    onComplete: l,
                                });
                            const c = {
                                from: a,
                                to: t,
                                size: e,
                                lineRef: n,
                                disabled: r,
                                animationSettings: u,
                                onComplete: l,
                                onEndAnimation: i,
                                onChangeAnimationState: o,
                            };
                            return u.withStack
                                ? s().createElement(En, c)
                                : s().createElement(_n, pn({ key: `${a}-${t}` }, c));
                        },
                    ),
                    bn = (e) => ({
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
                    hn = {
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
                    fn = (e, t, n) => (n < e ? e : n > t ? t : n),
                    vn = (e, t, n) => ('number' == typeof n ? (fn(0, t, n) / t) * 100 : e),
                    An = hn,
                    Cn = {
                        freezed: !1,
                        withStack: !1,
                        type: Vt.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Dn = (0, u.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = An,
                            size: n = Gt.Default,
                            animationSettings: r = Cn,
                            disabled: a = !1,
                            withoutBackground: i = !1,
                            progressBarBackgroundClassMix: o,
                            value: l,
                            deltaFrom: c,
                            lineRef: _,
                            onChangeAnimationState: m,
                            onEndAnimation: d,
                            onComplete: E,
                        }) => {
                            const p = ((e, t, n) =>
                                (0, u.useMemo)(() => {
                                    const r = (fn(0, t, e) / t) * 100;
                                    return { value: r, deltaFrom: vn(r, t, n) };
                                }, [n, t, e]))(l, e, c);
                            return s().createElement(
                                'div',
                                { className: D()(zt.base, zt[`base__${n}`]), style: bn(t) },
                                !i && s().createElement(jt, { size: n, classMix: o }),
                                s().createElement(gn, {
                                    size: n,
                                    lineRef: _,
                                    disabled: a,
                                    value: p.value,
                                    deltaFrom: p.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: d,
                                    onChangeAnimationState: m,
                                    onComplete: E,
                                }),
                            );
                        },
                    ),
                    Fn = {
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
                    Bn = ({
                        currentValue: e,
                        maxValue: t,
                        lastValue: n,
                        statusAnimation: r,
                        updateStatusAnimation: a,
                    }) => {
                        const u = x(),
                            i = u.mediaSize === y.Medium && u.remScreenHeight >= 1024;
                        return s().createElement(
                            'div',
                            { className: D()(Fn.base, Fn[`base__${r}`]) },
                            s().createElement(
                                'div',
                                { className: Fn.progression },
                                s().createElement(
                                    'div',
                                    {
                                        className: D()(
                                            Fn.progressionNumerical,
                                            i && Fn.progressionNumerical__mediaMediumHeight,
                                        ),
                                    },
                                    s().createElement(
                                        'span',
                                        { className: D()(Fn.currentValue, Boolean(e) && Fn.currentValue__inProgress) },
                                        e,
                                    ),
                                    s().createElement(
                                        'span',
                                        { className: Fn.separator },
                                        R.strings.common.common.slash(),
                                    ),
                                    s().createElement('span', null, t),
                                ),
                                Boolean(e) &&
                                    s().createElement(
                                        'div',
                                        { className: D()(Fn.progressBar, i && Fn.progressBar__mediaMediumHeight) },
                                        s().createElement(Dn, {
                                            size: Gt.Small,
                                            value: e,
                                            deltaFrom: e - n,
                                            maxValue: t,
                                            onComplete: a,
                                        }),
                                    ),
                            ),
                        );
                    },
                    yn = {
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
                    wn = R.strings.historical_battles_progression.progressionView.battleQuests,
                    Sn = (0, Q.observer)(
                        ({
                            conditions: e,
                            setStatusAnimation: t,
                            statusAnimation: n,
                            progression: r,
                            conditionIndex: a,
                        }) => {
                            const i = In().model.computes.missionCompletedVisitedStatus,
                                o = (0, u.useCallback)(() => {
                                    t(i(a));
                                }, [a, i, t]),
                                l = Object.assign({}, r, { statusAnimation: n, updateStatusAnimation: o }),
                                c = r.maxValue,
                                _ = r.status,
                                m = 0 === c;
                            return (
                                (0, u.useEffect)(() => {
                                    _ === Ln ? m && o() : t(kn.inProgress);
                                }, [m, t, _, o]),
                                s().createElement(
                                    'div',
                                    { className: yn.base },
                                    s().createElement(
                                        'div',
                                        { className: yn.condition },
                                        s().createElement(Ot, {
                                            text: `${wn.$dyn(Ut(e))}`,
                                            classMix: D()(yn.text, yn[`text__${n}`]),
                                            binding: Object.assign({}, e),
                                        }),
                                        Boolean(c) && s().createElement(Bn, l),
                                    ),
                                )
                            );
                        },
                    ),
                    Nn = {
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
                    xn = ({ taskBattleIcon: e, statusAnimation: t }) =>
                        s().createElement(
                            'div',
                            { className: D()(Nn.base, Nn[`base__${t}`]) },
                            s().createElement('div', { className: Nn.ellipse }),
                            s().createElement('div', {
                                className: Nn.typeIcon,
                                style: { backgroundImage: `url('${R.images.gui.maps.icons.missions.daily.$dyn(e)}')` },
                            }),
                            s().createElement('div', { className: Nn.completedIcon }),
                        );
                function Tn() {
                    return (
                        (Tn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Tn.apply(this, arguments)
                    );
                }
                const kn = {
                    inProgress: 'inProgress',
                    completed: 'completed',
                    completedWasVisited: 'completedWasVisited',
                    allCompletedTasksVisited: 'allCompletedTasksVisited',
                };
                let Mn;
                ((0, Q.observer)(({ taskConditions: e, awardsBattle: t, taskBattleIcon: n, index: r }) => {
                    const a = (0, u.useState)(kn.inProgress),
                        i = a[0],
                        o = a[1],
                        l = x(),
                        c = Ct(t, je.Small).parsedRewards;
                    return s().createElement(
                        'div',
                        {
                            className: D()(
                                yt.base,
                                yt[`base__${i}`],
                                l.mediaSize === y.Medium && l.remScreenHeight >= 1024 && yt.base__mediaMediumHeight,
                            ),
                        },
                        s().createElement(
                            'div',
                            { className: yt.taskType },
                            s().createElement(xn, { taskBattleIcon: n, statusAnimation: i }),
                        ),
                        s().createElement(
                            'div',
                            { className: yt.conditions },
                            Oe(e, ({ conditions: e, progression: t }) =>
                                s().createElement(Sn, {
                                    key: t.currentValue,
                                    conditionIndex: r,
                                    progression: t,
                                    conditions: e,
                                    setStatusAnimation: o,
                                    statusAnimation: i,
                                }),
                            ),
                        ),
                        s().createElement(
                            'div',
                            { className: yt.awards },
                            s().createElement(
                                Bt,
                                { statusAnimation: i, type: Ft.Awards },
                                s().createElement(
                                    'div',
                                    { className: yt.awardsList },
                                    Oe(c, (e) => s().createElement(Et, Tn({ className: yt.award, key: e.name }, e))),
                                ),
                            ),
                        ),
                    );
                }),
                    (function (e) {
                        ((e[(e.Scrolling = 0)] = 'Scrolling'),
                            (e[(e.ProgressChange = 1)] = 'ProgressChange'),
                            (e[(e.HighlightCard = 2)] = 'HighlightCard'),
                            (e[(e.ChangeCompleted = 3)] = 'ChangeCompleted'),
                            (e[(e.ProgressFinished = 4)] = 'ProgressFinished'),
                            (e[(e.ProgressAlreadyFinished = 5)] = 'ProgressAlreadyFinished'));
                    })(Mn || (Mn = {})));
                const Ln = 'done',
                    Pn = V()(
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
                                        progressAnimationState: U.observable.box(Mn.Scrolling),
                                        hoveredCard: U.observable.box(void 0),
                                    },
                                ),
                                n = (0, ze.computedFn)(() => Oe(t.pointsForLevel.get(), (e) => e)),
                                r = (0, ze.computedFn)(() => Wt(t.curProgressPoints.get(), n())),
                                a = (0, ze.computedFn)(() => Wt(t.prevProgressPoints.get(), n())),
                                u = (0, ze.computedFn)(
                                    (e) => ({
                                        wasProgressionVisited: a() === r(),
                                        isRecentlyCompletedLevel: a() <= e && e <= r(),
                                        isPrevLevel: e <= a(),
                                    }),
                                    { equals: Ue },
                                ),
                                s = (0, ze.computedFn)(() =>
                                    Oe(t.battleQuests.get(), (e) => {
                                        const t = ((e, t, n) => {
                                            const r = {};
                                            let a = {},
                                                u = '';
                                            return (
                                                $t(e, t).forEach(
                                                    (
                                                        {
                                                            condition: e,
                                                            lastValue: t,
                                                            currentValue: n,
                                                            maxValue: s,
                                                            icon: i,
                                                        },
                                                        o,
                                                    ) => {
                                                        ((r[Ht[o]] = ((e, t) =>
                                                            It(e, wt.left)
                                                                .flat()
                                                                .map(
                                                                    (e, n) => (
                                                                        0 === n && t > 0 && (e = e.toLowerCase()),
                                                                        e
                                                                    ),
                                                                ))(e, o)),
                                                            (u = i),
                                                            (a = { lastValue: t, currentValue: n, maxValue: s }));
                                                    },
                                                ),
                                                {
                                                    taskConditions: [
                                                        { conditions: r, progression: Object.assign({ status: n }, a) },
                                                    ],
                                                    taskBattleIcon: u,
                                                }
                                            );
                                        })(e.postBattleCondition, e.bonusCondition.items, e.status);
                                        return Object.assign({}, t, { awardsBattle: e.bonuses });
                                    }),
                                ),
                                i = (0, ze.computedFn)(() => 4 >= s().length),
                                o = (0, ze.computedFn)(() => {
                                    let e = 0;
                                    return (
                                        s().forEach((t) => {
                                            t.taskConditions[0].progression.status === Ln && ++e;
                                        }),
                                        e
                                    );
                                }),
                                l = (0, ze.computedFn)(() => We(t.progressLevels.get()), { equals: W }),
                                c = (0, ze.computedFn)(() => {
                                    const e = r(),
                                        t = l();
                                    return Oe(t, ({ rewards: n }, r) => ({
                                        level: r + 1,
                                        isCompleted: r < e,
                                        isActive: r === e,
                                        isLast: r === t.length - 1,
                                        rewards: n,
                                    }));
                                }),
                                _ = (0, ze.computedFn)(() => {
                                    const e = s();
                                    for (let t = 0; t < e.length; t++)
                                        if (e[t].taskConditions[0].progression.status !== Ln) return kn.inProgress;
                                    return (function (e, t) {
                                        if (Array.isArray(e)) return e.every(t);
                                        for (let t = 0; t < e.length; t++) if (!Re(e, t)) return !1;
                                        return !0;
                                    })(t.missionsCompletedVisited.get(), (e) => e)
                                        ? kn.allCompletedTasksVisited
                                        : kn.completed;
                                }),
                                m = (0, ze.computedFn)((e) => {
                                    const n = Re(s(), e).taskConditions[0].progression.status,
                                        r = t.missionsCompletedVisited.get()[e].value;
                                    return n !== Ln ? kn.inProgress : r ? kn.completedWasVisited : kn.completed;
                                }),
                                d = (0, ze.computedFn)(() => {
                                    const e = t.pointsForLevel.get(),
                                        n = e[e.length - 1].value;
                                    return t.curProgressPoints.get() >= n;
                                }),
                                E = (0, ze.computedFn)(() => {
                                    const e = r(),
                                        n = t.pointsForLevel.get();
                                    return !d() && n[e].value;
                                }),
                                p = (0, ze.computedFn)(
                                    () => d() && t.curProgressPoints.get() === t.prevProgressPoints.get(),
                                ),
                                g = (0, ze.computedFn)(() => Oe(t.marksDetails.get(), (e) => e), { equals: Ue }),
                                b = (0, ze.computedFn)(() => {
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
                                    currentLevel: r,
                                    levelStatus: u,
                                    pointsForNewLevel: E,
                                    battleTasksStatus: _,
                                    isProgressionCompleted: d,
                                    wasProgressionCompletedBeforeStart: p,
                                    missionCompletedVisitedStatus: m,
                                    areDefaultNumberQuests: i,
                                    numberCompletedQuests: o,
                                    getLevels: n,
                                    getMarksDetails: g,
                                    getLockedPageIndex: b,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => {
                            const n = (function (e) {
                                    const t = {};
                                    for (const n in e)
                                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                                            const r = e[n];
                                            t[n] = (0, U.action)(r);
                                        }
                                    return t;
                                })({
                                    finishScrolling: () => t.progressAnimationState.set(Mn.ProgressChange),
                                    finishProgressionChange: () => t.progressAnimationState.set(Mn.HighlightCard),
                                    finishHighlightCard: () => t.progressAnimationState.set(Mn.ChangeCompleted),
                                    completeProgression: (e) =>
                                        t.progressAnimationState.set(
                                            e ? Mn.ProgressAlreadyFinished : Mn.ProgressFinished,
                                        ),
                                }),
                                r = (0, U.action)((e) => t.hoveredCard.set(e));
                            return Object.assign({}, n, {
                                updateHoveredCard: r,
                                onBuyClicked: e.createCallbackNoArgs('onVehicleBuyClicked'),
                                showVehiclePreview: e.createCallbackNoArgs('onPreviewClicked'),
                                showVideo: e.createCallback((e) => ({ url: e }), 'onShowVideoClicked'),
                            });
                        },
                    ),
                    Rn = Pn[0],
                    In = Pn[1];
                var On = n(9887),
                    Hn = n.n(On);
                const $n = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Wn = (e) => e.includes('_') && ((e) => $n.includes(e))(e.split('_').at(-1)),
                    Un = [y.ExtraLarge, y.Large, y.Medium, y.Small, y.ExtraSmall],
                    zn = (e, t) =>
                        Object.keys(e).reduce((n, r) => {
                            if (r in n) return n;
                            if (Wn(r)) {
                                const a = r.split('_').slice(0, -1).join('_');
                                if (a in n) return n;
                                const u = Un.indexOf(t),
                                    s = (-1 !== u ? $n.slice(u) : [])
                                        .map((e) => a + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    i = s ? e[s] : void 0;
                                return ((n[a] = void 0 !== i ? i : e[a]), n);
                            }
                            const a = e[r];
                            return (
                                void 0 === a ||
                                    ((e, t) => $n.some((n) => void 0 !== t[`${e}_${n}`]))(r, e) ||
                                    (n[r] = a),
                                n
                            );
                        }, {}),
                    Gn = (e, t = zn) => {
                        const n = (
                            (e, t = zn) =>
                            (n) => {
                                const r = x().mediaSize,
                                    a = (0, u.useMemo)(() => t(n, r), [n, r]);
                                return s().createElement(e, a);
                            }
                        )(e, t);
                        return s().memo((t) =>
                            Object.keys(t).some((e) => Wn(e) && void 0 !== t[e])
                                ? s().createElement(n, t)
                                : s().createElement(e, t),
                        );
                    },
                    Vn = {
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
                    jn = [
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
                function Xn() {
                    return (
                        (Xn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Xn.apply(this, arguments)
                    );
                }
                Object.keys(Hn());
                const qn = {
                        XL: { mt: Vn.mt__XL, mr: Vn.mr__XL, mb: Vn.mb__XL, ml: Vn.ml__XL },
                        LG: { mt: Vn.mt__LG, mr: Vn.mr__LG, mb: Vn.mb__LG, ml: Vn.ml__LG },
                        MDp: { mt: Vn.mt__MDp, mr: Vn.mr__MDp, mb: Vn.mb__MDp, ml: Vn.ml__MDp },
                        MD: { mt: Vn.mt__MD, mr: Vn.mr__MD, mb: Vn.mb__MD, ml: Vn.ml__MD },
                        SMp: { mt: Vn.mt__SMp, mr: Vn.mr__SMp, mb: Vn.mb__SMp, ml: Vn.ml__SMp },
                        SM: { mt: Vn.mt__SM, mr: Vn.mr__SM, mb: Vn.mb__SM, ml: Vn.ml__SM },
                        XS: { mt: Vn.mt__XS, mr: Vn.mr__XS, mb: Vn.mb__XS, ml: Vn.ml__XS },
                    },
                    Qn = (Object.keys(qn), ['mt', 'mr', 'mb', 'ml']),
                    Yn = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Kn = Gn((e) => {
                        let t = e.className,
                            n = e.width,
                            r = e.height,
                            a = e.m,
                            i = e.mt,
                            o = void 0 === i ? a : i,
                            l = e.mr,
                            c = void 0 === l ? a : l,
                            _ = e.mb,
                            m = void 0 === _ ? a : _,
                            d = e.ml,
                            E = void 0 === d ? a : d,
                            p = e.column,
                            g = e.row,
                            b = e.flexDirection,
                            h = void 0 === b ? (p ? 'column' : g && 'row') || void 0 : b,
                            f = e.flexStart,
                            v = e.center,
                            A = e.flexEnd,
                            C = e.spaceBetween,
                            F = e.spaceAround,
                            B = e.justifyContent,
                            y =
                                void 0 === B
                                    ? (f ? 'flex-start' : v && 'center') ||
                                      (A && 'flex-end') ||
                                      (C && 'space-between') ||
                                      (F && 'space-around') ||
                                      void 0
                                    : B,
                            w = e.alignItems,
                            S = void 0 === w ? (f ? 'flex-start' : v && 'center') || (A && 'flex-end') || void 0 : w,
                            N = e.alignSelf,
                            x = e.wrap,
                            T = e.flexWrap,
                            k = void 0 === T ? (x ? 'wrap' : void 0) : T,
                            M = e.grow,
                            L = e.shrink,
                            P = e.flex,
                            R = void 0 === P ? (M || L ? `${M ? 1 : 0} ${L ? 1 : 0} auto` : void 0) : P,
                            I = e.style,
                            O = e.children,
                            H = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((n = u[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                return a;
                            })(e, jn);
                        const $ = (0, u.useMemo)(() => {
                                const e = { mt: o, mr: c, mb: m, ml: E },
                                    t = ((e) =>
                                        Qn.reduce((t, n) => {
                                            const r = e[n];
                                            return r && 'number' != typeof r ? t.concat(qn[!0 === r ? 'MD' : r][n]) : t;
                                        }, []))(e),
                                    a = ((e) =>
                                        Qn.reduce((t, n) => {
                                            const r = e[n];
                                            return ('number' == typeof r && (t[Yn[n]] = r + 'rem'), t);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, I, a, {
                                        width: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: R,
                                        alignSelf: N,
                                        display: h || S ? 'flex' : void 0,
                                        flexDirection: h,
                                        flexWrap: k,
                                        justifyContent: y,
                                        alignItems: S,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [n, r, o, c, m, E, I, R, N, h, k, y, S]),
                            W = $.computedStyle,
                            U = $.computedClassNames;
                        return s().createElement('div', Xn({ className: D()(Vn.base, ...U, t), style: W }, H), O);
                    });
                var Zn = n(3532),
                    Jn = n.n(Zn);
                const er = {
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
                    tr = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function nr() {
                    return (
                        (nr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        nr.apply(this, arguments)
                    );
                }
                Object.keys(Hn());
                const rr = Object.keys(Jn()),
                    ar = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    ur = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    sr = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    ir =
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
                            'heading-H56': ar,
                            'heading-H36': ar,
                            'heading-H28': ur,
                            'heading-H24': ur,
                            'heading-H24R': ur,
                            'heading-H22': ur,
                            'heading-H20R': ur,
                            'heading-H18': ur,
                            'heading-H15': sr,
                            'heading-H14': sr,
                            'paragraph-P24': ur,
                            'paragraph-P18': ur,
                            'paragraph-P16': ur,
                            'paragraph-P14': sr,
                            'paragraph-P12': sr,
                            'paragraph-P10': sr,
                        }),
                    or =
                        (Object.keys(ir),
                        (e) =>
                            e
                                ? ((e) => rr.includes(e))(e)
                                    ? { colorClassName: er[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    lr = Gn((e) => {
                        let t = e.text,
                            n = e.variant,
                            r = e.className,
                            a = e.color,
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
                                var n,
                                    r,
                                    a = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((n = u[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                return a;
                            })(e, tr);
                        const f = (0, u.useMemo)(() => {
                                const e = or(a),
                                    t = e.colorClassName,
                                    n = e.colorStyle,
                                    r = void 0 === n ? {} : n;
                                return { computedStyle: Object.assign({}, g, r), colorClassName: t };
                            }, [g, a]),
                            v = f.computedStyle,
                            A = f.colorClassName;
                        return s().createElement(
                            Kn,
                            nr(
                                {
                                    className: D()(er.base, n && er[n], A, r),
                                    style: v,
                                    mt: !0 === l ? ir[n || 'paragraph-P16'].mt : l,
                                    mr: !0 === _ ? ir[n || 'paragraph-P16'].mr : _,
                                    mb: !0 === d ? ir[n || 'paragraph-P16'].mb : d,
                                    ml: !0 === p ? ir[n || 'paragraph-P16'].ml : p,
                                },
                                h,
                            ),
                            void 0 !== b ? s().createElement(Ot, nr({}, b, { text: t })) : t,
                        );
                    }),
                    cr = [];
                function _r(e) {
                    const t = (0, u.useRef)(e);
                    return (
                        (0, u.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, u.useCallback)((...e) => (0, t.current)(...e), cr)
                    );
                }
                function mr(e, t, n = []) {
                    const r = (0, u.useRef)(0),
                        a = (0, u.useCallback)(() => window.clearInterval(r.current), n || []);
                    (0, u.useEffect)(() => a, [a]);
                    const s = (null != n ? n : []).concat([t]);
                    return [
                        (0, u.useCallback)((n) => {
                            ((r.current = window.setInterval(() => e(n, !0), t)), e(n, !1));
                        }, s),
                        a,
                    ];
                }
                function dr(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                let Er;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Er || (Er = {}));
                const pr = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    gr = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: r,
                        getWrapperSize: a,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const i = (e, n) => {
                            const r = t(e),
                                a = r[0],
                                u = r[1];
                            return fn(a, u, n);
                        };
                        return (o = {}) => {
                            const l = o.settings,
                                _ = void 0 === l ? pr : l,
                                m = (0, u.useRef)(null),
                                d = (0, u.useRef)(null),
                                E = (() => {
                                    const e = (0, u.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        n = (e, n) => {
                                            t(e).set(n, n);
                                        },
                                        r = (e, n) => {
                                            t(e).delete(n);
                                        },
                                        a = (e, ...n) => {
                                            for (
                                                var r,
                                                    a = (function (e, t) {
                                                        var n =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (n) return (n = n.call(e)).next.bind(n);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (n = (function (e, t) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return dr(e, t);
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
                                                                              ? dr(e, t)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (t && e && 'number' == typeof e.length)
                                                        ) {
                                                            n && (e = n);
                                                            var r = 0;
                                                            return function () {
                                                                return r >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[r++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(t(e).values());
                                                !(r = a()).done;
                                            )
                                                (0, r.value)(...n);
                                        };
                                    return (0, u.useMemo)(() => ({ on: n, off: r, trigger: a }), []);
                                })(),
                                p = (function (e, t, n) {
                                    const r = (0, u.useMemo)(
                                        () =>
                                            (function (e, t, n, r) {
                                                let a,
                                                    u = !1,
                                                    s = 0;
                                                function i() {
                                                    a && clearTimeout(a);
                                                }
                                                function o(...o) {
                                                    const l = this,
                                                        c = Date.now() - s;
                                                    function _() {
                                                        ((s = Date.now()), n.apply(l, o));
                                                    }
                                                    u ||
                                                        (r && !a && _(),
                                                        i(),
                                                        void 0 === r && c > e
                                                            ? _()
                                                            : !0 !== t &&
                                                              (a = setTimeout(
                                                                  r
                                                                      ? function () {
                                                                            a = void 0;
                                                                        }
                                                                      : _,
                                                                  void 0 === r ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof t && ((r = n), (n = t), (t = void 0)),
                                                    (o.cancel = function () {
                                                        (i(), (u = !0));
                                                    }),
                                                    o
                                                );
                                            })(n, e),
                                        t,
                                    );
                                    return ((0, u.useEffect)(() => r.cancel, [r]), r);
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
                                        t && (n(t, e), E.trigger('change', e), s && p());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                b = g[0],
                                h = g[1],
                                f = (0, u.useCallback)(
                                    (e, t, n) => {
                                        var r;
                                        const a = b.scrollPosition.get(),
                                            u = (null != (r = b.scrollPosition.goal) ? r : 0) - a;
                                        return i(e, t * n + u + a);
                                    },
                                    [b.scrollPosition],
                                ),
                                v = (0, u.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const r = m.current;
                                        r &&
                                            h.start({
                                                scrollPosition: i(r, e),
                                                immediate: t,
                                                reset: n,
                                                config: _.animationConfig,
                                                from: { scrollPosition: i(r, b.scrollPosition.get()) },
                                            });
                                    },
                                    [h, _.animationConfig, b.scrollPosition],
                                ),
                                A = (0, u.useCallback)(
                                    (e) => {
                                        const t = m.current,
                                            n = d.current;
                                        if (!t || !n) return;
                                        const r = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return a(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, _.step),
                                            u = f(t, e, r);
                                        v(u);
                                    },
                                    [v, f, _.step],
                                ),
                                C = (0, u.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && A(r(e)),
                                            m.current && E.trigger('mouseWheel', e, b.scrollPosition, t(m.current)));
                                    },
                                    [b.scrollPosition, A, E],
                                ),
                                D = ((e, t = []) => {
                                    const n = (0, u.useRef)(),
                                        r = (0, u.useCallback)((...t) => {
                                            (n.current && n.current(), (n.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, u.useEffect)(
                                            () => () => {
                                                n.current && n.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        Ee(() => {
                                            const e = m.current;
                                            e &&
                                                (v(i(e, b.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [v, b.scrollPosition.goal],
                                ),
                                F = _r(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = i(e, b.scrollPosition.goal);
                                    (t !== b.scrollPosition.goal && v(t, { immediate: !0 }),
                                        E.trigger('recalculateContent'));
                                });
                            (0, u.useEffect)(
                                () => (
                                    window.addEventListener('resize', D),
                                    () => {
                                        window.removeEventListener('resize', D);
                                    }
                                ),
                                [D],
                            );
                            const B = (0, u.useCallback)((e) => E.trigger('isThumbDraggingChanged', e), [E]);
                            return (0, u.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? a(d.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? t(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: _.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: C,
                                    applyScroll: v,
                                    applyStepTo: A,
                                    contentRef: m,
                                    wrapperRef: d,
                                    scrollPosition: h,
                                    animationScroll: b,
                                    recalculateContent: F,
                                    handleIsThumbDragging: B,
                                    events: { on: E.on, off: E.off },
                                }),
                                [b.scrollPosition, v, A, B, E.off, E.on, F, C, h, _.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    br = gr({
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
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Er.Next : Er.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    hr = 'HorizontalBar_base__nonActive_82',
                    fr = 'disable',
                    vr = { pending: !1, offset: 0 },
                    Ar = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Cr = () => {},
                    Dr = (e, t) => Math.max(20, e.offsetWidth * t),
                    Fr = (0, u.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = Ar, onDrag: r = Cr }) => {
                        const a = (0, u.useRef)(null),
                            i = (0, u.useRef)(null),
                            o = (0, u.useRef)(null),
                            l = (0, u.useRef)(null),
                            c = (0, u.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, u.useState)(vr),
                            d = m[0],
                            E = m[1],
                            p = (0, u.useCallback)(
                                (e) => {
                                    (E(e),
                                        c.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [r],
                            ),
                            g = () => {
                                const t = l.current,
                                    n = c.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && t && n && a)) return;
                                const u = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / a),
                                    _ = fn(0, 1, u / (a - r)),
                                    m = (t.offsetWidth - Dr(t, s)) * _;
                                ((n.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (i.current && o.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    i.current.classList.add(fr),
                                                    void o.current.classList.remove(fr)
                                                );
                                            if (
                                                ((t = l.current),
                                                (n = c.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(fr),
                                                    void o.current.classList.add(fr)
                                                );
                                            var t, n;
                                            (i.current.classList.remove(fr), o.current.classList.remove(fr));
                                        }
                                    })(m));
                            },
                            b = _r(() => {
                                ((() => {
                                    const t = c.current,
                                        n = l.current,
                                        r = e.getWrapperSize(),
                                        u = e.getContainerSize();
                                    if (!(u && t && r && n)) return;
                                    const s = Math.min(1, r / u);
                                    ((t.style.width = `${Dr(n, s)}px`),
                                        (t.style.display = 'flex'),
                                        a.current &&
                                            (1 === s ? a.current.classList.add(hr) : a.current.classList.remove(hr)));
                                })(),
                                    g());
                            });
                        ((0, u.useEffect)(() => Ee(b)),
                            (0, u.useEffect)(
                                () =>
                                    Ee(() => {
                                        const t = () => {
                                            g();
                                        };
                                        let n = Cr;
                                        const r = () => {
                                            (n(), (n = Ee(b)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', b),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                (n(),
                                                    e.events.off('recalculateContent', b),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', r));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, u.useEffect)(() => {
                                if (!d.pending) return;
                                const t = (t) => {
                                        var n;
                                        const a = e.contentRef.current;
                                        if (!a) return;
                                        const u = l.current,
                                            s = c.current;
                                        if (!a || !u || !s) return;
                                        const i = t.screenX - d.offset - u.getBoundingClientRect().x,
                                            o = (i / u.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, o),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: s, thumbOffset: i, contentOffset: o }));
                                    },
                                    n = () => {
                                        (window.removeEventListener('mousemove', t), p(vr));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', n),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', n));
                                    }
                                );
                            }, [e, d.offset, d.pending, r, p]));
                        const h = mr((t) => e.applyStepTo(t), _, [e]),
                            f = h[0],
                            v = h[1];
                        (0, u.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const A = (e) => {
                            e.target.classList.contains(fr) || ee('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: D()('HorizontalBar_base_49', t.base), ref: a, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: D()('HorizontalBar_leftButton_5f', t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(fr) || 0 !== e.button || (ee('play'), f(Er.Next));
                                },
                                onMouseUp: v,
                                ref: i,
                                onMouseEnter: A,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: D()('HorizontalBar_track_0d', t.track),
                                    onMouseDown: (t) => {
                                        const r = c.current;
                                        r &&
                                            0 === t.button &&
                                            (ee('play'),
                                            t.target === r
                                                ? p({ pending: !0, offset: t.screenX - r.getBoundingClientRect().x })
                                                : ((t) => {
                                                      const r = c.current,
                                                          a = e.contentRef.current;
                                                      if (!r || !a) return;
                                                      const u = n(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + u * t);
                                                  })(t.screenX > r.getBoundingClientRect().x ? Er.Prev : Er.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: A,
                                },
                                s().createElement('div', { ref: c, className: D()('HorizontalBar_thumb_fd', t.thumb) }),
                                s().createElement('div', { className: D()('HorizontalBar_rail_32', t.rail) }),
                            ),
                            s().createElement('div', {
                                className: D()('HorizontalBar_rightButton_03', t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(fr) || 0 !== e.button || (ee('play'), f(Er.Prev));
                                },
                                onMouseUp: v,
                                ref: o,
                                onMouseEnter: A,
                            }),
                        );
                    }),
                    Br = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    yr = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: r,
                        areaClassName: a,
                        classNames: i,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, u.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: D()(Br.base, e.base) });
                            }, [r]),
                            m = (0, u.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: D()(Br.defaultScroll, n), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: D()(Br.defaultScrollArea, a) },
                                s().createElement(wr, { className: o, api: m, classNames: i }, e),
                            ),
                            s().createElement(Fr, { getStepByRailClick: l, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    wr = ({ api: e, className: t, classNames: n, children: r, style: a }) => (
                        (0, u.useEffect)(() => Ee(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: D()(Br.base, t), style: a },
                            s().createElement(
                                'div',
                                {
                                    className: D()(Br.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: D()(Br.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                ((wr.Bar = Fr),
                    (wr.Default = yr),
                    (wr.SeniorityAwards = ({ api: e, className: t, classNames: n, children: r }) => (
                        (0, u.useEffect)(() => Ee(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: D()(Br.base, t) },
                            s().createElement(
                                'div',
                                { className: D()(Br.wrapper, null == n ? void 0 : n.wrapper), ref: e.wrapperRef },
                                s().createElement(
                                    'div',
                                    { className: D()(Br.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    )));
                const Sr = gr({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Er.Next : Er.Prev),
                    }),
                    Nr = 'VerticalBar_base__nonActive_42',
                    xr = 'disable',
                    Tr = () => {},
                    kr = { pending: !1, offset: 0 },
                    Mr = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Lr = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Pr = (e, t) => Math.max(20, e.offsetHeight * t),
                    Rr = (0, u.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = Mr, onDrag: r = Tr }) => {
                        const a = (0, u.useRef)(null),
                            i = (0, u.useRef)(null),
                            o = (0, u.useRef)(null),
                            l = (0, u.useRef)(null),
                            c = (0, u.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, u.useState)(kr),
                            d = m[0],
                            E = m[1],
                            p = (0, u.useCallback)(
                                (e) => {
                                    (E(e),
                                        c.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [r],
                            ),
                            g = _r(() => {
                                const t = c.current,
                                    n = l.current,
                                    r = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const s = Math.min(1, r / u);
                                return (
                                    (t.style.height = `${Pr(n, s)}px`),
                                    t.classList.add('VerticalBar_thumb_32'),
                                    a.current &&
                                        (1 === s ? a.current.classList.add(Nr) : a.current.classList.remove(Nr)),
                                    s
                                );
                            }),
                            b = _r(() => {
                                const t = l.current,
                                    n = c.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && t && n && a)) return;
                                const u = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / a),
                                    _ = fn(0, 1, u / (a - r)),
                                    m = (t.offsetHeight - Pr(t, s)) * _;
                                ((n.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (i.current && o.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    i.current.classList.add(xr),
                                                    void o.current.classList.remove(xr)
                                                );
                                            if (
                                                ((t = l.current),
                                                (n = c.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(xr),
                                                    void o.current.classList.add(xr)
                                                );
                                            var t, n;
                                            (i.current.classList.remove(xr), o.current.classList.remove(xr));
                                        }
                                    })(m));
                            }),
                            h = _r(() => {
                                Lr(e, () => {
                                    (g(), b());
                                });
                            });
                        ((0, u.useEffect)(() => Ee(h)),
                            (0, u.useEffect)(() => {
                                const t = () => {
                                    Lr(e, () => {
                                        b();
                                    });
                                };
                                let n = Tr;
                                const r = () => {
                                    (n(), (n = Ee(h)));
                                };
                                return (
                                    e.events.on('recalculateContent', h),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        (n(),
                                            e.events.off('recalculateContent', h),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', r));
                                    }
                                );
                            }, [e]),
                            (0, u.useEffect)(() => {
                                if (!d.pending) return;
                                const t = (t) => {
                                        Lr(e, (n) => {
                                            const a = l.current,
                                                u = c.current,
                                                s = e.getContainerSize();
                                            if (!a || !u || !s) return;
                                            const i = t.screenY - d.offset - a.getBoundingClientRect().y,
                                                o = (i / a.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: u, thumbOffset: i, contentOffset: o }));
                                        });
                                    },
                                    n = () => {
                                        (window.removeEventListener('mousemove', t),
                                            e.handleIsThumbDragging(!1),
                                            p(kr));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', n),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', n));
                                    }
                                );
                            }, [e, d.offset, d.pending, r, p]));
                        const f = mr((t) => e.applyStepTo(t), _, [e]),
                            v = f[0],
                            A = f[1];
                        (0, u.useEffect)(
                            () => (
                                document.addEventListener('mouseup', A, !0),
                                () => document.removeEventListener('mouseup', A, !0)
                            ),
                            [A],
                        );
                        const C = (e) => {
                            e.target.classList.contains(xr) || ee('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: D()('VerticalBar_base_f3', t.base), ref: a, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: D()('VerticalBar_topButton_d7', t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(xr) || 0 !== e.button || (ee('play'), v(Er.Next));
                                },
                                ref: i,
                                onMouseEnter: C,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: D()('VerticalBar_track_df', t.track),
                                    onMouseDown: (t) => {
                                        const r = c.current;
                                        var a;
                                        r &&
                                            0 === t.button &&
                                            (ee('play'),
                                            t.target === r
                                                ? (e.handleIsThumbDragging(!0),
                                                  p({ pending: !0, offset: t.screenY - r.getBoundingClientRect().y }))
                                                : ((a = t.screenY > r.getBoundingClientRect().y ? Er.Prev : Er.Next),
                                                  c.current &&
                                                      Lr(e, (t) => {
                                                          if (!t) return;
                                                          const r = n(e),
                                                              u = e.clampPosition(t, t.scrollTop + r * a);
                                                          e.applyScroll(u);
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
                                    e.target.classList.contains(xr) || 0 !== e.button || (ee('play'), v(Er.Prev));
                                },
                                onMouseUp: A,
                                ref: o,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    Ir = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Or = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: r,
                        areaClassName: a,
                        scrollClassName: i,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, u.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: D()(Ir.base, e.base) });
                            }, [r]),
                            m = (0, u.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: D()(Ir.defaultScroll, n), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: D()(Ir.area, a) },
                                s().createElement(Hr, { className: i, classNames: o, api: m }, e),
                            ),
                            s().createElement(Rr, { getStepByRailClick: l, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    Hr = ({ className: e, classNames: t, children: n, api: r }) => (
                        (0, u.useEffect)(() => Ee(r.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: D()(Ir.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: D()(Ir.content, null == t ? void 0 : t.content), ref: r.contentRef },
                                n,
                            ),
                        )
                    );
                Hr.Default = Or;
                const $r = { Vertical: a, Horizontal: r };
                let Wr;
                function Ur() {
                    return new Promise((e) => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                e();
                            });
                        });
                    });
                }
                (!(function (e) {
                    ((e[(e.Start = 0)] = 'Start'), (e[(e.Between = 1)] = 'Between'), (e[(e.End = 2)] = 'End'));
                })(Wr || (Wr = {})),
                    'undefined' != typeof Element &&
                        (Element.prototype.matches ||
                            Element.prototype.webkitMatchesSelector ||
                            Element.prototype.mozMatchesSelector ||
                            Element.prototype.msMatchesSelector),
                    'undefined' != typeof document && document.documentElement.style,
                    'undefined' != typeof window &&
                        ('ontouchstart' in window || (window.DocumentTouch && (document, window.DocumentTouch))),
                    'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent));
                const zr = 'Details_button__locked_e6',
                    Gr = 'Details_scrollDecoration_30',
                    Vr = 'Details_hidden_31',
                    jr = {
                        base: 'CloseButton_base_b7',
                        text: 'CloseButton_text_c4',
                        icon: 'CloseButton_icon_35',
                        icon_default: 'CloseButton_icon_default_c8',
                        icon_highlight: 'CloseButton_icon_highlight_5a',
                    },
                    Xr = ({ onClose: e, text: t }) => {
                        const n = (0, u.useState)(!1),
                            r = n[0],
                            a = n[1];
                        return s().createElement(
                            'div',
                            {
                                onClick: e,
                                onMouseEnter: () => {
                                    a(!0);
                                },
                                onMouseLeave: () => {
                                    a(!1);
                                },
                                className: D()(jr.base, r && jr.hover),
                            },
                            t && s().createElement(lr, { text: t, className: jr.text }),
                            s().createElement(
                                'div',
                                { className: jr.icon },
                                s().createElement('div', { className: jr.icon_default }),
                                s().createElement('div', { className: jr.icon_highlight }),
                            ),
                        );
                    };
                function qr(e, t, n, r, a, u, s) {
                    try {
                        var i = e[u](s),
                            o = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    i.done ? t(o) : Promise.resolve(o).then(r, a);
                }
                function Qr(e) {
                    return function () {
                        var t = this,
                            n = arguments;
                        return new Promise(function (r, a) {
                            var u = e.apply(t, n);
                            function s(e) {
                                qr(u, r, a, s, i, 'next', e);
                            }
                            function i(e) {
                                qr(u, r, a, s, i, 'throw', e);
                            }
                            s(void 0);
                        });
                    };
                }
                const Yr = R.strings.historical_battles_progression_details,
                    Kr = R.images.historical_battles.gui.maps.icons.progression.details.quests,
                    Zr = {
                        [y.ExtraSmall]: 'small',
                        [y.Small]: 'small',
                        [y.Medium]: 'medium',
                        [y.Large]: 'medium',
                        [y.ExtraLarge]: 'extraLarge',
                    },
                    Jr = (0, Q.observer)(({ onClose: e }) => {
                        const t = In(),
                            n = t.model,
                            r = t.controls,
                            a = n.computes.getMarksDetails(),
                            i = n.computes.getLockedPageIndex(),
                            o = (0, u.useState)(i - 1),
                            l = o[0],
                            c = o[1],
                            _ = (0, u.useState)(!0),
                            m = _[0],
                            d = _[1],
                            E = a[l - 1] ? a[l - 1].videoUrl : null,
                            p = a.length,
                            g = l <= 1,
                            b = l + 1 === i,
                            h = x().mediaSize,
                            f = n.frontName.get(),
                            v = Kr.$dyn(f).$dyn(Zr[h]).$dyn(`quest${l}`),
                            A = Yr.$dyn(f),
                            C = A.$dyn('title'),
                            F = A.$dyn('description'),
                            B = 1 === viewEnv.getGraphicsQuality(),
                            y = Sr(),
                            w = (0, u.useRef)(null),
                            S = (0, u.useRef)(null),
                            N = (0, u.useRef)(0),
                            T = ((e) => {
                                const t = (0, u.useState)(Wr.Start),
                                    n = t[0],
                                    r = t[1],
                                    a = e.animationScroll,
                                    s = e.getContainerSize,
                                    i = e.getWrapperSize,
                                    o = e.events;
                                return (
                                    (0, u.useEffect)(() => {
                                        const e = () => {
                                            const e = a.scrollPosition.get(),
                                                t = s() - i() - 10;
                                            r(e <= 10 ? Wr.Start : e >= t ? Wr.End : Wr.Between);
                                        };
                                        return (o.on('change', e), () => o.off('change', e));
                                    }, [a.scrollPosition, o, s, i]),
                                    n
                                );
                            })(y),
                            k = (0, u.useCallback)(() => {
                                const e = w.current;
                                if (!e) return;
                                const t =
                                    (null != (r = null == (a = (n = e).parentElement) ? void 0 : a.offsetHeight)
                                        ? r
                                        : 0) < n.offsetHeight;
                                var n, r, a;
                                d((e) => (e === t ? e : t));
                            }, []),
                            M = (0, u.useCallback)(
                                Qr(function* () {
                                    const e = N.current + 1;
                                    ((N.current = e), yield (0, K.Eu)(), yield Ur(), N.current === e && k());
                                }),
                                [k],
                            );
                        var L;
                        ((0, u.useEffect)(() => {
                            M();
                        }, [M]),
                            (0, u.useEffect)(() => {
                                M();
                            }, [l, M]),
                            (L = () => {
                                const e = (function () {
                                    var e = Qr(function* () {
                                        yield M();
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
                            (0, u.useEffect)(L, []));
                        const P = (0, u.useCallback)(
                                (e) => {
                                    (c(e), ee('play'), y.applyScroll(0, { immediate: !0 }));
                                },
                                [y],
                            ),
                            R = (0, u.useCallback)(() => {
                                e && e();
                            }, [e]);
                        (0, u.useEffect)(() => {
                            const e = () => {
                                (S.current && clearTimeout(S.current),
                                    (S.current = setTimeout(() => {
                                        (y.applyScroll(0, { immediate: !0 }), c(i - 1));
                                    }, Me)));
                            };
                            return (
                                addEventListener(we, e),
                                () => {
                                    (S.current && (clearTimeout(S.current), (S.current = null)),
                                        removeEventListener(we, e));
                                }
                            );
                        }, [y, i]);
                        const I = D()('Details_base_74', B && 'Details_base__low_f0');
                        return s().createElement(
                            'div',
                            { className: I },
                            s().createElement('div', { className: 'Details_bg_3f' }),
                            s().createElement('div', { className: 'Details_glow_57' }),
                            s().createElement('div', { className: 'Details_shadow_f5' }),
                            s().createElement('div', { className: 'Details_lip_d0' }),
                            s().createElement('div', { className: 'Details_separator_ed' }),
                            s().createElement(
                                'div',
                                { className: 'Details_buttonClose_71' },
                                s().createElement(Xr, { onClose: R }),
                            ),
                            s().createElement(
                                'div',
                                { className: 'Details_header_2a' },
                                s().createElement(
                                    'div',
                                    { className: 'Details_page_0c' },
                                    s().createElement(lr, { text: `${l} `, className: 'Details_currentPageNumber_47' }),
                                    s().createElement(lr, { text: `/ ${p}`, className: 'Details_lastPageNumber_36' }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'Details_switcher_0e' },
                                    s().createElement('div', {
                                        className: D()('Details_buttonBack_ec', g && zr),
                                        onClick: () => {
                                            g || P(l - 1);
                                        },
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: 'Details_headerText_cd' },
                                        s().createElement(
                                            'div',
                                            { className: 'Details_title_bf' },
                                            s().createElement(lr, { text: String(C.$dyn(`quest${l}`)) }),
                                        ),
                                    ),
                                    s().createElement('div', {
                                        className: D()('Details_buttonForward_ed', b && zr),
                                        onClick: () => {
                                            b || (l < p && P(l + 1));
                                        },
                                    }),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: 'Details_verticalScroll_b9' },
                                s().createElement('div', {
                                    className: D()(Gr, 'Details_topLip_09', T === Wr.Start && Vr),
                                }),
                                m &&
                                    s().createElement($r.Vertical.Bar, {
                                        classNames: { base: 'Details_verticalScrollBar_07' },
                                        api: y,
                                    }),
                                s().createElement(
                                    'div',
                                    { className: 'Details_verticalScrollWrapper_ec' },
                                    s().createElement(
                                        $r.Vertical.Area,
                                        {
                                            className: 'Details_verticalScrollArea_f9',
                                            classNames: { content: 'Details_verticalScrollContent_56' },
                                            api: y,
                                        },
                                        s().createElement(
                                            'div',
                                            { ref: w },
                                            s().createElement(
                                                'div',
                                                { className: 'Details_questContent_8e' },
                                                E &&
                                                    s().createElement('div', {
                                                        className: 'Details_playVideoBtn_63',
                                                        onClick: () => {
                                                            (ee('play'), E && r.showVideo(E));
                                                        },
                                                    }),
                                                s().createElement('div', {
                                                    className: 'Details_questIcon_aa',
                                                    style: { backgroundImage: `url(${v})` },
                                                }),
                                            ),
                                            s().createElement(Ot, {
                                                classMix: 'Details_description_a4',
                                                text: String(F.$dyn(`quest${l}`)),
                                            }),
                                        ),
                                    ),
                                    s().createElement('div', {
                                        className: D()(Gr, 'Details_bottomLip_e3', T === Wr.End && Vr),
                                    }),
                                ),
                            ),
                        );
                    }),
                    ea = {
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
                let ta, na;
                (!(function (e) {
                    ((e.P14 = 'P14'),
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
                        (e.H144 = 'H144'));
                })(ta || (ta = {})),
                    (function (e) {
                        ((e.C16x16 = '16x16'),
                            (e.C24x24 = '24x24'),
                            (e.C32x32 = '32x32'),
                            (e.C48x48 = '48x48'),
                            (e.C80x80 = '80x80'),
                            (e.C134x134 = '134x134'));
                    })(na || (na = {})));
                const ra = (0, u.memo)(
                        ({
                            amount: e,
                            type: t,
                            iconSize: n,
                            labelSize: r,
                            isEnough: a = !0,
                            isHighlighted: i = !1,
                            isAmountVisible: o = !0,
                            isDiscount: l = !1,
                            isAnimated: c = !1,
                            isProgression: _ = !1,
                            classMix: m,
                            isBooster: d = !1,
                            maxAmount: E,
                        }) => {
                            const p = K.Z5.getNumberFormat(e, K.B3.GOLD),
                                g = (0, u.useMemo)(
                                    () => ({
                                        backgroundImage: `url('${R.images.historical_battles.gui.maps.icons.hbCoin.$dyn(`c_${n}`).$dyn(Be.Offence)}')`,
                                    }),
                                    [n],
                                ),
                                b = D()(ea.base, m),
                                h = D()(
                                    ea.label,
                                    ea[`label__${t}`],
                                    ea[`label__size${r}`],
                                    i && ea[`label__${t}Glow`],
                                    !a && ea.label__notEnough,
                                    c && ea.label__animated,
                                    _ && ea.label__progression,
                                    d ? ea.label__booster : ea.label__default,
                                ),
                                f = D()(ea.icon, ea[`icon__size${n}`], c && ea.icon__animated),
                                v = D()(ea.stockBg, ea[`stockBg__size${r}`]);
                            return s().createElement(
                                'div',
                                { className: b },
                                o && s().createElement(lr, { text: p, className: h }),
                                E &&
                                    s().createElement(lr, {
                                        text: R.strings.historical_battles_progression.header.coinValue.maxAmount(),
                                        className: D()(h, ea.maxAmount),
                                        format: { binding: { value: K.Z5.getNumberFormat(Number(E), K.B3.GOLD) } },
                                    }),
                                s().createElement('div', { className: f, style: g }),
                                l && s().createElement('div', { className: v }),
                            );
                        },
                    ),
                    aa = {
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
                    ua = R.strings.historical_battles_progression.progressionView,
                    sa = { contentId: R.views.historical_battles.lobby.tooltips.HbCoinTooltip('resId') },
                    ia = (0, Q.observer)(({ isProgressionFinished: e, centerMode: t }) => {
                        const n = In().model,
                            r = n.computes,
                            a = n.frontName.get(),
                            u = n.curProgressPoints.get(),
                            i = r.pointsForNewLevel().toString(),
                            o = n.progressAnimationState.get(),
                            l = o >= Mn.ProgressFinished,
                            c = o === Mn.ProgressAlreadyFinished && aa.header__fast,
                            _ = D()(aa.header, c, aa.header__inProgress, l && aa.header__hide);
                        return s().createElement(
                            'div',
                            { className: D()(aa.base, t && aa.base__center) },
                            s().createElement(
                                'div',
                                { className: _ },
                                s().createElement(lr, { text: ua.title.inProgress(), className: aa.title }),
                                s().createElement(
                                    'div',
                                    { className: aa.content },
                                    t &&
                                        s().createElement('div', {
                                            className: D()(aa.titleDecorator, aa.titleDecorator__left),
                                        }),
                                    s().createElement(
                                        'div',
                                        { className: aa.hbCoinWrapper },
                                        s().createElement(lr, {
                                            className: aa.frontNameTitle,
                                            text: R.strings.hb_lobby.front.name.capitalAll.$dyn(a),
                                        }),
                                        !e &&
                                            s().createElement(
                                                'div',
                                                { className: aa.coinTooltipContainer },
                                                s().createElement(
                                                    le,
                                                    sa,
                                                    s().createElement(
                                                        'div',
                                                        { className: aa.coinContainer },
                                                        s().createElement(ra, {
                                                            amount: u,
                                                            maxAmount: i,
                                                            iconSize: na.C24x24,
                                                            labelSize: ta.H22,
                                                            isAnimated: !0,
                                                            isProgression: !0,
                                                            type: a,
                                                        }),
                                                    ),
                                                ),
                                            ),
                                    ),
                                    s().createElement('div', {
                                        className: D()(aa.titleDecorator, aa.titleDecorator__right),
                                    }),
                                ),
                            ),
                        );
                    }),
                    oa = 'LevelLabel_levelBackground_8a',
                    la = 'LevelLabel_level_50',
                    ca = ({ level: e, isActive: t, isCompleted: n, isHovered: r, isLast: a }) => {
                        const u = D()(
                            'LevelLabel_base_c1',
                            n && 'LevelLabel_base__completed_33',
                            t && 'LevelLabel_base__active_28',
                        );
                        return s().createElement(
                            'div',
                            { className: u },
                            s().createElement('div', { className: oa }),
                            s().createElement('div', { className: la }, e - 1),
                            r && s().createElement('div', { className: 'LevelLabel_hover_6e' }),
                            a &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', {
                                        className: D()(oa, 'LevelLabel_levelBackground__last_a3'),
                                    }),
                                    s().createElement('div', { className: D()(la, 'LevelLabel_level__last_c0') }, e),
                                ),
                        );
                    },
                    _a = R.images.historical_battles.gui.maps.icons.progression.rewards.s166x166,
                    ma = ({ isCompleted: e, className: t, tooltipConfig: n }) => {
                        const r = n || {},
                            a = r.tooltipId,
                            u = r.tooltipContentId,
                            i = r.icon,
                            o = mt({ tooltipId: a, tooltipContentId: u }),
                            l = D()('MainReward_base_0c', e && 'MainReward_base__completed_a6', t),
                            c = { backgroundImage: `url(${_a.$dyn(i)})` };
                        return s().createElement(
                            nt,
                            { tooltipArgs: o },
                            s().createElement('div', { className: l, style: c }),
                        );
                    },
                    da = (e, t, n) =>
                        D()(
                            e[n],
                            t === Mn.ProgressAlreadyFinished
                                ? e[`${n}__fast`]
                                : t >= Mn.ProgressFinished
                                  ? e[`${n}__completed`]
                                  : void 0,
                        ),
                    Ea = ({ arr: e, value: t }) => e.findIndex((e) => e > t),
                    pa = Object.assign({}, Cn, {
                        withStack: !0,
                        type: Vt.Growing,
                        delta: { duration: 400, delay: 300 },
                        line: { duration: 400, delay: 300 },
                    }),
                    ga = 'LevelCard_border_5d',
                    ba = 'LevelCard_pointsBorder_4a',
                    ha = (0, Q.observer)(
                        ({
                            pointsMin: e,
                            pointsForLast: t,
                            level: n,
                            isActive: r,
                            isLast: a,
                            isCompleted: i,
                            cardNumber: o,
                            rewards: l,
                        }) => {
                            const c = In(),
                                _ = c.model,
                                m = c.controls,
                                d = _.hoveredCard.get() === o,
                                E = 10 === o,
                                p = (0, u.useRef)(null),
                                g = ((e, t) => He(e, (e) => e.name === t))(l, Ge.TmanToken),
                                b = _.computes.levelStatus(n),
                                h = b.wasProgressionVisited,
                                f = b.isRecentlyCompletedLevel;
                            (0, u.useEffect)(() => {}, [i, h, f]);
                            const v = (0, u.useCallback)(() => {
                                ee('pr_progress_tick');
                            }, []);
                            (0, u.useEffect)(() => {
                                const e = p.current;
                                return Ee(() => {
                                    if (e)
                                        return (
                                            e.addEventListener('transitionstart', v),
                                            () => {
                                                e.removeEventListener('transitionstart', v);
                                            }
                                        );
                                });
                            }, [p, v]);
                            const A = D()(
                                'LevelCard_blockBackground_c1',
                                i && 'LevelCard_blockBackground__completed_04',
                                r && 'LevelCard_blockBackground__active_4f',
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
                                s().createElement('div', { className: A, ref: p }),
                                s().createElement(ca, {
                                    level: n,
                                    isCompleted: i,
                                    isActive: r,
                                    isLast: a,
                                    isHovered: d,
                                }),
                                s().createElement('div', { className: ga }),
                                s().createElement('div', { className: ba }, e),
                                a && s().createElement('div', { className: D()(ga, 'LevelCard_border__right_df') }),
                                a &&
                                    s().createElement(
                                        'div',
                                        { className: D()(ba, 'LevelCard_pointsBorder__right_c9') },
                                        t,
                                    ),
                                E &&
                                    s().createElement(ma, {
                                        className: 'LevelCard_mainRewardContainer_a5',
                                        isCompleted: i,
                                        tooltipConfig: g,
                                    }),
                            );
                        },
                    );
                function fa() {
                    return (
                        (fa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        fa.apply(this, arguments)
                    );
                }
                const va = (0, Q.observer)(
                        ({ levelRef: e }) => {
                            const t = In().model,
                                n = [0, ...t.computes.getLevels()];
                            return s().createElement(
                                'div',
                                { className: 'LevelCards_base_31', ref: e },
                                t.computes
                                    .levels()
                                    .map((e, t) =>
                                        s().createElement(
                                            ha,
                                            fa(
                                                {
                                                    key: e.level,
                                                    cardNumber: e.level,
                                                    pointsMin: n[t],
                                                    pointsForLast: n.slice(-1),
                                                },
                                                e,
                                            ),
                                        ),
                                    ),
                            );
                        },
                        { forwardRef: !0 },
                    ),
                    Aa = {
                        base: 'Rewards_base_ff',
                        base__completed: 'Rewards_base__completed_7d',
                        base__fast: 'Rewards_base__fast_b5',
                        base__wide: 'Rewards_base__wide_45',
                        reward: 'Rewards_reward_92',
                        largeIcon: 'Rewards_largeIcon_10',
                        opacity: 'Rewards_opacity_14',
                        silver: 'Rewards_silver_bb',
                    },
                    Ca = (e) => 'credits' === e;
                function Da() {
                    return (
                        (Da =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Da.apply(this, arguments)
                    );
                }
                const Fa = ['historical_battles_main_discount'],
                    Ba = (0, Q.observer)(({ isCompleted: e, isActive: t, rewards: n }) => {
                        const r = In().model.root.get().hasVehicle,
                            a = x().mediaSize >= y.ExtraLarge,
                            u = Ct(n, a ? je.Big : je.Small),
                            i = u.filteredRewards,
                            o = u.imageSize,
                            l = D()(
                                Aa.base,
                                o === je.Small && i.length > 3 && Aa.base__wide,
                                e && !t && Aa.base__completed,
                            ),
                            c = i.findIndex((e) => At.includes(e.name));
                        if (-1 !== c) {
                            const e = i.splice(c, 1)[0],
                                t = Math.floor(i.length / 2);
                            i.splice(t, 0, e);
                        }
                        return s().createElement(
                            'div',
                            { className: l },
                            i.map((e, t) => {
                                const n = e.name,
                                    u = e.tooltipId,
                                    i = e.tooltipContentId,
                                    o = Fa.includes(n),
                                    l = {
                                        info: D()(Aa.rewardInfo, Ca(n) && Aa.silver),
                                        rewardIcon: D()(a && Aa.largeIcon),
                                    };
                                return s().createElement(
                                    Et,
                                    Da({ className: D()(Aa.reward, o && r && Aa.opacity), classNames: l, key: t }, e, {
                                        tooltipArgs: mt({ tooltipId: u }, Number(i)),
                                    }),
                                );
                            }),
                        );
                    }),
                    ya = {
                        base: 'RewardCard_base_c0',
                        background: 'RewardCard_background_8a',
                        background__completed: 'RewardCard_background__completed_55',
                        background__fast: 'RewardCard_background__fast_d8',
                        background__active: 'RewardCard_background__active_19',
                        border: 'RewardCard_border_6b',
                        border__right: 'RewardCard_border__right_f7',
                    },
                    wa = (0, Q.observer)(({ isCompleted: e, isActive: t, isLast: n, rewards: r, rewardId: a }) => {
                        const u = x(),
                            i = In().controls,
                            o = a + 1,
                            l = D()(
                                ya.base,
                                u.mediaSize === y.Medium && ya.base__mediaMedium,
                                u.mediaSize === y.Large && ya.base__mediaLarge,
                                u.remScreenHeight >= 1200 && ya.base__mediaExtraExtraLarge,
                            ),
                            c = D()(ya.background, e && ya.background__completed, t && ya.background__active);
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
                            s().createElement(Ba, { rewards: r, isActive: t, isCompleted: e }),
                            s().createElement('div', { className: ya.border }),
                            n && s().createElement('div', { className: D()(ya.border, ya.border__right) }),
                        );
                    }),
                    Sa = (0, Q.observer)(() => {
                        const e = In().model;
                        return s().createElement(
                            'div',
                            { className: 'RewardCards_base_e0' },
                            Oe(e.computes.levels(), ({ isCompleted: e, isActive: t, isLast: n, rewards: r }, a) =>
                                s().createElement(wa, {
                                    key: a,
                                    isCompleted: e,
                                    isActive: t,
                                    isLast: n,
                                    rewards: r,
                                    rewardId: a,
                                }),
                            ),
                        );
                    }),
                    Na = ['api', 'value', 'maxValue', 'theme'];
                function xa() {
                    return (
                        (xa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        xa.apply(this, arguments)
                    );
                }
                const Ta = (e, t) => ('number' == typeof t ? t : e.offsetLeft),
                    ka = (e) => {
                        let t = e.api,
                            n = e.value,
                            r = e.maxValue,
                            a = void 0 === r ? 100 : r,
                            i = e.theme,
                            o = void 0 === i ? An : i,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((n = u[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                return a;
                            })(e, Na);
                        const c = (0, u.useRef)(null),
                            _ = (0, u.useRef)(null),
                            m = (0, u.useRef)(null),
                            d = fn(0, n, a) / a,
                            E = (0, u.useCallback)(
                                (e) => {
                                    (m.current &&
                                        c.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: t }, n, r) => {
                                            const a = n.offsetWidth - r.offsetWidth,
                                                u = e - Ta(n, t),
                                                s = fn(0, a, u);
                                            r.style.left = `${s}px`;
                                        })(e, c.current, m.current),
                                        _.current &&
                                            c.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: t },
                                                n,
                                                { container: r, line: a },
                                            ) => {
                                                const u = Math.max(0, Math.floor(r.offsetWidth * n) - 8e3),
                                                    s = e - Ta(r, t),
                                                    i = fn(0, u, s);
                                                a.style.left = `${i}px`;
                                            })(e, d, { line: _.current, container: c.current }));
                                },
                                [d],
                            ),
                            p = (0, u.useMemo)(() => bn(o), [o]);
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
                                        s().createElement(jt, {
                                            size: l.size,
                                            classMix: l.progressBarBackgroundClassMix,
                                        }),
                                    ),
                                    s().createElement(
                                        Dn,
                                        xa({}, l, {
                                            lineRef: _,
                                            value: n,
                                            theme: o,
                                            maxValue: a,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    },
                    Ma = {
                        base: 'Container_base_2e',
                        progressWrapper: 'Container_progressWrapper_e8',
                        progressWrapper__completed: 'Container_progressWrapper__completed_b8',
                        progressWrapper__fast: 'Container_progressWrapper__fast_99',
                        bg: 'Container_bg_9c',
                    },
                    La = 100,
                    Pa = (0, Q.observer)(({ api: e, theme: t }) => {
                        const n = In(),
                            r = n.model,
                            a = n.controls,
                            i = r.progressAnimationState.get(),
                            o = r.prevProgressPoints.get(),
                            l = r.curProgressPoints.get(),
                            c = r.computes.getLevels(),
                            _ = [0, ...c],
                            m = Ea({ arr: c, value: o }),
                            d = Ea({ arr: c, value: l }),
                            E = (e, t, n) => {
                                const r = La / c.length,
                                    a = n[t + 1] - n[t],
                                    u = e - n[t];
                                return t * r + (r / La) * (((u / a) * La * 75.6) / La + 12.2);
                            },
                            p = E(o, m, _),
                            g = E(l, d, _),
                            b = (0, u.useRef)({ update: () => {} });
                        e.current.moveProgressBars = (0, u.useCallback)((e) => {
                            b.current.update(e);
                        }, []);
                        const h = (0, u.useState)({ previousEarnedPoints: p || La, progressionSize: p || La }),
                            f = h[0],
                            v = f.previousEarnedPoints,
                            A = f.progressionSize,
                            C = h[1];
                        return (
                            (0, u.useEffect)(() => {
                                (C((e) => ({
                                    previousEarnedPoints: 0 === e.progressionSize ? o : e.progressionSize,
                                    progressionSize: g || La,
                                })),
                                    o !== g && ee('pr_progress_bar'));
                            }, [o, g]),
                            (0, u.useEffect)(() => {
                                if (i === Mn.ProgressChange)
                                    return Zt(() => {
                                        a.finishProgressionChange();
                                    }, 700);
                            }, [a, i]),
                            s().createElement(
                                'div',
                                { className: Ma.base },
                                s().createElement('div', { className: Ma.bg }),
                                s().createElement(
                                    'div',
                                    { className: da(Ma, i, 'progressWrapper') },
                                    s().createElement(ka, {
                                        animationSettings: pa,
                                        deltaFrom: v,
                                        value: A,
                                        maxValue: La,
                                        api: b,
                                        theme: t,
                                    }),
                                ),
                            )
                        );
                    }),
                    Ra = {
                        base__enabled: 'ScrollDrag_base__enabled_b4',
                        base__disabled: 'ScrollDrag_base__disabled_78',
                        base__grabbing: 'ScrollDrag_base__grabbing_3e',
                    },
                    Ia = ({ api: e, children: t, isScrollEnabled: n, updateProgressBarPosition: r }) => {
                        const a = (0, u.useState)(0),
                            i = a[0],
                            o = a[1],
                            l = (0, u.useState)(0),
                            c = l[0],
                            _ = l[1],
                            m = (0, u.useState)(!1),
                            d = m[0],
                            E = m[1];
                        ((0, u.useEffect)(
                            () =>
                                Ee(() => {
                                    const t = (e) => {
                                        const t = e.value.scrollPosition;
                                        d || o(-t);
                                    };
                                    return (
                                        e.events.on('change', t),
                                        () => {
                                            e.events.off('change', t);
                                        }
                                    );
                                }),
                            [e, d],
                        ),
                            (0, u.useEffect)(() => {
                                n || (E(!1), _(0));
                            }, [n]));
                        const p = (0, u.useCallback)(
                                (e) => {
                                    n && (E(!0), _(e.clientX), r());
                                },
                                [n, r],
                            ),
                            g = (0, u.useCallback)(() => {
                                (E(!1), _(0), r());
                            }, [r]),
                            b = (0, u.useCallback)(
                                (t) => {
                                    if (d) {
                                        const n = fn(-(e.getBounds()[1] || 0), 0, i + t.clientX - c);
                                        (e.applyScroll(-n, !0), _(t.clientX), o(n), r());
                                    }
                                },
                                [d, e, i, c, r],
                            ),
                            h = D()(Ra.base, n ? Ra.base__enabled : Ra.base__disabled, n && d && Ra.base__grabbing);
                        return s().createElement(
                            'div',
                            { className: h, onMouseDown: p, onMouseUp: g, onMouseMove: b },
                            t,
                        );
                    };
                function Oa(e, t, n, r, a, u, s) {
                    try {
                        var i = e[u](s),
                            o = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    i.done ? t(o) : Promise.resolve(o).then(r, a);
                }
                const Ha = (0, Q.observer)(({ api: e, isScrollEnabled: t }) => {
                        const n = In().model,
                            r = x(),
                            a = (0, u.useState)(!1),
                            i = a[0],
                            o = a[1],
                            l = (0, u.useState)(!1),
                            c = l[0],
                            _ = l[1],
                            m = n.computes.levels().length,
                            d = n.computes,
                            E = d.currentLevel(),
                            p = (0, u.useRef)({ moveProgressBars: $ }),
                            g = (0, u.useRef)(null),
                            b = (0, u.useRef)(null),
                            h = e.animationScroll.scrollPosition,
                            f = e.getWrapperSize,
                            v = e.contentRef,
                            A = e.wrapperRef,
                            C = e.getContainerSize,
                            F = e.applyScroll;
                        (0, u.useLayoutEffect)(
                            () =>
                                Ee(() => {
                                    const e = A.current,
                                        t = b.current;
                                    if (!e || !t) return;
                                    const n = parseFloat(getComputedStyle(t.children[0]).width),
                                        a = parseFloat(getComputedStyle(t).paddingRight),
                                        u = parseFloat(getComputedStyle(e).paddingLeft);
                                    (o(r.remScreenWidth >= m * n + a + u), _(!0));
                                }),
                            [r.remScreenWidth, A, m],
                        );
                        const B = (0, u.useCallback)(
                                (e) => {
                                    if (g.current) {
                                        const t = f();
                                        p.current.moveProgressBars({
                                            viewPort: g.current,
                                            horizontalScrollPosition: t ? e - t : e,
                                        });
                                    }
                                },
                                [f],
                            ),
                            y = (0, u.useCallback)(() => {
                                B(h.goal);
                            }, [h, B]),
                            w = (0, u.useCallback)(() => {
                                const e = v.current;
                                if (!e || m <= 0) return;
                                const t = C() || 0,
                                    n = f() || 0,
                                    r = m > 0 ? t / m : 0,
                                    a = d.currentLevel() * r,
                                    u = (n - e.offsetLeft - r) / 2,
                                    s = fn(0, t - n, a - u);
                                (F(s, { immediate: d.wasProgressionCompletedBeforeStart() }), B(s));
                            }, [m, F, d, v, C, f, B]);
                        return (
                            (0, u.useEffect)(() => {
                                w();
                            }, [E, w]),
                            (0, u.useEffect)(() => {
                                const e = (function () {
                                    var e,
                                        t =
                                            ((e = function* () {
                                                const e = C(),
                                                    t = h.goal;
                                                (yield (0, K.Eu)(), yield Ur());
                                                const n = C();
                                                (B(n && e && n !== e ? (t * n) / e : t), w());
                                            }),
                                            function () {
                                                var t = this,
                                                    n = arguments;
                                                return new Promise(function (r, a) {
                                                    var u = e.apply(t, n);
                                                    function s(e) {
                                                        Oa(u, r, a, s, i, 'next', e);
                                                    }
                                                    function i(e) {
                                                        Oa(u, r, a, s, i, 'throw', e);
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
                            s().createElement(
                                'div',
                                {
                                    className: D()(
                                        'Content_base_bb',
                                        i && 'Content_base__centered_da',
                                        c && 'Content_base__layoutReady_17',
                                    ),
                                    ref: g,
                                    onWheel: y,
                                },
                                s().createElement(
                                    $r.Horizontal.Area.Default,
                                    {
                                        api: e,
                                        className: 'Content_horizontalContent_d4',
                                        classNames: { wrapper: 'Content_wrapper_fa' },
                                        barClassNames: { base: 'Content_horizontalBarVerticalScrollBar_c2' },
                                        onDrag: y,
                                    },
                                    s().createElement(
                                        Ia,
                                        { api: e, isScrollEnabled: t, updateProgressBarPosition: y },
                                        s().createElement(va, { levelRef: b }),
                                        s().createElement(
                                            'div',
                                            { className: 'Content_progress_8f' },
                                            s().createElement(
                                                'div',
                                                { className: 'Content_progressArea_9c' },
                                                s().createElement(Pa, { api: p }),
                                            ),
                                        ),
                                        s().createElement(Sa, null),
                                    ),
                                ),
                            )
                        );
                    }),
                    $a = { type: 'idle' };
                function Wa(e, t, n) {
                    const r = e.contentRef,
                        a = e.wrapperRef,
                        s = e.scrollPosition,
                        i = e.clampPosition,
                        o = e.animationScroll,
                        l = e.events,
                        _ = (0, u.useState)($a),
                        m = _[0],
                        d = _[1];
                    return (
                        (0, u.useEffect)(() => {
                            const e = r.current;
                            e && (e.style.cursor = 'dragging' === m.type ? 'move' : 'grab');
                        }, [r, m.type]),
                        (0, u.useEffect)(() => {
                            if ('dragging' !== m.type) return;
                            const e = c.O.client.events.mouse.move(([e, n]) => {
                                    const u = r.current,
                                        l = a.current;
                                    if (!u || !l) return;
                                    if ('inside' === n && e.clientX < 0) return;
                                    const c = 'inside' === n ? e.clientX : e.clientX - l.offsetLeft,
                                        _ = m.positionFrom - c,
                                        d = m.previousScrollPosition + _;
                                    s.start(
                                        Object.assign(
                                            {
                                                scrollPosition: i(u, d),
                                                from: { scrollPosition: o.scrollPosition.get() },
                                            },
                                            t && { config: t },
                                        ),
                                    );
                                }),
                                n = c.O.client.events.mouse.up(function () {
                                    d({ type: 'scrollingToEnd' });
                                });
                            return () => {
                                (e(), n());
                            };
                        }, [o.scrollPosition, i, r, m, s, a, t]),
                        (0, u.useEffect)(() => {
                            if ('scrollingToEnd' !== m.type) return;
                            const e = () => {
                                d($a);
                            };
                            return (o.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e));
                        }, [o.scrollPosition, m.type, l]),
                        (0, u.useEffect)(() => {
                            const e = r.current;
                            if (!e) return;
                            const t = (e) => {
                                (n && n.allowedButtons && -1 === n.allowedButtons.findIndex((t) => e.button === t)) ||
                                    d({
                                        type: 'dragging',
                                        positionFrom: e.screenX,
                                        previousScrollPosition: o.scrollPosition.get(),
                                    });
                            };
                            return (e.addEventListener('mousedown', t), () => e.removeEventListener('mousedown', t));
                        }, [o.scrollPosition, r, n]),
                        m
                    );
                }
                const Ua = {
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
                };
                function za(e, t, n, r, a, u, s) {
                    try {
                        var i = e[u](s),
                            o = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    i.done ? t(o) : Promise.resolve(o).then(r, a);
                }
                const Ga = (0, Q.observer)(() => {
                        const e = In(),
                            t = e.model,
                            n = e.controls,
                            r = t.progressAnimationState.get(),
                            a = (0, u.useState)(0),
                            i = a[0],
                            o = a[1],
                            l = (0, u.useState)(!1),
                            c = l[0],
                            _ = l[1],
                            m = (0, u.useState)(!1),
                            d = m[0],
                            E = m[1],
                            p = (0, u.useState)([0, 0]),
                            g = p[0],
                            b = p[1],
                            h = t.computes.isProgressionCompleted(),
                            f = t.computes.wasProgressionCompletedBeforeStart(),
                            v = br(),
                            A = g[0],
                            C = g[1];
                        Wa(v);
                        const F = (0, u.useCallback)(
                            (e) => {
                                var t;
                                const n = v.contentRef.current;
                                if (!n) return;
                                const r = n.offsetLeft,
                                    a =
                                        null != (t = null == e ? void 0 : e.value.scrollPosition)
                                            ? t
                                            : v.animationScroll.scrollPosition.goal,
                                    u = v.getWrapperSize() || 0,
                                    s = v.getContainerSize() || 0,
                                    i = a > r,
                                    l = a + u < s - r;
                                (_((e) => (e === i ? e : i)), E((e) => (e === l ? e : l)));
                                const c = v.animationScroll.scrollPosition.goal;
                                o((e) => (e === c ? e : c));
                                const m = v.getBounds(),
                                    d = m[0],
                                    p = m[1],
                                    g = [d, p];
                                b((e) => (e[0] === d && e[1] === p ? e : g));
                            },
                            [v],
                        );
                        ((0, u.useEffect)(() => {
                            const e = (e) => {
                                F(e);
                            };
                            return (
                                v.events.on('change', e),
                                () => {
                                    v.events.off('change', e);
                                }
                            );
                        }, [v, F]),
                            (0, u.useEffect)(() => {
                                const e = (function () {
                                    var e,
                                        t =
                                            ((e = function* () {
                                                (yield (0, K.Eu)(), yield Ur(), F());
                                            }),
                                            function () {
                                                var t = this,
                                                    n = arguments;
                                                return new Promise(function (r, a) {
                                                    var u = e.apply(t, n);
                                                    function s(e) {
                                                        za(u, r, a, s, i, 'next', e);
                                                    }
                                                    function i(e) {
                                                        za(u, r, a, s, i, 'throw', e);
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
                            }, [F]),
                            (0, u.useEffect)(
                                () =>
                                    f
                                        ? n.completeProgression(!0)
                                        : r === Mn.ChangeCompleted && h
                                          ? Zt(() => {
                                                n.completeProgression(!1);
                                            }, 1600)
                                          : r !== Mn.Scrolling || f
                                            ? r === Mn.HighlightCard
                                                ? Zt(() => {
                                                      n.finishHighlightCard();
                                                  }, 500)
                                                : void 0
                                            : Zt(() => {
                                                  n.finishScrolling();
                                              }, 1200),
                                [r, f, h, n],
                            ));
                        const B = D()(
                                Ua.arrow,
                                Ua.arrow__left,
                                i === A ? Ua.arrow__disabled : Ua.arrow__enabled,
                                C <= 0 && Ua.arrow__hidden,
                            ),
                            y = D()(
                                Ua.arrow,
                                Ua.arrow__right,
                                i === C ? Ua.arrow__disabled : Ua.arrow__enabled,
                                C <= 0 && Ua.arrow__hidden,
                            );
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(
                                'div',
                                { className: da(Ua, r, 'base') },
                                s().createElement('div', {
                                    className: D()(Ua.shadow, Ua.shadow__left, c && Ua.shadow__visible),
                                }),
                                s().createElement('div', {
                                    className: D()(Ua.shadow, Ua.shadow__right, d && Ua.shadow__visible),
                                }),
                                s().createElement(Ha, { api: v, isScrollEnabled: C > 0 }),
                            ),
                            s().createElement('div', {
                                className: B,
                                onClick: () => {
                                    v.applyStepTo(Er.Next);
                                },
                            }),
                            s().createElement('div', {
                                className: y,
                                onClick: () => {
                                    v.applyStepTo(Er.Prev);
                                },
                            }),
                        );
                    }),
                    Va = [
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
                function ja() {
                    return (
                        (ja =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        ja.apply(this, arguments)
                    );
                }
                const Xa = (0, u.memo)(function (e) {
                        let t = e.width,
                            n = e.height,
                            r = e.getImageSource,
                            a = e.frameCount,
                            i = e.onAnimate,
                            o = e.frameTime,
                            l = void 0 === o ? 33 : o,
                            c = e.initialFrameIndex,
                            _ = void 0 === c ? 0 : c,
                            m = e.lastFrameIndex,
                            d = void 0 === m ? a - 1 : m,
                            E = e.loop,
                            p = void 0 === E || E,
                            g = e.state,
                            b = void 0 === g ? 'play' : g,
                            h = e.onAnimationDone,
                            f = e.onAnimationComplete,
                            v = e.poster,
                            A = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((n = u[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                return a;
                            })(e, Va);
                        const C = (0, u.useRef)(null);
                        return (
                            (0, u.useEffect)(() => {
                                const e = C.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    n = (n) => {
                                        (t.clearRect(0, 0, e.width, e.height), t.drawImage(n.img, -n.x, -n.y));
                                    };
                                switch (b) {
                                    case 'play':
                                        return (function () {
                                            const e = Ya(_, d, r),
                                                t = qa(_, d),
                                                a = window.setInterval(() => {
                                                    const r = t(),
                                                        u = e.get(r);
                                                    u
                                                        ? (null == i || i(r, u),
                                                          n(u),
                                                          r === d &&
                                                              (null == f || f(),
                                                              p || (null == h || h(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === _ && v ? { path: v, x: 0, y: 0 } : r(_),
                                                t = new Image();
                                            t.src = e.path;
                                            const a = () => n(Qa(e, t));
                                            return (
                                                t.addEventListener('load', a),
                                                () => t.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, r, _, d, p, i, f, h, v, b]),
                            s().createElement('canvas', ja({}, A, { width: t, height: n, ref: C }))
                        );
                    }),
                    qa = (e, t) => {
                        let n = e;
                        return () => {
                            const r = n;
                            return ((n += 1), n > t && (n = e), r);
                        };
                    },
                    Qa = (e, t) => Object.assign({}, e, { img: t }),
                    Ya = (e, t, n) => {
                        const r = new Map(),
                            a = {};
                        for (let u = e; u <= t; u++) {
                            const e = n(u),
                                t = a[e.path];
                            if (t) r.set(u, Qa(e, t));
                            else {
                                const t = new Image();
                                ((a[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${u})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    r.set(u, Qa(e, t)));
                            }
                        }
                        return r;
                    },
                    Ka = {
                        width: 200,
                        height: 200,
                        frameCount: 15,
                        chunk: { count: 1, columns: 15, rows: 1 },
                        getChunkPath: () => 'R.images.historical_battles.gui.maps.icons.progression.flag.sequence',
                    },
                    Za = (function (e) {
                        const t = e.chunk,
                            n = t.rows * t.columns;
                        return (r) => {
                            const a = r % n,
                                u = (a % t.columns) * e.width,
                                s = Math.trunc(a / t.columns) * e.height;
                            return { path: e.getChunkPath(Math.trunc(r / n)), x: u, y: s };
                        };
                    })(Ka),
                    Ja = s().memo(({ isActive: e, onClick: t, onMouseEnter: n, style: r, classMix: a }) => {
                        const i = (0, u.useState)('stop'),
                            o = i[0],
                            l = i[1],
                            c = D()('Flag_base_90', e && 'Flag_base__active_64', a),
                            _ = (0, u.useCallback)(
                                () => (
                                    l('play'),
                                    setTimeout(() => {
                                        l('stop');
                                    }, 50 * Ka.frameCount)
                                ),
                                [],
                            );
                        return (
                            (0, u.useEffect)(() => {
                                const e = () => _(),
                                    t = setTimeout(e, 3e3),
                                    n = setInterval(e, 50 * Ka.frameCount + 3e3);
                                return () => {
                                    (clearTimeout(t), clearInterval(n));
                                };
                            }, [_]),
                            s().createElement(
                                'div',
                                { className: c, onClick: t, style: r, onMouseEnter: n },
                                s().createElement(Xa, {
                                    width: Ka.width,
                                    height: Ka.height,
                                    frameCount: Ka.frameCount,
                                    frameTime: 50,
                                    getImageSource: Za,
                                    className: 'Flag_flagBackground_b5',
                                    loop: !1,
                                    state: o,
                                }),
                                s().createElement('div', { className: 'Flag_hover_59' }),
                                e && s().createElement('div', { className: 'Flag_active_1b' }),
                            )
                        );
                    }),
                    eu = { top: '32.8%', left: '53.4%' },
                    tu = { top: '31%', left: '53%' },
                    nu = { top: '30.6%', left: '53%' },
                    ru = { top: '30.9%', left: '53%' },
                    au = { top: '31.2%', left: '54%' },
                    uu = { top: '31%', left: '53%' },
                    su = [1, 3, 5, 7, 9, 10];
                let iu;
                !(function (e) {
                    ((e.Large = 'large'), (e.Medium = 'medium'), (e.Small = 'small'));
                })(iu || (iu = {}));
                const ou = {
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
                    lu = {
                        [y.ExtraSmall]: '30rem',
                        [y.Small]: '30rem',
                        [y.Medium]: '40rem',
                        [y.Large]: '56rem',
                        [y.ExtraLarge]: '76rem',
                    },
                    cu = {
                        [y.ExtraSmall]: '72rem',
                        [y.Small]: '86rem',
                        [y.Medium]: '96rem',
                        [y.Large]: '96rem',
                        [y.ExtraLarge]: '165rem',
                    },
                    _u = (0, Q.observer)(() => {
                        const e = In().model,
                            t = e.computes,
                            n = e.frontName.get(),
                            r = (0, u.useState)(!1),
                            a = r[0],
                            i = r[1],
                            o = (0, u.useState)(!1),
                            l = o[0],
                            c = o[1],
                            _ = (0, u.useState)(!1),
                            m = _[0],
                            d = _[1],
                            E = x(),
                            p = E.mediaSize,
                            g = E.remScreenWidth,
                            b = t.currentLevel(),
                            h = t.isProgressionCompleted(),
                            f = D()(ou.base, h && ou.base__finished, ou[`base__${n}`]),
                            v = (0, u.useMemo)(
                                () =>
                                    (({ frontName: e, currentLevel: t, isProgressionFinished: n, mediaSize: r }) => {
                                        const a = ((e) => {
                                                switch (!0) {
                                                    case e >= y.ExtraLarge:
                                                        return iu.Large;
                                                    case e >= y.Large:
                                                        return iu.Medium;
                                                    case e <= y.Medium:
                                                        return iu.Small;
                                                    default:
                                                        return iu.Large;
                                                }
                                            })(r),
                                            u =
                                                R.images.historical_battles.gui.maps.icons.backgrounds.progression.$dyn(
                                                    e,
                                                ),
                                            s = n ? 6 : su.findIndex((e) => t <= e) + 1;
                                        return `url('${u.$dyn(a).$dyn(`c_${s}`)}')`;
                                    })({ frontName: n, currentLevel: b, mediaSize: p, isProgressionFinished: h }),
                                [n, b, h, p],
                            ),
                            A =
                                n === Be.Offence
                                    ? { top: '44%', left: '51%' }
                                    : ((e) => {
                                          switch (!0) {
                                              case e >= y.ExtraLarge:
                                                  return eu;
                                              case e >= y.Large:
                                                  return tu;
                                              case e >= y.Medium:
                                                  return nu;
                                              case e >= y.Small:
                                                  return ru;
                                              case e === y.ExtraSmall:
                                                  return au;
                                              default:
                                                  return uu;
                                          }
                                      })(g),
                            C = (0, u.useCallback)(() => {
                                (ee(Se.SHOW_DETAILS), c((e) => !e), i(!0), dispatchEvent(new Event(l ? we : ye)));
                            }, [l]),
                            F = (0, u.useMemo)(
                                () =>
                                    ((e, t, n, r) => {
                                        const a = { duration: r ? Me : 0 };
                                        return e
                                            ? {
                                                  from: { top: t, left: '50%', transform: 'translateX(-50%)' },
                                                  to: { top: n, left: '0%', transform: 'translateX(0%)' },
                                                  config: a,
                                              }
                                            : {
                                                  from: { top: n, left: '0%', transform: 'translateX(0%)' },
                                                  to: { top: t, left: '50%', transform: 'translateX(-50%)' },
                                                  config: a,
                                              };
                                    })(l, lu[p], cu[p], a),
                                [l, p, a],
                            ),
                            B = (0, pe.useSpring)(F),
                            w = (0, u.useMemo)(
                                () =>
                                    ((e, t, n) => {
                                        const r = { duration: t ? Me : 0 },
                                            a = n >= y.Medium ? '430rem' : '230rem',
                                            u = n >= y.Medium ? '-430rem' : '-230rem';
                                        return e
                                            ? { from: { left: '0', right: '0' }, to: { left: u, right: a }, config: r }
                                            : { from: { left: u, right: a }, to: { left: '0', right: '0' }, config: r };
                                    })(l, a, p),
                                [l, a, p],
                            ),
                            S = (0, pe.useSpring)(w),
                            N = (0, u.useMemo)(
                                () =>
                                    ((e, t) => {
                                        const n = { duration: t ? Me : 0 };
                                        return e
                                            ? { from: { bottom: '0' }, to: { bottom: '-400rem' }, config: n }
                                            : { from: { bottom: '-400rem' }, to: { bottom: '0' }, config: n };
                                    })(l, a),
                                [l, a],
                            ),
                            T = (0, pe.useSpring)(N),
                            k = (0, u.useMemo)(
                                () =>
                                    ((e, t) => {
                                        const n = { duration: t ? Me : 0 };
                                        return e
                                            ? {
                                                  from: { transform: 'translateX(100%)' },
                                                  to: { transform: 'translateX(0%)' },
                                                  config: n,
                                              }
                                            : {
                                                  from: { transform: 'translateX(0%)' },
                                                  to: { transform: 'translateX(100%)' },
                                                  config: n,
                                              };
                                    })(l, a),
                                [l, a],
                            ),
                            M = (0, pe.useSpring)(k),
                            L = (0, u.useCallback)(() => {
                                (c(!1), i(!0), dispatchEvent(new Event(we)));
                            }, []);
                        ((0, u.useEffect)(() => {
                            const e = () => {
                                c(!1);
                            };
                            return (
                                addEventListener(we, e),
                                () => {
                                    removeEventListener(we, e);
                                }
                            );
                        }, []),
                            (0, u.useEffect)(() => {
                                if (!l && m) {
                                    const e = setTimeout(() => {
                                        d(!1);
                                    }, Me);
                                    return () => clearTimeout(e);
                                }
                                l && !m && d(!0);
                            }, [l, m]));
                        const P = (0, u.useCallback)(() => {
                            ee(Se.HIGHLIGHT);
                        }, []);
                        return s().createElement(
                            'div',
                            { className: f },
                            s().createElement(
                                pe.animated.div,
                                { className: ou.bgContainer, style: S },
                                s().createElement('div', { className: ou.bg, style: { backgroundImage: v } }),
                                s().createElement(Ja, {
                                    onMouseEnter: P,
                                    classMix: ou.flagContainer,
                                    isActive: l,
                                    onClick: C,
                                    style: A,
                                }),
                                s().createElement('div', { className: ou.vignette }),
                                s().createElement('div', { className: ou.topShadow }),
                            ),
                            s().createElement(
                                'div',
                                { className: ou.content },
                                s().createElement('div', {
                                    className: D()(ou.leftShadow, l && ou.leftShadow__visible),
                                }),
                                s().createElement('div', { className: D()(ou.shadowBg, !l && ou.shadowBg__visible) }),
                                s().createElement(
                                    pe.animated.div,
                                    { className: D()(ou.header, l && ou.header__left), style: B },
                                    s().createElement(ia, { isProgressionFinished: h, centerMode: !l }),
                                ),
                                s().createElement(
                                    pe.animated.div,
                                    { className: ou.details, style: M },
                                    m && s().createElement(Jr, { onClose: L }),
                                ),
                                s().createElement(
                                    pe.animated.div,
                                    { className: ou.mainContent, style: T },
                                    s().createElement('div', { className: ou.bottomShadow }),
                                    s().createElement(Ga, null),
                                ),
                            ),
                        );
                    }),
                    mu = () =>
                        s().createElement(
                            Rn,
                            { options: { context: 'model.progressionModel' } },
                            s().createElement(_u, null),
                        ),
                    du = V()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), divisions: e.array('divisions') },
                                n = (0, ze.computedFn)(() => t.root.get().frontName),
                                r = (0, ze.computedFn)(() => Oe(t.divisions.get(), (e) => e), { equals: W }),
                                a = (0, ze.computedFn)(
                                    () =>
                                        Oe(t.divisions.get(), (e) =>
                                            Object.assign({}, e, { levels: e.levels.map((e) => u(e.value)) }),
                                        ),
                                    { equals: W },
                                ),
                                u = (0, ze.computedFn)(
                                    (e) =>
                                        Object.assign({}, e, {
                                            vehicles: e.vehicles.map((e) => e.value),
                                            abilities: e.abilities.map((e) => e.value),
                                        }),
                                    { equals: W },
                                ),
                                s = (0, ze.computedFn)((e) => He(a(), (t) => t.divisionID === e), { equals: W });
                            return Object.assign({}, t, {
                                computes: { getFrontName: n, getDivisionsCards: r, getDivisionDetailsById: s },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onBuyLevel: e.createCallback((e) => ({ divisionId: e }), 'onBuyLevel'),
                        }),
                    ),
                    Eu = du[0],
                    pu = du[1],
                    gu = (e, t) => {
                        let n = 'c_1366x768';
                        switch (e) {
                            case y.Medium:
                            case y.Large:
                                n = 'c_1920x1080';
                                break;
                            case y.ExtraLarge:
                                n = 'c_2560x1440';
                        }
                        return R.images.historical_battles.gui.maps.icons.backgrounds.mainBg.$dyn(n).$dyn(t);
                    },
                    bu = 'Header_subtitle_line_e8',
                    hu = R.strings.hb_lobby.hbMetaView.division,
                    fu = s().memo(({ frontName: e, isCentered: t = !0 }) =>
                        s().createElement(
                            'div',
                            { className: 'Header_base_2e' },
                            s().createElement(lr, {
                                text: hu.title(),
                                className: D()('Header_title_c7', t && 'Header_title__centered_c5'),
                            }),
                            s().createElement(
                                'div',
                                { className: 'Header_subtitle_29' },
                                t &&
                                    s().createElement('div', { className: D()(bu, 'Header_subtitle_line__rotate_ba') }),
                                s().createElement(lr, {
                                    text: R.strings.hb_lobby.front.name.capitalAll.$dyn(e),
                                    className: 'Header_subtitle_text_27',
                                }),
                                s().createElement('div', { className: bu }),
                            ),
                        ),
                    ),
                    vu = {
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
                    Au = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Cu = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Du = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Fu = (0, u.memo)(({ text: e, binding: t, classMix: n }) => {
                        const r = (0, u.useCallback)((e) => ({ color: `#${e}` }), []),
                            a = (0, u.useMemo)(() => t || {}, [t]);
                        let i = Au.exec(e),
                            o = e,
                            l = 0;
                        for (; i; ) {
                            const n = i[0],
                                u = Cu.exec(n),
                                c = Du.exec(n),
                                _ = i[1];
                            if (u && c) {
                                const e = u[0],
                                    i = e + l++ + e;
                                ((o = o.replace(n, `%(${i})`)),
                                    (a[i] = vu[e]
                                        ? s().createElement(
                                              'span',
                                              { className: vu[e] },
                                              s().createElement(Ot, { text: _, binding: t }),
                                          )
                                        : s().createElement(
                                              'span',
                                              { style: r(e) },
                                              s().createElement(Ot, { text: _, binding: t }),
                                          )));
                            }
                            i = Au.exec(e);
                        }
                        return s().createElement(Ot, { text: o, classMix: n, binding: a });
                    }),
                    Bu = R.strings.hb_lobby.hbMetaView.division,
                    yu = { contentId: R.views.historical_battles.lobby.tooltips.HbCoinTooltip('resId') },
                    wu = s().memo(() =>
                        s().createElement(
                            'div',
                            { className: 'Footer_base_7c' },
                            s().createElement(Fu, {
                                text: Bu.footer(),
                                binding: {
                                    icon: s().createElement(
                                        le,
                                        yu,
                                        s().createElement('div', { className: 'Footer_icon_8f' }),
                                    ),
                                },
                                classMix: 'Footer_footer_0c',
                            }),
                        ),
                    ),
                    Su = () => {
                        const e = (0, u.useState)(c.O.view.getScale()),
                            t = e[0],
                            n = e[1];
                        return (
                            (0, u.useEffect)(() => {
                                const e = () => {
                                    n(c.O.view.getScale());
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
                    Nu = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    xu = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    Tu = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    ku = (e) =>
                        Tu
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let n = xu.length - 1; n >= 0; n--)
                                      for (; e >= xu[n]; ) ((t += Nu[n]), (e -= xu[n]));
                                  return t;
                              })(e),
                    Mu = {
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
                let Lu;
                !(function (e) {
                    ((e.Tiny = 'tiny'),
                        (e.ExtraSmall = 'extraSmall'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.ExtraLarge = 'extraLarge'));
                })(Lu || (Lu = {}));
                const Pu = (0, u.memo)(({ level: e, size: t, isYellow: n, isLocked: r = !1, mixClass: a }) => {
                        const u = D()(Mu.base, n && Mu.base__yellow, Mu[`base__${t}`], a);
                        return s().createElement(
                            'div',
                            { className: u },
                            s().createElement('div', { className: Mu.bg }),
                            s().createElement('div', { className: Mu.border }),
                            s().createElement('div', { className: Mu.innerGlow }),
                            r && s().createElement('div', { className: Mu.lock }),
                            s().createElement(lr, { text: ku(e), className: Mu.text }),
                        );
                    }),
                    Ru = 'Button_background_lines_52',
                    Iu = s().memo(
                        ({ label: e, showArrow: t, animatedArrow: n, mixClass: r, onClick: a, onMouseEnter: i }) => {
                            const o = (0, u.useState)(!1),
                                l = o[0],
                                c = o[1],
                                _ = () => {
                                    c(!1);
                                },
                                m = D()('Button_base_a3', l && 'Button_base__pressed_83', r);
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
                                    onClick: a,
                                },
                                s().createElement('div', { className: D()(Ru, 'Button_background_lines__left_70') }),
                                s().createElement('div', { className: D()(Ru, 'Button_background_lines__right_b0') }),
                                t &&
                                    s().createElement('div', {
                                        className: D()('Button_arrow_98', n && 'Button_arrow_top__animated_8f'),
                                    }),
                                s().createElement('div', { className: 'Button_bg_53' }),
                                s().createElement('div', { className: 'Button_border_ab' }),
                                s().createElement('div', { className: 'Button_light_f9' }),
                                s().createElement(lr, { text: e, className: 'Button_label_27' }),
                            );
                        },
                    ),
                    Ou = {
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
                    Hu = R.images.historical_battles.gui.maps.icons.hangar.hbMetaView.division,
                    $u = R.strings.hb_lobby.hbMetaView.division;
                function Wu(e) {
                    return Hu.smoke.c_644x644.$dyn(e);
                }
                function Uu(e, t, n) {
                    return Hu.preview
                        .$dyn('division_' + e)
                        .$dyn('level_' + t)
                        .$dyn('c_644x644')
                        .$dyn(n);
                }
                const zu = s().memo(({ divisionID: e, level: t, frontName: n, state: r = Te.Default, onSelect: a }) => {
                        const i = (0, u.useState)(!1),
                            o = i[0],
                            l = i[1],
                            c = R.strings.hb_lobby
                                .$dyn('division_' + e)
                                .$dyn('name')
                                .toUpperCase(),
                            _ = $u.$dyn('division_' + e).$dyn('descr'),
                            m = t >= 3,
                            d = D()(Ou.level, m && Ou.level__max),
                            E = (0, u.useMemo)(
                                () => ({
                                    emblemImg: {
                                        backgroundImage: `url(${R.images.historical_battles.gui.maps.icons.division.c_294x294.$num(e)})`,
                                    },
                                    glowLeftImg: { backgroundImage: `url(${Hu.$dyn('glow_' + n)})` },
                                    selectedHeaderImg: { backgroundImage: `url(${Hu.selected.$dyn('header_' + n)})` },
                                    selectedGlowImg: { backgroundImage: `url(${Hu.selected.$dyn('glow_' + n)})` },
                                    frontImg: { backgroundImage: `url(${Uu(e, t, ke.Front)})` },
                                    backImg: { backgroundImage: `url(${Uu(e, t, ke.Back)})` },
                                    smokeImg: { backgroundImage: `url(${Wu(n)})` },
                                }),
                                [e, n, t],
                            ),
                            p = E.emblemImg,
                            g = E.glowLeftImg,
                            b = E.selectedHeaderImg,
                            h = E.selectedGlowImg,
                            f = E.frontImg,
                            v = E.backImg,
                            A = E.smokeImg,
                            C = D()(Ou.base, Ou[`base__${r}`], Ou[`base__${n}`], o && Ou.base__pressed);
                        return s().createElement(
                            'div',
                            {
                                className: C,
                                onClick: () => {
                                    a && r !== Te.Selected && a(e);
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
                                    r !== Te.Selected && ee(Se.HIGHLIGHT);
                                },
                            },
                            s().createElement('div', { className: Ou.bg }),
                            s().createElement(
                                'div',
                                { className: Ou.preview_container },
                                s().createElement(
                                    'div',
                                    { className: Ou.preview_anim },
                                    s().createElement('div', { className: Ou.preview_img, style: v }),
                                    s().createElement('div', { className: D()(Ou.preview_img, Ou.smoke), style: A }),
                                    s().createElement('div', { className: Ou.preview_img, style: f }),
                                ),
                            ),
                            s().createElement('div', { className: Ou.emblem, style: p }),
                            s().createElement('div', { className: Ou.glow_left, style: g }),
                            s().createElement('div', { className: Ou.glow_right }),
                            s().createElement('div', { className: Ou.separator_left }),
                            s().createElement('div', { className: Ou.separator_right }),
                            s().createElement(
                                'div',
                                { className: Ou.selected },
                                s().createElement('div', { className: Ou.selected_header, style: b }),
                                s().createElement('div', { className: Ou.selected_symbol }),
                                s().createElement('div', { className: Ou.selected_glow, style: h }),
                            ),
                            s().createElement(
                                'div',
                                { className: Ou.level_container },
                                s().createElement(
                                    'div',
                                    { className: d },
                                    s().createElement(Pu, { level: t, size: Lu.Large }),
                                ),
                                !m &&
                                    s().createElement(
                                        'div',
                                        { className: Ou.level_next },
                                        s().createElement('div', { className: Ou.arrow }),
                                        s().createElement(Pu, {
                                            level: t + 1,
                                            size: Lu.Small,
                                            isLocked: !0,
                                            mixClass: Ou.level_small,
                                        }),
                                    ),
                            ),
                            s().createElement(lr, { text: c, className: Ou.divisionName }),
                            s().createElement(lr, { text: _, className: Ou.description }),
                            s().createElement(Iu, { label: $u.button(), mixClass: Ou.button }),
                        );
                    }),
                    Gu = 'Content_lip_scroll_a4',
                    Vu = 'Content_arrow_scroll_49';
                function ju() {
                    return (
                        (ju =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        ju.apply(this, arguments)
                    );
                }
                const Xu = parseInt('261rem', 10),
                    qu = s().memo(({ divisions: e, frontName: t, selectedDivisionId: n, onDivisionSelect: r }) => {
                        const a = (0, u.useState)(!1),
                            i = a[0],
                            o = a[1],
                            l = (0, u.useState)(0),
                            c = l[0],
                            _ = l[1],
                            m = x().mediaSize,
                            d = 2 === Su(),
                            E = br();
                        ((0, u.useEffect)(() => {
                            _(i && n !== xe ? (n % 3 || 3) - 1 : 0);
                        }, [i, n]),
                            (0, u.useEffect)(() => {
                                if (Xu || Xu <= 0) return;
                                const e = c * Xu;
                                requestAnimationFrame(() => E.applyScroll(e));
                            }, [E, c]));
                        const p = (0, u.useCallback)(
                            (e) => {
                                r(e);
                            },
                            [r],
                        );
                        (0, u.useEffect)(() => {
                            m === y.ExtraSmall && n !== xe
                                ? m === y.ExtraSmall &&
                                  n !== xe &&
                                  Zt(() => {
                                      o(!0);
                                  }, Me)
                                : o(!1);
                        }, [m, n]);
                        const g = (0, u.useMemo)(
                            () =>
                                D()(
                                    'Content_base_d0',
                                    i && 'Content_base__needScroll_c0',
                                    c > 0 && 'Content_base__needLeftScroll_a8',
                                    c < 2 && 'Content_base__needRightScroll_dd',
                                ),
                            [i, c],
                        );
                        return s().createElement(
                            'div',
                            { className: g },
                            s().createElement('div', { className: D()(Gu, 'Content_lip_scroll__left_67') }),
                            s().createElement('div', {
                                className: D()(Vu, 'Content_arrow_scroll__left_04'),
                                onClick: () => {
                                    p(n - 1);
                                },
                            }),
                            s().createElement(
                                $r.Horizontal.Area.Default,
                                {
                                    api: E,
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
                                                className: D()('Content_card_66', d && 'Content_card__scaled_55'),
                                            },
                                            s().createElement(
                                                zu,
                                                ju({}, e, {
                                                    state:
                                                        ((r = e.divisionID),
                                                        (a = n),
                                                        a === xe ? Te.Default : r === a ? Te.Selected : Te.NotSelected),
                                                    frontName: t,
                                                    onSelect: p,
                                                }),
                                            ),
                                        );
                                        var r, a;
                                    }),
                                ),
                            ),
                            s().createElement('div', { className: D()(Gu, 'Content_lip_scroll__right_36') }),
                            s().createElement('div', {
                                className: D()(Vu, 'Content_arrow_scroll__right_5b'),
                                onClick: () => {
                                    p(n + 1);
                                },
                            }),
                        );
                    }),
                    Qu = 'Experience_experience_c9',
                    Yu = 'Experience_line_99',
                    Ku = { contentId: R.views.historical_battles.lobby.tooltips.HbCoinTooltip('resId') },
                    Zu = R.strings.hb_lobby.hbMetaView.division.details,
                    Ju = s().memo(({ currentExp: e, nextLevelExp: t, isMaxLevel: n = !1 }) =>
                        s().createElement(
                            'div',
                            { className: D()('Experience_base_05', n && 'Experience_base_maxLevel_d4') },
                            s().createElement('div', { className: D()(Yu, 'Experience_line__left_2d') }),
                            s().createElement(
                                'div',
                                null,
                                n
                                    ? s().createElement(Ot, {
                                          text: Zu.experience_max(),
                                          binding: {
                                              icon: s().createElement('div', { className: 'Experience_iconCheck_a0' }),
                                          },
                                          classMix: Qu,
                                      })
                                    : s().createElement(Fu, {
                                          text: Zu.experience(),
                                          binding: {
                                              exp: s().createElement(
                                                  'div',
                                                  { className: 'Experience_currentExp_1a' },
                                                  s().createElement(rt, { value: e }),
                                              ),
                                              toExp: s().createElement(rt, { value: t }),
                                              icon: s().createElement(
                                                  le,
                                                  Ku,
                                                  s().createElement('div', { className: 'Experience_iconExp_fe' }),
                                              ),
                                          },
                                          classMix: Qu,
                                      }),
                            ),
                            s().createElement('div', { className: D()(Yu, 'Experience_line__right_b3') }),
                        ),
                    ),
                    es = {
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
                    ts = s().memo(
                        ({
                            level: e,
                            exp: t,
                            color: n = Ne.Orange,
                            isLocked: r = !1,
                            isSelected: a = !1,
                            onLevelSelect: i,
                            onMouseEnter: o,
                        }) => {
                            const l = (0, u.useState)(!1),
                                c = l[0],
                                _ = l[1],
                                m = D()(es.base, es[`base__${n}`], a && es.base__selected, !a && c && es.base__hover);
                            return s().createElement(
                                'div',
                                { className: m },
                                s().createElement('div', { className: es.bg }),
                                s().createElement('div', { className: es.border }),
                                s().createElement('div', {
                                    className: es.hover,
                                    onMouseEnter: () => {
                                        a || (o && o(), _(!0));
                                    },
                                    onMouseLeave: () => {
                                        _(!1);
                                    },
                                    onClick: () => {
                                        i && !a && i(e);
                                    },
                                }),
                                r && s().createElement('div', { className: es.lock }),
                                s().createElement(lr, { text: ku(e), className: es.level }),
                                s().createElement(lr, { text: String(t), className: es.exp }),
                            );
                        },
                    ),
                    ns = {
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
                function rs(e, t) {
                    return e > t ? Ne.Orange : Ne.Green;
                }
                const as = Object.assign({}, hn, {
                        line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#f50' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_orange',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_orange',
                        },
                    }),
                    us = R.images.historical_battles.gui.maps.icons.hangar.hbMetaView.division.details,
                    ss = R.strings.hb_lobby.hbMetaView.division,
                    is = (e, t, n) => {
                        if (0 === e) return 0;
                        if (3 === e) return 100;
                        const r = e - 1,
                            a = n[e] - n[r];
                        return ((t - n[r]) / a) * 36 + 7 + 50 * r;
                    },
                    os = s().memo(
                        ({
                            frontName: e,
                            level: t,
                            selectedLevel: n,
                            currentExp: r,
                            levelsExp: a,
                            mixClass: i,
                            onLevelSelect: o,
                        }) => {
                            const l = (0, u.useMemo)(
                                    () =>
                                        ((e) => ({
                                            header: ss.details.level.tooltip.header(),
                                            body: ss.details.level.tooltip.body.$dyn(e),
                                        }))(e),
                                    [e],
                                ),
                                c = (0, u.useMemo)(
                                    () => ({ backgroundImage: `url(${us.$dyn(n <= t ? 'unlock_bg' : 'lock_bg')})` }),
                                    [n, t],
                                ),
                                _ = (0, u.useCallback)(
                                    (e) => {
                                        o && (te.playClick(), o(e));
                                    },
                                    [o],
                                ),
                                m = (0, u.useRef)({ update: () => {} }),
                                d = 3 === t,
                                E = D()(ns.base, i),
                                p = (0, u.useCallback)(() => {
                                    ee('highlight');
                                }, []);
                            return s().createElement(
                                'div',
                                { className: E },
                                s().createElement('div', { className: ns.lip }),
                                s().createElement('div', { className: ns.lockState, style: c }),
                                s().createElement(
                                    'div',
                                    { className: ns.levels },
                                    a.map((e, r) => {
                                        const a = r + 1,
                                            u = (function (e, t) {
                                                return e > t;
                                            })(a, t);
                                        return s().createElement(
                                            'div',
                                            { key: a },
                                            s().createElement(
                                                de,
                                                { isEnabled: u, header: l.header, body: l.body },
                                                s().createElement(
                                                    'div',
                                                    null,
                                                    s().createElement(ts, {
                                                        level: a,
                                                        exp: e,
                                                        color: rs(a, t),
                                                        isLocked: u,
                                                        isSelected: a === n,
                                                        onLevelSelect: _,
                                                        onMouseEnter: p,
                                                    }),
                                                ),
                                            ),
                                        );
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: da(ns, Mn.ChangeCompleted, 'progressWrapper') },
                                    s().createElement(ka, {
                                        animationSettings: Cn,
                                        value: is(t, r, a),
                                        maxValue: 100,
                                        api: m,
                                        theme: as,
                                    }),
                                ),
                                !d &&
                                    n > t &&
                                    s().createElement(
                                        'div',
                                        { className: ns.expNotEnough },
                                        s().createElement('div', { className: ns.expNotEnough_icon }),
                                        s().createElement(Ot, {
                                            text: ss.details.experience_not_enough(),
                                            binding: {
                                                level: n,
                                                exp: s().createElement(
                                                    'div',
                                                    { className: ns.expNotEnough_text_exp },
                                                    a[n - 1] - r,
                                                ),
                                            },
                                            classMix: ns.expNotEnough_text,
                                        }),
                                    ),
                            );
                        },
                    ),
                    ls = 'Vehicle_light_ef',
                    cs = s().memo(({ vehicle: e, frontName: t, isShortName: n }) => {
                        const r = {
                                backgroundImage: `url(${R.images.historical_battles.gui.maps.icons.hangar.hbMetaView.division.details.$dyn('vehicle_bg_' + t)})`,
                            },
                            a = (0, u.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.white.$dyn(xt(e.vehicleType))})`,
                                }),
                                [e.vehicleType],
                            ),
                            i = (0, u.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.shop.vehicles.c_180x135.$dyn(xt(e.icon))})`,
                                }),
                                [e.icon],
                            ),
                            o = n ? e.nameShort : e.name;
                        return s().createElement(
                            'div',
                            { className: 'Vehicle_base_8d' },
                            s().createElement('div', { className: 'Vehicle_bg_bc', style: r }),
                            s().createElement('div', { className: 'Vehicle_icon_84', style: i }),
                            s().createElement('div', { className: 'Vehicle_vehicleType_75', style: a }),
                            s().createElement('div', { className: 'Vehicle_name_55' }, o),
                            s().createElement('div', { className: D()(ls, 'Vehicle_light_top_91') }),
                            s().createElement('div', { className: D()(ls, 'Vehicle_light_bottom_d1') }),
                        );
                    }),
                    _s = s().memo(({ vehicles: e, frontName: t }) => {
                        const n = x().mediaSize < y.Medium;
                        return s().createElement(
                            'div',
                            { className: 'VehicleContainer_base_61' },
                            s().createElement(lr, {
                                text: R.strings.hb_lobby.hbMetaView.division.details.vehicles(),
                                className: 'VehicleContainer_title_aa',
                            }),
                            s().createElement(
                                'div',
                                { className: 'VehicleContainer_content_7c' },
                                e.map((e, r) =>
                                    s().createElement(
                                        'div',
                                        { key: r },
                                        s().createElement(
                                            et,
                                            { args: { vehicleCD: e.vehicleCD } },
                                            s().createElement(
                                                'div',
                                                null,
                                                s().createElement(cs, { vehicle: e, frontName: t, isShortName: n }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    ms = 'Ability_light_03',
                    ds = s().memo(({ ability: e, frontName: t }) => {
                        const n = {
                                backgroundImage: `url(${R.images.historical_battles.gui.maps.icons.hangar.hbMetaView.division.details.$dyn('ability_bg_' + t)})`,
                            },
                            r = { backgroundImage: `url(${e.icon})` };
                        return s().createElement(
                            'div',
                            { className: 'Ability_base_e4' },
                            s().createElement('div', { className: 'Ability_bg_dc', style: n }),
                            s().createElement('div', { className: 'Ability_icon_dc', style: r }),
                            s().createElement('div', { className: D()(ms, 'Ability_light_top_0f') }),
                            s().createElement('div', { className: D()(ms, 'Ability_light_bottom_b5') }),
                        );
                    }),
                    Es = R.strings.hb_artefacts,
                    ps = new Map(),
                    gs = (e, t) =>
                        ((e) => {
                            var t, n;
                            const r = ps.get(e);
                            if (r) return r;
                            const a = Es.$dyn(e),
                                u = {
                                    name: null != (t = null == a ? void 0 : a.$dyn('name')) ? t : '',
                                    descr: null != (n = null == a ? void 0 : a.$dyn('descr')) ? n : '',
                                };
                            return (ps.set(e, u), u);
                        })(t)[e],
                    bs = s().memo(({ abilities: e, frontName: t }) =>
                        s().createElement(
                            'div',
                            { className: 'AbilityContainer_base_4b' },
                            s().createElement(lr, {
                                text: R.strings.hb_lobby.hbMetaView.division.details.abilities(),
                                className: 'AbilityContainer_title_a1',
                            }),
                            s().createElement(
                                'div',
                                { className: 'AbilityContainer_content_62' },
                                e.map((e) => {
                                    const n = gs('name', e.name),
                                        r = gs('descr', e.name);
                                    return s().createElement(
                                        de,
                                        { key: `${e.name}-${e.icon}`, header: n, body: r },
                                        s().createElement(
                                            'div',
                                            null,
                                            s().createElement(ds, { ability: e, frontName: t }),
                                        ),
                                    );
                                }),
                            ),
                        ),
                    ),
                    hs = {
                        base: 'Details_base_e4',
                        bg: 'Details_bg_93',
                        base__low: 'Details_base__low_4a',
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
                    fs = R.images.historical_battles.gui.maps.icons,
                    vs = R.strings.hb_lobby.hbMetaView.division,
                    As = (e) =>
                        e === y.ExtraLarge
                            ? Le.C_400X400
                            : e === y.Large
                              ? Le.C_260X260
                              : e === y.Medium
                                ? Le.C_210X210
                                : Le.C_180X180,
                    Cs = s().memo(({ frontName: e, division: t, onBuyLevel: n, onClose: r }) => {
                        const a = x().mediaSize,
                            i = (0, u.useState)(t.level),
                            o = i[0],
                            l = i[1],
                            c = (0, u.useMemo)(() => {
                                var e, n;
                                return null != (e = null != (n = t.levels[o - 1]) ? n : t.levels[t.level - 1])
                                    ? e
                                    : t.levels[0];
                            }, [o, t.level, t.levels]),
                            _ = c.vehicles,
                            m = c.abilities,
                            d = 1 === viewEnv.getGraphicsQuality(),
                            E = 3 === t.level;
                        (0, u.useEffect)(() => {
                            l(t.level);
                        }, [t.divisionID, t.level]);
                        const p = (0, u.useMemo)(
                                () => ({
                                    backgroundImage: `url(${fs.hangar.hbMetaView.division.details.$dyn(o <= t.level ? 'unlock' : 'lock')})`,
                                }),
                                [o, t.level],
                            ),
                            g = (0, u.useMemo)(
                                () =>
                                    R.strings.hb_lobby
                                        .$dyn('division_' + t.divisionID)
                                        .$dyn('name')
                                        .toUpperCase(),
                                [t.divisionID],
                            ),
                            b = (0, u.useMemo)(
                                () => vs.$dyn('division_' + t.divisionID).$dyn('full_descr'),
                                [t.divisionID],
                            ),
                            h = (0, u.useMemo)(
                                () => ({ backgroundImage: `url(${fs.division.$dyn(As(a)).$num(t.divisionID)})` }),
                                [t.divisionID, a],
                            ),
                            f = (0, u.useCallback)((e) => {
                                l(e);
                            }, []),
                            v = (0, u.useCallback)(() => {
                                n(t.divisionID);
                            }, [t.divisionID, n]),
                            A = (0, u.useMemo)(
                                () => (E ? 0 : t.levels[Math.max(o - 1, t.level)].experience),
                                [o, t.level, t.levels, E],
                            ),
                            C = (0, u.useMemo)(() => t.levels.map((e) => e.experience), [t.levels]),
                            F = D()(hs.base, E && hs.base__maxLevel, d && hs.base__low),
                            B = (0, u.useCallback)(() => {
                                ee('highlight');
                            }, []);
                        return s().createElement(
                            'div',
                            { className: F },
                            s().createElement('div', { className: hs.bg }),
                            s().createElement('div', { className: hs.glow }),
                            s().createElement('div', { className: hs.shadow }),
                            s().createElement('div', { className: hs.lip }),
                            s().createElement('div', { className: hs.lockState, style: p }),
                            s().createElement(
                                'div',
                                { className: hs.buttonClose },
                                s().createElement(Xr, { onClose: r }),
                            ),
                            s().createElement('div', { className: hs.emblem, style: h }),
                            s().createElement(
                                'div',
                                { className: hs.title },
                                s().createElement(lr, { text: g, className: hs.divisionName }),
                                s().createElement(lr, { text: ku(o), className: hs.divisionLevel }),
                            ),
                            s().createElement(lr, { text: b, className: hs.description }),
                            s().createElement(
                                'div',
                                { className: hs.vehicles },
                                s().createElement(_s, { key: t.divisionID, vehicles: _, frontName: e }),
                            ),
                            s().createElement(
                                'div',
                                { className: hs.abilities },
                                s().createElement(bs, { abilities: m, frontName: e }),
                            ),
                            s().createElement(
                                'div',
                                { className: hs.footer },
                                s().createElement(Ju, { currentExp: t.experience, nextLevelExp: A, isMaxLevel: E }),
                                s().createElement(os, {
                                    frontName: e,
                                    level: t.level,
                                    selectedLevel: o,
                                    currentExp: t.experience,
                                    levelsExp: C,
                                    mixClass: hs.progress,
                                    onLevelSelect: f,
                                }),
                                !E &&
                                    s().createElement(
                                        'div',
                                        { className: hs.button },
                                        s().createElement(Iu, {
                                            label: vs.details.button(),
                                            onMouseEnter: B,
                                            onClick: v,
                                        }),
                                    ),
                            ),
                        );
                    }),
                    Ds = {
                        [y.ExtraSmall]: '28rem',
                        [y.Small]: '28rem',
                        [y.Medium]: '38rem',
                        [y.Large]: '54rem',
                        [y.ExtraLarge]: '72rem',
                    },
                    Fs = {
                        [y.ExtraSmall]: '70rem',
                        [y.Small]: '82rem',
                        [y.Medium]: '94rem',
                        [y.Large]: '94rem',
                        [y.ExtraLarge]: '158rem',
                    },
                    Bs = {
                        [y.ExtraSmall]: '-26rem',
                        [y.Small]: '-26rem',
                        [y.Medium]: '-22rem',
                        [y.Large]: '-30rem',
                        [y.ExtraLarge]: '-24rem',
                    },
                    ys = {
                        [y.ExtraSmall]: '6rem',
                        [y.Small]: '22rem',
                        [y.Medium]: '32rem',
                        [y.Large]: '26rem',
                        [y.ExtraLarge]: '40rem',
                    },
                    ws = '0rem';
                var Ss;
                !(function (e) {
                    ((e.Idle = 'idle'), (e.Animating = 'Animating'), (e.Mounted = 'Mounted'));
                })(Ss || (Ss = {}));
                const Ns = (0, Q.observer)(() => {
                        const e = pu(),
                            t = e.model,
                            n = e.controls,
                            r = t.computes,
                            a = x().mediaSize,
                            i = (0, u.useState)(xe),
                            o = i[0],
                            l = i[1],
                            c = (0, u.useState)(Ss.Idle),
                            _ = c[0],
                            m = c[1],
                            d = (0, u.useRef)(xe),
                            E = r.getFrontName(),
                            p = o !== xe,
                            g = (0, u.useMemo)(() => ({ backgroundImage: `url(${gu(a, E)})` }), [a, E]),
                            b = p ? o : d.current,
                            h = r.getDivisionsCards(),
                            f = b !== xe && _ !== Ss.Idle ? r.getDivisionDetailsById(b) : void 0,
                            v = (0, u.useMemo)(() => {
                                return (
                                    (e = p),
                                    (t = Ds[a]),
                                    (n = Fs[a]),
                                    (r = _ === Ss.Animating),
                                    e
                                        ? {
                                              from: { top: t, left: '50%', transform: 'translateX(-50%)' },
                                              to: { top: n, left: '0%', transform: 'translateX(0%)' },
                                              config: { duration: r ? Me : 0 },
                                          }
                                        : {
                                              from: { top: n, left: '0%', transform: 'translateX(0%)' },
                                              to: { top: t, left: '50%', transform: 'translateX(-50%)' },
                                              config: { duration: r ? Me : 0 },
                                          }
                                );
                                var e, t, n, r;
                            }, [p, a, _]),
                            A = (0, pe.useSpring)(v),
                            C = (0, u.useMemo)(
                                () =>
                                    ((e, t, n, r, a) => {
                                        const u = r ? '44rem' : ws,
                                            s = r ? '50rem' : ws;
                                        return e
                                            ? {
                                                  from: {
                                                      marginTop: t,
                                                      marginLeft: u,
                                                      left: '50%',
                                                      transform: 'translate(-50%, -50%)',
                                                  },
                                                  to: {
                                                      marginTop: n,
                                                      marginLeft: s,
                                                      left: '0%',
                                                      transform: 'translate(0%, -50%)',
                                                  },
                                                  config: { duration: a ? Me : 0 },
                                              }
                                            : {
                                                  from: {
                                                      marginTop: n,
                                                      marginLeft: s,
                                                      left: '0%',
                                                      transform: 'translate(0%, -50%)',
                                                  },
                                                  to: {
                                                      marginTop: t,
                                                      marginLeft: u,
                                                      left: '50%',
                                                      transform: 'translate(-50%, -50%)',
                                                  },
                                                  config: { duration: a ? Me : 0 },
                                              };
                                    })(p, Bs[a], ys[a], a === y.ExtraSmall, _ === Ss.Animating),
                                [p, a, _],
                            ),
                            F = (0, pe.useSpring)(C),
                            B = (0, u.useMemo)(
                                () =>
                                    ((e) =>
                                        e
                                            ? {
                                                  from: { transform: 'translateX(100%)' },
                                                  to: { transform: 'translateX(0%)' },
                                                  config: { duration: Me },
                                              }
                                            : {
                                                  from: { transform: 'translateX(0%)' },
                                                  to: { transform: 'translateX(100%)' },
                                                  config: { duration: Me },
                                              })(p),
                                [p],
                            ),
                            w = (0, pe.useSpring)(B),
                            S = (0, u.useCallback)((e) => {
                                (ee(Se.SHOW_DETAILS),
                                    l(e),
                                    (d.current = e),
                                    m(Ss.Animating),
                                    dispatchEvent(new Event(ye)));
                            }, []),
                            N = (0, u.useCallback)(
                                (e) => {
                                    (te.playClick(), n.onBuyLevel(e));
                                },
                                [n],
                            ),
                            T = (0, u.useCallback)(() => {
                                (m(Ss.Animating), dispatchEvent(new Event(we)));
                            }, []);
                        ((0, u.useEffect)(() => {
                            const e = () => {
                                (l(xe), m(Ss.Animating));
                            };
                            return (
                                addEventListener(we, e),
                                () => {
                                    removeEventListener(we, e);
                                }
                            );
                        }, []),
                            (0, u.useEffect)(() => {
                                if (_ === Ss.Animating) {
                                    const e = setTimeout(() => {
                                        m(p ? Ss.Mounted : Ss.Idle);
                                    }, Me);
                                    return () => clearTimeout(e);
                                }
                            }, [_, p]));
                        const k = D()('App_base_4a', p && 'App_base__divisionSelected_bf');
                        return s().createElement(
                            'div',
                            { className: k },
                            s().createElement('div', { className: 'App_bg_74', style: g }),
                            s().createElement('div', { className: 'App_vignette_d5' }),
                            s().createElement(
                                pe.animated.div,
                                { className: 'App_header_3d', style: A },
                                s().createElement(fu, { frontName: E, isCentered: !p }),
                            ),
                            s().createElement(
                                pe.animated.div,
                                { className: 'App_content_ba', style: F },
                                s().createElement(qu, {
                                    divisions: h,
                                    frontName: E,
                                    selectedDivisionId: o,
                                    onDivisionSelect: S,
                                }),
                            ),
                            s().createElement(
                                pe.animated.div,
                                { className: 'App_details_b3', style: w },
                                f && s().createElement(Cs, { frontName: E, division: f, onBuyLevel: N, onClose: T }),
                            ),
                            s().createElement('div', { className: 'App_footer_8a' }, s().createElement(wu, null)),
                        );
                    }),
                    xs = () =>
                        s().createElement(
                            Eu,
                            { options: { context: 'model.divisionModel' } },
                            s().createElement(Ns, null),
                        ),
                    Ts = V()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), bundles: e.array('bundles') },
                                n = (0, ze.computedFn)(() => t.root.get().frontName),
                                r = (0, ze.computedFn)(
                                    () =>
                                        Oe(t.bundles.get(), (e) =>
                                            Object.assign({}, e, {
                                                order: Object.assign({}, e.order),
                                                bonuses: Oe(e.bonuses, (e) => Object.assign({}, e)),
                                            }),
                                        ),
                                    { equals: W },
                                );
                            return Object.assign({}, t, { computes: { getFrontName: n, getBundles: r } });
                        },
                        ({ externalModel: e }) => ({
                            onBundleBuyClick: e.createCallback((e, t) => ({ idx: e, count: t }), 'onBundleBuyClick'),
                            onInfoClick: e.createCallbackNoArgs('onInfoClick'),
                        }),
                    ),
                    ks = Ts[0],
                    Ms = Ts[1];
                var Ls = n(9050),
                    Ps = n.n(Ls);
                let Rs, Is, Os;
                (!(function (e) {
                    ((e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding'));
                })(Rs || (Rs = {})),
                    (function (e) {
                        ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
                    })(Is || (Is = {})),
                    (function (e) {
                        ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
                    })(Os || (Os = {})));
                const Hs = { [Os.NBSP]: Rs.NoBreakSymbol, [Os.ZWNBSP]: Rs.NoBreakSymbol, [Os.NEW_LINE]: Rs.LineBreak },
                    $s = {
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
                    Ws = (e) => ({ color: `#${e}` }),
                    Us = ({ elementList: e, textBlock: t, key: n }) => {
                        const r = t.colorTag;
                        return r
                            ? $s[r]
                                ? s().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: $s[r] },
                                      e,
                                  )
                                : s().createElement('span', { key: n, 'data-block-type': t.blockType, style: Ws(r) }, e)
                            : s().createElement('span', { key: n, 'data-block-type': t.blockType }, e);
                    },
                    zs = {
                        [Rs.Word]: Us,
                        [Rs.NoBreakSymbol]: Us,
                        [Rs.Binding]: ({ elementList: e, textBlock: t, key: n }) =>
                            s().createElement(
                                'span',
                                { key: n, 'data-block-type': t.blockType },
                                e.map((e) => s().createElement(s().Fragment, { key: n }, e)),
                            ),
                        [Rs.LineBreak]: ({ key: e }) =>
                            s().createElement('span', {
                                key: e,
                                'data-block-type': Rs.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [Rs.NewLine]: ({ elementList: e, key: t }) =>
                            s().createElement(
                                'span',
                                { key: t, 'data-block-type': Rs.NewLine, className: 'renderers_newLine_bd' },
                                e,
                            ),
                        [Rs.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            s().createElement(
                                'span',
                                {
                                    key: t,
                                    'data-block-type': Rs.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                e,
                            ),
                    },
                    Gs = (e, t, n) => {
                        const r = [];
                        return (
                            e.childList.forEach((a, u) => {
                                const s = `${n}_${u}`;
                                if (((e) => void 0 !== e.childList)(a)) {
                                    const e = a,
                                        t = e.blockType,
                                        n = Gs(e, zs[t], s);
                                    r.push(...n);
                                } else r.push(t({ elementList: [a], textBlock: e, key: s }));
                            }),
                            r
                        );
                    },
                    Vs = (e, t, n, r) => {
                        let a = t.exec(e),
                            u = 0;
                        for (; a; ) (u !== a.index && n(e.slice(u, a.index)), r(a), (u = t.lastIndex), (a = t.exec(e)));
                        u !== e.length && n(e.slice(u));
                    },
                    js = (e) => {
                        const t = /[\s\u002d]/g;
                        let n = t.exec(e);
                        if (!n) return [e];
                        const r = [];
                        let a = 0;
                        for (; n; ) (r.push(e.slice(a, t.lastIndex)), (a = t.lastIndex), (n = t.exec(e)));
                        return (a !== e.length && r.push(e.slice(a)), r);
                    },
                    Xs = (e, t = '') => {
                        const n = [];
                        return (
                            Vs(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: Rs.Word, colorTag: t, childList: js(e) });
                                },
                                (e) => {
                                    const r = e[0],
                                        a = Hs[r.charAt(0)];
                                    a === Rs.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: Rs.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let n = 0; n < e.length - 1; n++)
                                                      t.push({
                                                          blockType: Rs.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(r),
                                          )
                                        : n.push({ blockType: a, colorTag: t, childList: [r] });
                                },
                            ),
                            n
                        );
                    },
                    qs = (e, t, n = '') => {
                        const r = [];
                        return (
                            Vs(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...Xs(e, n));
                                },
                                (e) => {
                                    const a = e[1],
                                        u = void 0 === t[a] ? e[0] : t[a];
                                    'string' == typeof u || 'number' == typeof u
                                        ? r.push(...Xs(String(u), n))
                                        : r.push({ blockType: Rs.Binding, colorTag: n, childList: [u] });
                                },
                            ),
                            r
                        );
                    },
                    Qs = (e, t) => {
                        if (!e) return [t];
                        const n = [],
                            r = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === Rs.NoBreakWrapper) (e.childList.push(r), n.push(e));
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            (e.childList.length > 0 && n.push(e),
                                n.push({ blockType: Rs.NoBreakWrapper, colorTag: '', childList: [t, r] }));
                        }
                        return (t.childList.length > 0 && n.push(t), n);
                    },
                    Ys = (e, t = {}) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const t = [];
                            let n = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Rs.NoBreakSymbol
                                        ? ((n = !0), t.push(...Qs(t.pop(), e)))
                                        : (n ? t.push(...Qs(t.pop(), e)) : t.push(e), (n = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t) => {
                                const n = [];
                                return (
                                    Vs(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            n.push(...qs(e, t));
                                        },
                                        (e) => {
                                            n.push(...qs(e[2], t, e[1]));
                                        },
                                    ),
                                    n
                                );
                            })(Tt(e).replace(/&zwnbsp;/g, '\ufeff'), t),
                        );
                        return ((e) => {
                            const t = [];
                            return (
                                e.forEach((e, n) => {
                                    t.push(
                                        ...((e, t) => {
                                            const n = [],
                                                r = e.blockType,
                                                a = zs[r],
                                                u = Gs(e, a, t);
                                            return (
                                                r === Rs.NoBreakWrapper
                                                    ? n.push(a({ elementList: u, textBlock: e, key: `${t}` }))
                                                    : n.push(...u),
                                                n
                                            );
                                        })(e, n),
                                    );
                                }),
                                t
                            );
                        })(n);
                    },
                    Ks = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    Zs = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    Js = (e, t, n) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const r = Zs(e, t),
                            a = e.textContent.length,
                            u = e.offsetWidth / a,
                            s = Math.ceil(r / u);
                        if (r > 0) {
                            const r = Math.floor((t - e.offsetLeft) / u);
                            return r >= n ? [!0, n + s] : [!1, r];
                        }
                        const i = Math.max(n + s, 0);
                        return a < i ? [!1, 0] : [!0, i];
                    },
                    ei = (e, t, n, r, a, u) => {
                        let i = -1,
                            o = null;
                        for (let l = n; l >= 0; l--) {
                            const n = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === Rs.LineBreak || c === Rs.NewLine || c === Rs.Binding) continue;
                            const _ = n.textContent || '';
                            if (!(n.childElementCount > 1)) {
                                const e = Js(n, r, a),
                                    c = e[0],
                                    m = e[1];
                                if (!c) {
                                    m > 0 && (a -= m);
                                    continue;
                                }
                                const d = _.slice(0, _.length - m) + u,
                                    E = t[l];
                                ((o = s().cloneElement(E, E.props, d)), (i = l));
                                break;
                            }
                            {
                                const e = n.children,
                                    c = t[l],
                                    m = c.props.children,
                                    d = ei(e, m, e.length - 1, r, a, u),
                                    E = d[0],
                                    p = d[1];
                                if (!(E < 0)) {
                                    const e = m.slice(0, E);
                                    ((o = s().cloneElement(c, c.props, e, p)), (i = l));
                                    break;
                                }
                                a -= _.length;
                            }
                        }
                        return [i, o];
                    },
                    ti = s().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: n,
                            binding: r,
                            isTooltipEnable: a = !1,
                            isTruncationAvailable: i = !1,
                            targetId: o,
                            justifyContent: l = Is.FlexStart,
                            alignContent: c = Is.FlexStart,
                            truncateIdentify: _ = '...',
                        }) => {
                            const m = (0, u.useRef)(null),
                                d = (0, u.useRef)({ height: 0, width: 0 }),
                                E = (0, u.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                p = E[0],
                                g = E[1],
                                b = (0, u.useMemo)(() => Ys(e, r), [r, e]),
                                h = (0, u.useMemo)(() => {
                                    if (a && p.isTruncated)
                                        return {
                                            args: { text: e, stringifyKwargs: r ? JSON.stringify(r) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: o,
                                        };
                                }, [r, a, o, e, p.isTruncated]),
                                f = (0, u.useCallback)(
                                    (e) => {
                                        ((d.current.width = e.contentRect.width),
                                            (d.current.height = e.contentRect.height));
                                        const t = ((e, t, n, r = '...') => {
                                                const a = [...t],
                                                    u = e.current;
                                                if (!u) return [a, !1];
                                                const s = n.height,
                                                    i = n.width,
                                                    o = u.lastElementChild;
                                                if (!Ks(o, s) && Zs(o, i) <= 0) return [a, !1];
                                                const l = u.children,
                                                    c = ((e, t) => {
                                                        let n = 0,
                                                            r = e.length - 1;
                                                        for (; r - n >= 0; ) {
                                                            const a = n + Math.ceil(0.5 * (r - n));
                                                            Ks(e[a], t) ? (r = a - 1) : (n = a + 1);
                                                        }
                                                        return n - 1;
                                                    })(l, s);
                                                if (c < 0) return [a, !1];
                                                const _ = ei(l, a, c, i, r.length, r),
                                                    m = _[0],
                                                    d = _[1];
                                                return (d && (a.splice(m, 1, d), a.splice(m + 1)), [a, !0]);
                                            })(m, b, d.current, _),
                                            r = t[0],
                                            a = t[1];
                                        (g({ elementList: r, isTruncated: a, isTruncateFinished: !0 }), n && n(a));
                                    },
                                    [n, _, b],
                                ),
                                v = (0, u.useMemo)(() => ({ justifyContent: l, alignContent: c }), [c, l]);
                            return (
                                ((e, t, n = !0) => {
                                    const r = (0, u.useCallback)(
                                        (e) => {
                                            const n = e[0];
                                            t && t(n);
                                        },
                                        [t],
                                    );
                                    (0, u.useEffect)(() => {
                                        if (!e.current || !n) return;
                                        const t = new (Ps())((e) => r(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [r, n, e]);
                                })(m, f, i),
                                s().createElement(
                                    'div',
                                    {
                                        className: D()(
                                            'ExtendedText_base_71',
                                            t,
                                            'ExtendedText_base__zeroPadding_25',
                                            i && 'ExtendedText_base__isTruncationAvailable_5b',
                                        ),
                                        style: v,
                                    },
                                    s().createElement('div', { className: 'ExtendedText_unTruncated_b8', ref: m }, b),
                                    s().createElement(
                                        nt,
                                        { tooltipArgs: h },
                                        s().createElement(
                                            'div',
                                            {
                                                className: D()(
                                                    'ExtendedText_truncated_97',
                                                    !p.isTruncateFinished && i && 'ExtendedText_truncated__hide_31',
                                                ),
                                                style: v,
                                            },
                                            p.isTruncateFinished && i ? p.elementList : b,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    ni = {
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
                let ri, ai;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(ri || (ri = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(ai || (ai = {})));
                const ui = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: r,
                    disabled: a,
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
                    const g = (0, u.useRef)(null),
                        b = (0, u.useState)(n),
                        h = b[0],
                        f = b[1],
                        v = (0, u.useState)(!1),
                        A = v[0],
                        C = v[1],
                        F = (0, u.useState)(!1),
                        B = F[0],
                        y = F[1],
                        w = (0, u.useCallback)(() => {
                            a || (g.current && (g.current.focus(), f(!0)));
                        }, [a]),
                        S = (0, u.useCallback)(
                            (e) => {
                                h && null !== g.current && !g.current.contains(e.target) && f(!1);
                            },
                            [h],
                        ),
                        N = (0, u.useCallback)(
                            (e) => {
                                a || (p && p(e));
                            },
                            [a, p],
                        ),
                        x = (0, u.useCallback)(
                            (e) => {
                                a || (null !== o && ee(o), c && c(e), y(!0));
                            },
                            [a, o, c],
                        ),
                        T = (0, u.useCallback)(
                            (e) => {
                                _ && _(e);
                            },
                            [_],
                        ),
                        k = (0, u.useCallback)(
                            (e) => {
                                a || (d && d(e), C(!1));
                            },
                            [a, d],
                        ),
                        M = (0, u.useCallback)(
                            (e) => {
                                a || (null !== l && ee(l), m && m(e), n && w(), C(!0));
                            },
                            [a, l, m, w, n],
                        ),
                        L = (0, u.useCallback)(
                            (e) => {
                                a || (E && E(e), C(!1));
                            },
                            [a, E],
                        ),
                        P = D()(
                            ni.base,
                            ni[`base__${r}`],
                            {
                                [ni.base__disabled]: a,
                                [ni[`base__${t}`]]: t,
                                [ni.base__focus]: h,
                                [ni.base__highlightActive]: A,
                                [ni.base__firstHover]: B,
                            },
                            i,
                        ),
                        I = D()(ni.state, ni.state__default);
                    return (
                        (0, u.useEffect)(
                            () => (
                                document.addEventListener('mousedown', S),
                                () => {
                                    document.removeEventListener('mousedown', S);
                                }
                            ),
                            [S],
                        ),
                        (0, u.useEffect)(() => {
                            f(n);
                        }, [n]),
                        s().createElement(
                            'div',
                            {
                                ref: g,
                                className: P,
                                onMouseEnter: x,
                                onMouseMove: T,
                                onMouseUp: k,
                                onMouseDown: M,
                                onMouseLeave: L,
                                onClick: N,
                            },
                            r !== ri.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: ni.back }),
                                    s().createElement('span', { className: ni.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: I },
                                s().createElement('span', { className: ni.stateDisabled }),
                                s().createElement('span', { className: ni.stateHighlightHover }),
                                s().createElement('span', { className: ni.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: ni.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ui.defaultProps = { type: ri.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const si = (0, u.memo)(ui);
                let ii, oi, li;
                var ci;
                (!(function (e) {
                    ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(ii || (ii = {})),
                    ((ci = oi || (oi = {})).credits = 'credits'),
                    (ci.gold = 'gold'),
                    (ci.crystal = 'crystal'),
                    (ci.xp = 'xp'),
                    (ci.freeXP = 'freeXP'),
                    (ci.equipCoin = 'equipCoin'),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(li || (li = {})));
                const _i = {
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
                    mi = ({
                        isDiscount: e,
                        isInteractiveDiscount: t,
                        size: n,
                        type: r,
                        isEnough: a,
                        value: u,
                        discountValue: i,
                        showPlus: o,
                        stockBackgroundName: l = li.Red,
                    }) => {
                        const c = D()(_i.value, _i[`value__${r}`], !a && _i.value__notEnough),
                            _ = D()(_i.icon, _i[`icon__${r}-${n}`]),
                            m = D()(_i.stock, i && _i.stock__indent, t && _i.stock__interactive),
                            d = o && u > 0 && '+',
                            E = D()(_i.base, _i[`base__${n}`]);
                        return s().createElement(
                            'span',
                            { className: E },
                            s().createElement(
                                'span',
                                { className: c },
                                d,
                                s().createElement(rt, { value: u, format: r === oi.gold ? 'gold' : 'integral' }),
                            ),
                            s().createElement('span', { className: _ }),
                            e &&
                                s().createElement(
                                    'span',
                                    { className: m },
                                    s().createElement('span', {
                                        className: _i.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${l})` },
                                    }),
                                    Boolean(i) && i,
                                ),
                        );
                    };
                mi.defaultProps = { isEnough: !0 };
                const di = s().memo(mi);
                let Ei;
                var pi;
                (((pi = Ei || (Ei = {})).backport = 'backport'),
                    (pi.unbound = 'unbound'),
                    (pi.normal = 'normal'),
                    (pi.absent = 'absent'));
                const gi = 'TOOLTIP_NOT_ENOUGH_MONEY',
                    bi = R.images.gui.maps.icons.quests.bonuses,
                    hi = (0, u.memo)(({ classMix: e, iconName: t, amount: n, tooltip: r }) => {
                        const a = x().mediaSize,
                            i = (0, u.useMemo)(
                                () => ({
                                    backgroundImage: `url(${(a === y.ExtraLarge ? bi.s180x135 : bi.big).$dyn(t)})`,
                                }),
                                [a, t],
                            ),
                            o = (0, u.useMemo)(
                                () =>
                                    ((e, t) =>
                                        ((e, t) => ({
                                            isEnabled: e !== Ei.absent,
                                            args: t,
                                            contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                            decoratorId:
                                                e === Ei.unbound
                                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow(
                                                          'resId',
                                                      )
                                                    : void 0,
                                            ignoreShowDelay: e === Ei.backport,
                                            ignoreMouseClick: !0,
                                        }))(e.type, Object.assign({ id: e.id }, { tooltipID: 'TOOLTIP_BONUS' } || {})))(
                                        r,
                                    ),
                                [r],
                            ),
                            l = D()('BundleBonus_base_c2', e),
                            c = (0, u.useMemo)(() => Nt(R.strings.hb_shop.common.pieces(), { number: n }), [n]),
                            _ = n > 1;
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
                let fi;
                !(function (e) {
                    ((e.Newbie = 'newbie'), (e.Specialist = 'specialist'), (e.Meister = 'meister'));
                })(fi || (fi = {}));
                const vi = fi.Newbie,
                    Ai =
                        (fi.Specialist,
                        fi.Meister,
                        {
                            base: 'AdvancedBundleContent_base_6e',
                            icon: 'AdvancedBundleContent_icon_89',
                            icon__x5: 'AdvancedBundleContent_icon__x5_9f',
                            icon__x3: 'AdvancedBundleContent_icon__x3_93',
                            icon__x2: 'AdvancedBundleContent_icon__x2_b8',
                            shining: 'AdvancedBundleContent_shining_d8',
                            separator: 'AdvancedBundleContent_separator_7e',
                            plus: 'AdvancedBundleContent_plus_93',
                            button: 'AdvancedBundleContent_button_6d',
                            bonuses: 'AdvancedBundleContent_bonuses_c3',
                            bonus: 'AdvancedBundleContent_bonus_c7',
                            amount: 'AdvancedBundleContent_amount_60',
                            costBlock: 'AdvancedBundleContent_costBlock_83',
                            currency: 'AdvancedBundleContent_currency_e1',
                        });
                function Ci() {
                    return (
                        (Ci =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Ci.apply(this, arguments)
                    );
                }
                const Di = {
                        contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                        ignoreShowDelay: !0,
                        ignoreMouseClick: !0,
                    },
                    Fi = (0, u.memo)(
                        ({ id: e, currency: t, price: n, order: r, bonuses: a, onBuyClicked: i, currencyType: o }) => {
                            const l = x().mediaSize === y.ExtraLarge ? ii.big : ii.small,
                                c = (0, u.useCallback)(() => {
                                    i(1);
                                }, [i]),
                                _ = Nt(R.strings.hb_shop.common.pieces(), { number: r.count }),
                                m = D()(Ai.icon, Ai[`icon__${r.type}`]),
                                d = n <= t,
                                E = (0, u.useMemo)(
                                    () =>
                                        Object.assign({}, Di, {
                                            isEnabled: !d,
                                            args: { bundleID: e, currency: o, value: n - t, tooltipID: gi },
                                        }),
                                    [d, n, e, o, t],
                                ),
                                p = (0, u.useMemo)(
                                    () => ({
                                        contentId: R.views.historical_battles.lobby.tooltips.OrderTooltip('resId'),
                                        args: { orderType: r.type, showStatus: !0 },
                                    }),
                                    [r.type],
                                );
                            return s().createElement(
                                'div',
                                { className: Ai.base },
                                s().createElement(
                                    'div',
                                    { className: Ai.bonuses },
                                    a.map((e) => s().createElement(hi, Ci({ key: e.iconName, classMix: Ai.bonus }, e))),
                                ),
                                s().createElement(le, p, s().createElement('div', { className: m })),
                                s().createElement('div', { className: Ai.separator }),
                                s().createElement('div', { className: Ai.plus }),
                                s().createElement('div', { className: Ai.amount }, _),
                                s().createElement(
                                    'div',
                                    { className: Ai.costBlock },
                                    s().createElement(
                                        'div',
                                        { className: Ai.currency },
                                        s().createElement(di, { size: l, type: o, value: n, isEnough: d }),
                                    ),
                                ),
                                s().createElement(
                                    le,
                                    E,
                                    s().createElement(
                                        'div',
                                        { className: Ai.button },
                                        s().createElement(
                                            si,
                                            { size: ai.medium, type: ri.primary, disabled: !d, onClick: c },
                                            R.strings.hb_shop.common.button.buy(),
                                        ),
                                    ),
                                ),
                            );
                        },
                    );
                let Bi;
                (n(3368),
                    (function (e) {
                        ((e[(e.ZERO = 48)] = 'ZERO'),
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
                            (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9'));
                    })(Bi || (Bi = {})));
                const yi = {
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
                class wi extends s().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.timer = null),
                            (this.validationTimer = null),
                            (this.numericalStepper = (0, u.createRef)()),
                            (this.input = (0, u.createRef)()),
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
                                (this.state.isFocused &&
                                    (this.setFocusOnInput(),
                                    setTimeout(() => {
                                        const e = this.formattedValue.length;
                                        this.input.current && this.input.current.setSelectionRange(e, e);
                                    }, 0)),
                                    document.addEventListener('click', this.handleClickOutside),
                                    document.addEventListener('mouseup', this.handleMouseUp));
                            }),
                            (this.componentWillUnmount = () => {
                                (this.stop(),
                                    document.removeEventListener('click', this.handleClickOutside),
                                    document.removeEventListener('mouseup', this.handleMouseUp));
                            }),
                            (this.formatValue = (e) =>
                                this.props.currencyType ? K.Z5.getNumberFormat(e, K.B3.GOLD) : e.toString()),
                            (this.getValidValue = (e) => {
                                const t = Math.min(this.props.maximum, Math.max(this.props.minimum, e)),
                                    n = this.props.stepSize;
                                return Math.round(t / n) * n;
                            }),
                            (this.changeValue = (e) => {
                                e !== this.state.value && (this.setState({ value: e }), this.props.onChange(e));
                            }),
                            (this.setCursorPosition = (e, t) => {
                                (this.input.current && this.input.current.setSelectionRange(e, t),
                                    setTimeout(() => {
                                        this.input.current && this.input.current.setSelectionRange(e, t);
                                    }));
                            }),
                            (this.handleChange = () => {
                                this.props.isDisabled || this.updateInput();
                            }),
                            (this.updateInput = (e = 0) => {
                                const t = e === Y.n.BACKSPACE,
                                    n = e === Y.n.DELETE,
                                    r = this.input.current,
                                    a = r.selectionStart || 0,
                                    u = r.selectionEnd || 0;
                                let s = r.value;
                                const i = Math.max(a, u),
                                    o = i;
                                (n && (s = s.substring(0, i) + s.substring(i + 1, s.length)),
                                    t && 1 === a && 1 === s.length && (s = '0'));
                                const l = Number(s.trim().replace(/\D/g, '')),
                                    c = Number.isSafeInteger(l) ? l : Number.MAX_SAFE_INTEGER,
                                    _ = this.props.currencyType ? K.Z5.getNumberFormat(c, K.B3.GOLD) : c.toString(),
                                    m = !isNaN(Number(s.replace(' ', '')));
                                r.value = _;
                                const d = new RegExp(/\d/g);
                                let E = 0;
                                for (let e = 0; e < o; e++) {
                                    const t = s[e] || '',
                                        n = _[E] || '';
                                    if (t.match(d) || t === n) {
                                        for (; t !== _[E] && E < _.length; ) E++;
                                        E++;
                                    }
                                }
                                ('' === s ? (E = 1) : m || (E = s.length),
                                    this.input.current && this.input.current.setSelectionRange(0, 0),
                                    this.setCursorPosition(E, E),
                                    this.changeValue(c),
                                    this.validationTimer && clearTimeout(this.validationTimer),
                                    (this.validationTimer = setTimeout(() => {
                                        this.getValidValue(c) !== c &&
                                            this.state.isFocused &&
                                            (this.changeValue(this.getValidValue(c)),
                                            this.setCursorPosition(0, this.formatValue(c).length));
                                    }, 1e3)));
                            }),
                            (this.handleDelete = (e) => {
                                const t = e.keyCode === Y.n.BACKSPACE,
                                    n = e.keyCode === Y.n.DELETE,
                                    r = e.target,
                                    a = r.selectionStart,
                                    u = r.selectionEnd,
                                    s = r.value,
                                    i = a !== u,
                                    o = new RegExp(/\D/),
                                    l = t && a ? a - 1 : a || 0;
                                if (i) return;
                                let c = l;
                                const _ = o.test(s[l]);
                                if (n && _) for (; o.test(s[c]) && c < s.length; ) c++;
                                if (t && _) for (; o.test(s[c]) && c > 0; ) c--;
                                if (c !== l || (t && _))
                                    return (e.preventDefault(), (c = c < 0 ? 0 : c), void this.setCursorPosition(c, c));
                                ((t && 1 === a && 1 === s.length) || n) &&
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
                                (this.stop(), this.setState({ activeIncrement: !1, activeDecrement: !1 }));
                            }),
                            (this.handleMouseLeave = () => {
                                this.stop();
                            }),
                            (this.incrementHandleMouseEnter = (e) => {
                                (this.state.activeIncrement && this.incrementHandleMouseDown(e, !0),
                                    this.buttonIncrementIsDisabled || this.playHoverSound());
                            }),
                            (this.decrementHandleMouseEnter = (e) => {
                                (this.state.activeDecrement && this.decrementHandleMouseDown(e, !0),
                                    this.buttonDecrementIsDisabled || this.playHoverSound());
                            }),
                            (this.handleKeyDown = (e) => {
                                if (!this.props.isDisabled) {
                                    switch (
                                        (e.keyCode in Y.n &&
                                            e.keyCode !== Y.n.BACKSPACE &&
                                            e.keyCode !== Y.n.DELETE &&
                                            e.preventDefault(),
                                        e.keyCode)
                                    ) {
                                        case Y.n.ARROW_UP:
                                        case Y.n.NUM_PLUS:
                                        case Y.n.PLUS:
                                            (this.state.activeIncrement || this.setState({ activeIncrement: !0 }),
                                                this.increment());
                                            break;
                                        case Y.n.ARROW_DOWN:
                                        case Y.n.NUM_MINUS:
                                        case Y.n.MINUS:
                                            (this.state.activeDecrement || this.setState({ activeDecrement: !0 }),
                                                this.decrement());
                                            break;
                                        case Y.n.HOME:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case Y.n.END:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case Y.n.ENTER:
                                            if (
                                                (e.nativeEvent.stopImmediatePropagation(),
                                                this.state.value >= this.props.maximum)
                                            ) {
                                                const e = this.formatValue(this.props.maximum).length;
                                                (this.changeValue(this.props.maximum), this.setCursorPosition(0, e));
                                            }
                                            break;
                                        case Y.n.PAGE_UP:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case Y.n.PAGE_DOWN:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case Y.n.BACKSPACE:
                                        case Y.n.DELETE:
                                            this.handleDelete(e);
                                    }
                                    this.props.onKeyDown(e);
                                }
                            }),
                            (this.handleKeyUp = (e) => {
                                if (!this.props.isDisabled)
                                    switch (e.keyCode) {
                                        case Y.n.ARROW_UP:
                                        case Y.n.NUM_PLUS:
                                        case Y.n.PLUS:
                                            this.setState({ activeIncrement: !1 });
                                            break;
                                        case Y.n.ARROW_DOWN:
                                        case Y.n.NUM_MINUS:
                                        case Y.n.MINUS:
                                            this.setState({ activeDecrement: !1 });
                                    }
                            }),
                            (this.allowOnlyNumbers = (e) => {
                                e.which in Bi || e.preventDefault();
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
                                (this.timer && clearTimeout(this.timer), (this.timer = null));
                            }));
                    }
                    componentDidUpdate(e, t) {
                        const n = this.state,
                            r = n.value,
                            a = n.isFocused;
                        if (r !== t.value && a) {
                            const e = this.formattedValue.length,
                                t = this.input.current && this.input.current.selectionStart,
                                n = this.input.current && this.input.current.selectionEnd,
                                r = t === n ? e : t || 0;
                            0 === t && n === e
                                ? this.input.current && this.input.current.setSelectionRange(e, e)
                                : this.input.current && this.input.current.setSelectionRange(r, e);
                        }
                    }
                    componentWillReceiveProps({ value: e, isFocused: t }) {
                        (e !== this.props.value && this.setState({ value: e }),
                            t !== this.props.isFocused &&
                                (this.setState({ isFocused: t }),
                                t
                                    ? (this.setFocusOnInput(), this.setCursorPosition(0, this.formattedValue.length))
                                    : this.blurInput()));
                    }
                    get formattedValue() {
                        return this.props.currencyType
                            ? K.Z5.getNumberFormat(this.state.value, K.B3.GOLD)
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
                            n = e.size,
                            r = e.currencyType,
                            a = D()(
                                yi.base,
                                yi[`base__${n}`],
                                r && yi[`base__withCurrency-${n}`],
                                t && yi.base__isDisabled,
                                this.state.isFocused && yi.base__isFocus,
                            ),
                            u = D()(
                                yi.buttonIncrement,
                                yi[`buttonIncrement__${n}`],
                                this.buttonIncrementIsDisabled && yi.buttonIncrement__isDisabled,
                                this.state.activeIncrement &&
                                    !this.buttonIncrementIsDisabled &&
                                    yi[`buttonIncrement__isActive-${this.props.size}`],
                            ),
                            i = D()(
                                yi.buttonDecrement,
                                yi[`buttonDecrement__${n}`],
                                this.buttonDecrementIsDisabled && yi.buttonDecrement__isDisabled,
                                this.state.activeDecrement &&
                                    !this.buttonDecrementIsDisabled &&
                                    yi[`buttonDecrement__isActive-${this.props.size}`],
                            ),
                            o = D()(
                                yi.input,
                                t && yi.input__disabled,
                                r && yi.input__withCurrency,
                                r && yi[`input__${r}-${n}`],
                                r && yi[`input__${r}`],
                                r && t && yi[`input__${r}-disabled`],
                            ),
                            l = D()(yi.currencyIcon, r && yi[`currencyIcon__${r}-${n}`]),
                            c = D()(yi.currency, r && yi[`currency__${r}`], r && yi[`currency__${r}-${n}`]);
                        return s().createElement(
                            'div',
                            {
                                className: a,
                                ref: this.numericalStepper,
                                style: ((_ = this.props.width), _ ? { width: `${_}rem` } : {}),
                            },
                            s().createElement(
                                'div',
                                { className: yi.inputContainer },
                                r &&
                                    s().createElement(
                                        'div',
                                        { className: c },
                                        s().createElement('span', { className: yi.dummyValue }, this.formattedValue),
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
                                { className: yi.control },
                                s().createElement('div', {
                                    className: u,
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
                wi.defaultProps = {
                    value: 1,
                    stepSize: 1,
                    minimum: 0,
                    maximum: 0,
                    size: 'medium',
                    isFocused: !0,
                    isDisabled: !1,
                    onChange: () => null,
                    onKeyDown: () => null,
                };
                const Si = {
                        base: 'NewbieBundleContent_base_17',
                        icon: 'NewbieBundleContent_icon_3b',
                        icon__x5: 'NewbieBundleContent_icon__x5_1b',
                        icon__x3: 'NewbieBundleContent_icon__x3_17',
                        icon__x2: 'NewbieBundleContent_icon__x2_81',
                        shining: 'NewbieBundleContent_shining_07',
                        button: 'NewbieBundleContent_button_7e',
                        costBlock: 'NewbieBundleContent_costBlock_f7',
                        numericStepper: 'NewbieBundleContent_numericStepper_0a',
                        currency: 'NewbieBundleContent_currency_cb',
                    },
                    Ni = (0, u.memo)(({ currency: e, price: t, order: n, onBuyClicked: r, currencyType: a }) => {
                        const i = x().mediaSize === y.ExtraLarge,
                            o = i ? ii.big : ii.small,
                            l = i ? 'medium' : 'small',
                            c = i ? 84 : 60,
                            _ = (0, u.useState)(1),
                            m = _[0],
                            d = _[1],
                            E = (0, u.useCallback)(() => {
                                r(m);
                            }, [r, m]),
                            p = (0, u.useCallback)(
                                (e) => {
                                    e > 0 && e <= 10 && d(e);
                                },
                                [d],
                            ),
                            g = m * t,
                            b = g - e <= 0,
                            h = !b,
                            f = (0, u.useMemo)(() => Math.min(10, Math.max(1, Math.floor(e / t))), [e, t]),
                            v = (0, u.useMemo)(() => f <= 0 || 0 === m, [f, m]),
                            A = (0, u.useMemo)(
                                () => ({
                                    isEnabled: h,
                                    args: { currency: oi.credits, value: g - e, tooltipID: gi },
                                    contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                    ignoreShowDelay: !0,
                                    ignoreMouseClick: !0,
                                }),
                                [h, g, e],
                            ),
                            C = (0, u.useMemo)(
                                () => ({
                                    contentId: R.views.historical_battles.lobby.tooltips.OrderTooltip('resId'),
                                    args: { orderType: n.type, showStatus: !0 },
                                }),
                                [n],
                            ),
                            F = D()(Si.icon, Si[`icon__${n.type}`]);
                        return s().createElement(
                            'div',
                            { className: Si.base },
                            s().createElement(le, C, s().createElement('div', { className: F })),
                            s().createElement(
                                'div',
                                { className: Si.costBlock },
                                s().createElement(
                                    'div',
                                    { className: Si.numericStepper },
                                    s().createElement(wi, {
                                        width: c,
                                        size: l,
                                        minimum: 1,
                                        maximum: f,
                                        isFocused: !1,
                                        onChange: p,
                                        isDisabled: v,
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Si.currency },
                                    s().createElement(di, { size: o, type: a, value: g, isEnough: b }),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: Si.button },
                                s().createElement(
                                    le,
                                    A,
                                    s().createElement(
                                        'div',
                                        null,
                                        s().createElement(
                                            si,
                                            { size: ai.medium, type: ri.primary, disabled: h, onClick: E },
                                            R.strings.hb_shop.common.button.buy(),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    xi = ['idx', 'currency', 'onBuyClicked'];
                function Ti() {
                    return (
                        (Ti =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Ti.apply(this, arguments)
                    );
                }
                const ki = (0, u.memo)((e) => {
                        let t = e.idx,
                            n = e.currency,
                            r = e.onBuyClicked,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((n = u[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                return a;
                            })(e, xi);
                        const i = a.title,
                            o = a.layout,
                            l = a.buyCount,
                            c = (0, u.useMemo)(
                                () => ({
                                    value: s().createElement(lr, { className: 'Bundle_buyCount_83', text: String(l) }),
                                }),
                                [l],
                            ),
                            _ = l > 0,
                            m = o === vi,
                            d = o !== vi,
                            E = (0, u.useCallback)(
                                (e = 1) => {
                                    r(t, e);
                                },
                                [t, r],
                            );
                        return s().createElement(
                            'div',
                            { className: 'Bundle_base_00' },
                            s().createElement(lr, { className: 'Bundle_title_aa', text: i }),
                            m && s().createElement(Ni, Ti({ currency: n, onBuyClicked: E }, a)),
                            d && s().createElement(Fi, Ti({ currency: n, onBuyClicked: E }, a)),
                            _ &&
                                s().createElement(lr, {
                                    text: R.strings.hb_shop.boosters_shop.bundle.buyCount(),
                                    format: { binding: c },
                                    className: 'Bundle_footer_e8',
                                }),
                        );
                    }),
                    Mi = {
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
                function Li() {
                    return (
                        (Li =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Li.apply(this, arguments)
                    );
                }
                const Pi = R.strings.hb_shop.boosters_shop,
                    Ri = { contentId: R.views.historical_battles.lobby.tooltips.HbCoinTooltip('resId') },
                    Ii = (0, Q.observer)(() => {
                        const e = Ms(),
                            t = e.model,
                            n = e.controls,
                            r = t.root.get(),
                            a = r.gold,
                            i = r.credits,
                            o = t.computes,
                            l = o.getBundles(),
                            c = 2 === Su(),
                            _ = x().mediaSize,
                            m = D()(Mi.base, c && Mi.base__scaled),
                            d = o.getFrontName(),
                            E = (0, u.useMemo)(() => ({ backgroundImage: `url(${gu(_, d)})` }), [_, d]),
                            p = (0, u.useCallback)(
                                (e, t) => {
                                    n.onBundleBuyClick(e, t);
                                },
                                [n],
                            );
                        return s().createElement(
                            'div',
                            { className: m },
                            s().createElement('div', { className: Mi.bg, style: E }),
                            s().createElement('div', { className: Mi.vignette }),
                            s().createElement(
                                'div',
                                { className: Mi.content },
                                s().createElement(
                                    'div',
                                    { className: Mi.header },
                                    s().createElement(
                                        'div',
                                        { className: Mi.title },
                                        s().createElement(lr, { text: Pi.title() }),
                                        s().createElement(
                                            si,
                                            {
                                                type: 'ghost',
                                                size: 'medium',
                                                onClick: n.onInfoClick,
                                                mixClass: Mi.info_button,
                                            },
                                            s().createElement('div', { className: Mi.title_icon }),
                                        ),
                                    ),
                                    s().createElement(lr, { className: Mi.subTitle, text: Pi.subtitle() }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Mi.list },
                                    l.map((e, t) => {
                                        const n = e.currencyType === oi.credits ? i : a;
                                        return s().createElement(
                                            'div',
                                            { key: t, className: Mi.bundle },
                                            s().createElement(ki, Li({ idx: t, currency: n, onBuyClicked: p }, e)),
                                        );
                                    }),
                                ),
                                s().createElement(ti, {
                                    text: Pi.footer(),
                                    binding: {
                                        icon: s().createElement(
                                            le,
                                            Ri,
                                            s().createElement('div', { className: Mi.footer_icon }),
                                        ),
                                    },
                                    classMix: Mi.footer,
                                    justifyContent: Is.Center,
                                }),
                            ),
                        );
                    }),
                    Oi = () =>
                        s().createElement(
                            ks,
                            { options: { context: 'model.orderModel' } },
                            s().createElement(Ii, null),
                        ),
                    Hi = V()(({ observableModel: e }) => {
                        const t = { root: e.object(), quests: e.array('quests') },
                            n = (0, ze.computedFn)(() => t.root.get().frontName),
                            r = (0, ze.computedFn)(() => We(t.quests.get()), { equals: W }),
                            a = (0, ze.computedFn)(() => (n() === Be.Offence ? t.root.get().finalQuest : null));
                        return Object.assign({}, t, { computes: { getFrontName: n, getQuests: r, getFinalQuest: a } });
                    }, $),
                    $i = Hi[0],
                    Wi = Hi[1],
                    Ui = 'Header_subtitle_line_46',
                    zi = R.strings.hb_lobby.hbMetaView.quests,
                    Gi = s().memo(({ frontName: e }) =>
                        s().createElement(
                            'div',
                            { className: 'Header_base_03' },
                            s().createElement(lr, { text: zi.title(), className: 'Header_title_7f' }),
                            s().createElement(
                                'div',
                                { className: 'Header_subtitle_32' },
                                s().createElement('div', { className: D()(Ui, 'Header_subtitle_line__rotate_fd') }),
                                s().createElement(lr, {
                                    text: R.strings.hb_lobby.front.name.capitalAll.$dyn(e),
                                    className: 'Header_subtitle_text_5e',
                                }),
                                s().createElement('div', { className: Ui }),
                            ),
                        ),
                    ),
                    Vi = R.strings.hb_lobby.hbMetaView.progress,
                    ji = (0, u.memo)(({ progressCount: e, progressTotal: t }) => {
                        const n = e >= t;
                        return s().createElement(
                            'div',
                            { className: D()('QuestProgress_base_d6', n && 'QuestProgress_base__completed_5c') },
                            s().createElement(
                                'div',
                                { className: 'QuestProgress_content_94' },
                                s().createElement(lr, {
                                    className: 'QuestProgress_progressText_f1',
                                    text: Vi.delimiter(),
                                    format: {
                                        binding: {
                                            progressCount: s().createElement(rt, { value: e }),
                                            progressTotal: s().createElement(
                                                'div',
                                                { className: 'QuestProgress_progressTotalText_dd' },
                                                s().createElement(rt, { value: t }),
                                            ),
                                        },
                                    },
                                }),
                                s().createElement(
                                    'div',
                                    { className: 'QuestProgress_progressBar_9b' },
                                    s().createElement(Dn, { size: Gt.Small, maxValue: t, value: e }),
                                ),
                            ),
                        );
                    }),
                    Xi = R.strings.hb_lobby.hbMetaView.quests,
                    qi = (0, u.memo)(({ isCompleted: e = !1 }) => {
                        const t = D()('QuestStatus_base_21', e && 'QuestStatus_base__completed_95'),
                            n = e ? Xi.status.complete() : Xi.status.inProgress();
                        return s().createElement(lr, {
                            className: t,
                            text: n,
                            format: {
                                binding: {
                                    icon: s().createElement('div', { className: 'QuestStatus_completeIcon_99' }),
                                },
                            },
                        });
                    });
                function Qi() {
                    return (
                        (Qi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Qi.apply(this, arguments)
                    );
                }
                const Yi = (0, u.memo)(({ bonuses: e }) => {
                    const t = x().mediaSize,
                        n = Ct(
                            ((e) =>
                                e.map(
                                    (e) => (
                                        (e.value = e.amount > 1 ? e.amount.toString() : ''),
                                        (e.item = e.item || e.icon),
                                        e
                                    ),
                                ))(e),
                            ((e) => {
                                switch (e) {
                                    case y.Small:
                                        return je.Small;
                                    case y.Medium:
                                        return je.Big;
                                    case y.Large:
                                    case y.ExtraLarge:
                                        return je.S180x135;
                                    default:
                                        return je.Small;
                                }
                            })(t),
                        );
                    return s().createElement(
                        'div',
                        { className: 'QuestRewards_base_b6' },
                        s().createElement(
                            'div',
                            { className: 'QuestRewards_rewards_81' },
                            n.filteredRewards.map((e) => {
                                const t = {
                                    info: D()('QuestRewards_rewardInfo_9f', Ca(e.name) && 'QuestRewards_silver_06'),
                                };
                                return s().createElement(
                                    Et,
                                    Qi({}, e, {
                                        key: e.name,
                                        className: 'QuestRewards_reward_b9',
                                        classNames: t,
                                        tooltipArgs: mt({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                                    }),
                                );
                            }),
                        ),
                    );
                });
                let Ki, Zi;
                var Ji;
                (!(function (e) {
                    ((e.Gold = 'gold'), (e.Credits = 'credits'), (e.Crystal = 'crystal'));
                })(Ki || (Ki = {})),
                    ((Ji = Zi || (Zi = {})).SHORT_DATE = 'short-date'),
                    (Ji.SHORT_TIME = 'short-time'),
                    (Ji.SHORT_DATE_TIME = 'short-date-time'),
                    (Ji.FULL_DATE = 'full-date'),
                    (Ji.FULL_DATE_TIME = 'full-date-time'),
                    (Ji.MONTH = 'month'),
                    (Ji.MONTH_DATE = 'month-date'),
                    (Ji.DATE_MONTH = 'date-month'),
                    (Ji.MONTH_YEAR = 'month-year'),
                    (Ji.WEEK_DAY = 'week-day'),
                    (Ji.WEEK_DAY_TIME = 'week-day-time'),
                    (Ji.YEAR = 'year'),
                    (Ji.DATE_YEAR = 'date-year'));
                function eo(e = 0) {
                    let t = e;
                    const n = Math.trunc(t / 86400);
                    t -= 86400 * n;
                    const r = Math.trunc(t / 3600);
                    t -= 3600 * r;
                    const a = Math.trunc(t / 60);
                    return ((t -= 60 * a), { days: n, hours: r, minutes: a, seconds: t });
                }
                Date.now();
                const to = (e) =>
                        e.days > 0
                            ? St(R.strings.common.duration.days(), { days: e.days })
                            : e.hours > 0
                              ? St(R.strings.common.duration.hours(), { hours: e.hours })
                              : e.minutes > 0
                                ? St(R.strings.common.duration.minutes(), { minutes: e.minutes })
                                : St(R.strings.common.duration.seconds(), { seconds: e.seconds }),
                    no =
                        ((0, u.memo)(({ duration: e }) => {
                            const t = e >= 0 ? to(eo(e)) : R.strings.common.duration.unlimited();
                            return s().createElement('span', null, t);
                        }),
                        (e) =>
                            e.hours > 0 && e.minutes > 0
                                ? `${St(R.strings.common.duration.hours(), { hours: e.hours })} ${St(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                : ((e) => {
                                      const t = Object.assign({}, e);
                                      return (
                                          t.hours > 0 && t.minutes > 0 && t.hours++,
                                          t.seconds > 0 && t.minutes++,
                                          t.seconds < 0 && t.seconds,
                                          to(t)
                                      );
                                  })(e)),
                    ro = {
                        base: 'QuestUpdateTime_base_75',
                        footer: 'QuestUpdateTime_footer_5e',
                        clockIcon: 'QuestUpdateTime_clockIcon_bb',
                        countdownWrapper: 'QuestUpdateTime_countdownWrapper_3e',
                        lessSign: 'QuestUpdateTime_lessSign_b5',
                    },
                    ao = R.strings.hb_lobby.hbMetaView.quests,
                    uo = (0, u.memo)(({ updateTime: e }) => {
                        const t = eo(e),
                            n = no(t),
                            r = 0 === t.hours && 0 === t.minutes && t.seconds > 0;
                        return s().createElement(
                            'div',
                            { className: ro.base },
                            s().createElement(ti, {
                                text: ao.updateTime(),
                                binding: {
                                    icon: s().createElement('div', { className: ro.clockIcon }),
                                    time: s().createElement(
                                        'div',
                                        { className: ro.countdownWrapper },
                                        r && s().createElement('span', { className: ro.lessSign }, '<'),
                                        s().createElement(lr, { className: ro.countdown, text: n }),
                                    ),
                                },
                                classMix: ro.footer,
                                justifyContent: Is.Center,
                            }),
                        );
                    });
                let so;
                !(function (e) {
                    ((e.Small = 'small'), (e.Big = 'big'));
                })(so || (so = {}));
                const io = ['firstSlot', 'secondSlot', 'thirdSlot'],
                    oo = (e, t) => ({
                        backgroundImage: `url(${R.images.historical_battles.gui.maps.icons.quests.page.typeIcons.$dyn(e).$dyn(t)})`,
                    }),
                    lo = (e, t, n) => ({
                        backgroundImage: `url(${R.images.historical_battles.gui.maps.icons.quests.page.bg.$dyn(t).$dyn(e).$dyn(io[n])})`,
                    }),
                    co = (0, u.memo)(
                        ({
                            idx: e,
                            frontName: t,
                            type: n,
                            desc: r,
                            progressCount: a,
                            progressTotal: u,
                            bonuses: i,
                            isCompleted: o,
                            updateTime: l,
                        }) => {
                            const c = x(),
                                _ = ((e, t, n) => {
                                    const r = ((e, t) => (e >= 2560 && t >= 1377 ? 'ultraSize' : ''))(t, n);
                                    switch (e) {
                                        case y.ExtraSmall:
                                            return 'extraSmall';
                                        case y.Small:
                                            return 'small';
                                        case y.ExtraLarge:
                                            return r ? 'extraLarge' : 'large';
                                        case y.Large:
                                            return 'large';
                                        case y.Medium:
                                        default:
                                            return 'medium';
                                    }
                                })(c.mediaSize, c.remScreenWidth, c.remScreenHeight),
                                m = D()('Quest_base_19', o && 'Quest_base__complete_f6'),
                                d = u > 1,
                                E = l > 0;
                            return s().createElement(
                                'div',
                                { className: m },
                                s().createElement('div', { className: 'Quest_shadow_ab' }),
                                s().createElement('div', { className: 'Quest_bg_8c', style: lo(_, t, e) }),
                                s().createElement('div', { className: 'Quest_typeIcon_83', style: oo(_, n) }),
                                s().createElement('div', { className: 'Quest_border_bb' }),
                                s().createElement(lr, { className: 'Quest_desc_bf', text: r }),
                                d && s().createElement(ji, { progressCount: a, progressTotal: u }),
                                s().createElement(Yi, { bonuses: i }),
                                s().createElement(
                                    'div',
                                    { className: 'Quest_status_68' },
                                    s().createElement(qi, { isCompleted: o }),
                                ),
                                E &&
                                    s().createElement(
                                        'div',
                                        { className: 'Quest_timer_ee' },
                                        s().createElement(uo, { updateTime: l }),
                                    ),
                            );
                        },
                    ),
                    _o = {
                        base: 'QuestsList_base_74',
                        quest: 'QuestsList_quest_6d',
                        quest__expireable: 'QuestsList_quest__expireable_3d',
                        base__defence: 'QuestsList_base__defence_39',
                    };
                function mo() {
                    return (
                        (mo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        mo.apply(this, arguments)
                    );
                }
                const Eo = ({ quests: e, frontName: t }) =>
                    s().createElement(
                        'div',
                        { className: D()(_o.base, _o[`base__${t}`]) },
                        e.map((e, n) =>
                            s().createElement(
                                'div',
                                { key: n, className: D()(_o.quest, e.updateTime > 0 && _o.quest__expireable) },
                                s().createElement(co, mo({ idx: n, frontName: t }, e)),
                            ),
                        ),
                    );
                function po() {
                    return (
                        (po =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        po.apply(this, arguments)
                    );
                }
                const go = R.strings.hb_lobby.hbMetaView.finalQuest,
                    bo = (0, u.memo)((e) => {
                        var t;
                        let n = po({}, e);
                        const r = n.isCompleted,
                            a = D()('FinalQuest_base_da', r && 'FinalQuest_base__complete_45'),
                            u = n.bonuses.length ? (null == (t = n.bonuses[0]) ? void 0 : t.value) : null,
                            i = mt(
                                { tooltipId: null == u ? void 0 : u.tooltipId },
                                Number(null == u ? void 0 : u.tooltipContentId),
                            );
                        return s().createElement(
                            'div',
                            { className: a },
                            s().createElement('div', { className: 'FinalQuest_bg_1c' }),
                            s().createElement(
                                'div',
                                { className: 'FinalQuest_content_5a' },
                                s().createElement(
                                    'div',
                                    { className: 'FinalQuest_iconWrap_7d' },
                                    s().createElement(
                                        nt,
                                        { tooltipArgs: i },
                                        s().createElement('div', { className: 'FinalQuest_icon_16' }),
                                    ),
                                ),
                                !r &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement('div', { className: 'FinalQuest_descBg_02' }),
                                        s().createElement(lr, { className: 'FinalQuest_title_dd', text: go.title() }),
                                        s().createElement(lr, {
                                            className: 'FinalQuest_desc_67',
                                            text: go.desc(),
                                            format: {
                                                binding: {
                                                    icon: s().createElement(
                                                        de,
                                                        { body: go.tooltip.desc() },
                                                        s().createElement('div', {
                                                            className: 'FinalQuest_infoIcon_95',
                                                        }),
                                                    ),
                                                },
                                            },
                                        }),
                                    ),
                            ),
                        );
                    }),
                    ho = {
                        '--lipHalfWidth': '64',
                        base: 'App_base_2f',
                        windowIn: 'App_windowIn_3f',
                        bg: 'App_bg_27',
                        vignette: 'App_vignette_dc',
                        content: 'App_content_ac',
                        header: 'App_header_1d',
                        scroll: 'App_scroll_c5',
                        base__withFinalQuest: 'App_base__withFinalQuest_e5',
                        base__wideScreen: 'App_base__wideScreen_7d',
                        scrollWrapper: 'App_scrollWrapper_ba',
                        bar: 'App_bar_33',
                        bar__visible: 'App_bar__visible_91',
                        lips: 'App_lips_f7',
                        lipContainer: 'App_lipContainer_df',
                        lipContainer__left: 'App_lipContainer__left_e1',
                        lipContainer__right: 'App_lipContainer__right_ed',
                        lipContainer__hidden: 'App_lipContainer__hidden_17',
                        lipContainer__visible: 'App_lipContainer__visible_2f',
                        leftLip: 'App_leftLip_9b',
                        rightLip: 'App_rightLip_3e',
                        arrows: 'App_arrows_da',
                        arrowContainer: 'App_arrowContainer_9c',
                        arrowContainer__left: 'App_arrowContainer__left_0e',
                        arrowContainer__right: 'App_arrowContainer__right_e8',
                        arrowContainer__hidden: 'App_arrowContainer__hidden_6e',
                        arrowContainer__visible: 'App_arrowContainer__visible_d3',
                        leftArrow: 'App_leftArrow_1c',
                        rightArrow: 'App_rightArrow_15',
                        finalQuest: 'App_finalQuest_40',
                    },
                    fo = (0, Q.observer)(() => {
                        const e = Wi().model.computes,
                            t = e.getFrontName(),
                            n = e.getQuests(),
                            r = e.getFinalQuest(),
                            a = x(),
                            i = a.mediaSize,
                            o = a.mediaWidth,
                            l = 2 === Su(),
                            c = o >= 1366,
                            _ = D()(
                                ho.base,
                                l && ho.base__scaled,
                                r && ho.base__withFinalQuest,
                                c && ho.base__wideScreen,
                            ),
                            m = { backgroundImage: `url(${gu(i, t)})` },
                            d = (0, u.useState)(0),
                            E = d[0],
                            p = d[1],
                            g = (0, u.useState)([0, 0]),
                            b = g[0],
                            h = g[1],
                            f = { left: b[0], right: b[1] },
                            v = f.right > 0,
                            A = br({ settings: { step: { type: 'fixed', value: f.right } } }),
                            C = Wa(A);
                        ((0, u.useEffect)(() => {
                            const e = A.contentRef.current;
                            e && (e.style.cursor = v ? ('dragging' === C.type ? 'move' : 'grab') : 'default');
                        }, [C.type, v, A]),
                            (0, u.useEffect)(() => {
                                const e = () => {
                                    const e = A.animationScroll.scrollPosition.goal;
                                    p(e);
                                    const t = A.getBounds(),
                                        n = t[0],
                                        r = t[1];
                                    (n === f.left && r === f.right) || h([n, r]);
                                };
                                return (
                                    A.events.on('change', e),
                                    A.events.on('recalculateContent', e),
                                    A.events.on('resizeHandled', e),
                                    () => {
                                        (A.events.off('change', e),
                                            A.events.off('recalculateContent', e),
                                            A.events.off('resizeHandled', e));
                                    }
                                );
                            }, [A, f.left, f.right]));
                        const F = (0, u.useRef)(null),
                            B = (0, u.useRef)(null),
                            y = Number(ho['--lipHalfWidth']),
                            w = F.current && B.current ? F.current.offsetLeft + B.current.offsetLeft + y : 0,
                            S = D()(
                                ho.lipContainer,
                                ho.lipContainer__left,
                                E > 0 ? ho.lipContainer__visible : ho.lipContainer__hidden,
                            ),
                            N = D()(
                                ho.lipContainer,
                                ho.lipContainer__right,
                                E < f.right ? ho.lipContainer__visible : ho.lipContainer__hidden,
                            ),
                            T = D()(
                                ho.arrowContainer,
                                ho.arrowContainer__left,
                                E > 0 ? ho.arrowContainer__visible : ho.arrowContainer__hidden,
                            ),
                            k = D()(
                                ho.arrowContainer,
                                ho.arrowContainer__right,
                                E < f.right ? ho.arrowContainer__visible : ho.arrowContainer__hidden,
                            ),
                            M = () => {
                                ee(R.sounds.highlight());
                            },
                            L = () => {
                                ee(R.sounds.play());
                            };
                        return s().createElement(
                            'div',
                            { className: _ },
                            s().createElement('div', { className: ho.bg, style: m }),
                            s().createElement('div', { className: ho.vignette }),
                            s().createElement(
                                'div',
                                { className: ho.content },
                                s().createElement(
                                    'div',
                                    { className: ho.header },
                                    s().createElement(Gi, { frontName: t }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: ho.lips, ref: F },
                                    s().createElement(
                                        'div',
                                        { className: S, ref: B },
                                        s().createElement('div', { className: ho.leftLip }),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: N },
                                        s().createElement('div', { className: ho.rightLip }),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: ho.arrows },
                                    s().createElement(
                                        'div',
                                        {
                                            className: T,
                                            onClick: () => {
                                                A.applyScroll(0);
                                            },
                                            onMouseEnter: M,
                                            onMouseDown: L,
                                        },
                                        s().createElement('div', { className: ho.leftArrow }),
                                    ),
                                    s().createElement(
                                        'div',
                                        {
                                            className: k,
                                            onClick: () => {
                                                A.applyScroll(f.right);
                                            },
                                            onMouseEnter: M,
                                            onMouseDown: L,
                                        },
                                        s().createElement('div', { className: ho.rightArrow }),
                                    ),
                                ),
                                s().createElement(
                                    $r.Horizontal.Area,
                                    { api: A, className: ho.scroll, classNames: { wrapper: ho.scrollWrapper } },
                                    s().createElement(Eo, { quests: n, frontName: t }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: D()(ho.bar, v && ho.bar__visible), style: { left: w } },
                                    s().createElement(Fr, { api: A }),
                                ),
                                r && s().createElement('div', { className: ho.finalQuest }, s().createElement(bo, r)),
                            ),
                        );
                    }),
                    vo = () =>
                        s().createElement(
                            $i,
                            { options: { context: 'model.questsModel' } },
                            s().createElement(fo, null),
                        ),
                    Ao = { Progress: De.Progress, Division: De.Division, Quests: De.Quests, Order: De.Order },
                    Co = {
                        [Ao.Progress]: s().createElement(mu, null),
                        [Ao.Division]: s().createElement(xs, null),
                        [Ao.Quests]: s().createElement(vo, null),
                        [Ao.Order]: s().createElement(Oi, null),
                    },
                    Do = R.images.historical_battles.gui.maps.icons.hangar.hbMetaView.tabs,
                    Fo = R.strings.hb_lobby.hbMetaView.label,
                    Bo = [
                        {
                            id: 1,
                            items: [
                                { id: Ao.Progress, icon: Do.progress64() },
                                { id: Ao.Division, icon: Do.division64() },
                                { id: Ao.Quests, icon: Do.quests64() },
                                { id: Ao.Order, icon: Do.order64() },
                            ],
                            groupClassNames: { group: 'tabs_group_ab' },
                        },
                    ],
                    yo = {
                        [Ao.Progress]: Fo.progress(),
                        [Ao.Division]: Fo.division(),
                        [Ao.Quests]: Fo.quests(),
                        [Ao.Order]: Fo.order(),
                    },
                    wo = ({ id: e, isActive: t }) => {
                        const n = e;
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
                                yo[n],
                            ),
                        );
                    },
                    So = ({ children: e, id: t }) =>
                        s().createElement(
                            le,
                            {
                                contentId: R.views.historical_battles.lobby.tooltips.HbSimpleTooltipView('resId'),
                                args: { id: t },
                                ignoreShowDelay: !0,
                            },
                            e,
                        ),
                    No = 'App_hidden_95',
                    xo = (0, Q.observer)(() => {
                        const e = q(),
                            t = e.model,
                            n = e.controls,
                            r = t.root.get().tabId,
                            a = x(),
                            i = (0, u.useState)(!1),
                            o = i[0],
                            l = i[1],
                            c = (0, u.useCallback)(
                                (e) => {
                                    n.onTabChange(e);
                                },
                                [n],
                            ),
                            _ = (0, u.useCallback)(() => {
                                (r !== Ao.Progress && r !== Ao.Division) || !o
                                    ? n.onClose()
                                    : dispatchEvent(new Event(we));
                            }, [o, r, n]);
                        (J(Y.n.ESCAPE, _),
                            (0, u.useEffect)(() => {
                                const e = () => {
                                        l(!0);
                                    },
                                    t = () => {
                                        l(!1);
                                    };
                                return (
                                    addEventListener(ye, e),
                                    addEventListener(we, t),
                                    () => {
                                        (removeEventListener(ye, e), removeEventListener(we, t));
                                    }
                                );
                            }, []));
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
                                    s().createElement(ue, {
                                        caption: R.strings.menu.viewHeader.aboutBtn.label(),
                                        type: 'info',
                                        side: 'left',
                                        onClick: n.onAboutClicked,
                                    }),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: 'App_buttonClose_79' },
                                s().createElement(Xr, {
                                    text: R.strings.menu.viewHeader.closeBtn.label(),
                                    onClose: n.onClose,
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: 'App_content_6e' },
                                s().createElement(u.Suspense, { fallback: s().createElement('div', null) }, Co[r]),
                            ),
                            s().createElement(
                                'div',
                                { className: 'App_tabs_5c' },
                                s().createElement(Ce, {
                                    tabs: Bo,
                                    active: r,
                                    onClick: c,
                                    className: 'App_verticalTabs_51',
                                    additionContent: a.mediaSize >= y.Medium ? wo : void 0,
                                    WrapperElement: So,
                                    classNames: {
                                        tab: 'App_tab_09',
                                        icon: 'App_icon_21',
                                        highlight: 'App_highlight_d6',
                                        frame: 'App_frame_2c',
                                        border: 'App_border_78',
                                        borderBottom: No,
                                        arrow: No,
                                    },
                                }),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    o().render(
                        s().createElement(H, null, s().createElement(X, null, s().createElement(xo, null))),
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
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e].call(n.exports, n, n.exports, __webpack_require__), n.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, r) => {
            if (!t) {
                var a = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, n, r] = deferred[o], u = !0, s = 0; s < t.length; s++)
                        (!1 & r || a >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((u = !1), r < a && (a = r));
                    if (u) {
                        deferred.splice(o--, 1);
                        var i = n();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > r; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, n, r];
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
        (() => {
            var e = { 297: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        a,
                        [u, s, i] = n,
                        o = 0;
                    if (u.some((t) => 0 !== e[t])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (t && t(n); o < u.length; o++)
                        ((a = u[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(7294));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
