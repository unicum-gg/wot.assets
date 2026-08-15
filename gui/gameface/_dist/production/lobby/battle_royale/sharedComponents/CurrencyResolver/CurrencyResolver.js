(() => {
    var __webpack_modules__ = {
            483: (e, n) => {
                var t;
                !(function () {
                    'use strict';
                    var r = {}.hasOwnProperty;
                    function i() {
                        for (var e = [], n = 0; n < arguments.length; n++) {
                            var t = arguments[n];
                            if (t) {
                                var o = typeof t;
                                if ('string' === o || 'number' === o) e.push(t);
                                else if (Array.isArray(t) && t.length) {
                                    var a = i.apply(null, t);
                                    a && e.push(a);
                                } else if ('object' === o) for (var _ in t) r.call(t, _) && t[_] && e.push(_);
                            }
                        }
                        return e.join(' ');
                    }
                    e.exports
                        ? ((i.default = i), (e.exports = i))
                        : void 0 ===
                              (t = function () {
                                  return i;
                              }.apply(n, [])) || (e.exports = t);
                })();
            },
            329: (e, n, t) => {
                'use strict';
                let r, i, o;
                (t.d(n, { V2: () => i, et: () => r, we: () => o }),
                    (function (e) {
                        ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(i || (i = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(o || (o = {})));
            },
            294: (e, n, t) => {
                'use strict';
                t.d(n, { O: () => ue });
                var r = {};
                (t.r(r),
                    t.d(r, { mouse: () => g, off: () => d, on: () => u, onResize: () => c, onScaleUpdated: () => l }));
                var i = {};
                (t.r(i),
                    t.d(i, {
                        events: () => r,
                        getMouseGlobalPosition: () => y,
                        getSize: () => p,
                        graphicsQuality: () => h,
                        playSound: () => E,
                        setRTPC: () => m,
                    }));
                var o = {};
                (t.r(o), t.d(o, { getBgUrl: () => L, getTextureUrl: () => T }));
                var a = {};
                function _(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function s(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                (t.r(a),
                    t.d(a, {
                        addModelObserver: () => q,
                        addPreloadTexture: () => I,
                        arabic2roman: () => ie,
                        children: () => o,
                        displayStatus: () => x,
                        displayStatusIs: () => ae,
                        enableFullScreenModeSupported: () => ce,
                        events: () => M,
                        extraSize: () => _e,
                        forceTriggerMouseMove: () => ne,
                        freezeTextureBeforeResize: () => j,
                        getBrowserTexturePath: () => z,
                        getDisplayStatus: () => te,
                        getExternalPaddingsRem: () => oe,
                        getFontNames: () => re,
                        getScale: () => H,
                        getSize: () => X,
                        getViewGlobalPosition: () => W,
                        initExternalPaddings: () => le,
                        isEventHandled: () => ee,
                        isFocused: () => Q,
                        pxToRem: () => Y,
                        remToPx: () => $,
                        resize: () => K,
                        sendEvent: () => V,
                        setAnimateWindow: () => Z,
                        setEventHandled: () => J,
                        setInputPaddingsRem: () => U,
                        setSidePaddingsRem: () => G,
                        whenTutorialReady: () => se,
                    }));
                const c = _('clientResized'),
                    l = _('self.onScaleUpdated'),
                    u = (e, n) => engine.on(e, n),
                    d = (e, n) => engine.off(e, n),
                    v = { down: _('mousedown'), up: _('mouseup'), move: _('mousemove') };
                const g = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && s(!1);
                    }
                    function t() {
                        e.enabled && s(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', n),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', n),
                                  document.body.addEventListener('mouseleave', t))
                            : s(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const o = `mouse${n}`,
                                        a = v[n]((e) => t([e, 'outside']));
                                    function _(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, _),
                                        r(),
                                        () => {
                                            i &&
                                                (a(),
                                                window.removeEventListener(o, _),
                                                (e.listeners -= 1),
                                                r(),
                                                (i = !1));
                                        }
                                    );
                                };
                            })(t)),
                            n
                        ),
                        {},
                    );
                    return Object.assign({}, i, {
                        disable() {
                            ((e.enabled = !1), r());
                        },
                        enable() {
                            ((e.enabled = !0), r());
                        },
                        enableOutside() {
                            e.enabled && s(!0);
                        },
                        disableOutside() {
                            e.enabled && s(!1);
                        },
                    });
                })();
                function E(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function m(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function y(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const h = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    w = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    b = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    C = Object.keys(b).reduce((e, n) => ((e[n] = () => E(b[n])), e), {}),
                    f = { play: Object.assign({}, C, { sound: E }), setRTPC: m },
                    P = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    O = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function k(e) {
                    let n = '';
                    for (let t = O.length - 1; t >= 0; t--) for (; e >= O[t];) ((n += P[t]), (e -= O[t]));
                    return n;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function T(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function L(e, n, t) {
                    return `url(${T(e, n, t)})`;
                }
                const x = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    M = {
                        onTextureFrozen: _('self.onTextureFrozen'),
                        onTextureReady: _('self.onTextureReady'),
                        onDomBuilt: _('self.onDomBuilt'),
                        onLoaded: _('self.onLoaded'),
                        onDisplayChanged: _('self.onShowingStatusChanged'),
                        onFocusUpdated: _('self.onFocusChanged'),
                        children: {
                            onAdded: _('children.onAdded'),
                            onLoaded: _('children.onLoaded'),
                            onRemoved: _('children.onRemoved'),
                            onAttached: _('children.onAttached'),
                            onTextureReady: _('children.onTextureReady'),
                            onRequestPosition: _('children.requestPosition'),
                        },
                    },
                    S = ['args'];
                const N = 2,
                    A = 16,
                    D = 32,
                    F = 64,
                    B = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const i = n.args,
                                o = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        i = {},
                                        o = Object.keys(e);
                                    for (r = 0; r < o.length; r++) ((t = o[r]), n.indexOf(t) >= 0 || (i[t] = e[t]));
                                    return i;
                                })(n, S);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((r = i),
                                              Object.entries(r).map(([e, n]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof n) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: n };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: n };
                                                      default:
                                                          return { __Type: t, name: e, string: n.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    V = {
                        close(e) {
                            B('popover' === e ? N : D);
                        },
                        minimize() {
                            B(F);
                        },
                        move(e) {
                            B(A, { isMouseEvent: !0, on: e });
                        },
                    };
                function I(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function U(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function z(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function q(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function G(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function X(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function K(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function W(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: $(n.x), y: $(n.y) };
                }
                function j() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function H() {
                    return viewEnv.getScale();
                }
                function Y(e) {
                    return viewEnv.pxToRem(e);
                }
                function $(e) {
                    return viewEnv.remToPx(e);
                }
                function Z(e, n) {
                    viewEnv.setAnimateWindow(e, n);
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
                function ne() {
                    viewEnv.forceTriggerMouseMove();
                }
                function te() {
                    return viewEnv.getShowingStatus();
                }
                const re = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ie = k;
                function oe() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const ae = Object.keys(x).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === x[n]), e), {}),
                    _e = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    se = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : M.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function ce() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function le(e) {
                    function n() {
                        const n = viewEnv.getExternalPaddingsRem(),
                            t = n.top,
                            r = n.right,
                            i = n.bottom,
                            o = n.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${r}rem`),
                            e.style.setProperty('--external-padding-bottom', `${i}rem`),
                            e.style.setProperty('--external-padding-left', `${o}rem`));
                    }
                    (n(), engine.on('self.onPaddingsUpdated', () => n()));
                }
                const ue = { view: a, client: i, sound: f, intl: w };
            },
            358: (e, n, t) => {
                'use strict';
                t.d(n, { Z: () => o });
                var r = t(294);
                class i {
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
                        return (window.__dataTracker || (window.__dataTracker = new i()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, n, t = 0, i = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const o = r.O.view.addModelObserver(e, t, i);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = n),
                                  t > 0 && (this._views[t] ? this._views[t].push(o) : (this._views[t] = [o])))
                                : console.error("Can't add callback for model:", e),
                            o
                        );
                    }
                    removeCallback(e, n = 0) {
                        let t = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((t = viewEnv.removeDataChangedCallback(e, n)), delete this._callbacks[e]),
                            t || console.error("Can't remove callback by id:", e),
                            t
                        );
                    }
                    _emmitDataChanged(e, n, t) {
                        t.forEach((t) => {
                            const r = this._callbacks[t];
                            void 0 !== r && r(e, n);
                        });
                    }
                }
                i.__instance = void 0;
                const o = i;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(596);
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
            596: (e, n, t) => {
                'use strict';
                t.d(n, { B3: () => c, Z5: () => a, ry: () => h });
                class r {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: n, callback: t }) => {
                                    let r = e.target;
                                    do {
                                        if (r === n) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(e, n) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: n }));
                    }
                    unregister(e, n) {
                        const t = e,
                            r = n;
                        ((this.entries = this.entries.filter(({ container: e, callback: n }) => e !== t || n !== r)),
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
                const i = r;
                var o = t(358);
                const a = {
                        getNumberFormat: (e, n) => systemLocale.getNumberFormat(e, n),
                        getRealFormat: (e, n) => systemLocale.getRealFormat(e, n),
                        getTimeFormat: (e, n) => systemLocale.getTimeFormat(e, n),
                        getDateFormat: (e, n) => systemLocale.getDateFormat(e, n),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    _ = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, n, t) => userLocale.getTimeFormat(e, n, void 0 === t || t),
                        getTimeString: (e, n, t) => userLocale.getTimeString(e, n, void 0 === t || t),
                    };
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
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                let v, g;
                (!(function (e) {
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
                })(v || (v = {})),
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
                    })(g || (g = {})));
                var E = t(294);
                const m = ['args'];
                function p(e, n, t, r, i, o, a) {
                    try {
                        var _ = e[o](a),
                            s = _.value;
                    } catch (e) {
                        return void t(e);
                    }
                    _.done ? n(s) : Promise.resolve(s).then(r, i);
                }
                const y = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    h = (function () {
                        var e,
                            n =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var n = this,
                                        t = arguments;
                                    return new Promise(function (r, i) {
                                        var o = e.apply(n, t);
                                        function a(e) {
                                            p(o, r, i, a, _, 'next', e);
                                        }
                                        function _(e) {
                                            p(o, r, i, a, _, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return n.apply(this, arguments);
                        };
                    })(),
                    w = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const i = n.args,
                                o = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        i = {},
                                        o = Object.keys(e);
                                    for (r = 0; r < o.length; r++) ((t = o[r]), n.indexOf(t) >= 0 || (i[t] = e[t]));
                                    return i;
                                })(n, m);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((r = i),
                                              Object.entries(r).map(([e, n]) => {
                                                  const t = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof n) {
                                                      case 'number':
                                                          t.number = n;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = n;
                                                          break;
                                                      default:
                                                          t.string = n.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    b = () => w(s.CLOSE),
                    C = (e, n) => {
                        e.keyCode === v.ESCAPE && n();
                    };
                var f = t(572);
                const P = i.instance,
                    O = {
                        DataTracker: o.Z,
                        ViewModel: f.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: l,
                        TimeFormatType: u,
                        DateFormatType: d,
                        makeGlobalBoundingBox: y,
                        sendMoveEvent: (e) => w(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => w(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, n, t = 0) => {
                            w(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: n });
                        },
                        sendShowPopOverEvent: (e, n, t, r, i = R.invalid('resId'), o) => {
                            const a = E.O.view.getViewGlobalPosition(),
                                _ = t.getBoundingClientRect(),
                                c = _.x,
                                l = _.y,
                                u = _.width,
                                d = _.height,
                                v = {
                                    x: E.O.view.pxToRem(c) + a.x,
                                    y: E.O.view.pxToRem(l) + a.y,
                                    width: E.O.view.pxToRem(u),
                                    height: E.O.view.pxToRem(d),
                                };
                            w(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: i,
                                direction: n,
                                bbox: y(v),
                                on: !0,
                                args: o,
                            });
                        },
                        addEscapeListener: (e) => {
                            const n = (n) => C(n, e);
                            return (
                                window.addEventListener('keydown', n),
                                () => window.removeEventListener('keydown', n)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, b);
                        },
                        handleViewEvent: w,
                        onBindingsReady: h,
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
                        dumpViewModel: function e(n) {
                            const t = {};
                            if ('object' != typeof n) return n;
                            for (const r in n)
                                if (Object.prototype.hasOwnProperty.call(n, r)) {
                                    const i = Object.prototype.toString.call(n[r]);
                                    if (i.startsWith('[object CoherentArrayProxy]')) {
                                        const i = n[r];
                                        t[r] = [];
                                        for (let n = 0; n < i.length; n++) t[r].push({ value: e(i[n].value) });
                                    } else
                                        i.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = e(n[r]))
                                            : (t[r] = n[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: P,
                        SystemLocale: a,
                        UserLocale: _,
                    };
                window.ViewEnvHelper = O;
            },
            363: (e) => {
                'use strict';
                e.exports = React;
            },
        },
        __webpack_module_cache__ = {};
    function __webpack_require__(e) {
        var n = __webpack_module_cache__[e];
        if (void 0 !== n) return n.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.n = (e) => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return (__webpack_require__.d(n, { a: n }), n);
    }),
        (__webpack_require__.d = (e, n) => {
            for (var t in n)
                __webpack_require__.o(n, t) &&
                    !__webpack_require__.o(e, t) &&
                    Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        }),
        (__webpack_require__.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (__webpack_require__.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }));
    var __webpack_exports__ = {};
    (() => {
        'use strict';
        var e = __webpack_require__(363),
            n = __webpack_require__.n(e),
            t = __webpack_require__(483),
            r = __webpack_require__.n(t),
            i = __webpack_require__(596);
        const o = ({ value: e, format: n = 'integral' }) => {
                const t = (function (e) {
                        return 'gold' === e ? i.B3.GOLD : i.B3.INTEGRAL;
                    })(n),
                    r = i.Z5.getNumberFormat(e, t);
                return void 0 !== e && void 0 !== r ? r : null;
            },
            a = {
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
            };
        var _ = __webpack_require__(329);
        const s = (0, e.memo)(
                ({
                    isDiscount: e,
                    isInteractiveDiscount: t,
                    size: i,
                    type: s,
                    value: c,
                    discountValue: l,
                    showPlus: u,
                    isEnough: d = !0,
                    stockBackgroundName: v = _.we.Red,
                    className: g,
                    classNames: E,
                }) =>
                    n().createElement(
                        'span',
                        { className: r()(a.base, a[`base__${i}`], g) },
                        n().createElement(
                            'span',
                            {
                                className: r()(
                                    a.value,
                                    a[`value__${s}`],
                                    !d && a.value__notEnough,
                                    null == E ? void 0 : E.value,
                                ),
                            },
                            u && c > 0 && '+',
                            n().createElement(o, { value: c, format: s === _.V2.gold ? 'gold' : 'integral' }),
                        ),
                        n().createElement('span', {
                            className: r()(a.icon, a[`icon__${s}-${i}`], null == E ? void 0 : E.icon),
                        }),
                        e &&
                            n().createElement(
                                'span',
                                {
                                    className: r()(
                                        a.stock,
                                        l && a.stock__indent,
                                        t && a.stock__interactive,
                                        null == E ? void 0 : E.stock,
                                    ),
                                },
                                n().createElement('span', {
                                    className: a.stockBackground,
                                    style: { backgroundImage: `url(R.images.gui.maps.icons.library.${v})` },
                                }),
                                Boolean(l) && l,
                            ),
                    ),
            ),
            c = {
                base: 'CurrencyResolver_base_11',
                base__insufficient: 'CurrencyResolver_base__insufficient_91',
                icon: 'CurrencyResolver_icon_12',
                stock: 'CurrencyResolver_stock_26',
                icon__small: 'CurrencyResolver_icon__small_31',
                icon__large: 'CurrencyResolver_icon__large_99',
                icon__extraLarge: 'CurrencyResolver_icon__extraLarge_ed',
                icon__big: 'CurrencyResolver_icon__big_94',
                value: 'CurrencyResolver_value_52',
                value__small: 'CurrencyResolver_value__small_7b',
                value__big: 'CurrencyResolver_value__big_6a',
                value__large: 'CurrencyResolver_value__large_eb',
                value__extraLarge: 'CurrencyResolver_value__extraLarge_94',
                value__notEnough: 'CurrencyResolver_value__notEnough_51',
                stock__indent: 'CurrencyResolver_stock__indent_ef',
                stock__sizeBig: 'CurrencyResolver_stock__sizeBig_86',
                stock__sizeLarge: 'CurrencyResolver_stock__sizeLarge_4f',
                stockBackground: 'CurrencyResolver_stockBackground_b3',
                stock__interactive: 'CurrencyResolver_stock__interactive_2c',
            },
            l = ({
                isDiscount: e,
                isInteractiveDiscount: t,
                size: i,
                typeCurrency: a,
                isEnough: l,
                value: u,
                discountValue: d,
                showPlus: v,
            }) => {
                const g = r()(c.value, c[`value__${i}`], !l && c.value__notEnough),
                    E = r()(c.icon, c[`icon__${i}`]),
                    m = r()(
                        c.stock,
                        d && c.stock__indent,
                        i === _.et.big && c.stock__sizeBig,
                        i === _.et.large && c.stock__sizeLarge,
                        t && c.stock__interactive,
                    ),
                    p = v && u > 0 && '+';
                return a in _.V2
                    ? n().createElement(s, {
                          size: i,
                          type: a,
                          value: u,
                          isDiscount: e,
                          isInteractiveDiscount: t,
                          isEnough: l,
                          discountValue: u,
                          showPlus: v,
                      })
                    : n().createElement(
                          'span',
                          { className: c.base },
                          n().createElement(
                              'span',
                              { className: g },
                              p,
                              n().createElement(o, { value: u, format: 'integral' }),
                          ),
                          n().createElement('span', { className: E }),
                          e &&
                              n().createElement(
                                  'span',
                                  { className: m },
                                  n().createElement('span', { className: c.stockBackground }),
                                  Boolean(d) && d,
                              ),
                      );
            };
        l.defaultProps = { isEnough: !0 };
        n().memo(l);
    })();
})();
