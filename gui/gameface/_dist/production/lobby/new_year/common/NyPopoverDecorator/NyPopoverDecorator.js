(() => {
    'use strict';
    var __webpack_modules__ = {
            2056: (e, t, o) => {
                o.d(t, { u: () => l });
                var n = o(7902),
                    r = o(4179),
                    i = o(6179);
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
                function s(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const o = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                o.number = t;
                                break;
                            case 'boolean':
                                o.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                o.string = t.toString();
                        }
                        return o;
                    });
                }
                const c = (e, t, o = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                o,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            o = e.contentId,
                            r = e.args,
                            l = e.onMouseEnter,
                            d = e.onMouseLeave,
                            _ = e.onMouseDown,
                            u = e.onClick,
                            v = e.ignoreShowDelay,
                            w = void 0 !== v && v,
                            p = e.ignoreMouseClick,
                            m = void 0 !== p && p,
                            E = e.decoratorId,
                            h = void 0 === E ? 0 : E,
                            b = e.isEnabled,
                            f = void 0 === b || b,
                            g = e.targetId,
                            O = void 0 === g ? 0 : g,
                            y = e.onShow,
                            P = e.onHide,
                            T = (function (e, t) {
                                if (null == e) return {};
                                var o,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((o = i[n]), t.indexOf(o) >= 0 || (r[o] = e[o]));
                                return r;
                            })(e, a);
                        const k = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            M = (0, i.useMemo)(() => O || (0, n.F)().resId, [O]),
                            R = (0, i.useCallback)(() => {
                                (k.current.isVisible && k.current.timeoutId) ||
                                    (c(o, h, { isMouseEvent: !0, on: !0, arguments: s(r) }, M),
                                    y && y(),
                                    (k.current.isVisible = !0));
                            }, [o, h, r, M, y]),
                            C = (0, i.useCallback)(() => {
                                if (k.current.isVisible || k.current.timeoutId) {
                                    const e = k.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (k.current.timeoutId = 0)),
                                        c(o, h, { on: !1 }, M),
                                        k.current.isVisible && P && P(),
                                        (k.current.isVisible = !1));
                                }
                            }, [o, h, M, P]),
                            N = (0, i.useCallback)((e) => {
                                k.current.isVisible &&
                                    ((k.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (k.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(k.current.prevTarget) && C();
                                    }, 200)));
                            }, []);
                        return (
                            (0, i.useEffect)(() => {
                                const e = k.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', N, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', N, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, i.useEffect)(() => {
                                !1 === f && C();
                            }, [f, C]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', C),
                                    () => {
                                        (window.removeEventListener('mouseleave', C), C());
                                    }
                                ),
                                [C],
                            ),
                            f
                                ? (0, i.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((k.current.timeoutId = window.setTimeout(R, w ? 100 : 400)),
                                                          l && l(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  (C(), null == d || d(t), null == e || e(t));
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  (!1 === m && C(), null == u || u(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === m && C(), null == _ || _(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          T,
                                      ),
                                  )
                                : t
                        );
                        var S;
                    };
            },
            527: (e, t, o) => {
                (o.r(t), o.d(t, { mouse: () => s, onResize: () => i }));
                var n = o(2472),
                    r = o(1176);
                const i = (0, n.E)('clientResized'),
                    a = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    s = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function o() {
                            e.enabled && (0, r.R)(!0);
                        }
                        function n() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', o))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', o))
                                : (0, r.R)(!1);
                        }
                        const i = ['down', 'up', 'move'].reduce(
                            (t, o) => (
                                (t[o] = (function (t) {
                                    return (o) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const i = `mouse${t}`,
                                            s = a[t]((e) => o([e, 'outside']));
                                        function c(e) {
                                            o([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, c),
                                            n(),
                                            () => {
                                                r &&
                                                    (s(),
                                                    window.removeEventListener(i, c),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(o)),
                                t
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
            5959: (e, t, o) => {
                (o.r(t),
                    o.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => a,
                    }));
                var n = o(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const a = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, o) => {
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                o.d(t, { R: () => n });
            },
            2472: (e, t, o) => {
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                o.d(t, { E: () => n });
            },
            3138: (e, t, o) => {
                o.d(t, { O: () => r });
                var n = o(5959);
                const r = { view: o(7641), client: n };
            },
            3722: (e, t, o) => {
                function n(e, t, o = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, o);
                }
                function r(e, t, o) {
                    return `url(${n(e, t, o)})`;
                }
                (o.r(t), o.d(t, { getBgUrl: () => r, getTextureUrl: () => n }));
            },
            6112: (e, t, o) => {
                o.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, o) => {
                o.d(t, { U: () => r });
                var n = o(2472);
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
            7641: (e, t, o) => {
                (o.r(t),
                    o.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => T,
                        events: () => i.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => y,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => P,
                        getScale: () => m,
                        getSize: () => u,
                        getViewGlobalPosition: () => w,
                        isEventHandled: () => O,
                        isFocused: () => f,
                        pxToRem: () => E,
                        remToPx: () => h,
                        resize: () => v,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => M,
                    }));
                var n = o(3722),
                    r = o(6112),
                    i = o(6538),
                    a = o(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, o, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, o, n);
                }
                function d(e, t, o) {
                    return viewEnv.addDataChangedCallback(e, t, o);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function v(e, t, o = 'px') {
                    return 'rem' === o ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function w(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function m() {
                    return viewEnv.getScale();
                }
                function E(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function O() {
                    return viewEnv.isEventHandled();
                }
                function y() {
                    viewEnv.forceTriggerMouseMove();
                }
                function P() {
                    return viewEnv.getShowingStatus();
                }
                const T = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    k = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    M = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, o) => {
                o.d(t, { qP: () => i });
                const n = ['args'],
                    r = (e, t) => {
                        const o = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var o,
                                        n,
                                        r = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((o = i[n]), t.indexOf(o) >= 0 || (r[o] = e[o]));
                                    return r;
                                })(t, n);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: o, type: e }, a, {
                                          arguments:
                                              ((r = i),
                                              Object.entries(r).map(([e, t]) => {
                                                  const o = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: o, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: o, name: e, bool: t };
                                                      default:
                                                          return { __Type: o, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: o, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: o, type: e });
                        var r;
                    },
                    i = {
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
            7902: (e, t, o) => {
                o.d(t, { F: () => n });
                const n = (e = 1) => {
                    const t = new Error().stack;
                    let o,
                        n = R.invalid('resId');
                    return (
                        t &&
                            ((o = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== o &&
                                window.subViews[o] &&
                                (n = window.subViews[o].id)),
                        { caller: o, stack: t, resId: n }
                    );
                };
            },
            8526: (e, t, o) => {
                o.d(t, { gd: () => s });
                var n = o(3138),
                    r = o(5521),
                    i = (o(4179), o(6179));
                const a = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function s(e = r.n.NONE, t = a, o = !1) {
                    (0, i.useEffect)(() => {
                        if (e !== r.n.NONE)
                            return (
                                window.addEventListener('keydown', i, o),
                                () => {
                                    window.removeEventListener('keydown', i, o);
                                }
                            );
                        function i(r) {
                            if (r.keyCode === e) {
                                if (n.O.view.isEventHandled()) return;
                                (n.O.view.setEventHandled(), t(r), o && r.stopPropagation());
                            }
                        }
                    }, [t, e, o]);
                }
            },
            5521: (e, t, o) => {
                let n, r;
                (o.d(t, { n: () => n }),
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
            7727: (e, t, o) => {
                function n(e) {
                    engine.call('PlaySound', e);
                }
                o.d(t, { $: () => r });
                const r = {
                    playHighlight() {
                        n('highlight');
                    },
                    playClick() {
                        n('play');
                    },
                    playYes() {
                        n('yes1');
                    },
                };
            },
            1358: (e, t, o) => {
                o.d(t, { Z: () => i });
                var n = o(3138);
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
                    addCallback(e, t, o = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = n.O.view.addModelObserver(e, o, r);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  o > 0 && (this._views[o] ? this._views[o].push(i) : (this._views[o] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
                        );
                    }
                    removeCallback(e, t = 0) {
                        let o = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((o = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            o || console.error("Can't remove callback by id:", e),
                            o
                        );
                    }
                    _emmitDataChanged(e, t, o) {
                        o.forEach((o) => {
                            const n = this._callbacks[o];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const i = r;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
            4179: (e, t, o) => {
                o.d(t, { B0: () => c, ry: () => b, Eu: () => f });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: o }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    o();
                                });
                            }));
                    }
                    static get instance() {
                        return (n.__instance || (n.__instance = new n()), n.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const o = e,
                            n = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== o || t !== n)),
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
                var i = o(1358);
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, o) => userLocale.getTimeFormat(e, t, void 0 === o || o),
                        getTimeString: (e, t, o) => userLocale.getTimeString(e, t, void 0 === o || o),
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
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    v = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var w = o(5521),
                    p = o(3138);
                const m = ['args'];
                function E(e, t, o, n, r, i, a) {
                    try {
                        var s = e[i](a),
                            c = s.value;
                    } catch (e) {
                        return void o(e);
                    }
                    s.done ? t(c) : Promise.resolve(c).then(n, r);
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
                                        o = arguments;
                                    return new Promise(function (n, r) {
                                        var i = e.apply(t, o);
                                        function a(e) {
                                            E(i, n, r, a, s, 'next', e);
                                        }
                                        function s(e) {
                                            E(i, n, r, a, s, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    f = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    g = (e, t) => {
                        const o = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var o,
                                        n,
                                        r = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((o = i[n]), t.indexOf(o) >= 0 || (r[o] = e[o]));
                                    return r;
                                })(t, m);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: o, type: e }, i, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, t]) => {
                                                  const o = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          o.number = t;
                                                          break;
                                                      case 'boolean':
                                                          o.bool = t;
                                                          break;
                                                      default:
                                                          o.string = t.toString();
                                                  }
                                                  return o;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: o, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: o, type: e });
                        var n;
                    },
                    O = () => g(c.CLOSE),
                    y = (e, t) => {
                        e.keyCode === w.n.ESCAPE && t();
                    };
                var P = o(7572);
                const T = r.instance,
                    k = {
                        DataTracker: i.Z,
                        ViewModel: P.Z,
                        ViewEventType: c,
                        NumberFormatType: d,
                        RealFormatType: _,
                        TimeFormatType: u,
                        DateFormatType: v,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => g(c.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: O,
                        sendClosePopOverEvent: () => g(c.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, o = 0) => {
                            g(c.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: o, args: t });
                        },
                        sendShowPopOverEvent: (e, t, o, n, r = R.invalid('resId'), i) => {
                            const a = p.O.view.getViewGlobalPosition(),
                                s = o.getBoundingClientRect(),
                                l = s.x,
                                d = s.y,
                                _ = s.width,
                                u = s.height,
                                v = {
                                    x: p.O.view.pxToRem(l) + a.x,
                                    y: p.O.view.pxToRem(d) + a.y,
                                    width: p.O.view.pxToRem(_),
                                    height: p.O.view.pxToRem(u),
                                };
                            g(c.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: h(v),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => y(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            y(e, O);
                        },
                        handleViewEvent: g,
                        onBindingsReady: b,
                        onLayoutReady: f,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(c.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(c.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(c.POP_OVER),
                        dumpViewModel: function e(t) {
                            const o = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const r = Object.prototype.toString.call(t[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[n];
                                        o[n] = [];
                                        for (let t = 0; t < r.length; t++) o[n].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (o[n] = e(t[n]))
                                            : (o[n] = t[n]);
                                }
                            return o;
                        },
                        ClickOutsideManager: T,
                        SystemLocale: a,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = k;
            },
            3509: (e, t, o) => {
                var n = o(6483),
                    r = o.n(n),
                    i = o(2056),
                    a = o(6179),
                    s = o.n(a);
                const c = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var o = arguments[t];
                                    for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const d = R.views.common.tooltip_window.simple_tooltip_content,
                    _ = (e) => {
                        let t = e.children,
                            o = e.body,
                            n = e.header,
                            r = e.note,
                            _ = e.alert,
                            u = e.args,
                            v = (function (e, t) {
                                if (null == e) return {};
                                var o,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((o = i[n]), t.indexOf(o) >= 0 || (r[o] = e[o]));
                                return r;
                            })(e, c);
                        const w = (0, a.useMemo)(() => {
                            const e = Object.assign({}, u, { body: o, header: n, note: r, alert: _ });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [_, o, n, r, u]);
                        return s().createElement(
                            i.u,
                            l(
                                {
                                    contentId:
                                        ((p = null == u ? void 0 : u.hasHtmlContent),
                                        p ? d.SimpleTooltipHtmlContent('resId') : d.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: w,
                                },
                                v,
                            ),
                            t,
                        );
                        var p;
                    },
                    u = (e) => {
                        let t,
                            o = null;
                        return (
                            (o = requestAnimationFrame(() => {
                                o = requestAnimationFrame(() => {
                                    ((o = null), (t = e()));
                                });
                            })),
                            () => {
                                ('function' == typeof t && t(), null !== o && cancelAnimationFrame(o));
                            }
                        );
                    };
                var v = o(3138);
                const w = (e) => {
                        (0, a.useEffect)(e, []);
                    },
                    p = (e) => {
                        let t = !1;
                        return {
                            promise: new Promise((o, n) => {
                                e.then((e) => !t && o(e)).catch((e) => !t && n(e));
                            }),
                            cancel() {
                                t = !0;
                            },
                        };
                    };
                var m = o(7727),
                    E = o(4179);
                const h = {
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
                var b;
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(b || (b = {}));
                const f = ['__left', '__right', '__top', '__bottom'];
                (0, a.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: o, customStyles: n = {} }, i) => {
                        const c = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            b = (0, a.useState)(window.decorator && window.decorator.directionType),
                            g = b[0],
                            O = b[1],
                            y = (0, a.useCallback)(() => {
                                (m.$.playClick(), v.O.view.sendEvent.close());
                            }, []),
                            P = (0, a.useCallback)(() => {
                                m.$.playHighlight();
                            }, []),
                            T = r()(h.arrow, h[`arrow${f[g]}`]);
                        w(
                            () => (
                                v.O.client.events.mouse.enableOutside(),
                                v.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (o ? o() : v.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const k = (0, a.useCallback)(
                                (e) => {
                                    let t = e.target;
                                    do {
                                        if (t === c.current || t === d.current) return;
                                        t = t.parentNode;
                                    } while (t);
                                    const n = window.decorator;
                                    if (void 0 !== window.decorator) {
                                        const e = v.O.client.getMouseGlobalPosition(),
                                            t = ![n.boundX, n.boundY, n.boundWidth, n.boundHeight].includes(void 0),
                                            o =
                                                e.x < n.boundX ||
                                                e.x > n.boundX + n.boundWidth ||
                                                e.y > n.boundY + n.boundHeight ||
                                                e.y < n.boundY;
                                        if (t && !o) return;
                                    }
                                    o ? o() : v.O.view.sendEvent.close('popover');
                                },
                                [c, d, o],
                            ),
                            M = (0, a.useCallback)(
                                () => (
                                    v.O.view.freezeTextureBeforeResize(),
                                    u(() => {
                                        if (l.current) {
                                            const e = l.current.scrollWidth,
                                                t = l.current.scrollHeight;
                                            (v.O.view.resize(e, t), O(window.decorator.directionType));
                                        }
                                    })
                                ),
                                [],
                            );
                        return (
                            (0, a.useImperativeHandle)(i, () => ({ updateSize: M })),
                            w(() => {
                                v.O.view.setInputPaddingsRem(58);
                            }),
                            (0, a.useEffect)(() => {
                                document.addEventListener('mousedown', k, { capture: !0 });
                                const e = p((0, E.Eu)());
                                return (
                                    !t && e.promise.then(() => M()),
                                    () => {
                                        (e.cancel(), document.removeEventListener('mousedown', k));
                                    }
                                );
                            }, [M, k, t]),
                            s().createElement(
                                'div',
                                { className: h.base, ref: l },
                                s().createElement(
                                    'div',
                                    { className: h.decorator },
                                    s().createElement(
                                        'div',
                                        { className: h.content, ref: c },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            s().createElement(
                                                _,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                s().createElement('div', {
                                                    className: h.closeBtn,
                                                    onClick: y,
                                                    onMouseEnter: P,
                                                    ref: d,
                                                }),
                                            ),
                                    ),
                                    s().createElement('div', { className: T, style: n.arrow }),
                                ),
                            )
                        );
                    },
                );
                var g = o(8526),
                    O = o(5521);
                const y = (0, a.memo)(
                        ({ onMouseDown: e, onMouseUp: t, onMouseLeave: o, onMouseEnter: n, onClick: i }) => {
                            const c = (0, a.useState)(!1),
                                l = c[0],
                                d = c[1],
                                _ = (0, a.useState)(!1),
                                u = _[0],
                                v = _[1];
                            return s().createElement(
                                'div',
                                {
                                    className: 'PopoverCloseButton_base_7a',
                                    onClick: () => {
                                        (m.$.playClick(), i && i());
                                    },
                                    onMouseEnter: () => {
                                        (m.$.playHighlight(), d(!0), n && n());
                                    },
                                    onMouseLeave: () => {
                                        (d(!1), v(!1), o && o());
                                    },
                                    onMouseDown: () => {
                                        (v(!0), e && e());
                                    },
                                    onMouseUp: () => {
                                        (v(!1), t && t());
                                    },
                                },
                                s().createElement(
                                    'div',
                                    { className: 'PopoverCloseButton_container_ef' },
                                    s().createElement('div', {
                                        className: r()(
                                            'PopoverCloseButton_hover_f3',
                                            l && 'PopoverCloseButton_hover__visible_27',
                                        ),
                                    }),
                                    s().createElement('div', {
                                        className: r()(
                                            'PopoverCloseButton_pressed_7c',
                                            u && 'PopoverCloseButton_pressed__visible_18',
                                        ),
                                    }),
                                ),
                            );
                        },
                    ),
                    P = (0, a.memo)(({ children: e }) =>
                        s().createElement(
                            'div',
                            {
                                className: 'TooltipAndPopoverStyleWrapper_base_f8',
                                onWheel: (e) => {
                                    e.preventDefault();
                                },
                            },
                            s().createElement(
                                'div',
                                { className: 'TooltipAndPopoverStyleWrapper_snowIconContainer_33' },
                                s().createElement('div', { className: 'TooltipAndPopoverStyleWrapper_snowIcon_d7' }),
                            ),
                            s().createElement('div', { className: 'TooltipAndPopoverStyleWrapper_pattern_f6' }),
                            s().createElement('div', { className: 'TooltipAndPopoverStyleWrapper_content_8a' }, e),
                        ),
                    ),
                    T = {
                        base: 'NyPopoverDecorator_base_b0',
                        fadeIn: 'NyPopoverDecorator_fadeIn_6b',
                        container: 'NyPopoverDecorator_container_f3',
                        arrow: 'NyPopoverDecorator_arrow_72',
                        arrow__bottom: 'NyPopoverDecorator_arrow__bottom_10',
                        arrow__top: 'NyPopoverDecorator_arrow__top_09',
                        arrow__left: 'NyPopoverDecorator_arrow__left_ea',
                        arrow__right: 'NyPopoverDecorator_arrow__right_10',
                        closeBtn: 'NyPopoverDecorator_closeBtn_88',
                        content: 'NyPopoverDecorator_content_35',
                    },
                    k = ['__left', '__right', '__top', '__bottom'];
                (0, a.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: t = !1, offsetSizes: o = {}, classNames: n = {} }, i) => {
                        var c, l, d, _;
                        const m = (0, a.useRef)(null),
                            h = (0, a.useRef)(null),
                            f = (0, a.useState)(window.decorator.directionType),
                            M = f[0],
                            R = f[1];
                        !(function ({
                            key: e = O.n.ESCAPE,
                            callback: t = () => v.O.view.sendEvent.close(),
                            preventPropagation: o = !0,
                        } = {}) {
                            (0, g.gd)(e, t, o);
                        })();
                        const C = r()(T.arrow, T[`arrow${k[M]}`], n.arrow),
                            N = {
                                top: null != (c = o.top) ? c : 10,
                                bottom: (null != (l = o.bottom) ? l : M === b.Top) ? 65 : 0,
                                left: (null != (d = o.left) ? d : M === b.Right) ? 65 : 0,
                                right: null != (_ = o.right) ? _ : 0,
                            },
                            S = (0, a.useCallback)(
                                () => (
                                    v.O.view.freezeTextureBeforeResize(),
                                    u(() => {
                                        if (h.current) {
                                            const e = h.current.scrollWidth,
                                                t = h.current.scrollHeight;
                                            (v.O.view.resize(e, t), R(window.decorator.directionType));
                                        }
                                    })
                                ),
                                [],
                            );
                        ((0, a.useImperativeHandle)(i, () => ({ updateSize: S })),
                            w(() => {
                                v.O.view.setSidePaddingsRem(N);
                            }),
                            (0, a.useEffect)(() => {
                                const e = p((0, E.Eu)());
                                return (
                                    !t && e.promise.then(() => S()),
                                    () => {
                                        e.cancel();
                                    }
                                );
                            }, [S, t]));
                        const D = {
                            '--offset-top': `${N.top}rem`,
                            '--offset-bottom': `${N.bottom}rem`,
                            '--offset-left': `${N.left}rem`,
                            '--offset-right': `${N.right}rem`,
                        };
                        return s().createElement(
                            'div',
                            { style: D, className: T.base, ref: h },
                            s().createElement(
                                'div',
                                { className: T.container },
                                s().createElement(
                                    P,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: T.content, ref: m },
                                        e,
                                        window.decorator.isCloseBtnVisible &&
                                            s().createElement(
                                                'div',
                                                { className: T.closeBtn },
                                                s().createElement(y, {
                                                    onClick: () => {
                                                        v.O.view.sendEvent.close('popover');
                                                    },
                                                }),
                                            ),
                                    ),
                                ),
                                s().createElement('div', { className: C }),
                            ),
                        );
                    },
                );
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var o = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e].call(o.exports, o, o.exports, __webpack_require__), o.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, o, n) => {
            if (!t) {
                var r = 1 / 0;
                for (c = 0; c < deferred.length; c++) {
                    for (var [t, o, n] = deferred[c], i = !0, a = 0; a < t.length; a++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[a]))
                            ? t.splice(a--, 1)
                            : ((i = !1), n < r && (r = n));
                    if (i) {
                        deferred.splice(c--, 1);
                        var s = o();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var c = deferred.length; c > 0 && deferred[c - 1][2] > n; c--) deferred[c] = deferred[c - 1];
            deferred[c] = [t, o, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var o in t)
                __webpack_require__.o(t, o) &&
                    !__webpack_require__.o(e, o) &&
                    Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
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
        (__webpack_require__.j = 6818),
        (() => {
            var e = { 6818: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, o) => {
                    var n,
                        r,
                        [i, a, s] = o,
                        c = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (n in a) __webpack_require__.o(a, n) && (__webpack_require__.m[n] = a[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(o); c < i.length; c++)
                        ((r = i[c]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                o = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [4503], () => __webpack_require__(3509));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
