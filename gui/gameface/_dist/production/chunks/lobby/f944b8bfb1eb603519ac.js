'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [1521],
    {
        2773: (e, t, r) => {
            r.d(t, { $Q: () => N });
            var n = r(6483),
                o = r.n(n),
                s = r(7515),
                a = r(1856),
                l = r(3138),
                i = r(3815),
                c = r(560),
                u = r(7727),
                f = r(6179),
                d = r.n(f),
                m = r(6358),
                g = r(372);
            const p = 'disable',
                v = { pending: !1, offset: 0 },
                h = (e) => {
                    var t;
                    return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                },
                b = () => {},
                S = (e, t) => Math.max(20, e.offsetWidth * t),
                N = (0, f.memo)(({ api: e, classNames: t = {}, getStepByRailClick: r = h, onDrag: n = b }) => {
                    const N = (0, f.useRef)(null),
                        C = (0, f.useRef)(null),
                        E = (0, f.useRef)(null),
                        y = (0, f.useRef)(null),
                        P = (0, f.useRef)(null),
                        z = e.stepTimeout || 100,
                        M = (0, f.useState)(v),
                        w = M[0],
                        B = M[1],
                        _ = (0, f.useCallback)(
                            (e) => {
                                (B(e), P.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: P.current }));
                            },
                            [n],
                        ),
                        R = () => {
                            const t = y.current,
                                r = P.current,
                                n = e.getWrapperSize(),
                                o = e.getContainerSize();
                            if (!(n && t && r && o)) return;
                            const a = e.animationScroll.scrollPosition.get(),
                                l = Math.min(1, n / o),
                                i = (0, s.u)(0, 1, a / (o - n)),
                                c = (t.offsetWidth - S(t, l)) * i;
                            ((r.style.transform = `translateX(${0 | c}px)`),
                                ((e) => {
                                    if (C.current && E.current && y.current && P.current) {
                                        if (0 === e)
                                            return (C.current.classList.add(p), void E.current.classList.remove(p));
                                        if (
                                            ((t = y.current),
                                            (r = P.current),
                                            e - (t.offsetWidth - r.offsetWidth) >= -0.5)
                                        )
                                            return (C.current.classList.remove(p), void E.current.classList.add(p));
                                        var t, r;
                                        (C.current.classList.remove(p), E.current.classList.remove(p));
                                    }
                                })(c));
                        },
                        W = (0, i.z)(() => {
                            ((() => {
                                const t = P.current,
                                    r = y.current,
                                    n = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(o && t && n && r)) return;
                                const s = Math.min(1, n / o);
                                ((t.style.width = `${S(r, s)}px`),
                                    (t.style.display = 'flex'),
                                    N.current &&
                                        (1 === s
                                            ? N.current.classList.add(g.Z.base__nonActive)
                                            : N.current.classList.remove(g.Z.base__nonActive)));
                            })(),
                                R());
                        });
                    ((0, f.useEffect)(() => (0, a.v)(W)),
                        (0, f.useEffect)(
                            () =>
                                (0, a.v)(() => {
                                    const t = () => {
                                        R();
                                    };
                                    let r = b;
                                    const n = () => {
                                        (r(), (r = (0, a.v)(W)));
                                    };
                                    return (
                                        e.events.on('recalculateContent', W),
                                        e.events.on('rest', t),
                                        e.events.on('change', t),
                                        e.events.on('resizeHandled', n),
                                        () => {
                                            (r(),
                                                e.events.off('recalculateContent', W),
                                                e.events.off('rest', t),
                                                e.events.off('change', t),
                                                e.events.off('resizeHandled', n));
                                        }
                                    );
                                }),
                            [e],
                        ),
                        (0, f.useEffect)(() => {
                            if (!w.pending) return;
                            const t = l.O.client.events.mouse.move(([t, r]) => {
                                    var o;
                                    const s = e.contentRef.current,
                                        a = e.wrapperRef.current;
                                    if (!s || !a) return;
                                    const l = y.current,
                                        i = P.current;
                                    if (!l || !i) return;
                                    if ('inside' === r && t.clientX < 0) return;
                                    const c = t.clientX - w.offset - l.getBoundingClientRect().x,
                                        u = (c / l.offsetWidth) * (null != (o = e.getContainerSize()) ? o : 0);
                                    (e.scrollPosition.start({
                                        scrollPosition: e.clampPosition(s, u),
                                        reset: !0,
                                        immediate: !0,
                                        from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                    }),
                                        n({ type: 'dragging', thumb: i, thumbOffset: c, contentOffset: u }));
                                }),
                                r = l.O.client.events.mouse.up(() => {
                                    (t(), _(v));
                                });
                            return () => {
                                (t(), r());
                            };
                        }, [e, w.offset, w.pending, n, _]));
                    const k = (0, c.B)((t) => e.applyStepTo(t), z, [e]),
                        A = k[0],
                        Z = k[1];
                    (0, f.useEffect)(
                        () => (
                            document.addEventListener('mouseup', Z, !0),
                            () => document.removeEventListener('mouseup', Z, !0)
                        ),
                        [Z],
                    );
                    const L = (e) => {
                        e.target.classList.contains(p) || (0, u.G)('highlight');
                    };
                    return d().createElement(
                        'div',
                        { className: o()(g.Z.base, t.base), ref: N, onWheel: e.handleMouseWheel },
                        d().createElement('div', {
                            className: o()(g.Z.leftButton, t.leftButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains(p) || 0 !== e.button || ((0, u.G)('play'), A(m.Nm.Next));
                            },
                            onMouseUp: Z,
                            ref: C,
                            onMouseEnter: L,
                        }),
                        d().createElement(
                            'div',
                            {
                                className: o()(g.Z.track, t.track),
                                onMouseDown: (t) => {
                                    const n = P.current;
                                    if (n && 0 === t.button)
                                        if (((0, u.G)('play'), t.target === n))
                                            _({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                        else {
                                            ((t) => {
                                                const n = P.current,
                                                    o = e.contentRef.current;
                                                if (!n || !o) return;
                                                const s = r(e);
                                                e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                            })(t.screenX > n.getBoundingClientRect().x ? m.Nm.Prev : m.Nm.Next);
                                        }
                                },
                                ref: y,
                                onMouseEnter: L,
                            },
                            d().createElement('div', { ref: P, className: o()(g.Z.thumb, t.thumb) }),
                            d().createElement('div', { className: o()(g.Z.rail, t.rail) }),
                        ),
                        d().createElement('div', {
                            className: o()(g.Z.rightButton, t.rightButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains(p) || 0 !== e.button || ((0, u.G)('play'), A(m.Nm.Prev));
                            },
                            onMouseUp: Z,
                            ref: E,
                            onMouseEnter: L,
                        }),
                    );
                });
        },
        2840: (e, t, r) => {
            r.d(t, { K: () => u });
            var n = r(6483),
                o = r.n(n),
                s = r(6179),
                a = r.n(s),
                l = r(2773),
                i = r(7950),
                c = r(4682);
            const u = ({
                children: e,
                api: t,
                className: r,
                barClassNames: n,
                areaClassName: u,
                classNames: f,
                scrollClassName: d,
                getStepByRailClick: m,
                onDrag: g,
            }) => {
                const p = (0, s.useMemo)(() => {
                        const e = n || {};
                        return Object.assign({}, e, { base: o()(c.Z.base, e.base) });
                    }, [n]),
                    v = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                return a().createElement(
                    'div',
                    { className: o()(c.Z.defaultScroll, r), onWheel: t.handleMouseWheel },
                    a().createElement(
                        'div',
                        { className: o()(c.Z.defaultScrollArea, u) },
                        a().createElement(i.Area, { className: d, api: v, classNames: f }, e),
                    ),
                    a().createElement(l.$Q, { getStepByRailClick: m, api: t, onDrag: g, classNames: p }),
                );
            };
        },
        7950: (e, t, r) => {
            (r.r(t),
                r.d(t, {
                    Area: () => d,
                    Bar: () => i.$Q,
                    DefaultScroll: () => c.K,
                    Direction: () => f.Nm,
                    defaultSettings: () => f.he,
                    useHorizontalScrollApi: () => f.T5,
                }));
            var n = r(6483),
                o = r.n(n),
                s = r(1856),
                a = r(6179),
                l = r.n(a),
                i = r(2773),
                c = r(2840),
                u = r(4682),
                f = r(6358);
            const d = ({ api: e, className: t, classNames: r, children: n }) => (
                (0, a.useEffect)(() => (0, s.v)(e.recalculateContent)),
                l().createElement(
                    'div',
                    { className: o()(u.Z.base, t) },
                    l().createElement(
                        'div',
                        {
                            className: o()(u.Z.wrapper, null == r ? void 0 : r.wrapper),
                            onWheel: e.handleMouseWheel,
                            ref: e.wrapperRef,
                        },
                        l().createElement(
                            'div',
                            { className: o()(u.Z.content, null == r ? void 0 : r.content), ref: e.contentRef },
                            n,
                        ),
                    ),
                )
            );
            ((d.Bar = i.$Q), (d.Default = c.K));
        },
        6358: (e, t, r) => {
            r.d(t, { Nm: () => n.Nm, T5: () => o, he: () => n.he });
            var n = r(7308);
            const o = (0, n.EO)({
                getBounds: (e) => {
                    var t, r;
                    return [
                        0,
                        e.offsetWidth - (null != (t = null == (r = e.parentElement) ? void 0 : r.offsetWidth) ? t : 0),
                    ];
                },
                getContainerSize: (e) => e.offsetWidth,
                getWrapperSize: (e) => e.offsetWidth,
                setScrollPosition: (e, t) => {
                    e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                },
                getDirection: (e) => (e.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                triggerMouseMoveOnUpdate: !0,
            });
        },
        7308: (e, t, r) => {
            r.d(t, { EO: () => g, Nm: () => d, he: () => m });
            var n = r(7515),
                o = r(1856),
                s = r(3138),
                a = r(4532),
                l = r(9653),
                i = r(3815),
                c = r(4489),
                u = r(6179),
                f = r(7030);
            let d;
            !(function (e) {
                ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
            })(d || (d = {}));
            const m = {
                    step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                    animationConfig: { tension: 170, friction: 26 },
                },
                g = ({
                    getContainerSize: e,
                    getBounds: t,
                    setScrollPosition: r,
                    getDirection: d,
                    getWrapperSize: g,
                    triggerMouseMoveOnUpdate: p = !1,
                }) => {
                    const v = (e, r) => {
                        const o = t(e),
                            s = o[0],
                            a = o[1];
                        return a <= s ? 0 : (0, n.u)(s, a, r);
                    };
                    return (n = {}) => {
                        const h = n.settings,
                            b = void 0 === h ? m : h,
                            S = (0, u.useRef)(null),
                            N = (0, u.useRef)(null),
                            C = (0, l.q)(),
                            E = (0, c.f)(
                                () => {
                                    s.O.view.forceTriggerMouseMove();
                                },
                                [],
                                150,
                            ),
                            y = (0, f.useSpring)(() => ({
                                scrollPosition: 0,
                                onChange: (e) => {
                                    const t = S.current;
                                    t && (r(t, e), C.trigger('change', e), p && E());
                                },
                                onRest: (e) => C.trigger('rest', e),
                                onStart: (e) => C.trigger('start', e),
                                onPause: (e) => C.trigger('pause', e),
                            })),
                            P = y[0],
                            z = y[1],
                            M = (0, u.useCallback)(
                                (e, t, r) => {
                                    var n;
                                    const o = P.scrollPosition.get(),
                                        s = (null != (n = P.scrollPosition.goal) ? n : 0) - o;
                                    return v(e, t * r + s + o);
                                },
                                [P.scrollPosition],
                            ),
                            w = (0, u.useCallback)(
                                (e, { immediate: t = !1, reset: r = !0 } = {}) => {
                                    const n = S.current;
                                    n &&
                                        z.start({
                                            scrollPosition: v(n, e),
                                            immediate: t,
                                            reset: r,
                                            config: b.animationConfig,
                                            from: { scrollPosition: v(n, P.scrollPosition.get()) },
                                        });
                                },
                                [z, b.animationConfig, P.scrollPosition],
                            ),
                            B = (0, u.useCallback)(
                                (e) => {
                                    const t = S.current,
                                        r = N.current;
                                    if (!t || !r) return;
                                    const n = ((e, t) => {
                                            switch (t.type) {
                                                case 'proportional':
                                                    return g(e) / t.factor;
                                                case 'fixed':
                                                    return t.value;
                                            }
                                        })(r, b.step),
                                        o = M(t, e, n);
                                    w(o);
                                },
                                [w, M, b.step],
                            ),
                            _ = (0, u.useCallback)(
                                (e) => {
                                    (0 !== e.deltaY && B(d(e)),
                                        S.current && C.trigger('mouseWheel', e, P.scrollPosition, t(S.current)));
                                },
                                [P.scrollPosition, B, C],
                            ),
                            R = (0, a.M)(
                                () =>
                                    (0, o.v)(() => {
                                        const e = S.current;
                                        e &&
                                            (w(v(e, P.scrollPosition.goal), { immediate: !0 }),
                                            C.trigger('resizeHandled'));
                                    }),
                                [w, P.scrollPosition.goal],
                            ),
                            W = (0, i.z)(() => {
                                const e = S.current;
                                if (!e) return;
                                const t = v(e, P.scrollPosition.goal);
                                (t !== P.scrollPosition.goal && w(t, { immediate: !0 }),
                                    C.trigger('recalculateContent'));
                            });
                        (0, u.useEffect)(
                            () => (
                                window.addEventListener('resize', R),
                                () => {
                                    window.removeEventListener('resize', R);
                                }
                            ),
                            [R],
                        );
                        return (0, u.useMemo)(
                            () => ({
                                getWrapperSize: () => (N.current ? g(N.current) : void 0),
                                getContainerSize: () => (S.current ? e(S.current) : void 0),
                                getBounds: () =>
                                    S.current
                                        ? t(S.current)
                                        : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                stepTimeout: b.step.clampedArrowStepTimeout,
                                clampPosition: v,
                                handleMouseWheel: _,
                                applyScroll: w,
                                applyStepTo: B,
                                contentRef: S,
                                wrapperRef: N,
                                scrollPosition: z,
                                animationScroll: P,
                                recalculateContent: W,
                                events: { on: C.on, off: C.off },
                            }),
                            [P.scrollPosition, w, B, C.off, C.on, W, _, z, b.step.clampedArrowStepTimeout],
                        );
                    };
                };
        },
        7515: (e, t, r) => {
            r.d(t, { u: () => n });
            const n = (e, t, r) => (r < e ? e : r > t ? t : r);
        },
        9653: (e, t, r) => {
            r.d(t, { q: () => a });
            var n = r(6179);
            function o(e, t) {
                var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                if (r) return (r = r.call(e)).next.bind(r);
                if (
                    Array.isArray(e) ||
                    (r = (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return s(e, t);
                            var r = {}.toString.call(e).slice(8, -1);
                            return (
                                'Object' === r && e.constructor && (r = e.constructor.name),
                                'Map' === r || 'Set' === r
                                    ? Array.from(e)
                                    : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                      ? s(e, t)
                                      : void 0
                            );
                        }
                    })(e)) ||
                    (t && e && 'number' == typeof e.length)
                ) {
                    r && (e = r);
                    var n = 0;
                    return function () {
                        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                    };
                }
                throw new TypeError(
                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                );
            }
            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            const a = () => {
                const e = (0, n.useMemo)(() => ({}), []),
                    t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                    r = (e, r) => {
                        t(e).set(r, r);
                    },
                    s = (e, r) => {
                        t(e).delete(r);
                    },
                    a = (e, ...r) => {
                        for (var n, s = o(t(e).values()); !(n = s()).done; ) {
                            (0, n.value)(...r);
                        }
                    };
                return (0, n.useMemo)(() => ({ on: r, off: s, trigger: a }), []);
            };
        },
        3815: (e, t, r) => {
            r.d(t, { z: () => s });
            var n = r(6179);
            const o = [];
            function s(e) {
                const t = (0, n.useRef)(e);
                return (
                    (0, n.useLayoutEffect)(() => {
                        t.current = e;
                    }),
                    (0, n.useCallback)((...e) => (0, t.current)(...e), o)
                );
            }
        },
        560: (e, t, r) => {
            r.d(t, { B: () => o });
            var n = r(6179);
            function o(e, t, r = []) {
                const o = (0, n.useRef)(0),
                    s = (0, n.useCallback)(() => window.clearInterval(o.current), r || []);
                (0, n.useEffect)(() => s, [s]);
                const a = (null != r ? r : []).concat([t]);
                return [
                    (0, n.useCallback)((r) => {
                        ((o.current = window.setInterval(() => e(r, !0), t)), e(r, !1));
                    }, a),
                    s,
                ];
            }
        },
        4489: (e, t, r) => {
            r.d(t, { f: () => s });
            var n = r(5139),
                o = r(6179);
            function s(e, t, r) {
                const s = (0, o.useMemo)(() => (0, n.Z)(r, e), t);
                return ((0, o.useEffect)(() => s.cancel, [s]), s);
            }
        },
        9900: (e, t, r) => {
            r.d(t, { b: () => n.b, k: () => n.k });
            var n = r(2039);
        },
        372: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = {
                base: 'HorizontalBar_base_49',
                base__nonActive: 'HorizontalBar_base__nonActive_82',
                leftButton: 'HorizontalBar_leftButton_5f',
                rightButton: 'HorizontalBar_rightButton_03',
                track: 'HorizontalBar_track_0d',
                thumb: 'HorizontalBar_thumb_fd',
                rail: 'HorizontalBar_rail_32',
            };
        },
        4682: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = {
                base: 'HorizontalScroll_base_29',
                wrapper: 'HorizontalScroll_wrapper_1e',
                defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
            };
        },
    },
]);
