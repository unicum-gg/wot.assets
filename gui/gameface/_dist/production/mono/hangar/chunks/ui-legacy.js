import { r as reactExports } from './vendor.js';
var __webpack_modules__ = {
        859: (e, t, n) => {
            n.d(t, { O: () => J });
            var i = {};
            (n.r(i), n.d(i, { mouse: () => h, off: () => u, on: () => l, onResize: () => c, onScaleUpdated: () => _ }));
            var o = {};
            (n.r(o),
                n.d(o, {
                    events: () => i,
                    getMouseGlobalPosition: () => p,
                    getSize: () => m,
                    graphicsQuality: () => g,
                    playSound: () => w,
                    setRTPC: () => E,
                }));
            var a = {};
            (n.r(a), n.d(a, { getBgUrl: () => O, getTextureUrl: () => f }));
            var r = {};
            function s(e) {
                return (t) => (
                    engine.on(e, t),
                    () => {
                        engine.off(e, t);
                    }
                );
            }
            function d(e) {
                viewEnv.setTrackMouseOnStage(e);
            }
            (n.r(r),
                n.d(r, {
                    addModelObserver: () => A,
                    addPreloadTexture: () => x,
                    children: () => a,
                    displayStatus: () => P,
                    displayStatusIs: () => X,
                    events: () => R,
                    extraSize: () => $,
                    forceTriggerMouseMove: () => Y,
                    freezeTextureBeforeResize: () => I,
                    getBrowserTexturePath: () => L,
                    getDisplayStatus: () => q,
                    getFontNames: () => Z,
                    getScale: () => W,
                    getSize: () => N,
                    getViewGlobalPosition: () => V,
                    isEventHandled: () => H,
                    isFocused: () => G,
                    pxToRem: () => B,
                    remToPx: () => z,
                    resize: () => U,
                    sendEvent: () => S,
                    setAnimateWindow: () => K,
                    setEventHandled: () => j,
                    setInputPaddingsRem: () => C,
                    setSidePaddingsRem: () => F,
                    whenTutorialReady: () => Q,
                }));
            const c = s('clientResized'),
                _ = s('self.onScaleUpdated'),
                l = (e, t) => engine.on(e, t),
                u = (e, t) => engine.off(e, t),
                v = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') },
                h = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && d(!1);
                    }
                    function n() {
                        e.enabled && d(!0);
                    }
                    function i() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : d(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const a = `mouse${t}`,
                                        r = v[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        i(),
                                        () => {
                                            o &&
                                                (r(),
                                                window.removeEventListener(a, s),
                                                (e.listeners -= 1),
                                                i(),
                                                (o = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, o, {
                        disable() {
                            ((e.enabled = !1), i());
                        },
                        enable() {
                            ((e.enabled = !0), i());
                        },
                        enableOutside() {
                            e.enabled && d(!0);
                        },
                        disableOutside() {
                            e.enabled && d(!1);
                        },
                    });
                })();
            function w(e) {
                engine.call('PlaySound', e).catch((t) => {
                    console.error(`playSound('${e}'): `, t);
                });
            }
            function E(e, t) {
                engine.call('SetRTPCGlobal', e, t).catch((n) => {
                    console.error(`setRTPC('${e}', '${t}'): `, n);
                });
            }
            function m(e = 'px') {
                return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
            }
            function p(e = 'px') {
                return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
            }
            const g = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                },
                b = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                T = Object.keys(b).reduce((e, t) => ((e[t] = () => w(b[t])), e), {}),
                y = { play: Object.assign({}, T, { sound: w }), setRTPC: E };
            function f(e, t, n = 1) {
                return viewEnv.getChildTexturePath(e, t.width, t.height, n);
            }
            function O(e, t, n) {
                return `url(${f(e, t, n)})`;
            }
            const P = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                R = {
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
                M = ['args'],
                k = (e, t) => {
                    const n = 'GFViewEventProxy';
                    if (void 0 !== t) {
                        const o = t.args,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var i in e)
                                    if ({}.hasOwnProperty.call(e, i)) {
                                        if (-1 !== t.indexOf(i)) continue;
                                        n[i] = e[i];
                                    }
                                return n;
                            })(t, M);
                        return void 0 !== o
                            ? viewEnv.handleViewEvent(
                                  Object.assign({ __Type: n, type: e }, a, {
                                      arguments:
                                          ((i = o),
                                          Object.entries(i).map(([e, t]) => {
                                              const n = 'GFValueProxy',
                                                  i = String(e);
                                              switch (typeof t) {
                                                  case 'number':
                                                      return { __Type: n, name: i, number: t };
                                                  case 'boolean':
                                                      return { __Type: n, name: i, bool: t };
                                                  default:
                                                      return { __Type: n, name: i, string: t.toString() };
                                              }
                                          })),
                                  }),
                              )
                            : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                    }
                    return viewEnv.handleViewEvent({ __Type: n, type: e });
                    var i;
                },
                S = {
                    close(e) {
                        k('popover' === e ? 2 : 32);
                    },
                    minimize() {
                        k(64);
                    },
                    move(e) {
                        k(16, { isMouseEvent: !0, on: e });
                    },
                },
                D = 15;
            function x(e) {
                viewEnv.addPreloadTexture(e);
            }
            function C(e) {
                viewEnv.setHitAreaPaddingsRem(e, e, e, e, D);
            }
            function L(e, t, n, i = 1) {
                return viewEnv.getWebBrowserTexturePath(e, t, n, i);
            }
            function A(e, t, n) {
                return viewEnv.addDataChangedCallback(e, t, n);
            }
            function F(e) {
                viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, D);
            }
            function N(e = 'px') {
                return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
            }
            function U(e, t, n = 'px') {
                return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
            }
            function V(e = 'rem') {
                const t = viewEnv.getViewGlobalPositionRem();
                return 'rem' === e ? t : { x: z(t.x), y: z(t.y) };
            }
            function I() {
                viewEnv.freezeTextureBeforeResize();
            }
            function W() {
                return viewEnv.getScale();
            }
            function B(e) {
                return viewEnv.pxToRem(e);
            }
            function z(e) {
                return viewEnv.remToPx(e);
            }
            function K(e, t) {
                viewEnv.setAnimateWindow(e, t);
            }
            function G() {
                return viewEnv.isFocused();
            }
            function j() {
                return viewEnv.setEventHandled();
            }
            function H() {
                return viewEnv.isEventHandled();
            }
            function Y() {
                viewEnv.forceTriggerMouseMove();
            }
            function q() {
                return viewEnv.getShowingStatus();
            }
            const Z = (() => {
                    let e = [];
                    return () => (0 === e.length && (e = Object.keys(window.viewEnv.getFontsConfig()).map(String)), e);
                })(),
                X = Object.keys(P).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === P[t]), e), {}),
                $ = {
                    set: (e, t) => {
                        viewEnv.setExtraSizeRem(e, t);
                    },
                    get: (e, t) => {
                        viewEnv.getExtraSizeRem(e, t);
                    },
                },
                Q = Promise.all([
                    new Promise((e) => {
                        window.isDomBuilt ? e() : R.onDomBuilt(e);
                    }),
                    engine.whenReady,
                ]),
                J = { view: r, client: o, sound: y };
        },
        310: (e, t, n) => {
            n.d(t, { Z: () => a });
            var i = n(859);
            class o {
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
                    return (window.__dataTracker || (window.__dataTracker = new o()), window.__dataTracker);
                }
                clear() {
                    (void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                        (this._callbacks = {}));
                }
                addCallback(e, t, n = 0, o = !0) {
                    void 0 === this._updateHandler &&
                        (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                    const a = i.O.view.addModelObserver(e, n, o);
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
                        const i = this._callbacks[n];
                        void 0 !== i && i(e, t);
                    });
                }
            }
            o.__instance = void 0;
            const a = o;
        },
        421: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
            var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310),
                _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(364);
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
        364: (e, t, n) => {
            n.d(t, { ry: () => p });
            class i {
                constructor() {
                    ((this.entries = []),
                        (this._listenMouse = !1),
                        (this.onMouseDown = (e) => {
                            this.entries.forEach(({ container: t, callback: n }) => {
                                let i = e.target;
                                do {
                                    if (i === t) return;
                                    i = i.parentNode;
                                } while (i);
                                n();
                            });
                        }));
                }
                static get instance() {
                    return (i.__instance || (i.__instance = new i()), i.__instance);
                }
                register(e, t) {
                    (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                }
                unregister(e, t) {
                    const n = e,
                        i = t;
                    ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== i)),
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
            i.__instance = void 0;
            const o = i;
            var a = n(310),
                r = n(148);
            let s =
                (((d = {})[(d.UNDEFINED = 0)] = 'UNDEFINED'),
                (d[(d.TOOLTIP = 1)] = 'TOOLTIP'),
                (d[(d.POP_OVER = 2)] = 'POP_OVER'),
                (d[(d.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                (d[(d.DROP_DOWN = 8)] = 'DROP_DOWN'),
                (d[(d.MOVE = 16)] = 'MOVE'),
                (d[(d.CLOSE = 32)] = 'CLOSE'),
                (d[(d.MINIMIZE = 64)] = 'MINIMIZE'),
                d);
            var d;
            const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
            let v = (function (e) {
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
            var h = n(859);
            const w = ['args'];
            function E(e, t, n, i, o, a, r) {
                try {
                    var s = e[a](r),
                        d = s.value;
                } catch (c) {
                    return void n(c);
                }
                s.done ? t(d) : Promise.resolve(d).then(i, o);
            }
            const m = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                p = (function () {
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
                                return new Promise(function (i, o) {
                                    var a = e.apply(t, n);
                                    function r(e) {
                                        E(a, i, o, r, s, 'next', e);
                                    }
                                    function s(e) {
                                        E(a, i, o, r, s, 'throw', e);
                                    }
                                    r(void 0);
                                });
                            });
                    return function () {
                        return t.apply(this, arguments);
                    };
                })(),
                g = (e, t) => {
                    const n = 'GFViewEventProxy';
                    if (void 0 !== t) {
                        const o = t.args,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var i in e)
                                    if ({}.hasOwnProperty.call(e, i)) {
                                        if (-1 !== t.indexOf(i)) continue;
                                        n[i] = e[i];
                                    }
                                return n;
                            })(t, w);
                        void 0 !== o
                            ? viewEnv.handleViewEvent(
                                  Object.assign({ __Type: n, type: e }, a, {
                                      arguments:
                                          ((i = o),
                                          Object.entries(i).map(([e, t]) => {
                                              const n = { __Type: 'GFValueProxy', name: `${e}` };
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
                    var i;
                },
                b = () => g(s.CLOSE),
                T = (e, t) => {
                    e.keyCode === v.ESCAPE && t();
                };
            var y = n(421);
            const f = o.instance,
                O = {
                    DataTracker: a.Z,
                    ViewModel: y.Z,
                    ViewEventType: s,
                    NumberFormatType: c,
                    RealFormatType: _,
                    TimeFormatType: l,
                    DateFormatType: u,
                    makeGlobalBoundingBox: m,
                    sendMoveEvent: (e) => g(s.MOVE, { isMouseEvent: !0, on: e }),
                    sendCloseEvent: b,
                    sendClosePopOverEvent: () => g(s.POP_OVER, { on: !1 }),
                    sendShowContextMenuEvent: (e, t, n = 0) => {
                        g(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                    },
                    sendShowPopOverEvent: (e, t, n, i, o = R.invalid('resId'), a) => {
                        const r = h.O.view.getViewGlobalPosition(),
                            d = n.getBoundingClientRect(),
                            c = d.x,
                            _ = d.y,
                            l = d.width,
                            u = d.height,
                            v = {
                                x: h.O.view.pxToRem(c) + r.x,
                                y: h.O.view.pxToRem(_) + r.y,
                                width: h.O.view.pxToRem(l),
                                height: h.O.view.pxToRem(u),
                            };
                        g(s.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: i || R.invalid('resId'),
                            targetID: o,
                            direction: t,
                            bbox: m(v),
                            on: !0,
                            args: a,
                        });
                    },
                    addEscapeListener: (e) => {
                        const t = (t) => T(t, e);
                        return (window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t));
                    },
                    closeOnEsc: (e) => {
                        T(e, b);
                    },
                    handleViewEvent: g,
                    onBindingsReady: p,
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
                        for (const i in t)
                            if (Object.prototype.hasOwnProperty.call(t, i)) {
                                const o = Object.prototype.toString.call(t[i]);
                                if (o.startsWith('[object CoherentArrayProxy]')) {
                                    const o = t[i];
                                    n[i] = [];
                                    for (let t = 0; t < o.length; t++) n[i].push({ value: e(o[t].value) });
                                } else
                                    o.startsWith('[object class BW::WULF::ViewModel')
                                        ? (n[i] = e(t[i]))
                                        : (n[i] = t[i]);
                            }
                        return n;
                    },
                    ClickOutsideManager: f,
                    SystemLocale: r.Z5,
                    UserLocale: r.cy,
                };
            window.ViewEnvHelper = O;
        },
        148: (e, t, n) => {
            n.d(t, { Ew: () => a, Z5: () => i, cy: () => o });
            const i = {
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
                },
                a = {
                    getRegionalDateTime: (e, t, n = !0) => regionalDateTime.getRegionalDateTime(e, t, n),
                    getFormattedDateTime: (e, t, n = !0) => regionalDateTime.getFormattedDateTime(e, t, n),
                };
        },
    },
    __webpack_module_cache__ = {};
function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var n = (__webpack_module_cache__[e] = { exports: {} });
    return (__webpack_modules__[e](n, n.exports, __webpack_require__), n.exports);
}
((__webpack_require__.d = (e, t) => {
    for (var n in t)
        __webpack_require__.o(t, n) &&
            !__webpack_require__.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
}),
    (__webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (__webpack_require__.r = (e) => {
        ('undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 }));
    }));
var __webpack_exports__ = {};
(() => {
    __webpack_require__.d(__webpack_exports__, { Z: () => a });
    let e =
        (((t = {}).DayMonthNumeric = 'dayMonthNumeric'),
        (t.DayMonthFull = 'dayMonthFull'),
        (t.DayMonthFullTime = 'dayMonthFullTime'),
        (t.DayMonthAbbreviated = 'dayMonthAbbreviated'),
        (t.DayMonthAbbreviatedTime = 'dayMonthAbbreviatedTime'),
        (t.ShortDate = 'shortDate'),
        (t.ShortTime = 'ShortTime'),
        (t.ShortDateTime = 'ShortDateTime'),
        (t.FullDate = 'fullDate'),
        (t.FullTime = 'fullTime'),
        (t.FullDateTime = 'fullDateTime'),
        t);
    var t;
    __webpack_require__(364);
    var n = __webpack_require__(148);
    const i = n.Ew.getRegionalDateTime,
        o = n.Ew.getFormattedDateTime,
        a = (0, ((r = { memo: () => reactExports.memo }), (s = {}), __webpack_require__.d(s, r), s).memo)(
            ({ datetime: t, format: n = e.ShortDate, isConvertedToLocal: a = !0 }) =>
                Object.values(e).includes(n) ? i(t, n, a) : o(t, n, a),
        );
    var r, s;
})();
var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as _ };
