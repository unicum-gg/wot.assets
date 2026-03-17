(() => {
    var __webpack_modules__ = {
            7405: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => c });
                var n = u(6483),
                    r = u.n(n),
                    a = u(2372),
                    i = u(7363),
                    l = u.n(i),
                    s = u(8460),
                    o = u(329);
                const c = (0, i.memo)(
                    ({
                        isDiscount: e,
                        isInteractiveDiscount: t,
                        size: u,
                        type: n,
                        value: i,
                        discountValue: c,
                        showPlus: _,
                        isEnough: d = !0,
                        stockBackgroundName: m = o.we.Red,
                        className: E,
                        classNames: p,
                    }) =>
                        l().createElement(
                            'span',
                            { className: r()(s.Z.base, s.Z[`base__${u}`], E) },
                            l().createElement(
                                'span',
                                {
                                    className: r()(
                                        s.Z.value,
                                        s.Z[`value__${n}`],
                                        !d && s.Z.value__notEnough,
                                        null == p ? void 0 : p.value,
                                    ),
                                },
                                _ && i > 0 && '+',
                                l().createElement(a.A, { value: i, format: n === o.V2.gold ? 'gold' : 'integral' }),
                            ),
                            l().createElement('span', {
                                className: r()(s.Z.icon, s.Z[`icon__${n}-${u}`], null == p ? void 0 : p.icon),
                            }),
                            e &&
                                l().createElement(
                                    'span',
                                    {
                                        className: r()(
                                            s.Z.stock,
                                            c && s.Z.stock__indent,
                                            t && s.Z.stock__interactive,
                                            null == p ? void 0 : p.stock,
                                        ),
                                    },
                                    l().createElement('span', {
                                        className: s.Z.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${m})` },
                                    }),
                                    Boolean(c) && c,
                                ),
                        ),
                );
            },
            329: (e, t, u) => {
                'use strict';
                let n, r, a;
                (u.d(t, { V2: () => r, we: () => a }),
                    (function (e) {
                        ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(a || (a = {})));
            },
            2372: (e, t, u) => {
                'use strict';
                u.d(t, { A: () => r });
                var n = u(9916);
                const r = ({ value: e, format: t = 'integral' }) => {
                    const u = (function (e) {
                            return 'gold' === e ? n.B3.GOLD : n.B3.INTEGRAL;
                        })(t),
                        r = n.Z5.getNumberFormat(e, u);
                    return void 0 !== e && void 0 !== r ? r : null;
                };
            },
            280: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => o });
                var n = u(6483),
                    r = u.n(n),
                    a = u(3649),
                    i = u(7363),
                    l = u.n(i),
                    s = u(5287);
                const o = ({
                    binding: e,
                    text: t = '',
                    classMix: u,
                    alignment: n = a.v2.left,
                    formatWithBrackets: o,
                }) => {
                    if (null === t) return (console.error("FormatText was supplied with 'null'"), null);
                    const c = o && e ? (0, a.WU)(t, e) : t;
                    return l().createElement(
                        i.Fragment,
                        null,
                        c.split('\n').map((t, o) =>
                            l().createElement(
                                'div',
                                { className: r()(s.Z.base, u), key: `${t}-${o}` },
                                (0, a.Uw)(t, n, e).map((e, t) =>
                                    l().createElement(i.Fragment, { key: `${t}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            3495: (e, t, u) => {
                'use strict';
                u.d(t, { Q: () => l, Y: () => o });
                var n = u(3138),
                    r = u(7363),
                    a = u(1043),
                    i = u(5262);
                function l(e = n.O.client.getSize('rem')) {
                    const t = e.width,
                        u = e.height;
                    return Object.assign({ width: t, height: u }, (0, i.T)(t, u, a.j));
                }
                const s = l(),
                    o = (0, r.createContext)(s);
            },
            1039: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => l });
                var n = u(3138),
                    r = u(7363),
                    a = u.n(r),
                    i = u(3495);
                const l = ({ children: e }) => {
                    const t = (0, r.useState)(i.Q),
                        u = t[0],
                        l = t[1],
                        s = (0, r.useState)(!1),
                        o = s[0],
                        c = s[1];
                    return (
                        (0, r.useLayoutEffect)(() => {
                            function e() {
                                l((e) => {
                                    const t = n.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : (0, i.Q)(t);
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
                        a().createElement(i.Y.Provider, { value: u }, o && e)
                    );
                };
            },
            6010: (e, t, u) => {
                'use strict';
                var n = u(7363),
                    r = u(7382),
                    a = u(3495);
                const i = ['children'];
                (0, n.memo)((e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, i);
                    const l = (0, n.useContext)(a.Y),
                        s = l.extraLarge,
                        o = l.large,
                        c = l.medium,
                        _ = l.small,
                        d = l.extraSmall,
                        m = l.extraLargeWidth,
                        E = l.largeWidth,
                        p = l.mediumWidth,
                        g = l.smallWidth,
                        A = l.extraSmallWidth,
                        f = l.extraLargeHeight,
                        b = l.largeHeight,
                        D = l.mediumHeight,
                        F = l.smallHeight,
                        C = l.extraSmallHeight,
                        v = { extraLarge: f, large: b, medium: D, small: F, extraSmall: C };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && s) return t;
                        if (u.large && o) return t;
                        if (u.medium && c) return t;
                        if (u.small && _) return t;
                        if (u.extraSmall && d) return t;
                    } else {
                        if (u.extraLargeWidth && m) return (0, r.H)(t, u, v);
                        if (u.largeWidth && E) return (0, r.H)(t, u, v);
                        if (u.mediumWidth && p) return (0, r.H)(t, u, v);
                        if (u.smallWidth && g) return (0, r.H)(t, u, v);
                        if (u.extraSmallWidth && A) return (0, r.H)(t, u, v);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && f) return t;
                            if (u.largeHeight && b) return t;
                            if (u.mediumHeight && D) return t;
                            if (u.smallHeight && F) return t;
                            if (u.extraSmallHeight && C) return t;
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
                u.d(t, { YN: () => r.Y, ZN: () => n.Z });
                u(6010);
                var n = u(1039),
                    r = u(3495);
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
                function r(e, t, u) {
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
                        })(t, u),
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === u.extraLarge.weight,
                        large: a === u.large.weight,
                        medium: a === u.medium.weight,
                        small: a === u.small.weight,
                        extraSmall: a === u.extraSmall.weight,
                        extraLargeWidth: n === u.extraLarge.weight,
                        largeWidth: n === u.large.weight,
                        mediumWidth: n === u.medium.weight,
                        smallWidth: n === u.small.weight,
                        extraSmallWidth: n === u.extraSmall.weight,
                        extraLargeHeight: r === u.extraLarge.weight,
                        largeHeight: r === u.large.weight,
                        mediumHeight: r === u.medium.weight,
                        smallHeight: r === u.small.weight,
                        extraSmallHeight: r === u.extraSmall.weight,
                    };
                }
                (u.d(t, { T: () => r, u: () => n }),
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
            6349: (e, t, u) => {
                'use strict';
                u.d(t, { l: () => d });
                var n = u(6483),
                    r = u.n(n),
                    a = u(6373),
                    i = u(1856),
                    l = u(7363),
                    s = u.n(l),
                    o = u(1699);
                const c = ['content', 'classMix', 'className'];
                function _() {
                    return (
                        (_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        _.apply(this, arguments)
                    );
                }
                const d = (e) => {
                    let t = e.content,
                        u = e.classMix,
                        n = e.className,
                        d = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, c);
                    const m = (0, l.useRef)(null),
                        E = (0, l.useState)(!0),
                        p = E[0],
                        g = E[1];
                    return (
                        (0, l.useEffect)(() =>
                            (0, i.v)(() => {
                                const e = m.current;
                                e && e.offsetWidth >= e.scrollWidth && g(!1);
                            }),
                        ),
                        s().createElement(
                            a.i,
                            { isEnabled: p, body: t },
                            s().createElement('div', _({}, d, { ref: m, className: r()(o.Z.base, n, u) }), t),
                        )
                    );
                };
            },
            7078: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => s });
                var n = u(7363),
                    r = u.n(n),
                    a = u(2056);
                const i = ['children'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const s = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, i);
                    return r().createElement(
                        a.u,
                        l(
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
            3415: (e, t, u) => {
                'use strict';
                u.d(t, { l: () => o });
                var n = u(7363),
                    r = u.n(n),
                    a = u(7078),
                    i = u(6373),
                    l = u(2056);
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const o = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = r().createElement('div', { className: u }, e);
                    if (t.header || t.body) return r().createElement(i.i, t, n);
                    const o = t.contentId;
                    return o ? r().createElement(l.u, s({}, t, { contentId: o }), n) : r().createElement(a.t, t, n);
                };
            },
            6373: (e, t, u) => {
                'use strict';
                u.d(t, { i: () => o });
                var n = u(2056),
                    r = u(7363),
                    a = u.n(r);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const s = R.views.common.tooltip_window.simple_tooltip_content,
                    o = (e) => {
                        let t = e.children,
                            u = e.body,
                            o = e.header,
                            c = e.note,
                            _ = e.alert,
                            d = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, i);
                        const E = (0, r.useMemo)(() => {
                            const e = Object.assign({}, d, { body: u, header: o, note: c, alert: _ });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [_, u, o, c, d]);
                        return a().createElement(
                            n.u,
                            l(
                                {
                                    contentId:
                                        ((p = null == d ? void 0 : d.hasHtmlContent),
                                        p ? s.SimpleTooltipHtmlContent('resId') : s.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                m,
                            ),
                            t,
                        );
                        var p;
                    };
            },
            2056: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => o });
                var n = u(7902),
                    r = u(9916),
                    a = u(7363);
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
                function l(e) {
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
                const s = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    o = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            r = e.args,
                            o = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onClick,
                            m = e.ignoreShowDelay,
                            E = void 0 !== m && m,
                            p = e.ignoreMouseClick,
                            g = void 0 !== p && p,
                            A = e.decoratorId,
                            f = void 0 === A ? 0 : A,
                            b = e.isEnabled,
                            D = void 0 === b || b,
                            F = e.targetId,
                            C = void 0 === F ? 0 : F,
                            v = e.onShow,
                            h = e.onHide,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, i);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            k = (0, a.useMemo)(() => C || (0, n.F)().resId, [C]),
                            y = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (s(u, f, { isMouseEvent: !0, on: !0, arguments: l(r) }, k),
                                    v && v(),
                                    (w.current.isVisible = !0));
                            }, [u, f, r, k, v]),
                            S = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        s(u, f, { on: !1 }, k),
                                        w.current.isVisible && h && h(),
                                        (w.current.isVisible = !1));
                                }
                            }, [u, f, k, h]),
                            x = (0, a.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        ((0, a.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', x, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === D && S();
                            }, [D, S]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        (window.removeEventListener('mouseleave', S), S());
                                    }
                                ),
                                [S],
                            ));
                        return D
                            ? (0, a.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((N = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(w.current.timeoutId),
                                                      (w.current.timeoutId = window.setTimeout(y, E ? 100 : 400)),
                                                      o && o(e),
                                                      N && N(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (S(), null == c || c(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === g && S(), null == d || d(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === g && S(), null == _ || _(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : t;
                        var N;
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
            1856: (e, t, u) => {
                'use strict';
                u.d(t, { v: () => n });
                const n = (e) => {
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
            },
            8246: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => l });
                var n = u(3138);
                function r(e, t) {
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
                const i = (e) => (0 === e ? window : window.subViews.get(e));
                function l({ initializer: e = !0, rootId: t = 0, getRoot: u = i, context: a = 'model' } = {}) {
                    const l = new Map();
                    function s(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? l.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, u) => {
                            u.forEach((t) => {
                                const u = l.get(t);
                                void 0 !== u && u(e);
                            });
                        });
                    });
                    const o = (e) => {
                        const n = u(t),
                            r = a.split('.').reduce((e, t) => e[t], n);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, t) => {
                                  const u = e[t];
                                  return 'function' == typeof u ? u.bind(e) : u;
                              }, r);
                    };
                    return {
                        subscribe: (u, r) => {
                            const i = 'string' == typeof r ? `${a}.${r}` : a,
                                s = n.O.view.addModelObserver(i, t, !0);
                            return (l.set(s, u), e && u(o(r)), s);
                        },
                        readByPath: o,
                        createCallback: (e, t) => {
                            const u = o(t);
                            return (...t) => {
                                u(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = o(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, u = r(l.keys()); !(e = u()).done; ) {
                                s(e.value, t);
                            }
                        },
                        unsubscribe: s,
                    };
                }
            },
            3215: (e, t, u) => {
                'use strict';
                u.d(t, { q3: () => s });
                var n = u(4598),
                    r = u(9174),
                    a = u(7363),
                    i = u.n(a),
                    l = u(8246);
                const s = () => (e, t) => {
                    const u = (0, a.createContext)({});
                    return [
                        function ({ mode: s = 'real', options: o, children: c, mocks: _ }) {
                            const d = (0, a.useRef)([]),
                                m = (u, a, i) => {
                                    var s;
                                    const o = l.U(a),
                                        c =
                                            'real' === u
                                                ? o
                                                : Object.assign({}, o, {
                                                      readByPath:
                                                          null != (s = null == i ? void 0 : i.getter) ? s : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === u ? (null == i ? void 0 : i.getter(e)) : c.readByPath(e),
                                        m = (e) => d.current.push(e),
                                        E = e({
                                            mode: u,
                                            readByPath: _,
                                            externalModel: c,
                                            observableModel: {
                                                dict: (e) => {
                                                    const t = _(e),
                                                        a = r.LO.box(t, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => a.set(e)),
                                                                e,
                                                            ),
                                                        a
                                                    );
                                                },
                                                array: (e, t) => {
                                                    const a = null != t ? t : _(e),
                                                        i = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const a = null != t ? t : _(e),
                                                        i = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = _(t);
                                                    if (Array.isArray(e)) {
                                                        const a = e.reduce(
                                                            (e, t) => ((e[t] = r.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, r.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            a[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    }
                                                    {
                                                        const a = e,
                                                            i = Object.entries(a),
                                                            l = i.reduce(
                                                                (e, [t, u]) => ((e[u] = r.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        i.forEach(([t, u]) => {
                                                                            l[u].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            l
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: m,
                                        }),
                                        p = { mode: u, model: E, externalModel: c, cleanup: m };
                                    return {
                                        model: E,
                                        controls: 'mocks' === u && i ? i.controls(p) : t(p),
                                        externalModel: c,
                                        mode: u,
                                    };
                                },
                                E = (0, a.useRef)(!1),
                                p = (0, a.useState)(s),
                                g = p[0],
                                A = p[1],
                                f = (0, a.useState)(() => m(s, o, _)),
                                b = f[0],
                                D = f[1];
                            return (
                                (0, a.useEffect)(() => {
                                    E.current ? D(m(g, o, _)) : (E.current = !0);
                                }, [_, g, o]),
                                (0, a.useEffect)(() => {
                                    A(s);
                                }, [s]),
                                (0, a.useEffect)(
                                    () => () => {
                                        (b.externalModel.dispose(), d.current.forEach((e) => e()));
                                    },
                                    [b],
                                ),
                                i().createElement(u.Provider, { value: b }, c)
                            );
                        },
                        () => (0, a.useContext)(u),
                    ];
                };
            },
            7044: (e, t, u) => {
                'use strict';
                (u(3649), u(9916));
                var n = u(8613);
                (Date.now(), n.Ew.getRegionalDateTime, n.Ew.getFormattedDateTime);
            },
            527: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, { mouse: () => c, off: () => s, on: () => l, onResize: () => a, onScaleUpdated: () => i }));
                var n = u(2472),
                    r = u(1176);
                const a = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    l = (e, t) => engine.on(e, t),
                    s = (e, t) => engine.off(e, t),
                    o = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function u() {
                        e.enabled && (0, r.R)(!0);
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
                            : (0, r.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${t}`,
                                        i = o[t]((e) => u([e, 'outside']));
                                    function l(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, l),
                                        n(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(a, l),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(u)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            ((e.enabled = !1), n());
                        },
                        enable() {
                            ((e.enabled = !0), n());
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
            5959: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => a,
                        graphicsQuality: () => l,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var n = u(527),
                    r = u(2493);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const l = {
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
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                u.d(t, { E: () => r, G: () => n });
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
                u.d(t, { O: () => i });
                var n = u(5959),
                    r = u(7698),
                    a = u(514);
                const i = { view: u(7641), client: n, sound: a.ZP, intl: r.N };
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
                u.d(t, { ZP: () => i, jX: () => r });
                var n = u(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, n.playSound)(r[t])), e), {}),
                    i = { play: Object.assign({}, a, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, u) => {
                'use strict';
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function r(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                (u.r(t), u.d(t, { getBgUrl: () => r, getTextureUrl: () => n }));
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => r });
                var n = u(2472);
                const r = {
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
                        addPreloadTexture: () => s,
                        arabic2roman: () => k,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => S,
                        enableFullScreenModeSupported: () => R,
                        events: () => i.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => h,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => B,
                        getExternalPaddingsRem: () => y,
                        getFontNames: () => w,
                        getScale: () => A,
                        getSize: () => m,
                        getViewGlobalPosition: () => p,
                        initExternalPaddings: () => L,
                        isEventHandled: () => v,
                        isFocused: () => F,
                        pxToRem: () => f,
                        remToPx: () => b,
                        resize: () => E,
                        sendEvent: () => l.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => N,
                    }));
                var n = u(9690),
                    r = u(3722),
                    a = u(6112),
                    i = u(6538),
                    l = u(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
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
                function p(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function A() {
                    return viewEnv.getScale();
                }
                function f(e) {
                    return viewEnv.pxToRem(e);
                }
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function F() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function h() {
                    viewEnv.forceTriggerMouseMove();
                }
                function B() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    k = n.cg;
                function y() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const S = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    x = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    N = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function R() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function L(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            u = t.top,
                            n = t.right,
                            r = t.bottom,
                            a = t.left;
                        (e.style.setProperty('--external-padding-top', `${u}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${a}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => o });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    i = 32,
                    l = 64,
                    s = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                    return r;
                                })(t, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, i, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var r;
                    },
                    o = {
                        close(e) {
                            s('popover' === e ? r : i);
                        },
                        minimize() {
                            s(l);
                        },
                        move(e) {
                            s(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, u) => {
                'use strict';
                u.d(t, { jv: () => r, yR: () => n });
                function n(e) {
                    return e;
                }
                function r() {
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
                        r = '';
                    var a;
                    t &&
                        ((r = (null == (a = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) || ''),
                        (u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== u &&
                            window.subViews[u] &&
                            (n = window.subViews[u].id));
                    return { callerUrl: r, caller: u, stack: t, resId: n };
                };
            },
            8071: (e, t, u) => {
                'use strict';
                u.d(t, { M: () => n });
                const n = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
            },
            2344: (e, t, u) => {
                'use strict';
                u.d(t, { D9: () => a, DA: () => r.D, tT: () => r.t });
                (u(3469), u(2133));
                var n = u(2790),
                    r = (u(579), u(5360));
                u(9056);
                const a = n.Z;
            },
            6536: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var n = u(7363);
                const r = (e) => {
                    const t = (0, n.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            3469: (e, t, u) => {
                'use strict';
                (u(7044), u(7363));
            },
            2133: (e, t, u) => {
                'use strict';
                u(7363);
            },
            8526: (e, t, u) => {
                'use strict';
                u.d(t, { I9: () => s, gd: () => l });
                var n = u(3138),
                    r = u(5521),
                    a = (u(9916), u(7363));
                const i = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function l(e = r.n.NONE, t = i, u = !1, l = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== r.n.NONE)
                            return (
                                window.addEventListener('keydown', a, u),
                                () => {
                                    window.removeEventListener('keydown', a, u);
                                }
                            );
                        function a(r) {
                            if (r.keyCode === e) {
                                if (!l && n.O.view.isEventHandled()) return;
                                (n.O.view.setEventHandled(), t(r), u && r.stopPropagation());
                            }
                        }
                    }, [t, e, u, l]);
                }
                function s(e) {
                    l(r.n.ESCAPE, e);
                }
            },
            5415: (e, t, u) => {
                'use strict';
                u.d(t, { Aq: () => s, GS: () => o, cJ: () => i, fd: () => l });
                var n = u(7363),
                    r = u(7739),
                    a = u(1043);
                let i, l, s;
                (!(function (e) {
                    ((e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = a.j.small.width)] = 'Small'),
                        (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                        (e[(e.Large = a.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge'));
                })(i || (i = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.width)] = 'Small'),
                            (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                            (e[(e.Large = a.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge'));
                    })(l || (l = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.height)] = 'Small'),
                            (e[(e.Medium = a.j.medium.height)] = 'Medium'),
                            (e[(e.Large = a.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge'));
                    })(s || (s = {})));
                const o = () => {
                    const e = (0, n.useContext)(r.YN),
                        t = e.width,
                        u = e.height,
                        a = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return i.ExtraLarge;
                                case e.large:
                                    return i.Large;
                                case e.medium:
                                    return i.Medium;
                                case e.small:
                                    return i.Small;
                                case e.extraSmall:
                                    return i.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), i.ExtraSmall);
                            }
                        })(e),
                        o = ((e) => {
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
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return s.ExtraLarge;
                                case e.largeHeight:
                                    return s.Large;
                                case e.mediumHeight:
                                    return s.Medium;
                                case e.smallHeight:
                                    return s.Small;
                                case e.extraSmallHeight:
                                    return s.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), s.ExtraSmall);
                            }
                        })(e);
                    return { mediaSize: a, mediaWidth: o, mediaHeight: c, remScreenWidth: t, remScreenHeight: u };
                };
            },
            5360: (e, t, u) => {
                'use strict';
                u.d(t, { D: () => _, t: () => d });
                var n = u(7902),
                    r = u(8071),
                    a = u(6536),
                    i = u(9916),
                    l = u(7332),
                    s = u(7363),
                    o = u(538);
                const c = i.Sw.instance;
                let _;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(_ || (_ = {}));
                const d = (e = 'model', t = _.Deep) => {
                    const u = (0, s.useState)(0),
                        i = (u[0], u[1]),
                        d = (0, s.useMemo)(() => (0, n.F)(), []),
                        m = d.callerUrl,
                        E = d.caller,
                        p = d.resId,
                        g = (0, s.useMemo)(() => {
                            const t = (0, o.sI)(m.replace('.js', '.html'));
                            return window.__feature && window.__feature !== E && !t ? `subViews.${E}.${e}` : e;
                        }, [m, E, e]),
                        A = (0, s.useState)(() =>
                            ((e) => {
                                const t = (0, r.M)(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return (0, l.os)(t) ? t.value : t;
                            })((0, l.Gd)(g)),
                        ),
                        f = A[0],
                        b = A[1],
                        D = (0, s.useRef)(-1);
                    return (
                        (0, a.Z)(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? _.Deep : _.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== _.None)
                            ) {
                                const u = (e) => {
                                        (0, l.kJ)(e) && t === _.Deep
                                            ? (e === f && i((e) => e + 1), b(e))
                                            : b(Object.assign([], e));
                                    },
                                    n = (0, l.U0)(e);
                                D.current = c.addCallback(n, u, p, t === _.Deep);
                            }
                        }),
                        (0, s.useEffect)(() => {
                            if (t !== _.None)
                                return () => {
                                    c.removeCallback(D.current, p);
                                };
                        }, [p, t]),
                        f
                    );
                };
            },
            9056: (e, t, u) => {
                'use strict';
                var n = u(9916);
                u(7363);
                n.Sw.instance;
            },
            2790: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var n = u(7363);
                const r = (e, t) => {
                    const u = (0, n.useRef)();
                    return (
                        (0, n.useEffect)(() => {
                            (t && !t(e)) || (u.current = e);
                        }, [t, e]),
                        u.current
                    );
                };
            },
            4419: (e, t, u) => {
                'use strict';
                u.d(t, { y: () => a });
                var n = u(8045),
                    r = u(7363);
                const a = (e, t, u = !0) => {
                    const a = (0, r.useCallback)(
                        (e) => {
                            const u = e[0];
                            t && t(u);
                        },
                        [t],
                    );
                    (0, r.useEffect)(() => {
                        if (!e.current || !u) return;
                        const t = new n.Z((e) => a(e));
                        return (
                            t.observe(e.current),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [a, u, e]);
                };
            },
            579: (e, t, u) => {
                'use strict';
                (u(3138), u(7363));
            },
            538: (e, t, u) => {
                'use strict';
                function n(e) {
                    return r().has(e);
                }
                u.d(t, { sI: () => n });
                const r = () => (window.injected || (window.injected = new Map()), window.injected);
            },
            5521: (e, t, u) => {
                'use strict';
                let n, r;
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
                    })(r || (r = {})));
            },
            9480: (e, t, u) => {
                'use strict';
                function n(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                u.d(t, { U2: () => n, UI: () => a, dF: () => l, lN: () => i });
                function r(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function a(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                function i(e) {
                    if (0 !== e.length) return n(e, e.length - 1);
                }
                function l(e, t) {
                    for (let u = e.length - 1; u >= 0; u--) {
                        const n = r(e[u]);
                        if (t(n, u, e)) return n;
                    }
                }
            },
            9690: (e, t, u) => {
                'use strict';
                u.d(t, { HG: () => l, cg: () => a });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(e) {
                    let t = '';
                    for (let u = r.length - 1; u >= 0; u--) for (; e >= r[u]; ) ((t += n[u]), (e -= r[u]));
                    return t;
                }
                const i = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    l = (e) => (i ? `${e}` : a(e));
            },
            7727: (e, t, u) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                u.d(t, { $: () => r, G: () => n });
                const r = {
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
            3649: (e, t, u) => {
                'use strict';
                u.d(t, {
                    BN: () => l,
                    Eg: () => c,
                    Uw: () => A,
                    WU: () => a,
                    dL: () => f,
                    e: () => s,
                    uF: () => i,
                    v2: () => r,
                    z4: () => o,
                });
                var n = u(1281);
                let r;
                function a(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function i(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const u = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(u, -u)]);
                    });
                }
                function l(e) {
                    return e.replace(/-/g, '_');
                }
                function s(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(r || (r = {}));
                const o = (e) => e.replace(/&nbsp;/g, ' '),
                    c = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    _ = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    d = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    m = (e, t, u = r.left) => e.split(t).reduce(u === r.left ? _ : d, []),
                    E = (() => {
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
                        return (t) =>
                            t
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    p = ['zh_cn', 'zh_sg', 'zh_tw'],
                    g = (e, t = r.left) => {
                        const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (p.includes(u)) return E(e);
                        if ('ja' === u) {
                            return (0, n.D4)()
                                .parse(e)
                                .map((e) => o(e));
                        }
                        return ((e, t = r.left) => {
                            let u = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = o(e);
                            return (m(a, /( )/, t).forEach((e) => (u = u.concat(m(e, n, r.left)))), u);
                        })(e, t);
                    },
                    A = (e, t, u) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (u && e in u ? u[e] : g(e, t))),
                    f = (e) => a(R.strings.common.percentValue(), { value: e });
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                var n = u(3138);
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
                    addCallback(e, t, u = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, u, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(a) : (this._views[u] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                r.__instance = void 0;
                const a = r;
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
                u.d(t, {
                    c1: () => v,
                    Sw: () => a.Z,
                    B3: () => s,
                    Z5: () => i.Z5,
                    B0: () => l,
                    ry: () => A,
                    Eu: () => f,
                });
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
                const r = n;
                var a = u(1358);
                var i = u(8613);
                let l;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(l || (l = {}));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    o = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = u(5521),
                    m = u(3138);
                const E = ['args'];
                function p(e, t, u, n, r, a, i) {
                    try {
                        var l = e[a](i),
                            s = l.value;
                    } catch (e) {
                        return void u(e);
                    }
                    l.done ? t(s) : Promise.resolve(s).then(n, r);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    A = (function () {
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
                                    return new Promise(function (n, r) {
                                        var a = e.apply(t, u);
                                        function i(e) {
                                            p(a, n, r, i, l, 'next', e);
                                        }
                                        function l(e) {
                                            p(a, n, r, i, l, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    f = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    b = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                    return r;
                                })(t, E);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    D = () => b(l.CLOSE),
                    F = (e, t) => {
                        e.keyCode === d.n.ESCAPE && t();
                    };
                var C = u(7572);
                const v = r.instance,
                    h = {
                        DataTracker: a.Z,
                        ViewModel: C.Z,
                        ViewEventType: l,
                        NumberFormatType: s,
                        RealFormatType: o,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => b(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: D,
                        sendClosePopOverEvent: () => b(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            b(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, r = R.invalid('resId'), a) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                s = u.getBoundingClientRect(),
                                o = s.x,
                                c = s.y,
                                _ = s.width,
                                d = s.height,
                                E = {
                                    x: m.O.view.pxToRem(o) + i.x,
                                    y: m.O.view.pxToRem(c) + i.y,
                                    width: m.O.view.pxToRem(_),
                                    height: m.O.view.pxToRem(d),
                                };
                            b(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: g(E),
                                on: !0,
                                args: a,
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
                            F(e, D);
                        },
                        handleViewEvent: b,
                        onBindingsReady: A,
                        onLayoutReady: f,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const r = Object.prototype.toString.call(t[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < r.length; t++) u[n].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = h;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => a, Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t, u = 2) => systemLocale.getRealFormat(e, t, u),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    },
                    a = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            7332: (e, t, u) => {
                'use strict';
                u.d(t, { Gd: () => s, U0: () => o, kJ: () => i, os: () => a });
                var n = u(7902),
                    r = u(8071);
                const a = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    i = (e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name,
                    l = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    s = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, u) => {
                                const n = (0, r.M)(`${e}.${u}`, window);
                                return a(n) ? t(e, u, n) : `${e}.${u}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    o = (e) => {
                        const t = ((e) => {
                                const t = (0, n.F)(),
                                    u = t.caller,
                                    r = t.resId,
                                    a = window.__feature && window.__feature !== u && u ? `subViews.${u}` : '';
                                return { modelPrefix: a, modelPath: l(a, e || ''), resId: r };
                            })(),
                            u = t.modelPrefix,
                            i = e.split('.');
                        if (i.length > 0) {
                            const e = [i[0]];
                            return (
                                i.reduce((t, n) => {
                                    const i = (0, r.M)(l(u, `${t}.${n}`), window);
                                    return a(i) ? (e.push(i.id), `${t}.${n}.value`) : (e.push(n), `${t}.${n}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    };
            },
            3618: (e, t, u) => {
                'use strict';
                u.d(t, { w: () => m });
                var n = u(6483),
                    r = u.n(n),
                    a = u(3415),
                    i = u(4419),
                    l = u(7363),
                    s = u.n(l),
                    o = u(8055),
                    c = u(3310),
                    _ = u(131),
                    d = u(9053);
                const m = s().memo(
                    ({
                        text: e,
                        classMix: t,
                        onSizeChanged: u,
                        binding: n,
                        isTooltipEnable: m = !1,
                        isTruncationAvailable: E = !1,
                        customTooltipArgs: p,
                        targetId: g,
                        justifyContent: A = d.v2.FlexStart,
                        alignContent: f = d.v2.FlexStart,
                        truncateIdentify: b = d.YA,
                    }) => {
                        const D = (0, l.useRef)(null),
                            F = (0, l.useRef)({ height: 0, width: 0 }),
                            C = (0, l.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                            v = C[0],
                            h = C[1],
                            B = (0, l.useMemo)(() => (0, c.s)(e, n, { justifyContent: A }), [n, A, e]),
                            w = (0, l.useMemo)(() => {
                                if (m && v.isTruncated && (!n || !Object.values(n).find((e) => 'object' == typeof e)))
                                    return {
                                        args: Object.assign({ text: e }, p, {
                                            stringifyKwargs: n ? JSON.stringify(n) : '',
                                        }),
                                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                        targetId: g,
                                    };
                            }, [n, m, g, e, p, v.isTruncated]),
                            k = (0, l.useCallback)(
                                (e) => {
                                    ((F.current.width = e.contentRect.width),
                                        (F.current.height = e.contentRect.height));
                                    const t = (0, _.T)(D, B, F.current, b),
                                        n = t[0],
                                        r = t[1];
                                    (h({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), u && u(r));
                                },
                                [u, b, B],
                            ),
                            y = (0, l.useMemo)(() => ({ justifyContent: A, alignContent: f }), [f, A]);
                        return (
                            (0, i.y)(D, k, E),
                            s().createElement(
                                'div',
                                {
                                    className: r()(
                                        o.Z.base,
                                        t,
                                        o.Z.base__zeroPadding,
                                        E && o.Z.base__isTruncationAvailable,
                                    ),
                                    style: y,
                                },
                                s().createElement('div', { className: o.Z.unTruncated, ref: D }, B),
                                s().createElement(
                                    a.l,
                                    {
                                        tooltipArgs: w,
                                        className: r()(
                                            o.Z.tooltip,
                                            o.Z[`tooltip__justify-${A}`],
                                            o.Z[`tooltip__align-${f}`],
                                        ),
                                    },
                                    s().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                o.Z.truncated,
                                                !v.isTruncateFinished && E && o.Z.truncated__hide,
                                            ),
                                            style: y,
                                        },
                                        v.isTruncateFinished && E ? v.elementList : B,
                                    ),
                                ),
                            )
                        );
                    },
                );
            },
            3310: (e, t, u) => {
                'use strict';
                u.d(t, { s: () => m });
                var n = u(3649),
                    r = u(6799),
                    a = u(6960),
                    i = u(9053);
                const l = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    s = (e) => {
                        const t = [];
                        return (
                            (0, a.Z)(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var u;
                                    R.strings.settings.LANGUAGE_CODE().toLowerCase() === i.Co
                                        ? t.push(...((u = e), u.match(l) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    o = i.u6
                        ? (e) => {
                              const t = [];
                              return (
                                  (0, a.Z)(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(...s(e[0]));
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e, t) => {
                              const u = /[\s\u002d]/g;
                              let n = u.exec(e);
                              if (!n) return [e];
                              const r = [];
                              let a = 0;
                              for (; n; ) {
                                  const l = t.justifyContent === i.v2.FlexEnd ? n.index : u.lastIndex;
                                  (r.push(e.slice(a, l)), (a = l), (n = u.exec(e)));
                              }
                              return (a !== e.length && r.push(e.slice(a)), r);
                          },
                    c = (e, t = '', u) => {
                        const n = [];
                        return (
                            (0, a.Z)(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: i.kH.Word, colorTag: t, childList: o(e, u) });
                                },
                                (e) => {
                                    const u = e[0],
                                        r = i.aF[u.charAt(0)];
                                    r === i.kH.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: i.kH.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let u = 0; u < e.length - 1; u++)
                                                      t.push({
                                                          blockType: i.kH.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(u),
                                          )
                                        : n.push({ blockType: r, colorTag: t, childList: [u.replace(/\ufeff+/g, '')] });
                                },
                            ),
                            n
                        );
                    },
                    _ = (e, t, u = '', n) => {
                        const r = [],
                            l = e.replace(/(.)(、|。|ー)/g, '$1\ufeff$2');
                        return (
                            (0, a.Z)(
                                l,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...c(e, u, n));
                                },
                                (e) => {
                                    const a = e[1],
                                        l = void 0 === t[a] ? e[0] : t[a];
                                    'string' == typeof l || 'number' == typeof l
                                        ? r.push(...c(String(l), u, n))
                                        : r.push({ blockType: i.kH.Binding, colorTag: u, childList: [l] });
                                },
                            ),
                            r
                        );
                    },
                    d = (e, t) => {
                        if (!e) return [t];
                        const u = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === i.kH.NoBreakWrapper) (e.childList.push(n), u.push(e));
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            (e.childList.length > 0 && u.push(e),
                                u.push({ blockType: i.kH.NoBreakWrapper, colorTag: '', childList: [t, n] }));
                        }
                        return (t.childList.length > 0 && u.push(t), u);
                    },
                    m = (e, t = {}, u) => {
                        if (!e) return [];
                        const l = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === i.kH.NoBreakSymbol
                                        ? ((u = !0), t.push(...d(t.pop(), e)))
                                        : (u ? t.push(...d(t.pop(), e)) : t.push(e), (u = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, u) => {
                                const n = [];
                                return (
                                    (0, a.Z)(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(..._(e, t, '', u));
                                        },
                                        (e) => {
                                            n.push(..._(e[2] + e[3], t, e[1], u));
                                        },
                                    ),
                                    n
                                );
                            })((0, n.Eg)((0, n.z4)(e)), t, u),
                        );
                        return (0, r.w)(l);
                    };
            },
            6799: (e, t, u) => {
                'use strict';
                u.d(t, { w: () => i });
                var n = u(597),
                    r = u(9053);
                const a = (e, t, u) => {
                        const i = [];
                        return (
                            e.childList.forEach((l, s) => {
                                const o = `${u}_${s}`;
                                if ((0, r.dz)(l)) {
                                    const e = l,
                                        t = e.blockType,
                                        u = n.IY[t],
                                        r = a(e, u, o);
                                    i.push(...r);
                                } else i.push(t({ elementList: [l], textBlock: e, key: o }));
                            }),
                            i
                        );
                    },
                    i = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, u) => {
                                t.push(
                                    ...((e, t) => {
                                        const u = [],
                                            i = e.blockType,
                                            l = n.IY[i],
                                            s = a(e, l, t);
                                        return (
                                            i === r.kH.NoBreakWrapper
                                                ? u.push(l({ elementList: s, textBlock: e, key: `${t}` }))
                                                : u.push(...s),
                                            u
                                        );
                                    })(e, u),
                                );
                            }),
                            t
                        );
                    };
            },
            6960: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = (e, t, u, n) => {
                    let r = t.exec(e),
                        a = 0;
                    for (; r; ) (a !== r.index && u(e.slice(a, r.index)), n(r), (a = t.lastIndex), (r = t.exec(e)));
                    a !== e.length && u(e.slice(a));
                };
            },
            131: (e, t, u) => {
                'use strict';
                u.d(t, { T: () => c });
                var n = u(7363),
                    r = u.n(n),
                    a = u(9053);
                const i = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    l = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    s = (e, t, u) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = l(e, t),
                            r = e.textContent.length,
                            a = e.offsetWidth / r,
                            i = Math.ceil(n / a);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / a);
                            return n >= u ? [!0, u + i] : [!1, n];
                        }
                        const s = Math.max(u + i, 0);
                        return r < s ? [!1, 0] : [!0, s];
                    },
                    o = (e, t, u, n, i, l) => {
                        let c = -1,
                            _ = null;
                        for (let d = u; d >= 0; d--) {
                            const u = e[d],
                                m = Number(e[d].getAttribute(a.bF));
                            if (m === a.kH.LineBreak || m === a.kH.NewLine || m === a.kH.Binding) continue;
                            const E = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = s(u, n, i),
                                    a = e[0],
                                    o = e[1];
                                if (!a) {
                                    o > 0 && (i -= o);
                                    continue;
                                }
                                const m = E.slice(0, E.length - o) + l,
                                    p = t[d];
                                ((_ = r().cloneElement(p, p.props, m)), (c = d));
                                break;
                            }
                            {
                                const e = u.children,
                                    a = t[d],
                                    s = a.props.children,
                                    m = o(e, s, e.length - 1, n, i, l),
                                    p = m[0],
                                    g = m[1];
                                if (!(p < 0)) {
                                    const e = s.slice(0, p);
                                    ((_ = r().cloneElement(a, a.props, e, g)), (c = d));
                                    break;
                                }
                                i -= E.length;
                            }
                        }
                        return [c, _];
                    },
                    c = (e, t, u, n = a.YA) => {
                        const r = [...t],
                            s = e.current;
                        if (!s) return [r, !1];
                        const c = u.height,
                            _ = u.width,
                            d = s.lastElementChild;
                        if (!i(d, c) && l(d, _) <= 0) return [r, !1];
                        const m = s.children,
                            E = ((e, t) => {
                                let u = 0,
                                    n = e.length - 1;
                                for (; n - u >= 0; ) {
                                    const r = u + Math.ceil(0.5 * (n - u));
                                    i(e[r], t) ? (n = r - 1) : (u = r + 1);
                                }
                                return u - 1;
                            })(m, c);
                        if (E < 0) return [r, !1];
                        const p = o(m, r, E, _, n.length, n),
                            g = p[0],
                            A = p[1];
                        return (A && (r.splice(g, 1, A), r.splice(g + 1)), [r, !0]);
                    };
            },
            9053: (e, t, u) => {
                'use strict';
                let n, r, a;
                (u.d(t, {
                    Co: () => c,
                    YA: () => l,
                    aF: () => o,
                    bF: () => s,
                    dz: () => i,
                    kH: () => n,
                    u6: () => _,
                    v2: () => r,
                }),
                    (function (e) {
                        ((e[(e.Word = 0)] = 'Word'),
                            (e[(e.LineBreak = 1)] = 'LineBreak'),
                            (e[(e.NewLine = 2)] = 'NewLine'),
                            (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                            (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                            (e[(e.Binding = 5)] = 'Binding'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
                    })(a || (a = {})));
                const i = (e) => void 0 !== e.childList,
                    l = '...',
                    s = 'data-block-type',
                    o = { [a.NBSP]: n.NoBreakSymbol, [a.ZWNBSP]: n.NoBreakSymbol, [a.NEW_LINE]: n.LineBreak },
                    c = 'th',
                    _ = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', c].includes(R.strings.settings.LANGUAGE_CODE().toLowerCase());
            },
            597: (e, t, u) => {
                'use strict';
                u.d(t, { IY: () => d });
                var n = u(6483),
                    r = u.n(n),
                    a = u(7363),
                    i = u.n(a),
                    l = u(9053),
                    s = u(9627),
                    o = u(7629);
                const c = (e) => ({ color: `#${e}` }),
                    _ = ({ elementList: e, textBlock: t, key: u }) => {
                        const n = t.colorTag;
                        return n
                            ? s.Z[n]
                                ? i().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: r()(o.Z.word, s.Z[n]) },
                                      e,
                                  )
                                : i().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: o.Z.word, style: c(n) },
                                      e,
                                  )
                            : i().createElement(
                                  'span',
                                  { key: u, 'data-block-type': t.blockType, className: o.Z.word },
                                  e,
                              );
                    },
                    d = {
                        [l.kH.Word]: _,
                        [l.kH.NoBreakSymbol]: _,
                        [l.kH.Binding]: ({ elementList: e, textBlock: t, key: u }) =>
                            i().createElement(
                                'span',
                                { key: u, 'data-block-type': t.blockType },
                                e.map((e) => i().createElement(i().Fragment, { key: u }, e)),
                            ),
                        [l.kH.LineBreak]: ({ key: e }) =>
                            i().createElement('span', {
                                key: e,
                                'data-block-type': l.kH.LineBreak,
                                className: o.Z.lineBreak,
                            }),
                        [l.kH.NewLine]: ({ elementList: e, key: t }) =>
                            i().createElement(
                                'span',
                                { key: t, 'data-block-type': l.kH.NewLine, className: o.Z.newLine },
                                e,
                            ),
                        [l.kH.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            i().createElement(
                                'span',
                                { key: t, 'data-block-type': l.kH.NoBreakWrapper, className: o.Z.noBreakWrapper },
                                e,
                            ),
                    };
            },
            5298: (e, t, u) => {
                'use strict';
                u.d(t, { l: () => r });
                var n = u(776);
                const r = (e, t) => ({
                    isEnabled: e !== n.f.absent,
                    args: t,
                    contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                    decoratorId:
                        e === n.f.normal ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId') : void 0,
                    ignoreShowDelay: e === n.f.backport,
                    ignoreMouseClick: !0,
                });
            },
            7160: (e, t, u) => {
                'use strict';
                u.d(t, { Fs: () => r, qb: () => n });
                const n = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
                    r = (e) => -(Math.cos(Math.PI * e) - 1) / 2;
            },
            8018: (e, t, u) => {
                'use strict';
                u.d(t, { Gc: () => i, H$: () => l, Y4: () => s, gO: () => a, wP: () => r });
                var n = u(771);
                u(3649);
                (R.strings.common.percentValue(), R.strings.common.plusPercentValue());
                let r;
                !(function (e) {
                    ((e.Objective = 'objective'), (e.Possessive = 'possessive'));
                })(r || (r = {}));
                (R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body());
                let a;
                !(function (e) {
                    ((e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.CREW_POST_PROGRESSION_START = 'crew_pb_start'),
                        (e.CREW_POST_PROGRESSION_STOP = 'crew_pb_stop'),
                        (e.CREW_POST_PROGRESSION_REWARD = 'crew_postprog_reward'),
                        (e.CREW_RETRAIN_DOWN = 'crew_retrain_down'),
                        (e.CREW_RETRAIN_UP = 'crew_retrain_up'),
                        (e.CREW_PROFILE_UPGRADE = 'crew_profile_upgrade'),
                        (e.CREW_POSTPROG_WIDGET = 'crew_postprog_widget'),
                        (e.CREW_UNLOCK_MAJOR_PERK_START = 'crew_unlock_major_perk_start'),
                        (e.CREW_UNLOCK_MAJOR_PERK_STOP = 'crew_unlock_major_perk_stop'),
                        (e.CREW_SETTING_UP_MAJOR_PERK = 'crew_setting_up_major_perk'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy'));
                })(a || (a = {}));
                const i = (e, t = !1, u = null) => {
                    const n = t ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (u ? n.$dyn(`${u}Case`) : n).$dyn(e);
                };
                let l;
                !(function (e) {
                    ((e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained'));
                })(l || (l = {}));
                const s = (e) => (e === n.sU ? l.Untrained : e < n.yb ? l.Low : l.Normal);
            },
            6709: (e, t, u) => {
                'use strict';
                var n = u(7739),
                    r = u(7363),
                    a = u.n(r),
                    i = u(6483),
                    l = u.n(i),
                    s = u(926),
                    o = u.n(s),
                    c = u(5415);
                const _ = ['children', 'className'];
                function d() {
                    return (
                        (d =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                const m = {
                        [c.fd.ExtraSmall]: '',
                        [c.fd.Small]: o().SMALL_WIDTH,
                        [c.fd.Medium]: `${o().SMALL_WIDTH} ${o().MEDIUM_WIDTH}`,
                        [c.fd.Large]: `${o().SMALL_WIDTH} ${o().MEDIUM_WIDTH} ${o().LARGE_WIDTH}`,
                        [c.fd.ExtraLarge]:
                            `${o().SMALL_WIDTH} ${o().MEDIUM_WIDTH} ${o().LARGE_WIDTH} ${o().EXTRA_LARGE_WIDTH}`,
                    },
                    E = {
                        [c.Aq.ExtraSmall]: '',
                        [c.Aq.Small]: o().SMALL_HEIGHT,
                        [c.Aq.Medium]: `${o().SMALL_HEIGHT} ${o().MEDIUM_HEIGHT}`,
                        [c.Aq.Large]: `${o().SMALL_HEIGHT} ${o().MEDIUM_HEIGHT} ${o().LARGE_HEIGHT}`,
                        [c.Aq.ExtraLarge]:
                            `${o().SMALL_HEIGHT} ${o().MEDIUM_HEIGHT} ${o().LARGE_HEIGHT} ${o().EXTRA_LARGE_HEIGHT}`,
                    },
                    p = {
                        [c.cJ.ExtraSmall]: '',
                        [c.cJ.Small]: o().SMALL,
                        [c.cJ.Medium]: `${o().SMALL} ${o().MEDIUM}`,
                        [c.cJ.Large]: `${o().SMALL} ${o().MEDIUM} ${o().LARGE}`,
                        [c.cJ.ExtraLarge]: `${o().SMALL} ${o().MEDIUM} ${o().LARGE} ${o().EXTRA_LARGE}`,
                    },
                    g = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, _);
                        const r = (0, c.GS)(),
                            i = r.mediaWidth,
                            s = r.mediaHeight,
                            o = r.mediaSize;
                        return a().createElement('div', d({ className: l()(u, m[i], E[s], p[o]) }, n), t);
                    },
                    A = ['children'];
                const f = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, A);
                    return a().createElement(n.ZN, null, a().createElement(g, u, t));
                };
                var b = u(1533),
                    D = u.n(b);
                var F = u(2344),
                    C = u(8526),
                    v = u(9916);
                const h = /<link.*?>/g,
                    B = /\.\.\//g,
                    w = /<script.*?>/g,
                    k = 'default.css',
                    y = (e) => {
                        const t = e.match(B);
                        return t && t.join('');
                    },
                    S = () => {
                        for (
                            var e = 0, t = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < t.length;
                            e++
                        ) {
                            const u = t[e];
                            if (!u.href.includes(k)) return u.href;
                        }
                        return '';
                    },
                    x = (e) => {
                        const t = S(),
                            u = y(t);
                        let n,
                            r = e;
                        for (; null !== (n = w.exec(e)); ) {
                            const e = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const t = u + e[2].replace(B, '');
                                r = r.replace(e[2], t);
                            }
                        }
                        return r;
                    },
                    N = () => {
                        const e = [];
                        let t = !1;
                        const u = () => {
                            if (!e.length) return void (t = !1);
                            const n = e.shift();
                            n && ((t = !0), n().then(() => u()));
                        };
                        return {
                            add: (n) => {
                                (e.push(n), t || u());
                            },
                        };
                    },
                    L = 'SubView_base_df',
                    T = 'subViews.onChanged',
                    O = N(),
                    I = (0, r.memo)(({ id: e, fallback: t, onLoadCallback: u, mixClass: n }) => {
                        const i = (0, r.useState)(''),
                            s = i[0],
                            o = i[1],
                            c = (0, r.useMemo)(() => ({ __html: x(s) }), [s]),
                            _ = (0, r.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            d = (0, r.useState)(!1),
                            m = d[0],
                            E = d[1],
                            p = (0, r.useCallback)(
                                (e) => {
                                    e.includes(_) &&
                                        (E(!0), engine.off(T, p), window.subViews.removeChildChangedCallback(_));
                                },
                                [_],
                            ),
                            g = (0, r.useCallback)((e) => {
                                O.add(
                                    () =>
                                        new Promise((t) => {
                                            o(e);
                                            const u = new MutationObserver(() => {
                                                    (u.disconnect(), t());
                                                }),
                                                n = document.getElementById('root');
                                            n && u.observe(n, { childList: !0 });
                                        }),
                                );
                            }, []);
                        ((0, r.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const t = window.subViews.get(e),
                                    u = t.path;
                                let n;
                                if ((n = u.split('/').pop()))
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: e }, t)),
                                        engine.on(`subView:inject->${n}`, g),
                                        (({ path: e, name: t }) => {
                                            const u = new XMLHttpRequest();
                                            ((u.onreadystatechange = () => {
                                                4 === u.readyState &&
                                                    (200 === u.status
                                                        ? (0, v.Eu)().then(() => {
                                                              (console.info(`Sub view ${t} loaded: ${e}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${t}`,
                                                                      u.responseText,
                                                                  ));
                                                          })
                                                        : console.error(
                                                              `subView: status: ${u.status} - can't get bundle`,
                                                          ));
                                            }),
                                                u.open('GET', e),
                                                u.send());
                                        })({ name: n, path: u }),
                                        () => {
                                            (n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                engine.off(`subView:inject->${n}`, g),
                                                console.info(`Sub view ${n} is destroyed: ${u}`));
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(T, p);
                        }, [p, g, e, m]),
                            (0, r.useEffect)(
                                () => () => {
                                    s &&
                                        ((e) => {
                                            const t = y(S());
                                            let u;
                                            for (; null !== (u = h.exec(e)); ) {
                                                const e = u[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const u = t + e[1].replace(B, ''),
                                                        n = document.head.querySelector(`[href="${u}"]`);
                                                    n && document.head.removeChild(n);
                                                }
                                            }
                                        })(s);
                                },
                                [s],
                            ));
                        const A = l()(L, n);
                        if (s) {
                            let t;
                            return (
                                (t = document.getElementById('root')) && t.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let t;
                                    const u = S(),
                                        n = y(u);
                                    for (; null !== (t = h.exec(e)); ) {
                                        const e = t[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(k) && n) {
                                            const t = n + e[1].replace(B, ''),
                                                u = document.createElement('link');
                                            ((u.href = t), (u.rel = 'stylesheet'), document.head.appendChild(u));
                                        }
                                    }
                                })(s),
                                u && u(e),
                                a().createElement('div', { className: A, dangerouslySetInnerHTML: c })
                            );
                        }
                        return t ? a().createElement('div', { className: A }, a().createElement(t, null)) : null;
                    }),
                    M = 'subViews.onChanged',
                    P = '.html',
                    H = /^coui:\/\/gui\/.*/,
                    j = N(),
                    W = (e) => {
                        const t = document.createElement('script');
                        ((t.src = e), (t.defer = !0), document.head.appendChild(t));
                    };
                (0, r.memo)(({ id: e, bundleLevelPath: t = 3, mixClass: u, children: n }) => {
                    const i = (0, r.useRef)(null),
                        s = (0, r.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                        o = (0, r.useState)(!1),
                        c = o[0],
                        _ = o[1],
                        d = (0, r.useState)(!0),
                        m = d[0],
                        E = d[1],
                        p = (0, r.useCallback)(
                            (e) => {
                                e.includes(s) &&
                                    (_(!0), engine.off(M, p), window.subViews.removeChildChangedCallback(s));
                            },
                            [s],
                        ),
                        g = (0, r.useCallback)(
                            (e) => {
                                j.add(
                                    () =>
                                        new Promise((u) => {
                                            const n = new MutationObserver(() => {
                                                (E(!1), n.disconnect(), u());
                                            });
                                            if (i.current) {
                                                const u = document.getElementById('root');
                                                (u && u.setAttribute('id', 'bugSubView'),
                                                    i.current.setAttribute('id', 'root'));
                                                const r = document.createElement('link');
                                                ((r.href = e.replace(P, '.css')),
                                                    (r.rel = 'stylesheet'),
                                                    document.head.appendChild(r),
                                                    H.test(e) &&
                                                        W(
                                                            e
                                                                .split('/')
                                                                .slice(0, -t)
                                                                .concat(['vendors.js'])
                                                                .join('/')
                                                                .replace('/production/', '/production/lib/'),
                                                        ),
                                                    W(e.replace(P, '.js')),
                                                    n.observe(i.current, { childList: !0 }));
                                            }
                                        }),
                                );
                            },
                            [t],
                        );
                    return (
                        (0, r.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const t = window.subViews.get(e),
                                    u = t.path;
                                let n = u.split('/').pop();
                                if (n)
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: e }, t)),
                                        g(u),
                                        () => {
                                            (n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                console.info(`Sub view ${n} is destroyed: ${u}`));
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(M, p);
                        }, [p, g, e, c]),
                        a().createElement('div', { className: l()(L, u) }, m && n, a().createElement('div', { ref: i }))
                    );
                });
                var $ = u(5521);
                let z;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(z || (z = {}));
                var G = u(7727);
                const V = {
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
                let U, q;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(U || (U = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(q || (q = {})));
                const Z = ({
                    children: e,
                    size: t,
                    disabled: u,
                    mixClass: n,
                    onMouseEnter: i,
                    onMouseMove: s,
                    onMouseDown: o,
                    onMouseUp: c,
                    onMouseLeave: _,
                    onClick: d,
                    isFocused: m = !1,
                    type: E = U.primary,
                    soundHover: p = 'highlight',
                    soundClick: g = 'play',
                }) => {
                    const A = (0, r.useRef)(null),
                        f = (0, r.useState)(m),
                        b = f[0],
                        D = f[1],
                        F = (0, r.useState)(!1),
                        C = F[0],
                        v = F[1];
                    return (
                        (0, r.useEffect)(() => {
                            function e(e) {
                                b && null !== A.current && !A.current.contains(e.target) && D(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [b]),
                        (0, r.useEffect)(() => {
                            D(m);
                        }, [m]),
                        a().createElement(
                            'div',
                            {
                                ref: A,
                                className: l()(
                                    V.base,
                                    V[`base__${E}`],
                                    u && V.base__disabled,
                                    t && V[`base__${t}`],
                                    b && V.base__focus,
                                    C && V.base__highlightActive,
                                    n,
                                ),
                                onMouseEnter: function (e) {
                                    u || (null !== p && (0, G.G)(p), i && i(e));
                                },
                                onMouseMove: function (e) {
                                    s && s(e);
                                },
                                onMouseUp: function (e) {
                                    u || (c && c(e), v(!1));
                                },
                                onMouseDown: function (e) {
                                    if (u) return;
                                    const t = e.button === z.LEFT;
                                    (null !== g && t && (0, G.G)(g),
                                        o && o(e),
                                        m && (u || (A.current && (A.current.focus(), D(!0)))),
                                        t && v(!0));
                                },
                                onMouseLeave: function (e) {
                                    u || (_ && _(e), v(!1));
                                },
                                onClick: function (e) {
                                    u || (d && d(e));
                                },
                            },
                            E !== U.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: V.back }),
                                    a().createElement('span', { className: V.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: l()(V.state, V.state__default) },
                                a().createElement('span', { className: V.stateDisabled }),
                                a().createElement('span', { className: V.stateHighlightHover }),
                                a().createElement('span', { className: V.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: V.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                var Y = u(6349),
                    X = u(2056),
                    K = u(776),
                    J = u(5298);
                const Q = 'DialogTemplateButton_base_0b',
                    ee = 'DialogTemplateButton_label_83',
                    te = 'DialogTemplateButton_label__noTooltip_14',
                    ue = (0, r.memo)(
                        ({ onClick: e, isFocused: t, buttonID: u, isDisabled: n, label: i, tooltip: s, type: o }) => {
                            const c = (0, r.useCallback)(() => {
                                    e({ buttonID: u });
                                }, [e, u]),
                                _ = (0, r.useMemo)(() => (0, J.l)(s.type, { buttonID: u }), [s.type, u]),
                                d = l()(ee, s.type !== K.f.absent && te);
                            return a().createElement(
                                X.u,
                                _,
                                a().createElement(
                                    'div',
                                    { className: Q },
                                    a().createElement(
                                        Z,
                                        {
                                            size: q.medium,
                                            type: o,
                                            disabled: n,
                                            onClick: c,
                                            isFocused: t,
                                            soundClick: 'cancel' === u ? 'cancelcloseno' : 'play',
                                        },
                                        a().createElement(Y.l, { classMix: d, content: i || '' }),
                                    ),
                                ),
                            );
                        },
                    ),
                    ne = 'DialogTemplateButtonList_base_8e';
                function re() {
                    return (
                        (re =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        re.apply(this, arguments)
                    );
                }
                const ae = (0, r.memo)(() => {
                        const e = (0, F.tT)('model').onButtonClicked,
                            t = (0, F.tT)('model.focus'),
                            u = t.focusedIndex,
                            n = t.onTabPressed,
                            i = (0, F.tT)('model.buttons'),
                            l = (0, r.useCallback)(
                                (e) => {
                                    n({ shift: e.shiftKey });
                                },
                                [n],
                            );
                        (0, C.gd)($.n.TAB, l);
                        const s = (0, r.useCallback)(
                            (t) => {
                                if (u < 0 || u >= i.length) return;
                                const n = i[u].value;
                                t.altKey || n.isDisabled || e({ buttonID: n.buttonID });
                            },
                            [i, u, e],
                        );
                        return (
                            (0, C.gd)($.n.ENTER, s),
                            a().createElement(
                                'div',
                                { className: ne },
                                i.map(({ value: t }, n) =>
                                    a().createElement(ue, re({ key: t.buttonID, isFocused: n === u, onClick: e }, t)),
                                ),
                            )
                        );
                    }),
                    ie = 'DialogTemplateWrapper_base_f7',
                    le = 'DialogTemplateWrapper_base__hidden_5f',
                    se = 'DialogTemplateWrapper_subView_30';
                function oe() {
                    return (
                        (oe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        oe.apply(this, arguments)
                    );
                }
                const ce = (0, r.memo)(({ Template: e }) => {
                    const t = (0, F.tT)('model', F.DA.None),
                        u = t.onCloseClicked,
                        i = t.placeHolders,
                        s = t.background,
                        o = t.dimmerAlpha,
                        c = t.displayFlags;
                    (0, r.useEffect)(() => {
                        const e = document.getElementById('root');
                        e && e.setAttribute('id', 'stubDialogTemplate');
                    }, []);
                    const _ = c.map(({ value: e }) => e),
                        d = (0, r.useRef)(i.map(({ value: e }) => e.resourceID)),
                        m = (0, r.useState)(0 !== d.current.length),
                        E = m[0],
                        p = m[1],
                        g = (0, r.useCallback)(
                            (e = 'default') => {
                                u({ reason: e });
                            },
                            [u],
                        ),
                        A = (0, r.useCallback)(() => {
                            g('escape');
                        }, [g]);
                    (0, C.I9)(A);
                    const f = (0, r.useCallback)((e) => {
                            const t = d.current,
                                u = t.indexOf(e);
                            u > -1 && (t.splice(u, 1), 0 === t.length && p(!1));
                        }, []),
                        b = (0, r.useMemo)(() => {
                            const e = { backgroundColor: `rgba(19, 18, 16, ${o})` };
                            return (s && (e.backgroundImage = `url(${s})`), e);
                        }, [s, o]),
                        D = (0, r.useMemo)(
                            () =>
                                i.reduce(
                                    (e, { value: t }) => (
                                        (e[t.placeHolder] = a().createElement(I, {
                                            key: t.placeHolder,
                                            id: t.resourceID,
                                            mixClass: se,
                                            onLoadCallback: f,
                                        })),
                                        e
                                    ),
                                    {},
                                ),
                            [f, i],
                        ),
                        v = l()(ie, E && le);
                    return a().createElement(
                        n.ZN,
                        null,
                        a().createElement(
                            'div',
                            { className: v, style: b },
                            a().createElement(
                                e,
                                oe(
                                    { onClose: g, buttons: a().createElement(ae, null), displayFlags: _, isShown: !E },
                                    D,
                                ),
                            ),
                        ),
                    );
                });
                var _e = u(3403),
                    de = u(3138);
                const me = {
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
                    Ee = [
                        'caption',
                        'onClick',
                        'goto',
                        'classNames',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'side',
                        'type',
                        'soundHover',
                        'soundClick',
                    ];
                function pe() {
                    return (
                        (pe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        pe.apply(this, arguments)
                    );
                }
                const ge = (e) => {
                    let t = e.caption,
                        u = e.onClick,
                        n = e.goto,
                        i = e.classNames,
                        s = e.onMouseEnter,
                        o = e.onMouseLeave,
                        c = e.onMouseDown,
                        _ = e.onMouseUp,
                        d = e.side,
                        m = void 0 === d ? 'left' : d,
                        E = e.type,
                        p = void 0 === E ? 'back' : E,
                        g = e.soundHover,
                        A = void 0 === g ? 'highlight' : g,
                        f = e.soundClick,
                        b = void 0 === f ? 'play' : f,
                        D = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, Ee);
                    const F = (0, r.useCallback)(
                            (e) => {
                                (null == s || s(e), de.O.sound.play.sound(A));
                            },
                            [s, A],
                        ),
                        C = (0, r.useCallback)(
                            (e) => {
                                null == o || o(e);
                            },
                            [o],
                        ),
                        v = (0, r.useCallback)(
                            (e) => {
                                (null == c || c(e), de.O.sound.play.sound(b));
                            },
                            [c, b],
                        ),
                        h = (0, r.useCallback)(
                            (e) => {
                                null == _ || _(e);
                            },
                            [_],
                        );
                    return a().createElement(
                        'div',
                        pe(
                            {
                                className: l()(
                                    me.base,
                                    me[`base__${p}`],
                                    me[`base__${m}`],
                                    null == i ? void 0 : i.base,
                                ),
                                onMouseEnter: F,
                                onMouseLeave: C,
                                onMouseDown: v,
                                onMouseUp: h,
                                onClick: u,
                            },
                            D,
                        ),
                        'info' !== p && a().createElement('div', { className: me.shine }),
                        a().createElement(
                            'div',
                            {
                                className: l()(
                                    me.icon,
                                    me[`icon__${p}`],
                                    me[`icon__${m}`],
                                    null == i ? void 0 : i.icon,
                                ),
                            },
                            a().createElement('div', { className: l()(me.glow, null == i ? void 0 : i.glow) }),
                        ),
                        a().createElement(
                            'div',
                            { className: l()(me.caption, me[`caption__${p}`], null == i ? void 0 : i.caption) },
                            t,
                        ),
                        n && a().createElement('div', { className: l()(me.goto, null == i ? void 0 : i.goto) }, n),
                    );
                };
                let Ae;
                !(function (e) {
                    ((e.responsiveHeader = 'responsiveHeader'),
                        (e.responsiveClosePosition = 'responsiveClosePosition'),
                        (e.disableResponsiveContentPosition = 'disableResponsiveContentPosition'));
                })(Ae || (Ae = {}));
                var fe = u(5262),
                    be = u(3649);
                function De(e, t, u) {
                    const a = (0, r.useContext)(n.YN);
                    let i = Object.entries(a).filter(([e, t]) => !0 === t && e in fe.u);
                    return (
                        u && (i = i.filter((e) => u.includes(e[0]))),
                        e.reduce((e, u) => {
                            const n = i.map((e) =>
                                l()(t[((e, t) => e + '__' + t)(u, e[0])], t[((e, t) => e + (0, be.e)(t))(u, e[0])]),
                            );
                            return ((e[u] = l()(t[u], ...n)), e);
                        }, {})
                    );
                }
                const Fe = {
                        base: 'DefaultDialogTemplate_base_d2',
                        topRight: 'DefaultDialogTemplate_topRight_eb',
                        center: 'DefaultDialogTemplate_center_b4',
                        center__shown: 'DefaultDialogTemplate_center__shown_e1',
                        windowIn: 'DefaultDialogTemplate_windowIn_3b',
                        center__withIcon: 'DefaultDialogTemplate_center__withIcon_f9',
                        base__extraSmallHeight: 'DefaultDialogTemplate_base__extraSmallHeight_f5',
                        center__responsive: 'DefaultDialogTemplate_center__responsive_21',
                        base__smallHeight: 'DefaultDialogTemplate_base__smallHeight_52',
                        icon: 'DefaultDialogTemplate_icon_36',
                        icon__responsive: 'DefaultDialogTemplate_icon__responsive_e0',
                        title: 'DefaultDialogTemplate_title_c6',
                        title__responsive: 'DefaultDialogTemplate_title__responsive_6e',
                        content: 'DefaultDialogTemplate_content_22',
                        footer: 'DefaultDialogTemplate_footer_4e',
                        buttons: 'DefaultDialogTemplate_buttons_f7',
                        divider: 'DefaultDialogTemplate_divider_d5',
                        divider__noContent: 'DefaultDialogTemplate_divider__noContent_3f',
                        divider__noFooter: 'DefaultDialogTemplate_divider__noFooter_10',
                        closeBtn: 'DefaultDialogTemplate_closeBtn_5e',
                        closeBtn__responsive: 'DefaultDialogTemplate_closeBtn__responsive_49',
                    },
                    Ce = (0, r.memo)(
                        ({
                            isShown: e = !0,
                            classMix: t,
                            onClose: u,
                            icon: n,
                            topRight: i,
                            title: s,
                            content: o,
                            buttons: c,
                            footer: _,
                            displayFlags: d,
                            classNames: m,
                        }) => {
                            const E = ((e, t) => Object.keys(t).reduce((t, u) => ((t[u] = e.includes(u)), t), {}))(
                                    d,
                                    Ae,
                                ),
                                p = E.responsiveHeader,
                                g = E.responsiveClosePosition,
                                A = E.disableResponsiveContentPosition,
                                f = De(['base'], Fe),
                                b = (0, r.useCallback)(() => {
                                    u && u();
                                }, [u]),
                                D = l()(f.base, t),
                                F = l()(
                                    Fe.center,
                                    n && Fe.center__withIcon,
                                    e && Fe.center__shown,
                                    !A && Fe.center__responsive,
                                    null == m ? void 0 : m.center,
                                ),
                                C = l()(Fe.icon, p && Fe.icon__responsive, null == m ? void 0 : m.icon),
                                v = l()(Fe.title, p && Fe.title__responsive, null == m ? void 0 : m.title),
                                h = l()(Fe.closeBtn, g && Fe.closeBtn__responsive),
                                B = l()(
                                    Fe.divider,
                                    !o && Fe.divider__noContent,
                                    !_ && Fe.divider__noFooter,
                                    null == m ? void 0 : m.divider,
                                );
                            return a().createElement(
                                'div',
                                { className: D },
                                a().createElement(
                                    'div',
                                    { className: Fe.topRight },
                                    i,
                                    a().createElement(
                                        'div',
                                        { className: h },
                                        a().createElement(ge, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: b,
                                        }),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: F },
                                    n && a().createElement('div', { className: C }, n),
                                    s && a().createElement('div', { className: v }, s),
                                    o && a().createElement('div', { className: Fe.content }, o),
                                    a().createElement('div', { className: B }),
                                    _ && a().createElement('div', { className: Fe.footer }, _),
                                    c && a().createElement('div', { className: Fe.buttons }, c),
                                ),
                            );
                        },
                    );
                var ve = u(3215),
                    he = u(4598),
                    Be = u(9480),
                    we = u(3946);
                const ke = (e) => {
                        const t = {
                            skillsDataBefore: e.object('tankmanBefore.skillList'),
                            skillsDataAfter: e.object('tankmanAfter.skillList'),
                            majorSkillsBefore: e.array('tankmanBefore.skillList.majorSkills'),
                            bonusSkillsBefore: e.array('tankmanBefore.skillList.bonusSkills'),
                            majorSkillsAfter: e.array('tankmanAfter.skillList.majorSkills'),
                            bonusSkillsAfter: e.array('tankmanAfter.skillList.bonusSkills'),
                        };
                        return {
                            skillsDataBefore: (0, we.Om)(
                                () => ({
                                    skillsEfficiency: t.skillsDataBefore.get().skillsEfficiency,
                                    majorSkills: t.majorSkillsBefore.get(),
                                    bonusSkills: t.bonusSkillsBefore.get(),
                                }),
                                { equals: he.jv },
                            ),
                            skillsDataAfter: (0, we.Om)(
                                () => ({
                                    skillsEfficiency: t.skillsDataAfter.get().skillsEfficiency,
                                    majorSkills: t.majorSkillsAfter.get(),
                                    bonusSkills: t.bonusSkillsAfter.get(),
                                }),
                                { equals: he.jv },
                            ),
                        };
                    },
                    ye = (0, ve.q3)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives(['title', 'warning', 'isPriceSelected', 'hasRetrainDiscount']),
                                    {
                                        tankmen: e.array('tankmen', []),
                                        tankmanBefore: e.object('tankmanBefore'),
                                        tankmanAfter: e.object('tankmanAfter'),
                                        targetVehicle: e.object('targetVehicle'),
                                        roleChange: e.object('roleChange'),
                                        roles: e.array('roleChange.roles', []),
                                    },
                                ),
                                u = (0, we.Om)(() => Be.UI(t.roles.get(), he.yR), { equals: he.jv });
                            return Object.assign({}, t, { computes: Object.assign({ roles: u }, ke(e)) });
                        },
                        ({ externalModel: e }) => ({
                            roleChange: e.createCallbackNoArgs('onRoleCheckChanged'),
                            selectRole: e.createCallback((e) => ({ idx: e }), 'onRoleSelected'),
                        }),
                    ),
                    Se = ye[0],
                    xe = ye[1];
                let Ne, Re, Le;
                (!(function (e) {
                    ((e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(Ne || (Ne = {})),
                    (function (e) {
                        ((e.primary = 'primary'), (e.main = 'main'));
                    })(Re || (Re = {})),
                    (function (e) {
                        ((e.Center = 'center'), (e.Bottom = 'bottom'));
                    })(Le || (Le = {})));
                const Te = {
                        base: 'Checkbox_base_36',
                        base__disabled: 'Checkbox_base__disabled_08',
                        base__center: 'Checkbox_base__center_52',
                        base__bottom: 'Checkbox_base__bottom_28',
                        input: 'Checkbox_input_37',
                        base__mouseDown: 'Checkbox_base__mouseDown_45',
                        base__small: 'Checkbox_base__small_18',
                        base__medium: 'Checkbox_base__medium_12',
                        base__large: 'Checkbox_base__large_f7',
                        base__extraLarge: 'Checkbox_base__extraLarge_c9',
                        alertOverlay: 'Checkbox_alertOverlay_52',
                        base__alert: 'Checkbox_base__alert_b7',
                        blink: 'Checkbox_blink_5e',
                        base__checked: 'Checkbox_base__checked_a2',
                        inputHoverOverlay: 'Checkbox_inputHoverOverlay_36',
                        highlight: 'Checkbox_highlight_b8',
                        base__main: 'Checkbox_base__main_3a',
                        base__primary: 'Checkbox_base__primary_ab',
                        checkmark: 'Checkbox_checkmark_60',
                        fadeIn: 'Checkbox_fadeIn_1a',
                        label: 'Checkbox_label_bc',
                        labelContent: 'Checkbox_labelContent_64',
                    },
                    Oe = [
                        'id',
                        'isChecked',
                        'isDisabled',
                        'isAlert',
                        'size',
                        'type',
                        'soundHover',
                        'soundClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onClick',
                        'onChange',
                        'onFocus',
                        'onBlur',
                        'text',
                        'contentStyles',
                        'children',
                        'alignment',
                    ];
                function Ie() {
                    return (
                        (Ie =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ie.apply(this, arguments)
                    );
                }
                const Me = (e) => {
                    let t = e.id,
                        u = e.isChecked,
                        n = void 0 !== u && u,
                        i = e.isDisabled,
                        s = void 0 !== i && i,
                        o = e.isAlert,
                        c = void 0 !== o && o,
                        _ = e.size,
                        d = void 0 === _ ? Ne.medium : _,
                        m = e.type,
                        E = void 0 === m ? Re.primary : m,
                        p = e.soundHover,
                        g = void 0 === p ? 'highlight' : p,
                        A = e.soundClick,
                        f = void 0 === A ? 'play' : A,
                        b = e.onMouseEnter,
                        D = e.onMouseLeave,
                        F = e.onMouseUp,
                        C = e.onMouseDown,
                        v = e.onClick,
                        h = e.onChange,
                        B = e.onFocus,
                        w = e.onBlur,
                        k = e.text,
                        y = e.contentStyles,
                        S = e.children,
                        x = e.alignment,
                        N = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, Oe);
                    const R = (0, r.useState)(!1),
                        L = R[0],
                        T = R[1],
                        O = (0, r.useState)(!1),
                        I = (O[0], O[1]),
                        M = (0, r.useCallback)(
                            (e) => {
                                s || (h && h(), v && v(e));
                            },
                            [s, h, v],
                        ),
                        P = (0, r.useCallback)(
                            (e) => {
                                const t = e.button === z.LEFT;
                                s || (t && T(!0), t && C && C(e), f && (0, G.G)(f));
                            },
                            [s, C, f],
                        ),
                        H = (0, r.useCallback)(
                            (e) => {
                                s || (T(!1), F && F(e));
                            },
                            [s, F],
                        ),
                        j = (0, r.useCallback)(
                            (e) => {
                                s || (b && b(e), g && (0, G.G)(g));
                            },
                            [s, b, g],
                        ),
                        W = (0, r.useCallback)(
                            (e) => {
                                s || (T(!1), D && D(e));
                            },
                            [s, D],
                        ),
                        $ = (0, r.useCallback)(
                            (e) => {
                                s || (I(!0), B && B(e));
                            },
                            [s, B],
                        ),
                        V = (0, r.useCallback)(
                            (e) => {
                                s || (I(!1), w && w(e));
                            },
                            [s, w],
                        ),
                        U = a().createElement(
                            'div',
                            { className: Te.label },
                            a().createElement(
                                'div',
                                { className: l()(Te.labelContent, 's-labelContent'), style: y },
                                k || S,
                            ),
                        );
                    return a().createElement(
                        'div',
                        Ie(
                            {
                                id: t,
                                className: l()(Te.base, Te[`base__${d}`], Te[`base__${E}`], {
                                    [Te.base__checked]: n,
                                    [Te.base__disabled]: s,
                                    [Te.base__mouseDown]: L,
                                    [Te.base__alert]: c,
                                    [Te.base__center]: x === Le.Center,
                                    [Te.base__bottom]: x === Le.Bottom,
                                }),
                                onClick: M,
                                onMouseEnter: j,
                                onMouseLeave: W,
                                onMouseDown: P,
                                onMouseUp: H,
                                onFocus: $,
                                onBlur: V,
                            },
                            N,
                        ),
                        a().createElement(
                            'div',
                            { className: Te.input },
                            a().createElement('div', { className: Te.alertOverlay }),
                            a().createElement('div', { className: Te.inputHoverOverlay }),
                            a().createElement('div', { className: Te.highlight }),
                        ),
                        a().createElement('div', { className: Te.checkmark }),
                        ((k || S) && U) || null,
                    );
                };
                var Pe = u(6373);
                let He;
                !(function (e) {
                    ((e.Available = 'available'),
                        (e.Forced = 'forced'),
                        (e.CrewLock = 'crewLock'),
                        (e.FreeOperation = 'freeOperation'));
                })(He || (He = {}));
                var je = u(8018);
                const We = {
                    base: 'RoleIcon_base_51',
                    base__small: 'RoleIcon_base__small_68',
                    base__c_14x14: 'RoleIcon_base__c_14x14_8f',
                    base__c_18x18: 'RoleIcon_base__c_18x18_0b',
                    base__c_24x24_new: 'RoleIcon_base__c_24x24_new_fe',
                    base__c_24x24: 'RoleIcon_base__c_24x24_52',
                    base__c_30x30_red: 'RoleIcon_base__c_30x30_red_85',
                    base__c_30x30: 'RoleIcon_base__c_30x30_e9',
                    base__c_40x40: 'RoleIcon_base__c_40x40_99',
                    base__medium: 'RoleIcon_base__medium_5d',
                    base__white: 'RoleIcon_base__white_2a',
                    base__big: 'RoleIcon_base__big_b4',
                };
                let $e;
                !(function (e) {
                    ((e.small = 'small'),
                        (e.c14x14 = 'c_14x14'),
                        (e.c18x18 = 'c_18x18'),
                        (e.c24x24 = 'c_24x24'),
                        (e.c24x24_new = 'c_24x24_new'),
                        (e.c30x30 = 'c_30x30'),
                        (e.c40x40 = 'c_40x40'),
                        (e.c30x30_red = 'c_30x30_red'),
                        (e.medium = 'medium'),
                        (e.white = 'white'),
                        (e.big = 'big'));
                })($e || ($e = {}));
                const ze = a().memo(function ({ role: e, size: t = $e.c30x30, className: u }) {
                        const n = (0, r.useMemo)(() => {
                            try {
                                var u;
                                const n =
                                    null == (u = R.images.gui.maps.icons.tankmen.roles.$dyn(t))
                                        ? void 0
                                        : u.$dyn((0, be.BN)(e));
                                if (!n) throw Error;
                                return { backgroundImage: `url(${n})` };
                            } catch (t) {
                                console.error('Cant find resource in RoleIcon: ', e);
                            }
                        }, [e, t]);
                        return a().createElement('div', { style: n, className: l()(We.base, We[`base__${t}`], u) });
                    }),
                    Ge = 'Role_base_8a',
                    Ve = 'Role_bg_2d',
                    Ue = 'Role_roleIcon_a2',
                    qe = 'Role_base__selected_4d',
                    Ze = 'Role_warning_49',
                    Ye = a().memo(({ iconName: e, rolesCount: t, isTaken: u, isSelected: n, onClick: r }) =>
                        a().createElement(
                            'div',
                            {
                                onClick: () => {
                                    n || (G.$.playClick(), r());
                                },
                                onMouseEnter: () => !n && G.$.playHighlight(),
                                className: l()(Ge, n && qe),
                            },
                            a().createElement('div', { className: Ve }),
                            a().createElement(ze, { role: e, className: Ue }),
                            u &&
                                a().createElement(
                                    Pe.i,
                                    {
                                        header: R.strings.tooltips.retrain.changeRole.warning.header(),
                                        body: (0, be.uF)(R.strings.tooltips.retrain.changeRole.warning.body(), {
                                            num: t,
                                        }),
                                    },
                                    a().createElement('div', { className: Ze }),
                                ),
                        ),
                    ),
                    Xe = 'RoleChange_base_19',
                    Ke = 'RoleChange_base__checked_71',
                    Je = 'RoleChange_forced_83',
                    Qe = 'RoleChange_lockIcon_59',
                    et = 'RoleChange_tooltipBox_8c',
                    tt = 'RoleChange_labelDisable_e0',
                    ut = 'RoleChange_roles_e8',
                    nt = 'RoleChange_roles__visible_5d',
                    rt = (e, t) => {
                        var u;
                        return e === He.Forced
                            ? (0, be.uF)(R.strings.tooltips.retrain.changeRole.disable.forced.header(), {
                                  role: (0, je.Gc)(t.role, t.isFemale, je.wP.Objective),
                              })
                            : null == (u = R.strings.tooltips.retrain.changeRole.disable.$dyn(e))
                              ? void 0
                              : u.header();
                    },
                    at = (0, _e.Pi)(() => {
                        var e;
                        const t = xe(),
                            u = t.model,
                            n = t.controls,
                            r = u.roleChange.get(),
                            i = r.isChecked,
                            s = r.disableState,
                            o = r.selectedIdx,
                            c = s !== He.Available;
                        return a().createElement(
                            'div',
                            { className: l()(Xe, i && Ke) },
                            a().createElement(
                                Pe.i,
                                {
                                    isEnabled: c,
                                    ignoreMouseClick: !0,
                                    header: rt(s, u.tankmanBefore.get()),
                                    body:
                                        null == (e = R.strings.tooltips.retrain.changeRole.disable.$dyn(s))
                                            ? void 0
                                            : e.body(),
                                },
                                s === He.Forced
                                    ? a().createElement(
                                          'div',
                                          { className: Je },
                                          a().createElement('div', { className: Qe }),
                                          R.strings.dialogs.retrain.changeRole(),
                                      )
                                    : a().createElement(
                                          'div',
                                          { className: et },
                                          a().createElement(
                                              Me,
                                              {
                                                  isChecked: i,
                                                  isDisabled: c,
                                                  size: Ne.medium,
                                                  type: Re.main,
                                                  onChange: n.roleChange,
                                              },
                                              a().createElement(
                                                  'div',
                                                  { className: l()(c && tt) },
                                                  R.strings.dialogs.retrain.changeRole(),
                                              ),
                                          ),
                                      ),
                            ),
                            a().createElement(
                                'div',
                                { className: l()(ut, i && nt) },
                                u.computes
                                    .roles()
                                    .map((e, t) =>
                                        a().createElement(Ye, {
                                            key: e.iconName,
                                            iconName: e.iconName,
                                            rolesCount: e.rolesCount,
                                            isTaken: e.isTaken,
                                            isSelected: t === o,
                                            onClick: () => n.selectRole(t),
                                        }),
                                    ),
                            ),
                        );
                    }),
                    it = 'FooterContent_discount_36',
                    lt = 'FooterContent_infoIcon_3c',
                    st = 'FooterContent_label_20',
                    ot = 'FooterContent_emptyFooter_af',
                    ct = (0, r.memo)(({ isRoleChangeVisible: e, hasRetrainDiscount: t }) =>
                        e
                            ? a().createElement(at, null)
                            : t
                              ? a().createElement(
                                    'div',
                                    { className: it },
                                    a().createElement('div', { className: lt }),
                                    a().createElement(
                                        'div',
                                        { className: st },
                                        R.strings.dialogs.retrain.discountLabel(),
                                    ),
                                )
                              : a().createElement('div', { className: ot }),
                    ),
                    _t = () => {
                        const e = (0, r.useState)(de.O.view.getScale()),
                            t = e[0],
                            u = e[1];
                        return (
                            (0, r.useEffect)(() => {
                                const e = () => {
                                    u(de.O.view.getScale());
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
                    };
                var dt = u(7030),
                    mt = u(7160);
                const Et = 'WarningText_base_10',
                    pt = 'WarningText_alertIcon_8f',
                    gt = (0, r.memo)(({ showIcon: e = !0, className: t, children: u }) =>
                        a().createElement(
                            'div',
                            { className: l()(Et, t) },
                            e && a().createElement('div', { className: pt }),
                            u,
                        ),
                    );
                var At = u(6228);
                const ft = 'RetrainPriceList_base_68',
                    bt = 'RetrainPriceList_warningWraper_c0',
                    Dt = 'RetrainPriceList_warning_60',
                    Ft = (0, r.memo)(({ warning: e, className: t }) => {
                        const u = Boolean(e),
                            n = _t(),
                            r = (0, dt.useSpring)(
                                () =>
                                    u
                                        ? {
                                              from: { opacity: 0, height: 0 },
                                              to: [{ height: 40 * n }, { opacity: 1 }],
                                              config: { duration: 300, easing: mt.Fs },
                                          }
                                        : {
                                              from: { opacity: 1, height: 40 * n },
                                              to: [{ height: 0 }, { opacity: 0 }],
                                              config: { duration: 300, easing: mt.Fs },
                                          },
                                [u],
                            )[0];
                        return a().createElement(
                            'div',
                            { className: l()(ft, t) },
                            a().createElement(
                                dt.animated.div,
                                { className: bt, style: r },
                                u && a().createElement(gt, { className: Dt }, e),
                            ),
                            a().createElement(At.u, null),
                        );
                    }),
                    Ct = 'Divider_base_0a',
                    vt = 'Divider_line_c9',
                    ht = a().memo(function ({ className: e }) {
                        return a().createElement(
                            'div',
                            { className: l()(Ct, e) },
                            a().createElement('div', { className: vt }),
                        );
                    }),
                    Bt = {
                        base: 'TankmanIcon_base_f9',
                        base__big: 'TankmanIcon_base__big_98',
                        base__small: 'TankmanIcon_base__small_b2',
                        base__barracks: 'TankmanIcon_base__barracks_62',
                        base__special: 'TankmanIcon_base__special_3f',
                        base__c_204x256: 'TankmanIcon_base__c_204x256_97',
                    };
                let wt;
                !(function (e) {
                    ((e.c158x118 = 'big'),
                        (e.c100x60 = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256'));
                })(wt || (wt = {}));
                const kt = (0, r.memo)(function ({ name: e, size: t = wt.c100x60, classMix: u, isSkin: n = !1 }) {
                        let r = R.images.gui.maps.icons.tankmen.icons.$dyn(t);
                        n && (r = r.$dyn('crewSkins'));
                        const i = r.$dyn((0, be.BN)(e));
                        return (
                            i ||
                                console.error(
                                    `Can't find ${(0, be.BN)(e)} in R.images.gui.maps.icons.tankmen.icons.${t}${n ? '.crewSkins' : ''}`,
                                ),
                            a().createElement('div', {
                                style: { backgroundImage: `url(${i})` },
                                className: l()(Bt.base, Bt[`base__${t}`], u),
                            })
                        );
                    }),
                    yt = 'Tankman_base_82',
                    St = 'Tankman_tankman_93',
                    xt = 'Tankman_divider_5a',
                    Nt = (0, r.memo)(({ iconName: e, isInSkin: t }) =>
                        a().createElement(
                            'div',
                            { className: yt },
                            a().createElement(kt, { name: e, size: wt.c158x118, isSkin: t, classMix: St }),
                            a().createElement(ht, { className: xt }),
                        ),
                    );
                var Rt = u(3618),
                    Lt = u(9053);
                var Tt = u(9690);
                const Ot = (e, t) => e.split(',').includes(t),
                    It = {
                        base: 'TankName_base_f1',
                        base__sizeMedium: 'TankName_base__sizeMedium_3a',
                        base__sizBig: 'TankName_base__sizBig_a9',
                        base__typeWhite: 'TankName_base__typeWhite_32',
                        base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                        base__typeWhiteOrange: 'TankName_base__typeWhiteOrange_ac',
                        base__typeColored: 'TankName_base__typeColored_bc',
                        level: 'TankName_level_bb',
                        type: 'TankName_type_3c',
                        type__extraSmall: 'TankName_type__extraSmall_80',
                        type__medium: 'TankName_type__medium_ff',
                        type__big: 'TankName_type__big_9a',
                        type__eliteExtraSmall: 'TankName_type__eliteExtraSmall_74',
                        type__eliteMedium: 'TankName_type__eliteMedium_10',
                        type__eliteBig: 'TankName_type__eliteBig_ac',
                        name: 'TankName_name_56',
                        premiumIGR: 'TankName_premiumIGR_25',
                    };
                let Mt, Pt;
                (!(function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big'));
                })(Mt || (Mt = {})),
                    (function (e) {
                        ((e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange'));
                    })(Pt || (Pt = {})));
                const Ht = ({
                    isElite: e,
                    vehicleName: t,
                    vehicleShortName: u,
                    vehicleType: n,
                    vehicleLvl: r,
                    tags: i = '',
                    size: s = Mt.extraSmall,
                    type: o = Pt.colored,
                    className: c,
                    classNames: _,
                    isShortName: d = !1,
                }) => {
                    const m = `${(0, be.BN)(n)}${e ? '_elite' : ''}`,
                        E = R.images.gui.maps.icons.vehicleTypes.big.$dyn(m);
                    return a().createElement(
                        'div',
                        {
                            className: l()(
                                It.base,
                                It[`base__size${(0, be.e)(s)}`],
                                It[`base__type${(0, be.e)(o)}`],
                                c,
                            ),
                        },
                        a().createElement(
                            'div',
                            { className: l()(It.level, null == _ ? void 0 : _.level) },
                            (0, Tt.HG)(r),
                        ),
                        a().createElement('div', {
                            className: l()(
                                It.type,
                                e && It[`type__elite${(0, be.e)(s)}`],
                                It[`type__${s}`],
                                null == _ ? void 0 : _.typeIcon,
                            ),
                            style: n ? { backgroundImage: `url(${E})` } : void 0,
                        }),
                        Ot(i, 'premiumIGR') && a().createElement('div', { className: It.premiumIGR }),
                        a().createElement('div', { className: l()(It.name, null == _ ? void 0 : _.name) }, d ? u : t),
                    );
                };
                var jt = u(771),
                    Wt = u(7078);
                const $t = {
                    base: 'EfficiencyIndicator_base_34',
                    base__big: 'EfficiencyIndicator_base__big_a1',
                    base__large: 'EfficiencyIndicator_base__large_dc',
                    base__untrained: 'EfficiencyIndicator_base__untrained_cd',
                    percent: 'EfficiencyIndicator_percent_6b',
                    percent__full: 'EfficiencyIndicator_percent__full_30',
                    icon: 'EfficiencyIndicator_icon_da',
                };
                let zt;
                !(function (e) {
                    ((e.Normal = 'normal'), (e.Big = 'big'), (e.Large = 'large'));
                })(zt || (zt = {}));
                const Gt = (0, r.memo)(
                        ({
                            efficiencyValue: e,
                            tankmanID: t = jt.y$,
                            className: u,
                            targetId: n = R.views.lobby.crew.widgets.CrewWidget('resId'),
                            size: r = zt.Normal,
                        }) => {
                            const i = e === jt.sU,
                                s = i
                                    ? { tooltipId: 'crewSkillUntrained' }
                                    : { tooltipId: 'skillsEfficiency', skillEfficiency: e, tankmanID: t };
                            return a().createElement(
                                Wt.t,
                                { targetId: n, args: s, isEnabled: t !== jt.y$ },
                                a().createElement(
                                    'div',
                                    { className: l()($t.base, $t[`base__${r}`], i && $t.base__untrained, u) },
                                    i
                                        ? a().createElement('div', { className: $t.icon })
                                        : a().createElement(
                                              'div',
                                              { className: l()($t.percent, e === jt.yb && $t.percent__full) },
                                              (0, be.dL)(v.Z5.getNumberFormat(100 * e, v.B3.INTEGRAL)),
                                          ),
                                ),
                            );
                        },
                    ),
                    Vt = a().memo(function ({ blinkStyle: e, isEnabled: t, children: u }) {
                        return a().createElement(dt.animated.div, { style: t && e ? e : void 0 }, u);
                    }),
                    Ut = 'AcceleratedTrainingIcon_base_4f',
                    qt = 'AcceleratedTrainingIcon_icon_45',
                    Zt = (0, r.memo)(({ classMix: e, targetId: t }) =>
                        a().createElement(
                            Pe.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                                body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                                targetId: t,
                            },
                            a().createElement(
                                'div',
                                { className: l()(Ut, e) },
                                a().createElement('div', { className: qt }),
                            ),
                        ),
                    );
                let Yt, Xt, Kt, Jt, Qt, eu, tu;
                (!(function (e) {
                    ((e.None = 'none'),
                        (e.Default = 'default'),
                        (e.Overlap = 'overlap'),
                        (e.ExtraOverlap = 'extraOverlap'));
                })(Yt || (Yt = {})),
                    (function (e) {
                        ((e.None = 'none'),
                            (e.SlideOutAndBlink = 'slideOutAndBlink'),
                            (e.SlideOut = 'slideOut'),
                            (e.FadeIn = 'fadeIn'),
                            (e.Blink = 'blink'),
                            (e.ScaleUp = 'ScaleUp'));
                    })(Xt || (Xt = {})),
                    (function (e) {
                        ((e.None = 'none'),
                            (e.NoMargins = 'noMargins'),
                            (e.ReducedMargins = 'reducedMargins'),
                            (e.OnlyLearningOverlap = 'onlyLearningOverlap'),
                            (e.Overlap = 'overlap'),
                            (e.ExtraOverlap = 'extraOverlap'),
                            (e.ExtraOverlapWithLevel = 'extraOverlapWithLevel'),
                            (e.ExtraOverlapWithEfficiency = 'extraOverlapWithEfficiency'),
                            (e.ExtraOverlapWithLevelAndEfficiency = 'extraOverlapWithLevelAndEfficiency'));
                    })(Kt || (Kt = {})),
                    (function (e) {
                        ((e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red'));
                    })(Jt || (Jt = {})),
                    (function (e) {
                        ((e.c24x24 = 'c_24x24'), (e.c44x44 = 'c_44x44'));
                    })(Qt || (Qt = {})),
                    (function (e) {
                        ((e.Major = 'major'), (e.Bonus = 'bonus'));
                    })(eu || (eu = {})),
                    (function (e) {
                        ((e.Learned = 'learned'), (e.Learning = 'learning'));
                    })(tu || (tu = {})));
                const uu = (e) => (e.level < jt.I ? tu.Learning : tu.Learned),
                    nu = (e) => Be.dF(e, (e) => e.level === jt.I),
                    ru = ({
                        name: e,
                        roleName: t,
                        level: u,
                        customName: n,
                        skillType: r,
                        skillIndex: a,
                        tooltipData: i,
                    }) => {
                        const l = { targetId: i.targetId, isEnabled: i.isEnabled };
                        return e === jt.jw
                            ? r === eu.Major
                                ? Object.assign(
                                      {
                                          contentId: R.views.lobby.crew.tooltips.EmptySkillTooltip('resId'),
                                          args: Object.assign({ tankmanID: i.tankmanID, skillIndex: a }, i.args),
                                      },
                                      l,
                                  )
                                : Object.assign(
                                      {
                                          header: R.strings.crew.matrix.skillTooltip.bonus.available.header(),
                                          body: R.strings.crew.matrix.skillTooltip.bonus.available.text(),
                                      },
                                      l,
                                  )
                            : Object.assign(
                                  {
                                      contentId:
                                          R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                              'resId',
                                          ),
                                      args: Object.assign(
                                          {
                                              tooltipId: 'crewPerkGf',
                                              tankmanID: i.tankmanID,
                                              skillName: e,
                                              roleName: t,
                                              isBonus: r === eu.Bonus,
                                              level: u,
                                              customName: n,
                                              skillIndex: a,
                                          },
                                          i.args,
                                      ),
                                  },
                                  l,
                              );
                    },
                    au = (e, t) => (e === Qt.c44x44 ? zt.Large : t ? zt.Big : zt.Normal),
                    iu = (e, t) => {
                        const u = Be.U2(e, t);
                        return null == u ? void 0 : u.name;
                    },
                    lu = (e, t) => {
                        const u = Be.U2(e, t);
                        return null == u ? void 0 : u.level;
                    },
                    su = 33,
                    ou = 0,
                    cu = !0,
                    _u = 'play';
                const du = [
                    'width',
                    'height',
                    'getImageSource',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'lastFrameIndex',
                    'loop',
                    'state',
                    'onAnimationDone',
                    'onAnimationComplete',
                    'poster',
                ];
                function mu() {
                    return (
                        (mu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        mu.apply(this, arguments)
                    );
                }
                const Eu = (0, r.memo)(function (e) {
                        let t = e.width,
                            u = e.height,
                            n = e.getImageSource,
                            i = e.frameCount,
                            l = e.onAnimate,
                            s = e.frameTime,
                            o = void 0 === s ? su : s,
                            c = e.initialFrameIndex,
                            _ = void 0 === c ? ou : c,
                            d = e.lastFrameIndex,
                            m = void 0 === d ? i - 1 : d,
                            E = e.loop,
                            p = void 0 === E ? cu : E,
                            g = e.state,
                            A = void 0 === g ? _u : g,
                            f = e.onAnimationDone,
                            b = e.onAnimationComplete,
                            D = e.poster,
                            F = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, du);
                        const C = (0, r.useRef)(null);
                        return (
                            (0, r.useEffect)(() => {
                                const e = C.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    u = (u) => {
                                        (t.clearRect(0, 0, e.width, e.height), t.drawImage(u.img, -u.x, -u.y));
                                    };
                                switch (A) {
                                    case 'play':
                                        return (function () {
                                            const e = Au(_, m, n),
                                                t = pu(_, m),
                                                r = window.setInterval(() => {
                                                    const n = t(),
                                                        a = e.get(n);
                                                    a
                                                        ? (null == l || l(n, a),
                                                          u(a),
                                                          n === m &&
                                                              (null == b || b(),
                                                              p || (null == f || f(), window.clearInterval(r))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, o);
                                            return () => window.clearInterval(r);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === _ && D ? { path: D, x: 0, y: 0 } : n(_),
                                                t = new Image();
                                            t.src = e.path;
                                            const r = () => u(gu(e, t));
                                            return (
                                                t.addEventListener('load', r),
                                                () => t.removeEventListener('load', r)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [o, n, _, m, p, l, b, f, D, A]),
                            a().createElement('canvas', mu({}, F, { width: t, height: u, ref: C }))
                        );
                    }),
                    pu = (e, t) => {
                        let u = e;
                        return () => {
                            const n = u;
                            return ((u += 1), u > t && (u = e), n);
                        };
                    },
                    gu = (e, t) => Object.assign({}, e, { img: t }),
                    Au = (e, t, u) => {
                        const n = new Map(),
                            r = {};
                        for (let a = e; a <= t; a++) {
                            const e = u(a),
                                t = r[e.path];
                            if (t) n.set(a, gu(e, t));
                            else {
                                const t = new Image();
                                ((r[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${a})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(a, gu(e, t)));
                            }
                        }
                        return n;
                    };
                function fu(e) {
                    const t = e.chunk,
                        u = t.rows * t.columns;
                    return (n) => {
                        const r = n % u,
                            a = (r % t.columns) * e.width,
                            i = Math.trunc(r / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(n / u)), x: a, y: i };
                    };
                }
                function bu(e) {
                    return (t) => `${e}${t}`;
                }
                const Du = [
                    'width',
                    'height',
                    'getSrcByFrame',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'loop',
                    'state',
                    'onAnimationComplete',
                    'revers',
                ];
                function Fu() {
                    return (
                        (Fu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Fu.apply(this, arguments)
                    );
                }
                let Cu;
                !(function (e) {
                    ((e.Play = 'play'), (e.Stop = 'stop'));
                })(Cu || (Cu = {}));
                const vu = (e, t, u) => {
                        const n = new Image();
                        ((n.src = u(t)), e.push(n));
                    },
                    hu =
                        ((0, r.memo)((e) => {
                            let t = e.width,
                                u = e.height,
                                n = e.getSrcByFrame,
                                i = e.frameCount,
                                l = e.onAnimate,
                                s = void 0 === l ? () => {} : l,
                                o = e.frameTime,
                                c = void 0 === o ? 33 : o,
                                _ = e.initialFrameIndex,
                                d = void 0 === _ ? 0 : _,
                                m = e.loop,
                                E = void 0 === m || m,
                                p = e.state,
                                g = void 0 === p ? Cu.Play : p,
                                A = e.onAnimationComplete,
                                f = void 0 === A ? () => {} : A,
                                b = e.revers,
                                D = void 0 !== b && b,
                                F = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                    return r;
                                })(e, Du);
                            const C = (0, r.useRef)(null);
                            return (
                                (0, r.useEffect)(() => {
                                    const e = C.current;
                                    if (!e) return;
                                    const r = i - 1,
                                        a = e.getContext('2d'),
                                        l = (n) => {
                                            (a.clearRect(0, 0, e.width, e.height), a.drawImage(n, 0, 0, t, u));
                                        };
                                    if ('stop' === g) {
                                        const e = n(0),
                                            t = new Image();
                                        t.src = e;
                                        const u = () => l(t);
                                        return (t.addEventListener('load', u), () => t.removeEventListener('load', u));
                                    }
                                    const o = ((e, t, u) => {
                                            const n = [];
                                            if (u) for (let u = e; u >= 0; u--) vu(n, u, t);
                                            else for (let u = 0; u < e; u++) vu(n, u, t);
                                            return n;
                                        })(i, n, D),
                                        _ = ((e, t = 0) => {
                                            let u = t;
                                            return () => {
                                                const t = u;
                                                return ((u += 1), u > e && (u = 0), t);
                                            };
                                        })(r, d),
                                        m = setInterval(() => {
                                            const e = _(),
                                                t = o[e];
                                            (l(o[e]), s(e, t), e === r && (f(), E || clearInterval(m)));
                                        }, c);
                                    return () => clearInterval(m);
                                }, [i, c, n, u, d, E, s, f, g, t, D]),
                                a().createElement('canvas', Fu({}, F, { width: t, height: u, ref: C }))
                            );
                        }),
                        {
                            base: 'AnimatedLostSkill_base_55',
                            base__c_24x24: 'AnimatedLostSkill_base__c_24x24_d5',
                            base__c_44x44: 'AnimatedLostSkill_base__c_44x44_72',
                            icon: 'AnimatedLostSkill_icon_d4',
                        }),
                    Bu = a().memo(function ({ type: e, index: t, totalAmount: u, className: n, size: i }) {
                        const s = (0, r.useState)(Cu.Stop),
                            o = s[0],
                            c = s[1],
                            _ = _t(),
                            d =
                                i === Qt.c44x44
                                    ? ((e) => ({
                                          width: 96,
                                          height: 96,
                                          frameCount: 24,
                                          chunk: { count: 1, rows: 2, columns: 21 },
                                          getChunkPath: bu(
                                              `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_big_${e}_`,
                                          ),
                                      }))(e)
                                    : ((e) => ({
                                          width: 64,
                                          height: 64,
                                          frameCount: 24,
                                          chunk: { count: 1, rows: 1, columns: 24 },
                                          getChunkPath: bu(
                                              `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_small_${e}_`,
                                          ),
                                      }))(e),
                            m = fu(d),
                            E = i === Qt.c44x44 ? 60 : 36,
                            p = (0, dt.useSpring)(
                                () => ({
                                    from: { x: 0 },
                                    to: { x: de.O.view.remToPx(E) },
                                    config: { duration: 300, easing: mt.qb },
                                    delay: 600 - 100 * t,
                                }),
                                [t, E, _],
                            )[0];
                        return (
                            (0, r.useEffect)(() => {
                                const e = setTimeout(() => c(Cu.Play), 100 * (u - 1) - 100 * t);
                                return () => clearTimeout(e);
                            }, [t, u]),
                            a().createElement(
                                Pe.i,
                                { body: R.strings.dialogs.perksReset.lostSkill.tooltip.description() },
                                a().createElement(
                                    dt.animated.div,
                                    { style: p, className: l()(hu.base, hu[`base__${i}`], n) },
                                    a().createElement(
                                        'div',
                                        { className: hu.icon },
                                        a().createElement(Eu, {
                                            width: d.width,
                                            height: d.height,
                                            frameCount: d.frameCount,
                                            getImageSource: m,
                                            loop: !1,
                                            state: o,
                                            style: { transform: `scale(${_})` },
                                        }),
                                    ),
                                ),
                            )
                        );
                    }),
                    wu = 'AnimatedNewSkill_base_0f';
                function ku(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return yu(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return yu(e, t);
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
                function yu(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const Su = new Map();
                let xu = null;
                const Nu = () => {
                        Su.size
                            ? xu ||
                              (xu = window.setInterval(() => {
                                  for (var e, t = ku(Su.values()); !(e = t()).done; ) {
                                      (0, e.value)();
                                  }
                              }, 5e3))
                            : xu && (clearInterval(xu), (xu = null));
                    },
                    Ru = ({ type: e, state: t }) => {
                        const u = ((e, t) => ({
                                width: 24,
                                height: 24,
                                frameCount: 42,
                                chunk: { count: 1, columns: 42, rows: 1 },
                                getChunkPath: bu(`R.images.gui.maps.icons.sequence.new_skill.${e}_${t}_`),
                            }))(e, t),
                            n = fu(u),
                            i = (0, r.useState)(Cu.Stop),
                            l = i[0],
                            s = i[1];
                        return (
                            (0, r.useEffect)(() => {
                                const e = () => {
                                    s(Cu.Play);
                                };
                                var t;
                                return (
                                    (t = e),
                                    Su.set(t, t),
                                    Nu(),
                                    () =>
                                        ((e) => {
                                            (Su.delete(e), Nu());
                                        })(e)
                                );
                            }, []),
                            a().createElement(Eu, {
                                width: u.width,
                                height: u.height,
                                frameCount: u.frameCount,
                                getImageSource: n,
                                loop: !1,
                                state: l,
                                onAnimationDone: () => {
                                    s(Cu.Stop);
                                },
                                className: wu,
                            })
                        );
                    },
                    Lu = ({ size: e, children: t, className: u }) => {
                        const n = _t(),
                            r = e === Qt.c44x44 ? 48 : 26,
                            i = (0, dt.useSpring)({
                                from: { opacity: 0, marginRight: -r * n },
                                to: [{ marginRight: 0 }, { opacity: 1 }],
                                config: { duration: 400, easing: mt.Fs },
                                delay: 800,
                            });
                        return a().createElement(dt.animated.div, { style: i, className: u }, t);
                    },
                    Tu = a().memo(function ({ isEnabled: e, className: t, children: u }) {
                        const n = (0, dt.useSpring)(() => ({ from: { scale: 1 } })),
                            i = n[0],
                            l = n[1];
                        return (
                            (0, r.useEffect)(() => {
                                e &&
                                    l.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: mt.Fs },
                                    });
                            }, [e, l]),
                            a().createElement(dt.animated.div, { style: e ? i : void 0, className: t }, u)
                        );
                    });
                let Ou;
                !(function (e) {
                    ((e[(e.None = 0)] = 'None'), (e[(e.FadeIn = 1)] = 'FadeIn'), (e[(e.Scale = 2)] = 'Scale'));
                })(Ou || (Ou = {}));
                const Iu = a().memo(function ({
                        size: e,
                        skillsSignature: t,
                        animationType: u,
                        className: n,
                        children: r,
                    }) {
                        return u === Ou.Scale
                            ? a().createElement(Tu, { isEnabled: !0, className: n }, r)
                            : u === Ou.FadeIn
                              ? a().createElement(Lu, { size: e, key: t, className: n }, r)
                              : a().createElement('div', { className: n }, r);
                    }),
                    Mu = a().memo(function ({ size: e, className: t, children: u }) {
                        const n = e === Qt.c44x44 ? 48 : 26,
                            r = _t(),
                            i = (0, dt.useSpring)(
                                () => ({
                                    from: { opacity: 1, marginRight: 0 },
                                    to: [{ opacity: 0 }, { marginRight: -n * r }],
                                    config: { duration: 400, easing: mt.Fs },
                                }),
                                [r, n],
                            )[0];
                        return a().createElement(dt.animated.div, { style: i, className: t }, u);
                    });
                var Pu = u(3415);
                const Hu = ['className', 'children'];
                const ju = (e) => {
                    let t = e.className,
                        u = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, Hu);
                    return a().createElement(Pu.l, { tooltipArgs: ru(n), className: t }, u);
                };
                let Wu;
                !(function (e) {
                    ((e.None = 'none'), (e.Learned = 'learned'), (e.Improved = 'Improved'));
                })(Wu || (Wu = {}));
                const $u = {
                    base: 'SkillIcon_base_43',
                    base__c_22x22: 'SkillIcon_base__c_22x22_14',
                    base__medium: 'SkillIcon_base__medium_d0',
                    base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                    base__big: 'SkillIcon_base__big_ae',
                    base__c_80x80: 'SkillIcon_base__c_80x80_79',
                    base__c_120x90: 'SkillIcon_base__c_120x90_8c',
                    base__dialogs: 'SkillIcon_base__dialogs_e5',
                };
                let zu;
                !(function (e) {
                    ((e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c80x80 = 'c_80x80'),
                        (e.c120x90 = 'c_120x90'),
                        (e.c180x135 = 'dialogs'));
                })(zu || (zu = {}));
                const Gu = a().memo(function ({ iconName: e, size: t = zu.c24x24, className: u }) {
                        var n;
                        const r = null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : n.$dyn(e);
                        return a().createElement('div', {
                            style: null !== r ? { backgroundImage: `url(${r})` } : void 0,
                            className: l()($u.base, $u[`base__${t}`], u),
                        });
                    }),
                    Vu = {
                        base: 'Skill_base_1f',
                        base__c_24x24: 'Skill_base__c_24x24_29',
                        base__c_44x44: 'Skill_base__c_44x44_5a',
                        background: 'Skill_background_02',
                        base__borderLightYellow: 'Skill_base__borderLightYellow_09',
                        base__borderYellow: 'Skill_base__borderYellow_3e',
                        base__borderRed: 'Skill_base__borderRed_d2',
                        base__typeBonus: 'Skill_base__typeBonus_23',
                        base__disabled: 'Skill_base__disabled_85',
                        newSkillHighLight: 'Skill_newSkillHighLight_44',
                        icon: 'Skill_icon_b0',
                        disabledOverlay: 'Skill_disabledOverlay_3b',
                    },
                    Uu = { [Qt.c24x24]: zu.c22x22, [Qt.c44x44]: zu.c52x52 },
                    qu = ({
                        size: e,
                        isIrrelevant: t,
                        efficiencyState: u,
                        type: n,
                        iconName: r,
                        name: i,
                        skillState: s,
                        battleBooster: o,
                        className: c,
                    }) => {
                        const _ = o !== Wu.None,
                            d = ((e, t, u, n, r = je.H$.Normal) =>
                                e === jt.jw
                                    ? Jt.LightYellow
                                    : r === je.H$.Untrained || n
                                      ? t === tu.Learning
                                          ? Jt.Yellow
                                          : Jt.Grey
                                      : r === je.H$.Low
                                        ? u
                                            ? Jt.Grey
                                            : Jt.Red
                                        : t === tu.Learning
                                          ? Jt.Yellow
                                          : Jt.Grey)(i, s, _, t, u),
                            m = (!_ && u === je.H$.Untrained) || t,
                            E = r === jt.jw;
                        return a().createElement(
                            'div',
                            {
                                className: l()(
                                    Vu.base,
                                    Vu[`base__type${(0, be.e)(n)}`],
                                    Vu[`base__state${(0, be.e)(s)}`],
                                    Vu[`base__border${(0, be.e)(d)}`],
                                    Vu[`base__${e}`],
                                    m && Vu.base__disabled,
                                    c,
                                ),
                            },
                            a().createElement('div', {
                                className: Vu.background,
                                style:
                                    n === eu.Bonus
                                        ? {
                                              backgroundImage: `url('R.images.gui.maps.icons.crew.skillsFrame.${e}.${d}')`,
                                          }
                                        : void 0,
                            }),
                            E && s === tu.Learned && a().createElement('div', { className: Vu.newSkillHighLight }),
                            a().createElement(Gu, { iconName: r, size: Uu[e], className: Vu.icon }),
                            m && a().createElement('div', { className: Vu.disabledOverlay }),
                        );
                    };
                function Zu() {
                    return (
                        (Zu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Zu.apply(this, arguments)
                    );
                }
                const Yu = (e, t) => (e ? Ou.Scale : t ? Ou.FadeIn : Ou.None),
                    Xu = ({
                        index: e,
                        skill: t,
                        previousSkill: u,
                        skillState: n,
                        skillType: r,
                        size: i,
                        efficiencyState: l,
                        tooltipData: s,
                        skillsSignature: o,
                        blinkStyle: c,
                        isNewSkillAnimated: _ = !1,
                        skillAnimationType: d = Xt.None,
                        className: m,
                    }) => {
                        const E = d === Xt.Blink || d === Xt.SlideOutAndBlink,
                            p = d === Xt.SlideOutAndBlink || d === Xt.SlideOut,
                            g = d === Xt.FadeIn,
                            A = {
                                skillIndex: e,
                                name: t.name,
                                roleName: t.roleName,
                                customName: t.customName,
                                level: t.level,
                                tooltipData: s,
                                skillType: r,
                            };
                        return _ && t.name === jt.jw && i === Qt.c24x24
                            ? a().createElement(
                                  ju,
                                  Zu({}, A, { className: m }),
                                  a().createElement(Ru, { type: r, state: n }),
                              )
                            : a().createElement(
                                  a().Fragment,
                                  null,
                                  u &&
                                      p &&
                                      a().createElement(
                                          Mu,
                                          { size: i, className: m, key: u.name },
                                          a().createElement(
                                              Vt,
                                              { blinkStyle: c, isEnabled: E },
                                              a().createElement(
                                                  qu,
                                                  Zu({ size: i, type: r, efficiencyState: l, skillState: n }, u),
                                              ),
                                          ),
                                      ),
                                  a().createElement(
                                      Iu,
                                      {
                                          size: i,
                                          skillsSignature: o,
                                          className: m,
                                          animationType: Yu(d === Xt.ScaleUp, g),
                                      },
                                      a().createElement(
                                          ju,
                                          A,
                                          a().createElement(
                                              Vt,
                                              { blinkStyle: c, isEnabled: E },
                                              a().createElement(
                                                  qu,
                                                  Zu({ size: i, type: r, efficiencyState: l, skillState: n }, t),
                                              ),
                                          ),
                                      ),
                                  ),
                              );
                    },
                    Ku = {
                        base: 'LostLevelAnimation_base_f6',
                        level: 'LostLevelAnimation_level_f0',
                        level__skillLost: 'LostLevelAnimation_level__skillLost_a2',
                        level__skillBlur: 'LostLevelAnimation_level__skillBlur_24',
                        base__c_24x24: 'LostLevelAnimation_base__c_24x24_1c',
                        base__c_44x44: 'LostLevelAnimation_base__c_44x44_44',
                    },
                    Ju = a().memo(function ({ size: e, level: t, withSlideOut: u = !0 }) {
                        const n = (0, dt.useSpring)({ to: { val: t }, config: { duration: 150 } }),
                            r = (0, dt.useSpring)(() => ({
                                from: { x: de.O.view.remToPx(-5), opacity: 0 },
                                to: { x: 0, opacity: 1 },
                                config: { duration: 300, easing: mt.qb },
                                delay: 700,
                            }))[0],
                            i = (0, dt.useSpring)(
                                () => ({
                                    from: { opacity: 0 },
                                    to: [{ opacity: 1 }, { opacity: 0 }],
                                    config: { duration: 150, easing: mt.qb },
                                }),
                                [t],
                            )[0];
                        return a().createElement(
                            'div',
                            { className: l()(Ku.base, Ku[`base__${e}`]) },
                            a().createElement(
                                dt.animated.div,
                                { style: u ? r : void 0, className: l()(Ku.level, Ku.level__skillLost) },
                                n.val.to((e) => (0, be.dL)(Math.floor(e))),
                            ),
                            a().createElement(
                                dt.animated.div,
                                {
                                    style: u ? Object.assign({}, r, i) : i,
                                    className: l()(Ku.level, Ku.level__skillBlur),
                                },
                                n.val.to((e) => (0, be.dL)(Math.floor(e))),
                            ),
                        );
                    }),
                    Qu = 'SkillLevel_base_d2',
                    en = 'SkillLevel_base__highlighted_e3',
                    tn = ({ skillLevel: e, isHighlighted: t = !1, className: u }) =>
                        a().createElement(
                            'div',
                            { className: l()(Qu, t && en, u) },
                            (0, be.dL)(
                                e > 0 && e < 0.01
                                    ? 0.01
                                    : ((e, t = 2) => {
                                          const u = Math.pow(10, t);
                                          return e % 1 > 0 ? Math.round(e * u) / u : e;
                                      })(e),
                            ),
                        ),
                    un = ({
                        skillsAmountDiff: e,
                        size: t,
                        skillType: u,
                        wasLearned: n,
                        isAllMajorSkillsLearned: r,
                        skill: i,
                        possibleSkill: l,
                        blinkStyle: s,
                        className: o,
                    }) => {
                        const c = l || i,
                            _ = void 0 !== i && void 0 !== l ? l.level - i.level : 0,
                            d = e > 0,
                            m = e < 0 || _ > 0;
                        return !c ||
                            (c.level === jt.I && 0 === _) ||
                            ((null == l ? void 0 : l.level) === jt.I && u === eu.Bonus && _ > 0 && !r)
                            ? null
                            : d || (_ < 0 && 0 === e)
                              ? a().createElement(Ju, { size: t, level: c.level, withSlideOut: d })
                              : a().createElement(
                                    Tu,
                                    { isEnabled: Boolean(n) },
                                    a().createElement(
                                        Vt,
                                        { blinkStyle: s, isEnabled: m },
                                        a().createElement(tn, { skillLevel: c.level, isHighlighted: m, className: o }),
                                    ),
                                );
                    },
                    nn = {
                        base: 'Row_base_bb',
                        skill: 'Row_skill_fb',
                        base__c_44x44: 'Row_base__c_44x44_4f',
                        base__c_24x24: 'Row_base__c_24x24_16',
                        base__collapseNoMargins: 'Row_base__collapseNoMargins_13',
                        base__collapseOverlap: 'Row_base__collapseOverlap_2c',
                        base__collapseReducedMargins: 'Row_base__collapseReducedMargins_3b',
                        skill__last: 'Row_skill__last_0a',
                        skill__lastLearnedSkill: 'Row_skill__lastLearnedSkill_6c',
                        base__collapseOnlyLearningOverlap: 'Row_base__collapseOnlyLearningOverlap_19',
                        skill__stateLearning: 'Row_skill__stateLearning_5d',
                        base__collapseExtraOverlap: 'Row_base__collapseExtraOverlap_10',
                        base__collapseExtraOverlapWithLevel: 'Row_base__collapseExtraOverlapWithLevel_90',
                        base__collapseExtraOverlapWithEfficiency: 'Row_base__collapseExtraOverlapWithEfficiency_90',
                        base__collapseExtraOverlapWithLevelAndEfficiency:
                            'Row_base__collapseExtraOverlapWithLevelAndEfficiency_4e',
                        level: 'Row_level_56',
                        acceleratedTrainingIcon: 'Row_acceleratedTrainingIcon_c7',
                        lostSkill: 'Row_lostSkill_32',
                    },
                    rn = ({
                        skills: e,
                        skillType: t = eu.Major,
                        possibleSkills: u,
                        isAcceleratedTrainingVisible: n = !1,
                        collapseLayout: r = Kt.None,
                        efficiencyState: i,
                        size: s,
                        tooltipData: o,
                        blinkStyle: c,
                        isSkillsEfficiencyLearning: _ = !1,
                        isAllMajorSkillsLearned: d = !1,
                        isNewSkillAnimated: m = !1,
                        className: E,
                    }) => {
                        const p = void 0 === u ? e : u,
                            g = (0, F.D9)(e),
                            A = (0, F.D9)(p),
                            f = g && Be.lN(g),
                            b = Be.lN(e),
                            D = nu(p),
                            C = Be.lN(p),
                            v = u ? e.length - u.length : 0,
                            h = i !== je.H$.Low || _ || (C && b && C.level !== b.level),
                            B = ((e) => Be.UI(e, (e) => e.name).join())(p);
                        return a().createElement(
                            'div',
                            { className: l()(nn.base, nn[`base__${s}`], nn[`base__collapse${(0, be.e)(r)}`], E) },
                            ((e, t, u, n, r) => {
                                if (!n || !t) return Be.UI(u, (e, t) => r(e, Xt.None, t));
                                const a = new Map(Be.UI(t, ({ name: e, level: t }) => [e, t])),
                                    i = new Map(Be.UI(e, ({ name: e, level: t }) => [e, t]));
                                let l = !1;
                                return Be.UI(u, (s, o) => {
                                    const c = s.name,
                                        _ = s.level,
                                        d = c === jt.jw,
                                        m = iu(e, o),
                                        E = d ? lu(e, o) : i.get(c),
                                        p = d ? lu(t, o) : a.get(c),
                                        g = iu(u, o - 1),
                                        A = iu(n, o),
                                        f = iu(n, o + 1);
                                    let b = Xt.None;
                                    return (
                                        l || c !== f || g === A || d || m !== jt.jw
                                            ? d && o === u.length - 1 && l
                                                ? (b = Xt.FadeIn)
                                                : (!d && !i.has(c)) || (void 0 === m && d) || (E !== _ && _ === jt.I)
                                                  ? (b = Xt.Blink)
                                                  : p !== E && (b = Xt.ScaleUp)
                                            : ((l = !0), (b = i.has(c) ? Xt.SlideOut : Xt.SlideOutAndBlink)),
                                        r(s, b, o)
                                    );
                                });
                            })(e, g, p, A, (e, u, n) => {
                                const r = uu(e);
                                return a().createElement(Xu, {
                                    key: n,
                                    index: n,
                                    skill: e,
                                    skillState: r,
                                    skillType: t,
                                    previousSkill: A && Be.U2(A, n),
                                    skillAnimationType: u,
                                    size: s,
                                    skillsSignature: B,
                                    efficiencyState: i,
                                    tooltipData: o,
                                    blinkStyle: c,
                                    isNewSkillAnimated: m,
                                    className: l()(
                                        nn.skill,
                                        nn[`skill__state${(0, be.e)(r)}`],
                                        e === C && nn.skill__last,
                                        e === D && nn.skill__lastLearnedSkill,
                                    ),
                                });
                            }),
                            h &&
                                a().createElement(un, {
                                    skillsAmountDiff: v,
                                    size: s,
                                    wasLearned: f && b && f.level !== b.level,
                                    skillType: t,
                                    isAllMajorSkillsLearned: d,
                                    skill: b,
                                    possibleSkill: C,
                                    blinkStyle: c,
                                    className: nn.level,
                                }),
                            n &&
                                a().createElement(Zt, {
                                    classMix: nn.acceleratedTrainingIcon,
                                    targetId: null == o ? void 0 : o.targetId,
                                }),
                            v > 0 &&
                                ((e, t) => {
                                    const u = [];
                                    for (let n = 0; n < e; n++) u.push(t(n));
                                    return u;
                                })(v, (e) =>
                                    a().createElement(Bu, {
                                        key: e,
                                        index: e,
                                        totalAmount: v,
                                        type: t,
                                        className: nn.lostSkill,
                                        size: s,
                                    }),
                                ),
                        );
                    };
                function an() {
                    return (
                        (an =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        an.apply(this, arguments)
                    );
                }
                const ln = ({
                        skills: e,
                        collapseLayout: t = Kt.None,
                        skillType: u = eu.Major,
                        efficiencyState: n,
                        size: r,
                        tooltipData: i,
                        className: s,
                        isAcceleratedTrainingVisible: o,
                    }) => {
                        const c = Be.lN(e),
                            _ = nu(e),
                            d = n !== je.H$.Low && (null == c ? void 0 : c.level) !== jt.I;
                        return a().createElement(
                            'div',
                            { className: l()(nn.base, nn[`base__${r}`], nn[`base__collapse${(0, be.e)(t)}`], s) },
                            Be.UI(e, (e, t) => {
                                const s = uu(e);
                                return a().createElement(
                                    ju,
                                    {
                                        key: t,
                                        skillIndex: t,
                                        name: e.name,
                                        roleName: e.roleName,
                                        customName: e.customName,
                                        level: e.level,
                                        tooltipData: i,
                                        skillType: u,
                                        className: l()(
                                            nn.skill,
                                            nn[`skill__state${(0, be.e)(s)}`],
                                            e === c && nn.skill__last,
                                            e === _ && nn.skill__lastLearnedSkill,
                                        ),
                                    },
                                    a().createElement(
                                        qu,
                                        an({ size: r, type: u, efficiencyState: n, skillState: s }, e),
                                    ),
                                );
                            }),
                            d && c && a().createElement(tn, { skillLevel: c.level, className: nn.level }),
                            o &&
                                a().createElement(Zt, {
                                    classMix: nn.acceleratedTrainingIcon,
                                    targetId: null == i ? void 0 : i.targetId,
                                }),
                        );
                    },
                    sn = {
                        base: 'Skills_base_ec',
                        efficiency: 'Skills_efficiency_d0',
                        base__c_44x44: 'Skills_base__c_44x44_c0',
                        rows: 'Skills_rows_e8',
                        bonusRow: 'Skills_bonusRow_4a',
                    };
                function on() {
                    return (
                        (on =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        on.apply(this, arguments)
                    );
                }
                const cn = ({
                        data: e,
                        dataToCompare: t,
                        classes: u,
                        tankmanID: n = jt.y$,
                        size: r = Qt.c24x24,
                        collapseType: i = Yt.None,
                        isSkillTooltipEnabled: s = !1,
                        isAcceleratedTrainingVisible: o = !1,
                        isNewSkillAnimated: c = !1,
                        isEfficiencyVisible: _ = !1,
                        isBonusSkillsVisible: d = !0,
                        tooltipsTargetId: m = R.invalid('resId'),
                        tooltipArgs: E,
                        blinkStyle: p,
                        children: g,
                    }) => {
                        const A = e.majorSkills,
                            f = e.bonusSkills,
                            b = e.skillsEfficiency,
                            D = (null == t ? void 0 : t.skillsEfficiency) || b,
                            F = (0, je.Y4)(b),
                            C = void 0 !== t && t.skillsEfficiency !== b,
                            v = F !== je.H$.Normal || _ || C,
                            h = null == t ? void 0 : t.majorSkills,
                            B = null == t ? void 0 : t.bonusSkills,
                            w = B || f,
                            k = Be.lN(w),
                            y = d && w.length > 0,
                            S = c || void 0 !== t,
                            x = (null == h ? void 0 : h.length) === jt.GT,
                            N = ((e, t, u, n) => {
                                if (t !== jt.vA) return Kt.None;
                                switch (e) {
                                    case Yt.Default:
                                        if (u && n) return Kt.NoMargins;
                                        break;
                                    case Yt.Overlap:
                                        if (u) return n ? Kt.Overlap : Kt.ReducedMargins;
                                        if (n) return Kt.OnlyLearningOverlap;
                                        break;
                                    case Yt.ExtraOverlap:
                                        return u && n
                                            ? Kt.ExtraOverlapWithLevelAndEfficiency
                                            : u
                                              ? Kt.ExtraOverlapWithEfficiency
                                              : n
                                                ? Kt.ExtraOverlapWithLevel
                                                : Kt.ExtraOverlap;
                                }
                                return Kt.None;
                            })(i, w.length, v, F !== je.H$.Low && void 0 !== k && k.level < jt.I),
                            L = {
                                size: r,
                                efficiencyState: F,
                                tooltipData: { targetId: m, isEnabled: s, tankmanID: n, args: E },
                            };
                        return a().createElement(
                            'div',
                            { className: l()(sn.base, sn[`base__${r}`], null == u ? void 0 : u.base) },
                            v &&
                                a().createElement(
                                    Vt,
                                    { blinkStyle: p, isEnabled: C && S },
                                    a().createElement(Gt, {
                                        efficiencyValue: D,
                                        tankmanID: n,
                                        className: sn.efficiency,
                                        size: au(r, y),
                                        targetId: m,
                                    }),
                                ),
                            g,
                            a().createElement(
                                'div',
                                { className: sn.rows },
                                S
                                    ? a().createElement(
                                          a().Fragment,
                                          null,
                                          a().createElement(
                                              rn,
                                              on(
                                                  {
                                                      skills: A,
                                                      possibleSkills: h,
                                                      blinkStyle: p,
                                                      isAcceleratedTrainingVisible: o,
                                                      isNewSkillAnimated: c,
                                                      isSkillsEfficiencyLearning: C,
                                                  },
                                                  L,
                                              ),
                                          ),
                                          y &&
                                              a().createElement(
                                                  rn,
                                                  on(
                                                      {
                                                          skills: f,
                                                          skillType: eu.Bonus,
                                                          possibleSkills: B,
                                                          className: sn.bonusRow,
                                                          collapseLayout: N,
                                                          blinkStyle: p,
                                                          isNewSkillAnimated: c,
                                                          isAllMajorSkillsLearned: x,
                                                      },
                                                      L,
                                                  ),
                                              ),
                                      )
                                    : a().createElement(
                                          a().Fragment,
                                          null,
                                          a().createElement(ln, on({ skills: A, isAcceleratedTrainingVisible: o }, L)),
                                          y &&
                                              a().createElement(
                                                  ln,
                                                  on(
                                                      {
                                                          skills: f,
                                                          skillType: eu.Bonus,
                                                          className: sn.bonusRow,
                                                          collapseLayout: N,
                                                      },
                                                      L,
                                                  ),
                                              ),
                                      ),
                            ),
                        );
                    },
                    _n = 'SkillsWithRole_base_92',
                    dn = 'SkillsWithRole_role_66',
                    mn = 'SkillsWithRole_role__glow_93',
                    En = ['role', 'size', 'withRoleGlow', 'className', 'isEfficiencyVisible'];
                function pn() {
                    return (
                        (pn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        pn.apply(this, arguments)
                    );
                }
                const gn = (e) => {
                    let t = e.role,
                        u = e.size,
                        n = void 0 === u ? Qt.c44x44 : u,
                        r = e.withRoleGlow,
                        i = e.className,
                        s = e.isEfficiencyVisible,
                        o = void 0 === s || s,
                        c = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, En);
                    return a().createElement(
                        'div',
                        { className: _n },
                        t && a().createElement(ze, { role: t, className: l()(dn, r && mn) }),
                        a().createElement(cn, pn({ classes: { base: i }, isEfficiencyVisible: o, size: n }, c)),
                    );
                };
                let An;
                !(function (e) {
                    ((e.Small = 'small'), (e.Big = 'big'));
                })(An || (An = {}));
                const fn = (e) => (e < 0.5 ? 4 * Math.pow(e, 3) : 4 * Math.pow(e - 1, 3) + 1),
                    bn = {
                        base: 'Frame_base_e1',
                        base__gray: 'Frame_base__gray_08',
                        base__red: 'Frame_base__red_6b',
                        base__yellow: 'Frame_base__yellow_2d',
                        base__empty: 'Frame_base__empty_31',
                    };
                let Dn;
                !(function (e) {
                    ((e.Gray = 'gray'), (e.Red = 'red'), (e.Yellow = 'yellow'), (e.Empty = 'empty'));
                })(Dn || (Dn = {}));
                const Fn = (e, t, u, n) =>
                        n
                            ? e === je.H$.Low
                                ? Dn.Gray
                                : t < jt.I
                                  ? Dn.Yellow
                                  : Dn.Gray
                            : u || t < jt.I
                              ? e === je.H$.Low
                                  ? Dn.Red
                                  : Dn.Yellow
                              : e === je.H$.Low
                                ? Dn.Red
                                : Dn.Gray,
                    Cn = a().memo(function ({
                        isNewSkill: e,
                        isIrrelevant: t,
                        efficiencyState: u,
                        skillLevel: n,
                        className: r,
                    }) {
                        return a().createElement('div', { className: l()(bn.base, bn[`base__${Fn(u, n, e, t)}`], r) });
                    }),
                    vn = {
                        base: 'TankmanSkill_base_51',
                        base__c_24x24: 'TankmanSkill_base__c_24x24_98',
                        base__c_44x44: 'TankmanSkill_base__c_44x44_62',
                        icon: 'TankmanSkill_icon_fe',
                        icon__new: 'TankmanSkill_icon__new_7a',
                        icon__disable: 'TankmanSkill_icon__disable_fb',
                        disabledPattern: 'TankmanSkill_disabledPattern_da',
                        level: 'TankmanSkill_level_3b',
                        level__skillLost: 'TankmanSkill_level__skillLost_8c',
                        level__skillBlur: 'TankmanSkill_level__skillBlur_6d',
                    };
                let hn;
                !(function (e) {
                    ((e.c24x24 = 'c_24x24'), (e.c44x44 = 'c_44x44'));
                })(hn || (hn = {}));
                a().memo(function ({
                    iconName: e,
                    level: t,
                    size: u = hn.c44x44,
                    isLevelVisible: n = t < jt.I,
                    isIrrelevant: i,
                    efficiencyState: s,
                    className: o,
                    isSkillLost: c,
                }) {
                    const _ = e === jt.jw,
                        d = (s === je.H$.Untrained || i) && !_,
                        m = (0, dt.useSpring)({ to: { val: t }, config: { duration: 150 } }),
                        E = (0, dt.useSpring)(() => ({ from: { x: -5, opacity: 0 } })),
                        p = E[0],
                        g = E[1],
                        A = (0, dt.useSpring)(() => ({ t: 0 })),
                        f = A[0],
                        b = A[1];
                    return (
                        (0, r.useEffect)(() => {
                            b.start({ from: { t: 1 }, to: { t: 0 }, config: { duration: 500 } });
                        }, [g, b, t]),
                        (0, r.useEffect)(
                            () => (
                                g.set({ x: -5, opacity: 0 }),
                                g.start({
                                    reset: !0,
                                    pause: !1,
                                    to: { x: 0, opacity: 1 },
                                    config: { duration: 300, easing: fn },
                                    delay: c ? 700 : 0,
                                    immediate: !c,
                                }),
                                () => {
                                    g.stop();
                                }
                            ),
                            [g, c],
                        ),
                        a().createElement(
                            'div',
                            { className: l()(vn.base, vn[`base__${u}`], o) },
                            a().createElement(Gu, {
                                iconName: e,
                                size: zu.c52x52,
                                className: l()(vn.icon, d && vn.icon__disable, _ && vn.icon__new),
                            }),
                            d && a().createElement('div', { className: vn.disabledPattern }),
                            !_ &&
                                a().createElement(Cn, {
                                    isNewSkill: _,
                                    efficiencyState: s,
                                    skillLevel: t,
                                    isIrrelevant: i,
                                }),
                            n &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        dt.animated.div,
                                        { style: p, className: l()(vn.level, c && vn.level__skillLost) },
                                        m.val.to((e) => (0, be.dL)(Math.floor(e))),
                                    ),
                                    a().createElement(
                                        dt.animated.div,
                                        {
                                            style: Object.assign({}, p, { opacity: f.t.to((e) => e) }),
                                            className: l()(vn.level, vn.level__skillBlur),
                                        },
                                        (0, be.dL)(Math.floor(t)),
                                    ),
                                ),
                        )
                    );
                });
                const Bn = (e) => Math.round(Math.abs(e)),
                    wn = (e, t) => {
                        const u = (0, r.useRef)(null),
                            n = (0, r.useRef)(null),
                            a = (0, r.useRef)(null),
                            i = (0, r.useRef)({
                                isImmediate: !1,
                                isAnimationActive: !0,
                                previousBeforeShift: 0,
                                previousAfterShift: 0,
                            }),
                            l = (0, dt.useSpring)(() => ({
                                from: { opacity: 0 },
                                to: { opacity: 1 },
                                config: { duration: 500, easing: mt.qb },
                                delay: 150,
                                pause: !0,
                            })),
                            s = l[0],
                            o = l[1],
                            c = (0, dt.useSpring)(() => ({ opacity: 0 })),
                            _ = c[0],
                            d = c[1],
                            m = (0, dt.useSpring)(() => ({ x: 0, opacity: 0 })),
                            E = m[0],
                            p = m[1],
                            g = (0, dt.useSpring)(() => ({ x: 0 })),
                            A = g[0],
                            f = g[1];
                        return (
                            ((e, t) => {
                                (0, r.useEffect)(() => {
                                    let t = null;
                                    return (
                                        (t = requestAnimationFrame(() => {
                                            t = requestAnimationFrame(() => {
                                                ((t = null), e());
                                            });
                                        })),
                                        () => {
                                            null !== t && cancelAnimationFrame(t);
                                        }
                                    );
                                }, t);
                            })(
                                () => (
                                    (() => {
                                        if (e && u.current && n.current && a.current) {
                                            const e = i.current,
                                                t = e.isImmediate,
                                                r = e.isAnimationActive,
                                                l = e.previousBeforeShift,
                                                s = e.previousAfterShift,
                                                c = u.current.getBoundingClientRect(),
                                                _ = n.current.getBoundingClientRect(),
                                                d = a.current.getBoundingClientRect(),
                                                m = t && r,
                                                E = m ? l : Bn(d.left - c.right - l),
                                                g = m ? s : Bn(d.right - _.left + s);
                                            ((i.current.isImmediate = !0),
                                                (i.current.previousBeforeShift = E),
                                                (i.current.previousAfterShift = g),
                                                t || o.start({ reset: !0, pause: !1 }),
                                                f.start({
                                                    from: { x: -l },
                                                    to: { x: -E },
                                                    config: { duration: 500, easing: mt.qb },
                                                    delay: 0,
                                                    immediate: t,
                                                }),
                                                p.start({
                                                    from: { x: s, opacity: 0 },
                                                    to: { x: g, opacity: 1 },
                                                    config: { duration: 500, easing: mt.qb },
                                                    delay: 0,
                                                    immediate: t,
                                                    onRest: () => {
                                                        i.current.isAnimationActive = !1;
                                                    },
                                                }));
                                        }
                                    })(),
                                    () => {
                                        p.stop();
                                    }
                                ),
                                [o, f, e, p, ...t],
                            ),
                            (0, r.useEffect)(() => {
                                d.start({
                                    from: { opacity: 0 },
                                    to: { opacity: 1 },
                                    config: { duration: 300, easing: mt.qb },
                                    delay: 0,
                                });
                            }, [d]),
                            {
                                arrowStyles: s,
                                skillsAfterStyles: _,
                                skillsAfterMoveStyles: E,
                                skillsBeforeMoveStyles: A,
                                skillsBeforeRef: u,
                                skillsAfterRef: n,
                                arrowRef: a,
                            }
                        );
                    },
                    kn = {
                        base: 'SkillsResult_base_75',
                        base__withBonusSkills: 'SkillsResult_base__withBonusSkills_58',
                        background: 'SkillsResult_background_8b',
                        arrowWrapper: 'SkillsResult_arrowWrapper_03',
                        arrow: 'SkillsResult_arrow_b0',
                        skillsWrapper: 'SkillsResult_skillsWrapper_bb',
                        base__withPriceSelected: 'SkillsResult_base__withPriceSelected_f6',
                        skillsWrapper__after: 'SkillsResult_skillsWrapper__after_ed',
                        skillsWrapper__before: 'SkillsResult_skillsWrapper__before_ec',
                        skillsWrapper__withoutBonusSkills: 'SkillsResult_skillsWrapper__withoutBonusSkills_af',
                        skills__low: 'SkillsResult_skills__low_19',
                    },
                    yn = (0, _e.Pi)(({ className: e }) => {
                        const t = xe().model,
                            u = (0, c.GS)().mediaSize,
                            n = t.isPriceSelected.get(),
                            r = t.tankmanBefore.get(),
                            i = t.tankmanAfter.get(),
                            s = t.computes.skillsDataBefore(),
                            o = t.computes.skillsDataAfter(),
                            _ = t.roleChange.get().isChecked,
                            d = s.bonusSkills.length > 0,
                            m = n && o.bonusSkills.length > 0,
                            E = d || m,
                            p = n && _ && r.role !== i.role,
                            g = u < c.cJ.Medium ? hn.c24x24 : hn.c44x44,
                            A = (0, je.Y4)(o.skillsEfficiency),
                            f = wn(n, [g, o.bonusSkills.length, o.majorSkills.length, p]),
                            b = f.arrowStyles,
                            D = f.skillsBeforeMoveStyles,
                            F = f.skillsAfterMoveStyles,
                            C = f.skillsAfterStyles,
                            v = f.skillsAfterRef,
                            h = f.skillsBeforeRef,
                            B = f.arrowRef;
                        return a().createElement(
                            'div',
                            {
                                className: l()(
                                    kn.base,
                                    E && kn.base__withBonusSkills,
                                    n && kn.base__withPriceSelected,
                                    e,
                                ),
                            },
                            a().createElement('div', { className: kn.background }),
                            a().createElement(
                                'div',
                                {
                                    className: l()(
                                        kn.skillsWrapper,
                                        kn.skillsWrapper__before,
                                        !d && m && kn.skillsWrapper__withoutBonusSkills,
                                    ),
                                },
                                a().createElement(
                                    dt.animated.div,
                                    { style: Object.assign({}, D), ref: h },
                                    a().createElement(gn, {
                                        data: s,
                                        tankmanID: r.invId,
                                        role: p ? r.role : void 0,
                                        size: g,
                                    }),
                                ),
                            ),
                            n &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        dt.animated.div,
                                        { style: b, className: kn.arrowWrapper, ref: B },
                                        a().createElement('div', { className: kn.arrow }),
                                    ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: l()(
                                                kn.skillsWrapper,
                                                kn.skillsWrapper__after,
                                                !m && d && kn.skillsWrapper__withoutBonusSkills,
                                            ),
                                        },
                                        a().createElement(
                                            dt.animated.div,
                                            { style: F, ref: v },
                                            a().createElement(
                                                dt.animated.div,
                                                { style: Object.assign({}, C) },
                                                a().createElement(gn, {
                                                    data: o,
                                                    tankmanID: r.invId,
                                                    size: g,
                                                    role: p ? i.role : void 0,
                                                    withRoleGlow: !0,
                                                    className: l()(kn.skills, A === je.H$.Low && kn.skills__low),
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                        );
                    }),
                    Sn = 'TitleContent_base_38',
                    xn = 'TitleContent_tankName_18',
                    Nn = 'TitleContent_title_be',
                    Rn = 'TitleContent_result_1e';
                function Ln() {
                    return (
                        (Ln =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ln.apply(this, arguments)
                    );
                }
                const Tn = (0, r.memo)(({ title: e = '', role: t, isFemale: u, vehicle: n }) => {
                        var r;
                        return a().createElement(
                            'div',
                            { className: Sn },
                            a().createElement(Rt.w, {
                                text: e,
                                binding: {
                                    role: null == (r = (0, je.Gc)(t, u, je.wP.Objective)) ? void 0 : r.toString(),
                                    vehicleName: a().createElement(
                                        Ht,
                                        Ln({ isShortName: !0, type: Pt.white, size: Mt.big, className: xn }, n),
                                    ),
                                },
                                justifyContent: Lt.v2.Center,
                                classMix: Nn,
                            }),
                            a().createElement(yn, { className: Rn }),
                        );
                    }),
                    On = 'RetrainSingleDialogApp_icon_40',
                    In = 'RetrainSingleDialogApp_center_b8',
                    Mn = 'RetrainSingleDialogApp_center__checked_92',
                    Pn = 'RetrainSingleDialogApp_priceList_4a',
                    Hn = 'RetrainSingleDialogApp_divider_7d';
                function jn() {
                    return (
                        (jn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        jn.apply(this, arguments)
                    );
                }
                const Wn = (0, _e.Pi)((e) => {
                    const t = xe().model,
                        u = t.tankmanAfter.get(),
                        n = t.tankmanBefore.get(),
                        r = t.roleChange.get().isVisible,
                        i = (0, c.GS)().mediaSize > c.cJ.Medium && !r;
                    return a().createElement(
                        Ce,
                        jn({}, e, {
                            icon: i && a().createElement(Nt, { iconName: n.iconName, isInSkin: n.isInSkin }),
                            title: a().createElement(Tn, {
                                title: t.title.get() || '',
                                role: u.role,
                                isFemale: u.isFemale,
                                vehicle: t.targetVehicle.get(),
                            }),
                            content: a().createElement(Ft, { warning: t.warning.get() || '', className: Pn }),
                            footer: a().createElement(ct, {
                                isRoleChangeVisible: r,
                                hasRetrainDiscount: t.hasRetrainDiscount.get(),
                            }),
                            classNames: { icon: On, center: l()(In, r && Mn), divider: Hn },
                        }),
                    );
                });
                engine.whenReady.then(() => {
                    D().render(
                        a().createElement(
                            Se,
                            null,
                            a().createElement(f, null, a().createElement(ce, { Template: Wn })),
                        ),
                        document.getElementById('root'),
                    );
                });
            },
            6228: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => Tt });
                var n = {};
                (u.r(n),
                    u.d(n, {
                        Area: () => ye,
                        Bar: () => Be,
                        DefaultScroll: () => ke,
                        Direction: () => oe,
                        defaultSettings: () => ce,
                        useHorizontalScrollApi: () => de,
                    }));
                var r = {};
                (u.r(r), u.d(r, { Area: () => Ue, Bar: () => ze, Default: () => Ve, useVerticalScrollApi: () => Se }));
                var a = u(7363),
                    i = u.n(a),
                    l = u(3215),
                    s = u(4598),
                    o = u(9480),
                    c = u(3946);
                const _ = (0, l.q3)()(
                        ({ observableModel: e }) => {
                            const t = { cardsList: e.array('cardsList', []) },
                                u = (0, c.Om)(
                                    () =>
                                        (0, o.UI)(t.cardsList.get(), (e) =>
                                            Object.assign({}, e, {
                                                priceList: o.UI(e.priceList, (e) =>
                                                    Object.assign({}, e, {
                                                        priceTooltip: Object.assign({}, e.priceTooltip),
                                                        price: Object.assign({}, e.price),
                                                    }),
                                                ),
                                                price: Object.assign({}, e.price),
                                                cardTooltip: Object.assign({}, e.cardTooltip),
                                                priceTooltip: Object.assign({}, e.priceTooltip),
                                            }),
                                        ),
                                    { equals: s.jv },
                                );
                            return Object.assign({}, t, { computes: { cards: u } });
                        },
                        ({ externalModel: e }) => ({
                            onCardClick: e.createCallback((e, t) => ({ index: e, optionIndex: t }), 'onCardClick'),
                            onPriceSelect: e.createCallback(
                                (e, t, u) => ({ index: e, selectedPriceIndex: t, optionIndex: u }),
                                'onPriceSelect',
                            ),
                        }),
                    ),
                    d = _[0],
                    m = _[1];
                var E = u(6483),
                    p = u.n(E),
                    g = u(5415),
                    A = u(3403),
                    f = u(3415);
                let b, D;
                (!(function (e) {
                    ((e.Default = 'default'), (e.Reset = 'reset'), (e.Retrain = 'retrain'));
                })(b || (b = {})),
                    (function (e) {
                        ((e.Default = ''), (e.Disabled = 'disabled'), (e.Selected = 'selected'));
                    })(D || (D = {})));
                var F = u(3138),
                    C = u(2344),
                    v = u(7030),
                    h = u(7160),
                    B = u(8018);
                const w = 'CustomComponents_storage_c8',
                    k = 'CustomComponents_storageIcon_2c',
                    y = 'CustomComponents_storageCount_9b',
                    S = (0, a.memo)(({ kwargs: e, cardType: t }) => {
                        if (t === b.Reset) {
                            const t = null == e ? void 0 : e.storageCount;
                            return void 0 === t
                                ? null
                                : i().createElement(
                                      'div',
                                      { className: w },
                                      i().createElement('div', { className: k }),
                                      i().createElement('div', { className: y }, t),
                                  );
                        }
                        return null;
                    });
                var x = u(3618),
                    N = u(9053);
                const L = {
                    base: 'Description_base_bf',
                    base__selected: 'Description_base__selected_01',
                    efficiencyAfterRetrain: 'Description_efficiencyAfterRetrain_2f',
                    efficiencyAfterRetrain__highlighted: 'Description_efficiencyAfterRetrain__highlighted_71',
                    efficiencyAfterRetrain__selected: 'Description_efficiencyAfterRetrain__selected_41',
                    efficiencyAfterRetrainValue: 'Description_efficiencyAfterRetrainValue_f4',
                    efficiencyAfterRetrainGlow: 'Description_efficiencyAfterRetrainGlow_cb',
                    efficiencyAfterRetrainGlow__increase: 'Description_efficiencyAfterRetrainGlow__increase_84',
                    efficiencyAfterRetrainGlow__decrease: 'Description_efficiencyAfterRetrainGlow__decrease_24',
                    efficiencyAfterRetrainValuePercents: 'Description_efficiencyAfterRetrainValuePercents_29',
                    resetPerksLayout: 'Description_resetPerksLayout_44',
                    resetPercentsText: 'Description_resetPercentsText_e1',
                    xpAmount: 'Description_xpAmount_28',
                    xpIcon: 'Description_xpIcon_0e',
                    resetPerksDescription: 'Description_resetPerksDescription_5f',
                    resetPerksDescription__withXpLoose: 'Description_resetPerksDescription__withXpLoose_86',
                };
                var T = u(2372),
                    O = u(280),
                    I = u(3649),
                    M = u(771);
                const P = i().memo(({ description: e, cardState: t, kwargs: u, className: n }) => {
                    const r = Number(u.value) < M.I;
                    return i().createElement(
                        'div',
                        { className: p()(L.base, L[`base__${t}`], n) },
                        r &&
                            i().createElement(x.w, {
                                text: R.strings.dialogs.perksReset.priceCard.xpLoose(),
                                classMix: L.resetPerksLayout,
                                binding: {
                                    percentAmount: i().createElement(
                                        'div',
                                        { className: p()(L.resetPercentsText) },
                                        (0, I.dL)(((a = u.value), -(M.I - Number(a)))),
                                    ),
                                    xpAmount: i().createElement(
                                        'div',
                                        { className: p()(L.xpAmount) },
                                        i().createElement(T.A, { value: Number(u.xpLossAmount) }),
                                        i().createElement('div', { className: L.xpIcon }),
                                    ),
                                },
                            }),
                        i().createElement(O.z, {
                            text: e,
                            classMix: p()(L.resetPerksDescription, r && L.resetPerksDescription__withXpLoose),
                        }),
                    );
                    var a;
                });
                let H;
                !(function (e) {
                    ((e.None = 'none'), (e.Increase = 'increase'), (e.Decrease = 'decrease'));
                })(H || (H = {}));
                const j = (e, t) => (e && t && e !== t ? (e > t ? H.Decrease : H.Increase) : H.None),
                    W = i().memo(({ description: e, cardState: t, kwargs: u, className: n }) => {
                        const r = (0, C.D9)(u.value),
                            a = j(r, u.value),
                            l = (0, v.useSpring)({
                                from: { opacity: 0 },
                                to: [
                                    { opacity: 1, immediate: !0, delay: 450 },
                                    { opacity: 1, config: { duration: 250 } },
                                    { opacity: 0, config: { duration: 300 } },
                                ],
                            });
                        return i().createElement(
                            'div',
                            { className: p()(L.base, L[`base__${t}`], n) },
                            i().createElement(x.w, {
                                text: e,
                                justifyContent: N.v2.Center,
                                binding: {
                                    value: i().createElement(
                                        'div',
                                        {
                                            className: p()(
                                                L.efficiencyAfterRetrain,
                                                u.isHighlight && L.efficiencyAfterRetrain__highlighted,
                                                t === D.Selected && L.efficiencyAfterRetrain__selected,
                                            ),
                                        },
                                        i().createElement(
                                            'div',
                                            { className: L.efficiencyAfterRetrainValue },
                                            a !== H.None &&
                                                i().createElement(v.animated.div, {
                                                    style: l,
                                                    className: p()(
                                                        L.efficiencyAfterRetrainGlow,
                                                        L[`efficiencyAfterRetrainGlow__${a}`],
                                                    ),
                                                }),
                                            i().createElement(
                                                'div',
                                                { className: L.efficiencyAfterRetrainValuePercents },
                                                (0, I.dL)(Number(u.value)),
                                            ),
                                        ),
                                    ),
                                },
                            }),
                        );
                    }),
                    $ = { [b.Reset.toString()]: P, [b.Retrain.toString()]: W },
                    z = (e) =>
                        $[e.cardType]
                            ? i().createElement($[e.cardType], e)
                            : i().createElement(
                                  'div',
                                  { className: p()(L.base, e.className) },
                                  i().createElement(x.w, {
                                      text: e.description,
                                      justifyContent: N.v2.Center,
                                      binding: e.kwargs,
                                  }),
                              ),
                    G = (e, t) => {
                        const u = Array.isArray(e) ? e : [e];
                        return !t && u.length > 1 ? u.slice(0, 1) : u;
                    };
                var V = u(1856);
                const U = [];
                function q(e) {
                    const t = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, t.current)(...e), U)
                    );
                }
                var Z = u(8526),
                    Y = u(5521),
                    X = u(9916);
                let K, J;
                (!(function (e) {
                    ((e.Basic = 'basic'),
                        (e.Disabled = 'disabled'),
                        (e.Focused = 'focused'),
                        (e.Alert = 'alert'),
                        (e.Selected = 'selected'));
                })(K || (K = {})),
                    (function (e) {
                        ((e.ExtraSmall = 'extraSmall'), (e.Small = 'small'), (e.Medium = 'medium'));
                    })(J || (J = {})));
                var Q = u(6349),
                    ee = u(7727);
                const te = {
                    base: 'DropDownControl_base_46',
                    base__extraSmall: 'DropDownControl_base__extraSmall_a3',
                    base__small: 'DropDownControl_base__small_22',
                    base__medium: 'DropDownControl_base__medium_09',
                    base__disabled: 'DropDownControl_base__disabled_37',
                    base__focused: 'DropDownControl_base__focused_63',
                    base__selected: 'DropDownControl_base__selected_46',
                    stateHighlight: 'DropDownControl_stateHighlight_16',
                    base__over: 'DropDownControl_base__over_e7',
                    base__down: 'DropDownControl_base__down_1c',
                    base__open: 'DropDownControl_base__open_e3',
                    label: 'DropDownControl_label_12',
                    label__extraSmall: 'DropDownControl_label__extraSmall_3d',
                    label__small: 'DropDownControl_label__small_e7',
                    label__medium: 'DropDownControl_label__medium_0b',
                    label__placeholder: 'DropDownControl_label__placeholder_98',
                    button: 'DropDownControl_button_cb',
                    button__extraSmall: 'DropDownControl_button__extraSmall_d2',
                    button__small: 'DropDownControl_button__small_b5',
                    button__medium: 'DropDownControl_button__medium_14',
                    gradient: 'DropDownControl_gradient_b5',
                    disabled: 'DropDownControl_disabled_4e',
                    arrow: 'DropDownControl_arrow_de',
                    arrow__extraSmall: 'DropDownControl_arrow__extraSmall_eb',
                    arrow__small: 'DropDownControl_arrow__small_77',
                    arrow__medium: 'DropDownControl_arrow__medium_3d',
                    alert: 'DropDownControl_alert_75',
                    blink: 'DropDownControl_blink_68',
                };
                let ue;
                !(function (e) {
                    ((e.Out = 'out'), (e.Over = 'over'), (e.Down = 'down'));
                })(ue || (ue = {}));
                const ne = (0, a.memo)(
                        ({
                            parentId: e,
                            variant: t = K.Basic,
                            size: u = J.Medium,
                            isOpen: n,
                            placeholder: r = R.strings.common.dropdown.placeholder.select(),
                            label: l = '',
                            classMix: s,
                            onClick: o,
                            soundHover: c,
                            soundClick: _,
                            customControl: d,
                        }) => {
                            const m = (0, a.useState)(ue.Out),
                                E = m[0],
                                g = m[1],
                                A = (0, a.useState)(!1),
                                f = A[0],
                                b = A[1],
                                D = t === K.Disabled,
                                F = D || t === K.Basic,
                                C = (0, a.useCallback)(() => {
                                    D || (g(ue.Over), c && (0, ee.G)(c));
                                }, [D, c]),
                                v = (0, a.useCallback)(() => g(ue.Out), []);
                            return (
                                (0, a.useEffect)(() => {
                                    F || b(!1);
                                }, [t, F]),
                                (0, a.useEffect)(() => {
                                    D && v();
                                }, [D, v]),
                                i().createElement(
                                    'div',
                                    {
                                        id: e ? `${e}_control` : void 0,
                                        className: p()(
                                            te.base,
                                            n && te.base__open,
                                            te[`base__${E}`],
                                            (F || !f) && te[`base__${t}`],
                                            s,
                                        ),
                                        onMouseEnter: C,
                                        onMouseUp: () => {
                                            (!D && g(ue.Over), !F && b(!0));
                                        },
                                        onMouseDown: () => {
                                            D || (g(ue.Down), _ && (0, ee.G)(_));
                                        },
                                        onMouseLeave: v,
                                        onClick: o,
                                    },
                                    i().createElement('div', { className: te.stateHighlight }),
                                    !f && t === K.Alert && i().createElement('div', { className: te.alert }),
                                    i().createElement(
                                        'div',
                                        { className: p()(te.label, te[`label__${u}`], !l && te.label__placeholder) },
                                        d || i().createElement(Q.l, { content: l || r }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: p()(te.button, te[`button__${u}`]) },
                                        i().createElement('div', { className: p()(te.arrow, te[`arrow__${u}`]) }),
                                        i().createElement('div', { className: te.gradient }),
                                        D && i().createElement('div', { className: te.disabled }),
                                    ),
                                )
                            );
                        },
                    ),
                    re = (e, t, u) => (u < e ? e : u > t ? t : u);
                function ae(e, t, u = []) {
                    const n = (0, a.useRef)(0),
                        r = (0, a.useCallback)(() => {
                            (window.clearInterval(n.current), (n.current = 0));
                        }, u || []);
                    (0, a.useEffect)(() => r, [r]);
                    const i = (null != u ? u : []).concat([t]);
                    return [
                        (0, a.useCallback)((u) => {
                            (0 !== n.current && r(), (n.current = window.setInterval(() => e(u, !0), t)), e(u, !1));
                        }, i),
                        r,
                    ];
                }
                function ie(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return le(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return le(e, t);
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
                function le(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                function se(e, t, u) {
                    const n = (0, a.useMemo)(
                        () =>
                            (function (e, t, u, n) {
                                let r,
                                    a = !1,
                                    i = 0;
                                function l() {
                                    r && clearTimeout(r);
                                }
                                function s(...s) {
                                    const o = this,
                                        c = Date.now() - i;
                                    function _() {
                                        ((i = Date.now()), u.apply(o, s));
                                    }
                                    a ||
                                        (n && !r && _(),
                                        l(),
                                        void 0 === n && c > e
                                            ? _()
                                            : !0 !== t &&
                                              (r = setTimeout(
                                                  n
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : _,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                                    (s.cancel = function () {
                                        (l(), (a = !0));
                                    }),
                                    s
                                );
                            })(u, e),
                        t,
                    );
                    return ((0, a.useEffect)(() => n.cancel, [n]), n);
                }
                let oe;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(oe || (oe = {}));
                const ce = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    _e = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: n,
                        getWrapperSize: r,
                        forceTriggerMouseMove: i,
                    }) => {
                        const l = (e, u) => {
                            const n = t(e),
                                r = n[0],
                                a = n[1];
                            return a <= r ? 0 : re(r, a, u);
                        };
                        return (s = {}) => {
                            const o = s.settings,
                                c = void 0 === o ? ce : o,
                                _ = (0, a.useRef)(null),
                                d = (0, a.useRef)(null),
                                m = (0, a.useRef)(!1),
                                E = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        n = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        r = (e, ...u) => {
                                            for (var n, r = ie(t(e).values()); !(n = r()).done; ) (0, n.value)(...u);
                                        };
                                    return (0, a.useMemo)(() => ({ on: u, off: n, trigger: r }), []);
                                })(),
                                p = se(
                                    () => {
                                        i && i();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, v.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = _.current;
                                        t && (u(t, e), E.trigger('change', e), i && m.current && p());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                A = g[0],
                                f = g[1],
                                b = (0, a.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const r = A.scrollPosition.get(),
                                            a = (null != (n = A.scrollPosition.goal) ? n : 0) - r;
                                        return l(e, t * u + a + r);
                                    },
                                    [A.scrollPosition],
                                ),
                                D = (0, a.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = _.current;
                                        n &&
                                            f.start({
                                                scrollPosition: l(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: c.animationConfig,
                                                from: { scrollPosition: l(n, A.scrollPosition.get()) },
                                            });
                                    },
                                    [f, c.animationConfig, A.scrollPosition],
                                ),
                                F = (0, a.useCallback)(
                                    (e) => {
                                        const t = _.current,
                                            u = d.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, c.step),
                                            a = b(t, e, n);
                                        D(a);
                                    },
                                    [D, b, c.step],
                                ),
                                C = (0, a.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && F(n(e)),
                                            _.current && E.trigger('mouseWheel', e, A.scrollPosition, t(_.current)));
                                    },
                                    [A.scrollPosition, F, E],
                                ),
                                h = ((e, t = []) => {
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
                                        (0, V.v)(() => {
                                            const e = _.current;
                                            e &&
                                                (D(l(e, A.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [D, A.scrollPosition.goal],
                                ),
                                B = q(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const t = l(e, A.scrollPosition.goal);
                                    (t !== A.scrollPosition.goal && D(t, { immediate: !0 }),
                                        E.trigger('recalculateContent'));
                                });
                            ((0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', h),
                                    () => {
                                        window.removeEventListener('resize', h);
                                    }
                                ),
                                [h],
                            ),
                                (0, a.useEffect)(() => {
                                    const e = _.current;
                                    if (!e || !i) return;
                                    const t = () => {
                                            m.current = !0;
                                        },
                                        u = () => {
                                            m.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', t),
                                        e.addEventListener('mouseleave', u),
                                        () => {
                                            (e.removeEventListener('mouseenter', t),
                                                e.removeEventListener('mouseleave', u));
                                        }
                                    );
                                }, [_]));
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? r(d.current) : void 0),
                                    getContainerSize: () => (_.current ? e(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? t(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: l,
                                    handleMouseWheel: C,
                                    applyScroll: D,
                                    applyStepTo: F,
                                    contentRef: _,
                                    wrapperRef: d,
                                    scrollPosition: f,
                                    animationScroll: A,
                                    recalculateContent: B,
                                    events: { on: E.on, off: E.off },
                                }),
                                [A.scrollPosition, D, F, E.off, E.on, B, C, f, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    de = _e({
                        getBounds: (e) => {
                            var t, u;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (u = e.parentElement) ? void 0 : u.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            var u;
                            e.style.transform = `translateX(-${0 | (null != (u = t.value.scrollPosition) ? u : 0)}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? oe.Next : oe.Prev),
                        forceTriggerMouseMove: F.O.view.forceTriggerMouseMove,
                    }),
                    me = 'HorizontalBar_base_49',
                    Ee = 'HorizontalBar_base__active_5e',
                    pe = 'HorizontalBar_leftButton_5f',
                    ge = 'HorizontalBar_rightButton_03',
                    Ae = 'HorizontalBar_track_0d',
                    fe = 'HorizontalBar_thumb_fd',
                    be = 'HorizontalBar_rail_32',
                    De = 'disable',
                    Fe = { pending: !1, offset: 0 },
                    Ce = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    ve = () => {},
                    he = (e, t) => Math.max(20, e.offsetWidth * t),
                    Be = (0, a.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Ce, onDrag: n = ve }) => {
                        const r = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            _ = e.stepTimeout || 100,
                            d = (0, a.useState)(Fe),
                            m = d[0],
                            E = d[1],
                            g = (0, a.useCallback)(
                                (e) => {
                                    (E(e),
                                        c.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [n],
                            ),
                            A = () => {
                                const t = o.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / r),
                                    _ = re(0, 1, a / (r - n)),
                                    d = (t.offsetWidth - he(t, i)) * _;
                                ((u.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (l.current && s.current && o.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    l.current.classList.add(De),
                                                    void s.current.classList.remove(De)
                                                );
                                            if (
                                                ((t = o.current),
                                                (u = c.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    l.current.classList.remove(De),
                                                    void s.current.classList.add(De)
                                                );
                                            var t, u;
                                            (l.current.classList.remove(De), s.current.classList.remove(De));
                                        }
                                    })(d));
                            },
                            f = q(() => {
                                ((() => {
                                    const t = c.current,
                                        u = o.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && t && n && u)) return;
                                    const i = Math.min(1, n / a);
                                    ((t.style.width = `${he(u, i)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 !== i ? r.current.classList.add(Ee) : r.current.classList.remove(Ee)));
                                })(),
                                    A());
                            });
                        ((0, a.useEffect)(() => (0, V.v)(f)),
                            (0, a.useEffect)(
                                () =>
                                    (0, V.v)(() => {
                                        const t = () => {
                                            A();
                                        };
                                        let u = ve;
                                        const n = () => {
                                            (u(), (u = (0, V.v)(f)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', f),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (u(),
                                                    e.events.off('recalculateContent', f),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!m.pending) return;
                                const t = F.O.client.events.mouse.move(([t, u]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!a || !i) return;
                                        const l = o.current,
                                            s = c.current;
                                        if (!l || !s) return;
                                        if ('inside' === u && t.clientX < 0) return;
                                        const _ = t.clientX - m.offset - l.getBoundingClientRect().x,
                                            d = (_ / l.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, d),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: _, contentOffset: d }));
                                    }),
                                    u = F.O.client.events.mouse.up(() => {
                                        (t(), g(Fe));
                                    });
                                return () => {
                                    (t(), u());
                                };
                            }, [e, m.offset, m.pending, n, g]));
                        const b = ae((t) => e.applyStepTo(t), _, [e]),
                            D = b[0],
                            C = b[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const v = (e) => {
                            e.target.classList.contains(De) || (0, ee.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: p()(me, t.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: p()(pe, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(De) ||
                                        0 !== e.button ||
                                        ((0, ee.G)('play'), D(oe.Next));
                                },
                                onMouseUp: C,
                                ref: l,
                                onMouseEnter: v,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: p()(Ae, t.track),
                                    onMouseDown: (t) => {
                                        const n = c.current;
                                        if (n && 0 === t.button)
                                            if (((0, ee.G)('play'), t.target === n))
                                                g({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const n = c.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = u(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * t);
                                                })(t.screenX > n.getBoundingClientRect().x ? oe.Prev : oe.Next);
                                            }
                                    },
                                    ref: o,
                                    onMouseEnter: v,
                                },
                                i().createElement('div', { ref: c, className: p()(fe, t.thumb) }),
                                i().createElement('div', { className: p()(be, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: p()(ge, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(De) ||
                                        0 !== e.button ||
                                        ((0, ee.G)('play'), D(oe.Prev));
                                },
                                onMouseUp: C,
                                ref: s,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    we = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ke = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: l,
                        scrollClassName: s,
                        getStepByRailClick: o,
                        onDrag: c,
                    }) => {
                        const _ = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: p()(we.base, e.base) });
                            }, [n]),
                            d = (0, a.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: p()(we.defaultScroll, u), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: p()(we.defaultScrollArea, r) },
                                i().createElement(ye, { className: s, api: d, classNames: l }, e),
                            ),
                            i().createElement(Be, { getStepByRailClick: o, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    ye = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, a.useEffect)(() => (0, V.v)(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: p()(we.base, t) },
                            i().createElement(
                                'div',
                                {
                                    className: p()(we.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: p()(we.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                ((ye.Bar = Be), (ye.Default = ke));
                const Se = _e({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? oe.Next : oe.Prev),
                    }),
                    xe = 'VerticalBar_base_f3',
                    Ne = 'VerticalBar_base__active_72',
                    Re = 'VerticalBar_topButton_d7',
                    Le = 'VerticalBar_bottomButton_06',
                    Te = 'VerticalBar_track_df',
                    Oe = 'VerticalBar_thumb_32',
                    Ie = 'VerticalBar_rail_43',
                    Me = 'disable',
                    Pe = () => {},
                    He = { pending: !1, offset: 0 },
                    je = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    We = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    $e = (e, t) => Math.max(20, e.offsetHeight * t),
                    ze = (0, a.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = je, onDrag: n = Pe }) => {
                        const r = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            _ = e.stepTimeout || 100,
                            d = (0, a.useState)(He),
                            m = d[0],
                            E = d[1],
                            g = (0, a.useCallback)(
                                (e) => {
                                    (E(e),
                                        c.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [n],
                            ),
                            A = q(() => {
                                const t = c.current,
                                    u = o.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && t && u)) return;
                                const i = Math.min(1, n / a);
                                return (
                                    (t.style.height = `${$e(u, i)}px`),
                                    (t.style.display = 'flex'),
                                    r.current &&
                                        (1 !== i ? r.current.classList.add(Ne) : r.current.classList.remove(Ne)),
                                    i
                                );
                            }),
                            f = q(() => {
                                const t = o.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / r),
                                    _ = re(0, 1, a / (r - n)),
                                    d = (t.offsetHeight - $e(t, i)) * _;
                                ((u.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (l.current && s.current && o.current && c.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    l.current.classList.add(Me),
                                                    void s.current.classList.remove(Me)
                                                );
                                            if (
                                                ((t = o.current),
                                                (u = c.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    l.current.classList.remove(Me),
                                                    void s.current.classList.add(Me)
                                                );
                                            var t, u;
                                            (l.current.classList.remove(Me), s.current.classList.remove(Me));
                                        }
                                    })(d));
                            }),
                            b = q(() => {
                                We(e, () => {
                                    (A(), f());
                                });
                            });
                        ((0, a.useEffect)(() => (0, V.v)(b)),
                            (0, a.useEffect)(() => {
                                const t = () => {
                                    We(e, () => {
                                        f();
                                    });
                                };
                                let u = Pe;
                                const n = () => {
                                    (u(), (u = (0, V.v)(b)));
                                };
                                return (
                                    e.events.on('recalculateContent', b),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (u(),
                                            e.events.off('recalculateContent', b),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!m.pending) return;
                                const t = F.O.client.events.mouse.up(() => {
                                        g(He);
                                    }),
                                    u = F.O.client.events.mouse.move(([t]) => {
                                        We(e, (u) => {
                                            const r = o.current,
                                                a = c.current,
                                                i = e.getContainerSize();
                                            if (!r || !a || !i) return;
                                            const l = t.screenY - m.offset - r.getBoundingClientRect().y,
                                                s = (l / r.offsetHeight) * i;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: l, contentOffset: s }));
                                        });
                                    });
                                return () => {
                                    (t(), u());
                                };
                            }, [e, m.offset, m.pending, n, g]));
                        const D = ae((t) => e.applyStepTo(t), _, [e]),
                            C = D[0],
                            v = D[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const h = (e) => {
                            e.target.classList.contains(Me) || (0, ee.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: p()(xe, t.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: p()(Re, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Me) ||
                                        0 !== e.button ||
                                        ((0, ee.G)('play'), C(oe.Next));
                                },
                                ref: l,
                                onMouseEnter: h,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: p()(Te, t.track),
                                    onMouseDown: (t) => {
                                        const n = c.current;
                                        if (n && 0 === t.button)
                                            if (((0, ee.G)('play'), t.target === n))
                                                g({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    c.current &&
                                                        We(e, (n) => {
                                                            if (!n) return;
                                                            const r = u(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * t);
                                                            e.applyScroll(a);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? oe.Prev : oe.Next);
                                            }
                                    },
                                    ref: o,
                                    onMouseEnter: h,
                                },
                                i().createElement('div', { ref: c, className: p()(Oe, t.thumb) }),
                                i().createElement('div', { className: p()(Ie, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: p()(Le, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Me) ||
                                        0 !== e.button ||
                                        ((0, ee.G)('play'), C(oe.Prev));
                                },
                                onMouseUp: v,
                                ref: s,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    Ge = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Ve = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: l,
                        scrollClassNames: s,
                        getStepByRailClick: o,
                        onDrag: c,
                    }) => {
                        const _ = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: p()(Ge.base, e.base) });
                            }, [n]),
                            d = (0, a.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: p()(Ge.defaultScroll, u), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: p()(Ge.area, r) },
                                i().createElement(Ue, { className: l, classNames: s, api: d }, e),
                            ),
                            i().createElement(ze, { getStepByRailClick: o, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    Ue = ({ className: e, classNames: t, children: u, api: n }) => (
                        (0, a.useEffect)(() => (0, V.v)(n.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: p()(Ge.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: p()(Ge.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                u,
                            ),
                        )
                    );
                Ue.Default = Ve;
                const qe = { Vertical: r, Horizontal: n },
                    Ze = 'VerticalAutoScroll_base_db',
                    Ye = { base: 'VerticalAutoScroll_barBase_93' },
                    Xe = { content: 'VerticalAutoScroll_content_47' },
                    Ke = ({
                        children: e,
                        isEnabled: t = !0,
                        selectedItemId: u,
                        scrollAreaKey: n = 'scrollArea',
                        withCompleteTrigger: r = !1,
                        containerClasses: l,
                    }) => {
                        const s = (0, a.useState)(!1),
                            o = s[0],
                            c = s[1],
                            _ = (0, a.useState)(!1),
                            d = _[0],
                            m = _[1],
                            E = (0, a.useRef)(null),
                            g = (0, a.useRef)(null),
                            A = Se(),
                            f = q(() => {
                                c(!0);
                            }),
                            b = (0, a.useCallback)(() => {
                                c(!1);
                            }, []),
                            D = (0, a.useCallback)(() => {
                                const e = g.current,
                                    t = E.current;
                                if (e && A && t) {
                                    const u = e.offsetTop + 0.5 * (e.offsetHeight - t.offsetHeight);
                                    (r && A.events.on('rest', f), A.applyScroll(u));
                                }
                            }, [f, A, r]);
                        ((0, a.useEffect)(
                            () => () => {
                                A.events.off('rest', f);
                            },
                            [f, A.events, r],
                        ),
                            (0, a.useEffect)(() => {
                                if (t && null !== u) return (0, V.v)(D);
                            }, [n, D, u, t]),
                            (0, a.useEffect)(() => {
                                const e = () => {
                                    const e = A.getContainerSize(),
                                        t = A.getWrapperSize();
                                    e && t && m(e > t);
                                };
                                return (
                                    A.events.on('recalculateContent', e),
                                    () => {
                                        A.events.off('recalculateContent', e);
                                    }
                                );
                            }, [d, A]));
                        const F = {
                                scrollContainerRef: E,
                                selectedItemRef: g,
                                selectedItemId: u,
                                isScrollComplete: o,
                                scrollbarActive: d,
                                onScrollAnimationComplete: b,
                            },
                            C = (0, a.cloneElement)(e, F);
                        return i().createElement(
                            'div',
                            { className: p()(Ze, l), ref: E },
                            i().createElement(qe.Vertical.Area, { api: A, key: n, classNames: Xe }, C),
                            i().createElement(qe.Vertical.Bar, { api: A, classNames: Ye }),
                        );
                    },
                    Je = {
                        base: 'DropDownItem_base_5e',
                        base__extraSmall: 'DropDownItem_base__extraSmall_5a',
                        base__small: 'DropDownItem_base__small_d6',
                        base__medium: 'DropDownItem_base__medium_e4',
                        base__selected: 'DropDownItem_base__selected_8e',
                        base__disabled: 'DropDownItem_base__disabled_21',
                    },
                    Qe = ['size', 'classMix', 'onClick', 'itemRenderer'];
                const et = (0, a.memo)((e) => {
                        let t = e.size,
                            u = e.classMix,
                            n = e.onClick,
                            r = e.itemRenderer,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, Qe);
                        const s = l.id,
                            o = l.isSelected,
                            c = l.isDisabled,
                            _ = l.label,
                            d = l.soundHover,
                            m = l.soundClick,
                            E = (0, a.useCallback)(
                                (e) => {
                                    c || (n && n(e, s));
                                },
                                [s, c, n],
                            ),
                            g = (0, a.useCallback)(() => {
                                c || (d && (0, ee.G)(d));
                            }, [c, d]),
                            A = (0, a.useCallback)(() => {
                                c || (m && (0, ee.G)(m));
                            }, [c, m]),
                            f = p()(Je.base, t && Je[`base__${t}`], o && Je.base__selected, c && Je.base__disabled, u);
                        return i().createElement(
                            'div',
                            { className: f, onMouseEnter: g, onMouseDown: A, onClick: E },
                            r ? r(l) : _,
                        );
                    }),
                    tt = { base__withScroll: 'DropDownItems_base__withScroll_19' };
                function ut() {
                    return (
                        (ut =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ut.apply(this, arguments)
                    );
                }
                const nt = ({
                        size: e,
                        items: t,
                        selectedIds: u,
                        selectedItemId: n,
                        selectedItemRef: r,
                        onClick: a,
                        parentId: l,
                        soundHover: s,
                        soundClick: o,
                        itemClassMix: c,
                        itemRenderer: _,
                        scrollbarActive: d,
                    }) =>
                        i().createElement(
                            'div',
                            { className: p()(tt.base, d && tt.base__withScroll) },
                            t.map((t) => {
                                const d = `${l}_${t.id}`;
                                return i().createElement(
                                    'div',
                                    { id: l ? d : void 0, key: d, ref: t.id === n ? r : null },
                                    i().createElement(
                                        et,
                                        ut({ size: e, soundHover: s, soundClick: o, classMix: c, itemRenderer: _ }, t, {
                                            onClick: a,
                                            isSelected: u.includes(t.id),
                                        }),
                                    ),
                                );
                            }),
                        ),
                    rt = {
                        base: 'DropDownList_base_62',
                        base__extraSmall: 'DropDownList_base__extraSmall_60',
                        base__small: 'DropDownList_base__small_0c',
                        base__medium: 'DropDownList_base__medium_99',
                    },
                    at = ({
                        parentId: e,
                        size: t = J.Medium,
                        items: u,
                        selectedIds: n,
                        isOpen: r,
                        autoScroll: l,
                        classMix: s,
                        itemClassMix: o,
                        itemRenderer: c,
                        onClick: _,
                        soundHover: d,
                        soundClick: m,
                    }) => {
                        const E = (0, a.useState)(null),
                            g = E[0],
                            A = E[1],
                            f = (0, C.D9)(r);
                        (0, a.useEffect)(() => {
                            if (r && !f) {
                                const e = ((e, t) => {
                                    if (!t.length) return null;
                                    const u = e.find((e) => t.includes(e.id));
                                    return u ? u.id : null;
                                })(u, n);
                                null !== e && A(e);
                            }
                            r || A(null);
                        }, [r, u, n, f]);
                        const b = e ? `${e}_list` : void 0;
                        return i().createElement(
                            'div',
                            { id: b, className: p()(rt.base, rt[`base__${t}`], s) },
                            i().createElement(
                                Ke,
                                { selectedItemId: g, isEnabled: l },
                                i().createElement(nt, {
                                    parentId: e,
                                    items: u,
                                    size: t,
                                    selectedIds: n,
                                    onClick: _,
                                    soundHover: d,
                                    soundClick: m,
                                    itemClassMix: o,
                                    itemRenderer: c,
                                }),
                            ),
                        );
                    },
                    it = {
                        base: 'PureDropDown_base_fc',
                        base__extraSmall: 'PureDropDown_base__extraSmall_31',
                        base__small: 'PureDropDown_base__small_a6',
                        base__medium: 'PureDropDown_base__medium_05',
                        control__down: 'PureDropDown_control__down_18',
                        list: 'PureDropDown_list_28',
                        list__up: 'PureDropDown_list__up_a1',
                        list__down: 'PureDropDown_list__down_c4',
                        list__under: 'PureDropDown_list__under_64',
                        list__above: 'PureDropDown_list__above_c8',
                    },
                    lt = (0, a.memo)(
                        ({
                            componentId: e,
                            containerRef: t,
                            items: u,
                            selected: n = [],
                            variant: r = K.Basic,
                            size: l = J.Medium,
                            multiple: s = !1,
                            autoScroll: o = !0,
                            placeholder: c,
                            classMix: _,
                            className: d,
                            controlRenderer: m,
                            itemRenderer: E,
                            open: g,
                            tooltipArgs: A,
                            onChanges: b,
                            onOpen: D,
                            onClose: F,
                            onClick: C,
                            onClickOutside: v,
                            onMouseEnter: h,
                            onMouseDown: B,
                            onMouseUp: w,
                            onMouseLeave: k,
                            soundHover: y = 'highlight',
                            soundClick: S = 'play',
                            soundItemHover: x,
                            soundItemClick: N,
                        }) => {
                            const R = (0, a.useRef)(null),
                                L = (0, a.useRef)(null),
                                T = (0, a.useRef)({ open: !1, listAbove: !1 }),
                                O = (0, a.useState)(!1),
                                I = O[0],
                                M = O[1],
                                P = (0, a.useState)(!1),
                                H = P[0],
                                j = P[1],
                                W = G(n, s),
                                $ = r !== K.Disabled,
                                z = void 0 === g,
                                U = Boolean(z ? I : g),
                                Q = q(() => {
                                    T.current.open && ((T.current.open = !1), M(!1), null == F || F());
                                });
                            (0, Z.gd)(U ? Y.n.ESCAPE : Y.n.NONE, Q, U);
                            const ee = q(() => {
                                (null == v || v(), z && (M(!1), (T.current.open = !1), null == F || F()));
                            });
                            ((0, a.useEffect)(() => {
                                const e = R.current;
                                if (e && U)
                                    return (
                                        X.c1.register(e, ee),
                                        () => {
                                            X.c1.unregister(e, ee);
                                        }
                                    );
                            }, [U, ee]),
                                (0, a.useEffect)(() => {
                                    void 0 !== g && (T.current.open = g);
                                }, [g]));
                            const te = (0, a.useCallback)(() => {
                                if (!R.current || !L.current) return;
                                const e = t && t.current,
                                    u = e ? e.getBoundingClientRect().bottom : window.innerHeight,
                                    n =
                                        R.current.getBoundingClientRect().bottom +
                                            L.current.getBoundingClientRect().height >
                                        u;
                                n !== T.current.listAbove && ((T.current.listAbove = n), j(n));
                            }, [t]);
                            (0, a.useEffect)(() => (0, V.v)(() => (0, V.v)(te)), [te, l, u.length]);
                            const ue = (0, a.useCallback)(
                                    (e) => {
                                        const t = W.findIndex((t) => t === e) > -1;
                                        let u = [];
                                        ((u = s ? (t ? W.filter((t) => t !== e) : [e, ...W]) : t ? [] : [e]),
                                            null == b || b(u));
                                    },
                                    [s, b, W],
                                ),
                                re = (0, a.useCallback)(() => {
                                    z &&
                                        ((T.current.open = !T.current.open),
                                        M(T.current.open),
                                        T.current.open ? null == D || D() : null == F || F());
                                }, [z, D, F]),
                                ae = (0, a.useCallback)(
                                    (e) => {
                                        ($ && re(), null == C || C(e));
                                    },
                                    [$, C, re],
                                ),
                                ie = (0, a.useCallback)(
                                    (e, t) => {
                                        (null == C || C(e, t), ue(t), s || re());
                                    },
                                    [C, s, re, ue],
                                ),
                                le = (0, a.useMemo)(
                                    () =>
                                        u
                                            .filter((e) => W.includes(e.id))
                                            .map((e) => e.label)
                                            .join(', '),
                                    [u, W],
                                ),
                                se = (0, a.useMemo)(() => u.filter((e) => W.includes(e.id)), [u, W]),
                                oe = m ? m(se) : void 0;
                            return i().createElement(
                                'div',
                                {
                                    id: e,
                                    ref: R,
                                    className: p()(it.base, it[`base__${l}`], d, null == _ ? void 0 : _.base),
                                    onMouseEnter: h,
                                    onMouseUp: w,
                                    onMouseDown: B,
                                    onMouseLeave: k,
                                },
                                i().createElement(
                                    'div',
                                    { className: p()(it.control, U && it.control__down) },
                                    i().createElement(
                                        f.l,
                                        { tooltipArgs: A },
                                        i().createElement(ne, {
                                            parentId: e,
                                            size: l,
                                            variant: r,
                                            isOpen: U,
                                            placeholder: c,
                                            label: le,
                                            classMix: _ && _.control,
                                            onClick: ae,
                                            soundHover: y,
                                            soundClick: S,
                                            customControl: oe,
                                        }),
                                    ),
                                ),
                                i().createElement(
                                    'div',
                                    {
                                        ref: L,
                                        className: p()(
                                            it.list,
                                            U ? it.list__down : it.list__up,
                                            H ? it.list__above : it.list__under,
                                        ),
                                    },
                                    i().createElement(at, {
                                        parentId: e,
                                        size: l,
                                        items: u,
                                        selectedIds: W,
                                        isOpen: U,
                                        autoScroll: o,
                                        classMix: _ && _.list,
                                        itemClassMix: _ && _.item,
                                        itemRenderer: E,
                                        onClick: ie,
                                        soundHover: x || y,
                                        soundClick: N || S,
                                    }),
                                ),
                            );
                        },
                    ),
                    st = ['items', 'selected', 'multiple', 'onChanges'];
                function ot() {
                    return (
                        (ot =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ot.apply(this, arguments)
                    );
                }
                const ct = (e) => {
                    let t = e.items,
                        u = e.selected,
                        n = void 0 === u ? [] : u,
                        r = e.multiple,
                        l = void 0 !== r && r,
                        s = e.onChanges,
                        o = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, st);
                    const c = (0, a.useMemo)(() => G(n, l), [JSON.stringify(n), l]),
                        _ = (0, a.useState)(c),
                        d = _[0],
                        m = _[1],
                        E = (0, a.useCallback)(
                            (e) => {
                                0 !== e.length && (m(e), null == s || s(t.filter((t) => e.includes(t.id))));
                            },
                            [t, s],
                        ),
                        p = (0, C.D9)(c);
                    return (
                        (0, a.useEffect)(() => {
                            var e, t;
                            ((e = p || []), (t = c), JSON.stringify(e) !== JSON.stringify(t) && m(c));
                        }, [p, c]),
                        i().createElement(lt, ot({ onChanges: E, items: t, selected: d, multiple: l }, o))
                    );
                };
                var _t = u(514),
                    dt = u(7405),
                    mt = u(2056),
                    Et = u(5298);
                const pt = 'Price_price_dd',
                    gt = 'Price_price__withTooltip_59',
                    At = 'Price_free_1b',
                    ft = 'Price_resetCardPriceIcon_89',
                    bt = 'Price_recertificationPrice_b6';
                function Dt() {
                    return (
                        (Dt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Dt.apply(this, arguments)
                    );
                }
                const Ft = ({
                        cost: e,
                        tooltip: t,
                        index: u,
                        optionIndex: n = -1,
                        tooltipRootId: r,
                        className: a,
                        isRecertification: l = !1,
                    }) => {
                        if (l)
                            return i().createElement(
                                'div',
                                { className: p()(bt, a) },
                                i().createElement('div', null, 1),
                                i().createElement('div', { className: ft }),
                            );
                        if (e.value === e.discountValue && 0 === e.value && !e.isDiscount)
                            return i().createElement(
                                'div',
                                { className: p()(At, a) },
                                R.strings.dialogs.priceCard.price.free(),
                            );
                        const s = (0, Et.l)(t.type, { index: u, optionIndex: n });
                        return i().createElement(
                            'div',
                            { className: p()(pt, s.isEnabled && gt, a) },
                            i().createElement(
                                mt.u,
                                Dt({}, s, { targetId: r }),
                                i().createElement(
                                    'div',
                                    null,
                                    i().createElement(dt.F, Dt({}, e, { isInteractiveDiscount: !0 })),
                                ),
                            ),
                        );
                    },
                    Ct = {
                        price: 'PriceSelector_price_9b',
                        price__specialDiscount: 'PriceSelector_price__specialDiscount_fd',
                        price__small: 'PriceSelector_price__small_ac',
                        dropDown: 'PriceSelector_dropDown_98',
                        dropDown__small: 'PriceSelector_dropDown__small_75',
                        item: 'PriceSelector_item_c2',
                        dropDownPrice: 'PriceSelector_dropDownPrice_84',
                        dropDownPrice__specialDiscount: 'PriceSelector_dropDownPrice__specialDiscount_a8',
                        dropDownPrice__control: 'PriceSelector_dropDownPrice__control_e1',
                    },
                    vt = ({ id: e, meta: t }, u) => {
                        const n = t,
                            r = n.price,
                            a = n.withSpecialDiscount,
                            l = n.priceTooltip,
                            s = n.tooltipRootId,
                            o = n.index,
                            c = n.kwargs,
                            _ = c ? JSON.parse(c) : {};
                        return i().createElement(Ft, {
                            key: e,
                            cost: r,
                            tooltip: l,
                            index: o,
                            optionIndex: null == _ ? void 0 : _.optionIndex,
                            tooltipRootId: s,
                            className: p()(
                                Ct.dropDownPrice,
                                a && Ct.dropDownPrice__specialDiscount,
                                u && Ct.dropDownPrice__control,
                            ),
                        });
                    },
                    ht = (e) => {
                        if (0 !== e.length) return vt(e[0], !0);
                    },
                    Bt = ({
                        index: e,
                        price: t,
                        size: u,
                        priceTooltip: n,
                        priceList: r,
                        selectedOptionIdx: l,
                        tooltipRootId: s,
                        withSpecialDiscount: c,
                        parsedKwargs: _,
                        cardState: d,
                        onPriceSelect: m,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                            const t = o.UI(r, (t, u) => ({
                                id: u,
                                label: '',
                                meta: Object.assign({}, t, {
                                    tooltipRootId: s,
                                    withSpecialDiscount: c,
                                    index: e,
                                    priceTooltip: n,
                                }),
                            }));
                            return t;
                        }, [e, r, s, c, n]);
                        if (0 === r.length || c)
                            return i().createElement(Ft, {
                                cost: t,
                                tooltip: n,
                                index: e,
                                tooltipRootId: s,
                                className: p()(Ct.price, Ct[`price__${u}`], c && Ct.price__specialDiscount),
                                isRecertification: null == _ ? void 0 : _.isRecertificationCard,
                            });
                        return i().createElement(ct, {
                            className: p()(Ct.dropDown, Ct[`dropDown__${u}`]),
                            selected: -1 === l ? void 0 : l,
                            soundClick: d === D.Selected ? _t.jX.click : null,
                            items: E,
                            itemRenderer: vt,
                            controlRenderer: ht,
                            onChanges: (t) => {
                                if (d !== D.Disabled && t && t.length) {
                                    const u = t[0],
                                        n = u.meta.kwargs,
                                        r = n ? JSON.parse(n) : {};
                                    m(e, u.id, null == r ? void 0 : r.optionIndex);
                                }
                            },
                            classMix: { item: Ct.item },
                        });
                    },
                    wt = {
                        base: 'PriceCard_base_1c',
                        base__small: 'PriceCard_base__small_b0',
                        base__selected: 'PriceCard_base__selected_e3',
                        base__hoverEnabled: 'PriceCard_base__hoverEnabled_18',
                        hoverRays: 'PriceCard_hoverRays_75',
                        base__disabled: 'PriceCard_base__disabled_9c',
                        tooltip: 'PriceCard_tooltip_69',
                        tooltipBox: 'PriceCard_tooltipBox_c9',
                        disabledPattern: 'PriceCard_disabledPattern_a7',
                        discountPattern: 'PriceCard_discountPattern_d5',
                        title: 'PriceCard_title_98',
                        icon: 'PriceCard_icon_43',
                        description: 'PriceCard_description_97',
                        description__reset: 'PriceCard_description__reset_aa',
                        bottomGlow: 'PriceCard_bottomGlow_a3',
                    };
                let kt;
                !(function (e) {
                    ((e.Big = 'big'), (e.Small = 'small'));
                })(kt || (kt = {}));
                const yt = ({ header: e, body: t, contentId: u }, n, r) =>
                        u
                            ? { contentId: u, targetId: n, args: { index: r } }
                            : t || e
                              ? { header: e || void 0, body: t || void 0 }
                              : void 0,
                    St = ({
                        onClick: e,
                        onPriceSelect: t,
                        tooltipRootId: u,
                        priceTooltip: n,
                        cardTooltip: r,
                        index: l,
                        selectedOptionIdx: s,
                        icon: c,
                        size: _ = kt.Big,
                        title: d,
                        description: m,
                        cardType: E,
                        kwargs: g,
                        price: A,
                        cardState: w,
                        priceList: k,
                        className: y,
                    }) => {
                        const x = w === D.Default,
                            N = (0, a.useMemo)(() => (g ? JSON.parse(g) : {}), [g]),
                            R = (0, C.D9)(N.value),
                            L = j(R, N.value),
                            T = E === b.Reset && N.withSpecialDiscount,
                            O = E === b.Retrain && L !== H.None,
                            I = w === D.Default && !T,
                            M = (0, v.useSpring)(() => {
                                const e = L === H.Increase ? -1 : 1;
                                return {
                                    from: { opacity: 1, y: 0 },
                                    to: [
                                        { opacity: 0, y: 30 * e },
                                        { y: -30 * e, immediate: !0 },
                                        { opacity: 1, y: 0 },
                                    ],
                                    config: { duration: 200, easing: h.qb },
                                };
                            }, [L])[0];
                        (0, a.useEffect)(() => {
                            L !== H.None &&
                                F.O.sound.play.sound(L === H.Increase ? B.gO.CREW_RETRAIN_UP : B.gO.CREW_RETRAIN_DOWN);
                        }, [L]);
                        const P = p()(wt.base, wt[`base__${_}`], wt[`base__${w}`], I && wt.base__hoverEnabled, y);
                        return i().createElement(
                            v.animated.div,
                            {
                                style: O ? M : void 0,
                                className: P,
                                onClick: () => {
                                    if (x) {
                                        F.O.sound.play.sound('play');
                                        const t = (0, o.U2)(k, s);
                                        if (!t) {
                                            const t =
                                                null != N && N.optionIndex ? (null == N ? void 0 : N.optionIndex) : l;
                                            return void e(l, t);
                                        }
                                        const u = t.kwargs ? JSON.parse(t.kwargs) : {};
                                        e(l, null == u ? void 0 : u.optionIndex);
                                    }
                                },
                                onMouseEnter: () => x && F.O.sound.play.sound('highlight'),
                            },
                            w === D.Disabled && i().createElement('div', { className: wt.disabledPattern }),
                            T && i().createElement('div', { className: wt.discountPattern }),
                            i().createElement('div', { className: wt.hoverRays }),
                            i().createElement('div', { className: wt.title }, d),
                            i().createElement('div', { className: wt.icon, style: { backgroundImage: `url(${c})` } }),
                            i().createElement(z, {
                                description: m,
                                cardType: E,
                                cardState: w,
                                kwargs: N,
                                className: p()(wt.description, wt[`description__${E}`]),
                            }),
                            i().createElement(
                                f.l,
                                { tooltipArgs: yt(r, u, l), className: wt.tooltip },
                                i().createElement('div', { className: wt.tooltipBox }),
                            ),
                            i().createElement(S, { cardType: E, kwargs: N }),
                            i().createElement(Bt, {
                                index: l,
                                price: A,
                                priceTooltip: n,
                                priceList: k,
                                selectedOptionIdx: s,
                                cardTooltip: r,
                                tooltipRootId: u,
                                withSpecialDiscount: T,
                                parsedKwargs: N,
                                cardState: w,
                                size: _,
                                onPriceSelect: t,
                            }),
                            T && i().createElement('div', { className: wt.bottomGlow }),
                        );
                    },
                    xt = 'PriceListApp_base_7d',
                    Nt = 'PriceListApp_card_6a';
                function Rt() {
                    return (
                        (Rt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Rt.apply(this, arguments)
                    );
                }
                const Lt = (0, A.Pi)(function ({ rootId: e, className: t }) {
                        const u = m(),
                            n = u.model,
                            r = u.controls,
                            a = (0, g.GS)().mediaSize;
                        return i().createElement(
                            'div',
                            { className: p()(xt, t) },
                            (0, o.UI)(n.computes.cards(), (t, u) =>
                                i().createElement(
                                    St,
                                    Rt({}, t, {
                                        key: u,
                                        onClick: r.onCardClick,
                                        onPriceSelect: r.onPriceSelect,
                                        index: u,
                                        tooltipRootId: e,
                                        size: a > g.cJ.Small ? kt.Big : kt.Small,
                                        className: Nt,
                                    }),
                                ),
                            ),
                        );
                    }),
                    Tt = i().memo(function ({
                        rootId: e = R.views.lobby.crew.widgets.PriceList('resId'),
                        className: t,
                    }) {
                        const u = (0, a.useMemo)(() => ({ rootId: e }), [e]);
                        return i().createElement(d, { options: u }, i().createElement(Lt, { rootId: e, className: t }));
                    });
            },
            776: (e, t, u) => {
                'use strict';
                let n;
                (u.d(t, { f: () => n }),
                    (function (e) {
                        ((e.backport = 'backport'), (e.normal = 'normal'), (e.absent = 'absent'));
                    })(n || (n = {})));
            },
            771: (e, t, u) => {
                'use strict';
                u.d(t, { GT: () => s, I: () => a, jw: () => i, sU: () => n, vA: () => l, y$: () => o, yb: () => r });
                const n = -1,
                    r = 1,
                    a = 100,
                    i = 'new_skill',
                    l = 9,
                    s = 6,
                    o = -1;
                let c;
                !(function (e) {
                    ((e.BlackReal = 'blackReal'),
                        (e.WhiteReal = 'whiteReal'),
                        (e.White = 'white'),
                        (e.WhiteOrange = 'whiteOrange'),
                        (e.WhiteSpanish = 'whiteSpanish'),
                        (e.Par = 'par'),
                        (e.ParSecondary = 'parSecondary'),
                        (e.ParTertiary = 'parTertiary'),
                        (e.Red = 'red'),
                        (e.RedDark = 'redDark'),
                        (e.Yellow = 'yellow'),
                        (e.Orange = 'orange'),
                        (e.Cream = 'cream'),
                        (e.Brown = 'brown'),
                        (e.GreenBright = 'greenBright'),
                        (e.Green = 'green'),
                        (e.GreenDark = 'greenDark'),
                        (e.BlueBooster = 'blueBooster'),
                        (e.BlueTeamkiller = 'blueTeamkiller'),
                        (e.Cred = 'cred'),
                        (e.Gold = 'gold'),
                        (e.Bond = 'bond'),
                        (e.Prom = 'prom'));
                })(c || (c = {}));
            },
            8460: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'Currency_base_57',
                    icon: 'Currency_icon_c5',
                    base__small: 'Currency_base__small_af',
                    base__big: 'Currency_base__big_bc',
                    base__large: 'Currency_base__large_65',
                    base__extraLarge: 'Currency_base__extraLarge_4d',
                    'icon__credits-small': 'Currency_icon__credits-small_9b',
                    'icon__credits-big': 'Currency_icon__credits-big_96',
                    'icon__credits-large': 'Currency_icon__credits-large_ac',
                    'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                    'icon__gold-small': 'Currency_icon__gold-small_86',
                    'icon__gold-big': 'Currency_icon__gold-big_15',
                    'icon__gold-large': 'Currency_icon__gold-large_36',
                    'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                    'icon__crystal-small': 'Currency_icon__crystal-small_27',
                    'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                    'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                    'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                    'icon__xp-small': 'Currency_icon__xp-small_a7',
                    'icon__xp-big': 'Currency_icon__xp-big_97',
                    'icon__xp-large': 'Currency_icon__xp-large_6b',
                    'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                    'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                    'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                    'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                    'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                    'icon__eliteXP-small': 'Currency_icon__eliteXP-small_45',
                    'icon__eliteXP-big': 'Currency_icon__eliteXP-big_c0',
                    'icon__eliteXP-large': 'Currency_icon__eliteXP-large_1b',
                    'icon__eliteXP-extraLarge': 'Currency_icon__eliteXP-extraLarge_9b',
                    'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                    'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                    'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                    'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                    value: 'Currency_value_e1',
                    value__freeXP: 'Currency_value__freeXP_cb',
                    value__credits: 'Currency_value__credits_76',
                    value__gold: 'Currency_value__gold_dd',
                    value__xp: 'Currency_value__xp_b0',
                    value__crystal: 'Currency_value__crystal_19',
                    value__equipCoin: 'Currency_value__equipCoin_d0',
                    value__eliteXP: 'Currency_value__eliteXP_62',
                    value__notEnough: 'Currency_value__notEnough_56',
                    stock: 'Currency_stock_87',
                    stock__indent: 'Currency_stock__indent_a1',
                    stock__interactive: 'Currency_stock__interactive_93',
                    stockBackground: 'Currency_stockBackground_82',
                };
            },
            5287: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = { base: 'FormatText_base_d0' };
            },
            1699: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = { base: 'TextOverflow_base_3b' };
            },
            8055: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'ExtendedText_base_71',
                    base__zeroPadding: 'ExtendedText_base__zeroPadding_25',
                    base__isTruncationAvailable: 'ExtendedText_base__isTruncationAvailable_5b',
                    truncated: 'ExtendedText_truncated_97',
                    truncated__hide: 'ExtendedText_truncated__hide_31',
                    unTruncated: 'ExtendedText_unTruncated_b8',
                    tooltip: 'ExtendedText_tooltip_91',
                    'tooltip__justify-flex-start': 'ExtendedText_tooltip__justify-flex-start_00',
                    'tooltip__justify-center': 'ExtendedText_tooltip__justify-center_08',
                    'tooltip__justify-flex-end': 'ExtendedText_tooltip__justify-flex-end_90',
                    'tooltip__align-flex-start': 'ExtendedText_tooltip__align-flex-start_40',
                    'tooltip__align-center': 'ExtendedText_tooltip__align-center_54',
                    'tooltip__align-flex-end': 'ExtendedText_tooltip__align-flex-end_d2',
                };
            },
            9627: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    blackReal: 'colors_blackReal_fc',
                    whiteReal: 'colors_whiteReal_31',
                    white: 'colors_white_45',
                    whiteOrange: 'colors_whiteOrange_81',
                    whiteSpanish: 'colors_whiteSpanish_c3',
                    par: 'colors_par_5b',
                    parSecondary: 'colors_parSecondary_fd',
                    parTertiary: 'colors_parTertiary_97',
                    red: 'colors_red_79',
                    redDark: 'colors_redDark_73',
                    yellow: 'colors_yellow_76',
                    orange: 'colors_orange_cd',
                    cream: 'colors_cream_0f',
                    brown: 'colors_brown_82',
                    greenBright: 'colors_greenBright_68',
                    green: 'colors_green_fa',
                    greenDark: 'colors_greenDark_a9',
                    blueBooster: 'colors_blueBooster_26',
                    blueTeamkiller: 'colors_blueTeamkiller_86',
                    cred: 'colors_cred_35',
                    gold: 'colors_gold_c3',
                    bond: 'colors_bond_ce',
                    prom: 'colors_prom_83',
                };
            },
            7629: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    noBreakWrapper: 'renderers_noBreakWrapper_10',
                    lineBreak: 'renderers_lineBreak_b5',
                    newLine: 'renderers_newLine_bd',
                    word: 'renderers_word_f3',
                };
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
                var r = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [t, u, n] = deferred[s], a = !0, i = 0; i < t.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(s--, 1);
                        var l = u();
                        void 0 !== l && (e = l);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [t, u, n];
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
        (__webpack_require__.j = 3652),
        (() => {
            var e = { 3652: 0, 5897: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        r,
                        [a, i, l] = u,
                        s = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (l) var o = l(__webpack_require__);
                    }
                    for (t && t(u); s < a.length; s++)
                        ((r = a[s]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(o);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(6709));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
