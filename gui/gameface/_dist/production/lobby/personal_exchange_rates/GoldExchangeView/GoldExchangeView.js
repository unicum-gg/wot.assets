(() => {
    var __webpack_modules__ = {
            926: (u) => {
                u.exports = {
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
            294: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => Eu });
                var n = {};
                (t.r(n),
                    t.d(n, { mouse: () => m, off: () => _, on: () => E, onResize: () => c, onScaleUpdated: () => l }));
                var r = {};
                (t.r(r),
                    t.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => C,
                        getSize: () => D,
                        graphicsQuality: () => h,
                        playSound: () => A,
                        setRTPC: () => F,
                    }));
                var i = {};
                (t.r(i), t.d(i, { getBgUrl: () => w, getTextureUrl: () => x }));
                var a = {};
                function s(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function o(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                (t.r(a),
                    t.d(a, {
                        addModelObserver: () => V,
                        addPreloadTexture: () => H,
                        arabic2roman: () => ru,
                        children: () => i,
                        displayStatus: () => S,
                        displayStatusIs: () => au,
                        enableFullScreenModeSupported: () => cu,
                        events: () => L,
                        extraSize: () => su,
                        forceTriggerMouseMove: () => eu,
                        freezeTextureBeforeResize: () => z,
                        getBrowserTexturePath: () => W,
                        getDisplayStatus: () => tu,
                        getExternalPaddingsRem: () => iu,
                        getFontNames: () => nu,
                        getScale: () => K,
                        getSize: () => $,
                        getViewGlobalPosition: () => j,
                        initExternalPaddings: () => lu,
                        isEventHandled: () => uu,
                        isFocused: () => Q,
                        pxToRem: () => q,
                        remToPx: () => Y,
                        resize: () => X,
                        sendEvent: () => k,
                        setAnimateWindow: () => Z,
                        setEventHandled: () => J,
                        setInputPaddingsRem: () => U,
                        setSidePaddingsRem: () => G,
                        whenTutorialReady: () => ou,
                    }));
                const c = s('clientResized'),
                    l = s('self.onScaleUpdated'),
                    E = (u, e) => engine.on(u, e),
                    _ = (u, e) => engine.off(u, e),
                    d = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const m = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && o(!1);
                    }
                    function t() {
                        u.enabled && o(!0);
                    }
                    function n() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : o(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${e}`,
                                        a = d[e]((u) => t([u, 'outside']));
                                    function s(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        n(),
                                        () => {
                                            r &&
                                                (a(),
                                                window.removeEventListener(i, s),
                                                (u.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            ((u.enabled = !1), n());
                        },
                        enable() {
                            ((u.enabled = !0), n());
                        },
                        enableOutside() {
                            u.enabled && o(!0);
                        },
                        disableOutside() {
                            u.enabled && o(!1);
                        },
                    });
                })();
                function A(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function F(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                function D(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function C(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const h = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    p = {
                        toUpperCase: (u) => window.systemLocale.toUpperCase(u),
                        toLowerCase: (u) => window.systemLocale.toLowerCase(u),
                    },
                    B = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    g = Object.keys(B).reduce((u, e) => ((u[e] = () => A(B[e])), u), {}),
                    v = { play: Object.assign({}, g, { sound: A }), setRTPC: F },
                    b = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    f = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function y(u) {
                    let e = '';
                    for (let t = f.length - 1; t >= 0; t--) for (; u >= f[t]; ) ((e += b[t]), (u -= f[t]));
                    return e;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function x(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function w(u, e, t) {
                    return `url(${x(u, e, t)})`;
                }
                const S = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    L = {
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
                    N = ['args'];
                const M = 2,
                    I = 16,
                    T = 32,
                    O = 64,
                    P = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        r = {},
                                        i = Object.keys(u);
                                    for (n = 0; n < i.length; n++) ((t = i[n]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                                    return r;
                                })(e, N);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([u, e]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof e) {
                                                      case 'number':
                                                          return { __Type: t, name: u, number: e };
                                                      case 'boolean':
                                                          return { __Type: t, name: u, bool: e };
                                                      default:
                                                          return { __Type: t, name: u, string: e.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    k = {
                        close(u) {
                            P('popover' === u ? M : T);
                        },
                        minimize() {
                            P(O);
                        },
                        move(u) {
                            P(I, { isMouseEvent: !0, on: u });
                        },
                    };
                function H(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function U(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function W(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function V(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function G(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function $(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function X(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function j(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: Y(e.x), y: Y(e.y) };
                }
                function z() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function K() {
                    return viewEnv.getScale();
                }
                function q(u) {
                    return viewEnv.pxToRem(u);
                }
                function Y(u) {
                    return viewEnv.remToPx(u);
                }
                function Z(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function Q() {
                    return viewEnv.isFocused();
                }
                function J() {
                    return viewEnv.setEventHandled();
                }
                function uu() {
                    return viewEnv.isEventHandled();
                }
                function eu() {
                    viewEnv.forceTriggerMouseMove();
                }
                function tu() {
                    return viewEnv.getShowingStatus();
                }
                const nu = (() => {
                        let u = [];
                        return () => (0 === u.length && (u = Object.keys(viewEnv.getFontsConfig())), u);
                    })(),
                    ru = y;
                function iu() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const au = Object.keys(S).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === S[e]), u), {}),
                    su = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    ou = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : L.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
                function cu() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function lu(u) {
                    function e() {
                        const e = viewEnv.getExternalPaddingsRem(),
                            t = e.top,
                            n = e.right,
                            r = e.bottom,
                            i = e.left;
                        (u.style.setProperty('--external-padding-top', `${t}rem`),
                            u.style.setProperty('--external-padding-right', `${n}rem`),
                            u.style.setProperty('--external-padding-bottom', `${r}rem`),
                            u.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (e(), engine.on('self.onPaddingsUpdated', () => e()));
                }
                const Eu = { view: a, client: r, sound: v, intl: p };
            },
            521: (u, e, t) => {
                'use strict';
                let n, r;
                (t.d(e, { n: () => n }),
                    (function (u) {
                        ((u[(u.NONE = -1)] = 'NONE'),
                            (u[(u.ALT = 165)] = 'ALT'),
                            (u[(u.ENTER = 13)] = 'ENTER'),
                            (u[(u.ESCAPE = 27)] = 'ESCAPE'),
                            (u[(u.SPACE = 32)] = 'SPACE'),
                            (u[(u.END = 35)] = 'END'),
                            (u[(u.HOME = 36)] = 'HOME'),
                            (u[(u.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (u[(u.ARROW_UP = 38)] = 'ARROW_UP'),
                            (u[(u.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (u[(u.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (u[(u.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (u[(u.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (u[(u.PLUS = 187)] = 'PLUS'),
                            (u[(u.MINUS = 189)] = 'MINUS'),
                            (u[(u.PAGE_UP = 33)] = 'PAGE_UP'),
                            (u[(u.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (u[(u.BACKSPACE = 8)] = 'BACKSPACE'),
                            (u[(u.DELETE = 46)] = 'DELETE'),
                            (u[(u.TAB = 9)] = 'TAB'),
                            (u[(u.KEY_N = 78)] = 'KEY_N'),
                            (u[(u.KEY_1 = 49)] = 'KEY_1'),
                            (u[(u.KEY_2 = 50)] = 'KEY_2'),
                            (u[(u.KEY_3 = 51)] = 'KEY_3'),
                            (u[(u.KEY_4 = 52)] = 'KEY_4'),
                            (u[(u.KEY_5 = 53)] = 'KEY_5'),
                            (u[(u.KEY_6 = 54)] = 'KEY_6'),
                            (u[(u.KEY_7 = 55)] = 'KEY_7'),
                            (u[(u.KEY_8 = 56)] = 'KEY_8'),
                            (u[(u.KEY_9 = 57)] = 'KEY_9'));
                    })(n || (n = {})),
                    (function (u) {
                        ((u.ALT = 'Alt'),
                            (u.ALT_GRAPH = 'AltGraph'),
                            (u.CAPS_LOCK = 'CapsLock'),
                            (u.CONTROL = 'Control'),
                            (u.FN = 'Fn'),
                            (u.FN_LOCK = 'FnLock'),
                            (u.META = 'Meta'),
                            (u.NUM_LOCK = 'NumLock'),
                            (u.SCROLL_LOCK = 'ScrollLock'),
                            (u.SHIFT = 'Shift'),
                            (u.SYMBOL = 'Symbol'),
                            (u.SYMBOL_LOCK = 'SymbolLock'));
                    })(r || (r = {})));
            },
            368: () => {
                (!(function () {
                    let u,
                        e,
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
                                ((u = t.target), (e = u.getBoundingClientRect()), u.setSelectionRange(0, 0)));
                    }),
                        document.addEventListener('mousemove', (t) => {
                            if ((-1 === s && t.target.select && t.target === u && (s = u.selectionStart), s > -1)) {
                                const n = Math.min(Math.max(t.x, e.left), e.right),
                                    r = Math.min(Math.max(t.y, e.top), e.bottom),
                                    i = document.createEvent('MouseEvent');
                                (i.initMouseEvent('mousedown', !0, !0, null, 1, n, r, n, r, !1, !1, !1, !1, 0, null),
                                    u.dispatchEvent(i));
                                const a = u.selectionEnd;
                                a > s ? u.setSelectionRange(s, a, 'forward') : u.setSelectionRange(a, s, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            ((u = null), (s = -1));
                        }),
                        document.addEventListener('dblclick', (u) => {
                            u.target.select &&
                                (document.getSelection().empty(),
                                (t = u.target),
                                (n = u.target.value),
                                (r = t.selectionStart),
                                (i = -1 !== n.lastIndexOf(' ', r) ? n.lastIndexOf(' ', r) + 1 : 0),
                                (a = -1 !== n.indexOf(' ', r) ? n.indexOf(' ', r) : n.length),
                                t.setSelectionRange(i, a, 'forward'));
                        }));
                })(),
                    (function () {
                        let u = null;
                        (document.addEventListener('mousedown', (e) => {
                            (document.getSelection().empty(),
                                0 !== e.button ||
                                    e.target.select ||
                                    u ||
                                    (u = document.caretPositionFromPoint(e.x, e.y)));
                        }),
                            document.addEventListener('mousemove', (e) => {
                                if (0 === e.button && !e.target.select && u) {
                                    const t = document.caretPositionFromPoint(e.x, e.y);
                                    if (!t.offsetNode || !u.offsetNode) return;
                                    document
                                        .getSelection()
                                        .setBaseAndExtent(u.offsetNode, u.offset, t.offsetNode, t.offset);
                                }
                            }),
                            document.addEventListener('mouseup', () => {
                                u = null;
                            }));
                    })());
            },
            358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => i });
                var n = t(294);
                class r {
                    constructor() {
                        ((this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (u) => {
                                this._views[u] &&
                                    (this._views[u].forEach((u) => {
                                        delete this._callbacks[u];
                                    }),
                                    delete this._views[u]);
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
                    addCallback(u, e, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = n.O.view.addModelObserver(u, t, r);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(i) : (this._views[t] = [i])))
                                : console.error("Can't add callback for model:", u),
                            i
                        );
                    }
                    removeCallback(u, e = 0) {
                        let t = !1;
                        return (
                            void 0 !== u &&
                                void 0 !== this._callbacks[u] &&
                                ((t = viewEnv.removeDataChangedCallback(u, e)), delete this._callbacks[u]),
                            t || console.error("Can't remove callback by id:", u),
                            t
                        );
                    }
                    _emmitDataChanged(u, e, t) {
                        t.forEach((t) => {
                            const n = this._callbacks[t];
                            void 0 !== n && n(u, e);
                        });
                    }
                }
                r.__instance = void 0;
                const i = r;
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
                                    this.callbacks.forEach((u) => {
                                        u(this.data);
                                    }));
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                (this._addCallback(path),
                                    watchingFields.forEach((u) => {
                                        this._addCallback(path + '.' + u);
                                    }),
                                    this._notifyObservers());
                            }));
                    }
                    subscribe(u) {
                        (this.callbacks.add(u), null !== this.data && void 0 !== this.data && u(this.data));
                    }
                    unsubscribe(u) {
                        this.callbacks.delete(u);
                    }
                    destroy() {
                        (this.dataTracker.clear(), this.callbacks.clear());
                    }
                    _addCallback(u) {
                        this.dataTracker.addCallback(u, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            916: (u, e, t) => {
                'use strict';
                t.d(e, { Sw: () => i.Z, B3: () => o, Z5: () => a.Z5, B0: () => s, ry: () => D });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let n = u.target;
                                    do {
                                        if (n === e) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (n.__instance || (n.__instance = new n()), n.__instance);
                    }
                    register(u, e) {
                        (this.addMouseListener(), this.entries.push({ container: u, callback: e }));
                    }
                    unregister(u, e) {
                        const t = u,
                            n = e;
                        ((this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== n)),
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
                var i = t(358);
                var a = t(613);
                let s;
                !(function (u) {
                    ((u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE'));
                })(s || (s = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(521),
                    d = t(294);
                const m = ['args'];
                function A(u, e, t, n, r, i, a) {
                    try {
                        var s = u[i](a),
                            o = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(o) : Promise.resolve(o).then(n, r);
                }
                const F = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    D = (function () {
                        var u,
                            e =
                                ((u = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((u) => {
                                            engine.on('Ready', u);
                                        })
                                    );
                                }),
                                function () {
                                    var e = this,
                                        t = arguments;
                                    return new Promise(function (n, r) {
                                        var i = u.apply(e, t);
                                        function a(u) {
                                            A(i, n, r, a, s, 'next', u);
                                        }
                                        function s(u) {
                                            A(i, n, r, a, s, 'throw', u);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    C = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        r = {},
                                        i = Object.keys(u);
                                    for (n = 0; n < i.length; n++) ((t = i[n]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                                    return r;
                                })(e, m);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([u, e]) => {
                                                  const t = { __Type: 'GFValueProxy', name: u };
                                                  switch (typeof e) {
                                                      case 'number':
                                                          t.number = e;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = e;
                                                          break;
                                                      default:
                                                          t.string = e.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    h = () => C(s.CLOSE),
                    p = (u, e) => {
                        u.keyCode === _.n.ESCAPE && e();
                    };
                var B = t(572);
                const g = r.instance,
                    v = {
                        DataTracker: i.Z,
                        ViewModel: B.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: c,
                        TimeFormatType: l,
                        DateFormatType: E,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (u) => C(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => C(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            C(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, r = R.invalid('resId'), i) => {
                            const a = d.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                c = o.x,
                                l = o.y,
                                E = o.width,
                                _ = o.height,
                                m = {
                                    x: d.O.view.pxToRem(c) + a.x,
                                    y: d.O.view.pxToRem(l) + a.y,
                                    width: d.O.view.pxToRem(E),
                                    height: d.O.view.pxToRem(_),
                                };
                            C(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: e,
                                bbox: F(m),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => p(e, u);
                            return (
                                window.addEventListener('keydown', e),
                                () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            p(u, h);
                        },
                        handleViewEvent: C,
                        onBindingsReady: D,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    const r = Object.prototype.toString.call(e[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = e[n];
                                        t[n] = [];
                                        for (let e = 0; e < r.length; e++) t[n].push({ value: u(r[e].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = u(e[n]))
                                            : (t[n] = e[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: g,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = v;
            },
            613: (u, e, t) => {
                'use strict';
                t.d(e, { Ew: () => i, Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e, t = 2) => systemLocale.getRealFormat(u, e, t),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    r = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    },
                    i = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            524: (u, e, t) => {
                'use strict';
                var n = t(363),
                    r = t.n(n);
                const i = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var a = t(294);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o;
                function c(u = a.O.client.getSize('rem')) {
                    const e = u.width,
                        t = u.height;
                    return Object.assign(
                        { width: e, height: t },
                        (function (u, e, t) {
                            const n = (function (u, e) {
                                    switch (!0) {
                                        case u >= e.extraLarge.width:
                                            return e.extraLarge.weight;
                                        case u >= e.large.width && u < e.extraLarge.width:
                                            return e.large.weight;
                                        case u >= e.medium.width && u < e.large.width:
                                            return e.medium.weight;
                                        case u >= e.small.width && u < e.medium.width:
                                            return e.small.weight;
                                        default:
                                            return e.extraSmall.weight;
                                    }
                                })(u, t),
                                r = (function (u, e) {
                                    switch (!0) {
                                        case u >= e.extraLarge.height:
                                            return e.extraLarge.weight;
                                        case u >= e.large.height && u < e.extraLarge.height:
                                            return e.large.weight;
                                        case u >= e.medium.height && u < e.large.height:
                                            return e.medium.weight;
                                        case u >= e.small.height && u < e.medium.height:
                                            return e.small.weight;
                                        default:
                                            return e.extraSmall.weight;
                                    }
                                })(e, t),
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
                        })(e, t, s),
                    );
                }
                !(function (u) {
                    ((u.extraLarge = 'extraLarge'),
                        (u.large = 'large'),
                        (u.medium = 'medium'),
                        (u.small = 'small'),
                        (u.extraSmall = 'extraSmall'),
                        (u.extraLargeWidth = 'extraLargeWidth'),
                        (u.largeWidth = 'largeWidth'),
                        (u.mediumWidth = 'mediumWidth'),
                        (u.smallWidth = 'smallWidth'),
                        (u.extraSmallWidth = 'extraSmallWidth'),
                        (u.extraLargeHeight = 'extraLargeHeight'),
                        (u.largeHeight = 'largeHeight'),
                        (u.mediumHeight = 'mediumHeight'),
                        (u.smallHeight = 'smallHeight'),
                        (u.extraSmallHeight = 'extraSmallHeight'));
                })(o || (o = {}));
                const l = c(),
                    E = (0, n.createContext)(l),
                    _ = ['children'];
                (0, n.memo)((u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                r = {},
                                i = Object.keys(u);
                            for (n = 0; n < i.length; n++) ((t = i[n]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                            return r;
                        })(u, _);
                    const r = (0, n.useContext)(E),
                        a = r.extraLarge,
                        s = r.large,
                        o = r.medium,
                        c = r.small,
                        l = r.extraSmall,
                        d = r.extraLargeWidth,
                        m = r.largeWidth,
                        A = r.mediumWidth,
                        F = r.smallWidth,
                        D = r.extraSmallWidth,
                        C = r.extraLargeHeight,
                        h = r.largeHeight,
                        p = r.mediumHeight,
                        B = r.smallHeight,
                        g = r.extraSmallHeight,
                        v = { extraLarge: C, large: h, medium: p, small: B, extraSmall: g };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && a) return e;
                        if (t.large && s) return e;
                        if (t.medium && o) return e;
                        if (t.small && c) return e;
                        if (t.extraSmall && l) return e;
                    } else {
                        if (t.extraLargeWidth && d) return i(e, t, v);
                        if (t.largeWidth && m) return i(e, t, v);
                        if (t.mediumWidth && A) return i(e, t, v);
                        if (t.smallWidth && F) return i(e, t, v);
                        if (t.extraSmallWidth && D) return i(e, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return e;
                            if (t.largeHeight && h) return e;
                            if (t.mediumHeight && p) return e;
                            if (t.smallHeight && B) return e;
                            if (t.extraSmallHeight && g) return e;
                        }
                    }
                    return null;
                });
                const d = ({ children: u }) => {
                    const e = (0, n.useState)(c),
                        t = e[0],
                        i = e[1],
                        s = (0, n.useState)(!1),
                        o = s[0],
                        l = s[1];
                    return (
                        (0, n.useLayoutEffect)(() => {
                            function u() {
                                i((u) => {
                                    const e = a.O.client.getSize('rem');
                                    return u.width === e.width && u.height === e.height ? u : c(e);
                                });
                            }
                            return (
                                u(),
                                l(!0),
                                a.O.client.events.on('clientResized', u),
                                a.O.client.events.on('self.onScaleUpdated', u),
                                () => {
                                    (a.O.client.events.off('clientResized', u),
                                        a.O.client.events.off('self.onScaleUpdated', u));
                                }
                            );
                        }, []),
                        r().createElement(E.Provider, { value: t }, o && u)
                    );
                };
                var m = t(483),
                    A = t.n(m),
                    F = t(926),
                    D = t.n(F);
                let C, h, p;
                (!(function (u) {
                    ((u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = s.small.width)] = 'Small'),
                        (u[(u.Medium = s.medium.width)] = 'Medium'),
                        (u[(u.Large = s.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                })(C || (C = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.width)] = 'Small'),
                            (u[(u.Medium = s.medium.width)] = 'Medium'),
                            (u[(u.Large = s.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                    })(h || (h = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.height)] = 'Small'),
                            (u[(u.Medium = s.medium.height)] = 'Medium'),
                            (u[(u.Large = s.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge'));
                    })(p || (p = {})));
                const B = () => {
                        const u = (0, n.useContext)(E),
                            e = u.width,
                            t = u.height,
                            r = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return C.ExtraLarge;
                                    case u.large:
                                        return C.Large;
                                    case u.medium:
                                        return C.Medium;
                                    case u.small:
                                        return C.Small;
                                    case u.extraSmall:
                                        return C.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), C.ExtraSmall);
                                }
                            })(u),
                            i = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return h.ExtraLarge;
                                    case u.largeWidth:
                                        return h.Large;
                                    case u.mediumWidth:
                                        return h.Medium;
                                    case u.smallWidth:
                                        return h.Small;
                                    case u.extraSmallWidth:
                                        return h.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), h.ExtraSmall);
                                }
                            })(u),
                            a = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return p.ExtraLarge;
                                    case u.largeHeight:
                                        return p.Large;
                                    case u.mediumHeight:
                                        return p.Medium;
                                    case u.smallHeight:
                                        return p.Small;
                                    case u.extraSmallHeight:
                                        return p.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), p.ExtraSmall);
                                }
                            })(u);
                        return { mediaSize: r, mediaWidth: i, mediaHeight: a, remScreenWidth: e, remScreenHeight: t };
                    },
                    g = ['children', 'className'];
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        v.apply(this, arguments)
                    );
                }
                const b = {
                        [h.ExtraSmall]: '',
                        [h.Small]: D().SMALL_WIDTH,
                        [h.Medium]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH}`,
                        [h.Large]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH}`,
                        [h.ExtraLarge]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH} ${D().EXTRA_LARGE_WIDTH}`,
                    },
                    f = {
                        [p.ExtraSmall]: '',
                        [p.Small]: D().SMALL_HEIGHT,
                        [p.Medium]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT}`,
                        [p.Large]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT}`,
                        [p.ExtraLarge]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT} ${D().EXTRA_LARGE_HEIGHT}`,
                    },
                    y = {
                        [C.ExtraSmall]: '',
                        [C.Small]: D().SMALL,
                        [C.Medium]: `${D().SMALL} ${D().MEDIUM}`,
                        [C.Large]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE}`,
                        [C.ExtraLarge]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE} ${D().EXTRA_LARGE}`,
                    },
                    x = (u) => {
                        let e = u.children,
                            t = u.className,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(u);
                                for (n = 0; n < i.length; n++) ((t = i[n]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                                return r;
                            })(u, g);
                        const i = B(),
                            a = i.mediaWidth,
                            s = i.mediaHeight,
                            o = i.mediaSize;
                        return r().createElement('div', v({ className: A()(t, b[a], f[s], y[o]) }, n), e);
                    },
                    w = ['children'];
                const S = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                r = {},
                                i = Object.keys(u);
                            for (n = 0; n < i.length; n++) ((t = i[n]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                            return r;
                        })(u, w);
                    return r().createElement(d, null, r().createElement(x, t, e));
                };
                var L = t(533),
                    N = t.n(L);
                let M, I, T;
                (!(function (u) {
                    ((u.small = 'small'), (u.big = 'big'), (u.large = 'large'), (u.extraLarge = 'extraLarge'));
                })(M || (M = {})),
                    (function (u) {
                        ((u.credits = 'credits'),
                            (u.gold = 'gold'),
                            (u.crystal = 'crystal'),
                            (u.xp = 'xp'),
                            (u.freeXP = 'freeXP'),
                            (u.eliteXP = 'eliteXP'),
                            (u.equipCoin = 'equipCoin'));
                    })(I || (I = {})),
                    (function (u) {
                        ((u.Red = 'RedActionBG'), (u.Blue = 'BlueActionBG'));
                    })(T || (T = {})));
                const O = (u) => {
                    let e,
                        t = null;
                    return (
                        (t = requestAnimationFrame(() => {
                            t = requestAnimationFrame(() => {
                                ((t = null), (e = u()));
                            });
                        })),
                        () => {
                            ('function' == typeof e && e(), null !== t && cancelAnimationFrame(t));
                        }
                    );
                };
                var P = t(521);
                const k = (u) => u instanceof HTMLElement,
                    H = (u) => {
                        u.focus();
                    },
                    U = (u) => {
                        if (u.keyCode === P.n.TAB) {
                            const e = Array.from(document.body.querySelectorAll('input')).filter(k);
                            if (!e.length) return;
                            (u.preventDefault(), a.O.view.setEventHandled());
                            const t = document.activeElement,
                                n = e[0],
                                r = e[e.length - 1];
                            if (u.shiftKey && t === n) H(r);
                            else if (u.shiftKey || t !== r) {
                                const n = e.findIndex((u) => u === t),
                                    r = e[n + (u.shiftKey ? -1 : 1)];
                                r && H(r);
                            } else H(n);
                        }
                    };
                function W(u) {
                    const e = new KeyboardEvent('keydown', {
                        view: window,
                        bubbles: !0,
                        key: 'Tab',
                        charCode: P.n.TAB,
                        keyCode: P.n.TAB,
                        shiftKey: u,
                    });
                    document.body.dispatchEvent(e);
                }
                const V = () => {
                    var u;
                    ((u = () => (
                        O(() => {
                            (W(!1),
                                O(() => {
                                    W(!0);
                                }));
                        }),
                        document.body.addEventListener('keydown', U),
                        () => {
                            document.body.removeEventListener('keydown', U);
                        }
                    )),
                        (0, n.useEffect)(u, []));
                };
                var G = t(515),
                    $ = t(558),
                    X = t(934);
                const j = {
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
                function K() {
                    return (
                        (K =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        K.apply(this, arguments)
                    );
                }
                const q = (u) => {
                    let e = u.caption,
                        t = u.onClick,
                        i = u.goto,
                        s = u.classNames,
                        o = u.onMouseEnter,
                        c = u.onMouseLeave,
                        l = u.onMouseDown,
                        E = u.onMouseUp,
                        _ = u.side,
                        d = void 0 === _ ? 'left' : _,
                        m = u.type,
                        F = void 0 === m ? 'back' : m,
                        D = u.soundHover,
                        C = void 0 === D ? 'highlight' : D,
                        h = u.soundClick,
                        p = void 0 === h ? 'play' : h,
                        B = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                r = {},
                                i = Object.keys(u);
                            for (n = 0; n < i.length; n++) ((t = i[n]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                            return r;
                        })(u, z);
                    const g = (0, n.useCallback)(
                            (u) => {
                                (null == o || o(u), a.O.sound.play.sound(C));
                            },
                            [o, C],
                        ),
                        v = (0, n.useCallback)(
                            (u) => {
                                null == c || c(u);
                            },
                            [c],
                        ),
                        b = (0, n.useCallback)(
                            (u) => {
                                (null == l || l(u), a.O.sound.play.sound(p));
                            },
                            [l, p],
                        ),
                        f = (0, n.useCallback)(
                            (u) => {
                                null == E || E(u);
                            },
                            [E],
                        );
                    return r().createElement(
                        'div',
                        K(
                            {
                                className: A()(j.base, j[`base__${F}`], j[`base__${d}`], null == s ? void 0 : s.base),
                                onMouseEnter: g,
                                onMouseLeave: v,
                                onMouseDown: b,
                                onMouseUp: f,
                                onClick: t,
                            },
                            B,
                        ),
                        'info' !== F && r().createElement('div', { className: j.shine }),
                        r().createElement(
                            'div',
                            { className: A()(j.icon, j[`icon__${F}`], j[`icon__${d}`], null == s ? void 0 : s.icon) },
                            r().createElement('div', { className: A()(j.glow, null == s ? void 0 : s.glow) }),
                        ),
                        r().createElement(
                            'div',
                            { className: A()(j.caption, j[`caption__${F}`], null == s ? void 0 : s.caption) },
                            e,
                        ),
                        i && r().createElement('div', { className: A()(j.goto, null == s ? void 0 : s.goto) }, i),
                    );
                };
                var Y = t(916);
                const Z = [
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
                function Q(u) {
                    return Object.entries(u || {}).map(([u, e]) => {
                        const t = { __Type: 'GFValueProxy', name: u };
                        switch (typeof e) {
                            case 'number':
                                t.number = e;
                                break;
                            case 'boolean':
                                t.bool = e;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = e.toString();
                        }
                        return t;
                    });
                }
                const J = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Y.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    uu = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            r = u.args,
                            i = u.onMouseEnter,
                            a = u.onMouseLeave,
                            s = u.onMouseDown,
                            o = u.onClick,
                            c = u.ignoreShowDelay,
                            l = void 0 !== c && c,
                            E = u.ignoreMouseClick,
                            _ = void 0 !== E && E,
                            d = u.decoratorId,
                            m = void 0 === d ? 0 : d,
                            A = u.isEnabled,
                            F = void 0 === A || A,
                            D = u.targetId,
                            C = void 0 === D ? 0 : D,
                            h = u.onShow,
                            p = u.onHide,
                            B = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(u);
                                for (n = 0; n < i.length; n++) ((t = i[n]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                                return r;
                            })(u, Z);
                        const g = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, n.useMemo)(
                                () =>
                                    C ||
                                    ((u = 1) => {
                                        const e = new Error().stack;
                                        let t,
                                            n = R.invalid('resId'),
                                            r = '';
                                        var i;
                                        return (
                                            e &&
                                                ((r =
                                                    (null == (i = e.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : i[0]) ||
                                                    ''),
                                                (t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { callerUrl: r, caller: t, stack: e, resId: n }
                                        );
                                    })().resId,
                                [C],
                            ),
                            b = (0, n.useCallback)(() => {
                                (g.current.isVisible && g.current.timeoutId) ||
                                    (J(t, m, { isMouseEvent: !0, on: !0, arguments: Q(r) }, v),
                                    h && h(),
                                    (g.current.isVisible = !0));
                            }, [t, m, r, v, h]),
                            f = (0, n.useCallback)(() => {
                                if (g.current.isVisible || g.current.timeoutId) {
                                    const u = g.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (g.current.timeoutId = 0)),
                                        J(t, m, { on: !1 }, v),
                                        g.current.isVisible && p && p(),
                                        (g.current.isVisible = !1));
                                }
                            }, [t, m, v, p]),
                            y = (0, n.useCallback)((u) => {
                                g.current.isVisible &&
                                    ((g.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (g.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(g.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const u = g.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', y, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', y, { capture: !0 }),
                                        u && window.clearTimeout(u));
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
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      (clearTimeout(g.current.timeoutId),
                                                      (g.current.timeoutId = window.setTimeout(b, l ? 100 : 400)),
                                                      i && i(u),
                                                      x && x(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              (f(), null == a || a(e), null == u || u(e));
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              (!1 === _ && f(), null == o || o(e), null == u || u(e));
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              (!1 === _ && f(), null == s || s(e), null == u || u(e));
                                          })(e.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : e;
                        var x;
                    },
                    eu = ['children'];
                function tu() {
                    return (
                        (tu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        tu.apply(this, arguments)
                    );
                }
                const nu = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(u);
                                for (n = 0; n < i.length; n++) ((t = i[n]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                                return r;
                            })(u, eu);
                        return r().createElement(
                            uu,
                            tu(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                t,
                            ),
                            e,
                        );
                    },
                    ru = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function iu() {
                    return (
                        (iu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        iu.apply(this, arguments)
                    );
                }
                const au = R.views.common.tooltip_window.simple_tooltip_content,
                    su = (u) => {
                        let e = u.children,
                            t = u.body,
                            i = u.header,
                            a = u.note,
                            s = u.alert,
                            o = u.args,
                            c = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(u);
                                for (n = 0; n < i.length; n++) ((t = i[n]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                                return r;
                            })(u, ru);
                        const l = (0, n.useMemo)(() => {
                            const u = Object.assign({}, o, { body: t, header: i, note: a, alert: s });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [s, t, i, a, o]);
                        return r().createElement(
                            uu,
                            iu(
                                {
                                    contentId:
                                        ((E = null == o ? void 0 : o.hasHtmlContent),
                                        E ? au.SimpleTooltipHtmlContent('resId') : au.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: l,
                                },
                                c,
                            ),
                            e,
                        );
                        var E;
                    };
                function ou() {
                    return (
                        (ou =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        ou.apply(this, arguments)
                    );
                }
                const cu = ({ children: u, tooltipArgs: e, className: t }) => {
                        if (!e) return u;
                        const n = r().createElement('div', { className: t }, u);
                        if (e.header || e.body) return r().createElement(su, e, n);
                        const i = e.contentId;
                        return i ? r().createElement(uu, ou({}, e, { contentId: i }), n) : r().createElement(nu, e, n);
                    },
                    lu = 'ExceededMessage_wrapper_0d',
                    Eu = 'ExceededMessage_base_1b',
                    _u = 'ExceededMessage_limitIcon_46',
                    du = 'ExceededMessage_hidden_4b',
                    mu = 'ExceededMessage_limitWrapper__enter_0a',
                    Au = 'ExceededMessage_limitWrapper__exit_bc',
                    Fu = 'ExceededMessage_restriction_33',
                    Du = 'ExceededMessage_restrictionIcon_f1',
                    Cu = 'ExceededMessage_restrictionIconGlow_04',
                    hu = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeLimitTooltip('resId') },
                    pu = { enter: mu, exit: Au },
                    Bu = ({ className: u, exceeded: e, amountOfPersonalDiscounts: t, onClick: n }) =>
                        r().createElement(
                            $.Z,
                            { className: A()(u, lu) },
                            r().createElement(
                                X.Z,
                                { key: String(`${e}${t > 5}`), timeout: 350, classNames: pu },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    e
                                        ? t > 5
                                            ? r().createElement(
                                                  'div',
                                                  { className: A()(Eu) },
                                                  r().createElement(
                                                      'div',
                                                      null,
                                                      R.strings.personal_exchange_rates.common.limitOverExceeded(),
                                                  ),
                                                  r().createElement(q, {
                                                      caption:
                                                          R.strings.personal_exchange_rates.common.limitRestrictions(),
                                                      type: 'close',
                                                      side: 'right',
                                                      onClick: n,
                                                      classNames: { base: Fu, icon: Du, glow: Cu },
                                                  }),
                                              )
                                            : r().createElement(
                                                  cu,
                                                  { tooltipArgs: hu, className: A()(Eu) },
                                                  r().createElement(
                                                      r().Fragment,
                                                      null,
                                                      r().createElement(
                                                          'div',
                                                          null,
                                                          R.strings.personal_exchange_rates.common.limitExceeded(),
                                                      ),
                                                      r().createElement('div', { className: _u }),
                                                  ),
                                              )
                                        : r().createElement(
                                              'div',
                                              { className: A()(Eu, du) },
                                              r().createElement(
                                                  'div',
                                                  null,
                                                  R.strings.personal_exchange_rates.common.limitExceeded(),
                                              ),
                                          ),
                                ),
                            ),
                        );
                const gu = ({ value: u, format: e = 'integral' }) => {
                        const t = (function (u) {
                                return 'gold' === u ? Y.B3.GOLD : Y.B3.INTEGRAL;
                            })(e),
                            n = Y.Z5.getNumberFormat(u, t);
                        return void 0 !== u && void 0 !== n ? n : null;
                    },
                    vu = {
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
                    bu = (0, n.memo)(
                        ({
                            isDiscount: u,
                            isInteractiveDiscount: e,
                            size: t,
                            type: n,
                            value: i,
                            discountValue: a,
                            showPlus: s,
                            isEnough: o = !0,
                            stockBackgroundName: c = T.Red,
                            className: l,
                            classNames: E,
                        }) =>
                            r().createElement(
                                'span',
                                { className: A()(vu.base, vu[`base__${t}`], l) },
                                r().createElement(
                                    'span',
                                    {
                                        className: A()(
                                            vu.value,
                                            vu[`value__${n}`],
                                            !o && vu.value__notEnough,
                                            null == E ? void 0 : E.value,
                                        ),
                                    },
                                    s && i > 0 && '+',
                                    r().createElement(gu, { value: i, format: n === I.gold ? 'gold' : 'integral' }),
                                ),
                                r().createElement('span', {
                                    className: A()(vu.icon, vu[`icon__${n}-${t}`], null == E ? void 0 : E.icon),
                                }),
                                u &&
                                    r().createElement(
                                        'span',
                                        {
                                            className: A()(
                                                vu.stock,
                                                a && vu.stock__indent,
                                                e && vu.stock__interactive,
                                                null == E ? void 0 : E.stock,
                                            ),
                                        },
                                        r().createElement('span', {
                                            className: vu.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${c})` },
                                        }),
                                        Boolean(a) && a,
                                    ),
                            ),
                    );
                let fu, yu;
                (!(function (u) {
                    ((u.Limited = 'limited'), (u.Unlimited = 'unlimited'));
                })(fu || (fu = {})),
                    (function (u) {
                        ((u.Coefficient = 'coefficient'),
                            (u.Integer = 'integer'),
                            (u.Temporary = 'temporary'),
                            (u.Limited = 'limited'));
                    })(yu || (yu = {})));
                var xu = t(281);
                let wu;
                function Su(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                function Lu(u, e) {
                    return u.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                        const t = 0 === u.indexOf('%') ? 2 : 1;
                        return String(e[u.slice(t, -t)]);
                    });
                }
                !(function (u) {
                    ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                })(wu || (wu = {}));
                const Nu = (u) => u.replace(/&nbsp;/g, ' '),
                    Mu = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    Iu = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    Tu = (u, e, t = wu.left) => u.split(e).reduce(t === wu.left ? Mu : Iu, []),
                    Ou = (() => {
                        const u = new RegExp(
                            [
                                /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                                /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                                /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                                /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                            ]
                                .map((u) => u.source)
                                .join('|'),
                            'gum',
                        );
                        return (e) =>
                            e
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(u);
                    })(),
                    Pu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    ku = (u, e = wu.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Pu.includes(t)) return Ou(u);
                        if ('ja' === t) {
                            return (0, xu.D4)()
                                .parse(u)
                                .map((u) => Nu(u));
                        }
                        return ((u, e = wu.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = Nu(u);
                            return (Tu(r, /( )/, e).forEach((u) => (t = t.concat(Tu(u, n, wu.left)))), t);
                        })(u, e);
                    },
                    Ru = 'DiscountHeader_base_cc',
                    Hu = 'DiscountHeader_base__asIcon_ec',
                    Uu = 'DiscountHeader_goldIcon_70',
                    Wu = 'DiscountHeader_freeXpIcon_09',
                    Vu = 'DiscountHeader_hidden_89',
                    Gu = 'DiscountHeader_left_6a',
                    $u = () =>
                        r().createElement(
                            'div',
                            { className: A()(Ru, Hu) },
                            Lu(R.strings.common.percentValue(), { value: '' }),
                        ),
                    Xu = ({ percent: u }) =>
                        r().createElement(
                            'div',
                            { className: Ru },
                            Lu(R.strings.common.plusPercentValue(), { value: u }),
                        ),
                    ju = { [I.gold]: Uu, [I.freeXP]: Wu },
                    zu = ({ type: u }) =>
                        r().createElement(
                            'div',
                            { className: A()(Ru, Hu) },
                            r().createElement('div', { className: ju[u] }),
                        );
                var Ku = t(613);
                const qu = 60,
                    Yu = 3600,
                    Zu = 86400;
                (Date.now(), Ku.Ew.getRegionalDateTime, Ku.Ew.getFormattedDateTime);
                const Qu = () => {},
                    Ju = (u = 0, e, t = 0, r = Qu) => {
                        const i = (0, n.useState)(u),
                            a = i[0],
                            s = i[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (u > 0) {
                                    s(u);
                                    const n = Date.now(),
                                        i = setInterval(
                                            () => {
                                                const e = u - Math.floor((Date.now() - n) / 1e3);
                                                null !== t && e <= t ? (s(t), r && r(), clearInterval(i)) : s(e);
                                            },
                                            1e3 * (e || (u > 120 ? qu : 1)),
                                        );
                                    return () => {
                                        clearInterval(i);
                                    };
                                }
                            }, [u, e, t, r]),
                            a
                        );
                    };
                Y.Sw.instance;
                let ue;
                !(function (u) {
                    ((u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep'));
                })(ue || (ue = {}));
                Y.Sw.instance;
                const ee = Ju,
                    te = (u) => u.toString().padStart(2, '0'),
                    ne = ({ endDate: u }) => {
                        const e = Math.floor((u.getTime() - Date.now()) / 1e3),
                            t = ((u) => {
                                const e = `${te(u.hours)}:${te(u.minutes)}:${te(u.seconds)}`,
                                    t = `${Su(R.strings.common.duration.days(), { days: u.days })}`;
                                return u.days ? `${t} ${e}` : e;
                            })(
                                (function (u = 0) {
                                    let e = u;
                                    const t = Math.trunc(e / Zu);
                                    e -= t * Zu;
                                    const n = Math.trunc(e / Yu);
                                    e -= n * Yu;
                                    const r = Math.trunc(e / qu);
                                    return ((e -= r * qu), { days: t, hours: n, minutes: r, seconds: e });
                                })(ee(e, 1)),
                            );
                        return r().createElement(
                            'div',
                            { className: Ru },
                            r().createElement('div', { className: Gu }, t),
                            r().createElement('div', { className: Vu }, t.replace(/\d/g, '9')),
                        );
                    },
                    re = ({ discount: u, type: e }) => {
                        switch (u.format) {
                            case yu.Coefficient:
                                return r().createElement($u, null);
                            case yu.Integer:
                                return r().createElement(Xu, { percent: u.percent });
                            case yu.Temporary:
                                return r().createElement(ne, { endDate: u.endDate });
                            default:
                                return r().createElement(zu, { type: e });
                        }
                    },
                    ie = 'ExchangeRateInfo_base_4c',
                    ae = 'ExchangeRateInfo_discountBackground_38',
                    se = 'ExchangeRateInfo_content_2a',
                    oe = 'ExchangeRateInfo_rateText_99',
                    ce = 'ExchangeRateInfo_equal_70',
                    le = { [I.gold]: I.credits, [I.freeXP]: I.gold },
                    Ee = {
                        [I.gold]: ['goldRateValue', 'resourceRateValue'],
                        [I.freeXP]: ['resourceRateValue', 'goldRateValue'],
                    },
                    _e = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeRateTooltip('resId') },
                    de = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeLimitTooltip('resId') },
                    me = ({
                        primaryCurrency: u,
                        rate: e,
                        discount: t,
                        additionalInfo: n,
                        className: i,
                        amountOfPersonalDiscounts: a,
                        exceeded: s,
                    }) => {
                        const o = (null == t ? void 0 : t.exchangeRate) || e;
                        let c;
                        return (
                            t && (c = t.type === fu.Limited ? (a <= 5 ? de : void 0) : _e),
                            r().createElement(
                                cu,
                                { tooltipArgs: c },
                                r().createElement(
                                    'div',
                                    { className: i },
                                    r().createElement(
                                        'div',
                                        { className: ie },
                                        t &&
                                            r().createElement(
                                                r().Fragment,
                                                null,
                                                r().createElement('div', { className: ae }),
                                                r().createElement(re, {
                                                    discount: Object.assign({}, t, {
                                                        format: s ? yu.Coefficient : t.format,
                                                    }),
                                                    type: u,
                                                }),
                                            ),
                                        r().createElement(
                                            'div',
                                            { className: se },
                                            s
                                                ? R.strings.personal_exchange_rates.common.combinedDiscount()
                                                : r().createElement(
                                                      r().Fragment,
                                                      null,
                                                      r().createElement(
                                                          'span',
                                                          { className: oe },
                                                          R.strings.personal_exchange_rates.common.exchangeRate(),
                                                      ),
                                                      r().createElement(bu, {
                                                          value: o[Ee[u][0]],
                                                          size: 'big',
                                                          type: u,
                                                      }),
                                                      r().createElement('span', { className: ce }, '='),
                                                      r().createElement(bu, {
                                                          value: o[Ee[u][1]],
                                                          size: 'big',
                                                          type: le[u],
                                                      }),
                                                  ),
                                        ),
                                        n,
                                    ),
                                ),
                            )
                        );
                    };
                let Ae;
                function Fe(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                !(function (u) {
                    ((u[(u.LEFT = 0)] = 'LEFT'),
                        (u[(u.WHEEL = 1)] = 'WHEEL'),
                        (u[(u.RIGHT = 2)] = 'RIGHT'),
                        (u[(u.FOURTH = 3)] = 'FOURTH'),
                        (u[(u.FIFTH = 4)] = 'FIFTH'));
                })(Ae || (Ae = {}));
                const De = {
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
                let Ce, he;
                (!(function (u) {
                    ((u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost'));
                })(Ce || (Ce = {})),
                    (function (u) {
                        ((u.extraSmall = 'extraSmall'),
                            (u.small = 'small'),
                            (u.medium = 'medium'),
                            (u.large = 'large'));
                    })(he || (he = {})));
                const pe = ({
                        children: u,
                        size: e,
                        disabled: t,
                        mixClass: i,
                        onMouseEnter: a,
                        onMouseMove: s,
                        onMouseDown: o,
                        onMouseUp: c,
                        onMouseLeave: l,
                        onClick: E,
                        isFocused: _ = !1,
                        type: d = Ce.primary,
                        soundHover: m = 'highlight',
                        soundClick: F = 'play',
                    }) => {
                        const D = (0, n.useRef)(null),
                            C = (0, n.useState)(_),
                            h = C[0],
                            p = C[1],
                            B = (0, n.useState)(!1),
                            g = B[0],
                            v = B[1];
                        return (
                            (0, n.useEffect)(() => {
                                function u(u) {
                                    h && null !== D.current && !D.current.contains(u.target) && p(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', u),
                                    () => {
                                        document.removeEventListener('mousedown', u);
                                    }
                                );
                            }, [h]),
                            (0, n.useEffect)(() => {
                                p(_);
                            }, [_]),
                            r().createElement(
                                'div',
                                {
                                    ref: D,
                                    className: A()(
                                        De.base,
                                        De[`base__${d}`],
                                        t && De.base__disabled,
                                        e && De[`base__${e}`],
                                        h && De.base__focus,
                                        g && De.base__highlightActive,
                                        i,
                                    ),
                                    onMouseEnter: function (u) {
                                        t || (null !== m && Fe(m), a && a(u));
                                    },
                                    onMouseMove: function (u) {
                                        s && s(u);
                                    },
                                    onMouseUp: function (u) {
                                        t || (c && c(u), v(!1));
                                    },
                                    onMouseDown: function (u) {
                                        if (t) return;
                                        const e = u.button === Ae.LEFT;
                                        (null !== F && e && Fe(F),
                                            o && o(u),
                                            _ && (t || (D.current && (D.current.focus(), p(!0)))),
                                            e && v(!0));
                                    },
                                    onMouseLeave: function (u) {
                                        t || (l && l(u), v(!1));
                                    },
                                    onClick: function (u) {
                                        t || (E && E(u));
                                    },
                                },
                                d !== Ce.ghost &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: De.back }),
                                        r().createElement('span', { className: De.texture }),
                                    ),
                                r().createElement(
                                    'span',
                                    { className: A()(De.state, De.state__default) },
                                    r().createElement('span', { className: De.stateDisabled }),
                                    r().createElement('span', { className: De.stateHighlightHover }),
                                    r().createElement('span', { className: De.stateHighlightActive }),
                                ),
                                r().createElement(
                                    'span',
                                    { className: De.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    u,
                                ),
                            )
                        );
                    },
                    Be = 'Footer_base_19',
                    ge = 'Footer_divider_c7',
                    ve = 'Footer_footerText_9a',
                    be = 'Footer_afterExchange_31',
                    fe = 'Footer_currencyWrapper_44',
                    ye = 'Footer_alert_6c',
                    xe = 'Footer_buttons_5b',
                    we = 'Footer_button_2d',
                    Se = R.strings.personal_exchange_rates.common,
                    Le = ({ onExchange: u, onClose: e, disabled: t, currenciesAfterExchange: n }) =>
                        r().createElement(
                            'div',
                            { className: Be },
                            r().createElement('div', { className: ge }),
                            r().createElement('div', { className: ve }, Se.afterExchange()),
                            r().createElement(
                                'div',
                                { className: be },
                                n.map((u) =>
                                    r().createElement(
                                        'div',
                                        { key: u.currencyType, className: fe },
                                        r().createElement(bu, {
                                            value: Math.max(u.value, 0),
                                            type: u.currencyType,
                                            size: 'big',
                                        }),
                                        u.currencyType === I.gold &&
                                            u.value < 0 &&
                                            r().createElement(
                                                su,
                                                {
                                                    header: R.strings.personal_exchange_rates.tooltip.goldAfterExchange.header(),
                                                    body: R.strings.personal_exchange_rates.tooltip.goldAfterExchange.body(),
                                                },
                                                r().createElement('div', { className: ye }),
                                            ),
                                    ),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: xe },
                                r().createElement(
                                    pe,
                                    {
                                        size: he.medium,
                                        type: 'main',
                                        mixClass: we,
                                        onClick: u,
                                        disabled: t,
                                        soundClick: 'yes',
                                    },
                                    Se.exchange(),
                                ),
                                r().createElement(
                                    pe,
                                    { size: he.medium, type: 'secondary', mixClass: we, onClick: e, soundClick: 'yes' },
                                    Se.cancel(),
                                ),
                            ),
                        ),
                    Ne = (u) => {
                        console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                    };
                function Me(u = P.n.NONE, e = Ne, t = !1, r = !1) {
                    (0, n.useEffect)(() => {
                        if (u !== P.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === u) {
                                if (!r && a.O.view.isEventHandled()) return;
                                (a.O.view.setEventHandled(), e(n), t && n.stopPropagation());
                            }
                        }
                    }, [e, u, t, r]);
                }
                const Ie = {
                    base: 'Balance_base_3a',
                    currency: 'Balance_currency_0c',
                    icon: 'Balance_icon_ff',
                    icon__crystal: 'Balance_icon__crystal_1e',
                    icon__gold: 'Balance_icon__gold_f2',
                    icon__credits: 'Balance_icon__credits_f1',
                    icon__freeXP: 'Balance_icon__freeXP_31',
                    amount: 'Balance_amount_bb',
                    amount__crystal: 'Balance_amount__crystal_ff',
                    amount__gold: 'Balance_amount__gold_c8',
                    amount__credits: 'Balance_amount__credits_d2',
                };
                function Te() {}
                function Oe() {
                    return !1;
                }
                console.log;
                var Pe = t(174);
                function ke(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return Re(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Re(u, e);
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var n = 0;
                        return function () {
                            return n >= u.length ? { done: !0 } : { done: !1, value: u[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Re(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = new Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const He = (u) => (0 === u ? window : window.subViews.get(u));
                const Ue = () => (u, e) => {
                    const t = (0, n.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: s, children: o, mocks: c }) {
                            const l = (0, n.useRef)([]),
                                E = (t, n, r) => {
                                    var i;
                                    const s = (function ({
                                            initializer: u = !0,
                                            rootId: e = 0,
                                            getRoot: t = He,
                                            context: n = 'model',
                                        } = {}) {
                                            const r = new Map();
                                            function i(u, e = 0) {
                                                viewEnv.removeDataChangedCallback(u, e)
                                                    ? r.delete(u)
                                                    : console.error("Can't remove callback by id:", u);
                                            }
                                            engine.whenReady.then(() => {
                                                engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                    t.forEach((e) => {
                                                        const t = r.get(e);
                                                        void 0 !== t && t(u);
                                                    });
                                                });
                                            });
                                            const s = (u) => {
                                                const r = t(e),
                                                    i = n.split('.').reduce((u, e) => u[e], r);
                                                return 'string' != typeof u || 0 === u.length
                                                    ? i
                                                    : u.split('.').reduce((u, e) => {
                                                          const t = u[e];
                                                          return 'function' == typeof t ? t.bind(u) : t;
                                                      }, i);
                                            };
                                            return {
                                                subscribe: (t, i) => {
                                                    const o = 'string' == typeof i ? `${n}.${i}` : n,
                                                        c = a.O.view.addModelObserver(o, e, !0);
                                                    return (r.set(c, t), u && t(s(i)), c);
                                                },
                                                readByPath: s,
                                                createCallback: (u, e) => {
                                                    const t = s(e);
                                                    return (...e) => {
                                                        t(u(...e));
                                                    };
                                                },
                                                createCallbackNoArgs: (u) => {
                                                    const e = s(u);
                                                    return () => {
                                                        e();
                                                    };
                                                },
                                                dispose: function () {
                                                    for (var u, t = ke(r.keys()); !(u = t()).done; ) i(u.value, e);
                                                },
                                                unsubscribe: i,
                                            };
                                        })(n),
                                        o =
                                            'real' === t
                                                ? s
                                                : Object.assign({}, s, {
                                                      readByPath:
                                                          null != (i = null == r ? void 0 : r.getter) ? i : () => {},
                                                  }),
                                        c = (u) =>
                                            'mocks' === t ? (null == r ? void 0 : r.getter(u)) : o.readByPath(u),
                                        E = (u) => l.current.push(u),
                                        _ = u({
                                            mode: t,
                                            readByPath: c,
                                            externalModel: o,
                                            observableModel: {
                                                dict: (u) => {
                                                    const e = c(u),
                                                        n = Pe.LO.box(e, { equals: Oe });
                                                    return (
                                                        'real' === t &&
                                                            o.subscribe(
                                                                (0, Pe.aD)((u) => n.set(u)),
                                                                u,
                                                            ),
                                                        n
                                                    );
                                                },
                                                array: (u, e) => {
                                                    const n = null != e ? e : c(u),
                                                        r = Pe.LO.box(n, { equals: Oe });
                                                    return (
                                                        'real' === t &&
                                                            o.subscribe(
                                                                (0, Pe.aD)((u) => r.set(u)),
                                                                u,
                                                            ),
                                                        r
                                                    );
                                                },
                                                object: (u, e) => {
                                                    const n = null != e ? e : c(u),
                                                        r = Pe.LO.box(n, { equals: Oe });
                                                    return (
                                                        'real' === t &&
                                                            o.subscribe(
                                                                (0, Pe.aD)((u) => r.set(u)),
                                                                u,
                                                            ),
                                                        r
                                                    );
                                                },
                                                primitives: (u, e) => {
                                                    const n = c(e);
                                                    if (Array.isArray(u)) {
                                                        const r = u.reduce(
                                                            (u, e) => ((u[e] = Pe.LO.box(n[e], {})), u),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, Pe.aD)((e) => {
                                                                        u.forEach((u) => {
                                                                            r[u].set(e[u]);
                                                                        });
                                                                    }),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                    {
                                                        const r = u,
                                                            i = Object.entries(r),
                                                            a = i.reduce(
                                                                (u, [e, t]) => ((u[t] = Pe.LO.box(n[e], {})), u),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, Pe.aD)((u) => {
                                                                        i.forEach(([e, t]) => {
                                                                            a[t].set(u[e]);
                                                                        });
                                                                    }),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: E,
                                        }),
                                        d = { mode: t, model: _, externalModel: o, cleanup: E };
                                    return {
                                        model: _,
                                        controls: 'mocks' === t && r ? r.controls(d) : e(d),
                                        externalModel: o,
                                        mode: t,
                                    };
                                },
                                _ = (0, n.useRef)(!1),
                                d = (0, n.useState)(i),
                                m = d[0],
                                A = d[1],
                                F = (0, n.useState)(() => E(i, s, c)),
                                D = F[0],
                                C = F[1];
                            return (
                                (0, n.useEffect)(() => {
                                    _.current ? C(E(m, s, c)) : (_.current = !0);
                                }, [c, m, s]),
                                (0, n.useEffect)(() => {
                                    A(i);
                                }, [i]),
                                (0, n.useEffect)(
                                    () => () => {
                                        (D.externalModel.dispose(), l.current.forEach((u) => u()));
                                    },
                                    [D],
                                ),
                                r().createElement(t.Provider, { value: D }, o)
                            );
                        },
                        () => (0, n.useContext)(t),
                    ];
                };
                function We(u, e) {
                    var t;
                    if (!(e >= u.length)) return Array.isArray(u) ? u[e] : null == (t = u[e]) ? void 0 : t.value;
                }
                const Ve = We;
                function Ge(u) {
                    var e;
                    return u && 'value' in u && null != (e = u.constructor) && e.name.includes('ArrayItem')
                        ? null == u
                            ? void 0
                            : u.value
                        : u;
                }
                function $e(u, e, t) {
                    if (Array.isArray(u)) return u.reduce(e, t);
                    let n = t;
                    for (let t = 0; t < u.length; t++) {
                        n = e(n, Ve(u, t), t, u);
                    }
                    return n;
                }
                const Xe = Ue()(({ observableModel: u, externalModel: e, readByPath: t }) => {
                        const n = () => $e(t('currencies'), (u, e) => ((u[e.currencyType] = e), u), {}),
                            r = Object.assign({ resources: Pe.LO.box(n()) }, u.primitives(['isWalletAvailable']));
                        return (
                            e.subscribe(
                                (0, Pe.aD)(() => r.resources.set(n())),
                                'currencies',
                            ),
                            r
                        );
                    }, Te),
                    je = Xe[0],
                    ze = Xe[1];
                const Ke = [I.crystal, I.gold, I.credits, I.freeXP],
                    qe = (0, G.Pi)(() => {
                        const u = ze().model.resources.get();
                        return r().createElement(
                            'div',
                            { className: Ie.base },
                            Ke.map((e) => {
                                const t = u[e];
                                return r().createElement(
                                    'div',
                                    { key: e },
                                    r().createElement(
                                        cu,
                                        { tooltipArgs: t ? { contentId: t.tooltipId } : void 0 },
                                        r().createElement(
                                            'div',
                                            { className: Ie.currency },
                                            r().createElement('div', { className: A()(Ie.icon, Ie[`icon__${e}`]) }),
                                            r().createElement(
                                                'span',
                                                { className: A()(Ie.amount, Ie[`amount__${e}`]) },
                                                t ? r().createElement(gu, { value: t.value }) : '---',
                                            ),
                                        ),
                                    ),
                                );
                            }),
                        );
                    }),
                    Ye = 'Layout_base_8b',
                    Ze = 'Layout_pin_d4',
                    Qe = 'Layout_close_27',
                    Je = { context: 'model.balance' },
                    ut = ({ backgroundImage: u, children: e, onClose: t }) => {
                        var n;
                        return (
                            (n = t),
                            Me(P.n.ESCAPE, n),
                            r().createElement(
                                'div',
                                { className: Ye, style: u ? { backgroundImage: `url(${u})` } : {} },
                                r().createElement(
                                    'div',
                                    { className: Ze },
                                    r().createElement(je, { options: Je }, r().createElement(qe, null)),
                                    r().createElement(q, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: t,
                                        classNames: { base: Qe },
                                    }),
                                ),
                                e,
                            )
                        );
                    };
                let et;
                !(function (u) {
                    ((u.credits = 'credits'), (u.gold = 'gold'), (u.crystal = 'crystal'), (u.freeXP = 'freeXP'));
                })(et || (et = {}));
                var tt = t(946);
                const nt = Ue()(
                        ({ observableModel: u, externalModel: e, readByPath: t }) => {
                            const n = u.array('balance.currencies');
                            function r() {
                                return ((u) => {
                                    if (u.isDiscountAvailable)
                                        return {
                                            format: u.showFormat,
                                            exchangeRate: u.exchangeRate,
                                            type: u.discountType,
                                            availableAmount: {
                                                gold: u.amountOfDiscount,
                                                resource:
                                                    (u.amountOfDiscount / u.exchangeRate.goldRateValue) *
                                                    u.exchangeRate.resourceRateValue,
                                            },
                                            endDate: new Date(1e3 * u.discountLifetime),
                                            percent: u.discountPercent,
                                        };
                                })(t('discount'));
                            }
                            const i = Object.assign(
                                    {
                                        goldToExchange: u.primitives(['goldAmountForExchange']).goldAmountForExchange,
                                        creditsFromExchange: u.primitives(['resourceAmountForExchange'])
                                            .resourceAmountForExchange,
                                        maximumCredits: u.primitives(['maxResourceAmountForExchange'])
                                            .maxResourceAmountForExchange,
                                        maximumGold: u.primitives(['maxGoldAmountForExchange'])
                                            .maxGoldAmountForExchange,
                                        exchangeRate: u.object('exchangeRate'),
                                        discount: Pe.LO.box(r()),
                                    },
                                    u.primitives(['background', 'amountOfPersonalDiscounts']),
                                ),
                                a = (0, tt.Om)((u) => {
                                    const e = (function (u, e) {
                                        for (let t = 0; t < u.length; t++) {
                                            const n = Ge(u[t]);
                                            if (e(n, t, u)) return n;
                                        }
                                    })(n.get(), (e) => e.currencyType === u);
                                    return e ? e.value : 0;
                                });
                            e.subscribe(
                                (0, Pe.aD)(() => i.discount.set(r())),
                                'discount',
                            );
                            const s = (0, tt.Om)(() => a(et.gold)),
                                o = (0, tt.Om)(() => a(et.credits)),
                                c = (0, tt.Om)(() => [
                                    { currencyType: et.gold, value: s() - i.goldToExchange.get() },
                                    { currencyType: et.credits, value: o() + i.creditsFromExchange.get() },
                                ]),
                                l = (0, tt.Om)(() => i.maximumCredits.get()),
                                E = (0, tt.Om)(() => i.maximumGold.get()),
                                _ = (0, tt.Om)(() => {
                                    const u = i.discount.get();
                                    return (
                                        !(!u || 'limited' !== u.type) && u.availableAmount.gold < i.goldToExchange.get()
                                    );
                                });
                            return Object.assign({}, i, {
                                computes: {
                                    afterExchange: c,
                                    gold: { balance: s, maximum: E },
                                    credits: { balance: o, maximum: l },
                                    exceeded: _,
                                },
                            });
                        },
                        ({ externalModel: u, model: e }) => ({
                            close: u.createCallbackNoArgs('onClose'),
                            openAllDiscounts: u.createCallbackNoArgs('onOpenAllDiscountsWindow'),
                            exchange: u.createCallback(() => ({ gold: e.goldToExchange.get() }), 'onExchange'),
                            setGold: u.createCallback(
                                (u) => ({ gold: Math.min(u, e.computes.gold.maximum()) }),
                                'onSelectedValueUpdated',
                            ),
                            setCredits: u.createCallback(
                                (u) => ({ currency: Math.min(u, e.computes.credits.maximum()) }),
                                'onSelectedValueUpdated',
                            ),
                        }),
                    ),
                    rt = nt[0],
                    it = nt[1],
                    at = 'App_base_0a',
                    st = 'App_rateInfo_e7',
                    ot = 'App_divider_73',
                    ct = 'App_exceeded_e4',
                    lt = 'FormatText_base_d0',
                    Et = ({ binding: u, text: e = '', classMix: t, alignment: i = wu.left, formatWithBrackets: a }) => {
                        if (null === e) return (console.error("FormatText was supplied with 'null'"), null);
                        const s = a && u ? Su(e, u) : e;
                        return r().createElement(
                            n.Fragment,
                            null,
                            s.split('\n').map((e, a) =>
                                r().createElement(
                                    'div',
                                    { className: A()(lt, t), key: `${e}-${a}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : ku(u, e))))(
                                        e,
                                        i,
                                        u,
                                    ).map((u, e) => r().createElement(n.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    };
                function _t(u, e, t, n) {
                    let r,
                        i = !1,
                        a = 0;
                    function s() {
                        r && clearTimeout(r);
                    }
                    function o(...o) {
                        const c = this,
                            l = Date.now() - a;
                        function E() {
                            ((a = Date.now()), t.apply(c, o));
                        }
                        i ||
                            (n && !r && E(),
                            s(),
                            void 0 === n && l > u
                                ? E()
                                : !0 !== e &&
                                  (r = setTimeout(
                                      n
                                          ? function () {
                                                r = void 0;
                                            }
                                          : E,
                                      void 0 === n ? u - l : u,
                                  )));
                    }
                    return (
                        'boolean' != typeof e && ((n = t), (t = e), (e = void 0)),
                        (o.cancel = function () {
                            (s(), (i = !0));
                        }),
                        o
                    );
                }
                function dt(u, e, t, r = !1) {
                    const i = (0, n.useMemo)(
                        () =>
                            (function (u, e, t) {
                                return void 0 === t ? _t(u, e, !1) : _t(u, t, !1 !== e);
                            })(t, r, u),
                        e,
                    );
                    return ((0, n.useEffect)(() => i.cancel, [i]), i);
                }
                const mt = (u, e = Y.B3.INTEGRAL) => Y.Z5.getNumberFormat(u, e);
                t(368);
                let At;
                !(function (u) {
                    ((u[(u.ZERO = 48)] = 'ZERO'),
                        (u[(u.ONE = 49)] = 'ONE'),
                        (u[(u.TWO = 50)] = 'TWO'),
                        (u[(u.THREE = 51)] = 'THREE'),
                        (u[(u.FOUR = 52)] = 'FOUR'),
                        (u[(u.FIVE = 53)] = 'FIVE'),
                        (u[(u.SIX = 54)] = 'SIX'),
                        (u[(u.SEVEN = 55)] = 'SEVEN'),
                        (u[(u.EIGHT = 56)] = 'EIGHT'),
                        (u[(u.NINE = 57)] = 'NINE'),
                        (u[(u.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                        (u[(u.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                        (u[(u.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                        (u[(u.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                        (u[(u.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                        (u[(u.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                        (u[(u.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                        (u[(u.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                        (u[(u.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                        (u[(u.NUMPAD_9 = 105)] = 'NUMPAD_9'));
                })(At || (At = {}));
                const Ft = {
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
                class Dt extends r().PureComponent {
                    constructor(...u) {
                        (super(...u),
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
                                        const u = this.formattedValue.length;
                                        this.input.current && this.input.current.setSelectionRange(u, u);
                                    }, 0)),
                                    document.addEventListener('click', this.handleClickOutside),
                                    document.addEventListener('mouseup', this.handleMouseUp));
                            }),
                            (this.componentWillUnmount = () => {
                                (this.stop(),
                                    document.removeEventListener('click', this.handleClickOutside),
                                    document.removeEventListener('mouseup', this.handleMouseUp));
                            }),
                            (this.formatValue = (u) =>
                                this.props.currencyType ? Y.Z5.getNumberFormat(u, Y.B3.GOLD) : u.toString()),
                            (this.getValidValue = (u) => {
                                const e = Math.min(this.props.maximum, Math.max(this.props.minimum, u));
                                return this.props.onValidValue
                                    ? this.props.onValidValue(e)
                                    : Math.round(e / this.props.stepSize) * this.props.stepSize;
                            }),
                            (this.changeValue = (u) => {
                                u !== this.state.value && (this.setState({ value: u }), this.props.onChange(u));
                            }),
                            (this.setCursorPosition = (u, e) => {
                                (this.input.current && this.input.current.setSelectionRange(u, e),
                                    setTimeout(() => {
                                        this.input.current && this.input.current.setSelectionRange(u, e);
                                    }));
                            }),
                            (this.handleChange = () => {
                                this.props.isDisabled || this.updateInput();
                            }),
                            (this.updateInput = (u = 0) => {
                                const e = u === P.n.BACKSPACE,
                                    t = u === P.n.DELETE,
                                    n = this.input.current,
                                    r = n.selectionStart || 0,
                                    i = n.selectionEnd || 0;
                                let a = n.value;
                                const s = Math.max(r, i),
                                    o = s;
                                (t && (a = a.substring(0, s) + a.substring(s + 1, a.length)),
                                    e && 1 === r && 1 === a.length && (a = '0'));
                                const c = Number(a.trim().replace(/\D/g, '')),
                                    l = Number.isSafeInteger(c) ? c : Number.MAX_SAFE_INTEGER,
                                    E = this.props.currencyType ? Y.Z5.getNumberFormat(l, Y.B3.GOLD) : l.toString(),
                                    _ = !isNaN(Number(a.replace(' ', '')));
                                n.value = E;
                                const d = new RegExp(/\d/g);
                                let m = 0;
                                for (let u = 0; u < o; u++) {
                                    const e = a[u] || '',
                                        t = E[m] || '';
                                    if (e.match(d) || e === t) {
                                        for (; e !== E[m] && m < E.length; ) m++;
                                        m++;
                                    }
                                }
                                ('' === a ? (m = 1) : _ || (m = a.length),
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
                            (this.handleDelete = (u) => {
                                const e = u.keyCode === P.n.BACKSPACE,
                                    t = u.keyCode === P.n.DELETE,
                                    n = u.target,
                                    r = n.selectionStart,
                                    i = n.selectionEnd,
                                    a = n.value,
                                    s = r !== i,
                                    o = new RegExp(/\D/),
                                    c = e && r ? r - 1 : r || 0;
                                if (s) return;
                                let l = c;
                                const E = o.test(a[c]);
                                if (t && E) for (; o.test(a[l]) && l < a.length; ) l++;
                                if (e && E) for (; o.test(a[l]) && l > 0; ) l--;
                                if (l !== c || (e && E))
                                    return (u.preventDefault(), (l = l < 0 ? 0 : l), void this.setCursorPosition(l, l));
                                ((e && 1 === r && 1 === a.length) || t) &&
                                    (u.preventDefault(), this.updateInput(u.keyCode));
                            }),
                            (this.handleClickOutside = (u) => {
                                const e = document.activeElement;
                                this.state.isFocused &&
                                    e !== this.input.current &&
                                    null !== this.numericalStepper.current &&
                                    !this.numericalStepper.current.contains(u.target) &&
                                    this.setState({ isFocused: !1 });
                            }),
                            (this.handleBlur = () => {
                                if (this.props.isDisabled) return;
                                const u = this.getValidValue(this.state.value);
                                u !== this.state.value && this.changeValue(u);
                            }),
                            (this.handleWheel = (u) => {
                                if (this.props.isDisabled || !this.state.isFocused) return;
                                u.preventDefault();
                                u.deltaY < 0 ? this.decrement() : this.increment();
                            }),
                            (this.handleMouseUp = () => {
                                (this.stop(), this.setState({ activeIncrement: !1, activeDecrement: !1 }));
                            }),
                            (this.handleMouseLeave = () => {
                                this.stop();
                            }),
                            (this.incrementHandleMouseEnter = (u) => {
                                (this.state.activeIncrement && this.incrementHandleMouseDown(u, !0),
                                    this.buttonIncrementIsDisabled || this.playHoverSound());
                            }),
                            (this.decrementHandleMouseEnter = (u) => {
                                (this.state.activeDecrement && this.decrementHandleMouseDown(u, !0),
                                    this.buttonDecrementIsDisabled || this.playHoverSound());
                            }),
                            (this.handleKeyDown = (u) => {
                                if (!this.props.isDisabled) {
                                    switch (
                                        (u.keyCode in P.n &&
                                            u.keyCode !== P.n.BACKSPACE &&
                                            u.keyCode !== P.n.DELETE &&
                                            u.preventDefault(),
                                        u.keyCode)
                                    ) {
                                        case P.n.ARROW_UP:
                                        case P.n.NUM_PLUS:
                                        case P.n.PLUS:
                                            (this.state.activeIncrement || this.setState({ activeIncrement: !0 }),
                                                this.increment());
                                            break;
                                        case P.n.ARROW_DOWN:
                                        case P.n.NUM_MINUS:
                                        case P.n.MINUS:
                                            (this.state.activeDecrement || this.setState({ activeDecrement: !0 }),
                                                this.decrement());
                                            break;
                                        case P.n.HOME:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case P.n.END:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case P.n.ENTER:
                                            if (
                                                (u.nativeEvent.stopImmediatePropagation(),
                                                this.state.value >= this.props.maximum)
                                            ) {
                                                const u = this.formatValue(this.props.maximum).length;
                                                (this.changeValue(this.props.maximum), this.setCursorPosition(0, u));
                                            }
                                            break;
                                        case P.n.PAGE_UP:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case P.n.PAGE_DOWN:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case P.n.BACKSPACE:
                                        case P.n.DELETE:
                                            this.handleDelete(u);
                                    }
                                    this.props.onKeyDown(u);
                                }
                            }),
                            (this.handleKeyUp = (u) => {
                                if (!this.props.isDisabled)
                                    switch (u.keyCode) {
                                        case P.n.ARROW_UP:
                                        case P.n.NUM_PLUS:
                                        case P.n.PLUS:
                                            this.setState({ activeIncrement: !1 });
                                            break;
                                        case P.n.ARROW_DOWN:
                                        case P.n.NUM_MINUS:
                                        case P.n.MINUS:
                                            this.setState({ activeDecrement: !1 });
                                    }
                            }),
                            (this.allowOnlyNumbers = (u) => {
                                u.which in At || u.preventDefault();
                            }),
                            (this.increment = () => {
                                const u = this.props.onIncrement ? this.props.onIncrement() : this.props.stepSize,
                                    e = Math.min(this.getValidValue(this.state.value) + u, this.props.maximum);
                                this.changeValue(e);
                            }),
                            (this.decrement = () => {
                                const u = this.props.onDecrement ? this.props.onDecrement() : this.props.stepSize,
                                    e = Math.max(this.getValidValue(this.state.value) - u, this.props.minimum);
                                this.changeValue(e);
                            }),
                            (this.incrementHandleMouseDown = (u, e = !1) => {
                                this.buttonIncrementIsDisabled ||
                                    (u.persist(),
                                    this.stop(),
                                    this.setFocusOnInput(),
                                    this.state.value < this.props.maximum &&
                                        (!e && this.playClickSound(),
                                        (0 === u.button || e) &&
                                            (this.increment(),
                                            (this.timer = setTimeout(
                                                () => {
                                                    this.incrementHandleMouseDown(u, !0);
                                                },
                                                e ? 50 : 300,
                                            )),
                                            this.setState({ activeIncrement: !0 }))));
                            }),
                            (this.decrementHandleMouseDown = (u, e = !1) => {
                                this.buttonDecrementIsDisabled ||
                                    (u.persist(),
                                    this.stop(),
                                    this.setFocusOnInput(),
                                    this.state.value > this.props.minimum &&
                                        (!e && this.playClickSound(),
                                        (0 === u.button || e) &&
                                            (this.decrement(),
                                            (this.timer = setTimeout(
                                                () => {
                                                    this.decrementHandleMouseDown(u, !0);
                                                },
                                                e ? 50 : 300,
                                            )),
                                            this.setState({ activeDecrement: !0 }))));
                            }),
                            (this.playHoverSound = () => {
                                this.props.isDisabled || Fe('highlight');
                            }),
                            (this.playClickSound = () => {
                                this.props.isDisabled || Fe('yes');
                            }),
                            (this.stop = () => {
                                (this.timer && clearTimeout(this.timer), (this.timer = null));
                            }));
                    }
                    componentDidUpdate(u, e) {
                        const t = this.state,
                            n = t.value,
                            r = t.isFocused;
                        if (n !== e.value && r) {
                            const u = this.formattedValue.length,
                                e = this.input.current && this.input.current.selectionStart,
                                t = this.input.current && this.input.current.selectionEnd,
                                n = e === t ? u : e || 0;
                            0 === e && t === u
                                ? this.input.current && this.input.current.setSelectionRange(u, u)
                                : this.input.current && this.input.current.setSelectionRange(n, u);
                        }
                    }
                    componentWillReceiveProps({ value: u, isFocused: e }) {
                        (this.setState({ value: u }),
                            e !== this.props.isFocused &&
                                (this.setState({ isFocused: e }),
                                e
                                    ? (this.setFocusOnInput(), this.setCursorPosition(0, this.formattedValue.length))
                                    : this.blurInput()));
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
                        const u = this.props,
                            e = u.isDisabled,
                            t = u.size,
                            n = u.currencyType,
                            i = A()(
                                Ft.base,
                                Ft[`base__${t}`],
                                n && Ft[`base__withCurrency-${t}`],
                                e && Ft.base__isDisabled,
                                this.state.isFocused && Ft.base__isFocus,
                            ),
                            a = A()(
                                Ft.buttonIncrement,
                                Ft[`buttonIncrement__${t}`],
                                this.buttonIncrementIsDisabled && Ft.buttonIncrement__isDisabled,
                                this.state.activeIncrement &&
                                    !this.buttonIncrementIsDisabled &&
                                    Ft[`buttonIncrement__isActive-${this.props.size}`],
                            ),
                            s = A()(
                                Ft.buttonDecrement,
                                Ft[`buttonDecrement__${t}`],
                                this.buttonDecrementIsDisabled && Ft.buttonDecrement__isDisabled,
                                this.state.activeDecrement &&
                                    !this.buttonDecrementIsDisabled &&
                                    Ft[`buttonDecrement__isActive-${this.props.size}`],
                            ),
                            o = A()(
                                Ft.input,
                                e && Ft.input__disabled,
                                n && Ft.input__withCurrency,
                                n && Ft[`input__${n}-${t}`],
                                n && Ft[`input__${n}`],
                                !1 === this.props.isValid && Ft.input__error,
                                n && e && Ft[`input__${n}-disabled`],
                            ),
                            c = A()(Ft.currencyIcon, n && Ft[`currencyIcon__${n}-${t}`]),
                            l = A()(Ft.currency, n && Ft[`currency__${n}`], n && Ft[`currency__${n}-${t}`]);
                        return r().createElement(
                            'div',
                            {
                                className: i,
                                ref: this.numericalStepper,
                                style: ((E = this.props.width), E ? { width: `${E}rem` } : {}),
                            },
                            r().createElement(
                                'div',
                                { className: Ft.inputContainer },
                                n &&
                                    r().createElement(
                                        'div',
                                        { className: l },
                                        r().createElement('span', { className: Ft.dummyValue }, this.formattedValue),
                                        r().createElement('span', { className: c }),
                                    ),
                                r().createElement('input', {
                                    ref: this.input,
                                    className: o,
                                    type: 'text',
                                    value: this.formattedValue,
                                    disabled: e,
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
                                { className: Ft.control },
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
                        var E;
                    }
                }
                Dt.defaultProps = {
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
                const Ct = 'CurrencyStepper_base_8f',
                    ht = 'CurrencyStepper_label_9b',
                    pt = 'CurrencyStepper_limit_7c',
                    Bt = 'CurrencyStepper_limitIcon_bf',
                    gt = 'CurrencyStepper_limit__exceeded_5d',
                    vt = 'CurrencyStepper_limit__right_08',
                    bt = 'CurrencyStepper_limitWrapper__enter_90',
                    ft = 'CurrencyStepper_limitWrapper__exit_15',
                    yt = 'CurrencyStepper_restriction_67',
                    xt = 'CurrencyStepper_restrictionIcon_6f',
                    wt = 'CurrencyStepper_restrictionIconGlow_02',
                    St = ['label', 'limit', 'limitPosition', 'onLimitClick', 'onChange'];
                function Lt() {
                    return (
                        (Lt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Lt.apply(this, arguments)
                    );
                }
                const Nt = R.strings.personal_exchange_rates.common,
                    Mt = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeLimitTooltip('resId') },
                    It = { enter: bt, exit: ft },
                    Tt = (u) => {
                        let e = u.label,
                            t = u.limit,
                            i = u.limitPosition,
                            a = u.onLimitClick,
                            s = u.onChange,
                            o = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(u);
                                for (n = 0; n < i.length; n++) ((t = i[n]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                                return r;
                            })(u, St);
                        const c = t && o.value > t,
                            l = (0, n.useState)(!1)[1],
                            E = dt(
                                (u) => {
                                    (s(u), O(() => l((u) => !u)));
                                },
                                [s],
                                1e3,
                            );
                        return r().createElement(
                            'div',
                            { className: Ct },
                            e && r().createElement('div', { className: ht }, e),
                            r().createElement(Dt, Lt({ size: 'large', width: 210, onChange: E }, o)),
                            t &&
                                !a &&
                                r().createElement(
                                    $.Z,
                                    { component: r().Fragment },
                                    r().createElement(
                                        X.Z,
                                        { key: String(c), timeout: 250, classNames: It },
                                        r().createElement(
                                            cu,
                                            { tooltipArgs: Mt, className: A()(pt, 'right' === i && vt, c && gt) },
                                            r().createElement(
                                                r().Fragment,
                                                null,
                                                c
                                                    ? r().createElement(Et, { text: Nt.limitExceeded() })
                                                    : r().createElement(Et, {
                                                          text: Nt.limit(),
                                                          binding: { value: mt(t) },
                                                      }),
                                                r().createElement('div', { className: Bt }),
                                            ),
                                        ),
                                    ),
                                ),
                            a &&
                                r().createElement(
                                    'div',
                                    { className: A()(pt, 'right' === i && vt) },
                                    r().createElement(q, {
                                        caption: Nt.limitRestrictions(),
                                        type: 'close',
                                        side: 'left',
                                        onClick: a,
                                        classNames: { base: yt, icon: xt, glow: wt },
                                    }),
                                ),
                        );
                    },
                    Ot = 'Inputs_base_07',
                    Pt = 'Inputs_arrow_2b',
                    kt = R.strings.personal_exchange_rates.goldExchange,
                    Rt = (0, G.Pi)(() => {
                        const u = it(),
                            e = u.model,
                            t = u.controls,
                            n = 0 === e.computes.gold.balance();
                        return r().createElement(
                            'div',
                            { className: Ot },
                            r().createElement(Tt, {
                                currencyType: I.gold,
                                label: kt.paid(),
                                maximum: e.computes.gold.maximum(),
                                stepSize: 1,
                                onChange: t.setGold,
                                value: e.goldToExchange.get(),
                                onValidValue: (u) => u,
                                onIncrement: () => (t.setGold(e.goldToExchange.get() + 1), 0),
                                onDecrement: () => (t.setGold(e.goldToExchange.get() - 1), 0),
                                isDisabled: n,
                                isFocused: !1,
                            }),
                            r().createElement('div', { className: Pt }),
                            r().createElement(Tt, {
                                currencyType: I.credits,
                                label: kt.received(),
                                maximum: e.computes.credits.maximum(),
                                stepSize: 1,
                                onChange: t.setCredits,
                                value: e.creditsFromExchange.get(),
                                onValidValue: (u) => u,
                                onIncrement: () => (t.setGold(e.goldToExchange.get() + 1), 0),
                                onDecrement: () => (t.setGold(e.goldToExchange.get() - 1), 0),
                                isDisabled: n,
                                isFocused: !0,
                            }),
                        );
                    }),
                    Ht = (0, G.Pi)(() => {
                        const u = it(),
                            e = u.model,
                            t = u.controls;
                        return (
                            V(),
                            r().createElement(
                                ut,
                                { onClose: t.close, backgroundImage: e.background.get() || void 0 },
                                r().createElement(
                                    'div',
                                    { className: at },
                                    r().createElement(me, {
                                        primaryCurrency: I.gold,
                                        rate: e.exchangeRate.get(),
                                        discount: e.discount.get(),
                                        className: st,
                                        amountOfPersonalDiscounts: e.amountOfPersonalDiscounts.get(),
                                        exceeded: e.computes.exceeded(),
                                    }),
                                    r().createElement('div', { className: ot }),
                                    r().createElement(Rt, null),
                                    r().createElement(Bu, {
                                        className: ct,
                                        exceeded: e.computes.exceeded(),
                                        amountOfPersonalDiscounts: e.amountOfPersonalDiscounts.get(),
                                        onClick: t.openAllDiscounts,
                                    }),
                                    r().createElement(Le, {
                                        onExchange: t.exchange,
                                        onClose: t.close,
                                        disabled: !e.goldToExchange.get(),
                                        currenciesAfterExchange: e.computes.afterExchange(),
                                    }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    N().render(
                        r().createElement(S, null, r().createElement(rt, null, r().createElement(Ht, null))),
                        document.getElementById('root'),
                    );
                });
            },
            363: (u) => {
                'use strict';
                u.exports = React;
            },
            533: (u) => {
                'use strict';
                u.exports = ReactDOM;
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var t = (__webpack_module_cache__[u] = { exports: {} });
        return (__webpack_modules__[u](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, n) => {
            if (!e) {
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [e, t, n] = deferred[o], i = !0, a = 0; a < e.length; a++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[a]))
                            ? e.splice(a--, 1)
                            : ((i = !1), n < r && (r = n));
                    if (i) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (u = s);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [e, t, n];
        }),
        (__webpack_require__.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return (__webpack_require__.d(e, { a: e }), e);
        }),
        (__webpack_require__.d = (u, e) => {
            for (var t in e)
                __webpack_require__.o(e, t) &&
                    !__webpack_require__.o(u, t) &&
                    Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (__webpack_require__.r = (u) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 }));
        }),
        (__webpack_require__.j = 107),
        (() => {
            var u = { 107: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        r,
                        [i, a, s] = t,
                        o = 0;
                    if (i.some((e) => 0 !== u[e])) {
                        for (n in a) __webpack_require__.o(a, n) && (__webpack_require__.m[n] = a[n]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (e && e(t); o < i.length; o++)
                        ((r = i[o]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0));
                    return __webpack_require__.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [674], () => __webpack_require__(524));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
