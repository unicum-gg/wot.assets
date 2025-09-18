(() => {
    'use strict';
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                t.d(u, { L$: () => l.L, qE: () => l.q, u5: () => c });
                var n = t(6483),
                    a = t.n(n),
                    i = t(7727),
                    r = t(7363),
                    s = t.n(r),
                    o = t(6880),
                    l = t(2106);
                const c = ({
                    children: e,
                    size: u,
                    disabled: t,
                    mixClass: n,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: d,
                    onMouseUp: E,
                    onMouseLeave: A,
                    onClick: m,
                    isFocused: F = !1,
                    type: D = l.L.primary,
                    soundHover: b = 'highlight',
                    soundClick: g = 'play',
                }) => {
                    const p = (0, r.useRef)(null),
                        C = (0, r.useState)(F),
                        B = C[0],
                        h = C[1],
                        f = (0, r.useState)(!1),
                        v = f[0],
                        S = f[1];
                    return (
                        (0, r.useEffect)(() => {
                            function e(e) {
                                B && null !== p.current && !p.current.contains(e.target) && h(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [B]),
                        (0, r.useEffect)(() => {
                            h(F);
                        }, [F]),
                        s().createElement(
                            'div',
                            {
                                ref: p,
                                className: a()(
                                    o.Z.base,
                                    o.Z[`base__${D}`],
                                    t && o.Z.base__disabled,
                                    u && o.Z[`base__${u}`],
                                    B && o.Z.base__focus,
                                    v && o.Z.base__highlightActive,
                                    n,
                                ),
                                onMouseEnter: function (e) {
                                    t || (null !== b && (0, i.G)(b), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    _ && _(e);
                                },
                                onMouseUp: function (e) {
                                    t || (E && E(e), S(!1));
                                },
                                onMouseDown: function (e) {
                                    t ||
                                        (null !== g && (0, i.G)(g),
                                        d && d(e),
                                        F && (t || (p.current && (p.current.focus(), h(!0)))),
                                        S(!0));
                                },
                                onMouseLeave: function (e) {
                                    t || (A && A(e), S(!1));
                                },
                                onClick: function (e) {
                                    t || (m && m(e));
                                },
                            },
                            D !== l.L.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: o.Z.back }),
                                    s().createElement('span', { className: o.Z.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: a()(o.Z.state, o.Z.state__default) },
                                s().createElement('span', { className: o.Z.stateDisabled }),
                                s().createElement('span', { className: o.Z.stateHighlightHover }),
                                s().createElement('span', { className: o.Z.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: o.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
            },
            2106: (e, u, t) => {
                let n, a;
                (t.d(u, { L: () => n, q: () => a }),
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
            3495: (e, u, t) => {
                t.d(u, { Y: () => o });
                var n = t(3138),
                    a = t(7363),
                    i = t(1043),
                    r = t(5262);
                const s = (function (e = n.O.client.getSize('rem')) {
                        const u = e.width,
                            t = e.height;
                        return Object.assign({ width: u, height: t }, (0, r.T)(u, t, i.j));
                    })(),
                    o = (0, a.createContext)(s);
            },
            1039: (e, u, t) => {
                (t(3138), t(7363), t(3495));
            },
            6010: (e, u, t) => {
                var n = t(7363),
                    a = t(7382),
                    i = t(3495);
                const r = ['children'];
                (0, n.memo)((e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, r);
                    const s = (0, n.useContext)(i.Y),
                        o = s.extraLarge,
                        l = s.large,
                        c = s.medium,
                        _ = s.small,
                        d = s.extraSmall,
                        E = s.extraLargeWidth,
                        A = s.largeWidth,
                        m = s.mediumWidth,
                        F = s.smallWidth,
                        D = s.extraSmallWidth,
                        b = s.extraLargeHeight,
                        g = s.largeHeight,
                        p = s.mediumHeight,
                        C = s.smallHeight,
                        B = s.extraSmallHeight,
                        h = { extraLarge: b, large: g, medium: p, small: C, extraSmall: B };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && _) return u;
                        if (t.extraSmall && d) return u;
                    } else {
                        if (t.extraLargeWidth && E) return (0, a.H)(u, t, h);
                        if (t.largeWidth && A) return (0, a.H)(u, t, h);
                        if (t.mediumWidth && m) return (0, a.H)(u, t, h);
                        if (t.smallWidth && F) return (0, a.H)(u, t, h);
                        if (t.extraSmallWidth && D) return (0, a.H)(u, t, h);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && b) return u;
                            if (t.largeHeight && g) return u;
                            if (t.mediumHeight && p) return u;
                            if (t.smallHeight && C) return u;
                            if (t.extraSmallHeight && B) return u;
                        }
                    }
                    return null;
                });
            },
            7382: (e, u, t) => {
                t.d(u, { H: () => n });
                const n = (e, u, t) =>
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
                t.d(u, { YN: () => n.Y });
                (t(6010), t(1039));
                var n = t(3495);
            },
            1043: (e, u, t) => {
                t.d(u, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, u, t) => {
                var n;
                function a(e, u, t) {
                    const n = (function (e, u) {
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
                        a = (function (e, u) {
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
                        i = Math.min(n, a);
                    return {
                        extraLarge: i === t.extraLarge.weight,
                        large: i === t.large.weight,
                        medium: i === t.medium.weight,
                        small: i === t.small.weight,
                        extraSmall: i === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: a === t.extraLarge.weight,
                        largeHeight: a === t.large.weight,
                        mediumHeight: a === t.medium.weight,
                        smallHeight: a === t.small.weight,
                        extraSmallHeight: a === t.extraSmall.weight,
                    };
                }
                (t.d(u, { T: () => a, u: () => n }),
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
            8089: (e, u, t) => {
                (t(6483), t(3138), t(7363), t(7476));
            },
            7078: (e, u, t) => {
                t.d(u, { t: () => o });
                var n = t(7363),
                    a = t.n(n),
                    i = t(2056);
                const r = ['children'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const o = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, r);
                    return a().createElement(
                        i.u,
                        s(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            t,
                        ),
                        u,
                    );
                };
            },
            2056: (e, u, t) => {
                t.d(u, { u: () => l });
                var n = t(7902),
                    a = t(9916),
                    i = t(7363);
                const r = [
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
                const o = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: a.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    l = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onClick,
                            E = e.ignoreShowDelay,
                            A = void 0 !== E && E,
                            m = e.ignoreMouseClick,
                            F = void 0 !== m && m,
                            D = e.decoratorId,
                            b = void 0 === D ? 0 : D,
                            g = e.isEnabled,
                            p = void 0 === g || g,
                            C = e.targetId,
                            B = void 0 === C ? 0 : C,
                            h = e.onShow,
                            f = e.onHide,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, r);
                        const S = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, i.useMemo)(() => B || (0, n.F)().resId, [B]),
                            y = (0, i.useCallback)(() => {
                                (S.current.isVisible && S.current.timeoutId) ||
                                    (o(t, b, { isMouseEvent: !0, on: !0, arguments: s(a) }, w),
                                    h && h(),
                                    (S.current.isVisible = !0));
                            }, [t, b, a, w, h]),
                            x = (0, i.useCallback)(() => {
                                if (S.current.isVisible || S.current.timeoutId) {
                                    const e = S.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (S.current.timeoutId = 0)),
                                        o(t, b, { on: !1 }, w),
                                        S.current.isVisible && f && f(),
                                        (S.current.isVisible = !1));
                                }
                            }, [t, b, w, f]),
                            I = (0, i.useCallback)((e) => {
                                S.current.isVisible &&
                                    ((S.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (S.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(S.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        ((0, i.useEffect)(() => {
                            const e = S.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', I, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', I, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === p && x();
                            }, [p, x]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        (window.removeEventListener('mouseleave', x), x());
                                    }
                                ),
                                [x],
                            ));
                        return p
                            ? (0, i.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(S.current.timeoutId),
                                                      (S.current.timeoutId = window.setTimeout(y, A ? 100 : 400)),
                                                      l && l(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (x(), null == c || c(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === F && x(), null == d || d(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === F && x(), null == _ || _(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      v,
                                  ),
                              )
                            : u;
                        var T;
                    };
            },
            8246: (e, u, t) => {
                t.d(u, { U: () => s });
                var n = t(3138);
                function a(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return i(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return i(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function i(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const r = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: u = 0, getRoot: t = r, context: i = 'model' } = {}) {
                    const s = new Map();
                    function o(e, u = 0) {
                        viewEnv.removeDataChangedCallback(e, u)
                            ? s.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                            t.forEach((u) => {
                                const t = s.get(u);
                                void 0 !== t && t(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = t(u),
                            a = i.split('.').reduce((e, u) => e[u], n);
                        return 'string' != typeof e || 0 === e.length
                            ? a
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, a);
                    };
                    return {
                        subscribe: (t, a) => {
                            const r = 'string' == typeof a ? `${i}.${a}` : i,
                                o = n.O.view.addModelObserver(r, u, !0);
                            return (s.set(o, t), e && t(l(a)), o);
                        },
                        readByPath: l,
                        createCallback: (e, u) => {
                            const t = l(u);
                            return (...u) => {
                                t(e(...u));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const u = l(e);
                            return () => {
                                u();
                            };
                        },
                        dispose: function () {
                            for (var e, t = a(s.keys()); !(e = t()).done; ) {
                                o(e.value, u);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, u, t) => {
                t.d(u, { q3: () => o });
                var n = t(4598),
                    a = t(9174),
                    i = t(7363),
                    r = t.n(i),
                    s = t(8246);
                const o = () => (e, u) => {
                    const t = (0, i.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: _ }) {
                            const d = (0, i.useRef)([]),
                                E = (t, i, r) => {
                                    var o;
                                    const l = s.U(i),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == r ? void 0 : r.getter) ? o : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === t ? (null == r ? void 0 : r.getter(e)) : c.readByPath(e),
                                        E = (e) => d.current.push(e),
                                        A = e({
                                            mode: t,
                                            readByPath: _,
                                            externalModel: c,
                                            observableModel: {
                                                dict: (e) => {
                                                    const u = _(e),
                                                        i = a.LO.box(u, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                array: (e, u) => {
                                                    const i = null != u ? u : _(e),
                                                        r = a.LO.box(i, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const i = null != u ? u : _(e),
                                                        r = a.LO.box(i, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const n = _(u);
                                                    if (Array.isArray(e)) {
                                                        const i = e.reduce(
                                                            (e, u) => ((e[u] = a.LO.box(n[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, a.aD)((u) => {
                                                                        e.forEach((e) => {
                                                                            i[e].set(u[e]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                    {
                                                        const i = e,
                                                            r = Object.entries(i),
                                                            s = r.reduce(
                                                                (e, [u, t]) => ((e[t] = a.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        r.forEach(([u, t]) => {
                                                                            s[t].set(e[u]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: E,
                                        }),
                                        m = { mode: t, model: A, externalModel: c, cleanup: E };
                                    return {
                                        model: A,
                                        controls: 'mocks' === t && r ? r.controls(m) : u(m),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                A = (0, i.useRef)(!1),
                                m = (0, i.useState)(o),
                                F = m[0],
                                D = m[1],
                                b = (0, i.useState)(() => E(o, l, _)),
                                g = b[0],
                                p = b[1];
                            return (
                                (0, i.useEffect)(() => {
                                    A.current ? p(E(F, l, _)) : (A.current = !0);
                                }, [_, F, l]),
                                (0, i.useEffect)(() => {
                                    D(o);
                                }, [o]),
                                (0, i.useEffect)(
                                    () => () => {
                                        (g.externalModel.dispose(), d.current.forEach((e) => e()));
                                    },
                                    [g],
                                ),
                                r().createElement(t.Provider, { value: g }, c)
                            );
                        },
                        () => (0, i.useContext)(t),
                    ];
                };
            },
            527: (e, u, t) => {
                (t.r(u),
                    t.d(u, { mouse: () => c, off: () => o, on: () => s, onResize: () => i, onScaleUpdated: () => r }));
                var n = t(2472),
                    a = t(1176);
                const i = (0, n.E)('clientResized'),
                    r = (0, n.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, a.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', u),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', u),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, a.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const i = `mouse${u}`,
                                        r = l[u]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        n(),
                                        () => {
                                            a &&
                                                (r(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
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
            5959: (e, u, t) => {
                (t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => r,
                        getSize: () => i,
                        graphicsQuality: () => s,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var n = t(527),
                    a = t(2493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2493: (e, u, t) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function a(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => a, G: () => n });
            },
            2472: (e, u, t) => {
                function n(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => n });
            },
            3138: (e, u, t) => {
                t.d(u, { O: () => r });
                var n = t(5959),
                    a = t(7698),
                    i = t(514);
                const r = { view: t(7641), client: n, sound: i.ZP, intl: a.N };
            },
            7698: (e, u, t) => {
                t.d(u, { N: () => n });
                const n = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, u, t) => {
                t.d(u, { ZP: () => r });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(a).reduce((e, u) => ((e[u] = () => (0, n.playSound)(a[u])), e), {}),
                    r = { play: Object.assign({}, i, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => n }));
            },
            6112: (e, u, t) => {
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                t.d(u, { U: () => a });
                var n = t(2472);
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
            7641: (e, u, t) => {
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => o,
                        arabic2roman: () => w,
                        children: () => a,
                        displayStatus: () => i.W,
                        displayStatusIs: () => x,
                        enableFullScreenModeSupported: () => k,
                        events: () => r.U,
                        extraSize: () => I,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => v,
                        getExternalPaddingsRem: () => y,
                        getFontNames: () => S,
                        getScale: () => D,
                        getSize: () => E,
                        getViewGlobalPosition: () => m,
                        initExternalPaddings: () => O,
                        isEventHandled: () => h,
                        isFocused: () => C,
                        pxToRem: () => b,
                        remToPx: () => g,
                        resize: () => A,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => T,
                    }));
                var n = t(9690),
                    a = t(3722),
                    i = t(6112),
                    r = t(6538),
                    s = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function _(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function m(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: g(u.x), y: g(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function b(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function B() {
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
                const S = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    w = n.cg;
                function y() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const x = Object.keys(i.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === i.W[u]), e),
                        {},
                    ),
                    I = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    T = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function k() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function O(e) {
                    function u() {
                        const u = viewEnv.getExternalPaddingsRem(),
                            t = u.top,
                            n = u.right,
                            a = u.bottom,
                            i = u.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${a}rem`),
                            e.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (u(), engine.on('self.onPaddingsUpdated', () => u()));
                }
            },
            8566: (e, u, t) => {
                t.d(u, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    i = 16,
                    r = 32,
                    s = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const i = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(u, n);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((a = i),
                                              Object.entries(a).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? a : r);
                        },
                        minimize() {
                            o(s);
                        },
                        move(e) {
                            o(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                t.d(u, { jv: () => n });
                function n() {
                    return !1;
                }
                console.log;
            },
            7902: (e, u, t) => {
                t.d(u, { F: () => n });
                const n = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        n = R.invalid('resId'),
                        a = '';
                    var i;
                    u &&
                        ((a = (null == (i = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : i[0]) || ''),
                        (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== t &&
                            window.subViews[t] &&
                            (n = window.subViews[t].id));
                    return { callerUrl: a, caller: t, stack: u, resId: n };
                };
            },
            3815: (e, u, t) => {
                t.d(u, { z: () => i });
                var n = t(7363);
                const a = [];
                function i(e) {
                    const u = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, u.current)(...e), a)
                    );
                }
            },
            8526: (e, u, t) => {
                t.d(u, { gd: () => s });
                var n = t(3138),
                    a = t(5521),
                    i = (t(9916), t(7363));
                const r = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function s(e = a.n.NONE, u = r, t = !1, s = !1) {
                    (0, i.useEffect)(() => {
                        if (e !== a.n.NONE)
                            return (
                                window.addEventListener('keydown', i, t),
                                () => {
                                    window.removeEventListener('keydown', i, t);
                                }
                            );
                        function i(a) {
                            if (a.keyCode === e) {
                                if (!s && n.O.view.isEventHandled()) return;
                                (n.O.view.setEventHandled(), u(a), t && a.stopPropagation());
                            }
                        }
                    }, [u, e, t, s]);
                }
            },
            2039: (e, u, t) => {
                t.d(u, { k: () => a });
                var n = t(7363);
                const a = (e) => {
                    (0, n.useEffect)(() => e, []);
                };
            },
            1396: (e, u, t) => {
                t.d(u, { K: () => i });
                var n = t(7363),
                    a = t(2039);
                function i() {
                    const e = (0, n.useRef)(0);
                    return (
                        (0, a.k)(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, n.useMemo)(
                            () => ({
                                run: (u, t) => {
                                    (window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            ((e.current = 0), u());
                                        }, t)));
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
            5521: (e, u, t) => {
                let n, a;
                (t.d(u, { n: () => n }),
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
            9480: (e, u, t) => {
                t.d(u, { G: () => s, MH: () => i, U2: () => a, UI: () => r, hX: () => o, u4: () => c, v: () => l });
                var n = t(8968);
                function a(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const i = a;
                function r(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function s(e, u) {
                    if (Array.isArray(e)) return e.some(u);
                    for (let t = 0; t < e.length; t++) {
                        if (u(i(e, t), t, e)) return !0;
                    }
                    return !1;
                }
                function o(e, u) {
                    if (Array.isArray(e)) return e.filter(u);
                    const t = [];
                    for (let a = 0; a < e.length; a++) {
                        var n;
                        const i = null == (n = e[a]) ? void 0 : n.value;
                        u(i, a, e) && t.push(i);
                    }
                    return t;
                }
                function l(e, u) {
                    return (function (e, u, t) {
                        const n = [];
                        for (let a = 0; a < e.length; a++) {
                            const r = i(e, a);
                            u(r, a, e) && n.push(t(r, a, e));
                        }
                        return n;
                    })(e, n.C, u);
                }
                function c(e, u, t) {
                    if (Array.isArray(e)) return e.reduce(u, t);
                    let n = t;
                    for (let t = 0; t < e.length; t++) {
                        n = u(n, i(e, t), t, e);
                    }
                    return n;
                }
            },
            8968: (e, u, t) => {
                function n(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                t.d(u, { C: () => n });
            },
            9690: (e, u, t) => {
                t.d(u, { cg: () => i });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function i(e) {
                    let u = '';
                    for (let t = a.length - 1; t >= 0; t--) for (; e >= a[t]; ) ((u += n[t]), (e -= a[t]));
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            7727: (e, u, t) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                t.d(u, { $: () => a, G: () => n });
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
            1358: (e, u, t) => {
                t.d(u, { Z: () => i });
                var n = t(3138);
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
                    addCallback(e, u, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = n.O.view.addModelObserver(e, t, a);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(i) : (this._views[t] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
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
            9916: (e, u, t) => {
                t.d(u, { Sw: () => i.Z, B0: () => s, c9: () => b, ry: () => D });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let n = e.target;
                                    do {
                                        if (n === u) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (n.__instance || (n.__instance = new n()), n.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                var i = t(1358);
                var r = t(8613);
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
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    E = t(3138);
                const A = ['args'];
                function m(e, u, t, n, a, i, r) {
                    try {
                        var s = e[i](r),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(n, a);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                                    return new Promise(function (n, a) {
                                        var i = e.apply(u, t);
                                        function r(e) {
                                            m(i, n, a, r, s, 'next', e);
                                        }
                                        function s(e) {
                                            m(i, n, a, r, s, 'throw', e);
                                        }
                                        r(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    b = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(u, A);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    g = () => b(s.CLOSE),
                    p = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var C = t(7572);
                const B = a.instance,
                    h = {
                        DataTracker: i.Z,
                        ViewModel: C.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => b(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => b(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            b(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), i) => {
                            const r = E.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                d = o.height,
                                A = {
                                    x: E.O.view.pxToRem(l) + r.x,
                                    y: E.O.view.pxToRem(c) + r.y,
                                    width: E.O.view.pxToRem(_),
                                    height: E.O.view.pxToRem(d),
                                };
                            b(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: F(A),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, g);
                        },
                        handleViewEvent: b,
                        onBindingsReady: D,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const a = Object.prototype.toString.call(u[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < a.length; u++) t[n].push({ value: e(a[u].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: B,
                        SystemLocale: r.Z5,
                        UserLocale: r.cy,
                    };
                window.ViewEnvHelper = h;
            },
            8613: (e, u, t) => {
                t.d(u, { Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
            },
            3521: (e, u, t) => {
                function n(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return a(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return a(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function a(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                t.d(u, { WL: () => s, aR: () => o, jZ: () => i, yG: () => r });
                const i = (e, u = []) => {
                        const t = document.getElementById('root');
                        t && (t.style.cursor = e ? 'grabbing' : 'default');
                        for (var a, i = n(u); !(a = i()).done; ) {
                            const u = a.value,
                                t = document.getElementById(u);
                            t && (t.style.pointerEvents = e ? 'none' : 'auto');
                        }
                    },
                    r = (e, u, t, n) => {
                        const a = t + u,
                            i = n - u;
                        return e < a ? a : e > i ? i : e;
                    },
                    s = (e, u, t) => {
                        let a = '',
                            i = 8e3;
                        for (var r, s = n(t); !(r = s()).done; ) {
                            const e = r.value,
                                t = Math.abs(e.centerX - u);
                            t < i && ((a = e.id), (i = t));
                        }
                        return a;
                    },
                    o = (e, u) => {
                        const t = u.find((u) => u.id === e);
                        return t ? t.centerX : 0;
                    };
            },
            1820: (e, u, t) => {
                let n, a;
                (t.d(u, { m: () => a }),
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
            4301: (e, u, t) => {
                t.d(u, { iN: () => i, j2: () => a, s$: () => r });
                var n = t(4231);
                const a = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
                    i = (e) => e === n.w.Battle || e === n.w.Prebattle,
                    r = (e) => i(e) || e === n.w.Respawn;
            },
            7626: (e, u, t) => {
                t.d(u, { YR: () => o, UW: () => c, Tu: () => l });
                var n = t(7363),
                    a = t(9152),
                    i = t(7727),
                    r = t(3521),
                    s = t(1820);
                const o = (e) => `panel-${e}-section`,
                    l = (e, u) => {
                        const t = o(e),
                            n = u.filter((e) => e !== t);
                        return { selfId: t, blockOnGrabIds: [a.yy, ...n] };
                    },
                    c = ({ baseId: e, slotsLength: u, handleSwap: t, setIsExitBlocked: a, syncInitiator: o }) => {
                        const l = ((e, u, t) => {
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
                                    E = (0, n.useCallback)((e, u) => {
                                        if (a.current) {
                                            const t = (0, r.WL)(e, u, a.current);
                                            t !== o.current.prevPotentialDropId &&
                                                ((o.current.prevPotentialDropId = t),
                                                _({ activeDragId: e, potentialDropId: t }));
                                        }
                                    }, []),
                                    A = (0, n.useCallback)((e, u) => {
                                        if (a.current && u) {
                                            const t = o.current,
                                                n = (0, r.WL)(e, u, a.current);
                                            ((t.dropId = n),
                                                (t.dragId = e),
                                                (t.prevPotentialDropId = ''),
                                                _({ activeDragId: e, potentialDropId: '' }),
                                                n !== e && (0, i.G)('cons_equipment_swipe'));
                                        }
                                    }, []),
                                    m = (0, n.useCallback)(() => {
                                        const e = o.current,
                                            u = e.dragId,
                                            t = e.dropId,
                                            n = e.prevPotentialDropId;
                                        (u || t || n) &&
                                            ((o.current = { dragId: '', dropId: '', prevPotentialDropId: '' }),
                                            _({ activeDragId: '', potentialDropId: '' }));
                                    }, []),
                                    F = (0, n.useCallback)(
                                        (e) => {
                                            const u = o.current.dropId;
                                            u && u !== e ? t(e, u) : m();
                                        },
                                        [m, t],
                                    ),
                                    D = (0, n.useCallback)((e, u) => {
                                        const t = a.current.find((u) => u.id === e);
                                        t && u && (t.centerX = u);
                                    }, []),
                                    b = (0, n.useCallback)(
                                        (e, u) => {
                                            const t = u.dragId,
                                                n = u.currentCenterX;
                                            switch (e) {
                                                case s.m.Ready:
                                                    return D(t, n);
                                                case s.m.DragStart:
                                                    return d(t);
                                                case s.m.Drag:
                                                    return E(t, n);
                                                case s.m.Drop:
                                                    return A(t, n);
                                                case s.m.DropExit:
                                                    return F(t);
                                                default:
                                                    return void console.warn('Unknown grabber action', e);
                                            }
                                        },
                                        [d, E, A, F, D],
                                    );
                                return (
                                    (0, n.useEffect)(() => {
                                        if (e !== a.current.length) {
                                            const t = new Array(e).fill(null);
                                            a.current = t.map((e, t) => ({ id: `${u}-${t}`, centerX: 0 }));
                                        }
                                    }, [e, u]),
                                    {
                                        dragState: c,
                                        handleGrabberAction: b,
                                        getForceCenterX: (0, n.useCallback)((e) => {
                                            const u = o.current,
                                                t = u.dragId,
                                                n = u.dropId;
                                            return e === t
                                                ? (0, r.aR)(n, a.current)
                                                : e === n
                                                  ? (0, r.aR)(t, a.current)
                                                  : 0;
                                        }, []),
                                        resetDragResults: m,
                                    }
                                );
                            })(u, e, t),
                            c = l.dragState,
                            _ = l.handleGrabberAction,
                            d = l.getForceCenterX,
                            E = l.resetDragResults,
                            A = (0, n.useCallback)(
                                (e, u) => {
                                    if (a)
                                        switch (e) {
                                            case s.m.DragStart:
                                            case s.m.Drag:
                                                a(!0);
                                                break;
                                            default:
                                                a(!1);
                                        }
                                    _(e, u);
                                },
                                [_, a],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                a && a(!1);
                            }, [a]),
                            (0, n.useEffect)(() => E, [o, E]),
                            { handleGrabberAction: A, dragState: c, getForceCenterX: d }
                        );
                    };
            },
            4231: (e, u, t) => {
                let n;
                (t.d(u, { w: () => n }),
                    (function (e) {
                        ((e.Hangar = 'hangar'),
                            (e.Setup = 'setup'),
                            (e.Compare = 'compare'),
                            (e.Battle = 'battle'),
                            (e.Respawn = 'respawn'),
                            (e.Prebattle = 'prebattle'));
                    })(n || (n = {})));
            },
            3220: (e, u, t) => {
                t.d(u, { k: () => c, t: () => _ });
                var n = t(3215),
                    a = t(9480),
                    i = t(3946),
                    r = t(4598),
                    s = t(4301),
                    o = t(7626);
                const l = (0, n.q3)()(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    ammunitionPanel: e.object('ammunitionPanel'),
                                    roleSkillSlot: e.object('roleSkillSlot'),
                                    vehicleInfo: e.object('vehicleInfo'),
                                    sectionGroups: e.array('ammunitionPanel.sectionGroups'),
                                    lastSlotAction: e.object('lastSlotAction'),
                                },
                                t = (0, i.Om)(() => u.sectionGroups.get().length),
                                n = (0, i.Om)(
                                    (e) => {
                                        const t = a.U2(u.sectionGroups.get(), e);
                                        if (!t) throw Error(`No ammunition section group found with index: ${e}`);
                                        return Object.assign({}, t, {
                                            sections: a.UI(t.sections, (e) =>
                                                Object.assign({}, e, {
                                                    slots: a.UI(e.slots, (e) => Object.assign({}, e)),
                                                }),
                                            ),
                                            setupSelector: Object.assign({}, t.setupSelector, {
                                                states: a.UI(t.setupSelector.states, (e) => e),
                                            }),
                                        });
                                    },
                                    { equals: r.jv },
                                ),
                                l = (0, i.Om)(() => a.u4(u.sectionGroups.get(), (e, u) => e + u.sections.length, 0)),
                                c = (0, i.Om)((e) => n(e).sections.length),
                                _ = (0, i.Om)(
                                    (e, u) => {
                                        const t = n(e),
                                            i = a.U2(t.sections, u);
                                        if (!i) throw Error(`No ammunition section found with index: ${u}`);
                                        return i;
                                    },
                                    { equals: r.jv },
                                ),
                                d = (0, i.Om)((e, u) => _(e, u).slots.length),
                                E = (0, i.Om)((e, u) => {
                                    const t = _(e, u).slots;
                                    return a.hX(t, (e) => Boolean(e) && !(0, s.j2)(e)).length;
                                }),
                                A = (0, i.Om)((e, u) => {
                                    const t = _(e, u).slots;
                                    return a.G(t, (e) => e.intCD > 0);
                                }),
                                m = (0, i.Om)(
                                    (e, u, t) => {
                                        const n = _(e, u),
                                            i = a.U2(n.slots, t);
                                        if (!i) throw Error(`No ammunition slot found with index: ${t}`);
                                        return i;
                                    },
                                    { equals: r.jv },
                                ),
                                F = (0, i.Om)(
                                    (e) => {
                                        const u = n(e).sections;
                                        return a.v(u, (e) => (0, o.YR)(e.type));
                                    },
                                    { equals: r.jv },
                                ),
                                D = (0, i.Om)(
                                    (e, u, t) => {
                                        const n = m(e, u, t);
                                        if (!n) throw Error(`No ammunition slot found with index: ${t}`);
                                        if (!n.specializations) throw Error('Selected slot have no specializations');
                                        return Object.assign({}, n.specializations, {
                                            specializations: a.UI(n.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        });
                                    },
                                    { equals: r.jv },
                                );
                            return Object.assign({}, u, {
                                computes: {
                                    groups: { length: t, group: n },
                                    sections: { allSectionsLength: l, length: c, section: _, IDs: F },
                                    slots: { length: d, filteredLength: E, slot: m, existFilled: A },
                                    specializations: D,
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
            1922: (e, u, t) => {
                t.d(u, { cJ: () => n });
                (t(6483), t(7739), t(7363), t(1960));
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
            3780: (e, u, t) => {
                var n = t(7363),
                    a = t.n(n),
                    i = t(1533),
                    r = t.n(i),
                    s = t(3220),
                    o = t(8526),
                    l = t(5521),
                    c = t(3403),
                    _ = t(6483),
                    d = t.n(_),
                    E = t(3138),
                    A = t(3815),
                    m = t(2039);
                const F = (0, n.createContext)(null);
                const D = (e) => {
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
                var b = t(7739),
                    g = t(5262),
                    p = t(1281);
                let C;
                function B(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function h(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(C || (C = {}));
                const f = (e) => e.replace(/&nbsp;/g, ' '),
                    v = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    S = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    w = (e, u, t = C.left) => e.split(u).reduce(t === C.left ? v : S, []),
                    y = (() => {
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    x = ['zh_cn', 'zh_sg', 'zh_tw'],
                    I = (e, u = C.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (x.includes(t)) return y(e);
                        if ('ja' === t) {
                            return (0, p.D4)()
                                .parse(e)
                                .map((e) => f(e));
                        }
                        return ((e, u = C.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = f(e);
                            return (w(a, /( )/, u).forEach((e) => (t = t.concat(w(e, n, C.left)))), t);
                        })(e, u);
                    };
                function T(e, u, t) {
                    const a = (0, n.useContext)(b.YN);
                    let i = Object.entries(a).filter(([e, u]) => !0 === u && e in g.u);
                    return (
                        t && (i = i.filter((e) => t.includes(e[0]))),
                        e.reduce((e, t) => {
                            const n = i.map((e) =>
                                d()(u[((e, u) => e + '__' + u)(t, e[0])], u[((e, u) => e + h(u))(t, e[0])]),
                            );
                            return ((e[t] = d()(u[t], ...n)), e);
                        }, {})
                    );
                }
                const k = (e, u, t, a = []) => {
                        const i = ((e, u = []) => {
                            const t = (0, n.useRef)(),
                                a = (0, n.useCallback)((...u) => {
                                    (t.current && t.current(), (t.current = e(...u)));
                                }, u);
                            return (
                                (0, n.useEffect)(
                                    () => () => {
                                        t.current && t.current();
                                    },
                                    [a],
                                ),
                                a
                            );
                        })(
                            () =>
                                D(() =>
                                    D(() => {
                                        if (e.current) {
                                            const t = e.current.getBoundingClientRect(),
                                                n = {
                                                    width: E.O.view.pxToRem(t.width),
                                                    height: E.O.view.pxToRem(t.height),
                                                    offsetX: E.O.view.pxToRem(t.left),
                                                    offsetY: E.O.view.pxToRem(t.top),
                                                };
                                            (window.tutorialApi.updateComponents(), u(n));
                                        }
                                    }),
                                ),
                            [u, e],
                        );
                        return (
                            (0, n.useEffect)(() => {
                                i();
                            }, [i, ...a]),
                            (0, n.useEffect)(() => {
                                if (t)
                                    return (
                                        engine.on('clientResized', i),
                                        () => {
                                            engine.off('clientResized', i);
                                        }
                                    );
                            }, [t, i]),
                            i
                        );
                    },
                    O = {
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
                    L = 'Border_base_f9',
                    N = 'Border_border_83',
                    M = 'Border_wrapper_17',
                    P = 'Border_active_e8',
                    $ = (0, n.memo)(({ slotOffset: e, slotWidth: u, onAnimationEnd: t }) => {
                        const i = (0, n.useRef)(null),
                            r = (0, n.useRef)(!1);
                        (0, n.useEffect)(() => {
                            r.current = !0;
                        }, [e, u]);
                        const s = (0, n.useCallback)(() => {
                            (r.current && t(), (r.current = !1));
                        }, [t]);
                        (0, n.useEffect)(() => {
                            const e = i.current;
                            return (
                                e && e.addEventListener('transitionend', s),
                                () => {
                                    e && e.removeEventListener('transitionend', s);
                                }
                            );
                        }, [s]);
                        const o = (0, n.useMemo)(() => ({ left: e }), [e]),
                            l = (0, n.useMemo)(() => ({ width: u }), [u]);
                        return a().createElement(
                            'div',
                            { className: L },
                            a().createElement(
                                'div',
                                { ref: i, className: N, style: o },
                                a().createElement(
                                    'div',
                                    { className: M },
                                    a().createElement('div', { className: P, style: l }),
                                ),
                            ),
                        );
                    }),
                    j = (e, u) => {
                        const t = [];
                        for (let n = 0; n < e; n++) t.push(u(n));
                        return t;
                    };
                var H = t(2056);
                const G = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function z() {
                    return (
                        (z =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        z.apply(this, arguments)
                    );
                }
                const W = R.views.common.tooltip_window.simple_tooltip_content,
                    U = (e) => {
                        let u = e.children,
                            t = e.body,
                            i = e.header,
                            r = e.note,
                            s = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, G);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: i, note: r, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, i, r, o]);
                        return a().createElement(
                            H.u,
                            z(
                                {
                                    contentId:
                                        ((_ = null == o ? void 0 : o.hasHtmlContent),
                                        _ ? W.SimpleTooltipHtmlContent('resId') : W.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var _;
                    };
                var q = t(9344),
                    X = t(2558),
                    V = t(8934);
                const K = {
                        base__enterUp: 'GroupAnimation_base__enterUp_b3',
                        animationEnterTop: 'GroupAnimation_animationEnterTop_92',
                        base__enterDown: 'GroupAnimation_base__enterDown_f0',
                        animationEnterDown: 'GroupAnimation_animationEnterDown_73',
                        base__exitUp: 'GroupAnimation_base__exitUp_92',
                        animationExitTop: 'GroupAnimation_animationExitTop_89',
                        base__exitDown: 'GroupAnimation_base__exitDown_67',
                        animationExitDown: 'GroupAnimation_animationExitDown_02',
                    },
                    Z = 'up',
                    Y = 'down',
                    J = ({ children: e, index: u, setSetupSwitching: t, disabled: i = !1 }) => {
                        const r = (0, n.useRef)(1 - u),
                            s = (0, n.useMemo)(() => {
                                const e = ((t = u), (n = r.current), t === n ? '' : t > n ? Y : Z);
                                var t, n;
                                const a = e && h(e);
                                return i ? {} : { enter: K[`base__enter${a}`], exit: K[`base__exit${a}`] };
                            }, [u, i]);
                        return (
                            (r.current = u),
                            a().createElement(
                                X.Z,
                                { className: K.base },
                                a().createElement(
                                    V.Z,
                                    {
                                        timeout: 300,
                                        key: u,
                                        classNames: s,
                                        onEnter: () => t(!0),
                                        onExited: () => t(!1),
                                    },
                                    e,
                                ),
                            )
                        );
                    };
                var Q = t(4301),
                    ee = t(7383);
                const ue = {
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
                    te = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function ne() {
                    return (
                        (ne =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ne.apply(this, arguments)
                    );
                }
                const ae = (e) => {
                        let u = e.value,
                            t = e.isEmpty,
                            n = e.className,
                            i = e.size,
                            r = void 0 === i ? 'normal' : i,
                            s = e.fadeInAnimation,
                            o = void 0 !== s && s,
                            l = e.hide,
                            c = void 0 !== l && l,
                            _ = e.maximumNumber,
                            E = void 0 === _ ? 99 : _,
                            A = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, te);
                        const m = t ? null : u,
                            F = 'string' == typeof m;
                        if ((m && !F && m < 0) || 0 === m) return null;
                        const D = m && !F && m > E,
                            b = d()(
                                ue.base,
                                ue[`base__${r}`],
                                o && ue.base__animated,
                                c && ue.base__hidden,
                                !m && ue.base__pattern,
                                t && ue.base__empty,
                                n,
                            );
                        return a().createElement(
                            'div',
                            ne({ className: b }, A),
                            a().createElement('div', { className: ue.bg }),
                            a().createElement('div', { className: ue.pattern }),
                            a().createElement(
                                'div',
                                { className: d()(ue.value, F && ue.value__text) },
                                D ? E : m,
                                D && a().createElement('span', { className: ue.plus }, '+'),
                            ),
                        );
                    },
                    ie = 'FormatText_base_d0',
                    re = ({ binding: e, text: u = '', classMix: t, alignment: i = C.left, formatWithBrackets: r }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const s = r && e ? B(u, e) : u;
                        return a().createElement(
                            n.Fragment,
                            null,
                            s.split('\n').map((u, r) =>
                                a().createElement(
                                    'div',
                                    { className: d()(ie, t), key: `${u}-${r}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : I(e, u))))(
                                        u,
                                        i,
                                        e,
                                    ).map((e, u) => a().createElement(n.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    };
                var se = t(7902);
                const oe = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    le = (e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    };
                var ce = t(9916);
                const _e = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    de = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    Ee = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = oe(`${e}.${t}`, window);
                                return _e(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    Ae = (e) => {
                        const u = ((e) => {
                                const u = (0, se.F)(),
                                    t = u.caller,
                                    n = u.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: de(a, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const a = oe(de(t, `${u}.${n}`), window);
                                    return _e(a) ? (e.push(a.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    };
                const me = () => (window.injected || (window.injected = new Map()), window.injected);
                const Fe = ce.Sw.instance;
                let De;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(De || (De = {}));
                const be = (e = 'model', u = De.Deep) => {
                        const t = (0, n.useState)(0),
                            a = (t[0], t[1]),
                            i = (0, n.useMemo)(() => (0, se.F)(), []),
                            r = i.callerUrl,
                            s = i.caller,
                            o = i.resId,
                            l = (0, n.useMemo)(() => {
                                const u = (function (e) {
                                    return me().has(e);
                                })(r.replace('.js', '.html'));
                                return window.__feature && window.__feature !== s && !u ? `subViews.${s}.${e}` : e;
                            }, [r, s, e]),
                            c = (0, n.useState)(() =>
                                ((e) => {
                                    const u = oe(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return _e(u) ? u.value : u;
                                })(Ee(l)),
                            ),
                            _ = c[0],
                            d = c[1],
                            E = (0, n.useRef)(-1);
                        return (
                            le(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? De.Deep : De.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== De.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === De.Deep
                                                ? (e === _ && a((e) => e + 1), d(e))
                                                : d(Object.assign([], e));
                                        },
                                        n = Ae(e);
                                    E.current = Fe.addCallback(n, t, o, u === De.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (u !== De.None)
                                    return () => {
                                        Fe.removeCallback(E.current, o);
                                    };
                            }, [o, u]),
                            _
                        );
                    },
                    ge = 'visible_change',
                    pe = ge;
                var Ce = t(4231);
                const Be = 'TopLabel_base_7f',
                    he = 'TopLabel_base__ready_00',
                    fe = 'TopLabel_text_d0',
                    ve = 'TopLabel_text__hangar_36',
                    Se = 'TopLabel_text__shown_25',
                    we = 'TopLabel_text__hidden_79',
                    ye = 'TopLabel_text__truncated_29',
                    xe = (0, n.memo)(({ panelType: e, text: u, parentRef: t, isTruncated: i = !1, show: r = !1 }) => {
                        const s = (0, n.useRef)(!1),
                            o = (0, n.useState)(!1),
                            l = o[0],
                            c = o[1];
                        (0, n.useEffect)(() => {
                            t || (r && !s.current && (s.current = !0), c(r));
                        }, [r, t]);
                        const _ = (0, n.useCallback)(() => {
                                ((s.current = !0), c(!0));
                            }, []),
                            E = (0, n.useCallback)(() => {
                                c(!1);
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = t && t.current;
                                if (e)
                                    return (
                                        e.addEventListener('mouseenter', _),
                                        e.addEventListener('mouseleave', E),
                                        () => {
                                            (e.removeEventListener('mouseenter', _),
                                                e.removeEventListener('mouseleave', E));
                                        }
                                    );
                            }, [t, _, E]),
                            a().createElement(
                                'div',
                                { className: d()(Be, s.current && he) },
                                a().createElement(
                                    'div',
                                    { className: d()(fe, e !== Ce.w.Setup && ve, i && ye, r && l ? Se : we) },
                                    u,
                                ),
                            )
                        );
                    }),
                    Ie = 'notUsableSection';
                var Te = t(7626);
                const ke = 'Section_base_8a',
                    Oe = 'Section_label_73',
                    Re = 'Section_counter_8a',
                    Le = 'Section_configLabel_c9',
                    Ne = 'Section_configText_eb',
                    Me = 'Section_configVehicleIcon_20';
                var Pe = t(7727);
                const $e = 'SlotDivider_base_60',
                    je = () => a().createElement('div', { className: $e });
                var He = t(3267),
                    Ge = t(8253),
                    ze = t(3141);
                var We = t(1043);
                let Ue, qe, Xe;
                (!(function (e) {
                    ((e[(e.ExtraSmall = We.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = We.j.small.width)] = 'Small'),
                        (e[(e.Medium = We.j.medium.width)] = 'Medium'),
                        (e[(e.Large = We.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = We.j.extraLarge.width)] = 'ExtraLarge'));
                })(Ue || (Ue = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = We.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = We.j.small.width)] = 'Small'),
                            (e[(e.Medium = We.j.medium.width)] = 'Medium'),
                            (e[(e.Large = We.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = We.j.extraLarge.width)] = 'ExtraLarge'));
                    })(qe || (qe = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = We.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = We.j.small.height)] = 'Small'),
                            (e[(e.Medium = We.j.medium.height)] = 'Medium'),
                            (e[(e.Large = We.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = We.j.extraLarge.height)] = 'ExtraLarge'));
                    })(Xe || (Xe = {})));
                const Ve = () => {
                        const e = (0, n.useContext)(b.YN),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return Ue.ExtraLarge;
                                    case e.large:
                                        return Ue.Large;
                                    case e.medium:
                                        return Ue.Medium;
                                    case e.small:
                                        return Ue.Small;
                                    case e.extraSmall:
                                        return Ue.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Ue.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return qe.ExtraLarge;
                                    case e.largeWidth:
                                        return qe.Large;
                                    case e.mediumWidth:
                                        return qe.Medium;
                                    case e.smallWidth:
                                        return qe.Small;
                                    case e.extraSmallWidth:
                                        return qe.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), qe.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return Xe.ExtraLarge;
                                    case e.largeHeight:
                                        return Xe.Large;
                                    case e.mediumHeight:
                                        return Xe.Medium;
                                    case e.smallHeight:
                                        return Xe.Small;
                                    case e.extraSmallHeight:
                                        return Xe.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Xe.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: i, mediaHeight: r, remScreenWidth: u, remScreenHeight: t };
                    },
                    Ke = 'Grabber_base_cf',
                    Ze = 'Grabber_base__enabled_b0',
                    Ye = 'Grabber_base__waitingUpdate_1d',
                    Je = 'Grabber_base__updating_f1',
                    Qe = 'Grabber_base__active_71',
                    eu = 'Grabber_base__exit_1f',
                    uu = 'Grabber_base__showAnimation_d9';
                var tu = t(3521),
                    nu = t(1820);
                const au = ({
                    children: e,
                    id: u,
                    containerRef: t,
                    isEnabled: i = !0,
                    onClick: r,
                    forceCenterX: s,
                    isUpdateAvailable: c,
                    handleAction: _,
                    blockOnGrabIds: F = [],
                }) => {
                    const b = Ve().mediaSize,
                        g = (0, n.useRef)({
                            actualX: 0,
                            clickCenterOffset: 0,
                            dropCenterX: 0,
                            grabActivationPassed: !1,
                            isDragActive: !1,
                            id: u,
                        }),
                        p = (0, n.useRef)({
                            isValid: !1,
                            startX: 0,
                            startCenterX: 0,
                            minXRestriction: 0,
                            maxXRestriction: 8e3,
                        }),
                        C = (0, n.useRef)(null),
                        B = (0, n.useState)(!1),
                        h = B[0],
                        f = B[1],
                        v = (0, n.useState)(0),
                        S = v[0],
                        w = v[1],
                        y = (function () {
                            const e = (0, n.useRef)(0);
                            return (
                                (0, m.k)(() => {
                                    window.cancelAnimationFrame(e.current);
                                }),
                                (0, n.useMemo)(
                                    () => ({
                                        run: (u) => {
                                            (window.cancelAnimationFrame(e.current),
                                                (e.current = window.requestAnimationFrame(() => {
                                                    e.current = window.requestAnimationFrame(() => {
                                                        (u(), (e.current = 0));
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
                        x = 0 !== s && i,
                        I = s ? s - p.current.startCenterX : S;
                    (0, n.useEffect)(() => {
                        if (((p.current.isValid = !1), u))
                            return D(() => {
                                const e = C.current,
                                    n = t.current;
                                if (n && e) {
                                    const t = e.getBoundingClientRect(),
                                        a = n.getBoundingClientRect(),
                                        i = t.left + 0.5 * t.width;
                                    ((p.current = {
                                        isValid: !0,
                                        minXRestriction: a.left,
                                        maxXRestriction: a.left + a.width,
                                        startX: t.left,
                                        startCenterX: i,
                                    }),
                                        _(nu.m.Ready, { dragId: u, currentCenterX: i }));
                                }
                            });
                    }, [b]);
                    const T = (0, n.useCallback)(
                            (e) => {
                                ((g.current.isDragActive = e),
                                    f(e),
                                    g.current.grabActivationPassed && !e && (0, tu.jZ)(!1, F));
                            },
                            [F],
                        ),
                        k = (0, n.useCallback)(() => {
                            (_(nu.m.DragStart, { dragId: g.current.id }),
                                (g.current.grabActivationPassed = !0),
                                (0, tu.jZ)(!0, F));
                        }, [_, F]),
                        O = (0, n.useCallback)((e) => {
                            const u = g.current,
                                t = p.current,
                                n = t.startX,
                                a = t.startCenterX,
                                i = t.minXRestriction,
                                r = t.maxXRestriction,
                                s = a - n,
                                o = e - u.clickCenterOffset;
                            u.dropCenterX = (0, tu.yG)(o, s, i, r);
                        }, []),
                        R = (0, n.useCallback)(
                            (e) => {
                                const u = g.current,
                                    t = p.current;
                                0 === e.button &&
                                    !u.isDragActive &&
                                    t.isValid &&
                                    i &&
                                    !c &&
                                    C.current &&
                                    ((u.actualX = e.clientX),
                                    (u.clickCenterOffset = u.actualX - t.startCenterX),
                                    T(!0));
                            },
                            [i, c, T],
                        ),
                        L = (0, n.useCallback)(() => {
                            !r || (i && p.current.isValid) || r();
                        }, [i, r]);
                    ((0, o.gd)(
                        h ? l.n.ESCAPE : l.n.NONE,
                        (0, A.z)(() => T(!1)),
                    ),
                        (0, n.useEffect)(() => {
                            i && s && w(0);
                        }, [s, i]));
                    const N = !h && g.current.grabActivationPassed;
                    ((0, n.useLayoutEffect)(() => {
                        g.current.id = u;
                    }, [u]),
                        (0, n.useEffect)(() => {
                            if (N) {
                                const e = g.current;
                                (_(nu.m.Drop, { dragId: e.id, currentCenterX: e.dropCenterX }),
                                    s === e.dropCenterX &&
                                        ((e.grabActivationPassed = !1),
                                        y.run(() => _(nu.m.DropExit, { dragId: e.id }))));
                            }
                        }, [N, y, s, _]),
                        (0, n.useEffect)(() => {
                            if (i && h && g.current.id) {
                                const e = E.O.client.events.mouse.up(([e, u]) => {
                                        if ('outside' === u) return T(!1);
                                        const t = g.current,
                                            n = e.clientX;
                                        (n === t.actualX && 0 === e.button && !g.current.grabActivationPassed
                                            ? r && r()
                                            : g.current.grabActivationPassed && O(n),
                                            g.current.isDragActive && T(!1));
                                    }),
                                    u = E.O.client.events.mouse.move(([e]) => {
                                        const u = g.current;
                                        if ((0 === e.clientX && 0 === e.clientY) || !u.isDragActive) return;
                                        const t = e.clientX,
                                            n = u.grabActivationPassed;
                                        (!n && k(),
                                            t !== u.actualX &&
                                                ((u.actualX = t),
                                                O(t),
                                                n && _(nu.m.Drag, { dragId: u.id, currentCenterX: u.dropCenterX }),
                                                w(u.dropCenterX - p.current.startCenterX)));
                                    });
                                return () => {
                                    (u(), e());
                                };
                            }
                        }, [k, _, h, i, r, T, O]));
                    const M = i ? d()(Ke, Ze, h && Qe, N && eu, x && Ye, s && Je) : d()(Ke, s && uu);
                    return a().createElement(
                        'div',
                        {
                            id: u,
                            ref: C,
                            onClick: L,
                            onMouseDown: R,
                            onTransitionEnd: (e) => {
                                const u = g.current;
                                e.target === C.current &&
                                    u.grabActivationPassed &&
                                    ((u.grabActivationPassed = !1), y.run(() => _(nu.m.DropExit, { dragId: u.id })));
                            },
                            className: M,
                            style: { left: I },
                        },
                        e,
                    );
                };
                let iu;
                !(function (e) {
                    ((e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next'));
                })(iu || (iu = {}));
                const ru = 'KeyLabel_base_ec',
                    su = 'KeyLabel_base__current_c2',
                    ou = 'KeyLabel_base__next_fa',
                    lu = ({ text: e, show: u, panelType: t, shellState: n, className: i }) => {
                        if (!e) return null;
                        const r = 'KEY_NONE' === e ? '..' : String(R.strings.readable_key_names.$dyn(e));
                        return a().createElement(
                            'div',
                            { className: d()(ru, n === iu.Current && su, n === iu.Next && ou, i) },
                            a().createElement(xe, { isTruncated: !0, text: r, show: u, panelType: t }),
                        );
                    };
                var cu = t(7078);
                const _u = ({ children: e, slotType: u, slotId: t, panelType: i, isEnabled: r = !0 }) => {
                        const s = (0, n.useMemo)(() => ({ slotType: u, slotId: t }), [u, t]);
                        return a().createElement(
                            cu.t,
                            {
                                isEnabled: r,
                                args: s,
                                decoratorId: [Ce.w.Battle, Ce.w.Prebattle].includes(i)
                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                    : 0,
                            },
                            a().createElement('div', null, e),
                        );
                    },
                    du = 'Close_base_f3',
                    Eu = 'Close_base__invisible_0e',
                    Au = 'Close_base__shown_a2',
                    mu = 'Close_base__hover_6d',
                    Fu = 'Close_base__down_2b',
                    Du = (0, n.memo)(
                        ({ id: e, show: u = !0, onClick: t, soundHover: i = 'highlight', soundClick: r = 'play' }) => {
                            const s = (0, n.useState)(!1),
                                o = s[0],
                                l = s[1],
                                c = (0, n.useState)(!1),
                                _ = c[0],
                                E = c[1],
                                A = (0, n.useState)(!1),
                                m = A[0],
                                F = A[1],
                                b = (0, n.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []),
                                g = (0, n.useCallback)(() => {
                                    (E(!0), i && (0, Pe.G)(i));
                                }, [i]),
                                p = (0, n.useCallback)(() => {
                                    (l(!1), E(!1));
                                }, []),
                                C = (0, n.useCallback)(
                                    (e) => {
                                        u && 0 === e.button && (l(!0), r && (0, Pe.G)(r));
                                    },
                                    [u, r],
                                ),
                                B = (0, n.useCallback)(
                                    (e) => {
                                        u && 0 === e.button && t && t();
                                    },
                                    [u, t],
                                );
                            (0, n.useEffect)(
                                () =>
                                    D(() => {
                                        F(!0);
                                    }),
                                [],
                            );
                            const h = d()(du, !m && Eu, m && u && Au, o && Fu, _ && mu);
                            return a().createElement('div', {
                                id: e,
                                onMouseOver: g,
                                onMouseLeave: p,
                                onMouseDown: C,
                                onMouseUp: B,
                                className: h,
                                onClick: b,
                            });
                        },
                    ),
                    bu = 'Slot_base_3a',
                    gu = 'Slot_label_e6',
                    pu = 'Slot_close_bb',
                    Cu = 'Slot_disabled_5d',
                    Bu = 'Slot_shadow_a7',
                    hu = 'Slot_category_2c';
                let fu;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(fu || (fu = {}));
                const vu = ({
                        children: e,
                        contentID: u,
                        decoratorID: t = 0,
                        targetId: a = 0,
                        args: i,
                        isEnabled: r = !0,
                        onMouseDown: s,
                    }) => {
                        const o = (0, n.useCallback)(() => {
                                ((0, ce.c9)(ce.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: i,
                                }),
                                    Pe.$.playYes());
                            }, [i, u, t, a]),
                            l = (0, n.useCallback)(() => {
                                (0, ce.c9)(ce.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [u, t, a]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    (s && s(e), ((e) => e.button === fu.RIGHT)(e) && o());
                                },
                                [s, o],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === r && l();
                            }, [r, l]),
                            r ? (0, n.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Su = ['children'];
                function wu() {
                    return (
                        (wu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        wu.apply(this, arguments)
                    );
                }
                const yu = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, Su);
                    return a().createElement(
                        vu,
                        wu({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                        u,
                    );
                };
                var xu = t(1396),
                    Iu = t(5918);
                const Tu = (0, c.Pi)(
                        ({
                            intCD: e,
                            id: u,
                            itemInstalledSetupIdx: t,
                            isMountedMoreThanOne: i,
                            isInstalled: r,
                            isDisabled: o,
                            imageSource: l,
                            isEmpty: c,
                            slotIndex: _,
                            slotType: d,
                            contextMenuDisabled: E,
                            isSetupSwitching: A,
                            children: m,
                        }) => {
                            const F = (0, s.t)().model.root.get().vehicleCD,
                                D = (0, n.useState)(!0),
                                b = D[0],
                                g = D[1],
                                p = (0, xu.K)();
                            (0, n.useEffect)(() => {
                                (g(!1), p.run(() => g(!0), 100));
                            }, [F]);
                            const C = (0, n.useMemo)(
                                () => ({
                                    intCD: e,
                                    slotType: d,
                                    installedSlotId: u,
                                    isMounted: r,
                                    fieldType: 1,
                                    itemInstalledSetupIdx: t,
                                    itemInstalledSetupSlotIdx: u,
                                    isMountedMoreThanOne: i,
                                }),
                                [e, d, u, t, r, i],
                            );
                            return b
                                ? a().createElement(
                                      Iu.y,
                                      {
                                          uniqueKey: e,
                                          isEmpty: c,
                                          slotIndex: _,
                                          slotType: d,
                                          imageSource: l,
                                          itemInstalledSetupIndex: t,
                                      },
                                      a().createElement(
                                          yu,
                                          { isEnabled: !(A || E || o || c), args: C },
                                          a().createElement('div', null, m),
                                      ),
                                  )
                                : a().createElement('div', null, m);
                        },
                    ),
                    ku = (0, c.Pi)(
                        ({
                            slotType: e,
                            slotIndex: u,
                            level: t,
                            isSelected: i,
                            isSetupSwitching: r,
                            isSectionSelected: o,
                            onActiveSlotChanged: l,
                            onSlotSelected: c,
                            onActiveSlotRefChanged: _,
                            onSlotClear: d,
                            panelType: E,
                            isDisabled: A = !1,
                            isBorderActive: m,
                            isIncompatible: F = !1,
                            grabberId: b,
                            containerRef: g,
                            activeDragId: p,
                            handleGrabberAction: C,
                            forceLeftUpdate: B,
                            potentialDropId: h,
                            blockOnGrabIds: f,
                            contextMenuDisabled: v,
                            groupIndex: S,
                            sectionIndex: w,
                        }) => {
                            const y = (0, s.t)().model.computes.slots.slot(S, w, u),
                                x = y.imageSource,
                                I = y.isInstalled,
                                T = y.itemInstalledSetupIdx,
                                k = y.isMountedMoreThanOne,
                                O = y.overlayType,
                                R = y.keyName,
                                L = y.categoryImgSource,
                                N = y.withAttention,
                                M = y.id,
                                P = y.intCD,
                                $ = E === Ce.w.Setup,
                                j = !(0, Q.s$)(E),
                                H = !(0, Q.iN)(E),
                                G = E === Ce.w.Compare,
                                z = $ && o && j,
                                W = (0, n.useRef)(!1),
                                U = (0, n.useRef)(null),
                                q = -1 === P;
                            ((0, n.useEffect)(() => {
                                if (!W.current && o && i)
                                    return D(() => {
                                        (l && l(U, e, M), (W.current = !0));
                                    });
                                W.current = !0;
                            }, [M, o, i, l, e]),
                                (0, n.useEffect)(() => {
                                    i && _(U);
                                }, [i, _]));
                            const X = ((e) => {
                                    const u = (0, n.useRef)(-1),
                                        t = (0, n.useCallback)(
                                            (t) => {
                                                if (-1 === u.current) {
                                                    const n = e(t);
                                                    n &&
                                                        (u.current = window.setTimeout(() => {
                                                            u.current = -1;
                                                        }, n));
                                                }
                                            },
                                            [e],
                                        );
                                    return ((0, n.useEffect)(() => () => clearTimeout(u.current), []), t);
                                })((0, n.useCallback)(() => (!i && j && !r && c(e, M), 500), [M, j, i, r, c, e])),
                                V = (0, n.useCallback)(() => {
                                    A || X('');
                                }, [X, A]),
                                K = (0, n.useCallback)(() => {
                                    H && !i && !p && !A && Pe.$.playHighlight();
                                }, [i, p, A, H]);
                            (0, n.useEffect)(() => {
                                h && Pe.$.playHighlight();
                            }, [h]);
                            const Z = (0, n.useCallback)(() => {
                                    null == d || d(M, e);
                                }, [M, d, e]),
                                Y = $ && !I,
                                J = Boolean(b && h === b),
                                ee = b && (z || G),
                                ue = `${e}-slot-${M}`,
                                te = L && L.length > 0,
                                ne = te ? { backgroundImage: `url(${L})` } : {},
                                ae = {
                                    id: b,
                                    containerRef: g,
                                    isEnabled: !q,
                                    onClick: V,
                                    isUpdateAvailable: Boolean(p),
                                    handleAction: C,
                                    forceCenterX: B,
                                    blockOnGrabIds: f,
                                },
                                ie = {
                                    isEmpty: q,
                                    intCD: P,
                                    slotType: e,
                                    slotIndex: u,
                                    imageSource: x,
                                    isDisabled: A,
                                    isInstalled: I,
                                    id: M,
                                    itemInstalledSetupIdx: T,
                                    isMountedMoreThanOne: k,
                                    contextMenuDisabled: v,
                                    isSetupSwitching: r,
                                };
                            return a().createElement(
                                'div',
                                { className: bu, onMouseEnter: K, id: ue },
                                (o || G) &&
                                    !I &&
                                    a().createElement(
                                        'div',
                                        { className: pu },
                                        a().createElement(Du, { id: `close-${ue}`, show: !p, onClick: Z }),
                                    ),
                                a().createElement(
                                    _u,
                                    { slotType: e, slotId: M, isEnabled: !p, panelType: E },
                                    a().createElement(
                                        'div',
                                        { ref: U },
                                        a().createElement(
                                            Ge.W,
                                            {
                                                activeDragId: p,
                                                slotType: e,
                                                isSelected: i,
                                                isBorderActive: Boolean(m),
                                                panelType: E,
                                                isDisabled: A,
                                                isPotentialDrop: J,
                                                onClick: ee ? void 0 : V,
                                            },
                                            j &&
                                                a().createElement(
                                                    'div',
                                                    { className: gu },
                                                    a().createElement(lu, { text: R, show: Boolean(o), panelType: E }),
                                                ),
                                            a().createElement(
                                                He.J,
                                                { when: Boolean(ee), wrapper: au, withProps: ae },
                                                a().createElement(
                                                    He.J,
                                                    { when: j, wrapper: Tu, withProps: ie },
                                                    a().createElement(ze.c, {
                                                        imageSource: x,
                                                        isIncompatible: F,
                                                        overlayType: O,
                                                        level: t,
                                                        isTemporary: Y,
                                                        withAttention: N,
                                                    }),
                                                ),
                                            ),
                                            te &&
                                                a().createElement(
                                                    a().Fragment,
                                                    null,
                                                    a().createElement('span', { className: Bu }),
                                                    a().createElement('span', { className: hu, style: ne }),
                                                ),
                                            A && a().createElement('div', { className: Cu }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Ou = 'BattleAbilitySlot_base_74',
                    Ru = 'BattleAbilitySlot_rank_01',
                    Lu = ['rank'];
                const Nu = (e) => {
                    let u = e.rank,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, Lu);
                    return a().createElement(
                        'div',
                        { className: Ou },
                        a().createElement(ku, t),
                        u && a().createElement('div', { className: Ru, style: { backgroundImage: `url(${u})` } }),
                    );
                };
                var Mu = t(4814);
                const Pu = 'OptDeviceSlot_base_14',
                    $u = 'OptDeviceSlot_specializations_c3',
                    ju = ['groupIndex', 'sectionIndex', 'slotIndex', 'activeSpecsMask', 'isChangeSetupIndex'];
                function Hu() {
                    return (
                        (Hu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Hu.apply(this, arguments)
                    );
                }
                const Gu = (0, c.Pi)((e) => {
                        let u = e.groupIndex,
                            t = e.sectionIndex,
                            n = e.slotIndex,
                            i = e.activeSpecsMask,
                            r = e.isChangeSetupIndex,
                            o = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, ju);
                        const l = (0, s.t)(),
                            c = l.controls,
                            _ = l.model.computes.specializations(u, t, n),
                            E = _.specializations.length,
                            A = o.panelType === Ce.w.Setup || o.panelType === Ce.w.Compare,
                            m = !(0, Q.s$)(o.panelType),
                            F = _.isDynamic;
                        return a().createElement(
                            'div',
                            { className: d()(Pu, E && !F && !r && 'specializationsSlot') },
                            m &&
                                a().createElement(
                                    'div',
                                    { className: $u },
                                    a().createElement(Mu.G, {
                                        specializations: _.specializations,
                                        isDynamic: F,
                                        activeSpecsMask: i,
                                        isSpecializationActive: A,
                                        onSpecializationClick: (e) => {
                                            c.specializationSelect({ slotId: o.id, specializationIndex: e });
                                        },
                                    }),
                                ),
                            a().createElement(ku, Hu({}, o, { groupIndex: u, sectionIndex: t, slotIndex: n })),
                        );
                    }),
                    zu = {
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
                    Wu = ({ id: e, isSelected: u, isLocked: t, onSlotSelected: i, panelType: r }) => {
                        const s = ee.yZ,
                            o = (0, n.useCallback)(() => {
                                i(s, e);
                            }, [e, i, s]),
                            l = d()(zu.base, zu[`base__${r}`], t && zu.base__disabled, u && zu.base__toggle),
                            c = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: 'url(R.images.gui.maps.icons.quests.bonuses.small.camouflage)',
                                }),
                                [],
                            ),
                            _ = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${u ? 'on' : 'off'})`,
                                }),
                                [u],
                            ),
                            E = `toggle-camouflage-slot-${e}`;
                        return a().createElement(
                            _u,
                            { slotType: s, slotId: e, panelType: r },
                            a().createElement(
                                'div',
                                { id: E, className: l, onClick: o, onMouseEnter: Pe.$.playHighlight },
                                u && a().createElement('div', { className: zu.glow }),
                                a().createElement('div', { className: zu.image, style: c }),
                                a().createElement('div', { className: zu.toggle, style: _ }),
                            ),
                        );
                    },
                    Uu = ['groupIndex', 'sectionIndex', 'slotIndex', 'sectionType'];
                function qu() {
                    return (
                        (qu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        qu.apply(this, arguments)
                    );
                }
                const Xu = (0, c.Pi)((e) => {
                        let u = e.groupIndex,
                            t = e.sectionIndex,
                            n = e.slotIndex,
                            i = e.sectionType,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, Uu);
                        const o = (0, s.t)().model,
                            l = o.computes.slots.slot(u, t, n),
                            c = o.ammunitionPanel.get(),
                            _ = c.selectedSection,
                            d = c.selectedSlot,
                            E = (_ === i ? d : -1) === l.id;
                        switch (i) {
                            case ee.zn: {
                                const e = l;
                                return a().createElement(
                                    Gu,
                                    qu({}, e, r, { groupIndex: u, sectionIndex: t, slotIndex: n, isSelected: E }),
                                );
                            }
                            case ee.yZ: {
                                const e = l;
                                return a().createElement(
                                    Wu,
                                    qu({}, r, e, { groupIndex: u, sectionIndex: t, slotIndex: n }),
                                );
                            }
                            case ee.YN: {
                                const e = l;
                                return a().createElement(
                                    Nu,
                                    qu({}, r, e, { groupIndex: u, sectionIndex: t, slotIndex: n, isSelected: E }),
                                );
                            }
                            default:
                                return a().createElement(
                                    ku,
                                    qu({}, r, { isSelected: E, groupIndex: u, sectionIndex: t, slotIndex: n }),
                                );
                        }
                    }),
                    Vu = 'Slots_base_27',
                    Ku = [
                        'groupIndex',
                        'sectionIndex',
                        'sectionType',
                        'onActiveSlotChanged',
                        'isDisabled',
                        'blockOnGrabIds',
                        'isChangeSetupIndex',
                        'setIsExitBlocked',
                    ];
                function Zu() {
                    return (
                        (Zu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Zu.apply(this, arguments)
                    );
                }
                const Yu = (0, c.Pi)((e) => {
                        let u = e.groupIndex,
                            t = e.sectionIndex,
                            i = e.sectionType,
                            r = e.onActiveSlotChanged,
                            o = e.isDisabled,
                            l = e.blockOnGrabIds,
                            c = e.isChangeSetupIndex,
                            _ = e.setIsExitBlocked,
                            E = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, Ku);
                        const A = (0, n.useRef)(null),
                            m = (0, n.useRef)(null),
                            F = (0, s.t)(),
                            D = F.model,
                            b = F.controls,
                            g = D.computes.slots.length(u, t),
                            p = D.ammunitionPanel.get(),
                            C = p.selectedSection,
                            B = p.selectedSlot,
                            h = p.syncInitiator,
                            f = (0, n.useCallback)(
                                (e, u) => {
                                    b.dragDropSwap({
                                        sectionType: i,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(u[u.length - 1]),
                                    });
                                },
                                [b, i],
                            ),
                            v = C === i,
                            S = i === ee.YN,
                            w = v ? B : -1,
                            y = `${i}-${g}slots`,
                            x = (0, Te.UW)({
                                baseId: y,
                                slotsLength: g,
                                handleSwap: f,
                                setIsExitBlocked: _,
                                syncInitiator: h,
                            }),
                            I = x.handleGrabberAction,
                            T = x.dragState,
                            k = x.getForceCenterX;
                        (0, n.useEffect)(() => {
                            v && -1 !== w && A.current && r(A, C, w);
                        }, [r, v, C, w]);
                        const O = (e, u) => {
                                if ((o || Pe.$.playClick(), 'number' != typeof u))
                                    return console.warn('selectedSlot is not a number');
                                b.sectionSelect({ selectedSlot: u, selectedSection: e });
                            },
                            R = (e) => {
                                A.current = e ? e.current : null;
                            },
                            L = (e, u) => {
                                b.slotClear({ slotId: e, sectionType: u });
                            };
                        return a().createElement(
                            'div',
                            { id: y, ref: m, className: d()(Vu, i) },
                            j(g, (e) => {
                                const s = !S && g > 1 ? `${y}-${e}` : '';
                                return a().createElement(
                                    n.Fragment,
                                    { key: `slot ${u}-${t}-${e}` },
                                    e > 0 && a().createElement(je, null),
                                    a().createElement(
                                        Xu,
                                        Zu(
                                            {
                                                groupIndex: u,
                                                sectionIndex: t,
                                                slotIndex: e,
                                                sectionType: i,
                                                isSectionSelected: v,
                                                isDisabled: o,
                                                contextMenuDisabled: S,
                                                slotType: i,
                                                onActiveSlotChanged: r,
                                                onSlotSelected: O,
                                                onActiveSlotRefChanged: R,
                                                onSlotClear: L,
                                                grabberId: s,
                                                containerRef: m,
                                                forceLeftUpdate: k(s),
                                                activeDragId: T.activeDragId,
                                                handleGrabberAction: I,
                                                potentialDropId: T.potentialDropId,
                                                blockOnGrabIds: l,
                                                isSetupSwitching: c,
                                                isChangeSetupIndex: c,
                                            },
                                            E,
                                        ),
                                    ),
                                );
                            }),
                        );
                    }),
                    Ju = [
                        'groupIndex',
                        'sectionIndex',
                        'type',
                        'newItemsCount',
                        'panelType',
                        'sectionsIds',
                        'vehicle',
                        'vehicleType',
                        'isSetupSwitching',
                        'classMix',
                    ];
                function Qu() {
                    return (
                        (Qu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Qu.apply(this, arguments)
                    );
                }
                const et = (0, c.Pi)((e) => {
                    let u = e.groupIndex,
                        t = e.sectionIndex,
                        i = e.type,
                        r = e.newItemsCount,
                        o = e.panelType,
                        l = e.sectionsIds,
                        c = e.vehicle,
                        _ = e.vehicleType,
                        E = e.isSetupSwitching,
                        A = e.classMix,
                        m = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, Ju);
                    const F = (0, s.t)().model,
                        D = (0, n.useRef)(null),
                        b = F.ammunitionPanel.get(),
                        g = b.selectedSection,
                        p = b.syncInitiator,
                        C = F.computes.slots.length(u, t),
                        B = F.computes.slots.existFilled(u, t),
                        h = ((e, u) => {
                            const t = be('tutorialModel.triggers.items').filter((t) => {
                                if (!t) return !1;
                                const n = t.value,
                                    a = n.triggers.filter((e) => e.value === u);
                                return n.componentId === e && a.length > 0;
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
                        })('AmmunitionPanelBattleAbilities', pe);
                    (0, n.useEffect)(() => {
                        null == h || h.runTrigger(!0);
                    }, [h]);
                    const f = g === i,
                        v = (0, Te.Tu)(i, l),
                        S = v.selfId,
                        w = v.blockOnGrabIds,
                        y = ((c && c.length > 0) || (_ && _.length > 0)) && o !== Ce.w.Battle && o !== Ce.w.Respawn,
                        x = (0, n.useMemo)(
                            () => ({
                                icon: a().createElement('span', {
                                    className: Me,
                                    style: {
                                        backgroundImage: _
                                            ? `url(${R.images.gui.maps.icons.vehicleTypes.extraSmall.$dyn(_)})`
                                            : '',
                                    },
                                }),
                                vehicle: c,
                            }),
                            [c, _],
                        ),
                        I = C > 0 && o !== Ce.w.Compare && o !== Ce.w.Battle && o !== Ce.w.Respawn,
                        T = R.strings.tank_setup.section.$dyn(i);
                    if ('string' != typeof T)
                        throw new Error(`No top label text for section type ${i} or it's not a string`);
                    return a().createElement(
                        'div',
                        {
                            id: E ? Ie : S,
                            ref: D,
                            className: d()(
                                ke,
                                A,
                                f && 'sectionSelected',
                                C > 1 && 'multiSlot',
                                p >= 0 && B && 'existFilledSlots',
                            ),
                        },
                        y &&
                            a().createElement(
                                H.u,
                                { contentId: R.views.frontline.lobby.tooltips.SkillOrderTooltip('resId') },
                                a().createElement(
                                    'div',
                                    { className: Le },
                                    a().createElement(re, {
                                        classMix: Ne,
                                        text: R.strings.tank_setup.categories.reserves.config(),
                                        binding: x,
                                    }),
                                ),
                            ),
                        I &&
                            a().createElement(
                                'div',
                                { className: Oe },
                                a().createElement(xe, { text: T, parentRef: D, show: !f, panelType: o }),
                            ),
                        a().createElement(
                            Yu,
                            Qu({ groupIndex: u, sectionIndex: t, sectionType: i, panelType: o, blockOnGrabIds: w }, m),
                        ),
                        Boolean(r) &&
                            a().createElement(
                                'div',
                                { className: Re },
                                a().createElement(ae, { value: r, size: 'small', fadeInAnimation: !0 }),
                            ),
                    );
                });
                var ut = t(8598);
                const tt = {
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
                    nt = ({
                        id: e,
                        itemInstalledSetupIdx: u,
                        isMountedMoreThanOne: t,
                        imageSource: i,
                        count: r,
                        isInfinity: s,
                        isSelected: o,
                        keyName: l,
                        panelType: c,
                        intCD: _,
                        slotIndex: E,
                        grabberId: A,
                        isSetupSwitching: m,
                        containerRef: F,
                        activeDragId: D,
                        handleGrabberAction: b,
                        forceLeftUpdate: g,
                        potentialDropId: p,
                        blockOnGrabIds: C,
                        shellState: B,
                        isDisabled: h,
                    }) => {
                        const f = !(0, Q.s$)(c),
                            v = (0, n.useMemo)(() => ({ backgroundImage: `url(${i})` }), [i]),
                            S = A && A === p,
                            w = A && A === D,
                            y = (0, n.useMemo)(() => {
                                const n = { slotType: ee.g9, slotId: e, fieldType: 1, intCD: _ };
                                return [
                                    n,
                                    Object.assign({}, n, {
                                        installedSlotId: e,
                                        itemInstalledSetupIdx: u,
                                        itemInstalledSetupSlotIdx: e,
                                        isMountedMoreThanOne: t,
                                    }),
                                ];
                            }, [_, e, u, t]),
                            x = y[0],
                            I = y[1],
                            T = (0, n.useMemo)(
                                () => ({
                                    id: A,
                                    containerRef: F,
                                    isEnabled: Boolean(A) && o,
                                    isUpdateAvailable: Boolean(D),
                                    handleAction: b,
                                    forceCenterX: g,
                                    blockOnGrabIds: C,
                                }),
                                [D, C, F, g, A, b, o],
                            ),
                            k = (0, n.useMemo)(
                                () => ({ slotIndex: E, uniqueKey: _, slotType: ee.g9, imageSource: null }),
                                [_, E],
                            );
                        return a().createElement(
                            yu,
                            { isEnabled: f && !m && !h, args: I },
                            a().createElement(
                                cu.t,
                                {
                                    args: x,
                                    decoratorId: [Ce.w.Battle, Ce.w.Prebattle].includes(c)
                                        ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                        : 0,
                                    isEnabled: !D,
                                },
                                a().createElement(
                                    'div',
                                    { id: `shell-slot-${E}`, className: tt.base },
                                    l &&
                                        a().createElement(
                                            'div',
                                            { className: tt.label },
                                            a().createElement(lu, {
                                                text: l,
                                                show: o || c === Ce.w.Battle || c === Ce.w.Respawn,
                                                shellState: B,
                                                panelType: c,
                                                className: d()(
                                                    0 === E && tt.topLabel__first,
                                                    2 === E && tt.topLabel__last,
                                                ),
                                            }),
                                        ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: d()(
                                                tt.shell,
                                                !D && f && !h && tt.shell__active,
                                                w && tt.shell__grabbing,
                                                !w && S && tt.shell__potential,
                                            ),
                                        },
                                        a().createElement(
                                            He.J,
                                            { when: f, wrapper: au, withProps: T },
                                            a().createElement(
                                                He.J,
                                                { when: f, wrapper: Iu.y, withProps: k },
                                                a().createElement('div', { className: tt.image, style: v }),
                                                !s && a().createElement(ut.X, { count: r }),
                                                s && a().createElement('div', { className: tt.infinity }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    at = {
                        base: 'ToggleSlot_base_93',
                        slot: 'ToggleSlot_slot_cd',
                        slot__grabbing: 'ToggleSlot_slot__grabbing_df',
                        image: 'ToggleSlot_image_e0',
                        slot__active: 'ToggleSlot_slot__active_15',
                        glow: 'ToggleSlot_glow_48',
                        toggle: 'ToggleSlot_toggle_73',
                    },
                    it = ({ id: e, isSelected: u, imageSource: t, onSlotSelected: i, panelType: r }) => {
                        const s = (0, n.useCallback)(() => {
                                !u && i(e);
                            }, [e, u, i]),
                            o = d()(at.slot, !u && at.slot__active, at.slot__compare),
                            l = (0, n.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]),
                            c = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${u ? 'on' : 'off'})`,
                                }),
                                [u],
                            );
                        return a().createElement(
                            _u,
                            { slotType: ee.WI, slotId: e, panelType: r },
                            a().createElement(
                                'div',
                                { className: at.base },
                                a().createElement(
                                    'div',
                                    { className: o, onClick: s, id: `shell-slot-${e}` },
                                    u && a().createElement('div', { className: at.glow }),
                                    a().createElement('div', { className: at.image, style: l }),
                                    a().createElement('div', { className: at.toggle, style: c }),
                                ),
                            ),
                        );
                    },
                    rt = 'ShellContainer_base_46',
                    st = 'ShellContainer_base__compressed_13',
                    ot = [
                        'groupIndex',
                        'sectionIndex',
                        'slotIndex',
                        'isCompare',
                        'handleSlotSelected',
                        'baseId',
                        'grabber',
                        'panelType',
                    ];
                function lt() {
                    return (
                        (lt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        lt.apply(this, arguments)
                    );
                }
                const ct = (0, c.Pi)((e) => {
                        let u = e.groupIndex,
                            t = e.sectionIndex,
                            n = e.slotIndex,
                            i = e.isCompare,
                            r = e.handleSlotSelected,
                            o = e.baseId,
                            l = e.grabber,
                            c = e.panelType,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, ot);
                        const E = l.handleGrabberAction,
                            A = l.dragState,
                            m = l.getForceCenterX,
                            F = (0, s.t)().model,
                            D = F.computes.slots.length(u, t),
                            b = F.computes.slots.slot(u, t, n),
                            g = !i && D > 1 ? `${o}-${b.id}` : '';
                        return (0, Q.j2)(b)
                            ? null
                            : a().createElement(
                                  'div',
                                  { key: b.id, className: d()(rt, !i && 0 !== n && st) },
                                  i
                                      ? a().createElement(it, lt({}, b, { onSlotSelected: r, panelType: c }))
                                      : a().createElement(
                                            nt,
                                            lt(
                                                {},
                                                b,
                                                {
                                                    slotIndex: n,
                                                    grabberId: g,
                                                    forceLeftUpdate: m(g),
                                                    activeDragId: A.activeDragId,
                                                    handleGrabberAction: E,
                                                    potentialDropId: A.potentialDropId,
                                                    panelType: c,
                                                },
                                                _,
                                            ),
                                        ),
                              );
                    }),
                    _t = 'Shells_base_f9',
                    dt = (0, c.Pi)(
                        ({
                            panelType: e,
                            onSelected: u,
                            isCompare: t,
                            isSelected: i,
                            syncInitiator: r,
                            blockOnGrabIds: o,
                            isDisabled: l,
                            isSetupSwitching: c,
                            setIsExitBlocked: _,
                            groupIndex: d,
                            sectionIndex: E,
                        }) => {
                            const A = (0, s.t)(),
                                m = A.model,
                                F = A.controls,
                                b = m.computes.slots.length(d, E),
                                g = (0, n.useRef)(!1),
                                p = (0, n.useRef)(null),
                                C = t ? ee.WI : ee.g9,
                                B = `${C}-${b}shells`,
                                h = !(0, Q.iN)(e),
                                f = (0, n.useCallback)(
                                    (e) => {
                                        (F.sectionSelect({ selectedSlot: e, selectedSection: C }),
                                            h && Pe.$.playClick());
                                    },
                                    [F, C, h],
                                ),
                                v = (0, n.useCallback)(() => {
                                    i || t || l || c || f(0);
                                }, [i, t, c, l, f]),
                                S = (0, n.useCallback)(
                                    (e, u) => {
                                        F.dragDropSwap({
                                            sectionType: C,
                                            dragId: Number(e[e.length - 1]),
                                            dropId: Number(u[u.length - 1]),
                                        });
                                    },
                                    [F, C],
                                ),
                                w = (0, Te.UW)({
                                    baseId: B,
                                    slotsLength: b,
                                    handleSwap: S,
                                    setIsExitBlocked: _,
                                    syncInitiator: r,
                                });
                            return (
                                (0, n.useEffect)(
                                    () =>
                                        D(() => {
                                            g.current = !0;
                                        }),
                                    [],
                                ),
                                (0, n.useEffect)(() => {
                                    if (i && e === Ce.w.Setup) {
                                        if (!g.current)
                                            return D(() => {
                                                u();
                                            });
                                        u();
                                    }
                                }, [i, e, u]),
                                a().createElement(
                                    'div',
                                    {
                                        id: B,
                                        ref: p,
                                        className: _t,
                                        onClick: v,
                                        onMouseEnter: () => {
                                            !l && h && Pe.$.playHighlight();
                                        },
                                    },
                                    j(b, (u) =>
                                        a().createElement(ct, {
                                            key: `${d} ${E} ${u}`,
                                            groupIndex: d,
                                            sectionIndex: E,
                                            slotIndex: u,
                                            isCompare: t,
                                            containerRef: p,
                                            handleSlotSelected: f,
                                            panelType: e,
                                            blockOnGrabIds: o,
                                            isSelected: i,
                                            isDisabled: l,
                                            isSetupSwitching: c,
                                            grabber: w,
                                            baseId: B,
                                        }),
                                    ),
                                )
                            );
                        },
                    ),
                    Et = {
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
                    At = [Ce.w.Hangar, Ce.w.Battle, Ce.w.Prebattle, Ce.w.Respawn],
                    mt = (0, c.Pi)(
                        ({
                            type: e,
                            sectionsIds: u,
                            panelType: t,
                            onActiveSlotChanged: i,
                            isDisabled: r,
                            isBorderActive: o,
                            classMix: l,
                            isSetupSwitching: c,
                            setIsExitBlocked: _,
                            newItemsCount: E,
                            groupIndex: A,
                            sectionIndex: m,
                        }) => {
                            const F = (0, s.t)().model,
                                D = F.ammunitionPanel.get(),
                                b = D.ammoNotFull,
                                g = D.selectedSection,
                                p = D.syncInitiator,
                                C = (0, n.useRef)(null),
                                B = t === Ce.w.Compare,
                                h = g === e,
                                f = (0, n.useCallback)(() => {
                                    i(C, g, 0);
                                }, [i, g]),
                                v = (0, Te.Tu)(e, u),
                                S = v.selfId,
                                w = v.blockOnGrabIds,
                                y = ((e) => At.includes(e))(t) && !r && b,
                                x = F.computes.slots.filteredLength(A, m),
                                I = !B && t !== Ce.w.Battle && t !== Ce.w.Respawn;
                            return a().createElement(
                                'div',
                                {
                                    id: c ? Ie : S,
                                    className: d()(
                                        Et.base,
                                        l,
                                        Et[`base__${t}`],
                                        !o && h && Et.base__selected,
                                        B && Et.base__compare,
                                        r && Et.base__disabled,
                                    ),
                                    ref: C,
                                },
                                y && a().createElement('div', { className: Et.attention }),
                                I &&
                                    a().createElement(
                                        'div',
                                        { className: Et.label },
                                        a().createElement(xe, {
                                            text: R.strings.tank_setup.section.shells(),
                                            parentRef: C,
                                            show: !h,
                                            panelType: t,
                                        }),
                                    ),
                                y &&
                                    a().createElement('div', {
                                        className: d()(
                                            Et.border,
                                            2 === x && Et.border__double,
                                            3 === x && Et.border__triple,
                                        ),
                                    }),
                                a().createElement(dt, {
                                    groupIndex: A,
                                    sectionIndex: m,
                                    panelType: t,
                                    onSelected: f,
                                    isSelected: h,
                                    isCompare: B,
                                    syncInitiator: p,
                                    blockOnGrabIds: w,
                                    isDisabled: r,
                                    isSetupSwitching: c,
                                    setIsExitBlocked: _,
                                }),
                                Boolean(E) &&
                                    a().createElement(
                                        'div',
                                        { className: Et.counter },
                                        a().createElement(ae, { value: E, size: 'small', fadeInAnimation: !0 }),
                                    ),
                                r && a().createElement('div', { className: Et.disabled }),
                            );
                        },
                    ),
                    Ft = {
                        base: 'Sections_base_13',
                        section: 'Sections_section_35',
                        section__battle: 'Sections_section__battle_d3',
                        section__small: 'Sections_section__small_73',
                        section__extraSmall: 'Sections_section__extraSmall_5f',
                        section__first: 'Sections_section__first_e2',
                    };
                function Dt() {
                    return (
                        (Dt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Dt.apply(this, arguments)
                    );
                }
                const bt = (0, c.Pi)(
                        ({
                            groupIndex: e,
                            panelType: u,
                            isDisabled: t = !1,
                            onActiveSlotChanged: n,
                            isBorderActive: i,
                            isChangeSetupIndex: r,
                            setIsExitBlocked: o,
                        }) => {
                            const l = (0, s.t)().model,
                                c = T(['section'], Ft),
                                _ = l.computes.sections.IDs(e),
                                E = {
                                    panelType: u,
                                    isDisabled: t,
                                    onActiveSlotChanged: n,
                                    isBorderActive: i,
                                    sectionsIds: _,
                                    isChangeSetupIndex: r,
                                    setIsExitBlocked: o,
                                };
                            return a().createElement(
                                'div',
                                { className: Ft.base },
                                j(l.computes.sections.length(e), (t) => {
                                    const n = l.computes.sections.section(e, t);
                                    if (!n.slots || !n.slots.length) return null;
                                    const i = d()(
                                        c.section,
                                        0 !== t && (0, Q.s$)(u) && Ft.section__battle,
                                        0 === t && Ft.section__first,
                                    );
                                    if (n.type === ee.g9 || n.type === ee.WI) {
                                        const u = n;
                                        return a().createElement(
                                            mt,
                                            Dt({}, u, E, {
                                                groupIndex: e,
                                                sectionIndex: t,
                                                isSetupSwitching: r,
                                                key: `${n.name}${e}${n.slots.length}`,
                                                classMix: i,
                                            }),
                                        );
                                    }
                                    return a().createElement(
                                        et,
                                        Dt({}, n, E, {
                                            groupIndex: e,
                                            sectionIndex: t,
                                            isSetupSwitching: r,
                                            key: `${n.name}${e}${n.slots.length}`,
                                            classMix: i,
                                        }),
                                    );
                                }),
                            );
                        },
                    ),
                    gt = 'KeyboardKey_base_57',
                    pt = 'KeyboardKey_back_43',
                    Ct = a().memo(({ text: e }) =>
                        a().createElement('div', { className: gt }, a().createElement('div', { className: pt }, e)),
                    ),
                    Bt = 'SetupSwitchHotkey_base_4c',
                    ht = 'SetupSwitchHotkey_hotKeyWrapper_8d',
                    ft = 'SetupSwitchHotkey_plusWrapper_f0',
                    vt = 'SetupSwitchHotkey_plus_f0',
                    St = 'SetupSwitchHotkey_plus__horizontal_e0',
                    wt = 'SetupSwitchHotkey_plus__vertical_5b',
                    yt = a().memo(({ hotKeys: e }) =>
                        a().createElement(
                            'div',
                            { className: Bt },
                            e.map((e, u) => {
                                if (!e) return null;
                                const t = e.value;
                                return 0 === u
                                    ? a().createElement(Ct, { key: u, text: t })
                                    : a().createElement(
                                          'div',
                                          { key: u, className: ht },
                                          a().createElement(
                                              'div',
                                              { className: ft },
                                              a().createElement('div', { className: `${vt} ${St}` }),
                                              a().createElement('div', { className: `${vt} ${wt}` }),
                                          ),
                                          a().createElement(Ct, { text: t }),
                                      );
                            }),
                        ),
                    ),
                    xt = {
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
                function It() {
                    return (
                        (It =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        It.apply(this, arguments)
                    );
                }
                const Tt = R.strings.tank_setup.tooltips.prebattleSwitchIndicator,
                    kt = (e) => e.setupSelector.hotKeys,
                    Ot = (0, c.Pi)(
                        ({
                            groupIndex: e,
                            sectionProps: u,
                            isSetupSwitching: t,
                            setSetupSwitching: n,
                            handleSetupSwitching: i,
                        }) => {
                            const r = T(['switch'], xt),
                                o = (0, s.t)().model,
                                l = o.root.get().isDisabled,
                                c = o.computes.groups.group(e);
                            return a().createElement(
                                'div',
                                { key: c.groupId, className: xt.base },
                                a().createElement(
                                    'div',
                                    { className: xt.wrapper },
                                    a().createElement(
                                        J,
                                        ((e, u) => ({ index: e.currentIndex, setSetupSwitching: u }))(c, n),
                                        a().createElement(bt, It({}, u, { groupIndex: e, isChangeSetupIndex: t })),
                                    ),
                                    c.setupSelector.isSwitchEnabled &&
                                        a().createElement(
                                            'div',
                                            { className: d()(r.switch, (0, Q.iN)(u.panelType) && xt.switch__battle) },
                                            a().createElement(q._, {
                                                states: c.setupSelector.states,
                                                onClick: i,
                                                totalCount: c.totalCount,
                                                currentIndex: c.currentIndex,
                                                groupId: c.groupId,
                                                isDisabled: u.isDisabled,
                                            }),
                                            c.setupSelector.isPrebattleSwitchDisabled &&
                                                a().createElement(
                                                    U,
                                                    {
                                                        header: Tt.title(),
                                                        body: String(Tt.desc.$dyn(`c_${c.groupId}`)),
                                                    },
                                                    a().createElement('div', {
                                                        className: xt.prebattleSwitchIndicator,
                                                    }),
                                                ),
                                        ),
                                ),
                                ((_ = c),
                                ((E = u.panelType) === Ce.w.Battle || E === Ce.w.Respawn) &&
                                    _.setupSelector.isSwitchEnabled &&
                                    kt(_) &&
                                    a().createElement(
                                        'div',
                                        { className: d()(xt.hint, l && xt.hint__disabled) },
                                        a().createElement(yt, { hotKeys: kt(c) }),
                                    )),
                            );
                            var _, E;
                        },
                    ),
                    Rt = 'Groups_base_de',
                    Lt = (0, c.Pi)(
                        ({ sectionProps: e, isSetupSwitching: u, isReady: t, setSetupSwitching: i, children: r }) => {
                            const o = (0, s.t)(),
                                l = o.model,
                                c = o.controls,
                                _ = l.vehicleInfo.get(),
                                d = c.changeSetupIndex,
                                E = null == _ ? void 0 : _.vehicleName;
                            ((0, n.useEffect)(() => {
                                (e.panelType !== Ce.w.Hangar && e.panelType !== Ce.w.Setup) || !t || i(!1);
                            }, [t, e.panelType, i]),
                                (0, n.useEffect)(() => {
                                    e.panelType === Ce.w.Respawn && i(!1);
                                }, [E, e.panelType, i]));
                            const A = (0, n.useCallback)(
                                (u) => {
                                    (e.panelType === Ce.w.Respawn && i(!0), d(u));
                                },
                                [d, e.panelType, i],
                            );
                            return a().createElement(
                                'div',
                                { className: Rt },
                                j(l.computes.groups.length(), (t) =>
                                    a().createElement(Ot, {
                                        key: `group-${t}`,
                                        sectionProps: e,
                                        groupIndex: t,
                                        isSetupSwitching: u,
                                        setSetupSwitching: i,
                                        handleSetupSwitching: A,
                                    }),
                                ),
                                r,
                            );
                        },
                    );
                function Nt() {
                    return (
                        (Nt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Nt.apply(this, arguments)
                    );
                }
                const Mt = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = a().createElement('div', { className: t }, e);
                        if (u.header || u.body) return a().createElement(U, u, n);
                        const i = u.contentId;
                        return i
                            ? a().createElement(H.u, Nt({}, u, { contentId: i }), n)
                            : a().createElement(cu.t, u, n);
                    },
                    Pt = 'RoleSkillSlot_base_c4',
                    $t = 'RoleSkillSlot_icon_79',
                    jt = ({ roleSkill: e, tooltipId: u, tooltipHeader: t, tooltipBody: i, className: r }) => {
                        const s = (0, n.useMemo)(
                            () => ({
                                args: { tooltipId: u, roleSkill: e, header: t, body: i, hasHtmlContent: !0 },
                                header: t,
                                body: i,
                                ignoreShowDelay: !0,
                            }),
                            [e, t, i, u],
                        );
                        return a().createElement(
                            Mt,
                            { tooltipArgs: s, className: d()(Pt, r) },
                            a().createElement('div', {
                                className: $t,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                },
                            }),
                        );
                    },
                    Ht = 'SlotGlow_base_40',
                    Gt = 'SlotGlow_glow_a9',
                    zt = 'SlotGlow_glow__initialized_8d',
                    Wt = 'SlotGlow_glow__shown_f2',
                    Ut = 'SlotGlow_glow__hidden_94',
                    qt = (0, n.memo)(({ slotOffset: e, slotWidth: u, isAnimationRunning: t }) => {
                        const i = (0, n.useState)({ offset: e, slotWidth: u }),
                            r = i[0],
                            s = i[1],
                            o = (0, n.useRef)({ initialized: !1, offset: e, slotWidth: u });
                        ((0, n.useEffect)(() => {
                            let t = o.current.initialized;
                            (!t && e && ((t = !0), s({ offset: e, slotWidth: u })),
                                (o.current = { initialized: t, offset: e, slotWidth: u }));
                        }, [e, u]),
                            (0, n.useEffect)(() => {
                                t || s(o.current);
                            }, [t]));
                        const l = (0, n.useMemo)(() => {
                                const e = r.slotWidth + 25;
                                return { left: r.offset, width: e, backgroundSize: `${E.O.view.pxToRem(e)}rem 100%` };
                            }, [r.offset, r.slotWidth]),
                            c = !t && r.offset === o.current.offset,
                            _ = d()(Gt, o.current.initialized && zt, c ? Wt : Ut);
                        return a().createElement(
                            'div',
                            { className: Ht },
                            a().createElement('div', { className: _, style: l }),
                        );
                    }),
                    Xt = (0, c.Pi)(
                        ({
                            show: e = !0,
                            isReady: u = !0,
                            panelType: t,
                            isDisabled: i = !1,
                            onResize: r,
                            setIsExitBlocked: o,
                        }) => {
                            const l = (0, s.t)(),
                                c = l.model,
                                _ = l.controls,
                                E = c.ammunitionPanel.get(),
                                A = E.isSetupSwitchInProgress,
                                m = E.syncInitiator,
                                b = c.roleSkillSlot.get(),
                                g = (0, n.useState)(!1),
                                p = g[0],
                                C = g[1],
                                B = (0, n.useRef)(!1),
                                h = (0, n.useState)({ slotWidth: 0, slotOffset: 0 }),
                                f = h[0],
                                v = h[1],
                                S = (0, n.useState)(!1),
                                w = S[0],
                                y = S[1],
                                x = (0, n.useRef)(null),
                                I = (0, n.useContext)(F),
                                R = (0, n.useRef)({
                                    element: null,
                                    generation: 0,
                                    slotIndex: null,
                                    sectionIndex: null,
                                }),
                                L = (0, n.useCallback)(
                                    (e, u) => {
                                        if (p || A || t !== Ce.w.Hangar) return;
                                        const n = u || { width: 0, height: 0, offsetX: 0, offsetY: 0 };
                                        (_.sectionResized(Object.assign({ sectionType: e }, n)),
                                            I && (I.freeze(), I.resize()));
                                    },
                                    [p, A, t, _, I],
                                ),
                                N = (0, n.useCallback)(
                                    (e) => {
                                        L('main', e);
                                    },
                                    [L],
                                );
                            (k(x, N, !0, [m]), (0, n.useEffect)(() => () => N(), [N]));
                            const M = (0, n.useCallback)(() => {
                                    y(!1);
                                }, []),
                                P = (0, n.useCallback)(() => {
                                    if (R.current.element && x.current) {
                                        const e = R.current.element.getBoundingClientRect(),
                                            u = x.current.getBoundingClientRect();
                                        v({ slotWidth: e.width, slotOffset: e.left - u.left + 0.5 * e.width });
                                    }
                                }, []),
                                j = (0, n.useCallback)(
                                    (e, u, t) => {
                                        if (e.current && x.current) {
                                            const n = ((e, u, t) =>
                                                e !== t.current.slotIndex || u !== t.current.sectionIndex)(t, u, R);
                                            ((R.current.element = e.current),
                                                (R.current.slotIndex = t),
                                                (R.current.sectionIndex = u),
                                                B.current && n ? y(!0) : (B.current = !0),
                                                R.current.generation && P());
                                        }
                                    },
                                    [P],
                                ),
                                H = (0, n.useCallback)(
                                    () =>
                                        D(() => {
                                            ((R.current.generation += 1), P());
                                        }),
                                    [R, P],
                                );
                            ((0, n.useEffect)(() => D(H), [H]),
                                (0, n.useEffect)(
                                    () => (
                                        engine.on('clientResized', H),
                                        () => {
                                            engine.off('clientResized', H);
                                        }
                                    ),
                                    [H],
                                ));
                            const G = f.slotWidth,
                                z = f.slotOffset,
                                W = d()(O.base, !u && O.base__locked, !e && O.base__hidden, i && O.base__disabled),
                                U = d()(O.border, !w && O.border__hidden),
                                q = t === Ce.w.Setup || t === Ce.w.Compare,
                                X = {
                                    panelType: t,
                                    isDisabled: i,
                                    onActiveSlotChanged: j,
                                    isBorderActive: w,
                                    setIsExitBlocked: o,
                                };
                            (0, n.useEffect)(() => {
                                null == r || r();
                            }, [r, b.roleSkill]);
                            const V = T(['roleSkillSlot'], O);
                            return a().createElement(
                                'div',
                                { ref: x, className: W },
                                q &&
                                    a().createElement(qt, {
                                        key: R.current.generation,
                                        slotOffset: z,
                                        slotWidth: G,
                                        isAnimationRunning: w,
                                    }),
                                a().createElement(
                                    Lt,
                                    { isSetupSwitching: A || p, sectionProps: X, isReady: u, setSetupSwitching: C },
                                    b.roleSkill &&
                                        a().createElement(jt, {
                                            roleSkill: b.roleSkill,
                                            tooltipId: b.tooltipId,
                                            tooltipHeader: b.tooltipHeader,
                                            tooltipBody: b.tooltipBody,
                                            className: d()(O.roleSkillSlot, O[`roleSkillSlot__${t}`], V.roleSkillSlot),
                                        }),
                                ),
                                q &&
                                    a().createElement(
                                        'div',
                                        { className: U },
                                        a().createElement($, { slotWidth: G, slotOffset: z, onAnimationEnd: M }),
                                    ),
                            );
                        },
                    ),
                    Vt = 'App_base_43',
                    Kt = 'App_title_0e',
                    Zt = 'App_panel_2c',
                    Yt = (0, c.Pi)(() => {
                        const e = (0, s.t)().controls;
                        return (
                            (0, o.gd)(l.n.ESCAPE, e.escKeyDown),
                            a().createElement(
                                'div',
                                { className: Vt },
                                a().createElement('span', { className: Kt }, R.strings.veh_compare.vehConf.equipment()),
                                a().createElement(
                                    'div',
                                    { className: Zt },
                                    a().createElement(Xt, { panelType: Ce.w.Compare }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    r().render(
                        a().createElement(s.k, null, a().createElement(Yt, null)),
                        document.getElementById('root'),
                    );
                });
            },
            3267: (e, u, t) => {
                t.d(u, { J: () => i });
                var n = t(7363),
                    a = t.n(n);
                const i = ({ wrapper: e, children: u, when: t, withProps: n }) =>
                    t ? a().createElement(e, n, u) : a().createElement(a().Fragment, null, u);
            },
            9152: (e, u, t) => {
                t.d(u, { yy: () => n });
                (t(6483), t(8089), t(4598), t(3815), t(8526), t(5521), t(7727), t(7363), t(1922));
                const n = 'setup-content';
            },
            906: (e, u, t) => {
                t.d(u, { r: () => o });
                var n = t(7363),
                    a = t.n(n),
                    i = t(6483),
                    r = t.n(i);
                const s = {
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
                    o = a().memo(({ isTemporary: e, overlayType: u, overlaySource: t }) => {
                        const i = r()(s.base, e && s.base__fitting),
                            o = r()(s.icon, s[`icon__${u}`]),
                            l = (0, n.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]);
                        return a().createElement(
                            'div',
                            { className: i },
                            a().createElement('div', { className: o, style: l }),
                        );
                    });
            },
            8253: (e, u, t) => {
                t.d(u, { W: () => o });
                var n = t(7363),
                    a = t.n(n),
                    i = t(6483),
                    r = t.n(i);
                const s = {
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
                        slotType: u,
                        isSelected: t,
                        isBorderActive: n,
                        children: i,
                        panelType: o,
                        isDisabled: l,
                        isPotentialDrop: c,
                        onClick: _,
                    }) => {
                        const d = r()(
                            s.base,
                            !e && s[`base__${o}`],
                            u && s[`base__${u}`],
                            t && !c && !n && s.base__selected,
                            c && s['base__dragIn' + (t ? 'Active' : '')],
                            l && s.base__disabled,
                        );
                        return a().createElement('div', { className: d, onClick: _ }, i);
                    };
            },
            8598: (e, u, t) => {
                t.d(u, { X: () => l });
                var n = t(7363),
                    a = t.n(n),
                    i = t(6483),
                    r = t.n(i);
                const s = 'Count_base_e4',
                    o = 'Count_base__zero_64',
                    l = ({ count: e }) => {
                        const u = r()(s, !e && o);
                        return a().createElement('div', { className: u }, e);
                    };
            },
            3141: (e, u, t) => {
                t.d(u, { c: () => A });
                var n = t(6483),
                    a = t.n(n),
                    i = t(3977),
                    r = t(7363),
                    s = t.n(r),
                    o = t(906),
                    l = t(4105);
                const c = 'Inside_image_e5',
                    _ = 'Inside_image__fitting_11',
                    d = 'Inside_warning_e4',
                    E = 'Inside_change_5a',
                    A = ({
                        level: e,
                        overlayType: u,
                        isTemporary: t,
                        withAttention: n,
                        imageSource: A,
                        isIncompatible: m,
                    }) => {
                        const F = (0, r.useMemo)(() => {
                                const t = u === i.qm ? `${u}_${e}_overlay` : `${u}_overlay`;
                                return R.images.gui.maps.icons.quests.bonuses.small.$dyn(t);
                            }, [u, e]),
                            D = (0, r.useMemo)(() => ({ backgroundImage: `url(${A})` }), [A]),
                            b = !F && Boolean(u) && e;
                        return s().createElement(
                            'div',
                            null,
                            b && s().createElement(l.a, { level: e }),
                            s().createElement('div', { className: a()(c, (t || n) && _), style: D }),
                            n && s().createElement('div', { className: d }),
                            m && s().createElement('div', { className: E }),
                            F && s().createElement(o.r, { isTemporary: t, overlaySource: F, overlayType: u }),
                        );
                    };
            },
            4105: (e, u, t) => {
                t.d(u, { a: () => o });
                var n = t(7363),
                    a = t.n(n),
                    i = t(6483),
                    r = t.n(i);
                const s = {
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
                        const u = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_${e}`)})`,
                                }),
                                [e],
                            ),
                            t = r()(s.base, s[`base__level${e}`]);
                        return a().createElement('div', { style: u, className: t });
                    };
            },
            4814: (e, u, t) => {
                t.d(u, { G: () => m });
                var n = t(9480),
                    a = t(7363),
                    i = t.n(a),
                    r = t(1922),
                    s = t(6483),
                    o = t.n(s),
                    l = t(3457),
                    c = t(7078);
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
                        isCorrect: u,
                        isSpecializationActive: t = !0,
                        isDynamic: n,
                        mediaSize: s,
                        isClickable: d,
                        onSpecializationClick: E,
                        index: A,
                    }) => {
                        const m = s !== r.cJ.None,
                            F = (0, a.useCallback)(() => {
                                d && t && E && E(A);
                            }, [A, d, t, E]),
                            D = (0, a.useMemo)(() => {
                                let t = '';
                                m && (t = (s === r.cJ.Large || s === r.cJ.Huge ? r.cJ.Large : r.cJ.Medium) + '_');
                                const n = `${t}${e}_${u ? 'on' : 'off'}`,
                                    a = R.images.gui.maps.icons.specialization.$dyn(n);
                                return a && { backgroundImage: `url(${a})` };
                            }, [e, u, s, m]),
                            b = (0, a.useMemo)(
                                () => ({ spec: e, isDyn: n, isClickable: d, tooltip: 'hangarSlotSpec' }),
                                [e, n, d],
                            );
                        if (!D) return null;
                        const g = o()(
                                `specialization-${e}`,
                                _.base,
                                m && _[`base__${s}`],
                                t && _.base__setup,
                                u && _.base__correct,
                            ),
                            p = o()(_.icon, m && _[`icon__${s}`]),
                            C = m ? '' : _.specializationWrapper,
                            B = i().createElement(
                                'div',
                                { key: e, className: g },
                                i().createElement('div', { className: _.glow }),
                                i().createElement('div', { className: p, style: D }),
                            );
                        return i().createElement(
                            c.t,
                            { args: b },
                            d && t
                                ? i().createElement(
                                      l.u5,
                                      {
                                          size: l.qE.small,
                                          type: l.L$.ghost,
                                          mixClass: _.specializationButton,
                                          onClick: F,
                                      },
                                      B,
                                  )
                                : i().createElement('div', { className: C }, B),
                        );
                    },
                    E = 'Specializations_base_ab';
                function A() {
                    return (
                        (A =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        A.apply(this, arguments)
                    );
                }
                const m = ({
                    specializations: e,
                    isSpecializationActive: u = !0,
                    isDynamic: t,
                    mediaSize: a = r.cJ.None,
                    activeSpecsMask: s,
                    onSpecializationClick: o,
                }) =>
                    e.length
                        ? i().createElement(
                              'div',
                              { className: E, key: s },
                              n.UI(e, (e, n) =>
                                  i().createElement(
                                      d,
                                      A({ index: n, key: e.name }, e, {
                                          isSpecializationActive: u,
                                          isDynamic: t,
                                          mediaSize: a,
                                          onSpecializationClick: o,
                                      }),
                                  ),
                              ),
                          )
                        : null;
            },
            9605: (e, u, t) => {
                t.d(u, { U: () => b });
                var n = t(7363),
                    a = t.n(n),
                    i = t(6483),
                    r = t.n(i);
                let s;
                !(function (e) {
                    ((e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.WARNING = 1)] = 'WARNING'));
                })(s || (s = {}));
                const o = 'SwitchButton_base_23',
                    l = 'SwitchButton_base__active_31',
                    c = 'SwitchButton_base__warning_71',
                    _ = 'SwitchButton_buttonBack_ce',
                    d = 'SwitchButton_buttonBackHovered_45',
                    E = 'SwitchButton_base__hovered_b4',
                    A = 'SwitchButton_buttonGlow_4c',
                    m = 'SwitchButton_buttonIcon_d3',
                    F = 'SwitchButton_buttonWarning_3f',
                    D = 'SwitchButton_number_8a',
                    b = ({ id: e, state: u, currentIndex: t, isHovered: i }) => {
                        const b = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url('${R.images.gui.maps.icons.tanksetup.panel.indexes.$dyn(`setup_${e + 1}`)}')`,
                                }),
                                [e],
                            ),
                            g = e === t,
                            p = !g && u === s.WARNING;
                        return a().createElement(
                            'div',
                            { className: r()(o, { [l]: g, [c]: p, [E]: i }) },
                            a().createElement('div', { className: _ }),
                            a().createElement('div', { className: d }),
                            a().createElement('div', { className: m }),
                            a().createElement('div', { className: A }),
                            a().createElement('div', { className: F }),
                            a().createElement('div', { style: b, className: D }),
                        );
                    };
            },
            9344: (e, u, t) => {
                t.d(u, { _: () => E });
                var n = t(6483),
                    a = t.n(n),
                    i = t(9480),
                    r = t(7727),
                    s = t(7363),
                    o = t.n(s),
                    l = t(9605);
                const c = 'SwitchEquipment_base_1a',
                    _ = 'SwitchEquipment_base__disabled_73',
                    d = 'SwitchEquipment_cover_b3',
                    E = ({ onClick: e, totalCount: u, currentIndex: t, states: n, isDisabled: E, groupId: A }) => {
                        const m = (0, s.useRef)(null),
                            F = (0, s.useState)(!1),
                            D = F[0],
                            b = F[1],
                            g = (t + 1) % u,
                            p = (0, s.useCallback)(() => {
                                E || e({ groupId: A, currentIndex: g });
                            }, [A, E, g, e]),
                            C = (0, s.useCallback)(() => {
                                E || (b(!0), r.$.playHighlight());
                            }, [E]),
                            B = (0, s.useCallback)(() => {
                                E || b(!1);
                            }, [E]),
                            h = a()(c, E && _);
                        return o().createElement(
                            'div',
                            {
                                id: `switch-equipment-group-${A}`,
                                className: h,
                                onClick: p,
                                onMouseEnter: C,
                                onMouseLeave: B,
                                ref: m,
                            },
                            Array.from({ length: u }, (e, u) =>
                                o().createElement(l.U, {
                                    key: u,
                                    id: u,
                                    state: i.MH(n, u),
                                    currentIndex: t,
                                    isHovered: D,
                                }),
                            ),
                            E && o().createElement('div', { className: d }),
                        );
                    };
            },
            5918: (e, u, t) => {
                t.d(u, { y: () => y });
                var n = t(4888),
                    a = t(7383),
                    i = t(1396),
                    r = t(3403),
                    s = t(7363),
                    o = t.n(s),
                    l = t(2558),
                    c = t(8934),
                    _ = t(3220),
                    d = t(5958);
                const E = 'BackEffects_shine_f6',
                    A = 'BackEffects_sparks_55',
                    m = 'BackEffects_nut_79',
                    F = 'BackEffects_wrench_5a',
                    D = { enterActive: 'BackEffects_shine__enterActive_54' },
                    b = { enterActive: 'BackEffects_sparks__enterActive_79' },
                    g = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    p = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    C = [n.dZ, n.sH],
                    B = o().memo(({ in: e, actionType: u }) =>
                        o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(
                                c.Z,
                                { in: e, timeout: d.Dp, classNames: D },
                                o().createElement('div', { className: E }),
                            ),
                            o().createElement(
                                c.Z,
                                { in: e, timeout: d.IG, classNames: b },
                                o().createElement('div', { className: A }),
                            ),
                            C.includes(u) &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        c.Z,
                                        { in: e, timeout: d.wx, classNames: g },
                                        o().createElement('div', { className: m }),
                                    ),
                                    o().createElement(
                                        c.Z,
                                        { in: e, timeout: d.Kz, classNames: p },
                                        o().createElement('div', { className: F }),
                                    ),
                                ),
                        ),
                    ),
                    h = 'ColorMask_base_60',
                    f = 'ColorMask_base__enterActive_62',
                    v = ({ inProp: e, maskImage: u }) =>
                        o().createElement(
                            c.Z,
                            { in: e, timeout: d.Qj, classNames: { enterActive: f } },
                            o().createElement('div', { className: h, style: { maskImage: `url(${u})` } }),
                        ),
                    S = {
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
                    w = { enter: S.base__enter, exit: S.base__enter },
                    y = (0, r.Pi)(
                        ({
                            children: e,
                            slotIndex: u,
                            uniqueKey: t,
                            slotType: r,
                            isEmpty: E = !1,
                            imageSource: A,
                            itemInstalledSetupIndex: m,
                        }) => {
                            const F = (0, _.t)().model.lastSlotAction.get(),
                                D = F.leftID,
                                b = F.rightID,
                                g = F.leftIntCD,
                                p = F.rightIntCD,
                                C = F.actionType,
                                h = F.intCD,
                                f = (0, s.useState)(!0),
                                y = f[0],
                                x = f[1],
                                I = (0, s.useState)(!0),
                                T = I[0],
                                k = I[1],
                                O = (0, s.useState)(A),
                                R = O[0],
                                L = O[1],
                                N = (0, s.useState)(t),
                                M = N[0],
                                P = N[1],
                                $ = (0, s.useState)(m),
                                j = $[0],
                                H = $[1],
                                G = (0, i.K)(),
                                z = (0, i.K)(),
                                W = [n._2, n.dZ, n.sH],
                                U = (h === t || h === M) && j !== m && W.includes(C),
                                q = -1 === g || -1 === p,
                                X = r ? `base${r[0].toUpperCase() + r.slice(1)}` : 'base',
                                V = d.Sr[C] || 0;
                            (0, s.useEffect)(() => {
                                E || L(A);
                            }, [E, A]);
                            const K = (0, s.useCallback)(
                                    (e) => {
                                        const t = Object.assign({}, w);
                                        switch (C) {
                                            case n.Xo: {
                                                const e = D === u ? d.mI.RIGHT : d.mI.LEFT,
                                                    n = b - D != 1 ? d.mI.SWAP : '';
                                                ((t.enterDone = S[`${X}__enter${e}${n}`]),
                                                    (t.exit = S[`${X}__exit${e}${n}`]),
                                                    q &&
                                                        (E
                                                            ? (t.enterDone = S[`${X}__enter${d.mI.FADE}`])
                                                            : (t.exit = S[`${X}__exit${d.mI.FADE}`])));
                                                break;
                                            }
                                            case n._2:
                                                ((t.enterDone = S[`${X}__enter${d.mI.DESTROY}`]),
                                                    (t.exit = S[`${X}__exit${d.mI.DESTROY}`]),
                                                    G.run(() => x(!0), d.YJ),
                                                    k(!0));
                                                break;
                                            case n.sH:
                                            case n.dZ:
                                                ((t.enter = S[`${X}__enter${d.mI.DEMOUNT}${d.mI.FADE}`]),
                                                    (t.exit = S[`${X}__exit${d.mI.DEMOUNT}`]),
                                                    G.run(() => x(!0), d.Ij));
                                                break;
                                            case n.eC:
                                            case n.FR:
                                                if (r !== a.g9) {
                                                    const e = C === n.eC ? d.mI.FITTING : d.mI.FITTING_REMOVE;
                                                    ((t.enter = S[`${X}__enter${e}`]),
                                                        (t.exit = S[`${X}__exit${e}`]),
                                                        (t.exitActive = S[`${X}__exitActive${d.mI.FITTING}`]));
                                                } else
                                                    ((t.enterDone = S[`${X}__enter${d.mI.FADE}`]),
                                                        (t.exit = S[`${X}__exit${d.mI.FADE}`]));
                                                break;
                                            default:
                                                return e;
                                        }
                                        return o().cloneElement(e, { classNames: t, timeout: V });
                                    },
                                    [C, V, D, u, b, X, q, E, G, r],
                                ),
                                Z = (0, s.useCallback)(
                                    (e) => {
                                        z.run(() => {
                                            ((e.className = ''), e.classList.add(S.base), P(t), H(m));
                                        }, V);
                                    },
                                    [z, V, t, m],
                                ),
                                Y = (0, s.useCallback)(() => {
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
                                            key: t,
                                            timeout: V,
                                            classNames: w,
                                            onEntered: Z,
                                            onExiting: Y,
                                            unmountOnExit: !0,
                                        },
                                        o().createElement('div', { className: S.base }, e),
                                    ),
                                ),
                                U &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(B, { in: y, actionType: C }),
                                        o().createElement(v, { inProp: T, maskImage: R }),
                                    ),
                            );
                        },
                    );
            },
            5958: (e, u, t) => {
                t.d(u, {
                    Dp: () => s,
                    IG: () => o,
                    Ij: () => i,
                    Kz: () => c,
                    Qj: () => _,
                    Sr: () => E,
                    YJ: () => r,
                    mI: () => d,
                    wx: () => l,
                });
                var n = t(4888);
                const a = 1600,
                    i = 900,
                    r = 900,
                    s = 200,
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
                const E = { [n.Xo]: 200, [n.FR]: 250, [n.eC]: 250, [n._2]: 1400, [n.dZ]: a, [n.sH]: a, [n.Fd]: a };
            },
            3977: (e, u, t) => {
                t.d(u, { qm: () => n });
                const n = 'equipmentModernized';
            },
            4888: (e, u, t) => {
                t.d(u, { FR: () => a, Fd: () => s, Xo: () => i, _2: () => l, dZ: () => r, eC: () => n, sH: () => o });
                const n = 'select',
                    a = 'undo',
                    i = 'swap',
                    r = 'demount',
                    s = 'demount_from_setup',
                    o = 'demount_from_setups',
                    l = 'destroy';
            },
            7383: (e, u, t) => {
                t.d(u, { WI: () => r, YN: () => i, g9: () => a, yZ: () => s, zn: () => n });
                const n = 'optDevices',
                    a = 'shells',
                    i = 'battleAbilities',
                    r = 'toggleShells',
                    s = 'toggleCamouflage';
            },
            6880: (e, u, t) => {
                t.d(u, { Z: () => n });
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
            7476: () => {},
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
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var a = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], i = !0, r = 0; r < u.length; r++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[r]))
                            ? u.splice(r--, 1)
                            : ((i = !1), n < a && (a = n));
                    if (i) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, n];
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
        (__webpack_require__.j = 736),
        (() => {
            var e = { 736: 0, 927: 0, 490: 0, 754: 0, 803: 0, 761: 0, 833: 0, 795: 0, 723: 0, 287: 0, 975: 0, 197: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [i, r, s] = t,
                        o = 0;
                    if (i.some((u) => 0 !== e[u])) {
                        for (n in r) __webpack_require__.o(r, n) && (__webpack_require__.m[n] = r[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); o < i.length; o++)
                        ((a = i[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(3780));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
