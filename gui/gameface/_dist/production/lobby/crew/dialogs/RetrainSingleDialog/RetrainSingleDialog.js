(() => {
    var __webpack_modules__ = {
            7405: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => c });
                var n = t(6483),
                    a = t.n(n),
                    r = t(2372),
                    i = t(7363),
                    s = t.n(i),
                    l = t(8460),
                    o = t(329);
                const c = (0, i.memo)(
                    ({
                        isDiscount: e,
                        isInteractiveDiscount: u,
                        size: t,
                        type: n,
                        value: i,
                        discountValue: c,
                        showPlus: _,
                        isEnough: d = !0,
                        stockBackgroundName: E = o.we.Red,
                        className: m,
                        classNames: A,
                    }) =>
                        s().createElement(
                            'span',
                            { className: a()(l.Z.base, l.Z[`base__${t}`], m) },
                            s().createElement(
                                'span',
                                {
                                    className: a()(
                                        l.Z.value,
                                        l.Z[`value__${n}`],
                                        !d && l.Z.value__notEnough,
                                        null == A ? void 0 : A.value,
                                    ),
                                },
                                _ && i > 0 && '+',
                                s().createElement(r.A, { value: i, format: n === o.V2.gold ? 'gold' : 'integral' }),
                            ),
                            s().createElement('span', {
                                className: a()(l.Z.icon, l.Z[`icon__${n}-${t}`], null == A ? void 0 : A.icon),
                            }),
                            e &&
                                s().createElement(
                                    'span',
                                    {
                                        className: a()(
                                            l.Z.stock,
                                            c && l.Z.stock__indent,
                                            u && l.Z.stock__interactive,
                                            null == A ? void 0 : A.stock,
                                        ),
                                    },
                                    s().createElement('span', {
                                        className: l.Z.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${E})` },
                                    }),
                                    Boolean(c) && c,
                                ),
                        ),
                );
            },
            329: (e, u, t) => {
                'use strict';
                let n, a, r;
                t.d(u, { V2: () => a, we: () => r }),
                    (function (e) {
                        (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(n || (n = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin');
                    })(a || (a = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(r || (r = {}));
            },
            2372: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => i });
                var n = t(7363),
                    a = t.n(n),
                    r = t(9916);
                class i extends a().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = r.B3.GOLD;
                        else e = r.B3.INTEGRAL;
                        const u = r.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                i.defaultProps = { format: 'integral' };
            },
            280: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => o });
                var n = t(6483),
                    a = t.n(n),
                    r = t(3649),
                    i = t(7363),
                    s = t.n(i),
                    l = t(5287);
                const o = ({
                    binding: e,
                    text: u = '',
                    classMix: t,
                    alignment: n = r.v2.left,
                    formatWithBrackets: o,
                }) => {
                    if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                    const c = o && e ? (0, r.WU)(u, e) : u;
                    return s().createElement(
                        i.Fragment,
                        null,
                        c.split('\n').map((u, o) =>
                            s().createElement(
                                'div',
                                { className: a()(l.Z.base, t), key: `${u}-${o}` },
                                (0, r.Uw)(u, n, e).map((e, u) =>
                                    s().createElement(i.Fragment, { key: `${u}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => _ });
                var n = t(3138),
                    a = t(7363),
                    r = t(1043),
                    i = t(5262);
                const s = n.O.client.getSize('rem'),
                    l = s.width,
                    o = s.height,
                    c = Object.assign({ width: l, height: o }, (0, i.T)(l, o, r.j)),
                    _ = (0, a.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => c });
                var n = t(3138),
                    a = t(6536),
                    r = t(7363),
                    i = t.n(r),
                    s = t(3495),
                    l = t(1043),
                    o = t(5262);
                const c = ({ children: e }) => {
                    const u = (0, r.useContext)(s.Y),
                        t = (0, r.useState)(u),
                        c = t[0],
                        _ = t[1],
                        d = (0, r.useCallback)((e, u) => {
                            const t = n.O.view.pxToRem(e),
                                a = n.O.view.pxToRem(u);
                            _(Object.assign({ width: t, height: a }, (0, o.T)(t, a, l.j)));
                        }, []),
                        E = (0, r.useCallback)(() => {
                            const e = n.O.client.getSize('px');
                            d(e.width, e.height);
                        }, [d]);
                    (0, a.Z)(() => {
                        n.O.client.events.on('clientResized', d), n.O.client.events.on('self.onScaleUpdated', E);
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                n.O.client.events.off('clientResized', d),
                                    n.O.client.events.off('self.onScaleUpdated', E);
                            },
                            [d, E],
                        );
                    const m = (0, r.useMemo)(() => Object.assign({}, c), [c]);
                    return i().createElement(s.Y.Provider, { value: m }, e);
                };
            },
            6010: (e, u, t) => {
                'use strict';
                var n = t(7363),
                    a = t(7382),
                    r = t(3495);
                const i = ['children'];
                const s = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, i);
                    const s = (0, n.useContext)(r.Y),
                        l = s.extraLarge,
                        o = s.large,
                        c = s.medium,
                        _ = s.small,
                        d = s.extraSmall,
                        E = s.extraLargeWidth,
                        m = s.largeWidth,
                        A = s.mediumWidth,
                        F = s.smallWidth,
                        g = s.extraSmallWidth,
                        D = s.extraLargeHeight,
                        p = s.largeHeight,
                        b = s.mediumHeight,
                        h = s.smallHeight,
                        f = s.extraSmallHeight,
                        C = { extraLarge: D, large: p, medium: b, small: h, extraSmall: f };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && l) return u;
                        if (t.large && o) return u;
                        if (t.medium && c) return u;
                        if (t.small && _) return u;
                        if (t.extraSmall && d) return u;
                    } else {
                        if (t.extraLargeWidth && E) return (0, a.H)(u, t, C);
                        if (t.largeWidth && m) return (0, a.H)(u, t, C);
                        if (t.mediumWidth && A) return (0, a.H)(u, t, C);
                        if (t.smallWidth && F) return (0, a.H)(u, t, C);
                        if (t.extraSmallWidth && g) return (0, a.H)(u, t, C);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return u;
                            if (t.largeHeight && p) return u;
                            if (t.mediumHeight && b) return u;
                            if (t.smallHeight && h) return u;
                            if (t.extraSmallHeight && f) return u;
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
                (0, n.memo)(s);
            },
            7382: (e, u, t) => {
                'use strict';
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
                'use strict';
                t.d(u, { YN: () => a.Y, ZN: () => n.Z });
                t(6010);
                var n = t(1039),
                    a = t(3495);
            },
            1043: (e, u, t) => {
                'use strict';
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
                'use strict';
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
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
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
                t.d(u, { T: () => a, u: () => n }),
                    (function (e) {
                        (e.extraLarge = 'extraLarge'),
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
                            (e.extraSmallHeight = 'extraSmallHeight');
                    })(n || (n = {}));
            },
            7078: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => l });
                var n = t(7363),
                    a = t.n(n),
                    r = t(2056);
                const i = ['children'];
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
                const l = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, i);
                    return a().createElement(
                        r.u,
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
            3415: (e, u, t) => {
                'use strict';
                t.d(u, { l: () => o });
                var n = t(7363),
                    a = t.n(n),
                    r = t(7078),
                    i = t(6373),
                    s = t(2056);
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const o = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = a().createElement('div', { className: t }, e);
                    if (u.header || u.body) return a().createElement(i.i, u, n);
                    const o = u.contentId;
                    return o ? a().createElement(s.u, l({}, u, { contentId: o }), n) : a().createElement(r.t, u, n);
                };
            },
            6373: (e, u, t) => {
                'use strict';
                t.d(u, { i: () => o });
                var n = t(2056),
                    a = t(7363),
                    r = t.n(a);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                const l = R.views.common.tooltip_window.simple_tooltip_content,
                    o = (e) => {
                        let u = e.children,
                            t = e.body,
                            o = e.header,
                            c = e.note,
                            _ = e.alert,
                            d = e.args,
                            E = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, i);
                        const m = (0, a.useMemo)(() => {
                            const e = Object.assign({}, d, { body: t, header: o, note: c, alert: _ });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [_, t, o, c, d]);
                        return r().createElement(
                            n.u,
                            s(
                                {
                                    contentId:
                                        ((A = null == d ? void 0 : d.hasHtmlContent),
                                        A ? l.SimpleTooltipHtmlContent('resId') : l.SimpleTooltipContent('resId')),
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
                t.d(u, { u: () => o });
                var n = t(7902),
                    a = t(9916),
                    r = t(7363);
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
                const l = (e, u, t = {}, n = 0) => {
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
                    o = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            o = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onClick,
                            E = e.ignoreShowDelay,
                            m = void 0 !== E && E,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            g = e.decoratorId,
                            D = void 0 === g ? 0 : g,
                            p = e.isEnabled,
                            b = void 0 === p || p,
                            h = e.targetId,
                            f = void 0 === h ? 0 : h,
                            C = e.onShow,
                            B = e.onHide,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, i);
                        const w = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            k = (0, r.useMemo)(() => f || (0, n.F)().resId, [f]),
                            y = (0, r.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (l(t, D, { isMouseEvent: !0, on: !0, arguments: s(a) }, k),
                                    C && C(),
                                    (w.current.isVisible = !0));
                            }, [t, D, a, k, C]),
                            x = (0, r.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        l(t, D, { on: !1 }, k),
                                        w.current.isVisible && B && B(),
                                        (w.current.isVisible = !1);
                                }
                            }, [t, D, k, B]),
                            S = (0, r.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === b && x();
                            }, [b, x]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        window.removeEventListener('mouseleave', x), x();
                                    }
                                ),
                                [x],
                            );
                        return b
                            ? (0, r.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(y, m ? 100 : 400)),
                                                      o && o(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              x(), null == c || c(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === F && x(), null == d || d(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === F && x(), null == _ || _(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      v,
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
                t.d(u, { U: () => s });
                var n = t(3138);
                function a(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return r(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return r(e, u);
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
                function r(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const i = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: u = 0, getRoot: t = i, context: r = 'model' } = {}) {
                    const s = new Map();
                    function l(e, u = 0) {
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
                    const o = (e) => {
                        const n = t(u),
                            a = r.split('.').reduce((e, u) => e[u], n);
                        return 'string' != typeof e || 0 === e.length
                            ? a
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, a);
                    };
                    return {
                        subscribe: (t, a) => {
                            const i = 'string' == typeof a ? `${r}.${a}` : r,
                                l = n.O.view.addModelObserver(i, u, !0);
                            return s.set(l, t), e && t(o(a)), l;
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
                            for (var e, t = a(s.keys()); !(e = t()).done; ) {
                                l(e.value, u);
                            }
                        },
                        unsubscribe: l,
                    };
                }
            },
            3215: (e, u, t) => {
                'use strict';
                t.d(u, { q3: () => l });
                var n = t(4598),
                    a = t(9174),
                    r = t(7363),
                    i = t.n(r),
                    s = t(8246);
                const l = () => (e, u) => {
                    const t = (0, r.createContext)({});
                    return [
                        function ({ mode: l = 'real', options: o, children: c, mocks: _ }) {
                            const d = (0, r.useRef)([]),
                                E = (t, r, i) => {
                                    var l;
                                    const o = s.U(r),
                                        c =
                                            'real' === t
                                                ? o
                                                : Object.assign({}, o, {
                                                      readByPath:
                                                          null != (l = null == i ? void 0 : i.getter) ? l : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === t ? (null == i ? void 0 : i.getter(e)) : c.readByPath(e),
                                        E = (e) => d.current.push(e),
                                        m = e({
                                            mode: t,
                                            readByPath: _,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const r = null != u ? u : _(e),
                                                        i = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const r = null != u ? u : _(e),
                                                        i = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const n = _(u);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, u) => ((e[u] = a.LO.box(n[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, a.aD)((u) => {
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
                                                            i = Object.entries(r),
                                                            s = i.reduce(
                                                                (e, [u, t]) => ((e[t] = a.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        i.forEach(([u, t]) => {
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
                                        A = { mode: t, model: m, externalModel: c, cleanup: E };
                                    return {
                                        model: m,
                                        controls: 'mocks' === t && i ? i.controls(A) : u(A),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                m = (0, r.useRef)(!1),
                                A = (0, r.useState)(l),
                                F = A[0],
                                g = A[1],
                                D = (0, r.useState)(() => E(l, o, _)),
                                p = D[0],
                                b = D[1];
                            return (
                                (0, r.useEffect)(() => {
                                    m.current ? b(E(F, o, _)) : (m.current = !0);
                                }, [_, F, o]),
                                (0, r.useEffect)(() => {
                                    g(l);
                                }, [l]),
                                (0, r.useEffect)(
                                    () => () => {
                                        p.externalModel.dispose(), d.current.forEach((e) => e());
                                    },
                                    [p],
                                ),
                                i().createElement(t.Provider, { value: p }, c)
                            );
                        },
                        () => (0, r.useContext)(t),
                    ];
                };
            },
            7044: (e, u, t) => {
                'use strict';
                t(3649), t(9916);
                var n = t(8613);
                Date.now(), n.Ew.getRegionalDateTime, n.Ew.getFormattedDateTime;
            },
            527: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => l, on: () => s, onResize: () => r, onScaleUpdated: () => i });
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    l = (e, u) => engine.off(e, u),
                    o = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
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
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${u}`,
                                        i = o[u]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        n(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(r, s),
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
                    return Object.assign({}, r, {
                        disable() {
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
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
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => s,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = t(527),
                    a = t(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2493: (e, u, t) => {
                'use strict';
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
                'use strict';
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
                'use strict';
                t.d(u, { O: () => r });
                var n = t(5959),
                    a = t(514);
                const r = { view: t(7641), client: n, sound: a.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => i });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, u) => ((e[u] = () => (0, n.playSound)(a[u])), e), {}),
                    i = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
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
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => l,
                        arabic2roman: () => k,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => y,
                        events: () => i.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => B,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => v,
                        getFontNames: () => w,
                        getScale: () => g,
                        getSize: () => E,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => C,
                        isFocused: () => h,
                        pxToRem: () => D,
                        remToPx: () => p,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => S,
                    });
                var n = t(9690),
                    a = t(3722),
                    r = t(6112),
                    i = t(6538),
                    s = t(8566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
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
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: p(u.x), y: p(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function f() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function B() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    k = n.cg,
                    y = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    x = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => o });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    i = 32,
                    s = 64,
                    l = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(u, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((a = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    o = {
                        close(e) {
                            l('popover' === e ? a : i);
                        },
                        minimize() {
                            l(s);
                        },
                        move(e) {
                            l(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                'use strict';
                t.d(u, { jv: () => a, yR: () => n });
                function n(e) {
                    return e;
                }
                function a() {
                    return !1;
                }
                console.log;
            },
            7902: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => n });
                const n = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        n = R.invalid('resId'),
                        a = '';
                    var r;
                    u &&
                        ((a = (null == (r = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) || ''),
                        (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== t &&
                            window.subViews[t] &&
                            (n = window.subViews[t].id));
                    return { callerUrl: a, caller: t, stack: u, resId: n };
                };
            },
            8071: (e, u, t) => {
                'use strict';
                t.d(u, { M: () => n });
                const n = (e, u) => e.split('.').reduce((e, u) => e && e[u], u);
            },
            2344: (e, u, t) => {
                'use strict';
                t.d(u, { D9: () => r, DA: () => a.D, tT: () => a.t });
                t(3469), t(2133);
                var n = t(2790),
                    a = (t(579), t(5360));
                t(9056);
                const r = n.Z;
            },
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(7363);
                const a = (e) => {
                    const u = (0, n.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            3469: (e, u, t) => {
                'use strict';
                t(7044), t(7363);
            },
            2133: (e, u, t) => {
                'use strict';
                t(7363);
            },
            5415: (e, u, t) => {
                'use strict';
                t.d(u, { Aq: () => l, GS: () => o, cJ: () => i, fd: () => s });
                var n = t(7363),
                    a = t(7739),
                    r = t(1043);
                let i, s, l;
                !(function (e) {
                    (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = r.j.small.width)] = 'Small'),
                        (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                        (e[(e.Large = r.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                })(i || (i = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                    })(s || (s = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.height)] = 'Small'),
                            (e[(e.Medium = r.j.medium.height)] = 'Medium'),
                            (e[(e.Large = r.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge');
                    })(l || (l = {}));
                const o = () => {
                    const e = (0, n.useContext)(a.YN),
                        u = e.width,
                        t = e.height,
                        r = ((e) => {
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
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
                            }
                        })(e),
                        o = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return s.ExtraLarge;
                                case e.largeWidth:
                                    return s.Large;
                                case e.mediumWidth:
                                    return s.Medium;
                                case e.smallWidth:
                                    return s.Small;
                                case e.extraSmallWidth:
                                    return s.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
                            }
                        })(e),
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return l.ExtraLarge;
                                case e.largeHeight:
                                    return l.Large;
                                case e.mediumHeight:
                                    return l.Medium;
                                case e.smallHeight:
                                    return l.Small;
                                case e.extraSmallHeight:
                                    return l.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), l.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: r, mediaWidth: o, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            5360: (e, u, t) => {
                'use strict';
                t.d(u, { D: () => _, t: () => d });
                var n = t(7902),
                    a = t(8071),
                    r = t(6536),
                    i = t(9916),
                    s = t(7332),
                    l = t(7363),
                    o = t(538);
                const c = i.Sw.instance;
                let _;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(_ || (_ = {}));
                const d = (e = 'model', u = _.Deep) => {
                    const t = (0, l.useState)(0),
                        i = (t[0], t[1]),
                        d = (0, l.useMemo)(() => (0, n.F)(), []),
                        E = d.callerUrl,
                        m = d.caller,
                        A = d.resId,
                        F = (0, l.useMemo)(() => {
                            const u = (0, o.sI)(E.replace('.js', '.html'));
                            return window.__feature && window.__feature !== m && !u ? `subViews.${m}.${e}` : e;
                        }, [E, m, e]),
                        g = (0, l.useState)(() =>
                            ((e) => {
                                const u = (0, a.M)(e, window);
                                for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                return (0, s.os)(u) ? u.value : u;
                            })((0, s.Gd)(F)),
                        ),
                        D = g[0],
                        p = g[1],
                        b = (0, l.useRef)(-1);
                    return (
                        (0, r.Z)(() => {
                            if (
                                ('boolean' == typeof u &&
                                    ((u = u ? _.Deep : _.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                u !== _.None)
                            ) {
                                const t = (e) => {
                                        (0, s.kJ)(e) && u === _.Deep
                                            ? (e === D && i((e) => e + 1), p(e))
                                            : p(Object.assign([], e));
                                    },
                                    n = (0, s.U0)(e);
                                b.current = c.addCallback(n, t, A, u === _.Deep);
                            }
                        }),
                        (0, l.useEffect)(() => {
                            if (u !== _.None)
                                return () => {
                                    c.removeCallback(b.current, A);
                                };
                        }, [A, u]),
                        D
                    );
                };
            },
            9056: (e, u, t) => {
                'use strict';
                var n = t(9916);
                t(7363);
                n.Sw.instance;
            },
            2790: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(7363);
                const a = (e, u) => {
                    const t = (0, n.useRef)();
                    return (
                        (0, n.useEffect)(() => {
                            (u && !u(e)) || (t.current = e);
                        }, [u, e]),
                        t.current
                    );
                };
            },
            4419: (e, u, t) => {
                'use strict';
                t.d(u, { y: () => r });
                var n = t(8045),
                    a = t(7363);
                const r = (e, u, t = !0) => {
                    const r = (0, a.useCallback)(
                        (e) => {
                            const t = e[0];
                            u && u(t);
                        },
                        [u],
                    );
                    (0, a.useEffect)(() => {
                        if (!e.current || !t) return;
                        const u = new n.Z((e) => r(e));
                        return (
                            u.observe(e.current),
                            () => {
                                u.disconnect();
                            }
                        );
                    }, [r, t, e]);
                };
            },
            579: (e, u, t) => {
                'use strict';
                t(3138), t(7363);
            },
            538: (e, u, t) => {
                'use strict';
                function n(e) {
                    return a().has(e);
                }
                t.d(u, { sI: () => n });
                const a = () => (window.injected || (window.injected = new Map()), window.injected);
            },
            5521: (e, u, t) => {
                'use strict';
                let n, a;
                t.d(u, { n: () => n }),
                    (function (e) {
                        (e[(e.NONE = -1)] = 'NONE'),
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9');
                    })(n || (n = {})),
                    (function (e) {
                        (e.ALT = 'Alt'),
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
                            (e.SYMBOL_LOCK = 'SymbolLock');
                    })(a || (a = {}));
            },
            9480: (e, u, t) => {
                'use strict';
                function n(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                t.d(u, { U2: () => n, UI: () => r, dF: () => s, lN: () => i });
                function a(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function r(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function i(e) {
                    if (0 !== e.length) return n(e, e.length - 1);
                }
                function s(e, u) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        const n = a(e[t]);
                        if (u(n, t, e)) return n;
                    }
                }
            },
            9690: (e, u, t) => {
                'use strict';
                t.d(u, { HG: () => s, cg: () => r });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let u = '';
                    for (let t = a.length - 1; t >= 0; t--) for (; e >= a[t]; ) (u += n[t]), (e -= a[t]);
                    return u;
                }
                const i = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    s = (e) => (i ? `${e}` : r(e));
            },
            3649: (e, u, t) => {
                'use strict';
                t.d(u, {
                    BN: () => s,
                    Eg: () => c,
                    Uw: () => g,
                    WU: () => r,
                    dL: () => D,
                    e: () => l,
                    uF: () => i,
                    v2: () => a,
                    z4: () => o,
                });
                var n = t(1281);
                let a;
                function r(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function i(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                function s(e) {
                    return e.replace(/-/g, '_');
                }
                function l(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(a || (a = {}));
                const o = (e) => e.replace(/&nbsp;/g, ' '),
                    c = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    _ = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    d = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    E = (e, u, t = a.left) => e.split(u).reduce(t === a.left ? _ : d, []),
                    m = (() => {
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
                    A = ['zh_cn', 'zh_sg', 'zh_tw'],
                    F = (e, u = a.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (A.includes(t)) return m(e);
                        if ('ja' === t) {
                            return (0, n.D4)()
                                .parse(e)
                                .map((e) => o(e));
                        }
                        return ((e, u = a.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = o(e);
                            return E(r, /( )/, u).forEach((e) => (t = t.concat(E(e, n, a.left)))), t;
                        })(e, u);
                    },
                    g = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : F(e, u))),
                    D = (e) => r(R.strings.common.percentValue(), { value: e });
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(3138);
                class a {
                    constructor() {
                        (this._callbacks = void 0),
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
                            (this._updateHandler = void 0);
                    }
                    static get instance() {
                        return window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, t, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                const r = a;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9916);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        (this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                (this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((e) => {
                                        e(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((e) => {
                                        this._addCallback(path + '.' + e);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(e) {
                        this.callbacks.add(e), null !== this.data && void 0 !== this.data && e(this.data);
                    }
                    unsubscribe(e) {
                        this.callbacks.delete(e);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(e) {
                        this.dataTracker.addCallback(e, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            9916: (e, u, t) => {
                'use strict';
                t.d(u, { Sw: () => r.Z, B3: () => l, Z5: () => i.Z5, B0: () => s, ry: () => g, Eu: () => D });
                class n {
                    constructor() {
                        (this.entries = []),
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
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
                            this.removeMouseListener();
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
                var r = t(1358);
                var i = t(8613);
                let s;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(s || (s = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    o = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    E = t(3138);
                const m = ['args'];
                function A(e, u, t, n, a, r, i) {
                    try {
                        var s = e[r](i),
                            l = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(l) : Promise.resolve(l).then(n, a);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
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
                                        var r = e.apply(u, t);
                                        function i(e) {
                                            A(r, n, a, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            A(r, n, a, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    p = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(u, m);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    b = () => p(s.CLOSE),
                    h = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var f = t(7572);
                const C = a.instance,
                    B = {
                        DataTracker: r.Z,
                        ViewModel: f.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: o,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => p(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => p(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            p(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const i = E.O.view.getViewGlobalPosition(),
                                l = t.getBoundingClientRect(),
                                o = l.x,
                                c = l.y,
                                _ = l.width,
                                d = l.height,
                                m = {
                                    x: E.O.view.pxToRem(o) + i.x,
                                    y: E.O.view.pxToRem(c) + i.y,
                                    width: E.O.view.pxToRem(_),
                                    height: E.O.view.pxToRem(d),
                                };
                            p(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: F(m),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => h(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, b);
                        },
                        handleViewEvent: p,
                        onBindingsReady: g,
                        onLayoutReady: D,
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
                        ClickOutsideManager: C,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = B;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => r, Z5: () => n, cy: () => a });
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
                    },
                    r = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            7332: (e, u, t) => {
                'use strict';
                t.d(u, { Gd: () => l, U0: () => o, kJ: () => i, os: () => r });
                var n = t(7902),
                    a = t(8071);
                const r = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    i = (e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name,
                    s = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    l = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = (0, a.M)(`${e}.${t}`, window);
                                return r(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    o = (e) => {
                        const u = ((e) => {
                                const u = (0, n.F)(),
                                    t = u.caller,
                                    a = u.resId,
                                    r = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: r, modelPath: s(r, e || ''), resId: a };
                            })(),
                            t = u.modelPrefix,
                            i = e.split('.');
                        if (i.length > 0) {
                            const e = [i[0]];
                            return (
                                i.reduce((u, n) => {
                                    const i = (0, a.M)(s(t, `${u}.${n}`), window);
                                    return r(i) ? (e.push(i.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    };
            },
            3618: (e, u, t) => {
                'use strict';
                t.d(u, { w: () => E });
                var n = t(6483),
                    a = t.n(n),
                    r = t(3415),
                    i = t(4419),
                    s = t(7363),
                    l = t.n(s),
                    o = t(6143),
                    c = t(3310),
                    _ = t(131),
                    d = t(9053);
                const E = l().memo(
                    ({
                        text: e,
                        classMix: u,
                        onSizeChanged: t,
                        binding: n,
                        isTooltipEnable: E = !1,
                        isTruncationAvailable: m = !1,
                        customTooltipArgs: A,
                        targetId: F,
                        justifyContent: g = d.v2.FlexStart,
                        alignContent: D = d.v2.FlexStart,
                        truncateIdentify: p = d.YA,
                    }) => {
                        const b = (0, s.useRef)(null),
                            h = (0, s.useRef)({ height: 0, width: 0 }),
                            f = (0, s.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                            C = f[0],
                            B = f[1],
                            v = (0, s.useMemo)(() => (0, c.s)(e, n, { justifyContent: g }), [n, g, e]),
                            w = (0, s.useMemo)(() => {
                                if (E && C.isTruncated && (!n || !Object.values(n).find((e) => 'object' == typeof e)))
                                    return {
                                        args: Object.assign({ text: e }, A, {
                                            stringifyKwargs: n ? JSON.stringify(n) : '',
                                        }),
                                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                        targetId: F,
                                    };
                            }, [n, E, F, e, A, C.isTruncated]),
                            k = (0, s.useCallback)(
                                (e) => {
                                    (h.current.width = e.contentRect.width), (h.current.height = e.contentRect.height);
                                    const u = (0, _.T)(b, v, h.current, p),
                                        n = u[0],
                                        a = u[1];
                                    B({ elementList: n, isTruncated: a, isTruncateFinished: !0 }), t && t(a);
                                },
                                [t, p, v],
                            ),
                            y = (0, s.useMemo)(() => ({ justifyContent: g, alignContent: D }), [D, g]);
                        return (
                            (0, i.y)(b, k, m),
                            l().createElement(
                                'div',
                                {
                                    className: a()(
                                        o.Z.base,
                                        u,
                                        o.Z.base__zeroPadding,
                                        m && o.Z.base__isTruncationAvailable,
                                    ),
                                    style: y,
                                },
                                l().createElement('div', { className: o.Z.unTruncated, ref: b }, v),
                                l().createElement(
                                    r.l,
                                    {
                                        tooltipArgs: w,
                                        className: a()(
                                            o.Z.tooltip,
                                            o.Z[`tooltip__justify-${g}`],
                                            o.Z[`tooltip__align-${D}`],
                                        ),
                                    },
                                    l().createElement(
                                        'div',
                                        {
                                            className: a()(
                                                o.Z.truncated,
                                                !C.isTruncateFinished && m && o.Z.truncated__hide,
                                            ),
                                            style: y,
                                        },
                                        C.isTruncateFinished && m ? C.elementList : v,
                                    ),
                                ),
                            )
                        );
                    },
                );
            },
            3310: (e, u, t) => {
                'use strict';
                t.d(u, { s: () => E });
                var n = t(3649),
                    a = t(6799),
                    r = t(6960),
                    i = t(9053);
                const s = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    l = (e) => {
                        const u = [];
                        return (
                            (0, r.Z)(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var t;
                                    R.strings.settings.LANGUAGE_CODE().toLowerCase() === i.Co
                                        ? u.push(...((t = e), t.match(s) || []))
                                        : u.push(...e.split(''));
                                },
                                (e) => {
                                    u.push(e[0]);
                                },
                            ),
                            u
                        );
                    },
                    o = i.u6
                        ? (e) => {
                              const u = [];
                              return (
                                  (0, r.Z)(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          u.push(e);
                                      },
                                      (e) => {
                                          u.push(...l(e[0]));
                                      },
                                  ),
                                  u
                              );
                          }
                        : (e, u) => {
                              const t = /[\s\u002d]/g;
                              let n = t.exec(e);
                              if (!n) return [e];
                              const a = [];
                              let r = 0;
                              for (; n; ) {
                                  const s = u.justifyContent === i.v2.FlexEnd ? n.index : t.lastIndex;
                                  a.push(e.slice(r, s)), (r = s), (n = t.exec(e));
                              }
                              return r !== e.length && a.push(e.slice(r)), a;
                          },
                    c = (e, u = '', t) => {
                        const n = [];
                        return (
                            (0, r.Z)(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: i.kH.Word, colorTag: u, childList: o(e, t) });
                                },
                                (e) => {
                                    const t = e[0],
                                        a = i.aF[t.charAt(0)];
                                    a === i.kH.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: i.kH.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: i.kH.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(t),
                                          )
                                        : n.push({ blockType: a, colorTag: u, childList: [t] });
                                },
                            ),
                            n
                        );
                    },
                    _ = (e, u, t = '', n) => {
                        const a = [];
                        return (
                            (0, r.Z)(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    a.push(...c(e, t, n));
                                },
                                (e) => {
                                    const r = e[1],
                                        s = void 0 === u[r] ? e[0] : u[r];
                                    'string' == typeof s || 'number' == typeof s
                                        ? a.push(...c(String(s), t, n))
                                        : a.push({ blockType: i.kH.Binding, colorTag: t, childList: [s] });
                                },
                            ),
                            a
                        );
                    },
                    d = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            n = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === i.kH.NoBreakWrapper) e.childList.push(n), t.push(e);
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && t.push(e),
                                t.push({ blockType: i.kH.NoBreakWrapper, colorTag: '', childList: [u, n] });
                        }
                        return u.childList.length > 0 && t.push(u), t;
                    },
                    E = (e, u = {}, t) => {
                        if (!e) return [];
                        const s = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === i.kH.NoBreakSymbol
                                        ? ((t = !0), u.push(...d(u.pop(), e)))
                                        : (t ? u.push(...d(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u, t) => {
                                const n = [];
                                return (
                                    (0, r.Z)(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(..._(e, u, '', t));
                                        },
                                        (e) => {
                                            n.push(..._(e[2] + e[3], u, e[1], t));
                                        },
                                    ),
                                    n
                                );
                            })((0, n.Eg)((0, n.z4)(e)), u, t),
                        );
                        return (0, a.w)(s);
                    };
            },
            6799: (e, u, t) => {
                'use strict';
                t.d(u, { w: () => i });
                var n = t(597),
                    a = t(9053);
                const r = (e, u, t) => {
                        const i = [];
                        return (
                            e.childList.forEach((s, l) => {
                                const o = `${t}_${l}`;
                                if ((0, a.dz)(s)) {
                                    const e = s,
                                        u = e.blockType,
                                        t = n.IY[u],
                                        a = r(e, t, o);
                                    i.push(...a);
                                } else i.push(u({ elementList: [s], textBlock: e, key: o }));
                            }),
                            i
                        );
                    },
                    i = (e) => {
                        const u = [];
                        return (
                            e.forEach((e, t) => {
                                u.push(
                                    ...((e, u) => {
                                        const t = [],
                                            i = e.blockType,
                                            s = n.IY[i],
                                            l = r(e, s, u);
                                        return (
                                            i === a.kH.NoBreakWrapper
                                                ? t.push(s({ elementList: l, textBlock: e, key: `${u}` }))
                                                : t.push(...l),
                                            t
                                        );
                                    })(e, t),
                                );
                            }),
                            u
                        );
                    };
            },
            6960: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = (e, u, t, n) => {
                    let a = u.exec(e),
                        r = 0;
                    for (; a; ) r !== a.index && t(e.slice(r, a.index)), n(a), (r = u.lastIndex), (a = u.exec(e));
                    r !== e.length && t(e.slice(r));
                };
            },
            131: (e, u, t) => {
                'use strict';
                t.d(u, { T: () => c });
                var n = t(7363),
                    a = t.n(n),
                    r = t(9053);
                const i = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    s = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    l = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const n = s(e, u),
                            a = e.textContent.length,
                            r = e.offsetWidth / a,
                            i = Math.ceil(n / r);
                        if (n > 0) {
                            const n = Math.floor((u - e.offsetLeft) / r);
                            return n >= t ? [!0, t + i] : [!1, n];
                        }
                        const l = Math.max(t + i, 0);
                        return a < l ? [!1, 0] : [!0, l];
                    },
                    o = (e, u, t, n, i, s) => {
                        let c = -1,
                            _ = null;
                        for (let d = t; d >= 0; d--) {
                            const t = e[d],
                                E = Number(e[d].getAttribute(r.bF));
                            if (E === r.kH.LineBreak || E === r.kH.NewLine || E === r.kH.Binding) continue;
                            const m = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = l(t, n, i),
                                    r = e[0],
                                    o = e[1];
                                if (!r) {
                                    o > 0 && (i -= o);
                                    continue;
                                }
                                const E = m.slice(0, m.length - o) + s,
                                    A = u[d];
                                (_ = a().cloneElement(A, A.props, E)), (c = d);
                                break;
                            }
                            {
                                const e = t.children,
                                    r = u[d],
                                    l = r.props.children,
                                    E = o(e, l, e.length - 1, n, i, s),
                                    A = E[0],
                                    F = E[1];
                                if (!(A < 0)) {
                                    const e = l.slice(0, A);
                                    (_ = a().cloneElement(r, r.props, e, F)), (c = d);
                                    break;
                                }
                                i -= m.length;
                            }
                        }
                        return [c, _];
                    },
                    c = (e, u, t, n = r.YA) => {
                        const a = [...u],
                            l = e.current;
                        if (!l) return [a, !1];
                        const c = t.height,
                            _ = t.width,
                            d = l.lastElementChild;
                        if (!i(d, c) && s(d, _) <= 0) return [a, !1];
                        const E = l.children,
                            m = ((e, u) => {
                                let t = 0,
                                    n = e.length - 1;
                                for (; n - t >= 0; ) {
                                    const a = t + Math.ceil(0.5 * (n - t));
                                    i(e[a], u) ? (n = a - 1) : (t = a + 1);
                                }
                                return t - 1;
                            })(E, c);
                        if (m < 0) return [a, !1];
                        const A = o(E, a, m, _, n.length, n),
                            F = A[0],
                            g = A[1];
                        return g && (a.splice(F, 1, g), a.splice(F + 1)), [a, !0];
                    };
            },
            9053: (e, u, t) => {
                'use strict';
                let n, a, r;
                t.d(u, {
                    Co: () => c,
                    YA: () => s,
                    aF: () => o,
                    bF: () => l,
                    dz: () => i,
                    kH: () => n,
                    u6: () => _,
                    v2: () => a,
                }),
                    (function (e) {
                        (e[(e.Word = 0)] = 'Word'),
                            (e[(e.LineBreak = 1)] = 'LineBreak'),
                            (e[(e.NewLine = 2)] = 'NewLine'),
                            (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                            (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                            (e[(e.Binding = 5)] = 'Binding');
                    })(n || (n = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(a || (a = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(r || (r = {}));
                const i = (e) => void 0 !== e.childList,
                    s = '...',
                    l = 'data-block-type',
                    o = { [r.NBSP]: n.NoBreakSymbol, [r.ZWNBSP]: n.NoBreakSymbol, [r.NEW_LINE]: n.LineBreak },
                    c = 'th',
                    _ = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', c].includes(R.strings.settings.LANGUAGE_CODE().toLowerCase());
            },
            597: (e, u, t) => {
                'use strict';
                t.d(u, { IY: () => d });
                var n = t(6483),
                    a = t.n(n),
                    r = t(7363),
                    i = t.n(r),
                    s = t(9053),
                    l = t(9627),
                    o = t(7629);
                const c = (e) => ({ color: `#${e}` }),
                    _ = ({ elementList: e, textBlock: u, key: t }) => {
                        const n = u.colorTag;
                        return n
                            ? l.Z[n]
                                ? i().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: a()(o.Z.word, l.Z[n]) },
                                      e,
                                  )
                                : i().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: o.Z.word, style: c(n) },
                                      e,
                                  )
                            : i().createElement(
                                  'span',
                                  { key: t, 'data-block-type': u.blockType, className: o.Z.word },
                                  e,
                              );
                    },
                    d = {
                        [s.kH.Word]: _,
                        [s.kH.NoBreakSymbol]: _,
                        [s.kH.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            i().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => i().createElement(i().Fragment, { key: t }, e)),
                            ),
                        [s.kH.LineBreak]: ({ key: e }) =>
                            i().createElement('span', {
                                key: e,
                                'data-block-type': s.kH.LineBreak,
                                className: o.Z.lineBreak,
                            }),
                        [s.kH.NewLine]: ({ elementList: e, key: u }) =>
                            i().createElement(
                                'span',
                                { key: u, 'data-block-type': s.kH.NewLine, className: o.Z.newLine },
                                e,
                            ),
                        [s.kH.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            i().createElement(
                                'span',
                                { key: u, 'data-block-type': s.kH.NoBreakWrapper, className: o.Z.noBreakWrapper },
                                e,
                            ),
                    };
            },
            5298: (e, u, t) => {
                'use strict';
                t.d(u, { l: () => a });
                var n = t(776);
                const a = (e, u) => ({
                    isEnabled: e !== n.f.absent,
                    args: u,
                    contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                    decoratorId:
                        e === n.f.normal ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId') : void 0,
                    ignoreShowDelay: e === n.f.backport,
                    ignoreMouseClick: !0,
                });
            },
            7160: (e, u, t) => {
                'use strict';
                t.d(u, { Fs: () => a, qb: () => n });
                const n = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
                    a = (e) => -(Math.cos(Math.PI * e) - 1) / 2;
            },
            8018: (e, u, t) => {
                'use strict';
                t.d(u, { Gc: () => i, H$: () => s, Y4: () => l, gO: () => r, wP: () => a });
                var n = t(771);
                t(3649);
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let a;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(a || (a = {}));
                R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body();
                let r;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
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
                        (e.RUDY = 'rudy');
                })(r || (r = {}));
                const i = (e, u = !1, t = null) => {
                    const n = u ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (t ? n.$dyn(`${t}Case`) : n).$dyn(e);
                };
                let s;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(s || (s = {}));
                const l = (e) => (e === n.sU ? s.Untrained : e < n.yb ? s.Low : s.Normal);
            },
            2412: (e, u, t) => {
                'use strict';
                var n = t(7739),
                    a = t(7363),
                    r = t.n(a),
                    i = t(6483),
                    s = t.n(i),
                    l = t(926),
                    o = t.n(l),
                    c = t(5415);
                const _ = ['children', 'className'];
                function d() {
                    return (
                        (d =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                const E = {
                        [c.fd.ExtraSmall]: '',
                        [c.fd.Small]: o().SMALL_WIDTH,
                        [c.fd.Medium]: `${o().SMALL_WIDTH} ${o().MEDIUM_WIDTH}`,
                        [c.fd.Large]: `${o().SMALL_WIDTH} ${o().MEDIUM_WIDTH} ${o().LARGE_WIDTH}`,
                        [c.fd.ExtraLarge]:
                            `${o().SMALL_WIDTH} ${o().MEDIUM_WIDTH} ${o().LARGE_WIDTH} ${o().EXTRA_LARGE_WIDTH}`,
                    },
                    m = {
                        [c.Aq.ExtraSmall]: '',
                        [c.Aq.Small]: o().SMALL_HEIGHT,
                        [c.Aq.Medium]: `${o().SMALL_HEIGHT} ${o().MEDIUM_HEIGHT}`,
                        [c.Aq.Large]: `${o().SMALL_HEIGHT} ${o().MEDIUM_HEIGHT} ${o().LARGE_HEIGHT}`,
                        [c.Aq.ExtraLarge]:
                            `${o().SMALL_HEIGHT} ${o().MEDIUM_HEIGHT} ${o().LARGE_HEIGHT} ${o().EXTRA_LARGE_HEIGHT}`,
                    },
                    A = {
                        [c.cJ.ExtraSmall]: '',
                        [c.cJ.Small]: o().SMALL,
                        [c.cJ.Medium]: `${o().SMALL} ${o().MEDIUM}`,
                        [c.cJ.Large]: `${o().SMALL} ${o().MEDIUM} ${o().LARGE}`,
                        [c.cJ.ExtraLarge]: `${o().SMALL} ${o().MEDIUM} ${o().LARGE} ${o().EXTRA_LARGE}`,
                    },
                    F = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, _);
                        const a = (0, c.GS)(),
                            i = a.mediaWidth,
                            l = a.mediaHeight,
                            o = a.mediaSize;
                        return r().createElement('div', d({ className: s()(t, E[i], m[l], A[o]) }, n), u);
                    },
                    g = ['children'];
                const D = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, g);
                    return r().createElement(n.ZN, null, r().createElement(F, t, u));
                };
                var p = t(1533),
                    b = t.n(p);
                var h = t(2344),
                    f = t(3138),
                    C = t(5521),
                    B = t(9916);
                const v = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function w(e = C.n.NONE, u = v, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== C.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!n && f.O.view.isEventHandled()) return;
                                f.O.view.setEventHandled(), u(a), t && a.stopPropagation();
                            }
                        }
                    }, [u, e, t, n]);
                }
                const k = /<link.*?>/g,
                    y = /\.\.\//g,
                    x = /<script.*?>/g,
                    S = 'default.css',
                    T = (e) => {
                        const u = e.match(y);
                        return u && u.join('');
                    },
                    N = () => {
                        for (
                            var e = 0, u = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < u.length;
                            e++
                        ) {
                            const t = u[e];
                            if (!t.href.includes(S)) return t.href;
                        }
                        return '';
                    },
                    L = (e) => {
                        const u = N(),
                            t = T(u);
                        let n,
                            a = e;
                        for (; null !== (n = x.exec(e)); ) {
                            const e = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const u = t + e[2].replace(y, '');
                                a = a.replace(e[2], u);
                            }
                        }
                        return a;
                    },
                    O = () => {
                        const e = [];
                        let u = !1;
                        const t = () => {
                            if (!e.length) return void (u = !1);
                            const n = e.shift();
                            n && ((u = !0), n().then(() => t()));
                        };
                        return {
                            add: (n) => {
                                e.push(n), u || t();
                            },
                        };
                    },
                    I = 'SubView_base_df',
                    M = 'subViews.onChanged',
                    P = O(),
                    H = (0, a.memo)(({ id: e, fallback: u, onLoadCallback: t, mixClass: n }) => {
                        const i = (0, a.useState)(''),
                            l = i[0],
                            o = i[1],
                            c = (0, a.useMemo)(() => ({ __html: L(l) }), [l]),
                            _ = (0, a.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            d = (0, a.useState)(!1),
                            E = d[0],
                            m = d[1],
                            A = (0, a.useCallback)(
                                (e) => {
                                    e.includes(_) &&
                                        (m(!0), engine.off(M, A), window.subViews.removeChildChangedCallback(_));
                                },
                                [_],
                            ),
                            F = (0, a.useCallback)((e) => {
                                P.add(
                                    () =>
                                        new Promise((u) => {
                                            o(e);
                                            const t = new MutationObserver(() => {
                                                    t.disconnect(), u();
                                                }),
                                                n = document.getElementById('root');
                                            n && t.observe(n, { childList: !0 });
                                        }),
                                );
                            }, []);
                        (0, a.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const u = window.subViews.get(e),
                                    t = u.path;
                                let n;
                                if ((n = t.split('/').pop()))
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: e }, u)),
                                        engine.on(`subView:inject->${n}`, F),
                                        (({ path: e, name: u }) => {
                                            const t = new XMLHttpRequest();
                                            (t.onreadystatechange = () => {
                                                4 === t.readyState &&
                                                    (200 === t.status
                                                        ? (0, B.Eu)().then(() => {
                                                              console.info(`Sub view ${u} loaded: ${e}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${u}`,
                                                                      t.responseText,
                                                                  );
                                                          })
                                                        : console.error(
                                                              `subView: status: ${t.status} - can't get bundle`,
                                                          ));
                                            }),
                                                t.open('GET', e),
                                                t.send();
                                        })({ name: n, path: t }),
                                        () => {
                                            n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                engine.off(`subView:inject->${n}`, F),
                                                console.info(`Sub view ${n} is destroyed: ${t}`);
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(M, A);
                        }, [A, F, e, E]),
                            (0, a.useEffect)(
                                () => () => {
                                    l &&
                                        ((e) => {
                                            const u = T(N());
                                            let t;
                                            for (; null !== (t = k.exec(e)); ) {
                                                const e = t[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const t = u + e[1].replace(y, ''),
                                                        n = document.head.querySelector(`[href="${t}"]`);
                                                    n && document.head.removeChild(n);
                                                }
                                            }
                                        })(l);
                                },
                                [l],
                            );
                        const g = s()(I, n);
                        if (l) {
                            let u;
                            return (
                                (u = document.getElementById('root')) && u.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let u;
                                    const t = N(),
                                        n = T(t);
                                    for (; null !== (u = k.exec(e)); ) {
                                        const e = u[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(S) && n) {
                                            const u = n + e[1].replace(y, ''),
                                                t = document.createElement('link');
                                            (t.href = u), (t.rel = 'stylesheet'), document.head.appendChild(t);
                                        }
                                    }
                                })(l),
                                t && t(e),
                                r().createElement('div', { className: g, dangerouslySetInnerHTML: c })
                            );
                        }
                        return u ? r().createElement('div', { className: g }, r().createElement(u, null)) : null;
                    }),
                    j = 'subViews.onChanged',
                    W = '.html',
                    $ = /^coui:\/\/gui\/.*/,
                    G = O(),
                    U = (e) => {
                        const u = document.createElement('script');
                        (u.src = e), (u.defer = !0), document.head.appendChild(u);
                    };
                (0, a.memo)(({ id: e, bundleLevelPath: u = 3, mixClass: t, children: n }) => {
                    const i = (0, a.useRef)(null),
                        l = (0, a.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                        o = (0, a.useState)(!1),
                        c = o[0],
                        _ = o[1],
                        d = (0, a.useState)(!0),
                        E = d[0],
                        m = d[1],
                        A = (0, a.useCallback)(
                            (e) => {
                                e.includes(l) &&
                                    (_(!0), engine.off(j, A), window.subViews.removeChildChangedCallback(l));
                            },
                            [l],
                        ),
                        F = (0, a.useCallback)(
                            (e) => {
                                G.add(
                                    () =>
                                        new Promise((t) => {
                                            const n = new MutationObserver(() => {
                                                m(!1), n.disconnect(), t();
                                            });
                                            if (i.current) {
                                                const t = document.getElementById('root');
                                                t && t.setAttribute('id', 'bugSubView'),
                                                    i.current.setAttribute('id', 'root');
                                                const a = document.createElement('link');
                                                (a.href = e.replace(W, '.css')),
                                                    (a.rel = 'stylesheet'),
                                                    document.head.appendChild(a),
                                                    $.test(e) &&
                                                        U(
                                                            e
                                                                .split('/')
                                                                .slice(0, -u)
                                                                .concat(['vendors.js'])
                                                                .join('/')
                                                                .replace('/production/', '/production/lib/'),
                                                        ),
                                                    U(e.replace(W, '.js')),
                                                    n.observe(i.current, { childList: !0 });
                                            }
                                        }),
                                );
                            },
                            [u],
                        );
                    return (
                        (0, a.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const u = window.subViews.get(e),
                                    t = u.path;
                                let n = t.split('/').pop();
                                if (n)
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: e }, u)),
                                        F(t),
                                        () => {
                                            n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                console.info(`Sub view ${n} is destroyed: ${t}`);
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(j, A);
                        }, [A, F, e, c]),
                        r().createElement('div', { className: s()(I, t) }, E && n, r().createElement('div', { ref: i }))
                    );
                });
                function V(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const z = {
                        playHighlight() {
                            V('highlight');
                        },
                        playClick() {
                            V('play');
                        },
                        playYes() {
                            V('yes1');
                        },
                    },
                    q = {
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
                let Z, Y;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Z || (Z = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(Y || (Y = {}));
                const X = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: i,
                    mixClass: l,
                    soundHover: o,
                    soundClick: c,
                    onMouseEnter: _,
                    onMouseMove: d,
                    onMouseDown: E,
                    onMouseUp: m,
                    onMouseLeave: A,
                    onClick: F,
                }) => {
                    const g = (0, a.useRef)(null),
                        D = (0, a.useState)(t),
                        p = D[0],
                        b = D[1],
                        h = (0, a.useState)(!1),
                        f = h[0],
                        C = h[1];
                    return (
                        (0, a.useEffect)(() => {
                            function e(e) {
                                p && null !== g.current && !g.current.contains(e.target) && b(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [p]),
                        (0, a.useEffect)(() => {
                            b(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: g,
                                className: s()(
                                    q.base,
                                    q[`base__${n}`],
                                    i && q.base__disabled,
                                    u && q[`base__${u}`],
                                    p && q.base__focus,
                                    f && q.base__highlightActive,
                                    l,
                                ),
                                onMouseEnter: function (e) {
                                    i || (null !== o && V(o), _ && _(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    i || (m && m(e), C(!1));
                                },
                                onMouseDown: function (e) {
                                    i ||
                                        (null !== c && V(c),
                                        E && E(e),
                                        t && (i || (g.current && (g.current.focus(), b(!0)))),
                                        C(!0));
                                },
                                onMouseLeave: function (e) {
                                    i || (A && A(e), C(!1));
                                },
                                onClick: function (e) {
                                    i || (F && F(e));
                                },
                            },
                            n !== Z.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: q.back }),
                                    r().createElement('span', { className: q.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: s()(q.state, q.state__default) },
                                r().createElement('span', { className: q.stateDisabled }),
                                r().createElement('span', { className: q.stateHighlightHover }),
                                r().createElement('span', { className: q.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: q.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                X.defaultProps = { type: Z.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const K = X;
                var J = t(6373);
                const Q = 'TextOverflow_base_3b',
                    ee = ['content', 'classMix', 'className'];
                function ue() {
                    return (
                        (ue =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ue.apply(this, arguments)
                    );
                }
                const te = (e) => {
                    let u = e.content,
                        t = e.classMix,
                        n = e.className,
                        i = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, ee);
                    const l = (0, a.useRef)(null),
                        o = (0, a.useState)(!0),
                        c = o[0],
                        _ = o[1];
                    return (
                        (0, a.useEffect)(() =>
                            ((e) => {
                                let u,
                                    t = null;
                                return (
                                    (t = requestAnimationFrame(() => {
                                        t = requestAnimationFrame(() => {
                                            (t = null), (u = e());
                                        });
                                    })),
                                    () => {
                                        'function' == typeof u && u(), null !== t && cancelAnimationFrame(t);
                                    }
                                );
                            })(() => {
                                const e = l.current;
                                e && e.offsetWidth >= e.scrollWidth && _(!1);
                            }),
                        ),
                        r().createElement(
                            J.i,
                            { isEnabled: c, body: u },
                            r().createElement('div', ue({}, i, { ref: l, className: s()(Q, n, t) }), u),
                        )
                    );
                };
                var ne = t(2056),
                    ae = t(776),
                    re = t(5298);
                const ie = 'DialogTemplateButton_base_0b',
                    se = 'DialogTemplateButton_label_83',
                    le = 'DialogTemplateButton_label__noTooltip_14',
                    oe = (0, a.memo)(
                        ({ onClick: e, isFocused: u, buttonID: t, isDisabled: n, label: i, tooltip: l, type: o }) => {
                            const c = (0, a.useCallback)(() => {
                                    e({ buttonID: t });
                                }, [e, t]),
                                _ = (0, a.useMemo)(() => (0, re.l)(l.type, { buttonID: t }), [l.type, t]),
                                d = s()(se, l.type !== ae.f.absent && le);
                            return r().createElement(
                                ne.u,
                                _,
                                r().createElement(
                                    'div',
                                    { className: ie },
                                    r().createElement(
                                        K,
                                        { size: Y.medium, type: o, disabled: n, onClick: c, isFocused: u },
                                        r().createElement(te, { classMix: d, content: i || '' }),
                                    ),
                                ),
                            );
                        },
                    ),
                    ce = 'DialogTemplateButtonList_base_8e';
                function _e() {
                    return (
                        (_e =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        _e.apply(this, arguments)
                    );
                }
                const de = (0, a.memo)(() => {
                        const e = (0, h.tT)('model').onButtonClicked,
                            u = (0, h.tT)('model.focus'),
                            t = u.focusedIndex,
                            n = u.onTabPressed,
                            i = (0, h.tT)('model.buttons'),
                            s = (0, a.useCallback)(
                                (e) => {
                                    n({ shift: e.shiftKey });
                                },
                                [n],
                            );
                        w(C.n.TAB, s);
                        const l = (0, a.useCallback)(
                            (u) => {
                                if (t < 0 || t >= i.length) return;
                                const n = i[t].value;
                                u.altKey || n.isDisabled || e({ buttonID: n.buttonID });
                            },
                            [i, t, e],
                        );
                        return (
                            w(C.n.ENTER, l),
                            r().createElement(
                                'div',
                                { className: ce },
                                i.map(({ value: u }, n) =>
                                    r().createElement(oe, _e({ key: u.buttonID, isFocused: n === t, onClick: e }, u)),
                                ),
                            )
                        );
                    }),
                    Ee = 'DialogTemplateWrapper_base_f7',
                    me = 'DialogTemplateWrapper_base__hidden_5f',
                    Ae = 'DialogTemplateWrapper_subView_30';
                function Fe() {
                    return (
                        (Fe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Fe.apply(this, arguments)
                    );
                }
                const ge = (0, a.memo)(({ Template: e }) => {
                    const u = (0, h.tT)('model', h.DA.None),
                        t = u.onCloseClicked,
                        i = u.placeHolders,
                        l = u.background,
                        o = u.dimmerAlpha,
                        c = u.displayFlags;
                    (0, a.useEffect)(() => {
                        const e = document.getElementById('root');
                        e && e.setAttribute('id', 'stubDialogTemplate');
                    }, []);
                    const _ = c.map(({ value: e }) => e),
                        d = (0, a.useRef)(i.map(({ value: e }) => e.resourceID)),
                        E = (0, a.useState)(0 !== d.current.length),
                        m = E[0],
                        A = E[1],
                        F = (0, a.useCallback)(
                            (e = 'default') => {
                                t({ reason: e });
                            },
                            [t],
                        ),
                        g = (0, a.useCallback)(() => {
                            F('escape');
                        }, [F]);
                    var D;
                    (D = g), w(C.n.ESCAPE, D);
                    const p = (0, a.useCallback)((e) => {
                            const u = d.current,
                                t = u.indexOf(e);
                            t > -1 && (u.splice(t, 1), 0 === u.length && A(!1));
                        }, []),
                        b = (0, a.useMemo)(() => {
                            const e = { backgroundColor: `rgba(19, 18, 16, ${o})` };
                            return l && (e.backgroundImage = `url(${l})`), e;
                        }, [l, o]),
                        f = (0, a.useMemo)(
                            () =>
                                i.reduce(
                                    (e, { value: u }) => (
                                        (e[u.placeHolder] = r().createElement(H, {
                                            key: u.placeHolder,
                                            id: u.resourceID,
                                            mixClass: Ae,
                                            onLoadCallback: p,
                                        })),
                                        e
                                    ),
                                    {},
                                ),
                            [p, i],
                        ),
                        B = s()(Ee, m && me);
                    return r().createElement(
                        n.ZN,
                        null,
                        r().createElement(
                            'div',
                            { className: B, style: b },
                            r().createElement(
                                e,
                                Fe(
                                    { onClose: F, buttons: r().createElement(de, null), displayFlags: _, isShown: !m },
                                    f,
                                ),
                            ),
                        ),
                    );
                });
                var De = t(3403);
                const pe = {
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
                    be = [
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
                function he() {
                    return (
                        (he =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        he.apply(this, arguments)
                    );
                }
                class fe extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && V(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && V(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                e && e(u), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            n = e.goto,
                            a = e.side,
                            i = e.type,
                            l = e.classNames,
                            o = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onMouseUp,
                            E =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(e, be)),
                            m = s()(pe.base, pe[`base__${i}`], pe[`base__${a}`], null == l ? void 0 : l.base),
                            A = s()(pe.icon, pe[`icon__${i}`], pe[`icon__${a}`], null == l ? void 0 : l.icon),
                            F = s()(pe.glow, null == l ? void 0 : l.glow),
                            g = s()(pe.caption, pe[`caption__${i}`], null == l ? void 0 : l.caption),
                            D = s()(pe.goto, null == l ? void 0 : l.goto);
                        return r().createElement(
                            'div',
                            he(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(_),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== i && r().createElement('div', { className: pe.shine }),
                            r().createElement('div', { className: A }, r().createElement('div', { className: F })),
                            r().createElement('div', { className: g }, u),
                            n && r().createElement('div', { className: D }, n),
                        );
                    }
                }
                let Ce;
                (fe.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        (e.responsiveHeader = 'responsiveHeader'),
                            (e.responsiveClosePosition = 'responsiveClosePosition'),
                            (e.disableResponsiveContentPosition = 'disableResponsiveContentPosition');
                    })(Ce || (Ce = {}));
                var Be = t(5262),
                    ve = t(3649);
                function we(e, u, t) {
                    const r = (0, a.useContext)(n.YN);
                    let i = Object.entries(r).filter(([e, u]) => !0 === u && e in Be.u);
                    return (
                        t && (i = i.filter((e) => t.includes(e[0]))),
                        e.reduce((e, t) => {
                            const n = i.map((e) =>
                                s()(u[((e, u) => e + '__' + u)(t, e[0])], u[((e, u) => e + (0, ve.e)(u))(t, e[0])]),
                            );
                            return (e[t] = s()(u[t], ...n)), e;
                        }, {})
                    );
                }
                const ke = {
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
                    ye = (0, a.memo)(
                        ({
                            isShown: e = !0,
                            classMix: u,
                            onClose: t,
                            icon: n,
                            topRight: i,
                            title: l,
                            content: o,
                            buttons: c,
                            footer: _,
                            displayFlags: d,
                            classNames: E,
                        }) => {
                            const m = ((e, u) => Object.keys(u).reduce((u, t) => ((u[t] = e.includes(t)), u), {}))(
                                    d,
                                    Ce,
                                ),
                                A = m.responsiveHeader,
                                F = m.responsiveClosePosition,
                                g = m.disableResponsiveContentPosition,
                                D = we(['base'], ke),
                                p = (0, a.useCallback)(() => {
                                    t && t();
                                }, [t]),
                                b = s()(D.base, u),
                                h = s()(
                                    ke.center,
                                    n && ke.center__withIcon,
                                    e && ke.center__shown,
                                    !g && ke.center__responsive,
                                    null == E ? void 0 : E.center,
                                ),
                                f = s()(ke.icon, A && ke.icon__responsive, null == E ? void 0 : E.icon),
                                C = s()(ke.title, A && ke.title__responsive, null == E ? void 0 : E.title),
                                B = s()(ke.closeBtn, F && ke.closeBtn__responsive),
                                v = s()(
                                    ke.divider,
                                    !o && ke.divider__noContent,
                                    !_ && ke.divider__noFooter,
                                    null == E ? void 0 : E.divider,
                                );
                            return r().createElement(
                                'div',
                                { className: b },
                                r().createElement(
                                    'div',
                                    { className: ke.topRight },
                                    i,
                                    r().createElement(
                                        'div',
                                        { className: B },
                                        r().createElement(fe, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: p,
                                        }),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: h },
                                    n && r().createElement('div', { className: f }, n),
                                    l && r().createElement('div', { className: C }, l),
                                    o && r().createElement('div', { className: ke.content }, o),
                                    r().createElement('div', { className: v }),
                                    _ && r().createElement('div', { className: ke.footer }, _),
                                    c && r().createElement('div', { className: ke.buttons }, c),
                                ),
                            );
                        },
                    );
                var xe = t(3215),
                    Se = t(4598),
                    Te = t(9480),
                    Ne = t(3946);
                const Le = (e) => {
                        const u = {
                            skillsDataBefore: e.object('tankmanBefore.skillList'),
                            skillsDataAfter: e.object('tankmanAfter.skillList'),
                            majorSkillsBefore: e.array('tankmanBefore.skillList.majorSkills'),
                            bonusSkillsBefore: e.array('tankmanBefore.skillList.bonusSkills'),
                            majorSkillsAfter: e.array('tankmanAfter.skillList.majorSkills'),
                            bonusSkillsAfter: e.array('tankmanAfter.skillList.bonusSkills'),
                        };
                        return {
                            skillsDataBefore: (0, Ne.Om)(
                                () => ({
                                    skillsEfficiency: u.skillsDataBefore.get().skillsEfficiency,
                                    majorSkills: u.majorSkillsBefore.get(),
                                    bonusSkills: u.bonusSkillsBefore.get(),
                                }),
                                { equals: Se.jv },
                            ),
                            skillsDataAfter: (0, Ne.Om)(
                                () => ({
                                    skillsEfficiency: u.skillsDataAfter.get().skillsEfficiency,
                                    majorSkills: u.majorSkillsAfter.get(),
                                    bonusSkills: u.bonusSkillsAfter.get(),
                                }),
                                { equals: Se.jv },
                            ),
                        };
                    },
                    Re = (0, xe.q3)()(
                        ({ observableModel: e }) => {
                            const u = Object.assign(
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
                                t = (0, Ne.Om)(() => Te.UI(u.roles.get(), Se.yR), { equals: Se.jv });
                            return Object.assign({}, u, { computes: Object.assign({ roles: t }, Le(e)) });
                        },
                        ({ externalModel: e }) => ({
                            roleChange: e.createCallbackNoArgs('onRoleCheckChanged'),
                            selectRole: e.createCallback((e) => ({ idx: e }), 'onRoleSelected'),
                        }),
                    ),
                    Oe = Re[0],
                    Ie = Re[1];
                let Me, Pe, He, je;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(Me || (Me = {})),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(Pe || (Pe = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(He || (He = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(je || (je = {}));
                const We = {
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
                    $e = [
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
                function Ge() {
                    return (
                        (Ge =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ge.apply(this, arguments)
                    );
                }
                const Ue = (e) => {
                    let u = e.id,
                        t = e.isChecked,
                        n = void 0 !== t && t,
                        i = e.isDisabled,
                        l = void 0 !== i && i,
                        o = e.isAlert,
                        c = void 0 !== o && o,
                        _ = e.size,
                        d = void 0 === _ ? Pe.medium : _,
                        E = e.type,
                        m = void 0 === E ? He.primary : E,
                        A = e.soundHover,
                        F = void 0 === A ? 'highlight' : A,
                        g = e.soundClick,
                        D = void 0 === g ? 'play' : g,
                        p = e.onMouseEnter,
                        b = e.onMouseLeave,
                        h = e.onMouseUp,
                        f = e.onMouseDown,
                        C = e.onClick,
                        B = e.onChange,
                        v = e.onFocus,
                        w = e.onBlur,
                        k = e.text,
                        y = e.contentStyles,
                        x = e.children,
                        S = e.alignment,
                        T = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, $e);
                    const N = (0, a.useState)(!1),
                        L = N[0],
                        R = N[1],
                        O = (0, a.useState)(!1),
                        I = (O[0], O[1]),
                        M = (0, a.useCallback)(
                            (e) => {
                                l || (B && B(), C && C(e));
                            },
                            [l, B, C],
                        ),
                        P = (0, a.useCallback)(
                            (e) => {
                                const u = e.button === Me.LEFT;
                                l || (u && R(!0), u && f && f(e), D && V(D));
                            },
                            [l, f, D],
                        ),
                        H = (0, a.useCallback)(
                            (e) => {
                                l || (R(!1), h && h(e));
                            },
                            [l, h],
                        ),
                        j = (0, a.useCallback)(
                            (e) => {
                                l || (p && p(e), F && V(F));
                            },
                            [l, p, F],
                        ),
                        W = (0, a.useCallback)(
                            (e) => {
                                l || (R(!1), b && b(e));
                            },
                            [l, b],
                        ),
                        $ = (0, a.useCallback)(
                            (e) => {
                                l || (I(!0), v && v(e));
                            },
                            [l, v],
                        ),
                        G = (0, a.useCallback)(
                            (e) => {
                                l || (I(!1), w && w(e));
                            },
                            [l, w],
                        ),
                        U = r().createElement(
                            'div',
                            { className: We.label },
                            r().createElement(
                                'div',
                                { className: s()(We.labelContent, 's-labelContent'), style: y },
                                k || x,
                            ),
                        );
                    return r().createElement(
                        'div',
                        Ge(
                            {
                                id: u,
                                className: s()(We.base, We[`base__${d}`], We[`base__${m}`], {
                                    [We.base__checked]: n,
                                    [We.base__disabled]: l,
                                    [We.base__mouseDown]: L,
                                    [We.base__alert]: c,
                                    [We.base__center]: S === je.Center,
                                    [We.base__bottom]: S === je.Bottom,
                                }),
                                onClick: M,
                                onMouseEnter: j,
                                onMouseLeave: W,
                                onMouseDown: P,
                                onMouseUp: H,
                                onFocus: $,
                                onBlur: G,
                            },
                            T,
                        ),
                        r().createElement(
                            'div',
                            { className: We.input },
                            r().createElement('div', { className: We.alertOverlay }),
                            r().createElement('div', { className: We.inputHoverOverlay }),
                            r().createElement('div', { className: We.highlight }),
                        ),
                        r().createElement('div', { className: We.checkmark }),
                        ((k || x) && U) || null,
                    );
                };
                let Ve;
                !(function (e) {
                    (e.Available = 'available'),
                        (e.Forced = 'forced'),
                        (e.CrewLock = 'crewLock'),
                        (e.FreeOperation = 'freeOperation');
                })(Ve || (Ve = {}));
                var ze = t(8018);
                const qe = {
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
                let Ze;
                !(function (e) {
                    (e.small = 'small'),
                        (e.c14x14 = 'c_14x14'),
                        (e.c18x18 = 'c_18x18'),
                        (e.c24x24 = 'c_24x24'),
                        (e.c24x24_new = 'c_24x24_new'),
                        (e.c30x30 = 'c_30x30'),
                        (e.c40x40 = 'c_40x40'),
                        (e.c30x30_red = 'c_30x30_red'),
                        (e.medium = 'medium'),
                        (e.white = 'white'),
                        (e.big = 'big');
                })(Ze || (Ze = {}));
                const Ye = r().memo(function ({ role: e, size: u = Ze.c30x30, className: t }) {
                        const n = (0, a.useMemo)(() => {
                            try {
                                var t;
                                const n =
                                    null == (t = R.images.gui.maps.icons.tankmen.roles.$dyn(u))
                                        ? void 0
                                        : t.$dyn((0, ve.BN)(e));
                                if (!n) throw Error;
                                return { backgroundImage: `url(${n})` };
                            } catch (u) {
                                console.error('Cant find resource in RoleIcon: ', e);
                            }
                        }, [e, u]);
                        return r().createElement('div', { style: n, className: s()(qe.base, qe[`base__${u}`], t) });
                    }),
                    Xe = 'Role_base_8a',
                    Ke = 'Role_bg_2d',
                    Je = 'Role_roleIcon_a2',
                    Qe = 'Role_base__selected_4d',
                    eu = 'Role_warning_49',
                    uu = r().memo(({ iconName: e, rolesCount: u, isTaken: t, isSelected: n, onClick: a }) =>
                        r().createElement(
                            'div',
                            {
                                onClick: () => {
                                    n || (z.playClick(), a());
                                },
                                onMouseEnter: () => !n && z.playHighlight(),
                                className: s()(Xe, n && Qe),
                            },
                            r().createElement('div', { className: Ke }),
                            r().createElement(Ye, { role: e, className: Je }),
                            t &&
                                r().createElement(
                                    J.i,
                                    {
                                        header: R.strings.tooltips.retrain.changeRole.warning.header(),
                                        body: (0, ve.uF)(R.strings.tooltips.retrain.changeRole.warning.body(), {
                                            num: u,
                                        }),
                                    },
                                    r().createElement('div', { className: eu }),
                                ),
                        ),
                    ),
                    tu = 'RoleChange_base_19',
                    nu = 'RoleChange_base__checked_71',
                    au = 'RoleChange_forced_83',
                    ru = 'RoleChange_lockIcon_59',
                    iu = 'RoleChange_tooltipBox_8c',
                    su = 'RoleChange_labelDisable_e0',
                    lu = 'RoleChange_roles_e8',
                    ou = 'RoleChange_roles__visible_5d',
                    cu = (e, u) => {
                        var t;
                        return e === Ve.Forced
                            ? (0, ve.uF)(R.strings.tooltips.retrain.changeRole.disable.forced.header(), {
                                  role: (0, ze.Gc)(u.role, u.isFemale, ze.wP.Objective),
                              })
                            : null == (t = R.strings.tooltips.retrain.changeRole.disable.$dyn(e))
                              ? void 0
                              : t.header();
                    },
                    _u = (0, De.Pi)(() => {
                        var e;
                        const u = Ie(),
                            t = u.model,
                            n = u.controls,
                            a = t.roleChange.get(),
                            i = a.isChecked,
                            l = a.disableState,
                            o = a.selectedIdx,
                            c = l !== Ve.Available;
                        return r().createElement(
                            'div',
                            { className: s()(tu, i && nu) },
                            r().createElement(
                                J.i,
                                {
                                    isEnabled: c,
                                    ignoreMouseClick: !0,
                                    header: cu(l, t.tankmanBefore.get()),
                                    body:
                                        null == (e = R.strings.tooltips.retrain.changeRole.disable.$dyn(l))
                                            ? void 0
                                            : e.body(),
                                },
                                l === Ve.Forced
                                    ? r().createElement(
                                          'div',
                                          { className: au },
                                          r().createElement('div', { className: ru }),
                                          R.strings.dialogs.retrain.changeRole(),
                                      )
                                    : r().createElement(
                                          'div',
                                          { className: iu },
                                          r().createElement(
                                              Ue,
                                              {
                                                  isChecked: i,
                                                  isDisabled: c,
                                                  size: Pe.medium,
                                                  type: He.main,
                                                  onChange: n.roleChange,
                                              },
                                              r().createElement(
                                                  'div',
                                                  { className: s()(c && su) },
                                                  R.strings.dialogs.retrain.changeRole(),
                                              ),
                                          ),
                                      ),
                            ),
                            r().createElement(
                                'div',
                                { className: s()(lu, i && ou) },
                                t.computes
                                    .roles()
                                    .map((e, u) =>
                                        r().createElement(uu, {
                                            key: e.iconName,
                                            iconName: e.iconName,
                                            rolesCount: e.rolesCount,
                                            isTaken: e.isTaken,
                                            isSelected: u === o,
                                            onClick: () => n.selectRole(u),
                                        }),
                                    ),
                            ),
                        );
                    }),
                    du = 'FooterContent_discount_36',
                    Eu = 'FooterContent_infoIcon_3c',
                    mu = 'FooterContent_label_20',
                    Au = 'FooterContent_emptyFooter_af',
                    Fu = (0, a.memo)(({ isRoleChangeVisible: e, hasRetrainDiscount: u }) =>
                        e
                            ? r().createElement(_u, null)
                            : u
                              ? r().createElement(
                                    'div',
                                    { className: du },
                                    r().createElement('div', { className: Eu }),
                                    r().createElement(
                                        'div',
                                        { className: mu },
                                        R.strings.dialogs.retrain.discountLabel(),
                                    ),
                                )
                              : r().createElement('div', { className: Au }),
                    ),
                    gu = () => {
                        const e = (0, a.useState)(f.O.view.getScale()),
                            u = e[0],
                            t = e[1];
                        return (
                            (0, a.useEffect)(() => {
                                const e = () => {
                                    t(f.O.view.getScale());
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
                    };
                var Du = t(7030),
                    pu = t(7160);
                const bu = 'WarningText_base_10',
                    hu = 'WarningText_alertIcon_8f',
                    fu = (0, a.memo)(({ showIcon: e = !0, className: u, children: t }) =>
                        r().createElement(
                            'div',
                            { className: s()(bu, u) },
                            e && r().createElement('div', { className: hu }),
                            t,
                        ),
                    );
                var Cu = t(883);
                const Bu = 'RetrainPriceList_base_68',
                    vu = 'RetrainPriceList_warningWraper_c0',
                    wu = 'RetrainPriceList_warning_60',
                    ku = (0, a.memo)(({ warning: e, className: u }) => {
                        const t = Boolean(e),
                            n = gu(),
                            a = (0, Du.useSpring)(
                                () =>
                                    t
                                        ? {
                                              from: { opacity: 0, height: 0 },
                                              to: [{ height: 40 * n }, { opacity: 1 }],
                                              config: { duration: 300, easing: pu.Fs },
                                          }
                                        : {
                                              from: { opacity: 1, height: 40 * n },
                                              to: [{ height: 0 }, { opacity: 0 }],
                                              config: { duration: 300, easing: pu.Fs },
                                          },
                                [t],
                            )[0];
                        return r().createElement(
                            'div',
                            { className: s()(Bu, u) },
                            r().createElement(
                                Du.animated.div,
                                { className: vu, style: a },
                                t && r().createElement(fu, { className: wu }, e),
                            ),
                            r().createElement(Cu.u, null),
                        );
                    }),
                    yu = 'Divider_base_0a',
                    xu = 'Divider_line_c9',
                    Su = r().memo(function ({ className: e }) {
                        return r().createElement(
                            'div',
                            { className: s()(yu, e) },
                            r().createElement('div', { className: xu }),
                        );
                    }),
                    Tu = {
                        base: 'TankmanIcon_base_f9',
                        base__big: 'TankmanIcon_base__big_98',
                        base__small: 'TankmanIcon_base__small_b2',
                        base__barracks: 'TankmanIcon_base__barracks_62',
                        base__special: 'TankmanIcon_base__special_3f',
                        base__c_204x256: 'TankmanIcon_base__c_204x256_97',
                    };
                let Nu;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(Nu || (Nu = {}));
                const Lu = (0, a.memo)(function ({ name: e, size: u = Nu.c100x60, classMix: t, isSkin: n = !1 }) {
                        let a = R.images.gui.maps.icons.tankmen.icons.$dyn(u);
                        n && (a = a.$dyn('crewSkins'));
                        const i = a.$dyn((0, ve.BN)(e));
                        return (
                            i ||
                                console.error(
                                    `Can't find ${(0, ve.BN)(e)} in R.images.gui.maps.icons.tankmen.icons.${u}${n ? '.crewSkins' : ''}`,
                                ),
                            r().createElement('div', {
                                style: { backgroundImage: `url(${i})` },
                                className: s()(Tu.base, Tu[`base__${u}`], t),
                            })
                        );
                    }),
                    Ru = 'Tankman_base_82',
                    Ou = 'Tankman_tankman_93',
                    Iu = 'Tankman_divider_5a',
                    Mu = (0, a.memo)(({ iconName: e, isInSkin: u }) =>
                        r().createElement(
                            'div',
                            { className: Ru },
                            r().createElement(Lu, { name: e, size: Nu.c158x118, isSkin: u, classMix: Ou }),
                            r().createElement(Su, { className: Iu }),
                        ),
                    );
                var Pu = t(3618),
                    Hu = t(9053);
                var ju = t(9690);
                const Wu = (e, u) => e.split(',').includes(u),
                    $u = {
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
                let Gu, Uu;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(Gu || (Gu = {})),
                    (function (e) {
                        (e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange');
                    })(Uu || (Uu = {}));
                const Vu = ({
                    isElite: e,
                    vehicleName: u,
                    vehicleShortName: t,
                    vehicleType: n,
                    vehicleLvl: a,
                    tags: i = '',
                    size: l = Gu.extraSmall,
                    type: o = Uu.colored,
                    className: c,
                    classNames: _,
                    isShortName: d = !1,
                }) => {
                    const E = `${(0, ve.BN)(n)}${e ? '_elite' : ''}`,
                        m = R.images.gui.maps.icons.vehicleTypes.big.$dyn(E);
                    return r().createElement(
                        'div',
                        {
                            className: s()(
                                $u.base,
                                $u[`base__size${(0, ve.e)(l)}`],
                                $u[`base__type${(0, ve.e)(o)}`],
                                c,
                            ),
                        },
                        r().createElement(
                            'div',
                            { className: s()($u.level, null == _ ? void 0 : _.level) },
                            (0, ju.HG)(a),
                        ),
                        r().createElement('div', {
                            className: s()(
                                $u.type,
                                e && $u[`type__elite${(0, ve.e)(l)}`],
                                $u[`type__${l}`],
                                null == _ ? void 0 : _.typeIcon,
                            ),
                            style: n ? { backgroundImage: `url(${m})` } : void 0,
                        }),
                        Wu(i, 'premiumIGR') && r().createElement('div', { className: $u.premiumIGR }),
                        r().createElement('div', { className: s()($u.name, null == _ ? void 0 : _.name) }, d ? t : u),
                    );
                };
                var zu = t(771),
                    qu = t(7078);
                const Zu = {
                    base: 'EfficiencyIndicator_base_34',
                    base__big: 'EfficiencyIndicator_base__big_a1',
                    base__large: 'EfficiencyIndicator_base__large_dc',
                    base__untrained: 'EfficiencyIndicator_base__untrained_cd',
                    percent: 'EfficiencyIndicator_percent_6b',
                    percent__full: 'EfficiencyIndicator_percent__full_30',
                    icon: 'EfficiencyIndicator_icon_da',
                };
                let Yu;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Big = 'big'), (e.Large = 'large');
                })(Yu || (Yu = {}));
                const Xu = (0, a.memo)(
                        ({
                            efficiencyValue: e,
                            tankmanID: u = zu.y$,
                            className: t,
                            targetId: n = R.views.lobby.crew.widgets.CrewWidget('resId'),
                            size: a = Yu.Normal,
                        }) => {
                            const i = e === zu.sU,
                                l = i
                                    ? { tooltipId: 'crewSkillUntrained' }
                                    : { tooltipId: 'skillsEfficiency', skillEfficiency: e, tankmanID: u };
                            return r().createElement(
                                qu.t,
                                { targetId: n, args: l, isEnabled: u !== zu.y$ },
                                r().createElement(
                                    'div',
                                    { className: s()(Zu.base, Zu[`base__${a}`], i && Zu.base__untrained, t) },
                                    i
                                        ? r().createElement('div', { className: Zu.icon })
                                        : r().createElement(
                                              'div',
                                              { className: s()(Zu.percent, e === zu.yb && Zu.percent__full) },
                                              (0, ve.dL)(B.Z5.getNumberFormat(100 * e, B.B3.INTEGRAL)),
                                          ),
                                ),
                            );
                        },
                    ),
                    Ku = r().memo(function ({ blinkStyle: e, isEnabled: u, children: t }) {
                        return r().createElement(Du.animated.div, { style: u && e ? e : void 0 }, t);
                    }),
                    Ju = 'AcceleratedTrainingIcon_base_4f',
                    Qu = 'AcceleratedTrainingIcon_icon_45',
                    et = (0, a.memo)(({ classMix: e, targetId: u }) =>
                        r().createElement(
                            J.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                                body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                                targetId: u,
                            },
                            r().createElement(
                                'div',
                                { className: s()(Ju, e) },
                                r().createElement('div', { className: Qu }),
                            ),
                        ),
                    );
                let ut, tt, nt, at, rt, it, st;
                !(function (e) {
                    (e.None = 'none'),
                        (e.Default = 'default'),
                        (e.Overlap = 'overlap'),
                        (e.ExtraOverlap = 'extraOverlap');
                })(ut || (ut = {})),
                    (function (e) {
                        (e.None = 'none'),
                            (e.SlideOutAndBlink = 'slideOutAndBlink'),
                            (e.SlideOut = 'slideOut'),
                            (e.FadeIn = 'fadeIn'),
                            (e.Blink = 'blink'),
                            (e.ScaleUp = 'ScaleUp');
                    })(tt || (tt = {})),
                    (function (e) {
                        (e.None = 'none'),
                            (e.NoMargins = 'noMargins'),
                            (e.ReducedMargins = 'reducedMargins'),
                            (e.OnlyLearningOverlap = 'onlyLearningOverlap'),
                            (e.Overlap = 'overlap'),
                            (e.ExtraOverlap = 'extraOverlap'),
                            (e.ExtraOverlapWithLevel = 'extraOverlapWithLevel'),
                            (e.ExtraOverlapWithEfficiency = 'extraOverlapWithEfficiency'),
                            (e.ExtraOverlapWithLevelAndEfficiency = 'extraOverlapWithLevelAndEfficiency');
                    })(nt || (nt = {})),
                    (function (e) {
                        (e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red');
                    })(at || (at = {})),
                    (function (e) {
                        (e.c24x24 = 'c_24x24'), (e.c44x44 = 'c_44x44');
                    })(rt || (rt = {})),
                    (function (e) {
                        (e.Major = 'major'), (e.Bonus = 'bonus');
                    })(it || (it = {})),
                    (function (e) {
                        (e.Learned = 'learned'), (e.Learning = 'learning');
                    })(st || (st = {}));
                const lt = (e) => (e.level < zu.I ? st.Learning : st.Learned),
                    ot = (e) => Te.dF(e, (e) => e.level === zu.I),
                    ct = ({
                        name: e,
                        roleName: u,
                        level: t,
                        customName: n,
                        skillType: a,
                        skillIndex: r,
                        tooltipData: i,
                    }) => {
                        const s = { targetId: i.targetId, isEnabled: i.isEnabled };
                        return e === zu.jw
                            ? a === it.Major
                                ? Object.assign(
                                      {
                                          contentId: R.views.lobby.crew.tooltips.EmptySkillTooltip('resId'),
                                          args: Object.assign({ tankmanID: i.tankmanID, skillIndex: r }, i.args),
                                      },
                                      s,
                                  )
                                : Object.assign(
                                      {
                                          header: R.strings.crew.matrix.skillTooltip.bonus.available.header(),
                                          body: R.strings.crew.matrix.skillTooltip.bonus.available.text(),
                                      },
                                      s,
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
                                              roleName: u,
                                              isBonus: a === it.Bonus,
                                              level: t,
                                              customName: n,
                                              skillIndex: r,
                                          },
                                          i.args,
                                      ),
                                  },
                                  s,
                              );
                    },
                    _t = (e, u) => (e === rt.c44x44 ? Yu.Large : u ? Yu.Big : Yu.Normal),
                    dt = (e, u) => {
                        const t = Te.U2(e, u);
                        return null == t ? void 0 : t.name;
                    },
                    Et = (e, u) => {
                        const t = Te.U2(e, u);
                        return null == t ? void 0 : t.level;
                    },
                    mt = 33,
                    At = 0,
                    Ft = !0,
                    gt = 'play';
                const Dt = [
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
                function pt() {
                    return (
                        (pt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        pt.apply(this, arguments)
                    );
                }
                const bt = (0, a.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            n = e.getImageSource,
                            i = e.frameCount,
                            s = e.onAnimate,
                            l = e.frameTime,
                            o = void 0 === l ? mt : l,
                            c = e.initialFrameIndex,
                            _ = void 0 === c ? At : c,
                            d = e.lastFrameIndex,
                            E = void 0 === d ? i - 1 : d,
                            m = e.loop,
                            A = void 0 === m ? Ft : m,
                            F = e.state,
                            g = void 0 === F ? gt : F,
                            D = e.onAnimationDone,
                            p = e.onAnimationComplete,
                            b = e.poster,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Dt);
                        const f = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = f.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y);
                                    };
                                switch (g) {
                                    case 'play':
                                        return (function () {
                                            const e = Ct(_, E, n),
                                                u = ht(_, E),
                                                a = window.setInterval(() => {
                                                    const n = u(),
                                                        r = e.get(n);
                                                    r
                                                        ? (null == s || s(n, r),
                                                          t(r),
                                                          n === E &&
                                                              (null == p || p(),
                                                              A || (null == D || D(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, o);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === _ && b ? { path: b, x: 0, y: 0 } : n(_),
                                                u = new Image();
                                            u.src = e.path;
                                            const a = () => t(ft(e, u));
                                            return (
                                                u.addEventListener('load', a), () => u.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [o, n, _, E, A, s, p, D, b, g]),
                            r().createElement('canvas', pt({}, h, { width: u, height: t, ref: f }))
                        );
                    }),
                    ht = (e, u) => {
                        let t = e;
                        return () => {
                            const n = t;
                            return (t += 1), t > u && (t = e), n;
                        };
                    },
                    ft = (e, u) => Object.assign({}, e, { img: u }),
                    Ct = (e, u, t) => {
                        const n = new Map(),
                            a = {};
                        for (let r = e; r <= u; r++) {
                            const e = t(r),
                                u = a[e.path];
                            if (u) n.set(r, ft(e, u));
                            else {
                                const u = new Image();
                                (a[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(r, ft(e, u));
                            }
                        }
                        return n;
                    };
                function Bt(e) {
                    const u = e.chunk,
                        t = u.rows * u.columns;
                    return (n) => {
                        const a = n % t,
                            r = (a % u.columns) * e.width,
                            i = Math.trunc(a / u.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(n / t)), x: r, y: i };
                    };
                }
                function vt(e) {
                    return (u) => `${e}${u}`;
                }
                const wt = [
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
                function kt() {
                    return (
                        (kt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        kt.apply(this, arguments)
                    );
                }
                let yt;
                !(function (e) {
                    (e.Play = 'play'), (e.Stop = 'stop');
                })(yt || (yt = {}));
                const xt = (e, u, t) => {
                        const n = new Image();
                        (n.src = t(u)), e.push(n);
                    },
                    St =
                        ((0, a.memo)((e) => {
                            let u = e.width,
                                t = e.height,
                                n = e.getSrcByFrame,
                                i = e.frameCount,
                                s = e.onAnimate,
                                l = void 0 === s ? () => {} : s,
                                o = e.frameTime,
                                c = void 0 === o ? 33 : o,
                                _ = e.initialFrameIndex,
                                d = void 0 === _ ? 0 : _,
                                E = e.loop,
                                m = void 0 === E || E,
                                A = e.state,
                                F = void 0 === A ? yt.Play : A,
                                g = e.onAnimationComplete,
                                D = void 0 === g ? () => {} : g,
                                p = e.revers,
                                b = void 0 !== p && p,
                                h = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(e, wt);
                            const f = (0, a.useRef)(null);
                            return (
                                (0, a.useEffect)(() => {
                                    const e = f.current;
                                    if (!e) return;
                                    const a = i - 1,
                                        r = e.getContext('2d'),
                                        s = (n) => {
                                            r.clearRect(0, 0, e.width, e.height), r.drawImage(n, 0, 0, u, t);
                                        };
                                    if ('stop' === F) {
                                        const e = n(0),
                                            u = new Image();
                                        u.src = e;
                                        const t = () => s(u);
                                        return u.addEventListener('load', t), () => u.removeEventListener('load', t);
                                    }
                                    const o = ((e, u, t) => {
                                            const n = [];
                                            if (t) for (let t = e; t >= 0; t--) xt(n, t, u);
                                            else for (let t = 0; t < e; t++) xt(n, t, u);
                                            return n;
                                        })(i, n, b),
                                        _ = ((e, u = 0) => {
                                            let t = u;
                                            return () => {
                                                const u = t;
                                                return (t += 1), t > e && (t = 0), u;
                                            };
                                        })(a, d),
                                        E = setInterval(() => {
                                            const e = _(),
                                                u = o[e];
                                            s(o[e]), l(e, u), e === a && (D(), m || clearInterval(E));
                                        }, c);
                                    return () => clearInterval(E);
                                }, [i, c, n, t, d, m, l, D, F, u, b]),
                                r().createElement('canvas', kt({}, h, { width: u, height: t, ref: f }))
                            );
                        }),
                        {
                            base: 'AnimatedLostSkill_base_55',
                            base__c_24x24: 'AnimatedLostSkill_base__c_24x24_d5',
                            base__c_44x44: 'AnimatedLostSkill_base__c_44x44_72',
                            icon: 'AnimatedLostSkill_icon_d4',
                        }),
                    Tt = r().memo(function ({ type: e, index: u, totalAmount: t, className: n, size: i }) {
                        const l = (0, a.useState)(yt.Stop),
                            o = l[0],
                            c = l[1],
                            _ = gu(),
                            d =
                                i === rt.c44x44
                                    ? ((e) => ({
                                          width: 96,
                                          height: 96,
                                          frameCount: 24,
                                          chunk: { count: 1, rows: 2, columns: 21 },
                                          getChunkPath: vt(
                                              `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_big_${e}_`,
                                          ),
                                      }))(e)
                                    : ((e) => ({
                                          width: 64,
                                          height: 64,
                                          frameCount: 24,
                                          chunk: { count: 1, rows: 1, columns: 24 },
                                          getChunkPath: vt(
                                              `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_small_${e}_`,
                                          ),
                                      }))(e),
                            E = Bt(d),
                            m = i === rt.c44x44 ? 60 : 36,
                            A = (0, Du.useSpring)(
                                () => ({
                                    from: { x: 0 },
                                    to: { x: f.O.view.remToPx(m) },
                                    config: { duration: 300, easing: pu.qb },
                                    delay: 600 - 100 * u,
                                }),
                                [u, m, _],
                            )[0];
                        return (
                            (0, a.useEffect)(() => {
                                const e = setTimeout(() => c(yt.Play), 100 * (t - 1) - 100 * u);
                                return () => clearTimeout(e);
                            }, [u, t]),
                            r().createElement(
                                J.i,
                                { body: R.strings.dialogs.perksReset.lostSkill.tooltip.description() },
                                r().createElement(
                                    Du.animated.div,
                                    { style: A, className: s()(St.base, St[`base__${i}`], n) },
                                    r().createElement(
                                        'div',
                                        { className: St.icon },
                                        r().createElement(bt, {
                                            width: d.width,
                                            height: d.height,
                                            frameCount: d.frameCount,
                                            getImageSource: E,
                                            loop: !1,
                                            state: o,
                                            style: { transform: `scale(${_})` },
                                        }),
                                    ),
                                ),
                            )
                        );
                    }),
                    Nt = 'AnimatedNewSkill_base_0f';
                function Lt(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Rt(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Rt(e, u);
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
                function Rt(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const Ot = new Map();
                let It = null;
                const Mt = () => {
                        Ot.size
                            ? It ||
                              (It = window.setInterval(() => {
                                  for (var e, u = Lt(Ot.values()); !(e = u()).done; ) {
                                      (0, e.value)();
                                  }
                              }, 5e3))
                            : It && (clearInterval(It), (It = null));
                    },
                    Pt = ({ type: e, state: u }) => {
                        const t = ((e, u) => ({
                                width: 24,
                                height: 24,
                                frameCount: 42,
                                chunk: { count: 1, columns: 42, rows: 1 },
                                getChunkPath: vt(`R.images.gui.maps.icons.sequence.new_skill.${e}_${u}_`),
                            }))(e, u),
                            n = Bt(t),
                            i = (0, a.useState)(yt.Stop),
                            s = i[0],
                            l = i[1];
                        return (
                            (0, a.useEffect)(() => {
                                const e = () => {
                                    l(yt.Play);
                                };
                                var u;
                                return (
                                    (u = e),
                                    Ot.set(u, u),
                                    Mt(),
                                    () =>
                                        ((e) => {
                                            Ot.delete(e), Mt();
                                        })(e)
                                );
                            }, []),
                            r().createElement(bt, {
                                width: t.width,
                                height: t.height,
                                frameCount: t.frameCount,
                                getImageSource: n,
                                loop: !1,
                                state: s,
                                onAnimationDone: () => {
                                    l(yt.Stop);
                                },
                                className: Nt,
                            })
                        );
                    },
                    Ht = ({ size: e, children: u, className: t }) => {
                        const n = gu(),
                            a = e === rt.c44x44 ? 48 : 26,
                            i = (0, Du.useSpring)({
                                from: { opacity: 0, marginRight: -a * n },
                                to: [{ marginRight: 0 }, { opacity: 1 }],
                                config: { duration: 400, easing: pu.Fs },
                                delay: 800,
                            });
                        return r().createElement(Du.animated.div, { style: i, className: t }, u);
                    },
                    jt = r().memo(function ({ isEnabled: e, className: u, children: t }) {
                        const n = (0, Du.useSpring)(() => ({ from: { scale: 1 } })),
                            i = n[0],
                            s = n[1];
                        return (
                            (0, a.useEffect)(() => {
                                e &&
                                    s.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: pu.Fs },
                                    });
                            }, [e, s]),
                            r().createElement(Du.animated.div, { style: e ? i : void 0, className: u }, t)
                        );
                    });
                let Wt;
                !(function (e) {
                    (e[(e.None = 0)] = 'None'), (e[(e.FadeIn = 1)] = 'FadeIn'), (e[(e.Scale = 2)] = 'Scale');
                })(Wt || (Wt = {}));
                const $t = r().memo(function ({
                        size: e,
                        skillsSignature: u,
                        animationType: t,
                        className: n,
                        children: a,
                    }) {
                        return t === Wt.Scale
                            ? r().createElement(jt, { isEnabled: !0, className: n }, a)
                            : t === Wt.FadeIn
                              ? r().createElement(Ht, { size: e, key: u, className: n }, a)
                              : r().createElement('div', { className: n }, a);
                    }),
                    Gt = r().memo(function ({ size: e, className: u, children: t }) {
                        const n = e === rt.c44x44 ? 48 : 26,
                            a = gu(),
                            i = (0, Du.useSpring)(
                                () => ({
                                    from: { opacity: 1, marginRight: 0 },
                                    to: [{ opacity: 0 }, { marginRight: -n * a }],
                                    config: { duration: 400, easing: pu.Fs },
                                }),
                                [a, n],
                            )[0];
                        return r().createElement(Du.animated.div, { style: i, className: u }, t);
                    });
                var Ut = t(3415);
                const Vt = ['className', 'children'];
                const zt = (e) => {
                    let u = e.className,
                        t = e.children,
                        n = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, Vt);
                    return r().createElement(Ut.l, { tooltipArgs: ct(n), className: u }, t);
                };
                let qt;
                !(function (e) {
                    (e.None = 'none'), (e.Learned = 'learned'), (e.Improved = 'Improved');
                })(qt || (qt = {}));
                const Zt = {
                    base: 'SkillIcon_base_43',
                    base__c_22x22: 'SkillIcon_base__c_22x22_14',
                    base__medium: 'SkillIcon_base__medium_d0',
                    base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                    base__big: 'SkillIcon_base__big_ae',
                    base__c_80x80: 'SkillIcon_base__c_80x80_79',
                    base__c_120x90: 'SkillIcon_base__c_120x90_8c',
                    base__dialogs: 'SkillIcon_base__dialogs_e5',
                };
                let Yt;
                !(function (e) {
                    (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c80x80 = 'c_80x80'),
                        (e.c120x90 = 'c_120x90'),
                        (e.c180x135 = 'dialogs');
                })(Yt || (Yt = {}));
                const Xt = r().memo(function ({ iconName: e, size: u = Yt.c24x24, className: t }) {
                        var n;
                        const a = null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(u)) ? void 0 : n.$dyn(e);
                        return r().createElement('div', {
                            style: null !== a ? { backgroundImage: `url(${a})` } : void 0,
                            className: s()(Zt.base, Zt[`base__${u}`], t),
                        });
                    }),
                    Kt = {
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
                    Jt = { [rt.c24x24]: Yt.c22x22, [rt.c44x44]: Yt.c52x52 },
                    Qt = ({
                        size: e,
                        isIrrelevant: u,
                        efficiencyState: t,
                        type: n,
                        iconName: a,
                        name: i,
                        skillState: l,
                        battleBooster: o,
                        className: c,
                    }) => {
                        const _ = o !== qt.None,
                            d = ((e, u, t, n, a = ze.H$.Normal) =>
                                e === zu.jw
                                    ? at.LightYellow
                                    : a === ze.H$.Untrained || n
                                      ? u === st.Learning
                                          ? at.Yellow
                                          : at.Grey
                                      : a === ze.H$.Low
                                        ? t
                                            ? at.Grey
                                            : at.Red
                                        : u === st.Learning
                                          ? at.Yellow
                                          : at.Grey)(i, l, _, u, t),
                            E = (!_ && t === ze.H$.Untrained) || u,
                            m = a === zu.jw;
                        return r().createElement(
                            'div',
                            {
                                className: s()(
                                    Kt.base,
                                    Kt[`base__type${(0, ve.e)(n)}`],
                                    Kt[`base__state${(0, ve.e)(l)}`],
                                    Kt[`base__border${(0, ve.e)(d)}`],
                                    Kt[`base__${e}`],
                                    E && Kt.base__disabled,
                                    c,
                                ),
                            },
                            r().createElement('div', {
                                className: Kt.background,
                                style:
                                    n === it.Bonus
                                        ? {
                                              backgroundImage: `url('R.images.gui.maps.icons.crew.skillsFrame.${e}.${d}')`,
                                          }
                                        : void 0,
                            }),
                            m && l === st.Learned && r().createElement('div', { className: Kt.newSkillHighLight }),
                            r().createElement(Xt, { iconName: a, size: Jt[e], className: Kt.icon }),
                            E && r().createElement('div', { className: Kt.disabledOverlay }),
                        );
                    };
                function en() {
                    return (
                        (en =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        en.apply(this, arguments)
                    );
                }
                const un = (e, u) => (e ? Wt.Scale : u ? Wt.FadeIn : Wt.None),
                    tn = ({
                        index: e,
                        skill: u,
                        previousSkill: t,
                        skillState: n,
                        skillType: a,
                        size: i,
                        efficiencyState: s,
                        tooltipData: l,
                        skillsSignature: o,
                        blinkStyle: c,
                        isNewSkillAnimated: _ = !1,
                        skillAnimationType: d = tt.None,
                        className: E,
                    }) => {
                        const m = d === tt.Blink || d === tt.SlideOutAndBlink,
                            A = d === tt.SlideOutAndBlink || d === tt.SlideOut,
                            F = d === tt.FadeIn,
                            g = {
                                skillIndex: e,
                                name: u.name,
                                roleName: u.roleName,
                                customName: u.customName,
                                level: u.level,
                                tooltipData: l,
                                skillType: a,
                            };
                        return _ && u.name === zu.jw && i === rt.c24x24
                            ? r().createElement(
                                  zt,
                                  en({}, g, { className: E }),
                                  r().createElement(Pt, { type: a, state: n }),
                              )
                            : r().createElement(
                                  r().Fragment,
                                  null,
                                  t &&
                                      A &&
                                      r().createElement(
                                          Gt,
                                          { size: i, className: E, key: t.name },
                                          r().createElement(
                                              Ku,
                                              { blinkStyle: c, isEnabled: m },
                                              r().createElement(
                                                  Qt,
                                                  en({ size: i, type: a, efficiencyState: s, skillState: n }, t),
                                              ),
                                          ),
                                      ),
                                  r().createElement(
                                      $t,
                                      {
                                          size: i,
                                          skillsSignature: o,
                                          className: E,
                                          animationType: un(d === tt.ScaleUp, F),
                                      },
                                      r().createElement(
                                          zt,
                                          g,
                                          r().createElement(
                                              Ku,
                                              { blinkStyle: c, isEnabled: m },
                                              r().createElement(
                                                  Qt,
                                                  en({ size: i, type: a, efficiencyState: s, skillState: n }, u),
                                              ),
                                          ),
                                      ),
                                  ),
                              );
                    },
                    nn = {
                        base: 'LostLevelAnimation_base_f6',
                        level: 'LostLevelAnimation_level_f0',
                        level__skillLost: 'LostLevelAnimation_level__skillLost_a2',
                        level__skillBlur: 'LostLevelAnimation_level__skillBlur_24',
                        base__c_24x24: 'LostLevelAnimation_base__c_24x24_1c',
                        base__c_44x44: 'LostLevelAnimation_base__c_44x44_44',
                    },
                    an = r().memo(function ({ size: e, level: u, withSlideOut: t = !0 }) {
                        const n = (0, Du.useSpring)({ to: { val: u }, config: { duration: 150 } }),
                            a = (0, Du.useSpring)(() => ({
                                from: { x: f.O.view.remToPx(-5), opacity: 0 },
                                to: { x: 0, opacity: 1 },
                                config: { duration: 300, easing: pu.qb },
                                delay: 700,
                            }))[0],
                            i = (0, Du.useSpring)(
                                () => ({
                                    from: { opacity: 0 },
                                    to: [{ opacity: 1 }, { opacity: 0 }],
                                    config: { duration: 150, easing: pu.qb },
                                }),
                                [u],
                            )[0];
                        return r().createElement(
                            'div',
                            { className: s()(nn.base, nn[`base__${e}`]) },
                            r().createElement(
                                Du.animated.div,
                                { style: t ? a : void 0, className: s()(nn.level, nn.level__skillLost) },
                                n.val.to((e) => (0, ve.dL)(Math.floor(e))),
                            ),
                            r().createElement(
                                Du.animated.div,
                                {
                                    style: t ? Object.assign({}, a, i) : i,
                                    className: s()(nn.level, nn.level__skillBlur),
                                },
                                n.val.to((e) => (0, ve.dL)(Math.floor(e))),
                            ),
                        );
                    }),
                    rn = 'SkillLevel_base_d2',
                    sn = 'SkillLevel_base__highlighted_e3',
                    ln = ({ skillLevel: e, isHighlighted: u = !1, className: t }) =>
                        r().createElement(
                            'div',
                            { className: s()(rn, u && sn, t) },
                            (0, ve.dL)(
                                e > 0 && e < 0.01
                                    ? 0.01
                                    : ((e, u = 2) => {
                                          const t = Math.pow(10, u);
                                          return e % 1 > 0 ? Math.round(e * t) / t : e;
                                      })(e),
                            ),
                        ),
                    on = ({
                        skillsAmountDiff: e,
                        size: u,
                        skillType: t,
                        wasLearned: n,
                        isAllMajorSkillsLearned: a,
                        skill: i,
                        possibleSkill: s,
                        blinkStyle: l,
                        className: o,
                    }) => {
                        const c = s || i,
                            _ = void 0 !== i && void 0 !== s ? s.level - i.level : 0,
                            d = e > 0,
                            E = e < 0 || _ > 0;
                        return !c ||
                            (c.level === zu.I && 0 === _) ||
                            ((null == s ? void 0 : s.level) === zu.I && t === it.Bonus && _ > 0 && !a)
                            ? null
                            : d || (_ < 0 && 0 === e)
                              ? r().createElement(an, { size: u, level: c.level, withSlideOut: d })
                              : r().createElement(
                                    jt,
                                    { isEnabled: Boolean(n) },
                                    r().createElement(
                                        Ku,
                                        { blinkStyle: l, isEnabled: E },
                                        r().createElement(ln, { skillLevel: c.level, isHighlighted: E, className: o }),
                                    ),
                                );
                    },
                    cn = {
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
                    _n = ({
                        skills: e,
                        skillType: u = it.Major,
                        possibleSkills: t,
                        isAcceleratedTrainingVisible: n = !1,
                        collapseLayout: a = nt.None,
                        efficiencyState: i,
                        size: l,
                        tooltipData: o,
                        blinkStyle: c,
                        isSkillsEfficiencyLearning: _ = !1,
                        isAllMajorSkillsLearned: d = !1,
                        isNewSkillAnimated: E = !1,
                        className: m,
                    }) => {
                        const A = void 0 === t ? e : t,
                            F = (0, h.D9)(e),
                            g = (0, h.D9)(A),
                            D = F && Te.lN(F),
                            p = Te.lN(e),
                            b = ot(A),
                            f = Te.lN(A),
                            C = t ? e.length - t.length : 0,
                            B = i !== ze.H$.Low || _ || (f && p && f.level !== p.level),
                            v = ((e) => Te.UI(e, (e) => e.name).join())(A);
                        return r().createElement(
                            'div',
                            { className: s()(cn.base, cn[`base__${l}`], cn[`base__collapse${(0, ve.e)(a)}`], m) },
                            ((e, u, t, n, a) => {
                                if (!n || !u) return Te.UI(t, (e, u) => a(e, tt.None, u));
                                const r = new Map(Te.UI(u, ({ name: e, level: u }) => [e, u])),
                                    i = new Map(Te.UI(e, ({ name: e, level: u }) => [e, u]));
                                let s = !1;
                                return Te.UI(t, (l, o) => {
                                    const c = l.name,
                                        _ = l.level,
                                        d = c === zu.jw,
                                        E = dt(e, o),
                                        m = d ? Et(e, o) : i.get(c),
                                        A = d ? Et(u, o) : r.get(c),
                                        F = dt(t, o - 1),
                                        g = dt(n, o),
                                        D = dt(n, o + 1);
                                    let p = tt.None;
                                    return (
                                        s || c !== D || F === g || d || E !== zu.jw
                                            ? d && o === t.length - 1 && s
                                                ? (p = tt.FadeIn)
                                                : (!d && !i.has(c)) || (void 0 === E && d) || (m !== _ && _ === zu.I)
                                                  ? (p = tt.Blink)
                                                  : A !== m && (p = tt.ScaleUp)
                                            : ((s = !0), (p = i.has(c) ? tt.SlideOut : tt.SlideOutAndBlink)),
                                        a(l, p, o)
                                    );
                                });
                            })(e, F, A, g, (e, t, n) => {
                                const a = lt(e);
                                return r().createElement(tn, {
                                    key: n,
                                    index: n,
                                    skill: e,
                                    skillState: a,
                                    skillType: u,
                                    previousSkill: g && Te.U2(g, n),
                                    skillAnimationType: t,
                                    size: l,
                                    skillsSignature: v,
                                    efficiencyState: i,
                                    tooltipData: o,
                                    blinkStyle: c,
                                    isNewSkillAnimated: E,
                                    className: s()(
                                        cn.skill,
                                        cn[`skill__state${(0, ve.e)(a)}`],
                                        e === f && cn.skill__last,
                                        e === b && cn.skill__lastLearnedSkill,
                                    ),
                                });
                            }),
                            B &&
                                r().createElement(on, {
                                    skillsAmountDiff: C,
                                    size: l,
                                    wasLearned: D && p && D.level !== p.level,
                                    skillType: u,
                                    isAllMajorSkillsLearned: d,
                                    skill: p,
                                    possibleSkill: f,
                                    blinkStyle: c,
                                    className: cn.level,
                                }),
                            n &&
                                r().createElement(et, {
                                    classMix: cn.acceleratedTrainingIcon,
                                    targetId: null == o ? void 0 : o.targetId,
                                }),
                            C > 0 &&
                                ((e, u) => {
                                    const t = [];
                                    for (let n = 0; n < e; n++) t.push(u(n));
                                    return t;
                                })(C, (e) =>
                                    r().createElement(Tt, {
                                        key: e,
                                        index: e,
                                        totalAmount: C,
                                        type: u,
                                        className: cn.lostSkill,
                                        size: l,
                                    }),
                                ),
                        );
                    };
                function dn() {
                    return (
                        (dn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        dn.apply(this, arguments)
                    );
                }
                const En = ({
                        skills: e,
                        collapseLayout: u = nt.None,
                        skillType: t = it.Major,
                        efficiencyState: n,
                        size: a,
                        tooltipData: i,
                        className: l,
                        isAcceleratedTrainingVisible: o,
                    }) => {
                        const c = Te.lN(e),
                            _ = ot(e),
                            d = n !== ze.H$.Low && (null == c ? void 0 : c.level) !== zu.I;
                        return r().createElement(
                            'div',
                            { className: s()(cn.base, cn[`base__${a}`], cn[`base__collapse${(0, ve.e)(u)}`], l) },
                            Te.UI(e, (e, u) => {
                                const l = lt(e);
                                return r().createElement(
                                    zt,
                                    {
                                        key: u,
                                        skillIndex: u,
                                        name: e.name,
                                        roleName: e.roleName,
                                        customName: e.customName,
                                        level: e.level,
                                        tooltipData: i,
                                        skillType: t,
                                        className: s()(
                                            cn.skill,
                                            cn[`skill__state${(0, ve.e)(l)}`],
                                            e === c && cn.skill__last,
                                            e === _ && cn.skill__lastLearnedSkill,
                                        ),
                                    },
                                    r().createElement(
                                        Qt,
                                        dn({ size: a, type: t, efficiencyState: n, skillState: l }, e),
                                    ),
                                );
                            }),
                            d && c && r().createElement(ln, { skillLevel: c.level, className: cn.level }),
                            o &&
                                r().createElement(et, {
                                    classMix: cn.acceleratedTrainingIcon,
                                    targetId: null == i ? void 0 : i.targetId,
                                }),
                        );
                    },
                    mn = {
                        base: 'Skills_base_ec',
                        efficiency: 'Skills_efficiency_d0',
                        base__c_44x44: 'Skills_base__c_44x44_c0',
                        rows: 'Skills_rows_e8',
                        bonusRow: 'Skills_bonusRow_4a',
                    };
                function An() {
                    return (
                        (An =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        An.apply(this, arguments)
                    );
                }
                const Fn = ({
                        data: e,
                        dataToCompare: u,
                        classes: t,
                        tankmanID: n = zu.y$,
                        size: a = rt.c24x24,
                        collapseType: i = ut.None,
                        isSkillTooltipEnabled: l = !1,
                        isAcceleratedTrainingVisible: o = !1,
                        isNewSkillAnimated: c = !1,
                        isEfficiencyVisible: _ = !1,
                        isBonusSkillsVisible: d = !0,
                        tooltipsTargetId: E = R.invalid('resId'),
                        tooltipArgs: m,
                        blinkStyle: A,
                        children: F,
                    }) => {
                        const g = e.majorSkills,
                            D = e.bonusSkills,
                            p = e.skillsEfficiency,
                            b = (null == u ? void 0 : u.skillsEfficiency) || p,
                            h = (0, ze.Y4)(p),
                            f = void 0 !== u && u.skillsEfficiency !== p,
                            C = h !== ze.H$.Normal || _ || f,
                            B = null == u ? void 0 : u.majorSkills,
                            v = null == u ? void 0 : u.bonusSkills,
                            w = v || D,
                            k = Te.lN(w),
                            y = d && w.length > 0,
                            x = c || void 0 !== u,
                            S = (null == B ? void 0 : B.length) === zu.GT,
                            T = ((e, u, t, n) => {
                                if (u !== zu.vA) return nt.None;
                                switch (e) {
                                    case ut.Default:
                                        if (t && n) return nt.NoMargins;
                                        break;
                                    case ut.Overlap:
                                        if (t) return n ? nt.Overlap : nt.ReducedMargins;
                                        if (n) return nt.OnlyLearningOverlap;
                                        break;
                                    case ut.ExtraOverlap:
                                        return t && n
                                            ? nt.ExtraOverlapWithLevelAndEfficiency
                                            : t
                                              ? nt.ExtraOverlapWithEfficiency
                                              : n
                                                ? nt.ExtraOverlapWithLevel
                                                : nt.ExtraOverlap;
                                }
                                return nt.None;
                            })(i, w.length, C, h !== ze.H$.Low && void 0 !== k && k.level < zu.I),
                            N = {
                                size: a,
                                efficiencyState: h,
                                tooltipData: { targetId: E, isEnabled: l, tankmanID: n, args: m },
                            };
                        return r().createElement(
                            'div',
                            { className: s()(mn.base, mn[`base__${a}`], null == t ? void 0 : t.base) },
                            C &&
                                r().createElement(
                                    Ku,
                                    { blinkStyle: A, isEnabled: f && x },
                                    r().createElement(Xu, {
                                        efficiencyValue: b,
                                        tankmanID: n,
                                        className: mn.efficiency,
                                        size: _t(a, y),
                                        targetId: E,
                                    }),
                                ),
                            F,
                            r().createElement(
                                'div',
                                { className: mn.rows },
                                x
                                    ? r().createElement(
                                          r().Fragment,
                                          null,
                                          r().createElement(
                                              _n,
                                              An(
                                                  {
                                                      skills: g,
                                                      possibleSkills: B,
                                                      blinkStyle: A,
                                                      isAcceleratedTrainingVisible: o,
                                                      isNewSkillAnimated: c,
                                                      isSkillsEfficiencyLearning: f,
                                                  },
                                                  N,
                                              ),
                                          ),
                                          y &&
                                              r().createElement(
                                                  _n,
                                                  An(
                                                      {
                                                          skills: D,
                                                          skillType: it.Bonus,
                                                          possibleSkills: v,
                                                          className: mn.bonusRow,
                                                          collapseLayout: T,
                                                          blinkStyle: A,
                                                          isNewSkillAnimated: c,
                                                          isAllMajorSkillsLearned: S,
                                                      },
                                                      N,
                                                  ),
                                              ),
                                      )
                                    : r().createElement(
                                          r().Fragment,
                                          null,
                                          r().createElement(En, An({ skills: g, isAcceleratedTrainingVisible: o }, N)),
                                          y &&
                                              r().createElement(
                                                  En,
                                                  An(
                                                      {
                                                          skills: D,
                                                          skillType: it.Bonus,
                                                          className: mn.bonusRow,
                                                          collapseLayout: T,
                                                      },
                                                      N,
                                                  ),
                                              ),
                                      ),
                            ),
                        );
                    },
                    gn = 'SkillsWithRole_base_92',
                    Dn = 'SkillsWithRole_role_66',
                    pn = 'SkillsWithRole_role__glow_93',
                    bn = ['role', 'size', 'withRoleGlow', 'className', 'isEfficiencyVisible'];
                function hn() {
                    return (
                        (hn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        hn.apply(this, arguments)
                    );
                }
                const fn = (e) => {
                    let u = e.role,
                        t = e.size,
                        n = void 0 === t ? rt.c44x44 : t,
                        a = e.withRoleGlow,
                        i = e.className,
                        l = e.isEfficiencyVisible,
                        o = void 0 === l || l,
                        c = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, bn);
                    return r().createElement(
                        'div',
                        { className: gn },
                        u && r().createElement(Ye, { role: u, className: s()(Dn, a && pn) }),
                        r().createElement(Fn, hn({ classes: { base: i }, isEfficiencyVisible: o, size: n }, c)),
                    );
                };
                let Cn;
                !(function (e) {
                    (e.Small = 'small'), (e.Big = 'big');
                })(Cn || (Cn = {}));
                const Bn = (e) => (e < 0.5 ? 4 * Math.pow(e, 3) : 4 * Math.pow(e - 1, 3) + 1),
                    vn = {
                        base: 'Frame_base_e1',
                        base__gray: 'Frame_base__gray_08',
                        base__red: 'Frame_base__red_6b',
                        base__yellow: 'Frame_base__yellow_2d',
                        base__empty: 'Frame_base__empty_31',
                    };
                let wn;
                !(function (e) {
                    (e.Gray = 'gray'), (e.Red = 'red'), (e.Yellow = 'yellow'), (e.Empty = 'empty');
                })(wn || (wn = {}));
                const kn = (e, u, t, n) =>
                        n
                            ? e === ze.H$.Low
                                ? wn.Gray
                                : u < zu.I
                                  ? wn.Yellow
                                  : wn.Gray
                            : t || u < zu.I
                              ? e === ze.H$.Low
                                  ? wn.Red
                                  : wn.Yellow
                              : e === ze.H$.Low
                                ? wn.Red
                                : wn.Gray,
                    yn = r().memo(function ({
                        isNewSkill: e,
                        isIrrelevant: u,
                        efficiencyState: t,
                        skillLevel: n,
                        className: a,
                    }) {
                        return r().createElement('div', { className: s()(vn.base, vn[`base__${kn(t, n, e, u)}`], a) });
                    }),
                    xn = {
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
                let Sn;
                !(function (e) {
                    (e.c24x24 = 'c_24x24'), (e.c44x44 = 'c_44x44');
                })(Sn || (Sn = {}));
                r().memo(function ({
                    iconName: e,
                    level: u,
                    size: t = Sn.c44x44,
                    isLevelVisible: n = u < zu.I,
                    isIrrelevant: i,
                    efficiencyState: l,
                    className: o,
                    isSkillLost: c,
                }) {
                    const _ = e === zu.jw,
                        d = (l === ze.H$.Untrained || i) && !_,
                        E = (0, Du.useSpring)({ to: { val: u }, config: { duration: 150 } }),
                        m = (0, Du.useSpring)(() => ({ from: { x: -5, opacity: 0 } })),
                        A = m[0],
                        F = m[1],
                        g = (0, Du.useSpring)(() => ({ t: 0 })),
                        D = g[0],
                        p = g[1];
                    return (
                        (0, a.useEffect)(() => {
                            p.start({ from: { t: 1 }, to: { t: 0 }, config: { duration: 500 } });
                        }, [F, p, u]),
                        (0, a.useEffect)(
                            () => (
                                F.set({ x: -5, opacity: 0 }),
                                F.start({
                                    reset: !0,
                                    pause: !1,
                                    to: { x: 0, opacity: 1 },
                                    config: { duration: 300, easing: Bn },
                                    delay: c ? 700 : 0,
                                    immediate: !c,
                                }),
                                () => {
                                    F.stop();
                                }
                            ),
                            [F, c],
                        ),
                        r().createElement(
                            'div',
                            { className: s()(xn.base, xn[`base__${t}`], o) },
                            r().createElement(Xt, {
                                iconName: e,
                                size: Yt.c52x52,
                                className: s()(xn.icon, d && xn.icon__disable, _ && xn.icon__new),
                            }),
                            d && r().createElement('div', { className: xn.disabledPattern }),
                            !_ &&
                                r().createElement(yn, {
                                    isNewSkill: _,
                                    efficiencyState: l,
                                    skillLevel: u,
                                    isIrrelevant: i,
                                }),
                            n &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        Du.animated.div,
                                        { style: A, className: s()(xn.level, c && xn.level__skillLost) },
                                        E.val.to((e) => (0, ve.dL)(Math.floor(e))),
                                    ),
                                    r().createElement(
                                        Du.animated.div,
                                        {
                                            style: Object.assign({}, A, { opacity: D.t.to((e) => e) }),
                                            className: s()(xn.level, xn.level__skillBlur),
                                        },
                                        (0, ve.dL)(Math.floor(u)),
                                    ),
                                ),
                        )
                    );
                });
                const Tn = (e) => Math.round(Math.abs(e)),
                    Nn = (e, u) => {
                        const t = (0, a.useRef)(null),
                            n = (0, a.useRef)(null),
                            r = (0, a.useRef)(null),
                            i = (0, a.useRef)({
                                isImmediate: !1,
                                isAnimationActive: !0,
                                previousBeforeShift: 0,
                                previousAfterShift: 0,
                            }),
                            s = (0, Du.useSpring)(() => ({
                                from: { opacity: 0 },
                                to: { opacity: 1 },
                                config: { duration: 500, easing: pu.qb },
                                delay: 150,
                                pause: !0,
                            })),
                            l = s[0],
                            o = s[1],
                            c = (0, Du.useSpring)(() => ({ opacity: 0 })),
                            _ = c[0],
                            d = c[1],
                            E = (0, Du.useSpring)(() => ({ x: 0, opacity: 0 })),
                            m = E[0],
                            A = E[1],
                            F = (0, Du.useSpring)(() => ({ x: 0 })),
                            g = F[0],
                            D = F[1];
                        return (
                            ((e, u) => {
                                (0, a.useEffect)(() => {
                                    let u = null;
                                    return (
                                        (u = requestAnimationFrame(() => {
                                            u = requestAnimationFrame(() => {
                                                (u = null), e();
                                            });
                                        })),
                                        () => {
                                            null !== u && cancelAnimationFrame(u);
                                        }
                                    );
                                }, u);
                            })(
                                () => (
                                    (() => {
                                        if (e && t.current && n.current && r.current) {
                                            const e = i.current,
                                                u = e.isImmediate,
                                                a = e.isAnimationActive,
                                                s = e.previousBeforeShift,
                                                l = e.previousAfterShift,
                                                c = t.current.getBoundingClientRect(),
                                                _ = n.current.getBoundingClientRect(),
                                                d = r.current.getBoundingClientRect(),
                                                E = u && a,
                                                m = E ? s : Tn(d.left - c.right - s),
                                                F = E ? l : Tn(d.right - _.left + l);
                                            (i.current.isImmediate = !0),
                                                (i.current.previousBeforeShift = m),
                                                (i.current.previousAfterShift = F),
                                                u || o.start({ reset: !0, pause: !1 }),
                                                D.start({
                                                    from: { x: -s },
                                                    to: { x: -m },
                                                    config: { duration: 500, easing: pu.qb },
                                                    delay: 0,
                                                    immediate: u,
                                                }),
                                                A.start({
                                                    from: { x: l, opacity: 0 },
                                                    to: { x: F, opacity: 1 },
                                                    config: { duration: 500, easing: pu.qb },
                                                    delay: 0,
                                                    immediate: u,
                                                    onRest: () => {
                                                        i.current.isAnimationActive = !1;
                                                    },
                                                });
                                        }
                                    })(),
                                    () => {
                                        A.stop();
                                    }
                                ),
                                [o, D, e, A, ...u],
                            ),
                            (0, a.useEffect)(() => {
                                d.start({
                                    from: { opacity: 0 },
                                    to: { opacity: 1 },
                                    config: { duration: 300, easing: pu.qb },
                                    delay: 0,
                                });
                            }, [d]),
                            {
                                arrowStyles: l,
                                skillsAfterStyles: _,
                                skillsAfterMoveStyles: m,
                                skillsBeforeMoveStyles: g,
                                skillsBeforeRef: t,
                                skillsAfterRef: n,
                                arrowRef: r,
                            }
                        );
                    },
                    Ln = {
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
                    Rn = (0, De.Pi)(({ className: e }) => {
                        const u = Ie().model,
                            t = (0, c.GS)().mediaSize,
                            n = u.isPriceSelected.get(),
                            a = u.tankmanBefore.get(),
                            i = u.tankmanAfter.get(),
                            l = u.computes.skillsDataBefore(),
                            o = u.computes.skillsDataAfter(),
                            _ = u.roleChange.get().isChecked,
                            d = l.bonusSkills.length > 0,
                            E = n && o.bonusSkills.length > 0,
                            m = d || E,
                            A = n && _ && a.role !== i.role,
                            F = t < c.cJ.Medium ? Sn.c24x24 : Sn.c44x44,
                            g = (0, ze.Y4)(o.skillsEfficiency),
                            D = Nn(n, [F, o.bonusSkills.length, o.majorSkills.length, A]),
                            p = D.arrowStyles,
                            b = D.skillsBeforeMoveStyles,
                            h = D.skillsAfterMoveStyles,
                            f = D.skillsAfterStyles,
                            C = D.skillsAfterRef,
                            B = D.skillsBeforeRef,
                            v = D.arrowRef;
                        return r().createElement(
                            'div',
                            {
                                className: s()(
                                    Ln.base,
                                    m && Ln.base__withBonusSkills,
                                    n && Ln.base__withPriceSelected,
                                    e,
                                ),
                            },
                            r().createElement('div', { className: Ln.background }),
                            r().createElement(
                                'div',
                                {
                                    className: s()(
                                        Ln.skillsWrapper,
                                        Ln.skillsWrapper__before,
                                        !d && E && Ln.skillsWrapper__withoutBonusSkills,
                                    ),
                                },
                                r().createElement(
                                    Du.animated.div,
                                    { style: Object.assign({}, b), ref: B },
                                    r().createElement(fn, {
                                        data: l,
                                        tankmanID: a.invId,
                                        role: A ? a.role : void 0,
                                        size: F,
                                    }),
                                ),
                            ),
                            n &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        Du.animated.div,
                                        { style: p, className: Ln.arrowWrapper, ref: v },
                                        r().createElement('div', { className: Ln.arrow }),
                                    ),
                                    r().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                Ln.skillsWrapper,
                                                Ln.skillsWrapper__after,
                                                !E && d && Ln.skillsWrapper__withoutBonusSkills,
                                            ),
                                        },
                                        r().createElement(
                                            Du.animated.div,
                                            { style: h, ref: C },
                                            r().createElement(
                                                Du.animated.div,
                                                { style: Object.assign({}, f) },
                                                r().createElement(fn, {
                                                    data: o,
                                                    tankmanID: a.invId,
                                                    size: F,
                                                    role: A ? i.role : void 0,
                                                    withRoleGlow: !0,
                                                    className: s()(Ln.skills, g === ze.H$.Low && Ln.skills__low),
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                        );
                    }),
                    On = 'TitleContent_base_38',
                    In = 'TitleContent_tankName_18',
                    Mn = 'TitleContent_title_be',
                    Pn = 'TitleContent_result_1e';
                function Hn() {
                    return (
                        (Hn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Hn.apply(this, arguments)
                    );
                }
                const jn = (0, a.memo)(({ title: e = '', role: u, isFemale: t, vehicle: n }) => {
                        var a;
                        return r().createElement(
                            'div',
                            { className: On },
                            r().createElement(Pu.w, {
                                text: e,
                                binding: {
                                    role: null == (a = (0, ze.Gc)(u, t, ze.wP.Objective)) ? void 0 : a.toString(),
                                    vehicleName: r().createElement(
                                        Vu,
                                        Hn({ isShortName: !0, type: Uu.white, size: Gu.big, className: In }, n),
                                    ),
                                },
                                justifyContent: Hu.v2.Center,
                                classMix: Mn,
                            }),
                            r().createElement(Rn, { className: Pn }),
                        );
                    }),
                    Wn = 'RetrainSingleDialogApp_icon_40',
                    $n = 'RetrainSingleDialogApp_center_b8',
                    Gn = 'RetrainSingleDialogApp_center__checked_92',
                    Un = 'RetrainSingleDialogApp_priceList_4a',
                    Vn = 'RetrainSingleDialogApp_divider_7d';
                function zn() {
                    return (
                        (zn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        zn.apply(this, arguments)
                    );
                }
                const qn = (0, De.Pi)((e) => {
                    const u = Ie().model,
                        t = u.tankmanAfter.get(),
                        n = u.tankmanBefore.get(),
                        a = u.roleChange.get().isVisible,
                        i = (0, c.GS)().mediaSize > c.cJ.Medium && !a;
                    return r().createElement(
                        ye,
                        zn({}, e, {
                            icon: i && r().createElement(Mu, { iconName: n.iconName, isInSkin: n.isInSkin }),
                            title: r().createElement(jn, {
                                title: u.title.get() || '',
                                role: t.role,
                                isFemale: t.isFemale,
                                vehicle: u.targetVehicle.get(),
                            }),
                            content: r().createElement(ku, { warning: u.warning.get() || '', className: Un }),
                            footer: r().createElement(Fu, {
                                isRoleChangeVisible: a,
                                hasRetrainDiscount: u.hasRetrainDiscount.get(),
                            }),
                            classNames: { icon: Wn, center: s()($n, a && Gn), divider: Vn },
                        }),
                    );
                });
                engine.whenReady.then(() => {
                    b().render(
                        r().createElement(
                            Oe,
                            null,
                            r().createElement(D, null, r().createElement(ge, { Template: qn })),
                        ),
                        document.getElementById('root'),
                    );
                });
            },
            883: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => ie });
                var n = t(7363),
                    a = t.n(n),
                    r = t(3215),
                    i = t(4598),
                    s = t(9480),
                    l = t(3946);
                const o = (0, r.q3)()(
                        ({ observableModel: e }) => {
                            const u = { cardsList: e.array('cardsList', []) },
                                t = (0, l.Om)(
                                    () =>
                                        (0, s.UI)(u.cardsList.get(), (e) =>
                                            Object.assign({}, e, {
                                                price: Object.assign({}, e.price),
                                                cardTooltip: Object.assign({}, e.cardTooltip),
                                                priceTooltip: Object.assign({}, e.priceTooltip),
                                            }),
                                        ),
                                    { equals: i.jv },
                                );
                            return Object.assign({}, u, { computes: { cards: t } });
                        },
                        ({ externalModel: e }) => ({
                            onCardClick: e.createCallback((e) => ({ index: e }), 'onCardClick'),
                        }),
                    ),
                    c = o[0],
                    _ = o[1];
                var d = t(6483),
                    E = t.n(d),
                    m = t(5415),
                    A = t(3403),
                    F = t(3415);
                let g, D;
                !(function (e) {
                    (e.Default = 'default'), (e.Reset = 'reset'), (e.Retrain = 'retrain');
                })(g || (g = {})),
                    (function (e) {
                        (e.Default = ''), (e.Disabled = 'disabled'), (e.Selected = 'selected');
                    })(D || (D = {}));
                var p = t(3138),
                    b = t(2344),
                    h = t(7030),
                    f = t(7160),
                    C = t(8018);
                const B = 'CustomComponents_storage_c8',
                    v = 'CustomComponents_storageIcon_2c',
                    w = 'CustomComponents_storageCount_9b',
                    k = (0, n.memo)(({ kwargs: e, cardType: u }) => {
                        if (u === g.Reset) {
                            const u = null == e ? void 0 : e.storageCount;
                            return void 0 === u
                                ? null
                                : a().createElement(
                                      'div',
                                      { className: B },
                                      a().createElement('div', { className: v }),
                                      a().createElement('div', { className: w }, u),
                                  );
                        }
                        return null;
                    });
                var y = t(3618),
                    x = t(9053);
                const S = {
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
                var T = t(2372),
                    N = t(280),
                    L = t(3649),
                    O = t(771);
                const I = a().memo(({ description: e, cardState: u, kwargs: t, className: n }) => {
                    const r = Number(t.value) < O.I;
                    return a().createElement(
                        'div',
                        { className: E()(S.base, S[`base__${u}`], n) },
                        r &&
                            a().createElement(y.w, {
                                text: R.strings.dialogs.perksReset.priceCard.xpLoose(),
                                classMix: S.resetPerksLayout,
                                binding: {
                                    percentAmount: a().createElement(
                                        'div',
                                        { className: E()(S.resetPercentsText) },
                                        (0, L.dL)(((i = t.value), -(O.I - Number(i)))),
                                    ),
                                    xpAmount: a().createElement(
                                        'div',
                                        { className: E()(S.xpAmount) },
                                        a().createElement(T.A, { value: Number(t.xpLossAmount) }),
                                        a().createElement('div', { className: S.xpIcon }),
                                    ),
                                },
                            }),
                        a().createElement(N.z, {
                            text: e,
                            classMix: E()(S.resetPerksDescription, r && S.resetPerksDescription__withXpLoose),
                        }),
                    );
                    var i;
                });
                let M;
                !(function (e) {
                    (e.None = 'none'), (e.Increase = 'increase'), (e.Decrease = 'decrease');
                })(M || (M = {}));
                const P = (e, u) => (e && u && e !== u ? (e > u ? M.Decrease : M.Increase) : M.None),
                    H = a().memo(({ description: e, cardState: u, kwargs: t, className: n }) => {
                        const r = (0, b.D9)(t.value),
                            i = P(r, t.value),
                            s = (0, h.useSpring)({
                                from: { opacity: 0 },
                                to: [
                                    { opacity: 1, immediate: !0, delay: 450 },
                                    { opacity: 1, config: { duration: 250 } },
                                    { opacity: 0, config: { duration: 300 } },
                                ],
                            });
                        return a().createElement(
                            'div',
                            { className: E()(S.base, S[`base__${u}`], n) },
                            a().createElement(y.w, {
                                text: e,
                                justifyContent: x.v2.Center,
                                binding: {
                                    value: a().createElement(
                                        'div',
                                        {
                                            className: E()(
                                                S.efficiencyAfterRetrain,
                                                t.isHighlight && S.efficiencyAfterRetrain__highlighted,
                                                u === D.Selected && S.efficiencyAfterRetrain__selected,
                                            ),
                                        },
                                        a().createElement(
                                            'div',
                                            { className: S.efficiencyAfterRetrainValue },
                                            i !== M.None &&
                                                a().createElement(h.animated.div, {
                                                    style: s,
                                                    className: E()(
                                                        S.efficiencyAfterRetrainGlow,
                                                        S[`efficiencyAfterRetrainGlow__${i}`],
                                                    ),
                                                }),
                                            a().createElement(
                                                'div',
                                                { className: S.efficiencyAfterRetrainValuePercents },
                                                (0, L.dL)(Number(t.value)),
                                            ),
                                        ),
                                    ),
                                },
                            }),
                        );
                    }),
                    j = { [g.Reset.toString()]: I, [g.Retrain.toString()]: H },
                    W = (e) =>
                        j[e.cardType]
                            ? a().createElement(j[e.cardType], e)
                            : a().createElement(
                                  'div',
                                  { className: E()(S.base, e.className) },
                                  a().createElement(y.w, {
                                      text: e.description,
                                      justifyContent: x.v2.Center,
                                      binding: e.kwargs,
                                  }),
                              );
                var $ = t(7405),
                    G = t(2056),
                    U = t(5298);
                const V = 'Price_base_3c',
                    z = 'Price_base__withPrice_ef',
                    q = 'Price_base__withTooltip_a2',
                    Z = 'Price_resetCardPriceIcon_89',
                    Y = 'Price_recertificationPrice_b6';
                function X() {
                    return (
                        (X =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        X.apply(this, arguments)
                    );
                }
                const K = ({
                        cost: e,
                        tooltip: u,
                        index: t,
                        tooltipRootId: n,
                        className: r,
                        isRecertification: i = !1,
                    }) => {
                        if (i)
                            return a().createElement(
                                'div',
                                { className: Y },
                                a().createElement('div', null, 1),
                                a().createElement('div', { className: Z }),
                            );
                        if (e.value === e.discountValue && 0 === e.value && !e.isDiscount)
                            return a().createElement(
                                'div',
                                { className: E()(V, r) },
                                R.strings.dialogs.priceCard.price.free(),
                            );
                        const s = (0, U.l)(u.type, { index: t });
                        return a().createElement(
                            'div',
                            { className: E()(V, z, s.isEnabled && q, r) },
                            a().createElement(
                                G.u,
                                X({}, s, { targetId: n }),
                                a().createElement(
                                    'div',
                                    null,
                                    a().createElement($.F, X({}, e, { isInteractiveDiscount: !0 })),
                                ),
                            ),
                        );
                    },
                    J = {
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
                        price: 'PriceCard_price_13',
                        price__specialDiscount: 'PriceCard_price__specialDiscount_12',
                        bottomGlow: 'PriceCard_bottomGlow_a3',
                    };
                let Q;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(Q || (Q = {}));
                const ee = ({ header: e, body: u, contentId: t }, n, a) =>
                        t
                            ? { contentId: t, targetId: n, args: { index: a } }
                            : u || e
                              ? { header: e || void 0, body: u || void 0 }
                              : void 0,
                    ue = ({
                        onClick: e,
                        tooltipRootId: u,
                        priceTooltip: t,
                        cardTooltip: r,
                        index: i,
                        icon: s,
                        size: l = Q.Big,
                        title: o,
                        description: c,
                        cardType: _,
                        kwargs: d,
                        price: m,
                        cardState: A,
                        className: B,
                    }) => {
                        const v = A === D.Default,
                            w = (0, n.useMemo)(() => (d ? JSON.parse(d) : {}), [d]),
                            y = (0, b.D9)(w.value),
                            x = P(y, w.value),
                            S = _ === g.Reset && w.withSpecialDiscount,
                            T = _ === g.Retrain && x !== M.None,
                            N = A === D.Default && !S,
                            L = (0, h.useSpring)(() => {
                                const e = x === M.Increase ? -1 : 1;
                                return {
                                    from: { opacity: 1, y: 0 },
                                    to: [
                                        { opacity: 0, y: 30 * e },
                                        { y: -30 * e, immediate: !0 },
                                        { opacity: 1, y: 0 },
                                    ],
                                    config: { duration: 200, easing: f.qb },
                                };
                            }, [x])[0];
                        (0, n.useEffect)(() => {
                            x !== M.None &&
                                p.O.sound.play.sound(x === M.Increase ? C.gO.CREW_RETRAIN_UP : C.gO.CREW_RETRAIN_DOWN);
                        }, [x]);
                        const R = E()(J.base, J[`base__${l}`], J[`base__${A}`], N && J.base__hoverEnabled, B);
                        return a().createElement(
                            h.animated.div,
                            {
                                style: T ? L : void 0,
                                className: R,
                                onClick: () => {
                                    v && (p.O.sound.play.sound('play'), e(i));
                                },
                                onMouseEnter: () => v && p.O.sound.play.sound('highlight'),
                            },
                            A === D.Disabled && a().createElement('div', { className: J.disabledPattern }),
                            S && a().createElement('div', { className: J.discountPattern }),
                            a().createElement('div', { className: J.hoverRays }),
                            a().createElement('div', { className: J.title }, o),
                            a().createElement('div', { className: J.icon, style: { backgroundImage: `url(${s})` } }),
                            a().createElement(W, {
                                description: c,
                                cardType: _,
                                cardState: A,
                                kwargs: w,
                                className: E()(J.description, J[`description__${_}`]),
                            }),
                            a().createElement(
                                F.l,
                                { tooltipArgs: ee(r, u, i), className: J.tooltip },
                                a().createElement('div', { className: J.tooltipBox }),
                            ),
                            a().createElement(k, { cardType: _, kwargs: w }),
                            a().createElement(K, {
                                cost: m,
                                tooltip: t,
                                index: i,
                                tooltipRootId: u,
                                className: E()(J.price, S && J.price__specialDiscount),
                                isRecertification: null == w ? void 0 : w.isRecertificationCard,
                            }),
                            S && a().createElement('div', { className: J.bottomGlow }),
                        );
                    },
                    te = 'PriceListApp_base_7d',
                    ne = 'PriceListApp_card_6a';
                function ae() {
                    return (
                        (ae =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ae.apply(this, arguments)
                    );
                }
                const re = (0, A.Pi)(function ({ rootId: e, className: u }) {
                        const t = _(),
                            n = t.model,
                            r = t.controls,
                            i = (0, m.GS)().mediaSize;
                        return a().createElement(
                            'div',
                            { className: E()(te, u) },
                            (0, s.UI)(n.computes.cards(), (u, t) =>
                                a().createElement(
                                    ue,
                                    ae({}, u, {
                                        key: `${t}-${u.cardState}`,
                                        onClick: r.onCardClick,
                                        index: t,
                                        tooltipRootId: e,
                                        size: i > m.cJ.Small ? Q.Big : Q.Small,
                                        className: ne,
                                    }),
                                ),
                            ),
                        );
                    }),
                    ie = a().memo(function ({
                        rootId: e = R.views.lobby.crew.widgets.PriceList('resId'),
                        className: u,
                    }) {
                        const t = (0, n.useMemo)(() => ({ rootId: e }), [e]);
                        return a().createElement(c, { options: t }, a().createElement(re, { rootId: e, className: u }));
                    });
            },
            776: (e, u, t) => {
                'use strict';
                let n;
                t.d(u, { f: () => n }),
                    (function (e) {
                        (e.backport = 'backport'), (e.normal = 'normal'), (e.absent = 'absent');
                    })(n || (n = {}));
            },
            771: (e, u, t) => {
                'use strict';
                t.d(u, { GT: () => l, I: () => r, jw: () => i, sU: () => n, vA: () => s, y$: () => o, yb: () => a });
                const n = -1,
                    a = 1,
                    r = 100,
                    i = 'new_skill',
                    s = 9,
                    l = 6,
                    o = -1;
                let c;
                !(function (e) {
                    (e.BlackReal = 'blackReal'),
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
                        (e.Prom = 'prom');
                })(c || (c = {}));
            },
            8460: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
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
            5287: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = { base: 'FormatText_base_d0' };
            },
            6143: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
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
            9627: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
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
            7629: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
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
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [u, t, n] = deferred[l], r = !0, i = 0; i < u.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(l--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > n; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [u, t, n];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(u, { a: u }), u;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 3652),
        (() => {
            var e = { 3652: 0, 5897: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, i, s] = t,
                        l = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var o = s(__webpack_require__);
                    }
                    for (u && u(t); l < r.length; l++)
                        (a = r[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(o);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(2412));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
