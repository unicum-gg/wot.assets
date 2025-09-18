import { j as jsxRuntimeExports, q as classNames, r as reactExports, R as React } from '../../../../chunks/vendor.js';
import {
    I as resources,
    c as DateTimeFormatsEnum,
    R as Image,
    L as FormatText,
    am as getRegionalDateTime,
    an as ProgressBar$1,
    a as initializeModelWithContext,
    al as noop,
    ao as Timer,
    z as runView,
} from '../../../../chunks/lib.js';
import { d as de } from '../../../../chunks/TooltipDecorator2.js';
/* empty css                                 */ const base$2 = 'DateRange_8756cb54',
    label = 'DateRange_label_d6f3c1f3',
    image = 'DateRange_image_68220085',
    styles$2 = { base: base$2, label: label, image: image },
    strings = resources.resolve('strings'),
    FORMATS = { full: 'full', numeric: 'numeric', compact: 'compact' },
    DATE_FORMAT = {
        [FORMATS.full]: DateTimeFormatsEnum.DayMonthFull,
        [FORMATS.numeric]: DateTimeFormatsEnum.DayMonthNumeric,
    };
function DateRange({ startDate: e, endDate: t, format: n = FORMATS.full, className: r }) {
    const o = getRegionalDateTime;
    return jsxRuntimeExports.jsxs('div', {
        className: classNames(styles$2.base, r),
        children: [
            jsxRuntimeExports.jsx(Image, {
                className: styles$2.image,
                path: 'ui_kit.datetime.x16x16.cooldown',
                width: 18,
                height: 17,
                adaptive: { medium: { path: 'ui_kit.datetime.x24x24.cooldown', width: 24, height: 24 } },
            }),
            n !== FORMATS.compact
                ? jsxRuntimeExports.jsx(FormatText, {
                      className: styles$2.label,
                      text: strings.readOrEmpty('user_missions.common.daterange.divider'),
                      params: { startDate: o(e, DATE_FORMAT[n]), endDate: o(t, DATE_FORMAT[n]) },
                  })
                : null,
        ],
    });
}
DateRange.format = FORMATS;
var __webpack_modules__ = {
        859: (e, t, n) => {
            n.d(t, { O: () => J });
            var r = {};
            (n.r(r), n.d(r, { mouse: () => h, off: () => _, on: () => u, onResize: () => l, onScaleUpdated: () => d }));
            var o = {};
            (n.r(o),
                n.d(o, {
                    events: () => r,
                    getMouseGlobalPosition: () => E,
                    getSize: () => v,
                    graphicsQuality: () => b,
                    playSound: () => m,
                    setRTPC: () => f,
                }));
            var i = {};
            (n.r(i), n.d(i, { getBgUrl: () => y, getTextureUrl: () => T }));
            var s = {};
            function a(e) {
                return (t) => (
                    engine.on(e, t),
                    () => {
                        engine.off(e, t);
                    }
                );
            }
            function c(e) {
                viewEnv.setTrackMouseOnStage(e);
            }
            (n.r(s),
                n.d(s, {
                    addModelObserver: () => N,
                    addPreloadTexture: () => M,
                    children: () => i,
                    displayStatus: () => k,
                    displayStatusIs: () => Z,
                    events: () => O,
                    extraSize: () => X,
                    forceTriggerMouseMove: () => q,
                    freezeTextureBeforeResize: () => F,
                    getBrowserTexturePath: () => P,
                    getDisplayStatus: () => Y,
                    getFontNames: () => $,
                    getScale: () => z,
                    getSize: () => S,
                    getViewGlobalPosition: () => I,
                    isEventHandled: () => K,
                    isFocused: () => U,
                    pxToRem: () => W,
                    remToPx: () => V,
                    resize: () => D,
                    sendEvent: () => L,
                    setAnimateWindow: () => H,
                    setEventHandled: () => G,
                    setInputPaddingsRem: () => j,
                    setSidePaddingsRem: () => B,
                    whenTutorialReady: () => Q,
                }));
            const l = a('clientResized'),
                d = a('self.onScaleUpdated'),
                u = (e, t) => engine.on(e, t),
                _ = (e, t) => engine.off(e, t),
                p = { down: a('mousedown'), up: a('mouseup'), move: a('mousemove') },
                h = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && c(!1);
                    }
                    function n() {
                        e.enabled && c(!0);
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
                            : c(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${t}`,
                                        s = p[t]((e) => n([e, 'outside']));
                                    function a(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, a),
                                        r(),
                                        () => {
                                            o &&
                                                (s(),
                                                window.removeEventListener(i, a),
                                                (e.listeners -= 1),
                                                r(),
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
                            ((e.enabled = !1), r());
                        },
                        enable() {
                            ((e.enabled = !0), r());
                        },
                        enableOutside() {
                            e.enabled && c(!0);
                        },
                        disableOutside() {
                            e.enabled && c(!1);
                        },
                    });
                })();
            function m(e) {
                engine.call('PlaySound', e).catch((t) => {
                    console.error(`playSound('${e}'): `, t);
                });
            }
            function f(e, t) {
                engine.call('SetRTPCGlobal', e, t).catch((n) => {
                    console.error(`setRTPC('${e}', '${t}'): `, n);
                });
            }
            function v(e = 'px') {
                return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
            }
            function E(e = 'px') {
                return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
            }
            const b = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                },
                x = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                g = Object.keys(x).reduce((e, t) => ((e[t] = () => m(x[t])), e), {}),
                w = { play: Object.assign({}, g, { sound: m }), setRTPC: f };
            function T(e, t, n = 1) {
                return viewEnv.getChildTexturePath(e, t.width, t.height, n);
            }
            function y(e, t, n) {
                return `url(${T(e, t, n)})`;
            }
            const k = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                O = {
                    onTextureFrozen: a('self.onTextureFrozen'),
                    onTextureReady: a('self.onTextureReady'),
                    onDomBuilt: a('self.onDomBuilt'),
                    onLoaded: a('self.onLoaded'),
                    onDisplayChanged: a('self.onShowingStatusChanged'),
                    onFocusUpdated: a('self.onFocusChanged'),
                    children: {
                        onAdded: a('children.onAdded'),
                        onLoaded: a('children.onLoaded'),
                        onRemoved: a('children.onRemoved'),
                        onAttached: a('children.onAttached'),
                        onTextureReady: a('children.onTextureReady'),
                        onRequestPosition: a('children.requestPosition'),
                    },
                },
                R = ['args'],
                A = (e, t) => {
                    const n = 'GFViewEventProxy';
                    if (void 0 !== t) {
                        const o = t.args,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(t, R);
                        return void 0 !== o
                            ? viewEnv.handleViewEvent(
                                  Object.assign({ __Type: n, type: e }, i, {
                                      arguments:
                                          ((r = o),
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
                            : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                    }
                    return viewEnv.handleViewEvent({ __Type: n, type: e });
                    var r;
                },
                L = {
                    close(e) {
                        A('popover' === e ? 2 : 32);
                    },
                    minimize() {
                        A(64);
                    },
                    move(e) {
                        A(16, { isMouseEvent: !0, on: e });
                    },
                },
                C = 15;
            function M(e) {
                viewEnv.addPreloadTexture(e);
            }
            function j(e) {
                viewEnv.setHitAreaPaddingsRem(e, e, e, e, C);
            }
            function P(e, t, n, r = 1) {
                return viewEnv.getWebBrowserTexturePath(e, t, n, r);
            }
            function N(e, t, n) {
                return viewEnv.addDataChangedCallback(e, t, n);
            }
            function B(e) {
                viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, C);
            }
            function S(e = 'px') {
                return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
            }
            function D(e, t, n = 'px') {
                return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
            }
            function I(e = 'rem') {
                const t = viewEnv.getViewGlobalPositionRem();
                return 'rem' === e ? t : { x: V(t.x), y: V(t.y) };
            }
            function F() {
                viewEnv.freezeTextureBeforeResize();
            }
            function z() {
                return viewEnv.getScale();
            }
            function W(e) {
                return viewEnv.pxToRem(e);
            }
            function V(e) {
                return viewEnv.remToPx(e);
            }
            function H(e, t) {
                viewEnv.setAnimateWindow(e, t);
            }
            function U() {
                return viewEnv.isFocused();
            }
            function G() {
                return viewEnv.setEventHandled();
            }
            function K() {
                return viewEnv.isEventHandled();
            }
            function q() {
                viewEnv.forceTriggerMouseMove();
            }
            function Y() {
                return viewEnv.getShowingStatus();
            }
            const $ = (() => {
                    let e = [];
                    return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                })(),
                Z = Object.keys(k).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === k[t]), e), {}),
                X = {
                    set: (e, t) => {
                        viewEnv.setExtraSizeRem(e, t);
                    },
                    get: (e, t) => {
                        viewEnv.getExtraSizeRem(e, t);
                    },
                },
                Q = Promise.all([
                    new Promise((e) => {
                        window.isDomBuilt ? e() : O.onDomBuilt(e);
                    }),
                    engine.whenReady,
                ]),
                J = { view: s, client: o, sound: w };
        },
        310: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(859);
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
                    const i = r.O.view.addModelObserver(e, n, o);
                    return (
                        i > 0
                            ? ((this._callbacks[i] = t),
                              n > 0 && (this._views[n] ? this._views[n].push(i) : (this._views[n] = [i])))
                            : console.error("Can't add callback for model:", e),
                        i
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
            o.__instance = void 0;
            const i = o;
        },
        421: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
            var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310),
                _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(461);
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
        461: (e, t, n) => {
            n.d(t, { B0: () => c, ry: () => g });
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
            const o = r;
            var i = n(310);
            const s = {
                    getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                    getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                    getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                    getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                    toUpperCase: (e) => systemLocale.toUpperCase(e),
                    toLowerCase: (e) => systemLocale.toUpperCase(e),
                },
                a = {
                    getNumberFormat: (e) => userLocale.getNumberFormat(e),
                    getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                    getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                };
            let c;
            var l;
            (((l = c || (c = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                (l[(l.MOVE = 16)] = 'MOVE'),
                (l[(l.CLOSE = 32)] = 'CLOSE'),
                (l[(l.MINIMIZE = 64)] = 'MINIMIZE'));
            const d = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                u = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                p = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
            let h, m;
            var f;
            (((f = h || (h = {}))[(f.NONE = -1)] = 'NONE'),
                (f[(f.ALT = 165)] = 'ALT'),
                (f[(f.ENTER = 13)] = 'ENTER'),
                (f[(f.ESCAPE = 27)] = 'ESCAPE'),
                (f[(f.SPACE = 32)] = 'SPACE'),
                (f[(f.END = 35)] = 'END'),
                (f[(f.HOME = 36)] = 'HOME'),
                (f[(f.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                (f[(f.ARROW_UP = 38)] = 'ARROW_UP'),
                (f[(f.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                (f[(f.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                (f[(f.NUM_PLUS = 107)] = 'NUM_PLUS'),
                (f[(f.NUM_MINUS = 109)] = 'NUM_MINUS'),
                (f[(f.PLUS = 187)] = 'PLUS'),
                (f[(f.MINUS = 189)] = 'MINUS'),
                (f[(f.PAGE_UP = 33)] = 'PAGE_UP'),
                (f[(f.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                (f[(f.BACKSPACE = 8)] = 'BACKSPACE'),
                (f[(f.DELETE = 46)] = 'DELETE'),
                (f[(f.TAB = 9)] = 'TAB'),
                (f[(f.KEY_N = 78)] = 'KEY_N'),
                (f[(f.KEY_1 = 49)] = 'KEY_1'),
                (f[(f.KEY_2 = 50)] = 'KEY_2'),
                (f[(f.KEY_3 = 51)] = 'KEY_3'),
                (f[(f.KEY_4 = 52)] = 'KEY_4'),
                (f[(f.KEY_5 = 53)] = 'KEY_5'),
                (f[(f.KEY_6 = 54)] = 'KEY_6'),
                (f[(f.KEY_7 = 55)] = 'KEY_7'),
                (f[(f.KEY_8 = 56)] = 'KEY_8'),
                (f[(f.KEY_9 = 57)] = 'KEY_9'),
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
                })(m || (m = {})));
            var v = n(859);
            const E = ['args'];
            function b(e, t, n, r, o, i, s) {
                try {
                    var a = e[i](s),
                        c = a.value;
                } catch (l) {
                    return void n(l);
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o);
            }
            const x = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                g = (function () {
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
                                return new Promise(function (r, o) {
                                    var i = e.apply(t, n);
                                    function s(e) {
                                        b(i, r, o, s, a, 'next', e);
                                    }
                                    function a(e) {
                                        b(i, r, o, s, a, 'throw', e);
                                    }
                                    s(void 0);
                                });
                            });
                    return function () {
                        return t.apply(this, arguments);
                    };
                })(),
                w = (e, t) => {
                    const n = 'GFViewEventProxy';
                    if (void 0 !== t) {
                        const o = t.args,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(t, E);
                        void 0 !== o
                            ? viewEnv.handleViewEvent(
                                  Object.assign({ __Type: n, type: e }, i, {
                                      arguments:
                                          ((r = o),
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
                            : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                    } else viewEnv.handleViewEvent({ __Type: n, type: e });
                    var r;
                },
                T = () => w(c.CLOSE),
                y = (e, t) => {
                    e.keyCode === h.ESCAPE && t();
                };
            var k = n(421);
            const O = o.instance,
                A = {
                    DataTracker: i.Z,
                    ViewModel: k.Z,
                    ViewEventType: c,
                    NumberFormatType: d,
                    RealFormatType: u,
                    TimeFormatType: _,
                    DateFormatType: p,
                    makeGlobalBoundingBox: x,
                    sendMoveEvent: (e) => w(c.MOVE, { isMouseEvent: !0, on: e }),
                    sendCloseEvent: T,
                    sendClosePopOverEvent: () => w(c.POP_OVER, { on: !1 }),
                    sendShowContextMenuEvent: (e, t, n = 0) => {
                        w(c.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                    },
                    sendShowPopOverEvent: (e, t, n, r, o = R.invalid('resId'), i) => {
                        const s = v.O.view.getViewGlobalPosition(),
                            a = n.getBoundingClientRect(),
                            l = a.x,
                            d = a.y,
                            u = a.width,
                            _ = a.height,
                            p = {
                                x: v.O.view.pxToRem(l) + s.x,
                                y: v.O.view.pxToRem(d) + s.y,
                                width: v.O.view.pxToRem(u),
                                height: v.O.view.pxToRem(_),
                            };
                        w(c.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: r || R.invalid('resId'),
                            targetID: o,
                            direction: t,
                            bbox: x(p),
                            on: !0,
                            args: i,
                        });
                    },
                    addEscapeListener: (e) => {
                        const t = (t) => y(t, e);
                        return (window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t));
                    },
                    closeOnEsc: (e) => {
                        y(e, T);
                    },
                    handleViewEvent: w,
                    onBindingsReady: g,
                    onLayoutReady: () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    isTooltipShown: () => viewEnv.isWindowShownByViewEvent(c.TOOLTIP),
                    isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(c.CONTEXT_MENU),
                    isPopOverShown: () => viewEnv.isWindowShownByViewEvent(c.POP_OVER),
                    dumpViewModel: function e(t) {
                        const n = {};
                        if ('object' != typeof t) return t;
                        for (const r in t)
                            if (Object.prototype.hasOwnProperty.call(t, r)) {
                                const o = Object.prototype.toString.call(t[r]);
                                if (o.startsWith('[object CoherentArrayProxy]')) {
                                    const o = t[r];
                                    n[r] = [];
                                    for (let t = 0; t < o.length; t++) n[r].push({ value: e(o[t].value) });
                                } else
                                    o.startsWith('[object class BW::WULF::ViewModel')
                                        ? (n[r] = e(t[r]))
                                        : (n[r] = t[r]);
                            }
                        return n;
                    },
                    ClickOutsideManager: O,
                    SystemLocale: s,
                    UserLocale: a,
                };
            window.ViewEnvHelper = A;
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
    }));
var __webpack_exports__ = {};
(() => {
    __webpack_require__.d(__webpack_exports__, { w: () => de });
    const e = ((t = { default: () => classNames }), (n = {}), __webpack_require__.d(n, t), n);
    var t, n;
    const r =
        ((o = {
            cloneElement: () => reactExports.cloneElement,
            default: () => React,
            useCallback: () => reactExports.useCallback,
            useEffect: () => reactExports.useEffect,
            useMemo: () => reactExports.useMemo,
            useRef: () => reactExports.useRef,
            useState: () => reactExports.useState,
        }),
        (i = {}),
        __webpack_require__.d(i, o),
        i);
    var o,
        i,
        s = __webpack_require__(461);
    const a = [
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
    function c(e) {
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
    const l = (e, t, n = {}, r = 0) => {
            viewEnv.handleViewEvent(
                Object.assign(
                    { __Type: 'GFViewEventProxy', type: s.B0.TOOLTIP, contentID: e, decoratorID: t, targetID: r },
                    n,
                ),
            );
        },
        d = (e) => {
            let t = e.children,
                n = e.contentId,
                o = e.args,
                i = e.onMouseEnter,
                s = e.onMouseLeave,
                d = e.onMouseDown,
                u = e.onClick,
                _ = e.ignoreShowDelay,
                p = void 0 !== _ && _,
                h = e.ignoreMouseClick,
                m = void 0 !== h && h,
                f = e.decoratorId,
                v = void 0 === f ? 0 : f,
                E = e.isEnabled,
                b = void 0 === E || E,
                x = e.targetId,
                g = void 0 === x ? 0 : x,
                w = e.onShow,
                T = e.onHide,
                y = (function (e, t) {
                    if (null == e) return {};
                    var n = {};
                    for (var r in e)
                        if ({}.hasOwnProperty.call(e, r)) {
                            if (t.indexOf(r) >= 0) continue;
                            n[r] = e[r];
                        }
                    return n;
                })(e, a);
            const k = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                O = (0, r.useMemo)(
                    () =>
                        g ||
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
                    [g],
                ),
                A = (0, r.useCallback)(() => {
                    (k.current.isVisible && k.current.timeoutId) ||
                        (l(n, v, { isMouseEvent: !0, on: !0, arguments: c(o) }, O),
                        w && w(),
                        (k.current.isVisible = !0));
                }, [n, v, o, O, w]),
                L = (0, r.useCallback)(() => {
                    if (k.current.isVisible || k.current.timeoutId) {
                        const e = k.current.timeoutId;
                        (e > 0 && (clearTimeout(e), (k.current.timeoutId = 0)),
                            l(n, v, { on: !1 }, O),
                            k.current.isVisible && T && T(),
                            (k.current.isVisible = !1));
                    }
                }, [n, v, O, T]),
                C = (0, r.useCallback)((e) => {
                    k.current.isVisible &&
                        ((k.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                        (k.current.hideTimerId = window.setTimeout(() => {
                            const t = document.elementFromPoint(e.clientX, e.clientY);
                            t && !t.isSameNode(k.current.prevTarget) && L();
                        }, 200)));
                }, []);
            return (
                (0, r.useEffect)(() => {
                    const e = k.current.hideTimerId;
                    return (
                        document.addEventListener('wheel', C, { capture: !0 }),
                        () => {
                            (document.removeEventListener('wheel', C, { capture: !0 }), e && window.clearTimeout(e));
                        }
                    );
                }, []),
                (0, r.useEffect)(() => {
                    !1 === b && L();
                }, [b, L]),
                (0, r.useEffect)(
                    () => (
                        window.addEventListener('mouseleave', L),
                        () => {
                            (window.removeEventListener('mouseleave', L), L());
                        }
                    ),
                    [L],
                ),
                b
                    ? (0, r.cloneElement)(
                          t,
                          Object.assign(
                              {
                                  onMouseEnter:
                                      ((M = t.props.onMouseEnter),
                                      (e) => {
                                          (e.clientX === window.innerWidth && e.clientY === window.innerHeight) ||
                                              ((k.current.timeoutId = window.setTimeout(A, p ? 100 : 400)),
                                              i && i(e),
                                              M && M(e));
                                      }),
                                  onMouseLeave: ((e) => (t) => {
                                      (L(), null == s || s(t), null == e || e(t));
                                  })(t.props.onMouseLeave),
                                  onClick: ((e) => (t) => {
                                      (!1 === m && L(), null == u || u(t), null == e || e(t));
                                  })(t.props.onClick),
                                  onMouseDown: ((e) => (t) => {
                                      (!1 === m && L(), null == d || d(t), null == e || e(t));
                                  })(t.props.onMouseDown),
                              },
                              y,
                          ),
                      )
                    : t
            );
            var M;
        },
        u = ['children'];
    function _() {
        return (
            (_ = Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                      }
                      return e;
                  }),
            _.apply(null, arguments)
        );
    }
    const p = (e) => {
            let t = e.children,
                n = (function (e, t) {
                    if (null == e) return {};
                    var n = {};
                    for (var r in e)
                        if ({}.hasOwnProperty.call(e, r)) {
                            if (t.indexOf(r) >= 0) continue;
                            n[r] = e[r];
                        }
                    return n;
                })(e, u);
            return r.default.createElement(
                d,
                _(
                    {
                        contentId:
                            R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId'),
                        ignoreShowDelay: !0,
                    },
                    n,
                ),
                t,
            );
        },
        h = ['children', 'body', 'header', 'note', 'alert', 'args'];
    function m() {
        return (
            (m = Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                      }
                      return e;
                  }),
            m.apply(null, arguments)
        );
    }
    const f = R.views.common.tooltip_window.simple_tooltip_content,
        v = (e) => {
            let t = e.children,
                n = e.body,
                o = e.header,
                i = e.note,
                s = e.alert,
                a = e.args,
                c = (function (e, t) {
                    if (null == e) return {};
                    var n = {};
                    for (var r in e)
                        if ({}.hasOwnProperty.call(e, r)) {
                            if (t.indexOf(r) >= 0) continue;
                            n[r] = e[r];
                        }
                    return n;
                })(e, h);
            const l = (0, r.useMemo)(() => {
                const e = Object.assign({}, a, { body: n, header: o, note: i, alert: s });
                for (const t in e) void 0 === e[t] && delete e[t];
                return e;
            }, [s, n, o, i, a]);
            return r.default.createElement(
                d,
                m(
                    {
                        contentId:
                            ((u = null == a ? void 0 : a.hasHtmlContent),
                            u ? f.SimpleTooltipHtmlContent('resId') : f.SimpleTooltipContent('resId')),
                        decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                        args: l,
                    },
                    c,
                ),
                t,
            );
            var u;
        };
    function E() {
        return (
            (E = Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                      }
                      return e;
                  }),
            E.apply(null, arguments)
        );
    }
    const b = ({ children: e, tooltipArgs: t, className: n }) => {
        if (!t) return e;
        const o = r.default.createElement('div', { className: n }, e);
        if (t.header || t.body) return r.default.createElement(v, t, o);
        const i = t.contentId;
        return i ? r.default.createElement(d, E({}, t, { contentId: i }), o) : r.default.createElement(p, t, o);
    };
    var x = (function () {
            if ('undefined' != typeof Map) return Map;
            function e(e, t) {
                var n = -1;
                return (
                    e.some(function (e, r) {
                        return e[0] === t && ((n = r), !0);
                    }),
                    n
                );
            }
            return (function () {
                function t() {
                    this.__entries__ = [];
                }
                return (
                    Object.defineProperty(t.prototype, 'size', {
                        get: function () {
                            return this.__entries__.length;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.get = function (t) {
                        var n = e(this.__entries__, t),
                            r = this.__entries__[n];
                        return r && r[1];
                    }),
                    (t.prototype.set = function (t, n) {
                        var r = e(this.__entries__, t);
                        ~r ? (this.__entries__[r][1] = n) : this.__entries__.push([t, n]);
                    }),
                    (t.prototype.delete = function (t) {
                        var n = this.__entries__,
                            r = e(n, t);
                        ~r && n.splice(r, 1);
                    }),
                    (t.prototype.has = function (t) {
                        return !!~e(this.__entries__, t);
                    }),
                    (t.prototype.clear = function () {
                        this.__entries__.splice(0);
                    }),
                    (t.prototype.forEach = function (e, t) {
                        void 0 === t && (t = null);
                        for (var n = 0, r = this.__entries__; n < r.length; n++) {
                            var o = r[n];
                            e.call(t, o[1], o[0]);
                        }
                    }),
                    t
                );
            })();
        })(),
        g = 'undefined' != typeof window && 'undefined' != typeof document && window.document === document,
        w =
            void 0 !== __webpack_require__.g && __webpack_require__.g.Math === Math
                ? __webpack_require__.g
                : 'undefined' != typeof self && self.Math === Math
                  ? self
                  : 'undefined' != typeof window && window.Math === Math
                    ? window
                    : Function('return this')(),
        T =
            'function' == typeof requestAnimationFrame
                ? requestAnimationFrame.bind(w)
                : function (e) {
                      return setTimeout(function () {
                          return e(Date.now());
                      }, 1e3 / 60);
                  },
        y = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
        k = 'undefined' != typeof MutationObserver,
        O = (function () {
            function e() {
                ((this.connected_ = !1),
                    (this.mutationEventsAdded_ = !1),
                    (this.mutationsObserver_ = null),
                    (this.observers_ = []),
                    (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                    (this.refresh = (function (e, t) {
                        var n = !1,
                            r = !1,
                            o = 0;
                        function i() {
                            (n && ((n = !1), e()), r && a());
                        }
                        function s() {
                            T(i);
                        }
                        function a() {
                            var e = Date.now();
                            if (n) {
                                if (e - o < 2) return;
                                r = !0;
                            } else ((n = !0), (r = !1), setTimeout(s, t));
                            o = e;
                        }
                        return a;
                    })(this.refresh.bind(this), 20)));
            }
            return (
                (e.prototype.addObserver = function (e) {
                    (~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_());
                }),
                (e.prototype.removeObserver = function (e) {
                    var t = this.observers_,
                        n = t.indexOf(e);
                    (~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_());
                }),
                (e.prototype.refresh = function () {
                    this.updateObservers_() && this.refresh();
                }),
                (e.prototype.updateObservers_ = function () {
                    var e = this.observers_.filter(function (e) {
                        return (e.gatherActive(), e.hasActive());
                    });
                    return (
                        e.forEach(function (e) {
                            return e.broadcastActive();
                        }),
                        e.length > 0
                    );
                }),
                (e.prototype.connect_ = function () {
                    g &&
                        !this.connected_ &&
                        (document.addEventListener('transitionend', this.onTransitionEnd_),
                        window.addEventListener('resize', this.refresh),
                        k
                            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
                              this.mutationsObserver_.observe(document, {
                                  attributes: !0,
                                  childList: !0,
                                  characterData: !0,
                                  subtree: !0,
                              }))
                            : (document.addEventListener('DOMSubtreeModified', this.refresh),
                              (this.mutationEventsAdded_ = !0)),
                        (this.connected_ = !0));
                }),
                (e.prototype.disconnect_ = function () {
                    g &&
                        this.connected_ &&
                        (document.removeEventListener('transitionend', this.onTransitionEnd_),
                        window.removeEventListener('resize', this.refresh),
                        this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                        this.mutationEventsAdded_ && document.removeEventListener('DOMSubtreeModified', this.refresh),
                        (this.mutationsObserver_ = null),
                        (this.mutationEventsAdded_ = !1),
                        (this.connected_ = !1));
                }),
                (e.prototype.onTransitionEnd_ = function (e) {
                    var t = e.propertyName,
                        n = void 0 === t ? '' : t;
                    y.some(function (e) {
                        return !!~n.indexOf(e);
                    }) && this.refresh();
                }),
                (e.getInstance = function () {
                    return (this.instance_ || (this.instance_ = new e()), this.instance_);
                }),
                (e.instance_ = null),
                e
            );
        })(),
        A = function (e, t) {
            for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                var o = r[n];
                Object.defineProperty(e, o, { value: t[o], enumerable: !1, writable: !1, configurable: !0 });
            }
            return e;
        },
        L = function (e) {
            return (e && e.ownerDocument && e.ownerDocument.defaultView) || w;
        },
        C = N(0, 0, 0, 0);
    function M(e) {
        return parseFloat(e) || 0;
    }
    function j(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return t.reduce(function (t, n) {
            return t + M(e['border-' + n + '-width']);
        }, 0);
    }
    var P =
        'undefined' != typeof SVGGraphicsElement
            ? function (e) {
                  return e instanceof L(e).SVGGraphicsElement;
              }
            : function (e) {
                  return e instanceof L(e).SVGElement && 'function' == typeof e.getBBox;
              };
    function N(e, t, n, r) {
        return { x: e, y: t, width: n, height: r };
    }
    var B = (function () {
            function e(e) {
                ((this.broadcastWidth = 0),
                    (this.broadcastHeight = 0),
                    (this.contentRect_ = N(0, 0, 0, 0)),
                    (this.target = e));
            }
            return (
                (e.prototype.isActive = function () {
                    var e = (function (e) {
                        return g
                            ? P(e)
                                ? (function (e) {
                                      var t = e.getBBox();
                                      return N(0, 0, t.width, t.height);
                                  })(e)
                                : (function (e) {
                                      var t = e.offsetWidth,
                                          n = e.offsetHeight;
                                      if (!t && !n) return C;
                                      var r,
                                          o = L(e).getComputedStyle(e),
                                          i = (function (e) {
                                              for (
                                                  var t = {}, n = 0, r = ['top', 'right', 'bottom', 'left'];
                                                  n < r.length;
                                                  n++
                                              ) {
                                                  var o = r[n],
                                                      i = e['padding-' + o];
                                                  t[o] = M(i);
                                              }
                                              return t;
                                          })(o),
                                          s = i.left + i.right,
                                          a = i.top + i.bottom,
                                          c = M(o.width),
                                          l = M(o.height);
                                      if (
                                          ('border-box' === o.boxSizing &&
                                              (Math.round(c + s) !== t && (c -= j(o, 'left', 'right') + s),
                                              Math.round(l + a) !== n && (l -= j(o, 'top', 'bottom') + a)),
                                          (r = e) !== L(r).document.documentElement)
                                      ) {
                                          var d = Math.round(c + s) - t,
                                              u = Math.round(l + a) - n;
                                          (1 !== Math.abs(d) && (c -= d), 1 !== Math.abs(u) && (l -= u));
                                      }
                                      return N(i.left, i.top, c, l);
                                  })(e)
                            : C;
                    })(this.target);
                    return (
                        (this.contentRect_ = e),
                        e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                    );
                }),
                (e.prototype.broadcastRect = function () {
                    var e = this.contentRect_;
                    return ((this.broadcastWidth = e.width), (this.broadcastHeight = e.height), e);
                }),
                e
            );
        })(),
        S = function (e, t) {
            var n,
                r,
                o,
                i,
                s,
                a,
                c,
                l =
                    ((r = (n = t).x),
                    (o = n.y),
                    (i = n.width),
                    (s = n.height),
                    (a = 'undefined' != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
                    (c = Object.create(a.prototype)),
                    A(c, { x: r, y: o, width: i, height: s, top: o, right: r + i, bottom: s + o, left: r }),
                    c);
            A(this, { target: e, contentRect: l });
        },
        D = (function () {
            function e(e, t, n) {
                if (((this.activeObservations_ = []), (this.observations_ = new x()), 'function' != typeof e))
                    throw new TypeError('The callback provided as parameter 1 is not a function.');
                ((this.callback_ = e), (this.controller_ = t), (this.callbackCtx_ = n));
            }
            return (
                (e.prototype.observe = function (e) {
                    if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                    if ('undefined' != typeof Element && Element instanceof Object) {
                        if (!(e instanceof L(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                        var t = this.observations_;
                        t.has(e) ||
                            (t.set(e, new B(e)), this.controller_.addObserver(this), this.controller_.refresh());
                    }
                }),
                (e.prototype.unobserve = function (e) {
                    if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                    if ('undefined' != typeof Element && Element instanceof Object) {
                        if (!(e instanceof L(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                        var t = this.observations_;
                        t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this));
                    }
                }),
                (e.prototype.disconnect = function () {
                    (this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this));
                }),
                (e.prototype.gatherActive = function () {
                    var e = this;
                    (this.clearActive(),
                        this.observations_.forEach(function (t) {
                            t.isActive() && e.activeObservations_.push(t);
                        }));
                }),
                (e.prototype.broadcastActive = function () {
                    if (this.hasActive()) {
                        var e = this.callbackCtx_,
                            t = this.activeObservations_.map(function (e) {
                                return new S(e.target, e.broadcastRect());
                            });
                        (this.callback_.call(e, t, e), this.clearActive());
                    }
                }),
                (e.prototype.clearActive = function () {
                    this.activeObservations_.splice(0);
                }),
                (e.prototype.hasActive = function () {
                    return this.activeObservations_.length > 0;
                }),
                e
            );
        })(),
        I = 'undefined' != typeof WeakMap ? new WeakMap() : new x(),
        F = function e(t) {
            if (!(this instanceof e)) throw new TypeError('Cannot call a class as a function.');
            if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
            var n = O.getInstance(),
                r = new D(t, n, this);
            I.set(this, r);
        };
    ['observe', 'unobserve', 'disconnect'].forEach(function (e) {
        F.prototype[e] = function () {
            var t;
            return (t = I.get(this))[e].apply(t, arguments);
        };
    });
    const z = void 0 !== w.ResizeObserver ? w.ResizeObserver : F,
        W = {
            base: 'ExtendedText-ExtendedText_base_63',
            base__zeroPadding: 'ExtendedText-ExtendedText_base__zeroPadding_28',
            base__isTruncationAvailable: 'ExtendedText-ExtendedText_base__isTruncationAvailable_d7',
            truncated: 'ExtendedText-ExtendedText_truncated_27',
            truncated__hide: 'ExtendedText-ExtendedText_truncated__hide_67',
            unTruncated: 'ExtendedText-ExtendedText_unTruncated_53',
            tooltip: 'ExtendedText-ExtendedText_tooltip_a5',
            'tooltip__justify-flex-start': 'ExtendedText-ExtendedText_tooltip__justify-flex-start_03',
            'tooltip__justify-center': 'ExtendedText-ExtendedText_tooltip__justify-center_d1',
            'tooltip__justify-flex-end': 'ExtendedText-ExtendedText_tooltip__justify-flex-end_4a',
            'tooltip__align-flex-start': 'ExtendedText-ExtendedText_tooltip__align-flex-start_df',
            'tooltip__align-center': 'ExtendedText-ExtendedText_tooltip__align-center_d2',
            'tooltip__align-flex-end': 'ExtendedText-ExtendedText_tooltip__align-flex-end_3b',
        };
    let V, H, U, G;
    (!(function (e) {
        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
    })(V || (V = {})),
        (function (e) {
            ((e[(e.Word = 0)] = 'Word'),
                (e[(e.LineBreak = 1)] = 'LineBreak'),
                (e[(e.NewLine = 2)] = 'NewLine'),
                (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                (e[(e.Binding = 5)] = 'Binding'));
        })(H || (H = {})),
        (function (e) {
            ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
        })(U || (U = {})),
        (function (e) {
            ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
        })(G || (G = {})));
    const K = { [G.NBSP]: H.NoBreakSymbol, [G.ZWNBSP]: H.NoBreakSymbol, [G.NEW_LINE]: H.LineBreak },
        q = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(R.strings.settings.LANGUAGE_CODE().toLowerCase()),
        Y = {
            blackReal: 'ExtendedText-colors_blackReal_7b',
            whiteReal: 'ExtendedText-colors_whiteReal_2b',
            white: 'ExtendedText-colors_white_08',
            whiteOrange: 'ExtendedText-colors_whiteOrange_75',
            whiteSpanish: 'ExtendedText-colors_whiteSpanish_12',
            par: 'ExtendedText-colors_par_7e',
            parSecondary: 'ExtendedText-colors_parSecondary_fd',
            parTertiary: 'ExtendedText-colors_parTertiary_9c',
            red: 'ExtendedText-colors_red_fd',
            redDark: 'ExtendedText-colors_redDark_ee',
            yellow: 'ExtendedText-colors_yellow_9b',
            orange: 'ExtendedText-colors_orange_6e',
            cream: 'ExtendedText-colors_cream_83',
            brown: 'ExtendedText-colors_brown_32',
            greenBright: 'ExtendedText-colors_greenBright_87',
            green: 'ExtendedText-colors_green_23',
            greenDark: 'ExtendedText-colors_greenDark_44',
            blueBooster: 'ExtendedText-colors_blueBooster_6f',
            blueTeamkiller: 'ExtendedText-colors_blueTeamkiller_51',
            cred: 'ExtendedText-colors_cred_f4',
            gold: 'ExtendedText-colors_gold_ec',
            bond: 'ExtendedText-colors_bond_2f',
            prom: 'ExtendedText-colors_prom_2a',
        },
        $ = 'ExtendedText-renderers_word_2b',
        Z = (e) => ({ color: `#${e}` }),
        X = ({ elementList: t, textBlock: n, key: o }) => {
            const i = n.colorTag;
            return i
                ? Y[i]
                    ? r.default.createElement(
                          'span',
                          { key: o, 'data-block-type': n.blockType, className: (0, e.default)($, Y[i]) },
                          t,
                      )
                    : r.default.createElement(
                          'span',
                          { key: o, 'data-block-type': n.blockType, className: $, style: Z(i) },
                          t,
                      )
                : r.default.createElement('span', { key: o, 'data-block-type': n.blockType, className: $ }, t);
        },
        Q = {
            [H.Word]: X,
            [H.NoBreakSymbol]: X,
            [H.Binding]: ({ elementList: e, textBlock: t, key: n }) =>
                r.default.createElement(
                    'span',
                    { key: n, 'data-block-type': t.blockType },
                    e.map((e) => r.default.createElement(r.default.Fragment, { key: n }, e)),
                ),
            [H.LineBreak]: ({ key: e }) =>
                r.default.createElement('span', {
                    key: e,
                    'data-block-type': H.LineBreak,
                    className: 'ExtendedText-renderers_lineBreak_c3',
                }),
            [H.NewLine]: ({ elementList: e, key: t }) =>
                r.default.createElement(
                    'span',
                    { key: t, 'data-block-type': H.NewLine, className: 'ExtendedText-renderers_newLine_20' },
                    e,
                ),
            [H.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                r.default.createElement(
                    'span',
                    {
                        key: t,
                        'data-block-type': H.NoBreakWrapper,
                        className: 'ExtendedText-renderers_noBreakWrapper_45',
                    },
                    e,
                ),
        },
        J = (e, t, n) => {
            const r = [];
            return (
                e.childList.forEach((o, i) => {
                    const s = `${n}_${i}`;
                    if (void 0 !== o.childList) {
                        const e = o,
                            t = e.blockType,
                            n = J(e, Q[t], s);
                        r.push(...n);
                    } else r.push(t({ elementList: [o], textBlock: e, key: s }));
                }),
                r
            );
        },
        ee = (e, t, n, r) => {
            let o = t.exec(e),
                i = 0;
            for (; o; ) (i !== o.index && n(e.slice(i, o.index)), r(o), (i = t.lastIndex), (o = t.exec(e)));
            i !== e.length && n(e.slice(i));
        },
        te = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
        ne = q
            ? (e) => {
                  const t = [];
                  return (
                      ee(
                          e,
                          /[^a-zA-Z0-9]+/g,
                          (e) => {
                              t.push(e);
                          },
                          (e) => {
                              t.push(
                                  ...((e) => {
                                      const t = [];
                                      return (
                                          ee(
                                              e,
                                              /\S\s+/g,
                                              (e) => {
                                                  var n;
                                                  'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                                      ? t.push(...((n = e), n.match(te) || []))
                                                      : t.push(...e.split(''));
                                              },
                                              (e) => {
                                                  t.push(e[0]);
                                              },
                                          ),
                                          t
                                      );
                                  })(e[0]),
                              );
                          },
                      ),
                      t
                  );
              }
            : (e, t) => {
                  const n = /[\s\u002d]/g;
                  let r = n.exec(e);
                  if (!r) return [e];
                  const o = [];
                  let i = 0;
                  for (; r; ) {
                      const s = t.justifyContent === U.FlexEnd ? r.index : n.lastIndex;
                      (o.push(e.slice(i, s)), (i = s), (r = n.exec(e)));
                  }
                  return (i !== e.length && o.push(e.slice(i)), o);
              },
        re = (e, t = '', n) => {
            const r = [];
            return (
                ee(
                    e,
                    /(\n+|[\xa0\ufeff]+)/g,
                    (e) => {
                        r.push({ blockType: H.Word, colorTag: t, childList: ne(e, n) });
                    },
                    (e) => {
                        const n = e[0],
                            o = K[n.charAt(0)];
                        o === H.LineBreak
                            ? r.push(
                                  ...((e) => {
                                      const t = [{ blockType: H.LineBreak, colorTag: '', childList: [e.charAt(0)] }];
                                      for (let n = 0; n < e.length - 1; n++)
                                          t.push({ blockType: H.NewLine, colorTag: '', childList: [e.charAt(0)] });
                                      return t;
                                  })(n),
                              )
                            : r.push({ blockType: o, colorTag: t, childList: [n] });
                    },
                ),
                r
            );
        },
        oe = (e, t, n = '', r) => {
            const o = [];
            return (
                ee(
                    e,
                    /(?:%\(|{)(.*?)[)}][sd]?/g,
                    (e) => {
                        o.push(...re(e, n, r));
                    },
                    (e) => {
                        const i = e[1],
                            s = void 0 === t[i] ? e[0] : t[i];
                        'string' == typeof s || 'number' == typeof s
                            ? o.push(...re(String(s), n, r))
                            : o.push({ blockType: H.Binding, colorTag: n, childList: [s] });
                    },
                ),
                o
            );
        },
        ie = (e, t) => {
            if (!e) return [t];
            const n = [],
                r = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
            if (e.blockType === H.NoBreakWrapper) (e.childList.push(r), n.push(e));
            else {
                const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                (e.childList.length > 0 && n.push(e),
                    n.push({ blockType: H.NoBreakWrapper, colorTag: '', childList: [t, r] }));
            }
            return (t.childList.length > 0 && n.push(t), n);
        },
        se = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
        ae = (e, t) => e.offsetLeft + e.offsetWidth - t,
        ce = (e, t, n) => {
            if (!e || !e.textContent) return [!1, 0];
            if (e.offsetLeft > t) return [!1, 0];
            const r = ae(e, t),
                o = e.textContent.length,
                i = e.offsetWidth / o,
                s = Math.ceil(r / i);
            if (r > 0) {
                const r = Math.floor((t - e.offsetLeft) / i);
                return r >= n ? [!0, n + s] : [!1, r];
            }
            const a = Math.max(n + s, 0);
            return o < a ? [!1, 0] : [!0, a];
        },
        le = (e, t, n, o, i, s) => {
            let a = -1,
                c = null;
            for (let l = n; l >= 0; l--) {
                const n = e[l],
                    d = Number(e[l].getAttribute('data-block-type'));
                if (d === H.LineBreak || d === H.NewLine || d === H.Binding) continue;
                const u = n.textContent || '';
                if (!(n.childElementCount > 1)) {
                    const e = ce(n, o, i),
                        d = e[0],
                        _ = e[1];
                    if (!d) {
                        _ > 0 && (i -= _);
                        continue;
                    }
                    const p = u.slice(0, u.length - _) + s,
                        h = t[l];
                    ((c = r.default.cloneElement(h, h.props, p)), (a = l));
                    break;
                }
                {
                    const e = n.children,
                        d = t[l],
                        _ = d.props.children,
                        p = le(e, _, e.length - 1, o, i, s),
                        h = p[0],
                        m = p[1];
                    if (!(h < 0)) {
                        const e = _.slice(0, h);
                        ((c = r.default.cloneElement(d, d.props, e, m)), (a = l));
                        break;
                    }
                    i -= u.length;
                }
            }
            return [a, c];
        },
        de = r.default.memo(
            ({
                text: t,
                classMix: n,
                onSizeChanged: o,
                binding: i,
                isTooltipEnable: s = !1,
                isTruncationAvailable: a = !1,
                customTooltipArgs: c,
                targetId: l,
                justifyContent: d = U.FlexStart,
                alignContent: u = U.FlexStart,
                truncateIdentify: _ = '...',
            }) => {
                const p = (0, r.useRef)(null),
                    h = (0, r.useRef)({ height: 0, width: 0 }),
                    m = (0, r.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                    f = m[0],
                    v = m[1],
                    E = (0, r.useMemo)(
                        () =>
                            ((e, t = {}, n) => {
                                return e
                                    ? ((e) => {
                                          const t = [];
                                          return (
                                              e.forEach((e, n) => {
                                                  t.push(
                                                      ...((e, t) => {
                                                          const n = [],
                                                              r = e.blockType,
                                                              o = Q[r],
                                                              i = J(e, o, t);
                                                          return (
                                                              r === H.NoBreakWrapper
                                                                  ? n.push(
                                                                        o({
                                                                            elementList: i,
                                                                            textBlock: e,
                                                                            key: `${t}`,
                                                                        }),
                                                                    )
                                                                  : n.push(...i),
                                                              n
                                                          );
                                                      })(e, n),
                                                  );
                                              }),
                                              t
                                          );
                                      })(
                                          ((e) => {
                                              const t = [];
                                              let n = !1;
                                              return (
                                                  e.forEach((e) => {
                                                      e.blockType === H.NoBreakSymbol
                                                          ? ((n = !0), t.push(...ie(t.pop(), e)))
                                                          : (n ? t.push(...ie(t.pop(), e)) : t.push(e), (n = !1));
                                                  }),
                                                  t
                                              );
                                          })(
                                              ((e, t, n) => {
                                                  const r = [];
                                                  return (
                                                      ee(
                                                          e,
                                                          /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                                          (e) => {
                                                              r.push(...oe(e, t, '', n));
                                                          },
                                                          (e) => {
                                                              r.push(...oe(e[2] + e[3], t, e[1], n));
                                                          },
                                                      ),
                                                      r
                                                  );
                                              })(
                                                  ((r = e), r.replace(/&nbsp;/g, ' ')).replace(/&zwnbsp;/g, '\ufeff'),
                                                  t,
                                                  n,
                                              ),
                                          ),
                                      )
                                    : [];
                                var r;
                            })(t, i, { justifyContent: d }),
                        [i, d, t],
                    ),
                    x = (0, r.useMemo)(() => {
                        if (s && f.isTruncated && (!i || !Object.values(i).find((e) => 'object' == typeof e)))
                            return {
                                args: Object.assign({ text: t }, c, { stringifyKwargs: i ? JSON.stringify(i) : '' }),
                                contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                targetId: l,
                            };
                    }, [i, s, l, t, c, f.isTruncated]),
                    g = (0, r.useCallback)(
                        (e) => {
                            ((h.current.width = e.contentRect.width), (h.current.height = e.contentRect.height));
                            const t = ((e, t, n, r = '...') => {
                                    const o = [...t],
                                        i = e.current;
                                    if (!i) return [o, !1];
                                    const s = n.height,
                                        a = n.width,
                                        c = i.lastElementChild;
                                    if (!se(c, s) && ae(c, a) <= 0) return [o, !1];
                                    const l = i.children,
                                        d = ((e, t) => {
                                            let n = 0,
                                                r = e.length - 1;
                                            for (; r - n >= 0; ) {
                                                const o = n + Math.ceil(0.5 * (r - n));
                                                se(e[o], t) ? (r = o - 1) : (n = o + 1);
                                            }
                                            return n - 1;
                                        })(l, s);
                                    if (d < 0) return [o, !1];
                                    const u = le(l, o, d, a, r.length, r),
                                        _ = u[0],
                                        p = u[1];
                                    return (p && (o.splice(_, 1, p), o.splice(_ + 1)), [o, !0]);
                                })(p, E, h.current, _),
                                n = t[0],
                                r = t[1];
                            (v({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), o && o(r));
                        },
                        [o, _, E],
                    ),
                    w = (0, r.useMemo)(() => ({ justifyContent: d, alignContent: u }), [u, d]);
                return (
                    ((e, t, n = !0) => {
                        const o = (0, r.useCallback)(
                            (e) => {
                                const n = e[0];
                                t && t(n);
                            },
                            [t],
                        );
                        (0, r.useEffect)(() => {
                            if (!e.current || !n) return;
                            const t = new z((e) => o(e));
                            return (
                                t.observe(e.current),
                                () => {
                                    t.disconnect();
                                }
                            );
                        }, [o, n, e]);
                    })(p, g, a),
                    r.default.createElement(
                        'div',
                        {
                            className: (0, e.default)(
                                W.base,
                                n,
                                W.base__zeroPadding,
                                a && W.base__isTruncationAvailable,
                            ),
                            style: w,
                        },
                        r.default.createElement('div', { className: W.unTruncated, ref: p }, E),
                        r.default.createElement(
                            b,
                            {
                                tooltipArgs: x,
                                className: (0, e.default)(
                                    W.tooltip,
                                    W[`tooltip__justify-${d}`],
                                    W[`tooltip__align-${u}`],
                                ),
                            },
                            r.default.createElement(
                                'div',
                                {
                                    className: (0, e.default)(
                                        W.truncated,
                                        !f.isTruncateFinished && a && W.truncated__hide,
                                    ),
                                    style: w,
                                },
                                f.isTruncateFinished && a ? f.elementList : E,
                            ),
                        ),
                    )
                );
            },
        );
})();
var __webpack_exports__ExtendedText = __webpack_exports__.w;
const base$1 = 'Index_f505a04a',
    styles$1 = { base: base$1 },
    ProgressBar = reactExports.memo(function (e) {
        return jsxRuntimeExports.jsx(ProgressBar$1, { ...e, classNames: { background: styles$1.base } });
    });
var PerformanceRiskEnum = ((e) => (
        (e.LowRisk = 'lowRisk'),
        (e.MediumRisk = 'mediumRisk'),
        (e.HighRisk = 'highRisk'),
        e
    ))(PerformanceRiskEnum || {}),
    State = ((e) => (
        (e.Intro = 'intro'),
        (e.InProgress = 'inProgress'),
        (e.Frozen = 'frozen'),
        (e.InAnnouncement = 'inAnnouncement'),
        e
    ))(State || {});
const [ModelProvider, useModel] = initializeModelWithContext()(
        ({ observableModel: e }) => ({ root: e.object() }),
        noop,
    ),
    root = 'BannerTooltipApp_root_c818429a',
    header = 'BannerTooltipApp_header_e36b3955',
    year = 'BannerTooltipApp_year_9fefb07c',
    description = 'BannerTooltipApp_description_65f0fb86',
    descriptionText = 'BannerTooltipApp_descriptionText_d33d1f76',
    progressionCounter = 'BannerTooltipApp_progressionCounter_16c94a79',
    hint_text = 'BannerTooltipApp_hint_text_7486b384',
    title = 'BannerTooltipApp_title_d595f0a',
    title__withIcon = 'BannerTooltipApp_title__withIcon_dec67f66',
    text = 'BannerTooltipApp_text_193a8d9a',
    base = 'BannerTooltipApp_4be154eb',
    img = 'BannerTooltipApp_img_49a5faf7',
    img__frozen = 'BannerTooltipApp_img__frozen_23d5a34d',
    container = 'BannerTooltipApp_container_a718990d',
    progression = 'BannerTooltipApp_progression_2f0041c1',
    progressionCounter_number__current = 'BannerTooltipApp_progressionCounter_number__current_2db4aeb2',
    progressionCounter_number__maximum = 'BannerTooltipApp_progressionCounter_number__maximum_ccab9b8',
    progressionCounter_icon = 'BannerTooltipApp_progressionCounter_icon_9281584f',
    progressionCompleted = 'BannerTooltipApp_progressionCompleted_187cbb96',
    progressionBarContainer = 'BannerTooltipApp_progressionBarContainer_acd988d',
    hint = 'BannerTooltipApp_hint_39569e77',
    hint_icon = 'BannerTooltipApp_hint_icon_cedfba9',
    performance = 'BannerTooltipApp_performance_84e533b8',
    base__mediumRisk = 'BannerTooltipApp_base__mediumRisk_c818429a',
    base__highRisk = 'BannerTooltipApp_base__highRisk_c818429a',
    icon = 'BannerTooltipApp_icon_bd4436c5',
    divider = 'BannerTooltipApp_divider_3edcbe1c',
    date = 'BannerTooltipApp_date_7248741a',
    date_text = 'BannerTooltipApp_date_text_e764573f',
    date_announcementText = 'BannerTooltipApp_date_announcementText_67d1111f',
    date_icon = 'BannerTooltipApp_date_icon_94272b91',
    date_icon_open = 'BannerTooltipApp_date_icon_open_5e9dbe35',
    date_icon_lock = 'BannerTooltipApp_date_icon_lock_4c0448d9',
    date_wrapper = 'BannerTooltipApp_date_wrapper_c1d2c0f2',
    nextTimeEnabled = 'BannerTooltipApp_nextTimeEnabled_2e31cc3e',
    styles = {
        root: root,
        'header-h80': 'BannerTooltipApp_header-h80_fa752339',
        'header-h56': 'BannerTooltipApp_header-h56_99bac28d',
        'header-h40': 'BannerTooltipApp_header-h40_2231a719',
        'header-h32': 'BannerTooltipApp_header-h32_25219081',
        'header-h28': 'BannerTooltipApp_header-h28_5a4ac435',
        'header-h26': 'BannerTooltipApp_header-h26_c87d4b0',
        'header-h24': 'BannerTooltipApp_header-h24_c818429a',
        header: header,
        'header-h22': 'BannerTooltipApp_header-h22_44c0e103',
        'header-h20': 'BannerTooltipApp_header-h20_bb029fad',
        'header-h18': 'BannerTooltipApp_header-h18_ccb3f44f',
        'header-h16': 'BannerTooltipApp_header-h16_baa38c02',
        'paragraph-p20': 'BannerTooltipApp_paragraph-p20_5bf18635',
        'paragraph-p18': 'BannerTooltipApp_paragraph-p18_c818429a',
        year: year,
        description: description,
        descriptionText: descriptionText,
        progressionCounter: progressionCounter,
        hint_text: hint_text,
        title: title,
        title__withIcon: title__withIcon,
        text: text,
        'paragraph-p16': 'BannerTooltipApp_paragraph-p16_baa38c02',
        base: base,
        img: img,
        img__frozen: img__frozen,
        container: container,
        progression: progression,
        progressionCounter_number__current: progressionCounter_number__current,
        progressionCounter_number__maximum: progressionCounter_number__maximum,
        progressionCounter_icon: progressionCounter_icon,
        progressionCompleted: progressionCompleted,
        progressionBarContainer: progressionBarContainer,
        hint: hint,
        hint_icon: hint_icon,
        performance: performance,
        base__mediumRisk: base__mediumRisk,
        base__highRisk: base__highRisk,
        icon: icon,
        divider: divider,
        date: date,
        date_text: date_text,
        date_announcementText: date_announcementText,
        date_icon: date_icon,
        date_icon_open: date_icon_open,
        date_icon_lock: date_icon_lock,
        date_wrapper: date_wrapper,
        nextTimeEnabled: nextTimeEnabled,
    },
    LOCALE_PATH = R.strings.white_tiger_tooltips.bannerTooltip,
    BannerTooltipApp = () => {
        const { model: e } = useModel(),
            {
                performanceRisk: t,
                endDate: n,
                date: r,
                maxProgressionStep: o,
                finishedLevelsCount: i,
                nextTimeEnable: s,
                state: a,
            } = e.root.get(),
            c = a === State.Frozen,
            l = a === State.InAnnouncement,
            d = Math.floor(Date.now() / 1e3),
            u = Math.max(0, n - d),
            _ = Math.max(0, s),
            p = r - d <= 86400 && r - d > 0,
            h = 0 === _ && c;
        return jsxRuntimeExports.jsxs('div', {
            className: classNames(styles.base, styles[`base__${t}`]),
            children: [
                jsxRuntimeExports.jsx('div', { className: classNames(styles.img, (c || l) && styles.img__frozen) }),
                jsxRuntimeExports.jsxs('div', {
                    className: styles.container,
                    children: [
                        jsxRuntimeExports.jsx('div', { className: styles.header, children: LOCALE_PATH.header() }),
                        jsxRuntimeExports.jsx('div', { className: styles.year, children: LOCALE_PATH.year() }),
                        jsxRuntimeExports.jsxs('div', {
                            className: styles.description,
                            children: [
                                !c &&
                                    !l &&
                                    jsxRuntimeExports.jsxs('div', {
                                        className: styles.progression,
                                        children: [
                                            a !== State.Intro &&
                                                jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                                                    children: [
                                                        jsxRuntimeExports.jsxs('div', {
                                                            className: styles.progressionCounter,
                                                            children: [
                                                                jsxRuntimeExports.jsx('div', {
                                                                    className:
                                                                        styles.progressionCounter_number__current,
                                                                    children: Math.min(i + 1, o),
                                                                }),
                                                                '/',
                                                                jsxRuntimeExports.jsx('div', {
                                                                    className:
                                                                        styles.progressionCounter_number__maximum,
                                                                    children: o,
                                                                }),
                                                                jsxRuntimeExports.jsx('div', {
                                                                    className: styles.progressionCounter_icon,
                                                                }),
                                                            ],
                                                        }),
                                                        jsxRuntimeExports.jsx('div', {
                                                            className: styles.progressionBarContainer,
                                                            children: jsxRuntimeExports.jsx(ProgressBar, {
                                                                size: 'full',
                                                                value: Math.max(0, i),
                                                                maxValue: Math.max(1, o),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            i === o &&
                                                jsxRuntimeExports.jsx('div', {
                                                    className: styles.progressionCompleted,
                                                    children: LOCALE_PATH.allStagesAreCompleted(),
                                                }),
                                        ],
                                    }),
                                jsxRuntimeExports.jsx(__webpack_exports__ExtendedText, {
                                    classMix: styles.descriptionText,
                                    text: LOCALE_PATH.description(),
                                }),
                                jsxRuntimeExports.jsxs('div', {
                                    className: styles.hint,
                                    children: [
                                        jsxRuntimeExports.jsx('div', {
                                            className: styles.hint_icon,
                                            children: LOCALE_PATH.mode(),
                                        }),
                                        jsxRuntimeExports.jsx('div', {
                                            className: styles.hint_text,
                                            children: LOCALE_PATH.modeHint(),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        !c &&
                            !l &&
                            t &&
                            jsxRuntimeExports.jsxs('div', {
                                className: styles.performance,
                                children: [
                                    t !== PerformanceRiskEnum.LowRisk &&
                                        jsxRuntimeExports.jsx('div', { className: styles.icon }),
                                    jsxRuntimeExports.jsx('div', {
                                        className: classNames(
                                            styles.title,
                                            t !== PerformanceRiskEnum.LowRisk && styles.title__withIcon,
                                        ),
                                        children: LOCALE_PATH.performanceRisk.title.$dyn(t),
                                    }),
                                    jsxRuntimeExports.jsx('div', {
                                        className: styles.text,
                                        children: LOCALE_PATH.performanceRisk.text.$dyn(t),
                                    }),
                                ],
                            }),
                        jsxRuntimeExports.jsx('div', { className: styles.divider }),
                        jsxRuntimeExports.jsxs('div', {
                            className: classNames(styles.date, c && styles.date__frozen),
                            children: [
                                c &&
                                    0 !== _ &&
                                    jsxRuntimeExports.jsx('div', {
                                        className: styles.date_text,
                                        children: LOCALE_PATH.expiryDate.frozen(),
                                    }),
                                h &&
                                    jsxRuntimeExports.jsx('div', {
                                        className: styles.date_text,
                                        children: LOCALE_PATH.expiryDate.technicalPause(),
                                    }),
                                l &&
                                    jsxRuntimeExports.jsx('div', {
                                        className: styles.date_announcementText,
                                        children: LOCALE_PATH.expiryDate.inAnnouncement(),
                                    }),
                                !h &&
                                    !(l && !p) &&
                                    jsxRuntimeExports.jsx('div', {
                                        className: styles.date_wrapper,
                                        children: jsxRuntimeExports.jsx(Timer, {
                                            start: c || l ? _ : u,
                                            type: c || l ? Timer.type.cooldown : Timer.type.accent,
                                            size: Timer.size.x16x16,
                                        }),
                                    }),
                                !p &&
                                    l &&
                                    0 === _ &&
                                    jsxRuntimeExports.jsx('div', {
                                        className: styles.nextTimeEnabled,
                                        children: jsxRuntimeExports.jsx(DateRange, {
                                            startDate: r,
                                            endDate: n,
                                            format: DateRange.format.full,
                                            className: styles.dateRange,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
runView(
    jsxRuntimeExports.jsx(ModelProvider, {
        children: jsxRuntimeExports.jsx(de, { children: jsxRuntimeExports.jsx(BannerTooltipApp, {}) }),
    }),
);
