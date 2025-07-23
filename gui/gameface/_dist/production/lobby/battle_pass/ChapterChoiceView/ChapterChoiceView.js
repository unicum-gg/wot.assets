(() => {
    var __webpack_modules__ = {
            2372: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => o });
                var a = t(6179),
                    r = t.n(a),
                    n = t(4179);
                class o extends r().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = n.B3.GOLD;
                        else e = n.B3.INTEGRAL;
                        const u = n.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                o.defaultProps = { format: 'integral' };
            },
            280: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => s });
                var a = t(6179),
                    r = t.n(a),
                    n = t(6483),
                    o = t.n(n),
                    l = t(3649),
                    i = t(5287);
                const s = ({ binding: e, text: u = '', classMix: t, alignment: n = l.v2.left }) =>
                    null === u
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : r().createElement(
                              a.Fragment,
                              null,
                              u.split('\n').map((u, s) =>
                                  r().createElement(
                                      'div',
                                      { className: o()(i.Z.base, t), key: `${u}-${s}` },
                                      (0, l.Uw)(u, n, e).map((e, u) =>
                                          r().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => c });
                var a = t(3138),
                    r = t(6179),
                    n = t(1043),
                    o = t(5262);
                const l = a.O.client.getSize('rem'),
                    i = l.width,
                    s = l.height,
                    _ = Object.assign({ width: i, height: s }, (0, o.T)(i, s, n.j)),
                    c = (0, r.createContext)(_);
            },
            1039: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => _ });
                var a = t(6179),
                    r = t.n(a),
                    n = t(6536),
                    o = t(3495),
                    l = t(1043),
                    i = t(5262),
                    s = t(3138);
                const _ = (0, a.memo)(({ children: e }) => {
                    const u = (0, a.useContext)(o.Y),
                        t = (0, a.useState)(u),
                        _ = t[0],
                        c = t[1],
                        m = (0, a.useCallback)((e, u) => {
                            const t = s.O.view.pxToRem(e),
                                a = s.O.view.pxToRem(u);
                            c(Object.assign({ width: t, height: a }, (0, i.T)(t, a, l.j)));
                        }, []);
                    ((0, n.Z)(() => {
                        engine.on('clientResized', m);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', m), [m]));
                    const d = (0, a.useMemo)(() => Object.assign({}, _), [_]);
                    return r().createElement(o.Y.Provider, { value: d }, e);
                });
            },
            6010: (e, u, t) => {
                'use strict';
                var a = t(6179),
                    r = t(7382),
                    n = t(3495);
                const o = ['children'];
                const l = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, o);
                    const l = (0, a.useContext)(n.Y),
                        i = l.extraLarge,
                        s = l.large,
                        _ = l.medium,
                        c = l.small,
                        m = l.extraSmall,
                        d = l.extraLargeWidth,
                        E = l.largeWidth,
                        A = l.mediumWidth,
                        b = l.smallWidth,
                        h = l.extraSmallWidth,
                        F = l.extraLargeHeight,
                        C = l.largeHeight,
                        p = l.mediumHeight,
                        D = l.smallHeight,
                        g = l.extraSmallHeight,
                        B = { extraLarge: F, large: C, medium: p, small: D, extraSmall: g };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return u;
                        if (t.large && s) return u;
                        if (t.medium && _) return u;
                        if (t.small && c) return u;
                        if (t.extraSmall && m) return u;
                    } else {
                        if (t.extraLargeWidth && d) return (0, r.H)(u, t, B);
                        if (t.largeWidth && E) return (0, r.H)(u, t, B);
                        if (t.mediumWidth && A) return (0, r.H)(u, t, B);
                        if (t.smallWidth && b) return (0, r.H)(u, t, B);
                        if (t.extraSmallWidth && h) return (0, r.H)(u, t, B);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && F) return u;
                            if (t.largeHeight && C) return u;
                            if (t.mediumHeight && p) return u;
                            if (t.smallHeight && D) return u;
                            if (t.extraSmallHeight && g) return u;
                        }
                    }
                    return null;
                };
                l.defaultProps = {
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
                (0, a.memo)(l);
            },
            7382: (e, u, t) => {
                'use strict';
                t.d(u, { H: () => a });
                const a = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, u, t) => {
                'use strict';
                t.d(u, { YN: () => r.Y, ZN: () => a.Z });
                t(6010);
                var a = t(1039),
                    r = t(3495);
            },
            1043: (e, u, t) => {
                'use strict';
                t.d(u, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, u, t) => {
                'use strict';
                var a;
                function r(e, u, t) {
                    const a = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.width:
                                    return u.extraLarge.weight;
                                case e >= u.large.width && e < u.extraLarge.width:
                                    return u.large.weight;
                                case e >= u.medium.width && e < u.large.width:
                                    return u.medium.weight;
                                case e >= u.small.width && e < u.medium.width:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(e, t),
                        r = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.height:
                                    return u.extraLarge.weight;
                                case e >= u.large.height && e < u.extraLarge.height:
                                    return u.large.weight;
                                case e >= u.medium.height && e < u.large.height:
                                    return u.medium.weight;
                                case e >= u.small.height && e < u.medium.height:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(u, t),
                        n = Math.min(a, r);
                    return {
                        extraLarge: n === t.extraLarge.weight,
                        large: n === t.large.weight,
                        medium: n === t.medium.weight,
                        small: n === t.small.weight,
                        extraSmall: n === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
                    };
                }
                (t.d(u, { T: () => r }),
                    (function (e) {
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
                    })(a || (a = {})));
            },
            6373: (e, u, t) => {
                'use strict';
                t.d(u, { i: () => s });
                var a = t(2056),
                    r = t(6179),
                    n = t.n(r);
                const o = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    s = (e) => {
                        let u = e.children,
                            t = e.body,
                            s = e.header,
                            _ = e.note,
                            c = e.alert,
                            m = e.args,
                            d = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, o);
                        const E = (0, r.useMemo)(() => {
                            const e = Object.assign({}, m, { body: t, header: s, note: _, alert: c });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [c, t, s, _, m]);
                        return n().createElement(
                            a.u,
                            l(
                                {
                                    contentId:
                                        ((A = null == m ? void 0 : m.hasHtmlContent),
                                        A ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                d,
                            ),
                            u,
                        );
                        var A;
                    };
            },
            2056: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => s });
                var a = t(7902),
                    r = t(4179),
                    n = t(6179);
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
                function l(e) {
                    return Object.entries(e || {}).map(([e, u]) => {
                        const t = { __Type: 'GFValueProxy', name: e };
                        switch (typeof u) {
                            case 'number':
                                t.number = u;
                                break;
                            case 'boolean':
                                t.bool = u;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = u.toString();
                        }
                        return t;
                    });
                }
                const i = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    s = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            s = e.onMouseEnter,
                            _ = e.onMouseLeave,
                            c = e.onMouseDown,
                            m = e.onClick,
                            d = e.ignoreShowDelay,
                            E = void 0 !== d && d,
                            A = e.ignoreMouseClick,
                            b = void 0 !== A && A,
                            h = e.decoratorId,
                            F = void 0 === h ? 0 : h,
                            C = e.isEnabled,
                            p = void 0 === C || C,
                            D = e.targetId,
                            g = void 0 === D ? 0 : D,
                            B = e.onShow,
                            v = e.onHide,
                            w = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, o);
                        const f = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, n.useMemo)(() => g || (0, a.F)().resId, [g]),
                            x = (0, n.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (i(t, F, { isMouseEvent: !0, on: !0, arguments: l(r) }, S),
                                    B && B(),
                                    (f.current.isVisible = !0));
                            }, [t, F, r, S, B]),
                            L = (0, n.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        i(t, F, { on: !1 }, S),
                                        f.current.isVisible && v && v(),
                                        (f.current.isVisible = !1));
                                }
                            }, [t, F, S, v]),
                            M = (0, n.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(f.current.prevTarget) && L();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const e = f.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', M, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', M, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === p && L();
                            }, [p, L]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', L),
                                    () => {
                                        (window.removeEventListener('mouseleave', L), L());
                                    }
                                ),
                                [L],
                            ));
                        return p
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((f.current.timeoutId = window.setTimeout(x, E ? 100 : 400)),
                                                      s && s(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (L(), null == _ || _(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === b && L(), null == m || m(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === b && L(), null == c || c(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      w,
                                  ),
                              )
                            : u;
                        var y;
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
            122: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => a });
                const a = (e, u) => {
                    let t;
                    const a = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        ('function' == typeof t && t(), clearTimeout(a));
                    };
                };
            },
            527: (e, u, t) => {
                'use strict';
                (t.r(u), t.d(u, { mouse: () => l, onResize: () => n }));
                var a = t(2472),
                    r = t(1176);
                const n = (0, a.E)('clientResized'),
                    o = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const l = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', u),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', u),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, r.R)(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const n = `mouse${u}`,
                                        l = o[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, i),
                                        a(),
                                        () => {
                                            r &&
                                                (l(),
                                                window.removeEventListener(n, i),
                                                (e.listeners -= 1),
                                                a(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            ((e.enabled = !1), a());
                        },
                        enable() {
                            ((e.enabled = !0), a());
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
            5959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => n,
                        getSize: () => r,
                        graphicsQuality: () => o,
                    }));
                var a = t(527);
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
            1176: (e, u, t) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
            },
            2472: (e, u, t) => {
                'use strict';
                function a(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => a });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var a = t(5959);
                const r = { view: t(7641), client: a };
            },
            3722: (e, u, t) => {
                'use strict';
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => a }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var a = t(2472);
                const r = {
                    onTextureFrozen: (0, a.E)('self.onTextureFrozen'),
                    onTextureReady: (0, a.E)('self.onTextureReady'),
                    onDomBuilt: (0, a.E)('self.onDomBuilt'),
                    onLoaded: (0, a.E)('self.onLoaded'),
                    onDisplayChanged: (0, a.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, a.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, a.E)('children.onAdded'),
                        onLoaded: (0, a.E)('children.onLoaded'),
                        onRemoved: (0, a.E)('children.onRemoved'),
                        onAttached: (0, a.E)('children.onAttached'),
                        onTextureReady: (0, a.E)('children.onTextureReady'),
                        onRequestPosition: (0, a.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => l,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => n.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => B,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => s,
                        getDisplayStatus: () => v,
                        getScale: () => b,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => g,
                        isFocused: () => p,
                        pxToRem: () => h,
                        remToPx: () => F,
                        resize: () => d,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => D,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => S,
                    }));
                var a = t(3722),
                    r = t(6112),
                    n = t(6538),
                    o = t(8566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function s(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function _(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function E(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: F(u.x), y: F(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function F(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function D() {
                    return viewEnv.setEventHandled();
                }
                function g() {
                    return viewEnv.isEventHandled();
                }
                function B() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    f = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => s });
                const a = ['args'];
                const r = 2,
                    n = 16,
                    o = 32,
                    l = 64,
                    i = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, a);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, u]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof u) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: u };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: u };
                                                      default:
                                                          return { __Type: t, name: e, string: u.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    s = {
                        close(e) {
                            i('popover' === e ? r : o);
                        },
                        minimize() {
                            i(l);
                        },
                        move(e) {
                            i(n, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            7902: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => a });
                const a = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        a = R.invalid('resId');
                    return (
                        u &&
                            ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (a = window.subViews[t].id)),
                        { caller: t, stack: u, resId: a }
                    );
                };
            },
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var a = t(6179);
                const r = (e) => {
                    const u = (0, a.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            5415: (e, u, t) => {
                'use strict';
                t.d(u, { Aq: () => i, GS: () => s, cJ: () => o, fd: () => l });
                var a = t(6179),
                    r = t(7739),
                    n = t(1043);
                let o, l, i;
                (!(function (e) {
                    ((e[(e.ExtraSmall = n.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = n.j.small.width)] = 'Small'),
                        (e[(e.Medium = n.j.medium.width)] = 'Medium'),
                        (e[(e.Large = n.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = n.j.extraLarge.width)] = 'ExtraLarge'));
                })(o || (o = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = n.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = n.j.small.width)] = 'Small'),
                            (e[(e.Medium = n.j.medium.width)] = 'Medium'),
                            (e[(e.Large = n.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = n.j.extraLarge.width)] = 'ExtraLarge'));
                    })(l || (l = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = n.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = n.j.small.height)] = 'Small'),
                            (e[(e.Medium = n.j.medium.height)] = 'Medium'),
                            (e[(e.Large = n.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = n.j.extraLarge.height)] = 'ExtraLarge'));
                    })(i || (i = {})));
                const s = () => {
                    const e = (0, a.useContext)(r.YN),
                        u = e.width,
                        t = e.height,
                        n = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return o.ExtraLarge;
                                case e.large:
                                    return o.Large;
                                case e.medium:
                                    return o.Medium;
                                case e.small:
                                    return o.Small;
                                case e.extraSmall:
                                    return o.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), o.ExtraSmall);
                            }
                        })(e),
                        s = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return l.ExtraLarge;
                                case e.largeWidth:
                                    return l.Large;
                                case e.mediumWidth:
                                    return l.Medium;
                                case e.smallWidth:
                                    return l.Small;
                                case e.extraSmallWidth:
                                    return l.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), l.ExtraSmall);
                            }
                        })(e),
                        _ = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return i.ExtraLarge;
                                case e.largeHeight:
                                    return i.Large;
                                case e.mediumHeight:
                                    return i.Medium;
                                case e.smallHeight:
                                    return i.Small;
                                case e.extraSmallHeight:
                                    return i.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), i.ExtraSmall);
                            }
                        })(e);
                    return { mediaSize: n, mediaWidth: s, mediaHeight: _, remScreenWidth: u, remScreenHeight: t };
                };
            },
            5521: (e, u, t) => {
                'use strict';
                let a, r;
                (t.d(u, { n: () => a }),
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
                    })(a || (a = {})),
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
            7727: (e, u, t) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e);
                }
                t.d(u, { $: () => r, G: () => a });
                const r = {
                    playHighlight() {
                        a('highlight');
                    },
                    playClick() {
                        a('play');
                    },
                    playYes() {
                        a('yes1');
                    },
                };
            },
            3649: (e, u, t) => {
                'use strict';
                let a;
                function r(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                function n(e) {
                    return e.replace(/-/g, '_');
                }
                function o(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                (t.d(u, { BN: () => n, Uw: () => d, e: () => o, uF: () => r, v2: () => a }),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(a || (a = {})));
                const l = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    i = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    s = (e, u, t = a.left) => e.split(u).reduce(t === a.left ? l : i, []),
                    _ = (() => {
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    c = ['zh_cn', 'zh_sg', 'zh_tw'],
                    m = (e, u = a.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return c.includes(t)
                            ? _(e)
                            : ((e, u = a.left) => {
                                  let t = [];
                                  const r =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      n = e.replace(/&nbsp;/g, ' ');
                                  return (s(n, /( )/, u).forEach((e) => (t = t.concat(s(e, r, a.left)))), t);
                              })(e, u);
                    },
                    d = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : m(e, u)));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var a = t(3138);
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
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = a.O.view.addModelObserver(e, t, r);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(n) : (this._views[t] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
                        );
                    }
                    removeCallback(e, u = 0) {
                        let t = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((t = viewEnv.removeDataChangedCallback(e, u)), delete this._callbacks[e]),
                            t || console.error("Can't remove callback by id:", e),
                            t
                        );
                    }
                    _emmitDataChanged(e, u, t) {
                        t.forEach((t) => {
                            const a = this._callbacks[t];
                            void 0 !== a && a(e, u);
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
            4179: (e, u, t) => {
                'use strict';
                t.d(u, { Sw: () => n.Z, B3: () => s, Z5: () => o, B0: () => i, ry: () => F });
                class a {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let a = e.target;
                                    do {
                                        if (a === u) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (a.__instance || (a.__instance = new a()), a.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            a = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== a)),
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
                a.__instance = void 0;
                const r = a;
                var n = t(1358);
                const o = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    l = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
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
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    E = t(3138);
                const A = ['args'];
                function b(e, u, t, a, r, n, o) {
                    try {
                        var l = e[n](o),
                            i = l.value;
                    } catch (e) {
                        return void t(e);
                    }
                    l.done ? u(i) : Promise.resolve(i).then(a, r);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    F = (function () {
                        var e,
                            u =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var u = this,
                                        t = arguments;
                                    return new Promise(function (a, r) {
                                        var n = e.apply(u, t);
                                        function o(e) {
                                            b(n, a, r, o, l, 'next', e);
                                        }
                                        function l(e) {
                                            b(n, a, r, o, l, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, A);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, n, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, u]) => {
                                                  const t = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof u) {
                                                      case 'number':
                                                          t.number = u;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = u;
                                                          break;
                                                      default:
                                                          t.string = u.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    p = () => C(i.CLOSE),
                    D = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var g = t(7572);
                const B = r.instance,
                    v = {
                        DataTracker: n.Z,
                        ViewModel: g.Z,
                        ViewEventType: i,
                        NumberFormatType: s,
                        RealFormatType: _,
                        TimeFormatType: c,
                        DateFormatType: m,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => C(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => C(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, r = R.invalid('resId'), n) => {
                            const o = E.O.view.getViewGlobalPosition(),
                                l = t.getBoundingClientRect(),
                                s = l.x,
                                _ = l.y,
                                c = l.width,
                                m = l.height,
                                d = {
                                    x: E.O.view.pxToRem(s) + o.x,
                                    y: E.O.view.pxToRem(_) + o.y,
                                    width: E.O.view.pxToRem(c),
                                    height: E.O.view.pxToRem(m),
                                };
                            C(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: h(d),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => D(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            D(e, p);
                        },
                        handleViewEvent: C,
                        onBindingsReady: F,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const r = Object.prototype.toString.call(u[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < r.length; u++) t[a].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: B,
                        SystemLocale: o,
                        UserLocale: l,
                    };
                window.ViewEnvHelper = v;
            },
            6535: (e, u, t) => {
                'use strict';
                var a = t(7739),
                    r = t(6179),
                    n = t.n(r),
                    o = t(6483),
                    l = t.n(o),
                    i = t(926),
                    s = t.n(i),
                    _ = t(5415);
                const c = ['children', 'className'];
                function m() {
                    return (
                        (m =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                }
                const d = {
                        [_.fd.ExtraSmall]: '',
                        [_.fd.Small]: s().SMALL_WIDTH,
                        [_.fd.Medium]: `${s().SMALL_WIDTH} ${s().MEDIUM_WIDTH}`,
                        [_.fd.Large]: `${s().SMALL_WIDTH} ${s().MEDIUM_WIDTH} ${s().LARGE_WIDTH}`,
                        [_.fd.ExtraLarge]:
                            `${s().SMALL_WIDTH} ${s().MEDIUM_WIDTH} ${s().LARGE_WIDTH} ${s().EXTRA_LARGE_WIDTH}`,
                    },
                    E = {
                        [_.Aq.ExtraSmall]: '',
                        [_.Aq.Small]: s().SMALL_HEIGHT,
                        [_.Aq.Medium]: `${s().SMALL_HEIGHT} ${s().MEDIUM_HEIGHT}`,
                        [_.Aq.Large]: `${s().SMALL_HEIGHT} ${s().MEDIUM_HEIGHT} ${s().LARGE_HEIGHT}`,
                        [_.Aq.ExtraLarge]:
                            `${s().SMALL_HEIGHT} ${s().MEDIUM_HEIGHT} ${s().LARGE_HEIGHT} ${s().EXTRA_LARGE_HEIGHT}`,
                    },
                    A = {
                        [_.cJ.ExtraSmall]: '',
                        [_.cJ.Small]: s().SMALL,
                        [_.cJ.Medium]: `${s().SMALL} ${s().MEDIUM}`,
                        [_.cJ.Large]: `${s().SMALL} ${s().MEDIUM} ${s().LARGE}`,
                        [_.cJ.ExtraLarge]: `${s().SMALL} ${s().MEDIUM} ${s().LARGE} ${s().EXTRA_LARGE}`,
                    },
                    b = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, c);
                        const r = (0, _.GS)(),
                            o = r.mediaWidth,
                            i = r.mediaHeight,
                            s = r.mediaSize;
                        return n().createElement('div', m({ className: l()(t, d[o], E[i], A[s]) }, a), u);
                    },
                    h = ['children'];
                const F = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, h);
                    return n().createElement(a.ZN, null, n().createElement(b, t, u));
                };
                var C = t(493),
                    p = t.n(C),
                    D = t(7727);
                const g = {
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
                    B = [
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
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                }
                class w extends n().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, D.G)(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, D.G)(this.props.soundClick));
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                (e && e(u), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            a = e.goto,
                            r = e.side,
                            o = e.type,
                            i = e.classNames,
                            s = e.onMouseEnter,
                            _ = e.onMouseLeave,
                            c = e.onMouseDown,
                            m = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(e, B)),
                            E = l()(g.base, g[`base__${o}`], g[`base__${r}`], null == i ? void 0 : i.base),
                            A = l()(g.icon, g[`icon__${o}`], g[`icon__${r}`], null == i ? void 0 : i.icon),
                            b = l()(g.glow, null == i ? void 0 : i.glow),
                            h = l()(g.caption, g[`caption__${o}`], null == i ? void 0 : i.caption),
                            F = l()(g.goto, null == i ? void 0 : i.goto);
                        return n().createElement(
                            'div',
                            v(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(_),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== o && n().createElement('div', { className: g.shine }),
                            n().createElement('div', { className: A }, n().createElement('div', { className: b })),
                            n().createElement('div', { className: h }, u),
                            a && n().createElement('div', { className: F }, a),
                        );
                    }
                }
                w.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const f = (e) => {
                    let u,
                        t = null;
                    return (
                        (t = requestAnimationFrame(() => {
                            t = requestAnimationFrame(() => {
                                ((t = null), (u = e()));
                            });
                        })),
                        () => {
                            ('function' == typeof u && u(), null !== t && cancelAnimationFrame(t));
                        }
                    );
                };
                var S = t(3138),
                    x = t(5521),
                    L = t(4179);
                const M = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function y(e = x.n.NONE, u = M, t = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== x.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (S.O.view.isEventHandled()) return;
                                (S.O.view.setEventHandled(), u(a), t && a.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                function P(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const k = P;
                function T(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                function N(e, u) {
                    if (Array.isArray(e)) return e.some(u);
                    for (let t = 0; t < e.length; t++) {
                        if (u(k(e, t), t, e)) return !0;
                    }
                    return !1;
                }
                var I = t(3403);
                let O, H;
                (!(function (e) {
                    ((e.style = 'style'), (e.tankman = 'tankman'), (e.vehicle = 'vehicle'));
                })(O || (O = {})),
                    (function (e) {
                        ((e.Default = 'default'), (e.Marathon = 'marathon'), (e.Resource = 'resource'));
                    })(H || (H = {})));
                (O.style, O.tankman);
                var $ = t(6895);
                const G = (e) => ({
                    level: (null == e ? void 0 : e.currentLevel) || 0,
                    to: null == e ? void 0 : e.levelProgression,
                    from: null == e ? void 0 : e.levelProgression,
                });
                let W;
                !(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large'));
                })(W || (W = {}));
                let U, j;
                (!(function (e) {
                    ((e.Active = 'active'),
                        (e.Paused = 'paused'),
                        (e.Completed = 'completed'),
                        (e.NotStarted = 'notStarted'),
                        (e.Disabled = 'disabled'));
                })(U || (U = {})),
                    (function (e) {
                        ((e.Default = 'default'), (e.Marathon = 'marathon'), (e.Resource = 'resource'));
                    })(j || (j = {})));
                function z() {
                    return !1;
                }
                console.log;
                var X = t(9174);
                function q(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return V(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return V(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function V(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const Y = (e) => (0 === e ? window : window.subViews.get(e));
                const K = (e) =>
                    null !== e && 'object' == typeof e
                        ? 'CoherentArrayProxy' === e.constructor.name
                            ? T(e, (e) => ('object' == typeof e ? K(e) : e))
                            : Array.isArray(e)
                              ? e.map((e) => ('object' == typeof e ? K(e) : e))
                              : Object.fromEntries(
                                    Object.entries(e).map(([e, u]) => [e, 'object' == typeof u ? K(u) : u]),
                                )
                        : e;
                var Z = t(3946);
                const Q = ((e, u) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: o, children: l, mocks: i }) {
                                const s = (0, r.useRef)([]),
                                    _ = (t, a, r) => {
                                        var n;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Y,
                                                context: a = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function n(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = r.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const r = t(u),
                                                        n = a.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (t, n) => {
                                                        const l = 'string' == typeof n ? `${a}.${n}` : a,
                                                            i = S.O.view.addModelObserver(l, u, !0);
                                                        return (r.set(i, t), e && t(o(n)), i);
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, u) => {
                                                        const t = o(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = o(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = q(r.keys()); !(e = t()).done; ) n(e.value, u);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(a),
                                            l =
                                                'real' === t
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            i = (e) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(e)) : l.readByPath(e),
                                            _ = (e) => s.current.push(e),
                                            c = e({
                                                mode: t,
                                                readByPath: i,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const a = null != u ? u : i(e),
                                                            r = X.LO.box(a, { equals: z });
                                                        return (
                                                            'real' === t &&
                                                                l.subscribe(
                                                                    (0, X.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const a = null != u ? u : i(e),
                                                            r = X.LO.box(a, { equals: z });
                                                        return (
                                                            'real' === t &&
                                                                l.subscribe(
                                                                    (0, X.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const a = i(u);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, u) => ((e[u] = X.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    l.subscribe(
                                                                        (0, X.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                n = Object.entries(r),
                                                                o = n.reduce(
                                                                    (e, [u, t]) => ((e[t] = X.LO.box(a[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    l.subscribe(
                                                                        (0, X.aD)((e) => {
                                                                            n.forEach(([u, t]) => {
                                                                                o[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: _,
                                            }),
                                            m = { mode: t, model: c, externalModel: l, cleanup: _ };
                                        return {
                                            model: c,
                                            controls: 'mocks' === t && r ? r.controls(m) : u(m),
                                            externalModel: l,
                                            mode: t,
                                        };
                                    },
                                    c = (0, r.useRef)(!1),
                                    m = (0, r.useState)(a),
                                    d = m[0],
                                    E = m[1],
                                    A = (0, r.useState)(() => _(a, o, i)),
                                    b = A[0],
                                    h = A[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        c.current ? h(_(d, o, i)) : (c.current = !0);
                                    }, [i, d, o]),
                                    (0, r.useEffect)(() => {
                                        E(a);
                                    }, [a]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            (b.externalModel.dispose(), s.current.forEach((e) => e()));
                                        },
                                        [b],
                                    ),
                                    n().createElement(t.Provider, { value: b }, l)
                                );
                            },
                            () => (0, r.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    collectionEntryPoint: e.object('collectionEntryPoint'),
                                    chapterTypes: e.array('availableChapterTypes'),
                                    chapters: e.array('chapters'),
                                },
                                t = (0, Z.Om)(() => N(u.chapters.get(), ({ chapterState: e }) => e === U.Active), {
                                    equals: z,
                                }),
                                a = (0, Z.Om)(
                                    () =>
                                        (function (e, u) {
                                            if (Array.isArray(e)) return e.every(u);
                                            for (let t = 0; t < e.length; t++) if (!u(k(e, t), t, e)) return !1;
                                            return !0;
                                        })(u.chapters.get(), ({ chapterState: e }) => e === U.Completed),
                                    { equals: z },
                                ),
                                r = (0, Z.Om)(() => N(u.chapters.get(), ({ chapterType: e }) => e === H.Marathon), {
                                    equals: z,
                                }),
                                n = (0, Z.Om)(
                                    () => {
                                        return ((e = u.chapters.get()), K(e));
                                        var e;
                                    },
                                    { equals: z },
                                ),
                                o = (0, Z.Om)(
                                    (e) => {
                                        if (e) return n().find((u) => u.chapterID === e);
                                    },
                                    { equals: z },
                                ),
                                l = (0, Z.Om)((e) => N(u.chapters.get(), (u) => u.chapterType === e), { equals: z }),
                                i = (0, Z.Om)(
                                    () => {
                                        var e;
                                        return null ==
                                            (e = n().find(
                                                (e) => e.chapterState === U.NotStarted || e.chapterState === U.Paused,
                                            ))
                                            ? void 0
                                            : e.chapterID;
                                    },
                                    { equals: z },
                                );
                            return Object.assign({}, u, {
                                computes: {
                                    getChapterById: o,
                                    hasChapter: l,
                                    hasActive: t,
                                    isCompleted: a,
                                    getChapters: n,
                                    hasMarathon: r,
                                    getTriggerChapterId: i,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            selectChapter: e.createCallback((e) => ({ chapterID: e }), 'onChapterSelect'),
                            buyChapter: e.createCallback((e) => ({ chapterID: e }), 'onBuyClick'),
                            openPreview: e.createCallback((e) => ({ chapterID: e }), 'onPreviewClick'),
                            openAbout: e.createCallbackNoArgs('onAboutClick'),
                            openPointsInfo: e.createCallbackNoArgs('onPointsInfoClick'),
                            takeRewards: e.createCallbackNoArgs('onTakeRewardsClick'),
                            openGoodsForBpCoins: e.createCallbackNoArgs('onBpcoinClick'),
                            openGoodsForBpPoints: e.createCallbackNoArgs('onBpbitClick'),
                            onViewLoaded: e.createCallbackNoArgs('onViewLoaded'),
                            close: e.createCallbackNoArgs('onClose'),
                            activateChapter: e.createCallback((e) => ({ chapterID: e }), 'onActivateChapter'),
                            openCollection: e.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                        }),
                    ),
                    J = Q[0],
                    ee = Q[1],
                    ue = {
                        base: 'App_base_26',
                        backgroundBlur: 'App_backgroundBlur_26',
                        background: 'App_background_6b',
                        infoButtons: 'App_infoButtons_78',
                        header: 'App_header_41',
                        flags: 'App_flags_d9',
                        divider: 'App_divider_21',
                        chapters: 'App_chapters_8a',
                        chapterLeft: 'App_chapterLeft_91',
                        chapterRight: 'App_chapterRight_5c',
                        chapterHolder: 'App_chapterHolder_48',
                        base__hasMarathon: 'App_base__hasMarathon_7f',
                    },
                    te = {
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
                let ae, re;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(ae || (ae = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(re || (re = {})));
                const ne = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: a,
                    disabled: o,
                    mixClass: i,
                    soundHover: s,
                    soundClick: _,
                    onMouseEnter: c,
                    onMouseMove: m,
                    onMouseDown: d,
                    onMouseUp: E,
                    onMouseLeave: A,
                    onClick: b,
                }) => {
                    const h = (0, r.useRef)(null),
                        F = (0, r.useState)(t),
                        C = F[0],
                        p = F[1],
                        g = (0, r.useState)(!1),
                        B = g[0],
                        v = g[1],
                        w = (0, r.useState)(!1),
                        f = w[0],
                        S = w[1],
                        x = (0, r.useCallback)(() => {
                            o || (h.current && (h.current.focus(), p(!0)));
                        }, [o]),
                        L = (0, r.useCallback)(
                            (e) => {
                                C && null !== h.current && !h.current.contains(e.target) && p(!1);
                            },
                            [C],
                        ),
                        M = (0, r.useCallback)(
                            (e) => {
                                o || (b && b(e));
                            },
                            [o, b],
                        ),
                        y = (0, r.useCallback)(
                            (e) => {
                                o || (null !== s && (0, D.G)(s), c && c(e), S(!0));
                            },
                            [o, s, c],
                        ),
                        P = (0, r.useCallback)(
                            (e) => {
                                m && m(e);
                            },
                            [m],
                        ),
                        k = (0, r.useCallback)(
                            (e) => {
                                o || (E && E(e), v(!1));
                            },
                            [o, E],
                        ),
                        T = (0, r.useCallback)(
                            (e) => {
                                o || (null !== _ && (0, D.G)(_), d && d(e), t && x(), v(!0));
                            },
                            [o, _, d, x, t],
                        ),
                        N = (0, r.useCallback)(
                            (e) => {
                                o || (A && A(e), v(!1));
                            },
                            [o, A],
                        ),
                        I = l()(
                            te.base,
                            te[`base__${a}`],
                            {
                                [te.base__disabled]: o,
                                [te[`base__${u}`]]: u,
                                [te.base__focus]: C,
                                [te.base__highlightActive]: B,
                                [te.base__firstHover]: f,
                            },
                            i,
                        ),
                        O = l()(te.state, te.state__default);
                    return (
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', L),
                                () => {
                                    document.removeEventListener('mousedown', L);
                                }
                            ),
                            [L],
                        ),
                        (0, r.useEffect)(() => {
                            p(t);
                        }, [t]),
                        n().createElement(
                            'div',
                            {
                                ref: h,
                                className: I,
                                onMouseEnter: y,
                                onMouseMove: P,
                                onMouseUp: k,
                                onMouseDown: T,
                                onMouseLeave: N,
                                onClick: M,
                            },
                            a !== ae.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: te.back }),
                                    n().createElement('span', { className: te.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: O },
                                n().createElement('span', { className: te.stateDisabled }),
                                n().createElement('span', { className: te.stateHighlightHover }),
                                n().createElement('span', { className: te.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: te.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ne.defaultProps = { type: ae.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const oe = (0, r.memo)(ne),
                    le = {
                        base: 'Preview_base_1f',
                        base__hovered: 'Preview_base__hovered_ee',
                        icon: 'Preview_icon_f3',
                        icon__small: 'Preview_icon__small_a1',
                        icon__normal: 'Preview_icon__normal_5c',
                        base__mouseDown: 'Preview_base__mouseDown_d0',
                        label: 'Preview_label_2e',
                        base__visibleLabel: 'Preview_base__visibleLabel_92',
                    },
                    ie = [
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
                function se() {
                    return (
                        (se =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        se.apply(this, arguments)
                    );
                }
                let _e;
                !(function (e) {
                    ((e.SMALL = 'small'), (e.NORMAL = 'normal'));
                })(_e || (_e = {}));
                const ce = (0, r.memo)((e) => {
                    let u = e.label,
                        t = e.isVisibleLabel,
                        a = void 0 !== t && t,
                        o = e.autofocus,
                        i = void 0 !== o && o,
                        s = e.soundHover,
                        _ = void 0 === s ? 'highlight' : s,
                        c = e.soundClick,
                        m = void 0 === c ? 'play' : c,
                        d = e.size,
                        E = void 0 === d ? _e.NORMAL : d,
                        A = e.classNames,
                        b = e.onClick,
                        h = e.onMouseEnter,
                        F = e.onMouseLeave,
                        C = e.onMouseDown,
                        p = e.onMouseUp,
                        g = e.onFocus,
                        B = e.onBlur,
                        v = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, ie);
                    const w = (0, r.useState)(!1),
                        f = w[0],
                        S = w[1],
                        x = (0, r.useState)(!1),
                        L = x[0],
                        M = x[1],
                        y = (0, r.useState)(i),
                        P = y[0],
                        k = y[1],
                        T = (0, r.useRef)(null),
                        N = (0, r.useCallback)(() => {
                            T.current && (T.current.focus(), k(!0));
                        }, []),
                        I = (0, r.useCallback)(
                            (e) => {
                                P && null !== T.current && !T.current.contains(e.target) && k(!1);
                            },
                            [P],
                        );
                    ((0, r.useEffect)(
                        () => (
                            document.addEventListener('mousedown', I),
                            () => {
                                document.removeEventListener('mousedown', I);
                            }
                        ),
                        [I],
                    ),
                        (0, r.useEffect)(() => {
                            k(i);
                        }, [i]));
                    const R = (0, r.useCallback)(
                            (e) => {
                                b && b(e);
                            },
                            [b],
                        ),
                        O = (0, r.useCallback)(
                            (e) => {
                                (S(!0), C && C(e), m && (0, D.G)(m), i && N());
                            },
                            [i, C, N, m],
                        ),
                        H = (0, r.useCallback)(
                            (e) => {
                                (S(!1), p && p(e));
                            },
                            [p],
                        ),
                        $ = (0, r.useCallback)(
                            (e) => {
                                (h && h(e), _ && (0, D.G)(_), M(!0));
                            },
                            [h, _],
                        ),
                        G = (0, r.useCallback)(
                            (e) => {
                                (S(!1), M(!1), F && F(e));
                            },
                            [F],
                        ),
                        W = (0, r.useCallback)(
                            (e) => {
                                (k(!0), g && g(e));
                            },
                            [g],
                        ),
                        U = (0, r.useCallback)(
                            (e) => {
                                (k(!1), B && B(e));
                            },
                            [B],
                        ),
                        j = l()(
                            le.base,
                            a && le.base__visibleLabel,
                            f && le.base__mouseDown,
                            L && le.base__hovered,
                            P && le.base__focused,
                            null == A ? void 0 : A.base,
                        ),
                        z = l()(le.icon, le[`icon__${E}`], null == A ? void 0 : A.icon),
                        X = l()(le.label, null == A ? void 0 : A.label);
                    return n().createElement(
                        'div',
                        se(
                            {
                                ref: T,
                                className: j,
                                onClick: R,
                                onMouseEnter: $,
                                onMouseLeave: G,
                                onMouseDown: O,
                                onMouseUp: H,
                                onFocus: W,
                                onBlur: U,
                            },
                            v,
                        ),
                        n().createElement('div', { className: z }),
                        n().createElement('div', { className: X }, u),
                    );
                });
                var me = t(9887),
                    de = t.n(me);
                const Ee = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Ae = (e) => e.includes('_') && ((e) => Ee.includes(e))(e.split('_').at(-1)),
                    be = [_.cJ.ExtraLarge, _.cJ.Large, _.cJ.Medium, _.cJ.Small, _.cJ.ExtraSmall],
                    he = (e, u) =>
                        Object.keys(e).reduce((t, a) => {
                            if (a in t) return t;
                            if (Ae(a)) {
                                const r = a.split('_').slice(0, -1).join('_');
                                if (r in t) return t;
                                const n = be.indexOf(u),
                                    o = (-1 !== n ? Ee.slice(n) : [])
                                        .map((e) => r + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    l = o ? e[o] : void 0;
                                return ((t[r] = void 0 !== l ? l : e[r]), t);
                            }
                            const r = e[a];
                            return (
                                void 0 === r ||
                                    ((e, u) => Ee.some((t) => void 0 !== u[`${e}_${t}`]))(a, e) ||
                                    (t[a] = r),
                                t
                            );
                        }, {}),
                    Fe = (e, u = he) => {
                        const t = (
                            (e, u = he) =>
                            (t) => {
                                const a = (0, _.GS)().mediaSize,
                                    o = (0, r.useMemo)(() => u(t, a), [t, a]);
                                return n().createElement(e, o);
                            }
                        )(e, u);
                        return n().memo((u) =>
                            Object.keys(u).some((e) => Ae(e) && void 0 !== u[e])
                                ? n().createElement(t, u)
                                : n().createElement(e, u),
                        );
                    },
                    Ce = {
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
                    pe = [
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
                function De() {
                    return (
                        (De =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        De.apply(this, arguments)
                    );
                }
                Object.keys(de());
                const ge = {
                        XL: { mt: Ce.mt__XL, mr: Ce.mr__XL, mb: Ce.mb__XL, ml: Ce.ml__XL },
                        LG: { mt: Ce.mt__LG, mr: Ce.mr__LG, mb: Ce.mb__LG, ml: Ce.ml__LG },
                        MDp: { mt: Ce.mt__MDp, mr: Ce.mr__MDp, mb: Ce.mb__MDp, ml: Ce.ml__MDp },
                        MD: { mt: Ce.mt__MD, mr: Ce.mr__MD, mb: Ce.mb__MD, ml: Ce.ml__MD },
                        SMp: { mt: Ce.mt__SMp, mr: Ce.mr__SMp, mb: Ce.mb__SMp, ml: Ce.ml__SMp },
                        SM: { mt: Ce.mt__SM, mr: Ce.mr__SM, mb: Ce.mb__SM, ml: Ce.ml__SM },
                        XS: { mt: Ce.mt__XS, mr: Ce.mr__XS, mb: Ce.mb__XS, ml: Ce.ml__XS },
                    },
                    Be = (Object.keys(ge), ['mt', 'mr', 'mb', 'ml']),
                    ve = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    we = Fe((e) => {
                        let u = e.className,
                            t = e.width,
                            a = e.height,
                            o = e.m,
                            i = e.mt,
                            s = void 0 === i ? o : i,
                            _ = e.mr,
                            c = void 0 === _ ? o : _,
                            m = e.mb,
                            d = void 0 === m ? o : m,
                            E = e.ml,
                            A = void 0 === E ? o : E,
                            b = e.column,
                            h = e.row,
                            F = e.flexDirection,
                            C = void 0 === F ? (b ? 'column' : h && 'row') || void 0 : F,
                            p = e.flexStart,
                            D = e.center,
                            g = e.flexEnd,
                            B = e.spaceBetween,
                            v = e.spaceAround,
                            w = e.justifyContent,
                            f =
                                void 0 === w
                                    ? (p ? 'flex-start' : D && 'center') ||
                                      (g && 'flex-end') ||
                                      (B && 'space-between') ||
                                      (v && 'space-around') ||
                                      void 0
                                    : w,
                            S = e.alignItems,
                            x = void 0 === S ? (p ? 'flex-start' : D && 'center') || (g && 'flex-end') || void 0 : S,
                            L = e.alignSelf,
                            M = e.wrap,
                            y = e.flexWrap,
                            P = void 0 === y ? (M ? 'wrap' : void 0) : y,
                            k = e.grow,
                            T = e.shrink,
                            N = e.flex,
                            I = void 0 === N ? (k || T ? `${k ? 1 : 0} ${T ? 1 : 0} auto` : void 0) : N,
                            R = e.style,
                            O = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, pe);
                        const $ = (0, r.useMemo)(() => {
                                const e = { mt: s, mr: c, mb: d, ml: A },
                                    u = ((e) =>
                                        Be.reduce((u, t) => {
                                            const a = e[t];
                                            return a && 'number' != typeof a ? u.concat(ge[!0 === a ? 'MD' : a][t]) : u;
                                        }, []))(e),
                                    r = ((e) =>
                                        Be.reduce((u, t) => {
                                            const a = e[t];
                                            return ('number' == typeof a && (u[ve[t]] = a + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, R, r, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        flex: I,
                                        alignSelf: L,
                                        display: C || x ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: P,
                                        justifyContent: f,
                                        alignItems: x,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, a, s, c, d, A, R, I, L, C, P, f, x]),
                            G = $.computedStyle,
                            W = $.computedClassNames;
                        return n().createElement('div', De({ className: l()(Ce.base, ...W, u), style: G }, H), O);
                    });
                var fe = t(280),
                    Se = t(3532),
                    xe = t.n(Se);
                const Le = {
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
                    Me = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function ye() {
                    return (
                        (ye =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ye.apply(this, arguments)
                    );
                }
                Object.keys(de());
                const Pe = Object.keys(xe()),
                    ke = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Te = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ne = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ie = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    Re =
                        (Object.keys(Ie),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': ke,
                            'heading-H36': ke,
                            'heading-H28': Te,
                            'heading-H24': Te,
                            'heading-H24R': Te,
                            'heading-H22': Te,
                            'heading-H20R': Te,
                            'heading-H18': Te,
                            'heading-H15': Ne,
                            'heading-H14': Ne,
                            'paragraph-P24': Te,
                            'paragraph-P18': Te,
                            'paragraph-P16': Te,
                            'paragraph-P14': Ne,
                            'paragraph-P12': Ne,
                            'paragraph-P10': Ne,
                        }),
                    Oe =
                        (Object.keys(Re),
                        (e) =>
                            e
                                ? ((e) => Pe.includes(e))(e)
                                    ? { colorClassName: Le[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    He = Fe((e) => {
                        let u = e.text,
                            t = e.variant,
                            a = e.className,
                            o = e.color,
                            i = e.m,
                            s = e.mt,
                            _ = void 0 === s ? i : s,
                            c = e.mr,
                            m = void 0 === c ? i : c,
                            d = e.mb,
                            E = void 0 === d ? i : d,
                            A = e.ml,
                            b = void 0 === A ? i : A,
                            h = e.style,
                            F = e.format,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Me);
                        const p = (0, r.useMemo)(() => {
                                const e = Oe(o),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    a = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, h, a), colorClassName: u };
                            }, [h, o]),
                            D = p.computedStyle,
                            g = p.colorClassName;
                        return n().createElement(
                            we,
                            ye(
                                {
                                    className: l()(Le.base, t && Le[t], g, a),
                                    style: D,
                                    mt: !0 === _ ? Re[t || 'paragraph-P16'].mt : _,
                                    mr: !0 === m ? Re[t || 'paragraph-P16'].mr : m,
                                    mb: !0 === E ? Re[t || 'paragraph-P16'].mb : E,
                                    ml: !0 === b ? Re[t || 'paragraph-P16'].ml : b,
                                },
                                C,
                            ),
                            void 0 !== F ? n().createElement(fe.z, ye({}, F, { text: u })) : u,
                        );
                    });
                var $e = t(6373);
                const Ge = [];
                function We(e) {
                    const u = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, u.current)(...e), Ge)
                    );
                }
                var Ue = t(7902);
                const je = (e, u) => e.split('.').reduce((e, u) => e && e[u], u);
                var ze = t(6536);
                const Xe = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    qe = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    Ve = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const a = je(`${e}.${t}`, window);
                                return Xe(a) ? u(e, t, a) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    Ye = (e) => {
                        const u = ((e) => {
                                const u = (0, Ue.F)(),
                                    t = u.caller,
                                    a = u.resId,
                                    r = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: r, modelPath: qe(r, e || ''), resId: a };
                            })(),
                            t = u.modelPrefix,
                            a = e.split('.');
                        if (a.length > 0) {
                            const e = [a[0]];
                            return (
                                a.reduce((u, a) => {
                                    const r = je(qe(t, `${u}.${a}`), window);
                                    return Xe(r) ? (e.push(r.id), `${u}.${a}.value`) : (e.push(a), `${u}.${a}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    Ke = L.Sw.instance;
                let Ze;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(Ze || (Ze = {}));
                const Qe = (e = 'model', u = Ze.Deep) => {
                        const t = (0, r.useState)(0),
                            a = (t[0], t[1]),
                            n = (0, r.useMemo)(() => (0, Ue.F)(), []),
                            o = n.caller,
                            l = n.resId,
                            i = (0, r.useMemo)(
                                () => (window.__feature && window.__feature !== o ? `subViews.${o}.${e}` : e),
                                [o, e],
                            ),
                            s = (0, r.useState)(() =>
                                ((e) => {
                                    const u = je(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return Xe(u) ? u.value : u;
                                })(Ve(i)),
                            ),
                            _ = s[0],
                            c = s[1],
                            m = (0, r.useRef)(-1);
                        return (
                            (0, ze.Z)(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? Ze.Deep : Ze.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== Ze.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === Ze.Deep
                                                ? (e === _ && a((e) => e + 1), c(e))
                                                : c(Object.assign([], e));
                                        },
                                        r = Ye(e);
                                    m.current = Ke.addCallback(r, t, l, u === Ze.Deep);
                                }
                            }),
                            (0, r.useEffect)(() => {
                                if (u !== Ze.None)
                                    return () => {
                                        Ke.removeCallback(m.current, l);
                                    };
                            }, [l, u]),
                            _
                        );
                    },
                    Je = 'display',
                    eu = 'enabled',
                    uu = 'enabled_change';
                var tu = t(3649),
                    au = t(903);
                const ru = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    nu = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const ou = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    lu = (e) =>
                        ou
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = nu.length - 1; t >= 0; t--)
                                      for (; e >= nu[t]; ) ((u += ru[t]), (e -= nu[t]));
                                  return u;
                              })(e),
                    iu = {
                        base: 'TankName_base_f1',
                        base__sizeMedium: 'TankName_base__sizeMedium_3a',
                        base__sizBig: 'TankName_base__sizBig_a9',
                        base__typeWhite: 'TankName_base__typeWhite_32',
                        base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                        base__typeColored: 'TankName_base__typeColored_bc',
                        level: 'TankName_level_bb',
                        type: 'TankName_type_3c',
                        type__elite: 'TankName_type__elite_cc',
                        base__sizeBig: 'TankName_base__sizeBig_2b',
                        name: 'TankName_name_56',
                        base__tagPremiumIGR: 'TankName_base__tagPremiumIGR_26',
                        premiumIGR: 'TankName_premiumIGR_25',
                    };
                let su, _u;
                (!(function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big'));
                })(su || (su = {})),
                    (function (e) {
                        ((e.colored = 'colored'), (e.white = 'white'), (e.whiteSpanish = 'whiteSpanish'));
                    })(_u || (_u = {})));
                const cu = ({
                    isElite: e,
                    vehicleName: u,
                    vehicleShortName: t,
                    vehicleType: a,
                    vehicleLvl: r,
                    tags: o,
                    isPremiumIGR: i,
                    size: s = su.extraSmall,
                    type: _ = _u.colored,
                    className: c,
                    classNames: m,
                    isShortName: d = !1,
                }) => {
                    const E = `${(0, tu.BN)(a)}${e ? '_elite' : ''}`,
                        A = R.images.gui.maps.icons.vehicleTypes.big.$dyn(E);
                    return n().createElement(
                        'div',
                        {
                            className: l()(
                                iu.base,
                                iu[`base__size${(0, tu.e)(s)}`],
                                iu[`base__type${(0, tu.e)(_)}`],
                                o && T(o, (e) => iu[`base__tag${(0, tu.e)(e)}`]),
                                c,
                            ),
                        },
                        n().createElement('div', { className: l()(iu.level, null == m ? void 0 : m.level) }, lu(r)),
                        n().createElement('div', {
                            className: l()(iu.type, e && iu.type__elite, null == m ? void 0 : m.typeIcon),
                            style: { backgroundImage: `url(${A})` },
                        }),
                        i && n().createElement('div', { className: iu.premiumIGR }),
                        n().createElement('div', { className: l()(iu.name, null == m ? void 0 : m.name) }, d ? t : u),
                    );
                };
                let mu, du, Eu, Au, bu, hu, Fu;
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
                        (e.Quests = 'quests'));
                })(mu || (mu = {})),
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
                    })(du || (du = {})),
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
                    })(Eu || (Eu = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(Au || (Au = {})),
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
                    })(bu || (bu = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(hu || (hu = {})),
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
                    })(Fu || (Fu = {})));
                t(2372);
                (mu.Items,
                    mu.Equipment,
                    mu.Xp,
                    mu.XpFactor,
                    mu.Blueprints,
                    mu.BlueprintsAny,
                    mu.Goodies,
                    mu.Berths,
                    mu.Slots,
                    mu.Tokens,
                    mu.CrewSkins,
                    mu.CrewBooks,
                    mu.Customizations,
                    mu.CreditsFactor,
                    mu.TankmenXp,
                    mu.TankmenXpFactor,
                    mu.FreeXpFactor,
                    mu.BattleToken,
                    mu.PremiumUniversal,
                    mu.NaturalCover,
                    mu.BpCoin,
                    mu.BattlePassSelectToken,
                    mu.BattlaPassFinalAchievement,
                    mu.BattleBadge,
                    mu.BonusX5,
                    mu.CrewBonusX3,
                    mu.NewYearFillers,
                    mu.NewYearInvoice,
                    mu.EpicSelectToken,
                    mu.Comp7TokenWeeklyReward,
                    mu.Comp7TokenCouponReward,
                    mu.BattleBoosterGift,
                    mu.CosmicLootboxCommon,
                    mu.CosmicLootboxSilver,
                    mu.SelectableBonus,
                    mu.GoldenTicket,
                    mu.PostStamp,
                    mu.Gold,
                    mu.Credits,
                    mu.Crystal,
                    mu.FreeXp,
                    mu.BattlePassPoints,
                    mu.PremiumPlus,
                    mu.Premium);
                var Cu = t(8546);
                const pu = 'bp_highlight',
                    Du = (e) => {
                        const u = O[e];
                        return (u || console.warn('Unknown FinalReward key: ', e), u);
                    },
                    gu = 'Delimiter_base_bd',
                    Bu = 'Delimiter_line_46',
                    vu = 'Delimiter_base__active_28',
                    wu = 'Delimiter_line__left_0a',
                    fu = 'Delimiter_line__right_6a',
                    Su = ({ isActive: e }) =>
                        n().createElement(
                            'div',
                            { className: l()(gu, e && vu) },
                            n().createElement('div', { className: l()(Bu, wu) }),
                            n().createElement('div', { className: Bu }),
                            n().createElement('div', { className: l()(Bu, fu) }),
                        ),
                    xu = {
                        base: 'Chapter_base_f0',
                        base__small: 'Chapter_base__small_32',
                        divider: 'Chapter_divider_a7',
                        bg: 'Chapter_bg_2e',
                        base__disabled: 'Chapter_base__disabled_6d',
                        base__completed: 'Chapter_base__completed_88',
                        bgInner: 'Chapter_bgInner_83',
                        disabled: 'Chapter_disabled_7a',
                        commanderImg: 'Chapter_commanderImg_90',
                        base__paused: 'Chapter_base__paused_ff',
                        base__notStarted: 'Chapter_base__notStarted_9b',
                        base__medium: 'Chapter_base__medium_e2',
                        bgHover: 'Chapter_bgHover_ac',
                        border: 'Chapter_border_5c',
                        frame: 'Chapter_frame_58',
                        frameLeft: 'Chapter_frameLeft_e7',
                        frameRight: 'Chapter_frameRight_fa',
                        vehicleImg: 'Chapter_vehicleImg_b1',
                        content: 'Chapter_content_61',
                        buttonBlockHolder: 'Chapter_buttonBlockHolder_db',
                        disabledBlock: 'Chapter_disabledBlock_9d',
                        completedBlock: 'Chapter_completedBlock_f9',
                        pausedBlock: 'Chapter_pausedBlock_a7',
                        completedIcon: 'Chapter_completedIcon_f2',
                        disabledIcon: 'Chapter_disabledIcon_f3',
                        pausedIcon: 'Chapter_pausedIcon_02',
                        statusText: 'Chapter_statusText_19',
                        statusText__completed: 'Chapter_statusText__completed_9c',
                        statusText__disabled: 'Chapter_statusText__disabled_4d',
                        statusText__paused: 'Chapter_statusText__paused_16',
                        statusText__inactive: 'Chapter_statusText__inactive_d0',
                        hintBody: 'Chapter_hintBody_de',
                        buttonWrapper: 'Chapter_buttonWrapper_de',
                        buttonBlockHolder__hidden: 'Chapter_buttonBlockHolder__hidden_e5',
                        delimiter: 'Chapter_delimiter_b4',
                        title: 'Chapter_title_57',
                        base__active: 'Chapter_base__active_e5',
                        vehicleStyle: 'Chapter_vehicleStyle_85',
                        preview: 'Chapter_preview_1d',
                        previewWrapper: 'Chapter_previewWrapper_74',
                        styleTitle: 'Chapter_styleTitle_0d',
                        vehicleTitle: 'Chapter_vehicleTitle_10',
                        vehicleInHangar: 'Chapter_vehicleInHangar_61',
                        styleHolder: 'Chapter_styleHolder_55',
                        inactiveText: 'Chapter_inactiveText_b6',
                        levelBlock: 'Chapter_levelBlock_f3',
                        level: 'Chapter_level_e1',
                        levelText: 'Chapter_levelText_fc',
                        fadeOut: 'Chapter_fadeOut_82',
                        fadeIn: 'Chapter_fadeIn_f7',
                        fadeInWithScale: 'Chapter_fadeInWithScale_4c',
                        slideUp: 'Chapter_slideUp_71',
                        scale: 'Chapter_scale_96',
                        rotate: 'Chapter_rotate_78',
                    };
                var Lu = t(122);
                const Mu = {
                        base: 'VehicleIcon_base_5e',
                        vehicleIcon: 'VehicleIcon_vehicleIcon_90',
                        vehicleActiveIcon: 'VehicleIcon_vehicleActiveIcon_e0',
                        base__visible: 'VehicleIcon_base__visible_60',
                        base__visible__fadeInAnimated: 'VehicleIcon_base__visible__fadeInAnimated_4c',
                        fadeOut: 'VehicleIcon_fadeOut_60',
                        base__visible__fadeOutAnimated: 'VehicleIcon_base__visible__fadeOutAnimated_22',
                        fadeIn: 'VehicleIcon_fadeIn_22',
                        fadeInWithScale: 'VehicleIcon_fadeInWithScale_0b',
                        slideUp: 'VehicleIcon_slideUp_0b',
                        scale: 'VehicleIcon_scale_5d',
                        rotate: 'VehicleIcon_rotate_d3',
                    },
                    yu = (0, r.memo)(({ chapterID: e, isActive: u }) => {
                        const t = (0, r.useState)(!1),
                            a = t[0],
                            o = t[1],
                            i = (0, r.useState)(!1),
                            s = i[0],
                            c = i[1],
                            m = (0, r.useState)(!1),
                            d = m[0],
                            E = m[1],
                            A = (0, _.GS)().mediaSize,
                            b = (0, au.jz)(A);
                        return (
                            (0, r.useEffect)(
                                () =>
                                    u
                                        ? (c(!0),
                                          (0, Lu.F)(() => {
                                              (c(!1), o(!0));
                                          }, 200))
                                        : (E(!0),
                                          c(!1),
                                          (0, Lu.F)(() => {
                                              (E(!1), o(!1));
                                          }, 200)),
                                [u],
                            ),
                            n().createElement(
                                'div',
                                { className: Mu.base },
                                n().createElement('div', {
                                    className: l()(
                                        Mu.vehicleIcon,
                                        a && Mu.vehicleActiveIcon__visible,
                                        s && Mu.vehicleActiveIcon__fadeInAnimated,
                                        d && Mu.vehicleActiveIcon__fadeOutAnimated,
                                    ),
                                    style: (0, au.OH)(e, b),
                                }),
                                n().createElement('div', { className: Mu.vehicleActiveIcon, style: (0, au.wq)(e, b) }),
                            )
                        );
                    });
                function Pu() {
                    return (
                        (Pu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Pu.apply(this, arguments)
                    );
                }
                const ku = R.strings.battle_pass,
                    Tu = (0, I.Pi)(
                        ({
                            chapterID: e,
                            hasActive: u,
                            progression: t,
                            hasTrigger: a = !1,
                            chapterSize: o = W.Medium,
                        }) => {
                            const i = (0, r.useState)(!1),
                                s = i[0],
                                c = i[1],
                                m = ee(),
                                d = m.model,
                                E = m.controls,
                                A = (0, _.GS)().mediaSize,
                                b = d.computes.hasMarathon(),
                                h = d.computes.getChapterById(e);
                            if (!h) return null;
                            const F = h.chapterState,
                                C = h.styleName,
                                p = h.tankman,
                                g = h.isVehicleInHangar,
                                B = h.vehicleInfo,
                                v = h.finalReward,
                                w = h.chapterType,
                                S = t.level,
                                x = l()(xu.base, xu[`base__${F}`], xu[`base__${o}`]),
                                L = F === U.Completed,
                                M = F === U.Disabled,
                                y = F === U.Active,
                                P = F === U.Paused,
                                k = w === H.Marathon,
                                T = A <= _.cJ.Small ? re.small : re.medium,
                                N = A < _.cJ.Medium ? _e.SMALL : _e.NORMAL,
                                I = (0, au.jz)(A),
                                R = Du(v) === O.style || Du(v) === O.vehicle,
                                $ = !L && !M && (S > 1 || (y && S > 0)),
                                G = u,
                                j = !y && !M && !L,
                                z = u && j && !P,
                                X = P && u,
                                q = ku.chapter.fullNameUppercased.$num(e) || `chapter/fullNameUppercased/${e}`,
                                V = ku.chapter.fullName.quoted.$num(e) || `chapter/fullName/quoted/${e}`,
                                Y = y ? (0, au.Vu)(e, b) : (0, au.s0)(e, b),
                                K = ((e, u) => {
                                    const t = Qe('tutorialModel.effects.items').filter((t) => {
                                        if (!t) return !1;
                                        const a = t.value,
                                            r = window.__featureId.toString();
                                        return a.componentId === e && a.type === u && a.viewId === r;
                                    });
                                    if (0 === t.length) return null;
                                    const a = Object.assign({}, t[0].value);
                                    return {
                                        effect: a,
                                        completeEffect: () => {
                                            (tutorialModel.onEffectCompleted({
                                                componentId: e,
                                                viewId: window.__featureId.toFixed(0),
                                                effectType: u,
                                                effectBuilder: a.builder,
                                            }),
                                                u === Je &&
                                                    window.tutorialApi &&
                                                    window.tutorialApi.updateComponents());
                                        },
                                    };
                                })('BattlePassChapterChoice', eu),
                                Z = (0, r.useCallback)(
                                    (u) => {
                                        (E.openPreview(e), u.stopPropagation());
                                    },
                                    [e, E],
                                ),
                                Q = (0, r.useCallback)(
                                    (u) => {
                                        (E.activateChapter(e), u.stopPropagation());
                                    },
                                    [e, E],
                                ),
                                J = (0, r.useCallback)(() => {
                                    (D.$.playClick(), E.selectChapter(e));
                                }, [e, E]),
                                ue = We(() => {
                                    ((0, D.G)(pu), c(!0));
                                }),
                                te = (0, r.useCallback)(
                                    (e) => {
                                        switch (e) {
                                            case O.style:
                                                return n().createElement(
                                                    'div',
                                                    { className: xu.vehicleStyle },
                                                    n().createElement(
                                                        'div',
                                                        { className: xu.styleTitle },
                                                        k
                                                            ? n().createElement(He, {
                                                                  text: ku.chapterChoice.extraChapter.reward(),
                                                              })
                                                            : n().createElement(He, {
                                                                  text: ku.chapterChoice.stylePreview.name(),
                                                                  format: { binding: { styleName: C } },
                                                              }),
                                                    ),
                                                    n().createElement(
                                                        'div',
                                                        { className: xu.vehicleTitle },
                                                        n().createElement(He, {
                                                            text: ku.chapterChoice.stylePreview.forLabel.$dyn(w),
                                                            format: {
                                                                binding: {
                                                                    vehicleName: n().createElement(
                                                                        cu,
                                                                        Pu({}, B, { type: _u.white }),
                                                                    ),
                                                                },
                                                            },
                                                        }),
                                                        g &&
                                                            n().createElement('div', { className: xu.vehicleInHangar }),
                                                    ),
                                                );
                                            case O.tankman:
                                                return n().createElement(
                                                    'div',
                                                    { className: xu.vehicleStyle },
                                                    n().createElement(
                                                        'div',
                                                        { className: xu.styleTitle },
                                                        n().createElement(He, {
                                                            text: ku.chapterChoice.tankman.title(),
                                                            format: { binding: { styleName: C } },
                                                        }),
                                                    ),
                                                    n().createElement(
                                                        'div',
                                                        { className: xu.vehicleTitle },
                                                        n().createElement(He, { text: p }),
                                                    ),
                                                );
                                            case O.vehicle:
                                                return n().createElement(
                                                    'div',
                                                    { className: xu.vehicleStyle },
                                                    n().createElement(
                                                        'div',
                                                        { className: xu.styleTitle },
                                                        n().createElement(He, {
                                                            text: ku.chapterChoice.extraChapter.reward(),
                                                        }),
                                                    ),
                                                    n().createElement(
                                                        'div',
                                                        { className: xu.vehicleTitle },
                                                        n().createElement(He, {
                                                            text: ku.chapterChoice.stylePreview.forLabel.$dyn(w),
                                                            format: {
                                                                binding: {
                                                                    vehicleName: n().createElement(
                                                                        cu,
                                                                        Pu({}, B, { type: _u.white }),
                                                                    ),
                                                                },
                                                            },
                                                        }),
                                                        g &&
                                                            n().createElement('div', { className: xu.vehicleInHangar }),
                                                    ),
                                                );
                                        }
                                    },
                                    [w, k, g, C, p, B],
                                );
                            (0, r.useEffect)(
                                () =>
                                    f(() => {
                                        null !== K && a && K.completeEffect();
                                    }),
                                [K, a],
                            );
                            const ne = ((e, u) => {
                                const t = Qe('tutorialModel.triggers.items').filter((t) => {
                                    if (!t) return !1;
                                    const a = t.value,
                                        r = a.triggers.filter((e) => e.value === u);
                                    return a.componentId === e && r.length > 0;
                                });
                                return 0 === t.length
                                    ? null
                                    : window.tutorialModel.foundComponents.items.some((u) => u.value.componentId === e)
                                      ? {
                                            trigger: t[0].value,
                                            runTrigger: (t) => {
                                                window.tutorialModel.onTriggerActivated({
                                                    componentId: e,
                                                    triggerType: u,
                                                    state: t,
                                                });
                                            },
                                        }
                                      : null;
                            })('BattlePassChapterChoice', uu);
                            return (
                                (0, r.useEffect)(() => {
                                    ne && a && ne.runTrigger(!0);
                                }, [a, ne]),
                                n().createElement(
                                    $e.i,
                                    {
                                        header: ku.chapterChoice.tooltip.disabledChapter.header(),
                                        body: (0, tu.uF)(ku.chapterChoice.tooltip.disabledChapter.body(), {
                                            chapterName: V,
                                        }),
                                        isEnabled: M,
                                    },
                                    n().createElement(
                                        'div',
                                        { className: x, onMouseEnter: ue, onClick: J, onMouseLeave: () => c(!1) },
                                        n().createElement(
                                            'div',
                                            { className: xu.bg, style: Y },
                                            n().createElement('div', {
                                                className: xu.bgInner,
                                                style: (0, au.Vu)(e, b),
                                            }),
                                        ),
                                        n().createElement('div', { className: xu.divider }),
                                        n().createElement(
                                            'div',
                                            { className: xu.commanderImg, style: (0, au.TZ)(e, I) },
                                            n().createElement(
                                                'div',
                                                { className: xu.vehicleImg },
                                                n().createElement(yu, { chapterID: e, isActive: y || s }),
                                            ),
                                            R &&
                                                n().createElement(
                                                    'div',
                                                    { className: xu.preview },
                                                    n().createElement(
                                                        'div',
                                                        { className: xu.previewWrapper },
                                                        n().createElement(ce, { onClick: Z, size: N }),
                                                    ),
                                                ),
                                            n().createElement('div', { className: xu.bgHover }),
                                        ),
                                        y &&
                                            n().createElement(
                                                'div',
                                                { className: xu.frame },
                                                n().createElement('div', { className: xu.frameLeft }),
                                                n().createElement('div', { className: xu.frameRight }),
                                            ),
                                        n().createElement('div', { className: xu.disabled }),
                                        n().createElement(
                                            'div',
                                            { className: xu.content },
                                            n().createElement('div', { className: xu.styleHolder }, te(Du(v))),
                                            n().createElement(
                                                'div',
                                                { className: xu.delimiter },
                                                n().createElement(Su, { isActive: y }),
                                            ),
                                            n().createElement(He, { text: q, className: xu.title }),
                                            n().createElement(
                                                'div',
                                                {
                                                    className: l()(
                                                        xu.buttonBlockHolder,
                                                        G && xu.buttonBlockHolder__hidden,
                                                    ),
                                                },
                                                j &&
                                                    n().createElement(
                                                        'div',
                                                        { className: xu.buttonWrapper },
                                                        a &&
                                                            n().createElement('div', {
                                                                className: xu.hintBody,
                                                                id: 'bp-chapter-choice',
                                                            }),
                                                        n().createElement(
                                                            $e.i,
                                                            { body: ku.tooltips.footerBuyBtn.activateChapter.descr() },
                                                            n().createElement(
                                                                oe,
                                                                { type: ae.primary, size: T, onClick: Q },
                                                                n().createElement(He, {
                                                                    text: ku.chapter.activateChapter(),
                                                                }),
                                                            ),
                                                        ),
                                                    ),
                                                X &&
                                                    n().createElement(
                                                        'div',
                                                        { className: xu.pausedBlock },
                                                        n().createElement('div', { className: xu.pausedIcon }),
                                                        n().createElement(He, {
                                                            text: ku.chapterChoice.chapterPaused(),
                                                            className: l()(xu.statusText, xu.statusText__paused),
                                                        }),
                                                    ),
                                                z &&
                                                    n().createElement(
                                                        'div',
                                                        { className: xu.pausedBlock },
                                                        n().createElement(He, {
                                                            text: ku.chapterChoice.chapterInactive(),
                                                            className: l()(xu.statusText, xu.statusText__inactive),
                                                        }),
                                                    ),
                                            ),
                                            $ &&
                                                n().createElement(
                                                    'div',
                                                    { className: xu.levelBlock },
                                                    n().createElement(He, {
                                                        text: y
                                                            ? ku.chapter.currentStep.active()
                                                            : ku.chapter.currentStep.colon(),
                                                        className: xu.levelText,
                                                    }),
                                                    n().createElement(He, { text: String(S), className: xu.level }),
                                                ),
                                            L &&
                                                n().createElement(
                                                    'div',
                                                    { className: xu.completedBlock },
                                                    n().createElement('div', { className: xu.completedIcon }),
                                                    n().createElement(He, {
                                                        text: ku.chapterChoice.chapterCompleted(),
                                                        className: l()(xu.statusText, xu.statusText__completed),
                                                    }),
                                                ),
                                            M &&
                                                n().createElement(
                                                    'div',
                                                    { className: xu.disabledBlock },
                                                    n().createElement('div', { className: xu.disabledIcon }),
                                                    n().createElement(He, {
                                                        text: ku.chapterChoice.chapterDisabled(),
                                                        className: l()(xu.statusText, xu.statusText__disabled),
                                                    }),
                                                ),
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                var Nu = t(2269),
                    Iu = t(7030),
                    Ru = t(9830);
                const Ou = 'Shield_base_ec',
                    Hu = 'Shield_flag_a2',
                    $u = 'Shield_flag__isChapterChosen_81',
                    Gu = 'Shield_flag__medium_78',
                    Wu = 'Shield_emblem_59',
                    Uu = 'Shield_chapterLogoIcon_4b',
                    ju = (0, I.Pi)(({ size: e, chapterID: u = 0, progression: t }) => {
                        const a = ee().model.computes.getChapterById(u);
                        if (!a) return null;
                        const r = a.isBought,
                            o = a.chapterState,
                            i = a.chapterType,
                            s = o === U.Completed ? Cu.Bq.Completed : r ? Cu.Bq.Bought : Cu.Bq.Free,
                            _ = o === U.Active,
                            c = ((e) => void 0 !== e.from && (e.level > 1 || e.from > 0))(t),
                            m = c || (o !== U.NotStarted && o !== U.Disabled),
                            d = m && s !== Cu.Bq.Completed;
                        return n().createElement(
                            'div',
                            { className: Ou },
                            n().createElement('div', {
                                className: l()(Hu, e === Cu.$u.Medium && Gu, d && $u),
                                style: (0, au.fW)(u, e),
                            }),
                            n().createElement(
                                'div',
                                { className: Wu },
                                n().createElement(Ru.G, {
                                    progression: t,
                                    size: e,
                                    chapterID: u,
                                    battlePassState: s,
                                    hasBattlePass: r,
                                    hasBeenActive: m,
                                    isChapterSelection: !0,
                                    isOpen: d,
                                    isChapterChosen: _,
                                    showProgressBar: _,
                                    chapterType: i,
                                }),
                                d && n().createElement('div', { className: Uu, style: (0, au.cs)(u, r, e) }),
                            ),
                        );
                    }),
                    zu = 'ChapterCompleted_base_55',
                    Xu = 'ChapterCompleted_effect_1e',
                    qu = 'ChapterCompleted_shine_2f',
                    Vu = 'ChapterCompleted_shield_af',
                    Yu = 'ChapterCompleted_title_1a',
                    Ku = 'ChapterCompleted_boughtGlow_56',
                    Zu = 'ChapterCompleted_bought_b1',
                    Qu = 'ChapterCompleted_button_33',
                    Ju = 'ChapterCompleted_buttonWrapper_04',
                    et = R.strings.battle_pass,
                    ut = (0, I.Pi)(({ chapterId: e, progression: u }) => {
                        const t = (0, r.useState)(!1),
                            a = t[0],
                            o = t[1],
                            l = ee(),
                            i = l.model,
                            s = l.controls,
                            c = (0, Iu.useSpring)({
                                from: { transform: 'rotate(0deg)' },
                                to: { transform: 'rotate(360deg)' },
                                reset: !0,
                                pause: !a,
                                config: { duration: 6e4 },
                            }),
                            m = (0, _.GS)().mediaSize,
                            d = m <= _.cJ.Small ? Cu.$u.Small : Cu.$u.Medium,
                            E = m <= _.cJ.Small ? Cu.$u.Small : Cu.$u.Medium,
                            A = We(() => {
                                ((0, D.G)('bp_highlight_02'), o(!0));
                            }),
                            b = We(() => {
                                o(!1);
                            }),
                            h = i.computes.getChapterById(e);
                        if (!h) return null;
                        const F = et.chapter.fullNameUppercased.$num(e);
                        return n().createElement(
                            'div',
                            { className: zu },
                            n().createElement(
                                'div',
                                {
                                    className: Xu,
                                    onClick: () => {
                                        ((0, D.G)('play'), s.selectChapter(e));
                                    },
                                    onMouseEnter: A,
                                    onMouseOut: b,
                                },
                                n().createElement(Iu.animated.div, { className: qu, style: c }),
                                n().createElement(
                                    'div',
                                    { className: Vu },
                                    n().createElement(ju, { size: E, chapterID: e, progression: u }),
                                ),
                            ),
                            n().createElement('div', { className: Yu }, F),
                            h.isBought
                                ? n().createElement(
                                      $e.i,
                                      { body: et.chapterChoice.chapterBought.tooltip() },
                                      n().createElement(
                                          'div',
                                          { className: Ku },
                                          n().createElement('div', { className: Zu }),
                                      ),
                                  )
                                : n().createElement(
                                      'div',
                                      { className: Ju },
                                      n().createElement(
                                          'div',
                                          { className: Qu },
                                          n().createElement(
                                              oe,
                                              { onClick: () => s.buyChapter(e), type: ae.main, size: d },
                                              et.chapterChoice.buy(),
                                          ),
                                      ),
                                  ),
                        );
                    }),
                    tt = 'Header_base_71',
                    at = 'Header_title_af',
                    rt = 'Header_description_cc',
                    nt = 'Header_freePoints_05',
                    ot = 'Header_freePointsInfo_f3',
                    lt = 'Header_freePointsCount_a8',
                    it = 'Header_freePointsIcon_be',
                    st = 'Header_lightRed_4a',
                    _t = R.strings.battle_pass.chapterChoice.freePoints,
                    ct = (0, I.Pi)(({ title: e, description: u, hasActive: t }) => {
                        const a = ee().model,
                            r = a.root.get().freePoints,
                            o = a.computes.hasMarathon(),
                            l = a.computes.isCompleted(),
                            i = !t && !o && !l && r > 0;
                        return n().createElement(
                            'div',
                            { className: tt },
                            n().createElement('div', { className: st }),
                            n().createElement('div', { className: at }, e),
                            n().createElement(
                                'div',
                                { className: rt },
                                i
                                    ? n().createElement(
                                          'div',
                                          { className: nt },
                                          _t.description(),
                                          n().createElement(
                                              $e.i,
                                              { header: _t.tooltip.title(), body: _t.tooltip.description() },
                                              n().createElement(
                                                  'div',
                                                  { className: ot },
                                                  n().createElement('span', { className: lt }, r),
                                                  n().createElement('span', { className: it }),
                                              ),
                                          ),
                                      )
                                    : n().createElement('span', null, u),
                            ),
                        );
                    }),
                    mt = 'ChaptersCompleted_base_6f',
                    dt = 'ChaptersCompleted_chapters_8d',
                    Et = 'ChaptersCompleted_header_08',
                    At = 'ChaptersCompleted_awards_2b';
                function bt() {
                    return (
                        (bt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        bt.apply(this, arguments)
                    );
                }
                const ht = R.strings.battle_pass,
                    Ft = (0, I.Pi)(() => {
                        const e = ee(),
                            u = e.model,
                            t = e.controls,
                            a = u.root.get(),
                            r = a.notChosenRewardCount,
                            o = a.bpbitCount,
                            l = a.bpcoinCount,
                            i = a.isBattlePassCompleted,
                            s = a.isChooseRewardsEnabled,
                            _ = u.collectionEntryPoint.get(),
                            c = _.collectionItemCount,
                            m = _.newCollectionItemCount,
                            d = _.maxCollectionItemCount,
                            E = _.isFirstEnter,
                            A = _.isCollectionsEnabled,
                            b = u.chapters.get(),
                            h = t.openGoodsForBpCoins,
                            F = t.takeRewards,
                            C = t.openGoodsForBpPoints,
                            p = t.openCollection;
                        return n().createElement(
                            'div',
                            { className: mt },
                            n().createElement(
                                'div',
                                { className: Et },
                                n().createElement(ct, {
                                    title: ht.chapterChoice.allChaptersCompleted.title(),
                                    description: ht.chapterChoice.allChaptersCompleted.description(),
                                }),
                            ),
                            n().createElement(
                                'div',
                                { className: dt },
                                T(b, (e, t) =>
                                    n().createElement(ut, {
                                        key: t,
                                        chapterId: e.chapterID,
                                        progression: G(u.computes.getChapterById(e.chapterID)),
                                    }),
                                ),
                            ),
                            n().createElement(
                                'div',
                                { className: At },
                                n().createElement(
                                    $.Z,
                                    bt(
                                        {},
                                        {
                                            pointsCount: o,
                                            notChosenRewardCount: r,
                                            coinCount: l,
                                            collectionItemCount: c,
                                            maxCollectionItemCount: d,
                                            newCollectionItemCount: m,
                                            isBPFirstEnter: E,
                                            isCollectionsEnabled: A,
                                            isAwardDisabled: !s,
                                            isPointsLocked: !i,
                                            onPointsClick: C,
                                            onCoinClick: h,
                                            onTakeRewardsClick: F,
                                            onCollectionClick: p,
                                            hasMarathon: u.computes.hasChapter(H.Marathon),
                                        },
                                        { size: Nu.W.Big },
                                    ),
                                ),
                            ),
                        );
                    }),
                    Ct = R.strings.battle_pass,
                    pt = (0, I.Pi)(() => {
                        const e = ee(),
                            u = e.model,
                            t = e.controls,
                            a = u.root.get(),
                            o = a.notChosenRewardCount,
                            i = a.bpbitCount,
                            s = a.bpcoinCount,
                            _ = a.isBattlePassCompleted,
                            c = a.isChooseRewardsEnabled,
                            m = t.openCollection,
                            d = t.openAbout,
                            E = t.openPointsInfo,
                            A = t.openGoodsForBpPoints,
                            b = t.openGoodsForBpCoins,
                            h = t.onViewLoaded,
                            F = t.takeRewards,
                            C = t.close,
                            p = u.computes.getChapters(),
                            D = u.computes.hasActive(),
                            g = u.computes.getTriggerChapterId(),
                            B = ((e) => (e < 3 ? W.Large : e > 4 ? W.Small : W.Medium))(p.length),
                            v = u.collectionEntryPoint.get(),
                            L = v.collectionItemCount,
                            M = v.newCollectionItemCount,
                            P = v.maxCollectionItemCount,
                            k = v.isFirstEnter,
                            N = v.isCollectionsEnabled,
                            I = (0, r.useState)(!1),
                            R = I[0],
                            O = I[1];
                        (!(function ({
                            key: e = x.n.ESCAPE,
                            callback: u = () => S.O.view.sendEvent.close(),
                            preventPropagation: t = !0,
                        } = {}) {
                            y(e, u, t);
                        })({ callback: C, preventPropagation: !1 }),
                            (0, r.useEffect)(
                                () =>
                                    f(() => {
                                        R || (h(), O(!0));
                                    }),
                                [R, h],
                            ));
                        const U = l()(ue.chapters, ue[`chapters__${B}`]),
                            j = D ? Ct.chapterChoice.activeTitle() : Ct.chapterChoice.title(),
                            z = D
                                ? Ct.chapterChoice.description.hasActive()
                                : Ct.chapterChoice.description.noActiveHasMarathon(),
                            X = u.computes.isCompleted(),
                            q = () => ({
                                pointsCount: i,
                                notChosenRewardCount: o,
                                coinCount: s,
                                collectionItemCount: L,
                                maxCollectionItemCount: P,
                                newCollectionItemCount: M,
                                isBPFirstEnter: k,
                                isCollectionsEnabled: N,
                                isAwardDisabled: !c,
                                isPointsLocked: !_,
                                onPointsClick: A,
                                onCoinClick: b,
                                onTakeRewardsClick: F,
                                onCollectionClick: m,
                                hasMarathon: u.computes.hasChapter(H.Marathon),
                                hasResource: u.computes.hasChapter(H.Resource),
                            }),
                            V = l()(ue.base, q().hasMarathon && ue.base__hasMarathon);
                        return n().createElement(
                            'div',
                            { className: V },
                            n().createElement('div', { className: ue.background }),
                            X
                                ? n().createElement(
                                      n().Fragment,
                                      null,
                                      n().createElement('div', { className: ue.backgroundBlur }),
                                      n().createElement(Ft, null),
                                  )
                                : n().createElement(
                                      n().Fragment,
                                      null,
                                      n().createElement(
                                          'div',
                                          { className: U },
                                          n().createElement(
                                              'div',
                                              { className: ue.chapterHolder },
                                              n().createElement('div', { className: ue.chapterLeft }),
                                              n().createElement('div', { className: ue.divider }),
                                          ),
                                          T(p, ({ chapterID: e }, t) =>
                                              n().createElement(
                                                  n().Fragment,
                                                  { key: t },
                                                  n().createElement(Tu, {
                                                      chapterID: e,
                                                      hasActive: D,
                                                      chapterSize: B,
                                                      hasTrigger: g === e,
                                                      progression: G(u.computes.getChapterById(e)),
                                                  }),
                                              ),
                                          ),
                                          n().createElement(
                                              'div',
                                              { className: ue.chapterHolder },
                                              n().createElement('div', { className: ue.chapterRight }),
                                          ),
                                      ),
                                      n().createElement(
                                          'div',
                                          { className: ue.infoButtons },
                                          n().createElement(w, {
                                              caption: Ct.intro.aboutButton(),
                                              type: 'info',
                                              onClick: d,
                                          }),
                                          n().createElement(w, {
                                              caption: Ct.howToEarnPoints.title(),
                                              type: 'info',
                                              onClick: E,
                                          }),
                                      ),
                                      n().createElement(
                                          'div',
                                          { className: ue.header },
                                          n().createElement(ct, { title: j, description: z, hasActive: D }),
                                      ),
                                      n().createElement('div', { className: ue.flags }, n().createElement($.Z, q())),
                                  ),
                        );
                    });
                engine.whenReady.then(() => {
                    p().render(
                        n().createElement(F, null, n().createElement(J, null, n().createElement(pt, null))),
                        document.getElementById('root'),
                    );
                });
            },
            903: (e, u, t) => {
                'use strict';
                t.d(u, {
                    FL: () => i,
                    OH: () => E,
                    TZ: () => c,
                    Vu: () => d,
                    cs: () => l,
                    fW: () => _,
                    jz: () => s,
                    s0: () => m,
                    wD: () => o,
                    wq: () => A,
                });
                var a = t(8546),
                    r = t(5415);
                const n = (e) => {
                        switch (e) {
                            case a.$u.Micro:
                                return 's';
                            case a.$u.Small:
                                return 'm';
                            default:
                                return 'l';
                        }
                    },
                    o = (e, u, t = '') => {
                        const a = t.length > 0 ? `_${t}` : t,
                            r = e.$dyn(`c_${u}${a}`),
                            n = e.$dyn(`common${a}`);
                        return r || n;
                    },
                    l = (e, u, t) => {
                        const a = R.images.gui.maps.icons.battlePass.logo.chapterIcons,
                            r = u ? 'BP' : '',
                            l = `${n(t)}${r}`;
                        return { backgroundImage: `url(${o(a, e, l)})` };
                    },
                    i = (e, u, t, a) => {
                        const r = R.images.gui.maps.icons.battlePass.logo,
                            n = o(r, e, `emblem${a ? '_BP' : ''}${t ? '_open' : ''}${u}`);
                        return n ? { backgroundImage: `url(${n})` } : void 0;
                    },
                    s = (e) => {
                        switch (e) {
                            case r.cJ.ExtraSmall:
                            case r.cJ.Small:
                                return a.$u.Micro;
                            case r.cJ.Medium:
                                return a.$u.Small;
                            default:
                                return a.$u.Medium;
                        }
                    },
                    _ = (e, u) => {
                        const t = R.images.gui.maps.icons.battlePass.logo.flag,
                            a = n(u);
                        return { backgroundImage: `url(${o(t, e, a)})` };
                    },
                    c = (e, u) => {
                        const t = R.images.gui.maps.icons.battlePass.chapter_choice.commander,
                            a = n(u);
                        return { backgroundImage: `url(${o(t, e, a)})` };
                    },
                    m = (e, u) => {
                        const t = u
                            ? R.images.gui.maps.icons.battlePass.chapter_choice.marathon
                            : R.images.gui.maps.icons.battlePass.chapter_choice.chapter;
                        return { backgroundImage: `url(${o(t, e)})` };
                    },
                    d = (e, u) => {
                        const t = u
                            ? R.images.gui.maps.icons.battlePass.chapter_choice.marathon
                            : R.images.gui.maps.icons.battlePass.chapter_choice.chapter;
                        return { backgroundImage: `url(${o(t, e, 'active')})` };
                    },
                    E = (e, u) => {
                        const t = R.images.gui.maps.icons.battlePass.chapter_choice.tank.default,
                            a = n(u);
                        return { backgroundImage: `url(${o(t, e, a)})` };
                    },
                    A = (e, u) => {
                        const t = R.images.gui.maps.icons.battlePass.chapter_choice.tank.active,
                            a = n(u);
                        return { backgroundImage: `url(${o(t, e, a)})` };
                    };
            },
            2269: (e, u, t) => {
                'use strict';
                let a, r;
                (t.d(u, { W: () => r, w: () => a }),
                    (function (e) {
                        ((e.Award = 'Award'), (e.Coin = 'Coin'), (e.Point = 'Point'), (e.Collection = 'Collection'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.Small = 'small'), (e.Big = 'big'));
                    })(r || (r = {})));
            },
            6895: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => p });
                var a = t(6483),
                    r = t.n(a),
                    n = t(6179),
                    o = t.n(n);
                const l = {
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
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const _ = (e) => {
                    let u = e.size,
                        t = e.value,
                        a = e.isEmpty,
                        n = e.fadeInAnimation,
                        _ = e.hide,
                        c = e.maximumNumber,
                        m = e.className,
                        d = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, i);
                    const E = a ? null : t,
                        A = 'string' == typeof E;
                    if ((E && !A && E < 0) || 0 === E) return null;
                    const b = E && !A && E > c,
                        h = r()(
                            l.base,
                            l[`base__${u}`],
                            n && l.base__animated,
                            _ && l.base__hidden,
                            !E && l.base__pattern,
                            a && l.base__empty,
                            m,
                        );
                    return o().createElement(
                        'div',
                        s({ className: h }, d),
                        o().createElement('div', { className: l.bg }),
                        o().createElement('div', { className: l.pattern }),
                        o().createElement(
                            'div',
                            { className: r()(l.value, A && l.value__text) },
                            b ? c : E,
                            b && o().createElement('span', { className: l.plus }, '+'),
                        ),
                    );
                };
                _.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                var c = t(2372),
                    m = t(280),
                    d = (t(3649), t(6373)),
                    E = t(7727);
                const A = {
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
                var b = t(2269);
                const h = R.strings.battle_pass.awardsWidget,
                    F = ({
                        type: e,
                        count: u,
                        disabled: t = !1,
                        onClick: a,
                        size: l,
                        isLocked: i = !1,
                        hasTriger: s = !1,
                        hasMarathon: F = !1,
                        hasResource: C = !1,
                        maxCount: p = 0,
                        newItemsCount: D = 0,
                    }) => {
                        let g = '',
                            B = '';
                        const v = e === b.w.Collection && p === u,
                            w = l === b.W.Small && s;
                        switch (e) {
                            case b.w.Award:
                                ((g = 1 === u ? h.title.awardSingle() : h.title.awardMultiple()),
                                    (B = t ? h.description.awardDisabled() : h.description.award()));
                                break;
                            case b.w.Coin:
                                ((g = h.title.coin()), (B = h.description.coin()));
                                break;
                            case b.w.Point:
                                ((g = h.title.point()),
                                    (B = ((e, u, t) => {
                                        switch (!0) {
                                            case e && u && t:
                                                return h.description.pointLockedExceptExtraAndResource();
                                            case e && !u && t:
                                                return h.description.pointLockedExceptResource();
                                            case e && u:
                                                return h.description.pointLockedExceptExtra();
                                            case e && !u:
                                                return h.description.pointLocked();
                                            default:
                                                return h.description.point();
                                        }
                                    })(i, F, C)));
                                break;
                            case b.w.Collection:
                                ((g = h.title.collection()),
                                    (B = v ? h.description.collectionCompleted() : h.description.collection()));
                        }
                        const f = r()(
                                A.base,
                                A[`base__${l}`],
                                t && A.base__disabled,
                                i && A.base__locked,
                                e === b.w.Award && !t && A.base__hasAppearAnimation,
                            ),
                            S = r()(A.border, A[`border__${l}${e}`], w && A.border__triggered),
                            x = r()(A.borderHover, A[`borderHover__${l}${e}`]),
                            L = r()(A.borderDisabled, A[`borderDisabled__${l}`]),
                            M = r()(A.shine, A[`shine__${l}Left`]),
                            y = r()(A.shine, A[`shine__${l}Right`]),
                            P = r()(A.bg, A[`bg__${l}${e}`]),
                            k = r()(A.bgHover, A[`bgHover__${l}${e}`]),
                            T = r()(A.bgDisabled, A[`bgDisabled__${l}`]),
                            N = r()(A.locked, A[`locked__${l}`]),
                            I = r()(A.lockedHover, A[`lockedHover__${l}`]),
                            R = (0, n.useCallback)(() => {
                                t || (E.$.playClick(), a());
                            }, [t, a]),
                            O = (0, n.useCallback)(() => {
                                (0, E.G)('bp_highlight_02');
                            }, []);
                        return o().createElement(
                            d.i,
                            { body: B, isEnabled: Boolean(B) },
                            o().createElement(
                                'div',
                                { className: f, onMouseEnter: O, onClick: R },
                                D > 0 &&
                                    o().createElement(
                                        'div',
                                        { className: A.bubble },
                                        o().createElement(_, { size: 'small' }),
                                    ),
                                t
                                    ? o().createElement('div', { className: L })
                                    : o().createElement(
                                          o().Fragment,
                                          null,
                                          o().createElement('div', { className: S }),
                                          o().createElement('div', { className: x }),
                                      ),
                                e === b.w.Award &&
                                    !t &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: M }),
                                        o().createElement('div', { className: y }),
                                    ),
                                t
                                    ? o().createElement('div', { className: T })
                                    : o().createElement(
                                          o().Fragment,
                                          null,
                                          o().createElement('div', { className: P }),
                                          o().createElement('div', { className: k }),
                                      ),
                                i &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: N }),
                                        o().createElement('div', { className: I }),
                                    ),
                                e === b.w.Award && !t && o().createElement('div', { className: A.arrow }),
                                o().createElement('div', { className: r()(A.icon, A[`icon__${l}${e}`]) }),
                                o().createElement(
                                    'div',
                                    { className: A.count },
                                    e === b.w.Collection
                                        ? !v && o().createElement(m.z, { text: `${u || 0} / ${p}` })
                                        : o().createElement(c.A, { format: 'integral', value: u }),
                                    v && o().createElement('div', { className: A.completedCollectionIcon }),
                                ),
                                o().createElement('div', { className: r()(A.label, A[`label__${l}${e}`]) }, g),
                                e === b.w.Award &&
                                    !t &&
                                    o().createElement(
                                        'div',
                                        { className: A.blinkShape },
                                        o().createElement('div', { className: A.blink }),
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
                    p = ({
                        size: e = b.W.Small,
                        notChosenRewardCount: u,
                        pointsCount: t,
                        isPointsLocked: a,
                        isAwardDisabled: n,
                        coinCount: l,
                        collectionItemCount: i,
                        maxCollectionItemCount: s,
                        newCollectionItemCount: _,
                        isBPFirstEnter: c,
                        isCollectionsEnabled: m,
                        onPointsClick: d,
                        onCoinClick: E,
                        onTakeRewardsClick: A,
                        onCollectionClick: h,
                        hasMarathon: p,
                        hasResource: D = !1,
                    }) =>
                        o().createElement(
                            'div',
                            { className: r()(C.base, C[`base__${e}`]) },
                            u > 0 &&
                                o().createElement(
                                    'div',
                                    { className: C.award },
                                    o().createElement(F, {
                                        type: b.w.Award,
                                        size: e,
                                        count: u,
                                        disabled: n,
                                        onClick: A,
                                    }),
                                ),
                            o().createElement(
                                'div',
                                { className: C.award },
                                o().createElement(F, { type: b.w.Coin, count: l, onClick: E, size: e }),
                            ),
                            o().createElement(
                                'div',
                                { className: C.award },
                                o().createElement(F, {
                                    type: b.w.Point,
                                    count: t,
                                    onClick: d,
                                    size: e,
                                    isLocked: a,
                                    hasMarathon: p,
                                    hasResource: D,
                                }),
                            ),
                            m &&
                                o().createElement(
                                    'div',
                                    { className: r()(C.award, C.award__last) },
                                    o().createElement(F, {
                                        type: b.w.Collection,
                                        count: i,
                                        maxCount: s,
                                        newItemsCount: _,
                                        hasTriger: c,
                                        onClick: h,
                                        size: e,
                                    }),
                                ),
                        );
            },
            9830: (e, u, t) => {
                'use strict';
                t.d(u, { G: () => ae });
                var a = t(6483),
                    r = t.n(a),
                    n = t(6179),
                    o = t.n(n);
                const l = {
                    base: 'Emblem_base_be',
                    progress: 'Emblem_progress_37',
                    progress__small: 'Emblem_progress__small_42',
                    progress__completed: 'Emblem_progress__completed_69',
                    hideProgress: 'Emblem_hideProgress_b4',
                    progress__hidden: 'Emblem_progress__hidden_6d',
                    image: 'Emblem_image_dc',
                    image__micro: 'Emblem_image__micro_aa',
                    image__small: 'Emblem_image__small_ce',
                    image__open: 'Emblem_image__open_43',
                    image__openSmall: 'Emblem_image__openSmall_5d',
                    image__openMicro: 'Emblem_image__openMicro_a9',
                    image__battlePass: 'Emblem_image__battlePass_ba',
                    image__battlePassSmall: 'Emblem_image__battlePassSmall_d5',
                    image__battlePassMicro: 'Emblem_image__battlePassMicro_6e',
                    image__battlePassOpen: 'Emblem_image__battlePassOpen_36',
                    image__battlePassSmallOpen: 'Emblem_image__battlePassSmallOpen_2f',
                    image__battlePassMicroOpen: 'Emblem_image__battlePassMicroOpen_e5',
                    image__seasonWaiting: 'Emblem_image__seasonWaiting_96',
                    image__seasonWaitingSmall: 'Emblem_image__seasonWaitingSmall_c0',
                    image__seasonWaitingMicro: 'Emblem_image__seasonWaitingMicro_86',
                    image__completedFree: 'Emblem_image__completedFree_56',
                    image__completedFreeSmall: 'Emblem_image__completedFreeSmall_a1',
                    image__completedFreeMicro: 'Emblem_image__completedFreeMicro_45',
                    image__completedFreeOpen: 'Emblem_image__completedFreeOpen_08',
                    image__completedFreeSmallOpen: 'Emblem_image__completedFreeSmallOpen_91',
                    image__completedFreeMicroOpen: 'Emblem_image__completedFreeMicroOpen_d3',
                    image__completedGolden: 'Emblem_image__completedGolden_77',
                    image__completedGoldenSmall: 'Emblem_image__completedGoldenSmall_be',
                    image__completedGoldenMicro: 'Emblem_image__completedGoldenMicro_2d',
                    marathon: 'Emblem_marathon_c6',
                    resource: 'Emblem_resource_97',
                    marathon__micro: 'Emblem_marathon__micro_61',
                    resource__micro: 'Emblem_resource__micro_67',
                    marathon__small: 'Emblem_marathon__small_0b',
                    resource__small: 'Emblem_resource__small_41',
                    hideLevel: 'Emblem_hideLevel_f2',
                    showLevel: 'Emblem_showLevel_c5',
                    hideLevelSmall: 'Emblem_hideLevelSmall_cc',
                    showLevelSmall: 'Emblem_showLevelSmall_31',
                    hideLevelMicro: 'Emblem_hideLevelMicro_15',
                    showLevelMicro: 'Emblem_showLevelMicro_bc',
                    showIcon: 'Emblem_showIcon_c2',
                    showIconSmall: 'Emblem_showIconSmall_1d',
                    showIconMicro: 'Emblem_showIconMicro_f8',
                };
                var i = t(903);
                const s = {
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
                    _ = ({
                        level: e,
                        size: u,
                        isGold: t,
                        isForRewardScreen: a,
                        curState: n,
                        isFirstLevel: l,
                        showProgressionCompleted: i,
                    }) => {
                        const _ = r()(s.base, s[`base__${u}`]),
                            c = r()(
                                s.text,
                                s.text__filtered,
                                s[`text__${u}`],
                                s[`text__${n}`],
                                i && s.text__hideWithDelay,
                                l && s.text__new,
                                a && s.text__rewardScreen,
                            ),
                            m = r()(
                                s.textWithBlend,
                                l && s.text__new,
                                i && s.text__hideWithDelay,
                                s[`textWithBlend__${n}`],
                            ),
                            d = r()(s.text, s.text__blended, s[`text__${u}`], a && s.text__rewardScreen),
                            E = r()(
                                s.textMask,
                                t && s.textMask__gold,
                                a && s.textMask__animated,
                                t && a && s.textMask__goldContrast,
                                s[`textMask__${u}`],
                            );
                        return o().createElement(
                            'div',
                            { className: _ },
                            o().createElement('div', { className: c }, e),
                            o().createElement(
                                'div',
                                { className: m },
                                o().createElement('div', { className: d }, e),
                                o().createElement('div', { className: E }),
                            ),
                        );
                    };
                var c = t(8546);
                const m = {
                        label: 'EmblemLabels_label_14',
                        label__small: 'EmblemLabels_label__small_a3',
                        label__micro: 'EmblemLabels_label__micro_4b',
                        label__hasProgress: 'EmblemLabels_label__hasProgress_26',
                        label__hasProgressProgression: 'EmblemLabels_label__hasProgressProgression_77',
                        label__hasProgressSmall: 'EmblemLabels_label__hasProgressSmall_c1',
                        label__show: 'EmblemLabels_label__show_3d',
                        showLevel: 'EmblemLabels_showLevel_04',
                        label__showSmall: 'EmblemLabels_label__showSmall_7e',
                        showLevelSmall: 'EmblemLabels_showLevelSmall_2f',
                        label__hide: 'EmblemLabels_label__hide_28',
                        hideLevel: 'EmblemLabels_hideLevel_be',
                        label_hideSmall: 'EmblemLabels_label_hideSmall_65',
                        hideLevelSmall: 'EmblemLabels_hideLevelSmall_c1',
                        label__hideWithDelay: 'EmblemLabels_label__hideWithDelay_68',
                        label__hideWithDelaySmall: 'EmblemLabels_label__hideWithDelaySmall_36',
                        label__new: 'EmblemLabels_label__new_d7',
                        label__newSmall: 'EmblemLabels_label__newSmall_c1',
                        label__disabled: 'EmblemLabels_label__disabled_b6',
                        icon: 'EmblemLabels_icon_40',
                        icon__small: 'EmblemLabels_icon__small_f3',
                        icon__micro: 'EmblemLabels_icon__micro_cf',
                        icon__animated: 'EmblemLabels_icon__animated_09',
                        showIcon: 'EmblemLabels_showIcon_d3',
                        icon__animatedSmall: 'EmblemLabels_icon__animatedSmall_e4',
                        icon__animatedMicro: 'EmblemLabels_icon__animatedMicro_10',
                        showIconSmall: 'EmblemLabels_showIconSmall_cb',
                        hideLevelMicro: 'EmblemLabels_hideLevelMicro_65',
                        showLevelMicro: 'EmblemLabels_showLevelMicro_ab',
                        hideProgress: 'EmblemLabels_hideProgress_7f',
                        showIconMicro: 'EmblemLabels_showIconMicro_5c',
                    },
                    d = (e, u) => {
                        const t = e ? 'BP' : '';
                        return `${((e) => {
                            switch (e) {
                                case c.$u.Small:
                                    return 'l';
                                case c.$u.Micro:
                                    return 's';
                                default:
                                    return 'xl';
                            }
                        })(u)}${t}`;
                    },
                    E = (0, n.memo)(
                        ({
                            newLevel: e,
                            level: u,
                            size: t,
                            battlePassState: a,
                            hasProgression: n,
                            isGolden: l,
                            labelAnimation: s,
                            newLabelAnimation: E,
                            isChapterChosen: A = !1,
                            chapterID: b = 0,
                            isProgressionCompleted: h = !1,
                            hasBeenActive: F = !1,
                            isChapterSelection: C = !1,
                            isProgression: p = !1,
                        }) => {
                            let D = '',
                                g = '';
                            t === c.$u.Small
                                ? ((D = 'Small'), (g = '__small'))
                                : t === c.$u.Micro && ((D = 'Micro'), (g = '__micro'));
                            const B = a === c.Bq.SwitchedChapterRightNow,
                                v = a === c.Bq.CompletedRightNow,
                                w = ((e, u, t, a, r) => (e || r ? u || !t : u || !a))(C, h, F, A, p),
                                f = !p && !C;
                            return o().createElement(
                                o().Fragment,
                                null,
                                w
                                    ? o().createElement('div', {
                                          className: r()(m.icon, g && m[`icon${g}`], v && m[`icon__animated${D}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      u = d(l, t);
                                                  if (f) {
                                                      if (h) return e.tank.$dyn(`tank_${u}`);
                                                      if (!A) return e.$dyn('not_chosen');
                                                  }
                                                  return (0, i.wD)(e.chapterIcons, b, u);
                                              })()})`,
                                          },
                                      })
                                    : o().createElement(
                                          'div',
                                          {
                                              className: r()(
                                                  m.label,
                                                  m[`label${g}`],
                                                  B && m.label__new,
                                                  B && m[`label__new${D}`],
                                                  !v && h && m.label__disabled,
                                                  m[`label__${s}${D}`],
                                                  n && m[`label__hasProgress${D}`],
                                                  n && m[`label__hasProgress${D}${p ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          o().createElement(_, {
                                              level: u,
                                              size: t,
                                              isGold: l,
                                              isFirstLevel: B,
                                              curState: s,
                                              showProgressionCompleted: v,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    o().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                m.label,
                                                m[`label${g}`],
                                                B && m.label__new,
                                                B && m[`label__new${D}`],
                                                m[`label__${E}${D}`],
                                                n && m[`label__hasProgress${D}`],
                                            ),
                                        },
                                        o().createElement(_, {
                                            level: e,
                                            size: t,
                                            isGold: l,
                                            isFirstLevel: B,
                                            curState: E,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    ),
                    A = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let b, h;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(b || (b = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(h || (h = {})));
                const F = ({ size: e = b.Default, classMix: u }) =>
                        o().createElement('div', { className: r()(A.background, A[`background__${e}`], u) }),
                    C = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    p = ({ size: e }) => {
                        const u = r()(C.base, C[`base__${e}`]);
                        return o().createElement('div', { className: u });
                    },
                    D = {
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
                    g = (0, n.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: a, isComplete: n, withoutBounce: l }) => {
                            const i = r()(
                                    D.base,
                                    D[`base__${e}`],
                                    t && D.base__disabled,
                                    n && D.base__finished,
                                    l && D.base__withoutBounce,
                                ),
                                s = !t && !n;
                            return o().createElement(
                                'div',
                                { className: i, style: a, ref: u },
                                o().createElement('div', { className: D.pattern }),
                                o().createElement('div', { className: D.gradient }),
                                s && o().createElement(p, { size: e }),
                            );
                        },
                    ),
                    B = ({ size: e, value: u, lineRef: t, disabled: a, onComplete: r }) => {
                        const l = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            i = 100 === u;
                        return (
                            (0, n.useEffect)(() => {
                                i && r && r();
                            }, [i, r]),
                            o().createElement(g, { size: e, disabled: a, baseStyles: l, isComplete: i, lineRef: t })
                        );
                    };
                var v = t(122);
                let w, f;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(w || (w = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(f || (f = {})));
                const S = 'ProgressBarDeltaSimple_base_6c',
                    x = 'ProgressBarDeltaSimple_delta_99',
                    L = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: r,
                            to: l,
                            onEndAnimation: i,
                            onChangeAnimationState: s,
                        }) => {
                            const _ = l < a,
                                c = (0, n.useState)(f.Idle),
                                m = c[0],
                                d = c[1],
                                E = m === f.In,
                                A = m === f.End,
                                b = m === f.Idle,
                                h = (0, n.useCallback)(
                                    (e) => {
                                        (d(e), s && s(e));
                                    },
                                    [s],
                                );
                            ((0, n.useEffect)(() => {
                                if (b && !t) {
                                    const e = u;
                                    return (0, v.F)(() => {
                                        h(f.In);
                                    }, e);
                                }
                            }, [h, t, b, u]),
                                (0, n.useEffect)(() => {
                                    if (E) {
                                        const t = e + u;
                                        return (0, v.F)(() => {
                                            (i && i(), h(f.End));
                                        }, t);
                                    }
                                }, [h, E, i, u, e]));
                            const F = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [_ ? 'left' : 'right']: '0',
                                    }),
                                    [_, u, e],
                                ),
                                C = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [_ ? 'left' : 'right']: '0',
                                    }),
                                    [_, u, e],
                                ),
                                D = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(a - l)}%`, left: `${_ ? l : a}%` }),
                                    [a, _, l],
                                );
                            return A
                                ? null
                                : o().createElement(
                                      'div',
                                      { className: S, style: D },
                                      o().createElement(
                                          'div',
                                          { style: b ? F : C, className: x },
                                          o().createElement(p, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    M = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: r,
                            isComplete: l,
                            animationSettings: i,
                            onChangeAnimationState: s,
                            onEndAnimation: _,
                        }) => {
                            const c = (0, n.useMemo)(
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
                                o().createElement(g, {
                                    size: u,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: l,
                                    baseStyles: c,
                                }),
                                t >= 0 &&
                                    o().createElement(L, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        freezed: i.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: s,
                                        onEndAnimation: _,
                                    }),
                            );
                        },
                    ),
                    y = 'ProgressBarDeltaGrow_base_7e',
                    P = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    k = 'ProgressBarDeltaGrow_glow_68',
                    T = (e) => (e ? { left: 0 } : { right: 0 }),
                    N = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    I = (e) => ({ transitionDuration: `${e}ms` }),
                    O = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: l,
                            to: i,
                            onEndAnimation: s,
                            onChangeAnimationState: _,
                            className: c,
                        }) => {
                            const m = i < a,
                                d = (0, n.useState)(w.Idle),
                                E = d[0],
                                A = d[1],
                                b = E === w.End,
                                h = E === w.Idle,
                                F = E === w.Grow,
                                C = E === w.Shrink,
                                D = (0, n.useCallback)(
                                    (e) => {
                                        (A(e), _ && _(e));
                                    },
                                    [_],
                                ),
                                g = (0, n.useCallback)(
                                    (e, u) =>
                                        (0, v.F)(() => {
                                            D(e);
                                        }, u),
                                    [D],
                                );
                            (0, n.useEffect)(() => {
                                if (!t)
                                    return h
                                        ? g(w.Grow, u)
                                        : F
                                          ? g(w.Shrink, e)
                                          : C
                                            ? g(w.End, e)
                                            : void (b && s && s());
                            }, [g, t, b, F, h, C, s, u, e]);
                            const B = (0, n.useMemo)(() => Object.assign({ width: '100%' }, I(e), T(m)), [m, e]),
                                f = (0, n.useMemo)(() => Object.assign({ width: '0%' }, I(e), T(m)), [m, e]),
                                S = (0, n.useMemo)(() => Object.assign({ width: '0%' }, N(m, a), I(e)), [a, m, e]),
                                x = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - a)}%` }, N(m, a), I(e)),
                                    [a, m, i, e],
                                );
                            if (b) return null;
                            const L = r()(y, c, m && 0 === i && P);
                            return o().createElement(
                                'div',
                                { style: h ? S : x, className: L },
                                o().createElement(
                                    'div',
                                    { style: C ? f : B, className: k },
                                    o().createElement(p, { size: l }),
                                ),
                            );
                        },
                    ),
                    H = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: r,
                            isComplete: l,
                            animationSettings: i,
                            onEndAnimation: s,
                            onChangeAnimationState: _,
                        }) => {
                            const c = e < t,
                                m = (0, n.useState)(!1),
                                d = m[0],
                                E = m[1],
                                A = (0, n.useCallback)(
                                    (e) => {
                                        (e === w.Shrink && E(!0), _ && _(e));
                                    },
                                    [_],
                                ),
                                b = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                h = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(g, {
                                    size: u,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: l,
                                    withoutBounce: c && 0 === e,
                                    baseStyles: d ? h : b,
                                }),
                                t >= 0 &&
                                    o().createElement(O, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: A,
                                        freezed: i.freezed,
                                        onEndAnimation: s,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: i.delta.className,
                                    }),
                            );
                        },
                    ),
                    $ = ['onComplete', 'onEndAnimation'];
                function G() {
                    return (
                        (G =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        G.apply(this, arguments)
                    );
                }
                const W = (0, n.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, $);
                        const r = (0, n.useState)(!1),
                            l = r[0],
                            i = r[1],
                            s = (0, n.useCallback)(() => {
                                const e = 100 === a.to;
                                (e !== l && i(e), e && u && u(), t && t());
                            }, [l, u, t, a.to]);
                        switch (a.animationSettings.type) {
                            case h.Simple:
                                return o().createElement(M, G({}, a, { onEndAnimation: s, isComplete: l }));
                            case h.Growing:
                                return o().createElement(H, G({}, a, { onEndAnimation: s, isComplete: l }));
                            default:
                                return null;
                        }
                    }),
                    U = ['onEndAnimation'];
                function j() {
                    return (
                        (j =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        j.apply(this, arguments)
                    );
                }
                const z = (0, n.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, U);
                    const a = (0, n.useRef)({}),
                        r = (0, n.useCallback)(() => {
                            ((a.current.from = void 0), u && u());
                        }, [u]),
                        l = 'number' == typeof a.current.from ? a.current.from : t.from;
                    return (
                        (a.current.from = l),
                        o().createElement(W, j({}, t, { onEndAnimation: r, key: `${l}-${t.to}`, from: l }))
                    );
                });
                function X() {
                    return (
                        (X =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        X.apply(this, arguments)
                    );
                }
                const q = (0, n.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: a,
                            deltaFrom: r,
                            animationSettings: n,
                            onEndAnimation: l,
                            onChangeAnimationState: i,
                            onComplete: s,
                        }) => {
                            if (r === u)
                                return o().createElement(B, {
                                    key: `${r}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: a,
                                    onComplete: s,
                                });
                            const _ = {
                                from: r,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: a,
                                animationSettings: n,
                                onComplete: s,
                                onEndAnimation: l,
                                onChangeAnimationState: i,
                            };
                            return n.withStack
                                ? o().createElement(z, _)
                                : o().createElement(W, X({ key: `${r}-${u}` }, _));
                        },
                    ),
                    V = (e) => ({
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
                    Y = (e, u, t) => (t < e ? e : t > u ? u : t),
                    K = (e, u, t) => {
                        if ('number' == typeof t) {
                            return (Y(0, u, t) / u) * 100;
                        }
                        return e;
                    },
                    Z = {
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
                    Q = {
                        freezed: !1,
                        withStack: !1,
                        type: h.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    J = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = Z,
                            size: t = b.Default,
                            animationSettings: a = Q,
                            disabled: l = !1,
                            withoutBackground: i = !1,
                            progressBarBackgroundClassMix: s,
                            value: _,
                            deltaFrom: c,
                            lineRef: m,
                            onChangeAnimationState: d,
                            onEndAnimation: E,
                            onComplete: h,
                        }) => {
                            const C = ((e, u, t) =>
                                (0, n.useMemo)(() => {
                                    const a = (Y(0, u, e) / u) * 100;
                                    return { value: a, deltaFrom: K(a, u, t) };
                                }, [t, u, e]))(_, e, c);
                            return o().createElement(
                                'div',
                                { className: r()(A.base, A[`base__${t}`]), style: V(u) },
                                !i && o().createElement(F, { size: t, classMix: s }),
                                o().createElement(q, {
                                    size: t,
                                    lineRef: m,
                                    disabled: l,
                                    value: C.value,
                                    deltaFrom: C.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: E,
                                    onChangeAnimationState: d,
                                    onComplete: h,
                                }),
                            );
                        },
                    ),
                    ee = {
                        base: 'EmblemProgressBar_base_5c',
                        base__small: 'EmblemProgressBar_base__small_6c',
                        base__completed: 'EmblemProgressBar_base__completed_6d',
                        hideProgress: 'EmblemProgressBar_hideProgress_18',
                        base__completePostProgression: 'EmblemProgressBar_base__completePostProgression_20',
                        base__hidden: 'EmblemProgressBar_base__hidden_8b',
                        hideLevel: 'EmblemProgressBar_hideLevel_1e',
                        showLevel: 'EmblemProgressBar_showLevel_5d',
                        hideLevelSmall: 'EmblemProgressBar_hideLevelSmall_ae',
                        showLevelSmall: 'EmblemProgressBar_showLevelSmall_df',
                        hideLevelMicro: 'EmblemProgressBar_hideLevelMicro_13',
                        showLevelMicro: 'EmblemProgressBar_showLevelMicro_ae',
                        showIcon: 'EmblemProgressBar_showIcon_55',
                        showIconSmall: 'EmblemProgressBar_showIconSmall_26',
                        showIconMicro: 'EmblemProgressBar_showIconMicro_78',
                    },
                    ue = (0, n.memo)(
                        ({
                            progression: e,
                            isNoVehicles: u = !1,
                            showProgressionCompleted: t,
                            isProgressionCompleted: a,
                            size: n,
                        }) => {
                            const l = r()(
                                ee.base,
                                ee[`base__${n}`],
                                t && ee.base__completed,
                                !t && a && ee.base__hidden,
                            );
                            return o().createElement(
                                'div',
                                { className: l },
                                o().createElement(J, {
                                    key: e.to,
                                    size: b.Small,
                                    value: e.to || 0,
                                    deltaFrom: e.from || 0,
                                    disabled: u,
                                }),
                            );
                        },
                    );
                function te() {
                    return (
                        (te =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        te.apply(this, arguments)
                    );
                }
                const ae = (0, n.memo)((e) => {
                    const u = e.progression,
                        t = e.size,
                        a = e.battlePassState,
                        n = e.hasBattlePass,
                        s = e.isChapterChosen,
                        _ = e.hasBeenActive,
                        m = void 0 !== _ && _,
                        d = e.isChapterSelection,
                        A = void 0 !== d && d,
                        b = e.isOpen,
                        h = void 0 !== b && b,
                        F = e.isProgression,
                        C = void 0 !== F && F,
                        p = e.showProgressBar,
                        D = void 0 === p || p,
                        g = e.chapterType,
                        B = e.chapterID;
                    let v = '',
                        w = '',
                        f = '';
                    t === c.$u.Small
                        ? ((v = 'Small'), (w = '__small'), (f = '_small'))
                        : t === c.$u.Micro && ((v = 'Micro'), (w = '__micro'), (f = '_micro'));
                    const S = h ? 'Open' : '',
                        x = a === c.Bq.CompletedRightNow,
                        L = n || a === c.Bq.Bought,
                        M = (a === c.Bq.Completed || x) && L,
                        y = (a === c.Bq.Completed || x) && !L,
                        P = M || y,
                        k = r()(
                            l.image,
                            l[`image${w}`],
                            h && l[`image__open${v}`],
                            L && l[`image__battlePass${v}${S}`],
                            a === c.Bq.AwaitSeason && l[`image__seasonWaiting${v}`],
                            y && l[`image__completedFree${v}${S}`],
                        ),
                        T = r()(l[`${g}`], l[`${g}${w}`]),
                        N = void 0 !== u.from,
                        I = D && ((N && s) || m);
                    return o().createElement(
                        'div',
                        { className: l.base },
                        o().createElement('div', { className: T }),
                        o().createElement(
                            'div',
                            { className: k, style: (0, i.FL)(B, f, h, L) },
                            a !== c.Bq.AwaitSeason &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        E,
                                        te(
                                            {
                                                hasProgression: N,
                                                isGolden: L,
                                                isProgressionCompleted: P,
                                                isChapterChosen: s,
                                                hasBeenActive: m,
                                                isChapterSelection: A,
                                                isProgression: C,
                                            },
                                            e,
                                            u,
                                        ),
                                    ),
                                    I &&
                                        o().createElement(ue, {
                                            key: u.to,
                                            progression: u,
                                            showProgressionCompleted: x,
                                            isProgressionCompleted: P,
                                            size: t,
                                        }),
                                ),
                        ),
                    );
                });
            },
            8546: (e, u, t) => {
                'use strict';
                let a, r, n, o;
                (t.d(u, { $u: () => a, Bq: () => n }),
                    (function (e) {
                        ((e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.AwaitSeason = 'awaitSeason'),
                            (e.Bought = 'bought'),
                            (e.Free = 'free'),
                            (e.Completed = 'completed'),
                            (e.CompletedRightNow = 'completedRightNow'),
                            (e.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                            (e.NoVehiclesBase = 'noVehiclesBase'),
                            (e.ChapterNotChosen = 'chapterNotChosen'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay'));
                    })(o || (o = {})));
            },
            5287: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                const a = { base: 'FormatText_base_d0' };
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, a] = deferred[i], n = !0, o = 0; o < u.length; o++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((n = !1), a < r && (r = a));
                    if (n) {
                        deferred.splice(i--, 1);
                        var l = t();
                        void 0 !== l && (e = l);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > a; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, a];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(u, { a: u }), u);
        }),
        (__webpack_require__.d = (e, u) => {
            for (var t in u)
                __webpack_require__.o(u, t) &&
                    !__webpack_require__.o(e, t) &&
                    Object.defineProperty(e, t, { enumerable: !0, get: u[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, u) => Object.prototype.hasOwnProperty.call(e, u)),
        (__webpack_require__.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (__webpack_require__.j = 1201),
        (() => {
            var e = { 1201: 0, 7737: 0, 1730: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        r,
                        [n, o, l] = t,
                        i = 0;
                    if (n.some((u) => 0 !== e[u])) {
                        for (a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                        if (l) var s = l(__webpack_require__);
                    }
                    for (u && u(t); i < n.length; i++)
                        ((r = n[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(s);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(6535));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
