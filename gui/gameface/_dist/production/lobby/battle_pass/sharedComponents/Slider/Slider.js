(() => {
    'use strict';
    var __webpack_modules__ = {
            5034: (e, t, i) => {
                (i.r(t),
                    i.d(t, {
                        mouse: () => c,
                        off: () => d,
                        on: () => l,
                        onMinimize: () => s,
                        onResize: () => a,
                        onScaleUpdated: () => o,
                    }));
                var r = i(8277),
                    n = i(1708);
                const a = (0, r.E)('clientResized'),
                    o = (0, r.E)('self.onScaleUpdated'),
                    s = (0, r.E)('clientMinimized'),
                    l = (e, t) => engine.on(e, t),
                    d = (e, t) => engine.off(e, t),
                    _ = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function i() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', i))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', i))
                            : (0, n.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, i) => (
                            (t[i] = (function (t) {
                                return (i) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const a = `mouse${t}`,
                                        o = _[t]((e) => i([e, 'outside']));
                                    function s(e) {
                                        i([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        r(),
                                        () => {
                                            n &&
                                                (o(),
                                                window.removeEventListener(a, s),
                                                (e.listeners -= 1),
                                                r(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(i)),
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
                            e.enabled && (0, n.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, n.R)(!1);
                        },
                    });
                })();
            },
            3157: (e, t, i) => {
                (i.r(t),
                    i.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => o,
                        getSize: () => a,
                        graphicsQuality: () => s,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    }));
                var r = i(5034),
                    n = i(9703);
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
            1708: (e, t, i) => {
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                i.d(t, { R: () => r });
            },
            9703: (e, t, i) => {
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function n(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((i) => {
                        console.error(`setRTPC('${e}', '${t}'): `, i);
                    });
                }
                i.d(t, { E: () => n, G: () => r });
            },
            8277: (e, t, i) => {
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                i.d(t, { E: () => r });
            },
            7475: (e, t, i) => {
                i.d(t, { O: () => o });
                var r = i(3157),
                    n = i(8133),
                    a = i(3925);
                const o = { view: i(7553), client: r, sound: a.ZP, intl: n.N };
            },
            8133: (e, t, i) => {
                i.d(t, { N: () => r });
                const r = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            3925: (e, t, i) => {
                i.d(t, { ZP: () => o });
                var r = i(3157);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(n).reduce((e, t) => ((e[t] = () => (0, r.playSound)(n[t])), e), {}),
                    o = { play: Object.assign({}, a, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            5544: (e, t, i) => {
                function r(e, t, i = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, i);
                }
                function n(e, t, i) {
                    return `url(${r(e, t, i)})`;
                }
                (i.r(t), i.d(t, { getBgUrl: () => n, getTextureUrl: () => r }));
            },
            3163: (e, t, i) => {
                i.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            7576: (e, t, i) => {
                i.d(t, { U: () => n });
                var r = i(8277);
                const n = {
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
            7553: (e, t, i) => {
                (i.r(t),
                    i.d(t, {
                        addModelObserver: () => u,
                        addPreloadTexture: () => d,
                        arabic2roman: () => k,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => R,
                        enableFullScreenModeSupported: () => A,
                        events: () => o.U,
                        extraSize: () => C,
                        forceTriggerMouseMove: () => x,
                        freezeTextureBeforeResize: () => w,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => P,
                        getExternalPaddingsRem: () => L,
                        getFontNames: () => T,
                        getScale: () => E,
                        getSize: () => g,
                        getViewGlobalPosition: () => m,
                        initExternalPaddings: () => N,
                        isEventHandled: () => O,
                        isFocused: () => y,
                        pxToRem: () => f,
                        remToPx: () => p,
                        resize: () => v,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => S,
                        setInputPaddingsRem: () => _,
                        setSidePaddingsRem: () => h,
                        whenTutorialReady: () => M,
                    }));
                var r = i(1308),
                    n = i(5544),
                    a = i(3163),
                    o = i(7576),
                    s = i(2319);
                const l = 15;
                function d(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, l);
                }
                function c(e, t, i, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, i, r);
                }
                function u(e, t, i) {
                    return viewEnv.addDataChangedCallback(e, t, i);
                }
                function h(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, l);
                }
                function g(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function v(e, t, i = 'px') {
                    return 'rem' === i ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function m(e = 'rem') {
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
                function y() {
                    return viewEnv.isFocused();
                }
                function S() {
                    return viewEnv.setEventHandled();
                }
                function O() {
                    return viewEnv.isEventHandled();
                }
                function x() {
                    viewEnv.forceTriggerMouseMove();
                }
                function P() {
                    return viewEnv.getShowingStatus();
                }
                const T = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    k = r.cg;
                function L() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const R = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    C = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    M = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function A() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function N(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            i = t.top,
                            r = t.right,
                            n = t.bottom,
                            a = t.left;
                        (e.style.setProperty('--external-padding-top', `${i}rem`),
                            e.style.setProperty('--external-padding-right', `${r}rem`),
                            e.style.setProperty('--external-padding-bottom', `${n}rem`),
                            e.style.setProperty('--external-padding-left', `${a}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            2319: (e, t, i) => {
                i.d(t, { qP: () => d });
                const r = ['args'];
                const n = 2,
                    a = 16,
                    o = 32,
                    s = 64,
                    l = (e, t) => {
                        const i = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var i = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (-1 !== t.indexOf(r)) continue;
                                            i[r] = e[r];
                                        }
                                    return i;
                                })(t, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: i, type: e }, o, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const i = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: i, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: i, name: e, bool: t };
                                                      default:
                                                          return { __Type: i, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: i, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: i, type: e });
                        var n;
                    },
                    d = {
                        close(e) {
                            l('popover' === e ? n : o);
                        },
                        minimize() {
                            l(s);
                        },
                        move(e) {
                            l(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4020: (e, t, i) => {
                i.d(t, { n: () => r });
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
            1308: (e, t, i) => {
                i.d(t, { cg: () => a });
                const r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    n = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(e) {
                    let t = '';
                    for (let i = n.length - 1; i >= 0; i--) for (; e >= n[i];) ((t += r[i]), (e -= n[i]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            8973: (e, t, i) => {
                i.d(t, { Z: () => a });
                var r = i(7475);
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
                    addCallback(e, t, i = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(e, i, n);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  i > 0 && (this._views[i] ? this._views[i].push(a) : (this._views[i] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
                        );
                    }
                    removeCallback(e, t = 0) {
                        let i = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((i = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            i || console.error("Can't remove callback by id:", e),
                            i
                        );
                    }
                    _emmitDataChanged(e, t, i) {
                        i.forEach((i) => {
                            const r = this._callbacks[i];
                            void 0 !== r && r(e, t);
                        });
                    }
                }
                n.__instance = void 0;
                const a = n;
            },
            5533: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
            828: (e, t, i) => {
                i.d(t, { ry: () => w, Eu: () => E });
                class r {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: i }) => {
                                    let r = e.target;
                                    do {
                                        if (r === t) return;
                                        r = r.parentNode;
                                    } while (r);
                                    i();
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
                        const i = e,
                            r = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== i || t !== r)),
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
                const n = r;
                var a = i(8973);
                var o = i(6609);
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
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var u = i(4020),
                    h = i(7475);
                const g = ['args'];
                function v(e, t, i, r, n, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value;
                    } catch (e) {
                        return void i(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(r, n);
                }
                const m = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        i = arguments;
                                    return new Promise(function (r, n) {
                                        var a = e.apply(t, i);
                                        function o(e) {
                                            v(a, r, n, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            v(a, r, n, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    E = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    f = (e, t) => {
                        const i = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var i = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (-1 !== t.indexOf(r)) continue;
                                            i[r] = e[r];
                                        }
                                    return i;
                                })(t, g);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: i, type: e }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, t]) => {
                                                  const i = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          i.number = t;
                                                          break;
                                                      case 'boolean':
                                                          i.bool = t;
                                                          break;
                                                      default:
                                                          i.string = t.toString();
                                                  }
                                                  return i;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: i, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: i, type: e });
                        var r;
                    },
                    p = () => f(s.CLOSE),
                    b = (e, t) => {
                        e.keyCode === u.n.ESCAPE && t();
                    };
                var y = i(5533);
                const S = n.instance,
                    O = {
                        DataTracker: a.Z,
                        ViewModel: y.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: d,
                        TimeFormatType: _,
                        DateFormatType: c,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (e) => f(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => f(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, i = 0) => {
                            f(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: i, args: t });
                        },
                        sendShowPopOverEvent: (e, t, i, r, n = R.invalid('resId'), a) => {
                            const o = h.O.view.getViewGlobalPosition(),
                                l = i.getBoundingClientRect(),
                                d = l.x,
                                _ = l.y,
                                c = l.width,
                                u = l.height,
                                g = {
                                    x: h.O.view.pxToRem(d) + o.x,
                                    y: h.O.view.pxToRem(_) + o.y,
                                    width: h.O.view.pxToRem(c),
                                    height: h.O.view.pxToRem(u),
                                };
                            f(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: m(g),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => b(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, p);
                        },
                        handleViewEvent: f,
                        onBindingsReady: w,
                        onLayoutReady: E,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(t) {
                            const i = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const n = Object.prototype.toString.call(t[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[r];
                                        i[r] = [];
                                        for (let t = 0; t < n.length; t++) i[r].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (i[r] = e(t[r]))
                                            : (i[r] = t[r]);
                                }
                            return i;
                        },
                        ClickOutsideManager: S,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = O;
            },
            6609: (e, t, i) => {
                i.d(t, { Z5: () => r, cy: () => n });
                const r = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t, i = 2) => systemLocale.getRealFormat(e, t, i),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, i) => userLocale.getTimeFormat(e, t, void 0 === i || i),
                        getTimeString: (e, t, i) => userLocale.getTimeString(e, t, void 0 === i || i),
                    };
            },
            6682: (e, t, i) => {
                var r = i(7363),
                    n = i.n(r),
                    a = i(9849),
                    o = i.n(a);
                function s(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                var l = i(828),
                    d = i(7475),
                    _ = i(4020);
                const c = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function u(e = _.n.NONE, t = c, i = !1, n = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== _.n.NONE)
                            return (
                                window.addEventListener('keydown', r, i),
                                () => {
                                    window.removeEventListener('keydown', r, i);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!n && d.O.view.isEventHandled()) return;
                                (d.O.view.setEventHandled(), t(r), i && r.stopPropagation());
                            }
                        }
                    }, [t, e, i, n]);
                }
                const h = (e, t, i) =>
                        t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                            ? (t.extraLargeHeight && i.extraLarge) ||
                              (t.largeHeight && i.large) ||
                              (t.mediumHeight && i.medium) ||
                              (t.smallHeight && i.small) ||
                              (t.extraSmallHeight && i.extraSmall)
                                ? e
                                : null
                            : e,
                    g = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                const v = (function (e = d.O.client.getSize('rem')) {
                        const t = e.width,
                            i = e.height;
                        return Object.assign(
                            { width: t, height: i },
                            (function (e, t, i) {
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
                                    })(e, i),
                                    n = (function (e, t) {
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
                                    })(t, i),
                                    a = Math.min(r, n);
                                return {
                                    extraLarge: a === i.extraLarge.weight,
                                    large: a === i.large.weight,
                                    medium: a === i.medium.weight,
                                    small: a === i.small.weight,
                                    extraSmall: a === i.extraSmall.weight,
                                    extraLargeWidth: r === i.extraLarge.weight,
                                    largeWidth: r === i.large.weight,
                                    mediumWidth: r === i.medium.weight,
                                    smallWidth: r === i.small.weight,
                                    extraSmallWidth: r === i.extraSmall.weight,
                                    extraLargeHeight: n === i.extraLarge.weight,
                                    largeHeight: n === i.large.weight,
                                    mediumHeight: n === i.medium.weight,
                                    smallHeight: n === i.small.weight,
                                    extraSmallHeight: n === i.extraSmall.weight,
                                };
                            })(t, i, g),
                        );
                    })(),
                    m = (0, r.createContext)(v),
                    w = ['children'];
                (0, r.memo)((e) => {
                    let t = e.children,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var i = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (-1 !== t.indexOf(r)) continue;
                                    i[r] = e[r];
                                }
                            return i;
                        })(e, w);
                    const n = (0, r.useContext)(m),
                        a = n.extraLarge,
                        o = n.large,
                        s = n.medium,
                        l = n.small,
                        d = n.extraSmall,
                        _ = n.extraLargeWidth,
                        c = n.largeWidth,
                        u = n.mediumWidth,
                        g = n.smallWidth,
                        v = n.extraSmallWidth,
                        E = n.extraLargeHeight,
                        f = n.largeHeight,
                        p = n.mediumHeight,
                        b = n.smallHeight,
                        y = n.extraSmallHeight,
                        S = { extraLarge: E, large: f, medium: p, small: b, extraSmall: y };
                    if (i.extraLarge || i.large || i.medium || i.small || i.extraSmall) {
                        if (i.extraLarge && a) return t;
                        if (i.large && o) return t;
                        if (i.medium && s) return t;
                        if (i.small && l) return t;
                        if (i.extraSmall && d) return t;
                    } else {
                        if (i.extraLargeWidth && _) return h(t, i, S);
                        if (i.largeWidth && c) return h(t, i, S);
                        if (i.mediumWidth && u) return h(t, i, S);
                        if (i.smallWidth && g) return h(t, i, S);
                        if (i.extraSmallWidth && v) return h(t, i, S);
                        if (!(
                            i.extraLargeWidth ||
                            i.largeWidth ||
                            i.mediumWidth ||
                            i.smallWidth ||
                            i.extraSmallWidth
                        )) {
                            if (i.extraLargeHeight && E) return t;
                            if (i.largeHeight && f) return t;
                            if (i.mediumHeight && p) return t;
                            if (i.smallHeight && b) return t;
                            if (i.extraSmallHeight && y) return t;
                        }
                    }
                    return null;
                });
                const E = {
                    base: 'Slider_base_de557',
                    base__carousel: 'Slider_base__carousel_b5e30',
                    trackWrapper: 'Slider_trackWrapper_a6398',
                    track: 'Slider_track_e22ee',
                    base__withoutAnimation: 'Slider_base__withoutAnimation_bb9cb',
                    base__withoutPointer: 'Slider_base__withoutPointer_e1c28',
                    slide: 'Slider_slide_d76ca',
                    slide__active: 'Slider_slide__active_e5219',
                    slide__carousel: 'Slider_slide__carousel_a913d',
                    slide__beforeActive: 'Slider_slide__beforeActive_c4b0e',
                    slide__afterActive: 'Slider_slide__afterActive_ec47f',
                    slide__beforeActiveLarge: 'Slider_slide__beforeActiveLarge_c9eac',
                    slide__afterActiveLarge: 'Slider_slide__afterActiveLarge_d28d4',
                    slide__leftEdge: 'Slider_slide__leftEdge_a0613',
                    slide__leftEdgeLarge: 'Slider_slide__leftEdgeLarge_f05dc',
                    slide__rightEdge: 'Slider_slide__rightEdge_b8bf4',
                    slide__rightEdgeLarge: 'Slider_slide__rightEdgeLarge_e6d84',
                    prev: 'Slider_prev_f942f',
                    next: 'Slider_next_d7b02',
                    prev__disabled: 'Slider_prev__disabled_a015b',
                    next__disabled: 'Slider_next__disabled_fa773',
                    counter: 'Slider_counter_c1950',
                    base__large: 'Slider_base__large_a9238',
                    counterDivider: 'Slider_counterDivider_b8ec5',
                    fadeOut: 'Slider_fadeOut_e0275',
                    fadeIn: 'Slider_fadeIn_ba919',
                    fadeInWithScale: 'Slider_fadeInWithScale_e21ff',
                    slideUp: 'Slider_slideUp_a0ccc',
                    scale: 'Slider_scale_b9c97',
                    rotate: 'Slider_rotate_c6eb1',
                };
                function f(e, t, i, r, n, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value;
                    } catch (e) {
                        return void i(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(r, n);
                }
                function p(e) {
                    return function () {
                        var t = this,
                            i = arguments;
                        return new Promise(function (r, n) {
                            var a = e.apply(t, i);
                            function o(e) {
                                f(a, r, n, o, s, 'next', e);
                            }
                            function s(e) {
                                f(a, r, n, o, s, 'throw', e);
                            }
                            o(void 0);
                        });
                    };
                }
                const b = (0, r.createContext)({});
                (0, r.memo)(
                    ({
                        children: e,
                        arrowsTopPosition: t,
                        carouselMode: i,
                        disabled: a,
                        withCounter: d,
                        onPrevSlide: c,
                        onNextSlide: h,
                    }) => {
                        const g = (0, r.useRef)(null),
                            v = (0, r.useContext)(m),
                            w = v.medium || v.large || v.extraLarge,
                            f = (0, r.useState)(e),
                            y = f[0],
                            S = f[1],
                            O = (0, r.useState)(0),
                            x = O[0],
                            P = O[1],
                            T = (0, r.useState)(0),
                            k = T[0],
                            L = T[1],
                            R = (0, r.useState)(i ? 3 : 1),
                            C = R[0],
                            M = R[1],
                            A = (0, r.useState)(!1),
                            N = A[0],
                            W = A[1],
                            D = (0, r.useState)(!1),
                            H = D[0],
                            F = D[1],
                            U = y.length,
                            I = 1 === C && !i,
                            V = C === U && !i,
                            q = (0, r.useMemo)(() => ({ isAnimationDisabled: N }), [N]),
                            z = (function () {
                                var e = p(function* () {
                                    if (g && g.current) {
                                        (W(!0), yield (0, l.Eu)());
                                        const e = viewEnv.getScale();
                                        (P(g.current.offsetWidth / e),
                                            L(g.current.querySelector(`.${E.slide__active}`).offsetWidth / e),
                                            setTimeout(() => {
                                                W(!1);
                                            }, 100));
                                    }
                                });
                                return function () {
                                    return e.apply(this, arguments);
                                };
                            })();
                        ((0, r.useEffect)(() => {
                            const t = [];
                            (y.map((i) => {
                                const r = e.find((e) => e.key === i.key);
                                r && t.push(r);
                            }),
                                S(t));
                        }, [e]),
                            (0, r.useEffect)(() => {
                                if (i) {
                                    const e = y.concat();
                                    (e.unshift(...e.splice(-2, y.length)), S(e));
                                }
                            }, []),
                            (0, r.useEffect)(
                                () => (
                                    z(),
                                    window.addEventListener('resize', z),
                                    () => {
                                        window.removeEventListener('resize', z);
                                    }
                                ),
                                [],
                            ));
                        const G = (0, r.useCallback)(
                                p(function* () {
                                    I ||
                                        H ||
                                        a ||
                                        (i && F(!0),
                                        yield (0, l.Eu)(),
                                        c && c(),
                                        M(C - 1),
                                        i &&
                                            setTimeout(
                                                p(function* () {
                                                    W(!0);
                                                    const e = y.concat();
                                                    (e.unshift(e.pop()), S(e), M(C), yield (0, l.Eu)(), W(!1), F(!1));
                                                }),
                                                600,
                                            ),
                                        s('play'),
                                        s('bp_glide_01'));
                                }),
                                [C, M, I, i, c, y, H, a],
                            ),
                            j = (0, r.useCallback)(
                                p(function* () {
                                    V ||
                                        H ||
                                        a ||
                                        (i && F(!0),
                                        yield (0, l.Eu)(),
                                        h && h(),
                                        M(C + 1),
                                        i &&
                                            setTimeout(
                                                p(function* () {
                                                    W(!0);
                                                    const e = y.concat();
                                                    (e.push(e.shift()), S(e), M(C), yield (0, l.Eu)(), W(!1), F(!1));
                                                }),
                                                600,
                                            ),
                                        s('play'),
                                        s('bp_glide_01'));
                                }),
                                [C, M, V, i, h, y, H, a],
                            ),
                            B = () => s('highlight');
                        (u(_.n.ARROW_LEFT, G), u(_.n.ARROW_RIGHT, j));
                        const K = (0, r.useMemo)(() => (i ? { width: 'auto' } : { width: `${x}rem` }), [x, i]),
                            Y = (0, r.useMemo)(
                                () =>
                                    i
                                        ? { transform: `translateX(${-k * C + x / 2 + k / 2}rem)` }
                                        : { transform: `translateX(-${x * (C - 1)}rem)` },
                                [x, k, C, i],
                            ),
                            $ = (0, r.useMemo)(() => (t ? { top: t } : {}), [t]),
                            X = o()(
                                E.base,
                                w && E.base__large,
                                i && E.base__carousel,
                                i && w && E.base__carouselLarge,
                                N && E.base__withoutAnimation,
                                H && E.base__withoutPointer,
                            ),
                            Z = o()(E.prev, I && E.prev__disabled),
                            Q = o()(E.next, V && E.next__disabled);
                        return n().createElement(
                            'div',
                            { className: X },
                            n().createElement('div', { className: Z, onClick: G, onMouseEnter: B, style: $ }),
                            n().createElement('div', { className: Q, onClick: j, onMouseEnter: B, style: $ }),
                            d &&
                                n().createElement(
                                    'div',
                                    { className: E.counter },
                                    C,
                                    n().createElement('div', { className: E.counterDivider }, '/'),
                                    U,
                                ),
                            n().createElement(
                                'div',
                                { className: E.trackWrapper, ref: g },
                                n().createElement(
                                    'div',
                                    { className: E.track, style: Y },
                                    y.map((e, t) => {
                                        const r = t + 2 === C,
                                            a = t === C;
                                        let s;
                                        a ? (s = j) : r && (s = G);
                                        let l = o()(E.slide, w && E.slide__large, t + 1 === C && E.slide__active);
                                        return (
                                            i &&
                                                (l = o()(
                                                    E.slide,
                                                    E.slide__carousel,
                                                    w && E.slide__large,
                                                    t + 1 === C && E.slide__active,
                                                    r && E.slide__beforeActive,
                                                    r && w && E.slide__beforeActiveLarge,
                                                    a && E.slide__afterActive,
                                                    a && w && E.slide__afterActiveLarge,
                                                    t + 2 < C && E.slide__leftEdge,
                                                    t + 2 < C && w && E.slide__leftEdgeLarge,
                                                    t > C && E.slide__rightEdge,
                                                    t > C && w && E.slide__rightEdgeLarge,
                                                )),
                                            n().createElement(
                                                'div',
                                                { className: l, key: `slide-${t}`, style: K, onClick: s },
                                                n().createElement(b.Provider, { value: q }, e),
                                            )
                                        );
                                    }),
                                ),
                            ),
                        );
                    },
                );
            },
            7363: (e) => {
                e.exports = React;
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var i = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](i, i.exports, __webpack_require__), i.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, i, r) => {
            if (!t) {
                var n = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, i, r] = deferred[l], a = !0, o = 0; o < t.length; o++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(l--, 1);
                        var s = i();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, i, r];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var i in t)
                __webpack_require__.o(t, i) &&
                    !__webpack_require__.o(e, i) &&
                    Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
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
        (__webpack_require__.j = 7146),
        (() => {
            var e = { 7146: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, i) => {
                    var r,
                        n,
                        [a, o, s] = i,
                        l = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (s) var d = s(__webpack_require__);
                    }
                    for (t && t(i); l < a.length; l++)
                        ((n = a[l]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(d);
                },
                i = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(6682));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
