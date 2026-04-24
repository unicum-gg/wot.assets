(() => {
    var __webpack_modules__ = {
            184: (e) => {
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
            5034: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, {
                        mouse: () => u,
                        off: () => c,
                        on: () => l,
                        onMinimize: () => s,
                        onResize: () => a,
                        onScaleUpdated: () => o,
                    }));
                var r = n(8277),
                    i = n(1708);
                const a = (0, r.E)('clientResized'),
                    o = (0, r.E)('self.onScaleUpdated'),
                    s = (0, r.E)('clientMinimized'),
                    l = (e, t) => engine.on(e, t),
                    c = (e, t) => engine.off(e, t),
                    d = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const u = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, i.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, i.R)(!0);
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
                            : (0, i.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const a = `mouse${t}`,
                                        o = d[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        r(),
                                        () => {
                                            i &&
                                                (o(),
                                                window.removeEventListener(a, s),
                                                (e.listeners -= 1),
                                                r(),
                                                (i = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            ((e.enabled = !1), r());
                        },
                        enable() {
                            ((e.enabled = !0), r());
                        },
                        enableOutside() {
                            e.enabled && (0, i.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, i.R)(!1);
                        },
                    });
                })();
            },
            3157: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => o,
                        getSize: () => a,
                        graphicsQuality: () => s,
                        playSound: () => i.G,
                        setRTPC: () => i.E,
                    }));
                var r = n(5034),
                    i = n(9703);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1708: (e, t, n) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => r });
            },
            9703: (e, t, n) => {
                'use strict';
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function i(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => i, G: () => r });
            },
            8277: (e, t, n) => {
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
            7475: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => o });
                var r = n(3157),
                    i = n(8133),
                    a = n(3925);
                const o = { view: n(7553), client: r, sound: a.ZP, intl: i.N };
            },
            8133: (e, t, n) => {
                'use strict';
                n.d(t, { N: () => r });
                const r = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            3925: (e, t, n) => {
                'use strict';
                n.d(t, { ZP: () => o });
                var r = n(3157);
                const i = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(i).reduce((e, t) => ((e[t] = () => (0, r.playSound)(i[t])), e), {}),
                    o = { play: Object.assign({}, a, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            5544: (e, t, n) => {
                'use strict';
                function r(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function i(e, t, n) {
                    return `url(${r(e, t, n)})`;
                }
                (n.r(t), n.d(t, { getBgUrl: () => i, getTextureUrl: () => r }));
            },
            3163: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            7576: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => i });
                var r = n(8277);
                const i = {
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
            7553: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => c,
                        arabic2roman: () => O,
                        children: () => i,
                        displayStatus: () => a.W,
                        displayStatusIs: () => P,
                        enableFullScreenModeSupported: () => I,
                        events: () => o.U,
                        extraSize: () => R,
                        forceTriggerMouseMove: () => S,
                        freezeTextureBeforeResize: () => w,
                        getBrowserTexturePath: () => u,
                        getDisplayStatus: () => M,
                        getExternalPaddingsRem: () => k,
                        getFontNames: () => T,
                        getScale: () => E,
                        getSize: () => g,
                        getViewGlobalPosition: () => v,
                        initExternalPaddings: () => A,
                        isEventHandled: () => y,
                        isFocused: () => x,
                        pxToRem: () => f,
                        remToPx: () => p,
                        resize: () => h,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => L,
                        setInputPaddingsRem: () => d,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => C,
                    }));
                var r = n(1308),
                    i = n(5544),
                    a = n(3163),
                    o = n(7576),
                    s = n(2319);
                const l = 15;
                function c(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, l);
                }
                function u(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function _(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, l);
                }
                function g(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function h(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function v(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: p(t.x), y: p(t.y) };
                }
                function w() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function E() {
                    return viewEnv.getScale();
                }
                function f(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function x() {
                    return viewEnv.isFocused();
                }
                function L() {
                    return viewEnv.setEventHandled();
                }
                function y() {
                    return viewEnv.isEventHandled();
                }
                function S() {
                    viewEnv.forceTriggerMouseMove();
                }
                function M() {
                    return viewEnv.getShowingStatus();
                }
                const T = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    O = r.cg;
                function k() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const P = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    R = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    C = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function I() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function A(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            n = t.top,
                            r = t.right,
                            i = t.bottom,
                            a = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${r}rem`),
                            e.style.setProperty('--external-padding-bottom', `${i}rem`),
                            e.style.setProperty('--external-padding-left', `${a}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            2319: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => c });
                const r = ['args'];
                const i = 2,
                    a = 16,
                    o = 32,
                    s = 64,
                    l = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (-1 !== t.indexOf(r)) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
                                })(t, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((i = a),
                                              Object.entries(i).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var i;
                    },
                    c = {
                        close(e) {
                            l('popover' === e ? i : o);
                        },
                        minimize() {
                            l(s);
                        },
                        move(e) {
                            l(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4020: (e, t, n) => {
                'use strict';
                n.d(t, { n: () => r });
                let r = (function (e) {
                    return (
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
                        e
                    );
                })({});
            },
            1308: (e, t, n) => {
                'use strict';
                n.d(t, { cg: () => a });
                const r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    i = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(e) {
                    let t = '';
                    for (let n = i.length - 1; n >= 0; n--) for (; e >= i[n]; ) ((t += r[n]), (e -= i[n]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            8973: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                var r = n(7475);
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
                    addCallback(e, t, n = 0, i = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(e, n, i);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(a) : (this._views[n] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                i.__instance = void 0;
                const a = i;
            },
            5533: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8973),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(828);
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
            828: (e, t, n) => {
                'use strict';
                n.d(t, { B0: () => s, ry: () => w });
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
                const i = r;
                var a = n(8973);
                var o = n(6609);
                let s = (function (e) {
                    return (
                        (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'),
                        e
                    );
                })({});
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(4020),
                    m = n(7475);
                const g = ['args'];
                function h(e, t, n, r, i, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(r, i);
                }
                const v = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    w = (function () {
                        var e,
                            t =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._ContentLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var t = this,
                                        n = arguments;
                                    return new Promise(function (r, i) {
                                        var a = e.apply(t, n);
                                        function o(e) {
                                            h(a, r, i, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            h(a, r, i, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    E = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (-1 !== t.indexOf(r)) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
                                })(t, g);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((r = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    f = () => E(s.CLOSE),
                    p = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var b = n(5533);
                const x = i.instance,
                    L = {
                        DataTracker: a.Z,
                        ViewModel: b.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: u,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => E(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => E(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            E(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, i = R.invalid('resId'), a) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                l = n.getBoundingClientRect(),
                                c = l.x,
                                d = l.y,
                                u = l.width,
                                _ = l.height,
                                g = {
                                    x: m.O.view.pxToRem(c) + o.x,
                                    y: m.O.view.pxToRem(d) + o.y,
                                    width: m.O.view.pxToRem(u),
                                    height: m.O.view.pxToRem(_),
                                };
                            E(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: i,
                                direction: t,
                                bbox: v(g),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => p(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, f);
                        },
                        handleViewEvent: E,
                        onBindingsReady: w,
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
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const i = Object.prototype.toString.call(t[r]);
                                    if (i.startsWith('[object CoherentArrayProxy]')) {
                                        const i = t[r];
                                        n[r] = [];
                                        for (let t = 0; t < i.length; t++) n[r].push({ value: e(i[t].value) });
                                    } else
                                        i.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[r] = e(t[r]))
                                            : (n[r] = t[r]);
                                }
                            return n;
                        },
                        ClickOutsideManager: x,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = L;
            },
            6609: (e, t, n) => {
                'use strict';
                n.d(t, { Z5: () => r, cy: () => i });
                const r = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t, n = 2) => systemLocale.getRealFormat(e, t, n),
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
            },
            8199: (e, t, n) => {
                'use strict';
                var r = n(7363),
                    i = n.n(r);
                const a = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
                var o = n(7475);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                function l(e = o.O.client.getSize('rem')) {
                    const t = e.width,
                        n = e.height;
                    return Object.assign(
                        { width: t, height: n },
                        (function (e, t, n) {
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
                                i = (function (e, t) {
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
                                a = Math.min(r, i);
                            return {
                                extraLarge: a === n.extraLarge.weight,
                                large: a === n.large.weight,
                                medium: a === n.medium.weight,
                                small: a === n.small.weight,
                                extraSmall: a === n.extraSmall.weight,
                                extraLargeWidth: r === n.extraLarge.weight,
                                largeWidth: r === n.large.weight,
                                mediumWidth: r === n.medium.weight,
                                smallWidth: r === n.small.weight,
                                extraSmallWidth: r === n.extraSmall.weight,
                                extraLargeHeight: i === n.extraLarge.weight,
                                largeHeight: i === n.large.weight,
                                mediumHeight: i === n.medium.weight,
                                smallHeight: i === n.small.weight,
                                extraSmallHeight: i === n.extraSmall.weight,
                            };
                        })(t, n, s),
                    );
                }
                const c = l(),
                    d = (0, r.createContext)(c),
                    u = ['children'];
                (0, r.memo)((e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (-1 !== t.indexOf(r)) continue;
                                    n[r] = e[r];
                                }
                            return n;
                        })(e, u);
                    const i = (0, r.useContext)(d),
                        o = i.extraLarge,
                        s = i.large,
                        l = i.medium,
                        c = i.small,
                        _ = i.extraSmall,
                        m = i.extraLargeWidth,
                        g = i.largeWidth,
                        h = i.mediumWidth,
                        v = i.smallWidth,
                        w = i.extraSmallWidth,
                        E = i.extraLargeHeight,
                        f = i.largeHeight,
                        p = i.mediumHeight,
                        b = i.smallHeight,
                        x = i.extraSmallHeight,
                        L = { extraLarge: E, large: f, medium: p, small: b, extraSmall: x };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && o) return t;
                        if (n.large && s) return t;
                        if (n.medium && l) return t;
                        if (n.small && c) return t;
                        if (n.extraSmall && _) return t;
                    } else {
                        if (n.extraLargeWidth && m) return a(t, n, L);
                        if (n.largeWidth && g) return a(t, n, L);
                        if (n.mediumWidth && h) return a(t, n, L);
                        if (n.smallWidth && v) return a(t, n, L);
                        if (n.extraSmallWidth && w) return a(t, n, L);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && E) return t;
                            if (n.largeHeight && f) return t;
                            if (n.mediumHeight && p) return t;
                            if (n.smallHeight && b) return t;
                            if (n.extraSmallHeight && x) return t;
                        }
                    }
                    return null;
                });
                const _ = ({ children: e }) => {
                    const t = (0, r.useState)(l),
                        n = t[0],
                        a = t[1],
                        s = (0, r.useState)(!1),
                        c = s[0],
                        u = s[1];
                    return (
                        (0, r.useLayoutEffect)(() => {
                            function e() {
                                a((e) => {
                                    const t = o.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : l(t);
                                });
                            }
                            return (
                                e(),
                                u(!0),
                                o.O.client.events.on('clientResized', e),
                                o.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (o.O.client.events.off('clientResized', e),
                                        o.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        i().createElement(d.Provider, { value: n }, c && e)
                    );
                };
                var m = n(9849),
                    g = n.n(m),
                    h = n(184),
                    v = n.n(h);
                let w = (function (e) {
                        return (
                            (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'),
                            e
                        );
                    })({}),
                    E = (function (e) {
                        return (
                            (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'),
                            e
                        );
                    })({}),
                    f = (function (e) {
                        return (
                            (e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge'),
                            e
                        );
                    })({});
                const p = () => {
                        const e = (0, r.useContext)(d),
                            t = e.width,
                            n = e.height,
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return w.ExtraLarge;
                                    case e.large:
                                        return w.Large;
                                    case e.medium:
                                        return w.Medium;
                                    case e.small:
                                        return w.Small;
                                    case e.extraSmall:
                                        return w.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), w.ExtraSmall);
                                }
                            })(e),
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return E.ExtraLarge;
                                    case e.largeWidth:
                                        return E.Large;
                                    case e.mediumWidth:
                                        return E.Medium;
                                    case e.smallWidth:
                                        return E.Small;
                                    case e.extraSmallWidth:
                                        return E.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), E.ExtraSmall);
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return f.ExtraLarge;
                                    case e.largeHeight:
                                        return f.Large;
                                    case e.mediumHeight:
                                        return f.Medium;
                                    case e.smallHeight:
                                        return f.Small;
                                    case e.extraSmallHeight:
                                        return f.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), f.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: i, mediaWidth: a, mediaHeight: o, remScreenWidth: t, remScreenHeight: n };
                    },
                    b = ['children', 'className'];
                function x() {
                    return (
                        (x = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        x.apply(null, arguments)
                    );
                }
                const L = {
                        [E.ExtraSmall]: '',
                        [E.Small]: v().SMALL_WIDTH,
                        [E.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [E.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [E.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    y = {
                        [f.ExtraSmall]: '',
                        [f.Small]: v().SMALL_HEIGHT,
                        [f.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [f.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [f.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    S = {
                        [w.ExtraSmall]: '',
                        [w.Small]: v().SMALL,
                        [w.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [w.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [w.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    M = (e) => {
                        let t = e.children,
                            n = e.className,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (-1 !== t.indexOf(r)) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, b);
                        const a = p(),
                            o = a.mediaWidth,
                            s = a.mediaHeight,
                            l = a.mediaSize;
                        return i().createElement('div', x({ className: g()(n, L[o], y[s], S[l]) }, r), t);
                    },
                    T = ['children'];
                const O = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (-1 !== t.indexOf(r)) continue;
                                    n[r] = e[r];
                                }
                            return n;
                        })(e, T);
                    return i().createElement(_, null, i().createElement(M, n, t));
                };
                var k = n(1533),
                    P = n.n(k);
                function C(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                var I = n(828);
                const A = [
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
                function H(e) {
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
                const D = (e, t, n = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: I.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                n,
                            ),
                        );
                    },
                    N = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            i = e.args,
                            a = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            c = e.ignoreShowDelay,
                            d = void 0 !== c && c,
                            u = e.ignoreMouseClick,
                            _ = void 0 !== u && u,
                            m = e.decoratorId,
                            g = void 0 === m ? 0 : m,
                            h = e.isEnabled,
                            v = void 0 === h || h,
                            w = e.targetId,
                            E = void 0 === w ? 0 : w,
                            f = e.onShow,
                            p = e.onHide,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (-1 !== t.indexOf(r)) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, A);
                        const x = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            L = (0, r.useMemo)(
                                () =>
                                    E ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let n,
                                            r = R.invalid('resId'),
                                            i = '';
                                        var a;
                                        return (
                                            t &&
                                                ((i =
                                                    (null == (a = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) ||
                                                    ''),
                                                (n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== n &&
                                                    window.subViews[n] &&
                                                    (r = window.subViews[n].id)),
                                            { callerUrl: i, caller: n, stack: t, resId: r }
                                        );
                                    })().resId,
                                [E],
                            ),
                            y = (0, r.useCallback)(() => {
                                (x.current.isVisible && x.current.timeoutId) ||
                                    (D(n, g, { isMouseEvent: !0, on: !0, arguments: H(i) }, L),
                                    f && f(),
                                    (x.current.isVisible = !0));
                            }, [n, g, i, L, f]),
                            S = (0, r.useCallback)(() => {
                                if (x.current.isVisible || x.current.timeoutId) {
                                    const e = x.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (x.current.timeoutId = 0)),
                                        D(n, g, { on: !1 }, L),
                                        x.current.isVisible && p && p(),
                                        (x.current.isVisible = !1));
                                }
                            }, [n, g, L, p]),
                            M = (0, r.useCallback)((e) => {
                                x.current.isVisible &&
                                    ((x.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (x.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(x.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        ((0, r.useEffect)(() => {
                            const e = x.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', M, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', M, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === v && S();
                            }, [v, S]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        (window.removeEventListener('mouseleave', S), S());
                                    }
                                ),
                                [S],
                            ));
                        return v
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(x.current.timeoutId),
                                                      (x.current.timeoutId = window.setTimeout(y, d ? 100 : 400)),
                                                      a && a(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (S(), null == o || o(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === _ && S(), null == l || l(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === _ && S(), null == s || s(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : t;
                        var T;
                    },
                    W = ({ tooltipArgs: e, children: t }) => (e ? i().createElement(N, e, t) : t),
                    U = 'PaginationRender_base_a81c5',
                    B = 'PaginationRender_base__completed_fc299',
                    G = 'PaginationRender_base__inaccessible_f4d4d',
                    V = 'PaginationRender_base__selected_e60f3',
                    F = 'PaginationRender_selectedImage_f0b4c',
                    j = ({
                        className: e,
                        index: t,
                        onClick: n,
                        isSelected: a,
                        isCompleted: o,
                        isInaccessible: s,
                        tooltipArgs: l,
                    }) => {
                        const c = g()(U, a && V, o && B, s && G, e),
                            d = (0, r.useCallback)(() => {
                                (n(t), C('yes1'));
                            }, [t, n]),
                            u = (0, r.useCallback)(() => {
                                C('highlight');
                            }, []);
                        return i().createElement(
                            W,
                            { tooltipArgs: l },
                            i().createElement(
                                'div',
                                { className: c, onClick: d, onMouseEnter: u },
                                a && i().createElement('span', { className: F }),
                                t + 1,
                            ),
                        );
                    },
                    $ = 'PaginationList_base_eac51',
                    z = 'PaginationList_item_c0ab7',
                    q = 'PaginationList_item__last_b0c5a';
                function K() {
                    return (
                        (K = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        K.apply(null, arguments)
                    );
                }
                const Y = ({ className: e, selectedStep: t, data: n, onChange: a }) => {
                        const o = n.length - 1,
                            s = g()($, e),
                            l = (0, r.useCallback)(
                                (e) => {
                                    a(e);
                                },
                                [a],
                            );
                        return i().createElement(
                            'div',
                            { className: s },
                            n.map((e, n) =>
                                i().createElement(
                                    j,
                                    K(
                                        {
                                            onClick: l,
                                            index: n,
                                            className: g()(z, n === o && q),
                                            isSelected: t === n,
                                            key: n,
                                        },
                                        e,
                                    ),
                                ),
                            ),
                        );
                    },
                    X = {
                        base: 'PaginationArrowButton_base_adcab',
                        icon: 'PaginationArrowButton_icon_d0c47',
                        icon__back: 'PaginationArrowButton_icon__back_aaeda',
                        icon__forward: 'PaginationArrowButton_icon__forward_d958d',
                        base__locked: 'PaginationArrowButton_base__locked_d7a97',
                    };
                let Z = (function (e) {
                    return ((e.Back = 'back'), (e.Forward = 'forward'), e);
                })({});
                const Q = ({ onClick: e, direction: t, isLocked: n, tooltipArgs: a, className: o }) => {
                        const s = g()(X.icon, X[`icon__${t}`]),
                            l = (0, r.useCallback)(() => {
                                n || (e(), C('play'));
                            }, [e, n]),
                            c = (0, r.useCallback)(() => {
                                n || C('highlight');
                            }, [n]),
                            d = g()(X.base, n && X.base__locked, o);
                        return i().createElement(
                            W,
                            { tooltipArgs: a },
                            i().createElement(
                                'div',
                                { className: d },
                                i().createElement('div', { className: s, onClick: l, onMouseEnter: c }),
                            ),
                        );
                    },
                    J = 'Pagination_base_c7c8a',
                    ee = 'Pagination_content_dcbcb',
                    te = 'Pagination_list_b60a1',
                    ne = ({ className: e, hasArrow: t, arrowOffset: n, selectedIndex: a, children: o }) => {
                        n = n || 0;
                        const s = (0, r.useMemo)(
                                () =>
                                    o.map((e) => ({
                                        isInaccessible: e.isInaccessible,
                                        isCompleted: e.isCompleted,
                                        tooltipArgs: e.tooltipArgs,
                                    })),
                                [o],
                            ),
                            l = o.length - 1,
                            c = (0, r.useMemo)(() => {
                                const e = s.findIndex((e) => void 0 === e.isInaccessible && void 0 === e.isCompleted);
                                return -1 === e ? 0 : e;
                            }, [s]),
                            d = (0, r.useState)(a || c),
                            u = d[0],
                            _ = d[1],
                            m = (0, r.useCallback)(
                                (e) => {
                                    _(e);
                                },
                                [_],
                            ),
                            h = (0, r.useCallback)(() => {
                                _(u - 1);
                            }, [_, u]),
                            v = (0, r.useCallback)(() => {
                                _(u + 1);
                            }, [_, u]),
                            w = g()(J, e),
                            E = (0, r.useMemo)(() => ({ marginLeft: n, marginRight: n }), [n]),
                            f = 0 === u,
                            p = u === l,
                            b = (0, r.useMemo)(() => (f ? void 0 : o[u - 1].tooltipArgs), [o, f, u]),
                            x = (0, r.useMemo)(() => (p ? void 0 : o[u + 1].tooltipArgs), [o, p, u]);
                        return i().createElement(
                            'div',
                            { className: w },
                            i().createElement(
                                'div',
                                { className: ee },
                                t &&
                                    i().createElement(Q, {
                                        onClick: h,
                                        direction: Z.Back,
                                        isLocked: f,
                                        tooltipArgs: b,
                                    }),
                                i().createElement('div', { style: E }, o[u].render()),
                                t &&
                                    i().createElement(Q, {
                                        onClick: v,
                                        direction: Z.Forward,
                                        isLocked: p,
                                        tooltipArgs: x,
                                    }),
                            ),
                            i().createElement(Y, { className: te, selectedStep: u, data: s, onChange: m }),
                        );
                    },
                    re = {
                        base: 'TextButton_base_a231c',
                        base__right: 'TextButton_base__right_bfac3',
                        icon: 'TextButton_icon_cdfc0',
                        icon__back: 'TextButton_icon__back_fc1bb',
                        icon__forward: 'TextButton_icon__forward_efa2d',
                        icon__close: 'TextButton_icon__close_e2f0f',
                        icon__info: 'TextButton_icon__info_e32c0',
                        glow: 'TextButton_glow_d6e04',
                        caption: 'TextButton_caption_f4e8d',
                        caption__back: 'TextButton_caption__back_d358d',
                        caption__forward: 'TextButton_caption__forward_ff93d',
                        caption__close: 'TextButton_caption__close_fc554',
                        caption__info: 'TextButton_caption__info_c263a',
                        goto: 'TextButton_goto_d3960',
                        base__left: 'TextButton_base__left_ec79d',
                        shine: 'TextButton_shine_f8873',
                    },
                    ie = [
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
                function ae() {
                    return (
                        (ae = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        ae.apply(null, arguments)
                    );
                }
                const oe = (e) => {
                    let t = e.caption,
                        n = e.onClick,
                        a = e.goto,
                        s = e.classNames,
                        l = e.onMouseEnter,
                        c = e.onMouseLeave,
                        d = e.onMouseDown,
                        u = e.onMouseUp,
                        _ = e.side,
                        m = void 0 === _ ? 'left' : _,
                        h = e.type,
                        v = void 0 === h ? 'back' : h,
                        w = e.soundHover,
                        E = void 0 === w ? 'highlight' : w,
                        f = e.soundClick,
                        p = void 0 === f ? 'play' : f,
                        b = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (-1 !== t.indexOf(r)) continue;
                                    n[r] = e[r];
                                }
                            return n;
                        })(e, ie);
                    const x = (0, r.useCallback)(
                            (e) => {
                                (null == l || l(e), o.O.sound.play.sound(E));
                            },
                            [l, E],
                        ),
                        L = (0, r.useCallback)(
                            (e) => {
                                null == c || c(e);
                            },
                            [c],
                        ),
                        y = (0, r.useCallback)(
                            (e) => {
                                (null == d || d(e), o.O.sound.play.sound(p));
                            },
                            [d, p],
                        ),
                        S = (0, r.useCallback)(
                            (e) => {
                                null == u || u(e);
                            },
                            [u],
                        );
                    return i().createElement(
                        'div',
                        ae(
                            {
                                className: g()(
                                    re.base,
                                    re[`base__${v}`],
                                    re[`base__${m}`],
                                    null == s ? void 0 : s.base,
                                ),
                                onMouseEnter: x,
                                onMouseLeave: L,
                                onMouseDown: y,
                                onMouseUp: S,
                                onClick: n,
                            },
                            b,
                        ),
                        'info' !== v && i().createElement('div', { className: re.shine }),
                        i().createElement(
                            'div',
                            {
                                className: g()(
                                    re.icon,
                                    re[`icon__${v}`],
                                    re[`icon__${m}`],
                                    null == s ? void 0 : s.icon,
                                ),
                            },
                            i().createElement('div', { className: g()(re.glow, null == s ? void 0 : s.glow) }),
                        ),
                        i().createElement(
                            'div',
                            { className: g()(re.caption, re[`caption__${v}`], null == s ? void 0 : s.caption) },
                            t,
                        ),
                        a && i().createElement('div', { className: g()(re.goto, null == s ? void 0 : s.goto) }, a),
                    );
                };
                var se = n(4020);
                const le = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ce(e = se.n.NONE, t = le, n = !1, i = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== se.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!i && o.O.view.isEventHandled()) return;
                                (o.O.view.setEventHandled(), t(r), n && r.stopPropagation());
                            }
                        }
                    }, [t, e, n, i]);
                }
                var de = n(2041);
                function ue(e) {
                    return e;
                }
                function _e() {
                    return !1;
                }
                console.log;
                var me = n(3305);
                function ge(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return he(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? he(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function he(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const ve = (e) => (0 === e ? window : window.subViews.get(e));
                function we(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, r) => t(null == e ? void 0 : e.value, n, r));
                }
                var Ee = n(5369);
                const fe = ((e, t) => {
                        const n = (0, r.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: s, children: l, mocks: c }) {
                                const d = (0, r.useRef)([]),
                                    u = (n, r, i) => {
                                        var a;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = ve,
                                                context: r = 'model',
                                            } = {}) {
                                                const i = new Map();
                                                function a(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? i.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = i.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const i = n(t),
                                                        a = r.split('.').reduce((e, t) => e[t], i);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (n, a) => {
                                                        const l = 'string' == typeof a ? `${r}.${a}` : r,
                                                            c = o.O.view.addModelObserver(l, t, !0);
                                                        return (i.set(c, n), e && n(s(a)), c);
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
                                                        for (var e, n = ge(i.keys()); !(e = n()).done; ) a(e.value, t);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(r),
                                            l =
                                                'real' === n
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (a = null == i ? void 0 : i.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === n ? (null == i ? void 0 : i.getter(e)) : l.readByPath(e),
                                            u = (e) => d.current.push(e),
                                            _ = e({
                                                mode: n,
                                                readByPath: c,
                                                externalModel: l,
                                                observableModel: {
                                                    dict: (e) => {
                                                        const t = c(e),
                                                            r = me.LO.box(t, { equals: _e });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, me.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    array: (e, t) => {
                                                        const r = null != t ? t : c(e),
                                                            i = me.LO.box(r, { equals: _e });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, me.aD)((e) => i.set(e)),
                                                                    e,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : c(e),
                                                            i = me.LO.box(r, { equals: _e });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, me.aD)((e) => i.set(e)),
                                                                    e,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = c(t);
                                                        if (Array.isArray(e)) {
                                                            const i = e.reduce(
                                                                (e, t) => ((e[t] = me.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, me.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                i[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                        {
                                                            const i = e,
                                                                a = Object.entries(i),
                                                                o = a.reduce(
                                                                    (e, [t, n]) => ((e[n] = me.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, me.aD)((e) => {
                                                                            a.forEach(([t, n]) => {
                                                                                o[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: u,
                                            }),
                                            m = { mode: n, model: _, externalModel: l, cleanup: u };
                                        return {
                                            model: _,
                                            controls: 'mocks' === n && i ? i.controls(m) : t(m),
                                            externalModel: l,
                                            mode: n,
                                        };
                                    },
                                    _ = (0, r.useRef)(!1),
                                    m = (0, r.useState)(a),
                                    g = m[0],
                                    h = m[1],
                                    v = (0, r.useState)(() => u(a, s, c)),
                                    w = v[0],
                                    E = v[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        _.current ? E(u(g, s, c)) : (_.current = !0);
                                    }, [c, g, s]),
                                    (0, r.useEffect)(() => {
                                        h(a);
                                    }, [a]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            (w.externalModel.dispose(), d.current.forEach((e) => e()));
                                        },
                                        [w],
                                    ),
                                    i().createElement(n.Provider, { value: w }, l)
                                );
                            },
                            () => (0, r.useContext)(n),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = Object.assign({}, e.primitives(['selectedSlideIndex']), {
                                    slides: e.array('slides'),
                                }),
                                n = (0, Ee.Om)(() => we(t.slides.get(), ue), { equals: _e });
                            return Object.assign({}, t, { computes: { getSlides: n } });
                        },
                        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
                    ),
                    pe = fe[0],
                    be = fe[1],
                    xe = {
                        base: 'HelpViewSlide_base_c85b7',
                        title: 'HelpViewSlide_title_e033b',
                        content: 'HelpViewSlide_content_a0ab3',
                        contentItem: 'HelpViewSlide_contentItem_fae46',
                        contentItem__small: 'HelpViewSlide_contentItem__small_c7dd7',
                        contentItem__big: 'HelpViewSlide_contentItem__big_c6539',
                        contentImage: 'HelpViewSlide_contentImage_f64fb',
                        contentDescription: 'HelpViewSlide_contentDescription_eac4e',
                    },
                    Le = (0, r.memo)(({ title: e, sections: t }) =>
                        i().createElement(
                            'div',
                            { className: xe.base },
                            i().createElement('div', { className: xe.title }, e),
                            i().createElement(
                                'div',
                                { className: xe.content },
                                we(t, (e, t) =>
                                    i().createElement(
                                        'div',
                                        { key: t, className: g()(xe.contentItem, xe[`contentItem__${e.size}`]) },
                                        i().createElement('div', {
                                            className: g()(xe.contentImage, xe[`contentImage__${e.size}`]),
                                            style: { backgroundImage: `url(${e.image})` },
                                        }),
                                        i().createElement('div', { className: xe.contentDescription }, e.description),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    ye = 'HelpViewApp_base_a1e7d',
                    Se = 'HelpViewApp_closeButton_f20c3',
                    Me = (0, de.Pi)(() => {
                        const e = p().mediaSize,
                            t = be(),
                            n = t.model,
                            r = t.controls;
                        var a, o;
                        return (
                            (a = r.close),
                            ce(se.n.ESCAPE, a),
                            i().createElement(
                                'div',
                                { className: ye },
                                i().createElement(
                                    ne,
                                    {
                                        hasArrow: !0,
                                        selectedIndex: n.selectedSlideIndex.get(),
                                        arrowOffset:
                                            ((o = e), o === s.extraSmall.width ? 0 : o === s.small.width ? 15 : 30),
                                    },
                                    n.computes
                                        .getSlides()
                                        .map((e) => ({
                                            render: () =>
                                                i().createElement(Le, { title: e.title, sections: e.sections }),
                                        })),
                                ),
                                i().createElement(oe, {
                                    classNames: { base: Se },
                                    caption: R.strings.crew_help.closeBtn(),
                                    side: 'right',
                                    type: 'close',
                                    onClick: r.close,
                                }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    P().render(
                        i().createElement(pe, null, i().createElement(O, null, i().createElement(Me, null))),
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
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](n, n.exports, __webpack_require__), n.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, r) => {
            if (!t) {
                var i = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, r] = deferred[l], a = !0, o = 0; o < t.length; o++)
                        (!1 & r || i >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((a = !1), r < i && (i = r));
                    if (a) {
                        deferred.splice(l--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, n, r];
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
        (__webpack_require__.j = 7626),
        (() => {
            var e = { 7626: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        i,
                        [a, o, s] = n,
                        l = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(n); l < a.length; l++)
                        ((i = a[l]), __webpack_require__.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(8199));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
