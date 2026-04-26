(() => {
    var __webpack_modules__ = {
            280: (u, e, t) => {
                'use strict';
                t.d(e, { z: () => l });
                var r = t(6179),
                    n = t.n(r),
                    a = t(6483),
                    o = t.n(a),
                    i = t(3649),
                    s = t(5287);
                const l = ({ binding: u, text: e = '', classMix: t, alignment: a = i.v2.left }) =>
                    null === e
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : n().createElement(
                              r.Fragment,
                              null,
                              e.split('\n').map((e, l) =>
                                  n().createElement(
                                      'div',
                                      { className: o()(s.Z.base, t), key: `${e}-${l}` },
                                      (0, i.Uw)(e, a, u).map((u, e) =>
                                          n().createElement(r.Fragment, { key: `${e}-${u}` }, u),
                                      ),
                                  ),
                              ),
                          );
            },
            3495: (u, e, t) => {
                'use strict';
                t.d(e, { Y: () => E });
                var r = t(3138),
                    n = t(6179),
                    a = t(1043),
                    o = t(5262);
                const i = r.O.client.getSize('rem'),
                    s = i.width,
                    l = i.height,
                    c = Object.assign({ width: s, height: l }, (0, o.T)(s, l, a.j)),
                    E = (0, n.createContext)(c);
            },
            1039: (u, e, t) => {
                'use strict';
                var r = t(6179),
                    n = t.n(r),
                    a = t(6536),
                    o = t(3495),
                    i = t(1043),
                    s = t(5262),
                    l = t(3138);
                (0, r.memo)(({ children: u }) => {
                    const e = (0, r.useContext)(o.Y),
                        t = (0, r.useState)(e),
                        c = t[0],
                        E = t[1],
                        A = (0, r.useCallback)((u, e) => {
                            const t = l.O.view.pxToRem(u),
                                r = l.O.view.pxToRem(e);
                            E(Object.assign({ width: t, height: r }, (0, s.T)(t, r, i.j)));
                        }, []);
                    ((0, a.Z)(() => {
                        engine.on('clientResized', A);
                    }),
                        (0, r.useEffect)(() => () => engine.off('clientResized', A), [A]));
                    const F = (0, r.useMemo)(() => Object.assign({}, c), [c]);
                    return n().createElement(o.Y.Provider, { value: F }, u);
                });
            },
            6010: (u, e, t) => {
                'use strict';
                var r = t(6179),
                    n = t(7382),
                    a = t(3495);
                const o = ['children'],
                    i = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, o);
                        const i = (0, r.useContext)(a.Y),
                            s = i.extraLarge,
                            l = i.large,
                            c = i.medium,
                            E = i.small,
                            A = i.extraSmall,
                            F = i.extraLargeWidth,
                            m = i.largeWidth,
                            _ = i.mediumWidth,
                            D = i.smallWidth,
                            d = i.extraSmallWidth,
                            B = i.extraLargeHeight,
                            C = i.largeHeight,
                            p = i.mediumHeight,
                            g = i.smallHeight,
                            h = i.extraSmallHeight,
                            f = { extraLarge: B, large: C, medium: p, small: g, extraSmall: h };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && s) return e;
                            if (t.large && l) return e;
                            if (t.medium && c) return e;
                            if (t.small && E) return e;
                            if (t.extraSmall && A) return e;
                        } else {
                            if (t.extraLargeWidth && F) return (0, n.H)(e, t, f);
                            if (t.largeWidth && m) return (0, n.H)(e, t, f);
                            if (t.mediumWidth && _) return (0, n.H)(e, t, f);
                            if (t.smallWidth && D) return (0, n.H)(e, t, f);
                            if (t.extraSmallWidth && d) return (0, n.H)(e, t, f);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && B) return e;
                                if (t.largeHeight && C) return e;
                                if (t.mediumHeight && p) return e;
                                if (t.smallHeight && g) return e;
                                if (t.extraSmallHeight && h) return e;
                            }
                        }
                        return null;
                    };
                ((i.defaultProps = {
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
                }),
                    (0, r.memo)(i));
            },
            7382: (u, e, t) => {
                'use strict';
                t.d(e, { H: () => r });
                const r = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
            },
            7739: (u, e, t) => {
                'use strict';
                (t.d(e, { YN: () => r.Y }), t(6010), t(1039));
                var r = t(3495);
            },
            1043: (u, e, t) => {
                'use strict';
                t.d(e, { j: () => r });
                const r = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (u, e, t) => {
                'use strict';
                var r;
                function n(u, e, t) {
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
                        a = Math.min(r, n);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
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
                (t.d(e, { T: () => n }),
                    (function (u) {
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
                    })(r || (r = {})));
            },
            8089: (u, e, t) => {
                'use strict';
                t.d(e, { A: () => E });
                var r = t(6179),
                    n = t.n(r),
                    a = t(6483),
                    o = t.n(a),
                    i = t(7727),
                    s = t(7476);
                const l = [
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
                function c() {
                    return (
                        (c =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        c.apply(this, arguments)
                    );
                }
                class E extends n().PureComponent {
                    constructor(...u) {
                        (super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                (u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, i.G)(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                (u && u(e), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                (u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, i.G)(this.props.soundClick));
                            }),
                            (this._onMouseUp = (u) => (e) => {
                                (u && u(e), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const u = this.props,
                            e = u.caption,
                            t = u.onClick,
                            r = u.goto,
                            a = u.side,
                            i = u.type,
                            E = u.classNames,
                            A = u.onMouseEnter,
                            F = u.onMouseLeave,
                            m = u.onMouseDown,
                            _ = u.onMouseUp,
                            D =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(u, l)),
                            d = o()(s.Z.base, s.Z[`base__${i}`], s.Z[`base__${a}`], null == E ? void 0 : E.base),
                            B = o()(s.Z.icon, s.Z[`icon__${i}`], s.Z[`icon__${a}`], null == E ? void 0 : E.icon),
                            C = o()(s.Z.glow, null == E ? void 0 : E.glow),
                            p = o()(s.Z.caption, s.Z[`caption__${i}`], null == E ? void 0 : E.caption),
                            g = o()(s.Z.goto, null == E ? void 0 : E.goto);
                        return n().createElement(
                            'div',
                            c(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(A),
                                    onMouseLeave: this._onMouseLeave(F),
                                    onMouseDown: this._onMouseDown(m),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                D,
                            ),
                            'info' !== i && n().createElement('div', { className: s.Z.shine }),
                            n().createElement('div', { className: B }, n().createElement('div', { className: C })),
                            n().createElement('div', { className: p }, e),
                            r && n().createElement('div', { className: g }, r),
                        );
                    }
                }
                E.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            2056: (u, e, t) => {
                'use strict';
                t.d(e, { u: () => l });
                var r = t(7902),
                    n = t(4179),
                    a = t(6179);
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
                function i(u) {
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
                const s = (u, e, t = {}, r = 0) => {
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
                            A = u.onClick,
                            F = u.ignoreShowDelay,
                            m = void 0 !== F && F,
                            _ = u.ignoreMouseClick,
                            D = void 0 !== _ && _,
                            d = u.decoratorId,
                            B = void 0 === d ? 0 : d,
                            C = u.isEnabled,
                            p = void 0 === C || C,
                            g = u.targetId,
                            h = void 0 === g ? 0 : g,
                            f = u.onShow,
                            v = u.onHide,
                            b = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, o);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            x = (0, a.useMemo)(() => h || (0, r.F)().resId, [h]),
                            S = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (s(t, B, { isMouseEvent: !0, on: !0, arguments: i(n) }, x),
                                    f && f(),
                                    (w.current.isVisible = !0));
                            }, [t, B, n, x, f]),
                            M = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const u = w.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (w.current.timeoutId = 0)),
                                        s(t, B, { on: !1 }, x),
                                        w.current.isVisible && v && v(),
                                        (w.current.isVisible = !1));
                                }
                            }, [t, B, x, v]),
                            L = (0, a.useCallback)((u) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(w.current.prevTarget) && M();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const u = w.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', L, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', L, { capture: !0 }),
                                            u && window.clearTimeout(u));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === p && M();
                            }, [p, M]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', M),
                                    () => {
                                        (window.removeEventListener('mouseleave', M), M());
                                    }
                                ),
                                [M],
                            ),
                            p
                                ? (0, a.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((y = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((w.current.timeoutId = window.setTimeout(S, m ? 100 : 400)),
                                                          l && l(u),
                                                          y && y(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  (M(), null == c || c(e), null == u || u(e));
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  (!1 === D && M(), null == A || A(e), null == u || u(e));
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  (!1 === D && M(), null == E || E(e), null == u || u(e));
                                              })(e.props.onMouseDown),
                                          },
                                          b,
                                      ),
                                  )
                                : e
                        );
                        var y;
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
            3532: (u) => {
                u.exports = {
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
            9887: (u) => {
                u.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
                };
            },
            7515: (u, e, t) => {
                'use strict';
                t.d(e, { u: () => r });
                const r = (u, e, t) => (t < u ? u : t > e ? e : t);
            },
            1856: (u, e, t) => {
                'use strict';
                t.d(e, { v: () => r });
                const r = (u) => {
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
            },
            122: (u, e, t) => {
                'use strict';
                t.d(e, { F: () => r });
                const r = (u, e) => {
                    let t;
                    const r = setTimeout(() => {
                        t = u();
                    }, e);
                    return () => {
                        ('function' == typeof t && t(), clearTimeout(r));
                    };
                };
            },
            8246: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => o });
                var r = t(3138);
                function n(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const a = (u) => (0 === u ? window : window.subViews.get(u));
                function o({ initializer: u = !0, rootId: e = 0, getRoot: t = a, context: o = 'model' } = {}) {
                    const i = new Map();
                    function s(u, e = 0) {
                        viewEnv.removeDataChangedCallback(u, e)
                            ? i.delete(u)
                            : console.error("Can't remove callback by id:", u);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (u, e, t) => {
                            t.forEach((e) => {
                                const t = i.get(e);
                                void 0 !== t && t(u);
                            });
                        });
                    });
                    const l = (u) => {
                        const r = t(e),
                            n = o.split('.').reduce((u, e) => u[e], r);
                        return 'string' != typeof u || 0 === u.length
                            ? n
                            : u.split('.').reduce((u, e) => {
                                  const t = u[e];
                                  return 'function' == typeof t ? t.bind(u) : t;
                              }, n);
                    };
                    return {
                        subscribe: (t, n) => {
                            const a = 'string' == typeof n ? `${o}.${n}` : o,
                                s = r.O.view.addModelObserver(a, e, !0);
                            return (i.set(s, t), u && t(l(n)), s);
                        },
                        readByPath: l,
                        createCallback: (u, e) => {
                            const t = l(e);
                            return (...e) => {
                                t(u(...e));
                            };
                        },
                        createCallbackNoArgs: (u) => {
                            const e = l(u);
                            return () => {
                                e();
                            };
                        },
                        dispose: function () {
                            for (
                                var u,
                                    t = (function (u, e) {
                                        var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                                        if (t) return (t = t.call(u)).next.bind(t);
                                        if (
                                            Array.isArray(u) ||
                                            (t = (function (u, e) {
                                                if (u) {
                                                    if ('string' == typeof u) return n(u, e);
                                                    var t = Object.prototype.toString.call(u).slice(8, -1);
                                                    return (
                                                        'Object' === t && u.constructor && (t = u.constructor.name),
                                                        'Map' === t || 'Set' === t
                                                            ? Array.from(u)
                                                            : 'Arguments' === t ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                                              ? n(u, e)
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
                                    })(i.keys());
                                !(u = t()).done;
                            )
                                s(u.value, e);
                        },
                        unsubscribe: s,
                    };
                }
            },
            3215: (u, e, t) => {
                'use strict';
                t.d(e, { q: () => s });
                var r = t(4598),
                    n = t(9174),
                    a = t(6179),
                    o = t.n(a),
                    i = t(8246);
                const s = () => (u, e) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: s = 'real', options: l, children: c, mocks: E }) {
                            const A = (0, a.useRef)([]),
                                F = (t, a, o) => {
                                    var s;
                                    const l = i.U(a),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (s = null == o ? void 0 : o.getter) ? s : () => {},
                                                  }),
                                        E = (u) =>
                                            'mocks' === t ? (null == o ? void 0 : o.getter(u)) : c.readByPath(u),
                                        F = (u) => A.current.push(u),
                                        m = u({
                                            mode: t,
                                            readByPath: E,
                                            externalModel: c,
                                            observableModel: {
                                                array: (u, e) => {
                                                    const a = null != e ? e : E(u),
                                                        o = n.LO.box(a, { equals: r.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, n.aD)((u) => o.set(u)),
                                                                u,
                                                            ),
                                                        o
                                                    );
                                                },
                                                object: (u, e) => {
                                                    const a = null != e ? e : E(u),
                                                        o = n.LO.box(a, { equals: r.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, n.aD)((u) => o.set(u)),
                                                                u,
                                                            ),
                                                        o
                                                    );
                                                },
                                                primitives: (u, e) => {
                                                    const r = E(e);
                                                    if (Array.isArray(u)) {
                                                        const a = u.reduce(
                                                            (u, e) => ((u[e] = n.LO.box(r[e], {})), u),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, n.aD)((e) => {
                                                                        u.forEach((u) => {
                                                                            a[u].set(e[u]);
                                                                        });
                                                                    }),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    }
                                                    {
                                                        const a = u,
                                                            o = Object.entries(a),
                                                            i = o.reduce(
                                                                (u, [e, t]) => ((u[t] = n.LO.box(r[e], {})), u),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, n.aD)((u) => {
                                                                        o.forEach(([e, t]) => {
                                                                            i[t].set(u[e]);
                                                                        });
                                                                    }),
                                                                    e,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: F,
                                        }),
                                        _ = { mode: t, model: m, externalModel: c, cleanup: F };
                                    return {
                                        model: m,
                                        controls: 'mocks' === t && o ? o.controls(_) : e(_),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                m = (0, a.useRef)(!1),
                                _ = (0, a.useState)(s),
                                D = _[0],
                                d = _[1],
                                B = (0, a.useState)(() => F(s, l, E)),
                                C = B[0],
                                p = B[1];
                            return (
                                (0, a.useEffect)(() => {
                                    m.current ? p(F(D, l, E)) : (m.current = !0);
                                }, [E, D, l]),
                                (0, a.useEffect)(() => {
                                    d(s);
                                }, [s]),
                                (0, a.useEffect)(
                                    () => () => {
                                        (C.externalModel.dispose(), A.current.forEach((u) => u()));
                                    },
                                    [C],
                                ),
                                o().createElement(t.Provider, { value: C }, c)
                            );
                        },
                        () => (0, a.useContext)(t),
                    ];
                };
            },
            527: (u, e, t) => {
                'use strict';
                (t.r(e), t.d(e, { mouse: () => i, onResize: () => a }));
                var r = t(2472),
                    n = t(1176);
                const a = (0, r.E)('clientResized'),
                    o = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    i = (function () {
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
                        const a = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let n = !0;
                                        const a = `mouse${e}`,
                                            i = o[e]((u) => t([u, 'outside']));
                                        function s(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, s),
                                            r(),
                                            () => {
                                                n &&
                                                    (i(),
                                                    window.removeEventListener(a, s),
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
                        return Object.assign({}, a, {
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
                        getSize: () => n,
                        graphicsQuality: () => o,
                    }));
                var r = t(527);
                function n(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
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
                t.d(e, { O: () => n });
                var r = t(5959);
                const n = { view: t(7641), client: r };
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
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => b,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => _,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => D,
                        getSize: () => A,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => h,
                        isFocused: () => p,
                        pxToRem: () => d,
                        remToPx: () => B,
                        resize: () => F,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => x,
                    }));
                var r = t(3722),
                    n = t(6112),
                    a = t(6538),
                    o = t(8566);
                function i(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function s(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function l(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function c(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function E(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function m(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function _() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function d(u) {
                    return viewEnv.pxToRem(u);
                }
                function B(u) {
                    return viewEnv.remToPx(u);
                }
                function C(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(n.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === n.W[e]), u),
                        {},
                    ),
                    w = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    x = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : a.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => a });
                const r = ['args'],
                    n = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                o = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(e, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, o, {
                                          arguments:
                                              ((n = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    a = {
                        close(u) {
                            n('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(u) {
                            n(16, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            4598: (u, e, t) => {
                'use strict';
                function r() {
                    return !1;
                }
                (t.d(e, { jv: () => r }), console.log);
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
            6536: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => n });
                var r = t(6179);
                const n = (u) => {
                    const e = (0, r.useRef)(!1);
                    e.current || (u(), (e.current = !0));
                };
            },
            5415: (u, e, t) => {
                'use strict';
                t.d(e, { Aq: () => s, GS: () => l, cJ: () => o, fd: () => i });
                var r = t(6179),
                    n = t(7739),
                    a = t(1043);
                let o, i, s;
                (!(function (u) {
                    ((u[(u.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = a.j.small.width)] = 'Small'),
                        (u[(u.Medium = a.j.medium.width)] = 'Medium'),
                        (u[(u.Large = a.j.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge'));
                })(o || (o = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = a.j.small.width)] = 'Small'),
                            (u[(u.Medium = a.j.medium.width)] = 'Medium'),
                            (u[(u.Large = a.j.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge'));
                    })(i || (i = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = a.j.small.height)] = 'Small'),
                            (u[(u.Medium = a.j.medium.height)] = 'Medium'),
                            (u[(u.Large = a.j.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge'));
                    })(s || (s = {})));
                const l = () => {
                    const u = (0, r.useContext)(n.YN),
                        e = u.width,
                        t = u.height,
                        a = ((u) => {
                            switch (!0) {
                                case u.extraLarge:
                                    return o.ExtraLarge;
                                case u.large:
                                    return o.Large;
                                case u.medium:
                                    return o.Medium;
                                case u.small:
                                    return o.Small;
                                case u.extraSmall:
                                    return o.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), o.ExtraSmall);
                            }
                        })(u),
                        l = ((u) => {
                            switch (!0) {
                                case u.extraLargeWidth:
                                    return i.ExtraLarge;
                                case u.largeWidth:
                                    return i.Large;
                                case u.mediumWidth:
                                    return i.Medium;
                                case u.smallWidth:
                                    return i.Small;
                                case u.extraSmallWidth:
                                    return i.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), i.ExtraSmall);
                            }
                        })(u),
                        c = ((u) => {
                            switch (!0) {
                                case u.extraLargeHeight:
                                    return s.ExtraLarge;
                                case u.largeHeight:
                                    return s.Large;
                                case u.mediumHeight:
                                    return s.Medium;
                                case u.smallHeight:
                                    return s.Small;
                                case u.extraSmallHeight:
                                    return s.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), s.ExtraSmall);
                            }
                        })(u);
                    return { mediaSize: a, mediaWidth: l, mediaHeight: c, remScreenWidth: e, remScreenHeight: t };
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
                            (u[(u.KEY_0 = 48)] = 'KEY_0'),
                            (u[(u.KEY_1 = 49)] = 'KEY_1'),
                            (u[(u.KEY_2 = 50)] = 'KEY_2'),
                            (u[(u.KEY_3 = 51)] = 'KEY_3'),
                            (u[(u.KEY_4 = 52)] = 'KEY_4'),
                            (u[(u.KEY_5 = 53)] = 'KEY_5'),
                            (u[(u.KEY_6 = 54)] = 'KEY_6'),
                            (u[(u.KEY_7 = 55)] = 'KEY_7'),
                            (u[(u.KEY_8 = 56)] = 'KEY_8'),
                            (u[(u.KEY_9 = 57)] = 'KEY_9'),
                            (u[(u.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (u[(u.INSERT = 45)] = 'INSERT'),
                            (u[(u.F1 = 112)] = 'F1'),
                            (u[(u.F2 = 113)] = 'F2'),
                            (u[(u.F3 = 114)] = 'F3'),
                            (u[(u.F4 = 115)] = 'F4'),
                            (u[(u.F5 = 116)] = 'F5'),
                            (u[(u.F6 = 117)] = 'F6'),
                            (u[(u.F7 = 118)] = 'F7'),
                            (u[(u.F8 = 119)] = 'F8'),
                            (u[(u.F9 = 120)] = 'F9'),
                            (u[(u.F10 = 121)] = 'F10'),
                            (u[(u.F11 = 122)] = 'F11'),
                            (u[(u.F12 = 123)] = 'F12'),
                            (u[(u.SELECT = 93)] = 'SELECT'),
                            (u[(u.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (u[(u.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (u[(u.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (u[(u.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (u[(u.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (u[(u.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (u[(u.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (u[(u.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (u[(u.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (u[(u.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (u[(u.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (u[(u.STAR = 106)] = 'STAR'),
                            (u[(u.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (u[(u.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (u[(u.COMMA = 188)] = 'COMMA'),
                            (u[(u.DASH = 189)] = 'DASH'),
                            (u[(u.PERIOD = 190)] = 'PERIOD'));
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
            9480: (u, e, t) => {
                'use strict';
                function r(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, r) => e(null == u ? void 0 : u.value, t, r));
                }
                t.d(e, { UI: () => r });
            },
            7727: (u, e, t) => {
                'use strict';
                function r(u) {
                    engine.call('PlaySound', u);
                }
                t.d(e, { G: () => r });
            },
            3649: (u, e, t) => {
                'use strict';
                let r;
                (t.d(e, { Uw: () => l, v2: () => r }),
                    (function (u) {
                        ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                    })(r || (r = {})));
                const n = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    a = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    o = (u, e, t = r.left) => u.split(e).reduce(t === r.left ? n : a, []),
                    i = (() => {
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
                    s = ['zh_cn', 'zh_sg', 'zh_tw'],
                    l = (u, e, t) =>
                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                            t && u in t
                                ? t[u]
                                : ((u, e = r.left) => {
                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return s.includes(t)
                                          ? i(u)
                                          : ((u, e = r.left) => {
                                                let t = [];
                                                const n =
                                                        /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                    a = u.replace(/&nbsp;/g, ' ');
                                                return (
                                                    o(a, /( )/, e).forEach((u) => (t = t.concat(o(u, n, r.left)))),
                                                    t
                                                );
                                            })(u, e);
                                  })(u, e),
                        );
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => a });
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
                        const a = r.O.view.addModelObserver(u, t, n);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", u),
                            a
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
                const a = n;
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
            4179: (u, e, t) => {
                'use strict';
                t.d(e, { B0: () => s, ry: () => C });
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
                var a = t(1358);
                const o = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    i = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
                let s;
                var l;
                (((l = s || (s = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE'));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    F = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    _ = t(3138);
                const D = ['args'];
                function d(u, e, t, r, n, a, o) {
                    try {
                        var i = u[a](o),
                            s = i.value;
                    } catch (u) {
                        return void t(u);
                    }
                    i.done ? e(s) : Promise.resolve(s).then(r, n);
                }
                const B = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    C = (function () {
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
                                        var a = u.apply(e, t);
                                        function o(u) {
                                            d(a, r, n, o, i, 'next', u);
                                        }
                                        function i(u) {
                                            d(a, r, n, o, i, 'throw', u);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    p = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(e, D);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    g = () => p(s.CLOSE),
                    h = (u, e) => {
                        u.keyCode === m.n.ESCAPE && e();
                    };
                var f = t(7572);
                const v = n.instance,
                    b = {
                        DataTracker: a.Z,
                        ViewModel: f.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: E,
                        TimeFormatType: A,
                        DateFormatType: F,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => p(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => p(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            p(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, r, n = R.invalid('resId'), a) => {
                            const o = _.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                A = i.height,
                                F = {
                                    x: _.O.view.pxToRem(l) + o.x,
                                    y: _.O.view.pxToRem(c) + o.y,
                                    width: _.O.view.pxToRem(E),
                                    height: _.O.view.pxToRem(A),
                                };
                            p(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: B(F),
                                on: !0,
                                args: a,
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
                            h(u, g);
                        },
                        handleViewEvent: p,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
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
                        ClickOutsideManager: v,
                        SystemLocale: o,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = b;
            },
            1504: (u, e, t) => {
                'use strict';
                (t(7739), t(6179), t(2849));
            },
            2849: (u, e, t) => {
                'use strict';
                t(6483);
                var r = t(926),
                    n = t.n(r),
                    a = (t(6179), t(5415));
                (a.fd.ExtraSmall,
                    a.fd.Small,
                    n().SMALL_WIDTH,
                    a.fd.Medium,
                    n().SMALL_WIDTH,
                    n().MEDIUM_WIDTH,
                    a.fd.Large,
                    n().SMALL_WIDTH,
                    n().MEDIUM_WIDTH,
                    n().LARGE_WIDTH,
                    a.fd.ExtraLarge,
                    n().SMALL_WIDTH,
                    n().MEDIUM_WIDTH,
                    n().LARGE_WIDTH,
                    n().EXTRA_LARGE_WIDTH,
                    a.Aq.ExtraSmall,
                    a.Aq.Small,
                    n().SMALL_HEIGHT,
                    a.Aq.Medium,
                    n().SMALL_HEIGHT,
                    n().MEDIUM_HEIGHT,
                    a.Aq.Large,
                    n().SMALL_HEIGHT,
                    n().MEDIUM_HEIGHT,
                    n().LARGE_HEIGHT,
                    a.Aq.ExtraLarge,
                    n().SMALL_HEIGHT,
                    n().MEDIUM_HEIGHT,
                    n().LARGE_HEIGHT,
                    n().EXTRA_LARGE_HEIGHT,
                    a.cJ.ExtraSmall,
                    a.cJ.Small,
                    n().SMALL,
                    a.cJ.Medium,
                    n().SMALL,
                    n().MEDIUM,
                    a.cJ.Large,
                    n().SMALL,
                    n().MEDIUM,
                    n().LARGE,
                    a.cJ.ExtraLarge,
                    n().SMALL,
                    n().MEDIUM,
                    n().LARGE,
                    n().EXTRA_LARGE);
            },
            4029: (u, e, t) => {
                'use strict';
                t(1504);
            },
            3428: (u, e, t) => {
                'use strict';
                var r = {};
                (t.r(r),
                    t.d(r, {
                        Area: () => vu,
                        Bar: () => gu,
                        DefaultScroll: () => fu,
                        Direction: () => Eu,
                        defaultSettings: () => Au,
                        useHorizontalScrollApi: () => mu,
                    }));
                var n = {};
                (t.r(n),
                    t.d(n, { Area: () => Nu, Bar: () => Ou, Default: () => Ru, useVerticalScrollApi: () => bu }),
                    t(4029));
                var a = t(6179),
                    o = t.n(a),
                    i = t(6483),
                    s = t.n(i),
                    l = t(9887),
                    c = t.n(l),
                    E = t(5415);
                const A = ['xl', 'lg', 'md', 'sm', 'xs'],
                    F = (u) => u.includes('_') && ((u) => A.includes(u))(u.split('_').at(-1)),
                    m = [E.cJ.ExtraLarge, E.cJ.Large, E.cJ.Medium, E.cJ.Small, E.cJ.ExtraSmall],
                    _ = (u, e) =>
                        Object.keys(u).reduce((t, r) => {
                            if (r in t) return t;
                            if (F(r)) {
                                const n = r.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const a = m.indexOf(e),
                                    o = (-1 !== a ? A.slice(a) : [])
                                        .map((u) => n + '_' + u)
                                        .find((e) => void 0 !== u[e]),
                                    i = o ? u[o] : void 0;
                                return ((t[n] = void 0 !== i ? i : u[n]), t);
                            }
                            const n = u[r];
                            return (
                                void 0 === n ||
                                    ((u, e) => A.some((t) => void 0 !== e[`${u}_${t}`]))(r, u) ||
                                    (t[r] = n),
                                t
                            );
                        }, {}),
                    D = (u, e = _) => {
                        const t = (
                            (u, e = _) =>
                            (t) => {
                                const r = (0, E.GS)().mediaSize,
                                    n = (0, a.useMemo)(() => e(t, r), [t, r]);
                                return o().createElement(u, n);
                            }
                        )(u, e);
                        return o().memo((e) =>
                            Object.keys(e).some((u) => F(u) && void 0 !== e[u])
                                ? o().createElement(t, e)
                                : o().createElement(u, e),
                        );
                    },
                    d = {
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
                    B = [
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
                function C() {
                    return (
                        (C =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        C.apply(this, arguments)
                    );
                }
                Object.keys(c());
                const p = {
                        XL: { mt: d.mt__XL, mr: d.mr__XL, mb: d.mb__XL, ml: d.ml__XL },
                        LG: { mt: d.mt__LG, mr: d.mr__LG, mb: d.mb__LG, ml: d.ml__LG },
                        MDp: { mt: d.mt__MDp, mr: d.mr__MDp, mb: d.mb__MDp, ml: d.ml__MDp },
                        MD: { mt: d.mt__MD, mr: d.mr__MD, mb: d.mb__MD, ml: d.ml__MD },
                        SMp: { mt: d.mt__SMp, mr: d.mr__SMp, mb: d.mb__SMp, ml: d.ml__SMp },
                        SM: { mt: d.mt__SM, mr: d.mr__SM, mb: d.mb__SM, ml: d.ml__SM },
                        XS: { mt: d.mt__XS, mr: d.mr__XS, mb: d.mb__XS, ml: d.ml__XS },
                    },
                    g = (Object.keys(p), ['mt', 'mr', 'mb', 'ml']),
                    h = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    f = D((u) => {
                        let e = u.className,
                            t = u.width,
                            r = u.height,
                            n = u.m,
                            i = u.mt,
                            l = void 0 === i ? n : i,
                            c = u.mr,
                            E = void 0 === c ? n : c,
                            A = u.mb,
                            F = void 0 === A ? n : A,
                            m = u.ml,
                            _ = void 0 === m ? n : m,
                            D = u.column,
                            f = u.row,
                            v = u.flexDirection,
                            b = void 0 === v ? (D ? 'column' : f && 'row') || void 0 : v,
                            w = u.flexStart,
                            x = u.center,
                            S = u.flexEnd,
                            M = u.spaceBetween,
                            L = u.spaceAround,
                            y = u.justifyContent,
                            T =
                                void 0 === y
                                    ? (w ? 'flex-start' : x && 'center') ||
                                      (S && 'flex-end') ||
                                      (M && 'space-between') ||
                                      (L && 'space-around') ||
                                      void 0
                                    : y,
                            O = u.alignItems,
                            k = void 0 === O ? (w ? 'flex-start' : x && 'center') || (S && 'flex-end') || void 0 : O,
                            R = u.alignSelf,
                            N = u.wrap,
                            P = u.flexWrap,
                            H = void 0 === P ? (N ? 'wrap' : void 0) : P,
                            I = u.grow,
                            W = u.shrink,
                            j = u.flex,
                            G = void 0 === j ? (I || W ? `${I ? 1 : 0} ${W ? 1 : 0} auto` : void 0) : j,
                            U = u.style,
                            Y = u.children,
                            X = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, B);
                        const z = (0, a.useMemo)(() => {
                                const u = { mt: l, mr: E, mb: F, ml: _ },
                                    e = ((u) =>
                                        g.reduce((e, t) => {
                                            const r = u[t];
                                            return r && 'number' != typeof r ? e.concat(p[!0 === r ? 'MD' : r][t]) : e;
                                        }, []))(u),
                                    n = ((u) =>
                                        g.reduce((e, t) => {
                                            const r = u[t];
                                            return ('number' == typeof r && (e[h[t]] = r + 'rem'), e);
                                        }, {}))(u);
                                return {
                                    computedStyle: Object.assign({}, U, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: G,
                                        alignSelf: R,
                                        display: b || k ? 'flex' : void 0,
                                        flexDirection: b,
                                        flexWrap: H,
                                        justifyContent: T,
                                        alignItems: k,
                                    }),
                                    computedClassNames: e,
                                };
                            }, [t, r, l, E, F, _, U, G, R, b, H, T, k]),
                            V = z.computedStyle,
                            $ = z.computedClassNames;
                        return o().createElement('div', C({ className: s()(d.base, ...$, e), style: V }, X), Y);
                    });
                var v = t(280),
                    b = t(3532),
                    w = t.n(b);
                const x = {
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
                    S = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        M.apply(this, arguments)
                    );
                }
                Object.keys(c());
                const L = Object.keys(w()),
                    y = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    T = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    O = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    k =
                        (Object.keys({
                            XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                            LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                            MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                            MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                            SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                            SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                            XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                        }),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': y,
                            'heading-H36': y,
                            'heading-H28': T,
                            'heading-H24': T,
                            'heading-H24R': T,
                            'heading-H22': T,
                            'heading-H20R': T,
                            'heading-H18': T,
                            'heading-H15': O,
                            'heading-H14': O,
                            'paragraph-P24': T,
                            'paragraph-P18': T,
                            'paragraph-P16': T,
                            'paragraph-P14': O,
                            'paragraph-P12': O,
                            'paragraph-P10': O,
                        }),
                    N =
                        (Object.keys(k),
                        (u) =>
                            u
                                ? ((u) => L.includes(u))(u)
                                    ? { colorClassName: x[u] }
                                    : { colorStyle: { color: u } }
                                : {}),
                    P = D((u) => {
                        let e = u.text,
                            t = u.variant,
                            r = u.className,
                            n = u.color,
                            i = u.m,
                            l = u.mt,
                            c = void 0 === l ? i : l,
                            E = u.mr,
                            A = void 0 === E ? i : E,
                            F = u.mb,
                            m = void 0 === F ? i : F,
                            _ = u.ml,
                            D = void 0 === _ ? i : _,
                            d = u.style,
                            B = u.format,
                            C = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, S);
                        const p = (0, a.useMemo)(() => {
                                const u = N(n),
                                    e = u.colorClassName,
                                    t = u.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, d, r), colorClassName: e };
                            }, [d, n]),
                            g = p.computedStyle,
                            h = p.colorClassName;
                        return o().createElement(
                            f,
                            M(
                                {
                                    className: s()(x.base, t && x[t], h, r),
                                    style: g,
                                    mt: !0 === c ? k[t || 'paragraph-P16'].mt : c,
                                    mr: !0 === A ? k[t || 'paragraph-P16'].mr : A,
                                    mb: !0 === m ? k[t || 'paragraph-P16'].mb : m,
                                    ml: !0 === D ? k[t || 'paragraph-P16'].ml : D,
                                },
                                C,
                            ),
                            void 0 !== B ? o().createElement(v.z, M({}, B, { text: e })) : e,
                        );
                    });
                var H = t(8089),
                    I = t(3138);
                let W;
                !(function (u) {
                    ((u.None = 'none'),
                        (u.Pillbox = 'pillbox'),
                        (u.Mortar = 'mortar'),
                        (u.Flamer = 'flamer'),
                        (u.Airship = 'airship'));
                })(W || (W = {}));
                var j = t(3403);
                let G, U;
                (!(function (u) {
                    ((u[(u.W_1024 = 1024)] = 'W_1024'),
                        (u[(u.W_1280 = 1280)] = 'W_1280'),
                        (u[(u.W_2000 = 2e3)] = 'W_2000'),
                        (u[(u.W_2200 = 2200)] = 'W_2200'),
                        (u[(u.W_2560 = 2560)] = 'W_2560'));
                })(G || (G = {})),
                    (function (u) {
                        u[(u.H_1200 = 1200)] = 'H_1200';
                    })(U || (U = {})));
                const Y = {
                        DEFAULT_VALUES: {
                            mortar: {
                                stepX: -5,
                                stepYinX: -1.5,
                                stepInY: -4,
                                stepOutY: -3,
                                scaleY: 0.005,
                                scaleX: 0.005,
                            },
                            airship: { stepX: -5, stepYinX: -1, stepInY: -1, stepOutY: -1, scaleY: 0.01, scaleX: 0.01 },
                            flamer: { stepX: -5, stepYinX: 1, stepInY: 1, stepOutY: 3, scaleY: 0.01, scaleX: 0.005 },
                            pillbox: { stepX: -5, stepYinX: 0, stepInY: 0, stepOutY: 0, scaleY: 0.01, scaleX: 0.01 },
                        },
                        1600: {
                            mortar: { stepYinX: -2, stepInY: -5, stepOutY: -4 },
                            flamer: { stepInY: 2 },
                            pillbox: { stepInY: -1 },
                        },
                        1920: {
                            mortar: { stepYinX: -3, stepInY: -7, stepOutY: -5, scaleX: 0.01 },
                            airship: { stepYinX: -2, stepInY: -3, stepOutY: -3 },
                            flamer: { stepYinX: 2, stepInY: 4, stepOutY: 4, scaleY: 0.005 },
                            pillbox: { stepInY: 1, stepOutY: 1 },
                        },
                        2560: {
                            mortar: { stepYinX: -4.1, stepInY: -9, stepOutY: -7 },
                            flamer: { stepYinX: 3, stepOutY: 7, scaleY: 0.01, scaleX: 0.01 },
                            pillbox: { stepInY: -1, stepOutY: 0 },
                        },
                    },
                    X = {
                        DEFAULT_VALUES: { mortar: -4, airship: -2, flamer: 2, pillbox: -1 },
                        1920: { pillbox: 0 },
                        2560: { mortar: -10, flamer: 4, pillbox: -2 },
                    },
                    z = R.strings.fl_supply_objects.page,
                    V = R.strings.fl_supply_objects.page.object,
                    $ = R.images.frontline.gui.maps.icons.supplyObjects;
                var q = t(3215),
                    K = t(4598),
                    Z = t(9480);
                const J = (u) =>
                        null !== u && 'object' == typeof u
                            ? 'CoherentArrayProxy' === u.constructor.name
                                ? Z.UI(u, (u) => ('object' == typeof u ? J(u) : u))
                                : Array.isArray(u)
                                  ? u.map((u) => ('object' == typeof u ? J(u) : u))
                                  : Object.fromEntries(
                                        Object.entries(u).map(([u, e]) => [u, 'object' == typeof e ? J(e) : e]),
                                    )
                            : u,
                    Q = (u) => J(u);
                var uu = t(3946);
                const eu = (0, q.q)()(
                        ({ observableModel: u }) => {
                            const e = {
                                    root: u.object(),
                                    supplyObjects: u.array('supplyObjects'),
                                    supplyParams: u.array('supplyParams'),
                                },
                                t = (0, uu.Om)(() => Q(e.supplyObjects.get()), { equals: K.jv }),
                                r = (0, uu.Om)(() => Q(e.supplyParams.get()), { equals: K.jv });
                            return Object.assign({}, e, { computes: { getSupplyObjects: t, getSupplyParams: r } });
                        },
                        ({ externalModel: u }) => ({
                            onSupplySelected: u.createCallback((u) => ({ supplyId: u }), 'onSupplySelected'),
                            onClose: u.createCallbackNoArgs('onClose'),
                        }),
                    ),
                    tu = (eu[0], eu[1]);
                var ru = t(1856),
                    nu = t(7515);
                const au = [];
                function ou(u) {
                    const e = (0, a.useRef)(u);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            e.current = u;
                        }),
                        (0, a.useCallback)((...u) => (0, e.current)(...u), au)
                    );
                }
                function iu(u, e, t = []) {
                    const r = (0, a.useRef)(0),
                        n = (0, a.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, a.useEffect)(() => n, [n]);
                    const o = (null != t ? t : []).concat([e]);
                    return [
                        (0, a.useCallback)((t) => {
                            ((r.current = window.setInterval(() => u(t, !0), e)), u(t, !1));
                        }, o),
                        n,
                    ];
                }
                var su = t(7727);
                function lu(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                var cu = t(7030);
                let Eu;
                !(function (u) {
                    ((u[(u.Next = -1)] = 'Next'), (u[(u.Prev = 1)] = 'Prev'));
                })(Eu || (Eu = {}));
                const Au = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Fu = ({
                        getContainerSize: u,
                        getBounds: e,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const i = (u, t) => {
                            const r = e(u),
                                n = r[0],
                                a = r[1];
                            return (0, nu.u)(n, a, t);
                        };
                        return (s = {}) => {
                            const l = s.settings,
                                c = void 0 === l ? Au : l,
                                E = (0, a.useRef)(null),
                                A = (0, a.useRef)(null),
                                F = (() => {
                                    const u = (0, a.useMemo)(() => ({}), []),
                                        e = (e) => (u[e] || (u[e] = new Map()), u[e]),
                                        t = (u, t) => {
                                            e(u).set(t, t);
                                        },
                                        r = (u, t) => {
                                            e(u).delete(t);
                                        },
                                        n = (u, ...t) => {
                                            for (
                                                var r,
                                                    n = (function (u, e) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && u[Symbol.iterator]) ||
                                                            u['@@iterator'];
                                                        if (t) return (t = t.call(u)).next.bind(t);
                                                        if (
                                                            Array.isArray(u) ||
                                                            (t = (function (u, e) {
                                                                if (u) {
                                                                    if ('string' == typeof u) return lu(u, e);
                                                                    var t = Object.prototype.toString
                                                                        .call(u)
                                                                        .slice(8, -1);
                                                                    return (
                                                                        'Object' === t &&
                                                                            u.constructor &&
                                                                            (t = u.constructor.name),
                                                                        'Map' === t || 'Set' === t
                                                                            ? Array.from(u)
                                                                            : 'Arguments' === t ||
                                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                    t,
                                                                                )
                                                                              ? lu(u, e)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(u)) ||
                                                            (e && u && 'number' == typeof u.length)
                                                        ) {
                                                            t && (u = t);
                                                            var r = 0;
                                                            return function () {
                                                                return r >= u.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: u[r++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(e(u).values());
                                                !(r = n()).done;
                                            )
                                                (0, r.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: r, trigger: n }), []);
                                })(),
                                m = (function (u, e, t) {
                                    const r = (0, a.useMemo)(
                                        () =>
                                            (function (u, e, t, r) {
                                                let n,
                                                    a = !1,
                                                    o = 0;
                                                function i() {
                                                    n && clearTimeout(n);
                                                }
                                                function s(...s) {
                                                    const l = this,
                                                        c = Date.now() - o;
                                                    function E() {
                                                        ((o = Date.now()), t.apply(l, s));
                                                    }
                                                    a ||
                                                        (r && !n && E(),
                                                        i(),
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
                                                    (s.cancel = function () {
                                                        (i(), (a = !0));
                                                    }),
                                                    s
                                                );
                                            })(t, u),
                                        e,
                                    );
                                    return ((0, a.useEffect)(() => r.cancel, [r]), r);
                                })(
                                    () => {
                                        I.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                _ = (0, cu.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (u) => {
                                        const e = E.current;
                                        e && (t(e, u), F.trigger('change', u), o && m());
                                    },
                                    onRest: (u) => F.trigger('rest', u),
                                    onStart: (u) => F.trigger('start', u),
                                    onPause: (u) => F.trigger('pause', u),
                                })),
                                D = _[0],
                                d = _[1],
                                B = (0, a.useCallback)(
                                    (u, e, t) => {
                                        var r;
                                        const n = D.scrollPosition.get(),
                                            a = (null != (r = D.scrollPosition.goal) ? r : 0) - n;
                                        return i(u, e * t + a + n);
                                    },
                                    [D.scrollPosition],
                                ),
                                C = (0, a.useCallback)(
                                    (u, { immediate: e = !1, reset: t = !0 } = {}) => {
                                        const r = E.current;
                                        r &&
                                            d.start({
                                                scrollPosition: i(r, u),
                                                immediate: e,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(r, D.scrollPosition.get()) },
                                            });
                                    },
                                    [d, c.animationConfig, D.scrollPosition],
                                ),
                                p = (0, a.useCallback)(
                                    (u) => {
                                        const e = E.current,
                                            t = A.current;
                                        if (!e || !t) return;
                                        const r = ((u, e) => {
                                                switch (e.type) {
                                                    case 'proportional':
                                                        return n(u) / e.factor;
                                                    case 'fixed':
                                                        return e.value;
                                                }
                                            })(t, c.step),
                                            a = B(e, u, r);
                                        C(a);
                                    },
                                    [C, B, c.step],
                                ),
                                g = (0, a.useCallback)(
                                    (u) => {
                                        (0 !== u.deltaY && p(r(u)),
                                            E.current && F.trigger('mouseWheel', u, D.scrollPosition, e(E.current)));
                                    },
                                    [D.scrollPosition, p, F],
                                ),
                                h = ((u, e = []) => {
                                    const t = (0, a.useRef)(),
                                        r = (0, a.useCallback)((...e) => {
                                            (t.current && t.current(), (t.current = u(...e)));
                                        }, e);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        (0, ru.v)(() => {
                                            const u = E.current;
                                            u &&
                                                (C(i(u, D.scrollPosition.goal), { immediate: !0 }),
                                                F.trigger('resizeHandled'));
                                        }),
                                    [C, D.scrollPosition.goal],
                                ),
                                f = ou(() => {
                                    const u = E.current;
                                    if (!u) return;
                                    const e = i(u, D.scrollPosition.goal);
                                    (e !== D.scrollPosition.goal && C(e, { immediate: !0 }),
                                        F.trigger('recalculateContent'));
                                });
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', h),
                                    () => {
                                        window.removeEventListener('resize', h);
                                    }
                                ),
                                [h],
                            );
                            const v = (0, a.useCallback)((u) => F.trigger('isThumbDraggingChanged', u), [F]);
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (A.current ? n(A.current) : void 0),
                                    getContainerSize: () => (E.current ? u(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? e(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: g,
                                    applyScroll: C,
                                    applyStepTo: p,
                                    contentRef: E,
                                    wrapperRef: A,
                                    scrollPosition: d,
                                    animationScroll: D,
                                    recalculateContent: f,
                                    handleIsThumbDragging: v,
                                    events: { on: F.on, off: F.off },
                                }),
                                [D.scrollPosition, C, p, v, F.off, F.on, f, g, d, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    mu = Fu({
                        getBounds: (u) => {
                            var e, t;
                            return [
                                0,
                                u.offsetWidth -
                                    (null != (e = null == (t = u.parentElement) ? void 0 : t.offsetWidth) ? e : 0),
                            ];
                        },
                        getContainerSize: (u) => u.offsetWidth,
                        getWrapperSize: (u) => u.offsetWidth,
                        setScrollPosition: (u, e) => {
                            u.style.transform = `translateX(-${e.value.scrollPosition}px)`;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? Eu.Next : Eu.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    _u = 'HorizontalBar_base__nonActive_82',
                    Du = 'disable',
                    du = { pending: !1, offset: 0 },
                    Bu = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    Cu = () => {},
                    pu = (u, e) => Math.max(20, u.offsetWidth * e),
                    gu = (0, a.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = Bu, onDrag: r = Cu }) => {
                        const n = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            A = u.stepTimeout || 100,
                            F = (0, a.useState)(du),
                            m = F[0],
                            _ = F[1],
                            D = (0, a.useCallback)(
                                (u) => {
                                    (_(u),
                                        E.current &&
                                            r({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [r],
                            ),
                            d = () => {
                                const e = c.current,
                                    t = E.current,
                                    r = u.getWrapperSize(),
                                    n = u.getContainerSize();
                                if (!(r && e && t && n)) return;
                                const a = u.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / n),
                                    s = (0, nu.u)(0, 1, a / (n - r)),
                                    A = (e.offsetWidth - pu(e, o)) * s;
                                ((t.style.transform = `translateX(${0 | A}px)`),
                                    ((u) => {
                                        if (i.current && l.current && c.current && E.current) {
                                            if (0 === u)
                                                return (
                                                    i.current.classList.add(Du),
                                                    void l.current.classList.remove(Du)
                                                );
                                            if (
                                                ((e = c.current),
                                                (t = E.current),
                                                u - (e.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(Du),
                                                    void l.current.classList.add(Du)
                                                );
                                            var e, t;
                                            (i.current.classList.remove(Du), l.current.classList.remove(Du));
                                        }
                                    })(A));
                            },
                            B = ou(() => {
                                ((() => {
                                    const e = E.current,
                                        t = c.current,
                                        r = u.getWrapperSize(),
                                        a = u.getContainerSize();
                                    if (!(a && e && r && t)) return;
                                    const o = Math.min(1, r / a);
                                    ((e.style.width = `${pu(t, o)}px`),
                                        (e.style.display = 'flex'),
                                        n.current &&
                                            (1 === o ? n.current.classList.add(_u) : n.current.classList.remove(_u)));
                                })(),
                                    d());
                            });
                        ((0, a.useEffect)(() => (0, ru.v)(B)),
                            (0, a.useEffect)(
                                () =>
                                    (0, ru.v)(() => {
                                        const e = () => {
                                            d();
                                        };
                                        let t = Cu;
                                        const r = () => {
                                            (t(), (t = (0, ru.v)(B)));
                                        };
                                        return (
                                            u.events.on('recalculateContent', B),
                                            u.events.on('rest', e),
                                            u.events.on('change', e),
                                            u.events.on('resizeHandled', r),
                                            () => {
                                                (t(),
                                                    u.events.off('recalculateContent', B),
                                                    u.events.off('rest', e),
                                                    u.events.off('change', e),
                                                    u.events.off('resizeHandled', r));
                                            }
                                        );
                                    }),
                                [u],
                            ),
                            (0, a.useEffect)(() => {
                                if (!m.pending) return;
                                const e = (e) => {
                                        var t;
                                        const n = u.contentRef.current;
                                        if (!n) return;
                                        const a = c.current,
                                            o = E.current;
                                        if (!n || !a || !o) return;
                                        const i = e.screenX - m.offset - a.getBoundingClientRect().x,
                                            s = (i / a.offsetWidth) * (null != (t = u.getContainerSize()) ? t : 0);
                                        (u.scrollPosition.start({
                                            scrollPosition: u.clampPosition(n, s),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: u.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: o, thumbOffset: i, contentOffset: s }));
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', e), D(du));
                                    };
                                return (
                                    window.addEventListener('mousemove', e),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', e),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [u, m.offset, m.pending, r, D]));
                        const C = iu((e) => u.applyStepTo(e), A, [u]),
                            p = C[0],
                            g = C[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', g, !0),
                                () => document.removeEventListener('mouseup', g, !0)
                            ),
                            [g],
                        );
                        const h = (u) => {
                            u.target.classList.contains(Du) || (0, su.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: s()('HorizontalBar_base_49', e.base), ref: n, onWheel: u.handleMouseWheel },
                            o().createElement('div', {
                                className: s()('HorizontalBar_leftButton_5f', e.leftButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(Du) ||
                                        0 !== u.button ||
                                        ((0, su.G)('play'), p(Eu.Next));
                                },
                                onMouseUp: g,
                                ref: i,
                                onMouseEnter: h,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: s()('HorizontalBar_track_0d', e.track),
                                    onMouseDown: (e) => {
                                        const r = E.current;
                                        r &&
                                            0 === e.button &&
                                            ((0, su.G)('play'),
                                            e.target === r
                                                ? D({ pending: !0, offset: e.screenX - r.getBoundingClientRect().x })
                                                : ((e) => {
                                                      const r = E.current,
                                                          n = u.contentRef.current;
                                                      if (!r || !n) return;
                                                      const a = t(u);
                                                      u.applyScroll(u.animationScroll.scrollPosition.get() + a * e);
                                                  })(e.screenX > r.getBoundingClientRect().x ? Eu.Prev : Eu.Next));
                                    },
                                    ref: c,
                                    onMouseEnter: h,
                                },
                                o().createElement('div', { ref: E, className: s()('HorizontalBar_thumb_fd', e.thumb) }),
                                o().createElement('div', { className: s()('HorizontalBar_rail_32', e.rail) }),
                            ),
                            o().createElement('div', {
                                className: s()('HorizontalBar_rightButton_03', e.rightButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(Du) ||
                                        0 !== u.button ||
                                        ((0, su.G)('play'), p(Eu.Prev));
                                },
                                onMouseUp: g,
                                ref: l,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    hu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    fu = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: i,
                        scrollClassName: l,
                        getStepByRailClick: c,
                        onDrag: E,
                    }) => {
                        const A = (0, a.useMemo)(() => {
                                const u = r || {};
                                return Object.assign({}, u, { base: s()(hu.base, u.base) });
                            }, [r]),
                            F = (0, a.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return o().createElement(
                            'div',
                            { className: s()(hu.defaultScroll, t), onWheel: e.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: s()(hu.defaultScrollArea, n) },
                                o().createElement(vu, { className: l, api: F, classNames: i }, u),
                            ),
                            o().createElement(gu, { getStepByRailClick: c, api: e, onDrag: E, classNames: A }),
                        );
                    },
                    vu = ({ api: u, className: e, classNames: t, children: r, style: n }) => (
                        (0, a.useEffect)(() => (0, ru.v)(u.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: s()(hu.base, e), style: n },
                            o().createElement(
                                'div',
                                {
                                    className: s()(hu.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: u.handleMouseWheel,
                                    ref: u.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: s()(hu.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                ((vu.Bar = gu),
                    (vu.Default = fu),
                    (vu.SeniorityAwards = ({ api: u, className: e, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => (0, ru.v)(u.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: s()(hu.base, e) },
                            o().createElement(
                                'div',
                                { className: s()(hu.wrapper, null == t ? void 0 : t.wrapper), ref: u.wrapperRef },
                                o().createElement(
                                    'div',
                                    { className: s()(hu.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                    r,
                                ),
                            ),
                        )
                    )));
                const bu = Fu({
                        getBounds: (u) => [0, u.scrollHeight - u.offsetHeight],
                        getContainerSize: (u) => u.scrollHeight,
                        getWrapperSize: (u) => u.offsetHeight,
                        setScrollPosition: (u, e) => {
                            u.scrollTop = e.value.scrollPosition;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? Eu.Next : Eu.Prev),
                    }),
                    wu = 'VerticalBar_base__nonActive_42',
                    xu = 'disable',
                    Su = () => {},
                    Mu = { pending: !1, offset: 0 },
                    Lu = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    yu = (u, e) => {
                        u.contentRef.current && e(u.contentRef.current);
                    },
                    Tu = (u, e) => Math.max(20, u.offsetHeight * e),
                    Ou = (0, a.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = Lu, onDrag: r = Su }) => {
                        const n = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            A = u.stepTimeout || 100,
                            F = (0, a.useState)(Mu),
                            m = F[0],
                            _ = F[1],
                            D = (0, a.useCallback)(
                                (u) => {
                                    (_(u),
                                        E.current &&
                                            r({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [r],
                            ),
                            d = ou(() => {
                                const e = E.current,
                                    t = c.current,
                                    r = u.getWrapperSize(),
                                    a = u.getContainerSize();
                                if (!(r && a && e && t)) return;
                                const o = Math.min(1, r / a);
                                return (
                                    (e.style.height = `${Tu(t, o)}px`),
                                    e.classList.add('VerticalBar_thumb_32'),
                                    n.current &&
                                        (1 === o ? n.current.classList.add(wu) : n.current.classList.remove(wu)),
                                    o
                                );
                            }),
                            B = ou(() => {
                                const e = c.current,
                                    t = E.current,
                                    r = u.getWrapperSize(),
                                    n = u.getContainerSize();
                                if (!(r && e && t && n)) return;
                                const a = u.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / n),
                                    s = (0, nu.u)(0, 1, a / (n - r)),
                                    A = (e.offsetHeight - Tu(e, o)) * s;
                                ((t.style.transform = `translateY(${0 | A}px)`),
                                    ((u) => {
                                        if (i.current && l.current && c.current && E.current) {
                                            if (0 === u)
                                                return (
                                                    i.current.classList.add(xu),
                                                    void l.current.classList.remove(xu)
                                                );
                                            if (
                                                ((e = c.current),
                                                (t = E.current),
                                                u - (e.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(xu),
                                                    void l.current.classList.add(xu)
                                                );
                                            var e, t;
                                            (i.current.classList.remove(xu), l.current.classList.remove(xu));
                                        }
                                    })(A));
                            }),
                            C = ou(() => {
                                yu(u, () => {
                                    (d(), B());
                                });
                            });
                        ((0, a.useEffect)(() => (0, ru.v)(C)),
                            (0, a.useEffect)(() => {
                                const e = () => {
                                    yu(u, () => {
                                        B();
                                    });
                                };
                                let t = Su;
                                const r = () => {
                                    (t(), (t = (0, ru.v)(C)));
                                };
                                return (
                                    u.events.on('recalculateContent', C),
                                    u.events.on('rest', e),
                                    u.events.on('change', e),
                                    u.events.on('resizeHandled', r),
                                    () => {
                                        (t(),
                                            u.events.off('recalculateContent', C),
                                            u.events.off('rest', e),
                                            u.events.off('change', e),
                                            u.events.off('resizeHandled', r));
                                    }
                                );
                            }, [u]),
                            (0, a.useEffect)(() => {
                                if (!m.pending) return;
                                const e = (e) => {
                                        yu(u, (t) => {
                                            const n = c.current,
                                                a = E.current,
                                                o = u.getContainerSize();
                                            if (!n || !a || !o) return;
                                            const i = e.screenY - m.offset - n.getBoundingClientRect().y,
                                                s = (i / n.offsetHeight) * o;
                                            (u.scrollPosition.start({
                                                scrollPosition: u.clampPosition(t, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: s }));
                                        });
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', e),
                                            u.handleIsThumbDragging(!1),
                                            D(Mu));
                                    };
                                return (
                                    window.addEventListener('mousemove', e),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', e),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [u, m.offset, m.pending, r, D]));
                        const p = iu((e) => u.applyStepTo(e), A, [u]),
                            g = p[0],
                            h = p[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const f = (u) => {
                            u.target.classList.contains(xu) || (0, su.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: s()('VerticalBar_base_f3', e.base), ref: n, onWheel: u.handleMouseWheel },
                            o().createElement('div', {
                                className: s()('VerticalBar_topButton_d7', e.topButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(xu) ||
                                        0 !== u.button ||
                                        ((0, su.G)('play'), g(Eu.Next));
                                },
                                ref: i,
                                onMouseEnter: f,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: s()('VerticalBar_track_df', e.track),
                                    onMouseDown: (e) => {
                                        const r = E.current;
                                        var n;
                                        r &&
                                            0 === e.button &&
                                            ((0, su.G)('play'),
                                            e.target === r
                                                ? (u.handleIsThumbDragging(!0),
                                                  D({ pending: !0, offset: e.screenY - r.getBoundingClientRect().y }))
                                                : ((n = e.screenY > r.getBoundingClientRect().y ? Eu.Prev : Eu.Next),
                                                  E.current &&
                                                      yu(u, (e) => {
                                                          if (!e) return;
                                                          const r = t(u),
                                                              a = u.clampPosition(e, e.scrollTop + r * n);
                                                          u.applyScroll(a);
                                                      })));
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                o().createElement('div', { ref: E, className: e.thumb }),
                                o().createElement('div', { className: s()('VerticalBar_rail_43', e.rail) }),
                            ),
                            o().createElement('div', {
                                className: s()('VerticalBar_bottomButton_06', e.bottomButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(xu) ||
                                        0 !== u.button ||
                                        ((0, su.G)('play'), g(Eu.Prev));
                                },
                                onMouseUp: h,
                                ref: l,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    ku = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Ru = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: i,
                        scrollClassNames: l,
                        getStepByRailClick: c,
                        onDrag: E,
                    }) => {
                        const A = (0, a.useMemo)(() => {
                                const u = r || {};
                                return Object.assign({}, u, { base: s()(ku.base, u.base) });
                            }, [r]),
                            F = (0, a.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return o().createElement(
                            'div',
                            { className: s()(ku.defaultScroll, t), onWheel: e.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: s()(ku.area, n) },
                                o().createElement(Nu, { className: i, classNames: l, api: F }, u),
                            ),
                            o().createElement(Ou, { getStepByRailClick: c, api: e, onDrag: E, classNames: A }),
                        );
                    },
                    Nu = ({ className: u, classNames: e, children: t, api: r }) => (
                        (0, a.useEffect)(() => (0, ru.v)(r.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: s()(ku.base, u), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: s()(ku.content, null == e ? void 0 : e.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                Nu.Default = Ru;
                const Pu = { Vertical: n, Horizontal: r };
                var Hu = t(2056),
                    Iu = t(122);
                const Wu = { type: 'idle' };
                const ju = {
                        base: 'DescriptionBlock_base_20',
                        scrollContent: 'DescriptionBlock_scrollContent_28',
                        container: 'DescriptionBlock_container_71',
                        closeButton: 'DescriptionBlock_closeButton_f9',
                        typeIcon: 'DescriptionBlock_typeIcon_84',
                        bottomShadow: 'DescriptionBlock_bottomShadow_3d',
                        bottomShadow__visible: 'DescriptionBlock_bottomShadow__visible_a3',
                        bottomShadow__firstRender: 'DescriptionBlock_bottomShadow__firstRender_fb',
                        title: 'DescriptionBlock_title_44',
                        subTitle: 'DescriptionBlock_subTitle_ed',
                        image: 'DescriptionBlock_image_5d',
                        base__airship: 'DescriptionBlock_base__airship_35',
                        questsInfo: 'DescriptionBlock_questsInfo_98',
                        infoText: 'DescriptionBlock_infoText_ff',
                        infoIcon: 'DescriptionBlock_infoIcon_dc',
                        separator: 'DescriptionBlock_separator_3b',
                        separator__withTopMargin: 'DescriptionBlock_separator__withTopMargin_67',
                        separator__withBigMargin: 'DescriptionBlock_separator__withBigMargin_01',
                        descriptionText: 'DescriptionBlock_descriptionText_d3',
                        paramsBlock: 'DescriptionBlock_paramsBlock_7f',
                        paramsTitle: 'DescriptionBlock_paramsTitle_f8',
                        damageBlock: 'DescriptionBlock_damageBlock_22',
                        damageBlockIcon: 'DescriptionBlock_damageBlockIcon_74',
                        damageBlockText: 'DescriptionBlock_damageBlockText_73',
                        damageBlockText__param: 'DescriptionBlock_damageBlockText__param_c9',
                        damageBlockText__light: 'DescriptionBlock_damageBlockText__light_40',
                    },
                    Gu = R.strings.menu.tank_params,
                    Uu = (0, a.memo)(({ item: u }) => {
                        const e = $.paramsIcon.$dyn(u.name) || R.images.gui.maps.icons.vehParams.big.$dyn(u.name),
                            t = V.vehParams.text.$dyn(u.name) || Gu.$dyn(u.name);
                        return o().createElement(
                            Hu.u,
                            {
                                contentId: R.views.lobby.crew.tooltips.VehicleParamsTooltipView('resId'),
                                args: { paramName: u.name },
                            },
                            o().createElement(
                                'div',
                                { className: 'ParamItem_base_cd' },
                                o().createElement(P, { className: 'ParamItem_paramValue_1c', text: u.value }),
                                o().createElement('div', {
                                    className: 'ParamItem_paramIcon_f5',
                                    style: { backgroundImage: `url(${e})` },
                                }),
                                o().createElement(P, { className: 'ParamItem_paramName_05', text: t }),
                            ),
                        );
                    }),
                    Yu = R.strings.fl_supply_objects.page.object.damageZones,
                    Xu = (0, j.Pi)(({ selectedObj: u, clearSelectedObj: e }) => {
                        const t = tu().model,
                            r = (0, a.useState)(!0),
                            n = r[0],
                            i = r[1],
                            l = (0, a.useState)(!0),
                            c = l[0],
                            E = l[1],
                            A = (0, a.useState)(u),
                            F = A[0],
                            m = A[1],
                            _ = (0, a.useRef)(null),
                            D = t.computes.getSupplyParams(),
                            d = $.objects.$dyn(F),
                            B = Pu.Vertical.useVerticalScrollApi(),
                            C = (function () {
                                const u = (0, a.useRef)(!0);
                                var e;
                                return (
                                    (e = () => {
                                        u.current = !1;
                                    }),
                                    (0, a.useEffect)(e, []),
                                    u.current
                                );
                            })();
                        (!(function (u, e) {
                            const t = u.contentRef,
                                r = u.wrapperRef,
                                n = u.scrollPosition,
                                o = u.clampPosition,
                                i = u.animationScroll,
                                s = u.events,
                                l = (0, a.useState)(Wu),
                                c = l[0],
                                E = l[1];
                            ((0, a.useEffect)(() => {
                                const u = t.current;
                                u && (u.style.cursor = 'dragging' === c.type ? 'grabbing' : 'grab');
                            }, [t, c.type]),
                                (0, a.useEffect)(() => {
                                    if ('dragging' !== c.type) return;
                                    const u = (u) => {
                                            const a = t.current,
                                                s = r.current;
                                            if (!a || !s) return;
                                            const l = c.positionFrom - u.screenY,
                                                E = c.previousScrollPosition + l;
                                            n.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: o(a, E),
                                                        from: { scrollPosition: i.scrollPosition.get() },
                                                    },
                                                    e,
                                                ),
                                            );
                                        },
                                        a = () => {
                                            (window.removeEventListener('mousemove', u), E({ type: 'scrollingToEnd' }));
                                        };
                                    return (
                                        window.addEventListener('mousemove', u),
                                        window.addEventListener('mouseup', a),
                                        () => {
                                            (window.removeEventListener('mousemove', u),
                                                window.removeEventListener('mouseup', a));
                                        }
                                    );
                                }, [i.scrollPosition, o, t, c, n, r, e]),
                                (0, a.useEffect)(() => {
                                    if ('scrollingToEnd' !== c.type) return;
                                    const u = () => {
                                        E(Wu);
                                    };
                                    return (i.scrollPosition.idle && u(), s.on('rest', u), () => s.off('rest', u));
                                }, [i.scrollPosition, c.type, s]),
                                (0, a.useEffect)(() => {
                                    const u = t.current;
                                    if (!u) return;
                                    const e = (u) => {
                                        (u.stopPropagation(),
                                            0 === u.button &&
                                                E({
                                                    type: 'dragging',
                                                    positionFrom: u.screenY,
                                                    previousScrollPosition: i.scrollPosition.get(),
                                                }));
                                    };
                                    return (
                                        u.addEventListener('mousedown', e),
                                        () => u.removeEventListener('mousedown', e)
                                    );
                                }, [i.scrollPosition, t]));
                        })(B),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                        const u = B.getBounds()[1];
                                        i(Math.abs(u - B.animationScroll.scrollPosition.goal) > 0.1);
                                    },
                                    e = () => {
                                        const u = B.getContainerSize,
                                            e = (0, B.getWrapperSize)(),
                                            t = u();
                                        E(!(!e || !t) && t > e);
                                    };
                                return (
                                    B.events.on('resizeHandled', e),
                                    B.events.on('change', u),
                                    B.events.on('recalculateContent', u),
                                    () => {
                                        (B.events.off('resizeHandled', e),
                                            B.events.off('change', u),
                                            B.events.off('recalculateContent', u));
                                    }
                                );
                            }, [B]));
                        const p = t.root.get(),
                            g = p.supplyTeam,
                            h = p.supplyHullDamageFactor,
                            f = p.supplyTurretDamageFactor,
                            v = $.$dyn(1 === g ? 'attack_icon' : 'protection_icon'),
                            b = 1 !== h || 1 !== f;
                        return (
                            (0, a.useEffect)(() => {
                                if (u === W.None) return (0, Iu.F)(() => m(u), 2e3);
                                m(u);
                            }, [u]),
                            o().createElement(
                                'div',
                                {
                                    className: s()(ju.base, 'airship' === F && ju.base__airship),
                                    onClick: (u) => {
                                        u.stopPropagation();
                                    },
                                },
                                o().createElement('div', {
                                    className: ju.typeIcon,
                                    style: { backgroundImage: `url(${v})` },
                                }),
                                o().createElement(
                                    Pu.Vertical.Area,
                                    { api: B, classNames: { content: c ? '' : ju.scrollContent } },
                                    o().createElement(
                                        'div',
                                        { className: ju.container, ref: _ },
                                        o().createElement(
                                            'div',
                                            { className: ju.closeButton },
                                            o().createElement(H.A, {
                                                caption: '',
                                                type: 'close',
                                                side: 'right',
                                                onClick: e,
                                            }),
                                        ),
                                        o().createElement(P, { className: ju.title, text: V.title.$dyn(F) }),
                                        o().createElement(P, {
                                            className: ju.subTitle,
                                            text: V.description.subtitle.$dyn(F),
                                        }),
                                        o().createElement('div', {
                                            className: ju.image,
                                            style: { backgroundImage: `url(${d})` },
                                        }),
                                        o().createElement(
                                            Hu.u,
                                            {
                                                contentId:
                                                    R.views.frontline.lobby.tooltips.UnlockConditionsTooltip('resId'),
                                                args: { supplyObject: F },
                                            },
                                            o().createElement(
                                                'div',
                                                { className: ju.questsInfo },
                                                o().createElement(P, { className: ju.infoText, text: V.infoText() }),
                                                o().createElement('div', { className: ju.infoIcon }),
                                            ),
                                        ),
                                        o().createElement('div', { className: ju.separator }),
                                        o().createElement(P, {
                                            className: ju.descriptionText,
                                            text: V.description.$dyn(F),
                                        }),
                                        o().createElement('div', {
                                            className: s()(ju.separator, ju.separator__withBigMargin),
                                        }),
                                        o().createElement(
                                            'div',
                                            { className: ju.paramsBlock },
                                            o().createElement(P, { className: ju.paramsTitle, text: V.paramsTitle() }),
                                            o().createElement(
                                                'div',
                                                { className: ju.tthContent },
                                                D.map((u) =>
                                                    o().createElement(Uu, { key: `vehParam_${u.name}`, item: u }),
                                                ),
                                            ),
                                        ),
                                        b &&
                                            o().createElement(
                                                o().Fragment,
                                                null,
                                                o().createElement('div', {
                                                    className: s()(ju.separator, ju.separator__withTopMargin),
                                                }),
                                                o().createElement(
                                                    'div',
                                                    { className: ju.damageBlock },
                                                    o().createElement('div', { className: ju.damageBlockIcon }),
                                                    o().createElement(
                                                        'div',
                                                        null,
                                                        o().createElement(P, {
                                                            className: s()(ju.damageBlockText, ju.damageBlockText__big),
                                                            text: Yu.title(),
                                                        }),
                                                        o().createElement(P, {
                                                            className: s()(
                                                                ju.damageBlockText,
                                                                ju.damageBlockText__param,
                                                            ),
                                                            text: Yu.hullText(),
                                                            format: {
                                                                binding: {
                                                                    value: o().createElement(P, {
                                                                        className: ju.damageBlockText__light,
                                                                        text: Yu.percents(),
                                                                        format: {
                                                                            binding: {
                                                                                number: String(Math.round(100 * h)),
                                                                            },
                                                                        },
                                                                    }),
                                                                },
                                                            },
                                                        }),
                                                        o().createElement(P, {
                                                            className: s()(
                                                                ju.damageBlockText,
                                                                ju.damageBlockText__param,
                                                            ),
                                                            text: Yu.turretText(),
                                                            format: {
                                                                binding: {
                                                                    value: o().createElement(P, {
                                                                        className: ju.damageBlockText__light,
                                                                        text: Yu.percents(),
                                                                        format: {
                                                                            binding: {
                                                                                number: String(Math.round(100 * f)),
                                                                            },
                                                                        },
                                                                    }),
                                                                },
                                                            },
                                                        }),
                                                    ),
                                                ),
                                            ),
                                    ),
                                ),
                                o().createElement('div', {
                                    className: s()(
                                        ju.bottomShadow,
                                        n && ju.bottomShadow__visible,
                                        C && ju.bottomShadow__firstRender,
                                    ),
                                }),
                            )
                        );
                    }),
                    zu = {
                        base: 'ObjectBlock_base_1d',
                        base__scaled: 'ObjectBlock_base__scaled_c8',
                        base__big: 'ObjectBlock_base__big_de',
                        objectImage: 'ObjectBlock_objectImage_4b',
                        mainImage: 'ObjectBlock_mainImage_97',
                        select: 'ObjectBlock_select_a0',
                        hover: 'ObjectBlock_hover_47',
                        description: 'ObjectBlock_description_35',
                        shadow: 'ObjectBlock_shadow_4c',
                        descriptionContent: 'ObjectBlock_descriptionContent_48',
                        descriptionIcon: 'ObjectBlock_descriptionIcon_42',
                        base__selected: 'ObjectBlock_base__selected_90',
                        descriptionTitle: 'ObjectBlock_descriptionTitle_86',
                        descriptionText: 'ObjectBlock_descriptionText_61',
                        lightningBlockWrapper: 'ObjectBlock_lightningBlockWrapper_f1',
                        lightningBlock: 'ObjectBlock_lightningBlock_9a',
                        pulsation: 'ObjectBlock_pulsation_5f',
                    },
                    Vu = (0, a.memo)(({ objectName: u, isBigBlock: e, isSelected: t, isHintShow: r, x: n, y: i }) => {
                        const l = $.objects,
                            c = $.icons.$dyn(u),
                            A = $.icons.$dyn(`${u}_select`),
                            F = (0, E.GS)().mediaSize,
                            m = (() => {
                                const u = (0, a.useState)(I.O.view.getScale()),
                                    e = u[0],
                                    t = u[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        const u = () => {
                                            t(I.O.view.getScale());
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
                            })(),
                            _ = ((u, e) => {
                                const t = Y.DEFAULT_VALUES[e],
                                    r = (Y[u] && Y[u][e]) || {};
                                return Object.assign({}, t, r);
                            })(F, u),
                            D = ((u, e) => {
                                const t = X.DEFAULT_VALUES[e];
                                return (X[u] && X[u][e]) || t;
                            })(F, u),
                            d = n * _.stepX,
                            B = i * _.stepOutY - n * _.stepYinX,
                            C = i * _.stepInY - n * _.stepYinX,
                            p = i * _.scaleY,
                            g = 1 + p,
                            h = 1 - p,
                            f = s()(
                                zu.base,
                                e && zu.base__big,
                                t && zu.base__selected,
                                2 === m && zu.base__scaled,
                                zu[`base__${u}`],
                            );
                        return o().createElement(
                            'div',
                            {
                                className: f,
                                onMouseEnter: () => {
                                    t || (0, su.G)('bp_highlight');
                                },
                                onClick: () => {
                                    (0, su.G)('play');
                                },
                            },
                            o().createElement(
                                'div',
                                {
                                    className: zu.objectImage,
                                    style: {
                                        transform: `translate(${d}rem, ${i > 0 ? B : C}rem) scaleY(${i > 0 ? g : h})`,
                                    },
                                },
                                o().createElement('div', {
                                    className: zu.mainImage,
                                    style: { backgroundImage: `url(${l.$dyn(u)})` },
                                }),
                                t
                                    ? o().createElement('div', {
                                          className: zu.select,
                                          style: { backgroundImage: `url(${l.select.$dyn(u)})` },
                                      })
                                    : o().createElement('div', {
                                          className: zu.hover,
                                          style: { backgroundImage: `url(${l.hover.$dyn(u)})` },
                                      }),
                            ),
                            o().createElement(
                                'div',
                                {
                                    className: zu.description,
                                    style: { transform: `translate(${2 * -n}rem, ${i * D}rem)` },
                                },
                                o().createElement('div', { className: zu.shadow }),
                                o().createElement('div', {
                                    className: zu.descriptionIcon,
                                    style: { backgroundImage: `url(${t ? A : c})` },
                                }),
                                o().createElement(P, { text: V.title.$dyn(u), className: zu.descriptionTitle }),
                                o().createElement(P, { text: V.subtitle.$dyn(u), className: zu.descriptionText }),
                                !r &&
                                    o().createElement(
                                        'div',
                                        { className: zu.lightningBlockWrapper },
                                        o().createElement('div', { className: zu.lightningBlock }),
                                    ),
                            ),
                        );
                    }),
                    $u = {
                        base: 'App_base_a6',
                        content: 'App_content_76',
                        base__customSmall: 'App_base__customSmall_fb',
                        base__customLarge: 'App_base__customLarge_7b',
                        base__scaled: 'App_base__scaled_66',
                        vignette: 'App_vignette_b1',
                        closeButton: 'App_closeButton_50',
                        title: 'App_title_8c',
                        parallaxWrapper: 'App_parallaxWrapper_69',
                        bg: 'App_bg_cd',
                        object: 'App_object_24',
                        object__attack1: 'App_object__attack1_de',
                        object__attack2: 'App_object__attack2_55',
                        object__def1: 'App_object__def1_61',
                        object__def2: 'App_object__def2_a1',
                        object__scaled: 'App_object__scaled_17',
                        object__custom: 'App_object__custom_bd',
                        infoBlock: 'App_infoBlock_c5',
                        infoContent: 'App_infoContent_b1',
                        infoSeparator: 'App_infoSeparator_33',
                        infoSeparator__top: 'App_infoSeparator__top_e9',
                        infoSeparator__bottom: 'App_infoSeparator__bottom_70',
                        infoBlockText: 'App_infoBlockText_d4',
                        descriptionBlock: 'App_descriptionBlock_ad',
                        descriptionBlock__visible: 'App_descriptionBlock__visible_02',
                    };
                ((0, j.Pi)(() => {
                    const u = tu(),
                        e = u.model,
                        t = u.controls,
                        r = e.computes.getSupplyObjects(),
                        n = (0, a.useRef)(null),
                        i = (0, a.useState)({ x: 0, y: 0 }),
                        l = i[0],
                        c = i[1],
                        A = (0, a.useState)(W.None),
                        F = A[0],
                        m = A[1],
                        _ = (0, a.useState)(!1),
                        D = _[0],
                        d = _[1],
                        B = (() => {
                            const u = (0, E.GS)(),
                                e = u.remScreenWidth,
                                t = u.remScreenHeight;
                            return {
                                isCustomSmall: e > G.W_1024 && e <= G.W_1280,
                                isCustomLarge: e > G.W_2000 && e <= G.W_2560 && t > U.H_1200,
                            };
                        })(),
                        C = B.isCustomLarge,
                        p = B.isCustomSmall,
                        g = I.O.view.getScale(),
                        h = 1.5 === g,
                        f = 2 === g,
                        v = -1 !== r.findIndex((u) => !u.isHintShow);
                    ((0, a.useEffect)(() => {
                        t.onSupplySelected(F);
                    }, [t, F, r]),
                        (0, a.useEffect)(() => {
                            const u = n.current;
                            if (!u) return;
                            const e = (u) => {
                                ((u) => {
                                    if (!n.current) return;
                                    const e = n.current.getBoundingClientRect(),
                                        t = e.left,
                                        r = e.top,
                                        a = e.width,
                                        o = e.height,
                                        i = 2 * ((u.clientX - t) / a - 0.5),
                                        s = 2 * ((u.clientY - r) / o - 0.5);
                                    c({ x: i, y: s });
                                })(u);
                            };
                            return (
                                u.addEventListener('mousemove', e),
                                () => {
                                    u.removeEventListener('mousemove', e);
                                }
                            );
                        }, []));
                    const b = () => {
                            (m(W.None), d(!1));
                        },
                        w = s()($u.base, f && $u.base__scaled, p && $u.base__customSmall, C && $u.base__customLarge),
                        x = -5 * l.x,
                        S = 1 + -0.02 * l.y,
                        M = 1 - 0.02 * l.y,
                        L = 1 + 0.01 * l.x;
                    return o().createElement(
                        'div',
                        { className: w, onClick: b },
                        o().createElement(
                            'div',
                            { className: $u.content },
                            o().createElement(
                                'div',
                                { ref: n, className: $u.parallaxWrapper },
                                o().createElement('div', {
                                    className: $u.bg,
                                    style: {
                                        transform: `translate(-50%, -50%) translateX(${x}rem) scaleY(${l.y > 0 ? S : M}) scaleY(${L})`,
                                    },
                                }),
                                r.map((u) =>
                                    o().createElement(
                                        'div',
                                        {
                                            key: `supObj_${u.object}`,
                                            className: s()(
                                                $u.object,
                                                $u[`object__${u.point}`],
                                                f && $u.object__scaled,
                                                h && $u.object__custom,
                                            ),
                                            onClick: (e) => {
                                                return ((t = e), (r = u.object), t.stopPropagation(), d(!0), void m(r));
                                                var t, r;
                                            },
                                        },
                                        o().createElement(Vu, {
                                            isSelected: F === u.object,
                                            objectName: u.object,
                                            isBigBlock: u.object === W.Airship,
                                            isHintShow: u.isHintShow,
                                            x: l.x,
                                            y: l.y,
                                        }),
                                    ),
                                ),
                            ),
                            o().createElement('div', { className: $u.vignette }),
                        ),
                        o().createElement(P, { className: $u.title, text: z.title() }),
                        v &&
                            o().createElement(
                                'div',
                                { className: $u.infoBlock },
                                o().createElement(
                                    'div',
                                    { className: $u.infoContent },
                                    o().createElement('div', {
                                        className: s()($u.infoSeparator, $u.infoSeparator__top),
                                    }),
                                    o().createElement(P, { className: $u.infoBlockText, text: z.footer() }),
                                    o().createElement('div', {
                                        className: s()($u.infoSeparator, $u.infoSeparator__bottom),
                                    }),
                                ),
                            ),
                        o().createElement(
                            'div',
                            { className: $u.closeButton },
                            o().createElement(H.A, {
                                caption: R.strings.fl_common.button.close(),
                                type: 'close',
                                side: 'right',
                                onClick: t.onClose,
                            }),
                        ),
                        o().createElement(
                            'div',
                            { className: s()($u.descriptionBlock, D && $u.descriptionBlock__visible) },
                            o().createElement(Xu, { clearSelectedObj: b, selectedObj: F }),
                        ),
                    );
                }),
                    R.views.frontline.lobby.SupplyObjectsView('resId'));
            },
            5287: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                const r = { base: 'FormatText_base_d0' };
            },
            7476: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                const r = {
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
                };
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
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, r] = deferred[s], a = !0, o = 0; o < e.length; o++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[o]))
                            ? e.splice(o--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(s--, 1);
                        var i = t();
                        void 0 !== i && (u = i);
                    }
                }
                return u;
            }
            r = r || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > r; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, r];
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
        (__webpack_require__.j = 805),
        (() => {
            var u = { 805: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        n,
                        [a, o, i] = t,
                        s = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (e && e(t); s < a.length; s++)
                        ((n = a[s]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(3428));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
