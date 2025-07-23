(() => {
    'use strict';
    var __webpack_modules__ = {
            6373: (e, t, n) => {
                n.d(t, { i: () => l });
                var o = n(2056),
                    r = n(6179),
                    i = n.n(r);
                const a = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                  }
                                  return e;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const c = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            n = e.body,
                            l = e.header,
                            d = e.note,
                            u = e.alert,
                            _ = e.args,
                            v = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var o in e)
                                    if ({}.hasOwnProperty.call(e, o)) {
                                        if (t.indexOf(o) >= 0) continue;
                                        n[o] = e[o];
                                    }
                                return n;
                            })(e, a);
                        const w = (0, r.useMemo)(() => {
                            const e = Object.assign({}, _, { body: n, header: l, note: d, alert: u });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [u, n, l, d, _]);
                        return i().createElement(
                            o.u,
                            s(
                                {
                                    contentId:
                                        ((m = null == _ ? void 0 : _.hasHtmlContent),
                                        m ? c.SimpleTooltipHtmlContent('resId') : c.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: w,
                                },
                                v,
                            ),
                            t,
                        );
                        var m;
                    };
            },
            2056: (e, t, n) => {
                n.d(t, { u: () => l });
                var o = n(7902),
                    r = n(9916),
                    i = n(6179);
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
                const c = (e, t, n = {}, o = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: o,
                                },
                                n,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            r = e.args,
                            l = e.onMouseEnter,
                            d = e.onMouseLeave,
                            u = e.onMouseDown,
                            _ = e.onClick,
                            v = e.ignoreShowDelay,
                            w = void 0 !== v && v,
                            m = e.ignoreMouseClick,
                            p = void 0 !== m && m,
                            E = e.decoratorId,
                            h = void 0 === E ? 0 : E,
                            b = e.isEnabled,
                            f = void 0 === b || b,
                            g = e.targetId,
                            y = void 0 === g ? 0 : g,
                            O = e.onShow,
                            T = e.onHide,
                            P = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var o in e)
                                    if ({}.hasOwnProperty.call(e, o)) {
                                        if (t.indexOf(o) >= 0) continue;
                                        n[o] = e[o];
                                    }
                                return n;
                            })(e, a);
                        const k = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            R = (0, i.useMemo)(() => y || (0, o.F)().resId, [y]),
                            C = (0, i.useCallback)(() => {
                                (k.current.isVisible && k.current.timeoutId) ||
                                    (c(n, h, { isMouseEvent: !0, on: !0, arguments: s(r) }, R),
                                    O && O(),
                                    (k.current.isVisible = !0));
                            }, [n, h, r, R, O]),
                            S = (0, i.useCallback)(() => {
                                if (k.current.isVisible || k.current.timeoutId) {
                                    const e = k.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (k.current.timeoutId = 0)),
                                        c(n, h, { on: !1 }, R),
                                        k.current.isVisible && T && T(),
                                        (k.current.isVisible = !1));
                                }
                            }, [n, h, R, T]),
                            M = (0, i.useCallback)((e) => {
                                k.current.isVisible &&
                                    ((k.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (k.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(k.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        ((0, i.useEffect)(() => {
                            const e = k.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', M, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', M, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === f && S();
                            }, [f, S]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        (window.removeEventListener('mouseleave', S), S());
                                    }
                                ),
                                [S],
                            ));
                        return f
                            ? (0, i.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((L = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((k.current.timeoutId = window.setTimeout(C, w ? 100 : 400)),
                                                      l && l(e),
                                                      L && L(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (S(), null == d || d(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === p && S(), null == _ || _(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === p && S(), null == u || u(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      P,
                                  ),
                              )
                            : t;
                        var L;
                    };
            },
            527: (e, t, n) => {
                (n.r(t),
                    n.d(t, { mouse: () => d, off: () => c, on: () => s, onResize: () => i, onScaleUpdated: () => a }));
                var o = n(2472),
                    r = n(1176);
                const i = (0, o.E)('clientResized'),
                    a = (0, o.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    c = (e, t) => engine.off(e, t),
                    l = { down: (0, o.E)('mousedown'), up: (0, o.E)('mouseup'), move: (0, o.E)('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function o() {
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
                    const i = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${t}`,
                                        a = l[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        o(),
                                        () => {
                                            r &&
                                                (a(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                o(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, i, {
                        disable() {
                            ((e.enabled = !1), o());
                        },
                        enable() {
                            ((e.enabled = !0), o());
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
                (n.r(t),
                    n.d(t, {
                        events: () => o,
                        getMouseGlobalPosition: () => a,
                        getSize: () => i,
                        graphicsQuality: () => s,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var o = n(527),
                    r = n(2493);
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
            1176: (e, t, n) => {
                function o(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => o });
            },
            2493: (e, t, n) => {
                function o(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => r, G: () => o });
            },
            2472: (e, t, n) => {
                function o(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => o });
            },
            3138: (e, t, n) => {
                n.d(t, { O: () => i });
                var o = n(5959),
                    r = n(514);
                const i = { view: n(7641), client: o, sound: r.ZP };
            },
            514: (e, t, n) => {
                n.d(t, { ZP: () => a });
                var o = n(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, o.playSound)(r[t])), e), {}),
                    a = { play: Object.assign({}, i, { sound: o.playSound }), setRTPC: o.setRTPC };
            },
            3722: (e, t, n) => {
                function o(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function r(e, t, n) {
                    return `url(${o(e, t, n)})`;
                }
                (n.r(t), n.d(t, { getBgUrl: () => r, getTextureUrl: () => o }));
            },
            6112: (e, t, n) => {
                n.d(t, { W: () => o });
                const o = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                n.d(t, { U: () => r });
                var o = n(2472);
                const r = {
                    onTextureFrozen: (0, o.E)('self.onTextureFrozen'),
                    onTextureReady: (0, o.E)('self.onTextureReady'),
                    onDomBuilt: (0, o.E)('self.onDomBuilt'),
                    onLoaded: (0, o.E)('self.onLoaded'),
                    onDisplayChanged: (0, o.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, o.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, o.E)('children.onAdded'),
                        onLoaded: (0, o.E)('children.onLoaded'),
                        onRemoved: (0, o.E)('children.onRemoved'),
                        onAttached: (0, o.E)('children.onAttached'),
                        onTextureReady: (0, o.E)('children.onTextureReady'),
                        onRequestPosition: (0, o.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, n) => {
                (n.r(t),
                    n.d(t, {
                        addModelObserver: () => u,
                        addPreloadTexture: () => c,
                        children: () => o,
                        displayStatus: () => r.W,
                        displayStatusIs: () => R,
                        events: () => i.U,
                        extraSize: () => C,
                        forceTriggerMouseMove: () => T,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => P,
                        getFontNames: () => k,
                        getScale: () => E,
                        getSize: () => v,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => O,
                        isFocused: () => g,
                        pxToRem: () => h,
                        remToPx: () => b,
                        resize: () => w,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => y,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => S,
                    }));
                var o = n(3722),
                    r = n(6112),
                    i = n(6538),
                    a = n(8566);
                const s = 15;
                function c(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function d(e, t, n, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, o);
                }
                function u(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function w(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function m(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function E() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function y() {
                    return viewEnv.setEventHandled();
                }
                function O() {
                    return viewEnv.isEventHandled();
                }
                function T() {
                    viewEnv.forceTriggerMouseMove();
                }
                function P() {
                    return viewEnv.getShowingStatus();
                }
                const k = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    R = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
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
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => l });
                const o = ['args'];
                const r = 2,
                    i = 16,
                    a = 32,
                    s = 64,
                    c = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var o in e)
                                        if ({}.hasOwnProperty.call(e, o)) {
                                            if (t.indexOf(o) >= 0) continue;
                                            n[o] = e[o];
                                        }
                                    return n;
                                })(t, o);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((r = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            c('popover' === e ? r : a);
                        },
                        minimize() {
                            c(s);
                        },
                        move(e) {
                            c(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            7902: (e, t, n) => {
                n.d(t, { F: () => o });
                const o = (e = 1) => {
                    const t = new Error().stack;
                    let n,
                        o = R.invalid('resId');
                    return (
                        t &&
                            ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== n &&
                                window.subViews[n] &&
                                (o = window.subViews[n].id)),
                        { caller: n, stack: t, resId: o }
                    );
                };
            },
            2039: (e, t, n) => {
                n.d(t, { b: () => r, k: () => i });
                var o = n(6179);
                const r = (e) => {
                        (0, o.useEffect)(e, []);
                    },
                    i = (e) => {
                        (0, o.useEffect)(() => e, []);
                    };
            },
            5521: (e, t, n) => {
                let o, r;
                (n.d(t, { n: () => o }),
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
                    })(o || (o = {})),
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
            7727: (e, t, n) => {
                function o(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                n.d(t, { $: () => r });
                const r = {
                    playHighlight() {
                        o('highlight');
                    },
                    playClick() {
                        o('play');
                    },
                    playYes() {
                        o('yes1');
                    },
                };
            },
            1358: (e, t, n) => {
                n.d(t, { Z: () => i });
                var o = n(3138);
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
                    addCallback(e, t, n = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = o.O.view.addModelObserver(e, n, r);
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
                            const o = this._callbacks[n];
                            void 0 !== o && o(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const i = r;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
            9916: (e, t, n) => {
                n.d(t, { B0: () => s, ry: () => E, Eu: () => h, Sy: () => f, SW: () => g });
                class o {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let o = e.target;
                                    do {
                                        if (o === t) return;
                                        o = o.parentNode;
                                    } while (o);
                                    n();
                                });
                            }));
                    }
                    static get instance() {
                        return (o.__instance || (o.__instance = new o()), o.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const n = e,
                            o = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== o)),
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
                o.__instance = void 0;
                const r = o;
                var i = n(1358);
                var a = n(8613);
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
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(5521),
                    v = n(3138);
                const w = ['args'];
                function m(e, t, n, o, r, i, a) {
                    try {
                        var s = e[i](a),
                            c = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(c) : Promise.resolve(c).then(o, r);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    E = (function () {
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
                                    return new Promise(function (o, r) {
                                        var i = e.apply(t, n);
                                        function a(e) {
                                            m(i, o, r, a, s, 'next', e);
                                        }
                                        function s(e) {
                                            m(i, o, r, a, s, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    h = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    b = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var o in e)
                                        if ({}.hasOwnProperty.call(e, o)) {
                                            if (t.indexOf(o) >= 0) continue;
                                            n[o] = e[o];
                                        }
                                    return n;
                                })(t, w);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((o = r),
                                              Object.entries(o).map(([e, t]) => {
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
                        var o;
                    },
                    f = () => b(s.CLOSE),
                    g = () => b(s.POP_OVER, { on: !1 }),
                    y = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var O = n(7572);
                const T = r.instance,
                    P = {
                        DataTracker: i.Z,
                        ViewModel: O.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: l,
                        TimeFormatType: d,
                        DateFormatType: u,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => b(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: g,
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            b(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, o, r = R.invalid('resId'), i) => {
                            const a = v.O.view.getViewGlobalPosition(),
                                c = n.getBoundingClientRect(),
                                l = c.x,
                                d = c.y,
                                u = c.width,
                                _ = c.height,
                                w = {
                                    x: v.O.view.pxToRem(l) + a.x,
                                    y: v.O.view.pxToRem(d) + a.y,
                                    width: v.O.view.pxToRem(u),
                                    height: v.O.view.pxToRem(_),
                                };
                            b(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: o || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: p(w),
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
                            y(e, f);
                        },
                        handleViewEvent: b,
                        onBindingsReady: E,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const o in t)
                                if (Object.prototype.hasOwnProperty.call(t, o)) {
                                    const r = Object.prototype.toString.call(t[o]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[o];
                                        n[o] = [];
                                        for (let t = 0; t < r.length; t++) n[o].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[o] = e(t[o]))
                                            : (n[o] = t[o]);
                                }
                            return n;
                        },
                        ClickOutsideManager: T,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = P;
            },
            8613: (e, t, n) => {
                n.d(t, { Z5: () => o, cy: () => r });
                const o = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
            },
            9051: (e, t, n) => {
                var o = n(6483),
                    r = n.n(o),
                    i = n(6373),
                    a = n(3138),
                    s = n(2039);
                const c = (e) => {
                    let t = !1;
                    return {
                        promise: new Promise((n, o) => {
                            e.then((e) => !t && n(e)).catch((e) => !t && o(e));
                        }),
                        cancel() {
                            t = !0;
                        },
                    };
                };
                var l = n(7727),
                    d = n(9916),
                    u = n(6179),
                    _ = n.n(u);
                const v = {
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
                var w;
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(w || (w = {}));
                const m = ['__left', '__right', '__top', '__bottom'],
                    p =
                        ((0, u.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: n, customStyles: o = {} }, w) => {
                                const p = (0, u.useRef)(null),
                                    E = (0, u.useRef)(null),
                                    h = (0, u.useRef)(null),
                                    b = (0, u.useState)(window.decorator && window.decorator.directionType),
                                    f = b[0],
                                    g = b[1],
                                    y = (0, u.useCallback)(() => {
                                        (l.$.playClick(), a.O.view.sendEvent.close());
                                    }, []),
                                    O = (0, u.useCallback)(() => {
                                        l.$.playHighlight();
                                    }, []),
                                    T = r()(v.arrow, v[`arrow${m[f]}`]);
                                (0, s.b)(
                                    () => (
                                        a.O.client.events.mouse.enableOutside(),
                                        a.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (n ? n() : a.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const P = (0, u.useCallback)(
                                        (e) => {
                                            let t = e.target;
                                            do {
                                                if (t === p.current || t === h.current) return;
                                                t = t.parentNode;
                                            } while (t);
                                            const o = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = a.O.client.getMouseGlobalPosition(),
                                                    t = ![o.boundX, o.boundY, o.boundWidth, o.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    n =
                                                        e.x < o.boundX ||
                                                        e.x > o.boundX + o.boundWidth ||
                                                        e.y > o.boundY + o.boundHeight ||
                                                        e.y < o.boundY;
                                                if (t && !n) return;
                                            }
                                            n ? n() : a.O.view.sendEvent.close('popover');
                                        },
                                        [p, h, n],
                                    ),
                                    k = (function () {
                                        const e = (0, u.useRef)(0);
                                        return (
                                            (0, s.k)(() => {
                                                window.cancelAnimationFrame(e.current);
                                            }),
                                            (0, u.useMemo)(
                                                () => ({
                                                    run: (t) => {
                                                        (window.cancelAnimationFrame(e.current),
                                                            (e.current = window.requestAnimationFrame(() => {
                                                                e.current = window.requestAnimationFrame(() => {
                                                                    (t(), (e.current = 0));
                                                                });
                                                            })));
                                                    },
                                                    clear: () => {
                                                        (window.cancelAnimationFrame(e.current), (e.current = 0));
                                                    },
                                                    get isRunning() {
                                                        return 0 !== e.current;
                                                    },
                                                }),
                                                [],
                                            )
                                        );
                                    })(),
                                    C = (0, u.useCallback)(() => {
                                        const e = E.current;
                                        if (e)
                                            return (
                                                a.O.view.freezeTextureBeforeResize(),
                                                k.run(() => {
                                                    const t = e.scrollWidth,
                                                        n = e.scrollHeight;
                                                    (a.O.view.resize(t, n), g(window.decorator.directionType));
                                                })
                                            );
                                    }, [k]);
                                return (
                                    (0, u.useImperativeHandle)(w, () => ({ updateSize: C })),
                                    (0, s.b)(() => {
                                        a.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, u.useEffect)(() => {
                                        document.addEventListener('mousedown', P, { capture: !0 });
                                        const e = c((0, d.Eu)());
                                        return (
                                            !t && e.promise.then(() => C()),
                                            () => {
                                                (e.cancel(), document.removeEventListener('mousedown', P));
                                            }
                                        );
                                    }, [C, P, t]),
                                    _().createElement(
                                        'div',
                                        { className: v.base, ref: E },
                                        _().createElement(
                                            'div',
                                            { className: v.decorator },
                                            _().createElement(
                                                'div',
                                                { className: v.content, ref: p },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    _().createElement(
                                                        i.i,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        _().createElement('div', {
                                                            className: v.closeBtn,
                                                            onClick: y,
                                                            onMouseEnter: O,
                                                            ref: h,
                                                        }),
                                                    ),
                                            ),
                                            _().createElement('div', { className: T, style: o.arrow }),
                                        ),
                                    )
                                );
                            },
                        ),
                        'Background_base_73'),
                    E = () => {
                        const e = (() => {
                            const e = (0, u.useState)(a.O.view.getScale()),
                                t = e[0],
                                n = e[1];
                            return (
                                (0, u.useEffect)(() => {
                                    const e = () => {
                                        n(a.O.view.getScale());
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
                        })();
                        return _().createElement(
                            'svg',
                            { className: p, viewBox: '0 0 100% 100%' },
                            _().createElement(
                                'defs',
                                null,
                                _().createElement(
                                    'linearGradient',
                                    {
                                        id: 'gradient',
                                        gradientUnits: 'userSpaceOnUse',
                                        x1: '0%',
                                        y1: '0%',
                                        x2: '0%',
                                        y2: '100%',
                                    },
                                    _().createElement('stop', { offset: '0%', stopColor: '#3e67b7' }),
                                    _().createElement('stop', { offset: '100%', stopColor: '#10357e' }),
                                ),
                            ),
                            _().createElement('rect', {
                                x: '0%',
                                y: '0%',
                                width: '100%',
                                height: '100%',
                                rx: 6 * e,
                                fill: 'url(#gradient)',
                            }),
                        );
                    },
                    h = {
                        base: 'NyPopoverDecorator_base_23',
                        arrow: 'NyPopoverDecorator_arrow_5e',
                        arrow__bottom: 'NyPopoverDecorator_arrow__bottom_71',
                        arrow__top: 'NyPopoverDecorator_arrow__top_90',
                        arrow__left: 'NyPopoverDecorator_arrow__left_df',
                        arrow__right: 'NyPopoverDecorator_arrow__right_27',
                        closeBtn: 'NyPopoverDecorator_closeBtn_32',
                        content: 'NyPopoverDecorator_content_50',
                    },
                    b = ['__left', '__right', '__top', '__bottom'];
                (0, u.forwardRef)(
                    (
                        {
                            children: e,
                            disableAutoSizeUpdate: t = !1,
                            onOutsideClick: n,
                            arrowPosition: o = 50,
                            offsetSizes: i = {},
                            classNames: s = {},
                        },
                        v,
                    ) => {
                        var m, p, f, g;
                        const y = (0, u.useRef)(null),
                            O = (0, u.useRef)(null),
                            T = (0, u.useRef)(null),
                            P = (0, u.useState)(window.decorator.directionType),
                            k = P[0],
                            C = P[1],
                            S = (0, u.useCallback)(() => {
                                (l.$.playClick(), (0, d.Sy)());
                            }, []),
                            M = (0, u.useCallback)(() => {
                                l.$.playHighlight();
                            }, []),
                            L = r()(h.arrow, h[`arrow${b[k]}`], s.arrow),
                            D = null != (m = i.top) ? m : 68,
                            x = null != (p = i.bottom) ? p : 68,
                            N = null != (f = i.left) ? f : 68,
                            A = null != (g = i.right) ? g : 68,
                            I = (0, u.useCallback)(
                                (e) => {
                                    let t = e.target;
                                    do {
                                        if (t === y.current || t === T.current) return;
                                        t = t.parentNode;
                                    } while (t);
                                    const o = window.decorator;
                                    if (o) {
                                        const e = a.O.client.getMouseGlobalPosition(),
                                            t = ![o.boundX, o.boundY, o.boundWidth, o.boundHeight].includes(void 0),
                                            n =
                                                e.x < o.boundX ||
                                                e.x > o.boundX + o.boundWidth ||
                                                e.y > o.boundY + o.boundHeight ||
                                                e.y < o.boundY;
                                        if (t && !n) return;
                                    }
                                    n ? n() : (0, d.SW)();
                                },
                                [y, T, n],
                            ),
                            F = (0, u.useCallback)(() => {
                                const e = requestAnimationFrame(() => {
                                    if (O.current) {
                                        const e = O.current.scrollWidth,
                                            t = O.current.scrollHeight;
                                        (a.O.view.resize(e, t), C(window.decorator.directionType));
                                    }
                                });
                                return () => cancelAnimationFrame(e);
                            }, []);
                        ((0, u.useImperativeHandle)(v, () => ({ updateSize: F })),
                            (0, u.useEffect)(() => {
                                document.addEventListener('mousedown', I, { capture: !0 });
                                const e = c((0, d.Eu)());
                                return (
                                    !t && e.promise.then(() => F()),
                                    () => {
                                        (e.cancel(), document.removeEventListener('mousedown', I));
                                    }
                                );
                            }, [F, I, t]));
                        const V = (0, u.useMemo)(() => {
                                if (null !== o)
                                    return k === w.Top || k === w.Bottom ? { left: `${o}%` } : { top: `${o}%` };
                            }, [k, o]),
                            B = {
                                '--offset-top': `${D}rem`,
                                '--offset-bottom': `${x}rem`,
                                '--offset-left': `${N}rem`,
                                '--offset-right': `${A}rem`,
                            };
                        return _().createElement(
                            'div',
                            { style: B, className: h.base, ref: O, lang: R.strings.settings.LANGUAGE_CODE() },
                            _().createElement(
                                'div',
                                { className: h.content, ref: y },
                                _().createElement(E, null),
                                e,
                                window.decorator.isCloseBtnVisible &&
                                    _().createElement('div', {
                                        className: r()(h.closeBtn, s.closeBtn),
                                        onClick: S,
                                        onMouseEnter: M,
                                        ref: T,
                                    }),
                            ),
                            _().createElement('div', { className: L, style: V }),
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
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](n, n.exports, __webpack_require__), n.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, o) => {
            if (!t) {
                var r = 1 / 0;
                for (c = 0; c < deferred.length; c++) {
                    for (var [t, n, o] = deferred[c], i = !0, a = 0; a < t.length; a++)
                        (!1 & o || r >= o) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[a]))
                            ? t.splice(a--, 1)
                            : ((i = !1), o < r && (r = o));
                    if (i) {
                        deferred.splice(c--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            o = o || 0;
            for (var c = deferred.length; c > 0 && deferred[c - 1][2] > o; c--) deferred[c] = deferred[c - 1];
            deferred[c] = [t, n, o];
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
        (__webpack_require__.j = 6818),
        (() => {
            var e = { 6818: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        r,
                        [i, a, s] = n,
                        c = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (o in a) __webpack_require__.o(a, o) && (__webpack_require__.m[o] = a[o]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(n); c < i.length; c++)
                        ((r = i[c]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [8360], () => __webpack_require__(9051));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
