(() => {
    var __webpack_modules__ = {
            3457: (e, t, u) => {
                'use strict';
                u.d(t, { L$: () => l.L, qE: () => l.q, u5: () => c });
                var n = u(6483),
                    a = u.n(n),
                    i = u(7727),
                    s = u(7363),
                    r = u.n(s),
                    o = u(6880),
                    l = u(2106);
                const c = ({
                    children: e,
                    size: t,
                    disabled: u,
                    mixClass: n,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: d,
                    onMouseUp: m,
                    onMouseLeave: E,
                    onClick: b,
                    isFocused: g = !1,
                    type: p = l.L.primary,
                    soundHover: A = 'highlight',
                    soundClick: h = 'play',
                }) => {
                    const F = (0, s.useRef)(null),
                        f = (0, s.useState)(g),
                        D = f[0],
                        v = f[1],
                        C = (0, s.useState)(!1),
                        S = C[0],
                        B = C[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                D && null !== F.current && !F.current.contains(e.target) && v(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [D]),
                        (0, s.useEffect)(() => {
                            v(g);
                        }, [g]),
                        r().createElement(
                            'div',
                            {
                                ref: F,
                                className: a()(
                                    o.Z.base,
                                    o.Z[`base__${p}`],
                                    u && o.Z.base__disabled,
                                    t && o.Z[`base__${t}`],
                                    D && o.Z.base__focus,
                                    S && o.Z.base__highlightActive,
                                    n,
                                ),
                                onMouseEnter: function (e) {
                                    u || (null !== A && (0, i.G)(A), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    _ && _(e);
                                },
                                onMouseUp: function (e) {
                                    u || (m && m(e), B(!1));
                                },
                                onMouseDown: function (e) {
                                    u ||
                                        (null !== h && (0, i.G)(h),
                                        d && d(e),
                                        g && (u || (F.current && (F.current.focus(), v(!0)))),
                                        B(!0));
                                },
                                onMouseLeave: function (e) {
                                    u || (E && E(e), B(!1));
                                },
                                onClick: function (e) {
                                    u || (b && b(e));
                                },
                            },
                            p !== l.L.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: o.Z.back }),
                                    r().createElement('span', { className: o.Z.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: a()(o.Z.state, o.Z.state__default) },
                                r().createElement('span', { className: o.Z.stateDisabled }),
                                r().createElement('span', { className: o.Z.stateHighlightHover }),
                                r().createElement('span', { className: o.Z.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: o.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
            },
            2106: (e, t, u) => {
                'use strict';
                let n, a;
                (u.d(t, { L: () => n, q: () => a }),
                    (function (e) {
                        ((e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(a || (a = {})));
            },
            3495: (e, t, u) => {
                'use strict';
                u.d(t, { Q: () => r, Y: () => l });
                var n = u(3138),
                    a = u(7363),
                    i = u(1043),
                    s = u(5262);
                function r(e = n.O.client.getSize('rem')) {
                    const t = e.width,
                        u = e.height;
                    return Object.assign({ width: t, height: u }, (0, s.T)(t, u, i.j));
                }
                const o = r(),
                    l = (0, a.createContext)(o);
            },
            1039: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var n = u(3138),
                    a = u(7363),
                    i = u.n(a),
                    s = u(3495);
                const r = ({ children: e }) => {
                    const t = (0, a.useState)(s.Q),
                        u = t[0],
                        r = t[1],
                        o = (0, a.useState)(!1),
                        l = o[0],
                        c = o[1];
                    return (
                        (0, a.useLayoutEffect)(() => {
                            function e() {
                                r((e) => {
                                    const t = n.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : (0, s.Q)(t);
                                });
                            }
                            return (
                                e(),
                                c(!0),
                                n.O.client.events.on('clientResized', e),
                                n.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (n.O.client.events.off('clientResized', e),
                                        n.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        i().createElement(s.Y.Provider, { value: u }, l && e)
                    );
                };
            },
            6010: (e, t, u) => {
                'use strict';
                var n = u(7363),
                    a = u(7382),
                    i = u(3495);
                const s = ['children'];
                (0, n.memo)((e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, s);
                    const r = (0, n.useContext)(i.Y),
                        o = r.extraLarge,
                        l = r.large,
                        c = r.medium,
                        _ = r.small,
                        d = r.extraSmall,
                        m = r.extraLargeWidth,
                        E = r.largeWidth,
                        b = r.mediumWidth,
                        g = r.smallWidth,
                        p = r.extraSmallWidth,
                        A = r.extraLargeHeight,
                        h = r.largeHeight,
                        F = r.mediumHeight,
                        f = r.smallHeight,
                        D = r.extraSmallHeight,
                        v = { extraLarge: A, large: h, medium: F, small: f, extraSmall: D };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && o) return t;
                        if (u.large && l) return t;
                        if (u.medium && c) return t;
                        if (u.small && _) return t;
                        if (u.extraSmall && d) return t;
                    } else {
                        if (u.extraLargeWidth && m) return (0, a.H)(t, u, v);
                        if (u.largeWidth && E) return (0, a.H)(t, u, v);
                        if (u.mediumWidth && b) return (0, a.H)(t, u, v);
                        if (u.smallWidth && g) return (0, a.H)(t, u, v);
                        if (u.extraSmallWidth && p) return (0, a.H)(t, u, v);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && A) return t;
                            if (u.largeHeight && h) return t;
                            if (u.mediumHeight && F) return t;
                            if (u.smallHeight && f) return t;
                            if (u.extraSmallHeight && D) return t;
                        }
                    }
                    return null;
                });
            },
            7382: (e, t, u) => {
                'use strict';
                u.d(t, { H: () => n });
                const n = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, u) => {
                'use strict';
                u.d(t, { YN: () => a.Y, ZN: () => n.Z });
                u(6010);
                var n = u(1039),
                    a = u(3495);
            },
            1043: (e, t, u) => {
                'use strict';
                u.d(t, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, u) => {
                'use strict';
                var n;
                function a(e, t, u) {
                    const n = (function (e, t) {
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
                        })(e, u),
                        a = (function (e, t) {
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
                        })(t, u),
                        i = Math.min(n, a);
                    return {
                        extraLarge: i === u.extraLarge.weight,
                        large: i === u.large.weight,
                        medium: i === u.medium.weight,
                        small: i === u.small.weight,
                        extraSmall: i === u.extraSmall.weight,
                        extraLargeWidth: n === u.extraLarge.weight,
                        largeWidth: n === u.large.weight,
                        mediumWidth: n === u.medium.weight,
                        smallWidth: n === u.small.weight,
                        extraSmallWidth: n === u.extraSmall.weight,
                        extraLargeHeight: a === u.extraLarge.weight,
                        largeHeight: a === u.large.weight,
                        mediumHeight: a === u.medium.weight,
                        smallHeight: a === u.small.weight,
                        extraSmallHeight: a === u.extraSmall.weight,
                    };
                }
                (u.d(t, { T: () => a, u: () => n }),
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
                    })(n || (n = {})));
            },
            7078: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => o });
                var n = u(7363),
                    a = u.n(n),
                    i = u(2056);
                const s = ['children'];
                function r() {
                    return (
                        (r =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        r.apply(this, arguments)
                    );
                }
                const o = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, s);
                    return a().createElement(
                        i.u,
                        r(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            u,
                        ),
                        t,
                    );
                };
            },
            2056: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => l });
                var n = u(7902),
                    a = u(9916),
                    i = u(7363);
                const s = [
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
                function r(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const u = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                u.number = t;
                                break;
                            case 'boolean':
                                u.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                u.string = t.toString();
                        }
                        return u;
                    });
                }
                const o = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: a.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            a = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onClick,
                            m = e.ignoreShowDelay,
                            E = void 0 !== m && m,
                            b = e.ignoreMouseClick,
                            g = void 0 !== b && b,
                            p = e.decoratorId,
                            A = void 0 === p ? 0 : p,
                            h = e.isEnabled,
                            F = void 0 === h || h,
                            f = e.targetId,
                            D = void 0 === f ? 0 : f,
                            v = e.onShow,
                            C = e.onHide,
                            S = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, s);
                        const B = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, i.useMemo)(() => D || (0, n.F)().resId, [D]),
                            y = (0, i.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (o(u, A, { isMouseEvent: !0, on: !0, arguments: r(a) }, w),
                                    v && v(),
                                    (B.current.isVisible = !0));
                            }, [u, A, a, w, v]),
                            x = (0, i.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        o(u, A, { on: !1 }, w),
                                        B.current.isVisible && C && C(),
                                        (B.current.isVisible = !1));
                                }
                            }, [u, A, w, C]),
                            I = (0, i.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(B.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        ((0, i.useEffect)(() => {
                            const e = B.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', I, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', I, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === F && x();
                            }, [F, x]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        (window.removeEventListener('mouseleave', x), x());
                                    }
                                ),
                                [x],
                            ));
                        return F
                            ? (0, i.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(B.current.timeoutId),
                                                      (B.current.timeoutId = window.setTimeout(y, E ? 100 : 400)),
                                                      l && l(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (x(), null == c || c(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === g && x(), null == d || d(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === g && x(), null == _ || _(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      S,
                                  ),
                              )
                            : t;
                        var T;
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
            8246: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => r });
                var n = u(3138);
                function a(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return i(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return i(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function i(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function r({ initializer: e = !0, rootId: t = 0, getRoot: u = s, context: i = 'model' } = {}) {
                    const r = new Map();
                    function o(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? r.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, u) => {
                            u.forEach((t) => {
                                const u = r.get(t);
                                void 0 !== u && u(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = u(t),
                            a = i.split('.').reduce((e, t) => e[t], n);
                        return 'string' != typeof e || 0 === e.length
                            ? a
                            : e.split('.').reduce((e, t) => {
                                  const u = e[t];
                                  return 'function' == typeof u ? u.bind(e) : u;
                              }, a);
                    };
                    return {
                        subscribe: (u, a) => {
                            const s = 'string' == typeof a ? `${i}.${a}` : i,
                                o = n.O.view.addModelObserver(s, t, !0);
                            return (r.set(o, u), e && u(l(a)), o);
                        },
                        readByPath: l,
                        createCallback: (e, t) => {
                            const u = l(t);
                            return (...t) => {
                                u(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = l(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, u = a(r.keys()); !(e = u()).done; ) {
                                o(e.value, t);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, t, u) => {
                'use strict';
                u.d(t, { q3: () => o });
                var n = u(4598),
                    a = u(9174),
                    i = u(7363),
                    s = u.n(i),
                    r = u(8246);
                const o = () => (e, t) => {
                    const u = (0, i.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: _ }) {
                            const d = (0, i.useRef)([]),
                                m = (u, i, s) => {
                                    var o;
                                    const l = r.U(i),
                                        c =
                                            'real' === u
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == s ? void 0 : s.getter) ? o : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === u ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        m = (e) => d.current.push(e),
                                        E = e({
                                            mode: u,
                                            readByPath: _,
                                            externalModel: c,
                                            observableModel: {
                                                dict: (e) => {
                                                    const t = _(e),
                                                        i = a.LO.box(t, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                array: (e, t) => {
                                                    const i = null != t ? t : _(e),
                                                        s = a.LO.box(i, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const i = null != t ? t : _(e),
                                                        s = a.LO.box(i, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = _(t);
                                                    if (Array.isArray(e)) {
                                                        const i = e.reduce(
                                                            (e, t) => ((e[t] = a.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, a.aD)((t) => {
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
                                                            s = Object.entries(i),
                                                            r = s.reduce(
                                                                (e, [t, u]) => ((e[u] = a.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        s.forEach(([t, u]) => {
                                                                            r[u].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: m,
                                        }),
                                        b = { mode: u, model: E, externalModel: c, cleanup: m };
                                    return {
                                        model: E,
                                        controls: 'mocks' === u && s ? s.controls(b) : t(b),
                                        externalModel: c,
                                        mode: u,
                                    };
                                },
                                E = (0, i.useRef)(!1),
                                b = (0, i.useState)(o),
                                g = b[0],
                                p = b[1],
                                A = (0, i.useState)(() => m(o, l, _)),
                                h = A[0],
                                F = A[1];
                            return (
                                (0, i.useEffect)(() => {
                                    E.current ? F(m(g, l, _)) : (E.current = !0);
                                }, [_, g, l]),
                                (0, i.useEffect)(() => {
                                    p(o);
                                }, [o]),
                                (0, i.useEffect)(
                                    () => () => {
                                        (h.externalModel.dispose(), d.current.forEach((e) => e()));
                                    },
                                    [h],
                                ),
                                s().createElement(u.Provider, { value: h }, c)
                            );
                        },
                        () => (0, i.useContext)(u),
                    ];
                };
            },
            527: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, { mouse: () => c, off: () => o, on: () => r, onResize: () => i, onScaleUpdated: () => s }));
                var n = u(2472),
                    a = u(1176);
                const i = (0, n.E)('clientResized'),
                    s = (0, n.E)('self.onScaleUpdated'),
                    r = (e, t) => engine.on(e, t),
                    o = (e, t) => engine.off(e, t),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function u() {
                        e.enabled && (0, a.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', u))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', u))
                            : (0, a.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const i = `mouse${t}`,
                                        s = l[t]((e) => u([e, 'outside']));
                                    function r(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, r),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(i, r),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(u)),
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
                            e.enabled && (0, a.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, a.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => s,
                        getSize: () => i,
                        graphicsQuality: () => r,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var n = u(527),
                    a = u(2493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const r = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, u) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => n });
            },
            2493: (e, t, u) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function a(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                u.d(t, { E: () => a, G: () => n });
            },
            2472: (e, t, u) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => n });
            },
            3138: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => s });
                var n = u(5959),
                    a = u(7698),
                    i = u(514);
                const s = { view: u(7641), client: n, sound: i.ZP, intl: a.N };
            },
            7698: (e, t, u) => {
                'use strict';
                u.d(t, { N: () => n });
                const n = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => s });
                var n = u(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, n.playSound)(a[t])), e), {}),
                    s = { play: Object.assign({}, i, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, u) => {
                'use strict';
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function a(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                (u.r(t), u.d(t, { getBgUrl: () => a, getTextureUrl: () => n }));
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => a });
                var n = u(2472);
                const a = {
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
            7641: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => o,
                        arabic2roman: () => w,
                        children: () => a,
                        displayStatus: () => i.W,
                        displayStatusIs: () => x,
                        enableFullScreenModeSupported: () => k,
                        events: () => s.U,
                        extraSize: () => I,
                        forceTriggerMouseMove: () => C,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => S,
                        getExternalPaddingsRem: () => y,
                        getFontNames: () => B,
                        getScale: () => p,
                        getSize: () => m,
                        getViewGlobalPosition: () => b,
                        initExternalPaddings: () => O,
                        isEventHandled: () => v,
                        isFocused: () => f,
                        pxToRem: () => A,
                        remToPx: () => h,
                        resize: () => E,
                        sendEvent: () => r.qP,
                        setAnimateWindow: () => F,
                        setEventHandled: () => D,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => T,
                    }));
                var n = u(9690),
                    a = u(3722),
                    i = u(6112),
                    s = u(6538),
                    r = u(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function _(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function b(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
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
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function F(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function D() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function C() {
                    viewEnv.forceTriggerMouseMove();
                }
                function S() {
                    return viewEnv.getShowingStatus();
                }
                const B = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    w = n.cg;
                function y() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const x = Object.keys(i.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === i.W[t]), e),
                        {},
                    ),
                    I = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    T = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function k() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function O(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            u = t.top,
                            n = t.right,
                            a = t.bottom,
                            i = t.left;
                        (e.style.setProperty('--external-padding-top', `${u}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${a}rem`),
                            e.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    i = 16,
                    s = 32,
                    r = 64,
                    o = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                    return a;
                                })(t, n);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, s, {
                                          arguments:
                                              ((a = i),
                                              Object.entries(a).map(([e, t]) => {
                                                  const u = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: u, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: u, name: e, bool: t };
                                                      default:
                                                          return { __Type: u, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? a : s);
                        },
                        minimize() {
                            o(r);
                        },
                        move(e) {
                            o(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, u) => {
                'use strict';
                u.d(t, { jv: () => n });
                function n() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => n });
                const n = (e = 1) => {
                    const t = new Error().stack;
                    let u,
                        n = R.invalid('resId'),
                        a = '';
                    var i;
                    t &&
                        ((a = (null == (i = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : i[0]) || ''),
                        (u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== u &&
                            window.subViews[u] &&
                            (n = window.subViews[u].id));
                    return { callerUrl: a, caller: u, stack: t, resId: n };
                };
            },
            3815: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => i });
                var n = u(7363);
                const a = [];
                function i(e) {
                    const t = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, t.current)(...e), a)
                    );
                }
            },
            8526: (e, t, u) => {
                'use strict';
                u.d(t, { gd: () => r });
                var n = u(3138),
                    a = u(5521),
                    i = (u(9916), u(7363));
                const s = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function r(e = a.n.NONE, t = s, u = !1, r = !1) {
                    (0, i.useEffect)(() => {
                        if (e !== a.n.NONE)
                            return (
                                window.addEventListener('keydown', i, u),
                                () => {
                                    window.removeEventListener('keydown', i, u);
                                }
                            );
                        function i(a) {
                            if (a.keyCode === e) {
                                if (!r && n.O.view.isEventHandled()) return;
                                (n.O.view.setEventHandled(), t(a), u && a.stopPropagation());
                            }
                        }
                    }, [t, e, u, r]);
                }
            },
            2039: (e, t, u) => {
                'use strict';
                u.d(t, { b: () => a, k: () => i });
                var n = u(7363);
                const a = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    i = (e) => {
                        (0, n.useEffect)(() => e, []);
                    };
            },
            1396: (e, t, u) => {
                'use strict';
                u.d(t, { K: () => i });
                var n = u(7363),
                    a = u(2039);
                function i() {
                    const e = (0, n.useRef)(0);
                    return (
                        (0, a.k)(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, n.useMemo)(
                            () => ({
                                run: (t, u) => {
                                    (window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            ((e.current = 0), t());
                                        }, u)));
                                },
                                clear: () => {
                                    (window.clearTimeout(e.current), (e.current = 0));
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
            },
            5521: (e, t, u) => {
                'use strict';
                let n, a;
                (u.d(t, { n: () => n }),
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
                    })(a || (a = {})));
            },
            9480: (e, t, u) => {
                'use strict';
                u.d(t, { G: () => r, MH: () => i, U2: () => a, UI: () => s, hX: () => o, u4: () => c, v: () => l });
                var n = u(8968);
                function a(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                const i = a;
                function s(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                function r(e, t) {
                    if (Array.isArray(e)) return e.some(t);
                    for (let u = 0; u < e.length; u++) {
                        if (t(i(e, u), u, e)) return !0;
                    }
                    return !1;
                }
                function o(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const u = [];
                    for (let a = 0; a < e.length; a++) {
                        var n;
                        const i = null == (n = e[a]) ? void 0 : n.value;
                        t(i, a, e) && u.push(i);
                    }
                    return u;
                }
                function l(e, t) {
                    return (function (e, t, u) {
                        const n = [];
                        for (let a = 0; a < e.length; a++) {
                            const s = i(e, a);
                            t(s, a, e) && n.push(u(s, a, e));
                        }
                        return n;
                    })(e, n.C, t);
                }
                function c(e, t, u) {
                    if (Array.isArray(e)) return e.reduce(t, u);
                    let n = u;
                    for (let u = 0; u < e.length; u++) {
                        n = t(n, i(e, u), u, e);
                    }
                    return n;
                }
            },
            8968: (e, t, u) => {
                'use strict';
                function n(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                u.d(t, { C: () => n });
            },
            9690: (e, t, u) => {
                'use strict';
                u.d(t, { cg: () => i });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function i(e) {
                    let t = '';
                    for (let u = a.length - 1; u >= 0; u--) for (; e >= a[u]; ) ((t += n[u]), (e -= a[u]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            7727: (e, t, u) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                u.d(t, { $: () => a, G: () => n });
                const a = {
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
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => i });
                var n = u(3138);
                class a {
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
                        return (window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, t, u = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = n.O.view.addModelObserver(e, u, a);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(i) : (this._views[u] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
                        );
                    }
                    removeCallback(e, t = 0) {
                        let u = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((u = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            u || console.error("Can't remove callback by id:", e),
                            u
                        );
                    }
                    _emmitDataChanged(e, t, u) {
                        u.forEach((u) => {
                            const n = this._callbacks[u];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                a.__instance = void 0;
                const i = a;
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
            9916: (e, t, u) => {
                'use strict';
                u.d(t, { B0: () => r, c9: () => A, ry: () => p });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    u();
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
                        const u = e,
                            n = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== n)),
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
                const a = n;
                var i = u(1358);
                var s = u(8613);
                let r;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(r || (r = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = u(5521),
                    m = u(3138);
                const E = ['args'];
                function b(e, t, u, n, a, i, s) {
                    try {
                        var r = e[i](s),
                            o = r.value;
                    } catch (e) {
                        return void u(e);
                    }
                    r.done ? t(o) : Promise.resolve(o).then(n, a);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        u = arguments;
                                    return new Promise(function (n, a) {
                                        var i = e.apply(t, u);
                                        function s(e) {
                                            b(i, n, a, s, r, 'next', e);
                                        }
                                        function r(e) {
                                            b(i, n, a, s, r, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    A = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                    return a;
                                })(t, E);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, i, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const u = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          u.number = t;
                                                          break;
                                                      case 'boolean':
                                                          u.bool = t;
                                                          break;
                                                      default:
                                                          u.string = t.toString();
                                                  }
                                                  return u;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    h = () => A(r.CLOSE),
                    F = (e, t) => {
                        e.keyCode === d.n.ESCAPE && t();
                    };
                var f = u(7572);
                const D = a.instance,
                    v = {
                        DataTracker: i.Z,
                        ViewModel: f.Z,
                        ViewEventType: r,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => A(r.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => A(r.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            A(r.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, a = R.invalid('resId'), i) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                o = u.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                d = o.height,
                                E = {
                                    x: m.O.view.pxToRem(l) + s.x,
                                    y: m.O.view.pxToRem(c) + s.y,
                                    width: m.O.view.pxToRem(_),
                                    height: m.O.view.pxToRem(d),
                                };
                            A(r.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: g(E),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => F(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            F(e, h);
                        },
                        handleViewEvent: A,
                        onBindingsReady: p,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(r.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(r.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(r.POP_OVER),
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const a = Object.prototype.toString.call(t[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < a.length; t++) u[n].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: D,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    };
            },
            1030: (e, t, u) => {
                'use strict';
                var n = u(7739),
                    a = u(7363),
                    i = u.n(a),
                    s = u(6483),
                    r = u.n(s),
                    o = u(926),
                    l = u.n(o),
                    c = u(1043);
                let _, d, m;
                (!(function (e) {
                    ((e[(e.ExtraSmall = c.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = c.j.small.width)] = 'Small'),
                        (e[(e.Medium = c.j.medium.width)] = 'Medium'),
                        (e[(e.Large = c.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = c.j.extraLarge.width)] = 'ExtraLarge'));
                })(_ || (_ = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = c.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = c.j.small.width)] = 'Small'),
                            (e[(e.Medium = c.j.medium.width)] = 'Medium'),
                            (e[(e.Large = c.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = c.j.extraLarge.width)] = 'ExtraLarge'));
                    })(d || (d = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = c.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = c.j.small.height)] = 'Small'),
                            (e[(e.Medium = c.j.medium.height)] = 'Medium'),
                            (e[(e.Large = c.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = c.j.extraLarge.height)] = 'ExtraLarge'));
                    })(m || (m = {})));
                const E = () => {
                        const e = (0, a.useContext)(n.YN),
                            t = e.width,
                            u = e.height,
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return _.ExtraLarge;
                                    case e.large:
                                        return _.Large;
                                    case e.medium:
                                        return _.Medium;
                                    case e.small:
                                        return _.Small;
                                    case e.extraSmall:
                                        return _.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), _.ExtraSmall);
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return d.ExtraLarge;
                                    case e.largeWidth:
                                        return d.Large;
                                    case e.mediumWidth:
                                        return d.Medium;
                                    case e.smallWidth:
                                        return d.Small;
                                    case e.extraSmallWidth:
                                        return d.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), d.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return m.ExtraLarge;
                                    case e.largeHeight:
                                        return m.Large;
                                    case e.mediumHeight:
                                        return m.Medium;
                                    case e.smallHeight:
                                        return m.Small;
                                    case e.extraSmallHeight:
                                        return m.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), m.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: i, mediaWidth: s, mediaHeight: r, remScreenWidth: t, remScreenHeight: u };
                    },
                    b = ['children', 'className'];
                function g() {
                    return (
                        (g =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        g.apply(this, arguments)
                    );
                }
                const p = {
                        [d.ExtraSmall]: '',
                        [d.Small]: l().SMALL_WIDTH,
                        [d.Medium]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH}`,
                        [d.Large]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH}`,
                        [d.ExtraLarge]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH} ${l().EXTRA_LARGE_WIDTH}`,
                    },
                    A = {
                        [m.ExtraSmall]: '',
                        [m.Small]: l().SMALL_HEIGHT,
                        [m.Medium]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT}`,
                        [m.Large]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT}`,
                        [m.ExtraLarge]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT} ${l().EXTRA_LARGE_HEIGHT}`,
                    },
                    h = {
                        [_.ExtraSmall]: '',
                        [_.Small]: l().SMALL,
                        [_.Medium]: `${l().SMALL} ${l().MEDIUM}`,
                        [_.Large]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE}`,
                        [_.ExtraLarge]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE} ${l().EXTRA_LARGE}`,
                    },
                    F = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, b);
                        const a = E(),
                            s = a.mediaWidth,
                            o = a.mediaHeight,
                            l = a.mediaSize;
                        return i().createElement('div', g({ className: r()(u, p[s], A[o], h[l]) }, n), t);
                    },
                    f = ['children'];
                const D = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, f);
                    return i().createElement(n.ZN, null, i().createElement(F, u, t));
                };
                var v = u(1533),
                    C = u.n(v),
                    S = u(3138),
                    B = u(3815),
                    w = u(2039);
                function y() {
                    const e = (0, a.useRef)(0);
                    return (
                        (0, w.k)(() => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, a.useMemo)(
                            () => ({
                                run: (t) => {
                                    (window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                ((e.current = 0), t());
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
                }
                const x = (0, a.createContext)(null);
                const I = (e) => {
                        const t = i().useRef(null),
                            u = y(),
                            n = i().useRef(),
                            a = i().useRef(!1),
                            s = i().useCallback(() => {
                                const e = t.current;
                                if (!e) throw new Error('Element is not defined');
                                return (function (e, t) {
                                    if (t.current) {
                                        const u = t.current,
                                            n = u.width,
                                            a = u.height;
                                        if (n === e.offsetWidth && a === e.offsetHeight) return !0;
                                    }
                                    return !1;
                                })(e, n);
                            }, []),
                            r = (0, B.z)(() => {
                                u.run(() => {
                                    const u = t.current;
                                    if (!u || !1 === (null == e.needUpdate ? void 0 : e.needUpdate())) return;
                                    const i = s();
                                    if (i && !a.current) return;
                                    const r = {
                                        width: Math.max(1, u.offsetWidth),
                                        height: Math.max(1, u.offsetHeight),
                                    };
                                    ((n.current = r),
                                        S.O.view.resize(r.width, r.height),
                                        !1 === i && (null == e.onResize || e.onResize(r)));
                                });
                            });
                        ((0, w.b)(() =>
                            S.O.view.events.onTextureFrozen(() => {
                                a.current = !0;
                            }),
                        ),
                            (0, w.b)(() =>
                                S.O.view.events.onTextureReady(() => {
                                    (a.current && n.current && S.O.view.resize(n.current.width, n.current.height),
                                        (a.current = !1));
                                }),
                            ),
                            (0, w.b)(
                                () => (
                                    window.addEventListener('resize', r),
                                    () => window.removeEventListener('resize', r)
                                ),
                            ),
                            i().useEffect(() => {
                                var t;
                                (null == (t = e.autoUpdate) || t) && r();
                            }));
                        const o = i().useMemo(
                            () => ({
                                resize: r,
                                equalSize: s,
                                getLastSize: () => n.current,
                                getCurrentSize: () => {
                                    const e = t.current;
                                    return e
                                        ? { width: e.offsetWidth, height: e.offsetHeight }
                                        : { width: 0, height: 0 };
                                },
                                freeze: () => {
                                    ((a.current = !0), S.O.view.freezeTextureBeforeResize());
                                },
                                isFrozen: () => a.current,
                            }),
                            [s, r],
                        );
                        return i().createElement(x.Provider, { value: o }, e.children(t, r));
                    },
                    T = (e) => {
                        let t,
                            u = null;
                        return (
                            (u = requestAnimationFrame(() => {
                                u = requestAnimationFrame(() => {
                                    ((u = null), (t = e()));
                                });
                            })),
                            () => {
                                ('function' == typeof t && t(), null !== u && cancelAnimationFrame(u));
                            }
                        );
                    };
                var k = u(7641);
                var O = u(8526),
                    L = u(5521),
                    M = u(3403),
                    N = u(3220),
                    P = u(5262);
                u(1281);
                let H;
                function $(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(H || (H = {}));
                (() => {
                    const e = new RegExp(
                        [
                            /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                            /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                            /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                            /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                        ]
                            .map((e) => e.source)
                            .join('|'),
                        'gum',
                    );
                })();
                function G(e, t, u) {
                    const i = (0, a.useContext)(n.YN);
                    let s = Object.entries(i).filter(([e, t]) => !0 === t && e in P.u);
                    return (
                        u && (s = s.filter((e) => u.includes(e[0]))),
                        e.reduce((e, u) => {
                            const n = s.map((e) =>
                                r()(t[((e, t) => e + '__' + t)(u, e[0])], t[((e, t) => e + $(t))(u, e[0])]),
                            );
                            return ((e[u] = r()(t[u], ...n)), e);
                        }, {})
                    );
                }
                const j = (e, t, u, n = []) => {
                        const i = ((e, t = []) => {
                            const u = (0, a.useRef)(),
                                n = (0, a.useCallback)((...t) => {
                                    (u.current && u.current(), (u.current = e(...t)));
                                }, t);
                            return (
                                (0, a.useEffect)(
                                    () => () => {
                                        u.current && u.current();
                                    },
                                    [n],
                                ),
                                n
                            );
                        })(
                            () =>
                                T(() =>
                                    T(() => {
                                        if (e.current) {
                                            const u = e.current.getBoundingClientRect(),
                                                n = {
                                                    width: S.O.view.pxToRem(u.width),
                                                    height: S.O.view.pxToRem(u.height),
                                                    offsetX: S.O.view.pxToRem(u.left),
                                                    offsetY: S.O.view.pxToRem(u.top),
                                                };
                                            (window.tutorialApi.updateComponents(), t(n));
                                        }
                                    }),
                                ),
                            [t, e],
                        );
                        return (
                            (0, a.useEffect)(() => {
                                i();
                            }, [i, ...n]),
                            (0, a.useEffect)(() => {
                                if (u)
                                    return (
                                        engine.on('clientResized', i),
                                        () => {
                                            engine.off('clientResized', i);
                                        }
                                    );
                            }, [u, i]),
                            i
                        );
                    },
                    z = {
                        base: 'AmmoPanel_base_8d',
                        base__locked: 'AmmoPanel_base__locked_f8',
                        base__disabled: 'AmmoPanel_base__disabled_13',
                        base__hidden: 'AmmoPanel_base__hidden_14',
                        border: 'AmmoPanel_border_e6',
                        border__hidden: 'AmmoPanel_border__hidden_b1',
                        roleSkillSlot: 'AmmoPanel_roleSkillSlot_20',
                        roleSkillSlot__battle: 'AmmoPanel_roleSkillSlot__battle_b0',
                        roleSkillSlot__small: 'AmmoPanel_roleSkillSlot__small_a1',
                        roleSkillSlot__extraSmall: 'AmmoPanel_roleSkillSlot__extraSmall_a9',
                        roleSkillSlot__prebattle: 'AmmoPanel_roleSkillSlot__prebattle_b5',
                    },
                    W = 'Border_base_f9',
                    U = 'Border_border_83',
                    X = 'Border_wrapper_17',
                    q = 'Border_active_e8',
                    V = (0, a.memo)(({ slotOffset: e, slotWidth: t, onAnimationEnd: u }) => {
                        const n = (0, a.useRef)(null),
                            s = (0, a.useRef)(!1);
                        (0, a.useEffect)(() => {
                            s.current = !0;
                        }, [e, t]);
                        const r = (0, a.useCallback)(() => {
                            (s.current && u(), (s.current = !1));
                        }, [u]);
                        (0, a.useEffect)(() => {
                            const e = n.current;
                            return (
                                e && e.addEventListener('transitionend', r),
                                () => {
                                    e && e.removeEventListener('transitionend', r);
                                }
                            );
                        }, [r]);
                        const o = (0, a.useMemo)(() => ({ left: e }), [e]),
                            l = (0, a.useMemo)(() => ({ width: t }), [t]);
                        return i().createElement(
                            'div',
                            { className: W },
                            i().createElement(
                                'div',
                                { ref: n, className: U, style: o },
                                i().createElement(
                                    'div',
                                    { className: X },
                                    i().createElement('div', { className: q, style: l }),
                                ),
                            ),
                        );
                    }),
                    K = (e, t) => {
                        const u = [];
                        for (let n = 0; n < e; n++) u.push(t(n));
                        return u;
                    };
                var Z = u(2056);
                const Y = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function J() {
                    return (
                        (J =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        J.apply(this, arguments)
                    );
                }
                const Q = R.views.common.tooltip_window.simple_tooltip_content,
                    ee = (e) => {
                        let t = e.children,
                            u = e.body,
                            n = e.header,
                            s = e.note,
                            r = e.alert,
                            o = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Y);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, o, { body: u, header: n, note: s, alert: r });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [r, u, n, s, o]);
                        return i().createElement(
                            Z.u,
                            J(
                                {
                                    contentId:
                                        ((_ = null == o ? void 0 : o.hasHtmlContent),
                                        _ ? Q.SimpleTooltipHtmlContent('resId') : Q.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var _;
                    };
                var te = u(9344),
                    ue = u(2558),
                    ne = u(8934);
                const ae = {
                        base__enterUp: 'GroupAnimation_base__enterUp_b3',
                        animationEnterTop: 'GroupAnimation_animationEnterTop_92',
                        base__enterDown: 'GroupAnimation_base__enterDown_f0',
                        animationEnterDown: 'GroupAnimation_animationEnterDown_73',
                        base__exitUp: 'GroupAnimation_base__exitUp_92',
                        animationExitTop: 'GroupAnimation_animationExitTop_89',
                        base__exitDown: 'GroupAnimation_base__exitDown_67',
                        animationExitDown: 'GroupAnimation_animationExitDown_02',
                    },
                    ie = 'up',
                    se = 'down',
                    re = ({ children: e, index: t, setSetupSwitching: u, disabled: n = !1 }) => {
                        const s = (0, a.useRef)(1 - t),
                            r = (0, a.useMemo)(() => {
                                const e = ((u = t), (a = s.current), u === a ? '' : u > a ? se : ie);
                                var u, a;
                                const i = e && $(e);
                                return n ? {} : { enter: ae[`base__enter${i}`], exit: ae[`base__exit${i}`] };
                            }, [t, n]);
                        return (
                            (s.current = t),
                            i().createElement(
                                ue.Z,
                                { className: ae.base },
                                i().createElement(
                                    ne.Z,
                                    {
                                        timeout: 300,
                                        key: t,
                                        classNames: r,
                                        onEnter: () => u(!0),
                                        onExited: () => u(!1),
                                    },
                                    e,
                                ),
                            )
                        );
                    };
                var oe = u(4301),
                    le = u(7383);
                const ce = {
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
                    _e = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function de() {
                    return (
                        (de =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        de.apply(this, arguments)
                    );
                }
                const me = (e) => {
                    let t = e.value,
                        u = e.isEmpty,
                        n = e.className,
                        a = e.size,
                        s = void 0 === a ? 'normal' : a,
                        o = e.fadeInAnimation,
                        l = void 0 !== o && o,
                        c = e.hide,
                        _ = void 0 !== c && c,
                        d = e.maximumNumber,
                        m = void 0 === d ? 99 : d,
                        E = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, _e);
                    const b = u ? null : t,
                        g = 'string' == typeof b;
                    if ((b && !g && b < 0) || 0 === b) return null;
                    const p = b && !g && b > m,
                        A = r()(
                            ce.base,
                            ce[`base__${s}`],
                            l && ce.base__animated,
                            _ && ce.base__hidden,
                            !b && ce.base__pattern,
                            u && ce.base__empty,
                            n,
                        );
                    return i().createElement(
                        'div',
                        de({ className: A }, E),
                        i().createElement('div', { className: ce.bg }),
                        i().createElement('div', { className: ce.pattern }),
                        i().createElement(
                            'div',
                            { className: r()(ce.value, g && ce.value__text) },
                            p ? m : b,
                            p && i().createElement('span', { className: ce.plus }, '+'),
                        ),
                    );
                };
                var Ee = u(4231);
                const be = 'TopLabel_base_7f',
                    ge = 'TopLabel_base__ready_00',
                    pe = 'TopLabel_text_d0',
                    Ae = 'TopLabel_text__hangar_36',
                    he = 'TopLabel_text__shown_25',
                    Fe = 'TopLabel_text__hidden_79',
                    fe = 'TopLabel_text__truncated_29',
                    De = (0, a.memo)(({ panelType: e, text: t, parentRef: u, isTruncated: n = !1, show: s = !1 }) => {
                        const o = (0, a.useRef)(!1),
                            l = (0, a.useState)(!1),
                            c = l[0],
                            _ = l[1];
                        (0, a.useEffect)(() => {
                            u || (s && !o.current && (o.current = !0), _(s));
                        }, [s, u]);
                        const d = (0, a.useCallback)(() => {
                                ((o.current = !0), _(!0));
                            }, []),
                            m = (0, a.useCallback)(() => {
                                _(!1);
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = u && u.current;
                                if (e)
                                    return (
                                        e.addEventListener('mouseenter', d),
                                        e.addEventListener('mouseleave', m),
                                        () => {
                                            (e.removeEventListener('mouseenter', d),
                                                e.removeEventListener('mouseleave', m));
                                        }
                                    );
                            }, [u, d, m]),
                            i().createElement(
                                'div',
                                { className: r()(be, o.current && ge) },
                                i().createElement(
                                    'div',
                                    { className: r()(pe, e !== Ee.w.Setup && Ae, n && fe, s && c ? he : Fe) },
                                    t,
                                ),
                            )
                        );
                    }),
                    ve = 'notUsableSection';
                var Ce = u(7626);
                const Se = 'Section_base_8a',
                    Be = 'Section_label_73',
                    we = 'Section_counter_8a';
                var ye = u(7727);
                const xe = 'SlotDivider_base_60',
                    Ie = () => i().createElement('div', { className: xe });
                var Te = u(3267),
                    ke = u(8253),
                    Oe = u(3141);
                const Re = 'Grabber_base_cf',
                    Le = 'Grabber_base__enabled_b0',
                    Me = 'Grabber_base__waitingUpdate_1d',
                    Ne = 'Grabber_base__updating_f1',
                    Pe = 'Grabber_base__active_71',
                    He = 'Grabber_base__exit_1f',
                    $e = 'Grabber_base__showAnimation_d9';
                var Ge = u(3521),
                    je = u(1820);
                const ze = ({
                    children: e,
                    id: t,
                    containerRef: u,
                    isEnabled: n = !0,
                    onClick: s,
                    forceCenterX: o,
                    isUpdateAvailable: l,
                    handleAction: c,
                    blockOnGrabIds: _ = [],
                }) => {
                    const d = E().mediaSize,
                        m = (0, a.useRef)({
                            actualX: 0,
                            clickCenterOffset: 0,
                            dropCenterX: 0,
                            grabActivationPassed: !1,
                            isDragActive: !1,
                            id: t,
                        }),
                        b = (0, a.useRef)({
                            isValid: !1,
                            startX: 0,
                            startCenterX: 0,
                            minXRestriction: 0,
                            maxXRestriction: 8e3,
                        }),
                        g = (0, a.useRef)(null),
                        p = (0, a.useState)(!1),
                        A = p[0],
                        h = p[1],
                        F = (0, a.useState)(0),
                        f = F[0],
                        D = F[1],
                        v = y(),
                        C = 0 !== o && n,
                        w = o ? o - b.current.startCenterX : f;
                    (0, a.useEffect)(() => {
                        if (((b.current.isValid = !1), t))
                            return T(() => {
                                const e = g.current,
                                    n = u.current;
                                if (n && e) {
                                    const u = e.getBoundingClientRect(),
                                        a = n.getBoundingClientRect(),
                                        i = u.left + 0.5 * u.width;
                                    ((b.current = {
                                        isValid: !0,
                                        minXRestriction: a.left,
                                        maxXRestriction: a.left + a.width,
                                        startX: u.left,
                                        startCenterX: i,
                                    }),
                                        c(je.m.Ready, { dragId: t, currentCenterX: i }));
                                }
                            });
                    }, [d]);
                    const x = (0, a.useCallback)(
                            (e) => {
                                ((m.current.isDragActive = e),
                                    h(e),
                                    m.current.grabActivationPassed && !e && (0, Ge.jZ)(!1, _));
                            },
                            [_],
                        ),
                        I = (0, a.useCallback)(() => {
                            (c(je.m.DragStart, { dragId: m.current.id }),
                                (m.current.grabActivationPassed = !0),
                                (0, Ge.jZ)(!0, _));
                        }, [c, _]),
                        k = (0, a.useCallback)((e) => {
                            const t = m.current,
                                u = b.current,
                                n = u.startX,
                                a = u.startCenterX,
                                i = u.minXRestriction,
                                s = u.maxXRestriction,
                                r = a - n,
                                o = e - t.clickCenterOffset;
                            t.dropCenterX = (0, Ge.yG)(o, r, i, s);
                        }, []),
                        R = (0, a.useCallback)(
                            (e) => {
                                const t = m.current,
                                    u = b.current;
                                0 === e.button &&
                                    !t.isDragActive &&
                                    u.isValid &&
                                    n &&
                                    !l &&
                                    g.current &&
                                    ((t.actualX = e.clientX),
                                    (t.clickCenterOffset = t.actualX - u.startCenterX),
                                    x(!0));
                            },
                            [n, l, x],
                        ),
                        M = (0, a.useCallback)(() => {
                            !s || (n && b.current.isValid) || s();
                        }, [n, s]);
                    ((0, O.gd)(
                        A ? L.n.ESCAPE : L.n.NONE,
                        (0, B.z)(() => x(!1)),
                    ),
                        (0, a.useEffect)(() => {
                            n && o && D(0);
                        }, [o, n]));
                    const N = !A && m.current.grabActivationPassed;
                    ((0, a.useLayoutEffect)(() => {
                        m.current.id = t;
                    }, [t]),
                        (0, a.useEffect)(() => {
                            if (N) {
                                const e = m.current;
                                (c(je.m.Drop, { dragId: e.id, currentCenterX: e.dropCenterX }),
                                    o === e.dropCenterX &&
                                        ((e.grabActivationPassed = !1),
                                        v.run(() => c(je.m.DropExit, { dragId: e.id }))));
                            }
                        }, [N, v, o, c]),
                        (0, a.useEffect)(() => {
                            if (n && A && m.current.id) {
                                const e = S.O.client.events.mouse.up(([e, t]) => {
                                        if ('outside' === t) return x(!1);
                                        const u = m.current,
                                            n = e.clientX;
                                        (n === u.actualX && 0 === e.button && !m.current.grabActivationPassed
                                            ? s && s()
                                            : m.current.grabActivationPassed && k(n),
                                            m.current.isDragActive && x(!1));
                                    }),
                                    t = S.O.client.events.mouse.move(([e]) => {
                                        const t = m.current;
                                        if ((0 === e.clientX && 0 === e.clientY) || !t.isDragActive) return;
                                        const u = e.clientX,
                                            n = t.grabActivationPassed;
                                        (!n && I(),
                                            u !== t.actualX &&
                                                ((t.actualX = u),
                                                k(u),
                                                n && c(je.m.Drag, { dragId: t.id, currentCenterX: t.dropCenterX }),
                                                D(t.dropCenterX - b.current.startCenterX)));
                                    });
                                return () => {
                                    (t(), e());
                                };
                            }
                        }, [I, c, A, n, s, x, k]));
                    const P = n ? r()(Re, Le, A && Pe, N && He, C && Me, o && Ne) : r()(Re, o && $e);
                    return i().createElement(
                        'div',
                        {
                            id: t,
                            ref: g,
                            onClick: M,
                            onMouseDown: R,
                            onTransitionEnd: (e) => {
                                const t = m.current;
                                e.target === g.current &&
                                    t.grabActivationPassed &&
                                    ((t.grabActivationPassed = !1), v.run(() => c(je.m.DropExit, { dragId: t.id })));
                            },
                            className: P,
                            style: { left: w },
                        },
                        e,
                    );
                };
                let We;
                !(function (e) {
                    ((e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next'));
                })(We || (We = {}));
                const Ue = 'KeyLabel_base_ec',
                    Xe = 'KeyLabel_base__current_c2',
                    qe = 'KeyLabel_base__next_fa',
                    Ve = ({ text: e, show: t, panelType: u, shellState: n, className: a }) => {
                        if (!e) return null;
                        const s = 'KEY_NONE' === e ? '..' : String(R.strings.readable_key_names.$dyn(e));
                        return i().createElement(
                            'div',
                            { className: r()(Ue, n === We.Current && Xe, n === We.Next && qe, a) },
                            i().createElement(De, { isTruncated: !0, text: s, show: t, panelType: u }),
                        );
                    };
                var Ke = u(7078);
                const Ze = ({ children: e, slotType: t, slotId: u, panelType: n, isEnabled: s = !0 }) => {
                        const r = (0, a.useMemo)(() => ({ slotType: t, slotId: u }), [t, u]);
                        return i().createElement(
                            Ke.t,
                            {
                                isEnabled: s,
                                args: r,
                                decoratorId: [Ee.w.Battle, Ee.w.Prebattle].includes(n)
                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                    : 0,
                            },
                            i().createElement('div', null, e),
                        );
                    },
                    Ye = 'Close_base_f3',
                    Je = 'Close_base__invisible_0e',
                    Qe = 'Close_base__shown_a2',
                    et = 'Close_base__hover_6d',
                    tt = 'Close_base__down_2b',
                    ut = (0, a.memo)(
                        ({ id: e, show: t = !0, onClick: u, soundHover: n = 'highlight', soundClick: s = 'play' }) => {
                            const o = (0, a.useState)(!1),
                                l = o[0],
                                c = o[1],
                                _ = (0, a.useState)(!1),
                                d = _[0],
                                m = _[1],
                                E = (0, a.useState)(!1),
                                b = E[0],
                                g = E[1],
                                p = (0, a.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []),
                                A = (0, a.useCallback)(() => {
                                    (m(!0), n && (0, ye.G)(n));
                                }, [n]),
                                h = (0, a.useCallback)(() => {
                                    (c(!1), m(!1));
                                }, []),
                                F = (0, a.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && (c(!0), s && (0, ye.G)(s));
                                    },
                                    [t, s],
                                ),
                                f = (0, a.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && u && u();
                                    },
                                    [t, u],
                                );
                            (0, a.useEffect)(
                                () =>
                                    T(() => {
                                        g(!0);
                                    }),
                                [],
                            );
                            const D = r()(Ye, !b && Je, b && t && Qe, l && tt, d && et);
                            return i().createElement('div', {
                                id: e,
                                onMouseOver: A,
                                onMouseLeave: h,
                                onMouseDown: F,
                                onMouseUp: f,
                                className: D,
                                onClick: p,
                            });
                        },
                    ),
                    nt = 'Slot_base_3a',
                    at = 'Slot_label_e6',
                    it = 'Slot_close_bb',
                    st = 'Slot_disabled_5d',
                    rt = 'Slot_shadow_a7',
                    ot = 'Slot_category_2c';
                let lt;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(lt || (lt = {}));
                var ct = u(9916);
                const _t = ({
                        children: e,
                        contentID: t,
                        decoratorID: u = 0,
                        targetId: n = 0,
                        args: i,
                        isEnabled: s = !0,
                        onMouseDown: r,
                    }) => {
                        const o = (0, a.useCallback)(() => {
                                ((0, ct.c9)(ct.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: n,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: i,
                                }),
                                    ye.$.playYes());
                            }, [i, t, u, n]),
                            l = (0, a.useCallback)(() => {
                                (0, ct.c9)(ct.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: n,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, u, n]),
                            c = (0, a.useCallback)(
                                (e) => {
                                    (r && r(e), ((e) => e.button === lt.RIGHT)(e) && o());
                                },
                                [r, o],
                            );
                        return (
                            (0, a.useEffect)(() => {
                                !1 === s && l();
                            }, [s, l]),
                            s ? (0, a.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    dt = ['children'];
                function mt() {
                    return (
                        (mt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        mt.apply(this, arguments)
                    );
                }
                const Et = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, dt);
                    return i().createElement(
                        _t,
                        mt({}, u, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                var bt = u(1396),
                    gt = u(5918);
                const pt = (0, M.Pi)(
                        ({
                            intCD: e,
                            id: t,
                            itemInstalledSetupIdx: u,
                            isMountedMoreThanOne: n,
                            isInstalled: s,
                            isDisabled: r,
                            imageSource: o,
                            isEmpty: l,
                            slotIndex: c,
                            slotType: _,
                            contextMenuDisabled: d,
                            isSetupSwitching: m,
                            children: E,
                        }) => {
                            const b = (0, N.t)().model.root.get().vehicleCD,
                                g = (0, a.useState)(!0),
                                p = g[0],
                                A = g[1],
                                h = (0, bt.K)();
                            (0, a.useEffect)(() => {
                                (A(!1), h.run(() => A(!0), 100));
                            }, [b]);
                            const F = (0, a.useMemo)(
                                () => ({
                                    intCD: e,
                                    slotType: _,
                                    installedSlotId: t,
                                    isMounted: s,
                                    fieldType: 1,
                                    itemInstalledSetupIdx: u,
                                    itemInstalledSetupSlotIdx: t,
                                    isMountedMoreThanOne: n,
                                }),
                                [e, _, t, u, s, n],
                            );
                            return p
                                ? i().createElement(
                                      gt.y,
                                      {
                                          uniqueKey: e,
                                          isEmpty: l,
                                          slotIndex: c,
                                          slotType: _,
                                          imageSource: o,
                                          itemInstalledSetupIndex: u,
                                      },
                                      i().createElement(
                                          Et,
                                          { isEnabled: !(m || d || r || l), args: F },
                                          i().createElement('div', null, E),
                                      ),
                                  )
                                : i().createElement('div', null, E);
                        },
                    ),
                    At = (0, M.Pi)(
                        ({
                            slotType: e,
                            slotIndex: t,
                            level: u,
                            isSelected: n,
                            isSetupSwitching: s,
                            isSectionSelected: r,
                            onActiveSlotChanged: o,
                            onSlotSelected: l,
                            onActiveSlotRefChanged: c,
                            onSlotClear: _,
                            panelType: d,
                            isDisabled: m = !1,
                            isBorderActive: E,
                            isIncompatible: b = !1,
                            grabberId: g,
                            containerRef: p,
                            activeDragId: A,
                            handleGrabberAction: h,
                            forceLeftUpdate: F,
                            potentialDropId: f,
                            blockOnGrabIds: D,
                            contextMenuDisabled: v,
                            groupIndex: C,
                            sectionIndex: S,
                        }) => {
                            const B = (0, N.t)().model.computes.slots.slot(C, S, t),
                                w = B.imageSource,
                                y = B.isInstalled,
                                x = B.itemInstalledSetupIdx,
                                I = B.isMountedMoreThanOne,
                                k = B.overlayType,
                                O = B.keyName,
                                R = B.categoryImgSource,
                                L = B.withAttention,
                                M = B.id,
                                P = B.intCD,
                                H = d === Ee.w.Setup,
                                $ = !(0, oe.s$)(d),
                                G = !(0, oe.iN)(d),
                                j = d === Ee.w.Compare,
                                z = H && r && $,
                                W = (0, a.useRef)(!1),
                                U = (0, a.useRef)(null),
                                X = -1 === P;
                            ((0, a.useEffect)(() => {
                                if (!W.current && r && n)
                                    return T(() => {
                                        (o && o(U, e, M), (W.current = !0));
                                    });
                                W.current = !0;
                            }, [M, r, n, o, e]),
                                (0, a.useEffect)(() => {
                                    n && c(U);
                                }, [n, c]));
                            const q = ((e) => {
                                    const t = (0, a.useRef)(-1),
                                        u = (0, a.useCallback)(
                                            (u) => {
                                                if (-1 === t.current) {
                                                    const n = e(u);
                                                    n &&
                                                        (t.current = window.setTimeout(() => {
                                                            t.current = -1;
                                                        }, n));
                                                }
                                            },
                                            [e],
                                        );
                                    return ((0, a.useEffect)(() => () => clearTimeout(t.current), []), u);
                                })((0, a.useCallback)(() => (!n && $ && !s && l(e, M), 500), [M, $, n, s, l, e])),
                                V = (0, a.useCallback)(() => {
                                    m || q('');
                                }, [q, m]),
                                K = (0, a.useCallback)(() => {
                                    G && !n && !A && !m && ye.$.playHighlight();
                                }, [n, A, m, G]);
                            (0, a.useEffect)(() => {
                                f && ye.$.playHighlight();
                            }, [f]);
                            const Z = (0, a.useCallback)(() => {
                                    null == _ || _(M, e);
                                }, [M, _, e]),
                                Y = H && !y,
                                J = Boolean(g && f === g),
                                Q = g && (z || j),
                                ee = `${e}-slot-${M}`,
                                te = R && R.length > 0,
                                ue = te ? { backgroundImage: `url(${R})` } : {},
                                ne = {
                                    id: g,
                                    containerRef: p,
                                    isEnabled: !X,
                                    onClick: V,
                                    isUpdateAvailable: Boolean(A),
                                    handleAction: h,
                                    forceCenterX: F,
                                    blockOnGrabIds: D,
                                },
                                ae = {
                                    isEmpty: X,
                                    intCD: P,
                                    slotType: e,
                                    slotIndex: t,
                                    imageSource: w,
                                    isDisabled: m,
                                    isInstalled: y,
                                    id: M,
                                    itemInstalledSetupIdx: x,
                                    isMountedMoreThanOne: I,
                                    contextMenuDisabled: v,
                                    isSetupSwitching: s,
                                };
                            return i().createElement(
                                'div',
                                { className: nt, onMouseEnter: K, id: ee },
                                (r || j) &&
                                    !y &&
                                    i().createElement(
                                        'div',
                                        { className: it },
                                        i().createElement(ut, { id: `close-${ee}`, show: !A, onClick: Z }),
                                    ),
                                i().createElement(
                                    Ze,
                                    { slotType: e, slotId: M, isEnabled: !A, panelType: d },
                                    i().createElement(
                                        'div',
                                        { ref: U },
                                        i().createElement(
                                            ke.W,
                                            {
                                                activeDragId: A,
                                                slotType: e,
                                                isSelected: n,
                                                isBorderActive: Boolean(E),
                                                panelType: d,
                                                isDisabled: m,
                                                isPotentialDrop: J,
                                                onClick: Q ? void 0 : V,
                                            },
                                            $ &&
                                                i().createElement(
                                                    'div',
                                                    { className: at },
                                                    i().createElement(Ve, { text: O, show: Boolean(r), panelType: d }),
                                                ),
                                            i().createElement(
                                                Te.J,
                                                { when: Boolean(Q), wrapper: ze, withProps: ne },
                                                i().createElement(
                                                    Te.J,
                                                    { when: $, wrapper: pt, withProps: ae },
                                                    i().createElement(Oe.c, {
                                                        imageSource: w,
                                                        isIncompatible: b,
                                                        overlayType: k,
                                                        level: u,
                                                        isTemporary: Y,
                                                        withAttention: L,
                                                    }),
                                                ),
                                            ),
                                            te &&
                                                i().createElement(
                                                    i().Fragment,
                                                    null,
                                                    i().createElement('span', { className: rt }),
                                                    i().createElement('span', { className: ot, style: ue }),
                                                ),
                                            m && i().createElement('div', { className: st }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    ht = 'BattleAbilitySlot_base_74',
                    Ft = 'BattleAbilitySlot_rank_01',
                    ft = ['rank'];
                const Dt = (e) => {
                    let t = e.rank,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, ft);
                    return i().createElement(
                        'div',
                        { className: ht },
                        i().createElement(At, u),
                        t && i().createElement('div', { className: Ft, style: { backgroundImage: `url(${t})` } }),
                    );
                };
                var vt = u(4814);
                const Ct = 'OptDeviceSlot_base_14',
                    St = 'OptDeviceSlot_specializations_c3',
                    Bt = ['groupIndex', 'sectionIndex', 'slotIndex', 'activeSpecsMask', 'isChangeSetupIndex'];
                function wt() {
                    return (
                        (wt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        wt.apply(this, arguments)
                    );
                }
                const yt = (0, M.Pi)((e) => {
                        let t = e.groupIndex,
                            u = e.sectionIndex,
                            n = e.slotIndex,
                            a = e.activeSpecsMask,
                            s = e.isChangeSetupIndex,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Bt);
                        const l = (0, N.t)(),
                            c = l.controls,
                            _ = l.model.computes.specializations(t, u, n),
                            d = _.specializations.length,
                            m = o.panelType === Ee.w.Setup || o.panelType === Ee.w.Compare,
                            E = !(0, oe.s$)(o.panelType),
                            b = _.isDynamic;
                        return i().createElement(
                            'div',
                            { className: r()(Ct, d && !b && !s && 'specializationsSlot') },
                            E &&
                                i().createElement(
                                    'div',
                                    { className: St },
                                    i().createElement(vt.G, {
                                        specializations: _.specializations,
                                        isDynamic: b,
                                        activeSpecsMask: a,
                                        isSpecializationActive: m,
                                        onSpecializationClick: (e) => {
                                            c.specializationSelect({ slotId: o.id, specializationIndex: e });
                                        },
                                    }),
                                ),
                            i().createElement(At, wt({}, o, { groupIndex: t, sectionIndex: u, slotIndex: n })),
                        );
                    }),
                    xt = {
                        base: 'ToggleCamouflageSlot_base_17',
                        base__grabbing: 'ToggleCamouflageSlot_base__grabbing_79',
                        base__hangar: 'ToggleCamouflageSlot_base__hangar_e7',
                        base__setup: 'ToggleCamouflageSlot_base__setup_44',
                        base__compare: 'ToggleCamouflageSlot_base__compare_0d',
                        base__selected: 'ToggleCamouflageSlot_base__selected_0c',
                        base__dragIn: 'ToggleCamouflageSlot_base__dragIn_68',
                        base__dragInActive: 'ToggleCamouflageSlot_base__dragInActive_b1',
                        base__toggle: 'ToggleCamouflageSlot_base__toggle_fc',
                        base__disabled: 'ToggleCamouflageSlot_base__disabled_1e',
                        image: 'ToggleCamouflageSlot_image_ee',
                        glow: 'ToggleCamouflageSlot_glow_45',
                        toggle: 'ToggleCamouflageSlot_toggle_c2',
                    },
                    It = ({ id: e, isSelected: t, isLocked: u, onSlotSelected: n, panelType: s }) => {
                        const o = le.yZ,
                            l = (0, a.useCallback)(() => {
                                n(o, e);
                            }, [e, n, o]),
                            c = r()(xt.base, xt[`base__${s}`], u && xt.base__disabled, t && xt.base__toggle),
                            _ = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: 'url(R.images.gui.maps.icons.quests.bonuses.small.camouflage)',
                                }),
                                [],
                            ),
                            d = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            ),
                            m = `toggle-camouflage-slot-${e}`;
                        return i().createElement(
                            Ze,
                            { slotType: o, slotId: e, panelType: s },
                            i().createElement(
                                'div',
                                { id: m, className: c, onClick: l, onMouseEnter: ye.$.playHighlight },
                                t && i().createElement('div', { className: xt.glow }),
                                i().createElement('div', { className: xt.image, style: _ }),
                                i().createElement('div', { className: xt.toggle, style: d }),
                            ),
                        );
                    },
                    Tt = ['groupIndex', 'sectionIndex', 'slotIndex', 'sectionType'];
                function kt() {
                    return (
                        (kt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        kt.apply(this, arguments)
                    );
                }
                const Ot = (0, M.Pi)((e) => {
                        let t = e.groupIndex,
                            u = e.sectionIndex,
                            n = e.slotIndex,
                            a = e.sectionType,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Tt);
                        const r = (0, N.t)().model,
                            o = r.computes.slots.slot(t, u, n),
                            l = r.ammunitionPanel.get(),
                            c = l.selectedSection,
                            _ = l.selectedSlot,
                            d = (c === a ? _ : -1) === o.id;
                        switch (a) {
                            case le.zn: {
                                const e = o;
                                return i().createElement(
                                    yt,
                                    kt({}, e, s, { groupIndex: t, sectionIndex: u, slotIndex: n, isSelected: d }),
                                );
                            }
                            case le.yZ: {
                                const e = o;
                                return i().createElement(
                                    It,
                                    kt({}, s, e, { groupIndex: t, sectionIndex: u, slotIndex: n }),
                                );
                            }
                            case le.YN: {
                                const e = o;
                                return i().createElement(
                                    Dt,
                                    kt({}, s, e, { groupIndex: t, sectionIndex: u, slotIndex: n, isSelected: d }),
                                );
                            }
                            default:
                                return i().createElement(
                                    At,
                                    kt({}, s, { isSelected: d, groupIndex: t, sectionIndex: u, slotIndex: n }),
                                );
                        }
                    }),
                    Rt = 'Slots_base_27',
                    Lt = [
                        'groupIndex',
                        'sectionIndex',
                        'sectionType',
                        'onActiveSlotChanged',
                        'isDisabled',
                        'blockOnGrabIds',
                        'isChangeSetupIndex',
                        'setIsExitBlocked',
                    ];
                function Mt() {
                    return (
                        (Mt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Mt.apply(this, arguments)
                    );
                }
                const Nt = (0, M.Pi)((e) => {
                        let t = e.groupIndex,
                            u = e.sectionIndex,
                            n = e.sectionType,
                            s = e.onActiveSlotChanged,
                            o = e.isDisabled,
                            l = e.blockOnGrabIds,
                            c = e.isChangeSetupIndex,
                            _ = e.setIsExitBlocked,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Lt);
                        const m = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            b = (0, N.t)(),
                            g = b.model,
                            p = b.controls,
                            A = g.computes.slots.length(t, u),
                            h = g.ammunitionPanel.get(),
                            F = h.selectedSection,
                            f = h.selectedSlot,
                            D = h.syncInitiator,
                            v = (0, a.useCallback)(
                                (e, t) => {
                                    p.dragDropSwap({
                                        sectionType: n,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(t[t.length - 1]),
                                    });
                                },
                                [p, n],
                            ),
                            C = F === n,
                            S = n === le.YN,
                            B = C ? f : -1,
                            w = `${n}-${A}slots`,
                            y = (0, Ce.UW)({
                                baseId: w,
                                slotsLength: A,
                                handleSwap: v,
                                setIsExitBlocked: _,
                                syncInitiator: D,
                            }),
                            x = y.handleGrabberAction,
                            I = y.dragState,
                            T = y.getForceCenterX;
                        (0, a.useEffect)(() => {
                            C && -1 !== B && m.current && s(m, F, B);
                        }, [s, C, F, B]);
                        const k = (e, t) => {
                                if ((o || ye.$.playClick(), 'number' != typeof t))
                                    return console.warn('selectedSlot is not a number');
                                p.sectionSelect({ selectedSlot: t, selectedSection: e });
                            },
                            O = (e) => {
                                m.current = e ? e.current : null;
                            },
                            R = (e, t) => {
                                p.slotClear({ slotId: e, sectionType: t });
                            };
                        return i().createElement(
                            'div',
                            { id: w, ref: E, className: r()(Rt, n) },
                            K(A, (e) => {
                                const r = !S && A > 1 ? `${w}-${e}` : '';
                                return i().createElement(
                                    a.Fragment,
                                    { key: `slot ${t}-${u}-${e}` },
                                    e > 0 && i().createElement(Ie, null),
                                    i().createElement(
                                        Ot,
                                        Mt(
                                            {
                                                groupIndex: t,
                                                sectionIndex: u,
                                                slotIndex: e,
                                                sectionType: n,
                                                isSectionSelected: C,
                                                isDisabled: o,
                                                contextMenuDisabled: S,
                                                slotType: n,
                                                onActiveSlotChanged: s,
                                                onSlotSelected: k,
                                                onActiveSlotRefChanged: O,
                                                onSlotClear: R,
                                                grabberId: r,
                                                containerRef: E,
                                                forceLeftUpdate: T(r),
                                                activeDragId: I.activeDragId,
                                                handleGrabberAction: x,
                                                potentialDropId: I.potentialDropId,
                                                blockOnGrabIds: l,
                                                isSetupSwitching: c,
                                                isChangeSetupIndex: c,
                                            },
                                            d,
                                        ),
                                    ),
                                );
                            }),
                        );
                    }),
                    Pt = [
                        'groupIndex',
                        'sectionIndex',
                        'type',
                        'newItemsCount',
                        'panelType',
                        'sectionsIds',
                        'isSetupSwitching',
                        'classMix',
                    ];
                function Ht() {
                    return (
                        (Ht =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ht.apply(this, arguments)
                    );
                }
                const $t = (0, M.Pi)((e) => {
                    let t = e.groupIndex,
                        u = e.sectionIndex,
                        n = e.type,
                        s = e.newItemsCount,
                        o = e.panelType,
                        l = e.sectionsIds,
                        c = e.isSetupSwitching,
                        _ = e.classMix,
                        d = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, Pt);
                    const m = (0, N.t)().model,
                        E = (0, a.useRef)(null),
                        b = m.ammunitionPanel.get(),
                        g = b.selectedSection,
                        p = b.syncInitiator,
                        A = m.computes.slots.length(t, u),
                        h = m.computes.slots.existFilled(t, u),
                        F = g === n,
                        f = (0, Ce.Tu)(n, l),
                        D = f.selfId,
                        v = f.blockOnGrabIds,
                        C = A > 0 && o !== Ee.w.Compare && o !== Ee.w.Battle && o !== Ee.w.Respawn,
                        S = R.strings.tank_setup.section.$dyn(n);
                    if ('string' != typeof S)
                        throw new Error(`No top label text for section type ${n} or it's not a string`);
                    return i().createElement(
                        'div',
                        {
                            id: c ? ve : D,
                            ref: E,
                            className: r()(
                                Se,
                                _,
                                F && 'sectionSelected',
                                A > 1 && 'multiSlot',
                                p >= 0 && h && 'existFilledSlots',
                            ),
                        },
                        C &&
                            i().createElement(
                                'div',
                                { className: Be },
                                i().createElement(De, { text: S, parentRef: E, show: !F, panelType: o }),
                            ),
                        i().createElement(
                            Nt,
                            Ht({ groupIndex: t, sectionIndex: u, sectionType: n, panelType: o, blockOnGrabIds: v }, d),
                        ),
                        Boolean(s) &&
                            i().createElement(
                                'div',
                                { className: we },
                                i().createElement(me, { value: s, size: 'small', fadeInAnimation: !0 }),
                            ),
                    );
                });
                var Gt = u(8598);
                const jt = {
                        base: 'ShellsSlot_base_05',
                        base__grabbing: 'ShellsSlot_base__grabbing_2f',
                        shell: 'ShellsSlot_shell_ab',
                        shell__grabbing: 'ShellsSlot_shell__grabbing_98',
                        shell__active: 'ShellsSlot_shell__active_7e',
                        shell__potential: 'ShellsSlot_shell__potential_30',
                        label: 'ShellsSlot_label_da',
                        image: 'ShellsSlot_image_3f',
                        infinity: 'ShellsSlot_infinity_19',
                    },
                    zt = ({
                        id: e,
                        itemInstalledSetupIdx: t,
                        isMountedMoreThanOne: u,
                        imageSource: n,
                        count: s,
                        isInfinity: o,
                        isSelected: l,
                        keyName: c,
                        panelType: _,
                        intCD: d,
                        slotIndex: m,
                        grabberId: E,
                        isSetupSwitching: b,
                        containerRef: g,
                        activeDragId: p,
                        handleGrabberAction: A,
                        forceLeftUpdate: h,
                        potentialDropId: F,
                        blockOnGrabIds: f,
                        shellState: D,
                        isDisabled: v,
                    }) => {
                        const C = !(0, oe.s$)(_),
                            S = (0, a.useMemo)(() => ({ backgroundImage: `url(${n})` }), [n]),
                            B = E && E === F,
                            w = E && E === p,
                            y = (0, a.useMemo)(() => {
                                const n = { slotType: le.g9, slotId: e, fieldType: 1, intCD: d };
                                return [
                                    n,
                                    Object.assign({}, n, {
                                        installedSlotId: e,
                                        itemInstalledSetupIdx: t,
                                        itemInstalledSetupSlotIdx: e,
                                        isMountedMoreThanOne: u,
                                    }),
                                ];
                            }, [d, e, t, u]),
                            x = y[0],
                            I = y[1],
                            T = (0, a.useMemo)(
                                () => ({
                                    id: E,
                                    containerRef: g,
                                    isEnabled: Boolean(E) && l,
                                    isUpdateAvailable: Boolean(p),
                                    handleAction: A,
                                    forceCenterX: h,
                                    blockOnGrabIds: f,
                                }),
                                [p, f, g, h, E, A, l],
                            ),
                            k = (0, a.useMemo)(
                                () => ({ slotIndex: m, uniqueKey: d, slotType: le.g9, imageSource: null }),
                                [d, m],
                            );
                        return i().createElement(
                            Et,
                            { isEnabled: C && !b && !v, args: I },
                            i().createElement(
                                Ke.t,
                                {
                                    args: x,
                                    decoratorId: [Ee.w.Battle, Ee.w.Prebattle].includes(_)
                                        ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                        : 0,
                                    isEnabled: !p,
                                },
                                i().createElement(
                                    'div',
                                    { id: `shell-slot-${m}`, className: jt.base },
                                    c &&
                                        i().createElement(
                                            'div',
                                            { className: jt.label },
                                            i().createElement(Ve, {
                                                text: c,
                                                show: l || _ === Ee.w.Battle || _ === Ee.w.Respawn,
                                                shellState: D,
                                                panelType: _,
                                                className: r()(
                                                    0 === m && jt.topLabel__first,
                                                    2 === m && jt.topLabel__last,
                                                ),
                                            }),
                                        ),
                                    i().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                jt.shell,
                                                !p && C && !v && jt.shell__active,
                                                w && jt.shell__grabbing,
                                                !w && B && jt.shell__potential,
                                            ),
                                        },
                                        i().createElement(
                                            Te.J,
                                            { when: C, wrapper: ze, withProps: T },
                                            i().createElement(
                                                Te.J,
                                                { when: C, wrapper: gt.y, withProps: k },
                                                i().createElement('div', { className: jt.image, style: S }),
                                                !o && i().createElement(Gt.X, { count: s }),
                                                o && i().createElement('div', { className: jt.infinity }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    Wt = {
                        base: 'ToggleSlot_base_93',
                        slot: 'ToggleSlot_slot_cd',
                        slot__grabbing: 'ToggleSlot_slot__grabbing_df',
                        image: 'ToggleSlot_image_e0',
                        slot__active: 'ToggleSlot_slot__active_15',
                        glow: 'ToggleSlot_glow_48',
                        toggle: 'ToggleSlot_toggle_73',
                    },
                    Ut = ({ id: e, isSelected: t, imageSource: u, onSlotSelected: n, panelType: s }) => {
                        const o = (0, a.useCallback)(() => {
                                !t && n(e);
                            }, [e, t, n]),
                            l = r()(Wt.slot, !t && Wt.slot__active, Wt.slot__compare),
                            c = (0, a.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]),
                            _ = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            );
                        return i().createElement(
                            Ze,
                            { slotType: le.WI, slotId: e, panelType: s },
                            i().createElement(
                                'div',
                                { className: Wt.base },
                                i().createElement(
                                    'div',
                                    { className: l, onClick: o, id: `shell-slot-${e}` },
                                    t && i().createElement('div', { className: Wt.glow }),
                                    i().createElement('div', { className: Wt.image, style: c }),
                                    i().createElement('div', { className: Wt.toggle, style: _ }),
                                ),
                            ),
                        );
                    },
                    Xt = 'ShellContainer_base_46',
                    qt = 'ShellContainer_base__compressed_13',
                    Vt = [
                        'groupIndex',
                        'sectionIndex',
                        'slotIndex',
                        'isCompare',
                        'handleSlotSelected',
                        'baseId',
                        'grabber',
                        'panelType',
                    ];
                function Kt() {
                    return (
                        (Kt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Kt.apply(this, arguments)
                    );
                }
                const Zt = (0, M.Pi)((e) => {
                        let t = e.groupIndex,
                            u = e.sectionIndex,
                            n = e.slotIndex,
                            a = e.isCompare,
                            s = e.handleSlotSelected,
                            o = e.baseId,
                            l = e.grabber,
                            c = e.panelType,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Vt);
                        const d = l.handleGrabberAction,
                            m = l.dragState,
                            E = l.getForceCenterX,
                            b = (0, N.t)().model,
                            g = b.computes.slots.length(t, u),
                            p = b.computes.slots.slot(t, u, n),
                            A = !a && g > 1 ? `${o}-${p.id}` : '';
                        return (0, oe.j2)(p)
                            ? null
                            : i().createElement(
                                  'div',
                                  { key: p.id, className: r()(Xt, !a && 0 !== n && qt) },
                                  a
                                      ? i().createElement(Ut, Kt({}, p, { onSlotSelected: s, panelType: c }))
                                      : i().createElement(
                                            zt,
                                            Kt(
                                                {},
                                                p,
                                                {
                                                    slotIndex: n,
                                                    grabberId: A,
                                                    forceLeftUpdate: E(A),
                                                    activeDragId: m.activeDragId,
                                                    handleGrabberAction: d,
                                                    potentialDropId: m.potentialDropId,
                                                    panelType: c,
                                                },
                                                _,
                                            ),
                                        ),
                              );
                    }),
                    Yt = 'Shells_base_f9',
                    Jt = (0, M.Pi)(
                        ({
                            panelType: e,
                            onSelected: t,
                            isCompare: u,
                            isSelected: n,
                            syncInitiator: s,
                            blockOnGrabIds: r,
                            isDisabled: o,
                            isSetupSwitching: l,
                            setIsExitBlocked: c,
                            groupIndex: _,
                            sectionIndex: d,
                        }) => {
                            const m = (0, N.t)(),
                                E = m.model,
                                b = m.controls,
                                g = E.computes.slots.length(_, d),
                                p = (0, a.useRef)(!1),
                                A = (0, a.useRef)(null),
                                h = u ? le.WI : le.g9,
                                F = `${h}-${g}shells`,
                                f = !(0, oe.iN)(e),
                                D = (0, a.useCallback)(
                                    (e) => {
                                        (b.sectionSelect({ selectedSlot: e, selectedSection: h }),
                                            f && ye.$.playClick());
                                    },
                                    [b, h, f],
                                ),
                                v = (0, a.useCallback)(() => {
                                    n || u || o || l || D(0);
                                }, [n, u, l, o, D]),
                                C = (0, a.useCallback)(
                                    (e, t) => {
                                        b.dragDropSwap({
                                            sectionType: h,
                                            dragId: Number(e[e.length - 1]),
                                            dropId: Number(t[t.length - 1]),
                                        });
                                    },
                                    [b, h],
                                ),
                                S = (0, Ce.UW)({
                                    baseId: F,
                                    slotsLength: g,
                                    handleSwap: C,
                                    setIsExitBlocked: c,
                                    syncInitiator: s,
                                });
                            return (
                                (0, a.useEffect)(
                                    () =>
                                        T(() => {
                                            p.current = !0;
                                        }),
                                    [],
                                ),
                                (0, a.useEffect)(() => {
                                    if (n && e === Ee.w.Setup) {
                                        if (!p.current)
                                            return T(() => {
                                                t();
                                            });
                                        t();
                                    }
                                }, [n, e, t]),
                                i().createElement(
                                    'div',
                                    {
                                        id: F,
                                        ref: A,
                                        className: Yt,
                                        onClick: v,
                                        onMouseEnter: () => {
                                            !o && f && ye.$.playHighlight();
                                        },
                                    },
                                    K(g, (t) =>
                                        i().createElement(Zt, {
                                            key: `${_} ${d} ${t}`,
                                            groupIndex: _,
                                            sectionIndex: d,
                                            slotIndex: t,
                                            isCompare: u,
                                            containerRef: A,
                                            handleSlotSelected: D,
                                            panelType: e,
                                            blockOnGrabIds: r,
                                            isSelected: n,
                                            isDisabled: o,
                                            isSetupSwitching: l,
                                            grabber: S,
                                            baseId: F,
                                        }),
                                    ),
                                )
                            );
                        },
                    ),
                    Qt = {
                        base: 'ShellsSection_base_08',
                        base__grabbing: 'ShellsSection_base__grabbing_2e',
                        base__hangar: 'ShellsSection_base__hangar_24',
                        base__setup: 'ShellsSection_base__setup_c8',
                        base__compare: 'ShellsSection_base__compare_e3',
                        base__selected: 'ShellsSection_base__selected_fd',
                        base__dragIn: 'ShellsSection_base__dragIn_39',
                        base__dragInActive: 'ShellsSection_base__dragInActive_96',
                        base__toggle: 'ShellsSection_base__toggle_bd',
                        base__disabled: 'ShellsSection_base__disabled_7e',
                        label: 'ShellsSection_label_38',
                        attention: 'ShellsSection_attention_7e',
                        blinking: 'ShellsSection_blinking_57',
                        border: 'ShellsSection_border_0d',
                        border__double: 'ShellsSection_border__double_a1',
                        border__triple: 'ShellsSection_border__triple_f2',
                        counter: 'ShellsSection_counter_74',
                        disabled: 'ShellsSection_disabled_c2',
                    },
                    eu = [Ee.w.Hangar, Ee.w.Battle, Ee.w.Prebattle, Ee.w.Respawn],
                    tu = (0, M.Pi)(
                        ({
                            type: e,
                            sectionsIds: t,
                            panelType: u,
                            onActiveSlotChanged: n,
                            isDisabled: s,
                            isBorderActive: o,
                            classMix: l,
                            isSetupSwitching: c,
                            setIsExitBlocked: _,
                            newItemsCount: d,
                            groupIndex: m,
                            sectionIndex: E,
                        }) => {
                            const b = (0, N.t)().model,
                                g = b.ammunitionPanel.get(),
                                p = g.ammoNotFull,
                                A = g.selectedSection,
                                h = g.syncInitiator,
                                F = (0, a.useRef)(null),
                                f = u === Ee.w.Compare,
                                D = A === e,
                                v = (0, a.useCallback)(() => {
                                    n(F, A, 0);
                                }, [n, A]),
                                C = (0, Ce.Tu)(e, t),
                                S = C.selfId,
                                B = C.blockOnGrabIds,
                                w = ((e) => eu.includes(e))(u) && !s && p,
                                y = b.computes.slots.filteredLength(m, E),
                                x = !f && u !== Ee.w.Battle && u !== Ee.w.Respawn;
                            return i().createElement(
                                'div',
                                {
                                    id: c ? ve : S,
                                    className: r()(
                                        Qt.base,
                                        l,
                                        Qt[`base__${u}`],
                                        !o && D && Qt.base__selected,
                                        f && Qt.base__compare,
                                        s && Qt.base__disabled,
                                    ),
                                    ref: F,
                                },
                                w && i().createElement('div', { className: Qt.attention }),
                                x &&
                                    i().createElement(
                                        'div',
                                        { className: Qt.label },
                                        i().createElement(De, {
                                            text: R.strings.tank_setup.section.shells(),
                                            parentRef: F,
                                            show: !D,
                                            panelType: u,
                                        }),
                                    ),
                                w &&
                                    i().createElement('div', {
                                        className: r()(
                                            Qt.border,
                                            2 === y && Qt.border__double,
                                            3 === y && Qt.border__triple,
                                        ),
                                    }),
                                i().createElement(Jt, {
                                    groupIndex: m,
                                    sectionIndex: E,
                                    panelType: u,
                                    onSelected: v,
                                    isSelected: D,
                                    isCompare: f,
                                    syncInitiator: h,
                                    blockOnGrabIds: B,
                                    isDisabled: s,
                                    isSetupSwitching: c,
                                    setIsExitBlocked: _,
                                }),
                                Boolean(d) &&
                                    i().createElement(
                                        'div',
                                        { className: Qt.counter },
                                        i().createElement(me, { value: d, size: 'small', fadeInAnimation: !0 }),
                                    ),
                                s && i().createElement('div', { className: Qt.disabled }),
                            );
                        },
                    ),
                    uu = {
                        base: 'Sections_base_13',
                        section: 'Sections_section_35',
                        section__battle: 'Sections_section__battle_d3',
                        section__small: 'Sections_section__small_73',
                        section__extraSmall: 'Sections_section__extraSmall_5f',
                        section__first: 'Sections_section__first_e2',
                    };
                function nu() {
                    return (
                        (nu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        nu.apply(this, arguments)
                    );
                }
                const au = (0, M.Pi)(
                        ({
                            groupIndex: e,
                            panelType: t,
                            isDisabled: u = !1,
                            onActiveSlotChanged: n,
                            isBorderActive: a,
                            isChangeSetupIndex: s,
                            setIsExitBlocked: o,
                        }) => {
                            const l = (0, N.t)().model,
                                c = G(['section'], uu),
                                _ = l.computes.sections.IDs(e),
                                d = {
                                    panelType: t,
                                    isDisabled: u,
                                    onActiveSlotChanged: n,
                                    isBorderActive: a,
                                    sectionsIds: _,
                                    isChangeSetupIndex: s,
                                    setIsExitBlocked: o,
                                };
                            return i().createElement(
                                'div',
                                { className: uu.base },
                                K(l.computes.sections.length(e), (u) => {
                                    const n = l.computes.sections.section(e, u);
                                    if (!n.slots || !n.slots.length) return null;
                                    const a = r()(
                                        c.section,
                                        0 !== u && (0, oe.s$)(t) && uu.section__battle,
                                        0 === u && uu.section__first,
                                    );
                                    if (n.type === le.g9 || n.type === le.WI) {
                                        const t = n;
                                        return i().createElement(
                                            tu,
                                            nu({}, t, d, {
                                                groupIndex: e,
                                                sectionIndex: u,
                                                isSetupSwitching: s,
                                                key: `${n.name}${e}${n.slots.length}`,
                                                classMix: a,
                                            }),
                                        );
                                    }
                                    return i().createElement(
                                        $t,
                                        nu({}, n, d, {
                                            groupIndex: e,
                                            sectionIndex: u,
                                            isSetupSwitching: s,
                                            key: `${n.name}${e}${n.slots.length}`,
                                            classMix: a,
                                        }),
                                    );
                                }),
                            );
                        },
                    ),
                    iu = 'KeyboardKey_base_57',
                    su = 'KeyboardKey_back_43',
                    ru = i().memo(({ text: e }) =>
                        i().createElement('div', { className: iu }, i().createElement('div', { className: su }, e)),
                    ),
                    ou = 'SetupSwitchHotkey_base_4c',
                    lu = 'SetupSwitchHotkey_hotKeyWrapper_8d',
                    cu = 'SetupSwitchHotkey_plusWrapper_f0',
                    _u = 'SetupSwitchHotkey_plus_f0',
                    du = 'SetupSwitchHotkey_plus__horizontal_e0',
                    mu = 'SetupSwitchHotkey_plus__vertical_5b',
                    Eu = i().memo(({ hotKeys: e }) =>
                        i().createElement(
                            'div',
                            { className: ou },
                            e.map((e, t) => {
                                if (!e) return null;
                                const u = e.value;
                                return 0 === t
                                    ? i().createElement(ru, { key: t, text: u })
                                    : i().createElement(
                                          'div',
                                          { key: t, className: lu },
                                          i().createElement(
                                              'div',
                                              { className: cu },
                                              i().createElement('div', { className: `${_u} ${du}` }),
                                              i().createElement('div', { className: `${_u} ${mu}` }),
                                          ),
                                          i().createElement(ru, { text: u }),
                                      );
                            }),
                        ),
                    ),
                    bu = {
                        base: 'Group_base_70',
                        wrapper: 'Group_wrapper_07',
                        switch: 'Group_switch_ff',
                        switch__battle: 'Group_switch__battle_c0',
                        switch__small: 'Group_switch__small_5e',
                        switch__extraSmall: 'Group_switch__extraSmall_ec',
                        prebattleSwitchIndicator: 'Group_prebattleSwitchIndicator_2e',
                        hint: 'Group_hint_99',
                        hint__disabled: 'Group_hint__disabled_6a',
                    };
                function gu() {
                    return (
                        (gu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        gu.apply(this, arguments)
                    );
                }
                const pu = R.strings.tank_setup.tooltips.prebattleSwitchIndicator,
                    Au = (e) => e.setupSelector.hotKeys,
                    hu = (0, M.Pi)(
                        ({
                            groupIndex: e,
                            sectionProps: t,
                            isSetupSwitching: u,
                            setSetupSwitching: n,
                            handleSetupSwitching: a,
                        }) => {
                            const s = G(['switch'], bu),
                                o = (0, N.t)().model,
                                l = o.root.get().isDisabled,
                                c = o.computes.groups.group(e);
                            return i().createElement(
                                'div',
                                { key: c.groupId, className: bu.base },
                                i().createElement(
                                    'div',
                                    { className: bu.wrapper },
                                    i().createElement(
                                        re,
                                        ((e, t) => ({ index: e.currentIndex, setSetupSwitching: t }))(c, n),
                                        i().createElement(au, gu({}, t, { groupIndex: e, isChangeSetupIndex: u })),
                                    ),
                                    c.setupSelector.isSwitchEnabled &&
                                        i().createElement(
                                            'div',
                                            { className: r()(s.switch, (0, oe.iN)(t.panelType) && bu.switch__battle) },
                                            i().createElement(te._, {
                                                states: c.setupSelector.states,
                                                onClick: a,
                                                totalCount: c.totalCount,
                                                currentIndex: c.currentIndex,
                                                groupId: c.groupId,
                                                isDisabled: t.isDisabled,
                                            }),
                                            c.setupSelector.isPrebattleSwitchDisabled &&
                                                i().createElement(
                                                    ee,
                                                    {
                                                        header: pu.title(),
                                                        body: String(pu.desc.$dyn(`c_${c.groupId}`)),
                                                    },
                                                    i().createElement('div', {
                                                        className: bu.prebattleSwitchIndicator,
                                                    }),
                                                ),
                                        ),
                                ),
                                ((_ = c),
                                ((d = t.panelType) === Ee.w.Battle || d === Ee.w.Respawn) &&
                                    _.setupSelector.isSwitchEnabled &&
                                    Au(_) &&
                                    i().createElement(
                                        'div',
                                        { className: r()(bu.hint, l && bu.hint__disabled) },
                                        i().createElement(Eu, { hotKeys: Au(c) }),
                                    )),
                            );
                            var _, d;
                        },
                    ),
                    Fu = 'Groups_base_de',
                    fu = (0, M.Pi)(
                        ({ sectionProps: e, isSetupSwitching: t, isReady: u, setSetupSwitching: n, children: s }) => {
                            const r = (0, N.t)(),
                                o = r.model,
                                l = r.controls,
                                c = o.vehicleInfo.get(),
                                _ = l.changeSetupIndex,
                                d = null == c ? void 0 : c.vehicleName;
                            ((0, a.useEffect)(() => {
                                (e.panelType !== Ee.w.Hangar && e.panelType !== Ee.w.Setup) || !u || n(!1);
                            }, [u, e.panelType, n]),
                                (0, a.useEffect)(() => {
                                    e.panelType === Ee.w.Respawn && n(!1);
                                }, [d, e.panelType, n]));
                            const m = (0, a.useCallback)(
                                (t) => {
                                    (e.panelType === Ee.w.Respawn && n(!0), _(t));
                                },
                                [_, e.panelType, n],
                            );
                            return i().createElement(
                                'div',
                                { className: Fu },
                                K(o.computes.groups.length(), (u) =>
                                    i().createElement(hu, {
                                        key: `group-${u}`,
                                        sectionProps: e,
                                        groupIndex: u,
                                        isSetupSwitching: t,
                                        setSetupSwitching: n,
                                        handleSetupSwitching: m,
                                    }),
                                ),
                                s,
                            );
                        },
                    );
                function Du() {
                    return (
                        (Du =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Du.apply(this, arguments)
                    );
                }
                const vu = ({ children: e, tooltipArgs: t, className: u }) => {
                        if (!t) return e;
                        const n = i().createElement('div', { className: u }, e);
                        if (t.header || t.body) return i().createElement(ee, t, n);
                        const a = t.contentId;
                        return a
                            ? i().createElement(Z.u, Du({}, t, { contentId: a }), n)
                            : i().createElement(Ke.t, t, n);
                    },
                    Cu = 'RoleSkillSlot_base_c4',
                    Su = 'RoleSkillSlot_icon_79',
                    Bu = ({ roleSkill: e, tooltipId: t, tooltipHeader: u, tooltipBody: n, className: s }) => {
                        const o = (0, a.useMemo)(
                            () => ({
                                args: { tooltipId: t, roleSkill: e, header: u, body: n, hasHtmlContent: !0 },
                                header: u,
                                body: n,
                                ignoreShowDelay: !0,
                            }),
                            [e, u, n, t],
                        );
                        return i().createElement(
                            vu,
                            { tooltipArgs: o, className: r()(Cu, s) },
                            i().createElement('div', {
                                className: Su,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                },
                            }),
                        );
                    },
                    wu = 'SlotGlow_base_40',
                    yu = 'SlotGlow_glow_a9',
                    xu = 'SlotGlow_glow__initialized_8d',
                    Iu = 'SlotGlow_glow__shown_f2',
                    Tu = 'SlotGlow_glow__hidden_94',
                    ku = (0, a.memo)(({ slotOffset: e, slotWidth: t, isAnimationRunning: u }) => {
                        const n = (0, a.useState)({ offset: e, slotWidth: t }),
                            s = n[0],
                            o = n[1],
                            l = (0, a.useRef)({ initialized: !1, offset: e, slotWidth: t });
                        ((0, a.useEffect)(() => {
                            let u = l.current.initialized;
                            (!u && e && ((u = !0), o({ offset: e, slotWidth: t })),
                                (l.current = { initialized: u, offset: e, slotWidth: t }));
                        }, [e, t]),
                            (0, a.useEffect)(() => {
                                u || o(l.current);
                            }, [u]));
                        const c = (0, a.useMemo)(() => {
                                const e = s.slotWidth + 25;
                                return { left: s.offset, width: e, backgroundSize: `${S.O.view.pxToRem(e)}rem 100%` };
                            }, [s.offset, s.slotWidth]),
                            _ = !u && s.offset === l.current.offset,
                            d = r()(yu, l.current.initialized && xu, _ ? Iu : Tu);
                        return i().createElement(
                            'div',
                            { className: wu },
                            i().createElement('div', { className: d, style: c }),
                        );
                    }),
                    Ou = (0, M.Pi)(
                        ({
                            show: e = !0,
                            isReady: t = !0,
                            panelType: u,
                            isDisabled: n = !1,
                            onResize: s,
                            setIsExitBlocked: o,
                        }) => {
                            const l = (0, N.t)(),
                                c = l.model,
                                _ = l.controls,
                                d = c.ammunitionPanel.get(),
                                m = d.isSetupSwitchInProgress,
                                E = d.syncInitiator,
                                b = c.roleSkillSlot.get(),
                                g = (0, a.useState)(!1),
                                p = g[0],
                                A = g[1],
                                h = (0, a.useRef)(!1),
                                F = (0, a.useState)({ slotWidth: 0, slotOffset: 0 }),
                                f = F[0],
                                D = F[1],
                                v = (0, a.useState)(!1),
                                C = v[0],
                                S = v[1],
                                B = (0, a.useRef)(null),
                                w = (0, a.useContext)(x),
                                y = (0, a.useRef)({
                                    element: null,
                                    generation: 0,
                                    slotIndex: null,
                                    sectionIndex: null,
                                }),
                                I = (0, a.useCallback)(
                                    (e, t) => {
                                        if (p || m || u !== Ee.w.Hangar) return;
                                        const n = t || { width: 0, height: 0, offsetX: 0, offsetY: 0 };
                                        (_.sectionResized(Object.assign({ sectionType: e }, n)),
                                            w && (w.freeze(), w.resize()));
                                    },
                                    [p, m, u, _, w],
                                ),
                                k = (0, a.useCallback)(
                                    (e) => {
                                        I('main', e);
                                    },
                                    [I],
                                );
                            (j(B, k, !0, [E]), (0, a.useEffect)(() => () => k(), [k]));
                            const O = (0, a.useCallback)(() => {
                                    S(!1);
                                }, []),
                                R = (0, a.useCallback)(() => {
                                    if (y.current.element && B.current) {
                                        const e = y.current.element.getBoundingClientRect(),
                                            t = B.current.getBoundingClientRect();
                                        D({ slotWidth: e.width, slotOffset: e.left - t.left + 0.5 * e.width });
                                    }
                                }, []),
                                L = (0, a.useCallback)(
                                    (e, t, u) => {
                                        if (e.current && B.current) {
                                            const n = ((e, t, u) =>
                                                e !== u.current.slotIndex || t !== u.current.sectionIndex)(u, t, y);
                                            ((y.current.element = e.current),
                                                (y.current.slotIndex = u),
                                                (y.current.sectionIndex = t),
                                                h.current && n ? S(!0) : (h.current = !0),
                                                y.current.generation && R());
                                        }
                                    },
                                    [R],
                                ),
                                M = (0, a.useCallback)(
                                    () =>
                                        T(() => {
                                            ((y.current.generation += 1), R());
                                        }),
                                    [y, R],
                                );
                            ((0, a.useEffect)(() => T(M), [M]),
                                (0, a.useEffect)(
                                    () => (
                                        engine.on('clientResized', M),
                                        () => {
                                            engine.off('clientResized', M);
                                        }
                                    ),
                                    [M],
                                ));
                            const P = f.slotWidth,
                                H = f.slotOffset,
                                $ = r()(z.base, !t && z.base__locked, !e && z.base__hidden, n && z.base__disabled),
                                W = r()(z.border, !C && z.border__hidden),
                                U = u === Ee.w.Setup || u === Ee.w.Compare,
                                X = {
                                    panelType: u,
                                    isDisabled: n,
                                    onActiveSlotChanged: L,
                                    isBorderActive: C,
                                    setIsExitBlocked: o,
                                };
                            (0, a.useEffect)(() => {
                                null == s || s();
                            }, [s, b.roleSkill]);
                            const q = G(['roleSkillSlot'], z);
                            return i().createElement(
                                'div',
                                { ref: B, className: $ },
                                U &&
                                    i().createElement(ku, {
                                        key: y.current.generation,
                                        slotOffset: H,
                                        slotWidth: P,
                                        isAnimationRunning: C,
                                    }),
                                i().createElement(
                                    fu,
                                    { isSetupSwitching: m || p, sectionProps: X, isReady: t, setSetupSwitching: A },
                                    b.roleSkill &&
                                        i().createElement(Bu, {
                                            roleSkill: b.roleSkill,
                                            tooltipId: b.tooltipId,
                                            tooltipHeader: b.tooltipHeader,
                                            tooltipBody: b.tooltipBody,
                                            className: r()(z.roleSkillSlot, z[`roleSkillSlot__${u}`], q.roleSkillSlot),
                                        }),
                                ),
                                U &&
                                    i().createElement(
                                        'div',
                                        { className: W },
                                        i().createElement(V, { slotWidth: P, slotOffset: H, onAnimationEnd: O }),
                                    ),
                            );
                        },
                    ),
                    Ru = 'AmmunitionPanelApp_base_aa',
                    Lu = 'AmmunitionPanelApp_base__hidden_c1',
                    Mu = (0, M.Pi)(() => {
                        const e = (0, N.t)(),
                            t = e.model,
                            u = e.controls,
                            n = t.root.get(),
                            s = n.isDisabled,
                            o = n.isReady;
                        (0, O.gd)(L.n.ESCAPE, u.escKeyDown);
                        const l = (0, a.useState)(!0),
                            c = l[0],
                            _ = l[1],
                            d = (function (e, t = []) {
                                const u = (0, a.useRef)(!1);
                                return (0, a.useCallback)(() => {
                                    u.current || (e(), (u.current = !0));
                                }, t);
                            })(() => {
                                S.O.view.setSidePaddingsRem({ left: 120, right: 120, bottom: 45, top: 65 });
                            });
                        return (
                            (0, a.useEffect)(() => {
                                if (o) return T(() => T(() => _(!1)));
                                _(!0);
                            }, [o]),
                            (0, w.b)(() => {
                                k.displayStatusIs.shown()
                                    ? S.O.view.freezeTextureBeforeResize()
                                    : k.displayStatusIs.hidden() && S.O.view.resize(1, 1);
                            }),
                            i().createElement(I, { onResize: d }, (e, t) =>
                                i().createElement(
                                    'div',
                                    { ref: e, className: r()(Ru, c && Lu) },
                                    i().createElement(Ou, {
                                        panelType: Ee.w.Hangar,
                                        isDisabled: s,
                                        isReady: o,
                                        onResize: t,
                                    }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    C().render(
                        i().createElement(N.k, null, i().createElement(D, null, i().createElement(Mu, null))),
                        document.getElementById('root'),
                    );
                });
            },
            3521: (e, t, u) => {
                'use strict';
                function n(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return a(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return a(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function a(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                u.d(t, { WL: () => r, aR: () => o, jZ: () => i, yG: () => s });
                const i = (e, t = []) => {
                        const u = document.getElementById('root');
                        u && (u.style.cursor = e ? 'grabbing' : 'default');
                        for (var a, i = n(t); !(a = i()).done; ) {
                            const t = a.value,
                                u = document.getElementById(t);
                            u && (u.style.pointerEvents = e ? 'none' : 'auto');
                        }
                    },
                    s = (e, t, u, n) => {
                        const a = u + t,
                            i = n - t;
                        return e < a ? a : e > i ? i : e;
                    },
                    r = (e, t, u) => {
                        let a = '',
                            i = 8e3;
                        for (var s, r = n(u); !(s = r()).done; ) {
                            const e = s.value,
                                u = Math.abs(e.centerX - t);
                            u < i && ((a = e.id), (i = u));
                        }
                        return a;
                    },
                    o = (e, t) => {
                        const u = t.find((t) => t.id === e);
                        return u ? u.centerX : 0;
                    };
            },
            1820: (e, t, u) => {
                'use strict';
                let n, a;
                (u.d(t, { m: () => a }),
                    (function (e) {
                        ((e.Waiting = 'waiting'),
                            (e.Active = 'active'),
                            (e.InEffect = 'in'),
                            (e.Rollback = 'rollback'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.Ready = 'ready'),
                            (e.DragStart = 'start'),
                            (e.Drag = 'drag'),
                            (e.Drop = 'drop'),
                            (e.DropExit = 'exit'));
                    })(a || (a = {})));
            },
            4301: (e, t, u) => {
                'use strict';
                u.d(t, { iN: () => i, j2: () => a, s$: () => s });
                var n = u(4231);
                const a = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
                    i = (e) => e === n.w.Battle || e === n.w.Prebattle,
                    s = (e) => i(e) || e === n.w.Respawn;
            },
            7626: (e, t, u) => {
                'use strict';
                u.d(t, { YR: () => o, UW: () => c, Tu: () => l });
                var n = u(7363),
                    a = u(2189),
                    i = u(7727),
                    s = u(3521),
                    r = u(1820);
                const o = (e) => `panel-${e}-section`,
                    l = (e, t) => {
                        const u = o(e),
                            n = t.filter((e) => e !== u);
                        return { selfId: u, blockOnGrabIds: [a.yy, ...n] };
                    },
                    c = ({ baseId: e, slotsLength: t, handleSwap: u, setIsExitBlocked: a, syncInitiator: o }) => {
                        const l = ((e, t, u) => {
                                const a = (0, n.useRef)([]),
                                    o = (0, n.useRef)({ dragId: '', dropId: '', prevPotentialDropId: '' }),
                                    l = (0, n.useState)({ activeDragId: '', potentialDropId: '' }),
                                    c = l[0],
                                    _ = l[1],
                                    d = (0, n.useCallback)((e) => {
                                        o.current.dropId ||
                                            o.current.prevPotentialDropId ||
                                            ((o.current.prevPotentialDropId = e),
                                            _({ activeDragId: e, potentialDropId: e }));
                                    }, []),
                                    m = (0, n.useCallback)((e, t) => {
                                        if (a.current) {
                                            const u = (0, s.WL)(e, t, a.current);
                                            u !== o.current.prevPotentialDropId &&
                                                ((o.current.prevPotentialDropId = u),
                                                _({ activeDragId: e, potentialDropId: u }));
                                        }
                                    }, []),
                                    E = (0, n.useCallback)((e, t) => {
                                        if (a.current && t) {
                                            const u = o.current,
                                                n = (0, s.WL)(e, t, a.current);
                                            ((u.dropId = n),
                                                (u.dragId = e),
                                                (u.prevPotentialDropId = ''),
                                                _({ activeDragId: e, potentialDropId: '' }),
                                                n !== e && (0, i.G)('cons_equipment_swipe'));
                                        }
                                    }, []),
                                    b = (0, n.useCallback)(() => {
                                        const e = o.current,
                                            t = e.dragId,
                                            u = e.dropId,
                                            n = e.prevPotentialDropId;
                                        (t || u || n) &&
                                            ((o.current = { dragId: '', dropId: '', prevPotentialDropId: '' }),
                                            _({ activeDragId: '', potentialDropId: '' }));
                                    }, []),
                                    g = (0, n.useCallback)(
                                        (e) => {
                                            const t = o.current.dropId;
                                            t && t !== e ? u(e, t) : b();
                                        },
                                        [b, u],
                                    ),
                                    p = (0, n.useCallback)((e, t) => {
                                        const u = a.current.find((t) => t.id === e);
                                        u && t && (u.centerX = t);
                                    }, []),
                                    A = (0, n.useCallback)(
                                        (e, t) => {
                                            const u = t.dragId,
                                                n = t.currentCenterX;
                                            switch (e) {
                                                case r.m.Ready:
                                                    return p(u, n);
                                                case r.m.DragStart:
                                                    return d(u);
                                                case r.m.Drag:
                                                    return m(u, n);
                                                case r.m.Drop:
                                                    return E(u, n);
                                                case r.m.DropExit:
                                                    return g(u);
                                                default:
                                                    return void console.warn('Unknown grabber action', e);
                                            }
                                        },
                                        [d, m, E, g, p],
                                    );
                                return (
                                    (0, n.useEffect)(() => {
                                        if (e !== a.current.length) {
                                            const u = new Array(e).fill(null);
                                            a.current = u.map((e, u) => ({ id: `${t}-${u}`, centerX: 0 }));
                                        }
                                    }, [e, t]),
                                    {
                                        dragState: c,
                                        handleGrabberAction: A,
                                        getForceCenterX: (0, n.useCallback)((e) => {
                                            const t = o.current,
                                                u = t.dragId,
                                                n = t.dropId;
                                            return e === u
                                                ? (0, s.aR)(n, a.current)
                                                : e === n
                                                  ? (0, s.aR)(u, a.current)
                                                  : 0;
                                        }, []),
                                        resetDragResults: b,
                                    }
                                );
                            })(t, e, u),
                            c = l.dragState,
                            _ = l.handleGrabberAction,
                            d = l.getForceCenterX,
                            m = l.resetDragResults,
                            E = (0, n.useCallback)(
                                (e, t) => {
                                    if (a)
                                        switch (e) {
                                            case r.m.DragStart:
                                            case r.m.Drag:
                                                a(!0);
                                                break;
                                            default:
                                                a(!1);
                                        }
                                    _(e, t);
                                },
                                [_, a],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                a && a(!1);
                            }, [a]),
                            (0, n.useEffect)(() => m, [o, m]),
                            { handleGrabberAction: E, dragState: c, getForceCenterX: d }
                        );
                    };
            },
            4231: (e, t, u) => {
                'use strict';
                let n;
                (u.d(t, { w: () => n }),
                    (function (e) {
                        ((e.Hangar = 'hangar'),
                            (e.Setup = 'setup'),
                            (e.Compare = 'compare'),
                            (e.Battle = 'battle'),
                            (e.Respawn = 'respawn'),
                            (e.Prebattle = 'prebattle'));
                    })(n || (n = {})));
            },
            3220: (e, t, u) => {
                'use strict';
                u.d(t, { k: () => c, t: () => _ });
                var n = u(3215),
                    a = u(9480),
                    i = u(3946),
                    s = u(4598),
                    r = u(4301),
                    o = u(7626);
                const l = (0, n.q3)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    ammunitionPanel: e.object('ammunitionPanel'),
                                    roleSkillSlot: e.object('roleSkillSlot'),
                                    vehicleInfo: e.object('vehicleInfo'),
                                    sectionGroups: e.array('ammunitionPanel.sectionGroups'),
                                    lastSlotAction: e.object('lastSlotAction'),
                                },
                                u = (0, i.Om)(() => t.sectionGroups.get().length),
                                n = (0, i.Om)(
                                    (e) => {
                                        const u = a.U2(t.sectionGroups.get(), e);
                                        if (!u) throw Error(`No ammunition section group found with index: ${e}`);
                                        return Object.assign({}, u, {
                                            sections: a.UI(u.sections, (e) =>
                                                Object.assign({}, e, {
                                                    slots: a.UI(e.slots, (e) => Object.assign({}, e)),
                                                }),
                                            ),
                                            setupSelector: Object.assign({}, u.setupSelector, {
                                                states: a.UI(u.setupSelector.states, (e) => e),
                                            }),
                                        });
                                    },
                                    { equals: s.jv },
                                ),
                                l = (0, i.Om)(() => a.u4(t.sectionGroups.get(), (e, t) => e + t.sections.length, 0)),
                                c = (0, i.Om)((e) => n(e).sections.length),
                                _ = (0, i.Om)(
                                    (e, t) => {
                                        const u = n(e),
                                            i = a.U2(u.sections, t);
                                        if (!i) throw Error(`No ammunition section found with index: ${t}`);
                                        return i;
                                    },
                                    { equals: s.jv },
                                ),
                                d = (0, i.Om)((e, t) => _(e, t).slots.length),
                                m = (0, i.Om)((e, t) => {
                                    const u = _(e, t).slots;
                                    return a.hX(u, (e) => Boolean(e) && !(0, r.j2)(e)).length;
                                }),
                                E = (0, i.Om)((e, t) => {
                                    const u = _(e, t).slots;
                                    return a.G(u, (e) => e.intCD > 0);
                                }),
                                b = (0, i.Om)(
                                    (e, t, u) => {
                                        const n = _(e, t),
                                            i = a.U2(n.slots, u);
                                        if (!i) throw Error(`No ammunition slot found with index: ${u}`);
                                        return i;
                                    },
                                    { equals: s.jv },
                                ),
                                g = (0, i.Om)(
                                    (e) => {
                                        const t = n(e).sections;
                                        return a.v(t, (e) => (0, o.YR)(e.type));
                                    },
                                    { equals: s.jv },
                                ),
                                p = (0, i.Om)(
                                    (e, t, u) => {
                                        const n = b(e, t, u);
                                        if (!n) throw Error(`No ammunition slot found with index: ${u}`);
                                        if (!n.specializations) throw Error('Selected slot have no specializations');
                                        return Object.assign({}, n.specializations, {
                                            specializations: a.UI(n.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        });
                                    },
                                    { equals: s.jv },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    groups: { length: u, group: n },
                                    sections: { allSectionsLength: l, length: c, section: _, IDs: g },
                                    slots: { length: d, filteredLength: m, slot: b, existFilled: E },
                                    specializations: p,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            sectionSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionSelect',
                            ),
                            dragDropSwap: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onDragDropSwap',
                            ),
                            slotClear: e.createCallback((e) => Object.assign({}, e), 'ammunitionPanel.onSlotClear'),
                            sectionResized: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionResized',
                            ),
                            changeSetupIndex: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onChangeSetupIndex',
                            ),
                            specializationSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSpecializationSelect',
                            ),
                            escKeyDown: e.createCallbackNoArgs('onEscKeyDown'),
                        }),
                    ),
                    c = l[0],
                    _ = l[1];
            },
            1922: (e, t, u) => {
                'use strict';
                u.d(t, { cJ: () => n });
                (u(6483), u(7739), u(7363), u(1960));
                let n;
                !(function (e) {
                    ((e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge'));
                })(n || (n = {}));
            },
            3267: (e, t, u) => {
                'use strict';
                u.d(t, { J: () => i });
                var n = u(7363),
                    a = u.n(n);
                const i = ({ wrapper: e, children: t, when: u, withProps: n }) =>
                    u ? a().createElement(e, n, t) : a().createElement(a().Fragment, null, t);
            },
            2189: (e, t, u) => {
                'use strict';
                u.d(t, { yy: () => n });
                (u(6483), u(3138), u(7363));
                (u(4598), u(3815), u(8526), u(5521), u(7727), u(1922));
                const n = 'setup-content';
            },
            906: (e, t, u) => {
                'use strict';
                u.d(t, { r: () => o });
                var n = u(7363),
                    a = u.n(n),
                    i = u(6483),
                    s = u.n(i);
                const r = {
                        base: 'Bonus_base_dd',
                        base__fitting: 'Bonus_base__fitting_d1',
                        icon: 'Bonus_icon_3b',
                        icon__battleBooster: 'Bonus_icon__battleBooster_66',
                        icon__battleBoosterReplace: 'Bonus_icon__battleBoosterReplace_8d',
                        icon__equipmentPlus: 'Bonus_icon__equipmentPlus_48',
                        icon__builtInEquipment: 'Bonus_icon__builtInEquipment_77',
                        icon__equipmentModernized: 'Bonus_icon__equipmentModernized_76',
                        icon__equipmentTrophyBasic: 'Bonus_icon__equipmentTrophyBasic_a4',
                        icon__equipmentTrophyUpgraded: 'Bonus_icon__equipmentTrophyUpgraded_6d',
                    },
                    o = a().memo(({ isTemporary: e, overlayType: t, overlaySource: u }) => {
                        const i = s()(r.base, e && r.base__fitting),
                            o = s()(r.icon, r[`icon__${t}`]),
                            l = (0, n.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]);
                        return a().createElement(
                            'div',
                            { className: i },
                            a().createElement('div', { className: o, style: l }),
                        );
                    });
            },
            8253: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => o });
                var n = u(7363),
                    a = u.n(n),
                    i = u(6483),
                    s = u.n(i);
                const r = {
                        base: 'Container_base_9a',
                        base__grabbing: 'Container_base__grabbing_73',
                        base__hangar: 'Container_base__hangar_ab',
                        base__setup: 'Container_base__setup_1c',
                        base__compare: 'Container_base__compare_0b',
                        base__selected: 'Container_base__selected_17',
                        base__dragIn: 'Container_base__dragIn_a6',
                        base__dragInActive: 'Container_base__dragInActive_e5',
                        base__toggle: 'Container_base__toggle_94',
                        base__disabled: 'Container_base__disabled_22',
                    },
                    o = ({
                        activeDragId: e,
                        slotType: t,
                        isSelected: u,
                        isBorderActive: n,
                        children: i,
                        panelType: o,
                        isDisabled: l,
                        isPotentialDrop: c,
                        onClick: _,
                    }) => {
                        const d = s()(
                            r.base,
                            !e && r[`base__${o}`],
                            t && r[`base__${t}`],
                            u && !c && !n && r.base__selected,
                            c && r['base__dragIn' + (u ? 'Active' : '')],
                            l && r.base__disabled,
                        );
                        return a().createElement('div', { className: d, onClick: _ }, i);
                    };
            },
            8598: (e, t, u) => {
                'use strict';
                u.d(t, { X: () => l });
                var n = u(7363),
                    a = u.n(n),
                    i = u(6483),
                    s = u.n(i);
                const r = 'Count_base_e4',
                    o = 'Count_base__zero_64',
                    l = ({ count: e }) => {
                        const t = s()(r, !e && o);
                        return a().createElement('div', { className: t }, e);
                    };
            },
            3141: (e, t, u) => {
                'use strict';
                u.d(t, { c: () => E });
                var n = u(6483),
                    a = u.n(n),
                    i = u(3977),
                    s = u(7363),
                    r = u.n(s),
                    o = u(906),
                    l = u(4105);
                const c = 'Inside_image_e5',
                    _ = 'Inside_image__fitting_11',
                    d = 'Inside_warning_e4',
                    m = 'Inside_change_5a',
                    E = ({
                        level: e,
                        overlayType: t,
                        isTemporary: u,
                        withAttention: n,
                        imageSource: E,
                        isIncompatible: b,
                    }) => {
                        const g = (0, s.useMemo)(() => {
                                const u = t === i.qm ? `${t}_${e}_overlay` : `${t}_overlay`;
                                return R.images.gui.maps.icons.quests.bonuses.small.$dyn(u);
                            }, [t, e]),
                            p = (0, s.useMemo)(() => ({ backgroundImage: `url(${E})` }), [E]),
                            A = !g && Boolean(t) && e;
                        return r().createElement(
                            'div',
                            null,
                            A && r().createElement(l.a, { level: e }),
                            r().createElement('div', { className: a()(c, (u || n) && _), style: p }),
                            n && r().createElement('div', { className: d }),
                            b && r().createElement('div', { className: m }),
                            g && r().createElement(o.r, { isTemporary: u, overlaySource: g, overlayType: t }),
                        );
                    };
            },
            4105: (e, t, u) => {
                'use strict';
                u.d(t, { a: () => o });
                var n = u(7363),
                    a = u.n(n),
                    i = u(6483),
                    s = u.n(i);
                const r = {
                        base: 'Level_base_57',
                        base__level1: 'Level_base__level1_c4',
                        base__level2: 'Level_base__level2_9c',
                        base__level3: 'Level_base__level3_39',
                        base__level4: 'Level_base__level4_e3',
                        base__level5: 'Level_base__level5_ea',
                        base__level6: 'Level_base__level6_5d',
                        base__level7: 'Level_base__level7_03',
                        base__level8: 'Level_base__level8_b5',
                        base__level9: 'Level_base__level9_d6',
                        base__level10: 'Level_base__level10_89',
                    },
                    o = ({ level: e }) => {
                        const t = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_${e}`)})`,
                                }),
                                [e],
                            ),
                            u = s()(r.base, r[`base__level${e}`]);
                        return a().createElement('div', { style: t, className: u });
                    };
            },
            4814: (e, t, u) => {
                'use strict';
                u.d(t, { G: () => b });
                var n = u(9480),
                    a = u(7363),
                    i = u.n(a),
                    s = u(1922),
                    r = u(6483),
                    o = u.n(r),
                    l = u(3457),
                    c = u(7078);
                const _ = {
                        base: 'Specialization_base_ec',
                        base__tiny: 'Specialization_base__tiny_fe',
                        base__small: 'Specialization_base__small_a3',
                        base__medium: 'Specialization_base__medium_85',
                        base__large: 'Specialization_base__large_07',
                        base__huge: 'Specialization_base__huge_33',
                        base__setup: 'Specialization_base__setup_5e',
                        base__correct: 'Specialization_base__correct_4c',
                        glow: 'Specialization_glow_f0',
                        icon: 'Specialization_icon_3a',
                        icon__tiny: 'Specialization_icon__tiny_05',
                        icon__small: 'Specialization_icon__small_cf',
                        icon__medium: 'Specialization_icon__medium_ed',
                        icon__large: 'Specialization_icon__large_98',
                        icon__huge: 'Specialization_icon__huge_f7',
                        specializationWrapper: 'Specialization_specializationWrapper_bf',
                        specializationButton: 'Specialization_specializationButton_45',
                    },
                    d = ({
                        name: e,
                        isCorrect: t,
                        isSpecializationActive: u = !0,
                        isDynamic: n,
                        mediaSize: r,
                        isClickable: d,
                        onSpecializationClick: m,
                        index: E,
                    }) => {
                        const b = r !== s.cJ.None,
                            g = (0, a.useCallback)(() => {
                                d && u && m && m(E);
                            }, [E, d, u, m]),
                            p = (0, a.useMemo)(() => {
                                let u = '';
                                b && (u = (r === s.cJ.Large || r === s.cJ.Huge ? s.cJ.Large : s.cJ.Medium) + '_');
                                const n = `${u}${e}_${t ? 'on' : 'off'}`,
                                    a = R.images.gui.maps.icons.specialization.$dyn(n);
                                return a && { backgroundImage: `url(${a})` };
                            }, [e, t, r, b]),
                            A = (0, a.useMemo)(
                                () => ({ spec: e, isDyn: n, isClickable: d, tooltip: 'hangarSlotSpec' }),
                                [e, n, d],
                            );
                        if (!p) return null;
                        const h = o()(
                                `specialization-${e}`,
                                _.base,
                                b && _[`base__${r}`],
                                u && _.base__setup,
                                t && _.base__correct,
                            ),
                            F = o()(_.icon, b && _[`icon__${r}`]),
                            f = b ? '' : _.specializationWrapper,
                            D = i().createElement(
                                'div',
                                { key: e, className: h },
                                i().createElement('div', { className: _.glow }),
                                i().createElement('div', { className: F, style: p }),
                            );
                        return i().createElement(
                            c.t,
                            { args: A },
                            d && u
                                ? i().createElement(
                                      l.u5,
                                      {
                                          size: l.qE.small,
                                          type: l.L$.ghost,
                                          mixClass: _.specializationButton,
                                          onClick: g,
                                      },
                                      D,
                                  )
                                : i().createElement('div', { className: f }, D),
                        );
                    },
                    m = 'Specializations_base_ab';
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                const b = ({
                    specializations: e,
                    isSpecializationActive: t = !0,
                    isDynamic: u,
                    mediaSize: a = s.cJ.None,
                    activeSpecsMask: r,
                    onSpecializationClick: o,
                }) =>
                    e.length
                        ? i().createElement(
                              'div',
                              { className: m, key: r },
                              n.UI(e, (e, n) =>
                                  i().createElement(
                                      d,
                                      E({ index: n, key: e.name }, e, {
                                          isSpecializationActive: t,
                                          isDynamic: u,
                                          mediaSize: a,
                                          onSpecializationClick: o,
                                      }),
                                  ),
                              ),
                          )
                        : null;
            },
            9605: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => A });
                var n = u(7363),
                    a = u.n(n),
                    i = u(6483),
                    s = u.n(i);
                let r;
                !(function (e) {
                    ((e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.WARNING = 1)] = 'WARNING'));
                })(r || (r = {}));
                const o = 'SwitchButton_base_23',
                    l = 'SwitchButton_base__active_31',
                    c = 'SwitchButton_base__warning_71',
                    _ = 'SwitchButton_buttonBack_ce',
                    d = 'SwitchButton_buttonBackHovered_45',
                    m = 'SwitchButton_base__hovered_b4',
                    E = 'SwitchButton_buttonGlow_4c',
                    b = 'SwitchButton_buttonIcon_d3',
                    g = 'SwitchButton_buttonWarning_3f',
                    p = 'SwitchButton_number_8a',
                    A = ({ id: e, state: t, currentIndex: u, isHovered: i }) => {
                        const A = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url('${R.images.gui.maps.icons.tanksetup.panel.indexes.$dyn(`setup_${e + 1}`)}')`,
                                }),
                                [e],
                            ),
                            h = e === u,
                            F = !h && t === r.WARNING;
                        return a().createElement(
                            'div',
                            { className: s()(o, { [l]: h, [c]: F, [m]: i }) },
                            a().createElement('div', { className: _ }),
                            a().createElement('div', { className: d }),
                            a().createElement('div', { className: b }),
                            a().createElement('div', { className: E }),
                            a().createElement('div', { className: g }),
                            a().createElement('div', { style: A, className: p }),
                        );
                    };
            },
            9344: (e, t, u) => {
                'use strict';
                u.d(t, { _: () => m });
                var n = u(6483),
                    a = u.n(n),
                    i = u(9480),
                    s = u(7727),
                    r = u(7363),
                    o = u.n(r),
                    l = u(9605);
                const c = 'SwitchEquipment_base_1a',
                    _ = 'SwitchEquipment_base__disabled_73',
                    d = 'SwitchEquipment_cover_b3',
                    m = ({ onClick: e, totalCount: t, currentIndex: u, states: n, isDisabled: m, groupId: E }) => {
                        const b = (0, r.useRef)(null),
                            g = (0, r.useState)(!1),
                            p = g[0],
                            A = g[1],
                            h = (u + 1) % t,
                            F = (0, r.useCallback)(() => {
                                m || e({ groupId: E, currentIndex: h });
                            }, [E, m, h, e]),
                            f = (0, r.useCallback)(() => {
                                m || (A(!0), s.$.playHighlight());
                            }, [m]),
                            D = (0, r.useCallback)(() => {
                                m || A(!1);
                            }, [m]),
                            v = a()(c, m && _);
                        return o().createElement(
                            'div',
                            {
                                id: `switch-equipment-group-${E}`,
                                className: v,
                                onClick: F,
                                onMouseEnter: f,
                                onMouseLeave: D,
                                ref: b,
                            },
                            Array.from({ length: t }, (e, t) =>
                                o().createElement(l.U, {
                                    key: t,
                                    id: t,
                                    state: i.MH(n, t),
                                    currentIndex: u,
                                    isHovered: p,
                                }),
                            ),
                            m && o().createElement('div', { className: d }),
                        );
                    };
            },
            5918: (e, t, u) => {
                'use strict';
                u.d(t, { y: () => y });
                var n = u(4888),
                    a = u(7383),
                    i = u(1396),
                    s = u(3403),
                    r = u(7363),
                    o = u.n(r),
                    l = u(2558),
                    c = u(8934),
                    _ = u(3220),
                    d = u(5958);
                const m = 'BackEffects_shine_f6',
                    E = 'BackEffects_sparks_55',
                    b = 'BackEffects_nut_79',
                    g = 'BackEffects_wrench_5a',
                    p = { enterActive: 'BackEffects_shine__enterActive_54' },
                    A = { enterActive: 'BackEffects_sparks__enterActive_79' },
                    h = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    F = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    f = [n.dZ, n.sH],
                    D = o().memo(({ in: e, actionType: t }) =>
                        o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(
                                c.Z,
                                { in: e, timeout: d.Dp, classNames: p },
                                o().createElement('div', { className: m }),
                            ),
                            o().createElement(
                                c.Z,
                                { in: e, timeout: d.IG, classNames: A },
                                o().createElement('div', { className: E }),
                            ),
                            f.includes(t) &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        c.Z,
                                        { in: e, timeout: d.wx, classNames: h },
                                        o().createElement('div', { className: b }),
                                    ),
                                    o().createElement(
                                        c.Z,
                                        { in: e, timeout: d.Kz, classNames: F },
                                        o().createElement('div', { className: g }),
                                    ),
                                ),
                        ),
                    ),
                    v = 'ColorMask_base_60',
                    C = 'ColorMask_base__enterActive_62',
                    S = ({ inProp: e, maskImage: t }) =>
                        o().createElement(
                            c.Z,
                            { in: e, timeout: d.Qj, classNames: { enterActive: C } },
                            o().createElement('div', { className: v, style: { maskImage: `url(${t})` } }),
                        ),
                    B = {
                        base__exitLeft: 'SlotTransitions_base__exitLeft_d8',
                        'animation-left': 'SlotTransitions_animation-left_27',
                        base__exitLeftFade: 'SlotTransitions_base__exitLeftFade_53',
                        'animation-fade': 'SlotTransitions_animation-fade_ce',
                        base__enterRight: 'SlotTransitions_base__enterRight_bb',
                        'animation-right': 'SlotTransitions_animation-right_31',
                        base__enterRightFade: 'SlotTransitions_base__enterRightFade_63',
                        base__exitRight: 'SlotTransitions_base__exitRight_b9',
                        base__enterLeft: 'SlotTransitions_base__enterLeft_e9',
                        base__exitRightSwap: 'SlotTransitions_base__exitRightSwap_64',
                        'animation-right-long': 'SlotTransitions_animation-right-long_bd',
                        base__enterRightSwap: 'SlotTransitions_base__enterRightSwap_5e',
                        base__enterLeftSwap: 'SlotTransitions_base__enterLeftSwap_da',
                        'animation-left-long': 'SlotTransitions_animation-left-long_ec',
                        base__exitLeftSwap: 'SlotTransitions_base__exitLeftSwap_c3',
                        base__exitFade: 'SlotTransitions_base__exitFade_4c',
                        base__enterFade: 'SlotTransitions_base__enterFade_77',
                        base: 'SlotTransitions_base_6d',
                        base__enter: 'SlotTransitions_base__enter_54',
                        base__enterFitting: 'SlotTransitions_base__enterFitting_c7',
                        baseShells__exitLeft: 'SlotTransitions_baseShells__exitLeft_1e',
                        'animation-left-shells': 'SlotTransitions_animation-left-shells_0d',
                        baseShells__enterRight: 'SlotTransitions_baseShells__enterRight_66',
                        'animation-right-shells': 'SlotTransitions_animation-right-shells_7c',
                        baseShells__exitRight: 'SlotTransitions_baseShells__exitRight_e4',
                        baseShells__enterLeft: 'SlotTransitions_baseShells__enterLeft_94',
                        baseShells__exitRightSwap: 'SlotTransitions_baseShells__exitRightSwap_fd',
                        'animation-right-long-shells': 'SlotTransitions_animation-right-long-shells_41',
                        baseShells__enterRightSwap: 'SlotTransitions_baseShells__enterRightSwap_41',
                        baseShells__enterLeftSwap: 'SlotTransitions_baseShells__enterLeftSwap_19',
                        'animation-left-long-shells': 'SlotTransitions_animation-left-long-shells_00',
                        baseShells__exitLeftSwap: 'SlotTransitions_baseShells__exitLeftSwap_04',
                        baseShells__exitFade: 'SlotTransitions_baseShells__exitFade_1b',
                        baseShells__enterFade: 'SlotTransitions_baseShells__enterFade_72',
                        baseOptDevices__exitLeft: 'SlotTransitions_baseOptDevices__exitLeft_fe',
                        baseOptDevices__exitLeftFade: 'SlotTransitions_baseOptDevices__exitLeftFade_8a',
                        baseOptDevices__enterRight: 'SlotTransitions_baseOptDevices__enterRight_5d',
                        baseOptDevices__enterRightFade: 'SlotTransitions_baseOptDevices__enterRightFade_2c',
                        baseOptDevices__exitRight: 'SlotTransitions_baseOptDevices__exitRight_72',
                        baseOptDevices__enterLeft: 'SlotTransitions_baseOptDevices__enterLeft_0f',
                        baseOptDevices__exitRightSwap: 'SlotTransitions_baseOptDevices__exitRightSwap_09',
                        baseOptDevices__enterRightSwap: 'SlotTransitions_baseOptDevices__enterRightSwap_04',
                        baseOptDevices__enterLeftSwap: 'SlotTransitions_baseOptDevices__enterLeftSwap_52',
                        baseOptDevices__exitLeftSwap: 'SlotTransitions_baseOptDevices__exitLeftSwap_e9',
                        baseOptDevices__enterFitting: 'SlotTransitions_baseOptDevices__enterFitting_8b',
                        'animation-fitting': 'SlotTransitions_animation-fitting_24',
                        baseOptDevices__exitFittingRemove: 'SlotTransitions_baseOptDevices__exitFittingRemove_fc',
                        'animation-fitting-remove': 'SlotTransitions_animation-fitting-remove_e0',
                        baseOptDevices__exitActiveFitting: 'SlotTransitions_baseOptDevices__exitActiveFitting_d0',
                        baseOptDevices__exitDestroy: 'SlotTransitions_baseOptDevices__exitDestroy_c9',
                        'animation-destroy': 'SlotTransitions_animation-destroy_12',
                        baseOptDevices__enterDestroy: 'SlotTransitions_baseOptDevices__enterDestroy_19',
                        baseOptDevices__exitDemount: 'SlotTransitions_baseOptDevices__exitDemount_e3',
                        'animation-bright-up': 'SlotTransitions_animation-bright-up_8e',
                        'animation-demount': 'SlotTransitions_animation-demount_d8',
                        baseOptDevices__enterDemount: 'SlotTransitions_baseOptDevices__enterDemount_8a',
                        baseOptDevices__exitFade: 'SlotTransitions_baseOptDevices__exitFade_10',
                        baseOptDevices__enterFade: 'SlotTransitions_baseOptDevices__enterFade_cf',
                        baseOptDevices__enterDemountFade: 'SlotTransitions_baseOptDevices__enterDemountFade_57',
                        baseConsumables__exitLeft: 'SlotTransitions_baseConsumables__exitLeft_d9',
                        baseConsumables__exitLeftFade: 'SlotTransitions_baseConsumables__exitLeftFade_4f',
                        baseConsumables__enterRight: 'SlotTransitions_baseConsumables__enterRight_02',
                        baseConsumables__enterRightFade: 'SlotTransitions_baseConsumables__enterRightFade_c6',
                        baseConsumables__exitRight: 'SlotTransitions_baseConsumables__exitRight_39',
                        baseConsumables__enterLeft: 'SlotTransitions_baseConsumables__enterLeft_97',
                        baseConsumables__exitRightSwap: 'SlotTransitions_baseConsumables__exitRightSwap_8a',
                        baseConsumables__enterRightSwap: 'SlotTransitions_baseConsumables__enterRightSwap_28',
                        baseConsumables__enterLeftSwap: 'SlotTransitions_baseConsumables__enterLeftSwap_8e',
                        baseConsumables__exitLeftSwap: 'SlotTransitions_baseConsumables__exitLeftSwap_0e',
                        baseConsumables__enterFitting: 'SlotTransitions_baseConsumables__enterFitting_13',
                        baseConsumables__exitFittingRemove: 'SlotTransitions_baseConsumables__exitFittingRemove_01',
                        baseConsumables__exitActiveFitting: 'SlotTransitions_baseConsumables__exitActiveFitting_10',
                        baseConsumables__exitFade: 'SlotTransitions_baseConsumables__exitFade_5b',
                        baseConsumables__enterFade: 'SlotTransitions_baseConsumables__enterFade_bd',
                        baseBattleAbilities__exitLeft: 'SlotTransitions_baseBattleAbilities__exitLeft_52',
                        baseBattleAbilities__exitLeftFade: 'SlotTransitions_baseBattleAbilities__exitLeftFade_a9',
                        baseBattleAbilities__enterRight: 'SlotTransitions_baseBattleAbilities__enterRight_7b',
                        baseBattleAbilities__enterRightFade: 'SlotTransitions_baseBattleAbilities__enterRightFade_d3',
                        baseBattleAbilities__exitRight: 'SlotTransitions_baseBattleAbilities__exitRight_fc',
                        baseBattleAbilities__enterLeft: 'SlotTransitions_baseBattleAbilities__enterLeft_97',
                        baseBattleAbilities__exitRightSwap: 'SlotTransitions_baseBattleAbilities__exitRightSwap_7d',
                        baseBattleAbilities__enterRightSwap: 'SlotTransitions_baseBattleAbilities__enterRightSwap_e5',
                        baseBattleAbilities__enterLeftSwap: 'SlotTransitions_baseBattleAbilities__enterLeftSwap_ca',
                        baseBattleAbilities__exitLeftSwap: 'SlotTransitions_baseBattleAbilities__exitLeftSwap_c0',
                        baseBattleAbilities__enterFitting: 'SlotTransitions_baseBattleAbilities__enterFitting_de',
                        baseBattleAbilities__exitFittingRemove:
                            'SlotTransitions_baseBattleAbilities__exitFittingRemove_bc',
                        baseBattleAbilities__exitActiveFitting:
                            'SlotTransitions_baseBattleAbilities__exitActiveFitting_3d',
                        baseBattleAbilities__exitFade: 'SlotTransitions_baseBattleAbilities__exitFade_21',
                        baseBattleAbilities__enterFade: 'SlotTransitions_baseBattleAbilities__enterFade_15',
                        baseBattleBoosters__enterFitting: 'SlotTransitions_baseBattleBoosters__enterFitting_56',
                        baseBattleBoosters__exitFittingRemove:
                            'SlotTransitions_baseBattleBoosters__exitFittingRemove_e5',
                        baseBattleBoosters__exitActiveFitting:
                            'SlotTransitions_baseBattleBoosters__exitActiveFitting_f1',
                    },
                    w = { enter: B.base__enter, exit: B.base__enter },
                    y = (0, s.Pi)(
                        ({
                            children: e,
                            slotIndex: t,
                            uniqueKey: u,
                            slotType: s,
                            isEmpty: m = !1,
                            imageSource: E,
                            itemInstalledSetupIndex: b,
                        }) => {
                            const g = (0, _.t)().model.lastSlotAction.get(),
                                p = g.leftID,
                                A = g.rightID,
                                h = g.leftIntCD,
                                F = g.rightIntCD,
                                f = g.actionType,
                                v = g.intCD,
                                C = (0, r.useState)(!0),
                                y = C[0],
                                x = C[1],
                                I = (0, r.useState)(!0),
                                T = I[0],
                                k = I[1],
                                O = (0, r.useState)(E),
                                R = O[0],
                                L = O[1],
                                M = (0, r.useState)(u),
                                N = M[0],
                                P = M[1],
                                H = (0, r.useState)(b),
                                $ = H[0],
                                G = H[1],
                                j = (0, i.K)(),
                                z = (0, i.K)(),
                                W = [n._2, n.dZ, n.sH],
                                U = (v === u || v === N) && $ !== b && W.includes(f),
                                X = -1 === h || -1 === F,
                                q = s ? `base${s[0].toUpperCase() + s.slice(1)}` : 'base',
                                V = d.Sr[f] || 0;
                            (0, r.useEffect)(() => {
                                m || L(E);
                            }, [m, E]);
                            const K = (0, r.useCallback)(
                                    (e) => {
                                        const u = Object.assign({}, w);
                                        switch (f) {
                                            case n.Xo: {
                                                const e = p === t ? d.mI.RIGHT : d.mI.LEFT,
                                                    n = A - p != 1 ? d.mI.SWAP : '';
                                                ((u.enterDone = B[`${q}__enter${e}${n}`]),
                                                    (u.exit = B[`${q}__exit${e}${n}`]),
                                                    X &&
                                                        (m
                                                            ? (u.enterDone = B[`${q}__enter${d.mI.FADE}`])
                                                            : (u.exit = B[`${q}__exit${d.mI.FADE}`])));
                                                break;
                                            }
                                            case n._2:
                                                ((u.enterDone = B[`${q}__enter${d.mI.DESTROY}`]),
                                                    (u.exit = B[`${q}__exit${d.mI.DESTROY}`]),
                                                    j.run(() => x(!0), d.YJ),
                                                    k(!0));
                                                break;
                                            case n.sH:
                                            case n.dZ:
                                                ((u.enter = B[`${q}__enter${d.mI.DEMOUNT}${d.mI.FADE}`]),
                                                    (u.exit = B[`${q}__exit${d.mI.DEMOUNT}`]),
                                                    j.run(() => x(!0), d.Ij));
                                                break;
                                            case n.eC:
                                            case n.FR:
                                                if (s !== a.g9) {
                                                    const e = f === n.eC ? d.mI.FITTING : d.mI.FITTING_REMOVE;
                                                    ((u.enter = B[`${q}__enter${e}`]),
                                                        (u.exit = B[`${q}__exit${e}`]),
                                                        (u.exitActive = B[`${q}__exitActive${d.mI.FITTING}`]));
                                                } else
                                                    ((u.enterDone = B[`${q}__enter${d.mI.FADE}`]),
                                                        (u.exit = B[`${q}__exit${d.mI.FADE}`]));
                                                break;
                                            default:
                                                return e;
                                        }
                                        return o().cloneElement(e, { classNames: u, timeout: V });
                                    },
                                    [f, V, p, t, A, q, X, m, j, s],
                                ),
                                Z = (0, r.useCallback)(
                                    (e) => {
                                        z.run(() => {
                                            ((e.className = ''), e.classList.add(B.base), P(u), G(b));
                                        }, V);
                                    },
                                    [z, V, u, b],
                                ),
                                Y = (0, r.useCallback)(() => {
                                    (x(!1), k(!1));
                                }, []);
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(
                                    l.Z,
                                    { component: null, childFactory: K },
                                    o().createElement(
                                        c.Z,
                                        {
                                            key: u,
                                            timeout: V,
                                            classNames: w,
                                            onEntered: Z,
                                            onExiting: Y,
                                            unmountOnExit: !0,
                                        },
                                        o().createElement('div', { className: B.base }, e),
                                    ),
                                ),
                                U &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(D, { in: y, actionType: f }),
                                        o().createElement(S, { inProp: T, maskImage: R }),
                                    ),
                            );
                        },
                    );
            },
            5958: (e, t, u) => {
                'use strict';
                u.d(t, {
                    Dp: () => r,
                    IG: () => o,
                    Ij: () => i,
                    Kz: () => c,
                    Qj: () => _,
                    Sr: () => m,
                    YJ: () => s,
                    mI: () => d,
                    wx: () => l,
                });
                var n = u(4888);
                const a = 1600,
                    i = 900,
                    s = 900,
                    r = 200,
                    o = 400,
                    l = 600,
                    c = 600,
                    _ = 1200;
                let d;
                !(function (e) {
                    ((e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount'));
                })(d || (d = {}));
                const m = { [n.Xo]: 200, [n.FR]: 250, [n.eC]: 250, [n._2]: 1400, [n.dZ]: a, [n.sH]: a, [n.Fd]: a };
            },
            3977: (e, t, u) => {
                'use strict';
                u.d(t, { qm: () => n });
                const n = 'equipmentModernized';
            },
            4888: (e, t, u) => {
                'use strict';
                u.d(t, { FR: () => a, Fd: () => r, Xo: () => i, _2: () => l, dZ: () => s, eC: () => n, sH: () => o });
                const n = 'select',
                    a = 'undo',
                    i = 'swap',
                    s = 'demount',
                    r = 'demount_from_setup',
                    o = 'demount_from_setups',
                    l = 'destroy';
            },
            7383: (e, t, u) => {
                'use strict';
                u.d(t, { WI: () => s, YN: () => i, g9: () => a, yZ: () => r, zn: () => n });
                const n = 'optDevices',
                    a = 'shells',
                    i = 'battleAbilities',
                    s = 'toggleShells',
                    r = 'toggleCamouflage';
            },
            6880: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
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
            },
            1960: () => {
                'use strict';
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
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](u, u.exports, __webpack_require__), u.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, n) => {
            if (!t) {
                var a = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, u, n] = deferred[o], i = !0, s = 0; s < t.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((i = !1), n < a && (a = n));
                    if (i) {
                        deferred.splice(o--, 1);
                        var r = u();
                        void 0 !== r && (e = r);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, u, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var u in t)
                __webpack_require__.o(t, u) &&
                    !__webpack_require__.o(e, u) &&
                    Object.defineProperty(e, u, { enumerable: !0, get: t[u] });
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
        (__webpack_require__.j = 434),
        (() => {
            var e = { 434: 0, 927: 0, 490: 0, 754: 0, 803: 0, 761: 0, 833: 0, 795: 0, 723: 0, 287: 0, 975: 0, 197: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [i, s, r] = u,
                        o = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (r) var l = r(__webpack_require__);
                    }
                    for (t && t(u); o < i.length; o++)
                        ((a = i[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(1030));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
