(() => {
    var __webpack_modules__ = {
            2372: (e, t, a) => {
                'use strict';
                a.d(t, { A: () => o });
                var u = a(6179),
                    r = a.n(u),
                    n = a(4179);
                class o extends r().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = n.B3.GOLD;
                        else e = n.B3.INTEGRAL;
                        const t = n.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                o.defaultProps = { format: 'integral' };
            },
            280: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => l });
                var u = a(6179),
                    r = a.n(u),
                    n = a(6483),
                    o = a.n(n),
                    s = a(3649),
                    i = a(5287);
                const l = ({ binding: e, text: t = '', classMix: a, alignment: n = s.v2.left }) =>
                    null === t
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : r().createElement(
                              u.Fragment,
                              null,
                              t.split('\n').map((t, l) =>
                                  r().createElement(
                                      'div',
                                      { className: o()(i.Z.base, a), key: `${t}-${l}` },
                                      (0, s.Uw)(t, n, e).map((e, t) =>
                                          r().createElement(u.Fragment, { key: `${t}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            6373: (e, t, a) => {
                'use strict';
                a.d(t, { i: () => l });
                var u = a(2056),
                    r = a(6179),
                    n = a.n(r);
                const o = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            a = e.body,
                            l = e.header,
                            c = e.note,
                            _ = e.alert,
                            d = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) ((a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                return r;
                            })(e, o);
                        const E = (0, r.useMemo)(() => {
                            const e = Object.assign({}, d, { body: a, header: l, note: c, alert: _ });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [_, a, l, c, d]);
                        return n().createElement(
                            u.u,
                            s(
                                {
                                    contentId:
                                        ((g = null == d ? void 0 : d.hasHtmlContent),
                                        g ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                m,
                            ),
                            t,
                        );
                        var g;
                    };
            },
            2056: (e, t, a) => {
                'use strict';
                a.d(t, { u: () => l });
                var u = a(7902),
                    r = a(4179),
                    n = a(6179);
                const o = [
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
                        const a = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                a.number = t;
                                break;
                            case 'boolean':
                                a.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                a.string = t.toString();
                        }
                        return a;
                    });
                }
                const i = (e, t, a = {}, u = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: u,
                                },
                                a,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            r = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onClick,
                            m = e.ignoreShowDelay,
                            E = void 0 !== m && m,
                            g = e.ignoreMouseClick,
                            p = void 0 !== g && g,
                            A = e.decoratorId,
                            b = void 0 === A ? 0 : A,
                            C = e.isEnabled,
                            h = void 0 === C || C,
                            v = e.targetId,
                            D = void 0 === v ? 0 : v,
                            f = e.onShow,
                            B = e.onHide,
                            F = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) ((a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                return r;
                            })(e, o);
                        const w = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, n.useMemo)(() => D || (0, u.F)().resId, [D]),
                            P = (0, n.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (i(a, b, { isMouseEvent: !0, on: !0, arguments: s(r) }, S),
                                    f && f(),
                                    (w.current.isVisible = !0));
                            }, [a, b, r, S, f]),
                            y = (0, n.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        i(a, b, { on: !1 }, S),
                                        w.current.isVisible && B && B(),
                                        (w.current.isVisible = !1));
                                }
                            }, [a, b, S, B]),
                            k = (0, n.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', k, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', k, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === h && y();
                            }, [h, y]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        (window.removeEventListener('mouseleave', y), y());
                                    }
                                ),
                                [y],
                            ));
                        return h
                            ? (0, n.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(P, E ? 100 : 400)),
                                                      l && l(e),
                                                      x && x(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (y(), null == c || c(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === p && y(), null == d || d(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === p && y(), null == _ || _(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      F,
                                  ),
                              )
                            : t;
                        var x;
                    };
            },
            926: (e) => {
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
            3532: (e) => {
                e.exports = {
                    BLACK_REAL: '#000000',
                    WHITE_REAL: '#FFFFFF',
                    WHITE: '#F2F2F7',
                    WHITE_ORANGE: '#FEFEEC',
                    WHITE_SPANISH: '#E9E2BF',
                    PAR: '#8C8C7E',
                    PAR_SECONDARY: '#595950',
                    PAR_TERTIARY: '#37362E',
                    INFO_RED: '#FF0000',
                    RED: '#FF2717',
                    RED_DARK: '#B70000',
                    YELLOW: '#FEAB34',
                    ORANGE: '#EE7000',
                    CREAM: '#FFDD99',
                    BROWN: '#CBAC77',
                    GREEN_BRIGHT: '#80D43A',
                    GREEN: '#7AB300',
                    GREEN_DARK: '#497212',
                    BLUE_BOOSTER: '#CCFFFF',
                    BLUE_TEAMKILLER: '#09E2FF',
                    CRED: '#CED9D9',
                    GOLD: '#FFC363',
                    BOND: '#C9C9B6',
                    PROM: '#A29B70',
                };
            },
            9887: (e) => {
                e.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
                };
            },
            527: (e, t, a) => {
                'use strict';
                (a.r(t), a.d(t, { mouse: () => s, onResize: () => n }));
                var u = a(2472),
                    r = a(1176);
                const n = (0, u.E)('clientResized'),
                    o = { down: (0, u.E)('mousedown'), up: (0, u.E)('mouseup'), move: (0, u.E)('mousemove') };
                const s = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function u() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', a))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', a))
                            : (0, r.R)(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const n = `mouse${t}`,
                                        s = o[t]((e) => a([e, 'outside']));
                                    function i(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, i),
                                        u(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(n, i),
                                                (e.listeners -= 1),
                                                u(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(a)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            ((e.enabled = !1), u());
                        },
                        enable() {
                            ((e.enabled = !0), u());
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
            5959: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, {
                        events: () => u,
                        getMouseGlobalPosition: () => n,
                        getSize: () => r,
                        graphicsQuality: () => o,
                    }));
                var u = a(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, a) => {
                'use strict';
                function u(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => u });
            },
            2472: (e, t, a) => {
                'use strict';
                function u(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => u });
            },
            3138: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => r });
                var u = a(5959);
                const r = { view: a(7641), client: u };
            },
            3722: (e, t, a) => {
                'use strict';
                function u(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function r(e, t, a) {
                    return `url(${u(e, t, a)})`;
                }
                (a.r(t), a.d(t, { getBgUrl: () => r, getTextureUrl: () => u }));
            },
            6112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => u });
                const u = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => r });
                var u = a(2472);
                const r = {
                    onTextureFrozen: (0, u.E)('self.onTextureFrozen'),
                    onTextureReady: (0, u.E)('self.onTextureReady'),
                    onDomBuilt: (0, u.E)('self.onDomBuilt'),
                    onLoaded: (0, u.E)('self.onLoaded'),
                    onDisplayChanged: (0, u.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, u.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, u.E)('children.onAdded'),
                        onLoaded: (0, u.E)('children.onLoaded'),
                        onRemoved: (0, u.E)('children.onRemoved'),
                        onAttached: (0, u.E)('children.onAttached'),
                        onTextureReady: (0, u.E)('children.onTextureReady'),
                        onRequestPosition: (0, u.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => u,
                        displayStatus: () => r.W,
                        displayStatusIs: () => F,
                        events: () => n.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => B,
                        getScale: () => p,
                        getSize: () => d,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => D,
                        isFocused: () => h,
                        pxToRem: () => A,
                        remToPx: () => b,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => S,
                    }));
                var u = a(3722),
                    r = a(6112),
                    n = a(6538),
                    o = a(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, a, u = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, u);
                }
                function c(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function A(e) {
                    return viewEnv.pxToRem(e);
                }
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function D() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function B() {
                    return viewEnv.getShowingStatus();
                }
                const F = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    w = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => l });
                const u = ['args'];
                const r = 2,
                    n = 16,
                    o = 32,
                    s = 64,
                    i = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        u,
                                        r = {},
                                        n = Object.keys(e);
                                    for (u = 0; u < n.length; u++) ((a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                    return r;
                                })(t, u);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, o, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, t]) => {
                                                  const a = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: a, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: a, name: e, bool: t };
                                                      default:
                                                          return { __Type: a, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            i('popover' === e ? r : o);
                        },
                        minimize() {
                            i(s);
                        },
                        move(e) {
                            i(n, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            7902: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => u });
                const u = (e = 1) => {
                    const t = new Error().stack;
                    let a,
                        u = R.invalid('resId');
                    return (
                        t &&
                            ((a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== a &&
                                window.subViews[a] &&
                                (u = window.subViews[a].id)),
                        { caller: a, stack: t, resId: u }
                    );
                };
            },
            5521: (e, t, a) => {
                'use strict';
                let u, r;
                (a.d(t, { n: () => u }),
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
                    })(u || (u = {})),
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
            7727: (e, t, a) => {
                'use strict';
                function u(e) {
                    engine.call('PlaySound', e);
                }
                a.d(t, { $: () => r, G: () => u });
                const r = {
                    playHighlight() {
                        u('highlight');
                    },
                    playClick() {
                        u('play');
                    },
                    playYes() {
                        u('yes1');
                    },
                };
            },
            3649: (e, t, a) => {
                'use strict';
                let u;
                function r(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const a = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(a, -a)]);
                    });
                }
                function n(e) {
                    return e.replace(/-/g, '_');
                }
                function o(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                (a.d(t, { BN: () => n, Uw: () => m, e: () => o, uF: () => r, v2: () => u }),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(u || (u = {})));
                const s = (e, t, a) => {
                        if (a % 2) {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                        return [...e, t];
                    },
                    i = (e, t, a) => {
                        if (0 === a) return [t];
                        if (a % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                    },
                    l = (e, t, a = u.left) => e.split(t).reduce(a === u.left ? s : i, []),
                    c = (() => {
                        const e = new RegExp(
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
                        return (t) =>
                            t
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    _ = ['zh_cn', 'zh_sg', 'zh_tw'],
                    d = (e, t = u.left) => {
                        const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return _.includes(a)
                            ? c(e)
                            : ((e, t = u.left) => {
                                  let a = [];
                                  const r =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      n = e.replace(/&nbsp;/g, ' ');
                                  return (l(n, /( )/, t).forEach((e) => (a = a.concat(l(e, r, u.left)))), a);
                              })(e, t);
                    },
                    m = (e, t, a) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (a && e in a ? a[e] : d(e, t)));
            },
            1358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                var u = a(3138);
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
                    addCallback(e, t, a = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = u.O.view.addModelObserver(e, a, r);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(n) : (this._views[a] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
                        );
                    }
                    removeCallback(e, t = 0) {
                        let a = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((a = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            a || console.error("Can't remove callback by id:", e),
                            a
                        );
                    }
                    _emmitDataChanged(e, t, a) {
                        a.forEach((a) => {
                            const u = this._callbacks[a];
                            void 0 !== u && u(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const n = r;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
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
            4179: (e, t, a) => {
                'use strict';
                a.d(t, { Sw: () => n.Z, B3: () => l, Z5: () => o, B0: () => i, ry: () => b, Eu: () => C });
                class u {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let u = e.target;
                                    do {
                                        if (u === t) return;
                                        u = u.parentNode;
                                    } while (u);
                                    a();
                                });
                            }));
                    }
                    static get instance() {
                        return (u.__instance || (u.__instance = new u()), u.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const a = e,
                            u = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== u)),
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
                u.__instance = void 0;
                const r = u;
                var n = a(1358);
                const o = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
                    };
                let i;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(i || (i = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = a(5521),
                    E = a(3138);
                const g = ['args'];
                function p(e, t, a, u, r, n, o) {
                    try {
                        var s = e[n](o),
                            i = s.value;
                    } catch (e) {
                        return void a(e);
                    }
                    s.done ? t(i) : Promise.resolve(i).then(u, r);
                }
                const A = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        a = arguments;
                                    return new Promise(function (u, r) {
                                        var n = e.apply(t, a);
                                        function o(e) {
                                            p(n, u, r, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            p(n, u, r, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    C = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    h = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        u,
                                        r = {},
                                        n = Object.keys(e);
                                    for (u = 0; u < n.length; u++) ((a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                    return r;
                                })(t, g);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, n, {
                                          arguments:
                                              ((u = r),
                                              Object.entries(u).map(([e, t]) => {
                                                  const a = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          a.number = t;
                                                          break;
                                                      case 'boolean':
                                                          a.bool = t;
                                                          break;
                                                      default:
                                                          a.string = t.toString();
                                                  }
                                                  return a;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var u;
                    },
                    v = () => h(i.CLOSE),
                    D = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var f = a(7572);
                const B = r.instance,
                    F = {
                        DataTracker: n.Z,
                        ViewModel: f.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: _,
                        DateFormatType: d,
                        makeGlobalBoundingBox: A,
                        sendMoveEvent: (e) => h(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: () => h(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            h(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, u, r = R.invalid('resId'), n) => {
                            const o = E.O.view.getViewGlobalPosition(),
                                s = a.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                _ = s.width,
                                d = s.height,
                                m = {
                                    x: E.O.view.pxToRem(l) + o.x,
                                    y: E.O.view.pxToRem(c) + o.y,
                                    width: E.O.view.pxToRem(_),
                                    height: E.O.view.pxToRem(d),
                                };
                            h(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: u || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: A(m),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => D(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            D(e, v);
                        },
                        handleViewEvent: h,
                        onBindingsReady: b,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(t) {
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const u in t)
                                if (Object.prototype.hasOwnProperty.call(t, u)) {
                                    const r = Object.prototype.toString.call(t[u]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[u];
                                        a[u] = [];
                                        for (let t = 0; t < r.length; t++) a[u].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[u] = e(t[u]))
                                            : (a[u] = t[u]);
                                }
                            return a;
                        },
                        ClickOutsideManager: B,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = F;
            },
            8787: (e, t, a) => {
                'use strict';
                var u = {};
                (a.r(u),
                    a.d(u, {
                        Area: () => Tr,
                        Bar: () => Nr,
                        DefaultScroll: () => Lr,
                        Direction: () => pr,
                        defaultSettings: () => Ar,
                        useHorizontalScrollApi: () => Cr,
                    }));
                var r = {};
                (a.r(r), a.d(r, { Area: () => Jr, Bar: () => Kr, Default: () => Qr, useVerticalScrollApi: () => Mr }));
                var n = a(6179),
                    o = a.n(n);
                const s = (e, t, a) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && a.extraLarge) ||
                          (t.largeHeight && a.large) ||
                          (t.mediumHeight && a.medium) ||
                          (t.smallHeight && a.small) ||
                          (t.extraSmallHeight && a.extraSmall)
                            ? e
                            : null
                        : e;
                var i = a(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function _(e, t, a) {
                    const u = (function (e, t) {
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
                        })(e, a),
                        r = (function (e, t) {
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
                        })(t, a),
                        n = Math.min(u, r);
                    return {
                        extraLarge: n === a.extraLarge.weight,
                        large: n === a.large.weight,
                        medium: n === a.medium.weight,
                        small: n === a.small.weight,
                        extraSmall: n === a.extraSmall.weight,
                        extraLargeWidth: u === a.extraLarge.weight,
                        largeWidth: u === a.large.weight,
                        mediumWidth: u === a.medium.weight,
                        smallWidth: u === a.small.weight,
                        extraSmallWidth: u === a.extraSmall.weight,
                        extraLargeHeight: r === a.extraLarge.weight,
                        largeHeight: r === a.large.weight,
                        mediumHeight: r === a.medium.weight,
                        smallHeight: r === a.small.weight,
                        extraSmallHeight: r === a.extraSmall.weight,
                    };
                }
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
                })(c || (c = {}));
                const d = i.O.client.getSize('rem'),
                    m = d.width,
                    E = d.height,
                    g = Object.assign({ width: m, height: E }, _(m, E, l)),
                    p = (0, n.createContext)(g),
                    A = ['children'];
                const b = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                r = {},
                                n = Object.keys(e);
                            for (u = 0; u < n.length; u++) ((a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                            return r;
                        })(e, A);
                    const u = (0, n.useContext)(p),
                        r = u.extraLarge,
                        o = u.large,
                        i = u.medium,
                        l = u.small,
                        c = u.extraSmall,
                        _ = u.extraLargeWidth,
                        d = u.largeWidth,
                        m = u.mediumWidth,
                        E = u.smallWidth,
                        g = u.extraSmallWidth,
                        b = u.extraLargeHeight,
                        C = u.largeHeight,
                        h = u.mediumHeight,
                        v = u.smallHeight,
                        D = u.extraSmallHeight,
                        f = { extraLarge: b, large: C, medium: h, small: v, extraSmall: D };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && r) return t;
                        if (a.large && o) return t;
                        if (a.medium && i) return t;
                        if (a.small && l) return t;
                        if (a.extraSmall && c) return t;
                    } else {
                        if (a.extraLargeWidth && _) return s(t, a, f);
                        if (a.largeWidth && d) return s(t, a, f);
                        if (a.mediumWidth && m) return s(t, a, f);
                        if (a.smallWidth && E) return s(t, a, f);
                        if (a.extraSmallWidth && g) return s(t, a, f);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && b) return t;
                            if (a.largeHeight && C) return t;
                            if (a.mediumHeight && h) return t;
                            if (a.smallHeight && v) return t;
                            if (a.extraSmallHeight && D) return t;
                        }
                    }
                    return null;
                };
                b.defaultProps = {
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
                (0, n.memo)(b);
                const C = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    h = (0, n.memo)(({ children: e }) => {
                        const t = (0, n.useContext)(p),
                            a = (0, n.useState)(t),
                            u = a[0],
                            r = a[1],
                            s = (0, n.useCallback)((e, t) => {
                                const a = i.O.view.pxToRem(e),
                                    u = i.O.view.pxToRem(t);
                                r(Object.assign({ width: a, height: u }, _(a, u, l)));
                            }, []);
                        (C(() => {
                            engine.on('clientResized', s);
                        }),
                            (0, n.useEffect)(() => () => engine.off('clientResized', s), [s]));
                        const c = (0, n.useMemo)(() => Object.assign({}, u), [u]);
                        return o().createElement(p.Provider, { value: c }, e);
                    });
                var v = a(6483),
                    D = a.n(v),
                    f = a(926),
                    B = a.n(f);
                let F, w, S;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(F || (F = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                    })(w || (w = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(S || (S = {})));
                const P = () => {
                        const e = (0, n.useContext)(p),
                            t = e.width,
                            a = e.height,
                            u = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return F.ExtraLarge;
                                    case e.large:
                                        return F.Large;
                                    case e.medium:
                                        return F.Medium;
                                    case e.small:
                                        return F.Small;
                                    case e.extraSmall:
                                        return F.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), F.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return w.ExtraLarge;
                                    case e.largeWidth:
                                        return w.Large;
                                    case e.mediumWidth:
                                        return w.Medium;
                                    case e.smallWidth:
                                        return w.Small;
                                    case e.extraSmallWidth:
                                        return w.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), w.ExtraSmall);
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return S.ExtraLarge;
                                    case e.largeHeight:
                                        return S.Large;
                                    case e.mediumHeight:
                                        return S.Medium;
                                    case e.smallHeight:
                                        return S.Small;
                                    case e.extraSmallHeight:
                                        return S.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), S.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: u, mediaWidth: r, mediaHeight: o, remScreenWidth: t, remScreenHeight: a };
                    },
                    y = ['children', 'className'];
                function k() {
                    return (
                        (k =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        k.apply(this, arguments)
                    );
                }
                const x = {
                        [w.ExtraSmall]: '',
                        [w.Small]: B().SMALL_WIDTH,
                        [w.Medium]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH}`,
                        [w.Large]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH} ${B().EXTRA_LARGE_WIDTH}`,
                    },
                    N = {
                        [S.ExtraSmall]: '',
                        [S.Small]: B().SMALL_HEIGHT,
                        [S.Medium]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT}`,
                        [S.Large]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT}`,
                        [S.ExtraLarge]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT} ${B().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [F.ExtraSmall]: '',
                        [F.Small]: B().SMALL,
                        [F.Medium]: `${B().SMALL} ${B().MEDIUM}`,
                        [F.Large]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE}`,
                        [F.ExtraLarge]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE} ${B().EXTRA_LARGE}`,
                    },
                    T = (e) => {
                        let t = e.children,
                            a = e.className,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) ((a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                return r;
                            })(e, y);
                        const r = P(),
                            n = r.mediaWidth,
                            s = r.mediaHeight,
                            i = r.mediaSize;
                        return o().createElement('div', k({ className: D()(a, x[n], N[s], L[i]) }, u), t);
                    },
                    M = ['children'];
                const I = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                r = {},
                                n = Object.keys(e);
                            for (u = 0; u < n.length; u++) ((a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                            return r;
                        })(e, M);
                    return o().createElement(h, null, o().createElement(T, a, t));
                };
                var O = a(493),
                    H = a.n(O);
                const W = (e) => {
                    let t,
                        a = null;
                    return (
                        (a = requestAnimationFrame(() => {
                            a = requestAnimationFrame(() => {
                                ((a = null), (t = e()));
                            });
                        })),
                        () => {
                            ('function' == typeof t && t(), null !== a && cancelAnimationFrame(a));
                        }
                    );
                };
                var G = a(5521),
                    U = a(4179);
                const $ = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function z(e = G.n.NONE, t = $, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== G.n.NONE)
                            return (
                                window.addEventListener('keydown', u, a),
                                () => {
                                    window.removeEventListener('keydown', u, a);
                                }
                            );
                        function u(u) {
                            if (u.keyCode === e) {
                                if (i.O.view.isEventHandled()) return;
                                (i.O.view.setEventHandled(), t(u), a && u.stopPropagation());
                            }
                        }
                    }, [t, e, a]);
                }
                var V = a(7902);
                const j = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    X = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    Y = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    q = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, a) => {
                                const u = j(`${e}.${a}`, window);
                                return X(u) ? t(e, a, u) : `${e}.${a}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    K = (e) => {
                        const t = ((e) => {
                                const t = (0, V.F)(),
                                    a = t.caller,
                                    u = t.resId,
                                    r = window.__feature && window.__feature !== a && a ? `subViews.${a}` : '';
                                return { modelPrefix: r, modelPath: Y(r, e || ''), resId: u };
                            })(),
                            a = t.modelPrefix,
                            u = e.split('.');
                        if (u.length > 0) {
                            const e = [u[0]];
                            return (
                                u.reduce((t, u) => {
                                    const r = j(Y(a, `${t}.${u}`), window);
                                    return X(r) ? (e.push(r.id), `${t}.${u}.value`) : (e.push(u), `${t}.${u}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    Z = U.Sw.instance;
                let Q;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(Q || (Q = {}));
                const J = (e = 'model', t = Q.Deep) => {
                    const a = (0, n.useState)(0),
                        u = (a[0], a[1]),
                        r = (0, n.useMemo)(() => (0, V.F)(), []),
                        o = r.caller,
                        s = r.resId,
                        i = (0, n.useMemo)(
                            () => (window.__feature && window.__feature !== o ? `subViews.${o}.${e}` : e),
                            [o, e],
                        ),
                        l = (0, n.useState)(() =>
                            ((e) => {
                                const t = j(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return X(t) ? t.value : t;
                            })(q(i)),
                        ),
                        c = l[0],
                        _ = l[1],
                        d = (0, n.useRef)(-1);
                    return (
                        C(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? Q.Deep : Q.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== Q.None)
                            ) {
                                const a = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === Q.Deep
                                            ? (e === c && u((e) => e + 1), _(e))
                                            : _(Object.assign([], e));
                                    },
                                    r = K(e);
                                d.current = Z.addCallback(r, a, s, t === Q.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (t !== Q.None)
                                return () => {
                                    Z.removeCallback(d.current, s);
                                };
                        }, [s, t]),
                        c
                    );
                };
                var ee = a(7727),
                    te = a(3403),
                    ae = a(3649);
                const ue = {
                        base: 'Label_base_85',
                        textWithBlend: 'Label_textWithBlend_07',
                        textWithBlend__show: 'Label_textWithBlend__show_fa',
                        show: 'Label_show_69',
                        textWithBlend__new: 'Label_textWithBlend__new_4a',
                        textWithBlend__hide: 'Label_textWithBlend__hide_f1',
                        hide: 'Label_hide_33',
                        textMask: 'Label_textMask_7f',
                        textMask__gold: 'Label_textMask__gold_71',
                        textMask__goldContrast: 'Label_textMask__goldContrast_05',
                        textMask__animated: 'Label_textMask__animated_38',
                        maskAppearance: 'Label_maskAppearance_26',
                        textMask__micro: 'Label_textMask__micro_37',
                        textMask__small: 'Label_textMask__small_54',
                        textMask__medium: 'Label_textMask__medium_eb',
                        textMask__large: 'Label_textMask__large_0a',
                        textMask__extraLarge: 'Label_textMask__extraLarge_4c',
                        text: 'Label_text_67',
                        text__micro: 'Label_text__micro_a4',
                        text__small: 'Label_text__small_e0',
                        text__large: 'Label_text__large_65',
                        text__extraLarge: 'Label_text__extraLarge_22',
                        text__blended: 'Label_text__blended_67',
                        text__filtered: 'Label_text__filtered_86',
                        text__rewardScreen: 'Label_text__rewardScreen_68',
                        textAppearance: 'Label_textAppearance_31',
                        text__show: 'Label_text__show_95',
                        text__hide: 'Label_text__hide_37',
                        text__hideWithDelay: 'Label_text__hideWithDelay_53',
                        text__new: 'Label_text__new_a0',
                        hideLevel: 'Label_hideLevel_61',
                        showLevel: 'Label_showLevel_55',
                        hideLevelSmall: 'Label_hideLevelSmall_9d',
                        showLevelSmall: 'Label_showLevelSmall_96',
                        hideLevelMicro: 'Label_hideLevelMicro_9e',
                        showLevelMicro: 'Label_showLevelMicro_50',
                        showIcon: 'Label_showIcon_0f',
                        showIconSmall: 'Label_showIconSmall_96',
                        hideProgress: 'Label_hideProgress_0c',
                        showIconMicro: 'Label_showIconMicro_1e',
                    },
                    re = ({
                        level: e,
                        size: t,
                        isGold: a,
                        isForRewardScreen: u,
                        curState: r,
                        isFirstLevel: n,
                        showProgressionCompleted: s,
                    }) => {
                        const i = D()(ue.base, ue[`base__${t}`]),
                            l = D()(
                                ue.text,
                                ue.text__filtered,
                                ue[`text__${t}`],
                                ue[`text__${r}`],
                                s && ue.text__hideWithDelay,
                                n && ue.text__new,
                                u && ue.text__rewardScreen,
                            ),
                            c = D()(
                                ue.textWithBlend,
                                n && ue.text__new,
                                s && ue.text__hideWithDelay,
                                ue[`textWithBlend__${r}`],
                            ),
                            _ = D()(ue.text, ue.text__blended, ue[`text__${t}`], u && ue.text__rewardScreen),
                            d = D()(
                                ue.textMask,
                                a && ue.textMask__gold,
                                u && ue.textMask__animated,
                                a && u && ue.textMask__goldContrast,
                                ue[`textMask__${t}`],
                            );
                        return o().createElement(
                            'div',
                            { className: i },
                            o().createElement('div', { className: l }, e),
                            o().createElement(
                                'div',
                                { className: c },
                                o().createElement('div', { className: _ }, e),
                                o().createElement('div', { className: d }),
                            ),
                        );
                    },
                    ne = 'SeasonEmblem_base_de',
                    oe = 'SeasonEmblem_emblem_82',
                    se = 'SeasonEmblem_emblem__hasBP_55';
                var ie;
                !(function (e) {
                    ((e[(e.Base = 0)] = 'Base'), (e[(e.HasBP = 1)] = 'HasBP'));
                })(ie || (ie = {}));
                const le = () => {
                    const e = J('model.offSeason', Q.None),
                        t = e.level,
                        a = e.hasBattlePass,
                        u = e.isEnabled,
                        r = ((e, t) => (!0 === t ? ie.HasBP : ie.Base))(0, a),
                        n = D()(oe, r === ie.HasBP && se);
                    return o().createElement(
                        'div',
                        { className: ne },
                        o().createElement(
                            'div',
                            { className: n },
                            o().createElement(re, { level: u ? t : 1, size: 'extraLarge', isGold: a }),
                        ),
                    );
                };
                var ce = a(6373);
                const _e = 'SeasonStatistics_base_e1',
                    de = 'SeasonStatistics_shineWrapper_36',
                    me = 'SeasonStatistics_imgShine_22',
                    Ee = 'SeasonStatistics_imgLines_8d',
                    ge = 'SeasonStatistics_emblem_53',
                    pe = 'SeasonStatistics_emblem__disabled_12',
                    Ae = 'SeasonStatistics_stats_11',
                    be = 'SeasonStatistics_stats__left_0c',
                    Ce = 'SeasonStatistics_stats__right_06',
                    he = 'SeasonStatistics_statsBg_aa',
                    ve = 'SeasonStatistics_statsBg__right_00',
                    De = 'SeasonStatistics_statsLabel_2d',
                    fe = 'SeasonStatistics_statsContainer_d0',
                    Be = 'SeasonStatistics_statsValue_07',
                    Fe = 'SeasonStatistics_alertIcon_15',
                    we = '---',
                    Se = R.strings.battle_pass.offSeason,
                    Pe = (e) => (0 === e ? we : U.Z5.getNumberFormat(e, U.B3.INTEGRAL)),
                    ye = () => {
                        const e = J('model.offSeason'),
                            t = e.isEnabled,
                            a = e.leftVehicle,
                            u = e.leftPoints,
                            r = e.rightVehicle,
                            n = e.rightPoints,
                            s = e.isFailedService,
                            i = D()([ge, { [pe]: !t }]),
                            l = (0, ae.uF)(Se.sideChosen(), { vehicle: a }),
                            c = (0, ae.uF)(Se.sideChosen(), { vehicle: r }),
                            _ = ((e, t) => (e ? { left: we, right: we } : { left: Pe(t.left), right: Pe(t.right) }))(
                                s,
                                { left: u, right: n },
                            ),
                            d = D()(Ae, be),
                            m = D()(Ae, Ce),
                            E = D()(he, ve),
                            g = Se.alertTooltip();
                        return o().createElement(
                            'div',
                            { className: _e },
                            t &&
                                o().createElement(
                                    'div',
                                    { className: de },
                                    o().createElement('div', { className: me }),
                                ),
                            o().createElement('div', { className: Ee }),
                            o().createElement(
                                'div',
                                { className: d },
                                o().createElement('div', { className: he }),
                                o().createElement('div', { className: De }, l),
                                o().createElement(
                                    'div',
                                    { className: fe },
                                    s &&
                                        o().createElement(
                                            ce.i,
                                            { body: g },
                                            o().createElement('div', { className: Fe }),
                                        ),
                                    o().createElement('div', { className: Be }, _.left),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: m },
                                o().createElement('div', { className: E }),
                                o().createElement('div', { className: De }, c),
                                o().createElement(
                                    'div',
                                    { className: fe },
                                    o().createElement('div', { className: Be }, _.right),
                                    s &&
                                        o().createElement(
                                            ce.i,
                                            { body: g },
                                            o().createElement('div', { className: Fe }),
                                        ),
                                ),
                            ),
                            o().createElement('div', { className: i }, o().createElement(le, null)),
                        );
                    },
                    ke = 'BattlePassOffSeasonViewContent_base_a5',
                    xe = 'BattlePassOffSeasonViewContent_content_17',
                    Ne = 'BattlePassOffSeasonViewContent_background_5f',
                    Re = 'BattlePassOffSeasonViewContent_backgroundFade_3d',
                    Le = 'BattlePassOffSeasonViewContent_header_66',
                    Te = 'BattlePassOffSeasonViewContent_title_e9',
                    Me = 'BattlePassOffSeasonViewContent_date_7c',
                    Ie = 'BattlePassOffSeasonViewContent_stats_c1',
                    Oe = 'BattlePassOffSeasonViewContent_subTitle_19',
                    He = 'BattlePassOffSeasonViewContent_levelLabel_0a',
                    We = 'BattlePassOffSeasonViewContent_levelLabel__disabled_8f',
                    Ge = 'BattlePassOffSeasonViewContent_footerLabel_e8',
                    Ue = R.strings.battle_pass.offSeason,
                    $e = { loseVote: Ue.footerLose(), winVote: Ue.footerWin(), notVote: '' },
                    ze = () => {
                        const e = J('model.offSeason'),
                            t = e.level,
                            a = e.isEnabled,
                            u = e.seasonName,
                            r = e.voteStatus,
                            n = D()(He, !a && We),
                            s = a ? (0, ae.uF)(Ue.$dyn('levelReached'), { level: t }) : Ue.noProgress(),
                            i = $e[r];
                        return o().createElement(
                            'div',
                            { className: ke },
                            o().createElement('div', { className: Ne }),
                            o().createElement('div', { className: Re }),
                            o().createElement(
                                'div',
                                { className: Le },
                                o().createElement('div', { className: Te }, u),
                                o().createElement('div', { className: Me }, Ue.finished()),
                            ),
                            o().createElement(
                                'div',
                                { className: xe },
                                o().createElement('div', { className: Ie }, o().createElement(ye, null)),
                                o().createElement('div', { className: n }, s),
                            ),
                            o().createElement('div', { className: Oe }, Ue.startsSoon()),
                            o().createElement('div', { className: Ge }, i),
                        );
                    };
                function Ve() {
                    return !1;
                }
                console.log;
                var je = a(9174);
                function Xe(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Ye(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return Ye(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var u = 0;
                        return function () {
                            return u >= e.length ? { done: !0 } : { done: !1, value: e[u++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Ye(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, u = new Array(t); a < t; a++) u[a] = e[a];
                    return u;
                }
                const qe = (e) => (0 === e ? window : window.subViews.get(e));
                function Ke(e, t) {
                    var a;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (a = e[t]) ? void 0 : a.value;
                }
                function Ze(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, a, u) => t(null == e ? void 0 : e.value, a, u));
                }
                var Qe = a(3946);
                const Je = ((e, t) => {
                        const a = (0, n.createContext)({});
                        return [
                            function ({ mode: u = 'real', options: r, children: s, mocks: l }) {
                                const c = (0, n.useRef)([]),
                                    _ = (a, u, r) => {
                                        var n;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: a = qe,
                                                context: u = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function n(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, a) => {
                                                        a.forEach((t) => {
                                                            const a = r.get(t);
                                                            void 0 !== a && a(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const r = a(t),
                                                        n = u.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, t) => {
                                                              const a = e[t];
                                                              return 'function' == typeof a ? a.bind(e) : a;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (a, n) => {
                                                        const s = 'string' == typeof n ? `${u}.${n}` : u,
                                                            l = i.O.view.addModelObserver(s, t, !0);
                                                        return (r.set(l, a), e && a(o(n)), l);
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, t) => {
                                                        const a = o(t);
                                                        return (...t) => {
                                                            a(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = o(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, a = Xe(r.keys()); !(e = a()).done; ) n(e.value, t);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(u),
                                            s =
                                                'real' === a
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === a ? (null == r ? void 0 : r.getter(e)) : s.readByPath(e),
                                            _ = (e) => c.current.push(e),
                                            d = e({
                                                mode: a,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const u = null != t ? t : l(e),
                                                            r = je.LO.box(u, { equals: Ve });
                                                        return (
                                                            'real' === a &&
                                                                s.subscribe(
                                                                    (0, je.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const u = null != t ? t : l(e),
                                                            r = je.LO.box(u, { equals: Ve });
                                                        return (
                                                            'real' === a &&
                                                                s.subscribe(
                                                                    (0, je.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const u = l(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, t) => ((e[t] = je.LO.box(u[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === a &&
                                                                    s.subscribe(
                                                                        (0, je.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                n = Object.entries(r),
                                                                o = n.reduce(
                                                                    (e, [t, a]) => ((e[a] = je.LO.box(u[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === a &&
                                                                    s.subscribe(
                                                                        (0, je.aD)((e) => {
                                                                            n.forEach(([t, a]) => {
                                                                                o[a].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: _,
                                            }),
                                            m = { mode: a, model: d, externalModel: s, cleanup: _ };
                                        return {
                                            model: d,
                                            controls: 'mocks' === a && r ? r.controls(m) : t(m),
                                            externalModel: s,
                                            mode: a,
                                        };
                                    },
                                    d = (0, n.useRef)(!1),
                                    m = (0, n.useState)(u),
                                    E = m[0],
                                    g = m[1],
                                    p = (0, n.useState)(() => _(u, r, l)),
                                    A = p[0],
                                    b = p[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        d.current ? b(_(E, r, l)) : (d.current = !0);
                                    }, [l, E, r]),
                                    (0, n.useEffect)(() => {
                                        g(u);
                                    }, [u]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (A.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [A],
                                    ),
                                    o().createElement(a.Provider, { value: A }, s)
                                );
                            },
                            () => (0, n.useContext)(a),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    extraChapterWidget: e.object('widget3dStyle'),
                                    extraChapterMainRewardInfo: e.object('widget3dStyle.vehicleInfo'),
                                    availableChapterTypes: e.array('availableChapterTypes'),
                                    levels: e.array('levels.items'),
                                    freeRewardItems: e.array('levels.items.freeRewardItems'),
                                    paidRewardItems: e.array('levels.items.paidRewardItems'),
                                    collectionEntryPoint: e.object('collectionEntryPoint'),
                                    chapterCharacter: e.object('chapterCharacter'),
                                    chapterCharacterSkills: e.array('chapterCharacter.skills'),
                                    widget3dStyle: e.object('widget3dStyle'),
                                    vehicleInfo: e.object('widget3dStyle.vehicleInfo'),
                                    availableBattleTypes: e.array('availableBattleTypes'),
                                },
                                a = (0, Qe.Om)(() => Ze(t.levels.get(), (e) => e), { equals: Ve }),
                                u = (0, Qe.Om)(
                                    (e) => {
                                        const t = Ke(a(), e);
                                        if (t) return Ze(t.freeRewardItems.items, (e) => Object.assign({}, e));
                                    },
                                    { equals: Ve },
                                ),
                                r = (0, Qe.Om)(
                                    (e) => {
                                        const t = Ke(a(), e);
                                        if (t) return Ze(t.paidRewardItems.items, (e) => Object.assign({}, e));
                                    },
                                    { equals: Ve },
                                ),
                                n = (0, Qe.Om)(
                                    (e) =>
                                        (function (e, t) {
                                            if (Array.isArray(e)) return e.filter(t);
                                            const a = [];
                                            for (let r = 0; r < e.length; r++) {
                                                var u;
                                                const n = null == (u = e[r]) ? void 0 : u.value;
                                                t(n, r, e) && a.push(n);
                                            }
                                            return a;
                                        })(t.availableChapterTypes.get(), (t) => t === e).length > 0,
                                    { equals: Ve },
                                ),
                                o = (0, Qe.Om)(() => Ze(t.levels.get(), (e) => e), { equals: Ve }),
                                s = (0, Qe.Om)(() => Ze(t.chapterCharacterSkills.get(), (e) => e), { equals: Ve }),
                                i = (0, Qe.Om)(() => t.levels.get().length),
                                l = (0, Qe.Om)(() => Ze(t.availableBattleTypes.get(), (e) => e), { equals: Ve });
                            return Object.assign({}, t, {
                                computes: {
                                    hasChapter: n,
                                    getLevels: o,
                                    getLevelsLength: i,
                                    getCharacterSkills: s,
                                    getAvailableBattleTypes: l,
                                    getLevelsItems: a,
                                    getFreeRewardItems: u,
                                    getPaidRewardItems: r,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onClose: e.createCallbackNoArgs('onClose'),
                            onViewLoaded: e.createCallbackNoArgs('onViewLoaded'),
                            onChapterChoice: e.createCallbackNoArgs('onChapterChoice'),
                            openPreview: e.createCallbackNoArgs('widget3dStyle.onMarathonPreviewClick'),
                            onAbout: e.createCallbackNoArgs('onAboutClick'),
                            onPointsInfo: e.createCallbackNoArgs('onPointsInfoClick'),
                            onBpcoin: e.createCallbackNoArgs('onBpcoinClick'),
                            onBpbit: e.createCallbackNoArgs('onBpbitClick'),
                            onTakeRewards: e.createCallbackNoArgs('onTakeRewardsClick'),
                            openCollection: e.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                            onAction: e.createCallbackNoArgs('onActionClick'),
                            onBuyBP: e.createCallbackNoArgs('onBuyBP'),
                            onBuyStages: e.createCallbackNoArgs('onBuyStages'),
                            on3dStylePreview: e.createCallback((e) => e, 'widget3dStyle.onPreviewClick'),
                            onFinishedAnimation: e.createCallbackNoArgs('onFinishedAnimation'),
                            onTake: e.createCallback((e) => e, 'onTakeClick'),
                            onLevelsAnimationFinished: e.createCallbackNoArgs('onLevelsAnimationFinished'),
                            onTasks: e.createCallbackNoArgs('onTasksClick'),
                        }),
                    ),
                    et = Je[0],
                    tt = Je[1],
                    at = {
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
                    ut = [
                        'caption',
                        'onClick',
                        'goto',
                        'side',
                        'type',
                        'classNames',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'soundClick',
                        'soundHover',
                    ];
                function rt() {
                    return (
                        (rt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        rt.apply(this, arguments)
                    );
                }
                class nt extends o().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, ee.G)(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                (e && e(t), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, ee.G)(this.props.soundClick));
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                (e && e(t), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            a = e.onClick,
                            u = e.goto,
                            r = e.side,
                            n = e.type,
                            s = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        u,
                                        r = {},
                                        n = Object.keys(e);
                                    for (u = 0; u < n.length; u++) ((a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                    return r;
                                })(e, ut)),
                            m = D()(at.base, at[`base__${n}`], at[`base__${r}`], null == s ? void 0 : s.base),
                            E = D()(at.icon, at[`icon__${n}`], at[`icon__${r}`], null == s ? void 0 : s.icon),
                            g = D()(at.glow, null == s ? void 0 : s.glow),
                            p = D()(at.caption, at[`caption__${n}`], null == s ? void 0 : s.caption),
                            A = D()(at.goto, null == s ? void 0 : s.goto);
                        return o().createElement(
                            'div',
                            rt(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: a,
                                },
                                d,
                            ),
                            'info' !== n && o().createElement('div', { className: at.shine }),
                            o().createElement('div', { className: E }, o().createElement('div', { className: g })),
                            o().createElement('div', { className: p }, t),
                            u && o().createElement('div', { className: A }, u),
                        );
                    }
                }
                let ot, st, it;
                ((nt.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        ((e.Active = 'active'),
                            (e.Paused = 'paused'),
                            (e.Completed = 'completed'),
                            (e.NotStarted = 'notStarted'),
                            (e.Disabled = 'disabled'));
                    })(ot || (ot = {})),
                    (function (e) {
                        ((e.Hide = 'hide'), (e.Buy = 'buy'), (e.Level = 'level'), (e.Activate = 'activate'));
                    })(st || (st = {})),
                    (function (e) {
                        ((e.Default = 'default'), (e.Marathon = 'marathon'), (e.Resource = 'resource'));
                    })(it || (it = {})));
                let lt;
                !(function (e) {
                    ((e.SHORT_DATE = 'short-date'),
                        (e.SHORT_TIME = 'short-time'),
                        (e.SHORT_DATE_TIME = 'short-date-time'),
                        (e.FULL_DATE = 'full-date'),
                        (e.FULL_DATE_TIME = 'full-date-time'),
                        (e.MONTH = 'month'),
                        (e.MONTH_DATE = 'month-date'),
                        (e.DATE_MONTH = 'date-month'),
                        (e.MONTH_YEAR = 'month-year'),
                        (e.WEEK_DAY = 'week-day'),
                        (e.WEEK_DAY_TIME = 'week-day-time'),
                        (e.YEAR = 'year'),
                        (e.DATE_YEAR = 'date-year'));
                })(lt || (lt = {}));
                Date.now();
                U.Sw.instance;
                let ct, _t, dt, mt;
                (!(function (e) {
                    ((e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium'));
                })(ct || (ct = {})),
                    (function (e) {
                        ((e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen'));
                    })(_t || (_t = {})),
                    (function (e) {
                        ((e.AwaitSeason = 'awaitSeason'),
                            (e.Bought = 'bought'),
                            (e.Free = 'free'),
                            (e.Completed = 'completed'),
                            (e.CompletedRightNow = 'completedRightNow'),
                            (e.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                            (e.NoVehiclesBase = 'noVehiclesBase'),
                            (e.ChapterNotChosen = 'chapterNotChosen'));
                    })(dt || (dt = {})),
                    (function (e) {
                        ((e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay'));
                    })(mt || (mt = {})));
                const Et = (e, t, a = '') => {
                        const u = a.length > 0 ? `_${a}` : a,
                            r = e.$dyn(`c_${t}${u}`),
                            n = e.$dyn(`common${u}`);
                        return r || n;
                    },
                    gt = (e) => {
                        const t = R.images.gui.maps.icons.battlePass.backgrounds;
                        return { backgroundImage: `url(${Et(t.chapter, e)})` };
                    };
                let pt, At;
                (!(function (e) {
                    ((e.style = 'style'), (e.tankman = 'tankman'), (e.vehicle = 'vehicle'));
                })(pt || (pt = {})),
                    (function (e) {
                        ((e.Default = 'default'), (e.Marathon = 'marathon'), (e.Resource = 'resource'));
                    })(At || (At = {})));
                (pt.style, pt.tankman);
                const bt = {
                        base: 'BattlePassProgressionsViewContent_base_67',
                        header: 'BattlePassProgressionsViewContent_header_76',
                        headerGlow: 'BattlePassProgressionsViewContent_headerGlow_c0',
                        progression: 'BattlePassProgressionsViewContent_progression_7c',
                        progression__marathon: 'BattlePassProgressionsViewContent_progression__marathon_3e',
                        base__buttonVisible: 'BattlePassProgressionsViewContent_base__buttonVisible_67',
                        extraChapterWidget: 'BattlePassProgressionsViewContent_extraChapterWidget_e2',
                        footer: 'BattlePassProgressionsViewContent_footer_13',
                        close: 'BattlePassProgressionsViewContent_close_69',
                    },
                    Ct = 'ExtraChapterWidget_base_61',
                    ht = 'ExtraChapterWidget_glow_e7',
                    vt = 'ExtraChapterWidget_tankmen_0d',
                    Dt = 'ExtraChapterWidget_vehicle_dc',
                    ft = 'ExtraChapterWidget_vehicleCaption_39',
                    Bt = 'ExtraChapterWidget_tankmenCaption_c6',
                    Ft = 'ExtraChapterWidget_vehicleBg_ce',
                    wt = 'ExtraChapterWidget_vehicleInfo_44',
                    St = 'ExtraChapterWidget_separatorBg_ab',
                    Pt = 'ExtraChapterWidget_styleDescription_fe',
                    yt = {
                        base: 'Preview_base_1f',
                        base__hovered: 'Preview_base__hovered_ee',
                        icon: 'Preview_icon_f3',
                        icon__small: 'Preview_icon__small_a1',
                        icon__normal: 'Preview_icon__normal_5c',
                        base__mouseDown: 'Preview_base__mouseDown_d0',
                        label: 'Preview_label_2e',
                        base__visibleLabel: 'Preview_base__visibleLabel_92',
                    },
                    kt = [
                        'label',
                        'isVisibleLabel',
                        'autofocus',
                        'soundHover',
                        'soundClick',
                        'size',
                        'classNames',
                        'onClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'onFocus',
                        'onBlur',
                    ];
                function xt() {
                    return (
                        (xt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        xt.apply(this, arguments)
                    );
                }
                let Nt;
                !(function (e) {
                    ((e.SMALL = 'small'), (e.NORMAL = 'normal'));
                })(Nt || (Nt = {}));
                const Rt = (0, n.memo)((e) => {
                        let t = e.label,
                            a = e.isVisibleLabel,
                            u = void 0 !== a && a,
                            r = e.autofocus,
                            s = void 0 !== r && r,
                            i = e.soundHover,
                            l = void 0 === i ? 'highlight' : i,
                            c = e.soundClick,
                            _ = void 0 === c ? 'play' : c,
                            d = e.size,
                            m = void 0 === d ? Nt.NORMAL : d,
                            E = e.classNames,
                            g = e.onClick,
                            p = e.onMouseEnter,
                            A = e.onMouseLeave,
                            b = e.onMouseDown,
                            C = e.onMouseUp,
                            h = e.onFocus,
                            v = e.onBlur,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) ((a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                return r;
                            })(e, kt);
                        const B = (0, n.useState)(!1),
                            F = B[0],
                            w = B[1],
                            S = (0, n.useState)(!1),
                            P = S[0],
                            y = S[1],
                            k = (0, n.useState)(s),
                            x = k[0],
                            N = k[1],
                            R = (0, n.useRef)(null),
                            L = (0, n.useCallback)(() => {
                                R.current && (R.current.focus(), N(!0));
                            }, []),
                            T = (0, n.useCallback)(
                                (e) => {
                                    x && null !== R.current && !R.current.contains(e.target) && N(!1);
                                },
                                [x],
                            );
                        ((0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', T),
                                () => {
                                    document.removeEventListener('mousedown', T);
                                }
                            ),
                            [T],
                        ),
                            (0, n.useEffect)(() => {
                                N(s);
                            }, [s]));
                        const M = (0, n.useCallback)(
                                (e) => {
                                    g && g(e);
                                },
                                [g],
                            ),
                            I = (0, n.useCallback)(
                                (e) => {
                                    (w(!0), b && b(e), _ && (0, ee.G)(_), s && L());
                                },
                                [s, b, L, _],
                            ),
                            O = (0, n.useCallback)(
                                (e) => {
                                    (w(!1), C && C(e));
                                },
                                [C],
                            ),
                            H = (0, n.useCallback)(
                                (e) => {
                                    (p && p(e), l && (0, ee.G)(l), y(!0));
                                },
                                [p, l],
                            ),
                            W = (0, n.useCallback)(
                                (e) => {
                                    (w(!1), y(!1), A && A(e));
                                },
                                [A],
                            ),
                            G = (0, n.useCallback)(
                                (e) => {
                                    (N(!0), h && h(e));
                                },
                                [h],
                            ),
                            U = (0, n.useCallback)(
                                (e) => {
                                    (N(!1), v && v(e));
                                },
                                [v],
                            ),
                            $ = D()(
                                yt.base,
                                u && yt.base__visibleLabel,
                                F && yt.base__mouseDown,
                                P && yt.base__hovered,
                                x && yt.base__focused,
                                null == E ? void 0 : E.base,
                            ),
                            z = D()(yt.icon, yt[`icon__${m}`], null == E ? void 0 : E.icon),
                            V = D()(yt.label, null == E ? void 0 : E.label);
                        return o().createElement(
                            'div',
                            xt(
                                {
                                    ref: R,
                                    className: $,
                                    onClick: M,
                                    onMouseEnter: H,
                                    onMouseLeave: W,
                                    onMouseDown: I,
                                    onMouseUp: O,
                                    onFocus: G,
                                    onBlur: U,
                                },
                                f,
                            ),
                            o().createElement('div', { className: z }),
                            o().createElement('div', { className: V }, t),
                        );
                    }),
                    Lt = (e, t) => {
                        let a;
                        const u = setTimeout(() => {
                            a = e();
                        }, t);
                        return () => {
                            ('function' == typeof a && a(), clearTimeout(u));
                        };
                    },
                    Tt = {
                        base: 'Sonar_base_8f',
                        back: 'Sonar_back_6b',
                        emitter: 'Sonar_emitter_50',
                        wave: 'Sonar_wave_1e',
                        wave__0: 'Sonar_wave__0_7a',
                        sonarWave: 'Sonar_sonarWave_6b',
                        wave__1: 'Sonar_wave__1_aa',
                        wave__2: 'Sonar_wave__2_5d',
                        wave__3: 'Sonar_wave__3_67',
                        wave__4: 'Sonar_wave__4_cd',
                        wave__5: 'Sonar_wave__5_08',
                        wave__6: 'Sonar_wave__6_0b',
                        wave__7: 'Sonar_wave__7_b6',
                        wave__8: 'Sonar_wave__8_3b',
                        wave__9: 'Sonar_wave__9_16',
                        wave__10: 'Sonar_wave__10_09',
                    },
                    Mt = ({ className: e }) =>
                        o().createElement(
                            'div',
                            { className: D()(Tt.base, e) },
                            o().createElement(
                                'div',
                                { className: Tt.emitter },
                                Array.from({ length: 10 }, (e, t) =>
                                    o().createElement('div', {
                                        key: `wave-${t}`,
                                        className: D()(Tt.wave, Tt[`wave__${t}`]),
                                    }),
                                ),
                            ),
                            o().createElement('div', { className: Tt.back }),
                        ),
                    It = 'Sound_base_9f',
                    Ot = 'Sound_content_7a',
                    Ht = 'Sound_icoContainer_b7',
                    Wt = 'Sound_base__active_d7',
                    Gt = 'Sound_ico_d2',
                    Ut = 'Sound_sonar_ef',
                    $t = 'Sound_sonar__show_f5',
                    zt = R.strings.battle_pass.progression.extraChapterWidget,
                    Vt = ({ active: e, soundOn: t }) =>
                        o().createElement(
                            ce.i,
                            { body: zt.voiceOverTooltip() },
                            o().createElement(
                                'div',
                                { className: D()(It, (e || t) && Wt) },
                                o().createElement(
                                    'div',
                                    { className: Ot },
                                    o().createElement(
                                        'div',
                                        { className: Ht },
                                        o().createElement('div', { className: Gt }),
                                    ),
                                ),
                                o().createElement(Mt, { className: D()(Ut, t && $t) }),
                            ),
                        ),
                    jt = 'Separator_base_c5',
                    Xt = 'Separator_separatorBg_28',
                    Yt = 'Separator_preview_44',
                    qt = 'Separator_sound_8b',
                    Kt = 'Separator_base__hasSound_49',
                    Zt = 'Separator_previewLabel_7b',
                    Qt = Boolean(''),
                    Jt = ({ classNames: e, onPreviewIconClick: t }) => {
                        const a = (0, n.useState)(!1),
                            u = a[0],
                            r = a[1],
                            s = (0, n.useState)(!1),
                            i = s[0],
                            l = s[1];
                        return o().createElement(
                            'div',
                            { className: D()(jt, Qt && Kt) },
                            o().createElement('div', { className: D()(Xt, null == e ? void 0 : e.separatorBg) }),
                            t &&
                                o().createElement(
                                    'div',
                                    { className: D()(Yt) },
                                    o().createElement(Rt, { size: Nt.NORMAL, onClick: t, classNames: { label: Zt } }),
                                ),
                            Qt &&
                                o().createElement(
                                    'div',
                                    {
                                        className: qt,
                                        onClick: () => {
                                            if (!i)
                                                return (
                                                    l(!0),
                                                    (0, ee.G)(''),
                                                    Lt(() => {
                                                        l(!1);
                                                    }, 3e3)
                                                );
                                        },
                                        onMouseEnter: () => {
                                            ((0, ee.G)('highlight'), r(!0));
                                        },
                                        onMouseLeave: () => {
                                            r(!1);
                                        },
                                    },
                                    o().createElement(Vt, { active: u, soundOn: i }),
                                ),
                        );
                    };
                var ea = a(9887),
                    ta = a.n(ea);
                const aa = ['xl', 'lg', 'md', 'sm', 'xs'],
                    ua = (e) => e.includes('_') && ((e) => aa.includes(e))(e.split('_').at(-1)),
                    ra = [F.ExtraLarge, F.Large, F.Medium, F.Small, F.ExtraSmall],
                    na = (e, t) =>
                        Object.keys(e).reduce((a, u) => {
                            if (u in a) return a;
                            if (ua(u)) {
                                const r = u.split('_').slice(0, -1).join('_');
                                if (r in a) return a;
                                const n = ra.indexOf(t),
                                    o = (-1 !== n ? aa.slice(n) : [])
                                        .map((e) => r + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    s = o ? e[o] : void 0;
                                return ((a[r] = void 0 !== s ? s : e[r]), a);
                            }
                            const r = e[u];
                            return (
                                void 0 === r ||
                                    ((e, t) => aa.some((a) => void 0 !== t[`${e}_${a}`]))(u, e) ||
                                    (a[u] = r),
                                a
                            );
                        }, {}),
                    oa = (e, t = na) => {
                        const a = (
                            (e, t = na) =>
                            (a) => {
                                const u = P().mediaSize,
                                    r = (0, n.useMemo)(() => t(a, u), [a, u]);
                                return o().createElement(e, r);
                            }
                        )(e, t);
                        return o().memo((t) =>
                            Object.keys(t).some((e) => ua(e) && void 0 !== t[e])
                                ? o().createElement(a, t)
                                : o().createElement(e, t),
                        );
                    },
                    sa = {
                        mt__XS: 'Box_mt__XS_0c',
                        mt__SM: 'Box_mt__SM_eb',
                        mt__SMp: 'Box_mt__SMp_cf',
                        mt__MD: 'Box_mt__MD_25',
                        mt__MDp: 'Box_mt__MDp_49',
                        mt__LG: 'Box_mt__LG_e8',
                        mt__XL: 'Box_mt__XL_83',
                        mr__XS: 'Box_mr__XS_7c',
                        mr__SM: 'Box_mr__SM_08',
                        mr__SMp: 'Box_mr__SMp_06',
                        mr__MD: 'Box_mr__MD_4a',
                        mr__MDp: 'Box_mr__MDp_b6',
                        mr__LG: 'Box_mr__LG_d0',
                        mr__XL: 'Box_mr__XL_db',
                        mb__XS: 'Box_mb__XS_bb',
                        mb__SM: 'Box_mb__SM_83',
                        mb__SMp: 'Box_mb__SMp_04',
                        mb__MD: 'Box_mb__MD_ed',
                        mb__MDp: 'Box_mb__MDp_65',
                        mb__LG: 'Box_mb__LG_c8',
                        mb__XL: 'Box_mb__XL_f8',
                        ml__XS: 'Box_ml__XS_8a',
                        ml__SM: 'Box_ml__SM_e6',
                        ml__SMp: 'Box_ml__SMp_fb',
                        ml__MD: 'Box_ml__MD_2b',
                        ml__MDp: 'Box_ml__MDp_c7',
                        ml__LG: 'Box_ml__LG_39',
                        ml__XL: 'Box_ml__XL_4a',
                    },
                    ia = [
                        'className',
                        'width',
                        'height',
                        'm',
                        'mt',
                        'mr',
                        'mb',
                        'ml',
                        'column',
                        'row',
                        'flexDirection',
                        'flexStart',
                        'center',
                        'flexEnd',
                        'spaceBetween',
                        'spaceAround',
                        'justifyContent',
                        'alignItems',
                        'alignSelf',
                        'wrap',
                        'flexWrap',
                        'grow',
                        'shrink',
                        'flex',
                        'style',
                        'children',
                    ];
                function la() {
                    return (
                        (la =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        la.apply(this, arguments)
                    );
                }
                Object.keys(ta());
                const ca = {
                        XL: { mt: sa.mt__XL, mr: sa.mr__XL, mb: sa.mb__XL, ml: sa.ml__XL },
                        LG: { mt: sa.mt__LG, mr: sa.mr__LG, mb: sa.mb__LG, ml: sa.ml__LG },
                        MDp: { mt: sa.mt__MDp, mr: sa.mr__MDp, mb: sa.mb__MDp, ml: sa.ml__MDp },
                        MD: { mt: sa.mt__MD, mr: sa.mr__MD, mb: sa.mb__MD, ml: sa.ml__MD },
                        SMp: { mt: sa.mt__SMp, mr: sa.mr__SMp, mb: sa.mb__SMp, ml: sa.ml__SMp },
                        SM: { mt: sa.mt__SM, mr: sa.mr__SM, mb: sa.mb__SM, ml: sa.ml__SM },
                        XS: { mt: sa.mt__XS, mr: sa.mr__XS, mb: sa.mb__XS, ml: sa.ml__XS },
                    },
                    _a = (Object.keys(ca), ['mt', 'mr', 'mb', 'ml']),
                    da = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    ma = oa((e) => {
                        let t = e.className,
                            a = e.width,
                            u = e.height,
                            r = e.m,
                            s = e.mt,
                            i = void 0 === s ? r : s,
                            l = e.mr,
                            c = void 0 === l ? r : l,
                            _ = e.mb,
                            d = void 0 === _ ? r : _,
                            m = e.ml,
                            E = void 0 === m ? r : m,
                            g = e.column,
                            p = e.row,
                            A = e.flexDirection,
                            b = void 0 === A ? (g ? 'column' : p && 'row') || void 0 : A,
                            C = e.flexStart,
                            h = e.center,
                            v = e.flexEnd,
                            f = e.spaceBetween,
                            B = e.spaceAround,
                            F = e.justifyContent,
                            w =
                                void 0 === F
                                    ? (C ? 'flex-start' : h && 'center') ||
                                      (v && 'flex-end') ||
                                      (f && 'space-between') ||
                                      (B && 'space-around') ||
                                      void 0
                                    : F,
                            S = e.alignItems,
                            P = void 0 === S ? (C ? 'flex-start' : h && 'center') || (v && 'flex-end') || void 0 : S,
                            y = e.alignSelf,
                            k = e.wrap,
                            x = e.flexWrap,
                            N = void 0 === x ? (k ? 'wrap' : void 0) : x,
                            R = e.grow,
                            L = e.shrink,
                            T = e.flex,
                            M = void 0 === T ? (R || L ? `${R ? 1 : 0} ${L ? 1 : 0} auto` : void 0) : T,
                            I = e.style,
                            O = e.children,
                            H = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) ((a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                return r;
                            })(e, ia);
                        const W = (0, n.useMemo)(() => {
                                const e = { mt: i, mr: c, mb: d, ml: E },
                                    t = ((e) =>
                                        _a.reduce((t, a) => {
                                            const u = e[a];
                                            return u && 'number' != typeof u ? t.concat(ca[!0 === u ? 'MD' : u][a]) : t;
                                        }, []))(e),
                                    r = ((e) =>
                                        _a.reduce((t, a) => {
                                            const u = e[a];
                                            return ('number' == typeof u && (t[da[a]] = u + 'rem'), t);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, I, r, {
                                        width: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        height: void 0 !== u && 'number' == typeof u ? u + 'rem' : u,
                                        flex: M,
                                        alignSelf: y,
                                        display: b || P ? 'flex' : void 0,
                                        flexDirection: b,
                                        flexWrap: N,
                                        justifyContent: w,
                                        alignItems: P,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [a, u, i, c, d, E, I, M, y, b, N, w, P]),
                            G = W.computedStyle,
                            U = W.computedClassNames;
                        return o().createElement('div', la({ className: D()(sa.base, ...U, t), style: G }, H), O);
                    });
                var Ea = a(280),
                    ga = a(3532),
                    pa = a.n(ga);
                const Aa = {
                        'paragraph-P10': 'Text_paragraph-P10_2c',
                        'paragraph-P12': 'Text_paragraph-P12_22',
                        'paragraph-P14': 'Text_paragraph-P14_a7',
                        'paragraph-P16': 'Text_paragraph-P16_90',
                        'paragraph-P18': 'Text_paragraph-P18_50',
                        'paragraph-P24': 'Text_paragraph-P24_33',
                        'heading-H14': 'Text_heading-H14_8b',
                        'heading-H15': 'Text_heading-H15_9e',
                        'heading-H18': 'Text_heading-H18_b7',
                        'heading-H20R': 'Text_heading-H20R_f6',
                        'heading-H22': 'Text_heading-H22_27',
                        'heading-H24R': 'Text_heading-H24R_be',
                        'heading-H24': 'Text_heading-H24_0c',
                        'heading-H28': 'Text_heading-H28_78',
                        'heading-H36': 'Text_heading-H36_32',
                        'heading-H56': 'Text_heading-H56_c3',
                        'heading-H73': 'Text_heading-H73_8f',
                        'heading-H144': 'Text_heading-H144_a9',
                        BLACK_REAL: 'Text_BLACK_REAL_30',
                        WHITE_REAL: 'Text_WHITE_REAL_bc',
                        WHITE: 'Text_WHITE_62',
                        WHITE_ORANGE: 'Text_WHITE_ORANGE_54',
                        WHITE_SPANISH: 'Text_WHITE_SPANISH_df',
                        PAR: 'Text_PAR_15',
                        PAR_SECONDARY: 'Text_PAR_SECONDARY_5d',
                        PAR_TERTIARY: 'Text_PAR_TERTIARY_c9',
                        INFO_RED: 'Text_INFO_RED_30',
                        RED: 'Text_RED_66',
                        RED_DARK: 'Text_RED_DARK_d8',
                        YELLOW: 'Text_YELLOW_ed',
                        ORANGE: 'Text_ORANGE_be',
                        CREAM: 'Text_CREAM_57',
                        BROWN: 'Text_BROWN_18',
                        GREEN_BRIGHT: 'Text_GREEN_BRIGHT_3f',
                        GREEN: 'Text_GREEN_e3',
                        GREEN_DARK: 'Text_GREEN_DARK_f1',
                        BLUE_BOOSTER: 'Text_BLUE_BOOSTER_21',
                        BLUE_TEAMKILLER: 'Text_BLUE_TEAMKILLER_ab',
                        CRED: 'Text_CRED_f7',
                        GOLD: 'Text_GOLD_28',
                        BOND: 'Text_BOND_be',
                        PROM: 'Text_PROM_65',
                    },
                    ba = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Ca() {
                    return (
                        (Ca =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Ca.apply(this, arguments)
                    );
                }
                Object.keys(ta());
                const ha = Object.keys(pa()),
                    va = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Da = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    fa = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ba = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    Fa =
                        (Object.keys(Ba),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': va,
                            'heading-H36': va,
                            'heading-H28': Da,
                            'heading-H24': Da,
                            'heading-H24R': Da,
                            'heading-H22': Da,
                            'heading-H20R': Da,
                            'heading-H18': Da,
                            'heading-H15': fa,
                            'heading-H14': fa,
                            'paragraph-P24': Da,
                            'paragraph-P18': Da,
                            'paragraph-P16': Da,
                            'paragraph-P14': fa,
                            'paragraph-P12': fa,
                            'paragraph-P10': fa,
                        }),
                    wa =
                        (Object.keys(Fa),
                        (e) =>
                            e
                                ? ((e) => ha.includes(e))(e)
                                    ? { colorClassName: Aa[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    Sa = oa((e) => {
                        let t = e.text,
                            a = e.variant,
                            u = e.className,
                            r = e.color,
                            s = e.m,
                            i = e.mt,
                            l = void 0 === i ? s : i,
                            c = e.mr,
                            _ = void 0 === c ? s : c,
                            d = e.mb,
                            m = void 0 === d ? s : d,
                            E = e.ml,
                            g = void 0 === E ? s : E,
                            p = e.style,
                            A = e.format,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) ((a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                return r;
                            })(e, ba);
                        const C = (0, n.useMemo)(() => {
                                const e = wa(r),
                                    t = e.colorClassName,
                                    a = e.colorStyle,
                                    u = void 0 === a ? {} : a;
                                return { computedStyle: Object.assign({}, p, u), colorClassName: t };
                            }, [p, r]),
                            h = C.computedStyle,
                            v = C.colorClassName;
                        return o().createElement(
                            ma,
                            Ca(
                                {
                                    className: D()(Aa.base, a && Aa[a], v, u),
                                    style: h,
                                    mt: !0 === l ? Fa[a || 'paragraph-P16'].mt : l,
                                    mr: !0 === _ ? Fa[a || 'paragraph-P16'].mr : _,
                                    mb: !0 === m ? Fa[a || 'paragraph-P16'].mb : m,
                                    ml: !0 === g ? Fa[a || 'paragraph-P16'].ml : g,
                                },
                                b,
                            ),
                            void 0 !== A ? o().createElement(Ea.z, Ca({}, A, { text: t })) : t,
                        );
                    });
                var Pa = a(2056);
                const ya = 'StyleDescription_base_b1',
                    ka = 'StyleDescription_title_9e',
                    xa = 'StyleDescription_subTitle_99',
                    Na = 'StyleDescription_subTitleTextWrapper_36',
                    Ra = 'StyleDescription_subTitleText_c8',
                    La = 'StyleDescription_infoIcon_30',
                    Ta = 'StyleDescription_remark_0e',
                    Ma = 'StyleDescription_lockIcon_6e';
                function Ia(e, t, a, u, r, n, o) {
                    try {
                        var s = e[n](o),
                            i = s.value;
                    } catch (e) {
                        return void a(e);
                    }
                    s.done ? t(i) : Promise.resolve(i).then(u, r);
                }
                function Oa(e) {
                    return function () {
                        var t = this,
                            a = arguments;
                        return new Promise(function (u, r) {
                            var n = e.apply(t, a);
                            function o(e) {
                                Ia(n, u, r, o, s, 'next', e);
                            }
                            function s(e) {
                                Ia(n, u, r, o, s, 'throw', e);
                            }
                            o(void 0);
                        });
                    };
                }
                const Ha = R.strings.battle_pass.progression.extraChapterWidget,
                    Wa = (0, te.Pi)(({ className: e, vehicleName: t }) => {
                        const a = tt().model,
                            u = a.extraChapterWidget,
                            r = a.root,
                            s = a.chapterCharacter,
                            i = u.get().marathonRewardId,
                            l = r.get().isBattlePassPurchased,
                            c = (0, n.useRef)(null),
                            _ = (0, n.useCallback)(
                                Oa(function* () {
                                    yield (0, U.Eu)();
                                    c.current;
                                }),
                                [],
                            );
                        var d;
                        return (
                            (d = () => (
                                _(),
                                engine.on('clientResized', _),
                                () => {
                                    engine.off('clientResized', _);
                                }
                            )),
                            (0, n.useEffect)(d, []),
                            o().createElement(
                                'div',
                                { className: D()(ya, e) },
                                o().createElement(Sa, { text: s.get().tankman, className: ka }),
                                i &&
                                    o().createElement(
                                        Pa.u,
                                        {
                                            contentId: R.views.lobby.battle_pass.tooltips.RandomQuestTooltip('resId'),
                                            args: { tokenID: i },
                                        },
                                        o().createElement(
                                            'div',
                                            { className: xa },
                                            o().createElement(
                                                'div',
                                                { className: Na },
                                                o().createElement(
                                                    'div',
                                                    { className: Ra, ref: c },
                                                    o().createElement(Sa, {
                                                        text: Ha.styleSubTitle(),
                                                        format: { binding: { vehicleName: t } },
                                                    }),
                                                ),
                                            ),
                                            o().createElement('div', { className: La }),
                                        ),
                                    ),
                                !l &&
                                    o().createElement(
                                        'div',
                                        { className: Ta },
                                        o().createElement('div', { className: Ma }),
                                        o().createElement('div', null, Ha.styleRemark()),
                                    ),
                            )
                        );
                    }),
                    Ga = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Ua = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function $a(e) {
                    let t = '';
                    for (let a = Ua.length - 1; a >= 0; a--) for (; e >= Ua[a]; ) ((t += Ga[a]), (e -= Ua[a]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const za = 'VehicleInfo_base_45',
                    Va = 'VehicleInfo_type_2e',
                    ja = ({ vehicleLvl: e, vehicleName: t, vehicleType: a, isElite: u, classNames: r }) =>
                        o().createElement(
                            'div',
                            { className: D()(za, null == r ? void 0 : r.base) },
                            $a(e),
                            o().createElement('div', {
                                className: D()(Va, null == r ? void 0 : r.type),
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${(0, ae.BN)(a)}${u ? '_elite' : ''}`)})`,
                                },
                            }),
                            t,
                        ),
                    Xa = R.strings.battle_pass.progression.extraChapterWidget,
                    Ya = (0, te.Pi)(() => {
                        const e = tt(),
                            t = e.model.extraChapterMainRewardInfo,
                            a = e.controls,
                            u = t.get(),
                            r = u.vehicleType,
                            n = u.isElite,
                            s = u.vehicleName,
                            i = u.vehicleShortName,
                            l = u.vehicleLvl,
                            c = { backgroundImage: `url(R.images.gui.maps.icons.flags.c_600x450.${u.vehicleNation})` },
                            _ = P().mediaSize > F.Medium ? 14 : 12,
                            d = s.length > _ ? i : s;
                        return o().createElement(
                            'div',
                            { className: Ct },
                            o().createElement('div', { className: ht }),
                            o().createElement(
                                'div',
                                { className: Dt },
                                o().createElement('div', { className: Ft, style: c }),
                                o().createElement('div', { className: ft }, Xa.vehicleCaption()),
                                o().createElement(ja, {
                                    classNames: { base: wt },
                                    vehicleLvl: l,
                                    vehicleName: d,
                                    vehicleType: r,
                                    isElite: n,
                                }),
                            ),
                            o().createElement(Jt, {
                                classNames: { separatorBg: St },
                                onPreviewIconClick: a.openPreview,
                            }),
                            o().createElement(
                                'div',
                                { className: vt },
                                o().createElement('div', { className: Bt }, Xa.styleCaption()),
                                o().createElement(Wa, { className: Pt, vehicleName: d }),
                            ),
                        );
                    }),
                    qa = {
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
                        base__disabled: 'CButton_base__disabled_d9',
                        back: 'CButton_back_e5',
                        texture: 'CButton_texture_fe',
                        state: 'CButton_state_11',
                        base__focus: 'CButton_base__focus_83',
                        stateHighlightHover: 'CButton_stateHighlightHover_ff',
                        stateHighlightActive: 'CButton_stateHighlightActive_35',
                        stateDisabled: 'CButton_stateDisabled_54',
                        base__firstHover: 'CButton_base__firstHover_d5',
                        base__highlightActive: 'CButton_base__highlightActive_b2',
                        content: 'CButton_content_cc',
                    };
                let Ka, Za;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(Ka || (Ka = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(Za || (Za = {})));
                const Qa = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: u,
                    disabled: r,
                    mixClass: s,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: d,
                    onMouseUp: m,
                    onMouseLeave: E,
                    onClick: g,
                }) => {
                    const p = (0, n.useRef)(null),
                        A = (0, n.useState)(a),
                        b = A[0],
                        C = A[1],
                        h = (0, n.useState)(!1),
                        v = h[0],
                        f = h[1],
                        B = (0, n.useState)(!1),
                        F = B[0],
                        w = B[1],
                        S = (0, n.useCallback)(() => {
                            r || (p.current && (p.current.focus(), C(!0)));
                        }, [r]),
                        P = (0, n.useCallback)(
                            (e) => {
                                b && null !== p.current && !p.current.contains(e.target) && C(!1);
                            },
                            [b],
                        ),
                        y = (0, n.useCallback)(
                            (e) => {
                                r || (g && g(e));
                            },
                            [r, g],
                        ),
                        k = (0, n.useCallback)(
                            (e) => {
                                r || (null !== i && (0, ee.G)(i), c && c(e), w(!0));
                            },
                            [r, i, c],
                        ),
                        x = (0, n.useCallback)(
                            (e) => {
                                _ && _(e);
                            },
                            [_],
                        ),
                        N = (0, n.useCallback)(
                            (e) => {
                                r || (m && m(e), f(!1));
                            },
                            [r, m],
                        ),
                        L = (0, n.useCallback)(
                            (e) => {
                                r || (null !== l && (0, ee.G)(l), d && d(e), a && S(), f(!0));
                            },
                            [r, l, d, S, a],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                r || (E && E(e), f(!1));
                            },
                            [r, E],
                        ),
                        M = D()(
                            qa.base,
                            qa[`base__${u}`],
                            {
                                [qa.base__disabled]: r,
                                [qa[`base__${t}`]]: t,
                                [qa.base__focus]: b,
                                [qa.base__highlightActive]: v,
                                [qa.base__firstHover]: F,
                            },
                            s,
                        ),
                        I = D()(qa.state, qa.state__default);
                    return (
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', P),
                                () => {
                                    document.removeEventListener('mousedown', P);
                                }
                            ),
                            [P],
                        ),
                        (0, n.useEffect)(() => {
                            C(a);
                        }, [a]),
                        o().createElement(
                            'div',
                            {
                                ref: p,
                                className: M,
                                onMouseEnter: k,
                                onMouseMove: x,
                                onMouseUp: N,
                                onMouseDown: L,
                                onMouseLeave: T,
                                onClick: y,
                            },
                            u !== Ka.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: qa.back }),
                                    o().createElement('span', { className: qa.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: I },
                                o().createElement('span', { className: qa.stateDisabled }),
                                o().createElement('span', { className: qa.stateHighlightHover }),
                                o().createElement('span', { className: qa.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: qa.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Qa.defaultProps = { type: Ka.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Ja = (0, n.memo)(Qa),
                    eu = ['children'];
                function tu() {
                    return (
                        (tu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        tu.apply(this, arguments)
                    );
                }
                const au = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                r = {},
                                n = Object.keys(e);
                            for (u = 0; u < n.length; u++) ((a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                            return r;
                        })(e, eu);
                    return o().createElement(
                        Pa.u,
                        tu(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            a,
                        ),
                        t,
                    );
                };
                function uu() {
                    return (
                        (uu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        uu.apply(this, arguments)
                    );
                }
                const ru = ({ children: e, tooltipArgs: t, className: a }) => {
                        if (!t) return e;
                        const u = o().createElement('div', { className: a }, e);
                        if (t.header || t.body) return o().createElement(ce.i, t, u);
                        const r = t.contentId,
                            n = t.args,
                            s = null == n ? void 0 : n.contentId;
                        return r || s
                            ? o().createElement(Pa.u, uu({}, t, { contentId: r || s }), u)
                            : o().createElement(au, t, u);
                    },
                    nu = 'Footer_base_96',
                    ou = 'Footer_light_53',
                    su = 'Footer_light__opacityMode1_53',
                    iu = 'Footer_light__opacityMode2_14',
                    lu = 'Footer_light__opacityMode3_5c',
                    cu = 'Footer_button_2a',
                    _u = 'Footer_button__buyBp_c9',
                    du = 'Footer_button__medium_23',
                    mu = 'Footer_button__large_3f',
                    Eu = 'Footer_labelContainer_bf',
                    gu = 'Footer_labelHeader_ad',
                    pu = 'Footer_label_61',
                    Au = 'Footer_days_3d',
                    bu = 'Footer_blink_5d',
                    Cu = R.strings.battle_pass.progression,
                    hu = R.strings.battle_pass.tooltips.footerBuyBtn;
                let vu, Du;
                (!(function (e) {
                    ((e.Red = 'red'), (e.Green = 'green'), (e.None = ''));
                })(vu || (vu = {})),
                    (function (e) {
                        ((e.Inactive = 'Inactive'), (e.Paused = 'Paused'));
                    })(Du || (Du = {})));
                const fu = (0, te.Pi)(() => {
                        const e = tt(),
                            t = e.model,
                            a = e.controls,
                            u = P().mediaSize,
                            r = t.root.get(),
                            n = r.isSeasonEndingSoon,
                            s = r.expireTimeStr,
                            i = r.chapterState,
                            l = r.isBattlePassPurchased,
                            c = r.isWalletAvailable,
                            _ = i === ot.Completed,
                            d = i === ot.Active || _,
                            m = i !== ot.Active,
                            E = u <= F.Small ? Za.small : Za.medium,
                            g = l ? Cu.episodeBuyDescr() : Cu.battlePassBuyDescr(),
                            p = n ? Cu.seasonEndingDescr() : g;
                        return o().createElement(
                            'div',
                            { className: nu },
                            l
                                ? o().createElement(
                                      o().Fragment,
                                      null,
                                      o().createElement('div', { className: D()(ou, iu) }),
                                      o().createElement(
                                          'div',
                                          { className: Eu },
                                          o().createElement(
                                              'div',
                                              { className: pu },
                                              o().createElement(Sa, { text: p }),
                                              n && o().createElement(Sa, { text: s, className: Au }),
                                          ),
                                          o().createElement(
                                              ce.i,
                                              {
                                                  body: R.strings.battle_pass.progression.episodeBuyBtnTooltipDisabled(),
                                                  isEnabled: m,
                                              },
                                              o().createElement(
                                                  'div',
                                                  { className: gu },
                                                  o().createElement(
                                                      ru,
                                                      {
                                                          tooltipArgs: {
                                                              contentId:
                                                                  R.views.lobby.battle_pass.tooltips.BuyStagesFooterTooltipView(
                                                                      'resId',
                                                                  ),
                                                              args: { isActive: !0 },
                                                              isEnabled: !m,
                                                          },
                                                      },
                                                      o().createElement(
                                                          Ja,
                                                          {
                                                              type: Ka.main,
                                                              size: E,
                                                              mixClass: D()(cu, du),
                                                              onClick: a.onBuyStages,
                                                              disabled: m || !c,
                                                          },
                                                          n && !m && o().createElement('div', { className: bu }),
                                                          o().createElement(Sa, { text: Cu.episodeBuyBtn() }),
                                                      ),
                                                  ),
                                              ),
                                          ),
                                      ),
                                  )
                                : o().createElement(
                                      o().Fragment,
                                      null,
                                      o().createElement('div', { className: D()(ou, d ? lu : su) }),
                                      o().createElement(
                                          'div',
                                          { className: Eu },
                                          o().createElement(
                                              'div',
                                              { className: pu },
                                              o().createElement(Sa, { text: p }),
                                              n && o().createElement(Sa, { text: s, className: Au }),
                                          ),
                                          o().createElement(
                                              'div',
                                              { className: gu },
                                              o().createElement(
                                                  ce.i,
                                                  { body: hu.battlePass.descr() },
                                                  o().createElement(
                                                      Ja,
                                                      {
                                                          type: Ka.main,
                                                          size: E,
                                                          mixClass: D()(cu, mu, d && _u),
                                                          onClick: a.onBuyBP,
                                                          disabled: !c,
                                                      },
                                                      n && o().createElement('div', { className: bu }),
                                                      o().createElement(Sa, { text: Cu.battlePassBuyBtn() }),
                                                  ),
                                              ),
                                              d &&
                                                  !_ &&
                                                  o().createElement(
                                                      ru,
                                                      {
                                                          tooltipArgs: {
                                                              contentId:
                                                                  R.views.lobby.battle_pass.tooltips.BuyStagesFooterTooltipView(
                                                                      'resId',
                                                                  ),
                                                              args: { isActive: !1 },
                                                          },
                                                      },
                                                      o().createElement(
                                                          Ja,
                                                          {
                                                              type: Ka.primary,
                                                              size: E,
                                                              mixClass: D()(cu, mu),
                                                              onClick: a.onBuyStages,
                                                              disabled: !0,
                                                          },
                                                          o().createElement(Sa, { text: Cu.episodeBuyBtn() }),
                                                      ),
                                                  ),
                                          ),
                                      ),
                                  ),
                        );
                    }),
                    Bu = 'display',
                    Fu = 'enabled',
                    wu = 'enabled_change';
                function Su(e, t, a) {
                    const u = (0, n.useContext)(p);
                    let r = Object.entries(u).filter(([e, t]) => !0 === t && e in c);
                    return (
                        a && (r = r.filter((e) => a.includes(e[0]))),
                        e.reduce((e, a) => {
                            const u = r.map((e) =>
                                D()(t[((e, t) => e + '__' + t)(a, e[0])], t[((e, t) => e + (0, ae.e)(t))(a, e[0])]),
                            );
                            return ((e[a] = D()(t[a], ...u)), e);
                        }, {})
                    );
                }
                const Pu = {
                    base: 'ViewDecorator_base_aa',
                    container: 'ViewDecorator_container_98',
                    container__shown: 'ViewDecorator_container__shown_da',
                    leftBlock: 'ViewDecorator_leftBlock_63',
                    leftBlock__small: 'ViewDecorator_leftBlock__small_6a',
                    rightBlock: 'ViewDecorator_rightBlock_71',
                    rightBlock__small: 'ViewDecorator_rightBlock__small_ef',
                    view: 'ViewDecorator_view_9e',
                };
                let yu;
                !(function (e) {
                    ((e.Back = 'back'), (e.Forward = 'forward'), (e.Close = 'close'), (e.Info = 'info'));
                })(yu || (yu = {}));
                (0, n.memo)(
                    ({
                        background: e,
                        rightText: t,
                        leftText: a,
                        children: u,
                        leftSubText: r,
                        leftButtonType: s,
                        onClose: i,
                        onLeftButtonClick: l,
                        isHideButtons: c = !1,
                    }) => {
                        const _ = Su(['leftBlock', 'rightBlock'], Pu),
                            d = (0, n.useState)(c),
                            m = d[0],
                            E = d[1];
                        (0, n.useEffect)(() => E(!c), [c]);
                        const g = (0, n.useMemo)(() => (e ? { backgroundImage: `url('${e}')` } : void 0), [e]),
                            p = D()(Pu.container, m && Pu.container__shown);
                        return o().createElement(
                            'div',
                            { className: Pu.base, style: g },
                            o().createElement(
                                'div',
                                { className: p },
                                Boolean(a) &&
                                    o().createElement(
                                        'div',
                                        { className: _.leftBlock },
                                        o().createElement(nt, {
                                            caption: a || '',
                                            goto: r,
                                            type: s,
                                            side: 'left',
                                            onClick: l,
                                        }),
                                    ),
                                Boolean(t) &&
                                    o().createElement(
                                        'div',
                                        { className: _.rightBlock },
                                        o().createElement(nt, {
                                            caption: t || '',
                                            type: 'close',
                                            side: 'right',
                                            onClick: i,
                                        }),
                                    ),
                            ),
                            o().createElement('div', { className: Pu.view }, u),
                        );
                    },
                );
                var ku = a(6895);
                const xu = 'Header_base_be',
                    Nu = 'Header_content_4d',
                    Ru = 'Header_hintBody_84',
                    Lu = 'Header_infoContainer_8f',
                    Tu = 'Header_titleContainer_9a',
                    Mu = 'Header_topTitleContainer_28',
                    Iu = 'Header_chapterName_c7',
                    Ou = 'Header_expireTime_55',
                    Hu = 'Header_expireCount_19',
                    Wu = 'Header_horizontalSeparator_4d',
                    Gu = 'Header_verticalSeparator_c3',
                    Uu = 'Header_verticalTitleSeparator_21',
                    $u = 'Header_mainTitle_05',
                    zu = 'Header_actionContainer_91',
                    Vu = 'Header_disabledText_b2',
                    ju = 'Header_expireCount__active_4e',
                    Xu = 'Header_gameModes_b5',
                    Yu = 'Header_gameModeIcon_e4',
                    qu = 'Header_tasksIcon_21',
                    Ku = 'Header_gameModesContainer_70',
                    Zu = 'Header_tasksButtonContainer_36',
                    Qu = 'Header_hiddenBattleTypes_5e',
                    Ju = 'Header_titleButtons_80',
                    er = 'Header_titleButtons__small_17',
                    tr = 'Header_titleButton_1d',
                    ar = 'Header_button_e2',
                    ur = 'Header_tasksButton_4c',
                    rr = 'Header_awards_7b',
                    nr = R.strings.battle_pass,
                    or = (0, te.Pi)(() => {
                        const e = P().mediaSize,
                            t = tt(),
                            a = t.model,
                            u = t.controls,
                            r = a.root.get(),
                            s = r.chapterID,
                            i = r.chapterState,
                            l = r.expireTimeStr,
                            c = r.bpcoinCount,
                            _ = r.bpbitCount,
                            d = r.notChosenRewardCount,
                            m = r.isChooseRewardsEnabled,
                            E = r.isBattlePassCompleted,
                            g = r.chapterType,
                            p = r.isSeasonEndingSoon,
                            A = a.collectionEntryPoint.get(),
                            b = A.collectionItemCount,
                            C = A.newCollectionItemCount,
                            h = A.maxCollectionItemCount,
                            v = A.isFirstEnter,
                            f = A.isCollectionsEnabled,
                            B = a.computes.hasChapter(At.Marathon),
                            w = a.computes.hasChapter(At.Resource),
                            S = a.computes.getAvailableBattleTypes(),
                            y = nr.chapter.fullName.quoted.$num(s),
                            k = e < F.Medium ? Za.small : Za.medium,
                            x = e > F.ExtraSmall,
                            N = i === ot.NotStarted || i === ot.Paused,
                            L = (0, ae.uF)(nr.progression.header.chapter.status(), { chapterName: y }),
                            T = ((e, t, a) => {
                                switch (e) {
                                    case ot.Paused:
                                    case ot.NotStarted:
                                        return o().createElement(
                                            ce.i,
                                            { body: nr.tooltips.footerBuyBtn.activateChapter.descr() },
                                            o().createElement(
                                                'div',
                                                null,
                                                o().createElement('div', {
                                                    className: Ru,
                                                    id: 'chapter-header-trigger',
                                                }),
                                                o().createElement(
                                                    Ja,
                                                    { type: Ka.primary, size: t, mixClass: ar, onClick: a },
                                                    o().createElement(Sa, { text: nr.chapter.activateChapter() }),
                                                ),
                                            ),
                                        );
                                    case ot.Disabled:
                                        return o().createElement(Sa, {
                                            text: nr.progression.battlePassDisabled(),
                                            className: Vu,
                                        });
                                    default:
                                        return;
                                }
                            })(i, k, u.onAction),
                            M = ((e, t) => {
                                const a = J('tutorialModel.effects.items').filter((a) => {
                                    if (!a) return !1;
                                    const u = a.value,
                                        r = window.__featureId.toString();
                                    return u.componentId === e && u.type === t && u.viewId === r;
                                });
                                if (0 === a.length) return null;
                                const u = Object.assign({}, a[0].value);
                                return {
                                    effect: u,
                                    completeEffect: () => {
                                        (tutorialModel.onEffectCompleted({
                                            componentId: e,
                                            viewId: window.__featureId.toFixed(0),
                                            effectType: t,
                                            effectBuilder: u.builder,
                                        }),
                                            t === Bu && window.tutorialApi && window.tutorialApi.updateComponents());
                                    },
                                };
                            })('ChapterHeaderTrigger', Fu);
                        (0, n.useEffect)(
                            () =>
                                W(() => {
                                    null !== M && N && M.completeEffect();
                                }),
                            [M, N],
                        );
                        const I = ((e, t) => {
                            const a = J('tutorialModel.triggers.items').filter((a) => {
                                if (!a) return !1;
                                const u = a.value,
                                    r = u.triggers.filter((e) => e.value === t);
                                return u.componentId === e && r.length > 0;
                            });
                            return 0 === a.length
                                ? null
                                : window.tutorialModel.foundComponents.items.some((t) => t.value.componentId === e)
                                  ? {
                                        trigger: a[0].value,
                                        runTrigger: (a) => {
                                            window.tutorialModel.onTriggerActivated({
                                                componentId: e,
                                                triggerType: t,
                                                state: a,
                                            });
                                        },
                                    }
                                  : null;
                        })('ChapterHeaderTrigger', wu);
                        return (
                            (0, n.useEffect)(() => {
                                I && N && I.runTrigger(!0);
                            }, [N, I]),
                            o().createElement(
                                'div',
                                { className: xu },
                                o().createElement(
                                    'div',
                                    { className: Tu },
                                    o().createElement(
                                        'div',
                                        { className: Mu },
                                        o().createElement(Sa, { text: L, className: Iu }),
                                        o().createElement('div', { className: Uu }),
                                        o().createElement(Sa, { text: nr.progression.header.endDays(), className: Ou }),
                                        o().createElement(Sa, { text: l, className: D()(Hu, p && ju) }),
                                    ),
                                    o().createElement(Sa, { text: nr.progression.header.title.$dyn(i), className: $u }),
                                    T && o().createElement('div', { className: zu }, T),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Nu },
                                    o().createElement(
                                        'div',
                                        { className: Lu },
                                        o().createElement(
                                            'div',
                                            { className: D()(Ju, !x && er) },
                                            o().createElement(
                                                'div',
                                                { className: tr },
                                                o().createElement(nt, {
                                                    caption: nr.progression.about.$dyn(g),
                                                    type: yu.Info,
                                                    onClick: u.onAbout,
                                                }),
                                            ),
                                            o().createElement(
                                                'div',
                                                { className: tr },
                                                o().createElement(nt, {
                                                    caption: nr.howToEarnPoints.title(),
                                                    type: yu.Info,
                                                    onClick: u.onPointsInfo,
                                                }),
                                            ),
                                        ),
                                        x &&
                                            o().createElement(
                                                o().Fragment,
                                                null,
                                                o().createElement('div', { className: Wu }),
                                                o().createElement(
                                                    'div',
                                                    { className: Ku },
                                                    o().createElement(
                                                        ru,
                                                        {
                                                            tooltipArgs: {
                                                                contentId:
                                                                    R.views.lobby.battle_pass.tooltips.BattleTypesTooltipView(
                                                                        'resId',
                                                                    ),
                                                            },
                                                        },
                                                        o().createElement(
                                                            'div',
                                                            { className: Xu },
                                                            S.slice(0, 5).map((e) =>
                                                                o().createElement('div', {
                                                                    className: Yu,
                                                                    key: `game_mode_${e}`,
                                                                    style: {
                                                                        backgroundImage: `url(R.images.gui.maps.icons.battleTypeIcons.c_40x40.c_${e})`,
                                                                    },
                                                                }),
                                                            ),
                                                            S.length > 5 &&
                                                                o().createElement(Sa, {
                                                                    text: nr.progression.header.hiddenBattleTypes(),
                                                                    className: Qu,
                                                                }),
                                                        ),
                                                    ),
                                                    o().createElement('div', { className: Gu }),
                                                    o().createElement('div', { className: qu }),
                                                    o().createElement(
                                                        'div',
                                                        { className: Zu },
                                                        o().createElement(
                                                            ce.i,
                                                            {
                                                                header: nr.progression.btnTasksTooltip.header(),
                                                                body: nr.progression.btnTasksTooltip.body(),
                                                            },
                                                            o().createElement(
                                                                Ja,
                                                                {
                                                                    type: Ka.ghost,
                                                                    size: Za.medium,
                                                                    mixClass: ur,
                                                                    onClick: u.onTasks,
                                                                },
                                                                o().createElement(Sa, {
                                                                    text: nr.progression.btnTasks(),
                                                                }),
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: rr },
                                        o().createElement(ku.Z, {
                                            notChosenRewardCount: d,
                                            pointsCount: _,
                                            coinCount: c,
                                            collectionItemCount: b,
                                            maxCollectionItemCount: h,
                                            newCollectionItemCount: C,
                                            isBPFirstEnter: v,
                                            isCollectionsEnabled: f,
                                            isAwardDisabled: !m,
                                            isPointsLocked: !E,
                                            onPointsClick: u.onBpbit,
                                            onCoinClick: u.onBpcoin,
                                            onTakeRewardsClick: u.onTakeRewards,
                                            onCollectionClick: u.openCollection,
                                            hasMarathon: B,
                                            hasResource: w,
                                        }),
                                    ),
                                ),
                            )
                        );
                    }),
                    sr = {
                        base: 'Progression_base_52',
                        base__marathon: 'Progression_base__marathon_dd',
                        scroll: 'Progression_scroll_25',
                        scroll__hidden: 'Progression_scroll__hidden_62',
                        scrollWrapper: 'Progression_scrollWrapper_3a',
                        wrapper: 'Progression_wrapper_0f',
                        section__last: 'Progression_section__last_4d',
                        divider: 'Progression_divider_4e',
                        dividerContent: 'Progression_dividerContent_82',
                        dividerText: 'Progression_dividerText_8c',
                        progressContainer: 'Progression_progressContainer_7f',
                        progress: 'Progression_progress_c8',
                        progress__inactive: 'Progression_progress__inactive_b8',
                        progressBackground: 'Progression_progressBackground_8c',
                        progressBackground__disabled: 'Progression_progressBackground__disabled_0b',
                        progressBackground__finished: 'Progression_progressBackground__finished_0e',
                        decor: 'Progression_decor_7f',
                        decorBackground: 'Progression_decorBackground_4c',
                        decor__left: 'Progression_decor__left_4e',
                        row: 'Progression_row_2c',
                        row__basic: 'Progression_row__basic_05',
                        bookmark: 'Progression_bookmark_78',
                        bookmark__start: 'Progression_bookmark__start_e7',
                        bookmarkLeftFixed: 'Progression_bookmarkLeftFixed_6c',
                        bookmarkLeftFixed__active: 'Progression_bookmarkLeftFixed__active_3b',
                        bookmarkLeftResponsive: 'Progression_bookmarkLeftResponsive_c3',
                        bookmarkBackground: 'Progression_bookmarkBackground_d6',
                        scrollToButton: 'Progression_scrollToButton_38',
                        scrollToButton__visible: 'Progression_scrollToButton__visible_47',
                        scrollToButton__forward: 'Progression_scrollToButton__forward_18',
                        scrollToButton__backward: 'Progression_scrollToButton__backward_1f',
                        arrowButton: 'Progression_arrowButton_ad',
                        progressionToButton: 'Progression_progressionToButton_3b',
                        progressionToButton__hidden: 'Progression_progressionToButton__hidden_29',
                        progressionToButton__back: 'Progression_progressionToButton__back_a8',
                        progressionToButton__forward: 'Progression_progressionToButton__forward_ce',
                        shadow: 'Progression_shadow_4a',
                        shadow__left: 'Progression_shadow__left_e1',
                        shadow__right: 'Progression_shadow__right_f8',
                        additionalShadow: 'Progression_additionalShadow_69',
                        additionalShadow__active: 'Progression_additionalShadow__active_80',
                        scrollBarPosition: 'Progression_scrollBarPosition_40',
                        fadeOut: 'Progression_fadeOut_7c',
                        fadeIn: 'Progression_fadeIn_1d',
                        fadeInWithScale: 'Progression_fadeInWithScale_74',
                        slideUp: 'Progression_slideUp_a2',
                        scale: 'Progression_scale_a8',
                        rotate: 'Progression_rotate_1c',
                    },
                    ir = (e, t, a) => (a < e ? e : a > t ? t : a),
                    lr = [];
                function cr(e) {
                    const t = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, t.current)(...e), lr)
                    );
                }
                function _r(e, t, a = []) {
                    const u = (0, n.useRef)(0),
                        r = (0, n.useCallback)(() => window.clearInterval(u.current), a || []);
                    (0, n.useEffect)(() => r, [r]);
                    const o = (null != a ? a : []).concat([t]);
                    return [
                        (0, n.useCallback)((a) => {
                            ((u.current = window.setInterval(() => e(a, !0), t)), e(a, !1));
                        }, o),
                        r,
                    ];
                }
                function dr(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return mr(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return mr(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var u = 0;
                        return function () {
                            return u >= e.length ? { done: !0 } : { done: !1, value: e[u++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function mr(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, u = new Array(t); a < t; a++) u[a] = e[a];
                    return u;
                }
                function Er(e, t, a) {
                    const u = (0, n.useMemo)(
                        () =>
                            (function (e, t, a, u) {
                                let r,
                                    n = !1,
                                    o = 0;
                                function s() {
                                    r && clearTimeout(r);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - o;
                                    function _() {
                                        ((o = Date.now()), a.apply(l, i));
                                    }
                                    n ||
                                        (u && !r && _(),
                                        s(),
                                        void 0 === u && c > e
                                            ? _()
                                            : !0 !== t &&
                                              (r = setTimeout(
                                                  u
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : _,
                                                  void 0 === u ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((u = a), (a = t), (t = void 0)),
                                    (i.cancel = function () {
                                        (s(), (n = !0));
                                    }),
                                    i
                                );
                            })(a, e),
                        t,
                    );
                    return ((0, n.useEffect)(() => u.cancel, [u]), u);
                }
                var gr = a(7030);
                let pr;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(pr || (pr = {}));
                const Ar = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    br = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: a,
                        getDirection: u,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const s = (e, a) => {
                            const u = t(e),
                                r = u[0],
                                n = u[1];
                            return ir(r, n, a);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                _ = void 0 === c ? Ar : c,
                                d = (0, n.useRef)(null),
                                m = (0, n.useRef)(null),
                                E = (() => {
                                    const e = (0, n.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        a = (e, a) => {
                                            t(e).set(a, a);
                                        },
                                        u = (e, a) => {
                                            t(e).delete(a);
                                        },
                                        r = (e, ...a) => {
                                            for (var u, r = dr(t(e).values()); !(u = r()).done; ) (0, u.value)(...a);
                                        };
                                    return (0, n.useMemo)(() => ({ on: a, off: u, trigger: r }), []);
                                })(),
                                g = Er(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                p = (0, gr.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (a(t, e), E.trigger('change', e), o && g());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                A = p[0],
                                b = p[1],
                                C = (0, n.useCallback)(
                                    (e, t, a) => {
                                        var u;
                                        const r = A.scrollPosition.get(),
                                            n = (null != (u = A.scrollPosition.goal) ? u : 0) - r;
                                        return s(e, t * a + n + r);
                                    },
                                    [A.scrollPosition],
                                ),
                                h = (0, n.useCallback)(
                                    (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                        const u = d.current;
                                        u &&
                                            b.start({
                                                scrollPosition: s(u, e),
                                                immediate: t,
                                                reset: a,
                                                config: _.animationConfig,
                                                from: { scrollPosition: s(u, A.scrollPosition.get()) },
                                            });
                                    },
                                    [b, _.animationConfig, A.scrollPosition],
                                ),
                                v = (0, n.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            a = m.current;
                                        if (!t || !a) return;
                                        const u = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(a, _.step),
                                            n = C(t, e, u);
                                        h(n);
                                    },
                                    [h, C, _.step],
                                ),
                                D = (0, n.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && v(u(e)),
                                            d.current && E.trigger('mouseWheel', e, A.scrollPosition, t(d.current)));
                                    },
                                    [A.scrollPosition, v, E],
                                ),
                                f = ((e, t = []) => {
                                    const a = (0, n.useRef)(),
                                        u = (0, n.useCallback)((...t) => {
                                            (a.current && a.current(), (a.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, n.useEffect)(
                                            () => () => {
                                                a.current && a.current();
                                            },
                                            [u],
                                        ),
                                        u
                                    );
                                })(
                                    () =>
                                        W(() => {
                                            const e = d.current;
                                            e &&
                                                (h(s(e, A.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [h, A.scrollPosition.goal],
                                ),
                                B = cr(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = s(e, A.scrollPosition.goal);
                                    (t !== A.scrollPosition.goal && h(t, { immediate: !0 }),
                                        E.trigger('recalculateContent'));
                                });
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('resize', f),
                                    () => {
                                        window.removeEventListener('resize', f);
                                    }
                                ),
                                [f],
                            );
                            const F = (0, n.useCallback)((e) => E.trigger('isThumbDraggingChanged', e), [E]);
                            return (0, n.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? r(m.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: _.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: D,
                                    applyScroll: h,
                                    applyStepTo: v,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: b,
                                    animationScroll: A,
                                    recalculateContent: B,
                                    handleIsThumbDragging: F,
                                    events: { on: E.on, off: E.off },
                                }),
                                [A.scrollPosition, h, v, F, E.off, E.on, B, D, b, _.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Cr = br({
                        getBounds: (e) => {
                            var t, a;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (a = e.parentElement) ? void 0 : a.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? pr.Next : pr.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    hr = 'HorizontalBar_base_49',
                    vr = 'HorizontalBar_base__nonActive_82',
                    Dr = 'HorizontalBar_leftButton_5f',
                    fr = 'HorizontalBar_rightButton_03',
                    Br = 'HorizontalBar_track_0d',
                    Fr = 'HorizontalBar_thumb_fd',
                    wr = 'HorizontalBar_rail_32',
                    Sr = 'disable',
                    Pr = { pending: !1, offset: 0 },
                    yr = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    kr = () => {},
                    xr = (e, t) => Math.max(20, e.offsetWidth * t),
                    Nr = (0, n.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = yr, onDrag: u = kr }) => {
                        const r = (0, n.useRef)(null),
                            s = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            _ = e.stepTimeout || 100,
                            d = (0, n.useState)(Pr),
                            m = d[0],
                            E = d[1],
                            g = (0, n.useCallback)(
                                (e) => {
                                    (E(e),
                                        c.current &&
                                            u({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [u],
                            ),
                            p = () => {
                                const t = l.current,
                                    a = c.current,
                                    u = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(u && t && a && r)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, u / r),
                                    _ = ir(0, 1, n / (r - u)),
                                    d = (t.offsetWidth - xr(t, o)) * _;
                                ((a.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (s.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    s.current.classList.add(Sr),
                                                    void i.current.classList.remove(Sr)
                                                );
                                            if (
                                                ((t = l.current),
                                                (a = c.current),
                                                e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(Sr),
                                                    void i.current.classList.add(Sr)
                                                );
                                            var t, a;
                                            (s.current.classList.remove(Sr), i.current.classList.remove(Sr));
                                        }
                                    })(d));
                            },
                            A = cr(() => {
                                ((() => {
                                    const t = c.current,
                                        a = l.current,
                                        u = e.getWrapperSize(),
                                        n = e.getContainerSize();
                                    if (!(n && t && u && a)) return;
                                    const o = Math.min(1, u / n);
                                    ((t.style.width = `${xr(a, o)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === o ? r.current.classList.add(vr) : r.current.classList.remove(vr)));
                                })(),
                                    p());
                            });
                        ((0, n.useEffect)(() => W(A)),
                            (0, n.useEffect)(
                                () =>
                                    W(() => {
                                        const t = () => {
                                            p();
                                        };
                                        let a = kr;
                                        const u = () => {
                                            (a(), (a = W(A)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', A),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', u),
                                            () => {
                                                (a(),
                                                    e.events.off('recalculateContent', A),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', u));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, n.useEffect)(() => {
                                if (!m.pending) return;
                                const t = (t) => {
                                        var a;
                                        const r = e.contentRef.current;
                                        if (!r) return;
                                        const n = l.current,
                                            o = c.current;
                                        if (!r || !n || !o) return;
                                        const s = t.screenX - m.offset - n.getBoundingClientRect().x,
                                            i = (s / n.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            u({ type: 'dragging', thumb: o, thumbOffset: s, contentOffset: i }));
                                    },
                                    a = () => {
                                        (window.removeEventListener('mousemove', t), g(Pr));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', a),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', a));
                                    }
                                );
                            }, [e, m.offset, m.pending, u, g]));
                        const b = _r((t) => e.applyStepTo(t), _, [e]),
                            C = b[0],
                            h = b[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const v = (e) => {
                            e.target.classList.contains(Sr) || (0, ee.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: D()(hr, t.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: D()(Dr, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Sr) ||
                                        0 !== e.button ||
                                        ((0, ee.G)('play'), C(pr.Next));
                                },
                                onMouseUp: h,
                                ref: s,
                                onMouseEnter: v,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: D()(Br, t.track),
                                    onMouseDown: (t) => {
                                        const u = c.current;
                                        if (u && 0 === t.button)
                                            if (((0, ee.G)('play'), t.target === u))
                                                g({ pending: !0, offset: t.screenX - u.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const u = c.current,
                                                        r = e.contentRef.current;
                                                    if (!u || !r) return;
                                                    const n = a(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + n * t);
                                                })(t.screenX > u.getBoundingClientRect().x ? pr.Prev : pr.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: v,
                                },
                                o().createElement('div', { ref: c, className: D()(Fr, t.thumb) }),
                                o().createElement('div', { className: D()(wr, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: D()(fr, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Sr) ||
                                        0 !== e.button ||
                                        ((0, ee.G)('play'), C(pr.Prev));
                                },
                                onMouseUp: h,
                                ref: i,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    Rr = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Lr = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: u,
                        areaClassName: r,
                        classNames: s,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, n.useMemo)(() => {
                                const e = u || {};
                                return Object.assign({}, e, { base: D()(Rr.base, e.base) });
                            }, [u]),
                            d = (0, n.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: D()(Rr.defaultScroll, a), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: D()(Rr.defaultScrollArea, r) },
                                o().createElement(Tr, { className: i, api: d, classNames: s }, e),
                            ),
                            o().createElement(Nr, { getStepByRailClick: l, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    Tr = ({ api: e, className: t, classNames: a, children: u, style: r }) => (
                        (0, n.useEffect)(() => W(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: D()(Rr.base, t), style: r },
                            o().createElement(
                                'div',
                                {
                                    className: D()(Rr.wrapper, null == a ? void 0 : a.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: D()(Rr.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    u,
                                ),
                            ),
                        )
                    );
                ((Tr.Bar = Nr),
                    (Tr.Default = Lr),
                    (Tr.SeniorityAwards = ({ api: e, className: t, classNames: a, children: u }) => (
                        (0, n.useEffect)(() => W(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: D()(Rr.base, t) },
                            o().createElement(
                                'div',
                                { className: D()(Rr.wrapper, null == a ? void 0 : a.wrapper), ref: e.wrapperRef },
                                o().createElement(
                                    'div',
                                    { className: D()(Rr.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    u,
                                ),
                            ),
                        )
                    )));
                const Mr = br({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? pr.Next : pr.Prev),
                    }),
                    Ir = 'VerticalBar_base_f3',
                    Or = 'VerticalBar_base__nonActive_42',
                    Hr = 'VerticalBar_topButton_d7',
                    Wr = 'VerticalBar_bottomButton_06',
                    Gr = 'VerticalBar_track_df',
                    Ur = 'VerticalBar_thumb_32',
                    $r = 'VerticalBar_rail_43',
                    zr = 'disable',
                    Vr = () => {},
                    jr = { pending: !1, offset: 0 },
                    Xr = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Yr = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    qr = (e, t) => Math.max(20, e.offsetHeight * t),
                    Kr = (0, n.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = Xr, onDrag: u = Vr }) => {
                        const r = (0, n.useRef)(null),
                            s = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            _ = e.stepTimeout || 100,
                            d = (0, n.useState)(jr),
                            m = d[0],
                            E = d[1],
                            g = (0, n.useCallback)(
                                (e) => {
                                    (E(e),
                                        c.current &&
                                            u({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [u],
                            ),
                            p = cr(() => {
                                const t = c.current,
                                    a = l.current,
                                    u = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(u && n && t && a)) return;
                                const o = Math.min(1, u / n);
                                return (
                                    (t.style.height = `${qr(a, o)}px`),
                                    t.classList.add(Ur),
                                    r.current &&
                                        (1 === o ? r.current.classList.add(Or) : r.current.classList.remove(Or)),
                                    o
                                );
                            }),
                            A = cr(() => {
                                const t = l.current,
                                    a = c.current,
                                    u = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(u && t && a && r)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, u / r),
                                    _ = ir(0, 1, n / (r - u)),
                                    d = (t.offsetHeight - qr(t, o)) * _;
                                ((a.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (s.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    s.current.classList.add(zr),
                                                    void i.current.classList.remove(zr)
                                                );
                                            if (
                                                ((t = l.current),
                                                (a = c.current),
                                                e - (t.offsetHeight - a.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(zr),
                                                    void i.current.classList.add(zr)
                                                );
                                            var t, a;
                                            (s.current.classList.remove(zr), i.current.classList.remove(zr));
                                        }
                                    })(d));
                            }),
                            b = cr(() => {
                                Yr(e, () => {
                                    (p(), A());
                                });
                            });
                        ((0, n.useEffect)(() => W(b)),
                            (0, n.useEffect)(() => {
                                const t = () => {
                                    Yr(e, () => {
                                        A();
                                    });
                                };
                                let a = Vr;
                                const u = () => {
                                    (a(), (a = W(b)));
                                };
                                return (
                                    e.events.on('recalculateContent', b),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', u),
                                    () => {
                                        (a(),
                                            e.events.off('recalculateContent', b),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', u));
                                    }
                                );
                            }, [e]),
                            (0, n.useEffect)(() => {
                                if (!m.pending) return;
                                const t = (t) => {
                                        Yr(e, (a) => {
                                            const r = l.current,
                                                n = c.current,
                                                o = e.getContainerSize();
                                            if (!r || !n || !o) return;
                                            const s = t.screenY - m.offset - r.getBoundingClientRect().y,
                                                i = (s / r.offsetHeight) * o;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: a.scrollTop },
                                            }),
                                                u({ type: 'dragging', thumb: n, thumbOffset: s, contentOffset: i }));
                                        });
                                    },
                                    a = () => {
                                        (window.removeEventListener('mousemove', t),
                                            e.handleIsThumbDragging(!1),
                                            g(jr));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', a),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', a));
                                    }
                                );
                            }, [e, m.offset, m.pending, u, g]));
                        const C = _r((t) => e.applyStepTo(t), _, [e]),
                            h = C[0],
                            v = C[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const f = (e) => {
                            e.target.classList.contains(zr) || (0, ee.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: D()(Ir, t.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: D()(Hr, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(zr) ||
                                        0 !== e.button ||
                                        ((0, ee.G)('play'), h(pr.Next));
                                },
                                ref: s,
                                onMouseEnter: f,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: D()(Gr, t.track),
                                    onMouseDown: (t) => {
                                        const u = c.current;
                                        if (u && 0 === t.button)
                                            if (((0, ee.G)('play'), t.target === u))
                                                (e.handleIsThumbDragging(!0),
                                                    g({
                                                        pending: !0,
                                                        offset: t.screenY - u.getBoundingClientRect().y,
                                                    }));
                                            else {
                                                ((t) => {
                                                    c.current &&
                                                        Yr(e, (u) => {
                                                            if (!u) return;
                                                            const r = a(e),
                                                                n = e.clampPosition(u, u.scrollTop + r * t);
                                                            e.applyScroll(n);
                                                        });
                                                })(t.screenY > u.getBoundingClientRect().y ? pr.Prev : pr.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: f,
                                },
                                o().createElement('div', { ref: c, className: t.thumb }),
                                o().createElement('div', { className: D()($r, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: D()(Wr, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(zr) ||
                                        0 !== e.button ||
                                        ((0, ee.G)('play'), h(pr.Prev));
                                },
                                onMouseUp: v,
                                ref: i,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    Zr = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Qr = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: u,
                        areaClassName: r,
                        scrollClassName: s,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, n.useMemo)(() => {
                                const e = u || {};
                                return Object.assign({}, e, { base: D()(Zr.base, e.base) });
                            }, [u]),
                            d = (0, n.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: D()(Zr.defaultScroll, a), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: D()(Zr.area, r) },
                                o().createElement(Jr, { className: s, classNames: i, api: d }, e),
                            ),
                            o().createElement(Kr, { getStepByRailClick: l, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    Jr = ({ className: e, classNames: t, children: a, api: u }) => (
                        (0, n.useEffect)(() => W(u.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: D()(Zr.base, e), ref: u.wrapperRef, onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: D()(Zr.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                a,
                            ),
                        )
                    );
                Jr.Default = Qr;
                const en = { Vertical: r, Horizontal: u };
                'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
                ('undefined' != typeof document && document.documentElement.style,
                    'undefined' != typeof window &&
                        ('ontouchstart' in window || (window.DocumentTouch && (document, window.DocumentTouch))),
                    'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent));
                let tn, an, un, rn, nn, on, sn;
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
                        (e.Currency = 'currency'),
                        (e.TankmenXp = 'tankmenXP'),
                        (e.TankmenXpFactor = 'tankmenXPFactor'),
                        (e.FreeXpFactor = 'freeXPFactor'),
                        (e.BattleToken = 'battleToken'),
                        (e.Entitlements = 'entitlements'),
                        (e.PremiumUniversal = 'premium_universal'),
                        (e.Gold = 'gold'),
                        (e.Credits = 'credits'),
                        (e.Crystal = 'crystal'),
                        (e.FreeXp = 'freeXP'),
                        (e.Premium = 'premium'),
                        (e.PremiumPlus = 'premium_plus'),
                        (e.BattlePassPoints = 'battlePassPoints'),
                        (e.BattlePassSelectToken = 'battlePassSelectToken'),
                        (e.SelectableBonus = 'selectableBonus'),
                        (e.StyleProgressToken = 'styleProgressToken'),
                        (e.TmanToken = 'tmanToken'),
                        (e.NaturalCover = 'naturalCover'),
                        (e.BpCoin = 'bpcoin'),
                        (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (e.BattleBadge = 'dossier_badge'),
                        (e.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                        (e.NewYearFillers = 'ny22Fillers'),
                        (e.NewYearInvoice = 'newYearInvoice'),
                        (e.NewYearToyFragments = 'ny22ToyFragments'),
                        (e.NewYearSlot = 'newYearSlot'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.CollectionItem = 'collectionItem'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.Comp7TokenCouponReward = 'comp7TokenCouponReward'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.CosmicLootboxSilver = 'lootBoxToken'),
                        (e.CosmicLootboxCommon = 'cosmic_2024_2'),
                        (e.Branch = 'branch'),
                        (e.VehicleSelect = 'vehicleSelect'),
                        (e.StyleProgress = 'styleProgress'),
                        (e.ParagonsUnlocks = 'paragonsUnlocks'),
                        (e.LootBoxToken = 'lootBoxToken'),
                        (e.GoldenTicket = 'birthday2025_golden_ticket'),
                        (e.PostStamp = 'giftsystem_4_stamp'),
                        (e.Quests = 'quests'),
                        (e.BlankPersonalMissions_1 = 'freeTokens_0'),
                        (e.BlankPersonalMissions_2 = 'freeTokens_2'),
                        (e.SACoin = 'sacoin'),
                        (e.ArmoryCoin = 'armory_coin'),
                        (e.PremiumPlusUniversal = 'premium_plus_universal'),
                        (e.DogTagType = 'dogTagComponents'),
                        (e.NyPetGoodies = 'nyPetGoodies'),
                        (e.HiddenVehicle = 'hidden_vehicle'),
                        (e.NyStaticDogTag = 'nyStaticDogTag'),
                        (e.Ny26Toys = 'ny26Toys'));
                })(tn || (tn = {})),
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
                            (e.BattleAchievement = 'dossier_achievement'));
                    })(an || (an = {})),
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
                            (e.S48x48 = 's48x48'));
                    })(un || (un = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(rn || (rn = {})),
                    (function (e) {
                        ((e.BATTLE_BOOSTER = 'battleBooster'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                    })(nn || (nn = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(on || (on = {})),
                    (function (e) {
                        ((e.BATTLE_BOOSTER = 'battleBooster'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                    })(sn || (sn = {})));
                var ln = a(2372);
                const cn = [
                        tn.Items,
                        tn.Equipment,
                        tn.Xp,
                        tn.XpFactor,
                        tn.Blueprints,
                        tn.BlueprintsAny,
                        tn.Goodies,
                        tn.Berths,
                        tn.Slots,
                        tn.Tokens,
                        tn.CrewSkins,
                        tn.CrewBooks,
                        tn.Customizations,
                        tn.CreditsFactor,
                        tn.TankmenXp,
                        tn.TankmenXpFactor,
                        tn.FreeXpFactor,
                        tn.BattleToken,
                        tn.Entitlements,
                        tn.PremiumUniversal,
                        tn.NaturalCover,
                        tn.BpCoin,
                        tn.BattlePassSelectToken,
                        tn.BattlaPassFinalAchievement,
                        tn.BattleBadge,
                        tn.BonusX5,
                        tn.CrewBonusX3,
                        tn.NewYearFillers,
                        tn.NewYearInvoice,
                        tn.EpicSelectToken,
                        tn.Comp7TokenWeeklyReward,
                        tn.Comp7TokenCouponReward,
                        tn.BattleBoosterGift,
                        tn.NewYearFillers,
                        tn.NewYearInvoice,
                        tn.LootBoxToken,
                        tn.CosmicLootboxCommon,
                        tn.CosmicLootboxSilver,
                        tn.SelectableBonus,
                        tn.GoldenTicket,
                        tn.PostStamp,
                        tn.BlankPersonalMissions_1,
                        tn.BlankPersonalMissions_2,
                        tn.SACoin,
                        tn.PremiumPlusUniversal,
                        tn.NyPetGoodies,
                        tn.HiddenVehicle,
                    ],
                    _n = [tn.Gold, tn.Credits, tn.Crystal, tn.FreeXp, tn.NewYearToyFragments],
                    dn = [tn.BattlePassPoints],
                    mn = [tn.PremiumPlus, tn.Premium];
                let En;
                !(function (e) {
                    ((e.s16 = '16'),
                        (e.s32 = '32'),
                        (e.s48 = '48'),
                        (e.s66 = '66'),
                        (e.s80 = '80'),
                        (e.s116 = '116'),
                        (e.s296 = '296'),
                        (e.s360 = '360'),
                        (e.s400 = '400'),
                        (e.s600 = '600'));
                })(En || (En = {}));
                const gn = ['engravings', 'backgrounds'],
                    pn = ['engraving', 'background'],
                    An = (e, t = un.Small, a) => {
                        const u = e.name,
                            r = e.type,
                            n = e.value,
                            o = e.icon,
                            s = e.item,
                            i = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case un.S600x450:
                                        return 'c_600x450';
                                    case un.S400x300:
                                        return 'c_400x300';
                                    case un.S296x222:
                                        return 'c_296x222';
                                    case un.S232x174:
                                        return 'c_232x174';
                                    case un.Big:
                                        return 'c_80x80';
                                    case un.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (u) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}_${n}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_plus_${n}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${o}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, t) => {
                                    switch (t) {
                                        case un.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case un.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                                    }
                                })(e, t);
                            case 'entitlements':
                                return 'big' === t
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${o}`;
                            case 'dogTagComponents':
                                return ((e, t, a) => {
                                    const u = gn[e];
                                    if (u) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(u),
                                            n = r.$dyn(a);
                                        return n ? `${n}` : `${r.$dyn(pn[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, t, o);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${o}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${((e) => {
                                    switch (e) {
                                        case un.S600x450:
                                            return 'c_600x450';
                                        case un.S400x300:
                                            return 'c_400x300';
                                        case un.S296x222:
                                            return 'c_296x222';
                                        case un.S232x174:
                                            return 'c_232x174';
                                        case un.S180x135:
                                            return 'big';
                                        case un.Big:
                                        case un.S80x80:
                                            return 'c_80x80';
                                        case un.Small:
                                        case un.S48x48:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(t)}.${o}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.freeXP`;
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                            case 'selectableBonus':
                            case 'groups':
                            case 'lootBoxToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${o}`;
                            case 'nyPetGoodies':
                                return `R.images.new_year.gui.maps.icons.newYear.common.categoriesIcons.${t}.${o}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${o}`;
                            case 'premium_universal':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.premium_plus_universal`;
                            case 'armory_coin':
                                return `R.images.armory_yard.gui.maps.icons.token.sf${((e) => {
                                    switch (e) {
                                        case un.Mini:
                                            return En.s32;
                                        case un.Small:
                                        case un.S48x48:
                                            return En.s48;
                                        case un.S80x80:
                                        case un.Big:
                                            return En.s80;
                                        case un.S128x100:
                                            return En.s116;
                                        case un.S180x135:
                                        case un.S232x174:
                                        case un.S296x222:
                                            return En.s296;
                                        case un.S400x300:
                                            return En.s400;
                                        case un.S600x450:
                                            return En.s600;
                                    }
                                })(t)}`;
                            case 'newYearAlbumsAccess':
                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${t}.albumsAccess`;
                            case 'nyFillers':
                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${t}.fillers`;
                            case 'nyToyFragments':
                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${t}.shards`;
                            case 'newYearSlot':
                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${t}.slot`;
                            case 'hidden_vehicle':
                                return 'R.images.new_year.gui.maps.icons.newYear.common.rewards.vehicles.hidden_vehicle';
                            case 'nyStaticDogTag':
                                return `R.images.new_year.gui.maps.icons.newYear.common.rewards.dogtags.${t}.dogtag_${a}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}`;
                        }
                    },
                    bn = (e, t, a) => {
                        const u = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            u,
                            a,
                        );
                    };
                let Cn, hn;
                (!(function (e) {
                    ((e.Active = 'active'),
                        (e.Paused = 'paused'),
                        (e.Completed = 'completed'),
                        (e.NotStarted = 'notStarted'),
                        (e.Disabled = 'disabled'));
                })(Cn || (Cn = {})),
                    (function (e) {
                        ((e.Default = 'default'), (e.Marathon = 'marathon'), (e.Resource = 'resource'));
                    })(hn || (hn = {})));
                const vn = (e) => {
                    const t = pt[e];
                    return (t || console.warn('Unknown FinalReward key: ', e), t);
                };
                let Dn;
                !(function (e) {
                    ((e.Dragging = 'dragging'), (e.End = 'scrollingToEnd'), (e.Idle = 'idle'));
                })(Dn || (Dn = {}));
                const fn = { type: Dn.Idle };
                let Bn;
                !(function (e) {
                    ((e[(e.MainButton = 0)] = 'MainButton'),
                        (e[(e.AuxiliaryButton = 1)] = 'AuxiliaryButton'),
                        (e[(e.SecondaryButton = 2)] = 'SecondaryButton'),
                        (e[(e.FourthButton = 3)] = 'FourthButton'),
                        (e[(e.FifthButton = 4)] = 'FifthButton'));
                })(Bn || (Bn = {}));
                const Fn = {
                    base: 'ArrowButton_base_8c',
                    base__gray: 'ArrowButton_base__gray_bd',
                    icon: 'ArrowButton_icon_af',
                    icon__4k: 'ArrowButton_icon__4k_23',
                    icon__back: 'ArrowButton_icon__back_28',
                    icon__forward: 'ArrowButton_icon__forward_ff',
                };
                let wn;
                !(function (e) {
                    ((e.Default = 'default'), (e.Gray = 'gray'));
                })(wn || (wn = {}));
                const Sn = ({ onClick: e, direction: t, type: a = wn.Default, className: u, tooltipBody: r }) => {
                        const s = D()(Fn.icon, Fn[`icon__${t}`], 2 === i.O.view.getScale() && Fn.icon__4k),
                            l = (0, n.useCallback)(() => {
                                (0, ee.G)('highlight');
                            }, []),
                            c = (0, n.useCallback)(() => {
                                ((0, ee.G)('bp_slide'), e());
                            }, [e]);
                        return o().createElement(
                            ce.i,
                            { body: r },
                            o().createElement(
                                'div',
                                { className: D()(Fn.base, Fn[`base__${a}`], u), onClick: c, onMouseEnter: l },
                                o().createElement('div', { className: s }),
                            ),
                        );
                    },
                    Pn = 'Bookmark_base_cc',
                    yn = 'Bookmark_container_72',
                    kn = 'Bookmark_container__start_b1',
                    xn = 'Bookmark_container__wide_14',
                    Nn = 'Bookmark_textWrapper_46',
                    Rn = 'Bookmark_withTooltip_58',
                    Ln = 'Bookmark_text_6f',
                    Tn = 'Bookmark_text__basic_01',
                    Mn = 'Bookmark_text__premium_b8',
                    In = 'Bookmark_text__single_a0',
                    On = 'Bookmark_text__wide_4c',
                    Hn = 'Bookmark_text__disappeared_f2',
                    Wn = 'Bookmark_textInner_b4',
                    Gn = 'Bookmark_leftTextLine_0a',
                    Un = 'Bookmark_rightTextLine_37',
                    $n = ({ isWide: e, isDecorated: t }) => {
                        const a = D()(Ln, In, e && On);
                        return o().createElement(
                            'div',
                            { className: a },
                            t && o().createElement('div', { className: Gn }),
                            o().createElement(
                                'div',
                                { className: Wn },
                                R.strings.battle_pass.progression.postProgressionDescr(),
                            ),
                            t && o().createElement('div', { className: Un }),
                        );
                    };
                class zn extends n.PureComponent {
                    render() {
                        const e = this.props,
                            t = e.tooltipBody,
                            a = e.tooltipTitle,
                            u = e.children;
                        return 'string' == typeof t
                            ? o().createElement(
                                  ce.i,
                                  { body: t, header: a },
                                  o().createElement('div', { className: Rn }, u),
                              )
                            : { children: u };
                    }
                }
                const Vn = (0, n.memo)(zn),
                    jn = (0, n.forwardRef)(
                        (
                            {
                                isWide: e = !1,
                                isDisappeared: t = !1,
                                tooltipBody: a,
                                tooltipTitle: u,
                                chapterStep: r,
                                mixClass: s,
                            },
                            i,
                        ) => {
                            const l = (0, n.useRef)(null);
                            (0, n.useImperativeHandle)(i, () => ({
                                width: () => {
                                    const e = l.current;
                                    if (e) {
                                        const t = window.getComputedStyle(e, null).getPropertyValue('width');
                                        return Number(t.split('rem')[0]);
                                    }
                                    return 0;
                                },
                            }));
                            const c = (0, ae.uF)(R.strings.battle_pass.tooltips.postProgress.body(), {
                                    chapterStep: r,
                                }),
                                _ = D()(Pn, s),
                                d = D()(yn, e && xn, !e && kn),
                                m = D()(Ln, Tn, t && Hn),
                                E = D()(Ln, Mn);
                            return o().createElement(
                                'div',
                                { className: _, ref: l },
                                o().createElement(
                                    'div',
                                    { className: d },
                                    e
                                        ? o().createElement(
                                              Vn,
                                              { tooltipBody: a, tooltipTitle: u },
                                              o().createElement($n, { isWide: e, isDecorated: !0 }),
                                          )
                                        : o().createElement(
                                              o().Fragment,
                                              null,
                                              o().createElement(
                                                  'div',
                                                  { className: Nn },
                                                  o().createElement(
                                                      ce.i,
                                                      {
                                                          header: R.strings.battle_pass.tooltips.postProgress.header(),
                                                          body: c,
                                                      },
                                                      o().createElement($n, { isWide: e }),
                                                  ),
                                              ),
                                              o().createElement(
                                                  Pa.u,
                                                  {
                                                      contentId:
                                                          R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView(
                                                              'resId',
                                                          ),
                                                  },
                                                  o().createElement(
                                                      'div',
                                                      { className: E },
                                                      R.strings.battle_pass.progression.premiumProgressionDescr(),
                                                  ),
                                              ),
                                              o().createElement(
                                                  'div',
                                                  { className: m },
                                                  R.strings.battle_pass.progression.baseProgressionDescr(),
                                              ),
                                          ),
                                ),
                            );
                        },
                    ),
                    Xn = 'CrewReward_base_60',
                    Yn = 'CrewReward_baseWrapper_38',
                    qn = 'CrewReward_infoWrapper_6c',
                    Kn = 'CrewReward_crewDescription_93',
                    Zn = 'CrewReward_name_9b',
                    Qn = 'CrewReward_skillWrapper_cd',
                    Jn = 'CrewReward_skillBackground_3f',
                    eo = 'CrewReward_skill_91',
                    to = R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId'),
                    ao = R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                    uo = (0, te.Pi)(() => {
                        const e = tt().model,
                            t = e.chapterCharacter.get(),
                            a = t.tankman,
                            u = t.tooltipId,
                            r = e.computes.getCharacterSkills(),
                            s = to,
                            i = s === to ? ao : void 0,
                            l = (0, n.useMemo)(() => ({ tooltipId: u }), [u]);
                        return o().createElement(
                            Pa.u,
                            {
                                ignoreShowDelay: !0,
                                ignoreMouseClick: !0,
                                contentId: s,
                                decoratorId: i,
                                isEnabled: !0,
                                args: l,
                            },
                            o().createElement(
                                'div',
                                { className: Xn },
                                o().createElement(
                                    'div',
                                    { className: Yn },
                                    o().createElement(
                                        'div',
                                        { className: qn },
                                        o().createElement(
                                            'div',
                                            { className: Kn },
                                            o().createElement('div', { className: Zn }, a),
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: Qn },
                                            o().createElement('div', { className: Jn }),
                                            r.map((e, t) =>
                                                o().createElement('div', {
                                                    className: eo,
                                                    key: t,
                                                    style: {
                                                        backgroundImage: `url('img://gui/maps/icons/battlePass/tooltips/icons/icon_perk_${e}.png')`,
                                                    },
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    });
                let ro, no, oo, so, io;
                (!(function (e) {
                    ((e.left = 'left'), (e.right = 'right'));
                })(ro || (ro = {})),
                    (function (e) {
                        ((e.COMPLETED = 'completed'),
                            (e.IN_PROGRESS = 'inProgress'),
                            (e.NOT_STARTED = 'notStarted'),
                            (e.DISABLED = 'disabled'),
                            (e.COMPLETED_TROPHY_NOT_SELECTED = 'completedTrophyNotSelected'));
                    })(no || (no = {})),
                    (function (e) {
                        ((e.UNLOCK_BIG = 'bp_unlock_big'),
                            (e.UNLOCK_SMALL = 'bp_unlock_small'),
                            (e.IMPROVED_REWARD = 'bp_improved_reward'));
                    })(oo || (oo = {})),
                    (function (e) {
                        ((e.back = 'back'), (e.forward = 'forward'));
                    })(so || (so = {})),
                    (function (e) {
                        ((e.Default = 'default'), (e.Gray = 'gray'));
                    })(io || (io = {})));
                var lo = a(1481);
                const co = 'VehicleInfo_base_b3',
                    _o = 'VehicleInfo_prefix_f6',
                    mo = 'VehicleInfo_type_1b',
                    Eo = R.strings.battle_pass.progression.widget3dStyle,
                    go = (0, n.memo)(({ vehicleLvl: e, vehicleName: t, vehicleType: a, isElite: u }) => {
                        const r = (0, n.useMemo)(() => {
                            const e = (0, ae.BN)(a);
                            return {
                                backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${e}${u ? '_elite' : ''}`)})`,
                            };
                        }, [a, u]);
                        return o().createElement(
                            'div',
                            { className: co },
                            o().createElement('div', { className: _o }, Eo.forVehicle()),
                            $a(e),
                            o().createElement('div', { className: mo, style: r }),
                            t,
                        );
                    }),
                    po = 'Widget3dStyle_base_ae',
                    Ao = 'Widget3dStyle_title_20',
                    bo = 'Widget3dStyle_base__closedChapter_d4',
                    Co = 'Widget3dStyle_box_f8',
                    ho = 'Widget3dStyle_light_82',
                    vo = 'Widget3dStyle_previewButton_03',
                    Do = 'Widget3dStyle_box__hover_39',
                    fo = 'Widget3dStyle_footer_b9',
                    Bo = 'Widget3dStyle_caption_2b',
                    Fo = R.strings.battle_pass.progression.widget3dStyle,
                    wo = (0, te.Pi)(({ widget3dStyleRef: e, overScrollWidth: t, level: a, isShowTitle: u }) => {
                        const r = (0, n.useState)(!1),
                            s = r[0],
                            i = r[1],
                            l = tt(),
                            c = l.model,
                            _ = l.controls,
                            d = c.root.get(),
                            m = d.chapterState,
                            E = d.isStyleTaken,
                            g = c.widget3dStyle.get().styleName,
                            p = _.on3dStylePreview,
                            A = c.vehicleInfo.get(),
                            b = { marginRight: `-${t}`, marginLeft: t },
                            C = (0, ae.uF)(Fo.currentStyle(), { name: g }),
                            h = (0, n.useCallback)(() => {
                                p({ level: a });
                            }, [p, a]),
                            v = m === ot.Completed,
                            f = D()(po, v && bo),
                            B = D()(Co, s && Do);
                        return o().createElement(
                            'div',
                            { className: f, ref: e, style: b },
                            !E && u && o().createElement('div', { className: Ao }, Fo.titleNoChapterSelected()),
                            o().createElement(
                                'div',
                                {
                                    className: B,
                                    onMouseEnter: () => {
                                        i(!0);
                                    },
                                    onMouseLeave: () => {
                                        i(!1);
                                    },
                                },
                                !E && 1 === a && o().createElement('div', { className: ho }),
                                o().createElement('div', { className: vo }, o().createElement(lo.k, { onClick: h })),
                            ),
                            o().createElement(
                                'div',
                                { className: fo },
                                o().createElement('div', { className: Bo }, C),
                                o().createElement(go, A),
                            ),
                        );
                    }),
                    So = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Po, yo;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(Po || (Po = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(yo || (yo = {})));
                const ko = ({ size: e = Po.Default, classMix: t }) =>
                        o().createElement('div', { className: D()(So.background, So[`background__${e}`], t) }),
                    xo = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    No = ({ size: e }) => {
                        const t = D()(xo.base, xo[`base__${e}`]);
                        return o().createElement('div', { className: t });
                    },
                    Ro = {
                        base: 'ProgressLineImpose_base_80',
                        base__disabled: 'ProgressLineImpose_base__disabled_cc',
                        base__finished: 'ProgressLineImpose_base__finished_d4',
                        base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_56',
                        pattern: 'ProgressLineImpose_pattern_1c',
                        base__small: 'ProgressLineImpose_base__small_55',
                        gradient: 'ProgressLineImpose_gradient_35',
                        glow: 'ProgressLineImpose_glow_a5',
                        glow__left: 'ProgressLineImpose_glow__left_d8',
                    },
                    Lo = (0, n.memo)(
                        ({ size: e, lineRef: t, disabled: a, baseStyles: u, isComplete: r, withoutBounce: n }) => {
                            const s = D()(
                                    Ro.base,
                                    Ro[`base__${e}`],
                                    a && Ro.base__disabled,
                                    r && Ro.base__finished,
                                    n && Ro.base__withoutBounce,
                                ),
                                i = !a && !r;
                            return o().createElement(
                                'div',
                                { className: s, style: u, ref: t },
                                o().createElement('div', { className: Ro.pattern }),
                                o().createElement('div', { className: Ro.gradient }),
                                i && o().createElement(No, { size: e }),
                            );
                        },
                    );
                let To, Mo;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(To || (To = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(Mo || (Mo = {})));
                const Io = 'ProgressBarDeltaGrow_base_7e',
                    Oo = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Ho = 'ProgressBarDeltaGrow_glow_68',
                    Wo = (e) => (e ? { left: 0 } : { right: 0 }),
                    Go = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    Uo = (e) => ({ transitionDuration: `${e}ms` }),
                    $o = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: u,
                            size: r,
                            to: s,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const _ = s < u,
                                d = (0, n.useState)(To.Idle),
                                m = d[0],
                                E = d[1],
                                g = m === To.End,
                                p = m === To.Idle,
                                A = m === To.Grow,
                                b = m === To.Shrink,
                                C = (0, n.useCallback)(
                                    (e) => {
                                        (E(e), l && l(e));
                                    },
                                    [l],
                                ),
                                h = (0, n.useCallback)(
                                    (e, t) =>
                                        Lt(() => {
                                            C(e);
                                        }, t),
                                    [C],
                                );
                            (0, n.useEffect)(() => {
                                if (!a)
                                    return p
                                        ? h(To.Grow, t)
                                        : A
                                          ? h(To.Shrink, e)
                                          : b
                                            ? h(To.End, e)
                                            : void (g && i && i());
                            }, [h, a, g, A, p, b, i, t, e]);
                            const v = (0, n.useMemo)(() => Object.assign({ width: '100%' }, Uo(e), Wo(_)), [_, e]),
                                f = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Uo(e), Wo(_)), [_, e]),
                                B = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Go(_, u), Uo(e)), [u, _, e]),
                                F = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - u)}%` }, Go(_, u), Uo(e)),
                                    [u, _, s, e],
                                );
                            if (g) return null;
                            const w = D()(Io, c, _ && 0 === s && Oo);
                            return o().createElement(
                                'div',
                                { style: p ? B : F, className: w },
                                o().createElement(
                                    'div',
                                    { style: b ? f : v, className: Ho },
                                    o().createElement(No, { size: r }),
                                ),
                            );
                        },
                    ),
                    zo = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: u,
                            disabled: r,
                            isComplete: s,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const _ = e < a,
                                d = (0, n.useState)(!1),
                                m = d[0],
                                E = d[1],
                                g = (0, n.useCallback)(
                                    (e) => {
                                        (e === To.Shrink && E(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                p = (0, n.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                                A = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(Lo, {
                                    size: t,
                                    lineRef: u,
                                    disabled: r,
                                    isComplete: s,
                                    withoutBounce: _ && 0 === e,
                                    baseStyles: m ? A : p,
                                }),
                                a >= 0 &&
                                    o().createElement($o, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: g,
                                        freezed: i.freezed,
                                        onEndAnimation: l,
                                        from: a,
                                        size: t,
                                        to: e,
                                        className: i.delta.className,
                                    }),
                            );
                        },
                    ),
                    Vo = 'ProgressBarDeltaSimple_base_6c',
                    jo = 'ProgressBarDeltaSimple_delta_99',
                    Xo = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: u,
                            size: r,
                            to: s,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = s < u,
                                _ = (0, n.useState)(Mo.Idle),
                                d = _[0],
                                m = _[1],
                                E = d === Mo.In,
                                g = d === Mo.End,
                                p = d === Mo.Idle,
                                A = (0, n.useCallback)(
                                    (e) => {
                                        (m(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, n.useEffect)(() => {
                                if (p && !a) {
                                    return Lt(() => {
                                        A(Mo.In);
                                    }, t);
                                }
                            }, [A, a, p, t]),
                                (0, n.useEffect)(() => {
                                    if (E) {
                                        return Lt(() => {
                                            (i && i(), A(Mo.End));
                                        }, e + t);
                                    }
                                }, [A, E, i, t, e]));
                            const b = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                C = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                h = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(u - s)}%`, left: `${c ? s : u}%` }),
                                    [u, c, s],
                                );
                            return g
                                ? null
                                : o().createElement(
                                      'div',
                                      { className: Vo, style: h },
                                      o().createElement(
                                          'div',
                                          { style: p ? b : C, className: jo },
                                          o().createElement(No, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    Yo = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: u,
                            disabled: r,
                            isComplete: s,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const _ = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, e],
                            );
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(Lo, {
                                    size: t,
                                    lineRef: u,
                                    disabled: r,
                                    isComplete: s,
                                    baseStyles: _,
                                }),
                                a >= 0 &&
                                    o().createElement(Xo, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        freezed: i.freezed,
                                        from: a,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    qo = ['onComplete', 'onEndAnimation'];
                function Ko() {
                    return (
                        (Ko =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Ko.apply(this, arguments)
                    );
                }
                const Zo = (0, n.memo)((e) => {
                        let t = e.onComplete,
                            a = e.onEndAnimation,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) ((a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                return r;
                            })(e, qo);
                        const r = (0, n.useState)(!1),
                            s = r[0],
                            i = r[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === u.to;
                                (e !== s && i(e), e && t && t(), a && a());
                            }, [s, t, a, u.to]);
                        switch (u.animationSettings.type) {
                            case yo.Simple:
                                return o().createElement(Yo, Ko({}, u, { onEndAnimation: l, isComplete: s }));
                            case yo.Growing:
                                return o().createElement(zo, Ko({}, u, { onEndAnimation: l, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    Qo = ({ size: e, value: t, lineRef: a, disabled: u, onComplete: r }) => {
                        const s = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            i = 100 === t;
                        return (
                            (0, n.useEffect)(() => {
                                i && r && r();
                            }, [i, r]),
                            o().createElement(Lo, { size: e, disabled: u, baseStyles: s, isComplete: i, lineRef: a })
                        );
                    },
                    Jo = ['onEndAnimation'];
                function es() {
                    return (
                        (es =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        es.apply(this, arguments)
                    );
                }
                const ts = (0, n.memo)((e) => {
                    let t = e.onEndAnimation,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                r = {},
                                n = Object.keys(e);
                            for (u = 0; u < n.length; u++) ((a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                            return r;
                        })(e, Jo);
                    const u = (0, n.useRef)({}),
                        r = (0, n.useCallback)(() => {
                            ((u.current.from = void 0), t && t());
                        }, [t]),
                        s = 'number' == typeof u.current.from ? u.current.from : a.from;
                    return (
                        (u.current.from = s),
                        o().createElement(Zo, es({}, a, { onEndAnimation: r, key: `${s}-${a.to}`, from: s }))
                    );
                });
                function as() {
                    return (
                        (as =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        as.apply(this, arguments)
                    );
                }
                const us = (0, n.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: a,
                            disabled: u,
                            deltaFrom: r,
                            animationSettings: n,
                            onEndAnimation: s,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (r === t)
                                return o().createElement(Qo, {
                                    key: `${r}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: a,
                                    disabled: u,
                                    onComplete: l,
                                });
                            const c = {
                                from: r,
                                to: t,
                                size: e,
                                lineRef: a,
                                disabled: u,
                                animationSettings: n,
                                onComplete: l,
                                onEndAnimation: s,
                                onChangeAnimationState: i,
                            };
                            return n.withStack
                                ? o().createElement(ts, c)
                                : o().createElement(Zo, as({ key: `${r}-${t}` }, c));
                        },
                    ),
                    rs = (e) => ({
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${e.glow}')`,
                        '--progress-glow-small': `url('${e.glowSmall}')`,
                        '--progress-delta-color': e.delta.color,
                        '--progress-delta-shadow': e.delta.shadow,
                    }),
                    ns = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_orange',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: {
                            color: '#ffc',
                            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                        },
                    },
                    os = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: { bgColorBase: '#ссс', bgColorDisabled: 'transparent', bgColorFinished: '#ссс' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_light_grey',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_light_grey',
                        },
                        glow: 'R.images.gui.maps.icons.battlePass.progression.progress_glow_white',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: {
                            color: '#fff',
                            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                        },
                    },
                    ss = (e, t, a) => {
                        if ('number' == typeof a) {
                            return (ir(0, t, a) / t) * 100;
                        }
                        return e;
                    },
                    is = ns,
                    ls = {
                        freezed: !1,
                        withStack: !1,
                        type: yo.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    cs = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = is,
                            size: a = Po.Default,
                            animationSettings: u = ls,
                            disabled: r = !1,
                            withoutBackground: s = !1,
                            progressBarBackgroundClassMix: i,
                            value: l,
                            deltaFrom: c,
                            lineRef: _,
                            onChangeAnimationState: d,
                            onEndAnimation: m,
                            onComplete: E,
                        }) => {
                            const g = ((e, t, a) =>
                                (0, n.useMemo)(() => {
                                    const u = (ir(0, t, e) / t) * 100;
                                    return { value: u, deltaFrom: ss(u, t, a) };
                                }, [a, t, e]))(l, e, c);
                            return o().createElement(
                                'div',
                                { className: D()(So.base, So[`base__${a}`]), style: rs(t) },
                                !s && o().createElement(ko, { size: a, classMix: i }),
                                o().createElement(us, {
                                    size: a,
                                    lineRef: _,
                                    disabled: r,
                                    value: g.value,
                                    deltaFrom: g.deltaFrom,
                                    animationSettings: u,
                                    onEndAnimation: m,
                                    onChangeAnimationState: d,
                                    onComplete: E,
                                }),
                            );
                        },
                    ),
                    _s = 'OptimizedProgressBar_base_1f',
                    ds = 'OptimizedProgressBar_wrapper_ab',
                    ms = 'OptimizedProgressBar_background_ce',
                    Es = ['api', 'value', 'maxValue', 'theme'];
                function gs() {
                    return (
                        (gs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        gs.apply(this, arguments)
                    );
                }
                const ps = (e, t) => ('number' == typeof t ? t : e.offsetLeft),
                    As = (e) => {
                        let t = e.api,
                            a = e.value,
                            u = e.maxValue,
                            r = void 0 === u ? 100 : u,
                            s = e.theme,
                            i = void 0 === s ? is : s,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) ((a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                return r;
                            })(e, Es);
                        const c = (0, n.useRef)(null),
                            _ = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            m = ir(0, a, r) / r,
                            E = (0, n.useCallback)(
                                (e) => {
                                    (d.current &&
                                        c.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: t }, a, u) => {
                                            const r = a.offsetWidth - u.offsetWidth,
                                                n = e - ps(a, t),
                                                o = ir(0, r, n);
                                            u.style.left = `${o}px`;
                                        })(e, c.current, d.current),
                                        _.current &&
                                            c.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: t },
                                                a,
                                                { container: u, line: r },
                                            ) => {
                                                const n = Math.max(0, Math.floor(u.offsetWidth * a) - 8e3),
                                                    o = e - ps(u, t),
                                                    s = ir(0, n, o);
                                                r.style.left = `${s}px`;
                                            })(e, m, { line: _.current, container: c.current }));
                                },
                                [m],
                            ),
                            g = (0, n.useMemo)(() => rs(i), [i]);
                        return (
                            (t.current.update = E),
                            o().createElement(
                                'div',
                                { className: _s, ref: c },
                                o().createElement(
                                    'div',
                                    { className: ds },
                                    o().createElement(
                                        'div',
                                        { style: g, className: D()(ms, l.progressBarBackgroundClassMix), ref: d },
                                        o().createElement(ko, {
                                            size: l.size,
                                            classMix: l.progressBarBackgroundClassMix,
                                        }),
                                    ),
                                    o().createElement(
                                        cs,
                                        gs({}, l, {
                                            lineRef: _,
                                            value: a,
                                            theme: i,
                                            maxValue: r,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    },
                    bs = ({
                        level: e,
                        levelWidth: t,
                        currentLevelWidth: a,
                        pointsInLevel: u,
                        totalPointsInLevel: r,
                        currentLevel: n,
                    }) => (e > n ? a + t * (e - 2) + t * (u / r) : (e - 1) * t + a * (u / r)),
                    Cs = (e) => e + 1,
                    hs = (0, te.Pi)(
                        ({
                            api: e,
                            progressChange: t,
                            levelWidth: a,
                            currentLevelWidth: u,
                            level: r,
                            previousLevel: s,
                            currentPointsInLevel: i,
                            previousPointsInLevel: l,
                            currentPointsInChapter: c,
                            previousPointsInChapter: _,
                            theme: d,
                        }) => {
                            const m = (0, n.useContext)(vi).levels,
                                E = tt().model.root.get(),
                                g = E.isPaused,
                                p = E.showLevelsAnimations,
                                A = E.currentLevel,
                                b = (0, n.useState)(0),
                                C = b[0],
                                h = b[1],
                                v = (0, n.useRef)(-1),
                                D = (0, n.useState)({
                                    previousBaseEarnedPoints: 0,
                                    maxBasePoints: 0,
                                    baseProgressionSize: 0,
                                }),
                                f = D[0],
                                B = f.previousBaseEarnedPoints,
                                F = f.maxBasePoints,
                                w = f.baseProgressionSize,
                                S = D[1];
                            (0, n.useEffect)(() => {
                                if (g) return;
                                const e = v.current !== _,
                                    t = e ? s : r,
                                    n = u + (m.items.length - 1) * a,
                                    o = m.items[t - 1],
                                    d = r <= m.items.length ? r - 1 : m.items.length - 1,
                                    E = m.items[d].value.levelPoints,
                                    p = bs({
                                        level: r,
                                        levelWidth: a,
                                        currentLevelWidth: u,
                                        pointsInLevel: i,
                                        totalPointsInLevel: E,
                                        currentLevel: A,
                                    }),
                                    b = o ? o.value.levelPoints : 0,
                                    C = bs({
                                        level: t > r ? r : t,
                                        levelWidth: a,
                                        currentLevelWidth: t < A ? a : u,
                                        pointsInLevel: l,
                                        totalPointsInLevel: b,
                                        currentLevel: A,
                                    }),
                                    h = e && t <= r ? C : p;
                                (_ !== c && a && (v.current = _),
                                    S({ maxBasePoints: n, previousBaseEarnedPoints: h, baseProgressionSize: p }));
                            }, [g, a, u, r, s, c, l, i, _, A, m.items]);
                            const P = (0, n.useMemo)(
                                () =>
                                    Object.assign({}, ls, {
                                        withStack: !0,
                                        type: yo.Simple,
                                        delta: { duration: 400, delay: 300 },
                                        line: { duration: 400, delay: 300 },
                                    }),
                                [],
                            );
                            return (
                                (0, n.useEffect)(() => {
                                    const e = A !== s || i !== l;
                                    if (p) h(Cs);
                                    else if (e && -1 === v.current)
                                        return Lt(() => {
                                            h(Cs);
                                        }, 700);
                                }, [A, i, s, l, p]),
                                (0, n.useEffect)(() => {
                                    if (p)
                                        return W(() => {
                                            t && t();
                                        });
                                }, [t, p]),
                                o().createElement(As, {
                                    key: C,
                                    animationSettings: P,
                                    deltaFrom: B,
                                    value: w,
                                    maxValue: F,
                                    api: e,
                                    theme: d,
                                })
                            );
                        },
                    ),
                    vs = R.strings.battle_pass.tooltips.progression.freePoints,
                    Ds = (0, te.Pi)(
                        ({
                            progressApi: e,
                            freePointsApi: t,
                            levelWidth: a,
                            currentLevelWidth: u,
                            progressChange: r,
                        }) => {
                            const s = (0, n.useContext)(vi),
                                l = s.levels,
                                c = s.chapterState,
                                _ = s.currentPointsInLevel,
                                d = tt().model.root.get(),
                                m = d.previousPointsInLevel,
                                E = d.currentPointsInChapter,
                                g = d.previousPointsInChapter,
                                p = d.freePointsInLevel,
                                A = d.freePointsInChapter,
                                b = d.previousFreePointsInChapter,
                                C = d.previousFreePointsInLevel,
                                h = d.potentialLevel,
                                v = d.previousPotentialLevel,
                                f = d.chapterType,
                                B = d.currentLevel,
                                F = d.previousLevel,
                                w = (() => {
                                    const e = (0, n.useState)(i.O.view.getScale()),
                                        t = e[0],
                                        a = e[1];
                                    return (
                                        (0, n.useEffect)(() => {
                                            const e = () => {
                                                a(i.O.view.getScale());
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
                                })(),
                                S = (c === ot.NotStarted || c === ot.Paused) && A - E > 0,
                                P = l.items[l.items.length - 1].value.levelPoints,
                                y = ((B - 1) * a + (_ / P) * u) / w,
                                k = E >= l.items.length * P,
                                x = (0, n.useMemo)(
                                    () => ({
                                        '--progress-line-base': ns.line.bgColorBase,
                                        '--progress-line-disabled': ns.line.bgColorDisabled,
                                        '--progress-line-finished': ns.line.bgColorFinished,
                                    }),
                                    [],
                                );
                            return o().createElement(
                                'div',
                                { className: sr.progressContainer },
                                S &&
                                    o().createElement(
                                        ce.i,
                                        { header: vs.header(), body: vs.body.$dyn(f) },
                                        o().createElement(
                                            'div',
                                            { className: sr.progress },
                                            o().createElement(hs, {
                                                api: t,
                                                progressChange: r,
                                                levelWidth: a,
                                                currentLevelWidth: u,
                                                level: h,
                                                previousLevel: v,
                                                currentPointsInLevel: p,
                                                previousPointsInLevel: C,
                                                currentPointsInChapter: A,
                                                previousPointsInChapter: b,
                                                theme: os,
                                            }),
                                        ),
                                    ),
                                o().createElement('div', {
                                    className: D()(sr.progressBackground, k && sr.progressBackground__finished),
                                    style: Object.assign({ width: `${y}rem` }, x),
                                }),
                                o().createElement(
                                    Pa.u,
                                    { contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId') },
                                    o().createElement(
                                        'div',
                                        { className: D()(sr.progress, S && sr.progress__inactive) },
                                        o().createElement(hs, {
                                            api: e,
                                            levelWidth: a,
                                            currentLevelWidth: u,
                                            level: B,
                                            previousLevel: F,
                                            currentPointsInLevel: _,
                                            previousPointsInLevel: m,
                                            currentPointsInChapter: E,
                                            previousPointsInChapter: g,
                                            progressChange: r,
                                        }),
                                    ),
                                ),
                            );
                        },
                    ),
                    fs = {
                        base: 'Background_base_f7',
                        default: 'Background_default_c1',
                        default__premium: 'Background_default__premium_d5',
                        default__normal: 'Background_default__normal_15',
                        default__rare: 'Background_default__rare_4a',
                        normalCompleted: 'Background_normalCompleted_e0',
                        normalCompleted__premium: 'Background_normalCompleted__premium_a4',
                        normalCompleted__disabled: 'Background_normalCompleted__disabled_52',
                        rare: 'Background_rare_b6',
                        rare__premium: 'Background_rare__premium_2e',
                        rareBg: 'Background_rareBg_ee',
                        rare__completed: 'Background_rare__completed_85',
                        rare__notStarted: 'Background_rare__notStarted_3f',
                        rarePattern: 'Background_rarePattern_03',
                        rarePattern__left: 'Background_rarePattern__left_8b',
                        rarePattern__leftCompleted: 'Background_rarePattern__leftCompleted_3f',
                        rarePattern__leftIndent: 'Background_rarePattern__leftIndent_e2',
                        rarePattern__leftNoIndent: 'Background_rarePattern__leftNoIndent_ac',
                        rarePattern__right: 'Background_rarePattern__right_c2',
                        rarePattern__rightCompleted: 'Background_rarePattern__rightCompleted_eb',
                        rarePattern__rightNoIndent: 'Background_rarePattern__rightNoIndent_f1',
                        rarePattern__rightIndent: 'Background_rarePattern__rightIndent_f7',
                        rare__completedEnabled: 'Background_rare__completedEnabled_b0',
                        rare__completedDisabled: 'Background_rare__completedDisabled_a6',
                        rare__notStartedEnabled: 'Background_rare__notStartedEnabled_62',
                        rare__notStartedDisabled: 'Background_rare__notStartedDisabled_7f',
                        disabled: 'Background_disabled_ba',
                        disabled__premium: 'Background_disabled__premium_6d',
                        inProgress: 'Background_inProgress_68',
                        inProgress__premium: 'Background_inProgress__premium_8e',
                        inProgressInner: 'Background_inProgressInner_0d',
                        inProgressPart: 'Background_inProgressPart_68',
                        inProgressPart__left: 'Background_inProgressPart__left_76',
                        inProgressPart__right: 'Background_inProgressPart__right_5b',
                    },
                    Bs = ({ status: e, chapterState: t, isPremium: a, isPremiumActivated: u, isRare: r }) => {
                        const n = a && !u,
                            s = e === no.IN_PROGRESS,
                            i = e === no.COMPLETED || e === no.COMPLETED_TROPHY_NOT_SELECTED,
                            l = e === no.NOT_STARTED,
                            c = e === no.DISABLED || t === ot.Disabled,
                            _ = D()(
                                fs.default,
                                !n && !r && fs.default__normal,
                                !n && r && fs.default__rare,
                                a ? fs.default__premium : fs.default__basic,
                            ),
                            d = D()(
                                fs.normalCompleted,
                                a && fs.normalCompleted__premium,
                                n ? fs.normalCompleted__disabled : fs.normalCompleted__enabled,
                            ),
                            m = D()(
                                fs.rare,
                                a && fs.rare__premium,
                                i && fs.rare__completed,
                                i && !a && fs.rare__completedEnabled,
                                a && i && (n ? fs.rare__completedDisabled : fs.rare__completedEnabled),
                                l && fs.rare__notStarted,
                                a && l && (n ? fs.rare__notStartedDisabled : fs.rare__notStartedEnabled),
                            ),
                            E = D()(
                                fs.rarePattern,
                                i ? fs.rarePattern__leftCompleted : fs.rarePattern__left,
                                ((i && !a) || (l && a)) && fs.rarePattern__leftIndent,
                                ((l && !a) || (i && a)) && fs.rarePattern__leftNoIndent,
                            ),
                            g = D()(
                                fs.rarePattern,
                                i ? fs.rarePattern__rightCompleted : fs.rarePattern__right,
                                ((i && !a) || (l && a)) && fs.rarePattern__rightNoIndent,
                                ((l && !a) || (i && a)) && fs.rarePattern__rightIndent,
                            ),
                            p = D()(fs.inProgress, a && fs.inProgress__premium),
                            A = D()(fs.inProgressInner, a && fs.inProgressInner__premium),
                            b = D()(fs.inProgressPart, fs.inProgressPart__left),
                            C = D()(fs.inProgressPart, fs.inProgressPart__right),
                            h = D()(fs.disabled, a && fs.disabled__premium);
                        return o().createElement(
                            'div',
                            { className: fs.base },
                            (c || n) && o().createElement('div', { className: h }),
                            o().createElement('div', { className: _ }),
                            i && !r && o().createElement('div', { className: d }),
                            s &&
                                o().createElement(
                                    'div',
                                    { className: p },
                                    o().createElement('div', { className: b }),
                                    !a && o().createElement('div', { className: A }),
                                    o().createElement('div', { className: C }),
                                ),
                            r &&
                                !s &&
                                o().createElement(
                                    'div',
                                    { className: m },
                                    o().createElement('div', { className: E }),
                                    o().createElement('div', { className: g }),
                                    o().createElement('div', { className: fs.rareBg }),
                                ),
                        );
                    };
                var Fs = a(8664);
                const ws = {
                        base: 'Stage_base_46',
                        base__notStarted: 'Stage_base__notStarted_86',
                        number: 'Stage_number_1f',
                        numberAnimated: 'Stage_numberAnimated_c6',
                        numberAnimated__enter: 'Stage_numberAnimated__enter_98',
                        numberAnimated__enterActive: 'Stage_numberAnimated__enterActive_1a',
                        highlightScale: 'Stage_highlightScale_6b',
                        numberAnimated__enterDone: 'Stage_numberAnimated__enterDone_68',
                        numberGlow: 'Stage_numberGlow_b7',
                        numberGlow__active: 'Stage_numberGlow__active_3c',
                        circleOut: 'Stage_circleOut_87',
                        numberGlow__exit: 'Stage_numberGlow__exit_d9',
                        numberInProgress: 'Stage_numberInProgress_69',
                        title: 'Stage_title_ee',
                        glow: 'Stage_glow_9e',
                        glow__inProgress: 'Stage_glow__inProgress_6a',
                        iconFinal: 'Stage_iconFinal_70',
                        iconFinal__inProgress: 'Stage_iconFinal__inProgress_c1',
                    },
                    Ss = R.strings.battle_pass.progression,
                    Ps = (0, te.Pi)(
                        ({ status: e, stepNumber: t, isFinal: a, showLevelsAnimations: u, stageAnimationDelay: r }) => {
                            const s = tt(),
                                i = s.model,
                                l = s.controls,
                                c = i.root.get().chapterState,
                                _ = l.onLevelsAnimationFinished,
                                d = (0, n.useState)(!1),
                                m = d[0],
                                E = d[1],
                                g = e === no.IN_PROGRESS,
                                p = e === no.COMPLETED,
                                A = c === ot.NotStarted || c === ot.Paused,
                                b = g ? ws.numberInProgress : ws.number,
                                C = {
                                    enter: ws.numberAnimated__enter,
                                    enterActive: ws.numberAnimated__enterActive,
                                    enterDone: ws.numberAnimated__enterDone,
                                },
                                h = { enterActive: ws.numberGlow__active, enterDone: ws.numberGlow__exit },
                                v = (0, n.useCallback)(() => {
                                    (0, ee.G)('bp_current_phase');
                                }, []);
                            return (
                                (0, n.useEffect)(() => {
                                    if (u && g)
                                        return Lt(() => {
                                            (E(!0), _());
                                        }, r);
                                }, [u, g, r, _]),
                                o().createElement(
                                    'div',
                                    { className: D()(ws.base, ws[`base__${e}`]) },
                                    ((a && p) || (g && !A)) &&
                                        o().createElement(
                                            o().Fragment,
                                            null,
                                            o().createElement('div', {
                                                className: D()(ws.glow, g && ws.glow__inProgress),
                                            }),
                                            o().createElement(
                                                Fs.Z,
                                                { in: m, timeout: r + 4e3, className: ws.numberGlow, classNames: h },
                                                o().createElement('div', null),
                                            ),
                                        ),
                                    a &&
                                        o().createElement('div', {
                                            className: D()(ws.iconFinal, g && ws.iconFinal__inProgress),
                                        }),
                                    g
                                        ? o().createElement(
                                              'div',
                                              { className: b },
                                              t,
                                              o().createElement(
                                                  Fs.Z,
                                                  {
                                                      in: m,
                                                      timeout: r + 4e3,
                                                      className: D()(ws.numberInProgress, ws.numberAnimated),
                                                      classNames: C,
                                                      onEnter: v,
                                                  },
                                                  o().createElement('div', null, t),
                                              ),
                                          )
                                        : o().createElement('div', { className: b }, t),
                                    g &&
                                        o().createElement(
                                            'div',
                                            { className: ws.title },
                                            A ? Ss.pausedStep() : Ss.currentStep(),
                                        ),
                                )
                            );
                        },
                    ),
                    ys = {
                        base: 'ClosedStatus_base_8a',
                        icon: 'ClosedStatus_icon_18',
                        icon__current: 'ClosedStatus_icon__current_44',
                        icon__exit: 'ClosedStatus_icon__exit_fd',
                        icon__exitActive: 'ClosedStatus_icon__exitActive_65',
                        icon__exitCurrentActive: 'ClosedStatus_icon__exitCurrentActive_4d',
                        fadeDown: 'ClosedStatus_fadeDown_d3',
                        zoomOut: 'ClosedStatus_zoomOut_0f',
                        icon__exitDone: 'ClosedStatus_icon__exitDone_b2',
                        title: 'ClosedStatus_title_a3',
                        title__premium: 'ClosedStatus_title__premium_e2',
                        title__exit: 'ClosedStatus_title__exit_16',
                        title__exitActive: 'ClosedStatus_title__exitActive_44',
                        title__exitDone: 'ClosedStatus_title__exitDone_51',
                    };
                function ks() {
                    return (
                        (ks =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        ks.apply(this, arguments)
                    );
                }
                const xs = ({
                        isPremium: e = !1,
                        isLockedState: t = !1,
                        isInProgress: a = !1,
                        isPremiumActivated: u = !1,
                        playUnlockAnimation: r = !1,
                        handleUnlockAnimationExited: n,
                        baseUnlockProps: s,
                    }) => {
                        const i = a && e && (!u || r),
                            l = {
                                exit: ys.icon__exit,
                                exitActive: a ? ys.icon__exitCurrentActive : ys.icon__exitActive,
                                exitDone: ys.icon__exitDone,
                            },
                            c = t || r,
                            _ =
                                c && e
                                    ? {
                                          exit: ys.title__exit,
                                          exitActive: ys.title__exitActive,
                                          exitDone: ys.title__exitDone,
                                      }
                                    : {};
                        return o().createElement(
                            'div',
                            { className: ys.base },
                            c &&
                                o().createElement(
                                    Fs.Z,
                                    ks({}, s, { classNames: l, onExited: n }),
                                    o().createElement('div', {
                                        className: D()(ys.icon, a ? ys.icon__current : ys.icon__locked),
                                    }),
                                ),
                            i &&
                                o().createElement(
                                    Fs.Z,
                                    ks({}, s, { classNames: _ }),
                                    o().createElement(
                                        'div',
                                        { className: D()(ys.title, e && ys.title__premium) },
                                        Hs.progression.currentStepLocked(),
                                    ),
                                ),
                        );
                    },
                    Ns = {
                        base__showAnimation: 'CompletedStatus_base__showAnimation_3f',
                        slideUp: 'CompletedStatus_slideUp_d2',
                        iconGlow__completedEnter: 'CompletedStatus_iconGlow__completedEnter_03',
                        iconGlow__completedEnterActive: 'CompletedStatus_iconGlow__completedEnterActive_19',
                        showUp: 'CompletedStatus_showUp_a2',
                        iconGlow__completedEnterDone: 'CompletedStatus_iconGlow__completedEnterDone_d8',
                        icon: 'CompletedStatus_icon_b1',
                        icon__potentiallyCompleted: 'CompletedStatus_icon__potentiallyCompleted_a4',
                        icon__currentPotentiallyCompleted: 'CompletedStatus_icon__currentPotentiallyCompleted_60',
                    },
                    Rs = ({
                        hasTrophySelectionToken: e,
                        isPotentiallyCompleted: t,
                        isCurrentPotentiallyCompleted: a,
                        completedIn: u,
                        handleCompleteGlowAnimationExited: r,
                        children: n,
                        isRewardAnimationEnd: s,
                    }) => {
                        const i = {
                                exit: Ns.iconGlow__completedEnter,
                                exitActive: Ns.iconGlow__completedEnterActive,
                                exitDone: Ns.iconGlow__completedEnterDone,
                            },
                            l = D()(
                                Ns.icon,
                                t && Ns.icon__potentiallyCompleted,
                                a && Ns.icon__currentPotentiallyCompleted,
                            );
                        return o().createElement(
                            'div',
                            { className: D()(Ns.base, s && Ns.base__showAnimation) },
                            o().createElement(Fs.Z, { in: !u, timeout: Os, classNames: i, onExited: r }, n),
                            e
                                ? o().createElement(
                                      'div',
                                      { className: Ns.trophyTokenLabel },
                                      Hs.progression.trophySelectAwaiting(),
                                  )
                                : o().createElement(
                                      ce.i,
                                      { body: Hs.tooltips.completed.got() },
                                      o().createElement('div', { className: l }),
                                  ),
                        );
                    },
                    Ls = {
                        base: 'CurrentPoints_base_98',
                        value__current: 'CurrentPoints_value__current_73',
                        value__total: 'CurrentPoints_value__total_b4',
                        divider: 'CurrentPoints_divider_dc',
                        icon: 'CurrentPoints_icon_08',
                    },
                    Ts = ({ totalPoints: e, currentPoints: t }) => {
                        const a = D()(Ls.value, Ls.value__current),
                            u = D()(Ls.value, Ls.value__total);
                        return o().createElement(
                            Pa.u,
                            {
                                ignoreShowDelay: !0,
                                contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId'),
                            },
                            o().createElement(
                                'div',
                                { className: Ls.base },
                                o().createElement('div', { className: a }, t),
                                o().createElement('div', { className: Ls.divider }, '/'),
                                o().createElement('div', { className: u }, e),
                                o().createElement('div', { className: Ls.icon }),
                            ),
                        );
                    },
                    Ms = {
                        base: 'Status_base_1f',
                        base__default: 'Status_base__default_a1',
                        base__inProgress: 'Status_base__inProgress_b8',
                        base__premiumInProgress: 'Status_base__premiumInProgress_5e',
                        iconContainer: 'Status_iconContainer_2f',
                        iconInner: 'Status_iconInner_30',
                        iconGlow: 'Status_iconGlow_c5',
                        iconGlow__completed: 'Status_iconGlow__completed_b9',
                        iconGlow__completedRare: 'Status_iconGlow__completedRare_be',
                        iconGlow__hidden: 'Status_iconGlow__hidden_24',
                        icon: 'Status_icon_8b',
                        icon__completedEnter: 'Status_icon__completedEnter_e2',
                        icon__completedEnterActive: 'Status_icon__completedEnterActive_d1',
                        fadeUp: 'Status_fadeUp_a4',
                        icon__completedEnterDone: 'Status_icon__completedEnterDone_9e',
                        glowWrapper: 'Status_glowWrapper_67',
                        glow: 'Status_glow_89',
                        glow__active: 'Status_glow__active_7f',
                        highlightScale: 'Status_highlightScale_62',
                        dust: 'Status_dust_b2',
                        dust__active: 'Status_dust__active_14',
                        trophyTokenLabel: 'Status_trophyTokenLabel_b9',
                        pointsWrapper: 'Status_pointsWrapper_e8',
                    };
                function Is() {
                    return (
                        (Is =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Is.apply(this, arguments)
                    );
                }
                const Os = 1500,
                    Hs = R.strings.battle_pass,
                    Ws = R.views.lobby.battle_pass,
                    Gs = ({
                        status: e,
                        potentialStatus: t,
                        isPremium: a,
                        isRare: u,
                        isPremiumActivated: r,
                        totalPoints: s,
                        currentPoints: i,
                        playCompleteAnimation: l,
                        playUnlockAnimation: c,
                        completeAnimationDelay: _ = 0,
                        unlockAnimationDelay: d = 0,
                        baseTimeout: m = 0,
                        playUnlockAnimationSound: E = !0,
                        playCompleteAnimationSound: g = !0,
                        onAnimationDone: p,
                        onCompleteAnimationStart: A,
                        initialAnimationDelay: b,
                        hasTrophySelectionToken: C,
                        isTaken: h,
                        completedDuration: v,
                        playCompleteSelectRewardAnimation: f,
                        isRewardAnimationEnd: B,
                    }) => {
                        const F = (0, n.useState)(!1),
                            w = F[0],
                            S = F[1],
                            P = (0, n.useState)(!1),
                            y = P[0],
                            k = P[1],
                            x = (0, n.useState)(!0),
                            N = x[0],
                            R = x[1],
                            L = (0, n.useState)(!1),
                            T = L[0],
                            M = L[1],
                            I = { '--animation-duration': `${v}ms` },
                            O = e === no.IN_PROGRESS,
                            H = e === no.COMPLETED,
                            W = t === no.IN_PROGRESS,
                            G = !H && t === no.COMPLETED,
                            U = (0, n.useCallback)(() => {
                                (R(!1), E && !T && (O ? (0, ee.G)(oo.UNLOCK_BIG) : (0, ee.G)(oo.UNLOCK_SMALL)));
                            }, [T, O, E]),
                            $ = (0, n.useCallback)(() => {
                                (g && (0, ee.G)(oo.IMPROVED_REWARD), S(!0), A && A());
                            }, [A, g]);
                        (0, n.useEffect)(
                            () =>
                                c
                                    ? Lt(() => {
                                          U();
                                      }, b + d)
                                    : l
                                      ? (k(!0),
                                        Lt(() => {
                                            (k(!1), $());
                                        }, b + _))
                                      : void (y && k(!1)),
                            [c, l, $, b, _, U, d, y],
                        );
                        const z =
                                O && a
                                    ? D()(Ms.base, Ms.base__premiumInProgress)
                                    : D()(Ms.base, Ms.base__default, O && Ms.base__inProgress),
                            V = {
                                exit: Ms.icon__completedEnter,
                                exitActive: Ms.icon__completedEnterActive,
                                exitDone: Ms.icon__completedEnterDone,
                            },
                            j = { exit: Ms.glow, exitActive: Ms.glow__active, exitDone: Ms.glow },
                            X = { exit: Ms.dust, exitActive: Ms.dust__active, exitDone: Ms.dust },
                            Y = H && (!a || (a && r)) && !h,
                            q = a && !r,
                            K = !a && !Y && G,
                            Z = !a && O && G,
                            Q = D()(
                                Ms.iconGlow,
                                Y && (u ? Ms.iconGlow__completedRare : Ms.iconGlow__completed),
                                y && Ms.iconGlow__hidden,
                            ),
                            J = (0, n.useCallback)(() => {
                                p && p();
                            }, [p]),
                            te = (0, n.useCallback)(() => {
                                (!l && p && p(), M(!0));
                            }, [p, l]),
                            ae = (0, n.useCallback)(() => {
                                y && k(!1);
                            }, [y]);
                        (0, n.useEffect)(() => {
                            if (l && T)
                                return Lt(() => {
                                    $();
                                }, _);
                        }, [l, T, $, _]);
                        const ue = { in: N, timeout: Os + m },
                            re = w ? D()(Ms.icon, Y && Ms.icon__completed) : void 0,
                            ne = a || Y || G,
                            oe = !a && ((O && !G) || W);
                        return o().createElement(
                            'div',
                            { className: z, style: I },
                            ne &&
                                o().createElement(
                                    'div',
                                    { className: Ms.iconContainer },
                                    !l &&
                                        !c &&
                                        (Y
                                            ? o().createElement(
                                                  Rs,
                                                  {
                                                      hasTrophySelectionToken: C,
                                                      isPotentiallyCompleted: K,
                                                      isCurrentPotentiallyCompleted: Z,
                                                      completedIn: w,
                                                      handleCompleteGlowAnimationExited: ae,
                                                      isRewardAnimationEnd: B,
                                                  },
                                                  o().createElement('div', { className: Q }),
                                              )
                                            : o().createElement(
                                                  Pa.u,
                                                  {
                                                      isEnabled: a,
                                                      contentId: Ws.tooltips.BattlePassLockIconTooltipView('resId'),
                                                  },
                                                  o().createElement(
                                                      'div',
                                                      null,
                                                      o().createElement(xs, {
                                                          isPremium: a,
                                                          isLockedState: q,
                                                          isInProgress: O,
                                                          isPremiumActivated: r,
                                                          playUnlockAnimation: c,
                                                          baseUnlockProps: ue,
                                                          handleUnlockAnimationExited: te,
                                                      }),
                                                  ),
                                              )),
                                    (l || f) &&
                                        o().createElement(
                                            Fs.Z,
                                            { in: !w, timeout: Os, classNames: V, onExited: J },
                                            C && w
                                                ? o().createElement(
                                                      'div',
                                                      { className: Ms.trophyTokenLabel },
                                                      Hs.progression.trophySelectAwaiting(),
                                                  )
                                                : o().createElement('div', { className: re }),
                                        ),
                                    c &&
                                        !T &&
                                        o().createElement(
                                            Pa.u,
                                            { contentId: Ws.tooltips.BattlePassLockIconTooltipView('resId') },
                                            o().createElement(
                                                'div',
                                                { className: Ms.iconInner },
                                                o().createElement(xs, {
                                                    baseUnlockProps: ue,
                                                    isPremium: a,
                                                    isLockedState: q,
                                                    isInProgress: O,
                                                    isPremiumActivated: r,
                                                    playUnlockAnimation: c,
                                                    handleUnlockAnimationExited: te,
                                                }),
                                                O &&
                                                    o().createElement(
                                                        'div',
                                                        null,
                                                        o().createElement(
                                                            Fs.Z,
                                                            Is({}, ue, { classNames: j }),
                                                            o().createElement(
                                                                'div',
                                                                { className: Ms.glowWrapper },
                                                                o().createElement('div', { className: Ms.glow }),
                                                            ),
                                                        ),
                                                        o().createElement(
                                                            Fs.Z,
                                                            Is({}, ue, { classNames: X }),
                                                            o().createElement(
                                                                'div',
                                                                { className: Ms.glowWrapper },
                                                                o().createElement('div', { className: Ms.dust }),
                                                            ),
                                                        ),
                                                    ),
                                            ),
                                        ),
                                ),
                            oe &&
                                o().createElement(
                                    'div',
                                    { className: Ms.pointsWrapper },
                                    o().createElement(Ts, { totalPoints: s, currentPoints: i }),
                                ),
                        );
                    },
                    Us = {
                        base: 'CardContent_base_aa',
                        content: 'CardContent_content_ed',
                        content__notStarted: 'CardContent_content__notStarted_30',
                        content__premiumWithoutBP: 'CardContent_content__premiumWithoutBP_2f',
                        content__enter: 'CardContent_content__enter_10',
                        content__enterActive: 'CardContent_content__enterActive_80',
                        content__enterDone: 'CardContent_content__enterDone_1b',
                        status: 'CardContent_status_6f',
                        buttonHolder: 'CardContent_buttonHolder_a0',
                        buttonLight: 'CardContent_buttonLight_95',
                        buttonInner: 'CardContent_buttonInner_27',
                        buttonInner__disabled: 'CardContent_buttonInner__disabled_b1',
                        button: 'CardContent_button_3a',
                        button__disabled: 'CardContent_button__disabled_a8',
                        buttonBlink: 'CardContent_buttonBlink_db',
                        move: 'CardContent_move_18',
                        buttonText: 'CardContent_buttonText_fc',
                    },
                    $s = {
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
                        highlight: 'Reward_highlight_36',
                        image: 'Reward_image_89',
                        info: 'Reward_info_72',
                        info__multi: 'Reward_info__multi_63',
                        info__credits: 'Reward_info__credits_ef',
                        info__gold: 'Reward_info__gold_36',
                        info__crystal: 'Reward_info__crystal_36',
                        info__premiumTank: 'Reward_info__premiumTank_d3',
                        timer: 'Reward_timer_d3',
                    },
                    zs = ({
                        name: e,
                        image: t,
                        isPeriodic: a = !1,
                        size: u = un.Big,
                        special: r,
                        value: n,
                        valueType: s,
                        style: i,
                        className: l,
                        classNames: c,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: d,
                    }) => {
                        const m = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case nn.BATTLE_BOOSTER:
                                    case nn.BATTLE_BOOSTER_REPLACE:
                                        return on.BATTLE_BOOSTER;
                                }
                            })(r),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case nn.BATTLE_BOOSTER:
                                        return sn.BATTLE_BOOSTER;
                                    case nn.BATTLE_BOOSTER_REPLACE:
                                        return sn.BATTLE_BOOSTER_REPLACE;
                                    case nn.BUILT_IN_EQUIPMENT:
                                        return sn.BUILT_IN_EQUIPMENT;
                                    case nn.EQUIPMENT_PLUS:
                                        return sn.EQUIPMENT_PLUS;
                                    case nn.EQUIPMENT_TROPHY_BASIC:
                                        return sn.EQUIPMENT_TROPHY_BASIC;
                                    case nn.EQUIPMENT_TROPHY_UPGRADED:
                                        return sn.EQUIPMENT_TROPHY_UPGRADED;
                                    case nn.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return sn.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case nn.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return sn.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case nn.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return sn.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case nn.PROGRESSION_STYLE_UPGRADED_1:
                                        return sn.PROGRESSION_STYLE_UPGRADED_1;
                                    case nn.PROGRESSION_STYLE_UPGRADED_2:
                                        return sn.PROGRESSION_STYLE_UPGRADED_2;
                                    case nn.PROGRESSION_STYLE_UPGRADED_3:
                                        return sn.PROGRESSION_STYLE_UPGRADED_3;
                                    case nn.PROGRESSION_STYLE_UPGRADED_4:
                                        return sn.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(r),
                            g = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case rn.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case rn.CURRENCY:
                                    case rn.NUMBER:
                                        return o().createElement(ln.A, { format: 'integral', value: Number(e) });
                                    case rn.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(n, s);
                        return o().createElement(
                            'div',
                            { className: D()($s.base, $s[`base__${u}`], l), style: i },
                            o().createElement(
                                ru,
                                { tooltipArgs: _, className: $s.tooltipWrapper },
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        'div',
                                        { className: D()($s.image, null == c ? void 0 : c.image) },
                                        m &&
                                            o().createElement('div', {
                                                className: D()($s.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${u}.${m}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            o().createElement('div', {
                                                className: D()($s.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        E &&
                                            o().createElement('div', {
                                                className: D()($s.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${u}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    g &&
                                        o().createElement(
                                            'div',
                                            {
                                                className: D()(
                                                    $s.info,
                                                    $s[`info__${e}`],
                                                    s === rn.MULTI && $s.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            g,
                                        ),
                                ),
                            ),
                            a &&
                                o().createElement(
                                    ru,
                                    { tooltipArgs: d },
                                    o().createElement('div', {
                                        className: D()($s.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Vs = {
                        base: 'Rewards_base_46',
                        base__column: 'Rewards_base__column_5d',
                        base__inProgress: 'Rewards_base__inProgress_a5',
                        reward: 'Rewards_reward_1f',
                        base__tripleDefault: 'Rewards_base__tripleDefault_fd',
                        reward__0: 'Rewards_reward__0_7c',
                        reward__2: 'Rewards_reward__2_e3',
                        base__reverse: 'Rewards_base__reverse_14',
                        base__tripleInProgress: 'Rewards_base__tripleInProgress_85',
                        reward__1: 'Rewards_reward__1_11',
                        shine: 'Rewards_shine_3f',
                        shine__animated: 'Rewards_shine__animated_08',
                        fade: 'Rewards_fade_96',
                        rewardInner__animated: 'Rewards_rewardInner__animated_7a',
                        changeReward: 'Rewards_changeReward_ee',
                        staticShine: 'Rewards_staticShine_e4',
                        explosion: 'Rewards_explosion_f6',
                    };
                function js() {
                    return (
                        (js =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        js.apply(this, arguments)
                    );
                }
                const Xs = (0, n.memo)(
                        ({
                            data: e,
                            isTaken: t,
                            isVertical: a,
                            isTriple: u,
                            isReverse: r,
                            isInProgress: n,
                            hasAnimation: s,
                        }) => {
                            const i = P().mediaSize <= F.Small,
                                l = D()(
                                    Vs.base,
                                    a && Vs.base__column,
                                    n && Vs.base__inProgress,
                                    r && Vs.base__reverse,
                                    n && u && Vs.base__tripleInProgress,
                                    !n && u && Vs.base__tripleDefault,
                                );
                            return o().createElement(
                                'div',
                                { className: l },
                                e.map((e, a) => {
                                    const u =
                                            e.name.includes('styleProgressToken') ||
                                            e.name.includes('battlePassSelectToken'),
                                        r = (t && u) || (s && u),
                                        n = D()(Vs.rewardInner, s && u && Vs.rewardInner__animated),
                                        l = D()(Vs.shine, s && u && Vs.shine__animated);
                                    return o().createElement(
                                        'div',
                                        { key: a, className: D()(Vs.reward, Vs[`reward__${a}`]) },
                                        r && o().createElement('div', { className: l }),
                                        o().createElement(
                                            'div',
                                            { className: n },
                                            s &&
                                                u &&
                                                o().createElement(
                                                    o().Fragment,
                                                    null,
                                                    o().createElement('div', { className: Vs.staticShine }),
                                                    o().createElement('div', { className: Vs.explosion }),
                                                ),
                                            o().createElement(
                                                zs,
                                                js(
                                                    {
                                                        size: i ? un.Small : un.Big,
                                                        image: i ? e.smallImage : e.bigImage,
                                                    },
                                                    e,
                                                ),
                                            ),
                                        ),
                                    );
                                }),
                            );
                        },
                    ),
                    Ys = {
                        content: 'CardRewards_content_0a',
                        content__inProgress: 'CardRewards_content__inProgress_18',
                        content__isActive: 'CardRewards_content__isActive_f0',
                        content__premiumWithoutBP: 'CardRewards_content__premiumWithoutBP_05',
                        content__enterDone: 'CardRewards_content__enterDone_26',
                        content__isCompleted: 'CardRewards_content__isCompleted_aa',
                        content__enterActive: 'CardRewards_content__enterActive_07',
                        content__isTaken: 'CardRewards_content__isTaken_e7',
                    },
                    qs = (0, n.memo)(
                        ({
                            rewards: e,
                            showHighlight: t,
                            completedIn: a,
                            isTaken: u,
                            isPremium: r,
                            isInProgress: s,
                            isCompleted: i,
                            isNotStarted: l,
                            isPremiumActivated: c,
                            baseTimeout: _,
                            isRewardAnimationActive: d,
                            isActive: m,
                        }) => {
                            const E = e.map((e) => {
                                    const t = e.item,
                                        a = e.name,
                                        u = e.value,
                                        r = e.overlayType,
                                        n = e.tooltipId,
                                        o = e.tooltipContentId,
                                        s = e.name === tn.TmanToken,
                                        i = (e, t) => {
                                            return e.name === tn.TmanToken
                                                ? `R.images.gui.maps.icons.tankmen.icons.${t}.${((a = e.bigIcon), a.replace('tankman_', '').replace('tankwoman_', ''))}`
                                                : An(e, t);
                                            var a;
                                        };
                                    return {
                                        name: t || a,
                                        smallImage: i(e, s ? un.S48x48 : un.Small),
                                        bigImage: i(e, s ? un.S80x80 : un.Big),
                                        special: r,
                                        value: u,
                                        valueType:
                                            ((l = a),
                                            cn.includes(l)
                                                ? rn.MULTI
                                                : _n.includes(l)
                                                  ? rn.CURRENCY
                                                  : dn.includes(l)
                                                    ? rn.NUMBER
                                                    : mn.includes(l)
                                                      ? rn.PREMIUM_PLUS
                                                      : rn.STRING),
                                        tooltipArgs: bn({ tooltipId: n }, Number(o), { ignoreShowDelay: !0 }),
                                    };
                                    var l;
                                }),
                                g = (0, n.useState)(E),
                                p = g[0],
                                A = g[1],
                                b = (0, n.useRef)(E),
                                C = b.current;
                            (0, n.useEffect)(() => {
                                if (C.some((e, t) => e !== E[t])) return ((b.current = E), Lt(() => A(E), 1e3));
                            }, [E, C]);
                            const h = (0, n.useMemo)(
                                    () => ({
                                        enter: Ys.content__enter,
                                        enterActive: Ys.content__enterActive,
                                        enterDone: Ys.content__enterDone,
                                    }),
                                    [],
                                ),
                                v = D()(
                                    Ys.content,
                                    t && !a && Ys.content__enter,
                                    l && Ys.content__notStarted,
                                    i && Ys.content__isCompleted,
                                    u && Ys.content__isTaken,
                                    m && Ys.content__isActive,
                                    s && Ys.content__inProgress,
                                    r && !c && Ys.content__premiumWithoutBP,
                                ),
                                f = (0, n.useMemo)(
                                    () => ({
                                        data: p,
                                        isVertical: 2 === p.length,
                                        isTaken: u,
                                        isTriple: 3 === p.length,
                                        isReverse: r,
                                        isInProgress: s,
                                        hasAnimation: d,
                                    }),
                                    [p, u, r, s, d],
                                );
                            return t
                                ? o().createElement(
                                      Fs.Z,
                                      { in: a, timeout: _, className: v, classNames: h },
                                      o().createElement('div', null, o().createElement(Xs, f)),
                                  )
                                : o().createElement('div', { className: v }, o().createElement(Xs, f));
                        },
                    );
                function Ks() {
                    return (
                        (Ks =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Ks.apply(this, arguments)
                    );
                }
                const Zs = 100,
                    Qs = 1800,
                    Js = (0, te.Pi)(
                        ({
                            status: e,
                            potentialStatus: t,
                            isPremium: a,
                            isRare: u,
                            isPremiumActivated: r,
                            reward: s,
                            stepNumber: i,
                            totalPoints: l,
                            currentPoints: c,
                            currentLevel: _,
                            previousLevel: d,
                            isFinal: m,
                            showBuyAnimations: E,
                            showLevelsAnimations: g,
                            onFinalAnimationDone: p,
                            maxVisibleCards: A,
                            isTaken: b,
                            isButtonVisible: C,
                            isButtonDisabled: h,
                            chapterState: v,
                        }) => {
                            (0, n.useContext)(Di);
                            const f = tt().controls,
                                B = f.onTake,
                                w = f.onFinishedAnimation,
                                S = e === no.IN_PROGRESS,
                                y = e === no.COMPLETED,
                                k = e === no.COMPLETED_TROPHY_NOT_SELECTED,
                                x = e === no.NOT_STARTED,
                                N = v === ot.Active,
                                L = (0, n.useState)(!1),
                                T = L[0],
                                M = L[1],
                                I = (0, n.useState)(!1),
                                O = I[0],
                                H = I[1],
                                W = (0, n.useState)(!1),
                                G = W[0],
                                U = W[1],
                                $ = (0, n.useState)(!1),
                                z = $[0],
                                V = $[1],
                                j = (0, n.useCallback)(() => M(!0), []),
                                X = P().mediaSize <= F.Small ? Za.extraSmall : Za.small,
                                Y = (0, n.useRef)(b),
                                q = (0, n.useRef)([]),
                                K = Y.current;
                            ((0, n.useEffect)(() => {
                                Y.current = b;
                            }),
                                (0, n.useEffect)(() => {
                                    if (K && !b) {
                                        const e = window.setTimeout(() => {
                                                (H(!1), U(!0), w());
                                            }, Qs),
                                            t = window.setTimeout(() => {
                                                V(!1);
                                            }, 2300);
                                        (H(!0), V(!0), q.current.push(e, t));
                                    }
                                }, [b, w, K, s]),
                                (0, n.useEffect)(
                                    () => () => {
                                        q.current.forEach(clearTimeout);
                                    },
                                    [],
                                ));
                            const Z = (0, n.useMemo)(() => {
                                    let e,
                                        t = 0,
                                        u = 0,
                                        n = 0,
                                        o = 0,
                                        s = !1,
                                        l = !1,
                                        c = !1,
                                        m = !1,
                                        b = 500 * Math.ceil(_ / 25);
                                    if (A && E && r) {
                                        const e = Math.floor(0.5 * A);
                                        let a = _ - e,
                                            r = _ + e,
                                            n = 0;
                                        a <= 0 && ((n = 1 - a), (r += n), (a = 1));
                                        const d = i < _ && i >= a,
                                            E = i > _ && i <= r,
                                            g = i === a;
                                        (d ? (t = (i - a + 1) * Zs) : E && (t = (i - a) * Zs),
                                            (s = Boolean(S || d || E || g)),
                                            (l = Boolean(S || g)),
                                            (c = Boolean(y && s)),
                                            (m = Boolean(k && s)),
                                            (u = (A - n - 1) * Zs),
                                            S && (o = (i - a + 1) * Zs * 2.5));
                                    }
                                    if (A && g) {
                                        const t = Math.min(_ - d, Math.floor(0.5 * A));
                                        let r = _ - t;
                                        r <= 0 && (r = 1);
                                        const o = i < _ && i >= r;
                                        (o && ((u = (i - r + 1) * Zs), a && (u += Zs)),
                                            (c = Boolean(y && o)),
                                            (n = t * Zs + Zs * Math.trunc(t / 2) + b),
                                            g ? (e = p) : i === _ - 1 && (e = j));
                                    }
                                    return (
                                        z && ((b = 0), (u = Qs), (c = Boolean(y)), (m = Boolean(k))),
                                        S ? (e = j) : i === _ - 1 && (e = p),
                                        {
                                            baseTimeout: o,
                                            playCompleteAnimation: c,
                                            playCompleteSelectRewardAnimation: m,
                                            playCompleteAnimationSound: c,
                                            playUnlockAnimation: s,
                                            playUnlockAnimationSound: l,
                                            unlockAnimationDelay: t,
                                            onAnimationDone: e,
                                            onCompleteAnimationStart: j,
                                            completeAnimationDelay: u,
                                            stageAnimationDelay: n,
                                            initialAnimationDelay: b,
                                        }
                                    );
                                }, [_, y, S, a, r, A, j, p, d, E, g, i, z, k]),
                                Q = (0, n.useCallback)(() => {
                                    B({ level: i });
                                }, [B, i]),
                                J = D()(Us.base, S && !a ? Us.base__inProgress : Us.base__default),
                                ee = D()(Us.buttonInner, h && Us.buttonInner__disabled),
                                te = D()(Us.button, h && Us.button__disabled),
                                ae = (y || S) && (Z.playUnlockAnimation || Z.playCompleteAnimation),
                                ue = e === no.COMPLETED_TROPHY_NOT_SELECTED;
                            return o().createElement(
                                'div',
                                { className: J },
                                !a &&
                                    o().createElement(
                                        Ps,
                                        Ks({ status: e, stepNumber: i, isFinal: m, showLevelsAnimations: g }, Z),
                                    ),
                                C &&
                                    !a &&
                                    o().createElement(
                                        ce.i,
                                        {
                                            isEnabled: h,
                                            body: R.strings.battle_pass.progression.btnRewardsUnavailable(),
                                        },
                                        o().createElement(
                                            'div',
                                            { className: Us.buttonHolder },
                                            !h && o().createElement('div', { className: Us.buttonLight }),
                                            o().createElement(
                                                'div',
                                                { className: ee },
                                                o().createElement(
                                                    Ja,
                                                    { type: Ka.ghost, size: X, disabled: h, onClick: Q, mixClass: te },
                                                    !h && o().createElement('div', { className: Us.buttonBlink }),
                                                    o().createElement(
                                                        'div',
                                                        { className: Us.buttonText },
                                                        R.strings.battle_pass.progression.takeReward(),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                o().createElement(qs, {
                                    showHighlight: ae,
                                    rewards: s,
                                    completedIn: T,
                                    isTaken: b,
                                    isPremium: a,
                                    isInProgress: S,
                                    baseTimeout: Z.baseTimeout,
                                    isNotStarted: x,
                                    isCompleted: y,
                                    isActive: N,
                                    isPremiumActivated: r,
                                    isRewardAnimationActive: O,
                                }),
                                o().createElement(
                                    'div',
                                    { className: Us.status },
                                    o().createElement(
                                        Gs,
                                        Ks(
                                            {
                                                status: e,
                                                potentialStatus: t,
                                                isPremium: Boolean(a),
                                                isRare: u,
                                                isPremiumActivated: r,
                                                totalPoints: l,
                                                currentPoints: c,
                                                isTaken: b,
                                                hasTrophySelectionToken: ue,
                                                completedDuration: 500,
                                                isRewardAnimationEnd: G,
                                            },
                                            Z,
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    ei = {
                        base: 'Divider_base_8f',
                        base__left: 'Divider_base__left_bd',
                        base__right: 'Divider_base__right_1e',
                        base__fullBasic: 'Divider_base__fullBasic_b1',
                        base__fullPremium: 'Divider_base__fullPremium_0a',
                        inner: 'Divider_inner_40',
                        inner__basic: 'Divider_inner__basic_17',
                        inner__premium: 'Divider_inner__premium_28',
                    },
                    ti = ({ position: e, isFull: t = !0, isPremium: a = !1 }) => {
                        const u = D()(ei.base, ei[`base__${e}`], t && (a ? ei.base__fullPremium : ei.base__fullBasic)),
                            r = D()(ei.inner, a ? ei.inner__premium : ei.inner__basic);
                        return o().createElement('div', { className: u }, o().createElement('div', { className: r }));
                    },
                    ai = {
                        base: 'Card_base_5f',
                        base__inProgress: 'Card_base__inProgress_ad',
                        base__inProgressNonPremium: 'Card_base__inProgressNonPremium_0c',
                        totalPoints: 'Card_totalPoints_51',
                        totalPoints__default: 'Card_totalPoints__default_db',
                        totalPoints__final: 'Card_totalPoints__final_ee',
                        progressShadow: 'Card_progressShadow_ca',
                    },
                    ui = (0, n.memo)(
                        (0, n.forwardRef)(
                            (
                                {
                                    status: e,
                                    potentialStatus: t,
                                    isPremium: a,
                                    isPremiumActivated: u,
                                    isRare: r,
                                    reward: s,
                                    stepNumber: i,
                                    totalPoints: l,
                                    totalPointsFinal: c,
                                    currentPoints: _,
                                    currentLevel: d,
                                    previousLevel: m,
                                    isFinal: E,
                                    maxVisibleCards: g,
                                    showBuyAnimations: p,
                                    showLevelsAnimations: A,
                                    onAnimationDone: b,
                                    isTaken: C,
                                    isButtonVisible: h,
                                    isButtonDisabled: v,
                                    isShadowVisible: f,
                                },
                                B,
                            ) => {
                                const F = J('model'),
                                    w = F.currentPointsInLevel,
                                    S = F.chapterState,
                                    P = (0, n.useRef)(null);
                                (0, n.useImperativeHandle)(B, () => ({
                                    width: () => {
                                        const e = P.current;
                                        return e ? e.offsetWidth : void 0;
                                    },
                                    offsetLeft: () => {
                                        const e = P.current;
                                        return e ? e.offsetLeft : void 0;
                                    },
                                    getOffsetLeftInArea: () => {
                                        const e = P.current;
                                        if (!e) return 0;
                                        const t = e.parentNode,
                                            a = t ? t.offsetLeft : 0;
                                        return e.offsetLeft + a;
                                    },
                                    getHTMLElement: () => P.current,
                                }));
                                const y = e === no.NOT_STARTED,
                                    k = e === no.IN_PROGRESS,
                                    x = e === no.COMPLETED,
                                    N = e === no.COMPLETED_TROPHY_NOT_SELECTED,
                                    R = x || k || N || (y && 1 === i),
                                    L = y || k || N || (x && E),
                                    T = D()(ai.base, ai[`base__${e}`], !a && ai[`base__${e}NonPremium`]),
                                    M = D()(ai.totalPoints, ai.totalPoints__default),
                                    I = D()(ai.totalPoints, ai.totalPoints__final),
                                    O = ((e, t, a, u) =>
                                        e === no.COMPLETED
                                            ? 100
                                            : e !== no.IN_PROGRESS || (t !== ot.NotStarted && t !== ot.Paused)
                                              ? 0
                                              : (100 * a) / u)(e, S, w, l),
                                    H = { width: `${O}%` },
                                    W = {
                                        '--small-card-width': '140rem',
                                        '--small-current-card-width': '224rem',
                                        '--big-card-width': '220rem',
                                        '--big-current-card-width': '340rem',
                                    };
                                return o().createElement(
                                    'div',
                                    { className: T, ref: P, style: W },
                                    o().createElement(Bs, {
                                        status: e,
                                        chapterState: S,
                                        isPremium: a,
                                        isPremiumActivated: u,
                                        isRare: r,
                                    }),
                                    o().createElement(Js, {
                                        status: e,
                                        potentialStatus: t,
                                        isPremium: a,
                                        isRare: r,
                                        isPremiumActivated: u,
                                        reward: s,
                                        stepNumber: i,
                                        totalPoints: l,
                                        currentPoints: _,
                                        currentLevel: d,
                                        previousLevel: m,
                                        isFinal: E,
                                        maxVisibleCards: g,
                                        showBuyAnimations: p,
                                        showLevelsAnimations: A,
                                        onFinalAnimationDone: b,
                                        isTaken: C,
                                        isButtonVisible: h,
                                        isButtonDisabled: v,
                                        chapterState: S,
                                    }),
                                    a && o().createElement('div', { className: M }, l),
                                    a && E && o().createElement('div', { className: I }, c),
                                    f && o().createElement('div', { className: ai.progressShadow, style: H }),
                                    R && o().createElement(ti, { position: ro.left, isFull: !0, isPremium: a }),
                                    L && o().createElement(ti, { position: ro.right, isFull: !0, isPremium: a }),
                                );
                            },
                        ),
                    );
                function ri() {
                    return (
                        (ri =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        ri.apply(this, arguments)
                    );
                }
                const ni = (e, t, a, u, r, n, o) =>
                        r === n && u === t
                            ? no.COMPLETED
                            : e === r && ((o !== ot.NotStarted && o !== ot.Disabled) || u > 0)
                              ? no.IN_PROGRESS
                              : e < r
                                ? 3 !== a || (o !== ot.Active && o !== ot.Completed)
                                    ? no.COMPLETED
                                    : no.COMPLETED_TROPHY_NOT_SELECTED
                                : no.NOT_STARTED,
                    oi = (0, te.Pi)(
                        ({
                            currentCardRef: e,
                            freeProgressionCutCardRef: t,
                            potentialLevelCardRef: a,
                            levels: u,
                            isPremium: r,
                            sectionKey: s,
                            maxVisibleCards: i,
                            isMarathon: l = !1,
                        }) => {
                            const c = tt().model,
                                _ = c.root.get(),
                                d = _.chapterID,
                                m = _.chapterState,
                                E = _.currentPointsInLevel,
                                g = _.currentPointsInChapter,
                                p = _.freePointsInChapter,
                                A = _.freePointsInLevel,
                                b = _.currentLevel,
                                C = _.previousLevel,
                                h = _.potentialLevel,
                                v = _.isBattlePassPurchased,
                                f = _.showBuyAnimations,
                                B = _.showLevelsAnimations,
                                F = (0, n.useState)(!1),
                                w = F[0],
                                S = F[1],
                                P = (0, n.useCallback)(() => {
                                    S(!0);
                                }, [S]),
                                y = Boolean(i && r && f),
                                k = Boolean(i && B);
                            let x = 0;
                            const N = u.items,
                                R = N.length,
                                L = m === ot.NotStarted || m === ot.Paused,
                                T = N.map(({ value: u }, n) => {
                                    const _ = u.level,
                                        D = u.levelPoints,
                                        f = u.state,
                                        B = u.isButtonDisabled;
                                    x += D;
                                    const F = r ? c.computes.getPaidRewardItems(n) : c.computes.getFreeRewardItems(n),
                                        S = _ === R,
                                        N = ni(_, x, f, g, b, R, m),
                                        T = L ? ni(_, x, f, p, h, R, m) : no.NOT_STARTED,
                                        M = ((u, r, n) => (u === r ? e : u === n ? a : t))(_, b, h),
                                        I = F || [],
                                        O = !r && (N === no.COMPLETED || N === no.IN_PROGRESS);
                                    return o().createElement(
                                        ui,
                                        ri(
                                            {
                                                key: `${d}_${s}_${n}`,
                                                showBuyAnimations: y && !w,
                                                showLevelsAnimations: k,
                                            },
                                            u,
                                            {
                                                ref: M,
                                                reward: I,
                                                currentPoints: L && !l ? A : E,
                                                currentLevel: b,
                                                previousLevel: C,
                                                stepNumber: _,
                                                status: N,
                                                potentialStatus: T,
                                                totalPoints: r ? x - D : D,
                                                totalPointsFinal: x,
                                                isPremium: r,
                                                isPremiumActivated: v,
                                                isFinal: S,
                                                isShadowVisible: O,
                                                maxVisibleCards: i,
                                                onAnimationDone: P,
                                                isTaken: r ? u.needTakePaid : u.needTakeFree,
                                                isButtonDisabled: B,
                                            },
                                        ),
                                    );
                                });
                            return o().createElement('div', { className: D()(sr.row, !r && sr.row__basic) }, T);
                        },
                    );
                function si() {
                    return (
                        (si =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        si.apply(this, arguments)
                    );
                }
                const ii = (0, te.Pi)(
                        ({
                            currentCardRef: e,
                            freeProgressionCutCardRef: t,
                            potentialLevelCardRef: a,
                            onProgressChanged: u,
                            overScrollWidth: r,
                            widget3dStyleLeftRef: s,
                            shadowLipRef: l,
                            api: c,
                        }) => {
                            const _ = (0, n.useContext)(vi).levels,
                                d = tt().model.root.get(),
                                m = d.showLevelsAnimations,
                                E = d.finalReward,
                                g = d.isStyleProgressive,
                                p = d.currentLevel,
                                A = d.currentPointsInLevel,
                                b = d.chapterType,
                                C = (0, n.useRef)({ update: () => {} }),
                                h = (0, n.useRef)({ update: () => {} }),
                                v = b === At.Marathon;
                            c.current.moveProgressBars = (0, n.useCallback)((e) => {
                                (C.current.update(e), h.current.update(e));
                            }, []);
                            const f = (0, n.useState)({ levelWidth: 0, currentLevelWidth: 0, maxCardsShown: 0 }),
                                B = f[0],
                                F = f[1],
                                w = (0, n.useCallback)(() => {
                                    if (e.current) {
                                        const a = e.current,
                                            u = t.current,
                                            r = a ? a.width() : 0,
                                            n = u ? u.width() : 0;
                                        return !n && r
                                            ? { currentLevelWidth: r, levelWidth: 224 === r ? 140 : 220 }
                                            : { currentLevelWidth: r, levelWidth: n };
                                    }
                                }, [e, t]),
                                S = P().mediaSize;
                            ((0, n.useEffect)(() => {
                                (0, U.Eu)().then(() => {
                                    const e = w();
                                    if (e) {
                                        const t = i.O.client.getSize(),
                                            a = Math.floor((t.width - e.currentLevelWidth) / e.levelWidth) + 1;
                                        F({
                                            levelWidth: e.levelWidth,
                                            currentLevelWidth: e.currentLevelWidth,
                                            maxCardsShown: a,
                                        });
                                    }
                                });
                            }, [S, w, _.items.length, p, A]),
                                (0, n.useEffect)(() => {
                                    m && (0, ee.G)(R.sounds.bp_progress_bar_start());
                                }, [m]),
                                (0, n.useEffect)(() => {
                                    u && u();
                                }, [p, A, u]));
                            const y = _.items.map((e) => {
                                    const t = e.value.isFreeRewardChoiceEnabled || e.value.isPaidRewardChoiceEnabled,
                                        a = e.value.needTakeFree || e.value.needTakePaid,
                                        u = a && !t;
                                    return {
                                        value: Object.assign({}, e.value, { isButtonDisabled: u, isButtonVisible: a }),
                                    };
                                }),
                                k = !v && vn(E) === pt.style && g;
                            return o().createElement(
                                'div',
                                { className: sr.wrapper },
                                k &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(wo, {
                                            widget3dStyleRef: s,
                                            overScrollWidth: r,
                                            level: 1,
                                            isShowTitle: !0,
                                        }),
                                        o().createElement(
                                            'div',
                                            { className: D()(sr.decor, sr.decor__left) },
                                            o().createElement('div', { className: sr.decorBackground }),
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: sr.bookmarkBackground, ref: l },
                                            o().createElement(jn, {
                                                isDisappeared: !0,
                                                mixClass: sr.bookmarkLeftResponsive,
                                            }),
                                        ),
                                    ),
                                o().createElement(
                                    'div',
                                    { className: sr.section },
                                    o().createElement(oi, {
                                        sectionKey: 'baseCard',
                                        currentCardRef: e,
                                        freeProgressionCutCardRef: t,
                                        potentialLevelCardRef: a,
                                        levels: Object.assign({}, _, { items: y }),
                                        maxVisibleCards: m ? B.maxCardsShown : 0,
                                        currentLevel: p,
                                        isMarathon: v,
                                    }),
                                    o().createElement(
                                        Ds,
                                        si({ progressApi: C, freePointsApi: h, progressChange: u }, B),
                                    ),
                                    o().createElement(oi, {
                                        sectionKey: 'basePremiumCard',
                                        isPremium: !0,
                                        currentCardRef: e,
                                        freeProgressionCutCardRef: t,
                                        levels: _,
                                        maxVisibleCards: B.maxCardsShown,
                                        currentLevel: p,
                                        isMarathon: v,
                                    }),
                                ),
                            );
                        },
                    ),
                    li = (0, n.memo)(ii);
                function ci() {
                    return (
                        (ci =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        ci.apply(this, arguments)
                    );
                }
                function _i(e, t, a, u, r, n, o) {
                    try {
                        var s = e[n](o),
                            i = s.value;
                    } catch (e) {
                        return void a(e);
                    }
                    s.done ? t(i) : Promise.resolve(i).then(u, r);
                }
                const di = { allowedButtons: [Bn.MainButton] },
                    mi = 0,
                    Ei = R.strings.battle_pass.progression;
                let gi;
                !(function (e) {
                    ((e.Hidden = 'hidden'),
                        (e.NavToCurrentLevel = 'navToCurrentLevel'),
                        (e.NavToPotentialLevel = 'navToPotentialLevel'));
                })(gi || (gi = {}));
                const pi = (0, te.Pi)(() => {
                        const e = (0, n.useContext)(vi).levels,
                            t = tt().model.root.get(),
                            a = t.currentLevel,
                            u = t.isBattlePassPurchased,
                            r = t.showBuyAnimations,
                            s = t.isStyleProgressive,
                            i = t.chapterType,
                            l = t.finalReward,
                            c = i === At.Marathon,
                            _ = (0, n.useRef)({ moveProgressBars: () => {} }),
                            d = (0, n.useRef)(null),
                            m = (0, n.useRef)(null),
                            E = (0, n.useRef)(null),
                            g = (0, n.useRef)(null),
                            p = (0, n.useRef)(null),
                            A = (0, n.useRef)(null),
                            b = (0, n.useRef)(null),
                            C = (0, n.useRef)(0),
                            h = s ? 4 : 0,
                            v = vn(l) === pt.tankman,
                            f = !c && vn(l) === pt.style,
                            B = (0, n.useState)(gi.Hidden),
                            F = B[0],
                            w = B[1],
                            S = (0, n.useState)(gi.Hidden),
                            P = S[0],
                            y = S[1],
                            k = (0, n.useState)(!1),
                            x = k[0],
                            N = k[1],
                            R = s,
                            L = (0, n.useState)(!1),
                            T = L[0],
                            M = L[1],
                            I = Cr(),
                            O = I.animationScroll.scrollPosition,
                            H = I.applyScroll,
                            G = I.events,
                            $ = I.handleMouseWheel,
                            z = I.getContainerSize,
                            V = I.getWrapperSize,
                            j = (function (e, t, a) {
                                const u = e.contentRef,
                                    r = e.wrapperRef,
                                    o = e.scrollPosition,
                                    s = e.clampPosition,
                                    i = e.animationScroll,
                                    l = e.events,
                                    c = (0, n.useState)(fn),
                                    _ = c[0],
                                    d = c[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        const e = u.current;
                                        e && (e.style.cursor = _.type === Dn.Dragging ? 'move' : 'grab');
                                    }, [u, _.type]),
                                    (0, n.useEffect)(() => {
                                        if (_.type !== Dn.Dragging) return;
                                        const e = (e) => {
                                            const a = u.current,
                                                n = r.current;
                                            if (!a || !n) return;
                                            const l = _.positionFrom - e.screenX,
                                                c = _.previousScrollPosition + l;
                                            o.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: s(a, c),
                                                        from: { scrollPosition: i.scrollPosition.get() },
                                                    },
                                                    t && { config: t },
                                                ),
                                            );
                                        };
                                        function a() {
                                            (window.removeEventListener('mousemove', e),
                                                document.body.removeEventListener('mouseleave', a),
                                                d({ type: 'scrollingToEnd' }));
                                        }
                                        return (
                                            window.addEventListener('mousemove', e),
                                            window.addEventListener('mouseup', a),
                                            document.body.addEventListener('mouseleave', a),
                                            () => {
                                                (window.removeEventListener('mousemove', e),
                                                    window.removeEventListener('mouseup', a),
                                                    document.body.removeEventListener('mouseleave', a));
                                            }
                                        );
                                    }, [i.scrollPosition, s, u, _, o, r, t, a]),
                                    (0, n.useEffect)(() => {
                                        if (_.type !== Dn.End) return;
                                        const e = () => {
                                            d(fn);
                                        };
                                        return (i.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e));
                                    }, [i.scrollPosition, _.type, l]),
                                    (0, n.useEffect)(() => {
                                        const e = u.current;
                                        if (!e) return;
                                        const t = (e) => {
                                            (a &&
                                                a.allowedButtons &&
                                                -1 === a.allowedButtons.findIndex((t) => e.button === t)) ||
                                                d({
                                                    type: Dn.Dragging,
                                                    positionFrom: e.screenX,
                                                    previousScrollPosition: i.scrollPosition.get(),
                                                });
                                        };
                                        return (
                                            e.addEventListener('mousedown', t),
                                            () => e.removeEventListener('mousedown', t)
                                        );
                                    }, [i.scrollPosition, u, a]),
                                    [_, d]
                                );
                            })(I, void 0, di),
                            X = j[0],
                            Y = j[1],
                            q = (e) => {
                                (X.type === Dn.Dragging && Y({ type: Dn.End }), $(e));
                            },
                            K = (0, n.useMemo)(() => Object.assign({}, I, { handleMouseWheel: q }), []),
                            Z = (0, n.useCallback)(
                                (e) => {
                                    const t = g.current ? g.current.offsetWidth : 0,
                                        a = p.current ? p.current.offsetWidth : 0;
                                    if (d.current) {
                                        const u = V();
                                        (_.current.moveProgressBars({
                                            viewPort: d.current,
                                            horizontalScrollPosition: u ? e - u : e,
                                            leftOffset: t + mi + a,
                                        }),
                                            N(!R || e > t + mi + 0.5 * a));
                                    }
                                },
                                [V, R],
                            ),
                            Q = (0, n.useCallback)(
                                (e) => {
                                    Z(e);
                                },
                                [Z],
                            ),
                            J = (0, n.useCallback)((e = !1) => {
                                const t = m.current;
                                let a = 0,
                                    u = 0;
                                const r = g.current ? g.current.offsetWidth : 0,
                                    n = p.current ? p.current.offsetWidth : 0;
                                t && ((a = t.width()), (u = t.offsetLeft() + r + n));
                                const o = d.current;
                                let s = 0;
                                if (a && o) {
                                    const t = 0.5 * o.offsetWidth;
                                    e && C.current
                                        ? (s = u + a - 0.5 * C.current - t)
                                        : ((s = u + 0.5 * a - t), (C.current = a));
                                }
                                return ((s = Math.round(s < 0 ? 0 : s)), s);
                            }, []),
                            ee = (0, n.useCallback)((e) => {
                                let t = 0;
                                if (e && e.current && d && d.current) {
                                    const a = e.current,
                                        u = g.current ? g.current.offsetWidth : 0,
                                        r = p.current ? p.current.offsetWidth : 0;
                                    let n = 0,
                                        o = 0;
                                    a && ((n = a.width()), (o = a.offsetLeft() + u + r));
                                    const s = d.current;
                                    if (n && s) {
                                        t = o + 0.5 * n - 0.5 * s.offsetWidth;
                                    }
                                    t = Math.round(t < 0 ? 0 : t);
                                }
                                return t;
                            }, []),
                            te = (0, n.useCallback)(() => {
                                const e = d.current,
                                    t = m.current,
                                    a = E.current,
                                    u = g.current ? g.current.offsetWidth : 0,
                                    r = p.current ? p.current.offsetWidth : 0,
                                    n = t.offsetLeft() + u + r,
                                    o = (null == a ? void 0 : a.offsetLeft()) + u + r,
                                    s =
                                        O.goal < n - e.offsetWidth
                                            ? gi.NavToCurrentLevel
                                            : a && O.goal < o - e.offsetWidth
                                              ? gi.NavToPotentialLevel
                                              : gi.Hidden,
                                    i = (() => {
                                        switch (!0) {
                                            case a && O.goal > o + a.width():
                                                return gi.NavToPotentialLevel;
                                            case O.goal > n + t.width():
                                                return gi.NavToCurrentLevel;
                                            default:
                                                return gi.Hidden;
                                        }
                                    })();
                                (w(s), y(i));
                            }, [O.goal]),
                            ae = (0, n.useCallback)(
                                (e) => {
                                    const t = ee(e);
                                    (Q(O.goal), H(t), te());
                                },
                                [H, ee, Q, O.goal, te],
                            ),
                            ue = (0, n.useCallback)(
                                (e) => {
                                    switch (e) {
                                        case gi.NavToCurrentLevel:
                                            return ae(m);
                                        case gi.NavToPotentialLevel:
                                            return ae(E);
                                    }
                                },
                                [ae],
                            ),
                            re = (e) => {
                                switch (e) {
                                    case gi.NavToCurrentLevel:
                                        return { type: wn.Default, tooltipBody: Ei.backToCurrentStageArrow.descr() };
                                    case gi.NavToPotentialLevel:
                                        return { type: wn.Gray, tooltipBody: Ei.backToPotentialStageArrow.descr() };
                                }
                            },
                            ne = (0, n.useCallback)(() => {
                                const e = I.getBounds()[1];
                                (Q(O.goal), te(), M(O.goal === e));
                            }, [I, Q, O.goal, te]);
                        ((0, n.useEffect)(
                            () =>
                                W(() => {
                                    u && r && H(J());
                                }),
                            [H, J, u, r],
                        ),
                            (0, n.useEffect)(() => {
                                const e = (function () {
                                    var e,
                                        t =
                                            ((e = function* () {
                                                const e = z(),
                                                    t = O.goal;
                                                (yield (0, U.Eu)(),
                                                    yield new Promise((e) => {
                                                        requestAnimationFrame(() => {
                                                            requestAnimationFrame(() => {
                                                                e();
                                                            });
                                                        });
                                                    }));
                                                const a = z(),
                                                    u = d.current,
                                                    r = I.getBounds()[1],
                                                    n = 0.25 * u.offsetWidth,
                                                    o = a && e && a !== e ? (t * a) / e : t;
                                                (Z(o), H(o > r - n ? r : o));
                                            }),
                                            function () {
                                                var t = this,
                                                    a = arguments;
                                                return new Promise(function (u, r) {
                                                    var n = e.apply(t, a);
                                                    function o(e) {
                                                        _i(n, u, r, o, s, 'next', e);
                                                    }
                                                    function s(e) {
                                                        _i(n, u, r, o, s, 'throw', e);
                                                    }
                                                    o(void 0);
                                                });
                                            });
                                    return function () {
                                        return t.apply(this, arguments);
                                    };
                                })();
                                return (
                                    engine.on('clientResized', e),
                                    () => {
                                        engine.off('clientResized', e);
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => Lt(() => ae(m), 700), [a]),
                            (0, n.useEffect)(() => {
                                const e = () => {
                                        Q(O.goal);
                                    },
                                    t = () => {
                                        Q(O.goal);
                                    };
                                return (
                                    G.on('rest', e),
                                    G.on('start', t),
                                    () => {
                                        (G.off('rest', e), G.off('start', t));
                                    }
                                );
                            }, [X.type, G, Q, O.goal]));
                        const oe = D()(
                                sr.scrollToButton,
                                sr.scrollToButton__backward,
                                P !== gi.Hidden && sr.scrollToButton__visible,
                            ),
                            se = D()(
                                sr.scrollToButton,
                                sr.scrollToButton__forward,
                                F !== gi.Hidden && sr.scrollToButton__visible,
                            ),
                            ie = D()(sr.shadow, sr.shadow__left),
                            le = D()(sr.shadow, sr.shadow__right),
                            ce = D()(sr.additionalShadow, sr.additionalShadow__active),
                            _e = D()(sr.additionalShadow, !T && sr.additionalShadow__active);
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(
                                'div',
                                { className: D()(sr.bookmark, sr.bookmark__start) },
                                o().createElement(jn, {
                                    chapterStep: e.items.length,
                                    mixClass: D()(sr.bookmarkLeftFixed, x && sr.bookmarkLeftFixed__active),
                                }),
                            ),
                            o().createElement(
                                'div',
                                { className: sr.scrollWrapper, ref: d, onClick: ne, onMouseLeave: te, onWheel: ne },
                                o().createElement(
                                    'div',
                                    { className: ie },
                                    o().createElement('div', { className: ce }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: le },
                                    o().createElement('div', { className: _e }),
                                ),
                                o().createElement(
                                    en.Horizontal.Area.Default,
                                    {
                                        api: K,
                                        barClassNames: { base: sr.scrollBarPosition },
                                        onDrag: ne,
                                        areaClassName: D()(sr.scroll, T && sr.scroll__hidden),
                                    },
                                    o().createElement(li, {
                                        api: _,
                                        currentCardRef: m,
                                        freeProgressionCutCardRef: A,
                                        potentialLevelCardRef: E,
                                        separatorRef: b,
                                        overScrollWidth: mi,
                                        widget3dStyleLeftRef: g,
                                        shadowLipRef: p,
                                        onProgressChanged: () => {
                                            ne();
                                        },
                                    }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: oe },
                                    o().createElement(
                                        Sn,
                                        ci(
                                            { onClick: () => ue(P), direction: so.back, className: sr.arrowButton },
                                            re(P),
                                        ),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: se },
                                    o().createElement(
                                        Sn,
                                        ci(
                                            { onClick: () => ue(F), direction: so.forward, className: sr.arrowButton },
                                            re(F),
                                        ),
                                    ),
                                ),
                            ),
                            f && o().createElement(wo, { overScrollWidth: mi, level: h }),
                            v && o().createElement(uo, null),
                        );
                    }),
                    Ai = (0, te.Pi)(() => {
                        const e = tt().model.root.get(),
                            t = e.isPaused,
                            a = e.chapterType,
                            u = D()(sr.base, sr[`base__${a}`]);
                        return t ? null : o().createElement('div', { className: u }, o().createElement(pi, null));
                    }),
                    bi = (0, n.memo)(Ai),
                    Ci = (0, n.memo)(({ chapterID: e, buttonState: t, handleChapterChoiceClick: a }) => {
                        const u = J('model'),
                            r = u.chapterState,
                            n = u.chapterType,
                            s = u.hasActiveChapter,
                            i = t !== st.Hide,
                            l = n === At.Marathon,
                            c = (r === ot.NotStarted || r === ot.Disabled) && !s,
                            _ = R.strings.battle_pass.progression.btnAllChapters(),
                            d = D()(bt.progression, bt[`progression__${n}`]);
                        return o().createElement(
                            'div',
                            { className: D()(bt.base, bt[`base__${n}`], i && bt.base__buttonVisible), style: gt(e) },
                            c && o().createElement('div', { className: bt.headerGlow }),
                            o().createElement(
                                'div',
                                { className: bt.close },
                                o().createElement(nt, { caption: _, side: 'left', type: 'back', onClick: a }),
                            ),
                            o().createElement('div', { className: bt.header }, o().createElement(or, null)),
                            o().createElement('div', { className: d }, o().createElement(bi, null)),
                            i && o().createElement('div', { className: bt.footer }, o().createElement(fu, null)),
                            l &&
                                o().createElement(
                                    et,
                                    null,
                                    o().createElement(
                                        'div',
                                        { className: bt.extraChapterWidget },
                                        o().createElement(Ya, null),
                                    ),
                                ),
                        );
                    }),
                    hi = 'BattlePassProgressionsViewApp_base_40',
                    vi = (0, n.createContext)({}),
                    Di = o().createContext(!1),
                    fi = (0, te.Pi)(() => {
                        const e = tt(),
                            t = e.model,
                            a = e.controls,
                            u = t.root.get(),
                            r = u.showOffSeason,
                            s = u.showReplaceRewardsAnimations,
                            l = u.buttonState,
                            c = u.chapterID,
                            _ = u.chapterState,
                            d = u.currentPointsInLevel,
                            m = a.onChapterChoice,
                            E = a.onViewLoaded,
                            g = J('model.levels'),
                            p = (0, n.useState)(r),
                            A = p[0],
                            b = p[1],
                            C = (0, n.useState)(!1),
                            h = C[0],
                            v = C[1];
                        (0, n.useEffect)(() => {
                            const e = () => {
                                document.body.style.height = window.innerHeight - (innerHeight % 2) + 'px';
                            };
                            return (
                                window.addEventListener('resize', e),
                                e(),
                                () => {
                                    (window.removeEventListener('resize', e), (document.body.style.height = 'auto'));
                                }
                            );
                        }, []);
                        const D = (0, n.useCallback)(() => {
                                m();
                            }, [m]),
                            f = (0, n.useCallback)(() => {
                                h || (E(), v(!0));
                            }, [h, E]);
                        (!(function ({
                            key: e = G.n.ESCAPE,
                            callback: t = () => i.O.view.sendEvent.close(),
                            preventPropagation: a = !0,
                        } = {}) {
                            z(e, t, a);
                        })({ callback: D, preventPropagation: !1 }),
                            (0, n.useEffect)(
                                () =>
                                    W(() => {
                                        f();
                                    }),
                                [f],
                            ),
                            (0, n.useEffect)(() => {
                                b(r);
                            }, [r]),
                            (0, n.useEffect)(() => {
                                s && (0, ee.G)('bp_pick_up_award');
                            }, [s]));
                        const B = { chapterState: _, levels: g, currentPointsInLevel: d };
                        return o().createElement(
                            Di.Provider,
                            { value: s },
                            o().createElement(
                                'div',
                                { className: hi },
                                !A &&
                                    o().createElement(
                                        vi.Provider,
                                        { value: B },
                                        o().createElement(Ci, {
                                            chapterID: c,
                                            buttonState: l,
                                            handleChapterChoiceClick: D,
                                        }),
                                    ),
                                A && o().createElement(ze, null),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    H().render(
                        o().createElement(I, null, o().createElement(et, null, o().createElement(fi, null))),
                        document.getElementById('root'),
                    );
                });
            },
            2269: (e, t, a) => {
                'use strict';
                let u, r;
                (a.d(t, { W: () => r, w: () => u }),
                    (function (e) {
                        ((e.Award = 'Award'), (e.Coin = 'Coin'), (e.Point = 'Point'), (e.Collection = 'Collection'));
                    })(u || (u = {})),
                    (function (e) {
                        ((e.Small = 'small'), (e.Big = 'big'));
                    })(r || (r = {})));
            },
            6895: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => h });
                var u = a(6483),
                    r = a.n(u),
                    n = a(6179),
                    o = a.n(n);
                const s = {
                        base: 'Counter_base_9e',
                        show: 'Counter_show_be',
                        base__big: 'Counter_base__big_19',
                        base__small: 'Counter_base__small_3b',
                        base__empty: 'Counter_base__empty_98',
                        base__animated: 'Counter_base__animated_40',
                        base__hidden: 'Counter_base__hidden_56',
                        hide: 'Counter_hide_b6',
                        bg: 'Counter_bg_74',
                        value: 'Counter_value_3e',
                        value__text: 'Counter_value__text_d6',
                        base__pattern: 'Counter_base__pattern_71',
                        plus: 'Counter_plus_15',
                        pattern: 'Counter_pattern_83',
                    },
                    i = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (e) => {
                    let t = e.size,
                        a = e.value,
                        u = e.isEmpty,
                        n = e.fadeInAnimation,
                        c = e.hide,
                        _ = e.maximumNumber,
                        d = e.className,
                        m = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                r = {},
                                n = Object.keys(e);
                            for (u = 0; u < n.length; u++) ((a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                            return r;
                        })(e, i);
                    const E = u ? null : a,
                        g = 'string' == typeof E;
                    if ((E && !g && E < 0) || 0 === E) return null;
                    const p = E && !g && E > _,
                        A = r()(
                            s.base,
                            s[`base__${t}`],
                            n && s.base__animated,
                            c && s.base__hidden,
                            !E && s.base__pattern,
                            u && s.base__empty,
                            d,
                        );
                    return o().createElement(
                        'div',
                        l({ className: A }, m),
                        o().createElement('div', { className: s.bg }),
                        o().createElement('div', { className: s.pattern }),
                        o().createElement(
                            'div',
                            { className: r()(s.value, g && s.value__text) },
                            p ? _ : E,
                            p && o().createElement('span', { className: s.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                var _ = a(2372),
                    d = a(280),
                    m = (a(3649), a(6373)),
                    E = a(7727);
                const g = {
                    base: 'Award_base_1b',
                    base__disabled: 'Award_base__disabled_f6',
                    base__small: 'Award_base__small_88',
                    base__big: 'Award_base__big_70',
                    base__hasAppearAnimation: 'Award_base__hasAppearAnimation_90',
                    baseAppear: 'Award_baseAppear_1e',
                    border: 'Award_border_20',
                    border__smallAward: 'Award_border__smallAward_71',
                    border__smallCoin: 'Award_border__smallCoin_a9',
                    border__smallPoint: 'Award_border__smallPoint_a1',
                    border__smallCollection: 'Award_border__smallCollection_f7',
                    border__bigAward: 'Award_border__bigAward_d1',
                    border__bigCoin: 'Award_border__bigCoin_0e',
                    border__bigPoint: 'Award_border__bigPoint_9a',
                    border__bigCollection: 'Award_border__bigCollection_40',
                    border__disabled: 'Award_border__disabled_cc',
                    border__triggered: 'Award_border__triggered_89',
                    borderDisabled: 'Award_borderDisabled_0b',
                    borderDisabled__small: 'Award_borderDisabled__small_d3',
                    borderDisabled__big: 'Award_borderDisabled__big_67',
                    borderHover: 'Award_borderHover_9b',
                    borderHover__smallAward: 'Award_borderHover__smallAward_cc',
                    borderHover__smallCoin: 'Award_borderHover__smallCoin_34',
                    borderHover__smallPoint: 'Award_borderHover__smallPoint_26',
                    borderHover__smallCollection: 'Award_borderHover__smallCollection_75',
                    borderHover__bigAward: 'Award_borderHover__bigAward_cf',
                    borderHover__bigCoin: 'Award_borderHover__bigCoin_2d',
                    borderHover__bigPoint: 'Award_borderHover__bigPoint_db',
                    borderHover__bigCollection: 'Award_borderHover__bigCollection_6d',
                    shine: 'Award_shine_64',
                    shine__smallLeft: 'Award_shine__smallLeft_bd',
                    shine__smallRight: 'Award_shine__smallRight_a4',
                    shine_small_s: 'Award_shine_small_s_8e',
                    shine_small_m: 'Award_shine_small_m_ad',
                    shine__bigLeft: 'Award_shine__bigLeft_54',
                    shine__bigRight: 'Award_shine__bigRight_41',
                    shine_big_s: 'Award_shine_big_s_5f',
                    shine_big_m: 'Award_shine_big_m_4d',
                    bg: 'Award_bg_cb',
                    bgDisabled: 'Award_bgDisabled_5c',
                    bgHover: 'Award_bgHover_a6',
                    bg__smallAward: 'Award_bg__smallAward_a0',
                    bg__smallCoin: 'Award_bg__smallCoin_03',
                    bg__smallPoint: 'Award_bg__smallPoint_0e',
                    bg__smallCollection: 'Award_bg__smallCollection_c2',
                    bg__bigAward: 'Award_bg__bigAward_48',
                    bg__bigCoin: 'Award_bg__bigCoin_66',
                    bg__bigPoint: 'Award_bg__bigPoint_83',
                    bg__bigCollection: 'Award_bg__bigCollection_10',
                    bg__disabled: 'Award_bg__disabled_94',
                    bgDisabled__small: 'Award_bgDisabled__small_23',
                    bgDisabled__big: 'Award_bgDisabled__big_2a',
                    bgHover__smallAward: 'Award_bgHover__smallAward_e1',
                    bgHover__smallCoin: 'Award_bgHover__smallCoin_3e',
                    bgHover__smallPoint: 'Award_bgHover__smallPoint_99',
                    bgHover__smallCollection: 'Award_bgHover__smallCollection_44',
                    bgHover__bigAward: 'Award_bgHover__bigAward_25',
                    bgHover__bigCoin: 'Award_bgHover__bigCoin_5e',
                    bgHover__bigPoint: 'Award_bgHover__bigPoint_4b',
                    bgHover__bigCollection: 'Award_bgHover__bigCollection_9d',
                    locked: 'Award_locked_9e',
                    lockedHover: 'Award_lockedHover_e1',
                    locked__small: 'Award_locked__small_3d',
                    lockedHover__small: 'Award_lockedHover__small_0c',
                    locked__big: 'Award_locked__big_71',
                    lockedHover__big: 'Award_lockedHover__big_00',
                    arrow: 'Award_arrow_5e',
                    icon: 'Award_icon_b6',
                    icon__smallAward: 'Award_icon__smallAward_c3',
                    icon__smallCoin: 'Award_icon__smallCoin_23',
                    icon__smallPoint: 'Award_icon__smallPoint_72',
                    icon__smallCollection: 'Award_icon__smallCollection_c1',
                    icon__bigAward: 'Award_icon__bigAward_3e',
                    icon__bigCoin: 'Award_icon__bigCoin_c0',
                    icon__bigPoint: 'Award_icon__bigPoint_91',
                    icon__bigCollection: 'Award_icon__bigCollection_de',
                    count: 'Award_count_e4',
                    base__locked: 'Award_base__locked_9b',
                    completedCollectionIcon: 'Award_completedCollectionIcon_c4',
                    bubble: 'Award_bubble_eb',
                    label: 'Award_label_e8',
                    label__smallAward: 'Award_label__smallAward_7c',
                    label__bigAward: 'Award_label__bigAward_fe',
                    label__smallCoin: 'Award_label__smallCoin_45',
                    label__smallPoint: 'Award_label__smallPoint_b8',
                    label__smallCollection: 'Award_label__smallCollection_2b',
                    label__bigCoin: 'Award_label__bigCoin_b9',
                    label__bigPoint: 'Award_label__bigPoint_33',
                    label__bigCollection: 'Award_label__bigCollection_2e',
                    blinkShape: 'Award_blinkShape_77',
                    blink: 'Award_blink_c9',
                    blinker: 'Award_blinker_c1',
                };
                var p = a(2269);
                const A = R.strings.battle_pass.awardsWidget,
                    b = ({
                        type: e,
                        count: t,
                        disabled: a = !1,
                        onClick: u,
                        size: s,
                        isLocked: i = !1,
                        hasTriger: l = !1,
                        hasMarathon: b = !1,
                        hasResource: C = !1,
                        maxCount: h = 0,
                        newItemsCount: v = 0,
                    }) => {
                        let D = '',
                            f = '';
                        const B = e === p.w.Collection && h === t,
                            F = s === p.W.Small && l;
                        switch (e) {
                            case p.w.Award:
                                ((D = 1 === t ? A.title.awardSingle() : A.title.awardMultiple()),
                                    (f = a ? A.description.awardDisabled() : A.description.award()));
                                break;
                            case p.w.Coin:
                                ((D = A.title.coin()), (f = A.description.coin()));
                                break;
                            case p.w.Point:
                                ((D = A.title.point()),
                                    (f = ((e, t, a) => {
                                        switch (!0) {
                                            case e && t && a:
                                                return A.description.pointLockedExceptExtraAndResource();
                                            case e && !t && a:
                                                return A.description.pointLockedExceptResource();
                                            case e && t:
                                                return A.description.pointLockedExceptExtra();
                                            case e && !t:
                                                return A.description.pointLocked();
                                            default:
                                                return A.description.point();
                                        }
                                    })(i, b, C)));
                                break;
                            case p.w.Collection:
                                ((D = A.title.collection()),
                                    (f = B ? A.description.collectionCompleted() : A.description.collection()));
                        }
                        const w = r()(
                                g.base,
                                g[`base__${s}`],
                                a && g.base__disabled,
                                i && g.base__locked,
                                e === p.w.Award && !a && g.base__hasAppearAnimation,
                            ),
                            S = r()(g.border, g[`border__${s}${e}`], F && g.border__triggered),
                            P = r()(g.borderHover, g[`borderHover__${s}${e}`]),
                            y = r()(g.borderDisabled, g[`borderDisabled__${s}`]),
                            k = r()(g.shine, g[`shine__${s}Left`]),
                            x = r()(g.shine, g[`shine__${s}Right`]),
                            N = r()(g.bg, g[`bg__${s}${e}`]),
                            R = r()(g.bgHover, g[`bgHover__${s}${e}`]),
                            L = r()(g.bgDisabled, g[`bgDisabled__${s}`]),
                            T = r()(g.locked, g[`locked__${s}`]),
                            M = r()(g.lockedHover, g[`lockedHover__${s}`]),
                            I = (0, n.useCallback)(() => {
                                a || (E.$.playClick(), u());
                            }, [a, u]),
                            O = (0, n.useCallback)(() => {
                                (0, E.G)('bp_highlight_02');
                            }, []);
                        return o().createElement(
                            m.i,
                            { body: f, isEnabled: Boolean(f) },
                            o().createElement(
                                'div',
                                { className: w, onMouseEnter: O, onClick: I },
                                v > 0 &&
                                    o().createElement(
                                        'div',
                                        { className: g.bubble },
                                        o().createElement(c, { size: 'small' }),
                                    ),
                                a
                                    ? o().createElement('div', { className: y })
                                    : o().createElement(
                                          o().Fragment,
                                          null,
                                          o().createElement('div', { className: S }),
                                          o().createElement('div', { className: P }),
                                      ),
                                e === p.w.Award &&
                                    !a &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: k }),
                                        o().createElement('div', { className: x }),
                                    ),
                                a
                                    ? o().createElement('div', { className: L })
                                    : o().createElement(
                                          o().Fragment,
                                          null,
                                          o().createElement('div', { className: N }),
                                          o().createElement('div', { className: R }),
                                      ),
                                i &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: T }),
                                        o().createElement('div', { className: M }),
                                    ),
                                e === p.w.Award && !a && o().createElement('div', { className: g.arrow }),
                                o().createElement('div', { className: r()(g.icon, g[`icon__${s}${e}`]) }),
                                o().createElement(
                                    'div',
                                    { className: g.count },
                                    e === p.w.Collection
                                        ? !B && o().createElement(d.z, { text: `${t || 0} / ${h}` })
                                        : o().createElement(_.A, { format: 'integral', value: t }),
                                    B && o().createElement('div', { className: g.completedCollectionIcon }),
                                ),
                                o().createElement('div', { className: r()(g.label, g[`label__${s}${e}`]) }, D),
                                e === p.w.Award &&
                                    !a &&
                                    o().createElement(
                                        'div',
                                        { className: g.blinkShape },
                                        o().createElement('div', { className: g.blink }),
                                    ),
                            ),
                        );
                    },
                    C = {
                        base: 'AwardsWidget_base_0f',
                        base__small: 'AwardsWidget_base__small_19',
                        award: 'AwardsWidget_award_c6',
                        base__big: 'AwardsWidget_base__big_f7',
                        award__last: 'AwardsWidget_award__last_0d',
                    },
                    h = ({
                        size: e = p.W.Small,
                        notChosenRewardCount: t,
                        pointsCount: a,
                        isPointsLocked: u,
                        isAwardDisabled: n,
                        coinCount: s,
                        collectionItemCount: i,
                        maxCollectionItemCount: l,
                        newCollectionItemCount: c,
                        isBPFirstEnter: _,
                        isCollectionsEnabled: d,
                        onPointsClick: m,
                        onCoinClick: E,
                        onTakeRewardsClick: g,
                        onCollectionClick: A,
                        hasMarathon: h,
                        hasResource: v = !1,
                    }) =>
                        o().createElement(
                            'div',
                            { className: r()(C.base, C[`base__${e}`]) },
                            t > 0 &&
                                o().createElement(
                                    'div',
                                    { className: C.award },
                                    o().createElement(b, {
                                        type: p.w.Award,
                                        size: e,
                                        count: t,
                                        disabled: n,
                                        onClick: g,
                                    }),
                                ),
                            o().createElement(
                                'div',
                                { className: C.award },
                                o().createElement(b, { type: p.w.Coin, count: s, onClick: E, size: e }),
                            ),
                            o().createElement(
                                'div',
                                { className: C.award },
                                o().createElement(b, {
                                    type: p.w.Point,
                                    count: a,
                                    onClick: m,
                                    size: e,
                                    isLocked: u,
                                    hasMarathon: h,
                                    hasResource: v,
                                }),
                            ),
                            d &&
                                o().createElement(
                                    'div',
                                    { className: r()(C.award, C.award__last) },
                                    o().createElement(b, {
                                        type: p.w.Collection,
                                        count: i,
                                        maxCount: l,
                                        newItemsCount: c,
                                        hasTriger: _,
                                        onClick: A,
                                        size: e,
                                    }),
                                ),
                        );
            },
            1481: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => d });
                var u = a(6179),
                    r = a.n(u),
                    n = a(6483),
                    o = a.n(n),
                    s = a(7727);
                const i = 'LoupeButton_base_ba',
                    l = 'LoupeButton_icon_44',
                    c = 'LoupeButton_iconHover_91',
                    _ = 'LoupeButton_hoverArea_d0',
                    d = ({ onClick: e, hoverAreaClasses: t }) => {
                        const a = (0, u.useCallback)(() => (0, s.G)('highlight'), []),
                            n = (0, u.useCallback)(() => {
                                ((0, s.G)('play'), e());
                            }, [e]),
                            d = o()(_, t);
                        return r().createElement(
                            'div',
                            { className: i, onClick: n, onMouseEnter: a },
                            r().createElement('div', { className: l }),
                            r().createElement('div', { className: c }),
                            t && r().createElement('div', { className: d }),
                        );
                    };
            },
            5287: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = { base: 'FormatText_base_d0' };
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var a = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](a, a.exports, __webpack_require__), a.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, a, u) => {
            if (!t) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, a, u] = deferred[i], n = !0, o = 0; o < t.length; o++)
                        (!1 & u || r >= u) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((n = !1), u < r && (r = u));
                    if (n) {
                        deferred.splice(i--, 1);
                        var s = a();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            u = u || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > u; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, a, u];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var a in t)
                __webpack_require__.o(t, a) &&
                    !__webpack_require__.o(e, a) &&
                    Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
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
        (__webpack_require__.j = 1488),
        (() => {
            var e = { 1488: 0, 7737: 0, 8363: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var u,
                        r,
                        [n, o, s] = a,
                        i = 0;
                    if (n.some((t) => 0 !== e[t])) {
                        for (u in o) __webpack_require__.o(o, u) && (__webpack_require__.m[u] = o[u]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(a); i < n.length; i++)
                        ((r = n[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(8787));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
