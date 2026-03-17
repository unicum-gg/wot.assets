(() => {
    'use strict';
    var __webpack_modules__ = {
            3457: (e, t, u) => {
                u.d(t, { L$: () => c.L, qE: () => c.q, u5: () => _ });
                var n = u(6483),
                    a = u.n(n),
                    i = u(1641),
                    s = u(7727),
                    r = u(7363),
                    o = u.n(r),
                    l = u(6880),
                    c = u(2106);
                const _ = ({
                    children: e,
                    size: t,
                    disabled: u,
                    mixClass: n,
                    onMouseEnter: _,
                    onMouseMove: d,
                    onMouseDown: m,
                    onMouseUp: E,
                    onMouseLeave: b,
                    onClick: g,
                    isFocused: p = !1,
                    type: A = c.L.primary,
                    soundHover: F = 'highlight',
                    soundClick: h = 'play',
                }) => {
                    const D = (0, r.useRef)(null),
                        C = (0, r.useState)(p),
                        f = C[0],
                        v = C[1],
                        S = (0, r.useState)(!1),
                        B = S[0],
                        w = S[1];
                    return (
                        (0, r.useEffect)(() => {
                            function e(e) {
                                f && null !== D.current && !D.current.contains(e.target) && v(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [f]),
                        (0, r.useEffect)(() => {
                            v(p);
                        }, [p]),
                        o().createElement(
                            'div',
                            {
                                ref: D,
                                className: a()(
                                    l.Z.base,
                                    l.Z[`base__${A}`],
                                    u && l.Z.base__disabled,
                                    t && l.Z[`base__${t}`],
                                    f && l.Z.base__focus,
                                    B && l.Z.base__highlightActive,
                                    n,
                                ),
                                onMouseEnter: function (e) {
                                    u || (null !== F && (0, s.G)(F), _ && _(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    u || (E && E(e), w(!1));
                                },
                                onMouseDown: function (e) {
                                    if (u) return;
                                    const t = e.button === i.t.LEFT;
                                    (null !== h && t && (0, s.G)(h),
                                        m && m(e),
                                        p && (u || (D.current && (D.current.focus(), v(!0)))),
                                        t && w(!0));
                                },
                                onMouseLeave: function (e) {
                                    u || (b && b(e), w(!1));
                                },
                                onClick: function (e) {
                                    u || (g && g(e));
                                },
                            },
                            A !== c.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: l.Z.back }),
                                    o().createElement('span', { className: l.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: a()(l.Z.state, l.Z.state__default) },
                                o().createElement('span', { className: l.Z.stateDisabled }),
                                o().createElement('span', { className: l.Z.stateHighlightHover }),
                                o().createElement('span', { className: l.Z.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: l.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
            },
            2106: (e, t, u) => {
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
                u.d(t, { Y: () => o });
                var n = u(3138),
                    a = u(7363),
                    i = u(1043),
                    s = u(5262);
                const r = (function (e = n.O.client.getSize('rem')) {
                        const t = e.width,
                            u = e.height;
                        return Object.assign({ width: t, height: u }, (0, s.T)(t, u, i.j));
                    })(),
                    o = (0, a.createContext)(r);
            },
            1039: (e, t, u) => {
                (u(3138), u(7363), u(3495));
            },
            6010: (e, t, u) => {
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
                        F = r.largeHeight,
                        h = r.mediumHeight,
                        D = r.smallHeight,
                        C = r.extraSmallHeight,
                        f = { extraLarge: A, large: F, medium: h, small: D, extraSmall: C };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && o) return t;
                        if (u.large && l) return t;
                        if (u.medium && c) return t;
                        if (u.small && _) return t;
                        if (u.extraSmall && d) return t;
                    } else {
                        if (u.extraLargeWidth && m) return (0, a.H)(t, u, f);
                        if (u.largeWidth && E) return (0, a.H)(t, u, f);
                        if (u.mediumWidth && b) return (0, a.H)(t, u, f);
                        if (u.smallWidth && g) return (0, a.H)(t, u, f);
                        if (u.extraSmallWidth && p) return (0, a.H)(t, u, f);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && A) return t;
                            if (u.largeHeight && F) return t;
                            if (u.mediumHeight && h) return t;
                            if (u.smallHeight && D) return t;
                            if (u.extraSmallHeight && C) return t;
                        }
                    }
                    return null;
                });
            },
            7382: (e, t, u) => {
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
                u.d(t, { YN: () => n.Y });
                (u(6010), u(1039));
                var n = u(3495);
            },
            1043: (e, t, u) => {
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
                            F = e.isEnabled,
                            h = void 0 === F || F,
                            D = e.targetId,
                            C = void 0 === D ? 0 : D,
                            f = e.onShow,
                            v = e.onHide,
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
                            w = (0, i.useMemo)(() => C || (0, n.F)().resId, [C]),
                            y = (0, i.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (o(u, A, { isMouseEvent: !0, on: !0, arguments: r(a) }, w),
                                    f && f(),
                                    (B.current.isVisible = !0));
                            }, [u, A, a, w, f]),
                            x = (0, i.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        o(u, A, { on: !1 }, w),
                                        B.current.isVisible && v && v(),
                                        (B.current.isVisible = !1));
                                }
                            }, [u, A, w, v]),
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
                                !1 === h && x();
                            }, [h, x]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        (window.removeEventListener('mouseleave', x), x());
                                    }
                                ),
                                [x],
                            ));
                        return h
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
            8246: (e, t, u) => {
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
                                F = A[0],
                                h = A[1];
                            return (
                                (0, i.useEffect)(() => {
                                    E.current ? h(m(g, l, _)) : (E.current = !0);
                                }, [_, g, l]),
                                (0, i.useEffect)(() => {
                                    p(o);
                                }, [o]),
                                (0, i.useEffect)(
                                    () => () => {
                                        (F.externalModel.dispose(), d.current.forEach((e) => e()));
                                    },
                                    [F],
                                ),
                                s().createElement(u.Provider, { value: F }, c)
                            );
                        },
                        () => (0, i.useContext)(u),
                    ];
                };
            },
            527: (e, t, u) => {
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
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => n });
            },
            2493: (e, t, u) => {
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
                u.d(t, { O: () => s });
                var n = u(5959),
                    a = u(7698),
                    i = u(514);
                const s = { view: u(7641), client: n, sound: i.ZP, intl: a.N };
            },
            7698: (e, t, u) => {
                u.d(t, { N: () => n });
                const n = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, t, u) => {
                u.d(t, { ZP: () => s });
                var n = u(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, n.playSound)(a[t])), e), {}),
                    s = { play: Object.assign({}, i, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, u) => {
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function a(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                (u.r(t), u.d(t, { getBgUrl: () => a, getTextureUrl: () => n }));
            },
            6112: (e, t, u) => {
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
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
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => S,
                        getExternalPaddingsRem: () => y,
                        getFontNames: () => B,
                        getScale: () => p,
                        getSize: () => m,
                        getViewGlobalPosition: () => b,
                        initExternalPaddings: () => O,
                        isEventHandled: () => f,
                        isFocused: () => D,
                        pxToRem: () => A,
                        remToPx: () => F,
                        resize: () => E,
                        sendEvent: () => r.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => C,
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
                    return 'rem' === e ? t : { x: F(t.x), y: F(t.y) };
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
                function F(e) {
                    return viewEnv.remToPx(e);
                }
                function h(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function D() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function v() {
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
                u.d(t, { jv: () => n });
                function n() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, u) => {
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
                u.d(t, { k: () => a });
                var n = u(7363);
                const a = (e) => {
                    (0, n.useEffect)(() => e, []);
                };
            },
            1396: (e, t, u) => {
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
            1641: (e, t, u) => {
                let n;
                (u.d(t, { t: () => n }),
                    (function (e) {
                        ((e[(e.LEFT = 0)] = 'LEFT'),
                            (e[(e.WHEEL = 1)] = 'WHEEL'),
                            (e[(e.RIGHT = 2)] = 'RIGHT'),
                            (e[(e.FOURTH = 3)] = 'FOURTH'),
                            (e[(e.FIFTH = 4)] = 'FIFTH'));
                    })(n || (n = {})));
            },
            8968: (e, t, u) => {
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
                    F = () => A(r.CLOSE),
                    h = (e, t) => {
                        e.keyCode === d.n.ESCAPE && t();
                    };
                var D = u(7572);
                const C = a.instance,
                    f = {
                        DataTracker: i.Z,
                        ViewModel: D.Z,
                        ViewEventType: r,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => A(r.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: F,
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
                            const t = (t) => h(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, F);
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
                        ClickOutsideManager: C,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = f;
            },
            8613: (e, t, u) => {
                u.d(t, { Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t, u = 2) => systemLocale.getRealFormat(e, t, u),
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
            3521: (e, t, u) => {
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
                u.d(t, { iN: () => i, j2: () => a, s$: () => s });
                var n = u(4231);
                const a = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
                    i = (e) => e === n.w.Battle || e === n.w.Prebattle,
                    s = (e) => i(e) || e === n.w.Respawn;
            },
            7626: (e, t, u) => {
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
            8176: (e, t, u) => {
                var n = u(7363),
                    a = u.n(n),
                    i = u(1533),
                    s = u.n(i),
                    r = u(3220),
                    o = u(8526),
                    l = u(5521),
                    c = u(3403),
                    _ = u(6483),
                    d = u.n(_),
                    m = u(3138),
                    E = u(3815),
                    b = u(2039);
                const g = (0, n.createContext)(null);
                const p = (e) => {
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
                var A = u(7739),
                    F = u(5262);
                u(1281);
                let h;
                function D(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(h || (h = {}));
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
                function C(e, t, u) {
                    const a = (0, n.useContext)(A.YN);
                    let i = Object.entries(a).filter(([e, t]) => !0 === t && e in F.u);
                    return (
                        u && (i = i.filter((e) => u.includes(e[0]))),
                        e.reduce((e, u) => {
                            const n = i.map((e) =>
                                d()(t[((e, t) => e + '__' + t)(u, e[0])], t[((e, t) => e + D(t))(u, e[0])]),
                            );
                            return ((e[u] = d()(t[u], ...n)), e);
                        }, {})
                    );
                }
                const f = (e, t, u, a = []) => {
                        const i = ((e, t = []) => {
                            const u = (0, n.useRef)(),
                                a = (0, n.useCallback)((...t) => {
                                    (u.current && u.current(), (u.current = e(...t)));
                                }, t);
                            return (
                                (0, n.useEffect)(
                                    () => () => {
                                        u.current && u.current();
                                    },
                                    [a],
                                ),
                                a
                            );
                        })(
                            () =>
                                p(() =>
                                    p(() => {
                                        if (e.current) {
                                            const u = e.current.getBoundingClientRect(),
                                                n = {
                                                    width: m.O.view.pxToRem(u.width),
                                                    height: m.O.view.pxToRem(u.height),
                                                    offsetX: m.O.view.pxToRem(u.left),
                                                    offsetY: m.O.view.pxToRem(u.top),
                                                };
                                            (window.tutorialApi.updateComponents(), t(n));
                                        }
                                    }),
                                ),
                            [t, e],
                        );
                        return (
                            (0, n.useEffect)(() => {
                                i();
                            }, [i, ...a]),
                            (0, n.useEffect)(() => {
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
                    v = {
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
                    S = 'Border_base_f9',
                    B = 'Border_border_83',
                    w = 'Border_wrapper_17',
                    y = 'Border_active_e8',
                    x = (0, n.memo)(({ slotOffset: e, slotWidth: t, onAnimationEnd: u }) => {
                        const i = (0, n.useRef)(null),
                            s = (0, n.useRef)(!1);
                        (0, n.useEffect)(() => {
                            s.current = !0;
                        }, [e, t]);
                        const r = (0, n.useCallback)(() => {
                            (s.current && u(), (s.current = !1));
                        }, [u]);
                        (0, n.useEffect)(() => {
                            const e = i.current;
                            return (
                                e && e.addEventListener('transitionend', r),
                                () => {
                                    e && e.removeEventListener('transitionend', r);
                                }
                            );
                        }, [r]);
                        const o = (0, n.useMemo)(() => ({ left: e }), [e]),
                            l = (0, n.useMemo)(() => ({ width: t }), [t]);
                        return a().createElement(
                            'div',
                            { className: S },
                            a().createElement(
                                'div',
                                { ref: i, className: B, style: o },
                                a().createElement(
                                    'div',
                                    { className: w },
                                    a().createElement('div', { className: y, style: l }),
                                ),
                            ),
                        );
                    }),
                    I = (e, t) => {
                        const u = [];
                        for (let n = 0; n < e; n++) u.push(t(n));
                        return u;
                    };
                var T = u(2056);
                const k = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function O() {
                    return (
                        (O =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        O.apply(this, arguments)
                    );
                }
                const L = R.views.common.tooltip_window.simple_tooltip_content,
                    N = (e) => {
                        let t = e.children,
                            u = e.body,
                            i = e.header,
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
                            })(e, k);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, o, { body: u, header: i, note: s, alert: r });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [r, u, i, s, o]);
                        return a().createElement(
                            T.u,
                            O(
                                {
                                    contentId:
                                        ((_ = null == o ? void 0 : o.hasHtmlContent),
                                        _ ? L.SimpleTooltipHtmlContent('resId') : L.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var _;
                    };
                var P = u(9344),
                    M = u(2558),
                    j = u(8934);
                const $ = {
                        base__enterUp: 'GroupAnimation_base__enterUp_b3',
                        animationEnterTop: 'GroupAnimation_animationEnterTop_92',
                        base__enterDown: 'GroupAnimation_base__enterDown_f0',
                        animationEnterDown: 'GroupAnimation_animationEnterDown_73',
                        base__exitUp: 'GroupAnimation_base__exitUp_92',
                        animationExitTop: 'GroupAnimation_animationExitTop_89',
                        base__exitDown: 'GroupAnimation_base__exitDown_67',
                        animationExitDown: 'GroupAnimation_animationExitDown_02',
                    },
                    H = 'up',
                    G = 'down',
                    z = ({ children: e, index: t, setSetupSwitching: u, disabled: i = !1 }) => {
                        const s = (0, n.useRef)(1 - t),
                            r = (0, n.useMemo)(() => {
                                const e = ((u = t), (n = s.current), u === n ? '' : u > n ? G : H);
                                var u, n;
                                const a = e && D(e);
                                return i ? {} : { enter: $[`base__enter${a}`], exit: $[`base__exit${a}`] };
                            }, [t, i]);
                        return (
                            (s.current = t),
                            a().createElement(
                                M.Z,
                                { className: $.base },
                                a().createElement(
                                    j.Z,
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
                var W = u(4301),
                    U = u(7383);
                const q = {
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
                    X = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function V() {
                    return (
                        (V =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        V.apply(this, arguments)
                    );
                }
                const K = (e) => {
                    let t = e.value,
                        u = e.isEmpty,
                        n = void 0 !== u && u,
                        i = e.className,
                        s = e.size,
                        r = void 0 === s ? 'normal' : s,
                        o = e.fadeInAnimation,
                        l = void 0 !== o && o,
                        c = e.hide,
                        _ = void 0 !== c && c,
                        m = e.maximumNumber,
                        E = void 0 === m ? 99 : m,
                        b = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, X);
                    const g = n ? null : t,
                        p = 'string' == typeof g;
                    if ((g && !p && g < 0) || 0 === g) return null;
                    const A = g && !p && g > E,
                        F = d()(
                            q.base,
                            q[`base__${r}`],
                            l && q.base__animated,
                            _ && q.base__hidden,
                            !g && q.base__pattern,
                            n && q.base__empty,
                            i,
                        );
                    return a().createElement(
                        'div',
                        V({ className: F }, b),
                        a().createElement('div', { className: q.bg }),
                        a().createElement('div', { className: q.pattern }),
                        a().createElement(
                            'div',
                            { className: d()(q.value, p && q.value__text) },
                            A ? E : g,
                            A && a().createElement('span', { className: q.plus }, '+'),
                        ),
                    );
                };
                var Z = u(4231);
                const Y = 'TopLabel_base_7f',
                    J = 'TopLabel_base__ready_00',
                    Q = 'TopLabel_text_d0',
                    ee = 'TopLabel_text__hangar_36',
                    te = 'TopLabel_text__shown_25',
                    ue = 'TopLabel_text__hidden_79',
                    ne = 'TopLabel_text__truncated_29',
                    ae = (0, n.memo)(({ panelType: e, text: t, parentRef: u, isTruncated: i = !1, show: s = !1 }) => {
                        const r = (0, n.useRef)(!1),
                            o = (0, n.useState)(!1),
                            l = o[0],
                            c = o[1];
                        (0, n.useEffect)(() => {
                            u || (s && !r.current && (r.current = !0), c(s));
                        }, [s, u]);
                        const _ = (0, n.useCallback)(() => {
                                ((r.current = !0), c(!0));
                            }, []),
                            m = (0, n.useCallback)(() => {
                                c(!1);
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = u && u.current;
                                if (e)
                                    return (
                                        e.addEventListener('mouseenter', _),
                                        e.addEventListener('mouseleave', m),
                                        () => {
                                            (e.removeEventListener('mouseenter', _),
                                                e.removeEventListener('mouseleave', m));
                                        }
                                    );
                            }, [u, _, m]),
                            a().createElement(
                                'div',
                                { className: d()(Y, r.current && J) },
                                a().createElement(
                                    'div',
                                    { className: d()(Q, e !== Z.w.Setup && ee, i && ne, s && l ? te : ue) },
                                    t,
                                ),
                            )
                        );
                    }),
                    ie = 'notUsableSection';
                var se = u(7626);
                const re = 'Section_base_8a',
                    oe = 'Section_label_73',
                    le = 'Section_counter_8a';
                var ce = u(7727);
                const _e = 'SlotDivider_base_60',
                    de = () => a().createElement('div', { className: _e });
                var me = u(3267),
                    Ee = u(8253),
                    be = u(3141);
                var ge = u(1043);
                let pe, Ae, Fe;
                (!(function (e) {
                    ((e[(e.ExtraSmall = ge.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = ge.j.small.width)] = 'Small'),
                        (e[(e.Medium = ge.j.medium.width)] = 'Medium'),
                        (e[(e.Large = ge.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = ge.j.extraLarge.width)] = 'ExtraLarge'));
                })(pe || (pe = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = ge.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = ge.j.small.width)] = 'Small'),
                            (e[(e.Medium = ge.j.medium.width)] = 'Medium'),
                            (e[(e.Large = ge.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = ge.j.extraLarge.width)] = 'ExtraLarge'));
                    })(Ae || (Ae = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = ge.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = ge.j.small.height)] = 'Small'),
                            (e[(e.Medium = ge.j.medium.height)] = 'Medium'),
                            (e[(e.Large = ge.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = ge.j.extraLarge.height)] = 'ExtraLarge'));
                    })(Fe || (Fe = {})));
                const he = () => {
                        const e = (0, n.useContext)(A.YN),
                            t = e.width,
                            u = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return pe.ExtraLarge;
                                    case e.large:
                                        return pe.Large;
                                    case e.medium:
                                        return pe.Medium;
                                    case e.small:
                                        return pe.Small;
                                    case e.extraSmall:
                                        return pe.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), pe.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return Ae.ExtraLarge;
                                    case e.largeWidth:
                                        return Ae.Large;
                                    case e.mediumWidth:
                                        return Ae.Medium;
                                    case e.smallWidth:
                                        return Ae.Small;
                                    case e.extraSmallWidth:
                                        return Ae.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Ae.ExtraSmall);
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return Fe.ExtraLarge;
                                    case e.largeHeight:
                                        return Fe.Large;
                                    case e.mediumHeight:
                                        return Fe.Medium;
                                    case e.smallHeight:
                                        return Fe.Small;
                                    case e.extraSmallHeight:
                                        return Fe.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Fe.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: i, mediaHeight: s, remScreenWidth: t, remScreenHeight: u };
                    },
                    De = 'Grabber_base_cf',
                    Ce = 'Grabber_base__enabled_b0',
                    fe = 'Grabber_base__waitingUpdate_1d',
                    ve = 'Grabber_base__updating_f1',
                    Se = 'Grabber_base__active_71',
                    Be = 'Grabber_base__exit_1f',
                    we = 'Grabber_base__showAnimation_d9';
                var ye = u(3521),
                    xe = u(1820);
                const Ie = ({
                    children: e,
                    id: t,
                    containerRef: u,
                    isEnabled: i = !0,
                    onClick: s,
                    forceCenterX: r,
                    isUpdateAvailable: c,
                    handleAction: _,
                    blockOnGrabIds: g = [],
                }) => {
                    const A = he().mediaSize,
                        F = (0, n.useRef)({
                            actualX: 0,
                            clickCenterOffset: 0,
                            dropCenterX: 0,
                            grabActivationPassed: !1,
                            isDragActive: !1,
                            id: t,
                        }),
                        h = (0, n.useRef)({
                            isValid: !1,
                            startX: 0,
                            startCenterX: 0,
                            minXRestriction: 0,
                            maxXRestriction: 8e3,
                        }),
                        D = (0, n.useRef)(null),
                        C = (0, n.useState)(!1),
                        f = C[0],
                        v = C[1],
                        S = (0, n.useState)(0),
                        B = S[0],
                        w = S[1],
                        y = (function () {
                            const e = (0, n.useRef)(0);
                            return (
                                (0, b.k)(() => {
                                    window.cancelAnimationFrame(e.current);
                                }),
                                (0, n.useMemo)(
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
                        })(),
                        x = 0 !== r && i,
                        I = r ? r - h.current.startCenterX : B;
                    (0, n.useEffect)(() => {
                        if (((h.current.isValid = !1), t))
                            return p(() => {
                                const e = D.current,
                                    n = u.current;
                                if (n && e) {
                                    const u = e.getBoundingClientRect(),
                                        a = n.getBoundingClientRect(),
                                        i = u.left + 0.5 * u.width;
                                    ((h.current = {
                                        isValid: !0,
                                        minXRestriction: a.left,
                                        maxXRestriction: a.left + a.width,
                                        startX: u.left,
                                        startCenterX: i,
                                    }),
                                        _(xe.m.Ready, { dragId: t, currentCenterX: i }));
                                }
                            });
                    }, [A]);
                    const T = (0, n.useCallback)(
                            (e) => {
                                ((F.current.isDragActive = e),
                                    v(e),
                                    F.current.grabActivationPassed && !e && (0, ye.jZ)(!1, g));
                            },
                            [g],
                        ),
                        k = (0, n.useCallback)(() => {
                            (_(xe.m.DragStart, { dragId: F.current.id }),
                                (F.current.grabActivationPassed = !0),
                                (0, ye.jZ)(!0, g));
                        }, [_, g]),
                        O = (0, n.useCallback)((e) => {
                            const t = F.current,
                                u = h.current,
                                n = u.startX,
                                a = u.startCenterX,
                                i = u.minXRestriction,
                                s = u.maxXRestriction,
                                r = a - n,
                                o = e - t.clickCenterOffset;
                            t.dropCenterX = (0, ye.yG)(o, r, i, s);
                        }, []),
                        R = (0, n.useCallback)(
                            (e) => {
                                const t = F.current,
                                    u = h.current;
                                0 === e.button &&
                                    !t.isDragActive &&
                                    u.isValid &&
                                    i &&
                                    !c &&
                                    D.current &&
                                    ((t.actualX = e.clientX),
                                    (t.clickCenterOffset = t.actualX - u.startCenterX),
                                    T(!0));
                            },
                            [i, c, T],
                        ),
                        L = (0, n.useCallback)(() => {
                            !s || (i && h.current.isValid) || s();
                        }, [i, s]);
                    ((0, o.gd)(
                        f ? l.n.ESCAPE : l.n.NONE,
                        (0, E.z)(() => T(!1)),
                    ),
                        (0, n.useEffect)(() => {
                            i && r && w(0);
                        }, [r, i]));
                    const N = !f && F.current.grabActivationPassed;
                    ((0, n.useLayoutEffect)(() => {
                        F.current.id = t;
                    }, [t]),
                        (0, n.useEffect)(() => {
                            if (N) {
                                const e = F.current;
                                (_(xe.m.Drop, { dragId: e.id, currentCenterX: e.dropCenterX }),
                                    r === e.dropCenterX &&
                                        ((e.grabActivationPassed = !1),
                                        y.run(() => _(xe.m.DropExit, { dragId: e.id }))));
                            }
                        }, [N, y, r, _]),
                        (0, n.useEffect)(() => {
                            if (i && f && F.current.id) {
                                const e = m.O.client.events.mouse.up(([e, t]) => {
                                        if ('outside' === t) return T(!1);
                                        const u = F.current,
                                            n = e.clientX;
                                        (n === u.actualX && 0 === e.button && !F.current.grabActivationPassed
                                            ? s && s()
                                            : F.current.grabActivationPassed && O(n),
                                            F.current.isDragActive && T(!1));
                                    }),
                                    t = m.O.client.events.mouse.move(([e]) => {
                                        const t = F.current;
                                        if ((0 === e.clientX && 0 === e.clientY) || !t.isDragActive) return;
                                        const u = e.clientX,
                                            n = t.grabActivationPassed;
                                        (!n && k(),
                                            u !== t.actualX &&
                                                ((t.actualX = u),
                                                O(u),
                                                n && _(xe.m.Drag, { dragId: t.id, currentCenterX: t.dropCenterX }),
                                                w(t.dropCenterX - h.current.startCenterX)));
                                    });
                                return () => {
                                    (t(), e());
                                };
                            }
                        }, [k, _, f, i, s, T, O]));
                    const P = i ? d()(De, Ce, f && Se, N && Be, x && fe, r && ve) : d()(De, r && we);
                    return a().createElement(
                        'div',
                        {
                            id: t,
                            ref: D,
                            onClick: L,
                            onMouseDown: R,
                            onTransitionEnd: (e) => {
                                const t = F.current;
                                e.target === D.current &&
                                    t.grabActivationPassed &&
                                    ((t.grabActivationPassed = !1), y.run(() => _(xe.m.DropExit, { dragId: t.id })));
                            },
                            className: P,
                            style: { left: I },
                        },
                        e,
                    );
                };
                let Te;
                !(function (e) {
                    ((e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next'));
                })(Te || (Te = {}));
                const ke = 'KeyLabel_base_ec',
                    Oe = 'KeyLabel_base__current_c2',
                    Re = 'KeyLabel_base__next_fa',
                    Le = ({ text: e, show: t, panelType: u, shellState: n, className: i }) => {
                        if (!e) return null;
                        const s = 'KEY_NONE' === e ? '..' : String(R.strings.readable_key_names.$dyn(e));
                        return a().createElement(
                            'div',
                            { className: d()(ke, n === Te.Current && Oe, n === Te.Next && Re, i) },
                            a().createElement(ae, { isTruncated: !0, text: s, show: t, panelType: u }),
                        );
                    };
                var Ne = u(7078);
                const Pe = ({ children: e, slotType: t, slotId: u, panelType: i, isEnabled: s = !0 }) => {
                        const r = (0, n.useMemo)(() => ({ slotType: t, slotId: u }), [t, u]);
                        return a().createElement(
                            Ne.t,
                            {
                                isEnabled: s,
                                args: r,
                                decoratorId: [Z.w.Battle, Z.w.Prebattle].includes(i)
                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                    : 0,
                            },
                            a().createElement('div', null, e),
                        );
                    },
                    Me = 'Close_base_f3',
                    je = 'Close_base__invisible_0e',
                    $e = 'Close_base__shown_a2',
                    He = 'Close_base__hover_6d',
                    Ge = 'Close_base__down_2b',
                    ze = (0, n.memo)(
                        ({ id: e, show: t = !0, onClick: u, soundHover: i = 'highlight', soundClick: s = 'play' }) => {
                            const r = (0, n.useState)(!1),
                                o = r[0],
                                l = r[1],
                                c = (0, n.useState)(!1),
                                _ = c[0],
                                m = c[1],
                                E = (0, n.useState)(!1),
                                b = E[0],
                                g = E[1],
                                A = (0, n.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []),
                                F = (0, n.useCallback)(() => {
                                    (m(!0), i && (0, ce.G)(i));
                                }, [i]),
                                h = (0, n.useCallback)(() => {
                                    (l(!1), m(!1));
                                }, []),
                                D = (0, n.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && (l(!0), s && (0, ce.G)(s));
                                    },
                                    [t, s],
                                ),
                                C = (0, n.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && u && u();
                                    },
                                    [t, u],
                                );
                            (0, n.useEffect)(
                                () =>
                                    p(() => {
                                        g(!0);
                                    }),
                                [],
                            );
                            const f = d()(Me, !b && je, b && t && $e, o && Ge, _ && He);
                            return a().createElement('div', {
                                id: e,
                                onMouseOver: F,
                                onMouseLeave: h,
                                onMouseDown: D,
                                onMouseUp: C,
                                className: f,
                                onClick: A,
                            });
                        },
                    ),
                    We = 'Slot_base_3a',
                    Ue = 'Slot_label_e6',
                    qe = 'Slot_close_bb',
                    Xe = 'Slot_disabled_5d',
                    Ve = 'Slot_shadow_a7',
                    Ke = 'Slot_category_2c';
                var Ze = u(1641),
                    Ye = u(9916);
                const Je = ({
                        children: e,
                        contentID: t,
                        decoratorID: u = 0,
                        targetId: a = 0,
                        args: i,
                        isEnabled: s = !0,
                        onMouseDown: r,
                    }) => {
                        const o = (0, n.useCallback)(() => {
                                ((0, Ye.c9)(Ye.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: i,
                                }),
                                    ce.$.playYes());
                            }, [i, t, u, a]),
                            l = (0, n.useCallback)(() => {
                                (0, Ye.c9)(Ye.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, u, a]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    (r && r(e), ((e) => e.button === Ze.t.RIGHT)(e) && o());
                                },
                                [r, o],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === s && l();
                            }, [s, l]),
                            s ? (0, n.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Qe = ['children'];
                function et() {
                    return (
                        (et =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        et.apply(this, arguments)
                    );
                }
                const tt = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, Qe);
                    return a().createElement(
                        Je,
                        et({}, u, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                var ut = u(1396),
                    nt = u(5918);
                const at = (0, c.Pi)(
                        ({
                            intCD: e,
                            id: t,
                            itemInstalledSetupIdx: u,
                            isMountedMoreThanOne: i,
                            isInstalled: s,
                            isDisabled: o,
                            imageSource: l,
                            isEmpty: c,
                            slotIndex: _,
                            slotType: d,
                            contextMenuDisabled: m,
                            isSetupSwitching: E,
                            children: b,
                        }) => {
                            const g = (0, r.t)().model.root.get().vehicleCD,
                                p = (0, n.useState)(!0),
                                A = p[0],
                                F = p[1],
                                h = (0, ut.K)();
                            (0, n.useEffect)(() => {
                                (F(!1), h.run(() => F(!0), 100));
                            }, [g]);
                            const D = (0, n.useMemo)(
                                () => ({
                                    intCD: e,
                                    slotType: d,
                                    installedSlotId: t,
                                    isMounted: s,
                                    fieldType: 1,
                                    itemInstalledSetupIdx: u,
                                    itemInstalledSetupSlotIdx: t,
                                    isMountedMoreThanOne: i,
                                }),
                                [e, d, t, u, s, i],
                            );
                            return A
                                ? a().createElement(
                                      nt.y,
                                      {
                                          uniqueKey: e,
                                          isEmpty: c,
                                          slotIndex: _,
                                          slotType: d,
                                          imageSource: l,
                                          itemInstalledSetupIndex: u,
                                      },
                                      a().createElement(
                                          tt,
                                          { isEnabled: !(E || m || o || c), args: D },
                                          a().createElement('div', null, b),
                                      ),
                                  )
                                : a().createElement('div', null, b);
                        },
                    ),
                    it = (0, c.Pi)(
                        ({
                            slotType: e,
                            slotIndex: t,
                            level: u,
                            isSelected: i,
                            isSetupSwitching: s,
                            isSectionSelected: o,
                            onActiveSlotChanged: l,
                            onSlotSelected: c,
                            onActiveSlotRefChanged: _,
                            onSlotClear: d,
                            panelType: m,
                            isDisabled: E = !1,
                            isBorderActive: b,
                            isIncompatible: g = !1,
                            grabberId: A,
                            containerRef: F,
                            activeDragId: h,
                            handleGrabberAction: D,
                            forceLeftUpdate: C,
                            potentialDropId: f,
                            blockOnGrabIds: v,
                            contextMenuDisabled: S,
                            groupIndex: B,
                            sectionIndex: w,
                        }) => {
                            const y = (0, r.t)().model.computes.slots.slot(B, w, t),
                                x = y.imageSource,
                                I = y.isInstalled,
                                T = y.itemInstalledSetupIdx,
                                k = y.isMountedMoreThanOne,
                                O = y.overlayType,
                                R = y.keyName,
                                L = y.categoryImgSource,
                                N = y.withAttention,
                                P = y.id,
                                M = y.intCD,
                                j = m === Z.w.Setup,
                                $ = !(0, W.s$)(m),
                                H = !(0, W.iN)(m),
                                G = m === Z.w.Compare,
                                z = j && o && $,
                                U = (0, n.useRef)(!1),
                                q = (0, n.useRef)(null),
                                X = -1 === M;
                            ((0, n.useEffect)(() => {
                                if (!U.current && o && i)
                                    return p(() => {
                                        (l && l(q, e, P), (U.current = !0));
                                    });
                                U.current = !0;
                            }, [P, o, i, l, e]),
                                (0, n.useEffect)(() => {
                                    i && _(q);
                                }, [i, _]));
                            const V = ((e) => {
                                    const t = (0, n.useRef)(-1),
                                        u = (0, n.useCallback)(
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
                                    return ((0, n.useEffect)(() => () => clearTimeout(t.current), []), u);
                                })((0, n.useCallback)(() => (!i && $ && !s && c(e, P), 500), [P, $, i, s, c, e])),
                                K = (0, n.useCallback)(() => {
                                    E || V('');
                                }, [V, E]),
                                Y = (0, n.useCallback)(() => {
                                    H && !i && !h && !E && ce.$.playHighlight();
                                }, [i, h, E, H]);
                            (0, n.useEffect)(() => {
                                f && ce.$.playHighlight();
                            }, [f]);
                            const J = (0, n.useCallback)(() => {
                                    null == d || d(P, e);
                                }, [P, d, e]),
                                Q = j && !I,
                                ee = Boolean(A && f === A),
                                te = A && (z || G),
                                ue = `${e}-slot-${P}`,
                                ne = L && L.length > 0,
                                ae = ne ? { backgroundImage: `url(${L})` } : {},
                                ie = {
                                    id: A,
                                    containerRef: F,
                                    isEnabled: !X,
                                    onClick: K,
                                    isUpdateAvailable: Boolean(h),
                                    handleAction: D,
                                    forceCenterX: C,
                                    blockOnGrabIds: v,
                                },
                                se = {
                                    isEmpty: X,
                                    intCD: M,
                                    slotType: e,
                                    slotIndex: t,
                                    imageSource: x,
                                    isDisabled: E,
                                    isInstalled: I,
                                    id: P,
                                    itemInstalledSetupIdx: T,
                                    isMountedMoreThanOne: k,
                                    contextMenuDisabled: S,
                                    isSetupSwitching: s,
                                };
                            return a().createElement(
                                'div',
                                { className: We, onMouseEnter: Y, id: ue },
                                (o || G) &&
                                    !I &&
                                    a().createElement(
                                        'div',
                                        { className: qe },
                                        a().createElement(ze, { id: `close-${ue}`, show: !h, onClick: J }),
                                    ),
                                a().createElement(
                                    Pe,
                                    { slotType: e, slotId: P, isEnabled: !h, panelType: m },
                                    a().createElement(
                                        'div',
                                        { ref: q },
                                        a().createElement(
                                            Ee.W,
                                            {
                                                activeDragId: h,
                                                slotType: e,
                                                isSelected: i,
                                                isBorderActive: Boolean(b),
                                                panelType: m,
                                                isDisabled: E,
                                                isPotentialDrop: ee,
                                                onClick: te ? void 0 : K,
                                            },
                                            $ &&
                                                a().createElement(
                                                    'div',
                                                    { className: Ue },
                                                    a().createElement(Le, { text: R, show: Boolean(o), panelType: m }),
                                                ),
                                            a().createElement(
                                                me.J,
                                                { when: Boolean(te), wrapper: Ie, withProps: ie },
                                                a().createElement(
                                                    me.J,
                                                    { when: $, wrapper: at, withProps: se },
                                                    a().createElement(be.c, {
                                                        imageSource: x,
                                                        isIncompatible: g,
                                                        overlayType: O,
                                                        level: u,
                                                        isTemporary: Q,
                                                        withAttention: N,
                                                    }),
                                                ),
                                            ),
                                            ne &&
                                                a().createElement(
                                                    a().Fragment,
                                                    null,
                                                    a().createElement('span', { className: Ve }),
                                                    a().createElement('span', { className: Ke, style: ae }),
                                                ),
                                            E && a().createElement('div', { className: Xe }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    st = 'BattleAbilitySlot_base_74',
                    rt = 'BattleAbilitySlot_rank_01',
                    ot = ['rank'];
                const lt = (e) => {
                    let t = e.rank,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, ot);
                    return a().createElement(
                        'div',
                        { className: st },
                        a().createElement(it, u),
                        t && a().createElement('div', { className: rt, style: { backgroundImage: `url(${t})` } }),
                    );
                };
                var ct = u(4814);
                const _t = 'OptDeviceSlot_base_14',
                    dt = 'OptDeviceSlot_specializations_c3',
                    mt = ['groupIndex', 'sectionIndex', 'slotIndex', 'activeSpecsMask', 'isChangeSetupIndex'];
                function Et() {
                    return (
                        (Et =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Et.apply(this, arguments)
                    );
                }
                const bt = (0, c.Pi)((e) => {
                        let t = e.groupIndex,
                            u = e.sectionIndex,
                            n = e.slotIndex,
                            i = e.activeSpecsMask,
                            s = e.isChangeSetupIndex,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, mt);
                        const l = (0, r.t)(),
                            c = l.controls,
                            _ = l.model.computes.specializations(t, u, n),
                            m = _.specializations.length,
                            E = o.panelType === Z.w.Setup || o.panelType === Z.w.Compare,
                            b = !(0, W.s$)(o.panelType),
                            g = _.isDynamic;
                        return a().createElement(
                            'div',
                            { className: d()(_t, m && !g && !s && 'specializationsSlot') },
                            b &&
                                a().createElement(
                                    'div',
                                    { className: dt },
                                    a().createElement(ct.G, {
                                        specializations: _.specializations,
                                        isDynamic: g,
                                        activeSpecsMask: i,
                                        isSpecializationActive: E,
                                        onSpecializationClick: (e) => {
                                            c.specializationSelect({ slotId: o.id, specializationIndex: e });
                                        },
                                    }),
                                ),
                            a().createElement(it, Et({}, o, { groupIndex: t, sectionIndex: u, slotIndex: n })),
                        );
                    }),
                    gt = {
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
                    pt = ({ id: e, isSelected: t, isLocked: u, onSlotSelected: i, panelType: s }) => {
                        const r = U.yZ,
                            o = (0, n.useCallback)(() => {
                                i(r, e);
                            }, [e, i, r]),
                            l = d()(gt.base, gt[`base__${s}`], u && gt.base__disabled, t && gt.base__toggle),
                            c = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: 'url(R.images.gui.maps.icons.quests.bonuses.small.camouflage)',
                                }),
                                [],
                            ),
                            _ = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            ),
                            m = `toggle-camouflage-slot-${e}`;
                        return a().createElement(
                            Pe,
                            { slotType: r, slotId: e, panelType: s },
                            a().createElement(
                                'div',
                                { id: m, className: l, onClick: o, onMouseEnter: ce.$.playHighlight },
                                t && a().createElement('div', { className: gt.glow }),
                                a().createElement('div', { className: gt.image, style: c }),
                                a().createElement('div', { className: gt.toggle, style: _ }),
                            ),
                        );
                    },
                    At = ['groupIndex', 'sectionIndex', 'slotIndex', 'sectionType'];
                function Ft() {
                    return (
                        (Ft =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ft.apply(this, arguments)
                    );
                }
                const ht = (0, c.Pi)((e) => {
                        let t = e.groupIndex,
                            u = e.sectionIndex,
                            n = e.slotIndex,
                            i = e.sectionType,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, At);
                        const o = (0, r.t)().model,
                            l = o.computes.slots.slot(t, u, n),
                            c = o.ammunitionPanel.get(),
                            _ = c.selectedSection,
                            d = c.selectedSlot,
                            m = (_ === i ? d : -1) === l.id;
                        switch (i) {
                            case U.zn: {
                                const e = l;
                                return a().createElement(
                                    bt,
                                    Ft({}, e, s, { groupIndex: t, sectionIndex: u, slotIndex: n, isSelected: m }),
                                );
                            }
                            case U.yZ: {
                                const e = l;
                                return a().createElement(
                                    pt,
                                    Ft({}, s, e, { groupIndex: t, sectionIndex: u, slotIndex: n }),
                                );
                            }
                            case U.YN: {
                                const e = l;
                                return a().createElement(
                                    lt,
                                    Ft({}, s, e, { groupIndex: t, sectionIndex: u, slotIndex: n, isSelected: m }),
                                );
                            }
                            default:
                                return a().createElement(
                                    it,
                                    Ft({}, s, { isSelected: m, groupIndex: t, sectionIndex: u, slotIndex: n }),
                                );
                        }
                    }),
                    Dt = 'Slots_base_27',
                    Ct = [
                        'groupIndex',
                        'sectionIndex',
                        'sectionType',
                        'onActiveSlotChanged',
                        'isDisabled',
                        'blockOnGrabIds',
                        'isChangeSetupIndex',
                        'setIsExitBlocked',
                    ];
                function ft() {
                    return (
                        (ft =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ft.apply(this, arguments)
                    );
                }
                const vt = (0, c.Pi)((e) => {
                        let t = e.groupIndex,
                            u = e.sectionIndex,
                            i = e.sectionType,
                            s = e.onActiveSlotChanged,
                            o = e.isDisabled,
                            l = e.blockOnGrabIds,
                            c = e.isChangeSetupIndex,
                            _ = e.setIsExitBlocked,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Ct);
                        const E = (0, n.useRef)(null),
                            b = (0, n.useRef)(null),
                            g = (0, r.t)(),
                            p = g.model,
                            A = g.controls,
                            F = p.computes.slots.length(t, u),
                            h = p.ammunitionPanel.get(),
                            D = h.selectedSection,
                            C = h.selectedSlot,
                            f = h.syncInitiator,
                            v = (0, n.useCallback)(
                                (e, t) => {
                                    A.dragDropSwap({
                                        sectionType: i,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(t[t.length - 1]),
                                    });
                                },
                                [A, i],
                            ),
                            S = D === i,
                            B = i === U.YN,
                            w = S ? C : -1,
                            y = `${i}-${F}slots`,
                            x = (0, se.UW)({
                                baseId: y,
                                slotsLength: F,
                                handleSwap: v,
                                setIsExitBlocked: _,
                                syncInitiator: f,
                            }),
                            T = x.handleGrabberAction,
                            k = x.dragState,
                            O = x.getForceCenterX;
                        (0, n.useEffect)(() => {
                            S && -1 !== w && E.current && s(E, D, w);
                        }, [s, S, D, w]);
                        const R = (e, t) => {
                                if ((o || ce.$.playClick(), 'number' != typeof t))
                                    return console.warn('selectedSlot is not a number');
                                A.sectionSelect({ selectedSlot: t, selectedSection: e });
                            },
                            L = (e) => {
                                E.current = e ? e.current : null;
                            },
                            N = (e, t) => {
                                A.slotClear({ slotId: e, sectionType: t });
                            };
                        return a().createElement(
                            'div',
                            { id: y, ref: b, className: d()(Dt, i) },
                            I(F, (e) => {
                                const r = !B && F > 1 ? `${y}-${e}` : '';
                                return a().createElement(
                                    n.Fragment,
                                    { key: `slot ${t}-${u}-${e}` },
                                    e > 0 && a().createElement(de, null),
                                    a().createElement(
                                        ht,
                                        ft(
                                            {
                                                groupIndex: t,
                                                sectionIndex: u,
                                                slotIndex: e,
                                                sectionType: i,
                                                isSectionSelected: S,
                                                isDisabled: o,
                                                contextMenuDisabled: B,
                                                slotType: i,
                                                onActiveSlotChanged: s,
                                                onSlotSelected: R,
                                                onActiveSlotRefChanged: L,
                                                onSlotClear: N,
                                                grabberId: r,
                                                containerRef: b,
                                                forceLeftUpdate: O(r),
                                                activeDragId: k.activeDragId,
                                                handleGrabberAction: T,
                                                potentialDropId: k.potentialDropId,
                                                blockOnGrabIds: l,
                                                isSetupSwitching: c,
                                                isChangeSetupIndex: c,
                                            },
                                            m,
                                        ),
                                    ),
                                );
                            }),
                        );
                    }),
                    St = [
                        'groupIndex',
                        'sectionIndex',
                        'type',
                        'newItemsCount',
                        'panelType',
                        'sectionsIds',
                        'isSetupSwitching',
                        'classMix',
                    ];
                function Bt() {
                    return (
                        (Bt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Bt.apply(this, arguments)
                    );
                }
                const wt = (0, c.Pi)((e) => {
                    let t = e.groupIndex,
                        u = e.sectionIndex,
                        i = e.type,
                        s = e.newItemsCount,
                        o = e.panelType,
                        l = e.sectionsIds,
                        c = e.isSetupSwitching,
                        _ = e.classMix,
                        m = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, St);
                    const E = (0, r.t)().model,
                        b = (0, n.useRef)(null),
                        g = E.ammunitionPanel.get(),
                        p = g.selectedSection,
                        A = g.syncInitiator,
                        F = E.computes.slots.length(t, u),
                        h = E.computes.slots.existFilled(t, u),
                        D = p === i,
                        C = (0, se.Tu)(i, l),
                        f = C.selfId,
                        v = C.blockOnGrabIds,
                        S = F > 0 && o !== Z.w.Compare && o !== Z.w.Battle && o !== Z.w.Respawn,
                        B = R.strings.tank_setup.section.$dyn(i);
                    if ('string' != typeof B)
                        throw new Error(`No top label text for section type ${i} or it's not a string`);
                    return a().createElement(
                        'div',
                        {
                            id: c ? ie : f,
                            ref: b,
                            className: d()(
                                re,
                                _,
                                D && 'sectionSelected',
                                F > 1 && 'multiSlot',
                                A >= 0 && h && 'existFilledSlots',
                            ),
                        },
                        S &&
                            a().createElement(
                                'div',
                                { className: oe },
                                a().createElement(ae, { text: B, parentRef: b, show: !D, panelType: o }),
                            ),
                        a().createElement(
                            vt,
                            Bt({ groupIndex: t, sectionIndex: u, sectionType: i, panelType: o, blockOnGrabIds: v }, m),
                        ),
                        Boolean(s) &&
                            a().createElement(
                                'div',
                                { className: le },
                                a().createElement(K, { value: s, size: 'small', fadeInAnimation: !0 }),
                            ),
                    );
                });
                var yt = u(8598);
                const xt = {
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
                    It = ({
                        id: e,
                        itemInstalledSetupIdx: t,
                        isMountedMoreThanOne: u,
                        imageSource: i,
                        count: s,
                        isInfinity: r,
                        isSelected: o,
                        keyName: l,
                        panelType: c,
                        intCD: _,
                        slotIndex: m,
                        grabberId: E,
                        isSetupSwitching: b,
                        containerRef: g,
                        activeDragId: p,
                        handleGrabberAction: A,
                        forceLeftUpdate: F,
                        potentialDropId: h,
                        blockOnGrabIds: D,
                        shellState: C,
                        isDisabled: f,
                    }) => {
                        const v = !(0, W.s$)(c),
                            S = (0, n.useMemo)(() => ({ backgroundImage: `url(${i})` }), [i]),
                            B = E && E === h,
                            w = E && E === p,
                            y = (0, n.useMemo)(() => {
                                const n = { slotType: U.g9, slotId: e, fieldType: 1, intCD: _ };
                                return [
                                    n,
                                    Object.assign({}, n, {
                                        installedSlotId: e,
                                        itemInstalledSetupIdx: t,
                                        itemInstalledSetupSlotIdx: e,
                                        isMountedMoreThanOne: u,
                                    }),
                                ];
                            }, [_, e, t, u]),
                            x = y[0],
                            I = y[1],
                            T = (0, n.useMemo)(
                                () => ({
                                    id: E,
                                    containerRef: g,
                                    isEnabled: Boolean(E) && o,
                                    isUpdateAvailable: Boolean(p),
                                    handleAction: A,
                                    forceCenterX: F,
                                    blockOnGrabIds: D,
                                }),
                                [p, D, g, F, E, A, o],
                            ),
                            k = (0, n.useMemo)(
                                () => ({ slotIndex: m, uniqueKey: _, slotType: U.g9, imageSource: null }),
                                [_, m],
                            );
                        return a().createElement(
                            tt,
                            { isEnabled: v && !b && !f, args: I },
                            a().createElement(
                                Ne.t,
                                {
                                    args: x,
                                    decoratorId: [Z.w.Battle, Z.w.Prebattle].includes(c)
                                        ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                        : 0,
                                    isEnabled: !p,
                                },
                                a().createElement(
                                    'div',
                                    { id: `shell-slot-${m}`, className: xt.base },
                                    l &&
                                        a().createElement(
                                            'div',
                                            { className: xt.label },
                                            a().createElement(Le, {
                                                text: l,
                                                show: o || c === Z.w.Battle || c === Z.w.Respawn,
                                                shellState: C,
                                                panelType: c,
                                                className: d()(
                                                    0 === m && xt.topLabel__first,
                                                    2 === m && xt.topLabel__last,
                                                ),
                                            }),
                                        ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: d()(
                                                xt.shell,
                                                !p && v && !f && xt.shell__active,
                                                w && xt.shell__grabbing,
                                                !w && B && xt.shell__potential,
                                            ),
                                        },
                                        a().createElement(
                                            me.J,
                                            { when: v, wrapper: Ie, withProps: T },
                                            a().createElement(
                                                me.J,
                                                { when: v, wrapper: nt.y, withProps: k },
                                                a().createElement('div', { className: xt.image, style: S }),
                                                !r && a().createElement(yt.X, { count: s }),
                                                r && a().createElement('div', { className: xt.infinity }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    Tt = {
                        base: 'ToggleSlot_base_93',
                        slot: 'ToggleSlot_slot_cd',
                        slot__grabbing: 'ToggleSlot_slot__grabbing_df',
                        image: 'ToggleSlot_image_e0',
                        slot__active: 'ToggleSlot_slot__active_15',
                        glow: 'ToggleSlot_glow_48',
                        toggle: 'ToggleSlot_toggle_73',
                    },
                    kt = ({ id: e, isSelected: t, imageSource: u, onSlotSelected: i, panelType: s }) => {
                        const r = (0, n.useCallback)(() => {
                                !t && i(e);
                            }, [e, t, i]),
                            o = d()(Tt.slot, !t && Tt.slot__active, Tt.slot__compare),
                            l = (0, n.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]),
                            c = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            );
                        return a().createElement(
                            Pe,
                            { slotType: U.WI, slotId: e, panelType: s },
                            a().createElement(
                                'div',
                                { className: Tt.base },
                                a().createElement(
                                    'div',
                                    { className: o, onClick: r, id: `shell-slot-${e}` },
                                    t && a().createElement('div', { className: Tt.glow }),
                                    a().createElement('div', { className: Tt.image, style: l }),
                                    a().createElement('div', { className: Tt.toggle, style: c }),
                                ),
                            ),
                        );
                    },
                    Ot = 'ShellContainer_base_46',
                    Rt = 'ShellContainer_base__compressed_13',
                    Lt = [
                        'groupIndex',
                        'sectionIndex',
                        'slotIndex',
                        'isCompare',
                        'handleSlotSelected',
                        'baseId',
                        'grabber',
                        'panelType',
                    ];
                function Nt() {
                    return (
                        (Nt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Nt.apply(this, arguments)
                    );
                }
                const Pt = (0, c.Pi)((e) => {
                        let t = e.groupIndex,
                            u = e.sectionIndex,
                            n = e.slotIndex,
                            i = e.isCompare,
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
                            })(e, Lt);
                        const m = l.handleGrabberAction,
                            E = l.dragState,
                            b = l.getForceCenterX,
                            g = (0, r.t)().model,
                            p = g.computes.slots.length(t, u),
                            A = g.computes.slots.slot(t, u, n),
                            F = !i && p > 1 ? `${o}-${A.id}` : '';
                        return (0, W.j2)(A)
                            ? null
                            : a().createElement(
                                  'div',
                                  { key: A.id, className: d()(Ot, !i && 0 !== n && Rt) },
                                  i
                                      ? a().createElement(kt, Nt({}, A, { onSlotSelected: s, panelType: c }))
                                      : a().createElement(
                                            It,
                                            Nt(
                                                {},
                                                A,
                                                {
                                                    slotIndex: n,
                                                    grabberId: F,
                                                    forceLeftUpdate: b(F),
                                                    activeDragId: E.activeDragId,
                                                    handleGrabberAction: m,
                                                    potentialDropId: E.potentialDropId,
                                                    panelType: c,
                                                },
                                                _,
                                            ),
                                        ),
                              );
                    }),
                    Mt = 'Shells_base_f9',
                    jt = (0, c.Pi)(
                        ({
                            panelType: e,
                            onSelected: t,
                            isCompare: u,
                            isSelected: i,
                            syncInitiator: s,
                            blockOnGrabIds: o,
                            isDisabled: l,
                            isSetupSwitching: c,
                            setIsExitBlocked: _,
                            groupIndex: d,
                            sectionIndex: m,
                        }) => {
                            const E = (0, r.t)(),
                                b = E.model,
                                g = E.controls,
                                A = b.computes.slots.length(d, m),
                                F = (0, n.useRef)(!1),
                                h = (0, n.useRef)(null),
                                D = u ? U.WI : U.g9,
                                C = `${D}-${A}shells`,
                                f = !(0, W.iN)(e),
                                v = (0, n.useCallback)(
                                    (e) => {
                                        (g.sectionSelect({ selectedSlot: e, selectedSection: D }),
                                            f && ce.$.playClick());
                                    },
                                    [g, D, f],
                                ),
                                S = (0, n.useCallback)(() => {
                                    i || u || l || c || v(0);
                                }, [i, u, c, l, v]),
                                B = (0, n.useCallback)(
                                    (e, t) => {
                                        g.dragDropSwap({
                                            sectionType: D,
                                            dragId: Number(e[e.length - 1]),
                                            dropId: Number(t[t.length - 1]),
                                        });
                                    },
                                    [g, D],
                                ),
                                w = (0, se.UW)({
                                    baseId: C,
                                    slotsLength: A,
                                    handleSwap: B,
                                    setIsExitBlocked: _,
                                    syncInitiator: s,
                                });
                            return (
                                (0, n.useEffect)(
                                    () =>
                                        p(() => {
                                            F.current = !0;
                                        }),
                                    [],
                                ),
                                (0, n.useEffect)(() => {
                                    if (i && e === Z.w.Setup) {
                                        if (!F.current)
                                            return p(() => {
                                                t();
                                            });
                                        t();
                                    }
                                }, [i, e, t]),
                                a().createElement(
                                    'div',
                                    {
                                        id: C,
                                        ref: h,
                                        className: Mt,
                                        onClick: S,
                                        onMouseEnter: () => {
                                            !l && f && ce.$.playHighlight();
                                        },
                                    },
                                    I(A, (t) =>
                                        a().createElement(Pt, {
                                            key: `${d} ${m} ${t}`,
                                            groupIndex: d,
                                            sectionIndex: m,
                                            slotIndex: t,
                                            isCompare: u,
                                            containerRef: h,
                                            handleSlotSelected: v,
                                            panelType: e,
                                            blockOnGrabIds: o,
                                            isSelected: i,
                                            isDisabled: l,
                                            isSetupSwitching: c,
                                            grabber: w,
                                            baseId: C,
                                        }),
                                    ),
                                )
                            );
                        },
                    ),
                    $t = {
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
                    Ht = [Z.w.Hangar, Z.w.Battle, Z.w.Prebattle, Z.w.Respawn],
                    Gt = (0, c.Pi)(
                        ({
                            type: e,
                            sectionsIds: t,
                            panelType: u,
                            onActiveSlotChanged: i,
                            isDisabled: s,
                            isBorderActive: o,
                            classMix: l,
                            isSetupSwitching: c,
                            setIsExitBlocked: _,
                            newItemsCount: m,
                            groupIndex: E,
                            sectionIndex: b,
                        }) => {
                            const g = (0, r.t)().model,
                                p = g.ammunitionPanel.get(),
                                A = p.ammoNotFull,
                                F = p.selectedSection,
                                h = p.syncInitiator,
                                D = (0, n.useRef)(null),
                                C = u === Z.w.Compare,
                                f = F === e,
                                v = (0, n.useCallback)(() => {
                                    i(D, F, 0);
                                }, [i, F]),
                                S = (0, se.Tu)(e, t),
                                B = S.selfId,
                                w = S.blockOnGrabIds,
                                y = ((e) => Ht.includes(e))(u) && !s && A,
                                x = g.computes.slots.filteredLength(E, b),
                                I = !C && u !== Z.w.Battle && u !== Z.w.Respawn;
                            return a().createElement(
                                'div',
                                {
                                    id: c ? ie : B,
                                    className: d()(
                                        $t.base,
                                        l,
                                        $t[`base__${u}`],
                                        !o && f && $t.base__selected,
                                        C && $t.base__compare,
                                        s && $t.base__disabled,
                                    ),
                                    ref: D,
                                },
                                y && a().createElement('div', { className: $t.attention }),
                                I &&
                                    a().createElement(
                                        'div',
                                        { className: $t.label },
                                        a().createElement(ae, {
                                            text: R.strings.tank_setup.section.shells(),
                                            parentRef: D,
                                            show: !f,
                                            panelType: u,
                                        }),
                                    ),
                                y &&
                                    a().createElement('div', {
                                        className: d()(
                                            $t.border,
                                            2 === x && $t.border__double,
                                            3 === x && $t.border__triple,
                                        ),
                                    }),
                                a().createElement(jt, {
                                    groupIndex: E,
                                    sectionIndex: b,
                                    panelType: u,
                                    onSelected: v,
                                    isSelected: f,
                                    isCompare: C,
                                    syncInitiator: h,
                                    blockOnGrabIds: w,
                                    isDisabled: s,
                                    isSetupSwitching: c,
                                    setIsExitBlocked: _,
                                }),
                                Boolean(m) &&
                                    a().createElement(
                                        'div',
                                        { className: $t.counter },
                                        a().createElement(K, { value: m, size: 'small', fadeInAnimation: !0 }),
                                    ),
                                s && a().createElement('div', { className: $t.disabled }),
                            );
                        },
                    ),
                    zt = {
                        base: 'Sections_base_13',
                        section: 'Sections_section_35',
                        section__battle: 'Sections_section__battle_d3',
                        section__small: 'Sections_section__small_73',
                        section__extraSmall: 'Sections_section__extraSmall_5f',
                        section__first: 'Sections_section__first_e2',
                    };
                function Wt() {
                    return (
                        (Wt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Wt.apply(this, arguments)
                    );
                }
                const Ut = (0, c.Pi)(
                        ({
                            groupIndex: e,
                            panelType: t,
                            isDisabled: u = !1,
                            onActiveSlotChanged: n,
                            isBorderActive: i,
                            isChangeSetupIndex: s,
                            setIsExitBlocked: o,
                        }) => {
                            const l = (0, r.t)().model,
                                c = C(['section'], zt),
                                _ = l.computes.sections.IDs(e),
                                m = {
                                    panelType: t,
                                    isDisabled: u,
                                    onActiveSlotChanged: n,
                                    isBorderActive: i,
                                    sectionsIds: _,
                                    isChangeSetupIndex: s,
                                    setIsExitBlocked: o,
                                };
                            return a().createElement(
                                'div',
                                { className: zt.base },
                                I(l.computes.sections.length(e), (u) => {
                                    const n = l.computes.sections.section(e, u);
                                    if (!n.slots || !n.slots.length) return null;
                                    const i = d()(
                                        c.section,
                                        0 !== u && (0, W.s$)(t) && zt.section__battle,
                                        0 === u && zt.section__first,
                                    );
                                    if (n.type === U.g9 || n.type === U.WI) {
                                        const t = n;
                                        return a().createElement(
                                            Gt,
                                            Wt({}, t, m, {
                                                groupIndex: e,
                                                sectionIndex: u,
                                                isSetupSwitching: s,
                                                key: `${n.name}${e}${n.slots.length}`,
                                                classMix: i,
                                            }),
                                        );
                                    }
                                    return a().createElement(
                                        wt,
                                        Wt({}, n, m, {
                                            groupIndex: e,
                                            sectionIndex: u,
                                            isSetupSwitching: s,
                                            key: `${n.name}${e}${n.slots.length}`,
                                            classMix: i,
                                        }),
                                    );
                                }),
                            );
                        },
                    ),
                    qt = 'KeyboardKey_base_57',
                    Xt = 'KeyboardKey_back_43',
                    Vt = a().memo(({ text: e }) =>
                        a().createElement('div', { className: qt }, a().createElement('div', { className: Xt }, e)),
                    ),
                    Kt = 'SetupSwitchHotkey_base_4c',
                    Zt = 'SetupSwitchHotkey_hotKeyWrapper_8d',
                    Yt = 'SetupSwitchHotkey_plusWrapper_f0',
                    Jt = 'SetupSwitchHotkey_plus_f0',
                    Qt = 'SetupSwitchHotkey_plus__horizontal_e0',
                    eu = 'SetupSwitchHotkey_plus__vertical_5b',
                    tu = a().memo(({ hotKeys: e }) =>
                        a().createElement(
                            'div',
                            { className: Kt },
                            e.map((e, t) => {
                                if (!e) return null;
                                const u = e.value;
                                return 0 === t
                                    ? a().createElement(Vt, { key: t, text: u })
                                    : a().createElement(
                                          'div',
                                          { key: t, className: Zt },
                                          a().createElement(
                                              'div',
                                              { className: Yt },
                                              a().createElement('div', { className: `${Jt} ${Qt}` }),
                                              a().createElement('div', { className: `${Jt} ${eu}` }),
                                          ),
                                          a().createElement(Vt, { text: u }),
                                      );
                            }),
                        ),
                    ),
                    uu = {
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
                const au = R.strings.tank_setup.tooltips.prebattleSwitchIndicator,
                    iu = (e) => e.setupSelector.hotKeys,
                    su = (0, c.Pi)(
                        ({
                            groupIndex: e,
                            sectionProps: t,
                            isSetupSwitching: u,
                            setSetupSwitching: n,
                            handleSetupSwitching: i,
                        }) => {
                            const s = C(['switch'], uu),
                                o = (0, r.t)().model,
                                l = o.root.get().isDisabled,
                                c = o.computes.groups.group(e);
                            return a().createElement(
                                'div',
                                { key: c.groupId, className: uu.base },
                                a().createElement(
                                    'div',
                                    { className: uu.wrapper },
                                    a().createElement(
                                        z,
                                        ((e, t) => ({ index: e.currentIndex, setSetupSwitching: t }))(c, n),
                                        a().createElement(Ut, nu({}, t, { groupIndex: e, isChangeSetupIndex: u })),
                                    ),
                                    c.setupSelector.isSwitchEnabled &&
                                        a().createElement(
                                            'div',
                                            { className: d()(s.switch, (0, W.iN)(t.panelType) && uu.switch__battle) },
                                            a().createElement(P._, {
                                                states: c.setupSelector.states,
                                                onClick: i,
                                                totalCount: c.totalCount,
                                                currentIndex: c.currentIndex,
                                                groupId: c.groupId,
                                                isDisabled: t.isDisabled,
                                            }),
                                            c.setupSelector.isPrebattleSwitchDisabled &&
                                                a().createElement(
                                                    N,
                                                    {
                                                        header: au.title(),
                                                        body: String(au.desc.$dyn(`c_${c.groupId}`)),
                                                    },
                                                    a().createElement('div', {
                                                        className: uu.prebattleSwitchIndicator,
                                                    }),
                                                ),
                                        ),
                                ),
                                ((_ = c),
                                ((m = t.panelType) === Z.w.Battle || m === Z.w.Respawn) &&
                                    _.setupSelector.isSwitchEnabled &&
                                    iu(_) &&
                                    a().createElement(
                                        'div',
                                        { className: d()(uu.hint, l && uu.hint__disabled) },
                                        a().createElement(tu, { hotKeys: iu(c) }),
                                    )),
                            );
                            var _, m;
                        },
                    ),
                    ru = 'Groups_base_de',
                    ou = (0, c.Pi)(
                        ({ sectionProps: e, isSetupSwitching: t, isReady: u, setSetupSwitching: i, children: s }) => {
                            const o = (0, r.t)(),
                                l = o.model,
                                c = o.controls,
                                _ = l.vehicleInfo.get(),
                                d = c.changeSetupIndex,
                                m = null == _ ? void 0 : _.vehicleName;
                            ((0, n.useEffect)(() => {
                                (e.panelType !== Z.w.Hangar && e.panelType !== Z.w.Setup) || !u || i(!1);
                            }, [u, e.panelType, i]),
                                (0, n.useEffect)(() => {
                                    e.panelType === Z.w.Respawn && i(!1);
                                }, [m, e.panelType, i]));
                            const E = (0, n.useCallback)(
                                (t) => {
                                    (e.panelType === Z.w.Respawn && i(!0), d(t));
                                },
                                [d, e.panelType, i],
                            );
                            return a().createElement(
                                'div',
                                { className: ru },
                                I(l.computes.groups.length(), (u) =>
                                    a().createElement(su, {
                                        key: `group-${u}`,
                                        sectionProps: e,
                                        groupIndex: u,
                                        isSetupSwitching: t,
                                        setSetupSwitching: i,
                                        handleSetupSwitching: E,
                                    }),
                                ),
                                s,
                            );
                        },
                    );
                function lu() {
                    return (
                        (lu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        lu.apply(this, arguments)
                    );
                }
                const cu = ({ children: e, tooltipArgs: t, className: u }) => {
                        if (!t) return e;
                        const n = a().createElement('div', { className: u }, e);
                        if (t.header || t.body) return a().createElement(N, t, n);
                        const i = t.contentId;
                        return i
                            ? a().createElement(T.u, lu({}, t, { contentId: i }), n)
                            : a().createElement(Ne.t, t, n);
                    },
                    _u = 'RoleSkillSlot_base_c4',
                    du = 'RoleSkillSlot_icon_79',
                    mu = ({ roleSkill: e, tooltipId: t, tooltipHeader: u, tooltipBody: i, className: s }) => {
                        const r = (0, n.useMemo)(
                            () => ({
                                args: { tooltipId: t, roleSkill: e, header: u, body: i, hasHtmlContent: !0 },
                                header: u,
                                body: i,
                                ignoreShowDelay: !0,
                            }),
                            [e, u, i, t],
                        );
                        return a().createElement(
                            cu,
                            { tooltipArgs: r, className: d()(_u, s) },
                            a().createElement('div', {
                                className: du,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                },
                            }),
                        );
                    },
                    Eu = 'SlotGlow_base_40',
                    bu = 'SlotGlow_glow_a9',
                    gu = 'SlotGlow_glow__initialized_8d',
                    pu = 'SlotGlow_glow__shown_f2',
                    Au = 'SlotGlow_glow__hidden_94',
                    Fu = (0, n.memo)(({ slotOffset: e, slotWidth: t, isAnimationRunning: u }) => {
                        const i = (0, n.useState)({ offset: e, slotWidth: t }),
                            s = i[0],
                            r = i[1],
                            o = (0, n.useRef)({ initialized: !1, offset: e, slotWidth: t });
                        ((0, n.useEffect)(() => {
                            let u = o.current.initialized;
                            (!u && e && ((u = !0), r({ offset: e, slotWidth: t })),
                                (o.current = { initialized: u, offset: e, slotWidth: t }));
                        }, [e, t]),
                            (0, n.useEffect)(() => {
                                u || r(o.current);
                            }, [u]));
                        const l = (0, n.useMemo)(() => {
                                const e = s.slotWidth + 25;
                                return { left: s.offset, width: e, backgroundSize: `${m.O.view.pxToRem(e)}rem 100%` };
                            }, [s.offset, s.slotWidth]),
                            c = !u && s.offset === o.current.offset,
                            _ = d()(bu, o.current.initialized && gu, c ? pu : Au);
                        return a().createElement(
                            'div',
                            { className: Eu },
                            a().createElement('div', { className: _, style: l }),
                        );
                    }),
                    hu = (0, c.Pi)(
                        ({
                            show: e = !0,
                            isReady: t = !0,
                            panelType: u,
                            isDisabled: i = !1,
                            onResize: s,
                            setIsExitBlocked: o,
                        }) => {
                            const l = (0, r.t)(),
                                c = l.model,
                                _ = l.controls,
                                m = c.ammunitionPanel.get(),
                                E = m.isSetupSwitchInProgress,
                                b = m.syncInitiator,
                                A = c.roleSkillSlot.get(),
                                F = (0, n.useState)(!1),
                                h = F[0],
                                D = F[1],
                                S = (0, n.useRef)(!1),
                                B = (0, n.useState)({ slotWidth: 0, slotOffset: 0 }),
                                w = B[0],
                                y = B[1],
                                I = (0, n.useState)(!1),
                                T = I[0],
                                k = I[1],
                                O = (0, n.useRef)(null),
                                R = (0, n.useContext)(g),
                                L = (0, n.useRef)({
                                    element: null,
                                    generation: 0,
                                    slotIndex: null,
                                    sectionIndex: null,
                                }),
                                N = (0, n.useCallback)(
                                    (e, t) => {
                                        if (h || E || u !== Z.w.Hangar) return;
                                        const n = t || { width: 0, height: 0, offsetX: 0, offsetY: 0 };
                                        (_.sectionResized(Object.assign({ sectionType: e }, n)),
                                            R && (R.freeze(), R.resize()));
                                    },
                                    [h, E, u, _, R],
                                ),
                                P = (0, n.useCallback)(
                                    (e) => {
                                        N('main', e);
                                    },
                                    [N],
                                );
                            (f(O, P, !0, [b]), (0, n.useEffect)(() => () => P(), [P]));
                            const M = (0, n.useCallback)(() => {
                                    k(!1);
                                }, []),
                                j = (0, n.useCallback)(() => {
                                    if (L.current.element && O.current) {
                                        const e = L.current.element.getBoundingClientRect(),
                                            t = O.current.getBoundingClientRect();
                                        y({ slotWidth: e.width, slotOffset: e.left - t.left + 0.5 * e.width });
                                    }
                                }, []),
                                $ = (0, n.useCallback)(
                                    (e, t, u) => {
                                        if (e.current && O.current) {
                                            const n = ((e, t, u) =>
                                                e !== u.current.slotIndex || t !== u.current.sectionIndex)(u, t, L);
                                            ((L.current.element = e.current),
                                                (L.current.slotIndex = u),
                                                (L.current.sectionIndex = t),
                                                S.current && n ? k(!0) : (S.current = !0),
                                                L.current.generation && j());
                                        }
                                    },
                                    [j],
                                ),
                                H = (0, n.useCallback)(
                                    () =>
                                        p(() => {
                                            ((L.current.generation += 1), j());
                                        }),
                                    [L, j],
                                );
                            ((0, n.useEffect)(() => p(H), [H]),
                                (0, n.useEffect)(
                                    () => (
                                        engine.on('clientResized', H),
                                        () => {
                                            engine.off('clientResized', H);
                                        }
                                    ),
                                    [H],
                                ));
                            const G = w.slotWidth,
                                z = w.slotOffset,
                                W = d()(v.base, !t && v.base__locked, !e && v.base__hidden, i && v.base__disabled),
                                U = d()(v.border, !T && v.border__hidden),
                                q = u === Z.w.Setup || u === Z.w.Compare,
                                X = {
                                    panelType: u,
                                    isDisabled: i,
                                    onActiveSlotChanged: $,
                                    isBorderActive: T,
                                    setIsExitBlocked: o,
                                };
                            (0, n.useEffect)(() => {
                                null == s || s();
                            }, [s, A.roleSkill]);
                            const V = C(['roleSkillSlot'], v);
                            return a().createElement(
                                'div',
                                { ref: O, className: W },
                                q &&
                                    a().createElement(Fu, {
                                        key: L.current.generation,
                                        slotOffset: z,
                                        slotWidth: G,
                                        isAnimationRunning: T,
                                    }),
                                a().createElement(
                                    ou,
                                    { isSetupSwitching: E || h, sectionProps: X, isReady: t, setSetupSwitching: D },
                                    A.roleSkill &&
                                        a().createElement(mu, {
                                            roleSkill: A.roleSkill,
                                            tooltipId: A.tooltipId,
                                            tooltipHeader: A.tooltipHeader,
                                            tooltipBody: A.tooltipBody,
                                            className: d()(v.roleSkillSlot, v[`roleSkillSlot__${u}`], V.roleSkillSlot),
                                        }),
                                ),
                                q &&
                                    a().createElement(
                                        'div',
                                        { className: U },
                                        a().createElement(x, { slotWidth: G, slotOffset: z, onAnimationEnd: M }),
                                    ),
                            );
                        },
                    ),
                    Du = 'App_base_43',
                    Cu = 'App_title_0e',
                    fu = 'App_panel_2c',
                    vu = (0, c.Pi)(() => {
                        const e = (0, r.t)().controls;
                        return (
                            (0, o.gd)(l.n.ESCAPE, e.escKeyDown),
                            a().createElement(
                                'div',
                                { className: Du },
                                a().createElement('span', { className: Cu }, R.strings.veh_compare.vehConf.equipment()),
                                a().createElement(
                                    'div',
                                    { className: fu },
                                    a().createElement(hu, { panelType: Z.w.Compare }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    s().render(
                        a().createElement(r.k, null, a().createElement(vu, null)),
                        document.getElementById('root'),
                    );
                });
            },
            3267: (e, t, u) => {
                u.d(t, { J: () => i });
                var n = u(7363),
                    a = u.n(n);
                const i = ({ wrapper: e, children: t, when: u, withProps: n }) =>
                    u ? a().createElement(e, n, t) : a().createElement(a().Fragment, null, t);
            },
            2189: (e, t, u) => {
                u.d(t, { yy: () => n });
                (u(6483), u(3138), u(7363));
                (u(4598), u(3815), u(8526), u(5521), u(7727), u(1922));
                const n = 'setup-content';
            },
            906: (e, t, u) => {
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
                        const F = o()(
                                `specialization-${e}`,
                                _.base,
                                b && _[`base__${r}`],
                                u && _.base__setup,
                                t && _.base__correct,
                            ),
                            h = o()(_.icon, b && _[`icon__${r}`]),
                            D = b ? '' : _.specializationWrapper,
                            C = i().createElement(
                                'div',
                                { key: e, className: F },
                                i().createElement('div', { className: _.glow }),
                                i().createElement('div', { className: h, style: p }),
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
                                      C,
                                  )
                                : i().createElement('div', { className: D }, C),
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
                            F = e === u,
                            h = !F && t === r.WARNING;
                        return a().createElement(
                            'div',
                            { className: s()(o, { [l]: F, [c]: h, [m]: i }) },
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
                            F = (u + 1) % t,
                            h = (0, r.useCallback)(() => {
                                m || e({ groupId: E, currentIndex: F });
                            }, [E, m, F, e]),
                            D = (0, r.useCallback)(() => {
                                m || (A(!0), s.$.playHighlight());
                            }, [m]),
                            C = (0, r.useCallback)(() => {
                                m || A(!1);
                            }, [m]),
                            f = a()(c, m && _);
                        return o().createElement(
                            'div',
                            {
                                id: `switch-equipment-group-${E}`,
                                className: f,
                                onClick: h,
                                onMouseEnter: D,
                                onMouseLeave: C,
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
                    F = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    h = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    D = [n.dZ, n.sH],
                    C = o().memo(({ in: e, actionType: t }) =>
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
                            D.includes(t) &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        c.Z,
                                        { in: e, timeout: d.wx, classNames: F },
                                        o().createElement('div', { className: b }),
                                    ),
                                    o().createElement(
                                        c.Z,
                                        { in: e, timeout: d.Kz, classNames: h },
                                        o().createElement('div', { className: g }),
                                    ),
                                ),
                        ),
                    ),
                    f = 'ColorMask_base_60',
                    v = 'ColorMask_base__enterActive_62',
                    S = ({ inProp: e, maskImage: t }) =>
                        o().createElement(
                            c.Z,
                            { in: e, timeout: d.Qj, classNames: { enterActive: v } },
                            o().createElement('div', { className: f, style: { maskImage: `url(${t})` } }),
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
                                F = g.leftIntCD,
                                h = g.rightIntCD,
                                D = g.actionType,
                                f = g.intCD,
                                v = (0, r.useState)(!0),
                                y = v[0],
                                x = v[1],
                                I = (0, r.useState)(!0),
                                T = I[0],
                                k = I[1],
                                O = (0, r.useState)(E),
                                R = O[0],
                                L = O[1],
                                N = (0, r.useState)(u),
                                P = N[0],
                                M = N[1],
                                j = (0, r.useState)(b),
                                $ = j[0],
                                H = j[1],
                                G = (0, i.K)(),
                                z = (0, i.K)(),
                                W = [n._2, n.dZ, n.sH],
                                U = (f === u || f === P) && $ !== b && W.includes(D),
                                q = -1 === F || -1 === h,
                                X = s ? `base${s[0].toUpperCase() + s.slice(1)}` : 'base',
                                V = d.Sr[D] || 0;
                            (0, r.useEffect)(() => {
                                m || L(E);
                            }, [m, E]);
                            const K = (0, r.useCallback)(
                                    (e) => {
                                        const u = Object.assign({}, w);
                                        switch (D) {
                                            case n.Xo: {
                                                const e = p === t ? d.mI.RIGHT : d.mI.LEFT,
                                                    n = A - p != 1 ? d.mI.SWAP : '';
                                                ((u.enterDone = B[`${X}__enter${e}${n}`]),
                                                    (u.exit = B[`${X}__exit${e}${n}`]),
                                                    q &&
                                                        (m
                                                            ? (u.enterDone = B[`${X}__enter${d.mI.FADE}`])
                                                            : (u.exit = B[`${X}__exit${d.mI.FADE}`])));
                                                break;
                                            }
                                            case n._2:
                                                ((u.enterDone = B[`${X}__enter${d.mI.DESTROY}`]),
                                                    (u.exit = B[`${X}__exit${d.mI.DESTROY}`]),
                                                    G.run(() => x(!0), d.YJ),
                                                    k(!0));
                                                break;
                                            case n.sH:
                                            case n.dZ:
                                                ((u.enter = B[`${X}__enter${d.mI.DEMOUNT}${d.mI.FADE}`]),
                                                    (u.exit = B[`${X}__exit${d.mI.DEMOUNT}`]),
                                                    G.run(() => x(!0), d.Ij));
                                                break;
                                            case n.eC:
                                            case n.FR:
                                                if (s !== a.g9) {
                                                    const e = D === n.eC ? d.mI.FITTING : d.mI.FITTING_REMOVE;
                                                    ((u.enter = B[`${X}__enter${e}`]),
                                                        (u.exit = B[`${X}__exit${e}`]),
                                                        (u.exitActive = B[`${X}__exitActive${d.mI.FITTING}`]));
                                                } else
                                                    ((u.enterDone = B[`${X}__enter${d.mI.FADE}`]),
                                                        (u.exit = B[`${X}__exit${d.mI.FADE}`]));
                                                break;
                                            default:
                                                return e;
                                        }
                                        return o().cloneElement(e, { classNames: u, timeout: V });
                                    },
                                    [D, V, p, t, A, X, q, m, G, s],
                                ),
                                Z = (0, r.useCallback)(
                                    (e) => {
                                        z.run(() => {
                                            ((e.className = ''), e.classList.add(B.base), M(u), H(b));
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
                                        o().createElement(C, { in: y, actionType: D }),
                                        o().createElement(S, { inProp: T, maskImage: R }),
                                    ),
                            );
                        },
                    );
            },
            5958: (e, t, u) => {
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
                u.d(t, { qm: () => n });
                const n = 'equipmentModernized';
            },
            4888: (e, t, u) => {
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
                u.d(t, { WI: () => s, YN: () => i, g9: () => a, yZ: () => r, zn: () => n });
                const n = 'optDevices',
                    a = 'shells',
                    i = 'battleAbilities',
                    s = 'toggleShells',
                    r = 'toggleCamouflage';
            },
            6880: (e, t, u) => {
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
            1960: () => {},
            7363: (e) => {
                e.exports = React;
            },
            1533: (e) => {
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
        (__webpack_require__.j = 736),
        (() => {
            var e = { 736: 0, 927: 0, 490: 0, 754: 0, 803: 0, 761: 0, 833: 0, 795: 0, 723: 0, 287: 0, 975: 0, 197: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(8176));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
