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
                t.d(u, { O: () => a });
                var n = t(5959),
                    r = t(7698),
                    i = t(514);
                const a = { view: t(7641), client: n, sound: i.ZP, intl: r.N };
            },
            7698: (e, u, t) => {
                'use strict';
                t.d(u, { N: () => n });
                const n = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
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
                        displayStatusIs: () => S,
                        enableFullScreenModeSupported: () => x,
                        events: () => a.U,
                        extraSize: () => T,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => m,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => y,
                        getExternalPaddingsRem: () => P,
                        getFontNames: () => f,
                        getScale: () => F,
                        getSize: () => A,
                        getViewGlobalPosition: () => D,
                        initExternalPaddings: () => R,
                        isEventHandled: () => v,
                        isFocused: () => g,
                        pxToRem: () => p,
                        remToPx: () => B,
                        resize: () => d,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => h,
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
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function D(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
                }
                function m() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function y() {
                    return viewEnv.getShowingStatus();
                }
                const f = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    w = n.cg;
                function P() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const S = Object.keys(i.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === i.W[u]), e),
                        {},
                    ),
                    T = {
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
                function x() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function R(e) {
                    function u() {
                        const u = viewEnv.getExternalPaddingsRem(),
                            t = u.top,
                            n = u.right,
                            r = u.bottom,
                            i = u.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (u(), engine.on('self.onPaddingsUpdated', () => u()));
                }
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
                t.d(u, { B3: () => o, Z5: () => a.Z5, B0: () => s, ry: () => F });
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
                    A = t(3138);
                const d = ['args'];
                function D(e, u, t, n, r, i, a) {
                    try {
                        var s = e[i](a),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(n, r);
                }
                const m = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    F = (function () {
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
                                            D(i, n, r, a, s, 'next', e);
                                        }
                                        function s(e) {
                                            D(i, n, r, a, s, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    p = (e, u) => {
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
                                })(u, d);
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
                    B = () => p(s.CLOSE),
                    C = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var g = t(7572);
                const h = r.instance,
                    v = {
                        DataTracker: i.Z,
                        ViewModel: g.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: c,
                        TimeFormatType: l,
                        DateFormatType: _,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (e) => p(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => p(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            p(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), i) => {
                            const a = A.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                c = o.x,
                                l = o.y,
                                _ = o.width,
                                E = o.height,
                                d = {
                                    x: A.O.view.pxToRem(c) + a.x,
                                    y: A.O.view.pxToRem(l) + a.y,
                                    width: A.O.view.pxToRem(_),
                                    height: A.O.view.pxToRem(E),
                                };
                            p(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: m(d),
                                on: !0,
                                args: i,
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
                            C(e, B);
                        },
                        handleViewEvent: p,
                        onBindingsReady: F,
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
                        ClickOutsideManager: h,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Z5: () => n, cy: () => r });
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
                    };
            },
            2647: (e, u, t) => {
                'use strict';
                var n = t(7363),
                    r = t.n(n),
                    i = t(1533),
                    a = t.n(i);
                let s;
                !(function (e) {
                    ((e.DeconstructFromStorage = 'deconstructFromStorage'),
                        (e.DeconstructFromSlots = 'deconstructFromSlots'));
                })(s || (s = {}));
                var o = t(3138),
                    c = t(5521),
                    l = t(9916);
                const _ = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function E(e = c.n.NONE, u = _, t = !1, r = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== c.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!r && o.O.view.isEventHandled()) return;
                                (o.O.view.setEventHandled(), u(n), t && n.stopPropagation());
                            }
                        }
                    }, [u, e, t, r]);
                }
                var A = t(3403),
                    d = t(6483),
                    D = t.n(d);
                const m = {
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
                    F = [
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
                function p() {
                    return (
                        (p =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        p.apply(this, arguments)
                    );
                }
                const B = (e) => {
                    let u = e.caption,
                        t = e.onClick,
                        i = e.goto,
                        a = e.classNames,
                        s = e.onMouseEnter,
                        c = e.onMouseLeave,
                        l = e.onMouseDown,
                        _ = e.onMouseUp,
                        E = e.side,
                        A = void 0 === E ? 'left' : E,
                        d = e.type,
                        B = void 0 === d ? 'back' : d,
                        C = e.soundHover,
                        g = void 0 === C ? 'highlight' : C,
                        h = e.soundClick,
                        v = void 0 === h ? 'play' : h,
                        b = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, F);
                    const y = (0, n.useCallback)(
                            (e) => {
                                (null == s || s(e), o.O.sound.play.sound(g));
                            },
                            [s, g],
                        ),
                        f = (0, n.useCallback)(
                            (e) => {
                                null == c || c(e);
                            },
                            [c],
                        ),
                        w = (0, n.useCallback)(
                            (e) => {
                                (null == l || l(e), o.O.sound.play.sound(v));
                            },
                            [l, v],
                        ),
                        P = (0, n.useCallback)(
                            (e) => {
                                null == _ || _(e);
                            },
                            [_],
                        );
                    return r().createElement(
                        'div',
                        p(
                            {
                                className: D()(m.base, m[`base__${B}`], m[`base__${A}`], null == a ? void 0 : a.base),
                                onMouseEnter: y,
                                onMouseLeave: f,
                                onMouseDown: w,
                                onMouseUp: P,
                                onClick: t,
                            },
                            b,
                        ),
                        'info' !== B && r().createElement('div', { className: m.shine }),
                        r().createElement(
                            'div',
                            { className: D()(m.icon, m[`icon__${B}`], m[`icon__${A}`], null == a ? void 0 : a.icon) },
                            r().createElement('div', { className: D()(m.glow, null == a ? void 0 : a.glow) }),
                        ),
                        r().createElement(
                            'div',
                            { className: D()(m.caption, m[`caption__${B}`], null == a ? void 0 : a.caption) },
                            u,
                        ),
                        i && r().createElement('div', { className: D()(m.goto, null == a ? void 0 : a.goto) }, i),
                    );
                };
                let C;
                !(function (e) {
                    ((e.responsiveHeader = 'responsiveHeader'),
                        (e.responsiveClosePosition = 'responsiveClosePosition'),
                        (e.disableResponsiveContentPosition = 'disableResponsiveContentPosition'));
                })(C || (C = {}));
                const g = (e, u, t) =>
                        u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                            ? (u.extraLargeHeight && t.extraLarge) ||
                              (u.largeHeight && t.large) ||
                              (u.mediumHeight && t.medium) ||
                              (u.smallHeight && t.small) ||
                              (u.extraSmallHeight && t.extraSmall)
                                ? e
                                : null
                            : e,
                    h = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var v;
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
                })(v || (v = {}));
                const b = (function (e = o.O.client.getSize('rem')) {
                        const u = e.width,
                            t = e.height;
                        return Object.assign(
                            { width: u, height: t },
                            (function (e, u, t) {
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
                            })(u, t, h),
                        );
                    })(),
                    y = (0, n.createContext)(b),
                    f = ['children'];
                (0, n.memo)((e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, f);
                    const r = (0, n.useContext)(y),
                        i = r.extraLarge,
                        a = r.large,
                        s = r.medium,
                        o = r.small,
                        c = r.extraSmall,
                        l = r.extraLargeWidth,
                        _ = r.largeWidth,
                        E = r.mediumWidth,
                        A = r.smallWidth,
                        d = r.extraSmallWidth,
                        D = r.extraLargeHeight,
                        m = r.largeHeight,
                        F = r.mediumHeight,
                        p = r.smallHeight,
                        B = r.extraSmallHeight,
                        C = { extraLarge: D, large: m, medium: F, small: p, extraSmall: B };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return u;
                        if (t.large && a) return u;
                        if (t.medium && s) return u;
                        if (t.small && o) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && l) return g(u, t, C);
                        if (t.largeWidth && _) return g(u, t, C);
                        if (t.mediumWidth && E) return g(u, t, C);
                        if (t.smallWidth && A) return g(u, t, C);
                        if (t.extraSmallWidth && d) return g(u, t, C);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return u;
                            if (t.largeHeight && m) return u;
                            if (t.mediumHeight && F) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && B) return u;
                        }
                    }
                    return null;
                });
                var w = t(1281);
                let P;
                function S(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(P || (P = {}));
                const T = (e) => e.replace(/&nbsp;/g, ' '),
                    N = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    x = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    O = (e, u, t = P.left) => e.split(u).reduce(t === P.left ? N : x, []),
                    k = (() => {
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
                    I = ['zh_cn', 'zh_sg', 'zh_tw'],
                    M = (e, u = P.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (I.includes(t)) return k(e);
                        if ('ja' === t) {
                            return (0, w.D4)()
                                .parse(e)
                                .map((e) => T(e));
                        }
                        return ((e, u = P.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = T(e);
                            return (O(r, /( )/, u).forEach((e) => (t = t.concat(O(e, n, P.left)))), t);
                        })(e, u);
                    };
                const L = {
                        base: 'DefaultDialogTemplate_base_d2',
                        topRight: 'DefaultDialogTemplate_topRight_eb',
                        center: 'DefaultDialogTemplate_center_b4',
                        center__shown: 'DefaultDialogTemplate_center__shown_e1',
                        windowIn: 'DefaultDialogTemplate_windowIn_3b',
                        center__withIcon: 'DefaultDialogTemplate_center__withIcon_f9',
                        base__extraSmallHeight: 'DefaultDialogTemplate_base__extraSmallHeight_f5',
                        center__responsive: 'DefaultDialogTemplate_center__responsive_21',
                        base__smallHeight: 'DefaultDialogTemplate_base__smallHeight_52',
                        icon: 'DefaultDialogTemplate_icon_36',
                        icon__responsive: 'DefaultDialogTemplate_icon__responsive_e0',
                        title: 'DefaultDialogTemplate_title_c6',
                        title__responsive: 'DefaultDialogTemplate_title__responsive_6e',
                        content: 'DefaultDialogTemplate_content_22',
                        footer: 'DefaultDialogTemplate_footer_4e',
                        buttons: 'DefaultDialogTemplate_buttons_f7',
                        divider: 'DefaultDialogTemplate_divider_d5',
                        divider__noContent: 'DefaultDialogTemplate_divider__noContent_3f',
                        divider__noFooter: 'DefaultDialogTemplate_divider__noFooter_10',
                        closeBtn: 'DefaultDialogTemplate_closeBtn_5e',
                        closeBtn__responsive: 'DefaultDialogTemplate_closeBtn__responsive_49',
                    },
                    U = (0, n.memo)(
                        ({
                            isShown: e = !0,
                            classMix: u,
                            onClose: t,
                            icon: i,
                            topRight: a,
                            title: s,
                            content: o,
                            buttons: c,
                            footer: l,
                            displayFlags: _,
                            classNames: E,
                        }) => {
                            const A = ((e, u) => Object.keys(u).reduce((u, t) => ((u[t] = e.includes(t)), u), {}))(
                                    _,
                                    C,
                                ),
                                d = A.responsiveHeader,
                                m = A.responsiveClosePosition,
                                F = A.disableResponsiveContentPosition,
                                p = (function (e, u, t) {
                                    const r = (0, n.useContext)(y);
                                    let i = Object.entries(r).filter(([e, u]) => !0 === u && e in v);
                                    return (
                                        t && (i = i.filter((e) => t.includes(e[0]))),
                                        e.reduce((e, t) => {
                                            const n = i.map((e) =>
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
                                            return ((e[t] = D()(u[t], ...n)), e);
                                        }, {})
                                    );
                                })(['base'], L),
                                g = (0, n.useCallback)(() => {
                                    t && t();
                                }, [t]),
                                h = D()(p.base, u),
                                b = D()(
                                    L.center,
                                    i && L.center__withIcon,
                                    e && L.center__shown,
                                    !F && L.center__responsive,
                                    null == E ? void 0 : E.center,
                                ),
                                f = D()(L.icon, d && L.icon__responsive, null == E ? void 0 : E.icon),
                                w = D()(L.title, d && L.title__responsive, null == E ? void 0 : E.title),
                                P = D()(L.closeBtn, m && L.closeBtn__responsive),
                                S = D()(
                                    L.divider,
                                    !o && L.divider__noContent,
                                    !l && L.divider__noFooter,
                                    null == E ? void 0 : E.divider,
                                );
                            return r().createElement(
                                'div',
                                { className: h },
                                r().createElement(
                                    'div',
                                    { className: L.topRight },
                                    a,
                                    r().createElement(
                                        'div',
                                        { className: P },
                                        r().createElement(B, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: g,
                                        }),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: b },
                                    i && r().createElement('div', { className: f }, i),
                                    s && r().createElement('div', { className: w }, s),
                                    o && r().createElement('div', { className: L.content }, o),
                                    r().createElement('div', { className: S }),
                                    l && r().createElement('div', { className: L.footer }, l),
                                    c && r().createElement('div', { className: L.buttons }, c),
                                ),
                            );
                        },
                    ),
                    G = 'Alert_alert_66',
                    H = 'Alert_icon_ea',
                    X = 'Alert_alertText_14',
                    V = ({ alertText: e, className: u }) =>
                        r().createElement(
                            'div',
                            { className: D()(G, u) },
                            r().createElement('i', { className: H }),
                            r().createElement('span', { className: X }, e),
                        );
                let W, q, z;
                (!(function (e) {
                    ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(W || (W = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(q || (q = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(z || (z = {})));
                const j = ({ value: e, format: u = 'integral' }) => {
                    const t = (function (e) {
                            return 'gold' === e ? l.B3.GOLD : l.B3.INTEGRAL;
                        })(u),
                        n = l.Z5.getNumberFormat(e, t);
                    return void 0 !== e && void 0 !== n ? n : null;
                };
                function Y(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                const $ = {
                        base: 'CurrentBalanceCurrencies_base_50',
                        currencyBlock: 'CurrentBalanceCurrencies_currencyBlock_af',
                        currencyContainer: 'CurrentBalanceCurrencies_currencyContainer_9a',
                        currency: 'CurrentBalanceCurrencies_currency_44',
                        currency__credits: 'CurrentBalanceCurrencies_currency__credits_e0',
                        currency__gold: 'CurrentBalanceCurrencies_currency__gold_75',
                        currency__crystal: 'CurrentBalanceCurrencies_currency__crystal_a8',
                        currency__freeXP: 'CurrentBalanceCurrencies_currency__freeXP_5b',
                        currency__equipCoin: 'CurrentBalanceCurrencies_currency__equipCoin_13',
                        balance: 'CurrentBalanceCurrencies_balance_81',
                        balance__credits: 'CurrentBalanceCurrencies_balance__credits_37',
                        balance__gold: 'CurrentBalanceCurrencies_balance__gold_2f',
                        line: 'CurrentBalanceCurrencies_line_a6',
                    },
                    K = ({ balance: e, className: u, classNames: t }) =>
                        r().createElement(
                            'div',
                            { className: D()($.base, u) },
                            r().createElement(
                                'div',
                                { className: D()($.currencyBlock, null == t ? void 0 : t.currencyBlock) },
                                Y(e, (e, u) =>
                                    r().createElement(
                                        'div',
                                        {
                                            key: u,
                                            className: D()(
                                                $.currencyContainer,
                                                null == t ? void 0 : t.currencyContainer,
                                            ),
                                        },
                                        r().createElement('div', {
                                            className: D()(
                                                $.currency,
                                                $[`currency__${e.currencyType}`],
                                                null == t ? void 0 : t.currency,
                                            ),
                                        }),
                                        r().createElement(
                                            'div',
                                            {
                                                className: D()(
                                                    $.balance,
                                                    $[`balance__${e.currencyType}`],
                                                    null == t ? void 0 : t.balance,
                                                ),
                                            },
                                            r().createElement(j, {
                                                value: e.currencyValue,
                                                format: e.currencyType === q.gold ? 'gold' : 'integral',
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                            r().createElement('div', { className: $.line }),
                        );
                let Z, Q, J, ee, ue, te, ne, re;
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
                })(Z || (Z = {})),
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
                    })(Q || (Q = {})),
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
                    })(J || (J = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(ee || (ee = {})),
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
                    })(ue || (ue = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(te || (te = {})),
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
                    })(ne || (ne = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(re || (re = {})));
                const ie = [Z.Attachment];
                function ae() {
                    return !1;
                }
                console.log;
                var se = t(9174);
                function oe(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return ce(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return ce(e, u);
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
                function ce(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const le = (e) => (0 === e ? window : window.subViews.get(e));
                const _e = (e, u) =>
                    Object.keys(e).length === Object.keys(u).length &&
                    Object.keys(e).every((t) => Object.prototype.hasOwnProperty.call(u, t) && e[t] === u[t]);
                var Ee = t(3946);
                const Ae = (e) => {
                        const u = R.images.gui.maps.shop.artefacts.c_180x135.$dyn(e);
                        if ('string' == typeof u) return u;
                        throw new Error(`Resource  ${e} is invalid `);
                    },
                    de = (e, u) => (e ? `${u}_${e}` : u),
                    De = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: a, children: s, mocks: c }) {
                                const l = (0, n.useRef)([]),
                                    _ = (t, n, r) => {
                                        var i;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = le,
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
                                                        for (var e, t = oe(r.keys()); !(e = t()).done; ) i(e.value, u);
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
                                                    dict: (e) => {
                                                        const u = c(e),
                                                            n = se.LO.box(u, { equals: ae });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, se.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    array: (e, u) => {
                                                        const n = null != u ? u : c(e),
                                                            r = se.LO.box(n, { equals: ae });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, se.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : c(e),
                                                            r = se.LO.box(n, { equals: ae });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, se.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = c(u);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, u) => ((e[u] = se.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, se.aD)((u) => {
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
                                                                    (e, [u, t]) => ((e[t] = se.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, se.aD)((e) => {
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
                                            A = { mode: t, model: E, externalModel: s, cleanup: _ };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && r ? r.controls(A) : u(A),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    E = (0, n.useRef)(!1),
                                    A = (0, n.useState)(i),
                                    d = A[0],
                                    D = A[1],
                                    m = (0, n.useState)(() => _(i, a, c)),
                                    F = m[0],
                                    p = m[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        E.current ? p(_(d, a, c)) : (E.current = !0);
                                    }, [c, d, a]),
                                    (0, n.useEffect)(() => {
                                        D(i);
                                    }, [i]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    r().createElement(t.Provider, { value: F }, s)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    detailsDevice: e.object('detailsDevice'),
                                    detailsPriceBlock: e.object('detailsPriceBlock'),
                                    balance: e.array('balance'),
                                    displayFlags: e.array('displayFlags'),
                                },
                                t = (0, Ee.Om)(() => u.detailsPriceBlock.get().countDevice),
                                n = (0, Ee.Om)(() => u.detailsPriceBlock.get().priceDevice),
                                r = (0, Ee.Om)(() => Y(u.displayFlags.get(), (e) => e)),
                                i = (0, Ee.Om)(() => u.detailsPriceBlock.get().currencyName),
                                a = (0, Ee.Om)(
                                    () => {
                                        const e = u.detailsDevice.get().deviceName.slice(0, -1),
                                            t = u.detailsDevice.get(),
                                            n = t.level,
                                            r = t.overlayType;
                                        return {
                                            name: e,
                                            image: Ae(e),
                                            size: J.S180x135,
                                            special: r ? de(n, r) : void 0,
                                        };
                                    },
                                    { equals: _e },
                                );
                            return Object.assign(
                                {
                                    computes: {
                                        countDevice: t,
                                        priceDevice: n,
                                        displayFlags: r,
                                        currencyType: i,
                                        iconProps: a,
                                    },
                                },
                                u,
                            );
                        },
                        ({ externalModel: e }) => ({
                            deconstruct: e.createCallback((e) => ({ count: e }), 'onDeconstruct'),
                            close: e.createCallbackNoArgs('onClose'),
                        }),
                    ),
                    me = De[0],
                    Fe = De[1],
                    pe = {
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
                    Be = (0, n.memo)(
                        ({
                            isDiscount: e,
                            isInteractiveDiscount: u,
                            size: t,
                            type: n,
                            value: i,
                            discountValue: a,
                            showPlus: s,
                            isEnough: o = !0,
                            stockBackgroundName: c = z.Red,
                            className: l,
                            classNames: _,
                        }) =>
                            r().createElement(
                                'span',
                                { className: D()(pe.base, pe[`base__${t}`], l) },
                                r().createElement(
                                    'span',
                                    {
                                        className: D()(
                                            pe.value,
                                            pe[`value__${n}`],
                                            !o && pe.value__notEnough,
                                            null == _ ? void 0 : _.value,
                                        ),
                                    },
                                    s && i > 0 && '+',
                                    r().createElement(j, { value: i, format: n === q.gold ? 'gold' : 'integral' }),
                                ),
                                r().createElement('span', {
                                    className: D()(pe.icon, pe[`icon__${n}-${t}`], null == _ ? void 0 : _.icon),
                                }),
                                e &&
                                    r().createElement(
                                        'span',
                                        {
                                            className: D()(
                                                pe.stock,
                                                a && pe.stock__indent,
                                                u && pe.stock__interactive,
                                                null == _ ? void 0 : _.stock,
                                            ),
                                        },
                                        r().createElement('span', {
                                            className: pe.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${c})` },
                                        }),
                                        Boolean(a) && a,
                                    ),
                            ),
                    ),
                    Ce = 'FormatText_base_d0',
                    ge = ({ binding: e, text: u = '', classMix: t, alignment: i = P.left, formatWithBrackets: a }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const s = a && e ? S(u, e) : u;
                        return r().createElement(
                            n.Fragment,
                            null,
                            s.split('\n').map((u, a) =>
                                r().createElement(
                                    'div',
                                    { className: D()(Ce, t), key: `${u}-${a}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : M(e, u))))(
                                        u,
                                        i,
                                        e,
                                    ).map((e, u) => r().createElement(n.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    he = 'PriceBlock_base_7a',
                    ve = 'PriceBlock_priceContainer_d3',
                    be = 'PriceBlock_text_2c',
                    ye = 'PriceBlock_currency_13',
                    fe = ({
                        price: e,
                        isEnough: u,
                        type: t,
                        priceBlockText: n,
                        moneyShortageText: i = '',
                        size: a,
                        binding: s,
                        alertText: o,
                        className: c,
                        classNames: l,
                        showAlertMessage: _,
                        isNeedAdditionalText: E,
                    }) =>
                        r().createElement(
                            'div',
                            { className: D()(he, c) },
                            r().createElement(
                                'div',
                                { className: D()(ve, null == l ? void 0 : l.priceContainer) },
                                r().createElement('div', { className: be }, n),
                                r().createElement(
                                    'div',
                                    { className: D()(ye, null == l ? void 0 : l.currency) },
                                    r().createElement(Be, { size: a, type: t, value: e, isEnough: u }),
                                ),
                                E &&
                                    r().createElement(ge, {
                                        text: i,
                                        binding: s,
                                        classMix: null == l ? void 0 : l.additionalText,
                                    }),
                            ),
                            _ && r().createElement(V, { className: null == l ? void 0 : l.alert, alertText: o }),
                        ),
                    we = 'Content_base_a7',
                    Pe = 'Content_currency_4f',
                    Se = 'Content_column_9d',
                    Te = 'Content_alert_0f',
                    Ne = R.strings.tank_setup.dialogs.confirmActionsWithEquipmentDialog.content,
                    xe = (0, A.Pi)(() => {
                        const e = Fe().model,
                            u = e.computes.priceDevice(),
                            t = e.computes.currencyType(),
                            n = e.root.get(),
                            i = n.dialogType,
                            a = n.alertText,
                            s = Ne.$dyn(i);
                        return r().createElement(
                            'div',
                            { className: we },
                            r().createElement(fe, {
                                price: u,
                                type: t,
                                size: W.small,
                                priceBlockText: s,
                                alertText: a,
                                showAlertMessage: !0,
                                className: Se,
                                classNames: { currency: Pe, alert: Te },
                            }),
                        );
                    }),
                    Re = [
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
                function Oe(e) {
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
                const ke = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: l.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Ie = (e) => {
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
                            A = e.decoratorId,
                            d = void 0 === A ? 0 : A,
                            D = e.isEnabled,
                            m = void 0 === D || D,
                            F = e.targetId,
                            p = void 0 === F ? 0 : F,
                            B = e.onShow,
                            C = e.onHide,
                            g = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Re);
                        const h = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, n.useMemo)(
                                () =>
                                    p ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            n = R.invalid('resId'),
                                            r = '';
                                        var i;
                                        return (
                                            u &&
                                                ((r =
                                                    (null == (i = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : i[0]) ||
                                                    ''),
                                                (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { callerUrl: r, caller: t, stack: u, resId: n }
                                        );
                                    })().resId,
                                [p],
                            ),
                            b = (0, n.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (ke(t, d, { isMouseEvent: !0, on: !0, arguments: Oe(r) }, v),
                                    B && B(),
                                    (h.current.isVisible = !0));
                            }, [t, d, r, v, B]),
                            y = (0, n.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        ke(t, d, { on: !1 }, v),
                                        h.current.isVisible && C && C(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, d, v, C]),
                            f = (0, n.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const e = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', f, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', f, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === m && y();
                            }, [m, y]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        (window.removeEventListener('mouseleave', y), y());
                                    }
                                ),
                                [y],
                            ));
                        return m
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((w = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(h.current.timeoutId),
                                                      (h.current.timeoutId = window.setTimeout(b, l ? 100 : 400)),
                                                      i && i(e),
                                                      w && w(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (y(), null == a || a(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === E && y(), null == o || o(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === E && y(), null == s || s(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      g,
                                  ),
                              )
                            : u;
                        var w;
                    },
                    Me = ['children'];
                function Le() {
                    return (
                        (Le =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Le.apply(this, arguments)
                    );
                }
                const Ue = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Me);
                        return r().createElement(
                            Ie,
                            Le(
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
                    Ge = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function He() {
                    return (
                        (He =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        He.apply(this, arguments)
                    );
                }
                const Xe = R.views.common.tooltip_window.simple_tooltip_content,
                    Ve = (e) => {
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
                            })(e, Ge);
                        const l = (0, n.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: i, note: a, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, i, a, o]);
                        return r().createElement(
                            Ie,
                            He(
                                {
                                    contentId:
                                        ((_ = null == o ? void 0 : o.hasHtmlContent),
                                        _ ? Xe.SimpleTooltipHtmlContent('resId') : Xe.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: l,
                                },
                                c,
                            ),
                            u,
                        );
                        var _;
                    };
                function We() {
                    return (
                        (We =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        We.apply(this, arguments)
                    );
                }
                const qe = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = r().createElement('div', { className: t }, e);
                        if (u.header || u.body) return r().createElement(Ve, u, n);
                        const i = u.contentId;
                        return i ? r().createElement(Ie, We({}, u, { contentId: i }), n) : r().createElement(Ue, u, n);
                    },
                    ze =
                        (Z.Items,
                        Z.Equipment,
                        Z.Xp,
                        Z.XpFactor,
                        Z.Blueprints,
                        Z.BlueprintsAny,
                        Z.Goodies,
                        Z.Berths,
                        Z.Slots,
                        Z.Tokens,
                        Z.CrewSkins,
                        Z.CrewBooks,
                        Z.Customizations,
                        Z.CreditsFactor,
                        Z.TankmenXp,
                        Z.TankmenXpFactor,
                        Z.FreeXpFactor,
                        Z.BattleToken,
                        Z.LootBox,
                        Z.PremiumUniversal,
                        Z.NaturalCover,
                        Z.BpCoin,
                        Z.BattlePassSelectToken,
                        Z.BattlaPassFinalAchievement,
                        Z.BattleBadge,
                        Z.BattlePassTicket,
                        Z.BonusX5,
                        Z.CrewBonusX3,
                        Z.EpicSelectToken,
                        Z.Comp7TokenWeeklyReward,
                        Z.DeluxeGift,
                        Z.ModernizedDevicesT1Gift,
                        Z.ModernizedDevicesT2Gift,
                        Z.ModernizedDevicesT3Gift,
                        Z.BattleBoosterGift,
                        Z.OptionalDevice,
                        Z.Attachment,
                        Z.Gold,
                        Z.Credits,
                        Z.Crystal,
                        Z.FreeXp,
                        Z.BattlePassPoints,
                        Z.EquipCoin,
                        Z.PremiumPlus,
                        Z.Premium,
                        [J.Small, J.Big]),
                    je = {
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
                    Ye = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = J.Big,
                        special: i,
                        value: a,
                        valueType: s,
                        title: o,
                        style: c,
                        className: l,
                        classNames: _,
                        tooltipArgs: E,
                        periodicIconTooltipArgs: A,
                    }) => {
                        const d = ((e, u) => {
                                if (void 0 === u || !ze.includes(e)) return null;
                                switch (u) {
                                    case ue.BATTLE_BOOSTER:
                                    case ue.BATTLE_BOOSTER_REPLACE:
                                        return te.BATTLE_BOOSTER;
                                }
                            })(n, i),
                            m = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ue.BATTLE_BOOSTER:
                                        return ne.BATTLE_BOOSTER;
                                    case ue.BATTLE_BOOSTER_REPLACE:
                                        return ne.BATTLE_BOOSTER_REPLACE;
                                    case ue.BUILT_IN_EQUIPMENT:
                                        return ne.BUILT_IN_EQUIPMENT;
                                    case ue.EQUIPMENT_PLUS:
                                        return ne.EQUIPMENT_PLUS;
                                    case ue.EQUIPMENT_TROPHY_BASIC:
                                        return ne.EQUIPMENT_TROPHY_BASIC;
                                    case ue.EQUIPMENT_TROPHY_UPGRADED:
                                        return ne.EQUIPMENT_TROPHY_UPGRADED;
                                    case ue.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return ne.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case ue.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return ne.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case ue.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return ne.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case ue.PROGRESSION_STYLE_UPGRADED_1:
                                        return ne.PROGRESSION_STYLE_UPGRADED_1;
                                    case ue.PROGRESSION_STYLE_UPGRADED_2:
                                        return ne.PROGRESSION_STYLE_UPGRADED_2;
                                    case ue.PROGRESSION_STYLE_UPGRADED_3:
                                        return ne.PROGRESSION_STYLE_UPGRADED_3;
                                    case ue.PROGRESSION_STYLE_UPGRADED_4:
                                        return ne.PROGRESSION_STYLE_UPGRADED_4;
                                    case ue.PROGRESSION_STYLE_UPGRADED_5:
                                        return ne.PROGRESSION_STYLE_UPGRADED_5;
                                    case ue.PROGRESSION_STYLE_UPGRADED_6:
                                        return ne.PROGRESSION_STYLE_UPGRADED_6;
                                    case ue.ATTACHMENT_RARE:
                                        return ne.ATTACHMENT_RARE;
                                    case ue.ATTACHMENT_EPIC:
                                        return ne.ATTACHMENT_EPIC;
                                    case ue.ATTACHMENT_LEGENDARY:
                                        return ne.ATTACHMENT_LEGENDARY;
                                }
                            })(i),
                            F = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case ee.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case ee.CURRENCY:
                                    case ee.NUMBER:
                                        return r().createElement(j, { format: 'integral', value: Number(e) });
                                    case ee.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(a, s);
                        return r().createElement(
                            'div',
                            {
                                className: D()(je.base, je[`base__${n}`], ie.includes(e) && je.base__normalize, l),
                                style: c,
                            },
                            r().createElement(
                                qe,
                                { tooltipArgs: E, className: je.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: D()(je.image, null == _ ? void 0 : _.image) },
                                        d &&
                                            r().createElement('div', {
                                                className: D()(je.highlight, null == _ ? void 0 : _.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${d}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            r().createElement('div', {
                                                className: D()(je.icon, null == _ ? void 0 : _.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        m &&
                                            r().createElement('div', {
                                                className: D()(je.overlay, null == _ ? void 0 : _.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${m}_overlay)`,
                                                },
                                            }),
                                    ),
                                    F &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: D()(
                                                    je.info,
                                                    je[`info__${e}`],
                                                    s === ee.MULTI && je.info__multi,
                                                    null == _ ? void 0 : _.info,
                                                ),
                                            },
                                            F,
                                        ),
                                    o && r().createElement('div', { className: je.title }, o),
                                ),
                            ),
                            t &&
                                r().createElement(
                                    qe,
                                    { tooltipArgs: A },
                                    r().createElement('div', {
                                        className: D()(je.timer, null == _ ? void 0 : _.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    $e = 'Equipment_base_cb',
                    Ke = (0, A.Pi)(() => {
                        const e = Fe().model.computes.iconProps();
                        return r().createElement('div', { className: $e }, r().createElement(Ye, e));
                    });
                let Ze, Qe;
                function Je(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(Ze || (Ze = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(Qe || (Qe = {})));
                const eu = {
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
                    uu = ({
                        children: e,
                        size: u,
                        disabled: t,
                        mixClass: i,
                        onMouseEnter: a,
                        onMouseMove: s,
                        onMouseDown: o,
                        onMouseUp: c,
                        onMouseLeave: l,
                        onClick: _,
                        isFocused: E = !1,
                        type: A = Ze.primary,
                        soundHover: d = 'highlight',
                        soundClick: m = 'play',
                    }) => {
                        const F = (0, n.useRef)(null),
                            p = (0, n.useState)(E),
                            B = p[0],
                            C = p[1],
                            g = (0, n.useState)(!1),
                            h = g[0],
                            v = g[1];
                        return (
                            (0, n.useEffect)(() => {
                                function e(e) {
                                    B && null !== F.current && !F.current.contains(e.target) && C(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', e),
                                    () => {
                                        document.removeEventListener('mousedown', e);
                                    }
                                );
                            }, [B]),
                            (0, n.useEffect)(() => {
                                C(E);
                            }, [E]),
                            r().createElement(
                                'div',
                                {
                                    ref: F,
                                    className: D()(
                                        eu.base,
                                        eu[`base__${A}`],
                                        t && eu.base__disabled,
                                        u && eu[`base__${u}`],
                                        B && eu.base__focus,
                                        h && eu.base__highlightActive,
                                        i,
                                    ),
                                    onMouseEnter: function (e) {
                                        t || (null !== d && Je(d), a && a(e));
                                    },
                                    onMouseMove: function (e) {
                                        s && s(e);
                                    },
                                    onMouseUp: function (e) {
                                        t || (c && c(e), v(!1));
                                    },
                                    onMouseDown: function (e) {
                                        t ||
                                            (null !== m && Je(m),
                                            o && o(e),
                                            E && (t || (F.current && (F.current.focus(), C(!0)))),
                                            v(!0));
                                    },
                                    onMouseLeave: function (e) {
                                        t || (l && l(e), v(!1));
                                    },
                                    onClick: function (e) {
                                        t || (_ && _(e));
                                    },
                                },
                                A !== Ze.ghost &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: eu.back }),
                                        r().createElement('span', { className: eu.texture }),
                                    ),
                                r().createElement(
                                    'span',
                                    { className: D()(eu.state, eu.state__default) },
                                    r().createElement('span', { className: eu.stateDisabled }),
                                    r().createElement('span', { className: eu.stateHighlightHover }),
                                    r().createElement('span', { className: eu.stateHighlightActive }),
                                ),
                                r().createElement(
                                    'span',
                                    { className: eu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    e,
                                ),
                            )
                        );
                    },
                    tu = 'TextOverflow_base_3b',
                    nu = ['content', 'classMix', 'className'];
                function ru() {
                    return (
                        (ru =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ru.apply(this, arguments)
                    );
                }
                const iu = (e) => {
                        let u = e.content,
                            t = e.classMix,
                            i = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, nu);
                        const s = (0, n.useRef)(null),
                            o = (0, n.useState)(!0),
                            c = o[0],
                            l = o[1];
                        return (
                            (0, n.useEffect)(() =>
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
                                })(() => {
                                    const e = s.current;
                                    e && e.offsetWidth >= e.scrollWidth && l(!1);
                                }),
                            ),
                            r().createElement(
                                Ve,
                                { isEnabled: c, body: u },
                                r().createElement('div', ru({}, a, { ref: s, className: D()(tu, i, t) }), u),
                            )
                        );
                    },
                    au = 'ButtonsGroup_base_54',
                    su = 'ButtonsGroup_button_02',
                    ou = 'ButtonsGroup_buttonText_00',
                    cu = ({ onDeconstructDevice: e, onCloseDialog: u, buttons: t, classNames: n, className: i }) => {
                        const a = t.sell,
                            s = t.close;
                        return r().createElement(
                            'div',
                            { className: D()(au, i) },
                            r().createElement(
                                uu,
                                {
                                    onClick: e,
                                    mixClass: D()(su, null == n ? void 0 : n.button),
                                    size: a.size,
                                    type: a.type,
                                },
                                r().createElement(iu, {
                                    classMix: D()(ou, null == n ? void 0 : n.buttonText),
                                    content: a.text,
                                }),
                            ),
                            r().createElement(
                                uu,
                                {
                                    onClick: u,
                                    mixClass: D()(su, null == n ? void 0 : n.button),
                                    size: s.size,
                                    type: s.type,
                                },
                                r().createElement(iu, {
                                    classMix: D()(ou, null == n ? void 0 : n.buttonText),
                                    content: s.text,
                                }),
                            ),
                        );
                    },
                    lu = {
                        base: 'PriceBlockSlots_base_2f',
                        price: 'PriceBlockSlots_price_02',
                        column: 'PriceBlockSlots_column_95',
                        alert: 'PriceBlockSlots_alert_2e',
                    },
                    _u = R.strings.tank_setup.dialogs.confirmActionsWithEquipmentDialog.content,
                    Eu = (0, A.Pi)(({ price: e, buttons: u, onDeconstructDevice: t, onCloseDialog: n }) => {
                        const i = Fe().model,
                            a = i.root.get().dialogType,
                            s = i.computes.countDevice(),
                            o = i.computes.currencyType(),
                            c = _u.$dyn(a);
                        return r().createElement(
                            'div',
                            { className: lu.base },
                            r().createElement(
                                'div',
                                { className: lu.price },
                                r().createElement(fe, {
                                    price: e,
                                    type: o,
                                    size: W.big,
                                    priceBlockText: c,
                                    className: lu.column,
                                    classNames: { currency: lu.currency },
                                }),
                            ),
                            r().createElement(cu, { onDeconstructDevice: () => t(s), onCloseDialog: n, buttons: u }),
                        );
                    });
                t(3368);
                let Au;
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
                })(Au || (Au = {}));
                const du = {
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
                    input__eliteXP: 'NumericStepper_input__eliteXP_85',
                    input__freeXP: 'NumericStepper_input__freeXP_06',
                    input__crystal: 'NumericStepper_input__crystal_2e',
                    'input__xp-disabled': 'NumericStepper_input__xp-disabled_33',
                    'input__eliteXP-disabled': 'NumericStepper_input__eliteXP-disabled_a7',
                    'input__freeXP-disabled': 'NumericStepper_input__freeXP-disabled_8b',
                    'input__crystal-disabled': 'NumericStepper_input__crystal-disabled_f8',
                    input__withCurrency: 'NumericStepper_input__withCurrency_3b',
                    'input__xp-medium': 'NumericStepper_input__xp-medium_db',
                    'input__xp-large': 'NumericStepper_input__xp-large_73',
                    'input__eliteXP-medium': 'NumericStepper_input__eliteXP-medium_49',
                    'input__eliteXP-large': 'NumericStepper_input__eliteXP-large_e5',
                    'input__freeXP-medium': 'NumericStepper_input__freeXP-medium_2b',
                    'input__freeXP-large': 'NumericStepper_input__freeXP-large_c9',
                    'input__crystal-medium': 'NumericStepper_input__crystal-medium_56',
                    'input__crystal-large': 'NumericStepper_input__crystal-large_4e',
                    currency: 'NumericStepper_currency_38',
                    'currency__xp-medium': 'NumericStepper_currency__xp-medium_66',
                    'currency__xp-large': 'NumericStepper_currency__xp-large_66',
                    'currency__eliteXP-medium': 'NumericStepper_currency__eliteXP-medium_68',
                    'currency__eliteXP-large': 'NumericStepper_currency__eliteXP-large_84',
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
                    'currencyIcon__eliteXP-small': 'NumericStepper_currencyIcon__eliteXP-small_58',
                    'currencyIcon__eliteXP-medium': 'NumericStepper_currencyIcon__eliteXP-medium_e5',
                    'currencyIcon__eliteXP-large': 'NumericStepper_currencyIcon__eliteXP-large_3f',
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
                class Du extends r().PureComponent {
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
                                this.props.currencyType ? l.Z5.getNumberFormat(e, l.B3.GOLD) : e.toString()),
                            (this.getValidValue = (e) => {
                                const u = Math.min(this.props.maximum, Math.max(this.props.minimum, e)),
                                    t = this.props.stepSize;
                                return Math.round(u / t) * t;
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
                                const u = e === c.n.BACKSPACE,
                                    t = e === c.n.DELETE,
                                    n = this.input.current,
                                    r = n.selectionStart || 0,
                                    i = n.selectionEnd || 0;
                                let a = n.value;
                                const s = Math.max(r, i),
                                    o = s;
                                (t && (a = a.substring(0, s) + a.substring(s + 1, a.length)),
                                    u && 1 === r && 1 === a.length && (a = '0'));
                                const _ = Number(a.trim().replace(/\D/g, '')),
                                    E = Number.isSafeInteger(_) ? _ : Number.MAX_SAFE_INTEGER,
                                    A = this.props.currencyType ? l.Z5.getNumberFormat(E, l.B3.GOLD) : E.toString(),
                                    d = !isNaN(Number(a.replace(' ', '')));
                                n.value = A;
                                const D = new RegExp(/\d/g);
                                let m = 0;
                                for (let e = 0; e < o; e++) {
                                    const u = a[e] || '',
                                        t = A[m] || '';
                                    if (u.match(D) || u === t) {
                                        for (; u !== A[m] && m < A.length; ) m++;
                                        m++;
                                    }
                                }
                                ('' === a ? (m = 1) : d || (m = a.length),
                                    this.input.current && this.input.current.setSelectionRange(0, 0),
                                    this.setCursorPosition(m, m),
                                    this.changeValue(E),
                                    this.validationTimer && clearTimeout(this.validationTimer),
                                    (this.validationTimer = setTimeout(() => {
                                        this.getValidValue(E) !== E &&
                                            this.state.isFocused &&
                                            (this.changeValue(this.getValidValue(E)),
                                            this.setCursorPosition(0, this.formatValue(E).length));
                                    }, 1e3)));
                            }),
                            (this.handleDelete = (e) => {
                                const u = e.keyCode === c.n.BACKSPACE,
                                    t = e.keyCode === c.n.DELETE,
                                    n = e.target,
                                    r = n.selectionStart,
                                    i = n.selectionEnd,
                                    a = n.value,
                                    s = r !== i,
                                    o = new RegExp(/\D/),
                                    l = u && r ? r - 1 : r || 0;
                                if (s) return;
                                let _ = l;
                                const E = o.test(a[l]);
                                if (t && E) for (; o.test(a[_]) && _ < a.length; ) _++;
                                if (u && E) for (; o.test(a[_]) && _ > 0; ) _--;
                                if (_ !== l || (u && E))
                                    return (e.preventDefault(), (_ = _ < 0 ? 0 : _), void this.setCursorPosition(_, _));
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
                                        (e.keyCode in c.n &&
                                            e.keyCode !== c.n.BACKSPACE &&
                                            e.keyCode !== c.n.DELETE &&
                                            e.preventDefault(),
                                        e.keyCode)
                                    ) {
                                        case c.n.ARROW_UP:
                                        case c.n.NUM_PLUS:
                                        case c.n.PLUS:
                                            (this.state.activeIncrement || this.setState({ activeIncrement: !0 }),
                                                this.increment());
                                            break;
                                        case c.n.ARROW_DOWN:
                                        case c.n.NUM_MINUS:
                                        case c.n.MINUS:
                                            (this.state.activeDecrement || this.setState({ activeDecrement: !0 }),
                                                this.decrement());
                                            break;
                                        case c.n.HOME:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case c.n.END:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case c.n.ENTER:
                                            if (
                                                (e.nativeEvent.stopImmediatePropagation(),
                                                this.state.value >= this.props.maximum)
                                            ) {
                                                const e = this.formatValue(this.props.maximum).length;
                                                (this.changeValue(this.props.maximum), this.setCursorPosition(0, e));
                                            }
                                            break;
                                        case c.n.PAGE_UP:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case c.n.PAGE_DOWN:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case c.n.BACKSPACE:
                                        case c.n.DELETE:
                                            this.handleDelete(e);
                                    }
                                    this.props.onKeyDown(e);
                                }
                            }),
                            (this.handleKeyUp = (e) => {
                                if (!this.props.isDisabled)
                                    switch (e.keyCode) {
                                        case c.n.ARROW_UP:
                                        case c.n.NUM_PLUS:
                                        case c.n.PLUS:
                                            this.setState({ activeIncrement: !1 });
                                            break;
                                        case c.n.ARROW_DOWN:
                                        case c.n.NUM_MINUS:
                                        case c.n.MINUS:
                                            this.setState({ activeDecrement: !1 });
                                    }
                            }),
                            (this.allowOnlyNumbers = (e) => {
                                e.which in Au || e.preventDefault();
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
                            (this.incrementHandleMouseDown = (e, u = !1) => {
                                this.buttonIncrementIsDisabled ||
                                    (e.persist(),
                                    e.preventDefault(),
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
                                    e.preventDefault(),
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
                                this.props.isDisabled || Je('highlight');
                            }),
                            (this.playClickSound = () => {
                                this.props.isDisabled || Je('play');
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
                        (e !== this.props.value && this.setState({ value: e }),
                            u !== this.props.isFocused &&
                                (this.setState({ isFocused: u }),
                                u
                                    ? (this.setFocusOnInput(), this.setCursorPosition(0, this.formattedValue.length))
                                    : this.blurInput()));
                    }
                    get formattedValue() {
                        return this.props.currencyType
                            ? l.Z5.getNumberFormat(this.state.value, l.B3.GOLD)
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
                            i = D()(
                                du.base,
                                du[`base__${t}`],
                                n && du[`base__withCurrency-${t}`],
                                u && du.base__isDisabled,
                                this.state.isFocused && du.base__isFocus,
                            ),
                            a = D()(
                                du.buttonIncrement,
                                du[`buttonIncrement__${t}`],
                                this.buttonIncrementIsDisabled && du.buttonIncrement__isDisabled,
                                this.state.activeIncrement &&
                                    !this.buttonIncrementIsDisabled &&
                                    du[`buttonIncrement__isActive-${this.props.size}`],
                            ),
                            s = D()(
                                du.buttonDecrement,
                                du[`buttonDecrement__${t}`],
                                this.buttonDecrementIsDisabled && du.buttonDecrement__isDisabled,
                                this.state.activeDecrement &&
                                    !this.buttonDecrementIsDisabled &&
                                    du[`buttonDecrement__isActive-${this.props.size}`],
                            ),
                            o = D()(
                                du.input,
                                u && du.input__disabled,
                                n && du.input__withCurrency,
                                n && du[`input__${n}-${t}`],
                                n && du[`input__${n}`],
                                n && u && du[`input__${n}-disabled`],
                            ),
                            c = D()(du.currencyIcon, n && du[`currencyIcon__${n}-${t}`]),
                            l = D()(du.currency, n && du[`currency__${n}`], n && du[`currency__${n}-${t}`]);
                        return r().createElement(
                            'div',
                            {
                                className: i,
                                ref: this.numericalStepper,
                                style: ((_ = this.props.width), _ ? { width: `${_}rem` } : {}),
                            },
                            r().createElement(
                                'div',
                                { className: du.inputContainer },
                                n &&
                                    r().createElement(
                                        'div',
                                        { className: l },
                                        r().createElement('span', { className: du.dummyValue }, this.formattedValue),
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
                                { className: du.control },
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
                Du.defaultProps = {
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
                const mu = {
                        base: 'PriceBlockStorage_base_79',
                        priceBlock: 'PriceBlockStorage_priceBlock_a2',
                        stepper: 'PriceBlockStorage_stepper_10',
                        price: 'PriceBlockStorage_price_42',
                        column: 'PriceBlockStorage_column_1e',
                        alert: 'PriceBlockStorage_alert_22',
                    },
                    Fu = (e, u) => e * u,
                    pu = (0, A.Pi)(({ price: e, buttons: u, onDeconstructDevice: t, onCloseDialog: i }) => {
                        const a = Fe().model,
                            s = (0, n.useState)(1),
                            o = s[0],
                            c = s[1],
                            l = a.computes.currencyType(),
                            _ = a.computes.countDevice();
                        return r().createElement(
                            'div',
                            { className: mu.base },
                            r().createElement(
                                'div',
                                { className: mu.priceBlock },
                                r().createElement(
                                    'div',
                                    { className: mu.stepper },
                                    r().createElement(Du, {
                                        value: 1,
                                        minimum: 1,
                                        maximum: _,
                                        onChange: c,
                                        isFocused: !1,
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: mu.price },
                                    r().createElement(fe, {
                                        price: Fu(e, o),
                                        type: l,
                                        size: W.big,
                                        classNames: { currency: mu.currency, alert: mu.alert },
                                    }),
                                ),
                            ),
                            r().createElement(cu, { onDeconstructDevice: () => t(o), onCloseDialog: i, buttons: u }),
                        );
                    }),
                    Bu = 'Footer_base_5b',
                    Cu = R.strings.tank_setup.dialogs.confirmActionsWithEquipmentDialog.button,
                    gu = (0, A.Pi)(() => {
                        const e = Fe(),
                            u = e.model,
                            t = e.controls,
                            n = u.computes.priceDevice(),
                            i = u.root.get().dialogType,
                            a = Cu.$dyn(i),
                            o = Cu.cancel(),
                            c = { size: Qe.medium, text: a },
                            l = { size: Qe.medium, text: o, type: Ze.secondary };
                        return r().createElement(
                            'div',
                            { className: Bu },
                            s.DeconstructFromSlots !== i
                                ? r().createElement(pu, {
                                      price: n,
                                      buttons: { sell: c, close: l },
                                      onDeconstructDevice: t.deconstruct,
                                      onCloseDialog: t.close,
                                  })
                                : r().createElement(Eu, {
                                      price: n,
                                      buttons: { sell: c, close: l },
                                      onDeconstructDevice: t.deconstruct,
                                      onCloseDialog: t.close,
                                  }),
                        );
                    }),
                    hu = 'Header_base_12',
                    vu = 'Header_text_fd',
                    bu = 'Header_deviceName_33',
                    yu = ({ title: e, deviceName: u, className: t, classNames: n }) =>
                        r().createElement(
                            'div',
                            { className: D()(hu, t) },
                            r().createElement(ge, {
                                text: e,
                                classMix: D()(vu, null == n ? void 0 : n.text),
                                binding: {
                                    name: r().createElement(
                                        'span',
                                        { className: D()(bu, null == n ? void 0 : n.deviceName) },
                                        u,
                                    ),
                                },
                            }),
                        ),
                    fu = 'Title_base_de',
                    wu = R.strings.tank_setup.dialogs.confirmActionsWithEquipmentDialog.title,
                    Pu = (0, A.Pi)(() => {
                        var e;
                        const u = Fe().model,
                            t = u.detailsDevice.get().deviceName,
                            n = u.root.get().dialogType,
                            i = null == (e = R.strings.artefacts.$dyn(t)) ? void 0 : e.name(),
                            a = wu.$dyn(n);
                        return r().createElement(yu, {
                            deviceName: i,
                            title: a,
                            classNames: { text: fu, deviceName: fu },
                        });
                    }),
                    Su = 'App_dialogBackground_3a',
                    Tu = 'App_dialogCenter_6a',
                    Nu = (0, A.Pi)(() => {
                        const e = Fe(),
                            u = e.model,
                            t = e.controls,
                            n = u.computes.displayFlags(),
                            i = u.balance.get(),
                            a = u.root.get(),
                            o = a.dialogType,
                            l = a.alertText;
                        var _;
                        ((_ = t.close), E(c.n.ESCAPE, _));
                        return r().createElement(U, {
                            isShown: !0,
                            icon: r().createElement(Ke, null),
                            onClose: t.close,
                            topRight: r().createElement(K, { balance: i }),
                            title: r().createElement(Pu, null),
                            content:
                                s.DeconstructFromSlots !== o
                                    ? r().createElement(xe, null)
                                    : r().createElement(V, { alertText: l }),
                            buttons: r().createElement(gu, null),
                            displayFlags: n,
                            classMix: Su,
                            classNames: { center: Tu },
                        });
                    });
                engine.whenReady.then(() => {
                    a().render(
                        r().createElement(me, null, r().createElement(Nu, null)),
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
        (__webpack_require__.j = 338),
        (() => {
            var e = { 338: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(2647));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
