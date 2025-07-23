'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [4727],
    {
        3457: (e, t, n) => {
            n.d(t, { L$: () => i.L, qE: () => i.q, u5: () => m });
            var a = n(6483),
                s = n.n(a),
                r = n(7727),
                o = n(6179),
                l = n.n(o),
                c = n(6880),
                i = n(2106);
            const u = ({
                children: e,
                size: t,
                isFocused: n,
                type: a,
                disabled: u,
                mixClass: m,
                soundHover: _,
                soundClick: f,
                onMouseEnter: d,
                onMouseMove: b,
                onMouseDown: g,
                onMouseUp: p,
                onMouseLeave: v,
                onClick: h,
            }) => {
                const B = (0, o.useRef)(null),
                    C = (0, o.useState)(n),
                    N = C[0],
                    E = C[1],
                    y = (0, o.useState)(!1),
                    S = y[0],
                    Z = y[1];
                return (
                    (0, o.useEffect)(() => {
                        function e(e) {
                            N && null !== B.current && !B.current.contains(e.target) && E(!1);
                        }
                        return (
                            document.addEventListener('mousedown', e),
                            () => {
                                document.removeEventListener('mousedown', e);
                            }
                        );
                    }, [N]),
                    (0, o.useEffect)(() => {
                        E(n);
                    }, [n]),
                    l().createElement(
                        'div',
                        {
                            ref: B,
                            className: s()(
                                c.Z.base,
                                c.Z[`base__${a}`],
                                u && c.Z.base__disabled,
                                t && c.Z[`base__${t}`],
                                N && c.Z.base__focus,
                                S && c.Z.base__highlightActive,
                                m,
                            ),
                            onMouseEnter: function (e) {
                                u || (null !== _ && (0, r.G)(_), d && d(e));
                            },
                            onMouseMove: function (e) {
                                b && b(e);
                            },
                            onMouseUp: function (e) {
                                u || (p && p(e), Z(!1));
                            },
                            onMouseDown: function (e) {
                                u ||
                                    (null !== f && (0, r.G)(f),
                                    g && g(e),
                                    n && (u || (B.current && (B.current.focus(), E(!0)))),
                                    Z(!0));
                            },
                            onMouseLeave: function (e) {
                                u || (v && v(e), Z(!1));
                            },
                            onClick: function (e) {
                                u || (h && h(e));
                            },
                        },
                        a !== i.L.ghost &&
                            l().createElement(
                                l().Fragment,
                                null,
                                l().createElement('div', { className: c.Z.back }),
                                l().createElement('span', { className: c.Z.texture }),
                            ),
                        l().createElement(
                            'span',
                            { className: s()(c.Z.state, c.Z.state__default) },
                            l().createElement('span', { className: c.Z.stateDisabled }),
                            l().createElement('span', { className: c.Z.stateHighlightHover }),
                            l().createElement('span', { className: c.Z.stateHighlightActive }),
                        ),
                        l().createElement(
                            'span',
                            { className: c.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                            e,
                        ),
                    )
                );
            };
            u.defaultProps = { type: i.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
            const m = u;
        },
        2106: (e, t, n) => {
            let a, s;
            (n.d(t, { L: () => a, q: () => s }),
                (function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(a || (a = {})),
                (function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'));
                })(s || (s = {})));
        },
        6225: (e, t, n) => {
            n.d(t, { $Q: () => C });
            var a = n(6483),
                s = n.n(a),
                r = n(7515),
                o = n(1856),
                l = n(3138),
                c = n(3815),
                i = n(560),
                u = n(7727),
                m = n(6179),
                _ = n.n(m),
                f = n(7701),
                d = n(9168);
            const b = 'disable',
                g = () => {},
                p = { pending: !1, offset: 0 },
                v = (e) => {
                    var t;
                    return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                },
                h = (e, t) => {
                    e.contentRef.current && t(e.contentRef.current);
                },
                B = (e, t) => Math.max(20, e.offsetHeight * t),
                C = (0, m.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = v, onDrag: a = g }) => {
                    const C = (0, m.useRef)(null),
                        N = (0, m.useRef)(null),
                        E = (0, m.useRef)(null),
                        y = (0, m.useRef)(null),
                        S = (0, m.useRef)(null),
                        Z = e.stepTimeout || 100,
                        M = (0, m.useState)(p),
                        H = M[0],
                        L = M[1],
                        R = (0, m.useCallback)(
                            (e) => {
                                (L(e), S.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: S.current }));
                            },
                            [a],
                        ),
                        k = (0, c.z)(() => {
                            const t = S.current,
                                n = y.current,
                                a = e.getWrapperSize(),
                                s = e.getContainerSize();
                            if (!(a && s && t && n)) return;
                            const r = Math.min(1, a / s);
                            return (
                                (t.style.height = `${B(n, r)}px`),
                                (t.style.display = 'flex'),
                                C.current &&
                                    (1 === r
                                        ? C.current.classList.add(d.Z.base__nonActive)
                                        : C.current.classList.remove(d.Z.base__nonActive)),
                                r
                            );
                        }),
                        z = (0, c.z)(() => {
                            const t = y.current,
                                n = S.current,
                                a = e.getWrapperSize(),
                                s = e.getContainerSize();
                            if (!(a && t && n && s)) return;
                            const o = e.animationScroll.scrollPosition.get(),
                                l = Math.min(1, a / s),
                                c = (0, r.u)(0, 1, o / (s - a)),
                                i = (t.offsetHeight - B(t, l)) * c;
                            ((n.style.transform = `translateY(${0 | i}px)`),
                                ((e) => {
                                    if (N.current && E.current && y.current && S.current) {
                                        if (0 === Math.round(e))
                                            return (N.current.classList.add(b), void E.current.classList.remove(b));
                                        if (
                                            ((t = y.current),
                                            (n = S.current),
                                            e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                        )
                                            return (N.current.classList.remove(b), void E.current.classList.add(b));
                                        var t, n;
                                        (N.current.classList.remove(b), E.current.classList.remove(b));
                                    }
                                })(i));
                        }),
                        x = (0, c.z)(() => {
                            h(e, () => {
                                (k(), z());
                            });
                        });
                    ((0, m.useEffect)(() => (0, o.v)(x)),
                        (0, m.useEffect)(() => {
                            const t = () => {
                                h(e, () => {
                                    z();
                                });
                            };
                            let n = g;
                            const a = () => {
                                (n(), (n = (0, o.v)(x)));
                            };
                            return (
                                e.events.on('recalculateContent', x),
                                e.events.on('rest', t),
                                e.events.on('change', t),
                                e.events.on('resizeHandled', a),
                                () => {
                                    (n(),
                                        e.events.off('recalculateContent', x),
                                        e.events.off('rest', t),
                                        e.events.off('change', t),
                                        e.events.off('resizeHandled', a));
                                }
                            );
                        }, [e]),
                        (0, m.useEffect)(() => {
                            if (!H.pending) return;
                            const t = l.O.client.events.mouse.up(() => {
                                    R(p);
                                }),
                                n = l.O.client.events.mouse.move(([t]) => {
                                    h(e, (n) => {
                                        const s = y.current,
                                            r = S.current,
                                            o = e.getContainerSize();
                                        if (!s || !r || !o) return;
                                        const l = t.screenY - H.offset - s.getBoundingClientRect().y,
                                            c = (l / s.offsetHeight) * o;
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: n.scrollTop },
                                        }),
                                            a({ type: 'dragging', thumb: r, thumbOffset: l, contentOffset: c }));
                                    });
                                });
                            return () => {
                                (t(), n());
                            };
                        }, [e, H.offset, H.pending, a, R]));
                    const A = (0, i.B)((t) => e.applyStepTo(t), Z, [e]),
                        D = A[0],
                        P = A[1];
                    (0, m.useEffect)(
                        () => (
                            document.addEventListener('mouseup', P, !0),
                            () => document.removeEventListener('mouseup', P, !0)
                        ),
                        [P],
                    );
                    const V = (e) => {
                        e.target.classList.contains(b) || (0, u.G)('highlight');
                    };
                    return _().createElement(
                        'div',
                        { className: s()(d.Z.base, t.base), ref: C, onWheel: e.handleMouseWheel },
                        _().createElement('div', {
                            className: s()(d.Z.topButton, t.topButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains(b) || 0 !== e.button || ((0, u.G)('play'), D(f.Nm.Next));
                            },
                            ref: N,
                            onMouseEnter: V,
                        }),
                        _().createElement(
                            'div',
                            {
                                className: s()(d.Z.track, t.track),
                                onMouseDown: (t) => {
                                    const a = S.current;
                                    if (a && 0 === t.button)
                                        if (((0, u.G)('play'), t.target === a))
                                            R({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                        else {
                                            ((t) => {
                                                S.current &&
                                                    h(e, (a) => {
                                                        if (!a) return;
                                                        const s = n(e),
                                                            r = e.clampPosition(a, a.scrollTop + s * t);
                                                        e.applyScroll(r);
                                                    });
                                            })(t.screenY > a.getBoundingClientRect().y ? f.Nm.Prev : f.Nm.Next);
                                        }
                                },
                                ref: y,
                                onMouseEnter: V,
                            },
                            _().createElement('div', { ref: S, className: s()(d.Z.thumb, t.thumb) }),
                            _().createElement('div', { className: s()(d.Z.rail, t.rail) }),
                        ),
                        _().createElement('div', {
                            className: s()(d.Z.bottomButton, t.bottomButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains(b) || 0 !== e.button || ((0, u.G)('play'), D(f.Nm.Prev));
                            },
                            onMouseUp: P,
                            ref: E,
                            onMouseEnter: V,
                        }),
                    );
                });
        },
        1158: (e, t, n) => {
            n.d(t, { K: () => u });
            var a = n(6483),
                s = n.n(a),
                r = n(6179),
                o = n.n(r),
                l = n(6225),
                c = n(9605),
                i = n(5636);
            const u = ({
                children: e,
                api: t,
                className: n,
                barClassNames: a,
                areaClassName: u,
                scrollClassName: m,
                scrollClassNames: _,
                getStepByRailClick: f,
                onDrag: d,
            }) => {
                const b = (0, r.useMemo)(() => {
                        const e = a || {};
                        return Object.assign({}, e, { base: s()(i.Z.base, e.base) });
                    }, [a]),
                    g = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                return o().createElement(
                    'div',
                    { className: s()(i.Z.defaultScroll, n), onWheel: t.handleMouseWheel },
                    o().createElement(
                        'div',
                        { className: s()(i.Z.area, u) },
                        o().createElement(c.Area, { className: m, classNames: _, api: g }, e),
                    ),
                    o().createElement(l.$Q, { getStepByRailClick: f, api: t, onDrag: d, classNames: b }),
                );
            };
        },
        9605: (e, t, n) => {
            (n.r(t), n.d(t, { Area: () => _, Bar: () => c.$Q, Default: () => i.K, useVerticalScrollApi: () => u.c4 }));
            var a = n(6483),
                s = n.n(a),
                r = n(1856),
                o = n(6179),
                l = n.n(o),
                c = n(6225),
                i = n(1158),
                u = n(7701),
                m = n(5636);
            const _ = ({ className: e, classNames: t, children: n, api: a }) => (
                (0, o.useEffect)(() => (0, r.v)(a.recalculateContent)),
                l().createElement(
                    'div',
                    { className: s()(m.Z.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                    l().createElement(
                        'div',
                        { className: s()(m.Z.content, null == t ? void 0 : t.content), ref: a.contentRef },
                        n,
                    ),
                )
            );
            _.Default = i.K;
        },
        7701: (e, t, n) => {
            n.d(t, { Nm: () => a.Nm, c4: () => s });
            var a = n(7308);
            const s = (0, a.EO)({
                getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                getContainerSize: (e) => e.scrollHeight,
                getWrapperSize: (e) => e.offsetHeight,
                setScrollPosition: (e, t) => {
                    e.scrollTop = t.value.scrollPosition;
                },
                getDirection: (e) => (e.deltaY > 1 ? a.Nm.Next : a.Nm.Prev),
            });
        },
        794: (e, t, n) => {
            n.d(t, { X: () => s });
            var a = n(7950);
            const s = { Vertical: n(9605), Horizontal: a };
        },
        1362: (e, t, n) => {
            n.d(t, { z: () => r });
            var a = n(6179),
                s = n(9900);
            function r(e) {
                const t = (0, a.useState)(!0),
                    n = t[0],
                    r = t[1];
                return (
                    (0, s.b)(() => {
                        const t = () => {
                            r(Math.trunc(e.animationScroll.scrollPosition.get()) < viewEnv.remToPx(10));
                        };
                        return (
                            e.events.on('change', t),
                            () => {
                                e.events.off('change', t);
                            }
                        );
                    }),
                    n
                );
            }
        },
        198: (e, t, n) => {
            n.d(t, { kB: () => b });
            var a = n(794),
                s = n(6358),
                r = n(7701),
                o = n(6179),
                l = n.n(o),
                c = n(2130);
            const i = ['barClassNames'],
                u = ['barClassNames'];
            function m() {
                return (
                    (m = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = arguments[t];
                                  for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                              }
                              return e;
                          }),
                    m.apply(null, arguments)
                );
            }
            function _(e, t) {
                if (null == e) return {};
                var n = {};
                for (var a in e)
                    if ({}.hasOwnProperty.call(e, a)) {
                        if (t.indexOf(a) >= 0) continue;
                        n[a] = e[a];
                    }
                return n;
            }
            const f = { topButton: c.Z.topButton, rail: c.Z.rail, thumb: c.Z.thumb, bottomButton: c.Z.bottomButton };
            const d = f;
            const b = {
                Vertical: function (e) {
                    let t = e.barClassNames,
                        n = void 0 === t ? {} : t,
                        s = _(e, i);
                    return l().createElement(
                        a.X.Vertical.Default,
                        m({}, s, { barClassNames: Object.assign({}, f, n) }),
                    );
                },
                Horizontal: function (e) {
                    let t = e.barClassNames,
                        n = void 0 === t ? {} : t,
                        s = _(e, u);
                    return l().createElement(
                        a.X.Horizontal.DefaultScroll,
                        m({}, s, { barClassNames: Object.assign({}, d, n) }),
                    );
                },
                useVerticalApi: r.c4,
                useHorizontalApi: s.T5,
            };
        },
        6880: (e, t, n) => {
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
        9168: (e, t, n) => {
            n.d(t, { Z: () => a });
            const a = {
                base: 'VerticalBar_base_f3',
                base__nonActive: 'VerticalBar_base__nonActive_42',
                topButton: 'VerticalBar_topButton_d7',
                bottomButton: 'VerticalBar_bottomButton_06',
                track: 'VerticalBar_track_df',
                thumb: 'VerticalBar_thumb_32',
                rail: 'VerticalBar_rail_43',
            };
        },
        5636: (e, t, n) => {
            n.d(t, { Z: () => a });
            const a = {
                content: 'VerticalScroll_content_cb',
                defaultScroll: 'VerticalScroll_defaultScroll_f8',
                bar: 'VerticalScroll_bar_1e',
                area: 'VerticalScroll_area_af',
            };
        },
        2130: (e, t, n) => {
            n.d(t, { Z: () => a });
            const a = {
                bottomButton: 'NYScroll_bottomButton_e7',
                topButton: 'NYScroll_topButton_10',
                thumb: 'NYScroll_thumb_dc',
                rail: 'NYScroll_rail_2d',
            };
        },
    },
]);
