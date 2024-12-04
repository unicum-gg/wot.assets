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
            1856: (e, t, n) => {
                'use strict';
                n.d(t, { v: () => a });
                const a = (e) => {
                    let t,
                        n = null;
                    return (
                        (n = requestAnimationFrame(() => {
                            n = requestAnimationFrame(() => {
                                (n = null), (t = e());
                            });
                        })),
                        () => {
                            'function' == typeof t && t(), null !== n && cancelAnimationFrame(n);
                        }
                    );
                };
            },
            122: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => a });
                const a = (e, t) => {
                    let n;
                    const a = setTimeout(() => {
                        n = e();
                    }, t);
                    return () => {
                        'function' == typeof n && n(), clearTimeout(a);
                    };
                };
            },
            527: (e, t, n) => {
                'use strict';
                n.r(t), n.d(t, { mouse: () => o, onResize: () => u });
                var a = n(2472),
                    r = n(1176);
                const u = (0, a.E)('clientResized'),
                    s = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    o = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function n() {
                            e.enabled && (0, r.R)(!0);
                        }
                        function a() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', n))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', n))
                                : (0, r.R)(!1);
                        }
                        const u = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const u = `mouse${t}`,
                                            o = s[t]((e) => n([e, 'outside']));
                                        function i(e) {
                                            n([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(u, i),
                                            a(),
                                            () => {
                                                r &&
                                                    (o(),
                                                    window.removeEventListener(u, i),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (r = !1));
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
                                (e.enabled = !1), a();
                            },
                            enable() {
                                (e.enabled = !0), a();
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
            5959: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => u,
                        getSize: () => r,
                        graphicsQuality: () => s,
                    });
                var a = n(527);
                function r(e = 'px') {
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
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => a });
            },
            2472: (e, t, n) => {
                'use strict';
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => a });
            },
            3138: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => r });
                var a = n(5959);
                const r = { view: n(7641), client: a };
            },
            3722: (e, t, n) => {
                'use strict';
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function r(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => r, getTextureUrl: () => a });
            },
            6112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => r });
                var a = n(2472);
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
            7641: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => y,
                        events: () => u.U,
                        extraSize: () => F,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => w,
                        getScale: () => g,
                        getSize: () => _,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => f,
                        isFocused: () => A,
                        pxToRem: () => v,
                        remToPx: () => h,
                        resize: () => d,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => B,
                    });
                var a = n(3722),
                    r = n(6112),
                    u = n(6538),
                    s = n(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function c(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
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
                function v(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function A() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function D() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const y = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    F = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    B = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : u.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => u });
                const a = ['args'],
                    r = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const u = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        u = Object.keys(e);
                                    for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, a);
                            return void 0 !== u
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
                                          arguments:
                                              ((r = u),
                                              Object.entries(r).map(([e, t]) => {
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
                        var r;
                    },
                    u = {
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
            5521: (e, t, n) => {
                'use strict';
                let a, r;
                n.d(t, { n: () => a }),
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
                    })(a || (a = {})),
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
                        n,
                        a,
                        r,
                        u,
                        s,
                        o = -1;
                    document.addEventListener('mousedown', (n) => {
                        document.getSelection().empty(),
                            n.target.select &&
                                -1 === o &&
                                ((e = n.target), (t = e.getBoundingClientRect()), e.setSelectionRange(0, 0));
                    }),
                        document.addEventListener('mousemove', (n) => {
                            if ((-1 === o && n.target.select && n.target === e && (o = e.selectionStart), o > -1)) {
                                const a = Math.min(Math.max(n.x, t.left), t.right),
                                    r = Math.min(Math.max(n.y, t.top), t.bottom),
                                    u = document.createEvent('MouseEvent');
                                u.initMouseEvent('mousedown', !0, !0, null, 1, a, r, a, r, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(u);
                                const s = e.selectionEnd;
                                s > o ? e.setSelectionRange(o, s, 'forward') : e.setSelectionRange(s, o, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            (e = null), (o = -1);
                        }),
                        document.addEventListener('dblclick', (e) => {
                            e.target.select &&
                                (document.getSelection().empty(),
                                (n = e.target),
                                (a = e.target.value),
                                (r = n.selectionStart),
                                (u = -1 !== a.lastIndexOf(' ', r) ? a.lastIndexOf(' ', r) + 1 : 0),
                                (s = -1 !== a.indexOf(' ', r) ? a.indexOf(' ', r) : a.length),
                                n.setSelectionRange(u, s, 'forward'));
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
                                    const n = document.caretPositionFromPoint(t.x, t.y);
                                    if (!n.offsetNode || !e.offsetNode) return;
                                    document
                                        .getSelection()
                                        .setBaseAndExtent(e.offsetNode, e.offset, n.offsetNode, n.offset);
                                }
                            }),
                            document.addEventListener('mouseup', () => {
                                e = null;
                            });
                    })();
            },
            7727: (e, t, n) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e);
                }
                n.d(t, { $: () => r, G: () => a });
                const r = {
                    playHighlight() {
                        a('highlight');
                    },
                    playClick() {
                        a('play');
                    },
                    playYes() {
                        a('yes1');
                    },
                };
            },
            1358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => u });
                var a = n(3138);
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
                    addCallback(e, t, n = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const u = a.O.view.addModelObserver(e, n, r);
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
                            const a = this._callbacks[n];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const u = r;
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
            4179: (e, t, n) => {
                'use strict';
                n.d(t, {
                    Sw: () => u.Z,
                    kH: () => d,
                    B3: () => c,
                    Z5: () => s,
                    lf: () => _,
                    cy: () => o,
                    B0: () => i,
                    wU: () => y,
                    ry: () => b,
                    Eu: () => A,
                    SW: () => D,
                    P3: () => w,
                });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    n();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const n = e,
                            a = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== a)),
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
                a.__instance = void 0;
                const r = a;
                var u = n(1358);
                const s = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
                let i;
                var l;
                ((l = i || (i = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE');
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    m = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = n(5521),
                    p = n(3138);
                const g = ['args'];
                function v(e, t, n, a, r, u, s) {
                    try {
                        var o = e[u](s),
                            i = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(a, r);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
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
                                    return new Promise(function (a, r) {
                                        var u = e.apply(t, n);
                                        function s(e) {
                                            v(u, a, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            v(u, a, r, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    A = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    C = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                u = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        u = Object.keys(e);
                                    for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, g);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, u, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, t]) => {
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
                        var a;
                    },
                    f = () => C(i.CLOSE),
                    D = () => C(i.POP_OVER, { on: !1 }),
                    w = (e, t, n, a, r = R.invalid('resId'), u) => {
                        const s = p.O.view.getViewGlobalPosition(),
                            o = n.getBoundingClientRect(),
                            l = o.x,
                            c = o.y,
                            m = o.width,
                            _ = o.height,
                            d = {
                                x: p.O.view.pxToRem(l) + s.x,
                                y: p.O.view.pxToRem(c) + s.y,
                                width: p.O.view.pxToRem(m),
                                height: p.O.view.pxToRem(_),
                            };
                        C(i.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: a || R.invalid('resId'),
                            targetID: r,
                            direction: t,
                            bbox: h(d),
                            on: !0,
                            args: u,
                        });
                    },
                    y = () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                    F = (e, t) => {
                        e.keyCode === E.n.ESCAPE && t();
                    };
                var B = n(7572);
                const S = r.instance,
                    N = {
                        DataTracker: u.Z,
                        ViewModel: B.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: m,
                        TimeFormatType: _,
                        DateFormatType: d,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => C(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: D,
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            C(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: w,
                        addEscapeListener: (e) => {
                            const t = (t) => F(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            F(e, f);
                        },
                        handleViewEvent: C,
                        onBindingsReady: b,
                        onLayoutReady: A,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: y,
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const r = Object.prototype.toString.call(t[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[a];
                                        n[a] = [];
                                        for (let t = 0; t < r.length; t++) n[a].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[a] = e(t[a]))
                                            : (n[a] = t[a]);
                                }
                            return n;
                        },
                        ClickOutsideManager: S,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = N;
            },
            5167: (e, t, n) => {
                'use strict';
                var a = {};
                n.r(a),
                    n.d(a, {
                        Area: () => mi,
                        Bar: () => ii,
                        DefaultScroll: () => ci,
                        Direction: () => Ko,
                        defaultSettings: () => Jo,
                        useHorizontalScrollApi: () => ti,
                    });
                var r = {};
                n.r(r), n.d(r, { Area: () => Di, Bar: () => Ai, Default: () => fi, useVerticalScrollApi: () => _i });
                var u = n(3138),
                    s = n(6179),
                    o = n.n(s);
                const i = (e, t, n) =>
                        t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                            ? (t.extraLargeHeight && n.extraLarge) ||
                              (t.largeHeight && n.large) ||
                              (t.mediumHeight && n.medium) ||
                              (t.smallHeight && n.small) ||
                              (t.extraSmallHeight && n.extraSmall)
                                ? e
                                : null
                            : e,
                    l = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var c;
                function m(e, t, n) {
                    const a = (function (e, t) {
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
                        })(t, n),
                        u = Math.min(a, r);
                    return {
                        extraLarge: u === n.extraLarge.weight,
                        large: u === n.large.weight,
                        medium: u === n.medium.weight,
                        small: u === n.small.weight,
                        extraSmall: u === n.extraSmall.weight,
                        extraLargeWidth: a === n.extraLarge.weight,
                        largeWidth: a === n.large.weight,
                        mediumWidth: a === n.medium.weight,
                        smallWidth: a === n.small.weight,
                        extraSmallWidth: a === n.extraSmall.weight,
                        extraLargeHeight: r === n.extraLarge.weight,
                        largeHeight: r === n.large.weight,
                        mediumHeight: r === n.medium.weight,
                        smallHeight: r === n.small.weight,
                        extraSmallHeight: r === n.extraSmall.weight,
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
                })(c || (c = {}));
                const _ = u.O.client.getSize('rem'),
                    d = _.width,
                    E = _.height,
                    p = Object.assign({ width: d, height: E }, m(d, E, l)),
                    g = (0, s.createContext)(p),
                    v = ['children'],
                    h = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, v);
                        const a = (0, s.useContext)(g),
                            r = a.extraLarge,
                            u = a.large,
                            o = a.medium,
                            l = a.small,
                            c = a.extraSmall,
                            m = a.extraLargeWidth,
                            _ = a.largeWidth,
                            d = a.mediumWidth,
                            E = a.smallWidth,
                            p = a.extraSmallWidth,
                            h = a.extraLargeHeight,
                            b = a.largeHeight,
                            A = a.mediumHeight,
                            C = a.smallHeight,
                            f = a.extraSmallHeight,
                            D = { extraLarge: h, large: b, medium: A, small: C, extraSmall: f };
                        if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                            if (n.extraLarge && r) return t;
                            if (n.large && u) return t;
                            if (n.medium && o) return t;
                            if (n.small && l) return t;
                            if (n.extraSmall && c) return t;
                        } else {
                            if (n.extraLargeWidth && m) return i(t, n, D);
                            if (n.largeWidth && _) return i(t, n, D);
                            if (n.mediumWidth && d) return i(t, n, D);
                            if (n.smallWidth && E) return i(t, n, D);
                            if (n.extraSmallWidth && p) return i(t, n, D);
                            if (
                                !(
                                    n.extraLargeWidth ||
                                    n.largeWidth ||
                                    n.mediumWidth ||
                                    n.smallWidth ||
                                    n.extraSmallWidth
                                )
                            ) {
                                if (n.extraLargeHeight && h) return t;
                                if (n.largeHeight && b) return t;
                                if (n.mediumHeight && A) return t;
                                if (n.smallHeight && C) return t;
                                if (n.extraSmallHeight && f) return t;
                            }
                        }
                        return null;
                    };
                (h.defaultProps = {
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
                    (0, s.memo)(h);
                const b = (e) => {
                        const t = (0, s.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    A = (0, s.memo)(({ children: e }) => {
                        const t = (0, s.useContext)(g),
                            n = (0, s.useState)(t),
                            a = n[0],
                            r = n[1],
                            i = (0, s.useCallback)((e, t) => {
                                const n = u.O.view.pxToRem(e),
                                    a = u.O.view.pxToRem(t);
                                r(Object.assign({ width: n, height: a }, m(n, a, l)));
                            }, []);
                        b(() => {
                            engine.on('clientResized', i);
                        }),
                            (0, s.useEffect)(() => () => engine.off('clientResized', i), [i]);
                        const c = (0, s.useMemo)(() => Object.assign({}, a), [a]);
                        return o().createElement(g.Provider, { value: c }, e);
                    });
                var C = n(6483),
                    f = n.n(C),
                    D = n(926),
                    w = n.n(D);
                let y, F, B;
                var S;
                ((S = y || (y = {}))[(S.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                    (S[(S.Small = l.small.width)] = 'Small'),
                    (S[(S.Medium = l.medium.width)] = 'Medium'),
                    (S[(S.Large = l.large.width)] = 'Large'),
                    (S[(S.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(F || (F = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(B || (B = {}));
                const N = () => {
                        const e = (0, s.useContext)(g),
                            t = e.width,
                            n = e.height,
                            a = ((e) => {
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
                                        return F.ExtraLarge;
                                    case e.largeWidth:
                                        return F.Large;
                                    case e.mediumWidth:
                                        return F.Medium;
                                    case e.smallWidth:
                                        return F.Small;
                                    case e.extraSmallWidth:
                                        return F.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), F.ExtraSmall;
                                }
                            })(e),
                            u = ((e) => {
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
                                        return console.error('Unreachable media context resolution'), B.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: u, remScreenWidth: t, remScreenHeight: n };
                    },
                    M = ['children', 'className'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const T = {
                        [F.ExtraSmall]: '',
                        [F.Small]: w().SMALL_WIDTH,
                        [F.Medium]: `${w().SMALL_WIDTH} ${w().MEDIUM_WIDTH}`,
                        [F.Large]: `${w().SMALL_WIDTH} ${w().MEDIUM_WIDTH} ${w().LARGE_WIDTH}`,
                        [F.ExtraLarge]: `${w().SMALL_WIDTH} ${w().MEDIUM_WIDTH} ${w().LARGE_WIDTH} ${w().EXTRA_LARGE_WIDTH}`,
                    },
                    k = {
                        [B.ExtraSmall]: '',
                        [B.Small]: w().SMALL_HEIGHT,
                        [B.Medium]: `${w().SMALL_HEIGHT} ${w().MEDIUM_HEIGHT}`,
                        [B.Large]: `${w().SMALL_HEIGHT} ${w().MEDIUM_HEIGHT} ${w().LARGE_HEIGHT}`,
                        [B.ExtraLarge]: `${w().SMALL_HEIGHT} ${w().MEDIUM_HEIGHT} ${w().LARGE_HEIGHT} ${w().EXTRA_LARGE_HEIGHT}`,
                    },
                    I = {
                        [y.ExtraSmall]: '',
                        [y.Small]: w().SMALL,
                        [y.Medium]: `${w().SMALL} ${w().MEDIUM}`,
                        [y.Large]: `${w().SMALL} ${w().MEDIUM} ${w().LARGE}`,
                        [y.ExtraLarge]: `${w().SMALL} ${w().MEDIUM} ${w().LARGE} ${w().EXTRA_LARGE}`,
                    },
                    L = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, M);
                        const r = N(),
                            u = r.mediaWidth,
                            s = r.mediaHeight,
                            i = r.mediaSize;
                        return o().createElement('div', x({ className: f()(n, T[u], k[s], I[i]) }, a), t);
                    },
                    O = ['children'],
                    P = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, O);
                        return o().createElement(A, null, o().createElement(L, n, t));
                    };
                var H = n(493),
                    V = n.n(H),
                    G = n(7727);
                const W = {
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
                    $ = [
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
                function U() {
                    return (
                        (U =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        U.apply(this, arguments)
                    );
                }
                class z extends o().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, G.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, G.G)(this.props.soundClick);
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
                            n = e.onClick,
                            a = e.goto,
                            r = e.side,
                            u = e.type,
                            s = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            m = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        u = Object.keys(e);
                                    for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(e, $)),
                            d = f()(W.base, W[`base__${u}`], W[`base__${r}`], null == s ? void 0 : s.base),
                            E = f()(W.icon, W[`icon__${u}`], W[`icon__${r}`], null == s ? void 0 : s.icon),
                            p = f()(W.glow, null == s ? void 0 : s.glow),
                            g = f()(W.caption, W[`caption__${u}`], null == s ? void 0 : s.caption),
                            v = f()(W.goto, null == s ? void 0 : s.goto);
                        return o().createElement(
                            'div',
                            U(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                _,
                            ),
                            'info' !== u && o().createElement('div', { className: W.shine }),
                            o().createElement('div', { className: E }, o().createElement('div', { className: p })),
                            o().createElement('div', { className: g }, t),
                            a && o().createElement('div', { className: v }, a),
                        );
                    }
                }
                z.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var j = n(122),
                    q = n(5521),
                    Y = n(4179);
                const X = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Q(e = q.n.NONE, t = X, n = !1) {
                    (0, s.useEffect)(() => {
                        if (e !== q.n.NONE)
                            return (
                                window.addEventListener('keydown', a, n),
                                () => {
                                    window.removeEventListener('keydown', a, n);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (u.O.view.isEventHandled()) return;
                                u.O.view.setEventHandled(), t(a), n && a.stopPropagation();
                            }
                        }
                    }, [t, e, n]);
                }
                function Z(e) {
                    Q(q.n.ESCAPE, e);
                }
                var K = n(3403);
                let J, ee, te, ne, ae;
                function re(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function ue(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const n = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(n, -n)]);
                    });
                }
                function se(e) {
                    return e.replace(/-/g, '_');
                }
                function oe(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.CITY = 0)] = 'CITY'),
                        (e[(e.TASKS = 1)] = 'TASKS'),
                        (e[(e.MACHINE = 2)] = 'MACHINE'),
                        (e[(e.REWARDS = 3)] = 'REWARDS'),
                        (e[(e.PET = 4)] = 'PET'),
                        (e[(e.INFO = 5)] = 'INFO');
                })(J || (J = {})),
                    (function (e) {
                        (e[(e.DONE = 0)] = 'DONE'),
                            (e[(e.DEFAULT = 1)] = 'DEFAULT'),
                            (e[(e.TO_GLADE_WITH_INTRO = 2)] = 'TO_GLADE_WITH_INTRO'),
                            (e[(e.WITH_SWITCHING_OBJS = 3)] = 'WITH_SWITCHING_OBJS');
                    })(ee || (ee = {})),
                    (function (e) {
                        (e.GET_TOKENS = 'getTokens'),
                            (e.SPEND_TOKENS = 'spendTokens'),
                            (e.SPEND_TOKENS_ACTIVE = 'spendTokensActive');
                    })(te || (te = {})),
                    (function (e) {
                        (e.AVAILABLE = 'available'), (e.NOT_AVAILABLE = 'notAvailable'), (e.ERROR = 'error');
                    })(ne || (ne = {})),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(ae || (ae = {}));
                const ie = (e, t, n) => {
                        if (n % 2) {
                            const n = e.pop();
                            return [...e, n + t];
                        }
                        return [...e, t];
                    },
                    le = (e, t, n) => {
                        if (0 === n) return [t];
                        if (n % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const n = e.pop();
                            return [...e, n + t];
                        }
                    },
                    ce = (e, t, n = ae.left) => e.split(t).reduce(n === ae.left ? ie : le, []),
                    me = (() => {
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
                    _e = ['zh_cn', 'zh_sg', 'zh_tw'],
                    de = {
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
                let Ee, pe;
                var ge, ve;
                ((ve = Ee || (Ee = {})).main = 'main'),
                    (ve.primary = 'primary'),
                    (ve.primaryGreen = 'primaryGreen'),
                    (ve.primaryRed = 'primaryRed'),
                    (ve.secondary = 'secondary'),
                    (ve.ghost = 'ghost'),
                    ((ge = pe || (pe = {})).extraSmall = 'extraSmall'),
                    (ge.small = 'small'),
                    (ge.medium = 'medium');
                const he = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: a,
                    disabled: r,
                    mixClass: u,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: m,
                    onMouseDown: _,
                    onMouseUp: d,
                    onMouseLeave: E,
                    onClick: p,
                }) => {
                    const g = (0, s.useRef)(null),
                        v = (0, s.useState)(n),
                        h = v[0],
                        b = v[1],
                        A = (0, s.useState)(!1),
                        C = A[0],
                        D = A[1],
                        w = (0, s.useState)(!1),
                        y = w[0],
                        F = w[1],
                        B = (0, s.useCallback)(() => {
                            r || (g.current && (g.current.focus(), b(!0)));
                        }, [r]),
                        S = (0, s.useCallback)(
                            (e) => {
                                h && null !== g.current && !g.current.contains(e.target) && b(!1);
                            },
                            [h],
                        ),
                        N = (0, s.useCallback)(
                            (e) => {
                                r || (p && p(e));
                            },
                            [r, p],
                        ),
                        M = (0, s.useCallback)(
                            (e) => {
                                r || (null !== i && (0, G.G)(i), c && c(e), F(!0));
                            },
                            [r, i, c],
                        ),
                        x = (0, s.useCallback)(
                            (e) => {
                                m && m(e);
                            },
                            [m],
                        ),
                        T = (0, s.useCallback)(
                            (e) => {
                                r || (d && d(e), D(!1));
                            },
                            [r, d],
                        ),
                        k = (0, s.useCallback)(
                            (e) => {
                                r || (null !== l && (0, G.G)(l), _ && _(e), n && B(), D(!0));
                            },
                            [r, l, _, B, n],
                        ),
                        I = (0, s.useCallback)(
                            (e) => {
                                r || (E && E(e), D(!1));
                            },
                            [r, E],
                        ),
                        L = f()(
                            de.base,
                            de[`base__${a}`],
                            {
                                [de.base__disabled]: r,
                                [de[`base__${t}`]]: t,
                                [de.base__focus]: h,
                                [de.base__highlightActive]: C,
                                [de.base__firstHover]: y,
                            },
                            u,
                        ),
                        O = f()(de.state, de.state__default);
                    return (
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mousedown', S),
                                () => {
                                    document.removeEventListener('mousedown', S);
                                }
                            ),
                            [S],
                        ),
                        (0, s.useEffect)(() => {
                            b(n);
                        }, [n]),
                        o().createElement(
                            'div',
                            {
                                ref: g,
                                className: L,
                                onMouseEnter: M,
                                onMouseMove: x,
                                onMouseUp: T,
                                onMouseDown: k,
                                onMouseLeave: I,
                                onClick: N,
                            },
                            a !== Ee.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: de.back }),
                                    o().createElement('span', { className: de.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: O },
                                o().createElement('span', { className: de.stateDisabled }),
                                o().createElement('span', { className: de.stateHighlightHover }),
                                o().createElement('span', { className: de.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: de.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                he.defaultProps = { type: Ee.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const be = (0, s.memo)(he);
                var Ae = n(9887),
                    Ce = n.n(Ae);
                const fe = ['xl', 'lg', 'md', 'sm', 'xs'],
                    De = (e) => e.includes('_') && ((e) => fe.includes(e))(e.split('_').at(-1)),
                    we = [y.ExtraLarge, y.Large, y.Medium, y.Small, y.ExtraSmall],
                    ye = (e, t) =>
                        Object.keys(e).reduce((n, a) => {
                            if (a in n) return n;
                            if (De(a)) {
                                const r = a.split('_').slice(0, -1).join('_');
                                if (r in n) return n;
                                const u = we.indexOf(t),
                                    s = (-1 !== u ? fe.slice(u) : [])
                                        .map((e) => r + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    o = s ? e[s] : void 0;
                                return (n[r] = void 0 !== o ? o : e[r]), n;
                            }
                            const r = e[a];
                            return (
                                void 0 === r ||
                                    ((e, t) => fe.some((n) => void 0 !== t[`${e}_${n}`]))(a, e) ||
                                    (n[a] = r),
                                n
                            );
                        }, {}),
                    Fe = (e, t = ye) => {
                        const n = (
                            (e, t = ye) =>
                            (n) => {
                                const a = N().mediaSize,
                                    r = (0, s.useMemo)(() => t(n, a), [n, a]);
                                return o().createElement(e, r);
                            }
                        )(e, t);
                        return o().memo((t) =>
                            Object.keys(t).some((e) => De(e) && void 0 !== t[e])
                                ? o().createElement(n, t)
                                : o().createElement(e, t),
                        );
                    },
                    Be = {
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
                    Se = [
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
                function Ne() {
                    return (
                        (Ne =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ne.apply(this, arguments)
                    );
                }
                Object.keys(Ce());
                const Me = {
                        XL: { mt: Be.mt__XL, mr: Be.mr__XL, mb: Be.mb__XL, ml: Be.ml__XL },
                        LG: { mt: Be.mt__LG, mr: Be.mr__LG, mb: Be.mb__LG, ml: Be.ml__LG },
                        MDp: { mt: Be.mt__MDp, mr: Be.mr__MDp, mb: Be.mb__MDp, ml: Be.ml__MDp },
                        MD: { mt: Be.mt__MD, mr: Be.mr__MD, mb: Be.mb__MD, ml: Be.ml__MD },
                        SMp: { mt: Be.mt__SMp, mr: Be.mr__SMp, mb: Be.mb__SMp, ml: Be.ml__SMp },
                        SM: { mt: Be.mt__SM, mr: Be.mr__SM, mb: Be.mb__SM, ml: Be.ml__SM },
                        XS: { mt: Be.mt__XS, mr: Be.mr__XS, mb: Be.mb__XS, ml: Be.ml__XS },
                    },
                    xe = (Object.keys(Me), ['mt', 'mr', 'mb', 'ml']),
                    Te = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    ke = Fe((e) => {
                        let t = e.className,
                            n = e.width,
                            a = e.height,
                            r = e.m,
                            u = e.mt,
                            i = void 0 === u ? r : u,
                            l = e.mr,
                            c = void 0 === l ? r : l,
                            m = e.mb,
                            _ = void 0 === m ? r : m,
                            d = e.ml,
                            E = void 0 === d ? r : d,
                            p = e.column,
                            g = e.row,
                            v = e.flexDirection,
                            h = void 0 === v ? (p ? 'column' : g && 'row') || void 0 : v,
                            b = e.flexStart,
                            A = e.center,
                            C = e.flexEnd,
                            D = e.spaceBetween,
                            w = e.spaceAround,
                            y = e.justifyContent,
                            F =
                                void 0 === y
                                    ? (b ? 'flex-start' : A && 'center') ||
                                      (C && 'flex-end') ||
                                      (D && 'space-between') ||
                                      (w && 'space-around') ||
                                      void 0
                                    : y,
                            B = e.alignItems,
                            S = void 0 === B ? (b ? 'flex-start' : A && 'center') || (C && 'flex-end') || void 0 : B,
                            N = e.alignSelf,
                            M = e.wrap,
                            x = e.flexWrap,
                            T = void 0 === x ? (M ? 'wrap' : void 0) : x,
                            k = e.grow,
                            R = e.shrink,
                            I = e.flex,
                            L = void 0 === I ? (k || R ? `${k ? 1 : 0} ${R ? 1 : 0} auto` : void 0) : I,
                            O = e.style,
                            P = e.children,
                            H = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Se);
                        const V = (0, s.useMemo)(() => {
                                const e = { mt: i, mr: c, mb: _, ml: E },
                                    t = ((e) =>
                                        xe.reduce((t, n) => {
                                            const a = e[n];
                                            return a && 'number' != typeof a ? t.concat(Me[!0 === a ? 'MD' : a][n]) : t;
                                        }, []))(e),
                                    r = ((e) =>
                                        xe.reduce((t, n) => {
                                            const a = e[n];
                                            return 'number' == typeof a && (t[Te[n]] = a + 'rem'), t;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, O, r, {
                                        width: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        height: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        flex: L,
                                        alignSelf: N,
                                        display: h || S ? 'flex' : void 0,
                                        flexDirection: h,
                                        flexWrap: T,
                                        justifyContent: F,
                                        alignItems: S,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [n, a, i, c, _, E, O, L, N, h, T, F, S]),
                            G = V.computedStyle,
                            W = V.computedClassNames;
                        return o().createElement('div', Ne({ className: f()(Be.base, ...W, t), style: G }, H), P);
                    }),
                    Re = ({ binding: e, text: t = '', classMix: n, alignment: a = ae.left }) =>
                        null === t
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : o().createElement(
                                  s.Fragment,
                                  null,
                                  t.split('\n').map((t, r) =>
                                      o().createElement(
                                          'div',
                                          { className: f()('FormatText_base_d0', n), key: `${t}-${r}` },
                                          ((e, t, n) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  n && e in n
                                                      ? n[e]
                                                      : ((e, t = ae.left) => {
                                                            const n = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return _e.includes(n)
                                                                ? me(e)
                                                                : ((e, t = ae.left) => {
                                                                      let n = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          r = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          ce(r, /( )/, t).forEach(
                                                                              (e) => (n = n.concat(ce(e, a, ae.left))),
                                                                          ),
                                                                          n
                                                                      );
                                                                  })(e, t);
                                                        })(e, t),
                                              ))(t, a, e).map((e, t) =>
                                              o().createElement(s.Fragment, { key: `${t}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var Ie = n(3532),
                    Le = n.n(Ie);
                const Oe = {
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
                    Pe = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function He() {
                    return (
                        (He =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        He.apply(this, arguments)
                    );
                }
                Object.keys(Ce());
                const Ve = Object.keys(Le()),
                    Ge = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    We = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    $e = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ue =
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
                            'heading-H56': Ge,
                            'heading-H36': Ge,
                            'heading-H28': We,
                            'heading-H24': We,
                            'heading-H24R': We,
                            'heading-H22': We,
                            'heading-H20R': We,
                            'heading-H18': We,
                            'heading-H15': $e,
                            'heading-H14': $e,
                            'paragraph-P24': We,
                            'paragraph-P18': We,
                            'paragraph-P16': We,
                            'paragraph-P14': $e,
                            'paragraph-P12': $e,
                            'paragraph-P10': $e,
                        }),
                    ze =
                        (Object.keys(Ue),
                        (e) =>
                            e
                                ? ((e) => Ve.includes(e))(e)
                                    ? { colorClassName: Oe[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    je = Fe((e) => {
                        let t = e.text,
                            n = e.variant,
                            a = e.className,
                            r = e.color,
                            u = e.m,
                            i = e.mt,
                            l = void 0 === i ? u : i,
                            c = e.mr,
                            m = void 0 === c ? u : c,
                            _ = e.mb,
                            d = void 0 === _ ? u : _,
                            E = e.ml,
                            p = void 0 === E ? u : E,
                            g = e.style,
                            v = e.format,
                            h = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Pe);
                        const b = (0, s.useMemo)(() => {
                                const e = ze(r),
                                    t = e.colorClassName,
                                    n = e.colorStyle,
                                    a = void 0 === n ? {} : n;
                                return { computedStyle: Object.assign({}, g, a), colorClassName: t };
                            }, [g, r]),
                            A = b.computedStyle,
                            C = b.colorClassName;
                        return o().createElement(
                            ke,
                            He(
                                {
                                    className: f()(Oe.base, n && Oe[n], C, a),
                                    style: A,
                                    mt: !0 === l ? Ue[n || 'paragraph-P16'].mt : l,
                                    mr: !0 === m ? Ue[n || 'paragraph-P16'].mr : m,
                                    mb: !0 === d ? Ue[n || 'paragraph-P16'].mb : d,
                                    ml: !0 === p ? Ue[n || 'paragraph-P16'].ml : p,
                                },
                                h,
                            ),
                            void 0 !== v ? o().createElement(Re, He({}, v, { text: t })) : t,
                        );
                    }),
                    qe = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Ye = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    Xe = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Qe = (e) =>
                        Xe
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let n = Ye.length - 1; n >= 0; n--)
                                      for (; e >= Ye[n]; ) (t += qe[n]), (e -= Ye[n]);
                                  return t;
                              })(e);
                let Ze, Ke, Je, et, tt, nt, at;
                var rt, ut;
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
                        (e.Entitlements = 'entitlements'),
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
                        (e.NewYearToyFragments = 'nyToyFragments'),
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
                        (e.LootBoxToken = 'lootBoxToken');
                })(Ze || (Ze = {})),
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
                    })(Ke || (Ke = {})),
                    ((ut = Je || (Je = {})).Big = 'big'),
                    (ut.Small = 'small'),
                    (ut.Mini = 'mini'),
                    (ut.S600x450 = 's600x450'),
                    (ut.S400x300 = 's400x300'),
                    (ut.S296x222 = 's296x222'),
                    (ut.S232x174 = 's232x174'),
                    (ut.S180x135 = 's180x135'),
                    (ut.S128x100 = 's128x100'),
                    (ut.S80x80 = 's80x80'),
                    (ut.S48x48 = 's48x48'),
                    ((rt = et || (et = {})).MULTI = 'multi'),
                    (rt.CURRENCY = 'currency'),
                    (rt.PREMIUM_PLUS = 'premium_plus'),
                    (rt.NUMBER = 'number'),
                    (rt.STRING = 'string'),
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
                    })(tt || (tt = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(nt || (nt = {})),
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
                    })(at || (at = {}));
                const st = (e = 1) => {
                        const t = new Error().stack;
                        let n,
                            a = R.invalid('resId');
                        return (
                            t &&
                                ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== n &&
                                    window.subViews[n] &&
                                    (a = window.subViews[n].id)),
                            { caller: n, stack: t, resId: a }
                        );
                    },
                    ot = [
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
                function it(e) {
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
                const lt = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Y.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    ct = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            u = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            m = e.ignoreMouseClick,
                            _ = void 0 !== m && m,
                            d = e.decoratorId,
                            E = void 0 === d ? 0 : d,
                            p = e.isEnabled,
                            g = void 0 === p || p,
                            v = e.targetId,
                            h = void 0 === v ? 0 : v,
                            b = e.onShow,
                            A = e.onHide,
                            C = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, ot);
                        const f = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            D = (0, s.useMemo)(() => h || st().resId, [h]),
                            w = (0, s.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (lt(n, E, { isMouseEvent: !0, on: !0, arguments: it(a) }, D),
                                    b && b(),
                                    (f.current.isVisible = !0));
                            }, [n, E, a, D, b]),
                            y = (0, s.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        lt(n, E, { on: !1 }, D),
                                        f.current.isVisible && A && A(),
                                        (f.current.isVisible = !1);
                                }
                            }, [n, E, D, A]),
                            F = (0, s.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(f.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        return (
                            (0, s.useEffect)(() => {
                                const e = f.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', F, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', F, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, s.useEffect)(() => {
                                !1 === g && y();
                            }, [g, y]),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        window.removeEventListener('mouseleave', y), y();
                                    }
                                ),
                                [y],
                            ),
                            g
                                ? (0, s.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((B = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((f.current.timeoutId = window.setTimeout(w, c ? 100 : 400)),
                                                          r && r(e),
                                                          B && B(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  y(), null == u || u(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === _ && y(), null == i || i(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === _ && y(), null == o || o(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          C,
                                      ),
                                  )
                                : t
                        );
                        var B;
                    },
                    mt = ['children'];
                function _t() {
                    return (
                        (_t =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        _t.apply(this, arguments)
                    );
                }
                const dt = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, mt);
                        return o().createElement(
                            ct,
                            _t(
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
                    },
                    Et = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function pt() {
                    return (
                        (pt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        pt.apply(this, arguments)
                    );
                }
                const gt = R.views.common.tooltip_window.simple_tooltip_content,
                    vt = (e) => {
                        let t = e.children,
                            n = e.body,
                            a = e.header,
                            r = e.note,
                            u = e.alert,
                            i = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Et);
                        const c = (0, s.useMemo)(() => {
                            const e = Object.assign({}, i, { body: n, header: a, note: r, alert: u });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [u, n, a, r, i]);
                        return o().createElement(
                            ct,
                            pt(
                                {
                                    contentId:
                                        ((m = null == i ? void 0 : i.hasHtmlContent),
                                        m ? gt.SimpleTooltipHtmlContent('resId') : gt.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var m;
                    };
                function ht() {
                    return (
                        (ht =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ht.apply(this, arguments)
                    );
                }
                const bt = ({ children: e, tooltipArgs: t, className: n }) => {
                    if (!t) return e;
                    const a = o().createElement('div', { className: n }, e);
                    if (t.header || t.body) return o().createElement(vt, t, a);
                    const r = t.contentId,
                        u = t.args,
                        s = null == u ? void 0 : u.contentId;
                    return r || s
                        ? o().createElement(ct, ht({}, t, { contentId: r || s }), a)
                        : o().createElement(dt, t, a);
                };
                class At extends o().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? Y.B3.GOLD : Y.B3.INTEGRAL;
                        const t = Y.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                At.defaultProps = { format: 'integral' };
                const Ct = [
                        Ze.Items,
                        Ze.Equipment,
                        Ze.Xp,
                        Ze.XpFactor,
                        Ze.Blueprints,
                        Ze.BlueprintsAny,
                        Ze.Goodies,
                        Ze.Berths,
                        Ze.Slots,
                        Ze.Tokens,
                        Ze.CrewSkins,
                        Ze.CrewBooks,
                        Ze.Customizations,
                        Ze.CreditsFactor,
                        Ze.TankmenXp,
                        Ze.TankmenXpFactor,
                        Ze.FreeXpFactor,
                        Ze.BattleToken,
                        Ze.Entitlements,
                        Ze.PremiumUniversal,
                        Ze.NaturalCover,
                        Ze.BpCoin,
                        Ze.BattlePassSelectToken,
                        Ze.BattlaPassFinalAchievement,
                        Ze.BattleBadge,
                        Ze.BonusX5,
                        Ze.CrewBonusX3,
                        Ze.NewYearFillers,
                        Ze.NewYearInvoice,
                        Ze.EpicSelectToken,
                        Ze.Comp7TokenWeeklyReward,
                        Ze.Comp7TokenCouponReward,
                        Ze.BattleBoosterGift,
                        Ze.NewYearFillers,
                        Ze.NewYearInvoice,
                        Ze.LootBoxToken,
                        Ze.SelectableBonus,
                    ],
                    ft = [Ze.Gold, Ze.Credits, Ze.Crystal, Ze.FreeXp, Ze.NewYearToyFragments],
                    Dt = [Ze.BattlePassPoints],
                    wt = [Ze.PremiumPlus, Ze.Premium],
                    yt = (e) =>
                        Ct.includes(e)
                            ? et.MULTI
                            : ft.includes(e)
                              ? et.CURRENCY
                              : Dt.includes(e)
                                ? et.NUMBER
                                : wt.includes(e)
                                  ? et.PREMIUM_PLUS
                                  : et.STRING,
                    Ft = ['engravings', 'backgrounds'],
                    Bt = ['engraving', 'background'],
                    St = (e, t = Je.Small) => {
                        const n = e.name,
                            a = e.type,
                            r = e.value,
                            u = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case Je.S600x450:
                                        return 'c_600x450';
                                    case Je.S400x300:
                                        return 'c_400x300';
                                    case Je.S296x222:
                                        return 'c_296x222';
                                    case Je.S232x174:
                                        return 'c_232x174';
                                    case Je.Big:
                                        return 'c_80x80';
                                    case Je.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (n) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_${r}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_plus_${r}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${r}`;
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
                                        case Je.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case Je.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                                    }
                                })(e, t);
                            case 'entitlements':
                                return 'big' === t
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                            case 'selectableBonus':
                            case 'lootBoxToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${u}`;
                            case 'dogTagComponents':
                                return ((e, t, n) => {
                                    const a = Ft[e];
                                    if (a) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(a),
                                            u = r.$dyn(n);
                                        return u ? `${u}` : `${r.$dyn(Bt[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, t, u);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${u}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${i}.${u}`;
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
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${i}.${u}`;
                            case 'newYearAlbumsAccess':
                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${t}.albumsAccess`;
                            case 'nyFillers':
                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${t}.fillers`;
                            case 'nyToyFragments':
                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${t}.shards`;
                            case 'newYearSlot':
                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${t}.slot`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}`;
                        }
                    },
                    Nt = (e, t, n) => {
                        const a = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            a,
                            n,
                        );
                    },
                    Mt = {
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
                    xt = ({
                        name: e,
                        image: t,
                        isPeriodic: n = !1,
                        size: a = Je.Big,
                        special: r,
                        value: u,
                        valueType: s,
                        style: i,
                        className: l,
                        classNames: c,
                        tooltipArgs: m,
                        periodicIconTooltipArgs: _,
                    }) => {
                        const d = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case tt.BATTLE_BOOSTER:
                                    case tt.BATTLE_BOOSTER_REPLACE:
                                        return nt.BATTLE_BOOSTER;
                                }
                            })(r),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case tt.BATTLE_BOOSTER:
                                        return at.BATTLE_BOOSTER;
                                    case tt.BATTLE_BOOSTER_REPLACE:
                                        return at.BATTLE_BOOSTER_REPLACE;
                                    case tt.BUILT_IN_EQUIPMENT:
                                        return at.BUILT_IN_EQUIPMENT;
                                    case tt.EQUIPMENT_PLUS:
                                        return at.EQUIPMENT_PLUS;
                                    case tt.EQUIPMENT_TROPHY_BASIC:
                                        return at.EQUIPMENT_TROPHY_BASIC;
                                    case tt.EQUIPMENT_TROPHY_UPGRADED:
                                        return at.EQUIPMENT_TROPHY_UPGRADED;
                                    case tt.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return at.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case tt.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return at.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case tt.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return at.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case tt.PROGRESSION_STYLE_UPGRADED_1:
                                        return at.PROGRESSION_STYLE_UPGRADED_1;
                                    case tt.PROGRESSION_STYLE_UPGRADED_2:
                                        return at.PROGRESSION_STYLE_UPGRADED_2;
                                    case tt.PROGRESSION_STYLE_UPGRADED_3:
                                        return at.PROGRESSION_STYLE_UPGRADED_3;
                                    case tt.PROGRESSION_STYLE_UPGRADED_4:
                                        return at.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(r),
                            p = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case et.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case et.CURRENCY:
                                    case et.NUMBER:
                                        return o().createElement(At, { format: 'integral', value: Number(e) });
                                    case et.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(u, s);
                        return o().createElement(
                            'div',
                            { className: f()(Mt.base, Mt[`base__${a}`], l), style: i },
                            o().createElement(
                                bt,
                                { tooltipArgs: m, className: Mt.tooltipWrapper },
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        'div',
                                        { className: f()(Mt.image, null == c ? void 0 : c.image) },
                                        d &&
                                            o().createElement('div', {
                                                className: f()(Mt.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${d}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            o().createElement('div', {
                                                className: f()(Mt.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        E &&
                                            o().createElement('div', {
                                                className: f()(Mt.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    p &&
                                        o().createElement(
                                            'div',
                                            {
                                                className: f()(
                                                    Mt.info,
                                                    Mt[`info__${e}`],
                                                    s === et.MULTI && Mt.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            p,
                                        ),
                                ),
                            ),
                            n &&
                                o().createElement(
                                    bt,
                                    { tooltipArgs: _ },
                                    o().createElement('div', {
                                        className: f()(Mt.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    };
                let Tt;
                var kt;
                ((kt = Tt || (Tt = {})).Tiny = 'tiny'),
                    (kt.Small = 'small'),
                    (kt.Medium = 'medium'),
                    (kt.Large = 'large'),
                    (kt.Huge = 'huge');
                const Rt = () => {
                    const e = (0, s.useContext)(g);
                    return e.extraSmall || e.small;
                };
                let It;
                !(function (e) {
                    (e.Small = 'extraSmall'), (e.Medium = 'medium'), (e.Large = 'large');
                })(It || (It = {}));
                const Lt = (e) => e.name === Vt.MarketplaceUnlock;
                let Ot, Pt, Ht, Vt;
                var Gt, Wt;
                ((Wt = Ot || (Ot = {})).Small = 'small'),
                    (Wt.Medium = 'medium'),
                    (Wt.Big = 'big'),
                    (Wt.ExtraBig = 'extraBig'),
                    (Wt.Huge = 'huge'),
                    (function (e) {
                        (e.None = 'noAnimation'),
                            (e.Default = 'defaultAnimation'),
                            (e.OnlyButton = 'onlyButtonAnimation'),
                            (e.OnlyText = 'onlyTextAnimation');
                    })(Pt || (Pt = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Big = 'Big');
                    })(Ht || (Ht = {})),
                    ((Gt = Vt || (Vt = {})).ExtraSlot = 'ny22:extraSlot'),
                    (Gt.ToyFragments = 'ny22ToyFragments'),
                    (Gt.Tman = 'tmanToken'),
                    (Gt.AchievementReward = 'dossier_achievement'),
                    (Gt.Customizations = 'customizations'),
                    (Gt.VariadicDiscount = 'variadicDiscount'),
                    (Gt.MarketplaceUnlock = 'ny25_marketplace_unlock'),
                    (Gt.LootBoxToken = 'lootBoxToken');
                const $t = [
                    'width',
                    'height',
                    'getSrcByFrame',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'loop',
                    'state',
                    'onAnimationComplete',
                ];
                function Ut() {
                    return (
                        (Ut =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ut.apply(this, arguments)
                    );
                }
                (0, s.memo)((e) => {
                    let t = e.width,
                        n = e.height,
                        a = e.getSrcByFrame,
                        r = e.frameCount,
                        u = e.onAnimate,
                        i = void 0 === u ? dn : u,
                        l = e.frameTime,
                        c = void 0 === l ? 33 : l,
                        m = e.initialFrameIndex,
                        _ = void 0 === m ? 0 : m,
                        d = e.loop,
                        E = void 0 === d || d,
                        p = e.state,
                        g = void 0 === p ? 'play' : p,
                        v = e.onAnimationComplete,
                        h = void 0 === v ? dn : v,
                        b = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, $t);
                    const A = (0, s.useRef)(null);
                    return (
                        (0, s.useEffect)(() => {
                            const e = A.current;
                            if (!e) return;
                            const u = r - 1,
                                s = e.getContext('2d'),
                                o = (a) => {
                                    s.clearRect(0, 0, e.width, e.height), s.drawImage(a, 0, 0, t, n);
                                };
                            if ('stop' === g) {
                                const e = a(0),
                                    t = new Image();
                                t.src = e;
                                const n = () => o(t);
                                return t.addEventListener('load', n), () => t.removeEventListener('load', n);
                            }
                            const l = ((e, t) => {
                                    const n = [];
                                    for (let a = 0; a < e; a++) {
                                        const e = new Image();
                                        (e.src = t(a)), n.push(e);
                                    }
                                    return n;
                                })(r, a),
                                m = ((e, t = 0) => {
                                    let n = t;
                                    return () => {
                                        const t = n;
                                        return (n += 1), n > e && (n = 0), t;
                                    };
                                })(u, _),
                                d = setInterval(() => {
                                    const e = m(),
                                        t = l[e];
                                    o(l[e]), i(e, t), e === u && (h(), E || clearInterval(d));
                                }, c);
                            return () => clearInterval(d);
                        }, [r, c, a, n, _, E, i, h, g, t]),
                        o().createElement('canvas', Ut({}, b, { width: t, height: n, ref: A }))
                    );
                });
                const zt = ['children', 'tooltipType', 'wrap'],
                    jt = ['contentId'];
                function qt() {
                    return (
                        (qt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        qt.apply(this, arguments)
                    );
                }
                function Yt(e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        u = Object.keys(e);
                    for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                }
                let Xt;
                !(function (e) {
                    (e.Base = 'base'), (e.Backport = 'backport'), (e.Simple = 'simple');
                })(Xt || (Xt = {}));
                const Qt = (e) => {
                    let t = e.children,
                        n = e.tooltipType,
                        a = e.wrap,
                        r = void 0 !== a && a,
                        u = Yt(e, zt);
                    if (!u) return t;
                    const s = r && (u.isEnabled || void 0 === u.isEnabled) ? o().createElement('div', null, t) : t,
                        i = u.contentId,
                        l = Yt(u, jt);
                    switch (n) {
                        case Xt.Base:
                            return (
                                !i && console.error('`contentId` field is required for a base Tooltip'),
                                i ? o().createElement(ct, qt({}, l, { contentId: i }), s) : s
                            );
                        case Xt.Simple:
                            return o().createElement(vt, l, s);
                        case Xt.Backport:
                            return o().createElement(dt, l, s);
                        default:
                            return o().createElement(bt, { tooltipArgs: u }, s);
                    }
                };
                var Zt = n(1856);
                const Kt = (e) => {
                        (0, s.useEffect)(e, []);
                    },
                    Jt = {
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
                var en;
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(en || (en = {}));
                const tn = ['__left', '__right', '__top', '__bottom'],
                    nn =
                        ((0, s.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: n, customStyles: a = {} }, r) => {
                                const i = (0, s.useRef)(null),
                                    l = (0, s.useRef)(null),
                                    c = (0, s.useRef)(null),
                                    m = (0, s.useState)(window.decorator && window.decorator.directionType),
                                    _ = m[0],
                                    d = m[1],
                                    E = (0, s.useCallback)(() => {
                                        G.$.playClick(), u.O.view.sendEvent.close();
                                    }, []),
                                    p = (0, s.useCallback)(() => {
                                        G.$.playHighlight();
                                    }, []),
                                    g = f()(Jt.arrow, Jt[`arrow${tn[_]}`]);
                                Kt(
                                    () => (
                                        u.O.client.events.mouse.enableOutside(),
                                        u.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (n ? n() : u.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const v = (0, s.useCallback)(
                                        (e) => {
                                            let t = e.target;
                                            do {
                                                if (t === i.current || t === c.current) return;
                                                t = t.parentNode;
                                            } while (t);
                                            const a = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = u.O.client.getMouseGlobalPosition(),
                                                    t = ![a.boundX, a.boundY, a.boundWidth, a.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    n =
                                                        e.x < a.boundX ||
                                                        e.x > a.boundX + a.boundWidth ||
                                                        e.y > a.boundY + a.boundHeight ||
                                                        e.y < a.boundY;
                                                if (t && !n) return;
                                            }
                                            n ? n() : u.O.view.sendEvent.close('popover');
                                        },
                                        [i, c, n],
                                    ),
                                    h = (0, s.useCallback)(
                                        () => (
                                            u.O.view.freezeTextureBeforeResize(),
                                            (0, Zt.v)(() => {
                                                if (l.current) {
                                                    const e = l.current.scrollWidth,
                                                        t = l.current.scrollHeight;
                                                    u.O.view.resize(e, t), d(window.decorator.directionType);
                                                }
                                            })
                                        ),
                                        [],
                                    );
                                return (
                                    (0, s.useImperativeHandle)(r, () => ({ updateSize: h })),
                                    Kt(() => {
                                        u.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, s.useEffect)(() => {
                                        document.addEventListener('mousedown', v, { capture: !0 });
                                        const e = ((e) => {
                                            let t = !1;
                                            return {
                                                promise: new Promise((n, a) => {
                                                    e.then((e) => !t && n(e)).catch((e) => !t && a(e));
                                                }),
                                                cancel() {
                                                    t = !0;
                                                },
                                            };
                                        })((0, Y.Eu)());
                                        return (
                                            !t && e.promise.then(() => h()),
                                            () => {
                                                e.cancel(), document.removeEventListener('mousedown', v);
                                            }
                                        );
                                    }, [h, v, t]),
                                    o().createElement(
                                        'div',
                                        { className: Jt.base, ref: l },
                                        o().createElement(
                                            'div',
                                            { className: Jt.decorator },
                                            o().createElement(
                                                'div',
                                                { className: Jt.content, ref: i },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    o().createElement(
                                                        vt,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        o().createElement('div', {
                                                            className: Jt.closeBtn,
                                                            onClick: E,
                                                            onMouseEnter: p,
                                                            ref: c,
                                                        }),
                                                    ),
                                            ),
                                            o().createElement('div', { className: g, style: a.arrow }),
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
                function an() {
                    return (
                        (an =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        an.apply(this, arguments)
                    );
                }
                const rn = (e) => {
                        let t = e.contentId,
                            n = e.decoratorId,
                            a = e.direction,
                            r = void 0 === a ? en.Top : a,
                            u = e.targetId,
                            i = e.args,
                            l = e.onClick,
                            c = e.children,
                            m = e.isEnabled,
                            _ = void 0 === m || m,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, nn);
                        const E = (0, s.useRef)(null),
                            p = (0, s.useCallback)(() => {
                                if ((0, Y.wU)()) return (0, Y.SW)();
                                E.current && (0, Y.P3)(t, r, E.current, n, u, i);
                            }, [t, r, i, n, u]);
                        return o().createElement(
                            'div',
                            an(
                                {
                                    ref: E,
                                    onClick:
                                        ((g = c.props.onClick),
                                        (e) => {
                                            _ && (p(), l && l(e), g && g(e));
                                        }),
                                },
                                d,
                            ),
                            c,
                        );
                        var g;
                    },
                    un = ['children'];
                function sn() {
                    return (
                        (sn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        sn.apply(this, arguments)
                    );
                }
                const on = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, un);
                    return o().createElement(
                        rn,
                        sn(
                            {
                                decoratorId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverWindow('resId'),
                                contentId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverContent('resId'),
                            },
                            n,
                        ),
                        t,
                    );
                };
                n(1187);
                let ln, cn, mn;
                R.strings.ny.levelUpView.rewards,
                    (function (e) {
                        (e.ExtraSmall = 'extraSmall'),
                            (e.Small = 'small'),
                            (e.Medium = 'medium'),
                            (e.Large = 'large'),
                            (e.ExtraLarge = 'extraLarge');
                    })(ln || (ln = {})),
                    (function (e) {
                        (e.Big = 'big'), (e.Small = 'small');
                    })(cn || (cn = {})),
                    (function (e) {
                        (e.Ru = 'RU'),
                            (e.Eu = 'EU'),
                            (e.Na = 'NA'),
                            (e.Asia = 'ASIA'),
                            (e.Cn = 'CN'),
                            (e.Kr = 'KR'),
                            (e.Ct = 'CT'),
                            (e.St = 'ST'),
                            (e.QA = 'QA'),
                            (e.Dev = 'DEV'),
                            (e.Sb = 'SB');
                    })(mn || (mn = {}));
                const _n = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'],
                    dn = () => {},
                    En = [J.CITY, J.PET, J.MACHINE, J.TASKS];
                let pn;
                !(function (e) {
                    (e.Mandarin = 'ny25_mandarin'), (e.NyGiftMachineToken = 'ny25Token'), (e.Gold = 'gold');
                })(pn || (pn = {}));
                const gn = {
                        base: 'NyCurrency_base_30',
                        container: 'NyCurrency_container_b9',
                        icon: 'NyCurrency_icon_1d',
                        icon__left: 'NyCurrency_icon__left_79',
                        icon__right: 'NyCurrency_icon__right_6f',
                        icon__medium: 'NyCurrency_icon__medium_63',
                        icon__c_48x48: 'NyCurrency_icon__c_48x48_74',
                        icon__c_64x64: 'NyCurrency_icon__c_64x64_60',
                        value: 'NyCurrency_value_e4',
                        value__medium: 'NyCurrency_value__medium_61',
                        value__c_48x48: 'NyCurrency_value__c_48x48_5c',
                        value__c_64x64: 'NyCurrency_value__c_64x64_71',
                        value__ny25_mandarin: 'NyCurrency_value__ny25_mandarin_81',
                        value__ny25Token: 'NyCurrency_value__ny25Token_94',
                        value__freeXP: 'NyCurrency_value__freeXP_43',
                        value__credits: 'NyCurrency_value__credits_d7',
                        value__gold: 'NyCurrency_value__gold_07',
                        value__xp: 'NyCurrency_value__xp_d0',
                        value__crystal: 'NyCurrency_value__crystal_ba',
                        value__equipCoin: 'NyCurrency_value__equipCoin_f1',
                        value__notAvailable__small: 'NyCurrency_value__notAvailable__small_51',
                        value__notAvailable__medium: 'NyCurrency_value__notAvailable__medium_9d',
                        value__notAvailable__c_48x48: 'NyCurrency_value__notAvailable__c_48x48_3c',
                        value__notAvailable__c_64x64: 'NyCurrency_value__notAvailable__c_64x64_b3',
                    },
                    vn = R.strings.ny.currencyPanel;
                let hn, bn;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'c_48x48'), (e.ExtraLarge = 'c_64x64');
                })(hn || (hn = {})),
                    (function (e) {
                        (e.Left = 'left'), (e.Right = 'right');
                    })(bn || (bn = {}));
                const An = (0, s.memo)(
                        ({
                            value: e,
                            iconPosition: t = bn.Left,
                            size: n = hn.Small,
                            type: a = pn.Mandarin,
                            enableClickSound: r = !0,
                            enableHoverSound: u = !0,
                            onClick: s,
                            onHover: i,
                            classNames: l,
                            tooltipConfig: c,
                            isCurrencyAvailable: m = !0,
                        }) => {
                            const _ = {
                                    backgroundImage: `url(R.images.new_year.gui.maps.icons.newYear.common.currency.${n}.${a})`,
                                },
                                d = f()(
                                    gn.value,
                                    gn[`value__${n}`],
                                    gn[`value__${a}`],
                                    !m && gn[`value__notAvailable__${n}`],
                                    null == l ? void 0 : l.value,
                                ),
                                E = {
                                    [bn.Left]: o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', {
                                            className: f()(
                                                gn.icon,
                                                gn[`icon__${n}`],
                                                gn.icon__left,
                                                null == l ? void 0 : l.icon,
                                            ),
                                            style: _,
                                        }),
                                        o().createElement(je, {
                                            text: m
                                                ? o().createElement(At, { format: 'integral', value: Number(e) })
                                                : vn.currency.notAvailable(),
                                            className: d,
                                        }),
                                    ),
                                    [bn.Right]: o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(je, {
                                            text: m
                                                ? o().createElement(At, { format: 'integral', value: Number(e) })
                                                : vn.currency.notAvailable(),
                                            className: d,
                                        }),
                                        o().createElement('div', {
                                            className: f()(
                                                gn.icon,
                                                gn[`icon__${n}`],
                                                gn.icon__right,
                                                null == l ? void 0 : l.icon,
                                            ),
                                            style: _,
                                        }),
                                    ),
                                };
                            return o().createElement(
                                Qt,
                                c,
                                o().createElement(
                                    'div',
                                    {
                                        className: f()(gn.base, null == l ? void 0 : l.base),
                                        onClick: () => {
                                            r && G.$.playClick(), s && s();
                                        },
                                        onMouseEnter: () => {
                                            u && G.$.playHighlight(), i && i();
                                        },
                                    },
                                    o().createElement(
                                        'div',
                                        { className: f()(gn.container, null == l ? void 0 : l.container) },
                                        E[t],
                                    ),
                                ),
                            );
                        },
                    ),
                    Cn = R.views.new_year.lobby.new_year.tooltips,
                    fn = (e, t) => ({
                        contentId: Cn.NyCurrencyTooltip('resId'),
                        args: { currency: e, isCurrencyAvailable: t },
                    }),
                    Dn = (0, s.memo)(({ currencyItems: e, onCurrencyItemClick: t, classNames: n }) => {
                        const a = N().mediaSize >= y.Medium ? hn.Medium : hn.Small,
                            r = f()('CurrencyContainer_base_c5', null == n ? void 0 : n.base),
                            u = (0, s.useCallback)(
                                (e) => () => {
                                    null == t || t({ currency: e });
                                },
                                [t],
                            );
                        return o().createElement(
                            'div',
                            { className: r },
                            e.map((e) =>
                                o().createElement(
                                    'div',
                                    { className: 'CurrencyContainer_currency_da', key: e.currency.value },
                                    e.allowClick &&
                                        o().createElement('div', { className: 'CurrencyContainer_currencyBlink_72' }),
                                    o().createElement(An, {
                                        value: e.amount,
                                        type: e.currency.value,
                                        size: a,
                                        classNames: {
                                            base: f()(
                                                'CurrencyContainer_currencyBlock_b8',
                                                e.allowClick && 'CurrencyContainer_currencyBlock__allowClick_80',
                                            ),
                                        },
                                        tooltipConfig: fn(e.currency.value, e.isCurrencyAvailable),
                                        onClick: e.allowClick ? u(e.currency.value) : void 0,
                                        isCurrencyAvailable: e.isCurrencyAvailable,
                                    }),
                                ),
                            ),
                        );
                    });
                function wn() {}
                function yn(e) {
                    return e;
                }
                function Fn() {
                    return !1;
                }
                console.log;
                var Bn = n(9174);
                function Sn(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const Nn = (e) => (0 === e ? window : window.subViews.get(e));
                function Mn(e, t) {
                    var n;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
                }
                function xn(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, a) => t(null == e ? void 0 : e.value, n, a));
                }
                var Tn = n(3946);
                let kn, Rn, In;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(kn || (kn = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin');
                    })(Rn || (Rn = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(In || (In = {})),
                    pn.Mandarin,
                    pn.NyGiftMachineToken,
                    Rn.gold;
                const Ln = [
                        {
                            value: {
                                hasToysHint: !1,
                                slots: {
                                    items: [
                                        {
                                            value: {
                                                isSelected: !1,
                                                isEmpty: !0,
                                                isBetterAvailable: !0,
                                                type: 'top',
                                                icon: null,
                                                rank: 1,
                                                toyId: -1,
                                                slotId: 0,
                                            },
                                        },
                                        {
                                            value: {
                                                isSelected: !1,
                                                isEmpty: !0,
                                                isBetterAvailable: !0,
                                                type: 'garland_fir',
                                                icon: null,
                                                rank: 1,
                                                toyId: -1,
                                                slotId: 8,
                                            },
                                        },
                                        {
                                            value: {
                                                isSelected: !1,
                                                isEmpty: !0,
                                                isBetterAvailable: !0,
                                                type: 'ball',
                                                icon: null,
                                                rank: 1,
                                                toyId: -1,
                                                slotId: 6,
                                            },
                                        },
                                        {
                                            value: {
                                                isSelected: !1,
                                                isEmpty: !0,
                                                isBetterAvailable: !0,
                                                type: 'floor',
                                                icon: null,
                                                rank: 1,
                                                toyId: -1,
                                                slotId: 9,
                                            },
                                        },
                                    ],
                                },
                            },
                        },
                    ],
                    On = ((e, t) => {
                        const n = (0, s.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: r, mocks: i }) {
                                const l = (0, s.useRef)([]),
                                    c = (e, n, a) => {
                                        var r;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = Nn,
                                                context: a = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function s(e, t = 0) {
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
                                                const o = (e) => {
                                                    const r = n(t),
                                                        u = a.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? u
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, u);
                                                };
                                                return {
                                                    subscribe: (n, s) => {
                                                        const i = 'string' == typeof s ? `${a}.${s}` : a,
                                                            l = u.O.view.addModelObserver(i, t, !0);
                                                        return r.set(l, n), e && n(o(s)), l;
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, t) => {
                                                        const n = o(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = o(e);
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
                                                                                    return Sn(e, t);
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
                                                                                          ? Sn(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        n && (e = n);
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
                                                            !(e = n()).done;

                                                        )
                                                            s(e.value, t);
                                                    },
                                                    unsubscribe: s,
                                                };
                                            })(n),
                                            o =
                                                'real' === e
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            i = (t) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(t)) : o.readByPath(t),
                                            c = (e) => l.current.push(e),
                                            m = (({ observableModel: e }) => {
                                                const t = {
                                                        root: e.object(),
                                                        backButton: e.object('backButton'),
                                                        cityModel: e.object('cityModel'),
                                                        lootboxEntry: e.object('cityModel.lootBox'),
                                                        objectView: e.primitives(
                                                            ['prevObject', 'currentObject', 'nextObject'],
                                                            'cityModel.objectView',
                                                        ),
                                                        currentSubModel: e.primitives(['currentSubModel'], 'cityModel'),
                                                        groupSlotsItemsRenderers: e.array('cityModel.groupSlots.items'),
                                                        collectionsModel: e.object('collectionsModel'),
                                                        mainMenu: e.object('mainMenu'),
                                                        itemsMenu: e.array('mainMenu.itemsMenu'),
                                                        sidebar: e.object('sidebar'),
                                                        infoModel: e.object('infoModel'),
                                                        shardsModel: e.object('shardsModel'),
                                                        surpriseMachineModel: e.object('surpriseMachineModel'),
                                                        rewardsModel: e.object('rewardsModel'),
                                                        questsModel: e.object('questsModel'),
                                                        battleMode: e.array('questsModel.battleMode'),
                                                        dailyQuests: e.array('questsModel.dailyQuests'),
                                                        weeklyQuests: e.array('questsModel.weeklyQuests'),
                                                        progressionLevels: e.array('rewardsModel.progressionLevels'),
                                                        levelsRewardRenderers: e.array(
                                                            'rewardsModel.levelsRewards.rewardRenderers.items',
                                                        ),
                                                        giftSystemModel: e.object('giftSystemModel'),
                                                        vehiclesModel: e.object('vehiclesModel'),
                                                        currencyPanelItems: e.array('currencyPanel.items'),
                                                        customizationZonesModel: e.array(
                                                            'cityModel.objectsOverview.panel.customizationZones',
                                                        ),
                                                        customizationObjectModel: e.object(
                                                            'cityModel.objectView.customizationZoneObject',
                                                        ),
                                                        customizationHeaderTitle: e.object(
                                                            'cityModel.objectView.customizationZoneObject.customizationZone',
                                                        ),
                                                        customizationObjectCurrencyModel: e.object(
                                                            'cityModel.objectView.customizationZoneObject.currencyType',
                                                        ),
                                                        hoverMarker: e.array('cityModel.objectsOverview.hoveredObject'),
                                                        firMarker: e.object('cityModel.firMarker'),
                                                        lightsMarker: e.object('cityModel.lightsMarker'),
                                                        installationsMarker: e.object('cityModel.installationsMarker'),
                                                        fairMarker: e.object('cityModel.fairMarker'),
                                                        skatingMarker: e.object('cityModel.skatingMarker'),
                                                        attractionsMarker: e.object('cityModel.attractionsMarker'),
                                                        isFadedView: Bn.LO.box(!1),
                                                        currentViewType: Bn.LO.box(null),
                                                        petModel: e.object('petModel'),
                                                        petSlots: e.array('petModel.groupSlots.items'),
                                                    },
                                                    n = (e) => xn(e, yn),
                                                    a = (0, Tn.Om)(() => n(t.itemsMenu.get()), { equals: Fn }),
                                                    r = (0, Tn.Om)(() => n(t.levelsRewardRenderers.get()), {
                                                        equals: Fn,
                                                    }),
                                                    u = (0, Tn.Om)(() => r().find((e) => e.isCurrentLevel), {
                                                        equals: Fn,
                                                    }),
                                                    s = (0, Tn.Om)(() => n(t.groupSlotsItemsRenderers.get()), {
                                                        equals: Fn,
                                                    }),
                                                    o = (0, Tn.Om)(
                                                        (e) => {
                                                            const t = Mn(r(), e);
                                                            if (t) return xn(t.rewardsGroup.items, yn);
                                                        },
                                                        { equals: Fn },
                                                    ),
                                                    i = (0, Tn.Om)(
                                                        (e) => {
                                                            const t = Mn(s(), e);
                                                            if (t)
                                                                return xn(t.slots.items, (e) => Object.assign({}, e));
                                                        },
                                                        { equals: Fn },
                                                    ),
                                                    l = (0, Tn.Om)(() => n(t.progressionLevels.get()), { equals: Fn }),
                                                    c = (0, Tn.Om)(() => n(t.dailyQuests.get()), { equals: Fn }),
                                                    m = (0, Tn.Om)(() => n(t.weeklyQuests.get()), { equals: Fn }),
                                                    _ = (0, Tn.Om)(() => n(t.battleMode.get()), { equals: Fn }),
                                                    d = (0, Tn.Om)(() => n(t.customizationZonesModel.get()), {
                                                        equals: Fn,
                                                    }),
                                                    E = (0, Tn.Om)(() => n(t.currencyPanelItems.get()), { equals: Fn }),
                                                    p = (0, Tn.Om)(
                                                        (e) => E().find((t) => t.currency.value === e).amount,
                                                        { equals: Fn },
                                                    ),
                                                    g = (0, Tn.Om)(() => n(Ln), { equals: Fn }),
                                                    v = (0, Tn.Om)((e) => t[e].get(), { equals: Fn }),
                                                    h = (0, Tn.Om)(() => n(t.petSlots.get()), { equals: Fn }),
                                                    b = (0, Tn.Om)(
                                                        (e) => {
                                                            const t = Mn(h(), e);
                                                            if (t)
                                                                return xn(t.slots.items, (e) => Object.assign({}, e));
                                                        },
                                                        { equals: Fn },
                                                    );
                                                return Object.assign({}, t, {
                                                    computes: {
                                                        getItemsMenu: a,
                                                        levelsRewardRenderers: r,
                                                        getLevelRewardsGroup: o,
                                                        getProgressionLevels: l,
                                                        getBattleModes: _,
                                                        getDailyQuests: c,
                                                        getWeeklyQuests: m,
                                                        getCurrencyItems: E,
                                                        getPetToys: g,
                                                        getCurrentLevel: u,
                                                        getCustomizationZones: d,
                                                        getCurrencyCount: p,
                                                        getGroupSlotsItems: s,
                                                        getMarkerParams: v,
                                                        getSlotsItemsGroup: i,
                                                        getPetSlotsItemsGroup: b,
                                                        getPetSlotsItems: h,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: i,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (t, n) => {
                                                        const a = null != n ? n : i(t),
                                                            r = Bn.LO.box(a, { equals: Fn });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, Bn.aD)((e) => r.set(e)),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (t, n) => {
                                                        const a = null != n ? n : i(t),
                                                            r = Bn.LO.box(a, { equals: Fn });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, Bn.aD)((e) => r.set(e)),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (t, n) => {
                                                        const a = i(n);
                                                        if (Array.isArray(t)) {
                                                            const r = t.reduce(
                                                                (e, t) => ((e[t] = Bn.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, Bn.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                r[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = t,
                                                                u = Object.entries(r),
                                                                s = u.reduce(
                                                                    (e, [t, n]) => ((e[n] = Bn.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, Bn.aD)((e) => {
                                                                            u.forEach(([t, n]) => {
                                                                                s[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            _ = { mode: e, model: m, externalModel: o, cleanup: c };
                                        return {
                                            model: m,
                                            controls: 'mocks' === e && a ? a.controls(_) : t(_),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    m = (0, s.useRef)(!1),
                                    _ = (0, s.useState)(e),
                                    d = _[0],
                                    E = _[1],
                                    p = (0, s.useState)(() => c(e, a, i)),
                                    g = p[0],
                                    v = p[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        m.current ? v(c(d, a, i)) : (m.current = !0);
                                    }, [i, d, a]),
                                    (0, s.useEffect)(() => {
                                        E(e);
                                    }, [e]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            g.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [g],
                                    ),
                                    o().createElement(n.Provider, { value: g }, r)
                                );
                            },
                            () => (0, s.useContext)(n),
                        ];
                    })(0, ({ model: e, externalModel: t }) => {
                        const n = (function (e) {
                            const t = {};
                            for (const n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    const a = e[n];
                                    t[n] = (0, Bn.aD)(a);
                                }
                            return t;
                        })({
                            onFadedViewChange: (t) => e.isFadedView.set(t),
                            onViewChange: (t) => e.currentViewType.set(t),
                        });
                        return Object.assign({}, n, {
                            onClose: t.createCallbackNoArgs('onClose'),
                            onFadeInDone: t.createCallbackNoArgs('onFadeInDone'),
                            onLootBoxEntryPointClick: t.createCallbackNoArgs(
                                'cityModel.lootBox.onLootBoxEntryPointClick',
                            ),
                            onGladeMoveSpace: t.createCallback(
                                ({ dx: e, dy: t, dz: n }) => ({ dx: e, dy: t, dz: n }),
                                'cityModel.onMoveSpace',
                            ),
                            onGladeMouseOver3dScene: t.createCallback(
                                ({ isOver3dScene: e }) => ({ isOver3dScene: e }),
                                'cityModel.onMouseOver3dScene',
                            ),
                            onMachineMoveSpace: t.createCallback(
                                ({ dx: e, dy: t, dz: n }) => ({ dx: e, dy: t, dz: n }),
                                'surpriseMachineModel.onMoveSpace',
                            ),
                            onMachineMouseOver3dScene: t.createCallback(
                                ({ isOver3dScene: e }) => ({ isOver3dScene: e }),
                                'surpriseMachineModel.onMouseOver3dScene',
                            ),
                            onPetMoveSpace: t.createCallback(
                                ({ dx: e, dy: t, dz: n }) => ({ dx: e, dy: t, dz: n }),
                                'petModel.onMoveSpace',
                            ),
                            onPetMouseOver3dScene: t.createCallback(
                                ({ isOver3dScene: e }) => ({ isOver3dScene: e }),
                                'petModel.onMouseOver3dScene',
                            ),
                            onBack: t.createCallbackNoArgs('backButton.onBack'),
                            onSwitchContent: t.createCallback(
                                ({ view: e }) => ({ view: e }),
                                'mainMenu.onSwitchContent',
                            ),
                            onRewardsFadeInDone: t.createCallbackNoArgs('rewardsModel.onFadeInDone'),
                            onGotoStore: t.createCallbackNoArgs('rewardsModel.onGotoStore'),
                            onQuestHover: t.createCallback(
                                ({ questId: e }) => ({ questId: e }),
                                'questsModel.onQuestHover',
                            ),
                            onReplayVideo: t.createCallbackNoArgs('questsModel.onReplayVideo'),
                            onCurrencyItemClick: t.createCallback(
                                ({ currency: e }) => ({ currency: e }),
                                'currencyPanel.onItemClick',
                            ),
                            onGoToCustomizationObject: t.createCallback(
                                ({ objectName: e }) => ({ objectName: e }),
                                'cityModel.objectView.onGoToCustomizationObject',
                            ),
                            onCustomizationObjectClose: t.createCallbackNoArgs('cityModel.objectView.onClose'),
                            onSurpriceMachineChangeView: t.createCallback(
                                ({ viewType: e }) => ({ viewType: e }),
                                'surpriseMachineModel.onViewChange',
                            ),
                            onHoverSlot: t.createCallback(({ slotId: e }) => ({ slotId: e }), 'cityModel.onHoverSlot'),
                            onHoverOutSlot: t.createCallback(
                                ({ slotId: e }) => ({ slotId: e }),
                                'cityModel.onHoverOutSlot',
                            ),
                            onLevelUp: t.createCallback(
                                ({ customizationZone: e }) => ({ customizationZone: e }),
                                'cityModel.onLevelUp',
                            ),
                            onSelectVehicleDiscount: t.createCallbackNoArgs('rewardsModel.onSelectVehicleDiscount'),
                            onVideoFinished: t.createCallbackNoArgs('questsModel.onVideoFinished'),
                            onCustomizationZoneMove: t.createCallback(
                                ({ customizationZone: e }) => ({ customizationZone: e }),
                                'cityModel.objectsOverview.panel.onClick',
                            ),
                            onMachineBuyBtnClick: t.createCallback(
                                ({ count: e }) => ({ count: e }),
                                'surpriseMachineModel.onBuyBtnClick',
                            ),
                            onMachineGoToQuests: t.createCallbackNoArgs('surpriseMachineModel.goToQuest'),
                            onGoToMachineMain: t.createCallbackNoArgs('surpriseMachineModel.goToMachineMain'),
                            onGoToMachineBuyTokens: t.createCallbackNoArgs('surpriseMachineModel.goToBuyTokens'),
                            onHoverMarker: t.createCallback(
                                ({ markerName: e }) => ({ markerName: e }),
                                'cityModel.onHoverMarker',
                            ),
                            onHoverOutMarker: t.createCallback(
                                ({ markerName: e }) => ({ markerName: e }),
                                'cityModel.onHoverOutMarker',
                            ),
                            onMouseOver3dScene: t.createCallback(
                                ({ isOver3dScene: e }) => ({ isOver3dScene: e }),
                                'cityModel.onMouseOver3dScene',
                            ),
                            onObjectHover: t.createCallback(
                                ({ customizationZoneName: e }) => ({ customizationZoneName: e }),
                                'cityModel.objectsOverview.onObjectHover',
                            ),
                            onObjectHoverOut: t.createCallback(
                                ({ customizationZoneName: e }) => ({ customizationZoneName: e }),
                                'cityModel.objectsOverview.onObjectHoverOut',
                            ),
                            onCloseRewardVehicle: t.createCallbackNoArgs(
                                'surpriseMachineModel.vehicleReward.closeRewardVehicle',
                            ),
                            onShowVehicle: t.createCallbackNoArgs('surpriseMachineModel.vehicleReward.showVehicle'),
                        });
                    }),
                    Pn = On[0],
                    Hn = On[1],
                    Vn = {
                        base: 'Widget_base_70',
                        level: 'Widget_level_44',
                        base__disabled: 'Widget_base__disabled_78',
                        levelGradient: 'Widget_levelGradient_1e',
                        progressWrapper: 'Widget_progressWrapper_06',
                        progress: 'Widget_progress_ab',
                        progressShadow: 'Widget_progressShadow_73',
                        snowAnimation: 'Widget_snowAnimation_23',
                        frame: 'Widget_frame_4a',
                        fallenSnow: 'Widget_fallenSnow_05',
                        frame__fast: 'Widget_frame__fast_52',
                        frame__slow: 'Widget_frame__slow_2c',
                        blinkWrapper: 'Widget_blinkWrapper_70',
                        blinkInner: 'Widget_blinkInner_85',
                        blinkAnimation: 'Widget_blinkAnimation_da',
                        blink: 'Widget_blink_7b',
                    },
                    Gn = ({ level: e, levelRoman: t, isEnabled: n, currentPoints: a, nextPoints: r }) => {
                        const u = (0, s.useState)(0),
                            i = u[0],
                            l = u[1],
                            c = (0, s.useRef)(null),
                            m = N().mediaSize,
                            _ = 10 === e;
                        return (
                            (0, s.useEffect)(
                                () =>
                                    (0, Zt.v)(() => {
                                        var e;
                                        c.current && l((null == (e = c.current) ? void 0 : e.offsetHeight) / 2);
                                    }),
                                [m],
                            ),
                            o().createElement(
                                'div',
                                { className: f()(Vn.base, _ && Vn.base__final, !n && Vn.base__disabled) },
                                n &&
                                    o().createElement(
                                        'div',
                                        { className: Vn.snowAnimation },
                                        o().createElement('div', { className: f()(Vn.frame, Vn.frame__fast) }),
                                        o().createElement('div', { className: f()(Vn.frame, Vn.frame__slow) }),
                                    ),
                                o().createElement(je, { text: t, className: Vn.level }),
                                o().createElement(je, { text: t, className: Vn.levelGradient }),
                                o().createElement(
                                    'div',
                                    { className: Vn.progressWrapper, style: { maskSize: `100% ${(a / r) * 100}%` } },
                                    o().createElement('div', { className: Vn.progress, ref: c }),
                                    o().createElement('div', {
                                        className: Vn.progressShadow,
                                        style: { top: i * (a / r) - 12 + 'rem' },
                                    }),
                                ),
                                n &&
                                    o().createElement(
                                        'div',
                                        { className: Vn.blinkWrapper },
                                        o().createElement(
                                            'div',
                                            { className: Vn.blinkInner },
                                            o().createElement('div', { className: Vn.blink }),
                                        ),
                                    ),
                            )
                        );
                    },
                    Wn = 'MainMenu_frame_ba',
                    $n = {
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
                    Un = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function zn() {
                    return (
                        (zn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        zn.apply(this, arguments)
                    );
                }
                const jn = (e) => {
                    let t = e.size,
                        n = e.value,
                        a = e.isEmpty,
                        r = e.fadeInAnimation,
                        u = e.hide,
                        s = e.maximumNumber,
                        i = e.className,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, Un);
                    const c = a ? null : n,
                        m = 'string' == typeof c;
                    if ((c && !m && c < 0) || 0 === c) return null;
                    const _ = c && !m && c > s,
                        d = f()(
                            $n.base,
                            $n[`base__${t}`],
                            r && $n.base__animated,
                            u && $n.base__hidden,
                            !c && $n.base__pattern,
                            a && $n.base__empty,
                            i,
                        );
                    return o().createElement(
                        'div',
                        zn({ className: d }, l),
                        o().createElement('div', { className: $n.bg }),
                        o().createElement('div', { className: $n.pattern }),
                        o().createElement(
                            'div',
                            { className: f()($n.value, m && $n.value__text) },
                            _ ? s : c,
                            _ && o().createElement('span', { className: $n.plus }, '+'),
                        ),
                    );
                };
                jn.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                let qn;
                !(function (e) {
                    (e.SHORT_DATE = 'short-date'),
                        (e.SHORT_TIME = 'short-time'),
                        (e.SHORT_DATE_TIME = 'short-date-time'),
                        (e.FULL_DATE = 'full-date'),
                        (e.FULL_DATE_TIME = 'full-date-time'),
                        (e.MONTH = 'month'),
                        (e.MONTH_DATE = 'month-date'),
                        (e.DATE_MONTH = 'date-month'),
                        (e.MONTH_YEAR = 'month-year'),
                        (e.WEEK_DAY = 'week-day'),
                        (e.WEEK_DAY_TIME = 'week-day-time'),
                        (e.YEAR = 'year'),
                        (e.DATE_YEAR = 'date-year');
                })(qn || (qn = {}));
                Date.now();
                const Yn = () => {},
                    Xn = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    Qn = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    Zn = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    Kn = Y.Sw.instance;
                let Jn;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Jn || (Jn = {}));
                const ea = (e = 'model', t = Jn.Deep) => {
                        const n = (0, s.useState)(0),
                            a = (n[0], n[1]),
                            r = (0, s.useMemo)(() => st(), []),
                            u = r.caller,
                            o = r.resId,
                            i = (0, s.useMemo)(
                                () => (window.__feature && window.__feature !== u ? `subViews.${u}.${e}` : e),
                                [u, e],
                            ),
                            l = (0, s.useState)(() =>
                                ((e) => {
                                    const t = Xn(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return Qn(t) ? t.value : t;
                                })(
                                    ((e) =>
                                        ((e, t) =>
                                            e.split('.').reduce((e, t) => {
                                                const n = Xn(`${e}.${t}`, window);
                                                return Qn(n) ? ((e, t) => `${e}.${t}.value`)(e, t) : `${e}.${t}`;
                                            }))(e))(i),
                                ),
                            ),
                            c = l[0],
                            m = l[1],
                            _ = (0, s.useRef)(-1);
                        return (
                            b(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? Jn.Deep : Jn.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== Jn.None)
                                ) {
                                    const n = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === Jn.Deep
                                                ? (e === c && a((e) => e + 1), m(e))
                                                : m(Object.assign([], e));
                                        },
                                        r = ((e) => {
                                            const t = ((e) => {
                                                    const t = st(),
                                                        n = t.caller,
                                                        a = t.resId,
                                                        r =
                                                            window.__feature && window.__feature !== n && n
                                                                ? `subViews.${n}`
                                                                : '';
                                                    return { modelPrefix: r, modelPath: Zn(r, ''), resId: a };
                                                })(),
                                                n = t.modelPrefix,
                                                a = e.split('.');
                                            if (a.length > 0) {
                                                const e = [a[0]];
                                                return (
                                                    a.reduce((t, a) => {
                                                        const r = Xn(Zn(n, `${t}.${a}`), window);
                                                        return Qn(r)
                                                            ? (e.push(r.id), `${t}.${a}.value`)
                                                            : (e.push(a), `${t}.${a}`);
                                                    }),
                                                    e.reduce((e, t) => e + '.' + t)
                                                );
                                            }
                                            return '';
                                        })(e);
                                    _.current = Kn.addCallback(r, n, o, t === Jn.Deep);
                                }
                            }),
                            (0, s.useEffect)(() => {
                                if (t !== Jn.None)
                                    return () => {
                                        Kn.removeCallback(_.current, o);
                                    };
                            }, [o, t]),
                            c
                        );
                    },
                    ta =
                        (Y.Sw.instance,
                        (e) => {
                            const t = (0, s.useRef)();
                            return (
                                (0, s.useEffect)(() => {
                                    t.current = e;
                                }, [e]),
                                t.current
                            );
                        }),
                    na = (e = 0, t, n = 0, a = Yn) => {
                        const r = (0, s.useState)(e),
                            u = r[0],
                            o = r[1];
                        return (
                            (0, s.useEffect)(() => {
                                if (e > 0) {
                                    o(e);
                                    const r = Date.now(),
                                        u = setInterval(
                                            () => {
                                                const t = e - Math.floor((Date.now() - r) / 1e3);
                                                null !== n && t <= n ? (o(n), a && a(), clearInterval(u)) : o(t);
                                            },
                                            1e3 * (t || (e > 120 ? 60 : 1)),
                                        );
                                    return () => {
                                        clearInterval(u);
                                    };
                                }
                            }, [e, t, n, a]),
                            u
                        );
                    },
                    aa = {
                        base: 'MenuItem_base_ba',
                        base__active: 'MenuItem_base__active_cf',
                        base__disabled: 'MenuItem_base__disabled_55',
                        inner: 'MenuItem_inner_60',
                        itemGlow: 'MenuItem_itemGlow_ae',
                        icon: 'MenuItem_icon_1a',
                        fadeGlows: 'MenuItem_fadeGlows_11',
                        fadeGlowsIn: 'MenuItem_fadeGlowsIn_2d',
                        base__fadeOut: 'MenuItem_base__fadeOut_5c',
                        fadeGlowsOut: 'MenuItem_fadeGlowsOut_15',
                        titleOver: 'MenuItem_titleOver_de',
                        title: 'MenuItem_title_a6',
                        info: 'MenuItem_info_56',
                        info__disabled: 'MenuItem_info__disabled_4e',
                        unseen: 'MenuItem_unseen_19',
                    },
                    ra = R.strings.ny.widget.menu,
                    ua = ra.tooltip,
                    sa = R.images.new_year.gui.maps.icons.newYear.main_menu;
                let oa, ia;
                !(function (e) {
                    (e.City = 'city'),
                        (e.Tasks = 'quests'),
                        (e.Machine = 'surprise_machine'),
                        (e.Rewards = 'rewards'),
                        (e.Pet = 'pet'),
                        (e.Info = 'info');
                })(oa || (oa = {})),
                    (function (e) {
                        (e.Normal = 'normal'), (e.Active = 'active');
                    })(ia || (ia = {}));
                const la = (e) => {
                        switch (e) {
                            case oa.Machine:
                                return {
                                    contentId: R.views.new_year.lobby.new_year.tooltips.MenuMachineTooltip('resId'),
                                };
                            case oa.City:
                            case oa.Tasks:
                            case oa.Rewards:
                            case oa.Info:
                            case oa.Pet:
                            default:
                                return {
                                    contentId: R.views.new_year.lobby.new_year.tooltips.CommonTooltip('resId'),
                                    args: { header: ua[e].header(), description: ua[e].description() },
                                };
                        }
                    },
                    ca = (0, s.memo)(({ name: e, unseenCount: t, state: n, onSelected: a }) => {
                        const r = ta(n === ia.Active),
                            u = (0, s.useState)(!1),
                            i = u[0],
                            l = u[1],
                            c = Rt();
                        (0, s.useEffect)(
                            () => (
                                r && l(!0),
                                (0, j.F)(() => {
                                    l(!1);
                                }, 100)
                            ),
                            [r],
                        );
                        const m = { backgroundImage: `url(${sa.$dyn(`${e}${c ? '_small' : ''}`)})` },
                            _ = f()(aa.base, aa[`base__${n}`], i && aa.base__fadeOut);
                        return o().createElement(
                            bt,
                            { tooltipArgs: la(e) },
                            o().createElement(
                                'div',
                                {
                                    className: _,
                                    onClick: () => {
                                        n === ia.Normal && (a(e), (0, G.G)(R.sounds.hangar_newyear_hud_upper_click()));
                                    },
                                    onMouseEnter: () => {
                                        n === ia.Normal && G.$.playHighlight();
                                    },
                                },
                                o().createElement(
                                    'div',
                                    { className: aa.inner },
                                    o().createElement(
                                        'div',
                                        { className: aa.icon, style: m },
                                        Boolean(t) &&
                                            o().createElement(
                                                'div',
                                                { className: aa.unseen },
                                                o().createElement(jn, { isEmpty: !0 }),
                                            ),
                                    ),
                                    (n === ia.Active || i) && o().createElement('div', { className: aa.fadeGlows }),
                                    o().createElement('div', { className: aa.titleOver }),
                                    o().createElement('div', { className: aa.title }, ra[e].title()),
                                ),
                            ),
                        );
                    }),
                    ma = ['name'];
                function _a() {
                    return (
                        (_a =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        _a.apply(this, arguments)
                    );
                }
                const da = R.views.new_year.lobby.new_year.tooltips,
                    Ea = (0, K.Pi)(
                        ({
                            onSwitchContent: e,
                            startIndexMenu: t,
                            itemsMenu: n,
                            level: a,
                            levelRoman: r,
                            currentPoints: u,
                            nextPoints: i,
                        }) => {
                            const l = (0, s.useCallback)(
                                    (t) => {
                                        e({ view: t });
                                    },
                                    [e],
                                ),
                                c = 10 === a;
                            return o().createElement(
                                'div',
                                { className: f()('MainMenu_base_d1', c && 'MainMenu_base__final_c9') },
                                o().createElement('div', { className: 'MainMenu_shadow_3c' }),
                                o().createElement(
                                    'div',
                                    { className: 'MainMenu_snowAnimation_f3' },
                                    o().createElement('div', { className: f()(Wn, 'MainMenu_frame__fast_5f') }),
                                    o().createElement('div', { className: f()(Wn, 'MainMenu_frame__slow_99') }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: 'MainMenu_listWrapper_d0' },
                                    o().createElement(
                                        ct,
                                        { contentId: da.NyMainWidgetTooltip('resId') },
                                        o().createElement(
                                            'div',
                                            { className: 'MainMenu_widgetWrapper_96' },
                                            o().createElement(
                                                'div',
                                                { className: 'MainMenu_widgetBlock_f7' },
                                                o().createElement(
                                                    'div',
                                                    { className: 'MainMenu_widget_08' },
                                                    o().createElement(Gn, {
                                                        level: a,
                                                        levelRoman: r,
                                                        isEnabled: !0,
                                                        currentPoints: u,
                                                        nextPoints: i,
                                                    }),
                                                ),
                                            ),
                                            o().createElement('div', { className: 'MainMenu_widgetShadow_d0' }),
                                        ),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: f()('MainMenu_list_ae') },
                                        n
                                            .filter((e) => e.isEnabled)
                                            .map((e, n) => {
                                                let a = e.name,
                                                    r = (function (e, t) {
                                                        if (null == e) return {};
                                                        var n,
                                                            a,
                                                            r = {},
                                                            u = Object.keys(e);
                                                        for (a = 0; a < u.length; a++)
                                                            (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                                        return r;
                                                    })(e, ma);
                                                return o().createElement(
                                                    'div',
                                                    { className: 'MainMenu_item_fc', key: a },
                                                    o().createElement(
                                                        ca,
                                                        _a(
                                                            {
                                                                onSelected: l,
                                                                state: ((u = t === n), u ? ia.Active : ia.Normal),
                                                                name: a,
                                                            },
                                                            r,
                                                        ),
                                                    ),
                                                );
                                                var u;
                                            }),
                                    ),
                                ),
                            );
                        },
                    );
                function pa() {
                    return (
                        (pa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        pa.apply(this, arguments)
                    );
                }
                const ga = (0, K.Pi)(() => {
                        const e = Hn(),
                            t = e.model,
                            n = e.controls.onSwitchContent,
                            a = t.mainMenu.get(),
                            r = a.startIndexMenu,
                            u = a.widget,
                            s = t.computes.getItemsMenu();
                        return o().createElement(Ea, pa({ onSwitchContent: n, startIndexMenu: r, itemsMenu: s }, u));
                    }),
                    va = ({ isFadedMenu: e = !1 }) =>
                        o().createElement(
                            'div',
                            { className: f()('Navigation_base_cf', e && 'Navigation_base__faded_61') },
                            o().createElement(ga, null),
                        ),
                    ha = ({ count: e, customFontSize: t, maximum: n }) => {
                        const a = 0.6 * (null != t ? t : 16) + 'rem';
                        return o().createElement(
                            'div',
                            { className: 'FormatCount_base_01', style: { fontSize: `${null != t ? t : 16}rem` } },
                            n && e >= n.maxCount
                                ? o().createElement('div', null, null == n ? void 0 : n.maxCountText)
                                : o().createElement(
                                      o().Fragment,
                                      null,
                                      o().createElement('div', { style: { width: a } }, '×'),
                                      e,
                                  ),
                        );
                    };
                var ba = n(7030);
                const Aa = {
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        delay: 0,
                        config: {
                            duration: 300,
                            easing: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                        },
                    },
                    Ca = 'disabled',
                    fa = 'empty',
                    Da = {
                        base: 'LootBox_base_6b',
                        shine: 'LootBox_shine_73',
                        base__large: 'LootBox_base__large_ed',
                        shine__big: 'LootBox_shine__big_b8',
                        wrapper: 'LootBox_wrapper_0c',
                        base__disabled: 'LootBox_base__disabled_1a',
                        icon: 'LootBox_icon_08',
                        icon__hovered: 'LootBox_icon__hovered_21',
                        count: 'LootBox_count_c4',
                        disabledAlert: 'LootBox_disabledAlert_35',
                    };
                let wa;
                !(function (e) {
                    (e.Small = 'small'), (e.Large = 'large');
                })(wa || (wa = {}));
                const ya = R.strings.ny.lootboxEntryPoint,
                    Fa = { [wa.Small]: 20, [wa.Large]: 24 },
                    Ba = ({ boxesCount: e, hasNew: t, isLootBoxesEnabled: n, size: a, onClick: r }) => {
                        const u = o().useState(!1),
                            s = u[0],
                            i = u[1],
                            l = (n ? e < 1 && fa : Ca) || (t && 'new') || 'normal',
                            c = f()(Da.base, Da[`base__${l}`], Da[`base__${a}`]),
                            m = N().mediaSize >= y.Large && a === wa.Large,
                            _ = f()(Da.shine, m && Da.shine__big),
                            d = (0, ba.useTransition)(s, Object.assign({ key: s }, Aa));
                        return o().createElement(
                            vt,
                            { header: ya.disabledTooltip.header(), body: ya.disabledTooltip.body(), isEnabled: !n },
                            o().createElement(
                                'div',
                                { className: c },
                                'new' === l && o().createElement('div', { className: _ }),
                                o().createElement(
                                    'div',
                                    {
                                        className: Da.wrapper,
                                        onMouseEnter: () => {
                                            l !== Ca && (G.$.playHighlight(), i(!0));
                                        },
                                        onMouseLeave: () => {
                                            i(!1);
                                        },
                                        onClick: () => {
                                            (0, G.G)(R.sounds.tabb()), r();
                                        },
                                    },
                                    o().createElement('div', { className: Da.icon }),
                                    d(
                                        (e, t) =>
                                            t &&
                                            o().createElement(ba.animated.div, {
                                                className: f()(Da.icon, Da.icon__hovered),
                                                style: e,
                                            }),
                                    ),
                                    l !== fa &&
                                        o().createElement(
                                            'div',
                                            { className: Da.count },
                                            o().createElement(ha, {
                                                count: e,
                                                customFontSize: Fa[a],
                                                maximum: { maxCount: 1e3, maxCountText: ya.maxBoxesCount() },
                                            }),
                                        ),
                                    l === Ca && o().createElement('div', { className: Da.disabledAlert }),
                                ),
                            ),
                        );
                    },
                    Sa = ({
                        children: e,
                        moveSpace: t,
                        isDisabled: n,
                        onMouseOver3dScene: a,
                        isMouseDown: r,
                        setMouseDown: u,
                        isPointerCursor: i = !1,
                    }) => {
                        const l = (0, s.useState)(!1),
                            c = l[0],
                            m = l[1],
                            _ = (0, s.useState)({ x: 0, y: 0 }),
                            d = _[0],
                            E = _[1],
                            p = (0, s.useMemo)(() => (u ? [r, u] : [c, m]), [u, r, c, m]),
                            g = p[0],
                            v = p[1],
                            h = (0, s.createRef)(),
                            b = (0, s.useCallback)(() => v(!1), [v]);
                        (0, s.useEffect)(
                            () => (
                                window.addEventListener('mouseup', b), () => window.removeEventListener('mouseup', b)
                            ),
                            [b],
                        );
                        const A = (0, s.useCallback)(
                                (e) => {
                                    if (!h.current) return;
                                    const t = h.current.getBoundingClientRect(),
                                        n = t.width,
                                        a = t.height;
                                    return !(
                                        0 === e.clientX ||
                                        0 === e.clientY ||
                                        e.clientX >= n - 1 ||
                                        e.clientY >= a - 1
                                    );
                                },
                                [h],
                            ),
                            C = (0, s.useCallback)(
                                (e) => {
                                    e.preventDefault(),
                                        0 === e.button && A(e) && (v(!0), E({ x: e.clientX, y: e.clientY }));
                                },
                                [A, v],
                            ),
                            D = (0, s.useCallback)(
                                (e) => {
                                    if ((e.preventDefault(), g)) {
                                        if (!A(e)) return;
                                        const n = e.clientX !== d.x ? e.clientX - d.x : 0,
                                            a = e.clientY !== d.y ? e.clientY - d.y : 0;
                                        E({ x: e.clientX, y: e.clientY }), t({ dx: n, dy: a, dz: 0 });
                                    }
                                },
                                [A, g, d.x, d.y, t],
                            ),
                            w = (0, s.useCallback)(
                                (e) => {
                                    if ((e.preventDefault(), !A(e))) return;
                                    const n = e.deltaY < 0;
                                    t({ dx: 0, dy: 0, dz: n ? -600 : 600 });
                                },
                                [A, t],
                            ),
                            y = (0, s.useCallback)(() => {
                                v(!1);
                            }, [v]),
                            F = (0, s.useCallback)(() => {
                                a({ isOver3dScene: !0 });
                            }, [a]),
                            B = (0, s.useCallback)(() => {
                                a({ isOver3dScene: !1 });
                            }, [a]),
                            S = f()(
                                'SceneWrapper_base_17',
                                g && 'SceneWrapper_base__down_ad',
                                i && 'SceneWrapper_base__pointer_b0',
                            );
                        return o().createElement(
                            'div',
                            {
                                ref: h,
                                className: S,
                                onMouseDown: n ? void 0 : C,
                                onMouseMove: n ? void 0 : D,
                                onMouseUp: n ? void 0 : y,
                                onWheel: n ? void 0 : w,
                                onMouseOver: F,
                                onMouseOut: B,
                            },
                            e,
                        );
                    },
                    Na = {
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
                    Ma = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    xa = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Ta = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    ka = (0, s.memo)(({ text: e, binding: t, classMix: n }) => {
                        const a = (0, s.useCallback)((e) => ({ color: `#${e}` }), []),
                            r = (0, s.useMemo)(() => t || {}, [t]);
                        let u = Ma.exec(e),
                            i = e,
                            l = 0;
                        for (; u; ) {
                            const n = u[0],
                                s = xa.exec(n),
                                c = Ta.exec(n),
                                m = u[1];
                            if (s && c) {
                                const e = s[0],
                                    u = e + l++ + e;
                                (i = i.replace(n, `%(${u})`)),
                                    (r[u] = Na[e]
                                        ? o().createElement(
                                              'span',
                                              { className: Na[e] },
                                              o().createElement(Re, { text: m, binding: t }),
                                          )
                                        : o().createElement(
                                              'span',
                                              { style: a(e) },
                                              o().createElement(Re, { text: m, binding: t }),
                                          ));
                            }
                            u = Ma.exec(e);
                        }
                        return o().createElement(Re, { text: i, classMix: n, binding: r });
                    }),
                    Ra = R.strings.ny.customizationZones,
                    Ia = (e, t) => (0 === e ? Ra.minLevel() : e === t ? Ra.maxLevel() : Ra.level()),
                    La = (0, s.memo)(({ title: e, level: t, maxLevel: n }) =>
                        o().createElement(
                            ct,
                            {
                                contentId: R.views.new_year.lobby.new_year.tooltips.CustomizationZoneTooltip('resId'),
                                args: { customizationZone: e },
                            },
                            o().createElement(
                                'div',
                                { className: 'CustomizationZoneHeader_base_65' },
                                o().createElement(
                                    'div',
                                    { className: 'CustomizationZoneHeader_container_40' },
                                    o().createElement(je, {
                                        text: Ra.name.$dyn(e),
                                        className: 'CustomizationZoneHeader_title_7e',
                                    }),
                                    o().createElement(
                                        'div',
                                        { className: 'CustomizationZoneHeader_levelHolder_50' },
                                        o().createElement(ka, {
                                            text: Ia(t, n),
                                            classMix: 'CustomizationZoneHeader_level_ec',
                                            binding: { level: t },
                                        }),
                                        o().createElement('div', { className: 'CustomizationZoneHeader_icon_15' }),
                                    ),
                                ),
                            ),
                        ),
                    );
                const Oa = {
                    base: 'AnimatedLevelUpArrow_base_c4',
                    base__small: 'AnimatedLevelUpArrow_base__small_b3',
                    base__medium: 'AnimatedLevelUpArrow_base__medium_37',
                    base__large: 'AnimatedLevelUpArrow_base__large_65',
                    base__extraLarge: 'AnimatedLevelUpArrow_base__extraLarge_bc',
                    arrow: 'AnimatedLevelUpArrow_arrow_d3',
                    arrowUpSmall: 'AnimatedLevelUpArrow_arrowUpSmall_b9',
                    arrow__1: 'AnimatedLevelUpArrow_arrow__1_8c',
                    arrow__2: 'AnimatedLevelUpArrow_arrow__2_10',
                    arrow__3: 'AnimatedLevelUpArrow_arrow__3_e9',
                    arrowUpMedium: 'AnimatedLevelUpArrow_arrowUpMedium_31',
                    arrowUpLarge: 'AnimatedLevelUpArrow_arrowUpLarge_e7',
                    arrowUpExtraLarge: 'AnimatedLevelUpArrow_arrowUpExtraLarge_5d',
                };
                let Pa;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large'), (e.ExtraLarge = 'extraLarge');
                })(Pa || (Pa = {}));
                const Ha = (0, s.memo)(({ size: e = Pa.Small }) =>
                        o().createElement(
                            'div',
                            { className: f()(Oa.base, Oa[`base__${e}`]) },
                            o().createElement('div', { className: f()(Oa.arrow, Oa.arrow__1) }),
                            o().createElement('div', { className: f()(Oa.arrow, Oa.arrow__2) }),
                            o().createElement('div', { className: f()(Oa.arrow, Oa.arrow__3) }),
                        ),
                    ),
                    Va = 'LevelUpWidget_container_f9',
                    Ga = 'LevelUpWidget_divider_32',
                    Wa = 'LevelUpWidget_currencyValue_2c',
                    $a = 'LevelUpWidget_currencyIcon_f0',
                    Ua = R.strings.ny.levelUpWidget;
                let za;
                !(function (e) {
                    (e.LevelUp = 'levelUp'), (e.NotEnough = 'notEnough');
                })(za || (za = {}));
                const ja = (0, s.memo)(
                        ({
                            zoneName: e,
                            currentLevel: t,
                            currencyCount: n,
                            levelUpCurrencyNeed: a,
                            currencyType: r = pn.Mandarin,
                            onLevelUp: u,
                        }) => {
                            const i = n >= a,
                                l = (0, s.useState)(() => (i ? za.LevelUp : za.NotEnough)),
                                c = l[0],
                                m = l[1],
                                _ = (0, s.useState)(!1),
                                d = _[0],
                                E = _[1],
                                p = (0, s.useState)(!1),
                                g = p[0],
                                v = p[1],
                                h = (0, s.useState)(() => t),
                                b = h[0],
                                A = h[1],
                                C = (0, s.useState)(() => e),
                                D = C[0],
                                w = C[1],
                                F = (0, s.useState)(() => a),
                                B = F[0],
                                S = F[1],
                                M = (function () {
                                    const e = (0, s.useRef)(0);
                                    var t;
                                    return (
                                        (t = () => {
                                            window.clearTimeout(e.current);
                                        }),
                                        (0, s.useEffect)(() => t, []),
                                        (0, s.useMemo)(
                                            () => ({
                                                run: (t, n) => {
                                                    window.clearTimeout(e.current),
                                                        (e.current = window.setTimeout(() => {
                                                            t(), (e.current = 0);
                                                        }, n));
                                                },
                                                clear: () => {
                                                    window.clearTimeout(e.current), (e.current = 0);
                                                },
                                                get isRunning() {
                                                    return 0 !== e.current;
                                                },
                                            }),
                                            [],
                                        )
                                    );
                                })(),
                                x = M.run,
                                T = M.clear,
                                k = b + 1,
                                I = N().mediaSize >= y.Medium ? Pa.ExtraLarge : Pa.Large;
                            (0, s.useEffect)(
                                () => (
                                    g && D === e
                                        ? (E(!0),
                                          x(() => {
                                              m(i ? za.LevelUp : za.NotEnough), E(!1), A(t), S(a), T();
                                          }, 2400))
                                        : (m(i ? za.LevelUp : za.NotEnough), A(t), S(a), w(e)),
                                    () => v(!1)
                                ),
                                [T, t, i, a, e, x],
                            );
                            const L = {
                                [za.LevelUp]: o().createElement(
                                    'div',
                                    { className: f()(Va, 'LevelUpWidget_container__normal_65') },
                                    o().createElement('div', { className: 'LevelUpWidget_bgEllipseDark_48' }),
                                    o().createElement('div', { className: 'LevelUpWidget_bgEllipseLight_b3' }),
                                    o().createElement(
                                        'div',
                                        {
                                            className: 'LevelUpWidget_content_46',
                                            onClick: d
                                                ? void 0
                                                : () => {
                                                      G.$.playClick(), u({ customizationZone: e }), v(!0);
                                                  },
                                            onMouseEnter: () => {
                                                G.$.playHighlight();
                                            },
                                        },
                                        o().createElement('div', { className: 'LevelUpWidget_bgRays_a0' }),
                                        o().createElement(
                                            'div',
                                            { className: 'LevelUpWidget_arrow_12' },
                                            o().createElement(Ha, { size: I }),
                                        ),
                                        o().createElement('div', { className: 'LevelUpWidget_textEllipse_68' }),
                                        o().createElement(je, {
                                            text: Ua.title(),
                                            className: 'LevelUpWidget_text_a8',
                                            format: {
                                                binding: {
                                                    level: o().createElement(je, {
                                                        text: k,
                                                        className: 'LevelUpWidget_text__level_19',
                                                    }),
                                                },
                                            },
                                        }),
                                        o().createElement('div', { className: Ga }),
                                        o().createElement('div', { className: 'LevelUpWidget_dividerShadow_85' }),
                                        o().createElement(
                                            'div',
                                            { className: 'LevelUpWidget_button_a8' },
                                            o().createElement(je, {
                                                text: Ua.button.up(),
                                                className: 'LevelUpWidget_buttonText_12',
                                                format: {
                                                    binding: {
                                                        currency: o().createElement(An, {
                                                            value: B,
                                                            type: r,
                                                            classNames: {
                                                                container: 'LevelUpWidget_currencyContainer_c3',
                                                                value: Wa,
                                                                icon: $a,
                                                            },
                                                            size: hn.Small,
                                                        }),
                                                    },
                                                },
                                            }),
                                        ),
                                    ),
                                ),
                                [za.NotEnough]: o().createElement(
                                    'div',
                                    { className: f()(Va, 'LevelUpWidget_container__notEnough_92') },
                                    o().createElement('div', { className: 'LevelUpWidget_maskDark_b4' }),
                                    o().createElement(je, {
                                        text: Ua.upCondition(),
                                        className: 'LevelUpWidget_upConditionText_7a',
                                        format: {
                                            binding: {
                                                currency: o().createElement(An, {
                                                    value: B,
                                                    type: r,
                                                    classNames: {
                                                        container: 'LevelUpWidget_currencyContainerNotEnough_37',
                                                        value: Wa,
                                                        icon: $a,
                                                    },
                                                    size: hn.Small,
                                                    iconPosition: bn.Right,
                                                }),
                                            },
                                        },
                                    }),
                                    o().createElement('div', { className: f()(Ga, 'LevelUpWidget_divider__large_34') }),
                                ),
                            };
                            return o().createElement(
                                ct,
                                { contentId: R.views.new_year.lobby.new_year.tooltips.LevelUpWidgetTooltip('resId') },
                                o().createElement(
                                    'div',
                                    { className: f()('LevelUpWidget_base_e4', d && 'LevelUpWidget_base__animate_99') },
                                    L[c],
                                ),
                            );
                        },
                    ),
                    qa = {
                        base: 'SliderItem_base_39',
                        base__left: 'SliderItem_base__left_68',
                        blinkInLeft: 'SliderItem_blinkInLeft_65',
                        base__right: 'SliderItem_base__right_49',
                        blinkInRight: 'SliderItem_blinkInRight_69',
                        base__outAnimation: 'SliderItem_base__outAnimation_e7',
                        blinkOutLeft: 'SliderItem_blinkOutLeft_53',
                        blinkOutRight: 'SliderItem_blinkOutRight_0e',
                        glow: 'SliderItem_glow_69',
                        glow__visible: 'SliderItem_glow__visible_88',
                        sliderContainer: 'SliderItem_sliderContainer_fd',
                        content: 'SliderItem_content_18',
                        content__hide: 'SliderItem_content__hide_9b',
                        iconWrapper: 'SliderItem_iconWrapper_33',
                        customizationIcon: 'SliderItem_customizationIcon_d9',
                        name: 'SliderItem_name_76',
                        name__hover: 'SliderItem_name__hover_e2',
                    };
                let Ya;
                !(function (e) {
                    (e.LEFT = 'left'), (e.RIGHT = 'right');
                })(Ya || (Ya = {}));
                const Xa = '_big',
                    Qa = R.strings.ny.customizationZones.name,
                    Za = (0, s.memo)(({ value: e, direction: t, isOutAnimation: n, tooltipArgs: a, onClick: r }) => {
                        const u = (0, s.useState)(!1),
                            i = u[0],
                            l = u[1],
                            c = Rt(),
                            m = `url(R.images.new_year.gui.maps.icons.newYear.customizations.${e.toLowerCase()}${c ? '' : Xa})`,
                            _ = `url(R.images.new_year.gui.maps.icons.newYear.customizations.${e.toLowerCase()}${i ? '_light' : ''}${c ? '' : Xa})`,
                            d = f()(qa.base, qa[`base__${t}`], n && qa.base__outAnimation),
                            E = (0, s.useCallback)(() => {
                                l(!0), (0, G.G)(R.sounds.highlight());
                            }, [l]),
                            p = (0, s.useCallback)(() => l(!1), [l]),
                            g = (0, s.useCallback)(() => {
                                r({ objectName: e }), (0, G.G)(R.sounds.tabb());
                            }, [e, r]);
                        return o().createElement(
                            ct,
                            { contentId: R.views.new_year.lobby.new_year.tooltips.CommonTooltip('resId'), args: a },
                            o().createElement(
                                'div',
                                { className: d, onClick: g, onMouseEnter: E, onMouseLeave: p },
                                o().createElement(
                                    'div',
                                    { className: qa.sliderContainer },
                                    o().createElement('div', { className: f()(qa.glow, i && qa.glow__visible) }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: qa.content },
                                    o().createElement(
                                        'div',
                                        { className: qa.iconWrapper },
                                        o().createElement('div', {
                                            className: qa.customizationIcon,
                                            style: { backgroundImage: m },
                                        }),
                                    ),
                                    o().createElement(je, { text: Qa.$dyn(e), className: qa.name }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: f()(qa.content, !i && qa.content__hide) },
                                    o().createElement(
                                        'div',
                                        { className: qa.iconWrapper },
                                        o().createElement('div', {
                                            className: qa.customizationIcon,
                                            style: { backgroundImage: _ },
                                        }),
                                    ),
                                    o().createElement(je, {
                                        text: Qa.$dyn(e),
                                        className: f()(qa.name, qa.name__hover),
                                    }),
                                ),
                            ),
                        );
                    }),
                    Ka = R.strings.ny.customizationZones.tooltip,
                    Ja = (0, s.memo)(({ prevView: e, nextView: t, isOutAnimation: n, onSliderClick: a }) =>
                        o().createElement(
                            'div',
                            { className: 'Slider_base_0a' },
                            o().createElement(Za, {
                                direction: Ya.LEFT,
                                value: e,
                                isOutAnimation: n,
                                onClick: a,
                                tooltipArgs: { description: Ka.back() },
                            }),
                            o().createElement(Za, {
                                direction: Ya.RIGHT,
                                value: t,
                                isOutAnimation: n,
                                onClick: a,
                                tooltipArgs: { description: Ka.next() },
                            }),
                        ),
                    );
                function er() {
                    return (
                        (er =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        er.apply(this, arguments)
                    );
                }
                const tr = (0, s.memo)(({ isOutAnimation: e, headerProps: t, levelUpWidgetProps: n, sliderProps: a }) =>
                        o().createElement(
                            'div',
                            { className: 'CustomizationZone_base_6d' },
                            o().createElement('div', { className: 'CustomizationZone_shadow_37' }),
                            t &&
                                o().createElement(
                                    'div',
                                    { className: 'CustomizationZone_headerContainer_f8' },
                                    o().createElement(
                                        'div',
                                        {
                                            className: f()(
                                                'CustomizationZone_headerHolder_17',
                                                e && 'CustomizationZone_headerHolder__animated_53',
                                            ),
                                        },
                                        o().createElement(La, t),
                                    ),
                                ),
                            a &&
                                o().createElement(
                                    'div',
                                    { className: 'CustomizationZone_sliders_f1' },
                                    o().createElement(Ja, er({}, a, { isOutAnimation: e })),
                                ),
                            n &&
                                !n.isMaximumZoneLevel &&
                                o().createElement(
                                    'div',
                                    {
                                        className: f()(
                                            'CustomizationZone_widgetContainer_44',
                                            e && 'CustomizationZone_widgetContainer__animated_c7',
                                        ),
                                    },
                                    o().createElement(ja, n),
                                ),
                        ),
                    ),
                    nr = [
                        'children',
                        'contentId',
                        'args',
                        'onMouseOver',
                        'onMouseOut',
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
                function ar(e) {
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
                const rr = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Y.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    ur = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            r = e.onMouseOver,
                            u = e.onMouseOut,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            m = e.ignoreMouseClick,
                            _ = void 0 !== m && m,
                            d = e.decoratorId,
                            E = void 0 === d ? 0 : d,
                            p = e.isEnabled,
                            g = void 0 === p || p,
                            v = e.targetId,
                            h = void 0 === v ? 0 : v,
                            b = e.onShow,
                            A = e.onHide,
                            C = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, nr);
                        const f = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            D = (0, s.useMemo)(() => h || st().resId, [h]),
                            w = (0, s.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (rr(n, E, { isMouseEvent: !0, on: !0, arguments: ar(a) }, D),
                                    b && b(),
                                    (f.current.isVisible = !0));
                            }, [n, E, a, D, b]),
                            y = (0, s.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        rr(n, E, { on: !1 }, D),
                                        f.current.isVisible && A && A(),
                                        (f.current.isVisible = !1);
                                }
                            }, [n, E, D, A]),
                            F = (0, s.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(f.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        return (
                            (0, s.useEffect)(() => {
                                const e = f.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', F, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', F, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, s.useEffect)(() => {
                                !1 === g && y();
                            }, [g, y]),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseout', y),
                                    () => {
                                        window.removeEventListener('mouseout', y), y();
                                    }
                                ),
                                [y],
                            ),
                            g
                                ? (0, s.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseOver:
                                                  ((B = t.props.onMouseOver),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((f.current.timeoutId = window.setTimeout(w, c ? 100 : 400)),
                                                          r && r(e),
                                                          B && B(e),
                                                          e.stopPropagation());
                                                  }),
                                              onMouseOut: ((e) => (t) => {
                                                  y(), null == u || u(t), null == e || e(t);
                                              })(t.props.onMouseOut),
                                              onClick: ((e) => (t) => {
                                                  !1 === _ && y(), null == i || i(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === _ && y(), null == o || o(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          C,
                                      ),
                                  )
                                : t
                        );
                        var B;
                    },
                    sr = {
                        base: 'Marker_base_37',
                        content: 'Marker_content_84',
                        textShadow: 'Marker_textShadow_6c',
                        markerArrow: 'Marker_markerArrow_9f',
                        lvlUpArrow: 'Marker_lvlUpArrow_d7',
                        zoneName: 'Marker_zoneName_97',
                        zoneLevel: 'Marker_zoneLevel_18',
                        arrowAnimation: 'Marker_arrowAnimation_cc',
                        levelBlock: 'Marker_levelBlock_fb',
                        button: 'Marker_button_aa',
                        currency: 'Marker_currency_9f',
                        arrowAnimation__small: 'Marker_arrowAnimation__small_e3',
                        arrowAnimation__medium: 'Marker_arrowAnimation__medium_f3',
                        arrowAnimation__large: 'Marker_arrowAnimation__large_4d',
                        arrowAnimation__extraLarge: 'Marker_arrowAnimation__extraLarge_17',
                        base__onboarding: 'Marker_base__onboarding_f5',
                        zoneNameHeaer: 'Marker_zoneNameHeaer_0b',
                        zoneName__big: 'Marker_zoneName__big_e1',
                        base__hovered: 'Marker_base__hovered_3f',
                        zoneNameShadow: 'Marker_zoneNameShadow_7b',
                        zoneLevelShadow: 'Marker_zoneLevelShadow_fa',
                        zoneNameShadow__big: 'Marker_zoneNameShadow__big_b9',
                        zoneLevel__big: 'Marker_zoneLevel__big_7d',
                        textShine: 'Marker_textShine_13',
                        fadeIn: 'Marker_fadeIn_93',
                        textShine__big: 'Marker_textShine__big_9c',
                        button__hover: 'Marker_button__hover_c1',
                        button__big: 'Marker_button__big_aa',
                        buttonText: 'Marker_buttonText_f1',
                        currencyValue: 'Marker_currencyValue_14',
                        currencyIcon: 'Marker_currencyIcon_24',
                        currencyValue__big: 'Marker_currencyValue__big_88',
                        bgEllipse1: 'Marker_bgEllipse1_0f',
                        bgEllipse2: 'Marker_bgEllipse2_f1',
                        bgEllipse3: 'Marker_bgEllipse3_98',
                        currencyEllipse: 'Marker_currencyEllipse_ff',
                        bgEllipse1__big: 'Marker_bgEllipse1__big_f7',
                        bgEllipse2__big: 'Marker_bgEllipse2__big_91',
                        bgEllipse3__big: 'Marker_bgEllipse3__big_ca',
                        shineBlock: 'Marker_shineBlock_2f',
                        interactiveZone: 'Marker_interactiveZone_10',
                        interactiveZone__horizontal: 'Marker_interactiveZone__horizontal_9a',
                    },
                    or = R.strings.ny,
                    ir = (0, s.memo)(
                        ({
                            currentLevel: e,
                            zone: t,
                            currencyCount: n,
                            levelUpCurrencyNeed: a,
                            onLevelUp: r,
                            onClick: u,
                            isHovered: i = !1,
                            isPanelHovered: l = !1,
                            isOnboarding: c = !1,
                        }) => {
                            const m = (0, s.useState)(!1),
                                _ = m[0],
                                d = m[1],
                                E = N().mediaSize >= y.Medium ? cn.Big : cn.Small,
                                p = E === cn.Big ? Pa.Large : Pa.Medium,
                                g = e < 5 && n >= a,
                                v = i && g,
                                h = i || l,
                                b = (0, s.useCallback)(() => {
                                    d(!0), (0, G.G)(R.sounds.highlight());
                                }, []),
                                A = (0, s.useCallback)(() => d(!1), []),
                                C = (0, s.useCallback)(() => {
                                    r({ customizationZone: t }), (0, G.G)(R.sounds.tabb());
                                }, [t, r]);
                            return o().createElement(
                                'div',
                                { className: f()(sr.base, h && sr.base__hovered, c && sr.base__onboarding) },
                                o().createElement(
                                    'div',
                                    { className: f()(sr.arrowAnimation, sr[`arrowAnimation__${p}`]) },
                                    g && o().createElement(Ha, { size: p }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: sr.content },
                                    o().createElement(
                                        'div',
                                        { className: sr.zoneNameHeaer },
                                        o().createElement(je, {
                                            text: or.customizationZones.name.$dyn(t),
                                            className: f()(sr.zoneName, sr[`zoneName__${E}`]),
                                        }),
                                        o().createElement('div', {
                                            className: f()(sr.zoneNameShadow, sr[`zoneNameShadow__${E}`]),
                                        }),
                                    ),
                                    h &&
                                        o().createElement('div', {
                                            className: f()(sr.textShine, sr[`textShine__${E}`]),
                                        }),
                                    o().createElement('div', { className: sr.interactiveZone, onClick: u }),
                                    o().createElement('div', {
                                        className: f()(sr.interactiveZone, sr.interactiveZone__horizontal),
                                        onClick: u,
                                    }),
                                    v
                                        ? o().createElement(
                                              o().Fragment,
                                              null,
                                              o().createElement(
                                                  ur,
                                                  {
                                                      contentId:
                                                          R.views.new_year.lobby.new_year.tooltips.LevelUpWidgetTooltip(
                                                              'resId',
                                                          ),
                                                      args: { customizationZone: t },
                                                  },
                                                  o().createElement(
                                                      'div',
                                                      {
                                                          className: f()(
                                                              sr.button,
                                                              sr[`button__${E}`],
                                                              _ && sr.button__hover,
                                                          ),
                                                          onMouseEnter: b,
                                                          onMouseLeave: A,
                                                          onClick: C,
                                                      },
                                                      o().createElement(je, {
                                                          text: or.customizationZones.markerLevelUp(),
                                                          className: sr.buttonText,
                                                          format: { binding: { level: e + 1 } },
                                                      }),
                                                  ),
                                              ),
                                              o().createElement(
                                                  'div',
                                                  { className: sr.currency },
                                                  o().createElement(An, {
                                                      value: a,
                                                      classNames: {
                                                          value: f()(sr.currencyValue, sr[`currencyValue__${E}`]),
                                                          icon: sr.currencyIcon,
                                                      },
                                                      size: hn.Small,
                                                      iconPosition: bn.Right,
                                                  }),
                                                  o().createElement('div', { className: sr.currencyEllipse }),
                                              ),
                                          )
                                        : o().createElement(
                                              'div',
                                              { className: sr.levelBlock },
                                              o().createElement(je, {
                                                  text:
                                                      ((D = e),
                                                      0 === D
                                                          ? or.customizationZones.minLevel()
                                                          : 5 === D
                                                            ? or.customizationZones.maxLevel()
                                                            : or.customizationZones.markerLevel()),
                                                  className: f()(sr.zoneLevel, sr[`zoneLevel__${E}`]),
                                                  format: { binding: { level: e } },
                                              }),
                                              o().createElement('div', {
                                                  className: f()(sr.zoneLevelShadow, sr[`zoneLevelShadow__${E}`]),
                                              }),
                                          ),
                                ),
                                v
                                    ? o().createElement(
                                          'div',
                                          { className: sr.shineBlock },
                                          o().createElement('div', {
                                              className: f()(sr.bgEllipse1, sr[`bgEllipse1__${E}`]),
                                          }),
                                          o().createElement('div', {
                                              className: f()(sr.bgEllipse2, sr[`bgEllipse2__${E}`]),
                                          }),
                                      )
                                    : o().createElement('div', { className: sr.markerArrow }),
                            );
                            var D;
                        },
                    ),
                    lr = [
                        'firMarker',
                        'lightsMarker',
                        'installationsMarker',
                        'fairMarker',
                        'skatingMarker',
                        'attractionsMarker',
                    ],
                    cr = 'Marker',
                    mr = R.strings.ny,
                    _r = (0, K.Pi)(({ hoveredSlotName: e }) => {
                        const t = (0, s.useState)(''),
                            n = t[0],
                            a = t[1],
                            r = Hn(),
                            u = r.model,
                            i = r.controls,
                            l = u.root.get().switchState,
                            c = u.hoverMarker.get(),
                            m = (0, s.useMemo)(() => e.toLowerCase() + cr, [e]),
                            _ = l === ee.WITH_SWITCHING_OBJS,
                            d = (0, s.useCallback)(
                                (e) => () => {
                                    a(e);
                                    const t = oe(e.split(cr)[0]);
                                    i.onMouseOver3dScene({ isOver3dScene: !0 }), i.onHoverMarker({ markerName: t });
                                },
                                [i],
                            ),
                            E = (0, s.useCallback)(
                                (e) => () => {
                                    a('');
                                    const t = oe(e.split(cr)[0]);
                                    i.onMouseOver3dScene({ isOver3dScene: !1 }), i.onHoverOutMarker({ markerName: t });
                                },
                                [i],
                            ),
                            p = (e) => () => {
                                i.onCustomizationZoneMove({ customizationZone: e.value });
                            };
                        return o().createElement(
                            'div',
                            { className: 'MarkerList_base_10' },
                            o().createElement(
                                'div',
                                {
                                    className: 'MarkerList_markerInfo_83',
                                    style: {
                                        left: `${c.posx}rem`,
                                        top: `${c.posy}rem`,
                                        opacity: c.isZoneHovered && !_ ? 1 : 0,
                                    },
                                },
                                o().createElement(
                                    'div',
                                    { className: 'MarkerList_markerInfoContent_60' },
                                    o().createElement('div', { className: 'MarkerList_markerInfoBackground_74' }),
                                    o().createElement(je, {
                                        className: 'MarkerList_markerInfoText_09',
                                        text: mr.customizationZones.markerInfo(),
                                    }),
                                ),
                            ),
                            lr.map((e) => {
                                const t = u.computes.getMarkerParams(e),
                                    a = t.posx,
                                    r = t.posy,
                                    s = t.isVisible,
                                    l = t.currentLevel,
                                    c = t.customizationZone,
                                    _ = t.currencyCount,
                                    g = t.levelUpCurrencyNeed,
                                    v = t.isZoneHovered;
                                return o().createElement(
                                    'div',
                                    {
                                        key: e,
                                        className: 'MarkerList_marker_8c',
                                        style: { left: `${a}rem`, top: `${r}rem`, opacity: s ? 1 : 0 },
                                        onMouseEnter: d(e),
                                        onMouseLeave: E(e),
                                    },
                                    o().createElement(
                                        'div',
                                        null,
                                        o().createElement(
                                            ur,
                                            {
                                                contentId:
                                                    R.views.new_year.lobby.new_year.tooltips.CustomizationZoneTooltip(
                                                        'resId',
                                                    ),
                                                args: { customizationZone: c.value },
                                            },
                                            o().createElement(
                                                'div',
                                                null,
                                                o().createElement(ir, {
                                                    currentLevel: l,
                                                    zone: c.value,
                                                    currencyCount: _,
                                                    levelUpCurrencyNeed: g,
                                                    isHovered: e === n || v,
                                                    isPanelHovered: e === m,
                                                    onClick: p(c),
                                                    onLevelUp: i.onLevelUp,
                                                }),
                                            ),
                                        ),
                                    ),
                                );
                            }),
                        );
                    }),
                    dr = {
                        base: 'AnimationArrow_base_51',
                        base__bottom: 'AnimationArrow_base__bottom_13',
                        arrow: 'AnimationArrow_arrow_f2',
                        blink: 'AnimationArrow_blink_5e',
                        base__gold: 'AnimationArrow_base__gold_54',
                    };
                let Er, pr;
                !(function (e) {
                    (e.Top = 'top'), (e.Bottom = 'bottom');
                })(Er || (Er = {})),
                    (function (e) {
                        (e.Blue = 'blue'), (e.Gold = 'gold');
                    })(pr || (pr = {}));
                const gr = ({ direction: e = Er.Top, type: t = pr.Blue, className: n }) =>
                        o().createElement(
                            'div',
                            { className: f()(dr.base, dr[`base__${e}`], dr[`base__${t}`], n) },
                            o().createElement('div', { className: dr.arrow }),
                        ),
                    vr = {
                        base: 'SlotHint_base_79',
                        base__top: 'SlotHint_base__top_3f',
                        base__left: 'SlotHint_base__left_0f',
                        highlight: 'SlotHint_highlight_c2',
                        title: 'SlotHint_title_fb',
                        subtitle: 'SlotHint_subtitle_77',
                        arrow: 'SlotHint_arrow_6a',
                    };
                let hr;
                !(function (e) {
                    (e.Top = 'top'), (e.Left = 'left');
                })(hr || (hr = {}));
                const br = ({ title: e, subtitle: t, direction: n = hr.Top }) =>
                    o().createElement(
                        'div',
                        { className: f()(vr.base, vr[`base__${n}`]) },
                        o().createElement('div', { className: vr.highlight }),
                        o().createElement('div', { className: vr.title }, e),
                        o().createElement('div', { className: vr.subtitle }, t),
                        o().createElement(gr, { className: vr.arrow, direction: Er.Bottom }),
                    );
                var Ar = n(9904);
                const Cr = R.strings.ny.decorationSlot.animation.pure,
                    fr = o().memo(function ({ count: e, delta: t = 0, onAnimationEnd: n }) {
                        const a = (0, s.useState)(''),
                            r = a[0],
                            u = a[1];
                        (0, s.useEffect)(() => {
                            u(Cr.toy());
                        }, [e]),
                            (0, s.useEffect)(() => {
                                if (e <= 0) return (0, j.F)(() => (null == n ? void 0 : n()), 2100);
                            }, [e, n]);
                        const i = (0, s.useCallback)(() => {
                            e > 0 && (null == n || n());
                        }, [e, n]);
                        return o().createElement(
                            'div',
                            { className: 'ToyAnimation_base_62' },
                            e > 0 &&
                                o().createElement(
                                    'div',
                                    { className: 'ToyAnimation_points_63' },
                                    o().createElement(Ar.q, {
                                        count: e,
                                        title: r,
                                        isPlaying: !0,
                                        onAnimationEnd: i,
                                        delta: t,
                                    }),
                                ),
                        );
                    }),
                    Dr = {
                        base: 'ToySlot_base_48',
                        hint: 'ToySlot_hint_8c',
                        shadow: 'ToySlot_shadow_e0',
                        slot: 'ToySlot_slot_8b',
                        inner: 'ToySlot_inner_62',
                        slot__transitionEnabled: 'ToySlot_slot__transitionEnabled_2c',
                        notice: 'ToySlot_notice_fc',
                        plus: 'ToySlot_plus_11',
                        frame: 'ToySlot_frame_75',
                        image: 'ToySlot_image_d4',
                        hoverBlock: 'ToySlot_hoverBlock_d8',
                        selectedBlock: 'ToySlot_selectedBlock_c7',
                        slot__selected: 'ToySlot_slot__selected_a7',
                        particles: 'ToySlot_particles_5e',
                        selectedParticles: 'ToySlot_selectedParticles_6f',
                        animation: 'ToySlot_animation_32',
                    },
                    wr = () => o().createElement('div', { className: Dr.notice });
                var yr, Fr;
                !(function (e) {
                    e.Default = 'default';
                })(yr || (yr = {})),
                    (function (e) {
                        e.Default = 'default';
                    })(Fr || (Fr = {}));
                const Br = ({
                    slotId: e,
                    icon: t,
                    name: n,
                    rank: a,
                    onMouseLeave: r,
                    onMouseEnter: u,
                    Indicator: i,
                    isSelected: l,
                    folder: c = 'R.images.new_year.gui.maps.icons.newYear.decoration_types.craft',
                    size: m = Fr.Default,
                    style: _ = yr.Default,
                }) => {
                    const d = (0, s.useState)(!0),
                        E = d[0],
                        p = d[1],
                        g = { backgroundImage: t ? `url(${t})` : `url(${c}.${n})` },
                        v = {
                            backgroundImage: t
                                ? `url('R.images.new_year.gui.maps.icons.newYear.decoration_ranks.level_${a - 1}')`
                                : '',
                        };
                    return o().createElement(
                        'div',
                        {
                            className: f()(Dr.base, Dr[`base__${m}`], Dr[`base__${_}`]),
                            onMouseEnter: () => {
                                (0, G.G)(R.sounds.hangar_newyear_slot_over()), null == u || u({ slotId: e });
                            },
                            onMouseLeave: () => {
                                (0, G.G)(R.sounds.hangar_newyear_slot_over_off()), p(!0), null == r || r({ slotId: e });
                            },
                            onMouseDown: () => {
                                p(!1);
                            },
                            onClick: () => {
                                (0, G.G)(R.sounds.highlight_red_butt());
                            },
                        },
                        i && o().createElement(i, null),
                        o().createElement(
                            'div',
                            { className: f()(Dr.slot, E && Dr.slot__transitionEnabled, l && Dr.slot__selected) },
                            o().createElement(
                                'div',
                                { className: Dr.inner },
                                o().createElement(
                                    'div',
                                    { className: Dr.hoverBlock },
                                    o().createElement('div', { className: Dr.particles }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Dr.selectedBlock },
                                    o().createElement('div', { className: Dr.selectedParticles }),
                                ),
                            ),
                            o().createElement('div', { className: Dr.image, style: g }),
                            o().createElement('div', { className: Dr.shadow }),
                            o().createElement('div', { className: Dr.rank, style: v }),
                        ),
                    );
                };
                (Br.Style = yr), (Br.Size = Fr);
                const Sr = R.strings.ny,
                    Nr = ({ model: e, atmosphereAnimation: t, onHoverSlot: n, onHoverOutSlot: a, isPetSlot: r }) => {
                        const i = (0, s.useRef)(null),
                            l = ((e = 0) => {
                                const t = (0, s.useRef)(e);
                                return (0, s.useCallback)(() => t.current++, []);
                            })(),
                            c = (0, s.useState)({}),
                            m = c[0],
                            _ = c[1],
                            d = e.slotId,
                            E = e.type,
                            p = e.icon,
                            g = e.isBetterAvailable,
                            v = e.toyId,
                            h = e.rank,
                            b = e.isSelected,
                            A = t.isReady && d === t.slotId,
                            C = Sr.decorationTypes.$dyn(E),
                            f = () => {
                                const e = i.current;
                                if (!e) return 0;
                                const t = e.getBoundingClientRect().left + e.offsetWidth / 2,
                                    n = u.O.client.getSize().width / 2,
                                    a = u.O.view.getScale();
                                return Math.round((n - t) / a);
                            };
                        (0, s.useEffect)(() => {
                            if (A) {
                                const e = l(),
                                    n = {
                                        count: t.points,
                                        delta: f(),
                                        onAnimationEnd: () => {
                                            _((t) => {
                                                const n = Object.assign({}, t);
                                                return delete n[e], n;
                                            });
                                        },
                                    };
                                return (
                                    _((t) => Object.assign({}, t, { [e]: n })),
                                    (0, Zt.v)(() => {
                                        t.onAnimationEnd();
                                    })
                                );
                            }
                        }, [A]);
                        const D = {
                                contentId: r
                                    ? R.views.new_year.lobby.new_year.tooltips.NyPetDecorationTooltip('resId')
                                    : R.views.new_year.lobby.new_year.tooltips.NyDecorationTooltip('resId'),
                                args: { toyID: v },
                            },
                            w = {
                                contentId: R.views.new_year.lobby.new_year.tooltips.CommonTooltip('resId'),
                                args: {
                                    header: C,
                                    description: r
                                        ? Sr.pet.tooltip.slot.description()
                                        : ue(Sr.decoration.tooltip.slot(), { decorationType: C }),
                                    additionalDescription: r
                                        ? Sr.pet.tooltip.slot.additionalDescription()
                                        : Sr.decoration.tooltip.info(),
                                },
                            },
                            y = -1 === v ? w : D;
                        return o().createElement(
                            rn,
                            {
                                contentId: R.views.new_year.lobby.new_year.popovers.NyDecorationsPopover('resId'),
                                args: { slotId: d },
                            },
                            o().createElement(
                                ct,
                                y,
                                o().createElement(
                                    'div',
                                    { className: 'Slot_base_f7', ref: i },
                                    Object.entries(m).map(([e, t]) =>
                                        o().createElement(
                                            'div',
                                            { className: 'Slot_animation_40', key: e },
                                            o().createElement(fr, t),
                                        ),
                                    ),
                                    o().createElement(Br, {
                                        slotId: d,
                                        name: E,
                                        rank: h,
                                        isSelected: b,
                                        icon: p || void 0,
                                        Indicator: !r && g ? wr : void 0,
                                        size: Br.Size.Default,
                                        style: Br.Style.Default,
                                        onMouseEnter: n,
                                        onMouseLeave: a,
                                    }),
                                ),
                            ),
                        );
                    },
                    Mr = ({ slots: e, onHoverSlot: t, onHoverOutSlot: n, atmosphereAnimation: a, isPetSlots: r }) =>
                        o().createElement(
                            'div',
                            { className: 'ToySlotsGroup_base_26' },
                            e.map((e) =>
                                o().createElement(
                                    'div',
                                    { className: 'ToySlotsGroup_slotContainer_00', key: e.slotId },
                                    o().createElement(Nr, {
                                        model: e,
                                        onHoverSlot: t,
                                        onHoverOutSlot: n,
                                        atmosphereAnimation: a,
                                        isPetSlot: r,
                                    }),
                                ),
                            ),
                        ),
                    xr = 'ToySlots_divider_58',
                    Tr = R.strings.ny.slot.hint,
                    kr = (0, K.Pi)(({ isSlotsOutAnimation: e }) => {
                        const t = Hn(),
                            n = t.model,
                            a = t.controls,
                            r = n.groupSlotsItemsRenderers.get(),
                            u = n.computes.getGroupSlotsItems(),
                            i = n.cityModel.get(),
                            l = i.hasToysHint,
                            c = i.atmosphereAnimation,
                            m = n.customizationObjectModel.get(),
                            _ = m.currentLevel === m.maxLevel,
                            d = r.length > 2 || _ ? hr.Top : hr.Left,
                            E = (0, s.useMemo)(
                                () =>
                                    r.map((e, t) => {
                                        const u = t !== r.length - 1;
                                        return o().createElement(
                                            'div',
                                            { className: 'ToySlots_slotsGroup_84', key: t },
                                            o().createElement(Mr, {
                                                slots: n.computes.getSlotsItemsGroup(t),
                                                atmosphereAnimation: c,
                                                onHoverSlot: a.onHoverSlot,
                                                onHoverOutSlot: a.onHoverOutSlot,
                                            }),
                                            u && o().createElement('div', { className: 'ToySlots_separator_5a' }),
                                        );
                                    }),
                                [e, u],
                            ),
                            p = (0, s.useState)(),
                            g = p[0],
                            v = p[1],
                            h = (0, s.useState)(d),
                            b = h[0],
                            A = h[1];
                        return (
                            (0, s.useEffect)(() => {
                                e || (v(E), A(d));
                            }, [e, u]),
                            o().createElement(
                                'div',
                                { className: 'ToySlots_base_bd' },
                                o().createElement('div', { className: xr }),
                                l &&
                                    o().createElement(br, { title: Tr.title(), subtitle: Tr.subtitle(), direction: b }),
                                g,
                                o().createElement('div', { className: xr }),
                            )
                        );
                    }),
                    Rr = 'ViewSlots_divider_e0',
                    Ir = R.strings.ny.levelUpWidget,
                    Lr = (e, t, n) => {
                        var a;
                        const r = n >= y.Medium ? '_big' : '',
                            u = t ? '_light' : '';
                        return `url(R.images.new_year.gui.maps.icons.newYear.customizations.${(null == (a = e.value) ? void 0 : a.toLowerCase()) + u + r})`;
                    },
                    Or = (0, K.Pi)(({ slots: e, onSlotHover: t }) => {
                        const n = (0, s.useState)(!1),
                            a = n[0],
                            r = n[1],
                            u = (0, s.useState)(''),
                            i = u[0],
                            l = u[1],
                            c = Hn().controls,
                            m = N().mediaSize,
                            _ = (e) => () => {
                                c.onCustomizationZoneMove({ customizationZone: e.value }), (0, G.G)(R.sounds.tabb());
                            },
                            d = (e, n) => () => {
                                e !== i && r(!1),
                                    n && (r(!0), l(e)),
                                    t(e),
                                    (0, G.G)(R.sounds.highlight()),
                                    c.onObjectHover({ customizationZoneName: e });
                            },
                            E = () => {
                                l(''), r(!1);
                            };
                        return o().createElement(
                            'div',
                            { className: 'ViewSlots_base_c5', onMouseLeave: E },
                            o().createElement('div', { className: Rr }),
                            e.map(
                                ({ customizationZone: e, canUpgrade: n, levelUpCurrencyNeed: r, hasNewToys: u }, s) => {
                                    return o().createElement(
                                        'div',
                                        { key: `slot${s}`, className: f()('ViewSlots_slot_25') },
                                        n &&
                                            r > 0 &&
                                            o().createElement(
                                                o().Fragment,
                                                null,
                                                o().createElement(
                                                    'div',
                                                    {
                                                        className: f()(
                                                            'ViewSlots_buttonContainer_6f',
                                                            a &&
                                                                i === e.value &&
                                                                'ViewSlots_buttonContainer__visible_de',
                                                        ),
                                                        onMouseLeave: E,
                                                    },
                                                    o().createElement(
                                                        ct,
                                                        {
                                                            contentId:
                                                                R.views.new_year.lobby.new_year.tooltips.LevelUpWidgetTooltip(
                                                                    'resId',
                                                                ),
                                                            args: { customizationZone: e.value },
                                                        },
                                                        o().createElement(
                                                            'div',
                                                            {
                                                                className: 'ViewSlots_button_9a',
                                                                onClick: () =>
                                                                    c.onLevelUp({ customizationZone: e.value }),
                                                            },
                                                            o().createElement(je, {
                                                                text: Ir.button.up(),
                                                                className: 'ViewSlots_buttonText_15',
                                                                format: {
                                                                    binding: {
                                                                        currency: o().createElement(An, {
                                                                            value: r,
                                                                            classNames: {
                                                                                container:
                                                                                    'ViewSlots_currencyContainer_f1',
                                                                                value: 'ViewSlots_currencyValue_b6',
                                                                                icon: 'ViewSlots_currencyIcon_93',
                                                                            },
                                                                            size: hn.Small,
                                                                        }),
                                                                    },
                                                                },
                                                            }),
                                                        ),
                                                    ),
                                                ),
                                                o().createElement(
                                                    'div',
                                                    { className: 'ViewSlots_arrowAnimationComponent_c7' },
                                                    o().createElement(Ha, { size: Pa.Small }),
                                                ),
                                            ),
                                        o().createElement(
                                            ct,
                                            {
                                                contentId:
                                                    R.views.new_year.lobby.new_year.tooltips.CustomizationZoneTooltip(
                                                        'resId',
                                                    ),
                                                args: { customizationZone: e.value },
                                            },
                                            o().createElement(
                                                'div',
                                                {
                                                    className: 'ViewSlots_slotsGroup_7f',
                                                    onMouseEnter: d(e.value, n),
                                                    onMouseLeave:
                                                        ((l = e.value),
                                                        () => {
                                                            t(''), c.onObjectHoverOut({ customizationZoneName: l });
                                                        }),
                                                    onClick: _(e),
                                                },
                                                o().createElement('div', { className: 'ViewSlots_activeSlotBg_db' }),
                                                u && o().createElement('div', { className: 'ViewSlots_bubble_ff' }),
                                                o().createElement('div', {
                                                    className: 'ViewSlots_slotImage_c8',
                                                    style: { backgroundImage: Lr(e, n, m) },
                                                }),
                                                o().createElement(je, {
                                                    className: 'ViewSlots_slotText_55',
                                                    text: R.strings.ny.customizationZones.name.$dyn(e.value),
                                                }),
                                            ),
                                        ),
                                    );
                                    var l;
                                },
                            ),
                            o().createElement('div', { className: Rr }),
                        );
                    });
                function Pr() {
                    return (
                        (Pr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Pr.apply(this, arguments)
                    );
                }
                const Hr = (0, K.Pi)(() => {
                    const e = Hn(),
                        t = e.model,
                        n = e.controls,
                        a = N().mediaSize,
                        r = t.root.get().switchState,
                        u = t.cityModel.get(),
                        i = u.isGuiLootBoxesVisible,
                        l = u.currentSubModel,
                        c = t.customizationObjectModel.get(),
                        m = c.currentLevel,
                        _ = c.maxLevel,
                        d = c.currencyCount,
                        E = c.levelUpCurrencyNeed,
                        p = t.customizationObjectCurrencyModel.get().value,
                        g = t.customizationHeaderTitle.get().value,
                        v = t.objectView.prevObject.get(),
                        h = t.objectView.nextObject.get(),
                        b = t.computes.getCustomizationZones(),
                        A = t.objectView.currentObject.get(),
                        C = r === ee.WITH_SWITCHING_OBJS,
                        D = (0, s.useState)(!1),
                        w = D[0],
                        F = D[1],
                        B = (0, s.useState)(''),
                        S = B[0],
                        M = B[1],
                        x = (0, s.useState)(!1),
                        T = x[0],
                        k = x[1],
                        R = (0, s.useState)(!1),
                        I = R[0],
                        L = R[1],
                        O = (0, s.useState)(null),
                        P = O[0],
                        H = O[1],
                        V = (0, s.useState)(null),
                        G = V[0],
                        W = V[1],
                        $ = (0, s.useState)(null),
                        U = $[0],
                        z = $[1],
                        q = (0, s.useState)(!1),
                        Y = q[0],
                        X = q[1],
                        Q = a > y.Small ? wa.Large : wa.Small,
                        Z = (0, s.useState)(!1),
                        K = Z[0],
                        J = Z[1],
                        te = (0, s.useState)(!1),
                        ne = te[0],
                        ae = te[1],
                        re = (0, s.useMemo)(() => (T ? [K, J] : [null, null]), [T, K, J]),
                        ue = re[0],
                        se = re[1];
                    return (
                        (0, s.useEffect)(() => {
                            k(1 === l);
                        }, [l]),
                        (0, s.useEffect)(() => {
                            L(C),
                                F(C),
                                C ||
                                    (() => {
                                        if (T)
                                            return (
                                                H({ title: g, level: m, maxLevel: _ }),
                                                W({
                                                    zoneName: g,
                                                    currentLevel: m,
                                                    currencyCount: d,
                                                    levelUpCurrencyNeed: E,
                                                    currencyType: p,
                                                    isMaximumZoneLevel: m === _,
                                                    onLevelUp: n.onLevelUp,
                                                }),
                                                void z({
                                                    prevView: v,
                                                    nextView: h,
                                                    onSliderClick: n.onGoToCustomizationObject,
                                                })
                                            );
                                        H(null), W(null), z(null);
                                    })();
                        }, [C, m]),
                        (0, s.useEffect)(
                            () =>
                                (0, j.F)(() => {
                                    X(Boolean(l));
                                }, 500),
                            [A, l],
                        ),
                        (0, s.useEffect)(() => {
                            if (K && !ne)
                                return (0, j.F)(() => {
                                    L(!0), F(!0), ae(!0);
                                }, 200);
                            ne || (L(!1), F(!1));
                        }, [K, ne]),
                        (0, s.useEffect)(() => {
                            if (ne)
                                return (0, j.F)(() => {
                                    ae(!1);
                                }, 500);
                        }, [ne]),
                        o().createElement(
                            'div',
                            { className: 'NyCityView_base_5b' },
                            o().createElement(tr, {
                                isOutAnimation: I,
                                headerProps: P,
                                levelUpWidgetProps: G,
                                sliderProps: U,
                            }),
                            o().createElement('div', { className: 'NyCityView_vignette_80' }),
                            o().createElement(
                                'div',
                                { className: 'NyCityView_sceneWrapper_3f' },
                                o().createElement(
                                    Sa,
                                    {
                                        moveSpace: n.onGladeMoveSpace,
                                        onMouseOver3dScene: n.onGladeMouseOver3dScene,
                                        setMouseDown: se,
                                        isDisabled: C,
                                        isMouseDown: ue,
                                    },
                                    !T && o().createElement(_r, { hoveredSlotName: S }),
                                ),
                            ),
                            i &&
                                o().createElement(
                                    'div',
                                    { className: 'NyCityView_lootBox_3d' },
                                    o().createElement(
                                        Ba,
                                        Pr({}, t.lootboxEntry.get(), { size: Q, onClick: n.onLootBoxEntryPointClick }),
                                    ),
                                ),
                            o().createElement(
                                'div',
                                { className: f()('NyCityView_slots_15', w && 'NyCityView_slots__outAnimation_1a') },
                                Y
                                    ? o().createElement(kr, { isSlotsOutAnimation: w })
                                    : o().createElement(Or, { slots: b, onSlotHover: M }),
                            ),
                        )
                    );
                });
                var Vr = n(9738),
                    Gr = n(7006);
                const Wr = (e, t, n) => (n < e ? e : n > t ? t : n),
                    $r = (e, t) => {
                        (0, s.useEffect)(() => {
                            let t = null;
                            return (
                                (t = requestAnimationFrame(() => {
                                    t = requestAnimationFrame(() => {
                                        (t = null), e();
                                    });
                                })),
                                () => {
                                    null !== t && cancelAnimationFrame(t);
                                }
                            );
                        }, t);
                    };
                let Ur;
                !(function (e) {
                    (e[(e.Default = 0)] = 'Default'), (e[(e.Vehicles = 1)] = 'Vehicles');
                })(Ur || (Ur = {}));
                const zr = (e, t = []) => {
                        const n = (0, s.useRef)(),
                            a = (0, s.useCallback)((...t) => {
                                n.current && n.current(), (n.current = e(...t));
                            }, t);
                        return (
                            (0, s.useEffect)(
                                () => () => {
                                    n.current && n.current();
                                },
                                [a],
                            ),
                            a
                        );
                    },
                    jr = {
                        base: 'Carousel_base_cf',
                        itemsContainer: 'Carousel_itemsContainer_a0',
                        base__withoutScroll: 'Carousel_base__withoutScroll_5f',
                        items: 'Carousel_items_33',
                        item: 'Carousel_item_ba',
                        item__active: 'Carousel_item__active_e7',
                        bg: 'Carousel_bg_72',
                        bgImage: 'Carousel_bgImage_e0',
                        bgImage__rewards: 'Carousel_bgImage__rewards_27',
                        bgImage__bonus: 'Carousel_bgImage__bonus_37',
                        bgImage__howtogetdecorations: 'Carousel_bgImage__howtogetdecorations_17',
                        bgImage__quests: 'Carousel_bgImage__quests_87',
                        bgImage__pet: 'Carousel_bgImage__pet_19',
                        bgImage__surprisemachine: 'Carousel_bgImage__surprisemachine_8b',
                        text: 'Carousel_text_df',
                        positionArrow: 'Carousel_positionArrow_96',
                        positionArrow__disabled: 'Carousel_positionArrow__disabled_09',
                        positionArrow__prev: 'Carousel_positionArrow__prev_b3',
                        positionArrow__next: 'Carousel_positionArrow__next_79',
                        activeArrow: 'Carousel_activeArrow_24',
                    };
                let qr;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(qr || (qr = {}));
                const Yr = {
                        step: { type: 'proportional', factor: 8 },
                        stepByArrow: { type: 'proportional', factor: 5 },
                        animationConfig: { tension: 210, friction: 20 },
                    },
                    Xr = (e, t) => {
                        switch (t.type) {
                            case 'proportional':
                                return e.offsetWidth / t.factor;
                            case 'fixed':
                                return t.value;
                        }
                    },
                    Qr = (e) => {
                        var t, n;
                        const a = null != (t = null == (n = e.parentElement) ? void 0 : n.offsetWidth) ? t : 0;
                        return a - e.offsetWidth - 0.04 * a;
                    },
                    Zr = jr.positionArrow__disabled,
                    Kr = (e) => {
                        var t;
                        null == (t = e.current) || t.classList.add(Zr);
                    },
                    Jr = (e) => {
                        var t;
                        null == (t = e.current) || t.classList.remove(Zr);
                    },
                    eu = (e, t) => {
                        const n = Math.min(0, Qr(e));
                        return Wr(n, 0, t);
                    },
                    tu = o().memo(function ({ className: e, classNames: t, items: n, active: a, onChoose: r }) {
                        const u = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            l = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            m = (0, s.useRef)(!1),
                            _ = (e) => {
                                const t = p.scrollPosition.goal;
                                0 === t ? Kr(l) : Jr(l), c.current && (Qr(e) === t ? Kr(c) : Jr(c));
                            },
                            d = () => {
                                var e, t, n;
                                u.current &&
                                    i.current &&
                                    ((null != (t = null == (n = (e = i.current).parentElement) ? void 0 : n.offsetWidth)
                                        ? t
                                        : 0) < e.offsetWidth
                                        ? (_(i.current), u.current.classList.remove(jr.base__withoutScroll))
                                        : u.current.classList.add(jr.base__withoutScroll));
                            };
                        (0, s.useEffect)(d), (0, s.useEffect)(() => (0, Zt.v)(d), []);
                        const E = (0, Vr.useSpring)(() => ({
                                scrollPosition: 0,
                                onChange: (e) => {
                                    const t = i.current;
                                    t &&
                                        ((t.style.transform = `translateX(${Math.round(e.value.scrollPosition)}px)`),
                                        _(t));
                                },
                            })),
                            p = E[0],
                            g = E[1],
                            v = (e, t, n) => {
                                const a = p.scrollPosition.get(),
                                    r = p.scrollPosition.goal - a;
                                return eu(e, t * n + r + a);
                            },
                            h = (0, s.useCallback)(
                                (e, { immediate: t = !1 } = {}) => {
                                    i.current &&
                                        g.start({
                                            scrollPosition: e,
                                            immediate: t,
                                            reset: !0,
                                            from: { scrollPosition: p.scrollPosition.get() },
                                            config: Yr.animationConfig,
                                        });
                                },
                                [p.scrollPosition, g],
                            ),
                            b = (0, s.useCallback)(() => {
                                const e = i.current;
                                if (!e) return;
                                const t = i.current.parentElement;
                                if (!t) return;
                                const n = e.children.length - 1,
                                    r = Wr(0, n, a),
                                    u = e.children[r];
                                if (u) {
                                    const n = 0.04 * t.offsetWidth,
                                        a = t.offsetWidth - 2 * n,
                                        r = u.getBoundingClientRect(),
                                        s = r.x,
                                        o = s + r.width + n,
                                        i = p.scrollPosition.goal,
                                        l = a - o;
                                    o > a ? h(eu(e, i + l)) : s < 0 && h(eu(e, i - (s - n - u.offsetWidth / 2)));
                                }
                            }, [a, p.scrollPosition.goal, h]);
                        (0, s.useEffect)(() => {
                            if (!m.current)
                                return (0, Zt.v)(() =>
                                    (0, Zt.v)(() => {
                                        b(), (m.current = !0);
                                    }),
                                );
                            b();
                        }, [b]);
                        const A = (e) => {
                                const t = i.current;
                                if (!t) return;
                                const n = Xr(t, Yr.stepByArrow),
                                    a = v(t, e, n);
                                G.$.playClick(), h(a);
                            },
                            C = () => G.$.playHighlight(),
                            D = zr(
                                () =>
                                    (0, Zt.v)(() => {
                                        const e = i.current;
                                        e && (h(eu(e, p.scrollPosition.goal)), d());
                                    }),
                                [h, p.scrollPosition.goal],
                            );
                        return (
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('resize', D),
                                    () => {
                                        window.removeEventListener('resize', D);
                                    }
                                ),
                                [D],
                            ),
                            o().createElement(
                                'div',
                                { className: f()(jr.base, e), ref: u },
                                o().createElement('div', {
                                    className: f()(
                                        jr.positionArrow,
                                        jr.positionArrow__prev,
                                        null == t ? void 0 : t.prevArrow,
                                    ),
                                    ref: l,
                                    onClick: () => A(qr.Prev),
                                    onMouseEnter: C,
                                }),
                                o().createElement(
                                    'div',
                                    {
                                        className: jr.itemsContainer,
                                        onWheel: (e) => {
                                            ((e) => {
                                                const t = i.current;
                                                if (!t) return;
                                                const n = Xr(t, Yr.step),
                                                    a = v(t, e, n);
                                                h(a);
                                            })(e.deltaY > 1 ? qr.Prev : qr.Next);
                                        },
                                    },
                                    o().createElement(
                                        'div',
                                        { className: jr.items, ref: i },
                                        n.map((e, n) =>
                                            o().createElement(
                                                'div',
                                                {
                                                    key: n,
                                                    className: f()(
                                                        jr.item,
                                                        a === n && f()(jr.item__active, e.classNameActive),
                                                        e.className,
                                                    ),
                                                    onClick: () =>
                                                        ((e) => {
                                                            r && (G.$.playClick(), r(e));
                                                        })(n),
                                                    onMouseEnter: C,
                                                },
                                                o().createElement(
                                                    'div',
                                                    { className: jr.bg },
                                                    o().createElement('div', {
                                                        className: f()(
                                                            jr.bgImage,
                                                            jr[`bgImage__${e.slide.toLowerCase()}`],
                                                        ),
                                                        style: { backgroundImage: `url(${e.bgImage})` },
                                                    }),
                                                ),
                                                o().createElement('div', {
                                                    className: f()(jr.activeArrow, null == t ? void 0 : t.activeArrow),
                                                }),
                                                o().createElement(
                                                    'div',
                                                    { className: f()(jr.text, null == t ? void 0 : t.text) },
                                                    e.text,
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                                o().createElement('div', {
                                    className: f()(
                                        jr.positionArrow,
                                        jr.positionArrow__next,
                                        null == t ? void 0 : t.nextArrow,
                                    ),
                                    ref: c,
                                    onClick: () => A(qr.Next),
                                    onMouseEnter: C,
                                }),
                            )
                        );
                    }),
                    nu = {
                        base: 'Paginator_base_08',
                        arrow: 'Paginator_arrow_d8',
                        arrow__prev: 'Paginator_arrow__prev_83',
                        arrow__next: 'Paginator_arrow__next_49',
                    },
                    au = ({ className: e, classNames: t, children: n, onPrev: a, onNext: r, onMouseEnter: u }) =>
                        o().createElement(
                            'div',
                            { className: f()(nu.base, e) },
                            o().createElement('div', { className: f()(nu.content, null == t ? void 0 : t.content) }, n),
                            o().createElement('div', {
                                className: f()(nu.arrow, nu.arrow__prev, null == t ? void 0 : t.prev),
                                onClick: a,
                                onMouseEnter: u,
                            }),
                            o().createElement('div', {
                                className: f()(nu.arrow, nu.arrow__next, null == t ? void 0 : t.next),
                                onClick: r,
                                onMouseEnter: u,
                            }),
                        ),
                    ru = 'bigBoxes';
                let uu, su;
                !(function (e) {
                    (e.Intro = 'Intro'),
                        (e.Rewards = 'Rewards'),
                        (e.BigBoxes = 'BigBoxes'),
                        (e.BigBoxesOpening = 'BigBoxesOpening'),
                        (e.HowToGetDecorations = 'HowToGetDecorations'),
                        (e.Collider = 'Collider'),
                        (e.Bonus = 'Bonus'),
                        (e.NyVehicles = 'NyVehicles'),
                        (e.Atmosphere = 'Atmosphere'),
                        (e.SurpriseMachine = 'SurpriseMachine'),
                        (e.Pet = 'Pet'),
                        (e.Quests = 'Quests');
                })(uu || (uu = {})),
                    (function (e) {
                        (e.China = 'CN'), (e.Ru = 'RU');
                    })(su || (su = {}));
                const ou = ['ko', 'no'],
                    iu = R.strings.settings.LANGUAGE_CODE(),
                    lu = () => ou.includes(iu),
                    cu = (e) => ({ backgroundImage: `url('${e}')` }),
                    mu = (e, t) => R.images.new_year.gui.maps.icons.newYear.info.$dyn(e && lu() ? `${t}_alt` : t),
                    _u = {
                        [uu.HowToGetDecorations]: { quantity: 2, prefix: 'decoration' },
                        [uu.Quests]: { quantity: 3, prefix: 'quests', iconName: 'quests' },
                        [uu.Rewards]: { quantity: 6, prefix: 'rewards', iconName: 'rewards' },
                        [uu.Bonus]: { quantity: 2, prefix: 'bonus' },
                        [uu.NyVehicles]: { quantity: 2, prefix: 'tank', iconName: 'tank' },
                        [uu.Atmosphere]: { quantity: 2, prefix: 'atmosphere', iconName: 'atmosphere' },
                        [uu.BigBoxes]: { quantity: 2, prefix: 'boxes', iconName: 'boxes' },
                        [uu.Pet]: { quantity: 1, prefix: 'pet', iconName: 'pet' },
                        [uu.SurpriseMachine]: { quantity: 3, prefix: 'surpriseMachine', iconName: 'surpriseMachine' },
                    },
                    du = (e, t) => [...Array(e).keys()].map((e) => `${t}${e + 1}`),
                    Eu = {
                        [uu.Rewards]: du(_u.Rewards.quantity, _u.Rewards.prefix),
                        [uu.BigBoxesOpening]: ['guaranteedRewards', 'streamBox'],
                        [uu.HowToGetDecorations]: du(_u.HowToGetDecorations.quantity, _u.HowToGetDecorations.prefix),
                        [uu.Quests]: du(_u.Quests.quantity, _u.Quests.prefix),
                        [uu.Bonus]: du(_u.Bonus.quantity, _u.Bonus.prefix),
                        [uu.NyVehicles]: du(_u.NyVehicles.quantity, _u.NyVehicles.prefix),
                        [uu.Atmosphere]: du(_u.Atmosphere.quantity, _u.Atmosphere.prefix),
                        [uu.Pet]: du(_u.Pet.quantity, _u.Pet.prefix),
                        [uu.SurpriseMachine]: du(_u.SurpriseMachine.quantity, _u.SurpriseMachine.prefix),
                        [uu.BigBoxes]: du(_u.BigBoxes.quantity, _u.BigBoxes.prefix),
                    };
                let pu;
                !(function (e) {
                    (e.AtmosphereRewards = 'levels'),
                        (e.AtmosphereBonus = 'bonus1'),
                        (e.CollectionBonus = 'bonus2'),
                        (e.AboutNySlot = 'tank1'),
                        (e.BigBoxes = 'boxes1');
                })(pu || (pu = {}));
                const gu = 'NyInfoView_arrow_1b',
                    vu = 'NyInfoView_arrow__disabled_01';
                function hu() {
                    return (
                        (hu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        hu.apply(this, arguments)
                    );
                }
                const bu = (0, s.memo)(
                        ({
                            label: e,
                            onClick: t,
                            type: n = Ee.primary,
                            isExternalLink: a = !1,
                            disabled: r = !1,
                            tooltipArgs: u,
                        }) =>
                            o().createElement(
                                vt,
                                hu({}, u, { isEnabled: Boolean(r && u) }),
                                o().createElement(
                                    'div',
                                    { className: 'Button_base_08' },
                                    o().createElement(
                                        be,
                                        {
                                            type: n,
                                            size: pe.medium,
                                            mixClass: 'Button_button_7a',
                                            onClick: t,
                                            disabled: r,
                                        },
                                        o().createElement(
                                            'div',
                                            { className: 'Button_label_bf' },
                                            e,
                                            a && o().createElement('div', { className: 'Button_externalLink_39' }),
                                        ),
                                    ),
                                ),
                            ),
                    ),
                    Au = ({ icon: e, title: t, description: n, button: a, iconClassName: r }) =>
                        o().createElement(
                            'div',
                            { className: 'Column_base_bc' },
                            o().createElement(
                                'div',
                                { className: 'Column_iconWrapper_60' },
                                o().createElement('div', { className: f()('Column_icon_83', r), style: cu(e) }),
                            ),
                            o().createElement(
                                'div',
                                { className: 'Column_textWrapper_bb' },
                                o().createElement(je, { className: 'Column_title_21', text: t }),
                                o().createElement(je, { className: 'Column_description_24', text: n }),
                            ),
                            a &&
                                o().createElement(
                                    'div',
                                    { className: 'Column_buttonWrapper_04' },
                                    o().createElement(bu, {
                                        label: a.label,
                                        onClick: a.onClick,
                                        isExternalLink: null == a ? void 0 : a.isExternalLink,
                                        type: null == a ? void 0 : a.type,
                                        disabled: null == a ? void 0 : a.disabled,
                                        tooltipArgs: null == a ? void 0 : a.tooltipArgs,
                                    }),
                                ),
                        ),
                    Cu = {
                        base: 'ColumnsList_base_2f',
                        item: 'ColumnsList_item_7d',
                        item__2Column: 'ColumnsList_item__2Column_68',
                        item__3Column: 'ColumnsList_item__3Column_0c',
                        icon: 'ColumnsList_icon_b9',
                    };
                function fu() {
                    return (
                        (fu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        fu.apply(this, arguments)
                    );
                }
                const Du = ({ list: e }) =>
                        o().createElement(
                            'div',
                            { className: Cu.base },
                            e.map((t, n) =>
                                o().createElement(
                                    'div',
                                    { className: f()(Cu.item, Cu[`item__${e.length}Column`]), key: n },
                                    o().createElement(Au, fu({}, t, { iconClassName: Cu.icon })),
                                ),
                            ),
                        ),
                    wu = ({ title: e, children: t, list: n }) =>
                        o().createElement(
                            'div',
                            { className: 'ColumnsListSlide_base_1b' },
                            o().createElement('div', { className: 'ColumnsListSlide_title_64' }, e),
                            t,
                            o().createElement(Du, { list: n }),
                        ),
                    yu = R.strings.ny.newYearInfoView.atmosphere,
                    Fu = Eu[uu.Atmosphere].map((e) => ({
                        icon: R.images.new_year.gui.maps.icons.newYear.info.$dyn(e),
                        title: yu.title.$dyn(e),
                        description: yu.description.$dyn(e),
                    })),
                    Bu = R.strings.ny.newYearInfoView.bigBoxes,
                    Su = (e, t) =>
                        Eu[uu.BigBoxes].map((n, a) => ({
                            icon: mu(!1, n),
                            title: Bu.title.$dyn(n),
                            description: Bu.description.$dyn(n),
                            button: 0 === a && {
                                label: Bu.button(),
                                onClick: () => t(ru),
                                type: Ee.main,
                                disabled: !e,
                                tooltipArgs: { header: Bu.tooltip.title(), body: Bu.tooltip.description() },
                            },
                        })),
                    Nu = R.strings.ny.newYearInfoView.bonus,
                    Mu = R.strings.ny.newYearInfoView.howToGet,
                    xu = (e, t) =>
                        Eu[uu.HowToGetDecorations].map((n, a) => ({
                            icon: R.images.new_year.gui.maps.icons.newYear.info.$dyn(n),
                            title: Mu.title.$dyn(n),
                            description: Mu.description.$dyn(n),
                            button: 1 === a && {
                                label: Mu.button(),
                                onClick: () => t(ru),
                                type: Ee.main,
                                disabled: !e,
                                tooltipArgs: { header: Mu.tooltip.title(), body: Mu.tooltip.description() },
                            },
                        })),
                    Tu = 'VideoCover_playButton_65',
                    ku = R.images.new_year.gui.maps.icons.newYear.info.video_cover,
                    Ru = (e, t) => ku.$dyn(se(e)) || (su.Ru, ku.ru()),
                    Iu = (0, s.memo)(
                        ({
                            realm: e,
                            language: t,
                            onVideoClicked: n,
                            className: a,
                            classNames: r,
                            onMouseEnter: u,
                        }) => {
                            const s = { backgroundImage: `url('${Ru(t)}')` };
                            return o().createElement(
                                'div',
                                {
                                    className: f()('VideoCover_base_92', a),
                                    onClick: n,
                                    onMouseEnter: () => {
                                        G.$.playHighlight(), null == u || u();
                                    },
                                },
                                o().createElement('div', {
                                    className: f()('VideoCover_cover_e2', null == r ? void 0 : r.cover),
                                    style: s,
                                }),
                                o().createElement(
                                    'div',
                                    { className: 'VideoCover_buttonHolder_22' },
                                    o().createElement('div', {
                                        className: f()(
                                            Tu,
                                            'VideoCover_playButton__hover_1e',
                                            null == r ? void 0 : r.playButtonHover,
                                        ),
                                    }),
                                    o().createElement('div', {
                                        className: f()(
                                            Tu,
                                            'VideoCover_playButton__normal_7f',
                                            null == r ? void 0 : r.playButton,
                                        ),
                                    }),
                                ),
                            );
                        },
                    ),
                    Lu = (0, s.memo)(({ datetime: e, format: t = qn.SHORT_DATE, localize: n = !0 }) =>
                        ((e, t, n) => {
                            switch (t) {
                                case qn.SHORT_DATE:
                                    return n
                                        ? Y.Z5.getDateFormat(e, Y.kH.SHORT_FORMAT)
                                        : Y.cy.getTimeFormat('%d.%m.%y', e, !0);
                                case qn.SHORT_TIME:
                                    return n
                                        ? Y.Z5.getTimeFormat(e, Y.lf.SHORT_FORMAT)
                                        : Y.cy.getTimeFormat('%I:%M %p', e, !0);
                                case qn.SHORT_DATE_TIME:
                                    return n
                                        ? `${Y.Z5.getDateFormat(e, Y.kH.SHORT_FORMAT)}, ${Y.Z5.getTimeFormat(e, Y.lf.SHORT_FORMAT)}`
                                        : Y.cy.getTimeFormat('%d.%m.%y, %I:%M %p', e, !0);
                                case qn.FULL_DATE:
                                    return n
                                        ? Y.Z5.getDateFormat(e, Y.kH.LONG_FORMAT)
                                        : Y.cy.getTimeFormat('%B %d, %Y', e, !0);
                                case qn.FULL_DATE_TIME:
                                    return n
                                        ? `${Y.Z5.getDateFormat(e, Y.kH.LONG_FORMAT)}, ${Y.Z5.getTimeFormat(e, Y.lf.SHORT_FORMAT)}`
                                        : Y.cy.getTimeFormat('%B %d, %Y, %I:%M %p', e, !0);
                                case qn.MONTH:
                                    return Y.cy.getTimeFormat('%B', e, !0);
                                case qn.MONTH_DATE:
                                    return Y.cy.getTimeFormat('%B %e', e, !0);
                                case qn.DATE_MONTH:
                                    return Y.cy.getTimeFormat('%e %B', e, !0);
                                case qn.MONTH_YEAR:
                                    return Y.cy.getTimeFormat('%B %Y', e, !0);
                                case qn.WEEK_DAY:
                                    return Y.cy.getTimeFormat('%A', e, !0);
                                case qn.WEEK_DAY_TIME:
                                    return n
                                        ? `${Y.cy.getTimeFormat('%A', e, !0)} ${Y.Z5.getTimeFormat(e, Y.lf.SHORT_FORMAT)}`
                                        : Y.cy.getTimeFormat('%A, %I:%M %p', e, !0);
                                case qn.YEAR:
                                    return Y.cy.getTimeFormat('%Y', e, !0);
                                case qn.DATE_YEAR:
                                    return Y.cy.getTimeFormat('%d, %Y', e, !0);
                            }
                        })(e, t, n),
                    ),
                    Ou = ({ realm: e, language: t, onVideoClicked: n, description: a, startDate: r, endDate: u }) =>
                        o().createElement(
                            'div',
                            { className: 'VideoSlide_base_b6' },
                            o().createElement(
                                'div',
                                { className: 'VideoSlide_video_5e' },
                                o().createElement(Iu, { realm: e, language: t, onVideoClicked: n }),
                            ),
                            a &&
                                o().createElement(je, {
                                    text: a,
                                    className: 'VideoSlide_description_79',
                                    format: {
                                        binding: {
                                            startDate: o().createElement(Lu, { datetime: r, format: qn.FULL_DATE }),
                                            endDate: o().createElement(Lu, { datetime: u, format: qn.FULL_DATE }),
                                        },
                                    },
                                }),
                        ),
                    Pu = 'SideDescriptionList_item_02',
                    Hu = 'SideDescriptionList_content_56',
                    Vu = 'SideDescriptionList_title_16';
                let Gu;
                !(function (e) {
                    (e.Circle = 'circle'), (e.Image = 'image'), (e.None = 'none'), (e.Default = 'none');
                })(Gu || (Gu = {}));
                const Wu = ({ button: e, blocks: t, list: n, point: a = Gu.Default }) =>
                        o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(
                                'div',
                                { className: 'SideDescriptionList_blocks_93' },
                                t &&
                                    t.map((e, t) =>
                                        o().createElement(
                                            'div',
                                            { className: Pu, key: t },
                                            o().createElement(
                                                'div',
                                                { className: Hu },
                                                e.title && o().createElement(je, { className: Vu, text: e.title }),
                                                o().createElement(je, { text: e.description }),
                                            ),
                                        ),
                                    ),
                            ),
                            o().createElement(
                                'div',
                                { className: 'SideDescriptionList_list_5d' },
                                n &&
                                    n.map((e, t) =>
                                        o().createElement(
                                            'div',
                                            { className: 'SideDescriptionList_listItem_6f', key: t },
                                            o().createElement(
                                                'div',
                                                { className: Pu },
                                                a === Gu.Circle &&
                                                    o().createElement('div', {
                                                        className: 'SideDescriptionList_circle_e6',
                                                    }),
                                                a === Gu.Image &&
                                                    e.icon &&
                                                    o().createElement('div', {
                                                        className: 'SideDescriptionList_icon_cf',
                                                        style: cu(e.icon),
                                                    }),
                                                o().createElement(
                                                    'div',
                                                    { className: Hu },
                                                    e.title && o().createElement(je, { className: Vu, text: e.title }),
                                                    o().createElement(je, { text: e.description }),
                                                ),
                                            ),
                                        ),
                                    ),
                            ),
                            e &&
                                o().createElement(
                                    'div',
                                    { className: 'SideDescriptionList_buttonWrapper_a0' },
                                    o().createElement(bu, {
                                        label: e.label,
                                        onClick: e.onClick,
                                        isExternalLink: null == e ? void 0 : e.isExternalLink,
                                        type: null == e ? void 0 : e.type,
                                        disabled: null == e ? void 0 : e.disabled,
                                        tooltipArgs: null == e ? void 0 : e.tooltipArgs,
                                    }),
                                ),
                        ),
                    $u = ({
                        title: e,
                        list: t,
                        blocks: n,
                        button: a,
                        icon: r,
                        children: u,
                        subTitle: s,
                        point: i,
                        classNames: l,
                    }) =>
                        o().createElement(
                            'div',
                            { className: 'SideDescriptionSlide_base_15' },
                            o().createElement('div', { className: 'SideDescriptionSlide_image_ff', style: cu(r) }),
                            o().createElement(
                                'div',
                                { className: f()('SideDescriptionSlide_content_a7', null == l ? void 0 : l.content) },
                                o().createElement(
                                    'div',
                                    {
                                        className: f()(
                                            'SideDescriptionSlide_contentInner_10',
                                            null == l ? void 0 : l.contentInner,
                                        ),
                                    },
                                    o().createElement(je, { className: 'SideDescriptionSlide_title_22', text: e }),
                                    s &&
                                        o().createElement(je, {
                                            className: 'SideDescriptionSlide_subTitle_a0',
                                            text: s,
                                        }),
                                    o().createElement(Wu, { button: a, blocks: n, list: t, point: i }),
                                    u,
                                ),
                            ),
                        ),
                    Uu = R.strings.ny.newYearInfoView.pet,
                    zu = (e, t) => ({ label: Uu.button(), onClick: () => e('pet'), disabled: !t }),
                    ju = Eu[uu.Pet].map((e) => ({ description: Uu.description.$dyn(e) })),
                    qu = R.strings.ny.newYearInfoView.quests,
                    Yu = du(2, _u.Quests.prefix).map((e) => ({ description: qu.description.$dyn(e) })),
                    Xu = Eu[uu.Quests].map((e) => ({ description: qu.list.$dyn(e) })),
                    Qu = R.strings.ny.newYearInfoView.rewards,
                    Zu = du(1, _u.Rewards.prefix).map((e) => ({ description: Qu.description.$dyn(e) })),
                    Ku = Eu[uu.Rewards].map((e) => ({ description: Qu.list.$dyn(e) })),
                    Ju = R.strings.ny.newYearInfoView.surpriseMachine,
                    es = du(2, _u.SurpriseMachine.prefix).map((e) => ({ description: Ju.description.$dyn(e) })),
                    ts = Eu[uu.SurpriseMachine].map((e) => ({ description: Ju.list.$dyn(e) })),
                    ns = R.strings.ny.newYearInfoView.carousel,
                    as = [uu.Atmosphere],
                    rs = {
                        [uu.Intro]: {
                            content: () => {
                                const e = ea('model.infoModel.region'),
                                    t = e.realm,
                                    n = e.language,
                                    a = ea('model.infoModel'),
                                    r = a.startDate,
                                    u = a.endDate,
                                    i = ea('model.infoModel.videoCover', Jn.None).onClick,
                                    l = (0, s.useCallback)(() => i(), [i]);
                                return o().createElement(Ou, {
                                    realm: t,
                                    onVideoClicked: l,
                                    language: n,
                                    startDate: r,
                                    endDate: u,
                                    description: R.strings.ny.newYearInfoView.video.description(),
                                });
                            },
                            text: ns.intro(),
                            bgImage: 'intro',
                        },
                        [uu.Rewards]: {
                            content: () => {
                                const e = ea('model.infoModel').onButtonClick,
                                    t = (0, s.useCallback)(
                                        (t) => {
                                            e({ value: t });
                                        },
                                        [e],
                                    );
                                return o().createElement($u, {
                                    blocks: Zu,
                                    list: Ku,
                                    button: ((n = t), { label: Qu.button(), onClick: () => n('rewards') }),
                                    point: Gu.Circle,
                                    icon: mu(!1, _u.Rewards.iconName),
                                    title: Qu.mainTitle(),
                                });
                                var n;
                            },
                            text: ns.rewards(),
                            bgImage: 'rewards',
                        },
                        [uu.Bonus]: {
                            content: () =>
                                o().createElement(
                                    'div',
                                    null,
                                    o().createElement(wu, {
                                        title: Nu.mainTitle(),
                                        list: Eu[uu.Bonus].map((e) => ({
                                            icon: mu(e === pu.AtmosphereBonus, e),
                                            title: Nu.title.$dyn(e),
                                            description: Nu.description.$dyn(e),
                                        })),
                                    }),
                                ),
                            text: ns.bonus(),
                            bgImage: 'bonus',
                        },
                        [uu.BigBoxes]: {
                            content: () => {
                                const e = ea('model.infoModel'),
                                    t = e.onButtonClick,
                                    n = e.isLootBoxesBuyEnabled,
                                    a = (0, s.useCallback)(
                                        (e) => {
                                            t({ value: e });
                                        },
                                        [t],
                                    );
                                return o().createElement(wu, { title: Bu.mainTitle(), list: Su(n, a) });
                            },
                            text: ns.bigBoxes(),
                            bgImage: 'bigBoxes',
                        },
                        [uu.Atmosphere]: {
                            content: () => o().createElement(wu, { title: yu.mainTitle(), list: Fu }),
                            text: ns.atmosphere(),
                            bgImage: 'atmosphere',
                        },
                        [uu.HowToGetDecorations]: {
                            content: () => {
                                const e = ea('model.infoModel'),
                                    t = e.onButtonClick,
                                    n = e.isLootBoxesBuyEnabled,
                                    a = (0, s.useCallback)(
                                        (e) => {
                                            t({ value: e });
                                        },
                                        [t],
                                    );
                                return o().createElement(wu, { title: Mu.mainTitle(), list: xu(n, a) });
                            },
                            text: ns.howToGetDecorations(),
                            bgImage: 'howToGetDecorations',
                        },
                        [uu.Quests]: {
                            content: () => {
                                const e = ea('model.infoModel').onButtonClick,
                                    t = (0, s.useCallback)(
                                        (t) => {
                                            e({ value: t });
                                        },
                                        [e],
                                    );
                                return o().createElement($u, {
                                    blocks: Yu,
                                    list: Xu,
                                    button: ((n = t), { label: qu.button(), onClick: () => n('quests') }),
                                    point: Gu.Circle,
                                    icon: mu(!1, _u.Quests.iconName),
                                    title: qu.mainTitle(),
                                });
                                var n;
                            },
                            text: ns.quests(),
                            bgImage: 'quests',
                        },
                        [uu.Pet]: {
                            content: () => {
                                var e;
                                const t = ea('model.infoModel').onButtonClick,
                                    n =
                                        null ==
                                        (e = Hn()
                                            .model.computes.getItemsMenu()
                                            .find((e) => 'pet' === e.name))
                                            ? void 0
                                            : e.isEnabled,
                                    a = (0, s.useCallback)(
                                        (e) => {
                                            t({ value: e });
                                        },
                                        [t],
                                    );
                                return o().createElement($u, {
                                    blocks: ju,
                                    button: zu(a, n),
                                    icon: mu(!1, _u.Pet.iconName),
                                    title: Uu.mainTitle(),
                                });
                            },
                            text: ns.pet(),
                            bgImage: 'pet',
                        },
                        [uu.SurpriseMachine]: {
                            content: () => {
                                const e = ea('model.infoModel').onButtonClick,
                                    t = (0, s.useCallback)(
                                        (t) => {
                                            e({ value: t });
                                        },
                                        [e],
                                    );
                                return o().createElement($u, {
                                    blocks: es,
                                    list: ts,
                                    button: ((n = t), { label: Ju.button(), onClick: () => n('surprise_machine') }),
                                    point: Gu.Circle,
                                    icon: mu(!1, _u.SurpriseMachine.iconName),
                                    title: Ju.mainTitle(),
                                });
                                var n;
                            },
                            text: ns.surpriseMachine(),
                            bgImage: 'surprise',
                        },
                    },
                    us = { [Ur.Default]: uu.Intro, [Ur.Vehicles]: uu.NyVehicles };
                let ss;
                !(function (e) {
                    (e.ArrowRightButton = 'arrow_right_button'),
                        (e.ArrowLeftButton = 'arrow_left_button'),
                        (e.ArrowRightKey = 'arrow_right_key'),
                        (e.ArrowLeftKey = 'arrow_left_key'),
                        (e.SpaceKey = 'space_key'),
                        (e.CarouselButton = 'carousel_button');
                })(ss || (ss = {}));
                const os = {
                    base: 'PurchaseForm_base_4f',
                    boxes: 'PurchaseForm_boxes_75',
                    header: 'PurchaseForm_header_4e',
                    description: 'PurchaseForm_description_75',
                    ruleList: 'PurchaseForm_ruleList_41',
                    rule: 'PurchaseForm_rule_0f',
                    icon: 'PurchaseForm_icon_70',
                    divider: 'PurchaseForm_divider_be',
                    error: 'PurchaseForm_error_e7',
                    errorIcon: 'PurchaseForm_errorIcon_48',
                    errorText: 'PurchaseForm_errorText_27',
                    content: 'PurchaseForm_content_9e',
                    stepperWrapper: 'PurchaseForm_stepperWrapper_cb',
                    currency: 'PurchaseForm_currency_9e',
                    price: 'PurchaseForm_price_dd',
                    btn: 'PurchaseForm_btn_d5',
                    btn__buy: 'PurchaseForm_btn__buy_d6',
                };
                let is;
                n(3368),
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
                    })(is || (is = {}));
                const ls = {
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
                class cs extends o().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.timer = null),
                            (this.validationTimer = null),
                            (this.numericalStepper = (0, s.createRef)()),
                            (this.input = (0, s.createRef)()),
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
                                this.props.currencyType ? Y.Z5.getNumberFormat(e, Y.B3.GOLD) : e.toString()),
                            (this.getValidValue = (e) => {
                                const t = Math.min(this.props.maximum, Math.max(this.props.minimum, e)),
                                    n = this.props.stepSize;
                                return Math.round(t / n) * n;
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
                                const t = e === q.n.BACKSPACE,
                                    n = e === q.n.DELETE,
                                    a = this.input.current,
                                    r = a.selectionStart || 0,
                                    u = a.selectionEnd || 0;
                                let s = a.value;
                                const o = Math.max(r, u),
                                    i = o;
                                n && (s = s.substring(0, o) + s.substring(o + 1, s.length)),
                                    t && 1 === r && 1 === s.length && (s = '0');
                                const l = Number(s.trim().replace(/\D/g, '')),
                                    c = Number.isSafeInteger(l) ? l : Number.MAX_SAFE_INTEGER,
                                    m = this.props.currencyType ? Y.Z5.getNumberFormat(c, Y.B3.GOLD) : c.toString(),
                                    _ = !isNaN(Number(s.replace(' ', '')));
                                a.value = m;
                                const d = new RegExp(/\d/g);
                                let E = 0;
                                for (let e = 0; e < i; e++) {
                                    const t = s[e] || '',
                                        n = m[E] || '';
                                    if (t.match(d) || t === n) {
                                        for (; t !== m[E] && E < m.length; ) E++;
                                        E++;
                                    }
                                }
                                '' === s ? (E = 1) : _ || (E = s.length),
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
                                const t = e.keyCode === q.n.BACKSPACE,
                                    n = e.keyCode === q.n.DELETE,
                                    a = e.target,
                                    r = a.selectionStart,
                                    u = a.selectionEnd,
                                    s = a.value,
                                    o = r !== u,
                                    i = new RegExp(/\D/),
                                    l = t && r ? r - 1 : r || 0;
                                if (o) return;
                                let c = l;
                                const m = i.test(s[l]);
                                if (n && m) for (; i.test(s[c]) && c < s.length; ) c++;
                                if (t && m) for (; i.test(s[c]) && c > 0; ) c--;
                                if (c !== l || (t && m))
                                    return e.preventDefault(), (c = c < 0 ? 0 : c), void this.setCursorPosition(c, c);
                                ((t && 1 === r && 1 === s.length) || n) &&
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
                                        (e.keyCode in q.n &&
                                            e.keyCode !== q.n.BACKSPACE &&
                                            e.keyCode !== q.n.DELETE &&
                                            e.preventDefault(),
                                        e.keyCode)
                                    ) {
                                        case q.n.ARROW_UP:
                                        case q.n.NUM_PLUS:
                                        case q.n.PLUS:
                                            this.state.activeIncrement || this.setState({ activeIncrement: !0 }),
                                                this.increment();
                                            break;
                                        case q.n.ARROW_DOWN:
                                        case q.n.NUM_MINUS:
                                        case q.n.MINUS:
                                            this.state.activeDecrement || this.setState({ activeDecrement: !0 }),
                                                this.decrement();
                                            break;
                                        case q.n.HOME:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case q.n.END:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case q.n.ENTER:
                                            if (
                                                (e.nativeEvent.stopImmediatePropagation(),
                                                this.state.value >= this.props.maximum)
                                            ) {
                                                const e = this.formatValue(this.props.maximum).length;
                                                this.changeValue(this.props.maximum), this.setCursorPosition(0, e);
                                            }
                                            break;
                                        case q.n.PAGE_UP:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case q.n.PAGE_DOWN:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case q.n.BACKSPACE:
                                        case q.n.DELETE:
                                            this.handleDelete(e);
                                    }
                                    this.props.onKeyDown(e);
                                }
                            }),
                            (this.handleKeyUp = (e) => {
                                if (!this.props.isDisabled)
                                    switch (e.keyCode) {
                                        case q.n.ARROW_UP:
                                        case q.n.NUM_PLUS:
                                        case q.n.PLUS:
                                            this.setState({ activeIncrement: !1 });
                                            break;
                                        case q.n.ARROW_DOWN:
                                        case q.n.NUM_MINUS:
                                        case q.n.MINUS:
                                            this.setState({ activeDecrement: !1 });
                                    }
                            }),
                            (this.allowOnlyNumbers = (e) => {
                                e.which in is || e.preventDefault();
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
                                this.props.isDisabled || (0, G.G)('highlight');
                            }),
                            (this.playClickSound = () => {
                                this.props.isDisabled || (0, G.G)('play');
                            }),
                            (this.stop = () => {
                                this.timer && clearTimeout(this.timer), (this.timer = null);
                            });
                    }
                    componentDidUpdate(e, t) {
                        const n = this.state,
                            a = n.value,
                            r = n.isFocused;
                        if (a !== t.value && r) {
                            const e = this.formattedValue.length,
                                t = this.input.current && this.input.current.selectionStart,
                                n = this.input.current && this.input.current.selectionEnd,
                                a = t === n ? e : t || 0;
                            0 === t && n === e
                                ? this.input.current && this.input.current.setSelectionRange(e, e)
                                : this.input.current && this.input.current.setSelectionRange(a, e);
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
                            ? Y.Z5.getNumberFormat(this.state.value, Y.B3.GOLD)
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
                            a = e.currencyType,
                            r = f()(
                                ls.base,
                                ls[`base__${n}`],
                                a && ls[`base__withCurrency-${n}`],
                                t && ls.base__isDisabled,
                                this.state.isFocused && ls.base__isFocus,
                            ),
                            u = f()(
                                ls.buttonIncrement,
                                ls[`buttonIncrement__${n}`],
                                this.buttonIncrementIsDisabled && ls.buttonIncrement__isDisabled,
                                this.state.activeIncrement &&
                                    !this.buttonIncrementIsDisabled &&
                                    ls[`buttonIncrement__isActive-${this.props.size}`],
                            ),
                            s = f()(
                                ls.buttonDecrement,
                                ls[`buttonDecrement__${n}`],
                                this.buttonDecrementIsDisabled && ls.buttonDecrement__isDisabled,
                                this.state.activeDecrement &&
                                    !this.buttonDecrementIsDisabled &&
                                    ls[`buttonDecrement__isActive-${this.props.size}`],
                            ),
                            i = f()(
                                ls.input,
                                t && ls.input__disabled,
                                a && ls.input__withCurrency,
                                a && ls[`input__${a}-${n}`],
                                a && ls[`input__${a}`],
                                a && t && ls[`input__${a}-disabled`],
                            ),
                            l = f()(ls.currencyIcon, a && ls[`currencyIcon__${a}-${n}`]),
                            c = f()(ls.currency, a && ls[`currency__${a}`], a && ls[`currency__${a}-${n}`]);
                        return o().createElement(
                            'div',
                            {
                                className: r,
                                ref: this.numericalStepper,
                                style: ((m = this.props.width), m ? { width: `${m}rem` } : {}),
                            },
                            o().createElement(
                                'div',
                                { className: ls.inputContainer },
                                a &&
                                    o().createElement(
                                        'div',
                                        { className: c },
                                        o().createElement('span', { className: ls.dummyValue }, this.formattedValue),
                                        o().createElement('span', { className: l }),
                                    ),
                                o().createElement('input', {
                                    ref: this.input,
                                    className: i,
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
                            o().createElement(
                                'div',
                                { className: ls.control },
                                o().createElement('div', {
                                    className: u,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.incrementHandleMouseEnter,
                                    onMouseDown: this.incrementHandleMouseDown,
                                }),
                                o().createElement('div', {
                                    className: s,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.decrementHandleMouseEnter,
                                    onMouseDown: this.decrementHandleMouseDown,
                                }),
                            ),
                        );
                        var m;
                    }
                }
                cs.defaultProps = {
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
                const ms = R.strings.ny.craftView.purchaseForm,
                    _s = R.images.new_year.gui.maps.icons.newYear,
                    ds = R.views.new_year.lobby.new_year.tooltips,
                    Es = [
                        {
                            icon: _s.craft_machine.purchaseForm.ten(),
                            smallIcon: _s.craft_machine.purchaseForm.ten_small(),
                            text: ms.rule_1(),
                        },
                        { icon: _s.main_menu.quests(), smallIcon: _s.main_menu.quests_small(), text: ms.rule_2() },
                    ],
                    ps = (0, K.Pi)(() => {
                        const e = Hn(),
                            t = e.model,
                            n = e.controls,
                            a = t.surpriseMachineModel.get(),
                            r = a.purchaseFormState,
                            u = a.exchangeRate,
                            i = t.computes.getCurrencyCount(pn.Mandarin),
                            l = (0, s.useState)(0),
                            c = l[0],
                            m = l[1],
                            _ = r === ne.NOT_AVAILABLE,
                            d = r === ne.ERROR,
                            E = N().mediaSize >= y.Large,
                            p = (0, s.useMemo)(() => Math.floor(i / u), [i, u]),
                            g = 0 === c || p <= 0,
                            v = (0, s.useCallback)(() => n.onMachineBuyBtnClick({ count: c }), [c, n]),
                            h = (0, s.useCallback)(() => n.onMachineGoToQuests(), [n]);
                        (0, s.useEffect)(() => {
                            p && m(1);
                        }, [p]);
                        const b = (0, s.useCallback)(
                            (e) => {
                                m(e > p ? p : e);
                            },
                            [p],
                        );
                        return o().createElement(
                            'div',
                            { className: os.base },
                            o().createElement('div', { className: os.boxes }),
                            o().createElement(je, { className: os.header, text: ms.header() }),
                            o().createElement(je, { className: os.description, text: ms.description() }),
                            _ &&
                                o().createElement(
                                    'div',
                                    { className: os.ruleList },
                                    Es.map(({ icon: e, smallIcon: t, text: n }, a) => {
                                        const r = `url(${E ? e : t})`;
                                        return o().createElement(
                                            'div',
                                            { className: os.rule, key: `rule-${a}` },
                                            o().createElement('div', {
                                                className: os.icon,
                                                style: { backgroundImage: r },
                                            }),
                                            o().createElement(je, { className: os.ruleText, text: n }),
                                        );
                                    }),
                                ),
                            !_ && o().createElement('div', { className: os.divider }),
                            d &&
                                o().createElement(
                                    'div',
                                    { className: os.error },
                                    o().createElement('div', { className: os.errorIcon }),
                                    o().createElement(je, { className: os.errorText, text: ms.errorText() }),
                                ),
                            !_ &&
                                o().createElement(
                                    'div',
                                    { className: os.content },
                                    o().createElement(An, {
                                        iconPosition: bn.Right,
                                        value: u * c,
                                        size: hn.Medium,
                                        tooltipConfig: {
                                            contentId: ds.NyCurrencyTooltip('resId'),
                                            args: { currency: pn.Mandarin },
                                        },
                                        classNames: { value: os.price, icon: os.keyIcon, base: os.currency },
                                    }),
                                    o().createElement(
                                        'div',
                                        { className: os.stepperWrapper },
                                        o().createElement(cs, {
                                            value: c,
                                            minimum: 0,
                                            maximum: p,
                                            onChange: b,
                                            isDisabled: !p,
                                            width: 104,
                                            isFocused: !0,
                                        }),
                                        o().createElement(
                                            be,
                                            {
                                                mixClass: f()(os.btn, os.btn__buy),
                                                size: pe.medium,
                                                disabled: g,
                                                type: Ee.main,
                                                onClick: v,
                                            },
                                            ms.buyBtn(),
                                        ),
                                    ),
                                ),
                            _ &&
                                o().createElement(
                                    be,
                                    { mixClass: os.btn, size: pe.medium, type: Ee.primary, onClick: h },
                                    ms.backBtn(),
                                ),
                        );
                    }),
                    gs = {
                        base: 'SliderItem_base_b4',
                        base__left: 'SliderItem_base__left_47',
                        blinkInLeft: 'SliderItem_blinkInLeft_ff',
                        base__right: 'SliderItem_base__right_0f',
                        blinkInRight: 'SliderItem_blinkInRight_6c',
                        base__outAnimation: 'SliderItem_base__outAnimation_95',
                        blinkOutLeft: 'SliderItem_blinkOutLeft_a6',
                        blinkOutRight: 'SliderItem_blinkOutRight_4f',
                        base__disabled: 'SliderItem_base__disabled_53',
                        glow: 'SliderItem_glow_c1',
                        glow__visible: 'SliderItem_glow__visible_ba',
                        sliderContainer: 'SliderItem_sliderContainer_b4',
                        content: 'SliderItem_content_c8',
                        iconWrapper: 'SliderItem_iconWrapper_3f',
                        customizationIcon: 'SliderItem_customizationIcon_e9',
                        name: 'SliderItem_name_7e',
                    },
                    vs = R.strings.ny.craftView.slider;
                let hs;
                !(function (e) {
                    (e.LEFT = 'left'), (e.RIGHT = 'right');
                })(hs || (hs = {}));
                const bs = (0, s.memo)(
                        ({
                            currentViewType: e,
                            isOutAnimation: t,
                            direction: n,
                            image: a,
                            disabled: r = !1,
                            onClick: u,
                        }) => {
                            const i = (0, s.useState)(!1),
                                l = i[0],
                                c = i[1],
                                m = f()(gs.base, gs[`base__${n}`], t && gs.base__outAnimation, r && gs.base__disabled),
                                _ = (0, s.useCallback)(() => {
                                    c(!0), (0, G.G)(R.sounds.highlight());
                                }, [c]),
                                d = (0, s.useCallback)(() => c(!1), [c]),
                                E = (0, s.useCallback)(() => {
                                    const t = e === te.SPEND_TOKENS ? te.GET_TOKENS : te.SPEND_TOKENS;
                                    u(t), (0, G.G)(R.sounds.tabb());
                                }, [e, u]);
                            return o().createElement(
                                'div',
                                { className: m, onClick: E, onMouseEnter: _, onMouseLeave: d },
                                o().createElement(
                                    'div',
                                    { className: gs.sliderContainer },
                                    o().createElement('div', { className: f()(gs.glow, l && gs.glow__visible) }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: gs.content },
                                    o().createElement(je, { text: vs.$dyn(e), className: gs.name }),
                                    a &&
                                        o().createElement(
                                            'div',
                                            { className: gs.iconWrapper },
                                            o().createElement('div', {
                                                className: gs.customizationIcon,
                                                style: { backgroundImage: a },
                                            }),
                                        ),
                                ),
                            );
                        },
                    ),
                    As = (0, s.memo)(
                        ({ currentViewType: e, isOutAnimation: t, onSliderClick: n, disabled: a = !1 }) => {
                            const r = Rt(),
                                u = R.images.new_year.gui.maps.icons.newYear.common.currency.$dyn(
                                    r ? 'c_48x48' : 'c_64x64',
                                ),
                                s = e === te.GET_TOKENS,
                                i = s ? '' : `url(${u.$dyn('ny25Token')})`;
                            return o().createElement(
                                'div',
                                { className: f()('Slider_base_df', s && 'Slider_base__left_92') },
                                o().createElement(bs, {
                                    direction: s ? hs.LEFT : hs.RIGHT,
                                    image: i,
                                    currentViewType: e,
                                    isOutAnimation: t,
                                    onClick: n,
                                    disabled: a,
                                }),
                            );
                        },
                    ),
                    Cs = {
                        base: 'VehicleReward_base_25',
                        footer: 'VehicleReward_footer_5a',
                        widgetFadeIn: 'VehicleReward_widgetFadeIn_d8',
                        title: 'VehicleReward_title_d3',
                        type: 'VehicleReward_type_c9',
                        buttons: 'VehicleReward_buttons_17',
                        button: 'VehicleReward_button_a8',
                        widgetFadeOut: 'VehicleReward_widgetFadeOut_1b',
                    },
                    fs = R.strings.ny.videoRewardView,
                    Ds = (0, K.Pi)(() => {
                        const e = Hn(),
                            t = e.model,
                            n = e.controls,
                            a = t.surpriseMachineModel.get().vehicleReward,
                            r = a.vehicleName,
                            u = a.vehicleLvl,
                            s = a.vehicleType,
                            i = a.isElite,
                            l = `${se(s)}${i ? '_elite' : ''}`,
                            c = R.images.gui.maps.icons.vehicleTypes.big.$dyn(l),
                            m = N().mediaSize < y.Medium ? pe.small : pe.medium;
                        return o().createElement(
                            'div',
                            { className: Cs.base },
                            o().createElement(
                                'div',
                                { className: Cs.footer },
                                o().createElement(
                                    'div',
                                    { className: Cs.title },
                                    o().createElement(
                                        'span',
                                        { className: Cs.level },
                                        o().createElement(je, { text: Qe(u) }),
                                    ),
                                    o().createElement('div', {
                                        className: Cs.type,
                                        style: { backgroundImage: `url('${c}')` },
                                    }),
                                    o().createElement(je, { text: r }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Cs.buttons },
                                    o().createElement(
                                        be,
                                        {
                                            type: Ee.primary,
                                            size: m,
                                            mixClass: Cs.button,
                                            onClick: n.onCloseRewardVehicle,
                                        },
                                        o().createElement(je, { text: fs.submit() }),
                                    ),
                                    o().createElement(
                                        be,
                                        { type: Ee.secondary, size: m, mixClass: Cs.button, onClick: n.onShowVehicle },
                                        o().createElement(je, { text: fs.toHangar() }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    ws = R.strings.ny.closeButton,
                    ys = (0, K.Pi)(() => {
                        const e = Hn(),
                            t = e.model,
                            n = e.controls,
                            a = t.root.get(),
                            r = a.viewType,
                            u = a.switchState,
                            i = a.isControlsLocked,
                            l = t.surpriseMachineModel.get(),
                            c = l.vehicleReward,
                            m = l.machineViews,
                            _ = l.isBtnHovered,
                            d = c.isMainViewVisible,
                            E = (0, s.useState)(te.SPEND_TOKENS),
                            p = E[0],
                            g = E[1],
                            v = (0, s.useState)(''),
                            h = v[0],
                            b = v[1],
                            A = (0, s.useState)(!0),
                            C = A[0],
                            D = A[1],
                            w = p === te.GET_TOKENS,
                            y = h === te.GET_TOKENS,
                            F = r === J.MACHINE,
                            B = u === ee.WITH_SWITCHING_OBJS,
                            S = m === te.SPEND_TOKENS_ACTIVE,
                            N = f()(
                                'NyMachineView_animation_4f',
                                !w || C
                                    ? 'NyMachineView_animation__slideOut_4a'
                                    : 'NyMachineView_animation__slideIn_6a',
                            ),
                            M = (0, s.useMemo)(
                                () =>
                                    m === te.SPEND_TOKENS || m === te.GET_TOKENS
                                        ? [ws.MainView(), n.onClose]
                                        : [ws.close(), n.onGoToMachineMain],
                                [m, n.onClose, n.onGoToMachineMain],
                            ),
                            x = M[0],
                            T = M[1],
                            k = (0, s.useCallback)(
                                (e) => {
                                    e === te.GET_TOKENS ? n.onGoToMachineBuyTokens() : n.onGoToMachineMain(), g(e);
                                },
                                [n],
                            );
                        return (
                            (0, s.useEffect)(() => {
                                D(B), !B && b(p);
                            }, [B]),
                            Z(() => {
                                if (m === te.SPEND_TOKENS_ACTIVE) return n.onGoToMachineMain();
                                n.onClose();
                            }),
                            o().createElement(
                                'div',
                                { className: 'NyMachineView_base_6e' },
                                o().createElement('div', { className: 'NyMachineView_vignette_d8' }),
                                o().createElement(
                                    'div',
                                    { className: f()('NyMachineView_close_39', i && 'NyMachineView_close__faded_45') },
                                    o().createElement(z, { caption: x, type: 'close', side: 'right', onClick: T }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: 'NyMachineView_sceneWrapper_f4' },
                                    o().createElement(Sa, {
                                        moveSpace: n.onMachineMoveSpace,
                                        onMouseOver3dScene: n.onMachineMouseOver3dScene,
                                        isPointerCursor: _,
                                    }),
                                ),
                                !S &&
                                    !B &&
                                    d &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', {
                                            className: f()(
                                                'NyMachineView_gradient_eb',
                                                !w && F && 'NyMachineView_gradient__visible_5b',
                                            ),
                                        }),
                                        o().createElement(
                                            'div',
                                            { className: 'NyMachineView_slider_ab' },
                                            o().createElement(As, {
                                                currentViewType: h,
                                                isOutAnimation: C,
                                                onSliderClick: k,
                                                disabled: i,
                                            }),
                                        ),
                                        y &&
                                            o().createElement(
                                                'div',
                                                { className: 'NyMachineView_purchaseForm_d8' },
                                                o().createElement('div', { className: N }, o().createElement(ps, null)),
                                            ),
                                        o().createElement('div', {
                                            className: f()(
                                                'NyMachineView_shadow_d6',
                                                w && F && 'NyMachineView_shadow__visible_b7',
                                            ),
                                        }),
                                    ),
                                !d && o().createElement(Ds, null),
                            )
                        );
                    }),
                    Fs = 'PetToySlots_divider_9f',
                    Bs = (0, K.Pi)(() => {
                        const e = Hn(),
                            t = e.model,
                            n = e.controls,
                            a = t.petSlots.get(),
                            r = t.computes.getPetSlotsItems(),
                            u = t.cityModel.get().atmosphereAnimation,
                            i = (0, s.useMemo)(
                                () =>
                                    a.map((e, a) =>
                                        o().createElement(
                                            'div',
                                            { className: 'PetToySlots_slotsGroup_9f', key: a },
                                            o().createElement(Mr, {
                                                slots: t.computes.getPetSlotsItemsGroup(a),
                                                atmosphereAnimation: u,
                                                onHoverSlot: n.onHoverSlot,
                                                onHoverOutSlot: n.onHoverOutSlot,
                                                isPetSlots: !0,
                                            }),
                                        ),
                                    ),
                                [r],
                            );
                        return o().createElement(
                            'div',
                            { className: 'PetToySlots_base_3f' },
                            o().createElement('div', { className: Fs }),
                            i,
                            o().createElement('div', { className: Fs }),
                        );
                    });
                function Ss() {
                    return (
                        (Ss =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ss.apply(this, arguments)
                    );
                }
                const Ns = R.strings.ny.petText,
                    Ms = (0, K.Pi)(() => {
                        const e = Hn(),
                            t = e.model,
                            n = e.controls,
                            a = N().mediaSize,
                            r = t.root.get().switchState,
                            u = t.cityModel.get().isGuiLootBoxesVisible,
                            i = t.petModel.get().isSlotVisited,
                            l = (0, s.useState)(!1),
                            c = l[0],
                            m = l[1],
                            _ = (0, s.useState)(!1),
                            d = _[0],
                            E = _[1],
                            p = a > y.Small ? wa.Large : wa.Small,
                            g = r === ee.WITH_SWITCHING_OBJS;
                        return (
                            (0, s.useEffect)(
                                () =>
                                    d
                                        ? (0, j.F)(() => {
                                              m(!0);
                                          }, 200)
                                        : g
                                          ? m(!0)
                                          : void m(!1),
                                [g, d],
                            ),
                            o().createElement(
                                'div',
                                { className: 'NyPetView_base_e8' },
                                o().createElement(
                                    'div',
                                    { className: 'NyPetView_sceneWrapper_fd' },
                                    o().createElement(Sa, {
                                        moveSpace: n.onPetMoveSpace,
                                        onMouseOver3dScene: n.onPetMouseOver3dScene,
                                        setMouseDown: E,
                                        isMouseDown: d,
                                    }),
                                ),
                                u &&
                                    o().createElement(
                                        'div',
                                        { className: 'NyPetView_lootBox_bf' },
                                        o().createElement(
                                            Ba,
                                            Ss({}, t.lootboxEntry.get(), {
                                                size: p,
                                                onClick: n.onLootBoxEntryPointClick,
                                            }),
                                        ),
                                    ),
                                o().createElement(
                                    'div',
                                    { className: f()('NyPetView_slots_4a', c && 'NyPetView_slots__outAnimation_fd') },
                                    o().createElement(Bs, null),
                                ),
                                o().createElement('div', { className: 'NyPetView_bottomShadow_b0' }),
                                !i &&
                                    o().createElement(
                                        'div',
                                        {
                                            className: f()(
                                                'NyPetView_greeting_89',
                                                c && 'NyPetView_greeting__outAnimation_fd',
                                            ),
                                        },
                                        o().createElement(
                                            'div',
                                            { className: 'NyPetView_greetingContent_1f' },
                                            o().createElement('div', { className: 'NyPetView_greetingShadow_08' }),
                                            o().createElement(je, {
                                                text: Ns.title(),
                                                className: 'NyPetView_title_91',
                                            }),
                                            o().createElement(je, {
                                                text: Ns.description(),
                                                className: 'NyPetView_description_ba',
                                            }),
                                        ),
                                    ),
                            )
                        );
                    }),
                    xs = {
                        base: 'LevelsRewards_base_ce',
                        header: 'LevelsRewards_header_48',
                        columnHeader: 'LevelsRewards_columnHeader_fb',
                        columnHeader__completed: 'LevelsRewards_columnHeader__completed_9e',
                        columnHeader__current: 'LevelsRewards_columnHeader__current_d7',
                        levelColumn: 'LevelsRewards_levelColumn_a8',
                        levelColumn__disabled: 'LevelsRewards_levelColumn__disabled_83',
                    };
                let Ts;
                !(function (e) {
                    (e[(e.c5 = 5)] = 'c5'),
                        (e[(e.c6 = 6)] = 'c6'),
                        (e[(e.c7 = 7)] = 'c7'),
                        (e[(e.c8 = 8)] = 'c8'),
                        (e[(e.c9 = 9)] = 'c9'),
                        (e[(e.c10 = 10)] = 'c10'),
                        (e[(e.c11 = 11)] = 'c11');
                })(Ts || (Ts = {}));
                const ks = ['ko', 'no'],
                    Rs = R.strings.settings.LANGUAGE_CODE(),
                    Is = {
                        base: 'DiscountReward_base_3a',
                        discountReward: 'DiscountReward_discountReward_fc',
                        base__small: 'DiscountReward_base__small_3f',
                        base__medium: 'DiscountReward_base__medium_4b',
                        base__big: 'DiscountReward_base__big_85',
                        base__extraBig: 'DiscountReward_base__extraBig_d4',
                        base__huge: 'DiscountReward_base__huge_c2',
                        base__bright: 'DiscountReward_base__bright_18',
                        vehicleLevel: 'DiscountReward_vehicleLevel_d5',
                        base__applied: 'DiscountReward_base__applied_f8',
                        vehicleLevel__visible: 'DiscountReward_vehicleLevel__visible_e4',
                        discountWrapper: 'DiscountReward_discountWrapper_20',
                        discountAmount: 'DiscountReward_discountAmount_79',
                        discountAmountValue: 'DiscountReward_discountAmountValue_0d',
                        discountAmountValue__visible: 'DiscountReward_discountAmountValue__visible_13',
                        discountAmountIcon: 'DiscountReward_discountAmountIcon_12',
                        shine: 'DiscountReward_shine_dc',
                        base__disabled: 'DiscountReward_base__disabled_8e',
                        base__onlyTextAnimation: 'DiscountReward_base__onlyTextAnimation_d1',
                        discountApplied: 'DiscountReward_discountApplied_63',
                        buttonContainer: 'DiscountReward_buttonContainer_44',
                        base__defaultAnimation: 'DiscountReward_base__defaultAnimation_d5',
                        buttonWrapper: 'DiscountReward_buttonWrapper_1e',
                        base__onlyButtonAnimation: 'DiscountReward_base__onlyButtonAnimation_21',
                        button: 'DiscountReward_button_9d',
                        button__label: 'DiscountReward_button__label_6e',
                    },
                    Ls = R.images.gui.maps.icons.vehicle,
                    Os = R.images.gui.maps.shop.vehicles.c_360x270,
                    Ps = R.strings.quests.bonuses.variadicDiscount.buttonLabel(),
                    Hs = R.strings.roman_numerals,
                    Vs = (0, s.memo)(
                        ({ bonus: e, options: t, size: n = Ot.Medium, hasTooltip: a = !1, onSelectReward: r }) => {
                            const u = e.level,
                                i = e.discount,
                                l = e.selectedVehicle,
                                c = e.variadicID,
                                m = t || {},
                                _ = m.animation,
                                d = m.disabled,
                                E = m.iconType,
                                p = m.isBrightOnHover,
                                g = m.isButtonHidden,
                                v = m.isLevelHidden,
                                h = void 0 !== v && v,
                                b = m.useCoverIconWhenSelected,
                                A = (0, s.useRef)(null),
                                C = `${((e, t) => {
                                    const n = 'R.images.gui.maps.icons';
                                    return `${n}.${e !== Vt.AchievementReward || (t !== Ot.Small && t !== Ot.Medium) ? 'quests.bonuses' : `${n}.achievement.big`}.${(() => {
                                        switch (t) {
                                            case Ot.Small:
                                            case Ot.Medium:
                                                return 'big';
                                            case Ot.Big:
                                                return 's180x135';
                                            case Ot.ExtraBig:
                                                return 's232x174';
                                            case Ot.Huge:
                                                return 's296x222';
                                        }
                                    })()}`;
                                })(Vt.VariadicDiscount, n)}.${Vt.VariadicDiscount}`,
                                D = E === Ht.Big,
                                w = D ? Os : Ls,
                                y = (0, s.useMemo)(() => (l && D ? l.split(':')[1] : l), [D, l]),
                                F = y && !b ? w.$dyn(se(y)) : C,
                                B = ks.includes(Rs) ? u : Hs.$dyn(`n_${u}`),
                                S = (0, s.useState)(!1),
                                N = S[0],
                                M = S[1],
                                x = _ !== Pt.None,
                                T = { variadicID: c, discount: i },
                                k = { popoverId: 'NYSelectVehicleForDiscountPopover', variadicID: c },
                                I = { backgroundImage: `url('${F}')` };
                            (0, s.useEffect)(() => {
                                !x && N && M(!1);
                            }, [x, N]),
                                $r(() => {
                                    !A.current ||
                                        l ||
                                        d ||
                                        _ === Pt.OnlyText ||
                                        _ === Pt.None ||
                                        (A.current.style.backgroundImage =
                                            "url('swf://gui/flash/animations/newYear/godRaysSmall.swf')");
                                }, [_, d, l]);
                            const L = f()(
                                    Is.base,
                                    Is[`base__${n}`],
                                    d && Is.base__disabled,
                                    p && Is.base__bright,
                                    l && Is.base__applied,
                                ),
                                O = i > 0 ? `-${i}` : '',
                                P = o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        ct,
                                        {
                                            contentId:
                                                R.views.new_year.lobby.new_year.tooltips.NyDiscountRewardTooltip(
                                                    'resId',
                                                ),
                                            args: T,
                                        },
                                        o().createElement(
                                            'div',
                                            { className: Is.discountReward, style: I },
                                            o().createElement(
                                                'div',
                                                { className: f()(Is.vehicleLevel, !h && Is.vehicleLevel__visible) },
                                                B,
                                            ),
                                            o().createElement(
                                                'div',
                                                { className: Is.discountWrapper },
                                                o().createElement(
                                                    'div',
                                                    { className: Is.discountAmount },
                                                    o().createElement('div', { className: Is.discountAmountIcon }, '%'),
                                                    o().createElement(
                                                        'div',
                                                        {
                                                            className: f()(
                                                                Is.discountAmountValue,
                                                                !h && Is.discountAmountValue__visible,
                                                            ),
                                                        },
                                                        O,
                                                    ),
                                                ),
                                            ),
                                            o().createElement('div', { className: Is.shine, ref: A }),
                                            o().createElement('div', { className: Is.discountApplied }),
                                        ),
                                    ),
                                    !g &&
                                        o().createElement(
                                            'div',
                                            { className: Is.buttonContainer },
                                            o().createElement(
                                                'div',
                                                { className: Is.buttonWrapper },
                                                o().createElement(
                                                    'div',
                                                    null,
                                                    o().createElement(
                                                        be,
                                                        {
                                                            size: pe.small,
                                                            type: Ee.main,
                                                            mixClass: Is.button,
                                                            onClick: r,
                                                        },
                                                        o().createElement('div', { className: Is.button__label }, Ps),
                                                    ),
                                                ),
                                            ),
                                        ),
                                );
                            return o().createElement(
                                'div',
                                {
                                    className: L,
                                    onMouseEnter: () => {
                                        x && M(!0);
                                    },
                                    onMouseLeave: () => {
                                        N && M(!1);
                                    },
                                },
                                (!d && !l) || a ? o().createElement(on, { args: k }, P) : P,
                            );
                        },
                    ),
                    Gs = (e, t = Je.Small) => {
                        const n = se(e.vehicleName || '');
                        if (e.name === Ze.Vehicles)
                            switch (t) {
                                case Je.Mini:
                                case Je.Small:
                                case Je.S48x48:
                                    return e.isRent
                                        ? 'R.images.gui.maps.icons.quests.bonuses.small.vehicles_rent'
                                        : 'R.images.gui.maps.icons.quests.bonuses.small.vehicles';
                                case Je.Big:
                                case Je.S80x80:
                                    return e.isRent
                                        ? 'R.images.gui.maps.icons.quests.bonuses.big.vehicles_rent'
                                        : 'R.images.gui.maps.icons.quests.bonuses.big.vehicles';
                                case Je.S128x100:
                                case Je.S180x135:
                                    return `R.images.gui.maps.shop.vehicles.c_180x135.${n}`;
                                case Je.S232x174:
                                case Je.S296x222:
                                    return `R.images.gui.maps.shop.vehicles.c_360x270.${n}`;
                                case Je.S400x300:
                                case Je.S600x450:
                                    return `R.images.gui.maps.shop.vehicles.c_600x450.${n}`;
                                default:
                                    return (
                                        console.error('Unknown vehicle image size', t, e.vehicleName),
                                        'R.images.gui.maps.icons.quests.bonuses.big.vehicles'
                                    );
                            }
                        if (e.name === Ze.TmanToken)
                            switch (t) {
                                case Je.Mini:
                                case Je.Small:
                                case Je.S48x48:
                                case Je.Big:
                                case Je.S80x80:
                                    return `R.images.gui.maps.icons.tankmen.icons.s80x80.${e.icon}`;
                                case Je.S128x100:
                                case Je.S180x135:
                                case Je.S232x174:
                                    return `R.images.gui.maps.icons.tankmen.icons.s232x174.ny_${e.icon}`;
                                case Je.S296x222:
                                    return `R.images.gui.maps.icons.tankmen.icons.s296x222.${e.icon}`;
                                case Je.S400x300:
                                    return `R.images.gui.maps.icons.tankmen.icons.s400x300.${e.icon}`;
                                case Je.S600x450:
                                    return `R.images.gui.maps.icons.tankmen.icons.s600x450.${e.icon}`;
                                default:
                                    return (
                                        console.error('Unknown image size', t),
                                        'R.images.gui.maps.icons.tankmen.icons.s600x450.tankman'
                                    );
                            }
                        return St(e, t);
                    },
                    Ws = 'RewardsList_reward__disabled_b0',
                    $s = {
                        animation: Pt.None,
                        disabled: !1,
                        iconType: Ht.Big,
                        animationType: Pt.None,
                        isButtonHidden: !1,
                        isPopoverOpened: !1,
                        useCoverIconWhenSelected: !0,
                    },
                    Us = o().memo(
                        ({
                            rewardsData: e,
                            columnIndex: t,
                            levelText: n,
                            isLevelAchieved: a,
                            isCurrentLevel: r,
                            onGotoStore: u,
                            onSelectVehicleDiscount: s,
                            isVertical: i = !1,
                            count: l = 0,
                            classMix: c,
                            rewardItemClassMix: m,
                            boxRewardTooltip: _,
                            boxRewardValue: d,
                        }) => {
                            const E = N().mediaSize,
                                p = E >= y.Large ? Je.Big : Je.Small,
                                g = E >= y.Large ? Ot.Medium : Ot.Small,
                                v = l && l < e.length ? `R.images.gui.maps.icons.quests.bonuses.${p}.default` : '',
                                h = a && !r,
                                b = n === (_n[10] || ''),
                                A = a && b,
                                C =
                                    null != d
                                        ? d
                                        : ue(R.strings.ny.levelsRewards.more(), { count: e.length - (l || 0) }),
                                D = f()('RewardsList_base_06', i && 'RewardsList_base__vertical_9a', c),
                                w = f()('RewardsList_reward_7e', i && 'RewardsList_reward__vertical_34', m),
                                F = (e, n) => {
                                    const r = A && Lt(e);
                                    if ('variadicDiscount' === e.name) {
                                        const t = e,
                                            r = !t.selectedVehicle && (a || A);
                                        return o().createElement(
                                            'div',
                                            {
                                                key: n,
                                                className: f()(w, 'RewardsList_discount_6b', t.selectedVehicle && Ws),
                                            },
                                            r &&
                                                o().createElement('div', {
                                                    className: 'RewardsList_discount__highlight_7a',
                                                }),
                                            o().createElement(Vs, {
                                                bonus: t,
                                                options: Object.assign({}, $s, { isButtonHidden: !r, disabled: !r }),
                                                size: g,
                                                onSelectReward: s,
                                            }),
                                        );
                                    }
                                    return e.name === Ze.Vehicles
                                        ? o().createElement(
                                              'div',
                                              { key: n, className: f()(w, h && Ws) },
                                              o().createElement(xt, {
                                                  size: p,
                                                  name: 'premiumTank',
                                                  image: Gs(e, p),
                                                  special: e.overlayType,
                                                  value: e.label,
                                                  valueType: yt(e.name),
                                                  tooltipArgs: Nt(
                                                      { tooltipId: e.tooltipId, idx: t },
                                                      Number(e.tooltipContentId),
                                                  ),
                                              }),
                                          )
                                        : o().createElement(
                                              'div',
                                              { key: n, className: f()(w, h && !r && Ws) },
                                              o().createElement(xt, {
                                                  size: p,
                                                  name: e.name,
                                                  image: Gs(e, p),
                                                  special: e.overlayType,
                                                  value: e.value,
                                                  valueType: yt(e.name),
                                                  tooltipArgs: Nt(
                                                      { tooltipId: e.tooltipId, idx: t },
                                                      Number(e.tooltipContentId),
                                                  ),
                                              }),
                                              Lt(e) &&
                                                  A &&
                                                  o().createElement(
                                                      be,
                                                      {
                                                          mixClass: 'RewardsList_storeButton_01',
                                                          type: Ee.primaryGreen,
                                                          size: E >= y.Large ? pe.small : pe.extraSmall,
                                                          onClick: u,
                                                      },
                                                      R.strings.ny.levelsRewards.gotoStoreBtn(),
                                                  ),
                                          );
                                };
                            return o().createElement(
                                'div',
                                { className: D },
                                v
                                    ? o().createElement(
                                          o().Fragment,
                                          null,
                                          e.slice(0, l).map((e, t) => F(e, t)),
                                          o().createElement(
                                              'div',
                                              { className: f()(w, h && Ws) },
                                              o().createElement(xt, {
                                                  name: 'more',
                                                  image: v,
                                                  size: p,
                                                  value: C,
                                                  tooltipArgs: _,
                                              }),
                                          ),
                                      )
                                    : e.map((e, t) => F(e, t)),
                            );
                        },
                    ),
                    zs = (e) => (e === y.ExtraLarge ? Ts.c7 : e === y.Medium ? Ts.c6 : Ts.c5),
                    js = ({
                        idx: e,
                        levelText: t,
                        isLevelAchieved: n,
                        isCurrentLevel: a,
                        rewardsGroup: r,
                        isLastLevelCompleted: u,
                        onGotoStore: s,
                        onSelectVehicleDiscount: i,
                    }) => {
                        const l = N().mediaSize,
                            c = r.length > zs(l) + 1 ? zs(l) : r.length,
                            m = {
                                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                args: { showedCount: c, idx: e },
                            },
                            _ = f()('RewardsColumn_particlesLine_a7', a && 'RewardsColumn_particlesLine__current_9b'),
                            d = f()(_, 'RewardsColumn_particlesLine__right_65'),
                            E = f()(_, 'RewardsColumn_particlesLine__left_89'),
                            p = f()(
                                'RewardsColumn_particlesPattern_ee',
                                a && !u && 'RewardsColumn_particlesPattern__current_85',
                                !n && !a && 'RewardsColumn_particlesPattern__notAchieved_1e',
                            );
                        return o().createElement(
                            'div',
                            { className: 'RewardsColumn_base_8d' },
                            o().createElement(
                                'div',
                                { className: 'RewardsColumn_particles_62' },
                                o().createElement('div', { className: p }),
                                a &&
                                    !u &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: d }),
                                        o().createElement('div', { className: E }),
                                    ),
                            ),
                            o().createElement(
                                'div',
                                { className: 'RewardsColumn_rewards_b7' },
                                o().createElement(Us, {
                                    onGotoStore: s,
                                    onSelectVehicleDiscount: i,
                                    rewardsData: r,
                                    columnIndex: e,
                                    count: c,
                                    boxRewardTooltip: m,
                                    rewardItemClassMix: 'RewardsColumn_rewardItem_11',
                                    levelText: t,
                                    isLevelAchieved: n,
                                    isCurrentLevel: a,
                                    isVertical: !0,
                                }),
                            ),
                        );
                    };
                function qs() {
                    return (
                        (qs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        qs.apply(this, arguments)
                    );
                }
                const Ys = R.strings.ny.rewardsView;
                let Xs;
                !(function (e) {
                    (e.Completed = 'completed'), (e.Current = 'current'), (e.NotSelected = 'notSelected');
                })(Xs || (Xs = {}));
                const Qs = (0, K.Pi)(() => {
                        const e = Hn(),
                            t = e.model,
                            n = e.controls,
                            a = t.computes.levelsRewardRenderers(),
                            r = t.computes.getCurrentLevel(),
                            u = a.length,
                            s = (e, t, n) => ((e && !t) || n ? Xs.Completed : !e && t ? Xs.Current : Xs.NotSelected);
                        return o().createElement(
                            'div',
                            { className: xs.base },
                            a.map((e, a) => {
                                const i = e.isLevelAchieved && e.isCurrentLevel && a === u - 1,
                                    l = a === (null == r ? void 0 : r.idx) || !1;
                                return o().createElement(
                                    'div',
                                    { key: a, className: f()(xs.levelColumn) },
                                    o().createElement(
                                        'div',
                                        { className: xs.header },
                                        o().createElement(
                                            vt,
                                            {
                                                header: Ys.tooltip.completedLevel.header(),
                                                body: Ys.tooltip.completedLevel.body(),
                                                isEnabled: s(e.isLevelAchieved, l, i) === Xs.Completed,
                                            },
                                            o().createElement('div', {
                                                className: f()(
                                                    xs.columnHeader,
                                                    xs[`columnHeader__${s(e.isLevelAchieved, l, i)}`],
                                                ),
                                            }),
                                        ),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: xs.column },
                                        o().createElement(
                                            js,
                                            qs({}, e, {
                                                isCurrentLevel: l,
                                                rewardsGroup: t.computes.getLevelRewardsGroup(a),
                                                onGotoStore: n.onGotoStore,
                                                isLastLevelCompleted: i,
                                                onSelectVehicleDiscount: n.onSelectVehicleDiscount,
                                            }),
                                        ),
                                    ),
                                );
                            }),
                        );
                    }),
                    Zs = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Ks, Js;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                })(Ks || (Ks = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Js || (Js = {}));
                const eo = ({ size: e = Ks.Default }) =>
                        o().createElement('div', { className: f()(Zs.background, Zs[`background__${e}`]) }),
                    to = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    no = ({ size: e }) => {
                        const t = f()(to.base, to[`base__${e}`]);
                        return o().createElement('div', { className: t });
                    },
                    ao = {
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
                    ro = (0, s.memo)(
                        ({ size: e, lineRef: t, disabled: n, baseStyles: a, isComplete: r, withoutBounce: u }) => {
                            const s = f()(
                                    ao.base,
                                    ao[`base__${e}`],
                                    n && ao.base__disabled,
                                    r && ao.base__finished,
                                    u && ao.base__withoutBounce,
                                ),
                                i = !n && !r;
                            return o().createElement(
                                'div',
                                { className: s, style: a, ref: t },
                                o().createElement('div', { className: ao.pattern }),
                                o().createElement('div', { className: ao.gradient }),
                                i && o().createElement(no, { size: e }),
                            );
                        },
                    );
                let uo, so;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(uo || (uo = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(so || (so = {}));
                const oo = (e) => (e ? { left: 0 } : { right: 0 }),
                    io = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    lo = (e) => ({ transitionDuration: `${e}ms` }),
                    co = (0, s.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: a,
                            size: r,
                            to: u,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const m = u < a,
                                _ = (0, s.useState)(uo.Idle),
                                d = _[0],
                                E = _[1],
                                p = d === uo.End,
                                g = d === uo.Idle,
                                v = d === uo.Grow,
                                h = d === uo.Shrink,
                                b = (0, s.useCallback)(
                                    (e) => {
                                        E(e), l && l(e);
                                    },
                                    [l],
                                ),
                                A = (0, s.useCallback)(
                                    (e, t) =>
                                        (0, j.F)(() => {
                                            b(e);
                                        }, t),
                                    [b],
                                );
                            (0, s.useEffect)(() => {
                                if (!n)
                                    return g
                                        ? A(uo.Grow, t)
                                        : v
                                          ? A(uo.Shrink, e)
                                          : h
                                            ? A(uo.End, e)
                                            : void (p && i && i());
                            }, [A, n, p, v, g, h, i, t, e]);
                            const C = (0, s.useMemo)(() => Object.assign({ width: '100%' }, lo(e), oo(m)), [m, e]),
                                D = (0, s.useMemo)(() => Object.assign({ width: '0%' }, lo(e), oo(m)), [m, e]),
                                w = (0, s.useMemo)(() => Object.assign({ width: '0%' }, io(m, a), lo(e)), [a, m, e]),
                                y = (0, s.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(u - a)}%` }, io(m, a), lo(e)),
                                    [a, m, u, e],
                                );
                            if (p) return null;
                            const F = f()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                m && 0 === u && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return o().createElement(
                                'div',
                                { style: g ? w : y, className: F },
                                o().createElement(
                                    'div',
                                    { style: h ? D : C, className: 'ProgressBarDeltaGrow_glow_68' },
                                    o().createElement(no, { size: r }),
                                ),
                            );
                        },
                    ),
                    mo = (0, s.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: a,
                            disabled: r,
                            isComplete: u,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const m = e < n,
                                _ = (0, s.useState)(!1),
                                d = _[0],
                                E = _[1],
                                p = (0, s.useCallback)(
                                    (e) => {
                                        e === uo.Shrink && E(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                g = (0, s.useMemo)(() => ({ width: `${n}%`, transitionProperty: 'none' }), [n]),
                                v = (0, s.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(ro, {
                                    size: t,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: u,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: d ? v : g,
                                }),
                                n >= 0 &&
                                    o().createElement(co, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: p,
                                        freezed: i.freezed,
                                        onEndAnimation: l,
                                        from: n,
                                        size: t,
                                        to: e,
                                        className: i.delta.className,
                                    }),
                            );
                        },
                    ),
                    _o = (0, s.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: a,
                            size: r,
                            to: u,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = u < a,
                                m = (0, s.useState)(so.Idle),
                                _ = m[0],
                                d = m[1],
                                E = _ === so.In,
                                p = _ === so.End,
                                g = _ === so.Idle,
                                v = (0, s.useCallback)(
                                    (e) => {
                                        d(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, s.useEffect)(() => {
                                if (g && !n) {
                                    const e = t;
                                    return (0, j.F)(() => {
                                        v(so.In);
                                    }, e);
                                }
                            }, [v, n, g, t]),
                                (0, s.useEffect)(() => {
                                    if (E) {
                                        const n = e + t;
                                        return (0, j.F)(() => {
                                            i && i(), v(so.End);
                                        }, n);
                                    }
                                }, [v, E, i, t, e]);
                            const h = (0, s.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                b = (0, s.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                A = (0, s.useMemo)(
                                    () => ({ width: `${Math.abs(a - u)}%`, left: `${c ? u : a}%` }),
                                    [a, c, u],
                                );
                            return p
                                ? null
                                : o().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: A },
                                      o().createElement(
                                          'div',
                                          { style: g ? h : b, className: 'ProgressBarDeltaSimple_delta_99' },
                                          o().createElement(no, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    Eo = (0, s.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: a,
                            disabled: r,
                            isComplete: u,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const m = (0, s.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, e],
                            );
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(ro, {
                                    size: t,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: u,
                                    baseStyles: m,
                                }),
                                n >= 0 &&
                                    o().createElement(_o, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        freezed: i.freezed,
                                        from: n,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    po = ['onComplete', 'onEndAnimation'];
                function go() {
                    return (
                        (go =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        go.apply(this, arguments)
                    );
                }
                const vo = (0, s.memo)((e) => {
                        let t = e.onComplete,
                            n = e.onEndAnimation,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, po);
                        const r = (0, s.useState)(!1),
                            u = r[0],
                            i = r[1],
                            l = (0, s.useCallback)(() => {
                                const e = 100 === a.to;
                                e !== u && i(e), e && t && t(), n && n();
                            }, [u, t, n, a.to]);
                        switch (a.animationSettings.type) {
                            case Js.Simple:
                                return o().createElement(Eo, go({}, a, { onEndAnimation: l, isComplete: u }));
                            case Js.Growing:
                                return o().createElement(mo, go({}, a, { onEndAnimation: l, isComplete: u }));
                            default:
                                return null;
                        }
                    }),
                    ho = ({ size: e, value: t, lineRef: n, disabled: a, onComplete: r }) => {
                        const u = (0, s.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            i = 100 === t;
                        return (
                            (0, s.useEffect)(() => {
                                i && r && r();
                            }, [i, r]),
                            o().createElement(ro, { size: e, disabled: a, baseStyles: u, isComplete: i, lineRef: n })
                        );
                    },
                    bo = ['onEndAnimation'];
                function Ao() {
                    return (
                        (Ao =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ao.apply(this, arguments)
                    );
                }
                const Co = (0, s.memo)((e) => {
                    let t = e.onEndAnimation,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, bo);
                    const a = (0, s.useRef)({}),
                        r = (0, s.useCallback)(() => {
                            (a.current.from = void 0), t && t();
                        }, [t]),
                        u = 'number' == typeof a.current.from ? a.current.from : n.from;
                    return (
                        (a.current.from = u),
                        o().createElement(vo, Ao({}, n, { onEndAnimation: r, key: `${u}-${n.to}`, from: u }))
                    );
                });
                function fo() {
                    return (
                        (fo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        fo.apply(this, arguments)
                    );
                }
                const Do = (0, s.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: n,
                            disabled: a,
                            deltaFrom: r,
                            animationSettings: u,
                            onEndAnimation: s,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (r === t)
                                return o().createElement(ho, {
                                    key: `${r}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: n,
                                    disabled: a,
                                    onComplete: l,
                                });
                            const c = {
                                from: r,
                                to: t,
                                size: e,
                                lineRef: n,
                                disabled: a,
                                animationSettings: u,
                                onComplete: l,
                                onEndAnimation: s,
                                onChangeAnimationState: i,
                            };
                            return u.withStack
                                ? o().createElement(Co, c)
                                : o().createElement(vo, fo({ key: `${r}-${t}` }, c));
                        },
                    ),
                    wo = (e) => ({
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
                    yo = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: { bgColorBase: '#005aca', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_blue',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow_blue',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small_blue',
                        delta: {
                            color: '#c2ffff',
                            shadow: '0 0 4px 1px #00e4ff66, 0 0 9px 1px #00c6ff66, 0 0 12px 2px #00a8ff66, 0 0 12px 4px #0b5aca66',
                        },
                    },
                    Fo = (e, t, n) => ('number' == typeof n ? (Wr(0, t, n) / t) * 100 : e),
                    Bo = {
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
                    So = {
                        freezed: !1,
                        withStack: !1,
                        type: Js.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    No = (0, s.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = Bo,
                            size: n = Ks.Default,
                            animationSettings: a = So,
                            disabled: r = !1,
                            withoutBackground: u = !1,
                            value: i,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: m,
                            onEndAnimation: _,
                            onComplete: d,
                        }) => {
                            const E = ((e, t, n) =>
                                (0, s.useMemo)(() => {
                                    const a = (Wr(0, t, e) / t) * 100;
                                    return { value: a, deltaFrom: Fo(a, t, n) };
                                }, [n, t, e]))(i, e, l);
                            return o().createElement(
                                'div',
                                { className: f()(Zs.base, Zs[`base__${n}`]), style: wo(t) },
                                !u && o().createElement(eo, { size: n }),
                                o().createElement(Do, {
                                    size: n,
                                    lineRef: c,
                                    disabled: r,
                                    value: E.value,
                                    deltaFrom: E.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: _,
                                    onChangeAnimationState: m,
                                    onComplete: d,
                                }),
                            );
                        },
                    ),
                    Mo = ['api', 'value', 'maxValue', 'theme'];
                function xo() {
                    return (
                        (xo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        xo.apply(this, arguments)
                    );
                }
                const To = (e, t) => ('number' == typeof t ? t : e.offsetLeft),
                    ko = (e) => {
                        let t = e.api,
                            n = e.value,
                            a = e.maxValue,
                            r = void 0 === a ? 100 : a,
                            u = e.theme,
                            i = void 0 === u ? Bo : u,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Mo);
                        const c = (0, s.useRef)(null),
                            m = (0, s.useRef)(null),
                            _ = (0, s.useRef)(null),
                            d = Wr(0, n, r) / r,
                            E = (0, s.useCallback)(
                                (e) => {
                                    _.current &&
                                        c.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: t }, n, a) => {
                                            const r = n.offsetWidth - a.offsetWidth,
                                                u = e - To(n, t),
                                                s = Wr(0, r, u);
                                            a.style.left = `${s}px`;
                                        })(e, c.current, _.current),
                                        m.current &&
                                            c.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: t },
                                                n,
                                                { container: a, line: r },
                                            ) => {
                                                const u = Math.max(0, Math.floor(a.offsetWidth * n) - 8e3),
                                                    s = e - To(a, t),
                                                    o = Wr(0, u, s);
                                                r.style.left = `${o}px`;
                                            })(e, d, { line: m.current, container: c.current });
                                },
                                [d],
                            ),
                            p = (0, s.useMemo)(() => wo(i), [i]);
                        return (
                            (t.current.update = E),
                            o().createElement(
                                'div',
                                { className: 'OptimizedProgressBar_base_1f', ref: c },
                                o().createElement(
                                    'div',
                                    { className: 'OptimizedProgressBar_wrapper_ab' },
                                    o().createElement(
                                        'div',
                                        { style: p, className: 'OptimizedProgressBar_background_ce', ref: _ },
                                        o().createElement(eo, { size: l.size }),
                                    ),
                                    o().createElement(
                                        No,
                                        xo({}, l, {
                                            lineRef: m,
                                            value: n,
                                            theme: i,
                                            maxValue: r,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    },
                    Ro = Object.assign({}, So, {
                        withStack: !0,
                        type: Js.Growing,
                        delta: { duration: 400, delay: 300 },
                        line: { duration: 400, delay: 300 },
                    }),
                    Io = {
                        [y.ExtraSmall]: { columnWidth: 84, columnMargin: 2 },
                        [y.Small]: { columnWidth: 100, columnMargin: 2 },
                        [y.Medium]: { columnWidth: 130, columnMargin: 2 },
                        [y.Large]: { columnWidth: 158, columnMargin: 2 },
                        [y.ExtraLarge]: { columnWidth: 170, columnMargin: 2 },
                    },
                    Lo = (e, t) => (t < 0 ? 0 : e[t].maxPoints),
                    Oo = {
                        base: 'Progression_base_60',
                        container: 'Progression_container_bf',
                        container__first: 'Progression_container__first_6b',
                        container__last: 'Progression_container__last_01',
                        progressLineContainer: 'Progression_progressLineContainer_db',
                        progressBar: 'Progression_progressBar_e8',
                        barWrapper: 'Progression_barWrapper_e3',
                        points: 'Progression_points_b5',
                        point: 'Progression_point_2b',
                        point__last: 'Progression_point__last_69',
                        point__lastActive: 'Progression_point__lastActive_41',
                        point__hidden: 'Progression_point__hidden_cb',
                        numberContainer: 'Progression_numberContainer_03',
                        numberContainer__bottom: 'Progression_numberContainer__bottom_49',
                        disabledLabel: 'Progression_disabledLabel_05',
                        line: 'Progression_line_e8',
                        line__top: 'Progression_line__top_70',
                        line__bottom: 'Progression_line__bottom_30',
                        currentValue: 'Progression_currentValue_19',
                    },
                    Po = R.strings.ny.rewardsView.tooltip,
                    Ho = (0, s.memo)(({ currentLevel: e, levels: t, points: n }) => {
                        const a = N().mediaSize,
                            r = (0, s.useRef)({ update: () => {} }),
                            u = t[t.length - 1].maxPoints,
                            i = u === n,
                            l = Io[a],
                            c = l.columnWidth / 2 + l.columnMargin,
                            m = l.columnWidth * t.length + l.columnMargin * t.length,
                            _ = ((e, t, n) => {
                                let a = 0;
                                const r = Lo(n, t - 2),
                                    u = Lo(n, n.length - 1) / n.length;
                                return (
                                    n.forEach(({ maxPoints: n }, s) => {
                                        s < t &&
                                            (a += ((e, t, n, a) => (e >= t ? a : (a / (t - n)) * (e - n)))(e, n, r, u));
                                    }),
                                    a
                                );
                            })(n, e, t),
                            d = (m * _) / u - 25;
                        return o().createElement(
                            'div',
                            { className: Oo.base },
                            o().createElement(
                                'div',
                                { className: f()(Oo.container, Oo.container__last) },
                                o().createElement(
                                    'div',
                                    {
                                        className: Oo.progressLineContainer,
                                        style: { transform: `translateX(-${c}rem)` },
                                    },
                                    t.map((t, n) =>
                                        o().createElement(
                                            'div',
                                            {
                                                key: t.number,
                                                className: f()(Oo.point, t.number + 1 >= 10 && Oo.point__large),
                                                style: {
                                                    transform: `translateX(${(n + 1) * (l.columnWidth + l.columnMargin)}rem)`,
                                                },
                                            },
                                            o().createElement(
                                                vt,
                                                {
                                                    header: Po.nextLevel.header(),
                                                    body: Po.nextLevel.body(),
                                                    isEnabled: t.number + 1 >= e,
                                                },
                                                o().createElement(
                                                    'div',
                                                    { className: Oo.numberContainer },
                                                    o().createElement(je, {
                                                        className: t.number + 1 >= e && Oo.disabledLabel,
                                                        text: String(Qe(t.number + 1)),
                                                    }),
                                                ),
                                            ),
                                            o().createElement('div', { className: f()(Oo.line, Oo.line__top) }),
                                            o().createElement('div', { className: f()(Oo.line, Oo.line__bottom) }),
                                            o().createElement(
                                                'div',
                                                { className: f()(Oo.numberContainer, Oo.numberContainer__bottom) },
                                                o().createElement(je, { text: String(t.maxPoints) }),
                                            ),
                                        ),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: Oo.barWrapper },
                                        !i &&
                                            o().createElement(
                                                'div',
                                                {
                                                    className: f()(Oo.numberContainer, Oo.currentValue),
                                                    style: { transform: `translateX(${d}rem)` },
                                                },
                                                o().createElement(je, { text: n }),
                                            ),
                                        o().createElement(ko, {
                                            theme: yo,
                                            animationSettings: Ro,
                                            value: _,
                                            maxValue: u,
                                            api: r,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Vo = (0, K.Pi)(() => {
                        const e = Hn(),
                            t = e.model,
                            n = e.controls,
                            a = t.rewardsModel.get(),
                            r = a.isFaded,
                            u = a.progressionPoints,
                            i = a.progressionLevel,
                            l = t.computes.getProgressionLevels(),
                            c = N().mediaSize,
                            m = Io[c],
                            _ = m.columnWidth * l.length + m.columnMargin * l.length;
                        return (
                            (0, s.useEffect)(() => {
                                if (r)
                                    return (0, j.F)(() => {
                                        n.onRewardsFadeInDone();
                                    }, 700);
                            }, [r, n]),
                            o().createElement(
                                'div',
                                {
                                    className: f()(
                                        'NyRewardsInfoView_base_0f',
                                        r && 'NyRewardsInfoView_base__faded_0e',
                                    ),
                                },
                                o().createElement(
                                    'div',
                                    {
                                        className: 'NyRewardsInfoView_progressionContainer_1b',
                                        style: { width: `${_}rem` },
                                    },
                                    o().createElement(Ho, { currentLevel: i + 1, points: u, levels: l }),
                                ),
                                o().createElement(Qs, null),
                            )
                        );
                    }),
                    Go = Object.assign({}, l, { huge: { weight: 5, width: 3840, height: 2054 } });
                let Wo;
                !(function (e) {
                    (e[(e.ExtraSmall = Go.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = Go.small.width)] = 'Small'),
                        (e[(e.Medium = Go.medium.width)] = 'Medium'),
                        (e[(e.Large = Go.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = Go.extraLarge.width)] = 'ExtraLarge'),
                        (e[(e.Huge = Go.huge.width)] = 'Huge');
                })(Wo || (Wo = {}));
                const $o = 'AnimationControl_icon_71',
                    Uo = 'AnimationControl_icon__hover_b4',
                    zo = R.strings.ny.questGiver.buttons.animation,
                    jo = 'R.images.new_year.gui.maps.icons.newYear.tasks.dailyQuests',
                    qo = (0, s.memo)(({ state: e, onClick: t }) => {
                        const n = (0, s.useState)(!1),
                            a = n[0],
                            r = n[1];
                        return o().createElement(
                            'div',
                            {
                                className: 'AnimationControl_base_ef',
                                onClick: () => {
                                    t(), G.$.playClick();
                                },
                                onMouseEnter: () => {
                                    G.$.playHighlight(), r(!0);
                                },
                                onMouseLeave: () => {
                                    r(!1);
                                },
                            },
                            o().createElement('div', { className: 'AnimationControl_bg_ea' }),
                            o().createElement('div', {
                                className: f()($o, !a && Uo),
                                style: { backgroundImage: `url(${jo}.video_${e + '_default'})` },
                            }),
                            o().createElement('div', {
                                className: f()($o, a && Uo),
                                style: { backgroundImage: `url(${jo}.video_${e + '_hover'})` },
                            }),
                            o().createElement(Re, { text: zo.$dyn(e) || '', classMix: 'AnimationControl_text_a8' }),
                        );
                    }),
                    Yo = [];
                function Xo(e) {
                    const t = (0, s.useRef)(e);
                    return (
                        (0, s.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, s.useCallback)((...e) => (0, t.current)(...e), Yo)
                    );
                }
                function Qo(e, t, n = []) {
                    const a = (0, s.useRef)(0),
                        r = (0, s.useCallback)(() => window.clearInterval(a.current), n || []);
                    (0, s.useEffect)(() => r, [r]);
                    const u = (null != n ? n : []).concat([t]);
                    return [
                        (0, s.useCallback)((n) => {
                            (a.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, u),
                        r,
                    ];
                }
                function Zo(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                let Ko;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Ko || (Ko = {}));
                const Jo = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    ei = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const i = (e, n) => {
                            const a = t(e),
                                r = a[0],
                                u = a[1];
                            return Wr(r, u, n);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                m = void 0 === c ? Jo : c,
                                _ = (0, s.useRef)(null),
                                d = (0, s.useRef)(null),
                                E = (() => {
                                    const e = (0, s.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        n = (e, n) => {
                                            t(e).set(n, n);
                                        },
                                        a = (e, n) => {
                                            t(e).delete(n);
                                        },
                                        r = (e, ...n) => {
                                            for (
                                                var a,
                                                    r = (function (e, t) {
                                                        var n =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (n) return (n = n.call(e)).next.bind(n);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (n = (function (e, t) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return Zo(e, t);
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
                                                                              ? Zo(e, t)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (t && e && 'number' == typeof e.length)
                                                        ) {
                                                            n && (e = n);
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
                                                    })(t(e).values());
                                                !(a = r()).done;

                                            )
                                                (0, a.value)(...n);
                                        };
                                    return (0, s.useMemo)(() => ({ on: n, off: a, trigger: r }), []);
                                })(),
                                p = (function (e, t, n) {
                                    const a = (0, s.useMemo)(
                                        () =>
                                            (function (e, t, n, a) {
                                                let r,
                                                    u = !1,
                                                    s = 0;
                                                function o() {
                                                    r && clearTimeout(r);
                                                }
                                                function i(...i) {
                                                    const l = this,
                                                        c = Date.now() - s;
                                                    function m() {
                                                        (s = Date.now()), n.apply(l, i);
                                                    }
                                                    u ||
                                                        (a && !r && m(),
                                                        o(),
                                                        void 0 === a && c > e
                                                            ? m()
                                                            : !0 !== t &&
                                                              (r = setTimeout(
                                                                  a
                                                                      ? function () {
                                                                            r = void 0;
                                                                        }
                                                                      : m,
                                                                  void 0 === a ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof t && ((a = n), (n = t), (t = void 0)),
                                                    (i.cancel = function () {
                                                        o(), (u = !0);
                                                    }),
                                                    i
                                                );
                                            })(n, e),
                                        t,
                                    );
                                    return (0, s.useEffect)(() => a.cancel, [a]), a;
                                })(
                                    () => {
                                        u.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, ba.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = _.current;
                                        t && (n(t, e), E.trigger('change', e), o && p());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                v = g[0],
                                h = g[1],
                                b = (0, s.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const r = v.scrollPosition.get(),
                                            u = (null != (a = v.scrollPosition.goal) ? a : 0) - r;
                                        return i(e, t * n + u + r);
                                    },
                                    [v.scrollPosition],
                                ),
                                A = (0, s.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = _.current;
                                        a &&
                                            h.start({
                                                scrollPosition: i(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: m.animationConfig,
                                                from: { scrollPosition: i(a, v.scrollPosition.get()) },
                                            });
                                    },
                                    [h, m.animationConfig, v.scrollPosition],
                                ),
                                C = (0, s.useCallback)(
                                    (e) => {
                                        const t = _.current,
                                            n = d.current;
                                        if (!t || !n) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, m.step),
                                            u = b(t, e, a);
                                        A(u);
                                    },
                                    [A, b, m.step],
                                ),
                                f = (0, s.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && C(a(e)),
                                            _.current && E.trigger('mouseWheel', e, v.scrollPosition, t(_.current));
                                    },
                                    [v.scrollPosition, C, E],
                                ),
                                D = zr(
                                    () =>
                                        (0, Zt.v)(() => {
                                            const e = _.current;
                                            e &&
                                                (A(i(e, v.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [A, v.scrollPosition.goal],
                                ),
                                w = Xo(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const t = i(e, v.scrollPosition.goal);
                                    t !== v.scrollPosition.goal && A(t, { immediate: !0 }),
                                        E.trigger('recalculateContent');
                                });
                            return (
                                (0, s.useEffect)(
                                    () => (
                                        window.addEventListener('resize', D),
                                        () => {
                                            window.removeEventListener('resize', D);
                                        }
                                    ),
                                    [D],
                                ),
                                (0, s.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (d.current ? r(d.current) : void 0),
                                        getContainerSize: () => (_.current ? e(_.current) : void 0),
                                        getBounds: () =>
                                            _.current
                                                ? t(_.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: m.step.clampedArrowStepTimeout,
                                        clampPosition: i,
                                        handleMouseWheel: f,
                                        applyScroll: A,
                                        applyStepTo: C,
                                        contentRef: _,
                                        wrapperRef: d,
                                        scrollPosition: h,
                                        animationScroll: v,
                                        recalculateContent: w,
                                        events: { on: E.on, off: E.off },
                                    }),
                                    [v.scrollPosition, A, C, E.off, E.on, w, f, h, m.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    ti = ei({
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
                        getDirection: (e) => (e.deltaY > 1 ? Ko.Next : Ko.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    ni = 'HorizontalBar_base__nonActive_82',
                    ai = 'disable',
                    ri = { pending: !1, offset: 0 },
                    ui = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    si = () => {},
                    oi = (e, t) => Math.max(20, e.offsetWidth * t),
                    ii = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = ui, onDrag: a = si }) => {
                        const r = (0, s.useRef)(null),
                            u = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            l = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, s.useState)(ri),
                            d = _[0],
                            E = _[1],
                            p = (0, s.useCallback)(
                                (e) => {
                                    E(e),
                                        c.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [a],
                            ),
                            g = () => {
                                const t = l.current,
                                    n = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / r),
                                    m = Wr(0, 1, s / (r - a)),
                                    _ = (t.offsetWidth - oi(t, o)) * m;
                                (n.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (u.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return u.current.classList.add(ai), void i.current.classList.remove(ai);
                                            if (
                                                ((t = l.current),
                                                (n = c.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return u.current.classList.remove(ai), void i.current.classList.add(ai);
                                            var t, n;
                                            u.current.classList.remove(ai), i.current.classList.remove(ai);
                                        }
                                    })(_);
                            },
                            v = Xo(() => {
                                (() => {
                                    const t = c.current,
                                        n = l.current,
                                        a = e.getWrapperSize(),
                                        u = e.getContainerSize();
                                    if (!(u && t && a && n)) return;
                                    const s = Math.min(1, a / u);
                                    (t.style.width = `${oi(n, s)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === s ? r.current.classList.add(ni) : r.current.classList.remove(ni));
                                })(),
                                    g();
                            });
                        (0, s.useEffect)(() => (0, Zt.v)(v)),
                            (0, s.useEffect)(
                                () =>
                                    (0, Zt.v)(() => {
                                        const t = () => {
                                            g();
                                        };
                                        let n = si;
                                        const a = () => {
                                            n(), (n = (0, Zt.v)(v));
                                        };
                                        return (
                                            e.events.on('recalculateContent', v),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                n(),
                                                    e.events.off('recalculateContent', v),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, s.useEffect)(() => {
                                if (!d.pending) return;
                                const t = (t) => {
                                        var n;
                                        const r = e.contentRef.current;
                                        if (!r) return;
                                        const u = l.current,
                                            s = c.current;
                                        if (!r || !u || !s) return;
                                        const o = t.screenX - d.offset - u.getBoundingClientRect().x,
                                            i = (o / u.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: i });
                                    },
                                    n = () => {
                                        window.removeEventListener('mousemove', t), p(ri);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', n),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', n);
                                    }
                                );
                            }, [e, d.offset, d.pending, a, p]);
                        const h = Qo((t) => e.applyStepTo(t), m, [e]),
                            b = h[0],
                            A = h[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', A, !0),
                                () => document.removeEventListener('mouseup', A, !0)
                            ),
                            [A],
                        );
                        const C = (e) => {
                            e.target.classList.contains(ai) || (0, G.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: f()('HorizontalBar_base_49', t.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: f()('HorizontalBar_leftButton_5f', t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ai) || 0 !== e.button || ((0, G.G)('play'), b(Ko.Next));
                                },
                                onMouseUp: A,
                                ref: u,
                                onMouseEnter: C,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: f()('HorizontalBar_track_0d', t.track),
                                    onMouseDown: (t) => {
                                        const a = c.current;
                                        a &&
                                            0 === t.button &&
                                            ((0, G.G)('play'),
                                            t.target === a
                                                ? p({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x })
                                                : ((t) => {
                                                      const a = c.current,
                                                          r = e.contentRef.current;
                                                      if (!a || !r) return;
                                                      const u = n(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + u * t);
                                                  })(t.screenX > a.getBoundingClientRect().x ? Ko.Prev : Ko.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: C,
                                },
                                o().createElement('div', { ref: c, className: f()('HorizontalBar_thumb_fd', t.thumb) }),
                                o().createElement('div', { className: f()('HorizontalBar_rail_32', t.rail) }),
                            ),
                            o().createElement('div', {
                                className: f()('HorizontalBar_rightButton_03', t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ai) || 0 !== e.button || ((0, G.G)('play'), b(Ko.Prev));
                                },
                                onMouseUp: A,
                                ref: i,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    li = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ci = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        classNames: u,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, s.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: f()(li.base, e.base) });
                            }, [a]),
                            _ = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: f()(li.defaultScroll, n), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: f()(li.defaultScrollArea, r) },
                                o().createElement(mi, { className: i, api: _, classNames: u }, e),
                            ),
                            o().createElement(ii, { getStepByRailClick: l, api: t, onDrag: c, classNames: m }),
                        );
                    },
                    mi = ({ api: e, className: t, classNames: n, children: a, style: r }) => (
                        (0, s.useEffect)(() => (0, Zt.v)(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: f()(li.base, t), style: r },
                            o().createElement(
                                'div',
                                {
                                    className: f()(li.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: f()(li.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (mi.Bar = ii),
                    (mi.Default = ci),
                    (mi.SeniorityAwards = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, s.useEffect)(() => (0, Zt.v)(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: f()(li.base, t) },
                            o().createElement(
                                'div',
                                { className: f()(li.wrapper, null == n ? void 0 : n.wrapper), ref: e.wrapperRef },
                                o().createElement(
                                    'div',
                                    { className: f()(li.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    ));
                const _i = ei({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Ko.Next : Ko.Prev),
                    }),
                    di = 'VerticalBar_base__nonActive_42',
                    Ei = 'disable',
                    pi = () => {},
                    gi = { pending: !1, offset: 0 },
                    vi = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    hi = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    bi = (e, t) => Math.max(20, e.offsetHeight * t),
                    Ai = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = vi, onDrag: a = pi }) => {
                        const r = (0, s.useRef)(null),
                            u = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            l = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, s.useState)(gi),
                            d = _[0],
                            E = _[1],
                            p = (0, s.useCallback)(
                                (e) => {
                                    E(e),
                                        c.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [a],
                            ),
                            g = Xo(() => {
                                const t = c.current,
                                    n = l.current,
                                    a = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(a && u && t && n)) return;
                                const s = Math.min(1, a / u);
                                return (
                                    (t.style.height = `${bi(n, s)}px`),
                                    t.classList.add('VerticalBar_thumb_32'),
                                    r.current &&
                                        (1 === s ? r.current.classList.add(di) : r.current.classList.remove(di)),
                                    s
                                );
                            }),
                            v = Xo(() => {
                                const t = l.current,
                                    n = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / r),
                                    m = Wr(0, 1, s / (r - a)),
                                    _ = (t.offsetHeight - bi(t, o)) * m;
                                (n.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (u.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return u.current.classList.add(Ei), void i.current.classList.remove(Ei);
                                            if (
                                                ((t = l.current),
                                                (n = c.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return u.current.classList.remove(Ei), void i.current.classList.add(Ei);
                                            var t, n;
                                            u.current.classList.remove(Ei), i.current.classList.remove(Ei);
                                        }
                                    })(_);
                            }),
                            h = Xo(() => {
                                hi(e, () => {
                                    g(), v();
                                });
                            });
                        (0, s.useEffect)(() => (0, Zt.v)(h)),
                            (0, s.useEffect)(() => {
                                const t = () => {
                                    hi(e, () => {
                                        v();
                                    });
                                };
                                let n = pi;
                                const a = () => {
                                    n(), (n = (0, Zt.v)(h));
                                };
                                return (
                                    e.events.on('recalculateContent', h),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        n(),
                                            e.events.off('recalculateContent', h),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a);
                                    }
                                );
                            }, [e]),
                            (0, s.useEffect)(() => {
                                if (!d.pending) return;
                                const t = (t) => {
                                        hi(e, (n) => {
                                            const r = l.current,
                                                u = c.current,
                                                s = e.getContainerSize();
                                            if (!r || !u || !s) return;
                                            const o = t.screenY - d.offset - r.getBoundingClientRect().y,
                                                i = (o / r.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: u, thumbOffset: o, contentOffset: i });
                                        });
                                    },
                                    n = () => {
                                        window.removeEventListener('mousemove', t), p(gi);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', n),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', n);
                                    }
                                );
                            }, [e, d.offset, d.pending, a, p]);
                        const b = Qo((t) => e.applyStepTo(t), m, [e]),
                            A = b[0],
                            C = b[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const D = (e) => {
                            e.target.classList.contains(Ei) || (0, G.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: f()('VerticalBar_base_f3', t.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: f()('VerticalBar_topButton_d7', t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ei) || 0 !== e.button || ((0, G.G)('play'), A(Ko.Next));
                                },
                                ref: u,
                                onMouseEnter: D,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: f()('VerticalBar_track_df', t.track),
                                    onMouseDown: (t) => {
                                        const a = c.current;
                                        var r;
                                        a &&
                                            0 === t.button &&
                                            ((0, G.G)('play'),
                                            t.target === a
                                                ? p({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y })
                                                : ((r = t.screenY > a.getBoundingClientRect().y ? Ko.Prev : Ko.Next),
                                                  c.current &&
                                                      hi(e, (t) => {
                                                          if (!t) return;
                                                          const a = n(e),
                                                              u = e.clampPosition(t, t.scrollTop + a * r);
                                                          e.applyScroll(u);
                                                      })));
                                    },
                                    ref: l,
                                    onMouseEnter: D,
                                },
                                o().createElement('div', { ref: c, className: t.thumb }),
                                o().createElement('div', { className: f()('VerticalBar_rail_43', t.rail) }),
                            ),
                            o().createElement('div', {
                                className: f()('VerticalBar_bottomButton_06', t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ei) || 0 !== e.button || ((0, G.G)('play'), A(Ko.Prev));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    Ci = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    fi = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        scrollClassName: u,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, s.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: f()(Ci.base, e.base) });
                            }, [a]),
                            _ = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: f()(Ci.defaultScroll, n), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: f()(Ci.area, r) },
                                o().createElement(Di, { className: u, classNames: i, api: _ }, e),
                            ),
                            o().createElement(Ai, { getStepByRailClick: l, api: t, onDrag: c, classNames: m }),
                        );
                    },
                    Di = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, s.useEffect)(() => (0, Zt.v)(a.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: f()(Ci.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: f()(Ci.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                Di.Default = fi;
                const wi = { Vertical: r, Horizontal: a },
                    yi = () => {
                        const e = (0, s.useState)(u.O.view.getScale()),
                            t = e[0],
                            n = e[1];
                        return (
                            (0, s.useEffect)(() => {
                                const e = () => {
                                    n(u.O.view.getScale());
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
                    Fi = {
                        [y.ExtraSmall]: {
                            questCard: { height: 137, margin: 5 },
                            questHeader: { height: 58 },
                            containerHeight: 620,
                        },
                        [y.Small]: {
                            questCard: { height: 137, margin: 5 },
                            questHeader: { height: 58 },
                            containerHeight: 620,
                        },
                        [y.Medium]: {
                            questCard: { height: 190, margin: 10 },
                            questHeader: { height: 84 },
                            containerHeight: 700,
                        },
                        [y.Large]: {
                            questCard: { height: 190, margin: 10 },
                            questHeader: { height: 84 },
                            containerHeight: 900,
                        },
                        [y.ExtraLarge]: {
                            questCard: { height: 190, margin: 10 },
                            questHeader: { height: 84 },
                            containerHeight: 1250,
                        },
                    },
                    Bi = {
                        [Wo.ExtraSmall]: { width: '315rem', height: '180rem' },
                        [Wo.Small]: { width: '392rem', height: '223rem' },
                        [Wo.Medium]: { width: '422rem', height: '240rem' },
                        [Wo.Large]: { width: '492rem', height: '280rem' },
                        [Wo.ExtraLarge]: { width: '622rem', height: '353rem' },
                        [Wo.Huge]: { width: '845rem', height: '480rem' },
                    },
                    Si = {
                        [Wo.ExtraSmall]: Object.assign({}, Bi[Wo.ExtraSmall], { transform: 'translateY(-28rem)' }),
                        [Wo.Small]: Object.assign({}, Bi[Wo.Small], { transform: 'translateY(-36rem)' }),
                        [Wo.Medium]: Object.assign({}, Bi[Wo.Medium], { transform: 'translateY(-40rem)' }),
                        [Wo.Large]: Object.assign({}, Bi[Wo.Large], { transform: 'translateY(-42rem)' }),
                        [Wo.ExtraLarge]: Object.assign({}, Bi[Wo.ExtraLarge], { transform: 'translateY(-55rem)' }),
                        [Wo.Huge]: Object.assign({}, Bi[Wo.Huge], { transform: 'translateY(-75rem)' }),
                    },
                    Ni = {
                        tvZone: { width: '1850rem' },
                        video: { width: '1250rem', height: '1100rem' },
                        questsZone: { width: '1515rem' },
                        questsShadow: { width: '2000rem' },
                        buttons: { marginBottom: '46rem' },
                    },
                    Mi = Object.keys(Ni).reduce((e, t) => Object.assign({}, e, { [t]: t }), {}),
                    xi = {
                        freezed: !1,
                        withStack: !1,
                        type: Js.Growing,
                        delta: { duration: 500, delay: 500 },
                        line: { duration: 500, delay: 500 },
                    };
                let Ti, ki, Ri, Ii, Li;
                !(function (e) {
                    (e.Normal = 'normal'), (e.RecentlyCompleted = 'recentlyCompleted'), (e.Completed = 'completed');
                })(Ti || (Ti = {})),
                    (function (e) {
                        (e.Daily = 'daily'), (e.Weekly = 'weekly');
                    })(ki || (ki = {})),
                    (function (e) {
                        (e.Idle = 'idle'), (e.Play = 'play');
                    })(Ri || (Ri = {})),
                    (function (e) {
                        (e.BattleRoyale = 'battleRoyaleQueue'),
                            (e.Bootcamp = 'bootcamp'),
                            (e.Comp7 = 'comp7'),
                            (e.EpicQueue = 'epicQueue'),
                            (e.EpicTrainingsList = 'epicTrainingsList'),
                            (e.Mapbox = 'mapbox'),
                            (e.MapsTraining = 'mapsTraining'),
                            (e.Random = 'random'),
                            (e.Ranked = 'ranked'),
                            (e.SpecBattlesList = 'specBattlesList'),
                            (e.StoryMode = 'story_mode'),
                            (e.StrongholdsBattlesList = 'strongholdsBattlesList'),
                            (e.TrainingsList = 'trainingsList'),
                            (e.VersusAI = 'versusAI');
                    })(Ii || (Ii = {})),
                    (function (e) {
                        (e.Scroll = 'scroll'), (e.Buttons = 'buttons');
                    })(Li || (Li = {}));
                const Oi = (e, t, n) => e > t - n && e < t + n,
                    Pi = (e) => ({
                        headerHeight: Fi[e].questHeader.height,
                        cardHeight: Fi[e].questCard.height,
                        cardMargin: Fi[e].questCard.margin,
                        containerHeight: Fi[e].containerHeight,
                    }),
                    Hi = (e, t) =>
                        e.name === Ze.LootBoxToken ? `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}` : St(e, t),
                    Vi = (e, t) =>
                        e.map(({ value: e }) =>
                            Object.assign(
                                {
                                    key: e.index,
                                    size: t,
                                    special: e.overlayType,
                                    image: Hi(e, t),
                                    valueType: yt(e.name),
                                    tooltipArgs: Nt({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                                },
                                e,
                            ),
                        ),
                    Gi = (e, t) => {
                        if (e) return Ni[t];
                    },
                    Wi = 'DailyQuests_shadow_64',
                    $i = (0, s.memo)(({ isInfinite: e = !1 }) => {
                        const t = e ? 'infinite' : 1;
                        return o().createElement(
                            'div',
                            { className: 'Blink_base_81' },
                            o().createElement(
                                'div',
                                { className: 'Blink_blinkInner_2d', style: { animationIterationCount: t } },
                                o().createElement('div', { className: 'Blink_blink_17' }),
                            ),
                        );
                    }),
                    Ui = {
                        base: 'QuestCard_base_8a',
                        cardBg: 'QuestCard_cardBg_16',
                        bgMask: 'QuestCard_bgMask_57',
                        bgMask__normal: 'QuestCard_bgMask__normal_02',
                        bgMask__recentlyCompleted: 'QuestCard_bgMask__recentlyCompleted_b9',
                        fadeInBg: 'QuestCard_fadeInBg_bc',
                        bgMask__completed: 'QuestCard_bgMask__completed_b4',
                        scratches: 'QuestCard_scratches_10',
                        snow: 'QuestCard_snow_94',
                        bgCompleted: 'QuestCard_bgCompleted_56',
                        separator: 'QuestCard_separator_55',
                        separatorBg: 'QuestCard_separatorBg_4c',
                        conditionContainer: 'QuestCard_conditionContainer_c6',
                        rewardsContainer: 'QuestCard_rewardsContainer_48',
                        cardState: 'QuestCard_cardState_e9',
                        progressionLine: 'QuestCard_progressionLine_80',
                        rewards: 'QuestCard_rewards_f1',
                        conditionContainer__normal: 'QuestCard_conditionContainer__normal_11',
                        conditionContainer__recentlyCompleted: 'QuestCard_conditionContainer__recentlyCompleted_b0',
                        conditionContainer__completed: 'QuestCard_conditionContainer__completed_d3',
                        conditions: 'QuestCard_conditions_ab',
                        questTitle: 'QuestCard_questTitle_37',
                        questIcon: 'QuestCard_questIcon_99',
                        questDescription: 'QuestCard_questDescription_91',
                        progress: 'QuestCard_progress_df',
                        progressCount: 'QuestCard_progressCount_55',
                        rewardsShadow: 'QuestCard_rewardsShadow_28',
                        statusShadow: 'QuestCard_statusShadow_90',
                        rewardsShadow__completed: 'QuestCard_rewardsShadow__completed_4f',
                        statusShadow__completed: 'QuestCard_statusShadow__completed_0e',
                        rewards__normal: 'QuestCard_rewards__normal_4d',
                        rewards__recentlyCompleted: 'QuestCard_rewards__recentlyCompleted_57',
                        rewards__completed: 'QuestCard_rewards__completed_cd',
                        reward: 'QuestCard_reward_1f',
                        textContainer: 'QuestCard_textContainer_9f',
                        completedIcon: 'QuestCard_completedIcon_8e',
                        stateText: 'QuestCard_stateText_1f',
                        stateProgressText: 'QuestCard_stateProgressText_cf',
                        stateProgressText__normal: 'QuestCard_stateProgressText__normal_9d',
                        stateProgressText__recentlyCompleted: 'QuestCard_stateProgressText__recentlyCompleted_bb',
                        textSlideOut: 'QuestCard_textSlideOut_50',
                        stateProgressText__completed: 'QuestCard_stateProgressText__completed_ab',
                        completedText: 'QuestCard_completedText_3d',
                        completedText__normal: 'QuestCard_completedText__normal_f7',
                        completedText__recentlyCompleted: 'QuestCard_completedText__recentlyCompleted_03',
                        textSlideIn: 'QuestCard_textSlideIn_b0',
                        completedText__completed: 'QuestCard_completedText__completed_53',
                        bubble: 'QuestCard_bubble_ce',
                        glow: 'QuestCard_glow_4c',
                        normalGlow: 'QuestCard_normalGlow_28',
                        normalGlow__recentlyCompleted: 'QuestCard_normalGlow__recentlyCompleted_03',
                        fadeOutGlow: 'QuestCard_fadeOutGlow_1c',
                        normalGlow__completed: 'QuestCard_normalGlow__completed_b9',
                        completedGlow: 'QuestCard_completedGlow_9a',
                        completedGlow__recentlyCompleted: 'QuestCard_completedGlow__recentlyCompleted_7b',
                        fadeInGlow: 'QuestCard_fadeInGlow_fe',
                        completedGlow__completed: 'QuestCard_completedGlow__completed_c1',
                    };
                function zi() {
                    return (
                        (zi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        zi.apply(this, arguments)
                    );
                }
                const ji = R.strings.ny.questGiver,
                    qi = (0, s.memo)(
                        ({
                            title: e,
                            description: t,
                            currentProgress: n,
                            maxProgress: a,
                            deltaFrom: r,
                            bonuses: u,
                            questId: i,
                            icon: l = 'win',
                            isNew: c = !1,
                            isActiveProgress: m = !1,
                            onHover: _,
                        }) => {
                            const d = (0, s.useState)(c),
                                E = d[0],
                                p = d[1],
                                g = (({ lastValue: e, currentValue: t, maxValue: n }) =>
                                    t !== e && t === n
                                        ? Ti.RecentlyCompleted
                                        : t === e && t === n
                                          ? Ti.Completed
                                          : Ti.Normal)({ maxValue: a, currentValue: n, lastValue: r }),
                                v = (e, t) =>
                                    Object.assign({}, t, {
                                        args: Object.assign({}, null == t ? void 0 : t.args, { questId: e }),
                                    });
                            return (
                                (0, s.useEffect)(() => {
                                    p(c);
                                }, [c]),
                                o().createElement(
                                    'div',
                                    {
                                        className: f()(Ui.base),
                                        onMouseEnter: () => {
                                            p(!1), _();
                                        },
                                    },
                                    E && o().createElement('div', { className: Ui.bubble }),
                                    g === Ti.RecentlyCompleted &&
                                        o().createElement(
                                            o().Fragment,
                                            null,
                                            o().createElement($i, null),
                                            o().createElement('div', { className: Ui.cardBg }),
                                        ),
                                    o().createElement('div', { className: f()(Ui.bgMask, Ui[`bgMask__${g}`]) }),
                                    o().createElement('div', { className: Ui.scratches }),
                                    o().createElement('div', { className: Ui.snow }),
                                    o().createElement('div', { className: Ui.separatorBg }),
                                    o().createElement(
                                        'div',
                                        { className: f()(Ui.conditionContainer, Ui[`conditionContainer__${g}`]) },
                                        o().createElement(
                                            'div',
                                            { className: Ui.conditions },
                                            o().createElement(
                                                'div',
                                                { className: Ui.questTitle },
                                                o().createElement('div', {
                                                    className: Ui.questIcon,
                                                    style: {
                                                        backgroundImage: `url(R.images.gui.maps.icons.quests.battleCondition.c_90.icon_battle_condition_${l}_90x90)`,
                                                    },
                                                }),
                                                o().createElement(je, { text: e }),
                                            ),
                                            o().createElement(je, { text: t, className: Ui.questDescription }),
                                            m &&
                                                o().createElement(
                                                    'div',
                                                    { className: Ui.progress },
                                                    o().createElement(ka, {
                                                        text: ji.quests.progress.count(),
                                                        binding: { currentCount: n, allCount: a },
                                                        classMix: Ui.progressCount,
                                                    }),
                                                    o().createElement(
                                                        'div',
                                                        { className: Ui.progressionLine },
                                                        o().createElement(No, {
                                                            size: Ks.Small,
                                                            value: n,
                                                            deltaFrom: r,
                                                            maxValue: a,
                                                            animationSettings: xi,
                                                        }),
                                                    ),
                                                ),
                                        ),
                                    ),
                                    o().createElement('div', { className: Ui.separator }),
                                    o().createElement(
                                        'div',
                                        { className: Ui.rewardsContainer },
                                        o().createElement('div', {
                                            className: f()(Ui.rewardsShadow, Ui[`rewardsShadow__${g}`]),
                                        }),
                                        o().createElement(
                                            'div',
                                            { className: f()(Ui.rewards, Ui[`rewards__${g}`]) },
                                            u.map((e) =>
                                                o().createElement(
                                                    xt,
                                                    zi({ key: e.index }, e, {
                                                        tooltipArgs: v(i, e.tooltipArgs),
                                                        className: Ui.reward,
                                                    }),
                                                ),
                                            ),
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: Ui.cardState },
                                            o().createElement(
                                                'div',
                                                { className: Ui.textContainer },
                                                o().createElement(je, {
                                                    text: ji.quests.state.inProgress(),
                                                    className: f()(
                                                        Ui.stateText,
                                                        Ui.stateProgressText,
                                                        Ui[`stateProgressText__${g}`],
                                                    ),
                                                }),
                                                o().createElement(
                                                    'div',
                                                    {
                                                        className: f()(
                                                            Ui.stateText,
                                                            Ui.completedText,
                                                            Ui[`completedText__${g}`],
                                                        ),
                                                    },
                                                    o().createElement('div', { className: Ui.completedIcon }),
                                                    o().createElement(je, { text: ji.quests.state.completed() }),
                                                ),
                                            ),
                                        ),
                                        o().createElement('div', {
                                            className: f()(Ui.statusShadow, Ui[`statusShadow__${g}`]),
                                        }),
                                        o().createElement('div', {
                                            className: f()(Ui.glow, Ui.normalGlow, Ui[`normalGlow__${g}`]),
                                        }),
                                        o().createElement('div', {
                                            className: f()(Ui.glow, Ui.completedGlow, Ui[`completedGlow__${g}`]),
                                        }),
                                    ),
                                )
                            );
                        },
                    );
                let Yi, Xi;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })(Yi || (Yi = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(Xi || (Xi = {}));
                const Qi = 'Countdown_description_8d',
                    Zi = (e) => e.toString().padStart(2, '0'),
                    Ki = R.images.gui.maps.icons.components.countdown,
                    Ji = (e, t) => {
                        const n = 2 === t ? Ki.big : Ki;
                        switch (e) {
                            case Yi.Timer:
                                return n.clock();
                            case Yi.Countdown:
                                return n.hourglass();
                            case Yi.Cooldown:
                                return n.lock();
                        }
                    },
                    el = (0, s.memo)(
                        ({
                            duration: e,
                            icon: t = Yi.Timer,
                            style: n = Xi.Description,
                            onTimeReached: a,
                            className: r = '',
                            classNames: u = {},
                            labelFormat: s = '',
                        }) => {
                            const i = n !== Xi.Description ? 1 : void 0,
                                l = na(e, i),
                                c = yi();
                            a && a[l] && a[l]();
                            const m = ((e, t) => {
                                switch (t) {
                                    case Xi.Description:
                                        return ((e, t = !0) =>
                                            e.days > 7 && t
                                                ? re(R.strings.common.duration.days(), { days: e.days })
                                                : e.days >= 1
                                                  ? 0 === e.hours
                                                      ? re(R.strings.common.duration.days(), { days: e.days })
                                                      : `${re(R.strings.common.duration.days(), { days: e.days })} ${re(R.strings.common.duration.hours(), { hours: e.hours })}`
                                                  : e.hours >= 1
                                                    ? 0 === e.minutes
                                                        ? re(R.strings.common.duration.hours(), { hours: e.hours })
                                                        : `${re(R.strings.common.duration.hours(), { hours: e.hours })} ${re(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                                    : re(R.strings.common.duration.minutes(), {
                                                          minutes: e.minutes || 1,
                                                      }))(e);
                                    case Xi.Short:
                                        return `${Zi(e.minutes)}:${Zi(e.seconds)}`;
                                    case Xi.Long:
                                        return `${Zi(e.hours)}:${Zi(e.minutes)}:${Zi(e.seconds)}`;
                                    case Xi.Extended:
                                        return `${re(R.strings.common.duration.days(), { days: e.days })} | ${Zi(e.hours)}:${Zi(e.minutes)}:${Zi(e.seconds)}`;
                                }
                            })(
                                (function (e = 0) {
                                    let t = e;
                                    const n = Math.trunc(t / 86400);
                                    t -= 86400 * n;
                                    const a = Math.trunc(t / 3600);
                                    t -= 3600 * a;
                                    const r = Math.trunc(t / 60);
                                    return (t -= 60 * r), { days: n, hours: a, minutes: r, seconds: t };
                                })(l),
                                n,
                            );
                            return o().createElement(
                                'div',
                                { className: f()('Countdown_base_fe', r) },
                                t !== Yi.None &&
                                    o().createElement('div', {
                                        className: f()('Countdown_icon_8b', u.icon),
                                        style: { backgroundImage: `url('${Ji(t, c)}')` },
                                    }),
                                s
                                    ? o().createElement(
                                          'div',
                                          { className: f()(Qi, u.text) },
                                          o().createElement(Re, { text: s, binding: { timerText: m } }),
                                      )
                                    : o().createElement('div', { className: f()(Qi, u.text) }, m),
                            );
                        },
                    ),
                    tl = 'TasksHeaderBlock_container_ae',
                    nl = 'TasksHeaderBlock_secondaryText_40',
                    al = R.strings.ny.questGiver,
                    rl = (0, s.memo)(({ title: e, vehicleLevels: t, gameModes: n = [], refreshTime: a = 0 }) => {
                        const r = t && n.length,
                            u = t ? `${Qe(null == t ? void 0 : t.from)} - ${Qe(null == t ? void 0 : t.to)}` : '';
                        return o().createElement(
                            'div',
                            { className: 'TasksHeaderBlock_base_18' },
                            o().createElement(je, { text: e, className: 'TasksHeaderBlock_title_b5' }),
                            o().createElement(
                                'div',
                                { className: 'TasksHeaderBlock_descriptionBlock_2d' },
                                o().createElement(
                                    Qt,
                                    {
                                        contentId: R.views.new_year.lobby.new_year.tooltips.NyQuestModeTooltip('resId'),
                                        args: {
                                            battleModes: n,
                                            minVehicleLevel: null == t ? void 0 : t.from,
                                            maxVehicleLevel: null == t ? void 0 : t.to,
                                        },
                                    },
                                    o().createElement(
                                        'div',
                                        { className: f()(tl) },
                                        t &&
                                            o().createElement(je, {
                                                text: al.quests.vehiclesLevelRange(),
                                                format: { binding: { vehiclesRange: u } },
                                                className: nl,
                                            }),
                                        Boolean(r) &&
                                            o().createElement(
                                                o().Fragment,
                                                null,
                                                o().createElement('div', {
                                                    className: f()(nl, 'TasksHeaderBlock_separator_fa'),
                                                }),
                                                o().createElement(
                                                    'div',
                                                    { className: 'TasksHeaderBlock_gameModes_b7' },
                                                    o().createElement(je, {
                                                        text: al.quests.gameModes(),
                                                        className: nl,
                                                    }),
                                                    n.map((e) =>
                                                        o().createElement('div', {
                                                            key: e,
                                                            className: 'TasksHeaderBlock_gameMode_dc',
                                                            style: {
                                                                backgroundImage: `url(R.images.gui.maps.icons.mode_selector.mode.${e}.icon_small)`,
                                                            },
                                                        }),
                                                    ),
                                                ),
                                            ),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: tl },
                                    o().createElement(je, {
                                        text: al.quests.refreshTime(),
                                        className: 'TasksHeaderBlock_mainText_b8',
                                    }),
                                    o().createElement(el, {
                                        duration: a,
                                        classNames: { text: 'TasksHeaderBlock_timerValue_de' },
                                    }),
                                ),
                            ),
                        );
                    }),
                    ul = (0, s.memo)(
                        ({
                            title: e,
                            quests: t,
                            minVehicleLevel: n,
                            maxVehicleLevel: a,
                            resetTimeLeft: r,
                            battleModes: u,
                            onQuestHover: s,
                            classMix: i,
                        }) => {
                            const l = N().mediaSize,
                                c = l >= y.Medium ? Je.Big : Je.Small,
                                m = Pi(l),
                                _ = m.headerHeight,
                                d = m.cardHeight,
                                E = m.cardMargin,
                                p = _ + (d + 2 * E) * t.length,
                                g = (0, ba.useTransition)(
                                    t.map((e, t) => Object.assign({}, e, { y: t * (d + 2 * E) + 'rem' })),
                                    {
                                        key: (e) => e.id,
                                        from: { position: 'absolute' },
                                        enter: ({ y: e }) => ({ y: e }),
                                        update: ({ y: e }) => ({ y: e }),
                                        config: { duration: 300 },
                                        delay: 500,
                                    },
                                );
                            return o().createElement(
                                'div',
                                { className: f()('QuestBlock_base_cd', i), style: { height: `${p}rem` } },
                                o().createElement(rl, {
                                    title: e,
                                    gameModes: u,
                                    vehicleLevels: { from: n, to: a },
                                    refreshTime: r,
                                }),
                                o().createElement(
                                    'div',
                                    { className: 'QuestBlock_quests_77' },
                                    g(
                                        (
                                            e,
                                            {
                                                id: t,
                                                title: n,
                                                description: a,
                                                bonuses: r,
                                                isNew: u,
                                                bonusCondition: i,
                                            },
                                        ) => {
                                            const l = i.items.length > 0 ? i.items[0].value : void 0;
                                            return o().createElement(
                                                ba.animated.div,
                                                { style: Object.assign({}, e) },
                                                o().createElement(
                                                    'div',
                                                    { key: t, className: 'QuestBlock_card_6b' },
                                                    o().createElement(qi, {
                                                        title: n,
                                                        description: a,
                                                        isNew: u,
                                                        currentProgress: (null == l ? void 0 : l.current) || 0,
                                                        maxProgress: (null == l ? void 0 : l.total) || 0,
                                                        deltaFrom:
                                                            (null == l ? void 0 : l.current) ||
                                                            0 - (null == l ? void 0 : l.earned) ||
                                                            0,
                                                        bonuses: Vi(r, c),
                                                        onHover:
                                                            ((m = t),
                                                            () => {
                                                                s({ questId: m });
                                                            }),
                                                        icon: null == l ? void 0 : l.iconKey,
                                                        questId: t,
                                                        isActiveProgress: void 0 !== l,
                                                    }),
                                                ),
                                            );
                                            var m;
                                        },
                                    ),
                                ),
                            );
                        },
                    ),
                    sl = R.strings.ny.questGiver,
                    ol = (0, K.Pi)(
                        ({
                            currentTab: e,
                            tabChangeTarget: t,
                            tabChangeTargetHandler: n,
                            currentTabChangeHandler: a,
                        }) => {
                            const r = (0, s.useState)(!0),
                                u = r[0],
                                i = r[1],
                                l = Hn(),
                                c = l.model,
                                m = l.controls,
                                _ = N().mediaSize,
                                d = yi(),
                                E = c.questsModel.get(),
                                p = E.minVehicleLevel,
                                g = E.maxVehicleLevel,
                                v = E.resetDailyTimeLeft,
                                h = E.resetWeeklyTimeLeft,
                                b = c.computes.getDailyQuests(),
                                A = c.computes.getWeeklyQuests(),
                                C = c.computes.getBattleModes(),
                                D = Pi(_),
                                w = D.headerHeight,
                                y = D.cardHeight,
                                F = D.cardMargin,
                                B = D.containerHeight,
                                S = b.length,
                                M = A.length,
                                x = w / 2,
                                T = (0, s.useMemo)(() => w + (y + 2 * F) * S, [y, F, S, w]),
                                k = (0, s.useMemo)(() => T + w + (y + 2 * F) * (M - 1) + y / 2, [y, F, T, w, M]),
                                R = _i();
                            return (
                                (0, s.useEffect)(() => {
                                    const n = (n) => {
                                        const r = Math.floor(n.value.scrollPosition) / d;
                                        t === Li.Scroll &&
                                            (((t) => {
                                                Oi(t + B, k, y / 2) && e === ki.Daily && a(ki.Weekly);
                                            })(r),
                                            ((t) => {
                                                Oi(t, x, w / 2) && e === ki.Weekly && a(ki.Daily);
                                            })(r)),
                                            r > 0 && u && i(!1),
                                            0 === r && i(!0);
                                    };
                                    return R.events.on('change', n), () => R.events.off('change', n);
                                }, [y, B, e, a, x, w, u, d, t, R.events, k]),
                                (0, s.useEffect)(() => {
                                    t === Li.Buttons &&
                                        (e === ki.Daily ? R.applyScroll(0) : R.applyScroll(T * d),
                                        (0, j.F)(() => {
                                            n(Li.Scroll);
                                        }, 200));
                                }, [y, e, T, d, t, n, R, k]),
                                o().createElement(
                                    'div',
                                    { className: 'DailyQuests_base_47' },
                                    o().createElement(
                                        wi.Vertical.Area,
                                        { api: R },
                                        o().createElement(
                                            'div',
                                            { className: 'DailyQuests_cards_3c' },
                                            b.length > 0 &&
                                                o().createElement(ul, {
                                                    title: sl.quests.dailyTitle(),
                                                    battleModes: C,
                                                    minVehicleLevel: p,
                                                    maxVehicleLevel: g,
                                                    resetTimeLeft: v,
                                                    quests: b,
                                                    onQuestHover: m.onQuestHover,
                                                }),
                                            M > 0 &&
                                                o().createElement(ul, {
                                                    title: sl.quests.weeklyTitle(),
                                                    battleModes: C,
                                                    minVehicleLevel: p,
                                                    maxVehicleLevel: g,
                                                    resetTimeLeft: h,
                                                    quests: A,
                                                    onQuestHover: m.onQuestHover,
                                                    classMix: 'DailyQuests_weeklyQuests_42',
                                                }),
                                        ),
                                    ),
                                    o().createElement(wi.Vertical.Bar, {
                                        api: R,
                                        classNames: {
                                            base: 'DailyQuests_scrollBar_a7',
                                            thumb: 'DailyQuests_barThumb_79',
                                            rail: 'DailyQuests_barRail_a2',
                                        },
                                    }),
                                    o().createElement('div', {
                                        className: f()(
                                            Wi,
                                            'DailyQuests_shadow__top_91',
                                            u && 'DailyQuests_shadow__hidden_b4',
                                        ),
                                    }),
                                    o().createElement('div', { className: f()(Wi, 'DailyQuests_shadow__bottom_6e') }),
                                )
                            );
                        },
                    ),
                    il = (0, s.memo)(({ type: e, isSelected: t, onClick: n, classMix: a, isHuge: r = !1 }) => {
                        const u = (0, s.useState)(!1),
                            i = u[0],
                            l = u[1],
                            c = f()(
                                'TabButton_base_8a',
                                t && 'TabButton_base__selected_3f',
                                i && 'TabButton_base__hover_0f',
                                a,
                            ),
                            m = f()(
                                'TabButton_baseHuge_95',
                                t && 'TabButton_baseHuge__selected_93',
                                i && 'TabButton_baseHuge__hover_95',
                                a,
                            ),
                            _ = (e) => () => {
                                l(e);
                            };
                        return o().createElement('div', {
                            className: r ? m : c,
                            onClick: t ? void 0 : n,
                            onMouseEnter: _(!0),
                            onMouseLeave: _(!1),
                            style: {
                                backgroundImage: `url(R.images.new_year.gui.maps.icons.newYear.tasks.dailyQuests.${e}Btn)`,
                            },
                        });
                    }),
                    ll = [
                        'src',
                        'className',
                        'autoplay',
                        'style',
                        'loop',
                        'isPrebufferKeyframes',
                        'keyframesNameConfig',
                        'onClick',
                        'onError',
                    ];
                function cl() {
                    return (
                        (cl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        cl.apply(this, arguments)
                    );
                }
                const ml = (0, s.forwardRef)(function (e, t) {
                        let n = e.src,
                            a = e.className,
                            r = e.autoplay,
                            u = void 0 !== r && r,
                            i = e.style,
                            l = e.loop,
                            c = void 0 !== l && l,
                            m = e.isPrebufferKeyframes,
                            _ = e.keyframesNameConfig,
                            d = e.onClick,
                            E = e.onError,
                            p = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, ll);
                        const g = t,
                            v = (0, s.useRef)(null);
                        return (
                            (0, s.useEffect)(
                                () =>
                                    (0, Zt.v)(() => {
                                        const e = v.current;
                                        if (!g || !e || !m)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const t = e.cohGetKeyframeTimestamps();
                                        t.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              t.map((t) => {
                                                  null == e || e.cohPrebufferKeyframe(t);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [m, g],
                            ),
                            (0, s.useEffect)(() => {
                                if (g && v.current) {
                                    const e = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: wn,
                                        },
                                        t = () => {
                                            let t = 0;
                                            const n = (function (n) {
                                                    let a = 0;
                                                    return [
                                                        function n() {
                                                            (() => {
                                                                if (v.current) {
                                                                    const n = v.current,
                                                                        a = n.currentTime,
                                                                        r = n.duration;
                                                                    if (
                                                                        (t !== a &&
                                                                            (e.changeTimeHandlers.forEach((e) =>
                                                                                e({ currentTime: a, duration: r }),
                                                                            ),
                                                                            (t = a)),
                                                                        v.current.paused || !g || !m)
                                                                    )
                                                                        return;
                                                                    const u = v.current.cohGetKeyframeTimestamps();
                                                                    u.forEach((t, n) => {
                                                                        a > u[n] - 0.02 &&
                                                                            a < u[n] &&
                                                                            e.changeKeyframeHandlers.forEach((e) => {
                                                                                const a = Object.keys(
                                                                                    null != _ ? _ : {},
                                                                                )[n];
                                                                                return e({
                                                                                    time: t,
                                                                                    name: `${_ ? a : `Point_${n}`}`,
                                                                                });
                                                                            });
                                                                    });
                                                                }
                                                            })(),
                                                                (a = requestAnimationFrame(n));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(a);
                                                        },
                                                    ];
                                                })(),
                                                a = n[0],
                                                r = n[1];
                                            return a(), r;
                                        };
                                    e.changeTimeLoop = t();
                                    const n = (t) => (
                                            e.changeTimeHandlers.push(t),
                                            () => {
                                                const n = e.changeTimeHandlers,
                                                    a = n.indexOf(t);
                                                a < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : n.splice(a, 1);
                                            }
                                        ),
                                        a = (t) => (
                                            e.changeKeyframeHandlers.push(t),
                                            () => {
                                                const n = e.changeKeyframeHandlers,
                                                    a = n.indexOf(t);
                                                a < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : n.splice(a, 1);
                                            }
                                        ),
                                        r = () => {
                                            var e;
                                            return null == (e = v.current) ? void 0 : e.currentTime;
                                        },
                                        u = () => {
                                            var e;
                                            return null == (e = v.current) ? void 0 : e.duration;
                                        },
                                        s = (e) => {
                                            v.current && (v.current.currentTime = Wr(0, v.current.duration, e));
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = v.current) ? void 0 : e.play();
                                        },
                                        i = () => {
                                            var e;
                                            return null == (e = v.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            i(), s(0);
                                        },
                                        c = () => {
                                            var e, t;
                                            return null !=
                                                (e = null == (t = v.current) ? void 0 : t.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        d = (e) => {
                                            s(e), o();
                                        },
                                        E = (e) => {
                                            s(e), i();
                                        },
                                        p = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        h = (e, t) => {
                                            var n;
                                            return (
                                                null == (n = v.current) || n.addEventListener(e, t),
                                                () => {
                                                    var n;
                                                    return null == (n = v.current)
                                                        ? void 0
                                                        : n.removeEventListener(e, t);
                                                }
                                            );
                                        },
                                        b = (e, t) => {
                                            var n;
                                            return (
                                                null == (n = v.current) || n.removeEventListener(e, t),
                                                () => {
                                                    var n;
                                                    return null == (n = v.current)
                                                        ? void 0
                                                        : n.removeEventListener(e, t);
                                                }
                                            );
                                        };
                                    return (
                                        (g.current = {
                                            on: h,
                                            off: b,
                                            play: o,
                                            pause: i,
                                            stop: l,
                                            cleanup: p,
                                            getCurrentTime: r,
                                            getDuration: u,
                                            getCachedKeyframes: c,
                                            goToAndPlay: d,
                                            goToAndStop: E,
                                            setCurrentTime: s,
                                            domRef: v.current,
                                            onChangeTime: n,
                                            onKeyframes: a,
                                        }),
                                        () => {
                                            p(), (g.current = null);
                                        }
                                    );
                                }
                            }, [_, g, m]),
                            (0, s.useEffect)(() => {
                                v.current && u && v.current.play();
                            }, [u, c]),
                            (0, s.useEffect)(() => {
                                if (v.current)
                                    return () => {
                                        v.current && v.current.pause();
                                    };
                            }, []),
                            o().createElement(
                                'video',
                                cl({ src: n, className: a, style: i, loop: c, ref: v, onClick: d, onError: E }, p),
                            )
                        );
                    }),
                    _l = (0, s.memo)(ml),
                    dl = (0, s.memo)(
                        ({
                            path: e,
                            state: t,
                            videoStyles: n,
                            classMix: a,
                            onVideoEnded: r,
                            autoplay: u = !1,
                            loop: i = !1,
                        }) => {
                            const l = (0, s.useRef)(null),
                                c = (0, s.useCallback)(() => {
                                    const e = l.current;
                                    null == e || e.stop(), r && r();
                                }, [r]),
                                m = (0, s.useCallback)(() => {
                                    const e = l.current;
                                    null == e || e.play();
                                }, []);
                            return (
                                (0, s.useEffect)(() => {
                                    t === Ri.Idle && c(), t === Ri.Play && m();
                                }, [c, m, t]),
                                o().createElement(
                                    'div',
                                    { className: f()('VideoContent_base_74', a) },
                                    o().createElement(_l, {
                                        src: e,
                                        autoplay: u,
                                        onEnded: c,
                                        ref: l,
                                        style: n,
                                        loop: i,
                                    }),
                                )
                            );
                        },
                    ),
                    El = 'NyTasksView_videoPlaceholder_82',
                    pl = R.videos.new_year.quests.quest_giver_idle(),
                    gl = {
                        [Wo.ExtraSmall]: 180,
                        [Wo.Small]: 200,
                        [Wo.Medium]: 220,
                        [Wo.Large]: 230,
                        [Wo.ExtraLarge]: 230,
                        [Wo.Huge]: 350,
                    },
                    vl = (0, K.Pi)(() => {
                        const e = (0, s.useState)(ki.Daily),
                            t = e[0],
                            n = e[1],
                            a = (0, s.useState)(Ri.Idle),
                            r = a[0],
                            u = a[1],
                            i = (0, s.useState)(Li.Scroll),
                            l = i[0],
                            c = i[1],
                            m = (0, s.useState)(!1),
                            _ = m[0],
                            d = m[1],
                            E = (0, s.useState)(!1),
                            p = E[0],
                            g = E[1],
                            v = Hn(),
                            h = v.model,
                            b = v.controls,
                            A = (() => {
                                const e = N(),
                                    t = ((e, t) => {
                                        const n = ((e, t) => {
                                                switch (!0) {
                                                    case e >= t.huge.width:
                                                        return t.huge.weight;
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
                                            })(e, Go),
                                            a = ((e, t) => {
                                                switch (!0) {
                                                    case e >= t.huge.height:
                                                        return t.huge.weight;
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
                                            })(t, Go),
                                            r = Math.min(n, a);
                                        switch (!0) {
                                            case r === Go.huge.weight:
                                                return Wo.Huge;
                                            case r === Go.extraLarge.weight:
                                                return Wo.ExtraLarge;
                                            case r === Go.large.weight:
                                                return Wo.Large;
                                            case r === Go.medium.weight:
                                                return Wo.Medium;
                                            case r === Go.small.weight:
                                                return Wo.Small;
                                            case r === Go.extraSmall.weight:
                                                return Wo.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), Wo.ExtraSmall
                                                );
                                        }
                                    })(e.remScreenWidth, e.remScreenHeight);
                                return Object.assign({}, e, { mediaSize: t });
                            })(),
                            C = A.mediaSize,
                            D = A.remScreenHeight,
                            w = A.remScreenWidth,
                            y = h.questsModel.get(),
                            F = y.videoUrl,
                            B = y.soundUrl,
                            S = h.root.get().switchState === ee.WITH_SWITCHING_OBJS,
                            M = (0, s.useState)(() => F),
                            x = M[0],
                            T = M[1],
                            k = (e) => () => {
                                n(e), c(Li.Buttons), (0, G.G)(R.sounds.hangar_newyear_quests_choice());
                            },
                            I = () => {
                                (0, G.G)(R.sounds.gui_video_ny_quest_giver_stop()), u(Ri.Idle), b.onVideoFinished();
                            };
                        return (
                            (0, s.useEffect)(
                                () =>
                                    (0, j.F)(() => {
                                        null !== F && ((0, G.G)(B), T(F), u(Ri.Play));
                                    }, 500),
                                [F],
                            ),
                            (0, s.useEffect)(() => {
                                d(S);
                            }, [S]),
                            (0, s.useEffect)(() => {
                                2054 === D && 3840 === w ? g(!0) : p && g(!1);
                            }, [p, D, w]),
                            o().createElement(
                                'div',
                                { className: f()('NyTasksView_base_97', _ && 'NyTasksView_base__out_1b') },
                                o().createElement('div', { className: 'NyTasksView_leftShadow_b7' }),
                                o().createElement('div', { className: 'NyTasksView_bottomShadow_b7' }),
                                o().createElement('div', {
                                    className: 'NyTasksView_tasksShadow_d9',
                                    style: Gi(p, Mi.questsShadow),
                                }),
                                o().createElement(
                                    'div',
                                    { className: 'NyTasksView_videoControls_16' },
                                    o().createElement(qo, {
                                        state: r,
                                        onClick: () => {
                                            let e = Ri.Idle;
                                            r === Ri.Idle
                                                ? ((e = Ri.Play), (0, G.G)(B))
                                                : (0, G.G)(R.sounds.gui_video_ny_quest_giver_stop()),
                                                u(e),
                                                b.onReplayVideo();
                                        },
                                    }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: 'NyTasksView_contentFrame_14' },
                                    o().createElement(
                                        'div',
                                        { className: 'NyTasksView_videoContainer_8f', style: Gi(p, Mi.tvZone) },
                                        o().createElement(
                                            'div',
                                            { className: 'NyTasksView_video_65', style: Gi(p, Mi.video) },
                                            o().createElement(
                                                'div',
                                                {
                                                    className: 'NyTasksView_videoBox_49',
                                                    style: Object.assign({}, Si[C]),
                                                },
                                                o().createElement('div', { className: El }),
                                                o().createElement(dl, {
                                                    path: pl,
                                                    state: Ri.Play,
                                                    onVideoEnded: I,
                                                    videoStyles: Bi[C],
                                                    classMix: f()(El, 'NyTasksView_videoPlaceholder__video_57'),
                                                    autoplay: !0,
                                                    loop: !0,
                                                }),
                                                r === Ri.Play &&
                                                    o().createElement(dl, {
                                                        path: x,
                                                        state: r,
                                                        onVideoEnded: I,
                                                        videoStyles: Bi[C],
                                                        classMix: 'NyTasksView_videoContent_ad',
                                                    }),
                                            ),
                                            o().createElement('div', { className: 'NyTasksView_tvMask_92' }),
                                            o().createElement(
                                                'div',
                                                { className: 'NyTasksView_buttons_7f', style: Gi(p, Mi.buttons) },
                                                o().createElement(il, {
                                                    type: ki.Daily,
                                                    isSelected: t === ki.Daily,
                                                    onClick: k(ki.Daily),
                                                    classMix: 'NyTasksView_dailyButton_29',
                                                    isHuge: p,
                                                }),
                                                o().createElement(il, {
                                                    type: ki.Weekly,
                                                    isSelected: t === ki.Weekly,
                                                    onClick: k(ki.Weekly),
                                                    isHuge: p,
                                                }),
                                            ),
                                        ),
                                    ),
                                    o().createElement(
                                        'div',
                                        {
                                            className: 'NyTasksView_tasksContainer_20',
                                            style: {
                                                width: p ? Ni.questsZone.width : void 0,
                                                height: D - gl[C] + 'rem',
                                            },
                                        },
                                        o().createElement(ol, {
                                            currentTab: t,
                                            tabChangeTarget: l,
                                            tabChangeTargetHandler: c,
                                            currentTabChangeHandler: n,
                                        }),
                                    ),
                                ),
                            )
                        );
                    }),
                    hl = {
                        [J.CITY]: Hr,
                        [J.MACHINE]: ys,
                        [J.TASKS]: vl,
                        [J.PET]: Ms,
                        [J.REWARDS]: Vo,
                        [J.INFO]: () => {
                            const e = ea('model.infoModel'),
                                t = e.startTab,
                                n = e.onSlideChanged,
                                a = ea('model.infoModel.region').realm,
                                r = [],
                                u = (0, s.useState)(0),
                                i = u[0],
                                l = u[1],
                                c = (e) => Wr(0, r.length - 1, e),
                                m = (e) => c(((e) => e + 1)(e)),
                                _ = (e) => c(((e) => e - 1)(e)),
                                d = (e) => {
                                    G.$.playClick(), l(m), n({ name: r[i + 1].slide, switchType: e });
                                },
                                E = (e) => {
                                    G.$.playClick(), l(_), n({ name: r[i - 1].slide, switchType: e });
                                },
                                p = (0, Vr.useTransition)(i, {
                                    from: { opacity: 0 },
                                    enter: { opacity: 1 },
                                    leave: { opacity: 0 },
                                });
                            Object.entries(rs).map(([e, n]) => {
                                (e === uu.BigBoxesOpening && a !== su.China) ||
                                    r.push({
                                        content: n.content,
                                        text: n.text,
                                        bgImage: R.images.new_year.gui.maps.icons.newYear.info.carousel.$dyn(
                                            lu() && as.includes(e) ? `${n.bgImage}_alt` : n.bgImage,
                                        ),
                                        isStartTab: e === us[t],
                                        slide: e,
                                    });
                            });
                            const g = 0 === i,
                                v = i === r.length - 1;
                            return (
                                Q(q.n.ARROW_RIGHT, () => !v && d(ss.ArrowRightKey)),
                                Q(q.n.ARROW_LEFT, () => !g && E(ss.ArrowLeftKey)),
                                Q(q.n.SPACE, () => !v && d(ss.SpaceKey)),
                                $r(() => {
                                    const e = r.findIndex((e) => e.isStartTab);
                                    l(e);
                                }, []),
                                o().createElement(
                                    'div',
                                    { className: 'NyInfoView_base_1d' },
                                    o().createElement('div', { className: 'NyInfoView_vignette_f1' }),
                                    o().createElement(
                                        'div',
                                        { className: 'NyInfoView_paginator_c3' },
                                        o().createElement(
                                            au,
                                            {
                                                onNext: () => d(ss.ArrowRightButton),
                                                onPrev: () => E(ss.ArrowLeftButton),
                                                onMouseEnter: () => G.$.playHighlight(),
                                                classNames: {
                                                    content: 'NyInfoView_content_06',
                                                    prev: f()(gu, g && vu),
                                                    next: f()(gu, v && vu),
                                                },
                                            },
                                            o().createElement(
                                                'div',
                                                { className: 'NyInfoView_slide_71' },
                                                p((e, t) => {
                                                    const n = r[t].content;
                                                    return o().createElement(
                                                        Gr.animated.div,
                                                        { style: e, className: 'NyInfoView_slideContent_c6' },
                                                        o().createElement(n, null),
                                                    );
                                                }),
                                            ),
                                            o().createElement(tu, {
                                                items: r,
                                                active: i,
                                                onChoose: (e) => {
                                                    l(e), n({ name: r[e].slide, switchType: ss.CarouselButton });
                                                },
                                                className: 'NyInfoView_carousel_53',
                                            }),
                                        ),
                                    ),
                                )
                            );
                        },
                    },
                    bl = o().memo(function ({ viewType: e }) {
                        if (null === e) return;
                        const t = hl[e];
                        return (
                            viewEnv.clearSystemCaches(),
                            viewEnv.clearInternalCaches(),
                            t ? o().createElement(t, null) : (console.error('Unknown view type for render', e), null)
                        );
                    }),
                    Al = R.strings.ny.closeButton,
                    Cl = [J.MACHINE],
                    fl = (0, K.Pi)(() => {
                        const e = Hn(),
                            t = e.model,
                            n = e.controls,
                            a = t.root.get(),
                            r = a.viewType,
                            u = a.isAnimatedShow,
                            i = a.switchState,
                            l = a.isControlsLocked,
                            c = t.isFadedView.get(),
                            m = t.currentViewType.get(),
                            _ = t.cityModel.get().currentSubModel,
                            d = t.computes.getCurrencyItems(),
                            E = t.surpriseMachineModel.get(),
                            p = E.vehicleReward,
                            g = E.machineViews,
                            v = p.isMainViewVisible,
                            h = (0, s.useState)(!1),
                            b = h[0],
                            A = h[1],
                            C = 1 === _,
                            D = d.length > 0,
                            w = i === ee.WITH_SWITCHING_OBJS,
                            y = g === te.SPEND_TOKENS_ACTIVE,
                            F = w ? m : r,
                            B = C || (w && b) || l || y,
                            S = (i === ee.DEFAULT && !C) || !En.includes(r),
                            N = f()(
                                'App_bg_64',
                                S && 'App_bg__visible_ff',
                                i === ee.TO_GLADE_WITH_INTRO && 'App_bg__withoutAnimation_c2',
                            ),
                            M = (0, s.useMemo)(
                                () =>
                                    C
                                        ? [Al.customizationZone(), n.onCustomizationObjectClose]
                                        : [Al.MainView(), n.onClose],
                                [C, n.onClose, n.onCustomizationObjectClose],
                            ),
                            x = M[0],
                            T = M[1],
                            k = () => {
                                viewEnv.clearSystemCaches(), viewEnv.clearInternalCaches(), T();
                            };
                        return (
                            (0, s.useEffect)(() => {
                                if (!w)
                                    return (0, j.F)(() => {
                                        n.onViewChange(r);
                                    }, 600);
                            }, [r, w, n]),
                            (0, s.useEffect)(() => {
                                w || (A(C), n.onViewChange(r));
                            }, [w, C, r, n]),
                            (0, s.useEffect)(() => {
                                if (i && !w)
                                    return (0, j.F)(() => {
                                        n.onFadeInDone();
                                    }, 300);
                            }, [i, w, n]),
                            Z(() => k()),
                            o().createElement(
                                'div',
                                { className: f()('App_base_7f', u && 'App_base__animatedShow_ca') },
                                o().createElement('div', { className: N }),
                                D &&
                                    o().createElement(Dn, {
                                        onCurrencyItemClick: n.onCurrencyItemClick,
                                        currencyItems: d,
                                    }),
                                o().createElement(
                                    'div',
                                    { className: f()('App_inner_2c', c && 'App_inner__faded_86') },
                                    v &&
                                        o().createElement(
                                            'div',
                                            { className: 'App_navigation_a4' },
                                            o().createElement(va, { isFadedMenu: B }),
                                            !Cl.includes(F) &&
                                                o().createElement(
                                                    'div',
                                                    { className: 'App_close_2f' },
                                                    o().createElement(z, {
                                                        caption: x,
                                                        type: 'close',
                                                        side: 'right',
                                                        onClick: k,
                                                    }),
                                                ),
                                        ),
                                    o().createElement(
                                        'div',
                                        { className: f()('App_content_3b') },
                                        o().createElement(bl, { viewType: F }),
                                    ),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    u.O.view.extraSize.set(0, 60),
                        V().render(
                            o().createElement(
                                Pn,
                                null,
                                o().createElement(
                                    P,
                                    null,
                                    o().createElement(
                                        'div',
                                        { className: 'MainView_base_63' },
                                        o().createElement(fl, null),
                                    ),
                                ),
                            ),
                            document.getElementById('root'),
                        );
                });
            },
            9904: (e, t, n) => {
                'use strict';
                n.d(t, { q: () => _ });
                var a = n(6483),
                    r = n.n(a),
                    u = n(1856),
                    s = n(122),
                    o = n(7727),
                    i = n(6179),
                    l = n.n(i),
                    c = n(1187);
                const m = 'IncreaseAnimation_glow_11',
                    _ = ({
                        count: e,
                        title: t,
                        onAnimationEnd: n,
                        isPlaying: a = !1,
                        delta: _ = 0,
                        isSlideUpEnabled: d = !0,
                    }) => {
                        const E = { '--x-offset': `${_}rem` },
                            p = (0, i.useState)(!1),
                            g = p[0],
                            v = p[1];
                        return (
                            (0, i.useEffect)(() => {
                                if (a)
                                    return (0, u.v)(() => {
                                        (0, o.G)(R.sounds.hangar_newyear_level_points_anim()), v(!0);
                                    });
                            }, [a]),
                            (0, i.useEffect)(() => {
                                if (a)
                                    return (0, s.F)(() => {
                                        v(!1), null == n || n.call([]);
                                    }, c.Vl);
                            }, [a, n]),
                            l().createElement(
                                'div',
                                {
                                    className: r()(
                                        'IncreaseAnimation_base_a3',
                                        d && 'IncreaseAnimation_base__slideUpEnabled_f2',
                                    ),
                                    style: E,
                                },
                                l().createElement(
                                    'div',
                                    {
                                        className: r()(
                                            'IncreaseAnimation_container_49',
                                            g && 'IncreaseAnimation_container__play_75',
                                        ),
                                    },
                                    l().createElement(
                                        'div',
                                        { className: 'IncreaseAnimation_circleWrapper_82' },
                                        l().createElement(
                                            'div',
                                            { className: 'IncreaseAnimation_snowflake_62' },
                                            l().createElement(
                                                'div',
                                                { className: 'IncreaseAnimation_snowflakeIconWrapper_67' },
                                                l().createElement('div', {
                                                    className: 'IncreaseAnimation_snowflakeIcon_b8',
                                                }),
                                                l().createElement('span', { className: m }),
                                            ),
                                        ),
                                        l().createElement(
                                            'div',
                                            { className: r()('IncreaseAnimation_counter_41') },
                                            l().createElement(
                                                'div',
                                                { className: 'IncreaseAnimation_counterPlus_7e' },
                                                '+',
                                            ),
                                            e,
                                        ),
                                        l().createElement('span', {
                                            className: r()(m, 'IncreaseAnimation_glow__animated_19'),
                                        }),
                                    ),
                                    t &&
                                        l().createElement(
                                            'div',
                                            { className: 'IncreaseAnimation_title_d6' },
                                            t,
                                            l().createElement('div', { className: 'IncreaseAnimation_highlight_34' }),
                                        ),
                                ),
                            )
                        );
                    };
            },
            1187: (e, t, n) => {
                'use strict';
                n.d(t, { Vl: () => a }), R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId');
                const a = 3600;
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, a) => {
            if (!t) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, n, a] = deferred[i], u = !0, s = 0; s < t.length; s++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((u = !1), a < r && (r = a));
                    if (u) {
                        deferred.splice(i--, 1);
                        var o = n();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > a; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, n, a];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 5533),
        (() => {
            var e = { 5533: 0, 7044: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        r,
                        [u, s, o] = n,
                        i = 0;
                    if (u.some((t) => 0 !== e[t])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(n); i < u.length; i++)
                        (r = u[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [4503], () => __webpack_require__(5167));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
