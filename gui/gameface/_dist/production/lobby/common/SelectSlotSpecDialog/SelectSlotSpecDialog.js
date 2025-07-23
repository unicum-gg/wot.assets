(() => {
    var __webpack_modules__ = {
            527: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, { mouse: () => l, off: () => o, on: () => s, onResize: () => i, onScaleUpdated: () => a }));
                var n = t(2472),
                    r = t(1176);
                const i = (0, n.E)('clientResized'),
                    a = (0, n.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    c = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const l = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function n() {
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
                    const i = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${u}`,
                                        a = c[u]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        n(),
                                        () => {
                                            r &&
                                                (a(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
                        ),
                        {},
                    );
                    return Object.assign({}, i, {
                        disable() {
                            ((e.enabled = !1), n());
                        },
                        enable() {
                            ((e.enabled = !0), n());
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
                        events: () => n,
                        getMouseGlobalPosition: () => a,
                        getSize: () => i,
                        graphicsQuality: () => s,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var n = t(527),
                    r = t(2493);
                function i(e = 'px') {
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
            1176: (e, u, t) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2493: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function r(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => r, G: () => n });
            },
            2472: (e, u, t) => {
                'use strict';
                function n(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => n });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => i });
                var n = t(5959),
                    r = t(514);
                const i = { view: t(7641), client: n, sound: r.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => a });
                var n = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, n.playSound)(r[u])), e), {}),
                    a = { play: Object.assign({}, i, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var n = t(2472);
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
            7641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => o,
                        arabic2roman: () => w,
                        children: () => r,
                        displayStatus: () => i.W,
                        displayStatusIs: () => x,
                        events: () => a.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => f,
                        getFontNames: () => y,
                        getScale: () => D,
                        getSize: () => d,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => v,
                        isFocused: () => B,
                        pxToRem: () => C,
                        remToPx: () => p,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => N,
                    }));
                var n = t(9690),
                    r = t(3722),
                    i = t(6112),
                    a = t(6538),
                    s = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function _(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: p(u.x), y: p(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function C(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function h(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function B() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const y = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    w = n.cg,
                    x = Object.keys(i.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === i.W[u]), e),
                        {},
                    ),
                    S = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    N = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => c });
                const n = ['args'];
                const r = 2,
                    i = 16,
                    a = 32,
                    s = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const i = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, n);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((r = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    c = {
                        close(e) {
                            o('popover' === e ? r : a);
                        },
                        minimize() {
                            o(s);
                        },
                        move(e) {
                            o(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let n, r;
                (t.d(u, { n: () => n }),
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
            3368: () => {
                (!(function () {
                    let e,
                        u,
                        t,
                        n,
                        r,
                        i,
                        a,
                        s = -1;
                    (document.addEventListener('mousedown', (t) => {
                        (document.getSelection().empty(),
                            t.target.select &&
                                -1 === s &&
                                ((e = t.target), (u = e.getBoundingClientRect()), e.setSelectionRange(0, 0)));
                    }),
                        document.addEventListener('mousemove', (t) => {
                            if ((-1 === s && t.target.select && t.target === e && (s = e.selectionStart), s > -1)) {
                                const n = Math.min(Math.max(t.x, u.left), u.right),
                                    r = Math.min(Math.max(t.y, u.top), u.bottom),
                                    i = document.createEvent('MouseEvent');
                                (i.initMouseEvent('mousedown', !0, !0, null, 1, n, r, n, r, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(i));
                                const a = e.selectionEnd;
                                a > s ? e.setSelectionRange(s, a, 'forward') : e.setSelectionRange(a, s, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            ((e = null), (s = -1));
                        }),
                        document.addEventListener('dblclick', (e) => {
                            e.target.select &&
                                (document.getSelection().empty(),
                                (t = e.target),
                                (n = e.target.value),
                                (r = t.selectionStart),
                                (i = -1 !== n.lastIndexOf(' ', r) ? n.lastIndexOf(' ', r) + 1 : 0),
                                (a = -1 !== n.indexOf(' ', r) ? n.indexOf(' ', r) : n.length),
                                t.setSelectionRange(i, a, 'forward'));
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
            9690: (e, u, t) => {
                'use strict';
                t.d(u, { cg: () => i });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function i(e) {
                    let u = '';
                    for (let t = r.length - 1; t >= 0; t--) for (; e >= r[t]; ) ((u += n[t]), (e -= r[t]));
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => i });
                var n = t(3138);
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
                        const i = n.O.view.addModelObserver(e, t, r);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(i) : (this._views[t] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                r.__instance = void 0;
                const i = r;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9916);
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
            9916: (e, u, t) => {
                'use strict';
                t.d(u, { Sw: () => i.Z, B3: () => o, Z5: () => a.Z5, B0: () => s, ry: () => D });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let n = e.target;
                                    do {
                                        if (n === u) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (n.__instance || (n.__instance = new n()), n.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                var i = t(1358);
                var a = t(8613);
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
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(5521),
                    d = t(3138);
                const m = ['args'];
                function A(e, u, t, n, r, i, a) {
                    try {
                        var s = e[i](a),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(n, r);
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
                                    return new Promise(function (n, r) {
                                        var i = e.apply(u, t);
                                        function a(e) {
                                            A(i, n, r, a, s, 'next', e);
                                        }
                                        function s(e) {
                                            A(i, n, r, a, s, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, m);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    p = () => C(s.CLOSE),
                    h = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var B = t(7572);
                const g = r.instance,
                    v = {
                        DataTracker: i.Z,
                        ViewModel: B.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: c,
                        TimeFormatType: l,
                        DateFormatType: _,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => C(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => C(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), i) => {
                            const a = d.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                c = o.x,
                                l = o.y,
                                _ = o.width,
                                E = o.height,
                                m = {
                                    x: d.O.view.pxToRem(c) + a.x,
                                    y: d.O.view.pxToRem(l) + a.y,
                                    width: d.O.view.pxToRem(_),
                                    height: d.O.view.pxToRem(E),
                                };
                            C(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: F(m),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => h(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, p);
                        },
                        handleViewEvent: C,
                        onBindingsReady: D,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: g,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => i, Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    i = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            558: (e, u, t) => {
                'use strict';
                var n = t(7363),
                    r = t.n(n),
                    i = t(1533),
                    a = t.n(i);
                const s = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var o = t(3138);
                const c = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function _(e, u, t) {
                    const n = (function (e, u) {
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
                        i = Math.min(n, r);
                    return {
                        extraLarge: i === t.extraLarge.weight,
                        large: i === t.large.weight,
                        medium: i === t.medium.weight,
                        small: i === t.small.weight,
                        extraSmall: i === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
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
                })(l || (l = {}));
                const E = o.O.client.getSize('rem'),
                    d = E.width,
                    m = E.height,
                    A = Object.assign({ width: d, height: m }, _(d, m, c)),
                    F = (0, n.createContext)(A),
                    D = ['children'];
                const C = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, D);
                    const r = (0, n.useContext)(F),
                        i = r.extraLarge,
                        a = r.large,
                        o = r.medium,
                        c = r.small,
                        l = r.extraSmall,
                        _ = r.extraLargeWidth,
                        E = r.largeWidth,
                        d = r.mediumWidth,
                        m = r.smallWidth,
                        A = r.extraSmallWidth,
                        C = r.extraLargeHeight,
                        p = r.largeHeight,
                        h = r.mediumHeight,
                        B = r.smallHeight,
                        g = r.extraSmallHeight,
                        v = { extraLarge: C, large: p, medium: h, small: B, extraSmall: g };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return u;
                        if (t.large && a) return u;
                        if (t.medium && o) return u;
                        if (t.small && c) return u;
                        if (t.extraSmall && l) return u;
                    } else {
                        if (t.extraLargeWidth && _) return s(u, t, v);
                        if (t.largeWidth && E) return s(u, t, v);
                        if (t.mediumWidth && d) return s(u, t, v);
                        if (t.smallWidth && m) return s(u, t, v);
                        if (t.extraSmallWidth && A) return s(u, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return u;
                            if (t.largeHeight && p) return u;
                            if (t.mediumHeight && h) return u;
                            if (t.smallHeight && B) return u;
                            if (t.extraSmallHeight && g) return u;
                        }
                    }
                    return null;
                };
                C.defaultProps = {
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
                };
                (0, n.memo)(C);
                const p = (e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    h = ({ children: e }) => {
                        const u = (0, n.useContext)(F),
                            t = (0, n.useState)(u),
                            i = t[0],
                            a = t[1],
                            s = (0, n.useCallback)((e, u) => {
                                const t = o.O.view.pxToRem(e),
                                    n = o.O.view.pxToRem(u);
                                a(Object.assign({ width: t, height: n }, _(t, n, c)));
                            }, []),
                            l = (0, n.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                s(e.width, e.height);
                            }, [s]);
                        (p(() => {
                            (o.O.client.events.on('clientResized', s), o.O.client.events.on('self.onScaleUpdated', l));
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    (o.O.client.events.off('clientResized', s),
                                        o.O.client.events.off('self.onScaleUpdated', l));
                                },
                                [s, l],
                            ));
                        const E = (0, n.useMemo)(() => Object.assign({}, i), [i]);
                        return r().createElement(F.Provider, { value: E }, e);
                    },
                    B = 'buyNotRequiredPanel',
                    g = 'exchangePanel',
                    v = 'notPossible';
                let b, f;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(b || (b = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(f || (f = {})));
                const y = (e = 1) => {
                        const u = new Error().stack;
                        let t,
                            n = R.invalid('resId'),
                            r = '';
                        var i;
                        u &&
                            ((r = (null == (i = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : i[0]) || ''),
                            (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (n = window.subViews[t].id));
                        return { callerUrl: r, caller: t, stack: u, resId: n };
                    },
                    w = (e, u) => e.split('.').reduce((e, u) => e && e[u], u);
                var x = t(9916);
                const S = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    N = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    k = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = w(`${e}.${t}`, window);
                                return S(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    P = (e) => {
                        const u = ((e) => {
                                const u = y(),
                                    t = u.caller,
                                    n = u.resId,
                                    r = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: r, modelPath: N(r, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const r = w(N(t, `${u}.${n}`), window);
                                    return S(r) ? (e.push(r.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    };
                const I = () => (window.injected || (window.injected = new Map()), window.injected);
                const T = x.Sw.instance;
                let O;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(O || (O = {}));
                const M = (e = 'model', u = O.Deep) => {
                    const t = (0, n.useState)(0),
                        r = (t[0], t[1]),
                        i = (0, n.useMemo)(() => y(), []),
                        a = i.callerUrl,
                        s = i.caller,
                        o = i.resId,
                        c = (0, n.useMemo)(() => {
                            const u = (function (e) {
                                return I().has(e);
                            })(a.replace('.js', '.html'));
                            return window.__feature && window.__feature !== s && !u ? `subViews.${s}.${e}` : e;
                        }, [a, s, e]),
                        l = (0, n.useState)(() =>
                            ((e) => {
                                const u = w(e, window);
                                for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                return S(u) ? u.value : u;
                            })(k(c)),
                        ),
                        _ = l[0],
                        E = l[1],
                        d = (0, n.useRef)(-1);
                    return (
                        p(() => {
                            if (
                                ('boolean' == typeof u &&
                                    ((u = u ? O.Deep : O.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                u !== O.None)
                            ) {
                                const t = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        u === O.Deep
                                            ? (e === _ && r((e) => e + 1), E(e))
                                            : E(Object.assign([], e));
                                    },
                                    n = P(e);
                                d.current = T.addCallback(n, t, o, u === O.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (u !== O.None)
                                return () => {
                                    T.removeCallback(d.current, o);
                                };
                        }, [o, u]),
                        _
                    );
                };
                var L = t(6483),
                    V = t.n(L);
                function H(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const U = {
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
                    W = ({
                        children: e,
                        size: u,
                        isFocused: t,
                        type: i,
                        disabled: a,
                        mixClass: s,
                        soundHover: o,
                        soundClick: c,
                        onMouseEnter: l,
                        onMouseMove: _,
                        onMouseDown: E,
                        onMouseUp: d,
                        onMouseLeave: m,
                        onClick: A,
                    }) => {
                        const F = (0, n.useRef)(null),
                            D = (0, n.useState)(t),
                            C = D[0],
                            p = D[1],
                            h = (0, n.useState)(!1),
                            B = h[0],
                            g = h[1];
                        return (
                            (0, n.useEffect)(() => {
                                function e(e) {
                                    C && null !== F.current && !F.current.contains(e.target) && p(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', e),
                                    () => {
                                        document.removeEventListener('mousedown', e);
                                    }
                                );
                            }, [C]),
                            (0, n.useEffect)(() => {
                                p(t);
                            }, [t]),
                            r().createElement(
                                'div',
                                {
                                    ref: F,
                                    className: V()(
                                        U.base,
                                        U[`base__${i}`],
                                        a && U.base__disabled,
                                        u && U[`base__${u}`],
                                        C && U.base__focus,
                                        B && U.base__highlightActive,
                                        s,
                                    ),
                                    onMouseEnter: function (e) {
                                        a || (null !== o && H(o), l && l(e));
                                    },
                                    onMouseMove: function (e) {
                                        _ && _(e);
                                    },
                                    onMouseUp: function (e) {
                                        a || (d && d(e), g(!1));
                                    },
                                    onMouseDown: function (e) {
                                        a ||
                                            (null !== c && H(c),
                                            E && E(e),
                                            t && (a || (F.current && (F.current.focus(), p(!0)))),
                                            g(!0));
                                    },
                                    onMouseLeave: function (e) {
                                        a || (m && m(e), g(!1));
                                    },
                                    onClick: function (e) {
                                        a || (A && A(e));
                                    },
                                },
                                i !== b.ghost &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: U.back }),
                                        r().createElement('span', { className: U.texture }),
                                    ),
                                r().createElement(
                                    'span',
                                    { className: V()(U.state, U.state__default) },
                                    r().createElement('span', { className: U.stateDisabled }),
                                    r().createElement('span', { className: U.stateHighlightHover }),
                                    r().createElement('span', { className: U.stateHighlightActive }),
                                ),
                                r().createElement(
                                    'span',
                                    { className: U.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    e,
                                ),
                            )
                        );
                    };
                W.defaultProps = { type: b.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const $ = W,
                    j = {
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
                    z = [
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
                function G() {
                    return (
                        (G =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        G.apply(this, arguments)
                    );
                }
                class X extends r().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && H(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && H(this.props.soundClick));
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
                            n = e.goto,
                            i = e.side,
                            a = e.type,
                            s = e.classNames,
                            o = e.onMouseEnter,
                            c = e.onMouseLeave,
                            l = e.onMouseDown,
                            _ = e.onMouseUp,
                            E =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(e, z)),
                            d = V()(j.base, j[`base__${a}`], j[`base__${i}`], null == s ? void 0 : s.base),
                            m = V()(j.icon, j[`icon__${a}`], j[`icon__${i}`], null == s ? void 0 : s.icon),
                            A = V()(j.glow, null == s ? void 0 : s.glow),
                            F = V()(j.caption, j[`caption__${a}`], null == s ? void 0 : s.caption),
                            D = V()(j.goto, null == s ? void 0 : s.goto);
                        return r().createElement(
                            'div',
                            G(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(l),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== a && r().createElement('div', { className: j.shine }),
                            r().createElement('div', { className: m }, r().createElement('div', { className: A })),
                            r().createElement('div', { className: F }, u),
                            n && r().createElement('div', { className: D }, n),
                        );
                    }
                }
                X.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const K = [
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
                function q(e) {
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
                const Z = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: x.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Y = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            i = e.onMouseEnter,
                            a = e.onMouseLeave,
                            s = e.onMouseDown,
                            o = e.onClick,
                            c = e.ignoreShowDelay,
                            l = void 0 !== c && c,
                            _ = e.ignoreMouseClick,
                            E = void 0 !== _ && _,
                            d = e.decoratorId,
                            m = void 0 === d ? 0 : d,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            C = void 0 === D ? 0 : D,
                            p = e.onShow,
                            h = e.onHide,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, K);
                        const g = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, n.useMemo)(() => C || y().resId, [C]),
                            b = (0, n.useCallback)(() => {
                                (g.current.isVisible && g.current.timeoutId) ||
                                    (Z(t, m, { isMouseEvent: !0, on: !0, arguments: q(r) }, v),
                                    p && p(),
                                    (g.current.isVisible = !0));
                            }, [t, m, r, v, p]),
                            f = (0, n.useCallback)(() => {
                                if (g.current.isVisible || g.current.timeoutId) {
                                    const e = g.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (g.current.timeoutId = 0)),
                                        Z(t, m, { on: !1 }, v),
                                        g.current.isVisible && h && h(),
                                        (g.current.isVisible = !1));
                                }
                            }, [t, m, v, h]),
                            w = (0, n.useCallback)((e) => {
                                g.current.isVisible &&
                                    ((g.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (g.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(g.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const e = g.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && f();
                            }, [F, f]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        (window.removeEventListener('mouseleave', f), f());
                                    }
                                ),
                                [f],
                            ));
                        return F
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((g.current.timeoutId = window.setTimeout(b, l ? 100 : 400)),
                                                      i && i(e),
                                                      x && x(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (f(), null == a || a(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === E && f(), null == o || o(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === E && f(), null == s || s(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : u;
                        var x;
                    },
                    Q = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function J() {
                    return (
                        (J =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        J.apply(this, arguments)
                    );
                }
                const ee = R.views.common.tooltip_window.simple_tooltip_content,
                    ue = (e) => {
                        let u = e.children,
                            t = e.body,
                            i = e.header,
                            a = e.note,
                            s = e.alert,
                            o = e.args,
                            c = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Q);
                        const l = (0, n.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: i, note: a, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, i, a, o]);
                        return r().createElement(
                            Y,
                            J(
                                {
                                    contentId:
                                        ((_ = null == o ? void 0 : o.hasHtmlContent),
                                        _ ? ee.SimpleTooltipHtmlContent('resId') : ee.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: l,
                                },
                                c,
                            ),
                            u,
                        );
                        var _;
                    };
                var te = t(1281);
                let ne;
                function re(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(ne || (ne = {}));
                const ie = (e) => e.replace(/&nbsp;/g, ' '),
                    ae = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    se = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    oe = (e, u, t = ne.left) => e.split(u).reduce(t === ne.left ? ae : se, []),
                    ce = (() => {
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
                    le = ['zh_cn', 'zh_sg', 'zh_tw'],
                    _e = (e, u = ne.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (le.includes(t)) return ce(e);
                        if ('ja' === t) {
                            return (0, te.D4)()
                                .parse(e)
                                .map((e) => ie(e));
                        }
                        return ((e, u = ne.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = ie(e);
                            return (oe(r, /( )/, u).forEach((e) => (t = t.concat(oe(e, n, ne.left)))), t);
                        })(e, u);
                    };
                var Ee = t(8613);
                (Date.now(), Ee.Ew.getRegionalDateTime, Ee.Ew.getFormattedDateTime);
                const de = (e, u) => {
                        const t = (0, n.useRef)();
                        return (
                            (0, n.useEffect)(() => {
                                (u && !u(e)) || (t.current = e);
                            }, [u, e]),
                            t.current
                        );
                    },
                    me = (x.Sw.instance, de);
                let Ae;
                !(function (e) {
                    ((e[(e.Space = 32)] = 'Space'),
                        (e[(e.Enter = 13)] = 'Enter'),
                        (e[(e.A = 65)] = 'A'),
                        (e[(e.B = 66)] = 'B'),
                        (e[(e.C = 67)] = 'C'),
                        (e[(e.D = 68)] = 'D'),
                        (e[(e.E = 69)] = 'E'),
                        (e[(e.F = 70)] = 'F'),
                        (e[(e.G = 71)] = 'G'),
                        (e[(e.H = 72)] = 'H'),
                        (e[(e.I = 73)] = 'I'),
                        (e[(e.J = 74)] = 'J'),
                        (e[(e.K = 75)] = 'K'),
                        (e[(e.L = 76)] = 'L'),
                        (e[(e.M = 77)] = 'M'),
                        (e[(e.N = 78)] = 'N'),
                        (e[(e.O = 79)] = 'O'),
                        (e[(e.P = 80)] = 'P'),
                        (e[(e.Q = 81)] = 'Q'),
                        (e[(e.R = 82)] = 'R'),
                        (e[(e.S = 83)] = 'S'),
                        (e[(e.T = 84)] = 'T'),
                        (e[(e.U = 85)] = 'U'),
                        (e[(e.V = 86)] = 'V'),
                        (e[(e.W = 87)] = 'W'),
                        (e[(e.X = 88)] = 'X'),
                        (e[(e.Y = 89)] = 'Y'),
                        (e[(e.Z = 90)] = 'Z'));
                })(Ae || (Ae = {}));
                const Fe = (e = {}) => {
                    (0, n.useEffect)(() => {
                        const u = (u) => {
                            if (!u.altKey && !u.ctrlKey && !u.shiftKey) {
                                const t = e[u.keyCode];
                                'function' == typeof t && t(u);
                            }
                        };
                        return (
                            window.addEventListener('keyup', u),
                            () => {
                                window.removeEventListener('keyup', u);
                            }
                        );
                    }, [e]);
                };
                var De = t(5521);
                let Ce, pe, he, Be;
                (!(function (e) {
                    ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(Ce || (Ce = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(pe || (pe = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(he || (he = {})));
                class ge extends r().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = x.B3.GOLD;
                        else e = x.B3.INTEGRAL;
                        const u = x.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                ((ge.defaultProps = { format: 'integral' }),
                    (function (e) {
                        ((e.backport = 'backport'), (e.normal = 'normal'), (e.absent = 'absent'));
                    })(Be || (Be = {})));
                const ve = {
                        currency: 'CurrencyItem_currency_b6',
                        currency__credits: 'CurrencyItem_currency__credits_eb',
                        currency__gold: 'CurrencyItem_currency__gold_af',
                        currency__crystal: 'CurrencyItem_currency__crystal_fc',
                        currency__freeXP: 'CurrencyItem_currency__freeXP_36',
                    },
                    be = ({ value: e, currencyType: u, isWalletAvailable: t }) => {
                        const i = u === pe.gold ? 'gold' : 'integral',
                            a = (0, n.useMemo)(() => {
                                return (
                                    (e = Be.backport),
                                    (t = { currency: u }),
                                    {
                                        isEnabled: e !== Be.absent,
                                        args: t,
                                        contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                        decoratorId:
                                            e === Be.normal
                                                ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                                : void 0,
                                        ignoreShowDelay: e === Be.backport,
                                        ignoreMouseClick: !0,
                                    }
                                );
                                var e, t;
                            }, [u]);
                        return r().createElement(
                            Y,
                            a,
                            r().createElement(
                                'span',
                                { className: V()(ve.currency, ve[`currency__${u}`]) },
                                t ? r().createElement(ge, { value: e, format: i }) : R.strings.common.common.dashes(),
                            ),
                        );
                    },
                    fe = 'CurrencyBalance_base_97',
                    ye = ({ credits: e, golds: u, crystals: t, freexp: n, isWalletAvailable: i }) =>
                        r().createElement(
                            'div',
                            { className: fe },
                            r().createElement(be, { value: t, currencyType: pe.crystal, isWalletAvailable: i }),
                            r().createElement(be, { value: u, currencyType: pe.gold, isWalletAvailable: i }),
                            r().createElement(be, { value: e, currencyType: pe.credits, isWalletAvailable: i }),
                            r().createElement(be, { value: n, currencyType: pe.freeXP, isWalletAvailable: i }),
                        ),
                    we = 'DialogTemplate_base_bb',
                    xe = 'DialogTemplate_control_3e',
                    Se = 'DialogTemplate_closeButton_2c',
                    Ne = 'DialogTemplate_view_78',
                    ke = 'DialogTemplate_view__show_51',
                    Pe = 'DialogTemplate_content_dc',
                    Ie = 'DialogTemplate_line_af',
                    Te = 'DialogTemplate_divider_cb',
                    Oe = 'DialogTemplate_footer_2b',
                    Me = 'DialogTemplate_buttons_f5',
                    Re = 'DialogTemplate_buttonWrapper_d9',
                    Le = 'DialogTemplate_button_f0';
                function Ve() {
                    return (
                        (Ve =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ve.apply(this, arguments)
                    );
                }
                const He = ({
                        parentId: e,
                        content: u,
                        footer: t,
                        type: i = 'simple',
                        buttonAccept: a,
                        buttonAcceptText: s,
                        buttonCancel: c,
                        buttonCancelText: l,
                        disabledAcceptTooltipText: _ = R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                        showPayInfo: E = !1,
                        isShowTooltip: d = !0,
                    }) => {
                        const m = M('model'),
                            A = m.credits,
                            F = m.golds,
                            D = m.crystals,
                            C = m.freexp,
                            p = m.onAcceptClicked,
                            h = m.onCancelClicked,
                            B = m.onExit,
                            g = m.isWalletAvailable,
                            v = (0, n.useCallback)(() => {
                                p();
                            }, [p]),
                            b = (0, n.useCallback)(() => {
                                h();
                            }, [h]),
                            f = (0, n.useCallback)(() => {
                                B();
                            }, [B]);
                        Fe({ [De.n.ESCAPE]: f });
                        const y = (0, n.useCallback)(
                            (e) => {
                                (e.keyCode in De.n &&
                                    e.keyCode !== De.n.BACKSPACE &&
                                    e.keyCode !== De.n.DELETE &&
                                    (e.preventDefault(), o.O.view.setEventHandled()),
                                    e.keyCode !== De.n.ENTER ||
                                        e.altKey ||
                                        window.model.isAcceptDisabled ||
                                        a.disabled ||
                                        v());
                            },
                            [a.disabled, v],
                        );
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('keydown', y),
                                () => document.removeEventListener('keydown', y)
                            ),
                            [y],
                        );
                        const w = V()(Ie, Te),
                            x =
                                E &&
                                'simple' === i &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(ye, {
                                        credits: A,
                                        golds: F,
                                        crystals: D,
                                        freexp: C,
                                        isWalletAvailable: g,
                                    }),
                                    r().createElement('div', { className: Ie }),
                                ),
                            S =
                                a &&
                                r().createElement(
                                    ue,
                                    { body: _ || '', isEnabled: Boolean(_) && d && a.disabled },
                                    r().createElement(
                                        'div',
                                        { id: `${e}-accept`, className: Re },
                                        r().createElement($, Ve({ onClick: v, mixClass: Le }, a), s),
                                    ),
                                ),
                            N =
                                c &&
                                r().createElement(
                                    'div',
                                    { id: `${e}-cancel`, className: Re },
                                    r().createElement($, Ve({ onClick: b, mixClass: Le }, c), l),
                                );
                        return r().createElement(
                            'div',
                            { className: we },
                            r().createElement(
                                'div',
                                { className: xe },
                                x,
                                r().createElement(
                                    'div',
                                    { id: `${e}-close-button`, className: Se },
                                    r().createElement(X, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: f,
                                    }),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: V()(Ne, ke) },
                                r().createElement('div', { className: Pe }, u),
                                r().createElement('div', { className: w }),
                                t && r().createElement('div', { className: Oe }, t),
                                r().createElement('div', { className: Me }, S, N),
                                r().createElement('div', { id: 'dialog-template-footer' }),
                            ),
                        );
                    },
                    Ue = 'FormatText_base_d0',
                    We = ({ binding: e, text: u = '', classMix: t, alignment: i = ne.left, formatWithBrackets: a }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const s = a && e ? re(u, e) : u;
                        return r().createElement(
                            n.Fragment,
                            null,
                            s.split('\n').map((u, a) =>
                                r().createElement(
                                    'div',
                                    { className: V()(Ue, t), key: `${u}-${a}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : _e(e, u))))(
                                        u,
                                        i,
                                        e,
                                    ).map((e, u) => r().createElement(n.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    $e = {
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
                        'icon__eliteXP-small': 'Currency_icon__eliteXP-small_45',
                        'icon__eliteXP-big': 'Currency_icon__eliteXP-big_c0',
                        'icon__eliteXP-large': 'Currency_icon__eliteXP-large_1b',
                        'icon__eliteXP-extraLarge': 'Currency_icon__eliteXP-extraLarge_9b',
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
                        value__eliteXP: 'Currency_value__eliteXP_62',
                        value__notEnough: 'Currency_value__notEnough_56',
                        stock: 'Currency_stock_87',
                        stock__indent: 'Currency_stock__indent_a1',
                        stock__interactive: 'Currency_stock__interactive_93',
                        stockBackground: 'Currency_stockBackground_82',
                    },
                    je = (0, n.memo)(
                        ({
                            isDiscount: e,
                            isInteractiveDiscount: u,
                            size: t,
                            type: n,
                            value: i,
                            discountValue: a,
                            showPlus: s,
                            isEnough: o = !0,
                            stockBackgroundName: c = he.Red,
                            className: l,
                            classNames: _,
                        }) =>
                            r().createElement(
                                'span',
                                { className: V()($e.base, $e[`base__${t}`], l) },
                                r().createElement(
                                    'span',
                                    {
                                        className: V()(
                                            $e.value,
                                            $e[`value__${n}`],
                                            !o && $e.value__notEnough,
                                            null == _ ? void 0 : _.value,
                                        ),
                                    },
                                    s && i > 0 && '+',
                                    r().createElement(ge, { value: i, format: n === pe.gold ? 'gold' : 'integral' }),
                                ),
                                r().createElement('span', {
                                    className: V()($e.icon, $e[`icon__${n}-${t}`], null == _ ? void 0 : _.icon),
                                }),
                                e &&
                                    r().createElement(
                                        'span',
                                        {
                                            className: V()(
                                                $e.stock,
                                                a && $e.stock__indent,
                                                u && $e.stock__interactive,
                                                null == _ ? void 0 : _.stock,
                                            ),
                                        },
                                        r().createElement('span', {
                                            className: $e.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${c})` },
                                        }),
                                        Boolean(a) && a,
                                    ),
                            ),
                    );
                var ze = t(9690);
                const Ge = 'VehicleInfo_base_01',
                    Xe = 'VehicleInfo_base__small_2b',
                    Ke = 'VehicleInfo_type_5a',
                    qe = (e, u) => {
                        const t = `${e.replace(/-/g, '_')}${u ? '_elite' : ''}`;
                        return R.images.gui.maps.icons.vehicleTypes.big.$dyn(t);
                    },
                    Ze = (0, n.memo)(
                        ({ vehicleLvl: e, vehicleName: u, vehicleType: t, isElite: i, isSmall: a = !1 }) => {
                            const s = V()(Ge, a && Xe),
                                o = (0, n.useMemo)(() => ({ backgroundImage: `url(${qe(t, i)})` }), [t, i]);
                            return r().createElement(
                                'div',
                                { className: s },
                                (0, ze.cg)(e),
                                r().createElement('div', { className: Ke, style: o }),
                                u,
                            );
                        },
                    ),
                    Ye = 'Slot_base_70',
                    Qe = 'Slot_icon_bb',
                    Je = 'Slot_base__active_67',
                    eu = 'Slot_specialization_ed',
                    uu = 'Slot_arrow_2d',
                    tu = (0, n.memo)(({ specialization: e, isActive: u }) => {
                        const t = (0, n.useMemo)(() => {
                                if (!e) return {};
                                return {
                                    backgroundImage: `url(${R.images.gui.maps.icons.specialization.$dyn(`${e}_${u ? 'on' : 'off'}`)})`,
                                };
                            }, [u, e]),
                            i = V()(Ye, u && Je);
                        return r().createElement(
                            'div',
                            { className: i },
                            r().createElement('div', { className: Qe }),
                            e && r().createElement('div', { style: t, className: eu }),
                            u && r().createElement('div', { className: uu }),
                        );
                    }),
                    nu = 'Slots_base_3d',
                    ru = 'Slots_slot_b9',
                    iu = ({ slots: e, targetSlotIdx: u, selectedSpecialization: t }) =>
                        r().createElement(
                            'div',
                            { className: nu },
                            e.map(({ value: e }, n) =>
                                r().createElement(
                                    'div',
                                    { key: n, className: ru },
                                    r().createElement(tu, {
                                        specialization: n === u ? t : e.specialization,
                                        isActive: n === u,
                                    }),
                                ),
                            ),
                        ),
                    au = {
                        base: 'Card_base_b6',
                        background: 'Card_background_77',
                        base__normal: 'Card_base__normal_50',
                        base__active: 'Card_base__active_ef',
                        base__disabled: 'Card_base__disabled_e4',
                        specialization: 'Card_specialization_32',
                        name: 'Card_name_be',
                        checkmark: 'Card_checkmark_a3',
                    };
                let su;
                !(function (e) {
                    ((e.Normal = 'normal'), (e.Active = 'active'), (e.Disabled = 'disabled'));
                })(su || (su = {}));
                const ou = (0, n.memo)(
                        ({ specialization: e, state: u = su.Normal, isSelected: t, index: i, onClick: a }) => {
                            const s = (0, n.useState)(!1),
                                o = s[0],
                                c = s[1],
                                l = (0, n.useCallback)(() => {
                                    u === su.Normal && (H('yes1'), a(i));
                                }, [i, a, u]),
                                _ = (0, n.useCallback)(() => {
                                    (u === su.Normal && H('highlight'), c(!0));
                                }, [u]),
                                E = (0, n.useCallback)(() => {
                                    c(!1);
                                }, []),
                                d = (0, n.useMemo)(() => {
                                    const t = (u === su.Normal && o) || u === su.Active ? 'on' : 'off',
                                        n = `extra_large_${e}_${t}`;
                                    return {
                                        backgroundImage: `url(${R.images.gui.maps.icons.specialization.$dyn(n)})`,
                                    };
                                }, [o, e, u]),
                                m = V()(au.base, au[`base__${u}`]);
                            return r().createElement(
                                'div',
                                { className: m, onClick: l, onMouseEnter: _, onMouseLeave: E },
                                r().createElement('div', { className: au.background }),
                                r().createElement('div', { style: d, className: au.specialization }),
                                r().createElement(
                                    'div',
                                    { className: au.name },
                                    R.strings.tank_setup.categories.$dyn(e),
                                ),
                                t && r().createElement('div', { className: au.checkmark }),
                            );
                        },
                    ),
                    cu = 'Cards_base_38',
                    lu = 'Cards_card_c8',
                    _u = (e, u, t, n, r, i) =>
                        t === v ? (n ? (r(i), su.Active) : su.Disabled) : e === u ? su.Active : su.Normal,
                    Eu = ({
                        availableSpecs: e,
                        activeCardIdx: u,
                        onActiveCardChange: t,
                        currentlySelectedSpecIdx: n,
                        exchangeState: i,
                        isSelectDialog: a,
                    }) =>
                        r().createElement(
                            'div',
                            { className: cu },
                            e.map(({ value: e }, s) =>
                                r().createElement(
                                    'div',
                                    { key: e.id, className: lu },
                                    r().createElement(ou, {
                                        specialization: e.specialization,
                                        state: _u(s, u, i, !a && s === n, t, n),
                                        isSelected: !a && s === n,
                                        onClick: t,
                                        index: s,
                                    }),
                                ),
                            ),
                        ),
                    du = 'Price_base_5e',
                    mu = (0, n.memo)(({ price: e, size: u = Ce.small }) =>
                        r().createElement(
                            'div',
                            { className: du },
                            r().createElement(je, {
                                key: e.name,
                                size: u,
                                type: e.name,
                                value: e.value,
                                isEnough: e.isEnough,
                            }),
                        ),
                    ),
                    Au = ['children'];
                function Fu() {
                    return (
                        (Fu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Fu.apply(this, arguments)
                    );
                }
                const Du = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, Au);
                    return r().createElement(
                        Y,
                        Fu(
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
                function Cu() {
                    return (
                        (Cu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Cu.apply(this, arguments)
                    );
                }
                const pu = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = r().createElement('div', { className: t }, e);
                    if (u.header || u.body) return r().createElement(ue, u, n);
                    const i = u.contentId;
                    return i ? r().createElement(Y, Cu({}, u, { contentId: i }), n) : r().createElement(Du, u, n);
                };
                let hu, Bu;
                (!(function (e) {
                    ((e.Limited = 'limited'), (e.Unlimited = 'unlimited'));
                })(hu || (hu = {})),
                    (function (e) {
                        ((e.Coefficient = 'coefficient'),
                            (e.Integer = 'integer'),
                            (e.Temporary = 'temporary'),
                            (e.Limited = 'limited'));
                    })(Bu || (Bu = {})));
                const gu = 'ExchangeRate_base_76',
                    vu = 'ExchangeRate_baseHidden_12',
                    bu = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeRateTooltip('resId') },
                    fu = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeLimitTooltip('resId') },
                    yu = ({
                        fromItem: e,
                        toItem: u,
                        defaultRate: t,
                        discount: i,
                        amountOfPersonalDiscounts: a,
                        discountRate: s,
                    }) => {
                        const o = i.isDiscountAvailable && 'limited' === i.discountType && i.amountOfDiscount < e.value;
                        let c;
                        i && i.isDiscountAvailable && (c = i.discountType === hu.Limited ? (a <= 5 ? fu : void 0) : bu);
                        const l = (0, n.useMemo)(
                            () => ({
                                gold: r().createElement(je, { key: e.name, size: Ce.small, type: pe.gold, value: 1 }),
                                credits: r().createElement(je, {
                                    key: u.name,
                                    size: Ce.small,
                                    type: pe.credits,
                                    value: i.isDiscountAvailable ? s.resourceRateValue : t,
                                    isDiscount: i.isDiscountAvailable,
                                }),
                            }),
                            [t, s.resourceRateValue, i.isDiscountAvailable, e.name, u.name],
                        );
                        return r().createElement(
                            'div',
                            { className: V()(gu, o && vu) },
                            r().createElement(
                                pu,
                                { tooltipArgs: c },
                                r().createElement(We, {
                                    text: R.strings.tank_setup.dialogs.goldExchange.default.status(),
                                    binding: l,
                                }),
                            ),
                        );
                    },
                    wu = 'ExchangeStatus_base_1b',
                    xu = 'ExchangeStatus_warning_99',
                    Su = ({ exchangeState: e }) => {
                        const u = M('model.exchangePanel'),
                            t = u.fromItem,
                            i = u.toItem,
                            a = u.exchangeRate,
                            s = (0, n.useMemo)(
                                () => ({
                                    gold: r().createElement(je, { type: pe.gold, size: Ce.small, value: t.value }),
                                }),
                                [t.value],
                            );
                        return r().createElement(
                            'div',
                            { className: wu },
                            e === v
                                ? r().createElement(We, {
                                      text: R.strings.veh_post_progression.selectSlotSpecDialog.exchangeWarning(),
                                      binding: s,
                                      classMix: xu,
                                  })
                                : r().createElement(yu, {
                                      fromItem: t,
                                      toItem: i,
                                      defaultRate: a.default,
                                      discount: a.discount,
                                      discountRate: a.discount.exchangeRate,
                                      amountOfPersonalDiscounts: a.amountOfPersonalDiscounts,
                                  }),
                        );
                    },
                    Nu = 'DialogContent_base_28',
                    ku = 'DialogContent_title_31',
                    Pu = 'DialogContent_base__small_5e',
                    Iu = 'DialogContent_slots_a5',
                    Tu = 'DialogContent_cards_2a',
                    Ou = 'DialogContent_description_58',
                    Mu = 'DialogContent_status_ce';
                function Ru() {
                    return (
                        (Ru =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ru.apply(this, arguments)
                    );
                }
                const Lu = R.strings.veh_post_progression.selectSlotSpecDialog,
                    Vu = ({
                        bottomContentType: e,
                        changePrice: u,
                        exchangeState: t,
                        lacksMoney: i,
                        currentlySelectedSpecIdx: a,
                        activeCardIdx: s,
                        onActiveCardChange: o,
                    }) => {
                        const c = M('model.mainContent'),
                            l = c.vehicleInfo,
                            _ = c.slots,
                            E = c.targetSlotIdx,
                            d = c.availableSpecs,
                            m = -1 === s ? a : s,
                            A = (0, n.useContext)(F),
                            D = A.small || A.extraSmall,
                            C = (0, n.useMemo)(
                                () => ({
                                    credits: r().createElement(je, {
                                        type: pe.credits,
                                        size: D ? Ce.big : Ce.large,
                                        value: i.value,
                                    }),
                                }),
                                [D, i.value],
                            ),
                            p = (0, n.useMemo)(() => ({ price: r().createElement(mu, { price: u }) }), [u]),
                            h = V()(Nu, D && Pu);
                        return r().createElement(
                            'div',
                            { className: h },
                            r().createElement(Ze, Ru({}, l, { isSmall: D })),
                            r().createElement(We, { text: Lu.title.$dyn(e), binding: C, classMix: ku }),
                            r().createElement(
                                'div',
                                { className: Iu },
                                r().createElement(iu, {
                                    slots: _,
                                    targetSlotIdx: E,
                                    selectedSpecialization: d[m].value.specialization,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: Tu },
                                r().createElement(Eu, {
                                    availableSpecs: d,
                                    activeCardIdx: s,
                                    onActiveCardChange: o,
                                    currentlySelectedSpecIdx: a,
                                    isSelectDialog: e === B,
                                    exchangeState: t,
                                }),
                            ),
                            r().createElement(We, {
                                text: Lu.desc.$dyn(e === B ? 'select' : 'change'),
                                binding: p,
                                classMix: Ou,
                            }),
                            e === g &&
                                r().createElement(
                                    'div',
                                    { className: Mu },
                                    r().createElement(Su, { exchangeState: t }),
                                ),
                        );
                    },
                    Hu = (e) => {
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
                    Uu = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    Wu = (e) => e instanceof HTMLElement,
                    $u = (e) => {
                        e.focus();
                    },
                    ju = (e) => {
                        if (e.keyCode === De.n.TAB) {
                            const u = Array.from(document.body.querySelectorAll('input')).filter(Wu);
                            if (!u.length) return;
                            (e.preventDefault(), o.O.view.setEventHandled());
                            const t = document.activeElement,
                                n = u[0],
                                r = u[u.length - 1];
                            if (e.shiftKey && t === n) $u(r);
                            else if (e.shiftKey || t !== r) {
                                const n = u.findIndex((e) => e === t),
                                    r = u[n + (e.shiftKey ? -1 : 1)];
                                r && $u(r);
                            } else $u(n);
                        }
                    };
                function zu(e) {
                    const u = new KeyboardEvent('keydown', {
                        view: window,
                        bubbles: !0,
                        key: 'Tab',
                        charCode: De.n.TAB,
                        keyCode: De.n.TAB,
                        shiftKey: e,
                    });
                    document.body.dispatchEvent(u);
                }
                var Gu = t(3403);
                function Xu(e, u, t, n) {
                    let r,
                        i = !1,
                        a = 0;
                    function s() {
                        r && clearTimeout(r);
                    }
                    function o(...o) {
                        const c = this,
                            l = Date.now() - a;
                        function _() {
                            ((a = Date.now()), t.apply(c, o));
                        }
                        i ||
                            (n && !r && _(),
                            s(),
                            void 0 === n && l > e
                                ? _()
                                : !0 !== u &&
                                  (r = setTimeout(
                                      n
                                          ? function () {
                                                r = void 0;
                                            }
                                          : _,
                                      void 0 === n ? e - l : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                        (o.cancel = function () {
                            (s(), (i = !0));
                        }),
                        o
                    );
                }
                function Ku(e, u, t, r = !1) {
                    const i = (0, n.useMemo)(
                        () =>
                            (function (e, u, t) {
                                return void 0 === t ? Xu(e, u, !1) : Xu(e, t, !1 !== u);
                            })(t, r, e),
                        u,
                    );
                    return ((0, n.useEffect)(() => i.cancel, [i]), i);
                }
                var qu = t(2558),
                    Zu = t(8934);
                const Yu = (e, u = x.B3.INTEGRAL) => x.Z5.getNumberFormat(e, u);
                t(3368);
                let Qu;
                !(function (e) {
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
                })(Qu || (Qu = {}));
                const Ju = {
                    base: 'NumericStepper_base_98',
                    base__small: 'NumericStepper_base__small_e3',
                    base__medium: 'NumericStepper_base__medium_7f',
                    base__large: 'NumericStepper_base__large_87',
                    base__isFocus: 'NumericStepper_base__isFocus_d0',
                    base__isDisabled: 'NumericStepper_base__isDisabled_06',
                    inputContainer: 'NumericStepper_inputContainer_87',
                    input: 'NumericStepper_input_ef',
                    'base__withCurrency-small': 'NumericStepper_base__withCurrency-small_a3',
                    'base__withCurrency-medium': 'NumericStepper_base__withCurrency-medium_28',
                    'base__withCurrency-large': 'NumericStepper_base__withCurrency-large_2b',
                    input__disabled: 'NumericStepper_input__disabled_83',
                    input__credits: 'NumericStepper_input__credits_d6',
                    'input__credits-disabled': 'NumericStepper_input__credits-disabled_57',
                    input__gold: 'NumericStepper_input__gold_21',
                    'input__gold-disabled': 'NumericStepper_input__gold-disabled_1c',
                    input__xp: 'NumericStepper_input__xp_df',
                    input__freeXP: 'NumericStepper_input__freeXP_53',
                    input__crystal: 'NumericStepper_input__crystal_64',
                    'input__xp-disabled': 'NumericStepper_input__xp-disabled_4a',
                    'input__freeXP-disabled': 'NumericStepper_input__freeXP-disabled_29',
                    'input__crystal-disabled': 'NumericStepper_input__crystal-disabled_52',
                    input__withCurrency: 'NumericStepper_input__withCurrency_81',
                    'input__xp-medium': 'NumericStepper_input__xp-medium_4c',
                    'input__xp-large': 'NumericStepper_input__xp-large_5e',
                    'input__freeXP-medium': 'NumericStepper_input__freeXP-medium_ee',
                    'input__freeXP-large': 'NumericStepper_input__freeXP-large_05',
                    'input__crystal-medium': 'NumericStepper_input__crystal-medium_ef',
                    'input__crystal-large': 'NumericStepper_input__crystal-large_28',
                    input__error: 'NumericStepper_input__error_d8',
                    currency: 'NumericStepper_currency_31',
                    'currency__xp-medium': 'NumericStepper_currency__xp-medium_1d',
                    'currency__xp-large': 'NumericStepper_currency__xp-large_e1',
                    'currency__freeXP-medium': 'NumericStepper_currency__freeXP-medium_fa',
                    'currency__freeXP-large': 'NumericStepper_currency__freeXP-large_6d',
                    'currency__crystal-medium': 'NumericStepper_currency__crystal-medium_15',
                    'currency__crystal-large': 'NumericStepper_currency__crystal-large_02',
                    currencyIcon: 'NumericStepper_currencyIcon_5a',
                    'currencyIcon__credits-small': 'NumericStepper_currencyIcon__credits-small_05',
                    'currencyIcon__credits-medium': 'NumericStepper_currencyIcon__credits-medium_ec',
                    'currencyIcon__credits-large': 'NumericStepper_currencyIcon__credits-large_d4',
                    'currencyIcon__gold-small': 'NumericStepper_currencyIcon__gold-small_52',
                    'currencyIcon__gold-medium': 'NumericStepper_currencyIcon__gold-medium_77',
                    'currencyIcon__gold-large': 'NumericStepper_currencyIcon__gold-large_c1',
                    'currencyIcon__crystal-small': 'NumericStepper_currencyIcon__crystal-small_69',
                    'currencyIcon__crystal-medium': 'NumericStepper_currencyIcon__crystal-medium_20',
                    'currencyIcon__crystal-large': 'NumericStepper_currencyIcon__crystal-large_fa',
                    'currencyIcon__freeXP-small': 'NumericStepper_currencyIcon__freeXP-small_5c',
                    'currencyIcon__freeXP-medium': 'NumericStepper_currencyIcon__freeXP-medium_27',
                    'currencyIcon__freeXP-large': 'NumericStepper_currencyIcon__freeXP-large_27',
                    'currencyIcon__xp-small': 'NumericStepper_currencyIcon__xp-small_e9',
                    'currencyIcon__xp-medium': 'NumericStepper_currencyIcon__xp-medium_20',
                    'currencyIcon__xp-large': 'NumericStepper_currencyIcon__xp-large_8e',
                    dummyValue: 'NumericStepper_dummyValue_0c',
                    control: 'NumericStepper_control_b0',
                    buttonIncrement: 'NumericStepper_buttonIncrement_48',
                    buttonDecrement: 'NumericStepper_buttonDecrement_e6',
                    buttonIncrement__small: 'NumericStepper_buttonIncrement__small_a8',
                    buttonDecrement__small: 'NumericStepper_buttonDecrement__small_25',
                    buttonIncrement__medium: 'NumericStepper_buttonIncrement__medium_2e',
                    buttonDecrement__medium: 'NumericStepper_buttonDecrement__medium_b0',
                    buttonIncrement__large: 'NumericStepper_buttonIncrement__large_37',
                    buttonDecrement__large: 'NumericStepper_buttonDecrement__large_f9',
                    buttonIncrement__isDisabled: 'NumericStepper_buttonIncrement__isDisabled_6b',
                    buttonDecrement__isDisabled: 'NumericStepper_buttonDecrement__isDisabled_a3',
                    'buttonIncrement__isActive-small': 'NumericStepper_buttonIncrement__isActive-small_6e',
                    'buttonIncrement__isActive-medium': 'NumericStepper_buttonIncrement__isActive-medium_cd',
                    'buttonIncrement__isActive-large': 'NumericStepper_buttonIncrement__isActive-large_8b',
                    'buttonDecrement__isActive-small': 'NumericStepper_buttonDecrement__isActive-small_a0',
                    'buttonDecrement__isActive-medium': 'NumericStepper_buttonDecrement__isActive-medium_df',
                    'buttonDecrement__isActive-large': 'NumericStepper_buttonDecrement__isActive-large_ac',
                };
                class et extends r().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.timer = null),
                            (this.validationTimer = null),
                            (this.numericalStepper = (0, n.createRef)()),
                            (this.input = (0, n.createRef)()),
                            (this.state = {
                                value: this.props.value,
                                isFocused: this.props.isFocused,
                                activeDecrement: !1,
                                activeIncrement: !1,
                            }),
                            (this.setFocusOnInput = () => {
                                this.props.isDisabled ||
                                    (this.input.current &&
                                        (this.input.current.focus(),
                                        this.setState({ isFocused: !0 }),
                                        this.setCursorPosition(
                                            this.formattedValue.length,
                                            this.formattedValue.length,
                                        )));
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
                                this.props.currencyType ? x.Z5.getNumberFormat(e, x.B3.GOLD) : e.toString()),
                            (this.getValidValue = (e) => {
                                const u = Math.min(this.props.maximum, Math.max(this.props.minimum, e));
                                return this.props.onValidValue
                                    ? this.props.onValidValue(u)
                                    : Math.round(u / this.props.stepSize) * this.props.stepSize;
                            }),
                            (this.changeValue = (e) => {
                                e !== this.state.value && (this.setState({ value: e }), this.props.onChange(e));
                            }),
                            (this.setCursorPosition = (e, u) => {
                                (this.input.current && this.input.current.setSelectionRange(e, u),
                                    setTimeout(() => {
                                        this.input.current && this.input.current.setSelectionRange(e, u);
                                    }));
                            }),
                            (this.handleChange = () => {
                                this.props.isDisabled || this.updateInput();
                            }),
                            (this.updateInput = (e = 0) => {
                                const u = e === De.n.BACKSPACE,
                                    t = e === De.n.DELETE,
                                    n = this.input.current,
                                    r = n.selectionStart || 0,
                                    i = n.selectionEnd || 0;
                                let a = n.value;
                                const s = Math.max(r, i),
                                    o = s;
                                (t && (a = a.substring(0, s) + a.substring(s + 1, a.length)),
                                    u && 1 === r && 1 === a.length && (a = '0'));
                                const c = Number(a.trim().replace(/\D/g, '')),
                                    l = Number.isSafeInteger(c) ? c : Number.MAX_SAFE_INTEGER,
                                    _ = this.props.currencyType ? x.Z5.getNumberFormat(l, x.B3.GOLD) : l.toString(),
                                    E = !isNaN(Number(a.replace(' ', '')));
                                n.value = _;
                                const d = new RegExp(/\d/g);
                                let m = 0;
                                for (let e = 0; e < o; e++) {
                                    const u = a[e] || '',
                                        t = _[m] || '';
                                    if (u.match(d) || u === t) {
                                        for (; u !== _[m] && m < _.length; ) m++;
                                        m++;
                                    }
                                }
                                ('' === a ? (m = 1) : E || (m = a.length),
                                    this.input.current && this.input.current.setSelectionRange(0, 0),
                                    this.setCursorPosition(m, m),
                                    this.changeValue(l),
                                    this.validationTimer && clearTimeout(this.validationTimer),
                                    (this.validationTimer = setTimeout(() => {
                                        this.getValidValue(l) !== l &&
                                            this.state.isFocused &&
                                            (this.changeValue(this.getValidValue(l)),
                                            this.setCursorPosition(0, this.formatValue(l).length));
                                    }, 1e3)));
                            }),
                            (this.handleDelete = (e) => {
                                const u = e.keyCode === De.n.BACKSPACE,
                                    t = e.keyCode === De.n.DELETE,
                                    n = e.target,
                                    r = n.selectionStart,
                                    i = n.selectionEnd,
                                    a = n.value,
                                    s = r !== i,
                                    o = new RegExp(/\D/),
                                    c = u && r ? r - 1 : r || 0;
                                if (s) return;
                                let l = c;
                                const _ = o.test(a[c]);
                                if (t && _) for (; o.test(a[l]) && l < a.length; ) l++;
                                if (u && _) for (; o.test(a[l]) && l > 0; ) l--;
                                if (l !== c || (u && _))
                                    return (e.preventDefault(), (l = l < 0 ? 0 : l), void this.setCursorPosition(l, l));
                                ((u && 1 === r && 1 === a.length) || t) &&
                                    (e.preventDefault(), this.updateInput(e.keyCode));
                            }),
                            (this.handleClickOutside = (e) => {
                                const u = document.activeElement;
                                this.state.isFocused &&
                                    u !== this.input.current &&
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
                                if (this.props.isDisabled || !this.state.isFocused) return;
                                e.preventDefault();
                                e.deltaY < 0 ? this.decrement() : this.increment();
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
                                        (e.keyCode in De.n &&
                                            e.keyCode !== De.n.BACKSPACE &&
                                            e.keyCode !== De.n.DELETE &&
                                            e.preventDefault(),
                                        e.keyCode)
                                    ) {
                                        case De.n.ARROW_UP:
                                        case De.n.NUM_PLUS:
                                        case De.n.PLUS:
                                            (this.state.activeIncrement || this.setState({ activeIncrement: !0 }),
                                                this.increment());
                                            break;
                                        case De.n.ARROW_DOWN:
                                        case De.n.NUM_MINUS:
                                        case De.n.MINUS:
                                            (this.state.activeDecrement || this.setState({ activeDecrement: !0 }),
                                                this.decrement());
                                            break;
                                        case De.n.HOME:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case De.n.END:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case De.n.ENTER:
                                            if (
                                                (e.nativeEvent.stopImmediatePropagation(),
                                                this.state.value >= this.props.maximum)
                                            ) {
                                                const e = this.formatValue(this.props.maximum).length;
                                                (this.changeValue(this.props.maximum), this.setCursorPosition(0, e));
                                            }
                                            break;
                                        case De.n.PAGE_UP:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case De.n.PAGE_DOWN:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case De.n.BACKSPACE:
                                        case De.n.DELETE:
                                            this.handleDelete(e);
                                    }
                                    this.props.onKeyDown(e);
                                }
                            }),
                            (this.handleKeyUp = (e) => {
                                if (!this.props.isDisabled)
                                    switch (e.keyCode) {
                                        case De.n.ARROW_UP:
                                        case De.n.NUM_PLUS:
                                        case De.n.PLUS:
                                            this.setState({ activeIncrement: !1 });
                                            break;
                                        case De.n.ARROW_DOWN:
                                        case De.n.NUM_MINUS:
                                        case De.n.MINUS:
                                            this.setState({ activeDecrement: !1 });
                                    }
                            }),
                            (this.allowOnlyNumbers = (e) => {
                                e.which in Qu || e.preventDefault();
                            }),
                            (this.increment = () => {
                                const e = this.props.onIncrement ? this.props.onIncrement() : this.props.stepSize,
                                    u = Math.min(this.getValidValue(this.state.value) + e, this.props.maximum);
                                this.changeValue(u);
                            }),
                            (this.decrement = () => {
                                const e = this.props.onDecrement ? this.props.onDecrement() : this.props.stepSize,
                                    u = Math.max(this.getValidValue(this.state.value) - e, this.props.minimum);
                                this.changeValue(u);
                            }),
                            (this.incrementHandleMouseDown = (e, u = !1) => {
                                this.buttonIncrementIsDisabled ||
                                    (e.persist(),
                                    this.stop(),
                                    this.setFocusOnInput(),
                                    this.state.value < this.props.maximum &&
                                        (!u && this.playClickSound(),
                                        (0 === e.button || u) &&
                                            (this.increment(),
                                            (this.timer = setTimeout(
                                                () => {
                                                    this.incrementHandleMouseDown(e, !0);
                                                },
                                                u ? 50 : 300,
                                            )),
                                            this.setState({ activeIncrement: !0 }))));
                            }),
                            (this.decrementHandleMouseDown = (e, u = !1) => {
                                this.buttonDecrementIsDisabled ||
                                    (e.persist(),
                                    this.stop(),
                                    this.setFocusOnInput(),
                                    this.state.value > this.props.minimum &&
                                        (!u && this.playClickSound(),
                                        (0 === e.button || u) &&
                                            (this.decrement(),
                                            (this.timer = setTimeout(
                                                () => {
                                                    this.decrementHandleMouseDown(e, !0);
                                                },
                                                u ? 50 : 300,
                                            )),
                                            this.setState({ activeDecrement: !0 }))));
                            }),
                            (this.playHoverSound = () => {
                                this.props.isDisabled || H('highlight');
                            }),
                            (this.playClickSound = () => {
                                this.props.isDisabled || H('yes');
                            }),
                            (this.stop = () => {
                                (this.timer && clearTimeout(this.timer), (this.timer = null));
                            }));
                    }
                    componentDidUpdate(e, u) {
                        const t = this.state,
                            n = t.value,
                            r = t.isFocused;
                        if (n !== u.value && r) {
                            const e = this.formattedValue.length,
                                u = this.input.current && this.input.current.selectionStart,
                                t = this.input.current && this.input.current.selectionEnd,
                                n = u === t ? e : u || 0;
                            0 === u && t === e
                                ? this.input.current && this.input.current.setSelectionRange(e, e)
                                : this.input.current && this.input.current.setSelectionRange(n, e);
                        }
                    }
                    componentWillReceiveProps({ value: e, isFocused: u }) {
                        (this.setState({ value: e }),
                            u !== this.props.isFocused &&
                                (this.setState({ isFocused: u }),
                                u
                                    ? (this.setFocusOnInput(), this.setCursorPosition(0, this.formattedValue.length))
                                    : this.blurInput()));
                    }
                    get formattedValue() {
                        return this.props.currencyType
                            ? x.Z5.getNumberFormat(this.state.value, x.B3.GOLD)
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
                            u = e.isDisabled,
                            t = e.size,
                            n = e.currencyType,
                            i = V()(
                                Ju.base,
                                Ju[`base__${t}`],
                                n && Ju[`base__withCurrency-${t}`],
                                u && Ju.base__isDisabled,
                                this.state.isFocused && Ju.base__isFocus,
                            ),
                            a = V()(
                                Ju.buttonIncrement,
                                Ju[`buttonIncrement__${t}`],
                                this.buttonIncrementIsDisabled && Ju.buttonIncrement__isDisabled,
                                this.state.activeIncrement &&
                                    !this.buttonIncrementIsDisabled &&
                                    Ju[`buttonIncrement__isActive-${this.props.size}`],
                            ),
                            s = V()(
                                Ju.buttonDecrement,
                                Ju[`buttonDecrement__${t}`],
                                this.buttonDecrementIsDisabled && Ju.buttonDecrement__isDisabled,
                                this.state.activeDecrement &&
                                    !this.buttonDecrementIsDisabled &&
                                    Ju[`buttonDecrement__isActive-${this.props.size}`],
                            ),
                            o = V()(
                                Ju.input,
                                u && Ju.input__disabled,
                                n && Ju.input__withCurrency,
                                n && Ju[`input__${n}-${t}`],
                                n && Ju[`input__${n}`],
                                !1 === this.props.isValid && Ju.input__error,
                                n && u && Ju[`input__${n}-disabled`],
                            ),
                            c = V()(Ju.currencyIcon, n && Ju[`currencyIcon__${n}-${t}`]),
                            l = V()(Ju.currency, n && Ju[`currency__${n}`], n && Ju[`currency__${n}-${t}`]);
                        return r().createElement(
                            'div',
                            {
                                className: i,
                                ref: this.numericalStepper,
                                style: ((_ = this.props.width), _ ? { width: `${_}rem` } : {}),
                            },
                            r().createElement(
                                'div',
                                { className: Ju.inputContainer },
                                n &&
                                    r().createElement(
                                        'div',
                                        { className: l },
                                        r().createElement('span', { className: Ju.dummyValue }, this.formattedValue),
                                        r().createElement('span', { className: c }),
                                    ),
                                r().createElement('input', {
                                    ref: this.input,
                                    className: o,
                                    type: 'text',
                                    value: this.formattedValue,
                                    disabled: u,
                                    onWheel: this.handleWheel,
                                    onChange: this.handleChange,
                                    onKeyPress: this.allowOnlyNumbers,
                                    onKeyDown: this.handleKeyDown,
                                    onKeyUp: this.handleKeyUp,
                                    onBlur: this.handleBlur,
                                    onFocus: this.setFocusOnInput,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: Ju.control },
                                r().createElement('div', {
                                    className: a,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.incrementHandleMouseEnter,
                                    onMouseDown: this.incrementHandleMouseDown,
                                }),
                                r().createElement('div', {
                                    className: s,
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
                et.defaultProps = {
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
                const ut = 'CurrencyStepper_base_8f',
                    tt = 'CurrencyStepper_label_9b',
                    nt = 'CurrencyStepper_limit_7c',
                    rt = 'CurrencyStepper_limitIcon_bf',
                    it = 'CurrencyStepper_limit__exceeded_5d',
                    at = 'CurrencyStepper_limit__right_08',
                    st = 'CurrencyStepper_limitWrapper__enter_90',
                    ot = 'CurrencyStepper_limitWrapper__exit_15',
                    ct = 'CurrencyStepper_restriction_67',
                    lt = 'CurrencyStepper_restrictionIcon_6f',
                    _t = 'CurrencyStepper_restrictionIconGlow_02',
                    Et = ['label', 'limit', 'limitPosition', 'onLimitClick', 'onChange'];
                function dt() {
                    return (
                        (dt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        dt.apply(this, arguments)
                    );
                }
                const mt = R.strings.personal_exchange_rates.common,
                    At = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeLimitTooltip('resId') },
                    Ft = { enter: st, exit: ot },
                    Dt = (e) => {
                        let u = e.label,
                            t = e.limit,
                            i = e.limitPosition,
                            a = e.onLimitClick,
                            s = e.onChange,
                            o = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Et);
                        const c = t && o.value > t,
                            l = (0, n.useState)(!1)[1],
                            _ = Ku(
                                (e) => {
                                    (s(e), Hu(() => l((e) => !e)));
                                },
                                [s],
                                1e3,
                            );
                        return r().createElement(
                            'div',
                            { className: ut },
                            u && r().createElement('div', { className: tt }, u),
                            r().createElement(et, dt({ size: 'large', width: 210, onChange: _ }, o)),
                            t &&
                                !a &&
                                r().createElement(
                                    qu.Z,
                                    { component: r().Fragment },
                                    r().createElement(
                                        Zu.Z,
                                        { key: String(c), timeout: 250, classNames: Ft },
                                        r().createElement(
                                            pu,
                                            { tooltipArgs: At, className: V()(nt, 'right' === i && at, c && it) },
                                            r().createElement(
                                                r().Fragment,
                                                null,
                                                c
                                                    ? r().createElement(We, { text: mt.limitExceeded() })
                                                    : r().createElement(We, {
                                                          text: mt.limit(),
                                                          binding: { value: Yu(t) },
                                                      }),
                                                r().createElement('div', { className: rt }),
                                            ),
                                        ),
                                    ),
                                ),
                            a &&
                                r().createElement(
                                    'div',
                                    { className: V()(nt, 'right' === i && at) },
                                    r().createElement(X, {
                                        caption: mt.limitRestrictions(),
                                        type: 'close',
                                        side: 'left',
                                        onClick: a,
                                        classNames: { base: ct, icon: lt, glow: _t },
                                    }),
                                ),
                        );
                    },
                    Ct = 'ExceededMessage_wrapper_0d',
                    pt = 'ExceededMessage_base_1b',
                    ht = 'ExceededMessage_limitIcon_46',
                    Bt = 'ExceededMessage_hidden_4b',
                    gt = 'ExceededMessage_limitWrapper__enter_0a',
                    vt = 'ExceededMessage_limitWrapper__exit_bc',
                    bt = 'ExceededMessage_restriction_33',
                    ft = 'ExceededMessage_restrictionIcon_f1',
                    yt = 'ExceededMessage_restrictionIconGlow_04',
                    wt = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeLimitTooltip('resId') },
                    xt = { enter: gt, exit: vt },
                    St = ({ className: e, exceeded: u, amountOfPersonalDiscounts: t, onClick: n }) =>
                        r().createElement(
                            qu.Z,
                            { className: V()(e, Ct) },
                            r().createElement(
                                Zu.Z,
                                { key: String(`${u}${t > 5}`), timeout: 350, classNames: xt },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    u
                                        ? t > 5
                                            ? r().createElement(
                                                  'div',
                                                  { className: V()(pt) },
                                                  r().createElement(
                                                      'div',
                                                      null,
                                                      R.strings.personal_exchange_rates.common.limitOverExceeded(),
                                                  ),
                                                  r().createElement(X, {
                                                      caption:
                                                          R.strings.personal_exchange_rates.common.limitRestrictions(),
                                                      type: 'close',
                                                      side: 'right',
                                                      onClick: n,
                                                      classNames: { base: bt, icon: ft, glow: yt },
                                                  }),
                                              )
                                            : r().createElement(
                                                  pu,
                                                  { tooltipArgs: wt, className: V()(pt) },
                                                  r().createElement(
                                                      r().Fragment,
                                                      null,
                                                      r().createElement(
                                                          'div',
                                                          null,
                                                          R.strings.personal_exchange_rates.common.limitExceeded(),
                                                      ),
                                                      r().createElement('div', { className: ht }),
                                                  ),
                                              )
                                        : r().createElement(
                                              'div',
                                              { className: V()(pt, Bt) },
                                              r().createElement(
                                                  'div',
                                                  null,
                                                  R.strings.personal_exchange_rates.common.limitExceeded(),
                                              ),
                                          ),
                                ),
                            ),
                        ),
                    Nt = 'ExchangePanel_base_bd',
                    kt = 'ExchangePanel_arrow_62',
                    Pt = 'ExchangePanel_arrow__small_30',
                    It = 'ExchangePanel_excluded_02';
                function Tt() {
                    return !1;
                }
                console.log;
                var Ot = t(9174);
                function Mt(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Rt(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Rt(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Rt(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const Lt = (e) => (0 === e ? window : window.subViews.get(e));
                var Vt = t(3946);
                const Ht = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: a, children: s, mocks: c }) {
                                const l = (0, n.useRef)([]),
                                    _ = (t, n, r) => {
                                        var i;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Lt,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function i(e, u = 0) {
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
                                                const a = (e) => {
                                                    const r = t(u),
                                                        i = n.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (t, i) => {
                                                        const s = 'string' == typeof i ? `${n}.${i}` : n,
                                                            c = o.O.view.addModelObserver(s, u, !0);
                                                        return (r.set(c, t), e && t(a(i)), c);
                                                    },
                                                    readByPath: a,
                                                    createCallback: (e, u) => {
                                                        const t = a(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = a(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = Mt(r.keys()); !(e = t()).done; ) i(e.value, u);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(n),
                                            s =
                                                'real' === t
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (i = null == r ? void 0 : r.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(e)) : s.readByPath(e),
                                            _ = (e) => l.current.push(e),
                                            E = e({
                                                mode: t,
                                                readByPath: c,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : c(e),
                                                            r = Ot.LO.box(n, { equals: Tt });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, Ot.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : c(e),
                                                            r = Ot.LO.box(n, { equals: Tt });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, Ot.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = c(u);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, u) => ((e[u] = Ot.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, Ot.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                i = Object.entries(r),
                                                                a = i.reduce(
                                                                    (e, [u, t]) => ((e[t] = Ot.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, Ot.aD)((e) => {
                                                                            i.forEach(([u, t]) => {
                                                                                a[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: _,
                                            }),
                                            d = { mode: t, model: E, externalModel: s, cleanup: _ };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && r ? r.controls(d) : u(d),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    E = (0, n.useRef)(!1),
                                    d = (0, n.useState)(i),
                                    m = d[0],
                                    A = d[1],
                                    F = (0, n.useState)(() => _(i, a, c)),
                                    D = F[0],
                                    C = F[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        E.current ? C(_(m, a, c)) : (E.current = !0);
                                    }, [c, m, a]),
                                    (0, n.useEffect)(() => {
                                        A(i);
                                    }, [i]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (D.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [D],
                                    ),
                                    r().createElement(t.Provider, { value: D }, s)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e, externalModel: u, readByPath: t }) => {
                            function n() {
                                return ((e) => {
                                    if (e.isDiscountAvailable)
                                        return {
                                            format: e.showFormat,
                                            exchangeRate: e.exchangeRate,
                                            type: e.discountType,
                                            availableAmount: {
                                                gold: e.amountOfDiscount,
                                                resource:
                                                    (e.amountOfDiscount / e.exchangeRate.goldRateValue) *
                                                    e.exchangeRate.resourceRateValue,
                                            },
                                            endDate: new Date(1e3 * e.discountLifetime),
                                            percent: e.discountPercent,
                                        };
                                })(t('exchangePanel.exchangeRate.discount'));
                            }
                            const r = Object.assign(
                                {
                                    discount: Ot.LO.box(n()),
                                    exchangeRate: e.object('exchangePanel.exchangeRate'),
                                    fromItem: e.object('exchangePanel.fromItem'),
                                    toItem: e.object('exchangePanel.toItem'),
                                },
                                e.primitives({ golds: 'goldBalance', credits: 'creditBalance' }),
                            );
                            u.subscribe(
                                (0, Ot.aD)(() => r.discount.set(n())),
                                'exchangePanel.exchangeRate.discount',
                            );
                            const i = (0, Vt.Om)(() => r.exchangeRate.get().maxGoldAmountForExchange),
                                a = (0, Vt.Om)(() => {
                                    const e = r.discount.get();
                                    return (
                                        !(!e || 'limited' !== e.type) && e.availableAmount.gold < r.fromItem.get().value
                                    );
                                });
                            return Object.assign({}, r, { computes: { maximumGold: i, exceeded: a } });
                        },
                        ({ externalModel: e, model: u }) => ({
                            openAllDiscounts: e.createCallbackNoArgs(
                                'exchangePanel.exchangeRate.onOpenAllDiscountsWindow',
                            ),
                            setGold: e.createCallback(
                                (e) => ({ gold: Math.min(e, u.computes.maximumGold()) }),
                                'exchangePanel.exchangeRate.onSelectedValueUpdated',
                            ),
                            setCredits: e.createCallback(
                                (e) => ({ currency: Math.min(e, u.exchangeRate.get().maxResourceAmountForExchange) }),
                                'exchangePanel.exchangeRate.onSelectedValueUpdated',
                            ),
                        }),
                    ),
                    Ut = Ht[0],
                    Wt = Ht[1],
                    $t = (0, Gu.Pi)(({ setGoldToChange: e, isSmall: u = !1 }) => {
                        Uu(
                            () => (
                                Hu(() => {
                                    (zu(!1),
                                        Hu(() => {
                                            zu(!0);
                                        }));
                                }),
                                document.body.addEventListener('keydown', ju),
                                () => {
                                    document.body.removeEventListener('keydown', ju);
                                }
                            ),
                        );
                        const t = (0, n.useState)(null),
                            a = t[0],
                            s = t[1],
                            o = Wt(),
                            c = o.model,
                            l = o.controls,
                            _ = c.fromItem.get().value,
                            E = c.computes.maximumGold(),
                            d = me(E),
                            m = 0 === E,
                            A = u ? 'small' : 'medium';
                        return (
                            r().useEffect(() => {
                                d && d !== E && l.setGold(_);
                            }, [E, _]),
                            r().useEffect(() => {
                                e(_);
                            }, [e, _]),
                            Uu(() => {
                                s(document.querySelector('#dialog-template-footer'));
                            }),
                            r().createElement(
                                'div',
                                { className: Nt },
                                r().createElement(Dt, {
                                    value: c.fromItem.get().value,
                                    maximum: E,
                                    currencyType: pe.gold,
                                    onChange: l.setGold,
                                    width: 170,
                                    size: A,
                                    onValidValue: (e) => e,
                                    onIncrement: () => (l.setGold(c.fromItem.get().value + 1), 0),
                                    onDecrement: () => (l.setGold(c.fromItem.get().value - 1), 0),
                                    isDisabled: m,
                                    isFocused: !1,
                                }),
                                r().createElement('div', { className: V()(kt, u && Pt) }),
                                r().createElement(Dt, {
                                    value: c.toItem.get().value,
                                    maximum: c.exchangeRate.get().maxResourceAmountForExchange,
                                    currencyType: pe.credits,
                                    onChange: l.setCredits,
                                    width: 170,
                                    limitPosition: 'right',
                                    size: A,
                                    onValidValue: (e) => e,
                                    onIncrement: () => (l.setGold(c.fromItem.get().value + 1), 0),
                                    onDecrement: () => (l.setGold(c.fromItem.get().value - 1), 0),
                                    isDisabled: m,
                                    isFocused: !0,
                                }),
                                a &&
                                    (0, i.createPortal)(
                                        r().createElement(St, {
                                            className: It,
                                            exceeded: c.computes.exceeded(),
                                            amountOfPersonalDiscounts: c.exchangeRate.get().amountOfPersonalDiscounts,
                                            onClick: l.openAllDiscounts,
                                        }),
                                        a,
                                    ),
                            )
                        );
                    }),
                    jt = 'DialogFooter_base_3b',
                    zt = 'DialogFooter_totalPrice_c5',
                    Gt = 'DialogFooter_label_94',
                    Xt = ({ totalPrice: e, bottomContentType: u, goldToChange: t, setGoldToChange: i }) => {
                        const a = (0, n.useContext)(F);
                        return r().createElement(
                            'div',
                            { className: jt },
                            u === g
                                ? r().createElement(
                                      Ut,
                                      null,
                                      r().createElement($t, {
                                          goldToChange: t,
                                          setGoldToChange: i,
                                          isSmall: a.small || a.extraSmall,
                                      }),
                                  )
                                : r().createElement(
                                      'div',
                                      { className: zt },
                                      r().createElement(
                                          'div',
                                          { className: Gt },
                                          R.strings.veh_post_progression.selectSlotSpecDialog.totalPrice(),
                                      ),
                                      r().createElement(mu, { price: e, size: Ce.big }),
                                  ),
                        );
                    },
                    Kt = { name: pe.credits, isEnough: !0, value: 0 },
                    qt = R.strings.veh_post_progression.selectSlotSpecDialog,
                    Zt = () => {
                        const e = M('model'),
                            u = e.bottomContentType,
                            t = e.mainContent,
                            i = e.exchangePanel,
                            a = e.exchangeState,
                            s = e.lacksMoney,
                            o = M('model.changePrice.price'),
                            c = o[0] && o[0].value,
                            l = (0, n.useRef)(t.selectedSpecIdx),
                            _ = (0, n.useState)(u === B ? 0 : t.selectedSpecIdx),
                            E = _[0],
                            d = _[1],
                            m = (0, n.useState)(i.fromItem.value),
                            A = m[0],
                            D = m[1],
                            C = l.current !== E,
                            p = (0, n.useContext)(F),
                            h = p.small || p.extraSmall;
                        ((0, n.useEffect)(() => {
                            t.selectedSpecIdx = E;
                        }, [E, t]),
                            (0, n.useEffect)(() => {
                                D(i.fromItem.value);
                            }, [i.fromItem.value]));
                        const y = (0, n.useCallback)((e) => {
                                d(e);
                            }, []),
                            w = h ? f.small : f.medium,
                            x = (0, n.useMemo)(() => {
                                const e = s.value > i.toItem.value || a === v;
                                return { size: w, type: u === g ? b.main : b.primary, disabled: !C || (u === g && e) };
                            }, [w, u, C, s.value, i.toItem.value, a]),
                            S = (0, n.useMemo)(() => ({ size: w, type: b.secondary }), [w]),
                            N = u === g && (C || a === v),
                            k = r().createElement(Vu, {
                                bottomContentType: u,
                                changePrice: c,
                                exchangeState: a,
                                lacksMoney: s,
                                currentlySelectedSpecIdx: l.current,
                                activeCardIdx: E,
                                onActiveCardChange: y,
                            }),
                            P =
                                u !== B &&
                                a !== v &&
                                r().createElement(Xt, {
                                    totalPrice: C ? c : Kt,
                                    bottomContentType: u,
                                    goldToChange: A,
                                    setGoldToChange: D,
                                });
                        return r().createElement(He, {
                            parentId: 'select-slot-spec',
                            buttonAccept: x,
                            buttonAcceptText: qt.acceptButton.$dyn(u),
                            buttonCancel: S,
                            buttonCancelText: qt.cancelButton(),
                            disabledAcceptTooltipText: N ? R.strings.tank_setup.dealPanel.tooltip.notEnough() : null,
                            showPayInfo: !0,
                            content: k,
                            footer: P,
                        });
                    };
                engine.whenReady.then(() => {
                    a().render(
                        r().createElement(h, null, r().createElement(Zt, null)),
                        document.getElementById('root'),
                    );
                });
            },
            7363: (e) => {
                'use strict';
                e.exports = React;
            },
            1533: (e) => {
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
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], i = !0, a = 0; a < u.length; a++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[a]))
                            ? u.splice(a--, 1)
                            : ((i = !1), n < r && (r = n));
                    if (i) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, n];
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
        (__webpack_require__.j = 454),
        (() => {
            var e = { 454: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [i, a, s] = t,
                        o = 0;
                    if (i.some((u) => 0 !== e[u])) {
                        for (n in a) __webpack_require__.o(a, n) && (__webpack_require__.m[n] = a[n]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (u && u(t); o < i.length; o++)
                        ((r = i[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [127], () => __webpack_require__(558));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
