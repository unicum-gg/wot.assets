(() => {
    var __webpack_modules__ = {
            3457: (e, t, n) => {
                'use strict';
                n.d(t, { L$: () => l.L, qE: () => l.q, u5: () => c });
                var a = n(6483),
                    r = n.n(a),
                    u = n(7727),
                    s = n(7363),
                    o = n.n(s),
                    i = n(6880),
                    l = n(2106);
                const c = ({
                    children: e,
                    size: t,
                    disabled: n,
                    mixClass: a,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: m,
                    onMouseUp: _,
                    onMouseLeave: E,
                    onClick: g,
                    isFocused: p = !1,
                    type: h = l.L.primary,
                    soundHover: b = 'highlight',
                    soundClick: f = 'play',
                }) => {
                    const v = (0, s.useRef)(null),
                        A = (0, s.useState)(p),
                        F = A[0],
                        C = A[1],
                        D = (0, s.useState)(!1),
                        B = D[0],
                        w = D[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                F && null !== v.current && !v.current.contains(e.target) && C(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [F]),
                        (0, s.useEffect)(() => {
                            C(p);
                        }, [p]),
                        o().createElement(
                            'div',
                            {
                                ref: v,
                                className: r()(
                                    i.Z.base,
                                    i.Z[`base__${h}`],
                                    n && i.Z.base__disabled,
                                    t && i.Z[`base__${t}`],
                                    F && i.Z.base__focus,
                                    B && i.Z.base__highlightActive,
                                    a,
                                ),
                                onMouseEnter: function (e) {
                                    n || (null !== b && (0, u.G)(b), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    n || (_ && _(e), w(!1));
                                },
                                onMouseDown: function (e) {
                                    n ||
                                        (null !== f && (0, u.G)(f),
                                        m && m(e),
                                        p && (n || (v.current && (v.current.focus(), C(!0)))),
                                        w(!0));
                                },
                                onMouseLeave: function (e) {
                                    n || (E && E(e), w(!1));
                                },
                                onClick: function (e) {
                                    n || (g && g(e));
                                },
                            },
                            h !== l.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: i.Z.back }),
                                    o().createElement('span', { className: i.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: r()(i.Z.state, i.Z.state__default) },
                                o().createElement('span', { className: i.Z.stateDisabled }),
                                o().createElement('span', { className: i.Z.stateHighlightHover }),
                                o().createElement('span', { className: i.Z.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: i.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
            },
            2106: (e, t, n) => {
                'use strict';
                let a, r;
                (n.d(t, { L: () => a, q: () => r }),
                    (function (e) {
                        ((e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(r || (r = {})));
            },
            9987: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => c });
                var a = n(6483),
                    r = n.n(a),
                    u = n(7363),
                    s = n.n(u),
                    o = n(9734);
                const i = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (e) => {
                    let t = e.value,
                        n = e.isEmpty,
                        a = e.className,
                        u = e.size,
                        c = void 0 === u ? 'normal' : u,
                        d = e.fadeInAnimation,
                        m = void 0 !== d && d,
                        _ = e.hide,
                        E = void 0 !== _ && _,
                        g = e.maximumNumber,
                        p = void 0 === g ? 99 : g,
                        h = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, i);
                    const b = n ? null : t,
                        f = 'string' == typeof b;
                    if ((b && !f && b < 0) || 0 === b) return null;
                    const v = b && !f && b > p,
                        A = r()(
                            o.Z.base,
                            o.Z[`base__${c}`],
                            m && o.Z.base__animated,
                            E && o.Z.base__hidden,
                            !b && o.Z.base__pattern,
                            n && o.Z.base__empty,
                            a,
                        );
                    return s().createElement(
                        'div',
                        l({ className: A }, h),
                        s().createElement('div', { className: o.Z.bg }),
                        s().createElement('div', { className: o.Z.pattern }),
                        s().createElement(
                            'div',
                            { className: r()(o.Z.value, f && o.Z.value__text) },
                            v ? p : b,
                            v && s().createElement('span', { className: o.Z.plus }, '+'),
                        ),
                    );
                };
            },
            1037: (e, t, n) => {
                'use strict';
                n.d(t, { IC: () => a });
                var a,
                    r = n(6483),
                    u = n.n(r),
                    s = n(6373),
                    o = n(3138),
                    i = n(2039),
                    l = n(5099),
                    c = n(7727),
                    d = n(9916),
                    m = n(7363),
                    _ = n.n(m),
                    E = n(4769),
                    g = n(8475);
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(a || (a = {}));
                const p = ['__left', '__right', '__top', '__bottom'];
                (0, m.forwardRef)(
                    (
                        {
                            children: e,
                            disableAutoSizeUpdate: t,
                            onOutsideClick: n,
                            className: a,
                            customStyles: r = {},
                        },
                        h,
                    ) => {
                        const b = (0, m.useRef)(null),
                            f = (0, m.useRef)(null),
                            v = (0, m.useRef)(null),
                            A = (0, m.useState)(window.decorator && window.decorator.directionType),
                            F = A[0],
                            C = A[1],
                            D = (0, m.useCallback)(() => {
                                (c.$.playClick(), o.O.view.sendEvent.close());
                            }, []),
                            B = (0, m.useCallback)(() => {
                                c.$.playHighlight();
                            }, []),
                            w = u()(E.Z.arrow, E.Z[`arrow${p[F]}`]);
                        (0, i.b)(
                            () => (
                                o.O.client.events.mouse.enableOutside(),
                                o.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (n ? n() : o.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const y = (0, m.useCallback)(
                                (e) => {
                                    let t = e.target;
                                    do {
                                        if (t === b.current || t === v.current) return;
                                        t = t.parentNode;
                                    } while (t);
                                    const a = window.decorator;
                                    if (void 0 !== window.decorator) {
                                        const e = o.O.client.getMouseGlobalPosition(),
                                            t = ![a.boundX, a.boundY, a.boundWidth, a.boundHeight].includes(void 0),
                                            n =
                                                e.x < a.boundX ||
                                                e.x > a.boundX + a.boundWidth ||
                                                e.y > a.boundY + a.boundHeight ||
                                                e.y < a.boundY;
                                        if (t && !n) return;
                                    }
                                    n ? n() : o.O.view.sendEvent.close('popover');
                                },
                                [b, v, n],
                            ),
                            k = (0, m.useCallback)(() => {
                                C(window.decorator.directionType);
                            }, []),
                            S = (0, g.w)(),
                            x = (0, m.useCallback)(() => {
                                const e = f.current;
                                if (e)
                                    return (
                                        o.O.view.freezeTextureBeforeResize(),
                                        S.run(() => {
                                            const t = e.scrollWidth,
                                                n = e.scrollHeight;
                                            (o.O.view.resize(t, n), k());
                                        })
                                    );
                            }, [S, k]);
                        return (
                            (0, m.useImperativeHandle)(
                                h,
                                () => ({ updateSize: x, updateDirection: k, elementRef: f }),
                                [x, k],
                            ),
                            (0, i.b)(() => {
                                o.O.view.setInputPaddingsRem(58);
                            }),
                            (0, m.useEffect)(() => {
                                document.addEventListener('mousedown', y, { capture: !0 });
                                const e = (0, l.B)((0, d.Eu)());
                                return (
                                    !t && e.promise.then(() => x()),
                                    () => {
                                        (e.cancel(), document.removeEventListener('mousedown', y));
                                    }
                                );
                            }, [x, y, t]),
                            _().createElement(
                                'div',
                                { className: u()(E.Z.base, a), ref: f },
                                _().createElement(
                                    'div',
                                    { className: E.Z.decorator },
                                    _().createElement(
                                        'div',
                                        { className: E.Z.content, ref: b },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            _().createElement(
                                                s.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                _().createElement('div', {
                                                    className: E.Z.closeBtn,
                                                    onClick: D,
                                                    onMouseEnter: B,
                                                    ref: v,
                                                }),
                                            ),
                                    ),
                                    _().createElement('div', { className: w, style: r.arrow }),
                                ),
                            )
                        );
                    },
                );
            },
            3616: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => l });
                var a = n(1037),
                    r = n(9916),
                    u = n(7363),
                    s = n.n(u);
                const o = [
                    'contentId',
                    'decoratorId',
                    'direction',
                    'targetId',
                    'args',
                    'onClick',
                    'children',
                    'isEnabled',
                ];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = (e) => {
                    let t = e.contentId,
                        n = e.decoratorId,
                        l = e.direction,
                        c = void 0 === l ? a.IC.Top : l,
                        d = e.targetId,
                        m = e.args,
                        _ = e.onClick,
                        E = e.children,
                        g = e.isEnabled,
                        p = void 0 === g || g,
                        h = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, o);
                    const b = (0, u.useRef)(null),
                        f = (0, u.useCallback)(() => {
                            if ((0, r.wU)()) return (0, r.SW)();
                            b.current && (0, r.P3)(t, c, b.current, n, d, m);
                        }, [t, c, m, n, d]);
                    return s().createElement(
                        'div',
                        i(
                            {
                                ref: b,
                                onMouseDown:
                                    ((v = E.props.onClick),
                                    (e) => {
                                        p && (f(), _ && _(e), v && v(e));
                                    }),
                            },
                            h,
                        ),
                        E,
                    );
                    var v;
                };
            },
            7078: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => i });
                var a = n(7363),
                    r = n.n(a),
                    u = n(2056);
                const s = ['children'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, s);
                    return r().createElement(
                        u.u,
                        o(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            n,
                        ),
                        t,
                    );
                };
            },
            3415: (e, t, n) => {
                'use strict';
                n.d(t, { l: () => l });
                var a = n(7363),
                    r = n.n(a),
                    u = n(7078),
                    s = n(6373),
                    o = n(2056);
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: t, className: n }) => {
                    if (!t) return e;
                    const a = r().createElement('div', { className: n }, e);
                    if (t.header || t.body) return r().createElement(s.i, t, a);
                    const l = t.contentId;
                    return l ? r().createElement(o.u, i({}, t, { contentId: l }), a) : r().createElement(u.t, t, a);
                };
            },
            6373: (e, t, n) => {
                'use strict';
                n.d(t, { i: () => l });
                var a = n(2056),
                    r = n(7363),
                    u = n.n(r);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            n = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            m = e.args,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, s);
                        const E = (0, r.useMemo)(() => {
                            const e = Object.assign({}, m, { body: n, header: l, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, n, l, c, m]);
                        return u().createElement(
                            a.u,
                            o(
                                {
                                    contentId:
                                        ((g = null == m ? void 0 : m.hasHtmlContent),
                                        g ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                _,
                            ),
                            t,
                        );
                        var g;
                    };
            },
            2056: (e, t, n) => {
                'use strict';
                n.d(t, { u: () => l });
                var a = n(7902),
                    r = n(9916),
                    u = n(7363);
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
                function o(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const n = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                n.number = t;
                                break;
                            case 'boolean':
                                n.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                n.string = t.toString();
                        }
                        return n;
                    });
                }
                const i = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            r = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            m = e.onClick,
                            _ = e.ignoreShowDelay,
                            E = void 0 !== _ && _,
                            g = e.ignoreMouseClick,
                            p = void 0 !== g && g,
                            h = e.decoratorId,
                            b = void 0 === h ? 0 : h,
                            f = e.isEnabled,
                            v = void 0 === f || f,
                            A = e.targetId,
                            F = void 0 === A ? 0 : A,
                            C = e.onShow,
                            D = e.onHide,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, s);
                        const w = (0, u.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, u.useMemo)(() => F || (0, a.F)().resId, [F]),
                            k = (0, u.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (i(n, b, { isMouseEvent: !0, on: !0, arguments: o(r) }, y),
                                    C && C(),
                                    (w.current.isVisible = !0));
                            }, [n, b, r, y, C]),
                            S = (0, u.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        i(n, b, { on: !1 }, y),
                                        w.current.isVisible && D && D(),
                                        (w.current.isVisible = !1));
                                }
                            }, [n, b, y, D]),
                            x = (0, u.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        ((0, u.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', x, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, u.useEffect)(() => {
                                !1 === v && S();
                            }, [v, S]),
                            (0, u.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        (window.removeEventListener('mouseleave', S), S());
                                    }
                                ),
                                [S],
                            ));
                        return v
                            ? (0, u.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((N = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(w.current.timeoutId),
                                                      (w.current.timeoutId = window.setTimeout(k, E ? 100 : 400)),
                                                      l && l(e),
                                                      N && N(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (S(), null == c || c(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === p && S(), null == m || m(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === p && S(), null == d || d(t), null == e || e(t));
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
            8246: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => o });
                var a = n(3138);
                function r(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return u(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function u(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function o({ initializer: e = !0, rootId: t = 0, getRoot: n = s, context: u = 'model' } = {}) {
                    const o = new Map();
                    function i(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? o.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, n) => {
                            n.forEach((t) => {
                                const n = o.get(t);
                                void 0 !== n && n(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const a = n(t),
                            r = u.split('.').reduce((e, t) => e[t], a);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, t) => {
                                  const n = e[t];
                                  return 'function' == typeof n ? n.bind(e) : n;
                              }, r);
                    };
                    return {
                        subscribe: (n, r) => {
                            const s = 'string' == typeof r ? `${u}.${r}` : u,
                                i = a.O.view.addModelObserver(s, t, !0);
                            return (o.set(i, n), e && n(l(r)), i);
                        },
                        readByPath: l,
                        createCallback: (e, t) => {
                            const n = l(t);
                            return (...t) => {
                                n(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = l(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, n = r(o.keys()); !(e = n()).done; ) {
                                i(e.value, t);
                            }
                        },
                        unsubscribe: i,
                    };
                }
            },
            3215: (e, t, n) => {
                'use strict';
                n.d(t, { q3: () => i });
                var a = n(4598),
                    r = n(9174),
                    u = n(7363),
                    s = n.n(u),
                    o = n(8246);
                const i = () => (e, t) => {
                    const n = (0, u.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: d }) {
                            const m = (0, u.useRef)([]),
                                _ = (n, u, s) => {
                                    var i;
                                    const l = o.U(u),
                                        c =
                                            'real' === n
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == s ? void 0 : s.getter) ? i : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === n ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        _ = (e) => m.current.push(e),
                                        E = e({
                                            mode: n,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                dict: (e) => {
                                                    const t = d(e),
                                                        u = r.LO.box(t, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => u.set(e)),
                                                                e,
                                                            ),
                                                        u
                                                    );
                                                },
                                                array: (e, t) => {
                                                    const u = null != t ? t : d(e),
                                                        s = r.LO.box(u, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const u = null != t ? t : d(e),
                                                        s = r.LO.box(u, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const a = d(t);
                                                    if (Array.isArray(e)) {
                                                        const u = e.reduce(
                                                            (e, t) => ((e[t] = r.LO.box(a[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, r.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            u[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            u
                                                        );
                                                    }
                                                    {
                                                        const u = e,
                                                            s = Object.entries(u),
                                                            o = s.reduce(
                                                                (e, [t, n]) => ((e[n] = r.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        s.forEach(([t, n]) => {
                                                                            o[n].set(e[t]);
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
                                        g = { mode: n, model: E, externalModel: c, cleanup: _ };
                                    return {
                                        model: E,
                                        controls: 'mocks' === n && s ? s.controls(g) : t(g),
                                        externalModel: c,
                                        mode: n,
                                    };
                                },
                                E = (0, u.useRef)(!1),
                                g = (0, u.useState)(i),
                                p = g[0],
                                h = g[1],
                                b = (0, u.useState)(() => _(i, l, d)),
                                f = b[0],
                                v = b[1];
                            return (
                                (0, u.useEffect)(() => {
                                    E.current ? v(_(p, l, d)) : (E.current = !0);
                                }, [d, p, l]),
                                (0, u.useEffect)(() => {
                                    h(i);
                                }, [i]),
                                (0, u.useEffect)(
                                    () => () => {
                                        (f.externalModel.dispose(), m.current.forEach((e) => e()));
                                    },
                                    [f],
                                ),
                                s().createElement(n.Provider, { value: f }, c)
                            );
                        },
                        () => (0, u.useContext)(n),
                    ];
                };
            },
            7044: (e, t, n) => {
                'use strict';
                n.d(t, { f8: () => l, s_: () => u, wB: () => c, yR: () => s });
                var a = n(3649),
                    r = (n(9916), n(8613));
                const u = 1e3,
                    s = 60,
                    o = 60 * s,
                    i = 24 * o;
                (Date.now(), r.Ew.getRegionalDateTime, r.Ew.getFormattedDateTime);
                function l(e = 0) {
                    let t = e;
                    const n = Math.trunc(t / i);
                    t -= n * i;
                    const a = Math.trunc(t / o);
                    t -= a * o;
                    const r = Math.trunc(t / s);
                    return ((t -= r * s), { days: n, hours: a, minutes: r, seconds: t });
                }
                const c = (e, t = !0) =>
                    e.days > 7 && t
                        ? (0, a.WU)(R.strings.common.duration.days(), { days: e.days })
                        : e.days >= 1
                          ? 0 === e.hours
                              ? (0, a.WU)(R.strings.common.duration.days(), { days: e.days })
                              : `${(0, a.WU)(R.strings.common.duration.days(), { days: e.days })} ${(0, a.WU)(R.strings.common.duration.hours(), { hours: e.hours })}`
                          : e.hours >= 1
                            ? 0 === e.minutes
                                ? (0, a.WU)(R.strings.common.duration.hours(), { hours: e.hours })
                                : `${(0, a.WU)(R.strings.common.duration.hours(), { hours: e.hours })} ${(0, a.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                            : (0, a.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 });
            },
            527: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, { mouse: () => c, off: () => i, on: () => o, onResize: () => u, onScaleUpdated: () => s }));
                var a = n(2472),
                    r = n(1176);
                const u = (0, a.E)('clientResized'),
                    s = (0, a.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    i = (e, t) => engine.off(e, t),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : (0, r.R)(!1);
                    }
                    const u = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const u = `mouse${t}`,
                                        s = l[t]((e) => n([e, 'outside']));
                                    function o(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(u, o),
                                        a(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(u, o),
                                                (e.listeners -= 1),
                                                a(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, u, {
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
            5959: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => s,
                        getSize: () => u,
                        graphicsQuality: () => o,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var a = n(527),
                    r = n(2493);
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => a });
            },
            2493: (e, t, n) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => r, G: () => a });
            },
            2472: (e, t, n) => {
                'use strict';
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => a });
            },
            3138: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => s });
                var a = n(5959),
                    r = n(7698),
                    u = n(514);
                const s = { view: n(7641), client: a, sound: u.ZP, intl: r.N };
            },
            7698: (e, t, n) => {
                'use strict';
                n.d(t, { N: () => a });
                const a = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, t, n) => {
                'use strict';
                n.d(t, { ZP: () => o, hY: () => s });
                var a = n(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    u = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, a.playSound)(r[t])), e), {}),
                    s = Object.assign({}, u, { sound: a.playSound }),
                    o = { play: s, setRTPC: a.setRTPC };
            },
            3722: (e, t, n) => {
                'use strict';
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function r(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                (n.r(t), n.d(t, { getBgUrl: () => r, getTextureUrl: () => a }));
            },
            6112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => r });
                var a = n(2472);
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
            7641: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => i,
                        arabic2roman: () => y,
                        children: () => r,
                        displayStatus: () => u.W,
                        displayStatusIs: () => S,
                        enableFullScreenModeSupported: () => T,
                        events: () => s.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => B,
                        getExternalPaddingsRem: () => k,
                        getFontNames: () => w,
                        getScale: () => h,
                        getSize: () => _,
                        getViewGlobalPosition: () => g,
                        initExternalPaddings: () => L,
                        isEventHandled: () => C,
                        isFocused: () => A,
                        pxToRem: () => b,
                        remToPx: () => f,
                        resize: () => E,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => v,
                        setEventHandled: () => F,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => N,
                    }));
                var a = n(9690),
                    r = n(3722),
                    u = n(6112),
                    s = n(6538),
                    o = n(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function d(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: f(t.x), y: f(t.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function h() {
                    return viewEnv.getScale();
                }
                function b(e) {
                    return viewEnv.pxToRem(e);
                }
                function f(e) {
                    return viewEnv.remToPx(e);
                }
                function v(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function A() {
                    return viewEnv.isFocused();
                }
                function F() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function D() {
                    viewEnv.forceTriggerMouseMove();
                }
                function B() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    y = a.cg;
                function k() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const S = Object.keys(u.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === u.W[t]), e),
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
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function T() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function L(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            n = t.top,
                            a = t.right,
                            r = t.bottom,
                            u = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${a}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${u}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => l });
                const a = ['args'];
                const r = 2,
                    u = 16,
                    s = 32,
                    o = 64,
                    i = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const u = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        u = Object.keys(e);
                                    for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, a);
                            return void 0 !== u
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
                                          arguments:
                                              ((r = u),
                                              Object.entries(r).map(([e, t]) => {
                                                  const n = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: n, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: n, name: e, bool: t };
                                                      default:
                                                          return { __Type: n, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            i('popover' === e ? r : s);
                        },
                        minimize() {
                            i(o);
                        },
                        move(e) {
                            i(u, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, n) => {
                'use strict';
                n.d(t, { jv: () => a });
                function a() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => a });
                const a = (e = 1) => {
                    const t = new Error().stack;
                    let n,
                        a = R.invalid('resId'),
                        r = '';
                    var u;
                    t &&
                        ((r = (null == (u = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : u[0]) || ''),
                        (n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== n &&
                            window.subViews[n] &&
                            (a = window.subViews[n].id));
                    return { callerUrl: r, caller: n, stack: t, resId: a };
                };
            },
            2344: (e, t, n) => {
                'use strict';
                n.d(t, { D9: () => u, au: () => s });
                var a = n(3469),
                    r = (n(2133), n(2790));
                (n(579), n(5360), n(9056));
                const u = r.Z,
                    s = a.Z;
            },
            6536: (e, t, n) => {
                'use strict';
                n(7363);
            },
            3469: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => s });
                var a = n(7044),
                    r = n(7363);
                const u = () => {},
                    s = (e = 0, t, n = 0, s = u) => {
                        const o = (0, r.useState)(e),
                            i = o[0],
                            l = o[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (e > 0) {
                                    l(e);
                                    const r = Date.now(),
                                        u = t || (e > 2 * a.yR ? a.yR : 1),
                                        o = setInterval(() => {
                                            const t = e - Math.floor((Date.now() - r) / a.s_);
                                            null !== n && t <= n ? (l(n), s && s(), clearInterval(o)) : l(t);
                                        }, u * a.s_);
                                    return () => {
                                        clearInterval(o);
                                    };
                                }
                            }, [e, t, n, s]),
                            i
                        );
                    };
            },
            5332: (e, t, n) => {
                'use strict';
                n.d(t, { N: () => u });
                var a = n(4483),
                    r = n(7363);
                function u(e, t, n, u = !1) {
                    const s = (0, r.useMemo)(() => (0, a.Z)(n, u, e), t);
                    return ((0, r.useEffect)(() => s.cancel, [s]), s);
                }
            },
            2133: (e, t, n) => {
                'use strict';
                n(7363);
            },
            5360: (e, t, n) => {
                'use strict';
                n(6536);
                var a = n(9916);
                n(7363);
                a.Sw.instance;
                let r;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(r || (r = {}));
            },
            9056: (e, t, n) => {
                'use strict';
                var a = n(9916);
                n(7363);
                a.Sw.instance;
            },
            2039: (e, t, n) => {
                'use strict';
                n.d(t, { b: () => r, k: () => u });
                var a = n(7363);
                const r = (e) => {
                        (0, a.useEffect)(e, []);
                    },
                    u = (e) => {
                        (0, a.useEffect)(() => e, []);
                    };
            },
            2790: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => r });
                var a = n(7363);
                const r = (e, t) => {
                    const n = (0, a.useRef)();
                    return (
                        (0, a.useEffect)(() => {
                            (t && !t(e)) || (n.current = e);
                        }, [t, e]),
                        n.current
                    );
                };
            },
            3112: (e, t, n) => {
                'use strict';
                n.d(t, { V: () => u });
                var a = n(7363),
                    r = n(3138);
                const u = () => {
                    const e = (0, a.useState)(r.O.view.getScale()),
                        t = e[0],
                        n = e[1];
                    return (
                        (0, a.useEffect)(() => {
                            const e = () => {
                                n(r.O.view.getScale());
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
            },
            579: (e, t, n) => {
                'use strict';
                (n(3138), n(7363));
            },
            8475: (e, t, n) => {
                'use strict';
                n.d(t, { w: () => u });
                var a = n(7363),
                    r = n(2039);
                function u() {
                    const e = (0, a.useRef)(0);
                    return (
                        (0, r.k)(() => {
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
            },
            5521: (e, t, n) => {
                'use strict';
                let a, r;
                (n.d(t, { n: () => a }),
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
            9480: (e, t, n) => {
                'use strict';
                function a(e, t) {
                    var n;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
                }
                n.d(t, { U2: () => a, UI: () => u, dF: () => o, lN: () => s });
                function r(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function u(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, a) => t(null == e ? void 0 : e.value, n, a));
                }
                function s(e) {
                    if (0 !== e.length) return a(e, e.length - 1);
                }
                function o(e, t) {
                    for (let n = e.length - 1; n >= 0; n--) {
                        const a = r(e[n]);
                        if (t(a, n, e)) return a;
                    }
                }
            },
            5099: (e, t, n) => {
                'use strict';
                n.d(t, { B: () => a });
                const a = (e) => {
                    let t = !1;
                    return {
                        promise: new Promise((n, a) => {
                            e.then((e) => !t && n(e)).catch((e) => !t && a(e));
                        }),
                        cancel() {
                            t = !0;
                        },
                    };
                };
            },
            9690: (e, t, n) => {
                'use strict';
                n.d(t, { HG: () => o, cg: () => u });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function u(e) {
                    let t = '';
                    for (let n = r.length - 1; n >= 0; n--) for (; e >= r[n]; ) ((t += a[n]), (e -= r[n]));
                    return t;
                }
                const s = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    o = (e) => (s ? `${e}` : u(e));
            },
            7727: (e, t, n) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                n.d(t, { $: () => r, G: () => a });
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
            3649: (e, t, n) => {
                'use strict';
                n.d(t, { BN: () => u, Eg: () => i, WU: () => r, dL: () => l, e: () => s, z4: () => o });
                n(1281);
                let a;
                function r(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function u(e) {
                    return e.replace(/-/g, '_');
                }
                function s(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(a || (a = {}));
                const o = (e) => e.replace(/&nbsp;/g, ' '),
                    i = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    l =
                        ((() => {
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
                        })(),
                        (e) => r(R.strings.common.percentValue(), { value: e }));
            },
            4483: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => r });
                var a = n(5139);
                function r(e, t, n) {
                    return void 0 === n ? (0, a.Z)(e, t, !1) : (0, a.Z)(e, n, !1 !== t);
                }
            },
            5139: (e, t, n) => {
                'use strict';
                function a(e, t, n, a) {
                    let r,
                        u = !1,
                        s = 0;
                    function o() {
                        r && clearTimeout(r);
                    }
                    function i(...i) {
                        const l = this,
                            c = Date.now() - s;
                        function d() {
                            ((s = Date.now()), n.apply(l, i));
                        }
                        u ||
                            (a && !r && d(),
                            o(),
                            void 0 === a && c > e
                                ? d()
                                : !0 !== t &&
                                  (r = setTimeout(
                                      a
                                          ? function () {
                                                r = void 0;
                                            }
                                          : d,
                                      void 0 === a ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof t && ((a = n), (n = t), (t = void 0)),
                        (i.cancel = function () {
                            (o(), (u = !0));
                        }),
                        i
                    );
                }
                n.d(t, { Z: () => a });
            },
            1358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => u });
                var a = n(3138);
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
                    addCallback(e, t, n = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const u = a.O.view.addModelObserver(e, n, r);
                        return (
                            u > 0
                                ? ((this._callbacks[u] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(u) : (this._views[n] = [u])))
                                : console.error("Can't add callback for model:", e),
                            u
                        );
                    }
                    removeCallback(e, t = 0) {
                        let n = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((n = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            n || console.error("Can't remove callback by id:", e),
                            n
                        );
                    }
                    _emmitDataChanged(e, t, n) {
                        n.forEach((n) => {
                            const a = this._callbacks[n];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const u = r;
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
            9916: (e, t, n) => {
                'use strict';
                n.d(t, {
                    Sw: () => u.Z,
                    B3: () => i,
                    Z5: () => s.Z5,
                    B0: () => o,
                    c9: () => f,
                    wU: () => C,
                    ry: () => h,
                    Eu: () => b,
                    SW: () => A,
                    P3: () => F,
                });
                class a {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    n();
                                });
                            }));
                    }
                    static get instance() {
                        return (a.__instance || (a.__instance = new a()), a.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const n = e,
                            a = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== a)),
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
                var u = n(1358);
                var s = n(8613);
                let o;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(o || (o = {}));
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(5521),
                    _ = n(3138);
                const E = ['args'];
                function g(e, t, n, a, r, u, s) {
                    try {
                        var o = e[u](s),
                            i = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(a, r);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    h = (function () {
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
                                        n = arguments;
                                    return new Promise(function (a, r) {
                                        var u = e.apply(t, n);
                                        function s(e) {
                                            g(u, a, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(u, a, r, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    b = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    f = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                u = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        u = Object.keys(e);
                                    for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, E);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, u, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, t]) => {
                                                  const n = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          n.number = t;
                                                          break;
                                                      case 'boolean':
                                                          n.bool = t;
                                                          break;
                                                      default:
                                                          n.string = t.toString();
                                                  }
                                                  return n;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, u));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    v = () => f(o.CLOSE),
                    A = () => f(o.POP_OVER, { on: !1 }),
                    F = (e, t, n, a, r = R.invalid('resId'), u) => {
                        const s = _.O.view.getViewGlobalPosition(),
                            i = n.getBoundingClientRect(),
                            l = i.x,
                            c = i.y,
                            d = i.width,
                            m = i.height,
                            E = {
                                x: _.O.view.pxToRem(l) + s.x,
                                y: _.O.view.pxToRem(c) + s.y,
                                width: _.O.view.pxToRem(d),
                                height: _.O.view.pxToRem(m),
                            };
                        f(o.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: a || R.invalid('resId'),
                            targetID: r,
                            direction: t,
                            bbox: p(E),
                            on: !0,
                            args: u,
                        });
                    },
                    C = () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                    D = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var B = n(7572);
                const w = r.instance,
                    y = {
                        DataTracker: u.Z,
                        ViewModel: B.Z,
                        ViewEventType: o,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => f(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: A,
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            f(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: F,
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
                        handleViewEvent: f,
                        onBindingsReady: h,
                        onLayoutReady: b,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: C,
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const r = Object.prototype.toString.call(t[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[a];
                                        n[a] = [];
                                        for (let t = 0; t < r.length; t++) n[a].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[a] = e(t[a]))
                                            : (n[a] = t[a]);
                                }
                            return n;
                        },
                        ClickOutsideManager: w,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = y;
            },
            8613: (e, t, n) => {
                'use strict';
                n.d(t, { Ew: () => u, Z5: () => a, cy: () => r });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    },
                    u = {
                        getRegionalDateTime: (e, t, n = !0) => regionalDateTime.getRegionalDateTime(e, t, n),
                        getFormattedDateTime: (e, t, n = !0) => regionalDateTime.getFormattedDateTime(e, t, n),
                    };
            },
            3183: (e, t, n) => {
                'use strict';
                var a = {};
                (n.r(a),
                    n.d(a, {
                        Area: () => fa,
                        Bar: () => pa,
                        DefaultScroll: () => ba,
                        Direction: () => ea,
                        defaultSettings: () => ta,
                        useHorizontalScrollApi: () => aa,
                    }));
                var r = {};
                (n.r(r), n.d(r, { Area: () => Ma, Bar: () => Ia, Default: () => Oa, useVerticalScrollApi: () => va }));
                var u = n(7363),
                    s = n.n(u);
                const o = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
                var i = n(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function d(e = i.O.client.getSize('rem')) {
                    const t = e.width,
                        n = e.height;
                    return Object.assign(
                        { width: t, height: n },
                        (function (e, t, n) {
                            const a = (function (e, t) {
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
                                })(e, n),
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
                                })(t, n),
                                u = Math.min(a, r);
                            return {
                                extraLarge: u === n.extraLarge.weight,
                                large: u === n.large.weight,
                                medium: u === n.medium.weight,
                                small: u === n.small.weight,
                                extraSmall: u === n.extraSmall.weight,
                                extraLargeWidth: a === n.extraLarge.weight,
                                largeWidth: a === n.large.weight,
                                mediumWidth: a === n.medium.weight,
                                smallWidth: a === n.small.weight,
                                extraSmallWidth: a === n.extraSmall.weight,
                                extraLargeHeight: r === n.extraLarge.weight,
                                largeHeight: r === n.large.weight,
                                mediumHeight: r === n.medium.weight,
                                smallHeight: r === n.small.weight,
                                extraSmallHeight: r === n.extraSmall.weight,
                            };
                        })(t, n, l),
                    );
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
                const m = d(),
                    _ = (0, u.createContext)(m),
                    E = ['children'];
                (0, u.memo)((e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, E);
                    const a = (0, u.useContext)(_),
                        r = a.extraLarge,
                        s = a.large,
                        i = a.medium,
                        l = a.small,
                        c = a.extraSmall,
                        d = a.extraLargeWidth,
                        m = a.largeWidth,
                        g = a.mediumWidth,
                        p = a.smallWidth,
                        h = a.extraSmallWidth,
                        b = a.extraLargeHeight,
                        f = a.largeHeight,
                        v = a.mediumHeight,
                        A = a.smallHeight,
                        F = a.extraSmallHeight,
                        C = { extraLarge: b, large: f, medium: v, small: A, extraSmall: F };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && r) return t;
                        if (n.large && s) return t;
                        if (n.medium && i) return t;
                        if (n.small && l) return t;
                        if (n.extraSmall && c) return t;
                    } else {
                        if (n.extraLargeWidth && d) return o(t, n, C);
                        if (n.largeWidth && m) return o(t, n, C);
                        if (n.mediumWidth && g) return o(t, n, C);
                        if (n.smallWidth && p) return o(t, n, C);
                        if (n.extraSmallWidth && h) return o(t, n, C);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && b) return t;
                            if (n.largeHeight && f) return t;
                            if (n.mediumHeight && v) return t;
                            if (n.smallHeight && A) return t;
                            if (n.extraSmallHeight && F) return t;
                        }
                    }
                    return null;
                });
                const g = ({ children: e }) => {
                    const t = (0, u.useState)(d),
                        n = t[0],
                        a = t[1],
                        r = (0, u.useState)(!1),
                        o = r[0],
                        l = r[1];
                    return (
                        (0, u.useLayoutEffect)(() => {
                            function e() {
                                a((e) => {
                                    const t = i.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : d(t);
                                });
                            }
                            return (
                                e(),
                                l(!0),
                                i.O.client.events.on('clientResized', e),
                                i.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (i.O.client.events.off('clientResized', e),
                                        i.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        s().createElement(_.Provider, { value: n }, o && e)
                    );
                };
                var p = n(6483),
                    h = n.n(p),
                    b = n(926),
                    f = n.n(b);
                let v, A, F;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(v || (v = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                    })(A || (A = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(F || (F = {})));
                const C = () => {
                        const e = (0, u.useContext)(_),
                            t = e.width,
                            n = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return v.ExtraLarge;
                                    case e.large:
                                        return v.Large;
                                    case e.medium:
                                        return v.Medium;
                                    case e.small:
                                        return v.Small;
                                    case e.extraSmall:
                                        return v.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), v.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return A.ExtraLarge;
                                    case e.largeWidth:
                                        return A.Large;
                                    case e.mediumWidth:
                                        return A.Medium;
                                    case e.smallWidth:
                                        return A.Small;
                                    case e.extraSmallWidth:
                                        return A.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), A.ExtraSmall);
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return F.ExtraLarge;
                                    case e.largeHeight:
                                        return F.Large;
                                    case e.mediumHeight:
                                        return F.Medium;
                                    case e.smallHeight:
                                        return F.Small;
                                    case e.extraSmallHeight:
                                        return F.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), F.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: s, remScreenWidth: t, remScreenHeight: n };
                    },
                    D = ['children', 'className'];
                function B() {
                    return (
                        (B =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        B.apply(this, arguments)
                    );
                }
                const w = {
                        [A.ExtraSmall]: '',
                        [A.Small]: f().SMALL_WIDTH,
                        [A.Medium]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH}`,
                        [A.Large]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH}`,
                        [A.ExtraLarge]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH} ${f().EXTRA_LARGE_WIDTH}`,
                    },
                    y = {
                        [F.ExtraSmall]: '',
                        [F.Small]: f().SMALL_HEIGHT,
                        [F.Medium]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT}`,
                        [F.Large]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT}`,
                        [F.ExtraLarge]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT} ${f().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [v.ExtraSmall]: '',
                        [v.Small]: f().SMALL,
                        [v.Medium]: `${f().SMALL} ${f().MEDIUM}`,
                        [v.Large]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE}`,
                        [v.ExtraLarge]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE} ${f().EXTRA_LARGE}`,
                    },
                    S = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, D);
                        const r = C(),
                            u = r.mediaWidth,
                            o = r.mediaHeight,
                            i = r.mediaSize;
                        return s().createElement('div', B({ className: h()(n, w[u], y[o], k[i]) }, a), t);
                    },
                    x = ['children'];
                const N = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, x);
                    return s().createElement(g, null, s().createElement(S, n, t));
                };
                var T = n(1533),
                    L = n.n(T),
                    I = n(1037),
                    O = n(5521),
                    M = n(9916);
                const P = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function W(e = O.n.NONE, t = P, n = !1, a = !1) {
                    (0, u.useEffect)(() => {
                        if (e !== O.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!a && i.O.view.isEventHandled()) return;
                                (i.O.view.setEventHandled(), t(r), n && r.stopPropagation());
                            }
                        }
                    }, [t, e, n, a]);
                }
                var H = n(3403),
                    $ = n(3880),
                    j = n(5801),
                    z = n(3215),
                    G = n(4598),
                    U = n(9480),
                    V = n(3946);
                const Z = (e) => ({ tankmanID: e }),
                    q = (e) => ({ recruitID: e }),
                    Y = (e, t) => ({ index: e, recruitID: t }),
                    K = (0, z.q3)()(
                        ({ observableModel: e }) => {
                            const t = e.primitives([
                                    'isBerthsOnSale',
                                    'hasFilters',
                                    'itemsAmount',
                                    'itemsOffset',
                                    'isBannerVisible',
                                ]),
                                n = e.array('tankmanList'),
                                a = (0, V.Om)(
                                    (e) => {
                                        const a = e - t.itemsOffset.get(),
                                            r = n.get();
                                        if (a >= 0 && a < r.length) return U.U2(r, a);
                                    },
                                    { equals: G.jv },
                                );
                            return Object.assign({ tankmanList: n, berthsAmount: e.object('berthsAmount') }, t, {
                                computes: { getItem: a },
                            });
                        },
                        ({ externalModel: e }) => ({
                            buyBerth: e.createCallbackNoArgs('onBuyBerth'),
                            hoverNewTankman: e.createCallback(Y, 'onNewTankmanHovered'),
                            selectTankman: e.createCallback(Z, 'onTankmanSelected'),
                            recruitTankman: e.createCallback(q, 'onTankmanRecruit'),
                            dismissTankman: e.createCallback(Z, 'onTankmanDismiss'),
                            playRecruitVoiceover: e.createCallback(q, 'onPlayTankmanVoiceover'),
                            restoreTankman: e.createCallback(Z, 'onTankmanRestore'),
                            showHangar: e.createCallbackNoArgs('showHangar'),
                            resetFilters: e.createCallbackNoArgs('onResetFilters'),
                            loadCards: e.createCallback((e, t) => ({ limit: e, offset: t }), 'onLoadCards'),
                        }),
                    ),
                    X = K[0],
                    Q = K[1];
                var J = n(2106),
                    ee = n(3457),
                    te = n(6373),
                    ne = n(8018);
                const ae = 'WarningText_base_13',
                    re = 'WarningText_icon_5d',
                    ue = 'WarningText_label_c6',
                    se = s().memo(function ({ label: e }) {
                        return s().createElement(
                            'div',
                            { className: ae },
                            s().createElement('div', { className: re }),
                            s().createElement('div', { className: ue }, e),
                        );
                    }),
                    oe = 'ListEmptyState_base_ae',
                    ie = 'ListEmptyState_content_1e',
                    le = 'ListEmptyState_shadow_ae',
                    ce = 'ListEmptyState_buttonWrapper_78',
                    de = 'ListEmptyState_button_f1',
                    me = s().memo(function ({
                        warningText: e,
                        buttonType: t = ee.L$.secondary,
                        tooltipArgs: n = ne.Xd,
                        isBtnDisabled: a = !1,
                        className: r,
                        onClick: u,
                        children: o,
                    }) {
                        return s().createElement(
                            'div',
                            { className: h()(oe, r) },
                            s().createElement(
                                'div',
                                { className: ie },
                                s().createElement('div', { className: le }),
                                s().createElement(se, { label: e }),
                                o &&
                                    s().createElement(
                                        'div',
                                        { className: ce },
                                        s().createElement(
                                            te.i,
                                            n,
                                            s().createElement(
                                                'div',
                                                null,
                                                s().createElement(
                                                    ee.u5,
                                                    {
                                                        size: ee.qE.small,
                                                        type: t,
                                                        disabled: a,
                                                        onClick: u,
                                                        mixClass: de,
                                                    },
                                                    o,
                                                ),
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    });
                var _e = n(9987),
                    Ee = n(7078);
                let ge, pe, he, be, fe;
                (!(function (e) {
                    ((e.Any = 'any'),
                        (e.Commander = 'commander'),
                        (e.Radioman = 'radioman'),
                        (e.Driver = 'driver'),
                        (e.Gunner = 'gunner'),
                        (e.Loader = 'loader'));
                })(ge || (ge = {})),
                    (function (e) {
                        ((e.InBarracks = 'in_barracks'), (e.InTank = 'in_tank'), (e.Dismissed = 'dismissed'));
                    })(pe || (pe = {})),
                    (function (e) {
                        ((e.Tankman = 'tankman'), (e.Recruit = 'recruit'), (e.Dismissed = 'dismissed'));
                    })(he || (he = {})),
                    (function (e) {
                        ((e.Default = 'default'), (e.Selected = 'selected'), (e.Disabled = 'disabled'));
                    })(be || (be = {})),
                    (function (e) {
                        ((e.IsLockCrew = 'isLockCrew'), (e.TankmanHasRole = 'tankmanHasRole'));
                    })(fe || (fe = {})));
                var ve = n(9690),
                    Ae = n(3649);
                const Fe = (e, t) => e.split(',').includes(t),
                    Ce = {
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
                let De, Be;
                (!(function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big'));
                })(De || (De = {})),
                    (function (e) {
                        ((e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange'));
                    })(Be || (Be = {})));
                const we = ({
                    isElite: e,
                    vehicleName: t,
                    vehicleShortName: n,
                    vehicleType: a,
                    vehicleLvl: r,
                    tags: u = '',
                    size: o = De.extraSmall,
                    type: i = Be.colored,
                    className: l,
                    classNames: c,
                    isShortName: d = !1,
                }) => {
                    const m = `${(0, Ae.BN)(a)}${e ? '_elite' : ''}`,
                        _ = R.images.gui.maps.icons.vehicleTypes.big.$dyn(m);
                    return s().createElement(
                        'div',
                        {
                            className: h()(
                                Ce.base,
                                Ce[`base__size${(0, Ae.e)(o)}`],
                                Ce[`base__type${(0, Ae.e)(i)}`],
                                l,
                            ),
                        },
                        s().createElement(
                            'div',
                            { className: h()(Ce.level, null == c ? void 0 : c.level) },
                            (0, ve.HG)(r),
                        ),
                        s().createElement('div', {
                            className: h()(
                                Ce.type,
                                e && Ce[`type__elite${(0, Ae.e)(o)}`],
                                Ce[`type__${o}`],
                                null == c ? void 0 : c.typeIcon,
                            ),
                            style: a ? { backgroundImage: `url(${_})` } : void 0,
                        }),
                        Fe(u, 'premiumIGR') && s().createElement('div', { className: Ce.premiumIGR }),
                        s().createElement('div', { className: h()(Ce.name, null == c ? void 0 : c.name) }, d ? n : t),
                    );
                };
                var ye = n(771);
                const ke = {
                    base: 'EfficiencyIndicator_base_34',
                    base__big: 'EfficiencyIndicator_base__big_a1',
                    base__large: 'EfficiencyIndicator_base__large_dc',
                    base__untrained: 'EfficiencyIndicator_base__untrained_cd',
                    percent: 'EfficiencyIndicator_percent_6b',
                    percent__full: 'EfficiencyIndicator_percent__full_30',
                    icon: 'EfficiencyIndicator_icon_da',
                };
                let Se;
                !(function (e) {
                    ((e.Normal = 'normal'), (e.Big = 'big'), (e.Large = 'large'));
                })(Se || (Se = {}));
                const xe = (0, u.memo)(
                    ({
                        efficiencyValue: e,
                        tankmanID: t = ye.y$,
                        className: n,
                        targetId: a = R.views.lobby.crew.widgets.CrewWidget('resId'),
                        size: r = Se.Normal,
                    }) => {
                        const u = e === ye.sU,
                            o = u
                                ? { tooltipId: 'crewSkillUntrained' }
                                : { tooltipId: 'skillsEfficiency', skillEfficiency: e, tankmanID: t };
                        return s().createElement(
                            Ee.t,
                            { targetId: a, args: o, isEnabled: t !== ye.y$ },
                            s().createElement(
                                'div',
                                { className: h()(ke.base, ke[`base__${r}`], u && ke.base__untrained, n) },
                                u
                                    ? s().createElement('div', { className: ke.icon })
                                    : s().createElement(
                                          'div',
                                          { className: h()(ke.percent, e === ye.yb && ke.percent__full) },
                                          (0, Ae.dL)(M.Z5.getNumberFormat(100 * e, M.B3.INTEGRAL)),
                                      ),
                            ),
                        );
                    },
                );
                var Ne = n(7030);
                const Te = s().memo(function ({ blinkStyle: e, isEnabled: t, children: n }) {
                    return s().createElement(Ne.animated.div, { style: t && e ? e : void 0 }, n);
                });
                var Le = n(2344);
                const Ie = (e, t) => {
                        const n = [];
                        for (let a = 0; a < e; a++) n.push(t(a));
                        return n;
                    },
                    Re = 'AcceleratedTrainingIcon_base_4f',
                    Oe = 'AcceleratedTrainingIcon_icon_45',
                    Me = (0, u.memo)(({ classMix: e, targetId: t }) =>
                        s().createElement(
                            te.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                                body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                                targetId: t,
                            },
                            s().createElement(
                                'div',
                                { className: h()(Re, e) },
                                s().createElement('div', { className: Oe }),
                            ),
                        ),
                    );
                let Pe, We, He, $e, je, ze, Ge;
                (!(function (e) {
                    ((e.None = 'none'),
                        (e.Default = 'default'),
                        (e.Overlap = 'overlap'),
                        (e.ExtraOverlap = 'extraOverlap'));
                })(Pe || (Pe = {})),
                    (function (e) {
                        ((e.None = 'none'),
                            (e.SlideOutAndBlink = 'slideOutAndBlink'),
                            (e.SlideOut = 'slideOut'),
                            (e.FadeIn = 'fadeIn'),
                            (e.Blink = 'blink'),
                            (e.ScaleUp = 'ScaleUp'));
                    })(We || (We = {})),
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
                    })(He || (He = {})),
                    (function (e) {
                        ((e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red'));
                    })($e || ($e = {})),
                    (function (e) {
                        ((e.c24x24 = 'c_24x24'), (e.c44x44 = 'c_44x44'));
                    })(je || (je = {})),
                    (function (e) {
                        ((e.Major = 'major'), (e.Bonus = 'bonus'));
                    })(ze || (ze = {})),
                    (function (e) {
                        ((e.Learned = 'learned'), (e.Learning = 'learning'));
                    })(Ge || (Ge = {})));
                const Ue = (e) => (e.level < ye.I ? Ge.Learning : Ge.Learned),
                    Ve = (e) => U.dF(e, (e) => e.level === ye.I),
                    Ze = ({
                        name: e,
                        roleName: t,
                        level: n,
                        customName: a,
                        skillType: r,
                        skillIndex: u,
                        tooltipData: s,
                    }) => {
                        const o = { targetId: s.targetId, isEnabled: s.isEnabled };
                        return e === ye.jw
                            ? r === ze.Major
                                ? Object.assign(
                                      {
                                          contentId: R.views.lobby.crew.tooltips.EmptySkillTooltip('resId'),
                                          args: Object.assign({ tankmanID: s.tankmanID, skillIndex: u }, s.args),
                                      },
                                      o,
                                  )
                                : Object.assign(
                                      {
                                          header: R.strings.crew.matrix.skillTooltip.bonus.available.header(),
                                          body: R.strings.crew.matrix.skillTooltip.bonus.available.text(),
                                      },
                                      o,
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
                                              tankmanID: s.tankmanID,
                                              skillName: e,
                                              roleName: t,
                                              isBonus: r === ze.Bonus,
                                              level: n,
                                              customName: a,
                                              skillIndex: u,
                                          },
                                          s.args,
                                      ),
                                  },
                                  o,
                              );
                    },
                    qe = (e, t) => (e === je.c44x44 ? Se.Large : t ? Se.Big : Se.Normal),
                    Ye = (e, t) => {
                        const n = U.U2(e, t);
                        return null == n ? void 0 : n.name;
                    },
                    Ke = (e, t) => {
                        const n = U.U2(e, t);
                        return null == n ? void 0 : n.level;
                    },
                    Xe = 33,
                    Qe = 0,
                    Je = !0,
                    et = 'play';
                const tt = [
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
                function nt() {
                    return (
                        (nt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        nt.apply(this, arguments)
                    );
                }
                const at = (0, u.memo)(function (e) {
                        let t = e.width,
                            n = e.height,
                            a = e.getImageSource,
                            r = e.frameCount,
                            o = e.onAnimate,
                            i = e.frameTime,
                            l = void 0 === i ? Xe : i,
                            c = e.initialFrameIndex,
                            d = void 0 === c ? Qe : c,
                            m = e.lastFrameIndex,
                            _ = void 0 === m ? r - 1 : m,
                            E = e.loop,
                            g = void 0 === E ? Je : E,
                            p = e.state,
                            h = void 0 === p ? et : p,
                            b = e.onAnimationDone,
                            f = e.onAnimationComplete,
                            v = e.poster,
                            A = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, tt);
                        const F = (0, u.useRef)(null);
                        return (
                            (0, u.useEffect)(() => {
                                const e = F.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    n = (n) => {
                                        (t.clearRect(0, 0, e.width, e.height), t.drawImage(n.img, -n.x, -n.y));
                                    };
                                switch (h) {
                                    case 'play':
                                        return (function () {
                                            const e = st(d, _, a),
                                                t = rt(d, _),
                                                r = window.setInterval(() => {
                                                    const a = t(),
                                                        u = e.get(a);
                                                    u
                                                        ? (null == o || o(a, u),
                                                          n(u),
                                                          a === _ &&
                                                              (null == f || f(),
                                                              g || (null == b || b(), window.clearInterval(r))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(r);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === d && v ? { path: v, x: 0, y: 0 } : a(d),
                                                t = new Image();
                                            t.src = e.path;
                                            const r = () => n(ut(e, t));
                                            return (
                                                t.addEventListener('load', r),
                                                () => t.removeEventListener('load', r)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, a, d, _, g, o, f, b, v, h]),
                            s().createElement('canvas', nt({}, A, { width: t, height: n, ref: F }))
                        );
                    }),
                    rt = (e, t) => {
                        let n = e;
                        return () => {
                            const a = n;
                            return ((n += 1), n > t && (n = e), a);
                        };
                    },
                    ut = (e, t) => Object.assign({}, e, { img: t }),
                    st = (e, t, n) => {
                        const a = new Map(),
                            r = {};
                        for (let u = e; u <= t; u++) {
                            const e = n(u),
                                t = r[e.path];
                            if (t) a.set(u, ut(e, t));
                            else {
                                const t = new Image();
                                ((r[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${u})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    a.set(u, ut(e, t)));
                            }
                        }
                        return a;
                    };
                function ot(e) {
                    const t = e.chunk,
                        n = t.rows * t.columns;
                    return (a) => {
                        const r = a % n,
                            u = (r % t.columns) * e.width,
                            s = Math.trunc(r / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(a / n)), x: u, y: s };
                    };
                }
                function it(e) {
                    return (t) => `${e}${t}`;
                }
                var lt = n(3112);
                const ct = [
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
                function dt() {
                    return (
                        (dt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        dt.apply(this, arguments)
                    );
                }
                let mt;
                !(function (e) {
                    ((e.Play = 'play'), (e.Stop = 'stop'));
                })(mt || (mt = {}));
                const _t = (e, t, n) => {
                        const a = new Image();
                        ((a.src = n(t)), e.push(a));
                    },
                    Et =
                        ((0, u.memo)((e) => {
                            let t = e.width,
                                n = e.height,
                                a = e.getSrcByFrame,
                                r = e.frameCount,
                                o = e.onAnimate,
                                i = void 0 === o ? () => {} : o,
                                l = e.frameTime,
                                c = void 0 === l ? 33 : l,
                                d = e.initialFrameIndex,
                                m = void 0 === d ? 0 : d,
                                _ = e.loop,
                                E = void 0 === _ || _,
                                g = e.state,
                                p = void 0 === g ? mt.Play : g,
                                h = e.onAnimationComplete,
                                b = void 0 === h ? () => {} : h,
                                f = e.revers,
                                v = void 0 !== f && f,
                                A = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        u = Object.keys(e);
                                    for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(e, ct);
                            const F = (0, u.useRef)(null);
                            return (
                                (0, u.useEffect)(() => {
                                    const e = F.current;
                                    if (!e) return;
                                    const u = r - 1,
                                        s = e.getContext('2d'),
                                        o = (a) => {
                                            (s.clearRect(0, 0, e.width, e.height), s.drawImage(a, 0, 0, t, n));
                                        };
                                    if ('stop' === p) {
                                        const e = a(0),
                                            t = new Image();
                                        t.src = e;
                                        const n = () => o(t);
                                        return (t.addEventListener('load', n), () => t.removeEventListener('load', n));
                                    }
                                    const l = ((e, t, n) => {
                                            const a = [];
                                            if (n) for (let n = e; n >= 0; n--) _t(a, n, t);
                                            else for (let n = 0; n < e; n++) _t(a, n, t);
                                            return a;
                                        })(r, a, v),
                                        d = ((e, t = 0) => {
                                            let n = t;
                                            return () => {
                                                const t = n;
                                                return ((n += 1), n > e && (n = 0), t);
                                            };
                                        })(u, m),
                                        _ = setInterval(() => {
                                            const e = d(),
                                                t = l[e];
                                            (o(l[e]), i(e, t), e === u && (b(), E || clearInterval(_)));
                                        }, c);
                                    return () => clearInterval(_);
                                }, [r, c, a, n, m, E, i, b, p, t, v]),
                                s().createElement('canvas', dt({}, A, { width: t, height: n, ref: F }))
                            );
                        }),
                        (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2)),
                    gt = (e) => -(Math.cos(Math.PI * e) - 1) / 2,
                    pt = {
                        base: 'AnimatedLostSkill_base_55',
                        base__c_24x24: 'AnimatedLostSkill_base__c_24x24_d5',
                        base__c_44x44: 'AnimatedLostSkill_base__c_44x44_72',
                        icon: 'AnimatedLostSkill_icon_d4',
                    },
                    ht = s().memo(function ({ type: e, index: t, totalAmount: n, className: a, size: r }) {
                        const o = (0, u.useState)(mt.Stop),
                            l = o[0],
                            c = o[1],
                            d = (0, lt.V)(),
                            m =
                                r === je.c44x44
                                    ? ((e) => ({
                                          width: 96,
                                          height: 96,
                                          frameCount: 24,
                                          chunk: { count: 1, rows: 2, columns: 21 },
                                          getChunkPath: it(
                                              `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_big_${e}_`,
                                          ),
                                      }))(e)
                                    : ((e) => ({
                                          width: 64,
                                          height: 64,
                                          frameCount: 24,
                                          chunk: { count: 1, rows: 1, columns: 24 },
                                          getChunkPath: it(
                                              `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_small_${e}_`,
                                          ),
                                      }))(e),
                            _ = ot(m),
                            E = r === je.c44x44 ? 60 : 36,
                            g = (0, Ne.useSpring)(
                                () => ({
                                    from: { x: 0 },
                                    to: { x: i.O.view.remToPx(E) },
                                    config: { duration: 300, easing: Et },
                                    delay: 600 - 100 * t,
                                }),
                                [t, E, d],
                            )[0];
                        return (
                            (0, u.useEffect)(() => {
                                const e = setTimeout(() => c(mt.Play), 100 * (n - 1) - 100 * t);
                                return () => clearTimeout(e);
                            }, [t, n]),
                            s().createElement(
                                te.i,
                                { body: R.strings.dialogs.perksReset.lostSkill.tooltip.description() },
                                s().createElement(
                                    Ne.animated.div,
                                    { style: g, className: h()(pt.base, pt[`base__${r}`], a) },
                                    s().createElement(
                                        'div',
                                        { className: pt.icon },
                                        s().createElement(at, {
                                            width: m.width,
                                            height: m.height,
                                            frameCount: m.frameCount,
                                            getImageSource: _,
                                            loop: !1,
                                            state: l,
                                            style: { transform: `scale(${d})` },
                                        }),
                                    ),
                                ),
                            )
                        );
                    }),
                    bt = 'AnimatedNewSkill_base_0f';
                function ft(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return vt(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return vt(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function vt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const At = new Map();
                let Ft = null;
                const Ct = () => {
                        At.size
                            ? Ft ||
                              (Ft = window.setInterval(() => {
                                  for (var e, t = ft(At.values()); !(e = t()).done; ) {
                                      (0, e.value)();
                                  }
                              }, 5e3))
                            : Ft && (clearInterval(Ft), (Ft = null));
                    },
                    Dt = ({ type: e, state: t }) => {
                        const n = ((e, t) => ({
                                width: 24,
                                height: 24,
                                frameCount: 42,
                                chunk: { count: 1, columns: 42, rows: 1 },
                                getChunkPath: it(`R.images.gui.maps.icons.sequence.new_skill.${e}_${t}_`),
                            }))(e, t),
                            a = ot(n),
                            r = (0, u.useState)(mt.Stop),
                            o = r[0],
                            i = r[1];
                        return (
                            (0, u.useEffect)(() => {
                                const e = () => {
                                    i(mt.Play);
                                };
                                var t;
                                return (
                                    (t = e),
                                    At.set(t, t),
                                    Ct(),
                                    () =>
                                        ((e) => {
                                            (At.delete(e), Ct());
                                        })(e)
                                );
                            }, []),
                            s().createElement(at, {
                                width: n.width,
                                height: n.height,
                                frameCount: n.frameCount,
                                getImageSource: a,
                                loop: !1,
                                state: o,
                                onAnimationDone: () => {
                                    i(mt.Stop);
                                },
                                className: bt,
                            })
                        );
                    },
                    Bt = ({ size: e, children: t, className: n }) => {
                        const a = (0, lt.V)(),
                            r = e === je.c44x44 ? 48 : 26,
                            u = (0, Ne.useSpring)({
                                from: { opacity: 0, marginRight: -r * a },
                                to: [{ marginRight: 0 }, { opacity: 1 }],
                                config: { duration: 400, easing: gt },
                                delay: 800,
                            });
                        return s().createElement(Ne.animated.div, { style: u, className: n }, t);
                    },
                    wt = s().memo(function ({ isEnabled: e, className: t, children: n }) {
                        const a = (0, Ne.useSpring)(() => ({ from: { scale: 1 } })),
                            r = a[0],
                            o = a[1];
                        return (
                            (0, u.useEffect)(() => {
                                e &&
                                    o.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: gt },
                                    });
                            }, [e, o]),
                            s().createElement(Ne.animated.div, { style: e ? r : void 0, className: t }, n)
                        );
                    });
                let yt;
                !(function (e) {
                    ((e[(e.None = 0)] = 'None'), (e[(e.FadeIn = 1)] = 'FadeIn'), (e[(e.Scale = 2)] = 'Scale'));
                })(yt || (yt = {}));
                const kt = s().memo(function ({
                        size: e,
                        skillsSignature: t,
                        animationType: n,
                        className: a,
                        children: r,
                    }) {
                        return n === yt.Scale
                            ? s().createElement(wt, { isEnabled: !0, className: a }, r)
                            : n === yt.FadeIn
                              ? s().createElement(Bt, { size: e, key: t, className: a }, r)
                              : s().createElement('div', { className: a }, r);
                    }),
                    St = s().memo(function ({ size: e, className: t, children: n }) {
                        const a = e === je.c44x44 ? 48 : 26,
                            r = (0, lt.V)(),
                            u = (0, Ne.useSpring)(
                                () => ({
                                    from: { opacity: 1, marginRight: 0 },
                                    to: [{ opacity: 0 }, { marginRight: -a * r }],
                                    config: { duration: 400, easing: gt },
                                }),
                                [r, a],
                            )[0];
                        return s().createElement(Ne.animated.div, { style: u, className: t }, n);
                    });
                var xt = n(3415);
                const Nt = ['className', 'children'];
                const Tt = (e) => {
                    let t = e.className,
                        n = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, Nt);
                    return s().createElement(xt.l, { tooltipArgs: Ze(a), className: t }, n);
                };
                let Lt;
                !(function (e) {
                    ((e.None = 'none'), (e.Learned = 'learned'), (e.Improved = 'Improved'));
                })(Lt || (Lt = {}));
                const It = {
                    base: 'SkillIcon_base_43',
                    base__c_22x22: 'SkillIcon_base__c_22x22_14',
                    base__medium: 'SkillIcon_base__medium_d0',
                    base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                    base__big: 'SkillIcon_base__big_ae',
                    base__c_80x80: 'SkillIcon_base__c_80x80_79',
                    base__c_120x90: 'SkillIcon_base__c_120x90_8c',
                    base__dialogs: 'SkillIcon_base__dialogs_e5',
                };
                let Rt;
                !(function (e) {
                    ((e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c80x80 = 'c_80x80'),
                        (e.c120x90 = 'c_120x90'),
                        (e.c180x135 = 'dialogs'));
                })(Rt || (Rt = {}));
                const Ot = s().memo(function ({ iconName: e, size: t = Rt.c24x24, className: n }) {
                        var a;
                        const r = null == (a = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : a.$dyn(e);
                        return s().createElement('div', {
                            style: null !== r ? { backgroundImage: `url(${r})` } : void 0,
                            className: h()(It.base, It[`base__${t}`], n),
                        });
                    }),
                    Mt = {
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
                    Pt = { [je.c24x24]: Rt.c22x22, [je.c44x44]: Rt.c52x52 },
                    Wt = ({
                        size: e,
                        isIrrelevant: t,
                        efficiencyState: n,
                        type: a,
                        iconName: r,
                        name: u,
                        skillState: o,
                        battleBooster: i,
                        className: l,
                    }) => {
                        const c = i !== Lt.None,
                            d = ((e, t, n, a, r = ne.H$.Normal) =>
                                e === ye.jw
                                    ? $e.LightYellow
                                    : r === ne.H$.Untrained || a
                                      ? t === Ge.Learning
                                          ? $e.Yellow
                                          : $e.Grey
                                      : r === ne.H$.Low
                                        ? n
                                            ? $e.Grey
                                            : $e.Red
                                        : t === Ge.Learning
                                          ? $e.Yellow
                                          : $e.Grey)(u, o, c, t, n),
                            m = (!c && n === ne.H$.Untrained) || t,
                            _ = r === ye.jw;
                        return s().createElement(
                            'div',
                            {
                                className: h()(
                                    Mt.base,
                                    Mt[`base__type${(0, Ae.e)(a)}`],
                                    Mt[`base__state${(0, Ae.e)(o)}`],
                                    Mt[`base__border${(0, Ae.e)(d)}`],
                                    Mt[`base__${e}`],
                                    m && Mt.base__disabled,
                                    l,
                                ),
                            },
                            s().createElement('div', {
                                className: Mt.background,
                                style:
                                    a === ze.Bonus
                                        ? {
                                              backgroundImage: `url('R.images.gui.maps.icons.crew.skillsFrame.${e}.${d}')`,
                                          }
                                        : void 0,
                            }),
                            _ && o === Ge.Learned && s().createElement('div', { className: Mt.newSkillHighLight }),
                            s().createElement(Ot, { iconName: r, size: Pt[e], className: Mt.icon }),
                            m && s().createElement('div', { className: Mt.disabledOverlay }),
                        );
                    };
                function Ht() {
                    return (
                        (Ht =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ht.apply(this, arguments)
                    );
                }
                const $t = (e, t) => (e ? yt.Scale : t ? yt.FadeIn : yt.None),
                    jt = ({
                        index: e,
                        skill: t,
                        previousSkill: n,
                        skillState: a,
                        skillType: r,
                        size: u,
                        efficiencyState: o,
                        tooltipData: i,
                        skillsSignature: l,
                        blinkStyle: c,
                        isNewSkillAnimated: d = !1,
                        skillAnimationType: m = We.None,
                        className: _,
                    }) => {
                        const E = m === We.Blink || m === We.SlideOutAndBlink,
                            g = m === We.SlideOutAndBlink || m === We.SlideOut,
                            p = m === We.FadeIn,
                            h = {
                                skillIndex: e,
                                name: t.name,
                                roleName: t.roleName,
                                customName: t.customName,
                                level: t.level,
                                tooltipData: i,
                                skillType: r,
                            };
                        return d && t.name === ye.jw && u === je.c24x24
                            ? s().createElement(
                                  Tt,
                                  Ht({}, h, { className: _ }),
                                  s().createElement(Dt, { type: r, state: a }),
                              )
                            : s().createElement(
                                  s().Fragment,
                                  null,
                                  n &&
                                      g &&
                                      s().createElement(
                                          St,
                                          { size: u, className: _, key: n.name },
                                          s().createElement(
                                              Te,
                                              { blinkStyle: c, isEnabled: E },
                                              s().createElement(
                                                  Wt,
                                                  Ht({ size: u, type: r, efficiencyState: o, skillState: a }, n),
                                              ),
                                          ),
                                      ),
                                  s().createElement(
                                      kt,
                                      {
                                          size: u,
                                          skillsSignature: l,
                                          className: _,
                                          animationType: $t(m === We.ScaleUp, p),
                                      },
                                      s().createElement(
                                          Tt,
                                          h,
                                          s().createElement(
                                              Te,
                                              { blinkStyle: c, isEnabled: E },
                                              s().createElement(
                                                  Wt,
                                                  Ht({ size: u, type: r, efficiencyState: o, skillState: a }, t),
                                              ),
                                          ),
                                      ),
                                  ),
                              );
                    },
                    zt = {
                        base: 'LostLevelAnimation_base_f6',
                        level: 'LostLevelAnimation_level_f0',
                        level__skillLost: 'LostLevelAnimation_level__skillLost_a2',
                        level__skillBlur: 'LostLevelAnimation_level__skillBlur_24',
                        base__c_24x24: 'LostLevelAnimation_base__c_24x24_1c',
                        base__c_44x44: 'LostLevelAnimation_base__c_44x44_44',
                    },
                    Gt = s().memo(function ({ size: e, level: t, withSlideOut: n = !0 }) {
                        const a = (0, Ne.useSpring)({ to: { val: t }, config: { duration: 150 } }),
                            r = (0, Ne.useSpring)(() => ({
                                from: { x: i.O.view.remToPx(-5), opacity: 0 },
                                to: { x: 0, opacity: 1 },
                                config: { duration: 300, easing: Et },
                                delay: 700,
                            }))[0],
                            u = (0, Ne.useSpring)(
                                () => ({
                                    from: { opacity: 0 },
                                    to: [{ opacity: 1 }, { opacity: 0 }],
                                    config: { duration: 150, easing: Et },
                                }),
                                [t],
                            )[0];
                        return s().createElement(
                            'div',
                            { className: h()(zt.base, zt[`base__${e}`]) },
                            s().createElement(
                                Ne.animated.div,
                                { style: n ? r : void 0, className: h()(zt.level, zt.level__skillLost) },
                                a.val.to((e) => (0, Ae.dL)(Math.floor(e))),
                            ),
                            s().createElement(
                                Ne.animated.div,
                                {
                                    style: n ? Object.assign({}, r, u) : u,
                                    className: h()(zt.level, zt.level__skillBlur),
                                },
                                a.val.to((e) => (0, Ae.dL)(Math.floor(e))),
                            ),
                        );
                    }),
                    Ut = 'SkillLevel_base_d2',
                    Vt = 'SkillLevel_base__highlighted_e3',
                    Zt = ({ skillLevel: e, isHighlighted: t = !1, className: n }) =>
                        s().createElement(
                            'div',
                            { className: h()(Ut, t && Vt, n) },
                            (0, Ae.dL)(
                                e > 0 && e < 0.01
                                    ? 0.01
                                    : ((e, t = 2) => {
                                          const n = Math.pow(10, t);
                                          return e % 1 > 0 ? Math.round(e * n) / n : e;
                                      })(e),
                            ),
                        ),
                    qt = ({
                        skillsAmountDiff: e,
                        size: t,
                        skillType: n,
                        wasLearned: a,
                        isAllMajorSkillsLearned: r,
                        skill: u,
                        possibleSkill: o,
                        blinkStyle: i,
                        className: l,
                    }) => {
                        const c = o || u,
                            d = void 0 !== u && void 0 !== o ? o.level - u.level : 0,
                            m = e > 0,
                            _ = e < 0 || d > 0;
                        return !c ||
                            (c.level === ye.I && 0 === d) ||
                            ((null == o ? void 0 : o.level) === ye.I && n === ze.Bonus && d > 0 && !r)
                            ? null
                            : m || (d < 0 && 0 === e)
                              ? s().createElement(Gt, { size: t, level: c.level, withSlideOut: m })
                              : s().createElement(
                                    wt,
                                    { isEnabled: Boolean(a) },
                                    s().createElement(
                                        Te,
                                        { blinkStyle: i, isEnabled: _ },
                                        s().createElement(Zt, { skillLevel: c.level, isHighlighted: _, className: l }),
                                    ),
                                );
                    },
                    Yt = {
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
                    Kt = ({
                        skills: e,
                        skillType: t = ze.Major,
                        possibleSkills: n,
                        isAcceleratedTrainingVisible: a = !1,
                        collapseLayout: r = He.None,
                        efficiencyState: u,
                        size: o,
                        tooltipData: i,
                        blinkStyle: l,
                        isSkillsEfficiencyLearning: c = !1,
                        isAllMajorSkillsLearned: d = !1,
                        isNewSkillAnimated: m = !1,
                        className: _,
                    }) => {
                        const E = void 0 === n ? e : n,
                            g = (0, Le.D9)(e),
                            p = (0, Le.D9)(E),
                            b = g && U.lN(g),
                            f = U.lN(e),
                            v = Ve(E),
                            A = U.lN(E),
                            F = n ? e.length - n.length : 0,
                            C = u !== ne.H$.Low || c || (A && f && A.level !== f.level),
                            D = ((e) => U.UI(e, (e) => e.name).join())(E);
                        return s().createElement(
                            'div',
                            { className: h()(Yt.base, Yt[`base__${o}`], Yt[`base__collapse${(0, Ae.e)(r)}`], _) },
                            ((e, t, n, a, r) => {
                                if (!a || !t) return U.UI(n, (e, t) => r(e, We.None, t));
                                const u = new Map(U.UI(t, ({ name: e, level: t }) => [e, t])),
                                    s = new Map(U.UI(e, ({ name: e, level: t }) => [e, t]));
                                let o = !1;
                                return U.UI(n, (i, l) => {
                                    const c = i.name,
                                        d = i.level,
                                        m = c === ye.jw,
                                        _ = Ye(e, l),
                                        E = m ? Ke(e, l) : s.get(c),
                                        g = m ? Ke(t, l) : u.get(c),
                                        p = Ye(n, l - 1),
                                        h = Ye(a, l),
                                        b = Ye(a, l + 1);
                                    let f = We.None;
                                    return (
                                        o || c !== b || p === h || m || _ !== ye.jw
                                            ? m && l === n.length - 1 && o
                                                ? (f = We.FadeIn)
                                                : (!m && !s.has(c)) || (void 0 === _ && m) || (E !== d && d === ye.I)
                                                  ? (f = We.Blink)
                                                  : g !== E && (f = We.ScaleUp)
                                            : ((o = !0), (f = s.has(c) ? We.SlideOut : We.SlideOutAndBlink)),
                                        r(i, f, l)
                                    );
                                });
                            })(e, g, E, p, (e, n, a) => {
                                const r = Ue(e);
                                return s().createElement(jt, {
                                    key: a,
                                    index: a,
                                    skill: e,
                                    skillState: r,
                                    skillType: t,
                                    previousSkill: p && U.U2(p, a),
                                    skillAnimationType: n,
                                    size: o,
                                    skillsSignature: D,
                                    efficiencyState: u,
                                    tooltipData: i,
                                    blinkStyle: l,
                                    isNewSkillAnimated: m,
                                    className: h()(
                                        Yt.skill,
                                        Yt[`skill__state${(0, Ae.e)(r)}`],
                                        e === A && Yt.skill__last,
                                        e === v && Yt.skill__lastLearnedSkill,
                                    ),
                                });
                            }),
                            C &&
                                s().createElement(qt, {
                                    skillsAmountDiff: F,
                                    size: o,
                                    wasLearned: b && f && b.level !== f.level,
                                    skillType: t,
                                    isAllMajorSkillsLearned: d,
                                    skill: f,
                                    possibleSkill: A,
                                    blinkStyle: l,
                                    className: Yt.level,
                                }),
                            a &&
                                s().createElement(Me, {
                                    classMix: Yt.acceleratedTrainingIcon,
                                    targetId: null == i ? void 0 : i.targetId,
                                }),
                            F > 0 &&
                                Ie(F, (e) =>
                                    s().createElement(ht, {
                                        key: e,
                                        index: e,
                                        totalAmount: F,
                                        type: t,
                                        className: Yt.lostSkill,
                                        size: o,
                                    }),
                                ),
                        );
                    };
                function Xt() {
                    return (
                        (Xt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Xt.apply(this, arguments)
                    );
                }
                const Qt = ({
                        skills: e,
                        collapseLayout: t = He.None,
                        skillType: n = ze.Major,
                        efficiencyState: a,
                        size: r,
                        tooltipData: u,
                        className: o,
                        isAcceleratedTrainingVisible: i,
                    }) => {
                        const l = U.lN(e),
                            c = Ve(e),
                            d = a !== ne.H$.Low && (null == l ? void 0 : l.level) !== ye.I;
                        return s().createElement(
                            'div',
                            { className: h()(Yt.base, Yt[`base__${r}`], Yt[`base__collapse${(0, Ae.e)(t)}`], o) },
                            U.UI(e, (e, t) => {
                                const o = Ue(e);
                                return s().createElement(
                                    Tt,
                                    {
                                        key: t,
                                        skillIndex: t,
                                        name: e.name,
                                        roleName: e.roleName,
                                        customName: e.customName,
                                        level: e.level,
                                        tooltipData: u,
                                        skillType: n,
                                        className: h()(
                                            Yt.skill,
                                            Yt[`skill__state${(0, Ae.e)(o)}`],
                                            e === l && Yt.skill__last,
                                            e === c && Yt.skill__lastLearnedSkill,
                                        ),
                                    },
                                    s().createElement(
                                        Wt,
                                        Xt({ size: r, type: n, efficiencyState: a, skillState: o }, e),
                                    ),
                                );
                            }),
                            d && l && s().createElement(Zt, { skillLevel: l.level, className: Yt.level }),
                            i &&
                                s().createElement(Me, {
                                    classMix: Yt.acceleratedTrainingIcon,
                                    targetId: null == u ? void 0 : u.targetId,
                                }),
                        );
                    },
                    Jt = {
                        base: 'Skills_base_ec',
                        efficiency: 'Skills_efficiency_d0',
                        base__c_44x44: 'Skills_base__c_44x44_c0',
                        rows: 'Skills_rows_e8',
                        bonusRow: 'Skills_bonusRow_4a',
                    };
                function en() {
                    return (
                        (en =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        en.apply(this, arguments)
                    );
                }
                const tn = ({
                        data: e,
                        dataToCompare: t,
                        classes: n,
                        tankmanID: a = ye.y$,
                        size: r = je.c24x24,
                        collapseType: u = Pe.None,
                        isSkillTooltipEnabled: o = !1,
                        isAcceleratedTrainingVisible: i = !1,
                        isNewSkillAnimated: l = !1,
                        isEfficiencyVisible: c = !1,
                        isBonusSkillsVisible: d = !0,
                        tooltipsTargetId: m = R.invalid('resId'),
                        tooltipArgs: _,
                        blinkStyle: E,
                        children: g,
                    }) => {
                        const p = e.majorSkills,
                            b = e.bonusSkills,
                            f = e.skillsEfficiency,
                            v = (null == t ? void 0 : t.skillsEfficiency) || f,
                            A = (0, ne.Y4)(f),
                            F = void 0 !== t && t.skillsEfficiency !== f,
                            C = A !== ne.H$.Normal || c || F,
                            D = null == t ? void 0 : t.majorSkills,
                            B = null == t ? void 0 : t.bonusSkills,
                            w = B || b,
                            y = U.lN(w),
                            k = d && w.length > 0,
                            S = l || void 0 !== t,
                            x = (null == D ? void 0 : D.length) === ye.GT,
                            N = ((e, t, n, a) => {
                                if (t !== ye.vA) return He.None;
                                switch (e) {
                                    case Pe.Default:
                                        if (n && a) return He.NoMargins;
                                        break;
                                    case Pe.Overlap:
                                        if (n) return a ? He.Overlap : He.ReducedMargins;
                                        if (a) return He.OnlyLearningOverlap;
                                        break;
                                    case Pe.ExtraOverlap:
                                        return n && a
                                            ? He.ExtraOverlapWithLevelAndEfficiency
                                            : n
                                              ? He.ExtraOverlapWithEfficiency
                                              : a
                                                ? He.ExtraOverlapWithLevel
                                                : He.ExtraOverlap;
                                }
                                return He.None;
                            })(u, w.length, C, A !== ne.H$.Low && void 0 !== y && y.level < ye.I),
                            T = {
                                size: r,
                                efficiencyState: A,
                                tooltipData: { targetId: m, isEnabled: o, tankmanID: a, args: _ },
                            };
                        return s().createElement(
                            'div',
                            { className: h()(Jt.base, Jt[`base__${r}`], null == n ? void 0 : n.base) },
                            C &&
                                s().createElement(
                                    Te,
                                    { blinkStyle: E, isEnabled: F && S },
                                    s().createElement(xe, {
                                        efficiencyValue: v,
                                        tankmanID: a,
                                        className: Jt.efficiency,
                                        size: qe(r, k),
                                        targetId: m,
                                    }),
                                ),
                            g,
                            s().createElement(
                                'div',
                                { className: Jt.rows },
                                S
                                    ? s().createElement(
                                          s().Fragment,
                                          null,
                                          s().createElement(
                                              Kt,
                                              en(
                                                  {
                                                      skills: p,
                                                      possibleSkills: D,
                                                      blinkStyle: E,
                                                      isAcceleratedTrainingVisible: i,
                                                      isNewSkillAnimated: l,
                                                      isSkillsEfficiencyLearning: F,
                                                  },
                                                  T,
                                              ),
                                          ),
                                          k &&
                                              s().createElement(
                                                  Kt,
                                                  en(
                                                      {
                                                          skills: b,
                                                          skillType: ze.Bonus,
                                                          possibleSkills: B,
                                                          className: Jt.bonusRow,
                                                          collapseLayout: N,
                                                          blinkStyle: E,
                                                          isNewSkillAnimated: l,
                                                          isAllMajorSkillsLearned: x,
                                                      },
                                                      T,
                                                  ),
                                              ),
                                      )
                                    : s().createElement(
                                          s().Fragment,
                                          null,
                                          s().createElement(Qt, en({ skills: p, isAcceleratedTrainingVisible: i }, T)),
                                          k &&
                                              s().createElement(
                                                  Qt,
                                                  en(
                                                      {
                                                          skills: b,
                                                          skillType: ze.Bonus,
                                                          className: Jt.bonusRow,
                                                          collapseLayout: N,
                                                      },
                                                      T,
                                                  ),
                                              ),
                                      ),
                            ),
                        );
                    },
                    nn = 'Content_base_48',
                    an = 'Content_base__disabled_e3',
                    rn = 'Content_content_cb',
                    un = 'Content_name_7b',
                    sn = 'Content_name__postProgression_f9',
                    on = 'Content_specializationInfo_ac',
                    ln = 'Content_recruitLabel_17';
                function cn() {
                    return (
                        (cn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        cn.apply(this, arguments)
                    );
                }
                const dn = s().memo(
                        ({
                            tankman: e,
                            isRecruit: t,
                            additionalContent: n,
                            classNames: a,
                            isDisabled: r = !1,
                            withBonusSkills: u = !1,
                        }) =>
                            s().createElement(
                                'div',
                                { className: h()(nn, r && an) },
                                s().createElement(
                                    'div',
                                    { className: rn },
                                    s().createElement(
                                        'div',
                                        { className: h()(un, e.hasPostProgression && sn, null == a ? void 0 : a.name) },
                                        e.fullUserName,
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: h()(on, null == a ? void 0 : a.specialization) },
                                        t
                                            ? s().createElement(
                                                  'div',
                                                  { className: ln },
                                                  R.strings.crew.tankman.recruit(),
                                              )
                                            : s().createElement(
                                                  we,
                                                  cn({}, e.tankmanVehicleInfo, {
                                                      type: Be.whiteSpanish,
                                                      isShortName: !0,
                                                  }),
                                              ),
                                    ),
                                ),
                                s().createElement(tn, {
                                    data: e.skills,
                                    collapseType: Pe.Overlap,
                                    isBonusSkillsVisible: u,
                                }),
                                n,
                            ),
                    ),
                    mn = 'DisabledLayer_base_1b',
                    _n = 'DisabledLayer_disabledContent_81',
                    En = 'DisabledLayer_disabledIcon_21',
                    gn = 'DisabledLayer_disabledTitle_a4',
                    pn = s().memo(({ disableReason: e, disableIcon: t, className: n }) =>
                        s().createElement(
                            'div',
                            { className: h()(mn, n) },
                            s().createElement(
                                'div',
                                { className: _n },
                                t &&
                                    s().createElement('div', {
                                        className: En,
                                        style: { backgroundImage: `url(${t})` },
                                    }),
                                s().createElement('div', { className: gn }, e),
                            ),
                        ),
                    ),
                    hn = {
                        base: 'FlagIcon_base_25',
                        base__c_1080x454: 'FlagIcon_base__c_1080x454_6c',
                        base__c_240x118: 'FlagIcon_base__c_240x118_92',
                        base__c_155x31: 'FlagIcon_base__c_155x31_41',
                    };
                let bn;
                !(function (e) {
                    ((e.c1080x454 = 'c_1080x454'), (e.c240x118 = 'c_240x118'), (e.c155x31 = 'c_155x31'));
                })(bn || (bn = {}));
                const fn = {
                        [bn.c1080x454]: R.images.gui.maps.icons.crew.flags,
                        [bn.c240x118]: R.images.gui.maps.icons.tankmen.card.nations,
                        [bn.c155x31]: R.images.gui.maps.icons.nations.c_155x31,
                    },
                    vn = s().memo(({ nation: e, size: t = bn.c1080x454, className: n }) =>
                        s().createElement('div', {
                            className: h()(hn.base, hn[`base__${t}`], n),
                            style: { backgroundImage: `url('${fn[t].$dyn(e)}')` },
                        }),
                    ),
                    An = {
                        base: 'TankmanIcon_base_f9',
                        base__big: 'TankmanIcon_base__big_98',
                        base__small: 'TankmanIcon_base__small_b2',
                        base__barracks: 'TankmanIcon_base__barracks_62',
                        base__special: 'TankmanIcon_base__special_3f',
                        base__c_204x256: 'TankmanIcon_base__c_204x256_97',
                    };
                let Fn;
                !(function (e) {
                    ((e.c158x118 = 'big'),
                        (e.c100x60 = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256'));
                })(Fn || (Fn = {}));
                const Cn = (0, u.memo)(function ({ name: e, size: t = Fn.c100x60, classMix: n, isSkin: a = !1 }) {
                        let r = R.images.gui.maps.icons.tankmen.icons.$dyn(t);
                        a && (r = r.$dyn('crewSkins'));
                        const u = r.$dyn((0, Ae.BN)(e));
                        return (
                            u ||
                                console.error(
                                    `Can't find ${(0, Ae.BN)(e)} in R.images.gui.maps.icons.tankmen.icons.${t}${a ? '.crewSkins' : ''}`,
                                ),
                            s().createElement('div', {
                                style: { backgroundImage: `url(${u})` },
                                className: h()(An.base, An[`base__${t}`], n),
                            })
                        );
                    }),
                    Dn = 'Icon_base_93',
                    Bn = 'Icon_base__disabled_54',
                    wn = 'Icon_flag_ac',
                    yn = (e, t) => {
                        if (e && t) return { backgroundImage: `url(${e})` };
                    },
                    kn = s().memo(
                        ({
                            nation: e,
                            tankmanIcon: t,
                            recruitGlowImage: n,
                            isTankmanInSkin: a,
                            isRecruit: r,
                            isDisabled: u,
                            className: o,
                            children: i,
                        }) =>
                            s().createElement(
                                'div',
                                { className: h()(Dn, u && Bn, o), style: yn(n, r) },
                                '' !== e && s().createElement(vn, { nation: e, size: bn.c240x118, className: wn }),
                                s().createElement(Cn, { name: t, size: Fn.c158x118, isSkin: a }),
                                i,
                            ),
                    );
                var Sn = n(7044);
                const xn = (0, u.memo)(({ duration: e }) => {
                        const t =
                            e >= 0
                                ? (n = (0, Sn.f8)(e)).days > 0
                                    ? (0, Ae.WU)(R.strings.common.duration.days(), { days: n.days })
                                    : n.hours > 0
                                      ? (0, Ae.WU)(R.strings.common.duration.hours(), { hours: n.hours })
                                      : n.minutes > 0
                                        ? (0, Ae.WU)(R.strings.common.duration.minutes(), { minutes: n.minutes })
                                        : (0, Ae.WU)(R.strings.common.duration.seconds(), { seconds: n.seconds })
                                : R.strings.common.duration.unlimited();
                        var n;
                        return s().createElement('span', null, t);
                    }),
                    Nn = 'DismissedCountdown_base_12',
                    Tn = 'DismissedCountdown_icon_e6',
                    Ln = 'DismissedCountdown_label_92',
                    In = s().memo(({ duration: e }) =>
                        s().createElement(
                            'div',
                            { className: Nn },
                            s().createElement('div', { className: Tn }),
                            s().createElement(
                                'div',
                                { className: Ln },
                                s().createElement(xn, { duration: (0, Le.au)(e, 1) }),
                            ),
                        ),
                    ),
                    Rn = 'Location_base_4d',
                    On = 'Location_icon_eb',
                    Mn = s().memo(({ location: e, timeToDismiss: t, className: n }) =>
                        s().createElement(
                            'div',
                            { className: h()(Rn, n) },
                            e === pe.Dismissed && s().createElement(In, { duration: t }),
                            e !== pe.InBarracks &&
                                s().createElement('div', {
                                    className: On,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.tankmen.card.location.${e})`,
                                    },
                                }),
                        ),
                    ),
                    Pn = 'Role_base_68',
                    Wn = 'Role_base__disabled_8c';
                var Hn;
                !(function (e) {
                    ((e.White = 'white'), (e.Red = 'red'));
                })(Hn || (Hn = {}));
                const $n = s().memo(({ role: e, withPenalty: t, className: n, isDisabled: a = !1 }) =>
                        e !== ge.Any
                            ? s().createElement('div', {
                                  className: h()(Pn, a && Wn, n),
                                  style: {
                                      backgroundImage: `url(R.images.gui.maps.icons.tankmen.roles.opaque.${t ? Hn.Red : Hn.White}.${e})`,
                                  },
                              })
                            : null,
                    ),
                    jn = {
                        base: 'TankmanCard_base_dd',
                        base__default: 'TankmanCard_base__default_72',
                        base__disabled: 'TankmanCard_base__disabled_1f',
                        icon: 'TankmanCard_icon_a5',
                        cardContent: 'TankmanCard_cardContent_79',
                        disabledLayer: 'TankmanCard_disabledLayer_25',
                        role: 'TankmanCard_role_02',
                        location: 'TankmanCard_location_3f',
                        separatorWrapper: 'TankmanCard_separatorWrapper_fe',
                        separator: 'TankmanCard_separator_73',
                        separator__top: 'TankmanCard_separator__top_72',
                        actions: 'TankmanCard_actions_b5',
                        newMark: 'TankmanCard_newMark_9b',
                    },
                    zn = (0, u.memo)(
                        ({
                            tankman: e,
                            Icon: t = kn,
                            actions: n,
                            additionalContent: a,
                            tooltipArgs: r,
                            isTooltipEnabled: u = !0,
                            withBonusSkills: o = !1,
                            className: i,
                            classNames: l,
                            onMouseEnter: c,
                            onMouseLeave: d,
                            onMouseDown: m,
                            onClick: _,
                            children: E,
                        }) => {
                            const g = e.tankmanKind === he.Recruit,
                                p = e.cardState === be.Disabled,
                                b = p && Boolean(e.disableIcon || e.disableReason),
                                f = {
                                    tooltipId: g ? 'tankmanNotRecruited' : 'tankman',
                                    targetId: g ? e.recruitID : e.tankmanID,
                                };
                            return s().createElement(
                                Ee.t,
                                { args: r || f, isEnabled: u, ignoreShowDelay: !1 },
                                s().createElement(
                                    'div',
                                    {
                                        className: h()(jn.base, jn[`base__${e.cardState}`], i),
                                        onMouseEnter: c,
                                        onMouseLeave: d,
                                        onMouseDown: m,
                                        onClick: _,
                                    },
                                    s().createElement(
                                        'div',
                                        { className: jn.cardContent },
                                        b &&
                                            s().createElement(pn, {
                                                disableReason: e.disableReason,
                                                disableIcon: e.disableIcon,
                                                className: jn.disabledLayer,
                                            }),
                                        s().createElement($n, {
                                            isDisabled: p,
                                            role: e.role,
                                            withPenalty: e.hasRolePenalty,
                                            className: jn.role,
                                        }),
                                        e.isNew && s().createElement(_e.A, { size: 'small', className: jn.newMark }),
                                        s().createElement(Mn, {
                                            location: e.location,
                                            timeToDismiss: e.timeToDismiss,
                                            className: jn.location,
                                        }),
                                        s().createElement(t, {
                                            nation: e.nation,
                                            tankmanIcon: e.iconName,
                                            recruitGlowImage: e.recruitGlowImage,
                                            isTankmanInSkin: e.isInSkin,
                                            isRecruit: g,
                                            isDisabled: p,
                                            className: h()(jn.icon, null == l ? void 0 : l.icon),
                                        }),
                                        s().createElement(
                                            'div',
                                            { className: h()(jn.separatorWrapper, null == l ? void 0 : l.separator) },
                                            s().createElement('div', {
                                                className: h()(jn.separator, jn.separator__top),
                                            }),
                                            s().createElement('div', { className: jn.separator }),
                                        ),
                                        s().createElement(dn, {
                                            tankman: e,
                                            isRecruit: g,
                                            isDisabled: p,
                                            withBonusSkills: o,
                                            additionalContent: a,
                                            classNames: l,
                                        }),
                                        !p &&
                                            n &&
                                            s().createElement(
                                                'div',
                                                { className: h()(jn.actions, null == l ? void 0 : l.actions) },
                                                n,
                                            ),
                                        E,
                                    ),
                                ),
                            );
                        },
                    ),
                    Gn = (e) => {
                        let t,
                            n = null;
                        return (
                            (n = requestAnimationFrame(() => {
                                n = requestAnimationFrame(() => {
                                    ((n = null), (t = e()));
                                });
                            })),
                            () => {
                                ('function' == typeof t && t(), null !== n && cancelAnimationFrame(n));
                            }
                        );
                    },
                    Un = (e, t, n) => (n < e ? e : n > t ? t : n),
                    Vn = [];
                function Zn(e) {
                    const t = (0, u.useRef)(e);
                    return (
                        (0, u.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, u.useCallback)((...e) => (0, t.current)(...e), Vn)
                    );
                }
                function qn(e, t, n = []) {
                    const a = (0, u.useRef)(0),
                        r = (0, u.useCallback)(() => window.clearInterval(a.current), n || []);
                    (0, u.useEffect)(() => r, [r]);
                    const s = (null != n ? n : []).concat([t]);
                    return [
                        (0, u.useCallback)((n) => {
                            ((a.current = window.setInterval(() => e(n, !0), t)), e(n, !1));
                        }, s),
                        r,
                    ];
                }
                var Yn = n(7727);
                function Kn(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Xn(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return Xn(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Xn(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const Qn = () => {
                    const e = (0, u.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        n = (e, n) => {
                            t(e).set(n, n);
                        },
                        a = (e, n) => {
                            t(e).delete(n);
                        },
                        r = (e, ...n) => {
                            for (var a, r = Kn(t(e).values()); !(a = r()).done; ) {
                                (0, a.value)(...n);
                            }
                        };
                    return (0, u.useMemo)(() => ({ on: n, off: a, trigger: r }), []);
                };
                var Jn = n(5139);
                let ea;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(ea || (ea = {}));
                const ta = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    na = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: r,
                        forceTriggerMouseMove: s,
                    }) => {
                        const o = (e, n) => {
                            const a = t(e),
                                r = a[0],
                                u = a[1];
                            return u <= r ? 0 : Un(r, u, n);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? ta : l,
                                d = (0, u.useRef)(null),
                                m = (0, u.useRef)(null),
                                _ = (0, u.useRef)(!1),
                                E = Qn(),
                                g = (function (e, t, n) {
                                    const a = (0, u.useMemo)(() => (0, Jn.Z)(n, e), t);
                                    return ((0, u.useEffect)(() => a.cancel, [a]), a);
                                })(
                                    () => {
                                        s && s();
                                    },
                                    [],
                                    150,
                                ),
                                p = (0, Ne.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (n(t, e), E.trigger('change', e), s && _.current && g());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                h = p[0],
                                b = p[1],
                                f = (0, u.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const r = h.scrollPosition.get(),
                                            u = (null != (a = h.scrollPosition.goal) ? a : 0) - r;
                                        return o(e, t * n + u + r);
                                    },
                                    [h.scrollPosition],
                                ),
                                v = (0, u.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = d.current;
                                        a &&
                                            b.start({
                                                scrollPosition: o(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(a, h.scrollPosition.get()) },
                                            });
                                    },
                                    [b, c.animationConfig, h.scrollPosition],
                                ),
                                A = (0, u.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            n = m.current;
                                        if (!t || !n) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, c.step),
                                            u = f(t, e, a);
                                        v(u);
                                    },
                                    [v, f, c.step],
                                ),
                                F = (0, u.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && A(a(e)),
                                            d.current && E.trigger('mouseWheel', e, h.scrollPosition, t(d.current)));
                                    },
                                    [h.scrollPosition, A, E],
                                ),
                                C = ((e, t = []) => {
                                    const n = (0, u.useRef)(),
                                        a = (0, u.useCallback)((...t) => {
                                            (n.current && n.current(), (n.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, u.useEffect)(
                                            () => () => {
                                                n.current && n.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        Gn(() => {
                                            const e = d.current;
                                            e &&
                                                (v(o(e, h.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [v, h.scrollPosition.goal],
                                ),
                                D = Zn(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = o(e, h.scrollPosition.goal);
                                    (t !== h.scrollPosition.goal && v(t, { immediate: !0 }),
                                        E.trigger('recalculateContent'));
                                });
                            ((0, u.useEffect)(
                                () => (
                                    window.addEventListener('resize', C),
                                    () => {
                                        window.removeEventListener('resize', C);
                                    }
                                ),
                                [C],
                            ),
                                (0, u.useEffect)(() => {
                                    const e = d.current;
                                    if (!e || !s) return;
                                    const t = () => {
                                            _.current = !0;
                                        },
                                        n = () => {
                                            _.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', t),
                                        e.addEventListener('mouseleave', n),
                                        () => {
                                            (e.removeEventListener('mouseenter', t),
                                                e.removeEventListener('mouseleave', n));
                                        }
                                    );
                                }, [d]));
                            return (0, u.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? r(m.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: F,
                                    applyScroll: v,
                                    applyStepTo: A,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: b,
                                    animationScroll: h,
                                    recalculateContent: D,
                                    events: { on: E.on, off: E.off },
                                }),
                                [h.scrollPosition, v, A, E.off, E.on, D, F, b, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    aa = na({
                        getBounds: (e) => {
                            var t, n;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (n = e.parentElement) ? void 0 : n.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            var n;
                            e.style.transform = `translateX(-${0 | (null != (n = t.value.scrollPosition) ? n : 0)}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? ea.Next : ea.Prev),
                        forceTriggerMouseMove: i.O.view.forceTriggerMouseMove,
                    }),
                    ra = 'HorizontalBar_base_49',
                    ua = 'HorizontalBar_base__active_5e',
                    sa = 'HorizontalBar_leftButton_5f',
                    oa = 'HorizontalBar_rightButton_03',
                    ia = 'HorizontalBar_track_0d',
                    la = 'HorizontalBar_thumb_fd',
                    ca = 'HorizontalBar_rail_32',
                    da = 'disable',
                    ma = { pending: !1, offset: 0 },
                    _a = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Ea = () => {},
                    ga = (e, t) => Math.max(20, e.offsetWidth * t),
                    pa = (0, u.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = _a, onDrag: a = Ea }) => {
                        const r = (0, u.useRef)(null),
                            o = (0, u.useRef)(null),
                            l = (0, u.useRef)(null),
                            c = (0, u.useRef)(null),
                            d = (0, u.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, u.useState)(ma),
                            E = _[0],
                            g = _[1],
                            p = (0, u.useCallback)(
                                (e) => {
                                    (g(e),
                                        d.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [a],
                            ),
                            b = () => {
                                const t = c.current,
                                    n = d.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const u = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / r),
                                    i = Un(0, 1, u / (r - a)),
                                    m = (t.offsetWidth - ga(t, s)) * i;
                                ((n.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (o.current && l.current && c.current && d.current) {
                                            if (0 === e)
                                                return (
                                                    o.current.classList.add(da),
                                                    void l.current.classList.remove(da)
                                                );
                                            if (
                                                ((t = c.current),
                                                (n = d.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(da),
                                                    void l.current.classList.add(da)
                                                );
                                            var t, n;
                                            (o.current.classList.remove(da), l.current.classList.remove(da));
                                        }
                                    })(m));
                            },
                            f = Zn(() => {
                                ((() => {
                                    const t = d.current,
                                        n = c.current,
                                        a = e.getWrapperSize(),
                                        u = e.getContainerSize();
                                    if (!(u && t && a && n)) return;
                                    const s = Math.min(1, a / u);
                                    ((t.style.width = `${ga(n, s)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 !== s ? r.current.classList.add(ua) : r.current.classList.remove(ua)));
                                })(),
                                    b());
                            });
                        ((0, u.useEffect)(() => Gn(f)),
                            (0, u.useEffect)(
                                () =>
                                    Gn(() => {
                                        const t = () => {
                                            b();
                                        };
                                        let n = Ea;
                                        const a = () => {
                                            (n(), (n = Gn(f)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', f),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                (n(),
                                                    e.events.off('recalculateContent', f),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, u.useEffect)(() => {
                                if (!E.pending) return;
                                const t = i.O.client.events.mouse.move(([t, n]) => {
                                        var r;
                                        const u = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!u || !s) return;
                                        const o = c.current,
                                            i = d.current;
                                        if (!o || !i) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const l = t.clientX - E.offset - o.getBoundingClientRect().x,
                                            m = (l / o.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(u, m),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: m }));
                                    }),
                                    n = i.O.client.events.mouse.up(() => {
                                        (t(), p(ma));
                                    });
                                return () => {
                                    (t(), n());
                                };
                            }, [e, E.offset, E.pending, a, p]));
                        const v = qn((t) => e.applyStepTo(t), m, [e]),
                            A = v[0],
                            F = v[1];
                        (0, u.useEffect)(
                            () => (
                                document.addEventListener('mouseup', F, !0),
                                () => document.removeEventListener('mouseup', F, !0)
                            ),
                            [F],
                        );
                        const C = (e) => {
                            e.target.classList.contains(da) || (0, Yn.G)('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: h()(ra, t.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: h()(sa, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(da) ||
                                        0 !== e.button ||
                                        ((0, Yn.G)('play'), A(ea.Next));
                                },
                                onMouseUp: F,
                                ref: o,
                                onMouseEnter: C,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: h()(ia, t.track),
                                    onMouseDown: (t) => {
                                        const a = d.current;
                                        if (a && 0 === t.button)
                                            if (((0, Yn.G)('play'), t.target === a))
                                                p({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = d.current,
                                                        r = e.contentRef.current;
                                                    if (!a || !r) return;
                                                    const u = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + u * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? ea.Prev : ea.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: C,
                                },
                                s().createElement('div', { ref: d, className: h()(la, t.thumb) }),
                                s().createElement('div', { className: h()(ca, t.rail) }),
                            ),
                            s().createElement('div', {
                                className: h()(oa, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(da) ||
                                        0 !== e.button ||
                                        ((0, Yn.G)('play'), A(ea.Prev));
                                },
                                onMouseUp: F,
                                ref: l,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    ha = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ba = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, u.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: h()(ha.base, e.base) });
                            }, [a]),
                            m = (0, u.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: h()(ha.defaultScroll, n), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(ha.defaultScrollArea, r) },
                                s().createElement(fa, { className: i, api: m, classNames: o }, e),
                            ),
                            s().createElement(pa, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    fa = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, u.useEffect)(() => Gn(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: h()(ha.base, t) },
                            s().createElement(
                                'div',
                                {
                                    className: h()(ha.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: h()(ha.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                ((fa.Bar = pa), (fa.Default = ba));
                const va = na({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? ea.Next : ea.Prev),
                    }),
                    Aa = 'VerticalBar_base_f3',
                    Fa = 'VerticalBar_base__active_72',
                    Ca = 'VerticalBar_topButton_d7',
                    Da = 'VerticalBar_bottomButton_06',
                    Ba = 'VerticalBar_track_df',
                    wa = 'VerticalBar_thumb_32',
                    ya = 'VerticalBar_rail_43',
                    ka = 'disable',
                    Sa = () => {},
                    xa = { pending: !1, offset: 0 },
                    Na = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Ta = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    La = (e, t) => Math.max(20, e.offsetHeight * t),
                    Ia = (0, u.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = Na, onDrag: a = Sa }) => {
                        const r = (0, u.useRef)(null),
                            o = (0, u.useRef)(null),
                            l = (0, u.useRef)(null),
                            c = (0, u.useRef)(null),
                            d = (0, u.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, u.useState)(xa),
                            E = _[0],
                            g = _[1],
                            p = (0, u.useCallback)(
                                (e) => {
                                    (g(e),
                                        d.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [a],
                            ),
                            b = Zn(() => {
                                const t = d.current,
                                    n = c.current,
                                    a = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(a && u && t && n)) return;
                                const s = Math.min(1, a / u);
                                return (
                                    (t.style.height = `${La(n, s)}px`),
                                    (t.style.display = 'flex'),
                                    r.current &&
                                        (1 !== s ? r.current.classList.add(Fa) : r.current.classList.remove(Fa)),
                                    s
                                );
                            }),
                            f = Zn(() => {
                                const t = c.current,
                                    n = d.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const u = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / r),
                                    i = Un(0, 1, u / (r - a)),
                                    m = (t.offsetHeight - La(t, s)) * i;
                                ((n.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (o.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    o.current.classList.add(ka),
                                                    void l.current.classList.remove(ka)
                                                );
                                            if (
                                                ((t = c.current),
                                                (n = d.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(ka),
                                                    void l.current.classList.add(ka)
                                                );
                                            var t, n;
                                            (o.current.classList.remove(ka), l.current.classList.remove(ka));
                                        }
                                    })(m));
                            }),
                            v = Zn(() => {
                                Ta(e, () => {
                                    (b(), f());
                                });
                            });
                        ((0, u.useEffect)(() => Gn(v)),
                            (0, u.useEffect)(() => {
                                const t = () => {
                                    Ta(e, () => {
                                        f();
                                    });
                                };
                                let n = Sa;
                                const a = () => {
                                    (n(), (n = Gn(v)));
                                };
                                return (
                                    e.events.on('recalculateContent', v),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        (n(),
                                            e.events.off('recalculateContent', v),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a));
                                    }
                                );
                            }, [e]),
                            (0, u.useEffect)(() => {
                                if (!E.pending) return;
                                const t = i.O.client.events.mouse.up(() => {
                                        p(xa);
                                    }),
                                    n = i.O.client.events.mouse.move(([t]) => {
                                        Ta(e, (n) => {
                                            const r = c.current,
                                                u = d.current,
                                                s = e.getContainerSize();
                                            if (!r || !u || !s) return;
                                            const o = t.screenY - E.offset - r.getBoundingClientRect().y,
                                                i = (o / r.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: u, thumbOffset: o, contentOffset: i }));
                                        });
                                    });
                                return () => {
                                    (t(), n());
                                };
                            }, [e, E.offset, E.pending, a, p]));
                        const A = qn((t) => e.applyStepTo(t), m, [e]),
                            F = A[0],
                            C = A[1];
                        (0, u.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const D = (e) => {
                            e.target.classList.contains(ka) || (0, Yn.G)('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: h()(Aa, t.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: h()(Ca, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ka) ||
                                        0 !== e.button ||
                                        ((0, Yn.G)('play'), F(ea.Next));
                                },
                                ref: o,
                                onMouseEnter: D,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: h()(Ba, t.track),
                                    onMouseDown: (t) => {
                                        const a = d.current;
                                        if (a && 0 === t.button)
                                            if (((0, Yn.G)('play'), t.target === a))
                                                p({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        Ta(e, (a) => {
                                                            if (!a) return;
                                                            const r = n(e),
                                                                u = e.clampPosition(a, a.scrollTop + r * t);
                                                            e.applyScroll(u);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? ea.Prev : ea.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: D,
                                },
                                s().createElement('div', { ref: d, className: h()(wa, t.thumb) }),
                                s().createElement('div', { className: h()(ya, t.rail) }),
                            ),
                            s().createElement('div', {
                                className: h()(Da, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ka) ||
                                        0 !== e.button ||
                                        ((0, Yn.G)('play'), F(ea.Prev));
                                },
                                onMouseUp: C,
                                ref: l,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    Ra = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Oa = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        scrollClassName: o,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, u.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: h()(Ra.base, e.base) });
                            }, [a]),
                            m = (0, u.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: h()(Ra.defaultScroll, n), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(Ra.area, r) },
                                s().createElement(Ma, { className: o, classNames: i, api: m }, e),
                            ),
                            s().createElement(Ia, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    Ma = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, u.useEffect)(() => Gn(a.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: h()(Ra.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(Ra.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                Ma.Default = Oa;
                const Pa = { Vertical: r, Horizontal: a },
                    Wa = ({
                        startRowIndex: e,
                        cellHeight: t,
                        paddingTop: n,
                        paddingBottom: a,
                        amount: r,
                        itemsAmountPerRow: u,
                        visibleRowsAmount: s,
                    }) => {
                        const o = Math.ceil(r / u) * t,
                            i = s * t,
                            l = e * t;
                        return { paddingTop: `${l + n}rem`, paddingBottom: `${Math.max(o - l - i, 0) + a}rem` };
                    },
                    Ha = (e) => {
                        const t = e.className,
                            n = e.children,
                            a = e.itemsAmountPerRow,
                            r = e.visibleRowsAmount,
                            u = e.startRowIndex,
                            o = e.amount,
                            i = u * a,
                            l = Math.min(r * a, o - i);
                        return s().createElement(
                            'div',
                            { className: t, style: Wa(e) },
                            Ie(l, (e) => n(i + e)),
                        );
                    },
                    $a = 'VirtualGrid_base_52',
                    ja = ({
                        amount: e,
                        cellWidth: t,
                        cellHeight: n,
                        children: a,
                        api: r,
                        classNames: o,
                        preloadedRows: l = 1,
                        paddingTop: c = 0,
                        paddingBottom: d = 0,
                    }) => {
                        const m = r.scrollApi,
                            _ = (0, u.useRef)(0),
                            E = (0, u.useState)(0),
                            g = E[0],
                            p = E[1],
                            b = (0, u.useState)(null),
                            f = b[0],
                            v = b[1],
                            A = (0, u.useState)(null),
                            F = A[0],
                            C = A[1];
                        return (
                            (0, u.useEffect)(() => {
                                const t = (t) => {
                                    if (!f) return;
                                    const a = Math.floor((i.O.view.pxToRem(t.value.scrollPosition) - c) / n + 1),
                                        u = Math.ceil(e / f),
                                        s = Math.max(0, Math.min(a - l, u));
                                    (p(s), r.startRowIndexChanged(s));
                                };
                                return (m.events.on('change', t), () => m.events.off('change', t));
                            }, [r, m, n, c, f, e, l]),
                            (0, u.useEffect)(() => {
                                const e = () => {
                                        if (m.contentRef.current) {
                                            const e = getComputedStyle(m.contentRef.current),
                                                a = m.contentRef.current.getBoundingClientRect(),
                                                u =
                                                    i.O.view.pxToRem(a.width) -
                                                    (parseFloat(e.paddingLeft) + parseFloat(e.paddingRight)),
                                                s = Math.floor(u / t),
                                                o = Math.ceil(i.O.view.pxToRem(a.height) / n) + 2 * l;
                                            ((_.current = s), v(s), C(o), r.layoutCalculated(s, o));
                                        }
                                    },
                                    a = () => {
                                        const t = _.current;
                                        (e(), r.scrollToIndex(g * t));
                                    };
                                return (
                                    m.events.on('recalculateContent', e),
                                    m.events.on('resizeHandled', a),
                                    () => {
                                        (m.events.off('recalculateContent', e), m.events.off('resizeHandled', a));
                                    }
                                );
                            }, [r, m, n, t, l, g]),
                            (0, u.useEffect)(() => {
                                const e = (e, t = !0) => {
                                    f && m.applyScroll(Math.floor(e / f) * n + c, { immediate: t });
                                };
                                return (r.events.on('scrollToIndex', e), () => r.events.off('scrollToIndex', e));
                            }, [r, n, f, c, m]),
                            s().createElement(
                                Pa.Vertical.Default,
                                {
                                    api: m,
                                    className: null == o ? void 0 : o.scroll,
                                    areaClassName: null == o ? void 0 : o.areaClassName,
                                    scrollClassName: null == o ? void 0 : o.scrollClassName,
                                    scrollClassNames: {
                                        content: null == o ? void 0 : o.content,
                                        wrapper: null == o ? void 0 : o.wrapper,
                                    },
                                },
                                null !== f &&
                                    null !== F &&
                                    s().createElement(
                                        Ha,
                                        {
                                            className: h()($a, null == o ? void 0 : o.inner),
                                            paddingBottom: d,
                                            paddingTop: c,
                                            amount: e,
                                            itemsAmountPerRow: f,
                                            visibleRowsAmount: F,
                                            startRowIndex: g,
                                            cellHeight: n,
                                        },
                                        a,
                                    ),
                            )
                        );
                    },
                    za = 'VirtualGridWithFade_scrollAreaFade_94',
                    Ga = ['api', 'children', 'classNames'];
                function Ua() {
                    return (
                        (Ua =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ua.apply(this, arguments)
                    );
                }
                const Va = (e) => {
                        let t = e.api,
                            n = e.children,
                            a = e.classNames,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, Ga);
                        const o = (0, u.useState)(!0),
                            i = o[0],
                            l = o[1],
                            c = t.scrollApi;
                        return (
                            (0, u.useEffect)(() => {
                                const e = () => {
                                    const e = c.getBounds()[1];
                                    l(Math.abs(e - c.animationScroll.scrollPosition.goal) > 0.1);
                                };
                                return (
                                    c.events.on('change', e),
                                    c.events.on('recalculateContent', e),
                                    () => {
                                        (c.events.off('change', e), c.events.off('recalculateContent', e));
                                    }
                                );
                            }, [c]),
                            s().createElement(
                                ja,
                                Ua(
                                    {
                                        api: t,
                                        classNames: Object.assign({}, a, {
                                            scrollClassName: h()(null == a ? void 0 : a.scrollClassName, i && za),
                                        }),
                                    },
                                    r,
                                ),
                                n,
                            )
                        );
                    },
                    Za = 'TankmanVirtualList_grid_41',
                    qa = ({
                        amount: e,
                        paddingTop: t = 11,
                        paddingBottom: n = 11,
                        api: a,
                        classNames: r,
                        children: u,
                    }) =>
                        s().createElement(
                            Va,
                            {
                                amount: e,
                                classNames: Object.assign({}, r, { content: h()(Za, null == r ? void 0 : r.content) }),
                                cellWidth: 318,
                                cellHeight: 265,
                                paddingTop: t,
                                paddingBottom: n,
                                api: a,
                            },
                            u,
                        );
                var Ya = n(5332);
                let Ka;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(Ka || (Ka = {}));
                const Xa = ({
                        children: e,
                        contentID: t,
                        decoratorID: n = 0,
                        targetId: a = 0,
                        args: r,
                        isEnabled: s = !0,
                        onMouseDown: o,
                    }) => {
                        const i = (0, u.useCallback)(() => {
                                ((0, M.c9)(M.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: r,
                                }),
                                    Yn.$.playYes());
                            }, [r, t, n, a]),
                            l = (0, u.useCallback)(() => {
                                (0, M.c9)(M.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, n, a]),
                            c = (0, u.useCallback)(
                                (e) => {
                                    (o && o(e), ((e) => e.button === Ka.RIGHT)(e) && i());
                                },
                                [o, i],
                            );
                        return (
                            (0, u.useEffect)(() => {
                                !1 === s && l();
                            }, [s, l]),
                            s ? (0, u.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Qa = ['children'];
                function Ja() {
                    return (
                        (Ja =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ja.apply(this, arguments)
                    );
                }
                const er = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, Qa);
                    return s().createElement(
                        Xa,
                        Ja({}, n, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                var tr = n(514);
                const nr = 'MainActionButton_base_98',
                    ar = ['tooltipArgs', 'className', 'children', 'onClick'];
                function rr() {
                    return (
                        (rr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        rr.apply(this, arguments)
                    );
                }
                const ur = s().memo((e) => {
                        let t = e.tooltipArgs,
                            n = e.className,
                            a = e.children,
                            r = e.onClick,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, ar);
                        return s().createElement(
                            xt.l,
                            { tooltipArgs: t },
                            s().createElement(
                                ee.u5,
                                rr(
                                    {
                                        size: ee.qE.small,
                                        mixClass: h()(nr, n),
                                        onClick: (e) => {
                                            r && (e.stopPropagation(), r(e));
                                        },
                                    },
                                    u,
                                ),
                                a,
                            ),
                        );
                    }),
                    sr = 'VoiceOverButton_base_f9',
                    or = 'VoiceOverButton_soundIcon_c9',
                    ir = s().memo(({ onClick: e }) =>
                        s().createElement(
                            te.i,
                            {
                                header: R.strings.crew.tankman.action.voiceover.tooltip.title(),
                                body: R.strings.crew.tankman.action.voiceover.tooltip.body(),
                            },
                            s().createElement(
                                ee.u5,
                                {
                                    size: ee.qE.small,
                                    mixClass: sr,
                                    type: ee.L$.secondary,
                                    onClick: (t) => {
                                        e && (t.stopPropagation(), e(t));
                                    },
                                },
                                s().createElement('div', { className: or }),
                            ),
                        ),
                    ),
                    lr = ({ className: e }) => s().createElement('div', { className: h()(jn.base, e) }),
                    cr = {
                        base: 'BarracksTankmanCard_base_15',
                        base__default: 'BarracksTankmanCard_base__default_de',
                        separator: 'BarracksTankmanCard_separator_20',
                        icon: 'BarracksTankmanCard_icon_43',
                        actionBtn: 'BarracksTankmanCard_actionBtn_a6',
                    },
                    dr = R.strings.crew.tankman.action,
                    mr = { body: dr.dismiss.tooltip.available.body() },
                    _r = {
                        body: dr.dismiss.tooltip.unavailable.body(),
                        header: dr.dismiss.tooltip.unavailable.title(),
                    },
                    Er = { body: dr.restore.tooltip.body() },
                    gr = dr.dismiss.title(),
                    pr = dr.restore.title(),
                    hr = dr.recruit.title(),
                    br = { body: R.strings.crew.tankmanList.tooltip.recruit.body() },
                    fr = (0, H.Pi)(({ index: e, onLazyLoad: t }) => {
                        const n = Q(),
                            a = n.model,
                            r = n.controls,
                            o = a.computes.getItem(e);
                        if (
                            ((0, u.useEffect)(() => {
                                o || t();
                            }, [t, o]),
                            !o)
                        )
                            return s().createElement(lr, { className: cr.base });
                        const i = o.location,
                            l = o.tankmanKind === he.Recruit,
                            c = o.cardState === be.Disabled,
                            d = (e) => {
                                o &&
                                    (o.tankmanKind === he.Recruit
                                        ? r.recruitTankman(o.recruitID)
                                        : o.location === pe.Dismissed
                                          ? r.restoreTankman(o.tankmanID)
                                          : e(o.tankmanID));
                            },
                            m = ((e, t, n) => {
                                const a = t ? _r : mr;
                                switch (e) {
                                    case pe.InBarracks:
                                        return [n ? hr : gr, n ? br : a];
                                    case pe.InTank:
                                        return [gr, a];
                                    case pe.Dismissed:
                                    default:
                                        return [pr, Er];
                                }
                            })(i, o.isMainActionDisabled, l),
                            _ = m[0],
                            E = m[1];
                        return s().createElement(
                            er,
                            {
                                isEnabled: !l && i !== pe.Dismissed && o.cardState !== be.Disabled,
                                args: { type: 'crewTankman', tankmanID: o.tankmanID },
                            },
                            s().createElement(zn, {
                                tankman: o,
                                className: h()(cr.base, cr[`base__${o.cardState}`]),
                                classNames: { icon: cr.icon, separator: cr.separator },
                                actions: s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        ur,
                                        {
                                            tooltipArgs: E,
                                            onClick: () => d(r.dismissTankman),
                                            disabled: o.isMainActionDisabled,
                                            className: cr.actionBtn,
                                        },
                                        _,
                                    ),
                                    o.hasVoiceover &&
                                        l &&
                                        s().createElement(ir, {
                                            onClick: () => o && r.playRecruitVoiceover(o.recruitID),
                                        }),
                                ),
                                onMouseEnter: () => {
                                    (o.isNew && r.hoverNewTankman(e, o.recruitID),
                                        c || (tr.hY.highlight(), tr.hY.sound(ne.gO.SHOP_INFO)));
                                },
                                onClick: () => !c && d(r.selectTankman),
                            }),
                        );
                    }),
                    vr = 'BarracksTankmanList_base_d7',
                    Ar = 'BarracksTankmanList_gridWrapper_0b',
                    Fr = 'BarracksTankmanList_emptyState_1c',
                    Cr = R.strings.crew.tankmanList.emptyState,
                    Dr = (e) => (e ? ne.Xd : { body: R.strings.crew.tankmanList.tooltip.recruit.body() }),
                    Br = (0, H.Pi)(() => {
                        const e = Q(),
                            t = e.model,
                            n = e.controls,
                            a = (() => {
                                const e = Pa.Vertical.useVerticalScrollApi(),
                                    t = Qn(),
                                    n = (0, u.useCallback)((e, n = !0) => t.trigger('scrollToIndex', e, n), [t]),
                                    a = (0, u.useCallback)((e, n) => t.trigger('layoutCalculated', e, n), [t]),
                                    r = (0, u.useCallback)((e) => t.trigger('startRowIndexChanged', e), [t]);
                                return (0, u.useMemo)(
                                    () => ({
                                        scrollToIndex: n,
                                        layoutCalculated: a,
                                        startRowIndexChanged: r,
                                        scrollApi: e,
                                        events: { off: t.off, on: t.on },
                                    }),
                                    [n, a, r, e, t.off, t.on],
                                );
                            })(),
                            r = t.hasFilters.get(),
                            o = t.itemsAmount.get(),
                            i = ((e, t) => {
                                const n = (0, u.useRef)([0, 0]),
                                    a = (0, u.useRef)(0),
                                    r = (0, u.useRef)([0, !0]);
                                return (
                                    (0, u.useEffect)(() => {
                                        const e = (e, t) => {
                                                n.current = [e, t];
                                            },
                                            u = (e) => {
                                                a.current = e;
                                            },
                                            s = (e) => {
                                                const t = r.current[0];
                                                r.current = [e.value.scrollPosition, t < e.value.scrollPosition];
                                            };
                                        return (
                                            t.scrollApi.events.on('change', s),
                                            t.events.on('layoutCalculated', e),
                                            t.events.on('startRowIndexChanged', u),
                                            () => {
                                                (t.scrollApi.events.off('change', s),
                                                    t.events.off('layoutCalculated', e),
                                                    t.events.off('startRowIndexChanged', u));
                                            }
                                        );
                                    }, [t]),
                                    (0, Ya.N)(
                                        () => {
                                            const t = n.current,
                                                u = t[0],
                                                s = t[1],
                                                o = a.current * u,
                                                i = u * s;
                                            e(2 * i, r.current[1] ? o : Math.max(o - 1 * i, 0));
                                        },
                                        [],
                                        10,
                                    )
                                );
                            })(n.loadCards, a);
                        return s().createElement(
                            'div',
                            { className: vr },
                            o > 0
                                ? s().createElement(
                                      'div',
                                      { className: Ar },
                                      s().createElement(qa, { amount: o, api: a }, (e) =>
                                          s().createElement(fr, { key: e, index: e, onLazyLoad: i }),
                                      ),
                                  )
                                : s().createElement(
                                      me,
                                      {
                                          warningText: r ? Cr.noFilteredItems() : Cr.noItems(),
                                          buttonType: r ? J.L.secondary : J.L.primary,
                                          tooltipArgs: Dr(r),
                                          onClick: n.resetFilters,
                                          className: Fr,
                                      },
                                      !!r && Cr.button.resetFilers(),
                                  ),
                        );
                    }),
                    wr = 'ButtonWithDiscountIndicator_base_6c',
                    yr = 'ButtonWithDiscountIndicator_discountIndicator_a5',
                    kr = 'ButtonWithDiscountIndicator_discountIndicator__small_d6',
                    Sr = ['hasDiscount', 'className', 'children', 'wrapperId', 'isSmall'];
                const xr = s().memo(function (e) {
                        let t = e.hasDiscount,
                            n = e.className,
                            a = e.children,
                            r = e.wrapperId,
                            u = e.isSmall,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, Sr);
                        return s().createElement(
                            'div',
                            { id: r, className: h()(wr, n) },
                            s().createElement(ee.u5, o, a),
                            t && s().createElement('div', { className: h()(yr, u && kr) }),
                        );
                    }),
                    Nr = {
                        base: 'ListHeader_base_ad',
                        title: 'ListHeader_title_a8',
                        base__memberChange: 'ListHeader_base__memberChange_c2',
                        base__tankChange: 'ListHeader_base__tankChange_fb',
                        base__personalData: 'ListHeader_base__personalData_aa',
                    };
                let Tr;
                !(function (e) {
                    ((e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData'));
                })(Tr || (Tr = {}));
                const Lr = ({ title: e, theme: t = Tr.Barracks, className: n, classNames: a, children: r }) =>
                    s().createElement(
                        'div',
                        { className: h()(Nr.base, Nr[`base__${t}`], n) },
                        s().createElement('div', { className: h()(Nr.title, null == a ? void 0 : a.title) }, e),
                        r,
                    );
                var Ir = n(9197);
                const Rr = 'Header_base_4b',
                    Or = 'Header_berthsAmount_12',
                    Mr = 'Header_button_f1';
                function Pr() {
                    return (
                        (Pr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Pr.apply(this, arguments)
                    );
                }
                const Wr = (e) =>
                        e
                            ? { contentId: R.views.lobby.crew.tooltips.BunksConfirmDiscountTooltip('resId') }
                            : {
                                  header: R.strings.crew.barracks.tooltip.enlarge.header(),
                                  body: R.strings.crew.barracks.tooltip.enlarge.body(),
                              },
                    Hr = (0, H.Pi)(() => {
                        const e = Q(),
                            t = e.model,
                            n = e.controls,
                            a = t.isBerthsOnSale.get();
                        return s().createElement(
                            Lr,
                            { title: R.strings.crew.barracks.title() },
                            s().createElement(
                                'div',
                                { className: Rr },
                                s().createElement(
                                    Ir.C,
                                    Pr({ title: R.strings.crew.barracks.bunks.title() }, t.berthsAmount.get(), {
                                        className: Or,
                                    }),
                                ),
                                s().createElement(
                                    xt.l,
                                    { tooltipArgs: Wr(a) },
                                    s().createElement(
                                        xr,
                                        {
                                            size: ee.qE.small,
                                            type: ee.L$.ghost,
                                            mixClass: Mr,
                                            onClick: n.buyBerth,
                                            disabled: !1,
                                            hasDiscount: a,
                                        },
                                        R.strings.crew.barracks.action.enlarge(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    $r = 'BarracksApp_base_b7',
                    jr = 'BarracksApp_content_a3',
                    zr = 'BarracksApp_content__withBanner_3d',
                    Gr = 'BarracksApp_conversionBanner_b4',
                    Ur = (0, H.Pi)(() => {
                        const e = Q(),
                            t = e.controls,
                            n = e.model,
                            a = C().mediaSize,
                            r = n.isBannerVisible.get();
                        var u;
                        return (
                            (u = t.showHangar),
                            W(O.n.ESCAPE, u),
                            s().createElement(
                                'div',
                                { className: $r },
                                s().createElement(
                                    'div',
                                    { className: h()(jr, r && zr) },
                                    s().createElement(Hr, null),
                                    s().createElement(j.p, { popoverDirection: a < v.Large ? I.IC.Left : I.IC.Bottom }),
                                    s().createElement(Br, null),
                                ),
                                r && s().createElement($.d, { className: Gr }),
                            )
                        );
                    });
                engine.whenReady
                    .then(() => {
                        L().render(
                            s().createElement(X, null, s().createElement(N, null, s().createElement(Ur, null))),
                            document.getElementById('root'),
                        );
                    })
                    .then(() => i.O.view.enableFullScreenModeSupported())
                    .then(() => i.O.view.initExternalPaddings(document.getElementById('root')));
            },
            9367: (e, t, n) => {
                'use strict';
                n.d(t, { Q: () => d });
                var a = n(6483),
                    r = n.n(a),
                    u = n(9987),
                    s = n(7363),
                    o = n.n(s);
                const i = 'AlertCounter_base_f3',
                    l = 'AlertCounter_counter_da',
                    c = 'AlertCounter_label_18',
                    d = ({ value: e, className: t }) =>
                        o().createElement(
                            'div',
                            { className: r()(i, t) },
                            o().createElement(u.A, { value: e, className: l }),
                            !e && o().createElement('div', { className: c }, R.strings.crew.common.exclamationMark()),
                        );
            },
            9197: (e, t, n) => {
                'use strict';
                n.d(t, { C: () => h });
                var a = n(6483),
                    r = n.n(a),
                    u = n(7363),
                    s = n.n(u);
                const o = 'NumberRange_base_5e',
                    i = 'NumberRange_base__animation_79',
                    l = 'NumberRange_from_70',
                    c = 'NumberRange_from__red_f8',
                    d = 'NumberRange_separator_c0',
                    m = s().memo(function ({ from: e, to: t, className: n }) {
                        return s().createElement(
                            'div',
                            { className: r()(o, e <= 0 && i, n) },
                            s().createElement('div', { className: r()(l, e <= 0 && t > 0 && c) }, e),
                            e !== t &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: d }, '/'),
                                    s().createElement('div', null, t),
                                ),
                        );
                    }),
                    _ = 'NumberRangeWithLabel_base_2b',
                    E = 'NumberRangeWithLabel_title_94',
                    g = 'NumberRangeWithLabel_counter_00',
                    p = 'NumberRangeWithLabel_counterGlow_1f',
                    h = ({ title: e, isGlowVisible: t = !1, className: n, classNames: a, from: o, to: i }) => {
                        const l = (0, u.useMemo)(
                            () => ({
                                left: o !== i ? 7 * String(o).length + 4 : Math.round((7 * String(o).length) / 2),
                            }),
                            [o, i],
                        );
                        return s().createElement(
                            'div',
                            { className: r()(_, n) },
                            s().createElement('div', { className: E }, e),
                            s().createElement(
                                'div',
                                { className: g },
                                s().createElement(m, { from: o, to: i }),
                                t &&
                                    s().createElement('div', {
                                        style: l,
                                        className: r()(p, null == a ? void 0 : a.counterGlow),
                                    }),
                            ),
                        );
                    };
            },
            9631: (e, t, n) => {
                'use strict';
                n.d(t, { C: () => _ });
                var a = n(6483),
                    r = n.n(a),
                    u = n(3457),
                    s = n(2106),
                    o = n(9987),
                    i = n(7363),
                    l = n.n(i),
                    c = n(4723);
                const d = ['isActive', 'counter', 'className', 'children', 'type', 'size', 'hasIndicator'];
                function m() {
                    return (
                        (m =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                }
                const _ = l().memo(function (e) {
                    let t = e.isActive,
                        n = e.counter,
                        a = e.className,
                        i = e.children,
                        _ = e.type,
                        E = void 0 === _ ? s.L.secondary : _,
                        g = e.size,
                        p = void 0 === g ? s.q.small : g,
                        h = e.hasIndicator,
                        b = void 0 === h || h,
                        f = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, d);
                    return l().createElement(
                        'div',
                        { className: r()(c.Z.base, a, t && c.Z.base__active) },
                        l().createElement(u.u5, m({ type: E, size: p, mixClass: c.Z.button }, f), i),
                        l().createElement('div', { className: c.Z.overlay }),
                        b && l().createElement('div', { className: c.Z.indicator }),
                        Boolean(n) &&
                            l().createElement(
                                'div',
                                { className: c.Z.counter },
                                l().createElement(o.A, { value: n, size: 'small' }),
                            ),
                    );
                });
            },
            8018: (e, t, n) => {
                'use strict';
                n.d(t, { H$: () => o, Xd: () => u, Y4: () => i, gO: () => s });
                var a = n(771);
                n(3649);
                (R.strings.common.percentValue(), R.strings.common.plusPercentValue());
                let r;
                !(function (e) {
                    ((e.Objective = 'objective'), (e.Possessive = 'possessive'));
                })(r || (r = {}));
                const u = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let s;
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
                })(s || (s = {}));
                let o;
                !(function (e) {
                    ((e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained'));
                })(o || (o = {}));
                const i = (e) => (e === a.sU ? o.Untrained : e < a.yb ? o.Low : o.Normal);
            },
            3880: (e, t, n) => {
                'use strict';
                n.d(t, { d: () => he });
                var a = n(7363),
                    r = n.n(a),
                    u = n(6483),
                    s = n.n(u),
                    o = n(3457);
                let i, l;
                (!(function (e) {
                    ((e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none'));
                })(i || (i = {})),
                    (function (e) {
                        ((e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended'));
                    })(l || (l = {})));
                var c = n(7044),
                    d = n(2344),
                    m = n(3112),
                    _ = n(3649);
                const E = 'Countdown_base_fe',
                    g = 'Countdown_icon_8b',
                    p = 'Countdown_description_8d',
                    h = (e) => e.toString().padStart(2, '0'),
                    b = R.images.gui.maps.icons.components.countdown,
                    f = (e, t) => {
                        const n = 2 === t ? b.big : b;
                        switch (e) {
                            case i.Timer:
                                return n.clock();
                            case i.Countdown:
                                return n.hourglass();
                            case i.Cooldown:
                                return n.lock();
                        }
                    },
                    v = (0, a.memo)(
                        ({
                            duration: e,
                            icon: t = i.Timer,
                            style: n = l.Description,
                            onTimeReached: a,
                            refreshRate: u,
                            className: o = '',
                            classNames: b = {},
                        }) => {
                            const v = null != u ? u : n !== l.Description ? 1 : void 0,
                                A = (0, d.au)(e, v),
                                F = (0, m.V)();
                            a && a[A] && a[A]();
                            const C = ((e, t) => {
                                switch (t) {
                                    case l.Description:
                                        return (0, c.wB)(e);
                                    case l.Short:
                                        return `${h(e.minutes)}:${h(e.seconds)}`;
                                    case l.Long:
                                        return `${h(e.hours)}:${h(e.minutes)}:${h(e.seconds)}`;
                                    case l.Extended:
                                        return `${(0, _.WU)(R.strings.common.duration.days(), { days: e.days })} | ${h(e.hours)}:${h(e.minutes)}:${h(e.seconds)}`;
                                }
                            })((0, c.f8)(A), n);
                            return r().createElement(
                                'div',
                                { className: s()(E, o) },
                                t !== i.None &&
                                    r().createElement('div', {
                                        className: s()(g, b.icon),
                                        style: { backgroundImage: `url('${f(t, F)}')` },
                                    }),
                                r().createElement('div', { className: s()(p, b.text) }, C),
                            );
                        },
                    );
                var A = n(6373),
                    F = n(3403),
                    C = n(3415),
                    D = n(8045);
                const B = {
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
                let w, y, k;
                (!(function (e) {
                    ((e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding'));
                })(w || (w = {})),
                    (function (e) {
                        ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
                    })(y || (y = {})),
                    (function (e) {
                        ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
                    })(k || (k = {})));
                const S = { [k.NBSP]: w.NoBreakSymbol, [k.ZWNBSP]: w.NoBreakSymbol, [k.NEW_LINE]: w.LineBreak },
                    x = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    N = {
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
                    },
                    T = 'renderers_noBreakWrapper_10',
                    L = 'renderers_lineBreak_b5',
                    I = 'renderers_newLine_bd',
                    O = 'renderers_word_f3',
                    M = (e) => ({ color: `#${e}` }),
                    P = ({ elementList: e, textBlock: t, key: n }) => {
                        const a = t.colorTag;
                        return a
                            ? N[a]
                                ? r().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: s()(O, N[a]) },
                                      e,
                                  )
                                : r().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: O, style: M(a) },
                                      e,
                                  )
                            : r().createElement('span', { key: n, 'data-block-type': t.blockType, className: O }, e);
                    },
                    W = {
                        [w.Word]: P,
                        [w.NoBreakSymbol]: P,
                        [w.Binding]: ({ elementList: e, textBlock: t, key: n }) =>
                            r().createElement(
                                'span',
                                { key: n, 'data-block-type': t.blockType },
                                e.map((e) => r().createElement(r().Fragment, { key: n }, e)),
                            ),
                        [w.LineBreak]: ({ key: e }) =>
                            r().createElement('span', { key: e, 'data-block-type': w.LineBreak, className: L }),
                        [w.NewLine]: ({ elementList: e, key: t }) =>
                            r().createElement('span', { key: t, 'data-block-type': w.NewLine, className: I }, e),
                        [w.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            r().createElement('span', { key: t, 'data-block-type': w.NoBreakWrapper, className: T }, e),
                    },
                    H = (e, t, n) => {
                        const a = [];
                        return (
                            e.childList.forEach((r, u) => {
                                const s = `${n}_${u}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        t = e.blockType,
                                        n = H(e, W[t], s);
                                    a.push(...n);
                                } else a.push(t({ elementList: [r], textBlock: e, key: s }));
                            }),
                            a
                        );
                    },
                    $ = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, n) => {
                                t.push(
                                    ...((e, t) => {
                                        const n = [],
                                            a = e.blockType,
                                            r = W[a],
                                            u = H(e, r, t);
                                        return (
                                            a === w.NoBreakWrapper
                                                ? n.push(r({ elementList: u, textBlock: e, key: `${t}` }))
                                                : n.push(...u),
                                            n
                                        );
                                    })(e, n),
                                );
                            }),
                            t
                        );
                    },
                    j = (e, t, n, a) => {
                        let r = t.exec(e),
                            u = 0;
                        for (; r; ) (u !== r.index && n(e.slice(u, r.index)), a(r), (u = t.lastIndex), (r = t.exec(e)));
                        u !== e.length && n(e.slice(u));
                    },
                    z = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    G = (e) => {
                        const t = [];
                        return (
                            j(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var n;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? t.push(...((n = e), n.match(z) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    U = x
                        ? (e) => {
                              const t = [];
                              return (
                                  j(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(...G(e[0]));
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e, t) => {
                              const n = /[\s\u002d]/g;
                              let a = n.exec(e);
                              if (!a) return [e];
                              const r = [];
                              let u = 0;
                              for (; a; ) {
                                  const s = t.justifyContent === y.FlexEnd ? a.index : n.lastIndex;
                                  (r.push(e.slice(u, s)), (u = s), (a = n.exec(e)));
                              }
                              return (u !== e.length && r.push(e.slice(u)), r);
                          },
                    V = (e, t = '', n) => {
                        const a = [];
                        return (
                            j(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    a.push({ blockType: w.Word, colorTag: t, childList: U(e, n) });
                                },
                                (e) => {
                                    const n = e[0],
                                        r = S[n.charAt(0)];
                                    r === w.LineBreak
                                        ? a.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: w.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let n = 0; n < e.length - 1; n++)
                                                      t.push({
                                                          blockType: w.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(n),
                                          )
                                        : a.push({ blockType: r, colorTag: t, childList: [n.replace(/\ufeff+/g, '')] });
                                },
                            ),
                            a
                        );
                    },
                    Z = (e, t, n = '', a) => {
                        const r = [],
                            u = e.replace(/(.)(、|。|ー)/g, '$1\ufeff$2');
                        return (
                            j(
                                u,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...V(e, n, a));
                                },
                                (e) => {
                                    const u = e[1],
                                        s = void 0 === t[u] ? e[0] : t[u];
                                    'string' == typeof s || 'number' == typeof s
                                        ? r.push(...V(String(s), n, a))
                                        : r.push({ blockType: w.Binding, colorTag: n, childList: [s] });
                                },
                            ),
                            r
                        );
                    },
                    q = (e, t) => {
                        if (!e) return [t];
                        const n = [],
                            a = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === w.NoBreakWrapper) (e.childList.push(a), n.push(e));
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            (e.childList.length > 0 && n.push(e),
                                n.push({ blockType: w.NoBreakWrapper, colorTag: '', childList: [t, a] }));
                        }
                        return (t.childList.length > 0 && n.push(t), n);
                    },
                    Y = (e, t = {}, n) => {
                        if (!e) return [];
                        const a = ((e) => {
                            const t = [];
                            let n = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === w.NoBreakSymbol
                                        ? ((n = !0), t.push(...q(t.pop(), e)))
                                        : (n ? t.push(...q(t.pop(), e)) : t.push(e), (n = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, n) => {
                                const a = [];
                                return (
                                    j(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            a.push(...Z(e, t, '', n));
                                        },
                                        (e) => {
                                            a.push(...Z(e[2] + e[3], t, e[1], n));
                                        },
                                    ),
                                    a
                                );
                            })((0, _.Eg)((0, _.z4)(e)), t, n),
                        );
                        return $(a);
                    },
                    K = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    X = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    Q = (e, t, n) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const a = X(e, t),
                            r = e.textContent.length,
                            u = e.offsetWidth / r,
                            s = Math.ceil(a / u);
                        if (a > 0) {
                            const a = Math.floor((t - e.offsetLeft) / u);
                            return a >= n ? [!0, n + s] : [!1, a];
                        }
                        const o = Math.max(n + s, 0);
                        return r < o ? [!1, 0] : [!0, o];
                    },
                    J = (e, t, n, a, u, s) => {
                        let o = -1,
                            i = null;
                        for (let l = n; l >= 0; l--) {
                            const n = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === w.LineBreak || c === w.NewLine || c === w.Binding) continue;
                            const d = n.textContent || '';
                            if (!(n.childElementCount > 1)) {
                                const e = Q(n, a, u),
                                    c = e[0],
                                    m = e[1];
                                if (!c) {
                                    m > 0 && (u -= m);
                                    continue;
                                }
                                const _ = d.slice(0, d.length - m) + s,
                                    E = t[l];
                                ((i = r().cloneElement(E, E.props, _)), (o = l));
                                break;
                            }
                            {
                                const e = n.children,
                                    c = t[l],
                                    m = c.props.children,
                                    _ = J(e, m, e.length - 1, a, u, s),
                                    E = _[0],
                                    g = _[1];
                                if (!(E < 0)) {
                                    const e = m.slice(0, E);
                                    ((i = r().cloneElement(c, c.props, e, g)), (o = l));
                                    break;
                                }
                                u -= d.length;
                            }
                        }
                        return [o, i];
                    },
                    ee = (e, t, n, a = '...') => {
                        const r = [...t],
                            u = e.current;
                        if (!u) return [r, !1];
                        const s = n.height,
                            o = n.width,
                            i = u.lastElementChild;
                        if (!K(i, s) && X(i, o) <= 0) return [r, !1];
                        const l = u.children,
                            c = ((e, t) => {
                                let n = 0,
                                    a = e.length - 1;
                                for (; a - n >= 0; ) {
                                    const r = n + Math.ceil(0.5 * (a - n));
                                    K(e[r], t) ? (a = r - 1) : (n = r + 1);
                                }
                                return n - 1;
                            })(l, s);
                        if (c < 0) return [r, !1];
                        const d = J(l, r, c, o, a.length, a),
                            m = d[0],
                            _ = d[1];
                        return (_ && (r.splice(m, 1, _), r.splice(m + 1)), [r, !0]);
                    },
                    te = r().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: n,
                            binding: u,
                            isTooltipEnable: o = !1,
                            isTruncationAvailable: i = !1,
                            customTooltipArgs: l,
                            targetId: c,
                            justifyContent: d = y.FlexStart,
                            alignContent: m = y.FlexStart,
                            truncateIdentify: _ = '...',
                        }) => {
                            const E = (0, a.useRef)(null),
                                g = (0, a.useRef)({ height: 0, width: 0 }),
                                p = (0, a.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                h = p[0],
                                b = p[1],
                                f = (0, a.useMemo)(() => Y(e, u, { justifyContent: d }), [u, d, e]),
                                v = (0, a.useMemo)(() => {
                                    if (
                                        o &&
                                        h.isTruncated &&
                                        (!u || !Object.values(u).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, l, {
                                                stringifyKwargs: u ? JSON.stringify(u) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: c,
                                        };
                                }, [u, o, c, e, l, h.isTruncated]),
                                A = (0, a.useCallback)(
                                    (e) => {
                                        ((g.current.width = e.contentRect.width),
                                            (g.current.height = e.contentRect.height));
                                        const t = ee(E, f, g.current, _),
                                            a = t[0],
                                            r = t[1];
                                        (b({ elementList: a, isTruncated: r, isTruncateFinished: !0 }), n && n(r));
                                    },
                                    [n, _, f],
                                ),
                                F = (0, a.useMemo)(() => ({ justifyContent: d, alignContent: m }), [m, d]);
                            return (
                                ((e, t, n = !0) => {
                                    const r = (0, a.useCallback)(
                                        (e) => {
                                            const n = e[0];
                                            t && t(n);
                                        },
                                        [t],
                                    );
                                    (0, a.useEffect)(() => {
                                        if (!e.current || !n) return;
                                        const t = new D.Z((e) => r(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [r, n, e]);
                                })(E, A, i),
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            B.base,
                                            t,
                                            B.base__zeroPadding,
                                            i && B.base__isTruncationAvailable,
                                        ),
                                        style: F,
                                    },
                                    r().createElement('div', { className: B.unTruncated, ref: E }, f),
                                    r().createElement(
                                        C.l,
                                        {
                                            tooltipArgs: v,
                                            className: s()(
                                                B.tooltip,
                                                B[`tooltip__justify-${d}`],
                                                B[`tooltip__align-${m}`],
                                            ),
                                        },
                                        r().createElement(
                                            'div',
                                            {
                                                className: s()(
                                                    B.truncated,
                                                    !h.isTruncateFinished && i && B.truncated__hide,
                                                ),
                                                style: F,
                                            },
                                            h.isTruncateFinished && i ? h.elementList : f,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                var ne = n(5332);
                const ae = (0, n(3215).q3)()(
                        ({ observableModel: e }) =>
                            Object.assign({}, e.primitives(['secondsLeft', 'isFillDisabled', 'isResetDisabled'])),
                        ({ externalModel: e }) => ({
                            fill: e.createCallbackNoArgs('onFill'),
                            reset: e.createCallbackNoArgs('onReset'),
                        }),
                    ),
                    re = ae[0],
                    ue = ae[1],
                    se = 'CrewBannerWidgetApp_base_d8',
                    oe = 'CrewBannerWidgetApp_background_08',
                    ie = 'CrewBannerWidgetApp_base__hovered_d3',
                    le = 'CrewBannerWidgetApp_backgroundImage_4d',
                    ce = 'CrewBannerWidgetApp_text_75',
                    de = 'CrewBannerWidgetApp_countdown_43',
                    me = 'CrewBannerWidgetApp_button_7b',
                    _e = 'CrewBannerWidgetApp_buttonText_13',
                    Ee = R.strings.crew.crewBanner,
                    ge = (0, F.Pi)(({ className: e }) => {
                        const t = ue(),
                            n = t.model,
                            u = t.controls,
                            c = n.isFillDisabled.get(),
                            d = n.isResetDisabled.get(),
                            m = ((e, t, n = 150) => {
                                const r = (0, a.useState)(e),
                                    u = r[0],
                                    s = r[1],
                                    o = (0, ne.N)((e) => s(e), t, n);
                                return {
                                    isHovered: u,
                                    handleMouseEnter: (0, a.useCallback)(() => o(!0), [o]),
                                    handleMouseLeave: (0, a.useCallback)(() => o(!1), [o]),
                                };
                            })(!1, [], 0),
                            _ = m.isHovered,
                            E = m.handleMouseEnter,
                            g = m.handleMouseLeave;
                        return r().createElement(
                            'div',
                            { className: s()(se, _ && ie, e), onMouseEnter: c && d ? void 0 : E, onMouseLeave: g },
                            r().createElement('div', { className: oe }, r().createElement('div', { className: le })),
                            r().createElement(te, { text: Ee.infoText(), classMix: ce, justifyContent: y.FlexEnd }),
                            r().createElement(v, {
                                className: de,
                                duration: n.secondsLeft.get(),
                                icon: i.Timer,
                                style: l.Extended,
                            }),
                            r().createElement(
                                A.i,
                                {
                                    ignoreMouseClick: !0,
                                    header: c
                                        ? Ee.button.fill.tooltip.disable.header()
                                        : Ee.button.fill.tooltip.enable.header(),
                                    body: c
                                        ? Ee.button.fill.tooltip.disable.body()
                                        : Ee.button.fill.tooltip.enable.body(),
                                },
                                r().createElement(
                                    'div',
                                    null,
                                    r().createElement(
                                        o.u5,
                                        { mixClass: me, disabled: c, onClick: u.fill },
                                        r().createElement('div', { className: _e }, Ee.button.fill.label()),
                                    ),
                                ),
                            ),
                            r().createElement(
                                A.i,
                                {
                                    ignoreMouseClick: !0,
                                    header: d
                                        ? Ee.button.reset.tooltip.disable.header()
                                        : Ee.button.reset.tooltip.enable.header(),
                                    body: d
                                        ? Ee.button.reset.tooltip.disable.body()
                                        : Ee.button.reset.tooltip.enable.body(),
                                },
                                r().createElement(
                                    'div',
                                    null,
                                    r().createElement(
                                        o.u5,
                                        { mixClass: me, disabled: d, type: o.L$.secondary, onClick: u.reset },
                                        r().createElement('div', { className: _e }, Ee.button.reset.label()),
                                    ),
                                ),
                            ),
                        );
                    }),
                    pe = { rootId: R.views.lobby.crew.widgets.CrewBannerWidget('resId') },
                    he = (0, a.memo)((e) => r().createElement(re, { options: pe }, r().createElement(ge, e)));
            },
            5801: (e, t, n) => {
                'use strict';
                n.d(t, { p: () => Ne });
                var a = n(7363),
                    r = n.n(a),
                    u = n(6483),
                    s = n.n(u),
                    o = n(2106),
                    i = n(6373);
                let l;
                !(function (e) {
                    ((e.Default = 'default'),
                        (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData'));
                })(l || (l = {}));
                var c = n(3403),
                    d = n(3415),
                    m = n(9480),
                    _ = n(9631);
                const E = 'FilterTitle_base_a7',
                    g = 'FilterTitle_label_05',
                    p = 'FilterTitle_discount_42',
                    h = 'FilterTitle_discountIcon_30',
                    b = ({ label: e, hasDiscount: t, className: n }) =>
                        r().createElement(
                            'div',
                            { className: s()(E, n) },
                            r().createElement('div', { className: g }, e),
                            t && r().createElement('div', { className: p }, r().createElement('div', { className: h })),
                        );
                let f;
                !(function (e) {
                    ((e.Default = 'default'),
                        (e.Nation = 'nation'),
                        (e.Location = 'location'),
                        (e.TankmanRole = 'tankmanRole'),
                        (e.TankmanKind = 'tankmanKind'),
                        (e.VehicleGrade = 'vehicleGrade'),
                        (e.VehicleTier = 'vehicleTier'),
                        (e.VehicleType = 'vehicleType'),
                        (e.PersonalDataType = 'personalDataType'),
                        (e.VehicleCD = 'vehicle'));
                })(f || (f = {}));
                var v = n(3649);
                const A = 'ToggleIcon_base_59',
                    F = 'ToggleIcon_base__small_3e',
                    C = 'ToggleIcon_icon_e7',
                    D = r().memo(function ({ icon: e, isSmall: t = !1, classNames: n }) {
                        return r().createElement(
                            'div',
                            { className: s()(A, t && F) },
                            r().createElement('div', {
                                className: s()(C, null == n ? void 0 : n.icon),
                                style: { backgroundImage: `url(${e})` },
                            }),
                        );
                    });
                var B = n(9690);
                const w = 'VehicleTier_base_9c',
                    y = 'VehicleTier_base__small_fc',
                    k = ({ level: e, isSmall: t = !1 }) =>
                        r().createElement('div', { className: s()(w, t && y) }, (0, B.HG)(e)),
                    S = {
                        icon__vehicleType: 'ToggleButtonIcon_icon__vehicleType_83',
                        icon__nation: 'ToggleButtonIcon_icon__nation_c1',
                        icon__vehicleGradePrimary: 'ToggleButtonIcon_icon__vehicleGradePrimary_d6',
                        icon__tankmanRole: 'ToggleButtonIcon_icon__tankmanRole_4b',
                        icon__selected: 'ToggleButtonIcon_icon__selected_ca',
                        icon__tankmanKind: 'ToggleButtonIcon_icon__tankmanKind_5e',
                        icon__vehicleGradeElite: 'ToggleButtonIcon_icon__vehicleGradeElite_26',
                        icon__locationRecruit: 'ToggleButtonIcon_icon__locationRecruit_3b',
                        icon__locationTankman: 'ToggleButtonIcon_icon__locationTankman_f6',
                        icon__personalDataType: 'ToggleButtonIcon_icon__personalDataType_a8',
                        icon__tankmanKindDismissed: 'ToggleButtonIcon_icon__tankmanKindDismissed_86',
                        icon__vehicleGradePremium: 'ToggleButtonIcon_icon__vehicleGradePremium_11',
                    },
                    x = ({ id: e, icon: t, type: n, isSmall: a = !0, isSelected: u = !1 }) =>
                        n === f.VehicleTier
                            ? r().createElement(k, { isSmall: a, level: Number(e) })
                            : r().createElement(D, {
                                  icon: t,
                                  isSmall: a,
                                  classNames: {
                                      icon: s()(S[`icon__${n}`], S[`icon__${n}${(0, v.e)(e)}`], u && S.icon__selected),
                                  },
                              }),
                    N = {
                        base: 'FilterToggleGroup_base_69',
                        title: 'FilterToggleGroup_title_65',
                        content: 'FilterToggleGroup_content_80',
                        toggle: 'FilterToggleGroup_toggle_d4',
                        base__inPopup: 'FilterToggleGroup_base__inPopup_11',
                    };
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                let L;
                !(function (e) {
                    ((e.Default = 'default'), (e.InPopup = 'inPopup'));
                })(L || (L = {}));
                const I = ({ header: e, body: t, contentId: n, targetId: a }) =>
                        n
                            ? { contentId: n, targetId: a }
                            : t || e
                              ? { header: null != e ? e : void 0, body: null != t ? t : void 0 }
                              : void 0,
                    O = ({
                        id: e,
                        type: t,
                        label: n,
                        hasDiscount: a,
                        filters: u,
                        onClick: o,
                        className: i,
                        toggleProps: l,
                        theme: c = L.Default,
                    }) => {
                        const E = c === L.InPopup;
                        return r().createElement(
                            'div',
                            { className: s()(N.base, N[`base__${c}`], i) },
                            E && r().createElement(b, { className: N.title, label: n, hasDiscount: a }),
                            r().createElement(
                                'div',
                                { className: N.content },
                                m.UI(u, ({ id: n, isSelected: a, tooltip: u, icon: i, counter: c }) =>
                                    r().createElement(
                                        d.l,
                                        { key: n, tooltipArgs: I(u), className: N.toggle },
                                        r().createElement(
                                            _.C,
                                            T({}, l, {
                                                className: s()(N.toggle, null == l ? void 0 : l.className),
                                                isActive: a,
                                                onClick: () => (null == o ? void 0 : o(e, n)),
                                                counter: c,
                                            }),
                                            r().createElement(x, {
                                                id: n,
                                                icon: i,
                                                type: t,
                                                isSmall: E,
                                                isSelected: a,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    };
                var M = n(9197);
                const P = (0, n(3215).q3)()(
                        ({ observableModel: e }) =>
                            Object.assign(
                                {},
                                e.primitives([
                                    'isSearchEnabled',
                                    'searchString',
                                    'searchPlaceholder',
                                    'searchTooltipHeader',
                                    'searchTooltipBody',
                                    'isPopoverEnabled',
                                    'isPopoverHighlighted',
                                    'hasAppliedFilters',
                                    'panelType',
                                    'title',
                                    'popoverTooltipHeader',
                                    'popoverTooltipBody',
                                    'hasDiscountAlert',
                                ]),
                                {
                                    amountInfo: e.object('amountInfo'),
                                    filter: e.object('filter'),
                                    filters: e.array('filter.filters'),
                                },
                            ),
                        ({ externalModel: e }) => ({
                            search: e.createCallback((e) => ({ value: e }), 'onSearch'),
                            updateFilter: e.createCallback((e, t) => ({ groupID: e, toggleID: t }), 'onUpdateFilter'),
                            resetFilter: e.createCallbackNoArgs('onResetFilter'),
                        }),
                    ),
                    W = P[0],
                    H = P[1];
                var $ = n(3457),
                    j = n(3616),
                    z = n(1037),
                    G = n(9367);
                const U = 'PopupButton_base_7c',
                    V = 'PopupButton_popupButtonLabel_ed',
                    Z = 'PopupButton_buttonIconWrapper_d7',
                    q = 'PopupButton_buttonIcon_e0',
                    Y = 'PopupButton_buttonIcon__isHighlighted_84',
                    K = 'PopupButton_discountAlert_c8',
                    X = ({ isHighlighted: e, hasDiscountAlert: t, popoverDirection: n = z.IC.Bottom }) =>
                        r().createElement(
                            'div',
                            { className: U },
                            r().createElement('div', { className: V }, R.strings.crew.filter.popup.button.title()),
                            r().createElement(
                                j.Z,
                                {
                                    contentId: R.views.lobby.crew.popovers.FilterPopoverView('resId'),
                                    targetId: R.views.lobby.crew.widgets.FilterPanelWidget('resId'),
                                    direction: n,
                                },
                                r().createElement(
                                    'div',
                                    { id: 'popup_btn', className: Z },
                                    r().createElement(
                                        _.C,
                                        { type: $.L$.ghost, size: $.qE.small, isActive: e, hasIndicator: !1 },
                                        r().createElement('div', { className: s()(q, e && Y) }),
                                    ),
                                    t && r().createElement(G.Q, { className: K }),
                                ),
                            ),
                        );
                var Q = n(8018);
                const J = 'ResetButton_base_58',
                    ee = 'ResetButton_button_a5',
                    te = 'ResetButton_icon_4a',
                    ne = ({ onClick: e }) =>
                        r().createElement(
                            'div',
                            { className: J },
                            r().createElement(
                                i.i,
                                Q.Xd,
                                r().createElement(
                                    $.u5,
                                    { mixClass: ee, onClick: e, type: $.L$.ghost, size: $.qE.small },
                                    r().createElement('div', { className: te }),
                                ),
                            ),
                        ),
                    ae = 'default',
                    re = 'search',
                    ue = 'email',
                    se = 'password',
                    oe = 'normal',
                    ie = 'disabled',
                    le = 'alert',
                    ce = 'error',
                    de = 'medium',
                    me = {
                        [ae]: '',
                        [ue]: R.strings.common.input.placeholder.email(),
                        [re]: R.strings.common.input.placeholder.search(),
                        [se]: R.strings.common.input.placeholder.password(),
                    },
                    _e = { [ae]: 'text', [ue]: 'text', [re]: 'text', [se]: 'password' },
                    Ee = { [ae]: '', [ue]: 'Invalid email', [re]: '', [se]: '' },
                    ge = R.images.gui.maps.icons.components.input;
                function pe(e, t) {
                    return (
                        t !== ue ||
                        (function (e) {
                            const t = e.match(
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            );
                            return Boolean(t);
                        })(e)
                    );
                }
                var he = n(7727);
                const be = {
                        base: 'InputControl_base_68',
                        base__focused: 'InputControl_base__focused_aa',
                        base__alert: 'InputControl_base__alert_22',
                        base__error: 'InputControl_base__error_ff',
                        base__done: 'InputControl_base__done_a7',
                        base__disabled: 'InputControl_base__disabled_f8',
                        input: 'InputControl_input_93',
                        base__small: 'InputControl_base__small_85',
                        base__medium: 'InputControl_base__medium_a2',
                        base__large: 'InputControl_base__large_32',
                        base__withIcon: 'InputControl_base__withIcon_9e',
                        input__search: 'InputControl_input__search_85',
                        disabled: 'InputControl_disabled_78',
                        placeholder: 'InputControl_placeholder_e3',
                        placeholder__search: 'InputControl_placeholder__search_d5',
                        icon: 'InputControl_icon_13',
                        icon__search: 'InputControl_icon__search_57',
                        clear: 'InputControl_clear_bb',
                    },
                    fe = r().memo(
                        ({
                            componentId: e,
                            value: t = '',
                            type: n = ae,
                            size: u = de,
                            variant: o = oe,
                            placeholder: i = '',
                            highlighted: l,
                            withClear: c,
                            selectOnFocus: d = !0,
                            maxLength: m,
                            iconSource: _,
                            classMix: E,
                            onMouseEnter: g,
                            onMouseLeave: p,
                            onMouseDown: h,
                            onMouseUp: b,
                            onClick: f,
                            onChange: v,
                            onClear: A,
                            onFocus: F,
                            onBlur: C,
                        }) => {
                            const D = (0, a.useState)(!1),
                                B = D[0],
                                w = D[1],
                                y = (0, a.useRef)(null),
                                k = (0, a.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                S = o !== ie,
                                x = (0, a.useCallback)(
                                    (e) => {
                                        S && (w(!0), F && F(e));
                                    },
                                    [S, F],
                                ),
                                N = (0, a.useCallback)(
                                    (e) => {
                                        S && !k.current.mouseOver && (w(!1), C && C(e));
                                    },
                                    [S, C],
                                );
                            (0, a.useEffect)(() => {
                                S && B && d && y.current && y.current.select();
                            }, [d, B, S]);
                            const T = (0, a.useCallback)(
                                    (e) => {
                                        S && v && v(e.target.value);
                                    },
                                    [S, v],
                                ),
                                L = (0, a.useCallback)(
                                    (e) => {
                                        S && ((k.current.mouseOver = !0), g && g(e));
                                    },
                                    [S, g],
                                ),
                                I = (0, a.useCallback)(
                                    (e) => {
                                        S &&
                                            y.current &&
                                            (k.current.mouseDown && y.current.focus(),
                                            (k.current.mouseOver = !1),
                                            p && p(e));
                                    },
                                    [S, p],
                                ),
                                R = (0, a.useCallback)(
                                    (e) => {
                                        S && ((k.current.mouseDown = !0), h && h(e));
                                    },
                                    [S, h],
                                ),
                                O = (0, a.useCallback)(
                                    (e) => {
                                        S && ((k.current.mouseDown = !1), b && b(e));
                                    },
                                    [S, b],
                                ),
                                M = (0, a.useCallback)(
                                    (e) => {
                                        if (S && y.current) {
                                            ((!B || (B && e.target !== y.current)) && y.current.focus(), f && f(e));
                                        }
                                    },
                                    [B, S, f],
                                ),
                                P = i || me[n],
                                W = Boolean(_),
                                H = s()(
                                    be.base,
                                    be[`base__${u}`],
                                    l && be[`base__${o}`],
                                    B && be.base__focused,
                                    W && be.base__withIcon,
                                    E,
                                ),
                                $ = (0, a.useMemo)(() => (_ ? { backgroundImage: `url(${_})` } : null), [_]),
                                j = s()(be.input, be[`input__${n}`]),
                                z = s()(be.icon, be[`icon__${n}`]),
                                G = s()(be.placeholder, be[`placeholder__${n}`]);
                            return r().createElement(
                                'div',
                                {
                                    id: e,
                                    className: H,
                                    onMouseEnter: L,
                                    onMouseDown: R,
                                    onMouseUp: O,
                                    onMouseLeave: I,
                                    onClick: M,
                                },
                                !S && r().createElement('div', { className: be.disabled }),
                                $ && r().createElement('div', { style: $, className: z }),
                                r().createElement('input', {
                                    ref: y,
                                    className: j,
                                    type: _e[n],
                                    value: t,
                                    onChange: T,
                                    disabled: !S,
                                    onFocus: x,
                                    onBlur: N,
                                    maxLength: m,
                                }),
                                P && !t && !B && r().createElement('div', { className: G }, P),
                                c &&
                                    r().createElement('div', {
                                        className: be.clear,
                                        onClick: (e) => {
                                            (he.$.playClick(), A && A(e));
                                        },
                                        onMouseEnter: he.$.playHighlight,
                                    }),
                            );
                        },
                    ),
                    ve = {
                        base: 'HelperMessage_base_1e',
                        base__shown: 'HelperMessage_base__shown_ab',
                        icon: 'HelperMessage_icon_10',
                        message: 'HelperMessage_message_f4',
                        message__alert: 'HelperMessage_message__alert_b5',
                        message__error: 'HelperMessage_message__error_45',
                        message__done: 'HelperMessage_message__done_2b',
                    },
                    Ae = ({ variant: e, show: t = !0, helperText: n, helperIcon: u, classMix: o }) => {
                        const i = (0, a.useMemo)(() => {
                                const t =
                                    u ||
                                    (function (e) {
                                        return e === le ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [u, e]),
                            l = s()(ve.base, t && ve.base__shown),
                            c = s()(ve.message, ve[`message__${e}`], o);
                        return r().createElement(
                            'div',
                            { className: l },
                            i && r().createElement('div', { className: ve.icon, style: i }),
                            r().createElement('div', { className: c }, n),
                        );
                    },
                    Fe = {
                        base: 'Input_base_cd',
                        base__small: 'Input_base__small_c7',
                        base__medium: 'Input_base__medium_1f',
                        base__large: 'Input_base__large_11',
                        helper: 'Input_helper_ea',
                    },
                    Ce = [
                        'componentId',
                        'type',
                        'variant',
                        'size',
                        'value',
                        'tooltipArgs',
                        'helperText',
                        'isValidated',
                        'showHelper',
                        'error',
                        'options',
                        'onFocus',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onChange',
                        'classMix',
                        'controlClassMix',
                        'helperClassMix',
                    ];
                function De() {
                    return (
                        (De =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        De.apply(this, arguments)
                    );
                }
                const Be = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    we = (e) => {
                        let t = e.componentId,
                            n = e.type,
                            u = void 0 === n ? ae : n,
                            o = e.variant,
                            i = void 0 === o ? oe : o,
                            l = e.size,
                            c = void 0 === l ? de : l,
                            m = e.value,
                            _ = e.tooltipArgs,
                            E = e.helperText,
                            g = void 0 === E ? '' : E,
                            p = e.isValidated,
                            h = void 0 === p || p,
                            b = e.showHelper,
                            f = void 0 === b || b,
                            v = e.error,
                            A = e.options,
                            F = e.onFocus,
                            C = e.onMouseEnter,
                            D = e.onMouseLeave,
                            B = e.onMouseUp,
                            w = e.onMouseDown,
                            y = e.onChange,
                            k = e.classMix,
                            S = e.controlClassMix,
                            x = e.helperClassMix,
                            N = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, Ce);
                        const T = (0, a.useState)(m),
                            L = T[0],
                            I = T[1],
                            R = (0, a.useState)(h),
                            O = R[0],
                            M = R[1],
                            P = (0, a.useMemo)(() => Object.assign({}, Be, A), [A]),
                            W = (0, a.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: m, type: u }),
                            H = (0, a.useCallback)((e) => {
                                e !== W.current.value &&
                                    ((W.current.value = e), (W.current.isChangeHandled = !1), I(e));
                            }, []),
                            $ = (0, a.useCallback)(
                                (e) => {
                                    let t = !0;
                                    (P.performChangeValidation &&
                                        (t = P.changesValidator ? P.changesValidator(e) : pe(e, W.current.type)),
                                        y && y(e, t));
                                },
                                [y, P],
                            ),
                            j = (0, a.useCallback)(() => {
                                W.current.debounceTimeout &&
                                    (window.clearTimeout(W.current.debounceTimeout), (W.current.debounceTimeout = 0));
                            }, []),
                            z = (0, a.useCallback)(() => H(''), [H]);
                        (0, a.useEffect)(() => () => j(), [j]);
                        const G = (0, a.useCallback)(
                            (e) => {
                                (j(),
                                    P.debounceTime
                                        ? (W.current.debounceTimeout = window.setTimeout(() => {
                                              $(e);
                                          }, P.debounceTime))
                                        : $(e));
                            },
                            [$, j, P.debounceTime],
                        );
                        ((0, a.useEffect)(() => {
                            W.current.isChangeHandled ||
                                W.current.value !== L ||
                                (G(W.current.value), (W.current.isChangeHandled = !0));
                        }, [L, G]),
                            (0, a.useEffect)(() => {
                                (W.current.isChangeHandled && m !== W.current.value && ((W.current.value = m), I(m)),
                                    (W.current.type = u));
                            }, [m, u]),
                            (0, a.useEffect)(() => {
                                M(h);
                            }, [h, i]));
                        const U = (0, a.useCallback)((e) => C && C(e), [C]),
                            V = (0, a.useCallback)(
                                (e) => {
                                    (P.disableHighlightOnFocus && O && M(!1), F && F(e));
                                },
                                [O, F, P.disableHighlightOnFocus],
                            ),
                            Z = (0, a.useCallback)((e) => B && B(e), [B]),
                            q = (0, a.useCallback)((e) => w && w(e), [w]),
                            Y = (0, a.useCallback)((e) => D && D(e), [D]),
                            K = (0, a.useMemo)(
                                () =>
                                    P.withTypeIcon
                                        ? (function (e, t) {
                                              return e === re ? ge.$dyn(`search_${t}`) : '';
                                          })(u, c)
                                        : '',
                                [u, c, P.withTypeIcon],
                            ),
                            X = g || Ee[u],
                            Q = Boolean(L),
                            J = v ? ce : i,
                            ee = Boolean(v) || O,
                            te = (0, a.useMemo)(
                                () => ('boolean' == typeof P.withClear ? Q && P.withClear : Q && u === re),
                                [u, Q, P],
                            ),
                            ne = s()(Fe.base, Fe[`base__${c}`], Fe[`base__${i}`], k);
                        return r().createElement(
                            'div',
                            { id: t, className: ne, onMouseEnter: U, onMouseDown: q, onMouseUp: Z, onMouseLeave: Y },
                            r().createElement(
                                d.l,
                                { tooltipArgs: _ },
                                r().createElement(
                                    fe,
                                    De(
                                        {
                                            componentId: t ? `${t}-inputControl` : void 0,
                                            iconSource: K,
                                            size: c,
                                            type: u,
                                            variant: J,
                                            value: L,
                                            withClear: te,
                                            highlighted: ee,
                                            selectOnFocus: P.selectOnFocus,
                                            maxLength: P.maxLength,
                                            classMix: S,
                                            onFocus: V,
                                            onChange: H,
                                            onClear: z,
                                        },
                                        N,
                                    ),
                                ),
                            ),
                            X &&
                                r().createElement(
                                    'div',
                                    { className: Fe.helper },
                                    r().createElement(Ae, {
                                        variant: J,
                                        show: f && (P.isPermanentHelper || ee),
                                        helperText: v || X,
                                        helperIcon: P.helperIconSource,
                                        classMix: x,
                                    }),
                                ),
                        );
                    },
                    ye = ({ value: e, placeholder: t, tooltipHeader: n, onChange: a, className: u, tooltipBody: s }) =>
                        r().createElement(
                            i.i,
                            { header: null != n ? n : void 0, body: s, isEnabled: Boolean(n || s) },
                            r().createElement(we, {
                                type: re,
                                placeholder: null != t ? t : void 0,
                                value: e,
                                classMix: u,
                                onChange: a,
                            }),
                        ),
                    ke = {
                        base: 'FilterPanelWidgetApp_base_1c',
                        titleWrapper: 'FilterPanelWidgetApp_titleWrapper_1b',
                        title: 'FilterPanelWidgetApp_title_ad',
                        filters: 'FilterPanelWidgetApp_filters_0d',
                        counterGlow: 'FilterPanelWidgetApp_counterGlow_df',
                        separator: 'FilterPanelWidgetApp_separator_9e',
                        filterLabel: 'FilterPanelWidgetApp_filterLabel_5b',
                        base__tankChange: 'FilterPanelWidgetApp_base__tankChange_ff',
                        base__memberChange: 'FilterPanelWidgetApp_base__memberChange_18',
                        popupButtonWrapper: 'FilterPanelWidgetApp_popupButtonWrapper_4c',
                        base__personalData: 'FilterPanelWidgetApp_base__personalData_1d',
                        search: 'FilterPanelWidgetApp_search_0e',
                    },
                    Se = (0, c.Pi)(({ popoverDirection: e, classNames: t }) => {
                        const n = H(),
                            a = n.model,
                            u = n.controls,
                            c = a.amountInfo.get(),
                            d = c.from,
                            m = c.to,
                            _ = a.panelType.get(),
                            E = a.filter.get(),
                            g = a.hasAppliedFilters.get(),
                            p = g || (0 === d && 0 === m),
                            h = a.popoverTooltipHeader.get(),
                            b = a.popoverTooltipBody.get();
                        return r().createElement(
                            'div',
                            { className: s()(ke.base, ke[`base__${_}`]) },
                            r().createElement(
                                'div',
                                { className: ke.titleWrapper },
                                r().createElement(M.C, {
                                    title: a.title.get(),
                                    isGlowVisible: p,
                                    from: d,
                                    to: m,
                                    className: ke.title,
                                    classNames: { counterGlow: ke.counterGlow },
                                }),
                                g && r().createElement(ne, { onClick: u.resetFilter }),
                            ),
                            r().createElement(
                                'div',
                                { className: ke.filters },
                                a.isSearchEnabled.get() &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement(ye, {
                                            value: a.searchString.get(),
                                            onChange: u.search,
                                            className: ke.search,
                                            placeholder: a.searchPlaceholder.get(),
                                            tooltipHeader: a.searchTooltipHeader.get(),
                                            tooltipBody: a.searchTooltipBody.get(),
                                        }),
                                        _ === l.Barracks && r().createElement('div', { className: ke.separator }),
                                    ),
                                E.label && r().createElement('div', { className: ke.filterLabel }, E.label),
                                r().createElement(O, {
                                    id: E.id,
                                    label: E.label,
                                    type: E.type,
                                    hasDiscount: E.hasDiscount,
                                    filters: a.filters.get(),
                                    toggleProps: { type: o.L.ghost },
                                    onClick: u.updateFilter,
                                }),
                                a.isPopoverEnabled.get() &&
                                    r().createElement(
                                        i.i,
                                        {
                                            header: null != h ? h : void 0,
                                            body: null != b ? b : void 0,
                                            isEnabled: Boolean(h || b),
                                        },
                                        r().createElement(
                                            'div',
                                            {
                                                className: s()(
                                                    ke.popupButtonWrapper,
                                                    null == t ? void 0 : t.popupButtonWrapper,
                                                ),
                                            },
                                            r().createElement(X, {
                                                isHighlighted: a.isPopoverHighlighted.get(),
                                                hasDiscountAlert: a.hasDiscountAlert.get(),
                                                popoverDirection: e,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    xe = { rootId: R.views.lobby.crew.widgets.FilterPanelWidget('resId') },
                    Ne = r().memo(function ({ popoverDirection: e, classNames: t }) {
                        return r().createElement(
                            W,
                            { options: xe },
                            r().createElement(Se, { popoverDirection: e, classNames: t }),
                        );
                    });
            },
            771: (e, t, n) => {
                'use strict';
                n.d(t, { GT: () => i, I: () => u, jw: () => s, sU: () => a, vA: () => o, y$: () => l, yb: () => r });
                const a = -1,
                    r = 1,
                    u = 100,
                    s = 'new_skill',
                    o = 9,
                    i = 6,
                    l = -1;
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
            6880: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            9734: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
                };
            },
            4769: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'PopoverDecorator_base_ed',
                    decorator: 'PopoverDecorator_decorator_d3',
                    arrow: 'PopoverDecorator_arrow_8a',
                    arrow__bottom: 'PopoverDecorator_arrow__bottom_c3',
                    arrow__top: 'PopoverDecorator_arrow__top_6e',
                    arrow__left: 'PopoverDecorator_arrow__left_7a',
                    arrow__right: 'PopoverDecorator_arrow__right_b6',
                    closeBtn: 'PopoverDecorator_closeBtn_32',
                    content: 'PopoverDecorator_content_f0',
                };
            },
            4723: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'ToggleButton_base_09',
                    overlay: 'ToggleButton_overlay_76',
                    base__active: 'ToggleButton_base__active_05',
                    button: 'ToggleButton_button_14',
                    indicator: 'ToggleButton_indicator_c2',
                    counter: 'ToggleButton_counter_86',
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
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](n, n.exports, __webpack_require__), n.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, a) => {
            if (!t) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, n, a] = deferred[i], u = !0, s = 0; s < t.length; s++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((u = !1), a < r && (r = a));
                    if (u) {
                        deferred.splice(i--, 1);
                        var o = n();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > a; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, n, a];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var n in t)
                __webpack_require__.o(t, n) &&
                    !__webpack_require__.o(e, n) &&
                    Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
        (__webpack_require__.j = 1625),
        (() => {
            var e = { 1625: 0, 1912: 0, 3595: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        r,
                        [u, s, o] = n,
                        i = 0;
                    if (u.some((t) => 0 !== e[t])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(n); i < u.length; i++)
                        ((r = u[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(3183));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
