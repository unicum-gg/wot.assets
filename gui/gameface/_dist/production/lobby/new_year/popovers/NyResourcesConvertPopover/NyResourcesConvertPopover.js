(() => {
    var __webpack_modules__ = {
            6373: (u, e, t) => {
                'use strict';
                t.d(e, { i: () => l });
                var r = t(2056),
                    n = t(6179),
                    o = t.n(n);
                const a = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                  }
                                  return u;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (u) => {
                        let e = u.children,
                            t = u.body,
                            l = u.header,
                            c = u.note,
                            E = u.alert,
                            d = u.args,
                            A = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var r in u)
                                    if ({}.hasOwnProperty.call(u, r)) {
                                        if (e.indexOf(r) >= 0) continue;
                                        t[r] = u[r];
                                    }
                                return t;
                            })(u, a);
                        const F = (0, n.useMemo)(() => {
                            const u = Object.assign({}, d, { body: t, header: l, note: c, alert: E });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [E, t, l, c, d]);
                        return o().createElement(
                            r.u,
                            s(
                                {
                                    contentId:
                                        ((D = null == d ? void 0 : d.hasHtmlContent),
                                        D ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: F,
                                },
                                A,
                            ),
                            e,
                        );
                        var D;
                    };
            },
            2056: (u, e, t) => {
                'use strict';
                t.d(e, { u: () => l });
                var r = t(7902),
                    n = t(9916),
                    o = t(6179);
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
                function s(u) {
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
                const i = (u, e, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: n.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    l = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            l = u.onMouseEnter,
                            c = u.onMouseLeave,
                            E = u.onMouseDown,
                            d = u.onClick,
                            A = u.ignoreShowDelay,
                            F = void 0 !== A && A,
                            D = u.ignoreMouseClick,
                            _ = void 0 !== D && D,
                            m = u.decoratorId,
                            C = void 0 === m ? 0 : m,
                            B = u.isEnabled,
                            v = void 0 === B || B,
                            g = u.targetId,
                            h = void 0 === g ? 0 : g,
                            b = u.onShow,
                            f = u.onHide,
                            p = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var r in u)
                                    if ({}.hasOwnProperty.call(u, r)) {
                                        if (e.indexOf(r) >= 0) continue;
                                        t[r] = u[r];
                                    }
                                return t;
                            })(u, a);
                        const w = (0, o.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, o.useMemo)(() => h || (0, r.F)().resId, [h]),
                            R = (0, o.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (i(t, C, { isMouseEvent: !0, on: !0, arguments: s(n) }, y),
                                    b && b(),
                                    (w.current.isVisible = !0));
                            }, [t, C, n, y, b]),
                            x = (0, o.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const u = w.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (w.current.timeoutId = 0)),
                                        i(t, C, { on: !1 }, y),
                                        w.current.isVisible && f && f(),
                                        (w.current.isVisible = !1));
                                }
                            }, [t, C, y, f]),
                            S = (0, o.useCallback)((u) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(w.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        ((0, o.useEffect)(() => {
                            const u = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', S, { capture: !0 }),
                                        u && window.clearTimeout(u));
                                }
                            );
                        }, []),
                            (0, o.useEffect)(() => {
                                !1 === v && x();
                            }, [v, x]),
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        (window.removeEventListener('mouseleave', x), x());
                                    }
                                ),
                                [x],
                            ));
                        return v
                            ? (0, o.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(R, F ? 100 : 400)),
                                                      l && l(u),
                                                      T && T(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              (x(), null == c || c(e), null == u || u(e));
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              (!1 === _ && x(), null == d || d(e), null == u || u(e));
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              (!1 === _ && x(), null == E || E(e), null == u || u(e));
                                          })(e.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : e;
                        var T;
                    };
            },
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
            527: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, { mouse: () => c, off: () => i, on: () => s, onResize: () => o, onScaleUpdated: () => a }));
                var r = t(2472),
                    n = t(1176);
                const o = (0, r.E)('clientResized'),
                    a = (0, r.E)('self.onScaleUpdated'),
                    s = (u, e) => engine.on(u, e),
                    i = (u, e) => engine.off(u, e),
                    l = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const c = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, n.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, n.R)(!0);
                    }
                    function r() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, n.R)(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let n = !0;
                                    const o = `mouse${e}`,
                                        a = l[e]((u) => t([u, 'outside']));
                                    function s(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, s),
                                        r(),
                                        () => {
                                            n &&
                                                (a(),
                                                window.removeEventListener(o, s),
                                                (u.listeners -= 1),
                                                r(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, o, {
                        disable() {
                            ((u.enabled = !1), r());
                        },
                        enable() {
                            ((u.enabled = !0), r());
                        },
                        enableOutside() {
                            u.enabled && (0, n.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, n.R)(!1);
                        },
                    });
                })();
            },
            5959: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        events: () => r,
                        getMouseGlobalPosition: () => a,
                        getSize: () => o,
                        graphicsQuality: () => s,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    }));
                var r = t(527),
                    n = t(2493);
                function o(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                'use strict';
                function r(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => r });
            },
            2493: (u, e, t) => {
                'use strict';
                function r(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function n(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                t.d(e, { E: () => n, G: () => r });
            },
            2472: (u, e, t) => {
                'use strict';
                function r(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => r });
            },
            3138: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => o });
                var r = t(5959),
                    n = t(514);
                const o = { view: t(7641), client: r, sound: n.ZP };
            },
            514: (u, e, t) => {
                'use strict';
                t.d(e, { ZP: () => a });
                var r = t(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    o = Object.keys(n).reduce((u, e) => ((u[e] = () => (0, r.playSound)(n[e])), u), {}),
                    a = { play: Object.assign({}, o, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            3722: (u, e, t) => {
                'use strict';
                function r(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function n(u, e, t) {
                    return `url(${r(u, e, t)})`;
                }
                (t.r(e), t.d(e, { getBgUrl: () => n, getTextureUrl: () => r }));
            },
            6112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => n });
                var r = t(2472);
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
            7641: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => i,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => y,
                        events: () => o.U,
                        extraSize: () => R,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => _,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => p,
                        getFontNames: () => w,
                        getScale: () => m,
                        getSize: () => A,
                        getViewGlobalPosition: () => D,
                        isEventHandled: () => b,
                        isFocused: () => g,
                        pxToRem: () => C,
                        remToPx: () => B,
                        resize: () => F,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => v,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => x,
                    }));
                var r = t(3722),
                    n = t(6112),
                    o = t(6538),
                    a = t(8566);
                const s = 15;
                function i(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function l(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, s);
                }
                function c(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function E(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function d(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, s);
                }
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function D(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function _() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function m() {
                    return viewEnv.getScale();
                }
                function C(u) {
                    return viewEnv.pxToRem(u);
                }
                function B(u) {
                    return viewEnv.remToPx(u);
                }
                function v(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function p() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let u = [];
                        return () => (0 === u.length && (u = Object.keys(viewEnv.getFontsConfig())), u);
                    })(),
                    y = Object.keys(n.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === n.W[e]), u),
                        {},
                    ),
                    R = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    x = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : o.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => l });
                const r = ['args'];
                const n = 2,
                    o = 16,
                    a = 32,
                    s = 64,
                    i = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const o = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var r in u)
                                        if ({}.hasOwnProperty.call(u, r)) {
                                            if (e.indexOf(r) >= 0) continue;
                                            t[r] = u[r];
                                        }
                                    return t;
                                })(e, r);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((n = o),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    l = {
                        close(u) {
                            i('popover' === u ? n : a);
                        },
                        minimize() {
                            i(s);
                        },
                        move(u) {
                            i(o, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            7902: (u, e, t) => {
                'use strict';
                t.d(e, { F: () => r });
                const r = (u = 1) => {
                    const e = new Error().stack;
                    let t,
                        r = R.invalid('resId');
                    return (
                        e &&
                            ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (r = window.subViews[t].id)),
                        { caller: t, stack: e, resId: r }
                    );
                };
            },
            2039: (u, e, t) => {
                'use strict';
                t.d(e, { b: () => n, k: () => o });
                var r = t(6179);
                const n = (u) => {
                        (0, r.useEffect)(u, []);
                    },
                    o = (u) => {
                        (0, r.useEffect)(() => u, []);
                    };
            },
            5521: (u, e, t) => {
                'use strict';
                let r, n;
                (t.d(e, { n: () => r }),
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
                    })(r || (r = {})),
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
                    })(n || (n = {})));
            },
            3368: () => {
                (!(function () {
                    let u,
                        e,
                        t,
                        r,
                        n,
                        o,
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
                                const r = Math.min(Math.max(t.x, e.left), e.right),
                                    n = Math.min(Math.max(t.y, e.top), e.bottom),
                                    o = document.createEvent('MouseEvent');
                                (o.initMouseEvent('mousedown', !0, !0, null, 1, r, n, r, n, !1, !1, !1, !1, 0, null),
                                    u.dispatchEvent(o));
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
                                (r = u.target.value),
                                (n = t.selectionStart),
                                (o = -1 !== r.lastIndexOf(' ', n) ? r.lastIndexOf(' ', n) + 1 : 0),
                                (a = -1 !== r.indexOf(' ', n) ? r.indexOf(' ', n) : r.length),
                                t.setSelectionRange(o, a, 'forward'));
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
            7727: (u, e, t) => {
                'use strict';
                function r(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                t.d(e, { $: () => n, G: () => r });
                const n = {
                    playHighlight() {
                        r('highlight');
                    },
                    playClick() {
                        r('play');
                    },
                    playYes() {
                        r('yes1');
                    },
                };
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => o });
                var r = t(3138);
                class n {
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
                        return (window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(u, e, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const o = r.O.view.addModelObserver(u, t, n);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(o) : (this._views[t] = [o])))
                                : console.error("Can't add callback for model:", u),
                            o
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
                            const r = this._callbacks[t];
                            void 0 !== r && r(u, e);
                        });
                    }
                }
                n.__instance = void 0;
                const o = n;
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
            9916: (u, e, t) => {
                'use strict';
                t.d(e, {
                    c1: () => f,
                    Sw: () => o.Z,
                    B3: () => i,
                    Z5: () => a.Z5,
                    B0: () => s,
                    ry: () => m,
                    Eu: () => C,
                    Sy: () => v,
                    SW: () => g,
                });
                class r {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let r = u.target;
                                    do {
                                        if (r === e) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(u, e) {
                        (this.addMouseListener(), this.entries.push({ container: u, callback: e }));
                    }
                    unregister(u, e) {
                        const t = u,
                            r = e;
                        ((this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== r)),
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
                var o = t(1358);
                var a = t(8613);
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
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    A = t(3138);
                const F = ['args'];
                function D(u, e, t, r, n, o, a) {
                    try {
                        var s = u[o](a),
                            i = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(i) : Promise.resolve(i).then(r, n);
                }
                const _ = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    m = (function () {
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
                                    return new Promise(function (r, n) {
                                        var o = u.apply(e, t);
                                        function a(u) {
                                            D(o, r, n, a, s, 'next', u);
                                        }
                                        function s(u) {
                                            D(o, r, n, a, s, 'throw', u);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    C = () =>
                        new Promise((u) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    u();
                                });
                            });
                        }),
                    B = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                o = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var r in u)
                                        if ({}.hasOwnProperty.call(u, r)) {
                                            if (e.indexOf(r) >= 0) continue;
                                            t[r] = u[r];
                                        }
                                    return t;
                                })(e, F);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, o, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, o));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    v = () => B(s.CLOSE),
                    g = () => B(s.POP_OVER, { on: !1 }),
                    h = (u, e) => {
                        u.keyCode === d.n.ESCAPE && e();
                    };
                var b = t(7572);
                const f = n.instance,
                    p = {
                        DataTracker: o.Z,
                        ViewModel: b.Z,
                        ViewEventType: s,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: _,
                        sendMoveEvent: (u) => B(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: g,
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            B(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, r, n = R.invalid('resId'), o) => {
                            const a = A.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                d = i.height,
                                F = {
                                    x: A.O.view.pxToRem(l) + a.x,
                                    y: A.O.view.pxToRem(c) + a.y,
                                    width: A.O.view.pxToRem(E),
                                    height: A.O.view.pxToRem(d),
                                };
                            B(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: _(F),
                                on: !0,
                                args: o,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => h(e, u);
                            return (
                                window.addEventListener('keydown', e),
                                () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            h(u, v);
                        },
                        handleViewEvent: B,
                        onBindingsReady: m,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const r in e)
                                if (Object.prototype.hasOwnProperty.call(e, r)) {
                                    const n = Object.prototype.toString.call(e[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = e[r];
                                        t[r] = [];
                                        for (let e = 0; e < n.length; e++) t[r].push({ value: u(n[e].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = u(e[r]))
                                            : (t[r] = e[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = p;
            },
            8613: (u, e, t) => {
                'use strict';
                t.d(e, { Ew: () => o, Z5: () => r, cy: () => n });
                const r = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    n = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    },
                    o = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            9051: (u, e, t) => {
                'use strict';
                t.d(e, { t: () => v });
                var r = t(6483),
                    n = t.n(r),
                    o = t(6373),
                    a = t(3138),
                    s = t(2039);
                const i = (u) => {
                    let e = !1;
                    return {
                        promise: new Promise((t, r) => {
                            u.then((u) => !e && t(u)).catch((u) => !e && r(u));
                        }),
                        cancel() {
                            e = !0;
                        },
                    };
                };
                var l = t(7727),
                    c = t(9916),
                    E = t(6179),
                    d = t.n(E);
                const A = {
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
                var F;
                !(function (u) {
                    ((u[(u.Left = 0)] = 'Left'),
                        (u[(u.Right = 1)] = 'Right'),
                        (u[(u.Top = 2)] = 'Top'),
                        (u[(u.Bottom = 3)] = 'Bottom'));
                })(F || (F = {}));
                const D = ['__left', '__right', '__top', '__bottom'],
                    _ =
                        ((0, E.forwardRef)(
                            ({ children: u, disableAutoSizeUpdate: e, onOutsideClick: t, customStyles: r = {} }, F) => {
                                const _ = (0, E.useRef)(null),
                                    m = (0, E.useRef)(null),
                                    C = (0, E.useRef)(null),
                                    B = (0, E.useState)(window.decorator && window.decorator.directionType),
                                    v = B[0],
                                    g = B[1],
                                    h = (0, E.useCallback)(() => {
                                        (l.$.playClick(), a.O.view.sendEvent.close());
                                    }, []),
                                    b = (0, E.useCallback)(() => {
                                        l.$.playHighlight();
                                    }, []),
                                    f = n()(A.arrow, A[`arrow${D[v]}`]);
                                (0, s.b)(
                                    () => (
                                        a.O.client.events.mouse.enableOutside(),
                                        a.O.client.events.mouse.down(([, u]) => {
                                            'outside' === u && (t ? t() : a.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const p = (0, E.useCallback)(
                                        (u) => {
                                            let e = u.target;
                                            do {
                                                if (e === _.current || e === C.current) return;
                                                e = e.parentNode;
                                            } while (e);
                                            const r = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const u = a.O.client.getMouseGlobalPosition(),
                                                    e = ![r.boundX, r.boundY, r.boundWidth, r.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    t =
                                                        u.x < r.boundX ||
                                                        u.x > r.boundX + r.boundWidth ||
                                                        u.y > r.boundY + r.boundHeight ||
                                                        u.y < r.boundY;
                                                if (e && !t) return;
                                            }
                                            t ? t() : a.O.view.sendEvent.close('popover');
                                        },
                                        [_, C, t],
                                    ),
                                    w = (function () {
                                        const u = (0, E.useRef)(0);
                                        return (
                                            (0, s.k)(() => {
                                                window.cancelAnimationFrame(u.current);
                                            }),
                                            (0, E.useMemo)(
                                                () => ({
                                                    run: (e) => {
                                                        (window.cancelAnimationFrame(u.current),
                                                            (u.current = window.requestAnimationFrame(() => {
                                                                u.current = window.requestAnimationFrame(() => {
                                                                    (e(), (u.current = 0));
                                                                });
                                                            })));
                                                    },
                                                    clear: () => {
                                                        (window.cancelAnimationFrame(u.current), (u.current = 0));
                                                    },
                                                    get isRunning() {
                                                        return 0 !== u.current;
                                                    },
                                                }),
                                                [],
                                            )
                                        );
                                    })(),
                                    y = (0, E.useCallback)(() => {
                                        const u = m.current;
                                        if (u)
                                            return (
                                                a.O.view.freezeTextureBeforeResize(),
                                                w.run(() => {
                                                    const e = u.scrollWidth,
                                                        t = u.scrollHeight;
                                                    (a.O.view.resize(e, t), g(window.decorator.directionType));
                                                })
                                            );
                                    }, [w]);
                                return (
                                    (0, E.useImperativeHandle)(F, () => ({ updateSize: y })),
                                    (0, s.b)(() => {
                                        a.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, E.useEffect)(() => {
                                        document.addEventListener('mousedown', p, { capture: !0 });
                                        const u = i((0, c.Eu)());
                                        return (
                                            !e && u.promise.then(() => y()),
                                            () => {
                                                (u.cancel(), document.removeEventListener('mousedown', p));
                                            }
                                        );
                                    }, [y, p, e]),
                                    d().createElement(
                                        'div',
                                        { className: A.base, ref: m },
                                        d().createElement(
                                            'div',
                                            { className: A.decorator },
                                            d().createElement(
                                                'div',
                                                { className: A.content, ref: _ },
                                                u,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    d().createElement(
                                                        o.i,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        d().createElement('div', {
                                                            className: A.closeBtn,
                                                            onClick: h,
                                                            onMouseEnter: b,
                                                            ref: C,
                                                        }),
                                                    ),
                                            ),
                                            d().createElement('div', { className: f, style: r.arrow }),
                                        ),
                                    )
                                );
                            },
                        ),
                        'Background_base_73'),
                    m = () => {
                        const u = (() => {
                            const u = (0, E.useState)(a.O.view.getScale()),
                                e = u[0],
                                t = u[1];
                            return (
                                (0, E.useEffect)(() => {
                                    const u = () => {
                                        t(a.O.view.getScale());
                                    };
                                    return (
                                        window.addEventListener('resize', u),
                                        () => {
                                            window.removeEventListener('resize', u);
                                        }
                                    );
                                }, []),
                                e
                            );
                        })();
                        return d().createElement(
                            'svg',
                            { className: _, viewBox: '0 0 100% 100%' },
                            d().createElement(
                                'defs',
                                null,
                                d().createElement(
                                    'linearGradient',
                                    {
                                        id: 'gradient',
                                        gradientUnits: 'userSpaceOnUse',
                                        x1: '0%',
                                        y1: '0%',
                                        x2: '0%',
                                        y2: '100%',
                                    },
                                    d().createElement('stop', { offset: '0%', stopColor: '#3e67b7' }),
                                    d().createElement('stop', { offset: '100%', stopColor: '#10357e' }),
                                ),
                            ),
                            d().createElement('rect', {
                                x: '0%',
                                y: '0%',
                                width: '100%',
                                height: '100%',
                                rx: 6 * u,
                                fill: 'url(#gradient)',
                            }),
                        );
                    },
                    C = {
                        base: 'NyPopoverDecorator_base_23',
                        arrow: 'NyPopoverDecorator_arrow_5e',
                        arrow__bottom: 'NyPopoverDecorator_arrow__bottom_71',
                        arrow__top: 'NyPopoverDecorator_arrow__top_90',
                        arrow__left: 'NyPopoverDecorator_arrow__left_df',
                        arrow__right: 'NyPopoverDecorator_arrow__right_27',
                        closeBtn: 'NyPopoverDecorator_closeBtn_32',
                        content: 'NyPopoverDecorator_content_50',
                    },
                    B = ['__left', '__right', '__top', '__bottom'],
                    v = (0, E.forwardRef)(
                        (
                            {
                                children: u,
                                disableAutoSizeUpdate: e = !1,
                                onOutsideClick: t,
                                arrowPosition: r = 50,
                                offsetSizes: o = {},
                                classNames: s = {},
                            },
                            A,
                        ) => {
                            var D, _, v, g;
                            const h = (0, E.useRef)(null),
                                b = (0, E.useRef)(null),
                                f = (0, E.useRef)(null),
                                p = (0, E.useState)(window.decorator.directionType),
                                w = p[0],
                                y = p[1],
                                x = (0, E.useCallback)(() => {
                                    (l.$.playClick(), (0, c.Sy)());
                                }, []),
                                S = (0, E.useCallback)(() => {
                                    l.$.playHighlight();
                                }, []),
                                T = n()(C.arrow, C[`arrow${B[w]}`], s.arrow),
                                L = null != (D = o.top) ? D : 68,
                                O = null != (_ = o.bottom) ? _ : 68,
                                M = null != (v = o.left) ? v : 68,
                                k = null != (g = o.right) ? g : 68,
                                N = (0, E.useCallback)(
                                    (u) => {
                                        let e = u.target;
                                        do {
                                            if (e === h.current || e === f.current) return;
                                            e = e.parentNode;
                                        } while (e);
                                        const r = window.decorator;
                                        if (r) {
                                            const u = a.O.client.getMouseGlobalPosition(),
                                                e = ![r.boundX, r.boundY, r.boundWidth, r.boundHeight].includes(void 0),
                                                t =
                                                    u.x < r.boundX ||
                                                    u.x > r.boundX + r.boundWidth ||
                                                    u.y > r.boundY + r.boundHeight ||
                                                    u.y < r.boundY;
                                            if (e && !t) return;
                                        }
                                        t ? t() : (0, c.SW)();
                                    },
                                    [h, f, t],
                                ),
                                P = (0, E.useCallback)(() => {
                                    const u = requestAnimationFrame(() => {
                                        if (b.current) {
                                            const u = b.current.scrollWidth,
                                                e = b.current.scrollHeight;
                                            (a.O.view.resize(u, e), y(window.decorator.directionType));
                                        }
                                    });
                                    return () => cancelAnimationFrame(u);
                                }, []);
                            ((0, E.useImperativeHandle)(A, () => ({ updateSize: P })),
                                (0, E.useEffect)(() => {
                                    document.addEventListener('mousedown', N, { capture: !0 });
                                    const u = i((0, c.Eu)());
                                    return (
                                        !e && u.promise.then(() => P()),
                                        () => {
                                            (u.cancel(), document.removeEventListener('mousedown', N));
                                        }
                                    );
                                }, [P, N, e]));
                            const I = (0, E.useMemo)(() => {
                                    if (null !== r)
                                        return w === F.Top || w === F.Bottom ? { left: `${r}%` } : { top: `${r}%` };
                                }, [w, r]),
                                H = {
                                    '--offset-top': `${L}rem`,
                                    '--offset-bottom': `${O}rem`,
                                    '--offset-left': `${M}rem`,
                                    '--offset-right': `${k}rem`,
                                };
                            return d().createElement(
                                'div',
                                { style: H, className: C.base, ref: b, lang: R.strings.settings.LANGUAGE_CODE() },
                                d().createElement(
                                    'div',
                                    { className: C.content, ref: h },
                                    d().createElement(m, null),
                                    u,
                                    window.decorator.isCloseBtnVisible &&
                                        d().createElement('div', {
                                            className: n()(C.closeBtn, s.closeBtn),
                                            onClick: x,
                                            onMouseEnter: S,
                                            ref: f,
                                        }),
                                ),
                                d().createElement('div', { className: T, style: I }),
                            );
                        },
                    );
            },
            7787: (u, e, t) => {
                'use strict';
                var r = t(6179),
                    n = t.n(r);
                const o = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var a = t(3138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var i;
                function l(u, e, t) {
                    const r = (function (u, e) {
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
                        n = (function (u, e) {
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
                        o = Math.min(r, n);
                    return {
                        extraLarge: o === t.extraLarge.weight,
                        large: o === t.large.weight,
                        medium: o === t.medium.weight,
                        small: o === t.small.weight,
                        extraSmall: o === t.extraSmall.weight,
                        extraLargeWidth: r === t.extraLarge.weight,
                        largeWidth: r === t.large.weight,
                        mediumWidth: r === t.medium.weight,
                        smallWidth: r === t.small.weight,
                        extraSmallWidth: r === t.extraSmall.weight,
                        extraLargeHeight: n === t.extraLarge.weight,
                        largeHeight: n === t.large.weight,
                        mediumHeight: n === t.medium.weight,
                        smallHeight: n === t.small.weight,
                        extraSmallHeight: n === t.extraSmall.weight,
                    };
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
                })(i || (i = {}));
                const c = a.O.client.getSize('rem'),
                    E = c.width,
                    d = c.height,
                    A = Object.assign({ width: E, height: d }, l(E, d, s)),
                    F = (0, r.createContext)(A),
                    D = ['children'];
                const _ = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var r in u)
                                if ({}.hasOwnProperty.call(u, r)) {
                                    if (e.indexOf(r) >= 0) continue;
                                    t[r] = u[r];
                                }
                            return t;
                        })(u, D);
                    const n = (0, r.useContext)(F),
                        a = n.extraLarge,
                        s = n.large,
                        i = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        E = n.extraLargeWidth,
                        d = n.largeWidth,
                        A = n.mediumWidth,
                        _ = n.smallWidth,
                        m = n.extraSmallWidth,
                        C = n.extraLargeHeight,
                        B = n.largeHeight,
                        v = n.mediumHeight,
                        g = n.smallHeight,
                        h = n.extraSmallHeight,
                        b = { extraLarge: C, large: B, medium: v, small: g, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && a) return e;
                        if (t.large && s) return e;
                        if (t.medium && i) return e;
                        if (t.small && l) return e;
                        if (t.extraSmall && c) return e;
                    } else {
                        if (t.extraLargeWidth && E) return o(e, t, b);
                        if (t.largeWidth && d) return o(e, t, b);
                        if (t.mediumWidth && A) return o(e, t, b);
                        if (t.smallWidth && _) return o(e, t, b);
                        if (t.extraSmallWidth && m) return o(e, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return e;
                            if (t.largeHeight && B) return e;
                            if (t.mediumHeight && v) return e;
                            if (t.smallHeight && g) return e;
                            if (t.extraSmallHeight && h) return e;
                        }
                    }
                    return null;
                };
                _.defaultProps = {
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
                (0, r.memo)(_);
                const m = (u) => {
                        const e = (0, r.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    C = ({ children: u }) => {
                        const e = (0, r.useContext)(F),
                            t = (0, r.useState)(e),
                            o = t[0],
                            i = t[1],
                            c = (0, r.useCallback)((u, e) => {
                                const t = a.O.view.pxToRem(u),
                                    r = a.O.view.pxToRem(e);
                                i(Object.assign({ width: t, height: r }, l(t, r, s)));
                            }, []),
                            E = (0, r.useCallback)(() => {
                                const u = a.O.client.getSize('px');
                                c(u.width, u.height);
                            }, [c]);
                        (m(() => {
                            (a.O.client.events.on('clientResized', c), a.O.client.events.on('self.onScaleUpdated', E));
                        }),
                            (0, r.useEffect)(
                                () => () => {
                                    (a.O.client.events.off('clientResized', c),
                                        a.O.client.events.off('self.onScaleUpdated', E));
                                },
                                [c, E],
                            ));
                        const d = (0, r.useMemo)(() => Object.assign({}, o), [o]);
                        return n().createElement(F.Provider, { value: d }, u);
                    };
                var B = t(6483),
                    v = t.n(B),
                    g = t(926),
                    h = t.n(g);
                let b, f, p;
                (!(function (u) {
                    ((u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = s.small.width)] = 'Small'),
                        (u[(u.Medium = s.medium.width)] = 'Medium'),
                        (u[(u.Large = s.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                })(b || (b = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.width)] = 'Small'),
                            (u[(u.Medium = s.medium.width)] = 'Medium'),
                            (u[(u.Large = s.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                    })(f || (f = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.height)] = 'Small'),
                            (u[(u.Medium = s.medium.height)] = 'Medium'),
                            (u[(u.Large = s.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge'));
                    })(p || (p = {})));
                const w = () => {
                        const u = (0, r.useContext)(F),
                            e = u.width,
                            t = u.height,
                            n = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return b.ExtraLarge;
                                    case u.large:
                                        return b.Large;
                                    case u.medium:
                                        return b.Medium;
                                    case u.small:
                                        return b.Small;
                                    case u.extraSmall:
                                        return b.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), b.ExtraSmall);
                                }
                            })(u),
                            o = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return f.ExtraLarge;
                                    case u.largeWidth:
                                        return f.Large;
                                    case u.mediumWidth:
                                        return f.Medium;
                                    case u.smallWidth:
                                        return f.Small;
                                    case u.extraSmallWidth:
                                        return f.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), f.ExtraSmall);
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
                        return { mediaSize: n, mediaWidth: o, mediaHeight: a, remScreenWidth: e, remScreenHeight: t };
                    },
                    y = ['children', 'className'];
                function x() {
                    return (
                        (x = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                  }
                                  return u;
                              }),
                        x.apply(null, arguments)
                    );
                }
                const S = {
                        [f.ExtraSmall]: '',
                        [f.Small]: h().SMALL_WIDTH,
                        [f.Medium]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH}`,
                        [f.Large]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH} ${h().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [p.ExtraSmall]: '',
                        [p.Small]: h().SMALL_HEIGHT,
                        [p.Medium]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT}`,
                        [p.Large]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT}`,
                        [p.ExtraLarge]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT} ${h().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [b.ExtraSmall]: '',
                        [b.Small]: h().SMALL,
                        [b.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [b.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [b.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
                    },
                    O = (u) => {
                        let e = u.children,
                            t = u.className,
                            r = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var r in u)
                                    if ({}.hasOwnProperty.call(u, r)) {
                                        if (e.indexOf(r) >= 0) continue;
                                        t[r] = u[r];
                                    }
                                return t;
                            })(u, y);
                        const o = w(),
                            a = o.mediaWidth,
                            s = o.mediaHeight,
                            i = o.mediaSize;
                        return n().createElement('div', x({ className: v()(t, S[a], T[s], L[i]) }, r), e);
                    },
                    M = ['children'];
                const k = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var r in u)
                                if ({}.hasOwnProperty.call(u, r)) {
                                    if (e.indexOf(r) >= 0) continue;
                                    t[r] = u[r];
                                }
                            return t;
                        })(u, M);
                    return n().createElement(C, null, n().createElement(O, t, e));
                };
                var N = t(493),
                    P = t.n(N),
                    I = t(2039),
                    H = t(9916),
                    W = t(3403),
                    G = t(9051);
                let U, $, z, j, V, Y, K;
                (!(function (u) {
                    ((u.Undefined = 'undefined'),
                        (u.NewYear = 'NewYear'),
                        (u.Christmas = 'Christmas'),
                        (u.Fairytale = 'Fairytale'),
                        (u.Oriental = 'Oriental'),
                        (u.Soviet = 'soviet'),
                        (u.TraditionalWestern = 'traditionalWestern'),
                        (u.ModernWestern = 'modernWestern'),
                        (u.Asian = 'asian'),
                        (u.Mega = 'Mega'),
                        (u.GiftSystem = 'GiftSystem'),
                        (u.Cat = 'Cat'),
                        (u.Atm = 'Atm'),
                        (u.Gift2 = 'Gift2'),
                        (u.Bro = 'Bro'),
                        (u.Dog = 'Dog'),
                        (u.Surprise = 'Surprise'));
                })(U || (U = {})),
                    (function (u) {
                        ((u.Crystal = 'ny_crystal'),
                            (u.Emerald = 'ny_emerald'),
                            (u.Amber = 'ny_amber'),
                            (u.Iron = 'ny_iron'),
                            (u.AnyResource = 'anyResource'));
                    })($ || ($ = {})),
                    (function (u) {
                        ((u.XP = 'xpFactor'),
                            (u.TankmenXP = 'tankmenXPFactor'),
                            (u.FreeXp = 'freeXPFactor'),
                            (u.Credits = 'creditsFactor'));
                    })(z || (z = {})),
                    (function (u) {
                        ((u.NewYear = 'NewYear'),
                            (u.Christmas = 'Christmas'),
                            (u.Fairytale = 'Fairytale'),
                            (u.Oriental = 'Oriental'));
                    })(j || (j = {})),
                    (function (u) {
                        ((u.Level1 = 'level1'), (u.Level2 = 'level2'), (u.Level3 = 'level3'), (u.Level4 = 'level4'));
                    })(V || (V = {})),
                    (function (u) {
                        ((u.Zero = 'zero'), (u.Number = 'number'), (u.Default = 'default'));
                    })(Y || (Y = {})),
                    (function (u) {
                        ((u.Undefined = 'undefined'),
                            (u.ToEvent = 'toEvent'),
                            (u.ToGuestD = 'toGuestD'),
                            (u.ToGuestC = 'toGuestC'),
                            (u.ToMarkertplace = 'toMarkertplace'),
                            (u.ToGiftmachine = 'toGiftmachine'),
                            (u.ToRewards = 'toRewards'));
                    })(K || (K = {})));
                const q = function () {};
                function X() {
                    return !1;
                }
                console.log;
                var Z = t(9174);
                function Q(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (u) {
                                if ('string' == typeof u) return J(u, e);
                                var t = {}.toString.call(u).slice(8, -1);
                                return (
                                    'Object' === t && u.constructor && (t = u.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(u)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? J(u, e)
                                          : void 0
                                );
                            }
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var r = 0;
                        return function () {
                            return r >= u.length ? { done: !0 } : { done: !1, value: u[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function J(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const uu = (u) => (0 === u ? window : window.subViews.get(u));
                function eu(u, e) {
                    var t;
                    if (!(e >= u.length)) return Array.isArray(u) ? u[e] : null == (t = u[e]) ? void 0 : t.value;
                }
                const tu = eu;
                function ru(u, e) {
                    for (let t = 0; t < u.length; t++) {
                        if (e(tu(u, t), t, u)) return t;
                    }
                }
                var nu = t(3946);
                const ou = R.strings.ny.resourcesConvertPopover,
                    au = (0, nu.Om)((u, e) => {
                        var t, r;
                        const n = eu(u, ((null != (t = ru(u, ({ type: u }) => u === e)) ? t : 0) + 1) % u.length);
                        return null != (r = null == n ? void 0 : n.type) ? r : $.Crystal;
                    }),
                    su = ((u, e) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: o = 'real', options: s, children: i, mocks: l }) {
                                const c = (0, r.useRef)([]),
                                    E = (t, r, n) => {
                                        var o;
                                        const s = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = uu,
                                                context: r = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function o(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? n.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = n.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const s = (u) => {
                                                    const n = t(e),
                                                        o = r.split('.').reduce((u, e) => u[e], n);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? o
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, o);
                                                };
                                                return {
                                                    subscribe: (t, o) => {
                                                        const i = 'string' == typeof o ? `${r}.${o}` : r,
                                                            l = a.O.view.addModelObserver(i, e, !0);
                                                        return (n.set(l, t), u && t(s(o)), l);
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
                                                        for (var u, t = Q(n.keys()); !(u = t()).done; ) o(u.value, e);
                                                    },
                                                    unsubscribe: o,
                                                };
                                            })(r),
                                            i =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (o = null == n ? void 0 : n.getter)
                                                                  ? o
                                                                  : () => {},
                                                      }),
                                            l = (u) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(u)) : i.readByPath(u),
                                            E = (u) => c.current.push(u),
                                            d = u({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const r = null != e ? e : l(u),
                                                            n = Z.LO.box(r, { equals: X });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Z.aD)((u) => n.set(u)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const r = null != e ? e : l(u),
                                                            n = Z.LO.box(r, { equals: X });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Z.aD)((u) => n.set(u)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const r = l(e);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (u, e) => ((u[e] = Z.LO.box(r[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, Z.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                n[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = u,
                                                                o = Object.entries(n),
                                                                a = o.reduce(
                                                                    (u, [e, t]) => ((u[t] = Z.LO.box(r[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, Z.aD)((u) => {
                                                                            o.forEach(([e, t]) => {
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
                                            A = { mode: t, model: d, externalModel: i, cleanup: E };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && n ? n.controls(A) : e(A),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    d = (0, r.useRef)(!1),
                                    A = (0, r.useState)(o),
                                    F = A[0],
                                    D = A[1],
                                    _ = (0, r.useState)(() => E(o, s, l)),
                                    m = _[0],
                                    C = _[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        d.current ? C(E(F, s, l)) : (d.current = !0);
                                    }, [l, F, s]),
                                    (0, r.useEffect)(() => {
                                        D(o);
                                    }, [o]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            (m.externalModel.dispose(), c.current.forEach((u) => u()));
                                        },
                                        [m],
                                    ),
                                    n().createElement(t.Provider, { value: m }, i)
                                );
                            },
                            () => (0, r.useContext)(t),
                        ];
                    })(
                        ({ observableModel: u }) => {
                            const e = {
                                    root: u.object(),
                                    resources: u.array('availableResources', []),
                                    convertRate: u.object('convertRate'),
                                },
                                t = (0, nu.Om)(() => {
                                    return (
                                        (u = e.resources.get()),
                                        (t = (u) => ({ type: u.type, value: u.value })),
                                        Array.isArray(u)
                                            ? u.map(t)
                                            : u.map((u, e, r) => t(null == u ? void 0 : u.value, e, r))
                                    );
                                    var u, t;
                                }),
                                r = () => {
                                    var u, r, n;
                                    const o = e.root.get().resourceTypeFrom,
                                        a = e.convertRate.get().from;
                                    if (o) return { type: o, value: a };
                                    const s = null != (u = ru(t(), ({ value: u }) => u >= a)) ? u : 0;
                                    return {
                                        type: null != (r = null == (n = eu(t(), s)) ? void 0 : n.type) ? r : $.Crystal,
                                        value: a,
                                    };
                                },
                                n = Z.LO.box(r()),
                                o = Z.LO.box(
                                    (() => {
                                        const u = e.root.get().resourceTypeTo,
                                            n = e.convertRate.get().to;
                                        return u ? { type: u, value: n } : { type: au(t(), r().type), value: n };
                                    })(),
                                ),
                                a = (0, nu.Om)((u) => t().find((e) => e.type === u)),
                                s = (0, nu.Om)(() => {
                                    var u, e;
                                    const t = n.get(),
                                        r = t.type,
                                        o = t.value;
                                    return (null != (u = null == (e = a(r)) ? void 0 : e.value) ? u : 0) >= o;
                                }),
                                i = (0, nu.Om)(() => {
                                    const u = e.root.get().isWalletAvailable,
                                        r = e.convertRate.get().from;
                                    return (
                                        !u ||
                                        (function (u, e) {
                                            if (Array.isArray(u)) return u.every(e);
                                            for (let t = 0; t < u.length; t++) if (!e(tu(u, t), t, u)) return !1;
                                            return !0;
                                        })(t(), ({ value: u }) => u < r)
                                    );
                                }),
                                l = (0, nu.Om)(() =>
                                    t().map(({ type: u, value: t }) => ({
                                        id: u,
                                        label: R.strings.ny.resource.type.$dyn(u),
                                        isDisabled: t < e.convertRate.get().from,
                                        meta: { disabledTooltipText: ou.resource.tooltip.notEnough() },
                                    })),
                                ),
                                c = (0, nu.Om)(() => {
                                    const u = l(),
                                        e = 1 === u.filter(({ isDisabled: u }) => !u).length;
                                    return u.map((u) =>
                                        Object.assign({}, u, {
                                            isDisabled: u.id === n.get().type && e,
                                            meta: { disabledTooltipText: ou.resource.tooltip.alreadySelected() },
                                        }),
                                    );
                                });
                            return Object.assign({}, e, {
                                fromResource: n,
                                toResource: o,
                                computes: {
                                    getAvailableResources: t,
                                    getIsEnough: s,
                                    getIsNoResources: i,
                                    getFromDropDownItems: l,
                                    getToDropDownItems: c,
                                },
                            });
                        },
                        ({
                            externalModel: u,
                            model: { fromResource: e, toResource: t, convertRate: r, computes: n },
                        }) => {
                            const o = u.createCallback(
                                (u, e) => ({ resourceFrom: u, resourceTo: e }),
                                'onChangeResourcesType',
                            );
                            return Object.assign(
                                {},
                                (function (u) {
                                    const e = {};
                                    for (const t in u)
                                        if (Object.prototype.hasOwnProperty.call(u, t)) {
                                            const r = u[t];
                                            e[t] = (0, Z.aD)(r);
                                        }
                                    return e;
                                })({
                                    changeFromResourceType: (u) => {
                                        if ((e.set({ type: u, value: e.get().value }), u === t.get().type)) {
                                            const e = au(n.getAvailableResources(), u);
                                            t.set({ type: e, value: t.get().value });
                                        }
                                        o(u, t.get().type);
                                    },
                                    changeToResourceType: (u) => {
                                        if ((t.set({ type: u, value: t.get().value }), u === e.get().type)) {
                                            const t = r.get().from,
                                                o = (function (u, e) {
                                                    if (Array.isArray(u)) return u.filter(e);
                                                    const t = [];
                                                    for (let n = 0; n < u.length; n++) {
                                                        var r;
                                                        const o = null == (r = u[n]) ? void 0 : r.value;
                                                        e(o, n, u) && t.push(o);
                                                    }
                                                    return t;
                                                })(n.getAvailableResources(), ({ value: u }) => u >= t),
                                                a = au(o, u);
                                            e.set({ type: a, value: e.get().value });
                                        }
                                        o(e.get().type, u);
                                    },
                                    changeFromResourceValue: (u) => {
                                        (e.set({ type: e.get().type, value: u }),
                                            t.set({ type: t.get().type, value: (u / r.get().from) * r.get().to }));
                                    },
                                    changeToResourceValue: (u) => {
                                        (t.set({ type: t.get().type, value: u }),
                                            e.set({ type: e.get().type, value: (u / r.get().to) * r.get().from }));
                                    },
                                }),
                                {
                                    convert: u.createCallback(
                                        () => ({
                                            fromResource: e.get().type,
                                            toResource: t.get().type,
                                            value: t.get().value,
                                        }),
                                        'onConvertClick',
                                    ),
                                    goToRewardKits: u.createCallbackNoArgs('onGoToRewardKits'),
                                    goToQuests: u.createCallbackNoArgs('onGoToQuests'),
                                },
                            );
                        },
                    ),
                    iu = su[0],
                    lu = su[1],
                    cu = 'App_arrow_07',
                    Eu = 'App_arrow__friend_79',
                    du = 'App_closeBtn_ad';
                var Au = t(5521);
                const Fu = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Du(u = Au.n.NONE, e = Fu, t = !1, n = !1) {
                    (0, r.useEffect)(() => {
                        if (u !== Au.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === u) {
                                if (!n && a.O.view.isEventHandled()) return;
                                (a.O.view.setEventHandled(), e(r), t && r.stopPropagation());
                            }
                        }
                    }, [e, u, t, n]);
                }
                function _u() {
                    !(function (u = Au.n.ESCAPE) {
                        Du(u, H.Sy, !0);
                    })(Au.n.ESCAPE);
                }
                var mu = t(7727);
                const Cu = {
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
                let Bu, vu;
                (!(function (u) {
                    ((u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost'));
                })(Bu || (Bu = {})),
                    (function (u) {
                        ((u.extraSmall = 'extraSmall'),
                            (u.small = 'small'),
                            (u.medium = 'medium'),
                            (u.large = 'large'));
                    })(vu || (vu = {})));
                const gu = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: o,
                    disabled: a,
                    mixClass: s,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: d,
                    onMouseUp: A,
                    onMouseLeave: F,
                    onClick: D,
                }) => {
                    const _ = (0, r.useRef)(null),
                        m = (0, r.useState)(t),
                        C = m[0],
                        B = m[1],
                        g = (0, r.useState)(!1),
                        h = g[0],
                        b = g[1];
                    return (
                        (0, r.useEffect)(() => {
                            function u(u) {
                                C && null !== _.current && !_.current.contains(u.target) && B(!1);
                            }
                            return (
                                document.addEventListener('mousedown', u),
                                () => {
                                    document.removeEventListener('mousedown', u);
                                }
                            );
                        }, [C]),
                        (0, r.useEffect)(() => {
                            B(t);
                        }, [t]),
                        n().createElement(
                            'div',
                            {
                                ref: _,
                                className: v()(
                                    Cu.base,
                                    Cu[`base__${o}`],
                                    a && Cu.base__disabled,
                                    e && Cu[`base__${e}`],
                                    C && Cu.base__focus,
                                    h && Cu.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (u) {
                                    a || (null !== i && (0, mu.G)(i), c && c(u));
                                },
                                onMouseMove: function (u) {
                                    E && E(u);
                                },
                                onMouseUp: function (u) {
                                    a || (A && A(u), b(!1));
                                },
                                onMouseDown: function (u) {
                                    a ||
                                        (null !== l && (0, mu.G)(l),
                                        d && d(u),
                                        t && (a || (_.current && (_.current.focus(), B(!0)))),
                                        b(!0));
                                },
                                onMouseLeave: function (u) {
                                    a || (F && F(u), b(!1));
                                },
                                onClick: function (u) {
                                    a || (D && D(u));
                                },
                            },
                            o !== Bu.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: Cu.back }),
                                    n().createElement('span', { className: Cu.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: v()(Cu.state, Cu.state__default) },
                                n().createElement('span', { className: Cu.stateDisabled }),
                                n().createElement('span', { className: Cu.stateHighlightHover }),
                                n().createElement('span', { className: Cu.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: Cu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                gu.defaultProps = { type: Bu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const hu = gu;
                var bu = t(1281);
                let fu;
                function pu(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                })(fu || (fu = {}));
                const wu = (u) => u.replace(/&nbsp;/g, ' '),
                    yu = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    Ru = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    xu = (u, e, t = fu.left) => u.split(e).reduce(t === fu.left ? yu : Ru, []),
                    Su = (() => {
                        const u = new RegExp(
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
                        return (e) =>
                            e
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(u);
                    })(),
                    Tu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Lu = (u, e = fu.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Tu.includes(t)) return Su(u);
                        if ('ja' === t) {
                            return (0, bu.D4)()
                                .parse(u)
                                .map((u) => wu(u));
                        }
                        return ((u, e = fu.left) => {
                            let t = [];
                            const r =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = wu(u);
                            return (xu(n, /( )/, e).forEach((u) => (t = t.concat(xu(u, r, fu.left)))), t);
                        })(u, e);
                    },
                    Ou = 'FormatText_base_d0',
                    Mu = ({ binding: u, text: e = '', classMix: t, alignment: o = fu.left, formatWithBrackets: a }) => {
                        if (null === e) return (console.error("FormatText was supplied with 'null'"), null);
                        const s = a && u ? pu(e, u) : e;
                        return n().createElement(
                            r.Fragment,
                            null,
                            s.split('\n').map((e, a) =>
                                n().createElement(
                                    'div',
                                    { className: v()(Ou, t), key: `${e}-${a}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : Lu(u, e))))(
                                        e,
                                        o,
                                        u,
                                    ).map((u, e) => n().createElement(r.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    };
                var ku = t(6373);
                let Nu;
                !(function (u) {
                    ((u.From = 'from'), (u.To = 'to'));
                })(Nu || (Nu = {}));
                const Pu = 'Converter_base_45',
                    Iu = 'Converter_subTitle_c0',
                    Hu = 'Converter_dropDown_31',
                    Wu = 'Converter_convertRateBlock_dc',
                    Gu = 'Converter_line_73',
                    Uu = 'Converter_convertRate_e7',
                    $u = 'Converter_footer_93',
                    zu = 'Converter_convertButton_a2',
                    ju = [];
                function Vu(u) {
                    const e = (0, r.useRef)(u);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            e.current = u;
                        }),
                        (0, r.useCallback)((...u) => (0, e.current)(...u), ju)
                    );
                }
                var Yu = t(2056);
                const Ku = ['children'];
                function qu() {
                    return (
                        (qu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                  }
                                  return u;
                              }),
                        qu.apply(null, arguments)
                    );
                }
                const Xu = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var r in u)
                                if ({}.hasOwnProperty.call(u, r)) {
                                    if (e.indexOf(r) >= 0) continue;
                                    t[r] = u[r];
                                }
                            return t;
                        })(u, Ku);
                    return n().createElement(
                        Yu.u,
                        qu(
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
                };
                function Zu() {
                    return (
                        (Zu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                  }
                                  return u;
                              }),
                        Zu.apply(null, arguments)
                    );
                }
                const Qu = ({ children: u, tooltipArgs: e, className: t }) => {
                        if (!e) return u;
                        const r = n().createElement('div', { className: t }, u);
                        if (e.header || e.body) return n().createElement(ku.i, e, r);
                        const o = e.contentId;
                        return o
                            ? n().createElement(Yu.u, Zu({}, e, { contentId: o }), r)
                            : n().createElement(Xu, e, r);
                    },
                    Ju = (u) => {
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
                let ue, ee;
                (!(function (u) {
                    ((u.Basic = 'basic'),
                        (u.Disabled = 'disabled'),
                        (u.Focused = 'focused'),
                        (u.Alert = 'alert'),
                        (u.Selected = 'selected'));
                })(ue || (ue = {})),
                    (function (u) {
                        ((u.Small = 'small'), (u.Medium = 'medium'));
                    })(ee || (ee = {})));
                const te = 'TextOverflow_base_3b',
                    re = ['content', 'classMix', 'className'];
                function ne() {
                    return (
                        (ne = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                  }
                                  return u;
                              }),
                        ne.apply(null, arguments)
                    );
                }
                const oe = (u) => {
                        let e = u.content,
                            t = u.classMix,
                            o = u.className,
                            a = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var r in u)
                                    if ({}.hasOwnProperty.call(u, r)) {
                                        if (e.indexOf(r) >= 0) continue;
                                        t[r] = u[r];
                                    }
                                return t;
                            })(u, re);
                        const s = (0, r.useRef)(null),
                            i = (0, r.useState)(!0),
                            l = i[0],
                            c = i[1];
                        return (
                            (0, r.useEffect)(() =>
                                Ju(() => {
                                    const u = s.current;
                                    u && u.offsetWidth >= u.scrollWidth && c(!1);
                                }),
                            ),
                            n().createElement(
                                ku.i,
                                { isEnabled: l, body: e },
                                n().createElement('div', ne({}, a, { ref: s, className: v()(te, o, t) }), e),
                            )
                        );
                    },
                    ae = {
                        base: 'DropDownControl_base_ca',
                        base__small: 'DropDownControl_base__small_4d',
                        base__medium: 'DropDownControl_base__medium_1d',
                        base__over: 'DropDownControl_base__over_51',
                        base__down: 'DropDownControl_base__down_8b',
                        base__open: 'DropDownControl_base__open_48',
                        base__focused: 'DropDownControl_base__focused_0f',
                        base__selected: 'DropDownControl_base__selected_4f',
                        base__disabled: 'DropDownControl_base__disabled_d5',
                        label: 'DropDownControl_label_95',
                        label__small: 'DropDownControl_label__small_56',
                        label__medium: 'DropDownControl_label__medium_bb',
                        label__placeholder: 'DropDownControl_label__placeholder_12',
                        button: 'DropDownControl_button_f5',
                        button__small: 'DropDownControl_button__small_99',
                        button__medium: 'DropDownControl_button__medium_4c',
                        gradient: 'DropDownControl_gradient_22',
                        disabled: 'DropDownControl_disabled_7f',
                        arrow: 'DropDownControl_arrow_3f',
                        arrow__small: 'DropDownControl_arrow__small_11',
                        arrow__medium: 'DropDownControl_arrow__medium_ce',
                        alert: 'DropDownControl_alert_1c',
                        blink: 'DropDownControl_blink_e7',
                    };
                let se;
                !(function (u) {
                    ((u.Out = 'out'), (u.Over = 'over'), (u.Down = 'down'));
                })(se || (se = {}));
                const ie = (0, r.memo)(
                        ({
                            parentId: u,
                            variant: e = ue.Basic,
                            size: t = ee.Medium,
                            isOpen: o,
                            placeholder: a = R.strings.common.dropdown.placeholder.select(),
                            label: s = '',
                            classMix: i,
                            onClick: l,
                            soundHover: c,
                            soundClick: E,
                        }) => {
                            const d = (0, r.useState)(se.Out),
                                A = d[0],
                                F = d[1],
                                D = (0, r.useState)(!1),
                                _ = D[0],
                                m = D[1],
                                C = e === ue.Disabled,
                                B = C || e === ue.Basic,
                                g = (0, r.useCallback)(() => {
                                    C || (F(se.Over), c && (0, mu.G)(c));
                                }, [C, c]),
                                h = (0, r.useCallback)(() => {
                                    C || (F(se.Down), E && (0, mu.G)(E));
                                }, [C, E]),
                                b = (0, r.useCallback)(() => {
                                    (!C && F(se.Over), !B && m(!0));
                                }, [C, B]),
                                f = (0, r.useCallback)((u) => l && l(u), [l]),
                                p = (0, r.useCallback)(() => F(se.Out), []);
                            ((0, r.useEffect)(() => {
                                B || m(!1);
                            }, [e, B]),
                                (0, r.useEffect)(() => {
                                    C && p();
                                }, [C, p]));
                            const w = v()(
                                ae.base,
                                o && ae.base__open,
                                ae[`base__${A}`],
                                (B || !_) && ae[`base__${e}`],
                                i,
                            );
                            return n().createElement(
                                'div',
                                {
                                    id: u ? `${u}_control` : void 0,
                                    className: w,
                                    onMouseEnter: g,
                                    onMouseUp: b,
                                    onMouseDown: h,
                                    onMouseLeave: p,
                                    onClick: f,
                                },
                                !_ && e === ue.Alert && n().createElement('div', { className: ae.alert }),
                                n().createElement(
                                    'div',
                                    { className: v()(ae.label, ae[`label__${t}`], !s && ae.label__placeholder) },
                                    n().createElement(oe, { content: s || a }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: v()(ae.button, ae[`button__${t}`]) },
                                    n().createElement('div', { className: v()(ae.arrow, ae[`arrow__${t}`]) }),
                                    A === se.Over && n().createElement('div', { className: ae.gradient }),
                                    C && n().createElement('div', { className: ae.disabled }),
                                ),
                            );
                        },
                    ),
                    le = {
                        base: 'DropDownItem_base_41',
                        base__small: 'DropDownItem_base__small_78',
                        base__medium: 'DropDownItem_base__medium_09',
                        base__selected: 'DropDownItem_base__selected_ef',
                        base__disabled: 'DropDownItem_base__disabled_3c',
                    },
                    ce = ['size', 'classMix', 'onClick', 'itemRenderer'];
                const Ee = (0, r.memo)((u) => {
                        let e = u.size,
                            t = u.classMix,
                            o = u.onClick,
                            a = u.itemRenderer,
                            s = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var r in u)
                                    if ({}.hasOwnProperty.call(u, r)) {
                                        if (e.indexOf(r) >= 0) continue;
                                        t[r] = u[r];
                                    }
                                return t;
                            })(u, ce);
                        const i = s.id,
                            l = s.isSelected,
                            c = s.isDisabled,
                            E = s.label,
                            d = s.soundHover,
                            A = s.soundClick,
                            F = (0, r.useCallback)(
                                (u) => {
                                    c || (o && o(u, i));
                                },
                                [i, c, o],
                            ),
                            D = (0, r.useCallback)(() => {
                                c || (d && (0, mu.G)(d));
                            }, [c, d]),
                            _ = (0, r.useCallback)(() => {
                                c || (A && (0, mu.G)(A));
                            }, [c, A]),
                            m = v()(le.base, e && le[`base__${e}`], l && le.base__selected, c && le.base__disabled, t);
                        return n().createElement(
                            'div',
                            { className: m, onMouseEnter: D, onMouseDown: _, onClick: F },
                            a ? a(s) : E,
                        );
                    }),
                    de = { base__withScroll: 'DropDownItems_base__withScroll_01' };
                function Ae() {
                    return (
                        (Ae = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                  }
                                  return u;
                              }),
                        Ae.apply(null, arguments)
                    );
                }
                const Fe = ({
                        size: u,
                        items: e,
                        selectedIds: t,
                        selectedItemId: r,
                        selectedItemRef: o,
                        onClick: a,
                        parentId: s,
                        soundHover: i,
                        soundClick: l,
                        itemClassMix: c,
                        itemRenderer: E,
                        scrollbarActive: d,
                    }) =>
                        n().createElement(
                            'div',
                            { className: v()(de.base, d && de.base__withScroll) },
                            e.map((e) => {
                                const d = `${s}_${e.id}`;
                                return n().createElement(
                                    'div',
                                    { id: s ? d : void 0, key: d, ref: e.id === r ? o : null },
                                    n().createElement(
                                        Ee,
                                        Ae({ size: u, soundHover: i, soundClick: l, classMix: c, itemRenderer: E }, e, {
                                            onClick: a,
                                            isSelected: t.includes(e.id),
                                        }),
                                    ),
                                );
                            }),
                        ),
                    De = {
                        base: 'DropDownList_base_a3',
                        base__small: 'DropDownList_base__small_7a',
                        base__medium: 'DropDownList_base__medium_9a',
                        scrollMix: 'DropDownList_scrollMix_7a',
                    },
                    _e = ({
                        parentId: u,
                        size: e = ee.Medium,
                        items: t,
                        selectedIds: r,
                        classMix: o,
                        itemClassMix: a,
                        itemRenderer: s,
                        onClick: i,
                        soundHover: l,
                        soundClick: c,
                    }) => {
                        const E = u ? `${u}_list` : void 0;
                        return n().createElement(
                            'div',
                            { id: E, className: v()(De.base, De[`base__${e}`], o) },
                            n().createElement(Fe, {
                                parentId: u,
                                items: t,
                                size: e,
                                selectedIds: r,
                                onClick: i,
                                soundHover: l,
                                soundClick: c,
                                itemClassMix: a,
                                itemRenderer: s,
                            }),
                        );
                    },
                    me = {
                        base: 'PureDropDown_base_13',
                        base__small: 'PureDropDown_base__small_6d',
                        base__medium: 'PureDropDown_base__medium_45',
                        control__down: 'PureDropDown_control__down_e7',
                        list: 'PureDropDown_list_d1',
                        list__up: 'PureDropDown_list__up_a5',
                        list__down: 'PureDropDown_list__down_9f',
                        list__under: 'PureDropDown_list__under_60',
                        list__above: 'PureDropDown_list__above_27',
                    },
                    Ce = (0, r.memo)(
                        ({
                            componentId: u,
                            containerRef: e,
                            items: t,
                            selected: o = [],
                            variant: a = ue.Basic,
                            size: s = ee.Medium,
                            multiple: i = !1,
                            placeholder: l,
                            classMix: c,
                            itemRenderer: E,
                            controlRenderer: d,
                            listRenderer: A,
                            open: F,
                            tooltipArgs: D,
                            onChanges: _,
                            onOpen: m,
                            onClose: C,
                            onClick: B,
                            onClickOutside: g,
                            onMouseEnter: h,
                            onMouseDown: b,
                            onMouseUp: f,
                            onMouseLeave: p,
                            soundHover: w = 'highlight',
                            soundClick: y = 'play',
                            soundItemHover: R,
                            soundItemClick: x,
                        }) => {
                            const S = (0, r.useRef)(null),
                                T = (0, r.useRef)(null),
                                L = (0, r.useRef)({ open: !1, listAbove: !1 }),
                                O = (0, r.useState)(!1),
                                M = O[0],
                                k = O[1],
                                N = (0, r.useState)(!1),
                                P = N[0],
                                I = N[1],
                                W = ((u, e) => {
                                    const t = Array.isArray(u) ? u : [u];
                                    return !e && t.length > 1 ? t.slice(0, 1) : t;
                                })(o, i),
                                G = a !== ue.Disabled,
                                U = void 0 === F,
                                $ = Boolean(U ? M : F),
                                z = (0, r.useCallback)(() => {
                                    L.current.open && ((L.current.open = !1), k(!1), C && C());
                                }, [C]);
                            Du(Au.n.ESCAPE, z, $);
                            const j = (0, r.useCallback)(() => {
                                (g && g(), U && (k(!1), (L.current.open = !1), C && C()));
                            }, [g, C, U]);
                            ((0, r.useEffect)(() => {
                                const u = S.current;
                                if (u && $)
                                    return (
                                        H.c1.register(u, j),
                                        () => {
                                            H.c1.unregister(u, j);
                                        }
                                    );
                            }, [$, j]),
                                (0, r.useEffect)(() => {
                                    void 0 !== F && (L.current.open = F);
                                }, [F]));
                            const V = (0, r.useCallback)(() => {
                                if (!S.current || !T.current) return;
                                const u = e && e.current,
                                    t = u ? u.getBoundingClientRect().bottom : window.innerHeight,
                                    r =
                                        S.current.getBoundingClientRect().bottom +
                                            T.current.getBoundingClientRect().height >
                                        t;
                                r !== L.current.listAbove && ((L.current.listAbove = r), I(r));
                            }, [e]);
                            (0, r.useEffect)(() => Ju(V), [V, s, t.length]);
                            const Y = (0, r.useCallback)(
                                    (u) => {
                                        const e = W.findIndex((e) => e === u) > -1;
                                        let t = [];
                                        ((t = i ? (e ? W.filter((e) => e !== u) : [u, ...W]) : e ? [] : [u]),
                                            _ && _(t));
                                    },
                                    [i, _, W],
                                ),
                                K = (0, r.useCallback)(() => {
                                    U &&
                                        ((L.current.open = !L.current.open),
                                        k(L.current.open),
                                        L.current.open ? m && m() : C && C());
                                }, [U, m, C]),
                                q = (0, r.useCallback)(
                                    (u) => {
                                        (G && K(), B && B(u));
                                    },
                                    [G, B, K],
                                ),
                                X = (0, r.useCallback)(
                                    (u, e) => {
                                        (B && B(u, e), Y(e), !i && K());
                                    },
                                    [B, i, K, Y],
                                ),
                                Z = (0, r.useMemo)(
                                    () =>
                                        t
                                            .filter((u) => W.includes(u.id))
                                            .map((u) => u.label)
                                            .join(', '),
                                    [t, W],
                                ),
                                Q = {
                                    parentId: u,
                                    size: s,
                                    variant: a,
                                    isOpen: $,
                                    placeholder: l,
                                    label: Z,
                                    classMix: c && c.control,
                                    onClick: q,
                                    soundHover: w,
                                    soundClick: y,
                                },
                                J = {
                                    parentId: u,
                                    size: s,
                                    items: t,
                                    selectedIds: W,
                                    classMix: c && c.list,
                                    itemClassMix: c && c.item,
                                    itemRenderer: E,
                                    onClick: X,
                                    soundHover: R || w,
                                    soundClick: x || y,
                                };
                            return n().createElement(
                                'div',
                                {
                                    id: u,
                                    ref: S,
                                    className: v()(me.base, me[`base__${s}`], c && c.base),
                                    onMouseEnter: h,
                                    onMouseUp: f,
                                    onMouseDown: b,
                                    onMouseLeave: p,
                                },
                                n().createElement(
                                    'div',
                                    { className: v()(me.control, $ && me.control__down) },
                                    n().createElement(Qu, { tooltipArgs: D }, d ? d(Q) : n().createElement(ie, Q)),
                                ),
                                n().createElement(
                                    'div',
                                    {
                                        ref: T,
                                        className: v()(
                                            me.list,
                                            $ ? me.list__down : me.list__up,
                                            P ? me.list__above : me.list__under,
                                            c && c.listContainer,
                                        ),
                                    },
                                    A ? A(J) : n().createElement(_e, J),
                                ),
                            );
                        },
                    ),
                    Be = { gold: 'gold', integral: 'integral' },
                    ve = { [Be.gold]: H.B3.GOLD, [Be.integral]: H.B3.INTEGRAL };
                function ge(u, e = Be.integral) {
                    return H.Z5.getNumberFormat(u, ve[e]);
                }
                ge.type = Be;
                const he = { number: ge },
                    be = {
                        base: 'Resource_base_f1',
                        base__reverse: 'Resource_base__reverse_e4',
                        base__ny_crystal: 'Resource_base__ny_crystal_28',
                        base__ny_emerald: 'Resource_base__ny_emerald_55',
                        base__ny_amber: 'Resource_base__ny_amber_da',
                        base__ny_iron: 'Resource_base__ny_iron_99',
                        base__anyResource: 'Resource_base__anyResource_08',
                        valueWrapper: 'Resource_valueWrapper_64',
                        value: 'Resource_value_ac',
                        value__ghost: 'Resource_value__ghost_ba',
                        value__notEnough: 'Resource_value__notEnough_a5',
                        char__reduce: 'Resource_char__reduce_28',
                        icon: 'Resource_icon_76',
                        base__16: 'Resource_base__16_83',
                        base__20: 'Resource_base__20_d8',
                        base__24: 'Resource_base__24_a2',
                        base__28: 'Resource_base__28_7c',
                        base__32: 'Resource_base__32_a6',
                        base__40: 'Resource_base__40_1d',
                        base__48: 'Resource_base__48_9b',
                        iconEffect: 'Resource_iconEffect_a7',
                        iconEffect__reduce: 'Resource_iconEffect__reduce_9e',
                        base__reduce: 'Resource_base__reduce_be',
                        redResource: 'Resource_redResource_c9',
                        iconEffect__increase: 'Resource_iconEffect__increase_99',
                        base__increase: 'Resource_base__increase_18',
                        gainResource: 'Resource_gainResource_14',
                        increaseParticles: 'Resource_increaseParticles_05',
                        showParticles: 'Resource_showParticles_9d',
                    },
                    fe = (u, e) => {
                        let t;
                        const r = setTimeout(() => {
                            t = u();
                        }, e);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(r));
                        };
                    };
                var pe = t(8613);
                (Date.now(), pe.Ew.getRegionalDateTime, pe.Ew.getFormattedDateTime);
                const we = (u, e) => {
                    const t = (0, r.useRef)();
                    return (
                        (0, r.useEffect)(() => {
                            (e && !e(u)) || (t.current = u);
                        }, [e, u]),
                        t.current
                    );
                };
                H.Sw.instance;
                let ye;
                !(function (u) {
                    ((u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep'));
                })(ye || (ye = {}));
                H.Sw.instance;
                const Re = we;
                var xe = t(7030);
                const Se = { enter: 'translateY(100%)', reduce: 'translateY(-100%)', none: 'translateY(0%)' },
                    Te = { leave: 'translateY(0%)', reduce: 'translateY(0%)', none: 'translateY(-100%)' },
                    Le = ({ value: u, enterType: e, exitType: t }) => {
                        const r = n().useState(he.number(u)),
                            o = r[0],
                            a = r[1];
                        n().useEffect(() => {
                            'none' !== t && a('');
                        }, [t]);
                        const s = n().useMemo(() => o.split('').map((u) => ({ char: u, key: Symbol() })), [o]),
                            i = (0, xe.useTransition)(s, {
                                from: { transform: Se[e], opacity: 'none' === e ? 1 : 0 },
                                enter: { transform: 'translateY(0%)', opacity: 1 },
                                leave: { transform: Te[t], opacity: 0 },
                                keys: s.map((u) => u.key),
                                trail: 200,
                            });
                        return n().createElement(
                            n().Fragment,
                            null,
                            i((u, e) =>
                                n().createElement(
                                    xe.animated.div,
                                    { className: v()(be.char, be[`char__${t}`]), style: u },
                                    e.char,
                                ),
                            ),
                        );
                    };
                let Oe;
                !(function (u) {
                    ((u.s16 = '16'),
                        (u.s20 = '20'),
                        (u.s24 = '24'),
                        (u.s28 = '28'),
                        (u.s32 = '32'),
                        (u.s40 = '40'),
                        (u.s48 = '48'),
                        (u.Default = '24'));
                })(Oe || (Oe = {}));
                const Me = ({
                    type: u,
                    value: e = 0,
                    size: t = Oe.Default,
                    isReverse: r,
                    classNames: o,
                    className: a,
                }) => {
                    var s;
                    const i = n().useState(e),
                        l = i[0],
                        c = i[1],
                        E = n().useRef(null),
                        d = null != (s = Re(l)) ? s : l,
                        A = n().useMemo(() => Symbol(), [l]);
                    n().useEffect(() => {
                        const u = E.current;
                        if (u)
                            return (
                                u.classList.remove(be.base__reduce),
                                u.classList.remove(be.base__increase),
                                Ju(() =>
                                    d > e
                                        ? (u.classList.add(be.base__reduce),
                                          fe(() => {
                                              c(e);
                                          }, 50))
                                        : d < e
                                          ? (u.classList.add(be.base__increase),
                                            fe(() => {
                                                c(e);
                                            }, 200))
                                          : void 0,
                                )
                            );
                    }, [d, e]);
                    const F = (0, xe.useTransition)(l, {
                        from: { opacity: l === d ? 1 : 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        keys: () => A,
                        config: { duration: 1200 },
                    });
                    return n().createElement(
                        'div',
                        {
                            ref: E,
                            className: v()(
                                be.base,
                                be[`base__${u}`],
                                be[`base__${t}`],
                                r && be.base__reverse,
                                null == o ? void 0 : o.base,
                                a,
                            ),
                        },
                        n().createElement(
                            'div',
                            { className: v()(be.icon, null == o ? void 0 : o.icon) },
                            n().createElement('div', { className: v()(be.iconEffect, be.iconEffect__reduce) }),
                            n().createElement('div', { className: v()(be.iconEffect, be.iconEffect__increase) }),
                            n().createElement('div', { className: v()(be.increaseParticles) }),
                        ),
                        n().createElement(
                            'div',
                            { className: v()(be.value, null == o ? void 0 : o.value) },
                            F((u, e, t) =>
                                n().createElement(
                                    xe.animated.div,
                                    { className: be.valueWrapper, style: u },
                                    n().createElement(Le, { value: e, enterType: Ne(l, d), exitType: ke(l, e, t) }),
                                ),
                            ),
                            n().createElement('div', { className: be.value__ghost }, he.number(l)),
                        ),
                    );
                };
                function ke(u, e, t) {
                    return u === e || 'mount' === t.phase ? 'none' : e > u ? 'reduce' : 'leave';
                }
                function Ne(u, e) {
                    return u === e ? 'none' : e > u ? 'reduce' : 'enter';
                }
                const Pe = n().memo((u) => {
                        if (u.withAnimation) return n().createElement(Me, u);
                        const e = u.type,
                            t = u.size,
                            r = void 0 === t ? Oe.Default : t,
                            o = u.isReverse,
                            a = u.isNotEnough,
                            s = u.classNames,
                            i = u.className,
                            l = u.value,
                            c = u.isError,
                            E = void 0 !== c && c;
                        return n().createElement(
                            'div',
                            {
                                className: v()(
                                    be.base,
                                    be[`base__${e}`],
                                    be[`base__${r}`],
                                    o && be.base__reverse,
                                    null == s ? void 0 : s.base,
                                    i,
                                ),
                            },
                            n().createElement('div', { className: v()(be.icon, null == s ? void 0 : s.icon) }),
                            void 0 !== l &&
                                n().createElement(
                                    'div',
                                    {
                                        className: v()(
                                            be.value,
                                            a && be.value__notEnough,
                                            null == s ? void 0 : s.value,
                                        ),
                                    },
                                    u.additionalValue,
                                    E ? R.strings.ny.common.dashes() : he.number(l),
                                ),
                        );
                    }),
                    Ie = (0, r.createContext)({
                        setIsOpen: q,
                        selectedResourceType: $.Amber,
                        value: 0,
                        multiple: 1,
                        isEnough: !0,
                        hasDash: !1,
                        onChange: q,
                    }),
                    He = () => (0, r.useContext)(Ie);
                t(3368);
                function We(u, e, t, r) {
                    let n,
                        o = !1,
                        a = 0;
                    function s() {
                        n && clearTimeout(n);
                    }
                    function i(...i) {
                        const l = this,
                            c = Date.now() - a;
                        function E() {
                            ((a = Date.now()), t.apply(l, i));
                        }
                        o ||
                            (r && !n && E(),
                            s(),
                            void 0 === r && c > u
                                ? E()
                                : !0 !== e &&
                                  (n = setTimeout(
                                      r
                                          ? function () {
                                                n = void 0;
                                            }
                                          : E,
                                      void 0 === r ? u - c : u,
                                  )));
                    }
                    return (
                        'boolean' != typeof e && ((r = t), (t = e), (e = void 0)),
                        (i.cancel = function () {
                            (s(), (o = !0));
                        }),
                        i
                    );
                }
                function Ge(u, e, t, n = !1) {
                    const o = (0, r.useMemo)(
                        () =>
                            (function (u, e, t) {
                                return void 0 === t ? We(u, e, !1) : We(u, t, !1 !== e);
                            })(t, n, u),
                        e,
                    );
                    return ((0, r.useEffect)(() => o.cancel, [o]), o);
                }
                const Ue = {
                    base: 'ArrowButton_base_ed',
                    arrow: 'ArrowButton_arrow_38',
                    arrow__top: 'ArrowButton_arrow__top_cd',
                    resourceValue: 'ArrowButton_resourceValue_dc',
                };
                let $e;
                !(function (u) {
                    ((u.Top = 'top'), (u.Bottom = 'bottom'));
                })($e || ($e = {}));
                const ze = ({ onClick: u, onMouseEnter: e, onMouseDown: t, direction: r = $e.Bottom }) => {
                        const o = He().selectedResourceType,
                            a = w().mediaSize === b.ExtraSmall ? Oe.s24 : Oe.s28;
                        return n().createElement(
                            'div',
                            { className: Ue.base, onClick: u, onMouseEnter: e, onMouseDown: t },
                            n().createElement(Pe, { type: o, size: a, classNames: { value: Ue.resourceValue } }),
                            n().createElement('div', { className: v()(Ue.arrow, Ue[`arrow__${r}`]) }),
                        );
                    },
                    je = 'ResourcesControl_base_cd',
                    Ve = 'ResourcesControl_base__focused_52',
                    Ye = 'ResourcesControl_input_b1',
                    Ke = 'ResourcesControl_base__isEnough_ce',
                    qe = 'ResourcesControl_separator_28',
                    Xe = (u) => H.Z5.getNumberFormat(u, H.B3.INTEGRAL),
                    Ze = (u) => {
                        var e, t;
                        return null != (e = null == (t = Xe(u).match(/\D/g)) ? void 0 : t.length) ? e : 0;
                    },
                    Qe = ({ parentId: u, onClick: e, soundHover: t, soundClick: o }) => {
                        const a = He(),
                            s = a.setIsOpen,
                            i = a.value,
                            l = a.multiple,
                            c = a.isEnough,
                            E = a.hasDash,
                            d = a.onChange,
                            A = (0, r.useRef)(null),
                            F = (0, r.useState)(i),
                            D = F[0],
                            _ = F[1],
                            m = (0, r.useState)(!1),
                            C = m[0],
                            B = m[1];
                        (0, r.useEffect)(() => _(i), [i]);
                        const g = (u) => {
                                const e = Math.floor(u / l) * l;
                                return Math.max(l, e);
                            },
                            h = ((u, e = []) => {
                                const t = (0, r.useRef)(),
                                    n = (0, r.useCallback)((...e) => {
                                        (t.current && t.current(), (t.current = u(...e)));
                                    }, e);
                                return (
                                    (0, r.useEffect)(
                                        () => () => {
                                            t.current && t.current();
                                        },
                                        [n],
                                    ),
                                    n
                                );
                            })(
                                (u, e) => {
                                    var t, r, n, o, a, s;
                                    let i =
                                        null !=
                                        (t = null != u ? u : null == (r = A.current) ? void 0 : r.selectionStart)
                                            ? t
                                            : 0;
                                    const l = null != (n = null == (o = A.current) ? void 0 : o.selectionStart) ? n : 0,
                                        c = null != (a = null == (s = A.current) ? void 0 : s.selectionEnd) ? a : 0;
                                    if (e && !(l !== c)) {
                                        const u = Ze(e) - Ze(D);
                                        0 !== i && (i += u);
                                    }
                                    return fe(() => {
                                        var u;
                                        return null == (u = A.current) ? void 0 : u.setSelectionRange(i, i);
                                    }, 0);
                                },
                                [D],
                            ),
                            b = Ge(
                                (u) => {
                                    const e = g(u);
                                    (d(e), _(e));
                                },
                                [],
                                1e3,
                            ),
                            f = (u = 0) => {
                                var e, t;
                                const r = u === Au.n.BACKSPACE,
                                    n = u === Au.n.DELETE,
                                    o = A.current;
                                if (!o) return;
                                const a = o.value,
                                    s = null != (e = o.selectionStart) ? e : 0,
                                    i = null != (t = o.selectionEnd) ? t : 0;
                                let l = Math.max(s, i),
                                    c = a;
                                (n && ((c = c.slice(0, l + 1) + c.slice(l + 2)), l++),
                                    r && ((c = c.slice(0, l - 2) + c.slice(l - 1)), l--));
                                const E = Number(c.trim().replace(/\D/g, ''));
                                (p(E), h(l, E));
                            },
                            p = (u) => {
                                (_(u), b(u));
                            },
                            w = !C && E ? R.strings.common.common.dash() : D > 0 ? Xe(D) : '';
                        return n().createElement(
                            'div',
                            { id: `${u}_control`, className: v()(je, C && Ve, c && Ke) },
                            n().createElement('input', {
                                ref: A,
                                className: Ye,
                                type: 'text',
                                value: w,
                                onChange: () => f(),
                                onWheel: (u) => {
                                    if (!C) return;
                                    const e = u.deltaY < 0 ? D - l : D + l;
                                    p(Math.max(l, e));
                                },
                                onBlur: () => {
                                    if ((B(!1), E && 0 === D)) _(i);
                                    else {
                                        const u = g(D);
                                        (_(u), d(u));
                                    }
                                },
                                onFocus: () => {
                                    (B(!0), (D === l || E) && _(0));
                                },
                                maxLength: 17,
                                onClick: () => s(!1),
                                onKeyPress: (u) => {
                                    u.key.match(/\d/g) || u.preventDefault();
                                },
                                onKeyDown: (u) => {
                                    switch (u.keyCode) {
                                        case Au.n.ARROW_UP:
                                        case Au.n.NUM_PLUS:
                                        case Au.n.PLUS:
                                            p(D + l);
                                            break;
                                        case Au.n.ARROW_DOWN:
                                        case Au.n.NUM_MINUS:
                                        case Au.n.MINUS:
                                            p(Math.max(l, D - l));
                                            break;
                                        case Au.n.BACKSPACE:
                                        case Au.n.DELETE:
                                            ((u) => {
                                                const e = u.keyCode,
                                                    t = u.target,
                                                    r = t.selectionStart,
                                                    n = t.selectionEnd,
                                                    o = t.value,
                                                    a = null != r ? r : 0,
                                                    s = null != n ? n : 0,
                                                    i = e === Au.n.BACKSPACE;
                                                if (a !== s) {
                                                    const e = A.current;
                                                    if (e) {
                                                        const t = e.value,
                                                            r = t.substring(0, a) + t.substring(s),
                                                            n = Number(r.trim().replace(/\D/g, ''));
                                                        (p(n), h(a, n), u.preventDefault());
                                                    }
                                                } else {
                                                    const t = /\D/,
                                                        r = i ? Math.max(a - 1, 0) : a || 0;
                                                    t.test(o[r]) && (u.preventDefault(), f(e));
                                                }
                                            })(u);
                                    }
                                },
                            }),
                            n().createElement('div', { className: qe }),
                            n().createElement(ze, {
                                onClick: e,
                                onMouseEnter: () => {
                                    t && (0, mu.G)(t);
                                },
                                onMouseDown: () => {
                                    o && (0, mu.G)(o);
                                },
                            }),
                        );
                    },
                    Je = 'ResourcesDropDown_base_6b',
                    ut = 'ResourcesDropDown_dropDown_dd',
                    et = 'ResourcesDropDown_control_a0',
                    tt = 'ResourcesDropDown_list_ff',
                    rt = {
                        base: 'ResourcesItem_base_fa',
                        base__normal: 'ResourcesItem_base__normal_9a',
                        base__active: 'ResourcesItem_base__active_6d',
                        base__disabled: 'ResourcesItem_base__disabled_e4',
                        resource: 'ResourcesItem_resource_36',
                        resourceValue: 'ResourcesItem_resourceValue_b2',
                        label: 'ResourcesItem_label_a9',
                    };
                let nt;
                !(function (u) {
                    ((u.Normal = 'normal'), (u.Active = 'active'), (u.Disabled = 'disabled'));
                })(nt || (nt = {}));
                const ot = ({ id: u, state: e, label: t, disabledTooltipText: r, onClick: o, soundClick: a }) => {
                        const s = w().mediaSize === b.ExtraSmall ? Oe.s24 : Oe.s28;
                        return n().createElement(
                            ku.i,
                            { body: r, isEnabled: e === nt.Disabled },
                            n().createElement(
                                'div',
                                {
                                    className: v()(rt.base, rt[`base__${e}`]),
                                    onClick: (t) => {
                                        e === nt.Normal && (a && (0, mu.G)(a), o && o(t, u));
                                    },
                                },
                                n().createElement(Pe, {
                                    type: u,
                                    size: s,
                                    classNames: { base: rt.resource, value: rt.resourceValue },
                                }),
                                n().createElement('div', { className: rt.label }, t),
                            ),
                        );
                    },
                    at = 'ResourcesList_base_50',
                    st = 'ResourcesList_background_d4',
                    it = 'ResourcesList_arrowButton_65',
                    lt = 'ResourcesList_separator_40',
                    ct = ({ parentId: u, items: e, selectedIds: t, onClick: o, soundClick: a }) =>
                        n().createElement(
                            'div',
                            { id: `${u}_list`, className: at },
                            n().createElement(
                                'div',
                                { className: st },
                                n().createElement(
                                    'div',
                                    { className: it },
                                    n().createElement(ze, { direction: $e.Top }),
                                ),
                            ),
                            e.map((e, s) => {
                                var i, l, c;
                                return n().createElement(
                                    r.Fragment,
                                    { key: e.id },
                                    s > 0 && n().createElement('div', { className: lt }),
                                    n().createElement(
                                        'div',
                                        { id: `${u}_${e.id}` },
                                        n().createElement(ot, {
                                            id: e.id,
                                            label: e.label,
                                            disabledTooltipText: null == (i = e.meta) ? void 0 : i.disabledTooltipText,
                                            onClick: o,
                                            soundClick: a,
                                            state:
                                                ((l = e.isDisabled),
                                                (c = t.includes(e.id)),
                                                l ? nt.Disabled : c ? nt.Active : nt.Normal),
                                        }),
                                    ),
                                );
                            }),
                        ),
                    Et = { base: ut, control: et, listContainer: tt },
                    dt = (0, W.Pi)(
                        ({
                            componentId: u,
                            className: e,
                            value: t,
                            multiple: o = 1,
                            isEnough: a = !0,
                            hasDash: s = !1,
                            onChange: i,
                            items: l,
                            selectedResourceType: c,
                            onChangeResource: E,
                        }) => {
                            const d = (0, r.useState)(!1),
                                A = d[0],
                                F = d[1],
                                D = (0, r.useCallback)(
                                    (u) => {
                                        var e;
                                        const t = null == (e = l.find((e) => e.id === u[0])) ? void 0 : e.id;
                                        t && (E(t), F(!1));
                                    },
                                    [E, l],
                                ),
                                _ = Vu(() => F((u) => !u)),
                                m = Vu(() => F(!1)),
                                C = (0, r.useMemo)(
                                    () => ({
                                        setIsOpen: F,
                                        selectedResourceType: c,
                                        value: t,
                                        multiple: o,
                                        isEnough: a,
                                        hasDash: s,
                                        onChange: i,
                                    }),
                                    [c, t, o, a, s, i],
                                );
                            return n().createElement(
                                'div',
                                { className: v()(Je, e) },
                                n().createElement(
                                    Ie.Provider,
                                    { value: C },
                                    n().createElement(Ce, {
                                        componentId: u,
                                        items: l,
                                        selected: c,
                                        open: A,
                                        onChanges: D,
                                        onClick: _,
                                        onClickOutside: m,
                                        onClose: m,
                                        controlRenderer: Qe,
                                        listRenderer: ct,
                                        soundItemClick: 'yes1',
                                        classMix: Et,
                                    }),
                                ),
                            );
                        },
                    ),
                    At = 'Subtitle_base_76',
                    Ft = 'Subtitle_text_7f',
                    Dt = 'Subtitle_info_ef',
                    _t = ({ text: u, tooltipType: e, className: t }) =>
                        n().createElement(
                            'div',
                            { className: v()(At, t) },
                            n().createElement(
                                Yu.u,
                                {
                                    contentId: R.views.lobby.new_year.tooltips.NyResourceConverterInfoTooltip('resId'),
                                    args: { tooltipType: e },
                                },
                                n().createElement('div', { className: Dt }),
                            ),
                            n().createElement('div', { className: Ft }, u),
                        ),
                    mt = R.strings.ny.resourcesConvertPopover,
                    Ct = (0, W.Pi)(() => {
                        const u = lu(),
                            e = u.model,
                            t = u.controls,
                            r = t.convert,
                            o = t.changeFromResourceType,
                            a = t.changeToResourceType,
                            s = t.changeFromResourceValue,
                            i = t.changeToResourceValue,
                            l = e.computes,
                            c = l.getIsEnough,
                            E = l.getFromDropDownItems,
                            d = l.getToDropDownItems,
                            A = e.convertRate.get(),
                            F = e.fromResource.get(),
                            D = e.toResource.get();
                        return n().createElement(
                            'div',
                            { className: Pu },
                            n().createElement(_t, { className: Iu, text: mt.subTitleFrom(), tooltipType: Nu.From }),
                            n().createElement(dt, {
                                componentId: 'resource-from',
                                className: Hu,
                                value: F.value,
                                multiple: A.from,
                                isEnough: c(),
                                onChange: s,
                                items: E(),
                                selectedResourceType: F.type,
                                onChangeResource: o,
                            }),
                            n().createElement(_t, { className: Iu, text: mt.subTitleTo(), tooltipType: Nu.To }),
                            n().createElement(dt, {
                                componentId: 'resource-to',
                                className: Hu,
                                value: D.value,
                                multiple: A.to,
                                hasDash: !c(),
                                onChange: i,
                                items: d(),
                                selectedResourceType: D.type,
                                onChangeResource: a,
                            }),
                            n().createElement(
                                'div',
                                { className: Wu },
                                n().createElement('div', { className: Gu }),
                                n().createElement(Mu, {
                                    text: mt.convertRate(),
                                    binding: { from: A.from, to: A.to },
                                    classMix: Uu,
                                }),
                                n().createElement('div', { className: Gu }),
                            ),
                            n().createElement(
                                'div',
                                { className: $u },
                                n().createElement(
                                    ku.i,
                                    { body: mt.button.disabledTooltip(), isEnabled: !c() },
                                    n().createElement(
                                        'div',
                                        { className: zu },
                                        n().createElement(
                                            hu,
                                            { size: vu.medium, type: Bu.primary, onClick: r, disabled: !c() },
                                            mt.button.convert(),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Bt = 'NoResources_base_2a',
                    vt = 'NoResources_alertIcon_bf',
                    gt = 'NoResources_title_fd',
                    ht = 'NoResources_description_61',
                    bt = 'NoResources_button_fa',
                    ft = 'NoResources_holder_26',
                    pt = 'NoResources_holder__external_75',
                    wt = 'NoResources_externalLinkIcon_40',
                    yt = R.strings.ny.resourcesConvertPopover.noResources,
                    Rt = () => {
                        const u = lu(),
                            e = u.controls,
                            t = u.model.root.get(),
                            r = t.isExternal,
                            o = t.isBoxesAvailable,
                            a = e.goToRewardKits,
                            s = e.goToQuests;
                        return n().createElement(
                            'div',
                            { className: Bt },
                            n().createElement('div', { className: vt }),
                            n().createElement('div', { className: gt }, yt.title()),
                            n().createElement('div', { className: ht }, yt.description()),
                            n().createElement(
                                'div',
                                null,
                                n().createElement(
                                    hu,
                                    { size: vu.medium, type: Bu.ghost, onClick: s, mixClass: bt },
                                    yt.button.goToQuests(),
                                ),
                                n().createElement(
                                    hu,
                                    { size: vu.medium, type: Bu.ghost, onClick: a, disabled: !o, mixClass: bt },
                                    n().createElement(
                                        'div',
                                        { className: v()(ft, r && pt) },
                                        yt.button.goToBoxes(),
                                        r && n().createElement('div', { className: wt }),
                                    ),
                                ),
                            ),
                        );
                    },
                    xt = 'Content_base_fa',
                    St = 'Content_title_88',
                    Tt = 'Content_separator_7e',
                    Lt = R.strings.ny.resourcesConvertPopover,
                    Ot = (0, W.Pi)(() => {
                        const u = lu().model;
                        return (
                            _u(),
                            (0, r.useEffect)(() => {
                                (0, mu.G)(R.sounds.gui_hangar_hover());
                            }, []),
                            n().createElement(
                                'div',
                                { className: xt },
                                n().createElement('div', { className: St }, Lt.title()),
                                n().createElement('div', { className: Tt }),
                                u.computes.getIsNoResources()
                                    ? n().createElement(Rt, null)
                                    : n().createElement(Ct, null),
                            )
                        );
                    }),
                    Mt = (0, W.Pi)(() => {
                        const u = lu().model,
                            e = u.root.get().isFriendHangar,
                            t = u.computes.getIsNoResources(),
                            o = (0, r.useRef)(null),
                            s = ((u, e) => (!e && u <= b.Small ? 35 : 5))(w().mediaSize, e),
                            i = { right: s, top: 67, bottom: 65, left: 65 };
                        return (
                            (0, I.b)(() => {
                                const u = t ? Object.assign({}, i, { bottom: 0 }) : i;
                                a.O.view.setSidePaddingsRem(u);
                            }),
                            a.O.view.events.onFocusUpdated(() => {
                                a.O.view.isFocused() || (0, H.SW)();
                            }),
                            n().createElement(
                                G.t,
                                {
                                    ref: o,
                                    arrowPosition: null,
                                    offsetSizes: i,
                                    classNames: { arrow: v()(cu, e && Eu), closeBtn: du },
                                },
                                n().createElement(Ot, null),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    P().render(
                        n().createElement(k, null, n().createElement(iu, null, n().createElement(Mt, null))),
                        document.getElementById('root'),
                    );
                });
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
        (__webpack_require__.O = (u, e, t, r) => {
            if (!e) {
                var n = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [e, t, r] = deferred[i], o = !0, a = 0; a < e.length; a++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[a]))
                            ? e.splice(a--, 1)
                            : ((o = !1), r < n && (n = r));
                    if (o) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (u = s);
                    }
                }
                return u;
            }
            r = r || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > r; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [e, t, r];
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
        (__webpack_require__.j = 4731),
        (() => {
            var u = { 4731: 0, 6818: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        n,
                        [o, a, s] = t,
                        i = 0;
                    if (o.some((e) => 0 !== u[e])) {
                        for (r in a) __webpack_require__.o(a, r) && (__webpack_require__.m[r] = a[r]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (e && e(t); i < o.length; i++)
                        ((n = o[i]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [8360], () => __webpack_require__(7787));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
