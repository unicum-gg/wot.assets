'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [511],
    {
        6400: (e, t, a) => {
            (a.r(t), a.d(t, { default: () => gr }));
            var n = {};
            (a.r(n),
                a.d(n, {
                    Area: () => W,
                    Bar: () => z,
                    DefaultScroll: () => H,
                    Direction: () => h,
                    defaultSettings: () => y,
                    useHorizontalScrollApi: () => S,
                }));
            var r = {};
            (a.r(r), a.d(r, { Area: () => re, Bar: () => te, Default: () => ne, useVerticalScrollApi: () => $ }));
            var s = a(7363),
                i = a.n(s),
                o = a(6483),
                l = a.n(o),
                c = a(1856),
                m = a(7515),
                u = a(3138);
            const d = [];
            function g(e) {
                const t = (0, s.useRef)(e);
                return (
                    (0, s.useLayoutEffect)(() => {
                        t.current = e;
                    }),
                    (0, s.useCallback)((...e) => (0, t.current)(...e), d)
                );
            }
            function _(e, t, a = []) {
                const n = (0, s.useRef)(0),
                    r = (0, s.useCallback)(() => {
                        (window.clearInterval(n.current), (n.current = 0));
                    }, a || []);
                (0, s.useEffect)(() => r, [r]);
                const i = (null != a ? a : []).concat([t]);
                return [
                    (0, s.useCallback)((a) => {
                        (0 !== n.current && r(), (n.current = window.setInterval(() => e(a, !0), t)), e(a, !1));
                    }, i),
                    r,
                ];
            }
            var b = a(7727);
            function v(e, t) {
                var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                if (a) return (a = a.call(e)).next.bind(a);
                if (
                    Array.isArray(e) ||
                    (a = (function (e, t) {
                        if (!e) return;
                        if ('string' == typeof e) return f(e, t);
                        var a = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === a && e.constructor && (a = e.constructor.name);
                        if ('Map' === a || 'Set' === a) return Array.from(e);
                        if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return f(e, t);
                    })(e)) ||
                    (t && e && 'number' == typeof e.length)
                ) {
                    a && (e = a);
                    var n = 0;
                    return function () {
                        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                    };
                }
                throw new TypeError(
                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                );
            }
            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n;
            }
            function p(e, t, a) {
                const n = (0, s.useMemo)(
                    () =>
                        (function (e, t, a, n) {
                            let r,
                                s = !1,
                                i = 0;
                            function o() {
                                r && clearTimeout(r);
                            }
                            function l(...l) {
                                const c = this,
                                    m = Date.now() - i;
                                function u() {
                                    ((i = Date.now()), a.apply(c, l));
                                }
                                s ||
                                    (n && !r && u(),
                                    o(),
                                    void 0 === n && m > e
                                        ? u()
                                        : !0 !== t &&
                                          (r = setTimeout(
                                              n
                                                  ? function () {
                                                        r = void 0;
                                                    }
                                                  : u,
                                              void 0 === n ? e - m : e,
                                          )));
                            }
                            return (
                                'boolean' != typeof t && ((n = a), (a = t), (t = void 0)),
                                (l.cancel = function () {
                                    (o(), (s = !0));
                                }),
                                l
                            );
                        })(a, e),
                    t,
                );
                return ((0, s.useEffect)(() => n.cancel, [n]), n);
            }
            var E = a(7030);
            let h;
            !(function (e) {
                ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
            })(h || (h = {}));
            const y = {
                    step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                    animationConfig: { tension: 170, friction: 26 },
                },
                N = ({
                    getContainerSize: e,
                    getBounds: t,
                    setScrollPosition: a,
                    getDirection: n,
                    getWrapperSize: r,
                    forceTriggerMouseMove: i,
                }) => {
                    const o = (e, a) => {
                        const n = t(e),
                            r = n[0],
                            s = n[1];
                        return s <= r ? 0 : (0, m.u)(r, s, a);
                    };
                    return (l = {}) => {
                        const m = l.settings,
                            u = void 0 === m ? y : m,
                            d = (0, s.useRef)(null),
                            _ = (0, s.useRef)(null),
                            b = (0, s.useRef)(!1),
                            f = (() => {
                                const e = (0, s.useMemo)(() => ({}), []),
                                    t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                    a = (e, a) => {
                                        t(e).set(a, a);
                                    },
                                    n = (e, a) => {
                                        t(e).delete(a);
                                    },
                                    r = (e, ...a) => {
                                        for (var n, r = v(t(e).values()); !(n = r()).done;) (0, n.value)(...a);
                                    };
                                return (0, s.useMemo)(() => ({ on: a, off: n, trigger: r }), []);
                            })(),
                            h = p(
                                () => {
                                    i && i();
                                },
                                [],
                                150,
                            ),
                            N = (0, E.useSpring)(() => ({
                                scrollPosition: 0,
                                onChange: (e) => {
                                    const t = d.current;
                                    t && (a(t, e), f.trigger('change', e), i && b.current && h());
                                },
                                onRest: (e) => f.trigger('rest', e),
                                onStart: (e) => f.trigger('start', e),
                                onPause: (e) => f.trigger('pause', e),
                            })),
                            S = N[0],
                            C = N[1],
                            I = (0, s.useCallback)(
                                (e, t, a) => {
                                    var n;
                                    const r = S.scrollPosition.get(),
                                        s = (null != (n = S.scrollPosition.goal) ? n : 0) - r;
                                    return o(e, t * a + s + r);
                                },
                                [S.scrollPosition],
                            ),
                            A = (0, s.useCallback)(
                                (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                    const n = d.current;
                                    n &&
                                        C.start({
                                            scrollPosition: o(n, e),
                                            immediate: t,
                                            reset: a,
                                            config: u.animationConfig,
                                            from: { scrollPosition: o(n, S.scrollPosition.get()) },
                                        });
                                },
                                [C, u.animationConfig, S.scrollPosition],
                            ),
                            R = (0, s.useCallback)(
                                (e) => {
                                    const t = d.current,
                                        a = _.current;
                                    if (!t || !a) return;
                                    const n = ((e, t) => {
                                            switch (t.type) {
                                                case 'proportional':
                                                    return r(e) / t.factor;
                                                case 'fixed':
                                                    return t.value;
                                            }
                                        })(a, u.step),
                                        s = I(t, e, n);
                                    A(s);
                                },
                                [A, I, u.step],
                            ),
                            k = (0, s.useCallback)(
                                (e) => {
                                    (0 !== e.deltaY && R(n(e)),
                                        d.current && f.trigger('mouseWheel', e, S.scrollPosition, t(d.current)));
                                },
                                [S.scrollPosition, R, f],
                            ),
                            P = ((e, t = []) => {
                                const a = (0, s.useRef)(),
                                    n = (0, s.useCallback)((...t) => {
                                        (a.current && a.current(), (a.current = e(...t)));
                                    }, t);
                                return (
                                    (0, s.useEffect)(
                                        () => () => {
                                            a.current && a.current();
                                        },
                                        [n],
                                    ),
                                    n
                                );
                            })(
                                () =>
                                    (0, c.v)(() => {
                                        const e = d.current;
                                        e &&
                                            (A(o(e, S.scrollPosition.goal), { immediate: !0 }),
                                            f.trigger('resizeHandled'));
                                    }),
                                [A, S.scrollPosition.goal],
                            ),
                            w = g(() => {
                                const e = d.current;
                                if (!e) return;
                                const t = o(e, S.scrollPosition.goal);
                                (t !== S.scrollPosition.goal && A(t, { immediate: !0 }),
                                    f.trigger('recalculateContent'));
                            });
                        ((0, s.useEffect)(
                            () => (
                                window.addEventListener('resize', P),
                                () => {
                                    window.removeEventListener('resize', P);
                                }
                            ),
                            [P],
                        ),
                            (0, s.useEffect)(() => {
                                const e = d.current;
                                if (!e || !i) return;
                                const t = () => {
                                        b.current = !0;
                                    },
                                    a = () => {
                                        b.current = !1;
                                    };
                                return (
                                    e.addEventListener('mouseenter', t),
                                    e.addEventListener('mouseleave', a),
                                    () => {
                                        (e.removeEventListener('mouseenter', t),
                                            e.removeEventListener('mouseleave', a));
                                    }
                                );
                            }, [d]));
                        return (0, s.useMemo)(
                            () => ({
                                getWrapperSize: () => (_.current ? r(_.current) : void 0),
                                getContainerSize: () => (d.current ? e(d.current) : void 0),
                                getBounds: () =>
                                    d.current
                                        ? t(d.current)
                                        : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                stepTimeout: u.step.clampedArrowStepTimeout,
                                clampPosition: o,
                                handleMouseWheel: k,
                                applyScroll: A,
                                applyStepTo: R,
                                contentRef: d,
                                wrapperRef: _,
                                scrollPosition: C,
                                animationScroll: S,
                                recalculateContent: w,
                                events: { on: f.on, off: f.off },
                            }),
                            [S.scrollPosition, A, R, f.off, f.on, w, k, C, u.step.clampedArrowStepTimeout],
                        );
                    };
                },
                S = N({
                    getBounds: (e) => {
                        var t, a;
                        return [
                            0,
                            e.offsetWidth -
                                (null != (t = null == (a = e.parentElement) ? void 0 : a.offsetWidth) ? t : 0),
                        ];
                    },
                    getContainerSize: (e) => e.offsetWidth,
                    getWrapperSize: (e) => e.offsetWidth,
                    setScrollPosition: (e, t) => {
                        var a;
                        e.style.transform = `translateX(-${0 | (null != (a = t.value.scrollPosition) ? a : 0)}px)`;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? h.Next : h.Prev),
                    forceTriggerMouseMove: u.O.view.forceTriggerMouseMove,
                }),
                C = 'HorizontalBar_base_49',
                I = 'HorizontalBar_base__active_5e',
                A = 'HorizontalBar_leftButton_5f',
                k = 'HorizontalBar_rightButton_03',
                P = 'HorizontalBar_track_0d',
                w = 'HorizontalBar_thumb_fd',
                D = 'HorizontalBar_rail_32',
                M = 'disable',
                O = { pending: !1, offset: 0 },
                L = (e) => {
                    var t;
                    return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                },
                T = () => {},
                x = (e, t) => Math.max(20, e.offsetWidth * t),
                z = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = L, onDrag: n = T }) => {
                    const r = (0, s.useRef)(null),
                        o = (0, s.useRef)(null),
                        d = (0, s.useRef)(null),
                        v = (0, s.useRef)(null),
                        f = (0, s.useRef)(null),
                        p = e.stepTimeout || 100,
                        E = (0, s.useState)(O),
                        y = E[0],
                        N = E[1],
                        S = (0, s.useCallback)(
                            (e) => {
                                (N(e), f.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: f.current }));
                            },
                            [n],
                        ),
                        R = () => {
                            const t = v.current,
                                a = f.current,
                                n = e.getWrapperSize(),
                                r = e.getContainerSize();
                            if (!(n && t && a && r)) return;
                            const s = e.animationScroll.scrollPosition.get(),
                                i = Math.min(1, n / r),
                                l = (0, m.u)(0, 1, s / (r - n)),
                                c = (t.offsetWidth - x(t, i)) * l;
                            ((a.style.transform = `translateX(${0 | c}px)`),
                                ((e) => {
                                    if (o.current && d.current && v.current && f.current) {
                                        if (0 === e)
                                            return (o.current.classList.add(M), void d.current.classList.remove(M));
                                        if (
                                            ((t = v.current),
                                            (a = f.current),
                                            e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                        )
                                            return (o.current.classList.remove(M), void d.current.classList.add(M));
                                        var t, a;
                                        (o.current.classList.remove(M), d.current.classList.remove(M));
                                    }
                                })(c));
                        },
                        z = g(() => {
                            ((() => {
                                const t = f.current,
                                    a = v.current,
                                    n = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(s && t && n && a)) return;
                                const i = Math.min(1, n / s);
                                ((t.style.width = `${x(a, i)}px`),
                                    (t.style.display = 'flex'),
                                    r.current &&
                                        (1 !== i ? r.current.classList.add(I) : r.current.classList.remove(I)));
                            })(),
                                R());
                        });
                    ((0, s.useEffect)(() => (0, c.v)(z)),
                        (0, s.useEffect)(
                            () =>
                                (0, c.v)(() => {
                                    const t = () => {
                                        R();
                                    };
                                    let a = T;
                                    const n = () => {
                                        (a(), (a = (0, c.v)(z)));
                                    };
                                    return (
                                        e.events.on('recalculateContent', z),
                                        e.events.on('rest', t),
                                        e.events.on('change', t),
                                        e.events.on('resizeHandled', n),
                                        () => {
                                            (a(),
                                                e.events.off('recalculateContent', z),
                                                e.events.off('rest', t),
                                                e.events.off('change', t),
                                                e.events.off('resizeHandled', n));
                                        }
                                    );
                                }),
                            [e],
                        ),
                        (0, s.useEffect)(() => {
                            if (!y.pending) return;
                            const t = u.O.client.events.mouse.move(([t, a]) => {
                                    var r;
                                    const s = e.contentRef.current,
                                        i = e.wrapperRef.current;
                                    if (!s || !i) return;
                                    const o = v.current,
                                        l = f.current;
                                    if (!o || !l) return;
                                    if ('inside' === a && t.clientX < 0) return;
                                    const c = t.clientX - y.offset - o.getBoundingClientRect().x,
                                        m = (c / o.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                    (e.scrollPosition.start({
                                        scrollPosition: e.clampPosition(s, m),
                                        reset: !0,
                                        immediate: !0,
                                        from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                    }),
                                        n({ type: 'dragging', thumb: l, thumbOffset: c, contentOffset: m }));
                                }),
                                a = u.O.client.events.mouse.up(() => {
                                    (t(), S(O));
                                });
                            return () => {
                                (t(), a());
                            };
                        }, [e, y.offset, y.pending, n, S]));
                    const B = _((t) => e.applyStepTo(t), p, [e]),
                        H = B[0],
                        W = B[1];
                    (0, s.useEffect)(
                        () => (
                            document.addEventListener('mouseup', W, !0),
                            () => document.removeEventListener('mouseup', W, !0)
                        ),
                        [W],
                    );
                    const $ = (e) => {
                        e.target.classList.contains(M) || (0, b.G)('highlight');
                    };
                    return i().createElement(
                        'div',
                        { className: l()(C, t.base), ref: r, onWheel: e.handleMouseWheel },
                        i().createElement('div', {
                            className: l()(A, t.leftButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains(M) || 0 !== e.button || ((0, b.G)('play'), H(h.Next));
                            },
                            onMouseUp: W,
                            ref: o,
                            onMouseEnter: $,
                        }),
                        i().createElement(
                            'div',
                            {
                                className: l()(P, t.track),
                                onMouseDown: (t) => {
                                    const n = f.current;
                                    if (n && 0 === t.button)
                                        if (((0, b.G)('play'), t.target === n))
                                            S({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                        else {
                                            ((t) => {
                                                const n = f.current,
                                                    r = e.contentRef.current;
                                                if (!n || !r) return;
                                                const s = a(e);
                                                e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                            })(t.screenX > n.getBoundingClientRect().x ? h.Prev : h.Next);
                                        }
                                },
                                ref: v,
                                onMouseEnter: $,
                            },
                            i().createElement('div', { ref: f, className: l()(w, t.thumb) }),
                            i().createElement('div', { className: l()(D, t.rail) }),
                        ),
                        i().createElement('div', {
                            className: l()(k, t.rightButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains(M) || 0 !== e.button || ((0, b.G)('play'), H(h.Prev));
                            },
                            onMouseUp: W,
                            ref: d,
                            onMouseEnter: $,
                        }),
                    );
                }),
                B = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                },
                H = ({
                    children: e,
                    api: t,
                    className: a,
                    barClassNames: n,
                    areaClassName: r,
                    classNames: o,
                    scrollClassName: c,
                    getStepByRailClick: m,
                    onDrag: u,
                }) => {
                    const d = (0, s.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: l()(B.base, e.base) });
                        }, [n]),
                        g = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return i().createElement(
                        'div',
                        { className: l()(B.defaultScroll, a), onWheel: t.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: l()(B.defaultScrollArea, r) },
                            i().createElement(W, { className: c, api: g, classNames: o }, e),
                        ),
                        i().createElement(z, { getStepByRailClick: m, api: t, onDrag: u, classNames: d }),
                    );
                },
                W = ({ api: e, className: t, classNames: a, children: n }) => (
                    (0, s.useEffect)(() => (0, c.v)(e.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: l()(B.base, t) },
                        i().createElement(
                            'div',
                            {
                                className: l()(B.wrapper, null == a ? void 0 : a.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            i().createElement(
                                'div',
                                { className: l()(B.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
            ((W.Bar = z), (W.Default = H));
            const $ = N({
                    getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                    getContainerSize: (e) => e.scrollHeight,
                    getWrapperSize: (e) => e.offsetHeight,
                    setScrollPosition: (e, t) => {
                        e.scrollTop = t.value.scrollPosition;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? h.Next : h.Prev),
                }),
                V = 'VerticalBar_base_f3',
                G = 'VerticalBar_base__active_72',
                U = 'VerticalBar_topButton_d7',
                j = 'VerticalBar_bottomButton_06',
                F = 'VerticalBar_track_df',
                Y = 'VerticalBar_thumb_32',
                q = 'VerticalBar_rail_43',
                J = 'disable',
                X = () => {},
                K = { pending: !1, offset: 0 },
                Z = (e) => {
                    var t;
                    return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                },
                Q = (e, t) => {
                    e.contentRef.current && t(e.contentRef.current);
                },
                ee = (e, t) => Math.max(20, e.offsetHeight * t),
                te = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = Z, onDrag: n = X }) => {
                    const r = (0, s.useRef)(null),
                        o = (0, s.useRef)(null),
                        d = (0, s.useRef)(null),
                        v = (0, s.useRef)(null),
                        f = (0, s.useRef)(null),
                        p = e.stepTimeout || 100,
                        E = (0, s.useState)(K),
                        y = E[0],
                        N = E[1],
                        S = (0, s.useCallback)(
                            (e) => {
                                (N(e), f.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: f.current }));
                            },
                            [n],
                        ),
                        C = g(() => {
                            const t = f.current,
                                a = v.current,
                                n = e.getWrapperSize(),
                                s = e.getContainerSize();
                            if (!(n && s && t && a)) return;
                            const i = Math.min(1, n / s);
                            return (
                                (t.style.height = `${ee(a, i)}px`),
                                (t.style.display = 'flex'),
                                r.current && (1 !== i ? r.current.classList.add(G) : r.current.classList.remove(G)),
                                i
                            );
                        }),
                        I = g(() => {
                            const t = v.current,
                                a = f.current,
                                n = e.getWrapperSize(),
                                r = e.getContainerSize();
                            if (!(n && t && a && r)) return;
                            const s = e.animationScroll.scrollPosition.get(),
                                i = Math.min(1, n / r),
                                l = (0, m.u)(0, 1, s / (r - n)),
                                c = (t.offsetHeight - ee(t, i)) * l;
                            ((a.style.transform = `translateY(${0 | c}px)`),
                                ((e) => {
                                    if (o.current && d.current && v.current && f.current) {
                                        if (0 === Math.round(e))
                                            return (o.current.classList.add(J), void d.current.classList.remove(J));
                                        if (
                                            ((t = v.current),
                                            (a = f.current),
                                            e - (t.offsetHeight - a.offsetHeight) >= -0.5)
                                        )
                                            return (o.current.classList.remove(J), void d.current.classList.add(J));
                                        var t, a;
                                        (o.current.classList.remove(J), d.current.classList.remove(J));
                                    }
                                })(c));
                        }),
                        A = g(() => {
                            Q(e, () => {
                                (C(), I());
                            });
                        });
                    ((0, s.useEffect)(() => (0, c.v)(A)),
                        (0, s.useEffect)(() => {
                            const t = () => {
                                Q(e, () => {
                                    I();
                                });
                            };
                            let a = X;
                            const n = () => {
                                (a(), (a = (0, c.v)(A)));
                            };
                            return (
                                e.events.on('recalculateContent', A),
                                e.events.on('rest', t),
                                e.events.on('change', t),
                                e.events.on('resizeHandled', n),
                                () => {
                                    (a(),
                                        e.events.off('recalculateContent', A),
                                        e.events.off('rest', t),
                                        e.events.off('change', t),
                                        e.events.off('resizeHandled', n));
                                }
                            );
                        }, [e]),
                        (0, s.useEffect)(() => {
                            if (!y.pending) return;
                            const t = u.O.client.events.mouse.up(() => {
                                    S(K);
                                }),
                                a = u.O.client.events.mouse.move(([t]) => {
                                    Q(e, (a) => {
                                        const r = v.current,
                                            s = f.current,
                                            i = e.getContainerSize();
                                        if (!r || !s || !i) return;
                                        const o = t.screenY - y.offset - r.getBoundingClientRect().y,
                                            l = (o / r.offsetHeight) * i;
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, l),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: a.scrollTop },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: l }));
                                    });
                                });
                            return () => {
                                (t(), a());
                            };
                        }, [e, y.offset, y.pending, n, S]));
                    const R = _((t) => e.applyStepTo(t), p, [e]),
                        k = R[0],
                        P = R[1];
                    (0, s.useEffect)(
                        () => (
                            document.addEventListener('mouseup', P, !0),
                            () => document.removeEventListener('mouseup', P, !0)
                        ),
                        [P],
                    );
                    const w = (e) => {
                        e.target.classList.contains(J) || (0, b.G)('highlight');
                    };
                    return i().createElement(
                        'div',
                        { className: l()(V, t.base), ref: r, onWheel: e.handleMouseWheel },
                        i().createElement('div', {
                            className: l()(U, t.topButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains(J) || 0 !== e.button || ((0, b.G)('play'), k(h.Next));
                            },
                            ref: o,
                            onMouseEnter: w,
                        }),
                        i().createElement(
                            'div',
                            {
                                className: l()(F, t.track),
                                onMouseDown: (t) => {
                                    const n = f.current;
                                    if (n && 0 === t.button)
                                        if (((0, b.G)('play'), t.target === n))
                                            S({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                        else {
                                            ((t) => {
                                                f.current &&
                                                    Q(e, (n) => {
                                                        if (!n) return;
                                                        const r = a(e),
                                                            s = e.clampPosition(n, n.scrollTop + r * t);
                                                        e.applyScroll(s);
                                                    });
                                            })(t.screenY > n.getBoundingClientRect().y ? h.Prev : h.Next);
                                        }
                                },
                                ref: v,
                                onMouseEnter: w,
                            },
                            i().createElement('div', { ref: f, className: l()(Y, t.thumb) }),
                            i().createElement('div', { className: l()(q, t.rail) }),
                        ),
                        i().createElement('div', {
                            className: l()(j, t.bottomButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains(J) || 0 !== e.button || ((0, b.G)('play'), k(h.Prev));
                            },
                            onMouseUp: P,
                            ref: d,
                            onMouseEnter: w,
                        }),
                    );
                }),
                ae = {
                    content: 'VerticalScroll_content_cb',
                    defaultScroll: 'VerticalScroll_defaultScroll_f8',
                    bar: 'VerticalScroll_bar_1e',
                    area: 'VerticalScroll_area_af',
                },
                ne = ({
                    children: e,
                    api: t,
                    className: a,
                    barClassNames: n,
                    areaClassName: r,
                    scrollClassName: o,
                    scrollClassNames: c,
                    getStepByRailClick: m,
                    onDrag: u,
                }) => {
                    const d = (0, s.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: l()(ae.base, e.base) });
                        }, [n]),
                        g = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return i().createElement(
                        'div',
                        { className: l()(ae.defaultScroll, a), onWheel: t.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: l()(ae.area, r) },
                            i().createElement(re, { className: o, classNames: c, api: g }, e),
                        ),
                        i().createElement(te, { getStepByRailClick: m, api: t, onDrag: u, classNames: d }),
                    );
                },
                re = ({ className: e, classNames: t, children: a, api: n }) => (
                    (0, s.useEffect)(() => (0, c.v)(n.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: l()(ae.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: l()(ae.content, null == t ? void 0 : t.content), ref: n.contentRef },
                            a,
                        ),
                    )
                );
            re.Default = ne;
            const se = { Vertical: r, Horizontal: n };
            var ie = a(3649),
                oe = a(4593),
                le = a(3403),
                ce = a(1645);
            let me;
            !(function (e) {
                ((e.AVAILABLE = 'available'),
                    (e.NOT_ENOUGH_ACHIEVEMENTS = 'notEnoughAchievements'),
                    (e.DISABLED = 'disabled'));
            })(me || (me = {}));
            var ue = a(3215),
                de = a(4598),
                ge = a(9480),
                _e = a(9174),
                be = a(3946);
            let ve;
            !(function (e) {
                ((e.Init = 'init'), (e.Static = 'static'), (e.LevelUp = 'levelUp'), (e.Downgrade = 'downgrade'));
            })(ve || (ve = {}));
            const fe = (0, ue.q3)()(
                    ({ observableModel: e }) => {
                        const t = Object.assign(
                                {
                                    root: e.object(),
                                    otherPlayerInfo: e.object('otherPlayerInfo'),
                                    dogTagModel: e.object('otherPlayerInfo.dogTagModel'),
                                    statistic: e.array('statistic'),
                                    significantAchievements: e.array('significantAchievements'),
                                },
                                e.primitives(['isInCustomizationMode']),
                                {
                                    background: e.object('background'),
                                    ribbon: e.object('ribbon'),
                                    backgroundDraft: e.object('backgroundDraft'),
                                    ribbonDraft: e.object('ribbonDraft'),
                                    backgroundOptions: e.array('backgroundOptions'),
                                    ribbonOptions: e.array('ribbonOptions'),
                                },
                            ),
                            a = (0, be.Om)(() => ge.UI(t.backgroundOptions.get(), (e) => Object.assign({}, e)), {
                                equals: de.jv,
                            }),
                            n = (0, be.Om)(() => ge.UI(t.ribbonOptions.get(), (e) => Object.assign({}, e)), {
                                equals: de.jv,
                            }),
                            r = (0, be.Om)(
                                () => ge.UI(t.statistic.get(), (e) => Object.assign({}, e, { type: e.type })),
                                { equals: de.jv },
                            ),
                            s = (0, be.Om)(
                                () =>
                                    Array(t.root.get().achievementRibbonLength)
                                        .fill({})
                                        .map((e, a) => ge.U2(t.significantAchievements.get(), a)),
                                { equals: de.jv },
                            ),
                            i = (0, be.Om)(() => {
                                const e = t.root.get(),
                                    a = e.currentRatingRank,
                                    n = e.prevCurrentRatingRank,
                                    r = e.currentRatingSubRank,
                                    s = e.prevCurrentRatingSubRank,
                                    i = e.isWTREnabled,
                                    o = e.isOtherPlayer,
                                    l = e.battlesLeftCount;
                                if (!i || o || l > 0) return ve.Static;
                                if (a === n) {
                                    if (r > s) return ve.LevelUp;
                                    if (r < s) return ve.Downgrade;
                                }
                                return a > n ? ve.LevelUp : a < n ? ve.Downgrade : ve.Static;
                            });
                        return Object.assign({}, t, {
                            computes: {
                                getStatisticList: r,
                                getSignificantAchievementsList: s,
                                getRatingWidgetState: i,
                                getBackgroundOptions: a,
                                getRibbonOptions: n,
                            },
                        });
                    },
                    ({ externalModel: e, model: t }) => {
                        const a = e.createCallback((e) => ({ isInCustomizationMode: e }), 'onSetIsInCustomizationMode'),
                            n = e.createCallback((e) => ({ backgroundDraftSlug: e }), 'onSetBackgroundDraft'),
                            r = e.createCallback((e) => ({ ribbonDraftSlug: e }), 'onSetRibbonDraft'),
                            s = e.createCallback(() => {
                                var e, n;
                                return (
                                    a(!0),
                                    {
                                        backgroundSlug: null == (e = t.backgroundDraft.get()) ? void 0 : e.slug,
                                        ribbonSlug: null == (n = t.ribbonDraft.get()) ? void 0 : n.slug,
                                    }
                                );
                            }, 'onCustomizationDiscard');
                        return {
                            onAchievementsSettings: e.createCallbackNoArgs('onAchievementsSettings'),
                            onOpenProfile: e.createCallbackNoArgs('otherPlayerInfo.onOpenProfile'),
                            setBackground: (0, _e.aD)((e) => t.background.set(e)),
                            setBackgroundDraft: (0, _e.aD)((e) => n(e.slug)),
                            setRibbon: (0, _e.aD)((e) => t.ribbon.set(e)),
                            setRibbonDraft: (0, _e.aD)((e) => r(e.slug)),
                            setIsInCustomizationMode: (0, _e.aD)((e, i = !1) => {
                                var o, l, c, m;
                                (a(e),
                                    i ||
                                        (e
                                            ? (n(t.background.get().slug), r(t.ribbon.get().slug))
                                            : ((null == (o = t.backgroundDraft.get()) ? void 0 : o.slug) ===
                                                  (null == (l = t.background.get()) ? void 0 : l.slug) &&
                                                  (null == (c = t.ribbonDraft.get()) ? void 0 : c.slug) ===
                                                      (null == (m = t.ribbon.get()) ? void 0 : m.slug)) ||
                                              s()));
                            }),
                            saveCustomization: (0, _e.aD)(
                                e.createCallback(() => {
                                    var e, n;
                                    return (
                                        a(!1),
                                        t.background.set(t.background.get()),
                                        t.ribbon.set(t.ribbon.get()),
                                        {
                                            backgroundSlug: null == (e = t.backgroundDraft.get()) ? void 0 : e.slug,
                                            ribbonSlug: null == (n = t.ribbonDraft.get()) ? void 0 : n.slug,
                                        }
                                    );
                                }, 'onCustomizationConfirmed'),
                            ),
                            onCustomizationDiscard: s,
                            onSetIsInCustomizationMode: a,
                            onSetBackgroundDraft: n,
                            onSetRibbonDraft: r,
                        };
                    },
                ),
                pe = fe[0],
                Ee = fe[1];
            var he = a(5415),
                ye = a(3415);
            const Ne = 'AchievementTooltip_base_4d',
                Se = ({ children: e, name: t, block: a, isEnabled: n = !0 }) =>
                    i().createElement(
                        ye.l,
                        { tooltipArgs: { args: { name: t, block: a }, isEnabled: n }, className: Ne },
                        e,
                    );
            let Ce, Ie, Ae;
            (!(function (e) {
                ((e.Repeatable = 'repeatable'),
                    (e.Class = 'class'),
                    (e.Custom = 'custom'),
                    (e.Series = 'series'),
                    (e.Single = 'single'),
                    (e.Rare = 'rare'));
            })(Ce || (Ce = {})),
                (function (e) {
                    ((e.None = 'none'), (e.Simple = 'simple'), (e.Series = 'series'), (e.Stages = 'stages'));
                })(Ie || (Ie = {})),
                (function (e) {
                    ((e.ExtraSmall = 'extraSmall'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.ExtraLarge = 'extraLarge'));
                })(Ae || (Ae = {})));
            const Re = {
                base: 'Achievement_base_1a',
                image: 'Achievement_image_09',
                base__small: 'Achievement_base__small_c8',
                base__medium: 'Achievement_base__medium_e1',
                base__large: 'Achievement_base__large_1d',
                base__extraLarge: 'Achievement_base__extraLarge_1b',
                counter: 'Achievement_counter_97',
            };
            var ke = a(2372),
                Pe = a(9690);
            const we = {
                base: 'Counter_base_03',
                base__medium: 'Counter_base__medium_55',
                base__large: 'Counter_base__large_0c',
                background: 'Counter_background_36',
                base__series: 'Counter_base__series_e9',
                base__stages: 'Counter_base__stages_c7',
                arrow: 'Counter_arrow_78',
                arrow__left: 'Counter_arrow__left_e6',
                count: 'Counter_count_f2',
            };
            let De;
            !(function (e) {
                ((e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large'));
            })(De || (De = {}));
            const Me = ({ value: e, type: t = Ie.Simple, size: a = De.Medium, className: n }) =>
                    i().createElement(
                        'div',
                        { className: l()(we.base, we[`base__${t}`], we[`base__${a}`], n) },
                        i().createElement(
                            'div',
                            { className: we.background },
                            i().createElement(
                                'div',
                                { className: we.count },
                                t === Ie.Stages
                                    ? (0, Pe.HG)(e)
                                    : i().createElement(ke.A, { value: e, format: 'integral' }),
                            ),
                            t === Ie.Series &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: l()(we.arrow, we.arrow__left) }),
                                    i().createElement('div', { className: l()(we.arrow, we.arrow__right) }),
                                ),
                        ),
                    ),
                Oe = R.images.gui.maps.icons.achievement,
                Le =
                    (R.strings.achievements,
                    ({ name: e, resourceName: t, type: a, rareIconId: n, rareBigIconId: r, value: s, size: i }) => {
                        if (n && r) return i === Ae.ExtraSmall ? n : r;
                        const o = viewEnv.getScale(),
                            l = ((e, t, a, n) => (a === Ce.Class ? `${e}${n}` : e.match(/^\d/) ? `c_${e}` : t))(
                                e,
                                t,
                                a,
                                s,
                            );
                        return i === Ae.ExtraSmall && o < 2 ? Oe.$dyn(l) : Oe.big.$dyn(l);
                    }),
                Te = {
                    [Ae.ExtraSmall]: De.Small,
                    [Ae.Small]: De.Small,
                    [Ae.Medium]: De.Medium,
                    [Ae.Large]: De.Medium,
                    [Ae.ExtraLarge]: De.Large,
                },
                xe = ({
                    name: e,
                    resourceName: t,
                    block: a,
                    type: n,
                    counterType: r,
                    size: o,
                    value: c,
                    rareIconId: m,
                    rareBigIconId: u,
                    isTooltipEnabled: d = !0,
                    className: g,
                }) => {
                    const _ = Le({
                            name: e,
                            resourceName: t,
                            type: n,
                            size: o,
                            value: c,
                            rareIconId: m,
                            rareBigIconId: u,
                        }),
                        b = (0, s.useState)(_),
                        v = b[0],
                        f = b[1];
                    return (
                        (0, s.useEffect)(() => {
                            if (_) {
                                if ((f(_), n === Ce.Rare)) {
                                    const e = new Image();
                                    ((e.onerror = () => {
                                        f(R.images.gui.maps.icons.achievement.noImage());
                                    }),
                                        (e.src = _.toString()));
                                }
                            } else f(R.images.gui.maps.icons.achievement.noImage());
                        }, [n, _]),
                        i().createElement(
                            Se,
                            { name: e, block: a, isEnabled: d },
                            i().createElement(
                                'div',
                                { className: l()(Re.base, Re[`base__${o}`], g) },
                                i().createElement(
                                    'div',
                                    { className: Re.image, style: { backgroundImage: `url(${v})` } },
                                    r !== Ie.None &&
                                        i().createElement(Me, {
                                            type: r,
                                            size: Te[o],
                                            value: c,
                                            className: Re.counter,
                                        }),
                                ),
                            ),
                        )
                    );
                };
            var ze = a(2056);
            let Be;
            !(function (e) {
                ((e.DISABLED_LAYOUT = 'disabledLayout'),
                    (e.NOT_ENOUGH_ACHIEVEMENTS = 'notEnoughAchievements'),
                    (e.DISABLED = 'disabled'),
                    (e.OTHER_PLAYER = 'otherPlayer'));
            })(Be || (Be = {}));
            const He = {
                    base: 'AchievementPlaceholder_base_06',
                    image: 'AchievementPlaceholder_image_92',
                    base__small: 'AchievementPlaceholder_base__small_b7',
                    base__medium: 'AchievementPlaceholder_base__medium_ef',
                    base__large: 'AchievementPlaceholder_base__large_c5',
                    base__extraLarge: 'AchievementPlaceholder_base__extraLarge_d5',
                },
                We = ({ size: e, isOtherPlayer: t = !1 }) =>
                    i().createElement(
                        ze.u,
                        {
                            contentId: R.views.lobby.achievements.tooltips.EditingTooltip('resId'),
                            args: { tooltipType: t ? Be.OTHER_PLAYER : Be.DISABLED_LAYOUT },
                        },
                        i().createElement(
                            'div',
                            { className: l()(He.base, He[`base__${e}`]) },
                            i().createElement('div', { className: He.image }),
                        ),
                    ),
                $e = {
                    [he.cJ.ExtraSmall]: Ae.Small,
                    [he.cJ.Small]: Ae.Small,
                    [he.cJ.Medium]: Ae.Large,
                    [he.cJ.Large]: Ae.Large,
                    [he.cJ.ExtraLarge]: Ae.ExtraLarge,
                };
            let Ve;
            !(function (e) {
                ((e[(e.LEFT = 0)] = 'LEFT'),
                    (e[(e.WHEEL = 1)] = 'WHEEL'),
                    (e[(e.RIGHT = 2)] = 'RIGHT'),
                    (e[(e.FOURTH = 3)] = 'FOURTH'),
                    (e[(e.FIFTH = 4)] = 'FIFTH'));
            })(Ve || (Ve = {}));
            const Ge = {
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
            let Ue, je;
            (!(function (e) {
                ((e.main = 'main'),
                    (e.primary = 'primary'),
                    (e.primaryGreen = 'primaryGreen'),
                    (e.primaryRed = 'primaryRed'),
                    (e.secondary = 'secondary'),
                    (e.ghost = 'ghost'));
            })(Ue || (Ue = {})),
                (function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'));
                })(je || (je = {})));
            const Fe = ({
                children: e,
                size: t,
                disabled: a,
                mixClass: n,
                onMouseEnter: r,
                onMouseMove: o,
                onMouseDown: c,
                onMouseUp: m,
                onMouseLeave: u,
                onClick: d,
                isFocused: g = !1,
                type: _ = Ue.primary,
                soundHover: v = 'highlight',
                soundClick: f = 'play',
            }) => {
                const p = (0, s.useRef)(null),
                    E = (0, s.useState)(g),
                    h = E[0],
                    y = E[1],
                    N = (0, s.useState)(!1),
                    S = N[0],
                    C = N[1];
                return (
                    (0, s.useEffect)(() => {
                        function e(e) {
                            h && null !== p.current && !p.current.contains(e.target) && y(!1);
                        }
                        return (
                            document.addEventListener('mousedown', e),
                            () => {
                                document.removeEventListener('mousedown', e);
                            }
                        );
                    }, [h]),
                    (0, s.useEffect)(() => {
                        y(g);
                    }, [g]),
                    i().createElement(
                        'div',
                        {
                            ref: p,
                            className: l()(
                                Ge.base,
                                Ge[`base__${_}`],
                                a && Ge.base__disabled,
                                t && Ge[`base__${t}`],
                                h && Ge.base__focus,
                                S && Ge.base__highlightActive,
                                n,
                            ),
                            onMouseEnter: function (e) {
                                a || (null !== v && (0, b.G)(v), r && r(e));
                            },
                            onMouseMove: function (e) {
                                o && o(e);
                            },
                            onMouseUp: function (e) {
                                a || (m && m(e), C(!1));
                            },
                            onMouseDown: function (e) {
                                if (a) return;
                                const t = e.button === Ve.LEFT;
                                (null !== f && t && (0, b.G)(f),
                                    c && c(e),
                                    g && (a || (p.current && (p.current.focus(), y(!0)))),
                                    t && C(!0));
                            },
                            onMouseLeave: function (e) {
                                a || (u && u(e), C(!1));
                            },
                            onClick: function (e) {
                                a || (d && d(e));
                            },
                        },
                        _ !== Ue.ghost &&
                            i().createElement(
                                i().Fragment,
                                null,
                                i().createElement('div', { className: Ge.back }),
                                i().createElement('span', { className: Ge.texture }),
                            ),
                        i().createElement(
                            'span',
                            { className: l()(Ge.state, Ge.state__default) },
                            i().createElement('span', { className: Ge.stateDisabled }),
                            i().createElement('span', { className: Ge.stateHighlightHover }),
                            i().createElement('span', { className: Ge.stateHighlightActive }),
                        ),
                        i().createElement(
                            'span',
                            { className: Ge.content, lang: R.strings.settings.LANGUAGE_CODE() },
                            e,
                        ),
                    )
                );
            };
            var Ye = a(8526),
                qe = a(5521),
                Je = a(9016);
            const Xe = {
                    base: 'Customization_base_bb',
                    buttons: 'Customization_buttons_7f',
                    button: 'Customization_button_15',
                    block: 'Customization_block_20',
                    heading: 'Customization_heading_5b',
                    block__ribbon: 'Customization_block__ribbon_ed',
                    block__background: 'Customization_block__background_0a',
                    ribbonOptions: 'Customization_ribbonOptions_7d',
                    ribbonOption: 'Customization_ribbonOption_68',
                    ribbonOption__selected: 'Customization_ribbonOption__selected_bb',
                    ribbonOption_icon: 'Customization_ribbonOption_icon_5d',
                },
                Ke = 'ValueSelector_base_fd',
                Ze = 'ValueSelector_previous_e1',
                Qe = 'ValueSelector_next_d6',
                et = 'ValueSelector_label_13',
                tt = ({ className: e, value: t, options: a, onChange: n }) =>
                    i().createElement(
                        'div',
                        { className: l()(Ke, e) },
                        i().createElement('div', {
                            className: Ze,
                            onClick: () => {
                                ((() => {
                                    const e = (a.indexOf(t) - 1 + a.length) % a.length;
                                    n(a[e]);
                                })(),
                                    u.O.sound.play.sound('arrow'));
                            },
                            onMouseEnter: () => u.O.sound.play.sound('highlight'),
                        }),
                        i().createElement('div', {
                            className: Qe,
                            onClick: () => {
                                ((() => {
                                    const e = (a.indexOf(t) + 1) % a.length;
                                    n(a[e]);
                                })(),
                                    u.O.sound.play.sound('arrow'));
                            },
                            onMouseEnter: () => u.O.sound.play.sound('highlight'),
                        }),
                        i().createElement('div', { className: et }, t),
                    ),
                at = (0, le.Pi)(({ className: e }) => {
                    var t, a, n, r;
                    const o = Ee(),
                        c = o.model,
                        m = o.controls,
                        d = c.ribbonDraft.get(),
                        g = c.ribbon.get(),
                        _ = c.computes.getRibbonOptions(),
                        b = c.backgroundDraft.get(),
                        v = c.background.get(),
                        f = c.computes.getBackgroundOptions(),
                        p = c.isInCustomizationMode.get(),
                        E = (null == b ? void 0 : b.slug) === v.slug && (null == d ? void 0 : d.slug) === g.slug,
                        h = (0, Je.t)().controls;
                    (0, Ye.gd)(E ? qe.n.NONE : qe.n.ENTER, m.saveCustomization);
                    const y = (0, s.useCallback)(() => {
                        p ? m.setIsInCustomizationMode(!1) : h.close();
                    }, [m, h, p]);
                    return (
                        (0, Ye.gd)(qe.n.ESCAPE, y, !0),
                        (0, s.useEffect)(() => {
                            const e = [];
                            (_.forEach((t) => {
                                t.image && e.push(t.image);
                            }),
                                f.forEach((t) => {
                                    t.image && e.push(t.image);
                                }),
                                e.forEach((e) => {
                                    new Image().src = e;
                                }));
                        }, [_, f]),
                        i().createElement(
                            'div',
                            {
                                className: l()(Xe.base, e),
                                style: null != d && d.image ? { backgroundImage: `url(${d.image})` } : void 0,
                            },
                            i().createElement(
                                'div',
                                { className: l()(Xe.block, Xe.block__ribbon) },
                                i().createElement(
                                    'div',
                                    { className: Xe.heading },
                                    R.strings.achievements_page.summary.achievements.customization.ribbon(),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Xe.ribbonOptions },
                                    _.map((e, t) => {
                                        const a = (null == d ? void 0 : d.image) === e.image;
                                        return e.icon
                                            ? i().createElement(
                                                  'div',
                                                  {
                                                      className: l()(Xe.ribbonOption, a && Xe.ribbonOption__selected),
                                                      key: t,
                                                      onClick: () => {
                                                          (m.setRibbonDraft(e), u.O.sound.play.sound('yes'));
                                                      },
                                                      onMouseEnter: () => u.O.sound.play.sound('highlight'),
                                                  },
                                                  i().createElement('img', {
                                                      src: e.icon,
                                                      className: Xe.ribbonOption_icon,
                                                  }),
                                              )
                                            : null;
                                    }),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: l()(Xe.block, Xe.block__background) },
                                i().createElement(
                                    'div',
                                    { className: Xe.heading },
                                    R.strings.achievements_page.summary.achievements.customization.background(),
                                ),
                                i().createElement(tt, {
                                    className: Xe.selector,
                                    value:
                                        null !=
                                        (t =
                                            null !=
                                            (a =
                                                null == (n = f.find((e) => e.image === (null == b ? void 0 : b.image)))
                                                    ? void 0
                                                    : n.label)
                                                ? a
                                                : null == (r = f[0])
                                                  ? void 0
                                                  : r.label)
                                            ? t
                                            : '',
                                    options: f.map((e) => {
                                        var t;
                                        return null != (t = e.label) ? t : '';
                                    }),
                                    onChange: (e) => {
                                        const t = f.find((t) => t.label === e);
                                        t && m.setBackgroundDraft(t);
                                    },
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: Xe.buttons },
                                i().createElement(
                                    Fe,
                                    {
                                        type: Ue.primary,
                                        size: je.medium,
                                        disabled: E,
                                        onClick: m.saveCustomization,
                                        mixClass: Xe.button,
                                    },
                                    R.strings.achievements_page.editView.footer.button.save(),
                                ),
                                i().createElement(
                                    Fe,
                                    {
                                        type: Ue.secondary,
                                        size: je.medium,
                                        onClick: m.setIsInCustomizationMode.bind(null, !1, !0),
                                        mixClass: Xe.button,
                                    },
                                    R.strings.achievements_page.editView.footer.button.cancel(),
                                ),
                            ),
                        )
                    );
                }),
                nt = 'Achievements_base_96',
                rt = 'Achievements_base__visibleWithAnimation_0a',
                st = 'Achievements_base__hide_33',
                it = 'Achievements_header_a9',
                ot = 'Achievements_base__customizationMode_b1',
                lt = 'Achievements_ribbon_06',
                ct = 'Achievements_base__fullAnimation_10',
                mt = 'Achievements_list_55',
                ut = 'Achievements_item_a4',
                dt = 'Achievements_item__fixedIndent_0c',
                gt = 'Achievements_achievement_64',
                _t = 'Achievements_achievementPlaceholder_42',
                bt = 'Achievements_customization_65';
            var vt = a(9766);
            const ft = 'AchievementsStatistic_base_36',
                pt = 'AchievementsStatistic_counter_fb',
                Et = 'AchievementsStatistic_base__otherPlayer_c3',
                ht = 'AchievementsStatistic_infoItem_10',
                yt = 'AchievementsStatistic_accent_94',
                Nt = 'AchievementsStatistic_medalIcon_24',
                St = 'AchievementsStatistic_medalIcon__received_d1',
                Ct = R.strings.achievements_page.summary.achievements,
                It = ({ isOtherPlayer: e, unique: t, total: a }) =>
                    i().createElement(
                        'div',
                        { className: l()(ft, e && Et) },
                        i().createElement('div', { className: l()(Nt, a && St) }),
                        i().createElement(
                            'div',
                            { className: pt },
                            i().createElement(vt.z, {
                                text: Ct.unique(),
                                binding: {
                                    value: i().createElement(
                                        'div',
                                        { className: yt },
                                        i().createElement(ke.A, { value: t }),
                                    ),
                                },
                            }),
                            i().createElement(vt.z, {
                                classMix: ht,
                                text: Ct.total(),
                                binding: {
                                    value: i().createElement(
                                        'div',
                                        { className: yt },
                                        i().createElement(ke.A, { value: a }),
                                    ),
                                },
                            }),
                        ),
                    );
            var At = a(6373);
            const Rt = 'Mastery_base_a0',
                kt = 'Mastery_masteryIcon_17',
                Pt = 'Mastery_masteryIcon__recieved_50',
                wt = ({ totalMastery: e, currentMastery: t }) =>
                    i().createElement(
                        At.i,
                        {
                            header: R.strings.achievements_page.tooltips.mastery.header(),
                            body: R.strings.achievements_page.tooltips.mastery.body(),
                        },
                        i().createElement(
                            'div',
                            { className: Rt },
                            i().createElement('div', { className: l()(kt, t && Pt) }),
                            i().createElement(vt.z, {
                                text: R.strings.achievements_page.summary.achievements.mastery.counter(),
                                binding: {
                                    current: i().createElement(ke.A, { value: t }),
                                    total: i().createElement(ke.A, { value: e }),
                                },
                            }),
                        ),
                    ),
                Dt = {
                    base: 'Header_base_95',
                    base__otherPlayer: 'Header_base__otherPlayer_70',
                    awardsContainer: 'Header_awardsContainer_bd',
                    title: 'Header_title_71',
                    buttonContainer: 'Header_buttonContainer_38',
                    button: 'Header_button_c3',
                    button__notFirst: 'Header_button__notFirst_e8',
                    buttonIcon: 'Header_buttonIcon_6d',
                    base__available: 'Header_base__available_43',
                    customizationIcon: 'Header_customizationIcon_43',
                    alert: 'Header_alert_fc',
                    alertIcon: 'Header_alertIcon_9d',
                },
                Mt = (e) => {
                    switch (e) {
                        case me.DISABLED:
                            return { tooltipType: Be.DISABLED };
                        case me.NOT_ENOUGH_ACHIEVEMENTS:
                            return { tooltipType: Be.NOT_ENOUGH_ACHIEVEMENTS };
                        default:
                            return { tooltipType: Be.DISABLED };
                    }
                },
                Ot = (0, le.Pi)(() => {
                    const e = Ee(),
                        t = e.model,
                        a = e.controls,
                        n = t.root.get(),
                        r = n.editState,
                        s = n.numberOfUniqueAwards,
                        o = n.totalAwards,
                        c = n.isOtherPlayer,
                        m = n.currentMastery,
                        u = n.totalMastery,
                        d = n.isCustomizationButtonEnabled,
                        g = n.isCustomizationButtonVisible,
                        _ = n.isInCustomizationMode;
                    return i().createElement(
                        'div',
                        { className: l()(Dt.base, Dt[`base__${r}`], c && Dt.base__otherPlayer) },
                        i().createElement(wt, { totalMastery: u, currentMastery: m }),
                        i().createElement(
                            'div',
                            { className: Dt.awardsContainer },
                            i().createElement(
                                'div',
                                { className: Dt.title },
                                R.strings.achievements_page.summary.achievements.title(),
                            ),
                            !c &&
                                i().createElement(
                                    'div',
                                    { className: Dt.buttonContainer },
                                    i().createElement(
                                        ze.u,
                                        {
                                            contentId: R.views.lobby.achievements.tooltips.EditingTooltip('resId'),
                                            args: Mt(r),
                                            isEnabled: !_ && r !== me.AVAILABLE,
                                        },
                                        i().createElement(
                                            'div',
                                            { id: r === me.AVAILABLE ? 'summary-customization-button' : void 0 },
                                            i().createElement(
                                                Fe,
                                                {
                                                    type: Ue.ghost,
                                                    size: je.medium,
                                                    disabled: r !== me.AVAILABLE || _,
                                                    onClick: a.onAchievementsSettings,
                                                    mixClass: Dt.button,
                                                },
                                                i().createElement('div', { className: Dt.buttonIcon }),
                                            ),
                                        ),
                                    ),
                                    g &&
                                        i().createElement(
                                            Fe,
                                            {
                                                type: Ue.ghost,
                                                size: je.medium,
                                                disabled: !d || _,
                                                onClick: () => a.setIsInCustomizationMode(!_),
                                                mixClass: l()(Dt.button, Dt.button__notFirst),
                                            },
                                            i().createElement('div', {
                                                className: l()(Dt.buttonIcon, Dt.customizationIcon),
                                            }),
                                        ),
                                    r === me.DISABLED &&
                                        i().createElement(
                                            'div',
                                            { className: Dt.alert },
                                            i().createElement('div', { className: Dt.alertIcon }),
                                        ),
                                ),
                        ),
                        i().createElement(It, { total: o, unique: s, isOtherPlayer: c }),
                    );
                });
            function Lt() {
                return (
                    (Lt =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                            }
                            return e;
                        }),
                    Lt.apply(this, arguments)
                );
            }
            const Tt = (e) => {
                    e.target === e.currentTarget && (0, b.G)(R.sounds.achievements_medal());
                },
                xt = (0, le.Pi)(() => {
                    const e = Ee().model,
                        t = e.computes,
                        a = e.root.get(),
                        n = a.editState,
                        r = a.isSuccessfullyEdited,
                        s = a.isOtherPlayer,
                        o = a.isEditOpened,
                        c = a.isInCustomizationMode,
                        m = (0, he.GS)().mediaSize,
                        u = e.ribbon.get();
                    let d = 0;
                    const g = s ? Ae.Small : $e[m],
                        _ = n === me.AVAILABLE && r;
                    return i().createElement(
                        'div',
                        { className: l()(nt, _ && ct, !o && _ && rt, o && st, c && ot) },
                        i().createElement('div', { className: it }, i().createElement(Ot, null)),
                        i().createElement(
                            'div',
                            { className: lt, style: c ? void 0 : { backgroundImage: `url(${u.image})` } },
                            i().createElement(
                                'div',
                                { className: mt },
                                ge.UI(t.getSignificantAchievementsList(), (e, t) =>
                                    i().createElement(
                                        'div',
                                        {
                                            className: l()(ut, s && dt),
                                            key: t,
                                            style: _ && !s ? { animationDelay: 150 * (t + 1) + 'ms' } : void 0,
                                            onAnimationStart: Tt,
                                        },
                                        (() => {
                                            const t = !_ && !s;
                                            return e
                                                ? e.isNew && t
                                                    ? (d++,
                                                      i().createElement(
                                                          i().Fragment,
                                                          null,
                                                          i().createElement(
                                                              'div',
                                                              {
                                                                  className: gt,
                                                                  style: { animationDelay: 300 * d + 'ms' },
                                                                  onAnimationStart: Tt,
                                                              },
                                                              i().createElement(xe, Lt({}, e, { size: g })),
                                                          ),
                                                          i().createElement(
                                                              'div',
                                                              {
                                                                  className: _t,
                                                                  style: { animationDelay: 300 * d + 'ms' },
                                                              },
                                                              i().createElement(We, { size: g, isOtherPlayer: s }),
                                                          ),
                                                      ))
                                                    : i().createElement(xe, Lt({}, e, { size: g }))
                                                : i().createElement(We, { size: g, isOtherPlayer: s });
                                        })(),
                                    ),
                                ),
                            ),
                            i().createElement(at, { className: bt }),
                        ),
                    );
                }),
                zt = 'Header_base_90',
                Bt = 'Header_iconInfo_20',
                Ht = R.strings.achievements_page.summary,
                Wt = ({ isWTREnabled: e }) =>
                    e
                        ? i().createElement(
                              ze.u,
                              { contentId: R.views.lobby.achievements.tooltips.WTRInfoTooltip('resId') },
                              i().createElement(
                                  'div',
                                  { className: zt },
                                  Ht.statistic.title(),
                                  i().createElement('div', { className: Bt }),
                              ),
                          )
                        : i().createElement('div', { className: zt }, Ht.withoutWTR.statistic.title());
            var $t = a(5959),
                Vt = a(8432);
            const Gt = 'DogTag_base_2b',
                Ut = 'DogTag_engraving_eb',
                jt = 'DogTag_background_7f',
                Ft = R.strings.settings.LANGUAGE_CODE(),
                Yt = ['de', 'es', 'fr', 'hu', 'it', 'pl', 'pt_br', 'ru', 'tr', 'uk', 'zh_cn', 'cs'];
            let qt;
            !(function (e) {
                ((e.Small = 'small'), (e.Big = 'big'));
            })(qt || (qt = {}));
            const Jt = ({ background: e, engraving: t, size: a = qt.Big, grade: n = 0, className: r }) => {
                    const s = Yt.includes(Ft) ? `_${Ft}` : '';
                    return i().createElement(
                        'div',
                        { className: l()(Gt, r) },
                        i().createElement('div', {
                            className: jt,
                            style: {
                                backgroundImage: `url(R.images.gui.maps.icons.dogtags.${a}.backgrounds.background_${e}_0)`,
                            },
                        }),
                        i().createElement('div', {
                            className: Ut,
                            style: {
                                backgroundImage: `url(R.images.gui.maps.icons.dogtags.${a}.engravings.engraving_${t}_${n}${s})`,
                            },
                        }),
                    );
                },
                Xt = {
                    base: 'AnimatedDogTag_base_9e',
                    base__small: 'AnimatedDogTag_base__small_ce',
                    base__medium: 'AnimatedDogTag_base__medium_13',
                    base__large: 'AnimatedDogTag_base__large_04',
                    shadow: 'AnimatedDogTag_shadow_24',
                    backplateBox: 'AnimatedDogTag_backplateBox_a8',
                    backplate: 'AnimatedDogTag_backplate_2d',
                    base__extraSmall: 'AnimatedDogTag_base__extraSmall_64',
                    dogTag: 'AnimatedDogTag_dogTag_34',
                    videoBox: 'AnimatedDogTag_videoBox_10',
                    video: 'AnimatedDogTag_video_e4',
                };
            var Kt = a(7522);
            const Zt = {
                base: 'Counter_base_29',
                base__extraSmall: 'Counter_base__extraSmall_f8',
                text: 'Counter_text_73',
                base__medium: 'Counter_base__medium_78',
                base__large: 'Counter_base__large_88',
                count: 'Counter_count_ee',
                base__small: 'Counter_base__small_52',
            };
            let Qt;
            !(function (e) {
                ((e.ExtraSmall = 'extraSmall'), (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large'));
            })(Qt || (Qt = {}));
            const ea = ({ engraving: e, count: t, size: a }) => {
                const n = R.strings.dogtags.component.engraving.coupled.$num(e).counter();
                return i().createElement(
                    'div',
                    { className: l()(Zt.base, Zt[`base__${a}`]) },
                    i().createElement('div', { className: Zt.text }, n),
                    i().createElement('div', { className: Zt.count }, t),
                );
            };
            let ta, aa;
            (!(function (e) {
                ((e.Static = 'static'),
                    (e.Intro = 'intro'),
                    (e.AutoShowing = 'autoShowing'),
                    (e.Showing = 'showing'),
                    (e.Loop = 'loop'),
                    (e.Hiding = 'hiding'));
            })(ta || (ta = {})),
                (function (e) {
                    ((e.ExtraSmall = 'extraSmall'), (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large'));
                })(aa || (aa = {})));
            const na = { duration: 500, easing: Kt.Z.easeOutBack },
                ra = {
                    [aa.ExtraSmall]: Qt.ExtraSmall,
                    [aa.Small]: Qt.Small,
                    [aa.Medium]: Qt.Medium,
                    [aa.Large]: Qt.Large,
                },
                sa = { [aa.ExtraSmall]: 'small', [aa.Small]: 'big', [aa.Medium]: 'big', [aa.Large]: 's500x300' },
                ia = {
                    vehicle_sparks_1: 'ach_dog_tag_animation_01',
                    vehicle_sparks_2: 'ach_dog_tag_animation_02',
                    vehicle_sparks_3: 'ach_dog_tag_animation_03',
                },
                oa = ({
                    background: e,
                    engraving: t,
                    progress: a = 0,
                    animationState: n = ta.Static,
                    animationName: r = '',
                    onAnimationEnd: o,
                    grade: m = 0,
                    showBackplate: u = !0,
                    size: d = aa.Medium,
                    className: g,
                    isSoundOff: _,
                }) => {
                    const v = (0, s.useRef)(null),
                        f = (0, s.useState)([]),
                        p = f[0],
                        h = f[1],
                        y = R.videos.dogtags.$dyn(r);
                    (0, s.useEffect)(() => {
                        const e = v.current;
                        if (e)
                            return (0, c.v)(() => {
                                h(e.getCachedKeyframes());
                            });
                    }, [v]);
                    const N = (0, E.useSpring)(() => ({ from: { opacity: 0 }, config: na }), [n]),
                        S = N[0],
                        C = N[1],
                        I = (0, E.useSpring)(() => ({
                            from: { opacity: 0, transform: 'translateY(-50%)' },
                            config: na,
                            onRest: () => {
                                n === ta.Hiding && (null == o || o());
                            },
                        })),
                        A = I[0],
                        k = I[1],
                        P = (0, s.useCallback)(() => {
                            var e;
                            (null == (e = v.current) || e.play(),
                                k.start({ to: { opacity: 1, transform: 'translateY(0%)' }, immediate: !1 }),
                                !_ && (0, b.G)(R.sounds.$dyn(ia[r])));
                        }, [r, k, _]);
                    (0, s.useEffect)(() => {
                        switch (n) {
                            case ta.Intro:
                                return void C.start({ to: { opacity: 1 }, immediate: !1 });
                            case ta.AutoShowing:
                                return (C.start({ to: { opacity: 1 }, immediate: !1 }), void P());
                            case ta.Showing:
                                return void P();
                            case ta.Loop:
                                return (
                                    w(),
                                    C.start({ to: { opacity: 1 }, immediate: !0 }),
                                    void k.start({ to: { opacity: 1, transform: 'translateY(0%)' }, immediate: !0 })
                                );
                            case ta.Hiding:
                                return (
                                    C.start({ to: { opacity: 0 } }),
                                    void k.start({ to: { opacity: 0, transform: 'translateY(-50%)' }, immediate: !1 })
                                );
                            case ta.Static:
                                (C.start({ to: { opacity: 1 }, immediate: !0 }),
                                    k.start({ to: { opacity: 1, transform: 'translateY(0%)' }, immediate: !0 }));
                        }
                    }, [n, k, C, P]);
                    const w = () => {
                        v.current && (v.current.goToAndPlay(5), (0, b.G)(R.sounds.ach_dog_tag_idle()));
                    };
                    return i().createElement(
                        E.animated.div,
                        { className: l()(Xt.base, Xt[`base__${d}`], g), style: S },
                        u &&
                            i().createElement(
                                E.animated.div,
                                { className: Xt.backplateBox, style: A },
                                i().createElement(
                                    'div',
                                    {
                                        className: Xt.backplate,
                                        style: {
                                            backgroundImage: `url(R.images.gui.maps.icons.dogtags.${sa[d]}.bottom_plates.bottom_plate_${e})`,
                                        },
                                    },
                                    i().createElement(ea, { engraving: t, count: a, size: ra[d] }),
                                ),
                            ),
                        i().createElement('div', { className: Xt.shadow }),
                        n !== ta.Static &&
                            $t.graphicsQuality.isHigh() &&
                            Boolean(y) &&
                            i().createElement(
                                'div',
                                { className: Xt.videoBox },
                                i().createElement(Vt.n, {
                                    ref: v,
                                    className: Xt.video,
                                    onEnded: w,
                                    isPrebufferKeyframes: Boolean(p.length),
                                    src: y,
                                }),
                            ),
                        i().createElement(Jt, {
                            background: e,
                            engraving: t,
                            grade: m,
                            size: qt.Big,
                            className: Xt.dogTag,
                        }),
                    );
                };
            var la = a(6349);
            const ca = 'Clan_base_98',
                ma = 'Clan_title_88',
                ua = 'Clan_icon_46',
                da = 'Clan_row_e6',
                ga = 'Clan_caption_1a',
                _a = 'Clan_buttonBox_bc',
                ba = 'Clan_button_1d',
                va = R.strings.achievements_page.playerInfo.clan,
                fa = (0, le.Pi)(() => {
                    const e = Ee(),
                        t = e.model,
                        a = e.controls,
                        n = t.otherPlayerInfo.get(),
                        r = n.clanEmblem,
                        s = n.clanName,
                        o = n.clanPost,
                        l = n.clanJoiningTime,
                        c = n.showClanButton;
                    return i().createElement(
                        'div',
                        { className: ca },
                        i().createElement(
                            'div',
                            { className: ma },
                            r && i().createElement('div', { className: ua, style: { backgroundImage: `url(${r})` } }),
                            i().createElement(la.l, { content: s }),
                        ),
                        i().createElement(
                            'div',
                            null,
                            i().createElement(
                                'div',
                                { className: da },
                                i().createElement('div', { className: ga }, va.post()),
                                i().createElement('div', null, o),
                            ),
                            i().createElement(
                                'div',
                                { className: da },
                                i().createElement('div', { className: ga }, va.date()),
                                i().createElement('div', null, l),
                            ),
                        ),
                        c &&
                            i().createElement(
                                'div',
                                { className: _a },
                                i().createElement(Fe, { onClick: a.onOpenProfile, mixClass: ba }, va.button()),
                            ),
                    );
                }),
                pa = 33,
                Ea = 0,
                ha = !0,
                ya = 'play';
            const Na = [
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
            function Sa() {
                return (
                    (Sa =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                            }
                            return e;
                        }),
                    Sa.apply(this, arguments)
                );
            }
            const Ca = (0, s.memo)(function (e) {
                    let t = e.width,
                        a = e.height,
                        n = e.getImageSource,
                        r = e.frameCount,
                        o = e.onAnimate,
                        l = e.frameTime,
                        c = void 0 === l ? pa : l,
                        m = e.initialFrameIndex,
                        u = void 0 === m ? Ea : m,
                        d = e.lastFrameIndex,
                        g = void 0 === d ? r - 1 : d,
                        _ = e.loop,
                        b = void 0 === _ ? ha : _,
                        v = e.state,
                        f = void 0 === v ? ya : v,
                        p = e.onAnimationDone,
                        E = e.onAnimationComplete,
                        h = e.poster,
                        y = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                            return r;
                        })(e, Na);
                    const N = (0, s.useRef)(null);
                    return (
                        (0, s.useEffect)(() => {
                            const e = N.current;
                            if (!e) return;
                            const t = e.getContext('2d'),
                                a = (a) => {
                                    (t.clearRect(0, 0, e.width, e.height), t.drawImage(a.img, -a.x, -a.y));
                                };
                            switch (f) {
                                case 'play':
                                    return (function () {
                                        const e = Ra(u, g, n),
                                            t = Ia(u, g),
                                            r = window.setInterval(() => {
                                                const n = t(),
                                                    s = e.get(n);
                                                s
                                                    ? (null == o || o(n, s),
                                                      a(s),
                                                      n === g &&
                                                          (null == E || E(),
                                                          b || (null == p || p(), window.clearInterval(r))))
                                                    : console.error('frameImage was not provided in frameImages Map');
                                            }, c);
                                        return () => window.clearInterval(r);
                                    })();
                                case 'stop':
                                    return (function () {
                                        const e = 0 === u && h ? { path: h, x: 0, y: 0 } : n(u),
                                            t = new Image();
                                        t.src = e.path;
                                        const r = () => a(Aa(e, t));
                                        return (t.addEventListener('load', r), () => t.removeEventListener('load', r));
                                    })();
                                default:
                                    return console.error('[CanvasSequence] Unreachable state!');
                            }
                        }, [c, n, u, g, b, o, E, p, h, f]),
                        i().createElement('canvas', Sa({}, y, { width: t, height: a, ref: N }))
                    );
                }),
                Ia = (e, t) => {
                    let a = e;
                    return () => {
                        const n = a;
                        return ((a += 1), a > t && (a = e), n);
                    };
                },
                Aa = (e, t) => Object.assign({}, e, { img: t }),
                Ra = (e, t, a) => {
                    const n = new Map(),
                        r = {};
                    for (let s = e; s <= t; s++) {
                        const e = a(s),
                            t = r[e.path];
                        if (t) n.set(s, Aa(e, t));
                        else {
                            const t = new Image();
                            ((r[e.path] = t),
                                (t.src = e.path),
                                (t.onerror = () => {
                                    console.error(
                                        `[CanvasSequence] Error loading image(${s})`,
                                        e.path,
                                        `(${e.x},${e.y})`,
                                    );
                                }),
                                n.set(s, Aa(e, t)));
                        }
                    }
                    return n;
                },
                ka = 'DogTag_base_75',
                Pa = 'DogTag_glow_47',
                wa = 'DogTag_icon_ff',
                Da = 'DogTag_frame_fd',
                Ma = 'DogTag_tooltipHitZone_1e',
                Oa = {
                    width: 300,
                    height: 200,
                    frameCount: 42,
                    chunk: { count: 3, rows: 5, columns: 3 },
                    getChunkPath:
                        ((La = 'R.images.gui.maps.icons.achievements.summary.dog_tag.frame_sequence_'),
                        (e) => `${La}${e}`),
                };
            var La;
            const Ta = (function (e) {
                    const t = e.chunk,
                        a = t.rows * t.columns;
                    return (n) => {
                        const r = n % a,
                            s = (r % t.columns) * e.width,
                            i = Math.trunc(r / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(n / a)), x: s, y: i };
                    };
                })(Oa),
                xa = (0, le.Pi)(() => {
                    const e = Ee().model.dogTagModel.get(),
                        t = e.background,
                        a = e.engraving,
                        n = e.isHighlighted,
                        r = e.engravingCompId,
                        s = e.backgroundCompId;
                    return i().createElement(
                        'div',
                        { className: ka },
                        i().createElement('div', { className: Pa }),
                        i().createElement('div', {
                            className: wa,
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.dogtags.small.backgrounds.$dyn(t)})`,
                            },
                        }),
                        i().createElement('div', {
                            className: wa,
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.dogtags.small.engravings.$dyn(a)})`,
                            },
                        }),
                        n &&
                            i().createElement(Ca, {
                                width: Oa.width,
                                height: Oa.height,
                                frameCount: Oa.frameCount,
                                getImageSource: Ta,
                                className: Da,
                            }),
                        i().createElement(
                            ye.l,
                            { tooltipArgs: { args: { compId: s } } },
                            i().createElement('div', { className: Ma }),
                        ),
                        i().createElement(
                            ye.l,
                            { tooltipArgs: { args: { compId: r } } },
                            i().createElement('div', { className: Ma }),
                        ),
                    );
                }),
                za = {
                    base: 'PlayerInfo_base_ed',
                    dogTag: 'PlayerInfo_dogTag_17',
                    iconLock: 'PlayerInfo_iconLock_ab',
                    dogTagStatus: 'PlayerInfo_dogTagStatus_f8',
                    separator: 'PlayerInfo_separator_83',
                    clan: 'PlayerInfo_clan_87',
                    animatedDogTag: 'PlayerInfo_animatedDogTag_5f',
                },
                Ba = R.strings.achievements_page.playerInfo,
                Ha = (0, le.Pi)(() => {
                    const e = Ee().model,
                        t = e.dogTagModel.get(),
                        a = t.isEnabled,
                        n = t.purpose,
                        r = t.backgroundCompId,
                        s = t.engravingCompId,
                        o = t.animation,
                        l = e.otherPlayerInfo.get().isInClan,
                        c = 'coupled' === n;
                    return i().createElement(
                        'div',
                        { className: za.base },
                        i().createElement(
                            'div',
                            { className: za.dogTag },
                            (() => {
                                switch (!0) {
                                    case a && c:
                                        return i().createElement(
                                            ye.l,
                                            {
                                                tooltipArgs: {
                                                    contentId:
                                                        R.views.lobby.dog_tags.AnimatedDogTagGradeTooltip('resId'),
                                                    args: { backgroundId: r, engravingId: s },
                                                },
                                                className: za.animatedDogTag,
                                            },
                                            i().createElement(oa, {
                                                background: r,
                                                engraving: s,
                                                size: aa.ExtraSmall,
                                                showBackplate: !1,
                                                animationName: o,
                                                animationState: ta.Loop,
                                            }),
                                        );
                                    case a && !c:
                                        return i().createElement(xa, null);
                                    default:
                                        return i().createElement(
                                            i().Fragment,
                                            null,
                                            i().createElement('div', { className: za.iconLock }),
                                            i().createElement(
                                                'div',
                                                { className: za.dogTagStatus },
                                                Ba.dogTag.unavailable(),
                                            ),
                                        );
                                }
                            })(),
                        ),
                        i().createElement('div', { className: za.separator }),
                        i().createElement(
                            'div',
                            { className: za.clan },
                            l
                                ? i().createElement(fa, null)
                                : i().createElement('div', { className: za.clanStatus }, Ba.clan.noClan()),
                        ),
                    );
                }),
                Wa = 600;
            var $a = a(122);
            const Va = 'DowngradeAnimation_base_1c',
                Ga = 'DowngradeAnimation_oldElement_48',
                Ua = 'DowngradeAnimation_newElement_d5',
                ja = ({ oldElement: e, newElement: t, delay: a = 0 }) => (
                    (0, s.useEffect)(() => (0, $a.F)(() => (0, b.G)(R.sounds.achievements_leveldown()), a), [a]),
                    i().createElement(
                        'div',
                        { className: Va },
                        i().createElement(
                            'div',
                            { className: Ga, style: { animationDelay: `${a}ms`, animationDuration: '300ms' } },
                            e,
                        ),
                        i().createElement(
                            'div',
                            { className: Ua, style: { animationDelay: `${a + 300}ms`, animationDuration: '300ms' } },
                            t,
                        ),
                    )
                ),
                Fa = 'LevelUpAnimation_base_8a',
                Ya = 'LevelUpAnimation_particlesAnim_e9',
                qa = 'LevelUpAnimation_oldElement_08',
                Ja = 'LevelUpAnimation_newElement_4a',
                Xa = (e) => e * e,
                Ka = ({ oldElement: e, newElement: t, delay: a = 0 }) => {
                    const n = (0, s.useRef)(null),
                        r = (0, s.useRef)(null),
                        o = (0, s.useState)(!0),
                        l = o[0],
                        c = o[1],
                        m = (0, s.useRef)(null),
                        u = (0, E.useSpring)(() => ({
                            progress: 0,
                            onChange: (e) => {
                                if (!r.current || !n.current) return;
                                const t = e.value.progress;
                                ((n.current.style.maskImage = `linear-gradient(55deg, transparent ${t}%, #000 ${t}%)`),
                                    (r.current.style.maskImage = `linear-gradient(55deg, #000 ${t}%, transparent ${t}%)`));
                            },
                        }))[1];
                    return (
                        (0, s.useEffect)(
                            () =>
                                (0, $a.F)(() => {
                                    var e;
                                    (null == (e = m.current) || e.play(), (0, b.G)(R.sounds.achievements_levelup()));
                                }, a),
                            [a, m],
                        ),
                        (0, s.useEffect)(() => {
                            u.start({
                                from: { progress: 0 },
                                to: { progress: 100 },
                                delay: a,
                                config: { duration: 1700, easing: Xa },
                            });
                        }, [u, a]),
                        i().createElement(
                            'div',
                            { className: Fa },
                            l &&
                                i().createElement(Vt.n, {
                                    ref: m,
                                    onEnded: () => c(!1),
                                    className: Ya,
                                    src: R.videos.achievements.up_particles(),
                                }),
                            i().createElement('div', { className: qa, ref: n }, e),
                            i().createElement('div', { className: Ja, ref: r }, t),
                        )
                    );
                },
                Za = 'Content_icon_bd',
                Qa = R.images.gui.maps.icons.achievements.rating,
                en = (e, t = !1) =>
                    t
                        ? Qa.c_180x180
                        : e >= he.cJ.Large
                          ? Qa.c_360x360
                          : e >= he.cJ.Medium
                            ? Qa.c_280x280
                            : Qa.c_180x180,
                tn = (e, t, a, n = !0, r = !1) => ({
                    backgroundImage: n ? `url(${en(a, r).$dyn(`rating_${e}_${t}`)})` : `url(${en(a, r).wotpr()})`,
                }),
                an = (0, le.Pi)(() => {
                    const e = Ee().model,
                        t = e.root.get(),
                        a = t.currentRatingRank,
                        n = t.prevCurrentRatingRank,
                        r = t.currentRatingSubRank,
                        o = t.prevCurrentRatingSubRank,
                        l = t.isWTREnabled,
                        m = t.battlesLeftCount,
                        u = t.isOtherPlayer,
                        d = e.computes.getRatingWidgetState,
                        g = (0, he.GS)().mediaSize,
                        _ = (0, s.useState)(ve.Init),
                        b = _[0],
                        v = _[1],
                        f = 0 === m,
                        p = f ? a : 0,
                        E = f ? r : 0;
                    return (
                        (0, s.useEffect)(
                            () =>
                                (0, c.v)(() => {
                                    v(d());
                                }),
                            [d],
                        ),
                        i().createElement(
                            'div',
                            null,
                            (() => {
                                switch (b) {
                                    case ve.LevelUp:
                                        return i().createElement(Ka, {
                                            oldElement: i().createElement('div', {
                                                className: Za,
                                                style: tn(n, o, g, l, u),
                                            }),
                                            newElement: i().createElement('div', {
                                                className: Za,
                                                style: tn(a, r, g, l, u),
                                            }),
                                            delay: 900,
                                        });
                                    case ve.Downgrade:
                                        return i().createElement(ja, {
                                            oldElement: i().createElement('div', {
                                                className: Za,
                                                style: tn(n, o, g, l, u),
                                            }),
                                            newElement: i().createElement('div', {
                                                className: Za,
                                                style: tn(a, r, g, l, u),
                                            }),
                                            delay: Wa,
                                        });
                                    case ve.Static:
                                        return i().createElement('div', { className: Za, style: tn(p, E, g, l, u) });
                                    default:
                                        return null;
                                }
                            })(),
                        )
                    );
                }),
                nn = {
                    base: 'Points_base_2a',
                    base__wotpr: 'Points_base__wotpr_fb',
                    prevPoints: 'Points_prevPoints_e8',
                    base__increase: 'Points_base__increase_fb',
                    increasePrev: 'Points_increasePrev_ad',
                    base__decrease: 'Points_base__decrease_dd',
                    decreasePrev: 'Points_decreasePrev_e6',
                    newPoints: 'Points_newPoints_6f',
                    increaseNew: 'Points_increaseNew_fc',
                    decreaseNew: 'Points_decreaseNew_d4',
                };
            let rn;
            !(function (e) {
                ((e.Init = 'init'), (e.Increase = 'increase'), (e.Decrease = 'decrease'));
            })(rn || (rn = {}));
            const sn = (0, le.Pi)(() => {
                    const e = Ee().model,
                        t = e.root.get(),
                        a = t.personalScore,
                        n = t.prevPersonalScore,
                        r = t.isWTREnabled,
                        o = e.computes.getRatingWidgetState,
                        c = (0, s.useState)(rn.Init),
                        m = c[0],
                        u = c[1],
                        d = o() === ve.LevelUp || o() === ve.Downgrade;
                    return (
                        (0, s.useEffect)(() => {
                            d && (a > n ? u(rn.Increase) : a < n && u(rn.Decrease));
                        }, [d, a, n]),
                        i().createElement(
                            'div',
                            { className: l()(nn.base, nn[`base__${m}`], !r && nn.base__wotpr) },
                            d
                                ? i().createElement(
                                      i().Fragment,
                                      null,
                                      i().createElement(
                                          'div',
                                          { className: l()(nn.prevPoints), style: { animationDelay: '600ms' } },
                                          i().createElement(ke.A, { value: n }),
                                      ),
                                      i().createElement(
                                          'div',
                                          { className: l()(nn.newPoints), style: { animationDelay: '600ms' } },
                                          i().createElement(ke.A, { value: a }),
                                      ),
                                  )
                                : i().createElement(ke.A, { value: a }),
                        )
                    );
                }),
                on = 'RatingWidget_base_dc',
                ln = 'RatingWidget_image_7d',
                cn = 'RatingWidget_decoration_9f',
                mn = 'RatingWidget_decoration__otherPlayer_95',
                un = 'RatingWidget_particlesBox_8d',
                dn = 'RatingWidget_particles_36',
                gn = 'RatingWidget_footer_0e',
                _n = 'Status_base_48',
                bn = 'Status_statusText_33',
                vn = 'Status_caption_5f',
                fn = R.strings.achievements_page.ratingWidget.status;
            var pn;
            !(function (e) {
                ((e.Initial = 'initial'),
                    (e.Progress = 'progress'),
                    (e.WTRDisabled = 'WTRDisabled'),
                    (e.OtherPlayer = 'otherPlayer'),
                    (e.OtherPlayerWithProgress = 'otherPlayerWithProgress'));
            })(pn || (pn = {}));
            const En = (0, le.Pi)(() => {
                    const e = Ee().model.root.get(),
                        t = e.requiredNumberOfBattles,
                        a = e.battlesLeftCount,
                        n = e.isWTREnabled,
                        r = e.isOtherPlayer;
                    return i().createElement(
                        'div',
                        { className: _n },
                        (() => {
                            switch (
                                ((e, t, a, n) =>
                                    n
                                        ? a
                                            ? pn.OtherPlayerWithProgress
                                            : pn.OtherPlayer
                                        : a
                                          ? e === t
                                              ? pn.Initial
                                              : pn.Progress
                                          : pn.WTRDisabled)(t, a, n, r)
                            ) {
                                case pn.Initial:
                                    return i().createElement(vt.z, {
                                        classMix: bn,
                                        text: fn.initial(),
                                        binding: { amount: i().createElement('div', { className: vn }, t) },
                                    });
                                case pn.Progress:
                                    return i().createElement(vt.z, {
                                        classMix: bn,
                                        text: fn.progress(),
                                        binding: { amount: i().createElement('div', { className: vn }, a) },
                                    });
                                case pn.WTRDisabled:
                                    return i().createElement(vt.z, { classMix: bn, text: fn.withoutWTR() });
                                case pn.OtherPlayer:
                                    return i().createElement(vt.z, { classMix: bn, text: fn.otherPlayer() });
                                case pn.OtherPlayerWithProgress:
                                    return i().createElement(vt.z, {
                                        classMix: bn,
                                        text: fn.OtherPlayerWithProgress(),
                                        binding: { amount: i().createElement('div', { className: vn }, t) },
                                    });
                                default:
                                    return i().createElement('div', null);
                            }
                        })(),
                    );
                }),
                hn = (0, le.Pi)(() => {
                    const e = Ee().model,
                        t = e.root.get(),
                        a = t.battlesLeftCount,
                        n = t.isWTREnabled,
                        r = t.isOtherPlayer,
                        s = 0 === a,
                        o = (0, e.computes.getRatingWidgetState)() === ve.Downgrade;
                    return i().createElement(
                        ze.u,
                        {
                            contentId: n
                                ? R.views.lobby.achievements.tooltips.WTRMainTooltip('resId')
                                : R.views.lobby.achievements.tooltips.WOTPRMainTooltip('resId'),
                        },
                        i().createElement(
                            'div',
                            { className: on },
                            i().createElement(
                                'div',
                                { className: ln },
                                i().createElement('div', { className: l()(cn, r && mn) }),
                                s &&
                                    i().createElement(
                                        'div',
                                        { className: un, style: o ? { animationDelay: '1200ms' } : void 0 },
                                        i().createElement(Vt.n, {
                                            className: dn,
                                            src: R.videos.achievements.particles(),
                                            autoplay: !0,
                                            loop: !0,
                                        }),
                                    ),
                                i().createElement(an, null),
                            ),
                            i().createElement(
                                'div',
                                { className: gn },
                                s ? i().createElement(sn, null) : i().createElement(En, null),
                            ),
                        ),
                    );
                }),
                yn = 'Statistic_base_79',
                Nn = 'Statistic_list_41',
                Sn = 'Statistic_part_90',
                Cn = 'Statistic_item_87',
                In = 'Statistic_ratingWidget_9d',
                An = 'StatisticItem_base_d9',
                Rn = 'StatisticItem_icon_4e',
                kn = 'StatisticItem_amount_de',
                Pn = 'StatisticItem_title_f7',
                wn = 'StatisticItem_caption_65',
                Dn = 'StatisticItem_footer_61',
                Mn = 'StatisticItem_footerText_2f',
                On = R.strings.achievements_page.summary,
                Ln = (e, t, a) =>
                    a
                        ? { backgroundImage: `url(${R.images.gui.maps.icons.achievements.summary.kpi.small.$dyn(e)})` }
                        : t >= he.cJ.Large
                          ? { backgroundImage: `url(${R.images.gui.maps.icons.achievements.summary.kpi.big.$dyn(e)})` }
                          : t >= he.cJ.Medium
                            ? {
                                  backgroundImage: `url(${R.images.gui.maps.icons.achievements.summary.kpi.medium.$dyn(e)})`,
                              }
                            : {
                                  backgroundImage: `url(${R.images.gui.maps.icons.achievements.summary.kpi.small.$dyn(e)})`,
                              },
                Tn = (0, s.memo)(({ type: e, mainValue: t, additionalValue: a, isOtherPlayer: n }) => {
                    const r = (0, he.GS)().mediaSize;
                    return i().createElement(
                        ze.u,
                        { contentId: R.views.lobby.achievements.tooltips.KPITooltip('resId'), args: { kpiType: e } },
                        i().createElement(
                            'div',
                            { className: An },
                            i().createElement('div', { className: Rn, style: Ln(e, r, n) }),
                            i().createElement('div', { className: kn }, t),
                            i().createElement('div', { className: Pn }, On.main.$dyn(e)),
                            i().createElement(
                                'div',
                                { className: Dn },
                                i().createElement(vt.z, {
                                    classMix: Mn,
                                    text: On.additional.$dyn(e),
                                    binding: { value: i().createElement('div', { className: wn }, a) },
                                }),
                            ),
                        ),
                    );
                }),
                xn = (0, le.Pi)(() => {
                    const e = Ee().model,
                        t = e.computes,
                        a = Math.floor(t.getStatisticList().length / 2),
                        n = t.getStatisticList().slice(0, a),
                        r = t.getStatisticList().slice(a);
                    return i().createElement(
                        'div',
                        { className: yn },
                        i().createElement(
                            'div',
                            { className: Nn },
                            i().createElement(
                                'div',
                                { className: Sn },
                                n.map(({ type: t, mainValue: a, additionalValue: n }, r) =>
                                    i().createElement(
                                        'div',
                                        { className: Cn, key: r },
                                        i().createElement(Tn, {
                                            type: t,
                                            mainValue: a,
                                            additionalValue: n,
                                            isOtherPlayer: e.root.get().isOtherPlayer,
                                        }),
                                    ),
                                ),
                            ),
                            i().createElement('div', { className: In }, i().createElement(hn, null)),
                            i().createElement(
                                'div',
                                { className: Sn },
                                r.map(({ type: t, mainValue: a, additionalValue: n }, r) =>
                                    i().createElement(
                                        'div',
                                        { className: Cn, key: r },
                                        i().createElement(Tn, {
                                            type: t,
                                            mainValue: a,
                                            additionalValue: n,
                                            isOtherPlayer: e.root.get().isOtherPlayer,
                                        }),
                                    ),
                                ),
                            ),
                        ),
                    );
                }),
                zn = 'Content_base_3e',
                Bn = 'Content_base__otherPlayer_61',
                Hn = 'Content_header_2d',
                Wn = 'Content_base__customizationMode_9d',
                $n = 'Content_statistic_6c',
                Vn = 'Content_playerInfo_62',
                Gn = (0, le.Pi)(() => {
                    const e = Ee().model.root.get(),
                        t = e.isWTREnabled,
                        a = e.isOtherPlayer,
                        n = e.isInCustomizationMode;
                    return i().createElement(
                        'div',
                        { className: l()(zn, a && Bn, n && Wn) },
                        i().createElement('div', { className: Hn }, i().createElement(Wt, { isWTREnabled: t })),
                        i().createElement('div', { className: $n }, i().createElement(xn, null)),
                        i().createElement(xt, null),
                        a && i().createElement('div', { className: Vn }, i().createElement(Ha, null)),
                    );
                }),
                Un = 'Error_base_e9',
                jn = 'Error_icon_51',
                Fn = 'Error_title_fe',
                Yn = 'Error_description_85',
                qn = 'Error_caption_74',
                Jn = R.strings.achievements_page.summary.disabled,
                Xn = (0, le.Pi)(() => {
                    const e = Ee().model.root.get().isOtherPlayer;
                    return i().createElement(
                        'div',
                        { className: Un },
                        i().createElement('div', { className: jn }),
                        e
                            ? i().createElement('div', { className: qn }, Jn.otherPlayer.caption())
                            : i().createElement(
                                  i().Fragment,
                                  null,
                                  i().createElement('div', { className: Fn }, Jn.title()),
                                  i().createElement('div', { className: Yn }, Jn.description()),
                              ),
                    );
                }),
                Kn = 'App_base_bb',
                Zn = 'App_base__withScroll_05',
                Qn = 'App_summary_5a',
                er = 'App_scroll_be',
                tr = 'App_scrollContent_2a',
                ar = 'App_bar_52',
                nr = 'App_content_13',
                rr = 'App_footer_b9',
                sr = 'App_footer__externalPaddings_e8',
                ir = 'App_base__customizationMode_f8',
                or = 'App_errorWrapper_65',
                lr = 'App_error_a2',
                cr = 'App_customizationModeOverlay_19',
                mr = R.strings.achievements_page.summary.accountInfo,
                ur = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
                dr = (0, le.Pi)(() => {
                    const e = Ee().model,
                        t = e.root.get(),
                        a = t.registrationDate,
                        n = t.lastVisitDate,
                        r = t.lastVisitTime,
                        s = t.isSummaryEnabled,
                        o = t.isOtherPlayer,
                        c = t.isInCustomizationMode,
                        m = c ? e.backgroundDraft.get() : e.background.get(),
                        u = (0, oe.O)(),
                        d = u.paddings,
                        g = u.externalPaddingsExisted,
                        _ = $(),
                        b = (0, E.useSpring)({
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                            config: { duration: 200, easing: ur },
                        }),
                        v = (0, ie.uF)(mr.registrationDate(), { registrationDate: a }),
                        f = (0, ie.uF)(mr.lastVisit(), { lastVisitDate: n, lastVisitTime: r }),
                        p = { '--external-paddings-bottom': `${d.bottom}rem` },
                        h = m ? { backgroundImage: `url(${m.image})` } : {};
                    return i().createElement(
                        E.animated.div,
                        { className: l()(Kn, o && s && Zn, c && ir), style: Object.assign({}, b, p, h) },
                        i().createElement('div', { className: cr }),
                        s
                            ? i().createElement(
                                  'div',
                                  { className: Qn },
                                  o
                                      ? i().createElement(
                                            i().Fragment,
                                            null,
                                            i().createElement(
                                                se.Vertical.Area,
                                                { api: _, className: er, classNames: { content: tr } },
                                                i().createElement(
                                                    'div',
                                                    { className: nr },
                                                    i().createElement(Gn, null),
                                                ),
                                            ),
                                            i().createElement(se.Vertical.Bar, { api: _, classNames: { base: ar } }),
                                        )
                                      : i().createElement(Gn, null),
                                  i().createElement(
                                      'div',
                                      { className: l()(rr, g && sr) },
                                      `${(0, ce.PI)(v)}${n && r ? (0, ce.PI)(f) : ''}`,
                                  ),
                              )
                            : i().createElement(
                                  'div',
                                  { className: or },
                                  i().createElement('div', { className: lr }, i().createElement(Xn, null)),
                              ),
                    );
                }),
                gr = () =>
                    i().createElement(pe, { options: { context: 'model.summaryModel' } }, i().createElement(dr, null));
        },
    },
]);
