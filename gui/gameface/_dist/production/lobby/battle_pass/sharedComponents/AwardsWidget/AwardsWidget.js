(() => {
    'use strict';
    var __webpack_modules__ = {
            2372: (u, e, t) => {
                t.d(e, { A: () => i });
                var a = t(7363),
                    r = t.n(a),
                    n = t(9916);
                class i extends r().PureComponent {
                    render() {
                        let u;
                        if ('gold' === this.props.format) u = n.B3.GOLD;
                        else u = n.B3.INTEGRAL;
                        const e = n.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                i.defaultProps = { format: 'integral' };
            },
            280: (u, e, t) => {
                t.d(e, { z: () => E });
                var a = t(6483),
                    r = t.n(a),
                    n = t(3649),
                    i = t(7363),
                    s = t.n(i),
                    o = t(5287);
                const E = ({
                    binding: u,
                    text: e = '',
                    classMix: t,
                    alignment: a = n.v2.left,
                    formatWithBrackets: E,
                }) => {
                    if (null === e) return (console.error("FormatText was supplied with 'null'"), null);
                    const A = E && u ? (0, n.WU)(e, u) : e;
                    return s().createElement(
                        i.Fragment,
                        null,
                        A.split('\n').map((e, E) =>
                            s().createElement(
                                'div',
                                { className: r()(o.Z.base, t), key: `${e}-${E}` },
                                (0, n.Uw)(e, a, u).map((u, e) =>
                                    s().createElement(i.Fragment, { key: `${e}-${u}` }, u),
                                ),
                            ),
                        ),
                    );
                };
            },
            9766: (u, e, t) => {
                t.d(e, { z: () => a.z });
                var a = t(280);
                t(8082);
            },
            8082: (u, e, t) => {
                t(3649);
            },
            3495: (u, e, t) => {
                t.d(e, { Y: () => l });
                var a = t(3138),
                    r = t(7363),
                    n = t(1043),
                    i = t(5262);
                const s = a.O.client.getSize('rem'),
                    o = s.width,
                    E = s.height,
                    A = Object.assign({ width: o, height: E }, (0, i.T)(o, E, n.j)),
                    l = (0, r.createContext)(A);
            },
            1039: (u, e, t) => {
                (t(3138), t(6536), t(7363), t(3495), t(1043), t(5262));
            },
            6010: (u, e, t) => {
                var a = t(7363),
                    r = t(7382),
                    n = t(3495);
                const i = ['children'];
                const s = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(u);
                            for (a = 0; a < n.length; a++) ((t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                            return r;
                        })(u, i);
                    const s = (0, a.useContext)(n.Y),
                        o = s.extraLarge,
                        E = s.large,
                        A = s.medium,
                        l = s.small,
                        F = s.extraSmall,
                        c = s.extraLargeWidth,
                        D = s.largeWidth,
                        d = s.mediumWidth,
                        C = s.smallWidth,
                        B = s.extraSmallWidth,
                        _ = s.extraLargeHeight,
                        m = s.largeHeight,
                        h = s.mediumHeight,
                        b = s.smallHeight,
                        g = s.extraSmallHeight,
                        v = { extraLarge: _, large: m, medium: h, small: b, extraSmall: g };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return e;
                        if (t.large && E) return e;
                        if (t.medium && A) return e;
                        if (t.small && l) return e;
                        if (t.extraSmall && F) return e;
                    } else {
                        if (t.extraLargeWidth && c) return (0, r.H)(e, t, v);
                        if (t.largeWidth && D) return (0, r.H)(e, t, v);
                        if (t.mediumWidth && d) return (0, r.H)(e, t, v);
                        if (t.smallWidth && C) return (0, r.H)(e, t, v);
                        if (t.extraSmallWidth && B) return (0, r.H)(e, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && _) return e;
                            if (t.largeHeight && m) return e;
                            if (t.mediumHeight && h) return e;
                            if (t.smallHeight && b) return e;
                            if (t.extraSmallHeight && g) return e;
                        }
                    }
                    return null;
                };
                s.defaultProps = {
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
                (0, a.memo)(s);
            },
            7382: (u, e, t) => {
                t.d(e, { H: () => a });
                const a = (u, e, t) =>
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
                t.d(e, { YN: () => a.Y });
                (t(6010), t(1039));
                var a = t(3495);
            },
            1043: (u, e, t) => {
                t.d(e, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (u, e, t) => {
                var a;
                function r(u, e, t) {
                    const a = (function (u, e) {
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
                        r = (function (u, e) {
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
                (t.d(e, { T: () => r }),
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
                    })(a || (a = {})));
            },
            6373: (u, e, t) => {
                t.d(e, { i: () => E });
                var a = t(2056),
                    r = t(7363),
                    n = t.n(r);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    E = (u) => {
                        let e = u.children,
                            t = u.body,
                            E = u.header,
                            A = u.note,
                            l = u.alert,
                            F = u.args,
                            c = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(u);
                                for (a = 0; a < n.length; a++) ((t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                                return r;
                            })(u, i);
                        const D = (0, r.useMemo)(() => {
                            const u = Object.assign({}, F, { body: t, header: E, note: A, alert: l });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [l, t, E, A, F]);
                        return n().createElement(
                            a.u,
                            s(
                                {
                                    contentId:
                                        ((d = null == F ? void 0 : F.hasHtmlContent),
                                        d ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: D,
                                },
                                c,
                            ),
                            e,
                        );
                        var d;
                    };
            },
            2056: (u, e, t) => {
                t.d(e, { u: () => E });
                var a = t(7902),
                    r = t(9916),
                    n = t(7363);
                const i = [
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
                const o = (u, e, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    E = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            r = u.args,
                            E = u.onMouseEnter,
                            A = u.onMouseLeave,
                            l = u.onMouseDown,
                            F = u.onClick,
                            c = u.ignoreShowDelay,
                            D = void 0 !== c && c,
                            d = u.ignoreMouseClick,
                            C = void 0 !== d && d,
                            B = u.decoratorId,
                            _ = void 0 === B ? 0 : B,
                            m = u.isEnabled,
                            h = void 0 === m || m,
                            b = u.targetId,
                            g = void 0 === b ? 0 : b,
                            v = u.onShow,
                            w = u.onHide,
                            p = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(u);
                                for (a = 0; a < n.length; a++) ((t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                                return r;
                            })(u, i);
                        const f = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            k = (0, n.useMemo)(() => g || (0, a.F)().resId, [g]),
                            x = (0, n.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (o(t, _, { isMouseEvent: !0, on: !0, arguments: s(r) }, k),
                                    v && v(),
                                    (f.current.isVisible = !0));
                            }, [t, _, r, k, v]),
                            y = (0, n.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const u = f.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (f.current.timeoutId = 0)),
                                        o(t, _, { on: !1 }, k),
                                        f.current.isVisible && w && w(),
                                        (f.current.isVisible = !1));
                                }
                            }, [t, _, k, w]),
                            S = (0, n.useCallback)((u) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(f.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const u = f.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', S, { capture: !0 }),
                                        u && window.clearTimeout(u));
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
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((f.current.timeoutId = window.setTimeout(x, D ? 100 : 400)),
                                                      E && E(u),
                                                      T && T(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              (y(), null == A || A(e), null == u || u(e));
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              (!1 === C && y(), null == F || F(e), null == u || u(e));
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              (!1 === C && y(), null == l || l(e), null == u || u(e));
                                          })(e.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : e;
                        var T;
                    };
            },
            8246: (u, e, t) => {
                t.d(e, { U: () => s });
                var a = t(3138);
                function r(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return n(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return n(u, e);
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var a = 0;
                        return function () {
                            return a >= u.length ? { done: !0 } : { done: !1, value: u[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function n(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, a = new Array(e); t < e; t++) a[t] = u[t];
                    return a;
                }
                const i = (u) => (0 === u ? window : window.subViews.get(u));
                function s({ initializer: u = !0, rootId: e = 0, getRoot: t = i, context: n = 'model' } = {}) {
                    const s = new Map();
                    function o(u, e = 0) {
                        viewEnv.removeDataChangedCallback(u, e)
                            ? s.delete(u)
                            : console.error("Can't remove callback by id:", u);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (u, e, t) => {
                            t.forEach((e) => {
                                const t = s.get(e);
                                void 0 !== t && t(u);
                            });
                        });
                    });
                    const E = (u) => {
                        const a = t(e),
                            r = n.split('.').reduce((u, e) => u[e], a);
                        return 'string' != typeof u || 0 === u.length
                            ? r
                            : u.split('.').reduce((u, e) => {
                                  const t = u[e];
                                  return 'function' == typeof t ? t.bind(u) : t;
                              }, r);
                    };
                    return {
                        subscribe: (t, r) => {
                            const i = 'string' == typeof r ? `${n}.${r}` : n,
                                o = a.O.view.addModelObserver(i, e, !0);
                            return (s.set(o, t), u && t(E(r)), o);
                        },
                        readByPath: E,
                        createCallback: (u, e) => {
                            const t = E(e);
                            return (...e) => {
                                t(u(...e));
                            };
                        },
                        createCallbackNoArgs: (u) => {
                            const e = E(u);
                            return () => {
                                e();
                            };
                        },
                        dispose: function () {
                            for (var u, t = r(s.keys()); !(u = t()).done; ) {
                                o(u.value, e);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (u, e, t) => {
                t.d(e, { q3: () => o });
                var a = t(4598),
                    r = t(9174),
                    n = t(7363),
                    i = t.n(n),
                    s = t(8246);
                const o = () => (u, e) => {
                    const t = (0, n.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: E, children: A, mocks: l }) {
                            const F = (0, n.useRef)([]),
                                c = (t, n, i) => {
                                    var o;
                                    const E = s.U(n),
                                        A =
                                            'real' === t
                                                ? E
                                                : Object.assign({}, E, {
                                                      readByPath:
                                                          null != (o = null == i ? void 0 : i.getter) ? o : () => {},
                                                  }),
                                        l = (u) =>
                                            'mocks' === t ? (null == i ? void 0 : i.getter(u)) : A.readByPath(u),
                                        c = (u) => F.current.push(u),
                                        D = u({
                                            mode: t,
                                            readByPath: l,
                                            externalModel: A,
                                            observableModel: {
                                                array: (u, e) => {
                                                    const n = null != e ? e : l(u),
                                                        i = r.LO.box(n, { equals: a.jv });
                                                    return (
                                                        'real' === t &&
                                                            A.subscribe(
                                                                (0, r.aD)((u) => i.set(u)),
                                                                u,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (u, e) => {
                                                    const n = null != e ? e : l(u),
                                                        i = r.LO.box(n, { equals: a.jv });
                                                    return (
                                                        'real' === t &&
                                                            A.subscribe(
                                                                (0, r.aD)((u) => i.set(u)),
                                                                u,
                                                            ),
                                                        i
                                                    );
                                                },
                                                primitives: (u, e) => {
                                                    const a = l(e);
                                                    if (Array.isArray(u)) {
                                                        const n = u.reduce(
                                                            (u, e) => ((u[e] = r.LO.box(a[e], {})), u),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                A.subscribe(
                                                                    (0, r.aD)((e) => {
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
                                                            i = Object.entries(n),
                                                            s = i.reduce(
                                                                (u, [e, t]) => ((u[t] = r.LO.box(a[e], {})), u),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                A.subscribe(
                                                                    (0, r.aD)((u) => {
                                                                        i.forEach(([e, t]) => {
                                                                            s[t].set(u[e]);
                                                                        });
                                                                    }),
                                                                    e,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: c,
                                        }),
                                        d = { mode: t, model: D, externalModel: A, cleanup: c };
                                    return {
                                        model: D,
                                        controls: 'mocks' === t && i ? i.controls(d) : e(d),
                                        externalModel: A,
                                        mode: t,
                                    };
                                },
                                D = (0, n.useRef)(!1),
                                d = (0, n.useState)(o),
                                C = d[0],
                                B = d[1],
                                _ = (0, n.useState)(() => c(o, E, l)),
                                m = _[0],
                                h = _[1];
                            return (
                                (0, n.useEffect)(() => {
                                    D.current ? h(c(C, E, l)) : (D.current = !0);
                                }, [l, C, E]),
                                (0, n.useEffect)(() => {
                                    B(o);
                                }, [o]),
                                (0, n.useEffect)(
                                    () => () => {
                                        (m.externalModel.dispose(), F.current.forEach((u) => u()));
                                    },
                                    [m],
                                ),
                                i().createElement(t.Provider, { value: m }, A)
                            );
                        },
                        () => (0, n.useContext)(t),
                    ];
                };
            },
            527: (u, e, t) => {
                (t.r(e),
                    t.d(e, { mouse: () => A, off: () => o, on: () => s, onResize: () => n, onScaleUpdated: () => i }));
                var a = t(2472),
                    r = t(1176);
                const n = (0, a.E)('clientResized'),
                    i = (0, a.E)('self.onScaleUpdated'),
                    s = (u, e) => engine.on(u, e),
                    o = (u, e) => engine.off(u, e),
                    E = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const A = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, r.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, r.R)(!0);
                    }
                    function a() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, r.R)(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let r = !0;
                                    const n = `mouse${e}`,
                                        i = E[e]((u) => t([u, 'outside']));
                                    function s(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, s),
                                        a(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(n, s),
                                                (u.listeners -= 1),
                                                a(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            ((u.enabled = !1), a());
                        },
                        enable() {
                            ((u.enabled = !0), a());
                        },
                        enableOutside() {
                            u.enabled && (0, r.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, r.R)(!1);
                        },
                    });
                })();
            },
            5959: (u, e, t) => {
                (t.r(e),
                    t.d(e, {
                        events: () => a,
                        getMouseGlobalPosition: () => i,
                        getSize: () => n,
                        graphicsQuality: () => s,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var a = t(527),
                    r = t(2493);
                function n(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                function a(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => a });
            },
            2493: (u, e, t) => {
                function a(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function r(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                t.d(e, { E: () => r, G: () => a });
            },
            2472: (u, e, t) => {
                function a(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => a });
            },
            3138: (u, e, t) => {
                t.d(e, { O: () => n });
                var a = t(5959),
                    r = t(514);
                const n = { view: t(7641), client: a, sound: r.ZP };
            },
            514: (u, e, t) => {
                t.d(e, { ZP: () => s, hY: () => i });
                var a = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    n = Object.keys(r).reduce((u, e) => ((u[e] = () => (0, a.playSound)(r[e])), u), {}),
                    i = Object.assign({}, n, { sound: a.playSound }),
                    s = { play: i, setRTPC: a.setRTPC };
            },
            3722: (u, e, t) => {
                function a(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function r(u, e, t) {
                    return `url(${a(u, e, t)})`;
                }
                (t.r(e), t.d(e, { getBgUrl: () => r, getTextureUrl: () => a }));
            },
            6112: (u, e, t) => {
                t.d(e, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                t.d(e, { U: () => r });
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
            7641: (u, e, t) => {
                (t.r(e),
                    t.d(e, {
                        addModelObserver: () => l,
                        addPreloadTexture: () => o,
                        arabic2roman: () => k,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => x,
                        events: () => i.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => w,
                        freezeTextureBeforeResize: () => C,
                        getBrowserTexturePath: () => A,
                        getDisplayStatus: () => p,
                        getFontNames: () => f,
                        getScale: () => B,
                        getSize: () => c,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => v,
                        isFocused: () => b,
                        pxToRem: () => _,
                        remToPx: () => m,
                        resize: () => D,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => E,
                        setSidePaddingsRem: () => F,
                        whenTutorialReady: () => S,
                    }));
                var a = t(9690),
                    r = t(3722),
                    n = t(6112),
                    i = t(6538),
                    s = t(8566);
                function o(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function E(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function A(u, e, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, a);
                }
                function l(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function F(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function c(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function D(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function d(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: m(e.x), y: m(e.y) };
                }
                function C() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function B() {
                    return viewEnv.getScale();
                }
                function _(u) {
                    return viewEnv.pxToRem(u);
                }
                function m(u) {
                    return viewEnv.remToPx(u);
                }
                function h(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function w() {
                    viewEnv.forceTriggerMouseMove();
                }
                function p() {
                    return viewEnv.getShowingStatus();
                }
                const f = (() => {
                        let u = [];
                        return () => (0 === u.length && (u = Object.keys(viewEnv.getFontsConfig())), u);
                    })(),
                    k = a.cg,
                    x = Object.keys(n.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === n.W[e]), u),
                        {},
                    ),
                    y = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    S = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : i.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                t.d(e, { qP: () => E });
                const a = ['args'];
                const r = 2,
                    n = 16,
                    i = 32,
                    s = 64,
                    o = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(u);
                                    for (a = 0; a < n.length; a++) ((t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                                    return r;
                                })(e, a);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    E = {
                        close(u) {
                            o('popover' === u ? r : i);
                        },
                        minimize() {
                            o(s);
                        },
                        move(u) {
                            o(n, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            4598: (u, e, t) => {
                t.d(e, { jv: () => a });
                function a() {
                    return !1;
                }
                console.log;
            },
            7902: (u, e, t) => {
                t.d(e, { F: () => a });
                const a = (u = 1) => {
                    const e = new Error().stack;
                    let t,
                        a = R.invalid('resId'),
                        r = '';
                    var n;
                    e &&
                        ((r = (null == (n = e.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : n[0]) || ''),
                        (t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== t &&
                            window.subViews[t] &&
                            (a = window.subViews[t].id));
                    return { callerUrl: r, caller: t, stack: e, resId: a };
                };
            },
            6536: (u, e, t) => {
                t(7363);
            },
            3815: (u, e, t) => {
                t.d(e, { z: () => n });
                var a = t(7363);
                const r = [];
                function n(u) {
                    const e = (0, a.useRef)(u);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            e.current = u;
                        }),
                        (0, a.useCallback)((...u) => (0, e.current)(...u), r)
                    );
                }
            },
            5415: (u, e, t) => {
                t.d(e, { GS: () => E, cJ: () => i });
                var a = t(7363),
                    r = t(7739),
                    n = t(1043);
                let i, s, o;
                (!(function (u) {
                    ((u[(u.ExtraSmall = n.j.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = n.j.small.width)] = 'Small'),
                        (u[(u.Medium = n.j.medium.width)] = 'Medium'),
                        (u[(u.Large = n.j.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = n.j.extraLarge.width)] = 'ExtraLarge'));
                })(i || (i = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = n.j.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = n.j.small.width)] = 'Small'),
                            (u[(u.Medium = n.j.medium.width)] = 'Medium'),
                            (u[(u.Large = n.j.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = n.j.extraLarge.width)] = 'ExtraLarge'));
                    })(s || (s = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = n.j.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = n.j.small.height)] = 'Small'),
                            (u[(u.Medium = n.j.medium.height)] = 'Medium'),
                            (u[(u.Large = n.j.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = n.j.extraLarge.height)] = 'ExtraLarge'));
                    })(o || (o = {})));
                const E = () => {
                    const u = (0, a.useContext)(r.YN),
                        e = u.width,
                        t = u.height,
                        n = ((u) => {
                            switch (!0) {
                                case u.extraLarge:
                                    return i.ExtraLarge;
                                case u.large:
                                    return i.Large;
                                case u.medium:
                                    return i.Medium;
                                case u.small:
                                    return i.Small;
                                case u.extraSmall:
                                    return i.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), i.ExtraSmall);
                            }
                        })(u),
                        E = ((u) => {
                            switch (!0) {
                                case u.extraLargeWidth:
                                    return s.ExtraLarge;
                                case u.largeWidth:
                                    return s.Large;
                                case u.mediumWidth:
                                    return s.Medium;
                                case u.smallWidth:
                                    return s.Small;
                                case u.extraSmallWidth:
                                    return s.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), s.ExtraSmall);
                            }
                        })(u),
                        A = ((u) => {
                            switch (!0) {
                                case u.extraLargeHeight:
                                    return o.ExtraLarge;
                                case u.largeHeight:
                                    return o.Large;
                                case u.mediumHeight:
                                    return o.Medium;
                                case u.smallHeight:
                                    return o.Small;
                                case u.extraSmallHeight:
                                    return o.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), o.ExtraSmall);
                            }
                        })(u);
                    return { mediaSize: n, mediaWidth: E, mediaHeight: A, remScreenWidth: e, remScreenHeight: t };
                };
            },
            5521: (u, e, t) => {
                let a, r;
                (t.d(e, { n: () => a }),
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
                    })(a || (a = {})),
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
                    })(r || (r = {})));
            },
            9480: (u, e, t) => {
                t.d(e, { UI: () => a });
                function a(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, a) => e(null == u ? void 0 : u.value, t, a));
                }
            },
            9690: (u, e, t) => {
                t.d(e, { cg: () => n });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function n(u) {
                    let e = '';
                    for (let t = r.length - 1; t >= 0; t--) for (; u >= r[t]; ) ((e += a[t]), (u -= r[t]));
                    return e;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            7727: (u, e, t) => {
                function a(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                t.d(e, { $: () => r, G: () => a });
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
            3649: (u, e, t) => {
                t.d(e, { Uw: () => c, WU: () => n, v2: () => r });
                var a = t(1281);
                let r;
                function n(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                })(r || (r = {}));
                const i = (u) => u.replace(/&nbsp;/g, ' '),
                    s = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    o = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    E = (u, e, t = r.left) => u.split(e).reduce(t === r.left ? s : o, []),
                    A = (() => {
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
                    l = ['zh_cn', 'zh_sg', 'zh_tw'],
                    F = (u, e = r.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (l.includes(t)) return A(u);
                        if ('ja' === t) {
                            return (0, a.D4)()
                                .parse(u)
                                .map((u) => i(u));
                        }
                        return ((u, e = r.left) => {
                            let t = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = i(u);
                            return (E(n, /( )/, e).forEach((u) => (t = t.concat(E(u, a, r.left)))), t);
                        })(u, e);
                    },
                    c = (u, e, t) => u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : F(u, e)));
            },
            1358: (u, e, t) => {
                t.d(e, { Z: () => n });
                var a = t(3138);
                class r {
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
                        return (window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(u, e, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = a.O.view.addModelObserver(u, t, r);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(n) : (this._views[t] = [n])))
                                : console.error("Can't add callback for model:", u),
                            n
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(u, e);
                        });
                    }
                }
                r.__instance = void 0;
                const n = r;
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
                t.d(e, { B3: () => o, Z5: () => i.Z5, B0: () => s, ry: () => B });
                class a {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let a = u.target;
                                    do {
                                        if (a === e) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (a.__instance || (a.__instance = new a()), a.__instance);
                    }
                    register(u, e) {
                        (this.addMouseListener(), this.entries.push({ container: u, callback: e }));
                    }
                    unregister(u, e) {
                        const t = u,
                            a = e;
                        ((this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== a)),
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
                var i = t(8613);
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
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var F = t(5521),
                    c = t(3138);
                const D = ['args'];
                function d(u, e, t, a, r, n, i) {
                    try {
                        var s = u[n](i),
                            o = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(o) : Promise.resolve(o).then(a, r);
                }
                const C = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    B = (function () {
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
                                    return new Promise(function (a, r) {
                                        var n = u.apply(e, t);
                                        function i(u) {
                                            d(n, a, r, i, s, 'next', u);
                                        }
                                        function s(u) {
                                            d(n, a, r, i, s, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    _ = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                n = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(u);
                                    for (a = 0; a < n.length; a++) ((t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                                    return r;
                                })(e, D);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, n, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, n));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var a;
                    },
                    m = () => _(s.CLOSE),
                    h = (u, e) => {
                        u.keyCode === F.n.ESCAPE && e();
                    };
                var b = t(7572);
                const g = r.instance,
                    v = {
                        DataTracker: n.Z,
                        ViewModel: b.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: E,
                        TimeFormatType: A,
                        DateFormatType: l,
                        makeGlobalBoundingBox: C,
                        sendMoveEvent: (u) => _(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: m,
                        sendClosePopOverEvent: () => _(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            _(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, a, r = R.invalid('resId'), n) => {
                            const i = c.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                E = o.x,
                                A = o.y,
                                l = o.width,
                                F = o.height,
                                D = {
                                    x: c.O.view.pxToRem(E) + i.x,
                                    y: c.O.view.pxToRem(A) + i.y,
                                    width: c.O.view.pxToRem(l),
                                    height: c.O.view.pxToRem(F),
                                };
                            _(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: e,
                                bbox: C(D),
                                on: !0,
                                args: n,
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
                            h(u, m);
                        },
                        handleViewEvent: _,
                        onBindingsReady: B,
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
                            for (const a in e)
                                if (Object.prototype.hasOwnProperty.call(e, a)) {
                                    const r = Object.prototype.toString.call(e[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = e[a];
                                        t[a] = [];
                                        for (let e = 0; e < r.length; e++) t[a].push({ value: u(r[e].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = u(e[a]))
                                            : (t[a] = e[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: g,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (u, e, t) => {
                t.d(e, { Z5: () => a, cy: () => r });
                const a = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    r = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
            },
            2432: (u, e, t) => {
                var a = t(7363),
                    r = t.n(a),
                    n = t(6483),
                    i = t.n(n),
                    s = t(9480),
                    o = t(3403),
                    E = t(6373),
                    A = t(7727),
                    l = t(5415);
                const F = (u, e, t, a, r) => {
                    const n = R.images.gui.maps.icons.battlePass.awards_widget;
                    return r
                        ? `url(${n.$dyn(`${u.toLowerCase()}_${e}${t}_${a}_${r}`)})`
                        : `url(${n.$dyn(`${u.toLowerCase()}_${e}${t}_${a}`)})`;
                };
                let c, D, d, C, B;
                (!(function (u) {
                    ((u.Award = 'Award'),
                        (u.Ticket = 'Ticket'),
                        (u.Coin = 'Coin'),
                        (u.Taler = 'Taler'),
                        (u.Collection = 'Collection'),
                        (u.Commander = 'Commander'));
                })(c || (c = {})),
                    (function (u) {
                        ((u.Small = 'small'), (u.Big = 'big'));
                    })(D || (D = {})),
                    (function (u) {
                        ((u.None = ''), (u.Small = 's'), (u.Medium = 'm'));
                    })(d || (d = {})),
                    (function (u) {
                        ((u.Border = 'border'), (u.Background = 'bg'), (u.Icon = 'icon'), (u.None = ''));
                    })(C || (C = {})),
                    (function (u) {
                        ((u.Hover = 'Hover'), (u.Disabled = 'Disabled'), (u.Triggered = 'Triggered'), (u.None = ''));
                    })(B || (B = {})));
                const _ = {
                        base: 'Background_base_67',
                        bg: 'Background_bg_e8',
                        bgDisabled: 'Background_bgDisabled_e0',
                        bgHover: 'Background_bgHover_b4',
                        base__big: 'Background_base__big_56',
                        base__hovered: 'Background_base__hovered_32',
                    },
                    m = ({ size: u, isHover: e, disabled: t = !1, type: a = c.Coin }) => {
                        const n = (0, l.GS)().mediaSize >= l.cJ.Medium ? d.Medium : d.Small;
                        return r().createElement(
                            'div',
                            { className: i()(_.base, _[`base__${u}`], _[`base__${u}${a}`], e && _.base__hovered) },
                            t
                                ? r().createElement('div', {
                                      className: _.bgDisabled,
                                      style: { backgroundImage: F(a, C.Background, B.Disabled, u, n) },
                                  })
                                : r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement('div', {
                                          className: _.bg,
                                          style: { backgroundImage: F(a, C.Background, B.None, u, n) },
                                      }),
                                      r().createElement('div', {
                                          className: _.bgHover,
                                          style: { backgroundImage: F(a, C.Background, B.Hover, u, n) },
                                      }),
                                  ),
                        );
                    },
                    h = {
                        base: 'Border_base_5a',
                        border: 'Border_border_bd',
                        borderHover: 'Border_borderHover_ab',
                        base__hovered: 'Border_base__hovered_83',
                        borderDisabled: 'Border_borderDisabled_8b',
                        borderDisabled__big: 'Border_borderDisabled__big_12',
                    },
                    b = ({ size: u, isHover: e, highlighted: t = !1, disabled: a = !1, type: n = c.Coin }) => {
                        const s = (0, l.GS)().mediaSize >= l.cJ.Medium ? d.Medium : d.Small;
                        return r().createElement(
                            'div',
                            { className: i()(h.base, h[`base__${u}`], e && h.base__hovered) },
                            a
                                ? r().createElement('div', {
                                      className: i()(h.borderDisabled, h[`borderDisabled__${u}`]),
                                      style: { backgroundImage: F(n, C.Border, B.Disabled, u, s) },
                                  })
                                : r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement('div', {
                                          className: h.border,
                                          style: { backgroundImage: F(t ? c.Collection : n, C.Border, B.None, u, s) },
                                      }),
                                      r().createElement('div', {
                                          className: h.borderHover,
                                          style: { backgroundImage: F(n, C.Border, B.Hover, u, s) },
                                      }),
                                  ),
                        );
                    };
                var g = t(2372),
                    v = t(9766);
                const w = { base: 'CountValue_base_fe', base__big: 'CountValue_base__big_ea' },
                    p = ({ state: u, count: e, size: t, maxCount: a = 0 }) => {
                        switch (u) {
                            case k.InProgress:
                                return r().createElement(v.z, { text: `${e || 0} / ${a}` });
                            case k.Completed:
                                return r().createElement('div', { className: i()(w.base, w[`base__${t}`]) });
                            default:
                                return r().createElement(g.A, { format: 'integral', value: e });
                        }
                    },
                    f = {
                        base: 'Count_base_a6',
                        base__big: 'Count_base__big_2c',
                        base__locked: 'Count_base__locked_e3',
                        base__disabled: 'Count_base__disabled_66',
                    };
                let k;
                !(function (u) {
                    ((u.Default = ''), (u.InProgress = 'InProgress'), (u.Completed = 'Completed'));
                })(k || (k = {}));
                const x = ({
                        size: u,
                        count: e,
                        maxCount: t,
                        state: a = k.Default,
                        isLocked: n = !1,
                        disabled: s = !1,
                    }) =>
                        r().createElement(
                            'div',
                            { className: i()(f.base, f[`base__${u}`], n && f.base__locked, s && f.base__disabled) },
                            r().createElement(p, { state: a, size: u, count: e, maxCount: t }),
                        ),
                    y = {
                        base: 'Icon_base_05',
                        base__big: 'Icon_base__big_9e',
                        base__darkened: 'Icon_base__darkened_2b',
                        base__hover: 'Icon_base__hover_03',
                        base__disabled: 'Icon_base__disabled_a1',
                    },
                    S = (u, e, t) => {
                        switch (!0) {
                            case t:
                                return 'disabled';
                            case u:
                                return 'hover';
                            case e:
                                return 'darkened';
                            default:
                                return '';
                        }
                    },
                    T = ({ size: u, isHover: e, isDark: t = !0, disabled: a = !1, type: n }) => {
                        const s = (0, l.GS)().mediaSize >= l.cJ.Medium ? d.Medium : d.Small;
                        return r().createElement('div', {
                            className: i()(y.base, y[`base__${u}`], y[`base__${S(e, t, a)}`]),
                            style: { backgroundImage: F(n, C.Icon, B.None, u, n === c.Collection ? d.None : s) },
                        });
                    },
                    L = {
                        base: 'Label_base_05',
                        base__big: 'Label_base__big_3c',
                        base__gold: 'Label_base__gold_dc',
                        base__hover: 'Label_base__hover_51',
                        base__disabled: 'Label_base__disabled_df',
                    },
                    O = (u, e) => {
                        switch (!0) {
                            case u:
                                return 'disabled';
                            case e:
                                return 'hover';
                            default:
                                return '';
                        }
                    },
                    M = ({ size: u, title: e, isHover: t, disabled: a = !1, isGold: n = !1 }) =>
                        r().createElement(
                            'div',
                            { className: i()(L.base, L[`base__${u}`], L[`base__${O(a, t)}`], n && L.base__gold) },
                            e,
                        ),
                    P = {
                        base: 'ChoiceAward_base_0d',
                        base__big: 'ChoiceAward_base__big_ec',
                        base__disabled: 'ChoiceAward_base__disabled_f1',
                        base__hasAppearAnimation: 'ChoiceAward_base__hasAppearAnimation_a0',
                        baseAppear: 'ChoiceAward_baseAppear_89',
                        shine: 'ChoiceAward_shine_d5',
                        shine_small_s: 'ChoiceAward_shine_small_s_f2',
                        shine_small_m: 'ChoiceAward_shine_small_m_de',
                        shine_big_s: 'ChoiceAward_shine_big_s_02',
                        shine_big_m: 'ChoiceAward_shine_big_m_ed',
                        shine__left: 'ChoiceAward_shine__left_2e',
                        shine__right: 'ChoiceAward_shine__right_64',
                        arrow: 'ChoiceAward_arrow_30',
                        blinkShape: 'ChoiceAward_blinkShape_89',
                        blink: 'ChoiceAward_blink_f0',
                        blinker: 'ChoiceAward_blinker_0c',
                    },
                    N = R.strings.battle_pass.awardsWidget,
                    H = ({ count: u, disabled: e = !1, onClick: t, size: n }) => {
                        const s = (0, a.useState)(!1),
                            o = s[0],
                            l = s[1],
                            F = 1 === u ? N.title.awardSingle() : N.title.awardMultiple(),
                            D = e ? N.description.awardDisabled() : N.description.award(),
                            d = (0, a.useCallback)(() => {
                                e || (A.$.playClick(), t());
                            }, [e, t]);
                        return r().createElement(
                            E.i,
                            { body: D, isEnabled: Boolean(D) },
                            r().createElement(
                                'div',
                                {
                                    className: i()(
                                        P.base,
                                        P[`base__${n}`],
                                        e ? P.base__disabled : P.base__hasAppearAnimation,
                                    ),
                                    onMouseEnter: () => {
                                        ((0, A.G)(R.sounds.bp_highlight_02()), l(!0));
                                    },
                                    onMouseLeave: () => {
                                        l(!1);
                                    },
                                    onClick: d,
                                },
                                r().createElement(b, { size: n, isHover: o, type: c.Award, disabled: e }),
                                r().createElement(m, { size: n, isHover: o, type: c.Award, disabled: e }),
                                r().createElement(T, { size: n, isHover: o, type: c.Award, disabled: e, isDark: !1 }),
                                r().createElement(x, { size: n, count: u, disabled: e }),
                                r().createElement(M, { size: n, isHover: o, title: F, disabled: e, isGold: !0 }),
                                !e &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: i()(P.shine, P.shine__left) }),
                                        r().createElement('div', { className: i()(P.shine, P.shine__right) }),
                                        r().createElement('div', { className: P.arrow }),
                                        r().createElement(
                                            'div',
                                            { className: P.blinkShape },
                                            r().createElement('div', { className: P.blink }),
                                        ),
                                    ),
                            ),
                        );
                    },
                    I = { base: 'CoinAward_base_75', base__big: 'CoinAward_base__big_1f' },
                    z = R.strings.battle_pass.awardsWidget,
                    W = ({ count: u, onClick: e, size: t }) => {
                        const n = (0, a.useState)(!1),
                            s = n[0],
                            o = n[1];
                        return r().createElement(
                            E.i,
                            { body: z.description.coin(), isEnabled: Boolean(z.description.coin()) },
                            r().createElement(
                                'div',
                                {
                                    className: i()(I.base, I[`base__${t}`]),
                                    onMouseEnter: () => {
                                        ((0, A.G)(R.sounds.bp_highlight_02()), o(!0));
                                    },
                                    onMouseLeave: () => {
                                        o(!1);
                                    },
                                    onClick: () => {
                                        (A.$.playClick(), e());
                                    },
                                },
                                r().createElement(b, { size: t, isHover: s }),
                                r().createElement(m, { size: t, isHover: s }),
                                r().createElement(T, { size: t, isHover: s, type: c.Coin }),
                                r().createElement(x, { size: t, count: u }),
                                r().createElement(M, { size: t, isHover: s, title: z.title.coin() }),
                            ),
                        );
                    },
                    j = {
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
                    U = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function V() {
                    return (
                        (V =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        V.apply(this, arguments)
                    );
                }
                const $ = (u) => {
                    let e = u.size,
                        t = u.value,
                        a = u.isEmpty,
                        n = u.fadeInAnimation,
                        s = u.hide,
                        o = u.maximumNumber,
                        E = u.className,
                        A = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(u);
                            for (a = 0; a < n.length; a++) ((t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                            return r;
                        })(u, U);
                    const l = a ? null : t,
                        F = 'string' == typeof l;
                    if ((l && !F && l < 0) || 0 === l) return null;
                    const c = l && !F && l > o,
                        D = i()(
                            j.base,
                            j[`base__${e}`],
                            n && j.base__animated,
                            s && j.base__hidden,
                            !l && j.base__pattern,
                            a && j.base__empty,
                            E,
                        );
                    return r().createElement(
                        'div',
                        V({ className: D }, A),
                        r().createElement('div', { className: j.bg }),
                        r().createElement('div', { className: j.pattern }),
                        r().createElement(
                            'div',
                            { className: i()(j.value, F && j.value__text) },
                            c ? o : l,
                            c && r().createElement('span', { className: j.plus }, '+'),
                        ),
                    );
                };
                $.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                var G = t(3815);
                const Y = {
                        base: 'CollectionAward_base_0c',
                        base__big: 'CollectionAward_base__big_ca',
                        bubble: 'CollectionAward_bubble_65',
                    },
                    q = R.strings.battle_pass.awardsWidget,
                    K = ({ count: u, maxCount: e, newItemsCount: t, hasTrigger: n, size: s, onClick: o }) => {
                        const l = (0, a.useState)(!1),
                            F = l[0],
                            d = l[1],
                            C = e === u,
                            B = s === D.Small && n,
                            _ = C ? q.description.collectionCompleted() : q.description.collection(),
                            h = (0, G.z)(() => {
                                (A.$.playClick(), o());
                            });
                        return r().createElement(
                            E.i,
                            { body: _, isEnabled: Boolean(_) },
                            r().createElement(
                                'div',
                                {
                                    className: i()(Y.base, Y[`base__${s}`]),
                                    onMouseEnter: () => {
                                        ((0, A.G)(R.sounds.bp_highlight_02()), d(!0));
                                    },
                                    onMouseLeave: () => {
                                        d(!1);
                                    },
                                    onClick: h,
                                },
                                r().createElement(b, { size: s, isHover: F, type: c.Coin, highlighted: B }),
                                r().createElement(m, { size: s, isHover: F }),
                                r().createElement(T, { size: s, isHover: F, type: c.Collection }),
                                r().createElement(x, {
                                    size: s,
                                    count: u,
                                    maxCount: e,
                                    state: C ? k.Completed : k.InProgress,
                                }),
                                r().createElement(M, { size: s, isHover: F, title: q.title.collection() }),
                                t > 0 &&
                                    r().createElement(
                                        'div',
                                        { className: Y.bubble },
                                        r().createElement($, { size: 'small' }),
                                    ),
                            ),
                        );
                    };
                var Z = t(514);
                const X = {
                        base: 'CommanderAward_base_11',
                        icon: 'CommanderAward_icon_92',
                        base__hover: 'CommanderAward_base__hover_fc',
                    },
                    J = R.strings.battle_pass.awardsWidget,
                    Q = ({ onClick: u, size: e, tankmenScreenID: t }) => {
                        const n = (0, a.useState)(!1),
                            s = n[0],
                            o = n[1],
                            A = J.description.commander(),
                            l =
                                R.images.gui.maps.icons.battlePass.awards_widget.$dyn(`commander_icon_small_${t}`) ||
                                R.images.gui.maps.icons.battlePass.awards_widget.commander_icon_small();
                        return r().createElement(
                            E.i,
                            { body: A, isEnabled: Boolean(A) },
                            r().createElement(
                                'div',
                                {
                                    className: i()(X.base, X[`base__${e}`], s && X.base__hover),
                                    onMouseEnter: () => {
                                        (Z.hY.sound(R.sounds.bp_highlight_02()), o(!0));
                                    },
                                    onMouseLeave: () => o(!1),
                                    onClick: () => {
                                        (Z.hY.sound(R.sounds.play()), u());
                                    },
                                },
                                r().createElement(b, { size: e, isHover: s }),
                                r().createElement(m, { size: e, isHover: s }),
                                r().createElement(M, { size: e, isHover: s, title: J.title.commander() }),
                                r().createElement('div', {
                                    className: X.icon,
                                    style: { backgroundImage: `url(${l})` },
                                }),
                            ),
                        );
                    },
                    uu = { base: 'TalerAward_base_ef', base__big: 'TalerAward_base__big_6b' },
                    eu = R.strings.battle_pass.awardsWidget,
                    tu = ({ count: u, onClick: e, size: t }) => {
                        const n = (0, a.useState)(!1),
                            s = n[0],
                            o = n[1];
                        return r().createElement(
                            E.i,
                            { body: eu.description.taler() },
                            r().createElement(
                                'div',
                                {
                                    className: i()(uu.base, uu[`base__${t}`], s && uu.base__hover),
                                    onMouseEnter: () => {
                                        (Z.hY.sound(R.sounds.bp_highlight_02()), o(!0));
                                    },
                                    onMouseLeave: () => {
                                        o(!1);
                                    },
                                    onClick: () => {
                                        (Z.hY.click(), e());
                                    },
                                },
                                r().createElement(b, { size: t, isHover: s }),
                                r().createElement(m, { size: t, isHover: s }),
                                r().createElement(T, { size: t, isHover: s, type: c.Taler }),
                                r().createElement(x, { size: t, count: u }),
                                r().createElement(M, { size: t, isHover: s, title: eu.title.taler() }),
                            ),
                        );
                    },
                    au = {
                        base: 'TicketAward_base_76',
                        base__big: 'TicketAward_base__big_91',
                        base__hasAppearAnimation: 'TicketAward_base__hasAppearAnimation_09',
                        baseAppear: 'TicketAward_baseAppear_ef',
                        shine: 'TicketAward_shine_46',
                        shine_small_s: 'TicketAward_shine_small_s_22',
                        shine_small_m: 'TicketAward_shine_small_m_5b',
                        shine_big_s: 'TicketAward_shine_big_s_43',
                        shine_big_m: 'TicketAward_shine_big_m_80',
                        shine__left: 'TicketAward_shine__left_15',
                        shine__right: 'TicketAward_shine__right_4b',
                        arrow: 'TicketAward_arrow_d4',
                        blinkShape: 'TicketAward_blinkShape_17',
                        blink: 'TicketAward_blink_1b',
                        blinker: 'TicketAward_blinker_1e',
                    },
                    ru = R.strings.battle_pass.awardsWidget,
                    nu = ({ count: u, onClick: e, size: t }) => {
                        const n = (0, a.useState)(!1),
                            s = n[0],
                            o = n[1],
                            A = Boolean(u),
                            l = A ? c.Ticket : void 0;
                        return r().createElement(
                            E.i,
                            { body: ru.description.ticket(), isEnabled: Boolean(ru.description.ticket()) },
                            r().createElement(
                                'div',
                                {
                                    className: i()(au.base, au[`base__${t}`], A && au.base__hasAppearAnimation),
                                    onMouseEnter: () => {
                                        (Z.hY.sound('bp_highlight_02'), o(!0));
                                    },
                                    onMouseLeave: () => {
                                        o(!1);
                                    },
                                    onClick: () => {
                                        (Z.hY.sound('play'), e());
                                    },
                                },
                                r().createElement(b, { size: t, isHover: s, type: l }),
                                r().createElement(m, { size: t, isHover: s, type: l }),
                                r().createElement(T, { size: t, isHover: s, type: c.Ticket, isDark: !A }),
                                r().createElement(x, { size: t, count: u }),
                                r().createElement(M, { size: t, isHover: s, title: ru.title.ticket(), isGold: A }),
                                A &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: i()(au.shine, au.shine__left) }),
                                        r().createElement('div', { className: i()(au.shine, au.shine__right) }),
                                        r().createElement('div', { className: au.arrow }),
                                        r().createElement(
                                            'div',
                                            { className: au.blinkShape },
                                            r().createElement('div', { className: au.blink }),
                                        ),
                                    ),
                            ),
                        );
                    };
                var iu = t(3215),
                    su = t(3946);
                const ou = (0, iu.q3)()(
                        ({ observableModel: u, externalModel: e }) => {
                            const t = { root: u.object(), collectionEntryPoint: u.object('collectionEntryPoint') },
                                a = (0, su.Om)((u) => {
                                    const a = t.root.get(),
                                        r = a.talerCount,
                                        n = a.notChosenRewardCount,
                                        i = a.bpcoinCount,
                                        s = a.ticketsCount,
                                        o = a.isChooseRewardsEnabled,
                                        E = a.tankmenScreenID,
                                        A = a.isTalerEnabled,
                                        l = a.isBpCoinEnabled,
                                        F = a.isTicketsEnabled,
                                        D = t.collectionEntryPoint.get(),
                                        d = D.collectionItemCount,
                                        C = D.newCollectionItemCount,
                                        B = D.maxCollectionItemCount,
                                        _ = D.isFirstEnter,
                                        m = D.isCollectionsEnabled;
                                    return [
                                        {
                                            type: c.Award,
                                            props: {
                                                size: u,
                                                count: n,
                                                disabled: !o,
                                                onClick: e.createCallbackNoArgs('onTakeRewardsClick'),
                                            },
                                            condition: n > 0,
                                        },
                                        {
                                            type: c.Ticket,
                                            props: {
                                                size: u,
                                                count: s,
                                                onClick: e.createCallbackNoArgs('showTickets'),
                                            },
                                            condition: F,
                                        },
                                        {
                                            type: c.Coin,
                                            props: {
                                                size: u,
                                                count: i,
                                                onClick: e.createCallbackNoArgs('onBpcoinClick'),
                                            },
                                            condition: l,
                                        },
                                        {
                                            type: c.Taler,
                                            props: { size: u, count: r, onClick: e.createCallbackNoArgs('showTalers') },
                                            condition: A,
                                        },
                                        {
                                            type: c.Collection,
                                            props: {
                                                size: u,
                                                count: d,
                                                maxCount: B,
                                                newItemsCount: C,
                                                hasTrigger: _,
                                                onClick: e.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                                            },
                                            condition: m,
                                        },
                                        {
                                            type: c.Commander,
                                            props: {
                                                size: u,
                                                count: 0,
                                                tankmenScreenID: E,
                                                onClick: e.createCallbackNoArgs('showTankmen'),
                                            },
                                            condition: 0 !== E,
                                        },
                                    ];
                                });
                            return Object.assign({}, t, { computes: { awardsList: a } });
                        },
                        ({ externalModel: u }) => ({
                            openPointsInfo: u.createCallbackNoArgs('onPointsInfoClick'),
                            takeRewards: u.createCallbackNoArgs('onTakeRewardsClick'),
                            openGoodsForBpCoins: u.createCallbackNoArgs('onBpcoinClick'),
                            openGoodsForBpTalers: u.createCallbackNoArgs('showTalers'),
                            openCollection: u.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                        }),
                    ),
                    Eu = (ou[0], ou[1]),
                    Au = {
                        base: 'AwardsWrapper_base_e5',
                        award: 'AwardsWrapper_award_49',
                        base__big: 'AwardsWrapper_base__big_6b',
                    };
                (0, o.Pi)(({ size: u, classNames: e }) => {
                    const t = Eu().model;
                    return r().createElement(
                        'div',
                        { className: i()(Au.base, Au[`base__${u}`], null == e ? void 0 : e.base) },
                        s.UI(
                            t.computes.awardsList(u),
                            (u) =>
                                u.condition &&
                                r().createElement(
                                    'div',
                                    { key: u.type, className: i()(Au.award, null == e ? void 0 : e.award) },
                                    ((u, e) => {
                                        switch (u) {
                                            case c.Award:
                                                return r().createElement(H, e);
                                            case c.Ticket:
                                                return r().createElement(nu, e);
                                            case c.Coin:
                                                return r().createElement(W, e);
                                            case c.Taler:
                                                return r().createElement(tu, e);
                                            case c.Collection:
                                                return r().createElement(K, e);
                                            case c.Commander:
                                                return r().createElement(Q, e);
                                            default:
                                                return (console.warn('Unknown award type: ', u), null);
                                        }
                                    })(u.type, u.props),
                                ),
                        ),
                    );
                });
            },
            5287: (u, e, t) => {
                t.d(e, { Z: () => a });
                const a = { base: 'FormatText_base_d0' };
            },
            7363: (u) => {
                u.exports = React;
            },
            1533: (u) => {
                u.exports = ReactDOM;
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
        (__webpack_require__.O = (u, e, t, a) => {
            if (!e) {
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [e, t, a] = deferred[o], n = !0, i = 0; i < e.length; i++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((n = !1), a < r && (r = a));
                    if (n) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (u = s);
                    }
                }
                return u;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [e, t, a];
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
        (__webpack_require__.j = 7737),
        (() => {
            var u = { 7737: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var a,
                        r,
                        [n, i, s] = t,
                        o = 0;
                    if (n.some((e) => 0 !== u[e])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (s) var E = s(__webpack_require__);
                    }
                    for (e && e(t); o < n.length; o++)
                        ((r = n[o]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0));
                    return __webpack_require__.O(E);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(2432));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
