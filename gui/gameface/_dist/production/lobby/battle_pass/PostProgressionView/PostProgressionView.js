(() => {
    var __webpack_modules__ = {
            2372: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => s });
                var a = t(7363),
                    r = t.n(a),
                    n = t(9916);
                class s extends r().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = n.B3.GOLD;
                        else e = n.B3.INTEGRAL;
                        const u = n.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                s.defaultProps = { format: 'integral' };
            },
            280: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => l });
                var a = t(6483),
                    r = t.n(a),
                    n = t(3649),
                    s = t(7363),
                    i = t.n(s),
                    o = t(5287);
                const l = ({
                    binding: e,
                    text: u = '',
                    classMix: t,
                    alignment: a = n.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                    const c = l && e ? (0, n.WU)(u, e) : u;
                    return i().createElement(
                        s.Fragment,
                        null,
                        c.split('\n').map((u, l) =>
                            i().createElement(
                                'div',
                                { className: r()(o.Z.base, t), key: `${u}-${l}` },
                                (0, n.Uw)(u, a, e).map((e, u) =>
                                    i().createElement(s.Fragment, { key: `${u}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            9766: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => a.z });
                var a = t(280);
                t(8082);
            },
            8082: (e, u, t) => {
                'use strict';
                t(3649);
            },
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => d });
                var a = t(3138),
                    r = t(7363),
                    n = t(1043),
                    s = t(5262);
                const i = a.O.client.getSize('rem'),
                    o = i.width,
                    l = i.height,
                    c = Object.assign({ width: o, height: l }, (0, s.T)(o, l, n.j)),
                    d = (0, r.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => c });
                var a = t(3138),
                    r = t(6536),
                    n = t(7363),
                    s = t.n(n),
                    i = t(3495),
                    o = t(1043),
                    l = t(5262);
                const c = ({ children: e }) => {
                    const u = (0, n.useContext)(i.Y),
                        t = (0, n.useState)(u),
                        c = t[0],
                        d = t[1],
                        _ = (0, n.useCallback)((e, u) => {
                            const t = a.O.view.pxToRem(e),
                                r = a.O.view.pxToRem(u);
                            d(Object.assign({ width: t, height: r }, (0, l.T)(t, r, o.j)));
                        }, []),
                        E = (0, n.useCallback)(() => {
                            const e = a.O.client.getSize('px');
                            _(e.width, e.height);
                        }, [_]);
                    ((0, r.Z)(() => {
                        (a.O.client.events.on('clientResized', _), a.O.client.events.on('self.onScaleUpdated', E));
                    }),
                        (0, n.useEffect)(
                            () => () => {
                                (a.O.client.events.off('clientResized', _),
                                    a.O.client.events.off('self.onScaleUpdated', E));
                            },
                            [_, E],
                        ));
                    const m = (0, n.useMemo)(() => Object.assign({}, c), [c]);
                    return s().createElement(i.Y.Provider, { value: m }, e);
                };
            },
            6010: (e, u, t) => {
                'use strict';
                var a = t(7363),
                    r = t(7382),
                    n = t(3495);
                const s = ['children'];
                const i = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, s);
                    const i = (0, a.useContext)(n.Y),
                        o = i.extraLarge,
                        l = i.large,
                        c = i.medium,
                        d = i.small,
                        _ = i.extraSmall,
                        E = i.extraLargeWidth,
                        m = i.largeWidth,
                        A = i.mediumWidth,
                        F = i.smallWidth,
                        D = i.extraSmallWidth,
                        g = i.extraLargeHeight,
                        C = i.largeHeight,
                        p = i.mediumHeight,
                        B = i.smallHeight,
                        b = i.extraSmallHeight,
                        h = { extraLarge: g, large: C, medium: p, small: B, extraSmall: b };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && d) return u;
                        if (t.extraSmall && _) return u;
                    } else {
                        if (t.extraLargeWidth && E) return (0, r.H)(u, t, h);
                        if (t.largeWidth && m) return (0, r.H)(u, t, h);
                        if (t.mediumWidth && A) return (0, r.H)(u, t, h);
                        if (t.smallWidth && F) return (0, r.H)(u, t, h);
                        if (t.extraSmallWidth && D) return (0, r.H)(u, t, h);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && g) return u;
                            if (t.largeHeight && C) return u;
                            if (t.mediumHeight && p) return u;
                            if (t.smallHeight && B) return u;
                            if (t.extraSmallHeight && b) return u;
                        }
                    }
                    return null;
                };
                i.defaultProps = {
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
                (0, a.memo)(i);
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
                t.d(u, { i: () => l });
                var a = t(2056),
                    r = t(7363),
                    n = t.n(r);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            _ = e.args,
                            E = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, s);
                        const m = (0, r.useMemo)(() => {
                            const e = Object.assign({}, _, { body: t, header: l, note: c, alert: d });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [d, t, l, c, _]);
                        return n().createElement(
                            a.u,
                            i(
                                {
                                    contentId:
                                        ((A = null == _ ? void 0 : _.hasHtmlContent),
                                        A ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: m,
                                },
                                E,
                            ),
                            u,
                        );
                        var A;
                    };
            },
            2056: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => l });
                var a = t(7902),
                    r = t(9916),
                    n = t(7363);
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
                function i(e) {
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
                const o = (e, u, t = {}, a = 0) => {
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
                    l = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            _ = e.onClick,
                            E = e.ignoreShowDelay,
                            m = void 0 !== E && E,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            D = e.decoratorId,
                            g = void 0 === D ? 0 : D,
                            C = e.isEnabled,
                            p = void 0 === C || C,
                            B = e.targetId,
                            b = void 0 === B ? 0 : B,
                            h = e.onShow,
                            v = e.onHide,
                            f = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, s);
                        const w = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, n.useMemo)(() => b || (0, a.F)().resId, [b]),
                            y = (0, n.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (o(t, g, { isMouseEvent: !0, on: !0, arguments: i(r) }, S),
                                    h && h(),
                                    (w.current.isVisible = !0));
                            }, [t, g, r, S, h]),
                            P = (0, n.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        o(t, g, { on: !1 }, S),
                                        w.current.isVisible && v && v(),
                                        (w.current.isVisible = !1));
                                }
                            }, [t, g, S, v]),
                            R = (0, n.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && P();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', R, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', R, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === p && P();
                            }, [p, P]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', P),
                                    () => {
                                        (window.removeEventListener('mouseleave', P), P());
                                    }
                                ),
                                [P],
                            ));
                        return p
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(y, m ? 100 : 400)),
                                                      l && l(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (P(), null == c || c(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === F && P(), null == _ || _(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === F && P(), null == d || d(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : u;
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
            8246: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => i });
                var a = t(3138);
                function r(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return n(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return n(e, u);
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
                function n(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function i({ initializer: e = !0, rootId: u = 0, getRoot: t = s, context: n = 'model' } = {}) {
                    const i = new Map();
                    function o(e, u = 0) {
                        viewEnv.removeDataChangedCallback(e, u)
                            ? i.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                            t.forEach((u) => {
                                const t = i.get(u);
                                void 0 !== t && t(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const a = t(u),
                            r = n.split('.').reduce((e, u) => e[u], a);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, r);
                    };
                    return {
                        subscribe: (t, r) => {
                            const s = 'string' == typeof r ? `${n}.${r}` : n,
                                o = a.O.view.addModelObserver(s, u, !0);
                            return (i.set(o, t), e && t(l(r)), o);
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
                            for (var e, t = r(i.keys()); !(e = t()).done; ) {
                                o(e.value, u);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, u, t) => {
                'use strict';
                t.d(u, { q3: () => o });
                var a = t(4598),
                    r = t(9174),
                    n = t(7363),
                    s = t.n(n),
                    i = t(8246);
                const o = () => (e, u) => {
                    const t = (0, n.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: d }) {
                            const _ = (0, n.useRef)([]),
                                E = (t, n, s) => {
                                    var o;
                                    const l = i.U(n),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == s ? void 0 : s.getter) ? o : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === t ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        E = (e) => _.current.push(e),
                                        m = e({
                                            mode: t,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const n = null != u ? u : d(e),
                                                        s = r.LO.box(n, { equals: a.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const n = null != u ? u : d(e),
                                                        s = r.LO.box(n, { equals: a.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const a = d(u);
                                                    if (Array.isArray(e)) {
                                                        const n = e.reduce(
                                                            (e, u) => ((e[u] = r.LO.box(a[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((u) => {
                                                                        e.forEach((e) => {
                                                                            n[e].set(u[e]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    }
                                                    {
                                                        const n = e,
                                                            s = Object.entries(n),
                                                            i = s.reduce(
                                                                (e, [u, t]) => ((e[t] = r.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        s.forEach(([u, t]) => {
                                                                            i[t].set(e[u]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: E,
                                        }),
                                        A = { mode: t, model: m, externalModel: c, cleanup: E };
                                    return {
                                        model: m,
                                        controls: 'mocks' === t && s ? s.controls(A) : u(A),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                m = (0, n.useRef)(!1),
                                A = (0, n.useState)(o),
                                F = A[0],
                                D = A[1],
                                g = (0, n.useState)(() => E(o, l, d)),
                                C = g[0],
                                p = g[1];
                            return (
                                (0, n.useEffect)(() => {
                                    m.current ? p(E(F, l, d)) : (m.current = !0);
                                }, [d, F, l]),
                                (0, n.useEffect)(() => {
                                    D(o);
                                }, [o]),
                                (0, n.useEffect)(
                                    () => () => {
                                        (C.externalModel.dispose(), _.current.forEach((e) => e()));
                                    },
                                    [C],
                                ),
                                s().createElement(t.Provider, { value: C }, c)
                            );
                        },
                        () => (0, n.useContext)(t),
                    ];
                };
            },
            527: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, { mouse: () => c, off: () => o, on: () => i, onResize: () => n, onScaleUpdated: () => s }));
                var a = t(2472),
                    r = t(1176);
                const n = (0, a.E)('clientResized'),
                    s = (0, a.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const c = (function () {
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
                                        s = l[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, i),
                                        a(),
                                        () => {
                                            r &&
                                                (s(),
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
                        getMouseGlobalPosition: () => s,
                        getSize: () => n,
                        graphicsQuality: () => i,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var a = t(527),
                    r = t(2493);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
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
            2493: (e, u, t) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function r(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => r, G: () => a });
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
                t.d(u, { O: () => n });
                var a = t(5959),
                    r = t(514);
                const n = { view: t(7641), client: a, sound: r.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => i, hY: () => s });
                var a = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    n = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, a.playSound)(r[u])), e), {}),
                    s = Object.assign({}, n, { sound: a.playSound }),
                    i = { play: s, setRTPC: a.setRTPC };
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
                        addModelObserver: () => d,
                        addPreloadTexture: () => o,
                        arabic2roman: () => S,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => y,
                        events: () => s.U,
                        extraSize: () => P,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => f,
                        getFontNames: () => w,
                        getScale: () => D,
                        getSize: () => E,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => h,
                        isFocused: () => B,
                        pxToRem: () => g,
                        remToPx: () => C,
                        resize: () => m,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => R,
                    }));
                var a = t(9690),
                    r = t(3722),
                    n = t(6112),
                    s = t(6538),
                    i = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function d(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: C(u.x), y: C(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function g(e) {
                    return viewEnv.pxToRem(e);
                }
                function C(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function B() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    S = a.cg,
                    y = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
                        {},
                    ),
                    P = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    R = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const a = ['args'];
                const r = 2,
                    n = 16,
                    s = 32,
                    i = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                s = (function (e, u) {
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
                                      Object.assign({ __Type: t, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? r : s);
                        },
                        minimize() {
                            o(i);
                        },
                        move(e) {
                            o(n, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                'use strict';
                t.d(u, { jv: () => a });
                function a() {
                    return !1;
                }
                console.log;
            },
            7902: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => a });
                const a = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        a = R.invalid('resId'),
                        r = '';
                    var n;
                    u &&
                        ((r = (null == (n = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : n[0]) || ''),
                        (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== t &&
                            window.subViews[t] &&
                            (a = window.subViews[t].id));
                    return { callerUrl: r, caller: t, stack: u, resId: a };
                };
            },
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var a = t(7363);
                const r = (e) => {
                    const u = (0, a.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            3815: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => n });
                var a = t(7363);
                const r = [];
                function n(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), r)
                    );
                }
            },
            5415: (e, u, t) => {
                'use strict';
                t.d(u, { Aq: () => o, GS: () => l, cJ: () => s, fd: () => i });
                var a = t(7363),
                    r = t(7739),
                    n = t(1043);
                let s, i, o;
                (!(function (e) {
                    ((e[(e.ExtraSmall = n.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = n.j.small.width)] = 'Small'),
                        (e[(e.Medium = n.j.medium.width)] = 'Medium'),
                        (e[(e.Large = n.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = n.j.extraLarge.width)] = 'ExtraLarge'));
                })(s || (s = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = n.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = n.j.small.width)] = 'Small'),
                            (e[(e.Medium = n.j.medium.width)] = 'Medium'),
                            (e[(e.Large = n.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = n.j.extraLarge.width)] = 'ExtraLarge'));
                    })(i || (i = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = n.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = n.j.small.height)] = 'Small'),
                            (e[(e.Medium = n.j.medium.height)] = 'Medium'),
                            (e[(e.Large = n.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = n.j.extraLarge.height)] = 'ExtraLarge'));
                    })(o || (o = {})));
                const l = () => {
                    const e = (0, a.useContext)(r.YN),
                        u = e.width,
                        t = e.height,
                        n = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return s.ExtraLarge;
                                case e.large:
                                    return s.Large;
                                case e.medium:
                                    return s.Medium;
                                case e.small:
                                    return s.Small;
                                case e.extraSmall:
                                    return s.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), s.ExtraSmall);
                            }
                        })(e),
                        l = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return i.ExtraLarge;
                                case e.largeWidth:
                                    return i.Large;
                                case e.mediumWidth:
                                    return i.Medium;
                                case e.smallWidth:
                                    return i.Small;
                                case e.extraSmallWidth:
                                    return i.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), i.ExtraSmall);
                            }
                        })(e),
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return o.ExtraLarge;
                                case e.largeHeight:
                                    return o.Large;
                                case e.mediumHeight:
                                    return o.Medium;
                                case e.smallHeight:
                                    return o.Small;
                                case e.extraSmallHeight:
                                    return o.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), o.ExtraSmall);
                            }
                        })(e);
                    return { mediaSize: n, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9'));
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
            9480: (e, u, t) => {
                'use strict';
                function a(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                t.d(u, { G: () => s, MH: () => r, UI: () => n, hX: () => i, u4: () => o });
                const r = a;
                function n(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                function s(e, u) {
                    if (Array.isArray(e)) return e.some(u);
                    for (let t = 0; t < e.length; t++) {
                        if (u(r(e, t), t, e)) return !0;
                    }
                    return !1;
                }
                function i(e, u) {
                    if (Array.isArray(e)) return e.filter(u);
                    const t = [];
                    for (let r = 0; r < e.length; r++) {
                        var a;
                        const n = null == (a = e[r]) ? void 0 : a.value;
                        u(n, r, e) && t.push(n);
                    }
                    return t;
                }
                function o(e, u, t) {
                    if (Array.isArray(e)) return e.reduce(u, t);
                    let a = t;
                    for (let t = 0; t < e.length; t++) {
                        a = u(a, r(e, t), t, e);
                    }
                    return a;
                }
            },
            9690: (e, u, t) => {
                'use strict';
                t.d(u, { cg: () => n });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function n(e) {
                    let u = '';
                    for (let t = r.length - 1; t >= 0; t--) for (; e >= r[t]; ) ((u += a[t]), (e -= r[t]));
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            7727: (e, u, t) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
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
                t.d(u, { Uw: () => E, WU: () => n, v2: () => r });
                var a = t(1281);
                let r;
                function n(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(r || (r = {}));
                const s = (e) => e.replace(/&nbsp;/g, ' '),
                    i = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    o = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    l = (e, u, t = r.left) => e.split(u).reduce(t === r.left ? i : o, []),
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    d = ['zh_cn', 'zh_sg', 'zh_tw'],
                    _ = (e, u = r.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (d.includes(t)) return c(e);
                        if ('ja' === t) {
                            return (0, a.D4)()
                                .parse(e)
                                .map((e) => s(e));
                        }
                        return ((e, u = r.left) => {
                            let t = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = s(e);
                            return (l(n, /( )/, u).forEach((e) => (t = t.concat(l(e, a, r.left)))), t);
                        })(e, u);
                    },
                    E = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : _(e, u)));
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
                'use strict';
                t.d(u, { B3: () => o, Z5: () => s.Z5, B0: () => i, ry: () => D });
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
                var s = t(8613);
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
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    E = t(3138);
                const m = ['args'];
                function A(e, u, t, a, r, n, s) {
                    try {
                        var i = e[n](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(a, r);
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
                                    return new Promise(function (a, r) {
                                        var n = e.apply(u, t);
                                        function s(e) {
                                            A(n, a, r, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(n, a, r, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    g = (e, u) => {
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
                                })(u, m);
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
                    C = () => g(i.CLOSE),
                    p = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var B = t(7572);
                const b = r.instance,
                    h = {
                        DataTracker: n.Z,
                        ViewModel: B.Z,
                        ViewEventType: i,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => g(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => g(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, r = R.invalid('resId'), n) => {
                            const s = E.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                _ = o.height,
                                m = {
                                    x: E.O.view.pxToRem(l) + s.x,
                                    y: E.O.view.pxToRem(c) + s.y,
                                    width: E.O.view.pxToRem(d),
                                    height: E.O.view.pxToRem(_),
                                };
                            g(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: F(m),
                                on: !0,
                                args: n,
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
                            p(e, C);
                        },
                        handleViewEvent: g,
                        onBindingsReady: D,
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
                        ClickOutsideManager: b,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = h;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => n, Z5: () => a, cy: () => r });
                const a = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    n = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            9521: (e, u, t) => {
                'use strict';
                var a = t(7739),
                    r = t(7363),
                    n = t.n(r),
                    s = t(6483),
                    i = t.n(s),
                    o = t(926),
                    l = t.n(o),
                    c = t(5415);
                const d = ['children', 'className'];
                function _() {
                    return (
                        (_ =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        _.apply(this, arguments)
                    );
                }
                const E = {
                        [c.fd.ExtraSmall]: '',
                        [c.fd.Small]: l().SMALL_WIDTH,
                        [c.fd.Medium]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH}`,
                        [c.fd.Large]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH}`,
                        [c.fd.ExtraLarge]:
                            `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH} ${l().EXTRA_LARGE_WIDTH}`,
                    },
                    m = {
                        [c.Aq.ExtraSmall]: '',
                        [c.Aq.Small]: l().SMALL_HEIGHT,
                        [c.Aq.Medium]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT}`,
                        [c.Aq.Large]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT}`,
                        [c.Aq.ExtraLarge]:
                            `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT} ${l().EXTRA_LARGE_HEIGHT}`,
                    },
                    A = {
                        [c.cJ.ExtraSmall]: '',
                        [c.cJ.Small]: l().SMALL,
                        [c.cJ.Medium]: `${l().SMALL} ${l().MEDIUM}`,
                        [c.cJ.Large]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE}`,
                        [c.cJ.ExtraLarge]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE} ${l().EXTRA_LARGE}`,
                    },
                    F = (e) => {
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
                            })(e, d);
                        const r = (0, c.GS)(),
                            s = r.mediaWidth,
                            o = r.mediaHeight,
                            l = r.mediaSize;
                        return n().createElement('div', _({ className: i()(t, E[s], m[o], A[l]) }, a), u);
                    },
                    D = ['children'];
                const g = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, D);
                    return n().createElement(a.ZN, null, n().createElement(F, t, u));
                };
                var C = t(1533),
                    p = t.n(C);
                const B = (e, u) => {
                    let t;
                    const a = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        ('function' == typeof t && t(), clearTimeout(a));
                    };
                };
                var b = t(3138),
                    h = t(5521);
                t(9916);
                const v = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function f(e = h.n.NONE, u = v, t = !1, a = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== h.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!a && b.O.view.isEventHandled()) return;
                                (b.O.view.setEventHandled(), u(r), t && r.stopPropagation());
                            }
                        }
                    }, [u, e, t, a]);
                }
                var w = t(3403);
                let S, y, P, T;
                (!(function (e) {
                    ((e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium'));
                })(S || (S = {})),
                    (function (e) {
                        ((e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen'));
                    })(y || (y = {})),
                    (function (e) {
                        ((e.AwaitSeason = 'awaitSeason'),
                            (e.Bought = 'bought'),
                            (e.Free = 'free'),
                            (e.Completed = 'completed'),
                            (e.CompletedRightNow = 'completedRightNow'),
                            (e.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                            (e.NoVehiclesBase = 'noVehiclesBase'),
                            (e.ChapterNotChosen = 'chapterNotChosen'));
                    })(P || (P = {})),
                    (function (e) {
                        ((e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay'));
                    })(T || (T = {})));
                const k = (e, u, t = '') => {
                        const a = t.length > 0 ? `_${t}` : t,
                            r = e.$dyn(`c_${u}${a}`),
                            n = String(u).slice(-1),
                            s = e.$dyn(`default_${n}${a}`);
                        return r || s;
                    },
                    N = (e, u, t = '') => ({ backgroundImage: `url(${k(u, e, t)})` });
                var x = t(2432);
                const O = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
                let L, I;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                })(L || (L = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(I || (I = {})));
                const M = ({ size: e = L.Default }) => {
                    const u = i()(O.background, O[`background__${e}`]);
                    return n().createElement('div', { className: u });
                };
                let H, G;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(H || (H = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(G || (G = {})));
                const U = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    $ = ({ size: e }) => {
                        const u = i()(U.base, U[`base__${e}`]);
                        return n().createElement('div', { className: u });
                    },
                    z = 'ProgressBarDeltaSimple_base_6c',
                    W = 'ProgressBarDeltaSimple_delta_99',
                    j = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: s,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < a,
                                d = (0, r.useState)(G.Idle),
                                _ = d[0],
                                E = d[1],
                                m = _ === G.In,
                                A = _ === G.End,
                                F = _ === G.Idle,
                                D = (0, r.useCallback)(
                                    (e) => {
                                        (E(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, r.useEffect)(() => {
                                if (F && !t) {
                                    return B(() => {
                                        D(G.In);
                                    }, u);
                                }
                            }, [D, t, F, u]),
                                (0, r.useEffect)(() => {
                                    if (m) {
                                        return B(() => {
                                            (o && o(), D(G.End));
                                        }, e + u);
                                    }
                                }, [D, m, o, u, e]));
                            const g = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                C = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                p = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(a - i)}%`, left: `${c ? i : a}%` }),
                                    [a, c, i],
                                );
                            return A
                                ? null
                                : n().createElement(
                                      'div',
                                      { className: z, style: p },
                                      n().createElement(
                                          'div',
                                          { style: F ? g : C, className: W },
                                          n().createElement($, { size: s }),
                                      ),
                                  );
                        },
                    ),
                    V = {
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
                    q = (0, r.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: a, isComplete: r, withoutBounce: s }) => {
                            const o = i()(
                                    V.base,
                                    V[`base__${e}`],
                                    t && V.base__disabled,
                                    r && V.base__finished,
                                    s && V.base__withoutBounce,
                                ),
                                l = !t && !r;
                            return n().createElement(
                                'div',
                                { className: o, style: a, ref: u },
                                n().createElement('div', { className: V.pattern }),
                                n().createElement('div', { className: V.gradient }),
                                l && n().createElement($, { size: e }),
                            );
                        },
                    ),
                    Y = (0, r.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: s,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const d = (0, r.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return n().createElement(
                                n().Fragment,
                                null,
                                n().createElement(q, {
                                    size: u,
                                    lineRef: a,
                                    disabled: s,
                                    isComplete: i,
                                    baseStyles: d,
                                }),
                                t >= 0 &&
                                    n().createElement(j, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    X = 'ProgressBarDeltaGrow_base_7e',
                    Z = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    K = 'ProgressBarDeltaGrow_glow_68',
                    Q = (e) => (e ? { left: 0 } : { right: 0 }),
                    J = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    ee = (e) => ({ transitionDuration: `${e}ms` }),
                    ue = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: s,
                            to: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                            className: d,
                        }) => {
                            const _ = o < a,
                                E = (0, r.useState)(H.Idle),
                                m = E[0],
                                A = E[1],
                                F = m === H.End,
                                D = m === H.Idle,
                                g = m === H.Grow,
                                C = m === H.Shrink,
                                p = (0, r.useCallback)(
                                    (e) => {
                                        (A(e), c && c(e));
                                    },
                                    [c],
                                ),
                                b = (0, r.useCallback)(
                                    (e, u) =>
                                        B(() => {
                                            p(e);
                                        }, u),
                                    [p],
                                );
                            (0, r.useEffect)(() => {
                                if (!t)
                                    return D
                                        ? b(H.Grow, u)
                                        : g
                                          ? b(H.Shrink, e)
                                          : C
                                            ? b(H.End, e)
                                            : void (F && l && l());
                            }, [b, t, F, g, D, C, l, u, e]);
                            const h = (0, r.useMemo)(() => Object.assign({ width: '100%' }, ee(e), Q(_)), [_, e]),
                                v = (0, r.useMemo)(() => Object.assign({ width: '0%' }, ee(e), Q(_)), [_, e]),
                                f = (0, r.useMemo)(() => Object.assign({ width: '0%' }, J(_, a), ee(e)), [a, _, e]),
                                w = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - a)}%` }, J(_, a), ee(e)),
                                    [a, _, o, e],
                                );
                            if (F) return null;
                            const S = i()(X, d, _ && 0 === o && Z);
                            return n().createElement(
                                'div',
                                { style: D ? f : w, className: S },
                                n().createElement(
                                    'div',
                                    { style: C ? v : h, className: K },
                                    n().createElement($, { size: s }),
                                ),
                            );
                        },
                    ),
                    te = (0, r.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: s,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = e < t,
                                _ = (0, r.useState)(!1),
                                E = _[0],
                                m = _[1],
                                A = (0, r.useCallback)(
                                    (e) => {
                                        (e === H.Shrink && m(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                F = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                D = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return n().createElement(
                                n().Fragment,
                                null,
                                n().createElement(q, {
                                    size: u,
                                    lineRef: a,
                                    disabled: s,
                                    isComplete: i,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: E ? D : F,
                                }),
                                t >= 0 &&
                                    n().createElement(ue, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: A,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    ae = ['onComplete', 'onEndAnimation'];
                function re() {
                    return (
                        (re =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        re.apply(this, arguments)
                    );
                }
                const ne = (0, r.memo)((e) => {
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
                            })(e, ae);
                        const s = (0, r.useState)(!1),
                            i = s[0],
                            o = s[1],
                            l = (0, r.useCallback)(() => {
                                const e = 100 === a.to;
                                (e !== i && o(e), e && u && u(), t && t());
                            }, [i, u, t, a.to]);
                        switch (a.animationSettings.type) {
                            case I.Simple:
                                return n().createElement(Y, re({}, a, { onEndAnimation: l, isComplete: i }));
                            case I.Growing:
                                return n().createElement(te, re({}, a, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    se = ({ size: e, value: u, lineRef: t, disabled: a, onComplete: s }) => {
                        const i = (0, r.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            o = 100 === u;
                        return (
                            (0, r.useEffect)(() => {
                                o && s && s();
                            }, [o, s]),
                            n().createElement(q, { size: e, disabled: a, baseStyles: i, isComplete: o, lineRef: t })
                        );
                    },
                    ie = ['onEndAnimation'];
                function oe() {
                    return (
                        (oe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        oe.apply(this, arguments)
                    );
                }
                const le = (0, r.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, ie);
                    const a = (0, r.useRef)({}),
                        s = (0, r.useCallback)(() => {
                            ((a.current.from = void 0), u && u());
                        }, [u]),
                        i = 'number' == typeof a.current.from ? a.current.from : t.from;
                    return (
                        (a.current.from = i),
                        n().createElement(
                            ne,
                            oe({}, t, {
                                onEndAnimation: s,
                                key: `${i}-${t.to}-${null == t ? void 0 : t.additionalKey}`,
                                from: i,
                            }),
                        )
                    );
                });
                function ce() {
                    return (
                        (ce =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ce.apply(this, arguments)
                    );
                }
                const de = (0, r.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: a,
                            deltaFrom: r,
                            additionalKey: s,
                            animationSettings: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (r === u)
                                return n().createElement(se, {
                                    key: `${r}-${u}-${s}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: a,
                                    onComplete: c,
                                });
                            const d = {
                                from: r,
                                to: u,
                                size: e,
                                additionalKey: s,
                                lineRef: t,
                                disabled: a,
                                animationSettings: i,
                                onComplete: c,
                                onEndAnimation: o,
                                onChangeAnimationState: l,
                            };
                            return i.withStack
                                ? n().createElement(le, d)
                                : n().createElement(ne, ce({ key: `${r}-${u}-${s}` }, d));
                        },
                    ),
                    _e = (e) => ({
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
                    Ee = {
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
                    me = (e, u, t) => (t < e ? e : t > u ? u : t),
                    Ae = (e, u, t) => {
                        if ('number' == typeof t) {
                            return (me(0, u, t) / u) * 100;
                        }
                        return e;
                    },
                    Fe = Ee,
                    De = {
                        freezed: !1,
                        withStack: !1,
                        type: I.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    ge = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = Fe,
                            size: t = L.Default,
                            animationSettings: a = De,
                            disabled: s = !1,
                            withoutBackground: o = !1,
                            value: l,
                            deltaFrom: c,
                            additionalKey: d,
                            lineRef: _,
                            onChangeAnimationState: E,
                            onEndAnimation: m,
                            onComplete: A,
                        }) => {
                            const F = ((e, u, t) =>
                                (0, r.useMemo)(() => {
                                    const a = (me(0, u, e) / u) * 100;
                                    return { value: a, deltaFrom: Ae(a, u, t) };
                                }, [t, u, e]))(l, e, c);
                            return n().createElement(
                                'div',
                                { className: i()(O.base, O[`base__${t}`]), style: _e(u) },
                                !o && n().createElement(M, { size: t }),
                                n().createElement(de, {
                                    size: t,
                                    lineRef: _,
                                    disabled: s,
                                    value: F.value,
                                    deltaFrom: F.deltaFrom,
                                    additionalKey: d,
                                    animationSettings: a,
                                    onEndAnimation: m,
                                    onChangeAnimationState: E,
                                    onComplete: A,
                                }),
                            );
                        },
                    ),
                    Ce = 1e3,
                    pe = Object.assign({}, De, {
                        withStack: !0,
                        type: I.Simple,
                        delta: { duration: 500, delay: 300 },
                        line: { duration: 500, delay: 300 },
                    }),
                    Be = Object.assign({}, Ee, {
                        line: Object.assign({}, Ee.line, { bgColorFinished: '#000000' }),
                        pattern: Object.assign({}, Ee.pattern, { bgImageFinished: Ee.bgImageBase }),
                    });
                let be;
                !(function (e) {
                    ((e.FillProgressMax = 'fillProgressMax'),
                        (e.RunCycle = 'runCycle'),
                        (e.ResetProgress = 'resetProgress'),
                        (e.RefillProgress = 'refillProgress'),
                        (e.Idle = 'idle'));
                })(be || (be = {}));
                const he = {
                    [be.FillProgressMax]: { nextStep: be.RunCycle, delay: Ce },
                    [be.RunCycle]: { nextStep: be.ResetProgress, delay: 2200 },
                    [be.ResetProgress]: { nextStep: be.RefillProgress, delay: Ce },
                    [be.RefillProgress]: { nextStep: be.Idle, delay: Ce },
                };
                let ve, fe, we, Se, ye, Pe;
                (!(function (e) {
                    ((e.COMPLETED = 'completed'), (e.IN_PROGRESS = 'inProgress'), (e.NOT_STARTED = 'notStarted'));
                })(ve || (ve = {})),
                    (function (e) {
                        ((e.NotAvailable = 'notAvailable'),
                            (e.PurchasingIP = 'purchasingIP'),
                            (e.ExtraChapter = 'extraChapter'));
                    })(fe || (fe = {})),
                    (function (e) {
                        ((e.left = 'left'), (e.right = 'right'));
                    })(we || (we = {})),
                    (function (e) {
                        ((e.default = 'default'), (e.small = 'small'));
                    })(Se || (Se = {})),
                    (function (e) {
                        ((e[(e.Active = 0)] = 'Active'),
                            (e[(e.Paused = 1)] = 'Paused'),
                            (e[(e.Completed = 2)] = 'Completed'),
                            (e[(e.NotStarted = 3)] = 'NotStarted'));
                    })(ye || (ye = {})),
                    (function (e) {
                        ((e[(e.Locked = 0)] = 'Locked'),
                            (e[(e.Unlocked = 1)] = 'Unlocked'),
                            (e[(e.Paused = 2)] = 'Paused'));
                    })(Pe || (Pe = {})));
                var Re = t(3215),
                    Te = t(4598),
                    ke = t(9480),
                    Ne = t(9174),
                    xe = t(3946);
                const Oe = {
                        '--small-card-width': '140rem',
                        '--small-current-card-width': '224rem',
                        '--medium-card-width': '220rem',
                        '--medium-current-card-width': '340rem',
                        '--extra-large-card-width': '276rem',
                    },
                    Le = (e, u = !1) =>
                        u ? (e < c.cJ.Medium ? 224 : 340) : e < c.cJ.Medium ? 140 : e < c.cJ.ExtraLarge ? 220 : 276,
                    Ie = (0, Re.q3)()(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    levels: e.array('levels'),
                                    chapters: e.array('chapters'),
                                    animationStep: Ne.LO.box(be.Idle),
                                },
                                t = (0, xe.Om)((e) => {
                                    const t = u.levels.get(),
                                        a = ke.MH(t, e - 1);
                                    a || console.warn(`level info not found for number: ${e}`);
                                    const r = t.length;
                                    return Object.assign({}, a, {
                                        maxLevel: r,
                                        isFirstLevel: 1 === e,
                                        isLastLevel: e === r,
                                    });
                                }),
                                a = (0, xe.Om)((e) => {
                                    const u = t(e);
                                    return ke.UI(u.rewards, (e) => Object.assign({}, e));
                                }),
                                r = (0, xe.Om)((e) => {
                                    const a = u.root.get(),
                                        r = a.currentLevel,
                                        n = a.currentLevelPoints,
                                        s = a.previousLevel,
                                        i = a.postProgressionStatus,
                                        o = u.animationStep.get();
                                    if ([be.FillProgressMax, be.RunCycle].includes(o))
                                        return e === s ? ve.IN_PROGRESS : ve.COMPLETED;
                                    const l = t(e),
                                        c = l.levelPoints,
                                        d = l.maxLevel;
                                    return e < r || (r === d && n === c * d)
                                        ? ve.COMPLETED
                                        : e === r && (i !== Pe.Locked || n > 0)
                                          ? ve.IN_PROGRESS
                                          : ve.NOT_STARTED;
                                }),
                                n = (0, xe.Om)((e) => {
                                    const t = u.root.get().postProgressionStatus,
                                        a = r(e);
                                    return { cardStatus: a, isDisabled: t !== Pe.Unlocked && a === ve.NOT_STARTED };
                                }),
                                s = (0, xe.Om)(
                                    () =>
                                        l()
                                            ? d().length && _()
                                                ? fe.ExtraChapter
                                                : c()
                                                  ? fe.PurchasingIP
                                                  : void 0
                                            : fe.NotAvailable,
                                    { equals: Te.jv },
                                ),
                                i = (0, xe.Om)(() => ke.hX(u.chapters.get(), (e) => e.isRegular), { equals: Te.jv }),
                                o = (0, xe.Om)(
                                    () =>
                                        ke.hX(u.chapters.get(), (e) => e.isRegular && e.chapterStatus === ye.Completed)
                                            .length,
                                    { equals: Te.jv },
                                ),
                                l = (0, xe.Om)(() => o() === i().length),
                                c = (0, xe.Om)(() => ke.G(u.chapters.get(), (e) => !e.isBattlePassPurchased)),
                                d = (0, xe.Om)(() => ke.hX(u.chapters.get(), (e) => !e.isRegular)),
                                _ = (0, xe.Om)(() =>
                                    ke.G(d(), (e) => e.chapterStatus !== ye.Active && e.chapterStatus !== ye.Completed),
                                ),
                                E = (0, xe.Om)(() => {
                                    const e = u.root.get(),
                                        t = e.currentLevel,
                                        a = e.currentLevelPoints,
                                        r = t - 1;
                                    return ke.u4(
                                        u.levels.get(),
                                        (e, { levelPoints: u }, t) => (t < r ? e + u : t === r ? e + a : e),
                                        0,
                                    );
                                }),
                                m = (0, xe.Om)(() => ke.u4(u.levels.get(), (e, { levelPoints: u }) => e + u, 0)),
                                A = (0, xe.Om)(() => {
                                    const e = u.root.get(),
                                        t = e.currentLevel,
                                        a = e.currentLevelPoints,
                                        r = e.previousLevel,
                                        n = e.previousLevelPoints;
                                    return t !== r || a !== n;
                                }),
                                F = (0, xe.Om)(() => {
                                    const e = u.root.get();
                                    return e.cyclesCompletedCount > e.previousCyclesCompletedCount;
                                }),
                                D = (0, xe.Om)((e) => {
                                    const a = u.root.get(),
                                        r = a.currentLevel,
                                        n = a.currentLevelPoints,
                                        s = a.previousLevel,
                                        i = a.previousLevelPoints,
                                        o = a.postProgressionStatus,
                                        l = u.animationStep.get(),
                                        c = t(r),
                                        d = c.levelPoints,
                                        _ = c.maxLevel,
                                        E = t(s).levelPoints,
                                        m = F(),
                                        A = ((e, u) => {
                                            const t = Le(e),
                                                a = Le(e, u);
                                            return [t, u ? a : t];
                                        })(e, o !== Pe.Locked),
                                        D = A[0],
                                        g = A[1],
                                        C = D * (_ - 1) + g,
                                        p = (
                                            (e, u) =>
                                            (t, a, r, n = !1) =>
                                                e * (t - 1) + ((n ? e : u) / r) * a
                                        )(D, g),
                                        B = !m && s < r;
                                    return {
                                        progressValue: [be.FillProgressMax, be.RunCycle].includes(l) ? C : p(r, n, d),
                                        previousProgressValue: l === be.ResetProgress ? 0 : p(s, i, E, B),
                                        maxProgressValue: C,
                                    };
                                });
                            return Object.assign({}, u, {
                                computes: {
                                    footerState: s,
                                    regularChapters: i,
                                    completedRegularChaptersCount: o,
                                    extraChapters: d,
                                    cardStates: n,
                                    levelInfo: t,
                                    levelRewards: a,
                                    currentPointsInChapter: E,
                                    totalPointsInChapter: m,
                                    progressChanged: A,
                                    cycleChanged: F,
                                    getProgressValues: D,
                                },
                            });
                        },
                        ({ model: e, externalModel: u }) => ({
                            openPointsInfo: u.createCallbackNoArgs('onOpenPointsInfo'),
                            openInfoPage: u.createCallbackNoArgs('onOpenInfoPage'),
                            openChaptersSelection: u.createCallbackNoArgs('onOpenChaptersSelection'),
                            openChaptersBuyView: u.createCallbackNoArgs('onOpenChaptersBuyView'),
                            openProgressionView: u.createCallback((e) => ({ chapterID: e }), 'onOpenProgressionView'),
                            setAnimationStep: (0, Ne.aD)((u) => e.animationStep.set(u)),
                            handleProgressAchieved: u.createCallbackNoArgs('onProgressAchieved'),
                            handleCycleCompleted: u.createCallbackNoArgs('onCycleCompleted'),
                            close: u.createCallbackNoArgs('onClose'),
                        }),
                    ),
                    Me = Ie[0],
                    He = Ie[1],
                    Ge = {
                        base: 'Card_base_5d',
                        base__inProgress: 'Card_base__inProgress_e1',
                        stage: 'Card_stage_92',
                        rewards: 'Card_rewards_f5',
                        status: 'Card_status_65',
                        points: 'Card_points_ed',
                        points__initial: 'Card_points__initial_e9',
                        progressShadow: 'Card_progressShadow_4c',
                    },
                    Ue = 'Background_base_1d',
                    $e = 'Background_default_66',
                    ze = 'Background_base__first_70',
                    We = 'Background_base__last_59',
                    je = 'Background_disabled_e9',
                    Ve = 'Highlight_base_af',
                    qe = 'Highlight_inner_67',
                    Ye = 'Highlight_side_19',
                    Xe = 'Highlight_side__left_1c',
                    Ze = 'Highlight_side__right_ed',
                    Ke = (0, r.memo)(() =>
                        n().createElement(
                            'div',
                            { className: Ve },
                            n().createElement('div', { className: i()(Ye, Xe) }),
                            n().createElement('div', { className: qe }),
                            n().createElement('div', { className: i()(Ye, Ze) }),
                        ),
                    ),
                    Qe = (0, w.Pi)(({ level: e }) => {
                        const u = He().model,
                            t = u.computes.levelInfo(e),
                            a = t.isFirstLevel,
                            r = t.isLastLevel,
                            s = u.computes.cardStates(e),
                            o = s.cardStatus,
                            l = s.isDisabled;
                        return n().createElement(
                            'div',
                            { className: i()(Ue, a && ze, r && We) },
                            n().createElement('div', { className: $e }),
                            l && n().createElement('div', { className: je }),
                            o === ve.IN_PROGRESS && n().createElement(Ke, null),
                        );
                    });
                let Je, eu, uu, tu, au, ru, nu, su;
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
                        (e.Tankman = 'tankman'),
                        (e.Tankwoman = 'tankwoman'),
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
                        (e.BattlePassTicket = 'lootBox_commonTicket'),
                        (e.BattlePassTaler = 'bptaler'),
                        (e.StyleProgressToken = 'styleProgressToken'),
                        (e.TmanToken = 'tmanToken'),
                        (e.NaturalCover = 'naturalCover'),
                        (e.BpCoin = 'bpcoin'),
                        (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (e.BattleBadge = 'dossier_badge'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.DeluxeGift = 'deluxe_gift'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.ModernizedDevicesT1Gift = 'modernized_devices_t1_gift'),
                        (e.ModernizedDevicesT2Gift = 'modernized_devices_t2_gift'),
                        (e.ModernizedDevicesT3Gift = 'modernized_devices_t3_gift'),
                        (e.OptionalDevice = 'optionalDevice'),
                        (e.EquipCoin = 'equipCoin'),
                        (e.LootBox = 'lootBox'),
                        (e.BrCoin = 'brcoin'),
                        (e.Attachment = 'attachment'));
                })(Je || (Je = {})),
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
                            (e.BattleAchievement = 'dossier_achievement'),
                            (e.EquipCoin = 'equipCoin'));
                    })(eu || (eu = {})),
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
                            (e.S64x64 = 's64x64'),
                            (e.S48x48 = 's48x48'));
                    })(uu || (uu = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(tu || (tu = {})),
                    (function (e) {
                        ((e.ATTACHMENT_RARE = 'rare'),
                            (e.ATTACHMENT_EPIC = 'epic'),
                            (e.ATTACHMENT_LEGENDARY = 'legendary'),
                            (e.BATTLE_BOOSTER = 'battleBooster'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'));
                    })(au || (au = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(ru || (ru = {})),
                    (function (e) {
                        ((e.ATTACHMENT_RARE = 'rare'),
                            (e.ATTACHMENT_EPIC = 'epic'),
                            (e.ATTACHMENT_LEGENDARY = 'legendary'),
                            (e.BATTLE_BOOSTER = 'battleBooster'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'));
                    })(nu || (nu = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(su || (su = {})));
                const iu = [Je.Attachment];
                var ou = t(2372);
                const lu = [
                        Je.Items,
                        Je.Equipment,
                        Je.Xp,
                        Je.XpFactor,
                        Je.Blueprints,
                        Je.BlueprintsAny,
                        Je.Goodies,
                        Je.Berths,
                        Je.Slots,
                        Je.Tokens,
                        Je.CrewSkins,
                        Je.CrewBooks,
                        Je.Customizations,
                        Je.CreditsFactor,
                        Je.TankmenXp,
                        Je.TankmenXpFactor,
                        Je.FreeXpFactor,
                        Je.BattleToken,
                        Je.LootBox,
                        Je.PremiumUniversal,
                        Je.NaturalCover,
                        Je.BpCoin,
                        Je.BattlePassSelectToken,
                        Je.BattlaPassFinalAchievement,
                        Je.BattleBadge,
                        Je.BattlePassTicket,
                        Je.BonusX5,
                        Je.CrewBonusX3,
                        Je.EpicSelectToken,
                        Je.Comp7TokenWeeklyReward,
                        Je.DeluxeGift,
                        Je.ModernizedDevicesT1Gift,
                        Je.ModernizedDevicesT2Gift,
                        Je.ModernizedDevicesT3Gift,
                        Je.BattleBoosterGift,
                        Je.OptionalDevice,
                        Je.Attachment,
                    ],
                    cu = [Je.Gold, Je.Credits, Je.Crystal, Je.FreeXp],
                    du = [Je.BattlePassPoints, Je.EquipCoin],
                    _u = [Je.PremiumPlus, Je.Premium],
                    Eu = ['engravings', 'backgrounds'],
                    mu = ['engraving', 'background'],
                    Au = (e, u = uu.Small) => {
                        const t = e.name,
                            a = e.type,
                            r = e.value,
                            n = e.icon,
                            s = e.item,
                            i = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case uu.S600x450:
                                        return 'c_600x450';
                                    case uu.S400x300:
                                        return 'c_400x300';
                                    case uu.S296x222:
                                        return 'c_296x222';
                                    case uu.S232x174:
                                        return 'c_232x174';
                                    case uu.Big:
                                        return 'c_80x80';
                                    case uu.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}_${r}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${n}`;
                            case 'tokens':
                            case 'lootBox':
                            case 'battleToken':
                                return 'big' === u
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${n}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const a = Eu[e];
                                    if (a) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(a),
                                            n = r.$dyn(t);
                                        return n ? `${n}` : `${r.$dyn(mu[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, u, n);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${n}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${o}.${n}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${o}.${n}`;
                            case 'attachment':
                                return `R.images.gui.maps.vehicles.attachments.${u}.${n}`;
                            case 'statTracker':
                                return `R.images.gui.maps.vehicles.statTrackers.${u}.${n}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    Fu = (e, u, t) => {
                        const a = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            a,
                            t,
                        );
                    },
                    Du = [uu.Small, uu.Big];
                var gu = t(2056);
                const Cu = ['children'];
                function pu() {
                    return (
                        (pu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        pu.apply(this, arguments)
                    );
                }
                const Bu = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, Cu);
                    return n().createElement(
                        gu.u,
                        pu(
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
                var bu = t(6373);
                function hu() {
                    return (
                        (hu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        hu.apply(this, arguments)
                    );
                }
                const vu = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const a = n().createElement('div', { className: t }, e);
                        if (u.header || u.body) return n().createElement(bu.i, u, a);
                        const r = u.contentId;
                        return r
                            ? n().createElement(gu.u, hu({}, u, { contentId: r }), a)
                            : n().createElement(Bu, u, a);
                    },
                    fu = {
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
                        base__normalize: 'Reward_base__normalize_a6',
                        highlight: 'Reward_highlight_36',
                        image: 'Reward_image_89',
                        info: 'Reward_info_72',
                        info__multi: 'Reward_info__multi_63',
                        info__credits: 'Reward_info__credits_ef',
                        info__gold: 'Reward_info__gold_36',
                        info__bptaler: 'Reward_info__bptaler_82',
                        info__crystal: 'Reward_info__crystal_36',
                        info__premiumTank: 'Reward_info__premiumTank_d3',
                        title: 'Reward_title_36',
                        timer: 'Reward_timer_d3',
                    },
                    wu = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: a = uu.Big,
                        special: r,
                        value: s,
                        valueType: o,
                        title: l,
                        style: c,
                        className: d,
                        classNames: _,
                        tooltipArgs: E,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const A = ((e, u) => {
                                if (void 0 === u || !Du.includes(e)) return null;
                                switch (u) {
                                    case au.BATTLE_BOOSTER:
                                    case au.BATTLE_BOOSTER_REPLACE:
                                        return ru.BATTLE_BOOSTER;
                                }
                            })(a, r),
                            F = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case au.BATTLE_BOOSTER:
                                        return nu.BATTLE_BOOSTER;
                                    case au.BATTLE_BOOSTER_REPLACE:
                                        return nu.BATTLE_BOOSTER_REPLACE;
                                    case au.BUILT_IN_EQUIPMENT:
                                        return nu.BUILT_IN_EQUIPMENT;
                                    case au.EQUIPMENT_PLUS:
                                        return nu.EQUIPMENT_PLUS;
                                    case au.EQUIPMENT_TROPHY_BASIC:
                                        return nu.EQUIPMENT_TROPHY_BASIC;
                                    case au.EQUIPMENT_TROPHY_UPGRADED:
                                        return nu.EQUIPMENT_TROPHY_UPGRADED;
                                    case au.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return nu.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case au.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return nu.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case au.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return nu.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case au.PROGRESSION_STYLE_UPGRADED_1:
                                        return nu.PROGRESSION_STYLE_UPGRADED_1;
                                    case au.PROGRESSION_STYLE_UPGRADED_2:
                                        return nu.PROGRESSION_STYLE_UPGRADED_2;
                                    case au.PROGRESSION_STYLE_UPGRADED_3:
                                        return nu.PROGRESSION_STYLE_UPGRADED_3;
                                    case au.PROGRESSION_STYLE_UPGRADED_4:
                                        return nu.PROGRESSION_STYLE_UPGRADED_4;
                                    case au.PROGRESSION_STYLE_UPGRADED_5:
                                        return nu.PROGRESSION_STYLE_UPGRADED_5;
                                    case au.PROGRESSION_STYLE_UPGRADED_6:
                                        return nu.PROGRESSION_STYLE_UPGRADED_6;
                                    case au.ATTACHMENT_RARE:
                                        return nu.ATTACHMENT_RARE;
                                    case au.ATTACHMENT_EPIC:
                                        return nu.ATTACHMENT_EPIC;
                                    case au.ATTACHMENT_LEGENDARY:
                                        return nu.ATTACHMENT_LEGENDARY;
                                }
                            })(r),
                            D = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case tu.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case tu.CURRENCY:
                                    case tu.NUMBER:
                                        return n().createElement(ou.A, { format: 'integral', value: Number(e) });
                                    case tu.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(s, o);
                        return n().createElement(
                            'div',
                            {
                                className: i()(fu.base, fu[`base__${a}`], iu.includes(e) && fu.base__normalize, d),
                                style: c,
                            },
                            n().createElement(
                                vu,
                                { tooltipArgs: E, className: fu.tooltipWrapper },
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement(
                                        'div',
                                        { className: i()(fu.image, null == _ ? void 0 : _.image) },
                                        A &&
                                            n().createElement('div', {
                                                className: i()(fu.highlight, null == _ ? void 0 : _.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${A}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            n().createElement('div', {
                                                className: i()(fu.icon, null == _ ? void 0 : _.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        F &&
                                            n().createElement('div', {
                                                className: i()(fu.overlay, null == _ ? void 0 : _.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${F}_overlay)`,
                                                },
                                            }),
                                    ),
                                    D &&
                                        n().createElement(
                                            'div',
                                            {
                                                className: i()(
                                                    fu.info,
                                                    fu[`info__${e}`],
                                                    o === tu.MULTI && fu.info__multi,
                                                    null == _ ? void 0 : _.info,
                                                ),
                                            },
                                            D,
                                        ),
                                    l && n().createElement('div', { className: fu.title }, l),
                                ),
                            ),
                            t &&
                                n().createElement(
                                    vu,
                                    { tooltipArgs: m },
                                    n().createElement('div', {
                                        className: i()(fu.timer, null == _ ? void 0 : _.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Su = {
                        base: 'CardRewards_base_f2',
                        base__completed: 'CardRewards_base__completed_08',
                        rewards: 'CardRewards_rewards_0a',
                        rewards__2: 'CardRewards_rewards__2_ee',
                        base__inProgress: 'CardRewards_base__inProgress_7c',
                        rewards__3: 'CardRewards_rewards__3_f9',
                        reward: 'CardRewards_reward_0e',
                        rewards__1: 'CardRewards_rewards__1_10',
                    };
                function yu() {
                    return (
                        (yu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        yu.apply(this, arguments)
                    );
                }
                const Pu = (0, xe.Om)((e) => {
                        const u = e.item,
                            t = e.name,
                            a = e.value,
                            r = e.overlayType,
                            n = e.tooltipId,
                            s = e.tooltipContentId;
                        return {
                            name: u || t,
                            smallImage: Au(e, uu.Big),
                            bigImage: Au(e, uu.S180x135),
                            special: r,
                            value: a,
                            valueType:
                                ((i = t),
                                lu.includes(i)
                                    ? tu.MULTI
                                    : cu.includes(i)
                                      ? tu.CURRENCY
                                      : du.includes(i)
                                        ? tu.NUMBER
                                        : _u.includes(i)
                                          ? tu.PREMIUM_PLUS
                                          : tu.STRING),
                            tooltipArgs: Fu({ tooltipId: n }, Number(s), { ignoreShowDelay: !0 }),
                        };
                        var i;
                    }),
                    Ru = (0, w.Pi)(({ level: e, className: u }) => {
                        const t = He().model,
                            a = t.computes.levelRewards(e),
                            r = t.computes.cardStates(e).cardStatus,
                            s = (0, c.GS)().mediaSize < c.cJ.Medium,
                            o = 1 === a.length,
                            l = ((e, u) => (u ? (e ? uu.Big : uu.S180x135) : e ? uu.Small : uu.Big))(s, o),
                            d = (e) => (s || !o ? e.smallImage : e.bigImage);
                        return n().createElement(
                            'div',
                            { className: i()(Su.base, Su[`base__${r}`], u) },
                            n().createElement(
                                'div',
                                { className: i()(Su.rewards, Su[`rewards__${a.length}`]) },
                                ke.UI(a, (e, u) => {
                                    const t = Pu(e);
                                    return n().createElement(
                                        'div',
                                        { key: `reward__${t.name}${u}`, className: i()(Su.reward) },
                                        n().createElement(wu, yu({ size: l, image: d(t) }, t)),
                                    );
                                }),
                            ),
                        );
                    }),
                    Tu = {
                        base: 'Divider_base_a2',
                        base__left: 'Divider_base__left_a0',
                        base__right: 'Divider_base__right_91',
                        inner: 'Divider_inner_c8',
                    },
                    ku = ({ position: e }) =>
                        n().createElement(
                            'div',
                            { className: i()(Tu.base, Tu[`base__${e}`]) },
                            n().createElement('div', { className: Tu.inner }),
                        );
                var Nu = t(7727),
                    xu = t(7030);
                let Ou, Lu;
                (!(function (e) {
                    ((e.Active = 'active'),
                        (e.Paused = 'paused'),
                        (e.Completed = 'completed'),
                        (e.NotStarted = 'notStarted'));
                })(Ou || (Ou = {})),
                    (function (e) {
                        ((e.Vehicle = 'vehicle'), (e.Style = 'style'), (e.Tankman = 'tankman'));
                    })(Lu || (Lu = {})));
                t(3649);
                var Iu = t(8613);
                Date.now();
                const Mu = Iu.Ew.getRegionalDateTime;
                Iu.Ew.getFormattedDateTime;
                let Hu;
                !(function (e) {
                    ((e.style = 'style'), (e.tankman = 'tankman'));
                })(Hu || (Hu = {}));
                (Hu.style, Hu.tankman);
                const Gu = (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                    Uu = {
                        base: 'Stage_base_4c',
                        number: 'Stage_number_f6',
                        animatedNumber: 'Stage_animatedNumber_90',
                        numberInProgress: 'Stage_numberInProgress_e0',
                        title: 'Stage_title_1e',
                        glow: 'Stage_glow_9b',
                        base__inProgress: 'Stage_base__inProgress_e1',
                        animatedGlow: 'Stage_animatedGlow_7f',
                    },
                    $u = (0, w.Pi)(({ level: e, className: u }) => {
                        const t = He().model,
                            a = t.root.get().postProgressionStatus,
                            s = t.computes.cardStates(e).cardStatus,
                            o = (0, r.useState)(!1),
                            l = o[0],
                            c = o[1],
                            d = s === ve.IN_PROGRESS,
                            _ = a === Pe.Unlocked,
                            E = (0, xu.useSpring)({
                                from: { stageOpacity: l ? 1 : 0 },
                                to: { stageOpacity: 0 },
                                delay: 0,
                                onStart: () => (0, Nu.G)(R.sounds.bp_current_phase()),
                                config: { duration: 750, easing: Gu },
                            }).stageOpacity,
                            m = (0, xu.useSpring)({
                                from: { sparkOpacity: l ? 0.7 : 0 },
                                to: { sparkOpacity: 0 },
                                delay: 1100,
                                onRest: () => c(!1),
                                config: { duration: 300, easing: Gu },
                            }).sparkOpacity;
                        return (
                            (0, r.useEffect)(() => {
                                if (d)
                                    return B(() => {
                                        c(!0);
                                    }, 100);
                            }, [d]),
                            n().createElement(
                                'div',
                                { className: i()(Uu.base, Uu[`base__${s}`], u) },
                                d
                                    ? n().createElement(
                                          n().Fragment,
                                          null,
                                          _ &&
                                              n().createElement(
                                                  n().Fragment,
                                                  null,
                                                  n().createElement('div', { className: Uu.glow }),
                                                  n().createElement(xu.animated.div, {
                                                      style: { opacity: m },
                                                      className: Uu.animatedGlow,
                                                  }),
                                              ),
                                          n().createElement(
                                              'div',
                                              { className: Uu.numberInProgress },
                                              e,
                                              n().createElement(
                                                  xu.animated.div,
                                                  {
                                                      style: {
                                                          opacity: E,
                                                          transform: E.to([0, 1], [2.5, 1]).to(
                                                              (e) => `translate(-50%, -50%) scale(${e})`,
                                                          ),
                                                      },
                                                      className: Uu.animatedNumber,
                                                  },
                                                  e,
                                              ),
                                          ),
                                          n().createElement(
                                              'div',
                                              { className: Uu.title },
                                              R.strings.battle_pass.postProgressionView.progression.currentStep(),
                                          ),
                                      )
                                    : n().createElement('div', { className: Uu.number }, e),
                            )
                        );
                    }),
                    zu = {
                        base__showAnimation: 'CompletedStatus_base__showAnimation_4b',
                        slideUp: 'CompletedStatus_slideUp_60',
                        fadeIn: 'CompletedStatus_fadeIn_0a',
                        base__hideAnimation: 'CompletedStatus_base__hideAnimation_d6',
                        slideDown: 'CompletedStatus_slideDown_db',
                        fadeOut: 'CompletedStatus_fadeOut_59',
                        icon: 'CompletedStatus_icon_ab',
                        iconGlow: 'CompletedStatus_iconGlow_e9',
                        fadeInWithScale: 'CompletedStatus_fadeInWithScale_51',
                        scale: 'CompletedStatus_scale_0b',
                        rotate: 'CompletedStatus_rotate_61',
                    },
                    Wu = ({ shouldAppear: e }) =>
                        n().createElement(
                            'div',
                            { className: i()(zu.base, e ? zu.base__showAnimation : zu.base__hideAnimation) },
                            n().createElement('div', { className: zu.iconGlow }),
                            n().createElement(
                                bu.i,
                                { body: R.strings.battle_pass.tooltips.completed.got() },
                                n().createElement('div', { className: zu.icon }),
                            ),
                        ),
                    ju = {
                        base: 'CurrentPoints_base_62',
                        base__appear: 'CurrentPoints_base__appear_c2',
                        fadeIn: 'CurrentPoints_fadeIn_13',
                        base__disappear: 'CurrentPoints_base__disappear_dd',
                        fadeOut: 'CurrentPoints_fadeOut_47',
                        value__current: 'CurrentPoints_value__current_02',
                        value__total: 'CurrentPoints_value__total_56',
                        divider: 'CurrentPoints_divider_0b',
                        icon: 'CurrentPoints_icon_67',
                        fadeInWithScale: 'CurrentPoints_fadeInWithScale_ee',
                        slideUp: 'CurrentPoints_slideUp_c4',
                        scale: 'CurrentPoints_scale_e9',
                        rotate: 'CurrentPoints_rotate_21',
                    },
                    Vu = (0, w.Pi)(({ totalLevelPoints: e, shouldAppear: u, shouldDisappear: t, className: a }) => {
                        const r = He().model.root.get(),
                            s = r.currentLevelPoints,
                            o = r.previousLevelPoints;
                        return n().createElement(
                            gu.u,
                            {
                                ignoreShowDelay: !0,
                                contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId'),
                            },
                            n().createElement(
                                'div',
                                { className: i()(ju.base, u && ju.base__appear, t && ju.base__disappear, a) },
                                n().createElement('div', { className: i()(ju.value, ju.value__current) }, t ? o : s),
                                n().createElement('div', { className: ju.divider }, '/'),
                                n().createElement('div', { className: i()(ju.value, ju.value__total) }, e),
                                n().createElement('div', { className: ju.icon }),
                            ),
                        );
                    }),
                    qu = 'Status_base_76',
                    Yu = 'Status_pointsWrapper_26',
                    Xu = (0, w.Pi)(({ level: e, className: u }) => {
                        const t = He().model,
                            a = t.computes.cardStates(e),
                            s = a.cardStatus,
                            o = a.isDisabled,
                            l = t.computes.levelInfo(e).levelPoints,
                            c = t.animationStep.get(),
                            d = [be.FillProgressMax, be.RunCycle].includes(c),
                            _ = c === be.ResetProgress,
                            E = s === ve.COMPLETED && !o,
                            m = s === ve.IN_PROGRESS,
                            A = (0, r.useState)(E),
                            F = A[0],
                            D = A[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (c === be.RunCycle) return void D(!1);
                                const u = c === be.FillProgressMax,
                                    t = c === be.ResetProgress;
                                return F
                                    ? void 0
                                    : B(
                                          () => {
                                              D(!!u || E);
                                          },
                                          (t ? 500 : 0) + 100 * e,
                                      );
                            }, [c, F, E, e]),
                            n().createElement(
                                'div',
                                { className: i()(qu, u) },
                                E && n().createElement(Wu, { key: `statusCompleted-${e}`, shouldAppear: F }),
                                m &&
                                    n().createElement(Vu, {
                                        className: Yu,
                                        totalLevelPoints: l,
                                        shouldAppear: _,
                                        shouldDisappear: d,
                                    }),
                            )
                        );
                    }),
                    Zu = (0, w.Pi)(({ level: e }) => {
                        const u = He().model,
                            t = u.computes.levelInfo(e),
                            a = t.levelPoints,
                            r = t.isFirstLevel,
                            s = t.isLastLevel,
                            o = u.computes.cardStates(e).cardStatus,
                            l = !r && o === ve.IN_PROGRESS,
                            c = !s && u.computes.cardStates(e + 1).cardStatus !== ve.IN_PROGRESS;
                        return n().createElement(
                            'div',
                            { className: i()(Ge.base, Ge[`base__${o}`]), style: Oe },
                            n().createElement(Qe, { level: e }),
                            n().createElement($u, { className: Ge.stage, level: e }),
                            n().createElement(Ru, { className: Ge.rewards, level: e }),
                            n().createElement(Xu, { className: Ge.status, level: e }),
                            n().createElement('div', { className: Ge.points }, e * a),
                            r && n().createElement('div', { className: i()(Ge.points, Ge.points__initial) }, 0),
                            l && n().createElement(ku, { position: we.left }),
                            c && n().createElement(ku, { position: we.right }),
                        );
                    }),
                    Ku = 'Cards_base_3e',
                    Qu = (0, w.Pi)(() => {
                        const e = He().model,
                            u = e.levels.get(),
                            t = e.root.get().chapterID;
                        return n().createElement(
                            'div',
                            { className: Ku },
                            ke.UI(u, ({ level: e }, u) => n().createElement(Zu, { key: `${t}_${u}`, level: e })),
                        );
                    }),
                    Ju = 'Footer_base_0b';
                var et = t(514);
                const ut = 'Banner_base_6a',
                    tt = 'Banner_base__small_01',
                    at = 'Banner_wrapper_b1',
                    rt = 'Banner_border_bf',
                    nt = 'Banner_border__small_36',
                    st = 'Banner_base__hover_87',
                    it = 'Banner_background_38',
                    ot = 'Banner_widget_e7',
                    lt = 'Banner_title_09',
                    ct = 'Banner_title__small_9f',
                    dt = 'Banner_description_fb',
                    _t = 'Banner_description__small_7b',
                    Et = 'Banner_content_86',
                    mt = 'Banner_content__small_e9',
                    At = R.images.gui.maps.icons.battlePass.post_progression.footer.extraChapter,
                    Ft = R.strings.battle_pass.postProgressionView.footer.extraChapter,
                    Dt = ({ chapterId: e, size: u = Se.default, openProgressionView: t }) => {
                        const a = (0, r.useState)(!1),
                            s = a[0],
                            o = a[1],
                            l = u === Se.small;
                        return n().createElement(
                            'div',
                            {
                                className: i()(ut, l && tt, s && st),
                                onMouseOver: (e) => {
                                    (e.stopPropagation(), o(!0), et.hY.sound('highlight'));
                                },
                                onMouseOut: () => {
                                    o(!1);
                                },
                                onClick: () => {
                                    (t(e), et.hY.sound('play'));
                                },
                            },
                            n().createElement(
                                'div',
                                { className: at },
                                n().createElement('div', { className: it, style: N(e, At.background, u) }),
                                n().createElement(
                                    'div',
                                    { className: i()(Et, l && mt) },
                                    n().createElement('div', { className: i()(lt, l && ct) }, Ft.title.$num(e)),
                                    n().createElement('div', { className: i()(dt, l && _t) }, Ft.description.$num(e)),
                                ),
                            ),
                            u === Se.default && n().createElement('div', { className: ot, style: N(e, At.widget) }),
                            n().createElement('div', { className: i()(rt, l && nt) }),
                        );
                    },
                    gt = 'ExtraChapter_base_37',
                    Ct = (0, w.Pi)(() => {
                        const e = He(),
                            u = e.controls,
                            t = e.model.computes.extraChapters(),
                            a = ke.hX(t, (e) => e.chapterStatus !== ye.Active && e.chapterStatus !== ye.Completed),
                            r = 1 === a.length ? Se.default : Se.small;
                        return n().createElement(
                            'div',
                            { className: gt },
                            a.map(({ chapterID: e }) =>
                                n().createElement(Dt, {
                                    chapterId: e,
                                    size: r,
                                    openProgressionView: u.openProgressionView,
                                    key: e,
                                }),
                            ),
                        );
                    }),
                    pt = {
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
                let Bt, bt;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(Bt || (Bt = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(bt || (bt = {})));
                const ht = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: a,
                    disabled: s,
                    mixClass: o,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: d,
                    onMouseMove: _,
                    onMouseDown: E,
                    onMouseUp: m,
                    onMouseLeave: A,
                    onClick: F,
                }) => {
                    const D = (0, r.useRef)(null),
                        g = (0, r.useState)(t),
                        C = g[0],
                        p = g[1],
                        B = (0, r.useState)(!1),
                        b = B[0],
                        h = B[1];
                    return (
                        (0, r.useEffect)(() => {
                            function e(e) {
                                C && null !== D.current && !D.current.contains(e.target) && p(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [C]),
                        (0, r.useEffect)(() => {
                            p(t);
                        }, [t]),
                        n().createElement(
                            'div',
                            {
                                ref: D,
                                className: i()(
                                    pt.base,
                                    pt[`base__${a}`],
                                    s && pt.base__disabled,
                                    u && pt[`base__${u}`],
                                    C && pt.base__focus,
                                    b && pt.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (e) {
                                    s || (null !== l && (0, Nu.G)(l), d && d(e));
                                },
                                onMouseMove: function (e) {
                                    _ && _(e);
                                },
                                onMouseUp: function (e) {
                                    s || (m && m(e), h(!1));
                                },
                                onMouseDown: function (e) {
                                    s ||
                                        (null !== c && (0, Nu.G)(c),
                                        E && E(e),
                                        t && (s || (D.current && (D.current.focus(), p(!0)))),
                                        h(!0));
                                },
                                onMouseLeave: function (e) {
                                    s || (A && A(e), h(!1));
                                },
                                onClick: function (e) {
                                    s || (F && F(e));
                                },
                            },
                            a !== Bt.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: pt.back }),
                                    n().createElement('span', { className: pt.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: i()(pt.state, pt.state__default) },
                                n().createElement('span', { className: pt.stateDisabled }),
                                n().createElement('span', { className: pt.stateHighlightHover }),
                                n().createElement('span', { className: pt.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: pt.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ht.defaultProps = { type: Bt.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const vt = ht;
                var ft = t(9766);
                const wt = 'NotAvailable_base_54',
                    St = 'NotAvailable_background_c6',
                    yt = 'NotAvailable_content_53',
                    Pt = 'NotAvailable_button_7a',
                    Rt = 'NotAvailable_description_9b',
                    Tt = 'NotAvailable_completedCount_12',
                    kt = R.strings.battle_pass.postProgressionView.footer,
                    Nt = (0, w.Pi)(() => {
                        const e = He(),
                            u = e.controls,
                            t = e.model,
                            a = t.computes.completedRegularChaptersCount(),
                            r = t.computes.regularChapters().length;
                        return n().createElement(
                            'div',
                            { className: wt },
                            n().createElement('div', { className: St }),
                            n().createElement(
                                'div',
                                { className: yt },
                                n().createElement(ft.z, {
                                    classMix: Rt,
                                    text: kt.description.text(),
                                    binding: {
                                        completedChapters: n().createElement('span', { className: Tt }, a),
                                        chaptersAmount: r,
                                    },
                                }),
                                n().createElement(
                                    vt,
                                    { type: Bt.ghost, size: bt.medium, mixClass: Pt, onClick: u.openChaptersSelection },
                                    kt.button.text(),
                                ),
                            ),
                        );
                    }),
                    xt = 'PurchasingIP_base_a7',
                    Ot = 'PurchasingIP_wrapper_66',
                    Lt = 'PurchasingIP_border_3f',
                    It = 'PurchasingIP_base__hover_da',
                    Mt = 'PurchasingIP_bg_fa',
                    Ht = 'PurchasingIP_blink_ce',
                    Gt = 'PurchasingIP_text_35',
                    Ut = 'PurchasingIP_button_f8',
                    $t = 'PurchasingIP_content_53',
                    zt = R.strings.battle_pass.postProgressionView.footer.purchaseIP,
                    Wt = (0, w.Pi)(() => {
                        const e = He().controls,
                            u = (0, r.useState)(!1),
                            t = u[0],
                            a = u[1];
                        return n().createElement(
                            'div',
                            {
                                className: i()(xt, t && It),
                                onMouseOver: (e) => {
                                    (e.stopPropagation(), a(!0), et.hY.sound('highlight'));
                                },
                                onMouseOut: () => {
                                    a(!1);
                                },
                                onClick: () => {
                                    (e.openChaptersBuyView(), et.hY.sound('play'));
                                },
                            },
                            n().createElement(
                                'div',
                                { className: Ot },
                                n().createElement('div', { className: Mt }),
                                n().createElement('div', { className: Ht }),
                                n().createElement(
                                    'div',
                                    { className: $t },
                                    n().createElement(
                                        'div',
                                        { className: Gt },
                                        R.strings.battle_pass.postProgressionView.footer.purchaseIP.banner.text(),
                                    ),
                                    n().createElement(
                                        vt,
                                        { type: Bt.main, size: bt.medium, mixClass: Ut },
                                        zt.button.text(),
                                    ),
                                ),
                            ),
                            n().createElement('div', { className: Lt }),
                        );
                    }),
                    jt = (0, w.Pi)(() => {
                        const e = He().model.computes.footerState();
                        return n().createElement(
                            'div',
                            { className: Ju },
                            (() => {
                                switch (e) {
                                    case fe.NotAvailable:
                                        return n().createElement(Nt, null);
                                    case fe.PurchasingIP:
                                        return n().createElement(Wt, null);
                                    case fe.ExtraChapter:
                                        return n().createElement(Ct, null);
                                    default:
                                        return null;
                                }
                            })(),
                        );
                    });
                let Vt;
                !(function (e) {
                    ((e.DayMonthNumeric = 'dayMonthNumeric'),
                        (e.DayMonthFull = 'dayMonthFull'),
                        (e.DayMonthFullTime = 'dayMonthFullTime'),
                        (e.DayMonthAbbreviated = 'dayMonthAbbreviated'),
                        (e.DayMonthAbbreviatedTime = 'dayMonthAbbreviatedTime'),
                        (e.ShortDate = 'shortDate'),
                        (e.ShortTime = 'ShortTime'),
                        (e.ShortDateTime = 'ShortDateTime'),
                        (e.FullDate = 'fullDate'),
                        (e.FullTime = 'fullTime'),
                        (e.FullDateTime = 'fullDateTime'));
                })(Vt || (Vt = {}));
                const qt = 'Header_base_07',
                    Yt = 'Header_background_b8',
                    Xt = 'Header_headlineContainer_53',
                    Zt = 'Header_headline_16',
                    Kt = 'Header_divider_87',
                    Qt = 'Header_title_14',
                    Jt = 'Header_descriptionContainer_9b',
                    ea = 'Header_descriptionPaused_28',
                    ua = 'Header_description_c0',
                    ta = 'Header_icon_1b',
                    aa = 'Header_label_b2',
                    ra = R.strings.battle_pass.postProgressionView.header,
                    na = (0, w.Pi)(({ className: e }) => {
                        const u = He().model.root.get(),
                            t = u.postProgressionStatus,
                            a = u.endDate,
                            r = t === Pe.Locked,
                            s = t === Pe.Paused,
                            o = Mu(a, Vt.DayMonthFull);
                        return n().createElement(
                            'div',
                            { className: i()(qt, e) },
                            n().createElement('div', { className: Yt }),
                            n().createElement(
                                'div',
                                { className: Xt },
                                !r &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('span', { className: Zt }, ra.headline.unlocked()),
                                        n().createElement('div', { className: Kt }),
                                    ),
                                n().createElement(ft.z, {
                                    classMix: Zt,
                                    text: ra.headline.deadline(),
                                    binding: { endDate: o },
                                }),
                            ),
                            n().createElement('span', { className: Qt }, ra.title()),
                            n().createElement(
                                'div',
                                { className: Jt },
                                s
                                    ? n().createElement(
                                          n().Fragment,
                                          null,
                                          n().createElement('div', { className: ta }),
                                          n().createElement(
                                              'span',
                                              { className: aa },
                                              ra.description.onPause.highlight(),
                                          ),
                                          n().createElement(
                                              'span',
                                              { className: ea },
                                              ra.description.onPause.regular(),
                                          ),
                                      )
                                    : n().createElement('span', { className: ua }, ra.description.active()),
                            ),
                        );
                    }),
                    sa = 'OptimizedProgressBar_base_1f',
                    ia = 'OptimizedProgressBar_wrapper_ab',
                    oa = 'OptimizedProgressBar_background_ce',
                    la = ['api', 'value', 'maxValue', 'theme'];
                function ca() {
                    return (
                        (ca =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ca.apply(this, arguments)
                    );
                }
                const da = (e, u) => ('number' == typeof u ? u : e.offsetLeft),
                    _a = (e) => {
                        let u = e.api,
                            t = e.value,
                            a = e.maxValue,
                            s = void 0 === a ? 100 : a,
                            i = e.theme,
                            o = void 0 === i ? Fe : i,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, la);
                        const c = (0, r.useRef)(null),
                            d = (0, r.useRef)(null),
                            _ = (0, r.useRef)(null),
                            E = me(0, t, s) / s,
                            m = (0, r.useCallback)(
                                (e) => {
                                    (_.current &&
                                        c.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: u }, t, a) => {
                                            const r = t.offsetWidth - a.offsetWidth,
                                                n = e - da(t, u),
                                                s = me(0, r, n);
                                            a.style.left = `${s}px`;
                                        })(e, c.current, _.current),
                                        d.current &&
                                            c.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: u },
                                                t,
                                                { container: a, line: r },
                                            ) => {
                                                const n = Math.max(0, Math.floor(a.offsetWidth * t) - 8e3),
                                                    s = e - da(a, u),
                                                    i = me(0, n, s);
                                                r.style.left = `${i}px`;
                                            })(e, E, { line: d.current, container: c.current }));
                                },
                                [E],
                            ),
                            A = (0, r.useMemo)(() => _e(o), [o]);
                        return (
                            (u.current.update = m),
                            n().createElement(
                                'div',
                                { className: sa, ref: c },
                                n().createElement(
                                    'div',
                                    { className: ia },
                                    n().createElement(
                                        'div',
                                        { style: A, className: oa, ref: _ },
                                        n().createElement(M, { size: l.size }),
                                    ),
                                    n().createElement(
                                        ge,
                                        ca({}, l, {
                                            lineRef: d,
                                            value: t,
                                            theme: o,
                                            maxValue: s,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    },
                    Ea = 'Counter_base_8f',
                    ma = 'Counter_infinityIconContainer_2c',
                    Aa = 'Counter_infinityIcon_12',
                    Fa = 'Counter_label_db',
                    Da = 'Counter_cyclesCompleted_a0',
                    ga = 'Counter_cyclesNumber_5c',
                    Ca = 'Counter_cyclesNumber__animated_d8',
                    pa = 'Counter_cyclesNumber__hidden_c1',
                    Ba = R.strings.battle_pass.postProgressionView.progression,
                    ba = (0, w.Pi)(({ className: e, labelRef: u, shouldRun: t }) => {
                        const a = He().model,
                            r = a.root.get(),
                            s = r.cyclesCompletedCount,
                            o = r.previousCyclesCompletedCount,
                            l = a.animationStep.get(),
                            c = s !== o && [be.Idle, be.FillProgressMax].includes(l);
                        return n().createElement(
                            'div',
                            { className: i()(Ea, e), ref: u },
                            n().createElement('div', { className: ma }, n().createElement('div', { className: Aa })),
                            n().createElement(
                                'div',
                                { className: Fa },
                                s
                                    ? n().createElement(
                                          'div',
                                          { className: Da },
                                          n().createElement('span', null, Ba.cyclesCompleted()),
                                          n().createElement(
                                              'span',
                                              {
                                                  key: `cyclesCompletedCount-${t}`,
                                                  className: i()(ga, t && Ca, c && pa),
                                              },
                                              s,
                                          ),
                                      )
                                    : Ba.cyclicalProgression(),
                            ),
                        );
                    }),
                    ha = {
                        base: 'Cycle_base_cb',
                        labelContainer: 'Cycle_labelContainer_1d',
                        contour: 'Cycle_contour_6d',
                        border: 'Cycle_border_7e',
                        border__horizontal: 'Cycle_border__horizontal_22',
                        contour__2x: 'Cycle_contour__2x_5c',
                        border__vertical: 'Cycle_border__vertical_ee',
                        arrow: 'Cycle_arrow_2f',
                        bar: 'Cycle_bar_fa',
                        bar__state1: 'Cycle_bar__state1_a9',
                        state1: 'Cycle_state1_0e',
                        bar__state2: 'Cycle_bar__state2_38',
                        state2: 'Cycle_state2_92',
                        bar__state3: 'Cycle_bar__state3_9f',
                        state3: 'Cycle_state3_5d',
                        bar__state4: 'Cycle_bar__state4_7e',
                        state4: 'Cycle_state4_2b',
                        bar__state5: 'Cycle_bar__state5_b9',
                        state5: 'Cycle_state5_28',
                    },
                    va = '--label-offset',
                    fa = { left: 0, width: 0 },
                    wa = (0, w.Pi)(({ className: e, shouldRun: u }) => {
                        const t = He().model.root.get().cyclesCompletedCount,
                            a = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            o = (0, c.GS)().mediaSize,
                            l = (() => {
                                const e = (0, r.useState)(b.O.view.getScale()),
                                    u = e[0],
                                    t = e[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        const e = () => {
                                            t(b.O.view.getScale());
                                        };
                                        return (
                                            window.addEventListener('resize', e),
                                            () => {
                                                window.removeEventListener('resize', e);
                                            }
                                        );
                                    }, []),
                                    u
                                );
                            })(),
                            d = (0, r.useState)({ [va]: '0%' }),
                            _ = d[0],
                            E = d[1];
                        var m, A;
                        return (
                            (m = () => {
                                var e, u, t, r;
                                const n =
                                        null != (e = null == (u = a.current) ? void 0 : u.getBoundingClientRect())
                                            ? e
                                            : fa,
                                    i =
                                        null != (t = null == (r = s.current) ? void 0 : r.getBoundingClientRect().left)
                                            ? t
                                            : 0,
                                    o = 15 * l,
                                    c = (100 * (i - n.left - o)) / n.width;
                                E({ [va]: `${c}%` });
                            }),
                            (A = [a.current, s.current, o, l, t]),
                            (0, r.useEffect)(() => {
                                let e = null;
                                return (
                                    (e = requestAnimationFrame(() => {
                                        e = requestAnimationFrame(() => {
                                            ((e = null), m());
                                        });
                                    })),
                                    () => {
                                        null !== e && cancelAnimationFrame(e);
                                    }
                                );
                            }, A),
                            n().createElement(
                                'div',
                                { className: i()(ha.base, e), style: _ },
                                n().createElement('div', { className: ha.arrow }),
                                n().createElement(
                                    'div',
                                    { className: i()(ha.contour, ha[`contour__${l}x`]), ref: a },
                                    n().createElement('div', { className: i()(ha.border, ha.border__vertical) }),
                                    n().createElement('div', { className: i()(ha.border, ha.border__horizontal) }),
                                    u &&
                                        Array(5)
                                            .fill(void 0)
                                            .map((e, u) =>
                                                n().createElement('div', {
                                                    key: `bar-${u}`,
                                                    className: i()(ha.bar, ha[`bar__state${u + 1}`]),
                                                }),
                                            ),
                                ),
                                n().createElement(ba, { className: ha.labelContainer, labelRef: s, shouldRun: u }),
                            )
                        );
                    }),
                    Sa = 'ProgressBar_base_11',
                    ya = 'ProgressBar_progressBackground_20',
                    Pa = 'ProgressBar_progressBar_b0',
                    Ra = 'ProgressBar_progressBar__disabled_21',
                    Ta = 'ProgressBar_cycle_49',
                    ka = (0, w.Pi)(() => {
                        const e = He(),
                            u = e.model,
                            t = e.controls,
                            a = u.root.get().postProgressionStatus,
                            s = u.animationStep.get(),
                            o = s === be.RunCycle,
                            l = a === Pe.Locked,
                            d = a === Pe.Paused,
                            _ = l || d,
                            E = (0, c.GS)().mediaSize,
                            m = u.computes.getProgressValues(E),
                            A = m.progressValue,
                            F = m.previousProgressValue,
                            D = m.maxProgressValue,
                            g = u.computes.progressChanged();
                        ((0, r.useEffect)(() => {
                            switch (s) {
                                case be.FillProgressMax:
                                case be.RefillProgress:
                                    return void t.handleProgressAchieved();
                                case be.RunCycle:
                                    return void t.handleCycleCompleted();
                            }
                        }, [s, t]),
                            (0, r.useEffect)(() => {
                                if (g && s === be.Idle)
                                    return B(() => {
                                        t.handleProgressAchieved();
                                    }, Ce);
                            }, [s, t, g]));
                        const C = (0, r.useRef)({ update: () => {} });
                        return n().createElement(
                            'div',
                            { className: Sa, style: { '--progress-line-width': `${D}rem` } },
                            n().createElement('div', { className: ya }),
                            n().createElement(
                                gu.u,
                                { contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId') },
                                n().createElement(
                                    'div',
                                    { className: i()(Pa, _ && Ra) },
                                    n().createElement(_a, {
                                        api: C,
                                        value: A,
                                        deltaFrom: F,
                                        maxValue: D,
                                        disabled: _,
                                        animationSettings: pe,
                                        theme: Be,
                                    }),
                                ),
                            ),
                            n().createElement(wa, { className: Ta, shouldRun: o }),
                        );
                    }),
                    Na = {
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
                    xa = [
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
                function Oa() {
                    return (
                        (Oa =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Oa.apply(this, arguments)
                    );
                }
                class La extends n().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, Nu.G)(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, Nu.G)(this.props.soundClick));
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
                            s = e.type,
                            o = e.classNames,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            _ = e.onMouseUp,
                            E =
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
                                })(e, xa)),
                            m = i()(Na.base, Na[`base__${s}`], Na[`base__${r}`], null == o ? void 0 : o.base),
                            A = i()(Na.icon, Na[`icon__${s}`], Na[`icon__${r}`], null == o ? void 0 : o.icon),
                            F = i()(Na.glow, null == o ? void 0 : o.glow),
                            D = i()(Na.caption, Na[`caption__${s}`], null == o ? void 0 : o.caption),
                            g = i()(Na.goto, null == o ? void 0 : o.goto);
                        return n().createElement(
                            'div',
                            Oa(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(d),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== s && n().createElement('div', { className: Na.shine }),
                            n().createElement('div', { className: A }, n().createElement('div', { className: F })),
                            n().createElement('div', { className: D }, u),
                            a && n().createElement('div', { className: g }, a),
                        );
                    }
                }
                La.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const Ia = 'Toolbar_infoButtons_d0',
                    Ma = R.strings.battle_pass.postProgressionView.toolbar,
                    Ha = (0, w.Pi)(({ className: e }) => {
                        const u = He().controls,
                            t = u.openChaptersSelection,
                            a = u.openInfoPage,
                            r = u.openPointsInfo;
                        return n().createElement(
                            'div',
                            { className: e },
                            n().createElement(La, {
                                caption: Ma.allChapters(),
                                side: 'left',
                                type: 'back',
                                onClick: t,
                            }),
                            n().createElement(
                                'div',
                                { className: Ia },
                                n().createElement(La, { caption: Ma.aboutBattlePass(), type: 'info', onClick: a }),
                                n().createElement(La, { caption: Ma.howToEarnPoints(), type: 'info', onClick: r }),
                            ),
                        );
                    }),
                    Ga = 'App_base_21',
                    Ua = 'App_toolbar_de',
                    $a = 'App_awardsWidget_e1',
                    za = 'App_award_6a',
                    Wa = 'App_content_c6',
                    ja = 'App_header_a1',
                    Va = 'App_progression_75',
                    qa = R.images.gui.maps.icons.battlePass.backgrounds.progression,
                    Ya = (0, w.Pi)(() => {
                        const e = He(),
                            u = e.model,
                            t = e.controls,
                            a = u.root.get().chapterID,
                            s = u.animationStep.get(),
                            i = u.computes.cycleChanged();
                        var o;
                        ((0, r.useEffect)(() => {
                            if (s !== be.Idle) {
                                const e = he[s],
                                    u = e.nextStep,
                                    a = e.delay;
                                return B(() => {
                                    t.setAnimationStep(u);
                                }, a);
                            }
                            i && t.setAnimationStep(be.FillProgressMax);
                        }, [s, t, i]),
                            (o = t.close),
                            f(h.n.ESCAPE, o));
                        const l = `url(${k(qa, a)})`;
                        return n().createElement(
                            'div',
                            { className: Ga, style: { backgroundImage: l } },
                            n().createElement(Ha, { className: Ua }),
                            n().createElement(x.Z, {
                                context: 'model.awardsWidget',
                                classNames: { base: $a, award: za },
                            }),
                            n().createElement(
                                'div',
                                { className: Wa },
                                n().createElement(na, { className: ja }),
                                n().createElement(
                                    'div',
                                    { className: Va },
                                    n().createElement(Qu, null),
                                    n().createElement(ka, null),
                                ),
                            ),
                            n().createElement(jt, null),
                        );
                    });
                engine.whenReady.then(() => {
                    p().render(
                        n().createElement(Me, null, n().createElement(g, null, n().createElement(Ya, null))),
                        document.getElementById('root'),
                    );
                });
            },
            2432: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => Ee });
                var a = t(7363),
                    r = t.n(a),
                    n = t(6483),
                    s = t.n(n),
                    i = t(9480),
                    o = t(3403),
                    l = t(6373),
                    c = t(7727),
                    d = t(5415);
                const _ = (e, u, t, a, r) => {
                    const n = R.images.gui.maps.icons.battlePass.awards_widget;
                    return r
                        ? `url(${n.$dyn(`${e.toLowerCase()}_${u}${t}_${a}_${r}`)})`
                        : `url(${n.$dyn(`${e.toLowerCase()}_${u}${t}_${a}`)})`;
                };
                let E, m, A, F, D;
                (!(function (e) {
                    ((e.Award = 'Award'),
                        (e.Ticket = 'Ticket'),
                        (e.Coin = 'Coin'),
                        (e.Taler = 'Taler'),
                        (e.Collection = 'Collection'),
                        (e.Commander = 'Commander'));
                })(E || (E = {})),
                    (function (e) {
                        ((e.Small = 'small'), (e.Big = 'big'));
                    })(m || (m = {})),
                    (function (e) {
                        ((e.None = ''), (e.Small = 's'), (e.Medium = 'm'));
                    })(A || (A = {})),
                    (function (e) {
                        ((e.Border = 'border'), (e.Background = 'bg'), (e.Icon = 'icon'), (e.None = ''));
                    })(F || (F = {})),
                    (function (e) {
                        ((e.Hover = 'Hover'), (e.Disabled = 'Disabled'), (e.Triggered = 'Triggered'), (e.None = ''));
                    })(D || (D = {})));
                const g = {
                        base: 'Background_base_67',
                        bg: 'Background_bg_e8',
                        bgDisabled: 'Background_bgDisabled_e0',
                        bgHover: 'Background_bgHover_b4',
                        base__big: 'Background_base__big_56',
                        base__hovered: 'Background_base__hovered_32',
                    },
                    C = ({ size: e, isHover: u, disabled: t = !1, type: a = E.Coin }) => {
                        const n = (0, d.GS)().mediaSize >= d.cJ.Medium ? A.Medium : A.Small;
                        return r().createElement(
                            'div',
                            { className: s()(g.base, g[`base__${e}`], g[`base__${e}${a}`], u && g.base__hovered) },
                            t
                                ? r().createElement('div', {
                                      className: g.bgDisabled,
                                      style: { backgroundImage: _(a, F.Background, D.Disabled, e, n) },
                                  })
                                : r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement('div', {
                                          className: g.bg,
                                          style: { backgroundImage: _(a, F.Background, D.None, e, n) },
                                      }),
                                      r().createElement('div', {
                                          className: g.bgHover,
                                          style: { backgroundImage: _(a, F.Background, D.Hover, e, n) },
                                      }),
                                  ),
                        );
                    },
                    p = {
                        base: 'Border_base_5a',
                        border: 'Border_border_bd',
                        borderHover: 'Border_borderHover_ab',
                        base__hovered: 'Border_base__hovered_83',
                        borderDisabled: 'Border_borderDisabled_8b',
                        borderDisabled__big: 'Border_borderDisabled__big_12',
                    },
                    B = ({ size: e, isHover: u, highlighted: t = !1, disabled: a = !1, type: n = E.Coin }) => {
                        const i = (0, d.GS)().mediaSize >= d.cJ.Medium ? A.Medium : A.Small;
                        return r().createElement(
                            'div',
                            { className: s()(p.base, p[`base__${e}`], u && p.base__hovered) },
                            a
                                ? r().createElement('div', {
                                      className: s()(p.borderDisabled, p[`borderDisabled__${e}`]),
                                      style: { backgroundImage: _(n, F.Border, D.Disabled, e, i) },
                                  })
                                : r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement('div', {
                                          className: p.border,
                                          style: { backgroundImage: _(t ? E.Collection : n, F.Border, D.None, e, i) },
                                      }),
                                      r().createElement('div', {
                                          className: p.borderHover,
                                          style: { backgroundImage: _(n, F.Border, D.Hover, e, i) },
                                      }),
                                  ),
                        );
                    };
                var b = t(2372),
                    h = t(9766);
                const v = { base: 'CountValue_base_fe', base__big: 'CountValue_base__big_ea' },
                    f = ({ state: e, count: u, size: t, maxCount: a = 0 }) => {
                        switch (e) {
                            case S.InProgress:
                                return r().createElement(h.z, { text: `${u || 0} / ${a}` });
                            case S.Completed:
                                return r().createElement('div', { className: s()(v.base, v[`base__${t}`]) });
                            default:
                                return r().createElement(b.A, { format: 'integral', value: u });
                        }
                    },
                    w = {
                        base: 'Count_base_a6',
                        base__big: 'Count_base__big_2c',
                        base__locked: 'Count_base__locked_e3',
                        base__disabled: 'Count_base__disabled_66',
                    };
                let S;
                !(function (e) {
                    ((e.Default = ''), (e.InProgress = 'InProgress'), (e.Completed = 'Completed'));
                })(S || (S = {}));
                const y = ({
                        size: e,
                        count: u,
                        maxCount: t,
                        state: a = S.Default,
                        isLocked: n = !1,
                        disabled: i = !1,
                    }) =>
                        r().createElement(
                            'div',
                            { className: s()(w.base, w[`base__${e}`], n && w.base__locked, i && w.base__disabled) },
                            r().createElement(f, { state: a, size: e, count: u, maxCount: t }),
                        ),
                    P = {
                        base: 'Icon_base_05',
                        base__big: 'Icon_base__big_9e',
                        base__darkened: 'Icon_base__darkened_2b',
                        base__hover: 'Icon_base__hover_03',
                        base__disabled: 'Icon_base__disabled_a1',
                    },
                    T = (e, u, t) => {
                        switch (!0) {
                            case t:
                                return 'disabled';
                            case e:
                                return 'hover';
                            case u:
                                return 'darkened';
                            default:
                                return '';
                        }
                    },
                    k = ({ size: e, isHover: u, isDark: t = !0, disabled: a = !1, type: n }) => {
                        const i = (0, d.GS)().mediaSize >= d.cJ.Medium ? A.Medium : A.Small;
                        return r().createElement('div', {
                            className: s()(P.base, P[`base__${e}`], P[`base__${T(u, t, a)}`]),
                            style: { backgroundImage: _(n, F.Icon, D.None, e, n === E.Collection ? A.None : i) },
                        });
                    },
                    N = {
                        base: 'Label_base_05',
                        base__big: 'Label_base__big_3c',
                        base__gold: 'Label_base__gold_dc',
                        base__hover: 'Label_base__hover_51',
                        base__disabled: 'Label_base__disabled_df',
                    },
                    x = (e, u) => {
                        switch (!0) {
                            case e:
                                return 'disabled';
                            case u:
                                return 'hover';
                            default:
                                return '';
                        }
                    },
                    O = ({ size: e, title: u, isHover: t, disabled: a = !1, isGold: n = !1 }) =>
                        r().createElement(
                            'div',
                            { className: s()(N.base, N[`base__${e}`], N[`base__${x(a, t)}`], n && N.base__gold) },
                            u,
                        ),
                    L = {
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
                    I = R.strings.battle_pass.awardsWidget,
                    M = ({ count: e, disabled: u = !1, onClick: t, size: n }) => {
                        const i = (0, a.useState)(!1),
                            o = i[0],
                            d = i[1],
                            _ = 1 === e ? I.title.awardSingle() : I.title.awardMultiple(),
                            m = u ? I.description.awardDisabled() : I.description.award(),
                            A = (0, a.useCallback)(() => {
                                u || (c.$.playClick(), t());
                            }, [u, t]);
                        return r().createElement(
                            l.i,
                            { body: m, isEnabled: Boolean(m) },
                            r().createElement(
                                'div',
                                {
                                    className: s()(
                                        L.base,
                                        L[`base__${n}`],
                                        u ? L.base__disabled : L.base__hasAppearAnimation,
                                    ),
                                    onMouseEnter: () => {
                                        ((0, c.G)(R.sounds.bp_highlight_02()), d(!0));
                                    },
                                    onMouseLeave: () => {
                                        d(!1);
                                    },
                                    onClick: A,
                                },
                                r().createElement(B, { size: n, isHover: o, type: E.Award, disabled: u }),
                                r().createElement(C, { size: n, isHover: o, type: E.Award, disabled: u }),
                                r().createElement(k, { size: n, isHover: o, type: E.Award, disabled: u, isDark: !1 }),
                                r().createElement(y, { size: n, count: e, disabled: u }),
                                r().createElement(O, { size: n, isHover: o, title: _, disabled: u, isGold: !0 }),
                                !u &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: s()(L.shine, L.shine__left) }),
                                        r().createElement('div', { className: s()(L.shine, L.shine__right) }),
                                        r().createElement('div', { className: L.arrow }),
                                        r().createElement(
                                            'div',
                                            { className: L.blinkShape },
                                            r().createElement('div', { className: L.blink }),
                                        ),
                                    ),
                            ),
                        );
                    },
                    H = { base: 'CoinAward_base_75', base__big: 'CoinAward_base__big_1f' },
                    G = R.strings.battle_pass.awardsWidget,
                    U = ({ count: e, onClick: u, size: t }) => {
                        const n = (0, a.useState)(!1),
                            i = n[0],
                            o = n[1];
                        return r().createElement(
                            l.i,
                            { body: G.description.coin(), isEnabled: Boolean(G.description.coin()) },
                            r().createElement(
                                'div',
                                {
                                    className: s()(H.base, H[`base__${t}`]),
                                    onMouseEnter: () => {
                                        ((0, c.G)(R.sounds.bp_highlight_02()), o(!0));
                                    },
                                    onMouseLeave: () => {
                                        o(!1);
                                    },
                                    onClick: () => {
                                        (c.$.playClick(), u());
                                    },
                                },
                                r().createElement(B, { size: t, isHover: i }),
                                r().createElement(C, { size: t, isHover: i }),
                                r().createElement(k, { size: t, isHover: i, type: E.Coin }),
                                r().createElement(y, { size: t, count: e }),
                                r().createElement(O, { size: t, isHover: i, title: G.title.coin() }),
                            ),
                        );
                    },
                    $ = {
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
                    z = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function W() {
                    return (
                        (W =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        W.apply(this, arguments)
                    );
                }
                const j = (e) => {
                    let u = e.size,
                        t = e.value,
                        a = e.isEmpty,
                        n = e.fadeInAnimation,
                        i = e.hide,
                        o = e.maximumNumber,
                        l = e.className,
                        c = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, z);
                    const d = a ? null : t,
                        _ = 'string' == typeof d;
                    if ((d && !_ && d < 0) || 0 === d) return null;
                    const E = d && !_ && d > o,
                        m = s()(
                            $.base,
                            $[`base__${u}`],
                            n && $.base__animated,
                            i && $.base__hidden,
                            !d && $.base__pattern,
                            a && $.base__empty,
                            l,
                        );
                    return r().createElement(
                        'div',
                        W({ className: m }, c),
                        r().createElement('div', { className: $.bg }),
                        r().createElement('div', { className: $.pattern }),
                        r().createElement(
                            'div',
                            { className: s()($.value, _ && $.value__text) },
                            E ? o : d,
                            E && r().createElement('span', { className: $.plus }, '+'),
                        ),
                    );
                };
                j.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                var V = t(3815);
                const q = {
                        base: 'CollectionAward_base_0c',
                        base__big: 'CollectionAward_base__big_ca',
                        bubble: 'CollectionAward_bubble_65',
                    },
                    Y = R.strings.battle_pass.awardsWidget,
                    X = ({ count: e, maxCount: u, newItemsCount: t, hasTrigger: n, size: i, onClick: o }) => {
                        const d = (0, a.useState)(!1),
                            _ = d[0],
                            A = d[1],
                            F = u === e,
                            D = i === m.Small && n,
                            g = F ? Y.description.collectionCompleted() : Y.description.collection(),
                            p = (0, V.z)(() => {
                                (c.$.playClick(), o());
                            });
                        return r().createElement(
                            l.i,
                            { body: g, isEnabled: Boolean(g) },
                            r().createElement(
                                'div',
                                {
                                    className: s()(q.base, q[`base__${i}`]),
                                    onMouseEnter: () => {
                                        ((0, c.G)(R.sounds.bp_highlight_02()), A(!0));
                                    },
                                    onMouseLeave: () => {
                                        A(!1);
                                    },
                                    onClick: p,
                                },
                                r().createElement(B, { size: i, isHover: _, type: E.Coin, highlighted: D }),
                                r().createElement(C, { size: i, isHover: _ }),
                                r().createElement(k, { size: i, isHover: _, type: E.Collection }),
                                r().createElement(y, {
                                    size: i,
                                    count: e,
                                    maxCount: u,
                                    state: F ? S.Completed : S.InProgress,
                                }),
                                r().createElement(O, { size: i, isHover: _, title: Y.title.collection() }),
                                t > 0 &&
                                    r().createElement(
                                        'div',
                                        { className: q.bubble },
                                        r().createElement(j, { size: 'small' }),
                                    ),
                            ),
                        );
                    };
                var Z = t(514);
                const K = {
                        base: 'CommanderAward_base_11',
                        icon: 'CommanderAward_icon_92',
                        base__hover: 'CommanderAward_base__hover_fc',
                    },
                    Q = R.strings.battle_pass.awardsWidget,
                    J = ({ onClick: e, size: u, tankmenScreenID: t }) => {
                        const n = (0, a.useState)(!1),
                            i = n[0],
                            o = n[1],
                            c = Q.description.commander(),
                            d =
                                R.images.gui.maps.icons.battlePass.awards_widget.$dyn(`commander_icon_small_${t}`) ||
                                R.images.gui.maps.icons.battlePass.awards_widget.commander_icon_small();
                        return r().createElement(
                            l.i,
                            { body: c, isEnabled: Boolean(c) },
                            r().createElement(
                                'div',
                                {
                                    className: s()(K.base, K[`base__${u}`], i && K.base__hover),
                                    onMouseEnter: () => {
                                        (Z.hY.sound(R.sounds.bp_highlight_02()), o(!0));
                                    },
                                    onMouseLeave: () => o(!1),
                                    onClick: () => {
                                        (Z.hY.sound(R.sounds.play()), e());
                                    },
                                },
                                r().createElement(B, { size: u, isHover: i }),
                                r().createElement(C, { size: u, isHover: i }),
                                r().createElement(O, { size: u, isHover: i, title: Q.title.commander() }),
                                r().createElement('div', {
                                    className: K.icon,
                                    style: { backgroundImage: `url(${d})` },
                                }),
                            ),
                        );
                    },
                    ee = { base: 'TalerAward_base_ef', base__big: 'TalerAward_base__big_6b' },
                    ue = R.strings.battle_pass.awardsWidget,
                    te = ({ count: e, onClick: u, size: t }) => {
                        const n = (0, a.useState)(!1),
                            i = n[0],
                            o = n[1];
                        return r().createElement(
                            l.i,
                            { body: ue.description.taler() },
                            r().createElement(
                                'div',
                                {
                                    className: s()(ee.base, ee[`base__${t}`], i && ee.base__hover),
                                    onMouseEnter: () => {
                                        (Z.hY.sound(R.sounds.bp_highlight_02()), o(!0));
                                    },
                                    onMouseLeave: () => {
                                        o(!1);
                                    },
                                    onClick: () => {
                                        (Z.hY.click(), u());
                                    },
                                },
                                r().createElement(B, { size: t, isHover: i }),
                                r().createElement(C, { size: t, isHover: i }),
                                r().createElement(k, { size: t, isHover: i, type: E.Taler }),
                                r().createElement(y, { size: t, count: e }),
                                r().createElement(O, { size: t, isHover: i, title: ue.title.taler() }),
                            ),
                        );
                    },
                    ae = {
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
                    re = R.strings.battle_pass.awardsWidget,
                    ne = ({ count: e, onClick: u, size: t }) => {
                        const n = (0, a.useState)(!1),
                            i = n[0],
                            o = n[1],
                            c = Boolean(e),
                            d = c ? E.Ticket : void 0;
                        return r().createElement(
                            l.i,
                            { body: re.description.ticket(), isEnabled: Boolean(re.description.ticket()) },
                            r().createElement(
                                'div',
                                {
                                    className: s()(ae.base, ae[`base__${t}`], c && ae.base__hasAppearAnimation),
                                    onMouseEnter: () => {
                                        (Z.hY.sound('bp_highlight_02'), o(!0));
                                    },
                                    onMouseLeave: () => {
                                        o(!1);
                                    },
                                    onClick: () => {
                                        (Z.hY.sound('play'), u());
                                    },
                                },
                                r().createElement(B, { size: t, isHover: i, type: d }),
                                r().createElement(C, { size: t, isHover: i, type: d }),
                                r().createElement(k, { size: t, isHover: i, type: E.Ticket, isDark: !c }),
                                r().createElement(y, { size: t, count: e }),
                                r().createElement(O, { size: t, isHover: i, title: re.title.ticket(), isGold: c }),
                                c &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: s()(ae.shine, ae.shine__left) }),
                                        r().createElement('div', { className: s()(ae.shine, ae.shine__right) }),
                                        r().createElement('div', { className: ae.arrow }),
                                        r().createElement(
                                            'div',
                                            { className: ae.blinkShape },
                                            r().createElement('div', { className: ae.blink }),
                                        ),
                                    ),
                            ),
                        );
                    };
                var se = t(3215),
                    ie = t(3946);
                const oe = (0, se.q3)()(
                        ({ observableModel: e, externalModel: u }) => {
                            const t = { root: e.object(), collectionEntryPoint: e.object('collectionEntryPoint') },
                                a = (0, ie.Om)((e) => {
                                    const a = t.root.get(),
                                        r = a.talerCount,
                                        n = a.notChosenRewardCount,
                                        s = a.bpcoinCount,
                                        i = a.ticketsCount,
                                        o = a.isChooseRewardsEnabled,
                                        l = a.tankmenScreenID,
                                        c = a.isTalerEnabled,
                                        d = a.isBpCoinEnabled,
                                        _ = a.isTicketsEnabled,
                                        m = t.collectionEntryPoint.get(),
                                        A = m.collectionItemCount,
                                        F = m.newCollectionItemCount,
                                        D = m.maxCollectionItemCount,
                                        g = m.isFirstEnter,
                                        C = m.isCollectionsEnabled;
                                    return [
                                        {
                                            type: E.Award,
                                            props: {
                                                size: e,
                                                count: n,
                                                disabled: !o,
                                                onClick: u.createCallbackNoArgs('onTakeRewardsClick'),
                                            },
                                            condition: n > 0,
                                        },
                                        {
                                            type: E.Ticket,
                                            props: {
                                                size: e,
                                                count: i,
                                                onClick: u.createCallbackNoArgs('showTickets'),
                                            },
                                            condition: _,
                                        },
                                        {
                                            type: E.Coin,
                                            props: {
                                                size: e,
                                                count: s,
                                                onClick: u.createCallbackNoArgs('onBpcoinClick'),
                                            },
                                            condition: d,
                                        },
                                        {
                                            type: E.Taler,
                                            props: { size: e, count: r, onClick: u.createCallbackNoArgs('showTalers') },
                                            condition: c,
                                        },
                                        {
                                            type: E.Collection,
                                            props: {
                                                size: e,
                                                count: A,
                                                maxCount: D,
                                                newItemsCount: F,
                                                hasTrigger: g,
                                                onClick: u.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                                            },
                                            condition: C,
                                        },
                                        {
                                            type: E.Commander,
                                            props: {
                                                size: e,
                                                count: 0,
                                                tankmenScreenID: l,
                                                onClick: u.createCallbackNoArgs('showTankmen'),
                                            },
                                            condition: 0 !== l,
                                        },
                                    ];
                                });
                            return Object.assign({}, t, { computes: { awardsList: a } });
                        },
                        ({ externalModel: e }) => ({
                            openPointsInfo: e.createCallbackNoArgs('onPointsInfoClick'),
                            takeRewards: e.createCallbackNoArgs('onTakeRewardsClick'),
                            openGoodsForBpCoins: e.createCallbackNoArgs('onBpcoinClick'),
                            openGoodsForBpTalers: e.createCallbackNoArgs('showTalers'),
                            openCollection: e.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                        }),
                    ),
                    le = oe[0],
                    ce = oe[1],
                    de = {
                        base: 'AwardsWrapper_base_e5',
                        award: 'AwardsWrapper_award_49',
                        base__big: 'AwardsWrapper_base__big_6b',
                    },
                    _e = (0, o.Pi)(({ size: e, classNames: u }) => {
                        const t = ce().model;
                        return r().createElement(
                            'div',
                            { className: s()(de.base, de[`base__${e}`], null == u ? void 0 : u.base) },
                            i.UI(
                                t.computes.awardsList(e),
                                (e) =>
                                    e.condition &&
                                    r().createElement(
                                        'div',
                                        { key: e.type, className: s()(de.award, null == u ? void 0 : u.award) },
                                        ((e, u) => {
                                            switch (e) {
                                                case E.Award:
                                                    return r().createElement(M, u);
                                                case E.Ticket:
                                                    return r().createElement(ne, u);
                                                case E.Coin:
                                                    return r().createElement(U, u);
                                                case E.Taler:
                                                    return r().createElement(te, u);
                                                case E.Collection:
                                                    return r().createElement(X, u);
                                                case E.Commander:
                                                    return r().createElement(J, u);
                                                default:
                                                    return (console.warn('Unknown award type: ', e), null);
                                            }
                                        })(e.type, e.props),
                                    ),
                            ),
                        );
                    }),
                    Ee = ({ size: e = m.Small, context: u = 'model', classNames: t }) =>
                        r().createElement(
                            le,
                            { options: { context: u } },
                            r().createElement(_e, { size: e, classNames: t }),
                        );
            },
            5287: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                const a = { base: 'FormatText_base_d0' };
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
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, a] = deferred[o], n = !0, s = 0; s < u.length; s++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((n = !1), a < r && (r = a));
                    if (n) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, a];
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
        (__webpack_require__.j = 4051),
        (() => {
            var e = { 4051: 0, 7737: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        r,
                        [n, s, i] = t,
                        o = 0;
                    if (n.some((u) => 0 !== e[u])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < n.length; o++)
                        ((r = n[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(9521));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
